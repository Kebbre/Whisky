/* ==============================================================
   WHISKY DATA — whiskies.js
   ──────────────────────────────────────────────────────────────
   This file is the single source of truth for the bottle list.
   index.html loads it via <script src="whiskies.js"></script>.

   HOW TO ADD OR UPDATE A BOTTLE
   ─────────────────────────────
   1. Copy the template below.
   2. Paste it anywhere inside the WHISKIES array (before the
      closing ] ).
   3. Save. Refresh index.html in the browser.

   TEMPLATE:
   {
     distillery:      "Distillery Name",
     name:            "Whisky Name",
     special:         "Cask finish, edition info, etc. (or empty string)",
     age:             12,        // number of years — or null for NAS
     abv:             46.0,      // numeric ABV
     abvInferred:     false,     // true = estimated, not read from label
     country:         "Scotland",// Scotland | Japan | Ireland | USA | France | Other
     region:          "Speyside",// or empty string
     type:            "Single Malt",
     tasting: {
       en: "English tasting notes",
       fr: "Notes de dégustation en français",
     },
     tastingInferred: false,    // true = notes are estimated
     tags:   ["fruity","sweet"],// pick from:
             // peated, sherried, fruity, sweet, spicy, maritime, floral,
             // vanilla, wine-cask, cask-strength, smoky, woody, creamy,
             // tropical, citrus, light, exotic, honeyed
     accessibility: "intermediate", // beginner | intermediate | advanced
   },
   ============================================================== */

