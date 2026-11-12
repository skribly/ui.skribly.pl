import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, Dt as n, E as r, Et as i, L as a, Lt as o, Nt as s, P as c, Pt as l, Q as u, Tt as d, W as f, _ as p, h as m, j as h, n as g, v as _, wt as v, y } from "./createLucideIcon.npgQlVHx.js";
import { S as b, b as x, g as S, x as C } from "./animation.BhtQe7Yj.js";
import { n as w } from "./ListBox.B-5aHJx2.js";
import { r as T } from "./Autocomplete.BUqxPt-N.js";
import { c as E, s as D } from "./FocusScope.Ba7RJw7M.js";
import { n as O } from "./Text.DxhsPAdy.js";
import { n as k, t as ee } from "./useGridListItem.QmQPCsZs.js";
import { a as A } from "./useLoadMoreSentinel.DKpPMiER.js";
import { n as te } from "./useFormValidation.CKcLNQoz.js";
import { n as ne } from "./react-dom.B9zIfLd2.js";
import { n as re } from "./useLocalizedStringFormatter.CY4FHGAo.js";
import { f as ie, i as ae, n as oe, t as se } from "./CollectionBuilder.Bxdh8Jqj.js";
import { n as ce, t as le } from "./useListState.BvceJMy7.js";
var j = e(ne(), 1), M = new WeakMap();
function ue(e, t, n) {
	let { direction: i } = a(), o = e.keyboardDelegate || new A({
		collection: t.collection,
		ref: n,
		orientation: `horizontal`,
		direction: i,
		disabledKeys: t.disabledKeys,
		disabledBehavior: t.selectionManager.disabledBehavior
	}), { labelProps: s, fieldProps: c, descriptionProps: u, errorMessageProps: d } = te({
		...e,
		labelElementType: `span`
	}), { gridProps: f } = k({
		...e,
		...c,
		keyboardDelegate: o,
		shouldFocusWrap: !0,
		linkBehavior: `override`,
		keyboardNavigationBehavior: `tab`
	}, t, n), [p, m] = (0, j.useState)(!1), { focusWithinProps: h } = y({ onFocusWithinChange: m }), g = r(e), _ = (0, j.useRef)(t.collection.size);
	return (0, j.useEffect)(() => {
		n.current && _.current > 0 && t.collection.size === 0 && p && n.current.focus(), _.current = t.collection.size;
	}, [
		t.collection.size,
		p,
		n
	]), M.set(t, { onRemove: e.onRemove }), {
		gridProps: l(f, g, {
			role: t.collection.size ? `grid` : `group`,
			"aria-atomic": !1,
			"aria-relevant": `additions`,
			"aria-live": p ? `polite` : `off`,
			...h,
			...c
		}),
		labelProps: s,
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
function Ee(e, t, n) {
	let { item: i } = e, a = re(Te(we), `@react-aria/tag`), s = o(), { onRemove: d } = M.get(t) || {}, { rowProps: p, gridCellProps: m, ...g } = ee({ node: i }, t, n), { descriptionProps: _, ...v } = g, y = t.disabledKeys.has(i.key) || i.props.isDisabled, { keyboardProps: b } = c({
		isDisabled: y,
		shortcuts: {
			Delete: () => {
				t.selectionManager.isSelected(i.key) ? d?.(new Set(t.selectionManager.selectedKeys)) : d?.(new Set([i.key]));
			},
			Backspace: () => {
				t.selectionManager.isSelected(i.key) ? d?.(new Set(t.selectionManager.selectedKeys)) : d?.(new Set([i.key]));
			}
		},
		allowRepeats: !0
	}), x = f();
	x === `virtual` && typeof window < `u` && `ontouchstart` in window && (x = `pointer`);
	let C = d && (x === `keyboard` || x === `virtual`) ? a.format(`removeDescription`) : ``, w = S(C), T = i.key === t.selectionManager.focusedKey, E = t.selectionManager.focusedKey != null, D = -1;
	y || !T && E || (D = 0);
	let O = r(i.props), k = u(i.props), { focusableProps: A } = h({
		...i.props,
		isDisabled: y
	}, n);
	return {
		removeButtonProps: {
			"aria-label": a.format(`removeButtonLabel`),
			"aria-labelledby": `${s} ${p.id}`,
			isDisabled: y,
			id: s,
			onPress: () => d ? d(new Set([i.key])) : null
		},
		rowProps: l(A, p, O, k, {
			tabIndex: D,
			...d ? b : {},
			"aria-describedby": w[`aria-describedby`]
		}),
		gridCellProps: l(m, {
			"aria-errormessage": e[`aria-errormessage`],
			"aria-label": e[`aria-label`]
		}),
		...v,
		allowsRemoving: !!d
	};
}
var De = (0, j.createContext)(null), Oe = (0, j.createContext)(null), ke = (0, j.forwardRef)(function(e, t) {
	return [e, t] = d(e, t, De), j.createElement(w.Provider, { value: null }, j.createElement(oe, { content: e.children }, (n) => j.createElement(Ae, {
		props: e,
		forwardedRef: t,
		collection: n
	})));
});
function Ae({ props: e, forwardedRef: i, collection: a }) {
	let o = (0, j.useRef)(null), { id: s, ...c } = e;
	[c, o] = d(c, o, T);
	let { filter: l, shouldUseVirtualFocus: u, ...f } = c, [p, h] = n(!e[`aria-label`] && !e[`aria-labelledby`]), g = le({
		...f,
		children: void 0,
		collection: a
	}), _ = ce(g, l), y = r(c, { global: !0 }), b = Object.fromEntries(Object.entries(y).map(([e, t]) => [e, e === `id` ? t : void 0])), { gridProps: x, labelProps: S, descriptionProps: C, errorMessageProps: E } = ue({
		...f,
		...b,
		label: h
	}, _, o);
	return j.createElement(t.div, {
		render: e.render,
		...y,
		id: s,
		ref: i,
		slot: e.slot || void 0,
		className: e.className ?? `react-aria-TagGroup`,
		style: e.style
	}, j.createElement(v, { values: [
		[m, {
			...S,
			elementType: `span`,
			ref: p
		}],
		[Oe, {
			...x,
			ref: o
		}],
		[w, _],
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
	let a = (0, j.useContext)(w), { CollectionRoot: o } = (0, j.useContext)(x), [s, c] = d({}, n, Oe), { focusProps: u, isFocused: f, isFocusVisible: p } = _(), m = {
		isEmpty: a.collection.size === 0,
		isFocused: f,
		isFocusVisible: p,
		state: a
	}, h = i({
		...e,
		children: void 0,
		defaultClassName: `react-aria-TagList`,
		values: m
	}), g = C(a.selectionManager.focusedKey), v = r(e, { global: !0 });
	return j.createElement(t.div, {
		...l(v, h, s, u),
		ref: c,
		"data-empty": a.collection.size === 0 || void 0,
		"data-focused": f || void 0,
		"data-focus-visible": p || void 0
	}, j.createElement(E, null, a.collection.size === 0 && e.renderEmptyState ? e.renderEmptyState(m) : j.createElement(o, {
		collection: a.collection,
		persistedKeys: g
	})));
}
var Ne = se(ie, (e, n, a) => {
	let o = (0, j.useContext)(w), c = s(n), { focusProps: u, isFocusVisible: d } = _({ within: !1 }), { rowProps: f, gridCellProps: m, removeButtonProps: h, ...y } = Ee({ item: a }, o, c), { hoverProps: S, isHovered: C } = p({
		isDisabled: !y.allowsSelection && !y.hasAction,
		onHoverStart: a.props.onHoverStart,
		onHoverChange: a.props.onHoverChange,
		onHoverEnd: a.props.onHoverEnd
	}), T = i({
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
	let E = r(e, { global: !0 });
	return delete E.id, delete E.onClick, j.createElement(t.div, {
		ref: c,
		...l(E, T, f, u, S),
		"data-selected": y.isSelected || void 0,
		"data-disabled": y.isDisabled || void 0,
		"data-hovered": C || void 0,
		"data-focused": y.isFocused || void 0,
		"data-focus-visible": d || void 0,
		"data-pressed": y.isPressed || void 0,
		"data-allows-removing": y.allowsRemoving || void 0,
		"data-selection-mode": o.selectionManager.selectionMode === `none` ? void 0 : o.selectionManager.selectionMode
	}, j.createElement(`div`, {
		...m,
		style: { display: `contents` }
	}, j.createElement(v, { values: [
		[g, { slots: { remove: h } }],
		[x, b],
		[D, { isSelected: y.isSelected }]
	] }, T.children)));
});
export { ke as n, je as r, Ne as t };
