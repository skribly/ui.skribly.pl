import { r as e, t } from "./lightbox.gallery.BDNLFpdd.js";
import { d as n, f as r, i, n as a, p as o, r as s, s as c, t as l, u } from "./doc.CpwJe6Re.js";
import { g as d } from "./useOverflow.Dq483xd0.js";
var f = d(), p = [
	[
		`Close`,
		`Close button, Escape, a click on the backdrop`,
		`Focus returns to the image that was opened`
	],
	[
		`Zoom`,
		`Plus and minus buttons, + and - keys, the wheel, a pinch, a double click or double tap`,
		`Zero or the reset button returns to the whole picture`
	],
	[
		`Pan`,
		`Drag, or the arrow keys, while zoomed in`,
		`The picture cannot leave the screen`
	],
	[
		`Previous and next`,
		`Arrow buttons, the left and right arrow keys, a swipe on a phone`,
		`Home and End go to the first and last picture`
	],
	[
		`Jump`,
		`The thumbnail row at the bottom`,
		`The current thumbnail is marked with aria-current`
	]
];
function m() {
	return (0, f.jsxs)(s, { children: [
		(0, f.jsx)(c, {
			eyebrow: `Patterns`,
			title: `Images and the lightbox`,
			lead: `A content image on any Skribly page opens large in a dialog. A reader can zoom into a screenshot, move through a group of them and get back to the page exactly where they were. The same look comes from one React component and one small script.`
		}),
		(0, f.jsx)(u, {
			id: `choose`,
			title: `Which one to use`,
			children: (0, f.jsx)(o, { children: (0, f.jsxs)(`ul`, { children: [(0, f.jsxs)(`li`, { children: [
				(0, f.jsx)(`strong`, { children: `A plain page or an Astro site.` }),
				` Do nothing: the site kit script enhances every content image in `,
				(0, f.jsx)(`code`, { children: `main` }),
				` by itself.`
			] }), (0, f.jsxs)(`li`, { children: [
				(0, f.jsx)(`strong`, { children: `A React app.` }),
				` Use `,
				(0, f.jsx)(`code`, { children: `Lightbox` }),
				` and keep the open state and the index yourself.`
			] })] }) })
		}),
		(0, f.jsxs)(u, {
			id: `site-kit`,
			title: `In a site: nothing to write`,
			children: [(0, f.jsxs)(o, { children: [
				(0, f.jsxs)(`p`, { children: [
					(0, f.jsx)(`code`, { children: `PageLayout` }),
					` includes the script. It turns an image in `,
					(0, f.jsx)(`code`, { children: `main` }),
					` into a button that opens the dialog, with the alt text in its name.`
				] }),
				(0, f.jsxs)(`ul`, { children: [
					(0, f.jsx)(`li`, { children: `Figures that share one parent open as a group.` }),
					(0, f.jsxs)(`li`, { children: [(0, f.jsx)(`code`, { children: `data-sk-lightbox-group` }), ` on any element groups the images inside it.`] }),
					(0, f.jsxs)(`li`, { children: [(0, f.jsx)(`code`, { children: `data-sk-full` }), ` on an image names a larger file than the one shown.`] })
				] }),
				(0, f.jsx)(`p`, { children: `The script leaves these alone, and so does the attribute below:` }),
				(0, f.jsxs)(`ul`, { children: [
					(0, f.jsx)(`li`, { children: `images inside a link or a button, since they already do something;` }),
					(0, f.jsx)(`li`, { children: `decorative images with an empty alt, and the header, footer and navigation;` }),
					(0, f.jsxs)(`li`, { children: [
						`anything inside, or marked with, `,
						(0, f.jsx)(`code`, { children: `data-sk-lightbox="off"` }),
						`.`
					] })
				] })
			] }), (0, f.jsx)(i, {
				label: `Markup`,
				language: `html`,
				code: `<figure>
  <img src="/shots/editor.webp" alt="The editor with a draft open" />
  <figcaption>The editor</figcaption>
</figure>

<img src="/logo-wall.webp" alt="Logos" data-sk-lightbox="off" />`,
				children: (0, f.jsx)(`p`, {
					className: `text-body text-muted`,
					children: `The first image opens in the lightbox; the second one does not.`
				})
			})]
		}),
		(0, f.jsxs)(u, {
			id: `react`,
			title: `In React`,
			children: [(0, f.jsx)(i, {
				label: `Lightbox`,
				code: `<Lightbox images={images} index={index} onIndexChange={setIndex} isOpen={open} onOpenChange={setOpen} labels={labels} />`,
				children: (0, f.jsx)(t, { images: e })
			}), (0, f.jsx)(o, { children: (0, f.jsx)(`p`, { children: `Every word is a label, including the position and the names of the thumbnails, so the app keeps its own language files.` }) })]
		}),
		(0, f.jsx)(u, {
			id: `controls`,
			title: `Controls`,
			children: (0, f.jsxs)(r, {
				label: `Lightbox controls`,
				children: [
					(0, f.jsx)(`caption`, {
						className: `sr-only`,
						children: `What a reader does, how, and what follows`
					}),
					(0, f.jsx)(`thead`, { children: (0, f.jsxs)(`tr`, { children: [
						(0, f.jsx)(`th`, {
							scope: `col`,
							children: `Action`
						}),
						(0, f.jsx)(`th`, {
							scope: `col`,
							children: `How`
						}),
						(0, f.jsx)(`th`, {
							scope: `col`,
							children: `Note`
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
			title: `Writing the alt text`,
			children: (0, f.jsx)(n, {
				title: `The picture is what the reader sees`,
				children: (0, f.jsx)(a, {
					good: (0, f.jsx)(l, { code: `alt="The editor with a draft open and the outline on the left"` }),
					bad: (0, f.jsx)(l, { code: `alt="screenshot"` }),
					goodText: `Say what the picture shows. The dialog repeats it as its name for the picture.`,
					badText: `A word that names the file type tells nothing, and a caption cannot replace it.`
				})
			})
		}),
		(0, f.jsx)(u, {
			id: `accessibility`,
			title: `Accessibility`,
			children: (0, f.jsxs)(o, { children: [(0, f.jsxs)(`ul`, { children: [
				(0, f.jsx)(`li`, { children: `A modal dialog with a name; focus starts on Close, stays inside and returns to the image.` }),
				(0, f.jsx)(`li`, { children: `Every control is a button with a name, and the zoom and arrows work from the keyboard.` }),
				(0, f.jsx)(`li`, { children: `The position is announced politely when it changes.` }),
				(0, f.jsx)(`li`, { children: `The dialog uses the theme tokens, so it is right in the three themes and in forced colours.` }),
				(0, f.jsx)(`li`, { children: `With reduced motion, the fade and the zoom animation drop out.` })
			] }), (0, f.jsx)(`p`, { children: `Built to WCAG 2.2 AA as a target.` })] })
		})
	] });
}
export { m as ImagesPattern, p as controls };
