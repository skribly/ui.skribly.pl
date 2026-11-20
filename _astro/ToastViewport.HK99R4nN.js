import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t, t as n } from "./react-dom.B9zIfLd2.js";
import { $ as r, $t as i, Bt as a, F as o, Gt as s, H as c, Ht as l, Kt as u, N as d, Nt as f, Ot as p, P as m, Qt as h, Xt as g, Yt as _, _ as v, a as y, c as b, d as x, en as ee, g as S, i as te, kt as ne, o as re, rt as C, s as ie, tn as w, v as ae, y as T } from "./useOverflow.Dq483xd0.js";
import { n as E } from "./useLocalizedStringFormatter.CDC-m-oP.js";
import { t as oe } from "./shim.DIVImME0.js";
import { n as se, t as ce } from "./Text.DXbJB4jb.js";
import { n as le, t as ue } from "./PortalProvider.C0xkHnu_.js";
var D = {};
D = {
	close: `إغلاق`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} \u{625}\u{634}\u{639}\u{627}\u{631}`,
		other: () => `${t.number(e.count)} \u{625}\u{634}\u{639}\u{627}\u{631}\u{627}\u{62A}`
	})}.`
};
var O = {};
O = {
	close: `Затвори`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} \u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{438}\u{435}`,
		other: () => `${t.number(e.count)} \u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{438}\u{44F}`
	})}.`
};
var k = {};
k = {
	close: `Zavřít`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} ozn\xe1men\xed`,
		other: () => `${t.number(e.count)} ozn\xe1men\xed`
	})}.`
};
var A = {};
A = {
	close: `Luk`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} besked`,
		other: () => `${t.number(e.count)} beskeder`
	})}.`
};
var j = {};
j = {
	close: `Schließen`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} Benachrichtigung`,
		other: () => `${t.number(e.count)} Benachrichtigungen`
	})}.`
};
var M = {};
M = {
	close: `Κλείσιμο`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} \u{3B5}\u{3B9}\u{3B4}\u{3BF}\u{3C0}\u{3BF}\u{3AF}\u{3B7}\u{3C3}\u{3B7}`,
		other: () => `${t.number(e.count)} \u{3B5}\u{3B9}\u{3B4}\u{3BF}\u{3C0}\u{3BF}\u{3B9}\u{3AE}\u{3C3}\u{3B5}\u{3B9}\u{3C2}`
	})}.`
};
var N = {};
N = {
	close: `Close`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} notification`,
		other: () => `${t.number(e.count)} notifications`
	})}.`
};
var P = {};
P = {
	close: `Cerrar`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} notificaci\xf3n`,
		other: () => `${t.number(e.count)} notificaciones`
	})}.`
};
var F = {};
F = {
	close: `Sule`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} teatis`,
		other: () => `${t.number(e.count)} teatist`
	})}.`
};
var I = {};
I = {
	close: `Sulje`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} ilmoitus`,
		other: () => `${t.number(e.count)} ilmoitusta`
	})}.`
};
var L = {};
L = {
	close: `Fermer`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} notification`,
		other: () => `${t.number(e.count)} notifications`
	})}.`
};
var R = {};
R = {
	close: `סגור`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} \u{5D4}\u{5EA}\u{5E8}\u{5D0}\u{5D4}`,
		other: () => `${t.number(e.count)} \u{5D4}\u{5EA}\u{5E8}\u{5D0}\u{5D5}\u{5EA}`
	})}.`
};
var z = {};
z = {
	close: `Zatvori`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} obavijest`,
		other: () => `${t.number(e.count)} obavijesti`
	})}.`
};
var B = {};
B = {
	close: `Bezárás`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} \xe9rtes\xedt\xe9s`,
		other: () => `${t.number(e.count)} \xe9rtes\xedt\xe9s`
	})}.`
};
var V = {};
V = {
	close: `Chiudi`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} notifica`,
		other: () => `${t.number(e.count)} notifiche`
	})}.`
};
var H = {};
H = {
	close: `閉じる`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} \u{500B}\u{306E}\u{901A}\u{77E5}`,
		other: () => `${t.number(e.count)} \u{500B}\u{306E}\u{901A}\u{77E5}`
	})}\u{3002}`
};
var U = {};
U = {
	close: `닫기`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)}\u{AC1C} \u{C54C}\u{B9BC}`,
		other: () => `${t.number(e.count)}\u{AC1C} \u{C54C}\u{B9BC}`
	})}.`
};
var W = {};
W = {
	close: `Uždaryti`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} prane\u{161}imas`,
		other: () => `${t.number(e.count)} prane\u{161}imai`
	})}.`
};
var G = {};
G = {
	close: `Aizvērt`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} pazi\u{146}ojums`,
		other: () => `${t.number(e.count)} pazi\u{146}ojumi`
	})}.`
};
var K = {};
K = {
	close: `Lukk`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} varsling`,
		other: () => `${t.number(e.count)} varsler`
	})}.`
};
var q = {};
q = {
	close: `Sluiten`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} melding`,
		other: () => `${t.number(e.count)} meldingen`
	})}.`
};
var de = {};
de = {
	close: `Zamknij`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} powiadomienie`,
		few: () => `${t.number(e.count)} powiadomienia`,
		many: () => `${t.number(e.count)} powiadomie\u{144}`,
		other: () => `${t.number(e.count)} powiadomienia`
	})}.`
};
var fe = {};
fe = {
	close: `Fechar`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} notifica\xe7\xe3o`,
		other: () => `${t.number(e.count)} notifica\xe7\xf5es`
	})}.`
};
var pe = {};
pe = {
	close: `Fechar`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} notifica\xe7\xe3o`,
		other: () => `${t.number(e.count)} notifica\xe7\xf5es`
	})}.`
};
var me = {};
me = {
	close: `Închideţi`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} notificare`,
		other: () => `${t.number(e.count)} notific\u{103}ri`
	})}.`
};
var he = {};
he = {
	close: `Закрыть`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} \u{443}\u{432}\u{435}\u{434}\u{43E}\u{43C}\u{43B}\u{435}\u{43D}\u{438}\u{435}`,
		other: () => `${t.number(e.count)} \u{443}\u{432}\u{435}\u{434}\u{43E}\u{43C}\u{43B}\u{435}\u{43D}\u{438}\u{44F}`
	})}.`
};
var ge = {};
ge = {
	close: `Zatvoriť`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} ozn\xe1menie`,
		few: () => `${t.number(e.count)} ozn\xe1menia`,
		other: () => `${t.number(e.count)} ozn\xe1men\xed`
	})}.`
};
var _e = {};
_e = {
	close: `Zapri`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} obvestilo`,
		two: () => `${t.number(e.count)} obvestili`,
		few: () => `${t.number(e.count)} obvestila`,
		other: () => `${t.number(e.count)} obvestil`
	})}.`
};
var ve = {};
ve = {
	close: `Zatvori`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} obave\u{161}tenje`,
		other: () => `${t.number(e.count)} obave\u{161}tenja`
	})}.`
};
var ye = {};
ye = {
	close: `Stäng`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} meddelande`,
		other: () => `${t.number(e.count)} meddelanden`
	})}.`
};
var be = {};
be = {
	close: `Kapat`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} bildirim`,
		other: () => `${t.number(e.count)} bildirim`
	})}.`
};
var xe = {};
xe = {
	close: `Закрити`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} \u{441}\u{43F}\u{43E}\u{432}\u{456}\u{449}\u{435}\u{43D}\u{43D}\u{44F}`,
		other: () => `${t.number(e.count)} \u{441}\u{43F}\u{43E}\u{432}\u{456}\u{449}\u{435}\u{43D}\u{43D}\u{44F}`
	})}.`
};
var Se = {};
Se = {
	close: `关闭`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} \u{4E2A}\u{901A}\u{77E5}`,
		other: () => `${t.number(e.count)} \u{4E2A}\u{901A}\u{77E5}`
	})}\u{3002}`
};
var Ce = {};
Ce = {
	close: `關閉`,
	notifications: (e, t) => `${t.plural(e.count, {
		one: () => `${t.number(e.count)} \u{500B}\u{901A}\u{77E5}`,
		other: () => `${t.number(e.count)} \u{500B}\u{901A}\u{77E5}`
	})}\u{3002}`
};
var J = {};
J = {
	"ar-AE": D,
	"bg-BG": O,
	"cs-CZ": k,
	"da-DK": A,
	"de-DE": j,
	"el-GR": M,
	"en-US": N,
	"es-ES": P,
	"et-EE": F,
	"fi-FI": I,
	"fr-FR": L,
	"he-IL": R,
	"hr-HR": z,
	"hu-HU": B,
	"it-IT": V,
	"ja-JP": H,
	"ko-KR": U,
	"lt-LT": W,
	"lv-LV": G,
	"nb-NO": K,
	"nl-NL": q,
	"pl-PL": de,
	"pt-BR": fe,
	"pt-PT": pe,
	"ro-RO": me,
	"ru-RU": he,
	"sk-SK": ge,
	"sl-SI": _e,
	"sr-SP": ve,
	"sv-SE": ye,
	"tr-TR": be,
	"uk-UA": xe,
	"zh-CN": Se,
	"zh-TW": Ce
};
var Y = e(t(), 1);
function we(e) {
	return e && e.__esModule ? e.default : e;
}
function Te(e, t, n) {
	let { key: r, timer: a, timeout: o } = e.toast;
	(0, Y.useEffect)(() => {
		if (a != null && o != null) return a.reset(o), () => {
			a.pause();
		};
	}, [a, o]);
	let s = i(), l = h(), u = E(we(J), `@react-aria/toast`), [d, f] = (0, Y.useState)(!1);
	return w(() => {
		f(!0);
	}, []), {
		toastProps: {
			...c(e, { labelable: !0 }),
			role: `alertdialog`,
			"aria-modal": `false`,
			"aria-labelledby": e[`aria-labelledby`] || s,
			"aria-describedby": e[`aria-describedby`] || l,
			tabIndex: 0
		},
		contentProps: {
			role: `alert`,
			"aria-atomic": `true`,
			"aria-hidden": d ? void 0 : `true`
		},
		titleProps: { id: s },
		descriptionProps: { id: l },
		closeButtonProps: {
			"aria-label": u.format(`close`),
			onPress: () => t.close(r)
		}
	};
}
var Ee = oe(), De = 1, X = Symbol.for(`react-aria-landmark-manager`);
function Oe(e) {
	return document.addEventListener(`react-aria-landmark-manager-change`, e), () => document.removeEventListener(`react-aria-landmark-manager-change`, e);
}
function ke() {
	if (typeof document > `u`) return null;
	let e = document[X];
	return e && e.version >= De ? e : (document[X] = new je(), document.dispatchEvent(new CustomEvent(`react-aria-landmark-manager-change`)), document[X]);
}
function Ae() {
	return (0, Ee.useSyncExternalStore)(Oe, ke, ke);
}
var je = class {
	constructor() {
		this.landmarks = [], this.isListening = !1, this.refCount = 0, this.version = De, this.f6Handler = this.f6Handler.bind(this), this.focusinHandler = this.focusinHandler.bind(this), this.focusoutHandler = this.focusoutHandler.bind(this);
	}
	setupIfNeeded() {
		this.isListening ||= (document.addEventListener(`keydown`, this.f6Handler, { capture: !0 }), document.addEventListener(`focusin`, this.focusinHandler, { capture: !0 }), document.addEventListener(`focusout`, this.focusoutHandler, { capture: !0 }), !0);
	}
	teardownIfNeeded() {
		!this.isListening || this.landmarks.length > 0 || this.refCount > 0 || (document.removeEventListener(`keydown`, this.f6Handler, { capture: !0 }), document.removeEventListener(`focusin`, this.focusinHandler, { capture: !0 }), document.removeEventListener(`focusout`, this.focusoutHandler, { capture: !0 }), this.isListening = !1);
	}
	focusLandmark(e, t) {
		this.landmarks.find((t) => t.ref.current === e)?.focus?.(t);
	}
	getLandmarksByRole(e) {
		return new Set(this.landmarks.filter((t) => t.role === e));
	}
	getLandmarkByRole(e) {
		return this.landmarks.find((t) => t.role === e);
	}
	addLandmark(e) {
		if (this.setupIfNeeded(), this.landmarks.find((t) => t.ref === e.ref) || !e.ref.current) return;
		if (this.landmarks.filter((e) => e.role === `main`).length, this.landmarks.length === 0) {
			this.landmarks = [e], this.checkLabels(e.role);
			return;
		}
		let t = 0, n = this.landmarks.length - 1;
		for (; t <= n;) {
			let r = Math.floor((t + n) / 2), i = e.ref.current.compareDocumentPosition(this.landmarks[r].ref.current);
			i & Node.DOCUMENT_POSITION_PRECEDING || i & Node.DOCUMENT_POSITION_CONTAINS ? t = r + 1 : n = r - 1;
		}
		this.landmarks.splice(t, 0, e), this.checkLabels(e.role);
	}
	updateLandmark(e) {
		let t = this.landmarks.findIndex((t) => t.ref === e.ref);
		t >= 0 && (this.landmarks[t] = {
			...this.landmarks[t],
			...e
		}, this.checkLabels(this.landmarks[t].role));
	}
	removeLandmark(e) {
		this.landmarks = this.landmarks.filter((t) => t.ref !== e), this.teardownIfNeeded();
	}
	checkLabels(e) {
		let t = this.getLandmarksByRole(e);
		t.size > 1 && [...t].filter((e) => !e.label).length;
	}
	closestLandmark(e) {
		let t = new Map(this.landmarks.map((e) => [e.ref.current, e])), n = e;
		for (; n && !t.has(n) && n !== document.body && n.parentElement;) n = n.parentElement;
		return t.get(n);
	}
	getNextLandmark(e, { backward: t }) {
		let n = this.closestLandmark(e), r = t ? this.landmarks.length - 1 : 0;
		n && (r = this.landmarks.indexOf(n) + (t ? -1 : 1));
		let i = () => {
			if (r < 0) {
				if (!e.dispatchEvent(new CustomEvent(`react-aria-landmark-navigation`, {
					detail: { direction: `backward` },
					bubbles: !0,
					cancelable: !0
				}))) return !0;
				r = this.landmarks.length - 1;
			} else if (r >= this.landmarks.length) {
				if (!e.dispatchEvent(new CustomEvent(`react-aria-landmark-navigation`, {
					detail: { direction: `forward` },
					bubbles: !0,
					cancelable: !0
				}))) return !0;
				r = 0;
			}
			return r < 0 || r >= this.landmarks.length;
		};
		if (i()) return;
		let a = r;
		for (; this.landmarks[r].ref.current?.closest(`[aria-hidden=true]`);) {
			if (r += t ? -1 : 1, i()) return;
			if (r === a) break;
		}
		return this.landmarks[r];
	}
	f6Handler(e) {
		e.key === `F6` && (e.altKey ? this.focusMain() : this.navigate(f(e), e.shiftKey)) && (e.preventDefault(), e.stopPropagation());
	}
	focusMain() {
		let e = this.getLandmarkByRole(`main`);
		return e && e.ref.current && e.ref.current.isConnected ? (this.focusLandmark(e.ref.current, `forward`), !0) : !1;
	}
	navigate(e, t) {
		let n = this.getNextLandmark(e, { backward: t });
		if (!n) return !1;
		if (n.lastFocused) {
			let e = n.lastFocused;
			if (ne(document.body, e)) return e.focus(), !0;
		}
		return n.ref.current && n.ref.current.isConnected ? (this.focusLandmark(n.ref.current, t ? `backward` : `forward`), !0) : !1;
	}
	focusinHandler(e) {
		let t = this.closestLandmark(f(e));
		t && t.ref.current !== f(e) && this.updateLandmark({
			ref: t.ref,
			lastFocused: f(e)
		});
		let n = e.relatedTarget;
		if (n) {
			let e = this.closestLandmark(n);
			e && e.ref.current === n && e.blur();
		}
	}
	focusoutHandler(e) {
		let t = f(e), n = e.relatedTarget;
		if (!n || n === document) {
			let e = this.closestLandmark(t);
			e && e.ref.current === t && e.blur();
		}
	}
	createLandmarkController() {
		let e = this;
		return e.refCount++, e.setupIfNeeded(), {
			navigate(t, n) {
				let r = n?.from || document.activeElement;
				return e.navigate(r, t === `backward`);
			},
			focusNext(t) {
				let n = t?.from || document.activeElement;
				return e.navigate(n, !1);
			},
			focusPrevious(t) {
				let n = t?.from || document.activeElement;
				return e.navigate(n, !0);
			},
			focusMain() {
				return e.focusMain();
			},
			dispose() {
				e &&= (e.refCount--, e.teardownIfNeeded(), null);
			}
		};
	}
	registerLandmark(e) {
		return this.landmarks.find((t) => t.ref === e.ref) ? this.updateLandmark(e) : this.addLandmark(e), () => this.removeLandmark(e.ref);
	}
};
function Me(e, t) {
	let { role: n, "aria-label": r, "aria-labelledby": i, focus: a } = e, o = Ae(), s = r || i, [c, l] = (0, Y.useState)(!1), u = (0, Y.useCallback)(() => {
		l(!0);
	}, [l]), d = (0, Y.useCallback)(() => {
		l(!1);
	}, [l]);
	return w(() => {
		if (o) return o.registerLandmark({
			ref: t,
			label: s,
			role: n,
			focus: a || u,
			blur: d
		});
	}, [
		o,
		s,
		t,
		n,
		a,
		u,
		d
	]), (0, Y.useEffect)(() => {
		c && t.current?.focus();
	}, [c, t]), { landmarkProps: {
		role: n,
		tabIndex: c ? -1 : void 0,
		"aria-label": r,
		"aria-labelledby": i
	} };
}
function Ne(e) {
	return e && e.__esModule ? e.default : e;
}
function Pe(e, t, n) {
	let r = E(Ne(J), `@react-aria/toast`), { landmarkProps: i } = Me({
		role: `region`,
		"aria-label": e[`aria-label`] || r.format(`notifications`, { count: t.visibleToasts.length })
	}, n), a = (0, Y.useRef)(!1), s = (0, Y.useRef)(!1), c = (0, Y.useCallback)(() => {
		a.current || s.current ? t.pauseAll() : t.resumeAll();
	}, [t]), { hoverProps: l } = d({
		onHoverStart: () => {
			a.current = !0, c();
		},
		onHoverEnd: () => {
			a.current = !1, c();
		}
	}), u = (0, Y.useRef)([]), m = (0, Y.useRef)(t.visibleToasts), h = (0, Y.useRef)(null);
	w(() => {
		if (h.current === -1 || t.visibleToasts.length === 0 || !n.current) {
			u.current = [], m.current = t.visibleToasts;
			return;
		}
		if (u.current = [...n.current.querySelectorAll(`[role="alertdialog"]`)], m.current.length === t.visibleToasts.length && t.visibleToasts.every((e, t) => e.key === m.current[t].key)) {
			m.current = t.visibleToasts;
			return;
		}
		let e = m.current.map((e, n) => ({
			...e,
			i: n,
			isRemoved: !t.visibleToasts.some((t) => e.key === t.key)
		})), r = e.findIndex((e) => e.i === h.current && e.isRemoved);
		if (r > -1) {
			if (C() === `pointer` && _.current?.isConnected) p(_.current);
			else {
				let t = 0, n, i;
				for (; t <= r;) e[t].isRemoved || (i = Math.max(0, t - 1)), t++;
				for (; t < e.length;) {
					if (!e[t].isRemoved) {
						n = t - 1;
						break;
					}
					t++;
				}
				i === void 0 && n === void 0 && (i = 0), i >= 0 && i < u.current.length ? p(u.current[i]) : n >= 0 && n < u.current.length && p(u.current[n]);
			}
		}
		m.current = t.visibleToasts;
	}, [t.visibleToasts, n]);
	let _ = (0, Y.useRef)(null), { focusWithinProps: v } = o({
		onFocusWithin: (e) => {
			s.current = !0, _.current = e.relatedTarget, c();
		},
		onBlurWithin: () => {
			s.current = !1, _.current = null, c();
		}
	});
	return (0, Y.useEffect)(() => {
		t.visibleToasts.length === 0 && _.current?.isConnected && (C() === `pointer` ? p(_.current) : _.current.focus(), _.current = null);
	}, [n, t.visibleToasts.length]), (0, Y.useEffect)(() => () => {
		_.current?.isConnected && (C() === `pointer` ? p(_.current) : _.current.focus(), _.current = null);
	}, [n]), { regionProps: g(i, l, v, {
		tabIndex: -1,
		"data-react-aria-top-layer": !0,
		onFocus: (e) => {
			let t = f(e).closest(`[role="alertdialog"]`);
			h.current = u.current.findIndex((e) => e === t);
		},
		onBlur: () => {
			h.current = -1;
		}
	}) };
}
function Fe(e) {
	let t = (0, Y.useCallback)((t) => e.subscribe(t), [e]), n = (0, Y.useCallback)(() => e.visibleToasts, [e]);
	return {
		visibleToasts: (0, Ee.useSyncExternalStore)(t, n, n),
		add: (t, n) => e.add(t, n),
		close: (t) => e.close(t),
		pauseAll: () => e.pauseAll(),
		resumeAll: () => e.resumeAll()
	};
}
var Ie = class {
	constructor(e) {
		this.queue = [], this.subscriptions = new Set(), this.visibleToasts = [], this.maxVisibleToasts = e?.maxVisibleToasts ?? 1 / 0, this.wrapUpdate = e?.wrapUpdate;
	}
	runWithWrapUpdate(e, t) {
		this.wrapUpdate ? this.wrapUpdate(e, t) : e();
	}
	subscribe(e) {
		return this.subscriptions.add(e), () => this.subscriptions.delete(e);
	}
	add(e, t = {}) {
		let n = `_` + Math.random().toString(36).slice(2), r = {
			...t,
			content: e,
			key: n,
			timer: t.timeout ? new Le(() => this.close(n), t.timeout) : void 0
		};
		return this.queue.unshift(r), this.updateVisibleToasts(`add`), n;
	}
	close(e) {
		let t = this.queue.findIndex((t) => t.key === e);
		t >= 0 && (this.queue[t].onClose?.(), this.queue.splice(t, 1)), this.updateVisibleToasts(`remove`);
	}
	updateVisibleToasts(e) {
		this.visibleToasts = this.queue.slice(0, this.maxVisibleToasts), this.runWithWrapUpdate(() => {
			for (let e of this.subscriptions) e();
		}, e);
	}
	pauseAll() {
		for (let e of this.visibleToasts) e.timer && e.timer.pause();
	}
	resumeAll() {
		for (let e of this.visibleToasts) e.timer && e.timer.resume();
	}
	clear() {
		this.queue = [], this.updateVisibleToasts(`clear`);
	}
}, Le = class {
	constructor(e, t) {
		this.startTime = null, this.remaining = t, this.callback = e;
	}
	reset(e) {
		this.remaining = e, this.resume();
	}
	pause() {
		this.timerId != null && (clearTimeout(this.timerId), this.timerId = null, this.remaining -= Date.now() - this.startTime);
	}
	resume() {
		this.remaining <= 0 || (this.startTime = Date.now(), this.timerId = setTimeout(() => {
			this.timerId = null, this.remaining = 0, this.callback();
		}, this.remaining));
	}
}, Re = e(n(), 1), Z = (0, Y.createContext)(null), ze = (0, Y.forwardRef)(function(e, t) {
	let n = ee(), i = Fe(e.queue), a = _(t), { regionProps: o } = Pe(e, i, a), { focusProps: s, isFocused: f, isFocusVisible: p } = m(), { hoverProps: h, isHovered: v } = d({}), y = l({
		...e,
		children: void 0,
		defaultClassName: `react-aria-ToastRegion`,
		values: {
			visibleToasts: i.visibleToasts,
			isHovered: v,
			isFocused: f,
			isFocusVisible: p
		}
	}), { direction: b } = r(), x, { getContainer: S } = le();
	n || (x = document.body, S && (x = S()));
	let te = c(e, { global: !0 }), ne = Y.createElement(Z.Provider, { value: i }, Y.createElement(u.div, {
		...g(te, y, o, s, h),
		dir: b,
		ref: a,
		"data-hovered": v || void 0,
		"data-focused": f || void 0,
		"data-focus-visible": p || void 0
	}, typeof e.children == `function` ? Y.createElement(Be, {
		...e,
		render: void 0,
		className: void 0,
		style: { display: `contents` }
	}, e.children) : e.children));
	return i.visibleToasts.length > 0 && x ? (0, Re.createPortal)(ne, x) : null;
}), Be = (0, Y.forwardRef)(function(e, t) {
	let n = (0, Y.useContext)(Z), { hoverProps: r, isHovered: i } = d({}), a = l({
		...e,
		children: void 0,
		defaultClassName: `react-aria-ToastList`,
		values: {
			visibleToasts: n.visibleToasts,
			isFocused: !1,
			isFocusVisible: !1,
			isHovered: i
		}
	});
	return Y.createElement(u.ol, {
		...r,
		...a,
		ref: t
	}, n.visibleToasts.map((t) => Y.createElement(`li`, {
		key: t.key,
		style: { display: `contents` }
	}, e.children({ toast: t }))));
}), Ve = (0, Y.forwardRef)(function(e, t) {
	let n = (0, Y.useContext)(Z), r = _(t), { toastProps: i, contentProps: o, titleProps: d, descriptionProps: f, closeButtonProps: p } = Te(e, n, r), { focusProps: h, isFocused: v, isFocusVisible: y } = m(), b = l({
		...e,
		defaultClassName: `react-aria-Toast`,
		values: {
			toast: e.toast,
			isFocused: v,
			isFocusVisible: y
		}
	}), x = c(e, { global: !0 });
	return Y.createElement(u.div, {
		...g(x, b, i, h),
		ref: r,
		"data-focused": v || void 0,
		"data-focus-visible": y || void 0
	}, Y.createElement(a, { values: [
		[He, o],
		[se, { slots: {
			[s]: {},
			title: d,
			description: f
		} }],
		[ae, { slots: {
			[s]: {},
			close: p
		} }]
	] }, b.children));
}), He = (0, Y.createContext)({}), Q = S();
function Ue({ tone: e = `info`, title: t, toneLabel: n, actions: r, sticky: i = !1, live: a, onDismiss: o, dismissLabel: s, className: c, children: l, ...u }) {
	let d = (0, Y.useId)(), f = a === `assertive` ? { role: `alert` } : a === `polite` ? { role: `status` } : {};
	return (0, Q.jsxs)(`section`, {
		"aria-labelledby": d,
		...u,
		...f,
		"data-tone": e,
		className: v(`flex w-full min-w-0 items-start gap-3 border-0 border-b px-4 py-2.5 text-body text-fg`, b[e], i && `sticky top-0 z-(--sk-z-sticky)`, c),
		children: [
			(0, Q.jsx)(re, {
				tone: e,
				className: `mt-0.5`
			}),
			(0, Q.jsxs)(`div`, {
				className: `flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-2`,
				children: [(0, Q.jsxs)(`div`, {
					className: `min-w-0 flex-[1_1_16rem] wrap-break-word`,
					children: [(0, Q.jsx)(`p`, {
						id: d,
						className: `font-semibold`,
						children: n ? (0, Q.jsxs)(Q.Fragment, { children: [
							(0, Q.jsx)(`span`, {
								className: `sr-only`,
								children: `${n}:`
							}),
							` `,
							(0, Q.jsx)(`span`, { children: t })
						] }) : t
					}), l ? (0, Q.jsx)(`div`, {
						className: `mt-0.5 [&_a]:underline`,
						children: l
					}) : null]
				}), r ? (0, Q.jsx)(`div`, {
					className: `flex flex-wrap items-center gap-2`,
					children: r
				}) : null]
			}),
			o ? (0, Q.jsx)(y, {
				label: s,
				onPress: o,
				className: `-my-1 -me-2`
			}) : null
		]
	});
}
function We() {
	let [e, t] = (0, Y.useState)([]), [n, r] = (0, Y.useState)([]), i = (0, Y.useRef)(new Set()), a = (0, Y.useRef)(0);
	(0, Y.useEffect)(() => {
		let e = i.current;
		return () => {
			for (let t of e) clearTimeout(t);
			e.clear();
		};
	}, []);
	let o = (0, Y.useCallback)((e, t) => {
		let n = setTimeout(() => {
			i.current.delete(n), e();
		}, t);
		i.current.add(n);
	}, []);
	return {
		announce: (0, Y.useCallback)((e, n) => {
			if (!e.trim()) return;
			let i = ++a.current, s = n === `assertive` ? r : t;
			o(() => s((t) => [...t, {
				id: i,
				text: e
			}]), 100), o(() => s((e) => e.filter((e) => e.id !== i)), 7e3);
		}, [o]),
		regions: (0, Y.useMemo)(() => (0, Q.jsxs)(Q.Fragment, { children: [(0, Q.jsx)(`output`, {
			"aria-live": `polite`,
			"aria-atomic": `false`,
			className: `sr-only`,
			children: e.map((e) => (0, Q.jsx)(`span`, {
				className: `block`,
				children: e.text
			}, e.id))
		}), (0, Q.jsx)(`div`, {
			role: `alert`,
			"aria-live": `assertive`,
			"aria-atomic": `false`,
			className: `sr-only`,
			children: n.map((e) => (0, Q.jsx)(`p`, { children: e.text }, e.id))
		})] }), [e, n])
	};
}
function Ge(...e) {
	return e.filter((e) => !!e?.trim()).map((e) => e.trim().replace(/[.:!?]$/, ``)).join(`. `);
}
function Ke({ messages: e, toneLabels: t, onDismiss: n, dismissLabel: r, focusError: i = !1, className: a, ...o }) {
	let { announce: s, regions: c } = We(), l = (0, Y.useRef)(new Set()), u = (0, Y.useRef)(null);
	return (0, Y.useEffect)(() => {
		let n = !1;
		for (let r of e) {
			if (l.current.has(r.id)) continue;
			if (l.current.add(r.id), i && !n && r.tone === `danger`) {
				let e = u.current?.querySelector(`[data-flash="${CSS.escape(r.id)}"]`);
				if (e) {
					e.focus(), n = !0;
					continue;
				}
			}
			let e = r.urgent ?? r.tone === `danger`;
			s(Ge(`${t[r.tone]}: ${r.title}`, r.description, ...r.items ?? []), e ? `assertive` : `polite`);
		}
	}, [
		e,
		t,
		i,
		s
	]), (0, Q.jsxs)(`div`, {
		...o,
		ref: u,
		className: v(`flex min-w-0 flex-col gap-2`, a),
		children: [e.map((e) => (0, Q.jsx)(qe, {
			message: e,
			toneLabel: t[e.tone],
			onDismiss: n,
			dismissLabel: r
		}, e.id)), c]
	});
}
function qe({ message: e, toneLabel: t, onDismiss: n, dismissLabel: r }) {
	let i = (0, Y.useCallback)(() => n?.(e.id), [n, e.id]), a = n && r ? {
		onDismiss: i,
		dismissLabel: r
	} : {}, o = e.items ?? [];
	return (0, Q.jsx)(te, {
		"data-flash": e.id,
		tabIndex: -1,
		tone: e.tone,
		toneLabel: t,
		title: e.title,
		...a,
		children: e.description || o.length > 0 ? (0, Q.jsxs)(Q.Fragment, { children: [e.description ? (0, Q.jsx)(`p`, { children: e.description }) : null, o.length > 0 ? (0, Q.jsx)(`ul`, {
			className: `mt-1`,
			children: o.map((e) => (0, Q.jsx)(`li`, { children: e }, e))
		}) : null] }) : null
	});
}
var Je = (0, Y.createContext)(null), $ = 5e3;
function Ye(e, t, n) {
	if (n !== null) {
		if (n !== void 0) return Math.max($, n);
		if (!(e.action || e.tone === `warn` || e.tone === `danger`)) return Math.max($, t);
	}
}
function Xe({ children: e, maxVisible: t = 3, timeout: n = 6e3 }) {
	let [r] = (0, Y.useState)(() => new Ie({ maxVisibleToasts: t })), i = (0, Y.useMemo)(() => {
		let e = (e, t = {}) => {
			let i = Ye(e, n, t.timeout);
			return r.add(e, {
				...i === void 0 ? {} : { timeout: i },
				...t.onClose ? { onClose: t.onClose } : {}
			});
		}, t = (t) => (n, r = {}, i) => e({
			...r,
			tone: t,
			title: n
		}, i);
		return {
			queue: r,
			api: {
				show: e,
				success: t(`ok`),
				info: t(`info`),
				warning: t(`warn`),
				error: t(`danger`),
				close: (e) => r.close(e),
				clear: () => r.clear()
			}
		};
	}, [r, n]);
	return (0, Q.jsx)(Je.Provider, {
		value: i,
		children: e
	});
}
function Ze() {
	let e = (0, Y.useContext)(Je);
	if (!e) throw Error(`useToast and ToastViewport need a ToastProvider above them.`);
	return e;
}
function Qe() {
	return Ze().api;
}
function $e() {
	return Ze().queue;
}
var et = {
	"bottom-end": `bottom-4 sm:end-4`,
	"bottom-center": `bottom-4 sm:start-1/2 sm:-translate-x-1/2 rtl:sm:translate-x-1/2`,
	"top-end": `top-4 sm:end-4`,
	"top-center": `top-4 sm:start-1/2 sm:-translate-x-1/2 rtl:sm:translate-x-1/2`
};
function tt(e) {
	return typeof HTMLElement < `u` && e instanceof HTMLElement;
}
function nt(e) {
	return {
		theme: e?.closest(`[data-theme]`)?.getAttribute(`data-theme`) ?? void 0,
		density: e?.closest(`[data-density]`)?.getAttribute(`data-density`) ?? void 0
	};
}
function rt({ toneLabels: e, closeLabel: t, regionLabel: n, placement: r = `bottom-end`, container: i, className: a }) {
	let o = $e(), s = (0, Y.useRef)(null), c = (0, Y.useRef)(new Set()), l = (0, Y.useRef)(e), [u, d] = (0, Y.useState)({
		theme: void 0,
		density: void 0
	}), { announce: f, regions: p } = We(), m = (0, Y.useMemo)(() => tt(i) ? () => i : null, [i]), h = i ? {
		theme: void 0,
		density: void 0
	} : u;
	(0, Y.useEffect)(() => {
		l.current = e;
	}, [e]), (0, Y.useEffect)(() => {
		let e = () => {
			let e = o.visibleToasts.filter((e) => !c.current.has(e.key));
			if (e.length !== 0) {
				d(nt(s.current));
				for (let t of e.toReversed()) {
					c.current.add(t.key);
					let { tone: e, title: n, description: r, urgent: i } = t.content;
					f(Ge(`${l.current[e]}: ${n}`, r), i ?? e === `danger` ? `assertive` : `polite`);
				}
			}
		};
		return e(), o.subscribe(e);
	}, [o, f]);
	let g = (0, Y.useCallback)((e) => o.close(e), [o]), _ = (0, Y.useCallback)(({ toast: n }) => (0, Q.jsx)(it, {
		toast: n,
		toneLabel: e[n.content.tone],
		closeLabel: t,
		onClose: g
	}), [
		e,
		t,
		g
	]), y = (0, Q.jsx)(ze, {
		queue: o,
		"aria-label": n,
		...h.theme ? { "data-theme": h.theme } : {},
		...h.density ? { "data-density": h.density } : {},
		className: v(`fixed inset-x-4 z-(--sk-z-toast) flex max-h-[calc(100dvh-2rem)] flex-col gap-2 overflow-y-auto overscroll-contain bg-transparent p-0.5 text-body text-fg outline-none sm:inset-x-auto sm:w-96`, et[r], a),
		children: _
	});
	return (0, Q.jsxs)(Q.Fragment, { children: [
		(0, Q.jsx)(`span`, {
			ref: s,
			hidden: !0
		}),
		p,
		m ? (0, Q.jsx)(ue, {
			getContainer: m,
			children: y
		}) : y
	] });
}
function it({ toast: e, toneLabel: t, closeLabel: n, onClose: r }) {
	let { tone: i, title: a, description: o, action: s } = e.content, c = (0, Y.useCallback)(() => {
		s?.onAction(), r(e.key);
	}, [
		s,
		r,
		e.key
	]), l = (0, Y.useRef)(null);
	return (0, Y.useEffect)(() => {
		let t = l.current;
		if (!t) return;
		let n = (t) => {
			t.key !== `Escape` || t.defaultPrevented || (t.preventDefault(), r(e.key));
		};
		return t.addEventListener(`keydown`, n), () => t.removeEventListener(`keydown`, n);
	}, [r, e.key]), (0, Q.jsxs)(Ve, {
		ref: l,
		toast: e,
		"data-tone": i,
		className: v(`flex w-full min-w-0 shrink-0 animate-rise items-start gap-3 rounded-lg border border-l-4 border-border bg-surface p-3 text-fg shadow-lg`, ie[i]),
		children: [
			(0, Q.jsx)(re, {
				tone: i,
				className: `mt-0.5`
			}),
			(0, Q.jsxs)(`div`, {
				className: `min-w-0 flex-1 wrap-break-word`,
				children: [
					(0, Q.jsxs)(ce, {
						slot: `title`,
						className: `block font-semibold`,
						children: [(0, Q.jsx)(`span`, {
							className: `sr-only`,
							children: `${t}:`
						}), ` ${a}`]
					}),
					o ? (0, Q.jsx)(ce, {
						slot: `description`,
						className: `mt-0.5 block text-muted`,
						children: o
					}) : null,
					s ? (0, Q.jsx)(T, {
						onPress: c,
						className: `mt-2 inline-flex h-control-sm cursor-default items-center rounded-md border border-border-strong bg-surface px-2.5 text-caption font-medium text-fg transition-colors data-hovered:bg-hover data-pressed:bg-selected`,
						children: s.label
					}) : null
				]
			}),
			(0, Q.jsx)(T, {
				slot: `close`,
				"aria-label": n,
				className: `-my-1 -me-1 inline-flex size-control-sm shrink-0 cursor-default items-center justify-center rounded-md border border-transparent text-muted transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected`,
				children: (0, Q.jsx)(x, {
					name: `action.close`,
					"aria-hidden": !0,
					focusable: `false`,
					className: `size-4`
				})
			})
		]
	});
}
export { Ue as a, Ke as i, Xe as n, Qe as r, rt as t };
