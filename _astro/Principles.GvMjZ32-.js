import { A as e, F as t, i as n, n as r, p as i, r as a, s as o, t as s, u as c } from "./doc.DoLlUurT.js";
import { t as l } from "./Button.D4_9kLv-.js";
import { t as u } from "./Badge.CXZBI9XV.js";
var d = t();
function f() {
	return (0, d.jsxs)(a, {
		lang: `pl`,
		children: [
			(0, d.jsx)(o, {
				eyebrow: `Zasady`,
				title: `Sześć zasad, których trzyma się każdy komponent`,
				lead: `Dzięki tym zasadom ekran zbudowany ze Skribly UI wygląda spokojnie, czyta się tak samo w każdym motywie i działa z klawiatury. Każda z nich jest sprawdzana w przeglądzie, a kilka także w testach.`
			}),
			(0, d.jsxs)(c, {
				id: `one-accent`,
				title: `1. Jeden akcent`,
				children: [(0, d.jsx)(i, { children: (0, d.jsx)(`p`, { children: `Bursztyn jest jedynym akcentem. Oznacza główną akcję widoku, bieżący element i obwódkę fokusa, i nic więcej. Kolory statusu służą do statusu: zielony mówi „zrobione”, czerwony „nie udało się”. Gdy wszystko jest kolorowe, nic się nie wyróżnia.` }) }), (0, d.jsx)(r, {
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
					goodText: `Daj widokowi jeden główny przycisk i pozwól pozostałym ustąpić.`,
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
					badText: `Każdy przycisk jako główny albo kolor niebezpieczeństwa dla akcji, która niczego nie niszczy.`
				})]
			}),
			(0, d.jsxs)(c, {
				id: `colour-never-alone`,
				title: `2. Kolor nigdy sam`,
				children: [(0, d.jsx)(i, { children: (0, d.jsx)(`p`, { children: `Około jeden mężczyzna na dwunastu nie odróżnia czerwonego od zielonego, a tryb wysokiego kontrastu systemu Windows zastępuje każdy kolor. Dlatego każdy stan łączy kolor ze słowem, znakiem albo kształtem. Plakietki niosą słowo, alerty niosą słowo tonu dla czytników ekranu i ikonę o własnym kształcie, a bieżąca strona ma pasek, a nie tylko podbarwienie.` }) }), (0, d.jsx)(r, {
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
					goodText: `Powiedz stan słowami i dodaj znak, gdy pozwala na to miejsce.`,
					bad: (0, d.jsxs)(`div`, {
						className: `flex flex-wrap items-center gap-4`,
						children: [
							(0, d.jsx)(`span`, {
								className: `sr-only`,
								children: `Trzy kolorowe kropki bez słów`
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
					badText: `Zostaw kropce koloru samo niesienie znaczenia.`
				})]
			}),
			(0, d.jsx)(c, {
				id: `accessible-by-default`,
				title: `3. Dostępność domyślnie`,
				children: (0, d.jsxs)(i, { children: [(0, d.jsx)(`p`, { children: `Dostępny sposób jest jedynym, jaki daje komponent. Zachowanie pochodzi z React Aria, więc obsługa klawiatury, zarządzanie fokusem i semantyka dla czytników ekranu podążają za wzorcami ARIA. Obwódka fokusa jest zwykłym CSS w domyślnych stylach strony, więc kontrolka, która zapomni o własnej, nadal ją pokazuje. Cele mają co najmniej 24 na 24 piksele, komunikaty, które przychodzą później, są odczytywane, a ruch się zatrzymuje, gdy czytelnik prosi o mniej.` }), (0, d.jsxs)(`p`, { children: [
					`Celem jest WCAG 2.2 AA. Strona `,
					(0, d.jsx)(`a`, {
						href: `/pl/accessibility/`,
						children: `Dostępność`
					}),
					` wymienia, co biblioteka robi dla każdego kryterium i za co nadal odpowiada aplikacja.`
				] })] })
			}),
			(0, d.jsxs)(c, {
				id: `no-built-in-text`,
				title: `4. Brak wbudowanego tekstu`,
				children: [(0, d.jsx)(i, { children: (0, d.jsx)(`p`, { children: `Aplikacje mają własne pliki językowe, więc żaden komponent nie zawiera własnego słowa. Każda widoczna etykieta i każda nazwa dostępna, aż po przycisk zamknięcia toastu, jest propem. Brakująca etykieta to błąd typów, a nie po cichu angielska wartość domyślna.` }) }), (0, d.jsx)(s, {
					language: `tsx`,
					title: `Etykiety pochodzą z aplikacji`,
					code: `<ToastViewport
  toneLabels={{ ok: t('tone.ok'), info: t('tone.info'), warn: t('tone.warn'), danger: t('tone.danger') }}
  closeLabel={t('toast.close')}
  regionLabel={t('toast.region')}
/>`
				})]
			}),
			(0, d.jsxs)(c, {
				id: `with-and-without-react`,
				title: `5. Działa z Reactem i bez niego`,
				children: [(0, d.jsx)(i, { children: (0, d.jsx)(`p`, { children: `Strona marketingowa w Astro i aplikacja w Reakcie powinny wyglądać jak jeden produkt. Klasy czystego CSS odpowiadają komponentom React, więc strona bez JavaScriptu dostaje ten sam przycisk, pole, kartę i komunikat.` }) }), (0, d.jsxs)(`div`, {
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
						label: `Czysty CSS`,
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
				title: `6. Tokeny w pierwszej kolejności`,
				children: [(0, d.jsx)(i, { children: (0, d.jsxs)(`p`, { children: [
					`Komponenty używają semantycznych narzędzi, takich jak `,
					(0, d.jsx)(`code`, { children: `bg-surface` }),
					` i `,
					(0, d.jsx)(`code`, { children: `text-muted` }),
					`, nigdy koloru szesnastkowego, klasy `,
					(0, d.jsx)(`code`, { children: `gray-*` }),
					` ani wariantu `,
					(0, d.jsx)(`code`, { children: `dark:` }),
					`. Tokeny decydują, jak wygląda powierzchnia w każdym motywie, więc komponent jest poprawny w każdym motywie, nie wiedząc, który jest włączony.`
				] }) }), (0, d.jsxs)(`div`, {
					className: `grid gap-4 md:grid-cols-2`,
					children: [(0, d.jsx)(s, {
						language: `tsx`,
						title: `Rób tak`,
						code: `<div className="border-border bg-surface text-fg" />`
					}), (0, d.jsx)(s, {
						language: `tsx`,
						title: `Nie rób tak`,
						code: `<div className="bg-white text-gray-900 dark:bg-gray-900" />`
					})]
				})]
			})
		]
	});
}
export { f as PrinciplesPl };
