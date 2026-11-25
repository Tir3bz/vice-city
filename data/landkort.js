// Landkortet over Leonida, som butikkerne vises på.
//
// Selve kortet (billederne i billeder/kort/) er tegnet af fans på gtadb.org
// og hentet fra GTABase. Det må bruges frit, hvis man skriver hvor det er fra
// (licens: CC BY 4.0). Det er ikke Rockstars eget kort.
//
// Hver butik sættes ved sit område (det står under "Area" i data/butikker.js).
// Butikker i samme område lægges i en lille klump rundt om punktet.
//
// Står en butik et forkert sted? Ret tallene herunder:
//   x = fra venstre mod højre, y = fra toppen og ned (Vice City er ca. x 495, y 490)
// Steder med "gæt" kunne vi ikke finde på kortet, så de er placeret cirka.

const steder = {
  // ---------- Hele regioner (bruges når vi ikke kender området) ----------
  "Vice City":      [495, 490],
  "Leonida Keys":   [420, 700],
  "Grassrivers":    [393, 640],
  "Kelly County":   [395, 430],
  "Leonard County": [475, 395],
  "Mount Kalaga":   [393, 322],
  "Port Gellhorn":  [308, 394],

  // ---------- Vice City ----------
  "Downtown":                 [490, 499],
  "Little Cuba":              [472, 502],
  "Crosstown":                [491, 478],
  "Bayside":                  [499, 473],
  "La Perle":                 [484, 465],
  "Stockyard":                [502, 458],
  "Rockridge":                [475, 485],
  "Shoreline":                [508, 507],
  "Tequesta":                 [480, 553],
  "Peacock Bay":              [474, 574],
  "Southside":                [454, 580],
  "Hamlet":                   [421, 611],
  "Airport":                  [421, 531],
  "Washington Beach":         [562, 454],
  "Ocean Beach":              [562, 503],
  "Waxman Island":            [520, 497], // gæt
  "East of Vice Beach":       [568, 485], // gæt
  "Decor District":           [506, 445], // på fan-kortet: Bohemia
  "Salton":                   [428, 484], // gæt
  "Northwest of Salton":      [420, 470], // gæt
  "Northwest Vice City":      [440, 468], // gæt
  "Northwest of Little Cuba": [462, 490], // gæt
  "West Vice-Dale County":    [440, 515], // gæt
  "Balsero":                  [465, 525], // gæt

  // ---------- Leonida Keys ----------
  "Key Lento":   [438, 692],
  "Watson Bay":  [359, 623],
  "Southwind":   [405, 706], // gæt
  "Capri":       [345, 712], // gæt

  // ---------- Kelly County ----------
  "Ambrosia":           [420, 370],
  "Emerald Springs":    [385, 457],
  "Buckskin Swamp":     [384, 490],
  "South Kelly County": [395, 470], // gæt

  // ---------- Leonard County ----------
  "Waning Sands":  [503, 387],
  "Belville":      [470, 423],
  "Lake Leonida":  [452, 362],

  // ---------- Mount Kalaga ----------
  "Millport":     [420, 300], // gæt
  "Grayson":      [370, 300], // gæt
  "West Kalaga":  [345, 330], // gæt

  // ---------- Port Gellhorn ----------
  "North of Port Gellhorn": [301, 366],
  "South of Port Gellhorn": [311, 425]
};

// Farven på nålen for hver type butik.
const typeFarver = {
  "Clothing":       "#ff3d9a",
  "Shoes":          "#ff8a3d",
  "Gas station":    "#ffd23f",
  "Gun store":      "#ff4545",
  "Mod shop":       "#3ee8ff",
  "Pay 'n' Spray":  "#7cff6b",
  "Car wash":       "#5aa8ff",
  "Electronics":    "#b57bff",
  "Tattoo":         "#f6e9ff",
  "Barber & Salon": "#00d9a3"
};


// Logoet på hver nål.
const typeLogoer = {
  "Clothing":       "👕",
  "Shoes":          "👟",
  "Gas station":    "⛽",
  "Gun store":      "🔫",
  "Mod shop":       "🔧",
  "Pay 'n' Spray":  "🎨",
  "Car wash":       "🧽",
  "Electronics":    "📱",
  "Tattoo":         "🐉",
  "Barber & Salon": "💈"
};

