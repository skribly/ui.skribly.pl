import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { n } from "./react-dom.B9zIfLd2.js";
import { t as r } from "./Button.DRxd_7vr.js";
import { b as i, x as a, y as o } from "./doc.D2PtmWN6.js";
import { n as s, r as c, t as l } from "./OutputBox.1BFM_mPn.js";
import { n as u, t as d } from "./jsx-runtime.yrTYNGQT.js";
import { t as f } from "./TerminalScreen.UkcwA6bM.js";
var p = t(n(), 1), m = d();
function h({ text: e, label: t, prompt: n, copyLabel: r, copiedLabel: i, copyFailedLabel: o, copyText: s, className: c, ...l }) {
	let d = (0, p.useId)();
	return (0, m.jsxs)(`div`, {
		...l,
		...t === void 0 ? {} : {
			role: `group`,
			"aria-labelledby": d
		},
		className: u(`flex min-w-0 flex-col gap-1`, c),
		children: [t === void 0 ? null : (0, m.jsx)(`span`, {
			id: d,
			className: `text-caption text-muted`,
			children: t
		}), (0, m.jsxs)(`div`, {
			className: `flex min-w-0 items-start gap-2 rounded-md border border-border bg-sunken py-0.5 ps-3 pe-0.5`,
			children: [(0, m.jsxs)(`code`, {
				translate: `no`,
				className: `min-w-0 flex-1 py-1.5 font-mono text-caption leading-5 whitespace-pre-wrap text-fg [overflow-wrap:anywhere]`,
				children: [n === void 0 ? null : (0, m.jsx)(`span`, {
					"aria-hidden": !0,
					className: `me-2 text-muted select-none`,
					children: n
				}), e]
			}), (0, m.jsx)(a, {
				text: e,
				copyLabel: r,
				copiedLabel: i,
				copyFailedLabel: o,
				...s === void 0 ? {} : { copyText: s },
				iconOnly: !0
			})]
		})]
	});
}
var g = e({ default: () => C }), _ = `## Release notes

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
`, v = `import { Button } from '@skribly/ui/actions'

export function Save({ onSave }: { onSave: () => void }) {
  return <Button onPress={onSave}>Save</Button>
}`, y = `added 214 packages, and audited 215 packages in 4s

38 packages are looking for funding
  run \`npm fund\` for details

1 moderate severity vulnerability
To address it, run: npm audit fix`, b = [
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
function x() {
	let [e, t] = (0, p.useState)(`**Bold**, _italic_ and a list:

- one
- two`), [n, r] = (0, p.useState)(!1), i = n && e.trim() === ``;
	return (0, m.jsxs)(`div`, {
		className: `flex flex-col gap-6`,
		children: [(0, m.jsx)(s, {
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
		}), (0, m.jsx)(s, {
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
function S() {
	let [e, t] = (0, p.useState)(!1);
	return (0, m.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [
			(0, m.jsx)(l, {
				label: `Install output`,
				title: `npm install`,
				text: y,
				status: {
					tone: `warn`,
					label: `Finished with a warning`
				}
			}),
			(0, m.jsx)(l, {
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
			(0, m.jsx)(l, {
				label: `Test output`,
				text: ``,
				emptyText: `No output yet.`,
				maxLines: 3
			}),
			(0, m.jsx)(r, {
				variant: `outline`,
				size: `sm`,
				className: `self-start`,
				onPress: () => t((e) => !e),
				children: e ? `Show the result` : `Show it running`
			})
		]
	});
}
var C = {
	title: `Content`,
	description: `Text people read: rendered Markdown, a write-and-preview field, code with a copy button, single commands, program output and a still terminal screen. Code and output scroll inside their own box, so the page never scrolls sideways.`,
	pl: {
		title: `Treść`,
		description: `Tekst, który ludzie czytają: renderowany Markdown, pole do pisania z podglądem, kod z przyciskiem kopiowania, pojedyncze polecenia, wyjście programu i nieruchomy ekran terminala. Kod i wyjście przewijają się we własnym polu, więc strona nigdy nie przewija się na boki.`
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
			render: () => (0, m.jsx)(c, {
				text: _,
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
			render: () => (0, m.jsxs)(o, { children: [
				(0, m.jsx)(`h3`, { children: `Getting started` }),
				(0, m.jsxs)(`p`, { children: [
					`Install the app, add a project folder and pick an agent. Press `,
					(0, m.jsx)(`kbd`, { children: `Ctrl` }),
					` + `,
					(0, m.jsx)(`kbd`, { children: `K` }),
					` to open the command menu, or read the `,
					(0, m.jsx)(`a`, {
						href: `#content`,
						children: `guide`
					}),
					`.`
				] }),
				(0, m.jsxs)(`ol`, { children: [(0, m.jsx)(`li`, { children: `Add a project.` }), (0, m.jsxs)(`li`, { children: [
					`Start a chat with `,
					(0, m.jsx)(`code`, { children: `/new` }),
					`.`
				] })] }),
				(0, m.jsx)(`p`, { children: `A very long address wraps instead of stretching the page: https://skribly.pl/docs/agents/configuration/remote-folders-over-ssh` })
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
			render: () => (0, m.jsx)(x, {})
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
			render: () => (0, m.jsxs)(`div`, {
				className: `flex flex-col gap-3`,
				children: [(0, m.jsx)(i, {
					code: v,
					label: `Example: Save button`,
					title: `src/Save.tsx`,
					language: `tsx`,
					copyLabel: `Copy`,
					copiedLabel: `Copied`,
					copyFailedLabel: `Could not copy`,
					showLineNumbers: !0
				}), (0, m.jsx)(i, {
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
			render: () => (0, m.jsxs)(`div`, {
				className: `flex flex-col gap-3`,
				children: [(0, m.jsx)(h, {
					label: `Run in the project folder`,
					prompt: `$`,
					text: `npx skills add skribly/agent-skills`,
					copyLabel: `Copy command`,
					copiedLabel: `Copied`,
					copyFailedLabel: `Could not copy`
				}), (0, m.jsx)(h, {
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
			render: () => (0, m.jsx)(S, {})
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
			render: () => (0, m.jsx)(f, {
				label: `Claude Code session`,
				title: `claude · skriblyUI`,
				text: b,
				rows: 12,
				showCursor: !0
			})
		}
	]
};
export { g as t };
