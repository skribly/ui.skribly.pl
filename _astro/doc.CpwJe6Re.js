import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { _ as t, d as n, f as r, g as i, i as a, n as o, r as s, t as c, y as l } from "./useOverflow.Dq483xd0.js";
import { n as u } from "./react-dom.B9zIfLd2.js";
var d = e(u(), 1), f = i(), p = r(`action.check`), m = r(`status.error`), h = r(`action.copy`);
async function g(e) {
	if (typeof navigator > `u` || !navigator.clipboard) throw Error(`No clipboard`);
	await navigator.clipboard.writeText(e);
}
function _({ text: e, copyLabel: n, copiedLabel: r, copyFailedLabel: i, copyText: a, iconOnly: o = !1, className: s }) {
	let [c, u] = (0, d.useState)(`idle`), _ = (0, d.useRef)({
		hovered: !1,
		focused: !1,
		expired: !1
	}), v = (0, d.useRef)(void 0), y = (0, d.useCallback)(() => {
		_.current.expired = !1, u(`idle`);
	}, []), b = (0, d.useCallback)(() => {
		let { hovered: e, focused: t, expired: n } = _.current;
		!e && !t && n && y();
	}, [y]);
	(0, d.useEffect)(() => () => clearTimeout(v.current), []);
	let x = (0, d.useCallback)(async () => {
		clearTimeout(v.current), _.current.expired = !1;
		try {
			await (a ?? g)(e), u(`copied`);
		} catch {
			u(`failed`);
		}
		v.current = setTimeout(() => {
			_.current.expired = !0, b();
		}, 2500);
	}, [
		a,
		b,
		e
	]), S = (0, d.useCallback)(() => void x(), [x]), C = (0, d.useCallback)((e) => {
		_.current.hovered = e, b();
	}, [b]), w = (0, d.useCallback)((e) => {
		_.current.focused = e, b();
	}, [b]), T = c === `copied` ? r : c === `failed` ? i : n, E = c === `copied` ? p : c === `failed` ? m : h;
	return (0, f.jsxs)(f.Fragment, { children: [(0, f.jsxs)(l, {
		onPress: S,
		onHoverChange: C,
		onFocusChange: w,
		...o ? { "aria-label": n } : {},
		className: t(`inline-flex h-control-sm min-w-control-sm shrink-0 items-center justify-center gap-1.5 rounded-md border border-transparent text-caption font-medium transition-colors data-hovered:bg-hover data-pressed:bg-selected`, o ? `px-0` : `px-2`, c === `idle` && `text-muted data-hovered:text-fg`, c === `copied` && `text-ok`, c === `failed` && `text-danger`, s),
		children: [(0, f.jsx)(E, {
			size: 14,
			"aria-hidden": !0
		}), o ? null : (0, f.jsx)(`span`, { children: T })]
	}), (0, f.jsx)(`output`, {
		className: `sr-only`,
		children: c === `idle` ? `` : T
	})] });
}
function v({ code: e, label: n, title: r, language: i, showLineNumbers: a = !1, wrap: o = !1, maxLines: c, copyLabel: l, copiedLabel: u, copyFailedLabel: p, copyText: m, className: h, ...g }) {
	let v = (0, d.useMemo)(() => e.replace(/\n$/, ``).split(`
`), [e]), y = (0, d.useMemo)(() => v.map((e, t) => ({
		number: t + 1,
		line: e
	})), [v]), b = (0, d.useMemo)(() => c ? { maxHeight: `calc(${c * 1.625}em + 1.5rem)` } : void 0, [c]), x = l !== void 0 && u !== void 0 && p !== void 0, S = r !== void 0 || i !== void 0 || x, C = (0, d.useMemo)(() => ({ minWidth: `${String(v.length).length + 1}ch` }), [v.length]);
	return (0, f.jsxs)(`div`, {
		...g,
		className: t(`min-w-0 overflow-hidden rounded-lg border border-border bg-sunken text-fg`, h),
		children: [S ? (0, f.jsxs)(`div`, {
			className: `flex min-h-control-md flex-wrap items-center gap-x-2 gap-y-1 border-b border-border bg-bar py-1 ps-3 pe-1`,
			children: [
				r === void 0 ? null : (0, f.jsx)(`span`, {
					className: `min-w-0 flex-1 truncate font-mono text-caption font-medium text-fg`,
					children: r
				}),
				i === void 0 ? null : (0, f.jsx)(`span`, {
					className: t(`rounded-sm border border-border bg-surface px-1.5 font-mono text-label text-muted uppercase`, r === void 0 && `me-auto`),
					children: i
				}),
				x ? (0, f.jsx)(_, {
					text: e,
					copyLabel: l,
					copiedLabel: u,
					copyFailedLabel: p,
					...m === void 0 ? {} : { copyText: m },
					className: r === void 0 && i === void 0 ? `ms-auto` : ``
				}) : null
			]
		}) : null, (0, f.jsx)(`pre`, {
			...s(n),
			translate: `no`,
			style: b,
			className: t(`m-0 overflow-auto p-3 font-mono text-caption leading-[1.625]`, o ? `whitespace-pre-wrap [overflow-wrap:anywhere]` : `whitespace-pre`),
			children: (0, f.jsx)(`code`, {
				className: a ? `table w-full border-collapse` : void 0,
				children: a ? y.map(({ number: e, line: t }) => (0, f.jsxs)(`span`, {
					className: `table-row`,
					children: [(0, f.jsx)(`span`, {
						"aria-hidden": !0,
						className: `table-cell pe-4 text-end text-muted select-none`,
						style: C,
						children: e
					}), (0, f.jsx)(`span`, {
						className: `table-cell`,
						children: t
					})]
				}, e)) : v.join(`
`)
			})
		})]
	});
}
var y = {
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
		tableHint: `Swipe to see more`,
		componentGroups: `Component groups`,
		components: `Components`,
		showPagesOf: `Show the pages of {group}`,
		backToGroups: `Back to groups`,
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
		guideIcons: `Every icon, free to use: the recommended names and the complete Lucide set, in three tones.`,
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
		statusLabel: `Status and checks of {name}`,
		statusTerm: `Status`,
		statusYes: `yes`,
		statusNo: `no`,
		statusStable: `Stable`,
		statusExperimental: `Experimental`,
		statusAxe: `axe`,
		statusUnitTest: `Unit tests`,
		statusKeyboard: `Keyboard pass`,
		statusScreenReader: `Screen reader pass`,
		statusNotYet: `not yet`,
		statusPass: `{who}, {when}`,
		statusReaderPass: `{reader}, {who}, {when}`,
		statusUsedIn: `Used in`,
		statusUsedNowhere: `no app yet`,
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
		tableHint: `Przesuń, aby zobaczyć więcej`,
		componentGroups: `Grupy komponentów`,
		components: `Komponenty`,
		showPagesOf: `Pokaż strony grupy {group}`,
		backToGroups: `Wróć do grup`,
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
		guideIcons: `Wszystkie ikony, do swobodnego użycia: zalecane nazwy i pełny zestaw Lucide, w trzech tonach.`,
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
		statusLabel: `Status i testy: {name}`,
		statusTerm: `Status`,
		statusYes: `tak`,
		statusNo: `nie`,
		statusStable: `Stabilny`,
		statusExperimental: `Eksperymentalny`,
		statusAxe: `axe`,
		statusUnitTest: `Testy jednostkowe`,
		statusKeyboard: `Test z klawiatury`,
		statusScreenReader: `Test z czytnikiem ekranu`,
		statusNotYet: `jeszcze nie`,
		statusPass: `{who}, {when}`,
		statusReaderPass: `{reader}, {who}, {when}`,
		statusUsedIn: `Używany w`,
		statusUsedNowhere: `jeszcze w żadnej aplikacji`,
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
function b(e, t) {
	return e.replaceAll(/\{(\w+)\}/g, (e, n) => String(t[n] ?? ``));
}
var x = (e) => y[e], S = (0, d.createContext)(`en`), C = () => x((0, d.useContext)(S));
function w(e) {
	let t = x(e);
	return {
		copyLabel: t.copy,
		copiedLabel: t.copied,
		copyFailedLabel: t.copyFailed
	};
}
var T = `font-display tracking-[-0.025em]`;
function E({ eyebrow: e, title: t, lead: n, children: r }) {
	return (0, f.jsx)(`header`, {
		className: `sk-hero sk-hero--page sk-product--ui sk-pattern sk-pattern--grid`,
		"data-sk-hero": `page`,
		children: (0, f.jsxs)(`div`, {
			className: `sk-hero__body`,
			children: [
				e ? (0, f.jsx)(`p`, {
					className: `sk-hero__eyebrow`,
					children: e
				}) : null,
				(0, f.jsx)(`h1`, {
					id: `page-title`,
					tabIndex: -1,
					className: `sk-hero__title outline-none`,
					children: t
				}),
				n || r ? (0, f.jsxs)(`div`, {
					className: `sk-hero__lead`,
					children: [n, r ? (0, f.jsx)(`div`, {
						className: `mt-6`,
						children: r
					}) : null]
				}) : null
			]
		})
	});
}
function D(e) {
	return d.Children.toArray(e).flatMap((e) => (0, d.isValidElement)(e) && e.type === A && typeof e.props.id == `string` && typeof e.props.title == `string` ? [{
		id: e.props.id,
		title: e.props.title
	}] : []);
}
function O({ items: e }) {
	let t = C(), [n, r] = (0, d.useState)(null);
	return (0, d.useEffect)(() => {
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
	}, [e]), e.length < 2 ? null : (0, f.jsxs)(`nav`, {
		"aria-label": t.onThisPage,
		className: `sticky top-20 hidden max-h-[calc(100dvh-6rem)] self-start overflow-y-auto xl:block`,
		children: [(0, f.jsx)(`p`, {
			className: `mb-3 text-label font-semibold text-muted uppercase`,
			children: t.onThisPage
		}), (0, f.jsx)(`ul`, {
			className: `space-y-0.5 border-s border-border text-caption`,
			children: e.map((e) => (0, f.jsx)(`li`, { children: (0, f.jsx)(`a`, {
				href: `#${e.id}`,
				...n === e.id ? { "aria-current": `location` } : {},
				className: `-ms-px block border-s-2 border-transparent py-1 ps-3 text-muted no-underline hover:text-fg aria-[current=location]:border-accent aria-[current=location]:font-medium aria-[current=location]:text-fg forced-colors:aria-[current=location]:underline`,
				children: e.title
			}) }, e.id))
		})]
	});
}
function k({ children: e, wide: n = !1, lang: r = `en` }) {
	let i = (0, d.useMemo)(() => D(e), [e]), a = d.Children.toArray(e), o = a.filter((e) => (0, d.isValidElement)(e) && e.type === E), s = a.filter((e) => !o.includes(e));
	return (0, f.jsxs)(S.Provider, {
		value: r,
		children: [o, (0, f.jsxs)(`div`, {
			className: t(`grid gap-12`, n ? `` : `xl:grid-cols-[minmax(0,1fr)_13rem]`),
			children: [(0, f.jsx)(`article`, {
				className: `min-w-0`,
				children: s
			}), n ? null : (0, f.jsx)(O, { items: i })]
		})]
	});
}
function A({ id: e, title: r, children: i, className: a }) {
	let o = C();
	return (0, f.jsxs)(`section`, {
		"aria-labelledby": e,
		className: t(`mb-14 min-w-0`, a),
		children: [(0, f.jsxs)(`h2`, {
			id: e,
			"data-section": r,
			tabIndex: -1,
			className: t(T, `group mb-4 flex scroll-mt-24 items-center gap-2 text-[1.625rem] leading-tight font-semibold text-fg outline-none`),
			children: [(0, f.jsx)(`span`, { children: r }), (0, f.jsxs)(`a`, {
				href: `#${e}`,
				className: `inline-grid size-7 place-items-center rounded-md text-muted opacity-0 transition-opacity group-hover:opacity-100 hover:bg-hover hover:text-fg focus-visible:opacity-100 motion-reduce:transition-none`,
				children: [(0, f.jsx)(n, {
					name: `content.hash`,
					"aria-hidden": !0,
					className: `size-4`
				}), (0, f.jsx)(`span`, {
					className: `sr-only`,
					children: b(o.linkToSection, { title: r })
				})]
			})]
		}), (0, f.jsx)(`div`, {
			className: `space-y-5`,
			children: i
		})]
	});
}
function j({ title: e, children: t, id: n }) {
	return (0, f.jsxs)(`div`, {
		className: `min-w-0 space-y-3 pt-2`,
		children: [(0, f.jsx)(`h3`, {
			...n ? { id: n } : {},
			className: `scroll-mt-24 text-[1.125rem] font-semibold text-fg`,
			children: e
		}), t]
	});
}
function M({ children: e, className: n }) {
	return (0, f.jsx)(o, {
		size: `lg`,
		className: t(`max-w-[70ch]`, n),
		children: e
	});
}
function N({ code: e, language: t, title: n, label: r, lang: i }) {
	let a = (0, d.useContext)(S), o = i ?? a, s = x(o);
	return (0, f.jsx)(v, {
		code: e,
		label: r ?? n ?? (t ? b(s.codeExample, { language: t }) : s.codeExampleDefault),
		...n === void 0 ? {} : { title: n },
		...t === void 0 ? {} : { language: t },
		...w(o)
	});
}
function P({ label: e, children: n, code: r, language: i = `tsx`, className: a }) {
	let o = (0, d.useContext)(S), s = x(o);
	return (0, f.jsxs)(`figure`, {
		className: `min-w-0 overflow-hidden rounded-xl border border-border`,
		children: [
			(0, f.jsxs)(`figcaption`, {
				className: `flex items-center gap-2 border-b border-border bg-sunken px-4 py-2 text-caption font-medium text-muted`,
				children: [(0, f.jsx)(`span`, {
					"aria-hidden": !0,
					className: `size-1.5 rounded-full bg-accent forced-colors:bg-[CanvasText]`
				}), e]
			}),
			(0, f.jsx)(`div`, {
				"data-preview": ``,
				className: t(`min-w-0 bg-bg p-5 sm:p-6`, a),
				children: (0, f.jsx)(z, {
					name: e,
					children: n
				})
			}),
			r ? (0, f.jsx)(v, {
				code: r,
				label: b(s.codeFor, { label: e }),
				language: i,
				...w(o),
				className: `rounded-none border-x-0 border-b-0`
			}) : null
		]
	});
}
function F({ label: e, children: t }) {
	let n = C(), { attachBox: r, frameProps: i, boxProps: a, hintProps: o } = c();
	return (0, f.jsxs)(f.Fragment, { children: [o ? (0, f.jsx)(`p`, {
		...o,
		children: n.tableHint
	}) : null, (0, f.jsx)(`div`, {
		className: `sk-table-scroll`,
		...i,
		children: (0, f.jsx)(`div`, {
			ref: r,
			className: `sk-table-scroll__box`,
			...a({ label: e }),
			children: (0, f.jsx)(`table`, {
				"data-sk-table-sticky": ``,
				className: `w-full min-w-[22rem] border-collapse text-start text-body [&_td]:border-t [&_td]:border-border [&_td]:px-4 [&_td]:py-3 [&_td]:align-top [&_th]:bg-sunken [&_th]:px-4 [&_th]:py-2.5 [&_th]:text-start [&_th]:align-bottom [&_th]:text-caption [&_th]:font-semibold [&_th]:text-muted [&_tbody_th]:border-t [&_tbody_th]:border-border [&_tbody_th]:bg-transparent [&_tbody_th]:align-top [&_tbody_th]:text-body [&_tbody_th]:text-fg [&_code]:rounded-sm [&_code]:bg-sunken [&_code]:px-1 [&_code]:font-mono [&_code]:text-[0.8125rem]`,
				children: t
			})
		})
	})] });
}
function I({ good: e, bad: t, goodText: r, badText: i }) {
	let a = C(), o = `flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-surface`;
	return (0, f.jsxs)(`div`, {
		className: `grid gap-4 md:grid-cols-2`,
		children: [(0, f.jsxs)(`figure`, {
			className: o,
			children: [(0, f.jsx)(`div`, {
				className: `min-w-0 flex-1 border-b-[3px] border-ok bg-bg p-5`,
				children: e
			}), (0, f.jsxs)(`figcaption`, {
				className: `flex gap-2 p-4 text-body`,
				children: [(0, f.jsx)(n, {
					name: `action.check`,
					"aria-hidden": !0,
					className: `mt-0.5 size-4 shrink-0 text-ok`
				}), (0, f.jsxs)(`span`, { children: [(0, f.jsx)(`strong`, {
					className: `font-semibold text-ok`,
					children: a.doLabel
				}), r] })]
			})]
		}), (0, f.jsxs)(`figure`, {
			className: o,
			children: [(0, f.jsx)(`div`, {
				className: `min-w-0 flex-1 border-b-[3px] border-danger bg-bg p-5`,
				children: t
			}), (0, f.jsxs)(`figcaption`, {
				className: `flex gap-2 p-4 text-body`,
				children: [(0, f.jsx)(n, {
					name: `action.close`,
					"aria-hidden": !0,
					className: `mt-0.5 size-4 shrink-0 text-danger`
				}), (0, f.jsxs)(`span`, { children: [(0, f.jsx)(`strong`, {
					className: `font-semibold text-danger`,
					children: a.dontLabel
				}), i] })]
			})]
		})]
	});
}
function L({ to: e, title: t, children: r, icon: i, meta: a }) {
	return (0, f.jsxs)(`a`, {
		href: e,
		className: `group flex min-w-0 flex-col gap-2 rounded-xl border border-border bg-surface p-5 text-fg no-underline shadow-sm transition-[border-color,box-shadow,translate] hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0`,
		children: [
			(0, f.jsxs)(`span`, {
				className: `flex items-center gap-3`,
				children: [
					i ? (0, f.jsx)(`span`, {
						"aria-hidden": !0,
						className: `grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent-text [&>svg]:size-[1.125rem]`,
						children: i
					}) : null,
					(0, f.jsx)(`span`, {
						className: `min-w-0 flex-1 text-title font-semibold break-words`,
						children: t
					}),
					(0, f.jsx)(n, {
						name: `arrow.right`,
						"aria-hidden": !0,
						className: `size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent-text motion-reduce:transition-none`
					})
				]
			}),
			r ? (0, f.jsx)(`span`, {
				className: `text-body text-muted`,
				children: r
			}) : null,
			a ? (0, f.jsx)(`span`, {
				className: `mt-auto pt-1 text-caption text-muted`,
				children: a
			}) : null
		]
	});
}
function R({ previous: e, next: r }) {
	let i = C();
	if (!e && !r) return null;
	let a = `flex min-w-0 flex-1 flex-col gap-1 rounded-xl border border-border bg-surface p-4 no-underline hover:border-border-strong`;
	return (0, f.jsxs)(`nav`, {
		"aria-label": i.previousNext,
		className: `mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row`,
		children: [e ? (0, f.jsxs)(`a`, {
			href: e.to,
			rel: `prev`,
			className: a,
			children: [(0, f.jsxs)(`span`, {
				className: `flex items-center gap-1 text-caption text-muted`,
				children: [(0, f.jsx)(n, {
					name: `arrow.left`,
					"aria-hidden": !0,
					className: `size-3.5`
				}), i.previous]
			}), (0, f.jsx)(`span`, {
				className: `font-semibold break-words text-fg`,
				children: e.title
			})]
		}) : (0, f.jsx)(`span`, {
			"aria-hidden": !0,
			className: `hidden flex-1 sm:block`
		}), r ? (0, f.jsxs)(`a`, {
			href: r.to,
			rel: `next`,
			className: t(a, `sm:items-end sm:text-end`),
			children: [(0, f.jsxs)(`span`, {
				className: `flex items-center gap-1 text-caption text-muted`,
				children: [i.next, (0, f.jsx)(n, {
					name: `arrow.right`,
					"aria-hidden": !0,
					className: `size-3.5`
				})]
			}), (0, f.jsx)(`span`, {
				className: `font-semibold break-words text-fg`,
				children: r.title
			})]
		}) : null]
	});
}
var z = class extends d.Component {
	static contextType = S;
	state = { error: null };
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	componentDidCatch(e, t) {}
	render() {
		if (this.state.error) {
			let e = x(this.context);
			return (0, f.jsx)(a, {
				tone: `danger`,
				toneLabel: e.errorTone,
				title: b(e.previewFailed, { name: this.props.name }),
				children: this.state.error.message
			});
		}
		return this.props.children;
	}
};
export { b as _, S as a, _ as b, R as c, j as d, F as f, C as g, T as h, P as i, z as l, w as m, I as n, L as o, M as p, k as r, E as s, N as t, A as u, x as v, v as y };
