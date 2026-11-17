"""Generate Shopify theme files from index.html for GitHub + Shopify connect."""
from __future__ import annotations

import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def image_rel_to_flat(rel: str) -> str:
    """Shopify assets/ must be flat — no subfolders on the store."""
    return "uniko-" + rel.replace("/", "-")


def copy_flat_theme_assets() -> dict[str, str]:
    """Copy images/ into flat assets/uniko-* files; return rel -> flat name."""
    mapping: dict[str, str] = {}
    assets_dir = ROOT / "assets"
    assets_dir.mkdir(exist_ok=True)

    nested = assets_dir / "images"
    if nested.exists():
        shutil.rmtree(nested)

    src_images = ROOT / "images"
    if not src_images.is_dir():
        return mapping

    for path in src_images.rglob("*"):
        if not path.is_file():
            continue
        rel = path.relative_to(src_images).as_posix()
        flat = image_rel_to_flat(rel)
        shutil.copy2(path, assets_dir / flat)
        mapping[rel] = flat

    return mapping


def liquid_src(rel: str, mapping: dict[str, str]) -> str:
    flat = mapping[rel]
    return f'src="{{{{ \'{flat}\' | asset_img_url: \'master\' }}}}"'


def liquid_css_url(rel: str, mapping: dict[str, str]) -> str:
    flat = mapping[rel]
    return f"url({{{{ '{flat}' | asset_url }}}})"


def main() -> None:
    html = (ROOT / "index.html").read_text(encoding="utf-8")

    style_match = re.search(r"<style>(.*?)</style>", html, re.DOTALL)
    if not style_match:
        raise SystemExit("No <style> block found in index.html")
    css = style_match.group(1).strip()

    body_match = re.search(r"<body>(.*?)</body>", html, re.DOTALL)
    if not body_match:
        raise SystemExit("No <body> found in index.html")
    body = body_match.group(1).strip()

    mapping = copy_flat_theme_assets()

    def replace_img_src(match: re.Match[str]) -> str:
        rel = match.group(1)
        if rel not in mapping:
            raise SystemExit(f"Missing theme asset for images/{rel}")
        return liquid_src(rel, mapping)

    def replace_css_url(match: re.Match[str]) -> str:
        rel = match.group(1)
        if rel not in mapping:
            raise SystemExit(f"Missing theme asset for images/{rel}")
        return liquid_css_url(rel, mapping)

    body = re.sub(r'src="images/([^"]+)"', replace_img_src, body)
    body = re.sub(r"url\('images/([^']+)'\)", replace_css_url, body)

    body = body.replace(
        'src="assets/uniko-i18n.js"',
        "src=\"{{ 'uniko-i18n.js' | asset_url }}\"",
    )

    (ROOT / "assets" / "uniko.css").write_text(css + "\n", encoding="utf-8")

    (ROOT / "layout").mkdir(exist_ok=True)
    (ROOT / "config").mkdir(exist_ok=True)
    (ROOT / "templates").mkdir(exist_ok=True)
    (ROOT / "sections").mkdir(exist_ok=True)
    (ROOT / "locales").mkdir(exist_ok=True)

    (ROOT / "layout" / "theme.liquid").write_text(
        """<!doctype html>
<html lang="en" dir="ltr" translate="no">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="content-language" content="en">
  <meta name="language" content="English">
  <meta name="google" content="notranslate">
  <title>{{ page_title }}</title>
  {{ content_for_header }}
  {{ 'uniko.css' | asset_url | stylesheet_tag }}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body class="uniko-body">
  {{ content_for_layout }}
</body>
</html>
""",
        encoding="utf-8",
    )

    liquid = "{% comment %}Auto-generated from index.html — run build-shopify-theme.py after edits{% endcomment %}\n"
    liquid += body + "\n"
    liquid += """{% schema %}
{
  "name": "Uniko homepage",
  "tag": "section",
  "class": "uniko-homepage",
  "settings": [],
  "presets": [{ "name": "Page d'accueil Uniko" }]
}
{% endschema %}
"""
    (ROOT / "sections" / "uniko-homepage.liquid").write_text(liquid, encoding="utf-8")

    product_section = (ROOT / "sections" / "uniko-product.liquid")
    if not product_section.is_file():
        raise SystemExit("Missing sections/uniko-product.liquid")

    (ROOT / "templates" / "product.json").write_text(
        """{
  "sections": {
    "main": {
      "type": "uniko-product",
      "settings": {}
    }
  },
  "order": ["main"]
}
""",
        encoding="utf-8",
    )

    (ROOT / "templates" / "index.json").write_text(
        """{
  "sections": {
    "uniko_homepage": {
      "type": "uniko-homepage",
      "settings": {}
    }
  },
  "order": ["uniko_homepage"]
}
""",
        encoding="utf-8",
    )

    (ROOT / "config" / "settings_schema.json").write_text(
        """[
  {
    "name": "theme_info",
    "theme_name": "Uniko Beauties",
    "theme_version": "1.4.0",
    "theme_author": "Uniko Beauties",
    "theme_documentation_url": "https://github.com/Roshanalikhan2002/unikobeauties",
    "theme_support_url": "https://github.com/Roshanalikhan2002/unikobeauties/issues"
  }
]
""",
        encoding="utf-8",
    )

    (ROOT / "config" / "settings_data.json").write_text("{}\n", encoding="utf-8")

    (ROOT / "locales" / "en.default.json").write_text(
        """{
  "general": {
    "accessibility": {
      "skip_to_content": "Skip to content"
    }
  }
}
""",
        encoding="utf-8",
    )

    print(f"Shopify theme files updated ({len(mapping)} flat assets).")


if __name__ == "__main__":
    main()