const WHISKIES = [
  {
    distillery: "Aoyama Whisky (bottling)",
    name: "Pure Malt Peated — Sakura Hogshead Finish",
    special: "Private bottling — 24/07/2016",
    age: 12, abv: 54.5, abvInferred: true,
    country: "Japan", region: "", type: "Pure Malt",
    tasting: {
      en: "Smoke and peat softened by cherry blossom sweetness from sakura wood; light, delicate floral finish.",
      fr: "Fumée et tourbe adoucies par la douceur florale du bois de cerisier sakura ; finale légère et florale.",
    },
    tastingInferred: true,
    tags: ["peated","floral","cask-strength"],
    accessibility: "advanced",
  },
  {
    distillery: "Aoyama Whisky (bottling)",
    name: "Pure Malt Peated — Mizunara Hogshead Finish",
    special: "Private bottling — 24/07/2016",
    age: 12, abv: 53.5, abvInferred: true,
    country: "Japan", region: "", type: "Pure Malt",
    tasting: {
      en: "Peated base with exotic Mizunara influence — sandalwood, incense, coconut and light spice.",
      fr: "Base tourbée rehaussée par les notes exotiques du chêne Mizunara : santal, encens, noix de coco et épices légères.",
    },
    tastingInferred: true,
    tags: ["peated","woody","cask-strength","exotic"],
    accessibility: "advanced",
  },
  {
    distillery: "White Oak Distillery (Eigashima Shuzo)",
    name: "Tokinoka Black",
    special: "Sake Cask Finish",
    age: null, abv: 40, abvInferred: true,
    country: "Japan", region: "", type: "Blended Whisky",
    tasting: {
      en: "Soft rice sweetness, honey, light vanilla, gentle sake-influenced floral notes.",
      fr: "Douceur de riz, miel, vanille légère, notes florales délicates issues du fût de saké.",
    },
    tastingInferred: false,
    tags: ["sweet","floral","light","vanilla"],
    accessibility: "beginner",
  },
  {
    distillery: "Isle of Raasay Distillery",
    name: "Hebridean Single Malt — R-02 Moine",
    special: "Batch R-02; lightly peated; Bourbon, Bordeaux Red Wine & Rye casks; 46.4% vol",
    age: null, abv: 46.4, abvInferred: false,
    country: "Scotland", region: "Hebrides", type: "Single Malt",
    tasting: {
      en: "Light smoke, citrus zest, spice; Bordeaux red wine and rye cask influence; coastal maritime character.",
      fr: "Légère fumée, zeste d'agrumes, épices ; influence des fûts de vin rouge de Bordeaux et de seigle ; caractère maritime côtier.",
    },
    tastingInferred: false,
    tags: ["peated","maritime","spicy","fruity","wine-cask"],
    accessibility: "intermediate",
  },
  {
    distillery: "King's Inch Distillery",
    name: "King's Inch — Glasgow Single Malt",
    special: "",
    age: null, abv: 46, abvInferred: false,
    country: "Scotland", region: "Glasgow", type: "Single Malt",
    tasting: {
      en: "Light, fruity, cereal sweetness, gentle orchard fruit; easy-going Lowland-style profile.",
      fr: "Léger, fruité, douceur céréalière, fruits vergers frais ; profil accessible de style Lowland.",
    },
    tastingInferred: true,
    tags: ["fruity","light","floral"],
    accessibility: "intermediate",
  },
  {
    distillery: "Lindores Abbey Distillery",
    name: "The Casks of Lindores — Limited Edition",
    special: "Unique limited edition distillery strength; one of three core cask expressions",
    age: null, abv: 46, abvInferred: true,
    country: "Scotland", region: "Fife (Lowlands)", type: "Single Malt",
    tasting: {
      en: "Fruity and floral with light oak, vanilla and toffee; clean, elegant Lowland character.",
      fr: "Fruité et floral avec légère vanille, toffee et chêne doux ; caractère Lowland propre et élégant.",
    },
    tastingInferred: true,
    tags: ["fruity","vanilla","light","floral"],
    accessibility: "intermediate",
  },
  {
    distillery: "Distillerie du Périgord",
    name: "Lascaw 15 Year Old",
    special: "Blended Malt",
    age: 15, abv: 40, abvInferred: false,
    country: "France", region: "Périgord", type: "Blended Malt",
    tasting: {
      en: "Rounded, fruity, soft dried fruit, gentle oak spice; French terroir influence.",
      fr: "Arrondi, fruité, fruits secs moelleux, légères épices boisées ; influence du terroir français.",
    },
    tastingInferred: true,
    tags: ["fruity","woody","light"],
    accessibility: "intermediate",
  },
  {
    distillery: "Bruichladdich — Port Charlotte",
    name: "Port Charlotte 10",
    special: "Heavily peated Islay Single Malt — 40 ppm; 50% vol",
    age: 10, abv: 50, abvInferred: false,
    country: "Scotland", region: "Islay", type: "Single Malt",
    tasting: {
      en: "Heavily peated (40 ppm) — bonfire smoke, barbecued citrus, sea salt, dark chocolate and vanilla from bourbon casks.",
      fr: "Fortement tourbé (40 ppm) — fumée de feu de camp, agrumes grillés, sel marin, chocolat noir et vanille issue des fûts bourbon.",
    },
    tastingInferred: false,
    tags: ["peated","smoky","maritime","spicy","citrus"],
    accessibility: "advanced",
  },
  {
    distillery: "Talisker Distillery",
    name: "Wilder Seas — Talisker × Parley",
    special: "Ocean preservation collaboration; finished in XO Cognac casks",
    age: null, abv: 45.8, abvInferred: true,
    country: "Scotland", region: "Isle of Skye", type: "Single Malt",
    tasting: {
      en: "Classic Talisker maritime smoke and pepper, enriched by cognac-led dried fruit, vanilla and warmth.",
      fr: "Fumée maritime classique de Talisker et poivre, enrichis par des fruits secs et la douceur du cognac XO.",
    },
    tastingInferred: false,
    tags: ["peated","maritime","spicy","fruity"],
    accessibility: "intermediate",
  },
  {
    distillery: "The Balvenie",
    name: "The Week of Peat — 19 Year Old",
    special: "Peated for one week per year only; story of Ian Millar, Malt Master",
    age: 19, abv: 47.5, abvInferred: true,
    country: "Scotland", region: "Speyside", type: "Single Malt",
    tasting: {
      en: "Gentle peat smoke woven with Balvenie's signature honey, vanilla, dried fruit and oak spice — beautifully balanced.",
      fr: "Légère fumée tourbée entrelacée avec le miel, la vanille et les fruits secs typiques de Balvenie ; équilibre remarquable.",
    },
    tastingInferred: false,
    tags: ["peated","honeyed","fruity","vanilla"],
    accessibility: "intermediate",
  },
  {
    distillery: "The Balvenie",
    name: "PortWood 21",
    special: "Finished in Ruby Port Pipes",
    age: 21, abv: 40, abvInferred: false,
    country: "Scotland", region: "Speyside", type: "Single Malt",
    tasting: {
      en: "Rich dried fruit, toffee, cinnamon, rose petal; port pipe finish adds deep ruby fruit layers.",
      fr: "Fruits secs riches, toffee, cannelle, pétale de rose ; la finition en pipes de Porto apporte des couches de fruits rubis profonds.",
    },
    tastingInferred: false,
    tags: ["fruity","sherried","sweet","wine-cask"],
    accessibility: "beginner",
  },
  {
    distillery: "Old Bushmills Distillery",
    name: "Bushmills 16 — Rare",
    special: "Matured in Oloroso Sherry & Bourbon casks; finished in Port Pipes; 40% vol",
    age: 16, abv: 40, abvInferred: false,
    country: "Ireland", region: "County Antrim", type: "Single Malt Irish Whiskey",
    tasting: {
      en: "Dark fruit, nuts, spice and amber sweetness from oloroso and bourbon maturation with port pipe finish.",
      fr: "Fruits sombres, noix, épices et douceur ambrée issues de la maturation en oloroso et bourbon avec finition en pipes de Porto.",
    },
    tastingInferred: false,
    tags: ["sherried","fruity","sweet","spicy"],
    accessibility: "intermediate",
  },
  {
    distillery: "Jim Beam (Booker Noe heritage)",
    name: "Booker's — Small Batch Bourbon",
    special: "Uncut & Unfiltered; cask strength batch release",
    age: null, abv: 63, abvInferred: true,
    country: "USA", region: "Kentucky", type: "Straight Bourbon",
    tasting: {
      en: "Bold vanilla, caramel, toasted oak, dark spice, intense corn sweetness — powerful and full-bodied.",
      fr: "Vanille prononcée, caramel, chêne grillé, épices sombres, douceur intense de maïs ; puissant et charpenté.",
    },
    tastingInferred: false,
    tags: ["vanilla","spicy","woody","cask-strength","sweet"],
    accessibility: "advanced",
  },
  {
    distillery: "Glenmorangie",
    name: "The Tribute — 16 Year Old Heritage Spirit Batch",
    special: "Heritage Spirit Batch; lightly smoked expression",
    age: 16, abv: 43, abvInferred: true,
    country: "Scotland", region: "Highlands", type: "Single Malt",
    tasting: {
      en: "Creamy and rounded, gentle smoke, citrus, vanilla — zesty and elegant with Glenmorangie's hallmark finesse.",
      fr: "Onctueux et arrondi, légère fumée, agrumes, vanille ; zesté et élégant dans le style typique de Glenmorangie.",
    },
    tastingInferred: true,
    tags: ["vanilla","citrus","light","fruity","floral"],
    accessibility: "intermediate",
  },
  {
    distillery: "Isle of Jura Distillery",
    name: "Jura — The Bay",
    special: "Ex-Bourbon barrels enhanced by 15-year-old Pedro Ximénez casks; 44% vol",
    age: 12, abv: 44, abvInferred: false,
    country: "Scotland", region: "Isle of Jura", type: "Single Malt",
    tasting: {
      en: "Toffee apple, honey, ginger (as stated on label), warm spice, light fruit — clean and warming.",
      fr: "Pomme toffee, miel, gingembre (tel qu'indiqué sur l'étiquette), épices chaudes, légèreté fruitée ; propre et chaleureux.",
    },
    tastingInferred: false,
    tags: ["sweet","fruity","spicy","sherried","honeyed"],
    accessibility: "beginner",
  },
  {
    distillery: "Douglas Laing & Co.",
    name: "The Gauldrons — Campbeltown Blended Malt",
    special: "Small batch; non-chill filtered",
    age: null, abv: 46, abvInferred: true,
    country: "Scotland", region: "Campbeltown", type: "Blended Malt",
    tasting: {
      en: "Campbeltown brine, oily texture, light smoke, dried fruit, honeycomb; characteristic coastal complexity.",
      fr: "Iode et sel de Campbeltown, texture huileuse, légère fumée, fruits secs, miel en rayon ; complexité côtière caractéristique.",
    },
    tastingInferred: true,
    tags: ["maritime","smoky","fruity","honeyed"],
    accessibility: "intermediate",
  },
  {
    distillery: "Tullibardine Distillery",
    name: "Tullibardine 225 — Sauternes Cask Finish",
    special: "Finished in 225-litre Sauternes barriques",
    age: null, abv: 43, abvInferred: true,
    country: "Scotland", region: "Perthshire (Highlands)", type: "Single Malt",
    tasting: {
      en: "Sweet white wine character, peach, honey, light vanilla, floral — elegant and fruity.",
      fr: "Caractère doux de vin blanc, pêche, miel, légère vanille, floral ; élégant et fruité.",
    },
    tastingInferred: false,
    tags: ["sweet","fruity","floral","wine-cask","vanilla"],
    accessibility: "beginner",
  },
  {
    distillery: "Nikka Whisky",
    name: "Nikka Coffey Grain Whisky",
    special: "Produced using a traditional Coffey (continuous) still — rare for Japan; 45% vol",
    age: null, abv: 45, abvInferred: false,
    country: "Japan", region: "", type: "Grain Whisky",
    tasting: {
      en: "Creamy vanilla, tropical fruit, coconut, soft caramel — unusually rich and textured for a grain whisky.",
      fr: "Vanille crémeuse, fruits tropicaux, noix de coco, caramel doux — d'une richesse inhabituelle pour un grain whisky.",
    },
    tastingInferred: false,
    tags: ["sweet","creamy","vanilla","tropical"],
    accessibility: "beginner",
  },
  {
    distillery: "Talisker Distillery",
    name: "Talisker 20 Year Old — Natural Cask Strength",
    special: "Distilled 1982 — Limited Edition 1 of 12,000; Natural Refill Casks; 58.8% vol",
    age: 20, abv: 58.8, abvInferred: false,
    country: "Scotland", region: "Isle of Skye", type: "Single Malt",
    tasting: {
      en: "Intense maritime smoke, pepper, dried fruit, leather, coastal brine — complex and rare, a collector's dram.",
      fr: "Fumée maritime intense, poivre, fruits secs, cuir, iode ; complexe et rare — un dram de collection.",
    },
    tastingInferred: true,
    tags: ["peated","maritime","spicy","smoky","cask-strength"],
    accessibility: "advanced",
  },
  {
    distillery: "Suntory (Yamazaki / Hakushu / Chita)",
    name: "Hibiki 21",
    special: "Japanese Harmony blend — 21 Year Old",
    age: 21, abv: 43, abvInferred: true,
    country: "Japan", region: "", type: "Blended Whisky",
    tasting: {
      en: "Sandalwood, rose, Mizunara oak, dried fruit, dark chocolate and light smoke — one of the world's finest blends.",
      fr: "Santal, rose, chêne Mizunara, fruits secs, chocolat noir et légère fumée ; l'un des plus grands assemblages mondiaux.",
    },
    tastingInferred: false,
    tags: ["floral","fruity","woody","sweet","exotic"],
    accessibility: "intermediate",
  },
  {
    // Opened: 2026-05-18 — moved from investment portfolio to current opened selection.
    distillery: "John Dewar & Sons",
    name: "Dewar's 26 — Double Double Aged",
    special: "Travel Exclusive 500ml; quadruple-matured (Double Double process); Oloroso Sherry cask finish; bottled at 46% vol; opened 18/05/2026",
    age: 26, abv: 46, abvInferred: false,
    country: "Scotland", region: "Blended Scotch", type: "Blended Scotch",
    tasting: {
      en: "Nose: perfumed and floral, honeyed, with light tropical fruit. Palate: intensely sweet and herbal; meringue, pineapple, honey and hazelnuts. Finish: clean and bright, with lingering nuttiness and a gentle sherry-influenced sweetness. A polished, fruit-forward blend showcasing the Double Double quadruple-maturation process. (Source: IWSC official tasting notes; Whiskybase community rating 89.3/100.)",
      fr: "Nez : parfumé et floral, miellé, légères notes de fruits tropicaux. Bouche : intensément sucrée et herbacée ; meringue, ananas, miel et noisettes. Finale : nette et lumineuse, sur une persistance de fruits à coque et une douceur discrète issue du fût de sherry. Un assemblage poli et fruité illustrant le procédé de quadruple maturation Double Double. (Source : notes officielles IWSC ; note Whiskybase 89,3/100.)",
    },
    tastingInferred: false,
    tags: ["sweet","fruity","honeyed","floral","tropical"],
    accessibility: "intermediate",
  },
  {
    distillery: "Distillerie Warenghem",
    name: "Armorik — Sherry Cask",
    special: "Whisky Breton; distilled and matured in Brittany; 46% vol",
    age: null, abv: 46, abvInferred: false,
    country: "France", region: "Brittany (Bretagne)", type: "Single Malt",
    tasting: {
      en: "Rich dried fruit, raisin, chocolate, spice with distinctive Breton character — full and warming.",
      fr: "Fruits secs riches, raisins, chocolat, épices avec le caractère breton typique ; chaleureux et riche.",
    },
    tastingInferred: true,
    tags: ["sherried","fruity","spicy","sweet"],
    accessibility: "intermediate",
  },
  {
    distillery: "Distillerie Warenghem",
    name: "Armorik — Double Maturation",
    special: "Whisky Breton; first in Breton oak (chêne de Bretagne), then Sherry casks",
    age: null, abv: 46, abvInferred: true,
    country: "France", region: "Brittany (Bretagne)", type: "Single Malt",
    tasting: {
      en: "Breton oak earthiness, fruit cake, gentle spice, honey — uniquely French with sherry depth.",
      fr: "Notes boisées bretonnes, gâteau aux fruits, épices douces, miel ; influence unique du chêne local puis des fûts de sherry.",
    },
    tastingInferred: true,
    tags: ["woody","fruity","sherried","honeyed"],
    accessibility: "intermediate",
  },
  {
    distillery: "Distillerie Warenghem",
    name: "Armorik — Classic",
    special: "Whisky Breton; entry-level expression; 46% vol",
    age: null, abv: 46, abvInferred: false,
    country: "France", region: "Brittany (Bretagne)", type: "Single Malt",
    tasting: {
      en: "Light, fruity, cereal-forward, clean and gentle — the most accessible expression in the Armorik range.",
      fr: "Léger, fruité, céréalier, propre et doux — l'expression la plus accessible de la gamme Armorik.",
    },
    tastingInferred: true,
    tags: ["fruity","light","floral"],
    accessibility: "beginner",
  },
  {
    distillery: "Fondaudège Distillery",
    name: "Fondaudège — Pur Malt, Grand Cru Bordelais Finish",
    special: "Finition Grand Cru Bordelais; Whisky Français",
    age: null, abv: 43, abvInferred: true,
    country: "France", region: "Bordeaux", type: "Pure Malt",
    tasting: {
      en: "Soft malt, red berries, Bordeaux grape tannins, vanilla — an elegant French wine-whisky crossover.",
      fr: "Malt doux, baies rouges, tanins de raisin Grand Cru bordelais, vanille ; élégant mariage whisky-vin.",
    },
    tastingInferred: true,
    tags: ["fruity","wine-cask","light","vanilla"],
    accessibility: "intermediate",
  },
  {
    distillery: "Domaine de La Pèze",
    name: "Moyssou — Whisky Paysan Single Malt",
    special: "Harvest (Moisson) 2020; grain grown & distilled on the estate; Aveyron, France",
    age: null, abv: 46, abvInferred: true,
    country: "France", region: "Aveyron", type: "Single Malt",
    tasting: {
      en: "Fresh and rustic — cereal grain, light fruit, distinctive farmhouse character, gentle oak.",
      fr: "Frais et rustique — grain céréalier, légers fruits, caractère de distillerie fermière, chêne délicat.",
    },
    tastingInferred: true,
    tags: ["light","fruity","floral"],
    accessibility: "intermediate",
  },
]; // ← END OF WHISKIES ARRAY

