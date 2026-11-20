import { t as e } from "./actions.gallery.D3gSaVBT.js";
import { t } from "./agents.gallery.DwBkGx3z.js";
import { t as n } from "./assistant.gallery.C4cUxnsR.js";
import { t as r } from "./brand.gallery.D3QkYFhm.js";
import { t as i } from "./charts.gallery.BEwCeJyh.js";
import { t as a } from "./code.gallery.P1fWcW_B.js";
import { t as o } from "./content.gallery.Umfr-O_v.js";
import { t as s } from "./conversation.gallery.BYT90exu.js";
import { t as c } from "./data.gallery.CRQnLsa7.js";
import { t as l } from "./feedback.gallery.cC_KQBBS.js";
import { t as u } from "./forms.gallery.CQboeirY.js";
import { t as d } from "./icons.gallery.paWTmFqP.js";
import { t as f } from "./inbox.gallery.CLuAetVe.js";
import { n as p } from "./lightbox.gallery.BDNLFpdd.js";
import { t as m } from "./media.gallery.CwUzWwac.js";
import { t as h } from "./navigation.gallery.BFNqwLUo.js";
import { t as g } from "./onboarding.gallery.BP8qPAWi.js";
import { t as _ } from "./ops.gallery.Ckt_j18-.js";
import { t as v } from "./overlays.gallery.DVgTJBJ0.js";
import { t as y } from "./pages.gallery.0LGNLECf.js";
import { t as b } from "./search.gallery.DuuyiLf_.js";
import { t as x } from "./shell.gallery.C3v-0FOl.js";
import { t as S } from "./surfaces.gallery.FrKk3WGw.js";
import { t as C } from "./theme.gallery.BiHsfVQI.js";
import { t as w } from "./tracker.gallery.CGT2psdO.js";
import { n as T } from "./route.4Lz1KXm3.js";
import { t as E } from "./slugs.BtHLnVjm.js";
var D = Object.entries(Object.assign({
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
	"../src/inbox/inbox.gallery.tsx": f,
	"../src/lightbox/lightbox.gallery.tsx": p,
	"../src/media/media.gallery.tsx": m,
	"../src/navigation/navigation.gallery.tsx": h,
	"../src/onboarding/onboarding.gallery.tsx": g,
	"../src/ops/ops.gallery.tsx": _,
	"../src/overlays/overlays.gallery.tsx": v,
	"../src/pages/pages.gallery.tsx": y,
	"../src/search/search.gallery.tsx": b,
	"../src/shell/shell.gallery.tsx": x,
	"../src/surfaces/surfaces.gallery.tsx": S,
	"../src/theme/theme.gallery.tsx": C,
	"../src/tracker/tracker.gallery.tsx": w
})).map(([e, t]) => ({
	folder: e.split(`/`)[2] ?? ``,
	group: t.default
})).toSorted((e, t) => e.group.title.localeCompare(t.group.title));
D.map((e) => e.group);
var O = D.map(({ folder: e, group: t }) => {
	let n = {
		slug: e,
		title: t.title,
		description: t.description,
		pl: t.pl,
		folder: e,
		href: T(`components`, e),
		demos: []
	}, r = E(t);
	for (let [i, a] of t.demos.entries()) {
		let t = r[i] ?? `demo-${i + 1}`;
		n.demos.push({
			slug: t,
			demo: a,
			group: n,
			href: T(`components`, e, t)
		});
	}
	return n;
}), k = O.flatMap((e) => e.demos), A = [...new Set(k.flatMap((e) => e.demo.components))].toSorted((e, t) => e.localeCompare(t)), j = {
	groups: O.length,
	components: A.length,
	demos: k.length
};
function M(e) {
	let t = [];
	e.pl?.title || t.push(`${e.slug}: title`), e.description && !e.pl?.description && t.push(`${e.slug}: description`);
	for (let n of e.demos) n.demo.description && !n.demo.pl?.description && t.push(`${e.slug}/${n.slug}: description`), n.demo.related && !n.demo.pl?.related && t.push(`${e.slug}/${n.slug}: related`), n.demo.accessibility && !n.demo.pl?.accessibility && t.push(`${e.slug}/${n.slug}: accessibility`);
	return t;
}
O.filter((e) => M(e).length === 0);
export { j as t };
