import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { At as n, Bt as r, D as i, Dt as a, E as o, Et as s, H as c, Lt as l, Mt as u, P as d, Pt as f, R as p, Tt as m, Z as h, _t as g, a as _, g as v, h as y, ht as b, jt as x, n as S, pt as C, r as w, st as T, t as E, wt as D, xt as ee } from "./createLucideIcon.npgQlVHx.js";
import { i as O, o as k, s as A } from "./slugs.CpBgIMWb.js";
import { t as j } from "./file-text.BfTyG9Tv.js";
import { t as M } from "./folder-plus.xLSJFGKu.js";
import { t as te } from "./kanban.DcWybPi-.js";
import { t as N } from "./settings._pqzNwpp.js";
import { t as P } from "./square-check.nSlLUx_P.js";
import { n as F } from "./react-dom.B9zIfLd2.js";
import { a as I, i as ne, n as L, o as R, p as z, r as B, s as V, t as H } from "./ListBox.B-5aHJx2.js";
import { t as U } from "./Button.DRxd_7vr.js";
import { a as re, c as ie, d as W, f as G, i as ae, l as oe, n as K, o as q, p as J, r as se, s as ce, t as le, u as ue } from "./CommandPalette.DJ-Vm1bO.js";
import { t as de } from "./circle-exclamation-point.DRCkYbzg.js";
import { t as fe } from "./loader-circle.ja8phR5Y.js";
import { t as pe } from "./search.zK5MY05u.js";
import { r as me, t as he } from "./useFormReset.B5f8O4ea.js";
import { c as ge, n as _e, t as ve } from "./Autocomplete.BUqxPt-N.js";
import { c as ye, i as be, l as xe, o as Se } from "./useFormValidation.CKcLNQoz.js";
import { n as Ce } from "./Group.CbcnDyoG.js";
import { n as we, r as Te, t as Ee } from "./useTextField.D1QWrtYY.js";
import { d as De, i as Oe, l as ke, n as Ae, u as je } from "./Dialog.BHaijp-q.js";
import { n as Me } from "./Text.DxhsPAdy.js";
import { n as Ne } from "./ariaHideOutside.Ci13GWDQ.js";
import { a as Pe, n as Fe, s as Ie } from "./useLoadMoreSentinel.DKpPMiER.js";
import { n as Le } from "./useLocalizedStringFormatter.CY4FHGAo.js";
import { p as Re, s as ze } from "./animation.BhtQe7Yj.js";
import { n as Be } from "./CollectionBuilder.Bxdh8Jqj.js";
import { r as Ve, t as He } from "./useListState.BvceJMy7.js";
import { r as Ue, t as We } from "./useOverlayTriggerState.OsbwJUOw.js";
import { t as Ge } from "./useControlledState.DijOhE0s.js";
import { t as Ke } from "./useFilter.DyxkFkHz.js";
import { n as Y, t as qe } from "./jsx-runtime.yrTYNGQT.js";
import { t as X } from "./Highlight.sLf-RrLQ.js";
import { t as Je } from "./file.C2NO_GmA.js";
import { t as Ye } from "./x.CmkLFRDJ.js";
import { n as Xe, t as Ze } from "./Modal.DfTZZZKl.js";
import { t as Qe } from "./SearchField.C-Q55Mrc.js";
import { n as $e, t as et } from "./Tooltip.CNQ4823b.js";
var tt = {};
tt = {
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
var nt = {};
nt = {
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
var rt = {};
rt = {
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
var it = {};
it = {
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
var at = {};
at = {
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
var ot = {};
ot = {
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
var st = {};
st = {
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
var ct = {};
ct = {
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
var lt = {};
lt = {
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
var ut = {};
ut = {
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
var dt = {};
dt = {
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
var ft = {};
ft = {
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
var pt = {};
pt = {
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
var mt = {};
mt = {
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
var ht = {};
ht = {
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
var gt = {};
gt = {
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
var _t = {};
_t = {
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
var vt = {};
vt = {
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
var yt = {};
yt = {
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
var bt = {};
bt = {
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
var xt = {};
xt = {
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
var St = {};
St = {
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
var Ct = {};
Ct = {
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
var wt = {};
wt = {
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
var Tt = {};
Tt = {
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
var Et = {};
Et = {
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
var Dt = {};
Dt = {
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
var Ot = {};
Ot = {
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
var kt = {};
kt = {
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
var At = {};
At = {
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
var jt = {};
jt = {
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
var Mt = {};
Mt = {
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
var Nt = {};
Nt = {
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
var Pt = {};
Pt = {
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
var Ft = {};
Ft = {
	"ar-AE": tt,
	"bg-BG": nt,
	"cs-CZ": rt,
	"da-DK": it,
	"de-DE": at,
	"el-GR": ot,
	"en-US": st,
	"es-ES": ct,
	"et-EE": lt,
	"fi-FI": ut,
	"fr-FR": dt,
	"he-IL": ft,
	"hr-HR": pt,
	"hu-HU": mt,
	"it-IT": ht,
	"ja-JP": gt,
	"ko-KR": _t,
	"lt-LT": vt,
	"lv-LV": yt,
	"nb-NO": bt,
	"nl-NL": xt,
	"pl-PL": St,
	"pt-BR": Ct,
	"pt-PT": wt,
	"ro-RO": Tt,
	"ru-RU": Et,
	"sk-SK": Dt,
	"sl-SI": Ot,
	"sr-SP": kt,
	"sv-SE": At,
	"tr-TR": jt,
	"uk-UA": Mt,
	"zh-CN": Nt,
	"zh-TW": Pt
};
var Z = t(F(), 1);
function It(e) {
	return e && e.__esModule ? e.default : e;
}
function Lt(e, t) {
	let { buttonRef: n, popoverRef: i, inputRef: a, listBoxRef: o, keyboardDelegate: s, layoutDelegate: l, shouldFocusWrap: u, isReadOnly: m, isDisabled: v } = e, y = (0, Z.useRef)(null);
	n ??= y;
	let x = Le(It(Ft), `@react-aria/combobox`), { menuTriggerProps: S, menuProps: w } = ke({
		type: `listbox`,
		isDisabled: v || m
	}, t, n);
	R.set(t, { id: w.id });
	let { collection: E } = t, { disabledKeys: D } = t.selectionManager, O = (0, Z.useMemo)(() => s || new Pe({
		collection: E,
		disabledKeys: D,
		ref: o,
		layoutDelegate: l
	}), [
		s,
		l,
		E,
		D,
		o
	]), { collectionProps: k } = Re({
		selectionManager: t.selectionManager,
		keyboardDelegate: O,
		disallowTypeAhead: !0,
		disallowEmptySelection: !0,
		shouldFocusWrap: u,
		ref: a,
		isVirtualized: !0
	}), A = h(), { keyboardProps: j } = d({ shortcuts: {
		Enter: (e) => {
			let n = t.isOpen;
			if (t.isOpen && o.current && t.selectionManager.focusedKey != null) {
				let r = t.collection.getItem(t.selectionManager.focusedKey);
				if (r?.props.href) {
					let i = o.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
					return i instanceof HTMLAnchorElement && A.open(i, e, r.props.href, r.props.routerOptions), t.close(), { shouldPreventDefault: n };
				}
				if (r?.props.onAction) return r.props.onAction(), t.close(), { shouldPreventDefault: n };
			}
			return t.commit(), { shouldPreventDefault: n };
		},
		Tab: () => {
			if (t.isOpen && o.current && t.selectionManager.focusedKey != null) {
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
	} }), { keyboardProps: M } = d({
		shortcuts: {
			ArrowDown: () => (t.open(`first`, `manual`), { shouldPreventDefault: !1 }),
			ArrowUp: () => (t.open(`last`, `manual`), { shouldPreventDefault: !1 }),
			ArrowLeft: () => (t.selectionManager.setFocusedKey(null), { shouldPreventDefault: !1 }),
			ArrowRight: () => (t.selectionManager.setFocusedKey(null), { shouldPreventDefault: !1 })
		},
		allowRepeats: !0
	}), te = (r) => {
		let a = C(n.current, r.relatedTarget), o = C(i.current, r.relatedTarget);
		a || o || (e.onBlur && e.onBlur(r), t.setFocused(!1));
	}, N = (n) => {
		t.isFocused || (e.onFocus && e.onFocus(n), t.setFocused(!0));
	}, P = Rt([t.selectionManager.selectedKeys, t.selectionManager.selectionMode]), { isInvalid: F, validationErrors: I, validationDetails: ne } = t.displayValidation, { labelProps: L, inputProps: B, descriptionProps: H, errorMessageProps: U } = Ee({
		...e,
		isRequired: e.selectionMode === `multiple` ? e.isRequired && t.selectionManager.isEmpty : e.isRequired,
		onChange: t.setInputValue,
		onKeyDown: m ? e.onKeyDown : r(t.isOpen && k.onKeyDown, j.onKeyDown, M.onKeyDown, e.onKeyDown),
		onBlur: te,
		value: t.inputValue,
		defaultValue: t.defaultInputValue,
		onFocus: N,
		autoComplete: `off`,
		validate: void 0,
		[Se]: t,
		"aria-describedby": [P, e[`aria-describedby`]].filter(Boolean).join(` `) || void 0
	}, a);
	he(a, t.defaultValue, t.setValue);
	let re = (e) => {
		e.pointerType === `touch` && (a.current?.focus(), t.toggle(null, `manual`));
	}, ie = (e) => {
		e.pointerType !== `touch` && (a.current?.focus(), t.toggle(e.pointerType === `keyboard` || e.pointerType === `virtual` ? `first` : null, `manual`));
	}, W = p({
		id: S.id,
		"aria-label": x.format(`buttonLabel`),
		"aria-labelledby": e[`aria-labelledby`] || L.id
	}), G = p({
		id: w.id,
		"aria-label": x.format(`listboxLabel`),
		"aria-labelledby": e[`aria-labelledby`] || L.id
	}), ae = (0, Z.useRef)(0), oe = (e) => {
		if (v || m) return;
		if (e.timeStamp - ae.current < 500) {
			e.preventDefault(), a.current?.focus();
			return;
		}
		let n = g(e).getBoundingClientRect(), r = e.changedTouches[0], i = Math.ceil(n.left + .5 * n.width), o = Math.ceil(n.top + .5 * n.height);
		r.clientX === i && r.clientY === o && (e.preventDefault(), a.current?.focus(), t.toggle(null, `manual`), ae.current = e.timeStamp);
	}, K = t.selectionManager.focusedKey != null && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0, q = K?.parentKey ?? null, J = t.selectionManager.focusedKey ?? null, se = (0, Z.useRef)(q), ce = (0, Z.useRef)(J);
	(0, Z.useEffect)(() => {
		if (T() && K != null && J != null && J !== ce.current) {
			let e = t.selectionManager.isSelected(J), n = q == null ? null : t.collection.getItem(q), r = n?.[`aria-label`] || (typeof n?.rendered == `string` ? n.rendered : ``) || ``, i = x.format(`focusAnnouncement`, {
				isGroupChange: (n && q !== se.current) ?? !1,
				groupTitle: r,
				groupCount: n ? [...ze(n, t.collection)].length : 0,
				optionText: K[`aria-label`] || K.textValue || ``,
				isSelected: e
			});
			_(i);
		}
		se.current = q, ce.current = J;
	});
	let le = Fe(t.collection), ue = (0, Z.useRef)(le), de = (0, Z.useRef)(t.isOpen);
	(0, Z.useEffect)(() => {
		let e = t.isOpen !== de.current && (t.selectionManager.focusedKey == null || T());
		if (t.isOpen && (e || le !== ue.current)) {
			let e = x.format(`countAnnouncement`, { optionCount: le });
			_(e);
		}
		ue.current = le, de.current = t.isOpen;
	});
	let fe = (0, Z.useRef)(t.selectedKey);
	return (0, Z.useEffect)(() => {
		if (T() && t.isFocused && t.selectedItem && t.selectedKey !== fe.current) {
			let e = t.selectedItem[`aria-label`] || t.selectedItem.textValue || ``, n = x.format(`selectedAnnouncement`, { optionText: e });
			_(n);
		}
		fe.current = t.selectedKey;
	}), (0, Z.useEffect)(() => {
		if (t.isOpen) return Ne([a.current, i.current].filter((e) => e != null));
	}, [
		t.isOpen,
		a,
		i
	]), z(() => {
		!K && a.current && b(ee(a.current)) === a.current && ge(a.current, null);
	}, [K]), xe(o, `react-aria-item-action`, t.isOpen ? () => {
		t.close();
	} : void 0), {
		labelProps: {
			...L,
			onClick: `htmlFor` in L && L.htmlFor || e.isDisabled ? void 0 : () => {
				a.current?.focus(), c(`keyboard`);
			}
		},
		buttonProps: {
			...S,
			...W,
			excludeFromTabOrder: !0,
			preventFocusOnPress: !0,
			onPress: re,
			onPressStart: ie,
			isDisabled: v || m
		},
		inputProps: f(B, {
			role: `combobox`,
			"aria-expanded": S[`aria-expanded`],
			"aria-controls": t.isOpen ? w.id : void 0,
			"aria-autocomplete": `list`,
			"aria-activedescendant": K ? V(t, K.key) : void 0,
			onTouchEnd: oe,
			autoCorrect: `off`,
			spellCheck: `false`
		}),
		listBoxProps: f(w, G, {
			onAction: void 0,
			autoFocus: t.focusStrategy || !0,
			shouldUseVirtualFocus: !0,
			shouldSelectOnPressUp: !0,
			shouldFocusOnHover: !0,
			linkBehavior: `selection`,
			UNSTABLE_itemBehavior: `action`
		}),
		valueProps: { id: P },
		descriptionProps: H,
		errorMessageProps: U,
		isInvalid: F,
		validationErrors: I,
		validationDetails: ne
	};
}
function Rt(e = []) {
	let t = l(), [n, r] = (0, Z.useState)(!0), [i, a] = (0, Z.useState)(e);
	return i.some((t, n) => !Object.is(t, e[n])) && (r(!0), a(e)), (0, Z.useEffect)(() => {
		n && !document.getElementById(t) && r(!1);
	}, [
		t,
		n,
		i
	]), n ? t : void 0;
}
function zt(e) {
	let { defaultFilter: t, menuTrigger: n = `input`, allowsEmptyCollection: r = !1, allowsCustomValue: i, shouldCloseOnBlur: a = !0, selectionMode: o = `single` } = e, [s, c] = (0, Z.useState)(!1), [l, u] = (0, Z.useState)(!1), [d, f] = (0, Z.useState)(null), p = (0, Z.useRef)(!1), m = (0, Z.useMemo)(() => e.defaultValue === void 0 ? o === `single` ? e.defaultSelectedKey ?? null : [] : e.defaultValue, [
		e.defaultValue,
		e.defaultSelectedKey,
		o
	]), h = (0, Z.useMemo)(() => e.value === void 0 ? o === `single` ? e.selectedKey : void 0 : e.value, [
		e.value,
		e.selectedKey,
		o
	]), [g, _] = Ge(h, m, e.onChange), v = o === `single` && Array.isArray(g) ? g[0] : g, y = (t) => {
		if (o === `single`) {
			let n = Array.isArray(t) ? t[0] ?? null : t;
			_(n), n !== v && e.onSelectionChange?.(n);
		} else {
			let e = [];
			Array.isArray(t) ? e = t : t != null && (e = [t]), _(e);
		}
	}, { collection: b, selectionManager: x, disabledKeys: S } = He({
		...e,
		items: e.items ?? e.defaultItems,
		selectionMode: o,
		disallowEmptySelection: o === `single`,
		allowDuplicateSelectionEvents: !0,
		selectedKeys: (0, Z.useMemo)(() => Ut(v), [v]),
		onSelectionChange: (t) => {
			if (t !== `all`) {
				if (o === `single`) {
					let n = t.values().next().value ?? null;
					n === v ? (e.onSelectionChange?.(n), B(), L()) : y(n);
				} else y([...t]);
			}
		}
	}), C = o === `single` ? x.firstSelectedKey : null, w = (0, Z.useMemo)(() => [...x.selectedKeys].map((e) => b.getItem(e)).filter((e) => e != null), [x.selectedKeys, b]), [T, E] = Ge(e.inputValue, Ht(e.defaultInputValue, C, b) || ``, e.onInputChange), [D] = (0, Z.useState)(v), [ee] = (0, Z.useState)(T), O = b, k = (0, Z.useMemo)(() => e.items != null || !t ? b : Bt(b, T, t), [
		b,
		T,
		t,
		e.items
	]), [A, j] = (0, Z.useState)(k), M = (0, Z.useRef)(`focus`), te = (t) => {
		e.onOpenChange && e.onOpenChange(t, t ? M.current : void 0), x.setFocused(t), t || x.setFocusedKey(null);
	}, N = We({
		...e,
		onOpenChange: te,
		isOpen: void 0,
		defaultOpen: void 0
	}), P = (t = null, i) => {
		let a = i === `manual` || i === `focus` && n === `focus`;
		(r || k.size > 0 || a && O.size > 0 || e.items) && (a && !N.isOpen && e.items === void 0 && c(!0), M.current = i, f(t), N.open());
	}, F = (t = null, i) => {
		let a = i === `manual` || i === `focus` && n === `focus`;
		(r || k.size > 0 || a && O.size > 0 || e.items || N.isOpen) && (a && !N.isOpen && e.items === void 0 && c(!0), N.isOpen || (M.current = i), ne(t));
	}, I = (0, Z.useCallback)(() => {
		j(s ? O : k);
	}, [
		s,
		O,
		k
	]), ne = (0, Z.useCallback)((e = null) => {
		N.isOpen && I(), f(e), N.toggle();
	}, [N, I]), L = (0, Z.useCallback)(() => {
		N.isOpen && (I(), N.close());
	}, [N, I]), [R, z] = (0, Z.useState)(T), B = () => {
		let e = C == null ? `` : b.getItem(C)?.textValue ?? ``;
		z(e), E(e);
	}, V = (0, Z.useRef)(v), H = (0, Z.useRef)(C == null ? `` : b.getItem(C)?.textValue ?? ``);
	(0, Z.useEffect)(() => {
		l && (k.size > 0 || r) && !N.isOpen && T !== R && n !== `manual` && P(null, `input`), !s && !r && N.isOpen && k.size === 0 && (p.current = !0, L()), l && p.current && k.size > 0 && !N.isOpen && n !== `manual` && (p.current = !1, P(null, `input`)), v != null && v !== V.current && o === `single` && L(), T !== R && (x.setFocusedKey(null), c(!1), o === `single` && T === `` && (e.inputValue === void 0 || h === void 0) && y(null)), v !== V.current && (e.inputValue === void 0 || h === void 0) ? B() : R !== T && z(T);
		let t = C == null ? `` : b.getItem(C)?.textValue ?? ``;
		!l && C != null && e.inputValue === void 0 && C === V.current && H.current !== t && (z(t), E(t)), V.current = v, H.current = t;
	});
	let U = ye({
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
	}), re = () => {
		p.current = !1, i && C == null ? ie() : W();
	}, ie = () => {
		o === `multiple` ? (z(T), L()) : (V.current = null, y(null), L());
	}, W = (t = !1) => {
		if (h !== void 0 && e.inputValue !== void 0) {
			let n = C == null ? `` : b.getItem(C)?.textValue ?? ``;
			(t || o === `multiple` || T !== n) && (e.onSelectionChange?.(C), e.onChange?.(v)), z(n), L();
		} else B(), L();
	}, G = () => {
		if (p.current = !1, i) {
			let e = C == null ? `` : b.getItem(C)?.textValue ?? ``;
			T === e ? W() : ie();
		} else W();
	}, ae = () => {
		N.isOpen && x.focusedKey != null ? x.isSelected(x.focusedKey) && o === `single` ? W(!0) : x.select(x.focusedKey) : G();
	}, oe = (0, Z.useRef)([T, v]), K = (t) => {
		t ? (oe.current = [T, v], n === `focus` && !e.isReadOnly && P(null, `focus`)) : (a && G(), (T !== oe.current[0] || v !== oe.current[1]) && U.commitValidation()), u(t);
	}, q = (0, Z.useMemo)(() => N.isOpen ? s ? O : k : A, [
		N.isOpen,
		O,
		k,
		s,
		A
	]), J = e.defaultSelectedKey ?? (o === `single` ? D : null);
	return {
		...U,
		...N,
		focusStrategy: d,
		toggle: F,
		open: P,
		close: G,
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
		defaultInputValue: Ht(e.defaultInputValue, J, b) ?? ee,
		setInputValue: E,
		commit: ae,
		revert: re
	};
}
function Bt(e, t, n) {
	return new Ve(Vt(e, e, t, n));
}
function Vt(e, t, n, r) {
	let i = [];
	for (let a of t) if (a.type === `section` && a.hasChildNodes) {
		let t = Vt(e, ze(a, e), n, r);
		[...t].some((e) => e.type === `item`) && i.push({
			...a,
			childNodes: t
		});
	} else (a.type === `item` && r(a.textValue, n) || a.type !== `item`) && i.push({ ...a });
	return i;
}
function Ht(e, t, n) {
	return e == null && t != null ? n.getItem(t)?.textValue ?? `` : e;
}
function Ut(e) {
	if (e !== void 0) return e === null ? [] : Array.isArray(e) ? e : [e];
}
var Wt = (0, Z.createContext)(null), Gt = (0, Z.createContext)(null), Kt = i(function(e, t) {
	[e, t] = m(e, t, Wt);
	let { children: n, isDisabled: r = !1, isInvalid: i = !1, isRequired: a = !1, isReadOnly: o = !1 } = e, s = (0, Z.useMemo)(() => Z.createElement(B.Provider, { value: { items: e.items ?? e.defaultItems } }, typeof n == `function` ? n({
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
	return Z.createElement(Be, { content: s }, (n) => Z.createElement(Jt, {
		props: e,
		collection: n,
		comboBoxRef: t
	}));
}), qt = [
	y,
	S,
	we,
	_e,
	Ce,
	Me
];
function Jt({ props: e, collection: t, comboBoxRef: r }) {
	let { name: i, formValue: c = `key`, allowsCustomValue: l } = e;
	l && (c = `text`);
	let { validationBehavior: d } = u(be) || {}, f = e.validationBehavior ?? d ?? `native`, { contains: p } = Ke({ sensitivity: `base` }), m = zt({
		...e,
		defaultFilter: e.defaultFilter || p,
		items: e.items,
		children: void 0,
		collection: t,
		validationBehavior: f
	}), h = (0, Z.useRef)(null), g = (0, Z.useRef)(null), _ = (0, Z.useRef)(null), v = (0, Z.useRef)(null), b = (0, Z.useRef)(null), [C, w] = a(!e[`aria-label`] && !e[`aria-labelledby`]), [T, E] = (0, Z.useState)(`label`), { buttonProps: ee, inputProps: O, listBoxProps: k, labelProps: A, descriptionProps: j, errorMessageProps: M, valueProps: te, ...N } = Lt({
		...x(e),
		label: w,
		inputRef: g,
		buttonRef: h,
		listBoxRef: v,
		popoverRef: b,
		name: c === `text` ? i : void 0,
		validationBehavior: f,
		labelElementType: T
	}, m), [P, F] = (0, Z.useState)(null), I = (0, Z.useCallback)(() => {
		if (g.current && !_.current) {
			let e = h.current?.getBoundingClientRect(), t = g.current.getBoundingClientRect(), n = e ? Math.min(e.left, t.left) : t.left, r = e ? Math.max(e.right, t.right) : t.right;
			F(r - n + `px`);
		}
	}, [
		h,
		g,
		F
	]);
	Ue({
		ref: g,
		onResize: I
	});
	let ne = (0, Z.useMemo)(() => ({ get current() {
		return _.current || g.current;
	} }), [_, g]), R = (0, Z.useMemo)(() => ({
		isOpen: m.isOpen,
		isDisabled: e.isDisabled || !1,
		isInvalid: N.isInvalid || !1,
		isRequired: e.isRequired || !1,
		isReadOnly: e.isReadOnly || !1
	}), [
		m.isOpen,
		e.isDisabled,
		N.isInvalid,
		e.isRequired,
		e.isReadOnly
	]), z = s({
		...e,
		values: R,
		defaultClassName: `react-aria-ComboBox`
	}), V = o(e, { global: !0 });
	delete V.id;
	let H = [];
	if (i && c === `key`) {
		let t = Array.isArray(m.value) ? m.value : [m.value];
		t.length === 0 && (t = [null]), H = t.map((t, n) => Z.createElement(`input`, {
			key: n,
			type: `hidden`,
			name: i,
			form: e.form,
			value: t ?? ``
		}));
	}
	return Z.createElement(D, { values: [
		[Gt, m],
		[y, {
			...A,
			elementType: T,
			ref: C
		}],
		[S, {
			...ee,
			ref: h,
			isPressed: m.isOpen
		}],
		[we, {
			...O,
			ref: g
		}],
		[_e, {
			...O,
			ref: (0, Z.useCallback)((e) => {
				g.current = e, e && E(e.tagName.toLowerCase() === `input` ? `label` : `span`);
			}, []),
			value: m.inputValue,
			onChange: (e) => m.setInputValue(e)
		}],
		[Oe, m],
		[De, {
			ref: b,
			triggerRef: ne,
			scrollRef: v,
			placement: `bottom start`,
			isNonModal: !0,
			trigger: `ComboBox`,
			style: { "--trigger-width": P },
			clearContexts: qt
		}],
		[B, {
			...k,
			ref: v
		}],
		[L, m],
		[Me, { slots: {
			description: j,
			errorMessage: M
		} }],
		[Ce, {
			ref: _,
			isInvalid: N.isInvalid,
			isDisabled: e.isDisabled || !1
		}],
		[me, N],
		[Yt, te]
	] }, Z.createElement(n.div, {
		...V,
		...z,
		ref: r,
		slot: e.slot || void 0,
		"data-focused": m.isFocused || void 0,
		"data-open": m.isOpen || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-invalid": N.isInvalid || void 0,
		"data-required": e.isRequired || void 0
	}, z.children, H));
}
var Yt = (0, Z.createContext)(null), Xt = {
	name: `case-sensitive`,
	size: 24,
	node: [
		[`path`, {
			d: `m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16`,
			key: `d5nyq2`
		}],
		[`path`, {
			d: `M22 9v7`,
			key: `pvm9v3`
		}],
		[`path`, {
			d: `M3.304 13h6.392`,
			key: `1q3zxz`
		}],
		[`circle`, {
			cx: `18.5`,
			cy: `12.5`,
			r: `3.5`,
			key: `z97x68`
		}]
	]
};
Xt.node;
var Zt = E(Xt), Qt = {
	name: `regex`,
	size: 24,
	node: [
		[`path`, {
			d: `M17 3v10`,
			key: `15fgeh`
		}],
		[`path`, {
			d: `m12.67 5.5 8.66 5`,
			key: `1gpheq`
		}],
		[`path`, {
			d: `m12.67 10.5 8.66-5`,
			key: `1dkfa6`
		}],
		[`path`, {
			d: `M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z`,
			key: `swwfx4`
		}]
	]
};
Qt.node;
var $t = E(Qt), en = {
	name: `rotate-ccw-clock`,
	size: 24,
	node: [
		[`path`, {
			d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,
			key: `1357e3`
		}],
		[`path`, {
			d: `M3 3v5h5`,
			key: `1xhq8a`
		}],
		[`path`, {
			d: `M12 7v5l4 2`,
			key: `1fdv2h`
		}]
	],
	aliases: [`history`]
};
en.node;
var tn = E(en), nn = {
	name: `whole-word`,
	size: 24,
	node: [
		[`circle`, {
			cx: `7`,
			cy: `12`,
			r: `3`,
			key: `12clwm`
		}],
		[`path`, {
			d: `M10 9v6`,
			key: `17i7lo`
		}],
		[`circle`, {
			cx: `17`,
			cy: `12`,
			r: `3`,
			key: `gl7c2s`
		}],
		[`path`, {
			d: `M14 7v8`,
			key: `dl84cr`
		}],
		[`path`, {
			d: `M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1`,
			key: `lt2kga`
		}]
	]
};
nn.node;
var rn = E(nn), Q = qe(), an = () => !0;
function on({ label: e, placeholder: t, value: n, onChange: r, onSubmit: i, children: a, shortcutKey: o, shortcutHint: s, isLoading: c = !1, loadingLabel: l, resultsLabel: u, emptyLabel: d, errorMessage: f, actions: p, container: m, className: h }) {
	let g = (0, Z.useRef)(null), _ = (0, Z.useCallback)(() => {
		g.current?.focus(), g.current?.select();
	}, []), y = (0, Z.useCallback)((e) => o ? se(o)(e) : !1, [o]);
	ae(y, _, { enabled: o !== void 0 });
	let b = n.trim(), x = (0, Z.useCallback)((e) => {
		e.key === `Enter` && i && b && (e.currentTarget.getAttribute(`aria-activedescendant`) || i(b));
	}, [i, b]), S = (0, Z.useCallback)((e) => e.preventDefault(), []), C = (0, Z.useCallback)(() => f ? (0, Q.jsxs)(`p`, {
		className: `m-0 flex items-start gap-2 px-3 py-3 text-body text-fg`,
		children: [(0, Q.jsx)(de, {
			"aria-hidden": `true`,
			className: `mt-0.5 size-4 shrink-0 text-danger`
		}), (0, Q.jsx)(`span`, { children: f })]
	}) : c ? (0, Q.jsx)(`p`, {
		className: `m-0 px-3 py-3 text-body text-muted`,
		children: l
	}) : (0, Q.jsx)(`p`, {
		className: `m-0 px-3 py-3 text-body text-muted`,
		children: d
	}), [
		d,
		f,
		c,
		l
	]), w = f ?? (c ? l : u) ?? ``;
	return (0, Q.jsxs)(`search`, {
		className: Y(`relative block w-full max-w-md min-w-0`, h),
		children: [(0, Q.jsx)(`form`, {
			onSubmit: S,
			children: (0, Q.jsxs)(Kt, {
				inputValue: n,
				onInputChange: r,
				selectedKey: null,
				allowsCustomValue: !0,
				allowsEmptyCollection: b.length > 0,
				menuTrigger: `input`,
				defaultFilter: an,
				className: `group`,
				children: [
					(0, Q.jsx)(v, {
						className: `sr-only`,
						children: e
					}),
					(0, Q.jsxs)(`div`, {
						className: `flex h-control-md items-center gap-2 rounded-md border border-border-strong bg-input px-2 transition-colors focus-within:border-accent group-data-hovered:border-accent`,
						children: [
							(0, Q.jsx)(pe, {
								"aria-hidden": `true`,
								className: `size-4 shrink-0 text-muted`
							}),
							(0, Q.jsx)(Te, {
								ref: g,
								onKeyDown: x,
								...t === void 0 ? {} : { placeholder: t },
								...o ? { "aria-keyshortcuts": o } : {},
								className: `h-full min-w-0 flex-1 bg-transparent text-body text-fg outline-none placeholder:text-muted`
							}),
							c ? (0, Q.jsx)(fe, {
								"aria-hidden": `true`,
								className: `size-4 shrink-0 animate-spin text-muted motion-reduce:animate-none`
							}) : null,
							s && !n ? (0, Q.jsx)(`kbd`, {
								"aria-hidden": `true`,
								className: Y(q, `group-focus-within:hidden`),
								children: s
							}) : null,
							p ? (0, Q.jsx)(`div`, {
								className: `flex shrink-0 items-center gap-0.5`,
								children: p
							}) : null
						]
					}),
					(0, Q.jsx)(je, {
						...m ? { UNSTABLE_portalContainer: m } : {},
						offset: 6,
						className: `w-(--trigger-width) max-w-[calc(100vw-2rem)] min-w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-lg border border-border bg-surface text-fg shadow-lg data-entering:animate-fade`,
						children: (0, Q.jsx)(H, {
							renderEmptyState: C,
							className: `max-h-[min(28rem,60vh)] overflow-y-auto overscroll-contain p-1 outline-none`,
							children: f ? null : a
						})
					})
				]
			})
		}), (0, Q.jsx)(`output`, {
			className: `sr-only`,
			children: w
		})]
	});
}
function $({ textValue: e, icon: t, title: n, description: r, meta: i, shortcut: a, layout: o = `stacked`, className: s, ...c }) {
	return (0, Q.jsxs)(ne, {
		...c,
		textValue: e,
		className: Y(oe, s),
		children: [
			t ? (0, Q.jsx)(`span`, {
				"aria-hidden": `true`,
				className: ie,
				children: t
			}) : null,
			(0, Q.jsxs)(`span`, {
				className: Y(`flex min-w-0 flex-1`, o === `stacked` ? `flex-col` : `items-baseline gap-2`),
				children: [(0, Q.jsx)(`span`, {
					className: `min-w-0 truncate`,
					children: n
				}), r ? (0, Q.jsxs)(Q.Fragment, { children: [` `, (0, Q.jsx)(`span`, {
					className: `min-w-0 truncate text-caption text-muted`,
					children: r
				})] }) : null]
			}),
			i ? (0, Q.jsxs)(Q.Fragment, { children: [` `, (0, Q.jsx)(`span`, {
				className: `shrink-0 text-caption text-muted`,
				children: i
			})] }) : null,
			a ? (0, Q.jsx)(`kbd`, {
				className: Y(q, `max-sm:hidden`),
				children: a
			}) : null
		]
	});
}
var sn = K(`p`), cn = (0, Q.jsx)(tn, {}), ln = (0, Q.jsx)(Je, {}), un = [];
function dn({ path: e, positions: t, isRecent: n, recentLabel: r, position: i }) {
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
		icon: n ? cn : ln,
		title: s,
		description: c,
		meta: l
	});
}
function fn({ onOpenChange: e, paths: t, recent: n = un, onOpen: r, label: i, searchLabel: a, listLabel: o, placeholder: s, closeLabel: c, emptyLabel: l, isLoading: u = !1, loadingLabel: d, recentLabel: f, lineLabel: p, resultsLabel: m, limit: h = 60 }) {
	let [g, _] = (0, Z.useState)(``), v = (0, Z.useRef)(null);
	(0, Z.useEffect)(() => v.current?.focus(), []);
	let { query: y, line: b, column: x } = G(g), S = (0, Z.useMemo)(() => J(t, y, n, h), [
		t,
		y,
		n,
		h
	]), C = (0, Z.useMemo)(() => new Set(n), [n]), T = (0, Z.useCallback)(() => e(!1), [e]), E = (0, Z.useCallback)((t) => {
		e(!1), r(String(t), {
			...b === void 0 ? {} : { line: b },
			...x === void 0 ? {} : { column: x }
		});
	}, [
		x,
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
	]), ee = b !== void 0 && p ? p(b, x) : void 0;
	return (0, Q.jsxs)(Ae, {
		"aria-label": i,
		className: `flex min-h-0 flex-1 flex-col outline-none`,
		children: [(0, Q.jsxs)(ve, {
			inputValue: g,
			onInputChange: _,
			children: [(0, Q.jsxs)(Qe, {
				"aria-label": a,
				className: `flex shrink-0 items-center gap-2 border-b border-border px-3`,
				children: [
					(0, Q.jsx)(pe, {
						"aria-hidden": `true`,
						className: `size-4 shrink-0 text-muted`
					}),
					(0, Q.jsx)(Te, {
						ref: v,
						...s === void 0 ? {} : { placeholder: s },
						spellCheck: !1,
						autoComplete: `off`,
						className: `h-12 min-w-0 flex-1 bg-transparent font-mono text-body text-fg outline-none placeholder:font-sans placeholder:text-muted [&::-webkit-search-cancel-button]:hidden`
					}),
					(0, Q.jsx)(w, {
						"aria-label": c,
						onPress: T,
						className: `inline-grid size-8 shrink-0 cursor-pointer place-items-center rounded-md text-muted data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-sunken`,
						children: (0, Q.jsx)(Ye, {
							"aria-hidden": `true`,
							className: `size-4`
						})
					})
				]
			}), (0, Q.jsx)(H, {
				"aria-label": o,
				onAction: E,
				renderEmptyState: D,
				className: `min-h-0 flex-1 overflow-y-auto overscroll-contain p-1.5 outline-none`,
				children: S.map((e) => (0, Q.jsx)(dn, {
					path: e.path,
					positions: e.positions,
					isRecent: !y && C.has(e.path),
					recentLabel: f,
					position: ee
				}, e.path))
			})]
		}), (0, Q.jsx)(`output`, {
			className: `sr-only`,
			children: m && y ? m(S.length) : ``
		})]
	});
}
function pn({ isOpen: e, onOpenChange: t, shortcut: n = !1, container: r, className: i, ...a }) {
	let o = (0, Z.useCallback)(() => t(!e), [e, t]);
	return ae(sn, o, {
		enabled: n,
		inFields: !0
	}), (0, Q.jsx)(Xe, {
		isOpen: e,
		onOpenChange: t,
		isDismissable: !0,
		...r ? { UNSTABLE_portalContainer: r } : {},
		className: ce,
		children: (0, Q.jsx)(Ze, {
			className: Y(ue, i),
			children: (0, Q.jsx)(fn, {
				...a,
				onOpenChange: t
			})
		})
	});
}
function mn({ label: e, children: t, shortcut: n, container: r, className: i, ...a }) {
	let o = n?.replaceAll(` `, `+`), s = (0, Z.useCallback)(({ children: e, ...t }) => (0, Q.jsx)(`button`, {
		...t,
		...o ? { "aria-keyshortcuts": o } : {},
		children: e
	}), [o]);
	return (0, Q.jsxs)($e, {
		delay: 600,
		closeDelay: 100,
		children: [(0, Q.jsx)(A, {
			...a,
			"aria-label": e,
			render: s,
			className: Y(`inline-grid size-6 shrink-0 cursor-pointer place-items-center rounded-sm border border-transparent text-muted transition-colors [&_svg]:size-4`, `data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-sunken data-disabled:cursor-not-allowed data-disabled:opacity-50`, `data-selected:border-accent data-selected:bg-accent-soft data-selected:text-accent-text forced-colors:data-selected:border-[Highlight] forced-colors:data-selected:bg-[Highlight] forced-colors:data-selected:text-[HighlightText] forced-colors:data-selected:forced-color-adjust-none`, i),
			children: t
		}), (0, Q.jsxs)(et, {
			...r ? { UNSTABLE_portalContainer: r } : {},
			offset: 6,
			className: `flex max-w-64 items-center gap-2 rounded-md border border-border bg-surface px-2 py-1 text-caption text-fg shadow-md data-entering:animate-fade`,
			children: [e, n ? (0, Q.jsx)(`kbd`, {
				className: q,
				children: n
			}) : null]
		})]
	});
}
function hn({ id: e, title: t, count: n, countLabel: r, children: i, className: a }) {
	return (0, Q.jsxs)(I, {
		...e === void 0 ? {} : { id: e },
		className: Y(`not-first:mt-1 not-first:border-t not-first:border-border`, a),
		children: [(0, Q.jsxs)(Ie, {
			className: re,
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
		}), i]
	});
}
var gn = e({ default: () => En }), _n = [
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
], vn = [
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
], yn = [
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
function bn() {
	let [e, t] = (0, Z.useState)(``), [n, r] = (0, Z.useState)(``), [i, a] = (0, Z.useState)(null), o = e.trim().toLowerCase(), s = o ? _n.filter((e) => `${e.id} ${e.title}`.toLowerCase().includes(o)) : [], c = o ? vn.filter((e) => e.title.toLowerCase().includes(o)) : [], l = s.length + c.length;
	return (0, Q.jsxs)(`div`, {
		ref: a,
		className: `flex flex-col gap-3`,
		children: [(0, Q.jsxs)(on, {
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
			children: [s.length ? (0, Q.jsx)(hn, {
				id: `issues`,
				title: `Issues`,
				count: s.length,
				countLabel: `${s.length} issues`,
				children: s.map((t) => (0, Q.jsx)($, {
					id: t.id,
					textValue: t.title,
					icon: (0, Q.jsx)(P, {}),
					title: (0, Q.jsx)(X, {
						text: t.title,
						query: e
					}),
					description: t.project,
					meta: t.id,
					onAction: () => r(t.id)
				}, t.id))
			}) : null, c.length ? (0, Q.jsx)(hn, {
				id: `pages`,
				title: `Pages`,
				count: c.length,
				countLabel: `${c.length} pages`,
				children: c.map((t) => (0, Q.jsx)($, {
					id: t.id,
					textValue: t.title,
					icon: (0, Q.jsx)(j, {}),
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
function xn() {
	let [e, t] = (0, Z.useState)(null), [n, r] = (0, Z.useState)(``), [i, a] = (0, Z.useState)(!1), [o, s] = (0, Z.useState)(!1), [c, l] = (0, Z.useState)(!0), u = e ? { container: e } : {};
	return (0, Q.jsxs)(`div`, {
		ref: t,
		className: `flex flex-col gap-2`,
		children: [(0, Q.jsx)(on, {
			label: `Search in files`,
			placeholder: `Search in files…`,
			value: n,
			onChange: r,
			emptyLabel: `No matches in this folder.`,
			...u,
			actions: (0, Q.jsxs)(Q.Fragment, { children: [
				(0, Q.jsx)(mn, {
					label: `Match case`,
					shortcut: `Alt C`,
					isSelected: i,
					onChange: a,
					...u,
					children: (0, Q.jsx)(Zt, { "aria-hidden": `true` })
				}),
				(0, Q.jsx)(mn, {
					label: `Match whole word`,
					shortcut: `Alt W`,
					isSelected: o,
					onChange: s,
					...u,
					children: (0, Q.jsx)(rn, { "aria-hidden": `true` })
				}),
				(0, Q.jsx)(mn, {
					label: `Use regular expression`,
					shortcut: `Alt R`,
					isSelected: c,
					onChange: l,
					...u,
					children: (0, Q.jsx)($t, { "aria-hidden": `true` })
				}),
				(0, Q.jsx)(mn, {
					label: `Search hidden files`,
					isDisabled: !0,
					children: (0, Q.jsx)(j, { "aria-hidden": `true` })
				})
			] })
		}), (0, Q.jsx)(`p`, {
			className: `m-0 text-caption text-muted`,
			children: `Match case ${i ? `on` : `off`}, whole word ${o ? `on` : `off`}, regular expression ${c ? `on` : `off`}.`
		})]
	});
}
function Sn() {
	let [e, t] = (0, Z.useState)(!1), [n, r] = (0, Z.useState)(``), [i, a] = (0, Z.useState)(null), o = [
		{
			id: `board`,
			group: `Views`,
			label: `Board`,
			icon: (0, Q.jsx)(te, {}),
			shortcut: `⌘ 1`,
			onAction: () => r(`Board`)
		},
		{
			id: `list`,
			group: `Views`,
			label: `Issue list`,
			icon: (0, Q.jsx)(k, {}),
			shortcut: `⌘ 2`,
			onAction: () => r(`Issue list`)
		},
		{
			id: `settings`,
			group: `Views`,
			label: `Settings`,
			icon: (0, Q.jsx)(N, {}),
			hint: `Account, team and keys`,
			onAction: () => r(`Settings`)
		},
		{
			id: `project`,
			group: `Actions`,
			label: `New project…`,
			icon: (0, Q.jsx)(M, {}),
			onAction: () => r(`New project`)
		},
		{
			id: `theme`,
			group: `Actions`,
			label: `Switch to the dark theme`,
			icon: (0, Q.jsx)(O, {}),
			keywords: [`night`, `appearance`],
			onAction: () => r(`Dark theme`)
		},
		{
			id: `import`,
			group: `Actions`,
			label: `Import from a file`,
			hint: `Available on paid plans`,
			isDisabled: !0,
			onAction: () => r(`Import`)
		}
	];
	return (0, Q.jsxs)(`div`, {
		ref: a,
		className: `flex flex-wrap items-center gap-3`,
		children: [
			(0, Q.jsx)(U, {
				variant: `outline`,
				onPress: () => t(!0),
				children: `Open the command palette`
			}),
			(0, Q.jsx)(`span`, {
				className: `text-caption text-muted`,
				children: n ? `Ran: ${n}` : `Or press Ctrl K or ⌘ K.`
			}),
			(0, Q.jsx)(le, {
				isOpen: e,
				onOpenChange: t,
				commands: o,
				shortcut: !0,
				label: `Command palette`,
				searchLabel: `Search commands`,
				listLabel: `Commands`,
				placeholder: `Search views and actions`,
				closeLabel: `Close`,
				emptyLabel: (e) => `Nothing matches “${e}”.`,
				resultsLabel: (e) => e === 1 ? `1 command` : `${e} commands`,
				footer: `↑ ↓ to move · Enter to run · Esc to close`,
				...i ? { container: i } : {}
			})
		]
	});
}
function Cn() {
	let [e, t] = (0, Z.useState)(!1), [n, r] = (0, Z.useState)(``), [i, a] = (0, Z.useState)(null);
	return (0, Q.jsxs)(`div`, {
		ref: a,
		className: `flex flex-wrap items-center gap-3`,
		children: [
			(0, Q.jsx)(U, {
				variant: `outline`,
				onPress: () => t(!0),
				children: `Go to file`
			}),
			(0, Q.jsx)(`span`, {
				className: `text-caption text-muted`,
				children: n ? `Opened: ${n}` : `Type “gls:40” to open a file at a line.`
			}),
			(0, Q.jsx)(pn, {
				isOpen: e,
				onOpenChange: t,
				paths: yn,
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
function wn() {
	return (0, Q.jsxs)(H, {
		"aria-label": `Search results for “form”`,
		className: `flex max-w-xl flex-col rounded-lg border border-border bg-surface p-1`,
		children: [(0, Q.jsxs)(hn, {
			id: `issues`,
			title: `Issues`,
			count: 14,
			countLabel: `14 issues`,
			children: [(0, Q.jsx)($, {
				id: `SK-12`,
				href: `#SK-12`,
				textValue: `Contact form loses the draft after a long pause`,
				icon: (0, Q.jsx)(P, {}),
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
				icon: (0, Q.jsx)(P, {}),
				title: (0, Q.jsx)(X, {
					text: `Form labels are not read in Safari`,
					query: `form`
				}),
				description: `Accessibility · updated yesterday`,
				meta: `SK-90`
			})]
		}), (0, Q.jsxs)(hn, {
			id: `pages`,
			title: `Pages`,
			count: 1,
			countLabel: `1 page`,
			children: [(0, Q.jsx)($, {
				id: `contact`,
				href: `#contact`,
				textValue: `Contact`,
				icon: (0, Q.jsx)(j, {}),
				title: `Contact`,
				description: (0, Q.jsx)(X, {
					text: `The form at the bottom of the contact page`,
					query: `form`
				}),
				layout: `stacked`
			}), (0, Q.jsx)($, {
				id: `archived`,
				textValue: `Old form (archived)`,
				icon: (0, Q.jsx)(j, {}),
				title: `Old form (archived)`,
				description: `Archived pages cannot be opened`,
				isDisabled: !0
			})]
		})]
	});
}
function Tn() {
	let e = W(`src/search/GlobalSearch.tsx`, `glsr`, !0);
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
var En = {
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
			render: () => (0, Q.jsx)(bn, {})
		},
		{
			name: `SearchOptionToggle`,
			components: [`SearchOptionToggle`],
			description: `On or off options inside a search field: match case, whole word, regular expression. Pass them to GlobalSearch through actions.`,
			usage: `<SearchOptionToggle label="Match case" shortcut="Alt C" isSelected={matchCase} onChange={setMatchCase}>
  <CaseSensitive aria-hidden="true" />
</SearchOptionToggle>`,
			accessibility: `Each is a 24px toggle button named by label, with aria-pressed and aria-keyshortcuts. Its name also appears as a tooltip on hover and keyboard focus, and Escape hides the tooltip. An active option gains an accent border and fill, and Highlight colours under forced colours.`,
			pl: {
				description: `Opcje włączane i wyłączane wewnątrz pola wyszukiwania: uwzględnianie wielkości liter, całe słowo, wyrażenie regularne. Przekaż je do GlobalSearch przez actions.`,
				accessibility: `Każda jest przyciskiem przełączanym o rozmiarze celu 24 px, nazwanym przez label, z aria-pressed i aria-keyshortcuts. Jej nazwa pojawia się też jako dymek podpowiedzi po najechaniu i przy fokusie z klawiatury, a Escape ukrywa dymek. Aktywna opcja dostaje ramkę i wypełnienie w kolorze akcentu, a Highlight koloruje się w trybie wymuszonych kolorów.`
			},
			render: () => (0, Q.jsx)(xn, {})
		},
		{
			name: `CommandPalette`,
			components: [`CommandPalette`],
			description: `One search for every view and action of an app, opened with Cmd K or Ctrl K. Pick it for apps with many places to go; use GlobalSearch for content.`,
			usage: "<CommandPalette isOpen={open} onOpenChange={setOpen} shortcut commands={commands}\n  label=\"Command palette\" searchLabel=\"Search commands\" listLabel=\"Commands\" closeLabel=\"Close\"\n  emptyLabel={(q) => `Nothing matches “${q}”.`} />",
			accessibility: `A modal dialog: focus starts in the search field, stays inside while open and returns to the trigger on close. Typing filters by label, hint and keywords in a fuzzy way, with the matched letters marked. Up and Down move, Enter runs, Escape clears the field and then closes. Commands are menu items named by their label and then their hint, with the shortcut as key caps; disabled ones are announced as such. On narrow screens it becomes a full-screen sheet with a close button.`,
			pl: {
				description: `Jedno wyszukiwanie dla każdego widoku i każdej akcji aplikacji, otwierane skrótem Cmd K lub Ctrl K. Wybierz ją dla aplikacji z wieloma miejscami do odwiedzenia; do treści użyj GlobalSearch.`,
				accessibility: `Okno dialogowe modalne: fokus zaczyna się w polu wyszukiwania, zostaje wewnątrz, dopóki okno jest otwarte, i wraca na element otwierający po zamknięciu. Wpisywanie filtruje przybliżenie po etykiecie, podpowiedzi i słowach kluczowych, a dopasowane litery są zaznaczone. Strzałka w górę i w dół przesuwa, Enter uruchamia, Escape czyści pole, a potem zamyka okno. Polecenia są pozycjami menu nazwanymi najpierw etykietą, potem podpowiedzią, ze skrótem jako klawiszami; wyłączone są ogłaszane jako takie. Na wąskich ekranach okno staje się arkuszem na pełny ekran z przyciskiem zamknięcia.`
			},
			render: () => (0, Q.jsx)(Sn, {})
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
			render: () => (0, Q.jsx)(Cn, {})
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
			render: () => (0, Q.jsx)(wn, {})
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
			render: () => (0, Q.jsx)(Tn, {})
		}
	]
};
export { gn as t };
