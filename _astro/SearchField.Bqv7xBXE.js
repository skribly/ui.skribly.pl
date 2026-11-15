import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { R as t, Z as n, cn as r, ct as i, fn as a, gn as o, gt as ee, ln as s, lt as c, mn as l, on as u, pn as d, sn as f } from "./doc.C_PtMNUB.js";
import { r as p } from "./useFormReset.Cf-RVIHo.js";
import { n as m } from "./Autocomplete.BYGvWyUq.js";
import { i as h } from "./useFormValidation.DOqf-YmE.js";
import { n as g } from "./Group.CmTJ4Xbt.js";
import { n as _, t as v } from "./useTextField.DqlAegV0.js";
import { n as te } from "./Text.3KJW7jIs.js";
import { n as y } from "./useLocalizedStringFormatter.whw0Qxu0.js";
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
	let r = y(oe(ae), `@react-aria/searchfield`), { isDisabled: i, isReadOnly: a, onSubmit: s, onClear: c, type: l = `search` } = e, { keyboardProps: u } = ee({
		isDisabled: i || a,
		shortcuts: {
			Enter: () => {
				if (s) s(t.value);
				else return !1;
			},
			Escape: () => {
				if (t.value === `` && (!n.current || n.current.value === ``)) return !1;
				t.setValue(``), c?.();
			}
		}
	}), d = () => {
		t.setValue(``), c && c();
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
		inputProps: o(u, {
			...m,
			defaultValue: void 0
		}),
		clearButtonProps: {
			"aria-label": r.format(`Clear search`),
			excludeFromTabOrder: !0,
			preventFocusOnPress: !0,
			isDisabled: i || a,
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
var $ = e(b(), 1), ue = (0, $.createContext)(null), de = c(function(e, o) {
	[e, o] = f(e, o, ue);
	let { validationBehavior: ee } = l(h) || {}, c = e.validationBehavior ?? ee ?? `native`, v = (0, $.useRef)(null);
	[e, v] = f(e, v, m);
	let [y, b] = s(!e[`aria-label`] && !e[`aria-labelledby`]), x = ce({
		...e,
		validationBehavior: c
	}), { labelProps: S, inputProps: C, clearButtonProps: w, descriptionProps: T, errorMessageProps: E, ...D } = se({
		...d(e),
		label: b,
		validationBehavior: c
	}, x, v), O = r({
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
	}), k = i(e, { global: !0 });
	return delete k.id, $.createElement(a.div, {
		...k,
		...O,
		ref: o,
		slot: e.slot || void 0,
		"data-empty": x.value === `` || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": D.isInvalid || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0
	}, $.createElement(u, { values: [
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
