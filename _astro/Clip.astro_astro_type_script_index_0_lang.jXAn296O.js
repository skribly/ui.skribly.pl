var e = (e) => {
	let t = e.querySelector(`video`), n = e.dataset.clipPoster;
	t && n && (t.poster = n);
};
function t(t = document) {
	let n = [...t.querySelectorAll(`[data-clip-poster]`)];
	if (typeof IntersectionObserver > `u`) {
		n.forEach(e);
		return;
	}
	let r = new IntersectionObserver((t) => {
		for (let n of t) n.isIntersecting && (e(n.target), r.unobserve(n.target));
	}, { rootMargin: `100% 0px` });
	n.forEach((e) => r.observe(e));
}
t();
