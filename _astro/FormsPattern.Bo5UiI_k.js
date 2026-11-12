import { t as e } from "./TextField.BRNO9ptc.js";
import { f as t, i as n, n as r, p as i, r as a, s as o, t as s, u as c } from "./doc.D2PtmWN6.js";
import { InviteForm as l } from "./FormsPattern.CQiWkq1b.js";
import { t as u } from "./jsx-runtime.yrTYNGQT.js";
var d = u(), f = [
	[`Przed pisaniem`, `Podaj zasady w opisie, na przykład „Do 40 znaków”, aby nikt nie uczył się ich z błędu.`],
	[`Podczas pisania`, `Zachowaj ciszę. Błąd przy polu, które czytelnik jeszcze wypełnia, jest szumem.`],
	[`Po opuszczeniu zmienionego pola`, `Sprawdź to pole i pokaż jego błąd przy nim. Pól nietkniętych nie ruszaj.`],
	[`Przy wysłaniu`, `Sprawdź wszystko. Pokaż każdy błąd pod jego polem i FormErrorSummary na górze, które przejmuje fokus i linkuje do każdego pola.`],
	[`Podczas poprawiania`, `Aktualizuj każdy błąd przy polu w trakcie pisania. Podsumowanie zostaje takie, jakie było, do następnego wysłania, więc fokus nigdy nie skacze.`],
	[`Po sukcesie`, `Powiedz, co się stało, obok przycisku przez FormActions, w toaście albo jako komunikat flash na następnej stronie.`]
], p = [
	[
		`Imię i nazwisko`,
		`text`,
		`name`
	],
	[
		`E-mail`,
		`email`,
		`email`
	],
	[
		`Telefon`,
		`tel`,
		`tel`
	],
	[
		`Obecne hasło`,
		`password`,
		`current-password`
	],
	[
		`Nowe hasło`,
		`password`,
		`new-password`
	],
	[
		`Kod jednorazowy`,
		`text, inputMode="numeric"`,
		`one-time-code`
	],
	[
		`Organizacja`,
		`text`,
		`organization`
	],
	[
		`Kod pocztowy`,
		`text`,
		`postal-code`
	]
];
function m() {
	return (0, d.jsxs)(a, {
		lang: `pl`,
		children: [
			(0, d.jsx)(o, {
				eyebrow: `Wzorce`,
				title: `Formularze i walidacja`,
				lead: `Dobry formularz prosi o niewiele, mówi o swoich zasadach z góry, milczy, gdy czytelnik pisze, a gdy coś jest nie tak, mówi dokładnie gdzie i jak to poprawić.`
			}),
			(0, d.jsxs)(c, {
				id: `flow`,
				title: `Przebieg walidacji`,
				children: [
					(0, d.jsx)(`ol`, {
						className: `relative space-y-4 border-s-2 border-border ps-6`,
						children: f.map(([e, t], n) => (0, d.jsxs)(`li`, {
							className: `relative`,
							children: [
								(0, d.jsx)(`span`, {
									"aria-hidden": !0,
									className: `absolute -start-[2.3rem] top-0 grid size-7 place-items-center rounded-full border-2 border-border bg-bg text-caption font-semibold text-accent-text`,
									children: n + 1
								}),
								(0, d.jsx)(`p`, {
									className: `font-semibold text-fg`,
									children: e
								}),
								(0, d.jsx)(`p`, {
									className: `mt-0.5 max-w-[65ch] text-body text-muted`,
									children: t
								})
							]
						}, e))
					}),
					(0, d.jsx)(n, {
						label: `Wypróbuj: wyślij pusty formularz, a potem popraw pola`,
						children: (0, d.jsx)(l, {})
					}),
					(0, d.jsx)(s, {
						language: `tsx`,
						title: `Części`,
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
			(0, d.jsxs)(c, {
				id: `labels`,
				title: `Etykiety, podpowiedzi i oznaczenia`,
				children: [(0, d.jsx)(i, { children: (0, d.jsxs)(`ul`, { children: [
					(0, d.jsx)(`li`, { children: `Każde pole ma widoczną etykietę nad sobą. Tekst zastępczy jest przykładem, nigdy etykietą: znika podczas pisania.` }),
					(0, d.jsxs)(`li`, { children: [
						`Oznacz mniejszą grupę. Gdy większość pól jest wymagana, oznaczaj opcjonalne przez `,
						(0, d.jsx)(`code`, { children: `optionalLabel` }),
						`; w przeciwnym razie oznaczaj wymagane. `,
						(0, d.jsx)(`code`, { children: `requiredLabel` }),
						` zastępuje gwiazdkę słowem.`
					] }),
					(0, d.jsxs)(`li`, { children: [
						`Zasady umieszczaj w `,
						(0, d.jsx)(`code`, { children: `description` }),
						`. Jest powiązany z polem, więc czytnik ekranu odczytuje go po etykiecie.`
					] }),
					(0, d.jsxs)(`li`, { children: [
						`Użyj `,
						(0, d.jsx)(`code`, { children: `status` }),
						` dla dobrych wiadomości i podpowiedzi, które pojawiają się podczas pisania, takich jak „Nazwa jest wolna”, w tonie ok, info lub warn.`
					] })
				] }) }), (0, d.jsx)(r, {
					good: (0, d.jsx)(e, {
						label: `Project name`,
						description: `Up to 80 characters. You can change it later.`
					}),
					goodText: `Podaj zasadę, zanim można ją złamać.`,
					bad: (0, d.jsx)(`input`, {
						className: `sk-input w-full`,
						"aria-label": `Project name`,
						placeholder: `Project name (max 80)`
					}),
					badText: `Ukryj etykietę i zasadę w tekście zastępczym, który znika po pierwszym klawiszu.`
				})]
			}),
			(0, d.jsxs)(c, {
				id: `input-purpose`,
				title: `Typy i autocomplete`,
				children: [(0, d.jsx)(i, { children: (0, d.jsx)(`p`, { children: `Właściwy typ daje właściwą klawiaturę na telefonach, a autocomplete pozwala przeglądarkom i menedżerom haseł wypełnić pole, czego WCAG wymaga dla danych osobowych.` }) }), (0, d.jsxs)(t, {
					label: `Typy pól i wartości autocomplete`,
					children: [
						(0, d.jsx)(`caption`, {
							className: `sr-only`,
							children: `Typowe pola z ich typem i wartością autocomplete`
						}),
						(0, d.jsx)(`thead`, { children: (0, d.jsxs)(`tr`, { children: [
							(0, d.jsx)(`th`, {
								scope: `col`,
								children: `Pole`
							}),
							(0, d.jsx)(`th`, {
								scope: `col`,
								children: `type`
							}),
							(0, d.jsx)(`th`, {
								scope: `col`,
								children: `autoComplete`
							})
						] }) }),
						(0, d.jsx)(`tbody`, { children: p.map(([e, t, n]) => (0, d.jsxs)(`tr`, { children: [
							(0, d.jsx)(`th`, {
								scope: `row`,
								className: `font-medium`,
								children: e
							}),
							(0, d.jsx)(`td`, { children: (0, d.jsx)(`code`, { children: t }) }),
							(0, d.jsx)(`td`, { children: (0, d.jsx)(`code`, { children: n }) })
						] }, e)) })
					]
				})]
			}),
			(0, d.jsx)(c, {
				id: `layout`,
				title: `Układ od 320 px`,
				children: (0, d.jsx)(i, { children: (0, d.jsxs)(`ul`, { children: [
					(0, d.jsx)(`li`, { children: `Jedna kolumna, co najwyżej około 32 rem szerokości. Oko porusza się w dół, a nie zygzakiem.` }),
					(0, d.jsxs)(`li`, { children: [
						`Dwa pola dzielą rząd tylko wtedy, gdy należą do siebie i są krótkie, na przykład kod pocztowy i miasto, i tylko od breakpointu `,
						(0, d.jsx)(`code`, { children: `sm` }),
						` w górę.`
					] }),
					(0, d.jsxs)(`li`, { children: [
						`Grupuj powiązane pola w `,
						(0, d.jsx)(`code`, { children: `fieldset` }),
						` z `,
						(0, d.jsx)(`code`, { children: `legend` }),
						` albo użyj CheckboxGroup i RadioGroup, które robią to za ciebie.`
					] }),
					(0, d.jsx)(`li`, { children: `FormActions stawia główny przycisk na końcu na szerokich ekranach, a na wąskich układa przyciski w stos na pełną szerokość, z głównym na górze.` }),
					(0, d.jsxs)(`li`, { children: [
						`Długi formularz trzyma swoje przyciski w widoku przez `,
						(0, d.jsx)(`code`, { children: `sticky` }),
						`.`
					] })
				] }) })
			}),
			(0, d.jsx)(c, {
				id: `density`,
				title: `Gęstość w formularzach`,
				children: (0, d.jsx)(i, { children: (0, d.jsx)(`p`, { children: `Formularze w sieci zachowują standardową gęstość: kontrolki 36 px i miejsce między polami. Zwarta gęstość jest dla narzędzi desktopowych, gdzie wiele ustawień mieści się na jednym ekranie. Obie utrzymują cele powyżej 24 px, a tekst pól zostaje na 16 px na telefonach, aby iOS nie powiększał widoku.` }) })
			})
		]
	});
}
export { m as FormsPatternPl };
