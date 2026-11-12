import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { r as n, t as r } from "./createLucideIcon.npgQlVHx.js";
import { n as i, t as a } from "./Popover.o3HH2qmP.js";
import { t as o } from "./copy.BkyZ8mHn.js";
import { t as s } from "./keyboard.gZdHxX2B.js";
import { t as c } from "./monitor.V7ofZsHd.js";
import { i as l, r as u } from "./slugs.CpBgIMWb.js";
import { t as d } from "./pencil.Dl6p2qqz.js";
import { t as f } from "./trash.CT5nMJCR.js";
import { n as p } from "./react-dom.B9zIfLd2.js";
import { t as m } from "./Button.DRxd_7vr.js";
import { t as h } from "./IconButton.DlwxSF13.js";
import { t as g } from "./TextField.BRNO9ptc.js";
import { t as _ } from "./ConfirmDialog.ClfyTdVj.js";
import { a as v, i as y, n as b, o as x, r as S, t as C } from "./MenuLabel.Dt2Hce_B.js";
import { n as w } from "./FocusScope.Ba7RJw7M.js";
import { n as T, t as E } from "./jsx-runtime.yrTYNGQT.js";
import { t as D } from "./info.D9DvH9cK.js";
import { t as O } from "./check.CUpC8LgP.js";
import { t as k } from "./circle.DoiYvJDm.js";
import { o as A } from "./Dialog.BHaijp-q.js";
import { t as j } from "./Modal.BEIjpKzW.js";
import { t as M } from "./Tooltip.Dktf-jPz.js";
var N = {
	name: `book-open`,
	size: 24,
	node: [[`path`, {
		d: `M12 5v16`,
		key: `1f6ucr`
	}], [`path`, {
		d: `M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,
		key: `1fyvmf`
	}]]
};
N.node;
var P = r(N), F = {
	name: `life-buoy`,
	size: 24,
	node: [
		[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`,
			key: `1mglay`
		}],
		[`path`, {
			d: `m4.93 4.93 4.24 4.24`,
			key: `1ymg45`
		}],
		[`path`, {
			d: `m14.83 9.17 4.24-4.24`,
			key: `1cb5xl`
		}],
		[`path`, {
			d: `m14.83 14.83 4.24 4.24`,
			key: `q42g0n`
		}],
		[`path`, {
			d: `m9.17 14.83-4.24 4.24`,
			key: `bqpfvv`
		}],
		[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `4`,
			key: `4exip2`
		}]
	]
};
F.node;
var I = r(F), L = t(p(), 1), R = E();
function z({ children: e, isActive: t = !0, autoFocus: n = !0, restoreFocus: r = !0 }) {
	return (0, R.jsx)(w, {
		contain: t,
		autoFocus: n,
		restoreFocus: r,
		children: e
	});
}
var B = {
	sm: `size-6`,
	md: `size-8`
};
function V({ label: e, children: t, title: r, icon: o = `help`, size: s = `sm`, placement: c = `top`, isOpen: l, defaultOpen: u, onOpenChange: d, container: f, className: p }) {
	let m = (0, L.useMemo)(() => {
		let t = o === `info` ? D : i;
		return (0, R.jsx)(n, {
			"aria-label": e,
			className: T(`inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-border-strong bg-transparent align-middle text-muted transition-colors data-hovered:border-accent-text data-hovered:text-accent-text data-pressed:bg-hover data-pressed:text-fg aria-expanded:border-accent-text aria-expanded:text-accent-text`, B[s], p),
			children: (0, R.jsx)(t, {
				size: s === `sm` ? 14 : 18,
				"aria-hidden": !0
			})
		});
	}, [
		o,
		e,
		s,
		p
	]);
	return (0, R.jsx)(a, {
		trigger: m,
		placement: c,
		showArrow: !0,
		...r == null ? { label: e } : { title: r },
		...l === void 0 ? {} : { isOpen: l },
		...u === void 0 ? {} : { defaultOpen: u },
		...d === void 0 ? {} : { onOpenChange: d },
		...f === void 0 ? {} : { container: f },
		className: `max-w-[min(18rem,calc(100vw-1.5rem))] text-caption leading-relaxed`,
		children: t
	});
}
function H({ children: e, description: t, shortcut: n, className: r, textValue: i, ...a }) {
	return (0, R.jsx)(A, {
		...a,
		...i === void 0 ? typeof e == `string` ? { textValue: e } : {} : { textValue: i },
		className: T(y, v.default, `data-selected:font-medium`, r),
		children: ({ isSelected: r, selectionMode: i }) => (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)(`span`, {
			"aria-hidden": !0,
			className: `flex size-4 shrink-0 items-center justify-center text-accent-text group-data-[focused]/item:text-current`,
			children: r ? i === `single` ? (0, R.jsx)(k, {
				size: 8,
				fill: `currentColor`
			}) : (0, R.jsx)(O, {
				size: 14,
				strokeWidth: 2.5
			}) : null
		}), (0, R.jsx)(S, {
			...t === void 0 ? {} : { description: t },
			...n === void 0 ? {} : { shortcut: n },
			children: e
		})] })
	});
}
var U = e({ default: () => ne });
function W({ children: e }) {
	let [t, n] = (0, L.useState)(null);
	return (0, R.jsx)(`div`, {
		ref: n,
		children: e(t)
	});
}
function G() {
	return (0, R.jsx)(W, { children: (e) => (0, R.jsxs)(`div`, {
		className: `flex flex-wrap gap-2`,
		children: [(0, R.jsx)(j, {
			container: e,
			trigger: (0, R.jsx)(m, { children: `Rename project` }),
			title: `Rename project`,
			description: `The new name shows in the sidebar and in every link.`,
			closeLabel: `Close`,
			size: `sm`,
			footer: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)(m, {
				variant: `outline`,
				slot: `close`,
				children: `Cancel`
			}), (0, R.jsx)(m, {
				slot: `close`,
				children: `Save name`
			})] }),
			children: (0, R.jsx)(g, {
				label: `Project name`,
				defaultValue: `Field notes`
			})
		}), (0, R.jsx)(j, {
			container: e,
			trigger: (0, R.jsx)(m, {
				variant: `outline`,
				children: `Read the terms`
			}),
			title: `Terms of use, with a heading long enough to wrap onto a second line on a phone`,
			closeLabel: `Close`,
			footer: (0, R.jsx)(m, {
				slot: `close`,
				children: `I have read them`
			}),
			children: Array.from({ length: 12 }, (e, t) => (0, R.jsx)(`p`, { children: `Section ${t + 1}. The body scrolls inside the dialog while the heading and the actions stay in place, so the way out is always visible.` }, t))
		})]
	}) });
}
function K() {
	let [e, t] = (0, L.useState)(0), [n, r] = (0, L.useState)(), [i, a] = (0, L.useState)(``);
	return (0, R.jsx)(W, { children: (o) => (0, R.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, R.jsxs)(`div`, {
			className: `flex flex-wrap gap-2`,
			children: [(0, R.jsx)(_, {
				container: o,
				tone: `danger`,
				trigger: (0, R.jsxs)(m, {
					variant: `danger`,
					children: [(0, R.jsx)(f, { "aria-hidden": !0 }), `Delete draft`]
				}),
				title: `Delete this draft?`,
				confirmLabel: `Delete draft`,
				cancelLabel: `Keep it`,
				pendingLabel: `Deleting`,
				error: n,
				errorToneLabel: `Error`,
				errorDetails: `Check the connection and try again.`,
				onOpenChange: (e) => e ? r(void 0) : void 0,
				onConfirm: async () => {
					if (await new Promise((e) => setTimeout(e, 900)), t((e) => e + 1), e % 2 == 0) throw r(`Could not delete the draft`), Error(`offline`);
					a(`Draft deleted.`);
				},
				children: `It disappears for everyone who can see it. This cannot be undone. The first try fails on purpose to show the error.`
			}), (0, R.jsx)(_, {
				container: o,
				trigger: (0, R.jsx)(m, {
					variant: `outline`,
					children: `Publish`
				}),
				title: `Publish now?`,
				confirmLabel: `Publish`,
				cancelLabel: `Not yet`,
				onConfirm: () => a(`Published.`),
				children: `Readers see the page at once.`
			})]
		}), (0, R.jsx)(`output`, {
			"aria-live": `polite`,
			className: `min-h-5 text-caption text-ok`,
			children: i ? (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)(`span`, {
				"aria-hidden": !0,
				children: `✓ `
			}), i] }) : null
		})]
	}) });
}
function q() {
	return (0, R.jsx)(W, { children: (e) => (0, R.jsxs)(`div`, {
		className: `flex flex-wrap gap-2`,
		children: [(0, R.jsx)(a, {
			container: e,
			trigger: (0, R.jsx)(m, {
				variant: `outline`,
				children: `Share`
			}),
			title: `Share this page`,
			showArrow: !0,
			children: (e) => (0, R.jsxs)(`div`, {
				className: `flex flex-col gap-3`,
				children: [(0, R.jsx)(`p`, {
					className: `text-muted`,
					children: `Anyone with the link can read it.`
				}), (0, R.jsxs)(m, {
					size: `sm`,
					onPress: e,
					children: [(0, R.jsx)(o, { "aria-hidden": !0 }), `Copy link`]
				})]
			})
		}), (0, R.jsx)(a, {
			container: e,
			trigger: (0, R.jsx)(m, {
				variant: `ghost`,
				children: `Details`
			}),
			label: `Details`,
			placement: `bottom start`,
			children: (0, R.jsxs)(`dl`, {
				className: `grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-caption`,
				children: [
					(0, R.jsx)(`dt`, {
						className: `text-muted`,
						children: `Owner`
					}),
					(0, R.jsx)(`dd`, { children: `Ada Lovelace` }),
					(0, R.jsx)(`dt`, {
						className: `text-muted`,
						children: `Updated`
					}),
					(0, R.jsx)(`dd`, { children: `2 hours ago` })
				]
			})
		})]
	}) });
}
function J() {
	let [e, t] = (0, L.useState)(``);
	return (0, R.jsx)(W, { children: (n) => (0, R.jsxs)(`div`, {
		className: `flex flex-wrap items-center gap-3`,
		children: [
			(0, R.jsxs)(x, {
				container: n,
				trigger: (0, R.jsx)(h, {
					label: `Help`,
					container: n,
					children: (0, R.jsx)(i, { "aria-hidden": !0 })
				}),
				onAction: (e) => t(String(e)),
				children: [
					(0, R.jsx)(b, {
						id: `guide`,
						icon: (0, R.jsx)(I, { size: 16 }),
						description: `A short walk through the main views`,
						children: `Start the guide`
					}),
					(0, R.jsx)(b, {
						id: `shortcuts`,
						icon: (0, R.jsx)(s, { size: 16 }),
						shortcut: `?`,
						children: `Keyboard shortcuts`
					}),
					(0, R.jsx)(b, {
						id: `docs`,
						icon: (0, R.jsx)(P, { size: 16 }),
						children: `Documentation`
					}),
					(0, R.jsx)(b, {
						id: `offline`,
						isDisabled: !0,
						children: `Contact support (offline)`
					})
				]
			}),
			(0, R.jsxs)(x, {
				container: n,
				trigger: (0, R.jsx)(m, {
					variant: `outline`,
					children: `Page actions`
				}),
				placement: `bottom start`,
				onAction: (e) => t(String(e)),
				children: [
					(0, R.jsx)(b, {
						id: `rename`,
						icon: (0, R.jsx)(d, { size: 16 }),
						shortcut: `F2`,
						children: `Rename`
					}),
					(0, R.jsx)(b, {
						id: `duplicate`,
						icon: (0, R.jsx)(o, { size: 16 }),
						children: `Duplicate with a name long enough to wrap inside a narrow menu`
					}),
					(0, R.jsx)(b, {
						id: `delete`,
						tone: `danger`,
						icon: (0, R.jsx)(f, { size: 16 }),
						children: `Delete`
					})
				]
			}),
			(0, R.jsx)(`output`, {
				"aria-live": `polite`,
				className: `text-caption text-muted`,
				children: e ? `Chose: ${e}` : null
			})
		]
	}) });
}
function Y() {
	let [e, t] = (0, L.useState)(new Set([`title`, `owner`]));
	return (0, R.jsx)(W, { children: (n) => (0, R.jsxs)(`div`, {
		className: `flex flex-wrap items-center gap-3`,
		children: [(0, R.jsxs)(x, {
			container: n,
			trigger: (0, R.jsx)(m, {
				variant: `outline`,
				children: `Columns`
			}),
			placement: `bottom start`,
			selectionMode: `multiple`,
			selectedKeys: e,
			onSelectionChange: t,
			children: [
				(0, R.jsx)(H, {
					id: `title`,
					children: `Title`
				}),
				(0, R.jsx)(H, {
					id: `owner`,
					children: `Owner`
				}),
				(0, R.jsx)(H, {
					id: `updated`,
					children: `Last updated`
				}),
				(0, R.jsx)(H, {
					id: `size`,
					isDisabled: !0,
					children: `Size`
				})
			]
		}), (0, R.jsx)(`span`, {
			className: `text-caption text-muted`,
			children: e === `all` ? `All columns` : `${e.size} columns shown`
		})]
	}) });
}
var X = [
	{
		id: `light`,
		label: `Light`,
		text: `Always the light theme`,
		icon: u
	},
	{
		id: `dark`,
		label: `Dark`,
		text: `Always the dark theme`,
		icon: l
	},
	{
		id: `system`,
		label: `System`,
		text: `Follows the operating system`,
		icon: c
	}
];
function Z() {
	let [e, t] = (0, L.useState)(new Set([`system`])), n = e === `all` ? `system` : String([...e][0] ?? `system`), r = X.find((e) => e.id === n)?.icon ?? c;
	return (0, R.jsx)(W, { children: (i) => (0, R.jsxs)(x, {
		container: i,
		trigger: (0, R.jsx)(h, {
			label: `Theme: ${n}`,
			container: i,
			children: (0, R.jsx)(r, { "aria-hidden": !0 })
		}),
		children: [(0, R.jsx)(C, {
			label: `Theme mode`,
			selectionMode: `single`,
			disallowEmptySelection: !0,
			selectedKeys: e,
			onSelectionChange: t,
			children: X.map((e) => (0, R.jsx)(H, {
				id: e.id,
				description: e.text,
				children: e.label
			}, e.id))
		}), (0, R.jsx)(C, {
			label: `More`,
			children: (0, R.jsx)(b, {
				id: `themes`,
				children: `More themes…`
			})
		})]
	}) });
}
function Q() {
	return (0, R.jsx)(W, { children: (e) => (0, R.jsxs)(`div`, {
		className: `flex flex-wrap items-center gap-3`,
		children: [(0, R.jsx)(M, {
			container: e,
			content: `Saves a copy you can return to later`,
			children: (0, R.jsx)(m, {
				variant: `outline`,
				children: `Save version`
			})
		}), (0, R.jsx)(M, {
			container: e,
			placement: `bottom`,
			content: `Search everything: views, projects and actions. Shortcut Ctrl K.`,
			children: (0, R.jsx)(m, {
				variant: `ghost`,
				children: `Search`
			})
		})]
	}) });
}
function $() {
	return (0, R.jsx)(W, { children: (e) => (0, R.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, R.jsxs)(`p`, {
			className: `flex flex-wrap items-center gap-1.5`,
			children: [`Build time of the last run: 42 s`, (0, R.jsx)(V, {
				container: e,
				label: `About the build time`,
				children: `The time from start to finish of the last run, measured with a clean cache.`
			})]
		}), (0, R.jsxs)(`p`, {
			className: `flex flex-wrap items-center gap-1.5`,
			children: [`Drafts`, (0, R.jsx)(V, {
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
function ee({ onClose: e }) {
	let t = (0, L.useId)();
	return (0, R.jsx)(z, { children: (0, R.jsxs)(`section`, {
		"aria-labelledby": t,
		className: `mt-3 flex flex-col gap-3 rounded-lg border border-border bg-sunken p-3`,
		children: [
			(0, R.jsx)(`h4`, {
				id: t,
				className: `font-semibold`,
				children: `Quick filters`
			}),
			(0, R.jsx)(g, { label: `Contains` }),
			(0, R.jsxs)(`div`, {
				className: `flex flex-wrap gap-2`,
				children: [(0, R.jsx)(m, {
					size: `sm`,
					onPress: e,
					children: `Apply`
				}), (0, R.jsx)(m, {
					size: `sm`,
					variant: `outline`,
					onPress: e,
					children: `Close`
				})]
			})
		]
	}) });
}
function te() {
	let [e, t] = (0, L.useState)(!1);
	return (0, R.jsxs)(`div`, { children: [(0, R.jsx)(m, {
		variant: `outline`,
		"aria-expanded": e,
		onPress: () => t(!e),
		children: `Quick filters`
	}), e ? (0, R.jsx)(ee, { onClose: () => t(!1) }) : null] });
}
var ne = {
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
			render: () => (0, R.jsx)(G, {})
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
			render: () => (0, R.jsx)(K, {})
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
			render: () => (0, R.jsx)(q, {})
		},
		{
			name: `DropdownMenu`,
			components: [`DropdownMenu`, `MenuItem`],
			description: `A list of actions behind a button. MenuItem rows take an icon, a description, a shortcut and a danger tone; pick a menu for commands, not for choosing a form value.`,
			usage: `<DropdownMenu trigger={<IconButton label="Help"><CircleHelp /></IconButton>} onAction={run}>
  <MenuItem id="guide" icon={<LifeBuoy />}>Start the guide</MenuItem>
  <MenuItem id="delete" tone="danger">Delete</MenuItem>
</DropdownMenu>`,
			accessibility: `Enter, Space or Arrow Down opens it on the first row, Arrow Up on the last. Arrows move, typing jumps to a row, Enter runs it and Escape closes. The menu is named by its trigger, each row by all of its text, label first, so a description is read with it, and icons are hidden. Rows are at least 32px tall.`,
			pl: {
				description: `Lista akcji za przyciskiem. Wiersze MenuItem przyjmują ikonę, opis, skrót i ton niebezpieczeństwa; wybierz menu dla poleceń, a nie dla wyboru wartości formularza.`,
				accessibility: `Enter, Spacja lub strzałka w dół otwiera menu na pierwszym wierszu, strzałka w górę na ostatnim. Strzałki przesuwają, wpisywanie przeskakuje do wiersza, Enter go uruchamia, a Escape zamyka menu. Menu jest nazwane przez element otwierający, a każdy wiersz całym swoim tekstem, etykietą na początku, więc opis jest odczytywany razem z nią; ikony są ukryte. Wiersze mają co najmniej 32 px wysokości.`
			},
			render: () => (0, R.jsx)(J, {})
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
			render: () => (0, R.jsx)(Y, {})
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
			render: () => (0, R.jsx)(Z, {})
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
			render: () => (0, R.jsx)(Q, {})
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
			render: () => (0, R.jsx)($, {})
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
			render: () => (0, R.jsx)(te, {})
		}
	]
};
export { U as t };
