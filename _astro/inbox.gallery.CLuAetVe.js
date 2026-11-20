import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { n } from "./react-dom.B9zIfLd2.js";
import { t as r } from "./Button.reJVLFTj.js";
import { t as i } from "./Link.B8StT9b2.js";
import { t as a } from "./EmptyState.CnX1CHuI.js";
import { _ as o, d as s, g as c } from "./useOverflow.Dq483xd0.js";
import { t as l } from "./safeUrl.OLiFaaCH.js";
import { t as u } from "./useDateFormatter.B5zP918D.js";
import { t as d } from "./IconButton.BlECy7MW.js";
import { t as f } from "./Badge.BtjCZkbj.js";
var p = t(n(), 1), m = [`agent-waiting`];
function h(e) {
	return e.readAt === null;
}
function g(e, t = m) {
	return e.reason !== void 0 && t.includes(e.reason.id);
}
function _(e, t = m) {
	let n = (e) => {
		if (!h(e)) return t.length + 1;
		let n = e.reason ? t.indexOf(e.reason.id) : -1;
		return n === -1 ? t.length : n;
	};
	return e.toSorted((e, t) => n(e) - n(t) || Date.parse(t.createdAt) - Date.parse(e.createdAt) || e.id.localeCompare(t.id));
}
var v = c(), y = {
	success: {
		tone: `ok`,
		icon: `status.ok`,
		text: `text-ok`
	},
	info: {
		tone: `info`,
		icon: `status.info`,
		text: `text-info`
	},
	warning: {
		tone: `warn`,
		icon: `status.warning`,
		text: `text-warn`
	},
	error: {
		tone: `danger`,
		icon: `status.failed`,
		text: `text-danger`
	}
}, b = [
	`http`,
	`https`,
	`mailto`
], x = `rounded-sm text-fg no-underline outline-none data-hovered:underline data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-focus pointer-coarse:inline-block pointer-coarse:min-h-11 pointer-coarse:py-2.5`;
function S({ notification: e, labels: t, isPriority: n = !1, compact: r = !1, onOpen: a, onMarkRead: c, linkComponent: m, formatTime: g, container: _, className: S, ...C }) {
	let w = (0, p.useRef)(null), T = (0, p.useRef)(!1), E = (0, p.useCallback)(() => {
		T.current = !0, c?.(e.id);
	}, [c, e.id]), D = u({
		dateStyle: `medium`,
		timeStyle: `short`
	}), O = h(e);
	(0, p.useEffect)(() => {
		!O && T.current && (T.current = !1, (w.current?.querySelector(`a[href]`) ?? w.current)?.focus());
	}, [O]);
	let k = y[e.tone], A = new Date(e.createdAt), j = Number.isNaN(A.getTime()) ? e.createdAt : g ? g(A) : D.format(A), M = m ? (e) => (0, v.jsx)(m, { ...e }) : void 0, N = e.url === void 0 ? null : l(e.url, b), P = N ? (0, v.jsx)(i, {
		href: N,
		...M ? { render: M } : {},
		...a ? { onPress: () => a(e) } : {},
		className: x,
		children: e.title
	}) : (0, v.jsx)(`span`, { children: e.title });
	return (0, v.jsxs)(`li`, {
		...C,
		ref: w,
		tabIndex: -1,
		"data-unread": O || void 0,
		"data-priority": n || void 0,
		className: o(`grid grid-cols-[1.25rem_minmax(0,1fr)_auto] items-start gap-x-3 rounded-md text-body`, r ? `px-2 py-2` : `px-3 py-3`, `border-s-2`, O ? `border-accent bg-surface` : `border-transparent`, `outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus`, S),
		children: [
			(0, v.jsxs)(`span`, {
				className: o(`relative mt-0.5 inline-flex size-5 items-center justify-center`, k.text),
				children: [(0, v.jsx)(s, {
					name: k.icon,
					"aria-hidden": !0,
					className: `size-4`
				}), t.tones ? (0, v.jsx)(`span`, {
					className: `sr-only`,
					children: t.tones[e.tone]
				}) : null]
			}),
			(0, v.jsxs)(`div`, {
				className: `min-w-0`,
				children: [
					(0, v.jsxs)(`p`, {
						className: o(`flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 [overflow-wrap:anywhere]`, O ? `font-semibold text-fg` : `font-normal text-muted`),
						children: [O ? (0, v.jsxs)(v.Fragment, { children: [(0, v.jsx)(`span`, {
							"aria-hidden": !0,
							className: `size-2 shrink-0 rounded-full bg-accent forced-colors:bg-[Highlight]`
						}), (0, v.jsx)(`span`, {
							className: `sr-only`,
							children: `${t.unread}: `
						})] }) : null, P]
					}),
					(0, v.jsxs)(`div`, {
						className: `mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-caption text-muted`,
						children: [e.reason ? (0, v.jsx)(f, {
							size: `sm`,
							tone: n ? `warn` : `neutral`,
							...n ? { icon: (0, v.jsx)(s, { name: `agent.bot` }) } : {},
							...e.reason.description ? { title: e.reason.description } : {},
							children: e.reason.title
						}) : null, (0, v.jsx)(`time`, {
							dateTime: e.createdAt,
							className: `tabular-nums`,
							children: j
						})]
					}),
					e.body && !r ? (0, v.jsx)(`p`, {
						className: `mt-1.5 text-body text-muted [overflow-wrap:anywhere]`,
						children: e.body
					}) : null
				]
			}),
			O && c ? (0, v.jsx)(d, {
				label: t.markRead,
				size: `sm`,
				container: _ ?? null,
				onPress: E,
				className: `pointer-coarse:size-11`,
				children: (0, v.jsx)(s, {
					name: `action.check`,
					"aria-hidden": !0
				})
			}) : (0, v.jsx)(`span`, { "aria-hidden": !0 })
		]
	});
}
var C = (0, v.jsx)(s, { name: `nav.inbox` });
function w(e, t) {
	let n = (0, p.useRef)(null), r = (0, p.useRef)(t), [i, a] = (0, p.useState)(``);
	return (0, p.useEffect)(() => {
		r.current = t;
	}, [t]), (0, p.useEffect)(() => {
		let t = e.map((e) => e.id);
		if (n.current === null) {
			n.current = new Set(t);
			return;
		}
		let i = n.current, o = e.filter((e) => !i.has(e.id) && h(e)).length;
		for (let e of t) i.add(e);
		o > 0 && a(r.current(o));
	}, [e]), i;
}
function T({ notifications: e, labels: t, variant: n = `full`, priorityReasons: c = m, limit: u, viewAllHref: d, onOpen: f, onMarkRead: y, onMarkAllRead: b, linkComponent: x, formatTime: T, headingLevel: E = 2, hideTitle: D = !1, emptyAction: O, container: k, className: A, ...j }) {
	let M = (0, p.useId)(), N = n === `compact`, P = (0, p.useMemo)(() => _(e, c), [e, c]), F = u === void 0 ? P : P.slice(0, Math.max(0, u)), I = e.filter(h).length, L = w(e, t.newItems), R = `h${E}`, z = (0, p.useRef)(null), B = (0, p.useRef)(!1);
	(0, p.useEffect)(() => {
		I > 0 || !B.current || (B.current = !1, z.current?.focus());
	}, [I]);
	let V = (0, p.useCallback)(() => {
		B.current = !0, b?.();
	}, [b]), H = d === void 0 ? null : l(d, [`http`, `https`]), { unread: U, markRead: W, tones: G } = t, K = (0, p.useMemo)(() => ({
		unread: U,
		markRead: W,
		...G ? { tones: G } : {}
	}), [
		U,
		W,
		G
	]);
	return (0, v.jsxs)(`section`, {
		...j,
		"aria-labelledby": M,
		"data-variant": n,
		className: o(`flex min-w-0 flex-col text-body text-fg`, N ? `gap-1` : `gap-3`, A),
		children: [
			(0, v.jsxs)(`div`, {
				className: o(`flex flex-wrap items-center justify-between gap-2`, D && !b && `sr-only`),
				children: [(0, v.jsxs)(R, {
					id: M,
					ref: z,
					tabIndex: -1,
					className: o(`flex min-w-0 items-center gap-2 font-semibold outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus`, N ? `text-body` : `text-title`, D && `sr-only`),
					children: [(0, v.jsx)(`span`, {
						className: `min-w-0 wrap-break-word`,
						children: t.title
					}), I > 0 && t.unreadCount ? (0, v.jsx)(`span`, {
						className: `text-caption font-normal text-muted tabular-nums`,
						children: t.unreadCount(I)
					}) : null]
				}), b && I > 0 ? (0, v.jsxs)(r, {
					variant: `ghost`,
					size: `sm`,
					onPress: V,
					className: `pointer-coarse:min-h-11`,
					children: [(0, v.jsx)(s, {
						name: `status.checked`,
						"aria-hidden": !0
					}), t.markAllRead]
				}) : null]
			}),
			F.length === 0 ? (0, v.jsx)(a, {
				size: N ? `sm` : `md`,
				headingLevel: E === 6 ? 6 : E + 1,
				icon: C,
				title: t.empty,
				...t.emptyDescription ? { description: t.emptyDescription } : {},
				...O ? { actions: O } : {}
			}) : (0, v.jsx)(`ul`, {
				"aria-labelledby": M,
				className: o(`m-0 flex list-none flex-col p-0`, N ? `gap-0.5` : `gap-1`),
				children: F.map((e) => (0, v.jsx)(S, {
					notification: e,
					labels: K,
					isPriority: h(e) && g(e, c),
					compact: N,
					...f ? { onOpen: f } : {},
					...y ? { onMarkRead: y } : {},
					...x ? { linkComponent: x } : {},
					...T ? { formatTime: T } : {},
					...k === void 0 ? {} : { container: k }
				}, e.id))
			}),
			H && t.viewAll ? (0, v.jsx)(i, {
				href: H,
				...x ? { render: (e) => (0, v.jsx)(x, { ...e }) } : {},
				className: `inline-flex min-h-control-sm items-center gap-1 self-start rounded-sm text-body text-accent-text underline-offset-2 outline-none data-hovered:underline data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-focus pointer-coarse:min-h-11`,
				children: t.viewAll
			}) : null,
			(0, v.jsx)(`output`, {
				className: `sr-only`,
				children: L
			})
		]
	});
}
var E = e({ default: () => N }), D = {
	title: `Notifications`,
	markAllRead: `Mark all as read`,
	markRead: `Mark as read`,
	unread: `Unread`,
	empty: `You are all caught up`,
	emptyDescription: `New notifications from your apps appear here.`,
	newItems: (e) => e === 1 ? `1 new notification` : `${e} new notifications`,
	unreadCount: (e) => `${e} unread`,
	viewAll: `See all notifications`,
	tones: {
		success: `Success`,
		info: `Information`,
		warning: `Warning`,
		error: `Error`
	}
}, O = (e) => new Date(Date.UTC(2026, 10, 19, 9, e)).toISOString(), k = {
	id: `n2`,
	app: `tracker`,
	tone: `warning`,
	title: `The agent waits for your answer on SK-14`,
	body: `It asks which of two migrations to keep.`,
	url: `#/inbox/n2`,
	createdAt: O(10),
	readAt: null,
	reason: {
		id: `agent-waiting`,
		title: `Agent waiting`,
		description: `An agent needs a person to go on`
	}
}, A = [
	{
		id: `n1`,
		app: `tracker`,
		tone: `info`,
		title: `Ola commented on SK-12, Sign-in page`,
		body: `Could the error say which field is wrong?`,
		url: `#/inbox/n1`,
		createdAt: O(40),
		readAt: null,
		reason: {
			id: `comment`,
			title: `Comment`
		}
	},
	k,
	{
		id: `n3`,
		app: `hub`,
		tone: `success`,
		title: `The nightly backup finished`,
		createdAt: O(5),
		readAt: O(20),
		reason: {
			id: `backup`,
			title: `Backup`
		}
	},
	{
		id: `n4`,
		app: `hub`,
		tone: `error`,
		title: `A sign-in from a new device was blocked`,
		url: `#/inbox/n4`,
		createdAt: O(0),
		readAt: O(2),
		reason: {
			id: `security`,
			title: `Security`
		}
	}
], j = (e) => new Intl.DateTimeFormat(`en-GB`, {
	hour: `2-digit`,
	minute: `2-digit`,
	timeZone: `UTC`
}).format(e);
function M({ compact: e = !1 }) {
	let [t, n] = (0, p.useState)(A), i = (e) => n((t) => t.map((t) => e === void 0 || t.id === e ? {
		...t,
		readAt: O(59)
	} : t));
	return e ? (0, v.jsx)(`div`, {
		className: `w-[min(22rem,100%)] rounded-lg border border-border bg-raised p-2 shadow-md`,
		children: (0, v.jsx)(T, {
			notifications: t,
			labels: D,
			variant: `compact`,
			limit: 3,
			viewAllHref: `#/inbox`,
			onMarkAllRead: () => i(),
			formatTime: j
		})
	}) : (0, v.jsxs)(`div`, {
		className: `flex max-w-2xl flex-col gap-3`,
		children: [(0, v.jsx)(T, {
			notifications: t,
			labels: D,
			onMarkRead: (e) => i(e),
			onMarkAllRead: () => i(),
			formatTime: j
		}), (0, v.jsx)(r, {
			variant: `outline`,
			size: `sm`,
			className: `self-start`,
			onPress: () => n((e) => [{
				id: `n${e.length + 1}`,
				app: `tracker`,
				tone: `warning`,
				title: `The agent waits for your answer on SK-${20 + e.length}`,
				url: `#/inbox/n${e.length + 1}`,
				createdAt: O(50),
				readAt: null,
				reason: {
					id: `agent-waiting`,
					title: `Agent waiting`
				}
			}, ...e]),
			children: `Bring a new notification`
		})]
	});
}
var N = {
	title: `Inbox`,
	status: `stable`,
	description: `The notifications of a person across the Skribly apps, newest first, with what waits for them on top.`,
	pl: {
		title: `Skrzynka powiadomień`,
		description: `Powiadomienia użytkownika ze wszystkich aplikacji Skribly, od najnowszych, z tym, co na niego czeka, na górze.`
	},
	demos: [
		{
			name: `Inbox`,
			components: [`Inbox`],
			description: `A list of the notifications the app passes in, typed after the notification contract of core. Unread items come before read ones, and an agent waiting for a person comes before every other reason. Each item shows its reason, its time in the locale of the person and, when it has a link, its title as the link. Mark one or all as read; a new item is announced. The component fetches nothing.`,
			accessibility: `A region named by the title, with the items as a list. Unread items say so in words to a screen reader and show a dot and a bolder title, never colour alone; the tone has a glyph and, with labels.tones, a word. Tab reaches each link and each mark-read button, which has its own label and a tooltip. When a mark-read button goes, the focus moves to the title link of its item (or the item), and after mark all read to the title. New unread items are announced politely, the first render is not. Every target is at least 44px on touch.`,
			pl: {
				description: `Lista powiadomień przekazanych przez aplikację, opisanych typem kontraktu powiadomień z core. Nieprzeczytane są przed przeczytanymi, a agent czekający na użytkownika jest przed każdym innym powodem. Każda pozycja pokazuje powód, czas w formacie regionalnym użytkownika i, gdy ma link, tytuł jako link. Oznacz jedno lub wszystkie jako przeczytane; nową pozycję ogłasza region statusu. Komponent niczego nie pobiera.`,
				accessibility: `Region nazwany tytułem, z pozycjami jako listą. Nieprzeczytane pozycje mówią o tym czytnikowi ekranu słowem i pokazują kropkę oraz grubszy tytuł, nigdy sam kolor; ton ma glif, a z labels.tones także słowo. Tab dochodzi do każdego linku i każdego przycisku oznaczenia jako przeczytane, który ma własną etykietę i dymek podpowiedzi. Gdy przycisk oznaczenia znika, fokus przechodzi na link tytułu tej pozycji (albo na samą pozycję), a po oznaczeniu wszystkich na tytuł. Nowe nieprzeczytane pozycje ogłasza region statusu typu polite, pierwszego wyświetlenia nie. Każdy cel ma co najmniej 44px na ekranie dotykowym.`
			},
			usage: `<Inbox
  notifications={notifications}
  labels={labels}
  onOpen={(item) => markRead(item.id)}
  onMarkRead={markRead}
  onMarkAllRead={markAllRead}
  linkComponent={Link}
/>`,
			render: () => (0, v.jsx)(M, {})
		},
		{
			name: `Inbox, compact`,
			components: [`Inbox`],
			description: `The compact variant for the notifications slot of AppShell: shorter rows without the body, a limit and a link to the full inbox.`,
			pl: { description: `Wariant kompaktowy do miejsca na powiadomienia w AppShell: niższe wiersze bez treści, limit i link do pełnej skrzynki.` },
			usage: `<AppShell
  notifications={{
    label: 'Notifications, 2 new',
    title: 'Notifications',
    badge: 2,
    content: <Inbox notifications={items} labels={labels} variant="compact" limit={5} viewAllHref="/inbox" hideTitle />
  }}
/>`,
			render: () => (0, v.jsx)(M, { compact: !0 })
		},
		{
			name: `Inbox, empty`,
			components: [`Inbox`],
			description: `With no notifications the inbox shows its empty state, with the words of labels.empty.`,
			pl: { description: `Bez powiadomień skrzynka pokazuje stan pustej listy ze słowami z labels.empty.` },
			render: () => (0, v.jsx)(T, {
				notifications: [],
				labels: D
			})
		},
		{
			name: `InboxItem`,
			components: [`InboxItem`],
			description: `One notification on its own, for a list an app lays out itself. isPriority gives the reason its warning badge.`,
			accessibility: `Put it inside a ul or ol: it is a list item. Unread says so in words to a screen reader, with a dot and a bolder title, never colour alone. The title is a link only for an http, https or mailto url or a relative one; any other scheme leaves plain text. The mark-read button has its own label; when it goes, the focus moves to the title link or to the item.`,
			pl: {
				description: `Jedno powiadomienie osobno, do listy, którą aplikacja układa sama. isPriority daje powodowi plakietkę ostrzeżenia.`,
				accessibility: `Umieść je w ul albo ol: to pozycja listy. Nieprzeczytane mówi o tym czytnikowi ekranu słowem, z kropką i grubszym tytułem, nigdy samym kolorem. Tytuł jest linkiem tylko dla adresu http, https, mailto albo względnego; każdy inny schemat zostawia zwykły tekst. Przycisk oznaczenia jako przeczytane ma własną etykietę; gdy znika, fokus przechodzi na link tytułu albo na pozycję.`
			},
			usage: `<ul>
  <InboxItem notification={item} labels={labels} isPriority onMarkRead={markRead} linkComponent={Link} />
</ul>`,
			render: () => (0, v.jsx)(`ul`, {
				className: `m-0 max-w-2xl list-none p-0`,
				children: (0, v.jsx)(S, {
					notification: k,
					labels: D,
					isPriority: !0,
					formatTime: j,
					onMarkRead: () => {}
				})
			})
		}
	]
};
export { E as t };
