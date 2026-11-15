import { t as e } from "./actions.gallery.BtvJXlkk.js";
import { t } from "./agents.gallery.BNSDC7-X.js";
import { t as n } from "./assistant.gallery.DlY0XDHj.js";
import { t as r } from "./brand.gallery.Z9GrIFjc.js";
import { t as i } from "./charts.gallery.CdeXgmeT.js";
import { t as a } from "./code.gallery.C5zaRjKy.js";
import { t as o } from "./content.gallery.DfC76Dd4.js";
import { t as s } from "./conversation.gallery.QhIjFhCD.js";
import { t as c } from "./data.gallery.DjWa37CL.js";
import { t as l } from "./feedback.gallery.DmNeb246.js";
import { t as u } from "./forms.gallery.ChU0oxAY.js";
import { t as d } from "./icons.gallery.g5DVwTSY.js";
import { t as f } from "./media.gallery.D1jXjI-9.js";
import { t as p } from "./navigation.gallery.Bm2k3yUU.js";
import { t as m } from "./onboarding.gallery.Ct2iOBnr.js";
import { t as h } from "./ops.gallery.DShzZEHM.js";
import { t as g } from "./overlays.gallery.COJVX1n3.js";
import { t as _ } from "./pages.gallery.B3YDmXuh.js";
import { t as v } from "./search.gallery.KSpqNB-N.js";
import { t as y } from "./shell.gallery.CC-YNouN.js";
import { t as b } from "./surfaces.gallery.CYSAcv_5.js";
import { t as x } from "./theme.gallery.i5_BP5xA.js";
import { t as S } from "./tracker.gallery.CNepq0Kd.js";
import { n as C } from "./route.4Lz1KXm3.js";
import { t as w } from "./slugs.BtHLnVjm.js";
var T = Object.entries(Object.assign({
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
	"../src/media/media.gallery.tsx": f,
	"../src/navigation/navigation.gallery.tsx": p,
	"../src/onboarding/onboarding.gallery.tsx": m,
	"../src/ops/ops.gallery.tsx": h,
	"../src/overlays/overlays.gallery.tsx": g,
	"../src/pages/pages.gallery.tsx": _,
	"../src/search/search.gallery.tsx": v,
	"../src/shell/shell.gallery.tsx": y,
	"../src/surfaces/surfaces.gallery.tsx": b,
	"../src/theme/theme.gallery.tsx": x,
	"../src/tracker/tracker.gallery.tsx": S
})).map(([e, t]) => ({
	folder: e.split(`/`)[2] ?? ``,
	group: t.default
})).toSorted((e, t) => e.group.title.localeCompare(t.group.title));
T.map((e) => e.group);
var E = T.map(({ folder: e, group: t }) => {
	let n = {
		slug: e,
		title: t.title,
		description: t.description,
		pl: t.pl,
		folder: e,
		href: C(`components`, e),
		demos: []
	}, r = w(t);
	for (let [i, a] of t.demos.entries()) {
		let t = r[i] ?? `demo-${i + 1}`;
		n.demos.push({
			slug: t,
			demo: a,
			group: n,
			href: C(`components`, e, t)
		});
	}
	return n;
}), D = E.flatMap((e) => e.demos), O = [...new Set(D.flatMap((e) => e.demo.components))].toSorted((e, t) => e.localeCompare(t)), k = {
	groups: E.length,
	components: O.length,
	demos: D.length
};
function A(e) {
	let t = [];
	e.pl?.title || t.push(`${e.slug}: title`), e.description && !e.pl?.description && t.push(`${e.slug}: description`);
	for (let n of e.demos) n.demo.description && !n.demo.pl?.description && t.push(`${e.slug}/${n.slug}: description`), n.demo.related && !n.demo.pl?.related && t.push(`${e.slug}/${n.slug}: related`), n.demo.accessibility && !n.demo.pl?.accessibility && t.push(`${e.slug}/${n.slug}: accessibility`);
	return t;
}
E.filter((e) => A(e).length === 0);
export { k as t };
