import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { n } from "./react-dom.B9zIfLd2.js";
import { n as r, t as i } from "./jsx-runtime.yrTYNGQT.js";
var a = t(n(), 1), o = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/></svg>`, s = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"></path></svg>`;
function c(e, t, n, r) {
	let i = e.createElement(t);
	return n && (i.className = n), r !== void 0 && (i.textContent = r), i;
}
function l(e, t, n) {
	let r = c(e, `p`, `sk-ai-note`), i = c(e, `a`, `sk-ai-note__link`, n.whatIsSent);
	return i.href = t.sentHref, r.append(c(e, `span`, `sk-ai-note__badge`, n.aiGenerated), c(e, `span`, `sk-ai-note__model`, `${n.model}: ${t.model}`), c(e, `span`, `sk-ai-note__provider`, `${n.provider}: ${t.provider}`), i), r;
}
var u = 0;
function d(e, t, n, { doc: r = e.ownerDocument } = {}) {
	let i = `sk-assistant-${++u}`, a = c(r, `button`, `sk-icon-button sk-assistant-button`);
	a.type = `button`, a.setAttribute(`aria-haspopup`, `dialog`), a.setAttribute(`aria-label`, n.open), a.title = n.open, a.innerHTML = o;
	let d = c(r, `dialog`, `sk-assistant`);
	d.setAttribute(`aria-labelledby`, `${i}-title`);
	let f = c(r, `div`, `sk-assistant__head`), p = c(r, `h2`, `sk-assistant__title`, n.title);
	p.id = `${i}-title`;
	let m = c(r, `button`, `sk-icon-button`);
	m.type = `button`, m.setAttribute(`aria-label`, n.close), m.innerHTML = s, f.append(p, m);
	let h = c(r, `div`, `sk-assistant__log`);
	h.setAttribute(`role`, `log`), h.setAttribute(`aria-live`, `polite`), h.setAttribute(`aria-label`, n.log), h.tabIndex = 0;
	let g = c(r, `p`, `sk-assistant__status`);
	g.setAttribute(`role`, `status`);
	let _ = c(r, `form`, `sk-assistant__form`);
	_.noValidate = !0;
	let v = c(r, `label`, `sk-assistant__label`, n.questionLabel);
	v.htmlFor = `${i}-question`;
	let y = c(r, `span`, `sk-assistant__hint`, n.questionHint);
	y.id = `${i}-hint`;
	let b = c(r, `textarea`, `sk-assistant__input`);
	b.id = `${i}-question`, b.rows = 3, b.setAttribute(`aria-describedby`, `${y.id} ${i}-status`), g.id = `${i}-status`;
	let x = c(r, `button`, `sk-assistant__send`, n.send);
	x.type = `submit`, _.append(v, y, b, x), d.append(f, h, l(r, t, n), c(r, `p`, `sk-assistant__privacy`, n.privacyNote), g, _), e.append(a, d);
	let S = null, C = null, w = (e, t, i = []) => {
		let a = c(r, `div`, `sk-assistant__message`);
		if (a.append(c(r, `strong`, `sk-assistant__who`, e), c(r, `p`, `sk-assistant__text`, t)), i.length) {
			let e = c(r, `ul`, `sk-assistant__sources`);
			e.setAttribute(`aria-label`, n.sources);
			for (let t of i) {
				let n = c(r, `li`), i = c(r, `a`, void 0, t.title);
				i.href = t.href, n.append(i), e.append(n);
			}
			a.append(e);
		}
		h.append(a), h.scrollTop = h.scrollHeight;
	}, T = () => {
		d.open || (S = r.activeElement, d.showModal(), b.focus());
	}, E = () => {
		C?.abort(), C = null, d.close();
	};
	return a.addEventListener(`click`, T), m.addEventListener(`click`, E), d.addEventListener(`keydown`, (e) => {
		e.key === `Escape` && (e.preventDefault(), E());
	}), d.addEventListener(`click`, (e) => {
		e.target === d && E();
	}), d.addEventListener(`close`, () => {
		C?.abort(), C = null, x.removeAttribute(`aria-disabled`), g.textContent = ``, S instanceof HTMLElement && S !== r.body ? S.focus() : a.focus();
	}), _.addEventListener(`submit`, (e) => {
		if (e.preventDefault(), C) return;
		let r = b.value.trim();
		if (!r) {
			g.textContent = n.emptyQuestion, b.setAttribute(`aria-invalid`, `true`), b.focus();
			return;
		}
		b.removeAttribute(`aria-invalid`), w(n.you, r), b.value = ``, g.textContent = n.sending, x.setAttribute(`aria-disabled`, `true`);
		let i = new AbortController();
		C = i, (async () => {
			try {
				let e = await t.ask(r, { signal: i.signal });
				if (C !== i) return;
				C = null, x.removeAttribute(`aria-disabled`), g.textContent = ``, w(n.assistant, e.text, e.sources);
			} catch {
				if (C !== i) return;
				C = null, x.removeAttribute(`aria-disabled`), g.textContent = n.error, b.value = r, b.focus();
			}
		})();
	}), {
		button: a,
		dialog: d,
		destroy() {
			C?.abort(), a.remove(), d.remove();
		}
	};
}
var f = i();
function p({ adapter: e, labels: t, inline: n = !1, className: i }) {
	let o = (0, a.useRef)(null);
	return (0, a.useEffect)(() => {
		let n = o.current;
		if (!n) return;
		let r = d(n, e, t);
		return () => r.destroy();
	}, [e, t]), (0, f.jsx)(`div`, {
		ref: o,
		className: r(n && `sk-assistant-host--inline`, i)
	});
}
var m = e({ default: () => _ }), h = {
	open: `Ask the assistant`,
	title: `Ask the assistant`,
	close: `Close the assistant`,
	log: `Conversation`,
	questionLabel: `Your question`,
	questionHint: `Write in your own words, then press Send.`,
	send: `Send`,
	sending: `Sending…`,
	emptyQuestion: `Write a question first.`,
	error: `The assistant did not answer. Your question is back in the field.`,
	you: `You`,
	assistant: `Assistant`,
	sources: `Sources`,
	aiGenerated: `AI generated`,
	model: `Model`,
	provider: `Provider`,
	whatIsSent: `What is sent`,
	privacyNote: `Your question is sent to the model named below. This demo sends nothing.`
}, g = {
	model: `Demo model`,
	provider: `Demo provider`,
	sentHref: `#sent`,
	ask: (e, { signal: t }) => new Promise((n, r) => {
		let i = setTimeout(() => n({
			text: `This is a canned answer to "${e}". A real adapter would call a model here.`,
			sources: [{
				title: `Getting started`,
				href: `#start`
			}]
		}), 300);
		t.addEventListener(`abort`, () => {
			clearTimeout(i), r(new DOMException(`Aborted`, `AbortError`));
		});
	})
}, _ = {
	title: `Assistant`,
	description: `The assistant widget, interface only: a button, a dialog and a conversation log. It talks to an adapter that the page passes in, and sends nothing itself.`,
	pl: {
		title: `Asystent`,
		description: `Widżet asystenta, tylko interfejs: przycisk, okno dialogowe i dziennik rozmowy. Rozmawia z adapterem, który przekazuje strona, i sam nic nie wysyła.`
	},
	demos: [{
		name: `AssistantWidget`,
		components: [`AssistantWidget`],
		description: `A button that opens a dialog with a question field, the conversation and the AI note. The page passes an adapter with an ask function, the model, the provider and the link to what is sent. Every label is a prop. This demo uses a fake adapter with canned answers.`,
		usage: `const adapter = {
  model: 'Example model 1',
  provider: 'Example provider',
  sentHref: '/privacy#ai',
  ask: async (question, { signal }) => ({ text: await callYourService(question, signal) })
}

<AssistantWidget adapter={adapter} labels={labels} />`,
		accessibility: `The button is a real button that opens a real dialog: focus moves to the question field, stays inside while the dialog is open, and returns to the button on close. Escape closes it. The conversation is a log region, so each answer is read out as it arrives; sending, an empty question and an error are announced in a status region. Reduced motion and the panel's motion switch stop the opening animation. It works at 320 px.`,
		pl: {
			description: `Przycisk, który otwiera okno dialogowe z polem na pytanie, rozmową i notatką o AI. Strona przekazuje adapter z funkcją ask, modelem, dostawcą i linkiem do tego, co jest wysyłane. Każda etykieta jest propem. Ten przykład używa udawanego adaptera z gotowymi odpowiedziami.`,
			accessibility: `Przycisk jest prawdziwym przyciskiem, który otwiera prawdziwe okno dialogowe: fokus przechodzi do pola pytania, zostaje w oknie, dopóki jest otwarte, i wraca na przycisk po zamknięciu. Escape zamyka okno. Rozmowa jest regionem dziennika, więc każda odpowiedź jest odczytywana, gdy się pojawi; wysyłanie, puste pytanie i błąd ogłasza region statusu. Ograniczony ruch i przełącznik ruchu w panelu zatrzymują animację otwarcia. Działa przy 320 px.`
		},
		render: () => (0, f.jsx)(p, {
			inline: !0,
			adapter: g,
			labels: h
		})
	}]
};
export { m as t };
