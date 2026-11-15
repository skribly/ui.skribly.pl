var e = new Set([
	`page`,
	`light`,
	`dark`,
	`contrast`
]);
function t(e, t) {
	t === `compact` ? (e.getAttribute(`data-density`) !== `compact` && (e.style.minBlockSize = `${e.offsetHeight}px`), e.setAttribute(`data-density`, `compact`)) : (e.removeAttribute(`data-density`), e.style.minBlockSize = ``);
}
function n(e, { theme: n, density: r, product: i }, a = e) {
	n === `page` ? e.removeAttribute(`data-theme`) : e.setAttribute(`data-theme`, n), e.toggleAttribute(`data-sk-reinked`, n !== `page`), t(a, r);
	for (let t of e.className.split(/\s+/)) t.startsWith(`sk-product--`) && e.classList.remove(t);
	/^[a-z]+$/.test(i) && e.classList.add(`sk-product--${i}`);
}
function r(t) {
	let n = (e) => t.querySelector(`input[${e}]:checked`)?.value ?? ``, r = n(`data-sk-specimen-theme`), i = t.querySelector(`[data-sk-specimen-product]`)?.value ?? ``;
	return {
		theme: e.has(r) ? r : `page`,
		density: n(`data-sk-specimen-density`) === `compact` ? `compact` : `comfortable`,
		product: i
	};
}
function i(e) {
	if (`skReady` in e.dataset) return;
	e.dataset.skReady = ``;
	let i = e.querySelector(`form[data-sk-specimen-controls]`);
	if (!i) return;
	let a = e.closest(`.sk-hero`) ?? e, o = e.querySelector(`.sk-specimen__board`) ?? a;
	i.addEventListener(`submit`, (e) => e.preventDefault()), i.addEventListener(`change`, () => n(a, r(i), o)), e.ownerDocument.defaultView?.addEventListener(`resize`, () => {
		o.getAttribute(`data-density`) === `compact` && (t(o, `comfortable`), t(o, `compact`));
	}), n(a, r(i), o);
}
for (let e of document.querySelectorAll(`[data-sk-specimen]`)) i(e);
