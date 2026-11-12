import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { n } from "./react-dom.B9zIfLd2.js";
import { t as r } from "./Button.DRxd_7vr.js";
import { t as i } from "./LinkButton.B5fbKc2c.js";
import { t as a } from "./Logo.tMBREW2t.js";
import { n as o, t as s } from "./jsx-runtime.yrTYNGQT.js";
import { t as c } from "./VisuallyHidden.D58qh4Cq.js";
import { r as l } from "./useFormValidation.CKcLNQoz.js";
import { t as u } from "./Link.DyGbagCu.js";
import { t as d } from "./circle-exclamation-point.DRCkYbzg.js";
import { g as f, t as p } from "./createLucideIcon.npgQlVHx.js";
import { t as m } from "./triangle-exclamation-point.BJJ-nXau.js";
import { n as h } from "./useFormReset.B5f8O4ea.js";
import { r as g } from "./useTextField.D1QWrtYY.js";
import { t as _ } from "./Text.DxhsPAdy.js";
import { t as v } from "./TextField.BfX3kCsO.js";
import { s as y } from "./slugs.CpBgIMWb.js";
import { S as b, k as x } from "./doc.D2PtmWN6.js";
import { t as S } from "./check.CUpC8LgP.js";
import { t as C } from "./Checkbox.BCm1SjuK.js";
var w = {
	name: `eye-off`,
	size: 24,
	node: [
		[`path`, {
			d: `M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,
			key: `ct8e1f`
		}],
		[`path`, {
			d: `M14.084 14.158a3 3 0 0 1-4.242-4.242`,
			key: `151rxh`
		}],
		[`path`, {
			d: `M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,
			key: `13bj9a`
		}],
		[`path`, {
			d: `m2 2 20 20`,
			key: `1ooewy`
		}]
	]
};
w.node;
var T = p(w), E = {
	name: `eye`,
	size: 24,
	node: [[`path`, {
		d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,
		key: `1nclc0`
	}], [`circle`, {
		cx: `12`,
		cy: `12`,
		r: `3`,
		key: `1v7zrd`
	}]]
};
E.node;
var D = p(E), O = t(n(), 1), k = s(), A = {
	sm: `max-w-sm`,
	md: `max-w-md`
};
function j({ title: e, description: t, brand: n, footer: r, children: i, as: a = `main`, id: s, titleId: c, headingLevel: l = 1, width: u = `sm`, fullHeight: d = !0, className: f }) {
	let p = (0, O.useId)(), m = c ?? p, h = `h${l}`;
	return (0, k.jsx)(a, {
		...s === void 0 ? {} : { id: s },
		"aria-labelledby": m,
		className: o(`flex w-full flex-col items-center bg-bg px-4 text-fg`, d ? `min-h-dvh justify-center py-10 sm:py-16` : `py-8`, f),
		children: (0, k.jsxs)(`div`, {
			className: o(`w-full min-w-0`, A[u]),
			children: [
				n ? (0, k.jsx)(`div`, {
					className: `mb-6 flex flex-col items-center gap-2 text-center`,
					children: n
				}) : null,
				(0, k.jsxs)(`div`, {
					className: `rounded-xl border border-border bg-surface p-5 shadow-md sm:p-8 forced-colors:border-[CanvasText]`,
					children: [
						(0, k.jsx)(h, {
							id: m,
							className: `text-heading font-semibold tracking-tight break-words text-fg`,
							children: e
						}),
						t ? (0, k.jsx)(`p`, {
							className: `mt-1.5 text-body break-words text-muted`,
							children: t
						}) : null,
						(0, k.jsx)(`div`, {
							className: `mt-6`,
							children: i
						})
					]
				}),
				r ? (0, k.jsx)(`div`, {
					className: `mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-caption text-muted`,
					children: r
				}) : null
			]
		})
	});
}
function M({ code: e, codeLabel: t, title: n, description: r, actions: i, brand: a, children: s, as: l = `main`, id: u, headingLevel: d = 1, fullHeight: f = !0, focusOnMount: p = !1, className: m }) {
	let h = (0, O.useId)(), g = (0, O.useRef)(null), _ = `h${d}`;
	return (0, O.useEffect)(() => {
		p && g.current?.focus();
	}, [p]), (0, k.jsx)(l, {
		...u === void 0 ? {} : { id: u },
		"aria-labelledby": h,
		className: o(`flex w-full flex-col items-center bg-bg px-4 text-fg`, f ? `min-h-dvh justify-center py-12 sm:py-20` : `py-8`, m),
		children: (0, k.jsxs)(`div`, {
			className: `w-full max-w-xl min-w-0`,
			children: [
				a ? (0, k.jsx)(`div`, {
					className: `mb-8 flex items-center gap-2`,
					children: a
				}) : null,
				e === void 0 ? null : (0, k.jsx)(`p`, {
					"aria-hidden": !0,
					className: `font-display text-[clamp(3.5rem,16vw,6.5rem)] leading-none font-bold tracking-tight text-accent-text tabular-nums`,
					children: e
				}),
				(0, k.jsxs)(_, {
					ref: g,
					id: h,
					tabIndex: p ? -1 : void 0,
					className: `mt-4 text-page font-semibold break-words text-fg outline-none sm:text-display`,
					children: [e === void 0 ? null : (0, k.jsx)(c, { children: t ? `${t} ${e}. ` : `${e}. ` }), n]
				}),
				r ? (0, k.jsx)(`div`, {
					className: `mt-3 max-w-prose text-body leading-relaxed break-words text-muted sm:text-title`,
					children: r
				}) : null,
				i ? (0, k.jsx)(`div`, {
					className: `mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center [&>*]:w-full sm:[&>*]:w-auto`,
					children: i
				}) : null,
				s ? (0, k.jsx)(`div`, {
					className: `mt-10 border-t border-border pt-6 text-body text-muted`,
					children: s
				}) : null
			]
		})
	});
}
var N = `flex h-control-lg w-full min-w-0 items-center rounded-md border border-border-strong bg-input text-fg transition-colors hover:border-muted has-[input:focus-visible]:outline-(length:--sk-focus-width) has-[input:focus-visible]:outline-offset-(--sk-focus-offset) has-[input:focus-visible]:outline-focus has-[input:focus-visible]:outline-solid has-[[aria-invalid=true]]:border-danger has-[input:disabled]:cursor-not-allowed has-[input:disabled]:border-border has-[input:disabled]:bg-sunken forced-colors:border-[ButtonText]`, P = `h-full min-w-0 flex-1 bg-transparent px-3 text-base text-fg outline-none placeholder:text-muted sm:text-body disabled:cursor-not-allowed disabled:text-muted`, F = `me-1 inline-grid size-control-sm shrink-0 cursor-pointer place-items-center rounded-sm text-muted transition-colors outline-none data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected data-selected:text-fg data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-focus-visible:outline-solid data-disabled:cursor-not-allowed data-disabled:opacity-50`;
function I({ id: e, name: t, label: n, type: r, autoComplete: i, value: a, onChange: o, description: s, error: c, isRequired: l = !1, isDisabled: u = !1, revealLabel: p, capsLockWarning: b }) {
	let [x, S] = (0, O.useState)(!1), [C, w] = (0, O.useState)(!1), E = r === `password`, A = (0, O.useCallback)((e) => {
		E && b && w(e.getModifierState(`CapsLock`));
	}, [E, b]), j = (0, O.useCallback)(() => w(!1), []);
	return (0, k.jsxs)(v, {
		id: e,
		name: t,
		type: E && x ? `text` : r,
		autoComplete: i,
		value: a,
		onChange: o,
		isRequired: l,
		isDisabled: u,
		isInvalid: !!c,
		validationBehavior: `aria`,
		className: `flex min-w-0 flex-col gap-1.5`,
		children: [
			(0, k.jsx)(f, {
				className: `w-fit text-caption font-medium text-fg`,
				children: n
			}),
			(0, k.jsxs)(`div`, {
				className: N,
				children: [(0, k.jsx)(g, {
					className: P,
					spellCheck: !1,
					autoCapitalize: r === `text` ? void 0 : `none`,
					onKeyDown: A,
					onKeyUp: A,
					onBlur: j
				}), E && p ? (0, k.jsx)(y, {
					"aria-label": p,
					"aria-controls": e,
					isSelected: x,
					onChange: S,
					isDisabled: u,
					className: F,
					children: x ? (0, k.jsx)(T, {
						"aria-hidden": !0,
						className: `size-4`
					}) : (0, k.jsx)(D, {
						"aria-hidden": !0,
						className: `size-4`
					})
				}) : null]
			}),
			(0, k.jsxs)(_, {
				slot: `description`,
				elementType: `div`,
				className: `flex min-w-0 flex-col text-caption break-words text-muted`,
				children: [s ? (0, k.jsx)(`span`, { children: s }) : null, (0, k.jsx)(`output`, {
					className: `block`,
					children: C && b ? (0, k.jsxs)(`span`, {
						className: `flex items-start gap-1.5 pt-1 font-medium text-warn`,
						children: [(0, k.jsx)(m, {
							"aria-hidden": !0,
							className: `mt-px size-3.5 shrink-0`
						}), (0, k.jsx)(`span`, {
							className: `min-w-0`,
							children: b
						})]
					}) : null
				})]
			}),
			(0, k.jsxs)(h, {
				className: `flex items-start gap-1.5 text-caption font-medium break-words text-danger`,
				children: [(0, k.jsx)(d, {
					"aria-hidden": !0,
					className: `mt-px size-3.5 shrink-0`
				}), (0, k.jsx)(`span`, {
					className: `min-w-0`,
					children: c
				})]
			})
		]
	});
}
var L = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, R = `inline-flex min-h-6 items-center rounded-sm text-body font-medium text-accent-text underline underline-offset-2 hover:decoration-2 data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-solid data-focus-visible:outline-focus`;
function z({ notice: e }) {
	let t = e?.tone === `danger`, n = e ? (0, k.jsx)(b, {
		tone: e.tone,
		title: e.title,
		...e.toneLabel ? { toneLabel: e.toneLabel } : {},
		className: `mb-5`,
		children: e.text
	}) : null;
	return (0, k.jsxs)(k.Fragment, { children: [(0, k.jsx)(`div`, {
		"aria-live": `assertive`,
		"aria-atomic": `true`,
		children: t ? n : null
	}), (0, k.jsx)(`div`, {
		"aria-live": `polite`,
		"aria-atomic": `true`,
		children: t ? null : n
	})] });
}
function B(e) {
	let t = e.currentTarget.dataset.field, n = t ? e.currentTarget.ownerDocument.getElementById(t) : null;
	n && (e.preventDefault(), n.scrollIntoView?.({ block: `center` }), n.focus({ preventScroll: !0 }));
}
function V({ title: e, toneLabel: t, headingLevel: n, items: r, summaryRef: i }) {
	return (0, k.jsx)(`div`, {
		ref: i,
		tabIndex: -1,
		className: `rounded-md`,
		children: r.length > 0 ? (0, k.jsx)(b, {
			tone: `danger`,
			title: e,
			headingLevel: n,
			...t ? { toneLabel: t } : {},
			className: `mb-5`,
			children: (0, k.jsx)(`ul`, {
				className: `mt-1 flex flex-col gap-0.5`,
				children: r.map((e) => (0, k.jsx)(`li`, { children: (0, k.jsx)(`a`, {
					href: `#${e.id}`,
					"data-field": e.id,
					onClick: B,
					className: `inline-block min-h-6 py-0.5 font-medium text-fg underline underline-offset-2 hover:decoration-2`,
					children: e.message
				}) }, e.id))
			})
		}) : null
	});
}
function H({ fields: e, validate: t, serverErrors: n, isPending: r }) {
	let i = e.some((e) => !!n?.[e]), [a, o] = (0, O.useState)(!1), [s, c] = (0, O.useState)(() => new Set()), [l, u] = (0, O.useState)(+!!i), d = (0, O.useRef)(null), f = JSON.stringify(e.map((e) => n?.[e] ?? ``)), [p, m] = (0, O.useState)({
		signature: f,
		isPending: r
	});
	if (p.signature !== f || p.isPending !== r) {
		let e = p.signature !== f || !r;
		m({
			signature: f,
			isPending: r
		}), e && c(new Set()), e && i && u((e) => e + 1);
	}
	let h = a ? t() : {}, g = {};
	for (let t of e) {
		let e = h[t] ?? (s.has(t) ? void 0 : n?.[t]);
		e && (g[t] = e);
	}
	return (0, O.useEffect)(() => {
		l > 0 && d.current?.focus();
	}, [l]), {
		errors: g,
		touch: (0, O.useCallback)((e) => c((t) => t.has(e) ? t : new Set(t).add(e)), []),
		check: (0, O.useCallback)(() => {
			o(!0);
			let n = t(), r = e.every((e) => !n[e]);
			return r || u((e) => e + 1), r;
		}, [e, t]),
		summaryRef: d
	};
}
function U({ name: e, label: t, isSelected: n, onChange: r, isDisabled: i = !1 }) {
	return (0, k.jsxs)(C, {
		name: e,
		value: `1`,
		isSelected: n,
		onChange: r,
		isDisabled: i,
		className: `group inline-flex min-h-6 cursor-pointer items-center gap-2 py-1 text-body text-fg data-disabled:cursor-not-allowed data-disabled:opacity-50`,
		children: [(0, k.jsx)(`span`, {
			"aria-hidden": !0,
			className: `inline-grid size-[1.125rem] shrink-0 place-items-center rounded-sm border border-border-strong bg-input text-accent-fg transition-colors group-data-hovered:border-muted group-data-selected:border-accent group-data-selected:bg-accent group-data-focus-visible:outline-(length:--sk-focus-width) group-data-focus-visible:outline-offset-(--sk-focus-offset) group-data-focus-visible:outline-focus group-data-focus-visible:outline-solid forced-colors:border-[ButtonText] forced-colors:group-data-selected:bg-[Highlight] forced-colors:group-data-selected:text-[HighlightText]`,
			children: (0, k.jsx)(S, {
				className: `size-3.5 opacity-0 group-data-selected:opacity-100`,
				strokeWidth: 3
			})
		}), (0, k.jsx)(`span`, {
			className: `min-w-0`,
			children: t
		})]
	});
}
var W = [`email`, `password`];
function G({ labels: e, onSubmit: t, action: n, method: i = `post`, hiddenFields: a, isPending: s = !1, notice: c, fieldErrors: d, forgotHref: f, defaultEmail: p = ``, "aria-label": m, "aria-labelledby": h, summaryHeadingLevel: g = 2, className: _, children: v }) {
	let y = (0, O.useId)(), b = (0, O.useMemo)(() => ({
		email: `${y}-email`,
		password: `${y}-password`
	}), [y]), [x, S] = (0, O.useState)(p), [C, w] = (0, O.useState)(``), [T, E] = (0, O.useState)(!1), [D, A] = (0, O.useState)(!1), j = s || D, { errors: M, touch: N, check: P, summaryRef: F } = H({
		fields: W,
		validate: (0, O.useCallback)(() => {
			let t = {}, n = x.trim();
			return n ? L.test(n) || (t.email = e.emailInvalid) : t.email = e.emailRequired, C || (t.password = e.passwordRequired), t;
		}, [
			x,
			C,
			e.emailRequired,
			e.emailInvalid,
			e.passwordRequired
		]),
		serverErrors: d,
		isPending: j
	}), B = (0, O.useCallback)((e) => {
		S(e), N(`email`);
	}, [N]), G = (0, O.useCallback)((e) => {
		w(e), N(`password`);
	}, [N]), K = (0, O.useCallback)((e) => {
		if (j || !P()) {
			e.preventDefault();
			return;
		}
		if (!t) return;
		e.preventDefault();
		let n = t({
			email: x.trim(),
			password: C,
			remember: T
		});
		n instanceof Promise && (A(!0), n.catch(() => void 0).finally(() => A(!1)));
	}, [
		j,
		P,
		t,
		x,
		C,
		T
	]), q = W.flatMap((e) => {
		let t = M[e];
		return t ? [{
			id: b[e],
			message: t
		}] : [];
	});
	return (0, k.jsxs)(l, {
		...n === void 0 ? {} : { action: n },
		method: i,
		onSubmit: K,
		validationBehavior: `aria`,
		...m === void 0 ? {} : { "aria-label": m },
		...h === void 0 ? {} : { "aria-labelledby": h },
		"aria-busy": j || void 0,
		className: o(`flex min-w-0 flex-col`, _),
		children: [
			(0, k.jsx)(z, { notice: c }),
			(0, k.jsx)(V, {
				title: e.errorSummary,
				toneLabel: e.errorWord,
				headingLevel: g,
				items: q,
				summaryRef: F
			}),
			a ? Object.entries(a).map(([e, t]) => (0, k.jsx)(`input`, {
				type: `hidden`,
				name: e,
				value: t
			}, e)) : null,
			(0, k.jsxs)(`div`, {
				className: `flex flex-col gap-4`,
				children: [
					(0, k.jsx)(I, {
						id: b.email,
						name: `email`,
						type: `email`,
						autoComplete: `username`,
						label: e.email,
						value: x,
						onChange: B,
						error: M.email,
						isRequired: !0
					}),
					(0, k.jsx)(I, {
						id: b.password,
						name: `password`,
						type: `password`,
						autoComplete: `current-password`,
						label: e.password,
						value: C,
						onChange: G,
						error: M.password,
						isRequired: !0,
						revealLabel: e.showPassword,
						capsLockWarning: e.capsLock
					}),
					e.remember || f && e.forgot ? (0, k.jsxs)(`div`, {
						className: `flex flex-wrap items-center justify-between gap-x-4 gap-y-1`,
						children: [e.remember ? (0, k.jsx)(U, {
							name: `remember`,
							label: e.remember,
							isSelected: T,
							onChange: E
						}) : (0, k.jsx)(`span`, {}), f && e.forgot ? (0, k.jsx)(u, {
							href: f,
							className: R,
							children: e.forgot
						}) : null]
					}) : null,
					(0, k.jsx)(r, {
						type: `submit`,
						size: `lg`,
						isPending: j,
						...e.pending ? { pendingLabel: e.pending } : {},
						className: `mt-1 w-full`,
						children: e.submit
					}),
					v ? (0, k.jsx)(`div`, {
						className: `text-center text-body text-muted`,
						children: v
					}) : null
				]
			})
		]
	});
}
function K(e) {
	let { labels: t, onSubmit: n, action: i, method: a = `post`, hiddenFields: s, isPending: c = !1, notice: d, fieldErrors: f, backHref: p, defaultEmail: m = ``, "aria-label": h, "aria-labelledby": g, summaryHeadingLevel: _ = 2, className: v } = e, y = e.step === `reset` ? e : null, b = y?.minLength ?? 8, S = !y?.hideEmail, C = (0, O.useId)(), w = (0, O.useMemo)(() => ({
		email: `${C}-email`,
		password: `${C}-password`,
		confirmation: `${C}-confirmation`
	}), [C]), [T, E] = (0, O.useState)(m), [D, A] = (0, O.useState)(``), [j, M] = (0, O.useState)(``), [N, P] = (0, O.useState)(!1), F = c || N, B = y !== null, U = (0, O.useMemo)(() => {
		let e = S ? [`email`] : [];
		return B ? [
			...e,
			`password`,
			`confirmation`
		] : e;
	}, [S, B]), { errors: W, touch: G, check: K, summaryRef: q } = H({
		fields: U,
		validate: (0, O.useCallback)(() => {
			let e = {}, n = T.trim();
			if (S && (n ? L.test(n) || (e.email = t.emailInvalid) : e.email = t.emailRequired), y) {
				let t = y.labels;
				D ? D.length < b && (e.password = t.passwordTooShort) : e.password = t.passwordRequired, j ? D && j !== D && (e.confirmation = t.passwordMismatch) : e.confirmation = t.confirmationRequired;
			}
			return e;
		}, [
			T,
			D,
			j,
			S,
			y,
			b,
			t.emailRequired,
			t.emailInvalid
		]),
		serverErrors: f,
		isPending: F
	}), J = (0, O.useCallback)((e) => {
		E(e), G(`email`);
	}, [G]), Y = (0, O.useCallback)((e) => {
		A(e), G(`password`);
	}, [G]), X = (0, O.useCallback)((e) => {
		M(e), G(`confirmation`);
	}, [G]), Z = (0, O.useCallback)((e) => {
		if (F || !K()) {
			e.preventDefault();
			return;
		}
		if (!n) return;
		e.preventDefault();
		let t = n(y ? {
			email: T.trim(),
			password: D
		} : { email: T.trim() });
		t instanceof Promise && (P(!0), t.catch(() => void 0).finally(() => P(!1)));
	}, [
		F,
		K,
		n,
		y,
		T,
		D
	]), Q = U.flatMap((e) => {
		let t = W[e];
		return t ? [{
			id: w[e],
			message: t
		}] : [];
	});
	return (0, k.jsxs)(l, {
		...i === void 0 ? {} : { action: i },
		method: a,
		onSubmit: Z,
		validationBehavior: `aria`,
		...h === void 0 ? {} : { "aria-label": h },
		...g === void 0 ? {} : { "aria-labelledby": g },
		"aria-busy": F || void 0,
		className: o(`flex min-w-0 flex-col`, v),
		children: [
			(0, k.jsx)(z, { notice: d }),
			(0, k.jsx)(V, {
				title: t.errorSummary,
				toneLabel: t.errorWord,
				headingLevel: _,
				items: Q,
				summaryRef: q
			}),
			t.intro ? (0, k.jsx)(`p`, {
				className: `mb-5 text-body text-muted`,
				children: t.intro
			}) : null,
			s ? Object.entries(s).map(([e, t]) => (0, k.jsx)(`input`, {
				type: `hidden`,
				name: e,
				value: t
			}, e)) : null,
			S ? null : (0, k.jsx)(`input`, {
				type: `hidden`,
				name: `email`,
				value: T
			}),
			(0, k.jsxs)(`div`, {
				className: `flex flex-col gap-4`,
				children: [
					S ? (0, k.jsx)(I, {
						id: w.email,
						name: `email`,
						type: `email`,
						autoComplete: y ? `username` : `email`,
						label: t.email,
						value: T,
						onChange: J,
						error: W.email,
						isRequired: !0
					}) : null,
					y ? (0, k.jsxs)(k.Fragment, { children: [(0, k.jsx)(I, {
						id: w.password,
						name: `password`,
						type: `password`,
						autoComplete: `new-password`,
						label: y.labels.password,
						description: y.labels.passwordHint,
						value: D,
						onChange: Y,
						error: W.password,
						isRequired: !0,
						revealLabel: y.labels.showPassword,
						capsLockWarning: y.labels.capsLock
					}), (0, k.jsx)(I, {
						id: w.confirmation,
						name: `password_confirmation`,
						type: `password`,
						autoComplete: `new-password`,
						label: y.labels.confirmation,
						value: j,
						onChange: X,
						error: W.confirmation,
						isRequired: !0,
						revealLabel: y.labels.showPassword,
						capsLockWarning: y.labels.capsLock
					})] }) : null,
					(0, k.jsx)(r, {
						type: `submit`,
						size: `lg`,
						isPending: F,
						...t.pending ? { pendingLabel: t.pending } : {},
						className: `mt-1 w-full`,
						children: t.submit
					}),
					p && t.back ? (0, k.jsxs)(u, {
						href: p,
						className: o(R, `gap-1.5 self-center`),
						children: [(0, k.jsx)(x, {
							"aria-hidden": !0,
							className: `size-4 shrink-0`
						}), t.back]
					}) : null
				]
			})
		]
	});
}
var q = e({ default: () => oe }), J = {
	email: `Email`,
	password: `Password`,
	submit: `Sign in`,
	pending: `Signing in`,
	remember: `Keep me signed in`,
	forgot: `Forgot your password?`,
	showPassword: `Show password`,
	capsLock: `Caps Lock is on.`,
	emailRequired: `Enter your email address.`,
	emailInvalid: `Enter an email address like name@example.com.`,
	passwordRequired: `Enter your password.`,
	errorSummary: `Check the form`,
	errorWord: `Error`
}, Y = {
	email: `Email`,
	submit: `Send reset link`,
	pending: `Sending`,
	intro: `Enter the address you sign in with and we will email you a link to choose a new password.`,
	back: `Back to sign in`,
	emailRequired: `Enter your email address.`,
	emailInvalid: `Enter an email address like name@example.com.`,
	errorSummary: `Check the form`,
	errorWord: `Error`
}, X = {
	...Y,
	submit: `Save new password`,
	pending: `Saving`,
	intro: void 0,
	password: `New password`,
	confirmation: `Repeat new password`,
	passwordHint: `At least 12 characters. A short sentence is easy to remember.`,
	showPassword: `Show password`,
	capsLock: `Caps Lock is on.`,
	passwordRequired: `Choose a new password.`,
	passwordTooShort: `Use at least 12 characters.`,
	confirmationRequired: `Repeat the new password.`,
	passwordMismatch: `The two passwords do not match.`
}, Z = (e) => new Promise((t) => setTimeout(t, e));
function Q() {
	return (0, k.jsxs)(k.Fragment, { children: [(0, k.jsx)(a, {
		kind: `tracker`,
		size: 48
	}), (0, k.jsxs)(`p`, {
		className: `text-title font-semibold`,
		children: [`Skribly `, (0, k.jsx)(`span`, {
			className: `text-accent-text`,
			children: `Tracker`
		})]
	})] });
}
function $() {
	let [e, t] = (0, O.useState)();
	return {
		notice: e,
		submit: async ({ password: e }) => {
			t(void 0), await Z(900), t(e === `skribly` ? {
				tone: `ok`,
				title: `Signed in`,
				text: `Taking you to your projects.`,
				toneLabel: `Success`
			} : {
				tone: `danger`,
				title: `Sign in failed`,
				text: `The email or password is wrong. The demo password is skribly.`,
				toneLabel: `Error`
			});
		}
	};
}
function ee() {
	let e = (0, O.useId)(), { notice: t, submit: n } = $();
	return (0, k.jsx)(j, {
		as: `div`,
		fullHeight: !1,
		headingLevel: 4,
		titleId: e,
		title: `Sign in`,
		description: `Use the account your team invited you with.`,
		brand: (0, k.jsx)(Q, {}),
		footer: (0, k.jsxs)(k.Fragment, { children: [(0, k.jsx)(`a`, {
			href: `#language`,
			className: `inline-flex min-h-6 items-center underline underline-offset-2`,
			children: `Polski`
		}), (0, k.jsx)(`span`, { children: `© Skribly` })] }),
		className: `rounded-lg`,
		children: (0, k.jsx)(G, {
			labels: J,
			"aria-labelledby": e,
			summaryHeadingLevel: 5,
			forgotHref: `#forgot`,
			onSubmit: n,
			...t ? { notice: t } : {}
		})
	});
}
function te() {
	let { notice: e, submit: t } = $();
	return (0, k.jsx)(`div`, {
		className: `max-w-sm`,
		children: (0, k.jsxs)(G, {
			labels: J,
			"aria-label": `Sign in`,
			summaryHeadingLevel: 4,
			forgotHref: `#forgot`,
			onSubmit: t,
			...e ? { notice: e } : {},
			children: [`No account yet? `, (0, k.jsx)(`a`, {
				href: `#invite`,
				className: `font-medium text-accent-text underline underline-offset-2`,
				children: `Ask for an invite`
			})]
		})
	});
}
function ne() {
	let [e, t] = (0, O.useState)();
	return (0, k.jsx)(`div`, {
		className: `max-w-sm`,
		children: (0, k.jsx)(K, {
			step: `request`,
			labels: Y,
			"aria-label": `Reset password`,
			summaryHeadingLevel: 4,
			backHref: `#login`,
			onSubmit: async () => {
				t(void 0), await Z(900), t({
					tone: `ok`,
					title: `Check your inbox`,
					text: `If an account uses that address, a link is on its way. It works for 60 minutes.`,
					toneLabel: `Success`
				});
			},
			...e ? { notice: e } : {}
		})
	});
}
function re() {
	let [e, t] = (0, O.useState)({
		tone: `warn`,
		title: `This link expires in 10 minutes`,
		toneLabel: `Warning`
	});
	return (0, k.jsx)(`div`, {
		className: `max-w-sm`,
		children: (0, k.jsx)(K, {
			step: `reset`,
			labels: X,
			minLength: 12,
			defaultEmail: `ada@example.com`,
			"aria-label": `Choose a new password`,
			summaryHeadingLevel: 4,
			backHref: `#login`,
			onSubmit: async () => {
				await Z(900), t({
					tone: `ok`,
					title: `Password changed`,
					text: `Sign in with your new password.`,
					toneLabel: `Success`
				});
			},
			notice: e
		})
	});
}
function ie() {
	return (0, k.jsx)(M, {
		as: `div`,
		fullHeight: !1,
		headingLevel: 4,
		code: 404,
		codeLabel: `Error`,
		title: `Page not found`,
		description: `The address may be mistyped, or the page has moved. Your work is safe.`,
		brand: (0, k.jsx)(a, {
			size: 28,
			label: `Skribly`
		}),
		actions: (0, k.jsxs)(k.Fragment, { children: [(0, k.jsx)(i, {
			href: `#home`,
			variant: `primary`,
			children: `Go to the start page`
		}), (0, k.jsx)(i, {
			href: `#help`,
			variant: `outline`,
			children: `Get help`
		})] }),
		className: `rounded-lg`,
		children: (0, k.jsxs)(`div`, {
			lang: `pl`,
			children: [(0, k.jsx)(`p`, {
				className: `font-medium text-fg`,
				children: `Nie znaleziono strony`
			}), (0, k.jsx)(`p`, { children: (0, k.jsx)(`a`, {
				href: `#pl`,
				className: `inline-flex min-h-6 items-center underline underline-offset-2`,
				children: `Wróć na stronę główną`
			}) })]
		})
	});
}
function ae() {
	return (0, k.jsx)(M, {
		as: `div`,
		fullHeight: !1,
		headingLevel: 4,
		code: 503,
		codeLabel: `Error`,
		title: `Back in a few minutes`,
		description: `We are updating the service. Nothing you saved is lost; try again shortly.`,
		actions: (0, k.jsxs)(k.Fragment, { children: [(0, k.jsx)(r, {
			variant: `primary`,
			children: `Try again`
		}), (0, k.jsx)(i, {
			href: `#status`,
			variant: `outline`,
			children: `Service status`
		})] }),
		className: `rounded-lg`,
		children: (0, k.jsxs)(`p`, {
			className: `text-caption`,
			children: [`Request id: `, (0, k.jsx)(`code`, {
				className: `break-all`,
				children: `a1f9-22c0-7e41`
			})]
		})
	});
}
var oe = {
	title: `Pages`,
	description: `Whole screens for signing in, resetting a password and reporting an error. They reflow from 320px up, keep every message as a tone, an icon and a word, and are built to WCAG 2.2 AA as a target.`,
	pl: {
		title: `Strony`,
		description: `Całe ekrany do logowania, resetowania hasła i zgłaszania błędu. Układają się od 320 px, każdy komunikat mają jako ton, ikonę i słowo, a budowane są z celem WCAG 2.2 AA.`
	},
	demos: [
		{
			name: `AuthLayout`,
			components: [`AuthLayout`],
			description: `The frame of the sign in and password reset screens: a brand on top, one card with the page heading, and room for a language switch underneath. Use it for any short task a reader does before entering an app.`,
			usage: `<AuthLayout id="content" title="Sign in" brand={<Logo kind="tracker" />} titleId="auth-title">
  <LoginForm labels={labels} aria-labelledby="auth-title" onSubmit={signIn} />
</AuthLayout>`,
			accessibility: `Renders the main landmark, named by its heading, so it works as a skip link target. The card grows with its content and the page scrolls instead of clipping, at 200% zoom and at 320px width alike.`,
			pl: {
				description: `Rama ekranów logowania i resetowania hasła: marka na górze, jedna karta z nagłówkiem strony i miejsce na przełącznik języka pod spodem. Użyj jej do każdego krótkiego zadania, które czytelnik wykonuje przed wejściem do aplikacji.`,
				accessibility: `Renderuje landmark main nazwany swoim nagłówkiem, więc działa jako cel linku pomijającego. Karta rośnie razem z zawartością, a strona się przewija zamiast ucinać treść, zarówno przy powiększeniu 200%, jak i przy szerokości 320 px.`
			},
			render: () => (0, k.jsx)(ee, {})
		},
		{
			name: `LoginForm`,
			components: [`LoginForm`],
			description: `Email and password sign in with remember me, a password reset link and a show password button. Checks run in the browser first; the server adds field errors and a notice. Try any password, then "skribly".`,
			usage: `<LoginForm
  labels={labels}
  forgotHref="/forgot-password"
  onSubmit={async (values) => {
    const result = await signIn(values)
    if (!result.ok) setNotice({ tone: 'danger', title: 'Sign in failed', toneLabel: 'Error' })
  }}
  notice={notice}
/>`,
			accessibility: `A failed submit puts focus on an error summary whose links move focus to each field. Every field error is tied to its input with aria-describedby and aria-invalid and clears as soon as the field is fixed. A failed sign in is read at once from an assertive region; other notices wait their turn. The submit button stays focused while pending and its spinner is named. Caps Lock is reported politely, and the show password button keeps one name with a pressed state.`,
			pl: {
				description: `Logowanie e-mailem i hasłem z opcją zapamiętania, linkiem do resetu hasła i przyciskiem pokazującym hasło. Najpierw sprawdzenia działają w przeglądarce; serwer dodaje błędy pól i komunikat. Wpisz dowolne hasło, a potem „skribly”.`,
				accessibility: `Nieudane wysłanie ustawia fokus na podsumowaniu błędów, którego linki przenoszą fokus do każdego pola. Każdy błąd pola jest powiązany z jego polem przez aria-describedby i aria-invalid i znika, gdy tylko pole zostanie poprawione. Nieudane logowanie jest odczytywane od razu z regionu typu assertive; inne komunikaty czekają na swoją kolej. Przycisk wysyłania zachowuje fokus w trakcie oczekiwania, a jego wskaźnik ładowania ma nazwę. Caps Lock jest zgłaszany w trybie polite, a przycisk pokazujący hasło ma jedną nazwę i stan wciśnięcia.`
			},
			render: () => (0, k.jsx)(te, {})
		},
		{
			name: `PasswordResetForm: request a link`,
			components: [`PasswordResetForm`],
			description: `The first step of a reset: the reader asks for a link by email. Say that a link is on its way whether or not the address has an account.`,
			usage: `<PasswordResetForm step="request" labels={labels} backHref="/login" onSubmit={sendLink} notice={notice} />`,
			accessibility: `The same summary, field errors and live notices as LoginForm. The back link is underlined and has a 24px target. The address field uses autocomplete="email".`,
			pl: {
				description: `Pierwszy krok resetu: użytkownik prosi o link e-mailem. Napisz, że link jest w drodze, niezależnie od tego, czy adres ma konto.`,
				accessibility: `To samo podsumowanie, te same błędy pól i komunikaty na żywo co w LoginForm. Link powrotu jest podkreślony i ma rozmiar celu 24 px. Pole adresu używa autocomplete="email".`
			},
			render: () => (0, k.jsx)(ne, {})
		},
		{
			name: `PasswordResetForm: choose a new password`,
			components: [`PasswordResetForm`],
			description: `The second step, opened from the emailed link: a new password typed twice. Pass the token in hiddenFields, and hideEmail when the link already names the account.`,
			usage: `<PasswordResetForm
  step="reset"
  labels={labels}
  minLength={12}
  defaultEmail={email}
  hiddenFields={{ token }}
  onSubmit={savePassword}
/>`,
			accessibility: `The password rules sit under the field as its description, so they are read before typing. Both fields use autocomplete="new-password", so password managers suggest a strong one. A warning that the link expires is a tone, an icon and a word.`,
			pl: {
				description: `Drugi krok, otwierany z linku z e-maila: nowe hasło wpisane dwa razy. Przekaż token w hiddenFields oraz hideEmail, gdy link już wskazuje konto.`,
				accessibility: `Zasady hasła stoją pod polem jako jego opis, więc są odczytywane przed wpisywaniem. Oba pola używają autocomplete="new-password", dzięki czemu menedżery haseł podpowiadają mocne hasło. Ostrzeżenie, że link wygasa, to ton, ikona i słowo.`
			},
			render: () => (0, k.jsx)(re, {})
		},
		{
			name: `ErrorPage`,
			components: [`ErrorPage`],
			description: `A full page for 404, 403, 500 and 503: what happened in plain words and the ways out. Children add a second language, a request id or a search box.`,
			usage: `<ErrorPage
  code={404}
  codeLabel="Error"
  title="Page not found"
  description="The address may be mistyped."
  actions={<LinkButton href="/" variant="primary">Go to the start page</LinkButton>}
/>`,
			accessibility: `The large number is decoration; the heading reads "Error 404. Page not found". Text in another language carries its lang attribute. In a single page app, focusOnMount moves focus to the heading so screen readers hear the error. The actions stack full width on a phone.`,
			pl: {
				description: `Pełna strona dla błędów 404, 403, 500 i 503: co się stało prostymi słowami oraz wyjścia z sytuacji. Children dodają drugi język, identyfikator żądania albo pole wyszukiwania.`,
				accessibility: `Duża liczba jest dekoracją; nagłówek brzmi „Error 404. Page not found”. Tekst w innym języku ma atrybut lang. W aplikacji jednostronicowej focusOnMount przenosi fokus na nagłówek, aby czytniki ekranu odczytały błąd. Akcje układają się na telefonie w pełnej szerokości.`
			},
			render: () => (0, k.jsx)(ie, {})
		},
		{
			name: `ErrorPage: service unavailable`,
			components: [`ErrorPage`],
			description: `The same page for a server error, with a retry button and a request id to quote to support.`,
			usage: `<ErrorPage code={503} codeLabel="Error" title="Back in a few minutes" actions={<Button onPress={retry}>Try again</Button>}>
  <p>Request id: <code>{requestId}</code></p>
</ErrorPage>`,
			accessibility: `Retry is a real button and keeps focus; the request id wraps instead of widening the page at 320px.`,
			pl: {
				description: `Ta sama strona dla błędu serwera, z przyciskiem ponowienia i identyfikatorem żądania do podania pomocy technicznej.`,
				accessibility: `Ponów jest prawdziwym przyciskiem i zachowuje fokus; identyfikator żądania się zawija, zamiast poszerzać stronę przy 320 px.`
			},
			render: () => (0, k.jsx)(ae, {})
		}
	]
};
export { q as t };
