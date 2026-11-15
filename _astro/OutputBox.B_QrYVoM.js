import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { A as n, F as r, I as i, S as a, Z as o, j as s, y as c } from "./doc.DoLlUurT.js";
import { t as l } from "./Text.CWB1nGTv.js";
import { n as u } from "./useFormReset.ClC-r4N4.js";
import { i as d, n as f, r as p, t as m } from "./Tabs.CDwEhZFC.js";
import { n as h, t as g } from "./TextField.B-FkpKii.js";
var _ = e(t(), 1);
function v() {
	return {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
}
var y = v();
function b(e) {
	y = e;
}
var x = { exec: () => null };
function S(e) {
	let t = [];
	return (n) => {
		let r = Math.max(0, Math.min(3, n - 1)), i = t[r];
		return i || (i = e(r), t[r] = i), i;
	};
}
function C(e, t = ``) {
	let n = typeof e == `string` ? e : e.source, r = {
		replace: (e, t) => {
			let i = typeof t == `string` ? t : t.source;
			return i = i.replace(T.caret, `$1`), n = n.replace(e, i), r;
		},
		getRegex: () => new RegExp(n, t)
	};
	return r;
}
var w = ((e = ``) => {
	try {
		return !!RegExp(`(?<=1)(?<!1)` + e);
	} catch {
		return !1;
	}
})(), T = {
	codeRemoveIndent: /^(?: {0,3}\t| {1,4})/gm,
	outputLinkReplace: /\\([\[\]])/g,
	indentCodeCompensation: /^(\s+)(?:```)/,
	beginningSpace: /^\s+/,
	endingHash: /#$/,
	startingSpaceChar: /^ /,
	endingSpaceChar: / $/,
	endingSpaceTabChar: /[ \t]$/,
	nonSpaceChar: /[^ ]/,
	newLineCharGlobal: /\n/g,
	tabCharGlobal: /\t/g,
	leadingSpaceTab: /^[ \t]+/,
	multipleSpaceGlobal: /\s+/g,
	blankLine: /^[ \t]*$/,
	doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
	blockquoteStart: /^ {0,3}>/,
	blockquoteSetextReplace: /\n {0,3}((?:=+|-+)[ \t]*)(?=\n|$)/g,
	blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
	blockquoteMarkerWhitespace: /^( {0,3}>)([ \t]+)/gm,
	listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
	listIsTask: /^\[[ xX]\][ \t]+\S/,
	listReplaceTask: /^\[[ xX]\][ \t]+/,
	listTaskCheckbox: /\[[ xX]\]/,
	anyLine: /\n.*\n/,
	hrefBrackets: /^<(.*)>$/,
	tableDelimiter: /[:|]/,
	tableAlignChars: /^\||\| *$/g,
	tableRowBlankLine: /\n[ \t]*$/,
	tableAlignRight: /^ *-+: *$/,
	tableAlignCenter: /^ *:-+: *$/,
	tableAlignLeft: /^ *:-+ *$/,
	startATag: /^<a /i,
	endATag: /^<\/a>/i,
	startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
	endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
	startAngleBracket: /^</,
	endAngleBracket: />$/,
	pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
	unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
	numericCharacterReference: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,
	numericCharacterReferenceOrAmpersand: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
	escapeTest: /[&<>"']/,
	escapeReplace: /[&<>"']/g,
	escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
	escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
	caret: /(^|[^\[])\^/g,
	percentDecode: /%25/g,
	findPipe: /\|/g,
	splitPipe: / \|/,
	slashPipe: /\\\|/g,
	carriageReturn: /\r\n|\r/g,
	spaceLine: /^ +$/gm,
	notSpaceStart: /^\S*/,
	endingNewline: /\n$/,
	listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
	nextBulletRegex: S((e) => RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),
	hrRegex: S((e) => RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),
	fencesBeginRegex: S((e) => RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),
	headingBeginRegex: S((e) => RegExp(`^ {0,${e}}#{1,6}(?:\\s|$)`)),
	pedanticHeadingBeginRegex: S((e) => RegExp(`^ {0,${e}}#`)),
	htmlBeginRegex: S((e) => RegExp(`^ {0,${e}}(?:</?(?:${A})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`, `i`)),
	blockquoteBeginRegex: S((e) => RegExp(`^ {0,${e}}>`))
}, ee = /^(?:[ \t]*(?:\n|$))+/, te = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ne = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}(?:(?=`)\1`*|(?=~)\1~*) *(?=\n|$)|$)/, E = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, re = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, D = / {0,3}(?:[*+-]|\d{1,9}[.)])/, ie = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+)[ \t]*(?:\n+|$)/, ae = C(ie).replace(/bull/g, D).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, ``).getRegex(), O = C(ie).replace(/bull/g, D).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), k = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/, oe = /^[^\n]+/, se = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\\n]|\n(?![ \t]*\n))+/, ce = C(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`, se).replace(`title`, /(?:"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\\n]|\n(?!\n))*'|\((?:\\[\s\S]|[^()\\])*\))/).getRegex(), le = C(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, D).getRegex(), A = `address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`, ue = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, de = C(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`, `i`).replace(`comment`, ue).replace(`tag`, A).replace(`attribute`, / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), fe = (e) => C(k).replace(`hr`, E).replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`, ``).replace(`|table`, ``).replace(`blockquote`, ` {0,3}>`).replace(`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`, e).replace(`html`, ` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`, A).getRegex(), pe = fe(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/), me = fe(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/), he = {
	blockquote: C(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace(`paragraph`, me).getRegex(),
	code: te,
	def: ce,
	fences: ne,
	heading: re,
	hr: E,
	html: de,
	lheading: ae,
	list: le,
	newline: ee,
	paragraph: pe,
	table: x,
	text: oe
}, ge = C(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`, E).replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`, ` {0,3}>`).replace(`code`, `(?: {4}| {0,3}	)[^\\n]`).replace(`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`, ` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`, ` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`, A).getRegex(), _e = {
	...he,
	lheading: O,
	table: ge,
	paragraph: C(k).replace(`hr`, E).replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`, ``).replace(`table`, ge).replace(`blockquote`, ` {0,3}>`).replace(`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`, ` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`, ` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`, A).getRegex()
}, ve = {
	...he,
	html: C(`^ *(?:comment(?: *\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1>(?: *\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?>(?: *\\n{2,}|\\s*$))`).replace(`comment`, ue).replace(/tag/g, `(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: x,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: C(k).replace(`hr`, E).replace(`heading`, ` *#{1,6} *[^
]`).replace(`lheading`, ae).replace(`|table`, ``).replace(`blockquote`, ` {0,3}>`).replace(`|fences`, ``).replace(`|list`, ``).replace(`|html`, ``).replace(`|tag`, ``).getRegex()
}, ye = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, be = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, xe = /^( {2,}|\\)\n(?!\s*$)[ \t]*/, Se = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, j = /[\p{P}\p{S}]/u, M = /[\s\p{P}\p{S}]/u, N = /[^\s\p{P}\p{S}]/u, Ce = C(/^((?![*_])punctSpace)/, `u`).replace(/punctSpace/g, M).getRegex(), we = /[\p{Pi}\p{Ps}"']/u, Te = /(?!~)[\p{P}\p{S}]/u, Ee = /(?!~)[\s\p{P}\p{S}]/u, De = /(?:[^\s\p{P}\p{S}]|~)/u, Oe = C(/link|precode-code|html/, `g`).replace(`link`, /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`, w ? "(?<!`)()" : "(^^|[^`])").replace(`code`, /(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`, /<(?! )[^<>]*?>/).getRegex(), ke = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, Ae = C(ke, `u`).replace(/punct/g, j).getRegex(), je = C(ke, `u`).replace(/punct/g, Te).getRegex(), Me = C(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/, `u`).replace(/openQuote/g, we).replace(/punct/g, j).getRegex(), Ne = `^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`, Pe = C(Ne, `gu`).replace(/notPunctSpace/g, N).replace(/punctSpace/g, M).replace(/punct/g, j).getRegex(), Fe = C(Ne, `gu`).replace(/notPunctSpace/g, De).replace(/punctSpace/g, Ee).replace(/punct/g, Te).getRegex(), Ie = C(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`, `gu`).replace(/notPunctSpace/g, N).replace(/punctSpace/g, M).replace(/punct/g, j).getRegex(), Le = C(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`, `gu`).replace(/notPunctSpace/g, N).replace(/punctSpace/g, M).replace(/punct/g, j).getRegex(), Re = C(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`, `gu`).replace(/notPunctSpace/g, N).replace(/punctSpace/g, M).replace(/punct/g, j).getRegex(), ze = C(/^~~?(?:((?!~)punct)|[^\s~])/, `u`).replace(/punct/g, j).getRegex(), Be = C(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`, `gu`).replace(/notPunctSpace/g, N).replace(/punctSpace/g, M).replace(/punct/g, j).getRegex(), Ve = C(/\\(punct)/, `gu`).replace(/punct/g, j).getRegex(), He = C(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/, `gu`).replace(/punct/g, j).getRegex(), Ue = C(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`, /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`, /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), We = C(ue).replace(`(?:-->|$)`, `-->`).getRegex(), Ge = C(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`, We).replace(`attribute`, /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Ke = /\[(?:\\[\s\S]|[^\[\]\\])*\]/, P = C(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`, Ke).getRegex(), qe = C(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace(`label`, P).replace(`href`, /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`, /"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\((?:\\[\s\S]|[^)\\])*\)/).getRegex(), Je = C(/^!?\[(label)\]\[(ref)\]/).replace(`label`, P).replace(`ref`, se).getRegex(), Ye = C(/^!?\[(ref)\](?:\[\])?/).replace(`ref`, se).getRegex(), Xe = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/, Ze = C(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace(`brackets`, Ke).getRegex(), Qe = C(`reflink|nolink(?!\\()`, `g`).replace(`reflink`, C(/^!?\[(label)\]\[(ref)\]/).replace(`label`, Ze).replace(`ref`, Xe).getRegex()).replace(`nolink`, C(/^!?\[(ref)\](?:\[\])?/).replace(`ref`, Xe).getRegex()).getRegex(), $e = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, et = C(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g, /[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(), F = {
	_backpedal: x,
	anyPunctuation: Ve,
	anyPunctuationOutsideCode: He,
	autolink: Ue,
	blockSkip: Oe,
	br: xe,
	code: be,
	del: x,
	delLDelim: x,
	delRDelim: x,
	emStrongLDelim: Ae,
	emStrongRDelimAst: Pe,
	emStrongRDelimUnd: Le,
	escape: ye,
	link: qe,
	nolink: Ye,
	punctuation: Ce,
	reflink: Je,
	reflinkSearch: Qe,
	tag: Ge,
	text: Se,
	url: x
}, tt = {
	...F,
	emStrongLDelim: Me,
	emStrongRDelimAst: Ie,
	emStrongRDelimUnd: Re,
	link: C(/^!?\[(label)\]\((.*?)\)/).replace(`label`, P).getRegex(),
	reflink: C(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`, P).getRegex()
}, I = {
	...F,
	emStrongRDelimAst: Fe,
	emStrongLDelim: je,
	delLDelim: ze,
	delRDelim: Be,
	url: C(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`emailProtocol`, et).replace(`protocol`, $e).replace(`email`, /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: C(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|wwwStart|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace(`protocol`, $e).replace(/emailProtocol/g, /(?:mailto|xmpp):/).replace(`wwwStart`, w ? `(?<![^\\s*_~(])www\\.` : `www\\.`).getRegex()
}, nt = {
	...I,
	br: C(xe).replace(`{2,}`, `*`).getRegex(),
	text: C(I.text).replace(`\\b_`, `\\b_| {2,}\\n`).replace(/\{2,\}/g, `*`).getRegex()
}, L = {
	normal: he,
	gfm: _e,
	pedantic: ve
}, R = {
	normal: F,
	gfm: I,
	breaks: nt,
	pedantic: tt
}, rt = {
	"&": `&amp;`,
	"<": `&lt;`,
	">": `&gt;`,
	"\"": `&quot;`,
	"'": `&#39;`
}, it = (e) => rt[e];
function z(e, t) {
	if (t) {
		if (T.escapeTest.test(e)) return e.replace(T.escapeReplace, it);
	} else if (T.escapeTestNoEncode.test(e)) return e.replace(T.escapeReplaceNoEncode, it);
	return e;
}
function at(e) {
	return T.numericCharacterReference.test(e) ? e.replace(T.numericCharacterReferenceOrAmpersand, (e, t, n) => {
		if (t === void 0 && n === void 0) return `&amp;`;
		let r = t === void 0 ? Number.parseInt(n, 16) : Number.parseInt(t, 10);
		return r === 0 || r > 1114111 || r >= 55296 && r <= 57343 ? `�` : r === 38 ? `&amp;` : String.fromCodePoint(r);
	}) : e;
}
function ot(e) {
	try {
		e = encodeURI(e).replace(T.percentDecode, `%`);
	} catch {
		return null;
	}
	return e;
}
function st(e, t) {
	let n = e.replace(T.findPipe, (e, t, n) => {
		let r = !1, i = t;
		for (; --i >= 0 && n[i] === `\\`;) r = !r;
		return r ? `|` : ` |`;
	}).split(T.splitPipe), r = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t) {
		if (n.length > t) n.splice(t);
		else for (; n.length < t;) n.push(``);
	}
	for (; r < n.length; r++) n[r] = n[r].trim().replace(T.slashPipe, `|`);
	return n;
}
function B(e, t, n) {
	let r = e.length;
	if (r === 0) return ``;
	let i = 0;
	for (; i < r;) {
		let a = e.charAt(r - i - 1);
		if (a === t && !n) i++;
		else if (a !== t && n) i++;
		else break;
	}
	return e.slice(0, r - i);
}
function ct(e) {
	let t = e.split(`
`), n = t.length - 1;
	for (; n >= 0 && T.blankLine.test(t[n]);) n--;
	return t.length - n <= 2 ? e : t.slice(0, n + 1).join(`
`);
}
function V(e) {
	return e.trim().replace(T.multipleSpaceGlobal, ` `).toLowerCase().toUpperCase().toLowerCase();
}
function lt(e, t) {
	if (e.indexOf(t[0]) === -1 && e.indexOf(t[1]) === -1) return -1;
	let n = 0;
	for (let r = 0; r < e.length; r++) if (e[r] === `\\`) r++;
	else if (e[r] === t[0]) n++;
	else if (e[r] === t[1] && (n--, n < 0)) return r;
	return n > 0 ? -2 : -1;
}
var H = new WeakMap();
function ut(e) {
	let t = {
		"*": -1,
		_: -1
	}, n = -1, r = e.length;
	for (let i = 0; i < r; i++) {
		let a = e[i];
		if (a !== `*` && a !== `_` && a !== `~`) continue;
		let o = i === 0 ? `
` : e[i - 1], s = i + 1;
		for (; s < r && e[s] === a;) s++;
		o !== ` ` && o !== `	` && o !== `
` && o !== `\r` && o !== `\f` && (a === `~` ? n = i : t[a] = i), i = s - 1;
	}
	return {
		maskedSrc: e,
		lastPossibleEmStrongCloserIndex: t,
		lastPossibleDelCloserIndex: n
	};
}
function dt(e, t) {
	let n = ut(t), r = H.get(e);
	r ? r.push(n) : H.set(e, [n]);
}
function ft(e) {
	let t = H.get(e);
	t && (t.pop(), t.length === 0 && H.delete(e));
}
function pt(e, t, n) {
	let r = H.get(e)?.at(-1);
	return r && r.maskedSrc === t ? r.lastPossibleEmStrongCloserIndex[n] : ut(t).lastPossibleEmStrongCloserIndex[n];
}
function mt(e, t) {
	let n = H.get(e)?.at(-1);
	return n && n.maskedSrc === t ? n.lastPossibleDelCloserIndex : ut(t).lastPossibleDelCloserIndex;
}
function U(e, t = 0) {
	let n = t, r = ``;
	for (let t of e) if (t === `	`) {
		let e = 4 - n % 4;
		r += ` `.repeat(e), n += e;
	} else r += t, n++;
	return r;
}
function ht(e, t, n, r, i) {
	let a = t.href, o = t.title || null, s = e[1].replace(i.other.outputLinkReplace, `$1`), c = e[0].charAt(0) === `!`, l = r.state.inLink, u = r.state.linkEmitted, d = r.state.inRawBlock;
	r.state.inLink = !0, r.state.linkEmitted = !1;
	let f = r.inlineTokens(s), p = r.state.linkEmitted;
	if (r.state.linkEmitted = u, r.state.inLink = l, !c) {
		if (p) {
			r.state.inRawBlock = d;
			return;
		}
		r.state.linkEmitted = !0;
	}
	return {
		type: c ? `image` : `link`,
		raw: n,
		href: a,
		title: o,
		text: s,
		tokens: f
	};
}
function gt(e, t, n) {
	let r = e.match(n.other.indentCodeCompensation);
	if (r === null) return t;
	let i = r[1];
	return t.split(`
`).map((e) => {
		let t = e.match(n.other.beginningSpace);
		if (t === null) return e;
		let [r] = t;
		return e.slice(Math.min(r.length, i.length));
	}).join(`
`);
}
function _t(e, t, n, r) {
	if (!t.includes(`<`)) return !1;
	for (let i = 0; i < t.length; i++) {
		if (t[i] === `\\`) {
			i++;
			continue;
		}
		if (t[i] === "`") {
			let e = r.inline.code.exec(t.slice(i));
			if (e) {
				i += e[0].length - 1;
				continue;
			}
		}
		if (t[i] !== `<`) continue;
		let a = e.slice(n + i), o = r.inline.tag.exec(a) || r.inline.autolink.exec(a);
		if (o) {
			if (o[0].length > t.length - i) return !0;
			i += o[0].length - 1;
		}
	}
	return !1;
}
var W = class {
	options;
	rules;
	lexer;
	constructor(e) {
		this.options = e || y;
	}
	space(e) {
		let t = this.rules.block.newline.exec(e);
		if (t && t[0].length > 0) return {
			type: `space`,
			raw: t[0]
		};
	}
	code(e) {
		let t = this.rules.block.code.exec(e);
		if (t) {
			let e = this.options.pedantic ? t[0] : ct(t[0]);
			return {
				type: `code`,
				raw: e,
				codeBlockStyle: `indented`,
				text: e.replace(this.rules.other.codeRemoveIndent, ``)
			};
		}
	}
	fences(e) {
		let t = this.rules.block.fences.exec(e);
		if (t) {
			let e = t[0], n = gt(e, t[3] || ``, this.rules);
			return {
				type: `code`,
				raw: e,
				lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, `$1`) : t[2],
				text: n
			};
		}
	}
	heading(e) {
		let t = this.rules.block.heading.exec(e);
		if (t) {
			let e = t[2].trim();
			if (this.rules.other.endingHash.test(e)) {
				let t = B(e, `#`);
				(this.options.pedantic || !t || this.rules.other.endingSpaceTabChar.test(t)) && (e = t.trim());
			}
			return {
				type: `heading`,
				raw: B(t[0], `
`),
				depth: t[1].length,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	hr(e) {
		let t = this.rules.block.hr.exec(e);
		if (t) return {
			type: `hr`,
			raw: B(t[0], `
`)
		};
	}
	blockquote(e) {
		let t = this.rules.block.blockquote.exec(e);
		if (t) {
			let e = B(t[0], `
`).split(`
`), n = ``, r = ``, i = [];
			for (; e.length > 0;) {
				let t = !1, a = [], o = 0;
				for (; o < e.length; o++) if (this.rules.other.blockquoteStart.test(e[o])) a.push(e[o]), t = !0;
				else if (!t) a.push(e[o]);
				else break;
				e = e.slice(o);
				let s = a.join(`
`), c = s.replace(this.rules.other.blockquoteMarkerWhitespace, (e, t, n) => t + U(n, t.length)).replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, ``);
				n = n ? `${n}
${s}` : s, r = r ? `${r}
${c}` : c;
				let l = this.lexer.state.top;
				if (this.lexer.state.top = !0, this.lexer.blockTokens(c, i, !0), this.lexer.state.top = l, e.length === 0) break;
				let u = i.at(-1);
				if (u?.type === `code` || u?.type === `heading` || u?.type === `hr` || u?.type === `html` || u?.type === `table`) break;
				if (u?.type === `blockquote`) {
					let t = u, a = e.join(`
`), o = t.raw + `
` + a.replace(this.rules.other.blockquoteSetextReplace2, ``), s = this.blockquote(o);
					i[i.length - 1] = s;
					let c = o.substring(s.raw.length).replace(/^\n/, ``), l = c ? c.split(`
`).length : 0, d = l ? e.slice(0, -l) : e;
					if (d.length > 0 && (n = `${n}
${d.join(`
`)}`), r = r.substring(0, r.length - t.text.length) + s.text, e = e.slice(d.length), e.length > 0 && this.rules.other.blockquoteStart.test(e[0])) continue;
					break;
				}
				if (u?.type === `list`) {
					let t = u, a = t.raw + `
` + e.join(`
`), o = this.list(a);
					i[i.length - 1] = o;
					let s = o.raw.length > t.raw.length ? a.slice(t.raw.length + 1, o.raw.length).split(`
`).length : 0;
					if (s > 0) {
						let t = e.slice(0, s).join(`
`);
						n = `${n}
${t}`, r = `${r}
${t}`;
					}
					e = e.slice(s);
				}
			}
			return {
				type: `blockquote`,
				raw: n,
				tokens: i,
				text: r
			};
		}
	}
	list(e) {
		let t = this.rules.block.list.exec(e);
		if (t) {
			let n = e, r = () => n.length - e.length, i = t[1].trim(), a = i.length > 1, o = {
				type: `list`,
				raw: ``,
				ordered: a,
				start: a ? +i.slice(0, -1) : ``,
				loose: !1,
				items: []
			};
			i = a ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = a ? i : `[*+-]`);
			let s = this.rules.other.listItemRegex(i), c = !1;
			for (; e;) {
				let i = !1, a = ``;
				if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) break;
				let l = r();
				e = e.substring(t[0].length);
				let u = t[2].split(`
`, 1)[0], d = t[1].length, f = this.options.pedantic ? U(u, d) : u.replace(this.rules.other.leadingSpaceTab, (e) => U(e, d)), p = e.split(`
`, 1)[0], m = !f.trim(), h = 0;
				if (this.options.pedantic ? (h = 2, a = f.trimStart()) : m ? h = d + 1 : (h = f.search(this.rules.other.nonSpaceChar), h = h > 4 ? 1 : h, a = f.slice(h), h += d), m && this.rules.other.blankLine.test(p) && (e = e.substring(p.length + 1), i = !0), !i) {
					let t = this.rules.other.nextBulletRegex(h), n = this.rules.other.hrRegex(h), r = this.rules.other.fencesBeginRegex(h), i = this.options.pedantic ? this.rules.other.pedanticHeadingBeginRegex(h) : this.rules.other.headingBeginRegex(h), o = this.rules.other.htmlBeginRegex(h), s = this.rules.other.blockquoteBeginRegex(h);
					for (; e;) {
						let c = e.split(`
`, 1)[0], l;
						if (p = c, this.options.pedantic ? (p = p.replace(this.rules.other.listReplaceNesting, `  `), l = p) : l = p.replace(this.rules.other.leadingSpaceTab, (e) => U(e)), r.test(p) || i.test(p) || o.test(p) || s.test(p) || t.test(p) || n.test(p)) break;
						if (l.search(this.rules.other.nonSpaceChar) >= h || !p.trim()) a += `
` + l.slice(h);
						else {
							if (m || f.replace(this.rules.other.tabCharGlobal, `    `).search(this.rules.other.nonSpaceChar) >= 4 || r.test(f) || i.test(f) || o.test(f) || n.test(f)) break;
							let e = !this.options.pedantic && /^ {0,3}(?:=+|-+) *$/.test(p) && this.rules.block.lheading.test(`${f}
${p}`) ? `    ${l.replace(/^ {0,3}/, ``)}` : p;
							a += `
` + e;
						}
						m = !p.trim(), e = e.substring(c.length + 1), f = l.slice(h);
					}
				}
				let g = n.slice(l, r());
				o.loose || (c ? o.loose = !0 : this.rules.other.doubleBlankLine.test(g) && (c = !0)), o.items.push({
					type: `list_item`,
					raw: g,
					task: !!this.options.gfm && this.rules.other.listIsTask.test(a),
					loose: !1,
					text: a,
					tokens: []
				});
			}
			let l = o.items.at(-1);
			if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
			else return;
			o.raw = n.slice(0, r()).trimEnd();
			for (let e of o.items) if (this.lexer.state.top = !1, e.tokens = this.lexer.blockTokens(e.text, []), !o.loose) {
				let t = e.tokens.filter((e) => e.type === `space`);
				o.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw));
			}
			for (let e of o.items) {
				let t = e.tokens[0];
				if (e.task && (t?.type === `text` || t?.type === `paragraph`)) {
					e.text = e.text.replace(this.rules.other.listReplaceTask, ``), t.raw = t.raw.replace(this.rules.other.listReplaceTask, ``), t.text = t.text.replace(this.rules.other.listReplaceTask, ``);
					for (let e = this.lexer.inlineQueue.length - 1; e >= 0; e--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)) {
						this.lexer.inlineQueue[e].src = this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask, ``);
						break;
					}
					let n = this.rules.other.listTaskCheckbox.exec(e.raw);
					if (n) {
						let t = {
							type: `checkbox`,
							raw: n[0] + ` `,
							checked: n[0] !== `[ ]`
						};
						e.checked = t.checked, o.loose ? e.tokens[0] && [`paragraph`, `text`].includes(e.tokens[0].type) && `tokens` in e.tokens[0] && e.tokens[0].tokens ? (e.tokens[0].raw = t.raw + e.tokens[0].raw, e.tokens[0].text = t.raw + e.tokens[0].text, e.tokens[0].tokens.unshift(t)) : e.tokens.unshift({
							type: `paragraph`,
							raw: t.raw,
							text: t.raw,
							tokens: [t]
						}) : e.tokens.unshift(t);
					}
				} else e.task &&= !1;
			}
			if (o.loose) for (let e of o.items) {
				e.loose = !0;
				for (let t of e.tokens) t.type === `text` && (t.type = `paragraph`);
			}
			return o;
		}
	}
	html(e) {
		let t = this.rules.block.html.exec(e);
		if (t) {
			let e = ct(t[0]);
			return {
				type: `html`,
				block: !0,
				raw: e,
				pre: t[1] === `pre` || t[1] === `script` || t[1] === `style`,
				text: e
			};
		}
	}
	def(e) {
		let t = this.rules.block.def.exec(e);
		if (t) {
			if (!this.rules.other.startAngleBracket.test(t[2]) && lt(t[2], `()`) !== -1) return;
			let e = V(t[1]), n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, `$1`).replace(this.rules.inline.anyPunctuation, `$1`) : ``, r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, `$1`) : t[3];
			return {
				type: `def`,
				tag: e,
				raw: B(t[0], `
`),
				href: n,
				title: r
			};
		}
	}
	table(e) {
		let t = this.rules.block.table.exec(e);
		if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
		let n = st(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, ``).split(`|`), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, ``).split(`
`) : [], a = {
			type: `table`,
			raw: B(t[0], `
`),
			header: [],
			align: [],
			rows: []
		};
		if (n.length === r.length) {
			for (let e of r) this.rules.other.tableAlignRight.test(e) ? a.align.push(`right`) : this.rules.other.tableAlignCenter.test(e) ? a.align.push(`center`) : this.rules.other.tableAlignLeft.test(e) ? a.align.push(`left`) : a.align.push(null);
			for (let e = 0; e < n.length; e++) a.header.push({
				text: n[e],
				tokens: this.lexer.inline(n[e]),
				header: !0,
				align: a.align[e]
			});
			for (let e of i) a.rows.push(st(e, a.header.length).map((e, t) => ({
				text: e,
				tokens: this.lexer.inline(e),
				header: !1,
				align: a.align[t]
			})));
			return a;
		}
	}
	lheading(e) {
		let t = this.rules.block.lheading.exec(e);
		if (t) {
			let e = t[1].trim();
			return {
				type: `heading`,
				raw: B(t[0], `
`),
				depth: t[2].charAt(0) === `=` ? 1 : 2,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	paragraph(e) {
		let t = this.rules.block.paragraph.exec(e);
		if (t) {
			let e = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
			return {
				type: `paragraph`,
				raw: t[0],
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	text(e) {
		let t = this.rules.block.text.exec(e);
		if (t) return {
			type: `text`,
			raw: t[0],
			text: t[0],
			tokens: this.lexer.inline(t[0])
		};
	}
	escape(e) {
		let t = this.rules.inline.escape.exec(e);
		if (t) return {
			type: `escape`,
			raw: t[0],
			text: t[1]
		};
	}
	tag(e) {
		let t = this.rules.inline.tag.exec(e);
		if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
			type: `html`,
			raw: t[0],
			inLink: this.lexer.state.inLink,
			inRawBlock: this.lexer.state.inRawBlock,
			block: !1,
			text: t[0]
		};
	}
	link(e) {
		if (this.lexer.state.linkParenPossible === !1) return;
		let t = this.rules.inline.link.exec(e);
		if (t) {
			let n = t[0].charAt(0) === `!` ? 2 : 1;
			if (!this.options.pedantic && _t(e, t[1], n, this.rules)) return;
			let r = t[2].trim();
			if (!this.options.pedantic && this.rules.other.startAngleBracket.test(r)) {
				if (!this.rules.other.endAngleBracket.test(r)) return;
				let e = B(r.slice(0, -1), `\\`);
				if ((r.length - e.length) % 2 == 0) return;
			} else {
				let e = lt(t[2], `()`);
				if (e === -2) return;
				if (e > -1) {
					let n = (t[0].indexOf(`!`) === 0 ? 5 : 4) + t[1].length + e;
					t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = ``;
				}
			}
			let i = B(t[0].slice(0, -1), `\\`);
			if ((t[0].length - i.length) % 2 == 0) return;
			let a = t[2], o = ``;
			if (this.options.pedantic) {
				let e = this.rules.other.pedanticHrefTitle.exec(a);
				e && (a = e[1], o = e[3]);
			} else o = t[3] ? t[3].slice(1, -1) : ``;
			return a = a.trim(), this.rules.other.startAngleBracket.test(a) && (a = this.options.pedantic && !this.rules.other.endAngleBracket.test(r) ? a.slice(1) : a.slice(1, -1)), ht(t, {
				href: a && a.replace(this.rules.inline.anyPunctuation, `$1`),
				title: o && o.replace(this.rules.inline.anyPunctuation, `$1`)
			}, t[0], this.lexer, this.rules);
		}
	}
	reflink(e, t) {
		let n;
		if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
			let r = n[0].charAt(0) === `!` ? 2 : 1;
			if (!this.options.pedantic && _t(e, n[1], r, this.rules)) return;
			let i = t[V(n[2] || n[1])];
			if (!i) {
				let e = n[0].charAt(0);
				return {
					type: `text`,
					raw: e,
					text: e
				};
			}
			return ht(n, i, n[0], this.lexer, this.rules);
		}
	}
	emStrong(e, t, n = ``) {
		let r = this.rules.inline.emStrongLDelim.exec(e);
		if (!r || !r[1] && !r[2] && !r[3] && !r[4]) return;
		let i = r[0][0], a = n === i, o = t.length - e.length, s = o;
		for (; !this.options.pedantic && s > 0 && t[s - 1] === i;) s--;
		let c = [...t.slice(Math.max(0, s - 2), s)].at(-1) ?? ``, l = c === `*` || c === `_` || !!this.rules.inline.punctuation.exec(c);
		s < o && (n = c);
		let u = s < o ? l : !!this.rules.inline.punctuation.exec(n);
		if (r[4] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
		let d = r[1] || r[3] || ``;
		if (!d || !n || u) {
			let n = [...r[0]].length - 1, u, f, p = n, m = 0, h = o - s + n, g = !this.options.pedantic && !!c.trim() && (!!d || i === `*` && !l);
			if (i !== `*` && i !== `_`) return;
			let _ = i === `*` ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd, v = pt(this, t, i), y = t.length - e.length + n;
			if (v < y) return;
			t = t.slice(-1 * e.length + n);
			let b = v - y;
			for (_.lastIndex = 0; (r = _.exec(t)) !== null && !(r.index > b);) {
				if (u = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !u) continue;
				if (f = [...u].length, r[3] || r[4]) {
					p += f;
					continue;
				}
				if (r[5] || r[6] || g) {
					if (a && (r[5] || r[6])) break;
					if (h % 3 && !((h + f) % 3)) {
						m += f;
						continue;
					}
				}
				if (p -= f, p > 0) continue;
				f = Math.min(f, f + p + m);
				let t = [...r[0]][0].length, i = e.slice(0, n + r.index + t + f);
				if (Math.min(n, f) % 2) {
					let e = i.slice(1, -1);
					return {
						type: `em`,
						raw: i,
						text: e,
						tokens: this.lexer.inlineTokens(e)
					};
				}
				let o = i.slice(2, -2);
				return {
					type: `strong`,
					raw: i,
					text: o,
					tokens: this.lexer.inlineTokens(o)
				};
			}
		}
	}
	codespan(e) {
		let t = this.rules.inline.code.exec(e);
		if (t) {
			let e = t[2].replace(this.rules.other.newLineCharGlobal, ` `), n = this.rules.other.nonSpaceChar.test(e), r = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
			return n && r && (e = e.substring(1, e.length - 1)), {
				type: `codespan`,
				raw: t[0],
				text: e
			};
		}
	}
	br(e) {
		let t = this.rules.inline.br.exec(e);
		if (t) return {
			type: `br`,
			raw: t[0]
		};
	}
	del(e, t, n = ``) {
		let r = this.rules.inline.delLDelim.exec(e);
		if (r && (!r[1] || !n || this.rules.inline.punctuation.exec(n))) {
			let n = [...r[0]].length - 1, i, a, o = n, s = this.rules.inline.delRDelim, c = mt(this, t), l = t.length - e.length + n;
			if (c < l) return;
			t = t.slice(-1 * e.length + n);
			let u = c - l;
			for (s.lastIndex = 0; (r = s.exec(t)) !== null && !(r.index > u);) {
				if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i || (a = [...i].length, a !== n)) continue;
				if (r[3] || r[4]) {
					o += a;
					continue;
				}
				if (o -= a, o > 0) continue;
				a = Math.min(a, a + o);
				let t = [...r[0]][0].length, s = e.slice(0, n + r.index + t + a), c = s.slice(n, -n);
				return {
					type: `del`,
					raw: s,
					text: c,
					tokens: this.lexer.inlineTokens(c)
				};
			}
		}
	}
	autolink(e) {
		let t = this.rules.inline.autolink.exec(e);
		if (t) {
			let e, n;
			return t[2] === `@` ? (e = t[1], n = `mailto:` + e) : (e = t[1], n = e), {
				type: `link`,
				raw: t[0],
				text: e,
				href: n,
				autolink: !0,
				tokens: [{
					type: `text`,
					raw: e,
					text: e
				}]
			};
		}
	}
	url(e) {
		let t;
		if (t = this.rules.inline.url.exec(e)) {
			let e, n;
			if (t[2] === `@`) e = t[0], n = `mailto:` + e;
			else {
				let r;
				do
					r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? ``;
				while (r !== t[0]);
				e = t[0], n = t[1] === `www.` ? `http://` + t[0] : t[0];
			}
			return {
				type: `link`,
				raw: t[0],
				text: e,
				href: n,
				autolink: !0,
				tokens: [{
					type: `text`,
					raw: e,
					text: e
				}]
			};
		}
	}
	inlineText(e) {
		let t = this.rules.inline.text.exec(e);
		if (t) {
			let e = this.lexer.state.inRawBlock;
			return {
				type: `text`,
				raw: t[0],
				text: e ? t[0] : at(t[0]),
				escaped: e
			};
		}
	}
}, G = class e {
	tokens;
	options;
	state;
	inlineQueue;
	tokenizer;
	constructor(e) {
		this.tokens = [], this.tokens.links = Object.create(null), this.options = e || y, this.options.tokenizer = this.options.tokenizer || new W(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			linkEmitted: !1,
			linkParenPossible: !0,
			top: !0
		};
		let t = {
			other: T,
			block: L.normal,
			inline: R.normal
		};
		this.options.pedantic ? (t.block = L.pedantic, t.inline = R.pedantic) : this.options.gfm && (t.block = L.gfm, t.inline = this.options.breaks ? R.breaks : R.gfm), this.tokenizer.rules = t;
	}
	static get rules() {
		return {
			block: L,
			inline: R
		};
	}
	static lex(t, n) {
		return new e(n).lex(t);
	}
	static lexInline(t, n) {
		return new e(n).inlineTokens(t);
	}
	lex(e) {
		e = e.replace(T.carriageReturn, `
`), this.blockTokens(e, this.tokens);
		for (let e = 0; e < this.inlineQueue.length; e++) {
			let t = this.inlineQueue[e];
			this.state.inRawBlock = !1, this.inlineTokens(t.src, t.tokens);
		}
		return this.inlineQueue = [], this.tokens;
	}
	blockTokens(e, t = [], n = !1) {
		this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(T.tabCharGlobal, `    `).replace(T.spaceLine, ``));
		let r = 1 / 0;
		for (; e;) {
			if (e.length < r) r = e.length;
			else {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
			let i;
			if (this.options.extensions?.block?.some((n) => (i = n.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1)) continue;
			if (i = this.tokenizer.space(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				i.raw.length === 1 && n !== void 0 ? n.raw += `
` : t.push(i);
				continue;
			}
			if (i = this.tokenizer.code(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				n?.type === `paragraph` || n?.type === `text` ? (n.raw += (n.raw.endsWith(`
`) ? `` : `
`) + i.raw, n.text += `
` + i.text, this.inlineQueue.at(-1).src = n.text) : t.push(i);
				continue;
			}
			if ((i = this.tokenizer.fences(e)) || (i = this.tokenizer.heading(e)) || (i = this.tokenizer.hr(e)) || (i = this.tokenizer.blockquote(e)) || (i = this.tokenizer.list(e)) || (i = this.tokenizer.html(e))) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.def(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				n?.type === `paragraph` || n?.type === `text` ? (n.raw += (n.raw.endsWith(`
`) ? `` : `
`) + i.raw, n.text += `
` + i.raw, this.inlineQueue.at(-1).src = n.text) : (this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
					href: i.href,
					title: i.title
				}), t.push(i));
				continue;
			}
			if ((i = this.tokenizer.table(e)) || (i = this.tokenizer.lheading(e))) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			let a = e;
			if (this.options.extensions?.startBlock) {
				let t = 1 / 0, n = e.slice(1), r;
				this.options.extensions.startBlock.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == `number` && r >= 0 && (t = Math.min(t, r));
				}), t < 1 / 0 && t >= 0 && (a = e.substring(0, t + 1));
			}
			if (this.state.top && (i = this.tokenizer.paragraph(a))) {
				let r = t.at(-1);
				n && r?.type === `paragraph` ? (r.raw += (r.raw.endsWith(`
`) ? `` : `
`) + i.raw, r.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = r.text) : t.push(i), n = a.length !== e.length, e = e.substring(i.raw.length);
			} else if (i = this.tokenizer.text(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				n?.type === `text` ? (n.raw += (n.raw.endsWith(`
`) ? `` : `
`) + i.raw, n.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(i);
			} else if (e) {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
		}
		return this.state.top = !0, t;
	}
	inline(e, t = []) {
		return this.inlineQueue.push({
			src: e,
			tokens: t
		}), t;
	}
	linkInText(e) {
		if (!e.includes(`[`)) return !1;
		let t = this.tokenizer.rules.inline.link;
		for (let n of e.matchAll(this.tokenizer.rules.inline.blockSkip)) if (t.test(n[0]) && e.charAt(n.index - 1) !== `!`) return !0;
		for (let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)) {
			let e = t[0], n = e.lastIndexOf(`[`);
			if (e.charAt(0) !== `!` && Object.hasOwn(this.tokens.links, V(e.slice(n + 1, -1))) && !(n > 1 && this.linkInText(e.slice(1, n - 1)))) return !0;
		}
		return !1;
	}
	inlineTokens(e, t = []) {
		this.tokenizer.lexer = this;
		let n = this.state.linkParenPossible;
		this.state.linkParenPossible = n && e.includes(`)`);
		try {
			return this.#e(e, t);
		} finally {
			this.state.linkParenPossible = n;
		}
	}
	#e(e, t) {
		let n = e.includes(`*`) || e.includes(`_`) || e.includes(`~`) || this.options.hooks?.emStrongMask || this.tokenizer.emStrong !== W.prototype.emStrong || this.tokenizer.del !== W.prototype.del ? this.#n(e) : e;
		dt(this.tokenizer, n);
		try {
			return this.#t(e, n, t);
		} finally {
			ft(this.tokenizer);
		}
	}
	#t(e, t, n) {
		let r = !1, i = ``, a = 1 / 0;
		for (; e;) {
			if (e.length < a) a = e.length;
			else {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
			r || (i = ``), r = !1;
			let o;
			if (this.options.extensions?.inline?.some((t) => (o = t.call({ lexer: this }, e, n)) ? (e = e.substring(o.raw.length), n.push(o), !0) : !1)) continue;
			if ((o = this.tokenizer.escape(e)) || (o = this.tokenizer.tag(e)) || (o = this.tokenizer.link(e))) {
				e = e.substring(o.raw.length), n.push(o);
				continue;
			}
			if (o = this.tokenizer.reflink(e, this.tokens.links)) {
				e = e.substring(o.raw.length);
				let t = n.at(-1);
				o.type === `text` && t?.type === `text` ? (t.raw += o.raw, t.text += o.text) : n.push(o);
				continue;
			}
			if ((o = this.tokenizer.emStrong(e, t, i)) || (o = this.tokenizer.codespan(e)) || (o = this.tokenizer.br(e)) || (o = this.tokenizer.del(e, t, i)) || (o = this.tokenizer.autolink(e)) || !this.state.inLink && (o = this.tokenizer.url(e))) {
				e = e.substring(o.raw.length), n.push(o);
				continue;
			}
			let s = e;
			if (this.options.extensions?.startInline) {
				let t = 1 / 0, n = e.slice(1), r;
				this.options.extensions.startInline.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == `number` && r >= 0 && (t = Math.min(t, r));
				}), t < 1 / 0 && t >= 0 && (s = e.substring(0, t + 1));
			}
			if (o = this.tokenizer.inlineText(s)) {
				e = e.substring(o.raw.length), o.raw.slice(-1) !== `_` && (i = o.raw.slice(-1)), r = !0;
				let t = n.at(-1);
				t?.type === `text` ? (t.raw += o.raw, t.text += o.text) : n.push(o);
			} else if (e) {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
		}
		return n;
	}
	#n(e) {
		let t = e;
		if (this.tokens.links && e.includes(`[`)) {
			let e = this.tokenizer.rules.inline.reflinkSearch, n = (t) => {
				let r = t.lastIndexOf(`[`);
				if (!Object.hasOwn(this.tokens.links, V(t.slice(r + 1, -1)))) return t;
				if (r > 1 && t.charAt(0) !== `!`) {
					let i = t.slice(1, r - 1);
					if (this.linkInText(i)) return `[` + i.replace(e, n) + `][` + `a`.repeat(t.length - r - 2) + `]`;
				}
				return `[` + `a`.repeat(t.length - 2) + `]`;
			};
			t = t.replace(e, n);
		}
		return t = t.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode, (e, t, n) => n ? `+`.repeat(e.length) : t ? t + e.slice(t.length, -t.length).replace(/`/g, `+`) + t : e), t = t.replace(this.tokenizer.rules.inline.blockSkip, (e, t, n) => {
			let r = n ? n.length : 0;
			return e.slice(0, r) + `[` + `a`.repeat(e.length - r - 2) + `]`;
		}), t = this.options.hooks?.emStrongMask?.call({ lexer: this }, t) ?? t, t;
	}
	infiniteLoopError(e) {
		let t = `Infinite loop on byte: ` + e;
		if (this.options.silent) console.error(t);
		else throw Error(t);
	}
}, K = class {
	options;
	parser;
	constructor(e) {
		this.options = e || y;
	}
	space(e) {
		return ``;
	}
	code({ text: e, lang: t, escaped: n }) {
		let r = (t || ``).match(T.notSpaceStart)?.[0], i = e ? e.replace(T.endingNewline, ``) + `
` : ``;
		return r ? `<pre><code class="language-` + z(r) + `">` + (n ? i : z(i, !0)) + `</code></pre>
` : `<pre><code>` + (n ? i : z(i, !0)) + `</code></pre>
`;
	}
	blockquote({ tokens: e }) {
		return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
	}
	html({ text: e }) {
		return e;
	}
	def(e) {
		return ``;
	}
	heading({ tokens: e, depth: t }) {
		return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
	}
	hr(e) {
		return `<hr>
`;
	}
	list(e) {
		let t = e.ordered, n = e.start, r = ``;
		for (let t = 0; t < e.items.length; t++) {
			let n = e.items[t];
			r += this.listitem(n);
		}
		let i = t ? `ol` : `ul`, a = t && n !== 1 ? ` start="` + n + `"` : ``;
		return `<` + i + a + `>
` + r + `</` + i + `>
`;
	}
	listitem(e) {
		return `<li>${this.parser.parse(e.tokens)}</li>
`;
	}
	checkbox({ checked: e }) {
		return `<input ` + (e ? `checked="" ` : ``) + `disabled="" type="checkbox"> `;
	}
	paragraph({ tokens: e }) {
		return `<p>${this.parser.parseInline(e)}</p>
`;
	}
	table(e) {
		let t = ``, n = ``;
		for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t]);
		t += this.tablerow({ text: n });
		let r = ``;
		for (let t = 0; t < e.rows.length; t++) {
			let i = e.rows[t];
			n = ``;
			for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
			r += this.tablerow({ text: n });
		}
		return r &&= `<tbody>${r}</tbody>`, `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
	}
	tablerow({ text: e }) {
		return `<tr>
${e}</tr>
`;
	}
	tablecell(e) {
		let t = this.parser.parseInline(e.tokens), n = e.header ? `th` : `td`;
		return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
	}
	strong({ tokens: e }) {
		return `<strong>${this.parser.parseInline(e)}</strong>`;
	}
	em({ tokens: e }) {
		return `<em>${this.parser.parseInline(e)}</em>`;
	}
	codespan({ text: e }) {
		return `<code>${z(e, !0)}</code>`;
	}
	br(e) {
		return `<br>`;
	}
	del({ tokens: e }) {
		return `<del>${this.parser.parseInline(e)}</del>`;
	}
	link({ href: e, title: t, text: n, tokens: r, autolink: i }) {
		let a = i ? z(n, !0) : this.parser.parseInline(r), o = ot(e);
		if (o === null) return a;
		e = z(o, i);
		let s = `<a href="` + e + `"`;
		return t && (s += ` title="` + z(t) + `"`), s += `>` + a + `</a>`, s;
	}
	image({ href: e, title: t, text: n, tokens: r }) {
		r && (n = this.parser.parseInline(r, this.parser.textRenderer));
		let i = ot(e);
		if (i === null) return z(n);
		e = i;
		let a = `<img src="${z(e)}" alt="${z(n)}"`;
		return t && (a += ` title="${z(t)}"`), a += `>`, a;
	}
	text(e) {
		return `tokens` in e && e.tokens ? this.parser.parseInline(e.tokens) : `escaped` in e && e.escaped ? e.text : z(e.text);
	}
}, vt = class {
	parser;
	strong({ text: e, tokens: t }) {
		return t ? this.parser.parseInline(t, this) : e;
	}
	em({ text: e, tokens: t }) {
		return t ? this.parser.parseInline(t, this) : e;
	}
	codespan({ text: e }) {
		return e;
	}
	del({ text: e, tokens: t }) {
		return t ? this.parser.parseInline(t, this) : e;
	}
	html({ text: e }) {
		return e;
	}
	text({ text: e }) {
		return e;
	}
	link({ text: e, tokens: t }) {
		return t ? this.parser.parseInline(t, this) : e;
	}
	image({ text: e, tokens: t }) {
		return t ? this.parser.parseInline(t, this) : e;
	}
	br() {
		return ``;
	}
	checkbox({ raw: e }) {
		return e;
	}
}, q = class e {
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || y, this.options.renderer = this.options.renderer || new K(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new vt(), this.textRenderer.parser = this;
	}
	static parse(t, n) {
		return new e(n).parse(t);
	}
	static parseInline(t, n) {
		return new e(n).parseInline(t);
	}
	parse(e) {
		this.renderer.parser = this;
		let t = ``;
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (this.options.extensions?.renderers?.[r.type]) {
				let e = r, n = this.options.extensions.renderers[e.type].call({ parser: this }, e);
				if (n !== !1 || ![
					`space`,
					`hr`,
					`heading`,
					`code`,
					`table`,
					`blockquote`,
					`list`,
					`checkbox`,
					`html`,
					`def`,
					`paragraph`,
					`text`
				].includes(e.type)) {
					t += n || ``;
					continue;
				}
			}
			let i = r;
			switch (i.type) {
				case `space`:
					t += this.renderer.space(i);
					break;
				case `hr`:
					t += this.renderer.hr(i);
					break;
				case `heading`:
					t += this.renderer.heading(i);
					break;
				case `code`:
					t += this.renderer.code(i);
					break;
				case `table`:
					t += this.renderer.table(i);
					break;
				case `blockquote`:
					t += this.renderer.blockquote(i);
					break;
				case `list`:
					t += this.renderer.list(i);
					break;
				case `checkbox`:
					t += this.renderer.checkbox(i);
					break;
				case `html`:
					t += this.renderer.html(i);
					break;
				case `def`:
					t += this.renderer.def(i);
					break;
				case `paragraph`:
					t += this.renderer.paragraph(i);
					break;
				case `text`:
					t += this.renderer.text(i);
					break;
				default: {
					let e = `Token with "` + i.type + `" type was not found.`;
					if (this.options.silent) return console.error(e), ``;
					throw Error(e);
				}
			}
		}
		return t;
	}
	parseInline(e, t = this.renderer) {
		this.renderer.parser = this;
		let n = ``;
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (this.options.extensions?.renderers?.[i.type]) {
				let e = this.options.extensions.renderers[i.type].call({ parser: this }, i);
				if (e !== !1 || ![
					`escape`,
					`html`,
					`link`,
					`image`,
					`checkbox`,
					`strong`,
					`em`,
					`codespan`,
					`br`,
					`del`,
					`text`
				].includes(i.type)) {
					n += e || ``;
					continue;
				}
			}
			let a = i;
			switch (a.type) {
				case `escape`:
					n += t.text(a);
					break;
				case `html`:
					n += t.html(a);
					break;
				case `link`:
					n += t.link(a);
					break;
				case `image`:
					n += t.image(a);
					break;
				case `checkbox`:
					n += t.checkbox(a);
					break;
				case `strong`:
					n += t.strong(a);
					break;
				case `em`:
					n += t.em(a);
					break;
				case `codespan`:
					n += t.codespan(a);
					break;
				case `br`:
					n += t.br(a);
					break;
				case `del`:
					n += t.del(a);
					break;
				case `text`:
					n += t.text(a);
					break;
				default: {
					let e = `Token with "` + a.type + `" type was not found.`;
					if (this.options.silent) return console.error(e), ``;
					throw Error(e);
				}
			}
		}
		return n;
	}
}, J = class {
	options;
	block;
	constructor(e) {
		this.options = e || y;
	}
	static passThroughHooks = new Set([
		`preprocess`,
		`postprocess`,
		`processAllTokens`,
		`emStrongMask`
	]);
	static passThroughHooksRespectAsync = new Set([
		`preprocess`,
		`postprocess`,
		`processAllTokens`
	]);
	preprocess(e) {
		return e;
	}
	postprocess(e) {
		return e;
	}
	processAllTokens(e) {
		return e;
	}
	emStrongMask(e) {
		return e;
	}
	provideLexer(e = this.block) {
		return e ? G.lex : G.lexInline;
	}
	provideParser(e = this.block) {
		return e ? q.parse : q.parseInline;
	}
};
function Y(e, t) {
	if (Array.isArray(t)) for (let n = 0; n < t.length; n++) e.push(t[n]);
	else e.push(t);
}
var yt = class {
	defaults = v();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = q;
	Renderer = K;
	TextRenderer = vt;
	Lexer = G;
	Tokenizer = W;
	Hooks = J;
	constructor(...e) {
		this.use(...e);
	}
	walkTokens(e, t) {
		let n = [];
		for (let r of e) switch (Y(n, t.call(this, r)), r.type) {
			case `table`: {
				let e = r;
				for (let r of e.header) Y(n, this.walkTokens(r.tokens, t));
				for (let r of e.rows) for (let e of r) Y(n, this.walkTokens(e.tokens, t));
				break;
			}
			case `list`: {
				let e = r;
				Y(n, this.walkTokens(e.items, t));
				break;
			}
			default: {
				let e = r;
				this.defaults.extensions?.childTokens?.[e.type] ? this.defaults.extensions.childTokens[e.type].forEach((r) => {
					let i = e[r].flat(1 / 0);
					Y(n, this.walkTokens(i, t));
				}) : e.tokens && Y(n, this.walkTokens(e.tokens, t));
			}
		}
		return n;
	}
	use(...e) {
		let t = this.defaults.extensions || {
			renderers: Object.create(null),
			childTokens: Object.create(null)
		};
		return e.forEach((e) => {
			let n = { ...e };
			if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach((e) => {
				if (!e.name) throw Error(`extension name required`);
				if (`renderer` in e) {
					let n = t.renderers[e.name];
					n ? t.renderers[e.name] = function(...t) {
						let r = e.renderer.apply(this, t);
						return r === !1 && (r = n.apply(this, t)), r;
					} : t.renderers[e.name] = e.renderer;
				}
				if (`tokenizer` in e) {
					if (!e.level || e.level !== `block` && e.level !== `inline`) throw Error(`extension level must be 'block' or 'inline'`);
					let n = t[e.level];
					n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && (e.level === `block` ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : e.level === `inline` && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]));
				}
				`childTokens` in e && e.childTokens && (t.childTokens[e.name] = e.childTokens);
			}), n.extensions = t), e.renderer) {
				let t = this.defaults.renderer || new K(this.defaults);
				for (let n in e.renderer) {
					if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
					if ([`options`, `parser`].includes(n)) continue;
					let r = n, i = e.renderer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n === !1 ? `` : n ?? ``;
					};
				}
				n.renderer = t;
			}
			if (e.tokenizer) {
				let t = this.defaults.tokenizer || new W(this.defaults);
				for (let n in e.tokenizer) {
					if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
					if ([
						`options`,
						`rules`,
						`lexer`
					].includes(n)) continue;
					let r = n, i = e.tokenizer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.tokenizer = t;
			}
			if (e.hooks) {
				let t = this.defaults.hooks || new J();
				for (let n in e.hooks) {
					if (!(n in t)) throw Error(`hook '${n}' does not exist`);
					if ([`options`, `block`].includes(n)) continue;
					let r = n, i = e.hooks[r], a = t[r];
					t[r] = J.passThroughHooks.has(n) ? (e) => {
						if (t.options.async && J.passThroughHooksRespectAsync.has(n)) return (async () => {
							let n = await i.call(t, e);
							return a.call(t, n);
						})();
						let r = i.call(t, e);
						return a.call(t, r);
					} : (...e) => {
						if (t.options.async) return (async () => {
							let n = await i.apply(t, e);
							return n === !1 && (n = await a.apply(t, e)), n;
						})();
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.hooks = t;
			}
			if (e.walkTokens) {
				let t = this.defaults.walkTokens, r = e.walkTokens;
				n.walkTokens = function(e) {
					let n = [];
					return Y(n, r.call(this, e)), t && Y(n, t.call(this, e)), n;
				};
			}
			this.defaults = {
				...this.defaults,
				...n
			};
		}), this;
	}
	setOptions(e) {
		return this.defaults = {
			...this.defaults,
			...e
		}, this;
	}
	lexer(e, t) {
		return G.lex(e, t ?? this.defaults);
	}
	parser(e, t) {
		return q.parse(e, t ?? this.defaults);
	}
	parseMarkdown(e) {
		return (t, n) => {
			let r = { ...n }, i = {
				...this.defaults,
				...r
			}, a = this.onError(!!i.silent, !!i.async);
			if (this.defaults.async === !0 && r.async === !1) return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));
			if (typeof t > `u` || t === null) return a(Error(`marked(): input parameter is undefined or null`));
			if (typeof t != `string`) return a(Error(`marked(): input parameter is of type ` + Object.prototype.toString.call(t) + `, string expected`));
			if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
				let n = i.hooks ? await i.hooks.preprocess(t) : t, r = await (i.hooks ? await i.hooks.provideLexer(e) : e ? G.lex : G.lexInline)(n, i), a = i.hooks ? await i.hooks.processAllTokens(r) : r;
				i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
				let o = await (i.hooks ? await i.hooks.provideParser(e) : e ? q.parse : q.parseInline)(a, i);
				return i.hooks ? await i.hooks.postprocess(o) : o;
			})().catch(a);
			try {
				i.hooks && (t = i.hooks.preprocess(t));
				let n = (i.hooks ? i.hooks.provideLexer(e) : e ? G.lex : G.lexInline)(t, i);
				i.hooks && (n = i.hooks.processAllTokens(n)), i.walkTokens && this.walkTokens(n, i.walkTokens);
				let r = (i.hooks ? i.hooks.provideParser(e) : e ? q.parse : q.parseInline)(n, i);
				return i.hooks && (r = i.hooks.postprocess(r)), r;
			} catch (e) {
				return a(e);
			}
		};
	}
	onError(e, t) {
		return (n) => {
			if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
				let e = `<p>An error occurred:</p><pre>` + z(n.message + ``, !0) + `</pre>`;
				return t ? Promise.resolve(e) : e;
			}
			if (t) return Promise.reject(n);
			throw n;
		};
	}
}, X = new yt();
function Z(e, t) {
	return X.parse(e, t);
}
Z.options = Z.setOptions = function(e) {
	return X.setOptions(e), Z.defaults = X.defaults, b(Z.defaults), Z;
}, Z.getDefaults = v, Z.defaults = y;
function bt(...e) {
	return X.use(...e), Z.defaults = X.defaults, b(Z.defaults), Z;
}
Z.use = bt, Z.walkTokens = function(e, t) {
	return X.walkTokens(e, t);
}, Z.parseInline = X.parseInline, Z.Parser = q, Z.parser = q.parse, Z.Renderer = K, Z.TextRenderer = vt, Z.Lexer = G, Z.lexer = G.lex, Z.Tokenizer = W, Z.Hooks = J, Z.parse = Z, Z.options, Z.setOptions, Z.walkTokens, Z.parseInline, q.parse, G.lex;
var xt = {
	"&": `&amp;`,
	"<": `&lt;`,
	">": `&gt;`,
	"\"": `&quot;`,
	"'": `&#39;`
};
function Q(e) {
	return e.replaceAll(/[&<>"']/g, (e) => xt[e] ?? e);
}
var St = /^([a-z][a-z0-9+.-]*):/i, Ct = new Set([
	`http`,
	`https`,
	`mailto`,
	`tel`
]);
function wt(e) {
	let t = [...e].filter((e) => {
		let t = e.codePointAt(0) ?? 0;
		return t > 32 && t !== 127;
	}), n = St.exec(t.join(``));
	return n && !Ct.has((n[1] ?? ``).toLowerCase()) ? null : e.trim();
}
function Tt(e) {
	return e !== void 0 && (e.type === `text` || e.type === `paragraph`) && `tokens` in e && Array.isArray(e.tokens);
}
function Et({ headingOffset: e = 0, breaks: t = !0, tableLabel: n }) {
	let r = new yt({
		gfm: !0,
		breaks: t
	});
	return r.use({ renderer: {
		html({ text: e, block: t }) {
			let n = Q(e);
			return t ? `<p>${n}</p>\n` : n;
		},
		heading({ tokens: t, depth: n }) {
			let r = Math.min(6, Math.max(1, n + e));
			return `<h${r}>${this.parser.parseInline(t)}</h${r}>\n`;
		},
		link({ href: e, title: t, tokens: n }) {
			let r = this.parser.parseInline(n), i = wt(e);
			if (i === null) return r;
			let a = t ? ` title="${Q(t)}"` : ``;
			return `<a href="${Q(i)}"${a}>${r}</a>`;
		},
		image({ href: e, title: t, text: n }) {
			let r = wt(e);
			if (r === null || /^mailto:|^tel:/i.test(r)) return Q(n);
			let i = t ? ` title="${Q(t)}"` : ``;
			return `<img src="${Q(r)}" alt="${Q(n)}"${i} loading="lazy" decoding="async">`;
		},
		code({ text: e, lang: t }) {
			let n = (t ?? ``).match(/^\S+/)?.[0];
			return `<pre tabindex="0"><code${n ? ` class="language-${Q(n)}" data-language="${Q(n)}"` : ``}>${Q(e.replace(/\n$/, ``))}</code></pre>\n`;
		},
		table(e) {
			let t = n ? ` role="region" aria-label="${Q(n)}"` : ``, r = (e) => {
				let t = e.header ? `th` : `td`;
				return `<${t}${e.header ? ` scope="col"` : ``}${e.align ? ` style="text-align:${e.align}"` : ``}>${this.parser.parseInline(e.tokens)}</${t}>`;
			}, i = `<tr>${e.header.map(r).join(``)}</tr>`, a = e.rows.map((e) => `<tr>${e.map(r).join(``)}</tr>`).join(`
`);
			return `<div data-scroll tabindex="0"${t}><table><thead>${i}</thead>${a ? `<tbody>${a}</tbody>` : ``}</table></div>\n`;
		},
		checkbox() {
			return ``;
		},
		listitem(e) {
			if (!e.task) return `<li>${this.parser.parse(e.tokens)}</li>\n`;
			let t = e.tokens.filter((e) => e.type !== `checkbox`), n = t[0], r = ``;
			return Tt(n) && (r = this.parser.parseInline((n.tokens ?? []).filter((e) => e.type !== `checkbox`)), t.shift()), `<li data-task><label>${`<input type="checkbox" disabled${e.checked ? ` checked` : ``}>`}<span>${r}</span></label>${this.parser.parse(t)}</li>\n`;
		}
	} }), r;
}
function Dt(e, t = {}) {
	return Et(t).parse(e, { async: !1 });
}
var $ = r();
function Ot({ text: e, headingOffset: t = 0, breaks: n = !0, tableLabel: r, ...i }) {
	let a = (0, _.useMemo)(() => ({ __html: Dt(e, {
		headingOffset: t,
		breaks: n,
		...r === void 0 ? {} : { tableLabel: r }
	}) }), [
		e,
		t,
		n,
		r
	]);
	return (0, $.jsx)(c, {
		...i,
		dangerouslySetInnerHTML: a
	});
}
function kt(e, t, n) {
	let [r, i] = (0, _.useState)(t), a = e !== void 0;
	return [a ? e : r, (0, _.useCallback)((e) => {
		a || i(e), n?.(e);
	}, [a, n])];
}
var At = `relative inline-flex h-control-sm min-w-12 cursor-default items-center justify-center rounded-md px-3 text-caption font-medium text-muted transition-colors outline-offset-[-2px] data-hovered:bg-hover data-hovered:text-fg data-selected:bg-surface data-selected:text-fg data-selected:shadow-sm data-selected:after:absolute data-selected:after:inset-x-2 data-selected:after:bottom-0.5 data-selected:after:border-b-2 data-selected:after:border-accent data-disabled:opacity-50`;
function jt({ label: e, writeLabel: t, previewLabel: r, emptyPreview: a, value: s, defaultValue: c = ``, onChange: v, tab: y, onTabChange: b, description: x, errorMessage: S, placeholder: C, rows: w = 6, headingOffset: T = 0, onKeyDown: ee, textAreaRef: te, validationBehavior: ne = `aria`, className: E, ...re }) {
	let [D, ie] = kt(s, c, v), [ae, O] = kt(y, `write`, b), k = (0, _.useCallback)((e) => O(e === `preview` ? `preview` : `write`), [O]), oe = (0, _.useMemo)(() => ({ minHeight: `calc(${w * 1.5}em + 1rem)` }), [w]);
	return (0, $.jsxs)(g, {
		...re,
		value: D,
		onChange: ie,
		validationBehavior: ne,
		className: i(`flex min-w-0 flex-col gap-1.5`, E),
		children: [
			(0, $.jsxs)(p, {
				selectedKey: ae,
				onSelectionChange: k,
				className: `flex min-w-0 flex-col gap-1.5`,
				children: [
					(0, $.jsxs)(`div`, {
						className: `flex flex-wrap items-end justify-between gap-x-3 gap-y-1`,
						children: [(0, $.jsx)(o, {
							className: `text-caption font-medium text-fg`,
							children: e
						}), (0, $.jsxs)(d, {
							"aria-label": e,
							className: `inline-flex gap-0.5 rounded-lg border border-border bg-sunken p-0.5`,
							children: [(0, $.jsx)(f, {
								id: `write`,
								className: At,
								children: t
							}), (0, $.jsx)(f, {
								id: `preview`,
								className: At,
								children: r
							})]
						})]
					}),
					(0, $.jsx)(m, {
						id: `write`,
						shouldForceMount: !0,
						className: `min-w-0 data-inert:hidden`,
						children: (0, $.jsx)(h, {
							...te === void 0 ? {} : { ref: te },
							...C === void 0 ? {} : { placeholder: C },
							...ee === void 0 ? {} : { onKeyDown: ee },
							rows: w,
							spellCheck: !0,
							className: `block w-full resize-y rounded-md border border-border-strong bg-input px-3 py-2 font-mono text-body leading-normal text-fg placeholder:text-muted data-disabled:cursor-not-allowed data-disabled:opacity-50 data-hovered:border-fg/40 data-invalid:border-danger`
						})
					}),
					(0, $.jsx)(m, {
						id: `preview`,
						style: oe,
						className: `max-h-96 min-w-0 overflow-auto rounded-md border border-border bg-surface px-3 py-2`,
						children: D.trim() === `` ? (0, $.jsx)(`p`, {
							className: `text-body text-muted italic`,
							children: a
						}) : (0, $.jsx)(Ot, {
							text: D,
							headingOffset: T
						})
					})
				]
			}),
			x === void 0 ? null : (0, $.jsx)(l, {
				slot: `description`,
				className: `text-caption text-muted`,
				children: x
			}),
			(0, $.jsx)(u, {
				className: `flex items-start gap-1.5 text-caption font-medium text-danger`,
				children: S === void 0 ? void 0 : (0, $.jsxs)($.Fragment, { children: [(0, $.jsx)(n, {
					name: `status.error`,
					size: 14,
					"aria-hidden": !0,
					className: `mt-px shrink-0`
				}), (0, $.jsx)(`span`, { children: S })] })
			})
		]
	});
}
var Mt = {
	ok: s(`status.ok`),
	info: s(`status.info`),
	warn: s(`status.warning`),
	danger: s(`status.error`)
}, Nt = {
	ok: `text-ok`,
	info: `text-info`,
	warn: `text-warn`,
	danger: `text-danger`
}, Pt = {
	ok: `border-s-ok`,
	info: `border-s-info`,
	warn: `border-s-warn`,
	danger: `border-s-danger`
};
function Ft({ tone: e, size: t = 14, className: n }) {
	let r = Mt[e];
	return (0, $.jsx)(r, {
		size: t,
		"aria-hidden": !0,
		className: i(`shrink-0`, Nt[e], n)
	});
}
function It({ size: e = 14, className: t }) {
	return (0, $.jsx)(n, {
		name: `status.loading`,
		size: e,
		"aria-hidden": !0,
		className: i(`shrink-0 motion-safe:animate-spin`, t)
	});
}
function Lt({ text: e, label: t, title: n, status: r, isRunning: o = !1, runningLabel: s, emptyText: c, maxLines: l = 14, className: u, ...d }) {
	let f = (0, _.useRef)(null), p = (0, _.useRef)(!0), m = (0, _.useMemo)(() => ({ maxHeight: `calc(${l * 1.5}em + 1.5rem)` }), [l]), h = (0, _.useCallback)(() => {
		let e = f.current;
		e && (p.current = e.scrollHeight - e.scrollTop - e.clientHeight < 24);
	}, []);
	(0, _.useLayoutEffect)(() => {
		let t = f.current;
		e !== `` && o && t && p.current && (t.scrollTop = t.scrollHeight);
	}, [e, o]);
	let g = n !== void 0 || r !== void 0 || o && s !== void 0;
	return (0, $.jsxs)(`div`, {
		...d,
		className: i(`flex min-w-0 flex-col overflow-hidden rounded-md border border-border bg-sunken text-fg`, r && `border-s-4 ${Pt[r.tone]}`, u),
		children: [g ? (0, $.jsxs)(`div`, {
			className: `flex min-h-control-sm flex-wrap items-center gap-x-3 gap-y-1 border-b border-border px-3 py-1 text-caption`,
			children: [n === void 0 ? null : (0, $.jsx)(`span`, {
				className: `min-w-0 flex-1 truncate font-medium text-fg`,
				children: n
			}), (0, $.jsxs)(`output`, {
				className: `inline-flex items-center gap-1.5`,
				children: [o && s !== void 0 ? (0, $.jsxs)($.Fragment, { children: [(0, $.jsx)(It, {
					size: 13,
					className: `text-muted`
				}), (0, $.jsx)(`span`, {
					className: `text-muted`,
					children: s
				})] }) : null, r === void 0 || o ? null : (0, $.jsxs)($.Fragment, { children: [(0, $.jsx)(Ft, {
					tone: r.tone,
					size: 14
				}), (0, $.jsx)(`span`, {
					className: `font-medium text-fg`,
					children: r.label
				})] })]
			})]
		}) : null, (0, $.jsx)(`pre`, {
			ref: f,
			...a(t),
			translate: `no`,
			style: m,
			onScroll: h,
			className: `m-0 overflow-auto p-3 font-mono text-caption leading-[1.5] whitespace-pre-wrap select-text [overflow-wrap:anywhere]`,
			children: e === `` && c !== void 0 ? (0, $.jsx)(`span`, {
				className: `font-sans text-muted italic`,
				children: c
			}) : e
		})]
	});
}
export { jt as n, Ot as r, Lt as t };
