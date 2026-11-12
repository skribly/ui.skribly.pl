import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { t as n } from "./Button.DRxd_7vr.js";
import { t as r } from "./FormActions.CHf9iWCL.js";
import { t as i } from "./FormErrorSummary.B5NqDela.js";
import { n as a, t as o } from "./RadioGroup.CVuDFmT-.js";
import { t as s } from "./TextField.BRNO9ptc.js";
import { f as c, i as l, n as u, p as d, r as f, s as p, t as m, u as h } from "./doc.D2PtmWN6.js";
import { t as g } from "./jsx-runtime.yrTYNGQT.js";
var _ = e(t(), 1), v = g(), y = {
	name: (e) => e.trim() ? null : `Enter the name of the person you invite`,
	email: (e) => e.trim() ? /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e) ? null : `Enter an email address like name@example.com` : `Enter an email address`,
	team: (e) => e.length > 40 ? `Use 40 characters or fewer. This one has ${e.length}.` : null
}, b = {
	name: `Full name`,
	email: `Email`,
	team: `Team`
};
function x() {
	let e = (0, _.useId)(), [t, c] = (0, _.useState)({
		name: ``,
		email: ``,
		team: ``
	}), [l, u] = (0, _.useState)({
		name: !1,
		email: !1,
		team: !1
	}), [d, f] = (0, _.useState)([]), [p, m] = (0, _.useState)(null), [h, g] = (0, _.useState)(!1), x = (e) => l[e] ? y[e](t[e]) : null, S = (n) => {
		let r = x(n);
		return {
			id: `${e}-${n}`,
			label: b[n],
			value: t[n],
			onChange: (e) => {
				c((t) => ({
					...t,
					[n]: e
				})), m(null);
			},
			onBlur: () => {
				t[n] !== `` && u((e) => ({
					...e,
					[n]: !0
				}));
			},
			isInvalid: r !== null,
			errorMessage: r ?? ``
		};
	}, C = () => {
		let n = Object.keys(y).flatMap((n) => {
			let r = y[n](t[n]);
			return r ? [{
				fieldId: `${e}-${n}`,
				message: r
			}] : [];
		});
		u({
			name: !0,
			email: !0,
			team: !0
		}), f(n), n.length > 0 ? m(null) : (g(!0), setTimeout(() => {
			g(!1), m({
				tone: `ok`,
				message: `Invitation sent to ${t.email}`
			});
		}, 900));
	};
	return (0, v.jsxs)(`form`, {
		noValidate: !0,
		className: `grid max-w-lg gap-5`,
		onSubmit: (e) => {
			e.preventDefault(), C();
		},
		children: [
			d.length > 0 ? (0, v.jsx)(i, {
				title: d.length === 1 ? `There is 1 problem with this invitation` : `There are ${d.length} problems with this invitation`,
				errors: d,
				headingLevel: 4
			}) : null,
			(0, v.jsx)(s, {
				...S(`name`),
				isRequired: !0,
				autoComplete: `name`
			}),
			(0, v.jsx)(s, {
				...S(`email`),
				isRequired: !0,
				type: `email`,
				autoComplete: `email`,
				description: `The invitation goes to this address.`
			}),
			(0, v.jsx)(s, {
				...S(`team`),
				optionalLabel: `optional`,
				description: `Up to 40 characters.`
			}),
			(0, v.jsxs)(o, {
				label: `Role`,
				defaultValue: `member`,
				children: [(0, v.jsx)(a, {
					value: `member`,
					children: `Member`
				}), (0, v.jsx)(a, {
					value: `admin`,
					description: `Can change settings and remove people`,
					children: `Admin`
				})]
			}),
			(0, v.jsxs)(r, {
				status: p,
				children: [(0, v.jsx)(n, {
					variant: `ghost`,
					onPress: () => {
						c({
							name: ``,
							email: ``,
							team: ``
						}), u({
							name: !1,
							email: !1,
							team: !1
						}), f([]), m(null);
					},
					children: `Clear`
				}), (0, v.jsx)(n, {
					type: `submit`,
					isPending: h,
					pendingLabel: `Sending`,
					children: `Send invitation`
				})]
			})
		]
	});
}
var S = [
	[`Before typing`, `Say the rules in the description, such as “Up to 40 characters”, so nobody learns them from an error.`],
	[`While typing`, `Stay quiet. An error for a field the reader is still filling in is noise.`],
	[`On leaving a changed field`, `Check that field and show its error inline. Leave untouched fields alone.`],
	[`On submit`, `Check everything. Show each error under its field and a FormErrorSummary at the top, which takes focus and links to each field.`],
	[`While fixing`, `Update each inline error as the reader types. The summary stays as it was until the next submit, so focus never jumps.`],
	[`After success`, `Say what happened, next to the button with FormActions, in a toast, or as a flash message on the next page.`]
], C = [
	[
		`Full name`,
		`text`,
		`name`
	],
	[
		`Email`,
		`email`,
		`email`
	],
	[
		`Phone`,
		`tel`,
		`tel`
	],
	[
		`Current password`,
		`password`,
		`current-password`
	],
	[
		`New password`,
		`password`,
		`new-password`
	],
	[
		`One-time code`,
		`text, inputMode="numeric"`,
		`one-time-code`
	],
	[
		`Organisation`,
		`text`,
		`organization`
	],
	[
		`Postal code`,
		`text`,
		`postal-code`
	]
];
function w() {
	return (0, v.jsxs)(f, { children: [
		(0, v.jsx)(p, {
			eyebrow: `Patterns`,
			title: `Forms and validation`,
			lead: `A good form asks for little, says its rules up front, stays quiet while the reader types and, when something is wrong, says exactly where and how to fix it.`
		}),
		(0, v.jsxs)(h, {
			id: `flow`,
			title: `The validation flow`,
			children: [
				(0, v.jsx)(`ol`, {
					className: `relative space-y-4 border-s-2 border-border ps-6`,
					children: S.map(([e, t], n) => (0, v.jsxs)(`li`, {
						className: `relative`,
						children: [
							(0, v.jsx)(`span`, {
								"aria-hidden": !0,
								className: `absolute -start-[2.3rem] top-0 grid size-7 place-items-center rounded-full border-2 border-border bg-bg text-caption font-semibold text-accent-text`,
								children: n + 1
							}),
							(0, v.jsx)(`p`, {
								className: `font-semibold text-fg`,
								children: e
							}),
							(0, v.jsx)(`p`, {
								className: `mt-0.5 max-w-[65ch] text-body text-muted`,
								children: t
							})
						]
					}, e))
				}),
				(0, v.jsx)(l, {
					label: `Try it: submit empty, then fix the fields`,
					children: (0, v.jsx)(x, {})
				}),
				(0, v.jsx)(m, {
					language: `tsx`,
					title: `The parts`,
					code: `<form noValidate onSubmit={submit}>
  {summary.length > 0 && <FormErrorSummary title={t('form.problems', { count: summary.length })} errors={summary} />}
  <TextField id="email" label={t('email')} type="email" autoComplete="email" isRequired
    onBlur={check('email')} isInvalid={!!errors.email} errorMessage={errors.email} />
  <FormActions status={status}>
    <Button type="submit" isPending={sending} pendingLabel={t('sending')}>{t('send')}</Button>
  </FormActions>
</form>`
				})
			]
		}),
		(0, v.jsxs)(h, {
			id: `labels`,
			title: `Labels, hints and marks`,
			children: [(0, v.jsx)(d, { children: (0, v.jsxs)(`ul`, { children: [
				(0, v.jsx)(`li`, { children: `Every field has a visible label above it. A placeholder is an example, never the label: it disappears while typing.` }),
				(0, v.jsxs)(`li`, { children: [
					`Mark the smaller group. When most fields are required, mark the optional ones with `,
					(0, v.jsx)(`code`, { children: `optionalLabel` }),
					`; otherwise mark the required ones. `,
					(0, v.jsx)(`code`, { children: `requiredLabel` }),
					` replaces the asterisk with a word.`
				] }),
				(0, v.jsxs)(`li`, { children: [
					`Put rules in `,
					(0, v.jsx)(`code`, { children: `description` }),
					`. It is linked to the field, so a screen reader reads it after the label.`
				] }),
				(0, v.jsxs)(`li`, { children: [
					`Use `,
					(0, v.jsx)(`code`, { children: `status` }),
					` for good news and hints that arrive while typing, such as “Name is free”, in the ok, info or warn tone.`
				] })
			] }) }), (0, v.jsx)(u, {
				good: (0, v.jsx)(s, {
					label: `Project name`,
					description: `Up to 80 characters. You can change it later.`
				}),
				goodText: `Give the rule before it can be broken.`,
				bad: (0, v.jsx)(`input`, {
					className: `sk-input w-full`,
					"aria-label": `Project name`,
					placeholder: `Project name (max 80)`
				}),
				badText: `Hide the label and the rule in a placeholder that vanishes on the first key.`
			})]
		}),
		(0, v.jsxs)(h, {
			id: `input-purpose`,
			title: `Types and autocomplete`,
			children: [(0, v.jsx)(d, { children: (0, v.jsx)(`p`, { children: `The right type brings the right keyboard on phones, and autocomplete lets browsers and password managers fill the field, which WCAG asks for on personal data.` }) }), (0, v.jsxs)(c, {
				label: `Field types and autocomplete values`,
				children: [
					(0, v.jsx)(`caption`, {
						className: `sr-only`,
						children: `Common fields with their type and autocomplete value`
					}),
					(0, v.jsx)(`thead`, { children: (0, v.jsxs)(`tr`, { children: [
						(0, v.jsx)(`th`, {
							scope: `col`,
							children: `Field`
						}),
						(0, v.jsx)(`th`, {
							scope: `col`,
							children: `type`
						}),
						(0, v.jsx)(`th`, {
							scope: `col`,
							children: `autoComplete`
						})
					] }) }),
					(0, v.jsx)(`tbody`, { children: C.map(([e, t, n]) => (0, v.jsxs)(`tr`, { children: [
						(0, v.jsx)(`th`, {
							scope: `row`,
							className: `font-medium`,
							children: e
						}),
						(0, v.jsx)(`td`, { children: (0, v.jsx)(`code`, { children: t }) }),
						(0, v.jsx)(`td`, { children: (0, v.jsx)(`code`, { children: n }) })
					] }, e)) })
				]
			})]
		}),
		(0, v.jsx)(h, {
			id: `layout`,
			title: `Layout from 320px`,
			children: (0, v.jsx)(d, { children: (0, v.jsxs)(`ul`, { children: [
				(0, v.jsx)(`li`, { children: `One column, about 32rem wide at most. The eye moves down, not in a zigzag.` }),
				(0, v.jsxs)(`li`, { children: [
					`Two fields share a row only when they belong together and are short, such as a postal code and a city, and only from the `,
					(0, v.jsx)(`code`, { children: `sm` }),
					` breakpoint up.`
				] }),
				(0, v.jsxs)(`li`, { children: [
					`Group related fields in a `,
					(0, v.jsx)(`code`, { children: `fieldset` }),
					` with a `,
					(0, v.jsx)(`code`, { children: `legend` }),
					`, or use CheckboxGroup and RadioGroup, which do it for you.`
				] }),
				(0, v.jsx)(`li`, { children: `FormActions puts the main button last on wide screens and stacks the buttons at full width on narrow ones, main button on top.` }),
				(0, v.jsxs)(`li`, { children: [
					`A long form keeps its buttons in view with `,
					(0, v.jsx)(`code`, { children: `sticky` }),
					`.`
				] })
			] }) })
		}),
		(0, v.jsx)(h, {
			id: `density`,
			title: `Density in forms`,
			children: (0, v.jsx)(d, { children: (0, v.jsx)(`p`, { children: `Forms on the web keep the comfortable density: 36px controls and room between fields. The compact density is for the desktop tools, where many settings sit on one screen. Both keep targets above 24px, and field text stays at 16px on phones so iOS does not zoom.` }) })
		})
	] });
}
export { w as FormsPattern, x as InviteForm };
