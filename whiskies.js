/* ==============================================================
   WHISKY DATA  ·  whiskies.js
   ──────────────────────────────────────────────────────────────
   Single source of truth for the bottle list.
   index.html loads it via <script src="whiskies.js"></script>.

   HOW TO ADD OR UPDATE A BOTTLE
   ─────────────────────────────
   1. Copy any entry below as a template.
   2. Paste anywhere inside the WHISKIES array (before the
      closing ] ).
   3. Save. Refresh index.html in the browser.

   FIELD KEY
   ─────────
   special           cask info, edition, batch, ABV; or empty string
   abvInferred       true if ABV is not confirmed on label or source
   tastingInferred   true if notes were estimated, not sourced
   accessibility     beginner | intermediate | advanced
   tags              choose from:
                     peated, sherried, fruity, sweet, spicy, maritime,
                     floral, vanilla, wine-cask, cask-strength, smoky,
                     woody, creamy, tropical, citrus, light, exotic,
                     honeyed

   AUDIT TRAIL
   ───────────
   Tasting notes cross-checked against distillery sites, IWSC,
   Whisky Advocate, Master of Malt, Whisky Exchange, Whiskybase,
   drinkhacker, thewhiskeywash, dramface, malt-review and others.
   Last audited: 18/05/2026.
   ============================================================== */

