import { a as e } from "./railTree.hfpCRG-L.js";
var t = `(min-width: 64rem)`, n = 8, r = 68, i = (e) => [...e.querySelectorAll(`li[data-fly-item]`)], a = (e, t) => e.querySelector(`[data-fly="${t}"]`), o = (e) => a(e, `toggle`), s = (e) => a(e, `panel`);
function c(c, l = window) {
	if (c.dataset.flyReady !== void 0) return;
	c.dataset.flyReady = ``;
	let u = l.document, d = () => l.getComputedStyle(c).direction === `rtl`, f = () => l.matchMedia(t).matches, p = 0, m = null, h = () => c.querySelector(`li[data-fly-item][data-open]`), g = (e) => [...s(e)?.querySelectorAll(`[data-fly="back"], :scope > ul a`) ?? []].filter((e) => !f() || e.dataset.fly !== `back`), _ = (e) => {
		let t = s(e);
		if (!t) return;
		if (!f()) {
			t.style.removeProperty(`--sk-fly-top`);
			return;
		}
		let i = c.getBoundingClientRect().top, a = e.getBoundingClientRect().top, o = Math.min(t.getBoundingClientRect().height, l.innerHeight - r - n), u = l.innerHeight - n, d = a;
		d + o > u && (d = u - o), d < r && (d = r), t.style.setProperty(`--sk-fly-top`, `${Math.round(d - i)}px`);
	}, v = (e = h()) => {
		l.clearTimeout(p), e && (delete e.dataset.open, delete c.dataset.screen, o(e)?.setAttribute(`aria-expanded`, `false`));
	}, y = (e) => {
		l.clearTimeout(p);
		let t = h();
		t !== e && (v(t), e.dataset.open = ``, c.dataset.screen = ``, o(e)?.setAttribute(`aria-expanded`, `true`), _(e));
	}, b = (e) => {
		y(e), g(e)[0]?.focus();
	}, x = (e) => {
		v(e), o(e)?.focus();
	}, S = (e, t) => {
		let n = e.closest(`[data-fly="panel"]`), r = (n ? g(n.closest(`li[data-fly-item]`)) : i(c).map((t) => e.dataset.fly === `toggle` ? o(t) : a(t, `link`))).filter((e) => e !== null), s = r.indexOf(e);
		r[t === `first` ? 0 : t === `last` ? r.length - 1 : Math.min(r.length - 1, Math.max(0, s + t))]?.focus();
	};
	c.addEventListener(`click`, (e) => {
		let t = e.target, n = t.closest(`[data-fly="toggle"]`), r = t.closest(`[data-fly="back"]`), i = t.closest(`li[data-fly-item]`);
		if (i) {
			if (r) return x(i);
			if (n) {
				if (i.dataset.open !== void 0) return v(i);
				y(i), e.detail === 0 && g(i)[0]?.focus();
			}
		}
	}), c.addEventListener(`keydown`, (e) => {
		let t = e.target, n = t.closest(`li[data-fly-item]`);
		if (!n) return;
		let r = t.closest(`[data-fly="panel"]`) !== null, i = d() ? `ArrowLeft` : `ArrowRight`, a = d() ? `ArrowRight` : `ArrowLeft`;
		if (e.key === `Escape`) return n.dataset.open === void 0 ? void 0 : (e.preventDefault(), x(n));
		if (e.key === a && r) return e.preventDefault(), x(n);
		if (e.key === i && !r) return e.preventDefault(), b(n);
		let o = e.key === `ArrowDown` ? 1 : e.key === `ArrowUp` ? -1 : null, s = e.key === `Home` ? `first` : e.key === `End` ? `last` : null;
		(o !== null || s !== null) && (e.preventDefault(), S(t, o ?? s ?? `first`));
	}), c.addEventListener(`focusin`, (e) => {
		let t = e.target.closest(`li[data-fly-item]`), n = h();
		n && n !== t && v(n);
	}), c.addEventListener(`pointermove`, (t) => {
		if (t.pointerType !== `mouse` || !f()) return;
		let n = {
			x: t.clientX,
			y: t.clientY
		}, r = m;
		m = n;
		let i = t.target.closest(`li[data-fly-item]`), a = h();
		if (!i || i === a) return l.clearTimeout(p);
		if (i.closest(`[data-fly="panel"]`)) return;
		let o = a ? s(a) : null;
		o && e(r, n, o.getBoundingClientRect(), d()) || (l.clearTimeout(p), p = l.setTimeout(() => y(i), 150));
	}), c.addEventListener(`pointerleave`, (t) => {
		if (t.pointerType !== `mouse` || !f()) return;
		l.clearTimeout(p);
		let n = h();
		if (!n) return;
		let r = s(n), i = {
			x: t.clientX,
			y: t.clientY
		};
		r && e(m, i, r.getBoundingClientRect(), d()) || (p = l.setTimeout(() => v(n), 150));
	}), c.addEventListener(`pointerenter`, () => l.clearTimeout(p)), u.addEventListener(`pointerdown`, (e) => {
		c.contains(e.target) || v();
	});
}
document.querySelectorAll(`[data-group-nav]`).forEach((e) => c(e));
