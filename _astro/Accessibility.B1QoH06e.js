import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { t as n } from "./Kbd.BlqN-oOu.js";
import { S as r, d as i, f as a, p as o, r as s, s as c, t as l, u } from "./doc.D2PtmWN6.js";
import { t as d } from "./catalog.B1U1lZn4.js";
import { t as f } from "./jsx-runtime.yrTYNGQT.js";
var p = e(t(), 1), m = f(), h = [
	[
		`1.1.1`,
		`Treść nietekstowa`,
		`A`,
		`Ikony są ukryte przed czytnikami ekranu albo mają nazwę. IconButton wymaga label; Logo jest dekoracją, chyba że dostanie nazwę.`,
		`Tekst alternatywny obrazów, które pokazuje.`
	],
	[
		`1.3.1`,
		`Informacje i relacje`,
		`A`,
		`Natywne elementy i role React Aria. Etykiety, pomoc i błędy są powiązane ze swoją kontrolką; tabele mają komórki nagłówkowe; poziomy nagłówków są propami.`,
		`Struktura nagłówków i landmarki każdej strony.`
	],
	[
		`1.3.5`,
		`Określenie przeznaczenia pól`,
		`AA`,
		`Pola przekazują autoComplete dalej; formularze logowania i resetu je ustawiają.`,
		`autoComplete na polach z danymi osobowymi.`
	],
	[
		`1.4.1`,
		`Użycie koloru`,
		`A`,
		`Każdy ton łączy swój kolor ze słowem, kształtem ikony albo oboma.`,
		`Ta sama zasada we własnych widokach i wykresach.`
	],
	[
		`1.4.3`,
		`Kontrast (minimalny)`,
		`AA`,
		`Pary tekstu osiągają 4,5:1 w motywie dziennym i nocnym oraz 7:1 w wysokim kontraście. Sprawdzają je testy.`,
		`Własne kolory i tekst na obrazach.`
	],
	[
		`1.4.4`,
		`Zmiana rozmiaru tekstu`,
		`AA`,
		`Rozmiary są w rem i podążają za rozmiarem tekstu w przeglądarce.`,
		`Brak stałych rozmiarów fontów w pikselach we własnym CSS.`
	],
	[
		`1.4.10`,
		`Dopasowanie do ekranu`,
		`AA`,
		`Komponenty zawijają się albo układają w stos aż do 320 px; szerokie tabele i kod przewijają się we własnym polu z fokusem.`,
		`Układ strony, który się układa przy 320 px.`
	],
	[
		`1.4.11`,
		`Kontrast elementów nietekstowych`,
		`AA`,
		`Ramki kontrolek i obwódka fokusa osiągają 3:1 w motywie dziennym i nocnym oraz 4,5:1 w wysokim kontraście, co sprawdzają testy.`,
		`Własne ikony i znaczniki wykresów.`
	],
	[
		`1.4.12`,
		`Odstępy w tekście`,
		`AA`,
		`Tekst się zawija, a pola rosną razem z nim, zamiast go ucinać.`,
		`Własne pola o stałej wysokości.`
	],
	[
		`1.4.13`,
		`Treść pojawiająca się po najechaniu lub fokusie`,
		`AA`,
		`Dymki podpowiedzi pokazują się przy fokusie, zostają, gdy są najechane, i zamykają się klawiszem Escape.`,
		`Nic dodatkowego.`
	],
	[
		`2.1.1`,
		`Klawiatura`,
		`A`,
		`Każda kontrolka działa z klawiatury. Przeciąganie zawsze ma ścieżkę z klawiatury.`,
		`Własne widżety, które buduje sama.`
	],
	[
		`2.1.2`,
		`Brak pułapki klawiatury`,
		`A`,
		`Okna dialogowe trzymają fokus celowo, zamykają się klawiszem Escape i zwracają fokus elementowi otwierającemu.`,
		`Nic dodatkowego.`
	],
	[
		`2.2.1`,
		`Możliwość dostosowania czasu`,
		`A`,
		`Toasty sukcesu i informacji zostają co najmniej 5 sekund i wstrzymują się po najechaniu lub przy fokusie; ostrzeżenia, błędy i toasty z akcją zostają do zamknięcia.`,
		`Brak limitów czasu we własnych komunikatach.`
	],
	[
		`2.3.1`,
		`Trzy błyski lub wartości poniżej progu`,
		`A`,
		`Nic nie błyska. Wskaźniki ładowania się obracają; pulsowanie zanika powoli i zatrzymuje się przy ograniczonym ruchu.`,
		`Własne animacje i wideo.`
	],
	[
		`2.4.1`,
		`Możliwość pominięcia bloków`,
		`A`,
		`SkipLink i MainContent dają skok do treści; układy używają landmarków.`,
		`Link pomijający na każdej stronie.`
	],
	[
		`2.4.3`,
		`Kolejność fokusa`,
		`A`,
		`Kolejność czytania odpowiada kolejności wizualnej; fokus wraca po zamknięciu nakładek.`,
		`Kolejność własnego układu.`
	],
	[
		`2.4.6`,
		`Nagłówki i etykiety`,
		`AA`,
		`Każda etykieta i każdy nagłówek jest propem, więc może opisywać swój cel.`,
		`Słowa, które opisują cel.`
	],
	[
		`2.4.7`,
		`Widoczny fokus`,
		`AA`,
		`Jedna obwódka fokusa dla każdego elementu z domyślnych stylów strony, 3 px przy ustawieniu wyraźnego fokusa.`,
		`Nieusuwanie obrysów we własnym CSS.`
	],
	[
		`2.4.11`,
		`Fokus niezasłonięty (minimalny)`,
		`AA`,
		`Obwódki są rysowane wewnątrz pól, które ucinają; nakładki otwierają się obok swojego elementu otwierającego.`,
		`scroll-padding pod własnymi przyklejonymi nagłówkami i stopkami.`
	],
	[
		`2.5.3`,
		`Etykieta w nazwie`,
		`A`,
		`Widoczna etykieta jest nazwą dostępną; przyciski z ikoną pokazują swoją nazwę jako dymek podpowiedzi.`,
		`Utrzymanie tych samych widocznych słów i etykiet.`
	],
	[
		`2.5.7`,
		`Ruchy przeciągania`,
		`AA`,
		`Zmiana kolejności ma NudgeButtons, dzielniki poruszają się klawiszami, a upuszczanie plików ma przycisk.`,
		`Ścieżka dla pojedynczego wskaźnika dla własnych funkcji przeciągania.`
	],
	[
		`2.5.8`,
		`Rozmiar celu (minimalny)`,
		`AA`,
		`Cele mają co najmniej 24 na 24 piksele, także w zwartej gęstości.`,
		`Odstępy między własnymi małymi celami.`
	],
	[
		`3.2.2`,
		`Przy wprowadzaniu danych`,
		`A`,
		`Wybranie opcji nigdy samo nie wysyła formularza ani nie przechodzi na inną stronę.`,
		`To samo we własnych procedurach obsługi.`
	],
	[
		`3.3.1`,
		`Identyfikacja błędu`,
		`A`,
		`Błędy są tekstem z ikoną, ustawiają aria-invalid i są powiązane ze swoim polem.`,
		`Komunikaty błędów, które mówią, co jest nie tak.`
	],
	[
		`3.3.2`,
		`Etykiety lub instrukcje`,
		`A`,
		`Pola mają widoczną etykietę, znak wymagane lub opcjonalne i tekst pomocy.`,
		`Słowa każdej etykiety i podpowiedzi.`
	],
	[
		`3.3.3`,
		`Sugestie dotyczące błędów`,
		`AA`,
		`errorMessage zawiera poprawkę, a FormErrorSummary linkuje do każdego pola.`,
		`Komunikaty, które mówią, jak to poprawić.`
	],
	[
		`3.3.8`,
		`Dostępne uwierzytelnianie (minimalne)`,
		`AA`,
		`Formularze logowania pozwalają wklejać i współpracują z menedżerami haseł przez autocomplete.`,
		`Żadnych łamigłówek ani ręcznego przepisywania kodów.`
	],
	[
		`4.1.2`,
		`Nazwa, rola, wartość`,
		`A`,
		`React Aria ustawia role, stany i właściwości; typy wymagają każdej nazwy.`,
		`Nazwy własnych niestandardowych kontrolek.`
	],
	[
		`4.1.3`,
		`Komunikaty o stanie`,
		`AA`,
		`Toasty, komunikaty flash, alerty na żywo, statusy formularzy i announce() używają regionów na żywo typu polite albo assertive.`,
		`Ogłaszanie wyników własnej pracy asynchronicznej.`
	]
], g = (...e) => (0, m.jsx)(`span`, {
	className: `inline-flex flex-wrap items-center gap-1`,
	children: e.map((e, t) => (0, m.jsxs)(p.Fragment, { children: [t > 0 ? (0, m.jsx)(`span`, {
		className: `text-caption text-muted`,
		children: `lub`
	}) : null, (0, m.jsx)(n, { children: e })] }, e))
}), _ = [
	{
		id: `keys-everywhere`,
		title: `Wszędzie`,
		rows: [
			[g(`Tab`), `Przechodzi do następnej kontrolki. Pierwsze naciśnięcie na stronie pokazuje link pomijający.`],
			[g(`Shift+Tab`), `Przechodzi do poprzedniej kontrolki.`],
			[g(`F6`), `Przenosi fokus do stosu toastów, gdy toasty są pokazane.`],
			[g(`Escape`), `Zamyka otwarte menu, okno podręczne, dymek podpowiedzi lub okno dialogowe i zwraca fokus temu, co je otworzyło.`]
		]
	},
	{
		id: `keys-buttons`,
		title: `Przyciski, przełączniki i linki`,
		rows: [
			[g(`Enter`, `Spacja`), `Naciska przycisk albo przełącza przełącznik, pole wyboru lub Switch.`],
			[g(`Enter`), `Otwiera link. Linki otwierają też menu przeglądarki prawym przyciskiem myszy.`],
			[g(`←`, `→`), `Przechodzi między przyciskami paska narzędzi, który jest jednym przystankiem Tab.`]
		]
	},
	{
		id: `keys-choices`,
		title: `Karty, kontrolki segmentowe i grupy przycisków opcji`,
		rows: [
			[g(`←`, `→`), `Przesuwa i zaznacza; strzałka w górę i w dół w pionowych listach kart.`],
			[g(`Home`, `End`), `Przechodzi do pierwszej albo ostatniej karty.`],
			[g(`Delete`, `Backspace`), `Zamyka kartę z fokusem w ClosableTabs.`]
		]
	},
	{
		id: `keys-menus`,
		title: `Menu, listy wyboru i listy wyszukiwania`,
		rows: [
			[g(`Enter`, `Spacja`, `↓`), `Otwiera menu albo listę wyboru na pierwszej pozycji; strzałka w górę otwiera menu na ostatniej.`],
			[g(`↑`, `↓`), `Przesuwa po pozycjach, podczas gdy fokus zostaje w polu wyszukiwania GlobalSearch, CommandPalette i QuickOpen.`],
			[g(`A–Z`), `Wpisanie litery przeskakuje do pierwszej pasującej pozycji.`],
			[g(`Enter`), `Uruchamia albo wybiera podświetloną pozycję.`]
		]
	},
	{
		id: `keys-collections`,
		title: `Listy, tabele i drzewa`,
		rows: [
			[g(`↑`, `↓`), `Przechodzi między wierszami; w DataTable strzałki przechodzą między komórkami.`],
			[g(`Home`, `End`, `Page Up`, `Page Down`), `Skacze po długich listach, także po wierszach, których VirtualList jeszcze nie narysował.`],
			[g(`Spacja`), `Zaznacza wiersz.`],
			[g(`→`, `←`), `Otwiera albo zamyka gałąź drzewa, albo przechodzi do jej potomka lub rodzica.`],
			[g(`Enter`), `Podnosi przeciągany element i go upuszcza; strzałki wybierają miejsce, a Escape anuluje.`]
		]
	},
	{
		id: `keys-ranges`,
		title: `Suwaki, dzielniki i pola dat`,
		rows: [
			[g(`←`, `→`, `↑`, `↓`), `Zmienia suwak o krok, przesuwa dzielnik albo zmienia segment daty.`],
			[g(`Page Up`, `Page Down`), `Skacze dalej, a w kalendarzu o miesiąc.`],
			[g(`Home`, `End`), `Przechodzi do granic.`],
			[g(`Enter`), `Zwija i przywraca widok podzielony albo dok.`]
		]
	},
	{
		id: `keys-text`,
		title: `Wpisywanie tekstu`,
		rows: [
			[g(`Enter`), `Wysyła z Composer, dodaje chip w ChipInput, wysyła pole wyszukiwania.`],
			[g(`Shift+Enter`), `Dodaje linię w Composer.`],
			[g(`Ctrl+Enter`, `⌘+Enter`), `Wysyła wpis z CommentForm.`],
			[g(`Escape`), `Czyści pole wyszukiwania.`]
		]
	}
];
function v() {
	return (0, m.jsxs)(s, {
		lang: `pl`,
		children: [
			(0, m.jsx)(c, {
				eyebrow: `Dostępność`,
				title: `Budowane, aby pomóc twojej aplikacji spełnić WCAG 2.2 AA`,
				lead: `Skribly UI celuje w WCAG 2.2 poziom AA we wszystkim, co dostarcza. Ta strona mówi, jak to robi, co sprawdzają testy i za co nadal odpowiada aplikacja, która go używa.`
			}),
			(0, m.jsxs)(u, {
				id: `target`,
				title: `Cel i to, czym nie jest`,
				children: [(0, m.jsx)(r, {
					tone: `info`,
					toneLabel: `Informacja`,
					title: `Bez deklaracji zgodności`,
					children: `Zgodność dotyczy całych stron, a nie części. Biblioteka nie może sama uczynić aplikacji zgodną, a Skribly UI nie został poddany audytowi ani certyfikacji. Usuwa typowe błędy z części, które dostarcza, a aplikacja nadal odpowiada za swoją treść, swoje słowa, strukturę swoich stron i własny CSS.`
				}), (0, m.jsx)(o, { children: (0, m.jsx)(`p`, { children: `Każdy komponent jest projektowany względem kryteriów AA z WCAG 2.2, zbudowany na React Aria, aby obsługa klawiatury, fokus i zachowanie dla czytników ekranu podążały za ARIA Authoring Practices, i opisany własnymi notatkami o dostępności na swojej stronie.` }) })]
			}),
			(0, m.jsxs)(u, {
				id: `tests`,
				title: `Co sprawdzają testy`,
				children: [(0, m.jsx)(`ul`, {
					className: `grid gap-3 md:grid-cols-2`,
					children: [
						[`axe na każdym przykładzie`, `Przykłady: ${d.demos}, przechodzą przez axe-core w motywie dziennym, nocnym i wysokiego kontrastu: ${d.demos * 3} uruchomień przy każdym npm test.`],
						[`Kontrast par tokenów`, `Pary tekstu i podbarwienia, ramki kontrolek i obwódka fokusa są mierzone w każdym motywie względem 4,5:1 i 3:1, a w wysokim kontraście 7:1 i 4,5:1.`],
						[`Każdy komponent jest pokazany`, `Test kończy się błędem, gdy wyeksportowany komponent nie ma przykładu, więc nic nie jest dostarczane bez przejścia przez axe.`],
						[`Zachowanie każdego komponentu`, `Każdy komponent ma testy Testing Library dla swoich ścieżek klawiatury, nazw dostępnych, stanów i komunikatów na żywo.`],
						[`Ta strona w prawdziwej przeglądarce`, `Przed każdym wydaniem każda strona tego serwisu jest otwierana w Chromium przy szerokości 320 i 1280 pikseli i przechodzi przez axe z układem, więc mierzone są też rozmiar celu, kontrast kolorów we wszystkich trzech motywach, linki w tekście i pola przewijane. Strona, która przewija się na boki albo nie została znaleziona, przerywa build.`]
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
					(0, m.jsx)(`p`, { children: `Testy jednostkowe działają w jsdom, który nie ma układu. Własna reguła kontrastu axe jest tam wyłączona, dlatego pary tokenów są sprawdzane z ich wartości, a zbudowana strona jest sprawdzana jeszcze raz w przeglądarce. Są rzeczy, których nie zobaczy żaden test automatyczny:` }),
					(0, m.jsxs)(`ul`, { children: [
						(0, m.jsx)(`li`, { children: `co naprawdę mówi czytnik ekranu i w jakiej kolejności;` }),
						(0, m.jsx)(`li`, { children: `czy obwódka fokusa jest widoczna na tle tego, co jest za nią;` }),
						(0, m.jsx)(`li`, { children: `układ przy powiększeniu 400% i na ekranie 320 px;` }),
						(0, m.jsx)(`li`, { children: `słowa i treść, które twoja aplikacja wkłada do komponentów.` })
					] }),
					(0, m.jsx)(`p`, { children: `Sprawdza się je ręcznie podczas przeglądu, a twoja aplikacja też powinna je sprawdzać.` })
				] })]
			}),
			(0, m.jsxs)(u, {
				id: `criteria`,
				title: `Kryteria WCAG 2.2 AA`,
				children: [(0, m.jsx)(o, { children: (0, m.jsx)(`p`, { children: `Kryteria, przy których biblioteka wykonuje prawdziwą pracę, jak jej komponenty je spełniają i część, która zostaje po stronie twojej aplikacji.` }) }), (0, m.jsxs)(a, {
					label: `Kryteria WCAG 2.2 i sposób, w jaki spełniają je komponenty`,
					children: [
						(0, m.jsx)(`caption`, {
							className: `sr-only`,
							children: `Kryteria sukcesu WCAG 2.2, poziom, co robi biblioteka i za co odpowiada aplikacja`
						}),
						(0, m.jsx)(`thead`, { children: (0, m.jsxs)(`tr`, { children: [
							(0, m.jsx)(`th`, {
								scope: `col`,
								children: `Kryterium`
							}),
							(0, m.jsx)(`th`, {
								scope: `col`,
								children: `Poziom`
							}),
							(0, m.jsx)(`th`, {
								scope: `col`,
								children: `Jak spełniają je komponenty`
							}),
							(0, m.jsx)(`th`, {
								scope: `col`,
								children: `Za co odpowiada twoja aplikacja`
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
				title: `Klawiatura`,
				children: [(0, m.jsx)(o, { children: (0, m.jsx)(`p`, { children: `Klawisze podążają za ARIA Authoring Practices, więc są to te, które użytkownicy czytników ekranu i klawiatury już znają. Strona każdego komponentu wymienia jego własne klawisze.` }) }), (0, m.jsx)(`div`, {
					className: `grid gap-6 2xl:grid-cols-2`,
					children: _.map((e) => (0, m.jsx)(i, {
						id: e.id,
						title: e.title,
						children: (0, m.jsxs)(a, {
							label: `Klawisze: ${e.title}`,
							children: [(0, m.jsx)(`thead`, { children: (0, m.jsxs)(`tr`, { children: [(0, m.jsx)(`th`, {
								scope: `col`,
								className: `w-48`,
								children: `Klawisz`
							}), (0, m.jsx)(`th`, {
								scope: `col`,
								children: `Co robi`
							})] }) }), (0, m.jsx)(`tbody`, { children: e.rows.map(([e, t]) => (0, m.jsxs)(`tr`, { children: [(0, m.jsx)(`td`, { children: e }), (0, m.jsx)(`td`, { children: t })] }, t)) })]
						})
					}, e.id))
				})]
			}),
			(0, m.jsx)(u, {
				id: `screen-readers`,
				title: `Czytniki ekranu i komunikaty na żywo`,
				children: (0, m.jsxs)(o, { children: [(0, m.jsx)(`p`, { children: `Każdy komponent ma nazwę, rolę i stan. Nazwy pochodzą z propów, nigdy z biblioteki, więc są w języku aplikacji. Słowa statusu, takie jak „Błąd”, są odczytywane przed komunikatem, więc ton nigdy nie opiera się na kolorze i ikonie.` }), (0, m.jsxs)(`p`, { children: [
					`Komunikaty, które pojawiają się później, są odczytywane przez regiony na żywo: `,
					(0, m.jsx)(`strong`, { children: `polite` }),
					` dla sukcesu i informacji, który czeka, aż czytnik ekranu skończy, oraz `,
					(0, m.jsx)(`strong`, { children: `assertive` }),
					` dla błędów, które zatrzymują czytelnika. `,
					(0, m.jsx)(`code`, { children: `LiveRegion` }),
					` i `,
					(0, m.jsx)(`code`, { children: `announce()` }),
					` robią to samo dla własnych komunikatów aplikacji. `,
					(0, m.jsx)(`a`, {
						href: `/pl/patterns/messages/`,
						children: `Wzorzec komunikatów`
					}),
					` mówi, którego komponentu użyć.`
				] })] })
			}),
			(0, m.jsx)(u, {
				id: `reduced-motion`,
				title: `Ograniczony ruch`,
				children: (0, m.jsx)(o, { children: (0, m.jsxs)(`p`, { children: [
					`Ruch jest krótki i nigdy nie jest potrzebny do zrozumienia zmiany. Przy `,
					(0, m.jsx)(`code`, { children: `prefers-reduced-motion: reduce` }),
					` albo klasie `,
					(0, m.jsx)(`code`, { children: `a11y-reduce-motion` }),
					` z ustawień czytelnika tokeny czasu trwania spadają niemal do zera, pulsowanie się zatrzymuje, zmiany motywu następują od razu, a przewijanie skacze. Wskaźniki ładowania nadal się powoli obracają, bo nieruchomy wskaźnik powiedziałby, że praca stanęła.`
				] }) })
			}),
			(0, m.jsx)(u, {
				id: `forced-colours`,
				title: `Wymuszone kolory`,
				children: (0, m.jsxs)(o, { children: [(0, m.jsx)(`p`, { children: `Tryb wysokiego kontrastu systemu Windows zastępuje każdy kolor kilkoma kolorami systemowymi. Komponenty zachowują tam swój kształt: plakietki i kafelki mają przezroczyste ramki, które stają się widoczne, bieżący element dostaje podkreślenie albo pasek Highlight, zaznaczone opcje używają Highlight, a szkielety dostają obrys. Próbki kolorów, na przykład w tabelach tokenów, zachowują swoje prawdziwe kolory.` }), (0, m.jsx)(`p`, { children: `Motyw wysokiego kontrastu to osobna rzecz: motyw biblioteki dla czytelników, którzy chcą mocnego kontrastu w wyglądzie Skribly.` })] })
			}),
			(0, m.jsx)(u, {
				id: `zoom-and-reflow`,
				title: `Powiększenie, układ i odstępy w tekście`,
				children: (0, m.jsx)(o, { children: (0, m.jsxs)(`ul`, { children: [
					(0, m.jsx)(`li`, { children: `Rozmiary tekstu są w rem, więc ustawienie rozmiaru tekstu w przeglądarce skaluje każdy komponent.` }),
					(0, m.jsx)(`li`, { children: `Przy powiększeniu 400% okno 1280 px ma szerokość 320 px. Komponenty się zawijają, układają w stos i ucinają z zachowaniem pełnego tekstu dla czytników ekranu, a nic nie przewija się na boki poza tabelami danych i kodem, które przewijają się we własnym polu.` }),
					(0, m.jsx)(`li`, { children: `Pola mają tekst 16 px poniżej 640 px, więc telefony nie powiększają widoku, gdy pole dostaje fokus.` }),
					(0, m.jsx)(`li`, { children: `Kontenery tekstu rosną przy dodatkowych odstępach między liniami, słowami i literami, zamiast je ucinać.` })
				] }) })
			}),
			(0, m.jsx)(u, {
				id: `target-size`,
				title: `Rozmiar celu`,
				children: (0, m.jsx)(o, { children: (0, m.jsx)(`p`, { children: `Cele wskaźnika mają co najmniej 24 na 24 piksele, czyli minimum AA z WCAG 2.2. Kontrolki mają domyślnie 36 px wysokości; zwarta gęstość daje 30 px, nadal powyżej minimum. Małe przyciski zamknięcia dostają pole trafienia 24 px, nawet gdy ikona jest mniejsza, a przyciski zmiany wartości w ustawieniach czytelnika mają 44 px.` }) })
			}),
			(0, m.jsxs)(u, {
				id: `testing`,
				title: `Jak testować twoją aplikację`,
				children: [
					(0, m.jsx)(`ol`, {
						className: `grid gap-3 md:grid-cols-2`,
						children: [
							[`Tylko klawiatura`, `Odłóż mysz. Dotrzyj do każdej kontrolki klawiszem Tab, użyj jej i obserwuj obwódkę fokusa na całej drodze.`],
							[`Czytnik ekranu`, `VoiceOver w macOS i iOS, NVDA w Windows, TalkBack w Androidzie. Słuchaj nazw, stanów i komunikatów.`],
							[`Powiększenie i 320 px`, `Powiększ do 200% i 400% i użyj okna o szerokości 320 px. Nic nie powinno być ucięte ani przewijać się na boki.`],
							[`Wymuszone kolory i ruch`, `Emuluj forced-colors i prefers-reduced-motion w narzędziach deweloperskich przeglądarki.`],
							[`Kontrole automatyczne`, `Uruchamiaj axe w testach jednostkowych i w testach end-to-end prawdziwych stron, gdzie może mierzyć kontrast.`],
							[`Własna treść`, `Przeczytaj na głos każdą etykietę, błąd i pusty stan. Czy mówi, co się stało i co zrobić?`]
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
						title: `Kontrola axe w Vitest`,
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
						title: `Kontrola axe w Playwright, z kontrastem`,
						code: `import AxeBuilder from '@axe-core/playwright'

test('settings page', async ({ page }) => {
  await page.goto('/settings')
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
  expect(results.violations).toEqual([])
})`
					})
				]
			})
		]
	});
}
export { v as AccessibilityPl };
