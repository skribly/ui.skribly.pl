import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { I as n, L as r, M as i, Q as a, j as o, w as s } from "./doc.C_PtMNUB.js";
import { n as c } from "./react-dom.B9zIfLd2.js";
import { t as l } from "./Button.df3csLrB.js";
import { t as u } from "./CopyButton.r6Q2ZE4z.js";
import { t as d } from "./IconButton.Bqgi69Iz.js";
import { t as f } from "./BulkActionBar.DcMUjY7F.js";
import { t as p } from "./EmptyState.Cz4N1Arf.js";
import { t as m } from "./Segmented.bN-s_dst.js";
import { t as h } from "./Spinner.CPYol_Wu.js";
import { t as g } from "./Range.EVYBgtPx.js";
import { t as _ } from "./Select.Dfm71gCx.js";
import { n as v } from "./useFormReset.Cf-RVIHo.js";
import { t as y } from "./Group.CmTJ4Xbt.js";
import { r as b } from "./useTextField.DqlAegV0.js";
import { t as x } from "./NumberField.B4wdwuiC.js";
import { t as S } from "./Text.3KJW7jIs.js";
import { n as ee, r as te } from "./GridList.Be-Qku2e.js";
import { t as C } from "./useDragAndDrop.Ds4OKgBP.js";
import { c as w } from "./ListBox.Bq8IE31A.js";
import { t as T } from "./DragHandle.DYAIsE1N.js";
import { t as E } from "./Checkbox.TwqnTrT7.js";
import { x as D } from "./useDrop.2oG49goR.js";
import { t as O } from "./FileTrigger.tPk560f4.js";
import { t as k } from "./ProgressBar.Dky8J3J2.js";
import { t as A } from "./SearchField.D0jMEgX3.js";
import { t as ne } from "./FilterChips.5ZP8dYMp.js";
import { t as j } from "./Modal.BisTtmxg.js";
import { t as M } from "./Checkbox.CgGCLldd.js";
import { t as N } from "./TextField.CrOSYYfu.js";
import { t as re } from "./DropZone.L5mHKABK.js";
var P = t(c(), 1);
function F(e, t, n) {
	return Math.min(Math.max(e, t), Math.max(t, n));
}
function I(e, t, n) {
	let r = t * .8, i = n * .8;
	return e && (r / i > e ? r = i * e : i = r / e), L({
		x: (t - r) / 2,
		y: (n - i) / 2,
		width: r,
		height: i
	});
}
function L(e) {
	return {
		x: Math.round(e.x),
		y: Math.round(e.y),
		width: Math.round(e.width),
		height: Math.round(e.height)
	};
}
function R(e, t, n, r) {
	let i = F(e.width, 16, n), a = F(e.height, 16, r);
	return t && (a = i / t, a > r && (a = r, i = a * t)), L({
		x: F(e.x, 0, n - i),
		y: F(e.y, 0, r - a),
		width: i,
		height: a
	});
}
function z(e, t, n, r, i, a, o) {
	if (t === `move`) return L({
		...e,
		x: F(e.x + n, 0, a - e.width),
		y: F(e.y + r, 0, o - e.height)
	});
	let s = t.includes(`w`), c = t.includes(`n`), l = s ? e.x + e.width : e.x, u = c ? e.y + e.height : e.y, d = s ? l : a - l, f = c ? u : o - u, p = F(s ? e.width - n : e.width + n, 16, d), m = F(c ? e.height - r : e.height + r, 16, f);
	return i && (m = p / i, m > f && (m = f, p = m * i)), L({
		x: s ? l - p : l,
		y: c ? u - m : u,
		width: p,
		height: m
	});
}
function B(e, t, n) {
	let [r, i] = (0, P.useState)(t);
	return [e === void 0 ? r : e, (0, P.useCallback)((t) => {
		e === void 0 && i(t), n?.(t);
	}, [e, n])];
}
var V = `outline-none data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-offset-(--sk-focus-offset) data-focus-visible:outline-focus data-focus-visible:outline-solid`, H = `outline-none focus-visible:outline-(length:--sk-focus-width) focus-visible:outline-offset-(--sk-focus-offset) focus-visible:outline-focus focus-visible:outline-solid`, U = `bg-sunken bg-[repeating-conic-gradient(var(--sk-hover)_0%_25%,transparent_0%_50%)] bg-size-[16px_16px] bg-center`, W = {
	square: `aspect-square`,
	video: `aspect-video`,
	wide: `aspect-[12/5]`,
	portrait: `aspect-[3/4]`,
	auto: ``
}, ie = `flex h-control-md w-full min-w-0 items-center rounded-md border border-border-strong bg-input text-fg transition-colors hover:border-muted has-[input:focus-visible]:outline-(length:--sk-focus-width) has-[input:focus-visible]:outline-offset-(--sk-focus-offset) has-[input:focus-visible]:outline-focus has-[input:focus-visible]:outline-solid data-invalid:border-danger data-disabled:cursor-not-allowed data-disabled:border-border data-disabled:bg-sunken data-disabled:text-muted`, G = `h-full min-w-0 flex-1 bg-transparent px-2.5 text-base text-fg tabular-nums outline-none placeholder:text-muted sm:text-body disabled:cursor-not-allowed`, K = n(), ae = {
	ok: i(`status.ok`),
	info: i(`status.info`),
	warn: i(`status.warning`),
	danger: i(`status.danger`)
}, q = {
	ok: `text-ok`,
	info: `text-info`,
	warn: `text-warn`,
	danger: `text-danger`
};
function oe({ notice: e, className: t }) {
	let n = ae[e.tone];
	return (0, K.jsxs)(`span`, {
		"data-tone": e.tone,
		className: r(`flex min-w-0 items-start gap-1 font-medium`, q[e.tone], t),
		children: [(0, K.jsx)(n, {
			"aria-hidden": !0,
			focusable: `false`,
			className: `mt-px size-3.5 shrink-0`
		}), (0, K.jsx)(`span`, {
			className: `min-w-0 wrap-break-word`,
			children: e.label
		})]
	});
}
function se({ id: e, children: t, className: n }) {
	return (0, K.jsxs)(`p`, {
		id: e,
		className: r(`flex items-start gap-1.5 text-caption font-medium wrap-break-word text-danger`, n),
		children: [(0, K.jsx)(o, {
			name: `status.error`,
			"aria-hidden": !0,
			focusable: `false`,
			className: `mt-px size-3.5 shrink-0`
		}), (0, K.jsx)(`span`, {
			className: `min-w-0`,
			children: t
		})]
	});
}
function J({ label: e, description: t, errorMessage: n, suffix: i, optionalLabel: s, className: c, ...l }) {
	let u = n != null && n !== !1 && n !== ``;
	return (0, K.jsxs)(x, {
		...l,
		...u ? { isInvalid: !0 } : {},
		className: r(`group/number flex min-w-0 flex-col gap-1.5`, c),
		children: [
			(0, K.jsxs)(a, {
				className: `w-fit text-caption font-medium text-fg`,
				children: [
					(0, K.jsx)(`span`, { children: e }),
					s && !l.isRequired ? (0, K.jsxs)(K.Fragment, { children: [` `, (0, K.jsx)(`span`, {
						className: `font-normal text-muted`,
						children: s
					})] }) : null,
					l.isRequired ? (0, K.jsx)(`span`, {
						"aria-hidden": `true`,
						className: `ml-0.5 text-danger`,
						children: `*`
					}) : null
				]
			}),
			(0, K.jsxs)(y, {
				className: ie,
				children: [(0, K.jsx)(b, { className: G }), i ? (0, K.jsx)(`span`, {
					"aria-hidden": `true`,
					className: `shrink-0 pe-2.5 text-caption text-muted`,
					children: i
				}) : null]
			}),
			t ? (0, K.jsx)(S, {
				slot: `description`,
				className: `text-caption wrap-break-word text-muted`,
				children: t
			}) : null,
			(0, K.jsx)(v, {
				className: `flex items-start gap-1.5 text-caption font-medium wrap-break-word text-danger`,
				children: (e) => (0, K.jsxs)(K.Fragment, { children: [(0, K.jsx)(o, {
					name: `status.error`,
					"aria-hidden": !0,
					focusable: `false`,
					className: `mt-px size-3.5 shrink-0`
				}), (0, K.jsx)(`span`, {
					className: `min-w-0`,
					children: u ? n : e.validationErrors.join(` `)
				})] })
			})
		]
	});
}
var ce = {
	x: .5,
	y: .5
};
function le({ src: e, imageWidth: t, imageHeight: n, labels: i, ratios: a, mode: c, defaultMode: u = `crop`, onModeChange: d, ratio: f, defaultRatio: p, onRatioChange: v, crop: y, defaultCrop: b, onCropChange: x, focal: S, defaultFocal: ee = ce, onFocalChange: te, onApplyCrop: C, onSaveFocal: w, onRotate: T, onFlip: E, previews: D, status: O, isBusy: k = !1, busyLabel: A, container: ne, className: j }) {
	let M = (0, P.useId)(), N = (0, P.useId)(), re = (0, P.useRef)(null), [F, L] = (0, P.useState)({
		width: 0,
		height: 0
	}), z = t ?? F.width, V = n ?? F.height, H = z > 0 && V > 0, [W, ie] = B(c, u, d), [G, ae] = B(f, p ?? a[0]?.id ?? ``, v), q = a.find((e) => e.id === G)?.ratio ?? null, [oe, se] = B(y, b, void 0), [le, de] = (0, P.useState)(`${e} ${z}x${V}`);
	le !== `${e} ${z}x${V}` && (de(`${e} ${z}x${V}`), y === void 0 && oe !== b && se(void 0));
	let Y = (0, P.useMemo)(() => oe ?? (H ? I(q, z, V) : {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	}), [
		oe,
		H,
		q,
		z,
		V
	]), X = (0, P.useCallback)((e) => {
		se(e), x?.(e);
	}, [se, x]), [Z, he] = B(S, ee, te), ge = (0, P.useCallback)((e) => {
		let t = e.currentTarget;
		L({
			width: t.naturalWidth,
			height: t.naturalHeight
		});
	}, []), _e = (0, P.useCallback)((e) => {
		if (e === null) return;
		let t = String(e);
		ae(t);
		let n = a.find((e) => e.id === t)?.ratio ?? null;
		H && X(I(n, z, V));
	}, [
		ae,
		a,
		H,
		X,
		z,
		V
	]), Q = (0, P.useCallback)((e) => (t) => {
		Number.isNaN(t) || X(R({
			...Y,
			[e]: t
		}, q, z, V));
	}, [
		Y,
		q,
		z,
		V,
		X
	]), ve = (0, P.useMemo)(() => Q(`x`), [Q]), ye = (0, P.useMemo)(() => Q(`y`), [Q]), be = (0, P.useMemo)(() => Q(`width`), [Q]), $ = (0, P.useMemo)(() => Q(`height`), [Q]), xe = (0, P.useCallback)(() => X(I(q, z, V)), [
		X,
		q,
		z,
		V
	]), Se = (0, P.useCallback)(() => C?.(Y), [C, Y]), Ce = (0, P.useCallback)(() => w?.(Z), [w, Z]), we = (0, P.useCallback)((e) => he({
		...Z,
		x: e
	}), [he, Z]), Te = (0, P.useCallback)((e) => he({
		...Z,
		y: e
	}), [he, Z]), Ee = (0, P.useCallback)(() => T?.(-90), [T]), De = (0, P.useCallback)(() => T?.(90), [T]), Oe = (0, P.useCallback)(() => E?.(`horizontal`), [E]), ke = (0, P.useCallback)(() => E?.(`vertical`), [E]), Ae = (0, P.useMemo)(() => [{
		value: `crop`,
		label: i.crop
	}, {
		value: `focal`,
		label: i.focal
	}], [i.crop, i.focal]), je = (0, P.useMemo)(() => a.map((e) => ({
		id: e.id,
		label: e.label
	})), [a]), Me = (0, P.useMemo)(() => ({
		style: `percent`,
		maximumFractionDigits: 0
	}), []), Ne = A ? { pendingLabel: A } : {}, Pe = [
		T && i.rotateLeft ? {
			key: `left`,
			label: i.rotateLeft,
			icon: (0, K.jsx)(o, {
				name: `action.reset`,
				"aria-hidden": `true`
			}),
			press: Ee
		} : null,
		T && i.rotateRight ? {
			key: `right`,
			label: i.rotateRight,
			icon: (0, K.jsx)(o, {
				name: `action.retry`,
				"aria-hidden": `true`
			}),
			press: De
		} : null,
		E && i.flipHorizontal ? {
			key: `h`,
			label: i.flipHorizontal,
			icon: (0, K.jsx)(o, {
				name: `media.flip-horizontal`,
				"aria-hidden": `true`
			}),
			press: Oe
		} : null,
		E && i.flipVertical ? {
			key: `v`,
			label: i.flipVertical,
			icon: (0, K.jsx)(o, {
				name: `media.flip-vertical`,
				"aria-hidden": `true`
			}),
			press: ke
		} : null
	].filter((e) => e !== null), Fe = O?.tone === `danger`, Ie = O ? (0, K.jsx)(s, {
		tone: O.tone,
		toneLabel: O.toneLabel,
		title: O.message
	}) : null;
	return (0, K.jsx)(`div`, {
		className: r(`@container min-w-0`, j),
		children: (0, K.jsxs)(`div`, {
			className: `grid min-w-0 overflow-hidden rounded-lg border border-border bg-surface @3xl:grid-cols-[minmax(0,1fr)_20rem]`,
			children: [(0, K.jsx)(`section`, {
				"aria-label": i.stage,
				className: `flex min-h-56 min-w-0 items-center justify-center bg-sunken p-3 @md:p-4`,
				children: (0, K.jsxs)(`div`, {
					ref: re,
					className: `relative inline-block max-w-full touch-none select-none`,
					children: [
						(0, K.jsx)(`img`, {
							src: e,
							alt: ``,
							draggable: !1,
							onLoad: ge,
							className: r(`block max-h-[min(60vh,32rem)] max-w-full`, U, W === `focal` && `cursor-crosshair`)
						}),
						W === `crop` && H ? (0, K.jsx)(fe, {
							crop: Y,
							width: z,
							height: V,
							ratio: q,
							stage: re,
							label: i.cropBox,
							...i.cropBoxRole ? { roleLabel: i.cropBoxRole } : {},
							valueText: i.cropValueText ? i.cropValueText(Y) : `${Y.x}, ${Y.y}, ${Y.width}×${Y.height}`,
							hintId: M,
							onChange: X
						}) : null,
						W === `focal` ? (0, K.jsx)(pe, {
							focal: Z,
							stage: re,
							onChange: he
						}) : null
					]
				})
			}), (0, K.jsxs)(`div`, {
				className: `flex min-w-0 flex-col gap-4 border-t border-border p-4 @3xl:border-t-0 @3xl:border-l`,
				children: [
					(0, K.jsx)(`output`, {
						"aria-live": `polite`,
						className: `block empty:hidden`,
						children: O && !Fe ? Ie : null
					}),
					(0, K.jsx)(`div`, {
						role: `alert`,
						className: `empty:hidden`,
						children: Fe ? Ie : null
					}),
					Pe.length > 0 ? (0, K.jsxs)(`section`, {
						className: `flex flex-col gap-2`,
						children: [i.transform ? (0, K.jsx)(`h3`, {
							className: `text-caption font-semibold text-fg`,
							children: i.transform
						}) : null, (0, K.jsx)(`div`, {
							className: `grid grid-cols-1 gap-2 @xs:grid-cols-2`,
							children: Pe.map((e) => (0, K.jsxs)(l, {
								variant: `outline`,
								size: `sm`,
								onPress: e.press,
								isPending: k,
								...Ne,
								className: `justify-start`,
								children: [e.icon, e.label]
							}, e.key))
						})]
					}) : null,
					(0, K.jsx)(m, {
						label: i.modes,
						options: Ae,
						value: W,
						onChange: ie,
						size: `sm`,
						className: `self-start`
					}),
					W === `crop` ? (0, K.jsxs)(`section`, {
						className: `flex flex-col gap-3`,
						children: [
							(0, K.jsx)(_, {
								label: i.ratio,
								items: je,
								value: G,
								onChange: _e,
								container: ne ?? null
							}),
							(0, K.jsx)(`p`, {
								id: M,
								className: `text-caption wrap-break-word text-muted`,
								children: i.cropHint
							}),
							(0, K.jsxs)(`div`, {
								className: `grid grid-cols-2 gap-3`,
								children: [
									(0, K.jsx)(J, {
										label: i.cropX,
										value: Y.x,
										onChange: ve,
										minValue: 0,
										maxValue: Math.max(0, z - Y.width),
										isDisabled: !H,
										...ue(i.pixelUnit)
									}),
									(0, K.jsx)(J, {
										label: i.cropY,
										value: Y.y,
										onChange: ye,
										minValue: 0,
										maxValue: Math.max(0, V - Y.height),
										isDisabled: !H,
										...ue(i.pixelUnit)
									}),
									(0, K.jsx)(J, {
										label: i.cropWidth,
										value: Y.width,
										onChange: be,
										minValue: 16,
										maxValue: z || 16,
										isDisabled: !H,
										...ue(i.pixelUnit)
									}),
									(0, K.jsx)(J, {
										label: i.cropHeight,
										value: Y.height,
										onChange: $,
										minValue: 16,
										maxValue: V || 16,
										isDisabled: !H,
										...ue(i.pixelUnit)
									})
								]
							}),
							(0, K.jsxs)(`div`, {
								className: `flex flex-wrap gap-2`,
								children: [C ? (0, K.jsx)(l, {
									size: `sm`,
									onPress: Se,
									isDisabled: !H,
									isPending: k,
									...Ne,
									children: i.applyCrop
								}) : null, (0, K.jsx)(l, {
									size: `sm`,
									variant: `outline`,
									onPress: xe,
									isDisabled: !H || k,
									children: i.resetCrop
								})]
							})
						]
					}) : (0, K.jsxs)(`section`, {
						className: `flex flex-col gap-3`,
						children: [
							(0, K.jsx)(`p`, {
								id: N,
								className: `text-caption wrap-break-word text-muted`,
								children: i.focalHint
							}),
							(0, K.jsx)(g, {
								label: i.focalX,
								value: Z.x,
								onChange: we,
								minValue: 0,
								maxValue: 1,
								step: .01,
								formatOptions: Me
							}),
							(0, K.jsx)(g, {
								label: i.focalY,
								value: Z.y,
								onChange: Te,
								minValue: 0,
								maxValue: 1,
								step: .01,
								formatOptions: Me
							}),
							D && D.length > 0 ? (0, K.jsxs)(`figure`, {
								className: `m-0 flex flex-col gap-2`,
								children: [i.previews ? (0, K.jsx)(`figcaption`, {
									className: `text-caption font-semibold text-fg`,
									children: i.previews
								}) : null, (0, K.jsx)(`div`, {
									className: `flex flex-wrap items-end gap-3`,
									children: D.map((t) => (0, K.jsx)(me, {
										src: e,
										focal: Z,
										preview: t
									}, t.label))
								})]
							}) : null,
							w ? (0, K.jsx)(l, {
								size: `sm`,
								onPress: Ce,
								isPending: k,
								...Ne,
								className: `self-start`,
								children: i.saveFocal
							}) : null
						]
					}),
					k && A ? (0, K.jsx)(h, {
						label: A,
						showLabel: !0,
						size: `sm`
					}) : null
				]
			})]
		})
	});
}
function ue(e) {
	return e ? { suffix: e } : {};
}
var de = [
	{
		handle: `nw`,
		place: `-start-3 -top-3 cursor-nwse-resize`
	},
	{
		handle: `ne`,
		place: `-end-3 -top-3 cursor-nesw-resize`
	},
	{
		handle: `sw`,
		place: `-start-3 -bottom-3 cursor-nesw-resize`
	},
	{
		handle: `se`,
		place: `-end-3 -bottom-3 cursor-nwse-resize`
	}
], Y = [
	`top`,
	`bottom`,
	`left`,
	`right`
];
function X(e, t) {
	return `${e / t * 100}%`;
}
function fe({ crop: e, width: t, height: n, ratio: i, stage: a, label: o, roleLabel: s, valueText: c, hintId: l, onChange: u }) {
	let d = (0, P.useRef)(null), f = (0, P.useCallback)((r) => {
		let i = a.current?.getBoundingClientRect();
		i && i.width !== 0 && i.height !== 0 && (r.preventDefault(), r.stopPropagation(), r.currentTarget.setPointerCapture?.(r.pointerId), d.current = {
			handle: r.currentTarget.dataset.handle ?? `move`,
			x: r.clientX,
			y: r.clientY,
			crop: e,
			scaleX: t / i.width,
			scaleY: n / i.height
		});
	}, [
		a,
		e,
		t,
		n
	]), p = (0, P.useCallback)((e) => {
		let r = d.current;
		if (!r) return;
		let a = (e.clientX - r.x) * r.scaleX, o = (e.clientY - r.y) * r.scaleY;
		u(z(r.crop, r.handle, a, o, i, t, n));
	}, [
		u,
		i,
		t,
		n
	]), m = (0, P.useCallback)((e) => {
		d.current = null, e.currentTarget.releasePointerCapture?.(e.pointerId);
	}, []), h = Math.max(1, Math.round(Math.min(t, n) / 100)), g = (0, P.useCallback)((r) => u(z(e, `move`, Number(r.target.value) - e.x, 0, i, t, n)), [
		e,
		i,
		t,
		n,
		u
	]), _ = (0, P.useCallback)((r) => {
		let a = {
			ArrowLeft: [-h, 0],
			ArrowRight: [h, 0],
			ArrowUp: [0, -h],
			ArrowDown: [0, h]
		}[r.key];
		if (!a) return;
		r.preventDefault();
		let [o, s] = a;
		r.shiftKey ? u(z(e, `se`, i && o === 0 ? s * i : o, s, i, t, n)) : u(z(e, `move`, o, s, i, t, n));
	}, [
		e,
		i,
		t,
		n,
		h,
		u
	]), v = (0, P.useMemo)(() => ({
		left: X(e.x, t),
		top: X(e.y, n),
		width: X(e.width, t),
		height: X(e.height, n)
	}), [
		e,
		t,
		n
	]), y = (0, P.useMemo)(() => {
		let r = X(e.y, n), i = X(e.y + e.height, n);
		return [
			{
				left: 0,
				top: 0,
				right: 0,
				height: r
			},
			{
				left: 0,
				top: i,
				right: 0,
				bottom: 0
			},
			{
				left: 0,
				top: r,
				height: X(e.height, n),
				width: X(e.x, t)
			},
			{
				left: X(e.x + e.width, t),
				top: r,
				right: 0,
				height: X(e.height, n)
			}
		];
	}, [
		e,
		t,
		n
	]);
	return (0, K.jsxs)(K.Fragment, { children: [y.map((e, t) => (0, K.jsx)(`span`, {
		"aria-hidden": `true`,
		style: e,
		className: `pointer-events-none absolute bg-scrim forced-colors:hidden`
	}, Y[t])), (0, K.jsxs)(`div`, {
		"data-handle": `move`,
		"data-crop": `${e.x},${e.y},${e.width},${e.height}`,
		style: v,
		onPointerDown: f,
		onPointerMove: p,
		onPointerUp: m,
		onPointerCancel: m,
		className: `absolute cursor-move border-2 border-bg shadow-[0_0_0_1px_var(--sk-fg)] has-[input:focus-visible]:outline-(length:--sk-focus-width) has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-focus has-[input:focus-visible]:outline-solid forced-colors:border-[Highlight]`,
		children: [
			(0, K.jsx)(`input`, {
				type: `range`,
				"aria-label": o,
				...s ? { "aria-roledescription": s } : {},
				"aria-describedby": l,
				"aria-valuetext": c,
				min: 0,
				max: Math.max(0, t - e.width),
				step: h,
				value: e.x,
				onChange: g,
				onKeyDown: _,
				className: `sr-only`
			}),
			de.map((e) => (0, K.jsx)(`span`, {
				"aria-hidden": `true`,
				"data-handle": e.handle,
				onPointerDown: f,
				onPointerMove: p,
				onPointerUp: m,
				onPointerCancel: m,
				className: r(`absolute grid size-6 place-items-center`, e.place),
				children: (0, K.jsx)(`span`, { className: `size-3.5 rounded-sm border-2 border-bg bg-accent shadow-[0_0_0_1px_var(--sk-fg)] forced-colors:bg-[Highlight]` })
			}, e.handle)),
			(0, K.jsx)(`span`, {
				"aria-hidden": `true`,
				className: `pointer-events-none absolute start-1 bottom-1 rounded-sm bg-fg px-1.5 py-px text-label text-bg tabular-nums`,
				children: `${e.width}×${e.height}`
			})
		]
	})] });
}
function pe({ focal: e, stage: t, onChange: n }) {
	let r = (0, P.useRef)(!1), i = (0, P.useCallback)((e) => {
		let r = t.current?.getBoundingClientRect();
		r && r.width !== 0 && r.height !== 0 && n({
			x: Math.round(F((e.clientX - r.left) / r.width, 0, 1) * 100) / 100,
			y: Math.round(F((e.clientY - r.top) / r.height, 0, 1) * 100) / 100
		});
	}, [t, n]), a = (0, P.useCallback)((e) => {
		e.preventDefault(), r.current = !0, e.currentTarget.setPointerCapture?.(e.pointerId), i(e);
	}, [i]), o = (0, P.useCallback)((e) => {
		r.current && i(e);
	}, [i]), s = (0, P.useCallback)((e) => {
		r.current = !1, e.currentTarget.releasePointerCapture?.(e.pointerId);
	}, []), c = (0, P.useMemo)(() => ({
		left: `${e.x * 100}%`,
		top: `${e.y * 100}%`
	}), [e]);
	return (0, K.jsx)(`span`, {
		"aria-hidden": `true`,
		"data-focal": `${e.x},${e.y}`,
		onPointerDown: a,
		onPointerMove: o,
		onPointerUp: s,
		onPointerCancel: s,
		className: `absolute inset-0 cursor-crosshair`,
		children: (0, K.jsx)(`span`, {
			style: c,
			className: `pointer-events-none absolute grid size-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-bg bg-accent/50 shadow-[0_0_0_1px_var(--sk-fg)] forced-colors:border-[Highlight]`,
			children: (0, K.jsx)(`span`, { className: `size-1.5 rounded-full bg-bg` })
		})
	});
}
function me({ src: e, focal: t, preview: n }) {
	let r = (0, P.useMemo)(() => ({ aspectRatio: String(n.ratio) }), [n.ratio]), i = (0, P.useMemo)(() => ({ objectPosition: `${t.x * 100}% ${t.y * 100}%` }), [t]);
	return (0, K.jsxs)(`div`, {
		className: `flex w-20 flex-col gap-1`,
		children: [(0, K.jsx)(`span`, {
			style: r,
			className: `block w-full overflow-hidden rounded-sm border border-border`,
			children: (0, K.jsx)(`img`, {
				src: e,
				alt: ``,
				style: i,
				className: `block size-full object-cover`
			})
		}), (0, K.jsx)(`span`, {
			className: `text-label wrap-break-word text-muted`,
			children: n.label
		})]
	});
}
var Z = i(`media.image`), he = i(`file.image`), ge = i(`file.video`), _e = i(`file.audio`), Q = i(`file.document`), ve = {
	image: Z,
	svg: he,
	video: ge,
	audio: _e,
	pdf: Q,
	document: Q,
	archive: i(`file.archive`),
	other: i(`file.generic`)
};
function ye(e) {
	return e === `svg` || e === `pdf` || e === `document`;
}
var be = i(`media.image-missing`);
function $({ kind: e = `image`, label: t, description: n, state: i = `empty`, aspect: a = `video`, size: o = `md`, action: s, className: c, ...l }) {
	let u = (0, P.useId)(), d = i === `error` ? be : ve[e], f = t !== void 0 && t !== ``, p = s ? { role: `group` } : f ? { role: `img` } : { "aria-hidden": !0 };
	return (0, K.jsxs)(`div`, {
		...l,
		...p,
		...f ? { "aria-label": t } : {},
		...f && n ? { "aria-describedby": u } : {},
		...i === `loading` ? { "aria-busy": !0 } : {},
		"data-state": i,
		className: r(`flex w-full min-w-0 flex-col items-center justify-center overflow-hidden rounded-md border text-center`, W[a], o === `md` ? `gap-2 p-3` : `gap-1 p-2`, i === `error` ? `border-danger bg-danger-soft text-danger` : `border-border bg-sunken text-muted`, i === `loading` && `animate-pulse motion-reduce:animate-none in-[.a11y-reduce-motion]:animate-none`, c),
		children: [
			(0, K.jsx)(d, {
				"aria-hidden": !0,
				focusable: `false`,
				className: r(`shrink-0`, o === `md` ? `size-8` : `size-5`),
				strokeWidth: 1.5
			}),
			f ? (0, K.jsx)(`span`, {
				"aria-hidden": !s || void 0,
				className: r(`max-w-full font-semibold wrap-break-word`, o === `md` ? `text-caption` : `text-label`),
				children: t
			}) : null,
			n ? (0, K.jsx)(`span`, {
				id: u,
				"aria-hidden": !s || void 0,
				className: `max-w-full text-caption wrap-break-word`,
				children: n
			}) : null,
			s ? (0, K.jsx)(`span`, {
				className: `mt-1 flex flex-wrap justify-center gap-2`,
				children: s
			}) : null
		]
	});
}
var xe = [];
function Se(e, t, n) {
	let r = [...e], [i] = r.splice(t, 1);
	return i && r.splice(n, 0, i), r;
}
function Ce({ label: e, description: t, errorMessage: n, value: i, defaultValue: a, onChange: s, maxItems: c, addLabel: l, onAdd: u, replaceLabel: d, itemLabel: f, removeLabel: p, moveEarlierLabel: m, moveLaterLabel: h, movedLabel: g, editLabel: _, onEdit: v, dragLabel: y, name: b, getValue: x, isRequired: S = !1, requiredLabel: T, isDisabled: E = !1, brokenLabel: D, container: O, className: k }) {
	let A = (0, P.useId)(), ne = (0, P.useId)(), j = (0, P.useId)(), M = (0, P.useRef)(null), N = (0, P.useRef)(null), [re, F] = (0, P.useState)(a ?? xe), I = i ?? re, [L, R] = (0, P.useState)(``), z = (0, P.useRef)(null), B = n != null && n !== !1 && n !== ``, U = [t ? ne : null, B ? j : null].filter(Boolean).join(` `) || void 0, W = c !== void 0 && I.length >= c, ie = c === 1, G = (0, P.useCallback)((e) => {
		i === void 0 && F(e), s?.(e);
	}, [i, s]);
	(0, P.useEffect)(() => {
		let e = z.current;
		if (e === null) return;
		z.current = null;
		let t = M.current?.querySelectorAll(`[role="row"]`);
		(t && t.length > 0 ? t[Math.min(e, t.length - 1)] : N.current)?.focus();
	});
	let ae = (0, P.useCallback)((e) => {
		z.current = e, G(I.filter((t, n) => n !== e));
	}, [G, I]), q = (0, P.useCallback)((e, t) => {
		let n = e + t;
		if (n < 0 || n >= I.length) return;
		let r = Se(I, e, n);
		G(r);
		let i = I[e];
		i && g && R(g(i, n, I.length));
	}, [
		G,
		I,
		g
	]), oe = (0, P.useMemo)(() => y && !E ? {
		getItems: (e) => [...e].map((e) => ({ "text/plain": I.find((t) => t.id === e)?.name ?? String(e) })),
		onReorder: (e) => {
			let t = I.filter((t) => e.keys.has(t.id)), n = I.filter((t) => !e.keys.has(t.id)), r = n.findIndex((t) => t.id === e.target.key);
			r < 0 ? r = n.length : e.target.dropPosition === `after` && (r += 1), G([
				...n.slice(0, r),
				...t,
				...n.slice(r)
			]);
		},
		renderDropIndicator: (e) => (0, K.jsx)(w, {
			target: e,
			className: `hidden w-1 self-stretch rounded-full data-drop-target:block data-drop-target:bg-accent forced-colors:data-drop-target:bg-[Highlight]`
		})
	} : {}, [
		y,
		E,
		I,
		G
	]), { dragAndDropHooks: J } = C(oe), ce = (0, P.useMemo)(() => [
		I,
		E,
		f,
		p,
		m,
		h,
		_,
		v,
		y,
		D,
		ae,
		q,
		O
	], [
		I,
		E,
		f,
		p,
		m,
		h,
		_,
		v,
		y,
		D,
		ae,
		q,
		O
	]), le = !W || ie && d !== void 0;
	return (0, K.jsxs)(`fieldset`, {
		ref: M,
		...U ? { "aria-describedby": U } : {},
		"data-invalid": B || void 0,
		className: r(`m-0 flex min-w-0 flex-col gap-1.5 border-0 p-0`, k),
		children: [
			(0, K.jsxs)(`legend`, {
				id: A,
				className: `mb-1.5 w-fit p-0 text-caption font-medium text-fg`,
				children: [(0, K.jsx)(`span`, { children: e }), S ? T ? (0, K.jsxs)(K.Fragment, { children: [` `, (0, K.jsx)(`span`, {
					className: `font-normal text-muted`,
					children: T
				})] }) : (0, K.jsx)(`span`, {
					"aria-hidden": `true`,
					className: `ml-0.5 text-danger`,
					children: `*`
				}) : null]
			}),
			t ? (0, K.jsx)(`p`, {
				id: ne,
				className: `text-caption wrap-break-word text-muted`,
				children: t
			}) : null,
			(0, K.jsxs)(`div`, {
				className: r(`flex min-w-0 flex-wrap items-start gap-3 rounded-lg`, B && `outline-2 outline-offset-4 outline-danger outline-dashed`),
				children: [I.length > 0 ? (0, K.jsx)(ee, {
					"aria-labelledby": A,
					...U ? { "aria-describedby": U } : {},
					items: I,
					dependencies: ce,
					layout: `grid`,
					...y && !E ? { dragAndDropHooks: J } : {},
					...E ? { disabledBehavior: `selection` } : {},
					className: `flex min-w-0 flex-wrap gap-3 outline-none`,
					children: (e) => {
						let t = I.indexOf(e);
						return (0, K.jsx)(te, {
							id: e.id,
							textValue: f(e, t, I.length),
							className: r(`relative w-32 min-w-0 rounded-lg outline-none data-dragging:opacity-50`, V),
							children: (0, K.jsx)(we, {
								file: e,
								index: t,
								count: I.length,
								isDisabled: E,
								removeLabel: p(e, t),
								...m && !ie ? { earlierLabel: m(e, t) } : {},
								...h && !ie ? { laterLabel: h(e, t) } : {},
								..._ && v ? {
									editLabel: _(e, t),
									onEdit: v
								} : {},
								...y && !E ? { dragLabel: y(e, t) } : {},
								...D === void 0 ? {} : { brokenLabel: D },
								onRemove: ae,
								onShift: q,
								container: O
							})
						});
					}
				}) : null, le ? (0, K.jsxs)(`button`, {
					type: `button`,
					ref: N,
					onClick: u,
					disabled: E,
					...B ? { "aria-invalid": !0 } : {},
					...U ? { "aria-describedby": U } : {},
					className: r(`flex w-32 shrink-0 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed px-2 text-center text-caption font-medium transition-colors`, I.length > 0 ? `aspect-square` : `min-h-32`, B ? `border-danger text-danger` : `border-border-strong text-muted`, `hover:border-accent hover:bg-accent-soft hover:text-accent-text active:bg-selected disabled:cursor-not-allowed disabled:border-border-strong disabled:bg-transparent disabled:text-muted disabled:opacity-50`, H),
					children: [(0, K.jsx)(o, {
						name: `media.image-add`,
						"aria-hidden": `true`,
						className: `size-5`
					}), (0, K.jsx)(`span`, {
						className: `wrap-break-word`,
						children: W && d ? d : l
					})]
				}) : null]
			}),
			B ? (0, K.jsx)(se, {
				id: j,
				children: n
			}) : null,
			(0, K.jsx)(`output`, {
				"aria-live": `polite`,
				className: `sr-only`,
				children: L
			}),
			b ? I.length > 0 ? I.map((e) => (0, K.jsx)(`input`, {
				type: `hidden`,
				name: b,
				value: x ? x(e) : String(e.id)
			}, e.id)) : (0, K.jsx)(`input`, {
				type: `hidden`,
				name: b,
				value: ``
			}) : null
		]
	});
}
function we({ file: e, index: t, count: n, isDisabled: i, removeLabel: a, earlierLabel: s, laterLabel: c, editLabel: l, onEdit: u, dragLabel: f, brokenLabel: p, onRemove: m, onShift: h, container: g }) {
	let [_, v] = (0, P.useState)(!1), y = (0, P.useCallback)(() => v(!0), []), b = (0, P.useRef)(null), x = (0, P.useRef)(null), S = (0, P.useRef)(null), ee = (0, P.useCallback)(() => m(t), [m, t]), te = (0, P.useCallback)(() => {
		S.current = `earlier`, h(t, -1);
	}, [h, t]), C = (0, P.useCallback)(() => {
		S.current = `later`, h(t, 1);
	}, [h, t]);
	(0, P.useEffect)(() => {
		let e = S.current;
		if (e === null) return;
		S.current = null;
		let r = t === 0, i = t === n - 1;
		(e === `earlier` ? r ? x : b : i ? b : x).current?.focus();
	}, [t, n]);
	let w = (0, P.useCallback)(() => u?.(e), [u, e]), E = g ?? null;
	return (0, K.jsxs)(`div`, {
		className: `flex flex-col overflow-hidden rounded-lg border border-border bg-surface`,
		children: [
			(0, K.jsxs)(`div`, {
				className: r(`relative aspect-square w-full`, U),
				children: [e.src && !_ ? (0, K.jsx)(`img`, {
					src: e.src,
					alt: e.alt ?? ``,
					draggable: !1,
					onError: y,
					className: `block size-full object-cover`
				}) : (0, K.jsx)($, {
					kind: e.kind,
					state: _ ? `error` : `empty`,
					label: _ ? p ?? e.kindLabel : e.kindLabel,
					aspect: `auto`,
					size: `sm`,
					className: `size-full rounded-none border-0`
				}), (0, K.jsx)(`span`, {
					"aria-hidden": `true`,
					className: `absolute start-1 top-1 min-w-5 rounded-sm border border-transparent bg-fg px-1 text-center text-label font-semibold text-bg tabular-nums`,
					children: t + 1
				})]
			}),
			(0, K.jsx)(`p`, {
				className: `truncate border-t border-border px-1.5 pt-1 text-label text-fg`,
				title: e.name,
				children: e.name
			}),
			(0, K.jsxs)(`div`, {
				className: `flex flex-wrap items-center justify-center gap-0.5 p-1`,
				children: [
					f ? (0, K.jsx)(T, {
						label: f,
						orientation: `horizontal`
					}) : null,
					s ? (0, K.jsx)(d, {
						ref: b,
						label: s,
						size: `sm`,
						onPress: te,
						isDisabled: i || t === 0,
						container: E,
						children: (0, K.jsx)(o, {
							name: `chevron.left`,
							"aria-hidden": `true`,
							className: `rtl:-scale-x-100`
						})
					}) : null,
					c ? (0, K.jsx)(d, {
						ref: x,
						label: c,
						size: `sm`,
						onPress: C,
						isDisabled: i || t === n - 1,
						container: E,
						children: (0, K.jsx)(o, {
							name: `chevron.right`,
							"aria-hidden": `true`,
							className: `rtl:-scale-x-100`
						})
					}) : null,
					l ? (0, K.jsx)(d, {
						label: l,
						size: `sm`,
						onPress: w,
						isDisabled: i,
						container: E,
						children: (0, K.jsx)(o, {
							name: `action.edit`,
							"aria-hidden": `true`
						})
					}) : null,
					(0, K.jsx)(d, {
						label: a,
						size: `sm`,
						onPress: ee,
						isDisabled: i,
						container: E,
						children: (0, K.jsx)(o, {
							name: `action.close`,
							"aria-hidden": `true`
						})
					})
				]
			})
		]
	});
}
function Te({ file: e, layout: t = `card`, aspect: n = `video`, actions: i, selection: a, isSelected: o = !1, isDisabled: s = !1, brokenLabel: c, className: l, ...u }) {
	let [d, f] = (0, P.useState)(!1), p = (0, P.useCallback)(() => f(!0), []), m = t === `row`, h = ye(e.kind), g = e.src && !d ? (0, K.jsx)(`img`, {
		src: e.src,
		alt: e.alt ?? ``,
		loading: `lazy`,
		decoding: `async`,
		draggable: !1,
		onError: p,
		className: r(`block size-full`, h ? `object-contain p-2` : `object-cover`)
	}) : (0, K.jsx)($, {
		kind: e.kind,
		state: d ? `error` : `empty`,
		label: d ? c ?? e.kindLabel : e.kindLabel,
		aspect: `auto`,
		size: m ? `sm` : `md`,
		className: r(`size-full rounded-none border-0`, m && `[&>span]:hidden`)
	});
	return (0, K.jsxs)(`div`, {
		...u,
		"data-selected": o || void 0,
		"data-disabled": s || void 0,
		"data-layout": t,
		className: r(`group/tile relative flex min-w-0 overflow-hidden rounded-lg border bg-surface text-fg transition-[border-color,box-shadow] duration-(--sk-duration-fast)`, m ? `flex-wrap items-center gap-x-3 gap-y-2 p-2` : `flex-col`, o ? `border-accent shadow-[0_0_0_1px_var(--sk-accent)] forced-colors:border-[Highlight]` : `border-border hover:border-border-strong`, s && `opacity-60`, l),
		children: [
			(0, K.jsxs)(`div`, {
				className: r(`relative shrink-0 overflow-hidden`, m ? `size-12 rounded-md border border-border` : r(`w-full border-b border-border`, W[n]), U),
				children: [
					g,
					e.extension && !m ? (0, K.jsx)(`span`, {
						className: `absolute end-1.5 top-1.5 rounded-sm border border-transparent bg-fg px-1.5 py-px text-label font-semibold text-bg uppercase`,
						children: e.extension
					}) : null,
					a && !m ? (0, K.jsx)(`span`, {
						className: `absolute start-1.5 top-1.5 z-10`,
						children: a
					}) : null
				]
			}),
			a && m ? (0, K.jsx)(`span`, {
				className: `order-first shrink-0`,
				children: a
			}) : null,
			(0, K.jsxs)(`div`, {
				className: r(`flex min-w-0 flex-1 flex-col gap-0.5`, m ? `basis-40 py-0.5` : `p-2.5`),
				children: [
					(0, K.jsx)(`p`, {
						className: `line-clamp-2 text-caption font-medium [overflow-wrap:anywhere] text-fg`,
						children: e.name
					}),
					(0, K.jsxs)(`p`, {
						className: `text-label text-muted [overflow-wrap:anywhere]`,
						children: [
							e.extension && m ? e.kindLabel : `${e.kindLabel}${e.details ? ` · ${e.details}` : ``}`,
							e.extension && m ? (0, K.jsx)(`span`, {
								className: `uppercase`,
								children: ` (${e.extension})`
							}) : null,
							e.extension && m && e.details ? ` · ${e.details}` : null
						]
					}),
					e.notice ? (0, K.jsx)(oe, {
						notice: e.notice,
						className: `text-label`
					}) : null,
					i && !m ? (0, K.jsx)(`div`, {
						className: `mt-auto flex flex-wrap items-center gap-1.5 pt-2`,
						children: i
					}) : null
				]
			}),
			i && m ? (0, K.jsx)(`div`, {
				className: `ms-auto flex shrink-0 flex-wrap items-center justify-end gap-1.5`,
				children: i
			}) : null
		]
	});
}
var Ee = {
	sm: `grid-cols-[repeat(auto-fill,minmax(min(100%,8.5rem),1fr))]`,
	md: `grid-cols-[repeat(auto-fill,minmax(min(100%,11rem),1fr))]`
}, De = r(`relative min-w-0 rounded-lg outline-none`, `data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-offset-(--sk-focus-offset) data-focus-visible:outline-focus data-focus-visible:outline-solid`, `data-dragging:opacity-50 data-disabled:cursor-not-allowed`), Oe = `group/check flex size-7 cursor-default items-center justify-center rounded-md border border-border bg-surface shadow-sm outline-none data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-focus-visible:outline-solid`;
function ke({ label: e }) {
	return (0, K.jsx)(E, {
		slot: `selection`,
		"aria-label": e,
		className: Oe,
		children: (0, K.jsx)(`span`, {
			"aria-hidden": `true`,
			className: `grid size-4 place-items-center rounded-sm border border-border-strong bg-input text-accent-fg group-data-hovered/check:border-muted group-data-selected/check:border-accent group-data-selected/check:bg-accent forced-colors:group-data-selected/check:bg-[Highlight]`,
			children: (0, K.jsx)(o, {
				name: `action.check`,
				strokeWidth: 3,
				className: `invisible size-3 group-data-selected/check:visible forced-colors:text-[HighlightText]`
			})
		})
	});
}
async function Ae(e) {
	return Promise.all(e.filter(D).map((e) => e.getFile()));
}
function je({ "aria-label": e, items: t, view: n = `grid`, tileSize: i = `md`, aspect: a = `video`, selectionMode: o = `none`, selectedKeys: s, defaultSelectedKeys: c, onSelectionChange: l, disabledKeys: u, selectLabel: d, onAction: f, renderActions: p, onMove: m, dragLabel: h, onDropFiles: g, isLoading: _ = !1, loadingLabel: v, emptyState: y, brokenLabel: b, className: x }) {
	let S = n === `grid`, E = (0, P.useMemo)(() => new Map(t.map((e) => [e.id, e])), [t]), D = (0, P.useMemo)(() => {
		let e = { renderDropIndicator: (e) => (0, K.jsx)(w, {
			target: e,
			className: S ? `hidden min-h-24 rounded-lg border-2 border-dashed border-accent bg-accent-soft data-drop-target:block` : `h-0.5 rounded-full outline-none data-drop-target:bg-accent forced-colors:data-drop-target:bg-[Highlight]`
		}) };
		if (m && (e.getItems = (e) => [...e].map((e) => ({ "text/plain": E.get(e)?.name ?? String(e) })), e.onReorder = (e) => m([...e.keys], {
			key: e.target.key,
			position: e.target.dropPosition === `before` ? `before` : `after`
		})), g) {
			e.acceptedDragTypes = m ? `all` : [`Files`];
			let t = async (e) => {
				let t = await Ae(e);
				t.length > 0 && g(t);
			};
			e.onRootDrop = (e) => t(e.items), e.onInsert = (e) => t(e.items);
		}
		return e;
	}, [
		S,
		m,
		g,
		E
	]), { dragAndDropHooks: O } = C(D), k = m || g ? { dragAndDropHooks: O } : {}, A = (0, P.useCallback)((e) => l?.(e === `all` ? t.filter((e) => !e.isDisabled).map((e) => e.id) : [...e]), [t, l]), ne = (0, P.useCallback)(() => y ? (0, K.jsx)(`div`, {
		className: `col-span-full`,
		children: y
	}) : null, [y]), j = (0, P.useMemo)(() => {
		let e = new Set(u ?? []);
		for (let n of t) n.isDisabled && e.add(n.id);
		return e;
	}, [u, t]), M = (0, P.useMemo)(() => [
		S,
		a,
		d,
		p,
		h,
		b
	], [
		S,
		a,
		d,
		p,
		h,
		b
	]), N = S ? r(`grid gap-3`, Ee[i]) : `flex flex-col gap-2`;
	return _ && t.length === 0 ? (0, K.jsx)(`output`, {
		"aria-label": v,
		"aria-busy": `true`,
		className: r(N, `min-w-0`, x),
		children: Array.from({ length: S ? 8 : 4 }, (e, t) => (0, K.jsx)($, {
			state: `loading`,
			aspect: S ? `video` : `auto`,
			className: S ? void 0 : `h-16`
		}, t))
	}) : (0, K.jsx)(ee, {
		"aria-label": e,
		..._ ? { "aria-busy": !0 } : {},
		items: t,
		dependencies: M,
		layout: S ? `grid` : `stack`,
		selectionMode: o,
		...s === void 0 ? {} : { selectedKeys: s },
		...c === void 0 ? {} : { defaultSelectedKeys: c },
		...l ? { onSelectionChange: A } : {},
		disabledKeys: j,
		...f ? { onAction: f } : {},
		...k,
		renderEmptyState: ne,
		className: r(N, `min-w-0 outline-none data-empty:block data-drop-target:rounded-lg data-drop-target:outline-2 data-drop-target:outline-offset-4 data-drop-target:outline-accent data-drop-target:outline-dashed`, x),
		children: (e) => (0, K.jsx)(te, {
			id: e.id,
			textValue: e.name,
			className: De,
			children: ({ isSelected: t, selectionMode: n, isDisabled: r, allowsDragging: i }) => (0, K.jsx)(Te, {
				file: e,
				layout: S ? `card` : `row`,
				aspect: a,
				isSelected: t,
				isDisabled: r,
				...b === void 0 ? {} : { brokenLabel: b },
				className: `h-full`,
				...n !== `none` && d ? { selection: (0, K.jsx)(ke, { label: d }) } : {},
				...p || i ? { actions: (0, K.jsxs)(K.Fragment, { children: [i && h ? (0, K.jsx)(T, {
					label: h(e),
					orientation: S ? `horizontal` : `vertical`
				}) : null, p?.(e)] }) } : {}
			})
		})
	});
}
function Me({ title: e, description: t, closeLabel: n, cancelLabel: i, chooseLabel: a, countLabel: c, gridLabel: u, items: d, selectionMode: f = `multiple`, selectLabel: p, onChoose: m, search: h, folders: g, upload: _, isLoading: v = !1, loadingLabel: y, error: b, emptyState: x, brokenLabel: S, trigger: ee, isOpen: te, defaultOpen: C, onOpenChange: w, container: T }) {
	let [E, D] = (0, P.useState)([]), M = (0, P.useMemo)(() => E.map((e) => e.id), [E]), N = (0, P.useCallback)((e) => {
		e || D([]), w?.(e);
	}, [w]), re = (0, P.useCallback)((e) => {
		let t = new Set(e);
		D((e) => {
			let n = e.filter((e) => t.has(e.id)), r = d.filter((e) => t.has(e.id) && !n.some((t) => t.id === e.id));
			return [...n, ...r];
		});
	}, [d]), F = (0, P.useCallback)((e) => g?.onChange(e[0] ?? g.selected), [g]), I = (0, P.useMemo)(() => g ? [g.selected] : [], [g]), L = (0, P.useCallback)((e) => _?.onFiles(e ? Array.from(e) : []), [_]), R = (0, P.useCallback)((e) => {
		E.length !== 0 && (m(E), e());
	}, [E, m]), z = (0, P.useCallback)((e) => (0, K.jsxs)(K.Fragment, { children: [
		h || g || _ ? (0, K.jsxs)(`div`, {
			className: `flex min-w-0 flex-col gap-3`,
			children: [
				(0, K.jsxs)(`div`, {
					className: `flex min-w-0 flex-col gap-2 sm:flex-row sm:items-end`,
					children: [h ? (0, K.jsx)(A, {
						"aria-label": h.label,
						value: h.value,
						onChange: h.onChange,
						...h.placeholder === void 0 ? {} : { placeholder: h.placeholder },
						...h.clearLabel === void 0 ? {} : { clearLabel: h.clearLabel },
						isLoading: h.isLoading ?? !1,
						...h.loadingLabel === void 0 ? {} : { loadingLabel: h.loadingLabel },
						className: `min-w-0 flex-1`
					}) : null, _ ? (0, K.jsx)(O, {
						onSelect: L,
						allowsMultiple: f === `multiple`,
						..._.acceptedFileTypes ? { acceptedFileTypes: _.acceptedFileTypes } : {},
						children: (0, K.jsxs)(l, {
							variant: `outline`,
							children: [(0, K.jsx)(o, {
								name: `action.upload`,
								"aria-hidden": `true`
							}), _.buttonLabel]
						})
					}) : null]
				}),
				g ? (0, K.jsx)(ne, {
					label: g.label,
					chips: g.chips,
					selected: I,
					onChange: F,
					selectionMode: `single`
				}) : null,
				_?.progress ? (0, K.jsx)(k, {
					label: _.progress.label,
					..._.progress.value === void 0 ? { isIndeterminate: !0 } : { value: _.progress.value },
					size: `sm`
				}) : null
			]
		}) : null,
		(0, K.jsx)(`div`, {
			role: `alert`,
			className: `empty:hidden`,
			children: b ? (0, K.jsx)(s, {
				tone: `danger`,
				toneLabel: b.toneLabel,
				title: b.title,
				...b.action ? { actions: b.action } : {},
				children: b.description
			}) : null
		}),
		(0, K.jsx)(je, {
			"aria-label": u,
			items: d,
			tileSize: `sm`,
			aspect: `square`,
			selectionMode: f,
			selectedKeys: M,
			onSelectionChange: re,
			...p === void 0 ? {} : { selectLabel: p },
			...f === `single` ? { onAction: (t) => {
				let n = d.find((e) => e.id === t);
				n && (m([n]), e());
			} } : {},
			..._ ? { onDropFiles: _.onFiles } : {},
			isLoading: v,
			...y === void 0 ? {} : { loadingLabel: y },
			...x === void 0 ? {} : { emptyState: x },
			...S === void 0 ? {} : { brokenLabel: S }
		})
	] }), [
		h,
		g,
		_,
		L,
		f,
		I,
		F,
		b,
		u,
		d,
		M,
		re,
		p,
		m,
		v,
		y,
		x,
		S
	]), B = (0, P.useCallback)((e) => (0, K.jsxs)(K.Fragment, { children: [
		c ? (0, K.jsx)(`output`, {
			"aria-live": `polite`,
			className: r(`self-center text-caption text-muted sm:me-auto`, E.length === 0 && `max-sm:hidden`),
			children: c(E.length)
		}) : null,
		(0, K.jsx)(l, {
			variant: `outline`,
			slot: `close`,
			children: i
		}),
		(0, K.jsx)(Ne, {
			isDisabled: E.length === 0,
			close: e,
			onConfirm: R,
			children: a(E.length)
		})
	] }), [
		c,
		E.length,
		i,
		a,
		R
	]);
	return (0, K.jsx)(j, {
		title: e,
		...t === void 0 ? {} : { description: t },
		closeLabel: n,
		size: `lg`,
		...ee === void 0 ? {} : { trigger: ee },
		...te === void 0 ? {} : { isOpen: te },
		...C === void 0 ? {} : { defaultOpen: C },
		onOpenChange: N,
		container: T ?? null,
		footer: B,
		children: z
	});
}
function Ne({ isDisabled: e, close: t, onConfirm: n, children: r }) {
	let i = (0, P.useCallback)(() => n(t), [n, t]);
	return (0, K.jsx)(l, {
		isDisabled: e,
		onPress: i,
		children: r
	});
}
var Pe = {}, Fe = {};
function Ie(e) {
	return e == null || e === !1 || e === `` ? {} : {
		isInvalid: !0,
		errorMessage: e
	};
}
function Le({ value: e, onChange: t, labels: n, fitOptions: i, formatOptions: a, errors: o = Pe, notes: s = Fe, isDisabled: c = !1, container: l, className: u }) {
	let d = (0, P.useCallback)((n, r) => t({
		...e,
		[n]: r
	}), [t, e]), f = n.optional, p = (0, P.useCallback)((e) => d(`name`, e), [d]), m = (0, P.useCallback)((t) => d(`width`, Number.isNaN(t) ? e.width : t), [d, e.width]), h = (0, P.useCallback)((e) => d(`height`, Number.isNaN(e) ? null : e), [d]), g = (0, P.useCallback)((t) => d(`fit`, t === null ? e.fit : String(t)), [d, e.fit]), v = (0, P.useCallback)((t) => d(`format`, t === null ? e.format : String(t)), [d, e.format]), y = (0, P.useCallback)((t) => d(`quality`, Number.isNaN(t) ? e.quality : t), [d, e.quality]), b = (0, P.useCallback)((e) => d(`maxKb`, Number.isNaN(e) ? null : e), [d]), x = (0, P.useCallback)((e) => d(`requireAlt`, e), [d]), S = (0, P.useCallback)((e) => d(`seoFilename`, e), [d]), ee = (0, P.useCallback)((e) => d(`keepTransparency`, e), [d]);
	return (0, K.jsxs)(`div`, {
		className: r(`flex min-w-0 flex-col gap-4`, u),
		children: [(0, K.jsxs)(`div`, {
			className: `grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-4`,
			children: [
				(0, K.jsx)(N, {
					label: n.name,
					value: e.name,
					onChange: p,
					isRequired: !0,
					maxLength: 120,
					isDisabled: c,
					...s.name ? { status: s.name } : {},
					...Ie(o.name),
					className: `sm:col-span-2`
				}),
				(0, K.jsx)(J, {
					label: n.width,
					value: e.width,
					onChange: m,
					minValue: 16,
					maxValue: 8e3,
					isRequired: !0,
					isDisabled: c,
					...n.pixelUnit ? { suffix: n.pixelUnit } : {},
					errorMessage: o.width
				}),
				(0, K.jsx)(J, {
					label: n.height,
					value: e.height ?? NaN,
					onChange: h,
					minValue: 16,
					maxValue: 8e3,
					optionalLabel: f,
					isDisabled: c,
					...n.pixelUnit ? { suffix: n.pixelUnit } : {},
					description: n.heightHint,
					errorMessage: o.height
				}),
				(0, K.jsx)(_, {
					label: n.fit,
					items: i,
					value: e.fit,
					onChange: g,
					isDisabled: c,
					container: l ?? null,
					...s.fit ? { status: s.fit } : {},
					...Ie(o.fit),
					className: `sm:col-span-2`
				}),
				(0, K.jsx)(_, {
					label: n.format,
					items: a,
					value: e.format,
					onChange: v,
					isDisabled: c,
					container: l ?? null,
					...s.format ? { status: s.format } : {},
					...Ie(o.format)
				}),
				(0, K.jsx)(J, {
					label: n.quality,
					value: e.quality,
					onChange: y,
					minValue: 30,
					maxValue: 100,
					isRequired: !0,
					isDisabled: c,
					...n.percentUnit ? { suffix: n.percentUnit } : {},
					description: n.qualityHint,
					errorMessage: o.quality
				}),
				(0, K.jsx)(J, {
					label: n.maxKb,
					value: e.maxKb ?? NaN,
					onChange: b,
					minValue: 5,
					maxValue: 2e4,
					optionalLabel: f,
					isDisabled: c,
					...n.kilobyteUnit ? { suffix: n.kilobyteUnit } : {},
					description: n.maxKbHint,
					errorMessage: o.maxKb,
					className: `sm:col-span-2 lg:col-span-1`
				})
			]
		}), (0, K.jsxs)(`fieldset`, {
			className: `m-0 flex min-w-0 flex-col gap-2 border-0 p-0`,
			children: [(0, K.jsx)(`legend`, {
				className: `mb-1 p-0 text-caption font-medium text-fg`,
				children: n.rules
			}), (0, K.jsxs)(`div`, {
				className: `flex flex-wrap gap-x-6 gap-y-2`,
				children: [
					(0, K.jsx)(M, {
						isSelected: e.requireAlt,
						onChange: x,
						isDisabled: c,
						...s.requireAlt ? { status: s.requireAlt } : {},
						children: n.requireAlt
					}),
					(0, K.jsx)(M, {
						isSelected: e.seoFilename,
						onChange: S,
						isDisabled: c,
						...s.seoFilename ? { status: s.seoFilename } : {},
						children: n.seoFilename
					}),
					(0, K.jsx)(M, {
						isSelected: e.keepTransparency,
						onChange: ee,
						isDisabled: c,
						...s.keepTransparency ? { status: s.keepTransparency } : {},
						children: n.keepTransparency
					})
				]
			})]
		})]
	});
}
var Re = () => `copy`;
function ze(e, t) {
	if (!t || t.length === 0) return !0;
	let n = e.name.toLowerCase();
	return t.some((t) => {
		let r = t.trim().toLowerCase();
		return r.startsWith(`.`) ? n.endsWith(r) : r.endsWith(`/*`) ? e.type.startsWith(r.slice(0, -1)) : e.type === r;
	});
}
var Be = [];
function Ve(e) {
	return new Map(e.map((e) => [e.id, e.status]));
}
var He = {
	queued: `accent`,
	uploading: `accent`,
	processing: `accent`,
	done: `ok`,
	error: `danger`
};
function Ue({ title: e, headingLevel: t = 3, buttonLabel: n, dropLabel: i, description: a, onFiles: s, acceptedFileTypes: c, allowsMultiple: u = !0, maxFileSize: d, rejectedMessage: f, uploads: p = Be, statusLabels: m, listLabel: h, onRetry: g, retryLabel: _, onRemove: v, removeLabel: y, isDisabled: b = !1, size: x = `panel`, container: S, className: ee }) {
	let te = (0, P.useId)(), C = (0, P.useId)(), [w, T] = (0, P.useState)([]), [E, k] = (0, P.useState)(``), [A, ne] = (0, P.useState)(``), j = (0, P.useCallback)((e) => {
		let t = e.filter((e) => ze(e, c) && (d === void 0 || e.size <= d));
		T(e.filter((e) => !t.includes(e))), t.length > 0 && s(u ? t : t.slice(0, 1));
	}, [
		c,
		d,
		u,
		s
	]), M = (0, P.useCallback)((e) => j(e ? Array.from(e) : []), [j]), N = (0, P.useCallback)(async (e) => {
		let t = await Promise.all(e.items.filter(D).map((e) => e.getFile()));
		j(t);
	}, [j]), [F, I] = (0, P.useState)(() => Ve(p));
	if (p.length !== F.size || p.some((e) => F.get(e.id) !== e.status)) {
		let e = [], t = [];
		for (let n of p) F.get(n.id) !== n.status && (n.status === `done` && e.push(`${n.name}: ${m.done}`), n.status === `error` && t.push([`${n.name}: ${m.error}`, n.message].filter(Boolean).join(`. `)));
		I(Ve(p)), e.length > 0 && k(e.join(`. `)), t.length > 0 && ne(t.join(`. `));
	}
	let L = (0, P.useMemo)(() => w.length > 0 && f ? {
		tone: `warn`,
		label: f(w)
	} : null, [w, f]), R = x === `panel`, z = `h${t}`;
	return (0, K.jsxs)(`section`, {
		"aria-labelledby": te,
		className: r(`flex min-w-0 flex-col gap-3`, ee),
		children: [
			(0, K.jsx)(re, {
				"aria-label": i,
				isDisabled: b,
				getDropOperation: Re,
				onDrop: N,
				className: r(`flex min-w-0 flex-col items-center justify-center rounded-lg border-2 border-dashed border-border-strong bg-sunken text-center transition-colors duration-(--sk-duration-fast)`, R ? `gap-3 px-4 py-8 sm:px-6 sm:py-10` : `gap-2 px-3 py-4`, `data-hovered:border-muted data-drop-target:border-solid data-drop-target:border-accent data-drop-target:bg-accent-soft data-disabled:cursor-not-allowed data-disabled:opacity-60 forced-colors:data-drop-target:border-[Highlight]`, V),
				children: ({ isDropTarget: t }) => (0, K.jsxs)(K.Fragment, { children: [
					(0, K.jsx)(`span`, {
						"aria-hidden": `true`,
						className: r(`grid shrink-0 place-items-center rounded-full bg-accent-soft text-accent-text`, R ? `size-12` : `size-9`),
						children: (0, K.jsx)(o, {
							name: `sync.upload`,
							className: R ? `size-6` : `size-5`
						})
					}),
					(0, K.jsx)(z, {
						id: te,
						className: r(`font-semibold wrap-break-word text-fg`, R ? `text-title` : `text-body`),
						children: e
					}),
					(0, K.jsxs)(`div`, {
						className: `flex flex-col items-center gap-2 sm:flex-row sm:gap-3`,
						children: [(0, K.jsx)(O, {
							onSelect: M,
							allowsMultiple: u,
							...c ? { acceptedFileTypes: c } : {},
							children: (0, K.jsx)(l, {
								isDisabled: b,
								size: R ? `md` : `sm`,
								...a ? { "aria-describedby": C } : {},
								children: n
							})
						}), (0, K.jsx)(`span`, {
							className: r(`text-caption wrap-break-word`, t ? `font-semibold text-accent-text` : `text-muted`),
							children: i
						})]
					}),
					a ? (0, K.jsx)(`p`, {
						id: C,
						className: `max-w-prose text-caption wrap-break-word text-muted`,
						children: a
					}) : null
				] })
			}),
			L ? (0, K.jsx)(`output`, {
				className: `block text-caption`,
				children: (0, K.jsx)(oe, { notice: L })
			}) : null,
			p.length > 0 ? (0, K.jsx)(`ul`, {
				"aria-label": h,
				className: `flex min-w-0 flex-col divide-y divide-border rounded-md border border-border bg-surface`,
				children: p.map((e) => (0, K.jsx)(We, {
					item: e,
					statusLabel: m[e.status],
					container: S,
					...g && _ ? {
						onRetry: g,
						retryLabel: _(e)
					} : {},
					...v && y ? {
						onRemove: v,
						removeLabel: y(e)
					} : {}
				}, e.id))
			}) : null,
			(0, K.jsx)(`output`, {
				"aria-live": `polite`,
				className: `sr-only`,
				children: E
			}),
			(0, K.jsx)(`div`, {
				role: `alert`,
				className: `sr-only`,
				children: A
			})
		]
	});
}
function We({ item: e, statusLabel: t, onRetry: n, retryLabel: r, onRemove: i, removeLabel: a, container: s }) {
	let c = (0, P.useCallback)(() => n?.(e.id), [n, e.id]), l = (0, P.useCallback)(() => i?.(e.id), [i, e.id]), u = e.status === `done` ? 100 : e.progress ?? 0;
	return (0, K.jsxs)(`li`, {
		className: `flex min-w-0 items-start gap-2 px-3 py-2.5`,
		children: [
			(0, K.jsx)(k, {
				label: e.name,
				value: u,
				isIndeterminate: e.status === `processing`,
				tone: He[e.status],
				status: t,
				showValue: e.status === `uploading`,
				size: `sm`,
				...e.message ? { description: e.message } : {},
				className: `min-w-0 flex-1`
			}),
			e.status === `error` && n && r ? (0, K.jsx)(d, {
				label: r,
				onPress: c,
				size: `sm`,
				container: s ?? null,
				children: (0, K.jsx)(o, {
					name: `action.reset`,
					"aria-hidden": `true`
				})
			}) : null,
			i && a ? (0, K.jsx)(d, {
				label: a,
				onPress: l,
				size: `sm`,
				container: s ?? null,
				children: (0, K.jsx)(o, {
					name: `action.close`,
					"aria-hidden": `true`
				})
			}) : null
		]
	});
}
var Ge = e({ default: () => ut });
function Ke(e, t, n = !0) {
	let r = `<svg xmlns="http://www.w3.org/2000/svg" data-sk-drawn="sample" viewBox="0 0 320 180"><defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${e} 70% 72%)"/><stop offset="1" stop-color="hsl(${e + 30} 80% 88%)"/></linearGradient></defs><rect width="320" height="180" fill="url(#s)"/>${n ? `<circle cx="236" cy="56" r="22" fill="hsl(44 95% 66%)"/>` : ``}<path d="M0 132 70 70l46 40 54-58 70 64 34-26 46 42v48H0z" fill="hsl(${t} 34% 42%)"/><path d="M0 150c60-18 120-18 170-6s100 14 150-4v40H0z" fill="hsl(${t + 20} 40% 30%)"/></svg>`;
	return `data:image/svg+xml,${encodeURIComponent(r)}`;
}
var qe = [
	{
		id: `harbour`,
		name: `harbour-at-dawn.webp`,
		kind: `image`,
		kindLabel: `Image`,
		src: Ke(205, 150),
		alt: `Hills over a calm bay at dawn`,
		extension: `webp`,
		details: `182 KB · 1920×1080`
	},
	{
		id: `meadow`,
		name: `meadow.webp`,
		kind: `image`,
		kindLabel: `Image`,
		src: Ke(190, 95),
		alt: `Green hills under a clear sky`,
		extension: `webp`,
		details: `96 KB · 1600×900`
	},
	{
		id: `ridge`,
		name: `north-ridge-panorama-from-the-upper-hut-in-late-october-final-version-2.webp`,
		kind: `image`,
		kindLabel: `Image`,
		src: Ke(260, 20, !1),
		extension: `webp`,
		details: `410 KB · 2400×1000`,
		notice: {
			tone: `warn`,
			label: `No alt text`
		}
	},
	{
		id: `dunes`,
		name: `dunes.avif`,
		kind: `image`,
		kindLabel: `Image`,
		src: Ke(30, 35),
		alt: ``,
		extension: `avif`,
		details: `74 KB · 1200×800`,
		notice: {
			tone: `info`,
			label: `Decorative`
		}
	},
	{
		id: `release-notes`,
		name: `release-notes-2026.pdf`,
		kind: `pdf`,
		kindLabel: `PDF`,
		extension: `pdf`,
		details: `320 KB · 4 pages`
	},
	{
		id: `logo`,
		name: `logo.svg`,
		kind: `svg`,
		kindLabel: `Vector`,
		extension: `svg`,
		details: `4 KB`
	},
	{
		id: `intro`,
		name: `intro.mp4`,
		kind: `video`,
		kindLabel: `Video`,
		extension: `mp4`,
		details: `12.4 MB · 0:42`
	},
	{
		id: `jingle`,
		name: `jingle.mp3`,
		kind: `audio`,
		kindLabel: `Audio`,
		extension: `mp3`,
		details: `1.1 MB · 0:18`
	}
], Je = qe.filter((e) => e.kind === `image`);
function Ye({ children: e }) {
	let [t, n] = (0, P.useState)(null);
	return (0, K.jsx)(`div`, {
		ref: n,
		children: e(t)
	});
}
function Xe() {
	let [e, t] = (0, P.useState)(`error`);
	return (0, K.jsxs)(`div`, {
		className: `grid grid-cols-[repeat(auto-fill,minmax(min(100%,9rem),1fr))] gap-3`,
		children: [
			(0, K.jsx)($, { label: `No image yet` }),
			(0, K.jsx)($, {
				kind: `pdf`,
				label: `PDF`,
				description: `No preview for this file`
			}),
			(0, K.jsx)($, {
				kind: `archive`,
				label: `ZIP`,
				aspect: `square`
			}),
			e === `loading` ? (0, K.jsx)($, {
				state: `loading`,
				label: `Loading image`
			}) : (0, K.jsx)($, {
				state: `error`,
				label: `Image could not load`,
				action: (0, K.jsx)(l, {
					size: `sm`,
					variant: `outline`,
					onPress: () => t(`loading`),
					children: `Try again`
				})
			})
		]
	});
}
function Ze() {
	let e = [
		qe[0],
		qe[2],
		qe[4],
		{
			id: `broken`,
			name: `missing-thumbnail.jpg`,
			kind: `image`,
			kindLabel: `Image`,
			src: `data:,`,
			details: `1.4 MB`,
			notice: {
				tone: `danger`,
				label: `Thumbnail missing`
			}
		}
	];
	return (0, K.jsxs)(`div`, {
		className: `flex flex-col gap-4`,
		children: [(0, K.jsx)(`div`, {
			className: `grid grid-cols-[repeat(auto-fill,minmax(min(100%,11rem),1fr))] gap-3`,
			children: e.map((e) => (0, K.jsx)(Te, {
				file: e,
				brokenLabel: `Preview not available`,
				actions: (0, K.jsx)(l, {
					size: `sm`,
					variant: `outline`,
					className: `flex-1`,
					"aria-label": `Edit ${e.name}`,
					children: `Edit`
				})
			}, e.id))
		}), (0, K.jsx)(Te, {
			file: qe[3],
			layout: `row`,
			isSelected: !0,
			actions: (0, K.jsx)(l, {
				size: `sm`,
				variant: `outline`,
				children: `Edit`
			})
		})]
	});
}
function Qe() {
	let [e, t] = (0, P.useState)(qe), [n, r] = (0, P.useState)(`grid`), [i, a] = (0, P.useState)(`files`), [s, c] = (0, P.useState)([]), [h, g] = (0, P.useState)(``), _ = i === `files` ? e : [], v = (0, P.useCallback)((e, n) => {
		t((t) => {
			let r = t.filter((t) => e.includes(t.id)), i = t.filter((t) => !e.includes(t.id)), a = i.findIndex((e) => e.id === n.key) + +(n.position === `after`);
			return [
				...i.slice(0, a),
				...r,
				...i.slice(a)
			];
		});
	}, []), y = (0, P.useCallback)((e) => (0, K.jsxs)(K.Fragment, { children: [(0, K.jsx)(d, {
		label: `Edit ${e.name}`,
		size: `sm`,
		variant: `outline`,
		onPress: () => g(e.name),
		children: (0, K.jsx)(o, {
			name: `action.edit`,
			"aria-hidden": !0
		})
	}), (0, K.jsx)(u, {
		text: `https://example.com/media/${e.name}`,
		label: `Copy link to ${e.name}`,
		copiedLabel: `Link copied`,
		failedLabel: `Copy failed. Select the link in the editor.`,
		iconOnly: !0,
		size: `sm`
	})] }), []);
	return (0, K.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [
			(0, K.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-2`,
				children: [(0, K.jsx)(m, {
					label: `View`,
					size: `sm`,
					value: n,
					onChange: r,
					options: [{
						value: `grid`,
						label: `Grid`,
						icon: (0, K.jsx)(o, {
							name: `layout.grid`,
							"aria-hidden": !0
						})
					}, {
						value: `list`,
						label: `List`,
						icon: (0, K.jsx)(o, {
							name: `layout.list`,
							"aria-hidden": !0
						})
					}]
				}), (0, K.jsx)(m, {
					label: `Demo state`,
					size: `sm`,
					value: i,
					onChange: a,
					options: [
						{
							value: `files`,
							label: `Files`
						},
						{
							value: `loading`,
							label: `Loading`
						},
						{
							value: `empty`,
							label: `Empty`
						}
					]
				})]
			}),
			(0, K.jsx)(f, {
				"aria-label": `Actions for selected files`,
				count: s.length,
				countLabel: (e) => e === 0 ? `No files selected` : `${e} selected`,
				onClear: () => c([]),
				clearLabel: `Clear selection`,
				children: (0, K.jsxs)(l, {
					size: `sm`,
					variant: `danger`,
					onPress: () => {
						t((e) => e.filter((e) => !s.includes(e.id))), c([]);
					},
					children: [(0, K.jsx)(o, {
						name: `action.delete`,
						"aria-hidden": !0
					}), `Move to trash`]
				})
			}),
			(0, K.jsx)(je, {
				"aria-label": `Files in Holidays`,
				items: _,
				view: n,
				selectionMode: `multiple`,
				selectedKeys: s,
				onSelectionChange: c,
				selectLabel: `Select`,
				onAction: (t) => g(e.find((e) => e.id === t)?.name ?? ``),
				renderActions: y,
				onMove: v,
				dragLabel: (e) => `Drag ${e.name}`,
				isLoading: i === `loading`,
				loadingLabel: `Loading files`,
				brokenLabel: `Preview not available`,
				emptyState: (0, K.jsx)(p, {
					bordered: !0,
					icon: (0, K.jsx)(o, { name: `folder.open` }),
					title: `This folder is empty`,
					description: `Upload files or drop them here.`,
					actions: (0, K.jsx)(l, {
						size: `sm`,
						children: `Upload files`
					})
				})
			}),
			(0, K.jsx)(`output`, {
				"aria-live": `polite`,
				className: `text-caption text-muted empty:hidden`,
				children: h ? `Opened ${h}` : ``
			})
		]
	});
}
var $e = {
	queued: `Waiting`,
	uploading: `Uploading`,
	processing: `Processing`,
	done: `Uploaded`,
	error: `Failed`
};
function et() {
	let [e, t] = (0, P.useState)([]), n = (0, P.useRef)(0);
	(0, P.useEffect)(() => {
		if (!e.some((e) => e.status === `uploading` || e.status === `processing` || e.status === `queued`)) return;
		let n = setTimeout(() => {
			t((e) => e.map((e) => {
				if (e.status === `queued`) return {
					...e,
					status: `uploading`,
					progress: 0
				};
				if (e.status === `uploading`) {
					let t = Math.min(100, (e.progress ?? 0) + 20);
					return e.name.includes(`fail`) && t >= 60 ? {
						...e,
						status: `error`,
						progress: t,
						message: `The connection dropped. Try again.`
					} : t >= 100 ? {
						...e,
						status: `processing`,
						progress: t
					} : {
						...e,
						progress: t
					};
				}
				return e.status === `processing` ? {
					...e,
					status: `done`
				} : e;
			}));
		}, 450);
		return () => clearTimeout(n);
	}, [e]);
	let r = (e) => t((t) => [...t, ...e.map((e) => ({
		id: `u${++n.current}`,
		name: e,
		status: `queued`
	}))]);
	return (0, K.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, K.jsx)(Ue, {
			title: `Upload files`,
			buttonLabel: `Choose files`,
			dropLabel: `or drop files here`,
			description: `JPEG, PNG, WebP, SVG or PDF, up to 20 MB each. Images become WebP with smaller copies.`,
			acceptedFileTypes: [`image/*`, `.pdf`],
			maxFileSize: 2e7,
			rejectedMessage: (e) => `${e.length === 1 ? `This file was` : `These files were`} left out, by type or size: ${e.map((e) => e.name).join(`, `)}`,
			onFiles: (e) => r(e.map((e) => e.name)),
			uploads: e,
			statusLabels: $e,
			listLabel: `Uploads`,
			onRetry: (e) => t((t) => t.map((t) => t.id === e ? {
				...t,
				name: t.name.replace(`fail-`, ``),
				status: `queued`,
				progress: 0
			} : t)),
			retryLabel: (e) => `Retry ${e.name}`,
			onRemove: (e) => t((t) => t.filter((t) => t.id !== e)),
			removeLabel: (e) => `Remove ${e.name}`
		}), (0, K.jsx)(`div`, { children: (0, K.jsx)(l, {
			size: `sm`,
			variant: `outline`,
			onPress: () => r([`summit.jpg`, `fail-river.png`]),
			children: `Simulate two uploads, one failing`
		}) })]
	});
}
function tt() {
	let [e, t] = (0, P.useState)(``), [n, r] = (0, P.useState)(`all`);
	return {
		query: e,
		setQuery: t,
		folder: n,
		setFolder: r,
		items: (0, P.useMemo)(() => Je.filter((t) => t.name.toLowerCase().includes(e.toLowerCase()) && (n === `all` || (n === `favourites` ? t.id !== `dunes` : t.id === `dunes`))), [e, n])
	};
}
var nt = [
	{
		id: `all`,
		label: `All`,
		count: 4
	},
	{
		id: `favourites`,
		label: `Favourites`,
		count: 3
	},
	{
		id: `backgrounds`,
		label: `Backgrounds`,
		count: 1
	}
];
function rt() {
	let { query: e, setQuery: t, folder: n, setFolder: r, items: i } = tt(), [a, s] = (0, P.useState)([]);
	return (0, K.jsx)(Ye, { children: (c) => (0, K.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, K.jsx)(Me, {
			container: c,
			trigger: (0, K.jsx)(l, { children: `Open the library` }),
			title: `Media library`,
			description: `Choose the images for this page. Choices stay while you search.`,
			closeLabel: `Close`,
			cancelLabel: `Cancel`,
			chooseLabel: (e) => e === 0 ? `Choose` : e === 1 ? `Choose 1 image` : `Choose ${e} images`,
			countLabel: (e) => `${e} chosen`,
			gridLabel: `Images`,
			selectLabel: `Select`,
			items: i,
			onChoose: s,
			search: {
				label: `Search images`,
				placeholder: `Search by name`,
				value: e,
				onChange: t,
				clearLabel: `Clear search`
			},
			folders: {
				label: `Folder`,
				chips: nt,
				selected: n,
				onChange: r
			},
			upload: {
				buttonLabel: `Upload`,
				onFiles: () => void 0,
				acceptedFileTypes: [`image/*`]
			},
			brokenLabel: `Preview not available`,
			emptyState: (0, K.jsx)(p, {
				size: `sm`,
				icon: (0, K.jsx)(o, { name: `search.no-results` }),
				title: `No images match`,
				description: `Try another name or folder.`
			})
		}), (0, K.jsx)(`output`, {
			"aria-live": `polite`,
			className: `text-caption text-muted`,
			children: a.length === 0 ? `Nothing chosen yet.` : `Chosen: ${a.map((e) => e.name).join(`, `)}`
		})]
	}) });
}
function it() {
	let { query: e, setQuery: t, items: n } = tt(), [r, i] = (0, P.useState)(Je.slice(0, 3)), [a, o] = (0, P.useState)([]), [c, u] = (0, P.useState)(null), [d, f] = (0, P.useState)(!1), p = d && a.length === 0 ? `Choose a cover image.` : void 0;
	return (0, K.jsx)(Ye, { children: (m) => (0, K.jsxs)(`form`, {
		className: `flex flex-col gap-5`,
		onSubmit: (e) => {
			e.preventDefault(), f(!0);
		},
		children: [
			(0, K.jsx)(Ce, {
				label: `Cover image`,
				maxItems: 1,
				value: a,
				onChange: o,
				addLabel: `Choose image`,
				replaceLabel: `Replace image`,
				onAdd: () => u(`cover`),
				itemLabel: (e) => `Cover: ${e.name}`,
				removeLabel: (e) => `Remove ${e.name}`,
				isRequired: !0,
				requiredLabel: `required`,
				...p ? { errorMessage: p } : {},
				name: `cover`,
				container: m
			}),
			(0, K.jsx)(Ce, {
				label: `Gallery`,
				description: `The first image opens the gallery. Drag or use the arrows to change the order.`,
				value: r,
				onChange: i,
				addLabel: `Add images`,
				onAdd: () => u(`gallery`),
				itemLabel: (e, t, n) => `Image ${t + 1} of ${n}: ${e.name}`,
				removeLabel: (e) => `Remove ${e.name}`,
				moveEarlierLabel: (e) => `Move ${e.name} earlier`,
				moveLaterLabel: (e) => `Move ${e.name} later`,
				movedLabel: (e, t, n) => `${e.name} is now ${t + 1} of ${n}`,
				editLabel: (e) => `Edit ${e.name}`,
				onEdit: () => void 0,
				dragLabel: (e) => `Drag ${e.name}`,
				name: `gallery`,
				container: m
			}),
			(0, K.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-3`,
				children: [(0, K.jsx)(l, {
					type: `submit`,
					children: `Save page`
				}), d && !p ? (0, K.jsx)(s, {
					tone: `ok`,
					toneLabel: `Success`,
					title: `Images saved`,
					className: `flex-1`
				}) : null]
			}),
			(0, K.jsx)(Me, {
				container: m,
				isOpen: c !== null,
				onOpenChange: (e) => {
					e || u(null);
				},
				title: c === `cover` ? `Choose a cover image` : `Add images to the gallery`,
				closeLabel: `Close`,
				cancelLabel: `Cancel`,
				chooseLabel: (e) => e === 0 ? `Choose` : `Choose ${e}`,
				countLabel: (e) => `${e} chosen`,
				gridLabel: `Images`,
				selectLabel: `Select`,
				selectionMode: c === `cover` ? `single` : `multiple`,
				items: n,
				search: {
					label: `Search images`,
					value: e,
					onChange: t
				},
				onChoose: (e) => {
					c === `cover` ? o(e.slice(0, 1)) : i((t) => [...t, ...e.filter((e) => !t.some((t) => t.id === e.id))]);
				}
			})
		]
	}) });
}
var at = [
	{
		id: `free`,
		label: `Free`,
		ratio: null
	},
	{
		id: `square`,
		label: `Square 1:1`,
		ratio: 1
	},
	{
		id: `photo`,
		label: `Photo 3:2`,
		ratio: 3 / 2
	},
	{
		id: `wide`,
		label: `Wide 16:9`,
		ratio: 16 / 9
	},
	{
		id: `hero`,
		label: `Banner 12:5`,
		ratio: 12 / 5
	},
	{
		id: `portrait`,
		label: `Portrait 3:4`,
		ratio: 3 / 4
	}
];
function ot() {
	let [e, t] = (0, P.useState)(null), [n, r] = (0, P.useState)(!1), [i, a] = (0, P.useState)(null), o = (0, P.useRef)(void 0);
	(0, P.useEffect)(() => () => clearTimeout(o.current), []);
	let s = (e) => {
		r(!0), t(null), o.current = setTimeout(() => {
			r(!1), t(e);
		}, 900);
	};
	return (0, K.jsx)(`div`, {
		ref: a,
		children: (0, K.jsx)(le, {
			src: qe[0]?.src ?? ``,
			imageWidth: 1920,
			imageHeight: 1080,
			ratios: at,
			previews: [
				{
					label: `Square`,
					ratio: 1
				},
				{
					label: `Banner`,
					ratio: 12 / 5
				},
				{
					label: `Portrait`,
					ratio: 3 / 4
				}
			],
			labels: {
				stage: `Image preview`,
				modes: `Tool`,
				crop: `Crop`,
				focal: `Focal point`,
				ratio: `Aspect ratio`,
				cropBox: `Crop frame`,
				cropBoxRole: `crop frame`,
				cropValueText: (e) => `From ${e.x}, ${e.y}, ${e.width} by ${e.height} pixels`,
				cropHint: `Drag the frame or its corners. Arrow keys move it, Shift with an arrow key resizes it.`,
				cropX: `Left edge`,
				cropY: `Top edge`,
				cropWidth: `Width`,
				cropHeight: `Height`,
				pixelUnit: `px`,
				applyCrop: `Apply crop`,
				resetCrop: `Reset`,
				focalHint: `Click the part of the image that must stay in every crop, or use the sliders.`,
				focalX: `Across`,
				focalY: `Down`,
				saveFocal: `Save focal point`,
				previews: `How it crops`,
				transform: `Rotate and flip`,
				rotateLeft: `Rotate left`,
				rotateRight: `Rotate right`,
				flipHorizontal: `Flip across`,
				flipVertical: `Flip upside down`
			},
			onApplyCrop: (e) => s({
				tone: `ok`,
				toneLabel: `Success`,
				message: `Cropped to ${e.width}×${e.height}. Smaller copies are being made again.`
			}),
			onSaveFocal: () => s({
				tone: `ok`,
				toneLabel: `Success`,
				message: `Focal point saved.`
			}),
			onRotate: () => s({
				tone: `danger`,
				toneLabel: `Error`,
				message: `The image could not be rotated: the original is read only. Upload a copy to edit it.`
			}),
			onFlip: () => s({
				tone: `warn`,
				toneLabel: `Warning`,
				message: `Flipped. The text in the image now reads backwards.`
			}),
			status: e,
			isBusy: n,
			busyLabel: `Working on the image`,
			container: i
		})
	});
}
var st = [
	{
		id: `focal`,
		label: `Crop around the focal point`
	},
	{
		id: `cover`,
		label: `Fill and crop the centre`
	},
	{
		id: `contain`,
		label: `Fit inside, no crop`
	}
], ct = [
	{
		id: `webp`,
		label: `WebP`
	},
	{
		id: `avif`,
		label: `AVIF`
	},
	{
		id: `jpeg`,
		label: `JPEG`
	},
	{
		id: `png`,
		label: `PNG`
	}
];
function lt() {
	let [e, t] = (0, P.useState)({
		name: `Banner`,
		width: 1920,
		height: 800,
		fit: `focal`,
		format: `jpeg`,
		quality: 82,
		maxKb: 300,
		requireAlt: !0,
		seoFilename: !0,
		keepTransparency: !0
	}), [n, r] = (0, P.useState)({}), [i, a] = (0, P.useState)(!1), o = e.keepTransparency && e.format === `jpeg` ? { keepTransparency: {
		tone: `warn`,
		message: `JPEG has no transparency, so the background turns white.`
	} } : {};
	return (0, K.jsxs)(`form`, {
		className: `flex flex-col gap-4`,
		onSubmit: (t) => {
			t.preventDefault();
			let n = {};
			e.name.trim() === `` && (n.name = `Give the preset a name.`), e.width < 16 && (n.width = `Use at least 16 pixels.`), r(n), a(Object.keys(n).length === 0);
		},
		children: [(0, K.jsx)(Le, {
			value: e,
			onChange: (e) => {
				t(e), a(!1);
			},
			labels: {
				name: `Name`,
				width: `Width in pixels`,
				height: `Height in pixels`,
				heightHint: `Leave empty to keep the proportions.`,
				fit: `Fit`,
				format: `Format`,
				quality: `Quality in percent`,
				qualityHint: `82 is a good balance.`,
				maxKb: `Largest file in kilobytes`,
				maxKbHint: `Quality drops until the file fits.`,
				rules: `Rules`,
				requireAlt: `Require alt text on upload`,
				seoFilename: `Readable file names`,
				keepTransparency: `Keep transparency`,
				optional: `(optional)`,
				pixelUnit: `px`,
				kilobyteUnit: `KB`,
				percentUnit: `%`
			},
			fitOptions: st,
			formatOptions: ct,
			errors: n,
			notes: o
		}), (0, K.jsxs)(`div`, {
			className: `flex flex-wrap items-center gap-3`,
			children: [(0, K.jsx)(l, {
				type: `submit`,
				children: `Save preset`
			}), (0, K.jsx)(`output`, {
				"aria-live": `polite`,
				className: `contents`,
				children: i ? (0, K.jsx)(s, {
					tone: `ok`,
					toneLabel: `Success`,
					title: `Preset saved`,
					className: `flex-1`
				}) : null
			})]
		})]
	});
}
var ut = {
	title: `Media`,
	description: `Files and images: the library grid and its tiles, uploads, a picker dialog, an ordered image field for forms, crop and focal point, and the fields of an image preset. Built to WCAG 2.2 AA as a target: every tile, frame and marker has a keyboard and screen reader path, states are said in words with a glyph, and every layout reflows from 320px.`,
	pl: {
		title: `Media`,
		description: `Pliki i obrazy: siatka biblioteki i jej kafelki, przesyłanie, okno wyboru, uporządkowane pole obrazów do formularzy, kadrowanie i punkt ostrości oraz pola presetu obrazu. Budowane z celem WCAG 2.2 AA: każdy kafelek, ramka i znacznik ma ścieżkę dla klawiatury i czytnika ekranu, stany są wypowiedziane słowami ze znakiem, a każdy układ działa od 320 px.`
	},
	demos: [
		{
			name: `MediaGrid`,
			components: [`MediaGrid`],
			description: `The files of a folder as tiles or as a list, with selection for bulk actions, an action per file, drag to reorder and files dropped from the desktop. Pick it for any library view; use MediaTile alone for one file outside a list.`,
			usage: `<MediaGrid aria-label="Files in Holidays" items={files} view="grid"
  selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}
  selectLabel="Select" onAction={openEditor}
  renderActions={(file) => <IconButton label={\`Edit \${file.name}\`} …/>}
  onMove={reorder} dragLabel={(file) => \`Drag \${file.name}\`}
  isLoading={loading} loadingLabel="Loading files"
  emptyState={<EmptyState title="This folder is empty" />} />`,
			accessibility: `A React Aria grid with one tab stop. Arrow keys move between tiles in both directions, typing a file name jumps to it, Space or the checkbox selects, Enter runs the action and Tab reaches the buttons inside the focused tile. Checkboxes are read as "Select" plus the file name. Dragging works with the pointer, with Enter on the drag handle and the arrow keys, and with screen readers. Loading is a busy status with skeleton tiles, the empty state says why it is empty, notices such as a missing alt text carry a word and a glyph, and selected tiles get a border as well as a tint. Tiles reflow from one column at 320px.`,
			pl: {
				description: `Pliki folderu jako kafelki albo lista, z zaznaczaniem do akcji zbiorczych, akcją na plik, przeciąganiem do zmiany kolejności i plikami upuszczanymi z pulpitu. Wybierz go dla każdego widoku biblioteki; do jednego pliku poza listą użyj samego MediaTile.`,
				accessibility: `Siatka React Aria z jednym przystankiem w kolejności Tab. Klawisze strzałek przesuwają między kafelkami w obu kierunkach, wpisanie nazwy pliku przeskakuje do niego, Spacja albo pole wyboru zaznacza, Enter uruchamia akcję, a Tab dociera do przycisków wewnątrz kafelka z fokusem. Pola wyboru są odczytywane jako „Select” i nazwa pliku. Przeciąganie działa wskaźnikiem, klawiszem Enter na uchwycie i klawiszami strzałek oraz z czytnikami ekranu. Ładowanie jest statusem zajętości z kafelkami-szkieletami, pusty stan mówi, dlaczego jest pusty, uwagi, takie jak brak tekstu alternatywnego, mają słowo i znak, a zaznaczone kafelki dostają ramkę, nie tylko podbarwienie. Kafelki układają się od jednej kolumny przy 320 px.`
			},
			render: () => (0, K.jsx)(Qe, {})
		},
		{
			name: `MediaTile`,
			components: [`MediaTile`],
			description: `One file: a thumbnail or the glyph of its kind, the name, the size and a notice. Use it alone in a sidebar or a detail view; MediaGrid uses it for every tile.`,
			usage: `<MediaTile file={{ id: 1, name: 'harbour.webp', kind: 'image', kindLabel: 'Image',
  src, alt: 'Hills over a calm bay', details: '182 KB · 1920×1080',
  notice: { tone: 'warn', label: 'No alt text' } }}
  brokenLabel="Preview not available"
  actions={<Button size="sm" variant="outline">Edit</Button>} />`,
			accessibility: `The thumbnail uses the file alt text, or none for decorative images, so the name is not read twice. A thumbnail that fails to load becomes a named placeholder in the danger tone. Long names wrap onto two lines and stay whole for screen readers. Buttons stay visible instead of appearing on hover, and the selected state is a border and a checked box, not a colour.`,
			pl: {
				description: `Jeden plik: miniatura albo znak jego rodzaju, nazwa, rozmiar i uwaga. Użyj go osobno w panelu bocznym albo widoku szczegółów; MediaGrid używa go dla każdego kafelka.`,
				accessibility: `Miniatura używa tekstu alternatywnego pliku, albo żadnego dla obrazów dekoracyjnych, więc nazwa nie jest odczytywana dwa razy. Miniatura, która się nie załaduje, staje się nazwanym zastępnikiem w tonie niebezpieczeństwa. Długie nazwy zawijają się do dwóch linii i zostają w całości dla czytników ekranu. Przyciski są widoczne zamiast pojawiać się po najechaniu, a stan zaznaczenia to ramka i zaznaczone pole, a nie kolor.`
			},
			render: () => (0, K.jsx)(Ze, {})
		},
		{
			name: `ImagePlaceholder`,
			components: [`ImagePlaceholder`],
			description: `The box that stands in for a missing, loading or broken image, and for files with no picture. Pick it wherever an image may be absent, so the layout never jumps.`,
			usage: `<ImagePlaceholder kind="pdf" label="PDF" />
<ImagePlaceholder state="loading" label="Loading image" />
<ImagePlaceholder state="error" label="Image could not load"
  action={<Button size="sm" variant="outline" onPress={retry}>Try again</Button>} />`,
			accessibility: `With a label it is an image with that name, and the description is linked to it; without one it is hidden. Loading is marked busy and its pulse stops under reduced motion. The error state shows a broken picture glyph and words, and becomes a group when it holds an action.`,
			pl: {
				description: `Pole, które zastępuje brakujący, ładujący się albo uszkodzony obraz oraz pliki bez obrazu. Wybierz je wszędzie tam, gdzie obrazu może nie być, aby układ nigdy nie skakał.`,
				accessibility: `Z label jest obrazem o tej nazwie, a opis jest z nim powiązany; bez niego jest ukryte. Ładowanie jest oznaczone jako zajęte, a jego pulsowanie zatrzymuje się przy ograniczonym ruchu. Stan błędu pokazuje znak uszkodzonego obrazu i słowa, a gdy zawiera akcję, staje się grupą.`
			},
			render: () => (0, K.jsx)(Xe, {})
		},
		{
			name: `UploadDropzone`,
			components: [`UploadDropzone`],
			description: `Where files are added: a picker button, a drop area and the list of running uploads with progress and status. Use it on library pages; FileInput in forms keeps files with the form instead.`,
			usage: `<UploadDropzone title="Upload files" buttonLabel="Choose files" dropLabel="or drop files here"
  description="JPEG, PNG or PDF, up to 20 MB each" acceptedFileTypes={['image/*', '.pdf']}
  maxFileSize={20_000_000} rejectedMessage={(files) => \`Left out: \${names(files)}\`}
  onFiles={upload} uploads={uploads} statusLabels={statusLabels}
  onRetry={retry} retryLabel={(item) => \`Retry \${item.name}\`} />`,
			accessibility: `The drop area is a React Aria drop zone: keyboard and screen reader users can drop into it and paste a copied file while it has focus. The picker button is described by the accepted types. Each upload is a named progress bar with its status in words and a glyph. A finished upload is announced politely and a failed one at once, with its reason; progress itself is not announced, so it never talks over the page. Rejected files are listed in a warning that stays, and nothing leaves the list on its own.`,
			pl: {
				description: `Miejsce dodawania plików: przycisk wyboru, obszar upuszczania i lista trwających przesyłań z postępem i statusem. Użyj go na stronach biblioteki; FileInput w formularzach zatrzymuje pliki razem z formularzem.`,
				accessibility: `Obszar upuszczania jest strefą upuszczania React Aria: użytkownicy klawiatury i czytników ekranu mogą upuszczać do niej i wklejać skopiowany plik, gdy ma fokus. Przycisk wyboru jest opisany przez akceptowane typy. Każde przesyłanie jest nazwanym paskiem postępu ze statusem słowami i znakiem. Zakończone przesyłanie jest ogłaszane w trybie polite, a nieudane od razu, z powodem; sam postęp nie jest ogłaszany, więc nigdy nie przekrzykuje strony. Odrzucone pliki są wymienione w ostrzeżeniu, które zostaje, i nic nie znika z listy samo.`
			},
			render: () => (0, K.jsx)(et, {})
		},
		{
			name: `MediaPicker`,
			components: [`MediaPicker`],
			description: `A dialog for choosing one or more files from the library, with search, folders and upload. Use it behind an ImageField or any "choose an image" button.`,
			usage: `<MediaPicker trigger={<Button>Open the library</Button>} title="Media library"
  closeLabel="Close" cancelLabel="Cancel" gridLabel="Images" selectLabel="Select"
  chooseLabel={(n) => \`Choose \${n}\`} countLabel={(n) => \`\${n} chosen\`}
  items={files} onChoose={setChosen}
  search={{ label: 'Search images', value: query, onChange: setQuery }}
  folders={{ label: 'Folder', chips, selected: folder, onChange: setFolder }} />`,
			accessibility: `A modal dialog named by its title: focus moves in and is held there, Escape and the close button leave it, and focus returns to the trigger. On a phone it rises from the bottom as a sheet, with the actions in a footer that never scrolls away. Choices survive a search or a folder change, the count is announced, and the choose button stays disabled until something is chosen. In single mode a click or Enter on a tile chooses it at once, and its checkbox only selects it. A load error is an assertive alert with a way to retry.`,
			pl: {
				description: `Okno wyboru jednego lub kilku plików z biblioteki, z wyszukiwaniem, folderami i przesyłaniem. Użyj go za ImageField albo dowolnym przyciskiem „wybierz obraz”.`,
				accessibility: `Okno dialogowe modalne nazwane swoim tytułem: fokus wchodzi do niego i jest w nim zatrzymany, Escape i przycisk zamknięcia z niego wychodzą, a fokus wraca na element otwierający. Na telefonie wysuwa się od dołu jako arkusz, z akcjami w stopce, która nigdy nie ucieka z widoku. Wybory przetrwają wyszukiwanie albo zmianę folderu, liczba jest ogłaszana, a przycisk wyboru jest wyłączony, dopóki coś nie zostanie wybrane. W trybie pojedynczym kliknięcie albo Enter na kafelku wybiera go od razu, a jego pole wyboru tylko zaznacza. Błąd ładowania jest komunikatem typu assertive z możliwością ponowienia.`
			},
			render: () => (0, K.jsx)(rt, {})
		},
		{
			name: `ImageField`,
			components: [`ImageField`],
			description: `A form field holding images from the library in order, such as a cover or a gallery. Pick it whenever a form saves image references; pair it with MediaPicker to add.`,
			usage: "<ImageField label=\"Gallery\" value={images} onChange={setImages}\n  addLabel=\"Add images\" onAdd={openPicker} name=\"gallery\"\n  itemLabel={(file, i, n) => `Image ${i + 1} of ${n}: ${file.name}`}\n  removeLabel={(file) => `Remove ${file.name}`}\n  moveEarlierLabel={(file) => `Move ${file.name} earlier`}\n  moveLaterLabel={(file) => `Move ${file.name} later`}\n  movedLabel={(file, i, n) => `${file.name} is now ${i + 1} of ${n}`}\n  errorMessage={error} />",
			accessibility: `A fieldset named by its label. Each image is a grid row named with its position, and its buttons are reached with Tab. Moving announces the new position and keeps focus on a move button even at the ends; removing moves focus to the next image or the add button. Drag handles add keyboard and screen reader dragging. An error is linked to the add button with aria-describedby and aria-invalid and the list gets a dashed outline, so it shows without colour too. Use requiredLabel so "required" is read.`,
			pl: {
				description: `Pole formularza przechowujące obrazy z biblioteki w kolejności, na przykład okładkę albo galerię. Wybierz je zawsze, gdy formularz zapisuje odwołania do obrazów; do dodawania połącz je z MediaPicker.`,
				accessibility: `Zestaw pól nazwany swoją etykietą. Każdy obraz jest wierszem siatki nazwanym razem z jego pozycją, a jego przyciski osiąga się klawiszem Tab. Przesunięcie ogłasza nową pozycję i zostawia fokus na przycisku przesunięcia nawet na końcach; usunięcie przenosi fokus na następny obraz albo przycisk dodawania. Uchwyty przeciągania dodają przeciąganie z klawiatury i czytnika ekranu. Błąd jest powiązany z przyciskiem dodawania przez aria-describedby i aria-invalid, a lista dostaje przerywany obrys, więc widać go także bez koloru. Użyj requiredLabel, aby odczytywane było „wymagane”.`
			},
			render: () => (0, K.jsx)(it, {})
		},
		{
			name: `ImageEditor`,
			components: [`ImageEditor`],
			description: `Crop and focal point for one image, with optional rotate and flip. Use it in a dialog or a side panel when an image has to fit fixed shapes; the app does the actual image work through the callbacks.`,
			usage: `<ImageEditor src={url} imageWidth={1920} imageHeight={1080} ratios={ratios}
  labels={labels} previews={[{ label: 'Square', ratio: 1 }]}
  onApplyCrop={crop} onSaveFocal={saveFocal} onRotate={rotate}
  status={result} isBusy={working} busyLabel="Working on the image" />`,
			accessibility: `The crop frame is one tab stop, a slider that screen readers pass the arrow keys to: arrows move it, Shift and arrows resize it, and its position is read as words from cropValueText. Number boxes set the exact edges and size, and two sliders set the focal point, so nothing needs a pointer. Corners have 24px targets. Outcomes appear in words with a glyph: errors are announced at once and others politely, and they stay until replaced. The tools sit beside the preview when the editor is wide and under it otherwise; frame lines keep a contrasting edge on any image and use the system highlight in forced colours.`,
			pl: {
				description: `Kadrowanie i punkt ostrości dla jednego obrazu, z opcjonalnym obrotem i odbiciem. Użyj go w oknie dialogowym albo panelu bocznym, gdy obraz musi pasować do stałych kształtów; faktyczną pracę na obrazie wykonuje aplikacja przez wywołania zwrotne.`,
				accessibility: `Ramka kadru jest jednym przystankiem w kolejności Tab, suwakiem, któremu czytniki ekranu przekazują klawisze strzałek: strzałki ją przesuwają, Shift ze strzałkami zmienia rozmiar, a jej pozycja jest odczytywana słowami z cropValueText. Pola liczbowe ustawiają dokładne krawędzie i rozmiar, a dwa suwaki ustawiają punkt ostrości, więc nic nie wymaga wskaźnika. Cele w rogach mają 24 px. Wyniki pojawiają się słowami ze znakiem: błędy są ogłaszane od razu, a pozostałe w trybie polite, i zostają do zastąpienia. Narzędzia leżą obok podglądu, gdy edytor jest szeroki, a pod nim w przeciwnym razie; linie ramki zachowują kontrastową krawędź na dowolnym obrazie i używają wyróżnienia systemowego w trybie wymuszonych kolorów.`
			},
			render: () => (0, K.jsx)(ot, {})
		},
		{
			name: `PresetFields`,
			components: [`PresetFields`],
			description: `The fields of one image preset: name, size, fit, format, quality, weight limit and rules. Use it in the form that creates or edits a preset.`,
			usage: `<PresetFields value={preset} onChange={setPreset} labels={labels}
  fitOptions={fits} formatOptions={formats}
  errors={{ name: 'Give the preset a name.' }}
  notes={{ keepTransparency: { tone: 'warn', message: 'JPEG has no transparency.' } }} />`,
			accessibility: `Every field has a visible label, and optional ones say so in words. Number boxes step with the arrow keys and read the value in the reader locale; units are shown and named in the labels. Errors are linked with aria-describedby and set aria-invalid; notes that do not block, such as the JPEG warning, carry a glyph and words. The grid goes from one column on a phone to four on a wide screen.`,
			pl: {
				description: `Pola jednego presetu obrazu: nazwa, rozmiar, dopasowanie, format, jakość, limit wagi i reguły. Użyj ich w formularzu, który tworzy albo edytuje preset.`,
				accessibility: `Każde pole ma widoczną etykietę, a opcjonalne mówią o tym słowami. Pola liczbowe zmieniają wartość klawiszami strzałek i odczytują ją w ustawieniach regionalnych czytelnika; jednostki są pokazane i nazwane w etykietach. Błędy są powiązane przez aria-describedby i ustawiają aria-invalid; uwagi, które nie blokują, takie jak ostrzeżenie o JPEG, mają znak i słowa. Siatka przechodzi z jednej kolumny na telefonie do czterech na szerokim ekranie.`
			},
			render: () => (0, K.jsx)(lt, {})
		}
	]
};
export { Ge as t };
