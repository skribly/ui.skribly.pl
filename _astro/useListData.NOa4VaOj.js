import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
var n = e(t(), 1);
function r(e) {
	let { initialItems: t = [], initialSelectedKeys: r, getKey: a = (e) => e.id ?? e.key, filter: o, initialFilterText: s = `` } = e, [c, l] = (0, n.useState)({
		items: t,
		selectedKeys: r === `all` ? `all` : new Set(r || []),
		filterText: s
	}), u = (0, n.useMemo)(() => o ? c.items.filter((e) => o(e, c.filterText)) : c.items, [
		c.items,
		c.filterText,
		o
	]);
	return {
		...c,
		items: u,
		...i({ getKey: a }, l),
		getItem(e) {
			return c.items.find((t) => a(t) === e);
		}
	};
}
function i(e, t) {
	let { cursor: n, getKey: r } = e;
	return {
		setSelectedKeys(e) {
			t((t) => ({
				...t,
				selectedKeys: e
			}));
		},
		addKeysToSelection(e) {
			t((t) => t.selectedKeys === `all` ? t : e === `all` ? {
				...t,
				selectedKeys: `all`
			} : {
				...t,
				selectedKeys: new Set([...t.selectedKeys, ...e])
			});
		},
		removeKeysFromSelection(e) {
			t((t) => {
				if (e === `all`) return {
					...t,
					selectedKeys: new Set()
				};
				let n = t.selectedKeys === `all` ? new Set(t.items.map(r)) : new Set(t.selectedKeys);
				for (let t of e) n.delete(t);
				return {
					...t,
					selectedKeys: n
				};
			});
		},
		setFilterText(e) {
			t((t) => ({
				...t,
				filterText: e
			}));
		},
		insert(e, ...n) {
			t((t) => a(t, e, ...n));
		},
		insertBefore(e, ...n) {
			t((t) => {
				let i = t.items.findIndex((t) => r?.(t) === e);
				if (i === -1) {
					if (t.items.length === 0) i = 0;
					else return t;
				}
				return a(t, i, ...n);
			});
		},
		insertAfter(e, ...n) {
			t((t) => {
				let i = t.items.findIndex((t) => r?.(t) === e);
				if (i === -1) {
					if (t.items.length === 0) i = 0;
					else return t;
				}
				return a(t, i + 1, ...n);
			});
		},
		prepend(...e) {
			t((t) => a(t, 0, ...e));
		},
		append(...e) {
			t((t) => a(t, t.items.length, ...e));
		},
		remove(...e) {
			t((t) => {
				let i = new Set(e), a = t.items.filter((e) => !i.has(r(e))), o = `all`;
				if (t.selectedKeys !== `all`) {
					o = new Set(t.selectedKeys);
					for (let t of e) o.delete(t);
				}
				return n == null && a.length === 0 && (o = new Set()), {
					...t,
					items: a,
					selectedKeys: o
				};
			});
		},
		removeSelectedItems() {
			t((e) => {
				if (e.selectedKeys === `all`) return {
					...e,
					items: [],
					selectedKeys: new Set()
				};
				let t = e.selectedKeys, n = e.items.filter((e) => !t.has(r(e)));
				return {
					...e,
					items: n,
					selectedKeys: new Set()
				};
			});
		},
		move(e, n) {
			t((t) => {
				let i = t.items.findIndex((t) => r(t) === e);
				if (i === -1) return t;
				let a = t.items.slice(), [o] = a.splice(i, 1);
				return a.splice(n, 0, o), {
					...t,
					items: a
				};
			});
		},
		moveBefore(e, n) {
			t((t) => {
				let i = t.items.findIndex((t) => r(t) === e);
				return i === -1 ? t : o(t, (Array.isArray(n) ? n : [...n]).map((e) => t.items.findIndex((t) => r(t) === e)).sort((e, t) => e - t), i);
			});
		},
		moveAfter(e, n) {
			t((t) => {
				let i = t.items.findIndex((t) => r(t) === e);
				return i === -1 ? t : o(t, (Array.isArray(n) ? n : [...n]).map((e) => t.items.findIndex((t) => r(t) === e)).sort((e, t) => e - t), i + 1);
			});
		},
		update(e, n) {
			t((t) => {
				let i = t.items.findIndex((t) => r(t) === e);
				if (i === -1) return t;
				let a;
				return a = typeof n == `function` ? n(t.items[i]) : n, {
					...t,
					items: [
						...t.items.slice(0, i),
						a,
						...t.items.slice(i + 1)
					]
				};
			});
		}
	};
}
function a(e, t, ...n) {
	return {
		...e,
		items: [
			...e.items.slice(0, t),
			...n,
			...e.items.slice(t)
		]
	};
}
function o(e, t, n) {
	n -= t.filter((e) => e < n).length;
	let r = t.map((e) => ({
		from: e,
		to: n++
	}));
	for (let e = 0; e < r.length; e++) {
		let t = r[e].from;
		for (let n = e; n < r.length; n++) r[n].from > t && r[n].from--;
	}
	for (let e = 0; e < r.length; e++) {
		let t = r[e];
		for (let n = r.length - 1; n > e; n--) {
			let e = r[n];
			e.from < t.to ? t.to++ : e.from++;
		}
	}
	let i = e.items.slice();
	for (let e of r) {
		let [t] = i.splice(e.from, 1);
		i.splice(e.to, 0, t);
	}
	return {
		...e,
		items: i
	};
}
export { r as t };
