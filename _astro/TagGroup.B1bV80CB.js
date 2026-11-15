import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, Et as n, Pt as r, R as i, Z as a, cn as o, ct as s, et as c, fn as l, gn as u, gt as d, hn as f, ln as p, on as m, pt as h, sn as g, tt as _, yn as v, yt as y } from "./doc.C_PtMNUB.js";
import { b, m as x, v as S, y as C } from "./useCollection.Cn_I2nJQ.js";
import { n as w } from "./ListBox.Bq8IE31A.js";
import { r as T } from "./Autocomplete.BYGvWyUq.js";
import { c as E, s as D } from "./FocusScope.DSjTtRFm.js";
import { n as O } from "./Text.3KJW7jIs.js";
import { n as k, t as ee } from "./useGridListItem.CURXYjVf.js";
import { a as A } from "./useLoadMoreSentinel.BhNRPrj4.js";
import { n as te } from "./useFormValidation.DOqf-YmE.js";
import { n as ne } from "./react-dom.B9zIfLd2.js";
import { n as re } from "./useLocalizedStringFormatter.whw0Qxu0.js";
import { f as ie, i as ae, n as oe, t as se } from "./CollectionBuilder.BW1Ria3_.js";
import { n as ce, t as le } from "./useListState.B_9ND7CB.js";
var j = e(ne(), 1), M = new WeakMap();
function ue(e, t, n) {
	let { direction: r } = y(), i = e.keyboardDelegate || new A({
		collection: t.collection,
		ref: n,
		orientation: `horizontal`,
		direction: r,
		disabledKeys: t.disabledKeys,
		disabledBehavior: t.selectionManager.disabledBehavior
	}), { labelProps: a, fieldProps: o, descriptionProps: c, errorMessageProps: l } = te({
		...e,
		labelElementType: `span`
	}), { gridProps: d } = k({
		...e,
		...o,
		keyboardDelegate: i,
		shouldFocusWrap: !0,
		linkBehavior: `override`,
		keyboardNavigationBehavior: `tab`
	}, t, n), [f, p] = (0, j.useState)(!1), { focusWithinProps: m } = _({ onFocusWithinChange: p }), h = s(e), g = (0, j.useRef)(t.collection.size);
	return (0, j.useEffect)(() => {
		n.current && g.current > 0 && t.collection.size === 0 && f && n.current.focus(), g.current = t.collection.size;
	}, [
		t.collection.size,
		f,
		n
	]), M.set(t, { onRemove: e.onRemove }), {
		gridProps: u(d, h, {
			role: t.collection.size ? `grid` : `group`,
			"aria-atomic": !1,
			"aria-relevant": `additions`,
			"aria-live": f ? `polite` : `off`,
			...m,
			...o
		}),
		labelProps: a,
		descriptionProps: c,
		errorMessageProps: l
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
function Ee(e, t, i) {
	let { item: a } = e, o = re(Te(we), `@react-aria/tag`), c = v(), { onRemove: l } = M.get(t) || {}, { rowProps: f, gridCellProps: p, ...m } = ee({ node: a }, t, i), { descriptionProps: g, ..._ } = m, y = t.disabledKeys.has(a.key) || a.props.isDisabled, { keyboardProps: b } = d({
		isDisabled: y,
		shortcuts: {
			Delete: () => {
				t.selectionManager.isSelected(a.key) ? l?.(new Set(t.selectionManager.selectedKeys)) : l?.(new Set([a.key]));
			},
			Backspace: () => {
				t.selectionManager.isSelected(a.key) ? l?.(new Set(t.selectionManager.selectedKeys)) : l?.(new Set([a.key]));
			}
		},
		allowRepeats: !0
	}), S = n();
	S === `virtual` && typeof window < `u` && `ontouchstart` in window && (S = `pointer`);
	let C = l && (S === `keyboard` || S === `virtual`) ? o.format(`removeDescription`) : ``, w = x(C), T = a.key === t.selectionManager.focusedKey, E = t.selectionManager.focusedKey != null, D = -1;
	y || !T && E || (D = 0);
	let O = s(a.props), k = r(a.props), { focusableProps: A } = h({
		...a.props,
		isDisabled: y
	}, i);
	return {
		removeButtonProps: {
			"aria-label": o.format(`removeButtonLabel`),
			"aria-labelledby": `${c} ${f.id}`,
			isDisabled: y,
			id: c,
			onPress: () => l ? l(new Set([a.key])) : null
		},
		rowProps: u(A, f, O, k, {
			tabIndex: D,
			...l ? b : {},
			"aria-describedby": w[`aria-describedby`]
		}),
		gridCellProps: u(p, {
			"aria-errormessage": e[`aria-errormessage`],
			"aria-label": e[`aria-label`]
		}),
		..._,
		allowsRemoving: !!l
	};
}
var De = (0, j.createContext)(null), Oe = (0, j.createContext)(null), ke = (0, j.forwardRef)(function(e, t) {
	return [e, t] = g(e, t, De), j.createElement(w.Provider, { value: null }, j.createElement(oe, { content: e.children }, (n) => j.createElement(Ae, {
		props: e,
		forwardedRef: t,
		collection: n
	})));
});
function Ae({ props: e, forwardedRef: t, collection: n }) {
	let r = (0, j.useRef)(null), { id: i, ...o } = e;
	[o, r] = g(o, r, T);
	let { filter: c, shouldUseVirtualFocus: u, ...d } = o, [f, h] = p(!e[`aria-label`] && !e[`aria-labelledby`]), _ = le({
		...d,
		children: void 0,
		collection: n
	}), v = ce(_, c), y = s(o, { global: !0 }), b = Object.fromEntries(Object.entries(y).map(([e, t]) => [e, e === `id` ? t : void 0])), { gridProps: x, labelProps: S, descriptionProps: C, errorMessageProps: E } = ue({
		...d,
		...b,
		label: h
	}, v, r);
	return j.createElement(l.div, {
		render: e.render,
		...y,
		id: i,
		ref: t,
		slot: e.slot || void 0,
		className: e.className ?? `react-aria-TagGroup`,
		style: e.style
	}, j.createElement(m, { values: [
		[a, {
			...S,
			elementType: `span`,
			ref: f
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
function Me({ props: e, forwardedRef: t }) {
	let n = (0, j.useContext)(w), { CollectionRoot: r } = (0, j.useContext)(S), [i, a] = g({}, t, Oe), { focusProps: d, isFocused: f, isFocusVisible: p } = c(), m = {
		isEmpty: n.collection.size === 0,
		isFocused: f,
		isFocusVisible: p,
		state: n
	}, h = o({
		...e,
		children: void 0,
		defaultClassName: `react-aria-TagList`,
		values: m
	}), _ = C(n.selectionManager.focusedKey), v = s(e, { global: !0 });
	return j.createElement(l.div, {
		...u(v, h, i, d),
		ref: a,
		"data-empty": n.collection.size === 0 || void 0,
		"data-focused": f || void 0,
		"data-focus-visible": p || void 0
	}, j.createElement(E, null, n.collection.size === 0 && e.renderEmptyState ? e.renderEmptyState(m) : j.createElement(r, {
		collection: n.collection,
		persistedKeys: _
	})));
}
var Ne = se(ie, (e, n, r) => {
	let a = (0, j.useContext)(w), d = f(n), { focusProps: p, isFocusVisible: h } = c({ within: !1 }), { rowProps: g, gridCellProps: _, removeButtonProps: v, ...y } = Ee({ item: r }, a, d), { hoverProps: x, isHovered: C } = t({
		isDisabled: !y.allowsSelection && !y.hasAction,
		onHoverStart: r.props.onHoverStart,
		onHoverChange: r.props.onHoverChange,
		onHoverEnd: r.props.onHoverEnd
	}), T = o({
		...e,
		id: void 0,
		children: r.rendered,
		defaultClassName: `react-aria-Tag`,
		values: {
			...y,
			isFocusVisible: h,
			isHovered: C,
			selectionMode: a.selectionManager.selectionMode,
			selectionBehavior: a.selectionManager.selectionBehavior
		}
	});
	(0, j.useEffect)(() => {
		r.textValue;
	}, [r.textValue]);
	let E = s(e, { global: !0 });
	return delete E.id, delete E.onClick, j.createElement(l.div, {
		ref: d,
		...u(E, T, g, p, x),
		"data-selected": y.isSelected || void 0,
		"data-disabled": y.isDisabled || void 0,
		"data-hovered": C || void 0,
		"data-focused": y.isFocused || void 0,
		"data-focus-visible": h || void 0,
		"data-pressed": y.isPressed || void 0,
		"data-allows-removing": y.allowsRemoving || void 0,
		"data-selection-mode": a.selectionManager.selectionMode === `none` ? void 0 : a.selectionManager.selectionMode
	}, j.createElement(`div`, {
		..._,
		style: { display: `contents` }
	}, j.createElement(m, { values: [
		[i, { slots: { remove: v } }],
		[S, b],
		[D, { isSelected: y.isSelected }]
	] }, T.children)));
});
export { ke as n, je as r, Ne as t };
