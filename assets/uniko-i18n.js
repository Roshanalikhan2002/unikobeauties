(function () {
  const STORAGE_KEY = "uniko-lang";

  const T = {
    en: {
      promo: "Free delivery on orders over\u00a0\u20ac95",
      promo_aria: "Free delivery",
      rewards: "Rewards",
      nav_shop: "Shop",
      nav_skincare: "Skincare",
      nav_makeup: "Makeup",
      nav_clearance: "Clearance",
      nav_about: "About",
      category_title: "Shop by category",
      cat_face: "Face",
      cat_eyes: "Eyes",
      cat_lips: "Lips",
      cat_skin: "Skin",
      cat_skincare: "Skincare",
      cat_makeup: "Makeup",
      cat_body: "Body",
      cat_hair: "Hair",
      cat_new: "New",
      cat_bestsellers: "Bestsellers",
      trust_title: "The world's most certified beauty brand",
      impact_eyebrow: "Sustainability impact",
      impact_title: "The world's first plastic-neutral makeup brand",
      impact_text:
        "Our products use only the purest 100% natural ingredients with proven results. We lead the way in sustainable beauty with eco-friendly packaging and a real fight against the plastic crisis.",
      learn_more: "Learn more",
      reviews_title: "Customer reviews",
      reviews_meta: "16,140 reviews",
      reviews_meta_aria: "Average rating 5 stars from 16,140 reviews",
      verified_buyer: "Verified buyer",
      verified_review: "Verified review",
      read_more: "Read more",
      r1_title: "Nice, clean finish",
      r1_body: "A radiant, natural finish that lasts all day.",
      r1_product: "Uniko Beauties \u2014 Liquid Foundation",
      r2_title: "Second skin",
      r2_body: "No tightening or itching \u2014 perfect for my sensitive skin.",
      r2_product: "Uniko Beauties \u2014 Loose Mineral Powder",
      r3_title: "Perfect",
      r3_body: "Fantastic products and flawless makeup for my daughter's wedding.",
      r3_product: "Uniko Beauties \u2014 Natural Perfection Set",
      r4_title: "My new routine",
      r4_body: "Light texture, velvety finish \u2014 I am not switching brands.",
      r4_product: "Uniko Beauties \u2014 Botanical Glow Serum",
      footer_tagline: "100% Natural Beauty | The world's most certified beauty brand",
      footer_shop: "Shop",
      footer_customer: "Customer care",
      footer_contact: "Contact",
      footer_about: "About",
      footer_returns: "Returns & refunds",
      footer_shipping: "Shipping",
      footer_privacy: "Privacy",
      footer_terms: "Terms of service",
      footer_rewards_terms: "Rewards terms",
      footer_contact_us: "Contact us",
      footer_stockist: "Find a stockist",
      footer_wholesale: "Wholesale enquiries",
      footer_media: "Media enquiries",
      footer_affiliate: "Become an affiliate",
      footer_newsletter: "Newsletter signup",
      footer_story: "Our story",
      footer_sustain: "Our sustainability promise",
      footer_certs: "Our certifications",
      footer_testimonials: "Customer testimonials",
      footer_glossary: "Ingredient glossary",
      footer_awards: "Awards",
      copyright: "\u00a9 2026 Uniko Beauties. All rights reserved.",
      menu_open: "Open menu",
      menu_close: "Close menu",
      hero_alt:
        "Uniko Beauties \u2014 natural beauty and organic makeup",
      drawer_note: "100% natural beauty",
    },
    fr: {
      promo: "Livraison gratuite pour les commandes de plus de\u00a095\u00a0\u20ac",
      promo_aria: "Livraison gratuite",
      rewards: "R\u00e9compenses",
      nav_shop: "Boutique",
      nav_skincare: "Soins",
      nav_makeup: "Maquillage",
      nav_clearance: "D\u00e9stockage",
      nav_about: "\u00c0 propos",
      category_title: "Acheter par cat\u00e9gorie",
      cat_face: "Visage",
      cat_eyes: "Yeux",
      cat_lips: "L\u00e8vres",
      cat_skin: "Peau",
      cat_skincare: "Soins",
      cat_makeup: "Maquillage",
      cat_body: "Corps",
      cat_hair: "Cheveux",
      cat_new: "Nouveaut\u00e9s",
      cat_bestsellers: "Meilleures ventes",
      trust_title: "La marque de beaut\u00e9 la plus certifi\u00e9e au monde",
      impact_eyebrow: "Impact durabilit\u00e9",
      impact_title: "La premi\u00e8re marque de maquillage neutre en plastique au monde",
      impact_text:
        "Nos produits n'utilisent que les ingr\u00e9dients 100 % naturels les plus purs, dont l'efficacit\u00e9 est prouv\u00e9e. Nous ouvrons la voie \u00e0 une beaut\u00e9 durable gr\u00e2ce \u00e0 un emballage \u00e9cologique et en luttant activement contre la crise du plastique.",
      learn_more: "En savoir plus",
      reviews_title: "Avis clients",
      reviews_meta: "16 140 avis",
      reviews_meta_aria: "Note moyenne 5 \u00e9toiles sur 16 140 avis",
      verified_buyer: "Acheteuse v\u00e9rifi\u00e9e",
      verified_review: "Avis v\u00e9rifi\u00e9",
      read_more: "Lire la suite",
      r1_title: "Fini propre et lumineux",
      r1_body: "Un fini radieux et naturel qui dure toute la journ\u00e9e.",
      r1_product: "Uniko Beauties \u2014 Fond de teint liquide",
      r2_title: "Seconde peau",
      r2_body: "Aucun pincement, aucune d\u00e9mangeaison \u2014 parfait pour ma peau sensible.",
      r2_product: "Uniko Beauties \u2014 Poudre min\u00e9rale libre",
      r3_title: "Parfait",
      r3_body:
        "Des produits fantastiques et un maquillage impeccable pour le mariage de ma fille.",
      r3_product: "Uniko Beauties \u2014 Kit perfection naturelle",
      r4_title: "Ma nouvelle routine",
      r4_body:
        "Texture l\u00e9g\u00e8re, fini velout\u00e9 \u2014 je ne change plus de marque.",
      r4_product: "Uniko Beauties \u2014 S\u00e9rum \u00e9clat botanique",
      footer_tagline:
        "Beaut\u00e9 100 % naturelle | La marque de beaut\u00e9 la plus certifi\u00e9e au monde",
      footer_shop: "Boutique",
      footer_customer: "Service client",
      footer_contact: "Contact",
      footer_about: "\u00c0 propos",
      footer_returns: "Retours et remboursements",
      footer_shipping: "Livraison",
      footer_privacy: "Confidentialit\u00e9",
      footer_terms: "Conditions d'utilisation",
      footer_rewards_terms: "Conditions R\u00e9compenses",
      footer_contact_us: "Nous contacter",
      footer_stockist: "Trouver un revendeur",
      footer_wholesale: "Demandes grossistes",
      footer_media: "Demandes presse",
      footer_affiliate: "Devenir affili\u00e9",
      footer_newsletter: "Inscription newsletter",
      footer_story: "Notre histoire",
      footer_sustain: "Notre engagement durable",
      footer_certs: "Nos certifications",
      footer_testimonials: "T\u00e9moignages clients",
      footer_glossary: "Glossaire des ingr\u00e9dients",
      footer_awards: "Prix et distinctions",
      copyright: "\u00a9 2026 Uniko Beauties. Tous droits r\u00e9serv\u00e9s.",
      menu_open: "Ouvrir le menu",
      menu_close: "Fermer le menu",
      hero_alt:
        "Uniko Beauties \u2014 beaut\u00e9 naturelle et maquillage bio",
      drawer_note: "Beaut\u00e9 100 % naturelle",
    },
  };

  function applyLanguage(lang) {
    const pack = T[lang] || T.en;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key || !(key in pack)) return;

      if (el.dataset.i18nMode === "html") {
        const tail = el.querySelector("[data-i18n-suffix]");
        if (tail) {
          el.childNodes.forEach((node) => {
            if (node === tail) return;
            if (node.nodeType === Node.TEXT_NODE) node.remove();
          });
          el.insertBefore(document.createTextNode(pack[key] + " "), tail);
        } else {
          el.textContent = pack[key];
        }
      } else {
        el.textContent = pack[key];
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key && key in pack) el.setAttribute("aria-label", pack[key]);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (key && key in pack) el.setAttribute("alt", pack[key]);
    });

    document.querySelectorAll("[data-set-lang]").forEach((btn) => {
      const active = btn.getAttribute("data-set-lang") === lang;
      btn.setAttribute("aria-current", active ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* ignore */
    }
  }

  function initLangSwitch() {
    document.querySelectorAll("[data-set-lang]").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        const lang = btn.getAttribute("data-set-lang");
        if (lang === "en" || lang === "fr") applyLanguage(lang);
      });
    });

    let saved = "en";
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "fr" || stored === "en") saved = stored;
    } catch (_) {
      /* ignore */
    }

    applyLanguage(saved);
  }

  window.UnikoI18n = { applyLanguage, initLangSwitch, T };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLangSwitch);
  } else {
    initLangSwitch();
  }
})();