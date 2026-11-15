import { A as e, F as t, i as n, n as r, p as i, r as a, s as o, t as s, u as c } from "./doc.DoLlUurT.js";
import { t as l } from "./Button.D4_9kLv-.js";
import { t as u } from "./Badge.CXZBI9XV.js";
var d = t();
function f() {
	return (0, d.jsxs)(a, { children: [
		(0, d.jsx)(o, {
			eyebrow: `Principles`,
			title: `Six rules every component keeps`,
			lead: `These rules are why a screen built from Skribly UI looks calm, reads the same in every theme and works from the keyboard. Each one is checked in review, and several are checked by the tests.`
		}),
		(0, d.jsxs)(c, {
			id: `one-accent`,
			title: `1. One accent`,
			children: [(0, d.jsx)(i, { children: (0, d.jsx)(`p`, { children: `Amber is the only accent. It marks the main action of a view, the current item and the focus ring, and nothing else. Status colours are for status: green says done, red says failed. When everything is coloured, nothing stands out.` }) }), (0, d.jsx)(r, {
				good: (0, d.jsxs)(`div`, {
					className: `flex flex-wrap gap-2`,
					children: [
						(0, d.jsx)(l, { children: `Publish` }),
						(0, d.jsx)(l, {
							variant: `outline`,
							children: `Preview`
						}),
						(0, d.jsx)(l, {
							variant: `ghost`,
							children: `Cancel`
						})
					]
				}),
				goodText: `Give a view one primary button and let the others step back.`,
				bad: (0, d.jsxs)(`div`, {
					className: `flex flex-wrap gap-2`,
					children: [
						(0, d.jsx)(l, { children: `Publish` }),
						(0, d.jsx)(l, { children: `Preview` }),
						(0, d.jsx)(l, {
							variant: `danger`,
							children: `Cancel`
						})
					]
				}),
				badText: `Make every button primary, or use the danger colour for an action that destroys nothing.`
			})]
		}),
		(0, d.jsxs)(c, {
			id: `colour-never-alone`,
			title: `2. Colour never alone`,
			children: [(0, d.jsx)(i, { children: (0, d.jsx)(`p`, { children: `About one man in twelve does not see red and green apart, and Windows high contrast replaces every colour. So every state pairs its colour with a word, a glyph or a shape. Badges carry a word, alerts carry a tone word for screen readers and an icon of their own shape, and the current page has a bar as well as a tint.` }) }), (0, d.jsx)(r, {
				good: (0, d.jsxs)(`div`, {
					className: `flex flex-wrap gap-2`,
					children: [
						(0, d.jsx)(u, {
							tone: `ok`,
							icon: (0, d.jsx)(e, { name: `action.check` }),
							children: `Passed`
						}),
						(0, d.jsx)(u, {
							tone: `warn`,
							icon: (0, d.jsx)(e, { name: `time.clock` }),
							children: `Waiting`
						}),
						(0, d.jsx)(u, {
							tone: `danger`,
							icon: (0, d.jsx)(e, { name: `status.error` }),
							children: `Failed`
						})
					]
				}),
				goodText: `Say the state in words, and add a glyph when the space allows.`,
				bad: (0, d.jsxs)(`div`, {
					className: `flex flex-wrap items-center gap-4`,
					children: [
						(0, d.jsx)(`span`, {
							className: `sr-only`,
							children: `Three coloured dots with no words`
						}),
						(0, d.jsx)(`span`, {
							"aria-hidden": !0,
							className: `size-3 rounded-full bg-ok forced-color-adjust-none`
						}),
						(0, d.jsx)(`span`, {
							"aria-hidden": !0,
							className: `size-3 rounded-full bg-warn forced-color-adjust-none`
						}),
						(0, d.jsx)(`span`, {
							"aria-hidden": !0,
							className: `size-3 rounded-full bg-danger forced-color-adjust-none`
						})
					]
				}),
				badText: `Let a dot of colour carry the meaning on its own.`
			})]
		}),
		(0, d.jsx)(c, {
			id: `accessible-by-default`,
			title: `3. Accessible by default`,
			children: (0, d.jsxs)(i, { children: [(0, d.jsx)(`p`, { children: `The accessible way is the only way a component offers. Behaviour comes from React Aria, so keyboard support, focus management and screen reader semantics follow the ARIA patterns. The focus ring is plain CSS in the page defaults, so a control that forgets its own still shows one. Targets are at least 24 by 24 pixels, messages that arrive later are read out, and motion stops when the reader asks for less.` }), (0, d.jsxs)(`p`, { children: [
				`The target is WCAG 2.2 AA. The `,
				(0, d.jsx)(`a`, {
					href: `/accessibility/`,
					children: `accessibility`
				}),
				` page lists what the library does for each criterion and what the app still owns.`
			] })] })
		}),
		(0, d.jsxs)(c, {
			id: `no-built-in-text`,
			title: `4. No built-in text`,
			children: [(0, d.jsx)(i, { children: (0, d.jsx)(`p`, { children: `The apps keep their own language files, so no component holds a word of its own. Every visible label and every accessible name, down to the close button of a toast, is a prop. A missing label is a type error, not a silent English default.` }) }), (0, d.jsx)(s, {
				language: `tsx`,
				title: `Labels come from the app`,
				code: `<ToastViewport
  toneLabels={{ ok: t('tone.ok'), info: t('tone.info'), warn: t('tone.warn'), danger: t('tone.danger') }}
  closeLabel={t('toast.close')}
  regionLabel={t('toast.region')}
/>`
			})]
		}),
		(0, d.jsxs)(c, {
			id: `with-and-without-react`,
			title: `5. Works with and without React`,
			children: [(0, d.jsx)(i, { children: (0, d.jsx)(`p`, { children: `A marketing page in Astro and an app in React should look like one product. The plain CSS classes match the React components, so a page with no JavaScript gets the same button, field, card and message.` }) }), (0, d.jsxs)(`div`, {
				className: `grid gap-4 md:grid-cols-2`,
				children: [(0, d.jsx)(n, {
					label: `React`,
					code: `<Button variant="outline">Cancel</Button>`,
					children: (0, d.jsxs)(`div`, {
						className: `flex flex-wrap gap-2`,
						children: [(0, d.jsx)(l, { children: `Save` }), (0, d.jsx)(l, {
							variant: `outline`,
							children: `Cancel`
						})]
					})
				}), (0, d.jsx)(n, {
					label: `Plain CSS`,
					language: `html`,
					code: `<button class="sk-button sk-button--outline">Cancel</button>`,
					children: (0, d.jsxs)(`div`, {
						className: `flex flex-wrap gap-2`,
						children: [(0, d.jsx)(`button`, {
							type: `button`,
							className: `sk-button`,
							children: `Save`
						}), (0, d.jsx)(`button`, {
							type: `button`,
							className: `sk-button sk-button--outline`,
							children: `Cancel`
						})]
					})
				})]
			})]
		}),
		(0, d.jsxs)(c, {
			id: `tokens-first`,
			title: `6. Tokens first`,
			children: [(0, d.jsx)(i, { children: (0, d.jsxs)(`p`, { children: [
				`Components use semantic utilities such as `,
				(0, d.jsx)(`code`, { children: `bg-surface` }),
				` and `,
				(0, d.jsx)(`code`, { children: `text-muted` }),
				`, never a hex colour, a `,
				(0, d.jsx)(`code`, { children: `gray-*` }),
				` class or the `,
				(0, d.jsx)(`code`, { children: `dark:` }),
				` variant. The tokens decide what a surface looks like in each theme, so a component is right in every theme without knowing which one is on.`
			] }) }), (0, d.jsxs)(`div`, {
				className: `grid gap-4 md:grid-cols-2`,
				children: [(0, d.jsx)(s, {
					language: `tsx`,
					title: `Do`,
					code: `<div className="border-border bg-surface text-fg" />`
				}), (0, d.jsx)(s, {
					language: `tsx`,
					title: `Don’t`,
					code: `<div className="bg-white text-gray-900 dark:bg-gray-900" />`
				})]
			})]
		})
	] });
}
export { f as Principles };
