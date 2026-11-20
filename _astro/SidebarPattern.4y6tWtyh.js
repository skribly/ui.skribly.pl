import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { _ as n, d as r, g as i, ut as a, y as o } from "./useOverflow.Dq483xd0.js";
import { t as s } from "./Avatar.wh0ZYI0r.js";
import { t as c } from "./Logo.TNW2dPFd.js";
import { t as l } from "./LinkTabs.F2ZXJHN-.js";
import { a as u, t as d } from "./MenuItem.BpnCl8UA.js";
import { c as f, n as p, r as m, t as h } from "./SidebarRail.DigouHmZ.js";
import { a as g, d as _, f as v, i as y, n as b, p as x, r as S, s as C, t as w, u as T } from "./doc.CpwJe6Re.js";
var E = e(t(), 1), D = i(), O = `inline-flex size-11 cursor-pointer items-center justify-center rounded-lg text-muted outline-none data-hovered:bg-hover data-hovered:text-fg data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-focus-visible:outline-solid`, k = {
	en: {
		labels: {
			rail: `Sections`,
			pin: `Keep the panel open`,
			collapse: `Collapse to the rail`,
			expand: `Expand the panel`,
			filterLabel: (e) => `Filter ${e}`,
			filterPlaceholder: `Filter`,
			noMatches: `No page matches.`,
			currentSection: `holds the open page`,
			back: `All sections`,
			backTo: (e) => `Back to ${e}`,
			close: `Close navigation`
		},
		inDesktop: ` in the desktop app`,
		inPhone: ` on a phone`,
		inCompact: ` compact`,
		skip: `Skip to content`,
		skipNav: `Skip to navigation`,
		menu: `Open navigation`,
		site: `Switch site`,
		sites: [`Main site`, `Documentation`],
		theme: `Theme`,
		account: `Account`,
		content: `Content`,
		lead: `Pages with a chevron open one level further to the side.`,
		tabs: [`All`, `Active`],
		sections: {
			home: `Home`,
			content: `Content`,
			commerce: `Commerce`,
			insights: `Insights`,
			settings: `Settings`
		},
		groups: {
			library: `Library`,
			sales: `Sales`
		},
		links: {
			pages: `Pages`,
			articles: `Articles`,
			categories: `Categories`,
			tags: `Tags`,
			media: `Media`,
			orders: `Orders`,
			returns: `Returns`,
			invoices: `Invoices`,
			products: `Products`,
			variants: `Variants`,
			attributes: `Attributes`,
			brands: `Brands`,
			customers: `Customers`,
			overview: `Overview`,
			reports: `Reports`,
			site: `Site`,
			domains: `Domains`,
			languages: `Languages`,
			users: `Users`,
			roles: `Roles`
		},
		fresh: `4 new`
	},
	pl: {
		labels: {
			rail: `Sekcje`,
			pin: `Zostaw panel otwarty`,
			collapse: `Zwiń do paska`,
			expand: `Rozwiń panel`,
			filterLabel: (e) => `Filtruj: ${e}`,
			filterPlaceholder: `Filtruj`,
			noMatches: `Żadna strona nie pasuje.`,
			currentSection: `zawiera otwartą stronę`,
			back: `Wszystkie sekcje`,
			backTo: (e) => `Wróć do: ${e}`,
			close: `Zamknij nawigację`
		},
		inDesktop: ` w aplikacji na komputer`,
		inPhone: ` na telefonie`,
		inCompact: ` zwarty`,
		skip: `Przejdź do treści`,
		skipNav: `Przejdź do nawigacji`,
		menu: `Otwórz nawigację`,
		site: `Zmień witrynę`,
		sites: [`Główna witryna`, `Dokumentacja`],
		theme: `Motyw`,
		account: `Konto`,
		content: `Treść`,
		lead: `Strony ze strzałką otwierają kolejny poziom dalej w bok.`,
		tabs: [`Wszystkie`, `Aktywne`],
		sections: {
			home: `Start`,
			content: `Treści`,
			commerce: `Sprzedaż`,
			insights: `Statystyki`,
			settings: `Ustawienia`
		},
		groups: {
			library: `Biblioteka`,
			sales: `Zamówienia`
		},
		links: {
			pages: `Strony`,
			articles: `Artykuły`,
			categories: `Kategorie`,
			tags: `Tagi`,
			media: `Media`,
			orders: `Zamówienia`,
			returns: `Zwroty`,
			invoices: `Faktury`,
			products: `Produkty`,
			variants: `Warianty`,
			attributes: `Atrybuty`,
			brands: `Marki`,
			customers: `Klienci`,
			overview: `Przegląd`,
			reports: `Raporty`,
			site: `Witryna`,
			domains: `Domeny`,
			languages: `Języki`,
			users: `Użytkownicy`,
			roles: `Role`
		},
		fresh: `4 nowe`
	}
};
function A(e) {
	return [
		{
			id: `home`,
			label: e.sections.home,
			icon: (0, D.jsx)(r, { name: `nav.home` }),
			href: `/home`
		},
		{
			id: `content`,
			label: e.sections.content,
			icon: (0, D.jsx)(r, { name: `file.document` }),
			groups: [{
				label: e.groups.library,
				links: [
					{
						href: `/pages`,
						label: e.links.pages,
						icon: (0, D.jsx)(r, { name: `file.document` })
					},
					{
						href: `/articles`,
						label: e.links.articles,
						icon: (0, D.jsx)(r, { name: `content.post` }),
						children: [{
							href: `/articles/categories`,
							label: e.links.categories,
							icon: (0, D.jsx)(r, { name: `content.category` })
						}, {
							href: `/articles/tags`,
							label: e.links.tags,
							icon: (0, D.jsx)(r, { name: `vcs.tag` })
						}]
					},
					{
						href: `/media`,
						label: e.links.media,
						icon: (0, D.jsx)(r, { name: `file.image` })
					}
				]
			}]
		},
		{
			id: `commerce`,
			label: e.sections.commerce,
			icon: (0, D.jsx)(r, { name: `content.product` }),
			count: 4,
			countLabel: e.fresh,
			groups: [{
				label: e.groups.sales,
				links: [
					{
						href: `/orders`,
						label: e.links.orders,
						icon: (0, D.jsx)(r, { name: `nav.inbox` }),
						count: 4,
						countLabel: e.fresh,
						children: [{
							href: `/orders/returns`,
							label: e.links.returns,
							icon: (0, D.jsx)(r, { name: `action.refresh` })
						}, {
							href: `/orders/invoices`,
							label: e.links.invoices,
							icon: (0, D.jsx)(r, { name: `file.document` })
						}]
					},
					{
						href: `/products`,
						label: e.links.products,
						icon: (0, D.jsx)(r, { name: `content.product` }),
						children: [
							{
								href: `/products/variants`,
								label: e.links.variants,
								icon: (0, D.jsx)(r, { name: `layout.list` })
							},
							{
								href: `/products/attributes`,
								label: e.links.attributes,
								icon: (0, D.jsx)(r, { name: `content.hash` })
							},
							{
								href: `/products/brands`,
								label: e.links.brands,
								icon: (0, D.jsx)(r, { name: `content.category` })
							}
						]
					},
					{
						href: `/customers`,
						label: e.links.customers,
						icon: (0, D.jsx)(r, { name: `user.team` })
					}
				]
			}]
		},
		{
			id: `insights`,
			label: e.sections.insights,
			icon: (0, D.jsx)(r, { name: `nav.analytics` }),
			groups: [{ links: [{
				href: `/overview`,
				label: e.links.overview,
				icon: (0, D.jsx)(r, { name: `nav.dashboard` })
			}, {
				href: `/reports`,
				label: e.links.reports,
				icon: (0, D.jsx)(r, { name: `nav.reports` })
			}] }]
		},
		{
			id: `settings`,
			label: e.sections.settings,
			icon: (0, D.jsx)(r, { name: `nav.settings` }),
			groups: [{ links: [{
				href: `/site`,
				label: e.links.site,
				icon: (0, D.jsx)(r, { name: `nav.web` }),
				children: [{
					href: `/site/domains`,
					label: e.links.domains,
					icon: (0, D.jsx)(r, { name: `nav.web` })
				}, {
					href: `/site/languages`,
					label: e.links.languages,
					icon: (0, D.jsx)(r, { name: `nav.languages` })
				}]
			}, {
				href: `/users`,
				label: e.links.users,
				icon: (0, D.jsx)(r, { name: `user.team` }),
				children: [{
					href: `/users/roles`,
					label: e.links.roles,
					icon: (0, D.jsx)(r, { name: `user.roles` })
				}]
			}] }]
		}
	];
}
function j({ desktop: e, hideLabels: t = !1, docked: i = !1, phone: _ = !1, storageKey: v = null, height: y = `min(46rem, calc(100dvh - 7rem))` }) {
	let b = k[(0, E.useContext)(g) === `pl` ? `pl` : `en`], x = e ? b.inDesktop : _ ? b.inPhone : i ? `` : b.inCompact, S = {
		...b.labels,
		rail: `${b.labels.rail}${x}`
	}, C = A(b), [w, T] = (0, E.useState)(e ? `/overview` : `/products/variants`), [j, M] = (0, E.useState)(null);
	return (0, D.jsx)(a, {
		navigate: T,
		children: (0, D.jsx)(`div`, {
			ref: M,
			className: n(`relative overflow-hidden rounded-lg border border-border`, _ && `w-[24rem] max-w-full`),
			style: { height: y },
			children: (0, D.jsx)(f, {
				embedded: !0,
				skipLinkLabel: b.skip,
				skipToNavLabel: b.skipNav,
				sidebar: (0, D.jsx)(h, {
					sections: C,
					current: w,
					labels: S,
					storageKey: v,
					defaultDocked: i,
					container: j,
					hideLabels: t,
					desktop: e,
					top: (0, D.jsxs)(u, {
						container: j,
						placement: `end top`,
						trigger: (0, D.jsx)(o, {
							"aria-label": b.site,
							className: O,
							children: (0, D.jsx)(c, {
								size: 28,
								kind: `tracker`
							})
						}),
						children: [(0, D.jsx)(d, {
							id: `main`,
							children: b.sites[0]
						}), (0, D.jsx)(d, {
							id: `docs`,
							children: b.sites[1]
						})]
					}),
					bottom: (0, D.jsxs)(D.Fragment, { children: [(0, D.jsx)(o, {
						"aria-label": b.theme,
						className: O,
						children: (0, D.jsx)(r, {
							name: `theme.dark`,
							"aria-hidden": !0,
							className: `size-5`
						})
					}), (0, D.jsxs)(o, {
						className: O,
						children: [(0, D.jsx)(s, {
							name: `Ada Lovelace`,
							size: `sm`,
							decorative: !0
						}), (0, D.jsx)(`span`, {
							className: `sr-only`,
							children: b.account
						})]
					})] })
				}),
				topbar: (0, D.jsx)(m, { menuLabel: b.menu }),
				children: (0, D.jsxs)(p, {
					label: `${b.content}${x}`,
					children: [
						(0, D.jsx)(`h2`, {
							className: `text-title font-semibold`,
							children: b.links.variants
						}),
						(0, D.jsx)(`p`, {
							className: `text-body text-muted`,
							children: b.lead
						}),
						(0, D.jsx)(l, {
							label: `${b.links.variants}${x}`,
							currentId: `all`,
							className: `mt-4`,
							items: [{
								id: `all`,
								href: `/products/variants`,
								label: b.tabs[0] ?? ``
							}, {
								id: `active`,
								href: `/products/variants`,
								label: b.tabs[1] ?? ``
							}]
						})
					]
				})
			})
		})
	});
}
var M = [
	[`Compact (default)`, `Only the 72 px rail shows and the content has the full width. Pick a section to open its panel.`],
	[`Floating panel`, `A section opens its 240 px panel to the side of the rail, over the content. It opens on a click, Enter, Space or the right arrow, and previews after a 150 ms mouse hover. It closes on a click outside, Esc or a choice of a page.`],
	[`Docked`, `The pin button in the panel header docks the panel beside the content, and it keeps its place. The round button on the edge of the sidebar, or the [ key, folds it back to the rail and docks it again; the content slides along over 180 ms. The choice and the last section are remembered under the storageKey. Flyouts still float.`],
	[`Second level`, `A page with children is a row with a chevron. It opens a 240 px flyout further to the side of the panel, with its top lined up with the row. The flyout starts with a link to the parent page.`],
	[`Third level`, `A row of a flyout may have children too, and they open one more flyout to the side the same way. A fourth level is not supported.`],
	[`Phone drawer`, `Below 48rem the rail becomes one modal drawer behind the menu button. Each level is a screen that slides in from the side, with a back row named by labels.backTo, such as "Back to Commerce". Nothing expands in place.`]
], N = [
	[
		`Home`,
		`nav.home`,
		`The landing page of the app: a summary, what needs attention, shortcuts. A plain link, with no panel.`
	],
	[
		`Content`,
		`file.document`,
		`What the app holds and the user writes or edits: pages, posts, media, projects, documents.`
	],
	[
		`Commerce`,
		`content.product`,
		`Anything that is sold or fulfilled: products, orders, customers, returns. Leave it out of apps with no such features.`
	],
	[
		`Marketing`,
		`ai.sparkles`,
		`Reaching people: newsletters, campaigns, search appearance, social posts.`
	],
	[
		`Insights`,
		`nav.analytics`,
		`Reading how things go: overview, traffic, reports, logs.`
	],
	[
		`Settings`,
		`nav.settings`,
		`Configuration of the app or site: general, integrations, members and roles, billing, advanced.`
	]
], P = [
	[
		`Agent (desktop app)`,
		`Home`,
		`Skills, sessions`,
		`None`,
		`None`,
		`Run history, usage`,
		`Models, folders, account`
	],
	[
		`Content panel`,
		`Home`,
		`Pages, posts, media`,
		`Orders, products (when enabled)`,
		`Newsletter, search appearance`,
		`Traffic, reports`,
		`Site, members, integrations`
	],
	[
		`Tracker`,
		`Home`,
		`Projects, issues, boards`,
		`None`,
		`None`,
		`Burndown, velocity, reports`,
		`Workspace, members, labels`
	],
	[
		`Hub`,
		`Home`,
		`Apps, projects`,
		`None`,
		`None`,
		`Activity of the apps`,
		`Account, team, tokens`
	],
	[
		`Id`,
		`Home`,
		`None`,
		`None`,
		`None`,
		`Sign-in activity`,
		`Profile, sign-in, devices`
	]
], F = [
	`home`,
	`content`,
	`commerce`,
	`marketing`,
	`insights`,
	`settings`
], I = [
	[
		`Rail`,
		`Up, Down, Home, End`,
		`Move between the rail buttons. Focus does not wrap.`
	],
	[
		`Rail`,
		`Enter, Space or Right`,
		`Open the panel of the section and move focus to the open page, or to the first link.`
	],
	[
		`Panel or flyout`,
		`Right, Enter or Space on a row with a chevron`,
		`Open its side level and move focus to the first link of that level.`
	],
	[
		`Panel or flyout`,
		`Left or Esc`,
		`Close this level and return focus to the row or the rail button that opened it. Esc on the rail closes a floating panel.`
	],
	[
		`Panel or flyout`,
		`Up, Down, Home, End`,
		`Move between the links inside one level, and from the filter field to the first link.`
	],
	[
		`Panel`,
		`Type in the filter field`,
		`Narrows the links by label and keywords; accents are ignored. An empty result is announced.`
	],
	[
		`Page`,
		`[`,
		`Fold the docked panel to the rail, or dock it again. It works outside text fields; the button on the edge of the sidebar does the same and shows the key in its tooltip. The choice is remembered.`
	],
	[
		`Page`,
		`Tab`,
		`Order: skip links (to the navigation and to the content), the rail buttons, the open level, the content. Each rail button is a Tab stop; the arrow keys are the faster way between them, and the skip link jumps past the rail.`
	]
], L = [
	`Sections are mapped to the six groups, in the standard order, and the groups the app does not need are left out.`,
	`Every icon is a registry name through Icon, in the three tones.`,
	`Labels, the labels prop, aria-labels and countLabel are props in English and Polish, with nothing built into the app shell.`,
	`Counts have a countLabel that reads as words.`,
	`storageKey is set per app, so apps on one domain do not share a choice.`,
	`The Agent passes desktop and a title bar matching its window setting.`,
	`Deeper pages open to the side as children of their parent row: no list expands downward, no group collapses, and there is no fourth level.`,
	`Every parent row has its own page, and labels.backTo is set so the phone drawer names where each back row returns to.`,
	`The Laravel panel follows .docs/how-to/adopt-the-sidebar.md.`
];
function R() {
	return (0, D.jsxs)(S, { children: [
		(0, D.jsx)(C, {
			eyebrow: `Patterns`,
			title: `Sidebar`,
			lead: `One sidebar for every Skribly app: the Agent desktop app, the content panel, Tracker, Hub and Id. A narrow rail of sections, a panel of their pages and flyouts that open to the side, never downward, built to WCAG 2.2 AA as a target.`
		}),
		(0, D.jsxs)(T, {
			id: `anatomy`,
			title: `Anatomy`,
			children: [
				(0, D.jsxs)(x, { children: [(0, D.jsxs)(`p`, { children: [
					`The `,
					(0, D.jsx)(`code`, { children: `SidebarRail` }),
					` has four parts. The rail is 72 px wide, with an icon and a short label per section. The side panel is 240 px wide and lists the pages of the open section under plain headings. A page with children is a row with a chevron, and its pages open in a flyout, also 240 px wide, further to the side and lined up with the row; a third level opens the same way. Nothing ever expands downward. The site or workspace switcher sits on top of the rail; the theme and the user menu sit at the bottom.`
				] }), (0, D.jsx)(`p`, { children: `The demo below is docked and stands on Commerce, Products, Variants, so the path to the open page is highlighted through every level. Point at Products, or press Enter on it, to see the flyout.` })] }),
				(0, D.jsx)(y, {
					label: `Docked: rail, panel and the flyout of Products`,
					children: (0, D.jsx)(j, {
						docked: !0,
						storageKey: `sk-pattern-sidebar`
					})
				}),
				(0, D.jsx)(w, {
					language: `tsx`,
					code: `<SidebarRail
  sections={[
    {
      id: 'commerce',
      label: 'Commerce',
      icon: <Icon name="content.product" />,
      groups: [
        {
          label: 'Sales',
          links: [
            {
              href: '/products',
              label: 'Products',
              children: [
                { href: '/products/variants', label: 'Variants' },
                { href: '/products/brands', label: 'Brands' }
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
		(0, D.jsxs)(T, {
			id: `cascade`,
			title: `The cascade to the side`,
			children: [(0, D.jsx)(x, { children: (0, D.jsxs)(`ul`, { children: [
				(0, D.jsxs)(`li`, { children: [
					`The rail opens the panel at `,
					(0, D.jsx)(`code`, { children: `72` }),
					` px from the start edge, a flyout opens at `,
					(0, D.jsx)(`code`, { children: `312` }),
					` px, and a third level at `,
					(0, D.jsx)(`code`, { children: `552` }),
					` px. Each overlaps the border before it by 1 px.`
				] }),
				(0, D.jsx)(`li`, { children: `The top of a flyout is lined up with the top of the row that opened it, and moves up only as far as it needs to stay inside the sidebar. A taller flyout scrolls inside.` }),
				(0, D.jsx)(`li`, { children: `Opening a level never moves a row of the level that holds its parent.` }),
				(0, D.jsx)(`li`, { children: `Hover intent: with a mouse, a section or a row opens its level after 150 ms of hovering, so a pointer passing over the rows does not flash levels open.` }),
				(0, D.jsx)(`li`, { children: `Safe triangle: while a deeper level is open, moving the pointer diagonally towards it does not switch to the rows it crosses on the way. The switch waits about 300 ms and is cancelled once the pointer enters the level.` }),
				(0, D.jsx)(`li`, { children: `A floating panel and all flyouts close on a click outside, on Esc, when the pointer leaves the whole sidebar, and on a choice of a page.` })
			] }) }), (0, D.jsx)(y, {
				label: `Compact by default: point at Commerce, then at Products`,
				children: (0, D.jsx)(j, {})
			})]
		}),
		(0, D.jsxs)(T, {
			id: `phone`,
			title: `On a phone`,
			children: [(0, D.jsx)(x, { children: (0, D.jsxs)(`p`, { children: [
				`Below 48rem there are no flyouts. The menu button opens one modal drawer whose levels are screens: the sections first, then a section, then the children of a row. A new screen slides in from the side, and every screen but the first starts with a back row that says where it returns to, such as “Back to Commerce”, set by `,
				(0, D.jsx)(`code`, { children: `labels.backTo` }),
				`. The drawer opens on the screen of the open page.`
			] }) }), (0, D.jsx)(y, {
				label: `A 24 rem frame: open the menu`,
				children: (0, D.jsx)(j, {
					phone: !0,
					height: `36rem`
				})
			})]
		}),
		(0, D.jsx)(T, {
			id: `states`,
			title: `States`,
			children: (0, D.jsxs)(v, {
				label: `Sidebar states`,
				children: [
					(0, D.jsx)(`caption`, {
						className: `sr-only`,
						children: `The six states of the sidebar`
					}),
					(0, D.jsx)(`thead`, { children: (0, D.jsxs)(`tr`, { children: [(0, D.jsx)(`th`, {
						scope: `col`,
						children: `State`
					}), (0, D.jsx)(`th`, {
						scope: `col`,
						children: `Behaviour`
					})] }) }),
					(0, D.jsx)(`tbody`, { children: M.map(([e, t]) => (0, D.jsxs)(`tr`, { children: [(0, D.jsx)(`th`, {
						scope: `row`,
						children: e
					}), (0, D.jsx)(`td`, { children: t })] }, e)) })
				]
			})
		}),
		(0, D.jsxs)(T, {
			id: `groups`,
			title: `The six standard groups`,
			children: [
				(0, D.jsx)(x, { children: (0, D.jsx)(`p`, { children: `Every app uses these groups, in this order, so a person who knows one Skribly app finds the same places in the next. An app leaves out the groups it has no features for; it never renames them or reorders them.` }) }),
				(0, D.jsxs)(v, {
					label: `Standard groups`,
					children: [
						(0, D.jsx)(`caption`, {
							className: `sr-only`,
							children: `The six groups, their registry icon and what belongs in each`
						}),
						(0, D.jsx)(`thead`, { children: (0, D.jsxs)(`tr`, { children: [
							(0, D.jsx)(`th`, {
								scope: `col`,
								children: `Group`
							}),
							(0, D.jsx)(`th`, {
								scope: `col`,
								children: `Icon`
							}),
							(0, D.jsx)(`th`, {
								scope: `col`,
								children: `What belongs in it`
							})
						] }) }),
						(0, D.jsx)(`tbody`, { children: N.map(([e, t, n]) => (0, D.jsxs)(`tr`, { children: [
							(0, D.jsx)(`th`, {
								scope: `row`,
								children: e
							}),
							(0, D.jsxs)(`td`, {
								className: `whitespace-nowrap`,
								children: [(0, D.jsx)(r, {
									name: t,
									tone: `brand`,
									className: `me-2 inline-block align-middle`
								}), (0, D.jsx)(`code`, { children: t })]
							}),
							(0, D.jsx)(`td`, { children: n })
						] }, e)) })
					]
				}),
				(0, D.jsxs)(_, {
					title: `How each app maps its sections`,
					children: [(0, D.jsx)(x, { children: (0, D.jsx)(`p`, { children: `An app keeps its own words for pages and features, and places them under the closest group. Where a group does not fit, the rail simply has no such button.` }) }), (0, D.jsxs)(v, {
						label: `Mapping of apps to groups`,
						children: [
							(0, D.jsx)(`caption`, {
								className: `sr-only`,
								children: `Which pages of each app go under which group`
							}),
							(0, D.jsx)(`thead`, { children: (0, D.jsxs)(`tr`, { children: [
								(0, D.jsx)(`th`, {
									scope: `col`,
									children: `App`
								}),
								(0, D.jsx)(`th`, {
									scope: `col`,
									children: `Home`
								}),
								(0, D.jsx)(`th`, {
									scope: `col`,
									children: `Content`
								}),
								(0, D.jsx)(`th`, {
									scope: `col`,
									children: `Commerce`
								}),
								(0, D.jsx)(`th`, {
									scope: `col`,
									children: `Marketing`
								}),
								(0, D.jsx)(`th`, {
									scope: `col`,
									children: `Insights`
								}),
								(0, D.jsx)(`th`, {
									scope: `col`,
									children: `Settings`
								})
							] }) }),
							(0, D.jsx)(`tbody`, { children: P.map(([e, ...t]) => (0, D.jsxs)(`tr`, { children: [(0, D.jsx)(`th`, {
								scope: `row`,
								children: e
							}), t.map((e, t) => (0, D.jsx)(`td`, { children: e }, F[t]))] }, e)) })
						]
					})]
				})
			]
		}),
		(0, D.jsxs)(T, {
			id: `icons`,
			title: `Icons`,
			children: [(0, D.jsx)(x, { children: (0, D.jsxs)(`ul`, { children: [
				(0, D.jsxs)(`li`, { children: [
					`Icons come from the registry only: `,
					(0, D.jsx)(`code`, { children: `<Icon name="nav.home" />` }),
					`. See `,
					(0, D.jsx)(`code`, { children: `.docs/how-to/use-icons.md` }),
					`.`
				] }),
				(0, D.jsxs)(`li`, { children: [
					`Three tones, set by the rail itself, so you pass a plain `,
					(0, D.jsx)(`code`, { children: `Icon` }),
					`: rail icons are `,
					(0, D.jsx)(`code`, { children: `brand` }),
					`, the icon of the current section is `,
					(0, D.jsx)(`code`, { children: `duo` }),
					`, panel link icons are `,
					(0, D.jsx)(`code`, { children: `mono` }),
					` and the icon of the current link is `,
					(0, D.jsx)(`code`, { children: `brand` }),
					`.`
				] }),
				(0, D.jsx)(`li`, { children: `The current item also has a filled pill and a heavier label, so it never depends on colour alone.` })
			] }) }), (0, D.jsx)(w, {
				language: `tsx`,
				code: `{ id: 'commerce', label: 'Commerce', icon: <Icon name="content.product" /> }
{ href: '/orders', label: 'Orders', icon: <Icon name="nav.inbox" /> }`
			})]
		}),
		(0, D.jsxs)(T, {
			id: `counts`,
			title: `Counts and badges`,
			children: [(0, D.jsx)(x, { children: (0, D.jsxs)(`p`, { children: [
				`Sections and links take a `,
				(0, D.jsx)(`code`, { children: `count` }),
				` and a `,
				(0, D.jsx)(`code`, { children: `countLabel` }),
				`. A screen reader hears the label as words, for example “Orders, 4 new”, never a bare number. The number is shown as a badge, and it is never the only signal: the words carry the meaning, not the colour.`
			] }) }), (0, D.jsx)(w, {
				language: `tsx`,
				code: `{ href: '/orders', label: 'Orders', count: 4, countLabel: '4 new' }`
			})]
		}),
		(0, D.jsxs)(T, {
			id: `keyboard`,
			title: `Keyboard and screen reader`,
			children: [(0, D.jsxs)(v, {
				label: `Keyboard map`,
				children: [
					(0, D.jsx)(`caption`, {
						className: `sr-only`,
						children: `The keyboard map of the sidebar`
					}),
					(0, D.jsx)(`thead`, { children: (0, D.jsxs)(`tr`, { children: [
						(0, D.jsx)(`th`, {
							scope: `col`,
							children: `Where`
						}),
						(0, D.jsx)(`th`, {
							scope: `col`,
							children: `Keys`
						}),
						(0, D.jsx)(`th`, {
							scope: `col`,
							children: `What happens`
						})
					] }) }),
					(0, D.jsx)(`tbody`, { children: I.map(([e, t, n]) => (0, D.jsxs)(`tr`, { children: [
						(0, D.jsx)(`th`, {
							scope: `row`,
							children: e
						}),
						(0, D.jsx)(`td`, { children: t }),
						(0, D.jsx)(`td`, { children: n })
					] }, t)) })
				]
			}), (0, D.jsx)(x, { children: (0, D.jsxs)(`ul`, { children: [
				(0, D.jsxs)(`li`, { children: [
					`The rail is a named navigation of buttons. Each section button has `,
					(0, D.jsx)(`code`, { children: `aria-expanded` }),
					` and `,
					(0, D.jsx)(`code`, { children: `aria-controls` }),
					` for its panel.`
				] }),
				(0, D.jsxs)(`li`, { children: [
					`A row with children is a button with `,
					(0, D.jsx)(`code`, { children: `aria-expanded` }),
					`, `,
					(0, D.jsx)(`code`, { children: `aria-controls` }),
					` and `,
					(0, D.jsx)(`code`, { children: `aria-haspopup` }),
					`; its chevron is decorative. A flyout is a navigation named by its title.`
				] }),
				(0, D.jsxs)(`li`, { children: [
					`Only the open page has `,
					(0, D.jsx)(`code`, { children: `aria-current="page"` }),
					`; the rows on the way to it take the accent tone and say nothing extra.`
				] }),
				(0, D.jsxs)(`li`, { children: [
					`The panel is a navigation named by its title. The open page has `,
					(0, D.jsx)(`code`, { children: `aria-current="page"` }),
					`.`
				] }),
				(0, D.jsxs)(`li`, { children: [
					`With `,
					(0, D.jsx)(`code`, { children: `hideLabels` }),
					` the words under the icons are hidden, and each button shows its label as a tooltip.`
				] }),
				(0, D.jsx)(`li`, { children: `Every target is at least 44 px.` })
			] }) })]
		}),
		(0, D.jsx)(T, {
			id: `motion`,
			title: `Motion`,
			children: (0, D.jsx)(x, { children: (0, D.jsxs)(`p`, { children: [
				`A floating panel and every flyout slide 8 px and fade in for 180 ms (`,
				(0, D.jsx)(`code`, { children: `--sk-duration-hover` }),
				`), and a phone screen slides in over the same time. Under reduced motion they appear and disappear with no movement.`
			] }) })
		}),
		(0, D.jsxs)(T, {
			id: `desktop`,
			title: `In a desktop app`,
			children: [
				(0, D.jsx)(x, { children: (0, D.jsxs)(`p`, { children: [
					`In an Electron window with a hidden title bar, `,
					(0, D.jsx)(`code`, { children: `desktop="mac"` }),
					`, `,
					(0, D.jsx)(`code`, { children: `"windows"` }),
					` or `,
					(0, D.jsx)(`code`, { children: `"linux"` }),
					` leaves a draggable strip over the rail and the panel: 52 px on macOS, for the traffic lights, and 32 px elsewhere. `,
					(0, D.jsx)(`code`, { children: `titleBarHeight` }),
					` sets another height. The grey dots in the demo stand for the traffic lights.`
				] }) }),
				(0, D.jsx)(y, {
					label: `desktop="mac" with hideLabels`,
					children: (0, D.jsx)(j, {
						desktop: `mac`,
						hideLabels: !0
					})
				}),
				(0, D.jsx)(w, {
					language: `tsx`,
					code: `<SidebarRail desktop="mac" hideLabels sections={sections} current={pathname} labels={labels} />
// main process: new BrowserWindow({ titleBarStyle: 'hiddenInset' })`
				})
			]
		}),
		(0, D.jsxs)(T, {
			id: `do-dont`,
			title: `Do and don’t`,
			children: [
				(0, D.jsx)(b, {
					good: (0, D.jsx)(`p`, {
						className: `text-body`,
						children: `Orders`
					}),
					goodText: `Keep labels to one word, so they fit under the icon in 72 px.`,
					bad: (0, D.jsx)(`p`, {
						className: `text-body`,
						children: `Orders and fulfilment`
					}),
					badText: `Use a long label that wraps or is cut off.`
				}),
				(0, D.jsx)(b, {
					good: (0, D.jsx)(`p`, {
						className: `text-body`,
						children: `Commerce, Products, then Variants in a flyout to the side`
					}),
					goodText: `Open deeper pages to the side, in a flyout lined up with the row.`,
					bad: (0, D.jsx)(`p`, {
						className: `text-body`,
						children: `Products with Variants listed below it`
					}),
					badText: `Expand a list downward under its parent.`
				}),
				(0, D.jsx)(b, {
					good: (0, D.jsx)(`p`, {
						className: `text-body`,
						children: `Plain headings: Sales, Catalog`
					}),
					goodText: `Group links under plain headings that are always shown.`,
					bad: (0, D.jsx)(`p`, {
						className: `text-body`,
						children: `A Catalog heading that collapses`
					}),
					badText: `Collapse groups.`
				}),
				(0, D.jsx)(b, {
					good: (0, D.jsx)(`p`, {
						className: `text-body`,
						children: `Commerce, Products, Variants, then tabs for the rest`
					}),
					goodText: `Stop at three levels, and move anything deeper into tabs in the page header.`,
					bad: (0, D.jsx)(`p`, {
						className: `text-body`,
						children: `Commerce, Products, Variants, Options, Values`
					}),
					badText: `Nest a fourth level.`
				}),
				(0, D.jsx)(b, {
					good: (0, D.jsx)(`p`, {
						className: `text-body`,
						children: `A filled pill, a heavier label and aria-current`
					}),
					goodText: `Mark the current item by shape, weight and aria-current.`,
					bad: (0, D.jsx)(`p`, {
						className: `text-body`,
						children: `Only a different colour`
					}),
					badText: `Mark the current item with colour alone.`
				}),
				(0, D.jsx)(b, {
					good: (0, D.jsx)(`p`, {
						className: `text-body`,
						children: `Switcher, theme and user menu`
					}),
					goodText: `Keep the rail for navigation, plus the switcher, the theme and the user menu.`,
					bad: (0, D.jsx)(`p`, {
						className: `text-body`,
						children: `A “New order” button in the rail`
					}),
					badText: `Put actions that are not navigation in the rail.`
				})
			]
		}),
		(0, D.jsx)(T, {
			id: `adoption`,
			title: `Adoption checklist`,
			children: (0, D.jsx)(x, { children: (0, D.jsx)(`ul`, {
				className: `list-none ps-0`,
				children: L.map((e) => (0, D.jsxs)(`li`, {
					className: `flex gap-2`,
					children: [(0, D.jsx)(`span`, {
						"aria-hidden": !0,
						children: `☐`
					}), (0, D.jsx)(`span`, { children: e })]
				}, e))
			}) })
		})
	] });
}
export { R as SidebarPattern, j as SidebarPatternDemo };
