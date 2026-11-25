// Tegninger af dyrene i Vice City-stil: en mørk silhuet foran en neon-solnedgang.
// Hver tegning er SVG-figurer på et lærred, der er 100 x 100.
// Navnet skal være præcis det samme som i data/dyr.js.

const dyrTegninger = {
  // ---------- Land animals ----------
  "Florida Panther": `
    <ellipse cx="48" cy="58" rx="26" ry="10"/>
    <circle cx="76" cy="48" r="8"/>
    <path d="M70 43 L72 35 L76 41Z M78 41 L82 34 L84 42Z"/>
    <rect x="26" y="60" width="5" height="25" rx="2"/><rect x="34" y="62" width="5" height="23" rx="2"/>
    <rect x="60" y="60" width="5" height="25" rx="2"/><rect x="67" y="60" width="5" height="25" rx="2"/>
    <path d="M24 56 C8 60 10 80 20 82" fill="none" stroke-width="4"/>`,

  "Deer": `
    <ellipse cx="46" cy="55" rx="22" ry="10"/>
    <path d="M60 50 L70 30 L77 32 L68 56Z"/>
    <ellipse cx="79" cy="32" rx="8" ry="4.5"/>
    <path d="M71 29 L65 23 L73 27Z"/>
    <path d="M73 28 L71 12 M71.5 19 L64 12 M72 23 L79 14" fill="none" stroke-width="2.5"/>
    <rect x="28" y="58" width="4" height="27" rx="2"/><rect x="36" y="60" width="4" height="25" rx="2"/>
    <rect x="56" y="58" width="4" height="27" rx="2"/><rect x="62" y="58" width="4" height="27" rx="2"/>
    <path d="M24 50 l-5 -4" fill="none" stroke-width="4"/>`,

  "Wild Boar": `
    <ellipse cx="44" cy="62" rx="26" ry="15"/>
    <path d="M62 50 L88 62 L87 70 L62 74Z"/>
    <path d="M66 50 L70 41 L74 51Z"/>
    <path d="M30 47 L34 42 L38 47 L42 42 L46 47 L50 43 L54 48" fill="none" stroke-width="3"/>
    <path d="M84 69 q5 -2 3 -8" fill="none" stroke="#fff" stroke-width="2.5"/>
    <rect x="26" y="70" width="6" height="15" rx="2"/><rect x="35" y="72" width="6" height="13" rx="2"/>
    <rect x="53" y="70" width="6" height="15" rx="2"/><rect x="61" y="70" width="6" height="15" rx="2"/>
    <path d="M18 58 q-7 2 -4 9" fill="none" stroke-width="2.5"/>`,

  "Bobcat": `
    <ellipse cx="48" cy="60" rx="22" ry="11"/>
    <circle cx="72" cy="48" r="9"/>
    <path d="M65 43 L66 31 L71 40Z M75 40 L80 30 L80 43Z"/>
    <path d="M27 55 l-7 -5" fill="none" stroke-width="6"/>
    <rect x="30" y="62" width="6" height="23" rx="2"/><rect x="38" y="64" width="6" height="21" rx="2"/>
    <rect x="56" y="62" width="6" height="23" rx="2"/><rect x="63" y="62" width="6" height="23" rx="2"/>
    <path d="M64 55 l-6 4 M80 55 l6 4" fill="none" stroke-width="2"/>`,

  "Raccoon": `
    <ellipse cx="46" cy="66" rx="22" ry="13"/>
    <ellipse cx="70" cy="54" rx="10" ry="8"/>
    <path d="M76 51 L89 58 L76 61Z"/>
    <path d="M63 48 L63 40 L69 46Z M71 46 L74 38 L77 47Z"/>
    <ellipse cx="73" cy="53" rx="6" ry="2.5" fill="#fff" stroke="none" opacity="0.35"/>
    <path d="M25 64 Q10 64 8 80" fill="none" stroke-width="9"/>
    <path d="M25 64 Q10 64 8 80" fill="none" stroke="#fff" stroke-width="9" stroke-dasharray="4 4" stroke-linecap="butt" opacity="0.3"/>
    <rect x="30" y="74" width="6" height="11" rx="2"/><rect x="40" y="75" width="6" height="10" rx="2"/>
    <rect x="54" y="74" width="6" height="11" rx="2"/><rect x="62" y="72" width="6" height="13" rx="2"/>`,

  "Fox": `
    <ellipse cx="46" cy="58" rx="20" ry="8"/>
    <path d="M60 54 L72 43 L91 53 L72 57Z"/>
    <path d="M66 47 L66 33 L72 44Z M70 45 L76 32 L77 46Z"/>
    <path d="M28 56 Q6 50 4 72 Q18 64 30 62Z"/>
    <rect x="32" y="60" width="3.5" height="25" rx="1.5"/><rect x="39" y="61" width="3.5" height="24" rx="1.5"/>
    <rect x="54" y="60" width="3.5" height="25" rx="1.5"/><rect x="60" y="60" width="3.5" height="25" rx="1.5"/>`,

  "Squirrel": `
    <path d="M44 80 C18 80 14 42 32 34 C42 30 46 42 38 46 C30 52 32 68 46 70Z"/>
    <ellipse cx="54" cy="64" rx="11" ry="16"/>
    <circle cx="58" cy="44" r="8"/>
    <path d="M54 38 L55 30 L59 37Z"/>
    <path d="M64 44 L70 47 L63 48Z"/>
    <circle cx="64" cy="58" r="4" fill="#fff" stroke="none" opacity="0.45"/>
    <ellipse cx="54" cy="81" rx="10" ry="4"/>
    <rect x="0" y="84" width="100" height="5" rx="2.5"/>`,

  "Beaver": `
    <ellipse cx="46" cy="64" rx="22" ry="14"/>
    <circle cx="68" cy="56" r="10"/>
    <ellipse cx="17" cy="77" rx="13" ry="5" transform="rotate(-15 17 77)"/>
    <circle cx="64" cy="47" r="3"/>
    <rect x="74" y="62" width="4" height="5" fill="#fff" stroke="none" opacity="0.8"/>
    <rect x="34" y="74" width="7" height="11" rx="3"/><rect x="54" y="74" width="7" height="11" rx="3"/>`,

  "Otter": `
    <ellipse cx="50" cy="64" rx="28" ry="8"/>
    <circle cx="80" cy="58" r="7.5"/>
    <path d="M24 62 L4 70 L24 68Z"/>
    <path d="M84 60 l8 -1 M84 62 l8 2" fill="none" stroke-width="1.2"/>
    <rect x="34" y="68" width="6" height="12" rx="3"/><rect x="62" y="68" width="6" height="12" rx="3"/>
    <path d="M0 86 Q12 82 25 86 T50 86 T75 86 T100 86" fill="none" stroke-width="2"/>`,

  "Opossum": `
    <ellipse cx="48" cy="62" rx="20" ry="11"/>
    <path d="M62 54 L87 63 L62 70Z"/>
    <circle cx="66" cy="51" r="4"/>
    <path d="M29 63 Q10 66 12 80 Q14 87 21 83" fill="none" stroke-width="2.5"/>
    <rect x="34" y="70" width="5" height="15" rx="2"/><rect x="42" y="71" width="5" height="14" rx="2"/>
    <rect x="54" y="70" width="5" height="15" rx="2"/><rect x="60" y="69" width="5" height="16" rx="2"/>`,

  "Armadillo": `
    <path d="M24 72 A26 22 0 0 1 74 72Z"/>
    <path d="M36 54 L36 72 M44 51 L44 72 M52 51 L52 72 M60 54 L60 72" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.35"/>
    <path d="M70 64 L90 70 L70 73Z"/>
    <path d="M71 64 L72 56 L76 63Z"/>
    <path d="M27 68 L6 78 L27 73Z"/>
    <rect x="30" y="71" width="6" height="12" rx="2"/><rect x="60" y="71" width="6" height="12" rx="2"/>`,

  "Rhesus Monkey": `
    <path d="M36 74 Q14 82 16 60 Q17 50 24 52" fill="none" stroke-width="3.5"/>
    <ellipse cx="48" cy="62" rx="14" ry="17"/>
    <circle cx="52" cy="38" r="10"/>
    <circle cx="42" cy="37" r="3.5"/><circle cx="62" cy="37" r="3.5"/>
    <ellipse cx="54" cy="40" rx="6" ry="5" fill="#fff" stroke="none" opacity="0.3"/>
    <path d="M58 56 Q70 62 66 76" fill="none" stroke-width="6"/>
    <ellipse cx="44" cy="82" rx="12" ry="4"/>
    <rect x="0" y="84" width="100" height="5" rx="2.5"/>`,

  "Rat": `
    <ellipse cx="46" cy="68" rx="18" ry="10"/>
    <path d="M59 61 L81 70 L59 75Z"/>
    <circle cx="60" cy="59" r="4.5"/>
    <path d="M29 70 Q10 72 8 84" fill="none" stroke-width="2.5"/>
    <path d="M80 70 l7 -2 M80 71 l7 2" fill="none" stroke-width="1"/>
    <rect x="38" y="75" width="4" height="9" rx="2"/><rect x="54" y="74" width="4" height="10" rx="2"/>`,

  "Cow": `
    <rect x="18" y="42" width="54" height="26" rx="11"/>
    <rect x="68" y="36" width="16" height="22" rx="7"/>
    <path d="M70 38 Q66 30 62 31 M82 38 Q86 30 90 31" fill="none" stroke-width="3"/>
    <ellipse cx="34" cy="52" rx="7" ry="5" fill="#fff" stroke="none" opacity="0.3"/>
    <ellipse cx="54" cy="58" rx="6" ry="4" fill="#fff" stroke="none" opacity="0.3"/>
    <rect x="22" y="62" width="6" height="23" rx="2"/><rect x="31" y="63" width="6" height="22" rx="2"/>
    <rect x="56" y="62" width="6" height="23" rx="2"/><rect x="64" y="62" width="6" height="23" rx="2"/>
    <path d="M19 48 Q12 58 14 70" fill="none" stroke-width="2"/>`,

  "Wild Cat": `
    <ellipse cx="46" cy="64" rx="16" ry="19"/>
    <circle cx="50" cy="40" r="10"/>
    <path d="M42 34 L41 22 L48 31Z M53 31 L60 22 L59 35Z"/>
    <path d="M58 24 l-2 4" fill="none" stroke="#fff" stroke-width="2" opacity="0.5"/>
    <path d="M32 74 Q20 86 38 84 L60 84" fill="none" stroke-width="4"/>
    <ellipse cx="46" cy="83" rx="13" ry="3"/>`,

  "Dog": `
    <ellipse cx="46" cy="58" rx="20" ry="10"/>
    <ellipse cx="70" cy="45" rx="9" ry="8"/>
    <rect x="74" y="44" width="13" height="7" rx="3"/>
    <path d="M64 40 Q60 48 63 54 L67 44Z"/>
    <path d="M26 54 Q18 44 22 36" fill="none" stroke-width="4"/>
    <rect x="30" y="61" width="5" height="24" rx="2"/><rect x="38" y="62" width="5" height="23" rx="2"/>
    <rect x="54" y="61" width="5" height="24" rx="2"/><rect x="61" y="60" width="5" height="25" rx="2"/>`,

  "Cat": `
    <ellipse cx="48" cy="60" rx="20" ry="9"/>
    <circle cx="70" cy="48" r="8"/>
    <path d="M64 43 L64 33 L70 40Z M72 40 L77 32 L78 44Z"/>
    <path d="M28 56 Q16 42 24 26" fill="none" stroke-width="4"/>
    <rect x="32" y="62" width="4" height="23" rx="2"/><rect x="39" y="63" width="4" height="22" rx="2"/>
    <rect x="56" y="62" width="4" height="23" rx="2"/><rect x="62" y="61" width="4" height="24" rx="2"/>`,

  // ---------- Birds ----------
  "Flamingo": `
    <ellipse cx="46" cy="42" rx="15" ry="9"/>
    <path d="M32 40 L22 44 L32 46Z"/>
    <path d="M58 38 C72 30 54 16 64 10" fill="none" stroke-width="4"/>
    <circle cx="65" cy="10" r="4"/>
    <path d="M68 9 L74 14 L70 18" fill="none" stroke-width="2.5"/>
    <path d="M46 50 L46 88" fill="none" stroke-width="2.5"/>
    <path d="M47 50 L50 64 L40 60" fill="none" stroke-width="2.5"/>`,

  "Brown Pelican": `
    <ellipse cx="44" cy="58" rx="22" ry="12"/>
    <path d="M24 56 L10 62 L24 63Z"/>
    <path d="M58 52 Q62 42 64 38" fill="none" stroke-width="7"/>
    <circle cx="66" cy="36" r="6.5"/>
    <path d="M70 33 L94 41 L88 47 Q78 52 69 43Z"/>
    <rect x="40" y="68" width="3" height="16"/><rect x="48" y="68" width="3" height="16"/>
    <rect x="20" y="84" width="50" height="4" rx="2"/>`,

  "Heron": `
    <ellipse cx="44" cy="46" rx="15" ry="9" transform="rotate(-12 44 46)"/>
    <path d="M30 50 L18 58 L32 52Z"/>
    <path d="M56 40 C68 34 56 24 63 16" fill="none" stroke-width="3.5"/>
    <circle cx="64" cy="15" r="4.5"/>
    <path d="M67 13 L86 18 L67 18Z"/>
    <path d="M42 54 L40 88 M48 54 L50 88" fill="none" stroke-width="2"/>`,

  "Roseate Spoonbill": `
    <ellipse cx="46" cy="50" rx="17" ry="11"/>
    <path d="M30 50 L18 56 L32 56Z"/>
    <path d="M60 44 Q64 38 64 34" fill="none" stroke-width="5"/>
    <circle cx="65" cy="33" r="5.5"/>
    <path d="M69 34 L84 44" fill="none" stroke-width="2.5"/>
    <circle cx="86" cy="46" r="4"/>
    <path d="M42 60 L40 88 M50 60 L52 88" fill="none" stroke-width="2"/>`,

  "Crane": `
    <ellipse cx="44" cy="44" rx="17" ry="10"/>
    <path d="M28 40 Q16 44 22 54 Q28 50 32 48Z"/>
    <path d="M58 40 L70 14" fill="none" stroke-width="3.5"/>
    <circle cx="71" cy="13" r="4.5"/>
    <path d="M74 12 L88 16 L74 15Z"/>
    <circle cx="71" cy="10" r="2" fill="#ff3d9a" stroke="none"/>
    <path d="M42 54 L40 88 M48 54 L50 88" fill="none" stroke-width="2"/>`,

  "Duck": `
    <path d="M20 64 Q22 48 44 50 L62 50 Q64 36 73 38 Q80 40 78 47 L88 49 L77 53 Q76 64 60 68 L30 68Z"/>
    <path d="M30 56 Q42 52 56 58" fill="none" stroke="#fff" stroke-width="2" opacity="0.35"/>
    <path d="M0 74 Q12 70 25 74 T50 74 T75 74 T100 74" fill="none" stroke-width="2"/>
    <path d="M0 84 Q12 80 25 84 T50 84 T75 84 T100 84" fill="none" stroke-width="2" opacity="0.6"/>`,

  // Mågen står på fortovet i Vice City og stjæler pomfritter.
  "Seagull": `
    <ellipse cx="40" cy="69" rx="16" ry="9" transform="rotate(-8 40 69)"/>
    <path d="M26 69 L11 73 L26 75Z"/>
    <path d="M30 64 Q40 60 50 66" fill="none" stroke="#fff" stroke-width="2" opacity="0.4"/>
    <path d="M50 64 L55 58" fill="none" stroke-width="8"/>
    <circle cx="57" cy="55" r="6.5"/>
    <path d="M62 54 L71 57 L62 59Z" fill="#ffd23f" stroke="none"/>
    <path d="M67 56 L76 48" fill="none" stroke="#ffd23f" stroke-width="2.5"/>
    <path d="M38 77 L37 85 M45 77 L46 85" fill="none" stroke-width="2"/>
    <g fill="none" stroke="#ffd23f" stroke-width="2.5">
      <path d="M75 68 L73 56 M79 68 L79 53 M83 68 L84 55 M87 68 L90 58"/>
    </g>
    <path d="M72 67 L92 67 L89 85 L75 85Z" fill="#ff3d9a" stroke="none"/>
    <path d="M77 72 L87 72" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.7"/>
    <path d="M58 84 L66 83" fill="none" stroke="#ffd23f" stroke-width="2.5"/>`,

  "Pigeon": `
    <ellipse cx="48" cy="58" rx="21" ry="13"/>
    <path d="M60 50 Q64 40 66 38" fill="none" stroke-width="9"/>
    <circle cx="68" cy="38" r="7"/>
    <path d="M74 37 L81 40 L74 41Z"/>
    <path d="M29 56 L10 62 L29 66Z"/>
    <path d="M44 70 L42 82 M52 70 L54 82" fill="none" stroke-width="2"/>
    <rect x="30" y="82" width="40" height="3" rx="1.5"/>`,

  "Canada Goose": `
    <ellipse cx="42" cy="62" rx="23" ry="12"/>
    <path d="M22 58 L10 62 L22 66Z"/>
    <path d="M58 56 Q64 38 70 30" fill="none" stroke-width="5"/>
    <ellipse cx="73" cy="28" rx="7.5" ry="4.5"/>
    <path d="M79 27 L88 29 L79 31Z"/>
    <ellipse cx="71" cy="30" rx="3" ry="2" fill="#fff" stroke="none" opacity="0.7"/>
    <path d="M38 73 L36 85 M46 73 L48 85" fill="none" stroke-width="2.5"/>`,

  "Cormorant": `
    <path d="M45 48 L12 32 L18 50 L14 62 L45 58Z"/>
    <path d="M55 48 L88 32 L82 50 L86 62 L55 58Z"/>
    <ellipse cx="50" cy="56" rx="8" ry="17"/>
    <path d="M50 40 Q51 33 52 30" fill="none" stroke-width="5"/>
    <circle cx="53" cy="29" r="5"/>
    <path d="M57 28 L68 30 L66 33" fill="none" stroke-width="2"/>
    <rect x="26" y="78" width="48" height="5" rx="2.5"/>`,

  "Bald Eagle": `
    <path d="M4 50 Q26 32 45 44 L55 44 Q74 32 96 50 Q76 47 60 56 L50 62 L40 56 Q24 47 4 50Z"/>
    <path d="M44 60 L40 74 L50 70 L60 74 L56 60Z" fill="#fff" stroke="none" opacity="0.85"/>
    <circle cx="50" cy="40" r="6" fill="#fff" stroke="none" opacity="0.9"/>
    <path d="M50 44 L50 48" fill="none" stroke="#ffd23f" stroke-width="2.5"/>`,

  "American Crow": `
    <ellipse cx="48" cy="56" rx="19" ry="11" transform="rotate(-10 48 56)"/>
    <circle cx="67" cy="43" r="7.5"/>
    <path d="M73 40 L88 44 L73 47Z"/>
    <path d="M31 58 L10 66 L32 64Z"/>
    <path d="M46 66 L44 82 M54 65 L56 82" fill="none" stroke-width="2"/>
    <rect x="34" y="82" width="34" height="3" rx="1.5"/>`,

  "Caspian Tern": `
    <path d="M8 38 Q32 32 46 48 Q60 32 92 36 Q66 44 56 56 L46 56 Q34 44 8 38Z"/>
    <path d="M46 56 L38 74 L46 66 L50 76 L54 66 L50 56Z"/>
    <circle cx="50" cy="48" r="5"/>
    <path d="M50 52 L52 62" fill="none" stroke="#ff3d9a" stroke-width="3"/>`,

  "Cubalaya Chicken": `
    <path d="M34 54 Q14 56 10 84 Q20 70 36 64Z"/>
    <ellipse cx="46" cy="58" rx="16" ry="12"/>
    <path d="M56 50 Q60 42 62 40" fill="none" stroke-width="7"/>
    <circle cx="63" cy="38" r="6"/>
    <path d="M59 33 L61 28 L63 32 L65 27 L67 33Z" fill="#ff3d9a" stroke="none"/>
    <path d="M68 38 L74 40 L68 41Z"/>
    <ellipse cx="66" cy="45" rx="2" ry="3" fill="#ff3d9a" stroke="none"/>
    <path d="M44 70 L42 84 M50 70 L52 84" fill="none" stroke-width="2.5"/>`,

  // ---------- Reptiles & amphibians ----------
  "American Alligator": `
    <path d="M4 70 Q24 62 50 62 L90 64 Q94 66 90 68 L50 72 Q24 76 4 70Z"/>
    <path d="M30 62 L33 58 L36 62 L39 58 L42 62 L45 58 L48 62" fill="none" stroke-width="2"/>
    <circle cx="62" cy="61" r="2.5"/>
    <path d="M38 72 L34 80 M58 71 L62 80" fill="none" stroke-width="4"/>
    <path d="M0 84 Q12 80 25 84 T50 84 T75 84 T100 84" fill="none" stroke-width="2" opacity="0.6"/>`,

  "American Crocodile": `
    <path d="M4 68 Q24 60 50 60 L62 60 L94 52 L66 64 L94 68 L62 70 Q30 76 4 68Z"/>
    <path d="M70 58 L72 61 M76 57 L78 60 M82 55 L84 58 M70 66 L72 63 M76 67 L78 64 M82 67 L84 64" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.8"/>
    <circle cx="58" cy="58" r="2.5"/>
    <path d="M36 71 L32 80 M54 70 L58 80" fill="none" stroke-width="4"/>
    <path d="M0 84 Q12 80 25 84 T50 84 T75 84 T100 84" fill="none" stroke-width="2" opacity="0.6"/>`,

  "Green Iguana": `
    <rect x="0" y="66" width="100" height="5" rx="2.5" transform="rotate(-6 50 68)"/>
    <ellipse cx="50" cy="56" rx="17" ry="6.5"/>
    <ellipse cx="70" cy="51" rx="8" ry="5.5"/>
    <path d="M68 56 Q70 62 64 60Z"/>
    <path d="M36 50 L38 45 L41 50 L43 45 L46 50 L48 45 L51 50 L53 45 L56 50 L58 45 L61 50" fill="none" stroke-width="1.8"/>
    <path d="M34 57 Q14 60 10 74 Q8 82 16 80" fill="none" stroke-width="3"/>
    <path d="M40 60 L36 68 M60 60 L64 66" fill="none" stroke-width="3"/>`,

  "Snake": `
    <path d="M10 80 C28 62 48 90 60 68 C68 54 50 48 60 34" fill="none" stroke-width="7"/>
    <ellipse cx="64" cy="30" rx="7" ry="4.5" transform="rotate(-30 64 30)"/>
    <path d="M69 26 L78 22 M78 22 L82 20 M78 22 L81 25" fill="none" stroke="#ff3d9a" stroke-width="1.5"/>`,

  "Cane Toad": `
    <ellipse cx="50" cy="66" rx="24" ry="14"/>
    <circle cx="60" cy="52" r="5"/><circle cx="72" cy="55" r="5"/>
    <path d="M28 70 Q16 74 20 84 L32 84 M66 76 Q74 82 80 84" fill="none" stroke-width="5"/>
    <circle cx="40" cy="60" r="1.6" fill="#fff" stroke="none" opacity="0.4"/>
    <circle cx="48" cy="56" r="1.6" fill="#fff" stroke="none" opacity="0.4"/>
    <circle cx="36" cy="68" r="1.6" fill="#fff" stroke="none" opacity="0.4"/>
    <circle cx="54" cy="64" r="1.6" fill="#fff" stroke="none" opacity="0.4"/>`,

  "Sea Turtle": `
    <path d="M36 44 L10 30 L16 42 L32 54Z"/>
    <path d="M64 44 L90 30 L84 42 L68 54Z"/>
    <path d="M38 64 L28 76 L42 70Z M62 64 L72 76 L58 70Z"/>
    <ellipse cx="50" cy="52" rx="19" ry="16"/>
    <circle cx="50" cy="31" r="6"/>
    <path d="M50 40 L50 64 M38 46 L62 58 M62 46 L38 58" fill="none" stroke="#fff" stroke-width="1.2" opacity="0.3"/>`,

  "Chameleon": `
    <rect x="0" y="70" width="100" height="5" rx="2.5"/>
    <ellipse cx="50" cy="56" rx="17" ry="10"/>
    <path d="M36 48 Q50 40 62 48" fill="none" stroke-width="3"/>
    <path d="M64 50 L80 48 L72 38Z"/>
    <path d="M66 54 L80 50 L74 60Z"/>
    <circle cx="70" cy="50" r="3.5" fill="#fff" stroke="none" opacity="0.4"/>
    <path d="M34 58 Q22 62 22 70 Q22 76 28 74 Q32 70 28 68" fill="none" stroke-width="3"/>
    <path d="M42 64 L40 71 M58 64 L60 71" fill="none" stroke-width="3"/>`,

  // ---------- Sea animals ----------
  "Dolphin": `
    <path d="M14 66 Q36 30 76 38 L90 41 L77 45 Q60 45 44 56 Q30 64 26 74 L16 80 L20 70Z"/>
    <path d="M48 38 L54 26 L58 40Z"/>
    <path d="M52 50 L46 60 L58 52Z"/>`,

  "Manatee": `
    <ellipse cx="50" cy="56" rx="30" ry="14"/>
    <circle cx="78" cy="54" r="10"/>
    <ellipse cx="15" cy="58" rx="9" ry="11"/>
    <path d="M66 64 Q68 74 62 76" fill="none" stroke-width="5"/>
    <circle cx="82" cy="51" r="1.4" fill="#fff" stroke="none" opacity="0.6"/>`,

  "Eel": `
    <path d="M6 66 C22 46 38 86 54 62 C64 48 74 54 82 46" fill="none" stroke-width="8"/>
    <ellipse cx="84" cy="44" rx="7" ry="5" transform="rotate(-30 84 44)"/>
    <circle cx="85" cy="42" r="1.5" fill="#fff" stroke="none" opacity="0.7"/>`,

  "Jellyfish": `
    <path d="M26 46 A24 22 0 0 1 74 46 Q62 52 50 46 Q38 52 26 46Z"/>
    <path d="M32 48 Q28 60 34 70 Q38 80 32 90 M44 50 Q40 62 46 72 Q50 82 44 92 M56 50 Q52 62 58 72 Q62 82 56 92 M68 48 Q64 60 70 70 Q74 80 68 90" fill="none" stroke-width="2.5"/>`,

  "Manta Ray": `
    <path d="M50 28 Q70 38 96 46 Q72 52 56 62 L52 88 L48 88 L44 62 Q28 52 4 46 Q30 38 50 28Z"/>
    <path d="M44 30 L42 22 M56 30 L58 22" fill="none" stroke-width="3"/>`,

  "Shark": `
    <path d="M10 58 Q30 46 66 50 L92 56 L70 62 Q40 68 10 58Z"/>
    <path d="M44 49 L52 30 L60 50Z"/>
    <path d="M14 58 L2 42 L8 58 L2 72Z"/>
    <path d="M58 60 L50 72 L66 61Z"/>
    <path d="M74 54 L73 58 M77 54 L76 58 M80 54 L79 58" fill="none" stroke="#fff" stroke-width="1" opacity="0.5"/>`,

  "Whale": `
    <path d="M14 58 Q22 40 60 40 Q88 42 94 58 Q82 72 50 72 Q26 70 14 58Z"/>
    <path d="M16 58 L2 46 L8 58 L2 70Z"/>
    <path d="M60 68 L52 80 L68 70Z"/>
    <circle cx="84" cy="56" r="1.6" fill="#fff" stroke="none" opacity="0.6"/>`,

  "Lionfish": `
    <path d="M40 48 L32 22 M46 46 L44 18 M52 46 L56 18 M58 48 L66 22 M64 50 L74 30" fill="none" stroke-width="2"/>
    <path d="M44 62 L34 84 M52 62 L52 86 M60 62 L68 82" fill="none" stroke-width="2"/>
    <ellipse cx="54" cy="55" rx="17" ry="9"/>
    <path d="M38 55 L24 44 L26 66Z"/>
    <path d="M70 55 L80 52 L80 58Z"/>
    <path d="M46 47 L46 63 M54 46 L54 64 M62 47 L62 63" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.35"/>
    <circle cx="66" cy="53" r="1.6" fill="#fff" stroke="none" opacity="0.7"/>`,

  "Fish": `
    <path d="M18 54 Q42 32 70 54 Q42 76 18 54Z"/>
    <path d="M68 54 L88 40 L83 54 L88 68Z"/>
    <circle cx="28" cy="51" r="2.2" fill="#fff" stroke="none" opacity="0.8"/>
    <path d="M10 30 a3 3 0 1 0 0.1 0 M16 20 a2 2 0 1 0 0.1 0" fill="none" stroke-width="1.2" opacity="0.6"/>`
};

