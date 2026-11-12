import { t as e } from "./LetterMark.Cqw2_JUz.js";
import { t } from "./jsx-runtime.yrTYNGQT.js";
var n = t(), r = {
	skribly: {
		letters: `ST`,
		color: `var(--sk-tool-tracker)`
	},
	jira: {
		letters: `J`,
		color: `var(--sk-info)`
	},
	redmine: {
		letters: `R`,
		color: `var(--sk-muted)`
	},
	github: {
		letters: `GH`,
		color: `var(--sk-fg)`
	},
	gitlab: {
		letters: `GL`,
		color: `var(--sk-tool-agent)`
	},
	linear: {
		letters: `L`,
		color: `var(--sk-tool-skills)`
	}
};
function i({ kind: t, label: i, color: a, size: o = 30, className: s }) {
	let c = r[t];
	return (0, n.jsx)(e, {
		letters: c.letters,
		label: i,
		color: a ?? c.color,
		size: o,
		shape: `tile`,
		className: s
	});
}
export { r as n, i as t };
