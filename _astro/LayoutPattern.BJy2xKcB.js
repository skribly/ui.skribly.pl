import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { t as n } from "./Button.DRxd_7vr.js";
import { t as r } from "./Badge.Cwl75Dkx.js";
import { t as i } from "./Range.CCnOCwf_.js";
import { d as a, f as o, p as s, r as c, s as l, t as u, u as d } from "./doc.D2PtmWN6.js";
import { t as f } from "./jsx-runtime.yrTYNGQT.js";
var p = e(t(), 1), m = f(), h = [
	[
		`base`,
		`0 to 639px`,
		`Phones. Design here first: one column, full-width buttons where they help.`
	],
	[
		`sm`,
		`640px (40rem)`,
		`Large phones and small tablets. Short fields may share a row.`
	],
	[
		`md`,
		`768px (48rem)`,
		`Tablets. App sidebars stop being sheets.`
	],
	[
		`lg`,
		`1024px (64rem)`,
		`Laptops. Persistent sidebars and two-column pages.`
	],
	[
		`xl`,
		`1280px (80rem)`,
		`Desktops. A third column, such as an outline of the page.`
	],
	[
		`2xl`,
		`1536px (96rem)`,
		`Wide screens. Keep text lines under about 75 characters.`
	]
];
function g() {
	let [e, t] = (0, p.useState)(720);
	return (0, m.jsxs)(`div`, {
		className: `space-y-4`,
		children: [
			(0, m.jsx)(i, {
				label: `Preview width in pixels`,
				value: e,
				onChange: (e) => t(e),
				minValue: 320,
				maxValue: 1100,
				step: 10,
				showBounds: !0,
				className: `max-w-md`
			}),
			(0, m.jsx)(`div`, {
				className: `overflow-hidden rounded-xl border border-dashed border-border-strong bg-sunken p-2`,
				children: (0, m.jsx)(`div`, {
					className: `@container mx-auto max-w-full rounded-lg border border-border bg-bg p-4 transition-[width] motion-reduce:transition-none`,
					style: { width: e },
					children: (0, m.jsxs)(`div`, {
						className: `grid gap-4 @2xl:grid-cols-[12rem_minmax(0,1fr)]`,
						children: [(0, m.jsxs)(`nav`, {
							"aria-label": `Example sidebar`,
							className: `rounded-md border border-border bg-side p-3 text-caption`,
							children: [(0, m.jsx)(`p`, {
								className: `mb-2 font-semibold text-fg`,
								children: `Projects`
							}), (0, m.jsxs)(`ul`, {
								className: `flex flex-wrap gap-x-3 gap-y-1 text-muted @2xl:flex-col`,
								children: [
									(0, m.jsx)(`li`, { children: `Reports` }),
									(0, m.jsx)(`li`, { children: `Roadmap` }),
									(0, m.jsx)(`li`, { children: `Archive` })
								]
							})]
						}), (0, m.jsxs)(`div`, {
							className: `min-w-0 space-y-3`,
							children: [(0, m.jsxs)(`div`, {
								className: `flex flex-wrap items-center justify-between gap-2`,
								children: [(0, m.jsx)(`p`, {
									className: `text-title font-semibold`,
									children: `Reports`
								}), (0, m.jsx)(n, {
									size: `sm`,
									children: `New report`
								})]
							}), (0, m.jsx)(`ul`, {
								className: `grid gap-3 @md:grid-cols-2 @4xl:grid-cols-3`,
								children: [
									`Quarterly report`,
									`Release notes`,
									`Team survey`
								].map((e, t) => (0, m.jsxs)(`li`, {
									className: `rounded-md border border-border bg-surface p-3`,
									children: [
										(0, m.jsx)(`p`, {
											className: `font-medium break-words`,
											children: e
										}),
										(0, m.jsx)(`p`, {
											className: `mt-1 text-caption text-muted`,
											children: `Updated ${t + 2} days ago`
										}),
										(0, m.jsx)(r, {
											size: `sm`,
											tone: t === 0 ? `ok` : `neutral`,
											className: `mt-2`,
											children: t === 0 ? `Published` : `Draft`
										})
									]
								}, e))
							})]
						})]
					})
				})
			}),
			(0, m.jsx)(`p`, {
				className: `text-caption text-muted`,
				"aria-live": `polite`,
				children: e - 34 < 448 ? `One column: the sidebar sits on top as a row of links.` : e - 34 < 672 ? `The cards share two columns; the sidebar is still on top.` : e - 34 < 896 ? `The sidebar moves to the side.` : `Three columns of cards beside the sidebar.`
			})
		]
	});
}
function _() {
	return (0, m.jsxs)(c, { children: [
		(0, m.jsx)(l, {
			eyebrow: `Patterns`,
			title: `Layout and density`,
			lead: `Every Skribly screen works from 320px up, which is also a 1280px window at 400% zoom. Start narrow, let content wrap before it scrolls, and let components answer to the box they are in.`
		}),
		(0, m.jsx)(d, {
			id: `from-320`,
			title: `Start at 320px`,
			children: (0, m.jsx)(s, { children: (0, m.jsxs)(`ul`, { children: [
				(0, m.jsx)(`li`, { children: `Design the 320px layout first. Wider layouts add columns; they never remove content.` }),
				(0, m.jsx)(`li`, { children: `Nothing scrolls sideways except data tables, code and timelines, and those scroll inside their own focusable box.` }),
				(0, m.jsxs)(`li`, { children: [
					`Long words, links and file names break instead of pushing the page wider. Use `,
					(0, m.jsx)(`code`, { children: `min-w-0` }),
					` on flex and grid children that hold text.`
				] }),
				(0, m.jsx)(`li`, { children: `Keep the side gutter at 16px on phones. Touch targets stay at least 24px, and 44px for the main actions of a page.` }),
				(0, m.jsx)(`li`, { children: `Respect the safe areas of phones with notches in fixed bars.` })
			] }) })
		}),
		(0, m.jsxs)(d, {
			id: `container-queries`,
			title: `Answer to the box, not the window`,
			children: [
				(0, m.jsx)(s, { children: (0, m.jsxs)(`p`, { children: [
					`A component does not know whether it sits in a wide page or a narrow sidebar, so components use container queries: `,
					(0, m.jsx)(`code`, { children: `@container` }),
					` on the box, then `,
					(0, m.jsx)(`code`, { children: `@md:` }),
					` and friends inside. Drag the slider to watch a layout reflow.`
				] }) }),
				(0, m.jsx)(g, {}),
				(0, m.jsx)(u, {
					language: `tsx`,
					code: `<div className="@container">
  <div className="grid gap-4 @2xl:grid-cols-[12rem_minmax(0,1fr)]">
    <nav>…</nav>
    <ul className="grid gap-3 @md:grid-cols-2 @4xl:grid-cols-3">…</ul>
  </div>
</div>`
				})
			]
		}),
		(0, m.jsxs)(d, {
			id: `breakpoints`,
			title: `Breakpoints`,
			children: [(0, m.jsx)(s, { children: (0, m.jsx)(`p`, { children: `Page layouts use Tailwind’s default breakpoints, unchanged, so app code and the library agree.` }) }), (0, m.jsxs)(o, {
				label: `Breakpoints`,
				children: [
					(0, m.jsx)(`caption`, {
						className: `sr-only`,
						children: `Breakpoints, their width and what changes there`
					}),
					(0, m.jsx)(`thead`, { children: (0, m.jsxs)(`tr`, { children: [
						(0, m.jsx)(`th`, {
							scope: `col`,
							children: `Prefix`
						}),
						(0, m.jsx)(`th`, {
							scope: `col`,
							children: `From`
						}),
						(0, m.jsx)(`th`, {
							scope: `col`,
							children: `Use it for`
						})
					] }) }),
					(0, m.jsx)(`tbody`, { children: h.map(([e, t, n]) => (0, m.jsxs)(`tr`, { children: [
						(0, m.jsx)(`th`, {
							scope: `row`,
							children: (0, m.jsx)(`code`, { children: e })
						}),
						(0, m.jsx)(`td`, {
							className: `whitespace-nowrap`,
							children: t
						}),
						(0, m.jsx)(`td`, { children: n })
					] }, e)) })
				]
			})]
		}),
		(0, m.jsx)(d, {
			id: `layouts`,
			title: `Common layouts`,
			children: (0, m.jsxs)(`div`, {
				className: `grid gap-6 2xl:grid-cols-2`,
				children: [
					(0, m.jsxs)(a, {
						title: `Stack`,
						children: [(0, m.jsx)(s, { children: (0, m.jsx)(`p`, { children: `The default. Space between items comes from the gap, never from margins on the items.` }) }), (0, m.jsx)(u, {
							language: `tsx`,
							code: `<div className="flex flex-col gap-4">…</div>`
						})]
					}),
					(0, m.jsxs)(a, {
						title: `Cluster`,
						children: [(0, m.jsx)(s, { children: (0, m.jsx)(`p`, { children: `Buttons, badges and filters in a row that wraps instead of overflowing.` }) }), (0, m.jsx)(u, {
							language: `tsx`,
							code: `<div className="flex flex-wrap items-center gap-2">…</div>`
						})]
					}),
					(0, m.jsxs)(a, {
						title: `Card grid`,
						children: [(0, m.jsx)(s, { children: (0, m.jsx)(`p`, { children: `As many columns as fit, each at least 16rem, one column on phones.` }) }), (0, m.jsx)(u, {
							language: `tsx`,
							code: `<ul className="grid grid-cols-[repeat(auto-fill,minmax(min(16rem,100%),1fr))] gap-4">…</ul>`
						})]
					}),
					(0, m.jsxs)(a, {
						title: `Sidebar and content`,
						children: [(0, m.jsx)(s, { children: (0, m.jsx)(`p`, { children: `For apps, AppLayout does this and turns the sidebar into a sheet on narrow screens. For pages, a grid that stacks below lg.` }) }), (0, m.jsx)(u, {
							language: `tsx`,
							code: `<div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]">…</div>`
						})]
					})
				]
			})
		}),
		(0, m.jsx)(d, {
			id: `spacing`,
			title: `Spacing`,
			children: (0, m.jsx)(s, { children: (0, m.jsxs)(`p`, { children: [
				`Space follows 4px steps: `,
				(0, m.jsx)(`code`, { children: `gap-1` }),
				` is 4px and `,
				(0, m.jsx)(`code`, { children: `gap-4` }),
				` is 16px, the same as the `,
				(0, m.jsx)(`code`, { children: `--sk-space-*` }),
				` tokens. Use small steps inside a component, 16 to 24px between components and 48px or more between sections of a page. Related things sit closer than unrelated ones.`
			] }) })
		}),
		(0, m.jsxs)(d, {
			id: `density`,
			title: `Density`,
			children: [(0, m.jsx)(s, { children: (0, m.jsxs)(`p`, { children: [(0, m.jsx)(`code`, { children: `data-density="compact"` }), ` on the root shrinks the controls for the desktop tools, where a lot sits on one screen. Use it for a whole app, not for one panel, so controls keep one size per screen. Try the density switch at the top of this site: every control on this page follows it.`] }) }), (0, m.jsx)(u, {
				language: `html`,
				code: `<html data-theme="dark" data-density="compact">`
			})]
		})
	] });
}
export { _ as LayoutPattern, g as ReflowDemo };
