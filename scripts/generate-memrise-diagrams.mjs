import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

// Editable SVG diagrams, rendered to transparent PNGs with librsvg.
// Run: node scripts/generate-memrise-diagrams.mjs
const out = fileURLToPath(
	new URL("../public/assets/images/projects/memrise/", import.meta.url),
);
mkdirSync(out, { recursive: true });
const c = {
	paper: "#F5F7FA",
	ink: "#192631",
	muted: "#59636B",
	line: "#777E83",
	blue: "#0879EF",
	orange: "#FF8A00",
	pink: "#DB20AA",
	blueFill: "#D7E8FA",
	orangeFill: "#F8DEC5",
	pinkFill: "#EDB4E0",
};
const esc = (s) =>
	String(s)
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;");
const text = (
	x,
	y,
	s,
	size = 30,
	weight = 600,
	fill = c.ink,
	anchor = "middle",
) =>
	`<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(
		s,
	)}</text>`;
const rect = (
	x,
	y,
	w,
	h,
	fill = c.paper,
	stroke = c.blue,
	r = 30,
	extra = "",
) =>
	`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="4" ${extra}/>`;
const line = (d, arrow = true) =>
	`<path d="${d}" fill="none" stroke="${
		c.line
	}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" ${
		arrow ? 'marker-end="url(#arrow)"' : ""
	}/>`;
const tag = (x, y, w, label, fill = c.blue) =>
	rect(x, y, w, 50, fill, fill, 9) +
	text(
		x + w / 2,
		y + 34,
		label,
		28,
		700,
		fill === c.orange ? "#101820" : "#FFFFFF",
	);
const block = (x, y, w, h, label, kind = "blue", subtitle = "") =>
	rect(x, y, w, h, c[`${kind}Fill`], c[kind], 26) +
	text(x + w / 2, y + (subtitle ? 48 : h / 2 + 11), label, 31, 700) +
	(subtitle ? text(x + w / 2, y + 86, subtitle, 26, 400, c.muted) : "");
const kotlin = (x, y, size = 64) =>
	`<g transform="translate(${x} ${y}) scale(${
		size / 100
	})"><path d="M0 0H100L50 50L100 100H0Z" fill="url(#kotlin)"/><path d="M0 0H50L0 50Z" fill="#009BDF"/></g>`;
const android = (x, y, size = 110) =>
	`<g transform="translate(${x} ${y}) scale(${
		size / 120
	})" fill="#A4C439"><path d="M25 43A35 35 0 0 1 95 43Z"/><path d="M37 17L27 3M83 17L93 3" stroke="#A4C439" stroke-width="5" stroke-linecap="round"/><rect x="25" y="48" width="70" height="48" rx="6"/><rect x="7" y="48" width="13" height="47" rx="6"/><rect x="100" y="48" width="13" height="47" rx="6"/><rect x="37" y="90" width="14" height="29" rx="7"/><rect x="69" y="90" width="14" height="29" rx="7"/><circle cx="42" cy="29" r="3" fill="white"/><circle cx="78" cy="29" r="3" fill="white"/></g>`;
const apple = (x, y, size = 110) =>
	`<g transform="translate(${x} ${y}) scale(${
		size / 120
	})" fill="#949694"><path d="M65 27C64 12 77 2 92 0C92 14 81 28 65 27ZM61 36C49 36 44 28 32 31C8 36 8 65 18 88C25 104 33 120 45 119C54 119 57 113 66 113C76 113 79 119 89 118C102 116 114 93 116 85C96 76 91 52 112 40C102 28 89 27 77 31C70 33 65 36 61 36Z"/></g>`;
const react = (x, y, size = 110) =>
	`<g transform="translate(${x + size / 2} ${
		y + size / 2
	})" fill="none" stroke="#58D2F2" stroke-width="5"><ellipse rx="${
		size / 2
	}" ry="${size / 5}"/><ellipse rx="${size / 2}" ry="${
		size / 5
	}" transform="rotate(60)"/><ellipse rx="${size / 2}" ry="${
		size / 5
	}" transform="rotate(120)"/><circle r="9" fill="#58D2F2" stroke="none"/></g>`;
