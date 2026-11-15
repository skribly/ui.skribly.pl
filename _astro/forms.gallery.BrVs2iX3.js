import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as n, $t as r, Ct as i, G as a, Ht as o, I as s, Jt as c, K as l, L as u, Q as d, R as f, V as p, Wt as m, Y as h, Yt as g, Z as _, Zt as v, _t as y, bt as b, cn as x, ct as S, et as C, fn as w, gn as T, gt as E, hn as D, j as O, ln as k, mn as A, nt as j, on as M, pn as N, q as P, rt as F, sn as I, tt as L, un as ee, vn as R, xn as te, yn as z, yt as B, z as V } from "./doc.C_PtMNUB.js";
import { n as ne, t as re } from "./react-dom.B9zIfLd2.js";
import { t as ie } from "./Button.df3csLrB.js";
import { t as H } from "./Checkbox.CgGCLldd.js";
import { n as ae } from "./Checkbox.TwqnTrT7.js";
import { a as oe, c as se, d as ce, f as le, l as ue, m as de, n as fe, p as U, r as pe, s as me, t as he, u as ge } from "./styles.Dduhw011.js";
import { n as _e, r as ve, t as ye } from "./TagGroup.B1bV80CB.js";
import { i as be, n as xe, r as Se, t as Ce } from "./useLocalizedStringFormatter.whw0Qxu0.js";
import { r as we, t as Te } from "./useFormReset.Cf-RVIHo.js";
import { t as Ee } from "./useMove.DZz0CiD6.js";
import { n as De, t as Oe } from "./VisuallyHidden.BNHsLrt2.js";
import { t as ke } from "./useControlledState.DijOhE0s.js";
import { n as Ae, t as je } from "./Group.CmTJ4Xbt.js";
import { n as Me, r as Ne } from "./useTextField.DqlAegV0.js";
import { n as Pe, t as Fe } from "./Text.3KJW7jIs.js";
import { a as Ie, i as Le, n as Re, o as ze, r as Be, t as Ve } from "./useNumberFieldState.CU_TFVDZ.js";
import { c as He, i as Ue, n as We, o as Ge, t as Ke } from "./useFormValidation.DOqf-YmE.js";
import { a as qe, c as Je, i as Ye, l as Xe, n as Ze, o as Qe, r as $e, s as et, t as tt } from "./Range.EVYBgtPx.js";
import { n as nt, t as rt } from "./SearchField.D0jMEgX3.js";
import { i as it, t as at } from "./ListBox.Bq8IE31A.js";
import { d as ot, i as st, n as ct, r as lt, t as ut, u as dt, v as ft, y as pt } from "./Dialog.1Jdfd_U0.js";
import { t as mt } from "./useUpdateEffect.Cquvw486.js";
import { l as ht } from "./useLoadMoreSentinel.BhNRPrj4.js";
import { h as gt, m as _t } from "./useCollection.Cn_I2nJQ.js";
import { i as vt, r as yt } from "./FocusScope.DSjTtRFm.js";
import { t as bt } from "./useEvent.DZ6Jaavz.js";
import { t as xt } from "./useFilter.B5m9LH6h.js";
import { t as St } from "./useOverlayTriggerState.ecOZOIeH.js";
import { t as Ct } from "./DropZone.L5mHKABK.js";
import { t as wt } from "./FileTrigger.tPk560f4.js";
import { x as Tt } from "./useDrop.2oG49goR.js";
import { t as Et } from "./FormActions.CKPrBXx2.js";
import { t as Dt } from "./FormErrorSummary.CH912UHa.js";
import { n as Ot, t as kt } from "./TextField.CrOSYYfu.js";
import { t as At } from "./TextField.BCFjhSRb.js";
import { a as jt, i as Mt, n as Nt, r as Pt, t as Ft } from "./Select.Dfm71gCx.js";
import { n as It, t as Lt } from "./RadioGroup.DmoxI20T.js";
import { n as Rt, t as zt } from "./Switch.BiPQBtnt.js";
import { t as Bt } from "./Textarea.CmzAn3JW.js";
import { n as Vt, t as Ht } from "./Switch.B-229Xv_.js";
var Ut = {};
Ut = {
	dateRange: (e) => `${e.startDate} \u{625}\u{644}\u{649} ${e.endDate}`,
	dateSelected: (e) => `${e.date} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,
	finishRangeSelectionPrompt: `انقر لإنهاء عملية تحديد نطاق التاريخ`,
	maximumDate: `آخر تاريخ متاح`,
	minimumDate: `أول تاريخ متاح`,
	next: `التالي`,
	previous: `السابق`,
	selectedDateDescription: (e) => `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.dateRange}`,
	startRangeSelectionPrompt: `انقر لبدء عملية تحديد نطاق التاريخ`,
	todayDate: (e) => `\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${e.date}`,
	todayDateSelected: (e) => `\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${e.date} \u{645}\u{62D}\u{62F}\u{62F}`
};
var Wt = {};
Wt = {
	dateRange: (e) => `${e.startDate} \u{434}\u{43E} ${e.endDate}`,
	dateSelected: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{435} ${e.date}`,
	finishRangeSelectionPrompt: `Натиснете, за да довършите избора на времеви интервал`,
	maximumDate: `Последна налична дата`,
	minimumDate: `Първа налична дата`,
	next: `Напред`,
	previous: `Назад`,
	selectedDateDescription: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,
	startRangeSelectionPrompt: `Натиснете, за да пристъпите към избора на времеви интервал`,
	todayDate: (e) => `\u{414}\u{43D}\u{435}\u{441}, ${e.date}`,
	todayDateSelected: (e) => `\u{414}\u{43D}\u{435}\u{441}, ${e.date} \u{441}\u{430} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`
};
var Gt = {};
Gt = {
	dateRange: (e) => `${e.startDate} a\u{17E} ${e.endDate}`,
	dateSelected: (e) => `Vybr\xe1no ${e.date}`,
	finishRangeSelectionPrompt: `Kliknutím dokončíte výběr rozsahu dat`,
	maximumDate: `Poslední dostupné datum`,
	minimumDate: `První dostupné datum`,
	next: `Další`,
	previous: `Předchozí`,
	selectedDateDescription: (e) => `Vybran\xe9 datum: ${e.date}`,
	selectedRangeDescription: (e) => `Vybran\xe9 obdob\xed: ${e.dateRange}`,
	startRangeSelectionPrompt: `Kliknutím zahájíte výběr rozsahu dat`,
	todayDate: (e) => `Dnes, ${e.date}`,
	todayDateSelected: (e) => `Dnes, vybr\xe1no ${e.date}`
};
var Kt = {};
Kt = {
	dateRange: (e) => `${e.startDate} til ${e.endDate}`,
	dateSelected: (e) => `${e.date} valgt`,
	finishRangeSelectionPrompt: `Klik for at fuldføre valg af datoområde`,
	maximumDate: `Sidste ledige dato`,
	minimumDate: `Første ledige dato`,
	next: `Næste`,
	previous: `Forrige`,
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) => `Valgt interval: ${e.dateRange}`,
	startRangeSelectionPrompt: `Klik for at starte valg af datoområde`,
	todayDate: (e) => `I dag, ${e.date}`,
	todayDateSelected: (e) => `I dag, ${e.date} valgt`
};
var qt = {};
qt = {
	dateRange: (e) => `${e.startDate} bis ${e.endDate}`,
	dateSelected: (e) => `${e.date} ausgew\xe4hlt`,
	finishRangeSelectionPrompt: `Klicken, um die Auswahl des Datumsbereichs zu beenden`,
	maximumDate: `Letztes verfügbares Datum`,
	minimumDate: `Erstes verfügbares Datum`,
	next: `Weiter`,
	previous: `Zurück`,
	selectedDateDescription: (e) => `Ausgew\xe4hltes Datum: ${e.date}`,
	selectedRangeDescription: (e) => `Ausgew\xe4hlter Bereich: ${e.dateRange}`,
	startRangeSelectionPrompt: `Klicken, um die Auswahl des Datumsbereichs zu beginnen`,
	todayDate: (e) => `Heute, ${e.date}`,
	todayDateSelected: (e) => `Heute, ${e.date} ausgew\xe4hlt`
};
var Jt = {};
Jt = {
	dateRange: (e) => `${e.startDate} \u{3AD}\u{3C9}\u{3C2} ${e.endDate}`,
	dateSelected: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} ${e.date}`,
	finishRangeSelectionPrompt: `Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών`,
	maximumDate: `Τελευταία διαθέσιμη ημερομηνία`,
	minimumDate: `Πρώτη διαθέσιμη ημερομηνία`,
	next: `Επόμενο`,
	previous: `Προηγούμενο`,
	selectedDateDescription: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${e.dateRange}`,
	startRangeSelectionPrompt: `Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών`,
	todayDate: (e) => `\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, ${e.date}`,
	todayDateSelected: (e) => `\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3C4}\u{3B7}\u{3BA}\u{3B5} ${e.date}`
};
var Yt = {};
Yt = {
	previous: `Previous`,
	next: `Next`,
	selectedDateDescription: (e) => `Selected Date: ${e.date}`,
	selectedRangeDescription: (e) => `Selected Range: ${e.dateRange}`,
	todayDate: (e) => `Today, ${e.date}`,
	todayDateSelected: (e) => `Today, ${e.date} selected`,
	dateSelected: (e) => `${e.date} selected`,
	startRangeSelectionPrompt: `Click to start selecting date range`,
	finishRangeSelectionPrompt: `Click to finish selecting date range`,
	minimumDate: `First available date`,
	maximumDate: `Last available date`,
	dateRange: (e) => `${e.startDate} to ${e.endDate}`
};
var Xt = {};
Xt = {
	dateRange: (e) => `${e.startDate} a ${e.endDate}`,
	dateSelected: (e) => `${e.date} seleccionado`,
	finishRangeSelectionPrompt: `Haga clic para terminar de seleccionar rango de fechas`,
	maximumDate: `Última fecha disponible`,
	minimumDate: `Primera fecha disponible`,
	next: `Siguiente`,
	previous: `Anterior`,
	selectedDateDescription: (e) => `Fecha seleccionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo seleccionado: ${e.dateRange}`,
	startRangeSelectionPrompt: `Haga clic para comenzar a seleccionar un rango de fechas`,
	todayDate: (e) => `Hoy, ${e.date}`,
	todayDateSelected: (e) => `Hoy, ${e.date} seleccionado`
};
var Zt = {};
Zt = {
	dateRange: (e) => `${e.startDate} kuni ${e.endDate}`,
	dateSelected: (e) => `${e.date} valitud`,
	finishRangeSelectionPrompt: `Klõpsake kuupäevavahemiku valimise lõpetamiseks`,
	maximumDate: `Viimane saadaolev kuupäev`,
	minimumDate: `Esimene saadaolev kuupäev`,
	next: `Järgmine`,
	previous: `Eelmine`,
	selectedDateDescription: (e) => `Valitud kuup\xe4ev: ${e.date}`,
	selectedRangeDescription: (e) => `Valitud vahemik: ${e.dateRange}`,
	startRangeSelectionPrompt: `Klõpsake kuupäevavahemiku valimiseks`,
	todayDate: (e) => `T\xe4na, ${e.date}`,
	todayDateSelected: (e) => `T\xe4na, ${e.date} valitud`
};
var Qt = {};
Qt = {
	dateRange: (e) => `${e.startDate} \u{2013} ${e.endDate}`,
	dateSelected: (e) => `${e.date} valittu`,
	finishRangeSelectionPrompt: `Lopeta päivämääräalueen valinta napsauttamalla tätä.`,
	maximumDate: `Viimeinen varattavissa oleva päivämäärä`,
	minimumDate: `Ensimmäinen varattavissa oleva päivämäärä`,
	next: `Seuraava`,
	previous: `Edellinen`,
	selectedDateDescription: (e) => `Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,
	selectedRangeDescription: (e) => `Valittu aikav\xe4li: ${e.dateRange}`,
	startRangeSelectionPrompt: `Aloita päivämääräalueen valinta napsauttamalla tätä.`,
	todayDate: (e) => `T\xe4n\xe4\xe4n, ${e.date}`,
	todayDateSelected: (e) => `T\xe4n\xe4\xe4n, ${e.date} valittu`
};
var $t = {};
$t = {
	dateRange: (e) => `${e.startDate} \xe0 ${e.endDate}`,
	dateSelected: (e) => `${e.date} s\xe9lectionn\xe9`,
	finishRangeSelectionPrompt: `Cliquer pour finir de sélectionner la plage de dates`,
	maximumDate: `Dernière date disponible`,
	minimumDate: `Première date disponible`,
	next: `Suivant`,
	previous: `Précédent`,
	selectedDateDescription: (e) => `Date s\xe9lectionn\xe9e\xa0: ${e.date}`,
	selectedRangeDescription: (e) => `Plage s\xe9lectionn\xe9e\xa0: ${e.dateRange}`,
	startRangeSelectionPrompt: `Cliquer pour commencer à sélectionner la plage de dates`,
	todayDate: (e) => `Aujourd'hui, ${e.date}`,
	todayDateSelected: (e) => `Aujourd\u{2019}hui, ${e.date} s\xe9lectionn\xe9`
};
var en = {};
en = {
	dateRange: (e) => `${e.startDate} \u{5E2}\u{5D3} ${e.endDate}`,
	dateSelected: (e) => `${e.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
	finishRangeSelectionPrompt: `חץ כדי לסיים את בחירת טווח התאריכים`,
	maximumDate: `תאריך פנוי אחרון`,
	minimumDate: `תאריך פנוי ראשון`,
	next: `הבא`,
	previous: `הקודם`,
	selectedDateDescription: (e) => `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.dateRange}`,
	startRangeSelectionPrompt: `לחץ כדי להתחיל בבחירת טווח התאריכים`,
	todayDate: (e) => `\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${e.date}`,
	todayDateSelected: (e) => `\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${e.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`
};
var tn = {};
tn = {
	dateRange: (e) => `${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `${e.date} odabran`,
	finishRangeSelectionPrompt: `Kliknite da dovršite raspon odabranih datuma`,
	maximumDate: `Posljednji raspoloživi datum`,
	minimumDate: `Prvi raspoloživi datum`,
	next: `Sljedeći`,
	previous: `Prethodni`,
	selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Odabrani raspon: ${e.dateRange}`,
	startRangeSelectionPrompt: `Kliknite da započnete raspon odabranih datuma`,
	todayDate: (e) => `Danas, ${e.date}`,
	todayDateSelected: (e) => `Danas, odabran ${e.date}`
};
var nn = {};
nn = {
	dateRange: (e) => `${e.startDate}\u{2013}${e.endDate}`,
	dateSelected: (e) => `${e.date} kiv\xe1lasztva`,
	finishRangeSelectionPrompt: `Kattintson a dátumtartomány kijelölésének befejezéséhez`,
	maximumDate: `Utolsó elérhető dátum`,
	minimumDate: `Az első elérhető dátum`,
	next: `Következő`,
	previous: `Előző`,
	selectedDateDescription: (e) => `Kijel\xf6lt d\xe1tum: ${e.date}`,
	selectedRangeDescription: (e) => `Kijel\xf6lt tartom\xe1ny: ${e.dateRange}`,
	startRangeSelectionPrompt: `Kattintson a dátumtartomány kijelölésének indításához`,
	todayDate: (e) => `Ma, ${e.date}`,
	todayDateSelected: (e) => `Ma, ${e.date} kijel\xf6lve`
};
var rn = {};
rn = {
	dateRange: (e) => `Da ${e.startDate} a ${e.endDate}`,
	dateSelected: (e) => `${e.date} selezionata`,
	finishRangeSelectionPrompt: `Fai clic per completare la selezione dell’intervallo di date`,
	maximumDate: `Ultima data disponibile`,
	minimumDate: `Prima data disponibile`,
	next: `Successivo`,
	previous: `Precedente`,
	selectedDateDescription: (e) => `Data selezionata: ${e.date}`,
	selectedRangeDescription: (e) => `Intervallo selezionato: ${e.dateRange}`,
	startRangeSelectionPrompt: `Fai clic per selezionare l’intervallo di date`,
	todayDate: (e) => `Oggi, ${e.date}`,
	todayDateSelected: (e) => `Oggi, ${e.date} selezionata`
};
var an = {};
an = {
	dateRange: (e) => `${e.startDate} \u{304B}\u{3089} ${e.endDate}`,
	dateSelected: (e) => `${e.date} \u{3092}\u{9078}\u{629E}`,
	finishRangeSelectionPrompt: `クリックして日付範囲の選択を終了`,
	maximumDate: `最終利用可能日`,
	minimumDate: `最初の利用可能日`,
	next: `次へ`,
	previous: `前へ`,
	selectedDateDescription: (e) => `\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${e.date}`,
	selectedRangeDescription: (e) => `\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${e.dateRange}`,
	startRangeSelectionPrompt: `クリックして日付範囲の選択を開始`,
	todayDate: (e) => `\u{672C}\u{65E5}\u{3001}${e.date}`,
	todayDateSelected: (e) => `\u{672C}\u{65E5}\u{3001}${e.date} \u{3092}\u{9078}\u{629E}`
};
var on = {};
on = {
	dateRange: (e) => `${e.startDate} ~ ${e.endDate}`,
	dateSelected: (e) => `${e.date} \u{C120}\u{D0DD}\u{B428}`,
	finishRangeSelectionPrompt: `날짜 범위 선택을 완료하려면 클릭하십시오.`,
	maximumDate: `마지막으로 사용 가능한 일자`,
	minimumDate: `처음으로 사용 가능한 일자`,
	next: `다음`,
	previous: `이전`,
	selectedDateDescription: (e) => `\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${e.dateRange}`,
	startRangeSelectionPrompt: `날짜 범위 선택을 시작하려면 클릭하십시오.`,
	todayDate: (e) => `\u{C624}\u{B298}, ${e.date}`,
	todayDateSelected: (e) => `\u{C624}\u{B298}, ${e.date} \u{C120}\u{D0DD}\u{B428}`
};
var sn = {};
sn = {
	dateRange: (e) => `Nuo ${e.startDate} iki ${e.endDate}`,
	dateSelected: (e) => `Pasirinkta ${e.date}`,
	finishRangeSelectionPrompt: `Spustelėkite, kad baigtumėte pasirinkti datų intervalą`,
	maximumDate: `Paskutinė galima data`,
	minimumDate: `Pirmoji galima data`,
	next: `Paskesnis`,
	previous: `Ankstesnis`,
	selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
	selectedRangeDescription: (e) => `Pasirinktas intervalas: ${e.dateRange}`,
	startRangeSelectionPrompt: `Spustelėkite, kad pradėtumėte pasirinkti datų intervalą`,
	todayDate: (e) => `\u{160}iandien, ${e.date}`,
	todayDateSelected: (e) => `\u{160}iandien, pasirinkta ${e.date}`
};
var cn = {};
cn = {
	dateRange: (e) => `No ${e.startDate} l\u{12B}dz ${e.endDate}`,
	dateSelected: (e) => `Atlas\u{12B}ts: ${e.date}`,
	finishRangeSelectionPrompt: `Noklikšķiniet, lai pabeigtu datumu diapazona atlasi`,
	maximumDate: `Pēdējais pieejamais datums`,
	minimumDate: `Pirmais pieejamais datums`,
	next: `Tālāk`,
	previous: `Atpakaļ`,
	selectedDateDescription: (e) => `Atlas\u{12B}tais datums: ${e.date}`,
	selectedRangeDescription: (e) => `Atlas\u{12B}tais diapazons: ${e.dateRange}`,
	startRangeSelectionPrompt: `Noklikšķiniet, lai sāktu datumu diapazona atlasi`,
	todayDate: (e) => `\u{160}odien, ${e.date}`,
	todayDateSelected: (e) => `Atlas\u{12B}ta \u{161}odiena, ${e.date}`
};
var ln = {};
ln = {
	dateRange: (e) => `${e.startDate} til ${e.endDate}`,
	dateSelected: (e) => `${e.date} valgt`,
	finishRangeSelectionPrompt: `Klikk for å fullføre valg av datoområde`,
	maximumDate: `Siste tilgjengelige dato`,
	minimumDate: `Første tilgjengelige dato`,
	next: `Neste`,
	previous: `Forrige`,
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) => `Valgt omr\xe5de: ${e.dateRange}`,
	startRangeSelectionPrompt: `Klikk for å starte valg av datoområde`,
	todayDate: (e) => `I dag, ${e.date}`,
	todayDateSelected: (e) => `I dag, ${e.date} valgt`
};
var un = {};
un = {
	dateRange: (e) => `${e.startDate} tot ${e.endDate}`,
	dateSelected: (e) => `${e.date} geselecteerd`,
	finishRangeSelectionPrompt: `Klik om de selectie van het datumbereik te voltooien`,
	maximumDate: `Laatste beschikbare datum`,
	minimumDate: `Eerste beschikbare datum`,
	next: `Volgende`,
	previous: `Vorige`,
	selectedDateDescription: (e) => `Geselecteerde datum: ${e.date}`,
	selectedRangeDescription: (e) => `Geselecteerd bereik: ${e.dateRange}`,
	startRangeSelectionPrompt: `Klik om het datumbereik te selecteren`,
	todayDate: (e) => `Vandaag, ${e.date}`,
	todayDateSelected: (e) => `Vandaag, ${e.date} geselecteerd`
};
var dn = {};
dn = {
	dateRange: (e) => `${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `Wybrano ${e.date}`,
	finishRangeSelectionPrompt: `Kliknij, aby zakończyć wybór zakresu dat`,
	maximumDate: `Ostatnia dostępna data`,
	minimumDate: `Pierwsza dostępna data`,
	next: `Dalej`,
	previous: `Wstecz`,
	selectedDateDescription: (e) => `Wybrana data: ${e.date}`,
	selectedRangeDescription: (e) => `Wybrany zakres: ${e.dateRange}`,
	startRangeSelectionPrompt: `Kliknij, aby rozpocząć wybór zakresu dat`,
	todayDate: (e) => `Dzisiaj, ${e.date}`,
	todayDateSelected: (e) => `Dzisiaj wybrano ${e.date}`
};
var fn = {};
fn = {
	dateRange: (e) => `${e.startDate} a ${e.endDate}`,
	dateSelected: (e) => `${e.date} selecionado`,
	finishRangeSelectionPrompt: `Clique para concluir a seleção do intervalo de datas`,
	maximumDate: `Última data disponível`,
	minimumDate: `Primeira data disponível`,
	next: `Próximo`,
	previous: `Anterior`,
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo selecionado: ${e.dateRange}`,
	startRangeSelectionPrompt: `Clique para iniciar a seleção do intervalo de datas`,
	todayDate: (e) => `Hoje, ${e.date}`,
	todayDateSelected: (e) => `Hoje, ${e.date} selecionado`
};
var pn = {};
pn = {
	dateRange: (e) => `${e.startDate} a ${e.endDate}`,
	dateSelected: (e) => `${e.date} selecionado`,
	finishRangeSelectionPrompt: `Clique para terminar de selecionar o intervalo de datas`,
	maximumDate: `Última data disponível`,
	minimumDate: `Primeira data disponível`,
	next: `Próximo`,
	previous: `Anterior`,
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo selecionado: ${e.dateRange}`,
	startRangeSelectionPrompt: `Clique para começar a selecionar o intervalo de datas`,
	todayDate: (e) => `Hoje, ${e.date}`,
	todayDateSelected: (e) => `Hoje, ${e.date} selecionado`
};
var mn = {};
mn = {
	dateRange: (e) => `De la ${e.startDate} p\xe2n\u{103} la ${e.endDate}`,
	dateSelected: (e) => `${e.date} selectat\u{103}`,
	finishRangeSelectionPrompt: `Apăsaţi pentru a finaliza selecţia razei pentru dată`,
	maximumDate: `Ultima dată disponibilă`,
	minimumDate: `Prima dată disponibilă`,
	next: `Următorul`,
	previous: `Înainte`,
	selectedDateDescription: (e) => `Dat\u{103} selectat\u{103}: ${e.date}`,
	selectedRangeDescription: (e) => `Interval selectat: ${e.dateRange}`,
	startRangeSelectionPrompt: `Apăsaţi pentru a începe selecţia razei pentru dată`,
	todayDate: (e) => `Ast\u{103}zi, ${e.date}`,
	todayDateSelected: (e) => `Azi, ${e.date} selectat\u{103}`
};
var hn = {};
hn = {
	dateRange: (e) => `\u{421} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,
	dateSelected: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
	finishRangeSelectionPrompt: `Щелкните, чтобы завершить выбор диапазона дат`,
	maximumDate: `Последняя доступная дата`,
	minimumDate: `Первая доступная дата`,
	next: `Далее`,
	previous: `Назад`,
	selectedDateDescription: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,
	startRangeSelectionPrompt: `Щелкните, чтобы начать выбор диапазона дат`,
	todayDate: (e) => `\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, ${e.date}`,
	todayDateSelected: (e) => `\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`
};
var gn = {};
gn = {
	dateRange: (e) => `Od ${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `Vybrat\xfd d\xe1tum ${e.date}`,
	finishRangeSelectionPrompt: `Kliknutím dokončíte výber rozsahu dátumov`,
	maximumDate: `Posledný dostupný dátum`,
	minimumDate: `Prvý dostupný dátum`,
	next: `Nasledujúce`,
	previous: `Predchádzajúce`,
	selectedDateDescription: (e) => `Vybrat\xfd d\xe1tum: ${e.date}`,
	selectedRangeDescription: (e) => `Vybrat\xfd rozsah: ${e.dateRange}`,
	startRangeSelectionPrompt: `Kliknutím spustíte výber rozsahu dátumov`,
	todayDate: (e) => `Dnes ${e.date}`,
	todayDateSelected: (e) => `Vybrat\xfd dne\u{161}n\xfd d\xe1tum ${e.date}`
};
var _n = {};
_n = {
	dateRange: (e) => `${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `${e.date} izbrano`,
	finishRangeSelectionPrompt: `Kliknite za dokončanje izbire datumskega obsega`,
	maximumDate: `Zadnji razpoložljivi datum`,
	minimumDate: `Prvi razpoložljivi datum`,
	next: `Naprej`,
	previous: `Nazaj`,
	selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Izbrano obmo\u{10D}je: ${e.dateRange}`,
	startRangeSelectionPrompt: `Kliknite za začetek izbire datumskega obsega`,
	todayDate: (e) => `Danes, ${e.date}`,
	todayDateSelected: (e) => `Danes, ${e.date} izbrano`
};
var vn = {};
vn = {
	dateRange: (e) => `${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `${e.date} izabran`,
	finishRangeSelectionPrompt: `Kliknite da dovršite opseg izabranih datuma`,
	maximumDate: `Zadnji raspoloživi datum`,
	minimumDate: `Prvi raspoloživi datum`,
	next: `Sledeći`,
	previous: `Prethodni`,
	selectedDateDescription: (e) => `Izabrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Izabrani period: ${e.dateRange}`,
	startRangeSelectionPrompt: `Kliknite da započnete opseg izabranih datuma`,
	todayDate: (e) => `Danas, ${e.date}`,
	todayDateSelected: (e) => `Danas, izabran ${e.date}`
};
var yn = {};
yn = {
	dateRange: (e) => `${e.startDate} till ${e.endDate}`,
	dateSelected: (e) => `${e.date} har valts`,
	finishRangeSelectionPrompt: `Klicka för att avsluta val av datumintervall`,
	maximumDate: `Sista tillgängliga datum`,
	minimumDate: `Första tillgängliga datum`,
	next: `Nästa`,
	previous: `Föregående`,
	selectedDateDescription: (e) => `Valt datum: ${e.date}`,
	selectedRangeDescription: (e) => `Valt intervall: ${e.dateRange}`,
	startRangeSelectionPrompt: `Klicka för att välja datumintervall`,
	todayDate: (e) => `Idag, ${e.date}`,
	todayDateSelected: (e) => `Idag, ${e.date} har valts`
};
var bn = {};
bn = {
	dateRange: (e) => `${e.startDate} - ${e.endDate}`,
	dateSelected: (e) => `${e.date} se\xe7ildi`,
	finishRangeSelectionPrompt: `Tarih aralığı seçimini tamamlamak için tıklayın`,
	maximumDate: `Son müsait tarih`,
	minimumDate: `İlk müsait tarih`,
	next: `Sonraki`,
	previous: `Önceki`,
	selectedDateDescription: (e) => `Se\xe7ilen Tarih: ${e.date}`,
	selectedRangeDescription: (e) => `Se\xe7ilen Aral\u{131}k: ${e.dateRange}`,
	startRangeSelectionPrompt: `Tarih aralığı seçimini başlatmak için tıklayın`,
	todayDate: (e) => `Bug\xfcn, ${e.date}`,
	todayDateSelected: (e) => `Bug\xfcn, ${e.date} se\xe7ildi`
};
var xn = {};
xn = {
	dateRange: (e) => `${e.startDate} \u{2014} ${e.endDate}`,
	dateSelected: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
	finishRangeSelectionPrompt: `Натисніть, щоб завершити вибір діапазону дат`,
	maximumDate: `Остання доступна дата`,
	minimumDate: `Перша доступна дата`,
	next: `Наступний`,
	previous: `Попередній`,
	selectedDateDescription: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,
	startRangeSelectionPrompt: `Натисніть, щоб почати вибір діапазону дат`,
	todayDate: (e) => `\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, ${e.date}`,
	todayDateSelected: (e) => `\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`
};
var Sn = {};
Sn = {
	dateRange: (e) => `${e.startDate} \u{81F3} ${e.endDate}`,
	dateSelected: (e) => `\u{5DF2}\u{9009}\u{62E9} ${e.date}`,
	finishRangeSelectionPrompt: `单击以完成选择日期范围`,
	maximumDate: `最后一个可用日期`,
	minimumDate: `第一个可用日期`,
	next: `下一页`,
	previous: `上一页`,
	selectedDateDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
	selectedRangeDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.dateRange}`,
	startRangeSelectionPrompt: `单击以开始选择日期范围`,
	todayDate: (e) => `\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`,
	todayDateSelected: (e) => `\u{5DF2}\u{9009}\u{62E9}\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`
};
var Cn = {};
Cn = {
	dateRange: (e) => `${e.startDate} \u{81F3} ${e.endDate}`,
	dateSelected: (e) => `\u{5DF2}\u{9078}\u{53D6} ${e.date}`,
	finishRangeSelectionPrompt: `按一下以完成選取日期範圍`,
	maximumDate: `最後一個可用日期`,
	minimumDate: `第一個可用日期`,
	next: `下一頁`,
	previous: `上一頁`,
	selectedDateDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
	selectedRangeDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${e.dateRange}`,
	startRangeSelectionPrompt: `按一下以開始選取日期範圍`,
	todayDate: (e) => `\u{4ECA}\u{5929}\u{FF0C}${e.date}`,
	todayDateSelected: (e) => `\u{5DF2}\u{9078}\u{53D6}\u{4ECA}\u{5929}\u{FF0C}${e.date}`
};
var wn = {};
wn = {
	"ar-AE": Ut,
	"bg-BG": Wt,
	"cs-CZ": Gt,
	"da-DK": Kt,
	"de-DE": qt,
	"el-GR": Jt,
	"en-US": Yt,
	"es-ES": Xt,
	"et-EE": Zt,
	"fi-FI": Qt,
	"fr-FR": $t,
	"he-IL": en,
	"hr-HR": tn,
	"hu-HU": nn,
	"it-IT": rn,
	"ja-JP": an,
	"ko-KR": on,
	"lt-LT": sn,
	"lv-LV": cn,
	"nb-NO": ln,
	"nl-NL": un,
	"pl-PL": dn,
	"pt-BR": fn,
	"pt-PT": pn,
	"ro-RO": mn,
	"ru-RU": hn,
	"sk-SK": gn,
	"sl-SI": _n,
	"sr-SP": vn,
	"sv-SE": yn,
	"tr-TR": bn,
	"uk-UA": xn,
	"zh-CN": Sn,
	"zh-TW": Cn
};
var W = t(ne(), 1);
function Tn(e, t) {
	let n = (0, W.useRef)(null);
	return e && n.current && t(e, n.current) && (e = n.current), n.current = e, e;
}
function En(e, t) {
	return e - t * Math.floor(e / t);
}
var Dn = 1721426;
function On(e, t, n, r) {
	t = An(e, t);
	let i = t - 1, a = -2;
	return n <= 2 ? a = 0 : kn(t) && (a = -1), 1721425 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + a + r);
}
function kn(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function An(e, t) {
	return e === `BC` ? 1 - t : t;
}
function jn(e) {
	let t = `AD`;
	return e <= 0 && (t = `BC`, e = 1 - e), [t, e];
}
var Mn = {
	standard: [
		31,
		28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	],
	leapyear: [
		31,
		29,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	]
}, G = class {
	fromJulianDay(e) {
		let t = e, n = t - Dn, r = Math.floor(n / 146097), i = En(n, 146097), a = Math.floor(i / 36524), o = En(i, 36524), s = Math.floor(o / 1461), c = En(o, 1461), l = Math.floor(c / 365), [u, d] = jn(r * 400 + a * 100 + s * 4 + l + +(a !== 4 && l !== 4)), f = t - On(u, d, 1, 1), p = 2;
		t < On(u, d, 3, 1) ? p = 0 : kn(d) && (p = 1);
		let m = Math.floor(((f + p) * 12 + 373) / 367);
		return new X(u, d, m, t - On(u, d, m, 1) + 1);
	}
	toJulianDay(e) {
		return On(e.era, e.year, e.month, e.day);
	}
	getDaysInMonth(e) {
		return Mn[kn(e.year) ? `leapyear` : `standard`][e.month - 1];
	}
	getMonthsInYear(e) {
		return 12;
	}
	getDaysInYear(e) {
		return kn(e.year) ? 366 : 365;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 31;
	}
	getYearsInEra(e) {
		return 9999;
	}
	getEras() {
		return [`BC`, `AD`];
	}
	isInverseEra(e) {
		return e.era === `BC`;
	}
	balanceDate(e) {
		e.year <= 0 && (e.era = e.era === `BC` ? `AD` : `BC`, e.year = 1 - e.year);
	}
	constructor() {
		this.identifier = `gregory`;
	}
}, Nn = {
	"001": 1,
	AD: 1,
	AE: 6,
	AF: 6,
	AI: 1,
	AL: 1,
	AM: 1,
	AN: 1,
	AR: 1,
	AT: 1,
	AU: 1,
	AX: 1,
	AZ: 1,
	BA: 1,
	BE: 1,
	BG: 1,
	BH: 6,
	BM: 1,
	BN: 1,
	BY: 1,
	CH: 1,
	CL: 1,
	CM: 1,
	CN: 1,
	CR: 1,
	CY: 1,
	CZ: 1,
	DE: 1,
	DJ: 6,
	DK: 1,
	DZ: 6,
	EC: 1,
	EE: 1,
	EG: 6,
	ES: 1,
	FI: 1,
	FJ: 1,
	FO: 1,
	FR: 1,
	GB: 1,
	GE: 1,
	GF: 1,
	GP: 1,
	GR: 1,
	HR: 1,
	HU: 1,
	IE: 1,
	IQ: 6,
	IR: 6,
	IS: 1,
	IT: 1,
	JO: 6,
	KG: 1,
	KW: 6,
	KZ: 1,
	LB: 1,
	LI: 1,
	LK: 1,
	LT: 1,
	LU: 1,
	LV: 1,
	LY: 6,
	MC: 1,
	MD: 1,
	ME: 1,
	MK: 1,
	MN: 1,
	MQ: 1,
	MV: 5,
	MY: 1,
	NL: 1,
	NO: 1,
	NZ: 1,
	OM: 6,
	PL: 1,
	QA: 6,
	RE: 1,
	RO: 1,
	RS: 1,
	RU: 1,
	SD: 6,
	SE: 1,
	SI: 1,
	SK: 1,
	SM: 1,
	SY: 6,
	TJ: 1,
	TM: 1,
	TR: 1,
	UA: 1,
	UY: 1,
	UZ: 1,
	VA: 1,
	VN: 1,
	XK: 1
};
function K(e, t) {
	return t = J(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Pn(e, t) {
	return t = J(t, e.calendar), e = Yn(e), t = Yn(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Fn(e, t) {
	return In(e.calendar, t.calendar) && K(e, t);
}
function In(e, t) {
	return e.isEqual?.(t) ?? t.isEqual?.(e) ?? e.identifier === t.identifier;
}
function Ln(e, t) {
	return K(e, Vn(t));
}
var Rn = {
	sun: 0,
	mon: 1,
	tue: 2,
	wed: 3,
	thu: 4,
	fri: 5,
	sat: 6
};
function zn(e, t, n) {
	let r = e.calendar.toJulianDay(e), i = n ? Rn[n] : rr(t), a = Math.ceil(r + 1 - i) % 7;
	return a < 0 && (a += 7), a;
}
function Bn(e) {
	return _r(Date.now(), e);
}
function Vn(e) {
	return q(Bn(e));
}
function Hn(e, t) {
	return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function Un(e, t) {
	return Wn(e) - Wn(t);
}
function Wn(e) {
	return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
var Gn = null, Kn = !1;
function qn() {
	return Gn ??= new Intl.DateTimeFormat().resolvedOptions().timeZone, Gn;
}
function Jn() {
	return Kn;
}
function Yn(e) {
	return e.subtract({ days: e.day - 1 });
}
function Xn(e) {
	return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function Zn(e) {
	return Yn(e.subtract({ months: e.month - 1 }));
}
function Qn(e, t, n) {
	let r = zn(e, t, n);
	return e.subtract({ days: r });
}
function $n(e, t, n) {
	return Qn(e, t, n).add({ days: 6 });
}
var er = new Map(), tr = new Map();
function nr(e) {
	if (Intl.Locale) {
		let t = er.get(e);
		return t || (t = new Intl.Locale(e).maximize().region, t && er.set(e, t)), t;
	}
	let t = e.split(`-`)[1];
	return t === `u` ? void 0 : t;
}
function rr(e) {
	let t = tr.get(e);
	if (!t) {
		if (Intl.Locale) {
			let n = new Intl.Locale(e);
			if (`getWeekInfo` in n && (t = n.getWeekInfo(), t)) return tr.set(e, t), t.firstDay;
		}
		let n = nr(e);
		if (e.includes(`-fw-`)) {
			let n = e.split(`-fw-`)[1].split(`-`)[0];
			t = n === `mon` ? { firstDay: 1 } : n === `tue` ? { firstDay: 2 } : n === `wed` ? { firstDay: 3 } : n === `thu` ? { firstDay: 4 } : n === `fri` ? { firstDay: 5 } : n === `sat` ? { firstDay: 6 } : { firstDay: 0 };
		} else t = e.includes(`-ca-iso8601`) ? { firstDay: 1 } : { firstDay: n && Nn[n] || 0 };
		tr.set(e, t);
	}
	return t.firstDay;
}
function ir(e, t, n) {
	let r = e.calendar.getDaysInMonth(e);
	return Math.ceil((zn(Yn(e), t, n) + r) / 7);
}
function ar(e, t) {
	return e && t ? e.compare(t) <= 0 ? e : t : e || t;
}
function or(e, t) {
	return e && t ? e.compare(t) >= 0 ? e : t : e || t;
}
function sr(e) {
	return e = J(e, new G()), cr(An(e.era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function cr(e, t, n, r, i, a, o) {
	let s = new Date();
	return s.setUTCHours(r, i, a, o), s.setUTCFullYear(e, t - 1, n), s.getTime();
}
function lr(e, t) {
	if (t === `UTC`) return 0;
	if (e > 0 && t === qn() && !Jn()) return new Date(e).getTimezoneOffset() * -6e4;
	let { year: n, month: r, day: i, hour: a, minute: o, second: s } = dr(e, t);
	return cr(n, r, i, a, o, s, 0) - Math.floor(e / 1e3) * 1e3;
}
var ur = new Map();
function dr(e, t) {
	let n = ur.get(t);
	n || (n = new Intl.DateTimeFormat(`en-US`, {
		timeZone: t,
		hour12: !1,
		era: `short`,
		year: `numeric`,
		month: `numeric`,
		day: `numeric`,
		hour: `numeric`,
		minute: `numeric`,
		second: `numeric`
	}), ur.set(t, n));
	let r = n.formatToParts(new Date(e)), i = {};
	for (let e of r) e.type !== `literal` && (i[e.type] = e.value);
	return {
		year: i.era === `BC` || i.era === `B` ? -i.year + 1 : +i.year,
		month: +i.month,
		day: +i.day,
		hour: i.hour === `24` ? 0 : +i.hour,
		minute: +i.minute,
		second: +i.second
	};
}
var fr = 864e5;
function pr(e, t, n, r) {
	return (n === r ? [n] : [n, r]).filter((n) => mr(e, t, n));
}
function mr(e, t, n) {
	let r = dr(n, t);
	return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function hr(e, t, n = `compatible`) {
	let r = vr(e);
	if (t === `UTC`) return sr(r);
	if (t === qn() && n === `compatible` && !Jn()) {
		r = J(r, new G());
		let e = new Date(), t = An(r.era, r.year);
		return e.setFullYear(t, r.month - 1, r.day), e.setHours(r.hour, r.minute, r.second, r.millisecond), e.getTime();
	}
	let i = sr(r), a = lr(i - fr, t), o = lr(i + fr, t), s = pr(r, t, i - a, i - o);
	if (s.length === 1) return s[0];
	if (s.length > 1) switch (n) {
		case `compatible`:
		case `earlier`: return s[0];
		case `later`: return s[s.length - 1];
		case `reject`: throw RangeError(`Multiple possible absolute times found`);
	}
	switch (n) {
		case `earlier`: return Math.min(i - a, i - o);
		case `compatible`:
		case `later`: return Math.max(i - a, i - o);
		case `reject`: throw RangeError(`No such absolute time found`);
	}
}
function gr(e, t, n = `compatible`) {
	return new Date(hr(e, t, n));
}
function _r(e, t) {
	let n = lr(e, t), r = new Date(e + n), i = r.getUTCFullYear(), a = r.getUTCMonth() + 1, o = r.getUTCDate(), s = r.getUTCHours(), c = r.getUTCMinutes(), l = r.getUTCSeconds(), u = r.getUTCMilliseconds();
	return new oi(i < 1 ? `BC` : `AD`, i < 1 ? -i + 1 : i, a, o, t, n, s, c, l, u);
}
function q(e) {
	return new X(e.calendar, e.era, e.year, e.month, e.day);
}
function vr(e, t) {
	let n = 0, r = 0, i = 0, a = 0;
	if (`timeZone` in e) ({hour: n, minute: r, second: i, millisecond: a} = e);
	else if (`hour` in e && !t) return e;
	return t && ({hour: n, minute: r, second: i, millisecond: a} = t), new ai(e.calendar, e.era, e.year, e.month, e.day, n, r, i, a);
}
function J(e, t) {
	if (In(e.calendar, t)) return e;
	let n = t.fromJulianDay(e.calendar.toJulianDay(e)), r = e.copy();
	return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, kr(r), r;
}
function yr(e, t, n) {
	return e instanceof oi ? e.timeZone === t ? e : xr(e, t) : _r(hr(e, t, n), t);
}
function br(e) {
	let t = sr(e) - e.offset;
	return new Date(t);
}
function xr(e, t) {
	return J(_r(sr(e) - e.offset, t), e.calendar);
}
function Sr(e) {
	return xr(e, qn());
}
var Cr = 36e5;
function wr(e, t) {
	let n = e.copy(), r = `hour` in n ? Lr(n, t) : 0;
	Tr(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, Er(n), Or(n), n.day += (t.weeks || 0) * 7, n.day += t.days || 0, n.day += r, Dr(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
	let i = n.calendar.getYearsInEra(n);
	if (n.year > i) {
		let e = n.calendar.isInverseEra?.(n);
		n.year = i, n.month = e ? 1 : n.calendar.getMonthsInYear(n), n.day = e ? 1 : n.calendar.getDaysInMonth(n);
	}
	n.month < 1 && (n.month = 1, n.day = 1);
	let a = n.calendar.getMonthsInYear(n);
	return n.month > a && (n.month = a, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n;
}
function Tr(e, t) {
	e.calendar.isInverseEra?.(e) && (t = -t), e.year += t;
}
function Er(e) {
	for (; e.month < 1;) Tr(e, -1), e.month += e.calendar.getMonthsInYear(e);
	let t = 0;
	for (; e.month > (t = e.calendar.getMonthsInYear(e));) e.month -= t, Tr(e, 1);
}
function Dr(e) {
	for (; e.day < 1;) e.month--, Er(e), e.day += e.calendar.getDaysInMonth(e);
	for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, Er(e);
}
function Or(e) {
	e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function kr(e) {
	e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Or(e);
}
function Ar(e) {
	let t = {};
	for (let n in e) typeof e[n] == `number` && (t[n] = -e[n]);
	return t;
}
function jr(e, t) {
	return wr(e, Ar(t));
}
function Mr(e, t) {
	let n = e.copy();
	return t.era != null && (n.era = t.era), t.year != null && (n.year = t.year), t.month != null && (n.month = t.month), t.day != null && (n.day = t.day), kr(n), n;
}
function Nr(e, t) {
	let n = e.copy();
	return t.hour != null && (n.hour = t.hour), t.minute != null && (n.minute = t.minute), t.second != null && (n.second = t.second), t.millisecond != null && (n.millisecond = t.millisecond), Fr(n), n;
}
function Pr(e) {
	e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Ir(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Ir(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Ir(e.minute, 60);
	let t = Math.floor(e.hour / 24);
	return e.hour = Ir(e.hour, 24), t;
}
function Fr(e) {
	e.millisecond = Math.max(0, Math.min(e.millisecond, 999)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Ir(e, t) {
	let n = e % t;
	return n < 0 && (n += t), n;
}
function Lr(e, t) {
	return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, Pr(e);
}
function Rr(e, t) {
	let n = e.copy();
	return Lr(n, t), n;
}
function zr(e, t) {
	return Rr(e, Ar(t));
}
function Br(e, t, n, r) {
	let i = e.copy();
	switch (t) {
		case `era`: {
			let t = e.calendar.getEras(), a = t.indexOf(e.era);
			if (a < 0) throw Error(`Invalid era: ` + e.era);
			a = Hr(a, n, 0, t.length - 1, r?.round), i.era = t[a], kr(i);
			break;
		}
		case `year`:
			i.calendar.isInverseEra?.(i) && (n = -n), i.year = Hr(e.year, n, -1 / 0, 9999, r?.round), i.year === -1 / 0 && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
			break;
		case `month`:
			i.month = Hr(e.month, n, 1, e.calendar.getMonthsInYear(e), r?.round);
			break;
		case `day`:
			i.day = Hr(e.day, n, 1, e.calendar.getDaysInMonth(e), r?.round);
			break;
		default: throw Error(`Unsupported field ` + t);
	}
	return e.calendar.balanceDate && e.calendar.balanceDate(i), kr(i), i;
}
function Vr(e, t, n, r) {
	let i = e.copy();
	switch (t) {
		case `hour`: {
			let t = e.hour, a = 0, o = 23;
			if (r?.hourCycle === 12) {
				let e = t >= 12;
				a = e ? 12 : 0, o = e ? 23 : 11;
			}
			i.hour = Hr(t, n, a, o, r?.round);
			break;
		}
		case `minute`:
			i.minute = Hr(e.minute, n, 0, 59, r?.round);
			break;
		case `second`:
			i.second = Hr(e.second, n, 0, 59, r?.round);
			break;
		case `millisecond`:
			i.millisecond = Hr(e.millisecond, n, 0, 999, r?.round);
			break;
		default: throw Error(`Unsupported field ` + t);
	}
	return i;
}
function Hr(e, t, n, r, i = !1) {
	if (i) {
		e += Math.sign(t), e < n && (e = r);
		let i = Math.abs(t);
		e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i, e > r && (e = n);
	} else e += t, e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
	return e;
}
function Ur(e, t) {
	let n;
	return n = t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0 ? hr(wr(vr(e), {
		years: t.years,
		months: t.months,
		weeks: t.weeks,
		days: t.days
	}), e.timeZone) : sr(e) - e.offset, n += t.milliseconds || 0, n += (t.seconds || 0) * 1e3, n += (t.minutes || 0) * 6e4, n += (t.hours || 0) * 36e5, J(_r(n, e.timeZone), e.calendar);
}
function Wr(e, t) {
	return Ur(e, Ar(t));
}
function Gr(e, t, n, r) {
	switch (t) {
		case `hour`: {
			let t = 0, i = 23;
			if (r?.hourCycle === 12) {
				let n = e.hour >= 12;
				t = n ? 12 : 0, i = n ? 23 : 11;
			}
			let a = vr(e), o = J(Nr(a, { hour: t }), new G()), s = [hr(o, e.timeZone, `earlier`), hr(o, e.timeZone, `later`)].filter((t) => _r(t, e.timeZone).day === o.day)[0], c = J(Nr(a, { hour: i }), new G()), l = [hr(c, e.timeZone, `earlier`), hr(c, e.timeZone, `later`)].filter((t) => _r(t, e.timeZone).day === c.day).pop(), u = sr(e) - e.offset, d = Math.floor(u / Cr), f = u % Cr;
			return u = Hr(d, n, Math.floor(s / Cr), Math.floor(l / Cr), r?.round) * Cr + f, J(_r(u, e.timeZone), e.calendar);
		}
		case `minute`:
		case `second`:
		case `millisecond`: return Vr(e, t, n, r);
		case `era`:
		case `year`:
		case `month`:
		case `day`: return J(_r(hr(Br(vr(e), t, n, r), e.timeZone), e.timeZone), e.calendar);
		default: throw Error(`Unsupported field ` + t);
	}
}
function Kr(e, t, n) {
	let r = vr(e), i = Nr(Mr(r, t), t);
	return i.compare(r) === 0 ? e : J(_r(hr(i, e.timeZone, n), e.timeZone), e.calendar);
}
var qr = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/, Jr = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/, Yr = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/;
function Xr(e) {
	let t = e.match(qr);
	if (!t) throw Yr.test(e) ? Error(`Invalid ISO 8601 date string: ${e}. Use parseAbsolute() instead.`) : Error(`Invalid ISO 8601 date string: ` + e);
	let n = new X(Y(t[1], 0, 9999), Y(t[2], 1, 12), 1);
	return n.day = Y(t[3], 1, n.calendar.getDaysInMonth(n)), n;
}
function Zr(e) {
	let t = e.match(Jr);
	if (!t) throw Yr.test(e) ? Error(`Invalid ISO 8601 date time string: ${e}. Use parseAbsolute() instead.`) : Error(`Invalid ISO 8601 date time string: ` + e);
	let n = Y(t[1], -9999, 9999), r = new ai(n < 1 ? `BC` : `AD`, n < 1 ? -n + 1 : n, Y(t[2], 1, 12), 1, t[4] ? Y(t[4], 0, 23) : 0, t[5] ? Y(t[5], 0, 59) : 0, t[6] ? Y(t[6], 0, 59) : 0, t[7] ? Y(t[7], 0, 1 / 0) * 1e3 : 0);
	return r.day = Y(t[3], 0, r.calendar.getDaysInMonth(r)), r;
}
function Y(e, t, n) {
	let r = Number(e);
	if (r < t || r > n) throw RangeError(`Value out of range: ${t} <= ${r} <= ${n}`);
	return r;
}
function Qr(e) {
	return `${String(e.hour).padStart(2, `0`)}:${String(e.minute).padStart(2, `0`)}:${String(e.second).padStart(2, `0`)}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ``}`;
}
function $r(e) {
	let t = J(e, new G()), n;
	return n = t.era === `BC` ? t.year === 1 ? `0000` : `-` + String(Math.abs(1 - t.year)).padStart(6, `00`) : String(t.year).padStart(4, `0`), `${n}-${String(t.month).padStart(2, `0`)}-${String(t.day).padStart(2, `0`)}`;
}
function ei(e) {
	return `${$r(e)}T${Qr(e)}`;
}
function ti(e) {
	let t = Math.sign(e) < 0 ? `-` : `+`;
	e = Math.abs(e);
	let n = Math.floor(e / 36e5), r = Math.floor(e % 36e5 / 6e4), i = Math.floor(e % 36e5 % 6e4 / 1e3), a = `${t}${String(n).padStart(2, `0`)}:${String(r).padStart(2, `0`)}`;
	return i !== 0 && (a += `:${String(i).padStart(2, `0`)}`), a;
}
function ni(e) {
	return `${ei(e)}${ti(e.offset)}[${e.timeZone}]`;
}
function ri(e) {
	let t = typeof e[0] == `object` ? e.shift() : new G(), n;
	if (typeof e[0] == `string`) n = e.shift();
	else {
		let e = t.getEras();
		n = e[e.length - 1];
	}
	let r = e.shift(), i = e.shift(), a = e.shift();
	return [
		t,
		n,
		r,
		i,
		a
	];
}
var X = class e {
	constructor(...e) {
		let [t, n, r, i, a] = ri(e);
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, kr(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day) : new e(this.calendar, this.year, this.month, this.day);
	}
	add(e) {
		return wr(this, e);
	}
	subtract(e) {
		return jr(this, e);
	}
	set(e) {
		return Mr(this, e);
	}
	cycle(e, t, n) {
		return Br(this, e, t, n);
	}
	toDate(e) {
		return gr(this, e);
	}
	toString() {
		return $r(this);
	}
	compare(e) {
		return Hn(this, e);
	}
}, ii = class e {
	constructor(e = 0, t = 0, n = 0, r = 0) {
		this.hour = e, this.minute = t, this.second = n, this.millisecond = r, Fr(this);
	}
	copy() {
		return new e(this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return Rr(this, e);
	}
	subtract(e) {
		return zr(this, e);
	}
	set(e) {
		return Nr(this, e);
	}
	cycle(e, t, n) {
		return Vr(this, e, t, n);
	}
	toString() {
		return Qr(this);
	}
	compare(e) {
		return Un(this, e);
	}
}, ai = class e {
	constructor(...e) {
		let [t, n, r, i, a] = ri(e);
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, kr(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new e(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return wr(this, e);
	}
	subtract(e) {
		return jr(this, e);
	}
	set(e) {
		return Mr(Nr(this, e), e);
	}
	cycle(e, t, n) {
		switch (e) {
			case `era`:
			case `year`:
			case `month`:
			case `day`: return Br(this, e, t, n);
			default: return Vr(this, e, t, n);
		}
	}
	toDate(e, t) {
		return gr(this, e, t);
	}
	toString() {
		return ei(this);
	}
	compare(e) {
		let t = Hn(this, e);
		return t === 0 ? Un(this, vr(e)) : t;
	}
}, oi = class e {
	constructor(...e) {
		let [t, n, r, i, a] = ri(e), o = e.shift(), s = e.shift();
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, this.timeZone = o, this.offset = s, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, kr(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new e(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return Ur(this, e);
	}
	subtract(e) {
		return Wr(this, e);
	}
	set(e, t) {
		return Kr(this, e, t);
	}
	cycle(e, t, n) {
		return Gr(this, e, t, n);
	}
	toDate() {
		return br(this);
	}
	toString() {
		return ni(this);
	}
	toAbsoluteString() {
		return this.toDate().toISOString();
	}
	compare(e) {
		return this.toDate().getTime() - yr(e, this.timeZone).toDate().getTime();
	}
}, si = [
	[
		1868,
		9,
		8
	],
	[
		1912,
		7,
		30
	],
	[
		1926,
		12,
		25
	],
	[
		1989,
		1,
		8
	],
	[
		2019,
		5,
		1
	]
], ci = [
	[
		1912,
		7,
		29
	],
	[
		1926,
		12,
		24
	],
	[
		1989,
		1,
		7
	],
	[
		2019,
		4,
		30
	]
], li = [
	1867,
	1911,
	1925,
	1988,
	2018
], ui = [
	`meiji`,
	`taisho`,
	`showa`,
	`heisei`,
	`reiwa`
];
function di(e) {
	let t = si.findIndex(([t, n, r]) => e.year < t || e.year === t && e.month < n || e.year === t && e.month === n && e.day < r);
	return t === -1 ? si.length - 1 : t === 0 ? 0 : t - 1;
}
function fi(e) {
	let t = li[ui.indexOf(e.era)];
	if (!t) throw Error(`Unknown era: ` + e.era);
	return new X(e.year + t, e.month, e.day);
}
var pi = class extends G {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = di(t);
		return new X(this, ui[n], t.year - li[n], t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(fi(e));
	}
	balanceDate(e) {
		let t = fi(e), n = di(t);
		ui[n] !== e.era && (e.era = ui[n], e.year = t.year - li[n]), this.constrainDate(e);
	}
	constrainDate(e) {
		let t = ui.indexOf(e.era), n = ci[t];
		if (n != null) {
			let [r, i, a] = n, o = r - li[t];
			e.year = Math.max(1, Math.min(o, e.year)), e.year === o && (e.month = Math.min(i, e.month), e.month === i && (e.day = Math.min(a, e.day)));
		}
		if (e.year === 1 && t >= 0) {
			let [, n, r] = si[t];
			e.month = Math.max(n, e.month), e.month === n && (e.day = Math.max(r, e.day));
		}
	}
	getEras() {
		return ui;
	}
	getYearsInEra(e) {
		let t = ui.indexOf(e.era), n = si[t], r = si[t + 1];
		if (r == null) return 9999 - n[0] + 1;
		let i = r[0] - n[0];
		return (e.month < r[1] || e.month === r[1] && e.day < r[2]) && i++, i;
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(fi(e));
	}
	getMinimumMonthInYear(e) {
		let t = mi(e);
		return t ? t[1] : 1;
	}
	getMinimumDayInMonth(e) {
		let t = mi(e);
		return t && e.month === t[1] ? t[2] : 1;
	}
	constructor(...e) {
		super(...e), this.identifier = `japanese`;
	}
};
function mi(e) {
	if (e.year === 1) return si[ui.indexOf(e.era)];
}
var hi = -543, gi = class extends G {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = An(t.era, t.year);
		return new X(this, n - hi, t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(_i(e));
	}
	getEras() {
		return [`BE`];
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(_i(e));
	}
	balanceDate() {}
	constructor(...e) {
		super(...e), this.identifier = `buddhist`;
	}
};
function _i(e) {
	let [t, n] = jn(e.year + hi);
	return new X(t, n, e.month, e.day);
}
var vi = 1911;
function yi(e) {
	return e.era === `minguo` ? e.year + vi : 1 - e.year + vi;
}
function bi(e) {
	let t = e - vi;
	return t > 0 ? [`minguo`, t] : [`before_minguo`, 1 - t];
}
var xi = class extends G {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), [n, r] = bi(An(t.era, t.year));
		return new X(this, n, r, t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(Si(e));
	}
	getEras() {
		return [`before_minguo`, `minguo`];
	}
	balanceDate(e) {
		let [t, n] = bi(yi(e));
		e.era = t, e.year = n;
	}
	isInverseEra(e) {
		return e.era === `before_minguo`;
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(Si(e));
	}
	getYearsInEra(e) {
		return e.era === `before_minguo` ? 9999 : 8088;
	}
	constructor(...e) {
		super(...e), this.identifier = `roc`;
	}
};
function Si(e) {
	let [t, n] = jn(yi(e));
	return new X(t, n, e.month, e.day);
}
var Ci = 1948320, wi = [
	0,
	31,
	62,
	93,
	124,
	155,
	186,
	216,
	246,
	276,
	306,
	336
], Ti = class {
	fromJulianDay(e) {
		let t = e - Ci, n = 1 + Math.floor((33 * t + 3) / 12053), r = t - (365 * (n - 1) + Math.floor((8 * n + 21) / 33)), i = Math.floor(r < 216 ? r / 31 : (r - 6) / 30), a = r - wi[i] + 1;
		return new X(this, n, i + 1, a);
	}
	toJulianDay(e) {
		let t = 1948319 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
		return t += wi[e.month - 1], t += e.day, t;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInMonth(e) {
		return e.month <= 6 ? 31 : e.month <= 11 || En(25 * e.year + 11, 33) < 8 ? 30 : 29;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 31;
	}
	getEras() {
		return [`AP`];
	}
	getYearsInEra() {
		return 9377;
	}
	constructor() {
		this.identifier = `persian`;
	}
}, Ei = 78, Di = 80, Oi = class extends G {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = t.year - Ei, r = e - On(t.era, t.year, 1, 1), i;
		r < Di ? (n--, i = kn(t.year - 1) ? 31 : 30, r += i + 155 + 90 + 10) : (i = kn(t.year) ? 31 : 30, r -= Di);
		let a, o;
		if (r < i) a = 1, o = r + 1;
		else {
			let e = r - i;
			e < 155 ? (a = Math.floor(e / 31) + 2, o = e % 31 + 1) : (e -= 155, a = Math.floor(e / 30) + 7, o = e % 30 + 1);
		}
		return new X(this, n, a, o);
	}
	toJulianDay(e) {
		let [t, n] = jn(e.year + Ei), r, i;
		return kn(n) ? (r = 31, i = On(t, n, 3, 21)) : (r = 30, i = On(t, n, 3, 22)), e.month === 1 ? i + e.day - 1 : (i += r + Math.min(e.month - 2, 5) * 31, e.month >= 8 && (i += (e.month - 7) * 30), i += e.day - 1, i);
	}
	getDaysInMonth(e) {
		return e.month === 1 && kn(e.year + Ei) || e.month >= 2 && e.month <= 6 ? 31 : 30;
	}
	getYearsInEra() {
		return 9919;
	}
	getEras() {
		return [`saka`];
	}
	balanceDate() {}
	constructor(...e) {
		super(...e), this.identifier = `indian`;
	}
}, ki = 1948440, Ai = 1948439, ji = 1300, Mi = 1600, Ni = 460322;
function Pi(e, t, n, r) {
	return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function Fi(e, t, n) {
	let r = Math.floor((30 * (n - t) + 10646) / 10631), i = Math.min(12, Math.ceil((n - (29 + Pi(t, r, 1, 1))) / 29.5) + 1);
	return new X(e, r, i, n - Pi(t, r, i, 1) + 1);
}
function Ii(e) {
	return (14 + 11 * e) % 30 < 11;
}
var Li = class {
	fromJulianDay(e) {
		return Fi(this, ki, e);
	}
	toJulianDay(e) {
		return Pi(ki, e.year, e.month, e.day);
	}
	getDaysInMonth(e) {
		let t = 29 + e.month % 2;
		return e.month === 12 && Ii(e.year) && t++, t;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInYear(e) {
		return Ii(e.year) ? 355 : 354;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra() {
		return 9665;
	}
	getEras() {
		return [`AH`];
	}
	constructor() {
		this.identifier = `islamic-civil`;
	}
}, Ri = class extends Li {
	fromJulianDay(e) {
		return Fi(this, Ai, e);
	}
	toJulianDay(e) {
		return Pi(Ai, e.year, e.month, e.day);
	}
	constructor(...e) {
		super(...e), this.identifier = `islamic-tbla`;
	}
}, zi = `qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=`, Bi, Vi;
function Hi(e) {
	return Ni + Vi[e - ji];
}
function Ui(e, t) {
	let n = e - ji, r = 1 << 11 - (t - 1);
	return (Bi[n] & r) === 0 ? 29 : 30;
}
function Wi(e, t) {
	let n = Hi(e);
	for (let r = 1; r < t; r++) n += Ui(e, r);
	return n;
}
function Gi(e) {
	return Vi[e + 1 - ji] - Vi[e - ji];
}
var Ki = class extends Li {
	constructor() {
		if (super(), this.identifier = `islamic-umalqura`, Bi ||= new Uint16Array(Uint8Array.from(atob(zi), (e) => e.charCodeAt(0)).buffer), !Vi) {
			Vi = new Uint32Array(301);
			let e = 0;
			for (let t = ji; t <= Mi; t++) {
				Vi[t - ji] = e;
				for (let n = 1; n <= 12; n++) e += Ui(t, n);
			}
		}
	}
	fromJulianDay(e) {
		let t = e - ki, n = Hi(ji), r = Hi(Mi);
		if (t < n || t > r) return super.fromJulianDay(e);
		{
			let e = 1299, n = 1, r = 1;
			for (; r > 0;) {
				e++, r = t - Hi(e) + 1;
				let i = Gi(e);
				if (r === i) {
					n = 12;
					break;
				}
				if (r < i) {
					let t = Ui(e, n);
					for (n = 1; r > t;) r -= t, n++, t = Ui(e, n);
					break;
				}
			}
			return new X(this, e, n, t - Wi(e, n) + 1);
		}
	}
	toJulianDay(e) {
		return e.year < ji || e.year > Mi ? super.toJulianDay(e) : ki + Wi(e.year, e.month) + (e.day - 1);
	}
	getDaysInMonth(e) {
		return e.year < ji || e.year > Mi ? super.getDaysInMonth(e) : Ui(e.year, e.month);
	}
	getDaysInYear(e) {
		return e.year < ji || e.year > Mi ? super.getDaysInYear(e) : Gi(e.year);
	}
}, qi = 347997, Ji = 25920, Yi = 765433;
function Xi(e) {
	return En(e * 7 + 1, 19) < 7;
}
function Zi(e) {
	let t = Math.floor((235 * e - 234) / 19), n = 12084 + 13753 * t, r = t * 29 + Math.floor(n / 25920);
	return En(3 * (r + 1), 7) < 3 && (r += 1), r;
}
function Qi(e) {
	let t = Zi(e - 1), n = Zi(e);
	return Zi(e + 1) - n === 356 ? 2 : +(n - t === 382);
}
function $i(e) {
	return Zi(e) + Qi(e);
}
function ea(e) {
	return $i(e + 1) - $i(e);
}
function ta(e) {
	let t = ea(e);
	switch (t > 380 && (t -= 30), t) {
		case 353: return 0;
		case 354: return 1;
		case 355: return 2;
	}
}
function na(e, t) {
	if (t >= 6 && !Xi(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13) return 29;
	let n = ta(e);
	return t === 2 ? n === 2 ? 30 : 29 : t === 3 ? n === 0 ? 29 : 30 : t === 6 ? Xi(e) ? 30 : 0 : 30;
}
var ra = class {
	fromJulianDay(e) {
		let t = e - qi, n = t * Ji / Yi, r = Math.floor((19 * n + 234) / 235) + 1, i = $i(r), a = Math.floor(t - i);
		for (; a < 1;) r--, i = $i(r), a = Math.floor(t - i);
		let o = 1, s = 0;
		for (; s < a;) s += na(r, o), o++;
		o--, s -= na(r, o);
		let c = a - s;
		return new X(this, r, o, c);
	}
	toJulianDay(e) {
		let t = $i(e.year);
		for (let n = 1; n < e.month; n++) t += na(e.year, n);
		return t + e.day + qi;
	}
	getDaysInMonth(e) {
		return na(e.year, e.month);
	}
	getMonthsInYear(e) {
		return Xi(e.year) ? 13 : 12;
	}
	getDaysInYear(e) {
		return ea(e.year);
	}
	getMaximumMonthsInYear() {
		return 13;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra() {
		return 9999;
	}
	getEras() {
		return [`AM`];
	}
	balanceYearMonth(e, t) {
		t.year !== e.year && (Xi(t.year) && !Xi(e.year) && t.month > 6 ? e.month-- : !Xi(t.year) && Xi(e.year) && t.month > 6 && e.month++);
	}
	constructor() {
		this.identifier = `hebrew`;
	}
}, ia = 1723856, aa = 1824665, oa = 5500;
function sa(e, t, n, r) {
	return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1;
}
function ca(e, t) {
	let n = Math.floor(4 * (t - e) / 1461);
	t >= sa(e, n + 1, 1, 1) && n++;
	let r = 1 + Math.floor((t - sa(e, n, 1, 1)) / 30), i = t + 1 - sa(e, n, r, 1);
	return [
		n,
		r,
		i
	];
}
function la(e) {
	return Math.floor(e % 4 / 3);
}
function ua(e, t) {
	return t % 13 == 0 ? la(e) + 5 : 30;
}
var da = class {
	fromJulianDay(e) {
		let [t, n, r] = ca(ia, e), i = `AM`;
		return t <= 0 && (i = `AA`, t += oa), new X(this, i, t, n, r);
	}
	toJulianDay(e) {
		let t = e.year;
		return e.era === `AA` && (t -= oa), sa(ia, t, e.month, e.day);
	}
	getDaysInMonth(e) {
		return ua(e.year, e.month);
	}
	getMonthsInYear() {
		return 13;
	}
	getDaysInYear(e) {
		return 365 + la(e.year);
	}
	getMaximumMonthsInYear() {
		return 13;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra(e) {
		return e.era === `AA` ? 9999 : 9991;
	}
	getEras() {
		return [`AA`, `AM`];
	}
	constructor() {
		this.identifier = `ethiopic`;
	}
}, fa = class extends da {
	fromJulianDay(e) {
		let [t, n, r] = ca(ia, e);
		return t += oa, new X(this, `AA`, t, n, r);
	}
	getEras() {
		return [`AA`];
	}
	getYearsInEra() {
		return 9999;
	}
	constructor(...e) {
		super(...e), this.identifier = `ethioaa`;
	}
}, pa = class extends da {
	fromJulianDay(e) {
		let [t, n, r] = ca(aa, e), i = `CE`;
		return t <= 0 && (i = `BCE`, t = 1 - t), new X(this, i, t, n, r);
	}
	toJulianDay(e) {
		let t = e.year;
		return e.era === `BCE` && (t = 1 - t), sa(aa, t, e.month, e.day);
	}
	getDaysInMonth(e) {
		let t = e.year;
		return e.era === `BCE` && (t = 1 - t), ua(t, e.month);
	}
	isInverseEra(e) {
		return e.era === `BCE`;
	}
	balanceDate(e) {
		e.year <= 0 && (e.era = e.era === `BCE` ? `CE` : `BCE`, e.year = 1 - e.year);
	}
	getEras() {
		return [`BCE`, `CE`];
	}
	getYearsInEra(e) {
		return e.era === `BCE` ? 9999 : 9715;
	}
	constructor(...e) {
		super(...e), this.identifier = `coptic`;
	}
};
function ma(e) {
	switch (e) {
		case `buddhist`: return new gi();
		case `ethiopic`: return new da();
		case `ethioaa`: return new fa();
		case `coptic`: return new pa();
		case `hebrew`: return new ra();
		case `indian`: return new Oi();
		case `islamic-civil`: return new Li();
		case `islamic-tbla`: return new Ri();
		case `islamic-umalqura`: return new Ki();
		case `japanese`: return new pi();
		case `persian`: return new Ti();
		case `roc`: return new xi();
		default: return new G();
	}
}
var ha = new Map(), ga = class {
	constructor(e, t = {}) {
		this.formatter = va(e, t), this.options = t;
	}
	format(e) {
		return this.formatter.format(e);
	}
	formatToParts(e) {
		return this.formatter.formatToParts(e);
	}
	formatRange(e, t) {
		if (typeof this.formatter.formatRange == `function`) return this.formatter.formatRange(e, t);
		if (t < e) throw RangeError(`End date must be >= start date`);
		return `${this.formatter.format(e)} \u{2013} ${this.formatter.format(t)}`;
	}
	formatRangeToParts(e, t) {
		if (typeof this.formatter.formatRangeToParts == `function`) return this.formatter.formatRangeToParts(e, t);
		if (t < e) throw RangeError(`End date must be >= start date`);
		let n = this.formatter.formatToParts(e), r = this.formatter.formatToParts(t);
		return [
			...n.map((e) => ({
				...e,
				source: `startRange`
			})),
			{
				type: `literal`,
				value: ` – `,
				source: `shared`
			},
			...r.map((e) => ({
				...e,
				source: `endRange`
			}))
		];
	}
	resolvedOptions() {
		let e = this.formatter.resolvedOptions();
		return Sa() && (this.resolvedHourCycle ||= Ca(e.locale, this.options), e.hourCycle = this.resolvedHourCycle, e.hour12 = this.resolvedHourCycle === `h11` || this.resolvedHourCycle === `h12`), e.calendar === `ethiopic-amete-alem` && (e.calendar = `ethioaa`), e;
	}
}, _a = {
	true: { ja: `h11` },
	false: {}
};
function va(e, t = {}) {
	if (typeof t.hour12 == `boolean` && ba()) {
		t = { ...t };
		let n = _a[String(t.hour12)][e.split(`-`)[0]], r = t.hour12 ? `h12` : `h23`;
		t.hourCycle = n ?? r, delete t.hour12;
	}
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ``);
	if (ha.has(n)) return ha.get(n);
	let r = new Intl.DateTimeFormat(e, t);
	return ha.set(n, r), r;
}
var ya = null;
function ba() {
	return ya ??= new Intl.DateTimeFormat(`en-US`, {
		hour: `numeric`,
		hour12: !1
	}).format(new Date(2020, 2, 3, 0)) === `24`, ya;
}
var xa = null;
function Sa() {
	return xa ??= new Intl.DateTimeFormat(`fr`, {
		hour: `numeric`,
		hour12: !1
	}).resolvedOptions().hourCycle === `h12`, xa;
}
function Ca(e, t) {
	if (!t.timeStyle && !t.hour) return;
	e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ``), e += (e.includes(`-u-`) ? `` : `-u`) + `-nu-latn`;
	let n = va(e, {
		...t,
		timeZone: void 0
	}), r = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find((e) => e.type === `hour`).value, 10), i = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find((e) => e.type === `hour`).value, 10);
	if (r === 0 && i === 23) return `h23`;
	if (r === 24 && i === 23) return `h24`;
	if (r === 0 && i === 11) return `h11`;
	if (r === 12 && i === 11) return `h12`;
	throw Error(`Unexpected hour cycle result`);
}
function wa(e) {
	e = Tn(e ?? {}, Ta);
	let { locale: t } = B();
	return (0, W.useMemo)(() => new ga(t, e), [t, e]);
}
function Ta(e, t) {
	if (e === t) return !0;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (t[r] !== e[r]) return !1;
	return !0;
}
function Ea(e) {
	return e && e.__esModule ? e.default : e;
}
var Da = new WeakMap();
function Oa(e) {
	return e?.calendar.identifier === `gregory` && e.era === `BC` ? `short` : void 0;
}
function ka(e) {
	let t = xe(Ea(wn), `@react-aria/calendar`), n, r;
	`highlightedRange` in e ? {start: n, end: r} = e.highlightedRange || {} : (n = Array.isArray(e.value) ? e.value[0] : e.value ?? void 0, r = Array.isArray(e.value) ? e.value.at(-1) : e.value ?? void 0);
	let i = wa({
		weekday: `long`,
		month: `long`,
		year: `numeric`,
		day: `numeric`,
		era: Oa(n) || Oa(r),
		timeZone: e.timeZone
	}), { locale: a } = B(), o = (0, W.useMemo)(() => new Intl.ListFormat(a), [a]), s = `anchorDate` in e ? e.anchorDate : null;
	return (0, W.useMemo)(() => {
		if (!s && n && r) {
			if (K(n, r)) {
				let r = i.format(n.toDate(e.timeZone));
				return t.format(`selectedDateDescription`, { date: r });
			}
			if (`highlightedRange` in e) {
				let a = ja(i, t, n, r, e.timeZone);
				return t.format(`selectedRangeDescription`, { dateRange: a });
			}
			if (Array.isArray(e.value)) {
				let n = e.value.map((t) => i.format(t.toDate(e.timeZone))), r = o.format(n);
				return t.format(`selectedDateDescription`, { date: r });
			}
		}
		return ``;
	}, [
		n,
		r,
		s,
		e,
		t,
		i,
		o
	]);
}
function Aa(e, t, n, r) {
	let i = xe(Ea(wn), `@react-aria/calendar`), a = Oa(e) || Oa(t), o = wa({
		month: `long`,
		year: `numeric`,
		era: a,
		calendar: e.calendar.identifier,
		timeZone: n
	}), s = wa({
		month: `long`,
		year: `numeric`,
		day: `numeric`,
		era: a,
		calendar: e.calendar.identifier,
		timeZone: n
	});
	return (0, W.useMemo)(() => {
		if (K(e, Yn(e))) {
			let a = e, s = t;
			if (e.calendar.getFormattableMonth && (a = e.calendar.getFormattableMonth(e)), t.calendar.getFormattableMonth && (s = t.calendar.getFormattableMonth(t)), K(t, Xn(e))) return o.format(a.toDate(n));
			if (K(t, Xn(t))) return r ? ja(o, i, a, s, n) : o.formatRange(a.toDate(n), s.toDate(n));
		}
		return r ? ja(s, i, e, t, n) : s.formatRange(e.toDate(n), t.toDate(n));
	}, [
		e,
		t,
		o,
		s,
		i,
		n,
		r
	]);
}
function ja(e, t, n, r, i) {
	let a = e.formatRangeToParts(n.toDate(i), r.toDate(i)), o = -1;
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if (t.source === `shared` && t.type === `literal`) o = e;
		else if (t.source === `endRange`) break;
	}
	let s = ``, c = ``;
	for (let e = 0; e < a.length; e++) e < o ? s += a[e].value : e > o && (c += a[e].value);
	return t.format(`dateRange`, {
		startDate: s,
		endDate: c
	});
}
function Ma(e) {
	return e && e.__esModule ? e.default : e;
}
function Na(e, t) {
	let n = xe(Ma(wn), `@react-aria/calendar`), r = S(e), i = Aa(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1), a = Aa(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
	mt(() => {
		t.isFocused || p(a);
	}, [a]);
	let o = ka(t);
	mt(() => {
		o && p(o, `polite`, 4e3);
	}, [o]);
	let s = R([
		!!e.errorMessage,
		e.isInvalid,
		e.validationState
	]);
	Da.set(t, {
		ariaLabel: e[`aria-label`],
		ariaLabelledBy: e[`aria-labelledby`],
		errorMessageId: s,
		selectedDateDescription: o
	});
	let [c, l] = (0, W.useState)(!1), u = e.isDisabled || t.isNextVisibleRangeInvalid();
	u && c && (l(!1), t.setFocused(!0));
	let [d, f] = (0, W.useState)(!1), m = e.isDisabled || t.isPreviousVisibleRangeInvalid();
	m && d && (f(!1), t.setFocused(!0));
	let h = b({
		id: e.id,
		"aria-label": [e[`aria-label`], a].filter(Boolean).join(`, `),
		"aria-labelledby": e[`aria-labelledby`]
	});
	return {
		calendarProps: T(r, h, {
			role: `application`,
			"aria-details": e[`aria-details`] || void 0,
			"aria-describedby": e[`aria-describedby`] || void 0
		}),
		nextButtonProps: {
			onPress: () => t.focusNextPage(),
			"aria-label": n.format(`next`),
			isDisabled: u,
			onFocusChange: l
		},
		prevButtonProps: {
			onPress: () => t.focusPreviousPage(),
			"aria-label": n.format(`previous`),
			isDisabled: m,
			onFocusChange: f
		},
		errorMessageProps: { id: s },
		title: i
	};
}
function Pa(e, t) {
	return Na(e, t);
}
function Fa(e, t) {
	let { startDate: n = t.visibleRange.start, endDate: r = t.visibleRange.end, firstDayOfWeek: i } = e, { direction: a } = B(), { keyboardProps: o } = E({ shortcuts: {
		End: () => {
			t.focusSectionEnd();
		},
		Home: () => {
			t.focusSectionStart();
		},
		Escape: () => (`setAnchorDate` in t && t.setAnchorDate(null), !1)
	} }), { keyboardProps: s } = E({
		shortcuts: {
			Enter: () => {
				t.selectFocusedDate();
			},
			" ": () => {
				t.selectFocusedDate();
			},
			PageUp: () => {
				t.focusPreviousSection();
			},
			"Shift+PageUp": () => {
				t.focusPreviousSection(!0);
			},
			PageDown: () => {
				t.focusNextSection();
			},
			"Shift+PageDown": () => {
				t.focusNextSection(!0);
			},
			ArrowLeft: () => {
				a === `rtl` ? t.focusNextDay() : t.focusPreviousDay();
			},
			ArrowUp: () => {
				t.focusPreviousRow();
			},
			ArrowRight: () => {
				a === `rtl` ? t.focusPreviousDay() : t.focusNextDay();
			},
			ArrowDown: () => {
				t.focusNextRow();
			}
		},
		allowRepeats: !0
	}), c = Aa(n, r, t.timeZone, !0), { ariaLabel: l, ariaLabelledBy: u } = Da.get(t), d = b({
		"aria-label": [l, c].filter(Boolean).join(`, `),
		"aria-labelledby": u
	}), f = wa({
		weekday: e.weekdayStyle || `narrow`,
		timeZone: t.timeZone
	}), { locale: p } = B(), m = (0, W.useMemo)(() => {
		let e = t.visibleDuration.days && t.visibleDuration.days < 7, r = e ? n : Qn(Vn(t.timeZone), p, i), a = e ? t.visibleDuration.days : 7;
		return [...Array(a).keys()].map((e) => {
			let n = r.add({ days: e }).toDate(t.timeZone);
			return f.format(n);
		});
	}, [
		p,
		t.timeZone,
		f,
		i,
		n,
		t.visibleDuration.days
	]), h = t.getWeeksInMonth(n);
	return {
		gridProps: T(d, {
			role: `grid`,
			"aria-readonly": t.isReadOnly || void 0,
			"aria-disabled": t.isDisabled || void 0,
			"aria-multiselectable": `highlightedRange` in t || t.selectionMode === `multiple` || void 0,
			onFocus: () => t.setFocused(!0),
			onBlur: () => t.setFocused(!1)
		}, o, s),
		headerProps: { "aria-hidden": !0 },
		weekDays: m,
		weeksInMonth: h
	};
}
function Ia(e) {
	return e && e.__esModule ? e.default : e;
}
function La(e, t, n) {
	let { date: a, isDisabled: o } = e, { errorMessageId: s, selectedDateDescription: l } = Da.get(t), u = xe(Ia(wn), `@react-aria/calendar`), d = wa({
		weekday: `long`,
		day: `numeric`,
		month: `long`,
		year: `numeric`,
		era: Oa(a),
		timeZone: t.timeZone
	}), f = t.isCellFocused(a) && !e.isOutsideMonth;
	o = o || t.isCellDisabled(a) || !!e.isOutsideMonth;
	let p = t.isCellUnavailable(a), m = !o && !p, h = t.isSelected(a) && m, g = !1;
	t.isValueInvalid && (`highlightedRange` in t ? g = !t.anchorDate && t.highlightedRange != null && a.compare(t.highlightedRange.start) >= 0 && a.compare(t.highlightedRange.end) <= 0 : Array.isArray(t.value) ? g = t.value.some((e) => K(e, a)) : t.value && (g = K(t.value, a))), g && !o && (h = !0), a = Tn(a, Fn);
	let _ = (0, W.useMemo)(() => a.toDate(t.timeZone), [a, t.timeZone]), y = Ln(a, t.timeZone), b = (0, W.useMemo)(() => {
		let e = ``;
		return `highlightedRange` in t && t.value && !t.anchorDate && (K(a, t.value.start) || K(a, t.value.end)) && (e = l + `, `), e += d.format(_), y ? e = u.format(h ? `todayDateSelected` : `todayDate`, { date: e }) : h && (e = u.format(`dateSelected`, { date: e })), t.minValue && K(a, t.minValue) ? e += `, ` + u.format(`minimumDate`) : t.maxValue && K(a, t.maxValue) && (e += `, ` + u.format(`maximumDate`)), e;
	}, [
		d,
		_,
		u,
		h,
		y,
		a,
		t,
		l
	]), x = ``;
	`anchorDate` in t && f && !t.isReadOnly && m && (x = t.anchorDate ? u.format(`finishRangeSelectionPrompt`) : u.format(`startRangeSelectionPrompt`));
	let S = _t(x), C = (0, W.useRef)(!1), w = (0, W.useRef)(!1), E = (0, W.useRef)(void 0), { pressProps: D, isPressed: O } = j({
		shouldCancelOnPointerExit: `anchorDate` in t && !!t.anchorDate,
		preventFocusOnPress: !0,
		isDisabled: !m || t.isReadOnly,
		onPressStart(e) {
			if (t.isReadOnly) t.setFocusedDate(a), t.setFocused(!0);
			else if (`highlightedRange` in t && !t.anchorDate && (e.pointerType === `mouse` || e.pointerType === `touch`)) {
				if (t.highlightedRange && !g) {
					if (K(a, t.highlightedRange.start)) {
						t.setAnchorDate(t.highlightedRange.end), t.setFocusedDate(a), t.setFocused(!0), t.setDragging(!0), w.current = !0;
						return;
					}
					if (K(a, t.highlightedRange.end)) {
						t.setAnchorDate(t.highlightedRange.start), t.setFocusedDate(a), t.setFocused(!0), t.setDragging(!0), w.current = !0;
						return;
					}
				}
				let n = () => {
					t.setDragging(!0), E.current = void 0, t.selectDate(a), t.setFocusedDate(a), t.setFocused(!0), C.current = !0;
				};
				e.pointerType === `touch` ? E.current = setTimeout(n, 200) : n();
			}
		},
		onPressEnd() {
			w.current = !1, C.current = !1, clearTimeout(E.current), E.current = void 0;
		},
		onPress() {
			!(`anchorDate` in t) && !t.isReadOnly && (t.selectDate(a), t.setFocusedDate(a), t.setFocused(!0));
		},
		onPressUp(e) {
			t.isReadOnly || (`anchorDate` in t && E.current && (t.selectDate(a), t.setFocusedDate(a), t.setFocused(!0)), `anchorDate` in t && (w.current ? t.setAnchorDate(a) : t.anchorDate && !C.current ? (t.selectDate(a), t.setFocusedDate(a), t.setFocused(!0)) : e.pointerType === `keyboard` && !t.anchorDate ? (t.selectDate(a), t.focusNearestAvailableDate(a)) : e.pointerType === `virtual` && (t.selectDate(a), t.setFocusedDate(a), t.setFocused(!0))));
		}
	}), k;
	o || (k = K(a, t.focusedDate) ? 0 : -1), (0, W.useEffect)(() => {
		f && n.current && (c(n.current), i() !== `pointer` && v() === n.current && gt(n.current, { containingElement: ht(n.current) }));
	}, [f, n]);
	let A = wa({
		day: `numeric`,
		timeZone: t.timeZone,
		calendar: a.calendar.identifier
	}), M = (0, W.useMemo)(() => A.formatToParts(_).find((e) => e.type === `day`).value, [A, _]);
	return {
		cellProps: {
			role: `gridcell`,
			"aria-disabled": !m || void 0,
			"aria-selected": h || void 0,
			"aria-invalid": g || void 0
		},
		buttonProps: T(D, {
			onFocus() {
				o || (t.setFocusedDate(a), t.setFocused(!0));
			},
			tabIndex: k,
			role: `button`,
			"aria-disabled": !m || void 0,
			"aria-label": b,
			"aria-invalid": g || void 0,
			"aria-describedby": [g ? s : void 0, S[`aria-describedby`]].filter(Boolean).join(` `) || void 0,
			onPointerEnter(e) {
				`highlightDate` in t && (e.pointerType !== `touch` || t.isDragging) && m && t.highlightDate(a);
			},
			onPointerDown(e) {
				let t = r(e);
				t instanceof HTMLElement && `releasePointerCapture` in t && (`hasPointerCapture` in t ? t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId) : t.releasePointerCapture(e.pointerId));
			},
			onContextMenu(e) {
				e.preventDefault();
			}
		}),
		isPressed: O,
		isFocused: f,
		isSelected: h,
		isDisabled: o,
		isUnavailable: p,
		isOutsideVisibleRange: a.compare(t.visibleRange.start) < 0 || a.compare(t.visibleRange.end) > 0,
		isInvalid: g,
		formattedDate: M
	};
}
function Ra(e, t, n) {
	return t != null && e.compare(t) < 0 || n != null && e.compare(n) > 0;
}
function za(e, t, n, r, i) {
	let a = {};
	for (let e in t) a[e] = Math.floor(t[e] / 2), a[e] > 0 && t[e] % 2 == 0 && a[e]--;
	return Ha(e, Ba(e, t, n).subtract(a), t, n, r, i);
}
function Ba(e, t, n, r, i) {
	let a = e;
	return t.years ? a = Zn(e) : t.months ? a = Yn(e) : (t.weeks || t.days && t.days > 7) && (a = Qn(e, n)), Ha(e, a, t, n, r, i);
}
function Va(e, t, n, r, i) {
	let a = { ...t };
	return a.days ? a.days-- : a.weeks ? a.weeks-- : a.months ? a.months-- : a.years && a.years--, Ha(e, Ba(e, t, n).subtract(a), t, n, r, i);
}
function Ha(e, t, n, r, i, a) {
	if (i && e.compare(i) >= 0) {
		let e = or(t, Ba(q(i), n, r));
		e && (t = e);
	}
	if (a && e.compare(a) <= 0) {
		let e = ar(t, Va(q(a), n, r));
		e && (t = e);
	}
	return t;
}
function Ua(e, t, n) {
	if (t) {
		let n = or(e, q(t));
		n && (e = n);
	}
	if (n) {
		let t = ar(e, q(n));
		t && (e = t);
	}
	return e;
}
function Wa(e, t, n) {
	if (!n) return e;
	for (; e.compare(t) >= 0 && n(e);) e = e.subtract({ days: 1 });
	return e.compare(t) >= 0 ? e : null;
}
function Ga(e, t) {
	return e === t || e.days === t.days && e.weeks === t.weeks && e.months === t.months && e.years === t.years;
}
function Ka(e) {
	let t = (0, W.useMemo)(() => new ga(e.locale), [e.locale]), n = (0, W.useMemo)(() => t.resolvedOptions(), [t]), { locale: r, createCalendar: i, visibleDuration: a = { months: 1 }, minValue: o, maxValue: s, selectionAlignment: c, isDateUnavailable: l, pageBehavior: u = `visible`, selectionMode: d = `single`, firstDayOfWeek: f, weeksInMonth: p } = e, m = (0, W.useMemo)(() => i(n.calendar), [i, n.calendar]), [h, g] = ke(e.value, e.defaultValue ?? null, e.onChange), _ = (0, W.useMemo)(() => Array.isArray(h) ? h.map((e) => J(q(e), m)) : h ? J(q(h), m) : null, [h, m]), v = (0, W.useMemo)(() => {
		let e = Array.isArray(h) ? h[0] : h;
		return e && `timeZone` in e ? e.timeZone : n.timeZone;
	}, [h, n.timeZone]), y = (0, W.useMemo)(() => e.focusedValue ? Ua(J(q(e.focusedValue), m), o, s) : void 0, [
		e.focusedValue,
		m,
		o,
		s
	]), b = (0, W.useMemo)(() => e.defaultFocusedValue ? Ua(J(q(e.defaultFocusedValue), m), o, s) : Ua(_ ? Array.isArray(_) ? _[0] : _ : J(Vn(v), m), o, s), [
		e.defaultFocusedValue,
		_,
		v,
		m,
		o,
		s
	]), [x, S] = ke(y, b, e.onFocusChange), C = () => {
		switch (c) {
			case `start`: return Ba(x, a, r, o, s);
			case `end`: return Va(x, a, r, o, s);
			default: return za(x, a, r, o, s);
		}
	}, [w, T] = (0, W.useState)(C), [E, D] = (0, W.useState)(e.autoFocus || !1), [O, k] = (0, W.useState)(a);
	Ga(a, O) || (k(a), T(C()));
	let A = (0, W.useMemo)(() => {
		let e = { ...a };
		return e.days ? e.days-- : e.days = -1, w.add(e);
	}, [w, a]), [j, M] = (0, W.useState)(m);
	if (!In(m, j)) {
		let e = J(x, m);
		T(za(e, a, r, o, s)), S(e), M(m);
	}
	Ra(x, o, s) ? S(Ua(x, o, s)) : x.compare(w) < 0 ? T(Va(x, a, r, o, s)) : x.compare(A) > 0 && T(Ba(x, a, r, o, s));
	function N(e) {
		e = Ua(e, o, s), S(e);
	}
	function P(e) {
		let t = Ua(e, o, s), n = Wa(t, o ?? ar(t, w), l);
		if (!n) return null;
		let r = Array.isArray(h) ? h[0] : h, i = J(n, r?.calendar || new G());
		return r && `hour` in r ? r.set(i) : i;
	}
	function F(t) {
		if (!e.isDisabled && !e.isReadOnly) {
			if (t === null) {
				g(d === `multiple` ? [] : null);
				return;
			}
			if (Array.isArray(t)) g(t.map(P).filter(Boolean));
			else {
				let e = P(t);
				e && g(e);
			}
		}
	}
	let I = (0, W.useMemo)(() => _ ? Array.isArray(_) ? _.some((e) => l?.(e) || Ra(e, o, s)) : l?.(_) || Ra(_, o, s) : !1, [
		_,
		l,
		o,
		s
	]), L = e.isInvalid || e.validationState === `invalid` || I, ee = L ? `invalid` : null, R = (0, W.useMemo)(() => u === `visible` ? a : qa(a), [u, a]);
	return {
		isDisabled: e.isDisabled ?? !1,
		isReadOnly: e.isReadOnly ?? !1,
		value: _,
		setValue: F,
		selectionMode: d,
		visibleDuration: a,
		visibleRange: {
			start: w,
			end: A
		},
		minValue: o,
		maxValue: s,
		focusedDate: x,
		timeZone: v,
		validationState: ee,
		isValueInvalid: L,
		setFocusedDate(e) {
			N(e);
		},
		focusNextDay() {
			N(x.add({ days: 1 }));
		},
		focusPreviousDay() {
			N(x.subtract({ days: 1 }));
		},
		focusNextRow() {
			a.days ? this.focusNextPage() : (a.weeks || a.months || a.years) && N(x.add({ weeks: 1 }));
		},
		focusPreviousRow() {
			a.days ? this.focusPreviousPage() : (a.weeks || a.months || a.years) && N(x.subtract({ weeks: 1 }));
		},
		focusNextPage() {
			let e = w.add(R);
			S(Ua(x.add(R), o, s)), T(Ba(Ha(x, e, R, r, o, s), R, r));
		},
		focusPreviousPage() {
			let e = w.subtract(R);
			S(Ua(x.subtract(R), o, s)), T(Ba(Ha(x, e, R, r, o, s), R, r));
		},
		focusSectionStart() {
			a.days ? N(w) : a.weeks ? N(Qn(x, r)) : (a.months || a.years) && N(Yn(x));
		},
		focusSectionEnd() {
			a.days ? N(A) : a.weeks ? N($n(x, r)) : (a.months || a.years) && N(Xn(x));
		},
		focusNextSection(e) {
			!e && !a.days ? N(x.add(qa(a))) : a.days ? this.focusNextPage() : a.weeks ? N(x.add({ months: 1 })) : (a.months || a.years) && N(x.add({ years: 1 }));
		},
		focusPreviousSection(e) {
			!e && !a.days ? N(x.subtract(qa(a))) : a.days ? this.focusPreviousPage() : a.weeks ? N(x.subtract({ months: 1 })) : (a.months || a.years) && N(x.subtract({ years: 1 }));
		},
		selectFocusedDate() {
			l && l(x) || this.selectDate(x);
		},
		selectDate(t) {
			if (!(e.isDisabled || e.isReadOnly)) {
				if (d === `multiple` && t != null) {
					let e = P(t);
					if (!e) return;
					let n = [];
					Array.isArray(h) ? n = h : h != null && (n = [h]);
					let r = n.findIndex((t) => K(t, e)), i = r >= 0 ? n.slice(0, r).concat(n.slice(r + 1)) : [...n, e];
					g(i);
				} else F(t);
			}
		},
		isFocused: E,
		setFocused: D,
		isInvalid(e) {
			return Ra(e, o, s);
		},
		isSelected(e) {
			return !_ || this.isCellDisabled(e) || this.isCellUnavailable(e) ? !1 : Array.isArray(_) ? _.some((t) => K(t, e)) : K(e, _);
		},
		isCellFocused(e) {
			return E && x && K(e, x);
		},
		isCellDisabled(t) {
			return e.isDisabled || t.compare(w) < 0 || t.compare(A) > 0 || this.isInvalid(t);
		},
		isCellUnavailable(t) {
			return e.isDateUnavailable ? e.isDateUnavailable(t) : !1;
		},
		isPreviousVisibleRangeInvalid() {
			let e = w.subtract({ days: 1 });
			return K(e, w) || this.isInvalid(e);
		},
		isNextVisibleRangeInvalid() {
			let e = A.add({ days: 1 });
			return K(e, A) || this.isInvalid(e);
		},
		getDatesInWeek(e, t = w) {
			let n = t.add({ weeks: e }), i = [], o = a.days && a.days < 7 ? a.days : 7;
			if (o === 7) {
				n = Qn(n, r, f);
				let e = zn(n, r, f);
				for (let t = 0; t < e; t++) i.push(null);
			}
			for (; i.length < o;) {
				i.push(n);
				let e = n.add({ days: 1 });
				if (K(n, e)) break;
				n = e;
			}
			for (; i.length < o;) i.push(null);
			return i;
		},
		getWeeksInMonth(e = w) {
			let t = p || ir(e, r, f);
			return (a.weeks || a.days) && (t = a.weeks ?? 0, a.days && (t += Math.ceil(a.days / 7))), t;
		}
	};
}
function qa(e) {
	let t = { ...e };
	for (let n in e) t[n] = 1;
	return t;
}
var Ja = t(re(), 1), Ya = (0, W.createContext)(null), Xa = (0, W.createContext)(null), Za = (0, W.createContext)(null), Qa = (0, W.createContext)(null), $a = (0, W.forwardRef)(function(e, t) {
	[e, t] = I(e, t, Ya);
	let { locale: n } = B(), r = Ka({
		...e,
		locale: n,
		createCalendar: e.createCalendar || ma
	}), { calendarProps: i, prevButtonProps: a, nextButtonProps: o, errorMessageProps: s, title: c } = Pa(e, r), l = x({
		...e,
		values: {
			state: r,
			isDisabled: e.isDisabled || !1,
			isInvalid: r.isValueInvalid
		},
		defaultClassName: `react-aria-Calendar`
	}), u = S(e, { global: !0 });
	return W.createElement(w.div, {
		...T(u, l, i),
		ref: t,
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": r.isValueInvalid || void 0
	}, W.createElement(M, { values: [
		[f, { slots: {
			previous: a,
			next: o
		} }],
		[pt, {
			"aria-hidden": !0,
			level: 2,
			children: c
		}],
		[Za, r],
		[Ya, e],
		[Pe, { slots: { errorMessage: s } }]
	] }, W.createElement(Oe, null, W.createElement(`h2`, null, i[`aria-label`])), l.children, W.createElement(Oe, null, W.createElement(`button`, {
		"aria-label": o[`aria-label`],
		disabled: o.isDisabled,
		onClick: () => r.focusNextPage(),
		tabIndex: -1
	}))));
}), eo = (0, W.createContext)(null), to = (0, W.forwardRef)(function(e, t) {
	let n = (0, W.useContext)(Za), r = (0, W.useContext)(Qa), i = A(Ya), a = A(Xa), o = n ?? r, s = o.visibleRange.start;
	e.offset && (s = s.add(e.offset));
	let c = i?.firstDayOfWeek ?? a?.firstDayOfWeek, { gridProps: l, headerProps: u, weekDays: d, weeksInMonth: f } = Fa({
		startDate: s,
		endDate: Xn(s),
		weekdayStyle: e.weekdayStyle,
		firstDayOfWeek: c
	}, o), p = S(e, { global: !0 });
	return W.createElement(eo.Provider, { value: {
		headerProps: u,
		weekDays: d,
		startDate: s,
		weeksInMonth: f
	} }, W.createElement(w.table, {
		render: e.render,
		...T(p, l),
		ref: t,
		style: e.style,
		cellPadding: 0,
		className: e.className ?? `react-aria-CalendarGrid`
	}, typeof e.children == `function` ? W.createElement(W.Fragment, null, W.createElement(ro, null, (e) => W.createElement(ao, null, e)), W.createElement(so, null, e.children)) : e.children));
});
function no(e, t) {
	let { children: n, style: r, className: i } = e, { headerProps: a, weekDays: o } = (0, W.useContext)(eo), s = S(e, { global: !0 });
	return W.createElement(w.thead, {
		render: e.render,
		...T(s, a),
		ref: t,
		style: r,
		className: i ?? `react-aria-CalendarGridHeader`
	}, W.createElement(`tr`, null, o.map((e, t) => W.cloneElement(n(e), { key: t }))));
}
var ro = (0, W.forwardRef)(no);
function io(e, t) {
	let { children: n, style: r, className: i } = e, a = S(e, { global: !0 });
	return W.createElement(w.th, {
		render: e.render,
		...a,
		ref: t,
		style: r,
		className: i || `react-aria-CalendarHeaderCell`
	}, n);
}
var ao = (0, W.forwardRef)(io);
function oo(e, t) {
	let { children: n, style: r, className: i } = e, a = (0, W.useContext)(Za), o = (0, W.useContext)(Qa), s = a ?? o, { startDate: c, weeksInMonth: l } = (0, W.useContext)(eo), u = S(e, { global: !0 });
	return W.createElement(w.tbody, {
		render: e.render,
		...u,
		ref: t,
		style: r,
		className: i ?? `react-aria-CalendarGridBody`
	}, [...Array(l).keys()].map((e) => W.createElement(`tr`, { key: e }, s.getDatesInWeek(e, c).map((e, t) => e ? W.cloneElement(n(e), { key: t }) : W.createElement(`td`, { key: t })))));
}
var so = (0, W.forwardRef)(oo), co = (0, W.forwardRef)(function({ date: e, ...t }, r) {
	let i = (0, W.useContext)(Za), a = (0, W.useContext)(Qa), o = i ?? a, { startDate: s } = (0, W.useContext)(eo) ?? { startDate: o.visibleRange.start }, c = o.visibleDuration.days || o.visibleDuration.weeks ? !1 : !Pn(s, e), l = Ln(e, o.timeZone), u = (0, W.useRef)(null), { cellProps: d, buttonProps: f, ...p } = La({
		date: e,
		isOutsideMonth: c
	}, o, u), { hoverProps: m, isHovered: h } = n({
		...t,
		isDisabled: p.isDisabled || p.isUnavailable
	}), { focusProps: g, isFocusVisible: _ } = C();
	_ &&= p.isFocused;
	let v = !1, y = !1;
	`highlightedRange` in o && o.highlightedRange && (v = K(e, o.highlightedRange.start), y = K(e, o.highlightedRange.end));
	let b = x({
		...t,
		defaultChildren: p.formattedDate,
		defaultClassName: `react-aria-CalendarCell`,
		values: {
			date: e,
			isHovered: h,
			isOutsideMonth: c,
			isFocusVisible: _,
			isSelectionStart: v,
			isSelectionEnd: y,
			isToday: l,
			...p
		}
	}), E = {
		"data-focused": p.isFocused || void 0,
		"data-hovered": h || void 0,
		"data-pressed": p.isPressed || void 0,
		"data-unavailable": p.isUnavailable || void 0,
		"data-disabled": p.isDisabled || void 0,
		"data-focus-visible": _ || void 0,
		"data-outside-visible-range": p.isOutsideVisibleRange || void 0,
		"data-outside-month": c || void 0,
		"data-selected": p.isSelected || void 0,
		"data-selection-start": v || void 0,
		"data-selection-end": y || void 0,
		"data-invalid": p.isInvalid || void 0,
		"data-today": l || void 0
	}, D = S(t, { global: !0 });
	return W.createElement(`td`, {
		...d,
		ref: r
	}, W.createElement(w.div, {
		...T(D, f, g, m, E, b),
		ref: u
	}));
}), lo = (0, W.createContext)(null), uo = (0, W.forwardRef)(function(e, t) {
	let { state: r, thumbProps: i, inputXRef: a, inputYRef: o, xInputProps: s, yInputProps: c, isDisabled: l = !1 } = (0, W.useContext)(lo), { focusProps: u, isFocused: d, isFocusVisible: f } = C(), { hoverProps: p, isHovered: m } = n(e), h = x({
		...e,
		defaultClassName: `react-aria-ColorThumb`,
		defaultStyle: {
			...i.style,
			backgroundColor: r.getDisplayColor().toString()
		},
		values: {
			color: r.getDisplayColor(),
			isHovered: m,
			isDragging: r.isDragging,
			isFocused: d,
			isFocusVisible: f,
			isDisabled: l
		}
	}), g = S(e, { global: !0 });
	return delete g.id, W.createElement(w.div, {
		...T(i, p, g),
		...h,
		ref: t,
		"data-hovered": m || void 0,
		"data-dragging": r.isDragging || void 0,
		"data-focused": d || void 0,
		"data-focus-visible": f || void 0,
		"data-disabled": l || void 0
	}, W.createElement(`input`, {
		ref: a,
		...s,
		...u
	}), c && W.createElement(`input`, {
		ref: o,
		...c,
		...u
	}), h.children);
}), fo = {};
fo = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `أداة انتقاء اللون`,
	colorSwatch: `تغيير الألوان`,
	transparent: `شفاف`,
	twoDimensionalSlider: `مُنزلق 2D`
};
var po = {};
po = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Средство за избиране на цвят`,
	colorSwatch: `цветна мостра`,
	transparent: `прозрачен`,
	twoDimensionalSlider: `2D плъзгач`
};
var mo = {};
mo = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Výběr barvy`,
	colorSwatch: `barevný vzorek`,
	transparent: `průhledný`,
	twoDimensionalSlider: `2D posuvník`
};
var ho = {};
ho = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Farvevælger`,
	colorSwatch: `farveprøve`,
	transparent: `gennemsigtig`,
	twoDimensionalSlider: `2D-skyder`
};
var go = {};
go = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Farbwähler`,
	colorSwatch: `Farbfeld`,
	transparent: `transparent`,
	twoDimensionalSlider: `2D-Schieberegler`
};
var _o = {};
_o = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Επιλογέας χρωμάτων`,
	colorSwatch: `χρωματικό δείγμα`,
	transparent: `διαφανές`,
	twoDimensionalSlider: `Ρυθμιστικό 2D`
};
var vo = {};
vo = {
	colorPicker: `Color picker`,
	twoDimensionalSlider: `2D slider`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorSwatch: `color swatch`,
	transparent: `transparent`
};
var yo = {};
yo = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Selector de color`,
	colorSwatch: `muestra de color`,
	transparent: `transparente`,
	twoDimensionalSlider: `Regulador 2D`
};
var bo = {};
bo = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Värvivalija`,
	colorSwatch: `värvinäidis`,
	transparent: `läbipaistev`,
	twoDimensionalSlider: `2D-liugur`
};
var xo = {};
xo = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Värimuokkain`,
	colorSwatch: `värimalli`,
	transparent: `läpinäkyvä`,
	twoDimensionalSlider: `2D-liukusäädin`
};
var So = {};
So = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}\xa0: ${e.value}`,
	colorPicker: `Sélecteur de couleurs`,
	colorSwatch: `Échantillon de couleurs`,
	transparent: `Transparent`,
	twoDimensionalSlider: `Curseur\xA02D`
};
var Co = {};
Co = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `בוחר הצבעים`,
	colorSwatch: `דוגמית צבע`,
	transparent: `שקוף`,
	twoDimensionalSlider: `מחוון דו מימדי`
};
var wo = {};
wo = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Odabir boje`,
	colorSwatch: `uzorak boje`,
	transparent: `transparentno`,
	twoDimensionalSlider: `2D klizač`
};
var To = {};
To = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Színválasztó`,
	colorSwatch: `színtár`,
	transparent: `átlátszó`,
	twoDimensionalSlider: `2D-csúszka`
};
var Eo = {};
Eo = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Selettore colore`,
	colorSwatch: `campione di colore`,
	transparent: `trasparente`,
	twoDimensionalSlider: `Cursore 2D`
};
var Do = {};
Do = {
	colorInputLabel: (e) => `${e.label}\u{3001}${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name} : ${e.value}`,
	colorPicker: `カラーピッカー`,
	colorSwatch: `カラースウォッチ`,
	transparent: `透明`,
	twoDimensionalSlider: `2D スライダー`
};
var Oo = {};
Oo = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `색상 피커`,
	colorSwatch: `색상 견본`,
	transparent: `투명도`,
	twoDimensionalSlider: `2D 슬라이더`
};
var ko = {};
ko = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Spalvų parinkiklis`,
	colorSwatch: `spalvų pavyzdys`,
	transparent: `skaidrus`,
	twoDimensionalSlider: `2D slankiklis`
};
var Ao = {};
Ao = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Krāsu atlasītājs`,
	colorSwatch: `krāsu paraugs`,
	transparent: `caurspīdīgs`,
	twoDimensionalSlider: `2D slīdnis`
};
var jo = {};
jo = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Fargevelger`,
	colorSwatch: `fargekart`,
	transparent: `gjennomsiktig`,
	twoDimensionalSlider: `2D-glidebryter`
};
var Mo = {};
Mo = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Kleurkiezer`,
	colorSwatch: `kleurstaal`,
	transparent: `transparant`,
	twoDimensionalSlider: `2D-schuifregelaar`
};
var No = {};
No = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Próbnik kolorów`,
	colorSwatch: `próbka koloru`,
	transparent: `przezroczysty`,
	twoDimensionalSlider: `Suwak 2D`
};
var Po = {};
Po = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Seletor de cores`,
	colorSwatch: `amostra de cores`,
	transparent: `transparente`,
	twoDimensionalSlider: `Controle deslizante 2D`
};
var Fo = {};
Fo = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Seletor de cores`,
	colorSwatch: `amostra de cor`,
	transparent: `transparente`,
	twoDimensionalSlider: `Controle deslizante 2D`
};
var Io = {};
Io = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Selector de culori`,
	colorSwatch: `specimen de culoare`,
	transparent: `transparent`,
	twoDimensionalSlider: `Glisor 2D`
};
var Lo = {};
Lo = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Палитра цветов`,
	colorSwatch: `цветовой образец`,
	transparent: `прозрачный`,
	twoDimensionalSlider: `Ползунок 2D`
};
var Ro = {};
Ro = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Výber farieb`,
	colorSwatch: `vzorkovník farieb`,
	transparent: `transparentný`,
	twoDimensionalSlider: `2D jazdec`
};
var zo = {};
zo = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Izbirnik barv`,
	colorSwatch: `barvna paleta`,
	transparent: `prozorno`,
	twoDimensionalSlider: `2D drsnik`
};
var Bo = {};
Bo = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Birač boja`,
	colorSwatch: `Uzorak boje`,
	transparent: `providno`,
	twoDimensionalSlider: `2D klizač`
};
var Vo = {};
Vo = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Färgväljaren`,
	colorSwatch: `färgruta`,
	transparent: `genomskinlig`,
	twoDimensionalSlider: `2D-reglage`
};
var Ho = {};
Ho = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Renk Seçici`,
	colorSwatch: `renk örneği`,
	transparent: `saydam`,
	twoDimensionalSlider: `2D sürgü`
};
var Uo = {};
Uo = {
	colorInputLabel: (e) => `${e.label}, ${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}: ${e.value}`,
	colorPicker: `Палітра кольорів`,
	colorSwatch: `зразок кольору`,
	transparent: `прозорий`,
	twoDimensionalSlider: `Повзунок 2D`
};
var Wo = {};
Wo = {
	colorInputLabel: (e) => `${e.label}\u{3001}${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}\u{FF1A}${e.value}`,
	colorPicker: `拾色器`,
	colorSwatch: `颜色色板`,
	transparent: `透明`,
	twoDimensionalSlider: `2D 滑块`
};
var Go = {};
Go = {
	colorInputLabel: (e) => `${e.label}\u{FF0C}${e.channelLabel}`,
	colorNameAndValue: (e) => `${e.name}\u{FF1A}${e.value}`,
	colorPicker: `檢色器`,
	colorSwatch: `色票`,
	transparent: `透明`,
	twoDimensionalSlider: `2D 滑桿`
};
var Ko = {};
Ko = {
	"ar-AE": fo,
	"bg-BG": po,
	"cs-CZ": mo,
	"da-DK": ho,
	"de-DE": go,
	"el-GR": _o,
	"en-US": vo,
	"es-ES": yo,
	"et-EE": bo,
	"fi-FI": xo,
	"fr-FR": So,
	"he-IL": Co,
	"hr-HR": wo,
	"hu-HU": To,
	"it-IT": Eo,
	"ja-JP": Do,
	"ko-KR": Oo,
	"lt-LT": ko,
	"lv-LV": Ao,
	"nb-NO": jo,
	"nl-NL": Mo,
	"pl-PL": No,
	"pt-BR": Po,
	"pt-PT": Fo,
	"ro-RO": Io,
	"ru-RU": Lo,
	"sk-SK": Ro,
	"sl-SI": zo,
	"sr-SP": Bo,
	"sv-SE": Vo,
	"tr-TR": Ho,
	"uk-UA": Uo,
	"zh-CN": Wo,
	"zh-TW": Go
};
var qo = {};
qo = {
	alpha: `ألفا`,
	black: `أسود`,
	blue: `أزرق`,
	"blue purple": `أرجواني مزرق`,
	brightness: `السطوع`,
	brown: `بني`,
	"brown yellow": `أصفر بني`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `سماوي`,
	"cyan blue": `أزرق سماوي`,
	dark: `داكن`,
	gray: `رمادي`,
	grayish: `مائل للرمادي`,
	green: `أخضر`,
	"green cyan": `سماوي مخضر`,
	hue: `درجة اللون`,
	light: `فاتح`,
	lightness: `الإضاءة`,
	magenta: `أرجواني`,
	"magenta pink": `أرجواني وردي`,
	orange: `برتقالي`,
	"orange yellow": `أصفر برتقالي`,
	pale: `باهت`,
	pink: `وردي`,
	"pink red": `أحمر وردي`,
	purple: `أرجواني`,
	"purple magenta": `بنفسجي`,
	red: `أحمر`,
	"red orange": `برتقالي محمر`,
	saturation: `التشبع`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} \u{634}\u{641}\u{627}\u{641}`,
	"very dark": `داكن جدًا`,
	"very light": `فاتح جدًا`,
	vibrant: `ساطع`,
	white: `أبيض`,
	yellow: `أصفر`,
	"yellow green": `أخضر مصفر`
};
var Jo = {};
Jo = {
	alpha: `Алфа`,
	black: `черно`,
	blue: `Синьо`,
	"blue purple": `синьо лилаво`,
	brightness: `Яркост`,
	brown: `кафяво`,
	"brown yellow": `кафяво жълто`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `циан`,
	"cyan blue": `циан синьо`,
	dark: `тъмно`,
	gray: `сиво`,
	grayish: `сивкав`,
	green: `Зелено`,
	"green cyan": `зелен циан`,
	hue: `Оттенък`,
	light: `светло`,
	lightness: `Лекота`,
	magenta: `магента`,
	"magenta pink": `магента розово`,
	orange: `оранжево`,
	"orange yellow": `оранжево жълто`,
	pale: `бледо`,
	pink: `розово`,
	"pink red": `розово червено`,
	purple: `лилаво`,
	"purple magenta": `лилаво магента`,
	red: `Червено`,
	"red orange": `червен портокал`,
	saturation: `Наситеност`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} \u{43F}\u{440}\u{43E}\u{437}\u{440}\u{430}\u{447}\u{435}\u{43D}`,
	"very dark": `много тъмно`,
	"very light": `много светло`,
	vibrant: ` ярко`,
	white: `бяло`,
	yellow: `жълто`,
	"yellow green": `жълто зелен`
};
var Yo = {};
Yo = {
	alpha: `Alfa`,
	black: `černá`,
	blue: `Modrá`,
	"blue purple": `modrofialová`,
	brightness: `Jas`,
	brown: `hnědá`,
	"brown yellow": `hnědožlutá`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `tyrkysová`,
	"cyan blue": `tyrkysovomodrá`,
	dark: `tmavá`,
	gray: `šedá`,
	grayish: `našedlá`,
	green: `Zelená`,
	"green cyan": `zelenotyrkysová`,
	hue: `Odstín`,
	light: `světlá`,
	lightness: `Světlost`,
	magenta: `purpurová`,
	"magenta pink": `purpurově růžová`,
	orange: `oranžová`,
	"orange yellow": `oranžovožlutá`,
	pale: `bledá`,
	pink: `růžová`,
	"pink red": `růžovočervená`,
	purple: `fialová`,
	"purple magenta": `fialově purpurová`,
	red: `Červená`,
	"red orange": `červenooranžová`,
	saturation: `Sytost`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} pr\u{16F}hledn\xe9`,
	"very dark": `velmi tmavá`,
	"very light": `velmi světlá`,
	vibrant: `zářivá`,
	white: `bílá`,
	yellow: `žlutá`,
	"yellow green": `žlutozelená`
};
var Xo = {};
Xo = {
	alpha: `Alfa`,
	black: `sort`,
	blue: `Blå`,
	"blue purple": `blålilla`,
	brightness: `Lysstyrke`,
	brown: `brun`,
	"brown yellow": `brungul`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `cyan`,
	"cyan blue": `cyan blå`,
	dark: `mørk`,
	gray: `grå`,
	grayish: `grålig`,
	green: `Grøn`,
	"green cyan": `grøn cyan`,
	hue: `Tone`,
	light: `lys`,
	lightness: `Lyshed`,
	magenta: `magenta`,
	"magenta pink": `magenta pink`,
	orange: `orange`,
	"orange yellow": `orangegul`,
	pale: `bleg`,
	pink: `lyserød`,
	"pink red": `lyserødlig rød`,
	purple: `lilla`,
	"purple magenta": `lilla magenta`,
	red: `Rød`,
	"red orange": `rødorange`,
	saturation: `Farvemætning`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} gennemsigtig`,
	"very dark": `meget mørk`,
	"very light": `meget lys`,
	vibrant: `klar`,
	white: `hvid`,
	yellow: `gul`,
	"yellow green": `gulgrøn`
};
var Zo = {};
Zo = {
	alpha: `Alpha`,
	black: `Schwarz`,
	blue: `Blau`,
	"blue purple": `Blaulila`,
	brightness: `Helligkeit`,
	brown: `Braun`,
	"brown yellow": `Braungelb`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `Cyan`,
	"cyan blue": `Cyanblau`,
	dark: `dunkles`,
	gray: `Grau`,
	grayish: `gräuliches`,
	green: `Grün`,
	"green cyan": `Grüncyan`,
	hue: `Farbton`,
	light: `helles`,
	lightness: `Leuchtkraft`,
	magenta: `Magenta`,
	"magenta pink": `Magentarosa`,
	orange: `Orange`,
	"orange yellow": `Orangegelb`,
	pale: `blasses`,
	pink: `Rosa`,
	"pink red": `Rosarot`,
	purple: `Lila`,
	"purple magenta": `Lilamagenta`,
	red: `Rot`,
	"red orange": `Rotorange`,
	saturation: `Sättigung`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, zu ${e.percentTransparent} transparent`,
	"very dark": `sehr dunkles`,
	"very light": `sehr helles`,
	vibrant: `lebhaftes`,
	white: `Weiß`,
	yellow: `Gelb`,
	"yellow green": `Gelbgrün`
};
var Qo = {};
Qo = {
	alpha: `Άλφα`,
	black: `μαύρο`,
	blue: `Μπλε`,
	"blue purple": `μπλε μωβ`,
	brightness: `Φωτεινότητα`,
	brown: `καφέ`,
	"brown yellow": `καφέ κίτρινο`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `κυανό`,
	"cyan blue": `κυανό μπλε`,
	dark: `σκούρο`,
	gray: `γκρι`,
	grayish: `γκριζωπό`,
	green: `Πράσινο`,
	"green cyan": `πράσινο κυανό`,
	hue: `Τόνος`,
	light: `ανοιχτό`,
	lightness: `Φωτεινότητα`,
	magenta: `ματζέντα`,
	"magenta pink": `ματζέντα ροζ`,
	orange: `πορτοκαλί`,
	"orange yellow": `πορτοκαλί κίτρινο`,
	pale: `ανοιχτό`,
	pink: `ροζ`,
	"pink red": `ροζ κόκκινο`,
	purple: `μωβ`,
	"purple magenta": `μωβ ματζέντα`,
	red: `Κόκκινο`,
	"red orange": `κόκκινο πορτοκαλί`,
	saturation: `Κορεσμός`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} \u{3B4}\u{3B9}\u{3B1}\u{3C6}\u{3B1}\u{3BD}\u{3AD}\u{3C2}`,
	"very dark": `πολύ σκούρο`,
	"very light": `πολύ ανοιχτό`,
	vibrant: `έντονο`,
	white: `λευκό`,
	yellow: `κίτρινο`,
	"yellow green": `κίτρινο πράσινο`
};
var $o = {};
$o = {
	hue: `Hue`,
	saturation: `Saturation`,
	lightness: `Lightness`,
	brightness: `Brightness`,
	red: `Red`,
	green: `Green`,
	blue: `Blue`,
	alpha: `Alpha`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} transparent`,
	"very dark": `very dark`,
	dark: `dark`,
	light: `light`,
	"very light": `very light`,
	pale: `pale`,
	grayish: `grayish`,
	vibrant: `vibrant`,
	black: `black`,
	white: `white`,
	gray: `gray`,
	pink: `pink`,
	"pink red": `pink red`,
	"red orange": `red orange`,
	brown: `brown`,
	orange: `orange`,
	"orange yellow": `orange yellow`,
	"brown yellow": `brown yellow`,
	yellow: `yellow`,
	"yellow green": `yellow green`,
	"green cyan": `green cyan`,
	cyan: `cyan`,
	"cyan blue": `cyan blue`,
	"blue purple": `blue purple`,
	purple: `purple`,
	"purple magenta": `purple magenta`,
	magenta: `magenta`,
	"magenta pink": `magenta pink`
};
var es = {};
es = {
	alpha: `Alpha`,
	black: `negro`,
	blue: `Azul`,
	"blue purple": `púrpura azulado`,
	brightness: `Brillo`,
	brown: `marrón`,
	"brown yellow": `amarillo amarronado`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `cian`,
	"cyan blue": `azul cian`,
	dark: `oscuro`,
	gray: `gris`,
	grayish: `grisáceo`,
	green: `Verde`,
	"green cyan": `cian verdoso`,
	hue: `Tono`,
	light: `claro`,
	lightness: `Luminosidad`,
	magenta: `magenta`,
	"magenta pink": `rosa magenta`,
	orange: `naranja`,
	"orange yellow": `amarillo anaranjado`,
	pale: `pálido`,
	pink: `rosa`,
	"pink red": `rojo rosado`,
	purple: `morado`,
	"purple magenta": `magenta violáceo`,
	red: `Rojo`,
	"red orange": `naranja rojizo`,
	saturation: `Saturación`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} transparente`,
	"very dark": `muy oscuro`,
	"very light": `muy claro`,
	vibrant: `intenso`,
	white: `blanco`,
	yellow: `amarillo`,
	"yellow green": `verde amarillento`
};
var ts = {};
ts = {
	alpha: `Alfa`,
	black: `must`,
	blue: `Sinine`,
	"blue purple": `sinakaslilla`,
	brightness: `Heledus`,
	brown: `pruun`,
	"brown yellow": `pruunikaskollane`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `tsüaan`,
	"cyan blue": `tsüaansinine`,
	dark: `tume`,
	gray: `hall`,
	grayish: `hallikas`,
	green: `Roheline`,
	"green cyan": `tsüaanroheline`,
	hue: `Värv`,
	light: `valgus`,
	lightness: `Valgus`,
	magenta: `magentapunane`,
	"magenta pink": `magentaroosa`,
	orange: `oranž`,
	"orange yellow": `oranžikaskollane`,
	pale: `kahvatu`,
	pink: `roosa`,
	"pink red": `vaarikapunane`,
	purple: `lilla`,
	"purple magenta": `purpurne magenta`,
	red: `Punane`,
	"red orange": `punakasoranž`,
	saturation: `Küllastus`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} l\xe4bipaistev`,
	"very dark": `väga tume`,
	"very light": `väga hele`,
	vibrant: `ere`,
	white: `valge`,
	yellow: `kollane`,
	"yellow green": `kollakasroheline`
};
var ns = {};
ns = {
	alpha: `Alpha`,
	black: `musta`,
	blue: `Sininen`,
	"blue purple": `sinivioletti`,
	brightness: `Kirkkaus`,
	brown: `ruskea`,
	"brown yellow": `ruskeankeltainen`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `syaani`,
	"cyan blue": `syaaninsininen`,
	dark: `tumma`,
	gray: `harmaa`,
	grayish: `harmahtava`,
	green: `Vihreä`,
	"green cyan": `vihreänsyaani`,
	hue: `Sävy`,
	light: `vaalea`,
	lightness: `Valomäärä`,
	magenta: `magenta`,
	"magenta pink": `magentapinkki`,
	orange: `oranssi`,
	"orange yellow": `oranssinkeltainen`,
	pale: `vaalea`,
	pink: `pinkki`,
	"pink red": `vaaleanpunainen`,
	purple: `violetti`,
	"purple magenta": `violettimagenta`,
	red: `Punainen`,
	"red orange": `punaoranssi`,
	saturation: `Värikylläisyys`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} l\xe4pin\xe4kyv\xe4`,
	"very dark": `hyvin tumma`,
	"very light": `erittäin vaalea`,
	vibrant: `eloisa`,
	white: `valkea`,
	yellow: `keltainen`,
	"yellow green": `keltavihreä`
};
var rs = {};
rs = {
	alpha: `Alpha`,
	black: `Noir`,
	blue: `Bleu`,
	"blue purple": `Violet bleu`,
	brightness: `Luminosité`,
	brown: `Brun`,
	"brown yellow": `Jaune brun`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `Cyan`,
	"cyan blue": `Bleu cyan`,
	dark: `Sombre`,
	gray: `Gris`,
	grayish: `Grisâtre`,
	green: `Vert`,
	"green cyan": `Cyan vert`,
	hue: `Teinte`,
	light: `Clair`,
	lightness: `Luminosité`,
	magenta: `Magenta`,
	"magenta pink": `Rose magenta`,
	orange: `Orange`,
	"orange yellow": `Jaune orangé`,
	pale: `Pâle`,
	pink: `Rose`,
	"pink red": `Rouge rosé`,
	purple: `Violet`,
	"purple magenta": `Magenta violet`,
	red: `Rouge`,
	"red orange": `Orange rouge`,
	saturation: `Saturation`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} transparent`,
	"very dark": `Très sombre`,
	"very light": `Très clair`,
	vibrant: `Vif`,
	white: `Blanc`,
	yellow: `Jaune`,
	"yellow green": `Vert jaune`
};
var is = {};
is = {
	alpha: `אלפא`,
	black: `שחור`,
	blue: `כחול`,
	"blue purple": `כחול סגול`,
	brightness: `בהירות`,
	brown: `חום`,
	"brown yellow": `חום צהוב`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `טורקיז`,
	"cyan blue": `כחול ציאן`,
	dark: `כהה`,
	gray: `אפור`,
	grayish: `אפרפר`,
	green: `ירוק`,
	"green cyan": `ציאן ירוק`,
	hue: `גוון`,
	light: `אור`,
	lightness: `כמות אור`,
	magenta: `מג'נטה`,
	"magenta pink": `ורוד מג'נטה`,
	orange: `כתום`,
	"orange yellow": `כתום צהוב`,
	pale: `חיוור`,
	pink: `ורוד`,
	"pink red": `ורוד אדום`,
	purple: `סגול`,
	"purple magenta": `מג'נטה סגול`,
	red: `אדום`,
	"red orange": `כתום אדום`,
	saturation: `רוויה`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} \u{5E9}\u{5E7}\u{5D5}\u{5E3}`,
	"very dark": `כהה מאוד`,
	"very light": `בהיר מאוד`,
	vibrant: `תוסס`,
	white: `לבן`,
	yellow: `צהוב`,
	"yellow green": `צהוב ירוק`
};
var as = {};
as = {
	alpha: `Alfa`,
	black: `crno`,
	blue: `Plava`,
	"blue purple": `plavo ljubičasta`,
	brightness: `Svjetlina`,
	brown: `smeđa`,
	"brown yellow": `smeđe žuta`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `cijan`,
	"cyan blue": `cijan plava`,
	dark: `tamno`,
	gray: `siva`,
	grayish: `sivkasto`,
	green: `Zelena`,
	"green cyan": `zelena cijan`,
	hue: `Nijansa`,
	light: `svjetlo`,
	lightness: `Osvijetljenost`,
	magenta: `magenta`,
	"magenta pink": `magentno ružičasta`,
	orange: `narančasta`,
	"orange yellow": `narančasto žuta`,
	pale: `blijeda`,
	pink: `ružičasta`,
	"pink red": `ružičasto crvena`,
	purple: `ljubičasta`,
	"purple magenta": `ljubičasta magenta`,
	red: `Crvena`,
	"red orange": `crveno narančasta`,
	saturation: `Zasićenost`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} prozirnosti`,
	"very dark": `jako tamna`,
	"very light": `vrlo svijetlo`,
	vibrant: `vibrantna`,
	white: `bijela`,
	yellow: `žuto`,
	"yellow green": `žuto zelena`
};
var os = {};
os = {
	alpha: `Alfa`,
	black: `fekete`,
	blue: `Kék`,
	"blue purple": `kék lila`,
	brightness: `Fényesség`,
	brown: `barna`,
	"brown yellow": `barna sárga`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `ciánkék`,
	"cyan blue": `ciánkék`,
	dark: `sötét`,
	gray: `szürke`,
	grayish: `szürkés`,
	green: `Zöld`,
	"green cyan": `zöld ciánkék`,
	hue: `Színárnyalat`,
	light: `világos`,
	lightness: `Világosság`,
	magenta: `bíbor`,
	"magenta pink": `bíbor rózsaszín`,
	orange: `narancs`,
	"orange yellow": `narancssárga`,
	pale: `halvány`,
	pink: `rózsaszín`,
	"pink red": `rózsaszín piros`,
	purple: `lila`,
	"purple magenta": `lila bíbor`,
	red: `Piros`,
	"red orange": `piros narancs`,
	saturation: `Telítettség`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} \xe1tl\xe1tsz\xf3`,
	"very dark": `nagyon sötét`,
	"very light": `nagyon világos`,
	vibrant: `élénk`,
	white: `fehér`,
	yellow: `sárga`,
	"yellow green": `sárga zöld`
};
var ss = {};
ss = {
	alpha: `Alfa`,
	black: `nero`,
	blue: `Blu`,
	"blue purple": `blu viola`,
	brightness: `Luminosità`,
	brown: `marrone`,
	"brown yellow": `giallo bruno`,
	colorName: (e) => `${e.hue} ${e.chroma} ${e.lightness}`,
	cyan: `ciano`,
	"cyan blue": `blu ciano`,
	dark: `scuro`,
	gray: `grigio`,
	grayish: `grigiastro`,
	green: `Verde`,
	"green cyan": `verde ciano`,
	hue: `Tonalità`,
	light: `chiaro`,
	lightness: `Luminosità`,
	magenta: `magenta`,
	"magenta pink": `rosa magenta`,
	orange: `arancio`,
	"orange yellow": `giallo arancio`,
	pale: `tenue`,
	pink: `rosa`,
	"pink red": `rosa rosso`,
	purple: `viola`,
	"purple magenta": `viola magenta`,
	red: `Rosso`,
	"red orange": `rosso arancio`,
	saturation: `Saturazione`,
	transparentColorName: (e) => `${e.hue} ${e.chroma} ${e.lightness}, trasparenza ${e.percentTransparent}`,
	"very dark": `molto scuro`,
	"very light": `molto chiaro`,
	vibrant: `vivace`,
	white: `bianco`,
	yellow: `giallo`,
	"yellow green": `giallo verde`
};
var cs = {};
cs = {
	alpha: `アルファ`,
	black: `ブラック`,
	blue: `青`,
	"blue purple": `ブルーパープル`,
	brightness: `明るさ`,
	brown: `ブラウン`,
	"brown yellow": `ブラウンイエロー`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `シアン`,
	"cyan blue": `シアンブルー`,
	dark: `ダーク`,
	gray: `グレー`,
	grayish: `グレイッシュ`,
	green: `緑`,
	"green cyan": `グリーンシアン`,
	hue: `色相`,
	light: `ライト`,
	lightness: `明度`,
	magenta: `マゼンタ`,
	"magenta pink": `マゼンタピンク`,
	orange: `オレンジ`,
	"orange yellow": `オレンジイエロー`,
	pale: `ペール`,
	pink: `ピンク`,
	"pink red": `ピンクレッド`,
	purple: `パープル`,
	"purple magenta": `パープルマゼンタ`,
	red: `赤`,
	"red orange": `レッドオレンジ`,
	saturation: `彩度`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} \u{900F}\u{660E}`,
	"very dark": `最も暗い`,
	"very light": `ベリーライト`,
	vibrant: `鮮やか`,
	white: `ホワイト`,
	yellow: `イエロー`,
	"yellow green": `イエローグリーン`
};
var ls = {};
ls = {
	alpha: `알파`,
	black: `검은색`,
	blue: `파랑`,
	"blue purple": `청자색`,
	brightness: `명도`,
	brown: `갈색`,
	"brown yellow": `황갈색`,
	colorName: (e) => `${e.lightness}, ${e.chroma}, ${e.hue}`,
	cyan: `청록색`,
	"cyan blue": `청록색`,
	dark: `다크`,
	gray: `회색`,
	grayish: `회갈색`,
	green: `초록`,
	"green cyan": `청록색`,
	hue: `색조`,
	light: `라이트`,
	lightness: `밝기`,
	magenta: `자홍색`,
	"magenta pink": `마젠타 핑크`,
	orange: `주황색`,
	"orange yellow": `불그스름한 노랑`,
	pale: `흙색`,
	pink: `분홍색`,
	"pink red": `핑크 레드`,
	purple: `자주색`,
	"purple magenta": `보라빛 자홍색`,
	red: `빨강`,
	"red orange": `붉은 주황색`,
	saturation: `채도`,
	transparentColorName: (e) => `${e.lightness}, ${e.chroma}, ${e.hue}, ${e.percentTransparent} \u{D22C}\u{BA85}\u{B3C4}`,
	"very dark": `매우 어두운`,
	"very light": `매우 연함`,
	vibrant: `강렬한`,
	white: `흰색`,
	yellow: `노란색`,
	"yellow green": `연두색`
};
var us = {};
us = {
	alpha: `Alfa`,
	black: `juoda`,
	blue: `Mėlyna`,
	"blue purple": `melsvai violetinė`,
	brightness: `Ryškumas`,
	brown: `ruda`,
	"brown yellow": `rusvai geltona`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `žalsvai mėlyna`,
	"cyan blue": `žalsvai mėlyna`,
	dark: `tamsi`,
	gray: `pilka`,
	grayish: `pilkšva`,
	green: `Žalia`,
	"green cyan": `žalsvai mėlyna`,
	hue: `Atspalvis`,
	light: `šviesi`,
	lightness: `Šviesumas`,
	magenta: `rausvai raudona`,
	"magenta pink": `purpurinė`,
	orange: `oranžinė`,
	"orange yellow": `oranžinio atspalvio geltona`,
	pale: `blyški`,
	pink: `rožinė`,
	"pink red": `rožinė raudona`,
	purple: `violetinė`,
	"purple magenta": `purpurinė rausvai raudona`,
	red: `Raudona`,
	"red orange": `rausvai oranžinė`,
	saturation: `Įsotinimas`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} skaidri`,
	"very dark": `labai tamsi`,
	"very light": `labai šviesi`,
	vibrant: `ryški`,
	white: `balta`,
	yellow: `geltona`,
	"yellow green": `gelsvai žalia`
};
var ds = {};
ds = {
	alpha: `Alfa`,
	black: `melns`,
	blue: `Zila`,
	"blue purple": `zili violets`,
	brightness: `Spilgtums`,
	brown: `brūns`,
	"brown yellow": `brūni dzeltens`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `ciāns`,
	"cyan blue": `ciāna zils`,
	dark: `tumšs`,
	gray: `pelēks`,
	grayish: `pelēcīgs`,
	green: `Zaļa`,
	"green cyan": `zaļš ciāns`,
	hue: `Nokrāsa`,
	light: `gaišs`,
	lightness: `Gaišums`,
	magenta: `fuksiju`,
	"magenta pink": `fuksiju rozā`,
	orange: `oranžs`,
	"orange yellow": `oranži dzeltens`,
	pale: `bāls`,
	pink: `rozā`,
	"pink red": `rozīgi sarkans`,
	purple: `violets`,
	"purple magenta": `violets fuksiju`,
	red: `Sarkana`,
	"red orange": `sarkanīgi oranžs`,
	saturation: `Piesātinājums`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} caursp\u{12B}d\u{12B}gs`,
	"very dark": `ļoti tumšs`,
	"very light": `ļoti gaišs`,
	vibrant: `košs`,
	white: `balts`,
	yellow: `dzeltens`,
	"yellow green": `dzelteni zaļš`
};
var fs = {};
fs = {
	alpha: `Alfa`,
	black: `svart`,
	blue: `Blå`,
	"blue purple": `blålilla`,
	brightness: `Lysstyrke`,
	brown: `brun`,
	"brown yellow": `brungul`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `cyan`,
	"cyan blue": `cyanblå`,
	dark: `mørk`,
	gray: `grå`,
	grayish: `gråaktig`,
	green: `Grønn`,
	"green cyan": `grønncyan`,
	hue: `Fargetone`,
	light: `lys`,
	lightness: `Lyshet`,
	magenta: `magenta`,
	"magenta pink": `magentarosa`,
	orange: `oransje`,
	"orange yellow": `oransjegul`,
	pale: `blek`,
	pink: `rosa`,
	"pink red": `rosarød`,
	purple: `lilla`,
	"purple magenta": `lillamagenta`,
	red: `Rød`,
	"red orange": `rødoransje`,
	saturation: `Metning`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} gjennomsiktig`,
	"very dark": `svært mørk`,
	"very light": `svært lys`,
	vibrant: `levende`,
	white: `hvit`,
	yellow: `gul`,
	"yellow green": `gulgrønn`
};
var ps = {};
ps = {
	alpha: `Alfa`,
	black: `zwart`,
	blue: `Blauw`,
	"blue purple": `paarsblauw`,
	brightness: `Helderheid`,
	brown: `bruin`,
	"brown yellow": `bruingeel`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `cyaan`,
	"cyan blue": `cyaanblauw`,
	dark: `donker`,
	gray: `grijs`,
	grayish: `grijsachtig`,
	green: `Groen`,
	"green cyan": `cyaangroen`,
	hue: `Kleurtoon`,
	light: `licht`,
	lightness: `Lichtsterkte`,
	magenta: `magenta`,
	"magenta pink": `magentaroze`,
	orange: `oranje`,
	"orange yellow": `oranjegeel`,
	pale: `bleek`,
	pink: `roze`,
	"pink red": `rozerood`,
	purple: `paars`,
	"purple magenta": `magentapaars`,
	red: `Rood`,
	"red orange": `roodoranje`,
	saturation: `Verzadiging`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} transparant`,
	"very dark": `heel donker`,
	"very light": `heel licht`,
	vibrant: `levendig`,
	white: `wit`,
	yellow: `geel`,
	"yellow green": `geelgroen`
};
var ms = {};
ms = {
	alpha: `Alfa`,
	black: `czarny`,
	blue: `Niebieski`,
	"blue purple": `niebiesko-fioletowy`,
	brightness: `Jasność`,
	brown: `brązowy`,
	"brown yellow": `brązowo-żółty`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `cyjanowy`,
	"cyan blue": `cyjanowo-niebieski`,
	dark: `ciemny`,
	gray: `szary`,
	grayish: `szarawy`,
	green: `Zielony`,
	"green cyan": `zielono-cyjanowy`,
	hue: `Odcień`,
	light: `jasny`,
	lightness: `Jaskrawość`,
	magenta: `purpurowy`,
	"magenta pink": `purpurowo-różowy`,
	orange: `pomarańczowy`,
	"orange yellow": `pomarańczowo-żółty`,
	pale: `blady`,
	pink: `różowy`,
	"pink red": `różowo-czerwony`,
	purple: `fioletowy`,
	"purple magenta": `fioletowo-purpurowy`,
	red: `Czerwony`,
	"red orange": `czerwono-pomarańczowy`,
	saturation: `Nasycenie`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} przezroczysto\u{15B}ci`,
	"very dark": `bardzo ciemny`,
	"very light": `bardzo jasny`,
	vibrant: `intensywny`,
	white: `biały`,
	yellow: `żółty`,
	"yellow green": `żółto-zielony`
};
var hs = {};
hs = {
	alpha: `Alfa`,
	black: `preto`,
	blue: `Azul`,
	"blue purple": `roxo azulado`,
	brightness: `Brilho`,
	brown: `marrom`,
	"brown yellow": `marrom amarelado`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `ciano`,
	"cyan blue": `azul-ciano`,
	dark: `escuro`,
	gray: `cinza`,
	grayish: `acinzentado`,
	green: `Verde`,
	"green cyan": `verde-ciano`,
	hue: `Matiz`,
	light: `claro`,
	lightness: `Luminosidade`,
	magenta: `magenta`,
	"magenta pink": `rosa-magenta`,
	orange: `laranja`,
	"orange yellow": `amarelo alaranjado`,
	pale: `pálido`,
	pink: `rosa`,
	"pink red": `rosa avermelhado`,
	purple: `roxo`,
	"purple magenta": `roxo-magenta`,
	red: `Vermelho`,
	"red orange": `laranja avermelhado`,
	saturation: `Saturação`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} transparente`,
	"very dark": `muito escuro`,
	"very light": `muito claro`,
	vibrant: `vibrante`,
	white: `branco`,
	yellow: `amarelo`,
	"yellow green": `verde amarelado`
};
var gs = {};
gs = {
	alpha: `Alfa`,
	black: `preto`,
	blue: `Azul`,
	"blue purple": `azul-púrpura`,
	brightness: `Luminosidade`,
	brown: `castanho`,
	"brown yellow": `amarelo-castanho`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `ciano`,
	"cyan blue": `azul-ciano`,
	dark: `escuro`,
	gray: `cinzento`,
	grayish: `acinzentado`,
	green: `Verde`,
	"green cyan": `verde-ciano`,
	hue: `Tonalidade`,
	light: `claro`,
	lightness: `Claridade`,
	magenta: `magenta`,
	"magenta pink": `rosa-magenta`,
	orange: `laranja`,
	"orange yellow": `amarelo-laranja`,
	pale: `pálido`,
	pink: `cor-de-rosa`,
	"pink red": `vermelho-rosa`,
	purple: `púrpura`,
	"purple magenta": `púrpura-magenta`,
	red: `Vermelho`,
	"red orange": `laranja-vermelho`,
	saturation: `Saturação`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} transparente`,
	"very dark": `muito escuro`,
	"very light": `muito claro`,
	vibrant: `vibrante`,
	white: `branco`,
	yellow: `amarelo`,
	"yellow green": `verde-amarelo`
};
var _s = {};
_s = {
	alpha: `Alfa`,
	black: `negru`,
	blue: `Albastru`,
	"blue purple": `albastru-violet`,
	brightness: `Luminozitate`,
	brown: `maro`,
	"brown yellow": `galben maro`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `bleu`,
	"cyan blue": `albastru-bleu`,
	dark: `închis`,
	gray: `gri`,
	grayish: `cenușiu`,
	green: `Verde`,
	"green cyan": `verde bleu`,
	hue: `Nuanță`,
	light: `deschis`,
	lightness: `Luminozitate`,
	magenta: `fucsia`,
	"magenta pink": `roz-fucsia`,
	orange: `portocaliu`,
	"orange yellow": `galben-portocaliu`,
	pale: `pal`,
	pink: `roz`,
	"pink red": `roz-roșu`,
	purple: `violet`,
	"purple magenta": `violet-fucsia`,
	red: `Roșu`,
	"red orange": `portocaliu-roșu`,
	saturation: `Saturație`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} transparent`,
	"very dark": `foarte închis`,
	"very light": `foarte deschis`,
	vibrant: `plin de viață`,
	white: `alb`,
	yellow: `galben`,
	"yellow green": `galben-verde`
};
var vs = {};
vs = {
	alpha: `Альфа`,
	black: `черный`,
	blue: `Синий`,
	"blue purple": `сине-фиолетовый`,
	brightness: `Яркость`,
	brown: `коричневый`,
	"brown yellow": `коричнево-желтый`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `голубой`,
	"cyan blue": `цвет морской волны`,
	dark: `темный`,
	gray: `серый`,
	grayish: `сероватый`,
	green: `Зеленый`,
	"green cyan": `сине-зеленый`,
	hue: `Оттенок`,
	light: `светлый`,
	lightness: `Освещенность`,
	magenta: `пурпурный`,
	"magenta pink": `пурпурно-розовый`,
	orange: `оранжевый`,
	"orange yellow": `оранжево-желтый`,
	pale: `бледный`,
	pink: `розовый`,
	"pink red": `розово-красный`,
	purple: `фиолетовый`,
	"purple magenta": `фиолетово-пурпурный`,
	red: `Красный`,
	"red orange": `красно-оранжевый`,
	saturation: `Насыщенность`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, \u{43F}\u{440}\u{43E}\u{437}\u{440}\u{430}\u{447}\u{43D}\u{44B}\u{439} \u{43D}\u{430} ${e.percentTransparent}`,
	"very dark": `очень темный`,
	"very light": `очень светлый`,
	vibrant: `яркий`,
	white: `белый`,
	yellow: `желтый`,
	"yellow green": `желто-зеленый`
};
var ys = {};
ys = {
	alpha: `Alfa`,
	black: `čierna`,
	blue: `Modrá`,
	"blue purple": `modrofialová`,
	brightness: `Jas`,
	brown: `hnedá`,
	"brown yellow": `hnedožltá`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `azúrová`,
	"cyan blue": `azúrová modrá`,
	dark: `tmavá`,
	gray: `sivá`,
	grayish: `sivastá`,
	green: `Zelená`,
	"green cyan": `zelená azúrová`,
	hue: `Odtieň`,
	light: `svetlá`,
	lightness: `Svetlosť`,
	magenta: `purpurová`,
	"magenta pink": `ružová purpurová`,
	orange: `oranžová`,
	"orange yellow": `oranžovožltá`,
	pale: `bledá`,
	pink: `ružová`,
	"pink red": `ružovočervená`,
	purple: `fialová`,
	"purple magenta": `fialová purpurová`,
	red: `Červená`,
	"red orange": `červenooranžová`,
	saturation: `Sýtosť`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} prieh\u{13E}adn\xe1`,
	"very dark": `veľmi tmavá`,
	"very light": `veľmi svetlá`,
	vibrant: `energická`,
	white: `biela`,
	yellow: `žltá`,
	"yellow green": `žltozelená`
};
var bs = {};
bs = {
	alpha: `Alfa`,
	black: `črna`,
	blue: `Modra`,
	"blue purple": `modro vijolična`,
	brightness: `Svetlost`,
	brown: `rjava`,
	"brown yellow": `rjavo rumena`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `cian`,
	"cyan blue": `cian modra`,
	dark: `temna`,
	gray: `siva`,
	grayish: `sivkasta`,
	green: `Zelena`,
	"green cyan": `zelena cian`,
	hue: `Barva`,
	light: `svetla`,
	lightness: `Lahkost`,
	magenta: `škrlatna`,
	"magenta pink": `škrlatno roza`,
	orange: `oranžna`,
	"orange yellow": `oranžno rumena`,
	pale: `bleda`,
	pink: `roza`,
	"pink red": `roza rdeča`,
	purple: `vijolična`,
	"purple magenta": `vijolično škrlatna`,
	red: `Rdeča`,
	"red orange": `rdeče oranžna`,
	saturation: `Nasičenost`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} prozorna`,
	"very dark": `zelo temna`,
	"very light": `zelo svetla`,
	vibrant: `živahna`,
	white: `bela`,
	yellow: `rumena`,
	"yellow green": `rumeno zelena`
};
var xs = {};
xs = {
	alpha: `Alfa`,
	black: `crno`,
	blue: `Plava`,
	"blue purple": `plavoljubičasta`,
	brightness: `Osvetljenost`,
	brown: `smeđa`,
	"brown yellow": `smeđežuta`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `cijan`,
	"cyan blue": `cijan plava`,
	dark: `tamno`,
	gray: `siva`,
	grayish: `sivkasta`,
	green: `Zelena`,
	"green cyan": `zeleno cijan`,
	hue: `Nijansa`,
	light: `svetla`,
	lightness: `Osvetljenje`,
	magenta: `purpurnocrvena`,
	"magenta pink": `magenta ružičasta`,
	orange: `narandžasta`,
	"orange yellow": `narandžastožuta`,
	pale: `bledo`,
	pink: `ružičasta`,
	"pink red": `ružičastocrvena`,
	purple: `ljubičasta`,
	"purple magenta": `ljubičasta magenta`,
	red: `Crvena`,
	"red orange": `crvenonarandžasta`,
	saturation: `Zasićenje`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} prozirna`,
	"very dark": `veoma tamno`,
	"very light": `vrlo svetlo`,
	vibrant: `živopisna`,
	white: `bela`,
	yellow: `žuto`,
	"yellow green": `žutozelena`
};
var Ss = {};
Ss = {
	alpha: `Alfa`,
	black: `svart`,
	blue: `Blått`,
	"blue purple": `blålila`,
	brightness: `Ljusstyrka`,
	brown: `brun`,
	"brown yellow": `brungul`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `cyan`,
	"cyan blue": `cyanblå`,
	dark: `mörk`,
	gray: `grå`,
	grayish: `gråaktig`,
	green: `Grönt`,
	"green cyan": `grön cyan`,
	hue: `Nyans`,
	light: `ljus`,
	lightness: `Ljushet`,
	magenta: `magenta`,
	"magenta pink": `magentarosa`,
	orange: `orange`,
	"orange yellow": `orangegul`,
	pale: `blek`,
	pink: `rosa`,
	"pink red": `rosaröd`,
	purple: `lila`,
	"purple magenta": `lila magenta`,
	red: `Rött`,
	"red orange": `rödorange`,
	saturation: `Mättnad`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} genomskinlig`,
	"very dark": `mycket mörk`,
	"very light": `mycket ljus`,
	vibrant: `livfull`,
	white: `vit`,
	yellow: `gul`,
	"yellow green": `gulgrön`
};
var Cs = {};
Cs = {
	alpha: `Alfa`,
	black: `siyah`,
	blue: `Mavi`,
	"blue purple": `mavi mor`,
	brightness: `Parlaklık`,
	brown: `kahverengi`,
	"brown yellow": `kahverengi sarı`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `camgöbeği`,
	"cyan blue": `camgöbeği mavi`,
	dark: `koyu`,
	gray: `gri`,
	grayish: `grimsi`,
	green: `Yeşil`,
	"green cyan": `yeşil camgöbeği`,
	hue: `Ton`,
	light: `açık`,
	lightness: `Canlılık`,
	magenta: `eflatun`,
	"magenta pink": `eflatun pembe`,
	orange: `turuncu`,
	"orange yellow": `turuncu sarı`,
	pale: `solgun`,
	pink: `pembe`,
	"pink red": `pembe kırmızı`,
	purple: `mor`,
	"purple magenta": `mor eflatun`,
	red: `Kırmızı`,
	"red orange": `kırmızı portakal`,
	saturation: `Doygunluk`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} saydam`,
	"very dark": `çok koyu`,
	"very light": `çok açık`,
	vibrant: `canlı`,
	white: `beyaz`,
	yellow: `sarı`,
	"yellow green": `sarı yeşil`
};
var ws = {};
ws = {
	alpha: `Альфа`,
	black: `чорний`,
	blue: `Синій`,
	"blue purple": `синьо-фіолетовий`,
	brightness: `Яскравість`,
	brown: `коричневий`,
	"brown yellow": `коричнево-жовтий`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `блакитний`,
	"cyan blue": `синьо-блакитний`,
	dark: `темний`,
	gray: `сірий`,
	grayish: `сіруватий`,
	green: `Зелений`,
	"green cyan": `зелено-блакитний`,
	hue: `Тон`,
	light: `світлий`,
	lightness: `Освітленість`,
	magenta: `пурпуровий`,
	"magenta pink": `пурпурово-рожевий`,
	orange: `помаранчевий`,
	"orange yellow": `помаранчево-жовтий`,
	pale: `блідий`,
	pink: `рожевий`,
	"pink red": `рожево-червоний`,
	purple: `фіолетовий`,
	"purple magenta": `фіолетово-пурпуровий`,
	red: `Червоний`,
	"red orange": `червоно-помаранчевий`,
	saturation: `Насиченість`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, \u{43F}\u{440}\u{43E}\u{437}\u{43E}\u{440}\u{438}\u{439} \u{43D}\u{430} ${e.percentTransparent}`,
	"very dark": `дуже темний`,
	"very light": `дуже світлий`,
	vibrant: `яскравий`,
	white: `білий`,
	yellow: `жовтий`,
	"yellow green": `жовто-зелений`
};
var Ts = {};
Ts = {
	alpha: `Alpha`,
	black: `黑色`,
	blue: `蓝色`,
	"blue purple": `蓝紫色`,
	brightness: `亮度`,
	brown: `棕色的`,
	"brown yellow": `棕黄色`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `蓝绿色`,
	"cyan blue": `青蓝色`,
	dark: `深色`,
	gray: `灰色`,
	grayish: `浅灰色的`,
	green: `绿色`,
	"green cyan": `绿青色`,
	hue: `色相`,
	light: `浅色`,
	lightness: `明亮度`,
	magenta: `紫红色`,
	"magenta pink": `紫粉色`,
	orange: `橙色`,
	"orange yellow": `橙黄色`,
	pale: `苍白的`,
	pink: `粉色`,
	"pink red": `粉红色`,
	purple: `紫色`,
	"purple magenta": `紫洋红色`,
	red: `红色`,
	"red orange": `红橙色`,
	saturation: `饱和度`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} \u{900F}\u{660E}`,
	"very dark": `很暗`,
	"very light": `很浅`,
	vibrant: `生机勃勃`,
	white: `白色`,
	yellow: `黄色`,
	"yellow green": `黄色/绿色`
};
var Es = {};
Es = {
	alpha: `Alpha`,
	black: `黑`,
	blue: `藍色`,
	"blue purple": `藍紫`,
	brightness: `亮度`,
	brown: `棕`,
	"brown yellow": `棕黃`,
	colorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}`,
	cyan: `青`,
	"cyan blue": `青藍`,
	dark: `暗`,
	gray: `灰`,
	grayish: `偏灰`,
	green: `綠色`,
	"green cyan": `青綠`,
	hue: `色相`,
	light: `淺`,
	lightness: `明亮`,
	magenta: `洋紅`,
	"magenta pink": `淺洋紅`,
	orange: `橙`,
	"orange yellow": `橙黃`,
	pale: `淡`,
	pink: `粉紅`,
	"pink red": `粉紅`,
	purple: `紫`,
	"purple magenta": `紫洋紅`,
	red: `紅色`,
	"red orange": `橙紅`,
	saturation: `飽和度`,
	transparentColorName: (e) => `${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} \u{900F}\u{660E}`,
	"very dark": `很暗`,
	"very light": `很淺`,
	vibrant: `鮮豔`,
	white: `白`,
	yellow: `黃`,
	"yellow green": `黃綠`
};
var Ds = {};
Ds = {
	"ar-AE": qo,
	"bg-BG": Jo,
	"cs-CZ": Yo,
	"da-DK": Xo,
	"de-DE": Zo,
	"el-GR": Qo,
	"en-US": $o,
	"es-ES": es,
	"et-EE": ts,
	"fi-FI": ns,
	"fr-FR": rs,
	"he-IL": is,
	"hr-HR": as,
	"hu-HU": os,
	"it-IT": ss,
	"ja-JP": cs,
	"ko-KR": ls,
	"lt-LT": us,
	"lv-LV": ds,
	"nb-NO": fs,
	"nl-NL": ps,
	"pl-PL": ms,
	"pt-BR": hs,
	"pt-PT": gs,
	"ro-RO": _s,
	"ru-RU": vs,
	"sk-SK": ys,
	"sl-SI": bs,
	"sr-SP": xs,
	"sv-SE": Ss,
	"tr-TR": Cs,
	"uk-UA": ws,
	"zh-CN": Ts,
	"zh-TW": Es
};
function Os(e) {
	return e && e.__esModule ? e.default : e;
}
var ks = new be(Os(Ds));
function Z(e) {
	let t = Rs.parse(e) || Bs.parse(e) || Hs.parse(e);
	if (t) return t;
	throw Error(`Invalid color value: ` + e);
}
function As(e) {
	return typeof e == `string` ? Z(e) : e;
}
function js(e) {
	return e === 360 ? e : (e % 360 + 360) % 360;
}
var Ms = .68, Ns = .85, Ps = .55, Fs = .001, Is = [
	[0, `pink`],
	[15, `red`],
	[48, `orange`],
	[94, `yellow`],
	[135, `green`],
	[175, `cyan`],
	[264, `blue`],
	[284, `purple`],
	[320, `magenta`],
	[349, `pink`]
], Ls = class {
	toHexInt() {
		return this.toFormat(`rgb`).toHexInt();
	}
	getChannelValue(e) {
		if (e in this) return this[e];
		throw Error(`Unsupported color channel: ` + e);
	}
	withChannelValue(e, t) {
		if (e in this) {
			let n = this.clone();
			return n[e] = t, n;
		}
		throw Error(`Unsupported color channel: ` + e);
	}
	getChannelName(e, t) {
		return (be.getGlobalDictionaryForPackage(`@react-stately/color`) || ks).getStringForLocale(e, t);
	}
	getColorSpaceAxes(e) {
		let { xChannel: t, yChannel: n } = e, r = t || this.getColorChannels().find((e) => e !== n), i = n || this.getColorChannels().find((e) => e !== r);
		return {
			xChannel: r,
			yChannel: i,
			zChannel: this.getColorChannels().find((e) => e !== r && e !== i)
		};
	}
	getColorName(e) {
		let [t, n, r] = Us(this), i = be.getGlobalDictionaryForPackage(`@react-stately/color`) || ks;
		if (t > .999) return i.getStringForLocale(`white`, e);
		if (t < .001) return i.getStringForLocale(`black`, e);
		let a;
		[a, t] = this.getOklchHue(t, n, r, e);
		let o = ``, s = ``;
		n <= .1 && n >= Fs ? s = t >= .7 ? `pale` : `grayish` : n >= .15 && (s = `vibrant`), t < .3 ? o = `very dark` : t < Ps ? o = `dark` : t < .7 || (o = t < .85 ? `light` : `very light`), s &&= i.getStringForLocale(s, e), o &&= i.getStringForLocale(o, e);
		let c = this.getChannelValue(`alpha`), l = new Se(e, i);
		if (c < 1) {
			let t = new h(e, { style: `percent` }).format(1 - c);
			return l.format(`transparentColorName`, {
				lightness: o,
				chroma: s,
				hue: a,
				percentTransparent: t
			}).replace(/\s+/g, ` `).trim();
		}
		return l.format(`colorName`, {
			lightness: o,
			chroma: s,
			hue: a
		}).replace(/\s+/g, ` `).trim();
	}
	getOklchHue(e, t, n, r) {
		let i = be.getGlobalDictionaryForPackage(`@react-stately/color`) || ks;
		if (t < Fs) return [i.getStringForLocale(`gray`, r), e];
		for (let t = 0; t < Is.length; t++) {
			let [a, o] = Is[t], [s, c] = Is[t + 1] || [360, `pink`];
			if (n >= a && n < s) return o === `orange` && (e < Ms ? o = `brown` : e = e - Ms + Ps), n > a + (s - a) / 2 && o !== c ? o = `${o} ${c}` : o === `yellow` && e < Ns && (o = `yellow green`), [i.getStringForLocale(o, r).toLocaleLowerCase(r), e];
		}
		throw Error(`Unexpected hue`);
	}
	getHueName(e) {
		let [t, n, r] = Us(this), [i] = this.getOklchHue(t, n, r, e);
		return i;
	}
}, Rs = class e extends Ls {
	constructor(e, t, n, r) {
		super(), this.red = e, this.green = t, this.blue = n, this.alpha = r;
	}
	static parse(t) {
		let n = [];
		if (/^#[\da-f]+$/i.test(t) && [
			4,
			5,
			7,
			9
		].includes(t.length)) {
			let e = (t.length < 6 ? t.replace(/[^#]/gi, `$&$&`) : t).slice(1).split(``);
			for (; e.length > 0;) n.push(parseInt(e.splice(0, 2).join(``), 16));
			n[3] = n[3] === void 0 ? void 0 : n[3] / 255;
		}
		let r = t.match(/^rgba?\((.*)\)$/);
		if (r?.[1]) {
			let e = r[1].split(`,`).map((e) => e.trim());
			if (e.some((e) => e === `` || !Number.isFinite(Number(e)))) return;
			n = e.map((e, t) => a(Number(e), 0, t < 3 ? 255 : 1));
		}
		if (n[0] !== void 0 && n[1] !== void 0 && n[2] !== void 0) return n.length < 3 ? void 0 : new e(n[0], n[1], n[2], n[3] ?? 1);
	}
	toString(e = `css`) {
		switch (e) {
			case `hex`: return `#` + (this.red.toString(16).padStart(2, `0`) + this.green.toString(16).padStart(2, `0`) + this.blue.toString(16).padStart(2, `0`)).toUpperCase();
			case `hexa`: return `#` + (this.red.toString(16).padStart(2, `0`) + this.green.toString(16).padStart(2, `0`) + this.blue.toString(16).padStart(2, `0`) + Math.round(this.alpha * 255).toString(16).padStart(2, `0`)).toUpperCase();
			case `rgb`: return `rgb(${this.red}, ${this.green}, ${this.blue})`;
			case `css`:
			case `rgba`: return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
			default: return this.toFormat(e).toString(e);
		}
	}
	toFormat(e) {
		switch (e) {
			case `hex`:
			case `hexa`:
			case `rgb`:
			case `rgba`: return this;
			case `hsb`:
			case `hsba`: return this.toHSB();
			case `hsl`:
			case `hsla`: return this.toHSL();
			default: throw Error(`Unsupported color conversion: rgb -> ` + e);
		}
	}
	toHexInt() {
		return this.red << 16 | this.green << 8 | this.blue;
	}
	toHSB() {
		let e = this.red / 255, t = this.green / 255, n = this.blue / 255, r = Math.min(e, t, n), i = Math.max(e, t, n), a = i - r, o = i === 0 ? 0 : a / i, s = 0;
		if (a !== 0) {
			switch (i) {
				case e:
					s = (t - n) / a + (t < n ? 6 : 0);
					break;
				case t:
					s = (n - e) / a + 2;
					break;
				case n: s = (e - t) / a + 4;
			}
			s /= 6;
		}
		return new Bs(l(s * 360, 2), l(o * 100, 2), l(i * 100, 2), this.alpha);
	}
	toHSL() {
		let e = this.red / 255, t = this.green / 255, n = this.blue / 255, r = Math.min(e, t, n), i = Math.max(e, t, n), a = (i + r) / 2, o = i - r, s, c;
		if (o === 0) s = c = 0;
		else {
			switch (c = o / (a < .5 ? i + r : 2 - i - r), i) {
				case e:
					s = (t - n) / o + (t < n ? 6 : 0);
					break;
				case t:
					s = (n - e) / o + 2;
					break;
				case n:
				default: s = (e - t) / o + 4;
			}
			s /= 6;
		}
		return new Hs(l(s * 360, 2), l(c * 100, 2), l(a * 100, 2), this.alpha);
	}
	clone() {
		return new e(this.red, this.green, this.blue, this.alpha);
	}
	getChannelRange(e) {
		switch (e) {
			case `red`:
			case `green`:
			case `blue`: return {
				minValue: 0,
				maxValue: 255,
				step: 1,
				pageSize: 17
			};
			case `alpha`: return {
				minValue: 0,
				maxValue: 1,
				step: .01,
				pageSize: .1
			};
			default: throw Error(`Unknown color channel: ` + e);
		}
	}
	getChannelFormatOptions(e) {
		switch (e) {
			case `red`:
			case `green`:
			case `blue`: return { style: `decimal` };
			case `alpha`: return { style: `percent` };
			default: throw Error(`Unknown color channel: ` + e);
		}
	}
	formatChannelValue(e, t) {
		let n = this.getChannelFormatOptions(e), r = this.getChannelValue(e);
		return new h(t, n).format(r);
	}
	getColorSpace() {
		return `rgb`;
	}
	static {
		this.colorChannels = [
			`red`,
			`green`,
			`blue`
		];
	}
	getColorChannels() {
		return e.colorChannels;
	}
}, zs = /hsb\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsba\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/, Bs = class e extends Ls {
	constructor(e, t, n, r) {
		super(), this.hue = e, this.saturation = t, this.brightness = n, this.alpha = r;
	}
	static parse(t) {
		let n;
		if (n = t.match(zs)) {
			let [t, r, i, o] = (n[1] ?? n[2]).split(`,`).map((e) => Number(e.trim().replace(`%`, ``)));
			return new e(js(t), a(r, 0, 100), a(i, 0, 100), a(o ?? 1, 0, 1));
		}
	}
	toString(e = `css`) {
		switch (e) {
			case `css`: return this.toHSL().toString(`css`);
			case `hex`: return this.toRGB().toString(`hex`);
			case `hexa`: return this.toRGB().toString(`hexa`);
			case `hsb`: return `hsb(${this.hue}, ${l(this.saturation, 2)}%, ${l(this.brightness, 2)}%)`;
			case `hsba`: return `hsba(${this.hue}, ${l(this.saturation, 2)}%, ${l(this.brightness, 2)}%, ${this.alpha})`;
			default: return this.toFormat(e).toString(e);
		}
	}
	toFormat(e) {
		switch (e) {
			case `hsb`:
			case `hsba`: return this;
			case `hsl`:
			case `hsla`: return this.toHSL();
			case `rgb`:
			case `rgba`: return this.toRGB();
			default: throw Error(`Unsupported color conversion: hsb -> ` + e);
		}
	}
	toHSL() {
		let e = this.saturation / 100, t = this.brightness / 100, n = t * (1 - e / 2);
		return e = n === 0 || n === 1 ? 0 : (t - n) / Math.min(n, 1 - n), new Hs(l(this.hue, 2), l(e * 100, 2), l(n * 100, 2), this.alpha);
	}
	toRGB() {
		let e = this.hue, t = this.saturation / 100, n = this.brightness / 100, r = (r, i = (r + e / 60) % 6) => n - t * n * Math.max(Math.min(i, 4 - i, 1), 0);
		return new Rs(Math.round(r(5) * 255), Math.round(r(3) * 255), Math.round(r(1) * 255), this.alpha);
	}
	clone() {
		return new e(this.hue, this.saturation, this.brightness, this.alpha);
	}
	getChannelRange(e) {
		switch (e) {
			case `hue`: return {
				minValue: 0,
				maxValue: 360,
				step: 1,
				pageSize: 15
			};
			case `saturation`:
			case `brightness`: return {
				minValue: 0,
				maxValue: 100,
				step: 1,
				pageSize: 10
			};
			case `alpha`: return {
				minValue: 0,
				maxValue: 1,
				step: .01,
				pageSize: .1
			};
			default: throw Error(`Unknown color channel: ` + e);
		}
	}
	getChannelFormatOptions(e) {
		switch (e) {
			case `hue`: return {
				style: `unit`,
				unit: `degree`,
				unitDisplay: `narrow`
			};
			case `saturation`:
			case `brightness`:
			case `alpha`: return { style: `percent` };
			default: throw Error(`Unknown color channel: ` + e);
		}
	}
	formatChannelValue(e, t) {
		let n = this.getChannelFormatOptions(e), r = this.getChannelValue(e);
		return (e === `saturation` || e === `brightness`) && (r /= 100), new h(t, n).format(r);
	}
	getColorSpace() {
		return `hsb`;
	}
	static {
		this.colorChannels = [
			`hue`,
			`saturation`,
			`brightness`
		];
	}
	getColorChannels() {
		return e.colorChannels;
	}
}, Vs = /hsl\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsla\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/, Hs = class e extends Ls {
	constructor(e, t, n, r) {
		super(), this.hue = e, this.saturation = t, this.lightness = n, this.alpha = r;
	}
	static parse(t) {
		let n;
		if (n = t.match(Vs)) {
			let [t, r, i, o] = (n[1] ?? n[2]).split(`,`).map((e) => Number(e.trim().replace(`%`, ``)));
			return new e(js(t), a(r, 0, 100), a(i, 0, 100), a(o ?? 1, 0, 1));
		}
	}
	toString(e = `css`) {
		switch (e) {
			case `hex`: return this.toRGB().toString(`hex`);
			case `hexa`: return this.toRGB().toString(`hexa`);
			case `hsl`: return `hsl(${this.hue}, ${l(this.saturation, 2)}%, ${l(this.lightness, 2)}%)`;
			case `css`:
			case `hsla`: return `hsla(${this.hue}, ${l(this.saturation, 2)}%, ${l(this.lightness, 2)}%, ${this.alpha})`;
			default: return this.toFormat(e).toString(e);
		}
	}
	toFormat(e) {
		switch (e) {
			case `hsl`:
			case `hsla`: return this;
			case `hsb`:
			case `hsba`: return this.toHSB();
			case `rgb`:
			case `rgba`: return this.toRGB();
			default: throw Error(`Unsupported color conversion: hsl -> ` + e);
		}
	}
	toHSB() {
		let e = this.saturation / 100, t = this.lightness / 100, n = t + e * Math.min(t, 1 - t);
		return e = n === 0 ? 0 : 2 * (1 - t / n), new Bs(l(this.hue, 2), l(e * 100, 2), l(n * 100, 2), this.alpha);
	}
	toRGB() {
		let e = this.hue, t = this.saturation / 100, n = this.lightness / 100, r = t * Math.min(n, 1 - n), i = (t, i = (t + e / 30) % 12) => n - r * Math.max(Math.min(i - 3, 9 - i, 1), -1);
		return new Rs(Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255), this.alpha);
	}
	clone() {
		return new e(this.hue, this.saturation, this.lightness, this.alpha);
	}
	getChannelRange(e) {
		switch (e) {
			case `hue`: return {
				minValue: 0,
				maxValue: 360,
				step: 1,
				pageSize: 15
			};
			case `saturation`:
			case `lightness`: return {
				minValue: 0,
				maxValue: 100,
				step: 1,
				pageSize: 10
			};
			case `alpha`: return {
				minValue: 0,
				maxValue: 1,
				step: .01,
				pageSize: .1
			};
			default: throw Error(`Unknown color channel: ` + e);
		}
	}
	getChannelFormatOptions(e) {
		switch (e) {
			case `hue`: return {
				style: `unit`,
				unit: `degree`,
				unitDisplay: `narrow`
			};
			case `saturation`:
			case `lightness`:
			case `alpha`: return { style: `percent` };
			default: throw Error(`Unknown color channel: ` + e);
		}
	}
	formatChannelValue(e, t) {
		let n = this.getChannelFormatOptions(e), r = this.getChannelValue(e);
		return (e === `saturation` || e === `lightness`) && (r /= 100), new h(t, n).format(r);
	}
	getColorSpace() {
		return `hsl`;
	}
	static {
		this.colorChannels = [
			`hue`,
			`saturation`,
			`lightness`
		];
	}
	getColorChannels() {
		return e.colorChannels;
	}
};
function Us(e) {
	let t = e.toFormat(`rgb`), n = t.getChannelValue(`red`) / 255, r = t.getChannelValue(`green`) / 255, i = t.getChannelValue(`blue`) / 255;
	[n, r, i] = Gs(n, r, i);
	let [a, o, s] = qs(n, r, i), [c, l, u] = Js(a, o, s);
	return Ws(c, l, u);
}
function Ws(e, t, n) {
	var r = Math.atan2(n, t) * 180 / Math.PI;
	return [
		e,
		Math.sqrt(t ** 2 + n ** 2),
		r >= 0 ? r : r + 360
	];
}
function Gs(e, t, n) {
	return [
		Ks(e),
		Ks(t),
		Ks(n)
	];
}
function Ks(e) {
	let t = e < 0 ? -1 : 1, n = Math.abs(e);
	return n <= .04045 ? e / 12.92 : t * ((n + .055) / 1.055) ** 2.4;
}
function qs(e, t, n) {
	return Ys([
		506752 / 1228815,
		87881 / 245763,
		12673 / 70218,
		87098 / 409605,
		175762 / 245763,
		12673 / 175545,
		7918 / 409605,
		87881 / 737289,
		1001167 / 1053270
	], e, t, n);
}
function Js(e, t, n) {
	let r = [
		.819022437996703,
		.3619062600528904,
		-.1288737815209879,
		.0329836539323885,
		.9292868615863434,
		.0361446663506424,
		.0481771893596242,
		.2642395317527308,
		.6335478284694309
	], i = [
		.210454268309314,
		.7936177747023054,
		-.0040720430116193,
		1.9779985324311684,
		-2.42859224204858,
		.450593709617411,
		.0259040424655478,
		.7827717124575296,
		-.8086757549230774
	], [a, o, s] = Ys(r, e, t, n);
	return Ys(i, Math.cbrt(a), Math.cbrt(o), Math.cbrt(s));
}
function Ys(e, t, n, r) {
	return [
		e[0] * t + e[1] * n + e[2] * r,
		e[3] * t + e[4] * n + e[5] * r,
		e[6] * t + e[7] * n + e[8] * r
	];
}
var Xs = (e) => [
	0,
	60,
	120,
	180,
	240,
	300,
	360
].map((t) => e.withChannelValue(`hue`, t).toString(`css`)).join(`, `), Zs = (e) => `${e.withChannelValue(`saturation`, 0)}, transparent`, Qs = {
	hue: Xs,
	saturation: Zs,
	lightness: () => `black, transparent, white`
}, $s = {
	hue: Xs,
	saturation: Zs,
	brightness: () => `black, transparent`
};
function ec({ direction: e, state: t, zChannel: n, xChannel: r, yChannel: i }) {
	return (0, W.useMemo)(() => {
		let a = e === `rtl` ? `left` : `right`, o = {}, s = t.value.getChannelValue(n);
		switch (t.value.getColorSpace()) {
			case `rgb`: {
				let e = Z(`rgb(0, 0, 0)`);
				o = {
					background: [
						`linear-gradient(to ${a}, ${e.withChannelValue(r, 0)}, ${e.withChannelValue(r, 255)})`,
						`linear-gradient(to top, ${e.withChannelValue(i, 0)}, ${e.withChannelValue(i, 255)})`,
						e.withChannelValue(n, s)
					].join(`,`),
					backgroundBlendMode: `screen`
				};
				break;
			}
			case `hsl`: {
				let e = t.value.getColorChannels(), i = Z(`hsl(0, 100%, 50%)`).withChannelValue(n, s), c = e.filter((e) => e !== n).map((e) => `linear-gradient(to ${e === r ? a : `top`}, ${Qs[e](i)})`).reverse();
				n === `hue` && c.push(i.toString(`css`)), o = { background: c.join(`, `) };
				break;
			}
			case `hsb`: {
				let e = t.value.getColorChannels(), i = Z(`hsb(0, 100%, 100%)`).withChannelValue(n, s), c = e.filter((e) => e !== n).map((e) => `linear-gradient(to ${e === r ? a : `top`}, ${$s[e](i)})`).reverse();
				n === `hue` && c.push(i.toString(`css`)), o = { background: c.join(`, `) };
				break;
			}
		}
		let { x: c, y: l } = t.getThumbPosition();
		e === `rtl` && (c = 1 - c);
		let u = { forcedColorAdjust: `none` };
		return {
			colorAreaStyleProps: { style: {
				position: `relative`,
				touchAction: `none`,
				...u,
				...o
			} },
			thumbStyleProps: { style: {
				position: `absolute`,
				left: `${c * 100}%`,
				top: `${l * 100}%`,
				transform: `translate(-50%, -50%)`,
				touchAction: `none`,
				...u
			} }
		};
	}, [
		e,
		t,
		n,
		r,
		i
	]);
}
function tc(e) {
	return e && e.__esModule ? e.default : e;
}
function nc(e, t) {
	let { isDisabled: n, inputXRef: r, inputYRef: i, containerRef: a, "aria-label": s, xName: l, yName: u, form: d } = e, f = xe(tc(Ko), `@react-aria/color`), { addGlobalListener: p, removeGlobalListener: h } = F(), { direction: g, locale: _ } = B(), [v, x] = (0, W.useState)(null), S = (0, W.useCallback)((e = r) => {
		e.current && c(e.current);
	}, [r]);
	Te(r, t.defaultValue, t.setValue);
	let [C, w] = (0, W.useState)(!1), [D, O] = (0, W.useState)(!1), { xChannel: k, yChannel: A, zChannel: j } = t.channels, M = t.xChannelStep, N = t.yChannelStep, P = (0, W.useRef)(null), I = (e, n, r) => {
		t.setDragging(!0), w(!0), e(), t.setDragging(!1), S(n), x(r);
	}, { keyboardProps: ee } = E({
		shortcuts: {
			PageUp: () => I(() => {
				t.incrementY(t.yChannelPageStep);
			}, i, `y`),
			PageDown: () => I(() => {
				t.decrementY(t.yChannelPageStep);
			}, i, `y`),
			Home: () => I(() => {
				g === `rtl` ? t.incrementX(t.xChannelPageStep) : t.decrementX(t.xChannelPageStep);
			}, r, `x`),
			End: () => I(() => {
				g === `rtl` ? t.decrementX(t.xChannelPageStep) : t.incrementX(t.xChannelPageStep);
			}, r, `x`)
		},
		allowRepeats: !0
	}), R = {
		onMoveStart() {
			P.current = null, t.setDragging(!0);
		},
		onMove({ deltaX: e, deltaY: n, pointerType: r, shiftKey: i }) {
			let { incrementX: o, decrementX: s, incrementY: c, decrementY: l, xChannelPageStep: u, xChannelStep: d, yChannelPageStep: f, yChannelStep: p, getThumbPosition: m, setColorFromPoint: h } = t;
			P.current ??= m();
			let { width: _, height: y } = a.current?.getBoundingClientRect() || {
				width: 0,
				height: 0
			}, b = e !== 0 || n !== 0;
			if (r === `keyboard`) {
				let t = i && u > d ? u : d, r = i && f > p ? f : p;
				e > 0 && g === `ltr` || e < 0 && g === `rtl` ? o(t) : e < 0 && g === `ltr` || e > 0 && g === `rtl` ? s(t) : n > 0 ? l(r) : n < 0 && c(r), w(b), v = b && Math.abs(n) > Math.abs(e) ? `y` : `x`, x(v);
			} else P.current.x += (g === `rtl` ? -1 : 1) * e / _, P.current.y += n / y, h(P.current.x, P.current.y);
		},
		onMoveEnd() {
			ne.current = !1, t.setDragging(!1), S(v === `x` ? r : i);
		}
	}, { moveProps: te } = Ee(R), { focusWithinProps: z } = L({ onFocusWithinChange: (e) => {
		e || (w(!1), O(!1));
	} }), V = (0, W.useRef)(void 0), ne = (0, W.useRef)(!1), { moveProps: re } = Ee({
		onMoveStart() {
			ne.current && R.onMoveStart();
		},
		onMove(e) {
			ne.current && R.onMove(e);
		},
		onMoveEnd() {
			ne.current && R.onMoveEnd();
		}
	}), ie = (e) => {
		t.isDragging || (V.current = e, w(!1), S(), t.setDragging(!0), typeof PointerEvent < `u` ? p(window, `pointerup`, H, !1) : (p(window, `mouseup`, H, !1), p(window, `touchend`, H, !1)));
	}, H = (e) => {
		(e.pointerId ?? e.changedTouches?.[0].identifier) === V.current && (w(!1), S(), t.setDragging(!1), V.current = void 0, ne.current = !1, typeof PointerEvent < `u` ? h(window, `pointerup`, H, !1) : (h(window, `mouseup`, H, !1), h(window, `touchend`, H, !1)));
	}, ae = (e, n, r, i) => {
		let a = e.getBoundingClientRect(), { width: o, height: s } = a, c = (r - a.x) / o, l = (i - a.y) / s;
		g === `rtl` && (c = 1 - c), c >= 0 && c <= 1 && l >= 0 && l <= 1 && !t.isDragging && V.current === void 0 && (ne.current = !0, w(!1), V.current = n, t.setColorFromPoint(c, l), S(), t.setDragging(!0), typeof PointerEvent < `u` ? p(window, `pointerup`, oe, !1) : (p(window, `mouseup`, oe, !1), p(window, `touchend`, oe, !1)));
	}, oe = (e) => {
		let n = e.pointerId ?? e.changedTouches?.[0].identifier;
		ne.current && n === V.current && (ne.current = !1, w(!1), V.current = void 0, t.setDragging(!1), S(), typeof PointerEvent < `u` ? h(window, `pointerup`, oe, !1) : (h(window, `mouseup`, oe, !1), h(window, `touchend`, oe, !1)));
	}, se = n ? {} : T({ ...typeof PointerEvent < `u` ? { onPointerDown: (e) => {
		e.pointerType === `mouse` && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) || ae(e.currentTarget, e.pointerId, e.clientX, e.clientY);
	} } : {
		onMouseDown: (e) => {
			e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || ae(e.currentTarget, void 0, e.clientX, e.clientY);
		},
		onTouchStart: (e) => {
			ae(e.currentTarget, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
		}
	} }, re), ce = n ? {} : T({ ...typeof PointerEvent < `u` ? { onPointerDown: (e) => {
		e.pointerType === `mouse` && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) || ie(e.pointerId);
	} } : {
		onMouseDown: (e) => {
			e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || ie(void 0);
		},
		onTouchStart: (e) => {
			ie(e.changedTouches[0].identifier);
		}
	} }, z, ee, te), { focusProps: le } = y({ onFocus: () => {
		x(`x`);
	} }), { focusProps: ue } = y({ onFocus: () => {
		x(`y`);
	} }), de = (e) => {
		let { target: n } = e;
		O(!0), n === r.current ? t.setXValue(parseFloat(n.value)) : n === i.current && t.setYValue(parseFloat(n.value));
	}, fe = m() || o(), U = t.getDisplayColor(), pe = (0, W.useCallback)((e) => `${D || C ? f.format(`colorNameAndValue`, {
		name: U.getChannelName(e, _),
		value: U.formatChannelValue(e, _)
	}) : [
		f.format(`colorNameAndValue`, {
			name: U.getChannelName(e, _),
			value: U.formatChannelValue(e, _)
		}),
		f.format(`colorNameAndValue`, {
			name: U.getChannelName(e === A ? k : A, _),
			value: U.formatChannelValue(e === A ? k : A, _)
		}),
		f.format(`colorNameAndValue`, {
			name: U.getChannelName(j, _),
			value: U.formatChannelValue(j, _)
		})
	].join(`, `)}, ${U.getColorName(_)}`, [
		_,
		U,
		f,
		D,
		C,
		k,
		A,
		j
	]), me = f.format(`colorPicker`), he = b({
		...e,
		"aria-label": s ? f.format(`colorInputLabel`, {
			label: s,
			channelLabel: me
		}) : me
	}), ge = b({
		...e,
		"aria-label": s ? f.format(`colorInputLabel`, {
			label: s,
			channelLabel: me
		}) : me
	}), _e = b({
		...e,
		"aria-label": s ? `${s}, ${me}` : void 0
	}, fe ? me : void 0), ve = f.format(`twoDimensionalSlider`), { visuallyHiddenProps: ye } = De({ style: {
		opacity: `0.0001`,
		width: `100%`,
		height: `100%`,
		pointerEvents: `none`
	} }), { colorAreaStyleProps: be, thumbStyleProps: Se } = ec({
		direction: g,
		state: t,
		xChannel: k,
		yChannel: A,
		zChannel: j
	});
	return {
		colorAreaProps: {
			..._e,
			...se,
			...be,
			role: `group`
		},
		thumbProps: {
			...ce,
			...Se,
			role: `presentation`
		},
		xInputProps: {
			...he,
			...ye,
			...le,
			type: `range`,
			min: t.value.getChannelRange(k).minValue,
			max: t.value.getChannelRange(k).maxValue,
			step: M,
			"aria-roledescription": ve,
			"aria-valuetext": pe(k),
			"aria-orientation": `horizontal`,
			"aria-describedby": e[`aria-describedby`],
			"aria-details": e[`aria-details`],
			disabled: n,
			value: t.value.getChannelValue(k),
			name: l,
			form: d,
			tabIndex: fe || !v || v === `x` ? void 0 : -1,
			"aria-hidden": fe || !v || v === `x` || C ? void 0 : `true`,
			onChange: de
		},
		yInputProps: {
			...ge,
			...ye,
			...ue,
			type: `range`,
			min: t.value.getChannelRange(A).minValue,
			max: t.value.getChannelRange(A).maxValue,
			step: N,
			"aria-roledescription": ve,
			"aria-valuetext": pe(A),
			"aria-orientation": `vertical`,
			"aria-describedby": e[`aria-describedby`],
			"aria-details": e[`aria-details`],
			disabled: n,
			value: t.value.getChannelValue(A),
			name: u,
			form: d,
			tabIndex: fe || v === `y` ? void 0 : -1,
			"aria-hidden": fe || v === `y` || C ? void 0 : `true`,
			onChange: de
		}
	};
}
var rc = Z(`#ffffff`);
function ic(e) {
	let { value: t, defaultValue: n, colorSpace: r, xChannel: i, yChannel: o, onChange: s, onChangeEnd: c } = e;
	!t && !n && (n = rc), t &&= As(t), n &&= As(n);
	let [l, u] = ke(t, n, s), [d] = (0, W.useState)(l), f = (0, W.useMemo)(() => r && l ? l.toFormat(r) : l, [l, r]), p = (0, W.useRef)(f), m = (e) => {
		p.current = e, u(e);
	}, h = (0, W.useMemo)(() => f.getColorSpaceAxes({
		xChannel: i,
		yChannel: o
	}), [
		f,
		i,
		o
	]), g = f.getChannelRange(h.xChannel), _ = f.getChannelRange(h.yChannel), { minValue: v, maxValue: y, step: b, pageSize: x } = g, { minValue: S, maxValue: C, step: w, pageSize: T } = _, [E, D] = (0, W.useState)(!1), O = (0, W.useRef)(!1), k = f.getChannelValue(h.xChannel), A = f.getChannelValue(h.yChannel), j = (e) => {
		if (e === k) return;
		let t = f.withChannelValue(h.xChannel, e);
		m(t);
	}, M = (e) => {
		if (e === A) return;
		let t = f.withChannelValue(h.yChannel, e);
		m(t);
	};
	return {
		channels: h,
		xChannelStep: b,
		yChannelStep: w,
		xChannelPageStep: x,
		yChannelPageStep: T,
		value: f,
		defaultValue: t === void 0 ? n : d,
		setValue(e) {
			m(As(e));
		},
		xValue: k,
		setXValue: j,
		yValue: A,
		setYValue: M,
		setColorFromPoint(e, t) {
			let n = v + a(e, 0, 1) * (y - v), r = S + (1 - a(t, 0, 1)) * (C - S), i;
			n !== k && (n = P(n, v, y, b), i = f.withChannelValue(h.xChannel, n)), r !== A && (r = P(r, S, C, w), i = (i || f).withChannelValue(h.yChannel, r)), i && m(i);
		},
		getThumbPosition() {
			return {
				x: (k - v) / (y - v),
				y: 1 - (A - S) / (C - S)
			};
		},
		incrementX(e = 1) {
			j(k + e > y ? y : P(k + e, v, y, b));
		},
		incrementY(e = 1) {
			M(A + e > C ? C : P(A + e, S, C, w));
		},
		decrementX(e = 1) {
			j(P(k - e, v, y, b));
		},
		decrementY(e = 1) {
			M(P(A - e, S, C, w));
		},
		setDragging(e) {
			let t = O.current;
			O.current = e, c && !e && t && c(p.current), D(e);
		},
		isDragging: E,
		getDisplayColor() {
			return f.withChannelValue(`alpha`, 1);
		}
	};
}
var ac = (0, W.createContext)(null), oc = (0, W.createContext)(null), sc = (0, W.forwardRef)(function(e, t) {
	[e, t] = I(e, t, ac);
	let n = (0, W.useRef)(null), r = (0, W.useRef)(null), i = ic(e), { colorAreaProps: a, xInputProps: o, yInputProps: s, thumbProps: c } = nc({
		...e,
		inputXRef: n,
		inputYRef: r,
		containerRef: t
	}, i), l = x({
		...e,
		defaultClassName: `react-aria-ColorArea`,
		defaultStyle: a.style,
		values: {
			state: i,
			isDisabled: e.isDisabled || !1
		}
	}), u = S(e, { global: !0 });
	return delete u.id, W.createElement(w.div, {
		ref: t,
		...T(u, a, l),
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0
	}, W.createElement(M, { values: [[oc, i], [lo, {
		state: i,
		thumbProps: c,
		inputXRef: n,
		xInputProps: o,
		inputYRef: r,
		yInputProps: s,
		isDisabled: e.isDisabled
	}]] }, l.children));
});
function cc(e, t, n) {
	let { isDisabled: r, isReadOnly: i, isRequired: a, isWheelDisabled: o, validationBehavior: s = `aria`, onKeyDown: c, onKeyUp: l } = e, { colorValue: u, inputValue: d, increment: f, decrement: p, incrementToMax: m, decrementToMin: h, commit: g, commitValidation: _ } = t, v = z(), { spinButtonProps: y } = Be({
		isDisabled: r,
		isReadOnly: i,
		isRequired: a,
		maxValue: 16777215,
		minValue: 0,
		onIncrement: f,
		onIncrementToMax: m,
		onDecrement: p,
		onDecrementToMin: h,
		value: u ? u.toHexInt() : void 0,
		textValue: u ? u.toString(`hex`) : void 0
	}), [b, x] = (0, W.useState)(!1), { focusWithinProps: S } = L({
		isDisabled: r,
		onFocusWithinChange: x
	}), C = (0, W.useCallback)((e) => {
		Math.abs(e.deltaY) <= Math.abs(e.deltaX) || (e.deltaY > 0 ? f() : e.deltaY < 0 && p());
	}, [p, f]);
	Le({
		onScroll: C,
		isDisabled: o || r || i || !b
	}, n);
	let { keyboardProps: w } = E({
		isDisabled: r || i,
		shortcuts: { Enter: () => ((0, Ja.flushSync)(() => {
			g();
		}), _(), { shouldPreventDefault: !1 }) },
		onKeyDown: c,
		onKeyUp: l
	}), D = (e) => {
		t.validate(e) && t.setInputValue(e);
	}, { inputProps: O, ...k } = Ie({
		...e,
		id: v,
		value: d,
		defaultValue: `!`,
		validate: void 0,
		[Ge]: t,
		type: `text`,
		autoComplete: `off`,
		onChange: D,
		onKeyDown: void 0,
		onKeyUp: void 0
	}, t, n);
	return Te(n, t.defaultColorValue, t.setColorValue), O = T(w, O, y, S, {
		role: `textbox`,
		"aria-valuemax": null,
		"aria-valuemin": null,
		"aria-valuenow": null,
		"aria-valuetext": null,
		autoCorrect: `off`,
		spellCheck: `false`,
		onBlur: g
	}), s === `native` && (O[`aria-required`] = void 0), {
		inputProps: O,
		...k
	};
}
function lc(e, t, n) {
	let { locale: r } = B();
	return Re({
		...e,
		value: void 0,
		defaultValue: void 0,
		onChange: void 0,
		validate: void 0,
		"aria-label": e[`aria-label`] || (e.label || e[`aria-labelledby`] ? void 0 : t.colorValue.getChannelName(e.channel, r))
	}, t, n);
}
function uc(e) {
	return (0, W.useMemo)(() => {
		if (typeof e == `string`) try {
			return Z(e);
		} catch {
			return;
		}
		return e;
	}, [e]);
}
var dc = Z(`#000000`), fc = Z(`#FFFFFF`), pc = dc.toHexInt(), mc = fc.toHexInt();
function hc(e) {
	let { value: t, defaultValue: n, onChange: r } = e, { step: i } = dc.getChannelRange(`red`), a = uc(n), [o, s] = ke(uc(t), a, r), [c] = (0, W.useState)(o), [l, u] = (0, W.useState)(() => (t || n) && o ? o.toString(`hex`) : ``), d = He({
		...e,
		value: o
	}), f = (e) => {
		o && e && e.toHexInt() === o.toHexInt() || s(e);
	}, [p, m] = (0, W.useState)(o);
	p !== o && (u(o ? o.toString(`hex`) : ``), m(o));
	let h = (0, W.useMemo)(() => {
		let e;
		try {
			e = Z(l.startsWith(`#`) ? l : `#${l}`);
		} catch {
			e = null;
		}
		return e;
	}, [l]), g = () => {
		if (!l.length) {
			f(null), u(t === void 0 || o === null ? `` : o.toString(`hex`));
			return;
		}
		if (h == null) {
			u(o ? o.toString(`hex`) : ``);
			return;
		}
		f(h);
		let e = ``;
		o && (e = o.toString(`hex`)), u(e), d.commitValidation();
	}, _ = () => {
		let e = gc(h, i);
		e === o && u(e.toString(`hex`)), f(e), d.commitValidation();
	}, v = () => {
		let e = gc(h, -i);
		e === o && u(e.toString(`hex`)), f(e), d.commitValidation();
	}, y = () => f(fc), b = () => f(dc), x = (e) => e === `` || !!e.match(/^#?[0-9a-f]{0,6}$/i)?.[0];
	return {
		...d,
		validate: x,
		colorValue: o,
		defaultColorValue: a ?? c,
		setColorValue: s,
		inputValue: l,
		setInputValue: u,
		commit: g,
		increment: _,
		incrementToMax: y,
		decrement: v,
		decrementToMin: b
	};
}
function gc(e, t) {
	let n = e || dc, r = n.toHexInt(), i = Math.min(Math.max(r + t, pc), mc);
	return i !== r && (n = Z(`#${i.toString(16).padStart(6, `0`).toUpperCase()}`)), n;
}
function _c(e) {
	let { channel: t, colorSpace: n, locale: r } = e, i = uc(e.value), a = uc(e.defaultValue), [o, s] = ke(i, a ?? null, e.onChange), c = vc(o, n), [l] = (0, W.useState)(o), u = a ?? l, d = vc(u, n), f = c.getChannelValue(t), p = c.getChannelRange(t), m = (0, W.useMemo)(() => c.getChannelFormatOptions(t), [c, t]), h = m.style === `percent` && p.maxValue === 100 ? 100 : 1;
	return {
		...Ve({
			locale: r,
			value: o === null ? NaN : f / h,
			defaultValue: u === null ? NaN : d.getChannelValue(t) / h,
			onChange: (e) => {
				s(Number.isNaN(e) ? null : c.withChannelValue(t, e * h));
			},
			minValue: p.minValue / h,
			maxValue: p.maxValue / h,
			step: p.step / h,
			formatOptions: m
		}),
		colorValue: c,
		defaultColorValue: u,
		setColorValue: s
	};
}
function vc(e, t) {
	let n = uc(`#000`);
	return (0, W.useMemo)(() => {
		let r = e || n;
		return t && r ? r.toFormat(t) : r;
	}, [
		n,
		e,
		t
	]);
}
var yc = (0, W.createContext)(null), bc = (0, W.createContext)(null), xc = (0, W.forwardRef)(function(e, t) {
	return [e, t] = I(e, t, yc), e.channel ? W.createElement(Sc, {
		...e,
		channel: e.channel,
		forwardedRef: t
	}) : W.createElement(Cc, {
		...e,
		forwardedRef: t
	});
});
function Sc(e) {
	let { locale: t } = B(), n = _c({
		...e,
		locale: t
	}), r = (0, W.useRef)(null), [i, a] = k(!e[`aria-label`] && !e[`aria-labelledby`]), { labelProps: o, inputProps: s, descriptionProps: c, errorMessageProps: l, ...u } = lc({
		...N(e),
		label: a,
		validationBehavior: e.validationBehavior ?? `native`
	}, n, r);
	return W.createElement(W.Fragment, null, wc(e, n, e.forwardedRef, s, r, o, i, c, l, u), e.name && W.createElement(`input`, {
		type: `hidden`,
		name: e.name,
		form: e.form,
		value: isNaN(n.numberValue) ? `` : n.numberValue
	}));
}
function Cc(e) {
	let t = hc({
		...e,
		validationBehavior: e.validationBehavior ?? `native`
	}), n = (0, W.useRef)(null), [r, i] = k(!e[`aria-label`] && !e[`aria-labelledby`]), { labelProps: a, inputProps: o, descriptionProps: s, errorMessageProps: c, ...l } = cc({
		...N(e),
		label: i,
		validationBehavior: e.validationBehavior ?? `native`
	}, t, n);
	return wc(e, t, e.forwardedRef, o, n, a, r, s, c, l);
}
function wc(e, t, n, r, i, a, o, s, c, l) {
	let u = x({
		...e,
		values: {
			state: t,
			channel: e.channel || `hex`,
			isDisabled: e.isDisabled || !1,
			isInvalid: l.isInvalid || !1,
			isReadOnly: e.isReadOnly || !1,
			isRequired: e.isRequired || !1
		},
		defaultClassName: `react-aria-ColorField`
	}), d = S(e, { global: !0 });
	return delete d.id, W.createElement(M, { values: [
		[bc, t],
		[Me, {
			...r,
			ref: i
		}],
		[_, {
			...a,
			ref: o
		}],
		[Ae, {
			role: `presentation`,
			isInvalid: l.isInvalid,
			isDisabled: e.isDisabled || !1
		}],
		[Pe, { slots: {
			description: s,
			errorMessage: c
		} }],
		[we, l]
	] }, W.createElement(w.div, {
		...d,
		...u,
		ref: n,
		slot: e.slot || void 0,
		"data-channel": e.channel || `hex`,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": l.isInvalid || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0
	}));
}
function Tc(e, t) {
	let { trackRef: n, inputRef: r, orientation: i, channel: a, "aria-label": o, name: s, form: c } = e, { locale: l, direction: u } = B();
	e.label || o || e[`aria-labelledby`] || (o = t.value.getChannelName(a, l));
	let { groupProps: d, trackProps: f, labelProps: p, outputProps: m } = Xe({
		...e,
		"aria-label": o
	}, t, n), { inputProps: h, thumbProps: g } = Je({
		index: 0,
		orientation: i,
		isDisabled: e.isDisabled,
		name: s,
		form: c,
		trackRef: n,
		inputRef: r
	}, t), _ = t.getDisplayColor(), v = () => {
		let e;
		switch (e = i === `vertical` ? `top` : u === `ltr` ? `right` : `left`, a) {
			case `hue`: {
				let t = [
					0,
					60,
					120,
					180,
					240,
					300,
					360
				].map((e) => _.withChannelValue(`hue`, e).toString(`css`)).join(`, `);
				return `linear-gradient(to ${e}, ${t})`;
			}
			case `lightness`: {
				let n = t.getThumbMinValue(0), r = t.getThumbMaxValue(0), i = _.withChannelValue(a, n).toString(`css`), o = _.withChannelValue(a, (r - n) / 2).toString(`css`), s = _.withChannelValue(a, r).toString(`css`);
				return `linear-gradient(to ${e}, ${i}, ${o}, ${s})`;
			}
			case `saturation`:
			case `brightness`:
			case `red`:
			case `green`:
			case `blue`:
			case `alpha`: {
				let n = _.withChannelValue(a, t.getThumbMinValue(0)).toString(`css`), r = _.withChannelValue(a, t.getThumbMaxValue(0)).toString(`css`);
				return `linear-gradient(to ${e}, ${n}, ${r})`;
			}
			default: throw Error(`Unknown color channel: ` + a);
		}
	}, y = { forcedColorAdjust: `none` };
	a === `hue` ? h[`aria-valuetext`] += `, ${_.getHueName(l)}` : a !== `alpha` && (h[`aria-valuetext`] += `, ${_.getColorName(l)}`);
	let { visuallyHiddenProps: b } = De({ style: {
		opacity: `0.0001`,
		width: `100%`,
		height: `100%`,
		pointerEvents: `none`
	} });
	return {
		trackProps: {
			...T(d, f),
			style: {
				...f.style,
				...y,
				background: v()
			}
		},
		inputProps: {
			...h,
			style: {
				...h.style,
				...b.style
			}
		},
		thumbProps: {
			...g,
			style: {
				...g.style,
				...y
			}
		},
		labelProps: p,
		outputProps: m
	};
}
function Ec(e) {
	let { channel: t, colorSpace: n, value: r, defaultValue: i, onChange: a, locale: o, ...s } = e;
	if (r == null && i == null) throw Error(`useColorSliderState requires a value or defaultValue`);
	r &&= As(r), i &&= As(i);
	let [c, l] = ke(r, i, a), u = (0, W.useMemo)(() => n && c ? c.toFormat(n) : c, [c, n]), [d] = (0, W.useState)(c), f = i ?? d, p = (0, W.useMemo)(() => n && f ? f.toFormat(n) : f, [f, n]), m = (0, W.useMemo)(() => new Intl.NumberFormat(), []), h = et({
		...u.getChannelRange(t),
		...s,
		numberFormatter: m,
		value: u.getChannelValue(t),
		defaultValue: p.getChannelValue(t),
		onChange(e) {
			l(u.withChannelValue(t, e));
		},
		onChangeEnd(n) {
			e.onChangeEnd && e.onChangeEnd(u.withChannelValue(t, n));
		}
	}), { step: g, pageSize: _ } = u.getChannelRange(t);
	return {
		...h,
		value: u,
		setValue(e) {
			l(As(e));
		},
		getDisplayColor() {
			switch (t) {
				case `hue`: return Z(`hsl(${u.getChannelValue(`hue`)}, 100%, 50%)`);
				case `lightness`:
				case `brightness`:
				case `saturation`:
				case `red`:
				case `green`:
				case `blue`: return u.withChannelValue(`alpha`, 1);
				case `alpha`: return u;
				default: throw Error(`Unknown color channel: ` + t);
			}
		},
		getThumbValueLabel() {
			return u.formatChannelValue(t, o);
		},
		getFormattedValue() {
			return u.formatChannelValue(t, o);
		},
		step: g,
		pageSize: _,
		isDragging: h.isThumbDragging(0)
	};
}
var Dc = (0, W.createContext)(null), Oc = (0, W.createContext)(null), kc = (0, W.forwardRef)(function(e, t) {
	[e, t] = I(e, t, Dc);
	let { locale: n } = B(), r = Ec({
		...e,
		locale: n
	}), i = W.useRef(null), a = W.useRef(null), [o, s] = k(!e[`aria-label`] && !e[`aria-labelledby`]), { trackProps: c, thumbProps: l, inputProps: u, labelProps: d, outputProps: f } = Tc({
		...e,
		label: s,
		trackRef: i,
		inputRef: a
	}, r), p = x({
		...e,
		values: {
			orientation: r.orientation,
			isDisabled: r.isDisabled,
			state: r
		},
		defaultClassName: `react-aria-ColorSlider`
	}), m = S(e, { global: !0 });
	return delete m.id, W.createElement(M, { values: [
		[Oc, r],
		[$e, r],
		[Qe, {
			...c,
			ref: i
		}],
		[Ye, f],
		[_, {
			...d,
			ref: o,
			children: r.value.getChannelName(e.channel, n)
		}],
		[lo, {
			state: r,
			thumbProps: l,
			inputXRef: a,
			xInputProps: u,
			isDisabled: e.isDisabled
		}]
	] }, W.createElement(w.div, {
		...m,
		...p,
		ref: t,
		slot: e.slot || void 0,
		"data-orientation": r.orientation,
		"data-disabled": r.isDisabled || void 0
	}));
});
function Ac(e) {
	return e && e.__esModule ? e.default : e;
}
function jc(e) {
	let { color: t, colorName: n } = e, r = t || `#fff0`, i = (0, W.useMemo)(() => typeof r == `string` ? Z(r) : r, [r]), { locale: a } = B(), o = S(e, { labelable: !0 }), s = xe(Ac(Ko), `@react-aria/color`), c = z(e.id);
	return n ||= i.getChannelValue(`alpha`) === 0 ? s.format(`transparent`) : i.getColorName(a), {
		colorSwatchProps: {
			...o,
			role: `img`,
			"aria-roledescription": s.format(`colorSwatch`),
			"aria-label": [n, e[`aria-label`] || ``].filter(Boolean).join(`, `),
			"aria-labelledby": e[`aria-labelledby`] ? `${c} ${e[`aria-labelledby`]}` : void 0,
			id: c,
			style: {
				backgroundColor: i.toString(`css`),
				forcedColorAdjust: `none`
			}
		},
		color: i || null
	};
}
var Mc = (0, W.createContext)(null), Nc = (0, W.forwardRef)(function(e, t) {
	[e, t] = I(e, t, Mc);
	let { colorSwatchProps: n, color: r } = jc(e), i = x({
		...e,
		defaultClassName: `react-aria-ColorSwatch`,
		defaultStyle: n.style,
		values: { color: r }
	}), a = S(e, { global: !0 });
	return W.createElement(w.div, {
		...T(a, n, i),
		slot: e.slot || void 0,
		ref: t
	});
});
function Pc(e) {
	let t = uc(e.value), n = uc(e.defaultValue || `#000000`), [r, i] = ke(t || void 0, n, e.onChange);
	return {
		color: r,
		setColor(e) {
			e != null && i(e || Z(`#000000`));
		}
	};
}
function Fc(e) {
	return e && e.__esModule ? e.default : e;
}
var Ic = (0, W.createContext)(null), Lc = (0, W.createContext)(null), Rc = (0, W.forwardRef)(function(e, t) {
	[e, t] = I(e, t, Ic);
	let n = Pc(e), r = (0, W.useMemo)(() => new Map(), []), i = xe(Fc(nt), `react-aria-components`);
	return W.createElement(at, {
		...S(e, { labelable: !0 }),
		ref: t,
		className: e.className || `react-aria-ColorSwatchPicker`,
		style: e.style,
		"aria-label": e[`aria-label`] || (e[`aria-labelledby`] ? void 0 : i.format(`colorSwatchPicker`)),
		layout: e.layout || `grid`,
		selectionMode: `single`,
		selectedKeys: [n.color.toString(`hexa`)],
		onSelectionChange: (e) => {
			e !== `all` && n.setColor(r.get([...e][0]));
		},
		disallowEmptySelection: !0
	}, W.createElement(Lc.Provider, { value: r }, e.children));
}), zc = (0, W.forwardRef)(function(e, t) {
	let n = e.color || `#0000`, r = (0, W.useMemo)(() => typeof n == `string` ? Z(n) : n, [n]), { locale: i } = B(), a = (0, W.useContext)(Lc);
	(0, W.useEffect)(() => {
		let e = r.toString(`hexa`);
		return a.set(e, r), () => {
			a.delete(e);
		};
	}, [r, a]);
	let o = (e) => typeof e == `function` ? (t) => e({
		...t,
		color: r
	}) : e;
	return W.createElement(it, {
		...e,
		render: e.render,
		ref: t,
		id: r.toString(`hexa`),
		textValue: r.getColorName(i),
		className: o(e.className || `react-aria-ColorSwatchPickerItem`),
		style: o(e.style)
	}, ee(o(e.children), (e) => W.createElement(Mc.Provider, { value: { color: r } }, e)));
}), Bc = (0, W.createContext)(null), Vc = (0, W.createContext)(null), Hc = (0, W.createContext)(null);
function Uc(e) {
	let t = A(Vc, e.slot);
	e = T(t, e);
	let n = Pc(e), r = x({
		...e,
		values: { color: n.color }
	});
	return W.createElement(M, { values: [
		[Hc, n],
		[Dc, {
			value: n.color,
			onChange: n.setColor
		}],
		[ac, {
			value: n.color,
			onChange: n.setColor
		}],
		[Bc, {
			value: n.color,
			onChange: n.setColor
		}],
		[yc, {
			value: n.color,
			onChange: n.setColor
		}],
		[Mc, { color: n.color }],
		[Ic, {
			value: n.color,
			onChange: n.setColor
		}]
	] }, r.children);
}
var Wc = [
	`day`,
	`month`,
	`year`
], Gc = {
	hour: 1,
	minute: 2,
	second: 3
};
function Kc(e, t) {
	let { autoComplete: n, isDisabled: i, name: a } = e, { visuallyHiddenProps: o } = De({ style: {
		position: `fixed`,
		top: 0,
		left: 0
	} }), s = 60;
	t.granularity === `second` ? s = 1 : t.granularity === `hour` && (s = 3600);
	let c = ``;
	t.value && (c = t.granularity === `day` ? q(t.value).toString() : vr(`timeZone` in t.value ? Sr(t.value) : t.value).toString());
	let l = t.granularity === `day` ? `date` : `datetime-local`, u = [
		`hour`,
		`minute`,
		`second`
	], d = 0;
	return u.includes(t.granularity) && (d = Gc[t.granularity], u = u.slice(0, d)), {
		containerProps: {
			...o,
			"aria-hidden": !0,
			"data-react-aria-prevent-focus": !0,
			"data-a11y-ignore": `aria-hidden-focus`
		},
		inputProps: {
			tabIndex: -1,
			autoComplete: n,
			disabled: i,
			type: l,
			form: ``,
			name: a,
			step: s,
			value: c,
			onChange: (e) => {
				let n = r(e).value.toString();
				if (n) try {
					let e = Zr(n);
					if (t.granularity === `day` && (e = Xr(n)), `setSegment` in t) for (let n in e) Wc.includes(n) && t.setSegment(n, e[n]), u.includes(n) && t.setSegment(n, e[n]);
					t.setValue(e);
				} catch {}
			}
		}
	};
}
function qc(e) {
	let { state: t } = e, { containerProps: n, inputProps: r } = Kc({ ...e }, t);
	return W.createElement(`div`, {
		...n,
		"data-testid": `hidden-dateinput-container`
	}, W.createElement(`input`, r));
}
var Jc = {};
Jc = {
	calendar: `التقويم`,
	day: `يوم`,
	dayPeriod: `ص/م`,
	endDate: `تاريخ الانتهاء`,
	era: `العصر`,
	hour: `الساعات`,
	minute: `الدقائق`,
	month: `الشهر`,
	second: `الثواني`,
	selectedDateDescription: (e) => `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.startDate} \u{625}\u{644}\u{649} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{627}\u{644}\u{648}\u{642}\u{62A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.time}`,
	startDate: `تاريخ البدء`,
	timeZoneName: `التوقيت`,
	weekday: `اليوم`,
	year: `السنة`
};
var Yc = {};
Yc = {
	calendar: `Календар`,
	day: `ден`,
	dayPeriod: `пр.об./сл.об.`,
	endDate: `Крайна дата`,
	era: `ера`,
	hour: `час`,
	minute: `минута`,
	month: `месец`,
	second: `секунда`,
	selectedDateDescription: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.startDate} \u{434}\u{43E} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{432}\u{440}\u{435}\u{43C}\u{435}: ${e.time}`,
	startDate: `Начална дата`,
	timeZoneName: `часова зона`,
	weekday: `ден от седмицата`,
	year: `година`
};
var Xc = {};
Xc = {
	calendar: `Kalendář`,
	day: `den`,
	dayPeriod: `část dne`,
	endDate: `Konečné datum`,
	era: `letopočet`,
	hour: `hodina`,
	minute: `minuta`,
	month: `měsíc`,
	second: `sekunda`,
	selectedDateDescription: (e) => `Vybran\xe9 datum: ${e.date}`,
	selectedRangeDescription: (e) => `Vybran\xe9 obdob\xed: ${e.startDate} a\u{17E} ${e.endDate}`,
	selectedTimeDescription: (e) => `Vybran\xfd \u{10D}as: ${e.time}`,
	startDate: `Počáteční datum`,
	timeZoneName: `časové pásmo`,
	weekday: `den v týdnu`,
	year: `rok`
};
var Zc = {};
Zc = {
	calendar: `Kalender`,
	day: `dag`,
	dayPeriod: `AM/PM`,
	endDate: `Slutdato`,
	era: `æra`,
	hour: `time`,
	minute: `minut`,
	month: `måned`,
	second: `sekund`,
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) => `Valgt interval: ${e.startDate} til ${e.endDate}`,
	selectedTimeDescription: (e) => `Valgt tidspunkt: ${e.time}`,
	startDate: `Startdato`,
	timeZoneName: `tidszone`,
	weekday: `ugedag`,
	year: `år`
};
var Qc = {};
Qc = {
	calendar: `Kalender`,
	day: `Tag`,
	dayPeriod: `Tageshälfte`,
	endDate: `Enddatum`,
	era: `Epoche`,
	hour: `Stunde`,
	minute: `Minute`,
	month: `Monat`,
	second: `Sekunde`,
	selectedDateDescription: (e) => `Ausgew\xe4hltes Datum: ${e.date}`,
	selectedRangeDescription: (e) => `Ausgew\xe4hlter Bereich: ${e.startDate} bis ${e.endDate}`,
	selectedTimeDescription: (e) => `Ausgew\xe4hlte Zeit: ${e.time}`,
	startDate: `Startdatum`,
	timeZoneName: `Zeitzone`,
	weekday: `Wochentag`,
	year: `Jahr`
};
var $c = {};
$c = {
	calendar: `Ημερολόγιο`,
	day: `ημέρα`,
	dayPeriod: `π.μ./μ.μ.`,
	endDate: `Ημερομηνία λήξης`,
	era: `περίοδος`,
	hour: `ώρα`,
	minute: `λεπτό`,
	month: `μήνας`,
	second: `δευτερόλεπτο`,
	selectedDateDescription: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${e.startDate} \u{3AD}\u{3C9}\u{3C2} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3CE}\u{3C1}\u{3B1}: ${e.time}`,
	startDate: `Ημερομηνία έναρξης`,
	timeZoneName: `ζώνη ώρας`,
	weekday: `καθημερινή`,
	year: `έτος`
};
var el = {};
el = {
	era: `era`,
	year: `year`,
	month: `month`,
	day: `day`,
	hour: `hour`,
	minute: `minute`,
	second: `second`,
	dayPeriod: `AM/PM`,
	calendar: `Calendar`,
	startDate: `Start Date`,
	endDate: `End Date`,
	weekday: `day of the week`,
	timeZoneName: `time zone`,
	selectedDateDescription: (e) => `Selected Date: ${e.date}`,
	selectedRangeDescription: (e) => `Selected Range: ${e.startDate} to ${e.endDate}`,
	selectedTimeDescription: (e) => `Selected Time: ${e.time}`
};
var tl = {};
tl = {
	calendar: `Calendario`,
	day: `día`,
	dayPeriod: `a.\xA0m./p.\xA0m.`,
	endDate: `Fecha final`,
	era: `era`,
	hour: `hora`,
	minute: `minuto`,
	month: `mes`,
	second: `segundo`,
	selectedDateDescription: (e) => `Fecha seleccionada: ${e.date}`,
	selectedRangeDescription: (e) => `Rango seleccionado: ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Hora seleccionada: ${e.time}`,
	startDate: `Fecha de inicio`,
	timeZoneName: `zona horaria`,
	weekday: `día de la semana`,
	year: `año`
};
var nl = {};
nl = {
	calendar: `Kalender`,
	day: `päev`,
	dayPeriod: `enne/pärast lõunat`,
	endDate: `Lõppkuupäev`,
	era: `ajastu`,
	hour: `tund`,
	minute: `minut`,
	month: `kuu`,
	second: `sekund`,
	selectedDateDescription: (e) => `Valitud kuup\xe4ev: ${e.date}`,
	selectedRangeDescription: (e) => `Valitud vahemik: ${e.startDate} kuni ${e.endDate}`,
	selectedTimeDescription: (e) => `Valitud aeg: ${e.time}`,
	startDate: `Alguskuupäev`,
	timeZoneName: `ajavöönd`,
	weekday: `nädalapäev`,
	year: `aasta`
};
var rl = {};
rl = {
	calendar: `Kalenteri`,
	day: `päivä`,
	dayPeriod: `vuorokaudenaika`,
	endDate: `Päättymispäivä`,
	era: `aikakausi`,
	hour: `tunti`,
	minute: `minuutti`,
	month: `kuukausi`,
	second: `sekunti`,
	selectedDateDescription: (e) => `Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,
	selectedRangeDescription: (e) => `Valittu aikav\xe4li: ${e.startDate} \u{2013} ${e.endDate}`,
	selectedTimeDescription: (e) => `Valittu aika: ${e.time}`,
	startDate: `Alkamispäivä`,
	timeZoneName: `aikavyöhyke`,
	weekday: `viikonpäivä`,
	year: `vuosi`
};
var il = {};
il = {
	calendar: `Calendrier`,
	day: `jour`,
	dayPeriod: `cadran`,
	endDate: `Date de fin`,
	era: `ère`,
	hour: `heure`,
	minute: `minute`,
	month: `mois`,
	second: `seconde`,
	selectedDateDescription: (e) => `Date s\xe9lectionn\xe9e\xa0: ${e.date}`,
	selectedRangeDescription: (e) => `Plage s\xe9lectionn\xe9e\xa0: ${e.startDate} au ${e.endDate}`,
	selectedTimeDescription: (e) => `Heure choisie\xa0: ${e.time}`,
	startDate: `Date de début`,
	timeZoneName: `fuseau horaire`,
	weekday: `jour de la semaine`,
	year: `année`
};
var al = {};
al = {
	calendar: `לוח שנה`,
	day: `יום`,
	dayPeriod: `לפנה״צ/אחה״צ`,
	endDate: `תאריך סיום`,
	era: `תקופה`,
	hour: `שעה`,
	minute: `דקה`,
	month: `חודש`,
	second: `שנייה`,
	selectedDateDescription: (e) => `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.startDate} \u{5E2}\u{5D3} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{5D6}\u{5DE}\u{5DF} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.time}`,
	startDate: `תאריך התחלה`,
	timeZoneName: `אזור זמן`,
	weekday: `יום בשבוע`,
	year: `שנה`
};
var ol = {};
ol = {
	calendar: `Kalendar`,
	day: `dan`,
	dayPeriod: `AM/PM`,
	endDate: `Datum završetka`,
	era: `era`,
	hour: `sat`,
	minute: `minuta`,
	month: `mjesec`,
	second: `sekunda`,
	selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Odabrani raspon: ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Odabrano vrijeme: ${e.time}`,
	startDate: `Datum početka`,
	timeZoneName: `vremenska zona`,
	weekday: `dan u tjednu`,
	year: `godina`
};
var sl = {};
sl = {
	calendar: `Naptár`,
	day: `nap`,
	dayPeriod: `napszak`,
	endDate: `Befejező dátum`,
	era: `éra`,
	hour: `óra`,
	minute: `perc`,
	month: `hónap`,
	second: `másodperc`,
	selectedDateDescription: (e) => `Kijel\xf6lt d\xe1tum: ${e.date}`,
	selectedRangeDescription: (e) => `Kijel\xf6lt tartom\xe1ny: ${e.startDate}\u{2013}${e.endDate}`,
	selectedTimeDescription: (e) => `Kijel\xf6lt id\u{151}: ${e.time}`,
	startDate: `Kezdő dátum`,
	timeZoneName: `időzóna`,
	weekday: `hét napja`,
	year: `év`
};
var cl = {};
cl = {
	calendar: `Calendario`,
	day: `giorno`,
	dayPeriod: `AM/PM`,
	endDate: `Data finale`,
	era: `era`,
	hour: `ora`,
	minute: `minuto`,
	month: `mese`,
	second: `secondo`,
	selectedDateDescription: (e) => `Data selezionata: ${e.date}`,
	selectedRangeDescription: (e) => `Intervallo selezionato: da ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Ora selezionata: ${e.time}`,
	startDate: `Data iniziale`,
	timeZoneName: `fuso orario`,
	weekday: `giorno della settimana`,
	year: `anno`
};
var ll = {};
ll = {
	calendar: `カレンダー`,
	day: `日`,
	dayPeriod: `午前/午後`,
	endDate: `終了日`,
	era: `時代`,
	hour: `時`,
	minute: `分`,
	month: `月`,
	second: `秒`,
	selectedDateDescription: (e) => `\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${e.date}`,
	selectedRangeDescription: (e) => `\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${e.startDate} \u{304B}\u{3089} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{9078}\u{629E}\u{3057}\u{305F}\u{6642}\u{9593} : ${e.time}`,
	startDate: `開始日`,
	timeZoneName: `タイムゾーン`,
	weekday: `曜日`,
	year: `年`
};
var ul = {};
ul = {
	calendar: `달력`,
	day: `일`,
	dayPeriod: `오전/오후`,
	endDate: `종료일`,
	era: `연호`,
	hour: `시`,
	minute: `분`,
	month: `월`,
	second: `초`,
	selectedDateDescription: (e) => `\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${e.startDate} ~ ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{C120}\u{D0DD} \u{C2DC}\u{AC04}: ${e.time}`,
	startDate: `시작일`,
	timeZoneName: `시간대`,
	weekday: `요일`,
	year: `년`
};
var dl = {};
dl = {
	calendar: `Kalendorius`,
	day: `diena`,
	dayPeriod: `iki pietų / po pietų`,
	endDate: `Pabaigos data`,
	era: `era`,
	hour: `valanda`,
	minute: `minutė`,
	month: `mėnuo`,
	second: `sekundė`,
	selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
	selectedRangeDescription: (e) => `Pasirinktas intervalas: nuo ${e.startDate} iki ${e.endDate}`,
	selectedTimeDescription: (e) => `Pasirinktas laikas: ${e.time}`,
	startDate: `Pradžios data`,
	timeZoneName: `laiko juosta`,
	weekday: `savaitės diena`,
	year: `metai`
};
var fl = {};
fl = {
	calendar: `Kalendārs`,
	day: `diena`,
	dayPeriod: `priekšpusdienā/pēcpusdienā`,
	endDate: `Beigu datums`,
	era: `ēra`,
	hour: `stundas`,
	minute: `minūtes`,
	month: `mēnesis`,
	second: `sekundes`,
	selectedDateDescription: (e) => `Atlas\u{12B}tais datums: ${e.date}`,
	selectedRangeDescription: (e) => `Atlas\u{12B}tais diapazons: no ${e.startDate} l\u{12B}dz ${e.endDate}`,
	selectedTimeDescription: (e) => `Atlas\u{12B}tais laiks: ${e.time}`,
	startDate: `Sākuma datums`,
	timeZoneName: `laika josla`,
	weekday: `nedēļas diena`,
	year: `gads`
};
var pl = {};
pl = {
	calendar: `Kalender`,
	day: `dag`,
	dayPeriod: `a.m./p.m.`,
	endDate: `Sluttdato`,
	era: `tidsalder`,
	hour: `time`,
	minute: `minutt`,
	month: `måned`,
	second: `sekund`,
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) => `Valgt omr\xe5de: ${e.startDate} til ${e.endDate}`,
	selectedTimeDescription: (e) => `Valgt tid: ${e.time}`,
	startDate: `Startdato`,
	timeZoneName: `tidssone`,
	weekday: `ukedag`,
	year: `år`
};
var ml = {};
ml = {
	calendar: `Kalender`,
	day: `dag`,
	dayPeriod: `a.m./p.m.`,
	endDate: `Einddatum`,
	era: `tijdperk`,
	hour: `uur`,
	minute: `minuut`,
	month: `maand`,
	second: `seconde`,
	selectedDateDescription: (e) => `Geselecteerde datum: ${e.date}`,
	selectedRangeDescription: (e) => `Geselecteerd bereik: ${e.startDate} tot ${e.endDate}`,
	selectedTimeDescription: (e) => `Geselecteerde tijd: ${e.time}`,
	startDate: `Startdatum`,
	timeZoneName: `tijdzone`,
	weekday: `dag van de week`,
	year: `jaar`
};
var hl = {};
hl = {
	calendar: `Kalendarz`,
	day: `dzień`,
	dayPeriod: `rano / po południu / wieczorem`,
	endDate: `Data końcowa`,
	era: `era`,
	hour: `godzina`,
	minute: `minuta`,
	month: `miesiąc`,
	second: `sekunda`,
	selectedDateDescription: (e) => `Wybrana data: ${e.date}`,
	selectedRangeDescription: (e) => `Wybrany zakres: ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Wybrany czas: ${e.time}`,
	startDate: `Data początkowa`,
	timeZoneName: `strefa czasowa`,
	weekday: `dzień tygodnia`,
	year: `rok`
};
var gl = {};
gl = {
	calendar: `Calendário`,
	day: `dia`,
	dayPeriod: `AM/PM`,
	endDate: `Data final`,
	era: `era`,
	hour: `hora`,
	minute: `minuto`,
	month: `mês`,
	second: `segundo`,
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Hora selecionada: ${e.time}`,
	startDate: `Data inicial`,
	timeZoneName: `fuso horário`,
	weekday: `dia da semana`,
	year: `ano`
};
var _l = {};
_l = {
	calendar: `Calendário`,
	day: `dia`,
	dayPeriod: `am/pm`,
	endDate: `Data de Término`,
	era: `era`,
	hour: `hora`,
	minute: `minuto`,
	month: `mês`,
	second: `segundo`,
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Hora selecionada: ${e.time}`,
	startDate: `Data de Início`,
	timeZoneName: `fuso horário`,
	weekday: `dia da semana`,
	year: `ano`
};
var vl = {};
vl = {
	calendar: `Calendar`,
	day: `zi`,
	dayPeriod: `a.m/p.m.`,
	endDate: `Dată final`,
	era: `eră`,
	hour: `oră`,
	minute: `minut`,
	month: `lună`,
	second: `secundă`,
	selectedDateDescription: (e) => `Dat\u{103} selectat\u{103}: ${e.date}`,
	selectedRangeDescription: (e) => `Interval selectat: de la ${e.startDate} p\xe2n\u{103} la ${e.endDate}`,
	selectedTimeDescription: (e) => `Ora selectat\u{103}: ${e.time}`,
	startDate: `Dată început`,
	timeZoneName: `fus orar`,
	weekday: `ziua din săptămână`,
	year: `an`
};
var yl = {};
yl = {
	calendar: `Календарь`,
	day: `день`,
	dayPeriod: `AM/PM`,
	endDate: `Дата окончания`,
	era: `эра`,
	hour: `час`,
	minute: `минута`,
	month: `месяц`,
	second: `секунда`,
	selectedDateDescription: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: \u{441} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{435} \u{432}\u{440}\u{435}\u{43C}\u{44F}: ${e.time}`,
	startDate: `Дата начала`,
	timeZoneName: `часовой пояс`,
	weekday: `день недели`,
	year: `год`
};
var bl = {};
bl = {
	calendar: `Kalendár`,
	day: `deň`,
	dayPeriod: `AM/PM`,
	endDate: `Dátum ukončenia`,
	era: `letopočet`,
	hour: `hodina`,
	minute: `minúta`,
	month: `mesiac`,
	second: `sekunda`,
	selectedDateDescription: (e) => `Vybrat\xfd d\xe1tum: ${e.date}`,
	selectedRangeDescription: (e) => `Vybrat\xfd rozsah: od ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Vybrat\xfd \u{10D}as: ${e.time}`,
	startDate: `Dátum začatia`,
	timeZoneName: `časové pásmo`,
	weekday: `deň týždňa`,
	year: `rok`
};
var xl = {};
xl = {
	calendar: `Koledar`,
	day: `dan`,
	dayPeriod: `dop/pop`,
	endDate: `Datum konca`,
	era: `doba`,
	hour: `ura`,
	minute: `minuta`,
	month: `mesec`,
	second: `sekunda`,
	selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Izbrano obmo\u{10D}je: ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Izbrani \u{10D}as: ${e.time}`,
	startDate: `Datum začetka`,
	timeZoneName: `časovni pas`,
	weekday: `dan v tednu`,
	year: `leto`
};
var Sl = {};
Sl = {
	calendar: `Kalendar`,
	day: `дан`,
	dayPeriod: `пре подне/по подне`,
	endDate: `Datum završetka`,
	era: `ера`,
	hour: `сат`,
	minute: `минут`,
	month: `месец`,
	second: `секунд`,
	selectedDateDescription: (e) => `Izabrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Izabrani opseg: od ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Izabrano vreme: ${e.time}`,
	startDate: `Datum početka`,
	timeZoneName: `временска зона`,
	weekday: `дан у недељи`,
	year: `година`
};
var Cl = {};
Cl = {
	calendar: `Kalender`,
	day: `dag`,
	dayPeriod: `fm/em`,
	endDate: `Slutdatum`,
	era: `era`,
	hour: `timme`,
	minute: `minut`,
	month: `månad`,
	second: `sekund`,
	selectedDateDescription: (e) => `Valt datum: ${e.date}`,
	selectedRangeDescription: (e) => `Valt intervall: ${e.startDate} till ${e.endDate}`,
	selectedTimeDescription: (e) => `Vald tid: ${e.time}`,
	startDate: `Startdatum`,
	timeZoneName: `tidszon`,
	weekday: `veckodag`,
	year: `år`
};
var wl = {};
wl = {
	calendar: `Takvim`,
	day: `gün`,
	dayPeriod: `ÖÖ/ÖS`,
	endDate: `Bitiş Tarihi`,
	era: `çağ`,
	hour: `saat`,
	minute: `dakika`,
	month: `ay`,
	second: `saniye`,
	selectedDateDescription: (e) => `Se\xe7ilen Tarih: ${e.date}`,
	selectedRangeDescription: (e) => `Se\xe7ilen Aral\u{131}k: ${e.startDate} - ${e.endDate}`,
	selectedTimeDescription: (e) => `Se\xe7ilen Zaman: ${e.time}`,
	startDate: `Başlangıç Tarihi`,
	timeZoneName: `saat dilimi`,
	weekday: `haftanın günü`,
	year: `yıl`
};
var Tl = {};
Tl = {
	calendar: `Календар`,
	day: `день`,
	dayPeriod: `дп/пп`,
	endDate: `Дата завершення`,
	era: `ера`,
	hour: `година`,
	minute: `хвилина`,
	month: `місяць`,
	second: `секунда`,
	selectedDateDescription: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.startDate} \u{2014} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{447}\u{430}\u{441}: ${e.time}`,
	startDate: `Дата початку`,
	timeZoneName: `часовий пояс`,
	weekday: `день тижня`,
	year: `рік`
};
var El = {};
El = {
	calendar: `日历`,
	day: `日`,
	dayPeriod: `上午/下午`,
	endDate: `结束日期`,
	era: `纪元`,
	hour: `小时`,
	minute: `分钟`,
	month: `月`,
	second: `秒`,
	selectedDateDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
	selectedRangeDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.startDate} \u{81F3} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{65F6}\u{95F4}\u{FF1A}${e.time}`,
	startDate: `开始日期`,
	timeZoneName: `时区`,
	weekday: `工作日`,
	year: `年`
};
var Dl = {};
Dl = {
	calendar: `日曆`,
	day: `日`,
	dayPeriod: `上午/下午`,
	endDate: `結束日期`,
	era: `纪元`,
	hour: `小时`,
	minute: `分钟`,
	month: `月`,
	second: `秒`,
	selectedDateDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
	selectedRangeDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${e.startDate} \u{81F3} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{6642}\u{9593}\u{FF1A}${e.time}`,
	startDate: `開始日期`,
	timeZoneName: `时区`,
	weekday: `工作日`,
	year: `年`
};
var Ol = {};
Ol = {
	"ar-AE": Jc,
	"bg-BG": Yc,
	"cs-CZ": Xc,
	"da-DK": Zc,
	"de-DE": Qc,
	"el-GR": $c,
	"en-US": el,
	"es-ES": tl,
	"et-EE": nl,
	"fi-FI": rl,
	"fr-FR": il,
	"he-IL": al,
	"hr-HR": ol,
	"hu-HU": sl,
	"it-IT": cl,
	"ja-JP": ll,
	"ko-KR": ul,
	"lt-LT": dl,
	"lv-LV": fl,
	"nb-NO": pl,
	"nl-NL": ml,
	"pl-PL": hl,
	"pt-BR": gl,
	"pt-PT": _l,
	"ro-RO": vl,
	"ru-RU": yl,
	"sk-SK": bl,
	"sl-SI": xl,
	"sr-SP": Sl,
	"sv-SE": Cl,
	"tr-TR": wl,
	"uk-UA": Tl,
	"zh-CN": El,
	"zh-TW": Dl
};
function kl(e, t, n) {
	let { direction: i } = B(), a = (0, W.useMemo)(() => vt(t), [t]), { keyboardProps: o } = E({
		shortcuts: {
			"Alt+ArrowDown": () => {
				if (`setOpen` in e) e.setOpen(!0);
				else return !1;
			},
			"Alt+ArrowUp": () => {
				if (`setOpen` in e) e.setOpen(!0);
				else return !1;
			},
			ArrowLeft: (e) => {
				if (n) return !1;
				if (i === `rtl`) {
					if (t.current) {
						let n = r(e), i = Al(t.current, n.getBoundingClientRect().left, -1);
						if (i) {
							i.focus();
							return;
						}
					}
				} else {
					a.focusPrevious();
					return;
				}
				return !1;
			},
			ArrowRight: (e) => {
				if (n) return !1;
				if (i === `rtl`) {
					if (t.current) {
						let n = r(e), i = Al(t.current, n.getBoundingClientRect().left, 1);
						if (i) {
							i.focus();
							return;
						}
					}
				} else {
					a.focusNext();
					return;
				}
				return !1;
			}
		},
		allowRepeats: !0
	}), s = () => {
		if (!t.current) return;
		let e = window.event ? r(window.event) : null, n = yt(t.current, { tabbable: !0 });
		if (e &&= (n.currentNode = e, n.previousNode()), !e) {
			let t;
			do
				t = n.lastChild(), t && (e = t);
			while (t);
		}
		for (; e?.hasAttribute(`data-placeholder`);) {
			let t = n.previousNode();
			if (t && t.hasAttribute(`data-placeholder`)) e = t;
			else break;
		}
		e && e.focus();
	}, { pressProps: c } = j({
		preventFocusOnPress: !0,
		allowTextSelectionOnPress: !0,
		onPressStart(e) {
			e.pointerType === `mouse` && s();
		},
		onPress(e) {
			(e.pointerType === `touch` || e.pointerType === `pen`) && s();
		}
	});
	return T(c, o);
}
function Al(e, t, n) {
	let r = yt(e, { tabbable: !0 }), i = r.nextNode(), a = null, o = 1 / 0;
	for (; i;) {
		let e = i.getBoundingClientRect().left - t, s = Math.abs(e);
		Math.sign(e) === n && s < o && (a = i, o = s), i = r.nextNode();
	}
	return a;
}
function jl(e) {
	return e && e.__esModule ? e.default : e;
}
var Ml = new WeakMap(), Nl = `__reactAriaDateFieldRole`, Pl = `__reactAriaDateFieldFocusManager`;
function Fl(e, t, n) {
	let { isInvalid: r, validationErrors: i, validationDetails: a } = t.displayValidation, { labelProps: o, fieldProps: s, descriptionProps: c, errorMessageProps: l } = We({
		...e,
		labelElementType: `span`,
		isInvalid: r,
		errorMessage: e.errorMessage || i
	}), u = (0, W.useRef)(null), { focusWithinProps: d } = L({
		...e,
		onFocusWithin(n) {
			u.current = t.value, e.onFocus?.(n);
		},
		onBlurWithin: (n) => {
			t.confirmPlaceholder(), t.value !== u.current && t.commitValidation(), e.onBlur?.(n);
		},
		onFocusWithinChange: e.onFocusChange
	}), f = xe(jl(Ol), `@react-aria/datepicker`), p = t.maxGranularity === `hour` ? `selectedTimeDescription` : `selectedDateDescription`, m = t.maxGranularity === `hour` ? `time` : `date`, h = t.value ? f.format(p, { [m]: t.formatValue({ month: `long` }) }) : ``, g = _t(h), _ = e.__reactAriaDateFieldRole === `presentation` ? s[`aria-describedby`] : [g[`aria-describedby`], s[`aria-describedby`]].filter(Boolean).join(` `) || void 0, v = e[Pl], y = (0, W.useMemo)(() => v || vt(n), [v, n]), b = kl(t, n, e[Nl] === `presentation`);
	Ml.set(t, {
		ariaLabel: e[`aria-label`],
		ariaLabelledBy: [o.id, e[`aria-labelledby`]].filter(Boolean).join(` `) || void 0,
		ariaDescribedBy: _,
		focusManager: y
	});
	let x = (0, W.useRef)(e.autoFocus), C;
	C = e.__reactAriaDateFieldRole === `presentation` ? { role: `presentation` } : T(s, {
		role: `group`,
		"aria-disabled": e.isDisabled || void 0,
		"aria-describedby": _
	}), (0, W.useEffect)(() => {
		x.current && y.focusFirst(), x.current = !1;
	}, [y]), Te(e.inputRef, t.defaultValue, t.setValue), Ke({
		...e,
		focus() {
			y.focusFirst();
		}
	}, t, e.inputRef);
	let w = {
		type: `hidden`,
		name: e.name,
		form: e.form,
		value: t.value?.toString() || ``,
		disabled: e.isDisabled
	};
	e.validationBehavior === `native` && (w.type = `text`, w.hidden = !0, w.required = e.isRequired, w.onChange = () => {});
	let E = S(e);
	return {
		labelProps: {
			...o,
			onClick: () => {
				y.focusFirst();
			}
		},
		fieldProps: T(E, C, b, d, {
			onKeyDown: e.onKeyDown,
			onKeyUp: e.onKeyUp,
			style: { unicodeBidi: `isolate` }
		}),
		inputProps: w,
		descriptionProps: c,
		errorMessageProps: l,
		isInvalid: r,
		validationErrors: i,
		validationDetails: a
	};
}
function Il(e) {
	return e && e.__esModule ? e.default : e;
}
function Ll() {
	let { locale: e } = B(), t = Ce(Il(Ol), `@react-aria/datepicker`);
	return (0, W.useMemo)(() => {
		try {
			return new Intl.DisplayNames(e, { type: `dateTimeField` });
		} catch {
			return new Rl(e, t);
		}
	}, [e, t]);
}
var Rl = class {
	constructor(e, t) {
		this.locale = e, this.dictionary = t;
	}
	of(e) {
		return this.dictionary.getStringForLocale(e, this.locale);
	}
};
function zl(e, t, n) {
	let r = (0, W.useRef)(``), { locale: i, direction: a } = B(), o = Ll(), { ariaLabel: s, ariaLabelledBy: c, ariaDescribedBy: l, focusManager: u } = Ml.get(t), d = e.isPlaceholder ? `` : e.text, f = (0, W.useMemo)(() => t.dateFormatter.resolvedOptions(), [t.dateFormatter]), p = wa({
		month: `long`,
		timeZone: f.timeZone
	}), h = wa({
		hour: `numeric`,
		hour12: f.hour12,
		timeZone: f.timeZone
	});
	if (e.type === `month` && !e.isPlaceholder) {
		let e = p.format(t.dateValue);
		d = e === d ? e : `${d} \u{2013} ${e}`;
	} else e.type === `hour` && !e.isPlaceholder && (d = h.format(t.dateValue));
	let { spinButtonProps: _ } = Be({
		value: e.value ?? void 0,
		textValue: d,
		minValue: e.minValue,
		maxValue: e.maxValue,
		isDisabled: t.isDisabled,
		isReadOnly: t.isReadOnly || !e.isEditable,
		isRequired: t.isRequired,
		onIncrement: () => {
			r.current = ``, t.increment(e.type);
		},
		onDecrement: () => {
			r.current = ``, t.decrement(e.type);
		},
		onIncrementPage: () => {
			r.current = ``, t.incrementPage(e.type);
		},
		onDecrementPage: () => {
			r.current = ``, t.decrementPage(e.type);
		},
		onIncrementToMax: () => {
			r.current = ``, t.incrementToMax(e.type);
		},
		onDecrementToMin: () => {
			r.current = ``, t.decrementToMin(e.type);
		}
	}), y = (0, W.useMemo)(() => new ze(i, { maximumFractionDigits: 0 }), [i]), x = () => {
		if (e.text === e.placeholder && u.focusPrevious(), y.isValidPartialNumber(e.text) && !t.isReadOnly && !e.isPlaceholder) {
			let n = e.text.slice(0, -1), i = y.parse(n);
			n = i === 0 ? `` : n, n.length === 0 || i === 0 ? t.clearSegment(e.type) : t.setSegment(e.type, i), r.current = n;
		} else (e.type === `dayPeriod` || e.type === `era`) && t.clearSegment(e.type);
	}, { keyboardProps: S } = E({
		shortcuts: {
			Backspace: () => {
				x();
			},
			Delete: () => {
				x();
			},
			"Mod+a": () => {}
		},
		allowRepeats: !0
	}), { startsWith: C } = xt({ sensitivity: `base` }), w = wa({
		hour: `numeric`,
		hour12: !0
	}), D = (0, W.useMemo)(() => {
		let e = new Date();
		return e.setHours(0), w.formatToParts(e).find((e) => e.type === `dayPeriod`).value;
	}, [w]), O = (0, W.useMemo)(() => {
		let e = new Date();
		return e.setHours(12), w.formatToParts(e).find((e) => e.type === `dayPeriod`).value;
	}, [w]), k = wa({
		year: `numeric`,
		era: `narrow`,
		timeZone: `UTC`
	}), A = (0, W.useMemo)(() => {
		if (e.type !== `era`) return [];
		let n = J(new X(1, 1, 1), t.calendar), r = t.calendar.getEras().map((e) => {
			let t = n.set({
				year: 1,
				month: 1,
				day: 1,
				era: e
			}).toDate(`UTC`);
			return {
				era: e,
				formatted: k.formatToParts(t).find((e) => e.type === `era`)?.value ?? e
			};
		}), i = Bl(r.map((e) => e.formatted));
		if (i) for (let e of r) e.formatted = e.formatted.slice(i);
		return r;
	}, [
		k,
		t.calendar,
		e.type
	]), j = (n) => {
		if (t.isDisabled || t.isReadOnly) return;
		let i = r.current + n;
		switch (e.type) {
			case `dayPeriod`:
				if (C(D, n)) t.setSegment(`dayPeriod`, 0);
				else if (C(O, n)) t.setSegment(`dayPeriod`, 1);
				else break;
				u.focusNext();
				break;
			case `era`: {
				let e = A.find((e) => C(e.formatted, n));
				e && (t.setSegment(`era`, e.era), u.focusNext());
				break;
			}
			case `day`:
			case `hour`:
			case `minute`:
			case `second`:
			case `month`:
			case `year`: {
				if (!y.isValidPartialNumber(i)) return;
				let a = y.parse(i), o = a;
				if (e.maxValue !== void 0 && a > e.maxValue && (o = y.parse(n)), isNaN(a)) return;
				t.setSegment(e.type, o), e.maxValue !== void 0 && (Number(a + `0`) > e.maxValue || i.length >= String(e.maxValue).length) ? (r.current = ``, u.focusNext()) : r.current = i;
				break;
			}
		}
	}, M = () => {
		r.current = ``, n.current && gt(n.current, { containingElement: ht(n.current) }), window.getSelection()?.collapse(n.current);
	}, N = (0, W.useRef)(typeof document < `u` ? document : null);
	bt(N, `selectionchange`, () => {
		let e = window.getSelection();
		e?.anchorNode && g(n.current, e?.anchorNode) && v() === n.current && e.collapse(n.current);
	});
	let P = (0, W.useRef)(``);
	bt(n, `beforeinput`, (r) => {
		if (n.current) switch (r.preventDefault(), r.inputType) {
			case `deleteContentBackward`:
			case `deleteContentForward`:
				y.isValidPartialNumber(e.text) && !t.isReadOnly && x();
				break;
			case `insertCompositionText`:
				P.current = n.current.textContent, n.current.textContent = n.current.textContent;
				break;
			default: r.data != null && j(r.data);
		}
	}), bt(n, `input`, (e) => {
		let { inputType: t, data: r } = e;
		t === `insertCompositionText` && (n.current && (n.current.textContent = P.current), r != null && (C(D, r) || C(O, r)) && j(r));
	}), te(() => {
		let e = n.current;
		return () => {
			v() === e && (u.focusPrevious() || u.focusNext());
		};
	}, [n, u]);
	let F = m() || e.type === `timeZoneName` ? {
		role: `textbox`,
		"aria-valuemax": null,
		"aria-valuemin": null,
		"aria-valuetext": null,
		"aria-valuenow": null
	} : {};
	e !== (0, W.useMemo)(() => t.segments.find((e) => e.isEditable), [t.segments]) && !t.isInvalid && (l = void 0);
	let I = z(), L = !t.isDisabled && !t.isReadOnly && e.isEditable, ee = e.type === `literal` ? `` : o.of(e.type), R = b({
		"aria-label": `${ee}${s ? `, ${s}` : ``}${c ? `, ` : ``}`,
		"aria-labelledby": c
	});
	if (e.type === `literal`) return { segmentProps: { "aria-hidden": !0 } };
	let V = { caretColor: `transparent` };
	if (a === `rtl`) {
		V.unicodeBidi = `embed`;
		let t = f[e.type];
		(t === `numeric` || t === `2-digit`) && (V.direction = `ltr`);
	}
	return { segmentProps: T(_, R, {
		id: I,
		...F,
		...S,
		"aria-invalid": t.isInvalid ? `true` : void 0,
		"aria-describedby": l,
		"aria-readonly": t.isReadOnly || !e.isEditable ? `true` : void 0,
		"data-placeholder": e.isPlaceholder || void 0,
		contentEditable: L,
		suppressContentEditableWarning: L,
		spellCheck: L ? `false` : void 0,
		autoCorrect: L ? `off` : void 0,
		enterKeyHint: L ? `next` : void 0,
		inputMode: t.isDisabled || e.type === `dayPeriod` || e.type === `era` || !L ? void 0 : `numeric`,
		tabIndex: t.isDisabled ? void 0 : 0,
		onFocus: M,
		style: V,
		onPointerDown(e) {
			e.stopPropagation();
		},
		onMouseDown(e) {
			e.stopPropagation();
		}
	}) };
}
function Bl(e) {
	e.sort();
	let t = e[0], n = e[e.length - 1];
	for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return e;
	return 0;
}
var Vl = {};
Vl = {
	rangeOverflow: (e) => `\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.maxValue} \u{623}\u{648} \u{642}\u{628}\u{644} \u{630}\u{644}\u{643}.`,
	rangeReversed: `تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.`,
	rangeUnderflow: (e) => `\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.minValue} \u{623}\u{648} \u{628}\u{639}\u{62F} \u{630}\u{644}\u{643}.`,
	unavailableDate: `البيانات المحددة غير متاحة.`
};
var Hl = {};
Hl = {
	rangeOverflow: (e) => `\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.maxValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{440}\u{430}\u{43D}\u{43D}\u{430}.`,
	rangeReversed: `Началната дата трябва да е преди крайната.`,
	rangeUnderflow: (e) => `\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.minValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{43A}\u{44A}\u{441}\u{43D}\u{43E}.`,
	unavailableDate: `Избраната дата не е налична.`
};
var Ul = {};
Ul = {
	rangeOverflow: (e) => `Hodnota mus\xed b\xfdt ${e.maxValue} nebo d\u{159}\xedv\u{11B}j\u{161}\xed.`,
	rangeReversed: `Datum zahájení musí předcházet datu ukončení.`,
	rangeUnderflow: (e) => `Hodnota mus\xed b\xfdt ${e.minValue} nebo pozd\u{11B}j\u{161}\xed.`,
	unavailableDate: `Vybrané datum není k dispozici.`
};
var Wl = {};
Wl = {
	rangeOverflow: (e) => `V\xe6rdien skal v\xe6re ${e.maxValue} eller tidligere.`,
	rangeReversed: `Startdatoen skal være før slutdatoen.`,
	rangeUnderflow: (e) => `V\xe6rdien skal v\xe6re ${e.minValue} eller nyere.`,
	unavailableDate: `Den valgte dato er ikke tilgængelig.`
};
var Gl = {};
Gl = {
	rangeOverflow: (e) => `Der Wert muss ${e.maxValue} oder fr\xfcher sein.`,
	rangeReversed: `Das Startdatum muss vor dem Enddatum liegen.`,
	rangeUnderflow: (e) => `Der Wert muss ${e.minValue} oder sp\xe4ter sein.`,
	unavailableDate: `Das ausgewählte Datum ist nicht verfügbar.`
};
var Kl = {};
Kl = {
	rangeOverflow: (e) => `\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.maxValue} \u{3AE} \u{3C0}\u{3B1}\u{3BB}\u{3B1}\u{3B9}\u{3CC}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
	rangeReversed: `Η ημερομηνία έναρξης πρέπει να είναι πριν από την ημερομηνία λήξης.`,
	rangeUnderflow: (e) => `\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.minValue} \u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3B3}\u{3B5}\u{3BD}\u{3AD}\u{3C3}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
	unavailableDate: `Η επιλεγμένη ημερομηνία δεν είναι διαθέσιμη.`
};
var ql = {};
ql = {
	rangeUnderflow: (e) => `Value must be ${e.minValue} or later.`,
	rangeOverflow: (e) => `Value must be ${e.maxValue} or earlier.`,
	rangeReversed: `Start date must be before end date.`,
	unavailableDate: `Selected date unavailable.`
};
var Jl = {};
Jl = {
	rangeOverflow: (e) => `El valor debe ser ${e.maxValue} o anterior.`,
	rangeReversed: `La fecha de inicio debe ser anterior a la fecha de finalización.`,
	rangeUnderflow: (e) => `El valor debe ser ${e.minValue} o posterior.`,
	unavailableDate: `Fecha seleccionada no disponible.`
};
var Yl = {};
Yl = {
	rangeOverflow: (e) => `V\xe4\xe4rtus peab olema ${e.maxValue} v\xf5i varasem.`,
	rangeReversed: `Alguskuupäev peab olema enne lõppkuupäeva.`,
	rangeUnderflow: (e) => `V\xe4\xe4rtus peab olema ${e.minValue} v\xf5i hilisem.`,
	unavailableDate: `Valitud kuupäev pole saadaval.`
};
var Xl = {};
Xl = {
	rangeOverflow: (e) => `Arvon on oltava ${e.maxValue} tai sit\xe4 aikaisempi.`,
	rangeReversed: `Aloituspäivän on oltava ennen lopetuspäivää.`,
	rangeUnderflow: (e) => `Arvon on oltava ${e.minValue} tai sit\xe4 my\xf6h\xe4isempi.`,
	unavailableDate: `Valittu päivämäärä ei ole käytettävissä.`
};
var Zl = {};
Zl = {
	rangeOverflow: (e) => `La valeur doit \xeatre ${e.maxValue} ou ant\xe9rieure.`,
	rangeReversed: `La date de début doit être antérieure à la date de fin.`,
	rangeUnderflow: (e) => `La valeur doit \xeatre ${e.minValue} ou ult\xe9rieure.`,
	unavailableDate: `La date sélectionnée n’est pas disponible.`
};
var Ql = {};
Ql = {
	rangeOverflow: (e) => `\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.maxValue} \u{5D0}\u{5D5} \u{5DE}\u{5D5}\u{5E7}\u{5D3}\u{5DD} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
	rangeReversed: `תאריך ההתחלה חייב להיות לפני תאריך הסיום.`,
	rangeUnderflow: (e) => `\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.minValue} \u{5D0}\u{5D5} \u{5DE}\u{5D0}\u{5D5}\u{5D7}\u{5E8} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
	unavailableDate: `התאריך הנבחר אינו זמין.`
};
var $l = {};
$l = {
	rangeOverflow: (e) => `Vrijednost mora biti ${e.maxValue} ili ranije.`,
	rangeReversed: `Datum početka mora biti prije datuma završetka.`,
	rangeUnderflow: (e) => `Vrijednost mora biti ${e.minValue} ili kasnije.`,
	unavailableDate: `Odabrani datum nije dostupan.`
};
var eu = {};
eu = {
	rangeOverflow: (e) => `Az \xe9rt\xe9knek ${e.maxValue} vagy kor\xe1bbinak kell lennie.`,
	rangeReversed: `A kezdő dátumnak a befejező dátumnál korábbinak kell lennie.`,
	rangeUnderflow: (e) => `Az \xe9rt\xe9knek ${e.minValue} vagy k\xe9s\u{151}bbinek kell lennie.`,
	unavailableDate: `A kiválasztott dátum nem érhető el.`
};
var tu = {};
tu = {
	rangeOverflow: (e) => `Il valore deve essere ${e.maxValue} o precedente.`,
	rangeReversed: `La data di inizio deve essere antecedente alla data di fine.`,
	rangeUnderflow: (e) => `Il valore deve essere ${e.minValue} o successivo.`,
	unavailableDate: `Data selezionata non disponibile.`
};
var nu = {};
nu = {
	rangeOverflow: (e) => `\u{5024}\u{306F} ${e.maxValue} \u{4EE5}\u{4E0B}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
	rangeReversed: `開始日は終了日より前にする必要があります。`,
	rangeUnderflow: (e) => `\u{5024}\u{306F} ${e.minValue} \u{4EE5}\u{4E0A}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
	unavailableDate: `選択した日付は使用できません。`
};
var ru = {};
ru = {
	rangeOverflow: (e) => `\u{AC12}\u{C740} ${e.maxValue} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
	rangeReversed: `시작일은 종료일 이전이어야 합니다.`,
	rangeUnderflow: (e) => `\u{AC12}\u{C740} ${e.minValue} \u{C774}\u{D6C4}\u{C5EC}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
	unavailableDate: `선택한 날짜를 사용할 수 없습니다.`
};
var iu = {};
iu = {
	rangeOverflow: (e) => `Reik\u{161}m\u{117} turi b\u{16B}ti ${e.maxValue} arba ankstesn\u{117}.`,
	rangeReversed: `Pradžios data turi būti ankstesnė nei pabaigos data.`,
	rangeUnderflow: (e) => `Reik\u{161}m\u{117} turi b\u{16B}ti ${e.minValue} arba naujesn\u{117}.`,
	unavailableDate: `Pasirinkta data nepasiekiama.`
};
var au = {};
au = {
	rangeOverflow: (e) => `V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.maxValue} vai agr\u{101}kai.`,
	rangeReversed: `Sākuma datumam ir jābūt pirms beigu datuma.`,
	rangeUnderflow: (e) => `V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.minValue} vai v\u{113}l\u{101}kai.`,
	unavailableDate: `Atlasītais datums nav pieejams.`
};
var ou = {};
ou = {
	rangeOverflow: (e) => `Verdien m\xe5 v\xe6re ${e.maxValue} eller tidligere.`,
	rangeReversed: `Startdatoen må være før sluttdatoen.`,
	rangeUnderflow: (e) => `Verdien m\xe5 v\xe6re ${e.minValue} eller senere.`,
	unavailableDate: `Valgt dato utilgjengelig.`
};
var su = {};
su = {
	rangeOverflow: (e) => `Waarde moet ${e.maxValue} of eerder zijn.`,
	rangeReversed: `De startdatum moet voor de einddatum liggen.`,
	rangeUnderflow: (e) => `Waarde moet ${e.minValue} of later zijn.`,
	unavailableDate: `Geselecteerde datum niet beschikbaar.`
};
var cu = {};
cu = {
	rangeOverflow: (e) => `Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.maxValue} lub wcze\u{15B}niejsz\u{105}.`,
	rangeReversed: `Data rozpoczęcia musi być wcześniejsza niż data zakończenia.`,
	rangeUnderflow: (e) => `Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.minValue} lub p\xf3\u{17A}niejsz\u{105}.`,
	unavailableDate: `Wybrana data jest niedostępna.`
};
var lu = {};
lu = {
	rangeOverflow: (e) => `O valor deve ser ${e.maxValue} ou anterior.`,
	rangeReversed: `A data inicial deve ser anterior à data final.`,
	rangeUnderflow: (e) => `O valor deve ser ${e.minValue} ou posterior.`,
	unavailableDate: `Data selecionada indisponível.`
};
var uu = {};
uu = {
	rangeOverflow: (e) => `O valor tem de ser ${e.maxValue} ou anterior.`,
	rangeReversed: `A data de início deve ser anterior à data de fim.`,
	rangeUnderflow: (e) => `O valor tem de ser ${e.minValue} ou posterior.`,
	unavailableDate: `Data selecionada indisponível.`
};
var du = {};
du = {
	rangeOverflow: (e) => `Valoarea trebuie s\u{103} fie ${e.maxValue} sau anterioar\u{103}.`,
	rangeReversed: `Data de început trebuie să fie anterioară datei de sfârșit.`,
	rangeUnderflow: (e) => `Valoarea trebuie s\u{103} fie ${e.minValue} sau ulterioar\u{103}.`,
	unavailableDate: `Data selectată nu este disponibilă.`
};
var fu = {};
fu = {
	rangeOverflow: (e) => `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{43F}\u{43E}\u{437}\u{436}\u{435} ${e.maxValue}.`,
	rangeReversed: `Дата начала должна предшествовать дате окончания.`,
	rangeUnderflow: (e) => `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{44C}\u{448}\u{435} ${e.minValue}.`,
	unavailableDate: `Выбранная дата недоступна.`
};
var pu = {};
pu = {
	rangeOverflow: (e) => `Hodnota mus\xed by\u{165} ${e.maxValue} alebo skor\u{161}ia.`,
	rangeReversed: `Dátum začiatku musí byť skorší ako dátum konca.`,
	rangeUnderflow: (e) => `Hodnota mus\xed by\u{165} ${e.minValue} alebo neskor\u{161}ia.`,
	unavailableDate: `Vybratý dátum je nedostupný.`
};
var mu = {};
mu = {
	rangeOverflow: (e) => `Vrednost mora biti ${e.maxValue} ali starej\u{161}a.`,
	rangeReversed: `Začetni datum mora biti pred končnim datumom.`,
	rangeUnderflow: (e) => `Vrednost mora biti ${e.minValue} ali novej\u{161}a.`,
	unavailableDate: `Izbrani datum ni na voljo.`
};
var hu = {};
hu = {
	rangeOverflow: (e) => `Vrednost mora da bude ${e.maxValue} ili starija.`,
	rangeReversed: `Datum početka mora biti pre datuma završetka.`,
	rangeUnderflow: (e) => `Vrednost mora da bude ${e.minValue} ili novija.`,
	unavailableDate: `Izabrani datum nije dostupan.`
};
var gu = {};
gu = {
	rangeOverflow: (e) => `V\xe4rdet m\xe5ste vara ${e.maxValue} eller tidigare.`,
	rangeReversed: `Startdatumet måste vara före slutdatumet.`,
	rangeUnderflow: (e) => `V\xe4rdet m\xe5ste vara ${e.minValue} eller senare.`,
	unavailableDate: `Det valda datumet är inte tillgängligt.`
};
var _u = {};
_u = {
	rangeOverflow: (e) => `De\u{11F}er, ${e.maxValue} veya \xf6ncesi olmal\u{131}d\u{131}r.`,
	rangeReversed: `Başlangıç tarihi bitiş tarihinden önce olmalıdır.`,
	rangeUnderflow: (e) => `De\u{11F}er, ${e.minValue} veya sonras\u{131} olmal\u{131}d\u{131}r.`,
	unavailableDate: `Seçilen tarih kullanılamıyor.`
};
var vu = {};
vu = {
	rangeOverflow: (e) => `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{43F}\u{456}\u{437}\u{43D}\u{456}\u{448}\u{435} ${e.maxValue}.`,
	rangeReversed: `Дата початку має передувати даті завершення.`,
	rangeUnderflow: (e) => `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{456}\u{448}\u{435} ${e.minValue}.`,
	unavailableDate: `Вибрана дата недоступна.`
};
var yu = {};
yu = {
	rangeOverflow: (e) => `\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{65E5}\u{671F}\u{3002}`,
	rangeReversed: `开始日期必须早于结束日期。`,
	rangeUnderflow: (e) => `\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{65E5}\u{671F}\u{3002}`,
	unavailableDate: `所选日期不可用。`
};
var bu = {};
bu = {
	rangeOverflow: (e) => `\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{3002}`,
	rangeReversed: `開始日期必須在結束日期之前。`,
	rangeUnderflow: (e) => `\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{3002}`,
	unavailableDate: `所選日期無法使用。`
};
var xu = {};
xu = {
	"ar-AE": Vl,
	"bg-BG": Hl,
	"cs-CZ": Ul,
	"da-DK": Wl,
	"de-DE": Gl,
	"el-GR": Kl,
	"en-US": ql,
	"es-ES": Jl,
	"et-EE": Yl,
	"fi-FI": Xl,
	"fr-FR": Zl,
	"he-IL": Ql,
	"hr-HR": $l,
	"hu-HU": eu,
	"it-IT": tu,
	"ja-JP": nu,
	"ko-KR": ru,
	"lt-LT": iu,
	"lv-LV": au,
	"nb-NO": ou,
	"nl-NL": su,
	"pl-PL": cu,
	"pt-BR": lu,
	"pt-PT": uu,
	"ro-RO": du,
	"ru-RU": fu,
	"sk-SK": pu,
	"sl-SI": mu,
	"sr-SP": hu,
	"sv-SE": gu,
	"tr-TR": _u,
	"uk-UA": vu,
	"zh-CN": yu,
	"zh-TW": bu
};
function Su(e) {
	return e && e.__esModule ? e.default : e;
}
var Cu = new be(Su(xu));
function wu() {
	let e = typeof navigator < `u` && (navigator.language || navigator.userLanguage) || `en-US`;
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = `en-US`;
	}
	return e;
}
function Tu(e, t, n, r, i) {
	let a = e != null && n != null && e.compare(n) > 0, o = e != null && t != null && e.compare(t) < 0, s = e != null && r?.(e) || !1, c = a || o || s, l = [];
	if (c) {
		let e = wu(), r = be.getGlobalDictionaryForPackage(`@react-stately/datepicker`) || Cu, c = new Se(e, r), u = new ga(e, Ou({}, i)), d = u.resolvedOptions().timeZone;
		o && t != null && l.push(c.format(`rangeUnderflow`, { minValue: u.format(t.toDate(d)) })), a && n != null && l.push(c.format(`rangeOverflow`, { maxValue: u.format(n.toDate(d)) })), s && l.push(c.format(`unavailableDate`));
	}
	return {
		isInvalid: c,
		validationErrors: l,
		validationDetails: {
			badInput: s,
			customError: !1,
			patternMismatch: !1,
			rangeOverflow: a,
			rangeUnderflow: o,
			stepMismatch: !1,
			tooLong: !1,
			tooShort: !1,
			typeMismatch: !1,
			valueMissing: !1,
			valid: !c
		}
	};
}
var Eu = {
	year: `numeric`,
	month: `numeric`,
	day: `numeric`,
	hour: `numeric`,
	minute: `2-digit`,
	second: `2-digit`
}, Du = {
	year: `numeric`,
	month: `2-digit`,
	day: `2-digit`,
	hour: `2-digit`,
	minute: `2-digit`,
	second: `2-digit`
};
function Ou(e, t) {
	e = {
		...t.shouldForceLeadingZeros ? Du : Eu,
		...e
	};
	let n = t.granularity || `minute`, r = Object.keys(e), i = r.indexOf(t.maxGranularity ?? `year`);
	i < 0 && (i = 0);
	let a = r.indexOf(n);
	if (a < 0 && (a = 2), i > a) throw Error(`maxGranularity must be greater than granularity`);
	let o = r.slice(i, a + 1).reduce((t, n) => (t[n] = e[n], t), {});
	return t.hourCycle != null && (o.hour12 = t.hourCycle === 12), o.timeZone = t.timeZone || `UTC`, (n === `hour` || n === `minute` || n === `second`) && t.timeZone && !t.hideTimeZone && (o.timeZoneName = `short`), t.showEra && i === 0 && (o.era = `short`), o;
}
function ku(e) {
	return e && `hour` in e ? e : new ii();
}
function Au(e, t) {
	if (e === null) return null;
	if (e) return J(e, t);
}
function ju(e, t, n, r) {
	if (e) return Au(e, n);
	let i = J(Bn(r ?? qn()).set({
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	}), n);
	return t === `year` || t === `month` || t === `day` ? q(i) : r ? i : vr(i);
}
function Mu(e, t) {
	let n = e && `timeZone` in e ? e.timeZone : void 0, r = e && `minute` in e ? `minute` : `day`;
	if (e && t && !(t in e)) throw Error(`Invalid granularity ` + t + ` for value ` + e.toString());
	let [i, a] = (0, W.useState)([r, n]);
	e && (i[0] !== r || i[1] !== n) && a([r, n]), t ||= e ? r : i[0];
	let o = e ? n : i[1];
	return [t, o];
}
var Nu = new be({
	ach: {
		year: `mwaka`,
		month: `dwe`,
		day: `nino`
	},
	af: {
		year: `jjjj`,
		month: `mm`,
		day: `dd`
	},
	am: {
		year: `ዓዓዓዓ`,
		month: `ሚሜ`,
		day: `ቀቀ`
	},
	an: {
		year: `aaaa`,
		month: `mm`,
		day: `dd`
	},
	ar: {
		year: `سنة`,
		month: `شهر`,
		day: `يوم`
	},
	ast: {
		year: `aaaa`,
		month: `mm`,
		day: `dd`
	},
	az: {
		year: `iiii`,
		month: `aa`,
		day: `gg`
	},
	be: {
		year: `гггг`,
		month: `мм`,
		day: `дд`
	},
	bg: {
		year: `гггг`,
		month: `мм`,
		day: `дд`
	},
	bn: {
		year: `yyyy`,
		month: `মিমি`,
		day: `dd`
	},
	br: {
		year: `bbbb`,
		month: `mm`,
		day: `dd`
	},
	bs: {
		year: `gggg`,
		month: `mm`,
		day: `dd`
	},
	ca: {
		year: `aaaa`,
		month: `mm`,
		day: `dd`
	},
	cak: {
		year: `jjjj`,
		month: `ii`,
		day: `q'q'`
	},
	ckb: {
		year: `ساڵ`,
		month: `مانگ`,
		day: `ڕۆژ`
	},
	cs: {
		year: `rrrr`,
		month: `mm`,
		day: `dd`
	},
	cy: {
		year: `bbbb`,
		month: `mm`,
		day: `dd`
	},
	da: {
		year: `åååå`,
		month: `mm`,
		day: `dd`
	},
	de: {
		year: `jjjj`,
		month: `mm`,
		day: `tt`
	},
	dsb: {
		year: `llll`,
		month: `mm`,
		day: `źź`
	},
	el: {
		year: `εεεε`,
		month: `μμ`,
		day: `ηη`
	},
	en: {
		year: `yyyy`,
		month: `mm`,
		day: `dd`
	},
	eo: {
		year: `jjjj`,
		month: `mm`,
		day: `tt`
	},
	es: {
		year: `aaaa`,
		month: `mm`,
		day: `dd`
	},
	et: {
		year: `aaaa`,
		month: `kk`,
		day: `pp`
	},
	eu: {
		year: `uuuu`,
		month: `hh`,
		day: `ee`
	},
	fa: {
		year: `سال`,
		month: `ماه`,
		day: `روز`
	},
	ff: {
		year: `hhhh`,
		month: `ll`,
		day: `ññ`
	},
	fi: {
		year: `vvvv`,
		month: `kk`,
		day: `pp`
	},
	fr: {
		year: `aaaa`,
		month: `mm`,
		day: `jj`
	},
	fy: {
		year: `jjjj`,
		month: `mm`,
		day: `dd`
	},
	ga: {
		year: `bbbb`,
		month: `mm`,
		day: `ll`
	},
	gd: {
		year: `bbbb`,
		month: `mm`,
		day: `ll`
	},
	gl: {
		year: `aaaa`,
		month: `mm`,
		day: `dd`
	},
	he: {
		year: `שנה`,
		month: `חודש`,
		day: `יום`
	},
	hr: {
		year: `gggg`,
		month: `mm`,
		day: `dd`
	},
	hsb: {
		year: `llll`,
		month: `mm`,
		day: `dd`
	},
	hu: {
		year: `éééé`,
		month: `hh`,
		day: `nn`
	},
	ia: {
		year: `aaaa`,
		month: `mm`,
		day: `dd`
	},
	id: {
		year: `tttt`,
		month: `bb`,
		day: `hh`
	},
	is: {
		year: `áááá`,
		month: `mm`,
		day: `dd`
	},
	it: {
		year: `aaaa`,
		month: `mm`,
		day: `gg`
	},
	ja: {
		year: `年`,
		month: `月`,
		day: `日`
	},
	ka: {
		year: `წწწწ`,
		month: `თთ`,
		day: `რრ`
	},
	kk: {
		year: `жжжж`,
		month: `аа`,
		day: `кк`
	},
	kn: {
		year: `ವವವವ`,
		month: `ಮಿಮೀ`,
		day: `ದಿದಿ`
	},
	ko: {
		year: `연도`,
		month: `월`,
		day: `일`
	},
	lb: {
		year: `jjjj`,
		month: `mm`,
		day: `dd`
	},
	lo: {
		year: `ປປປປ`,
		month: `ດດ`,
		day: `ວວ`
	},
	lt: {
		year: `mmmm`,
		month: `mm`,
		day: `dd`
	},
	lv: {
		year: `gggg`,
		month: `mm`,
		day: `dd`
	},
	meh: {
		year: `aaaa`,
		month: `mm`,
		day: `dd`
	},
	ml: {
		year: `വർഷം`,
		month: `മാസം`,
		day: `തീയതി`
	},
	ms: {
		year: `tttt`,
		month: `mm`,
		day: `hh`
	},
	nb: {
		year: `åååå`,
		month: `mm`,
		day: `dd`
	},
	nl: {
		year: `jjjj`,
		month: `mm`,
		day: `dd`
	},
	nn: {
		year: `åååå`,
		month: `mm`,
		day: `dd`
	},
	no: {
		year: `åååå`,
		month: `mm`,
		day: `dd`
	},
	oc: {
		year: `aaaa`,
		month: `mm`,
		day: `jj`
	},
	pl: {
		year: `rrrr`,
		month: `mm`,
		day: `dd`
	},
	pt: {
		year: `aaaa`,
		month: `mm`,
		day: `dd`
	},
	rm: {
		year: `oooo`,
		month: `mm`,
		day: `dd`
	},
	ro: {
		year: `aaaa`,
		month: `ll`,
		day: `zz`
	},
	ru: {
		year: `гггг`,
		month: `мм`,
		day: `дд`
	},
	sc: {
		year: `aaaa`,
		month: `mm`,
		day: `dd`
	},
	scn: {
		year: `aaaa`,
		month: `mm`,
		day: `jj`
	},
	sk: {
		year: `rrrr`,
		month: `mm`,
		day: `dd`
	},
	sl: {
		year: `llll`,
		month: `mm`,
		day: `dd`
	},
	sr: {
		year: `гггг`,
		month: `мм`,
		day: `дд`
	},
	"sr-Latn": {
		year: `gggg`,
		month: `mm`,
		day: `dd`
	},
	sv: {
		year: `åååå`,
		month: `mm`,
		day: `dd`
	},
	szl: {
		year: `rrrr`,
		month: `mm`,
		day: `dd`
	},
	tg: {
		year: `сссс`,
		month: `мм`,
		day: `рр`
	},
	th: {
		year: `ปปปป`,
		month: `ดด`,
		day: `วว`
	},
	tr: {
		year: `yyyy`,
		month: `aa`,
		day: `gg`
	},
	uk: {
		year: `рррр`,
		month: `мм`,
		day: `дд`
	},
	"zh-CN": {
		year: `年`,
		month: `月`,
		day: `日`
	},
	"zh-TW": {
		year: `年`,
		month: `月`,
		day: `日`
	}
}, `en`);
function Pu(e, t, n) {
	return e === `era` || e === `dayPeriod` ? t : e === `year` || e === `month` || e === `day` ? Nu.getStringForLocale(e, n) : `––`;
}
var Fu = class e {
	constructor(e, t, n) {
		if (this.era = n?.era ?? null, this.calendar = e, this.year = n?.year ?? null, this.month = n?.month ?? null, this.day = n?.day ?? null, this.hour = n?.hour ?? null, this.hourCycle = t, this.dayPeriod = null, this.minute = n?.minute ?? null, this.second = n?.second ?? null, this.millisecond = n?.millisecond ?? null, this.offset = `offset` in (n ?? {}) ? n.offset : null, this.hour != null) {
			let [e, n] = Lu(this.hour, t);
			this.dayPeriod = e, this.hour = n;
		}
	}
	copy() {
		let t = new e(this.calendar, this.hourCycle);
		return t.era = this.era, t.year = this.year, t.month = this.month, t.day = this.day, t.hour = this.hour, t.dayPeriod = this.dayPeriod, t.minute = this.minute, t.second = this.second, t.millisecond = this.millisecond, t.offset = this.offset, t;
	}
	isComplete(e) {
		return e.every((e) => this[e] != null);
	}
	validate(e, t) {
		return t.every((t) => {
			if ((t === `hour` || t === `dayPeriod`) && `hour` in e) {
				let [t, n] = Lu(e.hour, this.hourCycle);
				return this.dayPeriod === t && this.hour === n;
			}
			return this[t] === e[t];
		});
	}
	isCleared(e) {
		return e.every((e) => this[e] === null);
	}
	set(e, t, n) {
		let r = this.copy();
		return r[e] = t, e === `hour` && r.dayPeriod == null && `hour` in n && (r.dayPeriod = Lu(n.hour, this.hourCycle)[0]), e === `year` && r.era == null && (r.era = n.era), e !== `second` && e !== `literal` && e !== `timeZoneName` && (r.offset = null), r;
	}
	clear(e) {
		let t = this.copy();
		return t[e] = null, e === `year` && (t.era = null), t.offset = null, t;
	}
	cycle(e, t, n, r) {
		let i = this.copy();
		if (i[e] == null && e !== `dayPeriod` && e !== `era`) {
			if (e === `hour` && `hour` in n) {
				let [e, t] = Lu(n.hour, this.hourCycle);
				i.dayPeriod = e, i.hour = t;
			} else i[e] = n[e];
			return e === `year` && i.era == null && (i.era = n.era), i;
		}
		switch (e) {
			case `era`: {
				let e = this.calendar.getEras(), n = e.indexOf(i.era);
				n = Iu(n, t, 0, e.length - 1), i.era = e[n];
				break;
			}
			case `year`: {
				let r = new X(this.calendar, this.era ?? n.era, this.year ?? n.year, this.month ?? 1, this.day ?? 1);
				r = r.cycle(e, t, { round: e === `year` }), i.era = r.era, i.year = r.year;
				break;
			}
			case `month`:
				i.month = Iu(i.month ?? 1, t, 1, this.calendar.getMaximumMonthsInYear());
				break;
			case `day`:
				i.day = Iu(i.day ?? 1, t, 1, this.calendar.getMaximumDaysInMonth());
				break;
			case `hour`: {
				let e = r.some((e) => [
					`year`,
					`month`,
					`day`
				].includes(e));
				if (`timeZone` in n && (!e || i.year != null && i.month != null && i.day != null)) {
					let e = this.toValue(n);
					e = e.cycle(`hour`, t, {
						hourCycle: this.hourCycle === `h12` ? 12 : 24,
						round: !1
					});
					let [r, a] = Lu(e.hour, this.hourCycle);
					i.hour = a, i.dayPeriod = r, i.offset = e.offset;
				} else {
					let e = i.hour ?? 0, r = this.getSegmentLimits(`hour`);
					i.hour = Iu(e, t, r.minValue, r.maxValue), i.dayPeriod == null && `hour` in n && (i.dayPeriod = Lu(n.hour, this.hourCycle)[0]);
				}
				break;
			}
			case `dayPeriod`:
				i.dayPeriod = Iu(i.dayPeriod ?? 0, t, 0, 1);
				break;
			case `minute`:
				i.minute = Iu(i.minute ?? 0, t, 0, 59, !0);
				break;
			case `second`: i.second = Iu(i.second ?? 0, t, 0, 59, !0);
		}
		return i;
	}
	toValue(e) {
		if (`hour` in e) {
			let t = this.hour;
			t == null ? (this.hourCycle === `h12` || this.hourCycle === `h11`) && (t = this.dayPeriod === 1 ? 12 : 0) : t = Ru(t, this.dayPeriod ?? 0, this.hourCycle);
			let n = e.set({
				era: this.era ?? e.era,
				year: this.year ?? e.year,
				month: this.month ?? e.month,
				day: this.day ?? e.day,
				hour: t ?? e.hour,
				minute: this.minute ?? e.minute,
				second: this.second ?? e.second,
				millisecond: this.millisecond ?? e.millisecond
			});
			return `offset` in n && this.offset != null && n.offset !== this.offset && (n = n.add({ milliseconds: n.offset - this.offset })), n;
		}
		return e.set({
			era: this.era ?? e.era,
			year: this.year ?? e.year,
			month: this.month ?? e.month,
			day: this.day ?? e.day
		});
	}
	getSegmentLimits(e) {
		switch (e) {
			case `era`: {
				let e = this.calendar.getEras();
				return {
					value: this.era == null ? e.length - 1 : e.indexOf(this.era),
					minValue: 0,
					maxValue: e.length - 1
				};
			}
			case `year`: return {
				value: this.year,
				minValue: 1,
				maxValue: 9999
			};
			case `month`: return {
				value: this.month,
				minValue: 1,
				maxValue: this.calendar.getMaximumMonthsInYear()
			};
			case `day`: return {
				value: this.day,
				minValue: 1,
				maxValue: this.calendar.getMaximumDaysInMonth()
			};
			case `dayPeriod`: return {
				value: this.dayPeriod,
				minValue: 0,
				maxValue: 1
			};
			case `hour`: {
				let e = 0, t = 23;
				return this.hourCycle === `h12` ? (e = 1, t = 12) : this.hourCycle === `h11` && (e = 0, t = 11), {
					value: this.hour,
					minValue: e,
					maxValue: t
				};
			}
			case `minute`: return {
				value: this.minute,
				minValue: 0,
				maxValue: 59
			};
			case `second`: return {
				value: this.second,
				minValue: 0,
				maxValue: 59
			};
		}
	}
};
function Iu(e, t, n, r, i = !1) {
	if (i) {
		e += Math.sign(t), e < n && (e = r);
		let i = Math.abs(t);
		e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i, e > r && (e = n);
	} else e += t, e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
	return e;
}
function Lu(e, t) {
	let n = +(e >= 12);
	switch (t) {
		case `h11`:
			e >= 12 && (e -= 12);
			break;
		case `h12`:
			e === 0 ? e = 12 : e > 12 && (e -= 12);
			break;
		case `h23`:
			n = null;
			break;
		case `h24`: e += 1, n = null;
	}
	return [n, e];
}
function Ru(e, t, n) {
	switch (n) {
		case `h11`:
			t === 1 && (e += 12);
			break;
		case `h12`:
			e === 12 && (e = 0), t === 1 && (e += 12);
			break;
		case `h24`: --e;
	}
	return e;
}
var zu = {
	year: !0,
	month: !0,
	day: !0,
	hour: !0,
	minute: !0,
	second: !0,
	dayPeriod: !0,
	era: !0
}, Bu = {
	year: 5,
	month: 2,
	day: 7,
	hour: 2,
	minute: 15,
	second: 15
}, Vu = {
	dayperiod: `dayPeriod`,
	relatedYear: `year`,
	yearName: `literal`,
	unknown: `literal`
};
function Hu(e) {
	let { locale: t, createCalendar: n, hideTimeZone: r, isDisabled: i = !1, isReadOnly: a = !1, isRequired: o = !1, minValue: s, maxValue: c, isDateUnavailable: l } = e, u = e.value || e.defaultValue || e.placeholderValue || null, [d, f] = Mu(u, e.granularity), p = f || `UTC`;
	if (u && !(d in u)) throw Error(`Invalid granularity ` + d + ` for value ` + u.toString());
	let [m, h] = (0, W.useMemo)(() => {
		let r = new ga(t, {
			dateStyle: `short`,
			timeStyle: `short`,
			hour12: e.hourCycle == null ? void 0 : e.hourCycle === 12
		}).resolvedOptions();
		return [n(r.calendar), r.hourCycle];
	}, [
		t,
		e.hourCycle,
		n
	]), [g, _] = ke(e.value, e.defaultValue ?? null, e.onChange), [v] = (0, W.useState)(g), y = (0, W.useMemo)(() => Au(g, m) ?? null, [g, m]), [b, x] = (0, W.useState)(() => new Fu(m, h, y)), S = m.identifier === `gregory` && b.era === `BC`, C = (0, W.useMemo)(() => ({
		granularity: d,
		maxGranularity: e.maxGranularity ?? `year`,
		timeZone: f,
		hideTimeZone: r,
		hourCycle: e.hourCycle,
		showEra: S,
		shouldForceLeadingZeros: e.shouldForceLeadingZeros
	}), [
		e.maxGranularity,
		d,
		e.hourCycle,
		e.shouldForceLeadingZeros,
		f,
		r,
		S
	]), w = (0, W.useMemo)(() => Ou({}, C), [C]), T = (0, W.useMemo)(() => new ga(t, w), [t, w]), E = (0, W.useMemo)(() => T.resolvedOptions(), [T]), D = (0, W.useMemo)(() => ju(e.placeholderValue, d, m, f), [
		e.placeholderValue,
		d,
		m,
		f
	]), O = (0, W.useMemo)(() => {
		let t = h === `h11` || h === `h12`, n = [
			`era`,
			`year`,
			`month`,
			`day`,
			`hour`,
			...t ? [`dayPeriod`] : [],
			`minute`,
			`second`
		], r = n.indexOf(e.maxGranularity || `era`), i = n.indexOf(d === `hour` && t ? `dayPeriod` : d);
		return n.slice(r, i + 1);
	}, [
		e.maxGranularity,
		d,
		h
	]), [k, A] = (0, W.useState)(y), [j, M] = (0, W.useState)(m), [N, P] = (0, W.useState)(h);
	y === k && h === N && In(m, j) || (b = new Fu(m, h, y), A(y), M(m), P(h), x(b));
	let F = (t) => {
		if (!(e.isDisabled || e.isReadOnly)) {
			if (t == null || t instanceof Fu && t.isCleared(O)) x(new Fu(m, h, y)), _(null);
			else if (!(t instanceof Fu)) t = J(t, u?.calendar || new G()), x(new Fu(m, h, y)), _(t);
			else {
				if (t.isComplete(O)) {
					let e = t.toValue(y ?? D);
					if (t.validate(e, O)) {
						let t = J(e, u?.calendar || new G());
						if (!g || t.compare(g) !== 0) {
							x(new Fu(m, h, y)), _(t);
							return;
						}
					}
				}
				x(t);
			}
		}
	}, I = (0, W.useMemo)(() => b.toValue(y ?? D).toDate(p), [
		b,
		p,
		y,
		D
	]), L = (0, W.useMemo)(() => Uu(I, b, T, E, m, t, d), [
		I,
		T,
		E,
		b,
		m,
		t,
		d
	]), ee = (e, t) => {
		F(b.cycle(e, t, D, O));
	}, R = (0, W.useMemo)(() => Tu(g, s, c, l, C), [
		g,
		s,
		c,
		l,
		C
	]), te = He({
		...e,
		value: g,
		builtinValidation: R
	}), z = te.displayValidation.isInvalid, B = e.validationState || (z ? `invalid` : null);
	return {
		...te,
		value: y,
		defaultValue: e.defaultValue ?? v,
		dateValue: I,
		calendar: m,
		setValue: F,
		segments: L,
		dateFormatter: T,
		validationState: B,
		isInvalid: z,
		granularity: d,
		maxGranularity: e.maxGranularity ?? `year`,
		isDisabled: i,
		isReadOnly: a,
		isRequired: o,
		increment(e) {
			ee(e, 1);
		},
		decrement(e) {
			ee(e, -1);
		},
		incrementPage(e) {
			ee(e, Bu[e] || 1);
		},
		decrementPage(e) {
			ee(e, -(Bu[e] || 1));
		},
		incrementToMax(e) {
			let t = e === `hour` && h === `h12` ? 11 : b.getSegmentLimits(e).maxValue;
			F(b.set(e, t, D));
		},
		decrementToMin(e) {
			let t = e === `hour` && h === `h12` ? 12 : b.getSegmentLimits(e).minValue;
			F(b.set(e, t, D));
		},
		setSegment(e, t) {
			F(b.set(e, t, D));
		},
		confirmPlaceholder() {
			if (!(e.isDisabled || e.isReadOnly) && b.isComplete(O)) {
				let e = J(b.toValue(y ?? D), u?.calendar || new G());
				g && e.compare(g) === 0 || _(e), x(new Fu(m, h, y));
			}
		},
		clearSegment(e) {
			let t = b;
			e !== `timeZoneName` && e !== `literal` && (t = b.clear(e)), F(t);
		},
		formatValue(e) {
			if (!y) return ``;
			let n = Ou(e, C);
			return new ga(t, n).format(I);
		},
		getDateFormatter(e, t) {
			return new ga(e, Ou({}, {
				...C,
				...t
			}));
		}
	};
}
function Uu(e, t, n, r, i, a, o) {
	let s = [
		`hour`,
		`minute`,
		`second`
	], c = n.formatToParts(e), l = new h(a, { useGrouping: !1 }), u = new h(a, {
		useGrouping: !1,
		minimumIntegerDigits: 2
	});
	for (let e of c) if (e.type === `year` || e.type === `month` || e.type === `day` || e.type === `hour`) {
		let n = t[e.type] ?? 0;
		e.value = r[e.type] === `2-digit` ? u.format(n) : l.format(n);
	}
	let d = [];
	for (let e of c) {
		let n = Vu[e.type] || e.type, r = zu[n];
		n === `era` && i.getEras().length === 1 && (r = !1);
		let c = zu[n] && t[e.type] == null, l = zu[n] ? Pu(n, e.value, a) : null, u = {
			type: n,
			text: c ? l : e.value,
			...t.getSegmentLimits(n),
			isPlaceholder: c,
			placeholder: l,
			isEditable: r
		};
		n === `hour` ? (d.push({
			type: `literal`,
			text: `⁦`,
			isPlaceholder: !1,
			placeholder: ``,
			isEditable: !1
		}), d.push(u), n === o && d.push({
			type: `literal`,
			text: `⁩`,
			isPlaceholder: !1,
			placeholder: ``,
			isEditable: !1
		})) : s.includes(n) && n === o ? (d.push(u), d.push({
			type: `literal`,
			text: `⁩`,
			isPlaceholder: !1,
			placeholder: ``,
			isEditable: !1
		})) : d.push(u);
	}
	return d;
}
var Wu = (0, W.createContext)(null), Gu = (0, W.createContext)(null), Ku = (0, W.createContext)(null), qu = (0, W.forwardRef)(function(e, t) {
	let n = (0, W.useContext)(Gu), r = (0, W.useContext)(Ku);
	return n || r ? W.createElement(Yu, {
		...e,
		ref: t
	}) : W.createElement(Ju, {
		...e,
		ref: t
	});
}), Ju = (0, W.forwardRef)((e, t) => {
	let [n, r] = I({ slot: e.slot }, t, Wu), { locale: i } = B(), a = Hu({
		...n,
		locale: i,
		createCalendar: ma
	}), o = (0, W.useRef)(null), { fieldProps: s, inputProps: c } = Fl({
		...n,
		inputRef: o
	}, a, r);
	return W.createElement(M, { values: [
		[Gu, a],
		[Me, {
			...c,
			ref: o
		}],
		[Ae, {
			...s,
			ref: r,
			isInvalid: a.isInvalid,
			isDisabled: a.isDisabled
		}]
	] }, W.createElement(Yu, e));
}), Yu = (0, W.forwardRef)((e, t) => {
	let { className: n, children: r } = e, i = (0, W.useContext)(Gu), a = (0, W.useContext)(Ku), o = i ?? a;
	return W.createElement(W.Fragment, null, W.createElement(je, {
		...e,
		ref: t,
		slot: e.slot || void 0,
		className: n ?? `react-aria-DateInput`,
		isReadOnly: o.isReadOnly,
		isInvalid: o.isInvalid,
		isDisabled: o.isDisabled
	}, o.segments.map((e, t) => (0, W.cloneElement)(r(e), { key: t }))), W.createElement(Ne, { className: `` }));
}), Xu = (0, W.forwardRef)(function({ segment: e, ...t }, r) {
	let i = (0, W.useContext)(Gu), a = (0, W.useContext)(Ku), o = i ?? a, s = D(r), { segmentProps: c } = zl(e, o, s), { focusProps: l, isFocused: u, isFocusVisible: d } = C(), { hoverProps: f, isHovered: p } = n({
		...t,
		isDisabled: o.isDisabled || e.type === `literal`
	}), m = x({
		...t,
		values: {
			...e,
			isReadOnly: o.isReadOnly,
			isInvalid: o.isInvalid,
			isDisabled: o.isDisabled,
			isHovered: p,
			isFocused: u,
			isFocusVisible: d
		},
		defaultChildren: e.text,
		defaultClassName: `react-aria-DateSegment`
	});
	return W.createElement(w.span, {
		...T(S(t, { global: !0 }), c, l, f),
		...m,
		style: c.style,
		ref: s,
		"data-placeholder": e.isPlaceholder || void 0,
		"data-invalid": o.isInvalid || void 0,
		"data-readonly": o.isReadOnly || void 0,
		"data-disabled": o.isDisabled || void 0,
		"data-type": e.type,
		"data-hovered": p || void 0,
		"data-focused": u || void 0,
		"data-focus-visible": d || void 0
	});
});
function Zu(e) {
	return e && e.__esModule ? e.default : e;
}
function Qu(e, t, n) {
	let r = z(), i = z(), a = z(), o = xe(Zu(Ol), `@react-aria/datepicker`), { isInvalid: s, validationErrors: c, validationDetails: l } = t.displayValidation, { labelProps: u, fieldProps: d, descriptionProps: f, errorMessageProps: p } = We({
		...e,
		labelElementType: `span`,
		isInvalid: s,
		errorMessage: e.errorMessage || c
	}), m = kl(t, n), h = d[`aria-labelledby`] || d.id, { locale: _ } = B(), v = t.formatValue(_, { month: `long` }), y = v ? o.format(`selectedDateDescription`, { date: v }) : ``, b = _t(y), x = [b[`aria-describedby`], d[`aria-describedby`]].filter(Boolean).join(` `) || void 0, C = S(e), w = (0, W.useMemo)(() => vt(n), [n]), E = (0, W.useRef)(!1), { focusWithinProps: D } = L({
		...e,
		isDisabled: t.isOpen,
		onBlurWithin: (t) => {
			let n = document.getElementById(i);
			g(n, t.relatedTarget) || (E.current = !1, e.onBlur?.(t), e.onFocusChange?.(!1));
		},
		onFocusWithin: (t) => {
			E.current || (E.current = !0, e.onFocus?.(t), e.onFocusChange?.(!0));
		}
	});
	return {
		groupProps: T(C, m, d, b, D, {
			role: `group`,
			"aria-disabled": e.isDisabled || null,
			"aria-labelledby": h,
			"aria-describedby": x,
			onKeyDown(n) {
				t.isOpen || e.onKeyDown && e.onKeyDown(n);
			},
			onKeyUp(n) {
				t.isOpen || e.onKeyUp && e.onKeyUp(n);
			}
		}),
		labelProps: {
			...u,
			onClick: () => {
				w.focusFirst();
			}
		},
		fieldProps: {
			...d,
			id: a,
			[Nl]: `presentation`,
			"aria-describedby": x,
			value: t.value,
			defaultValue: t.defaultValue,
			onChange: t.setValue,
			placeholderValue: e.placeholderValue,
			hideTimeZone: e.hideTimeZone,
			hourCycle: e.hourCycle,
			shouldForceLeadingZeros: e.shouldForceLeadingZeros,
			granularity: e.granularity,
			isDisabled: e.isDisabled,
			isReadOnly: e.isReadOnly,
			isRequired: e.isRequired,
			validationBehavior: e.validationBehavior,
			[Ge]: t,
			autoFocus: e.autoFocus,
			name: e.name,
			form: e.form
		},
		descriptionProps: f,
		errorMessageProps: p,
		buttonProps: {
			...b,
			id: r,
			"aria-haspopup": `dialog`,
			"aria-label": o.format(`calendar`),
			"aria-labelledby": `${r} ${h}`,
			"aria-describedby": x,
			"aria-expanded": t.isOpen,
			isDisabled: e.isDisabled || e.isReadOnly,
			onPress: () => t.setOpen(!0)
		},
		dialogProps: {
			id: i,
			"aria-labelledby": `${r} ${h}`
		},
		calendarProps: {
			autoFocus: !0,
			value: t.dateValue,
			onChange: t.setDateValue,
			minValue: e.minValue,
			maxValue: e.maxValue,
			isDisabled: e.isDisabled,
			isReadOnly: e.isReadOnly,
			isDateUnavailable: e.isDateUnavailable,
			defaultFocusedValue: t.dateValue ? void 0 : e.placeholderValue,
			isInvalid: t.isInvalid,
			errorMessage: typeof e.errorMessage == `function` ? e.errorMessage(t.displayValidation) : e.errorMessage || t.displayValidation.validationErrors.join(` `),
			firstDayOfWeek: e.firstDayOfWeek,
			pageBehavior: e.pageBehavior
		},
		isInvalid: s,
		validationErrors: c,
		validationDetails: l
	};
}
function $u(e) {
	let t = St(e), [n, r] = ke(e.value, e.defaultValue || null, e.onChange), [i] = (0, W.useState)(n), a = n || e.placeholderValue || null, [o, s] = Mu(a, e.granularity), c = n == null ? null : n.toDate(s ?? `UTC`), l = o === `hour` || o === `minute` || o === `second`, u = e.shouldCloseOnSelect ?? !0, [d, f] = (0, W.useState)(null), [p, m] = (0, W.useState)(null);
	if (n && (d = n, `hour` in n && (p = n)), a && !(o in a)) throw Error(`Invalid granularity ` + o + ` for value ` + a.toString());
	let h = n?.calendar.identifier === `gregory` && n.era === `BC`, g = (0, W.useMemo)(() => ({
		granularity: o,
		timeZone: s,
		hideTimeZone: e.hideTimeZone,
		hourCycle: e.hourCycle,
		shouldForceLeadingZeros: e.shouldForceLeadingZeros,
		showEra: h
	}), [
		o,
		e.hourCycle,
		e.shouldForceLeadingZeros,
		s,
		e.hideTimeZone,
		h
	]), { minValue: _, maxValue: v, isDateUnavailable: y } = e, b = (0, W.useMemo)(() => Tu(n, _, v, y, g), [
		n,
		_,
		v,
		y,
		g
	]), x = He({
		...e,
		value: n,
		builtinValidation: b
	}), S = x.displayValidation.isInvalid, C = e.validationState || (S ? `invalid` : null), w = (e, t) => {
		r(`timeZone` in t ? t.set(q(e)) : vr(e, t)), f(null), m(null), x.commitValidation();
	}, T = (n) => {
		let i = typeof u == `function` ? u() : u;
		l ? p || i ? w(n, p || ku(e.defaultValue || e.placeholderValue)) : f(n) : (r(n), x.commitValidation()), i && t.setOpen(!1);
	}, E = (e) => {
		d && e ? w(d, e) : m(e);
	};
	return {
		...x,
		value: n,
		defaultValue: e.defaultValue ?? i,
		setValue: r,
		dateValue: d,
		timeValue: p,
		setDateValue: T,
		setTimeValue: E,
		granularity: o,
		hasTime: l,
		...t,
		setOpen(r) {
			!r && !n && d && l && w(d, p || ku(e.defaultValue || e.placeholderValue)), t.setOpen(r);
		},
		validationState: C,
		isInvalid: S,
		formatValue(e, t) {
			return c ? new ga(e, Ou(t, g)).format(c) : ``;
		},
		getDateFormatter(e, t) {
			return new ga(e, Ou({}, {
				...g,
				...t
			}));
		}
	};
}
var ed = (0, W.createContext)(null), td = (0, W.createContext)(null), nd = [
	Ae,
	f,
	_,
	Pe
], rd = (0, W.forwardRef)(function(e, t) {
	[e, t] = I(e, t, ed);
	let { validationBehavior: n } = A(Ue) || {}, r = e.validationBehavior ?? n ?? `native`, i = $u({
		...e,
		validationBehavior: r
	}), a = (0, W.useRef)(null), [o, s] = k(!e[`aria-label`] && !e[`aria-labelledby`]), { groupProps: c, labelProps: l, fieldProps: u, buttonProps: d, dialogProps: p, calendarProps: m, descriptionProps: h, errorMessageProps: g, ...v } = Qu({
		...N(e),
		label: s,
		validationBehavior: r
	}, i, a), { focusProps: y, isFocused: b, isFocusVisible: E } = C({ within: !0 }), D = x({
		...e,
		values: {
			state: i,
			isFocusWithin: b,
			isFocusVisible: E,
			isDisabled: e.isDisabled || !1,
			isInvalid: i.isInvalid,
			isOpen: i.isOpen,
			isReadOnly: e.isReadOnly || !1,
			isRequired: e.isRequired || !1
		},
		defaultClassName: `react-aria-DatePicker`
	}), O = S(e, { global: !0 });
	return delete O.id, W.createElement(M, { values: [
		[td, i],
		[Ae, {
			...c,
			ref: a,
			isInvalid: i.isInvalid
		}],
		[Wu, u],
		[f, {
			...d,
			isPressed: i.isOpen
		}],
		[_, {
			...l,
			ref: o,
			elementType: `span`
		}],
		[Ya, m],
		[st, i],
		[ot, {
			trigger: `DatePicker`,
			triggerRef: a,
			placement: `bottom start`,
			clearContexts: nd
		}],
		[lt, p],
		[Pe, { slots: {
			description: h,
			errorMessage: g
		} }],
		[we, v]
	] }, W.createElement(w.div, {
		...T(O, D, y),
		ref: t,
		slot: e.slot || void 0,
		"data-focus-within": b || void 0,
		"data-invalid": i.isInvalid || void 0,
		"data-focus-visible": E || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0,
		"data-open": i.isOpen || void 0
	}), W.createElement(qc, {
		autoComplete: e.autoComplete,
		name: e.name,
		isDisabled: e.isDisabled,
		state: i
	}));
}), Q = s();
function id({ label: e, description: t, errorMessage: n, status: r, requiredLabel: i, optionalLabel: a, orientation: o = `vertical`, children: s, className: c, ...l }) {
	return (0, Q.jsxs)(ae, {
		...l,
		className: u(`flex min-w-0 flex-col gap-1.5`, c),
		children: [
			(0, Q.jsx)(le, {
				isRequired: l.isRequired,
				requiredLabel: i,
				optionalLabel: a,
				children: e
			}),
			(0, Q.jsx)(`div`, {
				className: u(`flex gap-x-5 gap-y-1`, o === `horizontal` ? `flex-row flex-wrap` : `flex-col`),
				children: s
			}),
			(0, Q.jsx)(ce, {
				description: t,
				status: r
			}),
			(0, Q.jsx)(ge, { children: n })
		]
	});
}
var ad = [`,`], od = (e) => e.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
function sd({ label: e, description: t, errorMessage: n, status: r, value: i, defaultValue: a, onChange: o, placeholder: s, removeLabel: c, separators: l = ad, duplicateMessage: d, maxChips: f, isRequired: p = !1, requiredLabel: m, isDisabled: h = !1, name: g, className: _ }) {
	let v = (0, W.useId)(), y = (0, W.useRef)(null), b = (0, W.useRef)(null), [x, S] = (0, W.useState)(a ?? []), [C, w] = (0, W.useState)(``), [T, E] = (0, W.useState)(null), D = i ?? x, k = (0, W.useMemo)(() => D.map((e) => ({ id: e })), [D]), A = n != null && n !== !1 && n !== ``, j = f !== void 0 && D.length >= f, M = (0, W.useMemo)(() => RegExp(`[${l.map(od).join(``)}\\n]`), [l]), N = (0, W.useCallback)((e) => {
		i === void 0 && S(e), o?.(e);
	}, [i, o]), P = (0, W.useCallback)((e) => {
		let t = [], n = null;
		for (let r of e) {
			let e = r.trim();
			e && (D.includes(e) || t.includes(e) ? n = e : t.push(e));
		}
		if (E(n), t.length === 0) return;
		let r = f === void 0 ? t.length : Math.max(0, f - D.length);
		N([...D, ...t.slice(0, r)]);
	}, [
		D,
		f,
		N
	]), F = (0, W.useCallback)((e) => {
		if (e.key === `Enter` || l.includes(e.key)) C.trim() ? (e.preventDefault(), P([C]), w(``)) : e.key !== `Enter` && e.preventDefault();
		else if (e.key === `Backspace` && C === `` && D.length > 0) {
			let e = b.current?.querySelectorAll(`[role="row"]`);
			e?.item(e.length - 1)?.focus();
		}
	}, [
		C,
		l,
		P,
		D.length
	]), I = (0, W.useCallback)((e) => {
		let t = e.clipboardData.getData(`text`);
		M.test(t) && (e.preventDefault(), P(t.split(M)));
	}, [M, P]), L = (0, W.useCallback)((e) => w(e.currentTarget.value), []), ee = (0, W.useCallback)(() => {
		C.trim() && (P([C]), w(``));
	}, [C, P]), R = (0, W.useCallback)((e) => {
		let t = D.filter((t) => !e.has(t));
		N(t), t.length === 0 && y.current?.focus();
	}, [D, N]), te = (0, W.useMemo)(() => T !== null && d ? {
		tone: `warn`,
		message: d(T)
	} : r, [
		T,
		d,
		r
	]), z = [
		A ? `${v}-error` : null,
		t ? `${v}-description` : null,
		te ? `${v}-status` : null
	].filter(Boolean).join(` `);
	return (0, Q.jsxs)(`div`, {
		className: u(`group/field`, he, _),
		"data-disabled": h || void 0,
		children: [
			(0, Q.jsxs)(`label`, {
				id: `${v}-label`,
				htmlFor: `${v}-input`,
				className: `w-fit text-caption font-medium text-fg`,
				children: [e, (0, Q.jsx)(U, {
					isRequired: p,
					requiredLabel: m
				})]
			}),
			(0, Q.jsxs)(`div`, {
				ref: b,
				className: u(pe, `h-auto! min-h-control-md flex-wrap gap-1 p-1`, A && `border-danger`, h && `cursor-not-allowed border-border bg-sunken text-muted`),
				children: [D.length > 0 ? (0, Q.jsx)(_e, {
					"aria-labelledby": `${v}-label`,
					onRemove: R,
					...h ? { disabledKeys: D } : {},
					className: `max-w-full min-w-0`,
					children: (0, Q.jsx)(ve, {
						items: k,
						className: `flex flex-wrap gap-1`,
						children: (e) => (0, Q.jsxs)(ye, {
							id: e.id,
							textValue: e.id,
							className: `inline-flex h-7 max-w-full min-w-0 cursor-default items-center gap-0.5 rounded-full border border-transparent bg-accent-soft pr-0.5 pl-2.5 text-caption font-medium text-accent-text outline-none data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-focus-visible:outline-solid data-disabled:opacity-60 forced-colors:border-[CanvasText]`,
							children: [(0, Q.jsx)(`span`, {
								className: `truncate`,
								children: e.id
							}), (0, Q.jsx)(V, {
								slot: `remove`,
								...c ? { "aria-label": c } : {},
								className: `grid size-6 shrink-0 cursor-default place-items-center rounded-full outline-none data-hovered:bg-accent/15 data-pressed:bg-accent/25 data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-focus-visible:outline-solid`,
								children: (0, Q.jsx)(O, {
									name: `action.close`,
									"aria-hidden": `true`,
									className: `size-3.5`
								})
							})]
						})
					})
				}) : null, (0, Q.jsx)(`input`, {
					ref: y,
					id: `${v}-input`,
					value: C,
					disabled: h || j,
					...s === void 0 ? {} : { placeholder: s },
					...z ? { "aria-describedby": z } : {},
					...A ? { "aria-invalid": !0 } : {},
					...p ? { "aria-required": !0 } : {},
					onChange: L,
					onKeyDown: F,
					onPaste: I,
					onBlur: ee,
					className: u(oe, `h-7 min-w-24 px-1.5`)
				})]
			}),
			g ? D.map((e) => (0, Q.jsx)(`input`, {
				type: `hidden`,
				name: g,
				value: e
			}, e)) : null,
			t ? (0, Q.jsx)(`p`, {
				id: `${v}-description`,
				className: `text-caption break-words text-muted`,
				children: t
			}) : null,
			te ? (0, Q.jsx)(`output`, {
				id: `${v}-status`,
				className: `block text-caption`,
				children: (0, Q.jsx)(de, { status: te })
			}) : null,
			A ? (0, Q.jsxs)(`p`, {
				id: `${v}-error`,
				className: `flex items-start gap-1.5 text-caption font-medium break-words text-danger`,
				children: [(0, Q.jsx)(O, {
					name: `status.error`,
					"aria-hidden": `true`,
					className: `mt-px size-3.5 shrink-0`
				}), (0, Q.jsx)(`span`, {
					className: `min-w-0`,
					children: n
				})]
			}) : null
		]
	});
}
var cd = `size-5 rounded-full border-2 border-surface shadow-md ring-1 ring-fg data-dragging:size-6 data-focus-visible:size-6 data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-offset-1 data-focus-visible:outline-focus data-focus-visible:outline-solid forced-color-adjust-none`;
function ld({ label: e, description: t, errorMessage: n, status: r, requiredLabel: i, optionalLabel: a, value: o, defaultValue: s, onChange: c, pickerLabel: l, areaLabel: f, hueLabel: p, swatches: m, swatchesLabel: h, container: g, className: _, ...v }) {
	let y = (0, W.useCallback)((e) => c?.(e.toString(`hex`)), [c]);
	return (0, Q.jsx)(Uc, {
		...o === void 0 ? {} : { value: o },
		...s === void 0 ? {} : { defaultValue: s },
		onChange: y,
		children: (0, Q.jsxs)(xc, {
			...v,
			className: u(he, _),
			children: [
				(0, Q.jsx)(le, {
					isRequired: v.isRequired,
					requiredLabel: i,
					optionalLabel: a,
					children: e
				}),
				(0, Q.jsxs)(`div`, {
					className: `flex min-w-0 items-center gap-2`,
					children: [(0, Q.jsxs)(ut, { children: [(0, Q.jsx)(V, {
						"aria-label": l,
						className: `grid size-control-md shrink-0 cursor-default place-items-center rounded-md border border-border-strong bg-input transition-colors data-hovered:border-muted data-pressed:bg-hover data-disabled:cursor-not-allowed data-disabled:opacity-50`,
						children: (0, Q.jsx)(Nc, { className: `size-5 rounded-sm border border-border-strong forced-color-adjust-none` })
					}), (0, Q.jsx)(dt, {
						...g ? { UNSTABLE_portalContainer: g } : {},
						offset: 6,
						className: u(me, `p-3`),
						children: (0, Q.jsxs)(ct, {
							"aria-label": l,
							className: `flex w-56 max-w-full flex-col gap-3 outline-none`,
							children: [
								(0, Q.jsx)(sc, {
									colorSpace: `hsb`,
									xChannel: `saturation`,
									yChannel: `brightness`,
									...f ? { "aria-label": f } : {},
									className: `aspect-square w-full shrink-0 rounded-md border border-border forced-color-adjust-none`,
									children: (0, Q.jsx)(uo, { className: cd })
								}),
								(0, Q.jsxs)(kc, {
									colorSpace: `hsb`,
									channel: `hue`,
									className: `flex flex-col gap-1.5`,
									children: [(0, Q.jsxs)(`div`, {
										className: `flex items-baseline justify-between gap-2 text-caption`,
										children: [(0, Q.jsx)(d, {
											className: `font-medium text-fg`,
											children: p
										}), (0, Q.jsx)(qe, { className: `text-muted tabular-nums` })]
									}), (0, Q.jsx)(Ze, {
										className: `h-6 w-full rounded-md border border-border forced-color-adjust-none`,
										children: (0, Q.jsx)(uo, { className: u(cd, `top-1/2`) })
									})]
								}),
								m && m.length > 0 ? (0, Q.jsx)(Rc, {
									"aria-label": h,
									className: `flex flex-wrap gap-1.5`,
									children: m.map((e) => (0, Q.jsx)(zc, {
										color: e,
										className: u(`relative size-7 cursor-default rounded-md p-0.5 data-selected:ring-2 data-selected:ring-fg data-selected:ring-offset-1 data-selected:ring-offset-surface`, fe),
										children: (0, Q.jsx)(Nc, { className: `size-full rounded-sm border border-border forced-color-adjust-none` })
									}, e))
								}) : null
							]
						})
					})] }), (0, Q.jsx)(Ne, { className: u(ue, `font-mono uppercase`) })]
				}),
				(0, Q.jsx)(ce, {
					description: t,
					status: r
				}),
				(0, Q.jsx)(ge, { children: n })
			]
		})
	});
}
function ud({ calendarLabel: e }) {
	return (0, Q.jsxs)(je, {
		className: `group/date flex h-control-md w-full min-w-0 items-center rounded-md border border-border-strong bg-input pl-2.5 text-fg transition-colors data-hovered:border-muted data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-offset-(--sk-focus-offset) data-focus-visible:outline-focus data-focus-visible:outline-solid data-invalid:border-danger data-disabled:cursor-not-allowed data-disabled:border-border data-disabled:bg-sunken data-disabled:text-muted`,
		children: [(0, Q.jsx)(qu, {
			className: `flex min-w-0 flex-1 items-center overflow-x-auto text-base whitespace-nowrap tabular-nums sm:text-body`,
			children: (e) => (0, Q.jsx)(Xu, {
				segment: e,
				className: `inline-flex min-h-6 min-w-6 items-center justify-center rounded-sm px-px caret-transparent outline-none data-[type=literal]:min-w-0 data-focused:bg-accent data-focused:text-accent-fg data-placeholder:text-muted data-[type=literal]:px-0 data-[type=literal]:text-muted forced-colors:data-focused:bg-[Highlight] forced-colors:data-focused:text-[HighlightText]`
			})
		}), (0, Q.jsx)(V, {
			...e ? { "aria-label": e } : {},
			className: u(se, `mr-1 size-7`),
			children: (0, Q.jsx)(O, {
				name: `time.calendar`,
				"aria-hidden": `true`,
				className: `size-4`
			})
		})]
	});
}
var dd = `grid size-9 cursor-default place-items-center rounded-md text-body text-fg tabular-nums outline-none data-hovered:bg-hover data-pressed:bg-selected data-outside-month:hidden data-today:font-semibold data-today:underline data-today:underline-offset-4 data-selected:bg-accent data-selected:text-accent-fg data-unavailable:text-muted data-unavailable:line-through data-disabled:text-muted data-disabled:opacity-60 data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-offset-1 data-focus-visible:outline-focus data-focus-visible:outline-solid forced-colors:data-selected:bg-[Highlight] forced-colors:data-selected:text-[HighlightText]`;
function fd({ previousMonthLabel: e, nextMonthLabel: t, container: n }) {
	return (0, Q.jsx)(dt, {
		...n ? { UNSTABLE_portalContainer: n } : {},
		offset: 6,
		className: u(me, `p-3`),
		children: (0, Q.jsx)(ct, {
			className: `outline-none`,
			children: (0, Q.jsxs)($a, {
				className: `w-fit`,
				children: [(0, Q.jsxs)(`header`, {
					className: `mb-2 flex items-center gap-1`,
					children: [
						(0, Q.jsx)(V, {
							slot: `previous`,
							...e ? { "aria-label": e } : {},
							className: u(se, `size-8`),
							children: (0, Q.jsx)(O, {
								name: `chevron.left`,
								"aria-hidden": `true`,
								className: `size-4 rtl:rotate-180`
							})
						}),
						(0, Q.jsx)(ft, { className: `flex-1 text-center text-body font-semibold` }),
						(0, Q.jsx)(V, {
							slot: `next`,
							...t ? { "aria-label": t } : {},
							className: u(se, `size-8`),
							children: (0, Q.jsx)(O, {
								name: `chevron.right`,
								"aria-hidden": `true`,
								className: `size-4 rtl:rotate-180`
							})
						})
					]
				}), (0, Q.jsxs)(to, {
					className: `border-separate border-spacing-0.5`,
					children: [(0, Q.jsx)(ro, { children: (e) => (0, Q.jsx)(ao, {
						className: `size-9 text-caption font-medium text-muted`,
						children: e
					}) }), (0, Q.jsx)(so, { children: (e) => (0, Q.jsx)(co, {
						date: e,
						className: dd
					}) })]
				})]
			})
		})
	});
}
function pd({ label: e, description: t, errorMessage: n, status: r, requiredLabel: i, optionalLabel: a, calendarLabel: o, previousMonthLabel: s, nextMonthLabel: c, container: l, className: d, ...f }) {
	return (0, Q.jsxs)(rd, {
		granularity: `day`,
		...f,
		className: u(he, d),
		children: [
			(0, Q.jsx)(le, {
				isRequired: f.isRequired,
				requiredLabel: i,
				optionalLabel: a,
				children: e
			}),
			(0, Q.jsx)(ud, { calendarLabel: o }),
			(0, Q.jsx)(ce, {
				description: t,
				status: r
			}),
			(0, Q.jsx)(ge, { children: n }),
			(0, Q.jsx)(fd, {
				previousMonthLabel: s,
				nextMonthLabel: c,
				container: l
			})
		]
	});
}
function md({ label: e, description: t, errorMessage: n, status: r, requiredLabel: i, optionalLabel: a, calendarLabel: o, previousMonthLabel: s, nextMonthLabel: c, container: l, className: d, ...f }) {
	return (0, Q.jsxs)(rd, {
		granularity: `minute`,
		shouldCloseOnSelect: !1,
		...f,
		className: u(he, d),
		children: [
			(0, Q.jsx)(le, {
				isRequired: f.isRequired,
				requiredLabel: i,
				optionalLabel: a,
				children: e
			}),
			(0, Q.jsx)(ud, { calendarLabel: o }),
			(0, Q.jsx)(ce, {
				description: t,
				status: r
			}),
			(0, Q.jsx)(ge, { children: n }),
			(0, Q.jsx)(fd, {
				previousMonthLabel: s,
				nextMonthLabel: c,
				container: l
			})
		]
	});
}
function hd({ label: e, description: t, errorMessage: n, status: r, isRequired: i = !1, requiredLabel: a, optionalLabel: o, labelAside: s, controlId: c, className: l, children: d, ...f }) {
	let p = (0, W.useId)(), m = c ?? `${p}-control`, h = `${p}-description`, g = `${p}-status`, _ = `${p}-error`, v = n != null && n !== !1 && n !== ``, y = [
		v ? _ : null,
		t ? h : null,
		r ? g : null
	].filter(Boolean).join(` `), b = {
		id: m,
		...y ? { "aria-describedby": y } : {},
		...v ? { "aria-invalid": !0 } : {},
		...i ? { "aria-required": !0 } : {}
	};
	return (0, Q.jsxs)(`div`, {
		...f,
		"data-invalid": v || void 0,
		className: u(he, l),
		children: [
			(0, Q.jsxs)(`div`, {
				className: `flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5`,
				children: [(0, Q.jsxs)(`label`, {
					htmlFor: m,
					className: `text-caption font-medium text-fg`,
					children: [(0, Q.jsx)(`span`, { children: e }), (0, Q.jsx)(U, {
						isRequired: i,
						requiredLabel: a,
						optionalLabel: o
					})]
				}), s ? (0, Q.jsx)(`span`, {
					className: `text-caption text-muted`,
					children: s
				}) : null]
			}),
			d(b),
			t ? (0, Q.jsx)(`p`, {
				id: h,
				className: `text-caption break-words text-muted`,
				children: t
			}) : null,
			r ? (0, Q.jsx)(`output`, {
				id: g,
				className: `block text-caption`,
				children: (0, Q.jsx)(de, { status: r })
			}) : null,
			v ? (0, Q.jsxs)(`p`, {
				id: _,
				className: `flex items-start gap-1.5 text-caption font-medium break-words text-danger`,
				children: [(0, Q.jsx)(O, {
					name: `status.error`,
					"aria-hidden": `true`,
					className: `mt-px size-3.5 shrink-0`
				}), (0, Q.jsx)(`span`, {
					className: `min-w-0`,
					children: n
				})]
			}) : null
		]
	});
}
function gd(e, t) {
	if (!t || t.length === 0) return !0;
	let n = e.name.toLowerCase();
	return t.some((t) => {
		let r = t.trim().toLowerCase();
		return r.startsWith(`.`) ? n.endsWith(r) : r.endsWith(`/*`) ? e.type.startsWith(r.slice(0, -1)) : e.type === r;
	});
}
var _d = () => `copy`;
function vd({ label: e, buttonLabel: t, dropLabel: n, removeLabel: r, description: i, errorMessage: a, status: o, acceptedFileTypes: s, allowsMultiple: c = !1, maxFileSize: l, rejectedMessage: d, formatCount: f, files: p, defaultFiles: m, onChange: h, isRequired: g = !1, requiredLabel: _, isDisabled: v = !1, className: y }) {
	let b = (0, W.useId)(), { locale: x } = B(), [S, C] = (0, W.useState)(m ?? []), [w, T] = (0, W.useState)([]), E = p ?? S, D = a != null && a !== !1 && a !== ``, k = (0, W.useMemo)(() => ({
		kb: new Intl.NumberFormat(x, {
			style: `unit`,
			unit: `kilobyte`,
			maximumFractionDigits: 0
		}),
		mb: new Intl.NumberFormat(x, {
			style: `unit`,
			unit: `megabyte`,
			maximumFractionDigits: 1
		})
	}), [x]), A = (e) => e >= 1e6 ? k.mb.format(e / 1e6) : k.kb.format(Math.max(1, Math.round(e / 1e3))), j = (0, W.useCallback)((e) => {
		p === void 0 && C(e), h?.(e);
	}, [p, h]), M = (0, W.useCallback)((e) => {
		let t = e.filter((e) => gd(e, s) && (l === void 0 || e.size <= l));
		T(e.filter((e) => !t.includes(e))), t.length !== 0 && j(c ? [...E, ...t] : t.slice(0, 1));
	}, [
		s,
		l,
		c,
		E,
		j
	]), N = (0, W.useCallback)((e) => M(e ? Array.from(e) : []), [M]), P = (0, W.useCallback)(async (e) => {
		let t = await Promise.all(e.items.filter(Tt).map((e) => e.getFile()));
		M(t);
	}, [M]), F = (0, W.useCallback)((e) => {
		j(E.filter((t, n) => n !== e));
	}, [E, j]), I = [D ? `${b}-error` : null, i ? `${b}-description` : null].filter(Boolean).join(` `) || void 0, L = (0, W.useMemo)(() => w.length > 0 && d ? {
		tone: `warn`,
		message: d(w)
	} : o, [
		w,
		d,
		o
	]);
	return (0, Q.jsxs)(`fieldset`, {
		className: u(`m-0 flex min-w-0 flex-col gap-1.5 border-0 p-0`, y),
		children: [
			(0, Q.jsxs)(`legend`, {
				className: `mb-1.5 p-0 text-caption font-medium text-fg`,
				children: [e, (0, Q.jsx)(U, {
					isRequired: g,
					requiredLabel: _
				})]
			}),
			(0, Q.jsxs)(Ct, {
				"aria-label": n,
				isDisabled: v,
				getDropOperation: _d,
				onDrop: P,
				className: u(`flex min-w-0 flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border-strong bg-sunken px-4 py-5 text-center transition-colors sm:flex-row sm:gap-3`, `data-hovered:border-muted data-drop-target:border-solid data-drop-target:border-accent data-drop-target:bg-accent-soft data-disabled:cursor-not-allowed data-disabled:opacity-60`, D && `border-danger`, fe),
				children: [
					(0, Q.jsx)(O, {
						name: `action.upload`,
						"aria-hidden": `true`,
						className: `size-5 shrink-0 text-muted`
					}),
					(0, Q.jsx)(wt, {
						onSelect: N,
						allowsMultiple: c,
						...s ? { acceptedFileTypes: s } : {},
						children: (0, Q.jsx)(V, {
							isDisabled: v,
							...I ? { "aria-describedby": I } : {},
							className: `inline-flex h-control-md items-center rounded-md border border-border-strong bg-surface px-3 text-body font-medium text-fg transition-colors data-hovered:bg-hover data-pressed:bg-selected data-disabled:cursor-not-allowed data-disabled:opacity-50`,
							children: t
						})
					}),
					(0, Q.jsx)(`span`, {
						className: `text-caption break-words text-muted`,
						children: n
					})
				]
			}),
			i ? (0, Q.jsx)(`p`, {
				id: `${b}-description`,
				className: `text-caption break-words text-muted`,
				children: i
			}) : null,
			L ? (0, Q.jsx)(`output`, {
				className: `block text-caption`,
				children: (0, Q.jsx)(de, { status: L })
			}) : null,
			D ? (0, Q.jsxs)(`p`, {
				id: `${b}-error`,
				className: `flex items-start gap-1.5 text-caption font-medium break-words text-danger`,
				children: [(0, Q.jsx)(O, {
					name: `status.error`,
					"aria-hidden": `true`,
					className: `mt-px size-3.5 shrink-0`
				}), (0, Q.jsx)(`span`, {
					className: `min-w-0`,
					children: a
				})]
			}) : null,
			E.length > 0 ? (0, Q.jsx)(`ul`, {
				className: `flex flex-col divide-y divide-border rounded-md border border-border bg-surface`,
				children: E.map((e, t) => (0, Q.jsx)(yd, {
					file: e,
					index: t,
					size: A(e.size),
					removeLabel: r(e),
					onRemove: F,
					isDisabled: v
				}, `${e.name}-${e.size}-${e.lastModified}`))
			}) : null,
			f ? (0, Q.jsx)(`output`, {
				className: `block text-caption text-muted`,
				children: f(E.length)
			}) : null
		]
	});
}
function yd({ file: e, index: t, size: n, removeLabel: r, isDisabled: i, onRemove: a }) {
	let o = (0, W.useCallback)(() => a(t), [a, t]);
	return (0, Q.jsxs)(`li`, {
		className: `flex min-w-0 items-center gap-2.5 px-3 py-2`,
		children: [
			(0, Q.jsx)(O, {
				name: `file.document`,
				"aria-hidden": `true`,
				className: `size-4 shrink-0 text-muted`
			}),
			(0, Q.jsx)(`span`, {
				className: `min-w-0 flex-1 truncate text-body text-fg`,
				title: e.name,
				children: e.name
			}),
			(0, Q.jsx)(`span`, {
				className: `shrink-0 text-caption text-muted tabular-nums`,
				children: n
			}),
			(0, Q.jsx)(V, {
				"aria-label": r,
				isDisabled: i,
				onPress: o,
				className: se,
				children: (0, Q.jsx)(O, {
					name: `action.close`,
					"aria-hidden": `true`,
					className: `size-4`
				})
			})
		]
	});
}
function bd({ label: e, description: t, errorMessage: n, status: r, requiredLabel: i, optionalLabel: a, icon: o, end: s, placeholder: c, className: l, ...d }) {
	return (0, Q.jsxs)(At, {
		...d,
		className: u(`group/field`, he, l),
		children: [
			(0, Q.jsx)(le, {
				isRequired: d.isRequired,
				requiredLabel: i,
				optionalLabel: a,
				children: e
			}),
			(0, Q.jsxs)(`div`, {
				className: u(pe, `group-data-disabled/field:cursor-not-allowed group-data-disabled/field:bg-sunken group-data-invalid/field:border-danger`),
				children: [
					(0, Q.jsx)(`span`, {
						"aria-hidden": `true`,
						className: `ml-2.5 flex shrink-0 text-muted [&>svg]:size-4`,
						children: o
					}),
					(0, Q.jsx)(Ne, {
						...c === void 0 ? {} : { placeholder: c },
						className: u(oe, `pl-2`)
					}),
					s ? (0, Q.jsx)(`span`, {
						className: `flex shrink-0 items-center pr-2.5 text-body text-muted`,
						children: s
					}) : null
				]
			}),
			(0, Q.jsx)(ce, {
				description: t,
				status: r
			}),
			(0, Q.jsx)(ge, { children: n })
		]
	});
}
function xd({ label: e, description: t, errorMessage: n, status: r, requiredLabel: i, optionalLabel: a, items: o, placeholder: s, formatSelection: c, emptyLabel: l, container: d, className: f, ...p }) {
	let m = (0, W.useCallback)(({ isPlaceholder: e, selectedItems: t }) => {
		if (e) return s ?? ``;
		let n = t.flatMap((e) => e ? [e.label] : []);
		return (0, Q.jsx)(`span`, {
			className: `truncate`,
			children: c ? c(n) : n.join(`, `)
		});
	}, [s, c]), h = (0, W.useCallback)(() => (0, Q.jsx)(`p`, {
		className: `px-2 py-3 text-body text-muted`,
		children: l
	}), [l]);
	return (0, Q.jsxs)(jt, {
		...p,
		...l ? { allowsEmptyCollection: !0 } : {},
		selectionMode: `multiple`,
		className: u(`group/field`, he, f),
		children: [
			(0, Q.jsx)(le, {
				isRequired: p.isRequired,
				requiredLabel: i,
				optionalLabel: a,
				children: e
			}),
			(0, Q.jsxs)(V, {
				className: Nt,
				children: [(0, Q.jsx)(Mt, {
					className: `flex min-w-0 flex-1 items-center gap-2 truncate data-placeholder:text-muted`,
					children: m
				}), (0, Q.jsx)(O, {
					name: `chevron.down`,
					"aria-hidden": `true`,
					className: `size-4 shrink-0 text-muted`
				})]
			}),
			(0, Q.jsx)(ce, {
				description: t,
				status: r
			}),
			(0, Q.jsx)(ge, { children: n }),
			(0, Q.jsx)(dt, {
				...d ? { UNSTABLE_portalContainer: d } : {},
				offset: 4,
				className: u(me, `min-w-(--trigger-width) p-1`),
				children: (0, Q.jsx)(at, {
					items: o,
					...l ? { renderEmptyState: h } : {},
					className: `max-h-[inherit] outline-none`,
					children: (e) => (0, Q.jsx)(Pt, {
						item: e,
						multiple: !0
					})
				})
			})
		]
	});
}
function Sd({ title: e, description: t, children: n, className: r, ...i }) {
	let a = (0, W.useId)(), o = {
		"aria-labelledby": `${a}-title`,
		...t ? { "aria-describedby": `${a}-description` } : {}
	};
	return (0, Q.jsxs)(`div`, {
		...i,
		className: u(`flex min-w-0 flex-col gap-3 border-b border-border py-3 last:border-b-0 sm:flex-row sm:items-center sm:gap-4`, r),
		children: [(0, Q.jsxs)(`div`, {
			className: `min-w-0 flex-1`,
			children: [(0, Q.jsx)(`p`, {
				id: `${a}-title`,
				className: `text-body font-semibold break-words text-fg`,
				children: e
			}), t ? (0, Q.jsx)(`p`, {
				id: `${a}-description`,
				className: `mt-0.5 text-caption/relaxed break-words text-muted`,
				children: t
			}) : null]
		}), (0, Q.jsx)(`div`, {
			className: `flex min-w-0 shrink-0 flex-wrap items-center gap-2`,
			children: typeof n == `function` ? n(o) : n
		})]
	});
}
function Cd({ title: e, description: t, className: n, ...r }) {
	return (0, Q.jsxs)(Ht, {
		...r,
		className: u(`flex min-w-0 flex-col gap-0.5 border-b border-border py-3 last:border-b-0`, n),
		children: [(0, Q.jsxs)(Vt, {
			className: `group flex min-h-6 w-full cursor-default items-center justify-between gap-4 text-left text-body font-semibold text-fg data-disabled:cursor-not-allowed data-disabled:text-muted`,
			children: [(0, Q.jsx)(`span`, {
				className: `min-w-0 break-words`,
				children: e
			}), (0, Q.jsx)(Rt, {})]
		}), t ? (0, Q.jsx)(Fe, {
			slot: `description`,
			className: `pr-13 text-caption/relaxed break-words text-muted`,
			children: t
		}) : null]
	});
}
var wd = e({ default: () => jd });
function Td({ children: e }) {
	let [t, n] = (0, W.useState)(null);
	return (0, Q.jsx)(`div`, {
		ref: n,
		children: e(t)
	});
}
var $ = `flex max-w-sm min-w-0 flex-col gap-4`, Ed = [
	{
		id: `low`,
		label: `Low`
	},
	{
		id: `normal`,
		label: `Normal`
	},
	{
		id: `high`,
		label: `High`,
		description: `Shown at the top of the board`
	},
	{
		id: `urgent`,
		label: `Urgent`,
		description: `Notifies the whole team`,
		isDisabled: !0
	}
], Dd = [
	{
		id: `bug`,
		label: `Bug`
	},
	{
		id: `design`,
		label: `Design`
	},
	{
		id: `docs`,
		label: `Documentation`
	},
	{
		id: `performance`,
		label: `Performance`
	},
	{
		id: `security`,
		label: `Security`
	}
];
function Od() {
	let e = (0, W.useId)(), [t, n] = (0, W.useState)(!0), r = t ? [{
		fieldId: `${e}-title`,
		message: `Enter a title`
	}, {
		fieldId: `${e}-email`,
		message: `Enter an email address like name@example.com`
	}] : [];
	return (0, Q.jsxs)(`div`, {
		className: $,
		children: [
			(0, Q.jsx)(Dt, {
				title: `There are 2 problems with this form`,
				errors: r,
				autoFocus: !1,
				headingLevel: 4
			}),
			(0, Q.jsx)(kt, {
				id: `${e}-title`,
				label: `Title`,
				isRequired: !0,
				isInvalid: t,
				errorMessage: `Enter a title`
			}),
			(0, Q.jsx)(kt, {
				id: `${e}-email`,
				label: `Email`,
				type: `email`,
				isInvalid: t,
				errorMessage: `Enter an email address like name@example.com`,
				defaultValue: `dawid@`
			}),
			(0, Q.jsx)(ie, {
				variant: `outline`,
				onPress: () => n((e) => !e),
				children: t ? `Clear the errors` : `Submit with errors`
			})
		]
	});
}
var kd = [new File([`x`.repeat(48e3)], `brief.pdf`, { type: `application/pdf` })];
function Ad() {
	let [e, t] = (0, W.useState)(null);
	return (0, Q.jsxs)(`div`, {
		className: `flex flex-col gap-6`,
		children: [(0, Q.jsxs)(Et, {
			status: e,
			children: [(0, Q.jsx)(ie, {
				variant: `outline`,
				onPress: () => t({
					tone: `danger`,
					message: `Could not save. Check your connection and try again.`
				}),
				children: `Fail`
			}), (0, Q.jsx)(ie, {
				onPress: () => t({
					tone: `ok`,
					message: `Saved at 14:02`
				}),
				children: `Save changes`
			})]
		}), (0, Q.jsxs)(Et, {
			status: {
				tone: `warn`,
				message: `You have unsaved changes`
			},
			align: `between`,
			children: [(0, Q.jsx)(ie, {
				variant: `ghost`,
				children: `Discard`
			}), (0, Q.jsx)(ie, { children: `Save` })]
		})]
	});
}
var jd = {
	title: `Forms`,
	description: `Fields with one look and one message system: a label with a required or optional mark, help text, a status in the ok, info or warn tone, and an error with an icon. Every message is linked to its control, errors set aria-invalid, and a summary links to the fields after a failed submit. Built to WCAG 2.2 AA, from 320px up.`,
	pl: {
		title: `Formularze`,
		description: `Pola z jednym wyglądem i jednym systemem komunikatów: etykieta ze znakiem wymagane lub opcjonalne, tekst pomocy, status w tonie ok, info lub warn oraz błąd z ikoną. Każdy komunikat jest powiązany ze swoją kontrolką, błędy ustawiają aria-invalid, a po nieudanym wysłaniu podsumowanie linkuje do pól. Budowane z celem WCAG 2.2 AA, od 320 px.`
	},
	demos: [
		{
			name: `Field`,
			components: [`Field`],
			description: `Label, help, status and error around a control that is not one of this group, such as a native element or a widget from another library. Pick a ready field such as TextField when one fits.`,
			usage: `<Field label="Website" description="Shown on your profile." errorMessage={error}>
  {(control) => <input {...control} type="url" className="…" />}
</Field>`,
			accessibility: `The render function gets id, aria-describedby, aria-invalid and aria-required, so the label names the control and the help, status and error are read after it. The asterisk is hidden from screen readers, which hear "required" from aria-required. The status is an output element, a polite live region.`,
			pl: {
				description: `Etykieta, pomoc, status i błąd wokół kontrolki, która nie należy do tej grupy, takiej jak natywny element albo widżet z innej biblioteki. Wybierz gotowe pole, takie jak TextField, gdy któreś pasuje.`,
				accessibility: `Funkcja renderująca dostaje id, aria-describedby, aria-invalid i aria-required, więc etykieta nazywa kontrolkę, a pomoc, status i błąd są odczytywane po niej. Gwiazdka jest ukryta przed czytnikami ekranu, które słyszą „wymagane” z aria-required. Status jest elementem output, czyli regionem na żywo typu polite.`
			},
			render: () => (0, Q.jsxs)(`div`, {
				className: $,
				children: [
					(0, Q.jsx)(hd, {
						label: `Website`,
						labelAside: `Optional link`,
						description: `Shown on your public profile.`,
						children: (e) => (0, Q.jsx)(`input`, {
							...e,
							type: `url`,
							placeholder: `https://`,
							className: ue
						})
					}),
					(0, Q.jsx)(hd, {
						label: `Handle`,
						isRequired: !0,
						status: {
							tone: `ok`,
							message: `This handle is free`
						},
						children: (e) => (0, Q.jsx)(`input`, {
							...e,
							defaultValue: `dawid`,
							className: ue
						})
					}),
					(0, Q.jsx)(hd, {
						label: `Project key`,
						isRequired: !0,
						requiredLabel: `required`,
						errorMessage: `Use 2 to 6 capital letters, such as WEB.`,
						children: (e) => (0, Q.jsx)(`input`, {
							...e,
							defaultValue: `web-1`,
							className: ue
						})
					})
				]
			})
		},
		{
			name: `FormErrorSummary`,
			components: [`FormErrorSummary`],
			description: `The list of problems after a submit fails, placed at the top of the form. Use it with inline errors on each field, never instead of them.`,
			usage: `<FormErrorSummary
  title="There are 2 problems with this form"
  errors={[{ fieldId: 'title', message: 'Enter a title' }]}
/>`,
			accessibility: `It is an assertive alert and takes focus when it appears, so keyboard and screen reader users land on it after submitting. Each item is a link that moves focus to its field and scrolls it into view. The heading level is a prop, to fit the page outline. The demo keeps autoFocus off, so the gallery does not jump.`,
			pl: {
				description: `Lista problemów po nieudanym wysłaniu, umieszczona na górze formularza. Używaj jej razem z błędami przy każdym polu, nigdy zamiast nich.`,
				accessibility: `Jest komunikatem typu assertive i przejmuje fokus, gdy się pojawi, więc użytkownicy klawiatury i czytników ekranu trafiają na nią po wysłaniu. Każda pozycja jest linkiem, który przenosi fokus do swojego pola i przewija je do widoku. Poziom nagłówka jest propem, aby pasował do struktury strony. Przykład ma wyłączone autoFocus, aby galeria nie skakała.`
			},
			render: () => (0, Q.jsx)(Od, {})
		},
		{
			name: `Input`,
			components: [`Input`],
			description: `The bare text box, for building a field from React Aria parts or for a Field around it. Most forms want TextField, which includes the label.`,
			usage: `<Field label="Domain">{(control) => <Input {...control} />}</Field>`,
			accessibility: `On its own it has no name: put it in a Field, a React Aria field, or give it an aria-label. Text is 16px under the sm breakpoint so iOS does not zoom in. The focus ring comes from the page defaults and stays visible in forced colours.`,
			pl: {
				description: `Samo pole tekstowe, do budowania pola z części React Aria albo dla Field wokół niego. Większość formularzy potrzebuje TextField, który zawiera etykietę.`,
				accessibility: `Samo nie ma nazwy: umieść je w Field, w polu React Aria albo nadaj mu aria-label. Tekst ma 16 px poniżej breakpointu sm, aby iOS nie powiększał widoku. Obwódka fokusa pochodzi z domyślnych stylów strony i pozostaje widoczna w trybie wymuszonych kolorów.`
			},
			render: () => (0, Q.jsxs)(`div`, {
				className: $,
				children: [
					(0, Q.jsx)(hd, {
						label: `Domain`,
						description: `Without https://`,
						children: (e) => (0, Q.jsx)(Ot, {
							...e,
							placeholder: `docs.example.com`
						})
					}),
					(0, Q.jsx)(hd, {
						label: `Read only`,
						children: (e) => (0, Q.jsx)(Ot, {
							...e,
							readOnly: !0,
							value: `Fixed by your workspace`
						})
					}),
					(0, Q.jsx)(hd, {
						label: `Disabled`,
						children: (e) => (0, Q.jsx)(Ot, {
							...e,
							disabled: !0,
							value: `Not available`
						})
					})
				]
			})
		},
		{
			name: `TextField`,
			components: [`TextField`],
			description: `A labelled single-line field: names, titles, emails, URLs. It shows the four message tones: help in muted text, ok, info and warn with an icon, and the error.`,
			usage: `<TextField label="Email" type="email" isRequired
  errorMessage="Enter an email address like name@example.com" />`,
			accessibility: `The label, description, status and error are linked by React Aria; an invalid field sets aria-invalid and lists the error first. With isRequired and native validation the browser message shows on submit. Long words in messages wrap instead of overflowing.`,
			pl: {
				description: `Jednoliniowe pole z etykietą: imiona, tytuły, e-maile, adresy URL. Pokazuje cztery tony komunikatów: pomoc wyciszonym tekstem, ok, info i warn z ikoną oraz błąd.`,
				accessibility: `Etykieta, opis, status i błąd są powiązane przez React Aria; niepoprawne pole ustawia aria-invalid i wymienia błąd jako pierwszy. Z isRequired i natywną walidacją komunikat przeglądarki pokazuje się przy wysłaniu. Długie słowa w komunikatach się zawijają zamiast się przepełniać.`
			},
			render: () => (0, Q.jsxs)(`div`, {
				className: $,
				children: [
					(0, Q.jsx)(kt, {
						label: `Name`,
						description: `Shown to your team.`,
						placeholder: `Ada Lovelace`
					}),
					(0, Q.jsx)(kt, {
						label: `Email`,
						type: `email`,
						isRequired: !0,
						isInvalid: !0,
						errorMessage: `Enter an email address like name@example.com`,
						defaultValue: `dawid@`
					}),
					(0, Q.jsx)(kt, {
						label: `Username`,
						defaultValue: `dawid`,
						status: {
							tone: `ok`,
							message: `This username is free`
						}
					}),
					(0, Q.jsx)(kt, {
						label: `Address`,
						defaultValue: `team@example.com`,
						status: {
							tone: `warn`,
							message: `Everyone in this group will get replies`
						}
					}),
					(0, Q.jsx)(kt, {
						label: `Phone`,
						optionalLabel: `(optional)`,
						status: {
							tone: `info`,
							message: `Used only for sign-in codes`
						}
					}),
					(0, Q.jsx)(kt, {
						label: `Workspace`,
						isDisabled: !0,
						defaultValue: `Skribly`
					})
				]
			})
		},
		{
			name: `Textarea`,
			components: [`Textarea`],
			description: `Multi-line text, such as a description or a note. Turn on monospace for Markdown or code, and add a counter when there is a limit.`,
			usage: "<Textarea label=\"Description\" maxLength={280}\n  formatCount={(count, max) => `${count} / ${max}`} />",
			accessibility: `The counter sits in the description, so it is read when the field gets focus rather than on every key. Resize stays vertical so the page never scrolls sideways.`,
			pl: {
				description: `Tekst wieloliniowy, taki jak opis albo notatka. Włącz monospace dla Markdowna albo kodu i dodaj licznik, gdy jest limit.`,
				accessibility: `Licznik jest w opisie, więc jest odczytywany, gdy pole dostaje fokus, a nie przy każdym klawiszu. Zmiana rozmiaru zostaje pionowa, aby strona nigdy nie przewijała się na boki.`
			},
			render: () => (0, Q.jsxs)(`div`, {
				className: $,
				children: [
					(0, Q.jsx)(Bt, {
						label: `Summary`,
						description: `Plain text, shown in lists.`,
						maxLength: 140,
						defaultValue: `Rebuild the settings screen with the new fields.`,
						formatCount: (e, t) => `${e} / ${t}`
					}),
					(0, Q.jsx)(Bt, {
						label: `Description`,
						monospace: !0,
						rows: 5,
						placeholder: `## Steps to reproduce`,
						optionalLabel: `(optional)`
					}),
					(0, Q.jsx)(Bt, {
						label: `Reason`,
						isRequired: !0,
						isInvalid: !0,
						errorMessage: `Tell the reviewer why this change is needed.`
					})
				]
			})
		},
		{
			name: `Select`,
			components: [`Select`],
			description: `One choice from a list of up to about fifteen options. For more, or when people know what to type, a searchable combo box fits better.`,
			usage: `<Select label="Priority" placeholder="Choose a priority"
  items={[{ id: 'low', label: 'Low' }, { id: 'high', label: 'High' }]} />`,
			accessibility: `Space, Enter or the arrow keys open the list; typing a letter jumps to an option, also while closed. The chosen option has a check mark and bold text, not only a colour. Disabled options stay in the list and are skipped. The list is as wide as the trigger and never wider than the screen.`,
			pl: {
				description: `Jeden wybór z listy do około piętnastu opcji. Dla większej liczby albo gdy ludzie wiedzą, co wpisać, lepsze jest pole kombinowane z wyszukiwaniem.`,
				accessibility: `Spacja, Enter lub klawisze strzałek otwierają listę; wpisanie litery przeskakuje do opcji, także gdy lista jest zamknięta. Wybrana opcja ma znacznik i pogrubiony tekst, a nie tylko kolor. Wyłączone opcje zostają na liście i są pomijane. Lista ma szerokość elementu otwierającego i nigdy nie jest szersza niż ekran.`
			},
			render: () => (0, Q.jsx)(Td, { children: (e) => (0, Q.jsxs)(`div`, {
				className: $,
				children: [
					(0, Q.jsx)(Ft, {
						label: `Priority`,
						placeholder: `Choose a priority`,
						items: Ed,
						container: e,
						description: `Urgent needs an owner.`
					}),
					(0, Q.jsx)(Ft, {
						label: `Status`,
						items: Ed,
						defaultSelectedKey: `normal`,
						isRequired: !0,
						isInvalid: !0,
						errorMessage: `Pick a status that fits the board.`,
						container: e
					}),
					(0, Q.jsx)(Ft, {
						label: `Board`,
						placeholder: `No boards yet`,
						items: [],
						emptyLabel: `Create a board first`,
						container: e,
						isDisabled: !0
					})
				]
			}) })
		},
		{
			name: `MultiSelect`,
			components: [`MultiSelect`],
			description: `Several choices from a known list, such as labels or channels. For free text that becomes tags, use ChipInput.`,
			usage: `<MultiSelect label="Labels" items={labels}
  formatSelection={(names) => names.length > 2 ? \`\${names.length} labels\` : names.join(', ')} />`,
			accessibility: `The list stays open while choosing; Space or Enter toggles an option and Escape closes. Each row shows a check box glyph as well as the selected state React Aria announces. The trigger text is cut with an ellipsis, so give formatSelection a count for long choices.`,
			pl: {
				description: `Kilka wyborów ze znanej listy, takich jak etykiety albo kanały. Dla swobodnego tekstu, który zamienia się w tagi, użyj ChipInput.`,
				accessibility: `Lista zostaje otwarta podczas wybierania; Spacja lub Enter przełącza opcję, a Escape zamyka listę. Każdy wiersz pokazuje znak pola wyboru, a także stan zaznaczenia, który ogłasza React Aria. Tekst elementu otwierającego jest ucinany wielokropkiem, więc dla długich wyborów daj formatSelection liczbę.`
			},
			render: () => (0, Q.jsx)(Td, { children: (e) => (0, Q.jsxs)(`div`, {
				className: $,
				children: [(0, Q.jsx)(xd, {
					label: `Labels`,
					placeholder: `No labels`,
					items: Dd,
					defaultValue: [`bug`, `design`],
					container: e,
					formatSelection: (e) => e.length > 2 ? `${e.length} labels` : e.join(`, `)
				}), (0, Q.jsx)(xd, {
					label: `Notify`,
					items: Dd,
					isInvalid: !0,
					errorMessage: `Choose at least one label.`,
					container: e
				})]
			}) })
		},
		{
			name: `Checkbox`,
			components: [`Checkbox`, `CheckboxGroup`],
			description: `A Checkbox is one yes or no answer saved with the form, such as accepting terms. A CheckboxGroup is several independent choices under one label.`,
			usage: `<CheckboxGroup label="Notify me about" defaultValue={['mentions']}>
  <Checkbox value="mentions">Mentions</Checkbox>
  <Checkbox value="reviews">Review requests</Checkbox>
</CheckboxGroup>`,
			accessibility: `Space toggles; the label is part of the target, so the row clears 24px. Checked shows a tick and indeterminate shows a dash, both kept in forced colours. A group has one label, one description and one error for the set.`,
			pl: {
				description: `Checkbox to jedna odpowiedź tak lub nie zapisana razem z formularzem, na przykład akceptacja regulaminu. CheckboxGroup to kilka niezależnych wyborów pod jedną etykietą.`,
				accessibility: `Spacja przełącza; etykieta jest częścią celu, więc wiersz przekracza 24 px. Zaznaczone pokazuje ptaszek, a stan pośredni kreskę, oba zachowane w trybie wymuszonych kolorów. Grupa ma jedną etykietę, jeden opis i jeden błąd dla całego zestawu.`
			},
			render: () => (0, Q.jsxs)(`div`, {
				className: $,
				children: [
					(0, Q.jsxs)(id, {
						label: `Notify me about`,
						description: `Sent to your email.`,
						defaultValue: [`mentions`],
						children: [
							(0, Q.jsx)(H, {
								value: `mentions`,
								children: `Mentions`
							}),
							(0, Q.jsx)(H, {
								value: `reviews`,
								description: `When someone asks you to look at a change.`,
								children: `Review requests`
							}),
							(0, Q.jsx)(H, {
								value: `digest`,
								isDisabled: !0,
								children: `Weekly digest`
							})
						]
					}),
					(0, Q.jsx)(H, {
						isIndeterminate: !0,
						children: `Select all issues in this column, including the ones hidden by the current filter`
					}),
					(0, Q.jsx)(H, {
						isRequired: !0,
						isInvalid: !0,
						errorMessage: `Accept the terms to continue.`,
						children: `I accept the terms`
					})
				]
			})
		},
		{
			name: `RadioGroup`,
			components: [`Radio`, `RadioGroup`],
			description: `One choice from two to six options that should all be visible. For more, use Select.`,
			usage: `<RadioGroup label="Visibility" defaultValue="team">
  <Radio value="private">Only me</Radio>
  <Radio value="team">My team</Radio>
</RadioGroup>`,
			accessibility: `Tab enters the group at the chosen option; the arrow keys move and choose. The chosen option shows a dot, a shape that survives forced colours. A horizontal group wraps on a narrow screen.`,
			pl: {
				description: `Jeden wybór z dwóch do sześciu opcji, które mają być widoczne naraz. Dla większej liczby użyj Select.`,
				accessibility: `Tab wchodzi do grupy na wybranej opcji; klawisze strzałek przesuwają i wybierają. Wybrana opcja pokazuje kropkę, kształt, który przetrwa tryb wymuszonych kolorów. Grupa pozioma zawija się na wąskim ekranie.`
			},
			render: () => (0, Q.jsxs)(`div`, {
				className: $,
				children: [
					(0, Q.jsxs)(Lt, {
						label: `Visibility`,
						defaultValue: `team`,
						description: `You can change it later.`,
						children: [
							(0, Q.jsx)(It, {
								value: `private`,
								children: `Only me`
							}),
							(0, Q.jsx)(It, {
								value: `team`,
								description: `Everyone in Skribly team`,
								children: `My team`
							}),
							(0, Q.jsx)(It, {
								value: `public`,
								isDisabled: !0,
								children: `Anyone with the link`
							})
						]
					}),
					(0, Q.jsxs)(Lt, {
						label: `Density`,
						orientation: `horizontal`,
						defaultValue: `comfortable`,
						children: [(0, Q.jsx)(It, {
							value: `comfortable`,
							children: `Comfortable`
						}), (0, Q.jsx)(It, {
							value: `compact`,
							children: `Compact`
						})]
					}),
					(0, Q.jsxs)(Lt, {
						label: `Plan`,
						isRequired: !0,
						isInvalid: !0,
						errorMessage: `Choose a plan.`,
						children: [(0, Q.jsx)(It, {
							value: `free`,
							children: `Free`
						}), (0, Q.jsx)(It, {
							value: `team`,
							children: `Team`
						})]
					})
				]
			})
		},
		{
			name: `Switch`,
			components: [`Switch`],
			description: `An on and off setting that takes effect at once, with no save button. For a choice saved with a form, use Checkbox.`,
			usage: `<Switch defaultSelected onChange={setOn}>Sound on finish</Switch>`,
			accessibility: `It is announced as a switch with its on or off state. The knob moves and shows a tick when on, so the state is a position and a glyph. Forced colours keep the knob in system colours.`,
			pl: {
				description: `Ustawienie włączone i wyłączone, które działa od razu, bez przycisku zapisu. Dla wyboru zapisywanego z formularzem użyj Checkbox.`,
				accessibility: `Jest ogłaszany jako przełącznik z jego stanem włączony lub wyłączony. Gałka się przesuwa i po włączeniu pokazuje ptaszek, więc stan to pozycja i znak. Tryb wymuszonych kolorów zachowuje gałkę w kolorach systemowych.`
			},
			render: () => (0, Q.jsxs)(`div`, {
				className: $,
				children: [
					(0, Q.jsx)(zt, {
						defaultSelected: !0,
						children: `Sound when an agent finishes`
					}),
					(0, Q.jsx)(zt, {
						description: `Pauses the animations and transitions of the app.`,
						children: `Reduce motion`
					}),
					(0, Q.jsx)(zt, {
						labelPosition: `start`,
						children: `Show line numbers`
					}),
					(0, Q.jsx)(zt, {
						isDisabled: !0,
						children: `Sync over mobile data`
					})
				]
			})
		},
		{
			name: `Range`,
			components: [`Range`],
			description: `A value on a scale where the exact number matters less than the feel, such as text size or a zoom level. Pass an array for two thumbs.`,
			usage: `<Range label="Text size" minValue={80} maxValue={160} step={10} defaultValue={100}
  formatOptions={{ style: 'unit', unit: 'percent' }} />`,
			accessibility: `Arrow keys step, Page Up and Page Down jump, Home and End reach the ends. The value is printed above the track and announced with its unit. The 20px thumb has a 24px hit area; two-thumb ranges need thumbLabels.`,
			pl: {
				description: `Wartość na skali, gdzie dokładna liczba ma mniejsze znaczenie niż wyczucie, na przykład rozmiar tekstu albo poziom powiększenia. Przekaż tablicę, aby mieć dwa uchwyty.`,
				accessibility: `Klawisze strzałek zmieniają o krok, Page Up i Page Down skaczą, Home i End docierają do końców. Wartość jest wypisana nad torem i ogłaszana z jednostką. Uchwyt 20 px ma pole trafienia 24 px; zakresy z dwoma uchwytami potrzebują thumbLabels.`
			},
			render: () => (0, Q.jsxs)(`div`, {
				className: $,
				children: [
					(0, Q.jsx)(tt, {
						label: `Text size`,
						minValue: 80,
						maxValue: 160,
						step: 10,
						defaultValue: 100,
						showBounds: !0,
						formatOptions: { style: `percent` },
						description: `Scales the whole interface.`
					}),
					(0, Q.jsx)(tt, {
						label: `Timeout`,
						minValue: 0,
						maxValue: 5e3,
						step: 100,
						defaultValue: [800, 2400],
						thumbLabels: [`Minimum`, `Maximum`],
						formatOptions: {
							style: `unit`,
							unit: `millisecond`
						}
					}),
					(0, Q.jsx)(tt, {
						label: `Volume`,
						isDisabled: !0,
						defaultValue: 40
					})
				]
			})
		},
		{
			name: `FileInput`,
			components: [`FileInput`],
			description: `Attach files by picking, dropping or pasting them. It checks type and size and lists what was chosen with a remove button each.`,
			usage: `<FileInput label="Attachments" buttonLabel="Choose files" dropLabel="or drop them here"
  removeLabel={(file) => \`Remove \${file.name}\`} allowsMultiple acceptedFileTypes={['.pdf', 'image/*']} />`,
			accessibility: `The button opens the picker. The drop area has its own focus stop where keyboard drag and drop and pasting a copied file work. Files left out by type or size raise a polite warning; each remove button names its file.`,
			pl: {
				description: `Dołącz pliki, wybierając je, upuszczając albo wklejając. Sprawdza typ i rozmiar i wypisuje wybrane pliki, każdy z przyciskiem usuwania.`,
				accessibility: `Przycisk otwiera okno wyboru. Obszar upuszczania ma własny przystanek fokusa, na którym działa przeciąganie z klawiatury i wklejanie skopiowanego pliku. Pliki odrzucone przez typ albo rozmiar wywołują ostrzeżenie typu polite; każdy przycisk usuwania nazywa swój plik.`
			},
			render: () => (0, Q.jsxs)(`div`, {
				className: $,
				children: [(0, Q.jsx)(vd, {
					label: `Attachments`,
					buttonLabel: `Choose files`,
					dropLabel: `or drop them here`,
					removeLabel: (e) => `Remove ${e.name}`,
					description: `PDF or images, up to 5 MB each.`,
					acceptedFileTypes: [`.pdf`, `image/*`],
					maxFileSize: 5e6,
					allowsMultiple: !0,
					defaultFiles: kd,
					rejectedMessage: (e) => `Left out: ${e.map((e) => e.name).join(`, `)}. Use PDF or images under 5 MB.`,
					formatCount: (e) => e === 1 ? `1 file chosen` : `${e} files chosen`
				}), (0, Q.jsx)(vd, {
					label: `Avatar`,
					buttonLabel: `Choose an image`,
					dropLabel: `or drop it here`,
					removeLabel: (e) => `Remove ${e.name}`,
					isRequired: !0,
					errorMessage: `Add an image to continue.`
				})]
			})
		},
		{
			name: `ColorInput`,
			components: [`ColorInput`],
			description: `A colour as a hex value, typed or picked. Presets keep choices within a palette, such as label or brand colours.`,
			usage: `<ColorInput label="Label colour" pickerLabel="Pick a colour" hueLabel="Hue"
  defaultValue="#d97706" swatches={['#d97706', '#2563eb']} swatchesLabel="Presets" />`,
			accessibility: `The hex field accepts typing and arrow keys. The swatch button opens a dialog with a 2D colour area, a hue slider and presets, all keyboard operable; the presets are a listbox named by the required swatchesLabel, and React Aria names each colour in words. The hex text says the value, so the swatch is never the only cue.`,
			pl: {
				description: `Kolor jako wartość szesnastkowa, wpisana albo wybrana. Gotowe kolory utrzymują wybór w obrębie palety, na przykład kolorów etykiet albo marki.`,
				accessibility: `Pole szesnastkowe przyjmuje wpisywanie i klawisze strzałek. Przycisk próbki otwiera okno z dwuwymiarowym obszarem koloru, suwakiem odcienia i gotowymi kolorami, wszystko obsługiwane z klawiatury; gotowe kolory są listą wyboru nazwaną przez wymagane swatchesLabel, a React Aria nazywa każdy kolor słowami. Tekst szesnastkowy podaje wartość, więc próbka nigdy nie jest jedyną wskazówką.`
			},
			render: () => (0, Q.jsx)(Td, { children: (e) => (0, Q.jsxs)(`div`, {
				className: $,
				children: [(0, Q.jsx)(ld, {
					label: `Label colour`,
					pickerLabel: `Pick a colour`,
					areaLabel: `Saturation and brightness`,
					hueLabel: `Hue`,
					defaultValue: `#d97706`,
					swatches: [
						`#d97706`,
						`#b45309`,
						`#16a34a`,
						`#2563eb`,
						`#7c3aed`,
						`#db2777`
					],
					swatchesLabel: `Presets`,
					description: `Used for the label dot and its badge.`,
					container: e
				}), (0, Q.jsx)(ld, {
					label: `Accent`,
					pickerLabel: `Pick an accent`,
					hueLabel: `Hue`,
					defaultValue: `#2563eb`,
					isDisabled: !0,
					container: e
				})]
			}) })
		},
		{
			name: `DateInput`,
			components: [`DateInput`],
			description: `A day, typed segment by segment or picked in a calendar, such as a due date. The order of day, month and year follows the locale.`,
			usage: `<DateInput label="Due date" defaultValue={parseDate('2026-11-20')} />`,
			accessibility: `Each segment is a spin button: type digits or use the arrow keys, and Tab moves on. The calendar button opens a dialog where arrow keys move by day, Page Up and Page Down by month. Today is bold and underlined; the chosen day is filled.`,
			pl: {
				description: `Dzień wpisywany segment po segmencie albo wybierany w kalendarzu, na przykład termin. Kolejność dnia, miesiąca i roku zależy od ustawień regionalnych.`,
				accessibility: `Każdy segment jest polem z przyciskami zmiany wartości: wpisz cyfry albo użyj klawiszy strzałek, a Tab przechodzi dalej. Przycisk kalendarza otwiera okno, w którym klawisze strzałek przesuwają o dzień, a Page Up i Page Down o miesiąc. Dzisiejszy dzień jest pogrubiony i podkreślony; wybrany dzień jest wypełniony.`
			},
			render: () => (0, Q.jsx)(Td, { children: (e) => (0, Q.jsxs)(`div`, {
				className: $,
				children: [
					(0, Q.jsx)(pd, {
						label: `Due date`,
						defaultValue: Xr(`2026-11-20`),
						description: `The board marks it red after this day.`,
						container: e
					}),
					(0, Q.jsx)(pd, {
						label: `Start date`,
						isRequired: !0,
						isInvalid: !0,
						errorMessage: `Pick a start date before the due date.`,
						container: e
					}),
					(0, Q.jsx)(pd, {
						label: `Created`,
						isDisabled: !0,
						defaultValue: Xr(`2026-01-04`),
						container: e
					})
				]
			}) })
		},
		{
			name: `DateTimeInput`,
			components: [`DateTimeInput`],
			description: `A day and a time in one field, such as a reminder or a release. Pass a ZonedDateTime to show the time zone.`,
			usage: `<DateTimeInput label="Remind me" defaultValue={parseDateTime('2026-11-20T09:30')} />`,
			accessibility: `The hour and minute segments take digits or arrow keys; the hour cycle follows the locale unless hourCycle is set. The calendar stays open after picking a day, so the time can be checked before closing with Escape.`,
			pl: {
				description: `Dzień i godzina w jednym polu, na przykład przypomnienie albo wydanie. Przekaż ZonedDateTime, aby pokazać strefę czasową.`,
				accessibility: `Segmenty godziny i minuty przyjmują cyfry albo klawisze strzałek; cykl godzin zależy od ustawień regionalnych, chyba że ustawiono hourCycle. Kalendarz zostaje otwarty po wybraniu dnia, więc godzinę można sprawdzić przed zamknięciem klawiszem Escape.`
			},
			render: () => (0, Q.jsx)(Td, { children: (e) => (0, Q.jsxs)(`div`, {
				className: $,
				children: [(0, Q.jsx)(md, {
					label: `Remind me`,
					defaultValue: Zr(`2026-11-20T09:30`),
					container: e
				}), (0, Q.jsx)(md, {
					label: `Release`,
					hourCycle: 24,
					status: {
						tone: `info`,
						message: `Times are in your local time zone`
					},
					container: e
				})]
			}) })
		},
		{
			name: `SearchField`,
			components: [`SearchField`],
			description: `Text that filters or searches, with a clear button and an optional key hint. Without a visible label give it an aria-label.`,
			usage: `<SearchField aria-label="Search issues" placeholder="Search issues" shortcut="/" />`,
			accessibility: `It is a searchbox: Escape clears it and Enter submits. The clear button has a name and shows only when there is text. While loading, loadingLabel is announced politely; the spinner stops when reduced motion is on.`,
			pl: {
				description: `Tekst, który filtruje albo wyszukuje, z przyciskiem czyszczenia i opcjonalną podpowiedzią klawisza. Bez widocznej etykiety nadaj mu aria-label.`,
				accessibility: `Jest polem searchbox: Escape je czyści, a Enter wysyła. Przycisk czyszczenia ma nazwę i pokazuje się tylko wtedy, gdy jest tekst. Podczas ładowania loadingLabel jest ogłaszane w trybie polite; wskaźnik zatrzymuje się przy ograniczonym ruchu.`
			},
			render: () => (0, Q.jsxs)(`div`, {
				className: $,
				children: [
					(0, Q.jsx)(rt, {
						"aria-label": `Search issues`,
						placeholder: `Search issues`,
						shortcut: `/`,
						clearLabel: `Clear search`
					}),
					(0, Q.jsx)(rt, {
						label: `Find a member`,
						defaultValue: `dawid`,
						isLoading: !0,
						loadingLabel: `Searching`,
						clearLabel: `Clear search`
					}),
					(0, Q.jsx)(rt, {
						label: `Filter`,
						isDisabled: !0,
						placeholder: `Nothing to filter`
					})
				]
			})
		},
		{
			name: `InputWithIcon`,
			components: [`InputWithIcon`],
			description: `A text field with a leading icon and optional end text, such as a unit or a domain. The icon is a hint, never the label.`,
			usage: `<InputWithIcon label="Website" icon={<Icon name="nav.web" />} placeholder="example.com" />`,
			accessibility: `The icon is hidden from screen readers and the end text is plain text after the input, so the label must say everything. Long values scroll inside the box.`,
			pl: {
				description: `Pole tekstowe z ikoną na początku i opcjonalnym tekstem na końcu, takim jak jednostka albo domena. Ikona jest wskazówką, nigdy etykietą.`,
				accessibility: `Ikona jest ukryta przed czytnikami ekranu, a tekst na końcu to zwykły tekst po polu, więc etykieta musi powiedzieć wszystko. Długie wartości przewijają się wewnątrz pola.`
			},
			render: () => (0, Q.jsxs)(`div`, {
				className: $,
				children: [
					(0, Q.jsx)(bd, {
						label: `Website`,
						icon: (0, Q.jsx)(O, { name: `nav.web` }),
						placeholder: `example.com`
					}),
					(0, Q.jsx)(bd, {
						label: `Subdomain`,
						icon: (0, Q.jsx)(O, { name: `action.link` }),
						end: `.skribly.pl`,
						defaultValue: `docs`
					}),
					(0, Q.jsx)(bd, {
						label: `Handle`,
						icon: (0, Q.jsx)(O, { name: `content.mention` }),
						isInvalid: !0,
						errorMessage: `Use letters, digits and dashes.`,
						defaultValue: `dawid w`
					})
				]
			})
		},
		{
			name: `ChipInput`,
			components: [`ChipInput`],
			description: `Free text that turns into removable chips, such as topics or email addresses. For a fixed list of options, use MultiSelect.`,
			usage: `<ChipInput label="Topics" removeLabel="Remove" defaultValue={['design']}
  duplicateMessage={(chip) => \`"\${chip}" is already in the list\`} />`,
			accessibility: `Enter or a comma adds a chip, and pasting a list splits it. The chips are one tab stop: arrow keys move, Delete or Backspace removes, and each remove button reads "Remove" and the chip. Backspace in the empty box moves to the last chip; a duplicate raises a polite warning.`,
			pl: {
				description: `Swobodny tekst, który zamienia się w chipy z możliwością usunięcia, takie jak tematy albo adresy e-mail. Dla stałej listy opcji użyj MultiSelect.`,
				accessibility: `Enter albo przecinek dodaje chip, a wklejenie listy ją dzieli. Chipy są jednym przystankiem w kolejności Tab: klawisze strzałek przesuwają, Delete lub Backspace usuwa, a każdy przycisk usuwania odczytuje „Remove” i chip. Backspace w pustym polu przechodzi do ostatniego chipa; duplikat wywołuje ostrzeżenie typu polite.`
			},
			render: () => (0, Q.jsxs)(`div`, {
				className: $,
				children: [(0, Q.jsx)(sd, {
					label: `Topics`,
					description: `Press Enter or type a comma after each topic.`,
					removeLabel: `Remove`,
					defaultValue: [
						`design`,
						`accessibility`,
						`a-very-long-topic-name-that-has-to-truncate-inside-its-chip`
					],
					placeholder: `Add a topic`,
					duplicateMessage: (e) => `"${e}" is already in the list`
				}), (0, Q.jsx)(sd, {
					label: `Invite`,
					removeLabel: `Remove`,
					isRequired: !0,
					errorMessage: `Add at least one email address.`,
					placeholder: `name@example.com`
				})]
			})
		},
		{
			name: `SettingRow`,
			components: [`SettingRow`],
			description: `One line of a settings list: the title and explanation on the left, any control on the right. On a narrow screen the control moves below.`,
			usage: `<SettingRow title="Interface language" description="Applies after a reload.">
  {(control) => <select {...control}>…</select>}
</SettingRow>`,
			accessibility: `Pass a function to get aria-labelledby and aria-describedby for the control, so the row title names it. Rows are separated by a border, not only by spacing.`,
			pl: {
				description: `Jedna linia listy ustawień: tytuł i objaśnienie po lewej, dowolna kontrolka po prawej. Na wąskim ekranie kontrolka przechodzi pod spód.`,
				accessibility: `Przekaż funkcję, aby dostać aria-labelledby i aria-describedby dla kontrolki, dzięki czemu tytuł wiersza ją nazywa. Wiersze są rozdzielone ramką, a nie tylko odstępem.`
			},
			render: () => (0, Q.jsxs)(`div`, {
				className: `max-w-xl rounded-lg border border-border bg-surface px-4`,
				children: [(0, Q.jsx)(Sd, {
					title: `Interface language`,
					description: `Applies to menus and messages after a reload.`,
					children: (e) => (0, Q.jsxs)(`select`, {
						...e,
						defaultValue: `en`,
						className: `${ue} w-auto pr-8`,
						children: [(0, Q.jsx)(`option`, {
							value: `en`,
							children: `English`
						}), (0, Q.jsx)(`option`, {
							value: `pl`,
							children: `Polski`
						})]
					})
				}), (0, Q.jsx)(Sd, {
					title: `Defaults`,
					description: `Restores every setting in this section.`,
					children: (0, Q.jsx)(ie, {
						variant: `outline`,
						size: `sm`,
						children: `Restore defaults`
					})
				})]
			})
		},
		{
			name: `ToggleRow`,
			components: [`ToggleRow`],
			description: `A settings line that is one switch, such as a reader preference. It takes effect at once.`,
			usage: `<ToggleRow title="Underline links" description="Links stand out by more than colour." />`,
			accessibility: `The title and the switch are one wide target. The switch is named by the title and described by the text below it, and announces on or off.`,
			pl: {
				description: `Linia ustawień, która jest jednym przełącznikiem, na przykład preferencja czytelnika. Działa od razu.`,
				accessibility: `Tytuł i przełącznik są jednym szerokim celem. Przełącznik jest nazwany tytułem i opisany tekstem pod nim, a ogłasza stan włączony lub wyłączony.`
			},
			render: () => (0, Q.jsxs)(`div`, {
				className: `max-w-xl rounded-lg border border-border bg-surface px-4`,
				children: [
					(0, Q.jsx)(Cd, {
						title: `High contrast`,
						description: `Strengthens text and borders in the day and night themes.`
					}),
					(0, Q.jsx)(Cd, {
						title: `Underline links`,
						description: `Links stand out by more than colour.`,
						defaultSelected: !0
					}),
					(0, Q.jsx)(Cd, {
						title: `Strong focus ring`,
						description: `A thick outline around the element chosen with the keyboard.`
					}),
					(0, Q.jsx)(Cd, {
						title: `Sync settings`,
						description: `Needs a signed-in account.`,
						isDisabled: !0
					})
				]
			})
		},
		{
			name: `FormActions`,
			components: [`FormActions`],
			description: `The button row at the end of a form, with the result of the last submit. Put the main button last.`,
			usage: `<FormActions status={{ tone: 'ok', message: 'Saved' }}>
  <Button variant="outline">Cancel</Button>
  <Button type="submit">Save</Button>
</FormActions>`,
			accessibility: `A failed save is an assertive alert; ok, info and warn messages are polite. Each message has an icon and words. Both regions stay mounted, so a message that appears later is announced. Buttons stack at full width on a narrow screen with the main one on top.`,
			pl: {
				description: `Rząd przycisków na końcu formularza, z wynikiem ostatniego wysłania. Główny przycisk umieść jako ostatni.`,
				accessibility: `Nieudany zapis jest komunikatem typu assertive; komunikaty ok, info i warn są typu polite. Każdy komunikat ma ikonę i słowa. Oba regiony zostają zamontowane, więc komunikat, który pojawia się później, jest ogłaszany. Na wąskim ekranie przyciski układają się w stos na pełną szerokość, z głównym na górze.`
			},
			render: () => (0, Q.jsx)(Ad, {})
		}
	]
};
export { wd as t };
