import { S as e, d as t, i as n, o as r, p as i, r as a, s as o, t as s, u as c } from "./doc.D2PtmWN6.js";
import { t as l } from "./Badge.Cwl75Dkx.js";
import { t as u } from "./fonts.B-FXkai-.js";
import { t as d } from "./Button.DRxd_7vr.js";
import { t as f } from "./jsx-runtime.yrTYNGQT.js";
var p = f();
function m() {
	return (0, p.jsxs)(a, { children: [
		(0, p.jsx)(o, {
			eyebrow: `Get started`,
			title: `Install and use Skribly UI`,
			lead: `The library is a private package installed from git over SSH. Apps with React use the components; any other page uses the plain CSS. Both read the same tokens.`
		}),
		(0, p.jsxs)(c, {
			id: `requirements`,
			title: `Requirements`,
			children: [(0, p.jsx)(`ul`, {
				className: `grid gap-3 sm:grid-cols-3`,
				children: [
					[`Node 26`, `The package and its build need Node 26 or newer.`],
					[`SSH access`, `A GitHub account with read access to skribly/ui and an SSH key on it.`],
					[`React 19 and Tailwind 4`, `Only for the React layer. The plain CSS needs neither.`]
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
			}), (0, p.jsx)(s, {
				code: `. ~/.nvm/nvm.sh && nvm use 26
ssh -T git@github.com`,
				language: `bash`,
				title: `Check Node and your SSH key`
			})]
		}),
		(0, p.jsxs)(c, {
			id: `install`,
			title: `Install from git over SSH`,
			children: [
				(0, p.jsx)(i, { children: (0, p.jsxs)(`p`, { children: [
					`Add the dependency with the `,
					(0, p.jsx)(`code`, { children: `git+ssh` }),
					` address. The `,
					(0, p.jsx)(`code`, { children: `semver` }),
					` range picks the newest matching tag; until the first tag exists, use `,
					(0, p.jsx)(`code`, { children: `#main` }),
					`.`
				] }) }),
				(0, p.jsx)(s, {
					title: `package.json`,
					language: `json`,
					code: `{
  "dependencies": {
    "@skribly/ui": "git+ssh://git@github.com/skribly/ui.git#semver:^0.1.0"
  }
}`
				}),
				(0, p.jsx)(s, {
					language: `bash`,
					title: `Install`,
					code: `npm install`
				}),
				(0, p.jsxs)(e, {
					tone: `info`,
					toneLabel: `Information`,
					title: `The package builds itself during install`,
					children: [
						(0, p.jsx)(`code`, { children: `dist` }),
						` is not committed. The `,
						(0, p.jsx)(`code`, { children: `prepare` }),
						` script builds it, and npm 11 prints an install-scripts warning while the build still runs. For local work next to this repository, `,
						(0, p.jsx)(`code`, { children: `file:../skriblyUI` }),
						` is a symlink that runs no build, so run `,
						(0, p.jsx)(`code`, { children: `npm install` }),
						` in the library first.`
					]
				})
			]
		}),
		(0, p.jsxs)(c, {
			id: `react`,
			title: `Use in React`,
			children: [
				(0, p.jsxs)(t, {
					title: `1. Import the styles`,
					children: [(0, p.jsx)(i, { children: (0, p.jsxs)(`p`, { children: [
						(0, p.jsx)(`code`, { children: `styles.css` }),
						` holds the tokens, the Tailwind mapping, the page defaults, the plain classes and the `,
						(0, p.jsx)(`code`, { children: `@source` }),
						` that shows Tailwind the built components.`
					] }) }), (0, p.jsx)(s, {
						title: `app.css`,
						language: `css`,
						code: `@import "tailwindcss";
@import "@skribly/ui/styles.css";`
					})]
				}),
				(0, p.jsxs)(t, {
					title: `2. Set the theme before the first paint`,
					children: [(0, p.jsx)(i, { children: (0, p.jsxs)(`p`, { children: [
						(0, p.jsx)(`code`, { children: `ThemeScript` }),
						` goes first in the head, so a stored dark theme never flashes light. `,
						(0, p.jsx)(`code`, { children: `ThemeProvider` }),
						` keeps the choice and follows the system until the reader picks one.`
					] }) }), (0, p.jsx)(s, {
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
				(0, p.jsxs)(t, {
					title: `3. Use a component`,
					children: [(0, p.jsx)(i, { children: (0, p.jsx)(`p`, { children: `Import from the package root, or from one group to load only that group. Every visible word and every accessible name is a prop.` }) }), (0, p.jsx)(n, {
						label: `A button and a badge`,
						code: `import { Button } from '@skribly/ui/actions'
import { Badge } from '@skribly/ui/feedback'

<Button onPress={save}>{t('save')}</Button>
<Badge tone="ok">{t('status.done')}</Badge>`,
						children: (0, p.jsxs)(`div`, {
							className: `flex flex-wrap items-center gap-3`,
							children: [(0, p.jsx)(d, { children: `Save` }), (0, p.jsx)(l, {
								tone: `ok`,
								children: `Done`
							})]
						})
					})]
				})
			]
		}),
		(0, p.jsxs)(c, {
			id: `plain-css`,
			title: `Use with plain CSS`,
			children: [
				(0, p.jsx)(i, { children: (0, p.jsxs)(`p`, { children: [
					`Pages with no React and no Tailwind, such as an Astro site or a single HTML file, import `,
					(0, p.jsx)(`code`, { children: `plain.css` }),
					`. Everything sits in cascade layers, so the page’s own CSS wins without specificity fights.`
				] }) }),
				(0, p.jsx)(s, {
					title: `site.css`,
					language: `css`,
					code: `@import "@skribly/ui/plain.css";`
				}),
				(0, p.jsx)(n, {
					label: `Plain HTML`,
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
				(0, p.jsx)(i, { children: (0, p.jsxs)(`p`, { children: [
					`Every class is on the `,
					(0, p.jsx)(`a`, {
						href: `/plain-css/`,
						children: `plain CSS`
					}),
					` page.`
				] }) })
			]
		}),
		(0, p.jsxs)(c, {
			id: `fonts`,
			title: `Fonts`,
			children: [
				(0, p.jsx)(i, { children: (0, p.jsx)(`p`, { children: `The library names its fonts in the tokens and loads none, so each app decides where they come from. Inter is the interface face, JetBrains Mono the code face and Bricolage Grotesque the display face. Each stack falls back to system fonts.` }) }),
				(0, p.jsx)(s, {
					title: `index.html`,
					language: `html`,
					code: `<link rel="preconnect" href="https://fonts.bunny.net" />\n<link rel="stylesheet" href="${u}" />`
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
		(0, p.jsx)(c, {
			id: `next`,
			title: `Next steps`,
			children: (0, p.jsxs)(`ul`, {
				className: `grid gap-4 md:grid-cols-2`,
				children: [(0, p.jsx)(`li`, {
					className: `flex`,
					children: (0, p.jsx)(r, {
						to: `/principles/`,
						title: `Read the principles`,
						children: `The six rules that keep every component consistent.`
					})
				}), (0, p.jsx)(`li`, {
					className: `flex`,
					children: (0, p.jsx)(r, {
						to: `/components/`,
						title: `Browse the components`,
						children: `Live demos, code to copy and accessibility notes.`
					})
				})]
			})
		})
	] });
}
export { m as Start };
