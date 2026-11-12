import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t, t as n } from "./react-dom.B9zIfLd2.js";
import { E as r, F as i, Lt as a, P as o, Pt as s, _t as c, a as l, ct as u, d, f, ht as p, l as m, o as h, ot as g, p as _, tt as v, x as y, y as b, z as x, zt as S } from "./createLucideIcon.npgQlVHx.js";
import { c as C, l as w, o as T } from "./useFormValidation.CKcLNQoz.js";
import { n as E } from "./useLocalizedStringFormatter.CY4FHGAo.js";
import { t as D } from "./useControlledState.DijOhE0s.js";
import { t as O } from "./useFormReset.B5f8O4ea.js";
import { t as k } from "./useTextField.D1QWrtYY.js";
var A = RegExp(`^.*\\(.*\\).*$`), j = [
	`latn`,
	`arab`,
	`hanidec`,
	`deva`,
	`beng`,
	`fullwide`
], M = class {
	constructor(e, t = {}) {
		this.locale = e, this.options = t;
	}
	parse(e) {
		return P(this.locale, this.options, e).parse(e);
	}
	isValidPartialNumber(e, t, n) {
		return P(this.locale, this.options, e).isValidPartialNumber(e, t, n);
	}
	getNumberingSystem(e) {
		return P(this.locale, this.options, e).options.numberingSystem;
	}
}, N = new Map();
function P(e, t, n) {
	let r = F(e, t);
	if (!e.includes(`-nu-`) && !r.isValidPartialNumber(n)) {
		for (let i of j) if (i !== r.options.numberingSystem) {
			let r = F(e + (e.includes(`-u-`) ? `-nu-` : `-u-nu-`) + i, t);
			if (r.isValidPartialNumber(n)) return r;
		}
	}
	return r;
}
function F(e, t) {
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ``), r = N.get(n);
	return r || (r = new I(e, t), N.set(n, r)), r;
}
var I = class {
	constructor(e, t = {}) {
		this.locale = e, t.roundingIncrement !== 1 && t.roundingIncrement != null && (t.maximumFractionDigits == null && t.minimumFractionDigits == null ? (t.maximumFractionDigits = 0, t.minimumFractionDigits = 0) : t.maximumFractionDigits == null ? t.maximumFractionDigits = t.minimumFractionDigits : t.minimumFractionDigits ??= t.maximumFractionDigits), this.formatter = new Intl.NumberFormat(e, t), this.options = this.formatter.resolvedOptions(), this.symbols = z(e, this.formatter, this.options, t), this.options.style === `percent` && ((this.options.minimumFractionDigits ?? 0) > 18 || (this.options.maximumFractionDigits ?? 0) > 18) && console.warn(`NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.`);
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
			return new M(this.locale, e).parse(new _(this.locale, e).format(r));
		}
		return this.options.currencySign === `accounting` && A.test(e) && (r = -1 * r), r;
	}
	sanitize(e) {
		let t = this.formatter.resolvedOptions().useGrouping;
		return this.symbols.noNumeralUnits.length > 0 && this.symbols.noNumeralUnits.find((t) => t.unit === e) ? this.symbols.noNumeralUnits.find((t) => t.unit === e).value.toString() : (e = e.replace(this.symbols.literals, ``), this.symbols.minusSign && (e = e.replace(`-`, this.symbols.minusSign)), this.options.numberingSystem === `arab` && (this.symbols.decimal && (e = B(e, `,`, this.symbols.decimal), e = B(e, `،`, this.symbols.decimal)), this.symbols.group && t && (e = B(e, `.`, this.symbols.group))), this.symbols.group === `’` && e.includes(`'`) && t && (e = B(e, `'`, this.symbols.group)), this.symbols.group === `'` && e.includes(`’`) && t && (e = B(e, `’`, this.symbols.group)), this.options.locale === `fr-FR` && this.symbols.group && t && (e = B(e, ` `, this.symbols.group), e = B(e, /\u00A0/g, this.symbols.group)), e);
	}
	isValidPartialNumber(e, t = -1 / 0, n = 1 / 0) {
		let r = this.formatter.resolvedOptions().useGrouping;
		return e = this.sanitize(e), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && n > 0 && (e = e.slice(this.symbols.plusSign.length)), this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && r && (e = B(e, this.symbols.group, ``)), e = e.replace(this.symbols.numeral, ``), this.symbols.decimal && (e = e.replace(this.symbols.decimal, ``)), e.length === 0);
	}
}, L = new Set([
	`decimal`,
	`fraction`,
	`integer`,
	`minusSign`,
	`plusSign`,
	`group`
]), R = [
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
function z(e, t, n, r) {
	let i = new Intl.NumberFormat(e, {
		...n,
		minimumSignificantDigits: 1,
		maximumSignificantDigits: 21,
		roundingIncrement: 1,
		roundingPriority: `auto`,
		roundingMode: `halfExpand`,
		useGrouping: !0
	}), a = i.formatToParts(-10000.111), o = i.formatToParts(10000.111), s = R.map((e) => i.formatToParts(e)), c = s.map((e, t) => {
		let n = e.find((e) => e.type === `unit`);
		return n && !e.some((e) => e.type === `integer` || e.type === `fraction`) ? {
			unit: n.value,
			value: R[t]
		} : null;
	}).filter((e) => !!e), l = a.find((e) => e.type === `minusSign`)?.value ?? `-`, u = o.find((e) => e.type === `plusSign`)?.value;
	u || r?.signDisplay !== `exceptZero` && r?.signDisplay !== `always` || (u = `+`);
	let d = new Intl.NumberFormat(e, {
		...n,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).formatToParts(.001).find((e) => e.type === `decimal`)?.value, f = a.find((e) => e.type === `group`)?.value, p = a.filter((e) => !L.has(e.type)).map((e) => V(e.value)), m = s.flatMap((e) => e.filter((e) => !L.has(e.type)).map((e) => V(e.value))), h = [...new Set([...p, ...m])].sort((e, t) => t.length - e.length), g = h.length === 0 ? RegExp(`\\p{White_Space}|\\p{Cf}`, `gu`) : RegExp(`${h.join(`|`)}|\\p{White_Space}|\\p{Cf}`, `gu`), _ = [...new Intl.NumberFormat(n.locale, { useGrouping: !1 }).format(9876543210)].reverse(), v = new Map(_.map((e, t) => [e, t])), y = RegExp(`[${_.join(``)}]`, `g`);
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
function B(e, t, n) {
	return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function V(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
var H = e(t(), 1);
function U() {
	return typeof window < `u` && window.InputEvent && typeof InputEvent.prototype.getTargetRanges == `function`;
}
function W(e, t, n) {
	let r = x((e) => {
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
	(0, H.useEffect)(() => {
		if (!U() || !n.current) return;
		let e = n.current;
		return e.addEventListener(`beforeinput`, r, !1), () => {
			e.removeEventListener(`beforeinput`, r, !1);
		};
	}, [n]);
	let i = U() ? null : (e) => {
		let n = c(e).value.slice(0, c(e).selectionStart) + e.data + c(e).value.slice(c(e).selectionEnd);
		t.validate(n) || e.preventDefault();
	}, { labelProps: a, inputProps: o, descriptionProps: l, errorMessageProps: u, ...d } = k(e, n), f = (0, H.useRef)(null);
	return {
		inputProps: s(o, {
			onBeforeInput: i,
			onCompositionStart() {
				let { value: e, selectionStart: t, selectionEnd: r } = n.current;
				f.current = {
					value: e,
					selectionStart: t,
					selectionEnd: r
				};
			},
			onCompositionEnd() {
				if (n.current && !t.validate(n.current.value)) {
					let { value: e, selectionStart: r, selectionEnd: i } = f.current;
					n.current.value = e, n.current.setSelectionRange(r, i), t.setInputValue(e);
				}
			}
		}),
		labelProps: a,
		descriptionProps: l,
		errorMessageProps: u,
		...d
	};
}
function G(e, t) {
	let { onScroll: n, isDisabled: r } = e, i = (0, H.useCallback)((e) => {
		e.ctrlKey || (e.preventDefault(), e.stopPropagation(), n && n({
			deltaX: e.deltaX,
			deltaY: e.deltaY
		}));
	}, [n]);
	w(t, `wheel`, r ? void 0 : i);
}
var K = {};
K = { Empty: `فارغ` };
var ee = {};
ee = { Empty: `Изпразни` };
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
	"ar-AE": K,
	"bg-BG": ee,
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
	let t = (0, H.useRef)(void 0), { value: n, textValue: r, minValue: i, maxValue: a, isDisabled: s, isReadOnly: c, isRequired: u, onIncrement: d, onIncrementPage: f, onDecrement: p, onDecrementPage: m, onDecrementToMin: g, onIncrementToMax: _ } = e, v = E(Q(Z), `@react-aria/spinbutton`), b = (0, H.useRef)(!1), S = (0, H.useCallback)(() => {
		clearTimeout(t.current), b.current = !1;
	}, []), C = x(() => {
		S();
	});
	(0, H.useEffect)(() => () => C(), []);
	let { keyboardProps: w } = o({
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
				if (m) m();
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
	}), T = (0, H.useRef)(!1), D = () => {
		T.current = !0;
	}, O = () => {
		T.current = !1;
	}, k = r === `` ? v.format(`Empty`) : (r || `${n}`).replace(`-`, `−`);
	(0, H.useEffect)(() => {
		T.current && (h(`assertive`), l(k, `assertive`));
	}, [k]);
	let A = (0, H.useCallback)(() => {
		S();
	}, [S]), j = x(d ?? ke), M = x(p ?? ke), N = x(() => {
		(a === void 0 || isNaN(a) || n === void 0 || isNaN(n) || n < a) && (j(), P(60));
	}), P = x((e) => {
		C(), b.current = !0, t.current = window.setTimeout(N, e);
	}), F = x(() => {
		(i === void 0 || isNaN(i) || n === void 0 || isNaN(n) || n > i) && (M(), I(60));
	}), I = x((e) => {
		C(), b.current = !0, t.current = window.setTimeout(F, e);
	}), L = (e) => {
		e.preventDefault();
	}, { addGlobalListener: R, removeAllGlobalListeners: z } = y(), B = (0, H.useRef)(!1), [V, U] = (0, H.useState)(null);
	(0, H.useEffect)(() => {
		V === `touch` ? P(600) : V ? P(400) : V || C();
	}, [V]);
	let [W, G] = (0, H.useState)(null);
	return (0, H.useEffect)(() => {
		W === `touch` ? I(600) : W ? I(400) : W || C();
	}, [W]), {
		spinButtonProps: {
			role: `spinbutton`,
			"aria-valuenow": n !== void 0 && !isNaN(n) ? n : void 0,
			"aria-valuetext": k,
			"aria-valuemin": i,
			"aria-valuemax": a,
			"aria-disabled": s || void 0,
			"aria-readonly": c || void 0,
			"aria-required": u || void 0,
			...w,
			onFocus: D,
			onBlur: O
		},
		incrementButtonProps: {
			onPressStart: (e) => {
				S(), e.pointerType === `touch` ? (R(window, `pointercancel`, A, { capture: !0 }), B.current = !1, U(`touch`)) : (d?.(), U(`mouse`)), R(window, `contextmenu`, L);
			},
			onPressUp: (e) => {
				S(), e.pointerType === `touch` && (B.current = !0), z(), U(null);
			},
			onPressEnd: (e) => {
				S(), e.pointerType === `touch` && !b.current && B.current && d?.(), B.current = !1, U(null);
			},
			onFocus: D,
			onBlur: O
		},
		decrementButtonProps: {
			onPressStart: (e) => {
				S(), e.pointerType === `touch` ? (R(window, `pointercancel`, A, { capture: !0 }), B.current = !1, G(`touch`)) : (p?.(), G(`mouse`));
			},
			onPressUp: (e) => {
				S(), e.pointerType === `touch` && (B.current = !0), z(), G(null);
			},
			onPressEnd: (e) => {
				S(), e.pointerType === `touch` && !b.current && B.current && p?.(), B.current = !1, G(null);
			},
			onFocus: D,
			onBlur: O
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
	let { id: d, decrementAriaLabel: m, incrementAriaLabel: h, isDisabled: _, isReadOnly: y, isRequired: x, minValue: S, maxValue: C, autoFocus: w, label: D, formatOptions: k, onBlur: A = () => {}, onFocus: j, onFocusChange: M, onKeyDown: N, onKeyUp: P, description: F, errorMessage: I, isWheelDisabled: L, ...R } = e, { increment: z, incrementToMax: B, decrement: V, decrementToMin: U, numberValue: K, inputValue: ee, commit: q, commitValidation: te } = t, J = E(pt(dt), `@react-aria/numberfield`), ne = (0, H.useCallback)(() => {
		let e = n.current?.value ?? ``;
		(0, ft.flushSync)(() => {
			q();
		}), n.current?.value !== e && l(n.current?.value ?? ``, `assertive`);
	}, [q, n]), Y = a(d), { focusProps: re } = i({ onBlur() {
		ne();
	} }), ie = f(k), ae = (0, H.useMemo)(() => ie.resolvedOptions(), [ie]), oe = f({
		...k,
		currencySign: void 0
	}), { spinButtonProps: se, incrementButtonProps: ce, decrementButtonProps: le } = Ae({
		isDisabled: _,
		isReadOnly: y,
		isRequired: x,
		maxValue: C,
		minValue: S,
		onIncrement: z,
		onIncrementToMax: B,
		onDecrement: V,
		onDecrementToMin: U,
		value: K,
		textValue: (0, H.useMemo)(() => isNaN(K) ? `` : oe.format(K), [oe, K])
	}), [ue, de] = (0, H.useState)(!1), { focusWithinProps: fe } = b({
		isDisabled: _,
		onFocusWithinChange: de
	});
	G({
		onScroll: (0, H.useCallback)((e) => {
			Math.abs(e.deltaY) <= Math.abs(e.deltaX) || (e.deltaY > 0 ? z() : e.deltaY < 0 && V());
		}, [V, z]),
		isDisabled: L || _ || y || !ue
	}, n);
	let pe = (ae.maximumFractionDigits ?? 0) > 0, me = t.minValue === void 0 || isNaN(t.minValue) || t.minValue < 0, X = `numeric`;
	v() ? me ? X = `text` : pe && (X = `decimal`) : g() && (me ? X = `numeric` : pe && (X = `decimal`));
	let he = (e) => {
		t.validate(e) && t.setInputValue(e);
	}, ge = (t) => {
		e.onPaste?.(t);
		let n = c(t);
		n && (n.selectionEnd ?? -1) - (n.selectionStart ?? 0) === n.value.length && (t.preventDefault(), q(t.clipboardData?.getData?.(`text/plain`)?.trim() ?? ``));
	}, _e = r(e), { keyboardProps: ve } = o({
		isDisabled: _ || y,
		shortcuts: { Enter: () => ((0, ft.flushSync)(() => {
			q();
		}), te(), { shouldPreventDefault: !1 }) },
		onKeyDown: N,
		onKeyUp: P
	}), { isInvalid: ye, validationErrors: be, validationDetails: xe } = t.displayValidation, { labelProps: Se, inputProps: Ce, descriptionProps: we, errorMessageProps: Te } = W({
		...R,
		..._e,
		name: void 0,
		form: void 0,
		label: D,
		autoFocus: w,
		isDisabled: _,
		isReadOnly: y,
		isRequired: x,
		validate: void 0,
		[T]: t,
		value: ee,
		defaultValue: `!`,
		autoComplete: `off`,
		"aria-label": e[`aria-label`] || void 0,
		"aria-labelledby": e[`aria-labelledby`] || void 0,
		id: Y,
		type: `text`,
		inputMode: X,
		onChange: he,
		onBlur: A,
		onFocus: j,
		onFocusChange: M,
		onPaste: ge,
		description: F,
		errorMessage: I
	}, t, n), Ee = s(ve, Ce);
	O(n, t.defaultNumberValue, t.setNumberValue), ht(t, e.validationBehavior, e.commitBehavior, n, t.minValue, t.maxValue, e.step, t.numberValue);
	let De = s(se, re, Ee, {
		role: null,
		"aria-roledescription": u() ? null : J.format(`numberField`),
		"aria-valuemax": null,
		"aria-valuemin": null,
		"aria-valuenow": null,
		"aria-valuetext": null,
		autoCorrect: `off`,
		spellCheck: `false`
	});
	e.validationBehavior === `native` && (De[`aria-required`] = void 0);
	let Oe = (e) => {
		p() !== n.current && (e.pointerType === `mouse` ? n.current?.focus() : e.target.focus());
	}, Z = e[`aria-label`] || (typeof e.label == `string` ? e.label : ``), Q;
	Z || (Q = e.label == null ? e[`aria-labelledby`] : Se.id);
	let ke = a(), je = a(), Me = s(ce, {
		"aria-label": h || J.format(`increase`, { fieldLabel: Z }).trim(),
		id: Q && !h ? ke : null,
		"aria-labelledby": Q && !h ? `${ke} ${Q}` : null,
		"aria-controls": Y,
		excludeFromTabOrder: !0,
		preventFocusOnPress: !0,
		allowFocusWhenDisabled: !0,
		isDisabled: !t.canIncrement,
		onPressStart: Oe
	}), Ne = s(le, {
		"aria-label": m || J.format(`decrease`, { fieldLabel: Z }).trim(),
		id: Q && !m ? je : null,
		"aria-labelledby": Q && !m ? `${je} ${Q}` : null,
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
			"aria-disabled": _,
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
	S(() => {
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
	let { minValue: t, maxValue: n, step: r, formatOptions: i, value: a, defaultValue: o = NaN, onChange: s, locale: c, isDisabled: l, isReadOnly: u, commitBehavior: f = `snap` } = e;
	a === null && (a = NaN);
	let p = (0, H.useCallback)((e) => r === void 0 || isNaN(r) ? m(e, t, n) : d(e, t, n, r), [
		r,
		t,
		n
	]);
	a !== void 0 && !isNaN(a) && f === `snap` && (a = p(a)), !isNaN(o) && f === `snap` && (o = p(o));
	let [h, g] = D(a, isNaN(o) ? NaN : o, s), [v] = (0, H.useState)(h), [y, b] = (0, H.useState)(() => isNaN(h) ? `` : new _(c, i).format(h)), x = (0, H.useMemo)(() => new M(c, i), [c, i]), S = (0, H.useMemo)(() => x.getNumberingSystem(y), [x, y]), w = (0, H.useMemo)(() => new _(c, {
		...i,
		numberingSystem: S
	}), [
		c,
		i,
		S
	]), T = (0, H.useMemo)(() => w.resolvedOptions(), [w]), E = (0, H.useCallback)((e) => isNaN(e) || e === null ? `` : w.format(e), [w]), O = C({
		...e,
		value: h
	}), k = r !== void 0 && !isNaN(r) ? r : 1;
	T.style === `percent` && (r === void 0 || isNaN(r)) && (k = .01);
	let [A, j] = (0, H.useState)(h), [N, P] = (0, H.useState)(c), [F, I] = (0, H.useState)(i);
	Object.is(h, A) && c === N && _t(i, F) || (b(E(h)), j(h), P(c), I(i));
	let L = (0, H.useMemo)(() => x.parse(y), [x, y]), R = (e) => {
		let t = e === void 0 ? y : e, n = L;
		if (e !== void 0 && (n = x.parse(t)), !t.length) {
			g(NaN), b(a === void 0 ? `` : E(h));
			return;
		}
		if (isNaN(n)) {
			b(E(h));
			return;
		}
		let r = f === `snap` ? p(n) : n;
		r = x.parse(E(r));
		let i = r !== h;
		g(r), b(E(a === void 0 ? r : h)), i && O.commitValidation();
	}, z = (e, r = 0) => {
		let i = L;
		if (isNaN(i)) return d(isNaN(r) ? 0 : r, t, n, k);
		{
			let r = d(i, t, n, k);
			return e === `+` && r > i || e === `-` && r < i ? r : d(vt(e, i, k), t, n, k);
		}
	}, B = () => {
		let e = z(`+`, t);
		e === h && b(E(e)), g(e), O.commitValidation();
	}, V = () => {
		let e = z(`-`, n);
		e === h && b(E(e)), g(e), O.commitValidation();
	}, U = () => {
		n != null && (g(d(n, t, n, k)), O.commitValidation());
	}, W = () => {
		t != null && (g(t), O.commitValidation());
	}, G = (0, H.useMemo)(() => !l && !u && (isNaN(L) || n === void 0 || isNaN(n) || d(L, t, n, k) > L || vt(`+`, L, k) <= n), [
		l,
		u,
		t,
		n,
		k,
		L
	]), K = (0, H.useMemo)(() => !l && !u && (isNaN(L) || t === void 0 || isNaN(t) || d(L, t, n, k) < L || vt(`-`, L, k) >= t), [
		l,
		u,
		t,
		n,
		k,
		L
	]), ee = (e) => x.isValidPartialNumber(e, t, n);
	return {
		...O,
		validate: ee,
		increment: B,
		incrementToMax: U,
		decrement: V,
		decrementToMin: W,
		canIncrement: G,
		canDecrement: K,
		minValue: t,
		maxValue: n,
		numberValue: L,
		defaultNumberValue: isNaN(o) ? v : o,
		setNumberValue: g,
		setInputValue: b,
		inputValue: y,
		commit: R
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
export { W as a, G as i, mt as n, M as o, Ae as r, gt as t };
