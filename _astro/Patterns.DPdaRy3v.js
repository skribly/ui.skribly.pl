import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { t as n } from "./Pattern.BGzyAllr.js";
import { t as r } from "./marks.C2cuaS5v.js";
import { n as i, t as a } from "./brand.nQNNAVwx.js";
import { i as o, p as s, r as c, s as l, t as u, u as d } from "./doc.D2PtmWN6.js";
import { t as f } from "./jsx-runtime.yrTYNGQT.js";
var p = [
	`grid`,
	`dots`,
	`mosaic`,
	`ruled`,
	`hero`,
	`empty`
], m = e(t(), 1), h = f(), g = (e) => ({
	grid: [e.patternGrid, e.patternGridText],
	dots: [e.patternDots, e.patternDotsText],
	mosaic: [e.patternMosaic, e.patternMosaicText],
	ruled: [e.patternRuled, e.patternRuledText],
	hero: [e.patternHero, e.patternHeroText],
	empty: [e.patternEmpty, e.patternEmptyText]
});
function _(e, t) {
	return e === `empty` ? `<div class="sk-pattern sk-pattern--empty sk-product--${t}" aria-hidden="true"></div>` : `<section class="sk-pattern sk-pattern--${e} sk-product--${t}">
  <h2>…</h2>
  <p>…</p>
</section>`;
}
function v({ lang: e = `en` }) {
	let t = a(e), [f, v] = (0, m.useState)(`skribly`), y = (0, m.useId)(), b = g(t);
	return (0, h.jsxs)(c, {
		lang: e,
		children: [
			(0, h.jsx)(l, {
				eyebrow: t.overviewEyebrow,
				title: t.patternsTitle,
				lead: t.patternsLead
			}),
			(0, h.jsx)(d, {
				id: `rules`,
				title: t.patternsRulesTitle,
				children: (0, h.jsx)(s, { children: (0, h.jsx)(`p`, { children: t.patternsRules }) })
			}),
			(0, h.jsxs)(d, {
				id: `patterns`,
				title: t.patternsTitle,
				children: [(0, h.jsxs)(`div`, {
					className: `flex flex-col gap-1`,
					children: [(0, h.jsx)(`label`, {
						htmlFor: y,
						className: `text-body font-medium text-fg`,
						children: t.patternProduct
					}), (0, h.jsx)(`select`, {
						id: y,
						className: `sk-select max-w-xs`,
						value: f,
						onChange: (e) => v(e.target.value),
						children: r.map((e) => (0, h.jsx)(`option`, {
							value: e,
							children: i[e]
						}, e))
					})]
				}), p.map((e) => {
					let [r, i] = b[e];
					return (0, h.jsxs)(`div`, {
						className: `space-y-3`,
						children: [
							(0, h.jsxs)(`h3`, {
								id: `pattern-${e}`,
								className: `scroll-mt-24 text-[1.125rem] font-semibold text-fg`,
								children: [`${r} `, (0, h.jsx)(`code`, {
									className: `text-caption text-muted`,
									children: `.sk-pattern--${e}`
								})]
							}),
							(0, h.jsx)(s, { children: (0, h.jsx)(`p`, { children: i }) }),
							(0, h.jsx)(o, {
								label: r,
								code: _(e, f),
								language: `html`,
								children: e === `empty` ? (0, h.jsxs)(`div`, {
									className: `flex flex-col items-center gap-2 p-6`,
									children: [(0, h.jsx)(n, {
										pattern: `empty`,
										product: f
									}), (0, h.jsx)(`p`, {
										className: `text-body text-muted`,
										children: t.patternLiveMuted
									})]
								}) : (0, h.jsxs)(n, {
									pattern: e,
									product: f,
									className: `min-h-44 rounded-lg border border-border p-6`,
									children: [(0, h.jsx)(`p`, {
										className: `text-body font-semibold text-fg`,
										children: t.patternLiveText
									}), (0, h.jsx)(`p`, {
										className: `text-body text-muted`,
										children: t.patternLiveMuted
									})]
								})
							})
						]
					}, e);
				})]
			}),
			(0, h.jsxs)(d, {
				id: `use`,
				title: t.patternUseTitle,
				children: [
					(0, h.jsx)(u, {
						language: `tsx`,
						title: t.patternCodeReact,
						code: `import { Pattern } from '@skribly/ui/brand'

<Pattern pattern="ruled" product="${f}" as="section" className="p-6">
  <h2>…</h2>
</Pattern>
<Pattern pattern="empty" product="${f}" />`
					}),
					(0, h.jsx)(u, {
						language: `astro`,
						title: t.patternCodeAstro,
						code: `---
import Pattern from '@skribly/ui/astro/Pattern.astro'
---

<Pattern pattern="hero" product="${f}" as="header">
  <h1>…</h1>
</Pattern>`
					}),
					(0, h.jsx)(u, {
						language: `css`,
						title: t.patternCodeHtml,
						code: `@import '@skribly/ui/patterns.css';

.notes {
  --sk-pattern-margin: 4rem;
}`
					})
				]
			})
		]
	});
}
export { v as BrandPatterns };
