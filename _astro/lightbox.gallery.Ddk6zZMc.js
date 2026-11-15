import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { n } from "./react-dom.B9zIfLd2.js";
import { A as r, F as i, I as a } from "./doc.DoLlUurT.js";
import { n as o } from "./Dialog.B6qxF5fw.js";
import { n as s, t as c } from "./Modal.D5JxyBzm.js";
import { t as l } from "./IconButton.CO9JIdQj.js";
import { r as u } from "./portal.-REG5w-J.js";
var d = t(n(), 1), f = 1.5, p = {
	scale: 1,
	x: 0,
	y: 0
};
function m(e) {
	return Math.min(5, Math.max(1, e));
}
function h(e, t, n) {
	let r = m(e.scale);
	if (r === 1) return p;
	let i = Math.max(0, (n.width * r - t.width) / 2), a = Math.max(0, (n.height * r - t.height) / 2);
	return {
		scale: r,
		x: Math.min(i, Math.max(-i, e.x)),
		y: Math.min(a, Math.max(-a, e.y))
	};
}
function g(e, t, n, r, i) {
	let a = m(t), o = a / e.scale;
	return h({
		scale: a,
		x: n.x - (n.x - e.x) * o,
		y: n.y - (n.y - e.y) * o
	}, r, i);
}
function _(e, t, n, r, i) {
	return g(e, e.scale * t, n, r, i);
}
function v(e, t, n, r, i) {
	return h({
		...e,
		x: e.x + t,
		y: e.y + n
	}, r, i);
}
function y(e, t) {
	return Math.hypot(e.x - t.x, e.y - t.y);
}
function b(e, t) {
	return {
		x: (e.x + t.x) / 2,
		y: (e.y + t.y) / 2
	};
}
function x(e, t) {
	return Math.abs(e) < 48 || Math.abs(e) < Math.abs(t) * 1.5 ? 0 : e < 0 ? 1 : -1;
}
function S(e, t, n) {
	return Math.min(n - 1, Math.max(0, e + t));
}
var C = i(), w = 48, T = .0015;
function E(e) {
	let t = (0, d.useRef)(e);
	return (0, d.useLayoutEffect)(() => {
		t.current = e;
	}), (0, d.useCallback)((...e) => t.current(...e), []);
}
function D() {
	return {
		width: 0,
		height: 0
	};
}
function O({ images: e, index: t, onIndexChange: n, isOpen: r, onOpenChange: i, labels: l, container: f, className: p }) {
	let m = e.length, h = (0, d.useCallback)(() => i(!1), [i]);
	return m === 0 ? null : (0, C.jsx)(s, {
		isOpen: r,
		onOpenChange: i,
		isDismissable: !0,
		...u(f),
		className: `fixed inset-0 z-(--sk-z-modal) bg-scrim data-entering:animate-fade data-exiting:animate-fade data-exiting:[animation-direction:reverse] motion-reduce:animate-none`,
		children: (0, C.jsx)(c, {
			className: `h-dvh w-full outline-none`,
			children: (0, C.jsx)(o, {
				"aria-label": l.dialog,
				className: a(`h-full w-full outline-none`, p),
				children: (0, C.jsx)(k, {
					images: e,
					index: Math.min(Math.max(t, 0), m - 1),
					onIndexChange: n,
					onClose: h,
					labels: l
				})
			})
		})
	});
}
function k({ images: e, index: t, onIndexChange: n, onClose: i, labels: o }) {
	let s = e.length, c = e[t], u = (0, d.useRef)(null), m = (0, d.useRef)(null), [O, k] = (0, d.useState)(p), [j, M] = (0, d.useState)(t), N = (0, d.useRef)(new Map()), P = (0, d.useRef)(null), F = (0, d.useRef)(0), I = (0, d.useRef)(0), L = k, R = (0, d.useCallback)(() => {
		let e = u.current?.getBoundingClientRect(), t = m.current;
		return !e || !t ? {
			stage: D(),
			fitted: D()
		} : {
			stage: {
				width: e.width,
				height: e.height
			},
			fitted: {
				width: t.offsetWidth,
				height: t.offsetHeight
			}
		};
	}, []), z = (0, d.useCallback)((e) => {
		let t = u.current?.getBoundingClientRect();
		return t ? {
			x: e.clientX - t.left - t.width / 2,
			y: e.clientY - t.top - t.height / 2
		} : {
			x: 0,
			y: 0
		};
	}, []), B = (0, d.useCallback)((e, t = {
		x: 0,
		y: 0
	}) => {
		let { stage: n, fitted: r } = R();
		L(_(O, e, t, n, r));
	}, [
		R,
		L,
		O
	]), V = (0, d.useCallback)((e) => {
		let r = S(t, e, s);
		r !== t && n(r);
	}, [
		s,
		t,
		n
	]);
	j !== t && (M(t), k(p));
	let H = E((e) => {
		e.preventDefault();
		let { stage: t, fitted: n } = R(), r = u.current?.getBoundingClientRect();
		if (!r) return;
		let i = {
			x: e.clientX - r.left - r.width / 2,
			y: e.clientY - r.top - r.height / 2
		};
		L(g(O, O.scale * Math.exp(-e.deltaY * T * (e.ctrlKey ? 4 : 1)), i, t, n));
	});
	(0, d.useEffect)(() => {
		let e = u.current;
		return e?.addEventListener(`wheel`, H, { passive: !1 }), () => e?.removeEventListener(`wheel`, H);
	}, [H]);
	let U = (e) => {
		if (I.current = Date.now(), O.scale > 1) {
			L(p);
			return;
		}
		let { stage: t, fitted: n } = R();
		L(g(p, 2.5, z(e), t, n));
	}, W = E((e) => {
		e.currentTarget.setPointerCapture?.(e.pointerId), N.current.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		let [t, n] = [...N.current.values()];
		P.current = {
			start: {
				x: e.clientX,
				y: e.clientY
			},
			origin: O,
			pinch: t && n ? y(t, n) : 0,
			moved: !1
		};
	}), G = E((e) => {
		let t = N.current.get(e.pointerId), n = P.current;
		if (!t || !n) return;
		N.current.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		let { stage: r, fitted: i } = R(), [a, o] = [...N.current.values()];
		if (a && o && n.pinch > 0) {
			let e = b(a, o), t = u.current?.getBoundingClientRect(), s = t ? {
				x: e.x - t.left - t.width / 2,
				y: e.y - t.top - t.height / 2
			} : {
				x: 0,
				y: 0
			};
			n.moved = !0, L(g(n.origin, n.origin.scale * (y(a, o) / n.pinch), s, r, i));
			return;
		}
		let s = e.clientX - n.start.x, c = e.clientY - n.start.y;
		Math.abs(s) + Math.abs(c) > 4 && (n.moved = !0), n.origin.scale > 1 && L(h({
			...n.origin,
			x: n.origin.x + s,
			y: n.origin.y + c
		}, r, i));
	}), K = E((e) => {
		let t = P.current, n = N.current.size > 1;
		if (N.current.delete(e.pointerId), !t) return;
		if (N.current.size > 0) {
			let [e] = [...N.current.values()];
			e && (P.current = {
				start: e,
				origin: O,
				pinch: 0,
				moved: !0
			});
			return;
		}
		if (P.current = null, n) return;
		let r = e.clientX - t.start.x, i = e.clientY - t.start.y;
		if (t.origin.scale === 1 && O.scale === 1) {
			let e = x(r, i);
			if (e !== 0) {
				V(e);
				return;
			}
		}
		if (!t.moved && e.pointerType !== `mouse`) {
			let t = e.timeStamp;
			t - F.current < 320 ? (F.current = 0, U(e)) : F.current = t;
		}
	}), q = E((e) => {
		Date.now() - I.current > 500 && U(e);
	}), J = E((e) => {
		if (e.altKey || e.ctrlKey || e.metaKey) return;
		let t = O.scale > 1, { stage: n, fitted: r } = R();
		switch (e.key) {
			case `+`:
			case `=`:
				B(f);
				break;
			case `-`:
			case `_`:
				B(1 / f);
				break;
			case `0`:
				L(p);
				break;
			case `ArrowLeft`:
				t ? L(v(O, w, 0, n, r)) : V(-1);
				break;
			case `ArrowRight`:
				t ? L(v(O, -48, 0, n, r)) : V(1);
				break;
			case `ArrowUp`:
				if (!t) return;
				L(v(O, 0, w, n, r));
				break;
			case `ArrowDown`:
				if (!t) return;
				L(v(O, 0, -48, n, r));
				break;
			case `Home`:
				V(-s);
				break;
			case `End`:
				V(s);
				break;
			default: return;
		}
		e.preventDefault();
	}), Y = O.scale > 1, X = (0, d.useMemo)(() => ({ transform: `translate(${O.x}px, ${O.y}px) scale(${O.scale})` }), [O]), Z = (0, d.useCallback)(() => B(f), [B]), Q = (0, d.useCallback)(() => B(1 / f), [B]), $ = (0, d.useCallback)(() => L(p), [L]), ee = (0, d.useCallback)(() => V(-1), [V]), te = (0, d.useCallback)(() => V(1), [V]);
	return (0, C.jsxs)(`div`, {
		role: `presentation`,
		className: `flex h-full flex-col bg-bg/95 text-fg`,
		onKeyDown: J,
		children: [
			(0, C.jsxs)(`div`, {
				className: `flex items-center gap-2 border-b border-border bg-surface px-3 py-2 pt-[max(0.5rem,env(safe-area-inset-top))]`,
				children: [
					(0, C.jsx)(`p`, {
						className: `min-w-0 flex-1 text-body font-medium text-muted tabular-nums`,
						"aria-live": `polite`,
						children: o.position(t + 1, s)
					}),
					(0, C.jsx)(l, {
						label: o.zoomOut,
						variant: `outline`,
						tooltip: !1,
						isDisabled: O.scale <= 1,
						onPress: Q,
						children: (0, C.jsx)(r, {
							name: `action.remove`,
							"aria-hidden": !0
						})
					}),
					(0, C.jsx)(l, {
						label: o.zoomReset,
						variant: `outline`,
						tooltip: !1,
						isDisabled: !Y,
						onPress: $,
						children: (0, C.jsx)(r, {
							name: `action.reset`,
							"aria-hidden": !0
						})
					}),
					(0, C.jsx)(l, {
						label: o.zoomIn,
						variant: `outline`,
						tooltip: !1,
						isDisabled: O.scale >= 5,
						onPress: Z,
						children: (0, C.jsx)(r, {
							name: `action.add`,
							"aria-hidden": !0
						})
					}),
					(0, C.jsx)(l, {
						label: o.close,
						variant: `outline`,
						tooltip: !1,
						autoFocus: !0,
						onPress: i,
						children: (0, C.jsx)(r, {
							name: `action.close`,
							"aria-hidden": !0
						})
					})
				]
			}),
			(0, C.jsxs)(`div`, {
				className: `relative min-h-0 flex-1`,
				children: [(0, C.jsx)(`div`, {
					ref: u,
					role: `presentation`,
					className: a(`absolute inset-0 flex touch-none items-center justify-center overflow-hidden select-none`, Y ? `cursor-grab active:cursor-grabbing` : `cursor-zoom-in`),
					onPointerDown: W,
					onPointerMove: G,
					onPointerUp: K,
					onPointerCancel: K,
					onDoubleClick: q,
					children: (0, C.jsx)(`img`, {
						ref: m,
						src: c.src,
						alt: c.alt,
						draggable: !1,
						style: X,
						className: `max-h-full max-w-full object-contain will-change-transform motion-safe:transition-transform motion-safe:duration-150`
					}, c.src)
				}), s > 1 ? (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)(l, {
					label: o.previous,
					variant: `outline`,
					tooltip: !1,
					isDisabled: t === 0,
					onPress: ee,
					className: `absolute top-1/2 left-2 -translate-y-1/2`,
					children: (0, C.jsx)(r, {
						name: `chevron.left`,
						"aria-hidden": !0
					})
				}), (0, C.jsx)(l, {
					label: o.next,
					variant: `outline`,
					tooltip: !1,
					isDisabled: t === s - 1,
					onPress: te,
					className: `absolute top-1/2 right-2 -translate-y-1/2`,
					children: (0, C.jsx)(r, {
						name: `chevron.right`,
						"aria-hidden": !0
					})
				})] }) : null]
			}),
			c.caption ? (0, C.jsx)(`p`, {
				className: `border-t border-border bg-surface px-4 py-2 text-center text-body text-fg`,
				children: c.caption
			}) : null,
			s > 1 ? (0, C.jsx)(`nav`, {
				"aria-label": o.thumbnails,
				className: `border-t border-border bg-surface pb-[env(safe-area-inset-bottom)]`,
				children: (0, C.jsx)(`ul`, {
					className: `m-0 flex list-none gap-2 overflow-x-auto p-2`,
					children: e.map((e, r) => (0, C.jsx)(A, {
						item: e,
						position: r,
						here: r === t,
						label: o.show(r + 1, e.alt),
						onSelect: n
					}, e.src))
				})
			}) : null
		]
	});
}
function A({ item: e, position: t, here: n, label: r, onSelect: i }) {
	let o = (0, d.useCallback)(() => i(t), [i, t]), s = (0, d.useRef)(null);
	return (0, d.useEffect)(() => {
		n && s.current?.scrollIntoView?.({
			block: `nearest`,
			inline: `center`
		});
	}, [n]), (0, C.jsx)(`li`, {
		className: `shrink-0`,
		children: (0, C.jsx)(`button`, {
			ref: s,
			type: `button`,
			"aria-label": r,
			"aria-current": n ? `true` : void 0,
			onClick: o,
			className: a(`block h-14 w-20 cursor-pointer overflow-hidden rounded-md border-2 bg-sunken p-0 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus`, n ? `border-accent` : `border-border opacity-80 hover:opacity-100`),
			children: (0, C.jsx)(`img`, {
				src: e.thumb ?? e.src,
				alt: ``,
				draggable: !1,
				className: `h-full w-full object-cover`
			})
		})
	});
}
var j = e({
	LightboxDemo: () => F,
	default: () => I,
	sample: () => N
});
function M(e, t) {
	let n = `<svg xmlns="http://www.w3.org/2000/svg" data-sk-drawn="sample" viewBox="0 0 320 180"><defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${e} 70% 72%)"/><stop offset="1" stop-color="hsl(${e + 30} 80% 88%)"/></linearGradient></defs><rect width="320" height="180" fill="url(#s)"/><circle cx="236" cy="56" r="22" fill="hsl(44 95% 66%)"/><path d="M0 132 70 70l46 40 54-58 70 64 34-26 46 42v48H0z" fill="hsl(${t} 34% 42%)"/><path d="M0 150c60-18 120-18 170-6s100 14 150-4v40H0z" fill="hsl(${t + 20} 40% 30%)"/></svg>`;
	return `data:image/svg+xml,${encodeURIComponent(n)}`;
}
var N = [
	`Harbour at dawn`,
	`Green meadow`,
	`North ridge`,
	`Dunes`,
	`Quiet lake`,
	`Pine hill`
].map((e, t) => ({
	src: M(180 + t * 28, 30 + t * 40),
	alt: e,
	caption: e
})), P = {
	dialog: `Image viewer`,
	close: `Close`,
	zoomIn: `Zoom in`,
	zoomOut: `Zoom out`,
	zoomReset: `Reset zoom`,
	previous: `Previous image`,
	next: `Next image`,
	thumbnails: `Images`,
	position: (e, t) => `${e} / ${t}`,
	show: (e, t) => `Show image ${e}: ${t}`
};
function F({ images: e, openAt: t }) {
	let [n, r] = (0, d.useState)(t ?? 0), [i, a] = (0, d.useState)(t !== void 0);
	return (0, C.jsxs)(C.Fragment, { children: [(0, C.jsx)(`ul`, {
		className: `m-0 flex list-none flex-wrap gap-2 p-0`,
		children: e.map((e, t) => (0, C.jsx)(`li`, { children: (0, C.jsx)(`button`, {
			type: `button`,
			className: `block h-16 w-28 cursor-zoom-in overflow-hidden rounded-md border border-border p-0`,
			onClick: () => {
				r(t), a(!0);
			},
			children: (0, C.jsx)(`img`, {
				src: e.src,
				alt: e.alt,
				className: `h-full w-full object-cover`
			})
		}) }, e.src))
	}), (0, C.jsx)(O, {
		images: e,
		index: n,
		onIndexChange: r,
		isOpen: i,
		onOpenChange: a,
		labels: P
	})] });
}
var I = {
	title: `Lightbox`,
	description: `A picture shown large over the page, with zoom, panning and a way through a group of pictures.`,
	pl: {
		title: `Lightbox`,
		description: `Zdjęcie pokazane dużo nad stroną, z powiększaniem, przesuwaniem i przechodzeniem po grupie zdjęć.`
	},
	demos: [{
		name: `Lightbox`,
		components: [`Lightbox`],
		description: `Opens a picture of a list in a full screen dialog. Zoom with the buttons, the wheel, a pinch or a double click, drag to pan while zoomed, move through a group with the arrows, a swipe or the thumbnails.`,
		accessibility: `A modal dialog named by the dialog label: focus starts on Close, stays inside and returns to the picture that opened it. Escape and a click on the backdrop close it. Plus, minus and 0 zoom, the arrow keys pan while zoomed and move between pictures otherwise, Home and End jump to the ends. The position is announced politely. Controls keep their words as labels, and motion drops out with reduced motion.`,
		pl: {
			related: {
				href: `/patterns/images/`,
				label: `Wzorzec obrazów`
			},
			description: `Otwiera zdjęcie z listy w oknie na cały ekran. Powiększysz je przyciskami, kółkiem, szczypnięciem lub dwukrotnym kliknięciem, przesuniesz przeciągając, a po grupie przejdziesz strzałkami, machnięciem lub miniaturami.`,
			accessibility: `Okno modalne nazwane etykietą okna: fokus zaczyna na przycisku zamknięcia, zostaje w środku i wraca do zdjęcia, które je otworzyło. Escape i kliknięcie tła zamykają okno. Plus, minus i 0 zmieniają powiększenie, strzałki przesuwają przy powiększeniu, a bez niego przechodzą między zdjęciami, Home i End skaczą na początek i koniec. Pozycja jest odczytywana uprzejmie. Teksty przycisków to etykiety, a ruch znika przy ograniczonym ruchu.`
		},
		usage: `<Lightbox
  images={[{ src: '/a.webp', alt: 'A harbour' }, { src: '/b.webp', alt: 'A meadow' }]}
  index={index}
  onIndexChange={setIndex}
  isOpen={open}
  onOpenChange={setOpen}
  labels={labels}
/>`,
		related: {
			href: `/patterns/images/`,
			label: `The image pattern`
		},
		render: () => (0, C.jsx)(F, { images: N })
	}, {
		name: `Lightbox, one picture`,
		components: [`Lightbox`],
		description: `One picture has no arrows, position or thumbnails; zoom and close stay.`,
		pl: { description: `Jeden obraz nie ma strzałek, pozycji ani miniatur; zostają powiększanie i zamknięcie.` },
		render: () => (0, C.jsx)(F, { images: N.slice(0, 1) })
	}]
};
export { j as n, N as r, F as t };
