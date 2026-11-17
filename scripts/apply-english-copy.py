"""One-off helper: apply English storefront copy to index.html."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
path = ROOT / "index.html"
text = path.read_text(encoding="utf-8")

pairs = [
    ('<html lang="fr">', '<html lang="en">'),
    ('content="fr"', 'content="en"'),
    ('content="French"', 'content="English"'),
    ('<title>Uniko Beauties | Maquillage et soins biologiques</title>', '<title>Uniko Beauties | Organic Makeup &amp; Skincare</title>'),
    (
        'content="Uniko Beauties : maquillage primé, soins cliniquement prouvés et essentiels certifiés biologiques."',
        'content="Uniko Beauties: award-winning makeup, clinically proven skincare, and certified organic essentials."',
    ),
    ('aria-label="Livraison gratuite"', 'aria-label="Free delivery"'),
    ('Livraison gratuite pour les commandes de plus de 95&nbsp;€', 'Free delivery on orders over&nbsp;€95'),
    ('aria-label="Ouvrir le menu"', 'aria-label="Open menu"'),
    ('Récompenses', 'Rewards'),
    ('aria-label="Rechercher"', 'aria-label="Search"'),
    ('aria-label="Uniko Beauties, accueil"', 'aria-label="Uniko Beauties, home"'),
    ('aria-label="Langue du site"', 'aria-label="Site language"'),
    (
        '<nav class="lang-switch" aria-label="Site language">\n          <a href="#accueil" hreflang="fr" lang="fr" aria-current="true" title="Français">FR</a>\n          <span aria-hidden="true">·</span>\n          <a href="#" data-translate-lang="en" hreflang="en" lang="en" title="English">EN</a>\n          <span aria-hidden="true">·</span>\n          <a href="#" data-translate-lang="ur" hreflang="ur" lang="ur" title="Urdu">UR</a>\n        </nav>',
        '<nav class="lang-switch" aria-label="Site language">\n          <a href="#accueil" hreflang="en" lang="en" aria-current="true" title="English">EN</a>\n          <span aria-hidden="true">·</span>\n          <a href="#" data-translate-lang="fr" hreflang="fr" lang="fr" title="Français">FR</a>\n        </nav>',
    ),
    ('aria-label="Compte"', 'aria-label="Account"'),
    ('aria-label="Panier, 0 article"', 'aria-label="Cart, 0 items"'),
    ('aria-label="Navigation principale"', 'aria-label="Main navigation"'),
    ('>Boutique<', '>Shop<'),
    ('>Soins<', '>Skincare<'),
    ('>Maquillage<', '>Makeup<'),
    ('>Déstockage<', '>Clearance<'),
    ('>À propos<', '>About<'),
    ('aria-label="Navigation mobile"', 'aria-label="Mobile navigation"'),
    ('aria-label="Bannière d\'accueil"', 'aria-label="Homepage banner"'),
    ('alt="Uniko Beauties — beauté naturelle et maquillage bio"', 'alt="Uniko Beauties — natural beauty and organic makeup"'),
    ('>Acheter par catégorie<', '>Shop by category<'),
    ('aria-label="Catégories de produits"', 'aria-label="Product categories"'),
    ('>Visage<', '>Face<'),
    ('>Yeux<', '>Eyes<'),
    ('>Lèvres<', '>Lips<'),
    ('>Peau<', '>Skin<'),
    ('>Corps<', '>Body<'),
    ('>Cheveux<', '>Hair<'),
    ('>Nouveautés<', '>New<'),
    ('>Meilleures ventes<', '>Bestsellers<'),
    ('La marque de beauté la plus certifiée au monde', "The world's most certified beauty brand"),
    ('aria-label="Labels et certifications"', 'aria-label="Certifications and badges"'),
    ('alt="Certifié biologique Australie"', 'alt="Certified Organic Australia"'),
    ('alt="Sans test sur les animaux, certifié PETA"', 'alt="Cruelty-free, PETA certified"'),
    ('alt="Certifié Vegan Society"', 'alt="Certified Vegan Society"'),
    ('alt="Certifié Halal"', 'alt="Halal certified"'),
    ('alt="Cosmétique biologique certifiée"', 'alt="Certified organic cosmetic"'),
    ('alt="Certifié respectueux des récifs"', 'alt="Reef-friendly certified"'),
    ('>Impact durabilité<', '>Sustainability impact<'),
    ('alt="Portrait naturel entouré de feuillage, thème durabilité"', 'alt="Natural portrait among foliage, sustainability theme"'),
    ('La première marque de maquillage neutre en plastique au monde', "The world's first plastic-neutral makeup brand"),
    (
        "Nos produits n'utilisent que les ingrédients 100 % naturels les plus purs, dont l'efficacité est prouvée. Nous ouvrons la voie à une beauté durable grâce à un emballage écologique et en luttant activement contre la crise du plastique.",
        "Our products use only the purest 100% natural ingredients with proven results. We lead the way in sustainable beauty with eco-friendly packaging and a real fight against the plastic crisis.",
    ),
    ('>En savoir plus<', '>Learn more<'),
    ('>Avis clients<', '>Customer reviews<'),
    ('aria-label="Note moyenne 5 étoiles sur 16 140 avis"', 'aria-label="Average rating 5 stars from 16,140 reviews"'),
    ('>16 140 avis<', '>16,140 reviews<'),
    ('aria-label="Avis précédents"', 'aria-label="Previous reviews"'),
    ('aria-label="Avis clients récents"', 'aria-label="Recent customer reviews"'),
    ('Acheteuse vérifiée', 'Verified buyer'),
    ('Avis vérifié', 'Verified review'),
    ('Fini propre et lumineux', 'Nice, clean finish'),
    ('Lire la suite', 'Read more'),
    ('Uniko Beauties — Fond de teint liquide', 'Uniko Beauties — Liquid Foundation'),
    ('Seconde peau', 'Second skin'),
    (
        'Aucun pincement, aucune démangeaison — parfait pour ma peau sensible.',
        'No tightening or itching — perfect for my sensitive skin.',
    ),
    ('Uniko Beauties — Poudre minérale libre', 'Uniko Beauties — Loose Mineral Powder'),
    ('>Parfait<', '>Perfect<'),
    (
        'Des produits fantastiques et un maquillage impeccable pour le mariage de ma fille.',
        'Fantastic products and flawless makeup for my daughter\'s wedding.',
    ),
    ('Uniko Beauties — Kit perfection naturelle', 'Uniko Beauties — Natural Perfection Set'),
    ('Ma nouvelle routine', 'My new routine'),
    (
        'Texture légère, fini velouté — je ne change plus de marque.',
        'Light texture, velvety finish — I am not switching brands.',
    ),
    ('Un fini radieux et naturel qui dure toute la journée.', 'A radiant, natural finish that lasts all day.'),
    ('Uniko Beauties — Sérum éclat botanique', 'Uniko Beauties — Botanical Glow Serum'),
    ('aria-label="Avis suivants"', 'aria-label="Next reviews"'),
    ('aria-label="Vidéos d\'avis clients"', 'aria-label="Customer review videos"'),
    ('aria-label="Voir la vidéo d\'avis client 1"', 'aria-label="Watch customer review video 1"'),
    ('aria-label="Voir la vidéo d\'avis client 2"', 'aria-label="Watch customer review video 2"'),
    ('aria-label="Voir la vidéo d\'avis client 3"', 'aria-label="Watch customer review video 3"'),
    ('aria-label="Voir la vidéo d\'avis client 4"', 'aria-label="Watch customer review video 4"'),
    ('aria-label="Voir la vidéo d\'avis client 5"', 'aria-label="Watch customer review video 5"'),
    ('Beauté 100 % naturelle | La marque de beauté la plus certifiée au monde', "100% Natural Beauty | The world's most certified beauty brand"),
    ('>Service client<', '>Customer care<'),
    ('Retours et remboursements', 'Returns & refunds'),
    ('Livraison', 'Shipping'),
    ('Confidentialité', 'Privacy'),
    ("Conditions d'utilisation", 'Terms of service'),
    ('Conditions Récompenses', 'Rewards terms'),
    ('Nous contacter', 'Contact us'),
    ('Trouver un revendeur', 'Find a stockist'),
    ('Demandes grossistes', 'Wholesale enquiries'),
    ('Demandes presse', 'Media enquiries'),
    ('Devenir affilié', 'Become an affiliate'),
    ('Inscription newsletter', 'Newsletter signup'),
    ('Notre histoire', 'Our story'),
    ('Notre engagement durable', 'Our sustainability promise'),
    ('Nos certifications', 'Our certifications'),
    ('Témoignages clients', 'Customer testimonials'),
    ('Glossaire des ingrédients', 'Ingredient glossary'),
    ('Prix et distinctions', 'Awards'),
    ('aria-label="Navigation pied de page"', 'aria-label="Footer navigation"'),
    ('Tous droits réservés.', 'All rights reserved.'),
    ('aria-label="Réseaux sociaux"', 'aria-label="Social media"'),
    ('aria-label="Moyens de paiement acceptés"', 'aria-label="Accepted payment methods"'),
    ('Fermer le menu', 'Close menu'),
    ('sl=fr&tl=', 'sl=en&tl='),
]

missing = []
for old, new in pairs:
    if old not in text:
        missing.append(old[:72])
        continue
    text = text.replace(old, new)

path.write_text(text, encoding="utf-8")
print(f"English copy applied ({len(pairs) - len(missing)}/{len(pairs)} replacements).")
if missing:
    print("Skipped (not found):")
    for item in missing:
        print(f"  - {item}")