import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { B as t, L as n, Nt as r, Rt as i, V as a, tt as o } from "./useOverflow.Dq483xd0.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
var c = e(s(), 1);
function l(e) {
	let { onMoveStart: s, onMove: l, onMoveEnd: u } = e, d = (0, c.useRef)({
		didMove: !1,
		lastPosition: null,
		id: null
	}), { addGlobalListener: f, removeGlobalListener: p } = n(), m = (0, c.useCallback)((e, t, n, r) => {
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
	]), h = o(m), g = (0, c.useCallback)((e, t) => {
		a(), d.current.didMove && u?.({
			type: `moveend`,
			pointerType: t,
			shiftKey: e.shiftKey,
			metaKey: e.metaKey,
			ctrlKey: e.ctrlKey,
			altKey: e.altKey
		});
	}, [u, d]), _ = o(g);
	return { moveProps: (0, c.useMemo)(() => {
		let e = {}, n = () => {
			t(), d.current.didMove = !1;
		};
		{
			let t = (e) => {
				if (e.pointerId === d.current.id) {
					let t = e.pointerType || `mouse`;
					h(e, t, e.pageX - (d.current.lastPosition?.pageX ?? 0), e.pageY - (d.current.lastPosition?.pageY ?? 0)), d.current.lastPosition = {
						pageX: e.pageX,
						pageY: e.pageY
					};
				}
			}, a = (e) => {
				if (e.pointerId === d.current.id) {
					let n = e.pointerType || `mouse`;
					_(e, n), d.current.id = null;
					let o = i(r(e));
					p(o, `pointermove`, t, !1), p(o, `pointerup`, a, !1), p(o, `pointercancel`, a, !1);
				}
			};
			e.onPointerDown = (e) => {
				if (e.button === 0 && d.current.id == null) {
					n(), e.stopPropagation(), e.preventDefault(), d.current.lastPosition = {
						pageX: e.pageX,
						pageY: e.pageY
					}, d.current.id = e.pointerId;
					let o = i(r(e));
					f(o, `pointermove`, t, !1), f(o, `pointerup`, a, !1), f(o, `pointercancel`, a, !1);
				}
			};
		}
		let a = (e, t, r) => {
			n(), h(e, `keyboard`, t, r), _(e, `keyboard`);
		};
		return e.onKeyDown = (e) => {
			switch (e.key) {
				case `Left`:
				case `ArrowLeft`:
					e.preventDefault(), e.stopPropagation(), a(e, -1, 0);
					break;
				case `Right`:
				case `ArrowRight`:
					e.preventDefault(), e.stopPropagation(), a(e, 1, 0);
					break;
				case `Up`:
				case `ArrowUp`:
					e.preventDefault(), e.stopPropagation(), a(e, 0, -1);
					break;
				case `Down`:
				case `ArrowDown`: e.preventDefault(), e.stopPropagation(), a(e, 0, 1);
			}
		}, e;
	}, [
		f,
		p,
		d
	]) };
}
export { l as t };
