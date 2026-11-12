import { t as e } from "./check.CUpC8LgP.js";
import { t } from "./circle-exclamation-point.DRCkYbzg.js";
import { t as n } from "./Button.DRxd_7vr.js";
import { S as r, d as i, f as a, i as o, p as s, r as c, s as l, t as u, u as d } from "./doc.D2PtmWN6.js";
import { t as f } from "./Badge.Cwl75Dkx.js";
import { t as p } from "./TextField.BRNO9ptc.js";
import { t as m } from "./values.BBiBSE7c.js";
import { t as h } from "./types.C8lc03ah.js";
import { t as g } from "./jsx-runtime.yrTYNGQT.js";
function _(e) {
	let t = e / 255;
	return t <= .04045 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
}
function v(e) {
	let [t = 0, n = 0, r = 0] = [
		1,
		3,
		5
	].map((t) => _(Number.parseInt(e.slice(t, t + 2), 16)));
	return .2126 * t + .7152 * n + .0722 * r;
}
function y(e, t) {
	if (!/^#[0-9a-f]{6}$/i.test(e) || !/^#[0-9a-f]{6}$/i.test(t)) return null;
	let [n = 0, r = 0] = [v(e), v(t)].toSorted((e, t) => t - e);
	return (n + .05) / (r + .05);
}
function b(e) {
	return e >= 7 ? `AAA` : e >= 4.5 ? `AA` : e >= 3 ? `AA large` : `Below AA`;
}
var x = g(), S = [
	[
		`fg`,
		`bg`,
		`Text on the page`
	],
	[
		`muted`,
		`bg`,
		`Secondary text on the page`
	],
	[
		`muted`,
		`surface`,
		`Secondary text on a card`
	],
	[
		`accent-text`,
		`bg`,
		`Accent text on the page`
	],
	[
		`accent-fg`,
		`accent`,
		`Text on a primary button`
	],
	[
		`ok`,
		`ok-soft`,
		`Success text on its tint`
	],
	[
		`info`,
		`info-soft`,
		`Information text on its tint`
	],
	[
		`warn`,
		`warn-soft`,
		`Warning text on its tint`
	],
	[
		`danger`,
		`danger-soft`,
		`Error text on its tint`
	],
	[
		`nav-fg`,
		`nav`,
		`Text in the dark sidebar`
	],
	[
		`border-strong`,
		`surface`,
		`Control border on a card`
	],
	[
		`focus`,
		`bg`,
		`Focus ring on the page`
	]
], C = {
	"fg-bg": `Tekst na stronie`,
	"muted-bg": `Tekst drugorzędny na stronie`,
	"muted-surface": `Tekst drugorzędny na karcie`,
	"accent-text-bg": `Tekst w kolorze akcentu na stronie`,
	"accent-fg-accent": `Tekst na głównym przycisku`,
	"ok-ok-soft": `Tekst sukcesu na swoim podbarwieniu`,
	"info-info-soft": `Tekst informacji na swoim podbarwieniu`,
	"warn-warn-soft": `Tekst ostrzeżenia na swoim podbarwieniu`,
	"danger-danger-soft": `Tekst błędu na swoim podbarwieniu`,
	"nav-fg-nav": `Tekst w ciemnym panelu bocznym`,
	"border-strong-surface": `Ramka kontrolki na karcie`,
	"focus-bg": `Obwódka fokusa na stronie`
}, w = {
	AAA: `AAA`,
	AA: `AA`,
	"AA large": `AA dla dużego tekstu`,
	"Below AA": `Poniżej AA`
};
function T({ fore: e, back: t, line: n }) {
	return n ? (0, x.jsx)(`span`, {
		"aria-hidden": !0,
		className: `grid h-8 w-11 shrink-0 place-items-center rounded-md border border-border forced-color-adjust-none`,
		style: { background: t },
		children: (0, x.jsx)(`span`, {
			className: `block h-4 w-6 rounded-sm border-2`,
			style: { borderColor: e }
		})
	}) : (0, x.jsx)(`span`, {
		"aria-hidden": !0,
		className: `grid h-8 w-11 shrink-0 place-items-center rounded-md border border-border font-semibold forced-color-adjust-none`,
		style: {
			color: e,
			background: t
		},
		children: `Aa`
	});
}
function E() {
	return (0, x.jsxs)(`div`, {
		className: `space-y-4`,
		children: [
			(0, x.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-2`,
				children: [
					(0, x.jsx)(f, {
						tone: `ok`,
						icon: (0, x.jsx)(e, {}),
						children: `Synced`
					}),
					(0, x.jsx)(f, {
						tone: `danger`,
						icon: (0, x.jsx)(t, {}),
						children: `2 errors`
					}),
					(0, x.jsx)(f, {
						tone: `accent`,
						children: `New`
					})
				]
			}),
			(0, x.jsx)(p, {
				label: `Project name`,
				defaultValue: `Quarterly report`
			}),
			(0, x.jsx)(r, {
				tone: `warn`,
				toneLabel: `Warning`,
				title: `Two people are editing this page`
			}),
			(0, x.jsxs)(`div`, {
				className: `flex flex-wrap gap-2`,
				children: [(0, x.jsx)(n, { children: `Save` }), (0, x.jsx)(n, {
					variant: `outline`,
					children: `Cancel`
				})]
			})
		]
	});
}
var D = {
	"--sk-control-sm": m.foundation[`control-sm`],
	"--sk-control-md": m.foundation[`control-md`]
};
function O() {
	return (0, x.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, x.jsx)(p, {
			label: `Search`,
			defaultValue: `tokens`
		}), (0, x.jsxs)(`div`, {
			className: `flex flex-wrap gap-2`,
			children: [(0, x.jsx)(n, {
				size: `sm`,
				variant: `outline`,
				children: `Filter`
			}), (0, x.jsx)(n, { children: `Apply` })]
		})]
	});
}
function k({ lang: e = `en` }) {
	let t = e === `pl`;
	return (0, x.jsxs)(c, {
		lang: e,
		children: [
			(0, x.jsx)(l, {
				eyebrow: t ? `Podstawy` : `Foundations`,
				title: t ? `Motywy i gęstość` : `Themes and density`,
				lead: t ? `Motyw dzienny, nocny i wysokiego kontrastu to trzy zestawy wartości dla tych samych nazw tokenów. Komponent nigdy nie pyta, który motyw jest włączony; czyta tokeny i jest poprawny we wszystkich trzech.` : `Light, dark and high contrast are three sets of values for the same token names. A component never asks which theme is on; it reads the tokens and is right in all three.`
			}),
			(0, x.jsxs)(d, {
				id: `three-themes`,
				title: t ? `Trzy motywy` : `Three themes`,
				children: [(0, x.jsx)(`div`, {
					className: `grid gap-3 lg:grid-cols-3`,
					children: h.map((e) => (0, x.jsxs)(`section`, {
						"data-theme": e.id,
						"aria-label": t ? `Motyw: ${e.pl}` : `${e.label} theme`,
						className: `min-w-0 overflow-hidden rounded-xl border border-border`,
						children: [(0, x.jsx)(`p`, {
							className: `border-b border-border bg-sunken px-4 py-2 text-label font-semibold text-muted uppercase`,
							children: t ? e.pl : e.label
						}), (0, x.jsx)(`div`, {
							className: `p-5`,
							children: (0, x.jsx)(E, {})
						})]
					}, e.id))
				}), (0, x.jsx)(s, { children: t ? (0, x.jsxs)(`p`, { children: [
					(0, x.jsx)(`strong`, { children: `Dzień` }),
					` to ciepły papier z bursztynowym akcentem. `,
					(0, x.jsx)(`strong`, { children: `Noc` }),
					` zachowuje ciepło z jaśniejszym bursztynem. `,
					(0, x.jsx)(`strong`, { children: `Wysoki kontrast` }),
					` to czerń z białymi liniami i żółtym akcentem, dla słabego wzroku i jasnego słońca; tekst osiąga 7:1, a ramki kontrolek 4,5:1.`
				] }) : (0, x.jsxs)(`p`, { children: [
					(0, x.jsx)(`strong`, { children: `Light` }),
					` is warm paper with an amber accent. `,
					(0, x.jsx)(`strong`, { children: `Dark` }),
					` keeps the warmth with a lighter amber. `,
					(0, x.jsx)(`strong`, { children: `High contrast` }),
					` is black with white lines and a yellow accent, for low vision and bright sunlight; text reaches 7:1 and control borders 4.5:1.`
				] }) })]
			}),
			(0, x.jsxs)(d, {
				id: `choosing`,
				title: t ? `Jak wybierany jest motyw` : `How the theme is chosen`,
				children: [
					(0, x.jsx)(s, { children: t ? (0, x.jsxs)(`p`, { children: [
						`Ustaw `,
						(0, x.jsx)(`code`, { children: `data-theme` }),
						` na `,
						(0, x.jsx)(`code`, { children: `light` }),
						`, `,
						(0, x.jsx)(`code`, { children: `dark` }),
						` albo `,
						(0, x.jsx)(`code`, { children: `contrast` }),
						` na elemencie głównym. Bez atrybutu decyduje system operacyjny: `,
						(0, x.jsx)(`code`, { children: `prefers-contrast: more` }),
						` daje wysoki kontrast, a potem `,
						(0, x.jsx)(`code`, { children: `prefers-color-scheme: dark` }),
						` daje motyw nocny. Atrybut działa też na dowolnym elemencie, co nadaje motyw tylko tej części strony, tak jak robią to podglądy na tej stronie.`
					] }) : (0, x.jsxs)(`p`, { children: [
						`Set `,
						(0, x.jsx)(`code`, { children: `data-theme` }),
						` to `,
						(0, x.jsx)(`code`, { children: `light` }),
						`, `,
						(0, x.jsx)(`code`, { children: `dark` }),
						` or `,
						(0, x.jsx)(`code`, { children: `contrast` }),
						` on the root element. With no attribute, the operating system decides: `,
						(0, x.jsx)(`code`, { children: `prefers-contrast: more` }),
						` gives high contrast, then `,
						(0, x.jsx)(`code`, { children: `prefers-color-scheme: dark` }),
						` gives dark. The attribute also works on any element, which themes only that part of the page, as the previews on this site do.`
					] }) }),
					(0, x.jsx)(u, {
						language: `html`,
						title: t ? `Motyw dla całej strony albo jednego panelu` : `Theme a whole page or one panel`,
						code: `<html data-theme="dark">
  …
  <aside data-theme="contrast">Only this panel is high contrast</aside>
</html>`
					}),
					(0, x.jsxs)(i, {
						title: t ? `W Reakcie` : `In React`,
						children: [(0, x.jsx)(s, { children: t ? (0, x.jsxs)(`p`, { children: [
							(0, x.jsx)(`code`, { children: `ThemeProvider` }),
							` zapamiętuje wybór czytelnika w pamięci lokalnej i ustawia atrybut. `,
							(0, x.jsx)(`code`, { children: `ThemeScript` }),
							` stosuje zapisany wybór przed pierwszym wyrenderowaniem. `,
							(0, x.jsx)(`code`, { children: `ThemeToggle` }),
							` to kontrolka, jako grupa segmentowa albo menu.`
						] }) : (0, x.jsxs)(`p`, { children: [
							(0, x.jsx)(`code`, { children: `ThemeProvider` }),
							` keeps the reader’s choice in local storage and sets the attribute. `,
							(0, x.jsx)(`code`, { children: `ThemeScript` }),
							` applies a stored choice before the first paint. `,
							(0, x.jsx)(`code`, { children: `ThemeToggle` }),
							` is the control, as a segmented group or a menu.`
						] }) }), (0, x.jsx)(u, {
							language: `tsx`,
							code: `<ThemeProvider>
  <ThemeToggle
    label={t('theme')}
    variant="menu"
    options={{ light: t('light'), dark: t('dark'), contrast: t('contrast'), system: t('system') }}
  />
</ThemeProvider>`
						})]
					}),
					(0, x.jsx)(i, {
						title: t ? `Z Tailwindem` : `With Tailwind`,
						children: (0, x.jsx)(s, { children: t ? (0, x.jsxs)(`p`, { children: [
							`Komponenty nigdy nie potrzebują `,
							(0, x.jsx)(`code`, { children: `dark:` }),
							`. Kod aplikacji, który go potrzebuje, dostaje wariant podążający za atrybutem, zarówno dla motywu nocnego, jak i wysokiego kontrastu, więc aplikacja, która go używa, ustawia atrybut jawnie.`
						] }) : (0, x.jsxs)(`p`, { children: [
							`Components never need `,
							(0, x.jsx)(`code`, { children: `dark:` }),
							`. App code that does gets a variant that follows the attribute, for dark and high contrast alike, so an app that uses it sets the attribute explicitly.`
						] }) })
					})
				]
			}),
			(0, x.jsxs)(d, {
				id: `contrast`,
				title: t ? `Kontrast w każdym motywie` : `Contrast in every theme`,
				children: [(0, x.jsx)(s, { children: (0, x.jsx)(`p`, { children: t ? `Obliczone z wartości tokenów. Testy sprawdzają te pary i więcej: 4,5:1 dla tekstu i 3:1 dla ramek kontrolek i fokusa w motywie dziennym i nocnym, 7:1 i 4,5:1 w wysokim kontraście.` : `Computed from the token values. The tests check these pairs and more: 4.5:1 for text and 3:1 for control borders and focus in light and dark, 7:1 and 4.5:1 in high contrast.` }) }), (0, x.jsxs)(a, {
					label: t ? `Współczynniki kontrastu par tokenów` : `Contrast ratios of token pairs`,
					children: [
						(0, x.jsx)(`caption`, {
							className: `sr-only`,
							children: t ? `Współczynnik kontrastu każdej pary w każdym motywie` : `Contrast ratio of each pair in every theme`
						}),
						(0, x.jsx)(`thead`, { children: (0, x.jsxs)(`tr`, { children: [(0, x.jsx)(`th`, {
							scope: `col`,
							children: t ? `Para` : `Pair`
						}), h.map((e) => (0, x.jsx)(`th`, {
							scope: `col`,
							children: t ? e.pl : e.label
						}, e.id))] }) }),
						(0, x.jsx)(`tbody`, { children: S.map(([e, n, r]) => (0, x.jsxs)(`tr`, { children: [(0, x.jsxs)(`th`, {
							scope: `row`,
							className: `font-normal`,
							children: [(0, x.jsx)(`span`, {
								className: `block font-medium text-fg`,
								children: t ? C[`${e}-${n}`] ?? r : r
							}), (0, x.jsx)(`span`, {
								className: `block font-mono text-caption text-muted`,
								children: t ? `${e} na ${n}` : `${e} on ${n}`
							})]
						}), h.map((r) => {
							let i = m[r.id], a = y(i[e], i[n]);
							return (0, x.jsx)(`td`, {
								"data-theme": r.id,
								children: (0, x.jsxs)(`span`, {
									className: `flex items-center gap-3`,
									children: [(0, x.jsx)(T, {
										fore: i[e],
										back: i[n],
										line: e === `border-strong` || e === `focus`
									}), (0, x.jsxs)(`span`, {
										className: `text-caption`,
										children: [(0, x.jsx)(`span`, {
											className: `block font-mono font-semibold text-fg`,
											children: a === null ? t ? `brak` : `n/a` : `${a.toFixed(2)}:1`
										}), (0, x.jsx)(`span`, {
											className: `block text-muted`,
											children: a === null ? `` : e === `border-strong` || e === `focus` ? a >= 3 ? t ? `AA, elementy nietekstowe` : `AA, non-text` : t ? `Poniżej 3:1` : `Below 3:1` : t ? w[b(a)] : b(a)
										})]
									})]
								})
							}, r.id);
						})] }, `${e}-${n}`)) })
					]
				})]
			}),
			(0, x.jsxs)(d, {
				id: `density`,
				title: t ? `Gęstość` : `Density`,
				children: [(0, x.jsx)(s, { children: t ? (0, x.jsxs)(`p`, { children: [(0, x.jsx)(`code`, { children: `data-density="compact"` }), ` daje mniejsze kontrolki aplikacji desktopowych. Zmienia tylko wysokości kontrolek, więc tekst pozostaje czytelny, a zwarte rozmiary nadal spełniają rozmiar celu 24 px. Przełącznik gęstości na górze tej strony ustawia to dla całej strony.`] }) : (0, x.jsxs)(`p`, { children: [(0, x.jsx)(`code`, { children: `data-density="compact"` }), ` gives the smaller controls of the desktop apps. It changes the control heights only, so text stays readable, and the compact sizes still clear the 24px target size. The density switch at the top of this site sets it on the whole page.`] }) }), (0, x.jsxs)(`div`, {
					className: `grid gap-4 md:grid-cols-2`,
					children: [(0, x.jsx)(o, {
						label: t ? `Standardowa, domyślna` : `Comfortable, the default`,
						children: (0, x.jsx)(`div`, {
							style: D,
							children: (0, x.jsx)(O, {})
						})
					}), (0, x.jsx)(o, {
						label: t ? `Zwarta` : `Compact`,
						children: (0, x.jsx)(`div`, {
							"data-density": `compact`,
							children: (0, x.jsx)(O, {})
						})
					})]
				})]
			}),
			(0, x.jsx)(d, {
				id: `reader-settings`,
				title: t ? `Ustawienia czytelnika` : `Reader settings`,
				children: (0, x.jsx)(s, { children: t ? (0, x.jsxs)(`p`, { children: [
					`Dwie klasy na elemencie głównym niosą ustawienia czytelnika aplikacji. `,
					(0, x.jsx)(`code`, { children: `a11y-reduce-motion` }),
					` zatrzymuje ruch tak jak ustawienie systemowe, a `,
					(0, x.jsx)(`code`, { children: `a11y-strong-focus` }),
					` rysuje obwódkę fokusa o grubości 3 px. Zarządzają nimi `,
					(0, x.jsx)(`code`, { children: `AccessibilityProvider` }),
					` i `,
					(0, x.jsx)(`code`, { children: `AccessibilitySettings` }),
					` z grupy theme, razem z rozmiarem tekstu i podkreślonymi linkami.`
				] }) : (0, x.jsxs)(`p`, { children: [
					`Two classes on the root carry the reader settings of the apps. `,
					(0, x.jsx)(`code`, { children: `a11y-reduce-motion` }),
					` stops motion like the system setting does, and `,
					(0, x.jsx)(`code`, { children: `a11y-strong-focus` }),
					` draws a 3px focus ring. `,
					(0, x.jsx)(`code`, { children: `AccessibilityProvider` }),
					` and `,
					(0, x.jsx)(`code`, { children: `AccessibilitySettings` }),
					` in the theme group manage them, with text size and underlined links.`
				] }) })
			})
		]
	});
}
export { k as Themes };
