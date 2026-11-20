import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, $t as n, Bt as r, F as i, H as a, Ht as o, Kt as s, N as c, P as l, Ut as u, Vt as d, X as f, Xt as p, Yt as m, j as h, mt as g, ot as _, q as v, v as y } from "./useOverflow.Dq483xd0.js";
import { b, m as x, v as S, y as C } from "./useCollection.DQc_Iacd.js";
import { n as w } from "./ListBox.8u6ak81Y.js";
import { r as T } from "./Autocomplete.CGc8yklO.js";
import { c as E, s as D } from "./FocusScope.aBBixRPA.js";
import { n as O } from "./Text.DXbJB4jb.js";
import { n as k, t as ee } from "./useGridListItem.Daw7DFMj.js";
import { a as A } from "./useLoadMoreSentinel.CCe53T__.js";
import { n as te } from "./useFormValidation.L_5g13Dg.js";
import { n as ne } from "./react-dom.B9zIfLd2.js";
import { n as re } from "./useLocalizedStringFormatter.CDC-m-oP.js";
import { f as ie, i as ae, n as oe, t as se } from "./CollectionBuilder.OeX_9-Zv.js";
import { n as ce, t as le } from "./useListState.PwXH_dUi.js";
var j = e(ne(), 1), M = new WeakMap();
function ue(e, n, r) {
	let { direction: o } = t(), s = e.keyboardDelegate || new A({
		collection: n.collection,
		ref: r,
		orientation: `horizontal`,
		direction: o,
		disabledKeys: n.disabledKeys,
		disabledBehavior: n.selectionManager.disabledBehavior
	}), { labelProps: c, fieldProps: l, descriptionProps: u, errorMessageProps: d } = te({
		...e,
		labelElementType: `span`
	}), { gridProps: f } = k({
		...e,
		...l,
		keyboardDelegate: s,
		shouldFocusWrap: !0,
		linkBehavior: `override`,
		keyboardNavigationBehavior: `tab`
	}, n, r), [m, h] = (0, j.useState)(!1), { focusWithinProps: g } = i({ onFocusWithinChange: h }), _ = a(e), v = (0, j.useRef)(n.collection.size);
	return (0, j.useEffect)(() => {
		r.current && v.current > 0 && n.collection.size === 0 && m && r.current.focus(), v.current = n.collection.size;
	}, [
		n.collection.size,
		m,
		r
	]), M.set(n, { onRemove: e.onRemove }), {
		gridProps: p(f, _, {
			role: n.collection.size ? `grid` : `group`,
			"aria-atomic": !1,
			"aria-relevant": `additions`,
			"aria-live": m ? `polite` : `off`,
			...g,
			...l
		}),
		labelProps: c,
		descriptionProps: u,
		errorMessageProps: d
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
function Ee(e, t, r) {
	let { item: i } = e, o = re(Te(we), `@react-aria/tag`), s = n(), { onRemove: c } = M.get(t) || {}, { rowProps: l, gridCellProps: u, ...d } = ee({ node: i }, t, r), { descriptionProps: m, ...h } = d, y = t.disabledKeys.has(i.key) || i.props.isDisabled, { keyboardProps: b } = f({
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
	}), S = _();
	S === `virtual` && typeof window < `u` && `ontouchstart` in window && (S = `pointer`);
	let C = c && (S === `keyboard` || S === `virtual`) ? o.format(`removeDescription`) : ``, w = x(C), T = i.key === t.selectionManager.focusedKey, E = t.selectionManager.focusedKey != null, D = -1;
	y || !T && E || (D = 0);
	let O = a(i.props), k = g(i.props), { focusableProps: A } = v({
		...i.props,
		isDisabled: y
	}, r);
	return {
		removeButtonProps: {
			"aria-label": o.format(`removeButtonLabel`),
			"aria-labelledby": `${s} ${l.id}`,
			isDisabled: y,
			id: s,
			onPress: () => c ? c(new Set([i.key])) : null
		},
		rowProps: p(A, l, O, k, {
			tabIndex: D,
			...c ? b : {},
			"aria-describedby": w[`aria-describedby`]
		}),
		gridCellProps: p(u, {
			"aria-errormessage": e[`aria-errormessage`],
			"aria-label": e[`aria-label`]
		}),
		...h,
		allowsRemoving: !!c
	};
}
var De = (0, j.createContext)(null), Oe = (0, j.createContext)(null), ke = (0, j.forwardRef)(function(e, t) {
	return [e, t] = d(e, t, De), j.createElement(w.Provider, { value: null }, j.createElement(oe, { content: e.children }, (n) => j.createElement(Ae, {
		props: e,
		forwardedRef: t,
		collection: n
	})));
});
function Ae({ props: e, forwardedRef: t, collection: n }) {
	let i = (0, j.useRef)(null), { id: o, ...c } = e;
	[c, i] = d(c, i, T);
	let { filter: l, shouldUseVirtualFocus: f, ...p } = c, [m, g] = u(!e[`aria-label`] && !e[`aria-labelledby`]), _ = le({
		...p,
		children: void 0,
		collection: n
	}), v = ce(_, l), y = a(c, { global: !0 }), b = Object.fromEntries(Object.entries(y).map(([e, t]) => [e, e === `id` ? t : void 0])), { gridProps: x, labelProps: S, descriptionProps: C, errorMessageProps: E } = ue({
		...p,
		...b,
		label: g
	}, v, i);
	return j.createElement(s.div, {
		render: e.render,
		...y,
		id: o,
		ref: t,
		slot: e.slot || void 0,
		className: e.className ?? `react-aria-TagGroup`,
		style: e.style
	}, j.createElement(r, { values: [
		[h, {
			...S,
			elementType: `span`,
			ref: m
		}],
		[Oe, {
			...x,
			ref: i
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
function Me({ props: e, forwardedRef: t }) {
	let n = (0, j.useContext)(w), { CollectionRoot: r } = (0, j.useContext)(S), [i, c] = d({}, t, Oe), { focusProps: u, isFocused: f, isFocusVisible: m } = l(), h = {
		isEmpty: n.collection.size === 0,
		isFocused: f,
		isFocusVisible: m,
		state: n
	}, g = o({
		...e,
		children: void 0,
		defaultClassName: `react-aria-TagList`,
		values: h
	}), _ = C(n.selectionManager.focusedKey), v = a(e, { global: !0 });
	return j.createElement(s.div, {
		...p(v, g, i, u),
		ref: c,
		"data-empty": n.collection.size === 0 || void 0,
		"data-focused": f || void 0,
		"data-focus-visible": m || void 0
	}, j.createElement(E, null, n.collection.size === 0 && e.renderEmptyState ? e.renderEmptyState(h) : j.createElement(r, {
		collection: n.collection,
		persistedKeys: _
	})));
}
var Ne = se(ie, (e, t, n) => {
	let i = (0, j.useContext)(w), u = m(t), { focusProps: d, isFocusVisible: f } = l({ within: !1 }), { rowProps: h, gridCellProps: g, removeButtonProps: _, ...v } = Ee({ item: n }, i, u), { hoverProps: x, isHovered: C } = c({
		isDisabled: !v.allowsSelection && !v.hasAction,
		onHoverStart: n.props.onHoverStart,
		onHoverChange: n.props.onHoverChange,
		onHoverEnd: n.props.onHoverEnd
	}), T = o({
		...e,
		id: void 0,
		children: n.rendered,
		defaultClassName: `react-aria-Tag`,
		values: {
			...v,
			isFocusVisible: f,
			isHovered: C,
			selectionMode: i.selectionManager.selectionMode,
			selectionBehavior: i.selectionManager.selectionBehavior
		}
	});
	(0, j.useEffect)(() => {
		n.textValue;
	}, [n.textValue]);
	let E = a(e, { global: !0 });
	return delete E.id, delete E.onClick, j.createElement(s.div, {
		ref: u,
		...p(E, T, h, d, x),
		"data-selected": v.isSelected || void 0,
		"data-disabled": v.isDisabled || void 0,
		"data-hovered": C || void 0,
		"data-focused": v.isFocused || void 0,
		"data-focus-visible": f || void 0,
		"data-pressed": v.isPressed || void 0,
		"data-allows-removing": v.allowsRemoving || void 0,
		"data-selection-mode": i.selectionManager.selectionMode === `none` ? void 0 : i.selectionManager.selectionMode
	}, j.createElement(`div`, {
		...g,
		style: { display: `contents` }
	}, j.createElement(r, { values: [
		[y, { slots: { remove: _ } }],
		[S, b],
		[D, { isSelected: v.isSelected }]
	] }, T.children)));
});
export { ke as n, je as r, Ne as t };
