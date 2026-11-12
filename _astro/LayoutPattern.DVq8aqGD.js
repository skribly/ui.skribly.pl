import { d as e, f as t, p as n, r, s as i, t as a, u as o } from "./doc.D2PtmWN6.js";
import { ReflowDemo as s } from "./LayoutPattern.BJy2xKcB.js";
import { t as c } from "./jsx-runtime.yrTYNGQT.js";
var l = c(), u = [
	[
		`base`,
		`0 do 639 px`,
		`Telefony. Projektuj najpierw tutaj: jedna kolumna, przyciski na pełną szerokość tam, gdzie pomagają.`
	],
	[
		`sm`,
		`640 px (40 rem)`,
		`Duże telefony i małe tablety. Krótkie pola mogą dzielić rząd.`
	],
	[
		`md`,
		`768 px (48 rem)`,
		`Tablety. Panele boczne aplikacji przestają być arkuszami.`
	],
	[
		`lg`,
		`1024 px (64 rem)`,
		`Laptopy. Stałe panele boczne i strony dwukolumnowe.`
	],
	[
		`xl`,
		`1280 px (80 rem)`,
		`Komputery stacjonarne. Trzecia kolumna, taka jak spis treści strony.`
	],
	[
		`2xl`,
		`1536 px (96 rem)`,
		`Szerokie ekrany. Utrzymuj linie tekstu poniżej około 75 znaków.`
	]
];
function d() {
	return (0, l.jsxs)(r, {
		lang: `pl`,
		children: [
			(0, l.jsx)(i, {
				eyebrow: `Wzorce`,
				title: `Układ i gęstość`,
				lead: `Każdy ekran Skribly działa od 320 px w górę, czyli także w oknie 1280 px przy powiększeniu 400%. Zaczynaj od wąskiego, pozwól treści się zawijać, zanim zacznie się przewijać, i pozwól komponentom odpowiadać na pole, w którym są.`
			}),
			(0, l.jsx)(o, {
				id: `from-320`,
				title: `Zacznij od 320 px`,
				children: (0, l.jsx)(n, { children: (0, l.jsxs)(`ul`, { children: [
					(0, l.jsx)(`li`, { children: `Najpierw zaprojektuj układ 320 px. Szersze układy dodają kolumny; nigdy nie usuwają treści.` }),
					(0, l.jsx)(`li`, { children: `Nic nie przewija się na boki poza tabelami danych, kodem i osiami czasu, a te przewijają się we własnym polu z fokusem.` }),
					(0, l.jsxs)(`li`, { children: [
						`Długie słowa, linki i nazwy plików się łamią, zamiast poszerzać stronę. Użyj `,
						(0, l.jsx)(`code`, { children: `min-w-0` }),
						` na dzieciach flex i grid, które zawierają tekst.`
					] }),
					(0, l.jsx)(`li`, { children: `Utrzymuj boczny margines 16 px na telefonach. Cele dotyku mają co najmniej 24 px, a 44 px dla głównych akcji strony.` }),
					(0, l.jsx)(`li`, { children: `W stałych paskach respektuj bezpieczne obszary telefonów z wycięciami.` })
				] }) })
			}),
			(0, l.jsxs)(o, {
				id: `container-queries`,
				title: `Odpowiadaj na pole, a nie na okno`,
				children: [
					(0, l.jsx)(n, { children: (0, l.jsxs)(`p`, { children: [
						`Komponent nie wie, czy leży na szerokiej stronie, czy w wąskim panelu bocznym, więc komponenty używają zapytań kontenerowych: `,
						(0, l.jsx)(`code`, { children: `@container` }),
						` na polu, a w środku `,
						(0, l.jsx)(`code`, { children: `@md:` }),
						` i podobne. Przeciągnij suwak, aby zobaczyć, jak układ się zmienia.`
					] }) }),
					(0, l.jsx)(s, {}),
					(0, l.jsx)(a, {
						language: `tsx`,
						code: `<div className="@container">
  <div className="grid gap-4 @2xl:grid-cols-[12rem_minmax(0,1fr)]">
    <nav>…</nav>
    <ul className="grid gap-3 @md:grid-cols-2 @4xl:grid-cols-3">…</ul>
  </div>
</div>`
					})
				]
			}),
			(0, l.jsxs)(o, {
				id: `breakpoints`,
				title: `Breakpointy`,
				children: [(0, l.jsx)(n, { children: (0, l.jsx)(`p`, { children: `Układy stron używają domyślnych breakpointów Tailwinda, bez zmian, więc kod aplikacji i biblioteka są zgodne.` }) }), (0, l.jsxs)(t, {
					label: `Breakpointy`,
					children: [
						(0, l.jsx)(`caption`, {
							className: `sr-only`,
							children: `Breakpointy, ich szerokość i to, co się przy nich zmienia`
						}),
						(0, l.jsx)(`thead`, { children: (0, l.jsxs)(`tr`, { children: [
							(0, l.jsx)(`th`, {
								scope: `col`,
								children: `Prefiks`
							}),
							(0, l.jsx)(`th`, {
								scope: `col`,
								children: `Od`
							}),
							(0, l.jsx)(`th`, {
								scope: `col`,
								children: `Użyj do`
							})
						] }) }),
						(0, l.jsx)(`tbody`, { children: u.map(([e, t, n]) => (0, l.jsxs)(`tr`, { children: [
							(0, l.jsx)(`th`, {
								scope: `row`,
								children: (0, l.jsx)(`code`, { children: e })
							}),
							(0, l.jsx)(`td`, {
								className: `whitespace-nowrap`,
								children: t
							}),
							(0, l.jsx)(`td`, { children: n })
						] }, e)) })
					]
				})]
			}),
			(0, l.jsx)(o, {
				id: `layouts`,
				title: `Typowe układy`,
				children: (0, l.jsxs)(`div`, {
					className: `grid gap-6 2xl:grid-cols-2`,
					children: [
						(0, l.jsxs)(e, {
							title: `Stos`,
							children: [(0, l.jsx)(n, { children: (0, l.jsx)(`p`, { children: `Układ domyślny. Odstęp między elementami pochodzi z gap, nigdy z marginesów elementów.` }) }), (0, l.jsx)(a, {
								language: `tsx`,
								code: `<div className="flex flex-col gap-4">…</div>`
							})]
						}),
						(0, l.jsxs)(e, {
							title: `Skupisko`,
							children: [(0, l.jsx)(n, { children: (0, l.jsx)(`p`, { children: `Przyciski, plakietki i filtry w rzędzie, który się zawija, zamiast się przepełniać.` }) }), (0, l.jsx)(a, {
								language: `tsx`,
								code: `<div className="flex flex-wrap items-center gap-2">…</div>`
							})]
						}),
						(0, l.jsxs)(e, {
							title: `Siatka kart`,
							children: [(0, l.jsx)(n, { children: (0, l.jsx)(`p`, { children: `Tyle kolumn, ile się mieści, każda co najmniej 16 rem, a na telefonach jedna kolumna.` }) }), (0, l.jsx)(a, {
								language: `tsx`,
								code: `<ul className="grid grid-cols-[repeat(auto-fill,minmax(min(16rem,100%),1fr))] gap-4">…</ul>`
							})]
						}),
						(0, l.jsxs)(e, {
							title: `Panel boczny i treść`,
							children: [(0, l.jsx)(n, { children: (0, l.jsx)(`p`, { children: `Dla aplikacji robi to AppLayout i zamienia panel boczny w arkusz na wąskich ekranach. Dla stron użyj siatki, która układa się w stos poniżej lg.` }) }), (0, l.jsx)(a, {
								language: `tsx`,
								code: `<div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]">…</div>`
							})]
						})
					]
				})
			}),
			(0, l.jsx)(o, {
				id: `spacing`,
				title: `Odstępy`,
				children: (0, l.jsx)(n, { children: (0, l.jsxs)(`p`, { children: [
					`Odstępy podążają za krokami co 4 px: `,
					(0, l.jsx)(`code`, { children: `gap-1` }),
					` to 4 px, a `,
					(0, l.jsx)(`code`, { children: `gap-4` }),
					` to 16 px, tak samo jak tokeny `,
					(0, l.jsx)(`code`, { children: `--sk-space-*` }),
					`. Używaj małych kroków wewnątrz komponentu, 16 do 24 px między komponentami i 48 px lub więcej między sekcjami strony. Rzeczy powiązane stoją bliżej niż niepowiązane.`
				] }) })
			}),
			(0, l.jsxs)(o, {
				id: `density`,
				title: `Gęstość`,
				children: [(0, l.jsx)(n, { children: (0, l.jsxs)(`p`, { children: [(0, l.jsx)(`code`, { children: `data-density="compact"` }), ` na elemencie głównym zmniejsza kontrolki dla narzędzi desktopowych, gdzie na jednym ekranie jest dużo rzeczy. Używaj go dla całej aplikacji, a nie dla jednego panelu, aby kontrolki miały jeden rozmiar na ekranie. Wypróbuj przełącznik gęstości na górze tej strony: każda kontrolka na tej stronie za nim podąża.`] }) }), (0, l.jsx)(a, {
					language: `html`,
					code: `<html data-theme="dark" data-density="compact">`
				})]
			})
		]
	});
}
export { d as LayoutPatternPl };
