import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { n } from "./react-dom.B9zIfLd2.js";
import { t as r } from "./AgentAvatar.DapLLReK.js";
import { t as i } from "./download.Cv28DZ7C.js";
import { t as a } from "./loader-circle.ja8phR5Y.js";
import { r as o } from "./createLucideIcon.npgQlVHx.js";
import { n as s, t as c } from "./jsx-runtime.yrTYNGQT.js";
import { t as l } from "./Link.DyGbagCu.js";
import { t as u } from "./Logo.tMBREW2t.js";
import { t as d } from "./Avatar.C1idfCyT.js";
import { t as f } from "./LetterMark.Cqw2_JUz.js";
import { t as p } from "./marks.C2cuaS5v.js";
import { t as m } from "./Pattern.BGzyAllr.js";
import { n as h, t as g } from "./TrackerBadge.a_7DvMJi.js";
import { n as _, t as v } from "./VcsBadge.Bd9a9O1p.js";
var y = t(n(), 1), b = c(), x = `inline-flex h-7 max-w-full min-w-0 items-center gap-1.5 rounded-full border bg-surface py-0.5 ps-0.5 pe-2.5 text-caption font-medium text-fg`;
function S({ name: e, letters: t, color: n, detail: c, available: l = !0, unavailableLabel: u, onPress: d, actionLabel: f, isPending: p = !1, className: m }) {
	let h = s(x, l ? `border-border` : `border-dashed border-border-strong`, m), g = (0, b.jsxs)(b.Fragment, { children: [
		(0, b.jsx)(r, {
			letters: t,
			...n === void 0 ? {} : { color: n },
			size: 20
		}),
		(0, b.jsx)(`span`, {
			className: `min-w-0 truncate`,
			children: e
		}),
		c ? (0, b.jsx)(`span`, {
			className: `shrink-0 font-normal text-muted`,
			children: c
		}) : null,
		!l && u ? (0, b.jsx)(`span`, {
			className: `sr-only`,
			children: u
		}) : null,
		p ? (0, b.jsx)(a, {
			"aria-hidden": `true`,
			className: `size-3.5 shrink-0 text-muted motion-safe:animate-spin`
		}) : l ? null : (0, b.jsx)(i, {
			"aria-hidden": `true`,
			className: `size-3.5 shrink-0 text-muted`
		}),
		d && f ? (0, b.jsx)(`span`, {
			className: `sr-only`,
			children: f
		}) : null
	] });
	return d ? (0, b.jsx)(o, {
		onPress: d,
		isPending: p,
		className: s(h, `cursor-pointer transition-colors duration-(--sk-duration-fast) data-hovered:border-border-strong data-hovered:bg-hover data-pending:cursor-wait data-pressed:bg-selected`),
		children: g
	}) : (0, b.jsx)(`span`, {
		title: e,
		className: h,
		children: g
	});
}
var C = {
	sm: {
		logo: 20,
		text: `text-body`,
		gap: `gap-1.5`
	},
	md: {
		logo: 24,
		text: `text-title`,
		gap: `gap-2`
	},
	lg: {
		logo: 32,
		text: `text-heading`,
		gap: `gap-2.5`
	}
}, w = {
	default: {
		name: `text-fg`,
		tool: `text-muted`,
		hover: `data-hovered:bg-hover`
	},
	nav: {
		name: `text-nav-fg`,
		tool: `text-nav-muted`,
		hover: `data-hovered:bg-nav-hover`
	}
};
function T({ kind: e = `mark`, name: t = `Skribly`, tool: n, size: r = `md`, tone: i = `default`, href: a, label: o, compact: c = !1, className: d }) {
	let f = C[r], p = w[i], m = (0, b.jsxs)(`span`, {
		className: s(`min-w-0 truncate`, c && `sr-only`),
		children: [(0, b.jsx)(`span`, {
			className: s(`font-bold tracking-[-0.02em]`, p.name),
			children: t
		}), n ? (0, b.jsx)(`span`, {
			className: s(`ms-1 font-medium`, p.tool),
			children: n
		}) : null]
	}), h = s(`inline-flex max-w-full min-w-0 items-center`, f.gap, f.text);
	return a === void 0 ? (0, b.jsxs)(`span`, {
		className: s(h, d),
		children: [(0, b.jsx)(u, {
			kind: e,
			size: f.logo,
			tone: i
		}), m]
	}) : (0, b.jsxs)(l, {
		href: a,
		...o === void 0 ? {} : { "aria-label": o },
		className: s(h, `-mx-1.5 min-h-6 rounded-md px-1.5 py-1 no-underline transition-colors duration-(--sk-duration-fast)`, p.hover, d),
		children: [(0, b.jsx)(u, {
			kind: e,
			size: f.logo,
			tone: i
		}), m]
	});
}
function E(e) {
	let t = e.trim(), n = t;
	try {
		n = new URL(t.includes(`://`) ? t : `https://${t}`).hostname;
	} catch {
		n = t;
	}
	let r = n.replace(/^www\./iu, ``);
	return (Array.from(r)[0] ?? ``).toLocaleUpperCase();
}
function D({ site: e, letter: t, src: n, color: r, label: i, size: a = 16, className: o }) {
	return (0, b.jsx)(f, {
		letters: t ?? E(e),
		label: i,
		color: r,
		src: n,
		size: a,
		shape: `square`,
		className: o
	});
}
var O = {
	sm: `text-heading`,
	md: `text-page`,
	lg: `text-[2.5rem]`,
	xl: `text-[clamp(3rem,9.5vw,9rem)]`
}, k = {
	default: {
		text: `text-fg`,
		tile: `bg-accent text-accent-fg`
	},
	nav: {
		text: `text-nav-fg`,
		tile: `bg-nav-accent text-nav`
	}
};
function A({ name: e = `Skribly`, size: t = `md`, as: n = `span`, tone: r = `default`, className: i }) {
	let a = Array.from(e), o = k[r];
	return (0, b.jsxs)(n, {
		className: s(`inline-flex max-w-full items-end font-display leading-[0.8] font-extrabold tracking-[-0.045em]`, O[t], o.text, i),
		children: [
			(0, b.jsx)(`span`, {
				className: `sr-only`,
				children: e
			}),
			(0, b.jsx)(`span`, {
				"aria-hidden": `true`,
				className: s(`me-[0.08em] grid size-[1.12em] shrink-0 place-items-center rounded-[0.06em] forced-colors:border-[0.06em] forced-colors:border-solid`, o.tile),
				children: a[0]
			}),
			(0, b.jsx)(`span`, {
				"aria-hidden": `true`,
				className: `min-w-0 pb-[0.06em]`,
				children: a.slice(1).join(``)
			})
		]
	});
}
var j = e({ default: () => R }), M = [
	{
		name: `Claude Code`,
		letters: `C`,
		color: `var(--sk-tool-agent)`,
		detail: `2.1`
	},
	{
		name: `Codex`,
		letters: `X`,
		color: `var(--sk-tool-tracker)`,
		detail: `0.9`
	},
	{
		name: `Cursor Agent`,
		letters: `Cu`,
		color: `var(--sk-tool-skills)`
	},
	{
		name: `Gemini CLI`,
		letters: `G`,
		color: `var(--sk-info)`
	},
	{
		name: `Terminal`,
		letters: `$`
	}
], N = {
	skribly: `Skribly`,
	agent: `Skribly Agent`,
	tracker: `Skribly Tracker`,
	skills: `agent-skills`,
	docs: `Skribly Docs`,
	ui: `Skribly UI`,
	core: `Skribly Core`,
	id: `Skribly ID`,
	hub: `Skribly Hub`,
	api: `Skribly API`,
	status: `Skribly Status`,
	trust: `Skribly Trust`,
	tools: `Skribly Tools`,
	extension: `Skribly Extensions`,
	newsletter: `Skribly Newsletter`,
	feedback: `Skribly Feedback`,
	recommend: `Skribly Recommend`,
	bot: `Skribly Bot`,
	projects: `Skribly Projects`
}, P = [
	[`grid`, `tracker`],
	[`dots`, `agent`],
	[`mosaic`, `hub`],
	[`ruled`, `docs`],
	[`hero`, `ui`]
], F = {
	github: `GitHub`,
	gitlab: `GitLab`,
	bitbucket: `Bitbucket`,
	gitea: `Gitea`,
	azure: `Azure DevOps`
}, I = {
	skribly: `Skribly Tracker`,
	jira: `Jira`,
	redmine: `Redmine`,
	github: `GitHub Issues`,
	gitlab: `GitLab Issues`,
	linear: `Linear`
};
function L() {
	let [e, t] = (0, y.useState)(`missing`);
	return e === `ready` ? (0, b.jsx)(S, {
		name: `Aider`,
		letters: `A`,
		color: `var(--sk-accent)`,
		detail: `0.86`
	}) : (0, b.jsx)(S, {
		name: `Aider`,
		letters: `A`,
		color: `var(--sk-accent)`,
		available: !1,
		unavailableLabel: `not installed`,
		actionLabel: `Install`,
		isPending: e === `installing`,
		onPress: () => {
			t(`installing`), setTimeout(() => t(`ready`), 1500);
		}
	});
}
var R = {
	title: `Brand`,
	description: `The Skribly marks and the small identity badges around them: the logo, the wordmark, the app lockup, people, agents, git hosts, trackers and sites. Badges use letters on a tint of a colour token, so they read in every theme and never rely on colour.`,
	pl: {
		title: `Marka`,
		description: `Znaki Skribly i małe plakietki tożsamości wokół nich: logo, logotyp słowny, zestaw aplikacji, osoby, agenci, hosty git, trackery i strony. Plakietki używają liter na odcieniu tokenu koloru, więc są czytelne w każdym motywie i nigdy nie opierają się na samym kolorze.`
	},
	demos: [
		{
			name: `Logo`,
			components: [`Logo`],
			description: `The Skribly mark, plain or with the glyph and colour of a product. Every product has one, listed in marks; products differ by glyph and colour and by nothing else. Use tone="nav" on the dark sidebar.`,
			usage: `<Logo kind="agent" size={32} label="Skribly Agent" />
<Logo kind="hub" size={48} label="Skribly Hub" />
<Logo kind="tracker" tone="nav" />`,
			accessibility: `Decoration unless label is set, then an image with that name. Leave label out when the name is written next to it. The size is in rem, so it grows with the reader’s text size. The product colour is never the only sign: the glyph and the written name tell the products apart.`,
			pl: {
				description: `Znak Skribly, zwykły albo ze znakiem i kolorem produktu. Każdy produkt ma swój, zapisany w marks; produkty różnią się znakiem i kolorem i niczym więcej. Na ciemnym panelu bocznym użyj tone="nav".`,
				accessibility: `Dekoracja, chyba że ustawiono label; wtedy jest obrazem o tej nazwie. Pomiń label, gdy nazwa jest napisana obok. Rozmiar jest w rem, więc rośnie razem z rozmiarem tekstu czytelnika. Kolor produktu nigdy nie jest jedynym sygnałem: produkty odróżnia znak i zapisana nazwa.`
			},
			render: () => (0, b.jsxs)(`div`, {
				className: `flex flex-col gap-3`,
				children: [(0, b.jsx)(`ul`, {
					className: `grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-3 text-body`,
					children: p.map((e) => (0, b.jsxs)(`li`, {
						className: `flex items-center gap-2`,
						children: [(0, b.jsx)(u, {
							kind: e === `skribly` ? `mark` : e,
							size: 40
						}), N[e]]
					}, e))
				}), (0, b.jsxs)(`div`, {
					className: `flex flex-wrap items-center gap-4 rounded-lg bg-nav p-3`,
					children: [
						(0, b.jsx)(u, {
							tone: `nav`,
							size: 32,
							label: `Skribly`
						}),
						(0, b.jsx)(u, {
							kind: `agent`,
							tone: `nav`,
							size: 32,
							label: `Skribly Agent`
						}),
						(0, b.jsx)(u, {
							kind: `tracker`,
							tone: `nav`,
							size: 32,
							label: `Skribly Tracker`
						}),
						(0, b.jsx)(u, {
							kind: `hub`,
							tone: `nav`,
							size: 32,
							label: `Skribly Hub`
						})
					]
				})]
			})
		},
		{
			name: `Pattern`,
			components: [`Pattern`],
			description: `The six brand patterns, drawn from the blocks and dots of the mark: grid, dots (a dotted margin), mosaic, ruled, hero and empty. The first five sit behind content in the product colour; empty is a small picture for an empty state. Load patterns.css, which plain.css and styles.css bring.`,
			usage: `<Pattern pattern="grid" product="tracker" as="section" className="p-6">
  <h2>Board</h2>
</Pattern>
<Pattern pattern="empty" product="agent" />`,
			accessibility: `Decoration only: the pattern is a pseudo-element, so it is never read and never takes a click, and without children the element is hidden from assistive technology. The tint keeps body text at 4.5:1 (7:1 in high contrast) on every page surface and the weight under 3 percent. Nothing moves, and Windows high contrast and print leave the pattern out.`,
			pl: {
				description: `Sześć deseni marki narysowanych z bloków i kropek znaku: grid, dots (kropkowany margines), mosaic, ruled, hero i empty. Pierwsze pięć leży za treścią w kolorze produktu; empty to mały obrazek dla stanu braku danych. Wczytaj patterns.css, który dołączają plain.css i styles.css.`,
				accessibility: `Tylko dekoracja: deseń jest pseudoelementem, więc nigdy nie jest odczytywany i nie przechwytuje kliknięć, a bez dzieci element jest ukryty przed technologiami asystującymi. Kolor deseniu utrzymuje kontrast tekstu głównego 4,5:1 (7:1 w wysokim kontraście) na każdej powierzchni strony, a wagę poniżej 3 procent. Nic się nie porusza, a tryb wysokiego kontrastu systemu Windows i druk pomijają deseń.`
			},
			render: () => (0, b.jsxs)(`div`, {
				className: `grid gap-3 sm:grid-cols-2`,
				children: [P.map(([e, t]) => (0, b.jsxs)(m, {
					pattern: e,
					product: t,
					className: `min-h-28 rounded-lg border border-border p-4`,
					children: [(0, b.jsx)(`p`, {
						className: `text-body font-semibold text-fg`,
						children: e
					}), (0, b.jsx)(`p`, {
						className: `text-caption text-muted`,
						children: `Body text stays readable over it.`
					})]
				}, e)), (0, b.jsxs)(`div`, {
					className: `flex flex-col items-center justify-center gap-2 rounded-lg border border-border p-4`,
					children: [(0, b.jsx)(m, {
						pattern: `empty`,
						product: `agent`
					}), (0, b.jsx)(`p`, {
						className: `text-body text-muted`,
						children: `No sessions yet`
					})]
				})]
			})
		},
		{
			name: `Wordmark`,
			components: [`Wordmark`],
			description: `The written name with its first letter in the amber tile, for the front of a site or a splash screen. Use AppLockup in app chrome.`,
			usage: `<Wordmark as="h1" size="xl" />
<Wordmark size="sm" tone="nav" />`,
			accessibility: `The name is read once from a hidden copy and the drawn letters are hidden, so a screen reader never spells it in two parts. The xl size scales with the viewport and stops growing at 9rem. The tile gets a border in Windows high contrast.`,
			pl: {
				description: `Zapisana nazwa z pierwszą literą w bursztynowym kafelku, na front strony albo ekran startowy. W obramowaniu aplikacji użyj AppLockup.`,
				accessibility: `Nazwa jest odczytywana raz z ukrytej kopii, a rysowane litery są ukryte, więc czytnik ekranu nigdy nie literuje jej w dwóch częściach. Rozmiar xl skaluje się z oknem i przestaje rosnąć przy 9 rem. Kafelek dostaje ramkę w trybie wysokiego kontrastu systemu Windows.`
			},
			render: () => (0, b.jsxs)(`div`, {
				className: `flex flex-col items-start gap-4`,
				children: [
					(0, b.jsx)(A, { size: `lg` }),
					(0, b.jsx)(A, { size: `md` }),
					(0, b.jsx)(A, { size: `sm` }),
					(0, b.jsx)(`div`, {
						className: `rounded-lg bg-nav p-3`,
						children: (0, b.jsx)(A, {
							size: `sm`,
							tone: `nav`
						})
					})
				]
			})
		},
		{
			name: `AppLockup`,
			components: [`AppLockup`],
			description: `The logo with Skribly and the tool name, for the title bar, the sidebar and sign-in pages. Give it href to make it the link home; compact keeps only the logo in a folded sidebar.`,
			usage: `<AppLockup kind="agent" tool="Agent" href="/" />
<AppLockup kind="tracker" tool="Tracker" tone="nav" compact href="/" />`,
			accessibility: `The words name it and the logo is hidden. As a link the whole lockup is the target, at least 24px high. label can give a fuller name, which should start with the visible words. compact hides the words on screen only, so the link keeps its name.`,
			pl: {
				description: `Logo z nazwą Skribly i nazwą narzędzia, do paska tytułu, panelu bocznego i stron logowania. Dodaj href, aby było linkiem do strony głównej; compact zostawia tylko logo w zwiniętym panelu bocznym.`,
				accessibility: `Słowa nazywają go, a logo jest ukryte. Jako link celem jest cały zestaw, o wysokości co najmniej 24 px. label może podać pełniejszą nazwę, która powinna zaczynać się od widocznych słów. compact ukrywa słowa tylko na ekranie, więc link zachowuje nazwę.`
			},
			render: () => (0, b.jsxs)(`div`, {
				className: `flex flex-col items-start gap-3`,
				children: [
					(0, b.jsx)(T, {
						kind: `agent`,
						tool: `Agent`,
						href: `#home`
					}),
					(0, b.jsx)(T, {
						kind: `tracker`,
						tool: `Tracker`,
						size: `lg`
					}),
					(0, b.jsx)(T, {
						kind: `skills`,
						tool: `Skills`,
						size: `sm`
					}),
					(0, b.jsxs)(`div`, {
						className: `flex w-full flex-wrap items-center gap-4 rounded-lg bg-nav p-3`,
						children: [(0, b.jsx)(T, {
							kind: `tracker`,
							tool: `Tracker`,
							tone: `nav`,
							href: `#home`
						}), (0, b.jsx)(T, {
							kind: `tracker`,
							tool: `Tracker`,
							tone: `nav`,
							href: `#home`,
							compact: !0
						})]
					})
				]
			})
		},
		{
			name: `Avatar`,
			components: [`Avatar`],
			description: `A person as initials or a photo, in lists, comments and assignee fields. With no name it draws the dashed unassigned circle.`,
			usage: `<Avatar name="Anna Nowak" />
<Avatar name="Jan Kowalski" src={user.photo} size="lg" />
<Avatar unassignedLabel="Unassigned" />`,
			accessibility: `An image named after the person. Set decorative when the name is written next to it, so it is not read twice. The unassigned circle is read only with unassignedLabel. A photo that fails to load falls back to the initials.`,
			pl: {
				description: `Osoba jako inicjały albo zdjęcie, na listach, w komentarzach i polach przypisania. Bez nazwy rysuje przerywane koło nieprzypisanego.`,
				accessibility: `Obraz nazwany imieniem osoby. Ustaw decorative, gdy nazwa jest napisana obok, aby nie była odczytana dwa razy. Koło nieprzypisanego jest odczytywane tylko z unassignedLabel. Zdjęcie, które się nie wczyta, wraca do inicjałów.`
			},
			render: () => (0, b.jsxs)(`div`, {
				className: `flex flex-col gap-3`,
				children: [(0, b.jsxs)(`div`, {
					className: `flex flex-wrap items-center gap-2`,
					children: [
						(0, b.jsx)(d, {
							name: `Anna Nowak`,
							size: `xs`
						}),
						(0, b.jsx)(d, {
							name: `Anna Nowak`,
							size: `sm`
						}),
						(0, b.jsx)(d, {
							name: `Anna Nowak`,
							size: `md`,
							color: `var(--sk-tool-tracker)`
						}),
						(0, b.jsx)(d, {
							name: `Jan Kowalski`,
							size: `lg`,
							color: `var(--sk-tool-skills)`
						}),
						(0, b.jsx)(d, {
							name: `Łucja`,
							size: `xl`,
							color: `var(--sk-accent)`
						}),
						(0, b.jsx)(d, {
							unassignedLabel: `Unassigned`,
							size: `md`
						})
					]
				}), (0, b.jsxs)(`p`, {
					className: `flex items-center gap-2 text-body`,
					children: [(0, b.jsx)(d, {
						name: `Anna Nowak`,
						decorative: !0
					}), `Anna Nowak commented`]
				})]
			})
		},
		{
			name: `AgentAvatar`,
			components: [`AgentAvatar`],
			description: `The square letter tile of a coding agent, in session lists, tabs and chips. The app passes the letters and the colour from its agent list.`,
			usage: `<AgentAvatar letters="C" color="var(--sk-tool-agent)" label="Claude Code" />`,
			accessibility: `Decoration unless label is set. The letters stay on the foreground token over a tint of at most 24 percent, which keeps text contrast above 4.5:1 for any colour, and the full colour goes to the border.`,
			pl: {
				description: `Kwadratowy kafelek z literami agenta programistycznego, na listach sesji, kartach i plakietkach. Aplikacja przekazuje litery i kolor z własnej listy agentów.`,
				accessibility: `Dekoracja, chyba że ustawiono label. Litery zostają w kolorze tokenu pierwszego planu na odcieniu do 24 procent, co utrzymuje kontrast tekstu powyżej 4,5:1 dla dowolnego koloru, a pełny kolor trafia do ramki.`
			},
			render: () => (0, b.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-2`,
				children: [M.map((e) => (0, b.jsx)(r, {
					letters: e.letters,
					label: e.name,
					...e.color ? { color: e.color } : {},
					size: 28
				}, e.name)), (0, b.jsx)(r, {
					letters: `C`,
					label: `Claude Code`,
					color: `var(--sk-tool-agent)`,
					size: 40
				})]
			})
		},
		{
			name: `AgentChip`,
			components: [`AgentChip`],
			description: `An agent as a small pill with its avatar, name and version, for the row of ready agents. A missing agent gets a dashed edge and can become the button that installs it.`,
			usage: `<AgentChip name="Codex" letters="X" detail="0.9" />
<AgentChip
  name="Aider" letters="A" available={false}
  unavailableLabel="not installed" actionLabel="Install"
  onPress={install} isPending={installing}
/>`,
			accessibility: `A missing agent is shown by a dashed edge and a download glyph, and unavailableLabel is read, so fading is never the only sign. As a button its name is the agent, the state and actionLabel. While pending it keeps focus, ignores presses and React Aria announces it as busy. Long names truncate inside the chip, which never grows past its container.`,
			pl: {
				description: `Agent jako mała pigułka z awatarem, nazwą i wersją, do rzędu gotowych agentów. Brakujący agent dostaje przerywaną krawędź i może stać się przyciskiem, który go instaluje.`,
				accessibility: `Brakujący agent jest pokazany przerywaną krawędzią i znakiem pobierania, a unavailableLabel jest odczytywane, więc samo wyblaknięcie nigdy nie jest jedynym sygnałem. Jako przycisk jego nazwą jest agent, stan i actionLabel. W trakcie oczekiwania zachowuje fokus, ignoruje naciśnięcia, a React Aria ogłasza go jako zajęty. Długie nazwy są ucinane wewnątrz plakietki, która nigdy nie wychodzi poza kontener.`
			},
			render: () => (0, b.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-1.5`,
				children: [
					M.map((e) => (0, b.jsx)(S, {
						name: e.name,
						letters: e.letters,
						...e.color ? { color: e.color } : {},
						...e.detail ? { detail: e.detail } : {}
					}, e.name)),
					(0, b.jsx)(S, {
						name: `Codex`,
						letters: `X`,
						color: `var(--sk-tool-tracker)`,
						available: !1,
						unavailableLabel: `not installed`
					}),
					(0, b.jsx)(L, {}),
					(0, b.jsx)(S, {
						name: `An agent with a very long name that does not fit the row at all`,
						letters: `L`
					})
				]
			})
		},
		{
			name: `VcsBadge`,
			components: [`VcsBadge`],
			description: `The git host of an account or a repository: GitHub, GitLab, Bitbucket, Gitea or Azure DevOps. Pass the account avatar as src to show the person instead.`,
			usage: `<VcsBadge kind="gitlab" label="GitLab" />
<VcsBadge kind="github" src={account.avatarUrl} size={36} />`,
			accessibility: `Decoration unless label is set; leave it out when the host name is written next to it. The letters name the host, so the token colour is a hint only.`,
			pl: {
				description: `Host git konta albo repozytorium: GitHub, GitLab, Bitbucket, Gitea lub Azure DevOps. Przekaż awatar konta jako src, aby pokazać osobę.`,
				accessibility: `Dekoracja, chyba że ustawiono label; pomiń go, gdy nazwa hosta jest napisana obok. Litery nazywają hosta, więc kolor tokenu jest tylko wskazówką.`
			},
			render: () => (0, b.jsx)(`ul`, {
				className: `flex flex-col gap-2 text-body`,
				children: Object.keys(_).map((e) => (0, b.jsxs)(`li`, {
					className: `flex items-center gap-2`,
					children: [(0, b.jsx)(v, { kind: e }), F[e]]
				}, e))
			})
		},
		{
			name: `TrackerBadge`,
			components: [`TrackerBadge`],
			description: `The issue tracker an account or a task comes from, in settings and task lists.`,
			usage: `<TrackerBadge kind="jira" label="Jira" />`,
			accessibility: `Decoration unless label is set. The letters name the tracker; red and green are kept for danger and success, so trackers whose own colour is one of them are neutral here.`,
			pl: {
				description: `Tracker zgłoszeń, z którego pochodzi konto albo zadanie, w ustawieniach i na listach zadań.`,
				accessibility: `Dekoracja, chyba że ustawiono label. Litery nazywają tracker; czerwień i zieleń są zarezerwowane dla niebezpieczeństwa i sukcesu, więc trackery, których własny kolor jest jednym z nich, są tutaj neutralne.`
			},
			render: () => (0, b.jsx)(`div`, {
				className: `flex flex-wrap items-center gap-2`,
				children: Object.keys(h).map((e) => (0, b.jsx)(g, {
					kind: e,
					label: I[e]
				}, e))
			})
		},
		{
			name: `FaviconLetter`,
			components: [`FaviconLetter`],
			description: `A site icon with a letter fallback, for browser tabs, bookmarks and link lists. The letter is the first one of the host, without www.`,
			usage: `<FaviconLetter site="https://www.example.com" src="https://www.example.com/favicon.ico" />`,
			accessibility: `Decoration by default, because the page title is written next to it. A favicon that fails to load falls back to the letter. Its size is in rem and follows the text size.`,
			pl: {
				description: `Ikona strony z literą zastępczą, do kart przeglądarki, zakładek i list linków. Literą jest pierwsza litera hosta, bez www.`,
				accessibility: `Domyślnie dekoracja, bo tytuł strony jest napisany obok. Favicon, który się nie wczyta, wraca do litery. Jego rozmiar jest w rem i podąża za rozmiarem tekstu.`
			},
			render: () => (0, b.jsxs)(`ul`, {
				className: `flex flex-col gap-2 text-body`,
				children: [
					(0, b.jsxs)(`li`, {
						className: `flex items-center gap-2`,
						children: [(0, b.jsx)(D, {
							site: `https://www.example.com`,
							color: `var(--sk-info)`
						}), `Example Domain`]
					}),
					(0, b.jsxs)(`li`, {
						className: `flex items-center gap-2`,
						children: [(0, b.jsx)(D, {
							site: `localhost:5173`,
							color: `var(--sk-tool-agent)`
						}), `Preview`]
					}),
					(0, b.jsxs)(`li`, {
						className: `flex items-center gap-2`,
						children: [(0, b.jsx)(D, {
							site: `docs.skribly.pl`,
							size: 20
						}), `Documentation`]
					})
				]
			})
		}
	]
};
export { j as t };
