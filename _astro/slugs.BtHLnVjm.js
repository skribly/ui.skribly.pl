var e = (e) => e.toLowerCase().normalize(`NFKD`).replaceAll(/[^a-z0-9]+/g, `-`).replaceAll(/^-+|-+$/g, ``);
function t(t) {
	let n = new Set();
	return t.demos.map((t, r) => {
		let i = e(t.name) || `demo-${r + 1}`;
		return n.has(i) && (i = `${i}-${r + 1}`), n.add(i), i;
	});
}
export { t };
