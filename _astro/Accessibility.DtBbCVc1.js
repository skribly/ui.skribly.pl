import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { t as n } from "./Kbd.BlqN-oOu.js";
import { S as r, d as i, f as a, p as o, r as s, s as c, t as l, u } from "./doc.D2PtmWN6.js";
import { t as d } from "./catalog.B1U1lZn4.js";
import { t as f } from "./jsx-runtime.yrTYNGQT.js";
var p = e(t(), 1), m = f(), h = [
	[
		`1.1.1`,
		`Non-text content`,
		`A`,
		`Icons are hidden from screen readers or named. IconButton needs a label; Logo is decoration unless given one.`,
		`Alt text for the images it shows.`
	],
	[
		`1.3.1`,
		`Info and relationships`,
		`A`,
		`Native elements and React Aria roles. Labels, help and errors are linked to their control; tables have header cells; heading levels are props.`,
		`The heading outline and landmarks of each page.`
	],
	[
		`1.3.5`,
		`Identify input purpose`,
		`AA`,
		`Fields pass autoComplete through; the sign-in and reset forms set it.`,
		`autoComplete on fields for personal data.`
	],
	[
		`1.4.1`,
		`Use of colour`,
		`A`,
		`Every tone pairs its colour with a word, an icon shape or both.`,
		`The same rule in its own views and charts.`
	],
	[
		`1.4.3`,
		`Contrast (minimum)`,
		`AA`,
		`Text pairs reach 4.5:1 in light and dark and 7:1 in high contrast. The tests check them.`,
		`Its own colours, and text over images.`
	],
	[
		`1.4.4`,
		`Resize text`,
		`AA`,
		`Sizes are in rem and follow the browser text size.`,
		`No fixed pixel font sizes in its own CSS.`
	],
	[
		`1.4.10`,
		`Reflow`,
		`AA`,
		`Components wrap or stack down to 320px; wide tables and code scroll in their own focusable box.`,
		`A page layout that reflows at 320px.`
	],
	[
		`1.4.11`,
		`Non-text contrast`,
		`AA`,
		`Control borders and the focus ring reach 3:1 in light and dark and 4.5:1 in high contrast, checked by the tests.`,
		`Its own icons and chart marks.`
	],
	[
		`1.4.12`,
		`Text spacing`,
		`AA`,
		`Text wraps and boxes grow with it rather than clipping.`,
		`Fixed-height boxes of its own.`
	],
	[
		`1.4.13`,
		`Content on hover or focus`,
		`AA`,
		`Tooltips show on focus, stay while hovered and close with Escape.`,
		`Nothing extra.`
	],
	[
		`2.1.1`,
		`Keyboard`,
		`A`,
		`Every control works from the keyboard. Dragging always has a keyboard path.`,
		`Custom widgets it builds itself.`
	],
	[
		`2.1.2`,
		`No keyboard trap`,
		`A`,
		`Dialogs keep focus on purpose, close with Escape and return focus to the trigger.`,
		`Nothing extra.`
	],
	[
		`2.2.1`,
		`Timing adjustable`,
		`A`,
		`Success and information toasts stay at least 5 seconds and pause on hover or focus; warnings, errors and toasts with an action stay until closed.`,
		`No timeouts on its own messages.`
	],
	[
		`2.3.1`,
		`Three flashes`,
		`A`,
		`Nothing flashes. Spinners turn; pulses fade slowly and stop under reduced motion.`,
		`Its own animations and video.`
	],
	[
		`2.4.1`,
		`Bypass blocks`,
		`A`,
		`SkipLink and MainContent give a jump to the content; layouts use landmarks.`,
		`A skip link on every page.`
	],
	[
		`2.4.3`,
		`Focus order`,
		`A`,
		`Reading order matches the visual order; focus returns after overlays close.`,
		`The order of its own layout.`
	],
	[
		`2.4.6`,
		`Headings and labels`,
		`AA`,
		`Every label and heading is a prop, so it can describe its purpose.`,
		`Words that describe the purpose.`
	],
	[
		`2.4.7`,
		`Focus visible`,
		`AA`,
		`One focus ring for every element from the page defaults, 3px with the strong focus setting.`,
		`Not removing outlines in its own CSS.`
	],
	[
		`2.4.11`,
		`Focus not obscured (minimum)`,
		`AA`,
		`Rings are drawn inside boxes that clip; overlays open beside their trigger.`,
		`scroll-padding under its sticky headers and footers.`
	],
	[
		`2.5.3`,
		`Label in name`,
		`A`,
		`The visible label is the accessible name; icon buttons show their name as a tip.`,
		`Keep visible words and labels the same.`
	],
	[
		`2.5.7`,
		`Dragging movements`,
		`AA`,
		`Reordering has NudgeButtons, splitters move with keys, file drops have a button.`,
		`A single-pointer path for its own drag features.`
	],
	[
		`2.5.8`,
		`Target size (minimum)`,
		`AA`,
		`Targets are at least 24 by 24 pixels, also in the compact density.`,
		`Spacing between its own small targets.`
	],
	[
		`3.2.2`,
		`On input`,
		`A`,
		`Choosing an option never submits a form or moves to another page by itself.`,
		`The same in its own handlers.`
	],
	[
		`3.3.1`,
		`Error identification`,
		`A`,
		`Errors are text with an icon, set aria-invalid and are linked to their field.`,
		`Error messages that say what is wrong.`
	],
	[
		`3.3.2`,
		`Labels or instructions`,
		`A`,
		`Fields have a visible label, a required or optional mark and help text.`,
		`The words of each label and hint.`
	],
	[
		`3.3.3`,
		`Error suggestion`,
		`AA`,
		`errorMessage holds the fix, and FormErrorSummary links to each field.`,
		`Messages that say how to fix it.`
	],
	[
		`3.3.8`,
		`Accessible authentication (minimum)`,
		`AA`,
		`The sign-in forms allow paste and password managers through autocomplete.`,
		`No puzzles or copying codes by hand.`
	],
	[
		`4.1.2`,
		`Name, role, value`,
		`A`,
		`React Aria sets roles, states and properties; the types require every name.`,
		`Names for its own custom controls.`
	],
	[
		`4.1.3`,
		`Status messages`,
		`AA`,
		`Toasts, flash messages, live alerts, form statuses and announce() use polite or assertive live regions.`,
		`Announcing results of its own async work.`
	]
], g = (...e) => (0, m.jsx)(`span`, {
	className: `inline-flex flex-wrap items-center gap-1`,
	children: e.map((e, t) => (0, m.jsxs)(p.Fragment, { children: [t > 0 ? (0, m.jsx)(`span`, {
		className: `text-caption text-muted`,
		children: `or`
	}) : null, (0, m.jsx)(n, { children: e })] }, e))
}), _ = [
	{
		id: `keys-everywhere`,
		title: `Everywhere`,
		rows: [
			[g(`Tab`), `Moves to the next control. The first press on a page shows the skip link.`],
			[g(`Shift+Tab`), `Moves to the previous control.`],
			[g(`F6`), `Moves focus into the toast stack while toasts are shown.`],
			[g(`Escape`), `Closes the open menu, popover, tooltip or dialog and returns focus to what opened it.`]
		]
	},
	{
		id: `keys-buttons`,
		title: `Buttons, toggles and links`,
		rows: [
			[g(`Enter`, `Space`), `Presses a button or flips a toggle, a checkbox or a switch.`],
			[g(`Enter`), `Follows a link. Links also open the browser menu with a right click.`],
			[g(`←`, `→`), `Moves between the buttons of a toolbar, which is a single Tab stop.`]
		]
	},
	{
		id: `keys-choices`,
		title: `Tabs, segmented controls and radio groups`,
		rows: [
			[g(`←`, `→`), `Moves and selects; Up and Down in vertical tab lists.`],
			[g(`Home`, `End`), `Goes to the first or the last tab.`],
			[g(`Delete`, `Backspace`), `Closes the focused tab of ClosableTabs.`]
		]
	},
	{
		id: `keys-menus`,
		title: `Menus, selects and search lists`,
		rows: [
			[g(`Enter`, `Space`, `↓`), `Opens a menu or a select on its first item; Up opens a menu on its last.`],
			[g(`↑`, `↓`), `Moves through items while focus stays in the search field of GlobalSearch, CommandPalette and QuickOpen.`],
			[g(`A–Z`), `Typing a letter jumps to the first matching item.`],
			[g(`Enter`), `Runs or picks the highlighted item.`]
		]
	},
	{
		id: `keys-collections`,
		title: `Lists, tables and trees`,
		rows: [
			[g(`↑`, `↓`), `Moves between rows; arrows move between cells in a DataTable.`],
			[g(`Home`, `End`, `Page Up`, `Page Down`), `Jumps through long lists, also through rows a VirtualList has not drawn yet.`],
			[g(`Space`), `Selects a row.`],
			[g(`→`, `←`), `Opens or closes a tree branch, or moves to its child or parent.`],
			[g(`Enter`), `Picks a dragged item up and drops it; arrows choose the place and Escape cancels.`]
		]
	},
	{
		id: `keys-ranges`,
		title: `Sliders, splitters and date fields`,
		rows: [
			[g(`←`, `→`, `↑`, `↓`), `Steps a slider, moves a splitter or changes a date segment.`],
			[g(`Page Up`, `Page Down`), `Jumps further, or by a month in the calendar.`],
			[g(`Home`, `End`), `Goes to the limits.`],
			[g(`Enter`), `Collapses and restores a split view or a dock.`]
		]
	},
	{
		id: `keys-text`,
		title: `Text entry`,
		rows: [
			[g(`Enter`), `Sends from the Composer, adds a chip in ChipInput, submits a search field.`],
			[g(`Shift+Enter`), `Adds a line in the Composer.`],
			[g(`Ctrl+Enter`, `⌘+Enter`), `Posts from a CommentForm.`],
			[g(`Escape`), `Clears a search field.`]
		]
	}
];
function v() {
	return (0, m.jsxs)(s, { children: [
		(0, m.jsx)(c, {
			eyebrow: `Accessibility`,
			title: `Built to help your app meet WCAG 2.2 AA`,
			lead: `Skribly UI aims at WCAG 2.2 Level AA in everything it ships. This page says how, what the tests check, and what stays with the app that uses it.`
		}),
		(0, m.jsxs)(u, {
			id: `target`,
			title: `The target, and what it is not`,
			children: [(0, m.jsx)(r, {
				tone: `info`,
				toneLabel: `Information`,
				title: `No claim of conformance`,
				children: `Conformance belongs to whole pages, not to parts. A library cannot make an app conformant on its own, and Skribly UI has not been audited or certified. It removes the common failures from the parts it supplies, and the app still owns its content, its words, its page structure and its own CSS.`
			}), (0, m.jsx)(o, { children: (0, m.jsx)(`p`, { children: `Every component is designed against the AA criteria of WCAG 2.2, built on React Aria so keyboard, focus and screen reader behaviour follow the ARIA Authoring Practices, and documented with its own accessibility notes on its page.` }) })]
		}),
		(0, m.jsxs)(u, {
			id: `tests`,
			title: `What the tests check`,
			children: [(0, m.jsx)(`ul`, {
				className: `grid gap-3 md:grid-cols-2`,
				children: [
					[`axe on every demo`, `${d.demos} demos run through axe-core in the light, dark and high contrast themes: ${d.demos * 3} runs on every npm test.`],
					[`Contrast of the token pairs`, `Text and tint pairs, control borders and the focus ring are measured in each theme against 4.5:1 and 3:1, or 7:1 and 4.5:1 in high contrast.`],
					[`Every component is shown`, `A test fails when an exported component has no demo, so nothing ships without being run through axe.`],
					[`Behaviour per component`, `Each component has Testing Library tests for its keyboard paths, accessible names, states and live messages.`],
					[`This site in a real browser`, `Before each release every page of this site is opened in Chromium at 320 and 1280 pixels wide and run through axe with layout, so target size, colour contrast in all three themes, links in text and scroll boxes are measured too. A page that scrolls sideways or is not found fails the build.`]
				].map(([e, t]) => (0, m.jsxs)(`li`, {
					className: `rounded-xl border border-border bg-surface p-4`,
					children: [(0, m.jsx)(`p`, {
						className: `font-semibold text-fg`,
						children: e
					}), (0, m.jsx)(`p`, {
						className: `mt-1 text-body text-muted`,
						children: t
					})]
				}, e))
			}), (0, m.jsxs)(o, { children: [
				(0, m.jsx)(`p`, { children: `The unit tests run in jsdom, which has no layout. axe’s own contrast rule is off there, which is why the token pairs are checked from their values, and why the built site is checked again in a browser. Some things no automated test can see:` }),
				(0, m.jsxs)(`ul`, { children: [
					(0, m.jsx)(`li`, { children: `what a real screen reader says, and in which order;` }),
					(0, m.jsx)(`li`, { children: `whether the focus ring is visible against what is behind it;` }),
					(0, m.jsx)(`li`, { children: `layout at 400% zoom and on a 320px screen;` }),
					(0, m.jsx)(`li`, { children: `the words and the content your app puts in the components.` })
				] }),
				(0, m.jsx)(`p`, { children: `Those are checked by hand during review, and your app should check them too.` })
			] })]
		}),
		(0, m.jsxs)(u, {
			id: `criteria`,
			title: `WCAG 2.2 AA criteria`,
			children: [(0, m.jsx)(o, { children: (0, m.jsx)(`p`, { children: `The criteria where the library does real work, how its components meet them, and the part that stays with your app.` }) }), (0, m.jsxs)(a, {
				label: `WCAG 2.2 criteria and how the components meet them`,
				children: [
					(0, m.jsx)(`caption`, {
						className: `sr-only`,
						children: `WCAG 2.2 success criteria, level, what the library does and what the app owns`
					}),
					(0, m.jsx)(`thead`, { children: (0, m.jsxs)(`tr`, { children: [
						(0, m.jsx)(`th`, {
							scope: `col`,
							children: `Criterion`
						}),
						(0, m.jsx)(`th`, {
							scope: `col`,
							children: `Level`
						}),
						(0, m.jsx)(`th`, {
							scope: `col`,
							children: `How the components meet it`
						}),
						(0, m.jsx)(`th`, {
							scope: `col`,
							children: `What your app owns`
						})
					] }) }),
					(0, m.jsx)(`tbody`, { children: h.map(([e, t, n, r, i]) => (0, m.jsxs)(`tr`, { children: [
						(0, m.jsxs)(`th`, {
							scope: `row`,
							className: `w-52 font-normal`,
							children: [(0, m.jsx)(`span`, {
								className: `block font-mono text-caption text-muted`,
								children: e
							}), (0, m.jsx)(`span`, {
								className: `block font-medium text-fg`,
								children: t
							})]
						}),
						(0, m.jsx)(`td`, { children: (0, m.jsx)(`span`, {
							className: `inline-flex min-w-7 justify-center rounded-sm border border-border-strong px-1 font-mono text-caption font-semibold`,
							children: n
						}) }),
						(0, m.jsx)(`td`, {
							className: `min-w-64`,
							children: r
						}),
						(0, m.jsx)(`td`, {
							className: `min-w-48 text-muted`,
							children: i
						})
					] }, e)) })
				]
			})]
		}),
		(0, m.jsxs)(u, {
			id: `keyboard`,
			title: `Keyboard`,
			children: [(0, m.jsx)(o, { children: (0, m.jsx)(`p`, { children: `The keys follow the ARIA Authoring Practices, so they are the ones screen reader and keyboard users already know. Each component page lists its own keys.` }) }), (0, m.jsx)(`div`, {
				className: `grid gap-6 2xl:grid-cols-2`,
				children: _.map((e) => (0, m.jsx)(i, {
					id: e.id,
					title: e.title,
					children: (0, m.jsxs)(a, {
						label: `Keys: ${e.title}`,
						children: [(0, m.jsx)(`thead`, { children: (0, m.jsxs)(`tr`, { children: [(0, m.jsx)(`th`, {
							scope: `col`,
							className: `w-48`,
							children: `Key`
						}), (0, m.jsx)(`th`, {
							scope: `col`,
							children: `What it does`
						})] }) }), (0, m.jsx)(`tbody`, { children: e.rows.map(([e, t]) => (0, m.jsxs)(`tr`, { children: [(0, m.jsx)(`td`, { children: e }), (0, m.jsx)(`td`, { children: t })] }, t)) })]
					})
				}, e.id))
			})]
		}),
		(0, m.jsx)(u, {
			id: `screen-readers`,
			title: `Screen readers and live messages`,
			children: (0, m.jsxs)(o, { children: [(0, m.jsx)(`p`, { children: `Every component has a name, a role and a state. Names come from props, never from the library, so they are in the app’s language. Status words such as “Error” are read before the message, so the tone never rests on colour and icon.` }), (0, m.jsxs)(`p`, { children: [
				`Messages that appear later are read through live regions: `,
				(0, m.jsx)(`strong`, { children: `polite` }),
				` for success and information, which waits for the screen reader to finish, and `,
				(0, m.jsx)(`strong`, { children: `assertive` }),
				` for errors that stop the reader. `,
				(0, m.jsx)(`code`, { children: `LiveRegion` }),
				` and `,
				(0, m.jsx)(`code`, { children: `announce()` }),
				` do the same for an app’s own messages. The `,
				(0, m.jsx)(`a`, {
					href: `/patterns/messages/`,
					children: `messages pattern`
				}),
				` says which component to use.`
			] })] })
		}),
		(0, m.jsx)(u, {
			id: `reduced-motion`,
			title: `Reduced motion`,
			children: (0, m.jsx)(o, { children: (0, m.jsxs)(`p`, { children: [
				`Motion is short and never needed to understand a change. With `,
				(0, m.jsx)(`code`, { children: `prefers-reduced-motion: reduce` }),
				`, or the `,
				(0, m.jsx)(`code`, { children: `a11y-reduce-motion` }),
				` class from the reader settings, the duration tokens drop to almost zero, pulses stop, theme changes switch at once and scrolling jumps. Spinners keep turning slowly, because a still spinner would say the work has stopped.`
			] }) })
		}),
		(0, m.jsx)(u, {
			id: `forced-colours`,
			title: `Forced colours`,
			children: (0, m.jsxs)(o, { children: [(0, m.jsx)(`p`, { children: `Windows high contrast replaces every colour with a few system colours. Components keep their shape there: badges and tiles have transparent borders that become visible, the current item gets an underline or a Highlight bar, selected options use Highlight, and skeletons get an outline. Colour swatches, such as on the token tables, keep their real colours.` }), (0, m.jsx)(`p`, { children: `The high contrast theme is a separate thing: a theme of the library for readers who want strong contrast with the Skribly look.` })] })
		}),
		(0, m.jsx)(u, {
			id: `zoom-and-reflow`,
			title: `Zoom, reflow and text spacing`,
			children: (0, m.jsx)(o, { children: (0, m.jsxs)(`ul`, { children: [
				(0, m.jsx)(`li`, { children: `Text sizes are in rem, so the browser text size setting scales every component.` }),
				(0, m.jsx)(`li`, { children: `At 400% zoom, a 1280px window is 320px wide. Components wrap, stack and truncate with the full text kept for screen readers, and nothing scrolls sideways except data tables and code, which scroll inside their own box.` }),
				(0, m.jsx)(`li`, { children: `Fields use 16px text below 640px, so phones do not zoom in when a field takes focus.` }),
				(0, m.jsx)(`li`, { children: `Text containers grow with extra line, word and letter spacing instead of clipping it.` })
			] }) })
		}),
		(0, m.jsx)(u, {
			id: `target-size`,
			title: `Target size`,
			children: (0, m.jsx)(o, { children: (0, m.jsx)(`p`, { children: `Pointer targets are at least 24 by 24 pixels, the AA minimum of WCAG 2.2. Controls are 36px tall by default; the compact density makes them 30px, still above the minimum. Small close buttons get a 24px hit area even where the icon is smaller, and the steppers of the reader settings are 44px.` }) })
		}),
		(0, m.jsxs)(u, {
			id: `testing`,
			title: `How to test your app`,
			children: [
				(0, m.jsx)(`ol`, {
					className: `grid gap-3 md:grid-cols-2`,
					children: [
						[`Keyboard only`, `Put the mouse away. Reach every control with Tab, use it, and see the focus ring all the way.`],
						[`A screen reader`, `VoiceOver on macOS and iOS, NVDA on Windows, TalkBack on Android. Listen to names, states and messages.`],
						[`Zoom and 320px`, `Zoom to 200% and 400%, and use a 320px wide window. Nothing should be cut off or scroll sideways.`],
						[`Forced colours and motion`, `Emulate forced-colors and prefers-reduced-motion in the browser developer tools.`],
						[`Automated checks`, `Run axe in unit tests and in end-to-end tests of real pages, where it can measure contrast.`],
						[`Your own content`, `Read every label, error and empty state aloud. Does it say what happened and what to do?`]
					].map(([e, t], n) => (0, m.jsxs)(`li`, {
						className: `flex gap-3 rounded-xl border border-border bg-surface p-4`,
						children: [(0, m.jsx)(`span`, {
							"aria-hidden": !0,
							className: `grid size-7 shrink-0 place-items-center rounded-full bg-accent-soft font-semibold text-accent-text`,
							children: n + 1
						}), (0, m.jsxs)(`span`, { children: [(0, m.jsx)(`span`, {
							className: `block font-semibold text-fg`,
							children: e
						}), (0, m.jsx)(`span`, {
							className: `block text-body text-muted`,
							children: t
						})] })]
					}, e))
				}),
				(0, m.jsx)(l, {
					language: `tsx`,
					title: `An axe check in Vitest`,
					code: `import axe from 'axe-core'
import { render } from '@testing-library/react'

it('has no axe violations', async () => {
  const { container } = render(<SettingsPage />)
  const results = await axe.run(container, { rules: { 'color-contrast': { enabled: false } } })
  expect(results.violations).toEqual([])
})`
				}),
				(0, m.jsx)(l, {
					language: `ts`,
					title: `An axe check in Playwright, with contrast`,
					code: `import AxeBuilder from '@axe-core/playwright'

test('settings page', async ({ page }) => {
  await page.goto('/settings')
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
  expect(results.violations).toEqual([])
})`
				})
			]
		})
	] });
}
export { v as Accessibility };
