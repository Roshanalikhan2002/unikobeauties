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


CATEGORY_TRACK_LIQUID = """
          {% if section.blocks.size > 0 %}
          {% for block in section.blocks %}
            {% case block.type %}
              {% when 'product' %}
                {% assign card_product = block.settings.product %}
                {% if card_product != blank %}
                  <a
                    class="category-card category-card--product"
                    href="{{ card_product.url }}"
                    role="listitem"
                    {{ block.shopify_attributes }}
                  >
                    <div class="category-card-media">
                      {% if card_product.featured_media %}
                        {% assign card_img_alt = card_product.featured_media.alt | default: card_product.title | escape %}
                        {{
                          card_product.featured_media
                          | image_url: width: 900
                          | image_tag:
                            class: 'category-card-img',
                            loading: 'lazy',
                            widths: '280,560,900',
                            sizes: '280px',
                            alt: card_img_alt
                        }}
                      {% endif %}
                    </div>
                    <div class="category-card-caption">
                      <span>{{ card_product.title }}</span>
                      {% if card_product.price > 0 %}
                        <p class="category-card-price">{{ card_product.price | money }}</p>
                      {% endif %}
                    </div>
                  </a>
                {% endif %}
              {% when 'category' %}
                <a
                  class="category-card{% if block.settings.image != blank %} category-card--has-image{% endif %}"
                  href="{{ block.settings.link | default: '#' }}"
                  role="listitem"
                  {{ block.shopify_attributes }}
                >
                  <div class="category-card-media">
                    {% if block.settings.image != blank %}
                      {{
                        block.settings.image
                        | image_url: width: 900
                        | image_tag:
                          class: 'category-card-img',
                          loading: 'lazy',
                          widths: '280,560,900',
                          sizes: '280px',
                          alt: block.settings.label
                      }}
                    {% endif %}
                  </div>
                  {% if block.settings.show_price and block.settings.product != blank %}
                    {% assign cat_product = block.settings.product %}
                    <div class="category-card-caption">
                      <span>{{ block.settings.label }}</span>
                      {% if cat_product.price > 0 %}
                        <p class="category-card-price">{{ cat_product.price | money }}</p>
                      {% endif %}
                    </div>
                  {% else %}
                    <span>{{ block.settings.label }}</span>
                  {% endif %}
                </a>
            {% endcase %}
          {% endfor %}
          {% else %}
          {% assign default_product = all_products['aloe-vera-shampoo'] %}
          <a class="category-card category-card--product" href="{% if default_product != blank %}{{ default_product.url }}{% else %}/products/aloe-vera-shampoo{% endif %}" role="listitem">
            <div class="category-card-media">
              {% if default_product != blank and default_product.featured_media %}
                {% assign card_img_alt = default_product.featured_media.alt | default: default_product.title | escape %}
                {{ default_product.featured_media | image_url: width: 900 | image_tag: class: 'category-card-img', loading: 'lazy', widths: '280,560,900', sizes: '280px', alt: card_img_alt }}
              {% else %}
                <img class="category-card-img" src="{{ 'uniko-aloe-vera-shampoo-studio.jpg' | asset_img_url: 'master' }}" alt="Aloe Vera Shampoo" width="560" height="700" loading="lazy" decoding="async">
              {% endif %}
            </div>
            <div class="category-card-caption">
              {% if default_product != blank %}
                <span>{{ default_product.title }}</span>
                {% if default_product.price > 0 %}
                  <p class="category-card-price">{{ default_product.price | money }}</p>
                {% endif %}
              {% else %}
                <span>Aloe vera shampoo</span>
              {% endif %}
            </div>
          </a>
          <a class="category-card" href="#yeux" role="listitem">
            <div class="category-card-media"><img class="category-card-img" src="{{ 'uniko-review-videos-03.jpg' | asset_img_url: 'master' }}" alt="" width="560" height="700" loading="lazy"></div>
            <span data-i18n="cat_eyes">Eyes</span>
          </a>
          <a class="category-card" href="#levres" role="listitem">
            <div class="category-card-media"><img class="category-card-img" src="{{ 'uniko-review-videos-04.jpg' | asset_img_url: 'master' }}" alt="" width="560" height="700" loading="lazy"></div>
            <span data-i18n="cat_lips">Lips</span>
          </a>
          <a class="category-card" href="#peau" role="listitem">
            <div class="category-card-media"><img class="category-card-img" src="{{ 'uniko-sustainability-impact-hd.jpg' | asset_img_url: 'master' }}" alt="" width="560" height="700" loading="lazy"></div>
            <span data-i18n="cat_skin">Skin</span>
          </a>
          <a class="category-card" href="#soins" role="listitem">
            <div class="category-card-media"><img class="category-card-img" src="{{ 'uniko-review-videos-05.jpg' | asset_img_url: 'master' }}" alt="" width="560" height="700" loading="lazy"></div>
            <span data-i18n="cat_skincare">Skincare</span>
          </a>
          <a class="category-card" href="#maquillage" role="listitem">
            <div class="category-card-media"><img class="category-card-img" src="{{ 'uniko-review-videos-02.jpg' | asset_img_url: 'master' }}" alt="" width="560" height="700" loading="lazy"></div>
            <span data-i18n="cat_makeup">Makeup</span>
          </a>
          <a class="category-card" href="#corps" role="listitem">
            <div class="category-card-media"><img class="category-card-img" src="{{ 'uniko-hero-banner.jpg' | asset_img_url: 'master' }}" alt="" width="560" height="700" loading="lazy"></div>
            <span data-i18n="cat_body">Body</span>
          </a>
          <a class="category-card" href="#cheveux" role="listitem">
            <div class="category-card-media"><img class="category-card-img" src="{{ 'uniko-review-videos-03.jpg' | asset_img_url: 'master' }}" alt="" width="560" height="700" loading="lazy"></div>
            <span data-i18n="cat_hair">Hair</span>
          </a>
          <a class="category-card" href="#nouveautes" role="listitem">
            <div class="category-card-media"><img class="category-card-img" src="{{ 'uniko-review-videos-04.jpg' | asset_img_url: 'master' }}" alt="" width="560" height="700" loading="lazy"></div>
            <span data-i18n="cat_new">New</span>
          </a>
          <a class="category-card" href="#meilleures-ventes" role="listitem">
            <div class="category-card-media"><img class="category-card-img" src="{{ 'uniko-review-videos-01.jpg' | asset_img_url: 'master' }}" alt="" width="560" height="700" loading="lazy"></div>
            <span data-i18n="cat_bestsellers">Bestsellers</span>
          </a>
          {% endif %}
""".strip()


