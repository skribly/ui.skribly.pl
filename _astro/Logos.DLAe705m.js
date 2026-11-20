import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { d as t, g as n } from "./useOverflow.Dq483xd0.js";
import { n as r } from "./react-dom.B9zIfLd2.js";
import { t as i } from "./Logo.TNW2dPFd.js";
import { t as a } from "./Pattern.WyWNzH-E.js";
import { t as o } from "./marks.C2cuaS5v.js";
import { n as s, t as c } from "./brand.Chqxh3pf.js";
import { _ as l, n as u, p as d, r as f, s as p, t as m, u as h } from "./doc.CpwJe6Re.js";
var g = e(r(), 1), _ = [
	`mark`,
	`horizontal`,
	`stacked`
], v = [
	`light`,
	`dark`,
	`mono`
], y = 41.5, b = {
	mark: 61.5,
	horizontal: 61.5,
	stacked: 91.23
}, x = (e, t, n) => `/brand/files/${e}-${t}-${n}.svg`, S = (e) => `/brand/downloads/${e === `all` ? `skribly-logos` : `skribly-${e}`}.zip`, C = (e, t) => ({
	mark: e.layoutMark,
	horizontal: e.layoutHorizontal,
	stacked: e.layoutStacked
})[t], w = (e, t) => ({
	light: e.schemeLight,
	dark: e.schemeDark,
	mono: e.schemeMono
})[t], T = n(), E = (e, t) => `${b[e] / y * t / 16}rem`, D = `inline-flex min-h-10 items-center gap-2 rounded-md border border-border-strong bg-surface px-3 text-body font-medium text-fg no-underline hover:bg-hover`;
function O() {
	return (0, T.jsxs)(`svg`, {
		viewBox: `-4 -4 72 75.5`,
		className: `h-56 w-auto max-w-full text-fg`,
		"aria-hidden": `true`,
		children: [
			(0, T.jsx)(`rect`, {
				x: `3`,
				y: `3`,
				width: `58`,
				height: `61.5`,
				fill: `var(--sk-accent-soft)`
			}),
			(0, T.jsx)(`rect`, {
				x: `13`,
				y: `13`,
				width: `38`,
				height: `41.5`,
				fill: `var(--sk-bg)`
			}),
			(0, T.jsx)(`rect`, {
				x: `3`,
				y: `3`,
				width: `58`,
				height: `61.5`,
				fill: `none`,
				stroke: `currentColor`,
				strokeWidth: `0.5`,
				strokeDasharray: `1.5 1.5`
			}),
			(0, T.jsx)(`rect`, {
				x: `13`,
				y: `13`,
				width: `20`,
				height: `20`,
				rx: `2.5`,
				fill: `var(--sk-accent)`
			}),
			(0, T.jsx)(`rect`, {
				x: `37`,
				y: `13`,
				width: `14`,
				height: `20`,
				rx: `2`,
				fill: `currentColor`
			}),
			(0, T.jsx)(`rect`, {
				x: `13`,
				y: `37`,
				width: `38`,
				height: `7.5`,
				rx: `2`,
				fill: `currentColor`
			}),
			(0, T.jsx)(`rect`, {
				x: `13`,
				y: `48`,
				width: `19`,
				height: `6`,
				rx: `2`,
				fill: `currentColor`
			}),
			(0, T.jsx)(`circle`, {
				cx: `38.5`,
				cy: `51`,
				r: `3`,
				fill: `var(--sk-accent)`
			}),
			(0, T.jsx)(`circle`, {
				cx: `47.5`,
				cy: `51`,
				r: `3`,
				fill: `var(--sk-accent)`,
				opacity: `0.55`
			})
		]
	});
}
function k({ lang: e = `en` }) {
	let n = c(e), [r, y] = (0, g.useState)(`skribly`), b = (0, g.useId)(), k = s[r];
	return (0, T.jsxs)(f, {
		lang: e,
		children: [
			(0, T.jsx)(p, {
				eyebrow: n.overviewEyebrow,
				title: n.logosTitle,
				lead: n.logosLead
			}),
			(0, T.jsxs)(h, {
				id: `downloads`,
				title: n.downloadsTitle,
				children: [
					(0, T.jsx)(d, { children: (0, T.jsx)(`p`, { children: n.downloadsText }) }),
					(0, T.jsxs)(`a`, {
						href: S(`all`),
						download: !0,
						className: D,
						children: [(0, T.jsx)(t, {
							name: `action.download`,
							"aria-hidden": !0,
							className: `size-4`
						}), n.downloadAll]
					}),
					(0, T.jsx)(`ul`, {
						className: `m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,15rem),1fr))] gap-2 p-0`,
						children: o.map((e) => (0, T.jsxs)(`li`, {
							className: `flex flex-col gap-3 rounded-lg border border-border bg-surface p-3`,
							children: [(0, T.jsx)(`span`, {
								"data-theme": `light`,
								className: `flex rounded-md bg-bg p-2`,
								children: (0, T.jsx)(`img`, {
									src: x(e, `horizontal`, `light`),
									alt: ``,
									className: `h-10 w-auto`
								})
							}), (0, T.jsx)(`a`, {
								href: S(e),
								download: !0,
								className: `text-body text-accent-text underline`,
								children: l(n.downloadOne, { name: s[e] })
							})]
						}, e))
					})
				]
			}),
			(0, T.jsxs)(h, {
				id: `layouts`,
				title: n.layoutsTitle,
				children: [
					(0, T.jsx)(d, { children: (0, T.jsx)(`p`, { children: n.layoutsText }) }),
					(0, T.jsxs)(`div`, {
						className: `flex flex-col gap-1`,
						children: [(0, T.jsx)(`label`, {
							htmlFor: b,
							className: `text-body font-medium text-fg`,
							children: n.columnProduct
						}), (0, T.jsx)(`select`, {
							id: b,
							className: `sk-select max-w-xs`,
							value: r,
							onChange: (e) => y(e.target.value),
							children: o.map((e) => (0, T.jsx)(`option`, {
								value: e,
								children: s[e]
							}, e))
						})]
					}),
					(0, T.jsx)(`div`, {
						className: `grid gap-3 md:grid-cols-3`,
						children: _.flatMap((e) => v.map((t) => (0, T.jsxs)(`figure`, {
							className: `m-0 flex min-w-0 flex-col overflow-hidden rounded-lg border border-border`,
							children: [(0, T.jsx)(`div`, {
								"data-theme": t === `dark` ? `dark` : `light`,
								className: `grid min-h-36 place-items-center bg-bg p-4`,
								children: (0, T.jsx)(`img`, {
									src: x(r, e, t),
									alt: l(n.fileAlt, {
										name: k,
										layout: C(n, e),
										scheme: w(n, t)
									}),
									className: `h-20 w-auto max-w-full object-contain`
								})
							}), (0, T.jsxs)(`figcaption`, {
								className: `flex items-center justify-between gap-2 border-t border-border bg-surface px-3 py-2 text-caption text-muted`,
								children: [(0, T.jsx)(`span`, { children: `${C(n, e)}, ${w(n, t)}` }), (0, T.jsx)(`a`, {
									href: x(r, e, t),
									download: !0,
									className: `text-accent-text underline`,
									children: n.openSvg
								})]
							})]
						}, `${e}-${t}`)))
					})
				]
			}),
			(0, T.jsxs)(h, {
				id: `clear-space`,
				title: n.clearSpaceTitle,
				children: [(0, T.jsx)(d, { children: (0, T.jsx)(`p`, { children: n.clearSpaceText }) }), (0, T.jsxs)(`figure`, {
					className: `m-0 flex flex-col gap-3 rounded-xl border border-border bg-bg p-6`,
					children: [(0, T.jsx)(O, {}), (0, T.jsx)(`figcaption`, {
						className: `text-caption text-muted`,
						children: n.clearSpaceAlt
					})]
				})]
			}),
			(0, T.jsxs)(h, {
				id: `minimum`,
				title: n.minimumTitle,
				children: [(0, T.jsx)(d, { children: (0, T.jsx)(`p`, { children: n.minimumText }) }), (0, T.jsxs)(`ul`, {
					"data-theme": `light`,
					className: `m-0 grid list-none gap-4 rounded-xl bg-bg p-6 text-fg`,
					children: [
						(0, T.jsxs)(`li`, {
							className: `flex flex-wrap items-center gap-4`,
							children: [(0, T.jsx)(`img`, {
								src: x(`skribly`, `mark`, `light`),
								alt: ``,
								style: { height: E(`mark`, 24) }
							}), (0, T.jsx)(`span`, {
								className: `text-body text-fg`,
								children: n.minimumMark
							})]
						}),
						(0, T.jsxs)(`li`, {
							className: `flex flex-wrap items-center gap-4`,
							children: [(0, T.jsx)(`img`, {
								src: x(`skribly`, `horizontal`, `light`),
								alt: ``,
								style: { height: E(`horizontal`, 24) }
							}), (0, T.jsx)(`span`, {
								className: `text-body text-fg`,
								children: n.minimumHorizontal
							})]
						}),
						(0, T.jsxs)(`li`, {
							className: `flex flex-wrap items-center gap-4`,
							children: [(0, T.jsx)(`img`, {
								src: x(`skribly`, `stacked`, `light`),
								alt: ``,
								style: { height: E(`stacked`, 32) }
							}), (0, T.jsx)(`span`, {
								className: `text-body text-fg`,
								children: n.minimumStacked
							})]
						})
					]
				})]
			}),
			(0, T.jsxs)(h, {
				id: `rules`,
				title: n.rulesTitle,
				children: [
					(0, T.jsx)(u, {
						good: (0, T.jsx)(`span`, {
							"data-theme": `light`,
							className: `flex rounded-md bg-bg`,
							children: (0, T.jsx)(`img`, {
								src: x(`hub`, `horizontal`, `light`),
								alt: ``,
								className: `h-14 w-auto`
							})
						}),
						bad: (0, T.jsx)(`span`, {
							"data-theme": `light`,
							className: `flex overflow-hidden rounded-md bg-bg`,
							children: (0, T.jsx)(`img`, {
								src: x(`hub`, `horizontal`, `light`),
								alt: ``,
								className: `h-14 w-auto origin-left scale-x-[1.7] scale-y-[0.8]`
							})
						}),
						goodText: n.ruleFilesDo,
						badText: n.ruleStretchDont
					}),
					(0, T.jsx)(u, {
						good: (0, T.jsx)(i, {
							kind: `hub`,
							size: 56
						}),
						bad: (0, T.jsx)(`span`, {
							style: { "--sk-tool-hub": `var(--sk-tool-trust)` },
							children: (0, T.jsx)(i, {
								kind: `hub`,
								size: 56
							})
						}),
						goodText: n.ruleColourDo,
						badText: n.ruleColourDont
					}),
					(0, T.jsx)(u, {
						good: (0, T.jsx)(a, {
							pattern: `grid`,
							product: `hub`,
							className: `grid min-h-24 place-items-center rounded-lg`,
							children: (0, T.jsx)(i, {
								kind: `hub`,
								size: 56
							})
						}),
						bad: (0, T.jsx)(`div`, {
							className: `grid min-h-24 place-items-center rounded-lg bg-[repeating-linear-gradient(45deg,var(--sk-tool-hub)_0_6px,var(--sk-tool-tracker)_6px_12px,var(--sk-tool-docs)_12px_18px)]`,
							children: (0, T.jsx)(`span`, {
								className: `drop-shadow-lg`,
								children: (0, T.jsx)(i, {
									kind: `hub`,
									size: 56
								})
							})
						}),
						goodText: n.rulePlainDo,
						badText: n.rulePhotoDont
					})
				]
			}),
			(0, T.jsxs)(h, {
				id: `icons`,
				title: n.iconsTitle,
				children: [
					(0, T.jsx)(d, { children: (0, T.jsx)(`p`, { children: n.iconsText }) }),
					(0, T.jsx)(m, {
						language: `html`,
						label: l(n.iconsLinks, { name: s.docs }),
						code: `<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/manifest.webmanifest" />`
					}),
					(0, T.jsx)(m, {
						language: `js`,
						label: l(n.iconsImports, { name: s.docs }),
						code: `import favicon from '@skribly/ui/site/favicons/docs/favicon.svg?url&no-inline'
import appleIcon from '@skribly/ui/site/favicons/docs/apple-touch-icon.png?url&no-inline'`
					})
				]
			})
		]
	});
}
export { k as BrandLogos };
