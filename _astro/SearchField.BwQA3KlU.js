import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { L as t, X as n, an as ee, cn as r, ct as i, dn as a, fn as o, hn as s, ht as c, on as l, pn as u, sn as d, st as f } from "./doc.DoLlUurT.js";
import { r as p } from "./useFormReset.ClC-r4N4.js";
import { n as m } from "./Autocomplete.DmAsmXZB.js";
import { i as h } from "./useFormValidation.CExHgpbK.js";
import { n as g } from "./Group.FJVraJu6.js";
import { n as _, t as v } from "./useTextField.yppvIDGl.js";
import { n as te } from "./Text.CWB1nGTv.js";
import { n as y } from "./useLocalizedStringFormatter.DOzdQqIj.js";
import { n as b } from "./react-dom.B9zIfLd2.js";
import { t as x } from "./useControlledState.DijOhE0s.js";
var S = {};
S = { "Clear search": `مسح البحث` };
var C = {};
C = { "Clear search": `Изчистване на търсене` };
var w = {};
w = { "Clear search": `Vymazat hledání` };
var T = {};
T = { "Clear search": `Ryd søgning` };
var E = {};
E = { "Clear search": `Suche zurücksetzen` };
var D = {};
D = { "Clear search": `Απαλοιφή αναζήτησης` };
var O = {};
O = { "Clear search": `Clear search` };
var k = {};
k = { "Clear search": `Borrar búsqueda` };
var A = {};
A = { "Clear search": `Tühjenda otsing` };
var j = {};
j = { "Clear search": `Tyhjennä haku` };
var M = {};
M = { "Clear search": `Effacer la recherche` };
var N = {};
N = { "Clear search": `נקה חיפוש` };
var P = {};
P = { "Clear search": `Obriši pretragu` };
var F = {};
F = { "Clear search": `Keresés törlése` };
var I = {};
I = { "Clear search": `Cancella ricerca` };
var L = {};
L = { "Clear search": `検索をクリア` };
var R = {};
R = { "Clear search": `검색 지우기` };
var ne = {};
ne = { "Clear search": `Išvalyti iešką` };
var z = {};
z = { "Clear search": `Notīrīt meklēšanu` };
var B = {};
B = { "Clear search": `Tøm søk` };
var V = {};
V = { "Clear search": `Zoekactie wissen` };
var H = {};
H = { "Clear search": `Wyczyść zawartość wyszukiwania` };
var U = {};
U = { "Clear search": `Limpar pesquisa` };
var W = {};
W = { "Clear search": `Limpar pesquisa` };
var G = {};
G = { "Clear search": `Ştergeţi căutarea` };
var K = {};
K = { "Clear search": `Очистить поиск` };
var q = {};
q = { "Clear search": `Vymazať vyhľadávanie` };
var J = {};
J = { "Clear search": `Počisti iskanje` };
var Y = {};
Y = { "Clear search": `Obriši pretragu` };
var X = {};
X = { "Clear search": `Rensa sökning` };
var Z = {};
Z = { "Clear search": `Aramayı temizle` };
var re = {};
re = { "Clear search": `Очистити пошук` };
var Q = {};
Q = { "Clear search": `清除搜索` };
var ie = {};
ie = { "Clear search": `清除搜尋條件` };
var ae = {};
ae = {
	"ar-AE": S,
	"bg-BG": C,
	"cs-CZ": w,
	"da-DK": T,
	"de-DE": E,
	"el-GR": D,
	"en-US": O,
	"es-ES": k,
	"et-EE": A,
	"fi-FI": j,
	"fr-FR": M,
	"he-IL": N,
	"hr-HR": P,
	"hu-HU": F,
	"it-IT": I,
	"ja-JP": L,
	"ko-KR": R,
	"lt-LT": ne,
	"lv-LV": z,
	"nb-NO": B,
	"nl-NL": V,
	"pl-PL": H,
	"pt-BR": U,
	"pt-PT": W,
	"ro-RO": G,
	"ru-RU": K,
	"sk-SK": q,
	"sl-SI": J,
	"sr-SP": Y,
	"sv-SE": X,
	"tr-TR": Z,
	"uk-UA": re,
	"zh-CN": Q,
	"zh-TW": ie
};
function oe(e) {
	return e && e.__esModule ? e.default : e;
}
function se(e, t, n) {
	let ee = y(oe(ae), `@react-aria/searchfield`), { isDisabled: r, isReadOnly: i, onSubmit: a, onClear: o, type: l = `search` } = e, { keyboardProps: u } = c({
		isDisabled: r || i,
		shortcuts: {
			Enter: () => {
				if (a) a(t.value);
				else return !1;
			},
			Escape: () => {
				if (t.value === `` && (!n.current || n.current.value === ``)) return !1;
				t.setValue(``), o?.();
			}
		}
	}), d = () => {
		t.setValue(``), o && o();
	}, f = () => {
		n.current?.focus();
	}, { labelProps: p, inputProps: m, descriptionProps: h, errorMessageProps: g, ..._ } = v({
		...e,
		value: t.value,
		onChange: t.setValue,
		onKeyDown: e.onKeyDown,
		onKeyUp: e.onKeyUp,
		type: l
	}, n);
	return {
		labelProps: p,
		inputProps: s(u, {
			...m,
			defaultValue: void 0
		}),
		clearButtonProps: {
			"aria-label": ee.format(`Clear search`),
			excludeFromTabOrder: !0,
			preventFocusOnPress: !0,
			isDisabled: r || i,
			onPress: d,
			onPressStart: f
		},
		descriptionProps: h,
		errorMessageProps: g,
		..._
	};
}
function ce(e) {
	let [t, n] = x(le(e.value), le(e.defaultValue) || ``, e.onChange);
	return {
		value: t,
		setValue: n
	};
}
function le(e) {
	if (e != null) return e.toString();
}
var $ = e(b(), 1), ue = (0, $.createContext)(null), de = i(function(e, i) {
	[e, i] = l(e, i, ue);
	let { validationBehavior: s } = u(h) || {}, c = e.validationBehavior ?? s ?? `native`, v = (0, $.useRef)(null);
	[e, v] = l(e, v, m);
	let [y, b] = r(!e[`aria-label`] && !e[`aria-labelledby`]), x = ce({
		...e,
		validationBehavior: c
	}), { labelProps: S, inputProps: C, clearButtonProps: w, descriptionProps: T, errorMessageProps: E, ...D } = se({
		...o(e),
		label: b,
		validationBehavior: c
	}, x, v), O = d({
		...e,
		values: {
			isEmpty: x.value === ``,
			isDisabled: e.isDisabled || !1,
			isInvalid: D.isInvalid || !1,
			isReadOnly: e.isReadOnly || !1,
			isRequired: e.isRequired || !1,
			state: x
		},
		defaultClassName: `react-aria-SearchField`
	}), k = f(e, { global: !0 });
	return delete k.id, $.createElement(a.div, {
		...k,
		...O,
		ref: i,
		slot: e.slot || void 0,
		"data-empty": x.value === `` || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": D.isInvalid || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0
	}, $.createElement(ee, { values: [
		[n, {
			...S,
			ref: y
		}],
		[_, {
			...C,
			ref: v
		}],
		[t, w],
		[te, { slots: {
			description: T,
			errorMessage: E
		} }],
		[g, {
			isInvalid: D.isInvalid,
			isDisabled: e.isDisabled || !1
		}],
		[p, D]
	] }, O.children));
});
export { de as t };