HOMEPAGE_SCHEMA = """{% schema %}
{
  "name": "Uniko homepage",
  "tag": "section",
  "class": "uniko-homepage",
  "settings": [
    {
      "type": "text",
      "id": "category_heading",
      "label": "Category row heading",
      "default": "Shop by category"
    }
  ],
  "blocks": [
    {
      "type": "product",
      "name": "Product card",
      "settings": [
        {
          "type": "product",
          "id": "product",
          "label": "Product"
        }
      ]
    },
    {
      "type": "category",
      "name": "Category card",
      "settings": [
        {
          "type": "text",
          "id": "label",
          "label": "Label",
          "default": "Category"
        },
        {
          "type": "url",
          "id": "link",
          "label": "Link"
        },
        {
          "type": "image_picker",
          "id": "image",
          "label": "Image"
        },
        {
          "type": "product",
          "id": "product",
          "label": "Product (optional, for price)"
        },
        {
          "type": "checkbox",
          "id": "show_price",
          "label": "Show product price",
          "default": false
        }
      ]
    }
  ],
  "max_blocks": 24,
  "presets": [
    {
      "name": "Page d'accueil Uniko",
      "blocks": [
        { "type": "product" },
        { "type": "category" },
        { "type": "category" },
        { "type": "category" }
      ]
    }
  ]
}
{% endschema %}
"""


def inject_category_track(body: str) -> str:
    pattern = r"<!-- @shopify-category-track -->.*?<!-- @end-shopify-category-track -->"
    if not re.search(pattern, body, flags=re.DOTALL):
        raise SystemExit("Missing @shopify-category-track markers in index.html")
    return re.sub(pattern, CATEGORY_TRACK_LIQUID, body, count=1, flags=re.DOTALL)


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

    body = inject_category_track(body)
    body = body.replace(
        '<h2 id="category-title" data-i18n="category_title">Shop by category</h2>',
        '<h2 id="category-title" data-i18n="category_title">{{ section.settings.category_heading }}</h2>',
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
    liquid += HOMEPAGE_SCHEMA + "\n"
    (ROOT / "sections" / "uniko-homepage.liquid").write_text(liquid, encoding="utf-8")

    product_section = (ROOT / "sections" / "uniko-product.liquid")
    if not product_section.is_file():
        raise SystemExit("Missing sections/uniko-product.liquid")

    product_template = """{
  "name": "Uniko product (default)",
  "sections": {
    "main": {
      "type": "uniko-product",
      "settings": {}
    }
  },
  "order": ["main"]
}
"""
    (ROOT / "templates" / "product.json").write_text(product_template, encoding="utf-8")
    (ROOT / "templates" / "product.uniko.json").write_text(
        product_template.replace("Uniko product (default)", "Uniko product"),
        encoding="utf-8",
    )

    index_json = ROOT / "templates" / "index.json"
    if not index_json.is_file():
        index_json.write_text(
            """{
  "sections": {
    "uniko_homepage": {
      "type": "uniko-homepage",
      "settings": {
        "category_heading": "Shop by category"
      },
      "blocks": {},
      "block_order": []
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

    settings_data = ROOT / "config" / "settings_data.json"
    if not settings_data.is_file():
        settings_data.write_text("{}\n", encoding="utf-8")

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