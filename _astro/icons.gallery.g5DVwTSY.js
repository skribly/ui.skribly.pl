import { n as e } from "./rolldown-runtime.XKyaHtl9.js";
import { A as t, F as n, M as r, k as i } from "./doc.DoLlUurT.js";
import { n as a, r as o, t as s } from "./lucide.DHDbDsaQ.js";
var c = e({ default: () => g }), l = n(), u = [
	`nav.dashboard`,
	`nav.pages`,
	`content.product`,
	`status.ok`,
	`status.warning`,
	`cinema.seat`
], d = [
	`app.agent`,
	`app.tracker`,
	`app.hub`,
	`app.id`,
	`app.core`,
	`app.ui`,
	`app.docs`,
	`app.skills`,
	`app.newsletter`,
	`app.content`
], f = [
	`cinema.ticket`,
	`cinema.seat`,
	`cinema.film`,
	`media.episode`,
	`learn.course`,
	`learn.lesson`,
	`learn.certificate`,
	`sport.match`,
	`status.verified`
], p = [
	[`anchor`, s],
	[`binoculars`, a],
	[`telescope`, o]
], m = [
	`xs`,
	`sm`,
	`md`,
	`lg`,
	`xl`
];
function h({ names: e, tone: n }) {
	return (0, l.jsx)(`ul`, {
		className: `flex flex-wrap items-center gap-3`,
		"aria-label": `${n} tone`,
		children: e.map((e) => (0, l.jsxs)(`li`, {
			className: `flex flex-col items-center gap-1 text-caption text-muted`,
			children: [(0, l.jsx)(t, {
				name: e,
				tone: n,
				size: `lg`
			}), (0, l.jsx)(`code`, {
				className: `font-mono`,
				children: e
			})]
		}, e))
	});
}
var g = {
	title: `Icons`,
	description: `One icon set for every Skribly app: a 24 px grid, a 1.75 px stroke, round caps and joins, and three tones. Name an icon by its meaning from the registry, never by its glyph.`,
	pl: {
		title: `Ikony`,
		description: `Jeden zestaw ikon dla każdej aplikacji Skribly: siatka 24 px, kreska 1,75 px, zaokrąglone końce i złącza oraz trzy tony. Ikonę wskazuje się nazwą znaczenia z rejestru, nigdy nazwą rysunku.`
	},
	demos: [
		{
			name: `Tones`,
			components: [`Icon`],
			description: `mono follows the text colour, brand takes the accent, duo puts the accent stroke on the soft accent fill. Use brand or duo for the current item or a product mark, mono everywhere else.`,
			usage: `<Icon name="nav.settings" />
<Icon name="status.ok" tone="brand" size="sm" />
<Icon name="cinema.seat" tone="duo" label="Seat" />`,
			accessibility: `An icon with no label is aria-hidden: put a word beside it or name the control it sits in. With label it is role="img" with that name. The accent keeps 3:1 on every surface in each theme; in forced colours the fill drops and the stroke follows the system text colour.`,
			pl: {
				description: `mono przyjmuje kolor tekstu, brand kolor akcentu, a duo kreskę w kolorze akcentu na miękkim wypełnieniu akcentu. Ton brand lub duo służy bieżącej pozycji albo znakowi produktu, mono całej reszcie.`,
				accessibility: `Ikona bez etykiety ma aria-hidden: obok niej musi stać słowo albo nazwę musi mieć kontrolka, w której stoi. Z etykietą ma role="img" i tę nazwę. Akcent zachowuje kontrast 3:1 na każdej powierzchni w każdym motywie; w wymuszonych kolorach wypełnienie znika, a kreska przyjmuje systemowy kolor tekstu.`
			},
			render: () => (0, l.jsx)(`div`, {
				className: `flex flex-col gap-4`,
				children: r.map((e) => (0, l.jsx)(h, {
					names: u,
					tone: e
				}, e))
			})
		},
		{
			name: `Sizes and labels`,
			components: [`Icon`],
			description: `Five named sizes, 12 to 32 px, or any number of pixels. A class such as size-4 works too.`,
			usage: `<Icon name="status.warning" size="sm" label="Warning" />`,
			pl: { description: `Pięć nazwanych rozmiarów, od 12 do 32 px, albo dowolna liczba pikseli. Działa też klasa, na przykład size-4.` },
			render: () => (0, l.jsxs)(`div`, {
				className: `flex flex-wrap items-end gap-4`,
				children: [m.map((e) => (0, l.jsx)(t, {
					name: `status.verified`,
					tone: `duo`,
					size: e
				}, e)), (0, l.jsx)(`span`, {
					className: `inline-flex items-center gap-1 text-warn`,
					children: (0, l.jsx)(t, {
						name: `status.warning`,
						size: `sm`,
						label: `Warning`
					})
				})]
			})
		},
		{
			name: `Product glyphs`,
			components: [`Icon`],
			description: `Drawn for Skribly: one glyph per app, and the glyphs of the panels the apps are building.`,
			usage: `<Icon name="app.tracker" tone="duo" />`,
			pl: { description: `Narysowane dla Skribly: po jednym rysunku na aplikację oraz rysunki paneli, które powstają w aplikacjach.` },
			render: () => (0, l.jsxs)(`div`, {
				className: `flex flex-col gap-4`,
				children: [(0, l.jsx)(h, {
					names: d,
					tone: `duo`
				}), (0, l.jsx)(h, {
					names: f,
					tone: `duo`
				})]
			})
		},
		{
			name: `Any Lucide glyph`,
			components: [`GlyphIcon`],
			description: `The complete Lucide set is plain glyph data under @skribly/ui/icons/lucide, one named export per icon. GlyphIcon draws it in the same three tones, and a bundler keeps only the icons you import. Prefer a registry name when one exists.`,
			usage: `import { lucideAnchor } from '@skribly/ui/icons/lucide'

<GlyphIcon glyph={lucideAnchor} tone="duo" />`,
			pl: { description: `Pełny zestaw Lucide to zwykłe dane rysunków w @skribly/ui/icons/lucide, po jednym nazwanym eksporcie na ikonę. GlyphIcon rysuje je w tych samych trzech tonach, a bundler zostawia tylko zaimportowane ikony. Gdy jest nazwa z rejestru, wybierz ją.` },
			render: () => (0, l.jsx)(`div`, {
				className: `flex flex-col gap-4`,
				children: r.map((e) => (0, l.jsx)(`ul`, {
					className: `flex flex-wrap items-center gap-3`,
					"aria-label": `${e} tone`,
					children: p.map(([t, n]) => (0, l.jsx)(`li`, { children: (0, l.jsx)(i, {
						glyph: n,
						tone: e,
						size: `lg`
					}) }, t))
				}, e))
			})
		}
	]
};
export { c as t };
