import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { I as t, d as n, f as r, i, j as a, n as o, p as s, r as c, s as l, t as u, u as d, w as f } from "./doc.C_PtMNUB.js";
import { n as p } from "./react-dom.B9zIfLd2.js";
import { t as m } from "./Button.df3csLrB.js";
import { a as h, i as g, n as _, r as v, t as y } from "./ToastViewport.zctZsTLC.js";
import { t as b } from "./FormErrorSummary.CH912UHa.js";
import { t as x } from "./TextField.CrOSYYfu.js";
var S = e(p(), 1), C = t(), w = {
	ok: `Success`,
	info: `Information`,
	warn: `Warning`,
	danger: `Error`
}, T = [
	[
		`Inline field error`,
		`Under the field it is about`,
		`Until the value is fixed`,
		`With the field, through aria-describedby`,
		`One field that needs a change`
	],
	[
		`FormErrorSummary`,
		`At the top of the form`,
		`Until the next submit`,
		`Assertive, and it takes focus`,
		`A submit that failed on one or more fields`
	],
	[
		`Alert`,
		`In the content, next to what it is about`,
		`Until closed, or while the state lasts`,
		`Static, or polite or assertive with live`,
		`A result or condition of one part of the page`
	],
	[
		`Banner`,
		`Full width at the top of a page or panel`,
		`As long as the state lasts`,
		`A named region; live when it appears later`,
		`A state of the whole app, such as offline or read-only`
	],
	[
		`Toast`,
		`At the edge of the screen`,
		`Success and information at least 5 s; warnings and errors until closed`,
		`Polite, or assertive for errors`,
		`The result of an action just taken, when it is not visible elsewhere`
	],
	[
		`FlashMessages`,
		`At the top of the next page`,
		`Until closed`,
		`Written into a live region after the page loads`,
		`A server result after a redirect, such as “Saved”`
	],
	[
		`FormActions status`,
		`Next to the submit buttons`,
		`Until the next submit`,
		`Polite, or assertive for errors`,
		`The save result of a short form`
	]
], E = [
	{
		tone: `ok`,
		name: `Success`,
		icon: (0, C.jsx)(a, { name: `status.ok` }),
		means: `It worked, and the result is what the reader asked for.`,
		read: `Polite`,
		stays: `A toast may close after 5 s or more`,
		example: `Invitation sent to ada@example.com`
	},
	{
		tone: `info`,
		name: `Information`,
		icon: (0, C.jsx)(a, { name: `status.info` }),
		means: `A neutral fact that helps, with nothing to fix.`,
		read: `Polite`,
		stays: `A toast may close after 5 s or more`,
		example: `Imports run at night`
	},
	{
		tone: `warn`,
		name: `Warning`,
		icon: (0, C.jsx)(a, { name: `status.warning` }),
		means: `Something may go wrong or needs a decision soon. Nothing is blocked yet.`,
		read: `Polite`,
		stays: `Until closed`,
		example: `Your draft is kept for 7 more days`
	},
	{
		tone: `danger`,
		name: `Error`,
		icon: (0, C.jsx)(a, { name: `status.error` }),
		means: `It failed or is blocked. Say what happened and how to fix it.`,
		read: `Assertive`,
		stays: `Until closed or fixed`,
		example: `Could not publish. The server did not answer.`
	}
];
function D() {
	let [e, t] = (0, S.useState)(`idle`);
	return (0, C.jsxs)(`div`, {
		className: `grid max-w-xl gap-3`,
		children: [(0, C.jsxs)(`div`, {
			className: `flex flex-wrap gap-2`,
			children: [(0, C.jsx)(m, {
				variant: `outline`,
				size: `sm`,
				onPress: () => t(`ok`),
				children: `Test the connection`
			}), (0, C.jsx)(m, {
				variant: `outline`,
				size: `sm`,
				onPress: () => t(`danger`),
				children: `Test with a wrong token`
			})]
		}), (0, C.jsxs)(`div`, {
			"aria-live": `polite`,
			className: `min-h-0`,
			children: [e === `ok` ? (0, C.jsx)(f, {
				tone: `ok`,
				toneLabel: `Success`,
				title: `Connected to the tracker`,
				onDismiss: () => t(`idle`),
				dismissLabel: `Close message`
			}) : null, e === `danger` ? (0, C.jsx)(f, {
				tone: `danger`,
				toneLabel: `Error`,
				title: `Could not connect to the tracker`,
				onDismiss: () => t(`idle`),
				dismissLabel: `Close message`,
				children: `The token was refused. Create a new token in the tracker settings and paste it here.`
			}) : null]
		})]
	});
}
function O() {
	let e = v();
	return (0, C.jsxs)(`div`, {
		className: `flex flex-wrap gap-2`,
		children: [
			(0, C.jsx)(m, {
				size: `sm`,
				variant: `outline`,
				onPress: () => e.success(`Changes saved`),
				children: `Success`
			}),
			(0, C.jsx)(m, {
				size: `sm`,
				variant: `outline`,
				onPress: () => e.info(`Sync finished`, { description: `12 files are up to date.` }),
				children: `Information`
			}),
			(0, C.jsx)(m, {
				size: `sm`,
				variant: `outline`,
				onPress: () => e.warning(`Storage almost full`, { description: `Free some space to keep uploading.` }),
				children: `Warning`
			}),
			(0, C.jsx)(m, {
				size: `sm`,
				variant: `outline`,
				onPress: () => e.error(`Could not publish`, { description: `The server did not answer. Try again in a minute.` }),
				children: `Error`
			}),
			(0, C.jsx)(m, {
				size: `sm`,
				variant: `outline`,
				onPress: () => e.success(`Project archived`, { action: {
					label: `Undo`,
					onAction: () => e.info(`Project restored`)
				} }),
				children: `With undo`
			})
		]
	});
}
function k() {
	let [e, t] = (0, S.useState)([{
		id: `saved`,
		tone: `ok`,
		title: `Profile saved`
	}]);
	return (0, C.jsxs)(`div`, {
		className: `grid gap-3`,
		children: [(0, C.jsx)(g, {
			messages: e,
			toneLabels: w,
			onDismiss: (e) => t((t) => t.filter((t) => t.id !== e)),
			dismissLabel: `Close message`
		}), (0, C.jsx)(`div`, { children: (0, C.jsx)(m, {
			size: `sm`,
			variant: `outline`,
			onPress: () => t([{
				id: `error-${Date.now()}`,
				tone: `danger`,
				title: `The form was not sent`,
				description: `Fix these fields and send it again.`,
				items: [`Email address is missing`, `Project name is longer than 80 characters`]
			}]),
			children: `Load the page after a failed submit`
		}) })]
	});
}
function A() {
	let e = (0, S.useId)(), [t, n] = (0, S.useState)(!1), [r, i] = (0, S.useState)([]), [a, o] = (0, S.useState)(!1), [s, c] = (0, S.useState)(``), [l, u] = (0, S.useState)(`ada@`), d = s.trim() ? null : `Enter a project name`, p = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(l) ? null : `Enter an email address like name@example.com`;
	return (0, C.jsxs)(`form`, {
		noValidate: !0,
		className: `grid max-w-md gap-4`,
		onSubmit: (t) => {
			t.preventDefault();
			let r = [...d ? [{
				fieldId: `${e}-name`,
				message: d
			}] : [], ...p ? [{
				fieldId: `${e}-email`,
				message: p
			}] : []];
			n(!0), i(r), o(r.length === 0);
		},
		children: [
			r.length > 0 ? (0, C.jsx)(b, {
				title: r.length === 1 ? `There is 1 problem with this form` : `There are ${r.length} problems with this form`,
				errors: r,
				headingLevel: 4
			}) : null,
			(0, C.jsx)(`div`, {
				"aria-live": `polite`,
				children: a ? (0, C.jsx)(f, {
					tone: `ok`,
					toneLabel: `Success`,
					title: `Project created`
				}) : null
			}),
			(0, C.jsx)(x, {
				id: `${e}-name`,
				label: `Project name`,
				isRequired: !0,
				value: s,
				onChange: c,
				isInvalid: t && d !== null,
				errorMessage: d ?? ``
			}),
			(0, C.jsx)(x, {
				id: `${e}-email`,
				label: `Owner email`,
				type: `email`,
				autoComplete: `email`,
				value: l,
				onChange: u,
				isInvalid: t && p !== null,
				errorMessage: p ?? ``,
				description: `We send the invitation here.`
			}),
			(0, C.jsxs)(`div`, {
				className: `flex flex-wrap gap-2`,
				children: [(0, C.jsx)(m, {
					type: `submit`,
					children: `Create project`
				}), (0, C.jsx)(m, {
					variant: `ghost`,
					onPress: () => {
						n(!1), i([]), o(!1), c(``), u(`ada@`);
					},
					children: `Reset`
				})]
			})
		]
	});
}
function j() {
	return (0, C.jsxs)(c, { children: [
		(0, C.jsx)(l, {
			eyebrow: `Patterns`,
			title: `Messages: success, information, warning and error`,
			lead: `Every message in Skribly has one of four tones and lives in one of a few places. Pick the place by how long the message matters and how close it is to what it is about, then write it so it says what happened and what to do next.`
		}),
		(0, C.jsxs)(d, {
			id: `tones`,
			title: `The four tones`,
			children: [(0, C.jsx)(`ul`, {
				className: `grid gap-4 md:grid-cols-2`,
				children: E.map((e) => (0, C.jsxs)(`li`, {
					className: `flex min-w-0 flex-col gap-3 rounded-xl border border-border bg-surface p-5`,
					children: [
						(0, C.jsxs)(`p`, {
							className: `flex items-center gap-2 text-title font-semibold text-fg`,
							children: [(0, C.jsx)(`span`, {
								"aria-hidden": !0,
								className: `inline-flex [&>svg]:size-5`,
								children: e.icon
							}), e.name]
						}),
						(0, C.jsx)(`p`, {
							className: `text-body text-muted`,
							children: e.means
						}),
						(0, C.jsx)(f, {
							tone: e.tone,
							toneLabel: e.name,
							title: e.example
						}),
						(0, C.jsxs)(`dl`, {
							className: `grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-caption`,
							children: [
								(0, C.jsx)(`dt`, {
									className: `text-muted`,
									children: `Read out`
								}),
								(0, C.jsx)(`dd`, {
									className: `text-fg`,
									children: e.read
								}),
								(0, C.jsx)(`dt`, {
									className: `text-muted`,
									children: `Stays`
								}),
								(0, C.jsx)(`dd`, {
									className: `text-fg`,
									children: e.stays
								})
							]
						})
					]
				}, e.tone))
			}), (0, C.jsx)(s, { children: (0, C.jsxs)(`p`, { children: [
				`Each tone has a colour, an icon of its own shape and a word. The word, such as “Error”, is the `,
				(0, C.jsx)(`code`, { children: `toneLabel` }),
				` prop, read before the message so the meaning never rests on colour. Pass it every time.`
			] }) })]
		}),
		(0, C.jsxs)(d, {
			id: `choose`,
			title: `Choose the right component`,
			children: [(0, C.jsxs)(r, {
				label: `Which message component to use`,
				children: [
					(0, C.jsx)(`caption`, {
						className: `sr-only`,
						children: `Message components, where they show, how long they stay, how they are read and what they are for`
					}),
					(0, C.jsx)(`thead`, { children: (0, C.jsxs)(`tr`, { children: [
						(0, C.jsx)(`th`, {
							scope: `col`,
							children: `Component`
						}),
						(0, C.jsx)(`th`, {
							scope: `col`,
							children: `Where`
						}),
						(0, C.jsx)(`th`, {
							scope: `col`,
							children: `How long`
						}),
						(0, C.jsx)(`th`, {
							scope: `col`,
							children: `How it is read`
						}),
						(0, C.jsx)(`th`, {
							scope: `col`,
							children: `Use it for`
						})
					] }) }),
					(0, C.jsx)(`tbody`, { children: T.map(([e, t, n, r, i]) => (0, C.jsxs)(`tr`, { children: [
						(0, C.jsx)(`th`, {
							scope: `row`,
							className: `font-semibold whitespace-nowrap`,
							children: e
						}),
						(0, C.jsx)(`td`, { children: t }),
						(0, C.jsx)(`td`, { children: n }),
						(0, C.jsx)(`td`, { children: r }),
						(0, C.jsx)(`td`, { children: i })
					] }, e)) })
				]
			}), (0, C.jsx)(s, { children: (0, C.jsx)(`p`, { children: `A quick rule: the closer the message is to its cause, the better. A field error beats a summary, a summary beats a banner, and a toast is for results the reader would otherwise not see.` }) })]
		}),
		(0, C.jsxs)(d, {
			id: `examples`,
			title: `Live examples`,
			children: [
				(0, C.jsxs)(n, {
					title: `Alert with a live result`,
					children: [(0, C.jsx)(s, { children: (0, C.jsx)(`p`, { children: `The live region is in the page before the result arrives, so the result is read out when it appears.` }) }), (0, C.jsx)(i, {
						label: `Alert`,
						code: `<div aria-live="polite">
  {result && <Alert tone="ok" toneLabel={t('tone.ok')} title={t('tracker.connected')} />}
</div>`,
						children: (0, C.jsx)(D, {})
					})]
				}),
				(0, C.jsx)(n, {
					title: `Banner for a state of the whole app`,
					children: (0, C.jsx)(i, {
						label: `Banner`,
						code: `<Banner tone="danger" toneLabel={t('tone.error')} title={t('offline.title')} live="assertive">
  {t('offline.text')}
</Banner>`,
						children: (0, C.jsxs)(`div`, {
							className: `overflow-hidden rounded-lg border border-border`,
							children: [
								(0, C.jsx)(h, {
									tone: `danger`,
									toneLabel: `Error`,
									title: `You are offline`,
									children: `Changes are kept on this device and sent when the connection returns.`
								}),
								(0, C.jsx)(h, {
									tone: `warn`,
									toneLabel: `Warning`,
									title: `Read-only mode`,
									actions: (0, C.jsx)(m, {
										size: `sm`,
										variant: `outline`,
										children: `Renew plan`
									}),
									children: `The plan has ended, so changes are not saved until it is renewed.`
								}),
								(0, C.jsx)(`p`, {
									className: `bg-surface p-4 text-caption text-muted`,
									children: `Page content`
								})
							]
						})
					})
				}),
				(0, C.jsx)(n, {
					title: `Toasts for the result of an action`,
					children: (0, C.jsx)(i, {
						label: `Toast`,
						code: `const toast = useToast()
toast.success(t('saved'))
toast.error(t('publish.failed'), { description: t('publish.retry') })`,
						children: (0, C.jsxs)(_, { children: [(0, C.jsx)(O, {}), (0, C.jsx)(y, {
							toneLabels: w,
							closeLabel: `Close notification`,
							regionLabel: `Notifications`
						})] })
					})
				}),
				(0, C.jsx)(n, {
					title: `Flash messages after a redirect`,
					children: (0, C.jsx)(i, {
						label: `FlashMessages`,
						code: `<FlashMessages messages={messagesFromServer} toneLabels={toneLabels} onDismiss={remove} dismissLabel={t('close')} />`,
						children: (0, C.jsx)(k, {})
					})
				}),
				(0, C.jsxs)(n, {
					title: `Inline errors and the error summary`,
					children: [(0, C.jsx)(s, { children: (0, C.jsx)(`p`, { children: `Submit the empty form. The summary takes focus and links to each field; each field shows its own error. Fix them and submit again for the success message.` }) }), (0, C.jsx)(i, {
						label: `Form messages`,
						code: `<FormErrorSummary title={t('form.problems', { count })} errors={errors} />
<TextField id="name" label={t('name')} isInvalid={!!nameError} errorMessage={nameError} />`,
						children: (0, C.jsx)(A, {})
					})]
				})
			]
		}),
		(0, C.jsxs)(d, {
			id: `writing`,
			title: `Writing guidelines`,
			children: [
				(0, C.jsx)(s, { children: (0, C.jsxs)(`ul`, { children: [
					(0, C.jsxs)(`li`, { children: [(0, C.jsx)(`strong`, { children: `Say what happened, then what to do.` }), ` “Could not save. Check your connection and try again.”`] }),
					(0, C.jsxs)(`li`, { children: [(0, C.jsx)(`strong`, { children: `Be specific.` }), ` Name the thing and the value: “Enter a date after 1 March”, not “Invalid date”.`] }),
					(0, C.jsxs)(`li`, { children: [(0, C.jsx)(`strong`, { children: `Use plain words and no blame.` }), ` “That email address is already in use”, not “You entered an invalid email”. No codes unless support needs them, and then after the words.`] }),
					(0, C.jsxs)(`li`, { children: [(0, C.jsx)(`strong`, { children: `Keep the title short.` }), ` Up to about eight words. Put the detail in the description.`] }),
					(0, C.jsxs)(`li`, { children: [(0, C.jsx)(`strong`, { children: `Repeat the verb of the button.` }), ` After “Publish”, say “Published”, so the reader connects the two.`] }),
					(0, C.jsxs)(`li`, { children: [(0, C.jsx)(`strong`, { children: `Stay calm.` }), ` No “Oops”, no exclamation marks, no jokes in errors, and one apology at most when Skribly is at fault.`] }),
					(0, C.jsxs)(`li`, { children: [(0, C.jsx)(`strong`, { children: `Warnings say the consequence and the way out.` }), ` “Your plan ends in 3 days. Renew it to keep editing.”`] })
				] }) }),
				(0, C.jsx)(o, {
					good: (0, C.jsx)(f, {
						tone: `danger`,
						toneLabel: `Error`,
						title: `Could not publish the page`,
						children: `The server did not answer. Your changes are saved; try again in a minute.`
					}),
					goodText: `Say what failed, that the work is safe, and what to do.`,
					bad: (0, C.jsx)(f, {
						tone: `danger`,
						toneLabel: `Error`,
						title: `Oops! Something went wrong`,
						children: `Error 503.`
					}),
					badText: `Hide the cause behind a code, or leave the reader without a next step.`
				}),
				(0, C.jsx)(o, {
					good: (0, C.jsx)(f, {
						tone: `ok`,
						toneLabel: `Success`,
						title: `Invitation sent to ada@example.com`
					}),
					goodText: `Confirm the exact thing that happened.`,
					bad: (0, C.jsx)(f, {
						tone: `ok`,
						toneLabel: `Success`,
						title: `Success!`
					}),
					badText: `Repeat the tone word as the message.`
				})
			]
		}),
		(0, C.jsxs)(d, {
			id: `timing-and-focus`,
			title: `Timing and focus`,
			children: [(0, C.jsx)(s, { children: (0, C.jsxs)(`ul`, { children: [
				(0, C.jsx)(`li`, { children: `Errors and warnings never close on their own. Success and information toasts stay at least 5 seconds and pause while the pointer or focus is on them.` }),
				(0, C.jsx)(`li`, { children: `Move focus only for a blocking error after a submit, as FormErrorSummary does. Everything else is announced and leaves focus where it is.` }),
				(0, C.jsx)(`li`, { children: `Announce each message once. Render the live region empty first, then fill it; a region that appears with its text is often not read.` }),
				(0, C.jsx)(`li`, { children: `Put a toast’s action somewhere else too. A toast may close before a keyboard user reaches it, so Undo needs a second path, such as the item’s menu.` })
			] }) }), (0, C.jsx)(u, {
				language: `tsx`,
				title: `Announcing your own message`,
				code: `import { announce } from '@skribly/ui/theme'

announce(t('results', { count }))          // polite
announce(t('upload.failed'), 'assertive')  // errors only`
			})]
		})
	] });
}
export { A as FieldErrorsDemo, k as FlashDemo, D as LiveAlertDemo, j as MessagesPattern, O as ToastButtons, w as toneLabels };
