import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { t as n } from "./bot.Bh-ZxMwB.js";
import { t as r } from "./folder-plus.xLSJFGKu.js";
import { t as i } from "./keyboard.gZdHxX2B.js";
import { t as a } from "./list-todo.CcPW_XkD.js";
import { t as o } from "./plus.BBfKsH18.js";
import { t as s } from "./rocket.YqUmKJxk.js";
import { t as c } from "./search.zK5MY05u.js";
import { t as l } from "./settings._pqzNwpp.js";
import { t as u } from "./sparkles.DwzFOMRA.js";
import { n as d } from "./react-dom.B9zIfLd2.js";
import { t as f } from "./Button.DRxd_7vr.js";
import { t as p } from "./IconButton.DlwxSF13.js";
import { S as m } from "./doc.D2PtmWN6.js";
import { t as h } from "./Badge.Cwl75Dkx.js";
import { n as g, t as _ } from "./jsx-runtime.yrTYNGQT.js";
import { t as v } from "./circle-check.CWwdJPsz.js";
import { t as y } from "./circle.DoiYvJDm.js";
import { t as b } from "./Checkbox.huXrm85g.js";
import { t as x } from "./LinkButton.B5fbKc2c.js";
import { t as S } from "./check.CUpC8LgP.js";
import { t as C } from "./octagon-exclamation-point.B9Zlzk60.js";
import { t as ee } from "./CloseButton.BcQwEaEQ.js";
import { t as w } from "./ProgressBar.BbTEYBA1.js";
import { t as T } from "./chevron-left.DgFZmnqj.js";
import { t as E } from "./chevron-right.CXba3y89.js";
import { n as D, v as O } from "./Dialog.BHaijp-q.js";
import { n as te, t as ne } from "./Modal.DfTZZZKl.js";
import { n as re } from "./useOverlayTriggerState.OsbwJUOw.js";
var k = t(d(), 1), A = (0, k.createContext)(null), j = (0, k.createContext)(null), M = _();
function N({ actionLabel: e, href: t, onAction: n, isPending: r = !1, pendingLabel: i, isDisabled: a = !1, id: o, titleId: s, variant: c }) {
	if (!e) return null;
	let l = `${o} ${s}`;
	return t === void 0 ? (0, M.jsx)(f, {
		id: o,
		"aria-labelledby": l,
		size: `sm`,
		variant: c,
		isPending: r,
		isDisabled: a,
		...i === void 0 ? {} : { pendingLabel: i },
		...n === void 0 ? {} : { onPress: n },
		className: `shrink-0`,
		children: e
	}) : (0, M.jsx)(x, {
		id: o,
		"aria-labelledby": l,
		href: t,
		size: `sm`,
		variant: c,
		isDisabled: a,
		className: `shrink-0`,
		children: e
	});
}
function P({ title: e, hint: t, isDone: n = !1, onDoneChange: r, note: i, className: a, isDisabled: o = !1, ...s }) {
	let c = (0, k.useContext)(A), l = (0, k.useId)(), u = (0, k.useId)(), d = !n && t !== void 0;
	return (0, M.jsxs)(`li`, {
		"data-done": n || void 0,
		className: g(`flex min-w-0 flex-wrap items-start gap-x-3 gap-y-1.5 px-4 py-3`, a),
		children: [r ? (0, M.jsx)(`div`, {
			className: `min-w-0 flex-1 basis-48`,
			children: (0, M.jsx)(b, {
				isSelected: n,
				onChange: r,
				isDisabled: o,
				...d ? { description: t } : {},
				children: (0, M.jsx)(`span`, {
					id: l,
					className: g(`[overflow-wrap:anywhere]`, n ? `text-muted line-through decoration-1` : `font-medium`),
					children: e
				})
			})
		}) : (0, M.jsxs)(M.Fragment, { children: [(0, M.jsx)(`span`, {
			"aria-hidden": !0,
			className: g(`mt-0.5 flex shrink-0 [&_svg]:size-4`, n ? `text-ok` : `text-muted`),
			children: n ? (0, M.jsx)(v, {}) : (0, M.jsx)(y, {})
		}), (0, M.jsxs)(`div`, {
			className: `min-w-0 flex-1 basis-40`,
			children: [(0, M.jsxs)(`p`, { children: [(0, M.jsx)(`span`, {
				id: l,
				className: g(`[overflow-wrap:anywhere]`, n ? `text-muted` : `font-medium`),
				children: e
			}), c ? (0, M.jsx)(`span`, {
				className: `sr-only`,
				children: `, ${n ? c.doneLabel : c.todoLabel}`
			}) : null] }), d ? (0, M.jsx)(`p`, {
				className: `text-caption text-muted [overflow-wrap:anywhere]`,
				children: t
			}) : null]
		})] }), n ? null : s.actionLabel ? (0, M.jsx)(N, {
			...s,
			isDisabled: o,
			id: u,
			titleId: l,
			variant: `outline`
		}) : i ? (0, M.jsx)(`span`, {
			className: `shrink-0 self-center text-caption text-muted`,
			children: i
		}) : null]
	});
}
function F({ title: e, description: t, children: n, progressLabel: r, doneLabel: i, todoLabel: a, emptyMessage: o, completeMessage: s, completeToneLabel: c, headingLevel: l = 2, className: u, ...d }) {
	let f = (0, k.useId)(), p = `h${l}`, _ = k.Children.toArray(n).filter((e) => (0, k.isValidElement)(e) && e.type === P), v = _.length, y = _.filter((e) => e.props.isDone).length, b = v > 0 && y === v, x = (0, k.useMemo)(() => ({
		doneLabel: i,
		todoLabel: a
	}), [i, a]);
	return (0, M.jsxs)(`section`, {
		...d,
		"aria-labelledby": f,
		className: g(`min-w-0 overflow-hidden rounded-lg border border-border bg-surface text-fg shadow-sm`, u),
		children: [
			(0, M.jsxs)(`div`, {
				className: `flex flex-wrap items-start gap-x-3 gap-y-1 border-b border-border px-4 py-3`,
				children: [(0, M.jsxs)(`div`, {
					className: `min-w-0 flex-1`,
					children: [(0, M.jsx)(p, {
						id: f,
						className: `text-title font-semibold [overflow-wrap:anywhere]`,
						children: e
					}), t ? (0, M.jsx)(`p`, {
						className: `text-caption text-muted [overflow-wrap:anywhere]`,
						children: t
					}) : null]
				}), v > 0 ? (0, M.jsx)(h, {
					tone: b ? `ok` : `neutral`,
					children: r(y, v)
				}) : null]
			}),
			v === 0 ? o ? (0, M.jsx)(`p`, {
				className: `px-4 py-6 text-center text-body text-muted`,
				children: o
			}) : null : (0, M.jsx)(A, {
				value: x,
				children: (0, M.jsx)(`ul`, {
					className: `divide-y divide-border`,
					children: n
				})
			}),
			(0, M.jsx)(`div`, {
				"aria-live": `polite`,
				children: b && s ? (0, M.jsx)(m, {
					tone: `ok`,
					title: s,
					...c === void 0 ? {} : { toneLabel: c },
					className: `m-3`
				}) : null
			})
		]
	});
}
function I({ title: e, description: t, icon: n, isDone: r = !1, error: i, errorToneLabel: a, className: o, ...s }) {
	let c = (0, k.useContext)(A), l = (0, k.useId)(), u = (0, k.useId)();
	return (0, M.jsxs)(`li`, {
		"data-done": r || void 0,
		className: g(`flex min-w-0 flex-wrap items-center gap-x-2.5 gap-y-2 rounded-md border bg-surface p-2.5`, i ? `border-danger` : `border-border`, o),
		children: [
			(0, M.jsx)(`span`, {
				"aria-hidden": !0,
				className: g(`grid size-6 shrink-0 place-items-center rounded-full border border-transparent [&_svg]:size-3.5`, r ? `bg-ok-soft text-ok` : `bg-hover text-muted`),
				children: r ? (0, M.jsx)(S, { strokeWidth: 3 }) : n
			}),
			(0, M.jsxs)(`div`, {
				className: `min-w-0 flex-1 basis-40`,
				children: [
					(0, M.jsxs)(`p`, {
						className: `font-semibold`,
						children: [(0, M.jsx)(`span`, {
							id: l,
							className: g(`[overflow-wrap:anywhere]`, r && `text-muted line-through decoration-1`),
							children: e
						}), c ? (0, M.jsx)(`span`, {
							className: `sr-only`,
							children: `, ${r ? c.doneLabel : c.todoLabel}`
						}) : null]
					}),
					t ? (0, M.jsx)(`p`, {
						className: `text-caption text-muted [overflow-wrap:anywhere]`,
						children: t
					}) : null,
					i ? (0, M.jsxs)(`p`, {
						className: `mt-1 flex items-start gap-1.5 text-caption text-danger`,
						children: [(0, M.jsx)(C, {
							"aria-hidden": !0,
							className: `mt-px size-3.5 shrink-0`
						}), (0, M.jsxs)(`span`, {
							className: `[overflow-wrap:anywhere]`,
							children: [a ? (0, M.jsx)(`span`, {
								className: `sr-only`,
								children: `${a}: `
							}) : null, i]
						})]
					}) : null
				]
			}),
			(0, M.jsx)(N, {
				...s,
				id: u,
				titleId: l,
				variant: r ? `ghost` : `primary`
			})
		]
	});
}
function L({ title: e, icon: t, children: n, progressLabel: r, doneLabel: i, todoLabel: a, actions: o, onDismiss: s, dismissLabel: c, completeMessage: l, completeToneLabel: u, completeActions: d, headingLevel: f = 2, container: p, className: _, ...v }) {
	let y = (0, k.useId)(), b = `h${f}`, x = k.Children.toArray(n).filter((e) => (0, k.isValidElement)(e) && e.type === I), S = x.length, C = x.filter((e) => e.props.isDone).length, T = S > 0 && C === S, E = (0, k.useMemo)(() => ({
		doneLabel: i,
		todoLabel: a
	}), [i, a]), D = r(C, S);
	return (0, M.jsxs)(`section`, {
		...v,
		"aria-labelledby": y,
		className: g(`min-w-0 rounded-lg border border-border bg-linear-to-br from-accent-soft via-surface to-surface p-4 text-fg shadow-sm`, _),
		children: [
			(0, M.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-x-3 gap-y-2`,
				children: [
					t ? (0, M.jsx)(`span`, {
						"aria-hidden": !0,
						className: `flex shrink-0 text-accent-text [&_svg]:size-4`,
						children: t
					}) : null,
					(0, M.jsx)(b, {
						id: y,
						className: `min-w-0 flex-1 text-title font-semibold [overflow-wrap:anywhere]`,
						children: e
					}),
					(0, M.jsx)(h, {
						tone: T ? `ok` : `accent`,
						"aria-hidden": !0,
						children: D
					}),
					o,
					s && c ? (0, M.jsx)(ee, {
						label: c,
						onPress: s,
						container: p ?? null
					}) : null
				]
			}),
			(0, M.jsx)(w, {
				label: e,
				hideLabel: !0,
				showValue: !1,
				size: `sm`,
				tone: T ? `ok` : `accent`,
				value: C,
				maxValue: Math.max(S, 1),
				valueLabel: D,
				className: `my-3`
			}),
			(0, M.jsx)(A, {
				value: E,
				children: (0, M.jsx)(`ol`, {
					className: `grid grid-cols-[repeat(auto-fill,minmax(min(100%,18rem),1fr))] gap-2`,
					children: n
				})
			}),
			(0, M.jsx)(`div`, {
				"aria-live": `polite`,
				children: T && l ? (0, M.jsx)(m, {
					tone: `ok`,
					title: l,
					...u === void 0 ? {} : { toneLabel: u },
					...d === void 0 ? {} : { actions: d },
					className: `mt-3`
				}) : null
			})
		]
	});
}
function R(e) {
	if (!e) return null;
	let t = e.getBoundingClientRect();
	return {
		x: t.left,
		y: t.top,
		width: t.width,
		height: t.height
	};
}
function ie(e) {
	let [t, n] = (0, k.useState)(() => ({
		target: e,
		box: R(e)
	}));
	return (0, k.useLayoutEffect)(() => {
		if (!e) return;
		let t = 0, r = () => {
			cancelAnimationFrame(t), t = requestAnimationFrame(() => n({
				target: e,
				box: R(e)
			}));
		};
		r(), window.addEventListener(`resize`, r), document.addEventListener(`scroll`, r, !0);
		let i = typeof ResizeObserver > `u` ? null : new ResizeObserver(r);
		return i?.observe(e), () => {
			cancelAnimationFrame(t), window.removeEventListener(`resize`, r), document.removeEventListener(`scroll`, r, !0), i?.disconnect();
		};
	}, [e]), t.target === e ? t.box : R(e);
}
function z({ target: e, padding: t = 8, showCursor: n = !1, className: r }) {
	let i = ie(e), a = (0, k.useMemo)(() => i ? {
		top: i.y - t,
		left: i.x - t,
		width: i.width + t * 2,
		height: i.height + t * 2
	} : {
		top: `50%`,
		left: `50%`,
		width: 0,
		height: 0
	}, [i, t]), o = (0, k.useMemo)(() => i ? { transform: `translate(${Math.round(i.x + Math.min(i.width / 2, 48))}px, ${Math.round(i.y + Math.min(i.height / 2, 22))}px)` } : void 0, [i]);
	return (0, M.jsxs)(`div`, {
		"aria-hidden": !0,
		"data-spotlight": ``,
		className: g(`pointer-events-none fixed inset-0 z-(--sk-z-tour) overflow-hidden`, r),
		children: [(0, M.jsx)(`div`, {
			style: a,
			className: g(`absolute rounded-lg shadow-[0_0_0_200vmax_var(--sk-scrim)] transition-[top,left,width,height] duration-(--sk-duration-slow) ease-out motion-reduce:transition-none`, i ? `border-2 border-focus forced-colors:border-[Highlight]` : `border-0`)
		}), n && o ? (0, M.jsx)(`svg`, {
			viewBox: `0 0 28 28`,
			style: o,
			className: `absolute top-0 left-0 size-7 drop-shadow-md transition-transform duration-[calc(var(--sk-duration-slow)*3)] ease-out motion-reduce:transition-none forced-colors:hidden`,
			children: (0, M.jsx)(`path`, {
				d: `M5 3.5 L5 22 L10 17.4 L13.4 25 L17 23.4 L13.7 16 L20.5 16 Z`,
				className: `fill-surface stroke-fg`,
				strokeWidth: `1.6`,
				strokeLinejoin: `round`
			})
		}) : null]
	});
}
function B({ title: e, children: t, headingLevel: n = 2 }) {
	let r = (0, k.useContext)(j);
	return r ? (0, M.jsxs)(M.Fragment, { children: [(0, M.jsx)(O, {
		slot: `title`,
		level: n,
		className: `text-title font-semibold [overflow-wrap:anywhere]`,
		children: e
	}), t === void 0 ? null : (0, M.jsx)(`div`, {
		id: r.bodyId,
		className: `text-body leading-relaxed text-muted [overflow-wrap:anywhere]`,
		children: t
	})] }) : null;
}
var V = `(max-width: 639.98px)`;
function ae() {
	let [e, t] = (0, k.useState)(() => typeof window < `u` && typeof window.matchMedia == `function` && window.matchMedia(V).matches);
	return (0, k.useEffect)(() => {
		if (typeof window.matchMedia != `function`) return;
		let e = window.matchMedia(V), n = () => t(e.matches);
		return n(), e.addEventListener(`change`, n), () => e.removeEventListener(`change`, n);
	}, []), e;
}
function oe() {
	return typeof window.matchMedia != `function` || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches || document.documentElement.classList.contains(`a11y-reduce-motion`);
}
function se(e) {
	return typeof CSS < `u` && typeof CSS.escape == `function` ? CSS.escape(e) : e.replaceAll(/["\\]/g, `\\$&`);
}
function ce(e) {
	return e === void 0 ? null : typeof e == `function` ? e() : document.querySelector(`[data-tour="${se(e)}"]`);
}
function le(e) {
	return !e.isConnected || e.closest(`[hidden]`) ? !1 : typeof e.checkVisibility != `function` || e.checkVisibility();
}
function ue(e, t) {
	let n = e.getBoundingClientRect();
	n.top >= 0 && n.bottom <= window.innerHeight * (t ? .4 : 1) || e.scrollIntoView?.({
		block: `center`,
		inline: `nearest`,
		behavior: oe() ? `auto` : `smooth`
	});
}
function de(e) {
	return e instanceof HTMLElement && (e.isContentEditable || [
		`INPUT`,
		`TEXTAREA`,
		`SELECT`
	].includes(e.tagName));
}
function fe(e, t, n) {
	let [r, i] = (0, k.useState)(t);
	return [e === void 0 ? r : e, (0, k.useCallback)((e) => {
		i(e), n?.(e);
	}, [n])];
}
function H({ children: e, isOpen: t, defaultOpen: n = !1, onOpenChange: r, step: i, defaultStep: a = 0, onStepChange: o, onFinish: s, onDismiss: c, stepLabel: l, nextLabel: u, backLabel: d, finishLabel: p, closeLabel: m, showCursor: h = !1, container: _, className: v }) {
	let y = (0, k.useMemo)(() => k.Children.toArray(e).filter((e) => (0, k.isValidElement)(e) && e.type === B), [e]), [b, x] = fe(t, n, r), [S, C] = fe(i, a, o), [w, O] = (0, k.useState)(() => new Set()), [A, N] = (0, k.useState)(null), P = (0, k.useRef)(1), F = (0, k.useRef)(null), I = ae(), L = (0, k.useRef)(null), R = (0, k.useId)(), ie = (0, k.useMemo)(() => ({ bodyId: R }), [R]), V = (0, k.useRef)({
		steps: y,
		setIndex: C,
		setOpen: x,
		onFinish: s,
		narrow: I
	});
	(0, k.useLayoutEffect)(() => {
		V.current = {
			steps: y,
			setIndex: C,
			setOpen: x,
			onFinish: s,
			narrow: I
		};
	});
	let [oe, se] = (0, k.useState)(b);
	b !== oe && (se(b), b || (N(null), O(new Set())));
	let H = (0, k.useCallback)((e) => {
		x(!1), N(null), e ? s?.() : c?.();
	}, [
		x,
		s,
		c
	]);
	(0, k.useEffect)(() => {
		b && (P.current = 1);
	}, [b]), (0, k.useEffect)(() => {
		if (!b) return;
		let e = V.current.steps[S];
		if (!e) return;
		e.props.onEnter?.();
		let t = requestAnimationFrame(() => {
			t = requestAnimationFrame(() => {
				let { target: t } = e.props, n = ce(t);
				if (t !== void 0 && (!n || !le(n))) {
					O((e) => new Set(e).add(S));
					let e = S + P.current;
					e >= 0 && e < V.current.steps.length ? V.current.setIndex(e) : P.current > 0 ? (V.current.setOpen(!1), N(null), V.current.onFinish?.()) : (P.current = 1, N((e) => e));
				} else n && ue(n, V.current.narrow), F.current = n, N({
					index: S,
					target: n
				});
			});
		});
		return () => cancelAnimationFrame(t);
	}, [b, S]);
	let U = y.map((e, t) => !w.has(t)), W = U.filter(Boolean).length, G = A ? U.slice(0, A.index + 1).filter(Boolean).length : 0, K = A ? !U.slice(A.index + 1).some(Boolean) : !1, pe = A ? U.slice(0, A.index).some(Boolean) : !1, q = A ? l(G, W) : ``, me = (0, k.useMemo)(() => ({ width: `${W ? G / W * 100 : 0}%` }), [G, W]), J = (0, k.useCallback)((e) => {
		if (!A) return;
		P.current = e;
		let t = A.index + e;
		for (; t >= 0 && t < y.length && w.has(t);) t += e;
		t < 0 || (t >= y.length ? H(!0) : C(t));
	}, [
		A,
		y.length,
		w,
		H,
		C
	]), Y = (0, k.useCallback)(() => K ? H(!0) : J(1), [
		K,
		H,
		J
	]), X = (0, k.useCallback)(() => J(-1), [J]), Z = (0, k.useCallback)(() => H(!1), [H]), he = (0, k.useCallback)((e) => {
		de(e.target) || (e.key === `ArrowRight` ? (e.preventDefault(), Y()) : e.key === `ArrowLeft` && (e.preventDefault(), X()));
	}, [Y, X]), ge = (0, k.useCallback)((e) => {
		e || Z();
	}, [Z]), Q = A ? y[A.index] : void 0, _e = b && A !== null, $ = !!A?.target && !I, { overlayProps: ve } = re({
		targetRef: F,
		overlayRef: L,
		placement: Q?.props.placement ?? `bottom`,
		offset: 16,
		containerPadding: 12,
		isOpen: _e && $
	});
	if (!_e || !Q || !A) return null;
	let ye = (0, M.jsxs)(M.Fragment, { children: [
		q,
		`. `,
		Q.props.title,
		typeof Q.props.children == `string` ? ` ${Q.props.children}` : null
	] });
	return (0, M.jsxs)(te, {
		isOpen: !0,
		onOpenChange: ge,
		isDismissable: !1,
		..._ ? { UNSTABLE_portalContainer: _ } : {},
		className: `fixed inset-0 z-(--sk-z-tour)`,
		children: [(0, M.jsx)(z, {
			target: A.target,
			showCursor: h && !I
		}), (0, M.jsx)(ne, {
			ref: L,
			...$ && ve.style ? { style: ve.style } : {},
			className: g(`rounded-xl border border-border bg-surface text-fg shadow-lg outline-none data-entering:animate-rise motion-reduce:animate-none`, `z-(--sk-z-tour) overflow-y-auto`, $ ? `w-[min(22rem,calc(100vw-1.5rem))]` : A.target ? `fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] max-h-[60dvh]` : `fixed top-1/2 left-1/2 max-h-[calc(100dvh-1.5rem)] w-[min(24rem,calc(100vw-1.5rem))] -translate-x-1/2 -translate-y-1/2`, v),
			children: (0, M.jsx)(D, {
				...Q.props.children === void 0 ? {} : { "aria-describedby": R },
				className: `outline-none`,
				children: (0, M.jsxs)(`div`, {
					role: `presentation`,
					onKeyDown: he,
					className: `flex flex-col gap-2 p-4`,
					children: [
						(0, M.jsxs)(`div`, {
							className: `-mt-1 -mr-1 flex items-center gap-2`,
							children: [(0, M.jsx)(`p`, {
								className: `flex-1 text-caption text-muted tabular-nums`,
								children: q
							}), (0, M.jsx)(ee, {
								label: m,
								onPress: Z,
								container: _ ?? null
							})]
						}),
						(0, M.jsx)(j, {
							value: ie,
							children: Q
						}),
						(0, M.jsx)(`div`, {
							"aria-hidden": !0,
							className: `my-1 h-1 overflow-hidden rounded-full border border-transparent bg-hover`,
							children: (0, M.jsx)(`div`, {
								className: `h-full rounded-full bg-accent transition-[width] duration-(--sk-duration-slow) ease-out motion-reduce:transition-none forced-colors:bg-[Highlight]`,
								style: me
							})
						}),
						(0, M.jsxs)(`div`, {
							className: `flex flex-wrap items-center justify-end gap-2`,
							children: [pe ? (0, M.jsxs)(f, {
								variant: `outline`,
								size: `sm`,
								onPress: X,
								children: [(0, M.jsx)(T, {
									"aria-hidden": !0,
									className: `rtl:rotate-180`
								}), d]
							}) : null, (0, M.jsxs)(f, {
								size: `sm`,
								onPress: Y,
								autoFocus: !0,
								children: [K ? p : u, K ? null : (0, M.jsx)(E, {
									"aria-hidden": !0,
									className: `rtl:rotate-180`
								})]
							})]
						}, A.index),
						(0, M.jsx)(`div`, {
							"aria-live": `polite`,
							"aria-atomic": `true`,
							className: `sr-only`,
							children: ye
						})
					]
				})
			})
		})]
	});
}
var U = e({ default: () => J });
function W({ children: e }) {
	let [t, n] = (0, k.useState)(null);
	return (0, M.jsx)(`div`, {
		ref: n,
		children: e(t)
	});
}
var G = {
	stepLabel: (e, t) => `Step ${e} of ${t}`,
	nextLabel: `Next`,
	backLabel: `Back`,
	finishLabel: `Done`,
	closeLabel: `Close the guide`
};
function K() {
	let e = (0, k.useId)(), [t, n] = (0, k.useState)(!1), [r, i] = (0, k.useState)(``), a = (t) => `${e}-${t}`;
	return (0, M.jsx)(W, { children: (e) => (0, M.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [
			(0, M.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-2 rounded-lg border border-border bg-bar p-2`,
				children: [
					(0, M.jsx)(`span`, {
						"data-tour": a(`search`),
						className: `inline-flex`,
						children: (0, M.jsx)(p, {
							label: `Search`,
							container: e,
							children: (0, M.jsx)(c, { "aria-hidden": !0 })
						})
					}),
					(0, M.jsx)(`span`, {
						"data-tour": a(`new`),
						className: `inline-flex`,
						children: (0, M.jsxs)(f, {
							size: `sm`,
							children: [(0, M.jsx)(o, { "aria-hidden": !0 }), `New page`]
						})
					}),
					(0, M.jsx)(`span`, {
						"data-tour": a(`settings`),
						className: `ms-auto inline-flex`,
						children: (0, M.jsx)(p, {
							label: `Settings`,
							container: e,
							children: (0, M.jsx)(l, { "aria-hidden": !0 })
						})
					})
				]
			}),
			(0, M.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-3`,
				children: [(0, M.jsx)(f, {
					variant: `outline`,
					onPress: () => {
						i(``), n(!0);
					},
					children: `Start the guide`
				}), (0, M.jsx)(`output`, {
					"aria-live": `polite`,
					className: `text-caption text-muted`,
					children: r
				})]
			}),
			(0, M.jsxs)(H, {
				...G,
				container: e,
				isOpen: t,
				onOpenChange: n,
				showCursor: !0,
				onFinish: () => i(`Guide finished.`),
				onDismiss: () => i(`Guide closed early.`),
				children: [
					(0, M.jsx)(B, {
						title: `A quick look around`,
						children: `Four stops, about a minute. Use the arrow keys or the buttons, and Escape to leave.`
					}),
					(0, M.jsx)(B, {
						target: a(`search`),
						title: `Search everything`,
						children: `Finds views, pages and actions from one box.`
					}),
					(0, M.jsx)(B, {
						target: a(`archive`),
						title: `Archive`,
						children: `This element is not on the page, so the step is skipped and not counted.`
					}),
					(0, M.jsx)(B, {
						target: a(`new`),
						title: `Start a page`,
						placement: `bottom start`,
						children: `Creates an empty page in the current project.`
					}),
					(0, M.jsx)(B, {
						target: a(`settings`),
						title: `Settings`,
						placement: `left`,
						children: `The guide is always here again, under Help.`
					})
				]
			})
		]
	}) });
}
function pe() {
	let [e, t] = (0, k.useState)(null), [n, r] = (0, k.useState)(!1);
	return (0, M.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, M.jsxs)(`div`, {
			ref: t,
			className: `flex flex-wrap items-center gap-3 rounded-lg border border-border bg-surface p-3`,
			children: [(0, M.jsx)(`p`, {
				className: `min-w-0 flex-1`,
				children: `Export now saves a PDF as well.`
			}), (0, M.jsx)(f, {
				size: `sm`,
				variant: `outline`,
				"aria-pressed": n,
				onPress: () => r(!n),
				children: n ? `Stop pointing` : `Point at this`
			})]
		}), n ? (0, M.jsx)(z, { target: e }) : null]
	});
}
function q() {
	let [e, t] = (0, k.useState)(new Set([`project`])), [o, c] = (0, k.useState)(!1), [l, d] = (0, k.useState)(!1), [p, m] = (0, k.useState)(!1), h = (e) => t((t) => new Set(t).add(e)), g = () => {
		c(!0), d(!1), setTimeout(() => {
			c(!1), l ? h(`agents`) : d(!0);
		}, 900);
	};
	return p ? (0, M.jsx)(f, {
		variant: `outline`,
		onPress: () => m(!1),
		children: `Show first steps again`
	}) : (0, M.jsx)(W, { children: (t) => (0, M.jsxs)(L, {
		title: `First steps`,
		icon: (0, M.jsx)(s, {}),
		progressLabel: (e, t) => `${e} of ${t} done`,
		doneLabel: `done`,
		todoLabel: `to do`,
		headingLevel: 3,
		container: t,
		actions: (0, M.jsx)(f, {
			size: `sm`,
			variant: `ghost`,
			children: `Guide`
		}),
		onDismiss: () => m(!0),
		dismissLabel: `Hide first steps`,
		completeMessage: `All set. You can hide this card.`,
		completeToneLabel: `Success`,
		completeActions: (0, M.jsx)(f, {
			size: `sm`,
			variant: `outline`,
			onPress: () => m(!0),
			children: `Hide`
		}),
		children: [
			(0, M.jsx)(I, {
				title: `Add a project`,
				description: `A folder with a repository. The base branch and the commit style are found for you.`,
				icon: (0, M.jsx)(r, {}),
				isDone: e.has(`project`),
				actionLabel: e.has(`project`) ? `Add another` : `Add project`,
				onAction: () => h(`project`)
			}),
			(0, M.jsx)(I, {
				title: `Connect a task tracker`,
				description: `Your tasks in one list.`,
				icon: (0, M.jsx)(a, {}),
				isDone: e.has(`tracker`),
				actionLabel: `Connect`,
				onAction: () => h(`tracker`)
			}),
			(0, M.jsx)(I, {
				title: `Find agents`,
				description: `Looks for installed command line agents. The first try fails on purpose.`,
				icon: (0, M.jsx)(n, {}),
				isDone: e.has(`agents`),
				actionLabel: l ? `Try again` : `Find`,
				isPending: o,
				pendingLabel: `Searching`,
				onAction: g,
				...l && !o ? {
					error: `No agents found on this computer.`,
					errorToneLabel: `Error`
				} : {}
			}),
			(0, M.jsx)(I, {
				title: `Install skills`,
				description: `Ready instructions for agents, matched to the project.`,
				icon: (0, M.jsx)(u, {}),
				isDone: e.has(`skills`),
				actionLabel: `Install`,
				onAction: () => h(`skills`)
			}),
			(0, M.jsx)(I, {
				title: `Try the keyboard`,
				description: `Press ? anywhere to see every shortcut. This one has a long title to show how text wraps in a narrow column.`,
				icon: (0, M.jsx)(i, {}),
				isDone: e.has(`keys`),
				actionLabel: `Show`,
				onAction: () => h(`keys`)
			})
		]
	}) });
}
function me() {
	let [e, t] = (0, k.useState)(new Set([`tests`])), n = (e) => (n) => t((t) => {
		let r = new Set(t);
		return n ? r.add(e) : r.delete(e), r;
	}), r = {
		progressLabel: (e, t) => `${e} of ${t} done`,
		doneLabel: `done`,
		todoLabel: `to do`,
		headingLevel: 3
	};
	return (0, M.jsxs)(`div`, {
		className: `grid gap-4 md:grid-cols-2`,
		children: [
			(0, M.jsxs)(F, {
				title: `Ready to go live`,
				description: `What the site needs before visitors see it.`,
				...r,
				children: [
					(0, M.jsx)(P, {
						title: `Site address`,
						isDone: !0
					}),
					(0, M.jsx)(P, {
						title: `Logo`,
						hint: `Shown in the header and in shared links.`,
						actionLabel: `Fix`,
						href: `#logo`
					}),
					(0, M.jsx)(P, {
						title: `Contact details`,
						hint: `An email address or a phone number.`,
						actionLabel: `Fix`,
						href: `#contact`
					}),
					(0, M.jsx)(P, {
						title: `Storage provider`,
						hint: `Needed before uploads can start.`,
						note: `Ask your administrator`
					})
				]
			}),
			(0, M.jsxs)(F, {
				title: `Before the release`,
				...r,
				completeMessage: `Everything is checked. Ready to publish.`,
				completeToneLabel: `Success`,
				children: [
					(0, M.jsx)(P, {
						title: `Tests pass`,
						isDone: e.has(`tests`),
						onDoneChange: n(`tests`)
					}),
					(0, M.jsx)(P, {
						title: `Changelog updated`,
						hint: `List what changed for readers.`,
						isDone: e.has(`log`),
						onDoneChange: n(`log`)
					}),
					(0, M.jsx)(P, {
						title: `Version tagged`,
						isDone: e.has(`tag`),
						onDoneChange: n(`tag`)
					})
				]
			}),
			(0, M.jsx)(F, {
				title: `Open issues`,
				...r,
				emptyMessage: `Nothing to check yet.`
			})
		]
	});
}
var J = {
	title: `Onboarding`,
	description: `Help for the first minutes: a guided tour that points at the interface, a first-steps card driven by real data, and checklists with the way to fix each item. Progress is always said in words as well as shown.`,
	pl: {
		title: `Onboarding`,
		description: `Pomoc w pierwszych minutach: przewodnik, który wskazuje elementy interfejsu, karta pierwszych kroków oparta na prawdziwych danych oraz listy kontrolne z drogą do naprawy każdej pozycji. Postęp jest zawsze podany słowami, a nie tylko pokazany.`
	},
	demos: [
		{
			name: `Tour`,
			components: [`Tour`, `TourStep`],
			description: `A guided walk that dims the page, rings one element per step and explains it in a bubble beside it. Use it once after sign-up or from a Help menu; steps whose element is missing are skipped and not counted.`,
			usage: `<Tour isOpen={open} onOpenChange={setOpen}
  stepLabel={(n, total) => \`Step \${n} of \${total}\`}
  nextLabel="Next" backLabel="Back" finishLabel="Done" closeLabel="Close the guide">
  <TourStep title="A quick look around">Four stops, about a minute.</TourStep>
  <TourStep target="search" title="Search everything">Finds views and actions.</TourStep>
</Tour>
<IconButton data-tour="search" label="Search">…</IconButton>`,
			accessibility: `The bubble is a modal dialog named by the step title and described by its text: the page behind is inert for screen readers and the pointer, and Tab stays in the bubble. Focus moves to Next on every step. Arrow keys step, Escape closes and focus goes back to what opened it. Each step is announced in a polite live region. On screens under 640px the bubble docks at the bottom; motion stops under reduced motion.`,
			pl: {
				description: `Przewodnik, który przyciemnia stronę, obwodzi jeden element na każdym kroku i objaśnia go w dymku obok. Użyj go raz po rejestracji albo z menu pomocy; kroki, których elementu brakuje, są pomijane i nie są liczone.`,
				accessibility: `Dymek jest oknem dialogowym nazwanym tytułem kroku i opisanym jego tekstem: strona za nim jest nieaktywna dla czytników ekranu i wskaźnika, a Tab zostaje w dymku. Fokus przechodzi na przycisk Dalej na każdym kroku. Klawisze strzałek zmieniają krok, Escape zamyka przewodnik, a fokus wraca na element, który go otworzył. Każdy krok jest ogłaszany w regionie na żywo typu polite. Na ekranach węższych niż 640 px dymek przykleja się do dołu, a przy ograniczonym ruchu animacje zatrzymują się.`
			},
			render: () => (0, M.jsx)(K, {})
		},
		{
			name: `TourSpotlight`,
			components: [`TourSpotlight`],
			description: `The dim and the ring a Tour draws, on its own, to point at one element, such as a new feature. It never blocks the pointer, so the page stays usable.`,
			usage: `<TourSpotlight target={element} showCursor />`,
			accessibility: `Decoration only: hidden from screen readers, so say in words what it points at. The ring is a real border, which stays in forced-colors mode where the dim shadow is dropped. It moves without animation under reduced motion.`,
			pl: {
				description: `Samo przyciemnienie i obwódka, które rysuje Tour, użyte osobno, aby wskazać jeden element, na przykład nową funkcję. Nigdy nie blokuje wskaźnika, więc strona pozostaje użyteczna.`,
				accessibility: `Tylko dekoracja: jest ukryta przed czytnikami ekranu, więc napisz słowami, co wskazuje. Obwódka jest prawdziwą ramką, która zostaje w trybie wymuszonych kolorów, gdzie cień przyciemnienia jest pomijany. Przy ograniczonym ruchu przesuwa się bez animacji.`
			},
			render: () => (0, M.jsx)(pe, {})
		},
		{
			name: `OnboardingSteps`,
			components: [`OnboardingSteps`, `OnboardingStep`],
			description: `A first-run card with what to set up, how far along the reader is and a button per step. Feed isDone from real data, so a step is done when the thing exists, not when it was ticked.`,
			usage: `<OnboardingSteps title="First steps" doneLabel="done" todoLabel="to do"
  progressLabel={(done, total) => \`\${done} of \${total} done\`}
  completeMessage="All set">
  <OnboardingStep title="Add a project" isDone={projects.length > 0} actionLabel="Add project" onAction={add} />
</OnboardingSteps>`,
			accessibility: `A region named by its title with a progress bar whose value is read in words. Each row says "done" or "to do" after its title, and a done row also shows a check and a strike-through. Every action is named with its row, such as "Connect, Connect a task tracker". Errors carry an icon and a word; the complete message is announced politely.`,
			pl: {
				description: `Karta pierwszego uruchomienia z tym, co trzeba skonfigurować, postępem czytelnika i przyciskiem przy każdym kroku. Przekaż isDone z prawdziwych danych, aby krok był zrobiony, gdy rzecz istnieje, a nie gdy ktoś go odhaczył.`,
				accessibility: `Region nazwany swoim tytułem, z paskiem postępu, którego wartość jest odczytywana słowami. Każdy wiersz mówi „gotowe” albo „do zrobienia” po tytule, a gotowy wiersz pokazuje też znacznik i przekreślenie. Każda akcja ma nazwę razem z wierszem, na przykład „Connect, Connect a task tracker”. Błędy mają ikonę i słowo, a komunikat o ukończeniu jest ogłaszany w trybie polite.`
			},
			render: () => (0, M.jsx)(q, {})
		},
		{
			name: `Checklist`,
			components: [`Checklist`, `ChecklistItem`],
			description: `A list of what has to happen before something is ready, with a link to fix each item. Items can show state from data, or be checkboxes the reader ticks for a manual list.`,
			usage: "<Checklist title=\"Ready to go live\" doneLabel=\"done\" todoLabel=\"to do\"\n  progressLabel={(done, total) => `${done} of ${total} done`}>\n  <ChecklistItem title=\"Logo\" hint=\"Shown in the header.\" actionLabel=\"Fix\" href=\"/settings/logo\" />\n</Checklist>",
			accessibility: `A region named by its title, with the count in words. Data rows read "done" or "to do" after the title and show a check or an empty circle; tickable rows are real checkboxes with the hint as description. "Fix" links are named with their item. Hints and links disappear once an item is done.`,
			pl: {
				description: `Lista tego, co musi się stać, zanim coś będzie gotowe, z linkiem do naprawy każdej pozycji. Pozycje mogą pokazywać stan z danych albo być polami wyboru, które czytelnik zaznacza na liście ręcznej.`,
				accessibility: `Region nazwany swoim tytułem, z liczbą podaną słowami. Wiersze z danych mówią „gotowe” albo „do zrobienia” po tytule i pokazują znacznik albo puste kółko; wiersze do zaznaczania są prawdziwymi polami wyboru z podpowiedzią jako opisem. Linki „Fix” mają nazwę razem z pozycją. Podpowiedzi i linki znikają, gdy pozycja jest gotowa.`
			},
			render: () => (0, M.jsx)(me, {})
		}
	]
};
export { U as t };
