import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { t } from "./circle-exclamation-point.DRCkYbzg.js";
import { t as n } from "./circle-check.CWwdJPsz.js";
import { t as r } from "./info.D9DvH9cK.js";
import { t as i } from "./triangle-exclamation-point.BJJ-nXau.js";
import { n as a } from "./react-dom.B9zIfLd2.js";
import { t as o } from "./Button.DRxd_7vr.js";
import { S as s, d as c, f as l, i as u, n as d, p as f, r as p, s as m, t as h, u as g } from "./doc.D2PtmWN6.js";
import { a as _, i as v, n as y, r as b, t as x } from "./ToastViewport.BmewrVf4.js";
import { t as S } from "./FormErrorSummary.B5NqDela.js";
import { t as C } from "./TextField.BRNO9ptc.js";
import { t as w } from "./jsx-runtime.yrTYNGQT.js";
var T = e(a(), 1), E = w(), D = {
	ok: `Success`,
	info: `Information`,
	warn: `Warning`,
	danger: `Error`
}, O = [
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
], k = [
	{
		tone: `ok`,
		name: `Success`,
		icon: (0, E.jsx)(n, {}),
		means: `It worked, and the result is what the reader asked for.`,
		read: `Polite`,
		stays: `A toast may close after 5 s or more`,
		example: `Invitation sent to ada@example.com`
	},
	{
		tone: `info`,
		name: `Information`,
		icon: (0, E.jsx)(r, {}),
		means: `A neutral fact that helps, with nothing to fix.`,
		read: `Polite`,
		stays: `A toast may close after 5 s or more`,
		example: `Imports run at night`
	},
	{
		tone: `warn`,
		name: `Warning`,
		icon: (0, E.jsx)(i, {}),
		means: `Something may go wrong or needs a decision soon. Nothing is blocked yet.`,
		read: `Polite`,
		stays: `Until closed`,
		example: `Your draft is kept for 7 more days`
	},
	{
		tone: `danger`,
		name: `Error`,
		icon: (0, E.jsx)(t, {}),
		means: `It failed or is blocked. Say what happened and how to fix it.`,
		read: `Assertive`,
		stays: `Until closed or fixed`,
		example: `Could not publish. The server did not answer.`
	}
];
function A() {
	let [e, t] = (0, T.useState)(`idle`);
	return (0, E.jsxs)(`div`, {
		className: `grid max-w-xl gap-3`,
		children: [(0, E.jsxs)(`div`, {
			className: `flex flex-wrap gap-2`,
			children: [(0, E.jsx)(o, {
				variant: `outline`,
				size: `sm`,
				onPress: () => t(`ok`),
				children: `Test the connection`
			}), (0, E.jsx)(o, {
				variant: `outline`,
				size: `sm`,
				onPress: () => t(`danger`),
				children: `Test with a wrong token`
			})]
		}), (0, E.jsxs)(`div`, {
			"aria-live": `polite`,
			className: `min-h-0`,
			children: [e === `ok` ? (0, E.jsx)(s, {
				tone: `ok`,
				toneLabel: `Success`,
				title: `Connected to the tracker`,
				onDismiss: () => t(`idle`),
				dismissLabel: `Close message`
			}) : null, e === `danger` ? (0, E.jsx)(s, {
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
function j() {
	let e = b();
	return (0, E.jsxs)(`div`, {
		className: `flex flex-wrap gap-2`,
		children: [
			(0, E.jsx)(o, {
				size: `sm`,
				variant: `outline`,
				onPress: () => e.success(`Changes saved`),
				children: `Success`
			}),
			(0, E.jsx)(o, {
				size: `sm`,
				variant: `outline`,
				onPress: () => e.info(`Sync finished`, { description: `12 files are up to date.` }),
				children: `Information`
			}),
			(0, E.jsx)(o, {
				size: `sm`,
				variant: `outline`,
				onPress: () => e.warning(`Storage almost full`, { description: `Free some space to keep uploading.` }),
				children: `Warning`
			}),
			(0, E.jsx)(o, {
				size: `sm`,
				variant: `outline`,
				onPress: () => e.error(`Could not publish`, { description: `The server did not answer. Try again in a minute.` }),
				children: `Error`
			}),
			(0, E.jsx)(o, {
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
function M() {
	let [e, t] = (0, T.useState)([{
		id: `saved`,
		tone: `ok`,
		title: `Profile saved`
	}]);
	return (0, E.jsxs)(`div`, {
		className: `grid gap-3`,
		children: [(0, E.jsx)(v, {
			messages: e,
			toneLabels: D,
			onDismiss: (e) => t((t) => t.filter((t) => t.id !== e)),
			dismissLabel: `Close message`
		}), (0, E.jsx)(`div`, { children: (0, E.jsx)(o, {
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
function N() {
	let e = (0, T.useId)(), [t, n] = (0, T.useState)(!1), [r, i] = (0, T.useState)([]), [a, c] = (0, T.useState)(!1), [l, u] = (0, T.useState)(``), [d, f] = (0, T.useState)(`ada@`), p = l.trim() ? null : `Enter a project name`, m = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d) ? null : `Enter an email address like name@example.com`;
	return (0, E.jsxs)(`form`, {
		noValidate: !0,
		className: `grid max-w-md gap-4`,
		onSubmit: (t) => {
			t.preventDefault();
			let r = [...p ? [{
				fieldId: `${e}-name`,
				message: p
			}] : [], ...m ? [{
				fieldId: `${e}-email`,
				message: m
			}] : []];
			n(!0), i(r), c(r.length === 0);
		},
		children: [
			r.length > 0 ? (0, E.jsx)(S, {
				title: r.length === 1 ? `There is 1 problem with this form` : `There are ${r.length} problems with this form`,
				errors: r,
				headingLevel: 4
			}) : null,
			(0, E.jsx)(`div`, {
				"aria-live": `polite`,
				children: a ? (0, E.jsx)(s, {
					tone: `ok`,
					toneLabel: `Success`,
					title: `Project created`
				}) : null
			}),
			(0, E.jsx)(C, {
				id: `${e}-name`,
				label: `Project name`,
				isRequired: !0,
				value: l,
				onChange: u,
				isInvalid: t && p !== null,
				errorMessage: p ?? ``
			}),
			(0, E.jsx)(C, {
				id: `${e}-email`,
				label: `Owner email`,
				type: `email`,
				autoComplete: `email`,
				value: d,
				onChange: f,
				isInvalid: t && m !== null,
				errorMessage: m ?? ``,
				description: `We send the invitation here.`
			}),
			(0, E.jsxs)(`div`, {
				className: `flex flex-wrap gap-2`,
				children: [(0, E.jsx)(o, {
					type: `submit`,
					children: `Create project`
				}), (0, E.jsx)(o, {
					variant: `ghost`,
					onPress: () => {
						n(!1), i([]), c(!1), u(``), f(`ada@`);
					},
					children: `Reset`
				})]
			})
		]
	});
}
function P() {
	return (0, E.jsxs)(p, { children: [
		(0, E.jsx)(m, {
			eyebrow: `Patterns`,
			title: `Messages: success, information, warning and error`,
			lead: `Every message in Skribly has one of four tones and lives in one of a few places. Pick the place by how long the message matters and how close it is to what it is about, then write it so it says what happened and what to do next.`
		}),
		(0, E.jsxs)(g, {
			id: `tones`,
			title: `The four tones`,
			children: [(0, E.jsx)(`ul`, {
				className: `grid gap-4 md:grid-cols-2`,
				children: k.map((e) => (0, E.jsxs)(`li`, {
					className: `flex min-w-0 flex-col gap-3 rounded-xl border border-border bg-surface p-5`,
					children: [
						(0, E.jsxs)(`p`, {
							className: `flex items-center gap-2 text-title font-semibold text-fg`,
							children: [(0, E.jsx)(`span`, {
								"aria-hidden": !0,
								className: `inline-flex [&>svg]:size-5`,
								children: e.icon
							}), e.name]
						}),
						(0, E.jsx)(`p`, {
							className: `text-body text-muted`,
							children: e.means
						}),
						(0, E.jsx)(s, {
							tone: e.tone,
							toneLabel: e.name,
							title: e.example
						}),
						(0, E.jsxs)(`dl`, {
							className: `grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-caption`,
							children: [
								(0, E.jsx)(`dt`, {
									className: `text-muted`,
									children: `Read out`
								}),
								(0, E.jsx)(`dd`, {
									className: `text-fg`,
									children: e.read
								}),
								(0, E.jsx)(`dt`, {
									className: `text-muted`,
									children: `Stays`
								}),
								(0, E.jsx)(`dd`, {
									className: `text-fg`,
									children: e.stays
								})
							]
						})
					]
				}, e.tone))
			}), (0, E.jsx)(f, { children: (0, E.jsxs)(`p`, { children: [
				`Each tone has a colour, an icon of its own shape and a word. The word, such as “Error”, is the `,
				(0, E.jsx)(`code`, { children: `toneLabel` }),
				` prop, read before the message so the meaning never rests on colour. Pass it every time.`
			] }) })]
		}),
		(0, E.jsxs)(g, {
			id: `choose`,
			title: `Choose the right component`,
			children: [(0, E.jsxs)(l, {
				label: `Which message component to use`,
				children: [
					(0, E.jsx)(`caption`, {
						className: `sr-only`,
						children: `Message components, where they show, how long they stay, how they are read and what they are for`
					}),
					(0, E.jsx)(`thead`, { children: (0, E.jsxs)(`tr`, { children: [
						(0, E.jsx)(`th`, {
							scope: `col`,
							children: `Component`
						}),
						(0, E.jsx)(`th`, {
							scope: `col`,
							children: `Where`
						}),
						(0, E.jsx)(`th`, {
							scope: `col`,
							children: `How long`
						}),
						(0, E.jsx)(`th`, {
							scope: `col`,
							children: `How it is read`
						}),
						(0, E.jsx)(`th`, {
							scope: `col`,
							children: `Use it for`
						})
					] }) }),
					(0, E.jsx)(`tbody`, { children: O.map(([e, t, n, r, i]) => (0, E.jsxs)(`tr`, { children: [
						(0, E.jsx)(`th`, {
							scope: `row`,
							className: `font-semibold whitespace-nowrap`,
							children: e
						}),
						(0, E.jsx)(`td`, { children: t }),
						(0, E.jsx)(`td`, { children: n }),
						(0, E.jsx)(`td`, { children: r }),
						(0, E.jsx)(`td`, { children: i })
					] }, e)) })
				]
			}), (0, E.jsx)(f, { children: (0, E.jsx)(`p`, { children: `A quick rule: the closer the message is to its cause, the better. A field error beats a summary, a summary beats a banner, and a toast is for results the reader would otherwise not see.` }) })]
		}),
		(0, E.jsxs)(g, {
			id: `examples`,
			title: `Live examples`,
			children: [
				(0, E.jsxs)(c, {
					title: `Alert with a live result`,
					children: [(0, E.jsx)(f, { children: (0, E.jsx)(`p`, { children: `The live region is in the page before the result arrives, so the result is read out when it appears.` }) }), (0, E.jsx)(u, {
						label: `Alert`,
						code: `<div aria-live="polite">
  {result && <Alert tone="ok" toneLabel={t('tone.ok')} title={t('tracker.connected')} />}
</div>`,
						children: (0, E.jsx)(A, {})
					})]
				}),
				(0, E.jsx)(c, {
					title: `Banner for a state of the whole app`,
					children: (0, E.jsx)(u, {
						label: `Banner`,
						code: `<Banner tone="danger" toneLabel={t('tone.error')} title={t('offline.title')} live="assertive">
  {t('offline.text')}
</Banner>`,
						children: (0, E.jsxs)(`div`, {
							className: `overflow-hidden rounded-lg border border-border`,
							children: [
								(0, E.jsx)(_, {
									tone: `danger`,
									toneLabel: `Error`,
									title: `You are offline`,
									children: `Changes are kept on this device and sent when the connection returns.`
								}),
								(0, E.jsx)(_, {
									tone: `warn`,
									toneLabel: `Warning`,
									title: `Read-only mode`,
									actions: (0, E.jsx)(o, {
										size: `sm`,
										variant: `outline`,
										children: `Renew plan`
									}),
									children: `The plan has ended, so changes are not saved until it is renewed.`
								}),
								(0, E.jsx)(`p`, {
									className: `bg-surface p-4 text-caption text-muted`,
									children: `Page content`
								})
							]
						})
					})
				}),
				(0, E.jsx)(c, {
					title: `Toasts for the result of an action`,
					children: (0, E.jsx)(u, {
						label: `Toast`,
						code: `const toast = useToast()
toast.success(t('saved'))
toast.error(t('publish.failed'), { description: t('publish.retry') })`,
						children: (0, E.jsxs)(y, { children: [(0, E.jsx)(j, {}), (0, E.jsx)(x, {
							toneLabels: D,
							closeLabel: `Close notification`,
							regionLabel: `Notifications`
						})] })
					})
				}),
				(0, E.jsx)(c, {
					title: `Flash messages after a redirect`,
					children: (0, E.jsx)(u, {
						label: `FlashMessages`,
						code: `<FlashMessages messages={messagesFromServer} toneLabels={toneLabels} onDismiss={remove} dismissLabel={t('close')} />`,
						children: (0, E.jsx)(M, {})
					})
				}),
				(0, E.jsxs)(c, {
					title: `Inline errors and the error summary`,
					children: [(0, E.jsx)(f, { children: (0, E.jsx)(`p`, { children: `Submit the empty form. The summary takes focus and links to each field; each field shows its own error. Fix them and submit again for the success message.` }) }), (0, E.jsx)(u, {
						label: `Form messages`,
						code: `<FormErrorSummary title={t('form.problems', { count })} errors={errors} />
<TextField id="name" label={t('name')} isInvalid={!!nameError} errorMessage={nameError} />`,
						children: (0, E.jsx)(N, {})
					})]
				})
			]
		}),
		(0, E.jsxs)(g, {
			id: `writing`,
			title: `Writing guidelines`,
			children: [
				(0, E.jsx)(f, { children: (0, E.jsxs)(`ul`, { children: [
					(0, E.jsxs)(`li`, { children: [(0, E.jsx)(`strong`, { children: `Say what happened, then what to do.` }), ` “Could not save. Check your connection and try again.”`] }),
					(0, E.jsxs)(`li`, { children: [(0, E.jsx)(`strong`, { children: `Be specific.` }), ` Name the thing and the value: “Enter a date after 1 March”, not “Invalid date”.`] }),
					(0, E.jsxs)(`li`, { children: [(0, E.jsx)(`strong`, { children: `Use plain words and no blame.` }), ` “That email address is already in use”, not “You entered an invalid email”. No codes unless support needs them, and then after the words.`] }),
					(0, E.jsxs)(`li`, { children: [(0, E.jsx)(`strong`, { children: `Keep the title short.` }), ` Up to about eight words. Put the detail in the description.`] }),
					(0, E.jsxs)(`li`, { children: [(0, E.jsx)(`strong`, { children: `Repeat the verb of the button.` }), ` After “Publish”, say “Published”, so the reader connects the two.`] }),
					(0, E.jsxs)(`li`, { children: [(0, E.jsx)(`strong`, { children: `Stay calm.` }), ` No “Oops”, no exclamation marks, no jokes in errors, and one apology at most when Skribly is at fault.`] }),
					(0, E.jsxs)(`li`, { children: [(0, E.jsx)(`strong`, { children: `Warnings say the consequence and the way out.` }), ` “Your plan ends in 3 days. Renew it to keep editing.”`] })
				] }) }),
				(0, E.jsx)(d, {
					good: (0, E.jsx)(s, {
						tone: `danger`,
						toneLabel: `Error`,
						title: `Could not publish the page`,
						children: `The server did not answer. Your changes are saved; try again in a minute.`
					}),
					goodText: `Say what failed, that the work is safe, and what to do.`,
					bad: (0, E.jsx)(s, {
						tone: `danger`,
						toneLabel: `Error`,
						title: `Oops! Something went wrong`,
						children: `Error 503.`
					}),
					badText: `Hide the cause behind a code, or leave the reader without a next step.`
				}),
				(0, E.jsx)(d, {
					good: (0, E.jsx)(s, {
						tone: `ok`,
						toneLabel: `Success`,
						title: `Invitation sent to ada@example.com`
					}),
					goodText: `Confirm the exact thing that happened.`,
					bad: (0, E.jsx)(s, {
						tone: `ok`,
						toneLabel: `Success`,
						title: `Success!`
					}),
					badText: `Repeat the tone word as the message.`
				})
			]
		}),
		(0, E.jsxs)(g, {
			id: `timing-and-focus`,
			title: `Timing and focus`,
			children: [(0, E.jsx)(f, { children: (0, E.jsxs)(`ul`, { children: [
				(0, E.jsx)(`li`, { children: `Errors and warnings never close on their own. Success and information toasts stay at least 5 seconds and pause while the pointer or focus is on them.` }),
				(0, E.jsx)(`li`, { children: `Move focus only for a blocking error after a submit, as FormErrorSummary does. Everything else is announced and leaves focus where it is.` }),
				(0, E.jsx)(`li`, { children: `Announce each message once. Render the live region empty first, then fill it; a region that appears with its text is often not read.` }),
				(0, E.jsx)(`li`, { children: `Put a toast’s action somewhere else too. A toast may close before a keyboard user reaches it, so Undo needs a second path, such as the item’s menu.` })
			] }) }), (0, E.jsx)(h, {
				language: `tsx`,
				title: `Announcing your own message`,
				code: `import { announce } from '@skribly/ui/theme'

announce(t('results', { count }))          // polite
announce(t('upload.failed'), 'assertive')  // errors only`
			})]
		})
	] });
}
export { N as FieldErrorsDemo, M as FlashDemo, A as LiveAlertDemo, P as MessagesPattern, j as ToastButtons, D as toneLabels };
