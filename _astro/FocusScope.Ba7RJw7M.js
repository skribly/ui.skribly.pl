import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t, t as n } from "./react-dom.B9zIfLd2.js";
import { At as r, Et as i, I as a, Nt as o, St as s, Tt as c, V as l, _t as u, ht as d, lt as f, nt as p, ot as m, pt as h, ut as g, vt as ee, xt as _, zt as v } from "./createLucideIcon.npgQlVHx.js";
var y = e(n(), 1), b = e(t(), 1), x = (0, b.createContext)(null);
function S(e) {
	let t = (0, b.useRef)({});
	return b.createElement(x.Provider, { value: t }, e.children);
}
var C = (0, b.forwardRef)(function(e, t) {
	let { name: n, isVisible: a = !0, children: s, className: c, style: l, render: u, ...d } = e, [f, p] = (0, b.useState)(a ? `visible` : `hidden`), m = (0, b.useContext)(x);
	if (!m) throw Error(`<SharedElement> must be rendered inside a <SharedElementTransition>`);
	a && f === `hidden` && p(`visible`), t = o(t), v(() => {
		let e = t.current, r = m.current, i = r[n], o = null;
		if (e && a && i) {
			p(`visible`);
			let t = e.getAnimations(), a = i.style.map(([t, n]) => {
				let r = e.style[t];
				if (t === `translate`) {
					let t = i.rect, n = e.getBoundingClientRect(), r = t.left - n?.left, a = t.top - n?.top;
					e.style.translate = `${r}px ${a}px`;
				} else e.style[t] = n;
				return [t, r];
			});
			for (let n of e.getAnimations()) t.includes(n) || n.cancel();
			o = requestAnimationFrame(() => {
				o = null;
				for (let [t, n] of a) e.style[t] = n;
			}), delete r[n];
		} else e && a && !i ? (queueMicrotask(() => (0, y.flushSync)(() => p(`entering`))), o = requestAnimationFrame(() => {
			o = null, p(`visible`);
		})) : e && !a && queueMicrotask(() => {
			r[n] ? (delete r[n], (0, y.flushSync)(() => p(`exiting`)), Promise.all(e.getAnimations().map((e) => e.finished)).then(() => p(`hidden`)).catch(() => {})) : p(`hidden`);
		});
		return () => {
			if (o != null && cancelAnimationFrame(o), e && e.isConnected && !e.hasAttribute(`data-exiting`)) {
				let t = window.getComputedStyle(e);
				if (t.transitionProperty !== `none`) {
					let i = t.transitionProperty.split(/\s*,\s*/);
					r[n] = {
						rect: e.getBoundingClientRect(),
						style: i.map((e) => [e, t[e]])
					};
				}
			}
		};
	}, [
		t,
		m,
		n,
		a
	]);
	let h = i({
		children: s,
		className: c,
		style: l,
		render: u,
		values: {
			isEntering: f === `entering`,
			isExiting: f === `exiting`
		}
	});
	return f === `hidden` ? null : b.createElement(r.div, {
		...d,
		...h,
		ref: t,
		"data-entering": f === `entering` || void 0,
		"data-exiting": f === `exiting` || void 0
	});
}), w = (0, b.createContext)({ isSelected: !1 }), T = (0, b.forwardRef)(function(e, t) {
	[e, t] = c(e, t, w);
	let { isSelected: n, ...r } = e;
	return b.createElement(C, {
		...r,
		ref: t,
		className: e.className || `react-aria-SelectionIndicator`,
		name: `SelectionIndicator`,
		isVisible: n
	});
}), E = class {
	constructor(e, t, n, r) {
		this._walkerStack = [], this._currentSetFor = new Set(), this._acceptNode = (e) => {
			if (e.nodeType === Node.ELEMENT_NODE) {
				let t = e.shadowRoot;
				if (t) {
					let e = this._doc.createTreeWalker(t, this.whatToShow, { acceptNode: this._acceptNode });
					return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT;
				}
				if (typeof this.filter == `function`) return this.filter(e);
				if (this.filter?.acceptNode) return this.filter.acceptNode(e);
				if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
			}
			return NodeFilter.FILTER_SKIP;
		}, this._doc = e, this.root = t, this.filter = r ?? null, this.whatToShow = n ?? NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, n, this._acceptNode));
		let i = t.shadowRoot;
		if (i) {
			let e = this._doc.createTreeWalker(i, this.whatToShow, { acceptNode: this._acceptNode });
			this._walkerStack.unshift(e);
		}
	}
	get currentNode() {
		return this._currentNode;
	}
	set currentNode(e) {
		if (!h(this.root, e)) throw Error(`Cannot set currentNode to a node that is not contained by the root node.`);
		let t = [], n = e, r = e;
		for (this._currentNode = e; n && n !== this.root;) if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
			let e = n, i = this._doc.createTreeWalker(e, this.whatToShow, { acceptNode: this._acceptNode });
			t.push(i), i.currentNode = r, this._currentSetFor.add(i), n = r = e.host;
		} else n = n.parentNode;
		let i = this._doc.createTreeWalker(this.root, this.whatToShow, { acceptNode: this._acceptNode });
		t.push(i), i.currentNode = r, this._currentSetFor.add(i), this._walkerStack = t;
	}
	get doc() {
		return this._doc;
	}
	firstChild() {
		let e = this.currentNode, t = this.nextNode();
		return h(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null);
	}
	lastChild() {
		let e = this._walkerStack[0].lastChild();
		return e && (this.currentNode = e), e;
	}
	nextNode() {
		let e = this._walkerStack[0].nextNode();
		if (e) {
			if (e.shadowRoot) {
				let t;
				if (typeof this.filter == `function` ? t = this.filter(e) : this.filter?.acceptNode && (t = this.filter.acceptNode(e)), t === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
				let n = this.nextNode();
				return n && (this.currentNode = n), n;
			}
			return e && (this.currentNode = e), e;
		}
		if (this._walkerStack.length > 1) {
			this._walkerStack.shift();
			let e = this.nextNode();
			return e && (this.currentNode = e), e;
		}
		return null;
	}
	previousNode() {
		let e = this._walkerStack[0];
		if (e.currentNode === e.root) {
			if (this._currentSetFor.has(e)) {
				if (this._currentSetFor.delete(e), this._walkerStack.length > 1) {
					this._walkerStack.shift();
					let e = this.previousNode();
					return e && (this.currentNode = e), e;
				}
				return null;
			}
			return null;
		}
		let t = e.previousNode();
		if (t) {
			if (t.shadowRoot) {
				let e;
				if (typeof this.filter == `function` ? e = this.filter(t) : this.filter?.acceptNode && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
				let n = this.lastChild();
				return n && (this.currentNode = n), n;
			}
			return t && (this.currentNode = t), t;
		}
		if (this._walkerStack.length > 1) {
			this._walkerStack.shift();
			let e = this.previousNode();
			return e && (this.currentNode = e), e;
		}
		return null;
	}
	nextSibling() {
		return null;
	}
	previousSibling() {
		return null;
	}
	parentNode() {
		return null;
	}
};
function D(e, t, n, r) {
	return ee() ? new E(e, t, n, r) : e.createTreeWalker(t, n, r);
}
var O = b.createContext(null), k = `react-aria-focus-scope-restore`, A = null;
function te(e) {
	let { children: t, contain: n, restoreFocus: r, autoFocus: i } = e, a = (0, b.useRef)(null), o = (0, b.useRef)(null), s = (0, b.useRef)([]), { parentNode: c } = (0, b.useContext)(O) || {}, l = (0, b.useMemo)(() => new Q({ scopeRef: s }), [s]);
	v(() => {
		let e = c || $.root;
		if ($.getTreeNode(e.scopeRef) && A && !V(A, e.scopeRef)) {
			let t = $.getTreeNode(A);
			t && (e = t);
		}
		e.addChild(l), $.addNode(l);
	}, [l, c]), v(() => {
		let e = $.getTreeNode(s);
		e && (e.contain = !!n);
	}, [n]), v(() => {
		let e = a.current?.nextSibling, t = [], n = (e) => e.stopPropagation();
		for (; e && e !== o.current;) t.push(e), e.addEventListener(k, n), e = e.nextSibling;
		return s.current = t, () => {
			for (let e of t) e.removeEventListener(k, n);
		};
	}, [t]), K(s, r, n), I(s, n), J(s, r, n), G(s, i), (0, b.useEffect)(() => {
		let e = d(_(s.current ? s.current[0] : void 0)), t = null;
		if (R(e, s.current)) {
			for (let n of $.traverse()) n.scopeRef && R(e, n.scopeRef.current) && (t = n);
			t === $.getTreeNode(s) && (A = t.scopeRef);
		}
	}, [s]), v(() => () => {
		let e = $.getTreeNode(s)?.parent?.scopeRef ?? null;
		s !== A && !V(s, A) || e && !$.getTreeNode(e) || (A = e), $.removeTreeNode(s);
	}, [s]);
	let u = (0, b.useMemo)(() => j(s), []), f = (0, b.useMemo)(() => ({
		focusManager: u,
		parentNode: l
	}), [l, u]);
	return b.createElement(O.Provider, { value: f }, b.createElement(`span`, {
		"data-focus-scope-start": !0,
		hidden: !0,
		ref: a
	}), t, b.createElement(`span`, {
		"data-focus-scope-end": !0,
		hidden: !0,
		ref: o
	}));
}
function j(e) {
	return {
		focusNext(t = {}) {
			let n = e.current, { from: r, tabbable: i, wrap: a, accept: o } = t, s = r || d(_(n[0] ?? void 0)), c = n[0].previousElementSibling, l = X(M(n), {
				tabbable: i,
				accept: o
			}, n);
			l.currentNode = R(s, n) ? s : c;
			let u = l.nextNode();
			return !u && a && (l.currentNode = c, u = l.nextNode()), u && H(u, !0), u;
		},
		focusPrevious(t = {}) {
			let n = e.current, { from: r, tabbable: i, wrap: a, accept: o } = t, s = r || d(_(n[0] ?? void 0)), c = n[n.length - 1].nextElementSibling, l = X(M(n), {
				tabbable: i,
				accept: o
			}, n);
			l.currentNode = R(s, n) ? s : c;
			let u = l.previousNode();
			return !u && a && (l.currentNode = c, u = l.previousNode()), u && H(u, !0), u;
		},
		focusFirst(t = {}) {
			let n = e.current, { tabbable: r, accept: i } = t, a = X(M(n), {
				tabbable: r,
				accept: i
			}, n);
			a.currentNode = n[0].previousElementSibling;
			let o = a.nextNode();
			return o && H(o, !0), o;
		},
		focusLast(t = {}) {
			let n = e.current, { tabbable: r, accept: i } = t, a = X(M(n), {
				tabbable: r,
				accept: i
			}, n);
			a.currentNode = n[n.length - 1].nextElementSibling;
			let o = a.previousNode();
			return o && H(o, !0), o;
		}
	};
}
function M(e) {
	return e[0].parentElement;
}
function N(e) {
	let t = $.getTreeNode(A);
	for (; t && t.scopeRef !== e;) {
		if (t.contain) return !1;
		t = t.parent;
	}
	return !0;
}
function P(e) {
	if (!e.form) return Array.from(_(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter((e) => !e.form);
	let t = e.form.elements.namedItem(e.name), n = s(e);
	return t instanceof n.RadioNodeList ? Array.from(t).filter((e) => e instanceof n.HTMLInputElement) : t instanceof n.HTMLInputElement ? [t] : [];
}
function F(e) {
	if (e.checked) return !0;
	let t = P(e);
	return t.length > 0 && !t.some((e) => e.checked);
}
function I(e, t) {
	let n = (0, b.useRef)(void 0), r = (0, b.useRef)(void 0);
	v(() => {
		let i = e.current;
		if (!t) {
			r.current &&= (cancelAnimationFrame(r.current), void 0);
			return;
		}
		let a = _(i ? i[0] : void 0), o = (t) => {
			if (t.key !== `Tab` || t.altKey || t.ctrlKey || t.metaKey || !N(e) || t.isComposing) return;
			let n = d(a), r = e.current;
			if (!r || !R(n, r)) return;
			let i = X(M(r), { tabbable: !0 }, r);
			if (!n) return;
			i.currentNode = n;
			let o = t.shiftKey ? i.previousNode() : i.nextNode();
			o ||= (i.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling, t.shiftKey ? i.previousNode() : i.nextNode()), t.preventDefault(), o && (H(o, !0), o instanceof s(o).HTMLInputElement && o.select());
		}, c = (t) => {
			(!A || V(A, e)) && R(u(t), e.current) ? (A = e, n.current = u(t)) : N(e) && !z(u(t), e) ? n.current ? H(n.current) : A && A.current && W(A.current) : N(e) && (n.current = u(t));
		}, f = (t) => {
			r.current && cancelAnimationFrame(r.current), r.current = requestAnimationFrame(() => {
				let r = l(), i = (r === `virtual` || r === null) && m() && p(), o = d(a);
				if (!i && o && N(e) && !z(o, e)) {
					A = e;
					let r = u(t);
					r && r.isConnected ? (n.current = r, H(n.current)) : A.current && W(A.current);
				}
			});
		};
		return a.addEventListener(`keydown`, o, !1), a.addEventListener(`focusin`, c, !1), i?.forEach((e) => e.addEventListener(`focusin`, c, !1)), i?.forEach((e) => e.addEventListener(`focusout`, f, !1)), () => {
			a.removeEventListener(`keydown`, o, !1), a.removeEventListener(`focusin`, c, !1), i?.forEach((e) => e.removeEventListener(`focusin`, c, !1)), i?.forEach((e) => e.removeEventListener(`focusout`, f, !1));
		};
	}, [e, t]), v(() => () => {
		r.current && cancelAnimationFrame(r.current);
	}, [r]);
}
function L(e) {
	return z(e);
}
function R(e, t) {
	return !e || !t ? !1 : t.some((t) => h(t, e));
}
function z(e, t = null) {
	if (e instanceof Element && e.closest(`[data-react-aria-top-layer]`)) return !0;
	for (let { scopeRef: n } of $.traverse($.getTreeNode(t))) if (n && R(e, n.current)) return !0;
	return !1;
}
function B(e) {
	return z(e, A);
}
function V(e, t) {
	let n = $.getTreeNode(t)?.parent;
	for (; n;) {
		if (n.scopeRef === e) return !0;
		n = n.parent;
	}
	return !1;
}
function H(e, t = !1) {
	if (e != null && !t) try {
		a(e);
	} catch {}
	else if (e != null) try {
		e.focus();
	} catch {}
}
function U(e, t = !0) {
	let n = e[0].previousElementSibling, r = M(e), i = X(r, { tabbable: t }, e);
	i.currentNode = n;
	let a = i.nextNode();
	return t && !a && (r = M(e), i = X(r, { tabbable: !1 }, e), i.currentNode = n, a = i.nextNode()), a;
}
function W(e, t = !0) {
	H(U(e, t));
}
function G(e, t) {
	let n = b.useRef(t);
	(0, b.useEffect)(() => {
		if (n.current) {
			A = e;
			let t = _(e.current ? e.current[0] : void 0);
			!R(d(t), A.current) && e.current && W(e.current);
		}
		n.current = !1;
	}, [e]);
}
function K(e, t, n) {
	v(() => {
		if (t || n) return;
		let r = e.current, i = _(r ? r[0] : void 0), a = (t) => {
			let n = u(t);
			R(n, e.current) ? A = e : L(n) || (A = null);
		};
		return i.addEventListener(`focusin`, a, !1), r?.forEach((e) => e.addEventListener(`focusin`, a, !1)), () => {
			i.removeEventListener(`focusin`, a, !1), r?.forEach((e) => e.removeEventListener(`focusin`, a, !1));
		};
	}, [
		e,
		t,
		n
	]);
}
function q(e) {
	let t = $.getTreeNode(A);
	for (; t && t.scopeRef !== e;) {
		if (t.nodeToRestore) return !1;
		t = t.parent;
	}
	return t?.scopeRef === e;
}
function J(e, t, n) {
	let r = (0, b.useRef)(typeof document < `u` ? d(_(e.current ? e.current[0] : void 0)) : null);
	v(() => {
		let r = e.current, i = _(r ? r[0] : void 0);
		if (!t || n) return;
		let a = () => {
			(!A || V(A, e)) && R(d(i), e.current) && (A = e);
		};
		return i.addEventListener(`focusin`, a, !1), r?.forEach((e) => e.addEventListener(`focusin`, a, !1)), () => {
			i.removeEventListener(`focusin`, a, !1), r?.forEach((e) => e.removeEventListener(`focusin`, a, !1));
		};
	}, [e, n]), v(() => {
		let r = _(e.current ? e.current[0] : void 0);
		if (!t) return;
		let i = (t) => {
			if (t.key !== `Tab` || t.altKey || t.ctrlKey || t.metaKey || !N(e) || t.isComposing) return;
			let n = r.activeElement;
			if (!z(n, e) || !q(e)) return;
			let i = $.getTreeNode(e);
			if (!i) return;
			let a = i.nodeToRestore, o = X(r.body, { tabbable: !0 });
			o.currentNode = n;
			let s = t.shiftKey ? o.previousNode() : o.nextNode();
			if (a && a.isConnected && a !== r.body || (a = void 0, i.nodeToRestore = void 0), (!s || !z(s, e)) && a) {
				o.currentNode = a;
				do
					s = t.shiftKey ? o.previousNode() : o.nextNode();
				while (z(s, e));
				t.preventDefault(), t.stopPropagation(), s ? H(s, !0) : L(a) ? H(a, !0) : n.blur();
			}
		};
		return n || r.addEventListener(`keydown`, i, !0), () => {
			n || r.removeEventListener(`keydown`, i, !0);
		};
	}, [
		e,
		t,
		n
	]), v(() => {
		let n = _(e.current ? e.current[0] : void 0);
		if (!t) return;
		let i = $.getTreeNode(e);
		if (i) return i.nodeToRestore = r.current ?? void 0, () => {
			let r = $.getTreeNode(e);
			if (!r) return;
			let i = r.nodeToRestore, a = d(n);
			if (t && i && (a && z(a, e) || a === n.body && q(e))) {
				let t = $.clone();
				requestAnimationFrame(() => {
					if (n.activeElement === n.body) {
						let n = t.getTreeNode(e);
						for (; n;) {
							if (n.nodeToRestore && n.nodeToRestore.isConnected) {
								Y(n.nodeToRestore);
								return;
							}
							n = n.parent;
						}
						for (n = t.getTreeNode(e); n;) {
							if (n.scopeRef && n.scopeRef.current && $.getTreeNode(n.scopeRef)) {
								let e = U(n.scopeRef.current, !0);
								if (e) {
									Y(e);
									return;
								}
							}
							n = n.parent;
						}
					}
				});
			}
		};
	}, [e, t]);
}
function Y(e) {
	e.dispatchEvent(new CustomEvent(k, {
		bubbles: !0,
		cancelable: !0
	})) && H(e);
}
function X(e, t, n) {
	let r = t?.tabbable ? g : f, i = e?.nodeType === Node.ELEMENT_NODE ? e : null, a = _(i), o = D(a, e || a, NodeFilter.SHOW_ELEMENT, { acceptNode(e) {
		return h(t?.from, e) || t?.tabbable && e.tagName === `INPUT` && e.getAttribute(`type`) === `radio` && (!F(e) || o.currentNode.tagName === `INPUT` && o.currentNode.type === `radio` && o.currentNode.name === e.name) ? NodeFilter.FILTER_REJECT : r(e) && (!n || R(e, n)) && (!t?.accept || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	return t?.from && (o.currentNode = t.from), o;
}
function ne(e, t = {}) {
	return {
		focusNext(n = {}) {
			let r = e.current;
			if (!r) return null;
			let { from: i, tabbable: a = t.tabbable, wrap: o = t.wrap, accept: s = t.accept } = n, c = i || d(_(r)), l = X(r, {
				tabbable: a,
				accept: s
			});
			h(r, c) && (l.currentNode = c);
			let u = l.nextNode();
			return !u && o && (l.currentNode = r, u = l.nextNode()), u && H(u, !0), u;
		},
		focusPrevious(n = t) {
			let r = e.current;
			if (!r) return null;
			let { from: i, tabbable: a = t.tabbable, wrap: o = t.wrap, accept: s = t.accept } = n, c = i || d(_(r)), l = X(r, {
				tabbable: a,
				accept: s
			});
			if (h(r, c)) l.currentNode = c;
			else {
				let e = Z(l);
				return e && H(e, !0), e ?? null;
			}
			let u = l.previousNode();
			if (!u && o) {
				l.currentNode = r;
				let e = Z(l);
				if (!e) return null;
				u = e;
			}
			return u && H(u, !0), u ?? null;
		},
		focusFirst(n = t) {
			let r = e.current;
			if (!r) return null;
			let { tabbable: i = t.tabbable, accept: a = t.accept } = n, o = X(r, {
				tabbable: i,
				accept: a
			}).nextNode();
			return o && H(o, !0), o;
		},
		focusLast(n = t) {
			let r = e.current;
			if (!r) return null;
			let { tabbable: i = t.tabbable, accept: a = t.accept } = n, o = Z(X(r, {
				tabbable: i,
				accept: a
			}));
			return o && H(o, !0), o ?? null;
		}
	};
}
function Z(e) {
	let t, n;
	do
		n = e.lastChild(), n && (t = n);
	while (n);
	return t;
}
var re = class e {
	constructor() {
		this.fastMap = new Map(), this.root = new Q({ scopeRef: null }), this.fastMap.set(null, this.root);
	}
	get size() {
		return this.fastMap.size;
	}
	getTreeNode(e) {
		return this.fastMap.get(e);
	}
	addTreeNode(e, t, n) {
		let r = this.fastMap.get(t ?? null);
		if (!r) return;
		let i = new Q({ scopeRef: e });
		r.addChild(i), i.parent = r, this.fastMap.set(e, i), n && (i.nodeToRestore = n);
	}
	addNode(e) {
		this.fastMap.set(e.scopeRef, e);
	}
	removeTreeNode(e) {
		if (e === null) return;
		let t = this.fastMap.get(e);
		if (!t) return;
		let n = t.parent;
		for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && R(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
		let r = t.children;
		n && (n.removeChild(t), r.size > 0 && r.forEach((e) => n && n.addChild(e))), this.fastMap.delete(t.scopeRef);
	}
	*traverse(e = this.root) {
		if (e.scopeRef != null && (yield e), e.children.size > 0) for (let t of e.children) yield* this.traverse(t);
	}
	clone() {
		let t = new e();
		for (let e of this.traverse()) t.addTreeNode(e.scopeRef, e.parent?.scopeRef ?? null, e.nodeToRestore);
		return t;
	}
}, Q = class {
	constructor(e) {
		this.children = new Set(), this.contain = !1, this.scopeRef = e.scopeRef;
	}
	addChild(e) {
		this.children.add(e), e.parent = this;
	}
	removeChild(e) {
		this.children.delete(e), e.parent = void 0;
	}
}, $ = new re();
export { D as a, S as c, ne as i, te as n, T as o, X as r, w as s, B as t };