// Finder butikkens område, fx "Ocean Beach" fra "Ocean Beach, Vice City".
function omraadeAf(butik) {
  const f = butik.fakta.find((f) => f.navn === "Area");
  const del = f ? f.vaerdi.split(",")[0].trim() : butik.region;
  return steder[del] ? del : butik.region;
}

// Hver butik får en nøgle, fx "Slinger|Southside, Vice City".
// Er der to ens butikker i samme område, får nr. 2 " #2" bagpå.
const butikNoegler = (() => {
  const taeller = {};
  return butikker.map((b) => {
    const f = b.fakta.find((f) => f.navn === "Area");
    let n = b.navn + "|" + (f ? f.vaerdi : "");
    taeller[n] = (taeller[n] || 0) + 1;
    if (taeller[n] > 1) n += " #" + taeller[n];
    return n;
  });
})();

// Placeringer, man selv har flyttet på kortet (gemt i browseren).
const gemteNoegle = "gta6-butik-placeringer";
function hentFlyttede() {
  try {
    return JSON.parse(localStorage.getItem(gemteNoegle)) || {};
  } catch (e) {
    return {};
  }
}

// Hvor hver butik står: først det man selv har flyttet,
// så data/butik-placeringer.js, ellers midt i området.
const butikPunkter = (() => {
  const flyttede = hentFlyttede();
  const faste = typeof placeringer === "object" ? placeringer : {};
  return butikker.map((b, i) => {
    const omraade = omraadeAf(b);
    const p = flyttede[butikNoegler[i]] || faste[butikNoegler[i]] || steder[omraade] || steder["Vice City"];
    return { x: p[0], y: p[1], omraade, flyttet: !!flyttede[butikNoegler[i]] };
  });
})();

// Gemmer en ny placering for en butik.
function gemPlacering(i, x, y) {
  const flyttede = hentFlyttede();
  flyttede[butikNoegler[i]] = [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
  localStorage.setItem(gemteNoegle, JSON.stringify(flyttede));
  butikPunkter[i].x = x;
  butikPunkter[i].y = y;
  butikPunkter[i].flyttet = true;
}

// Laver om fra x/y til den slags punkt, kortet (Leaflet) forstår.
function kortPunkt(x, y) {
  return L.latLng(-y, x);
}

// Og tilbage igen.
function fraKortPunkt(latlng) {
  return { x: latlng.lng, y: -latlng.lat };
}

// Laver et kort i et element på siden. Kortet kan zoomes og trækkes.
function lavLandkort(elementId, valg = {}) {
  const kort = L.map(elementId, {
    crs: L.CRS.Simple,
    minZoom: 0,
    maxZoom: 6,
    zoomSnap: 0.25,
    attributionControl: true,
    zoomControl: valg.zoomKnapper !== false,
    maxBounds: L.latLngBounds(kortPunkt(120, 880), kortPunkt(880, 120)),
    maxBoundsViscosity: 0.8
  });

  L.tileLayer("billeder/kort/{z}/{z},{y},{x}.jpg", {
    minZoom: 0,
    maxNativeZoom: 4,
    maxZoom: 6,
    bounds: L.latLngBounds(kortPunkt(168, 800), kortPunkt(832, 168)),
    attribution: 'Map: <a href="https://gtadb.org" target="_blank">gtadb.org</a> (CC BY 4.0) via GTABase'
  }).addTo(kort);

  kort.attributionControl.setPrefix(false);
  kort.fitBounds(L.latLngBounds(kortPunkt(270, 730), kortPunkt(590, 280)));

  // Når man er zoomet langt ud, bliver nålene små prikker uden logo.
  const opdaterStoerrelse = () =>
    kort.getContainer().classList.toggle("langt-ude", kort.getZoom() < 2.5);
  kort.on("zoomend", opdaterStoerrelse);
  opdaterStoerrelse();
  return kort;
}

// Sætter en nål med butikkens logo på kortet.
function lavNaal(lag, i, valgt, kanFlyttes = false) {
  const b = butikker[i];
  const p = butikPunkter[i];
  const ikon = L.divIcon({
    className: "naal-ikon" + (valgt ? " valgt" : "") + (kanFlyttes ? " flytbar" : ""),
    html: `<span style="--farve:${typeFarver[b.type] || "#fff"}">${typeLogoer[b.type] || "🏪"}</span>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  });
  return L.marker(kortPunkt(p.x, p.y), {
    icon: ikon,
    draggable: kanFlyttes,
    zIndexOffset: valgt ? 1000 : 0,
    title: b.navn,
    keyboard: false
  }).addTo(lag);
}
