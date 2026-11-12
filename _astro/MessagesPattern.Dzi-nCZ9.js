import { t as e } from "./circle-exclamation-point.DRCkYbzg.js";
import { t } from "./circle-check.CWwdJPsz.js";
import { t as n } from "./info.D9DvH9cK.js";
import { t as r } from "./triangle-exclamation-point.BJJ-nXau.js";
import { t as i } from "./Button.DRxd_7vr.js";
import { S as a, d as o, f as s, i as c, n as l, p as u, r as d, s as f, t as p, u as m } from "./doc.D2PtmWN6.js";
import { a as h, n as g, t as _ } from "./ToastViewport.BmewrVf4.js";
import { FieldErrorsDemo as v, FlashDemo as y, LiveAlertDemo as b, ToastButtons as x, toneLabels as S } from "./MessagesPattern.CxyOhxBL.js";
import { t as C } from "./jsx-runtime.yrTYNGQT.js";
var w = C(), T = [
	[
		`Błąd przy polu`,
		`Pod polem, którego dotyczy`,
		`Dopóki wartość nie zostanie poprawiona`,
		`Razem z polem, przez aria-describedby`,
		`Jedno pole, które wymaga zmiany`
	],
	[
		`FormErrorSummary`,
		`Na górze formularza`,
		`Do następnego wysłania`,
		`Typu assertive i przejmuje fokus`,
		`Wysłanie, które nie powiodło się na jednym lub kilku polach`
	],
	[
		`Alert`,
		`W treści, obok tego, czego dotyczy`,
		`Do zamknięcia albo dopóki trwa stan`,
		`Statyczny albo typu polite lub assertive z live`,
		`Wynik lub stan jednej części strony`
	],
	[
		`Banner`,
		`Na pełną szerokość u góry strony albo panelu`,
		`Dopóki trwa stan`,
		`Nazwany region; live, gdy pojawia się później`,
		`Stan całej aplikacji, taki jak tryb offline albo tylko do odczytu`
	],
	[
		`Toast`,
		`Na brzegu ekranu`,
		`Sukces i informacja co najmniej 5 s; ostrzeżenia i błędy do zamknięcia`,
		`Typu polite, a dla błędów assertive`,
		`Wynik właśnie wykonanej akcji, gdy nie widać go gdzie indziej`
	],
	[
		`FlashMessages`,
		`Na górze następnej strony`,
		`Do zamknięcia`,
		`Wpisywany do regionu na żywo po załadowaniu strony`,
		`Wynik z serwera po przekierowaniu, taki jak „Zapisano”`
	],
	[
		`Status w FormActions`,
		`Obok przycisków wysyłania`,
		`Do następnego wysłania`,
		`Typu polite, a dla błędów assertive`,
		`Wynik zapisu krótkiego formularza`
	]
], E = [
	{
		tone: `ok`,
		name: `Sukces`,
		icon: (0, w.jsx)(t, {}),
		means: `Udało się, a wynik jest taki, o jaki prosił czytelnik.`,
		read: `Polite`,
		stays: `Toast może zniknąć po 5 s lub później`,
		example: `Invitation sent to ada@example.com`
	},
	{
		tone: `info`,
		name: `Informacja`,
		icon: (0, w.jsx)(n, {}),
		means: `Neutralny fakt, który pomaga, bez niczego do naprawienia.`,
		read: `Polite`,
		stays: `Toast może zniknąć po 5 s lub później`,
		example: `Imports run at night`
	},
	{
		tone: `warn`,
		name: `Ostrzeżenie`,
		icon: (0, w.jsx)(r, {}),
		means: `Coś może pójść nie tak albo wkrótce wymaga decyzji. Nic jeszcze nie jest zablokowane.`,
		read: `Polite`,
		stays: `Do zamknięcia`,
		example: `Your draft is kept for 7 more days`
	},
	{
		tone: `danger`,
		name: `Błąd`,
		icon: (0, w.jsx)(e, {}),
		means: `Nie udało się albo coś jest zablokowane. Powiedz, co się stało i jak to naprawić.`,
		read: `Assertive`,
		stays: `Do zamknięcia albo naprawienia`,
		example: `Could not publish. The server did not answer.`
	}
];
function D() {
	return (0, w.jsxs)(d, {
		lang: `pl`,
		children: [
			(0, w.jsx)(f, {
				eyebrow: `Wzorce`,
				title: `Komunikaty: sukces, informacja, ostrzeżenie i błąd`,
				lead: `Każdy komunikat w Skribly ma jeden z czterech tonów i żyje w jednym z kilku miejsc. Wybierz miejsce według tego, jak długo komunikat ma znaczenie i jak blisko jest tego, czego dotyczy, a potem napisz go tak, aby mówił, co się stało i co zrobić dalej.`
			}),
			(0, w.jsxs)(m, {
				id: `tones`,
				title: `Cztery tony`,
				children: [(0, w.jsx)(`ul`, {
					className: `grid gap-4 md:grid-cols-2`,
					children: E.map((e) => (0, w.jsxs)(`li`, {
						className: `flex min-w-0 flex-col gap-3 rounded-xl border border-border bg-surface p-5`,
						children: [
							(0, w.jsxs)(`p`, {
								className: `flex items-center gap-2 text-title font-semibold text-fg`,
								children: [(0, w.jsx)(`span`, {
									"aria-hidden": !0,
									className: `inline-flex [&>svg]:size-5`,
									children: e.icon
								}), e.name]
							}),
							(0, w.jsx)(`p`, {
								className: `text-body text-muted`,
								children: e.means
							}),
							(0, w.jsx)(a, {
								tone: e.tone,
								toneLabel: e.name,
								title: e.example
							}),
							(0, w.jsxs)(`dl`, {
								className: `grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-caption`,
								children: [
									(0, w.jsx)(`dt`, {
										className: `text-muted`,
										children: `Odczytywany`
									}),
									(0, w.jsx)(`dd`, {
										className: `text-fg`,
										children: e.read
									}),
									(0, w.jsx)(`dt`, {
										className: `text-muted`,
										children: `Zostaje`
									}),
									(0, w.jsx)(`dd`, {
										className: `text-fg`,
										children: e.stays
									})
								]
							})
						]
					}, e.tone))
				}), (0, w.jsx)(u, { children: (0, w.jsxs)(`p`, { children: [
					`Każdy ton ma kolor, ikonę o własnym kształcie i słowo. Słowo, takie jak „Błąd”, jest propem `,
					(0, w.jsx)(`code`, { children: `toneLabel` }),
					`, odczytywanym przed komunikatem, aby znaczenie nigdy nie opierało się na kolorze. Przekazuj go za każdym razem.`
				] }) })]
			}),
			(0, w.jsxs)(m, {
				id: `choose`,
				title: `Wybierz odpowiedni komponent`,
				children: [(0, w.jsxs)(s, {
					label: `Którego komponentu komunikatu użyć`,
					children: [
						(0, w.jsx)(`caption`, {
							className: `sr-only`,
							children: `Komponenty komunikatów: gdzie się pokazują, jak długo zostają, jak są odczytywane i do czego służą`
						}),
						(0, w.jsx)(`thead`, { children: (0, w.jsxs)(`tr`, { children: [
							(0, w.jsx)(`th`, {
								scope: `col`,
								children: `Komponent`
							}),
							(0, w.jsx)(`th`, {
								scope: `col`,
								children: `Gdzie`
							}),
							(0, w.jsx)(`th`, {
								scope: `col`,
								children: `Jak długo`
							}),
							(0, w.jsx)(`th`, {
								scope: `col`,
								children: `Jak jest odczytywany`
							}),
							(0, w.jsx)(`th`, {
								scope: `col`,
								children: `Użyj go do`
							})
						] }) }),
						(0, w.jsx)(`tbody`, { children: T.map(([e, t, n, r, i]) => (0, w.jsxs)(`tr`, { children: [
							(0, w.jsx)(`th`, {
								scope: `row`,
								className: `font-semibold whitespace-nowrap`,
								children: e
							}),
							(0, w.jsx)(`td`, { children: t }),
							(0, w.jsx)(`td`, { children: n }),
							(0, w.jsx)(`td`, { children: r }),
							(0, w.jsx)(`td`, { children: i })
						] }, e)) })
					]
				}), (0, w.jsx)(u, { children: (0, w.jsx)(`p`, { children: `Prosta zasada: im bliżej przyczyny jest komunikat, tym lepiej. Błąd przy polu wygrywa z podsumowaniem, podsumowanie z banerem, a toast jest dla wyników, których czytelnik inaczej by nie zobaczył.` }) })]
			}),
			(0, w.jsxs)(m, {
				id: `examples`,
				title: `Przykłady na żywo`,
				children: [
					(0, w.jsxs)(o, {
						title: `Alert z wynikiem na żywo`,
						children: [(0, w.jsx)(u, { children: (0, w.jsx)(`p`, { children: `Region na żywo jest na stronie, zanim pojawi się wynik, więc wynik jest odczytywany, gdy się pojawi.` }) }), (0, w.jsx)(c, {
							label: `Alert`,
							code: `<div aria-live="polite">
  {result && <Alert tone="ok" toneLabel={t('tone.ok')} title={t('tracker.connected')} />}
</div>`,
							children: (0, w.jsx)(b, {})
						})]
					}),
					(0, w.jsx)(o, {
						title: `Banner dla stanu całej aplikacji`,
						children: (0, w.jsx)(c, {
							label: `Banner`,
							code: `<Banner tone="danger" toneLabel={t('tone.error')} title={t('offline.title')} live="assertive">
  {t('offline.text')}
</Banner>`,
							children: (0, w.jsxs)(`div`, {
								className: `overflow-hidden rounded-lg border border-border`,
								children: [
									(0, w.jsx)(h, {
										tone: `danger`,
										toneLabel: `Error`,
										title: `You are offline`,
										children: `Changes are kept on this device and sent when the connection returns.`
									}),
									(0, w.jsx)(h, {
										tone: `warn`,
										toneLabel: `Warning`,
										title: `Read-only mode`,
										actions: (0, w.jsx)(i, {
											size: `sm`,
											variant: `outline`,
											children: `Renew plan`
										}),
										children: `The plan has ended, so changes are not saved until it is renewed.`
									}),
									(0, w.jsx)(`p`, {
										className: `bg-surface p-4 text-caption text-muted`,
										children: `Page content`
									})
								]
							})
						})
					}),
					(0, w.jsx)(o, {
						title: `Toasty dla wyniku akcji`,
						children: (0, w.jsx)(c, {
							label: `Toast`,
							code: `const toast = useToast()
toast.success(t('saved'))
toast.error(t('publish.failed'), { description: t('publish.retry') })`,
							children: (0, w.jsxs)(g, { children: [(0, w.jsx)(x, {}), (0, w.jsx)(_, {
								toneLabels: S,
								closeLabel: `Close notification`,
								regionLabel: `Notifications`
							})] })
						})
					}),
					(0, w.jsx)(o, {
						title: `Komunikaty flash po przekierowaniu`,
						children: (0, w.jsx)(c, {
							label: `FlashMessages`,
							code: `<FlashMessages messages={messagesFromServer} toneLabels={toneLabels} onDismiss={remove} dismissLabel={t('close')} />`,
							children: (0, w.jsx)(y, {})
						})
					}),
					(0, w.jsxs)(o, {
						title: `Błędy przy polach i podsumowanie błędów`,
						children: [(0, w.jsx)(u, { children: (0, w.jsx)(`p`, { children: `Wyślij pusty formularz. Podsumowanie przejmuje fokus i linkuje do każdego pola; każde pole pokazuje własny błąd. Popraw je i wyślij ponownie, aby zobaczyć komunikat o sukcesie.` }) }), (0, w.jsx)(c, {
							label: `Komunikaty formularza`,
							code: `<FormErrorSummary title={t('form.problems', { count })} errors={errors} />
<TextField id="name" label={t('name')} isInvalid={!!nameError} errorMessage={nameError} />`,
							children: (0, w.jsx)(v, {})
						})]
					})
				]
			}),
			(0, w.jsxs)(m, {
				id: `writing`,
				title: `Wskazówki do pisania`,
				children: [
					(0, w.jsx)(u, { children: (0, w.jsxs)(`ul`, { children: [
						(0, w.jsxs)(`li`, { children: [(0, w.jsx)(`strong`, { children: `Powiedz, co się stało, a potem, co zrobić.` }), ` „Nie udało się zapisać. Sprawdź połączenie i spróbuj ponownie.”`] }),
						(0, w.jsxs)(`li`, { children: [(0, w.jsx)(`strong`, { children: `Bądź konkretny.` }), ` Nazwij rzecz i wartość: „Podaj datę po 1 marca”, a nie „Niepoprawna data”.`] }),
						(0, w.jsxs)(`li`, { children: [(0, w.jsx)(`strong`, { children: `Używaj prostych słów i nikogo nie obwiniaj.` }), ` „Ten adres e-mail jest już używany”, a nie „Wpisałeś niepoprawny e-mail”. Żadnych kodów, chyba że potrzebuje ich pomoc techniczna, i wtedy po słowach.`] }),
						(0, w.jsxs)(`li`, { children: [(0, w.jsx)(`strong`, { children: `Tytuł niech będzie krótki.` }), ` Do około ośmiu słów. Szczegóły daj w opisie.`] }),
						(0, w.jsxs)(`li`, { children: [(0, w.jsx)(`strong`, { children: `Powtórz czasownik z przycisku.` }), ` Po „Opublikuj” napisz „Opublikowano”, aby czytelnik połączył jedno z drugim.`] }),
						(0, w.jsxs)(`li`, { children: [(0, w.jsx)(`strong`, { children: `Zachowaj spokój.` }), ` Bez „Ups”, bez wykrzykników, bez żartów w błędach i co najwyżej jedno przeprosiny, gdy winę ponosi Skribly.`] }),
						(0, w.jsxs)(`li`, { children: [(0, w.jsx)(`strong`, { children: `Ostrzeżenia mówią o konsekwencji i drodze wyjścia.` }), ` „Twój plan kończy się za 3 dni. Odnów go, aby dalej edytować.”`] })
					] }) }),
					(0, w.jsx)(l, {
						good: (0, w.jsx)(a, {
							tone: `danger`,
							toneLabel: `Błąd`,
							title: `Nie udało się opublikować strony`,
							children: `Serwer nie odpowiedział. Twoje zmiany są zapisane; spróbuj ponownie za minutę.`
						}),
						goodText: `Powiedz, co się nie udało, że praca jest bezpieczna i co zrobić.`,
						bad: (0, w.jsx)(a, {
							tone: `danger`,
							toneLabel: `Błąd`,
							title: `Ups! Coś poszło nie tak`,
							children: `Błąd 503.`
						}),
						badText: `Ukryj przyczynę za kodem albo zostaw czytelnika bez następnego kroku.`
					}),
					(0, w.jsx)(l, {
						good: (0, w.jsx)(a, {
							tone: `ok`,
							toneLabel: `Sukces`,
							title: `Zaproszenie wysłane do ada@example.com`
						}),
						goodText: `Potwierdź dokładnie to, co się stało.`,
						bad: (0, w.jsx)(a, {
							tone: `ok`,
							toneLabel: `Sukces`,
							title: `Sukces!`
						}),
						badText: `Powtórz słowo tonu jako komunikat.`
					})
				]
			}),
			(0, w.jsxs)(m, {
				id: `timing-and-focus`,
				title: `Czas i fokus`,
				children: [(0, w.jsx)(u, { children: (0, w.jsxs)(`ul`, { children: [
					(0, w.jsx)(`li`, { children: `Błędy i ostrzeżenia nigdy nie zamykają się same. Toasty sukcesu i informacji zostają co najmniej 5 sekund i wstrzymują się, gdy wskaźnik lub fokus jest na nich.` }),
					(0, w.jsx)(`li`, { children: `Przenoś fokus tylko dla błędu blokującego po wysłaniu, tak jak robi to FormErrorSummary. Wszystko inne jest ogłaszane i zostawia fokus tam, gdzie jest.` }),
					(0, w.jsx)(`li`, { children: `Ogłaszaj każdy komunikat raz. Najpierw wyrenderuj region na żywo pusty, potem go wypełnij; region, który pojawia się razem z tekstem, często nie jest odczytywany.` }),
					(0, w.jsx)(`li`, { children: `Umieść akcję toastu także gdzie indziej. Toast może zniknąć, zanim użytkownik klawiatury do niego dotrze, więc Undo potrzebuje drugiej ścieżki, takiej jak menu pozycji.` })
				] }) }), (0, w.jsx)(p, {
					language: `tsx`,
					title: `Ogłaszanie własnego komunikatu`,
					code: `import { announce } from '@skribly/ui/theme'

announce(t('results', { count }))          // polite
announce(t('upload.failed'), 'assertive')  // errors only`
				})]
			})
		]
	});
}
export { D as MessagesPatternPl };
