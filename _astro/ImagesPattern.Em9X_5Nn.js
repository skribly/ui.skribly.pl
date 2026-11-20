import { r as e, t } from "./lightbox.gallery.BDNLFpdd.js";
import { d as n, f as r, i, n as a, p as o, r as s, s as c, t as l, u } from "./doc.CpwJe6Re.js";
import { g as d } from "./useOverflow.Dq483xd0.js";
var f = d(), p = [
	[
		`Zamknięcie`,
		`Przycisk zamknięcia, Escape, kliknięcie tła`,
		`Fokus wraca na obraz, który otworzono`
	],
	[
		`Powiększenie`,
		`Przyciski plus i minus, klawisze + i -, kółko myszy, szczypnięcie, dwukrotne kliknięcie lub dotknięcie`,
		`Zero albo przycisk zerowania wraca do całego obrazu`
	],
	[
		`Przesuwanie`,
		`Przeciąganie albo klawisze strzałek przy powiększeniu`,
		`Obraz nie opuści ekranu`
	],
	[
		`Poprzedni i następny`,
		`Przyciski ze strzałkami, klawisze strzałek w lewo i w prawo, machnięcie na telefonie`,
		`Home i End przechodzą do pierwszego i ostatniego obrazu`
	],
	[
		`Skok`,
		`Rząd miniatur na dole`,
		`Bieżąca miniatura ma aria-current`
	]
];
function m() {
	return (0, f.jsxs)(s, {
		lang: `pl`,
		children: [
			(0, f.jsx)(c, {
				eyebrow: `Wzorce`,
				title: `Obrazy i lightbox`,
				lead: `Obraz z treści każdej strony Skribly otwiera się duży w oknie. Czytelnik może przybliżyć zrzut ekranu, przejść po grupie takich obrazów i wrócić na stronę dokładnie tam, gdzie był. Ten sam wygląd daje jeden komponent Reacta i jeden mały skrypt.`
			}),
			(0, f.jsx)(u, {
				id: `choose`,
				title: `Co wybrać`,
				children: (0, f.jsx)(o, { children: (0, f.jsxs)(`ul`, { children: [(0, f.jsxs)(`li`, { children: [
					(0, f.jsx)(`strong`, { children: `Zwykła strona albo strona w Astro.` }),
					` Nic nie rób: skrypt zestawu witryn sam obejmuje każdy obraz z treści w `,
					(0, f.jsx)(`code`, { children: `main` }),
					`.`
				] }), (0, f.jsxs)(`li`, { children: [
					(0, f.jsx)(`strong`, { children: `Aplikacja w Reakcie.` }),
					` Użyj `,
					(0, f.jsx)(`code`, { children: `Lightbox` }),
					` i sam trzymaj stan otwarcia oraz numer obrazu.`
				] })] }) })
			}),
			(0, f.jsxs)(u, {
				id: `site-kit`,
				title: `Na stronie: nic do napisania`,
				children: [(0, f.jsxs)(o, { children: [
					(0, f.jsxs)(`p`, { children: [
						(0, f.jsx)(`code`, { children: `PageLayout` }),
						` dołącza skrypt. Zamienia on obraz w `,
						(0, f.jsx)(`code`, { children: `main` }),
						` w przycisk otwierający okno, z tekstem alternatywnym w nazwie.`
					] }),
					(0, f.jsxs)(`ul`, { children: [
						(0, f.jsx)(`li`, { children: `Figury o wspólnym rodzicu otwierają się jako grupa.` }),
						(0, f.jsxs)(`li`, { children: [(0, f.jsx)(`code`, { children: `data-sk-lightbox-group` }), ` na dowolnym elemencie grupuje obrazy w środku.`] }),
						(0, f.jsxs)(`li`, { children: [(0, f.jsx)(`code`, { children: `data-sk-full` }), ` na obrazie wskazuje większy plik niż pokazany.`] })
					] }),
					(0, f.jsx)(`p`, { children: `Skrypt pomija te obrazy, tak samo jak atrybut poniżej:` }),
					(0, f.jsxs)(`ul`, { children: [
						(0, f.jsx)(`li`, { children: `obrazy w linku lub przycisku, bo już coś robią;` }),
						(0, f.jsx)(`li`, { children: `obrazy ozdobne z pustym alt oraz nagłówek, stopkę i nawigację;` }),
						(0, f.jsxs)(`li`, { children: [
							`wszystko w `,
							(0, f.jsx)(`code`, { children: `data-sk-lightbox="off"` }),
							` lub z tym atrybutem.`
						] })
					] })
				] }), (0, f.jsx)(i, {
					label: `Znacznik`,
					language: `html`,
					code: `<figure>
  <img src="/shots/editor.webp" alt="Edytor z otwartym szkicem" />
  <figcaption>Edytor</figcaption>
</figure>

<img src="/logo-wall.webp" alt="Logotypy" data-sk-lightbox="off" />`,
					children: (0, f.jsx)(`p`, {
						className: `text-body text-muted`,
						children: `Pierwszy obraz otwiera się w lightboxie, drugi nie.`
					})
				})]
			}),
			(0, f.jsxs)(u, {
				id: `react`,
				title: `W Reakcie`,
				children: [(0, f.jsx)(i, {
					label: `Lightbox`,
					code: `<Lightbox images={images} index={index} onIndexChange={setIndex} isOpen={open} onOpenChange={setOpen} labels={labels} />`,
					children: (0, f.jsx)(t, { images: e })
				}), (0, f.jsx)(o, { children: (0, f.jsx)(`p`, { children: `Każdy tekst jest etykietą, także pozycja i nazwy miniatur, więc aplikacja zachowuje własne pliki językowe.` }) })]
			}),
			(0, f.jsx)(u, {
				id: `controls`,
				title: `Sterowanie`,
				children: (0, f.jsxs)(r, {
					label: `Sterowanie lightboxem`,
					children: [
						(0, f.jsx)(`caption`, {
							className: `sr-only`,
							children: `Co robi czytelnik, jak i co z tego wynika`
						}),
						(0, f.jsx)(`thead`, { children: (0, f.jsxs)(`tr`, { children: [
							(0, f.jsx)(`th`, {
								scope: `col`,
								children: `Czynność`
							}),
							(0, f.jsx)(`th`, {
								scope: `col`,
								children: `Jak`
							}),
							(0, f.jsx)(`th`, {
								scope: `col`,
								children: `Uwaga`
							})
						] }) }),
						(0, f.jsx)(`tbody`, { children: p.map(([e, t, n]) => (0, f.jsxs)(`tr`, { children: [
							(0, f.jsx)(`th`, {
								scope: `row`,
								className: `font-semibold whitespace-nowrap`,
								children: e
							}),
							(0, f.jsx)(`td`, { children: t }),
							(0, f.jsx)(`td`, { children: n })
						] }, e)) })
					]
				})
			}),
			(0, f.jsx)(u, {
				id: `writing`,
				title: `Pisanie tekstu alternatywnego`,
				children: (0, f.jsx)(n, {
					title: `Obraz jest tym, co widzi czytelnik`,
					children: (0, f.jsx)(a, {
						good: (0, f.jsx)(l, { code: `alt="Edytor z otwartym szkicem i spisem treści po lewej"` }),
						bad: (0, f.jsx)(l, { code: `alt="zrzut ekranu"` }),
						goodText: `Napisz, co pokazuje obraz. Okno powtarza to jako nazwę obrazu.`,
						badText: `Słowo nazywające typ pliku nic nie mówi, a podpis go nie zastąpi.`
					})
				})
			}),
			(0, f.jsx)(u, {
				id: `accessibility`,
				title: `Dostępność`,
				children: (0, f.jsxs)(o, { children: [(0, f.jsxs)(`ul`, { children: [
					(0, f.jsx)(`li`, { children: `Okno modalne z nazwą; fokus zaczyna na przycisku zamknięcia, zostaje w środku i wraca na obraz.` }),
					(0, f.jsx)(`li`, { children: `Każde sterowanie to przycisk z nazwą, a powiększanie i strzałki działają z klawiatury.` }),
					(0, f.jsx)(`li`, { children: `Pozycja jest odczytywana uprzejmie, gdy się zmienia.` }),
					(0, f.jsx)(`li`, { children: `Okno używa tokenów motywu, więc jest poprawne w trzech motywach i w wymuszonych kolorach.` }),
					(0, f.jsx)(`li`, { children: `Przy ograniczonym ruchu zanikają rozjaśnienie i animacja powiększenia.` })
				] }), (0, f.jsx)(`p`, { children: `Budowane z celem WCAG 2.2 AA.` })] })
			})
		]
	});
}
export { m as ImagesPatternPl };