const platform = (cx, y, name, size = 110) =>
	({ Android: android, iOS: apple, Web: react })[name](cx - size / 2, y, size) +
	text(cx, y + size + 40, name, 28, 700);
const shared = (x, y, w, label, subtitle) =>
	rect(x, y, w, 130, c.paper, c.orange, 26) +
	kotlin(x + 26, y + 36, 55) +
	text(x + w / 2 + 25, y + 52, label, 29, 700) +
	text(x + w / 2 + 25, y + 91, subtitle, 25, 400, c.muted);
const panel = (y, h, label, width = 440) =>
	rect(32, y, 1136, h, c.paper, c.orange, 38) +
	tag(52, y - 24, width, label, c.orange);
const defs = `<defs><linearGradient id="kotlin" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#009ADF"/><stop offset=".45" stop-color="#9864DB"/><stop offset=".75" stop-color="#EF6D76"/><stop offset="1" stop-color="#FF8A00"/></linearGradient><marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L10 4L0 8Z" fill="${c.line}"/></marker></defs>`;
function save(name, height, title, description, body) {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="${height}" viewBox="0 0 1200 ${height}" role="img" aria-labelledby="title desc"><title id="title">${esc(
		title,
	)}</title><desc id="desc">${esc(
		description,
	)}</desc>${defs}<g font-family="Arial, Helvetica, sans-serif">${body}</g></svg>\n`;
	const path = join(out, name);
	writeFileSync(`${path}.svg`, svg);
	execFileSync("rsvg-convert", [
		"--width",
		"1800",
		"--output",
		`${path}.png`,
		`${path}.svg`,
	]);
	console.log(`Created ${name}.svg and ${name}.png`);
}

// 1. Responsibilities before and after the product moved online-only.
let b = panel(60, 790, "Before · shared domain", 390);
b += kotlin(1030, 102, 72) + text(600, 139, "The second KMP library", 39, 700);
b += block(375, 192, 450, 95, "Business logic") + line("M600 287V327");
b += block(375, 337, 450, 95, "Repositories", "pink") + line("M600 432V472");
b += block(375, 482, 450, 95, "Data sources", "orange");
b += line("M600 577V612H300V652") + line("M600 612H900V652");
b +=
	block(115, 662, 370, 90, "SQLite · persistence") +
	block(715, 662, 370, 90, "Ktor · networking", "orange");
b += text(
	600,
	811,
	"Sync strategies · data source policies · caching",
	28,
	400,
	c.muted,
);
b +=
	line("M600 850V991") +
	tag(365, 893, 470, "Product moves online-only", c.blue);
b += panel(1020, 465, "After · API layer", 290);
b +=
	kotlin(1030, 1062, 72) +
	text(600, 1103, "A much narrower responsibility", 37, 700);
b += block(300, 1160, 600, 106, "API layer", "orange");
b +=
	`<g opacity="0.38">` +
	rect(105, 1320, 310, 78, "#E8ECF0", "#8D98A2", 20, 'stroke-dasharray="9 7"') +
	text(260, 1369, "Persistence", 28) +
	rect(445, 1320, 310, 78, "#E8ECF0", "#8D98A2", 20, 'stroke-dasharray="9 7"') +
	text(600, 1369, "Sync strategies", 28) +
	rect(785, 1320, 310, 78, "#E8ECF0", "#8D98A2", 20, 'stroke-dasharray="9 7"') +
	text(940, 1369, "Caching policies", 28) +
	`</g>`;
b += text(
	600,
	1451,
	"The original scope had changed. Library overhead remained.",
	27,
	400,
	c.muted,
);
save(
	"kmp_online_only",
	1520,
	"The second KMP library after moving online-only",
	"The original shared domain included business logic, repositories, persistence, networking and data policies. Moving online-only reduced its role to an API layer.",
	b,
);

// 2. Separate the retained learning library from the retired API library.
b = panel(60, 610, "Before · two KMP libraries", 440);
b += platform(300, 133, "Android") + platform(900, 133, "iOS");
b +=
	line("M300 299V349H900V299", false) +
	line("M350 349V439") +
	line("M850 349V439");
b +=
	shared(100, 449, 470, "MemLearning", "Shared learning logic") +
	shared(630, 449, 470, "Second KMP", "Shared API layer");
b += text(
	600,
	633,
	"Two shared dependencies to maintain and release",
	28,
	400,
	c.muted,
);
b +=
	line("M600 670V820") + tag(255, 718, 690, "AI-assisted migration · 1 month");
b += panel(858, 850, "After · one KMP library", 400);
b +=
	rect(72, 955, 1056, 409, c.paper, c.blue, 32) +
	tag(94, 932, 330, "Platform-owned code");
b += platform(320, 1002, "Android", 100) + platform(880, 1002, "iOS", 100);
b += line("M320 1157V1190") + line("M880 1157V1190");
b +=
	block(140, 1200, 360, 104, "Android API layer") +
	block(700, 1200, 360, 104, "iOS API layer");
b +=
	line("M320 1164H104V1434H600V1474") + line("M880 1164H1096V1434H600", false);
b += shared(345, 1484, 510, "MemLearning", "Shared learning logic retained");
b += text(
	600,
	1670,
	"The second library is retired. MemLearning remains shared.",
	28,
	400,
	c.muted,
);
save(
	"kmp_library_migration",
	1740,
	"Retiring the API library while retaining MemLearning",
	"Before, both mobile apps used MemLearning and a shared API library. After a one-month AI-assisted migration, each mobile platform owns its API layer and MemLearning remains shared.",
	b,
);

// 3. Three stages, each with the context that justified its architecture.
function stage(y, n, title, context, h = 520) {
	return (
		panel(y, h, `Stage ${n}`, 160) +
		text(600, y + 83, title, 39, 700) +
		text(600, y + 128, context, 28, 400, c.muted)
	);
}
b = stage(
	60,
	1,
	"Shared learning logic",
	"Large teams · parity across platforms",
);
b +=
	platform(275, 233, "Android", 90) +
	platform(600, 233, "iOS", 90) +
	platform(925, 233, "Web", 90);
b += line("M275 373V400H925V373", false) + line("M600 373V428");
b += shared(330, 438, 540, "MemLearning", "One set of learning rules");
b += line("M600 580V650");
b += stage(
	684,
	2,
	"Shared mobile domain",
	"3 iOS engineers · 1 Android engineer",
	555,
);
b += platform(330, 850, "Android", 90) + platform(870, 850, "iOS", 90);
b +=
	line("M330 990V1030H870V990", false) +
	line("M350 1030V1070") +
	line("M850 1030V1070");
b +=
	shared(100, 1080, 470, "MemLearning", "Learning logic") +
	shared(630, 1080, 470, "Second KMP", "New experience domain");
b += line("M600 1239V1309");
b += stage(
	1343,
	3,
	"A smaller shared core",
	"Online-only product · Android grows to 3 engineers",
	633,
);
b += platform(330, 1505, "Android", 80) + platform(870, 1505, "iOS", 80);
b +=
	block(150, 1672, 360, 85, "Android API layer") +
	block(690, 1672, 360, 85, "iOS API layer");
b += line("M330 1640V1662") + line("M870 1640V1662");
b +=
	line("M330 1646H105V1790H600V1820") + line("M870 1646H1095V1790H600", false);
b += shared(330, 1830, 540, "MemLearning", "Learning logic retained");
save(
	"kmp_six_year_evolution",
	2010,
	"Six years of cross-platform evolution at Memrise",
	"Three stages: shared learning logic for parity, a second shared mobile domain for an uneven team, and a smaller shared core once the product and team changed.",
	b,
);