const WHISKIES = [
  {
    distillery: "Aoyama Whisky (bottling)",
    name: "Pure Malt Peated — Sakura Hogshead Finish",
    special: "Private bottling — 24/07/2016; no public listing",
    age: 12, abv: 54.5, abvInferred: true,
    country: "Japan", region: "", type: "Pure Malt",
    tasting: {
      en: "Nose: peat smoke meeting delicate cherry-blossom florals; light woodsmoke and dried hay. Palate: ashy peat softened by sweet sakura honey, pink pepper, stewed apple. Finish: long, smoky, with a floral, almost confectionery sweetness.",
      fr: "Nez : fumée tourbée mêlée à des notes florales délicates de cerisier ; bois sec et foin léger. Bouche : tourbe cendrée adoucie par un miel de sakura, poivre rose, pomme cuite. Finale : longue, fumée, douceur florale presque confiseuse.",
    },
    tastingInferred: true,
    tags: ["peated","floral","cask-strength","smoky"],
    accessibility: "advanced",
  },
  {
    distillery: "Aoyama Whisky (bottling)",
    name: "Pure Malt Peated — Mizunara Hogshead Finish",
    special: "Private bottling — 24/07/2016; no public listing",
    age: 12, abv: 53.5, abvInferred: true,
    country: "Japan", region: "", type: "Pure Malt",
    tasting: {
      en: "Nose: gentle peat smoke wrapped in sandalwood, incense and coconut from Mizunara oak. Palate: smouldering bonfire, oriental spice, toasted cedar, hints of dried apricot. Finish: long, dry oak with lingering smoke and temple-incense aromatics.",
      fr: "Nez : fumée tourbée douce enveloppée de bois de santal, encens et coco du chêne Mizunara. Bouche : feu de bois, épices orientales, cèdre toasté, abricot sec. Finale : longue, bois sec, fumée persistante, arômes d'encens.",
    },
    tastingInferred: true,
    tags: ["peated","woody","cask-strength","exotic","smoky"],
    accessibility: "advanced",
  },
  {
    distillery: "White Oak Distillery (Eigashima Shuzo)",
    name: "Tokinoka Black",
    special: "Sake Cask Finish; 6-month finish; 50cl; 1,700 bottles; 50% vol",
    age: null, abv: 50, abvInferred: false,
    country: "Japan", region: "", type: "Blended Whisky",
    tasting: {
      en: "Nose: puffed rice, rye bread, pear, ripe melon; a saline mineral edge. Palate: rounded and rich; cereal, malt, yellow stone fruit, a hint of soft umami. Finish: medium, clean, slightly mineral with a delicate sake-cask sweetness.",
      fr: "Nez : riz soufflé, pain de seigle, poire, melon mûr ; touche minérale saline. Bouche : ronde et riche, céréales, malt, fruits jaunes à noyau, soupçon d'umami doux. Finale : moyenne, nette, légèrement minérale, douceur délicate du fût de saké.",
    },
    tastingInferred: false,
    tags: ["sweet","light","vanilla","fruity"],
    accessibility: "beginner",
  },
  {
    distillery: "Isle of Raasay Distillery",
    name: "Hebridean Single Malt — R-02 Moine",
    special: "Batch R-02; ex-rye 60%, virgin Chinkapin oak 26%, first-fill Bordeaux red wine 14%; ~12 ppm residual peat",
    age: null, abv: 46.4, abvInferred: false,
    country: "Scotland", region: "Hebrides", type: "Single Malt",
    tasting: {
      en: "Nose: aromatic light smoke, cherry, apricot, blackcurrant; black pepper, cinnamon. Palate: bright dark fruit and rye spice over a coastal peat base; vanilla, baked apple, clove. Finish: medium, gently smoky and peppery with a red-wine sweetness.",
      fr: "Nez : fumée légère aromatique, cerise, abricot, cassis ; poivre noir, cannelle. Bouche : fruits noirs et épices de seigle sur une tourbe maritime ; vanille, pomme cuite, clou de girofle. Finale : moyenne, légèrement fumée et poivrée, douceur de vin rouge.",
    },
    tastingInferred: false,
    tags: ["peated","maritime","spicy","fruity","wine-cask"],
    accessibility: "intermediate",
  },
  {
    distillery: "King's Inch Distillery",
    name: "King's Inch — Glasgow Single Malt",
    special: "Non-chill filtered; bourbon and Oloroso casks; 46% vol",
    age: null, abv: 46, abvInferred: false,
    country: "Scotland", region: "Glasgow", type: "Single Malt",
    tasting: {
      en: "Nose: green apple, fresh barley, vanilla, caramelised sugar. Palate: citrus and pineapple meet rich espresso, molasses and a dust of chocolate; black pepper builds. Finish: long, warming, buttered toffee and sweet spice.",
      fr: "Nez : pomme verte, orge fraîche, vanille, sucre caramélisé. Bouche : agrumes, ananas, puis espresso riche, mélasse, poudre de chocolat ; poivre noir en montée. Finale : longue, chaleureuse, caramel beurré, épices douces.",
    },
    tastingInferred: false,
    tags: ["fruity","vanilla","sweet","spicy"],
    accessibility: "intermediate",
  },
  {
    distillery: "Lindores Abbey Distillery",
    name: "The Casks of Lindores — Limited Edition",
    special: "One of three core cask expressions (Bourbon Barrel / Sherry Butt / STR Wine Barrique); 49.4% vol; confirm cask type on label",
    age: null, abv: 49.4, abvInferred: false,
    country: "Scotland", region: "Fife (Lowlands)", type: "Single Malt",
    tasting: {
      en: "Nose: mellow vanilla, green apple, citrus zest, buttery pastry, hint of white pepper. Palate: vanilla with orchard fruits, light cream, peppercorns and gentle oak spice. Finish: long, bright, lightly peppered with a clean malt sweetness. (Notes for the Bourbon Barrel variant; STR shows red berries and cinnamon; Sherry Butt shows prunes, dates, walnut.)",
      fr: "Nez : vanille douce, pomme verte, zeste d'agrumes, pâtisserie beurrée, soupçon de poivre blanc. Bouche : vanille, fruits du verger, crème légère, grains de poivre, épices boisées douces. Finale : longue, vive, légèrement poivrée, malt propre et sucré. (Notes pour la variante Bourbon Barrel ; la STR donne baies rouges et cannelle ; la Sherry Butt prune, datte et noix.)",
    },
    tastingInferred: false,
    tags: ["fruity","vanilla","light","spicy"],
    accessibility: "intermediate",
  },
  {
    distillery: "Distillerie du Périgord",
    name: "Lascaw 15 Year Old",
    special: "Blended Malt; finished in casks that previously held truffle liqueur; 40% vol",
    age: 15, abv: 40, abvInferred: false,
    country: "France", region: "Périgord", type: "Blended Malt",
    tasting: {
      en: "Nose: fruit and gentle spice opening, then woody depth with a distinct earthy truffle whisper. Palate: rounded and balanced; malt, oak, soft truffle savouriness, baked apple. Finish: vanilla, mellow oak, lingering earthy note.",
      fr: "Nez : fruits et épices douces, puis profondeur boisée avec un soupçon terreux de truffe. Bouche : ronde et équilibrée, malt, chêne, note savoureuse de truffe, pomme cuite. Finale : vanille, chêne moelleux, note terreuse persistante.",
    },
    tastingInferred: false,
    tags: ["fruity","woody","vanilla","exotic"],
    accessibility: "intermediate",
  },
  {
    distillery: "Bruichladdich — Port Charlotte",
    name: "Port Charlotte 10",
    special: "Heavily peated Islay Single Malt; ~40 ppm; bourbon and second-fill wine casks; 50% vol",
    age: 10, abv: 50, abvInferred: false,
    country: "Scotland", region: "Islay", type: "Single Malt",
    tasting: {
      en: "Nose: barbecue smoke, vanilla, caramel fudge, lemon zest, seaweed and faint heather florals. Palate: sweet malt, charred oak, salted caramel, citrus, black pepper, coastal minerality. Finish: long, smoky, briny with lingering oak spice and warm vanilla.",
      fr: "Nez : fumée de barbecue, vanille, caramel mou, zeste de citron, algues, soupçon de bruyère. Bouche : malt sucré, chêne brûlé, caramel salé, agrumes, poivre noir, minéralité maritime. Finale : longue, fumée, saline, épices boisées et vanille chaude.",
    },
    tastingInferred: false,
    tags: ["peated","smoky","maritime","spicy","citrus","vanilla"],
    accessibility: "advanced",
  },
  {
    distillery: "Talisker Distillery",
    name: "Wilder Seas — Talisker × Parley",
    special: "Ocean preservation collaboration with Parley; finished in French oak XO Cognac casks; 48.6% vol",
    age: null, abv: 48.6, abvInferred: false,
    country: "Scotland", region: "Isle of Skye", type: "Single Malt",
    tasting: {
      en: "Nose: bacon crisps, light iodine, sea spray, toffee and a peachy stone-fruit lift with vanilla. Palate: peppery and spicy; wood smoke, toffee, dark cherry. Finish: long, classic Talisker pepper with a residual Cognac sweetness.",
      fr: "Nez : chips de bacon, iode légère, embruns marins, caramel, pêche, vanille. Bouche : poivrée et épicée ; fumée de bois, caramel, cerise noire. Finale : longue, poivre Talisker classique, douceur résiduelle de Cognac.",
    },
    tastingInferred: false,
    tags: ["peated","maritime","spicy","fruity","wine-cask"],
    accessibility: "intermediate",
  },
  {
    distillery: "The Balvenie",
    name: "The Week of Peat — 19 Year Old",
    special: "Peated for one week per year only; bourbon and Oloroso sherry casks; 48.3% vol",
    age: 19, abv: 48.3, abvInferred: false,
    country: "Scotland", region: "Speyside", type: "Single Malt",
    tasting: {
      en: "Nose: malty sweetness, toasted oak, gentle smoke, vanilla toffee and cinnamon. Palate: earthy smoke layered over honey, citrus, creamy vanilla, finishing with cinnamon and ginger spice. Finish: delicate smoke with a lingering spicy sweetness.",
      fr: "Nez : douceur maltée, chêne grillé, fumée douce, caramel vanillé, cannelle. Bouche : fumée terreuse sur miel, agrumes, vanille crémeuse, cannelle et gingembre épicés. Finale : fumée délicate, douceur épicée persistante.",
    },
    tastingInferred: false,
    tags: ["peated","honeyed","vanilla","spicy","sherried"],
    accessibility: "intermediate",
  },
  {
    distillery: "The Balvenie",
    name: "PortWood 21",
    special: "Finished in Ruby Port pipes; 40% vol",
    age: 21, abv: 40, abvInferred: false,
    country: "Scotland", region: "Speyside", type: "Single Malt",
    tasting: {
      en: "Nose: fresh raspberries and blackberries, honey, honeycomb, beeswax, red grape, vanilla and milk chocolate. Palate: surprisingly full for 40%; redcurrants, raspberries, peppery oak, leather and tobacco leaf. Finish: long, drying, pepper and hazelnut brittle.",
      fr: "Nez : framboise et mûre fraîches, miel, cire d'abeille, raisin rouge, vanille, chocolat au lait. Bouche : étonnamment ample à 40% ; groseilles, framboises, chêne poivré, cuir, tabac. Finale : longue, sèche, poivre et nougatine à la noisette.",
    },
    tastingInferred: false,
    tags: ["fruity","wine-cask","honeyed","woody","sweet"],
    accessibility: "intermediate",
  },
  {
    distillery: "Old Bushmills Distillery",
    name: "Bushmills 16 — Rare",
    special: "Oloroso sherry and bourbon casks; 9-month Port pipe finish; 40% vol",
    age: 16, abv: 40, abvInferred: false,
    country: "Ireland", region: "County Antrim", type: "Single Malt Irish Whiskey",
    tasting: {
      en: "Nose: treacle toffee, sweet honey, red fruit (cherry, raspberry), apricot, toasted oak, clove and hazelnut. Palate: full-bodied caramelised fruits, port-led red berries and fig, toasted nuts, clove and pepper. Finish: smooth, rich oak spice, dark fruits, pepper.",
      fr: "Nez : caramel mélasse, miel doux, fruits rouges (cerise, framboise), abricot, chêne grillé, clou de girofle, noisette. Bouche : ample, fruits caramélisés, baies rouges et figue du porto, fruits secs grillés, girofle et poivre. Finale : suave, chêne épicé, fruits noirs, poivre.",
    },
    tastingInferred: false,
    tags: ["sherried","fruity","sweet","spicy","wine-cask","woody"],
    accessibility: "intermediate",
  },
  {
    distillery: "Jim Beam (Booker Noe heritage)",
    name: "Booker's — Small Batch Bourbon",
    special: "Uncut and unfiltered cask strength; mash bill 75% corn, 13% rye, 12% malted barley; batch ABV typically 60.5-65.3%",
    age: null, abv: 63, abvInferred: true,
    country: "USA", region: "Kentucky", type: "Straight Bourbon",
    tasting: {
      en: "Nose: caramel, vanilla, charred oak, bourbon spice; rye-driven pepper, cinnamon, mint and clove. Palate: caramel, vanilla, salted butterscotch, brûléed pastry, leather, dark chocolate and dark fruit; intense at full strength. Finish: bold, long, peppery and warming with dry oak.",
      fr: "Nez : caramel, vanille, chêne brûlé, épices bourbon ; poivre de seigle, cannelle, menthe, girofle. Bouche : caramel, vanille, butterscotch salé, pâtisserie brûlée, cuir, chocolat noir, fruits noirs ; intense à pleine puissance. Finale : ample, longue, poivrée et chaleureuse, chêne sec.",
    },
    tastingInferred: false,
    tags: ["vanilla","spicy","woody","cask-strength","sweet"],
    accessibility: "advanced",
  },
  {
    distillery: "Glenmorangie",
    name: "The Tribute — 16 Year Old Heritage Spirit Batch",
    special: "Heritage Spirit Batch; Travel Retail; lightly smoked; 43% vol",
    age: 16, abv: 43, abvInferred: false,
    country: "Scotland", region: "Highlands", type: "Single Malt",
    tasting: {
      en: "Nose: spring flowers, citrus zest, vanilla, crème caramel, a gentle waft of peat. Palate: lemon posset, ripe pear, salted almonds, fennel, tobacco, subtle smoke threading through. Finish: medium, sweet fudge and lemon drizzle balanced by tangy oak and a soft smoky echo.",
      fr: "Nez : fleurs de printemps, zeste d'agrume, vanille, crème caramel, fumée discrète. Bouche : citron crémeux, poire mûre, amande salée, fenouil, tabac ; fumée subtile. Finale : moyenne, fudge sucré, citron confit, chêne épicé, fumée douce.",
    },
    tastingInferred: false,
    tags: ["vanilla","citrus","light","fruity","floral","smoky"],
    accessibility: "intermediate",
  },
  {
    distillery: "Isle of Jura Distillery",
    name: "Jura — The Bay",
    special: "Travel Exclusive; ex-bourbon barrels enhanced by 15-year-old Pedro Ximénez casks; 44% vol",
    age: 12, abv: 44, abvInferred: false,
    country: "Scotland", region: "Isle of Jura", type: "Single Malt",
    tasting: {
      en: "Nose: toffee apple, raisin, milk chocolate, cinnamon, nutmeg, a whisper of sea air. Palate: brown sugar, stewed berries, fig, stem ginger, crumbly fudge, dark plum cake. Finish: medium long, liquorice, toffee sweetness and warming PX-driven spice.",
      fr: "Nez : pomme caramélisée, raisin sec, chocolat au lait, cannelle, muscade, brise marine. Bouche : sucre brun, baies confites, figue, gingembre, fudge, gâteau aux fruits. Finale : moyenne longue, réglisse, toffee, épices PX réconfortantes.",
    },
    tastingInferred: false,
    tags: ["sweet","fruity","spicy","sherried","honeyed","maritime"],
    accessibility: "intermediate",
  },
  {
    distillery: "Douglas Laing & Co.",
    name: "The Gauldrons — Campbeltown Blended Malt",
    special: "Small batch; non-chill filtered; 46.2% vol",
    age: null, abv: 46.2, abvInferred: false,
    country: "Scotland", region: "Campbeltown", type: "Blended Malt",
    tasting: {
      en: "Nose: lime zest, green apple, banana, vanilla sponge, brine and a wisp of smouldering oak. Palate: lemons, peach, marzipan, white pepper, light brine, hint of liquorice. Finish: medium, oily, salted honey and a subtle Campbeltown coastal smoke.",
      fr: "Nez : zeste de citron vert, pomme verte, banane, génoise vanillée, embruns, bois fumant. Bouche : citron, pêche, massepain, poivre blanc, saline légère, réglisse. Finale : moyenne, huileuse, miel salé, fumée côtière subtile.",
    },
    tastingInferred: false,
    tags: ["maritime","smoky","fruity","honeyed","citrus"],
    accessibility: "intermediate",
  },
  {
    distillery: "Tullibardine Distillery",
    name: "Tullibardine 225 — Sauternes Cask Finish",
    special: "Finished in 225-litre Sauternes barriques (ex-Château Suduiraut); 43% vol",
    age: null, abv: 43, abvInferred: false,
    country: "Scotland", region: "Perthshire (Highlands)", type: "Single Malt",
    tasting: {
      en: "Nose: baked apple, honey, sultana, condensed milk, vanilla and a spicy lift. Palate: Seville orange, juicy melon, grilled pineapple, honeyed figs, creamy sweetness with a touch of espresso bitterness. Finish: medium, spicy at first then mellowing into fruit jam and vanilla.",
      fr: "Nez : pomme au four, miel, sultanine, lait concentré, vanille, pointe épicée. Bouche : orange amère, melon juteux, ananas grillé, figue au miel, douceur crémeuse, soupçon d'expresso. Finale : moyenne, épicée puis confiture de fruits et vanille.",
    },
    tastingInferred: false,
    tags: ["sweet","fruity","wine-cask","vanilla","honeyed"],
    accessibility: "beginner",
  },
  {
    distillery: "Nikka Whisky",
    name: "Nikka Coffey Grain Whisky",
    special: "Produced using a traditional Coffey (continuous) still; rare for Japan; 45% vol",
    age: null, abv: 45, abvInferred: false,
    country: "Japan", region: "", type: "Grain Whisky",
    tasting: {
      en: "Nose: caramel, vanilla, fresh hay, hazelnut, ripe pear, a sticky sweet edge. Palate: chewy toffee, maple syrup, roasted grain, marzipan, cinnamon, hint of buttered popcorn. Finish: smooth, medium, vanilla cake and lingering nutty sweetness.",
      fr: "Nez : caramel, vanille, foin frais, noisette, poire mûre, douceur collante. Bouche : toffee, sirop d'érable, grain rôti, massepain, cannelle, pop-corn beurré. Finale : douce, moyenne, gâteau vanillé, douceur noisetée.",
    },
    tastingInferred: false,
    tags: ["sweet","creamy","vanilla","tropical","honeyed"],
    accessibility: "beginner",
  },
  {
    distillery: "Talisker Distillery",
    name: "Talisker 20 Year Old — Natural Cask Strength",
    special: "Distilled 1982; Limited Edition 1 of 12,000; Natural Refill Casks; 58.8% vol",
    age: 20, abv: 58.8, abvInferred: false,
    country: "Scotland", region: "Isle of Skye", type: "Single Malt",
    tasting: {
      en: "Nose: sooty chimney, wet seaweed, putty, macadamia, sea salt, tar, white pepper, soft caramel. Palate: gentle oak, heather, pear, pink peppercorn, dark smoke, mint candy then a tropical citrus and mango blast. Finish: very long, iodine, tropical fruit, eucalyptus and sweet smoke.",
      fr: "Nez : suie de cheminée, algues humides, mastic, macadamia, sel marin, goudron, poivre blanc, caramel doux. Bouche : chêne mesuré, bruyère, poire, baie rose, fumée sombre, menthe, puis agrumes tropicaux et mangue. Finale : très longue, iode, fruits tropicaux, eucalyptus, fumée sucrée.",
    },
    tastingInferred: false,
    tags: ["peated","maritime","spicy","smoky","cask-strength","tropical"],
    accessibility: "advanced",
  },
  {
    distillery: "Suntory (Yamazaki / Hakushu / Chita)",
    name: "Hibiki 21",
    special: "Japanese Harmony blend; 21 Year Old; 43% vol",
    age: 21, abv: 43, abvInferred: false,
    country: "Japan", region: "", type: "Blended Whisky",
    tasting: {
      en: "Nose: citrus, vanilla, sandalwood, fresh berries, ripe tropical fruit, incense. Palate: apple tart, preserved apricot, pineapple, banana, cinnamon, cocoa, mizunara spice. Finish: long, sandalwood, cocoa, faint smoke, lingering honeyed orange.",
      fr: "Nez : agrumes, vanille, santal, baies fraîches, fruits tropicaux mûrs, encens. Bouche : tarte aux pommes, abricot confit, ananas, banane, cannelle, cacao, épices mizunara. Finale : longue, santal, cacao, fumée discrète, orange miellée.",
    },
    tastingInferred: false,
    tags: ["floral","fruity","woody","sweet","exotic","tropical","honeyed"],
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
      en: "Nose: perfumed honey, pineapple, meringue, dried apricot, toasted hazelnut, a floral lift. Palate: tropical fruit, honeyed sweetness, sherry-soaked raisin, hazelnut praline, herbal spice. Finish: medium long, clean and bright, lingering honey and Oloroso warmth. (Source: IWSC official notes; Whiskybase 89.3/100.)",
      fr: "Nez : miel parfumé, ananas, meringue, abricot sec, noisette grillée, touche florale. Bouche : fruits tropicaux, douceur miellée, raisin imbibé d'Oloroso, praliné de noisette, épices herbacées. Finale : moyenne longue, nette, miel persistant, chaleur d'Oloroso. (Source : notes officielles IWSC ; Whiskybase 89,3/100.)",
    },
    tastingInferred: false,
    tags: ["sweet","fruity","honeyed","floral","tropical","sherried"],
    accessibility: "intermediate",
  },
  {
    distillery: "Distillerie Warenghem",
    name: "Armorik — Sherry Cask",
    special: "Whisky Breton; distilled and matured in Brittany; non-chill filtered; 46% vol; SFWSC Gold 2017, ISC Gold 2021",
    age: null, abv: 46, abvInferred: false,
    country: "France", region: "Brittany (Bretagne)", type: "Single Malt",
    tasting: {
      en: "Nose: raisin, orange peel, chocolate, cinnamon, ginger, biscuity malt, light mint. Palate: crème brûlée, plum, roasted almond, chocolate orange, black pepper, creamy mouthfeel. Finish: medium, vanilla warmth with sherry spice and a candied-fruit echo.",
      fr: "Nez : raisin, écorce d'orange, chocolat, cannelle, gingembre, malt biscuité, menthe. Bouche : crème brûlée, prune, amande grillée, orange chocolatée, poivre noir, texture crémeuse. Finale : moyenne, vanille, épices xérès, fruits confits.",
    },
    tastingInferred: false,
    tags: ["sherried","fruity","spicy","sweet","creamy"],
    accessibility: "intermediate",
  },
  {
    distillery: "Distillerie Warenghem",
    name: "Armorik — Double Maturation",
    special: "Whisky Breton; ~5 years Breton oak then ~2 years Oloroso sherry; 46% vol",
    age: null, abv: 46, abvInferred: false,
    country: "France", region: "Brittany (Bretagne)", type: "Single Malt",
    tasting: {
      en: "Nose: mirabelle plum, citrus, raisin, leather, chocolate, gingerbread, treacle, hint of salt. Palate: smooth honey attack, red apple, toffee, milk chocolate, polished oak, warming spice, full body. Finish: long, biscuit, marmalade, gingerbread, sweet oak.",
      fr: "Nez : mirabelle, agrumes, raisin, cuir, chocolat, pain d'épices, mélasse, pointe saline. Bouche : attaque miellée, pomme rouge, toffee, chocolat au lait, chêne ciré, épices chaleureuses, ample. Finale : longue, biscuit, marmelade, pain d'épices, chêne sucré.",
    },
    tastingInferred: false,
    tags: ["woody","fruity","sherried","honeyed","spicy"],
    accessibility: "intermediate",
  },
  {
    distillery: "Distillerie Warenghem",
    name: "Armorik — Classic",
    special: "Whisky Breton; ex-bourbon and ex-Oloroso; non-chill filtered; 46% vol",
    age: null, abv: 46, abvInferred: false,
    country: "France", region: "Brittany (Bretagne)", type: "Single Malt",
    tasting: {
      en: "Nose: vanilla, malty sweetness, honeysuckle, lemon meringue, marzipan, light spice. Palate: honey, malted barley fruit, green apple, citrus, gentle sherry nuttiness, touch of pepper. Finish: medium, honey, malt, vanilla, soft fruit fade.",
      fr: "Nez : vanille, douceur maltée, chèvrefeuille, tarte au citron meringuée, massepain, épices légères. Bouche : miel, malt fruité, pomme verte, agrumes, noisette xérès discrète, pointe poivrée. Finale : moyenne, miel, malt, vanille, fruits doux.",
    },
    tastingInferred: false,
    tags: ["fruity","floral","honeyed","vanilla","sweet"],
    accessibility: "beginner",
  },
  {
    distillery: "Fondaudège Distillery",
    name: "Fondaudège — Pur Malt, Grand Cru Bordelais Finish",
    special: "Négociant bottling (Whiskies du Monde); minimum 3 years; finished in Grand Cru Classé Bordeaux casks; 40% vol",
    age: null, abv: 40, abvInferred: false,
    country: "France", region: "Bordeaux", type: "Pure Malt",
    tasting: {
      en: "Nose: ripe pear, red fruit, light vanilla, cereal sweetness, gentle oak. Palate: yellow peach, malt, soft red-wine fruit, faint tannin, easy vanilla. Finish: warm, persistent, light fruity sweetness with a Bordeaux winey echo.",
      fr: "Nez : poire mûre, fruits rouges, vanille légère, douceur céréalière, chêne discret. Bouche : pêche jaune, malt, fruits du vin doux, tannin léger, vanille facile. Finale : chaude, persistante, douceur fruitée, écho vineux bordelais.",
    },
    tastingInferred: false,
    tags: ["fruity","wine-cask","light","vanilla","sweet"],
    accessibility: "beginner",
  },
  {
    distillery: "Domaine de La Pèze",
    name: "Moyssou — Whisky Paysan Single Malt",
    special: "Harvest 2020 (Moisson); grain grown and distilled on estate; ex-Cognac casks; Aveyron, France; ~1,000-bottle limited release",
    age: null, abv: 46, abvInferred: true,
    country: "France", region: "Aveyron", type: "Single Malt",
    tasting: {
      en: "Nose: cereal, hay, ripe orchard fruit, light honey, soft oak, hint of Cognac-cask raisin. Palate: rich and oily attack, malted barley, pear, apricot, vanilla, gentle spice from Cognac wood. Finish: medium, warm, cereal-led with lingering fruit and a delicate woody sweetness.",
      fr: "Nez : céréales, foin, fruits du verger mûrs, miel léger, chêne doux, raisin discret du fût de cognac. Bouche : attaque grasse et huileuse, orge maltée, poire, abricot, vanille, épices boisées du cognac. Finale : moyenne, chaleureuse, céréalière, fruits persistants, douceur boisée délicate.",
    },
    tastingInferred: false,
    tags: ["light","fruity","floral","honeyed","woody"],
    accessibility: "intermediate",
  },
]; // ← END OF WHISKIES ARRAY
