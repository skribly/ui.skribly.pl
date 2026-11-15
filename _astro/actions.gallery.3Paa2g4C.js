import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { I as n, L as r, M as i, j as a, z as o } from "./doc.C_PtMNUB.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
import { c } from "./ListBox.Bq8IE31A.js";
import { n as l, r as u } from "./GridList.Be-Qku2e.js";
import { t as d } from "./useDragAndDrop.Ds4OKgBP.js";
import { t as f } from "./useListData.NOa4VaOj.js";
import { r as p, t as m } from "./Button.df3csLrB.js";
import { t as h } from "./Group.CmTJ4Xbt.js";
import { t as g } from "./Toolbar.DJ_LL8L5.js";
import { t as _ } from "./CloseButton.DmuVMmSp.js";
import { t as v } from "./CopyButton.r6Q2ZE4z.js";
import { t as y } from "./DragHandle.DYAIsE1N.js";
import { n as b, t as x } from "./IconButton.Bqgi69Iz.js";
import { t as S } from "./Kbd.BpX5YeGw.js";
import { t as C } from "./Keyboard.DA1lzqms.js";
import { t as w } from "./LinkButton.Cn2efQ4W.js";
import { t as T } from "./ToggleButton.D1OqrXr5.js";
var E = t(s(), 1), D = n(), O = `gap-0 [&>*+*]:-ms-px [&>*:not(:first-child)]:rounded-s-none [&>*:not(:last-child)]:rounded-e-none [&>[data-hovered]]:z-10 [&>[data-focus-visible]]:z-20`, k = `gap-0 [&>*+*]:-mt-px [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>[data-hovered]]:z-10 [&>[data-focus-visible]]:z-20`;
function A({ label: e, orientation: t = `horizontal`, attached: n = !1, toolbar: i = !1, stackOnNarrow: a = !1, className: o, children: s }) {
	let c = t === `vertical`, l = r(`max-w-full`, c ? `inline-flex flex-col items-stretch` : `inline-flex flex-wrap items-center`, n ? c ? k : O : `gap-2`, a && !n && !c && `max-sm:flex max-sm:w-full max-sm:flex-col max-sm:items-stretch`, o), u = e === void 0 ? {} : { "aria-label": e };
	return i ? (0, D.jsx)(g, {
		...u,
		orientation: t,
		className: l,
		children: s
	}) : (0, D.jsx)(h, {
		...u,
		className: l,
		children: s
	});
}
var j = `cursor-not-allowed opacity-50 data-pressed:translate-y-0 forced-colors:border-[GrayText] forced-colors:text-[GrayText] forced-colors:opacity-100`, M = (0, E.forwardRef)(function({ isGated: e, reason: t, reasonDisplay: n = `inline`, tooltipPlacement: i = `top`, container: o, wrapperClassName: s, onPress: c, type: l, className: u, "aria-describedby": d, ...f }, p) {
	let h = (0, E.useId)(), g = (0, E.useCallback)((t) => {
		e || c?.(t);
	}, [e, c]), _ = (0, D.jsx)(m, {
		...f,
		ref: p,
		...e || l === void 0 ? { type: `button` } : { type: l },
		onPress: g,
		"data-gated": e || void 0,
		...e ? { "aria-disabled": !0 } : {},
		...e || d ? { "aria-describedby": r(d, e && h) } : {},
		className: r(e && j, u)
	});
	return n === `tooltip` ? (0, D.jsxs)(`span`, {
		className: r(`inline-flex max-w-full`, s),
		children: [(0, D.jsx)(b, {
			content: t,
			container: o,
			placement: i,
			isDisabled: !e,
			children: _
		}), e ? (0, D.jsx)(`span`, {
			id: h,
			className: `sr-only`,
			children: t
		}) : null]
	}) : (0, D.jsxs)(`span`, {
		className: r(`inline-flex max-w-full flex-col items-start gap-1`, s),
		children: [_, e ? (0, D.jsxs)(`span`, {
			id: h,
			className: `inline-flex max-w-full items-start gap-1 text-caption text-muted`,
			children: [(0, D.jsx)(a, {
				name: `status.info`,
				"aria-hidden": !0,
				className: `mt-px size-3.5 shrink-0`
			}), (0, D.jsx)(`span`, {
				className: `min-w-0 wrap-break-word`,
				children: t
			})]
		}) : null]
	});
});
function N(e, t) {
	return `${typeof e == `string` ? e : e.label}-${t}`;
}
function P({ keys: e, separator: t }) {
	return (0, D.jsx)(C, {
		className: `inline-flex shrink-0 items-center gap-1`,
		children: e.map((e, n) => (0, D.jsxs)(E.Fragment, { children: [n > 0 && t !== void 0 ? (0, D.jsx)(`span`, {
			"aria-hidden": !0,
			className: `text-caption text-muted`,
			children: t
		}) : null, typeof e == `string` ? (0, D.jsx)(S, { children: e }) : (0, D.jsx)(S, {
			label: e.label,
			children: e.key
		})] }, N(e, n)))
	});
}
function F({ keys: e, separator: t, orLabel: n, className: i }) {
	let a = e.length > 0 && Array.isArray(e[0]) ? e : [e];
	return (0, D.jsx)(`span`, {
		className: r(`inline-flex max-w-full flex-wrap items-center gap-x-1.5 gap-y-1`, i),
		children: a.map((e, r) => (0, D.jsxs)(E.Fragment, { children: [r > 0 ? n === void 0 ? (0, D.jsx)(`span`, {
			"aria-hidden": !0,
			className: `text-caption text-muted`,
			children: `/`
		}) : (0, D.jsx)(`span`, {
			className: `text-caption text-muted`,
			children: n
		}) : null, (0, D.jsx)(P, {
			keys: e,
			separator: t
		})] }, e.map(N).join(` `)))
	});
}
var I = i(`chevron.up`), L = i(`chevron.left`), R = i(`chevron.down`), z = i(`chevron.right`), B = `inline-flex size-6 min-h-6 min-w-6 shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent text-muted transition-colors duration-(--sk-duration-fast) data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected data-disabled:cursor-not-allowed data-disabled:opacity-40 data-disabled:data-hovered:bg-transparent forced-colors:data-disabled:text-[GrayText] forced-colors:data-disabled:opacity-100`;
function V({ onMove: e, previousLabel: t, nextLabel: n, label: i, isFirst: a = !1, isLast: s = !1, isDisabled: c = !1, orientation: l = `vertical`, className: u }) {
	let d = (0, E.useRef)(null), f = (0, E.useRef)(null), m = (0, E.useRef)(null);
	(0, E.useLayoutEffect)(() => {
		let e = m.current;
		if (e === null) return;
		m.current = null;
		let t = e === `previous` ? d.current : f.current, n = e === `previous` ? f.current : d.current, r = t && !t.disabled ? t : n;
		r && !r.disabled && document.activeElement !== r && r.focus();
	});
	let g = (0, E.useCallback)(() => {
		m.current = `previous`, e(`previous`);
	}, [e]), _ = (0, E.useCallback)(() => {
		m.current = `next`, e(`next`);
	}, [e]), v = l === `vertical`, y = v ? I : L, b = v ? R : z;
	return (0, D.jsxs)(h, {
		...i === void 0 ? {} : { "aria-label": i },
		className: r(`inline-flex shrink-0`, v ? `flex-col` : `flex-row`, u),
		children: [(0, D.jsx)(o, {
			ref: d,
			"aria-label": t,
			isDisabled: c || a,
			onPress: g,
			className: r(B, p),
			children: (0, D.jsx)(y, {
				"aria-hidden": !0,
				className: r(`size-3.5`, !v && `rtl:rotate-180`)
			})
		}), (0, D.jsx)(o, {
			ref: f,
			"aria-label": n,
			isDisabled: c || s,
			onPress: _,
			className: r(B, p),
			children: (0, D.jsx)(b, {
				"aria-hidden": !0,
				className: r(`size-3.5`, !v && `rtl:rotate-180`)
			})
		})]
	});
}
var H = e({ default: () => ae }), U = `text-label font-semibold text-muted uppercase`;
function W({ title: e, children: t }) {
	return (0, D.jsxs)(`div`, {
		className: `flex flex-col gap-2`,
		children: [(0, D.jsx)(`p`, {
			className: U,
			children: e
		}), (0, D.jsx)(`div`, {
			className: `flex flex-wrap items-center gap-2`,
			children: t
		})]
	});
}
function G() {
	let [e, t] = (0, E.useState)(`idle`);
	return (0, E.useEffect)(() => {
		if (e !== `saving`) return;
		let n = setTimeout(() => t(`saved`), 1600);
		return () => clearTimeout(n);
	}, [e]), (0, D.jsxs)(`div`, {
		className: `flex flex-wrap items-center gap-3`,
		children: [(0, D.jsxs)(m, {
			isPending: e === `saving`,
			pendingLabel: `Saving`,
			onPress: () => t(`saving`),
			children: [(0, D.jsx)(a, {
				name: `action.save`,
				"aria-hidden": !0
			}), `Save changes`]
		}), (0, D.jsx)(`output`, {
			"aria-live": `polite`,
			className: `inline-flex items-center gap-1 text-caption text-ok`,
			children: e === `saved` ? (0, D.jsxs)(D.Fragment, { children: [(0, D.jsx)(`span`, {
				"aria-hidden": !0,
				children: `✓`
			}), ` Saved`] }) : null
		})]
	});
}
function K() {
	return (0, D.jsxs)(`div`, {
		className: `flex flex-col gap-4`,
		children: [
			(0, D.jsxs)(W, {
				title: `Variants`,
				children: [
					(0, D.jsx)(m, { children: `Save` }),
					(0, D.jsx)(m, {
						variant: `outline`,
						children: `Cancel`
					}),
					(0, D.jsx)(m, {
						variant: `ghost`,
						children: `More`
					}),
					(0, D.jsxs)(m, {
						variant: `danger`,
						children: [(0, D.jsx)(a, {
							name: `action.delete`,
							"aria-hidden": !0
						}), `Remove`]
					}),
					(0, D.jsx)(m, {
						variant: `danger-solid`,
						children: `Delete forever`
					}),
					(0, D.jsx)(m, {
						variant: `success`,
						children: `Approve`
					}),
					(0, D.jsx)(m, {
						variant: `warning`,
						children: `Retry later`
					})
				]
			}),
			(0, D.jsxs)(W, {
				title: `Sizes`,
				children: [
					(0, D.jsx)(m, {
						size: `sm`,
						children: `Small`
					}),
					(0, D.jsx)(m, {
						size: `md`,
						children: `Medium`
					}),
					(0, D.jsxs)(m, {
						size: `lg`,
						children: [`Continue`, (0, D.jsx)(a, {
							name: `arrow.right`,
							"aria-hidden": !0,
							className: `rtl:rotate-180`
						})]
					})
				]
			}),
			(0, D.jsxs)(W, {
				title: `States`,
				children: [
					(0, D.jsx)(m, {
						isDisabled: !0,
						children: `Disabled`
					}),
					(0, D.jsx)(m, {
						variant: `outline`,
						isPending: !0,
						pendingLabel: `Loading`,
						children: `Loading`
					}),
					(0, D.jsx)(G, {})
				]
			}),
			(0, D.jsxs)(`div`, {
				className: `flex flex-col gap-2`,
				children: [(0, D.jsx)(`p`, {
					className: U,
					children: `Long label in a narrow box`
				}), (0, D.jsx)(`div`, {
					className: `max-w-48 rounded-md border border-dashed border-border p-2`,
					children: (0, D.jsx)(m, {
						variant: `outline`,
						children: `Send the release notes to every member of the maintainers team`
					})
				})]
			})
		]
	});
}
function q() {
	return (0, D.jsxs)(`div`, {
		className: `flex flex-col gap-4`,
		children: [(0, D.jsxs)(W, {
			title: `Outline`,
			children: [
				(0, D.jsxs)(T, {
					defaultSelected: !0,
					children: [(0, D.jsx)(a, {
						name: `format.wrap`,
						"aria-hidden": !0
					}), `Wrap lines`]
				}),
				(0, D.jsx)(T, { children: `Show whitespace` }),
				(0, D.jsx)(T, {
					isDisabled: !0,
					children: `Disabled`
				})
			]
		}), (0, D.jsxs)(W, {
			title: `Ghost, small`,
			children: [(0, D.jsx)(T, {
				variant: `ghost`,
				size: `sm`,
				defaultSelected: !0,
				children: `Only mine`
			}), (0, D.jsx)(T, {
				variant: `ghost`,
				size: `sm`,
				children: `Unread`
			})]
		})]
	});
}
function J() {
	let [e, t] = (0, E.useState)(null);
	return (0, D.jsxs)(`div`, {
		ref: t,
		className: `flex flex-wrap items-center gap-2`,
		children: [
			(0, D.jsx)(x, {
				label: `Add item`,
				container: e,
				children: (0, D.jsx)(a, {
					name: `action.add`,
					"aria-hidden": !0
				})
			}),
			(0, D.jsx)(x, {
				label: `Settings`,
				variant: `outline`,
				container: e,
				children: (0, D.jsx)(a, {
					name: `nav.settings`,
					"aria-hidden": !0
				})
			}),
			(0, D.jsx)(x, {
				label: `Download report`,
				variant: `primary`,
				container: e,
				children: (0, D.jsx)(a, {
					name: `action.download`,
					"aria-hidden": !0
				})
			}),
			(0, D.jsx)(x, {
				label: `Delete item`,
				variant: `danger`,
				size: `sm`,
				container: e,
				children: (0, D.jsx)(a, {
					name: `action.delete`,
					"aria-hidden": !0
				})
			}),
			(0, D.jsx)(x, {
				label: `Saving`,
				isPending: !0,
				pendingLabel: `Saving`,
				variant: `outline`,
				container: e,
				children: (0, D.jsx)(a, {
					name: `action.save`,
					"aria-hidden": !0
				})
			}),
			(0, D.jsx)(x, {
				label: `Locked`,
				isDisabled: !0,
				container: e,
				children: (0, D.jsx)(a, {
					name: `status.locked`,
					"aria-hidden": !0
				})
			})
		]
	});
}
function Y() {
	let [e, t] = (0, E.useState)(!0);
	return e ? (0, D.jsxs)(`div`, {
		className: `flex max-w-md items-start gap-2 rounded-md border border-border bg-surface p-3`,
		children: [(0, D.jsx)(`p`, {
			className: `min-w-0 flex-1 text-body`,
			children: `Your export is ready. It stays here until you close it.`
		}), (0, D.jsx)(_, {
			label: `Dismiss export notice`,
			onPress: () => t(!1)
		})]
	}) : (0, D.jsx)(m, {
		variant: `outline`,
		size: `sm`,
		onPress: () => t(!0),
		children: `Show the notice again`
	});
}
function X() {
	let [e, t] = (0, E.useState)(null);
	return (0, D.jsxs)(`div`, {
		ref: t,
		className: `flex flex-col gap-4`,
		children: [
			(0, D.jsxs)(`div`, {
				className: `flex max-w-full flex-wrap items-center gap-2`,
				children: [(0, D.jsx)(`code`, {
					className: `max-w-full min-w-0 rounded-md border border-border bg-sunken px-2 py-1 font-mono text-caption break-all`,
					children: `npm run build`
				}), (0, D.jsx)(v, {
					text: `npm run build`,
					label: `Copy`,
					copiedLabel: `Copied`,
					failedLabel: `Copy failed. Select the text and press Ctrl+C.`,
					size: `sm`
				})]
			}),
			(0, D.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-2`,
				children: [(0, D.jsx)(`span`, {
					className: `text-caption text-muted`,
					children: `Icon only`
				}), (0, D.jsx)(v, {
					iconOnly: !0,
					variant: `ghost`,
					text: `sk_live_9f2c`,
					label: `Copy API key`,
					copiedLabel: `API key copied`,
					failedLabel: `Copy failed. Select the key and press Ctrl+C.`,
					container: e
				})]
			}),
			(0, D.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-2`,
				children: [(0, D.jsx)(`span`, {
					className: `text-caption text-muted`,
					children: `When the clipboard refuses`
				}), (0, D.jsx)(v, {
					text: () => Promise.reject(Error(`Blocked`)),
					label: `Copy link`,
					copiedLabel: `Link copied`,
					failedLabel: `Copy failed. Select the link and press Ctrl+C.`,
					size: `sm`
				})]
			})
		]
	});
}
function Z() {
	return (0, D.jsxs)(`div`, {
		className: `flex flex-col gap-4`,
		children: [
			(0, D.jsx)(W, {
				title: `Spaced`,
				children: (0, D.jsxs)(A, {
					label: `Export`,
					children: [
						(0, D.jsx)(m, {
							variant: `outline`,
							children: `CSV`
						}),
						(0, D.jsx)(m, {
							variant: `outline`,
							children: `PDF`
						}),
						(0, D.jsx)(m, {
							variant: `outline`,
							children: `JSON`
						})
					]
				})
			}),
			(0, D.jsx)(W, {
				title: `Attached toolbar`,
				children: (0, D.jsxs)(A, {
					label: `Formatting`,
					toolbar: !0,
					attached: !0,
					children: [
						(0, D.jsx)(T, {
							"aria-label": `Bold`,
							size: `sm`,
							children: (0, D.jsx)(a, {
								name: `format.bold`,
								"aria-hidden": !0
							})
						}),
						(0, D.jsx)(T, {
							"aria-label": `Italic`,
							size: `sm`,
							children: (0, D.jsx)(a, {
								name: `format.italic`,
								"aria-hidden": !0
							})
						}),
						(0, D.jsx)(T, {
							"aria-label": `Code`,
							size: `sm`,
							children: (0, D.jsx)(a, {
								name: `code.inline`,
								"aria-hidden": !0
							})
						})
					]
				})
			}),
			(0, D.jsx)(W, {
				title: `Vertical, attached`,
				children: (0, D.jsxs)(A, {
					label: `Zoom`,
					orientation: `vertical`,
					attached: !0,
					children: [(0, D.jsx)(m, {
						variant: `outline`,
						size: `sm`,
						children: `Zoom in`
					}), (0, D.jsx)(m, {
						variant: `outline`,
						size: `sm`,
						children: `Zoom out`
					})]
				})
			}),
			(0, D.jsxs)(`div`, {
				className: `flex flex-col gap-2`,
				children: [(0, D.jsx)(`p`, {
					className: U,
					children: `Form footer, stacks on a phone`
				}), (0, D.jsxs)(A, {
					label: `Form actions`,
					stackOnNarrow: !0,
					children: [(0, D.jsx)(m, { children: `Save` }), (0, D.jsx)(m, {
						variant: `outline`,
						children: `Cancel`
					})]
				})]
			})
		]
	});
}
function Q() {
	return (0, D.jsxs)(`div`, {
		className: `flex flex-col gap-3 text-body`,
		children: [(0, D.jsxs)(`p`, { children: [
			`Press `,
			(0, D.jsx)(S, { children: `Esc` }),
			` to close, `,
			(0, D.jsx)(S, {
				label: `Enter`,
				children: `↵`
			}),
			` to confirm.`
		] }), (0, D.jsxs)(`p`, {
			className: `flex flex-wrap items-center gap-1`,
			children: [
				(0, D.jsx)(S, {
					label: `Command`,
					children: `⌘`
				}),
				(0, D.jsx)(S, {
					label: `Shift`,
					children: `⇧`
				}),
				(0, D.jsx)(S, {
					label: `Up arrow`,
					children: `↑`
				}),
				(0, D.jsx)(S, { children: `PgDn` }),
				(0, D.jsx)(S, { children: `F12` })
			]
		})]
	});
}
var $ = [
	[`Open the command palette`, {
		keys: [[`Ctrl`, `K`], [`/`]],
		separator: `+`,
		orLabel: `or`
	}],
	[`Save`, { keys: [{
		key: `⌘`,
		label: `Command`
	}, `S`] }],
	[`Next tab`, {
		keys: [`Ctrl`, `Tab`],
		separator: `+`
	}],
	[`Go to issues`, {
		keys: [`G`, `I`],
		separator: `then`
	}]
];
function ee() {
	return (0, D.jsx)(`dl`, {
		className: `grid max-w-lg grid-cols-1 gap-x-4 gap-y-2 text-body sm:grid-cols-[1fr_auto]`,
		children: $.map(([e, t]) => (0, D.jsxs)(`div`, {
			className: `contents`,
			children: [(0, D.jsx)(`dt`, {
				className: `text-fg`,
				children: e
			}), (0, D.jsx)(`dd`, {
				className: `mb-2 sm:mb-0 sm:justify-self-end`,
				children: (0, D.jsx)(F, { ...t })
			})]
		}, e))
	});
}
var te = [
	`Home`,
	`Changelog`,
	`Blog`,
	`About`,
	`Contact`
];
function ne() {
	let e = f({ initialItems: te.map((e) => ({
		id: e,
		name: e
	})) }), [t, n] = (0, E.useState)(``), { dragAndDropHooks: r } = d({
		getItems: (t) => [...t].map((t) => ({ "text/plain": e.getItem(t)?.name ?? `` })),
		onReorder: (t) => {
			t.target.dropPosition === `before` ? e.moveBefore(t.target.key, t.keys) : e.moveAfter(t.target.key, t.keys);
		},
		renderDropIndicator: (e) => (0, D.jsx)(c, {
			target: e,
			className: `mx-2 h-0.5 rounded-full bg-accent forced-colors:bg-[Highlight]`
		})
	}), i = (t, r) => {
		let i = e.items[t], a = r === `previous` ? t - 1 : t + 1, o = e.items[a];
		i && o && (r === `previous` ? e.moveBefore(o.id, [i.id]) : e.moveAfter(o.id, [i.id]), n(`${i.name} moved to ${a + 1} of ${e.items.length}`));
	};
	return (0, D.jsxs)(`div`, {
		className: `flex max-w-sm flex-col gap-2`,
		children: [(0, D.jsx)(l, {
			"aria-label": `Menu order`,
			items: e.items,
			dependencies: [e.items],
			dragAndDropHooks: r,
			className: `flex flex-col gap-1`,
			children: (t) => {
				let n = e.items.findIndex((e) => e.id === t.id);
				return (0, D.jsxs)(u, {
					textValue: t.name,
					className: `flex min-w-0 items-center gap-2 rounded-md border border-border bg-surface px-2 py-1 text-body text-fg outline-offset-(--sk-focus-offset) data-dragging:opacity-50 data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus`,
					children: [
						(0, D.jsx)(y, { label: `Drag ${t.name}` }),
						(0, D.jsx)(`span`, {
							className: `min-w-0 flex-1 truncate`,
							children: t.name
						}),
						(0, D.jsx)(V, {
							orientation: `horizontal`,
							label: `Reorder ${t.name}`,
							previousLabel: `Move ${t.name} up`,
							nextLabel: `Move ${t.name} down`,
							isFirst: n === 0,
							isLast: n === e.items.length - 1,
							onMove: (e) => i(n, e)
						})
					]
				});
			}
		}), (0, D.jsx)(`output`, {
			"aria-live": `polite`,
			className: `sr-only`,
			children: t
		})]
	});
}
function re() {
	let [e, t] = (0, E.useState)([
		`Introduction`,
		`Installation`,
		`Configuration`,
		`Troubleshooting`
	]), [n, r] = (0, E.useState)(``), i = (n, i) => {
		let a = i === `previous` ? n - 1 : n + 1, o = [...e], [s] = o.splice(n, 1);
		s !== void 0 && (o.splice(a, 0, s), t(o), r(`${s} moved to ${a + 1} of ${o.length}`));
	};
	return (0, D.jsxs)(`div`, {
		className: `flex max-w-sm flex-col gap-2`,
		children: [(0, D.jsx)(`ol`, {
			className: `flex flex-col divide-y divide-border rounded-md border border-border bg-surface`,
			children: e.map((t, n) => (0, D.jsxs)(`li`, {
				className: `flex min-w-0 items-center gap-2 px-2 py-1`,
				children: [
					(0, D.jsx)(`span`, {
						className: `w-5 shrink-0 text-caption text-muted tabular-nums`,
						children: `${n + 1}.`
					}),
					(0, D.jsx)(`span`, {
						className: `min-w-0 flex-1 text-body wrap-break-word`,
						children: t
					}),
					(0, D.jsx)(V, {
						label: `Reorder ${t}`,
						previousLabel: `Move ${t} up`,
						nextLabel: `Move ${t} down`,
						isFirst: n === 0,
						isLast: n === e.length - 1,
						onMove: (e) => i(n, e)
					})
				]
			}, t))
		}), (0, D.jsx)(`output`, {
			"aria-live": `polite`,
			className: `text-caption text-muted`,
			children: n
		})]
	});
}
function ie() {
	let [e, t] = (0, E.useState)(``), [n, r] = (0, E.useState)(!1), [i, o] = (0, E.useState)(null), s = (0, E.useId)();
	return (0, D.jsxs)(`div`, {
		ref: o,
		className: `flex max-w-md flex-col gap-4`,
		children: [
			(0, D.jsxs)(`div`, {
				className: `flex flex-col gap-1`,
				children: [(0, D.jsx)(`label`, {
					htmlFor: s,
					className: `text-caption font-medium text-fg`,
					children: `Title`
				}), (0, D.jsx)(`input`, {
					id: s,
					value: e,
					onChange: (e) => {
						t(e.target.value), r(!1);
					},
					className: `h-control-md rounded-md border border-border-strong bg-input px-2 text-body text-fg`
				})]
			}),
			(0, D.jsxs)(`div`, {
				className: `flex flex-wrap items-start gap-3`,
				children: [(0, D.jsx)(M, {
					isGated: e.trim() === ``,
					reason: `Add a title to publish.`,
					onPress: () => r(!0),
					children: `Publish`
				}), (0, D.jsxs)(M, {
					isGated: !0,
					reason: `Only owners can delete this page.`,
					reasonDisplay: `tooltip`,
					variant: `danger`,
					container: i,
					children: [(0, D.jsx)(a, {
						name: `action.delete`,
						"aria-hidden": !0
					}), `Delete`]
				})]
			}),
			(0, D.jsx)(`output`, {
				"aria-live": `polite`,
				className: `text-caption text-ok`,
				children: n ? `Published “${e.trim()}”.` : null
			})
		]
	});
}
var ae = {
	title: `Actions`,
	description: `Everything a person presses to do something: buttons and their states, links that look like buttons, copy, close, grouped and toggled actions, keyboard hints and the handles that reorder lists. Built to WCAG 2.2 AA as a target: visible focus, 24px minimum targets, keyboard for every action and states said in words, not colour alone.`,
	pl: {
		title: `Akcje`,
		description: `Wszystko, co użytkownik naciska, aby coś zrobić: przyciski i ich stany, linki wyglądające jak przyciski, kopiowanie, zamykanie, akcje grupowane i przełączane, podpowiedzi klawiszy i uchwyty do zmiany kolejności list. Budowane z celem WCAG 2.2 AA: widoczny fokus, cele co najmniej 24 px, klawiatura dla każdej akcji i stany wypowiedziane słowami, a nie samym kolorem.`
	},
	demos: [
		{
			name: `Button`,
			components: [`Button`],
			description: `The default way to run an action. Use primary for the one main action of a view, outline or ghost for the rest, danger for removal and danger-solid only to confirm something that cannot be undone.`,
			usage: `<Button onPress={save} isPending={saving} pendingLabel="Saving">
  <Icon name="action.save" aria-hidden />
  Save changes
</Button>
<Button variant="danger">Remove</Button>`,
			accessibility: `A native button: Tab to reach it, Enter or Space to press. While pending it keeps focus, ignores presses, stops form submission and is read with its pending label. Disabled buttons leave the tab order; when a person needs to know why, use GatedAction. Long labels wrap rather than overflow, and every variant keeps a border so it stays visible in Windows high contrast.`,
			pl: {
				description: `Domyślny sposób uruchamiania akcji. Użyj primary dla jedynej głównej akcji widoku, outline albo ghost dla pozostałych, danger dla usuwania, a danger-solid tylko do potwierdzenia czegoś, czego nie da się cofnąć.`,
				accessibility: `Natywny przycisk: Tab, aby do niego dojść, Enter lub Spacja, aby go nacisnąć. W trakcie oczekiwania zachowuje fokus, ignoruje naciśnięcia, wstrzymuje wysłanie formularza i jest odczytywany z etykietą oczekiwania. Wyłączone przyciski wypadają z kolejności Tab; gdy użytkownik ma wiedzieć dlaczego, użyj GatedAction. Długie etykiety się zawijają zamiast się przepełniać, a każdy wariant zachowuje ramkę, więc pozostaje widoczny w trybie wysokiego kontrastu systemu Windows.`
			},
			render: () => (0, D.jsx)(K, {})
		},
		{
			name: `ToggleButton`,
			components: [`ToggleButton`],
			description: `A button that stays on or off, for view options such as wrapping lines or showing only your items. Use a Switch for settings that save.`,
			usage: `<ToggleButton isSelected={wrap} onChange={setWrap}>
  <Icon name="format.wrap" aria-hidden />
  Wrap lines
</ToggleButton>`,
			accessibility: `Exposes aria-pressed, so screen readers say "pressed" or "not pressed". Space or Enter toggles it. The on state changes fill and border width, never colour alone, and uses the system highlight in forced colours.`,
			pl: {
				description: `Przycisk, który zostaje włączony albo wyłączony, dla opcji widoku, takich jak zawijanie linii albo pokazywanie tylko twoich pozycji. Dla ustawień, które się zapisują, użyj Switch.`,
				accessibility: `Udostępnia aria-pressed, więc czytniki ekranu mówią „wciśnięty” albo „niewciśnięty”. Spacja lub Enter go przełącza. Stan włączony zmienia wypełnienie i grubość ramki, nigdy sam kolor, a w trybie wymuszonych kolorów używa wyróżnienia systemowego.`
			},
			render: () => (0, D.jsx)(q, {})
		},
		{
			name: `LinkButton`,
			components: [`LinkButton`],
			description: `Navigation that needs the weight of a button, such as "Read the guide" on an empty page. If it changes data rather than the page, use Button.`,
			usage: `<LinkButton href="/docs">Read the guide</LinkButton>
<LinkButton href="https://status.example.com" target="_blank" newTabLabel="opens in a new tab">
  Status page
</LinkButton>`,
			accessibility: `A real link: Enter follows it and the browser context menu works. A new-tab link shows an icon and appends newTabLabel for screen readers, and gets rel="noopener noreferrer".`,
			pl: {
				description: `Nawigacja, która potrzebuje wagi przycisku, na przykład „Read the guide” na pustej stronie. Jeśli zmienia dane, a nie stronę, użyj Button.`,
				accessibility: `Prawdziwy link: Enter go otwiera, a menu kontekstowe przeglądarki działa. Link otwierany w nowej karcie pokazuje ikonę i dopisuje newTabLabel dla czytników ekranu oraz dostaje rel="noopener noreferrer".`
			},
			render: () => (0, D.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-2`,
				children: [
					(0, D.jsx)(w, {
						href: `#actions`,
						children: `Read the guide`
					}),
					(0, D.jsxs)(w, {
						href: `#actions`,
						variant: `primary`,
						children: [`Get started`, (0, D.jsx)(a, {
							name: `arrow.right`,
							"aria-hidden": !0,
							className: `rtl:rotate-180`
						})]
					}),
					(0, D.jsx)(w, {
						href: `https://skribly.pl`,
						target: `_blank`,
						newTabLabel: `opens in a new tab`,
						variant: `ghost`,
						children: `Skribly website`
					}),
					(0, D.jsx)(w, {
						isDisabled: !0,
						variant: `outline`,
						children: `Not yet available`
					})
				]
			})
		},
		{
			name: `IconButton`,
			components: [`IconButton`],
			description: `A square button with only an icon, for toolbars and dense rows where the icon is well known. Prefer a labelled Button when there is room.`,
			usage: `<IconButton label="Add item" onPress={add}>
  <Icon name="action.add" aria-hidden />
</IconButton>`,
			accessibility: `label is the accessible name and also appears as a tooltip on hover and at once on keyboard focus, so sighted and voice control users know what to call it. Escape hides the tooltip. Each size is at least 24px square.`,
			pl: {
				description: `Kwadratowy przycisk tylko z ikoną, do pasków narzędzi i gęstych wierszy, gdzie ikona jest dobrze znana. Gdy jest miejsce, wybierz Button z etykietą.`,
				accessibility: `label jest nazwą dostępną i pojawia się też jako dymek podpowiedzi po najechaniu i od razu przy fokusie z klawiatury, więc osoby widzące i sterujące głosem wiedzą, jak go nazwać. Escape ukrywa dymek. Każdy rozmiar ma co najmniej 24 px w kwadracie.`
			},
			render: () => (0, D.jsx)(J, {})
		},
		{
			name: `CloseButton`,
			components: [`CloseButton`],
			description: `Closes or dismisses the thing it sits in: a notice, a panel or a dialog. Inside a React Aria Dialog, slot="close" closes it with no handler.`,
			usage: `<CloseButton label="Dismiss export notice" onPress={dismiss} />
<CloseButton slot="close" label="Close dialog" />`,
			accessibility: `Name it after what closes, such as "Close settings", so a list of buttons read out of context still makes sense. When it removes the element that had focus, move focus somewhere sensible, as the demo does with the button that brings the notice back.`,
			pl: {
				description: `Zamyka albo odrzuca to, w czym się znajduje: komunikat, panel albo okno dialogowe. Wewnątrz Dialog z React Aria slot="close" zamyka go bez obsługi zdarzenia.`,
				accessibility: `Nazwij go tym, co zamyka, na przykład „Zamknij ustawienia”, aby lista przycisków odczytana bez kontekstu nadal miała sens. Gdy usuwa element, który miał fokus, przenieś fokus w sensowne miejsce, tak jak robi to przykład z przyciskiem, który przywraca komunikat.`
			},
			render: () => (0, D.jsx)(Y, {})
		},
		{
			name: `CopyButton`,
			components: [`CopyButton`],
			description: `Copies a command, key or link to the clipboard and confirms it. Use it next to text people are likely to paste elsewhere.`,
			usage: `<CopyButton
  text="npm run build"
  label="Copy"
  copiedLabel="Copied"
  failedLabel="Copy failed. Select the text and press Ctrl+C."
/>`,
			accessibility: `Success and failure each have an icon and a word and are announced through a polite live region. The confirmation stays while the button is hovered or focused and goes back afterwards; a failure stays on screen, with what to do instead, until the next press. The icon-only form keeps a stable name.`,
			pl: {
				description: `Kopiuje polecenie, klucz albo link do schowka i to potwierdza. Użyj go obok tekstu, który ludzie prawdopodobnie wkleją gdzie indziej.`,
				accessibility: `Sukces i niepowodzenie mają każde ikonę i słowo i są ogłaszane przez region na żywo typu polite. Potwierdzenie zostaje, dopóki przycisk jest najechany albo ma fokus, a potem wraca do stanu wyjściowego; niepowodzenie zostaje na ekranie, razem z tym, co zrobić zamiast tego, do następnego naciśnięcia. Forma tylko z ikoną zachowuje stałą nazwę.`
			},
			render: () => (0, D.jsx)(X, {})
		},
		{
			name: `ButtonGroup`,
			components: [`ButtonGroup`],
			description: `Keeps related buttons together. Spaced for sets of separate actions, attached for a segmented look, toolbar for a strip of tools, and stackOnNarrow for form footers that should go full width on a phone.`,
			usage: `<ButtonGroup label="Formatting" toolbar attached>
  <ToggleButton aria-label="Bold"><Icon name="format.bold" aria-hidden /></ToggleButton>
  <ToggleButton aria-label="Italic"><Icon name="format.italic" aria-hidden /></ToggleButton>
</ButtonGroup>`,
			accessibility: `A plain group has role="group" and label as its name; every button keeps its own Tab stop. A toolbar is one Tab stop: Left and Right (Up and Down when vertical) move between buttons, mirrored in right-to-left text. Groups wrap at narrow widths instead of scrolling.`,
			pl: {
				description: `Trzyma powiązane przyciski razem. Spaced dla zestawów osobnych akcji, attached dla wyglądu segmentowego, toolbar dla paska narzędzi, a stackOnNarrow dla stopek formularzy, które na telefonie mają zająć całą szerokość.`,
				accessibility: `Zwykła grupa ma role="group" i label jako nazwę; każdy przycisk zachowuje własny przystanek Tab. Pasek narzędzi jest jednym przystankiem Tab: strzałka w lewo i w prawo (w górę i w dół w układzie pionowym) przechodzi między przyciskami, odbita w tekście od prawej do lewej. Grupy zawijają się przy wąskich szerokościach zamiast się przewijać.`
			},
			render: () => (0, D.jsx)(Z, {})
		},
		{
			name: `Kbd`,
			components: [`Kbd`],
			description: `Shows one key in running text or in a hint. Use KeyCombo for a combination.`,
			usage: `Press <Kbd>Esc</Kbd> to close.
<Kbd label="Command">⌘</Kbd>`,
			accessibility: `Renders a kbd element. A symbol key takes label, which screen readers say in place of the glyph, so "⌘" is read as "Command" rather than "place of interest sign".`,
			pl: {
				description: `Pokazuje jeden klawisz w tekście albo w podpowiedzi. Dla kombinacji użyj KeyCombo.`,
				accessibility: `Renderuje element kbd. Klawisz-symbol przyjmuje label, który czytniki ekranu mówią zamiast znaku, więc „⌘” jest odczytywany jako „Command”, a nie pod nazwą znaku z Unicode.`
			},
			render: () => (0, D.jsx)(Q, {})
		},
		{
			name: `KeyCombo`,
			components: [`KeyCombo`],
			description: `A keyboard shortcut: keys pressed together, a sequence, or several shortcuts that do the same thing. Use it in menus, tooltips and help pages.`,
			usage: `<KeyCombo keys={['Ctrl', 'K']} separator="+" />
<KeyCombo keys={[['Ctrl', 'K'], ['/']]} separator="+" orLabel="or" />`,
			accessibility: `A kbd element wraps one kbd per key, as HTML describes a combination. The separator is hidden from screen readers; the word between alternatives is read. Long combinations wrap, and the shortcut list in the demo stacks under 640px.`,
			pl: {
				description: `Skrót klawiszowy: klawisze naciskane razem, sekwencja albo kilka skrótów robiących to samo. Użyj go w menu, dymkach podpowiedzi i na stronach pomocy.`,
				accessibility: `Element kbd owija po jednym kbd na klawisz, tak jak HTML opisuje kombinację. Separator jest ukryty przed czytnikami ekranu; słowo między alternatywami jest odczytywane. Długie kombinacje się zawijają, a lista skrótów w przykładzie układa się w stos poniżej 640 px.`
			},
			render: () => (0, D.jsx)(ee, {})
		},
		{
			name: `DragHandle`,
			components: [`DragHandle`],
			description: `The grip that drags an item in a sortable React Aria GridList, Table or Tree. Always pair dragging with a second way to reorder, such as NudgeButtons, for people who cannot drag.`,
			usage: `<GridListItem textValue={page.name}>
  <DragHandle label={\`Drag \${page.name}\`} />
  {page.name}
</GridListItem>`,
			accessibility: `The handle fills the drag slot of the item, so React Aria gives it keyboard dragging (Enter to pick up, arrows to choose a place, Enter to drop, Escape to cancel) and reads the instructions and the drop position aloud. The target is 24px square even though the grip is smaller.`,
			pl: {
				description: `Uchwyt, który przeciąga pozycję w sortowalnym GridList, Table albo Tree z React Aria. Zawsze łącz przeciąganie z drugim sposobem zmiany kolejności, takim jak NudgeButtons, dla osób, które nie mogą przeciągać.`,
				accessibility: `Uchwyt wypełnia slot przeciągania pozycji, więc React Aria daje mu przeciąganie z klawiatury (Enter, aby podnieść, strzałki, aby wybrać miejsce, Enter, aby upuścić, Escape, aby anulować) i odczytuje na głos instrukcje oraz pozycję upuszczenia. Cel ma 24 px w kwadracie, choć sam uchwyt jest mniejszy.`
			},
			render: () => (0, D.jsx)(ne, {})
		},
		{
			name: `NudgeButtons`,
			components: [`NudgeButtons`],
			description: `One step up and one step down: the keyboard and single-pointer way to reorder a list, next to or in place of dragging (WCAG 2.5.7). Horizontal lists use left and right.`,
			usage: "<NudgeButtons\n  label={`Reorder ${item}`}\n  previousLabel={`Move ${item} up`}\n  nextLabel={`Move ${item} down`}\n  isFirst={index === 0}\n  isLast={index === items.length - 1}\n  onMove={(direction) => move(index, direction)}\n/>",
			accessibility: `Each button names the item. The ends of the list are disabled so the position is visible without trying. Focus follows the moved item, and moves to the partner button when the pressed one reaches an end. The list announces the new position through its own polite live region, as the demo does.`,
			pl: {
				description: `Jeden krok w górę i jeden w dół: sposób zmiany kolejności listy klawiaturą i pojedynczym wskaźnikiem, obok przeciągania albo zamiast niego (WCAG 2.5.7). Listy poziome używają lewej i prawej.`,
				accessibility: `Każdy przycisk nazywa pozycję. Końce listy są wyłączone, więc pozycję widać bez próbowania. Fokus podąża za przesuniętą pozycją i przechodzi na przycisk partnerski, gdy naciśnięty dojdzie do końca. Lista ogłasza nową pozycję przez własny region na żywo typu polite, tak jak robi to przykład.`
			},
			render: () => (0, D.jsx)(re, {})
		},
		{
			name: `GatedAction`,
			components: [`GatedAction`],
			description: `An action that is not available yet, with the reason and what unlocks it. Use it instead of a silently disabled button whenever the person can do something about it.`,
			usage: `<GatedAction isGated={!title} reason="Add a title to publish." onPress={publish}>
  Publish
</GatedAction>`,
			accessibility: `Stays in the tab order with aria-disabled, so keyboard and screen reader users reach it and hear the reason, linked with aria-describedby. Presses and form submission are blocked. The reason is printed under the button, or shown as a tooltip on hover and keyboard focus in tight spaces, and is never colour alone.`,
			pl: {
				description: `Akcja, która nie jest jeszcze dostępna, z powodem i tym, co ją odblokowuje. Użyj jej zamiast po cichu wyłączonego przycisku, gdy użytkownik może coś z tym zrobić.`,
				accessibility: `Zostaje w kolejności Tab z aria-disabled, więc użytkownicy klawiatury i czytników ekranu do niej docierają i słyszą powód, powiązany przez aria-describedby. Naciśnięcia i wysłanie formularza są zablokowane. Powód jest wypisany pod przyciskiem albo pokazany jako dymek podpowiedzi po najechaniu i przy fokusie z klawiatury w ciasnych miejscach i nigdy nie jest samym kolorem.`
			},
			render: () => (0, D.jsx)(ie, {})
		}
	]
};
export { H as t };
