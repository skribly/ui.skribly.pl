import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { A as n, F as r, I as i, R as a, j as o } from "./doc.DoLlUurT.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
import { t as c } from "./Button.D4_9kLv-.js";
import { t as l } from "./IconButton.CO9JIdQj.js";
import { t as u } from "./TextField.ByRd6MqS.js";
import { t as d } from "./ConfirmDialog.D4AZkftN.js";
import { a as f, t as p } from "./MenuItem.CLiSEgSz.js";
import { n as m } from "./FocusScope.bOWhljI-.js";
import { t as h } from "./Popover.CeQqiFbO.js";
import { t as g } from "./MenuCheckItem.a-7u_lpB.js";
import { t as _ } from "./MenuLabel.DPvff70L.js";
import { t as v } from "./Modal.VhSU6W6h.js";
import { t as y } from "./Tooltip.Dt80SL16.js";
var b = t(s(), 1), x = r();
function S({ children: e, isActive: t = !0, autoFocus: n = !0, restoreFocus: r = !0 }) {
	return (0, x.jsx)(m, {
		contain: t,
		autoFocus: n,
		restoreFocus: r,
		children: e
	});
}
var C = o(`status.info`), w = o(`status.help`), T = {
	sm: `size-6`,
	md: `size-8`
};
function E({ label: e, children: t, title: n, icon: r = `help`, size: o = `sm`, placement: s = `top`, isOpen: c, defaultOpen: l, onOpenChange: u, container: d, className: f }) {
	let p = (0, b.useMemo)(() => {
		let t = r === `info` ? C : w;
		return (0, x.jsx)(a, {
			"aria-label": e,
			className: i(`inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-border-strong bg-transparent align-middle text-muted transition-colors data-hovered:border-accent-text data-hovered:text-accent-text data-pressed:bg-hover data-pressed:text-fg aria-expanded:border-accent-text aria-expanded:text-accent-text`, T[o], f),
			children: (0, x.jsx)(t, {
				size: o === `sm` ? 14 : 18,
				"aria-hidden": !0
			})
		});
	}, [
		r,
		e,
		o,
		f
	]);
	return (0, x.jsx)(h, {
		trigger: p,
		placement: s,
		showArrow: !0,
		...n == null ? { label: e } : { title: n },
		...c === void 0 ? {} : { isOpen: c },
		...l === void 0 ? {} : { defaultOpen: l },
		...u === void 0 ? {} : { onOpenChange: u },
		...d === void 0 ? {} : { container: d },
		className: `max-w-[min(18rem,calc(100vw-1.5rem))] text-caption leading-relaxed`,
		children: t
	});
}
var D = e({ default: () => U }), O = o(`theme.light`), k = o(`theme.dark`), A = o(`theme.system`);
function j({ children: e }) {
	let [t, n] = (0, b.useState)(null);
	return (0, x.jsx)(`div`, {
		ref: n,
		children: e(t)
	});
}
function M() {
	return (0, x.jsx)(j, { children: (e) => (0, x.jsxs)(`div`, {
		className: `flex flex-wrap gap-2`,
		children: [(0, x.jsx)(v, {
			container: e,
			trigger: (0, x.jsx)(c, { children: `Rename project` }),
			title: `Rename project`,
			description: `The new name shows in the sidebar and in every link.`,
			closeLabel: `Close`,
			size: `sm`,
			footer: (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)(c, {
				variant: `outline`,
				slot: `close`,
				children: `Cancel`
			}), (0, x.jsx)(c, {
				slot: `close`,
				children: `Save name`
			})] }),
			children: (0, x.jsx)(u, {
				label: `Project name`,
				defaultValue: `Field notes`
			})
		}), (0, x.jsx)(v, {
			container: e,
			trigger: (0, x.jsx)(c, {
				variant: `outline`,
				children: `Read the terms`
			}),
			title: `Terms of use, with a heading long enough to wrap onto a second line on a phone`,
			closeLabel: `Close`,
			footer: (0, x.jsx)(c, {
				slot: `close`,
				children: `I have read them`
			}),
			children: Array.from({ length: 12 }, (e, t) => (0, x.jsx)(`p`, { children: `Section ${t + 1}. The body scrolls inside the dialog while the heading and the actions stay in place, so the way out is always visible.` }, t))
		})]
	}) });
}
function N() {
	let [e, t] = (0, b.useState)(0), [r, i] = (0, b.useState)(), [a, o] = (0, b.useState)(``);
	return (0, x.jsx)(j, { children: (s) => (0, x.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, x.jsxs)(`div`, {
			className: `flex flex-wrap gap-2`,
			children: [(0, x.jsx)(d, {
				container: s,
				tone: `danger`,
				trigger: (0, x.jsxs)(c, {
					variant: `danger`,
					children: [(0, x.jsx)(n, {
						name: `action.delete`,
						"aria-hidden": !0
					}), `Delete draft`]
				}),
				title: `Delete this draft?`,
				confirmLabel: `Delete draft`,
				cancelLabel: `Keep it`,
				pendingLabel: `Deleting`,
				error: r,
				errorToneLabel: `Error`,
				errorDetails: `Check the connection and try again.`,
				onOpenChange: (e) => e ? i(void 0) : void 0,
				onConfirm: async () => {
					if (await new Promise((e) => setTimeout(e, 900)), t((e) => e + 1), e % 2 == 0) throw i(`Could not delete the draft`), Error(`offline`);
					o(`Draft deleted.`);
				},
				children: `It disappears for everyone who can see it. This cannot be undone. The first try fails on purpose to show the error.`
			}), (0, x.jsx)(d, {
				container: s,
				trigger: (0, x.jsx)(c, {
					variant: `outline`,
					children: `Publish`
				}),
				title: `Publish now?`,
				confirmLabel: `Publish`,
				cancelLabel: `Not yet`,
				onConfirm: () => o(`Published.`),
				children: `Readers see the page at once.`
			})]
		}), (0, x.jsx)(`output`, {
			"aria-live": `polite`,
			className: `min-h-5 text-caption text-ok`,
			children: a ? (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)(`span`, {
				"aria-hidden": !0,
				children: `✓ `
			}), a] }) : null
		})]
	}) });
}
function P() {
	return (0, x.jsx)(j, { children: (e) => (0, x.jsxs)(`div`, {
		className: `flex flex-wrap gap-2`,
		children: [(0, x.jsx)(h, {
			container: e,
			trigger: (0, x.jsx)(c, {
				variant: `outline`,
				children: `Share`
			}),
			title: `Share this page`,
			showArrow: !0,
			children: (e) => (0, x.jsxs)(`div`, {
				className: `flex flex-col gap-3`,
				children: [(0, x.jsx)(`p`, {
					className: `text-muted`,
					children: `Anyone with the link can read it.`
				}), (0, x.jsxs)(c, {
					size: `sm`,
					onPress: e,
					children: [(0, x.jsx)(n, {
						name: `action.copy`,
						"aria-hidden": !0
					}), `Copy link`]
				})]
			})
		}), (0, x.jsx)(h, {
			container: e,
			trigger: (0, x.jsx)(c, {
				variant: `ghost`,
				children: `Details`
			}),
			label: `Details`,
			placement: `bottom start`,
			children: (0, x.jsxs)(`dl`, {
				className: `grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-caption`,
				children: [
					(0, x.jsx)(`dt`, {
						className: `text-muted`,
						children: `Owner`
					}),
					(0, x.jsx)(`dd`, { children: `Ada Lovelace` }),
					(0, x.jsx)(`dt`, {
						className: `text-muted`,
						children: `Updated`
					}),
					(0, x.jsx)(`dd`, { children: `2 hours ago` })
				]
			})
		})]
	}) });
}
function F() {
	let [e, t] = (0, b.useState)(``);
	return (0, x.jsx)(j, { children: (r) => (0, x.jsxs)(`div`, {
		className: `flex flex-wrap items-center gap-3`,
		children: [
			(0, x.jsxs)(f, {
				container: r,
				trigger: (0, x.jsx)(l, {
					label: `Help`,
					container: r,
					children: (0, x.jsx)(n, {
						name: `status.help`,
						"aria-hidden": !0
					})
				}),
				onAction: (e) => t(String(e)),
				children: [
					(0, x.jsx)(p, {
						id: `guide`,
						icon: (0, x.jsx)(n, {
							name: `nav.help`,
							size: 16
						}),
						description: `A short walk through the main views`,
						children: `Start the guide`
					}),
					(0, x.jsx)(p, {
						id: `shortcuts`,
						icon: (0, x.jsx)(n, {
							name: `device.keyboard`,
							size: 16
						}),
						shortcut: `?`,
						children: `Keyboard shortcuts`
					}),
					(0, x.jsx)(p, {
						id: `docs`,
						icon: (0, x.jsx)(n, {
							name: `content.guide`,
							size: 16
						}),
						children: `Documentation`
					}),
					(0, x.jsx)(p, {
						id: `offline`,
						isDisabled: !0,
						children: `Contact support (offline)`
					})
				]
			}),
			(0, x.jsxs)(f, {
				container: r,
				trigger: (0, x.jsx)(c, {
					variant: `outline`,
					children: `Page actions`
				}),
				placement: `bottom start`,
				onAction: (e) => t(String(e)),
				children: [
					(0, x.jsx)(p, {
						id: `rename`,
						icon: (0, x.jsx)(n, {
							name: `action.edit`,
							size: 16
						}),
						shortcut: `F2`,
						children: `Rename`
					}),
					(0, x.jsx)(p, {
						id: `duplicate`,
						icon: (0, x.jsx)(n, {
							name: `action.copy`,
							size: 16
						}),
						children: `Duplicate with a name long enough to wrap inside a narrow menu`
					}),
					(0, x.jsx)(p, {
						id: `delete`,
						tone: `danger`,
						icon: (0, x.jsx)(n, {
							name: `action.delete`,
							size: 16
						}),
						children: `Delete`
					})
				]
			}),
			(0, x.jsx)(`output`, {
				"aria-live": `polite`,
				className: `text-caption text-muted`,
				children: e ? `Chose: ${e}` : null
			})
		]
	}) });
}
function I() {
	let [e, t] = (0, b.useState)(new Set([`title`, `owner`]));
	return (0, x.jsx)(j, { children: (n) => (0, x.jsxs)(`div`, {
		className: `flex flex-wrap items-center gap-3`,
		children: [(0, x.jsxs)(f, {
			container: n,
			trigger: (0, x.jsx)(c, {
				variant: `outline`,
				children: `Columns`
			}),
			placement: `bottom start`,
			selectionMode: `multiple`,
			selectedKeys: e,
			onSelectionChange: t,
			children: [
				(0, x.jsx)(g, {
					id: `title`,
					children: `Title`
				}),
				(0, x.jsx)(g, {
					id: `owner`,
					children: `Owner`
				}),
				(0, x.jsx)(g, {
					id: `updated`,
					children: `Last updated`
				}),
				(0, x.jsx)(g, {
					id: `size`,
					isDisabled: !0,
					children: `Size`
				})
			]
		}), (0, x.jsx)(`span`, {
			className: `text-caption text-muted`,
			children: e === `all` ? `All columns` : `${e.size} columns shown`
		})]
	}) });
}
var L = [
	{
		id: `light`,
		label: `Light`,
		text: `Always the light theme`,
		icon: O
	},
	{
		id: `dark`,
		label: `Dark`,
		text: `Always the dark theme`,
		icon: k
	},
	{
		id: `system`,
		label: `System`,
		text: `Follows the operating system`,
		icon: A
	}
];
function R() {
	let [e, t] = (0, b.useState)(new Set([`system`])), n = e === `all` ? `system` : String([...e][0] ?? `system`), r = L.find((e) => e.id === n)?.icon ?? A;
	return (0, x.jsx)(j, { children: (i) => (0, x.jsxs)(f, {
		container: i,
		trigger: (0, x.jsx)(l, {
			label: `Theme: ${n}`,
			container: i,
			children: (0, x.jsx)(r, { "aria-hidden": !0 })
		}),
		children: [(0, x.jsx)(_, {
			label: `Theme mode`,
			selectionMode: `single`,
			disallowEmptySelection: !0,
			selectedKeys: e,
			onSelectionChange: t,
			children: L.map((e) => (0, x.jsx)(g, {
				id: e.id,
				description: e.text,
				children: e.label
			}, e.id))
		}), (0, x.jsx)(_, {
			label: `More`,
			children: (0, x.jsx)(p, {
				id: `themes`,
				children: `More themes…`
			})
		})]
	}) });
}
function z() {
	return (0, x.jsx)(j, { children: (e) => (0, x.jsxs)(`div`, {
		className: `flex flex-wrap items-center gap-3`,
		children: [(0, x.jsx)(y, {
			container: e,
			content: `Saves a copy you can return to later`,
			children: (0, x.jsx)(c, {
				variant: `outline`,
				children: `Save version`
			})
		}), (0, x.jsx)(y, {
			container: e,
			placement: `bottom`,
			content: `Search everything: views, projects and actions. Shortcut Ctrl K.`,
			children: (0, x.jsx)(c, {
				variant: `ghost`,
				children: `Search`
			})
		})]
	}) });
}
function B() {
	return (0, x.jsx)(j, { children: (e) => (0, x.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, x.jsxs)(`p`, {
			className: `flex flex-wrap items-center gap-1.5`,
			children: [`Build time of the last run: 42 s`, (0, x.jsx)(E, {
				container: e,
				label: `About the build time`,
				children: `The time from start to finish of the last run, measured with a clean cache.`
			})]
		}), (0, x.jsxs)(`p`, {
			className: `flex flex-wrap items-center gap-1.5`,
			children: [`Drafts`, (0, x.jsx)(E, {
				container: e,
				label: `About drafts`,
				title: `Only you see drafts`,
				icon: `info`,
				size: `md`,
				placement: `bottom`,
				children: `A draft stays private until you publish it. Nobody else can find it.`
			})]
		})]
	}) });
}
function V({ onClose: e }) {
	let t = (0, b.useId)();
	return (0, x.jsx)(S, { children: (0, x.jsxs)(`section`, {
		"aria-labelledby": t,
		className: `mt-3 flex flex-col gap-3 rounded-lg border border-border bg-sunken p-3`,
		children: [
			(0, x.jsx)(`h4`, {
				id: t,
				className: `font-semibold`,
				children: `Quick filters`
			}),
			(0, x.jsx)(u, { label: `Contains` }),
			(0, x.jsxs)(`div`, {
				className: `flex flex-wrap gap-2`,
				children: [(0, x.jsx)(c, {
					size: `sm`,
					onPress: e,
					children: `Apply`
				}), (0, x.jsx)(c, {
					size: `sm`,
					variant: `outline`,
					onPress: e,
					children: `Close`
				})]
			})
		]
	}) });
}
function H() {
	let [e, t] = (0, b.useState)(!1);
	return (0, x.jsxs)(`div`, { children: [(0, x.jsx)(c, {
		variant: `outline`,
		"aria-expanded": e,
		onPress: () => t(!e),
		children: `Quick filters`
	}), e ? (0, x.jsx)(V, { onClose: () => t(!1) }) : null] });
}
var U = {
	title: `Overlays`,
	description: `Layers over the page: dialogs, confirmations, popovers, menus and tips. Each one traps or returns focus, closes on Escape, keeps a visible border in forced-colors mode and fits a 320px screen, where the modal becomes a bottom sheet.`,
	pl: {
		title: `Nakładki`,
		description: `Warstwy nad stroną: okna dialogowe, potwierdzenia, okna podręczne, menu i podpowiedzi. Każda przejmuje albo zwraca fokus, zamyka się klawiszem Escape, zachowuje widoczną ramkę w trybie wymuszonych kolorów i mieści się na ekranie 320 px, gdzie Modal staje się dolnym arkuszem.`
	},
	demos: [
		{
			name: `Modal`,
			components: [`Modal`],
			description: `A dialog that blocks the page until it is closed. Pick it for a short task, such as a form or a choice, that must finish before going on; the body scrolls and the actions stay in view.`,
			usage: `<Modal
  trigger={<Button>Rename project</Button>}
  title="Rename project"
  closeLabel="Close"
  footer={<><Button variant="outline" slot="close">Cancel</Button><Button onPress={save}>Save</Button></>}
>
  <TextField label="Project name" />
</Modal>`,
			accessibility: `Focus moves into the dialog, Tab stays inside it, Escape and the close button close it, and focus goes back to the trigger. The title names the dialog and the description describes it. The rest of the page is hidden from screen readers while it is open. Built to WCAG 2.2 AA.`,
			pl: {
				description: `Okno dialogowe, które blokuje stronę, dopóki nie zostanie zamknięte. Wybierz je dla krótkiego zadania, takiego jak formularz lub wybór, które trzeba skończyć, zanim pójdziesz dalej; treść się przewija, a akcje zostają w widoku.`,
				accessibility: `Fokus przechodzi do okna, Tab zostaje w środku, okno zamykają Escape i przycisk zamknięcia, a fokus wraca na element otwierający. Tytuł nazywa okno, a opis je opisuje. Reszta strony jest ukryta przed czytnikami ekranu, gdy okno jest otwarte. Budowane z celem WCAG 2.2 AA.`
			},
			render: () => (0, x.jsx)(M, {})
		},
		{
			name: `ConfirmDialog`,
			components: [`ConfirmDialog`],
			description: `Asks before an action that is hard to undo. It waits for an async action, shows the pending state and keeps the dialog open with an error if the action fails.`,
			usage: `<ConfirmDialog
  tone="danger"
  trigger={<Button variant="danger">Delete</Button>}
  title="Delete this draft?"
  confirmLabel="Delete draft"
  cancelLabel="Keep it"
  error={error}
  onConfirm={remove}
>
  This cannot be undone.
</ConfirmDialog>`,
			accessibility: `An alertdialog. A destructive action starts focus on Cancel, any other on the action, so Enter does the safe thing. The danger tone has a warning icon and says what happens in words. An error is announced at once with role="alert". Escape is ignored while the action runs.`,
			pl: {
				description: `Pyta przed akcją, którą trudno cofnąć. Czeka na akcję asynchroniczną, pokazuje stan oczekiwania i zostawia okno otwarte z błędem, jeśli akcja się nie powiedzie.`,
				accessibility: `Okno typu alertdialog. Przy akcji destrukcyjnej fokus zaczyna się na Cancel, przy każdej innej na akcji, więc Enter robi to, co bezpieczne. Ton niebezpieczeństwa ma ikonę ostrzeżenia i mówi słowami, co się stanie. Błąd jest ogłaszany od razu przez role="alert". Escape jest ignorowany, gdy akcja trwa.`
			},
			render: () => (0, x.jsx)(N, {})
		},
		{
			name: `Popover`,
			components: [`Popover`],
			description: `A small panel attached to a button, for extra controls or details that do not need the whole screen. Prefer it to a Modal when the page should stay in view.`,
			usage: `<Popover trigger={<Button>Share</Button>} title="Share this page">
  {(close) => <Button onPress={close}>Copy link</Button>}
</Popover>`,
			accessibility: `The trigger reports aria-expanded. The panel is a dialog named by its title, or by label when it has none. Focus moves in and returns to the trigger on Escape or a click outside. It never grows wider than the screen.`,
			pl: {
				description: `Mały panel przypięty do przycisku, dla dodatkowych kontrolek albo szczegółów, które nie potrzebują całego ekranu. Wybierz go zamiast Modal, gdy strona ma zostać w widoku.`,
				accessibility: `Element otwierający zgłasza aria-expanded. Panel jest oknem dialogowym nazwanym swoim tytułem albo przez label, gdy tytułu nie ma. Fokus przechodzi do panelu i wraca na element otwierający po Escape albo kliknięciu poza panelem. Panel nigdy nie jest szerszy niż ekran.`
			},
			render: () => (0, x.jsx)(P, {})
		},
		{
			name: `DropdownMenu`,
			components: [`DropdownMenu`, `MenuItem`],
			description: `A list of actions behind a button. MenuItem rows take an icon, a description, a shortcut and a danger tone; pick a menu for commands, not for choosing a form value.`,
			usage: `<DropdownMenu trigger={<IconButton label="Help"><Icon name="status.help" /></IconButton>} onAction={run}>
  <MenuItem id="guide" icon={<Icon name="nav.help" />}>Start the guide</MenuItem>
  <MenuItem id="delete" tone="danger">Delete</MenuItem>
</DropdownMenu>`,
			accessibility: `Enter, Space or Arrow Down opens it on the first row, Arrow Up on the last. Arrows move, typing jumps to a row, Enter runs it and Escape closes. The menu is named by its trigger, each row by all of its text, label first, so a description is read with it, and icons are hidden. Rows are at least 32px tall.`,
			pl: {
				description: `Lista akcji za przyciskiem. Wiersze MenuItem przyjmują ikonę, opis, skrót i ton niebezpieczeństwa; wybierz menu dla poleceń, a nie dla wyboru wartości formularza.`,
				accessibility: `Enter, Spacja lub strzałka w dół otwiera menu na pierwszym wierszu, strzałka w górę na ostatnim. Strzałki przesuwają, wpisywanie przeskakuje do wiersza, Enter go uruchamia, a Escape zamyka menu. Menu jest nazwane przez element otwierający, a każdy wiersz całym swoim tekstem, etykietą na początku, więc opis jest odczytywany razem z nią; ikony są ukryte. Wiersze mają co najmniej 32 px wysokości.`
			},
			render: () => (0, x.jsx)(F, {})
		},
		{
			name: `MenuCheckItem`,
			components: [`MenuCheckItem`],
			description: `A menu row that can be checked, for view settings such as visible columns. It needs a selectionMode on the menu or on its MenuLabel group.`,
			usage: `<DropdownMenu trigger={<Button>Columns</Button>} selectionMode="multiple" selectedKeys={keys} onSelectionChange={setKeys}>
  <MenuCheckItem id="title">Title</MenuCheckItem>
  <MenuCheckItem id="owner">Owner</MenuCheckItem>
</DropdownMenu>`,
			accessibility: `A multiple selection gives menuitemcheckbox rows, a single one menuitemradio, each with aria-checked. Checked rows show a check or a dot and bolder text, never colour alone.`,
			pl: {
				description: `Wiersz menu, który można zaznaczyć, do ustawień widoku, takich jak widoczne kolumny. Potrzebuje selectionMode na menu albo na jego grupie MenuLabel.`,
				accessibility: `Wybór wielokrotny daje wiersze menuitemcheckbox, pojedynczy menuitemradio, każdy z aria-checked. Zaznaczone wiersze pokazują znacznik albo kropkę i pogrubiony tekst, nigdy tylko kolor.`
			},
			render: () => (0, x.jsx)(I, {})
		},
		{
			name: `MenuLabel`,
			components: [`MenuLabel`],
			description: `A labelled group of menu rows with a dividing line before it. A group can hold its own selection, such as one theme mode next to plain actions.`,
			usage: `<MenuLabel label="Theme mode" selectionMode="single" selectedKeys={mode} onSelectionChange={setMode}>
  <MenuCheckItem id="light">Light</MenuCheckItem>
  <MenuCheckItem id="dark">Dark</MenuCheckItem>
</MenuLabel>`,
			accessibility: `The group has role="group" and is named by its visible label, so a screen reader says "Theme mode, group" when entering it.`,
			pl: {
				description: `Grupa wierszy menu z etykietą i linią oddzielającą przed nią. Grupa może mieć własny wybór, na przykład jeden tryb motywu obok zwykłych akcji.`,
				accessibility: `Grupa ma role="group" i jest nazwana swoją widoczną etykietą, więc czytnik ekranu przy wejściu mówi „Theme mode, grupa”.`
			},
			render: () => (0, x.jsx)(R, {})
		},
		{
			name: `Tooltip`,
			components: [`Tooltip`],
			description: `A short hint on hover or keyboard focus. Use it for extra words about a control that already has a name; for anything a touch user needs, use InfoTip.`,
			usage: `<Tooltip content="Saves a copy you can return to later">
  <Button>Save version</Button>
</Tooltip>`,
			accessibility: `Shows at once on keyboard focus and after a short delay on hover, stays while the pointer is over it, and Escape hides it. Its text describes the trigger through aria-describedby. IconButton has its own tooltip, so do not wrap it.`,
			pl: {
				description: `Krótka podpowiedź po najechaniu albo przy fokusie z klawiatury. Użyj jej dla dodatkowych słów o kontrolce, która już ma nazwę; dla wszystkiego, czego potrzebuje użytkownik dotyku, użyj InfoTip.`,
				accessibility: `Pokazuje się od razu przy fokusie z klawiatury i po krótkim opóźnieniu po najechaniu, zostaje, gdy wskaźnik jest nad nią, a Escape ją ukrywa. Jej tekst opisuje element przez aria-describedby. IconButton ma własny dymek podpowiedzi, więc nie owijaj go.`
			},
			render: () => (0, x.jsx)(z, {})
		},
		{
			name: `InfoTip`,
			components: [`InfoTip`],
			description: `A small round button beside a term that opens a short explanation. Pick it over Tooltip when the text matters, because it works by touch, by keyboard and at any zoom.`,
			usage: `<InfoTip label="About the build time">
  The time from start to finish of the last run.
</InfoTip>`,
			accessibility: `A real button with a name that says what it explains. Enter or a tap opens the text as a small dialog, Escape closes it and focus returns. The sm size is a 24px target, the WCAG 2.2 minimum; md is 32px.`,
			pl: {
				description: `Mały okrągły przycisk obok terminu, który otwiera krótkie objaśnienie. Wybierz go zamiast Tooltip, gdy tekst ma znaczenie, bo działa dotykiem, klawiaturą i przy każdym powiększeniu.`,
				accessibility: `Prawdziwy przycisk z nazwą, która mówi, co objaśnia. Enter albo dotknięcie otwiera tekst jako małe okno dialogowe, Escape je zamyka, a fokus wraca. Rozmiar sm ma cel 24 px, czyli minimum WCAG 2.2; md ma 32 px.`
			},
			render: () => (0, x.jsx)(B, {})
		},
		{
			name: `FocusTrap`,
			components: [`FocusTrap`],
			description: `Keeps Tab inside a panel of your own while it is open, then gives focus back. Modal, Popover and DropdownMenu already do this; pick FocusTrap for a custom drawer or a guided step.`,
			usage: `{open ? (
  <FocusTrap>
    <section aria-label="Quick filters">…</section>
  </FocusTrap>
) : null}`,
			accessibility: `Built on React Aria FocusScope. On mount focus goes to the first tabbable element, or stays on one inside that has autoFocus. Tab and Shift+Tab wrap at the ends, radio groups count as one stop, and focus returns to the opener on unmount. Give the panel a name and a way out, here Apply and Close, and close it on Escape where that fits.`,
			pl: {
				description: `Trzyma Tab wewnątrz własnego panelu, dopóki jest otwarty, a potem oddaje fokus. Modal, Popover i DropdownMenu już to robią; wybierz FocusTrap dla własnej szuflady albo kroku przewodnika.`,
				accessibility: `Zbudowane na FocusScope z React Aria. Po zamontowaniu fokus trafia na pierwszy element dostępny z klawiatury albo zostaje na elemencie w środku, który ma autoFocus. Tab i Shift+Tab zawijają się na końcach, grupy przycisków opcji liczą się jako jeden przystanek, a fokus wraca do elementu otwierającego po odmontowaniu. Daj panelowi nazwę i drogę wyjścia, tutaj Apply i Close, i zamykaj go klawiszem Escape tam, gdzie to pasuje.`
			},
			render: () => (0, x.jsx)(H, {})
		}
	]
};
export { D as t };
