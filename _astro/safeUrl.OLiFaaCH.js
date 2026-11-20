var e = /^([a-z][a-z0-9+.-]*):/i, t = /^[\\/]{2}/, n = [
	`http`,
	`https`,
	`mailto`,
	`tel`
];
function r(r, i = n) {
	let a = r.trim(), o = [...a].filter((e) => {
		let t = e.codePointAt(0) ?? 0;
		return t > 32 && t !== 127;
	}).join(``), s = e.exec(o);
	return s && !i.includes((s[1] ?? ``).toLowerCase()) || t.test(o) && !i.includes(`http`) && !i.includes(`https`) ? null : a;
}
export { r as t };
