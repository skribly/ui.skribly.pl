import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { r as t, t as n } from "./createLucideIcon.npgQlVHx.js";
import { t as r } from "./check.CUpC8LgP.js";
import { t as i } from "./x.CmkLFRDJ.js";
import { n as a } from "./react-dom.B9zIfLd2.js";
import { n as o, t as s } from "./jsx-runtime.yrTYNGQT.js";
import { t as c } from "./scrollRegion.BDgfG0gw.js";
import { t as l } from "./circle-exclamation-point.DRCkYbzg.js";
import { t as u } from "./copy.BkyZ8mHn.js";
import { t as d } from "./circle-check.CWwdJPsz.js";
import { t as f } from "./info.D9DvH9cK.js";
import { t as p } from "./octagon-exclamation-point.B9Zlzk60.js";
import { t as m } from "./triangle-exclamation-point.BJJ-nXau.js";
var h = {
	name: `arrow-left`,
	size: 24,
	node: [[`path`, {
		d: `m12 19-7-7 7-7`,
		key: `1l729n`
	}], [`path`, {
		d: `M19 12H5`,
		key: `x3x0zl`
	}]]
};
h.node;
var g = n(h), _ = {
	name: `arrow-right`,
	size: 24,
	node: [[`path`, {
		d: `M5 12h14`,
		key: `1ays0h`
	}], [`path`, {
		d: `m12 5 7 7-7 7`,
		key: `xquz4c`
	}]]
};
_.node;
var v = n(_), y = {
	name: `hash`,
	size: 24,
	node: [
		[`line`, {
			x1: `4`,
			x2: `20`,
			y1: `9`,
			y2: `9`,
			key: `4lhtct`
		}],
		[`line`, {
			x1: `4`,
			x2: `20`,
			y1: `15`,
			y2: `15`,
			key: `vyu0kd`
		}],
		[`line`, {
			x1: `10`,
			x2: `8`,
			y1: `3`,
			y2: `21`,
			key: `1ggp8o`
		}],
		[`line`, {
			x1: `16`,
			x2: `14`,
			y1: `3`,
			y2: `21`,
			key: `weycgp`
		}]
	]
};
y.node;
var b = n(y), x = e(a(), 1), S = s(), C = {
	ok: d,
	info: f,
	warn: m,
	danger: p
}, w = {
	ok: `text-ok`,
	info: `text-info`,
	warn: `text-warn`,
	danger: `text-danger`
}, T = {
	ok: `border-ok bg-ok-soft`,
	info: `border-info bg-info-soft`,
	warn: `border-warn bg-warn-soft`,
	danger: `border-danger bg-danger-soft`
}, E = {
	ok: `border-l-ok`,
	info: `border-l-info`,
	warn: `border-l-warn`,
	danger: `border-l-danger`
};
function D({ tone: e, className: t }) {
	let n = C[e];
	return (0, S.jsx)(n, {
		"aria-hidden": !0,
		focusable: `false`,
		className: o(`size-4 shrink-0`, w[e], t)
	});
}
function O({ label: e, onPress: n, className: r }) {
	return (0, S.jsx)(t, {
		"aria-label": e,
		onPress: n,
		className: o(`inline-flex size-control-sm shrink-0 cursor-default items-center justify-center rounded-md border border-transparent text-fg transition-colors data-hovered:bg-fg/10 data-pressed:bg-fg/15`, r),
		children: (0, S.jsx)(i, {
			"aria-hidden": !0,
			focusable: `false`,
			className: `size-4`
		})
	});
}
function k({ tone: e = `info`, title: t, toneLabel: n, headingLevel: r, actions: i, live: a, urgent: s = !1, onDismiss: c, dismissLabel: l, className: u, children: d, ...f }) {
	let p = (0, x.useId)(), m = s ? `assertive` : a, h = m === `assertive` ? { role: `alert` } : m === `polite` ? { role: `status` } : {}, g = r ? `h${r}` : `p`;
	return (0, S.jsxs)(`div`, {
		"aria-labelledby": m ? void 0 : p,
		...f,
		...h,
		...m ? {} : { role: `group` },
		"data-tone": e,
		className: o(`flex min-w-0 items-start gap-3 rounded-md border border-l-4 p-3 text-body text-fg`, T[e], u),
		children: [
			(0, S.jsx)(D, {
				tone: e,
				className: `mt-0.5`
			}),
			(0, S.jsxs)(`div`, {
				className: `min-w-0 flex-1 wrap-break-word`,
				children: [
					(0, S.jsx)(g, {
						id: p,
						className: `text-body font-semibold`,
						children: n ? (0, S.jsxs)(S.Fragment, { children: [
							(0, S.jsx)(`span`, {
								className: `sr-only`,
								children: `${n}:`
							}),
							` `,
							(0, S.jsx)(`span`, { children: t })
						] }) : t
					}),
					d ? (0, S.jsx)(`div`, {
						className: `mt-1 [&_a]:underline [&_ul]:list-disc [&_ul]:ps-5`,
						children: d
					}) : null,
					i ? (0, S.jsx)(`div`, {
						className: `mt-3 flex flex-wrap items-center gap-2`,
						children: i
					}) : null
				]
			}),
			c ? (0, S.jsx)(O, {
				label: l,
				onPress: c,
				className: `-my-1 -me-1`
			}) : null
		]
	});
}
async function A(e) {
	if (typeof navigator > `u` || !navigator.clipboard) throw Error(`No clipboard`);
	await navigator.clipboard.writeText(e);
}
function j({ text: e, copyLabel: n, copiedLabel: i, copyFailedLabel: a, copyText: s, iconOnly: c = !1, className: d }) {
	let [f, p] = (0, x.useState)(`idle`), m = (0, x.useRef)({
		hovered: !1,
		focused: !1,
		expired: !1
	}), h = (0, x.useRef)(void 0), g = (0, x.useCallback)(() => {
		m.current.expired = !1, p(`idle`);
	}, []), _ = (0, x.useCallback)(() => {
		let { hovered: e, focused: t, expired: n } = m.current;
		!e && !t && n && g();
	}, [g]);
	(0, x.useEffect)(() => () => clearTimeout(h.current), []);
	let v = (0, x.useCallback)(async () => {
		clearTimeout(h.current), m.current.expired = !1;
		try {
			await (s ?? A)(e), p(`copied`);
		} catch {
			p(`failed`);
		}
		h.current = setTimeout(() => {
			m.current.expired = !0, _();
		}, 2500);
	}, [
		s,
		_,
		e
	]), y = (0, x.useCallback)(() => void v(), [v]), b = (0, x.useCallback)((e) => {
		m.current.hovered = e, _();
	}, [_]), C = (0, x.useCallback)((e) => {
		m.current.focused = e, _();
	}, [_]), w = f === `copied` ? i : f === `failed` ? a : n, T = f === `copied` ? r : f === `failed` ? l : u;
	return (0, S.jsxs)(S.Fragment, { children: [(0, S.jsxs)(t, {
		onPress: y,
		onHoverChange: b,
		onFocusChange: C,
		...c ? { "aria-label": n } : {},
		className: o(`inline-flex h-control-sm min-w-control-sm shrink-0 items-center justify-center gap-1.5 rounded-md border border-transparent text-caption font-medium transition-colors data-hovered:bg-hover data-pressed:bg-selected`, c ? `px-0` : `px-2`, f === `idle` && `text-muted data-hovered:text-fg`, f === `copied` && `text-ok`, f === `failed` && `text-danger`, d),
		children: [(0, S.jsx)(T, {
			size: 14,
			"aria-hidden": !0
		}), c ? null : (0, S.jsx)(`span`, { children: w })]
	}), (0, S.jsx)(`output`, {
		className: `sr-only`,
		children: f === `idle` ? `` : w
	})] });
}
function M({ code: e, label: t, title: n, language: r, showLineNumbers: i = !1, wrap: a = !1, maxLines: s, copyLabel: l, copiedLabel: u, copyFailedLabel: d, copyText: f, className: p, ...m }) {
	let h = (0, x.useMemo)(() => e.replace(/\n$/, ``).split(`
`), [e]), g = (0, x.useMemo)(() => h.map((e, t) => ({
		number: t + 1,
		line: e
	})), [h]), _ = (0, x.useMemo)(() => s ? { maxHeight: `calc(${s * 1.625}em + 1.5rem)` } : void 0, [s]), v = l !== void 0 && u !== void 0 && d !== void 0, y = n !== void 0 || r !== void 0 || v, b = (0, x.useMemo)(() => ({ minWidth: `${String(h.length).length + 1}ch` }), [h.length]);
	return (0, S.jsxs)(`div`, {
		...m,
		className: o(`min-w-0 overflow-hidden rounded-lg border border-border bg-sunken text-fg`, p),
		children: [y ? (0, S.jsxs)(`div`, {
			className: `flex min-h-control-md flex-wrap items-center gap-x-2 gap-y-1 border-b border-border bg-bar py-1 ps-3 pe-1`,
			children: [
				n === void 0 ? null : (0, S.jsx)(`span`, {
					className: `min-w-0 flex-1 truncate font-mono text-caption font-medium text-fg`,
					children: n
				}),
				r === void 0 ? null : (0, S.jsx)(`span`, {
					className: o(`rounded-sm border border-border bg-surface px-1.5 font-mono text-label text-muted uppercase`, n === void 0 && `me-auto`),
					children: r
				}),
				v ? (0, S.jsx)(j, {
					text: e,
					copyLabel: l,
					copiedLabel: u,
					copyFailedLabel: d,
					...f === void 0 ? {} : { copyText: f },
					className: n === void 0 && r === void 0 ? `ms-auto` : ``
				}) : null
			]
		}) : null, (0, S.jsx)(`pre`, {
			...c(t),
			translate: `no`,
			style: _,
			className: o(`m-0 overflow-auto p-3 font-mono text-caption leading-[1.625]`, a ? `whitespace-pre-wrap [overflow-wrap:anywhere]` : `whitespace-pre`),
			children: (0, S.jsx)(`code`, {
				className: i ? `table w-full border-collapse` : void 0,
				children: i ? g.map(({ number: e, line: t }) => (0, S.jsxs)(`span`, {
					className: `table-row`,
					children: [(0, S.jsx)(`span`, {
						"aria-hidden": !0,
						className: `table-cell pe-4 text-end text-muted select-none`,
						style: b,
						children: e
					}), (0, S.jsx)(`span`, {
						className: `table-cell`,
						children: t
					})]
				}, e)) : h.join(`
`)
			})
		})]
	});
}
var N = `min-w-0 text-fg [overflow-wrap:anywhere] leading-(--sk-leading-prose) [&>*+*]:mt-3 [&>:first-child]:mt-0 [&_:is(h1,h2,h3,h4,h5,h6)]:font-semibold [&_:is(h1,h2,h3,h4,h5,h6)]:leading-tight [&_:is(h1,h2,h3,h4,h5,h6)]:tracking-tight [&_:is(h1,h2,h3,h4,h5,h6)]:text-fg [&>:is(h1,h2,h3,h4,h5,h6)]:mt-5 [&>:is(h1,h2,h3,h4,h5,h6)+*]:mt-2 [&_strong]:font-semibold [&_em]:italic [&_del]:line-through [&_a]:text-accent-text [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_a:hover]:decoration-2 [&_ul]:list-disc [&_ol]:list-decimal [&_:is(ul,ol)]:ps-5 [&_li]:ps-1 [&_li+li]:mt-1 [&_li>:is(ul,ol)]:mt-1 [&_li>p+p]:mt-2 [&_li::marker]:text-muted [&_li[data-task]]:list-none [&_li[data-task]]:-ms-5 [&_li[data-task]>label]:inline-flex [&_li[data-task]>label]:items-baseline [&_li[data-task]>label]:gap-2 [&_input[type=checkbox]]:size-4 [&_input[type=checkbox]]:shrink-0 [&_input[type=checkbox]]:translate-y-0.5 [&_input[type=checkbox]]:accent-accent [&_input[type=checkbox]]:opacity-100 [&_blockquote]:border-s-4 [&_blockquote]:border-border-strong [&_blockquote]:ps-3 [&_blockquote]:text-muted [&_blockquote>*+*]:mt-2 [&_:not(pre)>code]:rounded-sm [&_:not(pre)>code]:border [&_:not(pre)>code]:border-border [&_:not(pre)>code]:bg-sunken [&_:not(pre)>code]:px-1 [&_:not(pre)>code]:text-[0.875em] [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:border [&_pre]:border-border [&_pre]:bg-sunken [&_pre]:p-3 [&_pre]:text-caption [&_pre]:leading-relaxed [&_pre]:[overflow-wrap:normal] [&_kbd]:rounded-sm [&_kbd]:border [&_kbd]:border-border-strong [&_kbd]:bg-surface [&_kbd]:px-1 [&_kbd]:text-[0.8125em] [&_kbd]:shadow-sm [&_[data-scroll]]:max-w-full [&_[data-scroll]]:overflow-x-auto [&_[data-scroll]]:rounded-md [&_[data-scroll]]:border [&_[data-scroll]]:border-border [&_table]:w-full [&_table]:border-collapse [&_table]:text-start [&_table]:[overflow-wrap:normal] [&_:is(th,td)]:border-b [&_:is(th,td)]:border-border [&_:is(th,td)]:px-3 [&_:is(th,td)]:py-1.5 [&_:is(th,td)]:align-top [&_:is(th,td)]:text-start [&_th]:bg-sunken [&_th]:font-semibold [&_tr:last-child>td]:border-b-0 [&_hr]:my-5 [&_hr]:border-border [&_img]:inline-block [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-md [&_mark]:rounded-sm [&_mark]:bg-accent-soft [&_mark]:px-0.5 [&_mark]:text-fg`, P = {
	md: `text-body [&_h1]:text-heading [&_h2]:text-title [&_h3]:text-body [&_:is(h4,h5,h6)]:text-body`,
	lg: `text-title [&_h1]:text-page [&_h2]:text-heading [&_h3]:text-title [&_:is(h4,h5,h6)]:text-body`
};
function F({ size: e = `md`, className: t, ...n }) {
	return (0, S.jsx)(`div`, {
		...n,
		className: o(N, P[e], t)
	});
}
var I = {
	en: {
		brand: `Skribly UI`,
		onThisPage: `On this page`,
		linkToSection: `Link to the section {title}`,
		previousNext: `Previous and next`,
		previous: `Previous`,
		next: `Next`,
		copy: `Copy`,
		copied: `Copied`,
		copyFailed: `Copy failed. Select the code and press Ctrl+C.`,
		codeExample: `{language} example`,
		codeExampleDefault: `Code example`,
		codeFor: `Code for {label}`,
		doLabel: `Do. `,
		dontLabel: `Don’t. `,
		errorTone: `Error`,
		previewFailed: `The {name} preview could not render`,
		exports: `Exports`,
		componentGroups: `Component groups`,
		components: `Components`,
		allComponents: `All components`,
		seeInAction: `See it in action`,
		patterns: `Patterns`,
		ogAlt: `The Skribly mark next to the words Skribly UI, one calm look for every Skribly tool.`,
		homeDescription: `Skribly UI is the design system of the Skribly tools: design tokens, plain CSS and accessible React components, in light, dark and high contrast.`,
		homeEyebrow: `Design system · version {version}`,
		homeTitle: `The tokens, CSS and React components behind every Skribly screen`,
		homeLead: `{groups} component groups and {components} components on React Aria, in light, dark and high contrast from one set of tokens. No component has words of its own: every label is a prop, so each app writes its own.`,
		getStarted: `Get started`,
		browseComponents: `Browse components`,
		specimenLabel: `Real components of the kit, set like a type specimen: the display type, colour tokens, two buttons, a field, a switch, a badge, a status and a progress bar.`,
		specimenControls: `Try the hero in another look`,
		specimenTheme: `Theme`,
		specimenThemePage: `As the page`,
		specimenLight: `Light`,
		specimenDark: `Dark`,
		specimenContrast: `High contrast`,
		specimenDensity: `Density`,
		specimenComfortable: `Comfortable`,
		specimenCompact: `Compact`,
		specimenColour: `Product colour`,
		specimenButton: `Publish`,
		specimenSecondary: `Save draft`,
		specimenField: `Project name`,
		specimenValue: `Release notes`,
		specimenToggle: `Notify the team`,
		specimenBadge: `New`,
		specimenStatus: `Saved a minute ago`,
		specimenProgress: `Upload`,
		agentsTitle: `Agents`,
		agentsWorking: `working`,
		agentsWaiting: `waiting`,
		agentsDone: `done`,
		pauseMotion: `Pause motion`,
		playMotion: `Play motion`,
		clipsLead: `Short recordings of this site, with captions. They play while on screen and stop when animations are turned off.`,
		layersTitle: `Three layers, one source`,
		layersTokens: `The <strong class="text-fg">tokens</strong> are the source: colours, type, space, radius and motion, written once as W3C token files and built into CSS variables. Change a token and every layer follows.`,
		layersPlain: `<strong class="text-fg">Plain CSS</strong> classes give any page the same buttons, fields, cards and messages with no build step and no framework.`,
		layersReact: `<strong class="text-fg">React components</strong> add behaviour. React Aria brings keyboard support, focus management and screen reader semantics; the tokens bring the look.`,
		guidesTitle: `Start here`,
		groupsTitle: `Component groups`,
		pageOne: `1 page`,
		pageFew: `{count} pages`,
		pageMany: `{count} pages`,
		guideStart: `Install from the private repository, then use it in React or with plain CSS.`,
		guidePrinciples: `Six rules every component keeps, from one accent to tokens first.`,
		guideTokens: `Every colour, size and duration, with its value in each theme.`,
		guideAccessibility: `How the library is built to WCAG 2.2 AA as a target, and what your app still owns.`,
		guideMessages: `Success, information, warning and error: which component, when, and how to write it.`,
		guidePlainCss: `The .sk-* classes for pages with no React, live.`,
		componentsIndexTitle: `Components`,
		componentsIndexDescription: `All {components} React components of Skribly UI in {groups} groups, each live in light, dark and high contrast, with code to copy and accessibility notes.`,
		componentsIndexLead: `{components} React components in {groups} groups, built on React Aria and styled only with the tokens. Each one is shown in the light, dark and high contrast themes, with code to copy and its accessibility notes.`,
		groupDescriptionFallback: `The {title} components of Skribly UI, live in every theme.`,
		groupCount: `{pages} pages, {exports} exports`,
		importTitle: `Import`,
		importText: `Each group has its own entry, so an app that needs only this group loads only this group. Everything is also exported from <code>@skribly/ui</code>.`,
		importLabel: `Import from {title}`,
		pagesTitle: `Pages in this group`,
		onlyEnglish: `English only for now`,
		previewTitle: `Preview`,
		usageTitle: `Usage`,
		usageImportLabel: `Import of {name}`,
		usageSampleLabel: `Usage of {name}`,
		usageText: `Every label is a prop, so the app passes its own words in its own language. See <a href="{href}">no built-in text</a>.`,
		accessibilityTitle: `Accessibility`,
		accessibilityEmpty: `This page has no notes of its own yet. The rules every component follows are on the <a href="{href}">accessibility</a> page.`,
		axeNote: `This demo runs through axe in all three themes on every test run. See <a href="{href}" class="text-accent-text underline">what the tests check</a>.`,
		demoDescriptionFallback: `{name}, part of the {group} components of Skribly UI.`,
		demoLeadFallback: `Part of {group}.`,
		previewAll: `Live in all three themes. Everything here is interactive.`,
		previewOne: `Live and interactive in one theme.`,
		previewTheme: `Theme of the {name} preview`,
		previewThemeSuffix: ` theme, {name}`,
		allThemes: `All themes`,
		notFoundTitle: `Page not found`,
		notFoundDescription: `This page of Skribly UI does not exist. Search for it, or start from the home page.`,
		notFoundAll: `See all components`,
		licencesTitle: `Licences`,
		licencesDescription: `The open source software and fonts that Skribly UI and this site ship, each with its licence and repository.`,
		licencesCrumb: `Licences`
	},
	pl: {
		brand: `Skribly UI`,
		onThisPage: `Na tej stronie`,
		linkToSection: `Link do sekcji {title}`,
		previousNext: `Poprzednia i następna strona`,
		previous: `Poprzednia`,
		next: `Następna`,
		copy: `Kopiuj`,
		copied: `Skopiowano`,
		copyFailed: `Nie udało się skopiować. Zaznacz kod i naciśnij Ctrl+C.`,
		codeExample: `Przykład: {language}`,
		codeExampleDefault: `Przykład kodu`,
		codeFor: `Kod przykładu {label}`,
		doLabel: `Rób tak. `,
		dontLabel: `Nie rób tak. `,
		errorTone: `Błąd`,
		previewFailed: `Nie udało się wyświetlić podglądu: {name}`,
		exports: `Eksporty`,
		componentGroups: `Grupy komponentów`,
		components: `Komponenty`,
		allComponents: `Wszystkie komponenty`,
		seeInAction: `Zobacz w działaniu`,
		patterns: `Wzorce`,
		ogAlt: `Znak Skribly obok słów Skribly UI, jeden spokojny wygląd dla każdego narzędzia Skribly.`,
		homeDescription: `Skribly UI to system projektowy narzędzi Skribly: tokeny, czysty CSS i dostępne komponenty React w motywach dziennym, nocnym i wysokiego kontrastu.`,
		homeEyebrow: `System projektowy · wersja {version}`,
		homeTitle: `Tokeny, CSS i\xA0komponenty React pod każdym ekranem Skribly`,
		homeLead: `{groups} grup komponentów i\xA0{components} komponentów na React Aria, w\xA0motywie dziennym, nocnym i\xA0wysokiego kontrastu z\xA0jednego zestawu tokenów. Żaden komponent nie ma wbudowanych słów: każda etykieta to prop, więc każda aplikacja pisze własne.`,
		getStarted: `Pierwsze kroki`,
		browseComponents: `Przeglądaj komponenty`,
		specimenLabel: `Prawdziwe komponenty zestawu złożone jak wzornik pisma: krój nagłówków, tokeny kolorów, dwa przyciski, pole, przełącznik, plakietka, status i\xA0pasek postępu.`,
		specimenControls: `Wypróbuj hero w innym wyglądzie`,
		specimenTheme: `Motyw`,
		specimenThemePage: `Jak strona`,
		specimenLight: `Dzień`,
		specimenDark: `Noc`,
		specimenContrast: `Wysoki kontrast`,
		specimenDensity: `Gęstość`,
		specimenComfortable: `Wygodna`,
		specimenCompact: `Zwarta`,
		specimenColour: `Kolor produktu`,
		specimenButton: `Opublikuj`,
		specimenSecondary: `Zapisz szkic`,
		specimenField: `Nazwa projektu`,
		specimenValue: `Informacje o wydaniu`,
		specimenToggle: `Powiadom zespół`,
		specimenBadge: `Nowe`,
		specimenStatus: `Zapisano minutę temu`,
		specimenProgress: `Wysyłanie`,
		agentsTitle: `Agenci`,
		agentsWorking: `pracuje`,
		agentsWaiting: `czeka`,
		agentsDone: `gotowe`,
		pauseMotion: `Zatrzymaj ruch`,
		playMotion: `Włącz ruch`,
		clipsLead: `Krótkie nagrania tej strony, z napisami. Odtwarzają się, gdy są na ekranie, i zatrzymują się, gdy animacje są wyłączone.`,
		layersTitle: `Trzy warstwy, jedno źródło`,
		layersTokens: `<strong class="text-fg">Tokeny</strong> są źródłem: kolory, typografia, odstępy, zaokrąglenia i ruch, zapisane raz jako pliki tokenów W3C i zbudowane w zmienne CSS. Zmień token, a każda warstwa pójdzie za nim.`,
		layersPlain: `Klasy <strong class="text-fg">czystego CSS</strong> dają każdej stronie te same przyciski, pola, karty i komunikaty, bez kroku budowania i bez frameworka.`,
		layersReact: `<strong class="text-fg">Komponenty React</strong> dodają zachowanie. React Aria zapewnia obsługę klawiatury, zarządzanie fokusem i semantykę dla czytników ekranu, a tokeny zapewniają wygląd.`,
		guidesTitle: `Zacznij tutaj`,
		groupsTitle: `Grupy komponentów`,
		pageOne: `1 strona`,
		pageFew: `{count} strony`,
		pageMany: `{count} stron`,
		guideStart: `Zainstaluj z prywatnego repozytorium i używaj w Reakcie albo z czystym CSS.`,
		guidePrinciples: `Sześć zasad, których trzyma się każdy komponent: od jednego akcentu po tokeny w pierwszej kolejności.`,
		guideTokens: `Każdy kolor, rozmiar i czas trwania, z wartością w każdym motywie.`,
		guideAccessibility: `Jak biblioteka jest budowana z celem WCAG 2.2 AA i za co nadal odpowiada twoja aplikacja.`,
		guideMessages: `Sukces, informacja, ostrzeżenie i błąd: który komponent, kiedy i jak napisać tekst.`,
		guidePlainCss: `Klasy .sk-* dla stron bez Reacta, na żywo.`,
		componentsIndexTitle: `Komponenty`,
		componentsIndexDescription: `Wszystkie komponenty React ({components}) Skribly UI w {groups} grupach, każdy na żywo w motywie dziennym, nocnym i wysokiego kontrastu, z kodem do skopiowania i notatkami o dostępności.`,
		componentsIndexLead: `Komponenty React ({components}) w {groups} grupach, zbudowane na React Aria i stylowane wyłącznie tokenami. Każdy jest pokazany w motywie dziennym, nocnym i wysokiego kontrastu, z kodem do skopiowania i notatkami o dostępności.`,
		groupDescriptionFallback: `Komponenty z grupy {title} w Skribly UI, na żywo w każdym motywie.`,
		groupCount: `Strony: {pages}, eksporty: {exports}`,
		importTitle: `Import`,
		importText: `Każda grupa ma własny punkt wejścia, więc aplikacja, która potrzebuje tylko tej grupy, ładuje tylko ją. Wszystko jest też eksportowane z <code>@skribly/ui</code>.`,
		importLabel: `Import z grupy {title}`,
		pagesTitle: `Strony tej grupy`,
		onlyEnglish: `Na razie tylko po angielsku`,
		previewTitle: `Podgląd`,
		usageTitle: `Użycie`,
		usageImportLabel: `Import komponentu {name}`,
		usageSampleLabel: `Użycie komponentu {name}`,
		usageText: `Każda etykieta jest propem, więc aplikacja przekazuje własne słowa we własnym języku. Zobacz zasadę <a href="{href}">brak wbudowanego tekstu</a>.`,
		accessibilityTitle: `Dostępność`,
		accessibilityEmpty: `Ta strona nie ma jeszcze własnych notatek. Zasady, których trzyma się każdy komponent, są na stronie <a href="{href}">Dostępność</a>.`,
		axeNote: `Ten przykład przechodzi przez axe we wszystkich trzech motywach przy każdym uruchomieniu testów. Zobacz, <a href="{href}" class="text-accent-text underline">co sprawdzają testy</a>.`,
		demoDescriptionFallback: `{name}, część grupy {group} w Skribly UI.`,
		demoLeadFallback: `Część grupy {group}.`,
		previewAll: `Na żywo we wszystkich trzech motywach. Wszystko tutaj jest interaktywne.`,
		previewOne: `Na żywo i interaktywnie w jednym motywie.`,
		previewTheme: `Motyw podglądu: {name}`,
		previewThemeSuffix: `, podgląd: {name}`,
		allThemes: `Wszystkie motywy`,
		notFoundTitle: `Nie ma takiej strony`,
		notFoundDescription: `Takiej strony Skribly UI nie ma. Wyszukaj ją albo zacznij od strony głównej.`,
		notFoundAll: `Zobacz wszystkie komponenty`,
		licencesTitle: `Licencje`,
		licencesDescription: `Oprogramowanie open source i fonty, które dostarczają Skribly UI i ta strona, każde z licencją i repozytorium.`,
		licencesCrumb: `Licencje`
	}
};
function L(e, t) {
	return e.replaceAll(/\{(\w+)\}/g, (e, n) => String(t[n] ?? ``));
}
var R = (e) => I[e], z = (0, x.createContext)(`en`), B = () => R((0, x.useContext)(z));
function V(e) {
	let t = R(e);
	return {
		copyLabel: t.copy,
		copiedLabel: t.copied,
		copyFailedLabel: t.copyFailed
	};
}
var H = `font-display tracking-[-0.025em]`;
function U({ eyebrow: e, title: t, lead: n, children: r }) {
	return (0, S.jsx)(`header`, {
		className: `sk-hero sk-hero--page sk-product--ui sk-pattern sk-pattern--grid`,
		"data-sk-hero": `page`,
		children: (0, S.jsxs)(`div`, {
			className: `sk-hero__body`,
			children: [
				e ? (0, S.jsx)(`p`, {
					className: `sk-hero__eyebrow`,
					children: e
				}) : null,
				(0, S.jsx)(`h1`, {
					id: `page-title`,
					tabIndex: -1,
					className: `sk-hero__title outline-none`,
					children: t
				}),
				n || r ? (0, S.jsxs)(`div`, {
					className: `sk-hero__lead`,
					children: [n, r ? (0, S.jsx)(`div`, {
						className: `mt-6`,
						children: r
					}) : null]
				}) : null
			]
		})
	});
}
function W(e) {
	return x.Children.toArray(e).flatMap((e) => (0, x.isValidElement)(e) && e.type === q && typeof e.props.id == `string` && typeof e.props.title == `string` ? [{
		id: e.props.id,
		title: e.props.title
	}] : []);
}
function G({ items: e }) {
	let t = B(), [n, r] = (0, x.useState)(null);
	return (0, x.useEffect)(() => {
		if (typeof IntersectionObserver != `function`) return;
		let t = new IntersectionObserver((e) => {
			let t = e.filter((e) => e.isIntersecting).toSorted((e, t) => e.boundingClientRect.top - t.boundingClientRect.top);
			t[0] && r(t[0].target.id);
		}, { rootMargin: `-72px 0px -65% 0px` });
		for (let n of e) {
			let e = document.getElementById(n.id);
			e && t.observe(e);
		}
		return () => t.disconnect();
	}, [e]), e.length < 2 ? null : (0, S.jsxs)(`nav`, {
		"aria-label": t.onThisPage,
		className: `sticky top-20 hidden max-h-[calc(100dvh-6rem)] self-start overflow-y-auto xl:block`,
		children: [(0, S.jsx)(`p`, {
			className: `mb-3 text-label font-semibold text-muted uppercase`,
			children: t.onThisPage
		}), (0, S.jsx)(`ul`, {
			className: `space-y-0.5 border-s border-border text-caption`,
			children: e.map((e) => (0, S.jsx)(`li`, { children: (0, S.jsx)(`a`, {
				href: `#${e.id}`,
				...n === e.id ? { "aria-current": `location` } : {},
				className: `-ms-px block border-s-2 border-transparent py-1 ps-3 text-muted no-underline hover:text-fg aria-[current=location]:border-accent aria-[current=location]:font-medium aria-[current=location]:text-fg forced-colors:aria-[current=location]:underline`,
				children: e.title
			}) }, e.id))
		})]
	});
}
function K({ children: e, wide: t = !1, lang: n = `en` }) {
	let r = (0, x.useMemo)(() => W(e), [e]), i = x.Children.toArray(e), a = i.filter((e) => (0, x.isValidElement)(e) && e.type === U), s = i.filter((e) => !a.includes(e));
	return (0, S.jsxs)(z.Provider, {
		value: n,
		children: [a, (0, S.jsxs)(`div`, {
			className: o(`grid gap-12`, t ? `` : `xl:grid-cols-[minmax(0,1fr)_13rem]`),
			children: [(0, S.jsx)(`article`, {
				className: `min-w-0`,
				children: s
			}), t ? null : (0, S.jsx)(G, { items: r })]
		})]
	});
}
function q({ id: e, title: t, children: n, className: r }) {
	let i = B();
	return (0, S.jsxs)(`section`, {
		"aria-labelledby": e,
		className: o(`mb-14 min-w-0`, r),
		children: [(0, S.jsxs)(`h2`, {
			id: e,
			"data-section": t,
			tabIndex: -1,
			className: o(H, `group mb-4 flex scroll-mt-24 items-center gap-2 text-[1.625rem] leading-tight font-semibold text-fg outline-none`),
			children: [(0, S.jsx)(`span`, { children: t }), (0, S.jsxs)(`a`, {
				href: `#${e}`,
				className: `inline-grid size-7 place-items-center rounded-md text-muted opacity-0 transition-opacity group-hover:opacity-100 hover:bg-hover hover:text-fg focus-visible:opacity-100 motion-reduce:transition-none`,
				children: [(0, S.jsx)(b, {
					"aria-hidden": !0,
					className: `size-4`
				}), (0, S.jsx)(`span`, {
					className: `sr-only`,
					children: L(i.linkToSection, { title: t })
				})]
			})]
		}), (0, S.jsx)(`div`, {
			className: `space-y-5`,
			children: n
		})]
	});
}
function J({ title: e, children: t, id: n }) {
	return (0, S.jsxs)(`div`, {
		className: `min-w-0 space-y-3 pt-2`,
		children: [(0, S.jsx)(`h3`, {
			...n ? { id: n } : {},
			className: `scroll-mt-24 text-[1.125rem] font-semibold text-fg`,
			children: e
		}), t]
	});
}
function Y({ children: e, className: t }) {
	return (0, S.jsx)(F, {
		size: `lg`,
		className: o(`max-w-[70ch]`, t),
		children: e
	});
}
function X({ code: e, language: t, title: n, label: r, lang: i }) {
	let a = (0, x.useContext)(z), o = i ?? a, s = R(o);
	return (0, S.jsx)(M, {
		code: e,
		label: r ?? n ?? (t ? L(s.codeExample, { language: t }) : s.codeExampleDefault),
		...n === void 0 ? {} : { title: n },
		...t === void 0 ? {} : { language: t },
		...V(o)
	});
}
function Z({ label: e, children: t, code: n, language: r = `tsx`, className: i }) {
	let a = (0, x.useContext)(z), s = R(a);
	return (0, S.jsxs)(`figure`, {
		className: `min-w-0 overflow-hidden rounded-xl border border-border`,
		children: [
			(0, S.jsxs)(`figcaption`, {
				className: `flex items-center gap-2 border-b border-border bg-sunken px-4 py-2 text-caption font-medium text-muted`,
				children: [(0, S.jsx)(`span`, {
					"aria-hidden": !0,
					className: `size-1.5 rounded-full bg-accent forced-colors:bg-[CanvasText]`
				}), e]
			}),
			(0, S.jsx)(`div`, {
				"data-preview": ``,
				className: o(`min-w-0 bg-bg p-5 sm:p-6`, i),
				children: (0, S.jsx)($, {
					name: e,
					children: t
				})
			}),
			n ? (0, S.jsx)(M, {
				code: n,
				label: L(s.codeFor, { label: e }),
				language: r,
				...V(a),
				className: `rounded-none border-x-0 border-b-0`
			}) : null
		]
	});
}
var Q = (e) => ({
	role: `group`,
	"aria-label": e,
	tabIndex: 0
});
function ee({ label: e, children: t }) {
	return (0, S.jsx)(`div`, {
		...Q(e),
		className: `max-w-full min-w-0 overflow-x-auto rounded-xl border border-border bg-surface`,
		children: (0, S.jsx)(`table`, {
			className: `w-full min-w-[36rem] border-collapse text-start text-body [&_td]:border-t [&_td]:border-border [&_td]:px-4 [&_td]:py-3 [&_td]:align-top [&_th]:bg-sunken [&_th]:px-4 [&_th]:py-2.5 [&_th]:text-start [&_th]:align-bottom [&_th]:text-caption [&_th]:font-semibold [&_th]:text-muted [&_tbody_th]:border-t [&_tbody_th]:border-border [&_tbody_th]:bg-transparent [&_tbody_th]:align-top [&_tbody_th]:text-body [&_tbody_th]:text-fg [&_code]:rounded-sm [&_code]:bg-sunken [&_code]:px-1 [&_code]:font-mono [&_code]:text-[0.8125rem]`,
			children: t
		})
	});
}
function te({ good: e, bad: t, goodText: n, badText: a }) {
	let o = B(), s = `flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-surface`;
	return (0, S.jsxs)(`div`, {
		className: `grid gap-4 md:grid-cols-2`,
		children: [(0, S.jsxs)(`figure`, {
			className: s,
			children: [(0, S.jsx)(`div`, {
				className: `min-w-0 flex-1 border-b-[3px] border-ok bg-bg p-5`,
				children: e
			}), (0, S.jsxs)(`figcaption`, {
				className: `flex gap-2 p-4 text-body`,
				children: [(0, S.jsx)(r, {
					"aria-hidden": !0,
					className: `mt-0.5 size-4 shrink-0 text-ok`
				}), (0, S.jsxs)(`span`, { children: [(0, S.jsx)(`strong`, {
					className: `font-semibold text-ok`,
					children: o.doLabel
				}), n] })]
			})]
		}), (0, S.jsxs)(`figure`, {
			className: s,
			children: [(0, S.jsx)(`div`, {
				className: `min-w-0 flex-1 border-b-[3px] border-danger bg-bg p-5`,
				children: t
			}), (0, S.jsxs)(`figcaption`, {
				className: `flex gap-2 p-4 text-body`,
				children: [(0, S.jsx)(i, {
					"aria-hidden": !0,
					className: `mt-0.5 size-4 shrink-0 text-danger`
				}), (0, S.jsxs)(`span`, { children: [(0, S.jsx)(`strong`, {
					className: `font-semibold text-danger`,
					children: o.dontLabel
				}), a] })]
			})]
		})]
	});
}
function ne({ to: e, title: t, children: n, icon: r, meta: i }) {
	return (0, S.jsxs)(`a`, {
		href: e,
		className: `group flex min-w-0 flex-col gap-2 rounded-xl border border-border bg-surface p-5 text-fg no-underline shadow-sm transition-[border-color,box-shadow,translate] hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0`,
		children: [
			(0, S.jsxs)(`span`, {
				className: `flex items-center gap-3`,
				children: [
					r ? (0, S.jsx)(`span`, {
						"aria-hidden": !0,
						className: `grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent-text [&>svg]:size-[1.125rem]`,
						children: r
					}) : null,
					(0, S.jsx)(`span`, {
						className: `min-w-0 flex-1 text-title font-semibold break-words`,
						children: t
					}),
					(0, S.jsx)(v, {
						"aria-hidden": !0,
						className: `size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent-text motion-reduce:transition-none`
					})
				]
			}),
			n ? (0, S.jsx)(`span`, {
				className: `text-body text-muted`,
				children: n
			}) : null,
			i ? (0, S.jsx)(`span`, {
				className: `mt-auto pt-1 text-caption text-muted`,
				children: i
			}) : null
		]
	});
}
function re({ previous: e, next: t }) {
	let n = B();
	if (!e && !t) return null;
	let r = `flex min-w-0 flex-1 flex-col gap-1 rounded-xl border border-border bg-surface p-4 no-underline hover:border-border-strong`;
	return (0, S.jsxs)(`nav`, {
		"aria-label": n.previousNext,
		className: `mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row`,
		children: [e ? (0, S.jsxs)(`a`, {
			href: e.to,
			rel: `prev`,
			className: r,
			children: [(0, S.jsxs)(`span`, {
				className: `flex items-center gap-1 text-caption text-muted`,
				children: [(0, S.jsx)(g, {
					"aria-hidden": !0,
					className: `size-3.5`
				}), n.previous]
			}), (0, S.jsx)(`span`, {
				className: `font-semibold break-words text-fg`,
				children: e.title
			})]
		}) : (0, S.jsx)(`span`, {
			"aria-hidden": !0,
			className: `hidden flex-1 sm:block`
		}), t ? (0, S.jsxs)(`a`, {
			href: t.to,
			rel: `next`,
			className: o(r, `sm:items-end sm:text-end`),
			children: [(0, S.jsxs)(`span`, {
				className: `flex items-center gap-1 text-caption text-muted`,
				children: [n.next, (0, S.jsx)(v, {
					"aria-hidden": !0,
					className: `size-3.5`
				})]
			}), (0, S.jsx)(`span`, {
				className: `font-semibold break-words text-fg`,
				children: t.title
			})]
		}) : null]
	});
}
var $ = class extends x.Component {
	static contextType = z;
	state = { error: null };
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	componentDidCatch(e, t) {}
	render() {
		if (this.state.error) {
			let e = R(this.context);
			return (0, S.jsx)(k, {
				tone: `danger`,
				toneLabel: e.errorTone,
				title: L(e.previewFailed, { name: this.props.name }),
				children: this.state.error.message
			});
		}
		return this.props.children;
	}
};
export { O as C, w as D, T as E, v as O, k as S, E as T, L as _, z as a, M as b, re as c, J as d, ee as f, B as g, H as h, Z as i, g as k, $ as l, V as m, te as n, ne as o, Y as p, K as r, U as s, X as t, q as u, R as v, D as w, j as x, F as y };
