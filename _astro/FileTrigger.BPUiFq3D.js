import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { r as t } from "./useTextField.D1QWrtYY.js";
import { E as n, Nt as r, _t as i } from "./createLucideIcon.npgQlVHx.js";
import { t as a } from "./PressResponder.7X6_iwcu.js";
import { n as o } from "./react-dom.B9zIfLd2.js";
var s = e(o(), 1), c = (0, s.forwardRef)(function(e, o) {
	let { onSelect: c, acceptedFileTypes: l, allowsMultiple: u, defaultCamera: d, children: f, acceptDirectory: p, ...m } = e, h = r(o), g = n(m, { global: !0 });
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
		onChange: (e) => c?.(i(e).files),
		capture: d,
		multiple: u,
		webkitdirectory: p ? `` : void 0
	}));
});
export { c as t };
