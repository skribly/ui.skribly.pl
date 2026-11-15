import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t, t as n } from "./react-dom.B9zIfLd2.js";
import { B as r, It as i, J as a, K as o, Qt as s, Ut as c, V as l, Vt as u, W as d, Xt as f, bn as p, bt as m, et as h, gt as g, hn as _, ht as ee, nt as v, q as y, st as b, vn as x } from "./doc.DoLlUurT.js";
import { c as S, l as C, o as w } from "./useFormValidation.CExHgpbK.js";
import { n as T } from "./useLocalizedStringFormatter.DOzdQqIj.js";
import { t as E } from "./useControlledState.DijOhE0s.js";
import { t as D } from "./useFormReset.ClC-r4N4.js";
import { t as O } from "./useTextField.yppvIDGl.js";
var k = RegExp(`^.*\\(.*\\).*$`), A = [
	`latn`,
	`arab`,
	`hanidec`,
	`deva`,
	`beng`,
	`fullwide`
], j = class {
	constructor(e, t = {}) {
		this.locale = e, this.options = t;
	}
	parse(e) {
		return N(this.locale, this.options, e).parse(e);
	}
	isValidPartialNumber(e, t, n) {
		return N(this.locale, this.options, e).isValidPartialNumber(e, t, n);
	}
	getNumberingSystem(e) {
		return N(this.locale, this.options, e).options.numberingSystem;
	}
}, M = new Map();
function N(e, t, n) {
	let r = P(e, t);
	if (!e.includes(`-nu-`) && !r.isValidPartialNumber(n)) {
		for (let i of A) if (i !== r.options.numberingSystem) {
			let r = P(e + (e.includes(`-u-`) ? `-nu-` : `-u-nu-`) + i, t);
			if (r.isValidPartialNumber(n)) return r;
		}
	}
	return r;
}
function P(e, t) {
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ``), r = M.get(n);
	return r || (r = new F(e, t), M.set(n, r)), r;
}
var F = class {
	constructor(e, t = {}) {
		this.locale = e, t.roundingIncrement !== 1 && t.roundingIncrement != null && (t.maximumFractionDigits == null && t.minimumFractionDigits == null ? (t.maximumFractionDigits = 0, t.minimumFractionDigits = 0) : t.maximumFractionDigits == null ? t.maximumFractionDigits = t.minimumFractionDigits : t.minimumFractionDigits ??= t.maximumFractionDigits), this.formatter = new Intl.NumberFormat(e, t), this.options = this.formatter.resolvedOptions(), this.symbols = R(e, this.formatter, this.options, t), this.options.style === `percent` && ((this.options.minimumFractionDigits ?? 0) > 18 || (this.options.maximumFractionDigits ?? 0) > 18) && console.warn(`NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.`);
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
			return new j(this.locale, e).parse(new a(this.locale, e).format(r));
		}
		return this.options.currencySign === `accounting` && k.test(e) && (r = -1 * r), r;
	}
	sanitize(e) {
		let t = this.formatter.resolvedOptions().useGrouping;
		return this.symbols.noNumeralUnits.length > 0 && this.symbols.noNumeralUnits.find((t) => t.unit === e) ? this.symbols.noNumeralUnits.find((t) => t.unit === e).value.toString() : (e = e.replace(this.symbols.literals, ``), this.symbols.minusSign && (e = e.replace(`-`, this.symbols.minusSign)), this.options.numberingSystem === `arab` && (this.symbols.decimal && (e = z(e, `,`, this.symbols.decimal), e = z(e, `،`, this.symbols.decimal)), this.symbols.group && t && (e = z(e, `.`, this.symbols.group))), this.symbols.group === `’` && e.includes(`'`) && t && (e = z(e, `'`, this.symbols.group)), this.symbols.group === `'` && e.includes(`’`) && t && (e = z(e, `’`, this.symbols.group)), this.options.locale === `fr-FR` && this.symbols.group && t && (e = z(e, ` `, this.symbols.group), e = z(e, /\u00A0/g, this.symbols.group)), e);
	}
	isValidPartialNumber(e, t = -1 / 0, n = 1 / 0) {
		let r = this.formatter.resolvedOptions().useGrouping;
		return e = this.sanitize(e), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && n > 0 && (e = e.slice(this.symbols.plusSign.length)), this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && r && (e = z(e, this.symbols.group, ``)), e = e.replace(this.symbols.numeral, ``), this.symbols.decimal && (e = e.replace(this.symbols.decimal, ``)), e.length === 0);
	}
}, I = new Set([
	`decimal`,
	`fraction`,
	`integer`,
	`minusSign`,
	`plusSign`,
	`group`
]), L = [
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
function R(e, t, n, r) {
	let i = new Intl.NumberFormat(e, {
		...n,
		minimumSignificantDigits: 1,
		maximumSignificantDigits: 21,
		roundingIncrement: 1,
		roundingPriority: `auto`,
		roundingMode: `halfExpand`,
		useGrouping: !0
	}), a = i.formatToParts(-10000.111), o = i.formatToParts(10000.111), s = L.map((e) => i.formatToParts(e)), c = s.map((e, t) => {
		let n = e.find((e) => e.type === `unit`);
		return n && !e.some((e) => e.type === `integer` || e.type === `fraction`) ? {
			unit: n.value,
			value: L[t]
		} : null;
	}).filter((e) => !!e), l = a.find((e) => e.type === `minusSign`)?.value ?? `-`, u = o.find((e) => e.type === `plusSign`)?.value;
	u || r?.signDisplay !== `exceptZero` && r?.signDisplay !== `always` || (u = `+`);
	let d = new Intl.NumberFormat(e, {
		...n,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).formatToParts(.001).find((e) => e.type === `decimal`)?.value, f = a.find((e) => e.type === `group`)?.value, p = a.filter((e) => !I.has(e.type)).map((e) => B(e.value)), m = s.flatMap((e) => e.filter((e) => !I.has(e.type)).map((e) => B(e.value))), h = [...new Set([...p, ...m])].sort((e, t) => t.length - e.length), g = h.length === 0 ? RegExp(`\\p{White_Space}|\\p{Cf}`, `gu`) : RegExp(`${h.join(`|`)}|\\p{White_Space}|\\p{Cf}`, `gu`), _ = [...new Intl.NumberFormat(n.locale, { useGrouping: !1 }).format(9876543210)].reverse(), ee = new Map(_.map((e, t) => [e, t])), v = RegExp(`[${_.join(``)}]`, `g`);
	return {
		minusSign: l,
		plusSign: u,
		decimal: d,
		group: f,
		literals: g,
		numeral: v,
		numerals: _,
		index: (e) => String(ee.get(e)),
		noNumeralUnits: c
	};
}
function z(e, t, n) {
	return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function B(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
var V = e(t(), 1);
function H() {
	return typeof window < `u` && window.InputEvent && typeof InputEvent.prototype.getTargetRanges == `function`;
}
function U(e, t, n) {
	let r = m((e) => {
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
	(0, V.useEffect)(() => {
		if (!H() || !n.current) return;
		let e = n.current;
		return e.addEventListener(`beforeinput`, r, !1), () => {
			e.removeEventListener(`beforeinput`, r, !1);
		};
	}, [n]);
	let i = H() ? null : (e) => {
		let n = s(e).value.slice(0, s(e).selectionStart) + e.data + s(e).value.slice(s(e).selectionEnd);
		t.validate(n) || e.preventDefault();
	}, { labelProps: a, inputProps: o, descriptionProps: c, errorMessageProps: l, ...u } = O(e, n), d = (0, V.useRef)(null);
	return {
		inputProps: _(o, {
			onBeforeInput: i,
			onCompositionStart() {
				let { value: e, selectionStart: t, selectionEnd: r } = n.current;
				d.current = {
					value: e,
					selectionStart: t,
					selectionEnd: r
				};
			},
			onCompositionEnd() {
				if (n.current && !t.validate(n.current.value)) {
					let { value: e, selectionStart: r, selectionEnd: i } = d.current;
					n.current.value = e, n.current.setSelectionRange(r, i), t.setInputValue(e);
				}
			}
		}),
		labelProps: a,
		descriptionProps: c,
		errorMessageProps: l,
		...u
	};
}
function W(e, t) {
	let { onScroll: n, isDisabled: r } = e, i = (0, V.useCallback)((e) => {
		e.ctrlKey || (e.preventDefault(), e.stopPropagation(), n && n({
			deltaX: e.deltaX,
			deltaY: e.deltaY
		}));
	}, [n]);
	C(t, `wheel`, r ? void 0 : i);
}
var G = {};
G = { Empty: `فارغ` };
var K = {};
K = { Empty: `Изпразни` };
var q = {};
q = { Empty: `Prázdné` };
var te = {};
te = { Empty: `Tom` };
var J = {};
J = { Empty: `Leer` };
var ne = {};
ne = { Empty: `Άδειο` };
var Y = {};
Y = { Empty: `Empty` };
var re = {};
re = { Empty: `Vacío` };
var ie = {};
ie = { Empty: `Tühjenda` };
var ae = {};
ae = { Empty: `Tyhjä` };
var oe = {};
oe = { Empty: `Vide` };
var se = {};
se = { Empty: `ריק` };
var ce = {};
ce = { Empty: `Prazno` };
var le = {};
le = { Empty: `Üres` };
var ue = {};
ue = { Empty: `Vuoto` };
var de = {};
de = { Empty: `空` };
var fe = {};
fe = { Empty: `비어 있음` };
var pe = {};
pe = { Empty: `Tuščias` };
var me = {};
me = { Empty: `Tukšs` };
var X = {};
X = { Empty: `Tom` };
var he = {};
he = { Empty: `Leeg` };
var ge = {};
ge = { Empty: `Pusty` };
var _e = {};
_e = { Empty: `Vazio` };
var ve = {};
ve = { Empty: `Vazio` };
var ye = {};
ye = { Empty: `Gol` };
var be = {};
be = { Empty: `Не заполнено` };
var xe = {};
xe = { Empty: `Prázdne` };
var Se = {};
Se = { Empty: `Prazen` };
var Ce = {};
Ce = { Empty: `Prazno` };
var we = {};
we = { Empty: `Tomt` };
var Te = {};
Te = { Empty: `Boş` };
var Ee = {};
Ee = { Empty: `Пусто` };
var De = {};
De = { Empty: `空` };
var Oe = {};
Oe = { Empty: `空白` };
var Z = {};
Z = {
	"ar-AE": G,
	"bg-BG": K,
	"cs-CZ": q,
	"da-DK": te,
	"de-DE": J,
	"el-GR": ne,
	"en-US": Y,
	"es-ES": re,
	"et-EE": ie,
	"fi-FI": ae,
	"fr-FR": oe,
	"he-IL": se,
	"hr-HR": ce,
	"hu-HU": le,
	"it-IT": ue,
	"ja-JP": de,
	"ko-KR": fe,
	"lt-LT": pe,
	"lv-LV": me,
	"nb-NO": X,
	"nl-NL": he,
	"pl-PL": ge,
	"pt-BR": _e,
	"pt-PT": ve,
	"ro-RO": ye,
	"ru-RU": be,
	"sk-SK": xe,
	"sl-SI": Se,
	"sr-SP": Ce,
	"sv-SE": we,
	"tr-TR": Te,
	"uk-UA": Ee,
	"zh-CN": De,
	"zh-TW": Oe
};
function Q(e) {
	return e && e.__esModule ? e.default : e;
}
var ke = () => {};
function Ae(e) {
	let t = (0, V.useRef)(void 0), { value: n, textValue: i, minValue: a, maxValue: o, isDisabled: s, isReadOnly: c, isRequired: u, onIncrement: d, onIncrementPage: f, onDecrement: p, onDecrementPage: h, onDecrementToMin: g, onIncrementToMax: _ } = e, y = T(Q(Z), `@react-aria/spinbutton`), b = (0, V.useRef)(!1), x = (0, V.useCallback)(() => {
		clearTimeout(t.current), b.current = !1;
	}, []), S = m(() => {
		x();
	});
	(0, V.useEffect)(() => () => S(), []);
	let { keyboardProps: C } = ee({
		isDisabled: s || c,
		shortcuts: {
			PageUp: () => {
				if (f) f();
				else if (d) d();
				else return !1;
			},
			ArrowUp: () => {
				if (d) d();
				else return !1;
			},
			PageDown: () => {
				if (h) h();
				else if (p) p();
				else return !1;
			},
			ArrowDown: () => {
				if (p) p();
				else return !1;
			},
			Home: () => {
				if (g) g();
				else return !1;
			},
			End: () => {
				if (_) _();
				else return !1;
			}
		},
		allowRepeats: !0
	}), w = (0, V.useRef)(!1), E = () => {
		w.current = !0;
	}, D = () => {
		w.current = !1;
	}, O = i === `` ? y.format(`Empty`) : (i || `${n}`).replace(`-`, `−`);
	(0, V.useEffect)(() => {
		w.current && (l(`assertive`), r(O, `assertive`));
	}, [O]);
	let k = (0, V.useCallback)(() => {
		x();
	}, [x]), A = m(d ?? ke), j = m(p ?? ke), M = m(() => {
		(o === void 0 || isNaN(o) || n === void 0 || isNaN(n) || n < o) && (A(), N(60));
	}), N = m((e) => {
		S(), b.current = !0, t.current = window.setTimeout(M, e);
	}), P = m(() => {
		(a === void 0 || isNaN(a) || n === void 0 || isNaN(n) || n > a) && (j(), F(60));
	}), F = m((e) => {
		S(), b.current = !0, t.current = window.setTimeout(P, e);
	}), I = (e) => {
		e.preventDefault();
	}, { addGlobalListener: L, removeAllGlobalListeners: R } = v(), z = (0, V.useRef)(!1), [B, H] = (0, V.useState)(null);
	(0, V.useEffect)(() => {
		B === `touch` ? N(600) : B ? N(400) : B || S();
	}, [B]);
	let [U, W] = (0, V.useState)(null);
	return (0, V.useEffect)(() => {
		U === `touch` ? F(600) : U ? F(400) : U || S();
	}, [U]), {
		spinButtonProps: {
			role: `spinbutton`,
			"aria-valuenow": n !== void 0 && !isNaN(n) ? n : void 0,
			"aria-valuetext": O,
			"aria-valuemin": a,
			"aria-valuemax": o,
			"aria-disabled": s || void 0,
			"aria-readonly": c || void 0,
			"aria-required": u || void 0,
			...C,
			onFocus: E,
			onBlur: D
		},
		incrementButtonProps: {
			onPressStart: (e) => {
				x(), e.pointerType === `touch` ? (L(window, `pointercancel`, k, { capture: !0 }), z.current = !1, H(`touch`)) : (d?.(), H(`mouse`)), L(window, `contextmenu`, I);
			},
			onPressUp: (e) => {
				x(), e.pointerType === `touch` && (z.current = !0), R(), H(null);
			},
			onPressEnd: (e) => {
				x(), e.pointerType === `touch` && !b.current && z.current && d?.(), z.current = !1, H(null);
			},
			onFocus: E,
			onBlur: D
		},
		decrementButtonProps: {
			onPressStart: (e) => {
				x(), e.pointerType === `touch` ? (L(window, `pointercancel`, k, { capture: !0 }), z.current = !1, W(`touch`)) : (p?.(), W(`mouse`));
			},
			onPressUp: (e) => {
				x(), e.pointerType === `touch` && (z.current = !0), R(), W(null);
			},
			onPressEnd: (e) => {
				x(), e.pointerType === `touch` && !b.current && z.current && p?.(), z.current = !1, W(null);
			},
			onFocus: E,
			onBlur: D
		}
	};
}
var je = {};
je = {
	decrease: (e) => `\u{62E}\u{641}\u{636} ${e.fieldLabel}`,
	increase: (e) => `\u{632}\u{64A}\u{627}\u{62F}\u{629} ${e.fieldLabel}`,
	numberField: `حقل رقمي`
};
var Me = {};
Me = {
	decrease: (e) => `\u{41D}\u{430}\u{43C}\u{430}\u{43B}\u{44F}\u{432}\u{430}\u{43D}\u{435} ${e.fieldLabel}`,
	increase: (e) => `\u{423}\u{441}\u{438}\u{43B}\u{432}\u{430}\u{43D}\u{435} ${e.fieldLabel}`,
	numberField: `Номер на полето`
};
var Ne = {};
Ne = {
	decrease: (e) => `Sn\xed\u{17E}it ${e.fieldLabel}`,
	increase: (e) => `Zv\xfd\u{161}it ${e.fieldLabel}`,
	numberField: `Číselné pole`
};
var Pe = {};
Pe = {
	decrease: (e) => `Reducer ${e.fieldLabel}`,
	increase: (e) => `\xd8g ${e.fieldLabel}`,
	numberField: `Talfelt`
};
var Fe = {};
Fe = {
	decrease: (e) => `${e.fieldLabel} verringern`,
	increase: (e) => `${e.fieldLabel} erh\xf6hen`,
	numberField: `Nummernfeld`
};
var Ie = {};
Ie = {
	decrease: (e) => `\u{39C}\u{3B5}\u{3AF}\u{3C9}\u{3C3}\u{3B7} ${e.fieldLabel}`,
	increase: (e) => `\u{391}\u{3CD}\u{3BE}\u{3B7}\u{3C3}\u{3B7} ${e.fieldLabel}`,
	numberField: `Πεδίο αριθμού`
};
var Le = {};
Le = {
	decrease: (e) => `Decrease ${e.fieldLabel}`,
	increase: (e) => `Increase ${e.fieldLabel}`,
	numberField: `Number field`
};
var Re = {};
Re = {
	decrease: (e) => `Reducir ${e.fieldLabel}`,
	increase: (e) => `Aumentar ${e.fieldLabel}`,
	numberField: `Campo de número`
};
var ze = {};
ze = {
	decrease: (e) => `V\xe4henda ${e.fieldLabel}`,
	increase: (e) => `Suurenda ${e.fieldLabel}`,
	numberField: `Numbri väli`
};
var Be = {};
Be = {
	decrease: (e) => `V\xe4henn\xe4 ${e.fieldLabel}`,
	increase: (e) => `Lis\xe4\xe4 ${e.fieldLabel}`,
	numberField: `Numerokenttä`
};
var Ve = {};
Ve = {
	decrease: (e) => `Diminuer ${e.fieldLabel}`,
	increase: (e) => `Augmenter ${e.fieldLabel}`,
	numberField: `Champ de nombre`
};
var He = {};
He = {
	decrease: (e) => `\u{5D4}\u{5E7}\u{5D8}\u{5DF} ${e.fieldLabel}`,
	increase: (e) => `\u{5D4}\u{5D2}\u{5D3}\u{5DC} ${e.fieldLabel}`,
	numberField: `שדה מספר`
};
var Ue = {};
Ue = {
	decrease: (e) => `Smanji ${e.fieldLabel}`,
	increase: (e) => `Pove\u{107}aj ${e.fieldLabel}`,
	numberField: `Polje broja`
};
var We = {};
We = {
	decrease: (e) => `${e.fieldLabel} cs\xf6kkent\xe9se`,
	increase: (e) => `${e.fieldLabel} n\xf6vel\xe9se`,
	numberField: `Számmező`
};
var Ge = {};
Ge = {
	decrease: (e) => `Riduci ${e.fieldLabel}`,
	increase: (e) => `Aumenta ${e.fieldLabel}`,
	numberField: `Campo numero`
};
var Ke = {};
Ke = {
	decrease: (e) => `${e.fieldLabel}\u{3092}\u{7E2E}\u{5C0F}`,
	increase: (e) => `${e.fieldLabel}\u{3092}\u{62E1}\u{5927}`,
	numberField: `数値フィールド`
};
var qe = {};
qe = {
	decrease: (e) => `${e.fieldLabel} \u{AC10}\u{C18C}`,
	increase: (e) => `${e.fieldLabel} \u{C99D}\u{AC00}`,
	numberField: `번호 필드`
};
var Je = {};
Je = {
	decrease: (e) => `Suma\u{17E}inti ${e.fieldLabel}`,
	increase: (e) => `Padidinti ${e.fieldLabel}`,
	numberField: `Numerio laukas`
};
var Ye = {};
Ye = {
	decrease: (e) => `Samazin\u{101}\u{161}ana ${e.fieldLabel}`,
	increase: (e) => `Palielin\u{101}\u{161}ana ${e.fieldLabel}`,
	numberField: `Skaitļu lauks`
};
var Xe = {};
Xe = {
	decrease: (e) => `Reduser ${e.fieldLabel}`,
	increase: (e) => `\xd8k ${e.fieldLabel}`,
	numberField: `Tallfelt`
};
var Ze = {};
Ze = {
	decrease: (e) => `${e.fieldLabel} verlagen`,
	increase: (e) => `${e.fieldLabel} verhogen`,
	numberField: `Getalveld`
};
var Qe = {};
Qe = {
	decrease: (e) => `Zmniejsz ${e.fieldLabel}`,
	increase: (e) => `Zwi\u{119}ksz ${e.fieldLabel}`,
	numberField: `Pole numeru`
};
var $e = {};
$e = {
	decrease: (e) => `Diminuir ${e.fieldLabel}`,
	increase: (e) => `Aumentar ${e.fieldLabel}`,
	numberField: `Campo de número`
};
var et = {};
et = {
	decrease: (e) => `Diminuir ${e.fieldLabel}`,
	increase: (e) => `Aumentar ${e.fieldLabel}`,
	numberField: `Campo numérico`
};
var tt = {};
tt = {
	decrease: (e) => `Sc\u{103}dere ${e.fieldLabel}`,
	increase: (e) => `Cre\u{219}tere ${e.fieldLabel}`,
	numberField: `Câmp numeric`
};
var nt = {};
nt = {
	decrease: (e) => `\u{423}\u{43C}\u{435}\u{43D}\u{44C}\u{448}\u{435}\u{43D}\u{438}\u{435} ${e.fieldLabel}`,
	increase: (e) => `\u{423}\u{432}\u{435}\u{43B}\u{438}\u{447}\u{435}\u{43D}\u{438}\u{435} ${e.fieldLabel}`,
	numberField: `Числовое поле`
};
var rt = {};
rt = {
	decrease: (e) => `Zn\xed\u{17E}i\u{165} ${e.fieldLabel}`,
	increase: (e) => `Zv\xfd\u{161}i\u{165} ${e.fieldLabel}`,
	numberField: `Číselné pole`
};
var it = {};
it = {
	decrease: (e) => `Upadati ${e.fieldLabel}`,
	increase: (e) => `Pove\u{10D}ajte ${e.fieldLabel}`,
	numberField: `Številčno polje`
};
var at = {};
at = {
	decrease: (e) => `Smanji ${e.fieldLabel}`,
	increase: (e) => `Pove\u{107}aj ${e.fieldLabel}`,
	numberField: `Polje broja`
};
var ot = {};
ot = {
	decrease: (e) => `Minska ${e.fieldLabel}`,
	increase: (e) => `\xd6ka ${e.fieldLabel}`,
	numberField: `Nummerfält`
};
var st = {};
st = {
	decrease: (e) => `${e.fieldLabel} azalt`,
	increase: (e) => `${e.fieldLabel} artt\u{131}r`,
	numberField: `Sayı alanı`
};
var ct = {};
ct = {
	decrease: (e) => `\u{417}\u{43C}\u{435}\u{43D}\u{448}\u{438}\u{442}\u{438} ${e.fieldLabel}`,
	increase: (e) => `\u{417}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{438}\u{442}\u{438} ${e.fieldLabel}`,
	numberField: `Поле номера`
};
var lt = {};
lt = {
	decrease: (e) => `\u{964D}\u{4F4E} ${e.fieldLabel}`,
	increase: (e) => `\u{63D0}\u{9AD8} ${e.fieldLabel}`,
	numberField: `数字字段`
};
var ut = {};
ut = {
	decrease: (e) => `\u{7E2E}\u{5C0F} ${e.fieldLabel}`,
	increase: (e) => `\u{653E}\u{5927} ${e.fieldLabel}`,
	numberField: `數字欄位`
};
var dt = {};
dt = {
	"ar-AE": je,
	"bg-BG": Me,
	"cs-CZ": Ne,
	"da-DK": Pe,
	"de-DE": Fe,
	"el-GR": Ie,
	"en-US": Le,
	"es-ES": Re,
	"et-EE": ze,
	"fi-FI": Be,
	"fr-FR": Ve,
	"he-IL": He,
	"hr-HR": Ue,
	"hu-HU": We,
	"it-IT": Ge,
	"ja-JP": Ke,
	"ko-KR": qe,
	"lt-LT": Je,
	"lv-LV": Ye,
	"nb-NO": Xe,
	"nl-NL": Ze,
	"pl-PL": Qe,
	"pt-BR": $e,
	"pt-PT": et,
	"ro-RO": tt,
	"ru-RU": nt,
	"sk-SK": rt,
	"sl-SI": it,
	"sr-SP": at,
	"sv-SE": ot,
	"tr-TR": st,
	"uk-UA": ct,
	"zh-CN": lt,
	"zh-TW": ut
};
var ft = e(n(), 1);
function pt(e) {
	return e && e.__esModule ? e.default : e;
}
function mt(e, t, n) {
	let { id: a, decrementAriaLabel: o, incrementAriaLabel: l, isDisabled: d, isReadOnly: p, isRequired: m, minValue: v, maxValue: S, autoFocus: C, label: E, formatOptions: O, onBlur: k = () => {}, onFocus: A, onFocusChange: j, onKeyDown: M, onKeyUp: N, description: P, errorMessage: F, isWheelDisabled: I, ...L } = e, { increment: R, incrementToMax: z, decrement: B, decrementToMin: H, numberValue: G, inputValue: K, commit: q, commitValidation: te } = t, J = T(pt(dt), `@react-aria/numberfield`), ne = (0, V.useCallback)(() => {
		let e = n.current?.value ?? ``;
		(0, ft.flushSync)(() => {
			q();
		}), n.current?.value !== e && r(n.current?.value ?? ``, `assertive`);
	}, [q, n]), Y = x(a), { focusProps: re } = g({ onBlur() {
		ne();
	} }), ie = y(O), ae = (0, V.useMemo)(() => ie.resolvedOptions(), [ie]), oe = y({
		...O,
		currencySign: void 0
	}), { spinButtonProps: se, incrementButtonProps: ce, decrementButtonProps: le } = Ae({
		isDisabled: d,
		isReadOnly: p,
		isRequired: m,
		maxValue: S,
		minValue: v,
		onIncrement: R,
		onIncrementToMax: z,
		onDecrement: B,
		onDecrementToMin: H,
		value: G,
		textValue: (0, V.useMemo)(() => isNaN(G) ? `` : oe.format(G), [oe, G])
	}), [ue, de] = (0, V.useState)(!1), { focusWithinProps: fe } = h({
		isDisabled: d,
		onFocusWithinChange: de
	});
	W({
		onScroll: (0, V.useCallback)((e) => {
			Math.abs(e.deltaY) <= Math.abs(e.deltaX) || (e.deltaY > 0 ? R() : e.deltaY < 0 && B());
		}, [B, R]),
		isDisabled: I || d || p || !ue
	}, n);
	let pe = (ae.maximumFractionDigits ?? 0) > 0, me = t.minValue === void 0 || isNaN(t.minValue) || t.minValue < 0, X = `numeric`;
	i() ? me ? X = `text` : pe && (X = `decimal`) : u() && (me ? X = `numeric` : pe && (X = `decimal`));
	let he = (e) => {
		t.validate(e) && t.setInputValue(e);
	}, ge = (t) => {
		e.onPaste?.(t);
		let n = s(t);
		n && (n.selectionEnd ?? -1) - (n.selectionStart ?? 0) === n.value.length && (t.preventDefault(), q(t.clipboardData?.getData?.(`text/plain`)?.trim() ?? ``));
	}, _e = b(e), { keyboardProps: ve } = ee({
		isDisabled: d || p,
		shortcuts: { Enter: () => ((0, ft.flushSync)(() => {
			q();
		}), te(), { shouldPreventDefault: !1 }) },
		onKeyDown: M,
		onKeyUp: N
	}), { isInvalid: ye, validationErrors: be, validationDetails: xe } = t.displayValidation, { labelProps: Se, inputProps: Ce, descriptionProps: we, errorMessageProps: Te } = U({
		...L,
		..._e,
		name: void 0,
		form: void 0,
		label: E,
		autoFocus: C,
		isDisabled: d,
		isReadOnly: p,
		isRequired: m,
		validate: void 0,
		[w]: t,
		value: K,
		defaultValue: `!`,
		autoComplete: `off`,
		"aria-label": e[`aria-label`] || void 0,
		"aria-labelledby": e[`aria-labelledby`] || void 0,
		id: Y,
		type: `text`,
		inputMode: X,
		onChange: he,
		onBlur: k,
		onFocus: A,
		onFocusChange: j,
		onPaste: ge,
		description: P,
		errorMessage: F
	}, t, n), Ee = _(ve, Ce);
	D(n, t.defaultNumberValue, t.setNumberValue), ht(t, e.validationBehavior, e.commitBehavior, n, t.minValue, t.maxValue, e.step, t.numberValue);
	let De = _(se, re, Ee, {
		role: null,
		"aria-roledescription": c() ? null : J.format(`numberField`),
		"aria-valuemax": null,
		"aria-valuemin": null,
		"aria-valuenow": null,
		"aria-valuetext": null,
		autoCorrect: `off`,
		spellCheck: `false`
	});
	e.validationBehavior === `native` && (De[`aria-required`] = void 0);
	let Oe = (e) => {
		f() !== n.current && (e.pointerType === `mouse` ? n.current?.focus() : e.target.focus());
	}, Z = e[`aria-label`] || (typeof e.label == `string` ? e.label : ``), Q;
	Z || (Q = e.label == null ? e[`aria-labelledby`] : Se.id);
	let ke = x(), je = x(), Me = _(ce, {
		"aria-label": l || J.format(`increase`, { fieldLabel: Z }).trim(),
		id: Q && !l ? ke : null,
		"aria-labelledby": Q && !l ? `${ke} ${Q}` : null,
		"aria-controls": Y,
		excludeFromTabOrder: !0,
		preventFocusOnPress: !0,
		allowFocusWhenDisabled: !0,
		isDisabled: !t.canIncrement,
		onPressStart: Oe
	}), Ne = _(le, {
		"aria-label": o || J.format(`decrease`, { fieldLabel: Z }).trim(),
		id: Q && !o ? je : null,
		"aria-labelledby": Q && !o ? `${je} ${Q}` : null,
		"aria-controls": Y,
		excludeFromTabOrder: !0,
		preventFocusOnPress: !0,
		allowFocusWhenDisabled: !0,
		isDisabled: !t.canDecrement,
		onPressStart: Oe
	});
	return {
		groupProps: {
			...fe,
			role: `group`,
			"aria-disabled": d,
			"aria-invalid": ye ? `true` : void 0
		},
		labelProps: Se,
		inputProps: De,
		incrementButtonProps: Me,
		decrementButtonProps: Ne,
		errorMessageProps: Te,
		descriptionProps: we,
		isInvalid: ye,
		validationErrors: be,
		validationDetails: xe
	};
}
var $ = null;
function ht(e, t, n, r, i, a, o, s) {
	p(() => {
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
function gt(e) {
	let { minValue: t, maxValue: n, step: r, formatOptions: i, value: s, defaultValue: c = NaN, onChange: l, locale: u, isDisabled: f, isReadOnly: p, commitBehavior: m = `snap` } = e;
	s === null && (s = NaN);
	let h = (0, V.useCallback)((e) => r === void 0 || isNaN(r) ? d(e, t, n) : o(e, t, n, r), [
		r,
		t,
		n
	]);
	s !== void 0 && !isNaN(s) && m === `snap` && (s = h(s)), !isNaN(c) && m === `snap` && (c = h(c));
	let [g, _] = E(s, isNaN(c) ? NaN : c, l), [ee] = (0, V.useState)(g), [v, y] = (0, V.useState)(() => isNaN(g) ? `` : new a(u, i).format(g)), b = (0, V.useMemo)(() => new j(u, i), [u, i]), x = (0, V.useMemo)(() => b.getNumberingSystem(v), [b, v]), C = (0, V.useMemo)(() => new a(u, {
		...i,
		numberingSystem: x
	}), [
		u,
		i,
		x
	]), w = (0, V.useMemo)(() => C.resolvedOptions(), [C]), T = (0, V.useCallback)((e) => isNaN(e) || e === null ? `` : C.format(e), [C]), D = S({
		...e,
		value: g
	}), O = r !== void 0 && !isNaN(r) ? r : 1;
	w.style === `percent` && (r === void 0 || isNaN(r)) && (O = .01);
	let [k, A] = (0, V.useState)(g), [M, N] = (0, V.useState)(u), [P, F] = (0, V.useState)(i);
	Object.is(g, k) && u === M && _t(i, P) || (y(T(g)), A(g), N(u), F(i));
	let I = (0, V.useMemo)(() => b.parse(v), [b, v]), L = (e) => {
		let t = e === void 0 ? v : e, n = I;
		if (e !== void 0 && (n = b.parse(t)), !t.length) {
			_(NaN), y(s === void 0 ? `` : T(g));
			return;
		}
		if (isNaN(n)) {
			y(T(g));
			return;
		}
		let r = m === `snap` ? h(n) : n;
		r = b.parse(T(r));
		let i = r !== g;
		_(r), y(T(s === void 0 ? r : g)), i && D.commitValidation();
	}, R = (e, r = 0) => {
		let i = I;
		if (isNaN(i)) return o(isNaN(r) ? 0 : r, t, n, O);
		{
			let r = o(i, t, n, O);
			return e === `+` && r > i || e === `-` && r < i ? r : o(vt(e, i, O), t, n, O);
		}
	}, z = () => {
		let e = R(`+`, t);
		e === g && y(T(e)), _(e), D.commitValidation();
	}, B = () => {
		let e = R(`-`, n);
		e === g && y(T(e)), _(e), D.commitValidation();
	}, H = () => {
		n != null && (_(o(n, t, n, O)), D.commitValidation());
	}, U = () => {
		t != null && (_(t), D.commitValidation());
	}, W = (0, V.useMemo)(() => !f && !p && (isNaN(I) || n === void 0 || isNaN(n) || o(I, t, n, O) > I || vt(`+`, I, O) <= n), [
		f,
		p,
		t,
		n,
		O,
		I
	]), G = (0, V.useMemo)(() => !f && !p && (isNaN(I) || t === void 0 || isNaN(t) || o(I, t, n, O) < I || vt(`-`, I, O) >= t), [
		f,
		p,
		t,
		n,
		O,
		I
	]), K = (e) => b.isValidPartialNumber(e, t, n);
	return {
		...D,
		validate: K,
		increment: z,
		incrementToMax: H,
		decrement: B,
		decrementToMin: U,
		canIncrement: W,
		canDecrement: G,
		minValue: t,
		maxValue: n,
		numberValue: I,
		defaultNumberValue: isNaN(c) ? ee : c,
		setNumberValue: _,
		setInputValue: y,
		inputValue: v,
		commit: L
	};
}
function _t(e, t) {
	if (e === t) return !0;
	if (!e || !t) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (t[r] !== e[r]) return !1;
	return !0;
}
function vt(e, t, n) {
	let r = e === `+` ? t + n : t - n;
	if (t % 1 != 0 || n % 1 != 0) {
		let i = t.toString().split(`.`), a = n.toString().split(`.`), o = i[1] && i[1].length || 0, s = a[1] && a[1].length || 0, c = 10 ** Math.max(o, s);
		t = Math.round(t * c), n = Math.round(n * c), r = e === `+` ? t + n : t - n, r /= c;
	}
	return r;
}
export { U as a, W as i, mt as n, j as o, Ae as r, gt as t };
