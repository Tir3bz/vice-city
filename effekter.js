// Effekter til hele siden. Stilen står i effekter.css.
// Sæt den ind på en side med: <script src="effekter.js"></script> (før overgang.js).
(() => {
  const roligt = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mus = matchMedia("(pointer: fine)").matches;
  const farver = ["#ff3d9a", "#3ee8ff", "#ffd23f", "#ff8a3d"];
  const tilfaeldig = (liste) => liste[Math.floor(Math.random() * liste.length)];

  // ---------- Neon-stregen øverst og parallax ----------
  // (Only in Leonida har sin egen streg.)
  let streg = null;
  if (!document.querySelector(".ol-fremskridt")) {
    streg = document.createElement("div");
    streg.className = "fx-fremskridt";
    document.body.appendChild(streg);
  }

  let venter = false;
  function paaScroll() {
    venter = false;
    const y = window.scrollY;
    document.documentElement.style.setProperty("--sy", Math.round(y));
    if (streg) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      streg.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    }
  }
  window.addEventListener("scroll", () => {
    if (!venter) {
      venter = true;
      requestAnimationFrame(paaScroll);
    }
  }, { passive: true });
  paaScroll();

  if (roligt) return; // resten er de vilde effekter

  // ---------- Glitch på overskrifterne ----------
  for (const h of document.querySelectorAll("h1")) {
    if (h.classList.contains("ol-neon")) continue; // den har sin egen neon
    h.dataset.tekst = h.textContent;
    h.classList.add("fx-glitch");
  }

  // ---------- Neon-gnister når man trykker ----------
  document.addEventListener("pointerdown", (e) => {
    if (e.target.closest(".leaflet-container")) return; // ikke når man trækker i kortet
    const plads = e.target.closest("dialog[open]") || document.body;
    const kilde = e.target.closest("[style*='--farve']");
    const farve = (kilde && getComputedStyle(kilde).getPropertyValue("--farve").trim()) || tilfaeldig(farver);

    const ring = document.createElement("div");
    ring.className = "fx-ring";
    ring.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;--c:${farve}`;
    plads.appendChild(ring);
    setTimeout(() => ring.remove(), 650);

    for (let i = 0; i < 10; i++) {
      const v = (Math.PI * 2 * i) / 10 + Math.random() * 0.5;
      const l = 40 + Math.random() * 50;
      const gnist = document.createElement("div");
      gnist.className = "fx-gnist";
      gnist.style.cssText =
        `left:${e.clientX}px;top:${e.clientY}px;--c:${tilfaeldig(farver)};` +
        `--dx:${Math.cos(v) * l}px;--dy:${Math.sin(v) * l}px`;
      plads.appendChild(gnist);
      setTimeout(() => gnist.remove(), 650);
    }
  });

  // ---------- Ting flipper ind, én efter én ----------
  const flipSel = ".flise, .kort, .type-knap, .ol-knap, .sam-flise, .sam-chip";
  let ventende = 0;
  const flipIagttager = new IntersectionObserver((ting) => {
    for (const t of ting) {
      if (!t.isIntersecting) continue;
      const el = t.target;
      flipIagttager.unobserve(el);
      const forsink = Math.min(ventende++, 14) * 45;
      el.style.setProperty("--fx-forsink", forsink + "ms");
      el.classList.add("fx-vis");
      el.classList.remove("fx-skjult");
      // Bagefter fjernes klassen, så elementets egne effekter virker igen.
      setTimeout(() => {
        el.classList.remove("fx-vis");
        el.style.removeProperty("--fx-forsink");
      }, forsink + 900);
    }
    requestAnimationFrame(() => (ventende = 0));
  }, { threshold: 0.1 });

  function klarTilFlip(el) {
    if (el.closest("dialog")) return;
    el.classList.add("fx-skjult");
    flipIagttager.observe(el);
  }
  document.querySelectorAll(flipSel).forEach(klarTilFlip);

  // Nye fliser (fx når man vælger en anden type) flipper også ind.
  new MutationObserver((aendringer) => {
    for (const a of aendringer) {
      for (const n of a.addedNodes) {
        if (n.nodeType !== 1) continue;
        if (n.matches(flipSel)) klarTilFlip(n);
        n.querySelectorAll?.(flipSel).forEach(klarTilFlip);
      }
    }
  }).observe(document.body, { childList: true, subtree: true });

  // ---------- 3D-vip med lysglimt (kun med mus) ----------
  if (mus) {
    const vipSel = ".leonida-feature, .flise, .sektion, .kort, .ol-portraet, .ol-sted-billede, .knap, .sam-flise, .sam-spot-kort";
    const glansSel = ".flise, .kort, .ol-portraet, .sam-flise, .sam-spot-kort";
    let aktiv = null;

    function slip() {
      if (!aktiv) return;
      aktiv.classList.remove("fx-tilter");
      aktiv.style.removeProperty("--rx");
      aktiv.style.removeProperty("--ry");
      aktiv = null;
    }

    document.addEventListener("pointermove", (e) => {
      const el = e.target.closest(vipSel);
      if (el !== aktiv) slip();
      if (!el || el.classList.contains("fx-skjult")) return;
      aktiv = el;
      if (el.matches(glansSel)) el.classList.add("fx-glans");
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty("--ry", ((px - 0.5) * 16).toFixed(2) + "deg");
      el.style.setProperty("--rx", ((0.5 - py) * 16).toFixed(2) + "deg");
      el.style.setProperty("--gx", (px * 100).toFixed(1) + "%");
      el.style.setProperty("--gy", (py * 100).toFixed(1) + "%");
      el.classList.add("fx-tilter");
    });
    document.addEventListener("pointerleave", slip);
  }

  // ---------- Svævende neon-partikler og musens neon-spor ----------
  if (document.body.classList.contains("kort-side")) return; // ikke oven på kortet

  const laerred = document.createElement("canvas");
  laerred.className = "fx-partikler";
  laerred.setAttribute("aria-hidden", "true");
  document.body.appendChild(laerred);
  const ctx = laerred.getContext("2d");
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let B = 0, H = 0;

  function tilpas() {
    B = window.innerWidth;
    H = window.innerHeight;
    laerred.width = B * dpr;
    laerred.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  tilpas();
  window.addEventListener("resize", tilpas);

  // Et lille lysende "billede" for hver farve, som tegnes igen og igen (hurtigt).
  const lys = {};
  for (const f of farver) {
    const c = document.createElement("canvas");
    c.width = c.height = 64;
    const g = c.getContext("2d");
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "#ffffff");
    grad.addColorStop(0.2, f);
    grad.addColorStop(1, "transparent");
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    lys[f] = c;
  }

  const antal = B < 600 ? 22 : 40;
  const partikler = Array.from({ length: antal }, () => ({
    x: Math.random() * B,
    y: Math.random() * H,
    s: 6 + Math.random() * 16,
    fart: 0.15 + Math.random() * 0.45,
    fase: Math.random() * Math.PI * 2,
    farve: tilfaeldig(farver)
  }));

  const spor = [];
  if (mus) {
    document.addEventListener("pointermove", (e) => {
      spor.push({ x: e.clientX, y: e.clientY, liv: 1, farve: spor.length % 2 ? "#3ee8ff" : "#ff3d9a" });
      if (spor.length > 40) spor.shift();
    });
  }

  function tegn(t) {
    requestAnimationFrame(tegn);
    if (document.hidden) return;
    ctx.clearRect(0, 0, B, H);

    for (const p of partikler) {
      p.y -= p.fart;
      p.x += Math.sin(t * 0.0008 + p.fase) * 0.35;
      if (p.y < -30) {
        p.y = H + 30;
        p.x = Math.random() * B;
      }
      ctx.globalAlpha = 0.35 + 0.3 * Math.sin(t * 0.002 + p.fase);
      ctx.drawImage(lys[p.farve], p.x - p.s / 2, p.y - p.s / 2, p.s, p.s);
    }

    for (let i = spor.length - 1; i >= 0; i--) {
      const s = spor[i];
      s.liv -= 0.045;
      if (s.liv <= 0) {
        spor.splice(i, 1);
        continue;
      }
      const st = 26 * s.liv;
      ctx.globalAlpha = s.liv * 0.8;
      ctx.drawImage(lys[s.farve], s.x - st / 2, s.y - st / 2, st, st);
    }
    ctx.globalAlpha = 1;
  }
  requestAnimationFrame(tegn);
})();
