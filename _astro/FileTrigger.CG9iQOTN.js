import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { r as t } from "./useTextField.CoryCHp2.js";
import { Qt as n, mn as r, st as i } from "./doc.DoLlUurT.js";
import { t as a } from "./PressResponder.DSDPnQkE.js";
import { n as o } from "./react-dom.B9zIfLd2.js";
var s = e(o(), 1), c = (0, s.forwardRef)(function(e, o) {
	let { onSelect: c, acceptedFileTypes: l, allowsMultiple: u, defaultCamera: d, children: f, acceptDirectory: p, ...m } = e, h = r(o), g = i(m, { global: !0 });
	return s.createElement(s.Fragment, null, s.createElement(a, { onPress: () => {
		h.current?.value && (h.current.value = ``), h.current?.click();
	} }, f), s.createElement(t, {
		...g,
		className: ``,
		type: `file`,
		ref: h,
		onClick: (e) => e.stopPropagation(),
		style: { display: `none` },
		accept: l?.toString(),
		onChange: (e) => c?.(n(e).files),
		capture: d,
		multiple: u,
		webkitdirectory: p ? `` : void 0
	}));
});
export { c as t };
