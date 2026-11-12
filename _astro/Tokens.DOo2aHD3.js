import { t as e } from "./values.BBiBSE7c.js";
import { f as t, p as n, r, s as i, t as a, u as o } from "./doc.D2PtmWN6.js";
import { t as s } from "./types.C8lc03ah.js";
import { t as c } from "./jsx-runtime.yrTYNGQT.js";
var l = c(), u = Object.keys(e.foundation), d = Object.keys(e.light);
function f(e) {
	return e.startsWith(`font-`) || e.startsWith(`text-`) ? e : e.startsWith(`radius-`) ? e.replace(`radius-`, `rounded-`) : e.startsWith(`shadow-`) ? e : e.startsWith(`control-`) ? `h-${e}` : e.startsWith(`space-`) ? `gap-${e.slice(6)}` : e.startsWith(`leading-`) || e.startsWith(`tracking-`) ? `[--sk-${e}]` : e.startsWith(`duration-`) ? `duration-(--sk-${e})` : e.startsWith(`ease-`) ? e : e.startsWith(`z-`) ? `z-(--sk-${e})` : e.startsWith(`focus-`) ? `base.css` : e.startsWith(`tool-`) || [`fg`, `muted`].includes(e) || e.endsWith(`-text`) || e.endsWith(`-fg`) ? `text-${e}` : e.startsWith(`border`) ? e === `border` ? `border-border` : `border-${e}` : `bg-${e}`;
}
function p({ value: e }) {
	let [t = 0, n = 0, r = 1, i = 1] = (e.match(/-?[\d.]+/g) ?? []).map(Number), a = (e, t) => `${e * 40},${40 - t * 40}`;
	return (0, l.jsxs)(`svg`, {
		viewBox: `-2 -2 44 44`,
		className: `size-10 text-accent`,
		"aria-hidden": !0,
		children: [(0, l.jsx)(`rect`, {
			x: `0`,
			y: `0`,
			width: 40,
			height: 40,
			fill: `none`,
			className: `stroke-border`,
			strokeWidth: `1`
		}), (0, l.jsx)(`path`, {
			d: `M${a(0, 0)} C${a(t, n)} ${a(r, i)} ${a(1, 1)}`,
			fill: `none`,
			stroke: `currentColor`,
			strokeWidth: `2.5`,
			strokeLinecap: `round`
		})]
	});
}
function m(e, t, n) {
	let r = `var(--sk-${e})`;
	return e.startsWith(`font-`) ? (0, l.jsx)(`span`, {
		style: { fontFamily: r },
		className: `text-[1.25rem]`,
		children: `Skribly 0123`
	}) : e.startsWith(`text-`) ? (0, l.jsx)(`span`, {
		style: { fontSize: r },
		className: `leading-tight whitespace-nowrap`,
		children: `Aa Skribly`
	}) : e.startsWith(`leading-`) ? (0, l.jsx)(`span`, {
		style: { lineHeight: r },
		className: `block max-w-48 text-caption`,
		children: n === `pl` ? `Dwie linie tekstu pokazują wysokość linii.` : `Two lines of text show the line height.`
	}) : e.startsWith(`tracking-`) ? (0, l.jsx)(`span`, {
		style: { letterSpacing: r },
		className: `text-label uppercase`,
		children: n === `pl` ? `Etykieta` : `Label`
	}) : e.startsWith(`space-`) ? (0, l.jsx)(`span`, {
		className: `block h-3 rounded-sm bg-accent forced-color-adjust-none`,
		style: { width: r }
	}) : e.startsWith(`control-`) ? (0, l.jsx)(`span`, {
		className: `block w-16 rounded-md border border-border-strong bg-surface`,
		style: { height: r }
	}) : e.startsWith(`radius-`) ? (0, l.jsx)(`span`, {
		className: `block size-10 border-2 border-border-strong bg-surface`,
		style: { borderRadius: r }
	}) : e.startsWith(`duration-`) ? (0, l.jsx)(`span`, {
		className: `block h-2 rounded-full bg-accent forced-color-adjust-none`,
		style: { width: `${Number.parseInt(t, 10) / 3}px` }
	}) : e.startsWith(`ease-`) ? (0, l.jsx)(p, { value: t }) : e === `focus-width` || e === `focus-offset` ? (0, l.jsx)(`span`, {
		className: `inline-block h-6 w-16 rounded-md border border-border bg-surface`,
		style: {
			outline: `var(--sk-focus-width) solid var(--sk-focus)`,
			outlineOffset: `var(--sk-focus-offset)`
		}
	}) : (0, l.jsx)(`span`, {
		className: `font-mono text-caption text-muted`,
		children: t
	});
}
var h = [
	{
		id: `type`,
		title: {
			en: `Type`,
			pl: `Typografia`
		},
		prefixes: [
			`font-`,
			`text-`,
			`leading-`,
			`tracking-`
		],
		note: {
			en: `Sizes are in rem, so text grows with the reader’s settings. Body text is 14px, and fields use 16px below 640px so phones do not zoom in.`,
			pl: `Rozmiary są w rem, więc tekst rośnie wraz z ustawieniami czytelnika. Tekst podstawowy ma 14 px, a pola mają 16 px poniżej 640 px, aby telefony nie powiększały widoku.`
		}
	},
	{
		id: `space`,
		title: {
			en: `Space and controls`,
			pl: `Odstępy i kontrolki`
		},
		prefixes: [`space-`, `control-`],
		note: {
			en: `Space follows Tailwind’s 4px steps. Control heights are tokens of their own, so data-density="compact" can shrink them.`,
			pl: `Odstępy podążają za krokami Tailwinda co 4 px. Wysokości kontrolek są osobnymi tokenami, więc data-density="compact" może je zmniejszyć.`
		}
	},
	{
		id: `radius`,
		title: {
			en: `Radius`,
			pl: `Zaokrąglenia`
		},
		prefixes: [`radius-`],
		note: {
			en: `Small for chips, medium for controls, large for cards, extra large for dialogs.`,
			pl: `Małe dla chipów, średnie dla kontrolek, duże dla kart, bardzo duże dla okien dialogowych.`
		}
	},
	{
		id: `motion`,
		title: {
			en: `Motion`,
			pl: `Ruch`
		},
		prefixes: [`duration-`, `ease-`],
		note: {
			en: `Short and calm. Under prefers-reduced-motion the durations drop to almost nothing and loops stop.`,
			pl: `Krótki i spokojny. Przy prefers-reduced-motion czasy trwania spadają niemal do zera, a pętle się zatrzymują.`
		}
	},
	{
		id: `focus-and-layers`,
		title: {
			en: `Focus and layers`,
			pl: `Fokus i warstwy`
		},
		prefixes: [`focus-`, `z-`],
		note: {
			en: `The focus ring lives in base.css. Layers keep sticky bars, sidebars, dialogs, toasts and tours in a fixed order.`,
			pl: `Obwódka fokusa jest w base.css. Warstwy utrzymują przyklejone paski, panele boczne, okna dialogowe, toasty i przewodniki w stałej kolejności.`
		}
	}
], g = [
	{
		id: `surfaces`,
		title: {
			en: `Surfaces`,
			pl: `Powierzchnie`
		},
		test: (e) => [
			`bg`,
			`surface`,
			`sunken`,
			`side`,
			`bar`,
			`input`,
			`hover`,
			`selected`
		].includes(e)
	},
	{
		id: `text-and-lines`,
		title: {
			en: `Text and lines`,
			pl: `Tekst i linie`
		},
		test: (e) => [
			`fg`,
			`muted`,
			`border`,
			`border-strong`
		].includes(e)
	},
	{
		id: `accent`,
		title: {
			en: `Accent`,
			pl: `Akcent`
		},
		test: (e) => e.startsWith(`accent`)
	},
	{
		id: `status`,
		title: {
			en: `Status`,
			pl: `Status`
		},
		test: (e) => /^(danger|warn|ok|info)/.test(e)
	},
	{
		id: `navigation`,
		title: {
			en: `Dark sidebar`,
			pl: `Ciemny panel boczny`
		},
		test: (e) => e.startsWith(`nav`)
	},
	{
		id: `tools`,
		title: {
			en: `Tool colours`,
			pl: `Kolory narzędzi`
		},
		test: (e) => e.startsWith(`tool-`)
	},
	{
		id: `overlay`,
		title: {
			en: `Scrim and focus`,
			pl: `Przyciemnienie i fokus`
		},
		test: (e) => e === `scrim` || e === `focus`
	},
	{
		id: `shadows`,
		title: {
			en: `Shadows`,
			pl: `Cienie`
		},
		test: (e) => e.startsWith(`shadow-`)
	}
], _ = {
	en: {
		colourTable: `{title} colour tokens`,
		colourCaption: `{title}: the value of each token in every theme`,
		token: `Token`,
		value: `Value`,
		tailwind: `Tailwind`,
		preview: `Preview`,
		tokensTable: `{title} tokens`,
		tokensCaption: `{title} tokens with their value, utility and a preview`
	},
	pl: {
		colourTable: `Tokeny koloru: {title}`,
		colourCaption: `{title}: wartość każdego tokenu w każdym motywie`,
		token: `Token`,
		value: `Wartość`,
		tailwind: `Tailwind`,
		preview: `Podgląd`,
		tokensTable: `Tokeny: {title}`,
		tokensCaption: `Tokeny: {title}, z wartością, narzędziem i podglądem`
	}
};
function v({ name: e, value: t }) {
	return e.startsWith(`shadow-`) ? (0, l.jsx)(`span`, {
		className: `block h-8 w-14 rounded-md bg-surface`,
		style: { boxShadow: t }
	}) : (0, l.jsx)(`span`, {
		className: `block size-8 shrink-0 rounded-md border border-border forced-color-adjust-none`,
		style: { background: t }
	});
}
function y({ title: n, names: r, lang: i }) {
	let a = _[i];
	return (0, l.jsxs)(t, {
		label: a.colourTable.replace(`{title}`, n),
		children: [
			(0, l.jsx)(`caption`, {
				className: `sr-only`,
				children: a.colourCaption.replace(`{title}`, n)
			}),
			(0, l.jsx)(`thead`, { children: (0, l.jsxs)(`tr`, { children: [(0, l.jsx)(`th`, {
				scope: `col`,
				children: a.token
			}), s.map((e) => (0, l.jsx)(`th`, {
				scope: `col`,
				children: i === `pl` ? e.pl : e.label
			}, e.id))] }) }),
			(0, l.jsx)(`tbody`, { children: r.map((t) => (0, l.jsxs)(`tr`, { children: [(0, l.jsxs)(`th`, {
				scope: `row`,
				className: `w-56 font-normal`,
				children: [(0, l.jsx)(`span`, {
					className: `block font-mono text-caption font-semibold text-fg`,
					children: `--sk-${t}`
				}), (0, l.jsx)(`span`, {
					className: `block font-mono text-caption text-muted`,
					children: f(t)
				})]
			}), s.map((n) => {
				let r = e[n.id][t];
				return (0, l.jsx)(`td`, {
					"data-theme": n.id,
					children: (0, l.jsxs)(`span`, {
						className: `flex items-center gap-3`,
						children: [(0, l.jsx)(v, {
							name: t,
							value: r
						}), (0, l.jsx)(`span`, {
							className: `min-w-0 font-mono text-caption break-all text-fg`,
							children: r
						})]
					})
				}, n.id);
			})] }, t)) })
		]
	});
}
function b({ lang: s = `en` }) {
	let c = s === `pl`, p = _[s];
	return (0, l.jsxs)(r, {
		lang: s,
		children: [
			(0, l.jsx)(i, {
				eyebrow: c ? `Podstawy` : `Foundations`,
				title: c ? `Tokeny projektowe` : `Design tokens`,
				lead: c ? `Tokeny: ${u.length + d.length}, w tym ${u.length} wspólnych dla każdego motywu i ${d.length} kolorów z wartością w każdym z trzech motywów. Tabele na tej stronie są generowane z src/tokens/values.ts, więc zawsze pokazują to, co jest dostarczane.` : `${u.length + d.length} tokens: ${u.length} shared by every theme and ${d.length} colours with a value in each of the three themes. The tables on this page are generated from src/tokens/values.ts, so they always show what ships.`
			}),
			(0, l.jsxs)(o, {
				id: `source`,
				title: c ? `Skąd pochodzą tokeny` : `Where tokens come from`,
				children: [
					(0, l.jsx)(n, { children: c ? (0, l.jsxs)(`p`, { children: [
						`Źródłem są pliki tokenów projektowych W3C w `,
						(0, l.jsx)(`code`, { children: `tokens/` }),
						`. Style Dictionary buduje z nich `,
						(0, l.jsx)(`code`, { children: `tokens.css` }),
						`, czyli zmienne CSS czytane przez każdą warstwę, oraz `,
						(0, l.jsx)(`code`, { children: `src/tokens/values.ts` }),
						`, typowany obiekt dla kodu, który potrzebuje wartości, na przykład wykresu. `,
						(0, l.jsx)(`code`, { children: `npm test` }),
						` kończy się błędem, gdy zbudowane pliki są nieaktualne.`
					] }) : (0, l.jsxs)(`p`, { children: [
						`The source is W3C design token files in `,
						(0, l.jsx)(`code`, { children: `tokens/` }),
						`. Style Dictionary builds them into `,
						(0, l.jsx)(`code`, { children: `tokens.css` }),
						`, the CSS variables every layer reads, and `,
						(0, l.jsx)(`code`, { children: `src/tokens/values.ts` }),
						`, a typed object for code that needs a value, such as a chart. `,
						(0, l.jsx)(`code`, { children: `npm test` }),
						` fails when the built files are stale.`
					] }) }),
					(0, l.jsx)(a, {
						language: `bash`,
						title: c ? `Zmień token` : `Change a token`,
						code: `# edit tokens/*.tokens.json, then
npm run tokens
npm test`
					}),
					(0, l.jsx)(a, {
						language: `tsx`,
						title: c ? `Odczytaj wartość w kodzie` : `Read a value in code`,
						code: `import { tokens } from '@skribly/ui/tokens'

tokens.dark.accent // '${e.dark.accent}'
tokens.foundation['radius-lg'] // '${e.foundation[`radius-lg`]}'`
					})
				]
			}),
			(0, l.jsxs)(o, {
				id: `colour`,
				title: c ? `Kolor` : `Colour`,
				children: [(0, l.jsx)(n, { children: c ? (0, l.jsxs)(`p`, { children: [
					`Każda kolumna poniżej jest narysowana w swoim własnym motywie. Używaj nazwy semantycznej, nigdy wartości: `,
					(0, l.jsx)(`code`, { children: `bg-surface` }),
					` jest białe w motywie dziennym, prawie czarne w nocnym i czysto czarne w wysokim kontraście. `,
					(0, l.jsx)(`code`, { children: `accent-text` }),
					` to akcent dla tekstu, bo `,
					(0, l.jsx)(`code`, { children: `accent` }),
					` na niektórych powierzchniach nie spełnia 4,5:1 jako tekst.`
				] }) : (0, l.jsxs)(`p`, { children: [
					`Each column below is drawn in its own theme. Use the semantic name, never the value: `,
					(0, l.jsx)(`code`, { children: `bg-surface` }),
					` is white in light, near black in dark and pure black in high contrast. `,
					(0, l.jsx)(`code`, { children: `accent-text` }),
					` is the accent for text, because `,
					(0, l.jsx)(`code`, { children: `accent` }),
					` fails 4.5:1 as text on some surfaces.`
				] }) }), g.map((e) => {
					let t = d.filter(e.test);
					return t.length === 0 ? null : (0, l.jsxs)(`div`, {
						className: `space-y-3 pt-2`,
						children: [(0, l.jsx)(`h3`, {
							id: e.id,
							className: `scroll-mt-24 text-[1.125rem] font-semibold text-fg`,
							children: e.title[s]
						}), (0, l.jsx)(y, {
							title: e.title[s],
							names: t,
							lang: s
						})]
					}, e.id);
				})]
			}),
			h.map((r) => {
				let i = u.filter((e) => r.prefixes.some((t) => e.startsWith(t))), a = r.title[s];
				return (0, l.jsxs)(o, {
					id: r.id,
					title: a,
					children: [(0, l.jsx)(n, { children: (0, l.jsx)(`p`, { children: r.note[s] }) }), (0, l.jsxs)(t, {
						label: p.tokensTable.replace(`{title}`, a),
						children: [
							(0, l.jsx)(`caption`, {
								className: `sr-only`,
								children: p.tokensCaption.replace(`{title}`, a)
							}),
							(0, l.jsx)(`thead`, { children: (0, l.jsxs)(`tr`, { children: [
								(0, l.jsx)(`th`, {
									scope: `col`,
									children: p.token
								}),
								(0, l.jsx)(`th`, {
									scope: `col`,
									children: p.value
								}),
								(0, l.jsx)(`th`, {
									scope: `col`,
									children: p.tailwind
								}),
								(0, l.jsx)(`th`, {
									scope: `col`,
									children: p.preview
								})
							] }) }),
							(0, l.jsx)(`tbody`, { children: i.map((t) => (0, l.jsxs)(`tr`, { children: [
								(0, l.jsx)(`th`, {
									scope: `row`,
									className: `font-mono text-caption font-semibold whitespace-nowrap`,
									children: `--sk-${t}`
								}),
								(0, l.jsx)(`td`, {
									className: `max-w-64 font-mono text-caption break-words text-muted`,
									children: e.foundation[t]
								}),
								(0, l.jsx)(`td`, { children: (0, l.jsx)(`code`, { children: f(t) }) }),
								(0, l.jsx)(`td`, { children: m(t, e.foundation[t], s) })
							] }, t)) })
						]
					})]
				}, r.id);
			})
		]
	});
}
export { b as Tokens, f as utilityFor };
