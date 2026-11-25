// Fælles opsætning til "samlings"-siderne (Animals og Cars).
// Siden kalder lavSamling({...}) og bestemmer selv, hvad der skal vises.
// Stilen står i samling.css.
//
// Det man kan give med:
//   liste        alle tingene (dyr, biler ...)
//   enhed        fx "animals" (bruges i "Showing 12 animals")
//   helt         { titel, lille, tekst, billede, tal: [{ tal, tekst }] }
//   spot         { titel, liste, under: (ting, nr) => tekst }   (båndet man kan swipe)
//   gruppeAf     (ting) => gruppens navn
//   gruppeIkoner { "Birds": "🦜", ... }
//   ekstraFilter { navn, test: (ting) => true/false }   (en tænd/sluk-knap)
//   sorteringer  [{ navn, sammenlign: (a, b) => tal }]
//   billede      (ting) => HTML til billedet
//   flise        (ting) => HTML under navnet på flisen
//   badges       (ting) => HTML ovenpå billedet
//   detaljer     (ting) => HTML i vinduet under navnet
//   undertitel   (ting) => lille tekst over navnet i vinduet

function lavSamling(s) {
  const main = document.querySelector("main");
  const roligt = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Topbilledet ----------
  const helt = document.createElement("header");
  helt.className = "sam-helt";
  helt.innerHTML = `
    <div class="sam-helt-baggrund" style="background-image:url('${s.helt.billede}')"></div>
    <img class="sam-helt-billede" src="${s.helt.billede}" alt="">
    <div class="sam-helt-tekst">
      <p class="sam-lille">${s.helt.lille}</p>
      <h1>${s.helt.titel}</h1>
      <p class="sam-helt-under">${s.helt.tekst}</p>
      <div class="sam-tal">
        ${s.helt.tal.map((t) => `<div><strong data-til="${t.tal}">0</strong><span>${t.tekst}</span></div>`).join("")}
      </div>
    </div>`;
  main.appendChild(helt);

  // Tallene tæller op, når siden åbner.
  for (const el of helt.querySelectorAll("[data-til]")) {
    const slut = Number(el.dataset.til);
    if (roligt) {
      el.textContent = slut;
      continue;
    }
    const start = performance.now();
    const tael = (nu) => {
      const del = Math.min((nu - start) / 1400, 1);
      el.textContent = Math.round(slut * (1 - Math.pow(1 - del, 3)));
      if (del < 1) requestAnimationFrame(tael);
    };
    requestAnimationFrame(tael);
  }

  // ---------- Spotlight-båndet ----------
  if (s.spot && s.spot.liste.length) {
    const spot = document.createElement("section");
    spot.className = "sam-spot";
    spot.innerHTML = `<h2 class="sam-overskrift">${s.spot.titel}</h2><div class="sam-baand"></div>`;
    const baand = spot.querySelector(".sam-baand");
    s.spot.liste.forEach((t, nr) => {
      const kort = document.createElement("button");
      kort.className = "sam-spot-kort";
      kort.innerHTML = `
        <div class="sam-spot-billede">${s.billede(t)}</div>
        <span class="sam-spot-nr">#${nr + 1}</span>
        <span class="sam-spot-tekst">
          <strong>${t.navn}</strong>
          <span>${s.spot.under(t, nr)}</span>
        </span>`;
      kort.onclick = () => visVindue(t);
      baand.appendChild(kort);
    });
    main.appendChild(spot);

    // Båndet kører selv videre hvert 4. sekund, indtil man rører det.
    if (!roligt) {
      let roert = false;
      const stop = () => (roert = true);
      baand.addEventListener("pointerdown", stop);
      baand.addEventListener("wheel", stop, { passive: true });
      const timer = setInterval(() => {
        if (roert) return clearInterval(timer);
        const kortBredde = baand.firstElementChild.offsetWidth + 14;
        const vedSlut = baand.scrollLeft + baand.clientWidth >= baand.scrollWidth - 10;
        baand.scrollTo({ left: vedSlut ? 0 : baand.scrollLeft + kortBredde, behavior: "smooth" });
      }, 4000);
    }
  }

  // ---------- Søgning, filtre og sortering ----------
  const vaerktoej = document.createElement("section");
  vaerktoej.className = "sam-vaerktoej";
  vaerktoej.innerHTML = `
    <h2 class="sam-overskrift">All ${s.enhed}</h2>
    <div class="sam-soeg-linje">
      <input class="soegefelt sam-soeg" type="search" placeholder="Search ${s.enhed}...">
      ${s.sorteringer ? `<select class="sam-sorter" aria-label="Sort">${s.sorteringer.map((o, i) => `<option value="${i}">${o.navn}</option>`).join("")}</select>` : ""}
    </div>
    <div class="sam-chips"></div>
    <p class="antal sam-antal"></p>
    <div class="sam-gitter"></div>`;
  main.appendChild(vaerktoej);

  const soeg = vaerktoej.querySelector(".sam-soeg");
  const sorter = vaerktoej.querySelector(".sam-sorter");
  const chips = vaerktoej.querySelector(".sam-chips");
  const gitter = vaerktoej.querySelector(".sam-gitter");
  const antal = vaerktoej.querySelector(".sam-antal");

  // Grupperne med antal.
  const grupper = ["All"];
  for (const t of s.liste) if (!grupper.includes(s.gruppeAf(t))) grupper.push(s.gruppeAf(t));
  let valgtGruppe = "All";
  let ekstraTil = false;

  for (const g of grupper) {
    const n = g === "All" ? s.liste.length : s.liste.filter((t) => s.gruppeAf(t) === g).length;
    const chip = document.createElement("button");
    chip.className = "sam-chip";
    chip.dataset.gruppe = g;
    chip.innerHTML = `${g === "All" ? "✨" : s.gruppeIkoner[g] || "•"} ${g} <span>${n}</span>`;
    chip.onclick = () => {
      valgtGruppe = g;
      opdater();
    };
    chips.appendChild(chip);
  }

  if (s.ekstraFilter) {
    const chip = document.createElement("button");
    chip.className = "sam-chip sam-chip-ekstra";
    chip.innerHTML = s.ekstraFilter.navn;
    chip.onclick = () => {
      ekstraTil = !ekstraTil;
      chip.classList.toggle("valgt", ekstraTil);
      opdater();
    };
    chips.appendChild(chip);
  }

  function opdater() {
    const ord = soeg.value.trim().toLowerCase();
    let fundne = s.liste.filter((t) =>
      (valgtGruppe === "All" || s.gruppeAf(t) === valgtGruppe) &&
      (!ekstraTil || s.ekstraFilter.test(t)) &&
      t.navn.toLowerCase().includes(ord)
    );
    if (sorter) fundne = [...fundne].sort(s.sorteringer[Number(sorter.value)].sammenlign);

    for (const c of chips.querySelectorAll("[data-gruppe]")) {
      c.classList.toggle("valgt", c.dataset.gruppe === valgtGruppe);
    }
    antal.textContent = fundne.length === 0
      ? `No ${s.enhed} found.`
      : `Showing ${fundne.length} ${s.enhed}`;

    gitter.innerHTML = "";
    for (const t of fundne) {
      const flise = document.createElement("button");
      flise.className = "sam-flise";
      flise.innerHTML = `
        <div class="sam-flise-billede">${s.billede(t)}${s.badges ? s.badges(t) : ""}</div>
        <div class="sam-flise-tekst">
          <strong>${t.navn}</strong>
          ${s.flise ? s.flise(t) : ""}
        </div>`;
      flise.onclick = () => visVindue(t);
      gitter.appendChild(flise);
    }
  }

  soeg.oninput = opdater;
  if (sorter) sorter.onchange = opdater;
  opdater();

  // ---------- Vinduet med detaljer ----------
  const vindue = document.createElement("dialog");
  vindue.className = "sam-vindue";
  document.body.appendChild(vindue);

  function visVindue(t) {
    vindue.innerHTML = `
      <div class="sam-vindue-billede">${s.billede(t)}</div>
      <div class="sam-vindue-tekst">
        ${s.undertitel ? `<p class="sam-lille">${s.undertitel(t)}</p>` : ""}
        <h2>${t.navn}</h2>
        <p>${t.tekst}</p>
        ${s.detaljer(t)}
      </div>
      <button class="luk">Close</button>`;
    vindue.querySelector(".luk").onclick = () => vindue.close();
    vindue.showModal();
    vindue.scrollTop = 0;
    // Statbarerne fyldes op, lige efter vinduet er åbnet.
    requestAnimationFrame(() => requestAnimationFrame(() => vindue.classList.add("fyldt")));
  }
  vindue.addEventListener("close", () => vindue.classList.remove("fyldt"));
  vindue.addEventListener("click", (e) => {
    if (e.target === vindue) vindue.close();
  });
}

// En statbar, fx Road rating. vaerdi og max er tal.
function statBar(navn, vaerdi, max, farve) {
  const pct = Math.max(4, Math.round((vaerdi / max) * 100));
  return `
    <div class="sam-bar" style="--pct:${pct}%;--farve:${farve}">
      <span class="sam-bar-navn">${navn}</span>
      <span class="sam-bar-spor"><span class="sam-bar-fyld"></span></span>
      <span class="sam-bar-tal">${vaerdi}</span>
    </div>`;
}