// ---------- Flere tegninger ----------
Object.assign(dyrTegninger, {
  "Tiger": dyrTegninger["Florida Panther"] + `
    <path d="M36 50 L38 60 M44 49 L45 63 M52 49 L52 63 M60 50 L59 61" fill="none" stroke="#ff8a3d" stroke-width="2.5"/>
    <path d="M72 44 L76 47 M73 51 L77 50" fill="none" stroke="#ff8a3d" stroke-width="1.5"/>`,

  "Bear": `
    <ellipse cx="44" cy="60" rx="27" ry="16"/>
    <circle cx="74" cy="52" r="10"/>
    <path d="M80 49 L92 55 L82 60Z"/>
    <circle cx="69" cy="43" r="4"/><circle cx="78" cy="42" r="4"/>
    <rect x="22" y="66" width="9" height="19" rx="3"/><rect x="34" y="68" width="9" height="17" rx="3"/>
    <rect x="52" y="66" width="9" height="19" rx="3"/><rect x="62" y="64" width="9" height="21" rx="3"/>`,

  "Crab": `
    <ellipse cx="50" cy="70" rx="16" ry="10"/>
    <path d="M38 66 Q28 60 26 52 M62 66 Q72 60 74 52" fill="none" stroke-width="4"/>
    <path d="M19 48 Q26 41 33 47 L26 54Z M81 48 Q74 41 67 47 L74 54Z"/>
    <path d="M36 74 L24 82 M38 77 L28 86 M64 74 L76 82 M62 77 L72 86" fill="none" stroke-width="2.5"/>
    <path d="M45 61 L44 54 M55 61 L56 54" fill="none" stroke-width="2"/>
    <circle cx="44" cy="53" r="2.2"/><circle cx="56" cy="53" r="2.2"/>`,

  "Starfish": `
    <path d="M50 54 L54.1 66.3 L67.1 66.4 L56.7 74.2 L60.6 86.6 L50 79 L39.4 86.6 L43.3 74.2 L32.9 66.4 L45.9 66.3Z" stroke-width="3"/>
    <g fill="#fff" stroke="none" opacity="0.35">
      <circle cx="50" cy="62" r="1.2"/><circle cx="58" cy="70" r="1.2"/><circle cx="42" cy="70" r="1.2"/><circle cx="54" cy="79" r="1.2"/><circle cx="46" cy="79" r="1.2"/>
    </g>`,

  "Songbird": `
    <rect x="0" y="72" width="100" height="4" rx="2"/>
    <ellipse cx="48" cy="60" rx="12" ry="9"/>
    <circle cx="59" cy="51" r="6.5"/>
    <path d="M65 50 L72 52 L65 53Z"/>
    <path d="M37 61 L22 68 L38 66Z"/>
    <path d="M46 68 L45 72 M51 68 L52 72" fill="none" stroke-width="1.5"/>
    <path d="M42 57 Q48 54 54 58" fill="none" stroke="#fff" stroke-width="1.2" opacity="0.4"/>`,

  "Parrot": `
    <rect x="0" y="68" width="100" height="5" rx="2.5"/>
    <path d="M46 62 L38 92 L52 64Z"/>
    <ellipse cx="50" cy="50" rx="10" ry="15"/>
    <circle cx="52" cy="32" r="8"/>
    <path d="M58 29 Q68 31 63 41 L58 37Z"/>
    <path d="M44 44 Q50 54 46 62" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.35"/>
    <path d="M47 64 L46 68 M53 64 L54 68" fill="none" stroke-width="2"/>`,

  "Tortoise": `
    <path d="M26 76 Q28 50 50 50 Q72 50 74 76Z"/>
    <path d="M38 56 L40 74 M50 51 L50 76 M62 56 L60 74 M28 66 H72" fill="none" stroke="#fff" stroke-width="1.2" opacity="0.3"/>
    <path d="M71 70 Q80 60 88 66 Q86 74 74 74Z"/>
    <rect x="30" y="74" width="7" height="11" rx="3"/><rect x="62" y="74" width="7" height="11" rx="3"/>
    <path d="M27 72 L20 76" fill="none" stroke-width="3"/>`,

  "Peacock": `
    <ellipse cx="44" cy="44" rx="34" ry="30"/>
    <g fill="#3ee8ff" stroke="none" opacity="0.85">
      <circle cx="20" cy="36" r="3"/><circle cx="32" cy="24" r="3"/><circle cx="48" cy="18" r="3"/><circle cx="64" cy="24" r="3"/>
      <circle cx="24" cy="54" r="3"/><circle cx="40" cy="38" r="3"/><circle cx="56" cy="36" r="3"/><circle cx="70" cy="44" r="3"/>
    </g>
    <ellipse cx="60" cy="66" rx="11" ry="9"/>
    <path d="M64 60 Q66 48 68 42" fill="none" stroke-width="5"/>
    <circle cx="69" cy="40" r="4.5"/>
    <path d="M73 40 L78 42 L73 43Z"/>
    <path d="M67 35 L65 29 M69 35 L69 28 M71 35 L73 29" fill="none" stroke-width="1"/>
    <path d="M58 74 L57 85 M63 74 L64 85" fill="none" stroke-width="2"/>`,

  "Barracuda": `
    <path d="M10 56 Q40 47 78 52 L94 56 L78 60 Q40 65 10 56Z"/>
    <path d="M12 56 L2 46 L6 56 L2 66Z"/>
    <path d="M50 50 L56 42 L60 50Z M44 61 L40 68 L50 62Z"/>
    <path d="M86 56 L84 58 M82 56 L80 58" fill="none" stroke="#fff" stroke-width="1" opacity="0.7"/>
    <circle cx="82" cy="54" r="1.4" fill="#fff" stroke="none" opacity="0.8"/>`,

  "Man O' War": `
    <path d="M28 52 Q30 34 52 36 Q74 38 72 52Z"/>
    <path d="M34 40 Q44 30 50 38 Q56 30 66 40" fill="none" stroke-width="2"/>
    <path d="M34 52 Q30 68 36 80 Q40 90 34 98 M44 52 Q42 70 46 84 Q48 94 44 100 M54 52 Q56 66 52 80 Q50 92 56 100 M64 52 Q68 66 62 78" fill="none" stroke-width="1.8"/>`,

  "Ibis": `
    <ellipse cx="44" cy="46" rx="15" ry="9" transform="rotate(-12 44 46)"/>
    <path d="M30 50 L18 58 L32 52Z"/>
    <path d="M56 40 C66 34 58 24 63 18" fill="none" stroke-width="3.5"/>
    <circle cx="64" cy="17" r="4.5"/>
    <path d="M67 16 Q80 16 86 28" fill="none" stroke-width="2.5"/>
    <path d="M42 54 L40 88 M48 54 L50 88" fill="none" stroke-width="2"/>`,

  "Flying Seabird": `
    <path d="M8 44 Q30 28 48 46 Q66 28 92 42 Q68 38 54 54 L50 57 L46 54 Q32 38 8 44Z"/>
    <ellipse cx="50" cy="52" rx="7" ry="4.5"/>
    <path d="M56 51 L64 53 L56 54Z"/>`
});

