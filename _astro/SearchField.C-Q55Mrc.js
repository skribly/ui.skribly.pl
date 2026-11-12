import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, D as n, Dt as ee, E as r, Et as i, Mt as a, P as o, Pt as s, Tt as c, h as l, jt as u, n as d, wt as f } from "./createLucideIcon.npgQlVHx.js";
import { r as p } from "./useFormReset.B5f8O4ea.js";
import { n as m } from "./Autocomplete.BUqxPt-N.js";
import { i as h } from "./useFormValidation.CKcLNQoz.js";
import { n as g } from "./Group.CbcnDyoG.js";
import { n as te, t as _ } from "./useTextField.D1QWrtYY.js";
import { n as ne } from "./Text.DxhsPAdy.js";
import { n as v } from "./useLocalizedStringFormatter.CY4FHGAo.js";
import { n as y } from "./react-dom.B9zIfLd2.js";
import { t as b } from "./useControlledState.DijOhE0s.js";
var x = {};
x = { "Clear search": `مسح البحث` };
var S = {};
S = { "Clear search": `Изчистване на търсене` };
var C = {};
C = { "Clear search": `Vymazat hledání` };
var w = {};
w = { "Clear search": `Ryd søgning` };
var T = {};
T = { "Clear search": `Suche zurücksetzen` };
var E = {};
E = { "Clear search": `Απαλοιφή αναζήτησης` };
var D = {};
D = { "Clear search": `Clear search` };
var O = {};
O = { "Clear search": `Borrar búsqueda` };
var k = {};
k = { "Clear search": `Tühjenda otsing` };
var A = {};
A = { "Clear search": `Tyhjennä haku` };
var j = {};
j = { "Clear search": `Effacer la recherche` };
var M = {};
M = { "Clear search": `נקה חיפוש` };
var N = {};
N = { "Clear search": `Obriši pretragu` };
var P = {};
P = { "Clear search": `Keresés törlése` };
var F = {};
F = { "Clear search": `Cancella ricerca` };
var I = {};
I = { "Clear search": `検索をクリア` };
var re = {};
re = { "Clear search": `검색 지우기` };
var L = {};
L = { "Clear search": `Išvalyti iešką` };
var R = {};
R = { "Clear search": `Notīrīt meklēšanu` };
var z = {};
z = { "Clear search": `Tøm søk` };
var B = {};
B = { "Clear search": `Zoekactie wissen` };
var V = {};
V = { "Clear search": `Wyczyść zawartość wyszukiwania` };
var H = {};
H = { "Clear search": `Limpar pesquisa` };
var U = {};
U = { "Clear search": `Limpar pesquisa` };
var W = {};
W = { "Clear search": `Ştergeţi căutarea` };
var G = {};
G = { "Clear search": `Очистить поиск` };
var K = {};
K = { "Clear search": `Vymazať vyhľadávanie` };
var q = {};
q = { "Clear search": `Počisti iskanje` };
var J = {};
J = { "Clear search": `Obriši pretragu` };
var Y = {};
Y = { "Clear search": `Rensa sökning` };
var X = {};
X = { "Clear search": `Aramayı temizle` };
var Z = {};
Z = { "Clear search": `Очистити пошук` };
var Q = {};
Q = { "Clear search": `清除搜索` };
var ie = {};
ie = { "Clear search": `清除搜尋條件` };
var ae = {};
ae = {
	"ar-AE": x,
	"bg-BG": S,
	"cs-CZ": C,
	"da-DK": w,
	"de-DE": T,
	"el-GR": E,
	"en-US": D,
	"es-ES": O,
	"et-EE": k,
	"fi-FI": A,
	"fr-FR": j,
	"he-IL": M,
	"hr-HR": N,
	"hu-HU": P,
	"it-IT": F,
	"ja-JP": I,
	"ko-KR": re,
	"lt-LT": L,
	"lv-LV": R,
	"nb-NO": z,
	"nl-NL": B,
	"pl-PL": V,
	"pt-BR": H,
	"pt-PT": U,
	"ro-RO": W,
	"ru-RU": G,
	"sk-SK": K,
	"sl-SI": q,
	"sr-SP": J,
	"sv-SE": Y,
	"tr-TR": X,
	"uk-UA": Z,
	"zh-CN": Q,
	"zh-TW": ie
};
function oe(e) {
	return e && e.__esModule ? e.default : e;
}
function se(e, t, n) {
	let ee = v(oe(ae), `@react-aria/searchfield`), { isDisabled: r, isReadOnly: i, onSubmit: a, onClear: c, type: l = `search` } = e, { keyboardProps: u } = o({
		isDisabled: r || i,
		shortcuts: {
			Enter: () => {
				if (a) a(t.value);
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
	}, { labelProps: p, inputProps: m, descriptionProps: h, errorMessageProps: g, ...te } = _({
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
		...te
	};
}
function ce(e) {
	let [t, n] = b(le(e.value), le(e.defaultValue) || ``, e.onChange);
	return {
		value: t,
		setValue: n
	};
}
function le(e) {
	if (e != null) return e.toString();
}
var $ = e(y(), 1), ue = (0, $.createContext)(null), de = n(function(e, n) {
	[e, n] = c(e, n, ue);
	let { validationBehavior: o } = a(h) || {}, s = e.validationBehavior ?? o ?? `native`, _ = (0, $.useRef)(null);
	[e, _] = c(e, _, m);
	let [v, y] = ee(!e[`aria-label`] && !e[`aria-labelledby`]), b = ce({
		...e,
		validationBehavior: s
	}), { labelProps: x, inputProps: S, clearButtonProps: C, descriptionProps: w, errorMessageProps: T, ...E } = se({
		...u(e),
		label: y,
		validationBehavior: s
	}, b, _), D = i({
		...e,
		values: {
			isEmpty: b.value === ``,
			isDisabled: e.isDisabled || !1,
			isInvalid: E.isInvalid || !1,
			isReadOnly: e.isReadOnly || !1,
			isRequired: e.isRequired || !1,
			state: b
		},
		defaultClassName: `react-aria-SearchField`
	}), O = r(e, { global: !0 });
	return delete O.id, $.createElement(t.div, {
		...O,
		...D,
		ref: n,
		slot: e.slot || void 0,
		"data-empty": b.value === `` || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": E.isInvalid || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0
	}, $.createElement(f, { values: [
		[l, {
			...x,
			ref: v
		}],
		[te, {
			...S,
			ref: _
		}],
		[d, C],
		[ne, { slots: {
			description: w,
			errorMessage: T
		} }],
		[g, {
			isInvalid: E.isInvalid,
			isDisabled: e.isDisabled || !1
		}],
		[p, E]
	] }, D.children));
});
export { de as t };
