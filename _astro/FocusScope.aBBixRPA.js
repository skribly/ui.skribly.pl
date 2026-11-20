import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t, t as n } from "./react-dom.B9zIfLd2.js";
import { Et as r, Ht as i, Kt as a, Lt as o, Nt as s, Pt as c, Q as l, Rt as u, St as d, Tt as f, Vt as p, Yt as ee, jt as m, kt as h, rt as g, tn as _, vt as te } from "./useOverflow.Dq483xd0.js";
var v = e(n(), 1), y = e(t(), 1), b = (0, y.createContext)(null);
function x(e) {
	let t = (0, y.useRef)({});
	return y.createElement(b.Provider, { value: t }, e.children);
}
var S = (0, y.forwardRef)(function(e, t) {
	let { name: n, isVisible: r = !0, children: o, className: s, style: c, render: l, ...u } = e, [d, f] = (0, y.useState)(r ? `visible` : `hidden`), p = (0, y.useContext)(b);
	if (!p) throw Error(`<SharedElement> must be rendered inside a <SharedElementTransition>`);
	r && d === `hidden` && f(`visible`), t = ee(t), _(() => {
		let e = t.current, i = p.current, a = i[n], o = null;
		if (e && r && a) {
			f(`visible`);
			let t = e.getAnimations(), r = a.style.map(([t, n]) => {
				let r = e.style[t];
				if (t === `translate`) {
					let t = a.rect, n = e.getBoundingClientRect(), r = t.left - n?.left, i = t.top - n?.top;
					e.style.translate = `${r}px ${i}px`;
				} else e.style[t] = n;
				return [t, r];
			});
			for (let n of e.getAnimations()) t.includes(n) || n.cancel();
			o = requestAnimationFrame(() => {
				o = null;
				for (let [t, n] of r) e.style[t] = n;
			}), delete i[n];
		} else e && r && !a ? (queueMicrotask(() => (0, v.flushSync)(() => f(`entering`))), o = requestAnimationFrame(() => {
			o = null, f(`visible`);
		})) : e && !r && queueMicrotask(() => {
			i[n] ? (delete i[n], (0, v.flushSync)(() => f(`exiting`)), Promise.all(e.getAnimations().map((e) => e.finished)).then(() => f(`hidden`)).catch(() => {})) : f(`hidden`);
		});
		return () => {
			if (o != null && cancelAnimationFrame(o), e && e.isConnected && !e.hasAttribute(`data-exiting`)) {
				let t = window.getComputedStyle(e);
				if (t.transitionProperty !== `none`) {
					let r = t.transitionProperty.split(/\s*,\s*/);
					i[n] = {
						rect: e.getBoundingClientRect(),
						style: r.map((e) => [e, t[e]])
					};
				}
			}
		};
	}, [
		t,
		p,
		n,
		r
	]);
	let m = i({
		children: o,
		className: s,
		style: c,
		render: l,
		values: {
			isEntering: d === `entering`,
			isExiting: d === `exiting`
		}
	});
	return d === `hidden` ? null : y.createElement(a.div, {
		...u,
		...m,
		ref: t,
		"data-entering": d === `entering` || void 0,
		"data-exiting": d === `exiting` || void 0
	});
}), C = (0, y.createContext)({ isSelected: !1 }), w = (0, y.forwardRef)(function(e, t) {
	[e, t] = p(e, t, C);
	let { isSelected: n, ...r } = e;
	return y.createElement(S, {
		...r,
		ref: t,
		className: e.className || `react-aria-SelectionIndicator`,
		name: `SelectionIndicator`,
		isVisible: n
	});
}), T = class {
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
function E(e, t, n, r) {
	return c() ? new T(e, t, n, r) : e.createTreeWalker(t, n, r);
}
var D = y.createContext(null), O = `react-aria-focus-scope-restore`, k = null;
function A(e) {
	let { children: t, contain: n, restoreFocus: r, autoFocus: i } = e, a = (0, y.useRef)(null), s = (0, y.useRef)(null), c = (0, y.useRef)([]), { parentNode: l } = (0, y.useContext)(D) || {}, u = (0, y.useMemo)(() => new Q({ scopeRef: c }), [c]);
	_(() => {
		let e = l || $.root;
		if ($.getTreeNode(e.scopeRef) && k && !V(k, e.scopeRef)) {
			let t = $.getTreeNode(k);
			t && (e = t);
		}
		e.addChild(u), $.addNode(u);
	}, [u, l]), _(() => {
		let e = $.getTreeNode(c);
		e && (e.contain = !!n);
	}, [n]), _(() => {
		let e = a.current?.nextSibling, t = [], n = (e) => e.stopPropagation();
		for (; e && e !== s.current;) t.push(e), e.addEventListener(O, n), e = e.nextSibling;
		return c.current = t, () => {
			for (let e of t) e.removeEventListener(O, n);
		};
	}, [t]), K(c, r, n), I(c, n), J(c, r, n), G(c, i), (0, y.useEffect)(() => {
		let e = m(o(c.current ? c.current[0] : void 0)), t = null;
		if (R(e, c.current)) {
			for (let n of $.traverse()) n.scopeRef && R(e, n.scopeRef.current) && (t = n);
			t === $.getTreeNode(c) && (k = t.scopeRef);
		}
	}, [c]), _(() => () => {
		let e = $.getTreeNode(c)?.parent?.scopeRef ?? null;
		c !== k && !V(c, k) || e && !$.getTreeNode(e) || (k = e), $.removeTreeNode(c);
	}, [c]);
	let d = (0, y.useMemo)(() => j(c), []), f = (0, y.useMemo)(() => ({
		focusManager: d,
		parentNode: u
	}), [u, d]);
	return y.createElement(D.Provider, { value: f }, y.createElement(`span`, {
		"data-focus-scope-start": !0,
		hidden: !0,
		ref: a
	}), t, y.createElement(`span`, {
		"data-focus-scope-end": !0,
		hidden: !0,
		ref: s
	}));
}
function j(e) {
	return {
		focusNext(t = {}) {
			let n = e.current, { from: r, tabbable: i, wrap: a, accept: s } = t, c = r || m(o(n[0] ?? void 0)), l = n[0].previousElementSibling, u = X(M(n), {
				tabbable: i,
				accept: s
			}, n);
			u.currentNode = R(c, n) ? c : l;
			let d = u.nextNode();
			return !d && a && (u.currentNode = l, d = u.nextNode()), d && H(d, !0), d;
		},
		focusPrevious(t = {}) {
			let n = e.current, { from: r, tabbable: i, wrap: a, accept: s } = t, c = r || m(o(n[0] ?? void 0)), l = n[n.length - 1].nextElementSibling, u = X(M(n), {
				tabbable: i,
				accept: s
			}, n);
			u.currentNode = R(c, n) ? c : l;
			let d = u.previousNode();
			return !d && a && (u.currentNode = l, d = u.previousNode()), d && H(d, !0), d;
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
	let t = $.getTreeNode(k);
	for (; t && t.scopeRef !== e;) {
		if (t.contain) return !1;
		t = t.parent;
	}
	return !0;
}
function P(e) {
	if (!e.form) return Array.from(o(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter((e) => !e.form);
	let t = e.form.elements.namedItem(e.name), n = u(e);
	return t instanceof n.RadioNodeList ? Array.from(t).filter((e) => e instanceof n.HTMLInputElement) : t instanceof n.HTMLInputElement ? [t] : [];
}
function F(e) {
	if (e.checked) return !0;
	let t = P(e);
	return t.length > 0 && !t.some((e) => e.checked);
}
function I(e, t) {
	let n = (0, y.useRef)(void 0), r = (0, y.useRef)(void 0);
	_(() => {
		let i = e.current;
		if (!t) {
			r.current &&= (cancelAnimationFrame(r.current), void 0);
			return;
		}
		let a = o(i ? i[0] : void 0), c = (t) => {
			if (t.key !== `Tab` || t.altKey || t.ctrlKey || t.metaKey || !N(e) || t.isComposing) return;
			let n = m(a), r = e.current;
			if (!r || !R(n, r)) return;
			let i = X(M(r), { tabbable: !0 }, r);
			if (!n) return;
			i.currentNode = n;
			let o = t.shiftKey ? i.previousNode() : i.nextNode();
			o ||= (i.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling, t.shiftKey ? i.previousNode() : i.nextNode()), t.preventDefault(), o && (H(o, !0), o instanceof u(o).HTMLInputElement && o.select());
		}, l = (t) => {
			(!k || V(k, e)) && R(s(t), e.current) ? (k = e, n.current = s(t)) : N(e) && !z(s(t), e) ? n.current ? H(n.current) : k && k.current && W(k.current) : N(e) && (n.current = s(t));
		}, f = (t) => {
			r.current && cancelAnimationFrame(r.current), r.current = requestAnimationFrame(() => {
				let r = g(), i = (r === `virtual` || r === null) && d() && te(), o = m(a);
				if (!i && o && N(e) && !z(o, e)) {
					k = e;
					let r = s(t);
					r && r.isConnected ? (n.current = r, H(n.current)) : k.current && W(k.current);
				}
			});
		};
		return a.addEventListener(`keydown`, c, !1), a.addEventListener(`focusin`, l, !1), i?.forEach((e) => e.addEventListener(`focusin`, l, !1)), i?.forEach((e) => e.addEventListener(`focusout`, f, !1)), () => {
			a.removeEventListener(`keydown`, c, !1), a.removeEventListener(`focusin`, l, !1), i?.forEach((e) => e.removeEventListener(`focusin`, l, !1)), i?.forEach((e) => e.removeEventListener(`focusout`, f, !1));
		};
	}, [e, t]), _(() => () => {
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
	return z(e, k);
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
		l(e);
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
	let n = y.useRef(t);
	(0, y.useEffect)(() => {
		if (n.current) {
			k = e;
			let t = o(e.current ? e.current[0] : void 0);
			!R(m(t), k.current) && e.current && W(e.current);
		}
		n.current = !1;
	}, [e]);
}
function K(e, t, n) {
	_(() => {
		if (t || n) return;
		let r = e.current, i = o(r ? r[0] : void 0), a = (t) => {
			let n = s(t);
			R(n, e.current) ? k = e : L(n) || (k = null);
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
	let t = $.getTreeNode(k);
	for (; t && t.scopeRef !== e;) {
		if (t.nodeToRestore) return !1;
		t = t.parent;
	}
	return t?.scopeRef === e;
}
function J(e, t, n) {
	let r = (0, y.useRef)(typeof document < `u` ? m(o(e.current ? e.current[0] : void 0)) : null);
	_(() => {
		let r = e.current, i = o(r ? r[0] : void 0);
		if (!t || n) return;
		let a = () => {
			(!k || V(k, e)) && R(m(i), e.current) && (k = e);
		};
		return i.addEventListener(`focusin`, a, !1), r?.forEach((e) => e.addEventListener(`focusin`, a, !1)), () => {
			i.removeEventListener(`focusin`, a, !1), r?.forEach((e) => e.removeEventListener(`focusin`, a, !1));
		};
	}, [e, n]), _(() => {
		let r = o(e.current ? e.current[0] : void 0);
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
	]), _(() => {
		let n = o(e.current ? e.current[0] : void 0);
		if (!t) return;
		let i = $.getTreeNode(e);
		if (i) return i.nodeToRestore = r.current ?? void 0, () => {
			let r = $.getTreeNode(e);
			if (!r) return;
			let i = r.nodeToRestore, a = m(n);
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
	e.dispatchEvent(new CustomEvent(O, {
		bubbles: !0,
		cancelable: !0
	})) && H(e);
}
function X(e, t, n) {
	let i = t?.tabbable ? r : f, a = e?.nodeType === Node.ELEMENT_NODE ? e : null, s = o(a), c = E(s, e || s, NodeFilter.SHOW_ELEMENT, { acceptNode(e) {
		return h(t?.from, e) || t?.tabbable && e.tagName === `INPUT` && e.getAttribute(`type`) === `radio` && (!F(e) || c.currentNode.tagName === `INPUT` && c.currentNode.type === `radio` && c.currentNode.name === e.name) ? NodeFilter.FILTER_REJECT : i(e) && (!n || R(e, n)) && (!t?.accept || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	return t?.from && (c.currentNode = t.from), c;
}
function ne(e, t = {}) {
	return {
		focusNext(n = {}) {
			let r = e.current;
			if (!r) return null;
			let { from: i, tabbable: a = t.tabbable, wrap: s = t.wrap, accept: c = t.accept } = n, l = i || m(o(r)), u = X(r, {
				tabbable: a,
				accept: c
			});
			h(r, l) && (u.currentNode = l);
			let d = u.nextNode();
			return !d && s && (u.currentNode = r, d = u.nextNode()), d && H(d, !0), d;
		},
		focusPrevious(n = t) {
			let r = e.current;
			if (!r) return null;
			let { from: i, tabbable: a = t.tabbable, wrap: s = t.wrap, accept: c = t.accept } = n, l = i || m(o(r)), u = X(r, {
				tabbable: a,
				accept: c
			});
			if (h(r, l)) u.currentNode = l;
			else {
				let e = Z(u);
				return e && H(e, !0), e ?? null;
			}
			let d = u.previousNode();
			if (!d && s) {
				u.currentNode = r;
				let e = Z(u);
				if (!e) return null;
				d = e;
			}
			return d && H(d, !0), d ?? null;
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
export { E as a, x as c, ne as i, A as n, w as o, X as r, C as s, B as t };
