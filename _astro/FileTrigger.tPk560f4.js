import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { r as t } from "./useTextField.DqlAegV0.js";
import { $t as n, ct as r, hn as i } from "./doc.C_PtMNUB.js";
import { t as a } from "./PressResponder.CeHxpY0d.js";
import { n as o } from "./react-dom.B9zIfLd2.js";
var s = e(o(), 1), c = (0, s.forwardRef)(function(e, o) {
	let { onSelect: c, acceptedFileTypes: l, allowsMultiple: u, defaultCamera: d, children: f, acceptDirectory: p, ...m } = e, h = i(o), g = r(m, { global: !0 });
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
