import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { $t as n, I as r, L as i, Nt as a, Q as o, R as s, Sn as c, Ut as l, V as u, Yt as d, Z as f, Zt as p, a as m, bt as h, cn as g, ct as _, fn as v, gn as y, gt as b, j as x, ln as S, lt as C, mn as w, on as T, pn as E, rn as D, sn as O, wt as k, yn as A, z as ee } from "./doc.C_PtMNUB.js";
import { n as te } from "./react-dom.B9zIfLd2.js";
import { a as j, i as ne, n as M, o as N, r as P, s as F, t as I } from "./ListBox.Bq8IE31A.js";
import { t as L } from "./Button.df3csLrB.js";
import { a as R, c as z, d as B, f as V, i as H, l as re, m as ie, n as ae, o as U, p as W, r as oe, s as G, t as K, u as q } from "./CommandPalette.DUgZsgso.js";
import { r as J, t as se } from "./useFormReset.Cf-RVIHo.js";
import { c as ce, n as le, t as Y } from "./Autocomplete.BYGvWyUq.js";
import { c as ue, i as de, o as fe } from "./useFormValidation.DOqf-YmE.js";
import { n as pe } from "./Group.CmTJ4Xbt.js";
import { n as me, r as he, t as ge } from "./useTextField.DqlAegV0.js";
import { d as _e, i as ve, l as ye, n as be, u as xe } from "./Dialog.1Jdfd_U0.js";
import { n as Se } from "./Text.3KJW7jIs.js";
import { n as Ce } from "./ariaHideOutside.DgEDEHgw.js";
import { a as we, n as Te, s as Ee } from "./useLoadMoreSentinel.BhNRPrj4.js";
import { t as De } from "./useEvent.DZ6Jaavz.js";
import { n as Oe } from "./useLocalizedStringFormatter.whw0Qxu0.js";
import { a as ke, d as Ae } from "./useCollection.Cn_I2nJQ.js";
import { t as je } from "./useUpdateEffect.Cquvw486.js";
import { n as Me } from "./CollectionBuilder.BW1Ria3_.js";
import { r as Ne, t as Pe } from "./useListState.B_9ND7CB.js";
import { r as Fe, t as Ie } from "./useOverlayTriggerState.ecOZOIeH.js";
import { t as Le } from "./useControlledState.DijOhE0s.js";
import { t as Re } from "./useFilter.B5m9LH6h.js";
import { t as X } from "./Highlight.ZQkiSsZt.js";
import { n as ze, t as Be } from "./Modal.BMO12Y6j.js";
import { t as Ve } from "./SearchField.Bqv7xBXE.js";
import { t as He } from "./ToggleButton.D3fOu9dM.js";
import { n as Ue, t as We } from "./Tooltip.D4ql3l80.js";
var Ge = {};
Ge = {
	buttonLabel: `عرض المقترحات`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}`,
		other: () => `${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`
	})} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{627}\u{644}\u{645}\u{62C}\u{645}\u{648}\u{639}\u{629} \u{627}\u{644}\u{645}\u{62F}\u{62E}\u{644}\u{629} ${e.groupTitle}, \u{645}\u{639} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}`,
			other: () => `${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, محدد`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `مقترحات`,
	selectedAnnouncement: (e) => `${e.optionText}\u{60C} \u{645}\u{62D}\u{62F}\u{62F}`
};
var Ke = {};
Ke = {
	buttonLabel: `Покажи предложения`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,
		other: () => `${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`
	})} \u{43D}\u{430} \u{440}\u{430}\u{437}\u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{435}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{412}\u{44A}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,
			other: () => `${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, избрани`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Предложения`,
	selectedAnnouncement: (e) => `${e.optionText}, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`
};
var qe = {};
qe = {
	buttonLabel: `Zobrazit doporučení`,
	countAnnouncement: (e, t) => `K dispozici ${t.plural(e.optionCount, {
		one: () => `je ${t.number(e.optionCount)} mo\u{17E}nost`,
		other: () => `jsou/je ${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Zadan\xe1 skupina \u{201E}${e.groupTitle}\u{201C} ${t.plural(e.groupCount, {
			one: () => `s ${t.number(e.groupCount)} mo\u{17E}nost\xed`,
			other: () => `se ${t.number(e.groupCount)} mo\u{17E}nostmi`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ` (vybráno)`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Návrhy`,
	selectedAnnouncement: (e) => `${e.optionText}, vybr\xe1no`
};
var Je = {};
Je = {
	buttonLabel: `Vis forslag`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} mulighed tilg\xe6ngelig`,
		other: () => `${t.number(e.optionCount)} muligheder tilg\xe6ngelige`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Angivet gruppe ${e.groupTitle}, med ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} mulighed`,
			other: () => `${t.number(e.groupCount)} muligheder`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, valgt`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Forslag`,
	selectedAnnouncement: (e) => `${e.optionText}, valgt`
};
var Ye = {};
Ye = {
	buttonLabel: `Empfehlungen anzeigen`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} Option`,
		other: () => `${t.number(e.optionCount)} Optionen`
	})} verf\xfcgbar.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Eingetretene Gruppe ${e.groupTitle}, mit ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} Option`,
			other: () => `${t.number(e.groupCount)} Optionen`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, ausgewählt`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Empfehlungen`,
	selectedAnnouncement: (e) => `${e.optionText}, ausgew\xe4hlt`
};
var Xe = {};
Xe = {
	buttonLabel: `Προβολή προτάσεων`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,
		other: () => `${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2} `
	})} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B5}\u{3C2}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3BF}\u{3BC}\u{3AC}\u{3B4}\u{3B1} ${e.groupTitle}, \u{3BC}\u{3B5} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,
			other: () => `${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2}`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, επιλεγμένο`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Προτάσεις`,
	selectedAnnouncement: (e) => `${e.optionText}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5}`
};
var Ze = {};
Ze = {
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Entered group ${e.groupTitle}, with ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} option`,
			other: () => `${t.number(e.groupCount)} options`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, selected`,
		other: ``
	}, e.isSelected)}`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} option`,
		other: () => `${t.number(e.optionCount)} options`
	})} available.`,
	selectedAnnouncement: (e) => `${e.optionText}, selected`,
	buttonLabel: `Show suggestions`,
	listboxLabel: `Suggestions`
};
var Qe = {};
Qe = {
	buttonLabel: `Mostrar sugerencias`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opci\xf3n`,
		other: () => `${t.number(e.optionCount)} opciones`
	})} disponible(s).`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Se ha unido al grupo ${e.groupTitle}, con ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opci\xf3n`,
			other: () => `${t.number(e.groupCount)} opciones`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, seleccionado`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Sugerencias`,
	selectedAnnouncement: (e) => `${e.optionText}, seleccionado`
};
var $e = {};
$e = {
	buttonLabel: `Kuva soovitused`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} valik`,
		other: () => `${t.number(e.optionCount)} valikud`
	})} saadaval.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Sisestatud r\xfchm ${e.groupTitle}, valikuga ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} valik`,
			other: () => `${t.number(e.groupCount)} valikud`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, valitud`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Soovitused`,
	selectedAnnouncement: (e) => `${e.optionText}, valitud`
};
var et = {};
et = {
	buttonLabel: `Näytä ehdotukset`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} vaihtoehto`,
		other: () => `${t.number(e.optionCount)} vaihtoehtoa`
	})} saatavilla.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Siirtyi ryhm\xe4\xe4n ${e.groupTitle}, jossa ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} vaihtoehto`,
			other: () => `${t.number(e.groupCount)} vaihtoehtoa`
		})}.`,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, valittu`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Ehdotukset`,
	selectedAnnouncement: (e) => `${e.optionText}, valittu`
};
var tt = {};
tt = {
	buttonLabel: `Afficher les suggestions`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} option`,
		other: () => `${t.number(e.optionCount)} options`
	})} disponible(s).`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Groupe ${e.groupTitle} rejoint, avec ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} option`,
			other: () => `${t.number(e.groupCount)} options`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, sélectionné(s)`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Suggestions`,
	selectedAnnouncement: (e) => `${e.optionText}, s\xe9lectionn\xe9`
};
var nt = {};
nt = {
	buttonLabel: `הצג הצעות`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.optionCount)}`,
		other: () => `${t.number(e.optionCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`
	})} \u{5D1}\u{5DE}\u{5E6}\u{5D1} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{5E0}\u{5DB}\u{5E0}\u{5E1} \u{5DC}\u{5E7}\u{5D1}\u{5D5}\u{5E6}\u{5D4} ${e.groupTitle}, \u{5E2}\u{5DD} ${t.plural(e.groupCount, {
			one: () => `\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.groupCount)}`,
			other: () => `${t.number(e.groupCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, נבחר`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `הצעות`,
	selectedAnnouncement: (e) => `${e.optionText}, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`
};
var rt = {};
rt = {
	buttonLabel: `Prikaži prijedloge`,
	countAnnouncement: (e, t) => `Dostupno jo\u{161}: ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcija`,
		other: () => `${t.number(e.optionCount)} opcije/a`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Unesena skupina ${e.groupTitle}, s ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opcijom`,
			other: () => `${t.number(e.groupCount)} opcije/a`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, odabranih`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Prijedlozi`,
	selectedAnnouncement: (e) => `${e.optionText}, odabrano`
};
var it = {};
it = {
	buttonLabel: `Javaslatok megjelenítése`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} lehet\u{151}s\xe9g`,
		other: () => `${t.number(e.optionCount)} lehet\u{151}s\xe9g`
	})} \xe1ll rendelkez\xe9sre.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Bel\xe9pett a(z) ${e.groupTitle} csoportba, amely ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} lehet\u{151}s\xe9get`,
			other: () => `${t.number(e.groupCount)} lehet\u{151}s\xe9get`
		})} tartalmaz. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, kijelölve`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Javaslatok`,
	selectedAnnouncement: (e) => `${e.optionText}, kijel\xf6lve`
};
var at = {};
at = {
	buttonLabel: `Mostra suggerimenti`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opzione disponibile`,
		other: () => `${t.number(e.optionCount)} opzioni disponibili`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Ingresso nel gruppo ${e.groupTitle}, con ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opzione`,
			other: () => `${t.number(e.groupCount)} opzioni`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, selezionato`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Suggerimenti`,
	selectedAnnouncement: (e) => `${e.optionText}, selezionato`
};
var ot = {};
ot = {
	buttonLabel: `候補を表示`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,
		other: () => `${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`
	})}\u{3092}\u{5229}\u{7528}\u{3067}\u{304D}\u{307E}\u{3059}\u{3002}`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{5165}\u{529B}\u{3055}\u{308C}\u{305F}\u{30B0}\u{30EB}\u{30FC}\u{30D7} ${e.groupTitle}\u{3001}${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,
			other: () => `${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`
		})}\u{3092}\u{542B}\u{3080}\u{3002}`,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `、選択済み`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `候補`,
	selectedAnnouncement: (e) => `${e.optionText}\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`
};
var st = {};
st = {
	buttonLabel: `제안 사항 표시`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`,
		other: () => `${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`
	})}\u{C744} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{C785}\u{B825}\u{D55C} \u{ADF8}\u{B8F9} ${e.groupTitle}, ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`,
			other: () => `${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, 선택됨`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `제안`,
	selectedAnnouncement: (e) => `${e.optionText}, \u{C120}\u{D0DD}\u{B428}`
};
var ct = {};
ct = {
	buttonLabel: `Rodyti pasiūlymus`,
	countAnnouncement: (e, t) => `Yra ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} parinktis`,
		other: () => `${t.number(e.optionCount)} parinktys (-i\u{173})`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{12E}vesta grup\u{117} ${e.groupTitle}, su ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} parinktimi`,
			other: () => `${t.number(e.groupCount)} parinktimis (-i\u{173})`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, pasirinkta`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Pasiūlymai`,
	selectedAnnouncement: (e) => `${e.optionText}, pasirinkta`
};
var lt = {};
lt = {
	buttonLabel: `Rādīt ieteikumus`,
	countAnnouncement: (e, t) => `Pieejamo opciju skaits: ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcija`,
		other: () => `${t.number(e.optionCount)} opcijas`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Ievad\u{12B}ta grupa ${e.groupTitle}, ar ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opciju`,
			other: () => `${t.number(e.groupCount)} opcij\u{101}m`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, atlasīta`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Ieteikumi`,
	selectedAnnouncement: (e) => `${e.optionText}, atlas\u{12B}ta`
};
var ut = {};
ut = {
	buttonLabel: `Vis forslag`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} alternativ`,
		other: () => `${t.number(e.optionCount)} alternativer`
	})} finnes.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Angitt gruppe ${e.groupTitle}, med ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} alternativ`,
			other: () => `${t.number(e.groupCount)} alternativer`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, valgt`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Forslag`,
	selectedAnnouncement: (e) => `${e.optionText}, valgt`
};
var dt = {};
dt = {
	buttonLabel: `Suggesties weergeven`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} optie`,
		other: () => `${t.number(e.optionCount)} opties`
	})} beschikbaar.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Groep ${e.groupTitle} ingevoerd met ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} optie`,
			other: () => `${t.number(e.groupCount)} opties`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, geselecteerd`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Suggesties`,
	selectedAnnouncement: (e) => `${e.optionText}, geselecteerd`
};
var ft = {};
ft = {
	buttonLabel: `Wyświetlaj sugestie`,
	countAnnouncement: (e, t) => `dost\u{119}pna/dost\u{119}pne(-nych) ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcja`,
		other: () => `${t.number(e.optionCount)} opcje(-i)`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Do\u{142}\u{105}czono do grupy ${e.groupTitle}, z ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opcj\u{105}`,
			other: () => `${t.number(e.groupCount)} opcjami`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, wybrano`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Sugestie`,
	selectedAnnouncement: (e) => `${e.optionText}, wybrano`
};
var pt = {};
pt = {
	buttonLabel: `Mostrar sugestões`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} op\xe7\xe3o`,
		other: () => `${t.number(e.optionCount)} op\xe7\xf5es`
	})} dispon\xedvel.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Grupo inserido ${e.groupTitle}, com ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} op\xe7\xe3o`,
			other: () => `${t.number(e.groupCount)} op\xe7\xf5es`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, selecionado`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Sugestões`,
	selectedAnnouncement: (e) => `${e.optionText}, selecionado`
};
var mt = {};
mt = {
	buttonLabel: `Apresentar sugestões`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} op\xe7\xe3o`,
		other: () => `${t.number(e.optionCount)} op\xe7\xf5es`
	})} dispon\xedvel.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Grupo introduzido ${e.groupTitle}, com ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} op\xe7\xe3o`,
			other: () => `${t.number(e.groupCount)} op\xe7\xf5es`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, selecionado`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Sugestões`,
	selectedAnnouncement: (e) => `${e.optionText}, selecionado`
};
var ht = {};
ht = {
	buttonLabel: `Afișare sugestii`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} op\u{21B}iune`,
		other: () => `${t.number(e.optionCount)} op\u{21B}iuni`
	})} disponibile.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Grup ${e.groupTitle} introdus, cu ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} op\u{21B}iune`,
			other: () => `${t.number(e.groupCount)} op\u{21B}iuni`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, selectat`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Sugestii`,
	selectedAnnouncement: (e) => `${e.optionText}, selectat`
};
var gt = {};
gt = {
	buttonLabel: `Показать предложения`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
		other: () => `${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{432}`
	})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{43D}\u{430}\u{44F} \u{433}\u{440}\u{443}\u{43F}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{43C}`,
			other: () => `${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{430}\u{43C}\u{438}`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, выбранными`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Предложения`,
	selectedAnnouncement: (e) => `${e.optionText}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
};
var _t = {};
_t = {
	buttonLabel: `Zobraziť návrhy`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} mo\u{17E}nos\u{165}`,
		other: () => `${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`
	})} k dispoz\xedcii.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Zadan\xe1 skupina ${e.groupTitle}, s ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} mo\u{17E}nos\u{165}ou`,
			other: () => `${t.number(e.groupCount)} mo\u{17E}nos\u{165}ami`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, vybraté`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Návrhy`,
	selectedAnnouncement: (e) => `${e.optionText}, vybrat\xe9`
};
var vt = {};
vt = {
	buttonLabel: `Prikaži predloge`,
	countAnnouncement: (e, t) => `Na voljo je ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcija`,
		other: () => `${t.number(e.optionCount)} opcije`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Vnesena skupina ${e.groupTitle}, z ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opcija`,
			other: () => `${t.number(e.groupCount)} opcije`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, izbrano`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Predlogi`,
	selectedAnnouncement: (e) => `${e.optionText}, izbrano`
};
var yt = {};
yt = {
	buttonLabel: `Prikaži predloge`,
	countAnnouncement: (e, t) => `Dostupno jo\u{161}: ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcija`,
		other: () => `${t.number(e.optionCount)} opcije/a`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Unesena grupa ${e.groupTitle}, s ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opcijom`,
			other: () => `${t.number(e.groupCount)} optione/a`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, izabranih`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Predlozi`,
	selectedAnnouncement: (e) => `${e.optionText}, izabrano`
};
var bt = {};
bt = {
	buttonLabel: `Visa förslag`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} alternativ`,
		other: () => `${t.number(e.optionCount)} alternativ`
	})} tillg\xe4ngliga.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Ingick i gruppen ${e.groupTitle} med ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} alternativ`,
			other: () => `${t.number(e.groupCount)} alternativ`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, valda`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Förslag`,
	selectedAnnouncement: (e) => `${e.optionText}, valda`
};
var xt = {};
xt = {
	buttonLabel: `Önerileri göster`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} se\xe7enek`,
		other: () => `${t.number(e.optionCount)} se\xe7enekler`
	})} kullan\u{131}labilir.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Girilen grup ${e.groupTitle}, ile ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} se\xe7enek`,
			other: () => `${t.number(e.groupCount)} se\xe7enekler`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, seçildi`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Öneriler`,
	selectedAnnouncement: (e) => `${e.optionText}, se\xe7ildi`
};
var St = {};
St = {
	buttonLabel: `Показати пропозиції`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
		other: () => `${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`
	})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{437} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
			other: () => `${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, вибрано`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `Пропозиції`,
	selectedAnnouncement: (e) => `${e.optionText}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
};
var Ct = {};
Ct = {
	buttonLabel: `显示建议`,
	countAnnouncement: (e, t) => `\u{6709} ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`,
		other: () => `${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`
	})}\u{53EF}\u{7528}\u{3002}`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{8FDB}\u{5165}\u{4E86} ${e.groupTitle} \u{7EC4}\u{FF0C}\u{5176}\u{4E2D}\u{6709} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`,
			other: () => `${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, 已选择`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `建议`,
	selectedAnnouncement: (e) => `${e.optionText}, \u{5DF2}\u{9009}\u{62E9}`
};
var wt = {};
wt = {
	buttonLabel: `顯示建議`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{9078}\u{9805}`,
		other: () => `${t.number(e.optionCount)} \u{9078}\u{9805}`
	})} \u{53EF}\u{7528}\u{3002}`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{8F38}\u{5165}\u{7684}\u{7FA4}\u{7D44} ${e.groupTitle}, \u{6709} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{9078}\u{9805}`,
			other: () => `${t.number(e.groupCount)} \u{9078}\u{9805}`
		})}. `,
		other: ``
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: `, 已選取`,
		other: ``
	}, e.isSelected)}`,
	listboxLabel: `建議`,
	selectedAnnouncement: (e) => `${e.optionText}, \u{5DF2}\u{9078}\u{53D6}`
};
var Tt = {};
Tt = {
	"ar-AE": Ge,
	"bg-BG": Ke,
	"cs-CZ": qe,
	"da-DK": Je,
	"de-DE": Ye,
	"el-GR": Xe,
	"en-US": Ze,
	"es-ES": Qe,
	"et-EE": $e,
	"fi-FI": et,
	"fr-FR": tt,
	"he-IL": nt,
	"hr-HR": rt,
	"hu-HU": it,
	"it-IT": at,
	"ja-JP": ot,
	"ko-KR": st,
	"lt-LT": ct,
	"lv-LV": lt,
	"nb-NO": ut,
	"nl-NL": dt,
	"pl-PL": ft,
	"pt-BR": pt,
	"pt-PT": mt,
	"ro-RO": ht,
	"ru-RU": gt,
	"sk-SK": _t,
	"sl-SI": vt,
	"sr-SP": yt,
	"sv-SE": bt,
	"tr-TR": xt,
	"uk-UA": St,
	"zh-CN": Ct,
	"zh-TW": wt
};
var Z = t(te(), 1);
function Et(e) {
	return e && e.__esModule ? e.default : e;
}
function Dt(e, t) {
	let { buttonRef: r, popoverRef: i, inputRef: o, listBoxRef: s, keyboardDelegate: f, layoutDelegate: m, shouldFocusWrap: g, isReadOnly: _, isDisabled: v } = e, x = (0, Z.useRef)(null);
	r ??= x;
	let S = Oe(Et(Tt), `@react-aria/combobox`), { menuTriggerProps: C, menuProps: w } = ye({
		type: `listbox`,
		isDisabled: v || _
	}, t, r);
	N.set(t, { id: w.id });
	let { collection: T } = t, { disabledKeys: E } = t.selectionManager, O = (0, Z.useMemo)(() => f || new we({
		collection: T,
		disabledKeys: E,
		ref: s,
		layoutDelegate: m
	}), [
		f,
		m,
		T,
		E,
		s
	]), { collectionProps: A } = Ae({
		selectionManager: t.selectionManager,
		keyboardDelegate: O,
		disallowTypeAhead: !0,
		disallowEmptySelection: !0,
		shouldFocusWrap: g,
		ref: o,
		isVirtualized: !0
	}), ee = a(), { keyboardProps: te } = b({ shortcuts: {
		Enter: (e) => {
			let n = t.isOpen;
			if (t.isOpen && s.current && t.selectionManager.focusedKey != null) {
				let r = t.collection.getItem(t.selectionManager.focusedKey);
				if (r?.props.href) {
					let i = s.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
					return i instanceof HTMLAnchorElement && ee.open(i, e, r.props.href, r.props.routerOptions), t.close(), { shouldPreventDefault: n };
				}
				if (r?.props.onAction) return r.props.onAction(), t.close(), { shouldPreventDefault: n };
			}
			return t.commit(), { shouldPreventDefault: n };
		},
		Tab: () => {
			if (t.isOpen && s.current && t.selectionManager.focusedKey != null) {
				let e = t.collection.getItem(t.selectionManager.focusedKey);
				if (e?.props.href) return t.close(), { shouldPreventDefault: !1 };
				if (e?.props.onAction) return e.props.onAction(), t.close(), {
					shouldPreventDefault: !1,
					shouldContinuePropagation: !0
				};
			}
			return t.isOpen && t.commit(), {
				shouldPreventDefault: !1,
				shouldContinuePropagation: !0
			};
		},
		Escape: () => {
			let n = !1;
			return (!t.selectionManager.isEmpty || t.inputValue === `` || e.allowsCustomValue) && (n = !0), t.revert(), { shouldContinuePropagation: n };
		}
	} }), { keyboardProps: j } = b({
		shortcuts: {
			ArrowDown: () => (t.open(`first`, `manual`), { shouldPreventDefault: !1 }),
			ArrowUp: () => (t.open(`last`, `manual`), { shouldPreventDefault: !1 }),
			ArrowLeft: () => (t.selectionManager.setFocusedKey(null), { shouldPreventDefault: !1 }),
			ArrowRight: () => (t.selectionManager.setFocusedKey(null), { shouldPreventDefault: !1 })
		},
		allowRepeats: !0
	}), ne = (n) => {
		let a = d(r.current, n.relatedTarget), o = d(i.current, n.relatedTarget);
		a || o || (e.onBlur && e.onBlur(n), t.setFocused(!1));
	}, M = (n) => {
		t.isFocused || (e.onFocus && e.onFocus(n), t.setFocused(!0));
	}, P = Ot([t.selectionManager.selectedKeys, t.selectionManager.selectionMode]), { isInvalid: I, validationErrors: L, validationDetails: R } = t.displayValidation, { labelProps: z, inputProps: B, descriptionProps: V, errorMessageProps: H } = ge({
		...e,
		isRequired: e.selectionMode === `multiple` ? e.isRequired && t.selectionManager.isEmpty : e.isRequired,
		onChange: t.setInputValue,
		onKeyDown: _ ? e.onKeyDown : c(t.isOpen && A.onKeyDown, te.onKeyDown, j.onKeyDown, e.onKeyDown),
		onBlur: ne,
		value: t.inputValue,
		defaultValue: t.defaultInputValue,
		onFocus: M,
		autoComplete: `off`,
		validate: void 0,
		[fe]: t,
		"aria-describedby": [P, e[`aria-describedby`]].filter(Boolean).join(` `) || void 0
	}, o);
	se(o, t.defaultValue, t.setValue);
	let re = (e) => {
		e.pointerType === `touch` && (o.current?.focus(), t.toggle(null, `manual`));
	}, ie = (e) => {
		e.pointerType !== `touch` && (o.current?.focus(), t.toggle(e.pointerType === `keyboard` || e.pointerType === `virtual` ? `first` : null, `manual`));
	}, ae = h({
		id: C.id,
		"aria-label": S.format(`buttonLabel`),
		"aria-labelledby": e[`aria-labelledby`] || z.id
	}), U = h({
		id: w.id,
		"aria-label": S.format(`listboxLabel`),
		"aria-labelledby": e[`aria-labelledby`] || z.id
	}), W = (0, Z.useRef)(0), oe = (e) => {
		if (v || _) return;
		if (e.timeStamp - W.current < 500) {
			e.preventDefault(), o.current?.focus();
			return;
		}
		let r = n(e).getBoundingClientRect(), i = e.changedTouches[0], a = Math.ceil(r.left + .5 * r.width), s = Math.ceil(r.top + .5 * r.height);
		i.clientX === a && i.clientY === s && (e.preventDefault(), o.current?.focus(), t.toggle(null, `manual`), W.current = e.timeStamp);
	}, G = t.selectionManager.focusedKey != null && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0, K = G?.parentKey ?? null, q = t.selectionManager.focusedKey ?? null, J = (0, Z.useRef)(K), le = (0, Z.useRef)(q);
	(0, Z.useEffect)(() => {
		if (l() && G != null && q != null && q !== le.current) {
			let e = t.selectionManager.isSelected(q), n = K == null ? null : t.collection.getItem(K), r = n?.[`aria-label`] || (typeof n?.rendered == `string` ? n.rendered : ``) || ``, i = S.format(`focusAnnouncement`, {
				isGroupChange: (n && K !== J.current) ?? !1,
				groupTitle: r,
				groupCount: n ? [...ke(n, t.collection)].length : 0,
				optionText: G[`aria-label`] || G.textValue || ``,
				isSelected: e
			});
			u(i);
		}
		J.current = K, le.current = q;
	});
	let Y = Te(t.collection), ue = (0, Z.useRef)(Y), de = (0, Z.useRef)(t.isOpen);
	(0, Z.useEffect)(() => {
		let e = t.isOpen !== de.current && (t.selectionManager.focusedKey == null || l());
		if (t.isOpen && (e || Y !== ue.current)) {
			let e = S.format(`countAnnouncement`, { optionCount: Y });
			u(e);
		}
		ue.current = Y, de.current = t.isOpen;
	});
	let pe = (0, Z.useRef)(t.selectedKey);
	return (0, Z.useEffect)(() => {
		if (l() && t.isFocused && t.selectedItem && t.selectedKey !== pe.current) {
			let e = t.selectedItem[`aria-label`] || t.selectedItem.textValue || ``, n = S.format(`selectedAnnouncement`, { optionText: e });
			u(n);
		}
		pe.current = t.selectedKey;
	}), (0, Z.useEffect)(() => {
		if (t.isOpen) return Ce([o.current, i.current].filter((e) => e != null));
	}, [
		t.isOpen,
		o,
		i
	]), je(() => {
		!G && o.current && p(D(o.current)) === o.current && ce(o.current, null);
	}, [G]), De(s, `react-aria-item-action`, t.isOpen ? () => {
		t.close();
	} : void 0), {
		labelProps: {
			...z,
			onClick: `htmlFor` in z && z.htmlFor || e.isDisabled ? void 0 : () => {
				o.current?.focus(), k(`keyboard`);
			}
		},
		buttonProps: {
			...C,
			...ae,
			excludeFromTabOrder: !0,
			preventFocusOnPress: !0,
			onPress: re,
			onPressStart: ie,
			isDisabled: v || _
		},
		inputProps: y(B, {
			role: `combobox`,
			"aria-expanded": C[`aria-expanded`],
			"aria-controls": t.isOpen ? w.id : void 0,
			"aria-autocomplete": `list`,
			"aria-activedescendant": G ? F(t, G.key) : void 0,
			onTouchEnd: oe,
			autoCorrect: `off`,
			spellCheck: `false`
		}),
		listBoxProps: y(w, U, {
			onAction: void 0,
			autoFocus: t.focusStrategy || !0,
			shouldUseVirtualFocus: !0,
			shouldSelectOnPressUp: !0,
			shouldFocusOnHover: !0,
			linkBehavior: `selection`,
			UNSTABLE_itemBehavior: `action`
		}),
		valueProps: { id: P },
		descriptionProps: V,
		errorMessageProps: H,
		isInvalid: I,
		validationErrors: L,
		validationDetails: R
	};
}
function Ot(e = []) {
	let t = A(), [n, r] = (0, Z.useState)(!0), [i, a] = (0, Z.useState)(e);
	return i.some((t, n) => !Object.is(t, e[n])) && (r(!0), a(e)), (0, Z.useEffect)(() => {
		n && !document.getElementById(t) && r(!1);
	}, [
		t,
		n,
		i
	]), n ? t : void 0;
}
function kt(e) {
	let { defaultFilter: t, menuTrigger: n = `input`, allowsEmptyCollection: r = !1, allowsCustomValue: i, shouldCloseOnBlur: a = !0, selectionMode: o = `single` } = e, [s, c] = (0, Z.useState)(!1), [l, u] = (0, Z.useState)(!1), [d, f] = (0, Z.useState)(null), p = (0, Z.useRef)(!1), m = (0, Z.useMemo)(() => e.defaultValue === void 0 ? o === `single` ? e.defaultSelectedKey ?? null : [] : e.defaultValue, [
		e.defaultValue,
		e.defaultSelectedKey,
		o
	]), h = (0, Z.useMemo)(() => e.value === void 0 ? o === `single` ? e.selectedKey : void 0 : e.value, [
		e.value,
		e.selectedKey,
		o
	]), [g, _] = Le(h, m, e.onChange), v = o === `single` && Array.isArray(g) ? g[0] : g, y = (t) => {
		if (o === `single`) {
			let n = Array.isArray(t) ? t[0] ?? null : t;
			_(n), n !== v && e.onSelectionChange?.(n);
		} else {
			let e = [];
			Array.isArray(t) ? e = t : t != null && (e = [t]), _(e);
		}
	}, { collection: b, selectionManager: x, disabledKeys: S } = Pe({
		...e,
		items: e.items ?? e.defaultItems,
		selectionMode: o,
		disallowEmptySelection: o === `single`,
		allowDuplicateSelectionEvents: !0,
		selectedKeys: (0, Z.useMemo)(() => Nt(v), [v]),
		onSelectionChange: (t) => {
			if (t !== `all`) {
				if (o === `single`) {
					let n = t.values().next().value ?? null;
					n === v ? (e.onSelectionChange?.(n), B(), L()) : y(n);
				} else y([...t]);
			}
		}
	}), C = o === `single` ? x.firstSelectedKey : null, w = (0, Z.useMemo)(() => [...x.selectedKeys].map((e) => b.getItem(e)).filter((e) => e != null), [x.selectedKeys, b]), [T, E] = Le(e.inputValue, Mt(e.defaultInputValue, C, b) || ``, e.onInputChange), [D] = (0, Z.useState)(v), [O] = (0, Z.useState)(T), k = b, A = (0, Z.useMemo)(() => e.items != null || !t ? b : At(b, T, t), [
		b,
		T,
		t,
		e.items
	]), [ee, te] = (0, Z.useState)(A), j = (0, Z.useRef)(`focus`), ne = (t) => {
		e.onOpenChange && e.onOpenChange(t, t ? j.current : void 0), x.setFocused(t), t || x.setFocusedKey(null);
	}, M = Ie({
		...e,
		onOpenChange: ne,
		isOpen: void 0,
		defaultOpen: void 0
	}), N = (t = null, i) => {
		let a = i === `manual` || i === `focus` && n === `focus`;
		(r || A.size > 0 || a && k.size > 0 || e.items) && (a && !M.isOpen && e.items === void 0 && c(!0), j.current = i, f(t), M.open());
	}, P = (t = null, i) => {
		let a = i === `manual` || i === `focus` && n === `focus`;
		(r || A.size > 0 || a && k.size > 0 || e.items || M.isOpen) && (a && !M.isOpen && e.items === void 0 && c(!0), M.isOpen || (j.current = i), I(t));
	}, F = (0, Z.useCallback)(() => {
		te(s ? k : A);
	}, [
		s,
		k,
		A
	]), I = (0, Z.useCallback)((e = null) => {
		M.isOpen && F(), f(e), M.toggle();
	}, [M, F]), L = (0, Z.useCallback)(() => {
		M.isOpen && (F(), M.close());
	}, [M, F]), [R, z] = (0, Z.useState)(T), B = () => {
		let e = C == null ? `` : b.getItem(C)?.textValue ?? ``;
		z(e), E(e);
	}, V = (0, Z.useRef)(v), H = (0, Z.useRef)(C == null ? `` : b.getItem(C)?.textValue ?? ``);
	(0, Z.useEffect)(() => {
		l && (A.size > 0 || r) && !M.isOpen && T !== R && n !== `manual` && N(null, `input`), !s && !r && M.isOpen && A.size === 0 && (p.current = !0, L()), l && p.current && A.size > 0 && !M.isOpen && n !== `manual` && (p.current = !1, N(null, `input`)), v != null && v !== V.current && o === `single` && L(), T !== R && (x.setFocusedKey(null), c(!1), o === `single` && T === `` && (e.inputValue === void 0 || h === void 0) && y(null)), v !== V.current && (e.inputValue === void 0 || h === void 0) ? B() : R !== T && z(T);
		let t = C == null ? `` : b.getItem(C)?.textValue ?? ``;
		!l && C != null && e.inputValue === void 0 && C === V.current && H.current !== t && (z(t), E(t)), V.current = v, H.current = t;
	});
	let re = ue({
		...e,
		value: (0, Z.useMemo)(() => Array.isArray(v) && v.length === 0 ? null : {
			inputValue: T,
			value: v,
			selectedKey: C
		}, [
			T,
			C,
			v
		])
	}), ie = () => {
		p.current = !1, i && C == null ? ae() : U();
	}, ae = () => {
		o === `multiple` ? (z(T), L()) : (V.current = null, y(null), L());
	}, U = (t = !1) => {
		if (h !== void 0 && e.inputValue !== void 0) {
			let n = C == null ? `` : b.getItem(C)?.textValue ?? ``;
			(t || o === `multiple` || T !== n) && (e.onSelectionChange?.(C), e.onChange?.(v)), z(n), L();
		} else B(), L();
	}, W = () => {
		if (p.current = !1, i) {
			let e = C == null ? `` : b.getItem(C)?.textValue ?? ``;
			T === e ? U() : ae();
		} else U();
	}, oe = () => {
		M.isOpen && x.focusedKey != null ? x.isSelected(x.focusedKey) && o === `single` ? U(!0) : x.select(x.focusedKey) : W();
	}, G = (0, Z.useRef)([T, v]), K = (t) => {
		t ? (G.current = [T, v], n === `focus` && !e.isReadOnly && N(null, `focus`)) : (a && W(), (T !== G.current[0] || v !== G.current[1]) && re.commitValidation()), u(t);
	}, q = (0, Z.useMemo)(() => M.isOpen ? s ? k : A : ee, [
		M.isOpen,
		k,
		A,
		s,
		ee
	]), J = e.defaultSelectedKey ?? (o === `single` ? D : null);
	return {
		...re,
		...M,
		focusStrategy: d,
		toggle: P,
		open: N,
		close: W,
		selectionManager: x,
		value: v,
		defaultValue: m ?? D,
		setValue: y,
		selectedKey: C,
		selectedItems: w,
		defaultSelectedKey: J,
		setSelectedKey: y,
		disabledKeys: S,
		isFocused: l,
		setFocused: K,
		selectedItem: w[0] ?? null,
		collection: q,
		inputValue: T,
		defaultInputValue: Mt(e.defaultInputValue, J, b) ?? O,
		setInputValue: E,
		commit: oe,
		revert: ie
	};
}
function At(e, t, n) {
	return new Ne(jt(e, e, t, n));
}
function jt(e, t, n, r) {
	let i = [];
	for (let a of t) if (a.type === `section` && a.hasChildNodes) {
		let t = jt(e, ke(a, e), n, r);
		[...t].some((e) => e.type === `item`) && i.push({
			...a,
			childNodes: t
		});
	} else (a.type === `item` && r(a.textValue, n) || a.type !== `item`) && i.push({ ...a });
	return i;
}
function Mt(e, t, n) {
	return e == null && t != null ? n.getItem(t)?.textValue ?? `` : e;
}
function Nt(e) {
	if (e !== void 0) return e === null ? [] : Array.isArray(e) ? e : [e];
}
var Pt = (0, Z.createContext)(null), Ft = (0, Z.createContext)(null), It = C(function(e, t) {
	[e, t] = O(e, t, Pt);
	let { children: n, isDisabled: r = !1, isInvalid: i = !1, isRequired: a = !1, isReadOnly: o = !1 } = e, s = (0, Z.useMemo)(() => Z.createElement(P.Provider, { value: { items: e.items ?? e.defaultItems } }, typeof n == `function` ? n({
		isOpen: !1,
		isDisabled: r,
		isInvalid: i,
		isRequired: a,
		defaultChildren: null,
		isReadOnly: o
	}) : n), [
		n,
		r,
		i,
		a,
		o,
		e.items,
		e.defaultItems
	]);
	return Z.createElement(Me, { content: s }, (n) => Z.createElement(Rt, {
		props: e,
		collection: n,
		comboBoxRef: t
	}));
}), Lt = [
	f,
	s,
	me,
	le,
	pe,
	Se
];
function Rt({ props: e, collection: t, comboBoxRef: n }) {
	let { name: r, formValue: i = `key`, allowsCustomValue: a } = e;
	a && (i = `text`);
	let { validationBehavior: o } = w(de) || {}, c = e.validationBehavior ?? o ?? `native`, { contains: l } = Re({ sensitivity: `base` }), u = kt({
		...e,
		defaultFilter: e.defaultFilter || l,
		items: e.items,
		children: void 0,
		collection: t,
		validationBehavior: c
	}), d = (0, Z.useRef)(null), p = (0, Z.useRef)(null), m = (0, Z.useRef)(null), h = (0, Z.useRef)(null), y = (0, Z.useRef)(null), [b, x] = S(!e[`aria-label`] && !e[`aria-labelledby`]), [C, D] = (0, Z.useState)(`label`), { buttonProps: O, inputProps: k, listBoxProps: A, labelProps: ee, descriptionProps: te, errorMessageProps: j, valueProps: ne, ...N } = Dt({
		...E(e),
		label: x,
		inputRef: p,
		buttonRef: d,
		listBoxRef: h,
		popoverRef: y,
		name: i === `text` ? r : void 0,
		validationBehavior: c,
		labelElementType: C
	}, u), [F, I] = (0, Z.useState)(null), L = (0, Z.useCallback)(() => {
		if (p.current && !m.current) {
			let e = d.current?.getBoundingClientRect(), t = p.current.getBoundingClientRect(), n = e ? Math.min(e.left, t.left) : t.left, r = e ? Math.max(e.right, t.right) : t.right;
			I(r - n + `px`);
		}
	}, [
		d,
		p,
		I
	]);
	Fe({
		ref: p,
		onResize: L
	});
	let R = (0, Z.useMemo)(() => ({ get current() {
		return m.current || p.current;
	} }), [m, p]), z = (0, Z.useMemo)(() => ({
		isOpen: u.isOpen,
		isDisabled: e.isDisabled || !1,
		isInvalid: N.isInvalid || !1,
		isRequired: e.isRequired || !1,
		isReadOnly: e.isReadOnly || !1
	}), [
		u.isOpen,
		e.isDisabled,
		N.isInvalid,
		e.isRequired,
		e.isReadOnly
	]), B = g({
		...e,
		values: z,
		defaultClassName: `react-aria-ComboBox`
	}), V = _(e, { global: !0 });
	delete V.id;
	let H = [];
	if (r && i === `key`) {
		let t = Array.isArray(u.value) ? u.value : [u.value];
		t.length === 0 && (t = [null]), H = t.map((t, n) => Z.createElement(`input`, {
			key: n,
			type: `hidden`,
			name: r,
			form: e.form,
			value: t ?? ``
		}));
	}
	return Z.createElement(T, { values: [
		[Ft, u],
		[f, {
			...ee,
			elementType: C,
			ref: b
		}],
		[s, {
			...O,
			ref: d,
			isPressed: u.isOpen
		}],
		[me, {
			...k,
			ref: p
		}],
		[le, {
			...k,
			ref: (0, Z.useCallback)((e) => {
				p.current = e, e && D(e.tagName.toLowerCase() === `input` ? `label` : `span`);
			}, []),
			value: u.inputValue,
			onChange: (e) => u.setInputValue(e)
		}],
		[ve, u],
		[_e, {
			ref: y,
			triggerRef: R,
			scrollRef: h,
			placement: `bottom start`,
			isNonModal: !0,
			trigger: `ComboBox`,
			style: { "--trigger-width": F },
			clearContexts: Lt
		}],
		[P, {
			...A,
			ref: h
		}],
		[M, u],
		[Se, { slots: {
			description: te,
			errorMessage: j
		} }],
		[pe, {
			ref: m,
			isInvalid: N.isInvalid,
			isDisabled: e.isDisabled || !1
		}],
		[J, N],
		[zt, ne]
	] }, Z.createElement(v.div, {
		...V,
		...B,
		ref: n,
		slot: e.slot || void 0,
		"data-focused": u.isFocused || void 0,
		"data-open": u.isOpen || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-invalid": N.isInvalid || void 0,
		"data-required": e.isRequired || void 0
	}, B.children, H));
}
var zt = (0, Z.createContext)(null), Q = r(), Bt = () => !0;
function Vt({ label: e, placeholder: t, value: n, onChange: r, onSubmit: a, children: s, shortcutKey: c, shortcutHint: l, isLoading: u = !1, loadingLabel: d, resultsLabel: f, emptyLabel: p, errorMessage: m, actions: h, container: g, className: _ }) {
	let v = (0, Z.useRef)(null), y = (0, Z.useCallback)(() => {
		v.current?.focus(), v.current?.select();
	}, []), b = (0, Z.useCallback)((e) => c ? H(c)(e) : !1, [c]);
	R(b, y, { enabled: c !== void 0 });
	let S = n.trim(), C = (0, Z.useCallback)((e) => {
		e.key === `Enter` && a && S && (e.currentTarget.getAttribute(`aria-activedescendant`) || a(S));
	}, [a, S]), w = (0, Z.useCallback)((e) => e.preventDefault(), []), T = (0, Z.useCallback)(() => m ? (0, Q.jsxs)(`p`, {
		className: `m-0 flex items-start gap-2 px-3 py-3 text-body text-fg`,
		children: [(0, Q.jsx)(x, {
			name: `status.error`,
			"aria-hidden": `true`,
			className: `mt-0.5 size-4 shrink-0 text-danger`
		}), (0, Q.jsx)(`span`, { children: m })]
	}) : u ? (0, Q.jsx)(`p`, {
		className: `m-0 px-3 py-3 text-body text-muted`,
		children: d
	}) : (0, Q.jsx)(`p`, {
		className: `m-0 px-3 py-3 text-body text-muted`,
		children: p
	}), [
		p,
		m,
		u,
		d
	]), E = m ?? (u ? d : f) ?? ``;
	return (0, Q.jsxs)(`search`, {
		className: i(`relative block w-full max-w-md min-w-0`, _),
		children: [(0, Q.jsx)(`form`, {
			onSubmit: w,
			children: (0, Q.jsxs)(It, {
				inputValue: n,
				onInputChange: r,
				selectedKey: null,
				allowsCustomValue: !0,
				allowsEmptyCollection: S.length > 0,
				menuTrigger: `input`,
				defaultFilter: Bt,
				className: `group`,
				children: [
					(0, Q.jsx)(o, {
						className: `sr-only`,
						children: e
					}),
					(0, Q.jsxs)(`div`, {
						className: `flex h-control-md items-center gap-2 rounded-md border border-border-strong bg-input px-2 transition-colors focus-within:border-accent group-data-hovered:border-accent`,
						children: [
							(0, Q.jsx)(x, {
								name: `action.search`,
								"aria-hidden": `true`,
								className: `size-4 shrink-0 text-muted`
							}),
							(0, Q.jsx)(he, {
								ref: v,
								onKeyDown: C,
								...t === void 0 ? {} : { placeholder: t },
								...c ? { "aria-keyshortcuts": c } : {},
								className: `h-full min-w-0 flex-1 bg-transparent text-body text-fg outline-none placeholder:text-muted`
							}),
							u ? (0, Q.jsx)(x, {
								name: `status.loading`,
								"aria-hidden": `true`,
								className: `size-4 shrink-0 animate-spin text-muted motion-reduce:animate-none`
							}) : null,
							l && !n ? (0, Q.jsx)(`kbd`, {
								"aria-hidden": `true`,
								className: i(G, `group-focus-within:hidden`),
								children: l
							}) : null,
							h ? (0, Q.jsx)(`div`, {
								className: `flex shrink-0 items-center gap-0.5`,
								children: h
							}) : null
						]
					}),
					(0, Q.jsx)(xe, {
						...g ? { UNSTABLE_portalContainer: g } : {},
						offset: 6,
						className: `w-(--trigger-width) max-w-[calc(100vw-2rem)] min-w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-lg border border-border bg-surface text-fg shadow-lg data-entering:animate-fade`,
						children: (0, Q.jsx)(I, {
							renderEmptyState: T,
							className: `max-h-[min(28rem,60vh)] overflow-y-auto overscroll-contain p-1 outline-none`,
							children: m ? null : s
						})
					})
				]
			})
		}), (0, Q.jsx)(`output`, {
			className: `sr-only`,
			children: E
		})]
	});
}
function $({ textValue: e, icon: t, title: n, description: r, meta: a, shortcut: o, layout: s = `stacked`, className: c, ...l }) {
	return (0, Q.jsxs)(ne, {
		...l,
		textValue: e,
		className: i(q, c),
		children: [
			t ? (0, Q.jsx)(`span`, {
				"aria-hidden": `true`,
				className: re,
				children: t
			}) : null,
			(0, Q.jsxs)(`span`, {
				className: i(`flex min-w-0 flex-1`, s === `stacked` ? `flex-col` : `items-baseline gap-2`),
				children: [(0, Q.jsx)(`span`, {
					className: `min-w-0 truncate`,
					children: n
				}), r ? (0, Q.jsxs)(Q.Fragment, { children: [` `, (0, Q.jsx)(`span`, {
					className: `min-w-0 truncate text-caption text-muted`,
					children: r
				})] }) : null]
			}),
			a ? (0, Q.jsxs)(Q.Fragment, { children: [` `, (0, Q.jsx)(`span`, {
				className: `shrink-0 text-caption text-muted`,
				children: a
			})] }) : null,
			o ? (0, Q.jsx)(`kbd`, {
				className: i(G, `max-sm:hidden`),
				children: o
			}) : null
		]
	});
}
var Ht = oe(`p`), Ut = (0, Q.jsx)(x, { name: `time.history` }), Wt = (0, Q.jsx)(x, { name: `file.generic` }), Gt = [];
function Kt({ path: e, positions: t, isRecent: n, recentLabel: r, position: i }) {
	let a = e.lastIndexOf(`/`), o = a >= 0 ? e.slice(0, a) : ``, s = (0, Z.useMemo)(() => (0, Q.jsx)(X, {
		text: e.slice(a + 1),
		positions: t,
		offset: a + 1,
		className: `font-medium`
	}), [
		e,
		t,
		a
	]), c = (0, Z.useMemo)(() => o || n && r ? (0, Q.jsxs)(Q.Fragment, { children: [o ? (0, Q.jsx)(X, {
		text: o,
		positions: t,
		className: `font-mono`
	}) : null, n && r ? (0, Q.jsx)(`span`, {
		className: `sr-only`,
		children: `, ${r}`
	}) : null] }) : void 0, [
		o,
		n,
		t,
		r
	]), l = (0, Z.useMemo)(() => i ? (0, Q.jsx)(`span`, {
		className: `hidden group-data-focused:inline`,
		children: i
	}) : void 0, [i]);
	return (0, Q.jsx)($, {
		id: e,
		textValue: e,
		layout: `inline`,
		icon: n ? Ut : Wt,
		title: s,
		description: c,
		meta: l
	});
}
function qt({ onOpenChange: e, paths: t, recent: n = Gt, onOpen: r, label: i, searchLabel: a, listLabel: o, placeholder: s, closeLabel: c, emptyLabel: l, isLoading: u = !1, loadingLabel: d, recentLabel: f, lineLabel: p, resultsLabel: m, limit: h = 60 }) {
	let [g, _] = (0, Z.useState)(``), v = (0, Z.useRef)(null);
	(0, Z.useEffect)(() => v.current?.focus(), []);
	let { query: y, line: b, column: S } = W(g), C = (0, Z.useMemo)(() => ie(t, y, n, h), [
		t,
		y,
		n,
		h
	]), w = (0, Z.useMemo)(() => new Set(n), [n]), T = (0, Z.useCallback)(() => e(!1), [e]), E = (0, Z.useCallback)((t) => {
		e(!1), r(String(t), {
			...b === void 0 ? {} : { line: b },
			...S === void 0 ? {} : { column: S }
		});
	}, [
		S,
		b,
		r,
		e
	]), D = (0, Z.useCallback)(() => (0, Q.jsx)(`p`, {
		className: `m-0 px-3 py-6 text-center text-body text-muted`,
		children: u ? d : l
	}), [
		l,
		u,
		d
	]), O = b !== void 0 && p ? p(b, S) : void 0;
	return (0, Q.jsxs)(be, {
		"aria-label": i,
		className: `flex min-h-0 flex-1 flex-col outline-none`,
		children: [(0, Q.jsxs)(Y, {
			inputValue: g,
			onInputChange: _,
			children: [(0, Q.jsxs)(Ve, {
				"aria-label": a,
				className: `flex shrink-0 items-center gap-2 border-b border-border px-3`,
				children: [
					(0, Q.jsx)(x, {
						name: `action.search`,
						"aria-hidden": `true`,
						className: `size-4 shrink-0 text-muted`
					}),
					(0, Q.jsx)(he, {
						ref: v,
						...s === void 0 ? {} : { placeholder: s },
						spellCheck: !1,
						autoComplete: `off`,
						className: `h-12 min-w-0 flex-1 bg-transparent font-mono text-body text-fg outline-none placeholder:font-sans placeholder:text-muted [&::-webkit-search-cancel-button]:hidden`
					}),
					(0, Q.jsx)(ee, {
						"aria-label": c,
						onPress: T,
						className: `inline-grid size-8 shrink-0 cursor-pointer place-items-center rounded-md text-muted data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-sunken`,
						children: (0, Q.jsx)(x, {
							name: `action.close`,
							"aria-hidden": `true`,
							className: `size-4`
						})
					})
				]
			}), (0, Q.jsx)(I, {
				"aria-label": o,
				onAction: E,
				renderEmptyState: D,
				className: `min-h-0 flex-1 overflow-y-auto overscroll-contain p-1.5 outline-none`,
				children: C.map((e) => (0, Q.jsx)(Kt, {
					path: e.path,
					positions: e.positions,
					isRecent: !y && w.has(e.path),
					recentLabel: f,
					position: O
				}, e.path))
			})]
		}), (0, Q.jsx)(`output`, {
			className: `sr-only`,
			children: m && y ? m(C.length) : ``
		})]
	});
}
function Jt({ isOpen: e, onOpenChange: t, shortcut: n = !1, container: r, className: a, ...o }) {
	let s = (0, Z.useCallback)(() => t(!e), [e, t]);
	return R(Ht, s, {
		enabled: n,
		inFields: !0
	}), (0, Q.jsx)(ze, {
		isOpen: e,
		onOpenChange: t,
		isDismissable: !0,
		...r ? { UNSTABLE_portalContainer: r } : {},
		className: z,
		children: (0, Q.jsx)(Be, {
			className: i(B, a),
			children: (0, Q.jsx)(qt, {
				...o,
				onOpenChange: t
			})
		})
	});
}
function Yt({ label: e, children: t, shortcut: n, container: r, className: a, ...o }) {
	let s = n?.replaceAll(` `, `+`), c = (0, Z.useCallback)(({ children: e, ...t }) => (0, Q.jsx)(`button`, {
		...t,
		...s ? { "aria-keyshortcuts": s } : {},
		children: e
	}), [s]);
	return (0, Q.jsxs)(Ue, {
		delay: 600,
		closeDelay: 100,
		children: [(0, Q.jsx)(He, {
			...o,
			"aria-label": e,
			render: c,
			className: i(`inline-grid size-6 shrink-0 cursor-pointer place-items-center rounded-sm border border-transparent text-muted transition-colors [&_svg]:size-4`, `data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-sunken data-disabled:cursor-not-allowed data-disabled:opacity-50`, `data-selected:border-accent data-selected:bg-accent-soft data-selected:text-accent-text forced-colors:data-selected:border-[Highlight] forced-colors:data-selected:bg-[Highlight] forced-colors:data-selected:text-[HighlightText] forced-colors:data-selected:forced-color-adjust-none`, a),
			children: t
		}), (0, Q.jsxs)(We, {
			...r ? { UNSTABLE_portalContainer: r } : {},
			offset: 6,
			className: `flex max-w-64 items-center gap-2 rounded-md border border-border bg-surface px-2 py-1 text-caption text-fg shadow-md data-entering:animate-fade`,
			children: [e, n ? (0, Q.jsx)(`kbd`, {
				className: G,
				children: n
			}) : null]
		})]
	});
}
function Xt({ id: e, title: t, count: n, countLabel: r, children: a, className: o }) {
	return (0, Q.jsxs)(j, {
		...e === void 0 ? {} : { id: e },
		className: i(`not-first:mt-1 not-first:border-t not-first:border-border`, o),
		children: [(0, Q.jsxs)(Ee, {
			className: U,
			children: [(0, Q.jsx)(`span`, {
				className: `min-w-0 truncate`,
				children: t
			}), n === void 0 ? null : (0, Q.jsx)(`span`, {
				className: `ml-auto font-normal tracking-normal normal-case tabular-nums`,
				children: r === void 0 ? n : (0, Q.jsxs)(Q.Fragment, { children: [(0, Q.jsx)(`span`, {
					"aria-hidden": `true`,
					children: n
				}), (0, Q.jsx)(`span`, {
					className: `sr-only`,
					children: r
				})] })
			})]
		}), a]
	});
}
var Zt = e({ default: () => dn }), Qt = [
	{
		id: `SK-12`,
		title: `Contact form loses the draft after a long pause`,
		project: `Website`
	},
	{
		id: `SK-31`,
		title: `Dark theme: focus ring too faint on cards`,
		project: `Design`
	},
	{
		id: `SK-44`,
		title: `Export the board as CSV`,
		project: `Tracker`
	},
	{
		id: `SK-58`,
		title: `Search results skip archived projects`,
		project: `Tracker`
	}
], $t = [
	{
		id: `changelog`,
		title: `Changelog`,
		path: `Website / Pages`
	},
	{
		id: `privacy`,
		title: `Privacy policy`,
		path: `Website / Legal`
	},
	{
		id: `contact`,
		title: `Contact`,
		path: `Website / Pages`
	}
], en = [
	`src/App.tsx`,
	`src/main.tsx`,
	`src/search/GlobalSearch.tsx`,
	`src/search/CommandPalette.tsx`,
	`src/navigation/Tabs.tsx`,
	`src/navigation/Breadcrumbs.tsx`,
	`src/lib/cx.ts`,
	`tokens/color.tokens.json`,
	`README.md`,
	`package.json`
];
function tn() {
	let [e, t] = (0, Z.useState)(``), [n, r] = (0, Z.useState)(``), [i, a] = (0, Z.useState)(null), o = e.trim().toLowerCase(), s = o ? Qt.filter((e) => `${e.id} ${e.title}`.toLowerCase().includes(o)) : [], c = o ? $t.filter((e) => e.title.toLowerCase().includes(o)) : [], l = s.length + c.length;
	return (0, Q.jsxs)(`div`, {
		ref: a,
		className: `flex flex-col gap-3`,
		children: [(0, Q.jsxs)(Vt, {
			label: `Search issues and pages`,
			placeholder: `Search…`,
			value: e,
			onChange: t,
			onSubmit: r,
			shortcutKey: `/`,
			shortcutHint: `/`,
			emptyLabel: `No results for “${e.trim()}”. Press Enter to search everywhere.`,
			resultsLabel: o ? `${l} results` : ``,
			...i ? { container: i } : {},
			children: [s.length ? (0, Q.jsx)(Xt, {
				id: `issues`,
				title: `Issues`,
				count: s.length,
				countLabel: `${s.length} issues`,
				children: s.map((t) => (0, Q.jsx)($, {
					id: t.id,
					textValue: t.title,
					icon: (0, Q.jsx)(x, { name: `status.checked` }),
					title: (0, Q.jsx)(X, {
						text: t.title,
						query: e
					}),
					description: t.project,
					meta: t.id,
					onAction: () => r(t.id)
				}, t.id))
			}) : null, c.length ? (0, Q.jsx)(Xt, {
				id: `pages`,
				title: `Pages`,
				count: c.length,
				countLabel: `${c.length} pages`,
				children: c.map((t) => (0, Q.jsx)($, {
					id: t.id,
					textValue: t.title,
					icon: (0, Q.jsx)(x, { name: `file.document` }),
					title: (0, Q.jsx)(X, {
						text: t.title,
						query: e
					}),
					description: t.path,
					onAction: () => r(t.title)
				}, t.id))
			}) : null]
		}), (0, Q.jsx)(`p`, {
			className: `m-0 text-caption text-muted`,
			children: n ? `Opened: ${n}` : `Try “board”, “sk-3” or “pri”.`
		})]
	});
}
function nn() {
	let [e, t] = (0, Z.useState)(null), [n, r] = (0, Z.useState)(``), [i, a] = (0, Z.useState)(!1), [o, s] = (0, Z.useState)(!1), [c, l] = (0, Z.useState)(!0), u = e ? { container: e } : {};
	return (0, Q.jsxs)(`div`, {
		ref: t,
		className: `flex flex-col gap-2`,
		children: [(0, Q.jsx)(Vt, {
			label: `Search in files`,
			placeholder: `Search in files…`,
			value: n,
			onChange: r,
			emptyLabel: `No matches in this folder.`,
			...u,
			actions: (0, Q.jsxs)(Q.Fragment, { children: [
				(0, Q.jsx)(Yt, {
					label: `Match case`,
					shortcut: `Alt C`,
					isSelected: i,
					onChange: a,
					...u,
					children: (0, Q.jsx)(x, {
						name: `search.match-case`,
						"aria-hidden": `true`
					})
				}),
				(0, Q.jsx)(Yt, {
					label: `Match whole word`,
					shortcut: `Alt W`,
					isSelected: o,
					onChange: s,
					...u,
					children: (0, Q.jsx)(x, {
						name: `search.whole-word`,
						"aria-hidden": `true`
					})
				}),
				(0, Q.jsx)(Yt, {
					label: `Use regular expression`,
					shortcut: `Alt R`,
					isSelected: c,
					onChange: l,
					...u,
					children: (0, Q.jsx)(x, {
						name: `search.regex`,
						"aria-hidden": `true`
					})
				}),
				(0, Q.jsx)(Yt, {
					label: `Search hidden files`,
					isDisabled: !0,
					children: (0, Q.jsx)(x, {
						name: `file.document`,
						"aria-hidden": `true`
					})
				})
			] })
		}), (0, Q.jsx)(`p`, {
			className: `m-0 text-caption text-muted`,
			children: `Match case ${i ? `on` : `off`}, whole word ${o ? `on` : `off`}, regular expression ${c ? `on` : `off`}.`
		})]
	});
}
var rn = {
	en: {
		open: `Open the command palette`,
		hint: `Or press Ctrl K or ⌘ K, or ? for the shortcuts.`,
		ran: `Ran`,
		recent: `Recent`,
		views: `Views`,
		actions: `Actions`,
		board: `Board`,
		list: `Issue list`,
		settings: `Settings`,
		settingsHint: `Account, team and keys`,
		project: `New project…`,
		theme: `Switch to the dark theme`,
		keywords: [`night`, `appearance`],
		imports: `Import from a file`,
		importsHint: `Available on paid plans`,
		label: `Command palette`,
		search: `Search commands`,
		listLabel: `Commands`,
		placeholder: `Search views and actions`,
		close: `Close`,
		empty: (e) => `Nothing matches “${e}”.`,
		results: (e) => e === 1 ? `1 command` : `${e} commands`,
		footer: `↑ ↓ to move · Enter to run · Esc to close · ? for shortcuts`,
		overlay: `Keyboard shortcuts`,
		overlayClose: `Close the shortcuts`,
		general: `General`,
		open_palette: `Open the command palette`,
		show: `Show the shortcuts`,
		go: `Go to`,
		toBoard: `Go to the board`,
		toList: `Go to the issue list`
	},
	pl: {
		open: `Otwórz paletę poleceń`,
		hint: `Albo naciśnij Ctrl K lub ⌘ K, albo ? po skróty.`,
		ran: `Uruchomiono`,
		recent: `Ostatnio użyte`,
		views: `Widoki`,
		actions: `Akcje`,
		board: `Tablica`,
		list: `Lista zgłoszeń`,
		settings: `Ustawienia`,
		settingsHint: `Konto, zespół i klucze`,
		project: `Nowy projekt…`,
		theme: `Przełącz na ciemny motyw`,
		keywords: [`noc`, `wygląd`],
		imports: `Importuj z pliku`,
		importsHint: `Dostępne w płatnych planach`,
		label: `Paleta poleceń`,
		search: `Szukaj poleceń`,
		listLabel: `Polecenia`,
		placeholder: `Szukaj widoków i akcji`,
		close: `Zamknij`,
		empty: (e) => `Nic nie pasuje do „${e}”.`,
		results: (e) => `Poleceń: ${e}`,
		footer: `↑ ↓ przesuwa · Enter uruchamia · Esc zamyka · ? pokazuje skróty`,
		overlay: `Skróty klawiszowe`,
		overlayClose: `Zamknij skróty`,
		general: `Ogólne`,
		open_palette: `Otwórz paletę poleceń`,
		show: `Pokaż skróty`,
		go: `Przejdź do`,
		toBoard: `Przejdź do tablicy`,
		toList: `Przejdź do listy zgłoszeń`
	}
};
function an(e) {
	return [{
		id: `general`,
		label: e.general,
		shortcuts: [{
			id: `palette`,
			label: e.open_palette,
			keys: [`Ctrl`, `K`]
		}, {
			id: `help`,
			label: e.show,
			keys: [`?`]
		}]
	}, {
		id: `go`,
		label: e.go,
		shortcuts: [{
			id: `board`,
			label: e.toBoard,
			keys: [`⌘`, `1`]
		}, {
			id: `list`,
			label: e.toList,
			keys: [`⌘`, `2`]
		}]
	}];
}
function on() {
	let e = rn[(0, Z.useContext)(m) === `pl` ? `pl` : `en`], [t, n] = (0, Z.useState)(!1), [r, i] = (0, Z.useState)(``), [a, o] = (0, Z.useState)(null), s = [
		{
			id: `board`,
			group: e.views,
			label: e.board,
			icon: (0, Q.jsx)(x, { name: `nav.board` }),
			shortcut: `⌘ 1`,
			onAction: () => i(e.board)
		},
		{
			id: `list`,
			group: e.views,
			label: e.list,
			icon: (0, Q.jsx)(x, { name: `layout.columns-3` }),
			shortcut: `⌘ 2`,
			onAction: () => i(e.list)
		},
		{
			id: `settings`,
			group: e.views,
			label: e.settings,
			icon: (0, Q.jsx)(x, { name: `nav.settings` }),
			hint: e.settingsHint,
			onAction: () => i(e.settings)
		},
		{
			id: `project`,
			group: e.actions,
			label: e.project,
			icon: (0, Q.jsx)(x, { name: `folder.add` }),
			onAction: () => i(e.project)
		},
		{
			id: `theme`,
			group: e.actions,
			label: e.theme,
			icon: (0, Q.jsx)(x, { name: `theme.dark` }),
			keywords: e.keywords,
			onAction: () => i(e.theme)
		},
		{
			id: `import`,
			group: e.actions,
			label: e.imports,
			hint: e.importsHint,
			isDisabled: !0,
			onAction: () => i(e.imports)
		}
	];
	return (0, Q.jsxs)(`div`, {
		ref: o,
		className: `flex flex-wrap items-center gap-3`,
		children: [
			(0, Q.jsx)(L, {
				variant: `outline`,
				onPress: () => n(!0),
				children: e.open
			}),
			(0, Q.jsx)(`span`, {
				className: `text-caption text-muted`,
				children: r ? `${e.ran}: ${r}` : e.hint
			}),
			(0, Q.jsx)(K, {
				isOpen: t,
				onOpenChange: n,
				commands: s,
				shortcut: !0,
				label: e.label,
				searchLabel: e.search,
				listLabel: e.listLabel,
				placeholder: e.placeholder,
				closeLabel: e.close,
				emptyLabel: e.empty,
				resultsLabel: e.results,
				footer: e.footer,
				recentLabel: e.recent,
				defaultRecent: [`settings`],
				recentKey: `skribly-ui-gallery-recent-commands`,
				shortcutOverlay: {
					label: e.overlay,
					closeLabel: e.overlayClose,
					groups: an(e)
				},
				...a ? { container: a } : {}
			})
		]
	});
}
function sn() {
	let e = rn[(0, Z.useContext)(m) === `pl` ? `pl` : `en`], [t, n] = (0, Z.useState)(!1), [r, i] = (0, Z.useState)(null);
	return (0, Q.jsxs)(`div`, {
		ref: i,
		className: `flex flex-wrap items-center gap-3`,
		children: [(0, Q.jsx)(L, {
			variant: `outline`,
			onPress: () => n(!0),
			children: e.overlay
		}), (0, Q.jsx)(ae, {
			isOpen: t,
			onOpenChange: n,
			groups: an(e),
			label: e.overlay,
			closeLabel: e.overlayClose,
			shortcut: !0,
			...r ? { container: r } : {}
		})]
	});
}
function cn() {
	let [e, t] = (0, Z.useState)(!1), [n, r] = (0, Z.useState)(``), [i, a] = (0, Z.useState)(null);
	return (0, Q.jsxs)(`div`, {
		ref: a,
		className: `flex flex-wrap items-center gap-3`,
		children: [
			(0, Q.jsx)(L, {
				variant: `outline`,
				onPress: () => t(!0),
				children: `Go to file`
			}),
			(0, Q.jsx)(`span`, {
				className: `text-caption text-muted`,
				children: n ? `Opened: ${n}` : `Type “gls:40” to open a file at a line.`
			}),
			(0, Q.jsx)(Jt, {
				isOpen: e,
				onOpenChange: t,
				paths: en,
				recent: [`README.md`, `src/App.tsx`],
				onOpen: (e, t) => r(t.line ? `${e} at line ${t.line}` : e),
				label: `Go to file`,
				searchLabel: `File name`,
				listLabel: `Files`,
				placeholder: `File name, then :line`,
				closeLabel: `Close`,
				emptyLabel: `No file matches.`,
				recentLabel: `recently opened`,
				lineLabel: (e, t) => t ? `line ${e}, column ${t}` : `line ${e}`,
				resultsLabel: (e) => e === 1 ? `1 file` : `${e} files`,
				...i ? { container: i } : {}
			})
		]
	});
}
function ln() {
	return (0, Q.jsxs)(I, {
		"aria-label": `Search results for “form”`,
		className: `flex max-w-xl flex-col rounded-lg border border-border bg-surface p-1`,
		children: [(0, Q.jsxs)(Xt, {
			id: `issues`,
			title: `Issues`,
			count: 14,
			countLabel: `14 issues`,
			children: [(0, Q.jsx)($, {
				id: `SK-12`,
				href: `#SK-12`,
				textValue: `Contact form loses the draft after a long pause`,
				icon: (0, Q.jsx)(x, { name: `status.checked` }),
				title: (0, Q.jsx)(X, {
					text: `Contact form loses the draft after a long pause`,
					query: `form`
				}),
				description: `Website · updated 2 hours ago`,
				meta: `SK-12`
			}), (0, Q.jsx)($, {
				id: `SK-90`,
				href: `#SK-90`,
				textValue: `Form labels are not read in Safari`,
				icon: (0, Q.jsx)(x, { name: `status.checked` }),
				title: (0, Q.jsx)(X, {
					text: `Form labels are not read in Safari`,
					query: `form`
				}),
				description: `Accessibility · updated yesterday`,
				meta: `SK-90`
			})]
		}), (0, Q.jsxs)(Xt, {
			id: `pages`,
			title: `Pages`,
			count: 1,
			countLabel: `1 page`,
			children: [(0, Q.jsx)($, {
				id: `contact`,
				href: `#contact`,
				textValue: `Contact`,
				icon: (0, Q.jsx)(x, { name: `file.document` }),
				title: `Contact`,
				description: (0, Q.jsx)(X, {
					text: `The form at the bottom of the contact page`,
					query: `form`
				}),
				layout: `stacked`
			}), (0, Q.jsx)($, {
				id: `archived`,
				textValue: `Old form (archived)`,
				icon: (0, Q.jsx)(x, { name: `file.document` }),
				title: `Old form (archived)`,
				description: `Archived pages cannot be opened`,
				isDisabled: !0
			})]
		})]
	});
}
function un() {
	let e = V(`src/search/GlobalSearch.tsx`, `glsr`, !0);
	return (0, Q.jsxs)(`div`, {
		className: `flex flex-col gap-2 text-body`,
		children: [
			(0, Q.jsx)(X, {
				text: `Café opening hours and the CAFE menu`,
				query: `cafe`
			}),
			(0, Q.jsx)(X, {
				text: `src/search/GlobalSearch.tsx`,
				positions: e?.positions ?? [],
				className: `font-mono text-caption`
			}),
			(0, Q.jsx)(X, {
				text: `A very long result title that wraps onto a second line on a narrow screen and still marks the word screen`,
				query: `screen`
			})
		]
	});
}
var dn = {
	title: `Search`,
	description: `Finding things: the top-bar search with grouped results and the / key, the command palette, quick open for files, result rows and groups, search options and match highlighting. Built to WCAG 2.2 AA as a target, from 320px wide up.`,
	pl: {
		title: `Wyszukiwanie`,
		description: `Znajdowanie rzeczy: wyszukiwarka w górnym pasku z pogrupowanymi wynikami i klawiszem /, paleta poleceń, szybkie otwieranie plików, wiersze i grupy wyników, opcje wyszukiwania oraz wyróżnianie trafień. Budowane z celem WCAG 2.2 AA, od szerokości 320 px.`
	},
	demos: [
		{
			name: `GlobalSearch`,
			components: [
				`GlobalSearch`,
				`SearchResultGroup`,
				`SearchResultItem`,
				`Highlight`
			],
			description: `The search box of a top bar. The app filters on its side, often on a server, and passes grouped results; Enter with nothing highlighted submits the query for a full results page.`,
			usage: `<GlobalSearch label="Search" value={q} onChange={setQ} onSubmit={openResults}
  shortcutKey="/" shortcutHint="/" emptyLabel="No results" resultsLabel={\`\${count} results\`}>
  <SearchResultGroup id="issues" title="Issues">
    <SearchResultItem id="SK-12" textValue="Draft lost" title="Draft lost" href="/issues/SK-12" />
  </SearchResultGroup>
</GlobalSearch>`,
			accessibility: `A combobox inside a search landmark with a hidden label. / focuses it from anywhere unless another field has focus, and aria-keyshortcuts tells screen readers. Up and Down move through results while focus stays in the field; Enter opens the highlighted result; Escape closes the list and then clears it. Groups are labelled by their titles. Result counts, loading and errors are read from a polite live region, and an error shows an icon with its text. The list keeps the field width and never runs off a narrow screen.`,
			pl: {
				description: `Pole wyszukiwania w górnym pasku. Aplikacja filtruje po swojej stronie, często na serwerze, i przekazuje pogrupowane wyniki; Enter bez podświetlonej pozycji wysyła zapytanie na pełną stronę wyników.`,
				accessibility: `Combobox wewnątrz landmarku wyszukiwania z ukrytą etykietą. Klawisz / ustawia na nim fokus z dowolnego miejsca, chyba że fokus ma inne pole, a aria-keyshortcuts informuje czytniki ekranu. Strzałka w górę i w dół przechodzi po wynikach, a fokus zostaje w polu; Enter otwiera podświetlony wynik; Escape zamyka listę, a potem ją czyści. Grupy mają etykiety z tytułów. Liczba wyników, ładowanie i błędy są odczytywane z regionu na żywo typu polite, a błąd ma ikonę razem z tekstem. Lista ma szerokość pola i nigdy nie wychodzi poza wąski ekran.`
			},
			render: () => (0, Q.jsx)(tn, {})
		},
		{
			name: `SearchOptionToggle`,
			components: [`SearchOptionToggle`],
			description: `On or off options inside a search field: match case, whole word, regular expression. Pass them to GlobalSearch through actions.`,
			usage: `<SearchOptionToggle label="Match case" shortcut="Alt C" isSelected={matchCase} onChange={setMatchCase}>
  <Icon name="search.match-case" aria-hidden="true" />
</SearchOptionToggle>`,
			accessibility: `Each is a 24px toggle button named by label, with aria-pressed and aria-keyshortcuts. Its name also appears as a tooltip on hover and keyboard focus, and Escape hides the tooltip. An active option gains an accent border and fill, and Highlight colours under forced colours.`,
			pl: {
				description: `Opcje włączane i wyłączane wewnątrz pola wyszukiwania: uwzględnianie wielkości liter, całe słowo, wyrażenie regularne. Przekaż je do GlobalSearch przez actions.`,
				accessibility: `Każda jest przyciskiem przełączanym o rozmiarze celu 24 px, nazwanym przez label, z aria-pressed i aria-keyshortcuts. Jej nazwa pojawia się też jako dymek podpowiedzi po najechaniu i przy fokusie z klawiatury, a Escape ukrywa dymek. Aktywna opcja dostaje ramkę i wypełnienie w kolorze akcentu, a Highlight koloruje się w trybie wymuszonych kolorów.`
			},
			render: () => (0, Q.jsx)(nn, {})
		},
		{
			name: `CommandPalette`,
			components: [`CommandPalette`],
			description: `One search for every view and action of an app, opened with Cmd K or Ctrl K. Pick it for apps with many places to go; use GlobalSearch for content.`,
			usage: `<CommandPalette isOpen={open} onOpenChange={setOpen} shortcut commands={commands}
  label="Command palette" searchLabel="Search commands" listLabel="Commands" closeLabel="Close"
  emptyLabel={(q) => \`Nothing matches “\${q}”.\`}
  recentLabel="Recent" recentKey="my-app-recent" />`,
			accessibility: `A modal dialog: focus starts in the search field, stays inside while open and returns to the trigger on close. Typing filters by label, hint and keywords in a fuzzy way, with the matched letters marked. Up and Down move, Enter runs, Escape clears the field and then closes. Commands are menu items named by their label and then their hint, with the shortcut as key caps; disabled ones are announced as such. On narrow screens it becomes a full-screen sheet with a close button.`,
			pl: {
				description: `Jedno wyszukiwanie dla każdego widoku i każdej akcji aplikacji, otwierane skrótem Cmd K lub Ctrl K. Wybierz ją dla aplikacji z wieloma miejscami do odwiedzenia; do treści użyj GlobalSearch.`,
				accessibility: `Okno dialogowe modalne: fokus zaczyna się w polu wyszukiwania, zostaje wewnątrz, dopóki okno jest otwarte, i wraca na element otwierający po zamknięciu. Wpisywanie filtruje przybliżenie po etykiecie, podpowiedzi i słowach kluczowych, a dopasowane litery są zaznaczone. Strzałka w górę i w dół przesuwa, Enter uruchamia, Escape czyści pole, a potem zamyka okno. Polecenia są pozycjami menu nazwanymi najpierw etykietą, potem podpowiedzią, ze skrótem jako klawiszami; wyłączone są ogłaszane jako takie. Na wąskich ekranach okno staje się arkuszem na pełny ekran z przyciskiem zamknięcia.`
			},
			render: () => (0, Q.jsx)(on, {})
		},
		{
			name: `ShortcutOverlay`,
			components: [`ShortcutOverlay`],
			description: `A dialog that lists the keyboard shortcuts of an app in groups, opened with the ? key. CommandPalette can offer it through shortcutOverlay.`,
			usage: `<ShortcutOverlay isOpen={open} onOpenChange={setOpen} shortcut
  label="Keyboard shortcuts" closeLabel="Close" groups={[
    { id: 'general', label: 'General', shortcuts: [{ id: 'palette', label: 'Open the palette', keys: ['Ctrl', 'K'] }] }
  ]} />`,
			accessibility: `A modal dialog named by its heading: focus stays inside while open and returns to the trigger on close, and Escape closes it. The ? key opens it only when focus is not in a text field or an editable area. Each group is a labelled region with a list of terms, and every key is a kbd element, so a screen reader reads the action first and then its keys. On narrow screens it becomes a full-screen sheet.`,
			pl: {
				description: `Okno dialogowe z listą skrótów klawiszowych aplikacji w grupach, otwierane klawiszem ?. CommandPalette może je zaoferować przez shortcutOverlay.`,
				accessibility: `Okno dialogowe modalne nazwane nagłówkiem: fokus zostaje wewnątrz, dopóki okno jest otwarte, i wraca na element otwierający po zamknięciu, a Escape je zamyka. Klawisz ? otwiera je tylko wtedy, gdy fokus nie jest w polu tekstowym ani w edytowalnym obszarze. Każda grupa jest oznaczonym regionem z listą pojęć, a każdy klawisz jest elementem kbd, więc czytnik ekranu czyta najpierw akcję, a potem jej klawisze. Na wąskich ekranach okno staje się arkuszem na pełny ekran.`
			},
			render: () => (0, Q.jsx)(sn, {})
		},
		{
			name: `QuickOpen`,
			components: [`QuickOpen`],
			description: `Go to a file by a few letters of its name, ranked like a code editor. ":120" after the name opens the file at that line.`,
			usage: `<QuickOpen isOpen={open} onOpenChange={setOpen} shortcut paths={paths} recent={recent}
  onOpen={(path, { line }) => openFile(path, line)}
  label="Go to file" searchLabel="File name" listLabel="Files" closeLabel="Close" emptyLabel="No file matches." />`,
			accessibility: `A modal dialog with a search field and a list of files. Each file is named by its file name, then its folder, plus "recently opened" where it applies. Matched letters are marked by weight and underline as well as colour. Up and Down move, Enter opens, Escape closes. The number of matches is read from a polite live region.`,
			pl: {
				description: `Przejście do pliku po kilku literach jego nazwy, z rankingiem jak w edytorze kodu. „:120” po nazwie otwiera plik w tej linii.`,
				accessibility: `Okno dialogowe modalne z polem wyszukiwania i listą plików. Każdy plik jest nazwany swoją nazwą, potem folderem, a tam, gdzie to pasuje, także „ostatnio otwarty”. Dopasowane litery są zaznaczone grubością i podkreśleniem, a nie tylko kolorem. Strzałka w górę i w dół przesuwa, Enter otwiera, Escape zamyka. Liczba dopasowań jest odczytywana z regionu na żywo typu polite.`
			},
			render: () => (0, Q.jsx)(cn, {})
		},
		{
			name: `SearchResultGroup and SearchResultItem`,
			components: [`SearchResultGroup`, `SearchResultItem`],
			description: `The rows and sections of any results list, inside GlobalSearch or a ListBox of their own, such as a full results page. An item with href is a link.`,
			usage: `<ListBox aria-label="Results">
  <SearchResultGroup id="issues" title="Issues" count={14} countLabel="14 issues">
    <SearchResultItem id="SK-12" href="/issues/SK-12" textValue="Draft lost" title="Draft lost" description="Website" meta="SK-12" />
  </SearchResultGroup>
</ListBox>`,
			accessibility: `Each group is labelled by its title; each item is named by all of its visible text, title first, so speech input can say what it sees. Rows stay well above the 24px target size, also in compact density. Focused and hovered rows change background, and under forced colours the focused row gets a Highlight outline. Long titles truncate on one line while keeping their full name.`,
			pl: {
				description: `Wiersze i sekcje dowolnej listy wyników, wewnątrz GlobalSearch albo we własnym ListBox, na przykład na pełnej stronie wyników. Pozycja z href jest linkiem.`,
				accessibility: `Każda grupa ma etykietę z tytułu; każda pozycja jest nazwana całym swoim widocznym tekstem, tytułem na początku, aby sterowanie głosem mogło powiedzieć to, co widzi. Wiersze są wyraźnie wyższe niż rozmiar celu 24 px, także w zwartej gęstości. Wiersz z fokusem lub najechany zmienia tło, a w trybie wymuszonych kolorów wiersz z fokusem dostaje obwódkę Highlight. Długie tytuły są obcinane do jednej linii, ale zachowują pełną nazwę.`
			},
			render: () => (0, Q.jsx)(ln, {})
		},
		{
			name: `Highlight`,
			components: [`Highlight`],
			description: `Marks the part of a text that matched a search, by query or by the positions of a fuzzy match.`,
			usage: `<Highlight text={title} query={query} />
<Highlight text={path} positions={match.positions} />`,
			accessibility: `Matches are mark elements with a heavier weight and an underline, so they never rely on colour, and both stay under forced colours. Accents and case are ignored, so "cafe" marks "Café".`,
			pl: {
				description: `Zaznacza część tekstu, która pasuje do wyszukiwania, według zapytania albo pozycji przybliżonego dopasowania.`,
				accessibility: `Trafienia są elementami mark z większą grubością i podkreśleniem, więc nigdy nie polegają na kolorze, a oba zostają w trybie wymuszonych kolorów. Akcenty i wielkość liter są ignorowane, więc „cafe” zaznacza „Café”.`
			},
			render: () => (0, Q.jsx)(un, {})
		}
	]
};
export { Zt as t };
