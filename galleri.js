// Viser ting som et gitter med billeder, 2 ved siden af hinanden.
// Trykker man på en ting, åbner et vindue med stort billede, tekst og fakta.
//
// lavTegning: en funktion, der laver en tegning til en ting.
// Har tingen et "billede" (fx dit eget screenshot), bruges det i stedet.

function lavBillede(ting, lavTegning) {
  if (ting.billede) {
    return `<img src="${ting.billede}" alt="${ting.navn}" loading="lazy">`;
  }
  return lavTegning(ting);
}

function visGalleri(liste, lavTegning) {
  const plads = document.getElementById("kort");
  plads.innerHTML = "";
  plads.className = "galleri";

  for (const ting of liste) {
    const flise = document.createElement("button");
    flise.className = "flise";
    flise.innerHTML = `<div class="flise-billede">${lavBillede(ting, lavTegning)}</div>`;
    const navn = document.createElement("span");
    navn.className = "flise-navn";
    navn.textContent = ting.navn;
    flise.appendChild(navn);
    flise.onclick = () => visDetaljer(ting, lavTegning);
    plads.appendChild(flise);
  }

  // Starter animationen forfra, så fliserne toner blødt frem hver gang.
  plads.classList.remove("vis");
  void plads.offsetWidth;
  plads.classList.add("vis");
}

// Det store vindue med alle detaljer.
function visDetaljer(ting, lavTegning) {
  const vindue = document.getElementById("detaljer");
  vindue.querySelector(".detaljer-billede").innerHTML = lavBillede(ting, lavTegning);
  vindue.querySelector("h2").textContent = ting.navn;
  vindue.querySelector("p").textContent = ting.tekst;

  const fakta = vindue.querySelector("ul");
  fakta.innerHTML = "";
  for (const f of ting.fakta) {
    const linje = document.createElement("li");
    const label = document.createElement("strong");
    label.textContent = f.navn;
    linje.appendChild(label);
    linje.appendChild(document.createTextNode(f.vaerdi));
    fakta.appendChild(linje);
  }

  vindue.showModal();
}

// Luk vinduet med knappen, eller ved at trykke uden for det.
document.addEventListener("DOMContentLoaded", () => {
  const vindue = document.getElementById("detaljer");
  if (!vindue) return;
  vindue.querySelector(".luk").onclick = () => vindue.close();
  vindue.addEventListener("click", (e) => {
    if (e.target === vindue) vindue.close();
  });
});
