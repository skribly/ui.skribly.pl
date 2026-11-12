import { t as e } from "./Badge.Cwl75Dkx.js";
import { r as t, s as n, u as r } from "./doc.D2PtmWN6.js";
import { t as i } from "./jsx-runtime.yrTYNGQT.js";
var a = i(), o = [{
	version: `0.1.0`,
	date: `November 2026`,
	status: `In progress`,
	summary: `The first version: tokens, plain CSS and the component groups every Skribly tool needs.`,
	changes: [
		{
			kind: `Added`,
			text: `Design tokens in light, dark and high contrast, built from W3C token files into CSS variables and a typed object, with contrast tests for every text and control pair.`
		},
		{
			kind: `Added`,
			text: `Plain CSS classes for pages with no React: button, link, field, card, badge and alert.`
		},
		{
			kind: `Added`,
			text: `Brand: logo, wordmark, app lockup, avatars, agent chip, host and tracker badges, favicon letter.`
		},
		{
			kind: `Added`,
			text: `Actions: buttons, icon, link, toggle and copy buttons, button groups, keys, drag handles, nudge buttons and gated actions.`
		},
		{
			kind: `Added`,
			text: `Feedback: alerts, banners, flash messages and toasts with polite and assertive announcements, badges, severity, status dots, spinners, skeletons, empty states, meters and progress bars.`
		},
		{
			kind: `Added`,
			text: `Forms: fields, choices, pickers, settings rows, an error summary and form actions with a status line.`
		},
		{
			kind: `Added`,
			text: `Navigation, overlays, data, content, conversation, search, shell, surfaces, onboarding, pages, media and theme groups.`
		},
		{
			kind: `Added`,
			text: `Theme and reader settings: ThemeProvider, ThemeScript, ThemeToggle, AccessibilityProvider, SkipLink and live announcements.`
		},
		{
			kind: `Changed`,
			text: `ThemeToggle shows its words always, never, or by its own width.`
		},
		{
			kind: `Changed`,
			text: `Collections memoize their state, so large tables and lists re-render less.`
		},
		{
			kind: `Docs`,
			text: `This site: every demo in three themes, usage, accessibility notes, tokens, patterns for messages, forms and layout, and an accessibility guide.`
		}
	]
}], s = {
	Added: `ok`,
	Changed: `info`,
	Fixed: `warn`,
	Docs: `neutral`
};
function c() {
	return (0, a.jsxs)(t, { children: [(0, a.jsx)(n, {
		eyebrow: `Overview`,
		title: `Changelog`,
		lead: `What changed in each version. Versions follow semantic versioning, and apps pin a range with #semver in the git address.`
	}), o.map((t) => (0, a.jsxs)(r, {
		id: `v${t.version.replaceAll(`.`, `-`)}`,
		title: `Version ${t.version}`,
		children: [
			(0, a.jsxs)(`p`, {
				className: `flex flex-wrap items-center gap-2 text-caption text-muted`,
				children: [(0, a.jsx)(`span`, { children: t.date }), (0, a.jsx)(e, {
					size: `sm`,
					tone: `accent`,
					children: t.status
				})]
			}),
			(0, a.jsx)(`p`, {
				className: `max-w-[65ch] text-[0.9375rem] text-fg`,
				children: t.summary
			}),
			(0, a.jsx)(`ul`, {
				className: `divide-y divide-border rounded-xl border border-border bg-surface`,
				children: t.changes.map((t) => (0, a.jsxs)(`li`, {
					className: `flex flex-col gap-2 p-4 sm:flex-row sm:items-start sm:gap-4`,
					children: [(0, a.jsx)(e, {
						tone: s[t.kind],
						className: `w-fit shrink-0 sm:w-20 sm:justify-center`,
						children: t.kind
					}), (0, a.jsx)(`span`, {
						className: `min-w-0 text-body text-fg`,
						children: t.text
					})]
				}, t.text))
			})
		]
	}, t.version))] });
}
export { c as Changelog };
