import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, $t as n, Bt as r, D as i, F as a, H as o, Ht as s, Jt as c, Kt as l, L as u, Nt as d, O as f, S as p, St as m, T as h, Ut as g, Vt as _, X as v, Xt as y, Z as b, _t as x, j as S, jt as C, k as w, qt as T, tn as E, tt as D, v as O, wt as k, x as ee } from "./useOverflow.Dq483xd0.js";
import { r as A, t as te } from "./useFormReset.BBxMt31i.js";
import { c as j, i as ne, o as M } from "./useFormValidation.L_5g13Dg.js";
import { n as N } from "./Group.C0q10xim.js";
import { n as P, t as F } from "./useTextField.BpC71hWm.js";
import { n as I } from "./Text.DXbJB4jb.js";
import { n as L, t as R } from "./react-dom.B9zIfLd2.js";
import { n as re } from "./useLocalizedStringFormatter.CDC-m-oP.js";
import { t as z } from "./useEvent.BluGm8w8.js";
import { t as B } from "./useControlledState.DijOhE0s.js";
var V = RegExp(`^.*\\(.*\\).*$`), ie = [
	`latn`,
	`arab`,
	`hanidec`,
	`deva`,
	`beng`,
	`fullwide`
], H = class {
	constructor(e, t = {}) {
		this.locale = e, this.options = t;
	}
	parse(e) {
		return U(this.locale, this.options, e).parse(e);
	}
	isValidPartialNumber(e, t, n) {
		return U(this.locale, this.options, e).isValidPartialNumber(e, t, n);
	}
	getNumberingSystem(e) {
		return U(this.locale, this.options, e).options.numberingSystem;
	}
}, ae = new Map();
function U(e, t, n) {
	let r = oe(e, t);
	if (!e.includes(`-nu-`) && !r.isValidPartialNumber(n)) {
		for (let i of ie) if (i !== r.options.numberingSystem) {
			let r = oe(e + (e.includes(`-u-`) ? `-nu-` : `-u-nu-`) + i, t);
			if (r.isValidPartialNumber(n)) return r;
		}
	}
	return r;
}
function oe(e, t) {
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ``), r = ae.get(n);
	return r || (r = new se(e, t), ae.set(n, r)), r;
}
var se = class {
	constructor(e, t = {}) {
		this.locale = e, t.roundingIncrement !== 1 && t.roundingIncrement != null && (t.maximumFractionDigits == null && t.minimumFractionDigits == null ? (t.maximumFractionDigits = 0, t.minimumFractionDigits = 0) : t.maximumFractionDigits == null ? t.maximumFractionDigits = t.minimumFractionDigits : t.minimumFractionDigits ??= t.maximumFractionDigits), this.formatter = new Intl.NumberFormat(e, t), this.options = this.formatter.resolvedOptions(), this.symbols = le(e, this.formatter, this.options, t), this.options.style === `percent` && ((this.options.minimumFractionDigits ?? 0) > 18 || (this.options.maximumFractionDigits ?? 0) > 18) && console.warn(`NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.`);
	}
	parse(e) {
		let t = this.formatter.resolvedOptions().useGrouping, n = this.sanitize(e);
		if (!t && this.symbols.group && n.includes(this.symbols.group)) return NaN;
		if (this.symbols.group && (n = n.replaceAll(this.symbols.group, ``)), this.symbols.decimal && (n = n.replace(this.symbols.decimal, `.`)), this.symbols.minusSign && (n = n.replace(this.symbols.minusSign, `-`)), n = n.replace(this.symbols.numeral, this.symbols.index), this.options.style === `percent`) {
			let e = n.indexOf(`-`);
			n = n.replace(`-`, ``), n = n.replace(`+`, ``);
			let t = n.indexOf(`.`);
			t === -1 && (t = n.length), n = n.replace(`.`, ``), n = t - 2 == 0 ? `0.${n}` : t - 2 == -1 ? `0.0${n}` : t - 2 == -2 ? `0.00` : `${n.slice(0, t - 2)}.${n.slice(t - 2)}`, e > -1 && (n = `-${n}`);
		}
		let r = n ? +n : NaN;
		if (isNaN(r)) return NaN;
		if (this.options.style === `percent`) {
			let e = {
				...this.options,
				style: `decimal`,
				minimumFractionDigits: Math.min((this.options.minimumFractionDigits ?? 0) + 2, 20),
				maximumFractionDigits: Math.min((this.options.maximumFractionDigits ?? 0) + 2, 20)
			};
			return new H(this.locale, e).parse(new w(this.locale, e).format(r));
		}
		return this.options.currencySign === `accounting` && V.test(e) && (r = -1 * r), r;
	}
	sanitize(e) {
		let t = this.formatter.resolvedOptions().useGrouping;
		return this.symbols.noNumeralUnits.length > 0 && this.symbols.noNumeralUnits.find((t) => t.unit === e) ? this.symbols.noNumeralUnits.find((t) => t.unit === e).value.toString() : (e = e.replace(this.symbols.literals, ``), this.symbols.minusSign && (e = e.replace(`-`, this.symbols.minusSign)), this.options.numberingSystem === `arab` && (this.symbols.decimal && (e = G(e, `,`, this.symbols.decimal), e = G(e, `،`, this.symbols.decimal)), this.symbols.group && t && (e = G(e, `.`, this.symbols.group))), this.symbols.group === `’` && e.includes(`'`) && t && (e = G(e, `'`, this.symbols.group)), this.symbols.group === `'` && e.includes(`’`) && t && (e = G(e, `’`, this.symbols.group)), this.options.locale === `fr-FR` && this.symbols.group && t && (e = G(e, ` `, this.symbols.group), e = G(e, /\u00A0/g, this.symbols.group)), e);
	}
	isValidPartialNumber(e, t = -1 / 0, n = 1 / 0) {
		let r = this.formatter.resolvedOptions().useGrouping;
		return e = this.sanitize(e), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && n > 0 && (e = e.slice(this.symbols.plusSign.length)), this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && r && (e = G(e, this.symbols.group, ``)), e = e.replace(this.symbols.numeral, ``), this.symbols.decimal && (e = e.replace(this.symbols.decimal, ``)), e.length === 0);
	}
}, ce = new Set([
	`decimal`,
	`fraction`,
	`integer`,
	`minusSign`,
	`plusSign`,
	`group`
]), W = [
	0,
	4,
	2,
	1,
	11,
	20,
	3,
	7,
	100,
	21,
	.1,
	1.1
];
function le(e, t, n, r) {
	let i = new Intl.NumberFormat(e, {
		...n,
		minimumSignificantDigits: 1,
		maximumSignificantDigits: 21,
		roundingIncrement: 1,
		roundingPriority: `auto`,
		roundingMode: `halfExpand`,
		useGrouping: !0
	}), a = i.formatToParts(-10000.111), o = i.formatToParts(10000.111), s = W.map((e) => i.formatToParts(e)), c = s.map((e, t) => {
		let n = e.find((e) => e.type === `unit`);
		return n && !e.some((e) => e.type === `integer` || e.type === `fraction`) ? {
			unit: n.value,
			value: W[t]
		} : null;
	}).filter((e) => !!e), l = a.find((e) => e.type === `minusSign`)?.value ?? `-`, u = o.find((e) => e.type === `plusSign`)?.value;
	u || r?.signDisplay !== `exceptZero` && r?.signDisplay !== `always` || (u = `+`);
	let d = new Intl.NumberFormat(e, {
		...n,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).formatToParts(.001).find((e) => e.type === `decimal`)?.value, f = a.find((e) => e.type === `group`)?.value, p = a.filter((e) => !ce.has(e.type)).map((e) => ue(e.value)), m = s.flatMap((e) => e.filter((e) => !ce.has(e.type)).map((e) => ue(e.value))), h = [...new Set([...p, ...m])].sort((e, t) => t.length - e.length), g = h.length === 0 ? RegExp(`\\p{White_Space}|\\p{Cf}`, `gu`) : RegExp(`${h.join(`|`)}|\\p{White_Space}|\\p{Cf}`, `gu`), _ = [...new Intl.NumberFormat(n.locale, { useGrouping: !1 }).format(9876543210)].reverse(), v = new Map(_.map((e, t) => [e, t])), y = RegExp(`[${_.join(``)}]`, `g`);
	return {
		minusSign: l,
		plusSign: u,
		decimal: d,
		group: f,
		literals: g,
		numeral: y,
		numerals: _,
		index: (e) => String(v.get(e)),
		noNumeralUnits: c
	};
}
function G(e, t, n) {
	return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function ue(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
var K = e(L(), 1);
function de() {
	return typeof window < `u` && window.InputEvent && typeof InputEvent.prototype.getTargetRanges == `function`;
}
function fe(e, t, n) {
	let r = D((e) => {
		let r = n.current;
		if (!r) return;
		let i = null;
		switch (e.inputType) {
			case `historyUndo`:
			case `historyRedo`: return;
			case `insertLineBreak`: return;
			case `deleteContent`:
			case `deleteByCut`:
			case `deleteByDrag`:
				i = r.value.slice(0, r.selectionStart) + r.value.slice(r.selectionEnd);
				break;
			case `deleteContentForward`:
				i = r.selectionEnd === r.selectionStart ? r.value.slice(0, r.selectionStart) + r.value.slice(r.selectionEnd + 1) : r.value.slice(0, r.selectionStart) + r.value.slice(r.selectionEnd);
				break;
			case `deleteContentBackward`:
				i = r.selectionEnd === r.selectionStart ? r.value.slice(0, r.selectionStart - 1) + r.value.slice(r.selectionStart) : r.value.slice(0, r.selectionStart) + r.value.slice(r.selectionEnd);
				break;
			case `deleteSoftLineBackward`:
			case `deleteHardLineBackward`:
				i = r.value.slice(r.selectionStart);
				break;
			default: e.data != null && (i = r.value.slice(0, r.selectionStart) + e.data + r.value.slice(r.selectionEnd));
		}
		i != null && t.validate(i) || e.preventDefault();
	});
	(0, K.useEffect)(() => {
		if (!de() || !n.current) return;
		let e = n.current;
		return e.addEventListener(`beforeinput`, r, !1), () => {
			e.removeEventListener(`beforeinput`, r, !1);
		};
	}, [n]);
	let i = de() ? null : (e) => {
		let n = d(e).value.slice(0, d(e).selectionStart) + e.data + d(e).value.slice(d(e).selectionEnd);
		t.validate(n) || e.preventDefault();
	}, { labelProps: a, inputProps: o, descriptionProps: s, errorMessageProps: c, ...l } = F(e, n), u = (0, K.useRef)(null);
	return {
		inputProps: y(o, {
			onBeforeInput: i,
			onCompositionStart() {
				let { value: e, selectionStart: t, selectionEnd: r } = n.current;
				u.current = {
					value: e,
					selectionStart: t,
					selectionEnd: r
				};
			},
			onCompositionEnd() {
				if (n.current && !t.validate(n.current.value)) {
					let { value: e, selectionStart: r, selectionEnd: i } = u.current;
					n.current.value = e, n.current.setSelectionRange(r, i), t.setInputValue(e);
				}
			}
		}),
		labelProps: a,
		descriptionProps: s,
		errorMessageProps: c,
		...l
	};
}
function pe(e, t) {
	let { onScroll: n, isDisabled: r } = e, i = (0, K.useCallback)((e) => {
		e.ctrlKey || (e.preventDefault(), e.stopPropagation(), n && n({
			deltaX: e.deltaX,
			deltaY: e.deltaY
		}));
	}, [n]);
	z(t, `wheel`, r ? void 0 : i);
}
var me = {};
me = { Empty: `فارغ` };
var he = {};
he = { Empty: `Изпразни` };
var q = {};
q = { Empty: `Prázdné` };
var J = {};
J = { Empty: `Tom` };
var Y = {};
Y = { Empty: `Leer` };
var ge = {};
ge = { Empty: `Άδειο` };
var _e = {};
_e = { Empty: `Empty` };
var ve = {};
ve = { Empty: `Vacío` };
var ye = {};
ye = { Empty: `Tühjenda` };
var X = {};
X = { Empty: `Tyhjä` };
var be = {};
be = { Empty: `Vide` };
var xe = {};
xe = { Empty: `ריק` };
var Se = {};
Se = { Empty: `Prazno` };
var Ce = {};
Ce = { Empty: `Üres` };
var we = {};
we = { Empty: `Vuoto` };
var Te = {};
Te = { Empty: `空` };
var Ee = {};
Ee = { Empty: `비어 있음` };
var De = {};
De = { Empty: `Tuščias` };
var Oe = {};
Oe = { Empty: `Tukšs` };
var Z = {};
Z = { Empty: `Tom` };
var Q = {};
Q = { Empty: `Leeg` };
var ke = {};
ke = { Empty: `Pusty` };
var Ae = {};
Ae = { Empty: `Vazio` };
var je = {};
je = { Empty: `Vazio` };
var Me = {};
Me = { Empty: `Gol` };
var Ne = {};
Ne = { Empty: `Не заполнено` };
var Pe = {};
Pe = { Empty: `Prázdne` };
var Fe = {};
Fe = { Empty: `Prazen` };
var Ie = {};
Ie = { Empty: `Prazno` };
var Le = {};
Le = { Empty: `Tomt` };
var Re = {};
Re = { Empty: `Boş` };
var ze = {};
ze = { Empty: `Пусто` };
var Be = {};
Be = { Empty: `空` };
var Ve = {};
Ve = { Empty: `空白` };
var He = {};
He = {
	"ar-AE": me,
	"bg-BG": he,
	"cs-CZ": q,
	"da-DK": J,
	"de-DE": Y,
	"el-GR": ge,
	"en-US": _e,
	"es-ES": ve,
	"et-EE": ye,
	"fi-FI": X,
	"fr-FR": be,
	"he-IL": xe,
	"hr-HR": Se,
	"hu-HU": Ce,
	"it-IT": we,
	"ja-JP": Te,
	"ko-KR": Ee,
	"lt-LT": De,
	"lv-LV": Oe,
	"nb-NO": Z,
	"nl-NL": Q,
	"pl-PL": ke,
	"pt-BR": Ae,
	"pt-PT": je,
	"ro-RO": Me,
	"ru-RU": Ne,
	"sk-SK": Pe,
	"sl-SI": Fe,
	"sr-SP": Ie,
	"sv-SE": Le,
	"tr-TR": Re,
	"uk-UA": ze,
	"zh-CN": Be,
	"zh-TW": Ve
};
function Ue(e) {
	return e && e.__esModule ? e.default : e;
}
var We = () => {};
function Ge(e) {
	let t = (0, K.useRef)(void 0), { value: n, textValue: r, minValue: i, maxValue: a, isDisabled: o, isReadOnly: s, isRequired: c, onIncrement: l, onIncrementPage: d, onDecrement: f, onDecrementPage: m, onDecrementToMin: h, onIncrementToMax: g } = e, _ = re(Ue(He), `@react-aria/spinbutton`), y = (0, K.useRef)(!1), b = (0, K.useCallback)(() => {
		clearTimeout(t.current), y.current = !1;
	}, []), x = D(() => {
		b();
	});
	(0, K.useEffect)(() => () => x(), []);
	let { keyboardProps: S } = v({
		isDisabled: o || s,
		shortcuts: {
			PageUp: () => {
				if (d) d();
				else if (l) l();
				else return !1;
			},
			ArrowUp: () => {
				if (l) l();
				else return !1;
			},
			PageDown: () => {
				if (m) m();
				else if (f) f();
				else return !1;
			},
			ArrowDown: () => {
				if (f) f();
				else return !1;
			},
			Home: () => {
				if (h) h();
				else return !1;
			},
			End: () => {
				if (g) g();
				else return !1;
			}
		},
		allowRepeats: !0
	}), C = (0, K.useRef)(!1), w = () => {
		C.current = !0;
	}, T = () => {
		C.current = !1;
	}, E = r === `` ? _.format(`Empty`) : (r || `${n}`).replace(`-`, `−`);
	(0, K.useEffect)(() => {
		C.current && (p(`assertive`), ee(E, `assertive`));
	}, [E]);
	let O = (0, K.useCallback)(() => {
		b();
	}, [b]), k = D(l ?? We), A = D(f ?? We), te = D(() => {
		(a === void 0 || isNaN(a) || n === void 0 || isNaN(n) || n < a) && (k(), j(60));
	}), j = D((e) => {
		x(), y.current = !0, t.current = window.setTimeout(te, e);
	}), ne = D(() => {
		(i === void 0 || isNaN(i) || n === void 0 || isNaN(n) || n > i) && (A(), M(60));
	}), M = D((e) => {
		x(), y.current = !0, t.current = window.setTimeout(ne, e);
	}), N = (e) => {
		e.preventDefault();
	}, { addGlobalListener: P, removeAllGlobalListeners: F } = u(), I = (0, K.useRef)(!1), [L, R] = (0, K.useState)(null);
	(0, K.useEffect)(() => {
		L === `touch` ? j(600) : L ? j(400) : L || x();
	}, [L]);
	let [z, B] = (0, K.useState)(null);
	return (0, K.useEffect)(() => {
		z === `touch` ? M(600) : z ? M(400) : z || x();
	}, [z]), {
		spinButtonProps: {
			role: `spinbutton`,
			"aria-valuenow": n !== void 0 && !isNaN(n) ? n : void 0,
			"aria-valuetext": E,
			"aria-valuemin": i,
			"aria-valuemax": a,
			"aria-disabled": o || void 0,
			"aria-readonly": s || void 0,
			"aria-required": c || void 0,
			...S,
			onFocus: w,
			onBlur: T
		},
		incrementButtonProps: {
			onPressStart: (e) => {
				b(), e.pointerType === `touch` ? (P(window, `pointercancel`, O, { capture: !0 }), I.current = !1, R(`touch`)) : (l?.(), R(`mouse`)), P(window, `contextmenu`, N);
			},
			onPressUp: (e) => {
				b(), e.pointerType === `touch` && (I.current = !0), F(), R(null);
			},
			onPressEnd: (e) => {
				b(), e.pointerType === `touch` && !y.current && I.current && l?.(), I.current = !1, R(null);
			},
			onFocus: w,
			onBlur: T
		},
		decrementButtonProps: {
			onPressStart: (e) => {
				b(), e.pointerType === `touch` ? (P(window, `pointercancel`, O, { capture: !0 }), I.current = !1, B(`touch`)) : (f?.(), B(`mouse`));
			},
			onPressUp: (e) => {
				b(), e.pointerType === `touch` && (I.current = !0), F(), B(null);
			},
			onPressEnd: (e) => {
				b(), e.pointerType === `touch` && !y.current && I.current && f?.(), I.current = !1, B(null);
			},
			onFocus: w,
			onBlur: T
		}
	};
}
var Ke = {};
Ke = {
	decrease: (e) => `\u{62E}\u{641}\u{636} ${e.fieldLabel}`,
	increase: (e) => `\u{632}\u{64A}\u{627}\u{62F}\u{629} ${e.fieldLabel}`,
	numberField: `حقل رقمي`
};
var qe = {};
qe = {
	decrease: (e) => `\u{41D}\u{430}\u{43C}\u{430}\u{43B}\u{44F}\u{432}\u{430}\u{43D}\u{435} ${e.fieldLabel}`,
	increase: (e) => `\u{423}\u{441}\u{438}\u{43B}\u{432}\u{430}\u{43D}\u{435} ${e.fieldLabel}`,
	numberField: `Номер на полето`
};
var Je = {};
Je = {
	decrease: (e) => `Sn\xed\u{17E}it ${e.fieldLabel}`,
	increase: (e) => `Zv\xfd\u{161}it ${e.fieldLabel}`,
	numberField: `Číselné pole`
};
var Ye = {};
Ye = {
	decrease: (e) => `Reducer ${e.fieldLabel}`,
	increase: (e) => `\xd8g ${e.fieldLabel}`,
	numberField: `Talfelt`
};
var Xe = {};
Xe = {
	decrease: (e) => `${e.fieldLabel} verringern`,
	increase: (e) => `${e.fieldLabel} erh\xf6hen`,
	numberField: `Nummernfeld`
};
var Ze = {};
Ze = {
	decrease: (e) => `\u{39C}\u{3B5}\u{3AF}\u{3C9}\u{3C3}\u{3B7} ${e.fieldLabel}`,
	increase: (e) => `\u{391}\u{3CD}\u{3BE}\u{3B7}\u{3C3}\u{3B7} ${e.fieldLabel}`,
	numberField: `Πεδίο αριθμού`
};
var Qe = {};
Qe = {
	decrease: (e) => `Decrease ${e.fieldLabel}`,
	increase: (e) => `Increase ${e.fieldLabel}`,
	numberField: `Number field`
};
var $e = {};
$e = {
	decrease: (e) => `Reducir ${e.fieldLabel}`,
	increase: (e) => `Aumentar ${e.fieldLabel}`,
	numberField: `Campo de número`
};
var et = {};
et = {
	decrease: (e) => `V\xe4henda ${e.fieldLabel}`,
	increase: (e) => `Suurenda ${e.fieldLabel}`,
	numberField: `Numbri väli`
};
var tt = {};
tt = {
	decrease: (e) => `V\xe4henn\xe4 ${e.fieldLabel}`,
	increase: (e) => `Lis\xe4\xe4 ${e.fieldLabel}`,
	numberField: `Numerokenttä`
};
var nt = {};
nt = {
	decrease: (e) => `Diminuer ${e.fieldLabel}`,
	increase: (e) => `Augmenter ${e.fieldLabel}`,
	numberField: `Champ de nombre`
};
var rt = {};
rt = {
	decrease: (e) => `\u{5D4}\u{5E7}\u{5D8}\u{5DF} ${e.fieldLabel}`,
	increase: (e) => `\u{5D4}\u{5D2}\u{5D3}\u{5DC} ${e.fieldLabel}`,
	numberField: `שדה מספר`
};
var it = {};
it = {
	decrease: (e) => `Smanji ${e.fieldLabel}`,
	increase: (e) => `Pove\u{107}aj ${e.fieldLabel}`,
	numberField: `Polje broja`
};
var at = {};
at = {
	decrease: (e) => `${e.fieldLabel} cs\xf6kkent\xe9se`,
	increase: (e) => `${e.fieldLabel} n\xf6vel\xe9se`,
	numberField: `Számmező`
};
var ot = {};
ot = {
	decrease: (e) => `Riduci ${e.fieldLabel}`,
	increase: (e) => `Aumenta ${e.fieldLabel}`,
	numberField: `Campo numero`
};
var st = {};
st = {
	decrease: (e) => `${e.fieldLabel}\u{3092}\u{7E2E}\u{5C0F}`,
	increase: (e) => `${e.fieldLabel}\u{3092}\u{62E1}\u{5927}`,
	numberField: `数値フィールド`
};
var ct = {};
ct = {
	decrease: (e) => `${e.fieldLabel} \u{AC10}\u{C18C}`,
	increase: (e) => `${e.fieldLabel} \u{C99D}\u{AC00}`,
	numberField: `번호 필드`
};
var lt = {};
lt = {
	decrease: (e) => `Suma\u{17E}inti ${e.fieldLabel}`,
	increase: (e) => `Padidinti ${e.fieldLabel}`,
	numberField: `Numerio laukas`
};
var ut = {};
ut = {
	decrease: (e) => `Samazin\u{101}\u{161}ana ${e.fieldLabel}`,
	increase: (e) => `Palielin\u{101}\u{161}ana ${e.fieldLabel}`,
	numberField: `Skaitļu lauks`
};
var dt = {};
dt = {
	decrease: (e) => `Reduser ${e.fieldLabel}`,
	increase: (e) => `\xd8k ${e.fieldLabel}`,
	numberField: `Tallfelt`
};
var ft = {};
ft = {
	decrease: (e) => `${e.fieldLabel} verlagen`,
	increase: (e) => `${e.fieldLabel} verhogen`,
	numberField: `Getalveld`
};
var pt = {};
pt = {
	decrease: (e) => `Zmniejsz ${e.fieldLabel}`,
	increase: (e) => `Zwi\u{119}ksz ${e.fieldLabel}`,
	numberField: `Pole numeru`
};
var mt = {};
mt = {
	decrease: (e) => `Diminuir ${e.fieldLabel}`,
	increase: (e) => `Aumentar ${e.fieldLabel}`,
	numberField: `Campo de número`
};
var ht = {};
ht = {
	decrease: (e) => `Diminuir ${e.fieldLabel}`,
	increase: (e) => `Aumentar ${e.fieldLabel}`,
	numberField: `Campo numérico`
};
var gt = {};
gt = {
	decrease: (e) => `Sc\u{103}dere ${e.fieldLabel}`,
	increase: (e) => `Cre\u{219}tere ${e.fieldLabel}`,
	numberField: `Câmp numeric`
};
var _t = {};
_t = {
	decrease: (e) => `\u{423}\u{43C}\u{435}\u{43D}\u{44C}\u{448}\u{435}\u{43D}\u{438}\u{435} ${e.fieldLabel}`,
	increase: (e) => `\u{423}\u{432}\u{435}\u{43B}\u{438}\u{447}\u{435}\u{43D}\u{438}\u{435} ${e.fieldLabel}`,
	numberField: `Числовое поле`
};
var vt = {};
vt = {
	decrease: (e) => `Zn\xed\u{17E}i\u{165} ${e.fieldLabel}`,
	increase: (e) => `Zv\xfd\u{161}i\u{165} ${e.fieldLabel}`,
	numberField: `Číselné pole`
};
var yt = {};
yt = {
	decrease: (e) => `Upadati ${e.fieldLabel}`,
	increase: (e) => `Pove\u{10D}ajte ${e.fieldLabel}`,
	numberField: `Številčno polje`
};
var bt = {};
bt = {
	decrease: (e) => `Smanji ${e.fieldLabel}`,
	increase: (e) => `Pove\u{107}aj ${e.fieldLabel}`,
	numberField: `Polje broja`
};
var xt = {};
xt = {
	decrease: (e) => `Minska ${e.fieldLabel}`,
	increase: (e) => `\xd6ka ${e.fieldLabel}`,
	numberField: `Nummerfält`
};
var St = {};
St = {
	decrease: (e) => `${e.fieldLabel} azalt`,
	increase: (e) => `${e.fieldLabel} artt\u{131}r`,
	numberField: `Sayı alanı`
};
var Ct = {};
Ct = {
	decrease: (e) => `\u{417}\u{43C}\u{435}\u{43D}\u{448}\u{438}\u{442}\u{438} ${e.fieldLabel}`,
	increase: (e) => `\u{417}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{438}\u{442}\u{438} ${e.fieldLabel}`,
	numberField: `Поле номера`
};
var wt = {};
wt = {
	decrease: (e) => `\u{964D}\u{4F4E} ${e.fieldLabel}`,
	increase: (e) => `\u{63D0}\u{9AD8} ${e.fieldLabel}`,
	numberField: `数字字段`
};
var Tt = {};
Tt = {
	decrease: (e) => `\u{7E2E}\u{5C0F} ${e.fieldLabel}`,
	increase: (e) => `\u{653E}\u{5927} ${e.fieldLabel}`,
	numberField: `數字欄位`
};
var Et = {};
Et = {
	"ar-AE": Ke,
	"bg-BG": qe,
	"cs-CZ": Je,
	"da-DK": Ye,
	"de-DE": Xe,
	"el-GR": Ze,
	"en-US": Qe,
	"es-ES": $e,
	"et-EE": et,
	"fi-FI": tt,
	"fr-FR": nt,
	"he-IL": rt,
	"hr-HR": it,
	"hu-HU": at,
	"it-IT": ot,
	"ja-JP": st,
	"ko-KR": ct,
	"lt-LT": lt,
	"lv-LV": ut,
	"nb-NO": dt,
	"nl-NL": ft,
	"pl-PL": pt,
	"pt-BR": mt,
	"pt-PT": ht,
	"ro-RO": gt,
	"ru-RU": _t,
	"sk-SK": vt,
	"sl-SI": yt,
	"sr-SP": bt,
	"sv-SE": xt,
	"tr-TR": St,
	"uk-UA": Ct,
	"zh-CN": wt,
	"zh-TW": Tt
};
var Dt = e(R(), 1);
function Ot(e) {
	return e && e.__esModule ? e.default : e;
}
function kt(e, t, r) {
	let { id: i, decrementAriaLabel: s, incrementAriaLabel: c, isDisabled: l, isReadOnly: u, isRequired: p, minValue: h, maxValue: g, autoFocus: _, label: S, formatOptions: w, onBlur: T = () => {}, onFocus: E, onFocusChange: D, onKeyDown: O, onKeyUp: A, description: j, errorMessage: ne, isWheelDisabled: N, ...P } = e, { increment: F, incrementToMax: I, decrement: L, decrementToMin: R, numberValue: z, inputValue: B, commit: V, commitValidation: ie } = t, H = re(Ot(Et), `@react-aria/numberfield`), ae = (0, K.useCallback)(() => {
		let e = r.current?.value ?? ``;
		(0, Dt.flushSync)(() => {
			V();
		}), r.current?.value !== e && ee(r.current?.value ?? ``, `assertive`);
	}, [V, r]), U = n(i), { focusProps: oe } = b({ onBlur() {
		ae();
	} }), se = f(w), ce = (0, K.useMemo)(() => se.resolvedOptions(), [se]), W = f({
		...w,
		currencySign: void 0
	}), { spinButtonProps: le, incrementButtonProps: G, decrementButtonProps: ue } = Ge({
		isDisabled: l,
		isReadOnly: u,
		isRequired: p,
		maxValue: g,
		minValue: h,
		onIncrement: F,
		onIncrementToMax: I,
		onDecrement: L,
		onDecrementToMin: R,
		value: z,
		textValue: (0, K.useMemo)(() => isNaN(z) ? `` : W.format(z), [W, z])
	}), [de, me] = (0, K.useState)(!1), { focusWithinProps: he } = a({
		isDisabled: l,
		onFocusWithinChange: me
	});
	pe({
		onScroll: (0, K.useCallback)((e) => {
			Math.abs(e.deltaY) <= Math.abs(e.deltaX) || (e.deltaY > 0 ? F() : e.deltaY < 0 && L());
		}, [L, F]),
		isDisabled: N || l || u || !de
	}, r);
	let q = (ce.maximumFractionDigits ?? 0) > 0, J = t.minValue === void 0 || isNaN(t.minValue) || t.minValue < 0, Y = `numeric`;
	x() ? J ? Y = `text` : q && (Y = `decimal`) : m() && (J ? Y = `numeric` : q && (Y = `decimal`));
	let ge = (e) => {
		t.validate(e) && t.setInputValue(e);
	}, _e = (t) => {
		e.onPaste?.(t);
		let n = d(t);
		n && (n.selectionEnd ?? -1) - (n.selectionStart ?? 0) === n.value.length && (t.preventDefault(), V(t.clipboardData?.getData?.(`text/plain`)?.trim() ?? ``));
	}, ve = o(e), { keyboardProps: ye } = v({
		isDisabled: l || u,
		shortcuts: { Enter: () => ((0, Dt.flushSync)(() => {
			V();
		}), ie(), { shouldPreventDefault: !1 }) },
		onKeyDown: O,
		onKeyUp: A
	}), { isInvalid: X, validationErrors: be, validationDetails: xe } = t.displayValidation, { labelProps: Se, inputProps: Ce, descriptionProps: we, errorMessageProps: Te } = fe({
		...P,
		...ve,
		name: void 0,
		form: void 0,
		label: S,
		autoFocus: _,
		isDisabled: l,
		isReadOnly: u,
		isRequired: p,
		validate: void 0,
		[M]: t,
		value: B,
		defaultValue: `!`,
		autoComplete: `off`,
		"aria-label": e[`aria-label`] || void 0,
		"aria-labelledby": e[`aria-labelledby`] || void 0,
		id: U,
		type: `text`,
		inputMode: Y,
		onChange: ge,
		onBlur: T,
		onFocus: E,
		onFocusChange: D,
		onPaste: _e,
		description: j,
		errorMessage: ne
	}, t, r), Ee = y(ye, Ce);
	te(r, t.defaultNumberValue, t.setNumberValue), At(t, e.validationBehavior, e.commitBehavior, r, t.minValue, t.maxValue, e.step, t.numberValue);
	let De = y(le, oe, Ee, {
		role: null,
		"aria-roledescription": k() ? null : H.format(`numberField`),
		"aria-valuemax": null,
		"aria-valuemin": null,
		"aria-valuenow": null,
		"aria-valuetext": null,
		autoCorrect: `off`,
		spellCheck: `false`
	});
	e.validationBehavior === `native` && (De[`aria-required`] = void 0);
	let Oe = (e) => {
		C() !== r.current && (e.pointerType === `mouse` ? r.current?.focus() : e.target.focus());
	}, Z = e[`aria-label`] || (typeof e.label == `string` ? e.label : ``), Q;
	Z || (Q = e.label == null ? e[`aria-labelledby`] : Se.id);
	let ke = n(), Ae = n(), je = y(G, {
		"aria-label": c || H.format(`increase`, { fieldLabel: Z }).trim(),
		id: Q && !c ? ke : null,
		"aria-labelledby": Q && !c ? `${ke} ${Q}` : null,
		"aria-controls": U,
		excludeFromTabOrder: !0,
		preventFocusOnPress: !0,
		allowFocusWhenDisabled: !0,
		isDisabled: !t.canIncrement,
		onPressStart: Oe
	}), Me = y(ue, {
		"aria-label": s || H.format(`decrease`, { fieldLabel: Z }).trim(),
		id: Q && !s ? Ae : null,
		"aria-labelledby": Q && !s ? `${Ae} ${Q}` : null,
		"aria-controls": U,
		excludeFromTabOrder: !0,
		preventFocusOnPress: !0,
		allowFocusWhenDisabled: !0,
		isDisabled: !t.canDecrement,
		onPressStart: Oe
	});
	return {
		groupProps: {
			...he,
			role: `group`,
			"aria-disabled": l,
			"aria-invalid": X ? `true` : void 0
		},
		labelProps: Se,
		inputProps: De,
		incrementButtonProps: je,
		decrementButtonProps: Me,
		errorMessageProps: Te,
		descriptionProps: we,
		isInvalid: X,
		validationErrors: be,
		validationDetails: xe
	};
}
var $ = null;
function At(e, t, n, r, i, a, o, s) {
	E(() => {
		let c = r.current;
		if (n !== `validate` || e.realtimeValidation.isInvalid || !c || c.disabled || (!$ && typeof document < `u` && ($ = document.createElement(`input`), $.type = `number`), !$)) return;
		$.min = i != null && !isNaN(i) ? String(i) : ``, $.max = a != null && !isNaN(a) ? String(a) : ``, $.step = o != null && !isNaN(o) ? String(o) : ``, $.value = s != null && !isNaN(s) ? String(s) : ``;
		let l = c.validity.valid && $.validity.valid, u = c.validationMessage || $.validationMessage, d = {
			isInvalid: !l,
			validationErrors: u ? [u] : [],
			validationDetails: {
				badInput: c.validity.badInput,
				customError: c.validity.customError,
				patternMismatch: c.validity.patternMismatch,
				rangeOverflow: $.validity.rangeOverflow,
				rangeUnderflow: $.validity.rangeUnderflow,
				stepMismatch: $.validity.stepMismatch,
				tooLong: c.validity.tooLong,
				tooShort: c.validity.tooShort,
				typeMismatch: c.validity.typeMismatch,
				valueMissing: c.validity.valueMissing,
				valid: l
			}
		};
		e.updateValidation(d), t === `native` && !$.validity.valid && c.setCustomValidity($.validationMessage);
	});
}
function jt(e) {
	let { minValue: t, maxValue: n, step: r, formatOptions: a, value: o, defaultValue: s = NaN, onChange: c, locale: l, isDisabled: u, isReadOnly: d, commitBehavior: f = `snap` } = e;
	o === null && (o = NaN);
	let p = (0, K.useCallback)((e) => r === void 0 || isNaN(r) ? h(e, t, n) : i(e, t, n, r), [
		r,
		t,
		n
	]);
	o !== void 0 && !isNaN(o) && f === `snap` && (o = p(o)), !isNaN(s) && f === `snap` && (s = p(s));
	let [m, g] = B(o, isNaN(s) ? NaN : s, c), [_] = (0, K.useState)(m), [v, y] = (0, K.useState)(() => isNaN(m) ? `` : new w(l, a).format(m)), b = (0, K.useMemo)(() => new H(l, a), [l, a]), x = (0, K.useMemo)(() => b.getNumberingSystem(v), [b, v]), S = (0, K.useMemo)(() => new w(l, {
		...a,
		numberingSystem: x
	}), [
		l,
		a,
		x
	]), C = (0, K.useMemo)(() => S.resolvedOptions(), [S]), T = (0, K.useCallback)((e) => isNaN(e) || e === null ? `` : S.format(e), [S]), E = j({
		...e,
		value: m
	}), D = r !== void 0 && !isNaN(r) ? r : 1;
	C.style === `percent` && (r === void 0 || isNaN(r)) && (D = .01);
	let [O, k] = (0, K.useState)(m), [ee, A] = (0, K.useState)(l), [te, ne] = (0, K.useState)(a);
	Object.is(m, O) && l === ee && Mt(a, te) || (y(T(m)), k(m), A(l), ne(a));
	let M = (0, K.useMemo)(() => b.parse(v), [b, v]), N = (e) => {
		let t = e === void 0 ? v : e, n = M;
		if (e !== void 0 && (n = b.parse(t)), !t.length) {
			g(NaN), y(o === void 0 ? `` : T(m));
			return;
		}
		if (isNaN(n)) {
			y(T(m));
			return;
		}
		let r = f === `snap` ? p(n) : n;
		r = b.parse(T(r));
		let i = r !== m;
		g(r), y(T(o === void 0 ? r : m)), i && E.commitValidation();
	}, P = (e, r = 0) => {
		let a = M;
		if (isNaN(a)) return i(isNaN(r) ? 0 : r, t, n, D);
		{
			let r = i(a, t, n, D);
			return e === `+` && r > a || e === `-` && r < a ? r : i(Nt(e, a, D), t, n, D);
		}
	}, F = () => {
		let e = P(`+`, t);
		e === m && y(T(e)), g(e), E.commitValidation();
	}, I = () => {
		let e = P(`-`, n);
		e === m && y(T(e)), g(e), E.commitValidation();
	}, L = () => {
		n != null && (g(i(n, t, n, D)), E.commitValidation());
	}, R = () => {
		t != null && (g(t), E.commitValidation());
	}, re = (0, K.useMemo)(() => !u && !d && (isNaN(M) || n === void 0 || isNaN(n) || i(M, t, n, D) > M || Nt(`+`, M, D) <= n), [
		u,
		d,
		t,
		n,
		D,
		M
	]), z = (0, K.useMemo)(() => !u && !d && (isNaN(M) || t === void 0 || isNaN(t) || i(M, t, n, D) < M || Nt(`-`, M, D) >= t), [
		u,
		d,
		t,
		n,
		D,
		M
	]), V = (e) => b.isValidPartialNumber(e, t, n);
	return {
		...E,
		validate: V,
		increment: F,
		incrementToMax: L,
		decrement: I,
		decrementToMin: R,
		canIncrement: re,
		canDecrement: z,
		minValue: t,
		maxValue: n,
		numberValue: M,
		defaultNumberValue: isNaN(s) ? _ : s,
		setNumberValue: g,
		setInputValue: y,
		inputValue: v,
		commit: N
	};
}
function Mt(e, t) {
	if (e === t) return !0;
	if (!e || !t) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (t[r] !== e[r]) return !1;
	return !0;
}
function Nt(e, t, n) {
	let r = e === `+` ? t + n : t - n;
	if (t % 1 != 0 || n % 1 != 0) {
		let i = t.toString().split(`.`), a = n.toString().split(`.`), o = i[1] && i[1].length || 0, s = a[1] && a[1].length || 0, c = 10 ** Math.max(o, s);
		t = Math.round(t * c), n = Math.round(n * c), r = e === `+` ? t + n : t - n, r /= c;
	}
	return r;
}
var Pt = (0, K.createContext)(null), Ft = (0, K.createContext)(null), It = (0, K.forwardRef)(function(e, n) {
	[e, n] = _(e, n, Pt);
	let { validationBehavior: i } = c(ne) || {}, a = e.validationBehavior ?? i ?? `native`, { locale: u } = t(), d = jt({
		...e,
		locale: u,
		validationBehavior: a
	}), f = (0, K.useRef)(null), [p, m] = g(!e[`aria-label`] && !e[`aria-labelledby`]), { labelProps: h, groupProps: v, inputProps: y, incrementButtonProps: b, decrementButtonProps: x, descriptionProps: C, errorMessageProps: w, ...E } = kt({
		...T(e),
		label: m,
		validationBehavior: a
	}, d, f), D = s({
		...e,
		values: {
			state: d,
			isDisabled: e.isDisabled || !1,
			isInvalid: E.isInvalid || !1,
			isRequired: e.isRequired || !1,
			isReadOnly: e.isReadOnly || !1
		},
		defaultClassName: `react-aria-NumberField`
	}), k = o(e, { global: !0 });
	return delete k.id, K.createElement(r, { values: [
		[Ft, d],
		[N, v],
		[P, {
			...y,
			ref: f
		}],
		[S, {
			...h,
			ref: p
		}],
		[O, { slots: {
			increment: b,
			decrement: x
		} }],
		[I, { slots: {
			description: C,
			errorMessage: w
		} }],
		[A, E]
	] }, K.createElement(l.div, {
		...k,
		...D,
		ref: n,
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0,
		"data-invalid": E.isInvalid || void 0
	}), e.name && K.createElement(`input`, {
		type: `hidden`,
		name: e.name,
		form: e.form,
		value: isNaN(d.numberValue) ? `` : d.numberValue,
		disabled: e.isDisabled || void 0
	}));
});
export { pe as a, Ge as i, jt as n, fe as o, kt as r, H as s, It as t };
