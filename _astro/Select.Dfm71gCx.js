import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $t as t, I as n, L as r, R as i, Sn as a, Yt as o, Z as s, cn as c, ct as l, et as u, fn as d, gn as f, gt as p, j as m, ln as h, lt as g, mn as _, on as v, pn as y, sn as b, wt as x, yn as S, yt as C, z as w } from "./doc.C_PtMNUB.js";
import { n as T } from "./react-dom.B9zIfLd2.js";
import { i as E, n as D, r as O, t as k } from "./ListBox.Bq8IE31A.js";
import { d as A, i as j, l as M, u as N } from "./Dialog.1Jdfd_U0.js";
import { r as ee, t as P } from "./useFormReset.Cf-RVIHo.js";
import { c as F, i as te, n as I, t as L } from "./useFormValidation.DOqf-YmE.js";
import { n as ne } from "./SearchField.D0jMEgX3.js";
import { n as R } from "./Text.3KJW7jIs.js";
import { a as re, i as ie } from "./useLoadMoreSentinel.BhNRPrj4.js";
import { f as ae } from "./useCollection.Cn_I2nJQ.js";
import { n as oe } from "./VisuallyHidden.BNHsLrt2.js";
import { n as se } from "./CollectionBuilder.BW1Ria3_.js";
import { t as ce } from "./useListState.B_9ND7CB.js";
import { t as le } from "./useOverlayTriggerState.ecOZOIeH.js";
import { t as ue } from "./useControlledState.DijOhE0s.js";
import { n as z } from "./useLocalizedStringFormatter.whw0Qxu0.js";
import { d as B, f as V, o as H, s as de, t as fe, u as pe } from "./styles.Dduhw011.js";
var U = e(T(), 1);
function me(e = {}) {
	let { locale: t } = C();
	return (0, U.useMemo)(() => new Intl.ListFormat(t, e), [t, e]);
}
var W = new WeakMap();
function he(e, t, n) {
	let { keyboardDelegate: r, isDisabled: i, isRequired: s, name: c, form: u, validationBehavior: d = `aria` } = e, m = ie({
		usage: `search`,
		sensitivity: `base`
	}), h = (0, U.useMemo)(() => r || new re(t.collection, t.disabledKeys, n, m), [
		r,
		t.collection,
		t.disabledKeys,
		m,
		n
	]), { menuTriggerProps: g, menuProps: _ } = M({
		isDisabled: i,
		type: `listbox`
	}, t, n), { keyboardProps: v } = p({
		shortcuts: {
			ArrowLeft: () => {
				if (t.selectionManager.selectionMode === `multiple`) return !1;
				let e = t.selectedKey == null ? h.getFirstKey?.() : h.getKeyAbove?.(t.selectedKey);
				e != null && t.setSelectedKey(e);
			},
			ArrowRight: () => {
				if (t.selectionManager.selectionMode === `multiple`) return !1;
				let e = t.selectedKey == null ? h.getFirstKey?.() : h.getKeyBelow?.(t.selectedKey);
				e != null && t.setSelectedKey(e);
			}
		},
		allowRepeats: !0,
		onKeyDown: e.onKeyDown,
		onKeyUp: e.onKeyUp
	}), { typeSelectProps: y } = ae({
		keyboardDelegate: h,
		selectionManager: t.selectionManager,
		onTypeSelect(e) {
			t.setSelectedKey(e);
		}
	}), { isInvalid: b, validationErrors: C, validationDetails: w } = t.displayValidation, { labelProps: T, fieldProps: E, descriptionProps: D, errorMessageProps: O } = I({
		...e,
		labelElementType: `span`,
		isInvalid: b,
		errorMessage: e.errorMessage || C
	});
	t.selectionManager.selectionMode === `multiple` && (y = {});
	let k = l(e, { labelable: !0 }), A = f(y, g, E), j = S();
	return W.set(t, {
		isDisabled: i,
		isRequired: s,
		name: c,
		form: u,
		validationBehavior: d
	}), {
		labelProps: {
			...T,
			onClick: () => {
				e.isDisabled || (n.current?.focus(), x(`keyboard`));
			}
		},
		triggerProps: f(k, {
			...A,
			isDisabled: i,
			onKeyDown: a(A.onKeyDown, v.onKeyDown),
			onKeyUp: v.onKeyUp,
			"aria-labelledby": [
				j,
				A[`aria-labelledby`],
				A[`aria-label`] && !A[`aria-labelledby`] ? A.id : null
			].filter(Boolean).join(` `),
			onFocus(n) {
				t.isFocused || (e.onFocus && e.onFocus(n), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0));
			},
			onBlur(n) {
				t.isOpen || (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
			}
		}),
		valueProps: { id: j },
		menuProps: {
			..._,
			onAction: void 0,
			autoFocus: t.focusStrategy || !0,
			shouldSelectOnPressUp: !0,
			shouldFocusOnHover: !0,
			disallowEmptySelection: !0,
			linkBehavior: `selection`,
			onBlur: (n) => {
				o(n.currentTarget, n.relatedTarget) || (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
			},
			"aria-labelledby": [E[`aria-labelledby`], A[`aria-label`] && !E[`aria-labelledby`] ? A.id : null].filter(Boolean).join(` `)
		},
		descriptionProps: D,
		errorMessageProps: O,
		isInvalid: b,
		validationErrors: C,
		validationDetails: w,
		hiddenSelectProps: {
			isDisabled: i,
			name: c,
			label: e.label,
			state: t,
			triggerRef: n,
			form: u
		}
	};
}
function ge(e, n, r) {
	let i = W.get(n) || {}, { autoComplete: a, name: o = i.name, form: s = i.form, isDisabled: c = i.isDisabled } = e, { validationBehavior: l, isRequired: u } = i, { visuallyHiddenProps: d } = oe({ style: {
		position: `fixed`,
		top: 0,
		left: 0
	} });
	P(e.selectRef, n.defaultValue, n.setValue), L({
		validationBehavior: l,
		focus: () => r.current?.focus()
	}, n, e.selectRef);
	let f = n.setValue, p = (0, U.useCallback)((e) => {
		let n = t(e);
		n.multiple ? f(Array.from(n.selectedOptions, (e) => e.value)) : f(e.currentTarget.value);
	}, [f]);
	return {
		containerProps: {
			...d,
			"aria-hidden": !0,
			"data-react-aria-prevent-focus": !0,
			"data-a11y-ignore": `aria-hidden-focus`
		},
		inputProps: { style: { display: `none` } },
		selectProps: {
			tabIndex: -1,
			autoComplete: a,
			disabled: c,
			multiple: n.selectionManager.selectionMode === `multiple`,
			required: l === `native` && u,
			name: o,
			form: s,
			value: n.value ?? ``,
			onChange: p,
			onInput: p
		}
	};
}
function _e(e) {
	let { state: t, triggerRef: n, label: r, name: i, form: a, isDisabled: o } = e, s = (0, U.useRef)(null), c = (0, U.useRef)(null), { containerProps: l, selectProps: u } = ge({
		...e,
		selectRef: t.collection.size <= 300 ? s : c
	}, t, n), d = Array.isArray(t.value) ? t.value : [t.value];
	if (t.collection.size <= 300) return U.createElement(`div`, {
		...l,
		"data-testid": `hidden-select-container`
	}, U.createElement(`label`, null, r, U.createElement(`select`, {
		...u,
		ref: s
	}, U.createElement(`option`, {
		value: ``,
		label: `\xA0`
	}, `\xA0`), [...t.collection.getKeys()].map((e) => {
		let n = t.collection.getItem(e);
		if (n && n.type === `item`) return U.createElement(`option`, {
			key: n.key,
			value: n.key
		}, n.textValue);
	}), t.collection.size === 0 && i && d.map((e, t) => U.createElement(`option`, {
		key: t,
		value: e ?? ``
	})))));
	if (i) {
		let { validationBehavior: e } = W.get(t) || {};
		d.length === 0 && (d = [null]);
		let n = d.map((t, n) => {
			let r = {
				type: `hidden`,
				autoComplete: u.autoComplete,
				name: i,
				form: a,
				disabled: o,
				value: t ?? ``
			};
			return e === `native` ? U.createElement(`input`, {
				key: n,
				...r,
				ref: n === 0 ? c : null,
				style: { display: `none` },
				type: `text`,
				required: n === 0 && u.required,
				onChange: () => {}
			}) : U.createElement(`input`, {
				key: n,
				...r,
				ref: n === 0 ? c : null
			});
		});
		return U.createElement(U.Fragment, null, n);
	}
	return null;
}
function ve(e) {
	let { selectionMode: t = `single`, shouldCloseOnSelect: n = t === `single` } = e, r = le(e), [i, a] = (0, U.useState)(null), o = (0, U.useMemo)(() => e.defaultValue === void 0 ? t === `single` ? e.defaultSelectedKey ?? null : [] : e.defaultValue, [
		e.defaultValue,
		e.defaultSelectedKey,
		t
	]), s = (0, U.useMemo)(() => e.value === void 0 ? t === `single` ? e.selectedKey : void 0 : e.value, [
		e.value,
		e.selectedKey,
		t
	]), [c, l] = ue(s, o, e.onChange), u = t === `single` && Array.isArray(c) ? c[0] : c, d = (n) => {
		if (t === `single`) {
			let t = Array.isArray(n) ? n[0] ?? null : n;
			l(t), t !== u && e.onSelectionChange?.(t);
		} else {
			let e = [];
			Array.isArray(n) ? e = n : n != null && (e = [n]), l(e);
		}
	}, f = ce({
		...e,
		selectionMode: t,
		disallowEmptySelection: t === `single`,
		allowDuplicateSelectionEvents: !0,
		selectedKeys: (0, U.useMemo)(() => ye(u), [u]),
		onSelectionChange: (e) => {
			if (e !== `all`) {
				if (t === `single`) {
					let t = e.values().next().value ?? null;
					d(t);
				} else d([...e]);
				n && r.close(), h.commitValidation();
			}
		}
	}), p = f.selectionManager.firstSelectedKey, m = (0, U.useMemo)(() => [...f.selectionManager.selectedKeys].map((e) => f.collection.getItem(e)).filter((e) => e != null), [f.selectionManager.selectedKeys, f.collection]), h = F({
		...e,
		value: Array.isArray(u) && u.length === 0 ? null : u
	}), [g, _] = (0, U.useState)(!1), [v] = (0, U.useState)(u);
	return {
		...h,
		...f,
		...r,
		value: u,
		defaultValue: o ?? v,
		setValue: d,
		selectedKey: p,
		setSelectedKey: d,
		selectedItem: m[0] ?? null,
		selectedItems: m,
		defaultSelectedKey: e.defaultSelectedKey ?? (e.selectionMode === `single` ? v : null),
		focusStrategy: i,
		open(t = null) {
			(f.collection.size !== 0 || e.allowsEmptyCollection) && (a(t), r.open());
		},
		toggle(t = null) {
			(f.collection.size !== 0 || e.allowsEmptyCollection) && (a(t), r.toggle());
		},
		isFocused: g,
		setFocused: _
	};
}
function ye(e) {
	if (e !== void 0) return e === null ? [] : Array.isArray(e) ? e : [e];
}
function be(e) {
	return e && e.__esModule ? e.default : e;
}
var G = (0, U.createContext)(null), K = (0, U.createContext)(null), q = g(function(e, t) {
	[e, t] = b(e, t, G);
	let { children: n, isDisabled: r = !1, isInvalid: i = !1, isRequired: a = !1 } = e, o = (0, U.useMemo)(() => typeof n == `function` ? n({
		isOpen: !1,
		isDisabled: r,
		isInvalid: i,
		isRequired: a,
		isFocused: !1,
		isFocusVisible: !1,
		defaultChildren: null
	}) : n, [
		n,
		r,
		i,
		a
	]);
	return U.createElement(se, { content: o }, (n) => U.createElement(J, {
		props: e,
		collection: n,
		selectRef: t
	}));
}), xe = [
	s,
	i,
	R
];
function J({ props: e, selectRef: t, collection: n }) {
	let { validationBehavior: r } = _(te) || {}, a = e.validationBehavior ?? r ?? `native`, o = ve({
		...e,
		collection: n,
		children: void 0,
		validationBehavior: a
	}), { isFocusVisible: p, focusProps: m } = u({ within: !0 }), g = (0, U.useRef)(null), [b, x] = h(!e[`aria-label`] && !e[`aria-labelledby`]), { labelProps: S, triggerProps: C, valueProps: w, menuProps: T, descriptionProps: E, errorMessageProps: k, hiddenSelectProps: M, ...N } = he({
		...y(e),
		label: x,
		validationBehavior: a
	}, o, g), P = (0, U.useMemo)(() => ({
		isOpen: o.isOpen,
		isFocused: o.isFocused,
		isFocusVisible: p,
		isDisabled: e.isDisabled || !1,
		isInvalid: N.isInvalid || !1,
		isRequired: e.isRequired || !1
	}), [
		o.isOpen,
		o.isFocused,
		p,
		e.isDisabled,
		N.isInvalid,
		e.isRequired
	]), F = c({
		...e,
		values: P,
		defaultClassName: `react-aria-Select`
	}), I = l(e, { global: !0 });
	delete I.id;
	let L = (0, U.useRef)(null);
	return U.createElement(v, { values: [
		[G, e],
		[K, o],
		[Y, w],
		[s, {
			...S,
			ref: b,
			elementType: `span`
		}],
		[i, {
			...C,
			ref: g,
			isPressed: o.isOpen,
			autoFocus: e.autoFocus
		}],
		[j, o],
		[A, {
			trigger: `Select`,
			triggerRef: g,
			scrollRef: L,
			placement: `bottom start`,
			"aria-labelledby": T[`aria-labelledby`],
			clearContexts: xe
		}],
		[O, {
			...T,
			ref: L
		}],
		[D, o],
		[R, { slots: {
			description: E,
			errorMessage: k
		} }],
		[ee, N]
	] }, U.createElement(d.div, {
		...f(I, F, m),
		ref: t,
		slot: e.slot || void 0,
		"data-focused": o.isFocused || void 0,
		"data-focus-visible": p || void 0,
		"data-open": o.isOpen || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": N.isInvalid || void 0,
		"data-required": e.isRequired || void 0
	}, F.children, U.createElement(_e, {
		...M,
		autoComplete: e.autoComplete
	})));
}
var Y = (0, U.createContext)(null), X = g(function(e, t) {
	[e, t] = b(e, t, Y);
	let n = (0, U.useContext)(K), { placeholder: r } = _(G), i = n.selectedItems.map((e) => {
		let t = e.props?.children;
		return typeof t == `function` && (t = t({
			isHovered: !1,
			isPressed: !1,
			isSelected: !1,
			isFocused: !1,
			isFocusVisible: !1,
			isDisabled: !1,
			selectionMode: `single`,
			selectionBehavior: `toggle`
		})), t;
	}), a = me(), o = (0, U.useMemo)(() => n.selectedItems.map((e) => e?.textValue), [n.selectedItems]), s = n.selectionManager.selectionMode, u = (0, U.useMemo)(() => s === `single` ? o[0] ?? `` : a.format(o), [
		s,
		a,
		o
	]), f = (0, U.useMemo)(() => {
		if (s === `single`) return i[0];
		let e = a.formatToParts(o);
		if (e.length === 0) return null;
		let t = 0;
		return e.map((e) => e.type === `element` ? U.createElement(U.Fragment, { key: t }, i[t++]) : e.value);
	}, [
		s,
		a,
		o,
		i
	]), p = z(be(ne), `react-aria-components`), m = c({
		...e,
		defaultChildren: f ?? r ?? p.format(`selectPlaceholder`),
		defaultClassName: `react-aria-SelectValue`,
		values: {
			selectedItem: n.selectedItems[0]?.value ?? null,
			selectedItems: (0, U.useMemo)(() => n.selectedItems.map((e) => e.value ?? null), [n.selectedItems]),
			selectedText: u,
			isPlaceholder: n.selectedItems.length === 0,
			state: n
		}
	}), h = l(e, { global: !0 });
	return U.createElement(d.span, {
		ref: t,
		...h,
		...m,
		"data-placeholder": n.selectedItems.length === 0 || void 0
	}, U.createElement(R.Provider, { value: void 0 }, m.children));
}), Z = n();
function Q({ item: e, multiple: t = !1 }) {
	return (0, Z.jsxs)(E, {
		id: e.id,
		value: e,
		textValue: e.label,
		...e.isDisabled ? { isDisabled: !0 } : {},
		className: H,
		children: [
			t ? (0, Z.jsx)(`span`, {
				"aria-hidden": `true`,
				className: `grid size-4 shrink-0 place-items-center rounded-sm border border-border-strong bg-input text-accent-fg group-data-selected:border-accent group-data-selected:bg-accent forced-colors:group-data-selected:bg-[Highlight]`,
				children: (0, Z.jsx)(m, {
					name: `action.check`,
					className: `invisible size-3 group-data-selected:visible`,
					strokeWidth: 3
				})
			}) : null,
			e.icon ? (0, Z.jsx)(`span`, {
				"aria-hidden": `true`,
				className: `flex shrink-0 text-muted [&>svg]:size-4`,
				children: e.icon
			}) : null,
			(0, Z.jsxs)(`span`, {
				className: `flex min-w-0 flex-1 flex-col`,
				children: [(0, Z.jsx)(`span`, {
					className: `break-words`,
					children: e.label
				}), e.description ? (0, Z.jsxs)(Z.Fragment, { children: [` `, (0, Z.jsx)(`span`, {
					className: r(`text-caption font-normal break-words text-muted`),
					children: e.description
				})] }) : null]
			}),
			t ? null : (0, Z.jsx)(m, {
				name: `action.check`,
				"aria-hidden": `true`,
				className: `invisible size-4 shrink-0 text-accent-text group-data-selected:visible`
			})
		]
	});
}
var $ = `group/trigger flex h-control-md w-full min-w-0 cursor-default items-center gap-2 rounded-md border border-border-strong bg-input px-2.5 text-left text-base text-fg transition-colors sm:text-body data-hovered:border-muted data-pressed:bg-hover group-data-invalid/field:border-danger data-disabled:cursor-not-allowed data-disabled:border-border data-disabled:bg-sunken data-disabled:text-muted`;
function Se({ label: e, description: t, errorMessage: n, status: i, requiredLabel: a, optionalLabel: o, items: s, placeholder: c, emptyLabel: l, container: u, className: d, ...f }) {
	let p = (0, U.useCallback)(({ isPlaceholder: e, selectedItems: t }) => {
		let n = t[0];
		return e || !n ? c ?? `` : (0, Z.jsxs)(Z.Fragment, { children: [n.icon ? (0, Z.jsx)(`span`, {
			"aria-hidden": `true`,
			className: `flex shrink-0 text-muted [&>svg]:size-4`,
			children: n.icon
		}) : null, (0, Z.jsx)(`span`, {
			className: `truncate`,
			children: n.label
		})] });
	}, [c]), h = (0, U.useCallback)(() => (0, Z.jsx)(`p`, {
		className: `px-2 py-3 text-body text-muted`,
		children: l
	}), [l]);
	return (0, Z.jsxs)(q, {
		...f,
		...l ? { allowsEmptyCollection: !0 } : {},
		className: r(`group/field`, fe, d),
		children: [
			(0, Z.jsx)(V, {
				isRequired: f.isRequired,
				requiredLabel: a,
				optionalLabel: o,
				children: e
			}),
			(0, Z.jsxs)(w, {
				className: $,
				children: [(0, Z.jsx)(X, {
					className: `flex min-w-0 flex-1 items-center gap-2 truncate data-placeholder:text-muted`,
					children: p
				}), (0, Z.jsx)(m, {
					name: `chevron.down`,
					"aria-hidden": `true`,
					className: `size-4 shrink-0 text-muted transition-transform group-data-pressed/trigger:translate-y-px`
				})]
			}),
			(0, Z.jsx)(B, {
				description: t,
				status: i
			}),
			(0, Z.jsx)(pe, { children: n }),
			(0, Z.jsx)(N, {
				...u ? { UNSTABLE_portalContainer: u } : {},
				offset: 4,
				className: r(de, `min-w-(--trigger-width) p-1`),
				children: (0, Z.jsx)(k, {
					items: s,
					...l ? { renderEmptyState: h } : {},
					className: `max-h-[inherit] outline-none`,
					children: (e) => (0, Z.jsx)(Q, { item: e })
				})
			})
		]
	});
}
export { q as a, X as i, $ as n, Q as r, Se as t };
