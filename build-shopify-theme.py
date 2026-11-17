"""Generate Shopify theme files from index.html for GitHub + Shopify connect."""
from __future__ import annotations

import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent


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

    def asset_url(m: re.Match[str]) -> str:
        path = m.group(1)
        return f'src="{{{{ \'{path}\' | asset_url }}}}"'

    body = re.sub(r'src="images/([^"]+)"', asset_url, body)

    assets_dir = ROOT / "assets"
    assets_dir.mkdir(exist_ok=True)
    (assets_dir / "uniko.css").write_text(css + "\n", encoding="utf-8")

    src_images = ROOT / "images"
    dest_images = assets_dir / "images"
    if src_images.is_dir():
        if dest_images.exists():
            shutil.rmtree(dest_images)
        shutil.copytree(src_images, dest_images)

    (ROOT / "layout").mkdir(exist_ok=True)
    (ROOT / "config").mkdir(exist_ok=True)
    (ROOT / "templates").mkdir(exist_ok=True)
    (ROOT / "sections").mkdir(exist_ok=True)
    (ROOT / "locales").mkdir(exist_ok=True)

    (ROOT / "layout" / "theme.liquid").write_text(
        """<!doctype html>
<html lang="{{ request.locale.iso_code }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{ page_title }}</title>
  {{ content_for_header }}
  {{ 'uniko.css' | asset_url | stylesheet_tag }}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
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
  "name": "Page d'accueil Uniko",
  "tag": "section",
  "class": "uniko-homepage",
  "settings": [],
  "presets": [{ "name": "Page d'accueil Uniko" }]
}
{% endschema %}
"""
    (ROOT / "sections" / "uniko-homepage.liquid").write_text(liquid, encoding="utf-8")

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
    "theme_version": "1.0.0",
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

    print("Shopify theme files updated.")


if __name__ == "__main__":
    main()