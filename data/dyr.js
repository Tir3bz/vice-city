// Dyr i GTA 6. Teksten på siden er på engelsk.
// gruppe   = hvilken knap dyret hører til.
// tegning  = hvilken tegning der bruges (se data/dyr-tegninger.js).
// scene    = hvor dyret står: skov, sump, by, strand, mark, himmel, trae, havUnder, havOver.
// billede  = (valgfri) dit eget screenshot, fx "billeder/dyr/haj.jpg". Så bruges det i stedet for tegningen.
// Vil du tilføje et dyr? Kopier et af dem herunder (fra { til },) og ret teksten. Husk kommaet efter }.
// Skriv (unsure) ved fakta, du ikke er sikker på.

const dyr = [
  // ---------- Land animals ----------
  {
    navn: "Whitetail Doe",
    gruppe: "Land animals",
    tegning: "Doe",
    scene: "skov",
    billede: "billeder/dyr/whitetail-doe.jpg",
    tekst: "A female deer. She is shy and runs off with her white tail in the air if you get too close.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Only the males grow antlers" }
    ]
  },
  {
    navn: "Whitetail Buck",
    gruppe: "Land animals",
    tegning: "Deer",
    scene: "skov",
    billede: "billeder/dyr/whitetail-buck.jpg",
    tekst: "A male deer with big antlers. He stands proud in the forests and fields of Leonida.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "A buck grows a brand new set of antlers every year" }
    ]
  },
  {
    navn: "Piebald Whitetail Buck",
    gruppe: "Land animals",
    tegning: "Piebald Deer",
    scene: "skov",
    billede: "billeder/dyr/piebald-whitetail-buck.jpg",
    tekst: "A rare deer with white patches all over its body. You are lucky if you spot one.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Fewer than 2 out of 100 deer have piebald patches" }
    ]
  },
  {
    navn: "Black Panther",
    gruppe: "Land animals",
    tegning: "Florida Panther",
    scene: "skov",
    billede: "billeder/dyr/black-panther.jpg",
    tekst: "A big black cat that sneaks through the forest at night. Hard to see and even harder to escape.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Yes" },
      { navn: "In real life", vaerdi: "A black panther is not its own species. It is a leopard or jaguar with black fur" }
    ]
  },
  {
    navn: "Bengal Tiger",
    gruppe: "Land animals",
    tegning: "Tiger",
    scene: "skov",
    billede: "billeder/dyr/bengal-tiger.jpg",
    tekst: "A huge striped cat. Nobody expects to meet a tiger in Leonida, but here it is.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Yes" },
      { navn: "In real life", vaerdi: "No two tigers have the same stripes" }
    ]
  },
  {
    navn: "American Black Bear",
    gruppe: "Land animals",
    tegning: "Bear",
    scene: "skov",
    billede: "billeder/dyr/american-black-bear.jpg",
    tekst: "A big, strong bear that wanders through the forests looking for food.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Yes" },
      { navn: "In real life", vaerdi: "Black bears are not always black. Some are brown or even cinnamon colored" }
    ]
  },
  {
    navn: "Wild Boar",
    gruppe: "Land animals",
    tegning: "Wild Boar",
    scene: "skov",
    billede: "billeder/dyr/wild-boar.jpg",
    tekst: "A wild pig with sharp tusks. It digs in the ground for food and can get angry if you get too close.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Yes" },
      { navn: "In real life", vaerdi: "Spanish explorers brought pigs to Florida in the 1500s" }
    ]
  },
  {
    navn: "Northern Raccoon",
    gruppe: "Land animals",
    tegning: "Raccoon",
    scene: "by",
    billede: "billeder/dyr/northern-raccoon.jpg",
    tekst: "The little bandit with a black mask over its eyes. It loves going through trash cans for food.",
    fakta: [
      { navn: "Dangerous", vaerdi: "It can bite" },
      { navn: "In real life", vaerdi: "Raccoons are so clever that they can open simple locks" }
    ]
  },
  {
    navn: "Red Fox",
    gruppe: "Land animals",
    tegning: "Fox",
    scene: "skov",
    billede: "billeder/dyr/red-fox.jpg",
    tekst: "A quick and sly animal with a bushy red tail. You see it most often when it is getting dark.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "The red fox lives in more parts of the world than any other wild meat-eater" }
    ]
  },
  {
    navn: "Golden Fox",
    gruppe: "Land animals",
    tegning: "Fox",
    scene: "skov",
    billede: "billeder/dyr/golden-fox.jpg",
    tekst: "A fox with golden fur. It is a rare sight in Leonida.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "We are not sure what kind of fox this is in real life (unsure)" }
    ]
  },
  {
    navn: "Nine-Banded Armadillo",
    gruppe: "Land animals",
    tegning: "Armadillo",
    scene: "mark",
    billede: "billeder/dyr/nine-banded-armadillo.jpg",
    tekst: "A strange little animal with a hard shell on its back, like a suit of armor.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It almost always has four identical babies at once" }
    ]
  },
  {
    navn: "North American River Otter",
    gruppe: "Land animals",
    tegning: "Otter",
    scene: "sump",
    billede: "billeder/dyr/north-american-river-otter.jpg",
    tekst: "A playful animal that swims fast in rivers and swamps.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "A river otter can hold its breath for several minutes" }
    ]
  },
  {
    navn: "Round-Tailed Muskrat",
    gruppe: "Land animals",
    tegning: "Rat",
    scene: "sump",
    billede: "billeder/dyr/round-tailed-muskrat.jpg",
    tekst: "A small furry animal that lives in the marshes and swims well.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It builds small houses out of plants in the water" }
    ]
  },
  {
    navn: "Blue Land Crab",
    gruppe: "Land animals",
    tegning: "Crab",
    scene: "strand",
    billede: "billeder/dyr/blue-land-crab.jpg",
    tekst: "A big blue crab that walks around on land near the water. Watch out for its claws.",
    fakta: [
      { navn: "Dangerous", vaerdi: "It can pinch" },
      { navn: "In real life", vaerdi: "It lives in a hole on land, but the females go to the sea to release their eggs" }
    ]
  },
  {
    navn: "White-Headed Capuchin",
    gruppe: "Land animals",
    tegning: "Rhesus Monkey",
    scene: "trae",
    billede: "billeder/dyr/white-headed-capuchin.jpg",
    tekst: "A small, clever monkey with a white face that climbs around in the trees.",
    fakta: [
      { navn: "Dangerous", vaerdi: "It can bite" },
      { navn: "In real life", vaerdi: "Capuchin monkeys can use stones as tools to crack nuts" }
    ]
  },
  {
    navn: "Western Chimpanzee",
    gruppe: "Land animals",
    tegning: "Rhesus Monkey",
    scene: "trae",
    tekst: "A strong and very smart ape that lives in groups.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Yes" },
      { navn: "In real life", vaerdi: "Chimpanzees share about 98% of their DNA with humans" }
    ]
  },
  {
    navn: "Standard Poodle",
    gruppe: "Land animals",
    tegning: "Dog",
    scene: "by",
    billede: "billeder/dyr/standard-poodle.jpg",
    tekst: "A tall, elegant dog with curly fur. You see it on walks around the city.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Poodles were first bred to fetch ducks out of the water" }
    ]
  },
  {
    navn: "Yorkshire Terrier",
    gruppe: "Land animals",
    tegning: "Dog",
    scene: "by",
    billede: "billeder/dyr/yorkshire-terrier.jpg",
    tekst: "A tiny dog with long, silky fur and a big personality.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Yorkies were first used to catch rats in factories in England" }
    ]
  },
  {
    navn: "Maltese Dog",
    gruppe: "Land animals",
    tegning: "Dog",
    scene: "by",
    billede: "billeder/dyr/maltese-dog.jpg",
    tekst: "A small, fluffy white dog that loves being carried around.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It is one of the oldest small dog breeds in the world" }
    ]
  },
  {
    navn: "Doberman Pinscher",
    gruppe: "Land animals",
    tegning: "Dog",
    scene: "by",
    billede: "billeder/dyr/doberman-pinscher.jpg",
    tekst: "A fast and strong dog that is often used as a guard dog.",
    fakta: [
      { navn: "Dangerous", vaerdi: "It can bite" },
      { navn: "In real life", vaerdi: "It is named after Louis Dobermann, the German man who bred it" }
    ]
  },
  {
    navn: "German Shepherd",
    gruppe: "Land animals",
    tegning: "Dog",
    scene: "by",
    billede: "billeder/dyr/german-shepherd.jpg",
    tekst: "A smart and loyal dog. You see it with the police and with families.",
    fakta: [
      { navn: "Dangerous", vaerdi: "It can bite" },
      { navn: "In real life", vaerdi: "German shepherds are often used as police dogs" }
    ]
  },
  {
    navn: "Gloriana Dog",
    gruppe: "Land animals",
    tegning: "Dog",
    scene: "by",
    billede: "billeder/dyr/gloriana-dog.jpg",
    tekst: "A dog you can meet in Leonida.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "We are not sure what breed this is in real life (unsure)" }
    ]
  },
  // ---------- Birds ----------
  {
    navn: "American Flamingo",
    gruppe: "Birds",
    tegning: "Flamingo",
    scene: "strand",
    billede: "billeder/dyr/american-flamingo.jpg",
    tekst: "The pink bird everyone thinks of when they think of Florida. It stands by the water on its long legs.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It turns pink from the food it eats" }
    ]
  },
  {
    navn: "Eastern Brown Pelican",
    gruppe: "Birds",
    tegning: "Brown Pelican",
    scene: "strand",
    billede: "billeder/dyr/eastern-brown-pelican.jpg",
    tekst: "A big bird with a huge bill. It flies over the sea and dives into the water to catch fish.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "The pouch under its bill can hold about 11 liters of water" }
    ]
  },
  {
    navn: "Laughing Gull",
    gruppe: "Birds",
    tegning: "Seagull",
    scene: "by",
    billede: "billeder/dyr/laughing-gull.jpg",
    tekst: "A loud bird that hangs out on the beach and in the city. Leave your fries alone for one second, and they are gone.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It is named after its call, which sounds like someone laughing" }
    ]
  },
  {
    navn: "Herring Gull",
    gruppe: "Birds",
    tegning: "Flying Seabird",
    scene: "strand",
    billede: "billeder/dyr/herring-gull.jpg",
    tekst: "A big gray and white gull that flies over the beach and the harbor.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Its chicks peck at a red spot on the parent's bill to get food" }
    ]
  },
  {
    navn: "Caspian Tern",
    gruppe: "Birds",
    tegning: "Caspian Tern",
    scene: "himmel",
    billede: "billeder/dyr/caspian-tern.jpg",
    tekst: "A white seabird with a black cap and a bright red bill.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It is the biggest tern in the world" }
    ]
  },
  {
    navn: "Northern Gannet",
    gruppe: "Birds",
    tegning: "Flying Seabird",
    scene: "himmel",
    billede: "billeder/dyr/northern-gannet.jpg",
    tekst: "A big white seabird that dives into the sea like an arrow to catch fish.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It can dive into the water from about 30 meters up" }
    ]
  },
  {
    navn: "Great Blue Heron",
    gruppe: "Birds",
    tegning: "Heron",
    scene: "sump",
    billede: "billeder/dyr/great-blue-heron.jpg",
    tekst: "A tall bird that stands completely still in the water and then strikes fast to catch a fish.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It can be over a meter tall" }
    ]
  },
  {
    navn: "Tricolored Heron",
    gruppe: "Birds",
    tegning: "Heron",
    scene: "sump",
    billede: "billeder/dyr/tricolored-heron.jpg",
    tekst: "A slim heron that runs around in shallow water to catch small fish.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Its name comes from its three colors: blue, white and reddish brown" }
    ]
  },
  {
    navn: "Great Egret",
    gruppe: "Birds",
    tegning: "Heron",
    scene: "sump",
    billede: "billeder/dyr/great-egret.jpg",
    tekst: "A tall, snow-white bird with long black legs.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It is the symbol of the National Audubon Society, a big American bird group" }
    ]
  },
  {
    navn: "American White Ibis",
    gruppe: "Birds",
    tegning: "Ibis",
    scene: "sump",
    billede: "billeder/dyr/american-white-ibis.jpg",
    tekst: "A white bird with a long, curved bill that it pokes into the mud.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Its curved bill is perfect for finding crabs in the mud" }
    ]
  },
  {
    navn: "Wood Stork",
    gruppe: "Birds",
    tegning: "Ibis",
    scene: "sump",
    billede: "billeder/dyr/wood-stork.jpg",
    tekst: "A big white bird with a bald gray head that walks slowly through the swamp.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It is the only stork that nests in the USA" }
    ]
  },
  {
    navn: "Roseate Spoonbill",
    gruppe: "Birds",
    tegning: "Roseate Spoonbill",
    scene: "sump",
    billede: "billeder/dyr/roseate-spoonbill.jpg",
    tekst: "A pink bird that is easy to mix up with a flamingo. Look at the bill: it is shaped like a spoon.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It swings its bill from side to side in the water to find food" }
    ]
  },
  {
    navn: "Whooping Crane",
    gruppe: "Birds",
    tegning: "Crane",
    scene: "mark",
    billede: "billeder/dyr/whooping-crane.jpg",
    tekst: "A very tall white bird with a red patch on its head.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It is the tallest bird in North America, and it is very rare" }
    ]
  },
  {
    navn: "Purple Gallinule",
    gruppe: "Birds",
    tegning: "Duck",
    scene: "sump",
    billede: "billeder/dyr/purple-gallinule.jpg",
    tekst: "A colorful purple and green bird that walks across lily pads in the swamp.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Its very long toes let it walk on floating plants" }
    ]
  },
  {
    navn: "Mottled Duck",
    gruppe: "Birds",
    tegning: "Duck",
    scene: "sump",
    billede: "billeder/dyr/mottled-duck.jpg",
    tekst: "A brown duck that swims around in ponds, lakes and canals.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It lives in Florida all year and does not fly south for the winter" }
    ]
  },
  {
    navn: "Bald Eagle",
    gruppe: "Birds",
    tegning: "Bald Eagle",
    scene: "himmel",
    billede: "billeder/dyr/bald-eagle.jpg",
    tekst: "A large bird of prey with a white head. It soars high in the sky and looks for fish.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It is the national bird of the USA, and it is not bald at all. Its head is just white" }
    ]
  },
  {
    navn: "American Crow",
    gruppe: "Birds",
    tegning: "American Crow",
    scene: "by",
    billede: "billeder/dyr/american-crow.jpg",
    tekst: "A black bird that is much smarter than it looks.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Crows can remember human faces" }
    ]
  },
  {
    navn: "Leonida Wild Hen",
    gruppe: "Birds",
    tegning: "Cubalaya Chicken",
    scene: "by",
    billede: "billeder/dyr/leonida-wild-hen.jpg",
    tekst: "A wild chicken that walks around the streets like it owns them.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "In Key West, Florida, wild chickens really do walk around the streets" }
    ]
  },
  {
    navn: "Orchard Oriole",
    gruppe: "Birds",
    tegning: "Songbird",
    scene: "trae",
    billede: "billeder/dyr/orchard-oriole.jpg",
    tekst: "A small songbird with a dark head and a reddish-brown belly.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It is one of the smallest orioles in North America" }
    ]
  },
  {
    navn: "Northern Mockingbird",
    gruppe: "Birds",
    tegning: "Songbird",
    scene: "trae",
    billede: "billeder/dyr/northern-mockingbird.jpg",
    tekst: "A gray bird that sings all the time, even at night.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It can copy the songs of many other birds, and it is Florida's state bird" }
    ]
  },
  {
    navn: "American Goldfinch",
    gruppe: "Birds",
    tegning: "Songbird",
    scene: "trae",
    billede: "billeder/dyr/american-goldfinch.jpg",
    tekst: "A tiny bird. The male is bright yellow with black wings.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "The male turns bright yellow in the summer" }
    ]
  },
  {
    navn: "House Sparrow",
    gruppe: "Birds",
    tegning: "Songbird",
    scene: "by",
    billede: "billeder/dyr/house-sparrow.jpg",
    tekst: "A small brown bird that hops around the city looking for crumbs.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It came from Europe and was brought to America in the 1850s" }
    ]
  },
  {
    navn: "Blue-and-Yellow Macaw",
    gruppe: "Birds",
    tegning: "Parrot",
    scene: "trae",
    billede: "billeder/dyr/blue-and-yellow-macaw.jpg",
    tekst: "A big parrot with bright blue and yellow feathers and a long tail.",
    fakta: [
      { navn: "Dangerous", vaerdi: "It can bite" },
      { navn: "In real life", vaerdi: "Macaws can live for many decades" }
    ]
  },
  {
    navn: "Scarlet Macaw",
    gruppe: "Birds",
    tegning: "Parrot",
    scene: "trae",
    billede: "billeder/dyr/scarlet-macaw.jpg",
    tekst: "A big red parrot with yellow and blue wings.",
    fakta: [
      { navn: "Dangerous", vaerdi: "It can bite" },
      { navn: "In real life", vaerdi: "Its strong beak can crack hard nuts" }
    ]
  },
  {
    navn: "Monk Parakeet",
    gruppe: "Birds",
    tegning: "Parrot",
    scene: "trae",
    billede: "billeder/dyr/monk-parakeet.jpg",
    tekst: "A small green parrot that lives in noisy flocks.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Wild monk parakeets live in Florida and build big nests of sticks" }
    ]
  },
  {
    navn: "Yellow-Crested Cockatoo",
    gruppe: "Birds",
    tegning: "Parrot",
    scene: "trae",
    billede: "billeder/dyr/yellow-crested-cockatoo.jpg",
    tekst: "A white parrot with a yellow crest on its head.",
    fakta: [
      { navn: "Dangerous", vaerdi: "It can bite" },
      { navn: "In real life", vaerdi: "It can raise the yellow crest on its head when it is excited" }
    ]
  },
  {
    navn: "Red-Crowned Parrot",
    gruppe: "Birds",
    tegning: "Parrot",
    scene: "trae",
    billede: "billeder/dyr/red-crowned-parrot.jpg",
    tekst: "A green parrot with a red patch on top of its head.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Wild flocks of these parrots live in some cities in the USA" }
    ]
  },
  {
    navn: "Indian Peacock",
    gruppe: "Birds",
    tegning: "Peacock",
    scene: "mark",
    billede: "billeder/dyr/indian-peacock.jpg",
    tekst: "A bird with a giant, shiny tail full of eye patterns.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Only the males have the big colorful tail" }
    ]
  },
  // ---------- Reptiles & amphibians ----------
  {
    navn: "Adult American Alligator",
    gruppe: "Reptiles & amphibians",
    tegning: "American Alligator",
    scene: "sump",
    billede: "billeder/dyr/adult-american-alligator.jpg",
    tekst: "A fully grown alligator. The most famous animal in Leonida. Keep your distance.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Yes" },
      { navn: "In real life", vaerdi: "Florida has more than a million alligators" }
    ]
  },
  {
    navn: "Adolescent American Alligator",
    gruppe: "Reptiles & amphibians",
    tegning: "American Alligator",
    scene: "sump",
    billede: "billeder/dyr/adolescent-american-alligator.jpg",
    tekst: "A young alligator that is not fully grown yet, but already has plenty of teeth.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Yes" },
      { navn: "In real life", vaerdi: "Alligators can live for 30 to 50 years in the wild" }
    ]
  },
  {
    navn: "Juvenile American Alligator",
    gruppe: "Reptiles & amphibians",
    tegning: "American Alligator",
    scene: "sump",
    billede: "billeder/dyr/juvenile-american-alligator.jpg",
    tekst: "A baby alligator. Small and cute, but its mother is probably close by.",
    fakta: [
      { navn: "Dangerous", vaerdi: "A little" },
      { navn: "In real life", vaerdi: "Baby alligators have yellow stripes that help them hide" }
    ]
  },
  {
    navn: "Albino American Alligator",
    gruppe: "Reptiles & amphibians",
    tegning: "Albino Alligator",
    scene: "sump",
    billede: "billeder/dyr/albino-american-alligator.jpg",
    tekst: "A completely white alligator. One of the rarest animals you can find.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Yes" },
      { navn: "In real life", vaerdi: "There are only very few albino alligators in the world" }
    ]
  },
  {
    navn: "Adult American Crocodile",
    gruppe: "Reptiles & amphibians",
    tegning: "American Crocodile",
    scene: "sump",
    billede: "billeder/dyr/adult-american-crocodile.jpg",
    tekst: "It looks like an alligator, but it has a pointier snout and lighter skin.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Yes" },
      { navn: "In real life", vaerdi: "South Florida is the only place in the world where alligators and crocodiles live together" }
    ]
  },
  {
    navn: "Adolescent American Crocodile",
    gruppe: "Reptiles & amphibians",
    tegning: "American Crocodile",
    scene: "sump",
    billede: "billeder/dyr/adolescent-american-crocodile.jpg",
    tekst: "A young crocodile that is still growing.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Yes" },
      { navn: "In real life", vaerdi: "Crocodiles keep growing slowly their whole lives" }
    ]
  },
  {
    navn: "Juvenile American Crocodile",
    gruppe: "Reptiles & amphibians",
    tegning: "American Crocodile",
    scene: "sump",
    billede: "billeder/dyr/juvenile-american-crocodile.jpg",
    tekst: "A baby crocodile. Small, but it already has sharp teeth.",
    fakta: [
      { navn: "Dangerous", vaerdi: "A little" },
      { navn: "In real life", vaerdi: "Baby crocodiles call to their mother from inside the egg before they hatch" }
    ]
  },
  {
    navn: "Adult Green Iguana",
    gruppe: "Reptiles & amphibians",
    tegning: "Green Iguana",
    scene: "trae",
    billede: "billeder/dyr/adult-green-iguana.jpg",
    tekst: "A big green lizard that likes to lie in the sun on the road or sit up in the trees.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "When it gets cold in Florida, iguanas can fall out of the trees" }
    ]
  },
  {
    navn: "Green Sea Turtle",
    gruppe: "Reptiles & amphibians",
    tegning: "Sea Turtle",
    scene: "havUnder",
    billede: "billeder/dyr/green-sea-turtle.jpg",
    tekst: "Swims calmly around in the sea off the coast. If you go diving, you might see one.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It is named after the green color of its fat, not its shell" }
    ]
  },
  {
    navn: "Box Turtle",
    gruppe: "Reptiles & amphibians",
    tegning: "Tortoise",
    scene: "skov",
    billede: "billeder/dyr/box-turtle.jpg",
    tekst: "A small turtle that walks slowly around on land.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It can close its shell completely, like a box" }
    ]
  },
  {
    navn: "Gopher Tortoise",
    gruppe: "Reptiles & amphibians",
    tegning: "Tortoise",
    scene: "mark",
    billede: "billeder/dyr/gopher-tortoise.jpg",
    tekst: "A land turtle that digs long tunnels in the sand.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "More than 300 other kinds of animals use its tunnels" }
    ]
  },
  {
    navn: "American Bullfrog",
    gruppe: "Reptiles & amphibians",
    tegning: "Cane Toad",
    scene: "sump",
    billede: "billeder/dyr/american-bullfrog.jpg",
    tekst: "A big green frog with a deep, loud croak.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It is the biggest frog in North America" }
    ]
  },
  {
    navn: "Southern Leopard Frog",
    gruppe: "Reptiles & amphibians",
    tegning: "Cane Toad",
    scene: "sump",
    tekst: "A slim green and brown frog with dark spots.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It is named after its spots, like a leopard" }
    ]
  },
  {
    navn: "Southern Toad",
    gruppe: "Reptiles & amphibians",
    tegning: "Cane Toad",
    scene: "sump",
    billede: "billeder/dyr/southern-toad.jpg",
    tekst: "A small, bumpy toad that comes out at night.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It has two big ridges on top of its head" }
    ]
  },
  // ---------- Sea animals ----------
  {
    navn: "Short-Beaked Common Dolphin",
    gruppe: "Sea animals",
    tegning: "Dolphin",
    scene: "havOver",
    billede: "billeder/dyr/short-beaked-common-dolphin.jpg",
    tekst: "A smart and playful dolphin that jumps through the waves in big groups.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Dolphins sleep with only half of their brain at a time" }
    ]
  },
  {
    navn: "Great Hammerhead Shark",
    gruppe: "Sea animals",
    tegning: "Hammerhead",
    scene: "havUnder",
    billede: "billeder/dyr/great-hammerhead-shark.jpg",
    tekst: "A big shark with a head shaped like a hammer.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Yes" },
      { navn: "In real life", vaerdi: "Its wide head helps it find stingrays hiding in the sand" }
    ]
  },
  {
    navn: "Tiger Shark",
    gruppe: "Sea animals",
    tegning: "Shark",
    scene: "havUnder",
    billede: "billeder/dyr/tiger-shark.jpg",
    tekst: "A big shark with dark stripes on its back.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Yes" },
      { navn: "In real life", vaerdi: "It eats almost anything. Even trash has been found in its stomach" }
    ]
  },
  {
    navn: "Bull Shark",
    gruppe: "Sea animals",
    tegning: "Shark",
    scene: "havUnder",
    tekst: "A strong and stocky shark that can swim close to the coast.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Yes" },
      { navn: "In real life", vaerdi: "It can swim from the sea up into rivers" }
    ]
  },
  {
    navn: "Blacktip Shark",
    gruppe: "Sea animals",
    tegning: "Shark",
    scene: "havUnder",
    tekst: "A fast shark that sometimes jumps out of the water.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Yes" },
      { navn: "In real life", vaerdi: "It is named after the black tips on its fins" }
    ]
  },
  {
    navn: "Giant Oceanic Manta Ray",
    gruppe: "Sea animals",
    tegning: "Manta Ray",
    scene: "havUnder",
    billede: "billeder/dyr/giant-oceanic-manta-ray.jpg",
    tekst: "A giant, flat fish that glides through the water as if it is flying.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Its fins can be up to 7 meters wide from tip to tip" }
    ]
  },
  {
    navn: "Spotted Eagle Ray",
    gruppe: "Sea animals",
    tegning: "Manta Ray",
    scene: "havUnder",
    billede: "billeder/dyr/spotted-eagle-ray.jpg",
    tekst: "A ray with white spots on its back and a long tail.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Its tail has a stinger" },
      { navn: "In real life", vaerdi: "It can jump high out of the water" }
    ]
  },
  {
    navn: "Portuguese Man O' War",
    gruppe: "Sea animals",
    tegning: "Man O' War",
    scene: "havUnder",
    tekst: "It floats on the surface with a purple balloon and long, stinging tentacles.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Yes, it stings" },
      { navn: "In real life", vaerdi: "It is not a jellyfish, but a group of tiny animals that work together" }
    ]
  },
  {
    navn: "Moon Jellyfish",
    gruppe: "Sea animals",
    tegning: "Jellyfish",
    scene: "havUnder",
    billede: "billeder/dyr/moon-jellyfish.jpg",
    tekst: "A see-through jellyfish that floats slowly around in the sea.",
    fakta: [
      { navn: "Dangerous", vaerdi: "A mild sting" },
      { navn: "In real life", vaerdi: "A jellyfish has no brain and no heart" }
    ]
  },
  {
    navn: "Starfish",
    gruppe: "Sea animals",
    tegning: "Starfish",
    scene: "havUnder",
    billede: "billeder/dyr/starfish.jpg",
    tekst: "A star-shaped animal that lives on the sea floor.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "A starfish can grow back an arm it has lost" }
    ]
  },
  {
    navn: "Spotted Moray Eel",
    gruppe: "Sea animals",
    tegning: "Eel",
    scene: "havUnder",
    tekst: "A long, spotted fish that hides in holes and cracks in the reef.",
    fakta: [
      { navn: "Dangerous", vaerdi: "It can bite" },
      { navn: "In real life", vaerdi: "A moray has a second set of jaws in its throat" }
    ]
  },
  {
    navn: "Green Moray Eel",
    gruppe: "Sea animals",
    tegning: "Eel",
    scene: "havUnder",
    tekst: "A big green eel that peeks out of the reef with its mouth open.",
    fakta: [
      { navn: "Dangerous", vaerdi: "It can bite" },
      { navn: "In real life", vaerdi: "It is really brown. A yellow slime on its skin makes it look green" }
    ]
  },
  {
    navn: "Red Lionfish",
    gruppe: "Sea animals",
    tegning: "Lionfish",
    scene: "havUnder",
    billede: "billeder/dyr/red-lionfish.jpg",
    tekst: "A beautiful striped fish with long spines that stick out in all directions.",
    fakta: [
      { navn: "Dangerous", vaerdi: "Its spines are venomous" },
      { navn: "In real life", vaerdi: "It doesn't belong in Florida, so people are asked to catch it" }
    ]
  },
  {
    navn: "Great Barracuda",
    gruppe: "Sea animals",
    tegning: "Barracuda",
    scene: "havUnder",
    tekst: "A long, silver fish with a big mouth full of sharp teeth.",
    fakta: [
      { navn: "Dangerous", vaerdi: "It can bite" },
      { navn: "In real life", vaerdi: "It has sharp, fang-like teeth" }
    ]
  },
  {
    navn: "Atlantic Tarpon",
    gruppe: "Sea animals",
    tegning: "Fish",
    scene: "havUnder",
    tekst: "A big silver fish with large, shiny scales.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It can swim up and gulp air from the surface" }
    ]
  },
  {
    navn: "Mahi-Mahi",
    gruppe: "Sea animals",
    tegning: "Fish",
    scene: "havUnder",
    tekst: "A colorful fish in green, blue and gold.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It is also called dolphinfish, but it is not a dolphin" }
    ]
  },
  {
    navn: "Black Grouper",
    gruppe: "Sea animals",
    tegning: "Fish",
    scene: "havUnder",
    tekst: "A big, heavy fish that lives around the reefs.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Black groupers start life as females, and some turn into males later" }
    ]
  },
  {
    navn: "Hogfish",
    gruppe: "Sea animals",
    tegning: "Fish",
    scene: "havUnder",
    tekst: "A fish with a long snout that digs in the sand for food.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It is named after the way it digs with its snout, like a hog" }
    ]
  },
  {
    navn: "Littlehead Porgy",
    gruppe: "Sea animals",
    tegning: "Fish",
    scene: "havUnder",
    tekst: "A small silver fish that swims near the sea floor.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Porgies have strong teeth for crushing shells" }
    ]
  },
  {
    navn: "Cobia",
    gruppe: "Sea animals",
    tegning: "Fish",
    scene: "havUnder",
    billede: "billeder/dyr/cobia.jpg",
    tekst: "A long, dark fish that looks a bit like a small shark.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It often swims along with sharks, rays and turtles" }
    ]
  },
  {
    navn: "Permit",
    gruppe: "Sea animals",
    tegning: "Fish",
    scene: "havUnder",
    billede: "billeder/dyr/permit.jpg",
    tekst: "A flat, silver fish that swims in shallow water.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "Anglers say it is one of the hardest fish to catch" }
    ]
  },
  {
    navn: "Northern Red Snapper",
    gruppe: "Sea animals",
    tegning: "Fish",
    scene: "havUnder",
    billede: "billeder/dyr/northern-red-snapper.jpg",
    tekst: "A bright red fish that lives near the sea floor.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It can live for more than 50 years" }
    ]
  },
  {
    navn: "Greater Amberjack",
    gruppe: "Sea animals",
    tegning: "Fish",
    scene: "havUnder",
    tekst: "A big, strong fish with a dark stripe across its eyes.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It can weigh as much as a grown man" }
    ]
  },
  {
    navn: "Atlantic Spanish Mackerel",
    gruppe: "Sea animals",
    tegning: "Fish",
    scene: "havUnder",
    tekst: "A fast, slim fish with golden spots that swims in big schools.",
    fakta: [
      { navn: "Dangerous", vaerdi: "No" },
      { navn: "In real life", vaerdi: "It travels in big schools along the coast" }
    ]
  }
];