// Varianter af tegninger, der allerede findes.
// Hind: en hjort uden gevir.
dyrTegninger["Doe"] = dyrTegninger["Deer"].replace(/<path d="M73 28[^>]*>/, "");
// Plettet (piebald) hjort: hvide pletter på kroppen.
dyrTegninger["Piebald Deer"] = dyrTegninger["Deer"] + `
    <g fill="#fff" stroke="none" opacity="0.85">
      <ellipse cx="38" cy="53" rx="6" ry="4"/><ellipse cx="52" cy="58" rx="5" ry="3.5"/><ellipse cx="66" cy="40" rx="2.5" ry="4"/>
    </g>`;
// Hammerhaj: en haj med et bredt hoved som en hammer.
dyrTegninger["Hammerhead"] = dyrTegninger["Shark"] + `
    <rect x="86" y="45" width="6" height="20" rx="3"/>`;
// Albino-alligator: helt hvid.
dyrTegninger["Albino Alligator"] = `<g fill="#fff" stroke="#fff">` + dyrTegninger["American Alligator"] + `</g>`;

// ---------- Scener ----------
// Hver scene har himmelfarver, om solen skal med, og det der står bag dyret.

const scener = {
  // Vice City: skyline med lys i vinduerne, en palme og et fortov.
  by: {
    farver: ["#ff7ac2", "#ff8a3d", "#ffd23f"], sol: true,
    bag: `
      <path d="M0 74 V54 h7 V46 h9 V58 h6 V40 h11 V60 h7 V50 h9 V36 h8 V56 h9 V46 h11 V60 h8 V50 h8 V74Z" opacity="0.5"/>
      <g fill="#ffd23f" stroke="none" opacity="0.9">
        <rect x="10" y="50" width="2" height="2"/><rect x="27" y="44" width="2" height="2"/><rect x="31" y="50" width="2" height="2"/>
        <rect x="61" y="40" width="2" height="2"/><rect x="64" y="46" width="2" height="2"/><rect x="83" y="52" width="2" height="2"/>
      </g>
      <path d="M90 85 Q88 62 93 44" fill="none" stroke-width="2.5" opacity="0.7"/>
      <path d="M93 44 Q84 38 77 43 M93 44 Q101 37 105 42 M93 44 Q89 34 82 32 M93 44 Q98 32 104 32" fill="none" stroke-width="2" opacity="0.7"/>
      <rect y="85" width="100" height="15"/>
      <rect y="85" width="100" height="1.5" fill="#ff3d9a" stroke="none"/>`
  },
  // Skov: grantræer i baggrunden og græs.
  skov: {
    farver: ["#ffd23f", "#ff8a3d", "#ff3d9a"], sol: true,
    bag: `
      <path d="M2 85 L12 46 L22 85Z M16 85 L28 36 L40 85Z M66 85 L78 40 L90 85Z M82 85 L92 54 L102 85Z" opacity="0.35"/>
      <rect y="85" width="100" height="15"/>
      <path d="M10 85 l2 -5 l2 5 M44 85 l2 -6 l2 6 M76 85 l2 -5 l2 5" fill="none" stroke-width="1.5"/>`
  },
  // Sump: cypres med mos, siv og mørkt vand.
  sump: {
    farver: ["#ffb347", "#e0558f", "#6a2c91"], sol: true,
    bag: `
      <path d="M8 72 L10 32 Q0 30 3 21 Q9 12 18 18 Q26 13 29 23 Q31 31 20 33 L17 72Z" opacity="0.45"/>
      <path d="M6 28 L6 40 M12 30 L12 44 M22 30 L22 38" fill="none" stroke-width="1" opacity="0.45"/>
      <path d="M86 72 L84 48 M90 72 L91 44 M94 72 L97 50" fill="none" stroke-width="1.5" opacity="0.55"/>
      <ellipse cx="84" cy="48" rx="1.5" ry="4" opacity="0.55"/><ellipse cx="91" cy="44" rx="1.5" ry="4" opacity="0.55"/>
      <rect y="70" width="100" height="30" fill="#1b0b33" stroke="none" opacity="0.35"/>
      <path d="M0 78 Q12 75 25 78 T50 78 T75 78 T100 78" fill="none" stroke="#fff" stroke-width="1" opacity="0.3"/>`
  },
  // Strand: havet i baggrunden, sand og en palme.
  strand: {
    farver: ["#ff7ac2", "#ff8a3d", "#ffd23f"], sol: true,
    bag: `
      <rect y="64" width="100" height="20" fill="#2b7bd6" stroke="none" opacity="0.75"/>
      <path d="M0 70 Q12 68 25 70 T50 70 T75 70 T100 70" fill="none" stroke="#fff" stroke-width="1" opacity="0.4"/>
      <rect y="82" width="100" height="18" fill="#ffe0a8" stroke="none"/>
      <path d="M10 82 Q8 58 14 40" fill="none" stroke-width="2.5" opacity="0.7"/>
      <path d="M14 40 Q5 34 -2 39 M14 40 Q22 33 28 38 M14 40 Q10 30 3 28 M14 40 Q19 28 25 28" fill="none" stroke-width="2" opacity="0.7"/>`
  },
  // Mark: hegn og græs ude på landet.
  mark: {
    farver: ["#ffd23f", "#ff8a3d", "#ff3d9a"], sol: true,
    bag: `
      <path d="M0 66 H100 M0 74 H100" fill="none" stroke-width="2" opacity="0.4"/>
      <path d="M8 62 V85 M30 62 V85 M52 62 V85 M74 62 V85 M96 62 V85" fill="none" stroke-width="3" opacity="0.4"/>
      <rect y="85" width="100" height="15"/>
      <path d="M18 85 l2 -5 l2 5 M58 85 l2 -6 l2 6 M86 85 l2 -5 l2 5" fill="none" stroke-width="1.5"/>`
  },
  // Himmel: skyer og byen langt nede.
  himmel: {
    farver: ["#3ee8ff", "#b98cff", "#ff7ac2"], sol: true,
    bag: `
      <g fill="#fff" stroke="none" opacity="0.5">
        <ellipse cx="18" cy="22" rx="12" ry="4.5"/><ellipse cx="26" cy="18" rx="8" ry="5"/>
        <ellipse cx="80" cy="80" rx="14" ry="4.5"/><ellipse cx="88" cy="76" rx="8" ry="5"/>
      </g>
      <path d="M0 100 V94 h8 V90 h6 V95 h8 V88 h7 V94 h10 V91 h8 V96 h9 V89 h7 V94 h10 V92 h12 V100Z" opacity="0.35"/>`
  },
  // Træ: en tyk stamme og blade øverst.
  trae: {
    farver: ["#ffb347", "#ff7ac2", "#6a2c91"], sol: true,
    bag: `
      <g opacity="0.55">
        <circle cx="22" cy="6" r="15"/><circle cx="44" cy="0" r="13"/><circle cx="66" cy="5" r="13"/><circle cx="88" cy="0" r="15"/>
      </g>
      <path d="M0 0 H14 Q10 50 16 100 H0Z" opacity="0.85"/>`
  },
  // Under vandet: lysstråler, sand, tang og bobler.
  havUnder: {
    farver: ["#3ee8ff", "#1d5fb8", "#1b0b33"], sol: false,
    bag: `
      <path d="M20 0 L34 0 L20 72 L8 72Z M58 0 L70 0 L62 72 L48 72Z" fill="#fff" stroke="none" opacity="0.09"/>
      <path d="M0 90 Q25 84 50 90 T100 88 V100 H0Z" opacity="0.6"/>
      <path d="M8 94 Q4 84 10 76 Q14 68 8 60 M92 94 Q96 82 90 74 Q86 66 92 58" fill="none" stroke-width="2.5" opacity="0.5"/>
      <g fill="none" stroke="#fff" stroke-width="0.8" opacity="0.6">
        <circle cx="80" cy="30" r="2"/><circle cx="83" cy="22" r="1.5"/><circle cx="81" cy="15" r="1"/>
      </g>`
  },
  // Over vandet: solnedgang og bølger.
  havOver: {
    farver: ["#ffd23f", "#ff7ac2", "#b98cff"], sol: true,
    bag: `
      <rect y="74" width="100" height="26" fill="#2b5bd6" stroke="none"/>
      <path d="M0 78 Q12 75 25 78 T50 78 T75 78 T100 78 M0 88 Q12 85 25 88 T50 88 T75 88 T100 88" fill="none" stroke="#fff" stroke-width="1" opacity="0.45"/>`
  }
};

// Laver hele billedet: himmel, sol, scene og dyrets silhuet.
// Hvert dyr i data/dyr.js siger selv, hvilken tegning og scene det skal have.
function lavDyrTegning(dyr) {
  const scene = scener[dyr.scene] || scener.skov;
  const farver = scene.farver;
  const id = "bg" + dyr.navn.replace(/\W/g, "");
  const figur = dyrTegninger[dyr.tegning] || `<circle cx="50" cy="60" r="16"/>`;
  const sol = scene.sol ? `
      <circle cx="50" cy="62" r="30" fill="#fff" opacity="0.2"/>
      <rect y="62" width="100" height="2" fill="#1b0b33" opacity="0.15"/>
      <rect y="68" width="100" height="3" fill="#1b0b33" opacity="0.15"/>` : "";
  return `
    <svg viewBox="0 0 100 100" role="img" aria-label="${dyr.navn}">
      <defs>
        <linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${farver[0]}"/>
          <stop offset="0.55" stop-color="${farver[1]}"/>
          <stop offset="1" stop-color="${farver[2]}"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#${id})"/>
      ${sol}
      <g fill="#1b0b33" stroke="#1b0b33" stroke-linecap="round" stroke-linejoin="round">
        ${scene.bag}
        ${figur}
      </g>
    </svg>`;
}
