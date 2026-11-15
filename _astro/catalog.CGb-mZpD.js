import { t as e } from "./actions.gallery.3Paa2g4C.js";
import { t } from "./agents.gallery.BJFSzMRR.js";
import { t as n } from "./assistant.gallery.DPjSwl-6.js";
import { t as r } from "./brand.gallery.DuBOPulJ.js";
import { t as i } from "./charts.gallery.BT9LmKGq.js";
import { t as a } from "./code.gallery.oNY6VgOX.js";
import { t as o } from "./content.gallery.BV6cJj7X.js";
import { t as s } from "./conversation.gallery.ZzOmD7SI.js";
import { t as c } from "./data.gallery.C7XtppG6.js";
import { t as l } from "./feedback.gallery.fH6yIR54.js";
import { t as u } from "./forms.gallery.BrVs2iX3.js";
import { t as d } from "./icons.gallery.Bs3aU3dR.js";
import { n as f } from "./lightbox.gallery.B5kj1J9H.js";
import { t as p } from "./media.gallery.D4CfeLiY.js";
import { t as m } from "./navigation.gallery.LyOsVOtD.js";
import { t as h } from "./onboarding.gallery.CAs50_ad.js";
import { t as g } from "./ops.gallery.CnzB7stf.js";
import { t as _ } from "./overlays.gallery.2h6_DYox.js";
import { t as v } from "./pages.gallery.CmedxijJ.js";
import { t as y } from "./search.gallery.BxOLC3DJ.js";
import { t as b } from "./shell.gallery.Cf8uZtrE.js";
import { t as x } from "./surfaces.gallery.B3lzHpb8.js";
import { t as S } from "./theme.gallery.C_XKmxZ-.js";
import { t as C } from "./tracker.gallery.Dr4gXGBV.js";
import { n as w } from "./route.4Lz1KXm3.js";
import { t as T } from "./slugs.BtHLnVjm.js";
var E = Object.entries(Object.assign({
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
	"../src/icons/icons.gallery.tsx": d,
	"../src/lightbox/lightbox.gallery.tsx": f,
	"../src/media/media.gallery.tsx": p,
	"../src/navigation/navigation.gallery.tsx": m,
	"../src/onboarding/onboarding.gallery.tsx": h,
	"../src/ops/ops.gallery.tsx": g,
	"../src/overlays/overlays.gallery.tsx": _,
	"../src/pages/pages.gallery.tsx": v,
	"../src/search/search.gallery.tsx": y,
	"../src/shell/shell.gallery.tsx": b,
	"../src/surfaces/surfaces.gallery.tsx": x,
	"../src/theme/theme.gallery.tsx": S,
	"../src/tracker/tracker.gallery.tsx": C
})).map(([e, t]) => ({
	folder: e.split(`/`)[2] ?? ``,
	group: t.default
})).toSorted((e, t) => e.group.title.localeCompare(t.group.title));
E.map((e) => e.group);
var D = E.map(({ folder: e, group: t }) => {
	let n = {
		slug: e,
		title: t.title,
		description: t.description,
		pl: t.pl,
		folder: e,
		href: w(`components`, e),
		demos: []
	}, r = T(t);
	for (let [i, a] of t.demos.entries()) {
		let t = r[i] ?? `demo-${i + 1}`;
		n.demos.push({
			slug: t,
			demo: a,
			group: n,
			href: w(`components`, e, t)
		});
	}
	return n;
}), O = D.flatMap((e) => e.demos), k = [...new Set(O.flatMap((e) => e.demo.components))].toSorted((e, t) => e.localeCompare(t)), A = {
	groups: D.length,
	components: k.length,
	demos: O.length
};
function j(e) {
	let t = [];
	e.pl?.title || t.push(`${e.slug}: title`), e.description && !e.pl?.description && t.push(`${e.slug}: description`);
	for (let n of e.demos) n.demo.description && !n.demo.pl?.description && t.push(`${e.slug}/${n.slug}: description`), n.demo.related && !n.demo.pl?.related && t.push(`${e.slug}/${n.slug}: related`), n.demo.accessibility && !n.demo.pl?.accessibility && t.push(`${e.slug}/${n.slug}: accessibility`);
	return t;
}
D.filter((e) => j(e).length === 0);
export { A as t };
