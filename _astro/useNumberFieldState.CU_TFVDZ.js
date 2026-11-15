import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t, t as n } from "./react-dom.B9zIfLd2.js";
import { $t as r, G as i, H as a, Ht as o, J as s, Lt as c, V as l, Wt as u, Y as d, Zt as f, _t as p, ct as m, gn as h, gt as g, q as _, rt as v, tt as y, xn as b, xt as x, yn as S } from "./doc.C_PtMNUB.js";
import { t as C } from "./useEvent.DZ6Jaavz.js";
import { n as ee } from "./useLocalizedStringFormatter.whw0Qxu0.js";
import { t as te } from "./useControlledState.DijOhE0s.js";
import { t as w } from "./useFormReset.Cf-RVIHo.js";
import { c as T, o as E } from "./useFormValidation.DOqf-YmE.js";
import { t as D } from "./useTextField.DqlAegV0.js";
var O = RegExp(`^.*\\(.*\\).*$`), k = [
	`latn`,
	`arab`,
	`hanidec`,
	`deva`,
	`beng`,
	`fullwide`
], A = class {
	constructor(e, t = {}) {
		this.locale = e, this.options = t;
	}
	parse(e) {
		return M(this.locale, this.options, e).parse(e);
	}
	isValidPartialNumber(e, t, n) {
		return M(this.locale, this.options, e).isValidPartialNumber(e, t, n);
	}
	getNumberingSystem(e) {
		return M(this.locale, this.options, e).options.numberingSystem;
	}
}, j = new Map();
function M(e, t, n) {
	let r = N(e, t);
	if (!e.includes(`-nu-`) && !r.isValidPartialNumber(n)) {
		for (let i of k) if (i !== r.options.numberingSystem) {
			let r = N(e + (e.includes(`-u-`) ? `-nu-` : `-u-nu-`) + i, t);
			if (r.isValidPartialNumber(n)) return r;
		}
	}
	return r;
}
function N(e, t) {
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ``), r = j.get(n);
	return r || (r = new P(e, t), j.set(n, r)), r;
}
var P = class {
	constructor(e, t = {}) {
		this.locale = e, t.roundingIncrement !== 1 && t.roundingIncrement != null && (t.maximumFractionDigits == null && t.minimumFractionDigits == null ? (t.maximumFractionDigits = 0, t.minimumFractionDigits = 0) : t.maximumFractionDigits == null ? t.maximumFractionDigits = t.minimumFractionDigits : t.minimumFractionDigits ??= t.maximumFractionDigits), this.formatter = new Intl.NumberFormat(e, t), this.options = this.formatter.resolvedOptions(), this.symbols = L(e, this.formatter, this.options, t), this.options.style === `percent` && ((this.options.minimumFractionDigits ?? 0) > 18 || (this.options.maximumFractionDigits ?? 0) > 18) && console.warn(`NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.`);
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
			return new A(this.locale, e).parse(new d(this.locale, e).format(r));
		}
		return this.options.currencySign === `accounting` && O.test(e) && (r = -1 * r), r;
	}
	sanitize(e) {
		let t = this.formatter.resolvedOptions().useGrouping;
		return this.symbols.noNumeralUnits.length > 0 && this.symbols.noNumeralUnits.find((t) => t.unit === e) ? this.symbols.noNumeralUnits.find((t) => t.unit === e).value.toString() : (e = e.replace(this.symbols.literals, ``), this.symbols.minusSign && (e = e.replace(`-`, this.symbols.minusSign)), this.options.numberingSystem === `arab` && (this.symbols.decimal && (e = R(e, `,`, this.symbols.decimal), e = R(e, `،`, this.symbols.decimal)), this.symbols.group && t && (e = R(e, `.`, this.symbols.group))), this.symbols.group === `’` && e.includes(`'`) && t && (e = R(e, `'`, this.symbols.group)), this.symbols.group === `'` && e.includes(`’`) && t && (e = R(e, `’`, this.symbols.group)), this.options.locale === `fr-FR` && this.symbols.group && t && (e = R(e, ` `, this.symbols.group), e = R(e, /\u00A0/g, this.symbols.group)), e);
	}
	isValidPartialNumber(e, t = -1 / 0, n = 1 / 0) {
		let r = this.formatter.resolvedOptions().useGrouping;
		return e = this.sanitize(e), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && n > 0 && (e = e.slice(this.symbols.plusSign.length)), this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && r && (e = R(e, this.symbols.group, ``)), e = e.replace(this.symbols.numeral, ``), this.symbols.decimal && (e = e.replace(this.symbols.decimal, ``)), e.length === 0);
	}
}, F = new Set([
	`decimal`,
	`fraction`,
	`integer`,
	`minusSign`,
	`plusSign`,
	`group`
]), I = [
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
function L(e, t, n, r) {
	let i = new Intl.NumberFormat(e, {
		...n,
		minimumSignificantDigits: 1,
		maximumSignificantDigits: 21,
		roundingIncrement: 1,
		roundingPriority: `auto`,
		roundingMode: `halfExpand`,
		useGrouping: !0
	}), a = i.formatToParts(-10000.111), o = i.formatToParts(10000.111), s = I.map((e) => i.formatToParts(e)), c = s.map((e, t) => {
		let n = e.find((e) => e.type === `unit`);
		return n && !e.some((e) => e.type === `integer` || e.type === `fraction`) ? {
			unit: n.value,
			value: I[t]
		} : null;
	}).filter((e) => !!e), l = a.find((e) => e.type === `minusSign`)?.value ?? `-`, u = o.find((e) => e.type === `plusSign`)?.value;
	u || r?.signDisplay !== `exceptZero` && r?.signDisplay !== `always` || (u = `+`);
	let d = new Intl.NumberFormat(e, {
		...n,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).formatToParts(.001).find((e) => e.type === `decimal`)?.value, f = a.find((e) => e.type === `group`)?.value, p = a.filter((e) => !F.has(e.type)).map((e) => z(e.value)), m = s.flatMap((e) => e.filter((e) => !F.has(e.type)).map((e) => z(e.value))), h = [...new Set([...p, ...m])].sort((e, t) => t.length - e.length), g = h.length === 0 ? RegExp(`\\p{White_Space}|\\p{Cf}`, `gu`) : RegExp(`${h.join(`|`)}|\\p{White_Space}|\\p{Cf}`, `gu`), _ = [...new Intl.NumberFormat(n.locale, { useGrouping: !1 }).format(9876543210)].reverse(), v = new Map(_.map((e, t) => [e, t])), y = RegExp(`[${_.join(``)}]`, `g`);
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
function R(e, t, n) {
	return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function z(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
var B = e(t(), 1);
function V() {
	return typeof window < `u` && window.InputEvent && typeof InputEvent.prototype.getTargetRanges == `function`;
}
function H(e, t, n) {
	let i = x((e) => {
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
	(0, B.useEffect)(() => {
		if (!V() || !n.current) return;
		let e = n.current;
		return e.addEventListener(`beforeinput`, i, !1), () => {
			e.removeEventListener(`beforeinput`, i, !1);
		};
	}, [n]);
	let a = V() ? null : (e) => {
		let n = r(e).value.slice(0, r(e).selectionStart) + e.data + r(e).value.slice(r(e).selectionEnd);
		t.validate(n) || e.preventDefault();
	}, { labelProps: o, inputProps: s, descriptionProps: c, errorMessageProps: l, ...u } = D(e, n), d = (0, B.useRef)(null);
	return {
		inputProps: h(s, {
			onBeforeInput: a,
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
		labelProps: o,
		descriptionProps: c,
		errorMessageProps: l,
		...u
	};
}
function U(e, t) {
	let { onScroll: n, isDisabled: r } = e, i = (0, B.useCallback)((e) => {
		e.ctrlKey || (e.preventDefault(), e.stopPropagation(), n && n({
			deltaX: e.deltaX,
			deltaY: e.deltaY
		}));
	}, [n]);
	C(t, `wheel`, r ? void 0 : i);
}
var W = {};
W = { Empty: `فارغ` };
var ne = {};
ne = { Empty: `Изпразни` };
var G = {};
G = { Empty: `Prázdné` };
var re = {};
re = { Empty: `Tom` };
var K = {};
K = { Empty: `Leer` };
var ie = {};
ie = { Empty: `Άδειο` };
var q = {};
q = { Empty: `Empty` };
var ae = {};
ae = { Empty: `Vacío` };
var J = {};
J = { Empty: `Tühjenda` };
var oe = {};
oe = { Empty: `Tyhjä` };
var Y = {};
Y = { Empty: `Vide` };
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
	"ar-AE": W,
	"bg-BG": ne,
	"cs-CZ": G,
	"da-DK": re,
	"de-DE": K,
	"el-GR": ie,
	"en-US": q,
	"es-ES": ae,
	"et-EE": J,
	"fi-FI": oe,
	"fr-FR": Y,
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
	let t = (0, B.useRef)(void 0), { value: n, textValue: r, minValue: i, maxValue: o, isDisabled: s, isReadOnly: c, isRequired: u, onIncrement: d, onIncrementPage: f, onDecrement: p, onDecrementPage: m, onDecrementToMin: h, onIncrementToMax: _ } = e, y = ee(Q(Z), `@react-aria/spinbutton`), b = (0, B.useRef)(!1), S = (0, B.useCallback)(() => {
		clearTimeout(t.current), b.current = !1;
	}, []), C = x(() => {
		S();
	});
	(0, B.useEffect)(() => () => C(), []);
	let { keyboardProps: te } = g({
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
				if (h) h();
				else return !1;
			},
			End: () => {
				if (_) _();
				else return !1;
			}
		},
		allowRepeats: !0
	}), w = (0, B.useRef)(!1), T = () => {
		w.current = !0;
	}, E = () => {
		w.current = !1;
	}, D = r === `` ? y.format(`Empty`) : (r || `${n}`).replace(`-`, `−`);
	(0, B.useEffect)(() => {
		w.current && (a(`assertive`), l(D, `assertive`));
	}, [D]);
	let O = (0, B.useCallback)(() => {
		S();
	}, [S]), k = x(d ?? ke), A = x(p ?? ke), j = x(() => {
		(o === void 0 || isNaN(o) || n === void 0 || isNaN(n) || n < o) && (k(), M(60));
	}), M = x((e) => {
		C(), b.current = !0, t.current = window.setTimeout(j, e);
	}), N = x(() => {
		(i === void 0 || isNaN(i) || n === void 0 || isNaN(n) || n > i) && (A(), P(60));
	}), P = x((e) => {
		C(), b.current = !0, t.current = window.setTimeout(N, e);
	}), F = (e) => {
		e.preventDefault();
	}, { addGlobalListener: I, removeAllGlobalListeners: L } = v(), R = (0, B.useRef)(!1), [z, V] = (0, B.useState)(null);
	(0, B.useEffect)(() => {
		z === `touch` ? M(600) : z ? M(400) : z || C();
	}, [z]);
	let [H, U] = (0, B.useState)(null);
	return (0, B.useEffect)(() => {
		H === `touch` ? P(600) : H ? P(400) : H || C();
	}, [H]), {
		spinButtonProps: {
			role: `spinbutton`,
			"aria-valuenow": n !== void 0 && !isNaN(n) ? n : void 0,
			"aria-valuetext": D,
			"aria-valuemin": i,
			"aria-valuemax": o,
			"aria-disabled": s || void 0,
			"aria-readonly": c || void 0,
			"aria-required": u || void 0,
			...te,
			onFocus: T,
			onBlur: E
		},
		incrementButtonProps: {
			onPressStart: (e) => {
				S(), e.pointerType === `touch` ? (I(window, `pointercancel`, O, { capture: !0 }), R.current = !1, V(`touch`)) : (d?.(), V(`mouse`)), I(window, `contextmenu`, F);
			},
			onPressUp: (e) => {
				S(), e.pointerType === `touch` && (R.current = !0), L(), V(null);
			},
			onPressEnd: (e) => {
				S(), e.pointerType === `touch` && !b.current && R.current && d?.(), R.current = !1, V(null);
			},
			onFocus: T,
			onBlur: E
		},
		decrementButtonProps: {
			onPressStart: (e) => {
				S(), e.pointerType === `touch` ? (I(window, `pointercancel`, O, { capture: !0 }), R.current = !1, U(`touch`)) : (p?.(), U(`mouse`));
			},
			onPressUp: (e) => {
				S(), e.pointerType === `touch` && (R.current = !0), L(), U(null);
			},
			onPressEnd: (e) => {
				S(), e.pointerType === `touch` && !b.current && R.current && p?.(), R.current = !1, U(null);
			},
			onFocus: T,
			onBlur: E
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
	let { id: i, decrementAriaLabel: a, incrementAriaLabel: d, isDisabled: _, isReadOnly: v, isRequired: b, minValue: x, maxValue: C, autoFocus: te, label: T, formatOptions: D, onBlur: O = () => {}, onFocus: k, onFocusChange: A, onKeyDown: j, onKeyUp: M, description: N, errorMessage: P, isWheelDisabled: F, ...I } = e, { increment: L, incrementToMax: R, decrement: z, decrementToMin: V, numberValue: W, inputValue: ne, commit: G, commitValidation: re } = t, K = ee(pt(dt), `@react-aria/numberfield`), ie = (0, B.useCallback)(() => {
		let e = n.current?.value ?? ``;
		(0, ft.flushSync)(() => {
			G();
		}), n.current?.value !== e && l(n.current?.value ?? ``, `assertive`);
	}, [G, n]), q = S(i), { focusProps: ae } = p({ onBlur() {
		ie();
	} }), J = s(D), oe = (0, B.useMemo)(() => J.resolvedOptions(), [J]), Y = s({
		...D,
		currencySign: void 0
	}), { spinButtonProps: se, incrementButtonProps: ce, decrementButtonProps: le } = Ae({
		isDisabled: _,
		isReadOnly: v,
		isRequired: b,
		maxValue: C,
		minValue: x,
		onIncrement: L,
		onIncrementToMax: R,
		onDecrement: z,
		onDecrementToMin: V,
		value: W,
		textValue: (0, B.useMemo)(() => isNaN(W) ? `` : Y.format(W), [Y, W])
	}), [ue, de] = (0, B.useState)(!1), { focusWithinProps: fe } = y({
		isDisabled: _,
		onFocusWithinChange: de
	});
	U({
		onScroll: (0, B.useCallback)((e) => {
			Math.abs(e.deltaY) <= Math.abs(e.deltaX) || (e.deltaY > 0 ? L() : e.deltaY < 0 && z());
		}, [z, L]),
		isDisabled: F || _ || v || !ue
	}, n);
	let pe = (oe.maximumFractionDigits ?? 0) > 0, me = t.minValue === void 0 || isNaN(t.minValue) || t.minValue < 0, X = `numeric`;
	c() ? me ? X = `text` : pe && (X = `decimal`) : o() && (me ? X = `numeric` : pe && (X = `decimal`));
	let he = (e) => {
		t.validate(e) && t.setInputValue(e);
	}, ge = (t) => {
		e.onPaste?.(t);
		let n = r(t);
		n && (n.selectionEnd ?? -1) - (n.selectionStart ?? 0) === n.value.length && (t.preventDefault(), G(t.clipboardData?.getData?.(`text/plain`)?.trim() ?? ``));
	}, _e = m(e), { keyboardProps: ve } = g({
		isDisabled: _ || v,
		shortcuts: { Enter: () => ((0, ft.flushSync)(() => {
			G();
		}), re(), { shouldPreventDefault: !1 }) },
		onKeyDown: j,
		onKeyUp: M
	}), { isInvalid: ye, validationErrors: be, validationDetails: xe } = t.displayValidation, { labelProps: Se, inputProps: Ce, descriptionProps: we, errorMessageProps: Te } = H({
		...I,
		..._e,
		name: void 0,
		form: void 0,
		label: T,
		autoFocus: te,
		isDisabled: _,
		isReadOnly: v,
		isRequired: b,
		validate: void 0,
		[E]: t,
		value: ne,
		defaultValue: `!`,
		autoComplete: `off`,
		"aria-label": e[`aria-label`] || void 0,
		"aria-labelledby": e[`aria-labelledby`] || void 0,
		id: q,
		type: `text`,
		inputMode: X,
		onChange: he,
		onBlur: O,
		onFocus: k,
		onFocusChange: A,
		onPaste: ge,
		description: N,
		errorMessage: P
	}, t, n), Ee = h(ve, Ce);
	w(n, t.defaultNumberValue, t.setNumberValue), ht(t, e.validationBehavior, e.commitBehavior, n, t.minValue, t.maxValue, e.step, t.numberValue);
	let De = h(se, ae, Ee, {
		role: null,
		"aria-roledescription": u() ? null : K.format(`numberField`),
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
	let ke = S(), je = S(), Me = h(ce, {
		"aria-label": d || K.format(`increase`, { fieldLabel: Z }).trim(),
		id: Q && !d ? ke : null,
		"aria-labelledby": Q && !d ? `${ke} ${Q}` : null,
		"aria-controls": q,
		excludeFromTabOrder: !0,
		preventFocusOnPress: !0,
		allowFocusWhenDisabled: !0,
		isDisabled: !t.canIncrement,
		onPressStart: Oe
	}), Ne = h(le, {
		"aria-label": a || K.format(`decrease`, { fieldLabel: Z }).trim(),
		id: Q && !a ? je : null,
		"aria-labelledby": Q && !a ? `${je} ${Q}` : null,
		"aria-controls": q,
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
	b(() => {
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
	let { minValue: t, maxValue: n, step: r, formatOptions: a, value: o, defaultValue: s = NaN, onChange: c, locale: l, isDisabled: u, isReadOnly: f, commitBehavior: p = `snap` } = e;
	o === null && (o = NaN);
	let m = (0, B.useCallback)((e) => r === void 0 || isNaN(r) ? i(e, t, n) : _(e, t, n, r), [
		r,
		t,
		n
	]);
	o !== void 0 && !isNaN(o) && p === `snap` && (o = m(o)), !isNaN(s) && p === `snap` && (s = m(s));
	let [h, g] = te(o, isNaN(s) ? NaN : s, c), [v] = (0, B.useState)(h), [y, b] = (0, B.useState)(() => isNaN(h) ? `` : new d(l, a).format(h)), x = (0, B.useMemo)(() => new A(l, a), [l, a]), S = (0, B.useMemo)(() => x.getNumberingSystem(y), [x, y]), C = (0, B.useMemo)(() => new d(l, {
		...a,
		numberingSystem: S
	}), [
		l,
		a,
		S
	]), ee = (0, B.useMemo)(() => C.resolvedOptions(), [C]), w = (0, B.useCallback)((e) => isNaN(e) || e === null ? `` : C.format(e), [C]), E = T({
		...e,
		value: h
	}), D = r !== void 0 && !isNaN(r) ? r : 1;
	ee.style === `percent` && (r === void 0 || isNaN(r)) && (D = .01);
	let [O, k] = (0, B.useState)(h), [j, M] = (0, B.useState)(l), [N, P] = (0, B.useState)(a);
	Object.is(h, O) && l === j && _t(a, N) || (b(w(h)), k(h), M(l), P(a));
	let F = (0, B.useMemo)(() => x.parse(y), [x, y]), I = (e) => {
		let t = e === void 0 ? y : e, n = F;
		if (e !== void 0 && (n = x.parse(t)), !t.length) {
			g(NaN), b(o === void 0 ? `` : w(h));
			return;
		}
		if (isNaN(n)) {
			b(w(h));
			return;
		}
		let r = p === `snap` ? m(n) : n;
		r = x.parse(w(r));
		let i = r !== h;
		g(r), b(w(o === void 0 ? r : h)), i && E.commitValidation();
	}, L = (e, r = 0) => {
		let i = F;
		if (isNaN(i)) return _(isNaN(r) ? 0 : r, t, n, D);
		{
			let r = _(i, t, n, D);
			return e === `+` && r > i || e === `-` && r < i ? r : _(vt(e, i, D), t, n, D);
		}
	}, R = () => {
		let e = L(`+`, t);
		e === h && b(w(e)), g(e), E.commitValidation();
	}, z = () => {
		let e = L(`-`, n);
		e === h && b(w(e)), g(e), E.commitValidation();
	}, V = () => {
		n != null && (g(_(n, t, n, D)), E.commitValidation());
	}, H = () => {
		t != null && (g(t), E.commitValidation());
	}, U = (0, B.useMemo)(() => !u && !f && (isNaN(F) || n === void 0 || isNaN(n) || _(F, t, n, D) > F || vt(`+`, F, D) <= n), [
		u,
		f,
		t,
		n,
		D,
		F
	]), W = (0, B.useMemo)(() => !u && !f && (isNaN(F) || t === void 0 || isNaN(t) || _(F, t, n, D) < F || vt(`-`, F, D) >= t), [
		u,
		f,
		t,
		n,
		D,
		F
	]), ne = (e) => x.isValidPartialNumber(e, t, n);
	return {
		...E,
		validate: ne,
		increment: R,
		incrementToMax: V,
		decrement: z,
		decrementToMin: H,
		canIncrement: U,
		canDecrement: W,
		minValue: t,
		maxValue: n,
		numberValue: F,
		defaultNumberValue: isNaN(s) ? v : s,
		setNumberValue: g,
		setInputValue: b,
		inputValue: y,
		commit: I
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
export { H as a, U as i, mt as n, A as o, Ae as r, gt as t };
