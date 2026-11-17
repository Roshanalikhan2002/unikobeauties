"""Add data-i18n hooks to index.html for site language switch."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
path = ROOT / "index.html"
text = path.read_text(encoding="utf-8")

text = text.replace("<html lang=\"en\">", '<html lang="en" translate="no">', 1)

pairs = [
    (
        '<div class="promo-bar" role="region" aria-label="Free delivery">\n    Free delivery on orders over&nbsp;€95\n  </div>',
        '<div class="promo-bar" role="region" data-i18n-aria="promo_aria" data-i18n="promo">Free delivery on orders over&nbsp;€95</div>',
    ),
    (
        '        Rewards\n      </a>',
        '        <span data-i18n="rewards">Rewards</span>\n      </a>',
    ),
    (
        '        <nav class="lang-switch" aria-label="Site language">\n          <a href="#accueil" hreflang="en" lang="en" aria-current="true" title="English">EN</a>\n          <span aria-hidden="true">·</span>\n          <a href="#" data-translate-lang="fr" hreflang="fr" lang="fr" title="Français">FR</a>\n        </nav>',
        '        <nav class="lang-switch" aria-label="Site language">\n          <button type="button" class="lang-set" data-set-lang="en" hreflang="en" lang="en" aria-current="true" title="English">EN</button>\n          <span aria-hidden="true">·</span>\n          <button type="button" class="lang-set" data-set-lang="fr" hreflang="fr" lang="fr" title="Français">FR</button>\n        </nav>',
    ),
    ('<h2 id="category-title">Shop by category</h2>', '<h2 id="category-title" data-i18n="category_title">Shop by category</h2>'),
    ('<h2 class="trust-title" id="trust-title">The world\'s most certified beauty brand</h2>',
     '<h2 class="trust-title" id="trust-title" data-i18n="trust_title">The world\'s most certified beauty brand</h2>'),
    ('<p class="impact-eyebrow" id="impact-eyebrow">Sustainability impact</p>', '<p class="impact-eyebrow" id="impact-eyebrow" data-i18n="impact_eyebrow">Sustainability impact</p>'),
    ('<h2 class="impact-title">The world\'s first plastic-neutral makeup brand</h2>', '<h2 class="impact-title" data-i18n="impact_title">The world\'s first plastic-neutral makeup brand</h2>'),
    ('<p class="impact-text">Our products use only the purest 100% natural ingredients with proven results. We lead the way in sustainable beauty with eco-friendly packaging and a real fight against the plastic crisis.</p>', '<p class="impact-text" data-i18n="impact_text">Our products use only the purest 100% natural ingredients with proven results. We lead the way in sustainable beauty with eco-friendly packaging and a real fight against the plastic crisis.</p>'),
    ('<a class="btn-impact" href="#a-propos">Learn more</a>', '<a class="btn-impact" href="#a-propos" data-i18n="learn_more">Learn more</a>'),
    ('<h2 id="reviews-title">Customer reviews</h2>', '<h2 id="reviews-title" data-i18n="reviews_title">Customer reviews</h2>'),
    ('<div class="reviews-meta" aria-label="Average rating 5 stars from 16,140 reviews">', '<div class="reviews-meta" data-i18n-aria="reviews_meta_aria" aria-label="Average rating 5 stars from 16,140 reviews">'),
    ('<span>16,140 reviews</span>', '<span data-i18n="reviews_meta">16,140 reviews</span>'),
    ('<p class="footer-tagline">100% Natural Beauty | The world\'s most certified beauty brand</p>', '<p class="footer-tagline" data-i18n="footer_tagline">100% Natural Beauty | The world\'s most certified beauty brand</p>'),
    ('<p>© 2026 Uniko Beauties. All rights reserved.</p>', '<p data-i18n="copyright">© 2026 Uniko Beauties. All rights reserved.</p>'),
    ('alt="Uniko Beauties — natural beauty and organic makeup"', 'data-i18n-alt="hero_alt" alt="Uniko Beauties — natural beauty and organic makeup"'),
]

nav_keys = [
    ("#boutique", "nav_shop", "Shop"),
    ("#soins", "nav_skincare", "Skincare"),
    ("#maquillage", "nav_makeup", "Makeup"),
    ("#destockage", "nav_clearance", "Clearance"),
    ("#a-propos", "nav_about", "About"),
]
for href, key, label in nav_keys:
    pairs.append((f'<a href="{href}">{label}</a>', f'<a href="{href}" data-i18n="{key}">{label}</a>'))

cat_keys = [
    ("#visage", "cat_face", "Face"),
    ("#yeux", "cat_eyes", "Eyes"),
    ("#levres", "cat_lips", "Lips"),
    ("#peau", "cat_skin", "Skin"),
    ("#soins", "cat_skincare", "Skincare"),
    ("#maquillage", "cat_makeup", "Makeup"),
    ("#corps", "cat_body", "Body"),
    ("#cheveux", "cat_hair", "Hair"),
    ("#nouveautes", "cat_new", "New"),
    ("#meilleures-ventes", "cat_bestsellers", "Bestsellers"),
]
for href, key, label in cat_keys:
    old = f'<span>{label}</span>'
    new = f'<span data-i18n="{key}">{label}</span>'
    # category cards only - limit by being in category-card context - replace all span in cards is ok if unique labels
    pairs.append((old, new))

# Review cards - unique strings
review_pairs = [
    ('<p class="review-verified">\n                  <svg', '<p class="review-verified" data-i18n="verified_buyer">\n                  <svg'),
]
# Too fragile - do individual replacements for reviews/footer

for old, new in pairs:
    if old not in text:
        print(f"SKIP: {old[:50]}...")
        continue
    text = text.replace(old, new)

path.write_text(text, encoding="utf-8")
print("Tagged index.html for i18n (partial — extend as needed).")