import { I as e, d as t, f as n, i as r, j as i, n as a, p as o, r as s, s as c, t as l, u } from "./doc.C_PtMNUB.js";
import { SidebarPatternDemo as d } from "./SidebarPattern.BcpJAn1a.js";
var f = e(), p = [
	[`Zwarty (domyślny)`, `Widać tylko pasek 72 px, a treść ma pełną szerokość. Wybierz sekcję, aby otworzyć jej panel.`],
	[`Unoszący się panel`, `Sekcja otwiera swój panel 240 px z boku paska, nad treścią. Otwiera się po kliknięciu, klawiszu Enter, Spacja albo strzałce w prawo, a po najechaniu myszą na 150 ms pokazuje podgląd. Zamyka się po kliknięciu obok, klawiszu Esc albo wyborze strony.`],
	[`Zadokowany`, `Przycisk przypięcia w nagłówku panelu przypina panel obok treści i zostaje on na miejscu. Okrągły przycisk na krawędzi panelu bocznego albo klawisz [ zwija go z powrotem do paska i przypina ponownie; treść przesuwa się razem z nim przez 180 ms. Wybór i ostatnia sekcja są zapamiętywane pod kluczem storageKey. Rozwinięcia boczne nadal się unoszą.`],
	[`Drugi poziom`, `Strona z podstronami jest wierszem ze strzałką-szewronem. Otwiera rozwinięcie 240 px jeszcze dalej w bok od panelu, z górną krawędzią na wysokości wiersza. Rozwinięcie zaczyna się linkiem do strony nadrzędnej.`],
	[`Trzeci poziom`, `Wiersz rozwinięcia też może mieć podstrony, a one otwierają w ten sam sposób jeszcze jedno rozwinięcie w bok. Czwarty poziom nie jest obsługiwany.`],
	[`Szuflada na telefonie`, `Poniżej 48 rem pasek zamienia się w jedną modalną szufladę za przyciskiem menu. Każdy poziom jest ekranem wsuwającym się z boku, z wierszem powrotu nazwanym przez labels.backTo, na przykład „Wróć do: Sprzedaż”. Nic nie rozwija się w miejscu.`]
], m = [
	[
		`Start`,
		`nav.home`,
		`Strona startowa aplikacji: podsumowanie, to, co wymaga uwagi, skróty. Zwykły link, bez panelu.`
	],
	[
		`Treści`,
		`file.document`,
		`To, co aplikacja przechowuje, a użytkownik pisze lub edytuje: strony, wpisy, media, projekty, dokumenty.`
	],
	[
		`Sprzedaż`,
		`content.product`,
		`Wszystko, co się sprzedaje lub realizuje: produkty, zamówienia, klienci, zwroty. Pomiń w aplikacjach bez takich funkcji.`
	],
	[
		`Marketing`,
		`ai.sparkles`,
		`Docieranie do ludzi: newslettery, kampanie, wygląd w wyszukiwarce, wpisy społecznościowe.`
	],
	[
		`Statystyki`,
		`nav.analytics`,
		`Czytanie, jak idzie: przegląd, ruch, raporty, dzienniki.`
	],
	[
		`Ustawienia`,
		`nav.settings`,
		`Konfiguracja aplikacji lub witryny: ogólne, integracje, członkowie i role, rozliczenia, zaawansowane.`
	]
], h = [
	`home`,
	`content`,
	`commerce`,
	`marketing`,
	`insights`,
	`settings`
], g = [
	[
		`Agent (aplikacja desktopowa)`,
		`Start`,
		`Umiejętności, sesje`,
		`Brak`,
		`Brak`,
		`Historia uruchomień, użycie`,
		`Modele, foldery, konto`
	],
	[
		`Panel treści`,
		`Start`,
		`Strony, wpisy, media`,
		`Zamówienia, produkty (po włączeniu)`,
		`Newsletter, wygląd w wyszukiwarce`,
		`Ruch, raporty`,
		`Witryna, członkowie, integracje`
	],
	[
		`Tracker`,
		`Start`,
		`Projekty, zgłoszenia, tablice`,
		`Brak`,
		`Brak`,
		`Wykres spalania, tempo, raporty`,
		`Przestrzeń, członkowie, etykiety`
	],
	[
		`Hub`,
		`Start`,
		`Aplikacje, projekty`,
		`Brak`,
		`Brak`,
		`Aktywność aplikacji`,
		`Konto, zespół, tokeny`
	],
	[
		`Id`,
		`Start`,
		`Brak`,
		`Brak`,
		`Brak`,
		`Aktywność logowania`,
		`Profil, logowanie, urządzenia`
	]
], _ = [
	[
		`Pasek`,
		`Strzałka w górę, w dół, Home, End`,
		`Przechodzą między przyciskami paska. Fokus nie zawija się.`
	],
	[
		`Pasek`,
		`Enter, Spacja albo strzałka w prawo`,
		`Otwierają panel sekcji i przenoszą fokus na otwartą stronę albo pierwszy link.`
	],
	[
		`Panel lub rozwinięcie`,
		`Strzałka w prawo, Enter albo Spacja na wierszu ze strzałką-szewronem`,
		`Otwierają jego boczny poziom i przenoszą fokus na pierwszy link tego poziomu.`
	],
	[
		`Panel lub rozwinięcie`,
		`Strzałka w lewo albo Esc`,
		`Zamykają ten poziom i oddają fokus wierszowi albo przyciskowi paska, który go otworzył. Esc na pasku zamyka unoszący się panel.`
	],
	[
		`Panel lub rozwinięcie`,
		`Strzałka w górę, w dół, Home, End`,
		`Przechodzą między linkami w obrębie jednego poziomu oraz z pola filtra do pierwszego linku.`
	],
	[
		`Panel`,
		`Pisanie w polu filtra`,
		`Zawęża linki według etykiety i słów kluczowych; akcenty są pomijane. Brak wyników jest odczytywany.`
	],
	[
		`Strona`,
		`[`,
		`Zwija przypięty panel do paska albo przypina go ponownie. Działa poza polami tekstowymi; to samo robi przycisk na krawędzi panelu bocznego, a jego dymek podpowiedzi podaje klawisz. Wybór jest zapamiętywany.`
	],
	[
		`Strona`,
		`Tab`,
		`Kolejność: linki pomijania (do nawigacji i do treści), przyciski paska, otwarty poziom, treść. Każdy przycisk paska jest przystankiem klawisza Tab; strzałki są szybszą drogą między nimi, a link pomijania przeskakuje pasek.`
	]
], v = [
	`Sekcje są przypisane do sześciu grup, w standardowej kolejności, a grupy zbędne dla aplikacji są pominięte.`,
	`Każda ikona to nazwa z rejestru, przez Icon, w trzech tonach.`,
	`Etykiety, prop labels, aria-label i countLabel są propami w języku angielskim i polskim, bez żadnych tekstów wbudowanych w powłokę aplikacji.`,
	`Liczniki mają countLabel czytany słowami.`,
	`storageKey jest ustawiony dla każdej aplikacji, żeby aplikacje w jednej domenie nie dzieliły wyboru.`,
	`Agent przekazuje desktop i wysokość paska tytułu zgodną z ustawieniem okna.`,
	`Głębsze strony otwierają się z boku jako podstrony swojego wiersza: żadna lista nie rozwija się w dół, żadna grupa się nie zwija i nie ma czwartego poziomu.`,
	`Każdy wiersz nadrzędny ma własną stronę, a labels.backTo jest ustawione, żeby szuflada na telefonie nazywała, dokąd wraca każdy wiersz powrotu.`,
	`Panel w Laravelu stosuje się do .docs/how-to/adopt-the-sidebar.md.`
];
function y() {
	return (0, f.jsxs)(s, {
		lang: `pl`,
		children: [
			(0, f.jsx)(c, {
				eyebrow: `Wzorce`,
				title: `Panel boczny`,
				lead: `Jeden panel boczny dla każdej aplikacji Skribly: aplikacji desktopowej Agent, panelu treści, Trackera, Hubu i Id. Wąski pasek sekcji, panel ich stron i rozwinięcia otwierane z boku, nigdy w dół, budowany z celem WCAG 2.2 AA.`
			}),
			(0, f.jsxs)(u, {
				id: `anatomy`,
				title: `Budowa`,
				children: [
					(0, f.jsxs)(o, { children: [(0, f.jsxs)(`p`, { children: [(0, f.jsx)(`code`, { children: `SidebarRail` }), ` ma cztery części. Pasek ma 72 px szerokości, z ikoną i krótką etykietą przy każdej sekcji. Panel boczny ma 240 px szerokości i wymienia strony otwartej sekcji pod zwykłymi nagłówkami. Strona z podstronami jest wierszem ze strzałką-szewronem, a jej podstrony otwierają się w rozwinięciu, również 240 px szerokim, jeszcze dalej w bok i na wysokości wiersza; trzeci poziom otwiera się tak samo. Nic nigdy nie rozwija się w dół. Przełącznik witryny lub przestrzeni roboczej leży nad paskiem; motyw i menu użytkownika są na dole.`] }), (0, f.jsx)(`p`, { children: `Przykład poniżej jest zadokowany i stoi na Sprzedaż, Produkty, Warianty, więc droga do otwartej strony jest podświetlona na każdym poziomie. Najedź na Produkty albo naciśnij na nich Enter, aby zobaczyć rozwinięcie.` })] }),
					(0, f.jsx)(r, {
						label: `Zadokowany: pasek, panel i rozwinięcie Produktów`,
						children: (0, f.jsx)(d, {
							docked: !0,
							storageKey: `sk-pattern-sidebar`
						})
					}),
					(0, f.jsx)(l, {
						language: `tsx`,
						code: `<SidebarRail
  sections={[
    {
      id: 'commerce',
      label: 'Sprzedaż',
      icon: <Icon name="content.product" />,
      groups: [
        {
          label: 'Zamówienia',
          links: [
            {
              href: '/products',
              label: 'Produkty',
              children: [
                { href: '/products/variants', label: 'Warianty' },
                { href: '/products/brands', label: 'Marki' }
              ]
            }
          ]
        }
      ]
    }
  ]}
  current={pathname}
  labels={labels}
  storageKey="content"
  top={<SiteSwitcher />}
  bottom={
    <>
      <ThemeMenu />
      <UserMenu />
    </>
  }
/>`
					})
				]
			}),
			(0, f.jsxs)(u, {
				id: `cascade`,
				title: `Kaskada w bok`,
				children: [(0, f.jsx)(o, { children: (0, f.jsxs)(`ul`, { children: [
					(0, f.jsxs)(`li`, { children: [
						`Pasek otwiera panel w odległości `,
						(0, f.jsx)(`code`, { children: `72` }),
						` px od krawędzi początku, rozwinięcie otwiera się przy `,
						(0, f.jsx)(`code`, { children: `312` }),
						` px, a trzeci poziom przy `,
						(0, f.jsx)(`code`, { children: `552` }),
						` px. Każdy zachodzi o 1 px na poprzednią ramkę.`
					] }),
					(0, f.jsx)(`li`, { children: `Górna krawędź rozwinięcia leży na wysokości wiersza, który je otworzył, i przesuwa się w górę tylko tyle, by zostać wewnątrz panelu bocznego. Wyższe rozwinięcie przewija się w środku.` }),
					(0, f.jsx)(`li`, { children: `Otwarcie poziomu nigdy nie przesuwa żadnego wiersza poziomu, który zawiera jego rodzica.` }),
					(0, f.jsx)(`li`, { children: `Zamiar najechania: mysz otwiera poziom sekcji lub wiersza po 150 ms najechania, więc wskaźnik przesuwający się po wierszach nie otwiera poziomów na chwilę.` }),
					(0, f.jsx)(`li`, { children: `Bezpieczny trójkąt: gdy głębszy poziom jest otwarty, przesuwanie wskaźnika po przekątnej w jego stronę nie przełącza na wiersze, które mija po drodze. Przełączenie czeka około 300 ms i jest anulowane, gdy wskaźnik wejdzie na poziom.` }),
					(0, f.jsx)(`li`, { children: `Unoszący się panel i wszystkie rozwinięcia zamykają się po kliknięciu obok, klawiszu Esc, gdy wskaźnik opuści cały panel boczny, i po wyborze strony.` })
				] }) }), (0, f.jsx)(r, {
					label: `Domyślnie zwarty: najedź na Sprzedaż, potem na Produkty`,
					children: (0, f.jsx)(d, {})
				})]
			}),
			(0, f.jsxs)(u, {
				id: `phone`,
				title: `Na telefonie`,
				children: [(0, f.jsx)(o, { children: (0, f.jsxs)(`p`, { children: [
					`Poniżej 48 rem nie ma rozwinięć. Przycisk menu otwiera jedną modalną szufladę, której poziomy są ekranami: najpierw sekcje, potem sekcja, potem podstrony wiersza. Nowy ekran wsuwa się z boku, a każdy ekran poza pierwszym zaczyna się wierszem powrotu, który mówi, dokąd wraca, na przykład „Wróć do: Sprzedaż”, ustawionym przez `,
					(0, f.jsx)(`code`, { children: `labels.backTo` }),
					`. Szuflada otwiera się na ekranie otwartej strony.`
				] }) }), (0, f.jsx)(r, {
					label: `Ramka 24 rem: otwórz menu`,
					children: (0, f.jsx)(d, {
						phone: !0,
						height: `36rem`
					})
				})]
			}),
			(0, f.jsx)(u, {
				id: `states`,
				title: `Stany`,
				children: (0, f.jsxs)(n, {
					label: `Stany panelu bocznego`,
					children: [
						(0, f.jsx)(`caption`, {
							className: `sr-only`,
							children: `Sześć stanów panelu bocznego`
						}),
						(0, f.jsx)(`thead`, { children: (0, f.jsxs)(`tr`, { children: [(0, f.jsx)(`th`, {
							scope: `col`,
							children: `Stan`
						}), (0, f.jsx)(`th`, {
							scope: `col`,
							children: `Zachowanie`
						})] }) }),
						(0, f.jsx)(`tbody`, { children: p.map(([e, t]) => (0, f.jsxs)(`tr`, { children: [(0, f.jsx)(`th`, {
							scope: `row`,
							children: e
						}), (0, f.jsx)(`td`, { children: t })] }, e)) })
					]
				})
			}),
			(0, f.jsxs)(u, {
				id: `groups`,
				title: `Sześć standardowych grup`,
				children: [
					(0, f.jsx)(o, { children: (0, f.jsx)(`p`, { children: `Każda aplikacja używa tych grup, w tej kolejności, więc kto zna jedną aplikację Skribly, znajdzie te same miejsca w następnej. Aplikacja pomija grupy, do których nie ma funkcji; nigdy ich nie przemianowuje ani nie przestawia.` }) }),
					(0, f.jsxs)(n, {
						label: `Standardowe grupy`,
						children: [
							(0, f.jsx)(`caption`, {
								className: `sr-only`,
								children: `Sześć grup, ich ikona z rejestru i to, co do nich należy`
							}),
							(0, f.jsx)(`thead`, { children: (0, f.jsxs)(`tr`, { children: [
								(0, f.jsx)(`th`, {
									scope: `col`,
									children: `Grupa`
								}),
								(0, f.jsx)(`th`, {
									scope: `col`,
									children: `Ikona`
								}),
								(0, f.jsx)(`th`, {
									scope: `col`,
									children: `Co do niej należy`
								})
							] }) }),
							(0, f.jsx)(`tbody`, { children: m.map(([e, t, n]) => (0, f.jsxs)(`tr`, { children: [
								(0, f.jsx)(`th`, {
									scope: `row`,
									children: e
								}),
								(0, f.jsxs)(`td`, {
									className: `whitespace-nowrap`,
									children: [(0, f.jsx)(i, {
										name: t,
										tone: `brand`,
										className: `me-2 inline-block align-middle`
									}), (0, f.jsx)(`code`, { children: t })]
								}),
								(0, f.jsx)(`td`, { children: n })
							] }, e)) })
						]
					}),
					(0, f.jsxs)(t, {
						title: `Jak aplikacja przypisuje swoje sekcje`,
						children: [(0, f.jsx)(o, { children: (0, f.jsx)(`p`, { children: `Aplikacja zachowuje własne słowa dla stron i funkcji i umieszcza je pod najbliższą grupą. Gdy grupa nie pasuje, na pasku po prostu nie ma takiego przycisku.` }) }), (0, f.jsxs)(n, {
							label: `Przypisanie aplikacji do grup`,
							children: [
								(0, f.jsx)(`caption`, {
									className: `sr-only`,
									children: `Które strony każdej aplikacji trafiają pod którą grupę`
								}),
								(0, f.jsx)(`thead`, { children: (0, f.jsxs)(`tr`, { children: [
									(0, f.jsx)(`th`, {
										scope: `col`,
										children: `Aplikacja`
									}),
									(0, f.jsx)(`th`, {
										scope: `col`,
										children: `Start`
									}),
									(0, f.jsx)(`th`, {
										scope: `col`,
										children: `Treści`
									}),
									(0, f.jsx)(`th`, {
										scope: `col`,
										children: `Sprzedaż`
									}),
									(0, f.jsx)(`th`, {
										scope: `col`,
										children: `Marketing`
									}),
									(0, f.jsx)(`th`, {
										scope: `col`,
										children: `Statystyki`
									}),
									(0, f.jsx)(`th`, {
										scope: `col`,
										children: `Ustawienia`
									})
								] }) }),
								(0, f.jsx)(`tbody`, { children: g.map(([e, ...t]) => (0, f.jsxs)(`tr`, { children: [(0, f.jsx)(`th`, {
									scope: `row`,
									children: e
								}), t.map((e, t) => (0, f.jsx)(`td`, { children: e }, h[t]))] }, e)) })
							]
						})]
					})
				]
			}),
			(0, f.jsxs)(u, {
				id: `icons`,
				title: `Ikony`,
				children: [(0, f.jsx)(o, { children: (0, f.jsxs)(`ul`, { children: [
					(0, f.jsxs)(`li`, { children: [
						`Ikony pochodzą wyłącznie z rejestru: `,
						(0, f.jsx)(`code`, { children: `<Icon name="nav.home" />` }),
						`. Zobacz `,
						(0, f.jsx)(`code`, { children: `.docs/how-to/use-icons.md` }),
						`.`
					] }),
					(0, f.jsxs)(`li`, { children: [
						`Trzy tony, ustawiane przez sam pasek, więc przekazujesz zwykłe `,
						(0, f.jsx)(`code`, { children: `Icon` }),
						`: ikony paska są `,
						(0, f.jsx)(`code`, { children: `brand` }),
						`, ikona bieżącej sekcji jest `,
						(0, f.jsx)(`code`, { children: `duo` }),
						`, ikony linków panelu są `,
						(0, f.jsx)(`code`, { children: `mono` }),
						`, a ikona bieżącego linku jest `,
						(0, f.jsx)(`code`, { children: `brand` }),
						`.`
					] }),
					(0, f.jsx)(`li`, { children: `Bieżący element ma też wypełnioną pigułkę i grubszą etykietę, więc nigdy nie zależy od samego koloru.` })
				] }) }), (0, f.jsx)(l, {
					language: `tsx`,
					code: `{ id: 'commerce', label: 'Sprzedaż', icon: <Icon name="content.product" /> }
{ href: '/orders', label: 'Zamówienia', icon: <Icon name="nav.inbox" /> }`
				})]
			}),
			(0, f.jsxs)(u, {
				id: `counts`,
				title: `Liczniki i plakietki`,
				children: [(0, f.jsx)(o, { children: (0, f.jsxs)(`p`, { children: [
					`Sekcje i linki przyjmują `,
					(0, f.jsx)(`code`, { children: `count` }),
					` i `,
					(0, f.jsx)(`code`, { children: `countLabel` }),
					`. Czytnik ekranu odczytuje etykietę słowami, na przykład „Zamówienia, 4 nowe”, nigdy samą liczbę. Liczba jest pokazana jako plakietka i nigdy nie jest jedynym sygnałem: znaczenie niosą słowa, nie kolor.`
				] }) }), (0, f.jsx)(l, {
					language: `tsx`,
					code: `{ href: '/orders', label: 'Zamówienia', count: 4, countLabel: '4 nowe' }`
				})]
			}),
			(0, f.jsxs)(u, {
				id: `keyboard`,
				title: `Klawiatura i czytnik ekranu`,
				children: [(0, f.jsxs)(n, {
					label: `Mapa klawiszy`,
					children: [
						(0, f.jsx)(`caption`, {
							className: `sr-only`,
							children: `Mapa klawiszy panelu bocznego`
						}),
						(0, f.jsx)(`thead`, { children: (0, f.jsxs)(`tr`, { children: [
							(0, f.jsx)(`th`, {
								scope: `col`,
								children: `Gdzie`
							}),
							(0, f.jsx)(`th`, {
								scope: `col`,
								children: `Klawisze`
							}),
							(0, f.jsx)(`th`, {
								scope: `col`,
								children: `Co się dzieje`
							})
						] }) }),
						(0, f.jsx)(`tbody`, { children: _.map(([e, t, n]) => (0, f.jsxs)(`tr`, { children: [
							(0, f.jsx)(`th`, {
								scope: `row`,
								children: e
							}),
							(0, f.jsx)(`td`, { children: t }),
							(0, f.jsx)(`td`, { children: n })
						] }, t)) })
					]
				}), (0, f.jsx)(o, { children: (0, f.jsxs)(`ul`, { children: [
					(0, f.jsxs)(`li`, { children: [
						`Pasek jest nazwaną nawigacją z przyciskami. Każdy przycisk sekcji ma `,
						(0, f.jsx)(`code`, { children: `aria-expanded` }),
						` i `,
						(0, f.jsx)(`code`, { children: `aria-controls` }),
						` wskazujące jego panel.`
					] }),
					(0, f.jsxs)(`li`, { children: [
						`Wiersz z podstronami jest przyciskiem z `,
						(0, f.jsx)(`code`, { children: `aria-expanded` }),
						`, `,
						(0, f.jsx)(`code`, { children: `aria-controls` }),
						` i `,
						(0, f.jsx)(`code`, { children: `aria-haspopup` }),
						`; jego szewron jest dekoracyjny. Rozwinięcie jest nawigacją nazwaną swoim tytułem.`
					] }),
					(0, f.jsxs)(`li`, { children: [
						`Tylko otwarta strona ma `,
						(0, f.jsx)(`code`, { children: `aria-current="page"` }),
						`; wiersze na drodze do niej przyjmują ton akcentu i niczego nie dodają.`
					] }),
					(0, f.jsxs)(`li`, { children: [
						`Panel jest nawigacją nazwaną swoim tytułem. Otwarta strona ma `,
						(0, f.jsx)(`code`, { children: `aria-current="page"` }),
						`.`
					] }),
					(0, f.jsxs)(`li`, { children: [
						`Przy `,
						(0, f.jsx)(`code`, { children: `hideLabels` }),
						` słowa pod ikonami są ukryte, a każdy przycisk pokazuje swoją etykietę w dymku podpowiedzi.`
					] }),
					(0, f.jsx)(`li`, { children: `Każdy cel ma co najmniej 44 px.` })
				] }) })]
			}),
			(0, f.jsx)(u, {
				id: `motion`,
				title: `Ruch`,
				children: (0, f.jsx)(o, { children: (0, f.jsxs)(`p`, { children: [
					`Unoszący się panel i każde rozwinięcie przesuwają się o 8 px i pojawiają przez 180 ms  (`,
					(0, f.jsx)(`code`, { children: `--sk-duration-hover` }),
					`), a ekran na telefonie wsuwa się w tym samym czasie. Przy ograniczonym ruchu pojawiają się i znikają bez przesuwania.`
				] }) })
			}),
			(0, f.jsxs)(u, {
				id: `desktop`,
				title: `W aplikacji desktopowej`,
				children: [
					(0, f.jsx)(o, { children: (0, f.jsxs)(`p`, { children: [
						`W oknie Electrona z ukrytym paskiem tytułu `,
						(0, f.jsx)(`code`, { children: `desktop="mac"` }),
						`, `,
						(0, f.jsx)(`code`, { children: `"windows"` }),
						` albo `,
						(0, f.jsx)(`code`, { children: `"linux"` }),
						` zostawia przeciągalny pas nad paskiem i panelem: 52 px na macOS, na przyciski okna, i 32 px gdzie indziej. `,
						(0, f.jsx)(`code`, { children: `titleBarHeight` }),
						` ustawia inną wysokość. Szare kropki w przykładzie oznaczają przyciski okna macOS.`
					] }) }),
					(0, f.jsx)(r, {
						label: `desktop="mac" z hideLabels`,
						children: (0, f.jsx)(d, {
							desktop: `mac`,
							hideLabels: !0
						})
					}),
					(0, f.jsx)(l, {
						language: `tsx`,
						code: `<SidebarRail desktop="mac" hideLabels sections={sections} current={pathname} labels={labels} />
// main process: new BrowserWindow({ titleBarStyle: 'hiddenInset' })`
					})
				]
			}),
			(0, f.jsxs)(u, {
				id: `do-dont`,
				title: `Rób i nie rób`,
				children: [
					(0, f.jsx)(a, {
						good: (0, f.jsx)(`p`, {
							className: `text-body`,
							children: `Zamówienia`
						}),
						goodText: `Utrzymuj etykiety do jednego słowa, żeby mieściły się pod ikoną w 72 px.`,
						bad: (0, f.jsx)(`p`, {
							className: `text-body`,
							children: `Zamówienia i realizacja`
						}),
						badText: `Używaj długiej etykiety, która się zawija albo jest ucięta.`
					}),
					(0, f.jsx)(a, {
						good: (0, f.jsx)(`p`, {
							className: `text-body`,
							children: `Sprzedaż, Produkty, a Warianty w rozwinięciu z boku`
						}),
						goodText: `Otwieraj głębsze strony w bok, w rozwinięciu na wysokości wiersza.`,
						bad: (0, f.jsx)(`p`, {
							className: `text-body`,
							children: `Produkty z Wariantami wypisanymi pod spodem`
						}),
						badText: `Rozwijaj listę w dół pod jej rodzicem.`
					}),
					(0, f.jsx)(a, {
						good: (0, f.jsx)(`p`, {
							className: `text-body`,
							children: `Zwykłe nagłówki: Zamówienia, Katalog`
						}),
						goodText: `Grupuj linki pod zwykłymi nagłówkami, które są zawsze widoczne.`,
						bad: (0, f.jsx)(`p`, {
							className: `text-body`,
							children: `Nagłówek Katalog, który się zwija`
						}),
						badText: `Zwijaj grupy.`
					}),
					(0, f.jsx)(a, {
						good: (0, f.jsx)(`p`, {
							className: `text-body`,
							children: `Sprzedaż, Produkty, Warianty, a resztę w kartach`
						}),
						goodText: `Zatrzymaj się na trzech poziomach, a głębsze strony przenieś do kart w nagłówku strony.`,
						bad: (0, f.jsx)(`p`, {
							className: `text-body`,
							children: `Sprzedaż, Produkty, Warianty, Opcje, Wartości`
						}),
						badText: `Zagnieżdżaj czwarty poziom.`
					}),
					(0, f.jsx)(a, {
						good: (0, f.jsx)(`p`, {
							className: `text-body`,
							children: `Wypełniona pigułka, grubsza etykieta i aria-current`
						}),
						goodText: `Oznaczaj bieżący element kształtem, grubością i aria-current.`,
						bad: (0, f.jsx)(`p`, {
							className: `text-body`,
							children: `Tylko inny kolor`
						}),
						badText: `Oznaczaj bieżący element samym kolorem.`
					}),
					(0, f.jsx)(a, {
						good: (0, f.jsx)(`p`, {
							className: `text-body`,
							children: `Przełącznik, motyw i menu użytkownika`
						}),
						goodText: `Zostaw pasek na nawigację, plus przełącznik, motyw i menu użytkownika.`,
						bad: (0, f.jsx)(`p`, {
							className: `text-body`,
							children: `Przycisk „Nowe zamówienie” na pasku`
						}),
						badText: `Umieszczaj na pasku akcje, które nie są nawigacją.`
					})
				]
			}),
			(0, f.jsx)(u, {
				id: `adoption`,
				title: `Lista wdrożenia`,
				children: (0, f.jsx)(o, { children: (0, f.jsx)(`ul`, {
					className: `list-none ps-0`,
					children: v.map((e) => (0, f.jsxs)(`li`, {
						className: `flex gap-2`,
						children: [(0, f.jsx)(`span`, {
							"aria-hidden": !0,
							children: `☐`
						}), (0, f.jsx)(`span`, { children: e })]
					}, e))
				}) })
			})
		]
	});
}
export { y as SidebarPatternPl };
