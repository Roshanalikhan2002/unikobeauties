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
                  <div class="category-product-item" role="listitem" {{ block.shopify_attributes }}>
                    <a class="category-product-visual" href="{{ card_product.url }}" aria-label="{{ card_product.title | escape }}">
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
                    </a>
                    <div class="category-card-details">
                      <a class="category-card-product-title" href="{{ card_product.url }}">{{ card_product.title }}</a>
                      <div class="category-card-rating" role="img" aria-label="Rating {{ block.settings.rating | default: '5.0' }} out of 5 stars">
                        <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                        <span class="category-card-rating-value">{{ block.settings.rating | default: '5.0' }}</span>
                        {% if block.settings.review_count != blank %}
                          <span class="category-card-rating-count">({{ block.settings.review_count }})</span>
                        {% endif %}
                      </div>
                      {% if card_product.price > 0 %}
                        <p class="category-card-price-row">
                          <span class="category-card-price-now">{{ card_product.price | money }}</span>
                          {% if card_product.compare_at_price > card_product.price %}
                            <s class="category-card-price-was">{{ card_product.compare_at_price | money }}</s>
                          {% endif %}
                        </p>
                      {% endif %}
                      <a class="category-card-shop-btn" href="{{ card_product.url }}" data-i18n="shop_now">Shop now</a>
                    </div>
                  </div>
                {% endif %}
              {% when 'category' %}
            {% endcase %}
          {% endfor %}
          {% else %}
          {% assign default_product = all_products['aloe-vera-shampoo'] %}
          <div class="category-product-item" role="listitem">
            <a class="category-product-visual" href="{% if default_product != blank %}{{ default_product.url }}{% else %}/products/aloe-vera-shampoo{% endif %}" aria-label="{% if default_product != blank %}{{ default_product.title | escape }}{% else %}Aloe vera shampoo{% endif %}">
              <div class="category-card-media">
                {% if default_product != blank and default_product.featured_media %}
                  {% assign card_img_alt = default_product.featured_media.alt | default: default_product.title | escape %}
                  {{ default_product.featured_media | image_url: width: 900 | image_tag: class: 'category-card-img', loading: 'lazy', widths: '280,560,900', sizes: '280px', alt: card_img_alt }}
                {% else %}
                  <img class="category-card-img" src="{{ 'uniko-aloe-vera-shampoo-studio.jpg' | asset_img_url: 'master' }}" alt="Aloe Vera Shampoo" width="560" height="700" loading="lazy" decoding="async">
                {% endif %}
              </div>
            </a>
            <div class="category-card-details">
              {% if default_product != blank %}
                <a class="category-card-product-title" href="{{ default_product.url }}">{{ default_product.title }}</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                {% if default_product.price > 0 %}
                  <p class="category-card-price-row">
                    <span class="category-card-price-now">{{ default_product.price | money }}</span>
                    {% if default_product.compare_at_price > default_product.price %}
                      <s class="category-card-price-was">{{ default_product.compare_at_price | money }}</s>
                    {% endif %}
                  </p>
                {% endif %}
                <a class="category-card-shop-btn" href="{{ default_product.url }}" data-i18n="shop_now">Shop now</a>
              {% else %}
                <a class="category-card-product-title" href="/products/aloe-vera-shampoo">Aloe vera shampoo</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                <a class="category-card-shop-btn" href="/products/aloe-vera-shampoo" data-i18n="shop_now">Shop now</a>
              {% endif %}
            </div>
          </div>
          {% assign spray_product = all_products['xtremely-pretty-spray'] %}
          <div class="category-product-item" role="listitem">
            <a class="category-product-visual" href="{% if spray_product != blank %}{{ spray_product.url }}{% else %}/products/xtremely-pretty-spray{% endif %}" aria-label="{% if spray_product != blank %}{{ spray_product.title | escape }}{% else %}Xtremely Pretty Spray{% endif %}">
              <div class="category-card-media">
                {% if spray_product != blank and spray_product.featured_media %}
                  {% assign spray_img_alt = spray_product.featured_media.alt | default: spray_product.title | escape %}
                  {{ spray_product.featured_media | image_url: width: 900 | image_tag: class: 'category-card-img', loading: 'lazy', widths: '280,560,900', sizes: '280px', alt: spray_img_alt }}
                {% endif %}
              </div>
            </a>
            <div class="category-card-details">
              {% if spray_product != blank %}
                <a class="category-card-product-title" href="{{ spray_product.url }}">{{ spray_product.title }}</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                {% if spray_product.price > 0 %}
                  <p class="category-card-price-row">
                    <span class="category-card-price-now">{{ spray_product.price | money }}</span>
                    {% if spray_product.compare_at_price > spray_product.price %}
                      <s class="category-card-price-was">{{ spray_product.compare_at_price | money }}</s>
                    {% endif %}
                  </p>
                {% endif %}
                <a class="category-card-shop-btn" href="{{ spray_product.url }}" data-i18n="shop_now">Shop now</a>
              {% else %}
                <a class="category-card-product-title" href="/products/xtremely-pretty-spray">Xtremely Pretty Spray</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                <a class="category-card-shop-btn" href="/products/xtremely-pretty-spray" data-i18n="shop_now">Shop now</a>
              {% endif %}
            </div>
          </div>
          {% assign milk_product = all_products['hair-milk'] %}
          <div class="category-product-item" role="listitem">
            <a class="category-product-visual" href="{% if milk_product != blank %}{{ milk_product.url }}{% else %}/products/hair-milk{% endif %}" aria-label="{% if milk_product != blank %}{{ milk_product.title | escape }}{% else %}Hair Milk Goldy Treasure{% endif %}">
              <div class="category-card-media">
                {% if milk_product != blank and milk_product.featured_media %}
                  {% assign milk_img_alt = milk_product.featured_media.alt | default: milk_product.title | escape %}
                  {{ milk_product.featured_media | image_url: width: 900 | image_tag: class: 'category-card-img', loading: 'lazy', widths: '280,560,900', sizes: '280px', alt: milk_img_alt }}
                {% endif %}
              </div>
            </a>
            <div class="category-card-details">
              {% if milk_product != blank %}
                <a class="category-card-product-title" href="{{ milk_product.url }}">{{ milk_product.title }}</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                {% if milk_product.price > 0 %}
                  <p class="category-card-price-row">
                    <span class="category-card-price-now">{{ milk_product.price | money }}</span>
                    {% if milk_product.compare_at_price > milk_product.price %}
                      <s class="category-card-price-was">{{ milk_product.compare_at_price | money }}</s>
                    {% endif %}
                  </p>
                {% endif %}
                <a class="category-card-shop-btn" href="{{ milk_product.url }}" data-i18n="shop_now">Shop now</a>
              {% else %}
                <a class="category-card-product-title" href="/products/hair-milk">Hair Milk Goldy Treasure</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                <a class="category-card-shop-btn" href="/products/hair-milk" data-i18n="shop_now">Shop now</a>
              {% endif %}
            </div>
          </div>
          {% assign mask_product = all_products['mask-pouss-2-in-1'] %}
          <div class="category-product-item" role="listitem">
            <a class="category-product-visual" href="{% if mask_product != blank %}{{ mask_product.url }}{% else %}/products/mask-pouss-2-in-1{% endif %}" aria-label="{% if mask_product != blank %}{{ mask_product.title | escape }}{% else %}Mask Pouss+ 2 in 1{% endif %}">
              <div class="category-card-media">
                {% if mask_product != blank and mask_product.featured_media %}
                  {% assign mask_img_alt = mask_product.featured_media.alt | default: mask_product.title | escape %}
                  {{ mask_product.featured_media | image_url: width: 900 | image_tag: class: 'category-card-img', loading: 'lazy', widths: '280,560,900', sizes: '280px', alt: mask_img_alt }}
                {% endif %}
              </div>
            </a>
            <div class="category-card-details">
              {% if mask_product != blank %}
                <a class="category-card-product-title" href="{{ mask_product.url }}">{{ mask_product.title }}</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                {% if mask_product.price > 0 %}
                  <p class="category-card-price-row">
                    <span class="category-card-price-now">{{ mask_product.price | money }}</span>
                    {% if mask_product.compare_at_price > mask_product.price %}
                      <s class="category-card-price-was">{{ mask_product.compare_at_price | money }}</s>
                    {% endif %}
                  </p>
                {% endif %}
                <a class="category-card-shop-btn" href="{{ mask_product.url }}" data-i18n="shop_now">Shop now</a>
              {% else %}
                <a class="category-card-product-title" href="/products/mask-pouss-2-in-1">Mask Pouss+ 2 in 1</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                <a class="category-card-shop-btn" href="/products/mask-pouss-2-in-1" data-i18n="shop_now">Shop now</a>
              {% endif %}
            </div>
          </div>
          {% assign det_product = all_products['detangling-cream'] %}
          <div class="category-product-item" role="listitem">
            <a class="category-product-visual" href="{% if det_product != blank %}{{ det_product.url }}{% else %}/products/detangling-cream{% endif %}" aria-label="{% if det_product != blank %}{{ det_product.title | escape }}{% else %}Detangling cream{% endif %}">
              <div class="category-card-media">
                {% if det_product != blank and det_product.featured_media %}
                  {% assign det_img_alt = det_product.featured_media.alt | default: det_product.title | escape %}
                  {{ det_product.featured_media | image_url: width: 900 | image_tag: class: 'category-card-img', loading: 'lazy', widths: '280,560,900', sizes: '280px', alt: det_img_alt }}
                {% endif %}
              </div>
            </a>
            <div class="category-card-details">
              {% if det_product != blank %}
                <a class="category-card-product-title" href="{{ det_product.url }}">{{ det_product.title }}</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                {% if det_product.price > 0 %}
                  <p class="category-card-price-row">
                    <span class="category-card-price-now">{{ det_product.price | money }}</span>
                    {% if det_product.compare_at_price > det_product.price %}
                      <s class="category-card-price-was">{{ det_product.compare_at_price | money }}</s>
                    {% endif %}
                  </p>
                {% endif %}
                <a class="category-card-shop-btn" href="{{ det_product.url }}" data-i18n="shop_now">Shop now</a>
              {% else %}
                <a class="category-card-product-title" href="/products/detangling-cream">Detangling cream</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                <a class="category-card-shop-btn" href="/products/detangling-cream" data-i18n="shop_now">Shop now</a>
              {% endif %}
            </div>
          </div>
          {% assign queeny_product = all_products['queeny-lotion'] %}
          <div class="category-product-item" role="listitem">
            <a class="category-product-visual" href="{% if queeny_product != blank %}{{ queeny_product.url }}{% else %}/products/queeny-lotion{% endif %}" aria-label="{% if queeny_product != blank %}{{ queeny_product.title | escape }}{% else %}Queeny Lotion{% endif %}">
              <div class="category-card-media">
                {% if queeny_product != blank and queeny_product.featured_media %}
                  {% assign queeny_img_alt = queeny_product.featured_media.alt | default: queeny_product.title | escape %}
                  {{ queeny_product.featured_media | image_url: width: 900 | image_tag: class: 'category-card-img', loading: 'lazy', widths: '280,560,900', sizes: '280px', alt: queeny_img_alt }}
                {% endif %}
              </div>
            </a>
            <div class="category-card-details">
              {% if queeny_product != blank %}
                <a class="category-card-product-title" href="{{ queeny_product.url }}">{{ queeny_product.title }}</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                {% if queeny_product.price > 0 %}
                  <p class="category-card-price-row">
                    <span class="category-card-price-now">{{ queeny_product.price | money }}</span>
                    {% if queeny_product.compare_at_price > queeny_product.price %}
                      <s class="category-card-price-was">{{ queeny_product.compare_at_price | money }}</s>
                    {% endif %}
                  </p>
                {% endif %}
                <a class="category-card-shop-btn" href="{{ queeny_product.url }}" data-i18n="shop_now">Shop now</a>
              {% else %}
                <a class="category-card-product-title" href="/products/queeny-lotion">Queeny Lotion</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                <a class="category-card-shop-btn" href="/products/queeny-lotion" data-i18n="shop_now">Shop now</a>
              {% endif %}
            </div>
          </div>
          {% assign yiri_product = all_products['yiri-soap'] %}
          <div class="category-product-item" role="listitem">
            <a class="category-product-visual" href="{% if yiri_product != blank %}{{ yiri_product.url }}{% else %}/products/yiri-soap{% endif %}" aria-label="{% if yiri_product != blank %}{{ yiri_product.title | escape }}{% else %}YIRI Soap{% endif %}">
              <div class="category-card-media">
                {% if yiri_product != blank and yiri_product.featured_media %}
                  {% assign yiri_img_alt = yiri_product.featured_media.alt | default: yiri_product.title | escape %}
                  {{ yiri_product.featured_media | image_url: width: 900 | image_tag: class: 'category-card-img', loading: 'lazy', widths: '280,560,900', sizes: '280px', alt: yiri_img_alt }}
                {% endif %}
              </div>
            </a>
            <div class="category-card-details">
              {% if yiri_product != blank %}
                <a class="category-card-product-title" href="{{ yiri_product.url }}">{{ yiri_product.title }}</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                {% if yiri_product.price > 0 %}
                  <p class="category-card-price-row">
                    <span class="category-card-price-now">{{ yiri_product.price | money }}</span>
                    {% if yiri_product.compare_at_price > yiri_product.price %}
                      <s class="category-card-price-was">{{ yiri_product.compare_at_price | money }}</s>
                    {% endif %}
                  </p>
                {% endif %}
                <a class="category-card-shop-btn" href="{{ yiri_product.url }}" data-i18n="shop_now">Shop now</a>
              {% else %}
                <a class="category-card-product-title" href="/products/yiri-soap">YIRI Soap</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                <a class="category-card-shop-btn" href="/products/yiri-soap" data-i18n="shop_now">Shop now</a>
              {% endif %}
            </div>
          </div>
          {% assign facial_product = all_products['facial-spray'] %}
          <div class="category-product-item" role="listitem">
            <a class="category-product-visual" href="{% if facial_product != blank %}{{ facial_product.url }}{% else %}/products/facial-spray{% endif %}" aria-label="{% if facial_product != blank %}{{ facial_product.title | escape }}{% else %}Facial Spray{% endif %}">
              <div class="category-card-media">
                {% if facial_product != blank and facial_product.featured_media %}
                  {% assign facial_img_alt = facial_product.featured_media.alt | default: facial_product.title | escape %}
                  {{ facial_product.featured_media | image_url: width: 900 | image_tag: class: 'category-card-img', loading: 'lazy', widths: '280,560,900', sizes: '280px', alt: facial_img_alt }}
                {% endif %}
              </div>
            </a>
            <div class="category-card-details">
              {% if facial_product != blank %}
                <a class="category-card-product-title" href="{{ facial_product.url }}">{{ facial_product.title }}</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                {% if facial_product.price > 0 %}
                  <p class="category-card-price-row">
                    <span class="category-card-price-now">{{ facial_product.price | money }}</span>
                    {% if facial_product.compare_at_price > facial_product.price %}
                      <s class="category-card-price-was">{{ facial_product.compare_at_price | money }}</s>
                    {% endif %}
                  </p>
                {% endif %}
                <a class="category-card-shop-btn" href="{{ facial_product.url }}" data-i18n="shop_now">Shop now</a>
              {% else %}
                <a class="category-card-product-title" href="/products/facial-spray">Facial Spray</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                <a class="category-card-shop-btn" href="/products/facial-spray" data-i18n="shop_now">Shop now</a>
              {% endif %}
            </div>
          </div>
          {% assign rajel_product = all_products['rajel-beard-spray'] %}
          <div class="category-product-item" role="listitem">
            <a class="category-product-visual" href="{% if rajel_product != blank %}{{ rajel_product.url }}{% else %}/products/rajel-beard-spray{% endif %}" aria-label="{% if rajel_product != blank %}{{ rajel_product.title | escape }}{% else %}Rajel Beard Spray{% endif %}">
              <div class="category-card-media">
                {% if rajel_product != blank and rajel_product.featured_media %}
                  {% assign rajel_img_alt = rajel_product.featured_media.alt | default: rajel_product.title | escape %}
                  {{ rajel_product.featured_media | image_url: width: 900 | image_tag: class: 'category-card-img', loading: 'lazy', widths: '280,560,900', sizes: '280px', alt: rajel_img_alt }}
                {% endif %}
              </div>
            </a>
            <div class="category-card-details">
              {% if rajel_product != blank %}
                <a class="category-card-product-title" href="{{ rajel_product.url }}">{{ rajel_product.title }}</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                {% if rajel_product.price > 0 %}
                  <p class="category-card-price-row">
                    <span class="category-card-price-now">{{ rajel_product.price | money }}</span>
                    {% if rajel_product.compare_at_price > rajel_product.price %}
                      <s class="category-card-price-was">{{ rajel_product.compare_at_price | money }}</s>
                    {% endif %}
                  </p>
                {% endif %}
                <a class="category-card-shop-btn" href="{{ rajel_product.url }}" data-i18n="shop_now">Shop now</a>
              {% else %}
                <a class="category-card-product-title" href="/products/rajel-beard-spray">Rajel Beard Spray</a>
                <div class="category-card-rating" role="img" aria-label="Rating 5.0 out of 5 stars">
                  <span class="category-card-stars" aria-hidden="true">★★★★★</span>
                  <span class="category-card-rating-value">5.0</span>
                </div>
                <a class="category-card-shop-btn" href="/products/rajel-beard-spray" data-i18n="shop_now">Shop now</a>
              {% endif %}
            </div>
          </div>
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
        },
        {
          "type": "text",
          "id": "rating",
          "label": "Star rating",
          "default": "5.0"
        },
        {
          "type": "text",
          "id": "review_count",
          "label": "Review count (optional)",
          "info": "Example: 128"
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
        { "type": "product" }
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
  {%- liquid
    assign brand_name = 'Uniko Beauties'
    if template.name == 'index' or page_title == blank or page_title == shop.name or page_title == 'My Store'
      assign tab_title = brand_name
    else
      assign tab_title = page_title | replace: 'My Store', brand_name | append: ' | ' | append: brand_name
    endif
  -%}
  <title>{{ tab_title }}</title>
  {{ content_for_header }}
  <link rel="icon" type="image/png" href="{{ 'uniko-brand-logo.png' | asset_url }}">
  <link rel="shortcut icon" type="image/png" href="{{ 'uniko-brand-logo.png' | asset_url }}">
  <link rel="apple-touch-icon" href="{{ 'uniko-brand-logo.png' | asset_url }}">
  {{ 'uniko.css' | asset_url | stylesheet_tag }}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body class="uniko-body">
  {{ content_for_layout }}
  <script src="{{ 'uniko-i18n.js' | asset_url }}" defer></script>
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
    "header": {
      "type": "uniko-site-header",
      "settings": {}
    },
    "main": {
      "type": "uniko-product",
      "settings": {
        "content_profile": "aloe"
      }
    },
    "footer": {
      "type": "uniko-site-footer",
      "settings": {}
    }
  },
  "order": ["header", "main", "footer"]
}
"""
    (ROOT / "templates" / "product.json").write_text(product_template, encoding="utf-8")
    extra_uniko = ROOT / "templates" / "product.uniko.json"
    if extra_uniko.is_file():
        extra_uniko.unlink()
    # Product-specific templates (do not overwrite on every build if missing)
    for name, profile, label in (
        ("product.aloe-vera-shampoo.json", "aloe", "Aloe vera shampoo"),
        ("product.xtremely-pretty-spray.json", "spray", "Xtremely Pretty Spray"),
        ("product.hair-milk.json", "hair_milk", "Hair Milk Goldy Treasure"),
        ("product.mask-pouss-2-in-1.json", "mask_pouss", "Mask Pouss+ 2 in 1"),
        ("product.detangling-cream.json", "detangling", "Detangling cream"),
        ("product.queeny-lotion.json", "queeny", "Queeny Lotion"),
        ("product.yiri-soap.json", "yiri", "YIRI Soap"),
        ("product.facial-spray.json", "facial_spray", "Facial Spray"),
        ("product.rajel-beard-spray.json", "rajel", "Rajel Beard Spray"),
    ):
        path = ROOT / "templates" / name
        if not path.is_file():
            path.write_text(
                product_template.replace("Uniko product (default)", label).replace(
                    '"content_profile": "aloe"', f'"content_profile": "{profile}"'
                ),
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