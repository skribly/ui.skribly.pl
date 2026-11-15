import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, L as n, Nt as r, Q as i, Tt as a, X as o, an as s, cn as c, dn as l, et as u, ft as d, hn as f, ht as p, mn as m, on as h, sn as g, st as _, vn as v, vt as y } from "./doc.DoLlUurT.js";
import { b, m as x, v as S, y as C } from "./useCollection.CKHU4kii.js";
import { n as w } from "./ListBox.BduCOBMi.js";
import { r as T } from "./Autocomplete.DmAsmXZB.js";
import { c as E, s as D } from "./FocusScope.bOWhljI-.js";
import { n as O } from "./Text.CWB1nGTv.js";
import { n as k, t as ee } from "./useGridListItem.BSrjT73S.js";
import { a as A } from "./useLoadMoreSentinel.DH-6kBMD.js";
import { n as te } from "./useFormValidation.CExHgpbK.js";
import { n as ne } from "./react-dom.B9zIfLd2.js";
import { n as re } from "./useLocalizedStringFormatter.DOzdQqIj.js";
import { f as ie, i as ae, n as oe, t as se } from "./CollectionBuilder.Dfbyz3n6.js";
import { n as ce, t as le } from "./useListState.DBFMm9fY.js";
var j = e(ne(), 1), M = new WeakMap();
function ue(e, t, n) {
	let { direction: r } = y(), i = e.keyboardDelegate || new A({
		collection: t.collection,
		ref: n,
		orientation: `horizontal`,
		direction: r,
		disabledKeys: t.disabledKeys,
		disabledBehavior: t.selectionManager.disabledBehavior
	}), { labelProps: a, fieldProps: o, descriptionProps: s, errorMessageProps: c } = te({
		...e,
		labelElementType: `span`
	}), { gridProps: l } = k({
		...e,
		...o,
		keyboardDelegate: i,
		shouldFocusWrap: !0,
		linkBehavior: `override`,
		keyboardNavigationBehavior: `tab`
	}, t, n), [d, p] = (0, j.useState)(!1), { focusWithinProps: m } = u({ onFocusWithinChange: p }), h = _(e), g = (0, j.useRef)(t.collection.size);
	return (0, j.useEffect)(() => {
		n.current && g.current > 0 && t.collection.size === 0 && d && n.current.focus(), g.current = t.collection.size;
	}, [
		t.collection.size,
		d,
		n
	]), M.set(t, { onRemove: e.onRemove }), {
		gridProps: f(l, h, {
			role: t.collection.size ? `grid` : `group`,
			"aria-atomic": !1,
			"aria-relevant": `additions`,
			"aria-live": d ? `polite` : `off`,
			...m,
			...o
		}),
		labelProps: a,
		descriptionProps: s,
		errorMessageProps: c
	};
}
var N = {};
N = {
	removeButtonLabel: `إزالة`,
	removeDescription: `اضغط على مفتاح DELETE لإزالة علامة.`
};
var P = {};
P = {
	removeButtonLabel: `Премахване`,
	removeDescription: `Натиснете Delete, за да премахнете маркера.`
};
var F = {};
F = {
	removeButtonLabel: `Odebrat`,
	removeDescription: `Stisknutím klávesy Delete odeberete značku.`
};
var I = {};
I = {
	removeButtonLabel: `Fjern`,
	removeDescription: `Tryk på Slet for at fjerne tag.`
};
var L = {};
L = {
	removeButtonLabel: `Entfernen`,
	removeDescription: `Auf „Löschen“ drücken, um das Tag zu entfernen.`
};
var R = {};
R = {
	removeButtonLabel: `Κατάργηση`,
	removeDescription: `Πατήστε Διαγραφή για να καταργήσετε την ετικέτα.`
};
var z = {};
z = {
	removeDescription: `Press Delete to remove tag.`,
	removeButtonLabel: `Remove`
};
var B = {};
B = {
	removeButtonLabel: `Quitar`,
	removeDescription: `Pulse Eliminar para quitar la etiqueta.`
};
var V = {};
V = {
	removeButtonLabel: `Eemalda`,
	removeDescription: `Sildi eemaldamiseks vajutage kustutusklahvi Delete.`
};
var H = {};
H = {
	removeButtonLabel: `Poista`,
	removeDescription: `Poista tunniste painamalla Poista-painiketta.`
};
var U = {};
U = {
	removeButtonLabel: `Supprimer`,
	removeDescription: `Appuyez sur Supprimer pour supprimer l’étiquette.`
};
var W = {};
W = {
	removeButtonLabel: `הסר`,
	removeDescription: `לחץ על מחק כדי להסיר תג.`
};
var G = {};
G = {
	removeButtonLabel: `Ukloni`,
	removeDescription: `Pritisnite Delete za uklanjanje oznake.`
};
var de = {};
de = {
	removeButtonLabel: `Eltávolítás`,
	removeDescription: `Nyomja meg a Delete billentyűt a címke eltávolításához.`
};
var K = {};
K = {
	removeButtonLabel: `Rimuovi`,
	removeDescription: `Premi Elimina per rimuovere il tag.`
};
var q = {};
q = {
	removeButtonLabel: `削除`,
	removeDescription: `タグを削除するには、Delete キーを押します。`
};
var J = {};
J = {
	removeButtonLabel: `제거`,
	removeDescription: `태그를 제거하려면 Delete 키를 누르십시오.`
};
var Y = {};
Y = {
	removeButtonLabel: `Pašalinti`,
	removeDescription: `Norėdami pašalinti žymą, paspauskite „Delete“ klavišą.`
};
var X = {};
X = {
	removeButtonLabel: `Noņemt`,
	removeDescription: `Nospiediet Delete [Dzēst], lai noņemtu tagu.`
};
var Z = {};
Z = {
	removeButtonLabel: `Fjern`,
	removeDescription: `Trykk på Slett for å fjerne taggen.`
};
var Q = {};
Q = {
	removeButtonLabel: `Verwijderen`,
	removeDescription: `Druk op Verwijderen om de tag te verwijderen.`
};
var $ = {};
$ = {
	removeButtonLabel: `Usuń`,
	removeDescription: `Naciśnij Usuń, aby usunąć znacznik.`
};
var fe = {};
fe = {
	removeButtonLabel: `Remover`,
	removeDescription: `Pressione Delete para remover a tag.`
};
var pe = {};
pe = {
	removeButtonLabel: `Eliminar`,
	removeDescription: `Prima Delete para eliminar a tag.`
};
var me = {};
me = {
	removeButtonLabel: `Îndepărtaţi`,
	removeDescription: `Apăsați pe Delete (Ștergere) pentru a elimina eticheta.`
};
var he = {};
he = {
	removeButtonLabel: `Удалить`,
	removeDescription: `Нажмите DELETE, чтобы удалить тег.`
};
var ge = {};
ge = {
	removeButtonLabel: `Odstrániť`,
	removeDescription: `Ak chcete odstrániť značku, stlačte kláves Delete.`
};
var _e = {};
_e = {
	removeButtonLabel: `Odstrani`,
	removeDescription: `Pritisnite Delete, da odstranite oznako.`
};
var ve = {};
ve = {
	removeButtonLabel: `Ukloni`,
	removeDescription: `Pritisnite Obriši da biste uklonili oznaku.`
};
var ye = {};
ye = {
	removeButtonLabel: `Ta bort`,
	removeDescription: `Tryck på Radera för att ta bort taggen.`
};
var be = {};
be = {
	removeButtonLabel: `Kaldır`,
	removeDescription: `Etiketi kaldırmak için Sil tuşuna basın.`
};
var xe = {};
xe = {
	removeButtonLabel: `Вилучити`,
	removeDescription: `Натисніть Delete, щоб вилучити тег.`
};
var Se = {};
Se = {
	removeButtonLabel: `删除`,
	removeDescription: `按下“删除”以删除标记。`
};
var Ce = {};
Ce = {
	removeButtonLabel: `移除`,
	removeDescription: `按 Delete 鍵以移除標記。`
};
var we = {};
we = {
	"ar-AE": N,
	"bg-BG": P,
	"cs-CZ": F,
	"da-DK": I,
	"de-DE": L,
	"el-GR": R,
	"en-US": z,
	"es-ES": B,
	"et-EE": V,
	"fi-FI": H,
	"fr-FR": U,
	"he-IL": W,
	"hr-HR": G,
	"hu-HU": de,
	"it-IT": K,
	"ja-JP": q,
	"ko-KR": J,
	"lt-LT": Y,
	"lv-LV": X,
	"nb-NO": Z,
	"nl-NL": Q,
	"pl-PL": $,
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
function Te(e) {
	return e && e.__esModule ? e.default : e;
}
function Ee(e, t, n) {
	let { item: i } = e, o = re(Te(we), `@react-aria/tag`), s = v(), { onRemove: c } = M.get(t) || {}, { rowProps: l, gridCellProps: u, ...m } = ee({ node: i }, t, n), { descriptionProps: h, ...g } = m, y = t.disabledKeys.has(i.key) || i.props.isDisabled, { keyboardProps: b } = p({
		isDisabled: y,
		shortcuts: {
			Delete: () => {
				t.selectionManager.isSelected(i.key) ? c?.(new Set(t.selectionManager.selectedKeys)) : c?.(new Set([i.key]));
			},
			Backspace: () => {
				t.selectionManager.isSelected(i.key) ? c?.(new Set(t.selectionManager.selectedKeys)) : c?.(new Set([i.key]));
			}
		},
		allowRepeats: !0
	}), S = a();
	S === `virtual` && typeof window < `u` && `ontouchstart` in window && (S = `pointer`);
	let C = c && (S === `keyboard` || S === `virtual`) ? o.format(`removeDescription`) : ``, w = x(C), T = i.key === t.selectionManager.focusedKey, E = t.selectionManager.focusedKey != null, D = -1;
	y || !T && E || (D = 0);
	let O = _(i.props), k = r(i.props), { focusableProps: A } = d({
		...i.props,
		isDisabled: y
	}, n);
	return {
		removeButtonProps: {
			"aria-label": o.format(`removeButtonLabel`),
			"aria-labelledby": `${s} ${l.id}`,
			isDisabled: y,
			id: s,
			onPress: () => c ? c(new Set([i.key])) : null
		},
		rowProps: f(A, l, O, k, {
			tabIndex: D,
			...c ? b : {},
			"aria-describedby": w[`aria-describedby`]
		}),
		gridCellProps: f(u, {
			"aria-errormessage": e[`aria-errormessage`],
			"aria-label": e[`aria-label`]
		}),
		...g,
		allowsRemoving: !!c
	};
}
var De = (0, j.createContext)(null), Oe = (0, j.createContext)(null), ke = (0, j.forwardRef)(function(e, t) {
	return [e, t] = h(e, t, De), j.createElement(w.Provider, { value: null }, j.createElement(oe, { content: e.children }, (n) => j.createElement(Ae, {
		props: e,
		forwardedRef: t,
		collection: n
	})));
});
function Ae({ props: e, forwardedRef: t, collection: n }) {
	let r = (0, j.useRef)(null), { id: i, ...a } = e;
	[a, r] = h(a, r, T);
	let { filter: u, shouldUseVirtualFocus: d, ...f } = a, [p, m] = c(!e[`aria-label`] && !e[`aria-labelledby`]), g = le({
		...f,
		children: void 0,
		collection: n
	}), v = ce(g, u), y = _(a, { global: !0 }), b = Object.fromEntries(Object.entries(y).map(([e, t]) => [e, e === `id` ? t : void 0])), { gridProps: x, labelProps: S, descriptionProps: C, errorMessageProps: E } = ue({
		...f,
		...b,
		label: m
	}, v, r);
	return j.createElement(l.div, {
		render: e.render,
		...y,
		id: i,
		ref: t,
		slot: e.slot || void 0,
		className: e.className ?? `react-aria-TagGroup`,
		style: e.style
	}, j.createElement(s, { values: [
		[o, {
			...S,
			elementType: `span`,
			ref: p
		}],
		[Oe, {
			...x,
			ref: r
		}],
		[w, v],
		[O, { slots: {
			description: C,
			errorMessage: E
		} }]
	] }, e.children));
}
var je = (0, j.forwardRef)(function(e, t) {
	return (0, j.useContext)(w) ? j.createElement(Me, {
		props: e,
		forwardedRef: t
	}) : j.createElement(ae, e);
});
function Me({ props: e, forwardedRef: n }) {
	let r = (0, j.useContext)(w), { CollectionRoot: i } = (0, j.useContext)(S), [a, o] = h({}, n, Oe), { focusProps: s, isFocused: c, isFocusVisible: u } = t(), d = {
		isEmpty: r.collection.size === 0,
		isFocused: c,
		isFocusVisible: u,
		state: r
	}, p = g({
		...e,
		children: void 0,
		defaultClassName: `react-aria-TagList`,
		values: d
	}), m = C(r.selectionManager.focusedKey), v = _(e, { global: !0 });
	return j.createElement(l.div, {
		...f(v, p, a, s),
		ref: o,
		"data-empty": r.collection.size === 0 || void 0,
		"data-focused": c || void 0,
		"data-focus-visible": u || void 0
	}, j.createElement(E, null, r.collection.size === 0 && e.renderEmptyState ? e.renderEmptyState(d) : j.createElement(i, {
		collection: r.collection,
		persistedKeys: m
	})));
}
var Ne = se(ie, (e, r, a) => {
	let o = (0, j.useContext)(w), c = m(r), { focusProps: u, isFocusVisible: d } = t({ within: !1 }), { rowProps: p, gridCellProps: h, removeButtonProps: v, ...y } = Ee({ item: a }, o, c), { hoverProps: x, isHovered: C } = i({
		isDisabled: !y.allowsSelection && !y.hasAction,
		onHoverStart: a.props.onHoverStart,
		onHoverChange: a.props.onHoverChange,
		onHoverEnd: a.props.onHoverEnd
	}), T = g({
		...e,
		id: void 0,
		children: a.rendered,
		defaultClassName: `react-aria-Tag`,
		values: {
			...y,
			isFocusVisible: d,
			isHovered: C,
			selectionMode: o.selectionManager.selectionMode,
			selectionBehavior: o.selectionManager.selectionBehavior
		}
	});
	(0, j.useEffect)(() => {
		a.textValue;
	}, [a.textValue]);
	let E = _(e, { global: !0 });
	return delete E.id, delete E.onClick, j.createElement(l.div, {
		ref: c,
		...f(E, T, p, u, x),
		"data-selected": y.isSelected || void 0,
		"data-disabled": y.isDisabled || void 0,
		"data-hovered": C || void 0,
		"data-focused": y.isFocused || void 0,
		"data-focus-visible": d || void 0,
		"data-pressed": y.isPressed || void 0,
		"data-allows-removing": y.allowsRemoving || void 0,
		"data-selection-mode": o.selectionManager.selectionMode === `none` ? void 0 : o.selectionManager.selectionMode
	}, j.createElement(`div`, {
		...h,
		style: { display: `contents` }
	}, j.createElement(s, { values: [
		[n, { slots: { remove: v } }],
		[S, b],
		[D, { isSelected: y.isSelected }]
	] }, T.children)));
});
export { ke as n, je as r, Ne as t };
