import { t as e } from "./actions.gallery.ctplxOqL.js";
import { t } from "./agents.gallery.CleL4ILr.js";
import { t as n } from "./assistant.gallery.CaPTNK-I.js";
import { t as r } from "./brand.gallery.J6VV8Zkv.js";
import { t as i } from "./charts.gallery.pYYl0NMB.js";
import { t as a } from "./code.gallery.D2T32rzC.js";
import { t as o } from "./content.gallery.DjziNDo3.js";
import { t as s } from "./conversation.gallery.CVZ8NDoT.js";
import { t as c } from "./data.gallery.D1RKsYyl.js";
import { t as l } from "./feedback.gallery.DSAzNfAr.js";
import { t as u } from "./forms.gallery.CJL-RBwE.js";
import { t as d } from "./media.gallery.C-fD88j8.js";
import { t as f } from "./navigation.gallery.h5OEI9xy.js";
import { t as p } from "./onboarding.gallery.Be-p9B-t.js";
import { t as m } from "./ops.gallery.DeOTKdKy.js";
import { t as h } from "./overlays.gallery.1aHHlJdo.js";
import { t as g } from "./pages.gallery.Cg8g2vlO.js";
import { t as _ } from "./search.gallery.Bi3Iyzhz.js";
import { t as v } from "./shell.gallery.jfmTtPnt.js";
import { t as y } from "./surfaces.gallery.B59o8-it.js";
import { t as b } from "./theme.gallery.pUHpAo1W.js";
import { t as x } from "./tracker.gallery.8jPKGo3M.js";
import { n as S } from "./route.4Lz1KXm3.js";
import { t as C } from "./slugs.CpBgIMWb.js";
var w = Object.entries(Object.assign({
	"../src/actions/actions.gallery.tsx": e,
	"../src/agents/agents.gallery.tsx": t,
	"../src/assistant/assistant.gallery.tsx": n,
	"../src/brand/brand.gallery.tsx": r,
	"../src/charts/charts.gallery.tsx": i,
	"../src/code/code.gallery.tsx": a,
	"../src/content/content.gallery.tsx": o,
	"../src/conversation/conversation.gallery.tsx": s,
	"../src/data/data.gallery.tsx": c,
	"../src/feedback/feedback.gallery.tsx": l,
	"../src/forms/forms.gallery.tsx": u,
	"../src/media/media.gallery.tsx": d,
	"../src/navigation/navigation.gallery.tsx": f,
	"../src/onboarding/onboarding.gallery.tsx": p,
	"../src/ops/ops.gallery.tsx": m,
	"../src/overlays/overlays.gallery.tsx": h,
	"../src/pages/pages.gallery.tsx": g,
	"../src/search/search.gallery.tsx": _,
	"../src/shell/shell.gallery.tsx": v,
	"../src/surfaces/surfaces.gallery.tsx": y,
	"../src/theme/theme.gallery.tsx": b,
	"../src/tracker/tracker.gallery.tsx": x
})).map(([e, t]) => ({
	folder: e.split(`/`)[2] ?? ``,
	group: t.default
})).toSorted((e, t) => e.group.title.localeCompare(t.group.title));
w.map((e) => e.group);
var T = w.map(({ folder: e, group: t }) => {
	let n = {
		slug: e,
		title: t.title,
		description: t.description,
		pl: t.pl,
		folder: e,
		href: S(`components`, e),
		demos: []
	}, r = C(t);
	for (let [i, a] of t.demos.entries()) {
		let t = r[i] ?? `demo-${i + 1}`;
		n.demos.push({
			slug: t,
			demo: a,
			group: n,
			href: S(`components`, e, t)
		});
	}
	return n;
}), E = T.flatMap((e) => e.demos), D = [...new Set(E.flatMap((e) => e.demo.components))].toSorted((e, t) => e.localeCompare(t)), O = {
	groups: T.length,
	components: D.length,
	demos: E.length
};
function k(e) {
	let t = [];
	e.pl?.title || t.push(`${e.slug}: title`), e.description && !e.pl?.description && t.push(`${e.slug}: description`);
	for (let n of e.demos) n.demo.description && !n.demo.pl?.description && t.push(`${e.slug}/${n.slug}: description`), n.demo.accessibility && !n.demo.pl?.accessibility && t.push(`${e.slug}/${n.slug}: accessibility`);
	return t;
}
T.filter((e) => k(e).length === 0);
export { O as t };
