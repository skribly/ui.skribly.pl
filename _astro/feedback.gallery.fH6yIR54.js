import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { I as n, L as r, Q as i, j as a, w as o } from "./doc.C_PtMNUB.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
import { t as c } from "./Button.df3csLrB.js";
import { t as l } from "./Badge.BotZF5ka.js";
import { a as u, i as d, n as f, r as p, t as m } from "./ToastViewport.zctZsTLC.js";
import { t as h } from "./EmptyState.Cz4N1Arf.js";
import { t as g } from "./Meter.Cj_BFYF4.js";
import { n as _, r as v, t as y } from "./ProgressBar.Dky8J3J2.js";
import { t as b } from "./SeverityBadge.CwuqUxYW.js";
import { t as x } from "./Spinner.CPYol_Wu.js";
var S = t(s(), 1), C = n();
function w({ label: e, model: t, provider: n, modelLabel: i, providerLabel: a, sentLabel: o, sentHref: s, className: c, ...l }) {
	return (0, C.jsxs)(`p`, {
		...l,
		className: r(`sk-ai-note`, c),
		children: [
			(0, C.jsx)(`span`, {
				className: `sk-ai-note__badge`,
				children: e
			}),
			(0, C.jsx)(`span`, {
				className: `sk-ai-note__model`,
				children: `${i}: ${t}`
			}),
			(0, C.jsx)(`span`, {
				className: `sk-ai-note__provider`,
				children: `${a}: ${n}`
			}),
			(0, C.jsx)(`a`, {
				className: `sk-ai-note__link`,
				href: s,
				children: o
			})
		]
	});
}
function T({ label: e, hideLabel: t = !1, tone: n = `accent`, status: a, showValue: o = !0, size: s = `md`, className: c, ...l }) {
	let u = (0, S.useId)(), d = [l[`aria-describedby`], a ? u : null].filter(Boolean).join(` `);
	return (0, C.jsx)(g, {
		...l,
		...d ? { "aria-describedby": d } : {},
		className: r(`flex w-full min-w-0 flex-col gap-1.5 text-body text-fg`, c),
		children: ({ percentage: c, valueText: l }) => (0, C.jsxs)(C.Fragment, { children: [(0, C.jsxs)(`span`, {
			className: r(`flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5`, t && !o && !a && `sr-only`),
			children: [(0, C.jsx)(i, {
				className: r(`min-w-0 font-medium wrap-break-word`, t && `sr-only`),
				children: e
			}), (0, C.jsxs)(`span`, {
				className: `ms-auto inline-flex flex-wrap items-baseline gap-x-2 text-caption text-muted tabular-nums`,
				children: [a ? (0, C.jsx)(_, {
					id: u,
					tone: n,
					children: a
				}) : null, o ? (0, C.jsx)(`span`, {
					"aria-hidden": !0,
					children: l
				}) : null]
			})]
		}), (0, C.jsx)(v, {
			percentage: c,
			tone: n,
			size: s
		})] })
	});
}
var E = {
	rect: `h-16 w-full rounded-md`,
	circle: `size-8 rounded-full`,
	line: `h-3 w-full rounded-sm`
}, D = `block shrink-0 border border-transparent bg-border animate-pulse motion-reduce:animate-none in-[.a11y-reduce-motion]:animate-none forced-colors:border-[color:GrayText]`;
function O({ shape: e = `rect`, className: t, ...n }) {
	return (0, C.jsx)(`span`, {
		"aria-hidden": !0,
		...n,
		className: r(D, E[e], t)
	});
}
function k({ avatar: e = !0, lines: t = 2, trailing: n = !0, className: i, ...a }) {
	return (0, C.jsxs)(`span`, {
		"aria-hidden": !0,
		...a,
		className: r(`flex w-full min-w-0 items-center gap-3 border-b border-border px-4 py-3 last:border-b-0`, i),
		children: [
			e ? (0, C.jsx)(`span`, { className: r(D, `size-8 rounded-full`) }) : null,
			(0, C.jsxs)(`span`, {
				className: `flex min-w-0 flex-1 flex-col gap-2`,
				children: [(0, C.jsx)(`span`, { className: r(D, `h-3 w-1/2 rounded-sm`) }), t === 2 ? (0, C.jsx)(`span`, { className: r(D, `h-3 w-4/5 rounded-sm`) }) : null]
			}),
			n ? (0, C.jsx)(`span`, { className: r(D, `h-5 w-14 rounded-full`) }) : null
		]
	});
}
var A = [
	`w-full`,
	`w-11/12`,
	`w-full`,
	`w-10/12`,
	`w-full`,
	`w-9/12`
];
function j({ lines: e = 3, heading: t = !1, className: n, ...i }) {
	let a = Math.max(1, Math.round(e));
	return (0, C.jsxs)(`span`, {
		"aria-hidden": !0,
		...i,
		className: r(`flex w-full min-w-0 flex-col gap-2`, n),
		children: [t ? (0, C.jsx)(`span`, { className: r(D, `mb-1 h-4 w-2/5 rounded-sm`) }) : null, Array.from({ length: a }, (e, t) => (0, C.jsx)(`span`, { className: r(D, `h-3 rounded-sm`, a > 1 && t === a - 1 ? `w-3/5` : A[t % A.length]) }, t))]
	});
}
var M = {
	neutral: `bg-muted ring-muted/25`,
	accent: `bg-accent ring-accent/25`,
	ok: `bg-ok ring-ok/25`,
	warn: `bg-warn ring-warn/25`,
	danger: `bg-danger ring-danger/25`,
	info: `bg-info ring-info/25`
};
function N({ tone: e = `neutral`, label: t, hideLabel: n = !1, pulse: i = !1, className: a, ...o }) {
	return (0, C.jsxs)(`span`, {
		...o,
		"data-tone": e,
		className: r(`inline-flex max-w-full min-w-0 items-center gap-1.5 align-middle text-caption text-fg`, a),
		children: [(0, C.jsx)(`span`, {
			"aria-hidden": !0,
			className: r(`size-2 shrink-0 rounded-full forced-colors:bg-[CanvasText] forced-colors:forced-color-adjust-none`, M[e], i && `animate-pulse ring-3 motion-reduce:animate-none in-[.a11y-reduce-motion]:animate-none`)
		}), (0, C.jsx)(`span`, {
			className: n ? `sr-only` : `min-w-0 truncate`,
			children: t
		})]
	});
}
var P = e({ default: () => U }), F = {
	ok: `Success`,
	info: `Information`,
	warn: `Warning`,
	danger: `Error`
};
function I() {
	let [e, t] = (0, S.useState)(!0);
	return e ? (0, C.jsx)(o, {
		tone: `ok`,
		toneLabel: `Success`,
		title: `Invitation sent`,
		onDismiss: () => t(!1),
		dismissLabel: `Close message`
	}) : (0, C.jsx)(c, {
		variant: `outline`,
		size: `sm`,
		onPress: () => t(!0),
		children: `Show the message again`
	});
}
function L() {
	let [e, t] = (0, S.useState)(!0);
	return (0, C.jsxs)(`div`, {
		className: `flex flex-col overflow-hidden rounded-md border border-border`,
		children: [
			(0, C.jsx)(u, {
				tone: `warn`,
				toneLabel: `Warning`,
				title: `Read-only mode`,
				actions: (0, C.jsx)(c, {
					size: `sm`,
					variant: `outline`,
					children: `Renew plan`
				}),
				children: `The plan has ended, so changes are not saved until it is renewed.`
			}),
			(0, C.jsx)(u, {
				tone: `danger`,
				toneLabel: `Error`,
				title: `You are offline`,
				children: `Changes are kept on this device and sent when the connection returns.`
			}),
			e ? (0, C.jsx)(u, {
				tone: `info`,
				toneLabel: `Information`,
				title: `A new version is ready`,
				onDismiss: () => t(!1),
				dismissLabel: `Hide this notice`
			}) : null,
			(0, C.jsx)(`div`, {
				className: `bg-surface p-4 text-caption text-muted`,
				children: `Page content`
			})
		]
	});
}
var R = [{
	id: `profile`,
	tone: `ok`,
	title: `Profile saved`
}];
function z() {
	let [e, t] = (0, S.useState)(R), [n, r] = (0, S.useState)(0);
	return (0, C.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, C.jsx)(d, {
			messages: e,
			toneLabels: F,
			onDismiss: (e) => t((t) => t.filter((t) => t.id !== e)),
			dismissLabel: `Close message`,
			focusError: !0
		}), (0, C.jsx)(`div`, { children: (0, C.jsx)(c, {
			variant: `outline`,
			size: `sm`,
			onPress: () => {
				let e = n + 1;
				r(e), t([{
					id: `form-${e}`,
					tone: `danger`,
					title: `The form was not sent`,
					description: `Fix these fields and send it again.`,
					items: [`Email address is missing`, `Project name is longer than 80 characters`]
				}, {
					id: `draft-${e}`,
					tone: `warn`,
					title: `Your draft is kept for 7 days`
				}]);
			},
			children: `Send the form with errors`
		}) })]
	});
}
function B() {
	let e = p();
	return (0, C.jsxs)(`div`, {
		className: `flex flex-wrap gap-2`,
		children: [
			(0, C.jsx)(c, {
				size: `sm`,
				variant: `outline`,
				onPress: () => e.success(`Changes saved`),
				children: `Success`
			}),
			(0, C.jsx)(c, {
				size: `sm`,
				variant: `outline`,
				onPress: () => e.info(`Sync finished`, { description: `12 files are up to date.` }),
				children: `Information`
			}),
			(0, C.jsx)(c, {
				size: `sm`,
				variant: `outline`,
				onPress: () => e.warning(`Storage almost full`, { description: `Free some space to keep uploading.` }),
				children: `Warning`
			}),
			(0, C.jsx)(c, {
				size: `sm`,
				variant: `outline`,
				onPress: () => e.error(`Could not publish`, { description: `The server did not answer. Try again in a minute.` }),
				children: `Error`
			}),
			(0, C.jsx)(c, {
				size: `sm`,
				variant: `outline`,
				onPress: () => e.success(`Project moved to the archive`, { action: {
					label: `Undo`,
					onAction: () => e.info(`Project restored`)
				} }),
				children: `With an action`
			})
		]
	});
}
function V() {
	let [e, t] = (0, S.useState)(null);
	return (0, C.jsx)(`div`, {
		ref: t,
		children: (0, C.jsxs)(f, { children: [(0, C.jsx)(B, {}), (0, C.jsx)(m, {
			toneLabels: F,
			closeLabel: `Close notification`,
			regionLabel: `Notifications`,
			container: e
		})] })
	});
}
function H() {
	let [e, t] = (0, S.useState)(!0);
	return (0, C.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, C.jsx)(`div`, {
			"aria-busy": e,
			className: `overflow-hidden rounded-md border border-border bg-surface`,
			children: e ? (0, C.jsxs)(C.Fragment, { children: [
				(0, C.jsx)(`div`, {
					className: `border-b border-border px-4 py-2`,
					children: (0, C.jsx)(x, {
						label: `Loading members`,
						showLabel: !0,
						size: `sm`
					})
				}),
				(0, C.jsx)(k, {}),
				(0, C.jsx)(k, {}),
				(0, C.jsx)(k, { lines: 1 })
			] }) : (0, C.jsx)(`ul`, { children: [
				`Ada Lovelace`,
				`Grace Hopper`,
				`Alan Turing`
			].map((e) => (0, C.jsx)(`li`, {
				className: `border-b border-border px-4 py-3 last:border-b-0`,
				children: e
			}, e)) })
		}), (0, C.jsx)(`div`, { children: (0, C.jsx)(c, {
			size: `sm`,
			variant: `outline`,
			onPress: () => t((e) => !e),
			children: e ? `Finish loading` : `Load again`
		}) })]
	});
}
var U = {
	title: `Feedback`,
	description: `Status, messages and loading. Success, information, warning and error share one system: each has a tone, an icon shape and a word, so colour never carries the meaning alone. Messages that arrive later are read out through polite live regions, and blocking errors through assertive ones.`,
	pl: {
		title: `Komunikaty i stany`,
		description: `Status, komunikaty i ładowanie. Sukces, informacja, ostrzeżenie i błąd mają jeden system: każdy ma ton, kształt ikony i słowo, więc kolor nigdy sam nie niesie znaczenia. Komunikaty, które przychodzą później, są odczytywane przez regiony na żywo typu polite, a błędy blokujące przez regiony typu assertive.`
	},
	demos: [
		{
			name: `Badge`,
			components: [`Badge`],
			description: `A short label for a state or a count, such as Draft or Failed. Pick it for static facts inside rows and headers; use StatusDot when the state is live.`,
			usage: `<Badge tone="ok" icon={<Check />}>Done</Badge>`,
			accessibility: `Plain text, so screen readers read the word. Icons are hidden. Every tone pairs its colour with text, and the text and tint pairs meet 4.5:1 in all three themes. Long text truncates on screen and stays whole for screen readers; pass title when the full text matters. A transparent border keeps the outline in forced colours.`,
			pl: {
				description: `Krótka etykieta stanu albo liczby, taka jak Draft lub Failed. Wybierz ją dla stałych faktów w wierszach i nagłówkach; gdy stan zmienia się na żywo, użyj StatusDot.`,
				accessibility: `Zwykły tekst, więc czytniki ekranu odczytują słowo. Ikony są ukryte. Każdy ton łączy swój kolor z tekstem, a pary tekstu i podbarwienia spełniają 4,5:1 we wszystkich trzech motywach. Długi tekst jest ucinany na ekranie i zostaje w całości dla czytników ekranu; przekaż title, gdy pełny tekst ma znaczenie. Przezroczysta ramka zachowuje obrys w trybie wymuszonych kolorów.`
			},
			render: () => (0, C.jsxs)(`div`, {
				className: `flex flex-wrap gap-2`,
				children: [
					(0, C.jsx)(l, { children: `Draft` }),
					(0, C.jsx)(l, {
						tone: `accent`,
						children: `New`
					}),
					(0, C.jsx)(l, {
						tone: `ok`,
						children: `Done`
					}),
					(0, C.jsx)(l, {
						tone: `warn`,
						children: `Waiting`
					}),
					(0, C.jsx)(l, {
						tone: `danger`,
						children: `Failed`
					}),
					(0, C.jsx)(l, {
						tone: `info`,
						children: `Info`
					}),
					(0, C.jsx)(l, {
						tone: `ok`,
						size: `sm`,
						children: `Small`
					}),
					(0, C.jsx)(l, {
						tone: `info`,
						icon: (0, C.jsx)(a, { name: `ai.sparkles` }),
						title: `Suggested by the assistant from the last three weeks of activity`,
						className: `max-w-48`,
						children: `Suggested by the assistant from the last three weeks of activity`
					})
				]
			})
		},
		{
			name: `SeverityBadge`,
			components: [`SeverityBadge`],
			description: `The level of a finding or an incident, from critical to info. Pick it whenever items are ranked by how much they matter.`,
			usage: `<SeverityBadge severity="high">{t('severity.high')}</SeverityBadge>`,
			accessibility: `The level is the visible word, which comes from the app. Chevrons climb with the level, so the order reads without colour; the glyph is hidden from screen readers.`,
			pl: {
				description: `Poziom ustalenia albo incydentu, od krytycznego do informacyjnego. Wybierz ją zawsze, gdy pozycje są uszeregowane według ważności.`,
				accessibility: `Poziom jest widocznym słowem, które pochodzi z aplikacji. Szewrony rosną wraz z poziomem, więc kolejność da się odczytać bez koloru; znak jest ukryty przed czytnikami ekranu.`
			},
			render: () => (0, C.jsxs)(`div`, {
				className: `flex flex-wrap gap-2`,
				children: [
					(0, C.jsx)(b, {
						severity: `critical`,
						children: `Critical`
					}),
					(0, C.jsx)(b, {
						severity: `high`,
						children: `High`
					}),
					(0, C.jsx)(b, {
						severity: `medium`,
						children: `Medium`
					}),
					(0, C.jsx)(b, {
						severity: `low`,
						children: `Low`
					}),
					(0, C.jsx)(b, {
						severity: `info`,
						children: `Info`
					})
				]
			})
		},
		{
			name: `StatusDot`,
			components: [`StatusDot`],
			description: `A small dot and a word for the state of a process, a service or a person. Pick it for lists of things that run.`,
			usage: `<StatusDot tone="ok" label="Running" pulse />`,
			accessibility: `The label is always in the page. hideLabel keeps it for screen readers only, so use it only when the state is written nearby. The dot is hidden from screen readers and turns CanvasText in forced colours. The pulse stops under reduced motion. When the state changes while the page is open, announce it with a live region.`,
			pl: {
				description: `Mała kropka i słowo dla stanu procesu, usługi albo osoby. Wybierz ją dla list rzeczy, które działają.`,
				accessibility: `Etykieta jest zawsze na stronie. hideLabel zachowuje ją tylko dla czytników ekranu, więc użyj go tylko wtedy, gdy stan jest napisany w pobliżu. Kropka jest ukryta przed czytnikami ekranu i w trybie wymuszonych kolorów przybiera CanvasText. Pulsowanie zatrzymuje się przy ograniczonym ruchu. Gdy stan zmienia się przy otwartej stronie, ogłoś to przez region na żywo.`
			},
			render: () => (0, C.jsxs)(`div`, {
				className: `flex flex-col gap-2`,
				children: [
					(0, C.jsx)(N, {
						tone: `ok`,
						label: `Running`,
						pulse: !0
					}),
					(0, C.jsx)(N, {
						tone: `info`,
						label: `Starting`
					}),
					(0, C.jsx)(N, {
						tone: `warn`,
						label: `Waiting for input`
					}),
					(0, C.jsx)(N, {
						tone: `danger`,
						label: `Exited with code 1`
					}),
					(0, C.jsx)(N, { label: `Idle` }),
					(0, C.jsxs)(`span`, {
						className: `flex items-center gap-2 text-caption text-muted`,
						children: [`api-gateway `, (0, C.jsx)(N, {
							tone: `ok`,
							label: `Running`,
							hideLabel: !0
						})]
					})
				]
			})
		},
		{
			name: `Alert`,
			components: [`Alert`],
			description: `A message inside the content, next to what it is about. Pick it for a result that stays on screen, such as the error summary at the top of a form; pick a toast for news that may pass.`,
			usage: `<Alert tone="danger" toneLabel={t('tone.error')} title="Fix 2 fields" headingLevel={2}>
  <ul><li><a href="#email">Email address is missing</a></li></ul>
</Alert>`,
			accessibility: `A static alert is a group named by its tone word and title. live="polite" makes it a status and live="assertive" (or urgent) an alert, so a message added after an action is read out; render the alert first and fill it later. headingLevel puts an error summary in the page outline, and links inside it can move focus to each field. The close button is a 24px or larger target and the message never closes on its own.`,
			pl: {
				description: `Komunikat wewnątrz treści, obok tego, czego dotyczy. Wybierz go dla wyniku, który zostaje na ekranie, takiego jak podsumowanie błędów na górze formularza; dla wiadomości, które mogą minąć, wybierz toast.`,
				accessibility: `Statyczny alert jest grupą nazwaną przez słowo tonu i tytuł. live="polite" robi z niego status, a live="assertive" (albo urgent) alert, więc komunikat dodany po akcji jest odczytywany; najpierw wyrenderuj alert, potem go wypełnij. headingLevel umieszcza podsumowanie błędów w strukturze strony, a linki w nim mogą przenosić fokus do każdego pola. Przycisk zamknięcia ma cel co najmniej 24 px, a komunikat nigdy nie zamyka się sam.`
			},
			render: () => (0, C.jsxs)(`div`, {
				className: `flex max-w-xl flex-col gap-2`,
				children: [
					(0, C.jsx)(o, {
						toneLabel: `Information`,
						title: `Imports run at night`,
						children: `Files added after 22:00 are imported the next morning.`
					}),
					(0, C.jsx)(I, {}),
					(0, C.jsx)(o, {
						tone: `warn`,
						toneLabel: `Warning`,
						title: `Two people are editing this page`,
						actions: (0, C.jsx)(c, {
							size: `sm`,
							variant: `outline`,
							children: `See who`
						})
					}),
					(0, C.jsx)(o, {
						tone: `danger`,
						toneLabel: `Error`,
						title: `Fix 2 fields to send the form`,
						headingLevel: 4,
						children: (0, C.jsxs)(`ul`, { children: [(0, C.jsx)(`li`, { children: `Email address is missing` }), (0, C.jsx)(`li`, { children: `Project name is longer than 80 characters, which is the most a project name can hold` })] })
					})
				]
			})
		},
		{
			name: `Banner`,
			components: [`Banner`],
			description: `A full-width strip at the top of a page or panel for a state that lasts, such as read-only mode or a lost connection.`,
			usage: `<Banner tone="warn" toneLabel={t('tone.warning')} title="Read-only mode" sticky actions={<Button size="sm">Renew</Button>}>
  Changes are not saved until the plan is renewed.
</Banner>`,
			accessibility: `A region named by its tone word and title, so it is listed with the landmarks. Set live when the banner appears after the page loads, such as on losing the connection. Actions wrap under the text on narrow screens. The close button only hides it; the state it reports stays until it is fixed.`,
			pl: {
				description: `Pasek na pełną szerokość u góry strony albo panelu dla stanu, który trwa, takiego jak tryb tylko do odczytu albo utrata połączenia.`,
				accessibility: `Region nazwany przez słowo tonu i tytuł, więc jest wymieniany z landmarkami. Ustaw live, gdy baner pojawia się po załadowaniu strony, na przykład po utracie połączenia. Akcje zawijają się pod tekst na wąskich ekranach. Przycisk zamknięcia tylko go ukrywa; stan, o którym informuje, trwa, dopóki nie zostanie naprawiony.`
			},
			render: () => (0, C.jsx)(L, {})
		},
		{
			name: `AiDisclosure`,
			components: [`AiDisclosure`],
			description: `The note that says a text was generated by a model: the words "AI generated", the model, the provider and a link to what is sent. Show it next to every answer or text a model wrote, in the assistant and in any other AI feature. It says where the text came from and nothing about how right it is.`,
			usage: `<AiDisclosure
  label={t('ai.generated')}
  modelLabel={t('ai.model')}
  model="Example model 1"
  providerLabel={t('ai.provider')}
  provider="Example provider"
  sentLabel={t('ai.sent')}
  sentHref="/privacy#ai"
/>`,
			accessibility: `A plain paragraph, so a screen reader reads the label, the model and the provider in order and the link is reachable with Tab. The label is a word, never only a colour or an icon. Every word is a prop, so the note is read in the language of the page. It wraps on narrow screens and keeps its contrast in all three themes.`,
			pl: {
				description: `Notatka, która mówi, że tekst wygenerował model: słowa "Wygenerowane przez AI", model, dostawca i link do tego, co jest wysyłane. Pokaż ją przy każdej odpowiedzi lub tekście napisanym przez model, w asystencie i w każdej innej funkcji AI. Mówi, skąd pochodzi tekst, i nic o tym, czy jest trafny.`,
				accessibility: `Zwykły akapit, więc czytnik ekranu odczytuje etykietę, model i dostawcę po kolei, a do linku dochodzi się klawiszem Tab. Etykieta to słowo, nigdy sam kolor ani ikona. Każde słowo jest propem, więc notatka brzmi w języku strony. Zawija się na wąskich ekranach i zachowuje kontrast w trzech motywach.`
			},
			render: () => (0, C.jsx)(w, {
				label: `AI generated`,
				modelLabel: `Model`,
				model: `Example model 1`,
				providerLabel: `Provider`,
				provider: `Example provider`,
				sentLabel: `What is sent`,
				sentHref: `#sent`
			})
		},
		{
			name: `FlashMessages`,
			components: [`FlashMessages`],
			description: `Messages the server left for the next page, such as "Saved" after a redirect or the errors of a form. Pick it for server-rendered results; use useToast for results of actions on the client.`,
			usage: `<FlashMessages
  messages={[{ id: 'saved', tone: 'ok', title: 'Profile saved' }]}
  toneLabels={{ ok: 'Success', info: 'Information', warn: 'Warning', danger: 'Error' }}
  onDismiss={remove}
  dismissLabel="Close message"
  focusError
/>`,
			accessibility: `Messages already in the page when it loads are not read by live regions, so each one is also written into a polite region after mount, and errors into an assertive one. focusError moves focus to the first error instead, which suits a form that came back from the server. Each message is read once and never closes on its own.`,
			pl: {
				description: `Komunikaty, które serwer zostawił dla następnej strony, takie jak „Saved” po przekierowaniu albo błędy formularza. Wybierz je dla wyników renderowanych na serwerze; dla wyników akcji w przeglądarce użyj useToast.`,
				accessibility: `Komunikaty, które są już na stronie w chwili jej załadowania, nie są odczytywane przez regiony na żywo, więc każdy jest też wpisywany do regionu typu polite po zamontowaniu, a błędy do regionu typu assertive. focusError przenosi fokus na pierwszy błąd, co pasuje do formularza, który wrócił z serwera. Każdy komunikat jest odczytywany raz i nigdy nie zamyka się sam.`
			},
			render: () => (0, C.jsx)(z, {})
		},
		{
			name: `Spinner`,
			components: [`Spinner`],
			description: `A small ring for a wait of unknown length, such as loading a list. Pick ProgressBar when the share of work done is known.`,
			usage: `<Spinner label="Loading projects" showLabel />`,
			accessibility: `An indeterminate progress bar named by label. showLabel shows the same text without reading it twice. decorative hides it inside a control that already says it is busy. Under reduced motion it turns slowly instead of stopping, so it still says that work goes on.`,
			pl: {
				description: `Mały pierścień dla oczekiwania o nieznanej długości, takiego jak ładowanie listy. Wybierz ProgressBar, gdy znany jest udział wykonanej pracy.`,
				accessibility: `Pasek postępu o nieokreślonej wartości nazwany przez label. showLabel pokazuje ten sam tekst, nie czytając go dwa razy. decorative ukrywa go wewnątrz kontrolki, która już mówi, że jest zajęta. Przy ograniczonym ruchu obraca się powoli zamiast się zatrzymywać, więc nadal mówi, że praca trwa.`
			},
			render: () => (0, C.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-4`,
				children: [
					(0, C.jsx)(x, {
						label: `Loading`,
						size: `sm`
					}),
					(0, C.jsx)(x, { label: `Loading` }),
					(0, C.jsx)(x, {
						label: `Loading`,
						size: `lg`
					}),
					(0, C.jsx)(x, {
						label: `Loading projects`,
						showLabel: !0
					}),
					(0, C.jsxs)(c, {
						variant: `outline`,
						isDisabled: !0,
						children: [(0, C.jsx)(x, {
							label: `Saving`,
							decorative: !0,
							size: `sm`
						}), `Saving`]
					})
				]
			})
		},
		{
			name: `Skeleton`,
			components: [
				`Skeleton`,
				`SkeletonText`,
				`SkeletonRow`
			],
			description: `Placeholders that hold the space of content while it loads, so the page does not jump. Pick SkeletonRow for lists and tables, SkeletonText for paragraphs and Skeleton for any other shape.`,
			usage: `<div aria-busy={loading}>
  <Spinner label="Loading members" showLabel size="sm" />
  <SkeletonRow />
  <SkeletonRow />
</div>`,
			accessibility: `Skeletons are hidden from screen readers. Mark the loading container with aria-busy and pair it with a Spinner or a status message that says what is loading. The pulse stops under reduced motion, and a border keeps the shapes visible in forced colours.`,
			pl: {
				description: `Zastępniki, które trzymają miejsce treści podczas ładowania, aby strona nie skakała. Wybierz SkeletonRow dla list i tabel, SkeletonText dla akapitów, a Skeleton dla każdego innego kształtu.`,
				accessibility: `Szkielety są ukryte przed czytnikami ekranu. Oznacz kontener ładowania przez aria-busy i połącz go ze Spinner albo komunikatem statusu, który mówi, co się ładuje. Pulsowanie zatrzymuje się przy ograniczonym ruchu, a ramka utrzymuje widoczność kształtów w trybie wymuszonych kolorów.`
			},
			render: () => (0, C.jsxs)(`div`, {
				className: `grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]`,
				children: [(0, C.jsx)(H, {}), (0, C.jsxs)(`div`, {
					className: `flex flex-col gap-3 rounded-md border border-border bg-surface p-4`,
					children: [
						(0, C.jsxs)(`div`, {
							className: `flex items-center gap-3`,
							children: [(0, C.jsx)(O, { shape: `circle` }), (0, C.jsx)(O, {
								shape: `line`,
								className: `w-1/3`
							})]
						}),
						(0, C.jsx)(j, {
							lines: 3,
							heading: !0
						}),
						(0, C.jsx)(O, { className: `h-24` })
					]
				})]
			})
		},
		{
			name: `EmptyState`,
			components: [`EmptyState`],
			description: `What fills a view that has nothing to show: nothing yet, no results, or could not load. Always give the next step, such as creating the first item, clearing filters or trying again.`,
			usage: `<EmptyState
  icon={<Icon name="nav.inbox" />}
  title="No projects yet"
  description="Projects keep your files and tasks together."
  actions={<Button>New project</Button>}
/>`,
			accessibility: `The title is a real heading; set headingLevel to fit the page outline. The icon is hidden. The danger tone is for failures, and its title says what failed, so the colour is never the only sign. Text wraps and centres at any width.`,
			pl: {
				description: `To, co wypełnia widok, który nie ma nic do pokazania: jeszcze nic, brak wyników albo nie udało się załadować. Zawsze podaj następny krok, taki jak utworzenie pierwszej pozycji, wyczyszczenie filtrów albo ponowna próba.`,
				accessibility: `Tytuł jest prawdziwym nagłówkiem; ustaw headingLevel, aby pasował do struktury strony. Ikona jest ukryta. Ton niebezpieczeństwa jest dla niepowodzeń, a jego tytuł mówi, co się nie udało, więc kolor nigdy nie jest jedynym sygnałem. Tekst się zawija i centruje przy każdej szerokości.`
			},
			render: () => (0, C.jsxs)(`div`, {
				className: `grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]`,
				children: [
					(0, C.jsx)(h, {
						icon: (0, C.jsx)(a, { name: `folder.open` }),
						title: `No projects yet`,
						description: `Projects keep your files, tasks and notes together.`,
						actions: (0, C.jsx)(c, { children: `New project` }),
						bordered: !0
					}),
					(0, C.jsx)(h, {
						tone: `danger`,
						icon: (0, C.jsx)(a, { name: `sync.offline` }),
						title: `Could not load the projects`,
						description: `The server did not answer. Your work is safe.`,
						actions: (0, C.jsx)(c, {
							variant: `outline`,
							children: `Try again`
						}),
						bordered: !0
					}),
					(0, C.jsx)(h, {
						size: `sm`,
						icon: (0, C.jsx)(a, { name: `search.no-results` }),
						title: `No results for “quarterly report draft”`,
						description: `Check the spelling or clear the filters.`,
						actions: (0, C.jsx)(c, {
							size: `sm`,
							variant: `ghost`,
							children: `Clear filters`
						})
					}),
					(0, C.jsx)(h, {
						size: `sm`,
						icon: (0, C.jsx)(a, { name: `nav.inbox` }),
						title: `Inbox zero`,
						description: `Nothing needs you right now.`
					})
				]
			})
		},
		{
			name: `Meter`,
			components: [`Meter`],
			description: `A level within a known range, such as storage used or a score. Pick ProgressBar for work that moves towards done.`,
			usage: `<Meter label="Disk space" value={92} tone="danger" status="Almost full" valueLabel="92 of 100 GB" />`,
			accessibility: `A meter role named by its label, with the value and valueLabel read as text. A warning or danger tone takes a status word with its icon, linked to the meter as its description. The value text is also on screen, so the bar is never the only sign. The fill turns Highlight in forced colours.`,
			pl: {
				description: `Poziom w znanym zakresie, taki jak zajęte miejsce albo wynik. Dla pracy, która zmierza do końca, wybierz ProgressBar.`,
				accessibility: `Rola meter nazwana przez label, z wartością i valueLabel odczytywanymi jako tekst. Ton ostrzeżenia albo niebezpieczeństwa dostaje słowo statusu z ikoną, powiązane z miernikiem jako opis. Tekst wartości jest też na ekranie, więc pasek nigdy nie jest jedynym sygnałem. Wypełnienie przybiera kolor Highlight w trybie wymuszonych kolorów.`
			},
			render: () => (0, C.jsxs)(`div`, {
				className: `flex max-w-md flex-col gap-4`,
				children: [
					(0, C.jsx)(T, {
						label: `Memory`,
						value: 38,
						valueLabel: `3.0 of 8 GB`
					}),
					(0, C.jsx)(T, {
						label: `Monthly build minutes`,
						value: 74,
						tone: `warn`,
						status: `Running low`
					}),
					(0, C.jsx)(T, {
						label: `Disk space on the shared project volume`,
						value: 96,
						tone: `danger`,
						status: `Almost full`,
						valueLabel: `96 of 100 GB`
					}),
					(0, C.jsx)(T, {
						label: `Profile complete`,
						value: 100,
						tone: `ok`,
						status: `Complete`,
						size: `sm`
					})
				]
			})
		},
		{
			name: `ProgressBar`,
			components: [`ProgressBar`],
			description: `Progress of a task towards done, such as an upload or an import. Leave out value while the length is unknown.`,
			usage: `<ProgressBar label="Uploading report.pdf" value={45} description="2 MB of 4.4 MB" />`,
			accessibility: `A progressbar role named by its label; description is linked as its description. Without a value it is indeterminate and has no aria-valuenow. A finished or failed state takes a status word with its icon. The indeterminate pulse stops under reduced motion. Announce the end of a long task with a toast.`,
			pl: {
				description: `Postęp zadania ku końcowi, taki jak wysyłanie albo import. Pomiń value, gdy długość jest nieznana.`,
				accessibility: `Rola progressbar nazwana przez label; description jest powiązany jako jego opis. Bez value jest nieokreślony i nie ma aria-valuenow. Stan zakończony albo nieudany dostaje słowo statusu z ikoną. Pulsowanie nieokreślonego postępu zatrzymuje się przy ograniczonym ruchu. Zakończenie długiego zadania ogłoś przez toast.`
			},
			render: () => (0, C.jsxs)(`div`, {
				className: `flex max-w-md flex-col gap-4`,
				children: [
					(0, C.jsx)(y, {
						label: `Uploading report.pdf`,
						value: 45,
						description: `2 MB of 4.4 MB`
					}),
					(0, C.jsx)(y, {
						label: `Preparing the export`,
						isIndeterminate: !0
					}),
					(0, C.jsx)(y, {
						label: `Import`,
						value: 100,
						tone: `ok`,
						status: `Done`
					}),
					(0, C.jsx)(y, {
						label: `Backup`,
						value: 62,
						tone: `danger`,
						status: `Failed`,
						description: `The disk was full at 62%.`
					})
				]
			})
		},
		{
			name: `Toasts`,
			components: [
				`ToastProvider`,
				`ToastViewport`,
				`useToast`
			],
			description: `Short messages about the result of an action, shown at the edge of the screen. Pick a toast for news that may pass, such as "Saved". Results that must stay belong in an Alert. useToast() shows one from anywhere under the provider, and container renders the stack inside a themed panel.`,
			usage: `<ToastProvider>
  <App />
  <ToastViewport toneLabels={toneLabels} closeLabel="Close" regionLabel="Notifications" />
</ToastProvider>

const toast = useToast()
toast.success('Changes saved')
toast.error('Could not publish', { description: 'Try again in a minute.' })`,
			accessibility: `The stack is a landmark named by regionLabel; F6 moves focus into it, and Tab moves through the toasts. Each new toast is read once: success and information through a polite live region, errors through an assertive one. Success and information close after 6 seconds or more, never less than 5; warnings, errors and toasts with an action stay until closed. Timers pause while the pointer or focus is on the stack. Escape or the close button closes a toast, and focus returns where it was. On narrow screens the stack spans the width.`,
			pl: {
				description: `Krótkie komunikaty o wyniku akcji, pokazywane na brzegu ekranu. Wybierz toast dla wiadomości, które mogą minąć, takich jak „Saved”. Wyniki, które muszą zostać, należą do Alert. useToast() pokazuje toast z dowolnego miejsca pod providerem, a container renderuje stos wewnątrz panelu z motywem.`,
				accessibility: `Stos jest landmarkiem nazwanym przez regionLabel; F6 przenosi do niego fokus, a Tab przechodzi po toastach. Każdy nowy toast jest odczytywany raz: sukces i informacja przez region na żywo typu polite, błędy przez region typu assertive. Sukces i informacja zamykają się po 6 sekundach albo później, nigdy krócej niż po 5; ostrzeżenia, błędy i toasty z akcją zostają do zamknięcia. Liczniki czasu są wstrzymane, gdy wskaźnik lub fokus jest na stosie. Escape albo przycisk zamknięcia zamyka toast, a fokus wraca tam, gdzie był. Na wąskich ekranach stos zajmuje całą szerokość.`
			},
			render: () => (0, C.jsx)(V, {})
		}
	]
};
export { P as t };
