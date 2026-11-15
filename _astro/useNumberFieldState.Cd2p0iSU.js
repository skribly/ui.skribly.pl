import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t, t as n } from "./react-dom.B9zIfLd2.js";
import { B as r, It as i, J as a, K as o, Qt as s, Ut as c, V as l, Vt as u, W as d, Xt as f, bn as p, bt as m, et as h, gt as g, hn as _, ht as v, nt as y, q as b, st as x, vn as S } from "./doc.DoLlUurT.js";
import { t as C } from "./useEvent.DWfPNmdD.js";
import { n as ee } from "./useLocalizedStringFormatter.DOzdQqIj.js";
import { t as te } from "./useControlledState.DijOhE0s.js";
import { t as w } from "./useFormReset.ClC-r4N4.js";
import { c as T, o as E } from "./useFormValidation.Drb6gvQC.js";
import { t as D } from "./useTextField.CoryCHp2.js";
var O = RegExp(`^.*\\(.*\\).*$`), ne = [
	`latn`,
	`arab`,
	`hanidec`,
	`deva`,
	`beng`,
	`fullwide`
], k = class {
	constructor(e, t = {}) {
		this.locale = e, this.options = t;
	}
	parse(e) {
		return j(this.locale, this.options, e).parse(e);
	}
	isValidPartialNumber(e, t, n) {
		return j(this.locale, this.options, e).isValidPartialNumber(e, t, n);
	}
	getNumberingSystem(e) {
		return j(this.locale, this.options, e).options.numberingSystem;
	}
}, A = new Map();
function j(e, t, n) {
	let r = M(e, t);
	if (!e.includes(`-nu-`) && !r.isValidPartialNumber(n)) {
		for (let i of ne) if (i !== r.options.numberingSystem) {
			let r = M(e + (e.includes(`-u-`) ? `-nu-` : `-u-nu-`) + i, t);
			if (r.isValidPartialNumber(n)) return r;
		}
	}
	return r;
}
function M(e, t) {
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ``), r = A.get(n);
	return r || (r = new N(e, t), A.set(n, r)), r;
}
var N = class {
	constructor(e, t = {}) {
		this.locale = e, t.roundingIncrement !== 1 && t.roundingIncrement != null && (t.maximumFractionDigits == null && t.minimumFractionDigits == null ? (t.maximumFractionDigits = 0, t.minimumFractionDigits = 0) : t.maximumFractionDigits == null ? t.maximumFractionDigits = t.minimumFractionDigits : t.minimumFractionDigits ??= t.maximumFractionDigits), this.formatter = new Intl.NumberFormat(e, t), this.options = this.formatter.resolvedOptions(), this.symbols = I(e, this.formatter, this.options, t), this.options.style === `percent` && ((this.options.minimumFractionDigits ?? 0) > 18 || (this.options.maximumFractionDigits ?? 0) > 18) && console.warn(`NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.`);
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
			return new k(this.locale, e).parse(new a(this.locale, e).format(r));
		}
		return this.options.currencySign === `accounting` && O.test(e) && (r = -1 * r), r;
	}
	sanitize(e) {
		let t = this.formatter.resolvedOptions().useGrouping;
		return this.symbols.noNumeralUnits.length > 0 && this.symbols.noNumeralUnits.find((t) => t.unit === e) ? this.symbols.noNumeralUnits.find((t) => t.unit === e).value.toString() : (e = e.replace(this.symbols.literals, ``), this.symbols.minusSign && (e = e.replace(`-`, this.symbols.minusSign)), this.options.numberingSystem === `arab` && (this.symbols.decimal && (e = L(e, `,`, this.symbols.decimal), e = L(e, `،`, this.symbols.decimal)), this.symbols.group && t && (e = L(e, `.`, this.symbols.group))), this.symbols.group === `’` && e.includes(`'`) && t && (e = L(e, `'`, this.symbols.group)), this.symbols.group === `'` && e.includes(`’`) && t && (e = L(e, `’`, this.symbols.group)), this.options.locale === `fr-FR` && this.symbols.group && t && (e = L(e, ` `, this.symbols.group), e = L(e, /\u00A0/g, this.symbols.group)), e);
	}
	isValidPartialNumber(e, t = -1 / 0, n = 1 / 0) {
		let r = this.formatter.resolvedOptions().useGrouping;
		return e = this.sanitize(e), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && n > 0 && (e = e.slice(this.symbols.plusSign.length)), this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && r && (e = L(e, this.symbols.group, ``)), e = e.replace(this.symbols.numeral, ``), this.symbols.decimal && (e = e.replace(this.symbols.decimal, ``)), e.length === 0);
	}
}, P = new Set([
	`decimal`,
	`fraction`,
	`integer`,
	`minusSign`,
	`plusSign`,
	`group`
]), F = [
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
function I(e, t, n, r) {
	let i = new Intl.NumberFormat(e, {
		...n,
		minimumSignificantDigits: 1,
		maximumSignificantDigits: 21,
		roundingIncrement: 1,
		roundingPriority: `auto`,
		roundingMode: `halfExpand`,
		useGrouping: !0
	}), a = i.formatToParts(-10000.111), o = i.formatToParts(10000.111), s = F.map((e) => i.formatToParts(e)), c = s.map((e, t) => {
		let n = e.find((e) => e.type === `unit`);
		return n && !e.some((e) => e.type === `integer` || e.type === `fraction`) ? {
			unit: n.value,
			value: F[t]
		} : null;
	}).filter((e) => !!e), l = a.find((e) => e.type === `minusSign`)?.value ?? `-`, u = o.find((e) => e.type === `plusSign`)?.value;
	u || r?.signDisplay !== `exceptZero` && r?.signDisplay !== `always` || (u = `+`);
	let d = new Intl.NumberFormat(e, {
		...n,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).formatToParts(.001).find((e) => e.type === `decimal`)?.value, f = a.find((e) => e.type === `group`)?.value, p = a.filter((e) => !P.has(e.type)).map((e) => R(e.value)), m = s.flatMap((e) => e.filter((e) => !P.has(e.type)).map((e) => R(e.value))), h = [...new Set([...p, ...m])].sort((e, t) => t.length - e.length), g = h.length === 0 ? RegExp(`\\p{White_Space}|\\p{Cf}`, `gu`) : RegExp(`${h.join(`|`)}|\\p{White_Space}|\\p{Cf}`, `gu`), _ = [...new Intl.NumberFormat(n.locale, { useGrouping: !1 }).format(9876543210)].reverse(), v = new Map(_.map((e, t) => [e, t])), y = RegExp(`[${_.join(``)}]`, `g`);
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
function L(e, t, n) {
	return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function R(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
var z = e(t(), 1);
function B() {
	return typeof window < `u` && window.InputEvent && typeof InputEvent.prototype.getTargetRanges == `function`;
}
function V(e, t, n) {
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
	(0, z.useEffect)(() => {
		if (!B() || !n.current) return;
		let e = n.current;
		return e.addEventListener(`beforeinput`, r, !1), () => {
			e.removeEventListener(`beforeinput`, r, !1);
		};
	}, [n]);
	let i = B() ? null : (e) => {
		let n = s(e).value.slice(0, s(e).selectionStart) + e.data + s(e).value.slice(s(e).selectionEnd);
		t.validate(n) || e.preventDefault();
	}, { labelProps: a, inputProps: o, descriptionProps: c, errorMessageProps: l, ...u } = D(e, n), d = (0, z.useRef)(null);
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
function H(e, t) {
	let { onScroll: n, isDisabled: r } = e, i = (0, z.useCallback)((e) => {
		e.ctrlKey || (e.preventDefault(), e.stopPropagation(), n && n({
			deltaX: e.deltaX,
			deltaY: e.deltaY
		}));
	}, [n]);
	C(t, `wheel`, r ? void 0 : i);
}
var U = {};
U = { Empty: `فارغ` };
var W = {};
W = { Empty: `Изпразни` };
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
var oe = {};
oe = { Empty: `Tühjenda` };
var se = {};
se = { Empty: `Tyhjä` };
var J = {};
J = { Empty: `Vide` };
var ce = {};
ce = { Empty: `ריק` };
var le = {};
le = { Empty: `Prazno` };
var ue = {};
ue = { Empty: `Üres` };
var de = {};
de = { Empty: `Vuoto` };
var fe = {};
fe = { Empty: `空` };
var pe = {};
pe = { Empty: `비어 있음` };
var me = {};
me = { Empty: `Tuščias` };
var Y = {};
Y = { Empty: `Tukšs` };
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
	"ar-AE": U,
	"bg-BG": W,
	"cs-CZ": G,
	"da-DK": re,
	"de-DE": K,
	"el-GR": ie,
	"en-US": q,
	"es-ES": ae,
	"et-EE": oe,
	"fi-FI": se,
	"fr-FR": J,
	"he-IL": ce,
	"hr-HR": le,
	"hu-HU": ue,
	"it-IT": de,
	"ja-JP": fe,
	"ko-KR": pe,
	"lt-LT": me,
	"lv-LV": Y,
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
	let t = (0, z.useRef)(void 0), { value: n, textValue: i, minValue: a, maxValue: o, isDisabled: s, isReadOnly: c, isRequired: u, onIncrement: d, onIncrementPage: f, onDecrement: p, onDecrementPage: h, onDecrementToMin: g, onIncrementToMax: _ } = e, b = ee(Q(Z), `@react-aria/spinbutton`), x = (0, z.useRef)(!1), S = (0, z.useCallback)(() => {
		clearTimeout(t.current), x.current = !1;
	}, []), C = m(() => {
		S();
	});
	(0, z.useEffect)(() => () => C(), []);
	let { keyboardProps: te } = v({
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
	}), w = (0, z.useRef)(!1), T = () => {
		w.current = !0;
	}, E = () => {
		w.current = !1;
	}, D = i === `` ? b.format(`Empty`) : (i || `${n}`).replace(`-`, `−`);
	(0, z.useEffect)(() => {
		w.current && (l(`assertive`), r(D, `assertive`));
	}, [D]);
	let O = (0, z.useCallback)(() => {
		S();
	}, [S]), ne = m(d ?? ke), k = m(p ?? ke), A = m(() => {
		(o === void 0 || isNaN(o) || n === void 0 || isNaN(n) || n < o) && (ne(), j(60));
	}), j = m((e) => {
		C(), x.current = !0, t.current = window.setTimeout(A, e);
	}), M = m(() => {
		(a === void 0 || isNaN(a) || n === void 0 || isNaN(n) || n > a) && (k(), N(60));
	}), N = m((e) => {
		C(), x.current = !0, t.current = window.setTimeout(M, e);
	}), P = (e) => {
		e.preventDefault();
	}, { addGlobalListener: F, removeAllGlobalListeners: I } = y(), L = (0, z.useRef)(!1), [R, B] = (0, z.useState)(null);
	(0, z.useEffect)(() => {
		R === `touch` ? j(600) : R ? j(400) : R || C();
	}, [R]);
	let [V, H] = (0, z.useState)(null);
	return (0, z.useEffect)(() => {
		V === `touch` ? N(600) : V ? N(400) : V || C();
	}, [V]), {
		spinButtonProps: {
			role: `spinbutton`,
			"aria-valuenow": n !== void 0 && !isNaN(n) ? n : void 0,
			"aria-valuetext": D,
			"aria-valuemin": a,
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
				S(), e.pointerType === `touch` ? (F(window, `pointercancel`, O, { capture: !0 }), L.current = !1, B(`touch`)) : (d?.(), B(`mouse`)), F(window, `contextmenu`, P);
			},
			onPressUp: (e) => {
				S(), e.pointerType === `touch` && (L.current = !0), I(), B(null);
			},
			onPressEnd: (e) => {
				S(), e.pointerType === `touch` && !x.current && L.current && d?.(), L.current = !1, B(null);
			},
			onFocus: T,
			onBlur: E
		},
		decrementButtonProps: {
			onPressStart: (e) => {
				S(), e.pointerType === `touch` ? (F(window, `pointercancel`, O, { capture: !0 }), L.current = !1, H(`touch`)) : (p?.(), H(`mouse`));
			},
			onPressUp: (e) => {
				S(), e.pointerType === `touch` && (L.current = !0), I(), H(null);
			},
			onPressEnd: (e) => {
				S(), e.pointerType === `touch` && !x.current && L.current && p?.(), L.current = !1, H(null);
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
	let { id: a, decrementAriaLabel: o, incrementAriaLabel: l, isDisabled: d, isReadOnly: p, isRequired: m, minValue: y, maxValue: C, autoFocus: te, label: T, formatOptions: D, onBlur: O = () => {}, onFocus: ne, onFocusChange: k, onKeyDown: A, onKeyUp: j, description: M, errorMessage: N, isWheelDisabled: P, ...F } = e, { increment: I, incrementToMax: L, decrement: R, decrementToMin: B, numberValue: U, inputValue: W, commit: G, commitValidation: re } = t, K = ee(pt(dt), `@react-aria/numberfield`), ie = (0, z.useCallback)(() => {
		let e = n.current?.value ?? ``;
		(0, ft.flushSync)(() => {
			G();
		}), n.current?.value !== e && r(n.current?.value ?? ``, `assertive`);
	}, [G, n]), q = S(a), { focusProps: ae } = g({ onBlur() {
		ie();
	} }), oe = b(D), se = (0, z.useMemo)(() => oe.resolvedOptions(), [oe]), J = b({
		...D,
		currencySign: void 0
	}), { spinButtonProps: ce, incrementButtonProps: le, decrementButtonProps: ue } = Ae({
		isDisabled: d,
		isReadOnly: p,
		isRequired: m,
		maxValue: C,
		minValue: y,
		onIncrement: I,
		onIncrementToMax: L,
		onDecrement: R,
		onDecrementToMin: B,
		value: U,
		textValue: (0, z.useMemo)(() => isNaN(U) ? `` : J.format(U), [J, U])
	}), [de, fe] = (0, z.useState)(!1), { focusWithinProps: pe } = h({
		isDisabled: d,
		onFocusWithinChange: fe
	});
	H({
		onScroll: (0, z.useCallback)((e) => {
			Math.abs(e.deltaY) <= Math.abs(e.deltaX) || (e.deltaY > 0 ? I() : e.deltaY < 0 && R());
		}, [R, I]),
		isDisabled: P || d || p || !de
	}, n);
	let me = (se.maximumFractionDigits ?? 0) > 0, Y = t.minValue === void 0 || isNaN(t.minValue) || t.minValue < 0, X = `numeric`;
	i() ? Y ? X = `text` : me && (X = `decimal`) : u() && (Y ? X = `numeric` : me && (X = `decimal`));
	let he = (e) => {
		t.validate(e) && t.setInputValue(e);
	}, ge = (t) => {
		e.onPaste?.(t);
		let n = s(t);
		n && (n.selectionEnd ?? -1) - (n.selectionStart ?? 0) === n.value.length && (t.preventDefault(), G(t.clipboardData?.getData?.(`text/plain`)?.trim() ?? ``));
	}, _e = x(e), { keyboardProps: ve } = v({
		isDisabled: d || p,
		shortcuts: { Enter: () => ((0, ft.flushSync)(() => {
			G();
		}), re(), { shouldPreventDefault: !1 }) },
		onKeyDown: A,
		onKeyUp: j
	}), { isInvalid: ye, validationErrors: be, validationDetails: xe } = t.displayValidation, { labelProps: Se, inputProps: Ce, descriptionProps: we, errorMessageProps: Te } = V({
		...F,
		..._e,
		name: void 0,
		form: void 0,
		label: T,
		autoFocus: te,
		isDisabled: d,
		isReadOnly: p,
		isRequired: m,
		validate: void 0,
		[E]: t,
		value: W,
		defaultValue: `!`,
		autoComplete: `off`,
		"aria-label": e[`aria-label`] || void 0,
		"aria-labelledby": e[`aria-labelledby`] || void 0,
		id: q,
		type: `text`,
		inputMode: X,
		onChange: he,
		onBlur: O,
		onFocus: ne,
		onFocusChange: k,
		onPaste: ge,
		description: M,
		errorMessage: N
	}, t, n), Ee = _(ve, Ce);
	w(n, t.defaultNumberValue, t.setNumberValue), ht(t, e.validationBehavior, e.commitBehavior, n, t.minValue, t.maxValue, e.step, t.numberValue);
	let De = _(ce, ae, Ee, {
		role: null,
		"aria-roledescription": c() ? null : K.format(`numberField`),
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
	let ke = S(), je = S(), Me = _(le, {
		"aria-label": l || K.format(`increase`, { fieldLabel: Z }).trim(),
		id: Q && !l ? ke : null,
		"aria-labelledby": Q && !l ? `${ke} ${Q}` : null,
		"aria-controls": q,
		excludeFromTabOrder: !0,
		preventFocusOnPress: !0,
		allowFocusWhenDisabled: !0,
		isDisabled: !t.canIncrement,
		onPressStart: Oe
	}), Ne = _(ue, {
		"aria-label": o || K.format(`decrease`, { fieldLabel: Z }).trim(),
		id: Q && !o ? je : null,
		"aria-labelledby": Q && !o ? `${je} ${Q}` : null,
		"aria-controls": q,
		excludeFromTabOrder: !0,
		preventFocusOnPress: !0,
		allowFocusWhenDisabled: !0,
		isDisabled: !t.canDecrement,
		onPressStart: Oe
	});
	return {
		groupProps: {
			...pe,
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
	let h = (0, z.useCallback)((e) => r === void 0 || isNaN(r) ? d(e, t, n) : o(e, t, n, r), [
		r,
		t,
		n
	]);
	s !== void 0 && !isNaN(s) && m === `snap` && (s = h(s)), !isNaN(c) && m === `snap` && (c = h(c));
	let [g, _] = te(s, isNaN(c) ? NaN : c, l), [v] = (0, z.useState)(g), [y, b] = (0, z.useState)(() => isNaN(g) ? `` : new a(u, i).format(g)), x = (0, z.useMemo)(() => new k(u, i), [u, i]), S = (0, z.useMemo)(() => x.getNumberingSystem(y), [x, y]), C = (0, z.useMemo)(() => new a(u, {
		...i,
		numberingSystem: S
	}), [
		u,
		i,
		S
	]), ee = (0, z.useMemo)(() => C.resolvedOptions(), [C]), w = (0, z.useCallback)((e) => isNaN(e) || e === null ? `` : C.format(e), [C]), E = T({
		...e,
		value: g
	}), D = r !== void 0 && !isNaN(r) ? r : 1;
	ee.style === `percent` && (r === void 0 || isNaN(r)) && (D = .01);
	let [O, ne] = (0, z.useState)(g), [A, j] = (0, z.useState)(u), [M, N] = (0, z.useState)(i);
	Object.is(g, O) && u === A && _t(i, M) || (b(w(g)), ne(g), j(u), N(i));
	let P = (0, z.useMemo)(() => x.parse(y), [x, y]), F = (e) => {
		let t = e === void 0 ? y : e, n = P;
		if (e !== void 0 && (n = x.parse(t)), !t.length) {
			_(NaN), b(s === void 0 ? `` : w(g));
			return;
		}
		if (isNaN(n)) {
			b(w(g));
			return;
		}
		let r = m === `snap` ? h(n) : n;
		r = x.parse(w(r));
		let i = r !== g;
		_(r), b(w(s === void 0 ? r : g)), i && E.commitValidation();
	}, I = (e, r = 0) => {
		let i = P;
		if (isNaN(i)) return o(isNaN(r) ? 0 : r, t, n, D);
		{
			let r = o(i, t, n, D);
			return e === `+` && r > i || e === `-` && r < i ? r : o(vt(e, i, D), t, n, D);
		}
	}, L = () => {
		let e = I(`+`, t);
		e === g && b(w(e)), _(e), E.commitValidation();
	}, R = () => {
		let e = I(`-`, n);
		e === g && b(w(e)), _(e), E.commitValidation();
	}, B = () => {
		n != null && (_(o(n, t, n, D)), E.commitValidation());
	}, V = () => {
		t != null && (_(t), E.commitValidation());
	}, H = (0, z.useMemo)(() => !f && !p && (isNaN(P) || n === void 0 || isNaN(n) || o(P, t, n, D) > P || vt(`+`, P, D) <= n), [
		f,
		p,
		t,
		n,
		D,
		P
	]), U = (0, z.useMemo)(() => !f && !p && (isNaN(P) || t === void 0 || isNaN(t) || o(P, t, n, D) < P || vt(`-`, P, D) >= t), [
		f,
		p,
		t,
		n,
		D,
		P
	]), W = (e) => x.isValidPartialNumber(e, t, n);
	return {
		...E,
		validate: W,
		increment: L,
		incrementToMax: B,
		decrement: R,
		decrementToMin: V,
		canIncrement: H,
		canDecrement: U,
		minValue: t,
		maxValue: n,
		numberValue: P,
		defaultNumberValue: isNaN(c) ? v : c,
		setNumberValue: _,
		setInputValue: b,
		inputValue: y,
		commit: F
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
export { V as a, H as i, mt as n, k as o, Ae as r, gt as t };
