import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { n } from "./react-dom.B9zIfLd2.js";
import { a as r, b as i, y as a } from "./doc.CpwJe6Re.js";
import { t as o } from "./Button.reJVLFTj.js";
import { n as s, r as c, t as l } from "./OutputBox.CsEXIMH1.js";
import { t as u } from "./Group.C0q10xim.js";
import { $ as d, _ as f, d as p, g as m, i as h, n as g } from "./useOverflow.Dq483xd0.js";
import { t as _ } from "./IconButton.BlECy7MW.js";
import { t as ee } from "./LinkButton.Dp8fqz4g.js";
import { t as te } from "./ToggleButton.DYJfqKH1.js";
import { t as ne } from "./Spinner.C8vzy198.js";
import { t as re } from "./safeUrl.OLiFaaCH.js";
import { t as v } from "./Segmented.Dipfd2Xh.js";
import { t as y } from "./TerminalScreen.BzP83I1v.js";
var b = t(n(), 1), x = m(), S = {
	phone: {
		width: 390,
		height: 844
	},
	tablet: {
		width: 768,
		height: 1024
	},
	desktop: {
		width: 1280,
		height: 800
	}
}, C = {
	phone: `device.phone`,
	tablet: `device.tablet`,
	desktop: `device.desktop`,
	fit: `layout.panel`
}, ie = [
	`phone`,
	`tablet`,
	`desktop`,
	`fit`
], w = [
	.5,
	.75,
	1
], T = [`http`, `https`], E = () => () => void 0, D = () => window.location.origin, ae = () => null;
function O(e, t, n) {
	let r = e.split(/\s+/).filter(Boolean), i = (e) => r.some((t) => t.toLowerCase() === e);
	if (!i(`allow-scripts`) || !i(`allow-same-origin`)) return e;
	let a = null;
	try {
		a = new URL(t, `${n}/`).origin;
	} catch {
		a = null;
	}
	return a !== null && a !== n ? e : r.filter((e) => e.toLowerCase() !== `allow-same-origin`).join(` `);
}
function k({ src: e, title: t, labels: n, device: r, defaultDevice: i = `fit`, onDeviceChange: a, zoom: o, defaultZoom: s = 1, onZoomChange: c, zoomLevels: l = w, sandbox: m = `allow-scripts allow-same-origin allow-forms`, frameRef: g, onLoad: y, toolbarEnd: k, className: A }) {
	let { locale: j } = d(), M = re(e, T) || null, N = (0, b.useSyncExternalStore)(E, D, ae), P = M && N ? O(m, M, N) : null, [F, I] = (0, b.useState)(i), [L, R] = (0, b.useState)(s), [z, B] = (0, b.useState)(!1), [V, H] = (0, b.useState)(0), [U, W] = (0, b.useState)(null), G = r ?? F, K = o ?? L, q = G === `fit`, J = `${V}:${e}`, Y = M !== null && U !== J, oe = (0, b.useCallback)((e) => {
		I(e), a?.(e);
	}, [a]), se = (0, b.useCallback)((e) => {
		let t = Number(e);
		R(t), c?.(t);
	}, [c]), ce = (0, b.useCallback)(() => H((e) => e + 1), []), le = (0, b.useMemo)(() => ({
		role: `region`,
		"aria-label": t,
		tabIndex: 0
	}), [t]), ue = (0, b.useCallback)(() => {
		W(J), y?.();
	}, [J, y]), X = (0, b.useMemo)(() => new Intl.NumberFormat(j, { style: `percent` }), [j]), de = (0, b.useMemo)(() => ie.map((e) => ({
		value: e,
		label: (0, x.jsx)(`span`, {
			className: `max-md:sr-only`,
			children: n[e]
		}),
		icon: (0, x.jsx)(p, {
			name: C[e],
			"aria-hidden": !0
		}),
		ariaLabel: n[e]
	})), [n]), fe = (0, b.useMemo)(() => l.map((e) => ({
		value: String(e),
		label: X.format(e)
	})), [l, X]), Z = q ? null : S[G], Q = Z ? z ? Z.height : Z.width : null, $ = Z ? z ? Z.width : Z.height : null, pe = (0, b.useMemo)(() => Q && $ ? {
		width: Q * K,
		height: $ * K
	} : {
		width: `100%`,
		height: `100%`
	}, [
		Q,
		$,
		K
	]), me = (0, b.useMemo)(() => ({
		width: Q ?? `${100 / K}%`,
		height: $ ?? `${100 / K}%`,
		transform: `scale(${K})`
	}), [
		Q,
		$,
		K
	]);
	return (0, x.jsxs)(`div`, {
		className: f(`flex h-full min-h-80 w-full min-w-0 flex-col overflow-hidden`, A),
		children: [(0, x.jsxs)(u, {
			"aria-label": n.toolbar,
			className: `flex flex-wrap items-center gap-2 border-b border-border bg-surface px-2 py-1.5`,
			children: [
				(0, x.jsx)(v, {
					size: `sm`,
					label: n.device,
					options: de,
					value: G,
					onChange: oe
				}),
				(0, x.jsx)(v, {
					size: `sm`,
					label: n.zoom,
					options: fe,
					value: String(K),
					onChange: se
				}),
				(0, x.jsx)(te, {
					size: `sm`,
					variant: `ghost`,
					isSelected: z,
					onChange: B,
					isDisabled: q,
					children: n.rotate
				}),
				(0, x.jsx)(`input`, {
					readOnly: !0,
					value: e,
					"aria-label": n.address,
					className: `h-control-sm min-w-32 flex-1 truncate rounded-md border border-border bg-sunken px-2 font-mono text-caption text-fg`
				}),
				(0, x.jsx)(_, {
					size: `sm`,
					label: n.reload,
					onPress: ce,
					isDisabled: !M,
					children: (0, x.jsx)(p, {
						name: `action.refresh`,
						"aria-hidden": !0
					})
				}),
				M ? (0, x.jsx)(ee, {
					size: `sm`,
					variant: `ghost`,
					href: M,
					target: `_blank`,
					...n.newTab ? { newTabLabel: n.newTab } : {},
					children: n.openInNewTab
				}) : null,
				k
			]
		}), (0, x.jsxs)(`div`, {
			...le,
			"aria-busy": Y || void 0,
			className: f(`relative min-h-0 flex-1 overflow-auto bg-sunken`, !q && `p-4`),
			children: [M ? (0, x.jsx)(`div`, {
				style: pe,
				className: f(`relative overflow-hidden`, !q && `mx-auto rounded-md border border-border shadow-sm`),
				children: P === null ? null : (0, x.jsx)(`iframe`, {
					ref: g,
					src: M,
					title: t,
					sandbox: P,
					onLoad: ue,
					"data-device": G,
					style: me,
					className: `absolute top-0 left-0 origin-top-left border-0 bg-bg`
				}, J)
			}) : (0, x.jsx)(`div`, {
				className: `p-4`,
				children: (0, x.jsx)(h, {
					tone: `warn`,
					title: n.refused,
					live: `polite`
				})
			}), Y ? (0, x.jsx)(`div`, {
				className: `absolute inset-0 flex items-center justify-center bg-sunken/70`,
				children: (0, x.jsx)(ne, {
					label: n.loading,
					showLabel: !0
				})
			}) : null]
		})]
	});
}
function A({ text: e, label: t, prompt: n, copyLabel: r, copiedLabel: a, copyFailedLabel: o, copyText: s, className: c, ...l }) {
	let u = (0, b.useId)();
	return (0, x.jsxs)(`div`, {
		...l,
		...t === void 0 ? {} : {
			role: `group`,
			"aria-labelledby": u
		},
		className: f(`flex min-w-0 flex-col gap-1`, c),
		children: [t === void 0 ? null : (0, x.jsx)(`span`, {
			id: u,
			className: `text-caption text-muted`,
			children: t
		}), (0, x.jsxs)(`div`, {
			className: `flex min-w-0 items-start gap-2 rounded-md border border-border bg-sunken py-0.5 ps-3 pe-0.5`,
			children: [(0, x.jsxs)(`code`, {
				translate: `no`,
				className: `min-w-0 flex-1 py-1.5 font-mono text-caption leading-5 whitespace-pre-wrap text-fg [overflow-wrap:anywhere]`,
				children: [n === void 0 ? null : (0, x.jsx)(`span`, {
					"aria-hidden": !0,
					className: `me-2 text-muted select-none`,
					children: n
				}), e]
			}), (0, x.jsx)(i, {
				text: e,
				copyLabel: r,
				copiedLabel: a,
				copyFailedLabel: o,
				...s === void 0 ? {} : { copyText: s },
				iconOnly: !0
			})]
		})]
	});
}
var j = e({ default: () => B }), M = `## Release notes

The agent now **resumes** a chat from its session, so it remembers earlier answers. See the [changelog](https://skribly.pl) for details.

- [x] Resume chats after a restart
- [ ] Attach images by pasting
- Work in a remote folder over \`ssh -t\`

> Raw HTML such as <script>alert(1)<\/script> is shown as text.

| Shortcut | Action |
| --- | --- |
| Enter | Send |
| Shift+Enter | New line |

\`\`\`bash
npm install @skribly/ui
\`\`\`
`, N = `import { Button } from '@skribly/ui/actions'

export function Save({ onSave }: { onSave: () => void }) {
  return <Button onPress={onSave}>Save</Button>
}`, P = `added 214 packages, and audited 215 packages in 4s

38 packages are looking for funding
  run \`npm fund\` for details

1 moderate severity vulnerability
To address it, run: npm audit fix`, F = [
	`\x1B[32m✔\x1B[0m Read src/content/Markdown.tsx`,
	`\x1B[32m✔\x1B[0m Edit src/content/Markdown.tsx (+12 −3)`,
	`\x1B[33m●\x1B[0m Running npm test …`,
	``,
	` ✓ src/content/Markdown.test.tsx (6 tests) 41ms`,
	` ✓ src/content/CodeBlock.test.tsx (4 tests) 38ms`,
	``,
	` Test Files  2 passed (2)`,
	`      Tests  10 passed (10)`,
	``,
	`> `
];
function I() {
	let [e, t] = (0, b.useState)(`**Bold**, _italic_ and a list:

- one
- two`), [n, r] = (0, b.useState)(!1), i = n && e.trim() === ``;
	return (0, x.jsxs)(`div`, {
		className: `flex flex-col gap-6`,
		children: [(0, x.jsx)(s, {
			label: `Description`,
			writeLabel: `Write`,
			previewLabel: `Preview`,
			emptyPreview: `Nothing to preview yet.`,
			description: `Markdown is supported: **bold**, lists, links and code.`,
			value: e,
			onChange: t,
			onBlur: () => r(!0),
			isRequired: !0,
			isInvalid: i,
			errorMessage: `Enter a description before you save.`
		}), (0, x.jsx)(s, {
			label: `Notes (disabled)`,
			writeLabel: `Write`,
			previewLabel: `Preview`,
			emptyPreview: `Nothing to preview yet.`,
			defaultValue: `Locked while the task runs.`,
			rows: 3,
			isDisabled: !0
		})]
	});
}
function L() {
	let [e, t] = (0, b.useState)(!1);
	return (0, x.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [
			(0, x.jsx)(l, {
				label: `Install output`,
				title: `npm install`,
				text: P,
				status: {
					tone: `warn`,
					label: `Finished with a warning`
				}
			}),
			(0, x.jsx)(l, {
				label: `Build output`,
				title: `npm run build`,
				text: e ? `vite v8.3.6 building for production…
transforming (214) src/index.ts` : `Build failed: Cannot find module "./Missing.js".`,
				isRunning: e,
				runningLabel: `Running`,
				status: {
					tone: `danger`,
					label: `Failed`
				}
			}),
			(0, x.jsx)(l, {
				label: `Test output`,
				text: ``,
				emptyText: `No output yet.`,
				maxLines: 3
			}),
			(0, x.jsx)(o, {
				variant: `outline`,
				size: `sm`,
				className: `self-start`,
				onPress: () => t((e) => !e),
				children: e ? `Show the result` : `Show it running`
			})
		]
	});
}
var R = {
	en: {
		title: `Preview of the page`,
		src: `/preview/opening-hours.html`,
		labels: {
			toolbar: `Preview tools`,
			device: `Device`,
			phone: `Phone`,
			tablet: `Tablet`,
			desktop: `Desktop`,
			fit: `Fit`,
			zoom: `Zoom`,
			rotate: `Rotate`,
			reload: `Reload the preview`,
			openInNewTab: `Open`,
			newTab: `opens in a new tab`,
			address: `Address of the preview`,
			loading: `Loading the preview`,
			refused: `This address cannot be shown in the preview. Use an http or https address.`
		}
	},
	pl: {
		title: `Podgląd strony`,
		src: `/preview/godziny-otwarcia.html`,
		labels: {
			toolbar: `Narzędzia podglądu`,
			device: `Urządzenie`,
			phone: `Telefon`,
			tablet: `Tablet`,
			desktop: `Komputer`,
			fit: `Dopasuj`,
			zoom: `Powiększenie`,
			rotate: `Obróć`,
			reload: `Odśwież podgląd`,
			openInNewTab: `Otwórz`,
			newTab: `otwiera się w nowej karcie`,
			address: `Adres podglądu`,
			loading: `Wczytywanie podglądu`,
			refused: `Tego adresu nie da się pokazać w podglądzie. Użyj adresu http albo https.`
		}
	}
};
function z() {
	let e = R[(0, b.useContext)(r) === `pl` ? `pl` : `en`];
	return (0, x.jsx)(`div`, {
		className: `h-[32rem] overflow-hidden rounded-lg border border-border`,
		children: (0, x.jsx)(k, {
			src: e.src,
			title: e.title,
			labels: e.labels,
			defaultDevice: `phone`,
			defaultZoom: .75
		})
	});
}
var B = {
	title: `Content`,
	status: `stable`,
	description: `Text people read: rendered Markdown, a write-and-preview field, code with a copy button, single commands, program output, a still terminal screen and the live preview of a page. Code and output scroll inside their own box, so the page never scrolls sideways.`,
	pl: {
		title: `Treść`,
		description: `Tekst, który ludzie czytają: renderowany Markdown, pole do pisania z podglądem, kod z przyciskiem kopiowania, pojedyncze polecenia, wyjście programu, nieruchomy ekran terminala i podgląd strony na żywo. Kod i wyjście przewijają się we własnym polu, więc strona nigdy nie przewija się na boki.`
	},
	demos: [
		{
			name: `Markdown`,
			components: [`Markdown`],
			description: `Renders Markdown from a user, a tracker or an agent as safe HTML. It runs on the server too, with no DOM, so pick it for any stored Markdown text.`,
			usage: `<Markdown text={issue.description} headingOffset={2} tableLabel="Table" />`,
			accessibility: `Raw HTML is shown as text and only http, https, mailto, tel and relative links are kept. headingOffset keeps the heading outline under the page heading. Task items are read-only checkboxes named by their text. Tables and code blocks scroll in their own box, which takes keyboard focus.`,
			pl: {
				description: `Renderuje Markdown od użytkownika, z trackera albo od agenta jako bezpieczny HTML. Działa też na serwerze, bez DOM, więc wybierz go dla każdego zapisanego tekstu w Markdownie.`,
				accessibility: `Surowy HTML jest pokazywany jako tekst, a zachowywane są tylko linki http, https, mailto, tel i względne. headingOffset utrzymuje strukturę nagłówków pod nagłówkiem strony. Zadania są polami wyboru tylko do odczytu, nazwanymi swoim tekstem. Tabele i bloki kodu przewijają się we własnym polu, które przyjmuje fokus z klawiatury.`
			},
			render: () => (0, x.jsx)(c, {
				text: M,
				headingOffset: 2,
				tableLabel: `Shortcuts`
			})
		},
		{
			name: `Prose`,
			components: [`Prose`],
			description: `Gives plain HTML the reading styles of Skribly. Pick it for long text written in JSX or HTML from your own source; use Markdown for Markdown.`,
			usage: `<Prose size="lg">
  <h2>Getting started</h2>
  <p>Install the app and add a project.</p>
</Prose>`,
			accessibility: `Styles only, so the HTML inside keeps its own meaning. Links are underlined, not told by colour alone. Long words and addresses wrap, so the text reflows at 400% zoom.`,
			pl: {
				description: `Nadaje zwykłemu HTML style czytania Skribly. Wybierz go dla długiego tekstu napisanego w JSX lub HTML z własnego źródła; dla Markdowna użyj Markdown.`,
				accessibility: `Tylko style, więc HTML w środku zachowuje własne znaczenie. Linki są podkreślone, a nie wyróżnione samym kolorem. Długie słowa i adresy się zawijają, więc tekst układa się przy powiększeniu 400%.`
			},
			render: () => (0, x.jsxs)(g, { children: [
				(0, x.jsx)(`h3`, { children: `Getting started` }),
				(0, x.jsxs)(`p`, { children: [
					`Install the app, add a project folder and pick an agent. Press `,
					(0, x.jsx)(`kbd`, { children: `Ctrl` }),
					` + `,
					(0, x.jsx)(`kbd`, { children: `K` }),
					` to open the command menu, or read the `,
					(0, x.jsx)(`a`, {
						href: `#content`,
						children: `guide`
					}),
					`.`
				] }),
				(0, x.jsxs)(`ol`, { children: [(0, x.jsx)(`li`, { children: `Add a project.` }), (0, x.jsxs)(`li`, { children: [
					`Start a chat with `,
					(0, x.jsx)(`code`, { children: `/new` }),
					`.`
				] })] }),
				(0, x.jsx)(`p`, { children: `A very long address wraps instead of stretching the page: https://skribly.pl/docs/agents/configuration/remote-folders-over-ssh` })
			] })
		},
		{
			name: `MarkdownField`,
			components: [`MarkdownField`],
			description: `A text area for Markdown with a preview tab, for descriptions and comments. Pick it when the text will be shown rendered; use a plain TextField for short values.`,
			usage: `<MarkdownField
  label="Description"
  writeLabel="Write"
  previewLabel="Preview"
  emptyPreview="Nothing to preview yet."
  value={text}
  onChange={setText}
  isInvalid={!text}
  errorMessage="Enter a description."
/>`,
			accessibility: `The label names the text area and the tab list. Arrow keys move between Write and Preview, and the text stays when you switch. The description and the error are linked with aria-describedby, and aria-invalid is set. The open tab is marked by shape, not only colour, and stays visible in forced colours.`,
			pl: {
				description: `Pole tekstowe dla Markdowna z kartą podglądu, do opisów i komentarzy. Wybierz je, gdy tekst będzie pokazywany po wyrenderowaniu; dla krótkich wartości użyj zwykłego TextField.`,
				accessibility: `Etykieta nazywa pole tekstowe i listę kart. Klawisze strzałek przechodzą między kartami Write i Preview, a tekst zostaje po przełączeniu. Opis i błąd są powiązane przez aria-describedby, a ustawione jest aria-invalid. Otwarta karta jest oznaczona kształtem, nie tylko kolorem, i pozostaje widoczna w trybie wymuszonych kolorów.`
			},
			render: () => (0, x.jsx)(I, {})
		},
		{
			name: `CodeBlock`,
			components: [`CodeBlock`],
			description: `Shows a block of code with an optional file name, language tag, line numbers and copy button. Pick Snippet for a single command.`,
			usage: `<CodeBlock
  code={source}
  label="Example: Save button"
  title="Save.tsx"
  language="tsx"
  copyLabel="Copy"
  copiedLabel="Copied"
  copyFailedLabel="Could not copy"
/>`,
			accessibility: `The code area is a named group in the tab order, so keyboard users can scroll it. Line numbers are hidden from screen readers and from selection. The copy result shows as an icon and a word, and a polite status region reads it out. It stays while the pointer or focus is on the button.`,
			pl: {
				description: `Pokazuje blok kodu z opcjonalną nazwą pliku, znacznikiem języka, numerami linii i przyciskiem kopiowania. Dla pojedynczego polecenia wybierz Snippet.`,
				accessibility: `Obszar kodu jest nazwaną grupą w kolejności klawisza Tab, więc użytkownicy klawiatury mogą go przewijać. Numery linii są ukryte przed czytnikami ekranu i przed zaznaczaniem. Wynik kopiowania jest pokazany jako ikona i słowo, a region statusu typu polite odczytuje go na głos. Zostaje widoczny, dopóki wskaźnik lub fokus jest na przycisku.`
			},
			render: () => (0, x.jsxs)(`div`, {
				className: `flex flex-col gap-3`,
				children: [(0, x.jsx)(a, {
					code: N,
					label: `Example: Save button`,
					title: `src/Save.tsx`,
					language: `tsx`,
					copyLabel: `Copy`,
					copiedLabel: `Copied`,
					copyFailedLabel: `Could not copy`,
					showLineNumbers: !0
				}), (0, x.jsx)(a, {
					code: `const message = "A long line that wraps instead of scrolling, because wrap is set on this block, which suits prose-like logs."`,
					label: `Example: wrapped line`,
					wrap: !0
				})]
			})
		},
		{
			name: `Snippet`,
			components: [`Snippet`],
			description: `One command or key with a copy button, such as an install line. The text wraps, so it fits a phone screen.`,
			usage: `<Snippet
  label="Run in the project folder"
  prompt="$"
  text="npx skills add skribly/agent-skills"
  copyLabel="Copy command"
  copiedLabel="Copied"
  copyFailedLabel="Could not copy"
/>`,
			accessibility: `The caption names the group. The prompt sign is hidden from screen readers and left out of the copy. The icon button has its own name, and the result is read out by a polite status region.`,
			pl: {
				description: `Jedno polecenie albo klawisz z przyciskiem kopiowania, na przykład linia instalacji. Tekst się zawija, więc mieści się na ekranie telefonu.`,
				accessibility: `Podpis nazywa grupę. Znak zachęty jest ukryty przed czytnikami ekranu i pomijany przy kopiowaniu. Przycisk z ikoną ma własną nazwę, a wynik odczytuje region statusu typu polite.`
			},
			render: () => (0, x.jsxs)(`div`, {
				className: `flex flex-col gap-3`,
				children: [(0, x.jsx)(A, {
					label: `Run in the project folder`,
					prompt: `$`,
					text: `npx skills add skribly/agent-skills`,
					copyLabel: `Copy command`,
					copiedLabel: `Copied`,
					copyFailedLabel: `Could not copy`
				}), (0, x.jsx)(A, {
					text: `claude mcp add chrome-devtools -- npx chrome-devtools-mcp@latest --browserUrl http://127.0.0.1:9222`,
					copyLabel: `Copy command`,
					copiedLabel: `Copied`,
					copyFailedLabel: `Could not copy`
				})]
			})
		},
		{
			name: `OutputBox`,
			components: [`OutputBox`],
			description: `Program output such as an install or build log, with an optional outcome. Pick it for text a tool printed; pick CodeBlock for source code.`,
			usage: `<OutputBox
  label="Install output"
  title="npm install"
  text={output}
  isRunning={running}
  runningLabel="Running"
  status={{ tone: 'ok', label: 'Done' }}
/>`,
			accessibility: `The outcome has a colour, an icon and a word. The header is a polite status region, so the change from running to done is read once, not every line. The output keeps the newest line in view unless you scrolled up, and the box is in the tab order for keyboard scrolling.`,
			pl: {
				description: `Wyjście programu, takie jak log instalacji lub budowania, z opcjonalnym wynikiem. Wybierz go dla tekstu, który wypisało narzędzie; dla kodu źródłowego wybierz CodeBlock.`,
				accessibility: `Wynik ma kolor, ikonę i słowo. Nagłówek jest regionem statusu typu polite, więc zmiana z „w toku” na „gotowe” jest odczytana raz, a nie przy każdej linii. Wyjście trzyma najnowszą linię w widoku, chyba że przewiniesz w górę, a pole jest w kolejności klawisza Tab, aby dało się je przewijać z klawiatury.`
			},
			render: () => (0, x.jsx)(L, {})
		},
		{
			name: `PreviewFrame`,
			components: [`PreviewFrame`],
			description: `The live preview of a page beside its editor: a phone, tablet or desktop width drawn at its real size and scaled, zoom, rotate, the address, reload and open in a new tab. usePreviewBridge sends the draft to the page and hears which block was clicked. For the preview of a development server use BrowserBar and DeviceFrame. The address must be http, https or a relative path: javascript:, data: and other schemes show the refused message instead of the frame and the open link. A page on the origin of the editor, like this demo, loses allow-same-origin when the sandbox also allows scripts, so it cannot reach the editor or lift its sandbox; serve the preview from its own origin when it needs the bridge.`,
			usage: `const bridge = usePreviewBridge<Draft, Selected>({
  allowedOrigins: ['https://shop.example'],
  isMessage: isSelected,
  onMessage: (message) => select(message.block)
})
useEffect(() => bridge.post({ type: 'preview:draft', document }), [bridge, document])

<PreviewFrame src={previewUrl} title={t('preview.title')} labels={labels}
  frameRef={bridge.frameRef} toolbarEnd={<LocaleSwitch />} />`,
			accessibility: `The tools are a named group: the device and zoom choices are radio groups whose options have names even when only icons show, rotate is a toggle button, the address is a read-only field that can be selected and copied, and open says it opens a new tab. The frame has a title, and the box around it is a region named by that title in the tab order, so the keyboard can scroll a device wider or taller than the box. While the page loads the box is busy and shows a named spinner. The bridge posts only to the frame origin when it is allowed and accepts only typed messages from the frame window and an allowed origin, never from an opaque one, and runs nothing it receives.`,
			pl: {
				description: `Podgląd strony na żywo obok jej edytora: szerokość telefonu, tabletu albo komputera rysowana w prawdziwym rozmiarze i skalowana, powiększenie, obrót, adres, odświeżenie i otwarcie w nowej karcie. usePreviewBridge wysyła szkic do strony i słyszy, który blok kliknięto. Do podglądu serwera deweloperskiego służą BrowserBar i DeviceFrame. Adres musi być http, https albo ścieżką względną: javascript:, data: i inne schematy pokazują komunikat o odmowie zamiast ramki i linku do otwarcia. Strona z tego samego źródła co edytor, jak w tym przykładzie, traci allow-same-origin, gdy piaskownica pozwala też na skrypty, więc nie sięgnie do edytora ani nie zdejmie swojej piaskownicy; gdy podgląd potrzebuje mostu, podaj go z osobnego źródła.`,
				accessibility: `Narzędzia są nazwaną grupą: wybór urządzenia i powiększenia to grupy opcji, których opcje mają nazwy także wtedy, gdy widać tylko ikony, obrót jest przyciskiem przełącznikiem, adres jest polem tylko do odczytu, które można zaznaczyć i skopiować, a otwarcie mówi, że otwiera nową kartę. Ramka ma tytuł, a pole wokół niej jest regionem nazwanym tym tytułem w kolejności klawisza Tab, aby klawiatura mogła przewinąć urządzenie szersze albo wyższe niż pole. Gdy strona się wczytuje, pole jest zajęte i pokazuje nazwany wskaźnik. Most wysyła wiadomości tylko do źródła ramki, gdy jest dozwolone, przyjmuje tylko typowane wiadomości z okna ramki i z dozwolonego źródła, nigdy z nieprzezroczystego, i nie uruchamia niczego, co dostaje.`
			},
			render: () => (0, x.jsx)(z, {})
		},
		{
			name: `TerminalScreen`,
			components: [`TerminalScreen`],
			description: `A still picture of a terminal, such as the last lines of an agent session on an overview card. Pick it to preview; a live terminal needs xterm in the app.`,
			usage: `<TerminalScreen label="Claude Code session" title="claude · skriblyUI" text={lines} rows={12} showCursor />`,
			accessibility: `The screen is a named group in the tab order and scrolls sideways inside its box. ANSI colour codes are removed, so screen readers get plain text. The cursor is decorative, hidden from screen readers, and only blinks without reduced motion.`,
			pl: {
				description: `Nieruchomy obraz terminala, na przykład ostatnie linie sesji agenta na karcie przeglądu. Wybierz go do podglądu; terminal na żywo wymaga xterm w aplikacji.`,
				accessibility: `Ekran jest nazwaną grupą w kolejności klawisza Tab i przewija się na boki we własnym polu. Kody kolorów ANSI są usuwane, więc czytniki ekranu dostają zwykły tekst. Kursor jest dekoracyjny, ukryty przed czytnikami ekranu i miga tylko wtedy, gdy ruch nie jest ograniczony.`
			},
			render: () => (0, x.jsx)(y, {
				label: `Claude Code session`,
				title: `claude · skriblyUI`,
				text: F,
				rows: 12,
				showCursor: !0
			})
		}
	]
};
export { j as t };
