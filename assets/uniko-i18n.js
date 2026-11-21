(function () {
  const STORAGE_KEY = "uniko-lang";

  const T = {
    en: {
      promo: "Free delivery on orders over\u00a0\u20ac95",
      promo_aria: "Free delivery",
      rewards: "Rewards",
      nav_shop: "Shop",
      nav_skincare: "Hair",
      nav_makeup: "Face",
      nav_beard: "Beard",
      nav_clearance: "Body",
      nav_about: "About",
      category_title: "Shop the range",
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
      pdp_subtitle: "Shampoo for locks",
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
      pdp_yiri_eyebrow: "UniKo Beauties | Face Care Range",
      pdp_yiri_who: "For who: Men, Women, Kids — the whole family",
      pdp_yiri_desc_en:
        "A botanical face soap with aloe vera, basil and vegetable oils. Apply to the face, leave on for a few minutes, then rinse — and reapply at night before sleeping for best results.",
      pdp_yiri_desc_fr:
        "Savon botanique pour le visage à l'aloe vera, au basilic et aux huiles végétales. Appliquez sur le visage, laissez poser quelques minutes, puis rincez — et réappliquez le soir avant de dormir pour de meilleurs résultats.",
      pdp_yiri_how_en:
        "Apply the soap to the face and leave it on for a few minutes before rinsing. (Reapply at night before sleeping for best results.)",
      pdp_yiri_how_fr:
        "Appliquez le savon sur le visage et laissez poser quelques minutes avant de rincer. (Réappliquez le soir avant de dormir pour de meilleurs résultats.)",
      pdp_yiri_ing_en: "Aloe vera, basil, vegetable oils, sodium hydroxide, water.",
      pdp_yiri_ing_fr: "Aloe vera, basilique, huiles végétales, hydroxyde de sodium, eau.",
      pdp_yiri_key1_title: "Aloe vera",
      pdp_yiri_key1_desc: "A gentle botanical for the face while the soap sits on for a few minutes before rinsing.",
      pdp_yiri_key2_title: "Basil",
      pdp_yiri_key2_desc: "A fresh botanical note in the formula, alongside aloe vera and vegetable oils.",
      pdp_yiri_key3_title: "Vegetable oils",
      pdp_yiri_key3_desc: "Plant oils that support a comfortable feel after you rinse the face soap.",
      pdp_yiri_faq_q1: "How do I use YIRI Soap?",
      pdp_yiri_faq_a1: "Apply the soap to the face and leave it on for a few minutes before rinsing.",
      pdp_yiri_faq_q2: "Should I use it at night?",
      pdp_yiri_faq_a2: "Yes. Reapply at night before sleeping for best results.",
      pdp_yiri_faq_q3: "Can the whole family use it?",
      pdp_yiri_faq_a3: "Yes. It is for men, women and kids — the whole family.",
      pdp_yiri_faq_q4: "What is in YIRI Soap?",
      pdp_yiri_faq_a4: "Aloe vera, basil, vegetable oils, sodium hydroxide and water.",
      pdp_yiri_cmp_col2: "Regular bar soap",
      pdp_yiri_cmp_col3: "Drugstore face wash",
      pdp_yiri_cmp_row1: "Aloe, basil & vegetable oils",
      pdp_yiri_cmp_row2: "Leave on a few minutes",
      pdp_yiri_cmp_row3: "Whole-family use",
      pdp_yiri_cmp_row4: "Night reapply before sleep",
      pdp_yiri_cmp_row5: "Men, women & kids",
      pdp_yiri_reviews_meta: "5.0 · 16 reviews",
      pdp_yiri_rev1_title: "Leave-on face ritual",
      pdp_yiri_rev1_body:
        "I leave it on a few minutes then rinse. Skin feels clean, and the night reapply is now part of my routine.",
      pdp_yiri_rev2_title: "Aloe and basil",
      pdp_yiri_rev2_body:
        "Simple ingredients and a clear face method. The whole family can use the same soap.",
      pdp_yiri_rev3_title: "Gentle for the family",
      pdp_yiri_rev3_body:
        "Men, women and kids in our house all use YIRI on the face. Easy to follow at night too.",
      pdp_facial_eyebrow: "UniKo Beauties | Face Care Range",
      pdp_facial_who: "For who: Women, Girls",
      pdp_facial_desc_en:
        "A face spray with aloe vera and vitamin E. Shake well and apply after cleansing with YIRI soap, morning and evening, without adding any other products.",
      pdp_facial_desc_fr:
        "Brume visage à l'aloe vera et à la vitamine E. Bien agiter et appliquer après le nettoyage au savon YIRI, matin et soir, sans ajouter d'autres produits.",
      pdp_facial_how_en:
        "Shake well and gently apply the spray after thoroughly cleansing your face with the Yiri soap. It is recommended to use it in the morning and evening without adding any other products.",
      pdp_facial_how_fr:
        "Bien agiter et appliquer délicatement le spray après avoir soigneusement nettoyé le visage avec le savon Yiri. Il est recommandé de l'utiliser le matin et le soir, sans ajouter d'autres produits.",
      pdp_facial_ing_en: "Aloe vera, vitamin E.",
      pdp_facial_ing_fr: "Aloe vera, vitamine E.",
      pdp_facial_key1_title: "Aloe vera",
      pdp_facial_key1_desc: "A gentle botanical mist for the face after cleansing with YIRI soap.",
      pdp_facial_key2_title: "Vitamin E",
      pdp_facial_key2_desc: "An antioxidant care note to finish the morning and evening face ritual.",
      pdp_facial_key3_title: "After YIRI soap",
      pdp_facial_key3_desc: "Apply only after a thorough cleanse with YIRI soap — no other products added.",
      pdp_facial_faq_q1: "How do I use Facial Spray?",
      pdp_facial_faq_a1: "Shake well and gently apply after thoroughly cleansing your face with YIRI soap.",
      pdp_facial_faq_q2: "When should I use it?",
      pdp_facial_faq_a2: "Use it in the morning and evening, without adding any other products.",
      pdp_facial_faq_q3: "Who is it for?",
      pdp_facial_faq_a3: "Formulated for women and girls.",
      pdp_facial_faq_q4: "What is in Facial Spray?",
      pdp_facial_faq_a4: "Aloe vera and vitamin E.",
      pdp_facial_cmp_col2: "Regular face mist",
      pdp_facial_cmp_col3: "Drugstore toner",
      pdp_facial_cmp_row1: "Aloe vera & vitamin E",
      pdp_facial_cmp_row2: "After YIRI soap",
      pdp_facial_cmp_row3: "Morning & evening",
      pdp_facial_cmp_row4: "No other products added",
      pdp_facial_cmp_row5: "For women & girls",
      pdp_facial_reviews_meta: "5.0 · 14 reviews",
      pdp_facial_rev1_title: "After YIRI, then spray",
      pdp_facial_rev1_body:
        "I cleanse with YIRI soap then mist this on. Morning and evening is simple — I don’t layer anything else.",
      pdp_facial_rev2_title: "Gentle aloe mist",
      pdp_facial_rev2_body:
        "Shake, spray, done. Vitamin E and aloe feel light on the face after a thorough cleanse.",
      pdp_facial_rev3_title: "My morning and night",
      pdp_facial_rev3_body:
        "Clear who it is for — women and girls. I use it twice a day and skip extra products like they say.",
      pdp_rajel_eyebrow: "UniKo Beauties | Beard Care Range",
      pdp_rajel_who: "For who: Men, Boys",
      pdp_rajel_desc_en:
        "A beard spray with aloe vera, peppermint essential oil and vitamin E. Shake well and apply delicately all over the beard — especially in the morning.",
      pdp_rajel_desc_fr:
        "Spray barbe à l'aloe vera, à l'huile essentielle de menthe poivrée et à la vitamine E. Bien agiter et appliquer délicatement sur toute la barbe — surtout le matin.",
      pdp_rajel_how_en:
        "Shake well and delicately apply all over your beard. It is recommended to use it especially in the morning.",
      pdp_rajel_how_fr:
        "Bien agiter et appliquer délicatement sur toute la barbe. Il est recommandé de l'utiliser surtout le matin.",
      pdp_rajel_ing_en: "Aloe vera, peppermint essential oil, vitamin E.",
      pdp_rajel_ing_fr: "Aloe vera, huile essentielle de menthe poivrée, vitamine E.",
      pdp_rajel_key1_title: "Aloe vera",
      pdp_rajel_key1_desc: "A gentle botanical for the beard when you mist Rajel all over in the morning.",
      pdp_rajel_key2_title: "Peppermint essential oil",
      pdp_rajel_key2_desc: "A fresh essential-oil note for a clean, awake feel on the beard.",
      pdp_rajel_key3_title: "Vitamin E",
      pdp_rajel_key3_desc: "An antioxidant care note to finish the morning beard ritual.",
      pdp_rajel_faq_q1: "How do I use Rajel Beard Spray?",
      pdp_rajel_faq_a1: "Shake well and delicately apply all over your beard.",
      pdp_rajel_faq_q2: "When should I use it?",
      pdp_rajel_faq_a2: "It is recommended to use it especially in the morning.",
      pdp_rajel_faq_q3: "Who is it for?",
      pdp_rajel_faq_a3: "Formulated for men and boys.",
      pdp_rajel_faq_q4: "What is in Rajel Spray?",
      pdp_rajel_faq_a4: "Aloe vera, peppermint essential oil and vitamin E.",
      pdp_rajel_cmp_col2: "Regular beard oil",
      pdp_rajel_cmp_col3: "Drugstore beard balm",
      pdp_rajel_cmp_row1: "Aloe, peppermint & vitamin E",
      pdp_rajel_cmp_row2: "All-over beard mist",
      pdp_rajel_cmp_row3: "Morning ritual",
      pdp_rajel_cmp_row4: "Peppermint essential oil",
      pdp_rajel_cmp_row5: "For men & boys",
      pdp_rajel_reviews_meta: "5.0 · 12 reviews",
      pdp_rajel_rev1_title: "Morning beard mist",
      pdp_rajel_rev1_body:
        "Shake and spray all over. Peppermint feels fresh and it takes a minute before I leave the house.",
      pdp_rajel_rev2_title: "Light, not greasy",
      pdp_rajel_rev2_body:
        "Aloe and vitamin E, no heavy oil. I apply it delicately and the beard stays soft.",
      pdp_rajel_rev3_title: "Clear who it’s for",
      pdp_rajel_rev3_body:
        "Men and boys — that’s us. Morning spray is now part of the routine.",
      pdp_balm_eyebrow: "UniKo Beauties | Body Care Range",
      pdp_balm_who: "For who: Men, Women, Kids — the whole family",
      pdp_balm_desc_en:
        "A moisturizing balm with aloe vera, vitamin E and cocoa butter or sesame butter. Apply all over the body for deep hydration that enhances the skin, bi idnillah.",
      pdp_balm_desc_fr:
        "Baume hydratant à l'aloe vera, à la vitamine E et au beurre de cacao ou de sésame. Appliquez sur tout le corps pour une hydratation profonde qui sublime la peau, bi idnillah.",
      pdp_balm_how_en:
        "Apply the balm all over the body. This balm provides deep hydration and enhances the skin, bi idnillah.",
      pdp_balm_how_fr:
        "Appliquez le baume sur tout le corps. Ce baume offre une hydratation profonde et sublime la peau, bi idnillah.",
      pdp_balm_ing_en: "Aloe vera, vitamin E, cocoa butter or sesame butter.",
      pdp_balm_ing_fr: "Aloe vera, vitamine E, beurre de cacao ou beurre de sésame.",
      pdp_balm_key1_title: "Aloe vera",
      pdp_balm_key1_desc: "A gentle botanical in the balm as you apply it all over the body.",
      pdp_balm_key2_title: "Vitamin E",
      pdp_balm_key2_desc: "An antioxidant care note that supports the deep-hydration ritual.",
      pdp_balm_key3_title: "Cocoa or sesame butter",
      pdp_balm_key3_desc: "A rich butter — cocoa or sesame — for comfort after you spread the balm on the body.",
      pdp_balm_faq_q1: "How do I use Moisturizing Balm?",
      pdp_balm_faq_a1: "Apply the balm all over the body.",
      pdp_balm_faq_q2: "What does it do?",
      pdp_balm_faq_a2: "This balm provides deep hydration and enhances the skin, bi idnillah.",
      pdp_balm_faq_q3: "Can the whole family use it?",
      pdp_balm_faq_a3: "Yes. It is for men, women and kids — the whole family.",
      pdp_balm_faq_q4: "What is in the balm?",
      pdp_balm_faq_a4: "Aloe vera, vitamin E, and cocoa butter or sesame butter.",
      pdp_balm_cmp_col2: "Regular body cream",
      pdp_balm_cmp_col3: "Drugstore lotion",
      pdp_balm_cmp_row1: "Aloe, vitamin E & butter",
      pdp_balm_cmp_row2: "All-over body apply",
      pdp_balm_cmp_row3: "Deep hydration",
      pdp_balm_cmp_row4: "Cocoa or sesame butter",
      pdp_balm_cmp_row5: "Whole family",
      pdp_balm_reviews_meta: "5.0 · 15 reviews",
      pdp_balm_rev1_title: "Deep hydration",
      pdp_balm_rev1_body:
        "I spread it all over after the shower. Skin feels cared for — the whole family uses the same jar.",
      pdp_balm_rev2_title: "Rich butter feel",
      pdp_balm_rev2_body:
        "Aloe, vitamin E and cocoa butter — it soaks in and the skin looks softer, bi idnillah.",
      pdp_balm_rev3_title: "One balm for everyone",
      pdp_balm_rev3_body:
        "Men, women and kids in our house. Simple: apply all over the body after bathing.",
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
      trust_title: "Certified botanical beauty",
      impact_eyebrow: "Nature’s beauty, naturally yours",
      impact_title: "Botanical care for hair, face, beard and body",
      impact_text:
        "Uniko Beauties is built around aloe vera and plant butters. From YIRI Soap and Facial Spray to Rajel Beard Spray, Hair Milk, Queeny Lotion and Moisturizing Balm — everyday rituals with certified organic botanicals, bi idnillah.",
      learn_more: "Learn more",
      home_cmp_title: "Uniko Beauties vs. other brands",
      home_cmp_feature: "Feature",
      home_cmp_other: "Typical",
      home_cmp_r1: "Aloe vera in the formulas",
      home_cmp_r2: "Hair, face, beard & body range",
      home_cmp_r3: "Whole-family options",
      home_cmp_r4: "Sulfate, silicone & paraben free",
      home_cmp_r5: "Halal, vegan & PETA marks",
      home_cmp_r6: "Clear who each product is for",
      home_faq_eyebrow: "Got questions?",
      home_faq_title: "Frequently asked questions",
      home_faq_q1: "What makes Uniko Beauties different?",
      home_faq_a1:
        "We are a botanical hair, face, beard and body range led by aloe vera — not a makeup brand. Formulas are sulfate, silicone and paraben free, with vegan, PETA and halal marks on the certifications row.",
      home_faq_q2: "Who can use Uniko products?",
      home_faq_a2:
        "Always check the product page. YIRI Soap, Hair Milk, Detangling Cream and Moisturizing Balm are for men, women and kids. Facial Spray, Mask Pouss+ and Xtremely Pretty Spray are for women and girls. Rajel Beard Spray is for men and boys. Queeny Lotion is for women and not for pregnant women.",
      home_faq_q3: "What makes your ingredients special?",
      home_faq_a3:
        "Aloe vera runs through the line, with vitamin E, shea or sesame butter, cocoa butter, basil, hibiscus, peppermint, tea tree, cinnamon and clove — chosen for cleanse, hydrate and overnight hair rituals.",
      home_faq_q4: "How do I use the face ritual?",
      home_faq_a4:
        "Cleanse with YIRI Soap: leave it on the face a few minutes, then rinse (reapply at night). Then shake Facial Spray and apply after YIRI, morning and evening, without adding other products. Facial Spray is for women and girls.",
      home_faq_q5: "How should I use hair and beard products?",
      home_faq_a5:
        "Aloe shampoo is for hair and body. Xtremely Pretty Spray and Queeny Lotion are overnight hair rituals. Rajel Beard Spray: shake and apply all over the beard, especially in the morning. Moisturizing Balm goes all over the body for deep hydration, bi idnillah.",
      home_faq_q6: "Do you offer free shipping?",
      home_faq_a6: "Yes. Delivery is free on orders over €95, as shown in the bar at the top of the site.",
      reviews_title: "Customer reviews",
      reviews_meta: "5.0 · range reviews",
      reviews_meta_aria: "Average rating 5 stars from Uniko product reviews",
      verified_buyer: "Verified buyer",
      verified_review: "Verified review",
      read_more: "Read more",
      r1_title: "Family shampoo",
      r1_body: "Aloe shampoo on hair and body — no sulfates, and the whole house uses it.",
      r1_product: "Uniko Beauties \u2014 Aloe vera shampoo",
      r2_title: "YIRI then spray",
      r2_body: "Leave YIRI on a few minutes, rinse, then Facial Spray morning and evening.",
      r2_product: "Uniko Beauties \u2014 YIRI Soap",
      r3_title: "Morning beard",
      r3_body: "Shake Rajel and mist the beard before I leave. Peppermint feels fresh.",
      r3_product: "Uniko Beauties \u2014 Rajel Beard Spray",
      r4_title: "Balm for everyone",
      r4_body: "Moisturizing Balm all over after the shower. Deep hydration, bi idnillah.",
      r4_product: "Uniko Beauties \u2014 Moisturizing Balm",
      footer_tagline: "100% Natural Beauty | Hair, face, beard and body",
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
        "Uniko Beauties \u2014 botanical care with aloe vera",
      drawer_note: "Hair, face, beard and body",
    },
    fr: {
      promo: "Livraison gratuite pour les commandes de plus de\u00a095\u00a0\u20ac",
      promo_aria: "Livraison gratuite",
      rewards: "R\u00e9compenses",
      nav_shop: "Boutique",
      nav_skincare: "Cheveux",
      nav_makeup: "Visage",
      nav_beard: "Barbe",
      nav_clearance: "Corps",
      nav_about: "\u00c0 propos",
      category_title: "Toute la gamme",
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
      pdp_subtitle: "Shampoing pour locks",
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
      pdp_yiri_eyebrow: "UniKo Beauties | Soin du visage",
      pdp_yiri_who: "Pour qui : hommes, femmes, enfants — toute la famille",
      pdp_yiri_desc_en:
        "A botanical face soap with aloe vera, basil and vegetable oils. Apply to the face, leave on for a few minutes, then rinse — and reapply at night before sleeping for best results.",
      pdp_yiri_desc_fr:
        "Savon botanique pour le visage à l'aloe vera, au basilic et aux huiles végétales. Appliquez sur le visage, laissez poser quelques minutes, puis rincez — et réappliquez le soir avant de dormir pour de meilleurs résultats.",
      pdp_yiri_how_en:
        "Apply the soap to the face and leave it on for a few minutes before rinsing. (Reapply at night before sleeping for best results.)",
      pdp_yiri_how_fr:
        "Appliquez le savon sur le visage et laissez poser quelques minutes avant de rincer. (Réappliquez le soir avant de dormir pour de meilleurs résultats.)",
      pdp_yiri_ing_en: "Aloe vera, basil, vegetable oils, sodium hydroxide, water.",
      pdp_yiri_ing_fr: "Aloe vera, basilique, huiles végétales, hydroxyde de sodium, eau.",
      pdp_yiri_key1_title: "Aloe vera",
      pdp_yiri_key1_desc: "Un soin botanique doux pour le visage pendant la pose de quelques minutes avant le rinçage.",
      pdp_yiri_key2_title: "Basilic",
      pdp_yiri_key2_desc: "Une note botanique fraîche, avec l'aloe vera et les huiles végétales.",
      pdp_yiri_key3_title: "Huiles végétales",
      pdp_yiri_key3_desc: "Des huiles végétales pour un confort après le rinçage du savon visage.",
      pdp_yiri_faq_q1: "Comment utiliser le savon YIRI ?",
      pdp_yiri_faq_a1: "Appliquez le savon sur le visage et laissez poser quelques minutes avant de rincer.",
      pdp_yiri_faq_q2: "Faut-il l'utiliser le soir ?",
      pdp_yiri_faq_a2: "Oui. Réappliquez le soir avant de dormir pour de meilleurs résultats.",
      pdp_yiri_faq_q3: "Toute la famille peut-elle l'utiliser ?",
      pdp_yiri_faq_a3: "Oui. Hommes, femmes et enfants — toute la famille.",
      pdp_yiri_faq_q4: "Quels sont les ingrédients ?",
      pdp_yiri_faq_a4: "Aloe vera, basilique, huiles végétales, hydroxyde de sodium et eau.",
      pdp_yiri_cmp_col2: "Savon classique",
      pdp_yiri_cmp_col3: "Nettoyant visage courant",
      pdp_yiri_cmp_row1: "Aloe, basilic & huiles végétales",
      pdp_yiri_cmp_row2: "Pose de quelques minutes",
      pdp_yiri_cmp_row3: "Pour toute la famille",
      pdp_yiri_cmp_row4: "Réapplication le soir",
      pdp_yiri_cmp_row5: "Hommes, femmes & enfants",
      pdp_yiri_reviews_meta: "5,0 · 16 avis",
      pdp_yiri_rev1_title: "Rituel visage en pose",
      pdp_yiri_rev1_body:
        "Je laisse poser quelques minutes puis je rince. La peau est nette, et la réapplication du soir est devenue un rituel.",
      pdp_yiri_rev2_title: "Aloe et basilic",
      pdp_yiri_rev2_body:
        "Ingrédients simples et mode d'emploi clair pour le visage. Toute la famille utilise le même savon.",
      pdp_yiri_rev3_title: "Doux pour la famille",
      pdp_yiri_rev3_body:
        "Hommes, femmes et enfants chez nous utilisent YIRI sur le visage. Facile à suivre le soir aussi.",
      pdp_facial_eyebrow: "UniKo Beauties | Soin du visage",
      pdp_facial_who: "Pour qui : femmes, filles",
      pdp_facial_desc_en:
        "A face spray with aloe vera and vitamin E. Shake well and apply after cleansing with YIRI soap, morning and evening, without adding any other products.",
      pdp_facial_desc_fr:
        "Brume visage à l'aloe vera et à la vitamine E. Bien agiter et appliquer après le nettoyage au savon YIRI, matin et soir, sans ajouter d'autres produits.",
      pdp_facial_how_en:
        "Shake well and gently apply the spray after thoroughly cleansing your face with the Yiri soap. It is recommended to use it in the morning and evening without adding any other products.",
      pdp_facial_how_fr:
        "Bien agiter et appliquer délicatement le spray après avoir soigneusement nettoyé le visage avec le savon Yiri. Il est recommandé de l'utiliser le matin et le soir, sans ajouter d'autres produits.",
      pdp_facial_ing_en: "Aloe vera, vitamin E.",
      pdp_facial_ing_fr: "Aloe vera, vitamine E.",
      pdp_facial_key1_title: "Aloe vera",
      pdp_facial_key1_desc: "Une brume botanique douce pour le visage après le nettoyage au savon YIRI.",
      pdp_facial_key2_title: "Vitamine E",
      pdp_facial_key2_desc: "Une note antioxydante pour terminer le rituel visage du matin et du soir.",
      pdp_facial_key3_title: "Après le savon YIRI",
      pdp_facial_key3_desc: "À appliquer seulement après un nettoyage soigneux au savon YIRI — sans autres produits.",
      pdp_facial_faq_q1: "Comment utiliser Facial Spray ?",
      pdp_facial_faq_a1: "Bien agiter et appliquer délicatement après un nettoyage soigneux au savon YIRI.",
      pdp_facial_faq_q2: "Quand l'utiliser ?",
      pdp_facial_faq_a2: "Le matin et le soir, sans ajouter d'autres produits.",
      pdp_facial_faq_q3: "Pour qui ?",
      pdp_facial_faq_a3: "Formulé pour les femmes et les filles.",
      pdp_facial_faq_q4: "Quels sont les ingrédients ?",
      pdp_facial_faq_a4: "Aloe vera et vitamine E.",
      pdp_facial_cmp_col2: "Brume visage classique",
      pdp_facial_cmp_col3: "Lotion drugstore",
      pdp_facial_cmp_row1: "Aloe vera & vitamine E",
      pdp_facial_cmp_row2: "Après le savon YIRI",
      pdp_facial_cmp_row3: "Matin et soir",
      pdp_facial_cmp_row4: "Sans autres produits",
      pdp_facial_cmp_row5: "Pour femmes & filles",
      pdp_facial_reviews_meta: "5,0 · 14 avis",
      pdp_facial_rev1_title: "YIRI puis le spray",
      pdp_facial_rev1_body:
        "Je nettoie avec le savon YIRI puis je vaporise. Matin et soir, simple — je n'ajoute rien d'autre.",
      pdp_facial_rev2_title: "Brume d'aloe douce",
      pdp_facial_rev2_body:
        "Agiter, vaporiser, c'est tout. Vitamine E et aloe, légers sur le visage après un bon nettoyage.",
      pdp_facial_rev3_title: "Mon matin et mon soir",
      pdp_facial_rev3_body:
        "C'est clair : pour les femmes et les filles. Deux fois par jour, sans produits en plus.",
      pdp_rajel_eyebrow: "UniKo Beauties | Soin de la barbe",
      pdp_rajel_who: "Pour qui : hommes, garçons",
      pdp_rajel_desc_en:
        "A beard spray with aloe vera, peppermint essential oil and vitamin E. Shake well and apply delicately all over the beard — especially in the morning.",
      pdp_rajel_desc_fr:
        "Spray barbe à l'aloe vera, à l'huile essentielle de menthe poivrée et à la vitamine E. Bien agiter et appliquer délicatement sur toute la barbe — surtout le matin.",
      pdp_rajel_how_en:
        "Shake well and delicately apply all over your beard. It is recommended to use it especially in the morning.",
      pdp_rajel_how_fr:
        "Bien agiter et appliquer délicatement sur toute la barbe. Il est recommandé de l'utiliser surtout le matin.",
      pdp_rajel_ing_en: "Aloe vera, peppermint essential oil, vitamin E.",
      pdp_rajel_ing_fr: "Aloe vera, huile essentielle de menthe poivrée, vitamine E.",
      pdp_rajel_key1_title: "Aloe vera",
      pdp_rajel_key1_desc: "Un botanique doux pour la barbe quand vous vaporisez Rajel le matin.",
      pdp_rajel_key2_title: "Huile essentielle de menthe poivrée",
      pdp_rajel_key2_desc: "Une note fraîche pour une barbe nette et réveillée.",
      pdp_rajel_key3_title: "Vitamine E",
      pdp_rajel_key3_desc: "Une note antioxydante pour terminer le rituel barbe du matin.",
      pdp_rajel_faq_q1: "Comment utiliser Rajel Beard Spray ?",
      pdp_rajel_faq_a1: "Bien agiter et appliquer délicatement sur toute la barbe.",
      pdp_rajel_faq_q2: "Quand l'utiliser ?",
      pdp_rajel_faq_a2: "Il est recommandé de l'utiliser surtout le matin.",
      pdp_rajel_faq_q3: "Pour qui ?",
      pdp_rajel_faq_a3: "Formulé pour les hommes et les garçons.",
      pdp_rajel_faq_q4: "Quels sont les ingrédients ?",
      pdp_rajel_faq_a4: "Aloe vera, huile essentielle de menthe poivrée et vitamine E.",
      pdp_rajel_cmp_col2: "Huile à barbe classique",
      pdp_rajel_cmp_col3: "Baume drugstore",
      pdp_rajel_cmp_row1: "Aloe, menthe & vitamine E",
      pdp_rajel_cmp_row2: "Brume sur toute la barbe",
      pdp_rajel_cmp_row3: "Rituel du matin",
      pdp_rajel_cmp_row4: "Huile essentielle de menthe",
      pdp_rajel_cmp_row5: "Pour hommes & garçons",
      pdp_rajel_reviews_meta: "5,0 · 12 avis",
      pdp_rajel_rev1_title: "Brume barbe du matin",
      pdp_rajel_rev1_body:
        "Agiter et vaporiser partout. La menthe est fraîche et ça prend une minute avant de sortir.",
      pdp_rajel_rev2_title: "Léger, pas gras",
      pdp_rajel_rev2_body:
        "Aloe et vitamine E, pas d'huile lourde. J'applique délicatement et la barbe reste douce.",
      pdp_rajel_rev3_title: "Cible claire",
      pdp_rajel_rev3_body:
        "Hommes et garçons — c'est nous. Le spray du matin fait partie du rituel.",
      pdp_balm_eyebrow: "UniKo Beauties | Soin du corps",
      pdp_balm_who: "Pour qui : hommes, femmes, enfants — toute la famille",
      pdp_balm_desc_en:
        "A moisturizing balm with aloe vera, vitamin E and cocoa butter or sesame butter. Apply all over the body for deep hydration that enhances the skin, bi idnillah.",
      pdp_balm_desc_fr:
        "Baume hydratant à l'aloe vera, à la vitamine E et au beurre de cacao ou de sésame. Appliquez sur tout le corps pour une hydratation profonde qui sublime la peau, bi idnillah.",
      pdp_balm_how_en:
        "Apply the balm all over the body. This balm provides deep hydration and enhances the skin, bi idnillah.",
      pdp_balm_how_fr:
        "Appliquez le baume sur tout le corps. Ce baume offre une hydratation profonde et sublime la peau, bi idnillah.",
      pdp_balm_ing_en: "Aloe vera, vitamin E, cocoa butter or sesame butter.",
      pdp_balm_ing_fr: "Aloe vera, vitamine E, beurre de cacao ou beurre de sésame.",
      pdp_balm_key1_title: "Aloe vera",
      pdp_balm_key1_desc: "Un botanique doux dans le baume, à appliquer sur tout le corps.",
      pdp_balm_key2_title: "Vitamine E",
      pdp_balm_key2_desc: "Une note antioxydante pour le rituel d'hydratation profonde.",
      pdp_balm_key3_title: "Beurre de cacao ou de sésame",
      pdp_balm_key3_desc: "Un beurre riche — cacao ou sésame — pour le confort après l'application.",
      pdp_balm_faq_q1: "Comment utiliser Moisturizing Balm ?",
      pdp_balm_faq_a1: "Appliquez le baume sur tout le corps.",
      pdp_balm_faq_q2: "Que fait-il ?",
      pdp_balm_faq_a2: "Ce baume offre une hydratation profonde et sublime la peau, bi idnillah.",
      pdp_balm_faq_q3: "Toute la famille peut-elle l'utiliser ?",
      pdp_balm_faq_a3: "Oui. Hommes, femmes et enfants — toute la famille.",
      pdp_balm_faq_q4: "Quels sont les ingrédients ?",
      pdp_balm_faq_a4: "Aloe vera, vitamine E, et beurre de cacao ou de sésame.",
      pdp_balm_cmp_col2: "Crème corps classique",
      pdp_balm_cmp_col3: "Lait drugstore",
      pdp_balm_cmp_row1: "Aloe, vitamine E & beurre",
      pdp_balm_cmp_row2: "Application sur tout le corps",
      pdp_balm_cmp_row3: "Hydratation profonde",
      pdp_balm_cmp_row4: "Beurre de cacao ou de sésame",
      pdp_balm_cmp_row5: "Toute la famille",
      pdp_balm_reviews_meta: "5,0 · 15 avis",
      pdp_balm_rev1_title: "Hydratation profonde",
      pdp_balm_rev1_body:
        "Je l'étale partout après la douche. La peau est soignée — toute la famille utilise le même pot.",
      pdp_balm_rev2_title: "Beurre riche",
      pdp_balm_rev2_body:
        "Aloe, vitamine E et beurre de cacao — ça pénètre et la peau paraît plus douce, bi idnillah.",
      pdp_balm_rev3_title: "Un baume pour tous",
      pdp_balm_rev3_body:
        "Hommes, femmes et enfants chez nous. Simple : appliquer sur tout le corps après le bain.",
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
      trust_title: "Beauté botanique certifiée",
      impact_eyebrow: "La beauté de la nature, naturellement vôtre",
      impact_title: "Soins botaniques cheveux, visage, barbe et corps",
      impact_text:
        "Uniko Beauties s'appuie sur l'aloe vera et les beurres végétaux. Du savon YIRI et du Facial Spray au Rajel Beard Spray, Hair Milk, Queeny Lotion et Moisturizing Balm — des rituels du quotidien, bi idnillah.",
      learn_more: "En savoir plus",
      home_cmp_title: "Uniko Beauties face aux autres marques",
      home_cmp_feature: "Atout",
      home_cmp_other: "Classique",
      home_cmp_r1: "Aloe vera dans les formules",
      home_cmp_r2: "Gamme cheveux, visage, barbe et corps",
      home_cmp_r3: "Options pour toute la famille",
      home_cmp_r4: "Sans sulfates, silicones ni parabènes",
      home_cmp_r5: "Halal, végan et PETA",
      home_cmp_r6: "Pour qui : indiqué sur chaque fiche",
      home_faq_eyebrow: "Des questions ?",
      home_faq_title: "Questions fréquentes",
      home_faq_q1: "Qu'est-ce qui distingue Uniko Beauties ?",
      home_faq_a1:
        "Nous sommes une gamme botanique cheveux, visage, barbe et corps, menée par l'aloe vera — pas une marque de maquillage. Sans sulfates, silicones ni parabènes, avec les badges végan, PETA et halal.",
      home_faq_q2: "Qui peut utiliser les produits Uniko ?",
      home_faq_a2:
        "Vérifiez chaque fiche. YIRI, Hair Milk, Detangling Cream et Moisturizing Balm : hommes, femmes, enfants. Facial Spray, Mask Pouss+ et Xtremely Pretty Spray : femmes et filles. Rajel Beard Spray : hommes et garçons. Queeny Lotion : femmes, pas pendant la grossesse.",
      home_faq_q3: "Qu'ont de spécial vos ingrédients ?",
      home_faq_a3:
        "L'aloe vera traverse la gamme, avec vitamine E, karité ou sésame, cacao, basilic, hibiscus, menthe, tea tree, cannelle et clou de girofle — pour nettoyer, hydrater et les rituels capillaires de nuit.",
      home_faq_q4: "Comment suivre le rituel visage ?",
      home_faq_a4:
        "Nettoyez avec le savon YIRI : laissez poser quelques minutes, rincez (réappliquez le soir). Puis agitez le Facial Spray après YIRI, matin et soir, sans autres produits. Facial Spray : femmes et filles.",
      home_faq_q5: "Cheveux et barbe : comment faire ?",
      home_faq_a5:
        "Le shampoing aloe est pour cheveux et corps. Xtremely Pretty Spray et Queeny Lotion sont des rituels de nuit. Rajel : agiter et vaporiser sur toute la barbe, surtout le matin. Le baume s'applique sur tout le corps, bi idnillah.",
      home_faq_q6: "Proposez-vous la livraison gratuite ?",
      home_faq_a6: "Oui. Livraison gratuite dès 95 €, comme indiqué dans la barre en haut du site.",
      reviews_title: "Avis clients",
      reviews_meta: "5,0 · avis de la gamme",
      reviews_meta_aria: "Note moyenne 5 étoiles sur les avis Uniko",
      verified_buyer: "Acheteuse v\u00e9rifi\u00e9e",
      verified_review: "Avis v\u00e9rifi\u00e9",
      read_more: "Lire la suite",
      r1_title: "Shampoing famille",
      r1_body: "Shampoing aloe cheveux et corps — sans sulfates, toute la maison l'utilise.",
      r1_product: "Uniko Beauties \u2014 Aloe vera shampoo",
      r2_title: "YIRI puis le spray",
      r2_body: "YIRI quelques minutes, rinçage, puis Facial Spray matin et soir.",
      r2_product: "Uniko Beauties \u2014 YIRI Soap",
      r3_title: "Barbe du matin",
      r3_body: "J'agite Rajel et je vaporise la barbe avant de sortir. Menthe fraîche.",
      r3_product: "Uniko Beauties \u2014 Rajel Beard Spray",
      r4_title: "Un baume pour tous",
      r4_body: "Moisturizing Balm partout après la douche. Hydratation profonde, bi idnillah.",
      r4_product: "Uniko Beauties \u2014 Moisturizing Balm",
      footer_tagline:
        "Beaut\u00e9 100 % naturelle | Cheveux, visage, barbe et corps",
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
        "Uniko Beauties \u2014 soins botaniques à l'aloe vera",
      drawer_note: "Cheveux, visage, barbe et corps",
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