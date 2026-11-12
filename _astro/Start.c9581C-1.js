import { t as e } from "./Button.DRxd_7vr.js";
import { S as t, d as n, i as r, o as i, p as a, r as o, s, t as c, u as l } from "./doc.D2PtmWN6.js";
import { t as u } from "./Badge.Cwl75Dkx.js";
import { t as d } from "./fonts.B-FXkai-.js";
import { t as f } from "./jsx-runtime.yrTYNGQT.js";
var p = f();
function m() {
	return (0, p.jsxs)(o, {
		lang: `pl`,
		children: [
			(0, p.jsx)(s, {
				eyebrow: `Pierwsze kroki`,
				title: `Zainstaluj i używaj Skribly UI`,
				lead: `Biblioteka jest prywatnym pakietem instalowanym z gita przez SSH. Aplikacje z Reactem używają komponentów; każda inna strona używa czystego CSS. Oba czytają te same tokeny.`
			}),
			(0, p.jsxs)(l, {
				id: `requirements`,
				title: `Wymagania`,
				children: [(0, p.jsx)(`ul`, {
					className: `grid gap-3 sm:grid-cols-3`,
					children: [
						[`Node 26`, `Pakiet i jego build wymagają Node 26 lub nowszego.`],
						[`Dostęp przez SSH`, `Konto GitHub z prawem odczytu do skribly/ui i klucz SSH dodany do tego konta.`],
						[`React 19 i Tailwind 4`, `Tylko dla warstwy React. Czysty CSS nie potrzebuje żadnego z nich.`]
					].map(([e, t]) => (0, p.jsxs)(`li`, {
						className: `rounded-xl border border-border bg-surface p-4`,
						children: [(0, p.jsx)(`p`, {
							className: `font-semibold text-fg`,
							children: e
						}), (0, p.jsx)(`p`, {
							className: `mt-1 text-body text-muted`,
							children: t
						})]
					}, e))
				}), (0, p.jsx)(c, {
					code: `. ~/.nvm/nvm.sh && nvm use 26
ssh -T git@github.com`,
					language: `bash`,
					title: `Sprawdź Node i swój klucz SSH`
				})]
			}),
			(0, p.jsxs)(l, {
				id: `install`,
				title: `Instalacja z gita przez SSH`,
				children: [
					(0, p.jsx)(a, { children: (0, p.jsxs)(`p`, { children: [
						`Dodaj zależność z adresem `,
						(0, p.jsx)(`code`, { children: `git+ssh` }),
						`. Zakres `,
						(0, p.jsx)(`code`, { children: `semver` }),
						` wybiera najnowszy pasujący tag; dopóki pierwszy tag nie istnieje, użyj `,
						(0, p.jsx)(`code`, { children: `#main` }),
						`.`
					] }) }),
					(0, p.jsx)(c, {
						title: `package.json`,
						language: `json`,
						code: `{
  "dependencies": {
    "@skribly/ui": "git+ssh://git@github.com/skribly/ui.git#semver:^0.1.0"
  }
}`
					}),
					(0, p.jsx)(c, {
						language: `bash`,
						title: `Instalacja`,
						code: `npm install`
					}),
					(0, p.jsxs)(t, {
						tone: `info`,
						toneLabel: `Informacja`,
						title: `Pakiet buduje się sam podczas instalacji`,
						children: [
							`Katalog `,
							(0, p.jsx)(`code`, { children: `dist` }),
							` nie jest w repozytorium. Skrypt `,
							(0, p.jsx)(`code`, { children: `prepare` }),
							` go buduje, a npm 11 wypisuje ostrzeżenie o skryptach instalacji, choć build nadal się wykonuje. Do pracy lokalnej obok tego repozytorium `,
							(0, p.jsx)(`code`, { children: `file:../skriblyUI` }),
							` jest dowiązaniem, które nie uruchamia buildu, więc najpierw wykonaj `,
							(0, p.jsx)(`code`, { children: `npm install` }),
							` w bibliotece.`
						]
					})
				]
			}),
			(0, p.jsxs)(l, {
				id: `react`,
				title: `Użycie w Reakcie`,
				children: [
					(0, p.jsxs)(n, {
						title: `1. Zaimportuj style`,
						children: [(0, p.jsx)(a, { children: (0, p.jsxs)(`p`, { children: [
							(0, p.jsx)(`code`, { children: `styles.css` }),
							` zawiera tokeny, mapowanie Tailwinda, domyślne style strony, klasy czystego CSS oraz `,
							(0, p.jsx)(`code`, { children: `@source` }),
							`, który pokazuje Tailwindowi zbudowane komponenty.`
						] }) }), (0, p.jsx)(c, {
							title: `app.css`,
							language: `css`,
							code: `@import "tailwindcss";
@import "@skribly/ui/styles.css";`
						})]
					}),
					(0, p.jsxs)(n, {
						title: `2. Ustaw motyw przed pierwszym wyrenderowaniem`,
						children: [(0, p.jsx)(a, { children: (0, p.jsxs)(`p`, { children: [
							(0, p.jsx)(`code`, { children: `ThemeScript` }),
							` idzie pierwszy w `,
							(0, p.jsx)(`code`, { children: `head` }),
							`, więc zapisany motyw nocny nigdy nie błyśnie jasnym tłem. `,
							(0, p.jsx)(`code`, { children: `ThemeProvider` }),
							` zapamiętuje wybór i podąża za systemem, dopóki czytelnik nie wybierze motywu.`
						] }) }), (0, p.jsx)(c, {
							title: `layout.tsx`,
							language: `tsx`,
							code: `import { ThemeProvider, ThemeScript } from '@skribly/ui/theme'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}`
						})]
					}),
					(0, p.jsxs)(n, {
						title: `3. Użyj komponentu`,
						children: [(0, p.jsx)(a, { children: (0, p.jsx)(`p`, { children: `Importuj z korzenia pakietu albo z jednej grupy, aby załadować tylko tę grupę. Każde widoczne słowo i każda nazwa dostępna jest propem.` }) }), (0, p.jsx)(r, {
							label: `Przycisk i plakietka`,
							code: `import { Button } from '@skribly/ui/actions'
import { Badge } from '@skribly/ui/feedback'

<Button onPress={save}>{t('save')}</Button>
<Badge tone="ok">{t('status.done')}</Badge>`,
							children: (0, p.jsxs)(`div`, {
								className: `flex flex-wrap items-center gap-3`,
								children: [(0, p.jsx)(e, { children: `Save` }), (0, p.jsx)(u, {
									tone: `ok`,
									children: `Done`
								})]
							})
						})]
					})
				]
			}),
			(0, p.jsxs)(l, {
				id: `plain-css`,
				title: `Użycie z czystym CSS`,
				children: [
					(0, p.jsx)(a, { children: (0, p.jsxs)(`p`, { children: [
						`Strony bez Reacta i bez Tailwinda, takie jak strona Astro albo pojedynczy plik HTML, importują `,
						(0, p.jsx)(`code`, { children: `plain.css` }),
						`. Wszystko leży w warstwach kaskady, więc własny CSS strony ma pierwszeństwo bez walki o specyficzność.`
					] }) }),
					(0, p.jsx)(c, {
						title: `site.css`,
						language: `css`,
						code: `@import "@skribly/ui/plain.css";`
					}),
					(0, p.jsx)(r, {
						label: `Zwykły HTML`,
						language: `html`,
						code: `<button class="sk-button">Save</button>
<button class="sk-button sk-button--outline">Cancel</button>
<span class="sk-badge sk-badge--ok">Done</span>`,
						children: (0, p.jsxs)(`div`, {
							className: `flex flex-wrap items-center gap-3`,
							children: [
								(0, p.jsx)(`button`, {
									type: `button`,
									className: `sk-button`,
									children: `Save`
								}),
								(0, p.jsx)(`button`, {
									type: `button`,
									className: `sk-button sk-button--outline`,
									children: `Cancel`
								}),
								(0, p.jsx)(`span`, {
									className: `sk-badge sk-badge--ok`,
									children: `Done`
								})
							]
						})
					}),
					(0, p.jsx)(a, { children: (0, p.jsxs)(`p`, { children: [
						`Każda klasa jest na stronie `,
						(0, p.jsx)(`a`, {
							href: `/pl/plain-css/`,
							children: `Czysty CSS`
						}),
						`.`
					] }) })
				]
			}),
			(0, p.jsxs)(l, {
				id: `fonts`,
				title: `Fonty`,
				children: [
					(0, p.jsx)(a, { children: (0, p.jsx)(`p`, { children: `Biblioteka nazywa swoje fonty w tokenach i żadnego nie ładuje, więc każda aplikacja sama decyduje, skąd one pochodzą. Inter jest krojem interfejsu, JetBrains Mono krojem kodu, a Bricolage Grotesque krojem nagłówków. Każdy stos wraca do fontów systemowych.` }) }),
					(0, p.jsx)(c, {
						title: `index.html`,
						language: `html`,
						code: `<link rel="preconnect" href="https://fonts.bunny.net" />\n<link rel="stylesheet" href="${d}" />`
					}),
					(0, p.jsxs)(`div`, {
						className: `grid gap-3 sm:grid-cols-3`,
						children: [
							(0, p.jsxs)(`div`, {
								className: `rounded-xl border border-border bg-surface p-4`,
								children: [(0, p.jsx)(`p`, {
									className: `font-sans text-[1.75rem] font-semibold`,
									children: `Aa`
								}), (0, p.jsx)(`p`, {
									className: `text-caption text-muted`,
									children: `Inter · --sk-font-sans`
								})]
							}),
							(0, p.jsxs)(`div`, {
								className: `rounded-xl border border-border bg-surface p-4`,
								children: [(0, p.jsx)(`p`, {
									className: `font-mono text-[1.75rem]`,
									children: `Aa`
								}), (0, p.jsx)(`p`, {
									className: `text-caption text-muted`,
									children: `JetBrains Mono · --sk-font-mono`
								})]
							}),
							(0, p.jsxs)(`div`, {
								className: `rounded-xl border border-border bg-surface p-4`,
								children: [(0, p.jsx)(`p`, {
									className: `font-display text-[1.75rem] font-extrabold`,
									children: `Aa`
								}), (0, p.jsx)(`p`, {
									className: `text-caption text-muted`,
									children: `Bricolage Grotesque · --sk-font-display`
								})]
							})
						]
					})
				]
			}),
			(0, p.jsx)(l, {
				id: `next`,
				title: `Następne kroki`,
				children: (0, p.jsxs)(`ul`, {
					className: `grid gap-4 md:grid-cols-2`,
					children: [(0, p.jsx)(`li`, {
						className: `flex`,
						children: (0, p.jsx)(i, {
							to: `/pl/principles/`,
							title: `Przeczytaj zasady`,
							children: `Sześć zasad, które utrzymują spójność każdego komponentu.`
						})
					}), (0, p.jsx)(`li`, {
						className: `flex`,
						children: (0, p.jsx)(i, {
							to: `/pl/components/`,
							title: `Przeglądaj komponenty`,
							children: `Przykłady na żywo, kod do skopiowania i notatki o dostępności.`
						})
					})]
				})
			})
		]
	});
}
export { m as StartPl };
