import { t as e } from "./LetterMark.Cqw2_JUz.js";
import { t } from "./jsx-runtime.yrTYNGQT.js";
var n = t(), r = {
	github: {
		letters: `GH`,
		color: `var(--sk-fg)`
	},
	gitlab: {
		letters: `GL`,
		color: `var(--sk-tool-agent)`
	},
	bitbucket: {
		letters: `BB`,
		color: `var(--sk-tool-tracker)`
	},
	gitea: {
		letters: `Gt`,
		color: `var(--sk-muted)`
	},
	azure: {
		letters: `Az`,
		color: `var(--sk-info)`
	}
};
function i({ kind: t, label: i, src: a, color: o, size: s = 28, className: c }) {
	let l = r[t];
	return (0, n.jsx)(e, {
		letters: l.letters,
		label: i,
		color: o ?? l.color,
		src: a,
		size: s,
		shape: a ? `circle` : `tile`,
		className: c
	});
}
export { r as n, i as t };
