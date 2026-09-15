import { mkdirSync } from "node:fs";
import sharp from "sharp";

const OUT = "public/categories";
mkdirSync(OUT, { recursive: true });

const W = 1280;
const H = 720;

// --- Shared helpers (SVG scene builders) ------------------------------------

const blob = (cx, cy, r, fill, op, rot = 0) =>
  `<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r * 0.82}" fill="${fill}" opacity="${op}" transform="rotate(${rot} ${cx} ${cy})"/>`;

const softShade = (x, y, w, h) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#000000" opacity="0.10" rx="18"/>`;

function wrap(body, tint) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${tint[0]}"/>
      <stop offset="1" stop-color="${tint[1]}"/>
    </linearGradient>
    <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="28"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${body}
</svg>`;
}

// --- Category scenes ---------------------------------------------------------

const categories = [
  {
    file: "health-household.jpg",
    alt: "Health and household essentials",
    tint: ["#E7F6EE", "#C9EBD8"],
    body: `
    ${blob(950, 180, 190, "#FFFFFF", 0.55)}
    ${blob(180, 600, 220, "#FFFFFF", 0.45)}
    ${softShade(300, 470, 680, 40)}
    <g transform="translate(340 180)">
      <rect x="40" y="120" width="120" height="210" rx="22" fill="#2F9E68"/>
      <rect x="40" y="120" width="120" height="70" rx="22" fill="#FFFFFF" opacity="0.32"/>
      <rect x="78" y="70" width="44" height="46" rx="8" fill="#1C6B45"/>
      <rect x="58" y="200" width="84" height="60" rx="8" fill="#FFFFFF" opacity="0.9"/>
    </g>
    <g transform="translate(540 150)">
      <rect x="0" y="150" width="150" height="180" rx="18" fill="#57B67E"/>
      <rect x="22" y="205" width="106" height="64" rx="10" fill="#FFFFFF" opacity="0.9"/>
      <rect x="45" y="105" width="60" height="45" rx="10" fill="#2F7A52"/>
    </g>
    <g transform="translate(760 210)">
      <rect x="0" y="90" width="130" height="120" rx="16" fill="#8ED1AC"/>
      <rect x="18" y="130" width="94" height="42" rx="8" fill="#FFFFFF" opacity="0.92"/>
    </g>
    <g transform="translate(920 260)" fill="#FFFFFF" opacity="0.85">
      <rect x="0" y="0" width="90" height="70" rx="12"/>
      <rect x="110" y="20" width="70" height="50" rx="12"/>
    </g>`,
  },
  {
    file: "beauty-personal-care.jpg",
    alt: "Beauty and personal care products",
    tint: ["#FBECF3", "#F3D3E3"],
    body: `
    ${blob(1050, 160, 170, "#FFFFFF", 0.55)}
    ${blob(160, 620, 200, "#FFFFFF", 0.4)}
    ${softShade(320, 480, 640, 40)}
    <g transform="translate(360 200)">
      <rect x="0" y="60" width="110" height="270" rx="24" fill="#E2739B"/>
      <rect x="34" y="0" width="42" height="70" rx="10" fill="#B34D74"/>
      <rect x="20" y="160" width="70" height="90" rx="10" fill="#FFFFFF" opacity="0.9"/>
    </g>
    <g transform="translate(540 250)">
      <circle cx="70" cy="70" r="70" fill="#F3A8C3"/>
      <rect x="44" y="120" width="52" height="180" rx="14" fill="#D9648D"/>
      <rect x="58" y="86" width="24" height="40" rx="8" fill="#FFFFFF" opacity="0.9"/>
    </g>
    <g transform="translate(760 300)">
      <rect x="0" y="40" width="140" height="160" rx="20" fill="#FFFFFF"/>
      <rect x="52" y="0" width="36" height="50" rx="8" fill="#C25B82"/>
      <rect x="22" y="90" width="96" height="56" rx="10" fill="#F6D9E5"/>
    </g>
    <g transform="translate(960 350)" fill="#FFFFFF" opacity="0.85">
      <rect x="0" y="0" width="84" height="110" rx="16"/>
      <rect x="24" y="-38" width="36" height="46" rx="8"/>
    </g>`,
  },
  {
    file: "sports-outdoor.jpg",
    alt: "Sports and outdoor essentials",
    tint: ["#E4F0FB", "#C4DDF3"],
    body: `
    ${blob(1000, 170, 180, "#FFFFFF", 0.55)}
    ${blob(150, 610, 210, "#FFFFFF", 0.4)}
    ${softShade(310, 500, 660, 40)}
    <g transform="translate(330 240)">
      <circle cx="110" cy="110" r="110" fill="#FFFFFF"/>
      <path d="M110 0 A110 110 0 0 1 110 220 A55 110 0 0 1 110 0 Z" fill="#E8734A"/>
      <path d="M110 0 A110 110 0 0 0 110 220 A55 110 0 0 0 110 0 Z" fill="#2F6FA8"/>
      <circle cx="110" cy="110" r="16" fill="#FFFFFF"/>
    </g>
    <g transform="translate(640 260)" stroke="#245B8C" stroke-width="26" stroke-linecap="round" fill="none">
      <line x1="0" y1="0" x2="180" y2="180"/>
      <line x1="180" y1="0" x2="0" y2="180"/>
      <circle cx="90" cy="90" r="30" fill="#FFFFFF" stroke="none"/>
    </g>
    <g transform="translate(930 300)" fill="#FFFFFF" opacity="0.9">
      <path d="M0 160 L60 40 Q70 20 90 30 L110 45 L70 160 Z"/>
      <rect x="110" y="60" width="120" height="100" rx="14"/>
    </g>`,
  },
  {
    file: "grocery.jpg",
    alt: "Grocery essentials",
    tint: ["#FBF3E2", "#F3E1BC"],
    body: `
    ${blob(980, 180, 180, "#FFFFFF", 0.55)}
    ${blob(170, 610, 200, "#FFFFFF", 0.4)}
    ${softShade(300, 500, 680, 40)}
    <g transform="translate(340 260)">
      <path d="M20 60 L180 60 L165 200 Q163 220 143 220 L57 220 Q37 220 35 200 Z" fill="#E5A93D"/>
      <path d="M55 60 Q100 -20 145 60" stroke="#B77E1D" stroke-width="16" fill="none" stroke-linecap="round"/>
      <circle cx="100" cy="150" r="34" fill="#FFFFFF" opacity="0.9"/>
    </g>
    <g transform="translate(580 220)">
      <circle cx="70" cy="70" r="70" fill="#E86A4A"/>
      <circle cx="70" cy="70" r="70" fill="#C94F33" opacity="0.35" transform="translate(-18 -12)"/>
      <rect x="62" y="-8" width="16" height="30" rx="8" fill="#6D8F3F"/>
    </g>
    <g transform="translate(760 300)">
      <circle cx="60" cy="60" r="60" fill="#F0C242"/>
      <circle cx="60" cy="60" r="60" fill="#D9A31F" opacity="0.4" transform="translate(16 14)"/>
    </g>
    <g transform="translate(940 340)" fill="#FFFFFF" opacity="0.9">
      <rect x="0" y="30" width="150" height="100" rx="16"/>
      <path d="M30 30 Q75 -30 120 30 Z"/>
    </g>`,
  },
  {
    file: "art-craft.jpg",
    alt: "Art and craft supplies",
    tint: ["#F0ECFB", "#DAD1F3"],
    body: `
    ${blob(1010, 170, 180, "#FFFFFF", 0.55)}
    ${blob(160, 620, 210, "#FFFFFF", 0.4)}
    ${softShade(320, 490, 640, 40)}
    <g transform="translate(360 250)">
      <rect x="0" y="0" width="150" height="190" rx="14" fill="#FFFFFF"/>
      <rect x="16" y="16" width="118" height="120" rx="8" fill="#EFE9FF"/>
      <circle cx="52" cy="52" r="20" fill="#F2B8CD"/>
      <circle cx="96" cy="52" r="20" fill="#B8D8F2"/>
      <circle cx="52" cy="96" r="20" fill="#CDE7BE"/>
      <circle cx="96" cy="96" r="20" fill="#F2DDB8"/>
    </g>
    <g transform="translate(600 230) rotate(30 60 120)">
      <rect x="46" y="0" width="28" height="170" rx="12" fill="#F0B429"/>
      <path d="M46 170 L74 170 L60 210 Z" fill="#E8833A"/>
      <rect x="52" y="-30" width="16" height="36" rx="8" fill="#8C6AD6"/>
    </g>
    <g transform="translate(780 280) rotate(-24 60 120)">
      <rect x="46" y="0" width="28" height="170" rx="12" fill="#5FA8E8"/>
      <path d="M46 170 L74 170 L60 210 Z" fill="#E86A8A"/>
      <rect x="52" y="-30" width="16" height="36" rx="8" fill="#E8B84A"/>
    </g>
    <g transform="translate(950 330)" fill="#FFFFFF" opacity="0.9">
      <path d="M0 110 Q40 60 90 80 L80 130 Q40 150 0 110 Z"/>
      <rect x="95" y="20" width="90" height="110" rx="12"/>
    </g>`,
  },
  {
    file: "tools.jpg",
    alt: "Tools and DIY equipment",
    tint: ["#EAF0F4", "#CBD8E2"],
    body: `
    ${blob(990, 180, 180, "#FFFFFF", 0.55)}
    ${blob(170, 610, 200, "#FFFFFF", 0.4)}
    ${softShade(310, 500, 660, 40)}
    <g transform="translate(340 240) rotate(-18 60 160)">
      <rect x="44" y="70" width="34" height="220" rx="14" fill="#E8963C"/>
      <rect x="30" y="20" width="62" height="60" rx="10" fill="#8A939B"/>
      <circle cx="61" cy="30" r="16" fill="#6A7278"/>
    </g>
    <g transform="translate(590 260) rotate(12 60 160)">
      <rect x="46" y="60" width="30" height="230" rx="13" fill="#4A72B8"/>
      <path d="M34 60 L88 60 L74 0 L48 0 Z" fill="#9AA3AB"/>
      <rect x="40" y="0" width="42" height="16" rx="6" fill="#7A828A"/>
    </g>
    <g transform="translate(800 250)">
      <rect x="0" y="60" width="190" height="140" rx="18" fill="#5B6670"/>
      <rect x="0" y="60" width="190" height="44" rx="18" fill="#767F88"/>
      <rect x="76" y="104" width="38" height="26" rx="8" fill="#E8B23C"/>
      <rect x="20" y="30" width="150" height="40" rx="12" fill="#8A939B"/>
    </g>
    <g transform="translate(1020 330)" fill="#FFFFFF" opacity="0.9">
      <circle cx="50" cy="50" r="50"/>
      <circle cx="130" cy="80" r="34"/>
    </g>`,
  },
];

// --- Render -------------------------------------------------------------------

for (const { file, tint, body } of categories) {
  const svg = wrap(body, tint);

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 82, chromaSubsampling: "4:4:4" })
    .toFile(`${OUT}/${file}`);

  console.log(`Generated ${OUT}/${file}`);
}

console.log("Done.");
