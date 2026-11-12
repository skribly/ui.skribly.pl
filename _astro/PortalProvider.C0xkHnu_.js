import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
var n = e(t(), 1), r = (0, n.createContext)({});
function i(e) {
	let { getContainer: t } = e, { getContainer: i } = a();
	return n.createElement(r.Provider, { value: { getContainer: t === null ? void 0 : t ?? i } }, e.children);
}
function a() {
	return (0, n.useContext)(r) ?? {};
}
export { a as n, i as t };
