// Karakterer i GTA 6. Teksten på siden er på engelsk.
// De vigtigste står først. Fakta er fra fan-siden GTABase (november 2026).
// Vil du tilføje en karakter? Kopier en af dem herunder (fra { til },)
// og ret teksten. Husk kommaet efter }.
// Skriv (unsure) ved fakta, du ikke er sikker på.

const karakterer = [
  {
    navn: "Jason Duval",
    billede: "billeder/karakterer/jason-duval.jpg",
    tekst: "One of the two main characters. He grew up around con artists, served in the Army, and then started working for drug runners in the Leonida Keys.",
    fakta: [
      { navn: "Role", vaerdi: "Main character" },
      { navn: "Partner", vaerdi: "Lucia Caminos" },
      { navn: "Home", vaerdi: "Leonida Keys" }
    ]
  },
  {
    navn: "Lucia Caminos",
    billede: "billeder/karakterer/lucia-caminos.jpg",
    tekst: "The other main character. Her father taught her to fight, and the story begins when she gets out of Leonida Penitentiary.",
    fakta: [
      { navn: "Role", vaerdi: "Main character" },
      { navn: "Partner", vaerdi: "Jason Duval" },
      { navn: "Family", vaerdi: "Her mother Mia lives in Vice City" }
    ]
  },
  {
    navn: "Cal Hampton",
    billede: "billeder/karakterer/cal-hampton.jpg",
    tekst: "Jason's friend. He likes staying at home and listening in on the Coast Guard's radio.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Friend of", vaerdi: "Jason" },
      { navn: "Works with", vaerdi: "Brian Heder" }
    ]
  },
  {
    navn: "Boobie Ike",
    billede: "billeder/karakterer/boobie-ike.jpg",
    tekst: "A legend in Vice City who has built his own business empire.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Owns", vaerdi: "Real estate, a strip club and a recording studio" },
      { navn: "City", vaerdi: "Vice City" }
    ]
  },
  {
    navn: "Dre'Quan Priest",
    billede: "billeder/karakterer/dre-quan-priest.jpg",
    tekst: "He used to hustle on the streets and now wants to make it in the music business.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Label", vaerdi: "Only Raw Records" },
      { navn: "City", vaerdi: "Vice City" }
    ]
  },
  {
    navn: "Bae-Luxe",
    billede: "billeder/karakterer/bae-luxe.jpg",
    tekst: "One half of the rap duo Real Dimez. She and Roxy have been best friends since high school.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Group", vaerdi: "Real Dimez" },
      { navn: "Label", vaerdi: "Only Raw Records" }
    ]
  },
  {
    navn: "Roxy",
    billede: "billeder/karakterer/roxy.jpg",
    tekst: "The other half of Real Dimez. The duo got their first hit together with the rapper DWNPLY.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Group", vaerdi: "Real Dimez" },
      { navn: "Label", vaerdi: "Only Raw Records" }
    ]
  },
  {
    navn: "Raul Bautista",
    billede: "billeder/karakterer/raul-bautista.jpg",
    tekst: "An experienced bank robber who is putting a crew together for a big job.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Big job", vaerdi: "Sinfrontera National Bank" },
      { navn: "Crew", vaerdi: "Andrea, Felipe and Karim" }
    ]
  },
  {
    navn: "Brian Heder",
    billede: "billeder/karakterer/brian-heder.jpg",
    tekst: "An old-school smuggler from the Keys who runs a boat yard.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Home", vaerdi: "Leonida Keys" },
      { navn: "Wife", vaerdi: "Lori Heder" }
    ]
  },
  {
    navn: "Lori Heder",
    billede: "billeder/karakterer/lori-heder.jpg",
    tekst: "Brian's wife. She works at the boat yard with him.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Husband", vaerdi: "Brian Heder" },
      { navn: "Works at", vaerdi: "The boat yard in the Keys" }
    ]
  },
  {
    navn: "Mia Caminos",
    billede: "billeder/karakterer/mia-caminos.jpg",
    tekst: "Lucia's mother. She has opened her own business in Vice City.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Daughter", vaerdi: "Lucia Caminos" },
      { navn: "City", vaerdi: "Vice City" }
    ]
  },
  {
    navn: "Valentina",
    billede: "billeder/karakterer/valentina.jpg",
    tekst: "Hires Jason and Lucia to escort an important man to the Megamundo Building.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Connected to", vaerdi: "Megamundo" }
    ]
  },
  {
    navn: "Andrés de León",
    billede: "billeder/karakterer/andres-de-leon.jpg",
    tekst: "A rich man connected to Megamundo. He goes to the opening of Megamundo's first building.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Connected to", vaerdi: "Megamundo" },
      { navn: "Son", vaerdi: "Rafa" }
    ]
  },
  {
    navn: "Petra Navarro",
    billede: "billeder/karakterer/petra-navarro.jpg",
    tekst: "The second-in-command at Megamundo. Jason and Lucia meet her through Valentina.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Job", vaerdi: "Chief Operating Officer at Megamundo" }
    ]
  },
  {
    navn: "Abe Gonzalez",
    billede: "billeder/karakterer/abe-gonzalez.jpg",
    tekst: "A lawyer in Vice City.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Company", vaerdi: "Lucretia Law Group" },
      { navn: "City", vaerdi: "Vice City" }
    ]
  },
  {
    navn: "Kordell Grant",
    billede: "billeder/karakterer/kordell-grant.jpg",
    tekst: "A bodybuilder who runs his own crew.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Hangout", vaerdi: "Ajax Gym in Vice City" },
      { navn: "Crew", vaerdi: "Nate and Cisco" }
    ]
  },
  {
    navn: "Giorgio Gallo",
    billede: "billeder/karakterer/giorgio-gallo.jpg",
    tekst: "A powerful shipping boss in Vice City.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Job", vaerdi: "Shipping" },
      { navn: "Works with", vaerdi: "Mattia Tauro and Vinny Capsik" }
    ]
  },
  {
    navn: "Mattia Tauro",
    billede: "billeder/karakterer/mattia-tauro.jpg",
    tekst: "A rich man who works for Giorgio Gallo.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Boss", vaerdi: "Giorgio Gallo" },
      { navn: "Girlfriend", vaerdi: "Kat Rosselli" }
    ]
  },
  {
    navn: "Kat Rosselli",
    billede: "billeder/karakterer/kat-rosselli.jpg",
    tekst: "Lucia's old cellmate from prison.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Full name", vaerdi: "Katerina Rosselli" },
      { navn: "Boyfriend", vaerdi: "Mattia Tauro" }
    ]
  },
  {
    navn: "Shayna",
    billede: "billeder/karakterer/shayna.jpg",
    tekst: "An old friend of Lucia's from prison. She texts Lucia when Lucia gets out.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Friend of", vaerdi: "Lucia" }
    ]
  },
  {
    navn: "Yasmani",
    billede: "billeder/karakterer/yasmani.jpg",
    tekst: "Gives you robbery jobs, for example robbing jewelry stores.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "From", vaerdi: "Chapter 3" }
    ]
  },
  {
    navn: "Yvonne",
    tekst: "Also called Mother Dodo. She leads an animal rights group that organizes protests.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Group", vaerdi: "Dodos Rising" }
    ]
  },
  {
    navn: "Pilot Pete",
    billede: "billeder/karakterer/pilot-pete.jpg",
    tekst: "A pilot who gives Jason jobs dropping packages from a plane.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "From", vaerdi: "Chapter 4" }
    ]
  },
  {
    navn: "Donnie",
    billede: "billeder/karakterer/donnie.jpg",
    tekst: "A pilot who flies smuggling runs for Brian Heder.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Works for", vaerdi: "Brian Heder" },
      { navn: "Area", vaerdi: "Leonida Keys" }
    ]
  },
  {
    navn: "Vinny Capsik",
    tekst: "A specialist who works with Giorgio Gallo, together with Kevin and Liz.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Works with", vaerdi: "Giorgio Gallo" }
    ]
  },
  {
    navn: "Yago",
    billede: "billeder/karakterer/yago.jpg",
    tekst: "A street racer who yells at his rivals during races.",
    fakta: [
      { navn: "Role", vaerdi: "Story" },
      { navn: "Seen in", vaerdi: "The Extended Look video" }
    ]
  },
  {
    navn: "Linda",
    billede: "billeder/karakterer/linda.jpg",
    tekst: "Manages the Starlet Motel. Lucia takes Jason there to recover at the start of the story.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Place", vaerdi: "Starlet Motel, Kelly County" }
    ]
  },
  {
    navn: "Vicki",
    billede: "billeder/karakterer/vicki.jpg",
    tekst: "Lives in Room 10 at the Starlet Motel and works as a dancer at a club in Port Gellhorn.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Home", vaerdi: "Starlet Motel" },
      { navn: "Work", vaerdi: "Delights, Port Gellhorn" }
    ]
  },
  {
    navn: "Frankie Delight",
    tekst: "Owns the Delights club in Port Gellhorn.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Place", vaerdi: "Port Gellhorn" }
    ]
  },
  {
    navn: "Dunk",
    billede: "billeder/karakterer/dunk.jpg",
    tekst: "A small-time dealer who lives in a trailer.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Place", vaerdi: "Port Gellhorn" }
    ]
  },
  {
    navn: "Moses",
    billede: "billeder/karakterer/moses.jpg",
    tekst: "A mechanic who buys cheap stolen cars.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Place", vaerdi: "Port Gellhorn" }
    ]
  },
  {
    navn: "Santino",
    tekst: "The concierge at the Y Hotel, where Jason and Lucia move in at the start.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Place", vaerdi: "Y Hotel, Ocean Beach" }
    ]
  },
  {
    navn: "Eddie Acosta",
    billede: "billeder/karakterer/eddie-acosta.jpg",
    tekst: "A crypto fan who hangs out at the Y Hotel.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Place", vaerdi: "Y Hotel, Ocean Beach" }
    ]
  },
  {
    navn: "Shirley",
    billede: "billeder/karakterer/shirley.jpg",
    tekst: "Jason's neighbor. She gives him two optional side missions.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Place", vaerdi: "Key Lento" },
      { navn: "When", vaerdi: "Chapter 1" }
    ]
  },
  {
    navn: "Joey",
    tekst: "A mechanic who fixes Jason's car.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Place", vaerdi: "Coastal Auto Care" },
      { navn: "Car", vaerdi: "Jason's '70 Ganado" }
    ]
  },
  {
    navn: "Kyle",
    tekst: "A crop duster pilot who runs a farm near the Starlet Motel.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Place", vaerdi: "McKittrick Farm" }
    ]
  },
  {
    navn: "Nate",
    billede: "billeder/karakterer/nate.jpg",
    tekst: "A bodybuilder in Kordell's crew.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Hangout", vaerdi: "Ajax Gym" },
      { navn: "Boss", vaerdi: "Kordell Grant" }
    ]
  },
  {
    navn: "Cisco",
    billede: "billeder/karakterer/cisco.jpg",
    tekst: "A bodybuilder in Kordell's crew.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Full name", vaerdi: "Francisco Delgado" },
      { navn: "Boss", vaerdi: "Kordell Grant" }
    ]
  },
  {
    navn: "Nicole Park",
    billede: "billeder/karakterer/nicole-park.jpg",
    tekst: "A security expert who knows the bank's systems. Raul wants her on his team.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Connected to", vaerdi: "Sinfrontera National Bank" }
    ]
  },
  {
    navn: "Andrea",
    billede: "billeder/karakterer/andrea.jpg",
    tekst: "Part of Raul's crew. She helps plan the bank job.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Boss", vaerdi: "Raul Bautista" }
    ]
  },
  {
    navn: "Felipe",
    billede: "billeder/karakterer/felipe.jpg",
    tekst: "Part of Raul's crew. He helps with the jobs before the bank job.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Boss", vaerdi: "Raul Bautista" }
    ]
  },
  {
    navn: "Karim",
    billede: "billeder/karakterer/karim.jpg",
    tekst: "Part of Raul's crew. He takes care of the gear and tech.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Boss", vaerdi: "Raul Bautista" }
    ]
  },
  {
    navn: "Evelyn Andrews",
    billede: "billeder/karakterer/evelyn-andrews.jpg",
    tekst: "An antiques dealer with her own shop.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Shop", vaerdi: "Evelyn Andrews Antiques, Capri" }
    ]
  },
  {
    navn: "Benedict Halifax",
    billede: "billeder/karakterer/benedict-halifax.jpg",
    tekst: "An antiques dealer who works with Evelyn Andrews.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Place", vaerdi: "Capri" }
    ]
  },
  {
    navn: "Wyman",
    billede: "billeder/karakterer/wyman.jpg",
    tekst: "A mechanic who runs a scrapyard.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Place", vaerdi: "Wyman's World Auto Salvage Co." }
    ]
  },
  {
    navn: "Bret Vogel",
    billede: "billeder/karakterer/bret-vogel.jpg",
    tekst: "Founder and boss of a hunting company.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Company", vaerdi: "Killtelligence" }
    ]
  },
  {
    navn: "Kirk",
    billede: "billeder/karakterer/kirk.jpg",
    tekst: "A strange hunter who is obsessed with finding the Skunk Ape.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Hunting", vaerdi: "The Skunk Ape" }
    ]
  },
  {
    navn: "Ernesto",
    tekst: "A gang member who works with Raymond.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Gang", vaerdi: "San4San" }
    ]
  },
  {
    navn: "Raymond",
    billede: "billeder/karakterer/raymond.jpg",
    tekst: "A gang member who runs a drug house.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Gang", vaerdi: "San4San" }
    ]
  },
  {
    navn: "Officer Méndez",
    billede: "billeder/karakterer/officer-mendez.jpg",
    tekst: "A police officer in Vice City.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Job", vaerdi: "Vice City Police" },
      { navn: "Seen in", vaerdi: "Trailer 2" }
    ]
  },
  {
    navn: "Stefanie Gates",
    billede: "billeder/karakterer/stefanie-gates.jpg",
    tekst: "A social worker at the state prison.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Work", vaerdi: "Leonida Department of Corrections" }
    ]
  },
  {
    navn: "Camilo",
    billede: "billeder/karakterer/camilo.jpg",
    tekst: "A livestreamer who makes videos in Vice City.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "City", vaerdi: "Vice City" }
    ]
  },
  {
    navn: "Manuel",
    tekst: "Adds Jason to a group chat for street racers.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Friend of", vaerdi: "Dre'Quan Priest" },
      { navn: "Group chat", vaerdi: "Hit 'n' Run VC" }
    ]
  },
  {
    navn: "Phil",
    billede: "billeder/karakterer/phil.jpg",
    tekst: "The guy from the Ammu-Nation commercial.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Seen in", vaerdi: "Trailer 2" }
    ]
  },
  {
    navn: "Dr Merle",
    billede: "billeder/karakterer/dr-merle.jpg",
    tekst: "Calls himself a researcher and is hunting a strange conspiracy.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Mission type", vaerdi: "Strangers & Freaks" }
    ]
  },
  {
    navn: "Andy",
    billede: "billeder/karakterer/andy.jpg",
    tekst: "One of the strange people who give you missions around Leonida.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Mission type", vaerdi: "Strangers & Freaks" }
    ]
  },
  {
    navn: "Billy",
    billede: "billeder/karakterer/billy.jpg",
    tekst: "One of the strange people who give you missions around Leonida.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Mission type", vaerdi: "Strangers & Freaks" }
    ]
  },
  {
    navn: "Randy",
    billede: "billeder/karakterer/randy.jpg",
    tekst: "One of the strange people who give you missions around Leonida.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Mission type", vaerdi: "Strangers & Freaks" }
    ]
  },
  {
    navn: "Tyrone",
    billede: "billeder/karakterer/tyrone.jpg",
    tekst: "One of the strange people who give you missions around Leonida.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Mission type", vaerdi: "Strangers & Freaks" }
    ]
  },
  {
    navn: "Kenton",
    billede: "billeder/karakterer/kenton.jpg",
    tekst: "One of the strange people who give you missions around Leonida.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Mission type", vaerdi: "Strangers & Freaks" }
    ]
  },
  {
    navn: "Noah",
    tekst: "A member of the animal rights group who leads protests.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Group", vaerdi: "Dodos Rising" }
    ]
  },
  {
    navn: "Rosebud",
    billede: "billeder/karakterer/rosebud.jpg",
    tekst: "An activist who fights to set sea animals free.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Group", vaerdi: "Dodos Rising" }
    ]
  },
  {
    navn: "Tyler",
    tekst: "An activist who protests against fracking together with his friend Steve.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Group", vaerdi: "Dodos Rising" }
    ]
  },
  {
    navn: "Rafa",
    billede: "billeder/karakterer/rafa.jpg",
    tekst: "A kid who spends his time playing games on his tablet.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Parents", vaerdi: "Andrés de León and Petra Navarro" }
    ]
  },
  {
    navn: "Macca the Gator",
    billede: "billeder/karakterer/macca-the-gator.jpg",
    tekst: "A cartoon alligator from a TV show inside the game.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "Show", vaerdi: "Macca Friends" }
    ]
  },
  {
    navn: "Niko Bellic",
    billede: "billeder/karakterer/niko-bellic.jpg",
    tekst: "A cameo from GTA IV.",
    fakta: [
      { navn: "Role", vaerdi: "Side character" },
      { navn: "First game", vaerdi: "GTA IV" }
    ]
  }
];
