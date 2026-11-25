// Blød fade mellem siderne:
// Når man trykker på et link, toner den nye side langsomt frem
// oven på den gamle, så den ene side glider over i den anden.

const fadeTid = 500; // millisekunder. Større tal = langsommere.

// Fade virker, selv om computeren er sat til "reducer animationer",
// fordi intet bevæger sig rundt – siden skifter bare blødt.
let iGang = false;

document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link || iGang) return;

  // Kun links til vores egne sider, ikke links der åbner i ny fane.
  const href = link.getAttribute("href");
  if (!href || href.startsWith("#") || link.target === "_blank") return;

  e.preventDefault();
  iGang = true;
  fadeTil(link.href);
});

function fadeTil(url) {
  // Den nye side hentes i en usynlig ramme oven på den gamle.
  const ramme = document.createElement("iframe");
  ramme.src = url;
  ramme.setAttribute("aria-hidden", "true");
  ramme.setAttribute("scrolling", "no"); // ingen hvid scrollbar under skiftet
  ramme.style.cssText =
    "position:fixed;inset:0;width:100%;height:100%;border:0;z-index:9999;" +
    "background:var(--nat);opacity:0;transition:opacity " + fadeTid + "ms ease-in-out;";

  let startet = false;
  function start() {
    if (startet) return;
    startet = true;
    ramme.style.opacity = "1"; // starter fade
    neonFej();
    setTimeout(() => {
      window.location.href = url;
    }, fadeTid);
  }

  ramme.onload = () => requestAnimationFrame(start);
  setTimeout(start, 1500); // hvis siden er længe om at hente, går vi bare videre
  document.body.appendChild(ramme);
}

// Neon-striber, der fejer hen over skærmen, mens siden skifter.
// Slås fra, hvis telefonen er sat til "reducer bevægelse".
function neonFej() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const fej = document.createElement("div");
  fej.className = "neon-fej";
  fej.setAttribute("aria-hidden", "true");
  fej.style.cssText =
    "position:fixed;inset:0 -60%;z-index:10000;pointer-events:none;" +
    "background:linear-gradient(105deg,transparent 0 30%,#ff3d9a 30% 38%,#1b0b33 38% 40%," +
    "#3ee8ff 40% 46%,#1b0b33 46% 48%,#ffd23f 48% 51%,transparent 51%);" +
    "filter:drop-shadow(0 0 18px #ff3d9a);";
  document.body.appendChild(fej);
  fej.animate(
    [{ transform: "translateX(-75%)" }, { transform: "translateX(75%)" }],
    { duration: fadeTid - 30, easing: "cubic-bezier(.7,0,.3,1)", fill: "forwards" }
  );
}

// Når man trykker "tilbage" i browseren, kan den gamle side være gemt
// med rammen stadig på. Så rydder vi op.
window.addEventListener("pageshow", () => {
  iGang = false;
  document.querySelectorAll("iframe[aria-hidden], .neon-fej").forEach((r) => r.remove());
});
