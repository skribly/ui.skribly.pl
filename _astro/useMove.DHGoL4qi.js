import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { Qt as t, at as n, bt as r, nt as i, ot as a, rn as o } from "./doc.DoLlUurT.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
var c = e(s(), 1);
function l(e) {
	let { onMoveStart: s, onMove: l, onMoveEnd: u } = e, d = (0, c.useRef)({
		didMove: !1,
		lastPosition: null,
		id: null
	}), { addGlobalListener: f, removeGlobalListener: p } = i(), m = (0, c.useCallback)((e, t, n, r) => {
		(n !== 0 || r !== 0) && (d.current.didMove || (d.current.didMove = !0, s?.({
			type: `movestart`,
			pointerType: t,
			shiftKey: e.shiftKey,
			metaKey: e.metaKey,
			ctrlKey: e.ctrlKey,
			altKey: e.altKey
		})), l?.({
			type: `move`,
			pointerType: t,
			deltaX: n,
			deltaY: r,
			shiftKey: e.shiftKey,
			metaKey: e.metaKey,
			ctrlKey: e.ctrlKey,
			altKey: e.altKey
		}));
	}, [
		s,
		l,
		d
	]), h = r(m), g = (0, c.useCallback)((e, t) => {
		a(), d.current.didMove && u?.({
			type: `moveend`,
			pointerType: t,
			shiftKey: e.shiftKey,
			metaKey: e.metaKey,
			ctrlKey: e.ctrlKey,
			altKey: e.altKey
		});
	}, [u, d]), _ = r(g);
	return { moveProps: (0, c.useMemo)(() => {
		let e = {}, r = () => {
			n(), d.current.didMove = !1;
		};
		{
			let n = (e) => {
				if (e.pointerId === d.current.id) {
					let t = e.pointerType || `mouse`;
					h(e, t, e.pageX - (d.current.lastPosition?.pageX ?? 0), e.pageY - (d.current.lastPosition?.pageY ?? 0)), d.current.lastPosition = {
						pageX: e.pageX,
						pageY: e.pageY
					};
				}
			}, i = (e) => {
				if (e.pointerId === d.current.id) {
					let r = e.pointerType || `mouse`;
					_(e, r), d.current.id = null;
					let a = o(t(e));
					p(a, `pointermove`, n, !1), p(a, `pointerup`, i, !1), p(a, `pointercancel`, i, !1);
				}
			};
			e.onPointerDown = (e) => {
				if (e.button === 0 && d.current.id == null) {
					r(), e.stopPropagation(), e.preventDefault(), d.current.lastPosition = {
						pageX: e.pageX,
						pageY: e.pageY
					}, d.current.id = e.pointerId;
					let a = o(t(e));
					f(a, `pointermove`, n, !1), f(a, `pointerup`, i, !1), f(a, `pointercancel`, i, !1);
				}
			};
		}
		let i = (e, t, n) => {
			r(), h(e, `keyboard`, t, n), _(e, `keyboard`);
		};
		return e.onKeyDown = (e) => {
			switch (e.key) {
				case `Left`:
				case `ArrowLeft`:
					e.preventDefault(), e.stopPropagation(), i(e, -1, 0);
					break;
				case `Right`:
				case `ArrowRight`:
					e.preventDefault(), e.stopPropagation(), i(e, 1, 0);
					break;
				case `Up`:
				case `ArrowUp`:
					e.preventDefault(), e.stopPropagation(), i(e, 0, -1);
					break;
				case `Down`:
				case `ArrowDown`: e.preventDefault(), e.stopPropagation(), i(e, 0, 1);
			}
		}, e;
	}, [
		f,
		p,
		d
	]) };
}
export { l as t };
