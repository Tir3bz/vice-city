// Biler og motorcykler i GTA 6. Teksten på siden er på engelsk.
// Listen og billederne er fra fan-siden GTABase (november 2026), ikke fra Rockstar.
// Road rating og Off-road rating er GTABase's egne tal (højere = bedre).
// billede = (valgfri) billede i billeder/biler/. Uden billede vises en tegning.
// Vil du tilføje en bil? Kopier en af dem herunder (fra { til },)
// og ret teksten. Husk kommaet efter }.
// Skriv (unsure) ved fakta, du ikke er sikker på.

const biler = [
  {
    navn: "Pegassi Dante's Vitello",
    billede: "billeder/biler/dantes-vitello.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Pegassi" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "873" },
      { navn: "Off-road rating", vaerdi: "297" }
    ]
  },
  {
    navn: "Progen Black Widow Emerus",
    billede: "billeder/biler/black-widow-emerus.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Progen" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "863" },
      { navn: "Off-road rating", vaerdi: "212" }
    ]
  },
  {
    navn: "Progen Seaspray Emerus",
    billede: "billeder/biler/seaspray-emerus.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Progen" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "863" },
      { navn: "Off-road rating", vaerdi: "213" }
    ]
  },
  {
    navn: "Progen Honeycomb Emerus",
    billede: "billeder/biler/honeycomb-emerus.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Progen" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "862" },
      { navn: "Off-road rating", vaerdi: "213" }
    ]
  },
  {
    navn: "Progen Purple Drank Emerus",
    billede: "billeder/biler/purple-drank-emerus.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Progen" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "862" },
      { navn: "Off-road rating", vaerdi: "157" }
    ]
  },
  {
    navn: "Progen Royal Ruby Emerus",
    billede: "billeder/biler/royal-ruby-emerus.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Progen" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "852" },
      { navn: "Off-road rating", vaerdi: "213" }
    ]
  },
  {
    navn: "Truffade Andrew Node's Thrax",
    billede: "billeder/biler/andrew-nodes-thrax.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Truffade" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "847" },
      { navn: "Off-road rating", vaerdi: "292" }
    ]
  },
  {
    navn: "Pegassi Splattered Vitello",
    billede: "billeder/biler/splattered-vitello.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Pegassi" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "844" },
      { navn: "Off-road rating", vaerdi: "296" }
    ]
  },
  {
    navn: "Progen Emerus",
    billede: "billeder/biler/emerus.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Progen" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Based on", vaerdi: "McLaren Senna" },
      { navn: "Road rating", vaerdi: "837" },
      { navn: "Off-road rating", vaerdi: "210" }
    ]
  },
  {
    navn: "Pegassi Vitello",
    billede: "billeder/biler/lamborghini-aventador.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Pegassi" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Based on", vaerdi: "Lamborghini Aventador" },
      { navn: "Road rating", vaerdi: "832" },
      { navn: "Off-road rating", vaerdi: "297" }
    ]
  },
  {
    navn: "Pegassi Lipgloss Vitello",
    billede: "billeder/biler/lipgloss-vitello.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Pegassi" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "832" },
      { navn: "Off-road rating", vaerdi: "297" }
    ]
  },
  {
    navn: "Truffade Thrax",
    billede: "billeder/biler/thrax.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Truffade" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Based on", vaerdi: "Bugatti Divo, Italdesign Zerouno" },
      { navn: "Road rating", vaerdi: "824" },
      { navn: "Off-road rating", vaerdi: "286" }
    ]
  },
  {
    navn: "Grotti Status RSX",
    billede: "billeder/biler/status-rsx.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Grotti" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "811" },
      { navn: "Off-road rating", vaerdi: "270" }
    ]
  },
  {
    navn: "Piccia Dragon Gate Furia",
    billede: "billeder/biler/dragon-gate-furia.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Piccia" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "810" },
      { navn: "Off-road rating", vaerdi: "239" }
    ]
  },
  {
    navn: "Granforma Tsunami Zorrusso",
    billede: "billeder/biler/tsunami-zorrusso.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Granforma" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "810" },
      { navn: "Off-road rating", vaerdi: "302" }
    ]
  },
  {
    navn: "Grotti Dolce Vita RSX",
    billede: "billeder/biler/dolce-vita-rsx.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Grotti" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "808" },
      { navn: "Off-road rating", vaerdi: "270" }
    ]
  },
  {
    navn: "Pegassi Mojito Tempesta",
    billede: "billeder/biler/mojito-tempesta.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Pegassi" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "807" },
      { navn: "Off-road rating", vaerdi: "284" }
    ]
  },
  {
    navn: "Piccia Furia",
    billede: "billeder/biler/furia.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Piccia" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Based on", vaerdi: "Pininfarina Battista" },
      { navn: "Road rating", vaerdi: "781" },
      { navn: "Off-road rating", vaerdi: "239" }
    ]
  },
  {
    navn: "Piccia Big Cat Furia",
    billede: "billeder/biler/big-cat-furia.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Piccia" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "781" },
      { navn: "Off-road rating", vaerdi: "239" }
    ]
  },
  {
    navn: "Grotti Itali RSX",
    billede: "billeder/biler/itali-rsx.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Grotti" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Based on", vaerdi: "Ferrari SF90 Stradale" },
      { navn: "Road rating", vaerdi: "762" },
      { navn: "Off-road rating", vaerdi: "270" }
    ]
  },
  {
    navn: "Pegassi Raul's Tempesta",
    billede: "billeder/biler/rauls-tempesta.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Pegassi" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "761" },
      { navn: "Off-road rating", vaerdi: "631" }
    ]
  },
  {
    navn: "Pegassi Gold Rope Infernus",
    billede: "billeder/biler/gold-rope-infernus.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Pegassi" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "757" },
      { navn: "Off-road rating", vaerdi: "240" }
    ]
  },
  {
    navn: "Granforma Zorrusso",
    billede: "billeder/biler/zorrusso.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Granforma" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Based on", vaerdi: "Italdesign Zerouno" },
      { navn: "Road rating", vaerdi: "749" },
      { navn: "Off-road rating", vaerdi: "301" }
    ]
  },
  {
    navn: "Pegassi Tempesta",
    billede: "billeder/biler/tempesta.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Pegassi" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Based on", vaerdi: "Lamborghini Huracán/Centenario, proposed 2015 Lotus Esprit" },
      { navn: "Road rating", vaerdi: "748" },
      { navn: "Off-road rating", vaerdi: "284" }
    ]
  },
  {
    navn: "Pegassi Gold Rush Tempesta",
    billede: "billeder/biler/gold-rush-tempesta.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Pegassi" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "748" },
      { navn: "Off-road rating", vaerdi: "284" }
    ]
  },
  {
    navn: "Pegassi Valiant Tempesta (Police)",
    billede: "billeder/biler/police-tempesta.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Pegassi" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "748" },
      { navn: "Off-road rating", vaerdi: "284" }
    ]
  },
  {
    navn: "Grotti Cheetah 1010",
    billede: "billeder/biler/1010-cheetah.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Grotti" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Road rating", vaerdi: "708" },
      { navn: "Off-road rating", vaerdi: "283" }
    ]
  },
  {
    navn: "Pegassi Infernus '96",
    billede: "billeder/biler/infernus-classic.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Pegassi" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Based on", vaerdi: "Lamborghini Diablo, Cizeta V16T, Ferrari Testarossa" },
      { navn: "Road rating", vaerdi: "698" },
      { navn: "Off-road rating", vaerdi: "328" }
    ]
  },
  {
    navn: "Grotti Cheetah '95",
    billede: "billeder/biler/cheetah-classic.jpg",
    tekst: "A supercar, one of the fastest cars in Leonida.",
    fakta: [
      { navn: "Brand", vaerdi: "Grotti" },
      { navn: "Type", vaerdi: "Supercar" },
      { navn: "Based on", vaerdi: "Ferrari Testarossa, 512 BB" },
      { navn: "Road rating", vaerdi: "633" },
      { navn: "Off-road rating", vaerdi: "350" }
    ]
  },
  {
    navn: "Pfister Comet S2",
    billede: "billeder/biler/comet-s2-cabrio.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Pfister" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Based on", vaerdi: "Porsche 911 Turbo S Cabriolet" },
      { navn: "Road rating", vaerdi: "780" },
      { navn: "Off-road rating", vaerdi: "240" }
    ]
  },
  {
    navn: "Pfister Gentrifier Comet",
    billede: "billeder/biler/gentrifier-comet.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Pfister" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Road rating", vaerdi: "776" },
      { navn: "Off-road rating", vaerdi: "238" }
    ]
  },
  {
    navn: "Pfister Class Act Comet",
    billede: "billeder/biler/class-act-comet.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Pfister" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Road rating", vaerdi: "757" },
      { navn: "Off-road rating", vaerdi: "296" }
    ]
  },
  {
    navn: "Invetero Vice Vinyl Coquette",
    billede: "billeder/biler/vice-vinyl-coquette.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Invetero" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Road rating", vaerdi: "753" },
      { navn: "Off-road rating", vaerdi: "245" }
    ]
  },
  {
    navn: "Pfister Hornet Growler",
    billede: "billeder/biler/hornet-growler.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Pfister" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Road rating", vaerdi: "719" },
      { navn: "Off-road rating", vaerdi: "279" }
    ]
  },
  {
    navn: "Invetero Enforcer Coquette",
    billede: "billeder/biler/enforcer-coquette.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Invetero" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Road rating", vaerdi: "712" },
      { navn: "Off-road rating", vaerdi: "238" }
    ]
  },
  {
    navn: "Invetero Coquette D10",
    billede: "billeder/biler/coquette-d10.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Invetero" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Based on", vaerdi: "Chevrolet Corvette C8" },
      { navn: "Road rating", vaerdi: "707" },
      { navn: "Off-road rating", vaerdi: "238" }
    ]
  },
  {
    navn: "Declasse Mamba GT '64",
    billede: "billeder/biler/mamba-gt.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Based on", vaerdi: "Shelby Daytona Coupe" },
      { navn: "Road rating", vaerdi: "683" },
      { navn: "Off-road rating", vaerdi: "199" }
    ]
  },
  {
    navn: "Pfister Neon",
    billede: "billeder/biler/neon.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Pfister" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Based on", vaerdi: "Porsche Taycan, Porsche 918 Spyder, second generation Porsche Panamera and the 991.2 Porsche 911" },
      { navn: "Road rating", vaerdi: "683" },
      { navn: "Off-road rating", vaerdi: "357" }
    ]
  },
  {
    navn: "Grotti Carbonizzare",
    billede: "billeder/biler/carbonizzare.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Grotti" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Based on", vaerdi: "V12 Zagato rear, Nissan GT-R, Ferrari 458 Italia, Ferrari 612 Scagliëtti" },
      { navn: "Road rating", vaerdi: "657" },
      { navn: "Off-road rating", vaerdi: "236" }
    ]
  },
  {
    navn: "Bravado DriveShaft Banshee",
    billede: "billeder/biler/driveshaft-banshee.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Road rating", vaerdi: "657" },
      { navn: "Off-road rating", vaerdi: "743" }
    ]
  },
  {
    navn: "Pfister Comet '88",
    billede: "billeder/biler/comet-retro-custom.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Pfister" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Based on", vaerdi: "Rauh-Welt Porsche 911 930" },
      { navn: "Road rating", vaerdi: "640" },
      { navn: "Off-road rating", vaerdi: "279" }
    ]
  },
  {
    navn: "Pfister Growler",
    billede: "billeder/biler/growler.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Pfister" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Based on", vaerdi: "Porsche 718 Cayman" },
      { navn: "Road rating", vaerdi: "635" },
      { navn: "Off-road rating", vaerdi: "280" }
    ]
  },
  {
    navn: "Pfister Buttermilk Comet Retro",
    billede: "billeder/biler/buttermilk-comet-retro.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Pfister" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Road rating", vaerdi: "625" },
      { navn: "Off-road rating", vaerdi: "379" }
    ]
  },
  {
    navn: "Invetero Coquette",
    billede: "billeder/biler/coquette.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Invetero" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Based on", vaerdi: "Corvette C7, 2014 Corvette Stingray" },
      { navn: "Road rating", vaerdi: "621" },
      { navn: "Off-road rating", vaerdi: "272" }
    ]
  },
  {
    navn: "Pfister Bubblegum Growler",
    billede: "billeder/biler/bubblegum-growler.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Pfister" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Road rating", vaerdi: "616" },
      { navn: "Off-road rating", vaerdi: "274" }
    ]
  },
  {
    navn: "Pfister Vanessa's Growler",
    billede: "billeder/biler/vanessas-growler.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Pfister" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Road rating", vaerdi: "616" },
      { navn: "Off-road rating", vaerdi: "274" }
    ]
  },
  {
    navn: "Bravado Banshee",
    billede: "billeder/biler/banshee.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Based on", vaerdi: "Dodge Viper" },
      { navn: "Road rating", vaerdi: "611" },
      { navn: "Off-road rating", vaerdi: "279" }
    ]
  },
  {
    navn: "Benefactor Schafter V12",
    billede: "billeder/biler/schafter-v12.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Benefactor" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Based on", vaerdi: "Brabus E V12" },
      { navn: "Road rating", vaerdi: "571" },
      { navn: "Off-road rating", vaerdi: "376" }
    ]
  },
  {
    navn: "Emperor Moses' Sultan",
    billede: "billeder/biler/moses-sultan.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Emperor" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Road rating", vaerdi: "533" },
      { navn: "Off-road rating", vaerdi: "352" }
    ]
  },
  {
    navn: "Emperor Sultan",
    billede: "billeder/biler/sultan.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Emperor" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Based on", vaerdi: "Lexus IS, Mitsubishi Lancer Evo VI, Subaru Impreza" },
      { navn: "Road rating", vaerdi: "528" },
      { navn: "Off-road rating", vaerdi: "352" }
    ]
  },
  {
    navn: "Übermacht Sentinel '85",
    billede: "billeder/biler/sentinel-classic.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Übermacht" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Based on", vaerdi: "BMW E30 M3" },
      { navn: "Road rating", vaerdi: "460" },
      { navn: "Off-road rating", vaerdi: "256" }
    ]
  },
  {
    navn: "Annis Venturas BLVD Elegy '90",
    billede: "billeder/biler/venturas-blvd-elegy-90.jpg",
    tekst: "A sports car built for speed and sharp turns.",
    fakta: [
      { navn: "Brand", vaerdi: "Annis" },
      { navn: "Type", vaerdi: "Sports car" },
      { navn: "Based on", vaerdi: "Nissan Skyline GT-R" }
    ]
  },
  {
    navn: "Reynolds Kit Car",
    billede: "billeder/biler/kellison-j4.jpg",
    tekst: "A classic sports car.",
    fakta: [
      { navn: "Brand", vaerdi: "Reynolds" },
      { navn: "Type", vaerdi: "Sports classic" },
      { navn: "Based on", vaerdi: "Kellison J4" }
    ]
  },
  {
    navn: "Bravado Devil's Rope Gauntlet",
    billede: "billeder/biler/devils-rope-gauntlet.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "761" },
      { navn: "Off-road rating", vaerdi: "169" }
    ]
  },
  {
    navn: "Bravado Gauntlet Hellfire",
    billede: "billeder/biler/gauntlet-hellfire.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "2018 Dodge Challenger Demon, 5th Gen Chevrolet Camaro, 6th Gen Ford Mustang" },
      { navn: "Road rating", vaerdi: "705" },
      { navn: "Off-road rating", vaerdi: "240" }
    ]
  },
  {
    navn: "Bravado Copperheads Gauntlet",
    billede: "billeder/biler/copperheads-gauntlet.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "703" },
      { navn: "Off-road rating", vaerdi: "324" }
    ]
  },
  {
    navn: "Declasse Twinstripe Vigero",
    billede: "billeder/biler/twinstripe-vigero.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "656" },
      { navn: "Off-road rating", vaerdi: "219" }
    ]
  },
  {
    navn: "Vapid Murica Dominator",
    billede: "billeder/biler/murica-dominator.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "635" },
      { navn: "Off-road rating", vaerdi: "219" }
    ]
  },
  {
    navn: "Vapid Firebug Dominator",
    billede: "billeder/biler/firebug-dominator.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "632" },
      { navn: "Off-road rating", vaerdi: "305" }
    ]
  },
  {
    navn: "Vapid Dominator GT",
    billede: "billeder/biler/dominator-gt.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "2018-2023 Ford Mustang Convertible" },
      { navn: "Road rating", vaerdi: "631" },
      { navn: "Off-road rating", vaerdi: "283" }
    ]
  },
  {
    navn: "Declasse Vigero ZX Convertible",
    billede: "billeder/biler/vigero-zx-convertible.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "Chevrolet Camaro Gen VI" },
      { navn: "Road rating", vaerdi: "627" },
      { navn: "Off-road rating", vaerdi: "272" }
    ]
  },
  {
    navn: "Vapid Darkling Dominator",
    billede: "billeder/biler/darkling-dominator.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "626" },
      { navn: "Off-road rating", vaerdi: "280" }
    ]
  },
  {
    navn: "Vapid Kinetic Dominator",
    billede: "billeder/biler/kinetic-dominator.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "607" },
      { navn: "Off-road rating", vaerdi: "279" }
    ]
  },
  {
    navn: "Classique Rampant Stallion",
    billede: "billeder/biler/rampant-stallion.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Classique" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "585" },
      { navn: "Off-road rating", vaerdi: "229" }
    ]
  },
  {
    navn: "Imponte Bloodbath Phoenix",
    billede: "billeder/biler/bloodbath-phoenix.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Imponte" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "560" },
      { navn: "Off-road rating", vaerdi: "402" }
    ]
  },
  {
    navn: "Vapid Dominator ASP",
    billede: "billeder/biler/dominator-asp.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "Ford Mustang SVT Cobra R (New Edge)" },
      { navn: "Road rating", vaerdi: "552" },
      { navn: "Off-road rating", vaerdi: "337" }
    ]
  },
  {
    navn: "Declasse Caliente Picador",
    billede: "billeder/biler/caliente-picador.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "549" },
      { navn: "Off-road rating", vaerdi: "369" }
    ]
  },
  {
    navn: "Dundreary Sal's Chino",
    billede: "billeder/biler/sals-chino.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Dundreary" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "544" },
      { navn: "Off-road rating", vaerdi: "208" }
    ]
  },
  {
    navn: "Classique Emancipator Stallion",
    billede: "billeder/biler/emancipator-stallion.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Classique" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "541" },
      { navn: "Off-road rating", vaerdi: "364" }
    ]
  },
  {
    navn: "Invetero Spiderweb Coquette",
    billede: "billeder/biler/spiderweb-coquette.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Invetero" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "541" },
      { navn: "Off-road rating", vaerdi: "375" }
    ]
  },
  {
    navn: "Vapid Anarchist Dominator",
    billede: "billeder/biler/anarchist-dominator.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "539" },
      { navn: "Off-road rating", vaerdi: "126" }
    ]
  },
  {
    navn: "Vapid Dominator",
    billede: "billeder/biler/dominator.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "Ford Mustang" },
      { navn: "Road rating", vaerdi: "537" },
      { navn: "Off-road rating", vaerdi: "275" }
    ]
  },
  {
    navn: "Dundreary Cherry Bomb Chino",
    billede: "billeder/biler/cherry-bomb-chino.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Dundreary" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "537" },
      { navn: "Off-road rating", vaerdi: "357" }
    ]
  },
  {
    navn: "Bravado Revenant Gauntlet",
    billede: "billeder/biler/revenant-gauntlet.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "532" },
      { navn: "Off-road rating", vaerdi: "270" }
    ]
  },
  {
    navn: "Bravado DriveShaft Gauntlet",
    billede: "billeder/biler/driveshaft-gauntlet.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "532" },
      { navn: "Off-road rating", vaerdi: "272" }
    ]
  },
  {
    navn: "Invetero Oubliette Coquette",
    billede: "billeder/biler/oubliette-coquette.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Invetero" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "525" },
      { navn: "Off-road rating", vaerdi: "368" }
    ]
  },
  {
    navn: "Albany Hermes '50",
    billede: "billeder/biler/hermes-50.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "Mercury Eight (1949)" },
      { navn: "Road rating", vaerdi: "515" },
      { navn: "Off-road rating", vaerdi: "346" }
    ]
  },
  {
    navn: "Albany Cuban Hermes",
    billede: "billeder/biler/cuban-hermes.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "515" },
      { navn: "Off-road rating", vaerdi: "347" }
    ]
  },
  {
    navn: "Imponte Soaring Phoenix",
    billede: "billeder/biler/soaring-phoenix.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Imponte" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "513" },
      { navn: "Off-road rating", vaerdi: "275" }
    ]
  },
  {
    navn: "Classique Apocalypse Stallion",
    billede: "billeder/biler/apocalypse-stallion.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Classique" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "512" },
      { navn: "Off-road rating", vaerdi: "702" }
    ]
  },
  {
    navn: "Declasse Battler Picador",
    billede: "billeder/biler/battler-picador.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "506" },
      { navn: "Off-road rating", vaerdi: "329" }
    ]
  },
  {
    navn: "Albany Verdant Buccaneer",
    billede: "billeder/biler/verdant-buccaneer.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "501" },
      { navn: "Off-road rating", vaerdi: "360" }
    ]
  },
  {
    navn: "Declasse Seafoam Picador",
    billede: "billeder/biler/seafoam-picador.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "499" },
      { navn: "Off-road rating", vaerdi: "333" }
    ]
  },
  {
    navn: "Classique Stallion '68",
    billede: "billeder/biler/stallion.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Classique" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "68 - '69 & '70 - '71 Oldsmobile Cutlass, '70 Plymouth Hemi Barracuda" },
      { navn: "Road rating", vaerdi: "492" },
      { navn: "Off-road rating", vaerdi: "323" }
    ]
  },
  {
    navn: "Invetero Raul's Coquette Classic",
    billede: "billeder/biler/rauls-coquette-classic.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Invetero" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "492" },
      { navn: "Off-road rating", vaerdi: "362" }
    ]
  },
  {
    navn: "Invetero Coquette '64",
    billede: "billeder/biler/coquette-classic.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Invetero" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "Chevrolet Corvette C2" },
      { navn: "Road rating", vaerdi: "488" },
      { navn: "Off-road rating", vaerdi: "354" }
    ]
  },
  {
    navn: "Declasse Martha's Vamos",
    billede: "billeder/biler/marthas-vamos.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "487" },
      { navn: "Off-road rating", vaerdi: "318" }
    ]
  },
  {
    navn: "Vapid Citrus Ganado",
    billede: "billeder/biler/citrus-ganado.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "483" },
      { navn: "Off-road rating", vaerdi: "263" }
    ]
  },
  {
    navn: "Vapid Dominator '65",
    billede: "billeder/biler/dominator-67.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "Ford Mustang (1st Gen)" },
      { navn: "Road rating", vaerdi: "481" },
      { navn: "Off-road rating", vaerdi: "343" }
    ]
  },
  {
    navn: "Albany Teniente Manana",
    billede: "billeder/biler/teniente-manana.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "475" },
      { navn: "Off-road rating", vaerdi: "182" }
    ]
  },
  {
    navn: "Bravado Bullion Gauntlet",
    billede: "billeder/biler/bullion-gauntlet.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "474" },
      { navn: "Off-road rating", vaerdi: "334" }
    ]
  },
  {
    navn: "Schyster Deviant '72",
    billede: "billeder/biler/deviant.avif",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Schyster" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "1972 AMC Javelin" },
      { navn: "Road rating", vaerdi: "468" },
      { navn: "Off-road rating", vaerdi: "323" }
    ]
  },
  {
    navn: "Imponte Blazin' Phoenix",
    billede: "billeder/biler/blazin-phoenix.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Imponte" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "464" },
      { navn: "Off-road rating", vaerdi: "259" }
    ]
  },
  {
    navn: "Bravado Gauntlet Custom '69",
    billede: "billeder/biler/gauntlet-classic.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "First generation Dodge Challenger" },
      { navn: "Road rating", vaerdi: "463" },
      { navn: "Off-road rating", vaerdi: "201" }
    ]
  },
  {
    navn: "Vapid Ganado '70",
    billede: "billeder/biler/ganado.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "1970 Ford Ranchero and 1969–1970 Mercury Cougar" },
      { navn: "Road rating", vaerdi: "458" },
      { navn: "Off-road rating", vaerdi: "330" }
    ]
  },
  {
    navn: "Vapid Smush! Ganado",
    billede: "billeder/biler/smush-ganado.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "458" },
      { navn: "Off-road rating", vaerdi: "330" }
    ]
  },
  {
    navn: "Albany DriveShaft Devanity",
    billede: "billeder/biler/driveshaft-devanity.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "450" },
      { navn: "Off-road rating", vaerdi: "331" }
    ]
  },
  {
    navn: "Dundreary Beast Chino",
    billede: "billeder/biler/beast-chino.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Dundreary" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "447" },
      { navn: "Off-road rating", vaerdi: "321" }
    ]
  },
  {
    navn: "Declasse Picador '72",
    billede: "billeder/biler/picador.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "Chevrolet El Camino" },
      { navn: "Road rating", vaerdi: "440" },
      { navn: "Off-road rating", vaerdi: "313" }
    ]
  },
  {
    navn: "Declasse Trippin' Picador",
    billede: "billeder/biler/trippin-picador.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "440" },
      { navn: "Off-road rating", vaerdi: "313" }
    ]
  },
  {
    navn: "Declasse Tulip '72",
    billede: "billeder/biler/tulip.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "1972 Chevelle Malibu, 1972 Oldsmobile Cutlass Supreme" },
      { navn: "Road rating", vaerdi: "439" },
      { navn: "Off-road rating", vaerdi: "250" }
    ]
  },
  {
    navn: "Vapid Rocket Slamvan",
    billede: "billeder/biler/rocket-slamvan.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "435" },
      { navn: "Off-road rating", vaerdi: "211" }
    ]
  },
  {
    navn: "Sirius Transgressor '67",
    billede: "billeder/biler/sirius.avif",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Sirius" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "1970 Mercury Cougar" },
      { navn: "Road rating", vaerdi: "429" },
      { navn: "Off-road rating", vaerdi: "299" }
    ]
  },
  {
    navn: "Declasse Pink Gin Tulip",
    billede: "billeder/biler/pink-gin-tulip.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "419" },
      { navn: "Off-road rating", vaerdi: "332" }
    ]
  },
  {
    navn: "Imponte Phoenix '77",
    billede: "billeder/biler/phoenix.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Imponte" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "Chevy Camaro, Pontiac Firebird (2nd generation)" },
      { navn: "Road rating", vaerdi: "417" },
      { navn: "Off-road rating", vaerdi: "294" }
    ]
  },
  {
    navn: "Albany Cotton Candy Devanity",
    billede: "billeder/biler/cotton-candy-devanity.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "413" },
      { navn: "Off-road rating", vaerdi: "293" }
    ]
  },
  {
    navn: "Declasse Applesauce Bobcat",
    billede: "billeder/biler/applesauce-bobcat.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "412" },
      { navn: "Off-road rating", vaerdi: "321" }
    ]
  },
  {
    navn: "Albany DeVanity '59",
    billede: "billeder/biler/cadillac-eldorado-1959.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "Cadillac Eldorado (1959)" },
      { navn: "Road rating", vaerdi: "407" },
      { navn: "Off-road rating", vaerdi: "287" }
    ]
  },
  {
    navn: "Declasse Mountain Yosemite",
    billede: "billeder/biler/mountain-yosemite.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "401" },
      { navn: "Off-road rating", vaerdi: "662" }
    ]
  },
  {
    navn: "Declasse Broken Oak Bobcat",
    billede: "billeder/biler/broken-oak-bobcat.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "397" },
      { navn: "Off-road rating", vaerdi: "306" }
    ]
  },
  {
    navn: "Declasse Vamos '74",
    billede: "billeder/biler/vamos.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "Chevrolet Nova" },
      { navn: "Road rating", vaerdi: "385" },
      { navn: "Off-road rating", vaerdi: "233" }
    ]
  },
  {
    navn: "Albany Buccaneer '65",
    billede: "billeder/biler/buccaneer.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "Ford Fairlane, Buick Riviera" },
      { navn: "Road rating", vaerdi: "384" },
      { navn: "Off-road rating", vaerdi: "242" }
    ]
  },
  {
    navn: "Dundreary Chino '65",
    billede: "billeder/biler/chino.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Dundreary" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "1965 Lincoln Continental, 1965 Chrysler Imperial, 1970s Ford Thunderbird(s)" },
      { navn: "Road rating", vaerdi: "384" },
      { navn: "Off-road rating", vaerdi: "265" }
    ]
  },
  {
    navn: "Albany Manana '77",
    billede: "billeder/biler/manana.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "Buick LeSabre, Cadillac Eldorado" },
      { navn: "Road rating", vaerdi: "364" },
      { navn: "Off-road rating", vaerdi: "190" }
    ]
  },
  {
    navn: "Albany Cereza Manana",
    billede: "billeder/biler/cereza-manana.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "364" },
      { navn: "Off-road rating", vaerdi: "190" }
    ]
  },
  {
    navn: "Declasse Tulip M-100 '78",
    billede: "billeder/biler/tulip-m-100.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "Fourth generation Chevrolet Malibu" },
      { navn: "Road rating", vaerdi: "358" },
      { navn: "Off-road rating", vaerdi: "246" }
    ]
  },
  {
    navn: "Declasse Yosemite '67",
    billede: "billeder/biler/yosemite-67.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "Chevrolet C10" },
      { navn: "Road rating", vaerdi: "355" },
      { navn: "Off-road rating", vaerdi: "269" }
    ]
  },
  {
    navn: "Vapid Grady's Slamvan",
    billede: "billeder/biler/gradys-slamvan.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "334" },
      { navn: "Off-road rating", vaerdi: "211" }
    ]
  },
  {
    navn: "Vapid Slamvan '56",
    billede: "billeder/biler/slamvan.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Based on", vaerdi: "Rat Rodded 1953–1956 Ford F-Series (pickup form), 1950s Ford F-Series" },
      { navn: "Road rating", vaerdi: "323" },
      { navn: "Off-road rating", vaerdi: "198" }
    ]
  },
  {
    navn: "Declasse Bobcat 500 '55",
    billede: "billeder/biler/bobcat-500-55.jpg",
    tekst: "A muscle car with a big engine and a lot of power.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Muscle car" },
      { navn: "Road rating", vaerdi: "296" },
      { navn: "Off-road rating", vaerdi: "152" }
    ]
  },
  {
    navn: "Annis Pixel Elegy",
    billede: "billeder/biler/pixel-elegy.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Annis" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "776" },
      { navn: "Off-road rating", vaerdi: "150" }
    ]
  },
  {
    navn: "Annis Yago's Elegy",
    billede: "billeder/biler/yagos-elegy.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Annis" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "757" },
      { navn: "Off-road rating", vaerdi: "208" }
    ]
  },
  {
    navn: "Übermacht Burning Cypher",
    billede: "billeder/biler/burning-cypher.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Übermacht" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "707" },
      { navn: "Off-road rating", vaerdi: "124" }
    ]
  },
  {
    navn: "Maibatsu Penumbra (Paul Walker Tribute)",
    billede: "billeder/biler/penumbra-paul-walker-tribute.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "Mitsubishi Eclipse (The Fast and the Furious)" },
      { navn: "Road rating", vaerdi: "684" },
      { navn: "Off-road rating", vaerdi: "90" }
    ]
  },
  {
    navn: "Übermacht Pop Art Cypher",
    billede: "billeder/biler/pop-art-cypher.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Übermacht" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "669" },
      { navn: "Off-road rating", vaerdi: "272" }
    ]
  },
  {
    navn: "Benefactor Schutzen",
    billede: "billeder/biler/schutzen.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Benefactor" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "Vision Mercedes-Maybach 6 Cabriolet" },
      { navn: "Road rating", vaerdi: "662" },
      { navn: "Off-road rating", vaerdi: "243" }
    ]
  },
  {
    navn: "Übermacht Bareback Cypher",
    billede: "billeder/biler/bareback-cypher.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Übermacht" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "656" },
      { navn: "Off-road rating", vaerdi: "574" }
    ]
  },
  {
    navn: "Benefactor DWNPLY's Schutzen",
    billede: "billeder/biler/dwnplys-schutzen.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Benefactor" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "656" },
      { navn: "Off-road rating", vaerdi: "329" }
    ]
  },
  {
    navn: "Ascot Queen Bee Paragon",
    billede: "billeder/biler/queen-bee-paragon.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Ascot" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "654" },
      { navn: "Off-road rating", vaerdi: "316" }
    ]
  },
  {
    navn: "Annis Chameleon Elegy",
    billede: "billeder/biler/chameleon-elegy.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Annis" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "652" },
      { navn: "Off-road rating", vaerdi: "295" }
    ]
  },
  {
    navn: "Ascot Paragon",
    billede: "billeder/biler/paragon-r.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Ascot" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "2018 Bentley Continental GT" },
      { navn: "Road rating", vaerdi: "650" },
      { navn: "Off-road rating", vaerdi: "316" }
    ]
  },
  {
    navn: "Maibatsu Blue Drake Penumbra",
    billede: "billeder/biler/blue-drake-penumbra.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "637" },
      { navn: "Off-road rating", vaerdi: "155" }
    ]
  },
  {
    navn: "Übermacht Cypher",
    billede: "billeder/biler/cypher.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Übermacht" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "BMW M2 (F87) with some design cues from the BMW M6 (F13) and BMW M8 (F92)" },
      { navn: "Road rating", vaerdi: "622" },
      { navn: "Off-road rating", vaerdi: "369" }
    ]
  },
  {
    navn: "Buckingham Bourbon Windsor",
    billede: "billeder/biler/bourbon-windsor.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Buckingham" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "607" },
      { navn: "Off-road rating", vaerdi: "389" }
    ]
  },
  {
    navn: "Buckingham Windsor Drop",
    billede: "billeder/biler/windsor-drop.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Buckingham" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "Rolls-Royce Ghost & Rolls-Royce Dawn" },
      { navn: "Road rating", vaerdi: "590" },
      { navn: "Off-road rating", vaerdi: "366" }
    ]
  },
  {
    navn: "Buckingham GILF Windsor",
    billede: "billeder/biler/gilf-windsor.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Buckingham" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "589" },
      { navn: "Off-road rating", vaerdi: "372" }
    ]
  },
  {
    navn: "Buckingham Gold Scarab Windsor",
    billede: "billeder/biler/gold-scarab-windsor.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Buckingham" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "588" },
      { navn: "Off-road rating", vaerdi: "369" }
    ]
  },
  {
    navn: "Emperor Vectre",
    billede: "billeder/biler/vectre.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Emperor" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "Lexus RC F" },
      { navn: "Road rating", vaerdi: "579" },
      { navn: "Off-road rating", vaerdi: "345" }
    ]
  },
  {
    navn: "Obey 8F Drafter",
    billede: "billeder/biler/8f-drafter.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Obey" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "2018 Audi RS5 Coupe" },
      { navn: "Road rating", vaerdi: "576" },
      { navn: "Off-road rating", vaerdi: "370" }
    ]
  },
  {
    navn: "Annis Elegy '90",
    billede: "billeder/biler/elegy-retro-custom.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Annis" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "Nissan Skyline GT-R" },
      { navn: "Road rating", vaerdi: "568" },
      { navn: "Off-road rating", vaerdi: "285" }
    ]
  },
  {
    navn: "Imponte Turbo Ruiner",
    billede: "billeder/biler/turbo-ruiner.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Imponte" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "534" },
      { navn: "Off-road rating", vaerdi: "376" }
    ]
  },
  {
    navn: "Annis Drifter Elegy",
    billede: "billeder/biler/drifter-elegy.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Annis" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "532" },
      { navn: "Off-road rating", vaerdi: "114" }
    ]
  },
  {
    navn: "Dinka Ahol Blista",
    billede: "billeder/biler/ahol-blista.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Dinka" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "516" },
      { navn: "Off-road rating", vaerdi: "310" }
    ]
  },
  {
    navn: "Maibatsu Penumbra",
    billede: "billeder/biler/penumbra.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "Mitsubishi Eclipse, Audi TT" },
      { navn: "Road rating", vaerdi: "512" },
      { navn: "Off-road rating", vaerdi: "331" }
    ]
  },
  {
    navn: "Maibatsu Party Girl Penumbra",
    billede: "billeder/biler/party-girl-penumbra.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "512" },
      { navn: "Off-road rating", vaerdi: "331" }
    ]
  },
  {
    navn: "Fathom FR36",
    billede: "billeder/biler/fr36.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Fathom" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "Infiniti G35 (V35)" },
      { navn: "Road rating", vaerdi: "510" },
      { navn: "Off-road rating", vaerdi: "321" }
    ]
  },
  {
    navn: "Maibatsu Penumbra FF '97",
    billede: "billeder/biler/penumbra-ff.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "2nd Generation Mitsubishi Eclipse & 2nd Generation Eagle Talon" },
      { navn: "Road rating", vaerdi: "504" },
      { navn: "Off-road rating", vaerdi: "314" }
    ]
  },
  {
    navn: "Übermacht Apoc",
    billede: "billeder/biler/zion.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Übermacht" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "BMW M6 E63" },
      { navn: "Road rating", vaerdi: "488" },
      { navn: "Off-road rating", vaerdi: "292" }
    ]
  },
  {
    navn: "Übermacht Glitterbomb APOC",
    billede: "billeder/biler/glitterbomb-apoc.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Übermacht" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "488" },
      { navn: "Off-road rating", vaerdi: "292" }
    ]
  },
  {
    navn: "Vapid DriveShaft Hustler",
    billede: "billeder/biler/driveshaft-hustler.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "447" },
      { navn: "Off-road rating", vaerdi: "258" }
    ]
  },
  {
    navn: "Willard Lasso '90",
    billede: "billeder/biler/buick-reatta-convertible.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Willard" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "Buick Reatta Convertible" },
      { navn: "Road rating", vaerdi: "444" },
      { navn: "Off-road rating", vaerdi: "291" }
    ]
  },
  {
    navn: "Dundreary Arcturus '93",
    billede: "billeder/biler/lincoln-mark-viii.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Dundreary" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "Lincoln Mark VIII" },
      { navn: "Road rating", vaerdi: "443" },
      { navn: "Off-road rating", vaerdi: "316" }
    ]
  },
  {
    navn: "Dinka Blista '85",
    billede: "billeder/biler/blista-compact.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Dinka" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "Honda CRX 1st Gen" },
      { navn: "Road rating", vaerdi: "437" },
      { navn: "Off-road rating", vaerdi: "291" }
    ]
  },
  {
    navn: "Dinka She's All That Blista",
    billede: "billeder/biler/shes-all-that-blista.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Dinka" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "437" },
      { navn: "Off-road rating", vaerdi: "291" }
    ]
  },
  {
    navn: "Imponte Ruiner '82",
    billede: "billeder/biler/ruiner.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Imponte" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "Pontiac Trans Am/Chevrolet Camaro" },
      { navn: "Road rating", vaerdi: "431" },
      { navn: "Off-road rating", vaerdi: "280" }
    ]
  },
  {
    navn: "Declasse Akane",
    billede: "billeder/biler/chevrolet-sonic.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "Chevrolet Sonic" },
      { navn: "Road rating", vaerdi: "431" },
      { navn: "Off-road rating", vaerdi: "296" }
    ]
  },
  {
    navn: "Declasse Cousin Carlo's Akane",
    billede: "billeder/biler/cousin-carlos-akane.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "431" },
      { navn: "Off-road rating", vaerdi: "296" }
    ]
  },
  {
    navn: "Vapid Red Hot Hustler",
    billede: "billeder/biler/red-hot-hustler.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "428" },
      { navn: "Off-road rating", vaerdi: "215" }
    ]
  },
  {
    navn: "Karin Futo '85",
    billede: "billeder/biler/futo.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Karin" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "Toyota AE86 Levin" },
      { navn: "Road rating", vaerdi: "412" },
      { navn: "Off-road rating", vaerdi: "287" }
    ]
  },
  {
    navn: "Karin Monster Futo",
    billede: "billeder/biler/monster-futo.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Karin" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Road rating", vaerdi: "391" },
      { navn: "Off-road rating", vaerdi: "583" }
    ]
  },
  {
    navn: "Vapid Hustler '32",
    billede: "billeder/biler/hustler.jpg",
    tekst: "A two-door car with a sporty look.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Coupe" },
      { navn: "Based on", vaerdi: "1932 Ford Coupe" },
      { navn: "Road rating", vaerdi: "308" },
      { navn: "Off-road rating", vaerdi: "158" }
    ]
  },
  {
    navn: "Ocelot Bloodless Jugular",
    billede: "billeder/biler/bloodless-jugular.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Ocelot" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Road rating", vaerdi: "728" },
      { navn: "Off-road rating", vaerdi: "146" }
    ]
  },
  {
    navn: "Benefactor Nightlight Schafter",
    billede: "billeder/biler/nightlight-schafter.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Benefactor" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Road rating", vaerdi: "698" },
      { navn: "Off-road rating", vaerdi: "187" }
    ]
  },
  {
    navn: "Ocelot Jugular",
    billede: "billeder/biler/jugular.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Ocelot" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Jaguar XE SV Project 8" },
      { navn: "Road rating", vaerdi: "661" },
      { navn: "Off-road rating", vaerdi: "394" }
    ]
  },
  {
    navn: "Benefactor Lagoon Schafter",
    billede: "billeder/biler/lagoon-schafter.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Benefactor" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Road rating", vaerdi: "639" },
      { navn: "Off-road rating", vaerdi: "278" }
    ]
  },
  {
    navn: "Coil Raiden",
    billede: "billeder/biler/raiden.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Coil" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Tesla Model S" },
      { navn: "Road rating", vaerdi: "636" },
      { navn: "Off-road rating", vaerdi: "445" }
    ]
  },
  {
    navn: "Albany V-STR",
    billede: "billeder/biler/v-str.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "2019 Cadillac CTS-V" },
      { navn: "Road rating", vaerdi: "616" },
      { navn: "Off-road rating", vaerdi: "373" }
    ]
  },
  {
    navn: "Bravado Buffalo '19",
    billede: "billeder/biler/buffalo-stx.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "2015 Dodge Charger" },
      { navn: "Road rating", vaerdi: "557" },
      { navn: "Off-road rating", vaerdi: "358" }
    ]
  },
  {
    navn: "Schyster PMP 700",
    billede: "billeder/biler/pmp-700.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Schyster" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Second-generation Chrysler 300 (LD)" },
      { navn: "Road rating", vaerdi: "551" },
      { navn: "Off-road rating", vaerdi: "353" }
    ]
  },
  {
    navn: "Obey Tailgater S",
    billede: "billeder/biler/tailgater-s.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Obey" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Audi RS3 Sedan" },
      { navn: "Road rating", vaerdi: "516" },
      { navn: "Off-road rating", vaerdi: "344" }
    ]
  },
  {
    navn: "Dinka Sugoi",
    billede: "billeder/biler/sugoi.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Dinka" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Honda Civic Type R FK8" },
      { navn: "Road rating", vaerdi: "511" },
      { navn: "Off-road rating", vaerdi: "317" }
    ]
  },
  {
    navn: "Vapid Lowline",
    billede: "billeder/biler/ford-taurus.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "2013-2019 Ford Taurus" },
      { navn: "Road rating", vaerdi: "508" },
      { navn: "Off-road rating", vaerdi: "318" }
    ]
  },
  {
    navn: "Benefactor Schafter S",
    billede: "billeder/biler/mercedes-benz-c-class-w205.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Benefactor" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Mercedes-Benz C Class (W205)" },
      { navn: "Road rating", vaerdi: "507" },
      { navn: "Off-road rating", vaerdi: "330" }
    ]
  },
  {
    navn: "Dinka DIY Chavos",
    billede: "billeder/biler/diy-chavos.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Dinka" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Road rating", vaerdi: "504" },
      { navn: "Off-road rating", vaerdi: "315" }
    ]
  },
  {
    navn: "Karin Intruder",
    billede: "billeder/biler/intruder.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Karin" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Infiniti Q45/I30" },
      { navn: "Road rating", vaerdi: "503" },
      { navn: "Off-road rating", vaerdi: "353" }
    ]
  },
  {
    navn: "Obey Animus",
    billede: "billeder/biler/audi-a7-rs7-2nd-gen.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Obey" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Audi A7 RS7 (2nd Gen)" },
      { navn: "Road rating", vaerdi: "499" },
      { navn: "Off-road rating", vaerdi: "333" }
    ]
  },
  {
    navn: "Bravado Buffalo '07",
    billede: "billeder/biler/buffalo.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Dodge Charger" },
      { navn: "Road rating", vaerdi: "497" },
      { navn: "Off-road rating", vaerdi: "330" }
    ]
  },
  {
    navn: "Dinka Chavos XS",
    billede: "billeder/biler/honda-accord-10th-gen.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Dinka" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Honda Accord (10th Gen)" },
      { navn: "Road rating", vaerdi: "497" },
      { navn: "Off-road rating", vaerdi: "315" }
    ]
  },
  {
    navn: "Declasse Ghosts Exposed Parkland",
    billede: "billeder/biler/ghosts-exposed-parkland.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Road rating", vaerdi: "489" },
      { navn: "Off-road rating", vaerdi: "189" }
    ]
  },
  {
    navn: "Karin Feroci '98",
    billede: "billeder/biler/feroci.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Karin" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Lexus GS 300 (First-generation)" },
      { navn: "Road rating", vaerdi: "487" },
      { navn: "Off-road rating", vaerdi: "336" }
    ]
  },
  {
    navn: "Declasse Impaler '20",
    billede: "billeder/biler/chevrolet-impala-10th-gen.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Chevrolet Impala (10th Gen)" },
      { navn: "Road rating", vaerdi: "467" },
      { navn: "Off-road rating", vaerdi: "312" }
    ]
  },
  {
    navn: "Willard Transient",
    billede: "billeder/biler/buick-regal-6th-gen.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Willard" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Buick Regal (6th Gen)" },
      { navn: "Road rating", vaerdi: "465" },
      { navn: "Off-road rating", vaerdi: "312" }
    ]
  },
  {
    navn: "Willard Getaway Grouse",
    billede: "billeder/biler/getaway-grouse.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Willard" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Road rating", vaerdi: "463" },
      { navn: "Off-road rating", vaerdi: "312" }
    ]
  },
  {
    navn: "Vapid Stanier G2",
    billede: "billeder/biler/stanier-g2.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Ford Crown Victoria" },
      { navn: "Road rating", vaerdi: "450" },
      { navn: "Off-road rating", vaerdi: "294" }
    ]
  },
  {
    navn: "Vapid Peppermint Stanier",
    billede: "billeder/biler/peppermint-stanier.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Road rating", vaerdi: "450" },
      { navn: "Off-road rating", vaerdi: "294" }
    ]
  },
  {
    navn: "BF Greta",
    billede: "billeder/biler/volkswagen-jetta.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "BF" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Volkswagen Jetta" },
      { navn: "Road rating", vaerdi: "445" },
      { navn: "Off-road rating", vaerdi: "283" }
    ]
  },
  {
    navn: "Sirius Springtime Sungrazer",
    billede: "billeder/biler/springtime-sungrazer.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Sirius" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Road rating", vaerdi: "443" },
      { navn: "Off-road rating", vaerdi: "307" }
    ]
  },
  {
    navn: "Declasse Impaler SZ '95",
    billede: "billeder/biler/impaler-sz.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "1994-1996 Chevrolet Impala SS" },
      { navn: "Road rating", vaerdi: "441" },
      { navn: "Off-road rating", vaerdi: "285" }
    ]
  },
  {
    navn: "Vapid Stanier '98",
    billede: "billeder/biler/stanier.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Ford Crown Victoria" },
      { navn: "Road rating", vaerdi: "438" },
      { navn: "Off-road rating", vaerdi: "284" }
    ]
  },
  {
    navn: "Willard Thirsty Grouse",
    billede: "billeder/biler/thirsty-grouse.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Willard" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Road rating", vaerdi: "428" },
      { navn: "Off-road rating", vaerdi: "257" }
    ]
  },
  {
    navn: "Karin Asterope GZ",
    billede: "billeder/biler/asterope-gz.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Karin" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Toyota Camry (XV30)" },
      { navn: "Road rating", vaerdi: "412" },
      { navn: "Off-road rating", vaerdi: "291" }
    ]
  },
  {
    navn: "Declasse Impaler '80",
    billede: "billeder/biler/impaler-lx.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Sixth generation Chevrolet Impala" },
      { navn: "Road rating", vaerdi: "388" },
      { navn: "Off-road rating", vaerdi: "234" }
    ]
  },
  {
    navn: "Bravado Bogan",
    billede: "billeder/biler/chrysler-sebring-2nd-gen.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Chrysler Sebring (2nd gen) and Dodge Stratus (2nd gen)" },
      { navn: "Road rating", vaerdi: "385" },
      { navn: "Off-road rating", vaerdi: "253" }
    ]
  },
  {
    navn: "Albany Primo",
    billede: "billeder/biler/primo.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Late 80's Pontiac Bonneville" },
      { navn: "Road rating", vaerdi: "372" },
      { navn: "Off-road rating", vaerdi: "266" }
    ]
  },
  {
    navn: "Sirius Holdout Sungrazer",
    billede: "billeder/biler/holdout-sungrazer.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Sirius" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Road rating", vaerdi: "369" },
      { navn: "Off-road rating", vaerdi: "209" }
    ]
  },
  {
    navn: "Willard Grouse '92",
    billede: "billeder/biler/buick-skylark-6th-gen.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Willard" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Buick Skylark (6th Gen)" },
      { navn: "Road rating", vaerdi: "365" },
      { navn: "Off-road rating", vaerdi: "214" }
    ]
  },
  {
    navn: "Albany Sunrise Emperor",
    billede: "billeder/biler/sunrise-emperor.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Road rating", vaerdi: "362" },
      { navn: "Off-road rating", vaerdi: "244" }
    ]
  },
  {
    navn: "Sirius Sungrazer '61",
    billede: "billeder/biler/mercury-comet-1st-gen.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Sirius" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "1960-1961 Mercury Comet" },
      { navn: "Road rating", vaerdi: "357" },
      { navn: "Off-road rating", vaerdi: "199" }
    ]
  },
  {
    navn: "Schyster Woodland '85",
    billede: "billeder/biler/chrysler-lebaron-town-country.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Schyster" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Chrysler LeBaron Town & Country station wagon (1986-1988)" },
      { navn: "Road rating", vaerdi: "352" },
      { navn: "Off-road rating", vaerdi: "188" }
    ]
  },
  {
    navn: "Schyster Flower Child Woodland",
    billede: "billeder/biler/flower-child-woodland.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Schyster" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Road rating", vaerdi: "352" },
      { navn: "Off-road rating", vaerdi: "188" }
    ]
  },
  {
    navn: "Declasse Parkland '71",
    billede: "billeder/biler/parkland-71.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "Buick Estate (1971-1976)" },
      { navn: "Road rating", vaerdi: "337" },
      { navn: "Off-road rating", vaerdi: "179" }
    ]
  },
  {
    navn: "Albany Emperor '85",
    billede: "billeder/biler/emperor.jpg",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "1977-1980 Cadillac Sedan de Ville (5th Gen) and 1986–1990 Cadillac Brougham" },
      { navn: "Road rating", vaerdi: "305" },
      { navn: "Off-road rating", vaerdi: "191" }
    ]
  },
  {
    navn: "Vapid Stanier '55",
    billede: "billeder/biler/vapid-stanier-55.avif",
    tekst: "A four-door car you see everywhere on the streets.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Sedan" },
      { navn: "Based on", vaerdi: "1956 Ford Fairlane Club Sedan; The yellow-on-white Stanier is inspired by the 1955 Oldsmobile 88 parked on Ocean Drive, Miami Beach." }
    ]
  },
  {
    navn: "Pegassi Charred Toros",
    billede: "billeder/biler/charred-toros.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Pegassi" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "623" },
      { navn: "Off-road rating", vaerdi: "525" }
    ]
  },
  {
    navn: "Pegassi Lustrous Toros",
    billede: "billeder/biler/lustrous-toros.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Pegassi" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "604" },
      { navn: "Off-road rating", vaerdi: "396" }
    ]
  },
  {
    navn: "Benefactor Freddie's Dubsta",
    billede: "billeder/biler/freddies-dubsta.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Benefactor" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "603" },
      { navn: "Off-road rating", vaerdi: "494" }
    ]
  },
  {
    navn: "Pegassi Toros",
    billede: "billeder/biler/toros.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Pegassi" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Lamborghini Urus, Lamborghini Aventador, Audi Q8" },
      { navn: "Road rating", vaerdi: "594" },
      { navn: "Off-road rating", vaerdi: "472" }
    ]
  },
  {
    navn: "Benefactor Fatstaks Dubsta",
    billede: "billeder/biler/fatstaks-dubsta.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Benefactor" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "581" },
      { navn: "Off-road rating", vaerdi: "416" }
    ]
  },
  {
    navn: "Buckingham Diamond Jubilee",
    billede: "billeder/biler/diamond-jubilee.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Buckingham" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "577" },
      { navn: "Off-road rating", vaerdi: "383" }
    ]
  },
  {
    navn: "Pfister Pink Licorice Astron",
    billede: "billeder/biler/pink-licorice-astron.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Pfister" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "577" },
      { navn: "Off-road rating", vaerdi: "353" }
    ]
  },
  {
    navn: "Pfister Astron",
    billede: "billeder/biler/astron.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Pfister" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Porsche Macan" },
      { navn: "Road rating", vaerdi: "576" },
      { navn: "Off-road rating", vaerdi: "352" }
    ]
  },
  {
    navn: "Gallivanter Pink Sunset Baller",
    billede: "billeder/biler/pink-sunset-baller.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Gallivanter" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "541" },
      { navn: "Off-road rating", vaerdi: "353" }
    ]
  },
  {
    navn: "Gallivanter Baller ST-D",
    billede: "billeder/biler/baller-st-d.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Gallivanter" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Fifth-generation Range Rover (L460)" },
      { navn: "Road rating", vaerdi: "540" },
      { navn: "Off-road rating", vaerdi: "441" }
    ]
  },
  {
    navn: "Gallivanter Big Shot Baller-STD",
    billede: "billeder/biler/big-shot-baller-std.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Gallivanter" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "540" },
      { navn: "Off-road rating", vaerdi: "439" }
    ]
  },
  {
    navn: "Buckingham Jubilee",
    billede: "billeder/biler/jubilee.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Buckingham" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Rolls-Royce Cullinan" },
      { navn: "Road rating", vaerdi: "538" },
      { navn: "Off-road rating", vaerdi: "440" }
    ]
  },
  {
    navn: "Gallivanter Baller",
    billede: "billeder/biler/baller.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Gallivanter" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Range Rover Evoque/Range Rover Sport" },
      { navn: "Road rating", vaerdi: "533" },
      { navn: "Off-road rating", vaerdi: "423" }
    ]
  },
  {
    navn: "Canis Black Moth Kamacho",
    billede: "billeder/biler/black-moth-kamacho.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Canis" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "514" },
      { navn: "Off-road rating", vaerdi: "814" }
    ]
  },
  {
    navn: "Buckingham Princess Jubilee",
    billede: "billeder/biler/princess-jubilee.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Buckingham" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "512" },
      { navn: "Off-road rating", vaerdi: "663" }
    ]
  },
  {
    navn: "Übermacht Rebla GTS",
    billede: "billeder/biler/rebla-gts.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Übermacht" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Fourth generation BMW X5" },
      { navn: "Road rating", vaerdi: "510" },
      { navn: "Off-road rating", vaerdi: "404" }
    ]
  },
  {
    navn: "Albany Cavalcade XL",
    billede: "billeder/biler/cavalcade-xl.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "2023 Cadillac Escalade-V" },
      { navn: "Road rating", vaerdi: "503" },
      { navn: "Off-road rating", vaerdi: "409" }
    ]
  },
  {
    navn: "Albany Booty Bang Cavalcade",
    billede: "billeder/biler/booty-bang-cavalcade.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "503" },
      { navn: "Off-road rating", vaerdi: "332" }
    ]
  },
  {
    navn: "Albany Narcos Cavalcade",
    billede: "billeder/biler/narcos-cavalcade.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Albany" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "503" },
      { navn: "Off-road rating", vaerdi: "332" }
    ]
  },
  {
    navn: "Canis Gunrunner Kamacho",
    billede: "billeder/biler/gunrunner-kamacho.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Canis" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "489" },
      { navn: "Off-road rating", vaerdi: "727" }
    ]
  },
  {
    navn: "Benefactor Red Queen Dubsta",
    billede: "billeder/biler/red-queen-dubsta.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Benefactor" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "480" },
      { navn: "Off-road rating", vaerdi: "399" }
    ]
  },
  {
    navn: "Benefactor Dubsta",
    billede: "billeder/biler/dubsta.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Benefactor" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Mercedes-Benz G-Class" },
      { navn: "Road rating", vaerdi: "479" },
      { navn: "Off-road rating", vaerdi: "398" }
    ]
  },
  {
    navn: "Benefactor Gilded Dubsta",
    billede: "billeder/biler/gilded-dubsta.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Benefactor" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "479" },
      { navn: "Off-road rating", vaerdi: "398" }
    ]
  },
  {
    navn: "Bravado Gresley XT",
    billede: "billeder/biler/dodge-durango-3rd-gen.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Dodge Durango (3rd Gen)" },
      { navn: "Road rating", vaerdi: "476" },
      { navn: "Off-road rating", vaerdi: "391" }
    ]
  },
  {
    navn: "Benefactor XLS",
    billede: "billeder/biler/xls.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Benefactor" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Mercedes GL Class, BMW X5" },
      { navn: "Road rating", vaerdi: "474" },
      { navn: "Off-road rating", vaerdi: "376" }
    ]
  },
  {
    navn: "Vapid Aleutian",
    billede: "billeder/biler/aleutian.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Fourth generation Ford Expedition (U553)" },
      { navn: "Road rating", vaerdi: "467" },
      { navn: "Off-road rating", vaerdi: "367" }
    ]
  },
  {
    navn: "Dundreary Landstalker XL",
    billede: "billeder/biler/landstalker-xl.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Dundreary" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Fourth generation Lincoln Navigator" },
      { navn: "Road rating", vaerdi: "458" },
      { navn: "Off-road rating", vaerdi: "384" }
    ]
  },
  {
    navn: "Canis Mesa",
    billede: "billeder/biler/mesa.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Canis" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Jeep Wrangler" },
      { navn: "Road rating", vaerdi: "441" },
      { navn: "Off-road rating", vaerdi: "623" }
    ]
  },
  {
    navn: "Vapid Montagne",
    billede: "billeder/biler/ford-explorer-6th-gen.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Ford Explorer (6th Gen)" },
      { navn: "Road rating", vaerdi: "433" },
      { navn: "Off-road rating", vaerdi: "351" }
    ]
  },
  {
    navn: "Canis Nancy's Crawler",
    billede: "billeder/biler/nancys-crawler.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Canis" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "426" },
      { navn: "Off-road rating", vaerdi: "688" }
    ]
  },
  {
    navn: "Declasse Granger 3600LX",
    billede: "billeder/biler/granger-3600lx.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "2015 - 2020 Chevrolet Suburban" },
      { navn: "Road rating", vaerdi: "416" },
      { navn: "Off-road rating", vaerdi: "319" }
    ]
  },
  {
    navn: "Karin Allander",
    billede: "billeder/biler/toyota-rav4-5th-gen.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Karin" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Toyota RAV4 (5th Gen)" },
      { navn: "Road rating", vaerdi: "411" },
      { navn: "Off-road rating", vaerdi: "322" }
    ]
  },
  {
    navn: "Canis Kamacho",
    billede: "billeder/biler/kamacho.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Canis" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Jeep Crew Chief 715 concept" },
      { navn: "Road rating", vaerdi: "409" },
      { navn: "Off-road rating", vaerdi: "580" }
    ]
  },
  {
    navn: "Declasse Granger",
    billede: "billeder/biler/granger.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Chevrolet Suburban" },
      { navn: "Road rating", vaerdi: "388" },
      { navn: "Off-road rating", vaerdi: "289" }
    ]
  },
  {
    navn: "Bravado Allegiance Dorado",
    billede: "billeder/biler/allegiance-dorado.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Road rating", vaerdi: "373" },
      { navn: "Off-road rating", vaerdi: "314" }
    ]
  },
  {
    navn: "Vapid Montagne XL",
    billede: "billeder/biler/ford-explorer-2nd-gen.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Ford Explorer (2nd Gen)" },
      { navn: "Road rating", vaerdi: "370" },
      { navn: "Off-road rating", vaerdi: "282" }
    ]
  },
  {
    navn: "Bravado Dorado",
    billede: "billeder/biler/dorado.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "1st generation Dodge Durango" },
      { navn: "Road rating", vaerdi: "348" },
      { navn: "Off-road rating", vaerdi: "528" }
    ]
  },
  {
    navn: "Annis Hellion '95",
    billede: "billeder/biler/hellion.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Annis" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Nissan Patrol Safari Y6, Jeep Cherokee (XJ)" },
      { navn: "Road rating", vaerdi: "326" },
      { navn: "Off-road rating", vaerdi: "506" }
    ]
  },
  {
    navn: "Canis Crawler '82",
    billede: "billeder/biler/jeep-scrambler-cj-8.jpg",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Canis" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "Jeep Scrambler (CJ-8)" },
      { navn: "Road rating", vaerdi: "313" },
      { navn: "Off-road rating", vaerdi: "475" }
    ]
  },
  {
    navn: "Vapid Riata '70",
    billede: "billeder/biler/riata-classic.avif",
    tekst: "A big car that sits high above the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "SUV" },
      { navn: "Based on", vaerdi: "First-generation Ford Bronco" },
      { navn: "Road rating", vaerdi: "294" },
      { navn: "Off-road rating", vaerdi: "453" }
    ]
  },
  {
    navn: "BF Sludge Wraith Injection",
    billede: "billeder/biler/sludge-wraith-injection.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Brand", vaerdi: "BF" },
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Road rating", vaerdi: "508" },
      { navn: "Off-road rating", vaerdi: "765" }
    ]
  },
  {
    navn: "BF Injection '73",
    billede: "billeder/biler/injection.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Brand", vaerdi: "BF" },
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Based on", vaerdi: "VW \"Baja Bugs\"" },
      { navn: "Road rating", vaerdi: "505" },
      { navn: "Off-road rating", vaerdi: "676" }
    ]
  },
  {
    navn: "BF Blood Moon Bandito",
    billede: "billeder/biler/blood-moon-bandito.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Brand", vaerdi: "BF" },
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Road rating", vaerdi: "497" },
      { navn: "Off-road rating", vaerdi: "755" }
    ]
  },
  {
    navn: "Vapid Dominator Buggy '67",
    billede: "billeder/biler/dominator-buggy-67.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Based on", vaerdi: "Ford Mustang (1st Gen), with lifted suspension" },
      { navn: "Road rating", vaerdi: "493" },
      { navn: "Off-road rating", vaerdi: "672" }
    ]
  },
  {
    navn: "BF Bandito '77",
    billede: "billeder/biler/bandito-77.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Brand", vaerdi: "BF" },
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Road rating", vaerdi: "459" },
      { navn: "Off-road rating", vaerdi: "714" }
    ]
  },
  {
    navn: "BF Muckspreader Bandito",
    billede: "billeder/biler/muckspreader-bandito.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Brand", vaerdi: "BF" },
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Road rating", vaerdi: "459" },
      { navn: "Off-road rating", vaerdi: "713" }
    ]
  },
  {
    navn: "BF Beer Buggy Bandito",
    billede: "billeder/biler/beer-buggy-bandito.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Brand", vaerdi: "BF" },
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Road rating", vaerdi: "459" },
      { navn: "Off-road rating", vaerdi: "714" }
    ]
  },
  {
    navn: "Mer-Can Love Buggy Outlaw",
    billede: "billeder/biler/love-buggy-outlaw.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Mer-Can" },
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Road rating", vaerdi: "439" },
      { navn: "Off-road rating", vaerdi: "694" }
    ]
  },
  {
    navn: "Mer-Can Outlaw",
    billede: "billeder/biler/outlaw.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Mer-Can" },
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Based on", vaerdi: "Can-Am Maverick X3 Turbo" },
      { navn: "Road rating", vaerdi: "433" },
      { navn: "Off-road rating", vaerdi: "727" }
    ]
  },
  {
    navn: "Bravado Bison 900 '95 Monster",
    billede: "billeder/biler/bison-900-monster-truck.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Based on", vaerdi: "Dodge Ram (2nd Gen) in Monster Truck form" },
      { navn: "Road rating", vaerdi: "360" },
      { navn: "Off-road rating", vaerdi: "618" }
    ]
  },
  {
    navn: "Vapid DriveShaft Marshall",
    billede: "billeder/biler/driveshaft-marshall.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Road rating", vaerdi: "357" },
      { navn: "Off-road rating", vaerdi: "615" }
    ]
  },
  {
    navn: "Vapid Marshall",
    billede: "billeder/biler/marshall.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Based on", vaerdi: "Ford Super Duty (4th Gen)" },
      { navn: "Road rating", vaerdi: "344" },
      { navn: "Off-road rating", vaerdi: "600" }
    ]
  },
  {
    navn: "Vapid Venomous Marshall",
    billede: "billeder/biler/venomous-marshall.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Road rating", vaerdi: "344" },
      { navn: "Off-road rating", vaerdi: "600" }
    ]
  },
  {
    navn: "Vapid Beer Monster Marshall",
    billede: "billeder/biler/beer-monster-marshall.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Road rating", vaerdi: "344" },
      { navn: "Off-road rating", vaerdi: "600" }
    ]
  },
  {
    navn: "HVY Wastelander",
    billede: "billeder/biler/wastelander.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Brand", vaerdi: "HVY" },
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Based on", vaerdi: "Mongo (Fast & Furious)" },
      { navn: "Road rating", vaerdi: "328" },
      { navn: "Off-road rating", vaerdi: "535" }
    ]
  },
  {
    navn: "Mer-Can Blast",
    billede: "billeder/biler/polaris-ranger.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Brand", vaerdi: "Mer-Can" },
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Based on", vaerdi: "Polaris Ranger" },
      { navn: "Road rating", vaerdi: "283" },
      { navn: "Off-road rating", vaerdi: "516" }
    ]
  },
  {
    navn: "Swamp Blaster",
    billede: "billeder/biler/swamp-buggy.jpg",
    tekst: "Made for dirt, sand and swamps, not only the road.",
    fakta: [
      { navn: "Type", vaerdi: "Off-road" },
      { navn: "Based on", vaerdi: "Palm Beach Swamp Buggy" },
      { navn: "Road rating", vaerdi: "240" },
      { navn: "Off-road rating", vaerdi: "459" }
    ]
  },
  {
    navn: "Bravado Sojourn",
    billede: "billeder/biler/chrysler-town-country-5th-gen.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Based on", vaerdi: "Dodge Grand Caravan" },
      { navn: "Road rating", vaerdi: "444" },
      { navn: "Off-road rating", vaerdi: "279" }
    ]
  },
  {
    navn: "Karin Vivanite",
    billede: "billeder/biler/vivanite.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Karin" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Based on", vaerdi: "Fourth generation Toyota Sienna (XL40)" },
      { navn: "Road rating", vaerdi: "425" },
      { navn: "Off-road rating", vaerdi: "209" }
    ]
  },
  {
    navn: "Shifter",
    billede: "billeder/biler/ford-transit-cargo-4th-gen.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Type", vaerdi: "Van" },
      { navn: "Based on", vaerdi: "Ford Transit Cargo (4th Gen)" },
      { navn: "Road rating", vaerdi: "391" },
      { navn: "Off-road rating", vaerdi: "206" }
    ]
  },
  {
    navn: "Shrimp and Save Shifter",
    billede: "billeder/biler/shrimp-and-save-shifter.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Type", vaerdi: "Van" },
      { navn: "Road rating", vaerdi: "391" },
      { navn: "Off-road rating", vaerdi: "206" }
    ]
  },
  {
    navn: "Bravado DriveShaft Youga",
    billede: "billeder/biler/driveshaft-youga.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Road rating", vaerdi: "387" },
      { navn: "Off-road rating", vaerdi: "199" }
    ]
  },
  {
    navn: "Declasse Burrito '98",
    billede: "billeder/biler/burrito.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Based on", vaerdi: "1996-2002 Chevrolet Express" },
      { navn: "Road rating", vaerdi: "361" },
      { navn: "Off-road rating", vaerdi: "203" }
    ]
  },
  {
    navn: "Declasse Truther Burrito",
    billede: "billeder/biler/truther-burrito.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Road rating", vaerdi: "361" },
      { navn: "Off-road rating", vaerdi: "203" }
    ]
  },
  {
    navn: "Declasse Bugstars Burrito",
    billede: "billeder/biler/bugstars-burrito.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Road rating", vaerdi: "361" },
      { navn: "Off-road rating", vaerdi: "203" }
    ]
  },
  {
    navn: "Vapid Rumpo",
    billede: "billeder/biler/rumpo.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Based on", vaerdi: "Ford E-Series" },
      { navn: "Road rating", vaerdi: "345" },
      { navn: "Off-road rating", vaerdi: "203" }
    ]
  },
  {
    navn: "Vapid Speedo",
    billede: "billeder/biler/speedo.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Based on", vaerdi: "2003-present Chevrolet Express van" },
      { navn: "Road rating", vaerdi: "343" },
      { navn: "Off-road rating", vaerdi: "230" }
    ]
  },
  {
    navn: "Vapid Shuttle",
    billede: "billeder/biler/ford-transit-4th-gen.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Based on", vaerdi: "Ford Transit (4th Gen)" },
      { navn: "Road rating", vaerdi: "332" },
      { navn: "Off-road rating", vaerdi: "181" }
    ]
  },
  {
    navn: "Bravado Youga XL '79",
    billede: "billeder/biler/youga-xl-79.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Based on", vaerdi: "Dodge Ram Van (2nd Gen)" },
      { navn: "Road rating", vaerdi: "321" },
      { navn: "Off-road rating", vaerdi: "194" }
    ]
  },
  {
    navn: "Bravado Circles of Hell Youga",
    billede: "billeder/biler/circles-of-hell-youga.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Road rating", vaerdi: "321" },
      { navn: "Off-road rating", vaerdi: "194" }
    ]
  },
  {
    navn: "Bravado Elven Queen Youga",
    billede: "billeder/biler/elven-queen-youga.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Road rating", vaerdi: "321" },
      { navn: "Off-road rating", vaerdi: "194" }
    ]
  },
  {
    navn: "Bravado Acid Youga",
    billede: "billeder/biler/acid-youga.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Road rating", vaerdi: "321" },
      { navn: "Off-road rating", vaerdi: "194" }
    ]
  },
  {
    navn: "Bravado Tropic Dawn Youga",
    billede: "billeder/biler/tropic-dawn-youga.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Road rating", vaerdi: "321" },
      { navn: "Off-road rating", vaerdi: "194" }
    ]
  },
  {
    navn: "Bravado Third Eye Youga",
    billede: "billeder/biler/third-eye-youga.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Road rating", vaerdi: "300" },
      { navn: "Off-road rating", vaerdi: "175" }
    ]
  },
  {
    navn: "Bravado Youga '74",
    billede: "billeder/biler/youga-classic.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Based on", vaerdi: "Ford Ecoline (2nd gen)" },
      { navn: "Road rating", vaerdi: "296" },
      { navn: "Off-road rating", vaerdi: "173" }
    ]
  },
  {
    navn: "Bravado Interdimensional Youga",
    billede: "billeder/biler/interdimensional-youga.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Road rating", vaerdi: "296" },
      { navn: "Off-road rating", vaerdi: "173" }
    ]
  },
  {
    navn: "Bravado King of Swing Youga",
    billede: "billeder/biler/king-of-swing-youga.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Road rating", vaerdi: "296" },
      { navn: "Off-road rating", vaerdi: "173" }
    ]
  },
  {
    navn: "Brute Boxville",
    billede: "billeder/biler/boxville.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Brute" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Based on", vaerdi: "GMC Step Van" },
      { navn: "Road rating", vaerdi: "276" },
      { navn: "Off-road rating", vaerdi: "189" }
    ]
  },
  {
    navn: "Brute Cherry Popper Boxville",
    billede: "billeder/biler/cherry-popper-boxville.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Brute" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Road rating", vaerdi: "276" },
      { navn: "Off-road rating", vaerdi: "189" }
    ]
  },
  {
    navn: "Benefactor Spritz",
    billede: "billeder/biler/mercedes-benz-sprinter-2nd-gen.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Benefactor" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Based on", vaerdi: "Mercedes-Benz Sprinter (2nd Gen)" },
      { navn: "Road rating", vaerdi: "252" },
      { navn: "Off-road rating", vaerdi: "147" }
    ]
  },
  {
    navn: "Bravado Love Fist Youga",
    billede: "billeder/biler/love-fist-youga.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Road rating", vaerdi: "252" },
      { navn: "Off-road rating", vaerdi: "392" }
    ]
  },
  {
    navn: "Willard Trotter '95",
    billede: "billeder/biler/rexhall-rose-air.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Willard" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Based on", vaerdi: "Rexhall Rose Air" },
      { navn: "Road rating", vaerdi: "229" },
      { navn: "Off-road rating", vaerdi: "126" }
    ]
  },
  {
    navn: "Osprey Journey '78",
    billede: "billeder/biler/journey.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Osprey" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Based on", vaerdi: "1979–1981 Fleetwood Pace Arrow" },
      { navn: "Road rating", vaerdi: "227" },
      { navn: "Off-road rating", vaerdi: "114" }
    ]
  },
  {
    navn: "Osprey DriveShaft Journey",
    billede: "billeder/biler/driveshaft-journey.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Osprey" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Road rating", vaerdi: "227" },
      { navn: "Off-road rating", vaerdi: "114" }
    ]
  },
  {
    navn: "Osprey Erotic Journey",
    billede: "billeder/biler/erotic-journey.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Osprey" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Road rating", vaerdi: "227" },
      { navn: "Off-road rating", vaerdi: "114" }
    ]
  },
  {
    navn: "Willard Moocher '83",
    billede: "billeder/biler/moocher.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Willard" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Based on", vaerdi: "1985 Fleetwood Southwind" },
      { navn: "Road rating", vaerdi: "224" },
      { navn: "Off-road rating", vaerdi: "124" }
    ]
  },
  {
    navn: "Willard Preacher's Moocher",
    billede: "billeder/biler/preachers-moocher.jpg",
    tekst: "A van with lots of room for people or cargo.",
    fakta: [
      { navn: "Brand", vaerdi: "Willard" },
      { navn: "Type", vaerdi: "Van" },
      { navn: "Road rating", vaerdi: "224" },
      { navn: "Off-road rating", vaerdi: "124" }
    ]
  },
  {
    navn: "Principe Burnished Alvino",
    billede: "billeder/biler/burnished-alvino.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Principe" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "804" },
      { navn: "Off-road rating", vaerdi: "118" }
    ]
  },
  {
    navn: "Nagasaki SFB 1000",
    billede: "billeder/biler/suzuki-gsx-r1000.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Nagasaki" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Suzuki GSX-R1000 (front) and Ducati Panigale V2 (rear)" },
      { navn: "Road rating", vaerdi: "796" },
      { navn: "Off-road rating", vaerdi: "121" }
    ]
  },
  {
    navn: "Nagasaki KD's SFB 1000",
    billede: "billeder/biler/kds-sfb-1000.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Nagasaki" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "796" },
      { navn: "Off-road rating", vaerdi: "121" }
    ]
  },
  {
    navn: "Principe Emilio's Lectro",
    billede: "billeder/biler/emilios-lectro.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Principe" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "774" },
      { navn: "Off-road rating", vaerdi: "118" }
    ]
  },
  {
    navn: "Principe Alvino V1",
    billede: "billeder/biler/alvino-v1.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Principe" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Ducati Panigale V2 Sport Bike" },
      { navn: "Road rating", vaerdi: "771" },
      { navn: "Off-road rating", vaerdi: "120" }
    ]
  },
  {
    navn: "Nagasaki Smokescreen Carbon RS",
    billede: "billeder/biler/smokescreen-carbon-rs.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Nagasaki" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "768" },
      { navn: "Off-road rating", vaerdi: "120" }
    ]
  },
  {
    navn: "Nagasaki Carbon RS",
    billede: "billeder/biler/carbon-rs.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Nagasaki" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Ducati 1199, EBR 1190RS" },
      { navn: "Road rating", vaerdi: "750" },
      { navn: "Off-road rating", vaerdi: "120" }
    ]
  },
  {
    navn: "Nagasaki Hung Carbon RS",
    billede: "billeder/biler/hung-carbon-rs.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Nagasaki" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "750" },
      { navn: "Off-road rating", vaerdi: "120" }
    ]
  },
  {
    navn: "Dinka Double-T",
    billede: "billeder/biler/double-t.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Dinka" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Honda CBR" },
      { navn: "Road rating", vaerdi: "744" },
      { navn: "Off-road rating", vaerdi: "120" }
    ]
  },
  {
    navn: "Dinka Crushed Velvet Double-T",
    billede: "billeder/biler/crushed-velvet-double-t.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Dinka" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "744" },
      { navn: "Off-road rating", vaerdi: "120" }
    ]
  },
  {
    navn: "Principe Lectro",
    billede: "billeder/biler/lectro.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Principe" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Ducati Streetfighter S, MV Agusta Brutale S" },
      { navn: "Road rating", vaerdi: "726" },
      { navn: "Off-road rating", vaerdi: "117" }
    ]
  },
  {
    navn: "Übermacht Dogfight FCR",
    billede: "billeder/biler/dogfight-fcr.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Übermacht" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "701" },
      { navn: "Off-road rating", vaerdi: "119" }
    ]
  },
  {
    navn: "Übermacht Booty FCR 1000",
    billede: "billeder/biler/booty-fcr-1000.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Übermacht" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "681" },
      { navn: "Off-road rating", vaerdi: "119" }
    ]
  },
  {
    navn: "Übermacht FCR 1000",
    billede: "billeder/biler/fcr-1000.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Übermacht" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "BMW R100" },
      { navn: "Road rating", vaerdi: "673" },
      { navn: "Off-road rating", vaerdi: "210" }
    ]
  },
  {
    navn: "Principe Esskey",
    billede: "billeder/biler/esskey.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Principe" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Ducati Scrambler" },
      { navn: "Road rating", vaerdi: "649" },
      { navn: "Off-road rating", vaerdi: "188" }
    ]
  },
  {
    navn: "Maibatsu Pacific Manchez",
    billede: "billeder/biler/pacific-manchez.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "616" },
      { navn: "Off-road rating", vaerdi: "134" }
    ]
  },
  {
    navn: "Western DriveShaft Sovereign",
    billede: "billeder/biler/driveshaft-sovereign.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "615" },
      { navn: "Off-road rating", vaerdi: "202" }
    ]
  },
  {
    navn: "Principe Thicc Esskey",
    billede: "billeder/biler/thicc-esskey.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Principe" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "614" },
      { navn: "Off-road rating", vaerdi: "745" }
    ]
  },
  {
    navn: "Western Blood Fever Sovereign",
    billede: "billeder/biler/blood-fever-sovereign.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "611" },
      { navn: "Off-road rating", vaerdi: "199" }
    ]
  },
  {
    navn: "Maibatsu Pharaoh Sanchez",
    billede: "billeder/biler/pharaoh-sanchez.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "603" },
      { navn: "Off-road rating", vaerdi: "129" }
    ]
  },
  {
    navn: "Maibatsu Royal Sanchez",
    billede: "billeder/biler/royal-sanchez.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "603" },
      { navn: "Off-road rating", vaerdi: "129" }
    ]
  },
  {
    navn: "Western Emerald Zombie Bobber",
    billede: "billeder/biler/emerald-zombie-bobber.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "599" },
      { navn: "Off-road rating", vaerdi: "211" }
    ]
  },
  {
    navn: "Western Malibu Zombie Bobber",
    billede: "billeder/biler/malibu-zombie-bobber.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "598" },
      { navn: "Off-road rating", vaerdi: "214" }
    ]
  },
  {
    navn: "Western Searing Zombie Bobber",
    billede: "billeder/biler/searing-zombie-bobber.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "590" },
      { navn: "Off-road rating", vaerdi: "213" }
    ]
  },
  {
    navn: "Western Oxygen Zombie Bobber",
    billede: "billeder/biler/oxygen-zombie-bobber.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "585" },
      { navn: "Off-road rating", vaerdi: "207" }
    ]
  },
  {
    navn: "Maibatsu AudaCity Sanchez",
    billede: "billeder/biler/audacity-sanchez.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "581" },
      { navn: "Off-road rating", vaerdi: "774" }
    ]
  },
  {
    navn: "Western Cultist Nightblade",
    billede: "billeder/biler/cultist-nightblade.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "579" },
      { navn: "Off-road rating", vaerdi: "108" }
    ]
  },
  {
    navn: "Western Sandblasted Cliffhanger",
    billede: "billeder/biler/sandblasted-cliffhanger.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "574" },
      { navn: "Off-road rating", vaerdi: "744" }
    ]
  },
  {
    navn: "Western Peacock Sovereign",
    billede: "billeder/biler/peacock-sovereign.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "573" },
      { navn: "Off-road rating", vaerdi: "186" }
    ]
  },
  {
    navn: "Western Obsidian Sovereign",
    billede: "billeder/biler/obsidian-sovereign.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "571" },
      { navn: "Off-road rating", vaerdi: "186" }
    ]
  },
  {
    navn: "Western Sovereign 107",
    billede: "billeder/biler/sovereign.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Harley Davidson Road King" },
      { navn: "Road rating", vaerdi: "568" },
      { navn: "Off-road rating", vaerdi: "183" }
    ]
  },
  {
    navn: "Western Nightblade",
    billede: "billeder/biler/nightblade.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Harley Davidson Night Rod Special / Harley Davidson Dyna Street Bob" },
      { navn: "Road rating", vaerdi: "560" },
      { navn: "Off-road rating", vaerdi: "176" }
    ]
  },
  {
    navn: "Western Magma Cliffhanger",
    billede: "billeder/biler/magma-cliffhanger.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "556" },
      { navn: "Off-road rating", vaerdi: "728" }
    ]
  },
  {
    navn: "Western Cliffhanger '72",
    billede: "billeder/biler/cliffhanger.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Harley Davidson XR-750" },
      { navn: "Road rating", vaerdi: "554" },
      { navn: "Off-road rating", vaerdi: "726" }
    ]
  },
  {
    navn: "Maibatsu Jackals Sanchez",
    billede: "billeder/biler/jackals-sanchez.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "553" },
      { navn: "Off-road rating", vaerdi: "747" }
    ]
  },
  {
    navn: "Maibatsu Memorial Sanchez",
    billede: "billeder/biler/memorial-sanchez.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "548" },
      { navn: "Off-road rating", vaerdi: "739" }
    ]
  },
  {
    navn: "Western Dirt Rocket Zombie Bobber",
    billede: "billeder/biler/dirt-rocket-zombie-bobber.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "534" },
      { navn: "Off-road rating", vaerdi: "702" }
    ]
  },
  {
    navn: "Western Zombie Bobber",
    billede: "billeder/biler/zombie-chopper.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Bobber variant of Harley Davidson Fat Bob Custom, Iron 883" },
      { navn: "Road rating", vaerdi: "526" },
      { navn: "Off-road rating", vaerdi: "164" }
    ]
  },
  {
    navn: "Maibatsu Sanchez",
    billede: "billeder/biler/sanchez.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "2006-2009 Yamaha YZ450F, 2007 Kawasaki KX450F, Honda CRF450X" },
      { navn: "Road rating", vaerdi: "524" },
      { navn: "Off-road rating", vaerdi: "715" }
    ]
  },
  {
    navn: "Maibatsu Highwayman Sanchez",
    billede: "billeder/biler/highwayman-sanchez.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "524" },
      { navn: "Off-road rating", vaerdi: "715" }
    ]
  },
  {
    navn: "Maibatsu Berserker Sanchez",
    billede: "billeder/biler/berserker-sanchez.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "524" },
      { navn: "Off-road rating", vaerdi: "715" }
    ]
  },
  {
    navn: "Maibatsu Sunset Sanchez",
    billede: "billeder/biler/sunset-sanchez.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "523" },
      { navn: "Off-road rating", vaerdi: "728" }
    ]
  },
  {
    navn: "Maibatsu Manchez",
    billede: "billeder/biler/manchez.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "500cc KTM" },
      { navn: "Road rating", vaerdi: "521" },
      { navn: "Off-road rating", vaerdi: "712" }
    ]
  },
  {
    navn: "Maibatsu MyWays Manchez",
    billede: "billeder/biler/myways-manchez.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "521" },
      { navn: "Off-road rating", vaerdi: "712" }
    ]
  },
  {
    navn: "Dinka Enduro '72",
    billede: "billeder/biler/enduro.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Dinka" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Honda XL350, XR500 & CB Series" },
      { navn: "Road rating", vaerdi: "519" },
      { navn: "Off-road rating", vaerdi: "706" }
    ]
  },
  {
    navn: "Dinka Flipside Enduro",
    billede: "billeder/biler/flipside-enduro.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Dinka" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "519" },
      { navn: "Off-road rating", vaerdi: "706" }
    ]
  },
  {
    navn: "LCC Monarch Avarus",
    billede: "billeder/biler/monarch-avarus.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "LCC" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "511" },
      { navn: "Off-road rating", vaerdi: "169" }
    ]
  },
  {
    navn: "LCC Hellraiser Avarus",
    billede: "billeder/biler/hellraiser-avarus.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "LCC" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "509" },
      { navn: "Off-road rating", vaerdi: "175" }
    ]
  },
  {
    navn: "LCC Avarus",
    billede: "billeder/biler/avarus.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "LCC" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Generica mostly-naked chopper" },
      { navn: "Road rating", vaerdi: "457" },
      { navn: "Off-road rating", vaerdi: "146" }
    ]
  },
  {
    navn: "LCC Final Chapter Avarus",
    billede: "billeder/biler/final-chapter-avarus.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "LCC" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "457" },
      { navn: "Off-road rating", vaerdi: "146" }
    ]
  },
  {
    navn: "LCC Midnight Sun Avarus",
    billede: "billeder/biler/midnight-sun-avarus.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "LCC" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "457" },
      { navn: "Off-road rating", vaerdi: "146" }
    ]
  },
  {
    navn: "Dinka Donk Verus",
    billede: "billeder/biler/donk-verus.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Dinka" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "428" },
      { navn: "Off-road rating", vaerdi: "286" }
    ]
  },
  {
    navn: "Nagasaki Chrome Street Blazer",
    billede: "billeder/biler/chrome-street-blazer.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Nagasaki" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "417" },
      { navn: "Off-road rating", vaerdi: "665" }
    ]
  },
  {
    navn: "Nagasaki Azalea Street Blazer",
    billede: "billeder/biler/azalea-street-blazer.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Nagasaki" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "417" },
      { navn: "Off-road rating", vaerdi: "660" }
    ]
  },
  {
    navn: "Nagasaki Street Blazer",
    billede: "billeder/biler/blazer.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Nagasaki" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Yamaha YFZ450" },
      { navn: "Road rating", vaerdi: "414" },
      { navn: "Off-road rating", vaerdi: "663" }
    ]
  },
  {
    navn: "Nagasaki Tormentor Street Blazer",
    billede: "billeder/biler/tormentor-street-blazer.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Nagasaki" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "414" },
      { navn: "Off-road rating", vaerdi: "663" }
    ]
  },
  {
    navn: "Dinka Verus",
    billede: "billeder/biler/verus.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Dinka" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Polaris Sportsman MV850 and 570" },
      { navn: "Road rating", vaerdi: "379" },
      { navn: "Off-road rating", vaerdi: "620" }
    ]
  },
  {
    navn: "Taci Ragno",
    billede: "billeder/biler/faggio.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Taci" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Piaggio Vespa LX and Primavera" },
      { navn: "Road rating", vaerdi: "344" },
      { navn: "Off-road rating", vaerdi: "84" }
    ]
  },
  {
    navn: "Nagasaki Nimbe",
    billede: "billeder/biler/yamaha-bws-125.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Nagasaki" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Yamaha BWs 125" },
      { navn: "Road rating", vaerdi: "338" },
      { navn: "Off-road rating", vaerdi: "81" }
    ]
  },
  {
    navn: "Bravado Aphid",
    billede: "billeder/biler/aphid.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "308" },
      { navn: "Off-road rating", vaerdi: "530" }
    ]
  },
  {
    navn: "Shift-E Fan-E",
    billede: "billeder/biler/electric-scooter.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Shift-E" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "BIRD One rental e-scooter" },
      { navn: "Road rating", vaerdi: "69" },
      { navn: "Off-road rating", vaerdi: "57" }
    ]
  },
  {
    navn: "Maibatsu Speedy Boomazoom",
    billede: "billeder/biler/speedy-boomazoom.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "42" },
      { navn: "Off-road rating", vaerdi: "90" }
    ]
  },
  {
    navn: "Maibatsu Nugget Boomazoom",
    billede: "billeder/biler/nugget-boomazoom.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "19" },
      { navn: "Off-road rating", vaerdi: "20" }
    ]
  },
  {
    navn: "Maibatsu Seashell Boomazoom",
    billede: "billeder/biler/seashell-boomazoom.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "19" },
      { navn: "Off-road rating", vaerdi: "20" }
    ]
  },
  {
    navn: "Maibatsu Independence Boomazoom",
    billede: "billeder/biler/independence-boomazoom.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "19" },
      { navn: "Off-road rating", vaerdi: "20" }
    ]
  },
  {
    navn: "Maibatsu Donk Boomazoom",
    billede: "billeder/biler/donk-boomazoom.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "19" },
      { navn: "Off-road rating", vaerdi: "20" }
    ]
  },
  {
    navn: "Maibatsu Yesteryear Boomazoom",
    billede: "billeder/biler/yesteryear-boomazoom.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "19" },
      { navn: "Off-road rating", vaerdi: "20" }
    ]
  },
  {
    navn: "Maibatsu Boomazoom",
    billede: "billeder/biler/mobility-scooter-pride-maxima-3.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Pride Maxima 3 Mobility Scooter" },
      { navn: "Road rating", vaerdi: "17" },
      { navn: "Off-road rating", vaerdi: "31" }
    ]
  },
  {
    navn: "Maibatsu Spec Ops Boomazoom",
    billede: "billeder/biler/spec-ops-boomazoom.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "17" },
      { navn: "Off-road rating", vaerdi: "31" }
    ]
  },
  {
    navn: "Maibatsu Lowrider Boomazoom",
    billede: "billeder/biler/lowrider-boomazoom.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Road rating", vaerdi: "17" },
      { navn: "Off-road rating", vaerdi: "31" }
    ]
  },
  {
    navn: "Western Sovereign 107 Police",
    billede: "billeder/biler/sovereign-107.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Western" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Harley-Davidson Road King FLHP" }
    ]
  },
  {
    navn: "Lombike",
    billede: "billeder/biler/lombike.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "CitiBike Miami E-Bikes" }
    ]
  },
  {
    navn: "Del Perro Erode",
    billede: "billeder/biler/erode.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Del Perro" },
      { navn: "Type", vaerdi: "Motorcycle" },
      { navn: "Based on", vaerdi: "Crestline RS 75/50 EEB" }
    ]
  },
  {
    navn: "Walter Crusher",
    billede: "billeder/biler/crusher.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Walter" },
      { navn: "Type", vaerdi: "Motorcycle" }
    ]
  },
  {
    navn: "Del Perro Glacier Erode",
    billede: "billeder/biler/glacier-erode.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Del Perro" },
      { navn: "Type", vaerdi: "Motorcycle" }
    ]
  },
  {
    navn: "Del Perro Midsummer Erode",
    billede: "billeder/biler/midsummer-erode.jpg",
    tekst: "A motorcycle. Fast, light and great for slipping through traffic.",
    fakta: [
      { navn: "Brand", vaerdi: "Del Perro" },
      { navn: "Type", vaerdi: "Motorcycle" }
    ]
  },
  {
    navn: "Declasse D7700",
    billede: "billeder/biler/chevrolet-kodiak-gmc-topkick.jpg",
    tekst: "A truck used for moving goods.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Truck" },
      { navn: "Based on", vaerdi: "Chevrolet Kodiak/GMC Topkick" },
      { navn: "Road rating", vaerdi: "277" },
      { navn: "Off-road rating", vaerdi: "162" }
    ]
  },
  {
    navn: "Maibatsu Iota",
    billede: "billeder/biler/isuzu-elf-250.jpg",
    tekst: "A truck used for moving goods.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Truck" },
      { navn: "Based on", vaerdi: "Isuzu Elf 250" },
      { navn: "Road rating", vaerdi: "252" },
      { navn: "Off-road rating", vaerdi: "161" }
    ]
  },
  {
    navn: "JoBuilt Rubble",
    billede: "billeder/biler/rubble.jpg",
    tekst: "A truck used for moving goods.",
    fakta: [
      { navn: "Brand", vaerdi: "JoBuilt" },
      { navn: "Type", vaerdi: "Truck" },
      { navn: "Based on", vaerdi: "Peterbilt 359 EXHD" },
      { navn: "Road rating", vaerdi: "250" },
      { navn: "Off-road rating", vaerdi: "145" }
    ]
  },
  {
    navn: "Maibatsu Mule",
    billede: "billeder/biler/mule.jpg",
    tekst: "A truck used for moving goods.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Truck" },
      { navn: "Based on", vaerdi: "Mitsubishi Fuso Canter (7th gen)" },
      { navn: "Road rating", vaerdi: "235" },
      { navn: "Off-road rating", vaerdi: "146" }
    ]
  },
  {
    navn: "Interstate Benson '97",
    billede: "billeder/biler/benson.jpg",
    tekst: "A truck used for moving goods.",
    fakta: [
      { navn: "Brand", vaerdi: "Interstate" },
      { navn: "Type", vaerdi: "Truck" },
      { navn: "Based on", vaerdi: "International 4700 Delivery Truck Chassis" },
      { navn: "Road rating", vaerdi: "228" },
      { navn: "Off-road rating", vaerdi: "128" }
    ]
  },
  {
    navn: "Cartwright Biff",
    billede: "billeder/biler/biff.jpg",
    tekst: "A truck used for moving goods.",
    fakta: [
      { navn: "Brand", vaerdi: "Cartwright" },
      { navn: "Type", vaerdi: "Truck" },
      { navn: "Based on", vaerdi: "Kenworth T800" },
      { navn: "Road rating", vaerdi: "223" },
      { navn: "Off-road rating", vaerdi: "136" }
    ]
  },
  {
    navn: "MTL Packer",
    billede: "billeder/biler/packer.jpg",
    tekst: "A truck used for moving goods.",
    fakta: [
      { navn: "Brand", vaerdi: "MTL" },
      { navn: "Type", vaerdi: "Truck" },
      { navn: "Based on", vaerdi: "1994 International 9000/9200" },
      { navn: "Road rating", vaerdi: "214" },
      { navn: "Off-road rating", vaerdi: "129" }
    ]
  },
  {
    navn: "Cartwright Hauler",
    billede: "billeder/biler/hauler.jpg",
    tekst: "A truck used for moving goods.",
    fakta: [
      { navn: "Brand", vaerdi: "Cartwright" },
      { navn: "Type", vaerdi: "Truck" },
      { navn: "Based on", vaerdi: "Freightliner and Kenworth" },
      { navn: "Road rating", vaerdi: "196" },
      { navn: "Off-road rating", vaerdi: "124" }
    ]
  },
  {
    navn: "JoBuilt Phantom Custom '81",
    billede: "billeder/biler/phantom-custom.jpg",
    tekst: "A truck used for moving goods.",
    fakta: [
      { navn: "Brand", vaerdi: "JoBuilt" },
      { navn: "Type", vaerdi: "Truck" },
      { navn: "Based on", vaerdi: "1984 GMC General with an Aerodynamic Sleeper Cab" },
      { navn: "Road rating", vaerdi: "191" },
      { navn: "Off-road rating", vaerdi: "124" }
    ]
  },
  {
    navn: "JoBuilt Phantom 1776",
    billede: "billeder/biler/1776-phantom.jpg",
    tekst: "A truck used for moving goods.",
    fakta: [
      { navn: "Brand", vaerdi: "JoBuilt" },
      { navn: "Type", vaerdi: "Truck" },
      { navn: "Road rating", vaerdi: "191" },
      { navn: "Off-road rating", vaerdi: "124" }
    ]
  },
  {
    navn: "JoBuilt MB2-10",
    billede: "billeder/biler/mb2-10.jpg",
    tekst: "A truck used for moving goods.",
    fakta: [
      { navn: "Brand", vaerdi: "JoBuilt" },
      { navn: "Type", vaerdi: "Truck" },
      { navn: "Based on", vaerdi: "Freightliner M2" },
      { navn: "Road rating", vaerdi: "187" },
      { navn: "Off-road rating", vaerdi: "111" }
    ]
  },
  {
    navn: "Vapid Guardian TX2",
    billede: "billeder/biler/guardian.jpg",
    tekst: "A truck used for moving goods.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Truck" }
    ]
  },
  {
    navn: "Interstate Yankee '80",
    billede: "billeder/biler/yankee-80.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Brand", vaerdi: "Interstate" },
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Based on", vaerdi: "1980s International Harvester S-Series" },
      { navn: "Road rating", vaerdi: "257" },
      { navn: "Off-road rating", vaerdi: "147" }
    ]
  },
  {
    navn: "Punk Putter Caddy",
    billede: "billeder/biler/punk-putter-caddy.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Road rating", vaerdi: "128" },
      { navn: "Off-road rating", vaerdi: "251" }
    ]
  },
  {
    navn: "Glamor Caddy",
    billede: "billeder/biler/glamor-caddy.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Road rating", vaerdi: "110" },
      { navn: "Off-road rating", vaerdi: "171" }
    ]
  },
  {
    navn: "Pink Champagne Caddy",
    billede: "billeder/biler/pink-champagne-caddy.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Road rating", vaerdi: "110" },
      { navn: "Off-road rating", vaerdi: "171" }
    ]
  },
  {
    navn: "Swampy Sal's Caddy",
    billede: "billeder/biler/swampy-sals-caddy.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Road rating", vaerdi: "110" },
      { navn: "Off-road rating", vaerdi: "171" }
    ]
  },
  {
    navn: "Cellerica Caddy",
    billede: "billeder/biler/cellerica-caddy.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Road rating", vaerdi: "110" },
      { navn: "Off-road rating", vaerdi: "171" }
    ]
  },
  {
    navn: "Donk Caddy",
    billede: "billeder/biler/donk-caddy.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Road rating", vaerdi: "110" },
      { navn: "Off-road rating", vaerdi: "171" }
    ]
  },
  {
    navn: "Lowrider Caddy",
    billede: "billeder/biler/lowrider-caddy.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Road rating", vaerdi: "110" },
      { navn: "Off-road rating", vaerdi: "147" }
    ]
  },
  {
    navn: "Partytime Caddy",
    billede: "billeder/biler/partytime-caddy.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Road rating", vaerdi: "110" },
      { navn: "Off-road rating", vaerdi: "147" }
    ]
  },
  {
    navn: "Tactical Caddy",
    billede: "billeder/biler/tactical-caddy.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Road rating", vaerdi: "108" },
      { navn: "Off-road rating", vaerdi: "222" }
    ]
  },
  {
    navn: "Sweet Land Caddy",
    billede: "billeder/biler/sweet-land-caddy.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Road rating", vaerdi: "108" },
      { navn: "Off-road rating", vaerdi: "222" }
    ]
  },
  {
    navn: "Maibatsu Caddy '82",
    billede: "billeder/biler/caddy-82.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Road rating", vaerdi: "107" },
      { navn: "Off-road rating", vaerdi: "133" }
    ]
  },
  {
    navn: "Maibatsu Celebration Caddy",
    billede: "billeder/biler/celebration-caddy.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Road rating", vaerdi: "107" },
      { navn: "Off-road rating", vaerdi: "133" }
    ]
  },
  {
    navn: "Camo Caddy",
    billede: "billeder/biler/camo-caddy.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Road rating", vaerdi: "105" },
      { navn: "Off-road rating", vaerdi: "232" }
    ]
  },
  {
    navn: "HVY TH42 Telehandler",
    billede: "billeder/biler/th42-telehandler.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Brand", vaerdi: "HVY" },
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Road rating", vaerdi: "75" },
      { navn: "Off-road rating", vaerdi: "107" }
    ]
  },
  {
    navn: "HVY Airtug",
    billede: "billeder/biler/airtug.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Brand", vaerdi: "HVY" },
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Based on", vaerdi: "Clark CT30" },
      { navn: "Road rating", vaerdi: "38" },
      { navn: "Off-road rating", vaerdi: "83" }
    ]
  },
  {
    navn: "HVY Lifta",
    billede: "billeder/biler/forklift.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Brand", vaerdi: "HVY" },
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Based on", vaerdi: "Yale Forklift truck model (Yale GLP060VX)" },
      { navn: "Road rating", vaerdi: "21" },
      { navn: "Off-road rating", vaerdi: "40" }
    ]
  },
  {
    navn: "Vapid Tow Truck",
    billede: "billeder/biler/tow-truck.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Based on", vaerdi: "1980s International Harvester S-Series" }
    ]
  },
  {
    navn: "Vapid Golfer '32",
    billede: "billeder/biler/golfer.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Utility" }
    ]
  },
  {
    navn: "Brute Ripley",
    billede: "billeder/biler/ripley.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Brand", vaerdi: "Brute" },
      { navn: "Type", vaerdi: "Utility" },
      { navn: "Based on", vaerdi: "SCHOPF F300" }
    ]
  },
  {
    navn: "Brute Taco Van",
    billede: "billeder/biler/taco-van.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Brand", vaerdi: "Brute" },
      { navn: "Type", vaerdi: "Utility" }
    ]
  },
  {
    navn: "Maibatsu Caddy",
    billede: "billeder/biler/caddy.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Brand", vaerdi: "Maibatsu" },
      { navn: "Type", vaerdi: "Utility" }
    ]
  },
  {
    navn: "Vapid Brimstone Golfer",
    billede: "billeder/biler/brimstone-golfer.jpg",
    tekst: "A work vehicle built for a special job.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Utility" }
    ]
  },
  {
    navn: "Stanley Furrow TC 2350",
    billede: "billeder/biler/furrow-tc-2350.jpg",
    tekst: "Heavy machinery for farms and building sites.",
    fakta: [
      { navn: "Brand", vaerdi: "Stanley" },
      { navn: "Type", vaerdi: "Industrial" },
      { navn: "Road rating", vaerdi: "75" },
      { navn: "Off-road rating", vaerdi: "166" }
    ]
  },
  {
    navn: "Jacksheepe Fieldmaster '99",
    billede: "billeder/biler/fieldmaster.jpg",
    tekst: "Heavy machinery for farms and building sites.",
    fakta: [
      { navn: "Brand", vaerdi: "Jacksheepe" },
      { navn: "Type", vaerdi: "Industrial" },
      { navn: "Based on", vaerdi: "John Deere 7810" },
      { navn: "Road rating", vaerdi: "71" },
      { navn: "Off-road rating", vaerdi: "152" }
    ]
  },
  {
    navn: "HVY Bulldozer",
    billede: "billeder/biler/dozer.jpg",
    tekst: "Heavy machinery for farms and building sites.",
    fakta: [
      { navn: "Brand", vaerdi: "HVY" },
      { navn: "Type", vaerdi: "Industrial" },
      { navn: "Based on", vaerdi: "Caterpillar 963D" },
      { navn: "Road rating", vaerdi: "28" },
      { navn: "Off-road rating", vaerdi: "59" }
    ]
  },
  {
    navn: "MTL CR5013",
    billede: "billeder/biler/cr5013.jpg",
    tekst: "Heavy machinery for farms and building sites.",
    fakta: [
      { navn: "Brand", vaerdi: "MTL" },
      { navn: "Type", vaerdi: "Industrial" },
      { navn: "Road rating", vaerdi: "24" },
      { navn: "Off-road rating", vaerdi: "41" }
    ]
  },
  {
    navn: "Dinka B3000 Excavator",
    billede: "billeder/biler/excavator.jpg",
    tekst: "Heavy machinery for farms and building sites.",
    fakta: [
      { navn: "Brand", vaerdi: "Dinka" },
      { navn: "Type", vaerdi: "Industrial" },
      { navn: "Based on", vaerdi: "Liebherr R954B HD-S and Samsung SE280LC-2" }
    ]
  },
  {
    navn: "MTL Dump",
    billede: "billeder/biler/dump.jpg",
    tekst: "Heavy machinery for farms and building sites.",
    fakta: [
      { navn: "Brand", vaerdi: "MTL" },
      { navn: "Type", vaerdi: "Industrial" },
      { navn: "Based on", vaerdi: "CAT 789C" }
    ]
  },
  {
    navn: "Brute Rental Bus",
    billede: "billeder/biler/rental-shuttle-bus.jpg",
    tekst: "Used to drive people around the city.",
    fakta: [
      { navn: "Brand", vaerdi: "Brute" },
      { navn: "Type", vaerdi: "Service" },
      { navn: "Based on", vaerdi: "1996-2002 Chevrolet Express" },
      { navn: "Road rating", vaerdi: "266" },
      { navn: "Off-road rating", vaerdi: "156" }
    ]
  },
  {
    navn: "Whiffler Bus",
    billede: "billeder/biler/bus.jpg",
    tekst: "Used to drive people around the city.",
    fakta: [
      { navn: "Brand", vaerdi: "Whiffler" },
      { navn: "Type", vaerdi: "Service" },
      { navn: "Based on", vaerdi: "New Flyer Xcelsior" },
      { navn: "Road rating", vaerdi: "190" },
      { navn: "Off-road rating", vaerdi: "119" }
    ]
  },
  {
    navn: "Whiffler Airport Bus",
    billede: "billeder/biler/airport-bus.jpg",
    tekst: "Used to drive people around the city.",
    fakta: [
      { navn: "Brand", vaerdi: "Whiffler" },
      { navn: "Type", vaerdi: "Service" },
      { navn: "Road rating", vaerdi: "188" },
      { navn: "Off-road rating", vaerdi: "122" }
    ]
  },
  {
    navn: "Whiffler Dashound",
    billede: "billeder/biler/dashound.jpg",
    tekst: "Used to drive people around the city.",
    fakta: [
      { navn: "Brand", vaerdi: "Whiffler" },
      { navn: "Type", vaerdi: "Service" },
      { navn: "Based on", vaerdi: "MCI Renaissance E series bus, Greyhound Lines" },
      { navn: "Road rating", vaerdi: "181" },
      { navn: "Off-road rating", vaerdi: "120" }
    ]
  },
  {
    navn: "Vapid Stanier G2 Taxi",
    billede: "billeder/biler/taxi.jpg",
    tekst: "Used to drive people around the city.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Service" },
      { navn: "Based on", vaerdi: "Ford Crown Victoria" }
    ]
  },
  {
    navn: "Bravado Sojourn Taxi",
    billede: "billeder/biler/chrysler-town-country-taxi.avif",
    tekst: "Used to drive people around the city.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Service" },
      { navn: "Based on", vaerdi: "Chrysler minivan (2011-2020 Dodge Grand Caravan and 2011–2016 Chrysler Town & Country)" }
    ]
  },
  {
    navn: "Hulls Sea Cab",
    billede: "billeder/biler/water-taxi.jpg",
    tekst: "Used to drive people around the city.",
    fakta: [
      { navn: "Brand", vaerdi: "Hulls" },
      { navn: "Type", vaerdi: "Service" }
    ]
  },
  {
    navn: "Declasse Granger Taxi",
    billede: "billeder/biler/granger-taxi.jpg",
    tekst: "Used to drive people around the city.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Service" },
      { navn: "Based on", vaerdi: "Chevrolet Suburban" }
    ]
  },
  {
    navn: "Karin Allander Taxi",
    tekst: "Used to drive people around the city.",
    fakta: [
      { navn: "Brand", vaerdi: "Karin" },
      { navn: "Type", vaerdi: "Service" },
      { navn: "Based on", vaerdi: "Toyota RAV4 (5th Gen)" }
    ]
  },
  {
    navn: "Karin Vivanite Taxi",
    tekst: "Used to drive people around the city.",
    fakta: [
      { navn: "Brand", vaerdi: "Karin" },
      { navn: "Type", vaerdi: "Service" },
      { navn: "Based on", vaerdi: "Fourth generation Toyota Sienna (XL40)" }
    ]
  },
  {
    navn: "Declasse Ambulance '90s",
    billede: "billeder/biler/ambulance-90s.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Road rating", vaerdi: "287" },
      { navn: "Off-road rating", vaerdi: "158" }
    ]
  },
  {
    navn: "Interstate Ambulance",
    billede: "billeder/biler/ambulance.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Interstate" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "Chevrolet Express 3500 cab-chassis" },
      { navn: "Road rating", vaerdi: "276" },
      { navn: "Off-road rating", vaerdi: "144" }
    ]
  },
  {
    navn: "Interstate Stockade '99",
    billede: "billeder/biler/stockade.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Interstate" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "International 4700 Series" },
      { navn: "Road rating", vaerdi: "223" },
      { navn: "Off-road rating", vaerdi: "120" }
    ]
  },
  {
    navn: "MTL Pumper",
    billede: "billeder/biler/fire-truck.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "MTL" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "2012 Pierce Arrow XT Rescue Pumper" },
      { navn: "Road rating", vaerdi: "212" },
      { navn: "Off-road rating", vaerdi: "143" }
    ]
  },
  {
    navn: "Hauners Brigade",
    billede: "billeder/biler/brigade.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Hauners" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Road rating", vaerdi: "155" },
      { navn: "Off-road rating", vaerdi: "338" }
    ]
  },
  {
    navn: "Vapid Lowline Police",
    billede: "billeder/biler/police-cruiser-interceptor.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "Ford Police Interceptor Sedan (2013–2019), based on the Ford Taurus" }
    ]
  },
  {
    navn: "Vapid Stanier G2 Police Cruiser",
    billede: "billeder/biler/police-cruiser.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "Ford Crown Victoria" }
    ]
  },
  {
    navn: "Bravado Buffalo Police Cruiser",
    billede: "billeder/biler/police-cruiser-buffalo.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "Dodge Charger" }
    ]
  },
  {
    navn: "Bravado Buffalo Pursuit '19",
    billede: "billeder/biler/police-cruiser-buffalo-stx.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "2015 Dodge Charger" }
    ]
  },
  {
    navn: "Bravado Gauntlet Interceptor",
    billede: "billeder/biler/police-cruiser-gauntlet-hellfire.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "2018 Dodge Challenger SRT Demon" }
    ]
  },
  {
    navn: "Brute Police Riot",
    billede: "billeder/biler/police-riot.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Brute" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "Lenco BEAR" }
    ]
  },
  {
    navn: "Bravado Bison 1800 Police",
    billede: "billeder/biler/bison-1800-police.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "Ram 1500 (DT)" }
    ]
  },
  {
    navn: "Vapid Police Ghost (Stanier LE)",
    billede: "billeder/biler/police-ghost-stanier-le.png",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "Ford Crown Victoria" }
    ]
  },
  {
    navn: "Dingus Garda",
    billede: "billeder/biler/rb-s.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Dingus" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "RB-S and RB-S II" }
    ]
  },
  {
    navn: "Vapid Montagne Pickup (Lifeguard)",
    billede: "billeder/biler/ford-explorer-sport-trac-lifeguard.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "Ford Explorer Sport Trac" }
    ]
  },
  {
    navn: "Vapid Montagne Police",
    billede: "billeder/biler/ford-explorer-suv-police.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Vapid" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "Ford Explorer (6th Gen)" }
    ]
  },
  {
    navn: "Dundreary Landstalker XL Police",
    billede: "billeder/biler/police-landstalker-xl.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Dundreary" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "Fourth generation Lincoln Navigator" }
    ]
  },
  {
    navn: "Declasse Granger Police",
    billede: "billeder/biler/granger-police.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Declasse" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "Chevrolet Suburban" }
    ]
  },
  {
    navn: "Rugger Rhode Police",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Rugger" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "Contender 39ST" }
    ]
  },
  {
    navn: "Dinka Verus Lifeguard",
    billede: "billeder/biler/verus-lifeguard.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Dinka" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "Polaris Sportsman MV850 and 570" }
    ]
  },
  {
    navn: "Decker Crake Police",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Decker" },
      { navn: "Type", vaerdi: "Emergency" }
    ]
  },
  {
    navn: "Airgator Airboat 09 Police",
    billede: "billeder/biler/airboat-police.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Airgator" },
      { navn: "Type", vaerdi: "Emergency" }
    ]
  },
  {
    navn: "Invetero Coquette D10 Pursuit",
    billede: "billeder/biler/coquette-d10-pursuit.jpg",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Invetero" },
      { navn: "Type", vaerdi: "Emergency" },
      { navn: "Based on", vaerdi: "Chevrolet Corvette C8" }
    ]
  },
  {
    navn: "Bravado Bison 900 Police '95",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Bravado" },
      { navn: "Type", vaerdi: "Emergency" }
    ]
  },
  {
    navn: "Interstate Stockade Police '99",
    tekst: "An emergency vehicle for police, ambulance or fire crews.",
    fakta: [
      { navn: "Brand", vaerdi: "Interstate" },
      { navn: "Type", vaerdi: "Emergency" }
    ]
  },
  {
    navn: "Mammoth Patriot '92",
    billede: "billeder/biler/patriot-mil-spec.jpg",
    tekst: "A military vehicle, heavy and tough.",
    fakta: [
      { navn: "Brand", vaerdi: "Mammoth" },
      { navn: "Type", vaerdi: "Military" },
      { navn: "Based on", vaerdi: "Hummer H1 SUV" },
      { navn: "Road rating", vaerdi: "237" },
      { navn: "Off-road rating", vaerdi: "452" }
    ]
  },
  {
    navn: "Hauners APC",
    billede: "billeder/biler/apc.jpg",
    tekst: "A military vehicle, heavy and tough.",
    fakta: [
      { navn: "Brand", vaerdi: "Hauners" },
      { navn: "Type", vaerdi: "Military" },
      { navn: "Road rating", vaerdi: "159" },
      { navn: "Off-road rating", vaerdi: "316" }
    ]
  },
  {
    navn: "Hauners Rhino Tank",
    billede: "billeder/biler/rhino-tank.jpg",
    tekst: "A military vehicle, heavy and tough.",
    fakta: [
      { navn: "Brand", vaerdi: "Hauners" },
      { navn: "Type", vaerdi: "Military" },
      { navn: "Based on", vaerdi: "M1 Abrams and Leopard 2A5" },
      { navn: "Road rating", vaerdi: "65" },
      { navn: "Off-road rating", vaerdi: "132" }
    ]
  },
  {
    navn: "Bottcher Buzzard",
    billede: "billeder/biler/buzzard-attack-chopper.jpg",
    tekst: "A military vehicle, heavy and tough.",
    fakta: [
      { navn: "Brand", vaerdi: "Bottcher" },
      { navn: "Type", vaerdi: "Military" },
      { navn: "Based on", vaerdi: "MD Helicopters AH-6 Little Bird" }
    ]
  },
  {
    navn: "Buckingham Valkyrie",
    billede: "billeder/biler/valkyrie.jpg",
    tekst: "A military vehicle, heavy and tough.",
    fakta: [
      { navn: "Brand", vaerdi: "Buckingham" },
      { navn: "Type", vaerdi: "Military" },
      { navn: "Based on", vaerdi: "Bell UH-1Y Venom/UH-1 Iroquois Huey/212/412, Fenestron" }
    ]
  },
  {
    navn: "Buckingham Cargobob",
    billede: "billeder/biler/dh-7-iron-mule.jpg",
    tekst: "A military vehicle, heavy and tough.",
    fakta: [
      { navn: "Brand", vaerdi: "Buckingham" },
      { navn: "Type", vaerdi: "Military" },
      { navn: "Based on", vaerdi: "Sikorsky CH-53K King Stallion" }
    ]
  },
  {
    navn: "Hauners P-996 Lazer",
    billede: "billeder/biler/p-996-lazer.jpg",
    tekst: "A military vehicle, heavy and tough.",
    fakta: [
      { navn: "Brand", vaerdi: "Hauners" },
      { navn: "Type", vaerdi: "Military" },
      { navn: "Based on", vaerdi: "F-16 Fighting Falcon" }
    ]
  },
  {
    navn: "Hauners Ridgway",
    billede: "billeder/biler/ridgway.jpg",
    tekst: "A military vehicle, heavy and tough.",
    fakta: [
      { navn: "Brand", vaerdi: "Hauners" },
      { navn: "Type", vaerdi: "Military" }
    ]
  }
];
