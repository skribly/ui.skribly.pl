import { t as e } from "./Badge.Cwl75Dkx.js";
import { r as t, s as n, u as r } from "./doc.D2PtmWN6.js";
import { t as i } from "./jsx-runtime.yrTYNGQT.js";
var a = i(), o = [{
	version: `0.1.0`,
	date: `listopad 2026`,
	status: `W toku`,
	summary: `Pierwsza wersja: tokeny, czysty CSS i grupy komponentów, których potrzebuje każde narzędzie Skribly.`,
	changes: [
		{
			kind: `Dodano`,
			text: `Tokeny projektowe w motywie dziennym, nocnym i wysokiego kontrastu, zbudowane z plików tokenów W3C w zmienne CSS i typowany obiekt, z testami kontrastu dla każdej pary tekstu i kontrolki.`
		},
		{
			kind: `Dodano`,
			text: `Klasy czystego CSS dla stron bez Reacta: przycisk, link, pole, karta, plakietka i alert.`
		},
		{
			kind: `Dodano`,
			text: `Marka: logo, logotyp słowny, zestaw aplikacji, awatary, chip agenta, plakietki hostów i trackerów, litera favicony.`
		},
		{
			kind: `Dodano`,
			text: `Akcje: przyciski, przyciski z ikoną, linki, przełączane i kopiowania, grupy przycisków, klawisze, uchwyty przeciągania, przyciski przesuwania i akcje blokowane.`
		},
		{
			kind: `Dodano`,
			text: `Komunikaty i stany: alerty, banery, komunikaty flash i toasty z ogłoszeniami typu polite i assertive, plakietki, ważność, kropki statusu, wskaźniki ładowania, szkielety, puste stany, mierniki i paski postępu.`
		},
		{
			kind: `Dodano`,
			text: `Formularze: pola, wybory, selektory, wiersze ustawień, podsumowanie błędów i akcje formularza z linią statusu.`
		},
		{
			kind: `Dodano`,
			text: `Grupy nawigacji, nakładek, danych, treści, rozmowy, wyszukiwania, powłoki, powierzchni, onboardingu, stron, mediów i motywu.`
		},
		{
			kind: `Dodano`,
			text: `Motyw i ustawienia czytelnika: ThemeProvider, ThemeScript, ThemeToggle, AccessibilityProvider, SkipLink i ogłoszenia na żywo.`
		},
		{
			kind: `Zmieniono`,
			text: `ThemeToggle pokazuje swoje słowa zawsze, nigdy albo zależnie od własnej szerokości.`
		},
		{
			kind: `Zmieniono`,
			text: `Kolekcje zapamiętują swój stan, więc duże tabele i listy renderują się rzadziej.`
		},
		{
			kind: `Dokumentacja`,
			text: `Ta strona: każdy przykład w trzech motywach, użycie, notatki o dostępności, tokeny, wzorce komunikatów, formularzy i układu oraz przewodnik po dostępności.`
		}
	]
}], s = {
	Dodano: `ok`,
	Zmieniono: `info`,
	Naprawiono: `warn`,
	Dokumentacja: `neutral`
};
function c() {
	return (0, a.jsxs)(t, {
		lang: `pl`,
		children: [(0, a.jsx)(n, {
			eyebrow: `Przegląd`,
			title: `Historia zmian`,
			lead: `Co zmieniło się w każdej wersji. Wersje podążają za wersjonowaniem semantycznym, a aplikacje przypinają zakres przez #semver w adresie gita.`
		}), o.map((t) => (0, a.jsxs)(r, {
			id: `v${t.version.replaceAll(`.`, `-`)}`,
			title: `Wersja ${t.version}`,
			children: [
				(0, a.jsxs)(`p`, {
					className: `flex flex-wrap items-center gap-2 text-caption text-muted`,
					children: [(0, a.jsx)(`span`, { children: t.date }), (0, a.jsx)(e, {
						size: `sm`,
						tone: `accent`,
						children: t.status
					})]
				}),
				(0, a.jsx)(`p`, {
					className: `max-w-[65ch] text-[0.9375rem] text-fg`,
					children: t.summary
				}),
				(0, a.jsx)(`ul`, {
					className: `divide-y divide-border rounded-xl border border-border bg-surface`,
					children: t.changes.map((t) => (0, a.jsxs)(`li`, {
						className: `flex flex-col gap-2 p-4 sm:flex-row sm:items-start sm:gap-4`,
						children: [(0, a.jsx)(e, {
							tone: s[t.kind],
							className: `w-fit shrink-0 sm:w-28 sm:justify-center`,
							children: t.kind
						}), (0, a.jsx)(`span`, {
							className: `min-w-0 text-body text-fg`,
							children: t.text
						})]
					}, t.text))
				})
			]
		}, t.version))]
	});
}
export { c as ChangelogPl };
