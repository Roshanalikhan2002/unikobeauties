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
      shop_now: "Shop now",
      pdp_back: "Back to shop",
      pdp_subtitle: "Shampoing pour locks ● Shampoo for locks",
      pdp_desc_en:
        "A gentle aloe vera shampoo for body and hair (500 ml). Cleanses while helping maintain moisture and comfort for all skin and hair types. Free from sulfates, silicones and parabens.",
      pdp_desc_fr:
        "Shampoing doux à l'aloe vera pour le corps et les cheveux (500 ml). Nettoie tout en préservant l'hydratation — pour tous types de peau et de cheveux. Sans sulfates, silicones ni parabènes.",
      pdp_badge_en: "✅ WITHOUT SULFATES · SILICONES · PARABENS",
      pdp_badge_fr: "✅ SANS SULFATES · SILICONES · PARABENS",
      pdp_size: "Size: 500 ml",
      pdp_price_note: "Also: 4000 Fcfa / 9,50 € / 9.99 $ (USD) / 90 Dh (Morocco)",
      pdp_atc: "Add to cart",
      pdp_soldout: "Sold out",
      pdp_acc_certs: "Certifications",
      pdp_acc_how: "How to use",
      pdp_acc_ing: "Ingredients",
      pdp_keys_title: "Key Ingredients",
      pdp_key1_title: "Aloe Vera",
      pdp_key1_desc:
        "Helps cleanse gently while supporting moisture and comfort for skin and hair.",
      pdp_key2_title: "Basil",
      pdp_key2_desc:
        "A fresh botanical note in our natural scented water, for a clean, uplifting wash.",
      pdp_key3_title: "Vegetable oils",
      pdp_key3_desc:
        "Plant-derived oils help leave hair feeling soft and cared for after every rinse.",
      pdp_faq_title: "Frequently asked questions",
      pdp_faq_q1: "Can I use this on hair and body?",
      pdp_faq_a1:
        "Yes. This 500 ml formula is designed for both hair and body in one gentle wash.",
      pdp_faq_q2: "Is it sulfate, silicone and paraben free?",
      pdp_faq_a2:
        "Yes. It is made without sulfates, silicones or parabens for a cleaner everyday routine.",
      pdp_faq_q3: "How often should I shampoo?",
      pdp_faq_a3:
        "Use 1 to 2 washes per session, from scalp to tips, then rinse. Repeat only if needed.",
      pdp_faq_q4: "Is it suitable for sensitive skin?",
      pdp_faq_a4:
        "The aloe-led formula is crafted to cleanse gently while helping maintain comfort for different skin types.",
      pdp_compare_title: "How we compare",
      pdp_cmp_feature: "Feature",
      pdp_cmp_conv: "Conventional shampoo",
      pdp_cmp_other: 'Typical "natural" claim',
      pdp_cmp_row1: "Sulfate free",
      pdp_cmp_row2: "Silicone free",
      pdp_cmp_row3: "Paraben free",
      pdp_cmp_row4: "Hair + body (500 ml)",
      pdp_cmp_row5: "Certified organic ingredients",
      pdp_cmp_row6: "Vegan & cruelty-free",
      pdp_cmp_sometimes: "Sometimes",
      pdp_cmp_varies: "Varies",
      pdp_reviews_title: "Customer reviews",
      pdp_reviews_meta: "5.0 · 42 reviews",
      pdp_rev1_title: "Gentle on my curls",
      pdp_rev1_body:
        "Cleans without stripping. My scalp feels calm and my locks stay soft after every wash.",
      pdp_rev2_title: "One bottle for shower",
      pdp_rev2_body:
        "Love using the same aloe shampoo on hair and body — simple and smells fresh, not heavy.",
      pdp_rev3_title: "No harsh foam",
      pdp_rev3_body:
        "Sulfate-free lather is light but my hair feels clean. Great for my sensitive skin too.",
      pdp_spray_eyebrow: "UniKo Beauties | Hair Care Range",
      pdp_spray_who: "For who: Women, Girls",
      pdp_spray_desc_en:
        "An overnight scalp spray with water, cinnamon and clove. Before bed, apply to clean hair focusing on the scalp — do not rinse.",
      pdp_spray_desc_fr:
        "Spray de nuit pour le cuir chevelu à base d'eau, cannelle et clou de girofle. Avant le coucher, appliquez sur cheveux propres en ciblant le cuir chevelu — ne pas rincer.",
      pdp_spray_how_en:
        "Before going to bed, apply the spray to clean hair, focusing on the scalp. Do not rinse.",
      pdp_spray_how_fr:
        "Avant le coucher, vaporisez sur cheveux propres en insistant sur le cuir chevelu. Ne pas rincer.",
      pdp_spray_ing_en: "Water, cinnamon, clove.",
      pdp_spray_ing_fr: "Eau, cannelle, clou de girofle.",
      pdp_spray_key1_title: "Water",
      pdp_spray_key1_desc:
        "A light, clean base that helps deliver the botanical blend across the scalp.",
      pdp_spray_key2_title: "Cinnamon",
      pdp_spray_key2_desc: "A warming botanical note in our nighttime hair care ritual.",
      pdp_spray_key3_title: "Clove",
      pdp_spray_key3_desc:
        "Completes the aromatic blend for an indulgent evening scalp routine.",
      pdp_spray_faq_q1: "Do I rinse after applying?",
      pdp_spray_faq_a1:
        "No. This is a leave-on bedtime spray — apply and let it work overnight without rinsing.",
      pdp_spray_faq_q2: "When should I use it?",
      pdp_spray_faq_a2: "Use before going to bed on clean, dry or towel-dried hair.",
      pdp_spray_faq_q3: "Who is this spray for?",
      pdp_spray_faq_a3:
        "Designed for women and girls as part of the UniKo Beauties Hair Care Range.",
      pdp_spray_faq_q4: "Where should I spray?",
      pdp_spray_faq_a4: "Focus on the scalp, then lightly mist through lengths if desired.",
      pdp_spray_cmp_col2: "Regular hairspray",
      pdp_spray_cmp_col3: "Typical scalp oil",
      pdp_spray_cmp_row1: "Overnight leave-on",
      pdp_spray_cmp_row2: "Scalp-focused mist",
      pdp_spray_cmp_row3: "No rinse needed",
      pdp_spray_cmp_row4: "Cinnamon & clove blend",
      pdp_spray_cmp_row5: "For women & girls",
      pdp_spray_reviews_meta: "5.0 · 18 reviews",
      pdp_spray_rev1_title: "Easy bedtime routine",
      pdp_spray_rev1_body:
        "I spray on my scalp before bed — no rinse, no fuss. Wakes up feeling fresh.",
      pdp_spray_rev2_title: "Lovely scent",
      pdp_spray_rev2_body:
        "Cinnamon and clove smell warm but not overpowering. Perfect for my daughter too.",
      pdp_spray_rev3_title: "Scalp feels cared for",
      pdp_spray_rev3_body:
        "Light mist on the scalp is exactly what I wanted — part of my evening unwind.",
      pdp_milk_eyebrow: "UniKo Beauties | Hair Care Range",
      pdp_milk_who: "For who: Men, Women, Kids — the whole family",
      pdp_milk_desc_en:
        "This 3-in-1 hair milk with a creamy texture helps hydrate and nourish your hair daily while supporting a beautiful look. Rich in fiber-loving care for naturally defined curls, in shaa Allah.",
      pdp_milk_desc_fr:
        "Ce lait capillaire 3-en-1 à texture crémeuse hydrate et nourrit au quotidien tout en préservant une belle tenue. Soin riche pour des boucles naturellement définies, in shaa Allah.",
      pdp_milk_how_en: "Apply every morning. Also use as a mask, a leave-in, or a detangler.",
      pdp_milk_how_fr: "Appliquer chaque matin. Utilisable aussi en masque, sans rinçage ou démêlant.",
      pdp_milk_ing_en:
        "Aloe vera, vitamin E, natural exotic scent, pure sesame butter or shea butter, basil.",
      pdp_milk_ing_fr:
        "Aloe vera, vitamine E, senteur exotique naturelle, beurre de sésame pur ou beurre de karité, basilique.",
      pdp_milk_key1_title: "Aloe vera",
      pdp_milk_key1_desc:
        "Helps comfort the scalp and support daily moisture in your hair care routine.",
      pdp_milk_key2_title: "Vitamin E",
      pdp_milk_key2_desc: "Antioxidant care that supports nourished-looking hair fiber.",
      pdp_milk_key3_title: "Shea & sesame butter",
      pdp_milk_key3_desc:
        "Rich plant butters for creamy texture, hydration and soft, manageable hair.",
      pdp_milk_faq_q1: "How do I use Hair Milk Goldy Treasure?",
      pdp_milk_faq_a1:
        "Apply every morning. You can also use it as a mask, leave-in, or detangler.",
      pdp_milk_faq_q2: "Is it a 3-in-1 product?",
      pdp_milk_faq_a2:
        "Yes — one creamy milk for daily care, masking, leave-in conditioning and detangling.",
      pdp_milk_faq_q3: "Who can use it?",
      pdp_milk_faq_a3: "Made for men, women and kids — the whole family.",
      pdp_milk_faq_q4: "Will it help define curls?",
      pdp_milk_faq_a4:
        "Its nourishing formula is crafted to help support naturally defined curls with regular use.",
      pdp_milk_cmp_col2: "Regular leave-in",
      pdp_milk_cmp_col3: "Conventional hair milk",
      pdp_milk_cmp_row1: "3-in-1 (mask / leave-in / detangler)",
      pdp_milk_cmp_row2: "Daily morning care",
      pdp_milk_cmp_row3: "Curl-defining support",
      pdp_milk_cmp_row4: "Whole-family use",
      pdp_milk_cmp_row5: "Aloe + vitamin E blend",
      pdp_milk_reviews_meta: "5.0 · 24 reviews",
      pdp_milk_rev1_title: "Curls look defined",
      pdp_milk_rev1_body: "Morning routine is simple — my curls feel nourished and soft all day.",
      pdp_milk_rev2_title: "Great for the kids",
      pdp_milk_rev2_body: "We use it as a detangler before school — whole family shares one bottle.",
      pdp_milk_rev3_title: "Creamy 3-in-1",
      pdp_milk_rev3_body:
        "Love that one product works as leave-in, mask and detangler. Texture is rich but not heavy.",
      pdp_mask_eyebrow: "UniKo Beauties | Hair Care Range",
      pdp_mask_who: "For who: Women, Girls",
      pdp_mask_desc_en:
        "A nourishing 2-in-1 hair mask to support growth and strength. Apply as a treatment or leave-in for softer, cared-for hair with regular use.",
      pdp_mask_desc_fr:
        "Masque capillaire 2-en-1 nourrissant pour la pousse et la force des cheveux. S'utilise en soin ou sans rinçage pour des cheveux plus doux au quotidien.",
      pdp_mask_how_en:
        "Apply the treatment and leave it on for at least 1 hour, or even overnight, before rinsing. Then wash your hair with shampoo, or you can use it as a leave-in.",
      pdp_mask_how_fr:
        "Appliquez le soin et laissez poser au moins 1 heure, ou toute la nuit, avant de rincer. Lavez ensuite au shampoing, ou utilisez-le en leave-in.",
      pdp_mask_ing_en:
        "Aloe vera, pure shea butter, hibiscus, vitamin E, basil, peppermint essential oil.",
      pdp_mask_ing_fr:
        "Aloe vera, beurre de karité pur, hibiscus, vitamine E, basilique, huile essentielle de menthe poivrée.",
      pdp_mask_key1_title: "Aloe vera",
      pdp_mask_key1_desc:
        "Helps soothe the scalp while supporting comfort during your mask ritual.",
      pdp_mask_key2_title: "Shea butter & hibiscus",
      pdp_mask_key2_desc: "Rich butters and botanical flower care for nourished-looking hair fiber.",
      pdp_mask_key3_title: "Vitamin E & peppermint",
      pdp_mask_key3_desc: "Vitamin E with invigorating peppermint essential oil for a fresh finish.",
      pdp_mask_faq_q1: "How long should I leave the mask on?",
      pdp_mask_faq_a1:
        "At least 1 hour, or overnight for deeper care — then rinse and shampoo as usual.",
      pdp_mask_faq_q2: "Can I use it as a leave-in?",
      pdp_mask_faq_a2: "Yes. After treatment you can also use a small amount as a leave-in on damp hair.",
      pdp_mask_faq_q3: "Who is it for?",
      pdp_mask_faq_a3: "Formulated for women and girls.",
      pdp_mask_faq_q4: "What does 2-in-1 mean?",
      pdp_mask_faq_a4: "One jar works as an intensive mask treatment and as a leave-in conditioner.",
      pdp_mask_cmp_col2: "Regular hair mask",
      pdp_mask_cmp_col3: "Drugstore conditioner",
      pdp_mask_cmp_row1: "2-in-1 mask & leave-in",
      pdp_mask_cmp_row2: "Overnight treatment",
      pdp_mask_cmp_row3: "Growth & strength support",
      pdp_mask_cmp_row4: "Shea & hibiscus blend",
      pdp_mask_cmp_row5: "For women & girls",
      pdp_mask_reviews_meta: "5.0 · 19 reviews",
      pdp_mask_rev1_title: "Overnight game changer",
      pdp_mask_rev1_body:
        "I leave it on overnight once a week — hair feels stronger and smoother after wash day.",
      pdp_mask_rev2_title: "Fresh peppermint touch",
      pdp_mask_rev2_body:
        "Love the cooling feel when rinsing. Also works great as a little leave-in on ends.",
      pdp_mask_rev3_title: "2-in-1 convenience",
      pdp_mask_rev3_body: "One jar for deep mask and light leave-in — perfect for my daughter and me.",
      pdp_det_eyebrow: "UniKo Beauties | Hair Care Range",
      pdp_det_who: "For who: Men, Women, Kids — the whole family",
      pdp_det_desc_en:
        "A family detangling cream that helps slip through knots while nourishing the scalp. Apply a small amount through sectioned hair for softer, easier styling.",
      pdp_det_desc_fr:
        "Crème démêlante pour toute la famille : elle facilite le démêlage tout en nourrissant le cuir chevelu. Appliquez une petite quantité sur cheveux sectionnés pour un coiffage plus doux.",
      pdp_det_how_en:
        "Section your hair and apply a small amount throughout, focusing on the scalp.",
      pdp_det_how_fr:
        "Séparez vos cheveux en sections et appliquez une petite quantité sur l'ensemble, en insistant sur le cuir chevelu.",
      pdp_det_ing_en:
        "Aloe vera, vitamin E, pure shea butter, basil, peppermint essential oil.",
      pdp_det_ing_fr:
        "Aloe vera, vitamine E, beurre de karité pur, basilique, huile essentielle de menthe poivrée.",
      pdp_det_key1_title: "Aloe vera",
      pdp_det_key1_desc:
        "Helps soothe the scalp while you work the cream through each section.",
      pdp_det_key2_title: "Shea butter & vitamin E",
      pdp_det_key2_desc: "Nourishing butter and vitamin E for slip and softness while detangling.",
      pdp_det_key3_title: "Basil & peppermint",
      pdp_det_key3_desc: "Botanical basil with peppermint essential oil for a fresh, clean finish.",
      pdp_det_faq_q1: "How do I apply it?",
      pdp_det_faq_a1:
        "Section your hair and apply a small amount throughout, focusing on the scalp.",
      pdp_det_faq_q2: "Can the whole family use it?",
      pdp_det_faq_a2: "Yes. It is formulated for men, women and kids — the whole family.",
      pdp_det_faq_q3: "Should I rinse it out?",
      pdp_det_faq_a3: "Use as a leave-in detangler on damp or dry hair. A small amount is enough.",
      pdp_det_faq_q4: "Where should I focus?",
      pdp_det_faq_a4: "Work through each section and focus on the scalp, then comb gently through lengths.",
      pdp_det_cmp_col2: "Regular detangler",
      pdp_det_cmp_col3: "Drugstore cream",
      pdp_det_cmp_row1: "Whole-family use",
      pdp_det_cmp_row2: "Scalp-focused application",
      pdp_det_cmp_row3: "Aloe, shea & vitamin E",
      pdp_det_cmp_row4: "Basil & peppermint oils",
      pdp_det_cmp_row5: "Men, women & kids",
      pdp_det_reviews_meta: "5.0 · 21 reviews",
      pdp_det_rev1_title: "School-morning saver",
      pdp_det_rev1_body:
        "A little on the scalp and through the lengths — knots come out without the fight. Kids actually sit still now.",
      pdp_det_rev2_title: "One jar for everyone",
      pdp_det_rev2_body:
        "My husband, me and the kids all use the same cream. Light peppermint feel, not greasy.",
      pdp_det_rev3_title: "Scalp feels cared for",
      pdp_det_rev3_body: "Sectioning and focusing on the scalp as directed made a real difference. Hair is easier to comb after.",
      pdp_queeny_eyebrow: "UniKo Beauties | Hair Care Range",
      pdp_queeny_who: "For who: Women (not for pregnant women)",
      pdp_queeny_desc_en:
        "An overnight hair lotion from roots to ends. Queeny lotion also helps exfoliate the scalp and fight dandruff with regular evening use.",
      pdp_queeny_desc_fr:
        "Lotion capillaire de nuit, des racines aux pointes. Queeny lotion aide aussi à exfolier le cuir chevelu et à lutter contre les pellicules lors d'une utilisation du soir régulière.",
      pdp_queeny_how_en:
        "Before going to bed, apply the Queeny lotion from the roots to the ends. The lotion also exfoliates the scalp and fights dandruff.",
      pdp_queeny_how_fr:
        "Avant de vous coucher, appliquez la Queeny lotion des racines aux pointes. La lotion exfolie aussi le cuir chevelu et aide à lutter contre les pellicules.",
      pdp_queeny_ing_en:
        "Aloe vera, vitamin E, tea tree / peppermint essential oil.",
      pdp_queeny_ing_fr:
        "Aloe vera, vitamine E, huile essentielle de tea tree / menthe poivrée.",
      pdp_queeny_key1_title: "Aloe vera",
      pdp_queeny_key1_desc:
        "Helps comfort the scalp overnight as you apply from roots to ends.",
      pdp_queeny_key2_title: "Vitamin E",
      pdp_queeny_key2_desc: "A nourishing antioxidant oil for lengths while you sleep.",
      pdp_queeny_key3_title: "Tea tree & peppermint",
      pdp_queeny_key3_desc: "Essential oils that support a fresher-feeling scalp and dandruff-care ritual.",
      pdp_queeny_faq_q1: "When should I apply it?",
      pdp_queeny_faq_a1: "Before going to bed, apply from the roots to the ends.",
      pdp_queeny_faq_q2: "Does it help with dandruff?",
      pdp_queeny_faq_a2:
        "The lotion also exfoliates the scalp and fights dandruff as part of your evening routine.",
      pdp_queeny_faq_q3: "Who is it for?",
      pdp_queeny_faq_a3: "Formulated for women. Not for pregnant women.",
      pdp_queeny_faq_q4: "Should I rinse before bed?",
      pdp_queeny_faq_a4:
        "Leave it on overnight after applying from roots to ends, then wash as usual in the morning if you prefer.",
      pdp_queeny_cmp_col2: "Regular hair oil",
      pdp_queeny_cmp_col3: "Drugstore anti-dandruff",
      pdp_queeny_cmp_row1: "Overnight roots-to-ends",
      pdp_queeny_cmp_row2: "Scalp exfoliation",
      pdp_queeny_cmp_row3: "Helps fight dandruff",
      pdp_queeny_cmp_row4: "Tea tree & peppermint",
      pdp_queeny_cmp_row5: "For women (not pregnant)",
      pdp_queeny_reviews_meta: "5.0 · 18 reviews",
      pdp_queeny_rev1_title: "Night routine that works",
      pdp_queeny_rev1_body:
        "I apply from roots to ends before bed — scalp feels cleaner in the morning and flakes are calmer.",
      pdp_queeny_rev2_title: "Fresh tea tree feel",
      pdp_queeny_rev2_body:
        "Love the peppermint and tea tree. It feels like it actually works on the scalp, not just the lengths.",
      pdp_queeny_rev3_title: "Dandruff calmer",
      pdp_queeny_rev3_body:
        "Using it at night a few times a week made my scalp much more comfortable. Clear who it is for on the page too.",
      pdp_how_en:
        "Shake well and apply the shampoo 1 to 2 times on the entire hair, from the scalp to the tips, then rinse. Repeat if necessary.",
      pdp_how_fr:
        "Secouer et appliquez 1 à 2 fois le shampoing sur l'ensemble des cheveux en partant du cuir chevelu aux pointes puis rincer. Renouveler le procédé si nécessaire.",
      pdp_ing_label_en: "Ingredients:",
      pdp_ing_label_fr: "Ingrédients :",
      pdp_ing_en:
        "Aloe vera, basil, vegetable oils, natural scented water, sodium hydroxide, water.",
      pdp_ing_fr:
        "Aloe vera, basilique, huiles végétales, eau de senteur naturel, hydroxyde de sodium, eau.",
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
      shop_now: "Acheter",
      pdp_back: "Retour à la boutique",
      pdp_subtitle: "Shampoing pour locks ● Shampoo for locks",
      pdp_desc_en:
        "A gentle aloe vera shampoo for body and hair (500 ml). Cleanses while helping maintain moisture and comfort for all skin and hair types. Free from sulfates, silicones and parabens.",
      pdp_desc_fr:
        "Shampoing doux à l'aloe vera pour le corps et les cheveux (500 ml). Nettoie tout en préservant l'hydratation — pour tous types de peau et de cheveux. Sans sulfates, silicones ni parabènes.",
      pdp_badge_en: "✅ WITHOUT SULFATES · SILICONES · PARABENS",
      pdp_badge_fr: "✅ SANS SULFATES · SILICONES · PARABENS",
      pdp_size: "Format : 500 ml",
      pdp_price_note: "Également : 4000 Fcfa / 9,50 € / 9,99 $ (USD) / 90 Dh (Maroc)",
      pdp_atc: "Ajouter au panier",
      pdp_soldout: "Rupture de stock",
      pdp_acc_certs: "Certifications",
      pdp_acc_how: "Mode d'emploi",
      pdp_acc_ing: "Ingrédients",
      pdp_keys_title: "Ingrédients clés",
      pdp_key1_title: "Aloe vera",
      pdp_key1_desc:
        "Nettoie en douceur tout en préservant l'hydratation et le confort de la peau et des cheveux.",
      pdp_key2_title: "Basilique",
      pdp_key2_desc:
        "Note botanique fraîche dans notre eau de senteur naturelle, pour un lavage pur et vivifiant.",
      pdp_key3_title: "Huiles végétales",
      pdp_key3_desc:
        "Des huiles d'origine végétale pour des cheveux doux et soignés après chaque rinçage.",
      pdp_faq_title: "Questions fréquentes",
      pdp_faq_q1: "Puis-je l'utiliser sur les cheveux et le corps ?",
      pdp_faq_a1:
        "Oui. Ce format 500 ml convient aux cheveux et au corps dans un seul lavage doux.",
      pdp_faq_q2: "Sans sulfates, silicones et parabènes ?",
      pdp_faq_a2:
        "Oui. Formulé sans sulfates, silicones ni parabènes pour une routine plus saine.",
      pdp_faq_q3: "À quelle fréquence shampouiner ?",
      pdp_faq_a3:
        "1 à 2 applications par lavage, du cuir chevelu aux pointes, puis rincer. Renouveler si besoin.",
      pdp_faq_q4: "Convient-il aux peaux sensibles ?",
      pdp_faq_a4:
        "La formule à l'aloe nettoie en douceur tout en préservant le confort de différents types de peau.",
      pdp_compare_title: "Notre comparaison",
      pdp_cmp_feature: "Critère",
      pdp_cmp_conv: "Shampoing classique",
      pdp_cmp_other: "« Naturel » courant",
      pdp_cmp_row1: "Sans sulfates",
      pdp_cmp_row2: "Sans silicones",
      pdp_cmp_row3: "Sans parabènes",
      pdp_cmp_row4: "Cheveux + corps (500 ml)",
      pdp_cmp_row5: "Ingrédients certifiés bio",
      pdp_cmp_row6: "Vegan & sans cruauté",
      pdp_cmp_sometimes: "Parfois",
      pdp_cmp_varies: "Variable",
      pdp_reviews_title: "Avis clients",
      pdp_reviews_meta: "5,0 · 42 avis",
      pdp_rev1_title: "Doux pour mes locks",
      pdp_rev1_body:
        "Nettoie sans agresser. Mon cuir chevelu est apaisé et mes locks restent souples.",
      pdp_rev2_title: "Un flacon pour la douche",
      pdp_rev2_body:
        "J'adore le même shampoing aloe pour cheveux et corps — simple et frais, sans être lourd.",
      pdp_rev3_title: "Pas de mousse agressive",
      pdp_rev3_body:
        "La mousse sans sulfate est légère mais les cheveux sont propres. Idéal pour ma peau sensible.",
      pdp_spray_eyebrow: "UniKo Beauties | Hair Care Range",
      pdp_spray_who: "Pour qui : femmes, filles",
      pdp_spray_desc_en:
        "An overnight scalp spray with water, cinnamon and clove. Before bed, apply to clean hair focusing on the scalp — do not rinse.",
      pdp_spray_desc_fr:
        "Spray de nuit pour le cuir chevelu à base d'eau, cannelle et clou de girofle. Avant le coucher, appliquez sur cheveux propres en ciblant le cuir chevelu — ne pas rincer.",
      pdp_spray_how_en:
        "Before going to bed, apply the spray to clean hair, focusing on the scalp. Do not rinse.",
      pdp_spray_how_fr:
        "Avant le coucher, vaporisez sur cheveux propres en insistant sur le cuir chevelu. Ne pas rincer.",
      pdp_spray_ing_en: "Water, cinnamon, clove.",
      pdp_spray_ing_fr: "Eau, cannelle, clou de girofle.",
      pdp_spray_key1_title: "Eau",
      pdp_spray_key1_desc:
        "Une base légère et pure pour diffuser le mélange botanique sur le cuir chevelu.",
      pdp_spray_key2_title: "Cannelle",
      pdp_spray_key2_desc: "Une note botanique réconfortante pour le rituel capillaire du soir.",
      pdp_spray_key3_title: "Clou de girofle",
      pdp_spray_key3_desc: "Complète le bouquet aromatique pour un soin du cuir chevelu indulgent.",
      pdp_spray_faq_q1: "Dois-je rincer après application ?",
      pdp_spray_faq_a1:
        "Non. Spray sans rinçage à laisser agir toute la nuit après application.",
      pdp_spray_faq_q2: "Quand l'utiliser ?",
      pdp_spray_faq_a2: "Avant le coucher, sur cheveux propres, secs ou essorés.",
      pdp_spray_faq_q3: "Pour qui est ce spray ?",
      pdp_spray_faq_a3:
        "Conçu pour les femmes et les filles — gamme Hair Care UniKo Beauties.",
      pdp_spray_faq_q4: "Où vaporiser ?",
      pdp_spray_faq_a4: "Sur le cuir chevelu en priorité, puis légèrement sur les longueurs si besoin.",
      pdp_spray_cmp_col2: "Laque classique",
      pdp_spray_cmp_col3: "Huile cuir chevelu",
      pdp_spray_cmp_row1: "À laisser toute la nuit",
      pdp_spray_cmp_row2: "Brume ciblée cuir chevelu",
      pdp_spray_cmp_row3: "Sans rinçage",
      pdp_spray_cmp_row4: "Mélange cannelle & clou de girofle",
      pdp_spray_cmp_row5: "Pour femmes & filles",
      pdp_spray_reviews_meta: "5,0 · 18 avis",
      pdp_spray_rev1_title: "Routine du soir simple",
      pdp_spray_rev1_body:
        "Je vaporise sur le cuir chevelu avant de dormir — pas de rinçage. Au réveil, sensation fraîche.",
      pdp_spray_rev2_title: "Parfum agréable",
      pdp_spray_rev2_body:
        "Cannelle et clou de girofle, chauds mais pas trop. Ma fille adore aussi.",
      pdp_spray_rev3_title: "Cuir chevelu apaisé",
      pdp_spray_rev3_body:
        "Une brume légère exactement ce qu'il me fallait pour mon rituel du soir.",
      pdp_milk_eyebrow: "UniKo Beauties | Hair Care Range",
      pdp_milk_who: "Pour qui : hommes, femmes, enfants — toute la famille",
      pdp_milk_desc_en:
        "This 3-in-1 hair milk with a creamy texture helps hydrate and nourish your hair daily while supporting a beautiful look. Rich in fiber-loving care for naturally defined curls, in shaa Allah.",
      pdp_milk_desc_fr:
        "Ce lait capillaire 3-en-1 à texture crémeuse hydrate et nourrit au quotidien tout en préservant une belle tenue. Soin riche pour des boucles naturellement définies, in shaa Allah.",
      pdp_milk_how_en: "Apply every morning. Also use as a mask, a leave-in, or a detangler.",
      pdp_milk_how_fr: "Appliquer chaque matin. Utilisable aussi en masque, sans rinçage ou démêlant.",
      pdp_milk_ing_en:
        "Aloe vera, vitamin E, natural exotic scent, pure sesame butter or shea butter, basil.",
      pdp_milk_ing_fr:
        "Aloe vera, vitamine E, senteur exotique naturelle, beurre de sésame pur ou beurre de karité, basilique.",
      pdp_milk_key1_title: "Aloe vera",
      pdp_milk_key1_desc:
        "Apaise le cuir chevelu et soutient l'hydratation au quotidien.",
      pdp_milk_key2_title: "Vitamine E",
      pdp_milk_key2_desc: "Soin antioxydant pour une fibre capillaire nourrie.",
      pdp_milk_key3_title: "Beurre de karité & sésame",
      pdp_milk_key3_desc:
        "Beurres végétaux onctueux pour texture crémeuse et cheveux doux.",
      pdp_milk_faq_q1: "Comment utiliser Hair Milk Goldy Treasure ?",
      pdp_milk_faq_a1:
        "Appliquer chaque matin. Utilisable en masque, sans rinçage ou démêlant.",
      pdp_milk_faq_q2: "Est-ce un produit 3-en-1 ?",
      pdp_milk_faq_a2:
        "Oui — un lait crémeux pour soin quotidien, masque, sans rinçage et démêlage.",
      pdp_milk_faq_q3: "Qui peut l'utiliser ?",
      pdp_milk_faq_a3: "Pour hommes, femmes et enfants — toute la famille.",
      pdp_milk_faq_q4: "Aide-t-il à définir les boucles ?",
      pdp_milk_faq_a4:
        "Sa formule nourrissante est pensée pour soutenir des boucles naturellement définies.",
      pdp_milk_cmp_col2: "Sans rinçage classique",
      pdp_milk_cmp_col3: "Lait capillaire classique",
      pdp_milk_cmp_row1: "3-en-1 (masque / leave-in / démêlant)",
      pdp_milk_cmp_row2: "Soin matinal quotidien",
      pdp_milk_cmp_row3: "Soutien définition boucles",
      pdp_milk_cmp_row4: "Toute la famille",
      pdp_milk_cmp_row5: "Aloe + vitamine E",
      pdp_milk_reviews_meta: "5,0 · 24 avis",
      pdp_milk_rev1_title: "Boucles bien définies",
      pdp_milk_rev1_body: "Routine du matin simple — mes boucles restent nourries et douces.",
      pdp_milk_rev2_title: "Parfait pour les enfants",
      pdp_milk_rev2_body: "On l'utilise en démêlant avant l'école — toute la famille partage le flacon.",
      pdp_milk_rev3_title: "3-en-1 onctueux",
      pdp_milk_rev3_body:
        "Un seul produit en leave-in, masque et démêlant. Texture riche mais pas lourde.",
      pdp_mask_eyebrow: "UniKo Beauties | Hair Care Range",
      pdp_mask_who: "Pour qui : femmes, filles",
      pdp_mask_desc_en:
        "A nourishing 2-in-1 hair mask to support growth and strength. Apply as a treatment or leave-in for softer, cared-for hair with regular use.",
      pdp_mask_desc_fr:
        "Masque capillaire 2-en-1 nourrissant pour la pousse et la force des cheveux. S'utilise en soin ou sans rinçage pour des cheveux plus doux au quotidien.",
      pdp_mask_how_en:
        "Apply the treatment and leave it on for at least 1 hour, or even overnight, before rinsing. Then wash your hair with shampoo, or you can use it as a leave-in.",
      pdp_mask_how_fr:
        "Appliquez le soin et laissez poser au moins 1 heure, ou toute la nuit, avant de rincer. Lavez ensuite au shampoing, ou utilisez-le en leave-in.",
      pdp_mask_ing_en:
        "Aloe vera, pure shea butter, hibiscus, vitamin E, basil, peppermint essential oil.",
      pdp_mask_ing_fr:
        "Aloe vera, beurre de karité pur, hibiscus, vitamine E, basilique, huile essentielle de menthe poivrée.",
      pdp_mask_key1_title: "Aloe vera",
      pdp_mask_key1_desc:
        "Apaise le cuir chevelu pendant votre rituel masque.",
      pdp_mask_key2_title: "Beurre de karité & hibiscus",
      pdp_mask_key2_desc: "Beurres et fleurs botaniques pour une fibre nourrie.",
      pdp_mask_key3_title: "Vitamine E & menthe",
      pdp_mask_key3_desc: "Vitamine E et menthe poivrée pour une finition fraîche.",
      pdp_mask_faq_q1: "Combien de temps laisser poser ?",
      pdp_mask_faq_a1:
        "Au moins 1 heure, ou toute la nuit — puis rincer et shampouiner.",
      pdp_mask_faq_q2: "En leave-in ?",
      pdp_mask_faq_a2: "Oui, une petite quantité sur cheveux humides après le soin.",
      pdp_mask_faq_q3: "Pour qui ?",
      pdp_mask_faq_a3: "Pour femmes et filles.",
      pdp_mask_faq_q4: "Qu'est-ce que 2-en-1 ?",
      pdp_mask_faq_a4: "Un pot : masque intensif et soin sans rinçage.",
      pdp_mask_cmp_col2: "Masque capillaire classique",
      pdp_mask_cmp_col3: "Après-shampoing courant",
      pdp_mask_cmp_row1: "2-en-1 masque & leave-in",
      pdp_mask_cmp_row2: "Soin de nuit",
      pdp_mask_cmp_row3: "Soutien pousse & force",
      pdp_mask_cmp_row4: "Karité & hibiscus",
      pdp_mask_cmp_row5: "Femmes & filles",
      pdp_mask_reviews_meta: "5,0 · 19 avis",
      pdp_mask_rev1_title: "Nuit magique",
      pdp_mask_rev1_body:
        "Une fois par semaine toute la nuit — cheveux plus forts après le lavage.",
      pdp_mask_rev2_title: "Fraîcheur mentholée",
      pdp_mask_rev2_body: "Sensation rafraîchissante au rinçage. Super en petit leave-in.",
      pdp_mask_rev3_title: "Pratique 2-en-1",
      pdp_mask_rev3_body: "Un pot pour masque et leave-in — pour moi et ma fille.",
      pdp_det_eyebrow: "UniKo Beauties | Hair Care Range",
      pdp_det_who: "Pour qui : hommes, femmes, enfants — toute la famille",
      pdp_det_desc_en:
        "A family detangling cream that helps slip through knots while nourishing the scalp. Apply a small amount through sectioned hair for softer, easier styling.",
      pdp_det_desc_fr:
        "Crème démêlante pour toute la famille : elle facilite le démêlage tout en nourrissant le cuir chevelu. Appliquez une petite quantité sur cheveux sectionnés pour un coiffage plus doux.",
      pdp_det_how_en:
        "Section your hair and apply a small amount throughout, focusing on the scalp.",
      pdp_det_how_fr:
        "Séparez vos cheveux en sections et appliquez une petite quantité sur l'ensemble, en insistant sur le cuir chevelu.",
      pdp_det_ing_en:
        "Aloe vera, vitamin E, pure shea butter, basil, peppermint essential oil.",
      pdp_det_ing_fr:
        "Aloe vera, vitamine E, beurre de karité pur, basilique, huile essentielle de menthe poivrée.",
      pdp_det_key1_title: "Aloe vera",
      pdp_det_key1_desc: "Apaise le cuir chevelu pendant que vous travaillez la crème section par section.",
      pdp_det_key2_title: "Beurre de karité & vitamine E",
      pdp_det_key2_desc: "Beurre nourrissant et vitamine E pour le glissant et la douceur au démêlage.",
      pdp_det_key3_title: "Basilique & menthe",
      pdp_det_key3_desc: "Basilique botanique et menthe poivrée pour une finition fraîche.",
      pdp_det_faq_q1: "Comment l'appliquer ?",
      pdp_det_faq_a1:
        "Séparez vos cheveux en sections et appliquez une petite quantité sur l'ensemble, en insistant sur le cuir chevelu.",
      pdp_det_faq_q2: "Toute la famille peut-elle l'utiliser ?",
      pdp_det_faq_a2: "Oui. Pour hommes, femmes et enfants — toute la famille.",
      pdp_det_faq_q3: "Faut-il rincer ?",
      pdp_det_faq_a3: "Utilisez-la en leave-in sur cheveux humides ou secs. Une petite quantité suffit.",
      pdp_det_faq_q4: "Où insister ?",
      pdp_det_faq_a4: "Travaillez chaque section en insistant sur le cuir chevelu, puis peignez les longueurs.",
      pdp_det_cmp_col2: "Démêlant classique",
      pdp_det_cmp_col3: "Crème courante",
      pdp_det_cmp_row1: "Toute la famille",
      pdp_det_cmp_row2: "Application cuir chevelu",
      pdp_det_cmp_row3: "Aloe, karité & vitamine E",
      pdp_det_cmp_row4: "Basilique & menthe",
      pdp_det_cmp_row5: "Hommes, femmes & enfants",
      pdp_det_reviews_meta: "5,0 · 21 avis",
      pdp_det_rev1_title: "Sauveur du matin",
      pdp_det_rev1_body:
        "Un peu sur le cuir chevelu et les longueurs — les nœuds partent sans bataille. Les enfants restent calmes.",
      pdp_det_rev2_title: "Un pot pour tous",
      pdp_det_rev2_body: "Mon mari, moi et les enfants : même crème. Menthe légère, pas gras.",
      pdp_det_rev3_title: "Cuir chevelu choyé",
      pdp_det_rev3_body: "Sectionner et insister sur le cuir chevelu comme indiqué — cheveux plus faciles à peigner.",
      pdp_queeny_eyebrow: "UniKo Beauties | Hair Care Range",
      pdp_queeny_who: "Pour qui : femmes (pas pour les femmes enceintes)",
      pdp_queeny_desc_en:
        "An overnight hair lotion from roots to ends. Queeny lotion also helps exfoliate the scalp and fight dandruff with regular evening use.",
      pdp_queeny_desc_fr:
        "Lotion capillaire de nuit, des racines aux pointes. Queeny lotion aide aussi à exfolier le cuir chevelu et à lutter contre les pellicules lors d'une utilisation du soir régulière.",
      pdp_queeny_how_en:
        "Before going to bed, apply the Queeny lotion from the roots to the ends. The lotion also exfoliates the scalp and fights dandruff.",
      pdp_queeny_how_fr:
        "Avant de vous coucher, appliquez la Queeny lotion des racines aux pointes. La lotion exfolie aussi le cuir chevelu et aide à lutter contre les pellicules.",
      pdp_queeny_ing_en:
        "Aloe vera, vitamin E, tea tree / peppermint essential oil.",
      pdp_queeny_ing_fr:
        "Aloe vera, vitamine E, huile essentielle de tea tree / menthe poivrée.",
      pdp_queeny_key1_title: "Aloe vera",
      pdp_queeny_key1_desc: "Apaise le cuir chevelu la nuit, des racines aux pointes.",
      pdp_queeny_key2_title: "Vitamine E",
      pdp_queeny_key2_desc: "Huile antioxydante nourrissante pour les longueurs pendant le sommeil.",
      pdp_queeny_key3_title: "Tea tree & menthe",
      pdp_queeny_key3_desc: "Huiles essentielles pour un cuir chevelu plus frais et un rituel anti-pellicules.",
      pdp_queeny_faq_q1: "Quand l'appliquer ?",
      pdp_queeny_faq_a1: "Avant de vous coucher, des racines aux pointes.",
      pdp_queeny_faq_q2: "Aide-t-elle contre les pellicules ?",
      pdp_queeny_faq_a2:
        "La lotion exfolie aussi le cuir chevelu et aide à lutter contre les pellicules le soir.",
      pdp_queeny_faq_q3: "Pour qui ?",
      pdp_queeny_faq_a3: "Pour les femmes. Pas pour les femmes enceintes.",
      pdp_queeny_faq_q4: "Faut-il rincer le soir ?",
      pdp_queeny_faq_a4:
        "Laissez poser toute la nuit, puis lavez le matin si vous le souhaitez.",
      pdp_queeny_cmp_col2: "Huile capillaire classique",
      pdp_queeny_cmp_col3: "Anti-pelliculaire courant",
      pdp_queeny_cmp_row1: "Nuit racines-pointes",
      pdp_queeny_cmp_row2: "Exfoliation du cuir chevelu",
      pdp_queeny_cmp_row3: "Aide contre les pellicules",
      pdp_queeny_cmp_row4: "Tea tree & menthe",
      pdp_queeny_cmp_row5: "Femmes (pas enceintes)",
      pdp_queeny_reviews_meta: "5,0 · 18 avis",
      pdp_queeny_rev1_title: "Rituel du soir",
      pdp_queeny_rev1_body:
        "Des racines aux pointes avant de dormir — cuir chevelu plus net le matin, moins de squames.",
      pdp_queeny_rev2_title: "Fraîcheur tea tree",
      pdp_queeny_rev2_body:
        "J'adore la menthe et le tea tree. Ça travaille vraiment le cuir chevelu, pas seulement les longueurs.",
      pdp_queeny_rev3_title: "Pellicules plus calmes",
      pdp_queeny_rev3_body:
        "Quelques soirs par semaine : cuir chevelu plus confortable. La page indique clairement pour qui c'est.",
      pdp_how_en:
        "Shake well and apply the shampoo 1 to 2 times on the entire hair, from the scalp to the tips, then rinse. Repeat if necessary.",
      pdp_how_fr:
        "Secouer et appliquez 1 à 2 fois le shampoing sur l'ensemble des cheveux en partant du cuir chevelu aux pointes puis rincer. Renouveler le procédé si nécessaire.",
      pdp_ing_label_en: "Ingredients:",
      pdp_ing_label_fr: "Ingrédients :",
      pdp_ing_en:
        "Aloe vera, basil, vegetable oils, natural scented water, sodium hydroxide, water.",
      pdp_ing_fr:
        "Aloe vera, basilique, huiles végétales, eau de senteur naturel, hydroxyde de sodium, eau.",
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