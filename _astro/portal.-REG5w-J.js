function e(e) {
	return e ? { UNSTABLE_portalContainer: e } : {};
}
function t(e, t, n) {
	return {
		...e === void 0 ? {} : { isOpen: e },
		...t === void 0 ? {} : { defaultOpen: t },
		...n === void 0 ? {} : { onOpenChange: n }
	};
}
var n = `rounded-lg border border-border bg-surface text-fg shadow-lg outline-none data-entering:animate-fade data-exiting:animate-fade data-exiting:[animation-direction:reverse] motion-reduce:animate-none`;
export { t as n, e as r, n as t };
