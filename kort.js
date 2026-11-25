// Laver et kort for hver ting i en liste og sætter dem ind på siden.
// Gamle kort bliver fjernet først, så den kan kaldes igen ved søgning.
function visKort(liste) {
  const plads = document.getElementById("kort");
  plads.innerHTML = "";

  for (const ting of liste) {
    const kort = document.createElement("article");
    kort.className = "kort";

    const navn = document.createElement("h2");
    navn.textContent = ting.navn;
    kort.appendChild(navn);

    const tekst = document.createElement("p");
    tekst.textContent = ting.tekst;
    kort.appendChild(tekst);

    const fakta = document.createElement("ul");
    for (const f of ting.fakta) {
      const linje = document.createElement("li");
      const label = document.createElement("strong");
      label.textContent = f.navn + ": ";
      linje.appendChild(label);
      linje.appendChild(document.createTextNode(f.vaerdi));
      fakta.appendChild(linje);
    }
    kort.appendChild(fakta);

    plads.appendChild(kort);
  }

  // Starter animationen forfra, så kortene toner blødt frem hver gang.
  plads.classList.remove("vis");
  void plads.offsetWidth;
  plads.classList.add("vis");
}
