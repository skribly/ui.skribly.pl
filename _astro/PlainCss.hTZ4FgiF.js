import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { f as n, i as r, p as i, r as a, s as o, t as s, u as c } from "./doc.D2PtmWN6.js";
import { t as l } from "./jsx-runtime.yrTYNGQT.js";
var u = e(t(), 1), d = `/*
   Plain classes for pages with no React and no Tailwind. They match the React
   components and use only --sk-* variables. The layer lets a page's own CSS
   win with no specificity fights.
*/
@layer components {
  /*
     Glyphs drawn as masks and painted with a token, so they follow the theme.
     Every message tone has its own shape, so meaning never rests on colour.
  */
  :root {
    --sk-glyph-check: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
    --sk-glyph-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3.5' stroke-linecap='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
    --sk-glyph-chevron-down: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
    --sk-glyph-chevron-right: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m9 18 6-6-6-6'/%3E%3C/svg%3E");
    --sk-glyph-sort: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m7 15 5 5 5-5M7 9l5-5 5 5'/%3E%3C/svg%3E");
    --sk-glyph-sort-up: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m5 12 7-7 7 7M12 19V5'/%3E%3C/svg%3E");
    --sk-glyph-sort-down: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 5v14M19 12l-7 7-7-7'/%3E%3C/svg%3E");
    --sk-glyph-ok: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
    --sk-glyph-info: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4M12 8h.01'/%3E%3C/svg%3E");
    --sk-glyph-warn: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4M12 17h.01'/%3E%3C/svg%3E");
    --sk-glyph-danger: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 16h.01M12 8v4'/%3E%3Cpath d='M15.31 2a2 2 0 0 1 1.42.59l4.68 4.68A2 2 0 0 1 22 8.69v6.62a2 2 0 0 1-.59 1.42l-4.68 4.68a2 2 0 0 1-1.42.59H8.69a2 2 0 0 1-1.42-.59l-4.68-4.68A2 2 0 0 1 2 15.31V8.69a2 2 0 0 1 .59-1.42l4.68-4.68A2 2 0 0 1 8.69 2z'/%3E%3C/svg%3E");
    --sk-glyph-error: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 8v4M12 16h.01'/%3E%3C/svg%3E");
    --sk-glyph-tip: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4'/%3E%3C/svg%3E");
  }

  /*
     A page with an open modal dialog does not scroll behind it.
  */
  :root:has(.sk-dialog:modal) {
    overflow: hidden;
  }

  .sk-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--sk-space-2);
    box-sizing: border-box;
    max-width: 100%;
    min-height: var(--sk-control-md);
    padding-block: var(--sk-space-1);
    padding-inline: var(--sk-space-3);
    border: 1px solid transparent;
    border-radius: var(--sk-radius-md);
    background: var(--sk-accent);
    color: var(--sk-accent-fg);
    font: inherit;
    font-size: var(--sk-text-body);
    font-weight: 500;
    line-height: var(--sk-leading-tight);
    text-align: center;
    text-decoration: none;
    overflow-wrap: break-word;
    cursor: pointer;
    user-select: none;
    transition:
      background-color var(--sk-duration-fast) var(--sk-ease-out),
      border-color var(--sk-duration-fast) var(--sk-ease-out),
      color var(--sk-duration-fast) var(--sk-ease-out),
      transform var(--sk-duration-fast) var(--sk-ease-out);
  }

  .sk-button:hover {
    background: var(--sk-accent-strong);
  }

  .sk-button:focus-visible {
    outline: var(--sk-focus-width) solid var(--sk-focus);
    outline-offset: var(--sk-focus-offset);
  }

  .sk-button:active:not(:disabled, [aria-disabled='true']) {
    transform: translateY(1px);
  }

  .sk-button:disabled,
  .sk-button[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .sk-button[aria-busy='true'] {
    cursor: progress;
  }

  .sk-button[aria-busy='true']::before {
    content: '';
    flex: none;
    box-sizing: border-box;
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-inline-end-color: transparent;
    border-radius: var(--sk-radius-full);
    animation: sk-spin 0.8s linear infinite;
  }

  .sk-button svg {
    flex: none;
    width: 1rem;
    height: 1rem;
  }

  .sk-button--outline {
    border: 1px solid var(--sk-border-strong);
    background: var(--sk-surface);
    color: var(--sk-fg);
  }

  .sk-button--outline:hover {
    background: var(--sk-hover);
  }

  .sk-button--ghost {
    background: transparent;
    color: var(--sk-fg);
  }

  .sk-button--ghost:hover {
    background: var(--sk-hover);
  }

  :is(.sk-button--outline, .sk-button--ghost)[aria-pressed='true'],
  :is(.sk-button--outline, .sk-button--ghost)[aria-expanded='true'] {
    background: var(--sk-selected);
  }

  .sk-button--danger {
    background: var(--sk-danger);
    color: var(--sk-danger-fg);
  }

  .sk-button--danger:hover {
    background: var(--sk-danger);
    opacity: 0.9;
  }

  .sk-button--sm {
    min-height: var(--sk-control-sm);
    padding-inline: var(--sk-space-2);
    font-size: var(--sk-text-caption);
  }

  .sk-button--lg {
    min-height: var(--sk-control-lg);
    padding-inline: var(--sk-space-4);
  }

  /*
     A square button for one icon. It needs an aria-label, because the icon
     is its only content.
  */
  .sk-button--icon {
    width: var(--sk-control-md);
    padding: 0;
  }

  .sk-button--icon.sk-button--sm {
    width: var(--sk-control-sm);
  }

  .sk-button--icon.sk-button--lg {
    width: var(--sk-control-lg);
  }

  .sk-link {
    border-radius: var(--sk-radius-sm);
    color: var(--sk-accent-text);
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.15em;
  }

  .sk-link:hover {
    text-decoration-thickness: 2px;
  }

  .sk-link:focus-visible {
    outline: var(--sk-focus-width) solid var(--sk-focus);
    outline-offset: var(--sk-focus-offset);
  }

  .sk-link[aria-current]:not([aria-current='false']) {
    font-weight: 600;
    text-decoration: none;
  }

  .sk-field {
    display: flex;
    flex-direction: column;
    gap: var(--sk-space-1);
    min-width: 0;
  }

  .sk-field > * {
    margin-block: 0;
  }

  .sk-label {
    color: var(--sk-fg);
    font-size: var(--sk-text-caption);
    font-weight: 500;
  }

  /*
     The asterisk is decoration: the control carries required or
     aria-required, so the span takes aria-hidden="true".
  */
  .sk-required {
    margin-inline-start: 0.125rem;
    color: var(--sk-danger);
  }

  .sk-optional {
    margin-inline-start: var(--sk-space-1);
    color: var(--sk-muted);
    font-weight: 400;
  }

  .sk-hint {
    color: var(--sk-muted);
    font-size: var(--sk-text-caption);
  }

  .sk-input {
    height: var(--sk-control-md);
    padding-inline: var(--sk-space-2);
    border: 1px solid var(--sk-border-strong);
    border-radius: var(--sk-radius-md);
    background: var(--sk-input);
    color: var(--sk-fg);
    font: inherit;
    font-size: var(--sk-text-body);
  }

  .sk-input[aria-invalid='true'] {
    border-color: var(--sk-danger);
  }

  .sk-input,
  .sk-textarea,
  .sk-select {
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    border: 1px solid var(--sk-border-strong);
    border-radius: var(--sk-radius-md);
    background-color: var(--sk-input);
    color: var(--sk-fg);
    font: inherit;
    font-size: var(--sk-text-body);
    transition:
      border-color var(--sk-duration-fast) var(--sk-ease-out),
      background-color var(--sk-duration-fast) var(--sk-ease-out);
  }

  :is(.sk-input, .sk-textarea)::placeholder {
    color: var(--sk-muted);
    opacity: 1;
  }

  :is(.sk-input, .sk-textarea, .sk-select):hover:not(:is(:disabled, [aria-invalid='true'], :user-invalid)) {
    border-color: var(--sk-muted);
  }

  :is(.sk-input, .sk-textarea, .sk-select):focus-visible {
    outline: var(--sk-focus-width) solid var(--sk-focus);
    outline-offset: var(--sk-focus-offset);
  }

  :is(.sk-input, .sk-textarea, .sk-select):is([aria-invalid='true'], :user-invalid) {
    border-color: var(--sk-danger);
  }

  :is(.sk-input, .sk-textarea):read-only:not(:disabled) {
    background-color: var(--sk-sunken);
  }

  :is(.sk-input, .sk-textarea, .sk-select):disabled {
    border-color: var(--sk-border);
    background-color: var(--sk-sunken);
    color: var(--sk-muted);
    cursor: not-allowed;
  }

  .sk-textarea {
    display: block;
    min-height: 5rem;
    padding: var(--sk-space-2) 0.625rem;
    line-height: var(--sk-leading-prose);
    resize: vertical;
  }

  .sk-textarea--mono {
    font-family: var(--sk-font-mono);
  }

  /*
     The arrow is two gradient triangles in a token colour, because a native
     select takes no pseudo-elements and an image could not follow the theme.
     Forced colours bring back the native arrow.
  */
  .sk-select {
    height: var(--sk-control-md);
    padding-block: 0;
    padding-inline: 0.625rem 2rem;
    appearance: none;
    background-image:
      linear-gradient(45deg, transparent 50%, var(--sk-muted) 50%),
      linear-gradient(135deg, var(--sk-muted) 50%, transparent 50%);
    background-position:
      calc(100% - 1rem) 50%,
      calc(100% - 0.6875rem) 50%;
    background-size: 0.3125rem 0.3125rem;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .sk-select:dir(rtl) {
    background-position:
      0.375rem 50%,
      0.6875rem 50%;
  }

  .sk-select:is([multiple], [size]:not([size='1'])) {
    height: auto;
    padding: var(--sk-space-1);
    background-image: none;
  }

  .sk-select option {
    background-color: var(--sk-surface);
    color: var(--sk-fg);
  }

  /*
     Below the sm breakpoint the text is 16px, so iOS does not zoom into the
     field on focus.
  */
  @media (max-width: 40rem) {
    .sk-input,
    .sk-textarea,
    .sk-select {
      font-size: 1rem;
    }
  }

  .sk-fieldset {
    display: flex;
    flex-direction: column;
    gap: var(--sk-space-2);
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
  }

  .sk-fieldset > legend {
    margin-block-end: var(--sk-space-2);
    padding: 0;
    color: var(--sk-fg);
    font-size: var(--sk-text-caption);
    font-weight: 500;
  }

  /*
     The label wraps the input and its text, so the whole row is the target
     and clears the 24px minimum.
  */
  .sk-checkbox,
  .sk-radio,
  .sk-switch {
    display: flex;
    align-items: flex-start;
    gap: 0.625rem;
    width: fit-content;
    max-width: 100%;
    min-height: 1.5rem;
    box-sizing: border-box;
    padding-block: 0.125rem;
    color: var(--sk-fg);
    font-size: var(--sk-text-body);
    line-height: var(--sk-leading-body);
    overflow-wrap: anywhere;
    cursor: pointer;
  }

  .sk-switch {
    align-items: center;
  }

  :is(.sk-checkbox, .sk-radio, .sk-switch):has(input:disabled) {
    color: var(--sk-muted);
    cursor: not-allowed;
  }

  :is(.sk-checkbox, .sk-radio, .sk-switch) > input {
    flex: none;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid var(--sk-border-strong);
    appearance: none;
    cursor: inherit;
    transition:
      border-color var(--sk-duration-fast) var(--sk-ease-out),
      background-color var(--sk-duration-fast) var(--sk-ease-out),
      transform var(--sk-duration-fast) var(--sk-ease-out);
  }

  :is(.sk-checkbox, .sk-radio) > input {
    display: inline-grid;
    place-items: center;
    width: 1rem;
    height: 1rem;
    margin-block-start: 0.1875rem;
    margin-block-start: max(0px, (1lh - 1rem) / 2);
    background-color: var(--sk-input);
  }

  :is(.sk-checkbox, .sk-radio, .sk-switch) > input:focus-visible {
    outline: var(--sk-focus-width) solid var(--sk-focus);
    outline-offset: var(--sk-focus-offset);
  }

  :is(.sk-checkbox, .sk-radio, .sk-switch):hover
    > input:not(:disabled, :checked, :indeterminate, [aria-invalid='true']) {
    border-color: var(--sk-muted);
  }

  :is(.sk-checkbox, .sk-radio, .sk-switch) > input[aria-invalid='true'] {
    border-color: var(--sk-danger);
  }

  .sk-checkbox > input {
    border-radius: var(--sk-radius-sm);
  }

  .sk-checkbox > input::before {
    content: '';
    width: 0.75rem;
    height: 0.75rem;
    background: var(--sk-accent-fg);
    -webkit-mask: var(--sk-glyph-check) center / contain no-repeat;
    mask: var(--sk-glyph-check) center / contain no-repeat;
    transform: scale(0);
    transition: transform var(--sk-duration-fast) var(--sk-ease-out);
  }

  .sk-checkbox > input:is(:checked, :indeterminate) {
    border-color: var(--sk-accent);
    background-color: var(--sk-accent);
  }

  .sk-checkbox > input:is(:checked, :indeterminate)::before {
    transform: scale(1);
  }

  .sk-checkbox > input:indeterminate::before {
    -webkit-mask-image: var(--sk-glyph-minus);
    mask-image: var(--sk-glyph-minus);
  }

  .sk-checkbox > input:active:not(:disabled) {
    transform: scale(0.95);
  }

  .sk-radio > input {
    border-radius: var(--sk-radius-full);
  }

  .sk-radio > input::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: var(--sk-radius-full);
    background: var(--sk-accent);
    transform: scale(0);
    transition: transform var(--sk-duration-fast) var(--sk-ease-out);
  }

  .sk-radio > input:checked {
    border-color: var(--sk-accent);
  }

  .sk-radio > input:checked::before {
    transform: scale(1);
  }

  :is(.sk-checkbox, .sk-radio) > input:disabled {
    border-color: var(--sk-border-strong);
    background-color: var(--sk-sunken);
    opacity: 0.6;
  }

  .sk-checkbox > input:disabled::before {
    background: var(--sk-muted);
  }

  .sk-radio > input:disabled::before {
    background: var(--sk-muted);
  }

  /*
     An input with role="switch". The knob moves and shows a check mark when
     on, so the state is a position and a glyph as well as a colour. Logical
     margins move it the right way in right-to-left text.
  */
  .sk-switch > input {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 2.25rem;
    height: 1.25rem;
    padding: 0.125rem;
    border-radius: var(--sk-radius-full);
    background-color: var(--sk-sunken);
  }

  .sk-switch > input::before {
    content: '';
    flex: none;
    width: 0.875rem;
    height: 0.875rem;
    border-radius: var(--sk-radius-full);
    background: var(--sk-muted);
    box-shadow: var(--sk-shadow-sm);
    transition:
      margin-inline-start var(--sk-duration-base) var(--sk-ease-out),
      background-color var(--sk-duration-base) var(--sk-ease-out),
      transform var(--sk-duration-fast) var(--sk-ease-out);
  }

  .sk-switch > input::after {
    content: '';
    position: absolute;
    inset-block: 0;
    inset-inline-start: 1.25rem;
    width: 0.625rem;
    height: 0.625rem;
    margin-block: auto;
    background: var(--sk-accent);
    -webkit-mask: var(--sk-glyph-check) center / contain no-repeat;
    mask: var(--sk-glyph-check) center / contain no-repeat;
    visibility: hidden;
  }

  .sk-switch > input:checked {
    border-color: var(--sk-accent);
    background-color: var(--sk-accent);
  }

  .sk-switch > input:checked::before {
    margin-inline-start: 1rem;
    background: var(--sk-accent-fg);
  }

  .sk-switch > input:checked::after {
    visibility: visible;
  }

  .sk-switch > input:active:not(:disabled)::before {
    transform: scale(0.9);
  }

  .sk-switch > input:disabled {
    border-color: var(--sk-border);
    opacity: 0.6;
  }

  .sk-field > :is(.sk-checkbox, .sk-radio) ~ :is(.sk-hint, .sk-error, .sk-status) {
    padding-inline-start: 1.625rem;
  }

  .sk-field > .sk-switch ~ :is(.sk-hint, .sk-error, .sk-status) {
    padding-inline-start: 2.875rem;
  }

  /*
     Messages under a field. An error is set as aria-invalid on the control
     and linked with aria-describedby; a status is not an error, such as
     "Name is free". Both hide while empty, so a script can fill them later.
  */
  .sk-error,
  .sk-status {
    --sk-tone: var(--sk-danger);
    --sk-glyph: var(--sk-glyph-error);
    display: flex;
    align-items: flex-start;
    gap: 0.375rem;
    margin: 0;
    color: var(--sk-tone);
    font-size: var(--sk-text-caption);
    font-weight: 500;
    line-height: var(--sk-leading-body);
    overflow-wrap: anywhere;
  }

  .sk-status {
    --sk-tone: var(--sk-info);
    --sk-glyph: var(--sk-glyph-info);
  }

  .sk-status--ok {
    --sk-tone: var(--sk-ok);
    --sk-glyph: var(--sk-glyph-ok);
  }

  .sk-status--warn {
    --sk-tone: var(--sk-warn);
    --sk-glyph: var(--sk-glyph-warn);
  }

  .sk-status--info {
    --sk-tone: var(--sk-info);
    --sk-glyph: var(--sk-glyph-info);
  }

  :is(.sk-error, .sk-status)::before {
    content: '';
    flex: none;
    width: 0.875rem;
    height: 0.875rem;
    margin-block-start: 0.125rem;
    margin-block-start: max(0px, (1lh - 0.875rem) / 2);
    background: var(--sk-tone);
    -webkit-mask: var(--sk-glyph) center / contain no-repeat;
    mask: var(--sk-glyph) center / contain no-repeat;
  }

  :is(.sk-error, .sk-status):empty {
    display: none;
  }

  .sk-card {
    padding: var(--sk-space-4);
    border: 1px solid var(--sk-border);
    border-radius: var(--sk-radius-lg);
    background: var(--sk-surface);
    color: var(--sk-fg);
    box-shadow: var(--sk-shadow-sm);
  }

  /*
     A card that is one link: .sk-card__link inside stretches over the card,
     so the card shows the hover and the ring while the link keeps its name.
  */
  .sk-card--link {
    position: relative;
    transition:
      border-color var(--sk-duration-fast) var(--sk-ease-out),
      box-shadow var(--sk-duration-fast) var(--sk-ease-out);
  }

  .sk-card--link:hover {
    border-color: var(--sk-border-strong);
    box-shadow: var(--sk-shadow-md);
  }

  .sk-card__link::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
  }

  .sk-card__link:focus-visible {
    outline: none;
  }

  .sk-card--link:has(.sk-card__link:focus-visible) {
    outline: var(--sk-focus-width) solid var(--sk-focus);
    outline-offset: var(--sk-focus-offset);
  }

  .sk-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--sk-space-1);
    padding: 0.125rem var(--sk-space-2);
    border: 1px solid transparent;
    border-radius: var(--sk-radius-full);
    background: var(--sk-sunken);
    color: var(--sk-fg);
    font-size: var(--sk-text-caption);
    font-weight: 500;
    line-height: var(--sk-leading-body);
    white-space: nowrap;
  }

  .sk-badge--accent {
    background: var(--sk-accent-soft);
    color: var(--sk-accent-text);
  }

  .sk-badge--ok {
    background: var(--sk-ok-soft);
    color: var(--sk-ok);
  }

  .sk-badge--warn {
    background: var(--sk-warn-soft);
    color: var(--sk-warn);
  }

  .sk-badge--danger {
    background: var(--sk-danger-soft);
    color: var(--sk-danger);
  }

  .sk-badge--info {
    background: var(--sk-info-soft);
    color: var(--sk-info);
  }

  /*
     A message about the page or the last action. role="status" for success
     and info, role="alert" for an error that needs attention now.
  */
  .sk-alert {
    --sk-tone: var(--sk-info);
    --sk-glyph: var(--sk-glyph-info);
    position: relative;
    padding: var(--sk-space-3);
    padding-inline-start: calc(var(--sk-space-3) * 2 + 1rem);
    border: 1px solid var(--sk-info);
    border-left: 4px solid var(--sk-info);
    border-radius: var(--sk-radius-md);
    background: var(--sk-info-soft);
    color: var(--sk-fg);
    font-size: var(--sk-text-body);
    line-height: var(--sk-leading-body);
    overflow-wrap: anywhere;
  }

  .sk-alert--info {
    --sk-tone: var(--sk-info);
    --sk-glyph: var(--sk-glyph-info);
  }

  .sk-alert--ok {
    --sk-tone: var(--sk-ok);
    --sk-glyph: var(--sk-glyph-ok);
    border-color: var(--sk-ok);
    background: var(--sk-ok-soft);
  }

  .sk-alert--warn {
    --sk-tone: var(--sk-warn);
    --sk-glyph: var(--sk-glyph-warn);
    border-color: var(--sk-warn);
    background: var(--sk-warn-soft);
  }

  .sk-alert--danger {
    --sk-tone: var(--sk-danger);
    --sk-glyph: var(--sk-glyph-danger);
    border-color: var(--sk-danger);
    background: var(--sk-danger-soft);
  }

  .sk-alert:dir(rtl) {
    border-left-width: 1px;
    border-right-width: 4px;
  }

  /*
     A note inside content, such as a tip in an article. It is quieter than
     an alert: the tone shows in the edge, the glyph and the title.
  */
  .sk-callout {
    --sk-tone: var(--sk-info);
    --sk-glyph: var(--sk-glyph-info);
    position: relative;
    padding: var(--sk-space-3) var(--sk-space-4);
    padding-inline-start: calc(var(--sk-space-4) + 1rem + var(--sk-space-3));
    border: 1px solid var(--sk-border);
    border-inline-start: 4px solid var(--sk-tone);
    border-radius: var(--sk-radius-md);
    background: var(--sk-sunken);
    color: var(--sk-fg);
    font-size: var(--sk-text-body);
    line-height: var(--sk-leading-prose);
    overflow-wrap: anywhere;
  }

  .sk-callout--info {
    --sk-tone: var(--sk-info);
    --sk-glyph: var(--sk-glyph-info);
  }

  .sk-callout--tip {
    --sk-tone: var(--sk-accent-text);
    --sk-glyph: var(--sk-glyph-tip);
  }

  .sk-callout--ok {
    --sk-tone: var(--sk-ok);
    --sk-glyph: var(--sk-glyph-ok);
  }

  .sk-callout--warn {
    --sk-tone: var(--sk-warn);
    --sk-glyph: var(--sk-glyph-warn);
  }

  .sk-callout--danger {
    --sk-tone: var(--sk-danger);
    --sk-glyph: var(--sk-glyph-danger);
  }

  .sk-callout__title {
    display: block;
    color: var(--sk-tone);
    font-weight: 600;
  }

  :is(.sk-alert, .sk-callout)::before {
    content: '';
    position: absolute;
    inset-block-start: calc(var(--sk-space-3) + 0.125rem);
    inset-block-start: calc(var(--sk-space-3) + max(0px, (1lh - 1rem) / 2));
    width: 1rem;
    height: 1rem;
    background: var(--sk-tone);
    -webkit-mask: var(--sk-glyph) center / contain no-repeat;
    mask: var(--sk-glyph) center / contain no-repeat;
  }

  .sk-alert::before {
    inset-inline-start: var(--sk-space-3);
  }

  .sk-callout::before {
    inset-inline-start: var(--sk-space-4);
  }

  .sk-alert__title {
    display: block;
    font-weight: 600;
  }

  :is(.sk-alert, .sk-callout) > * {
    margin-block: 0;
  }

  :is(.sk-alert, .sk-callout) > * + * {
    margin-block-start: var(--sk-space-1);
  }

  :is(.sk-alert, .sk-callout) a:not([class]) {
    color: inherit;
    font-weight: 500;
    text-decoration: underline;
  }

  :is(.sk-alert, .sk-callout) :is(ul, ol) {
    padding-inline-start: var(--sk-space-5);
  }

  .sk-alert__actions,
  .sk-callout__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--sk-space-2);
  }

  :is(.sk-alert, .sk-callout) > :is(.sk-alert__actions, .sk-callout__actions) {
    margin-block-start: var(--sk-space-3);
  }

  /*
     The wrapper scrolls a wide table sideways and gives the table its frame.
     When it overflows, give it tabindex="0", role="region" and a name, so
     keyboard users can scroll it too.
  */
  .sk-table-wrap {
    container-type: inline-size;
    position: relative;
    max-width: 100%;
    overflow-x: auto;
    border: 1px solid var(--sk-border);
    border-radius: var(--sk-radius-lg);
    background: var(--sk-surface);
  }

  .sk-table-wrap:focus-visible {
    outline: var(--sk-focus-width) solid var(--sk-focus);
    outline-offset: var(--sk-focus-offset);
  }

  .sk-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    color: var(--sk-fg);
    font-size: var(--sk-text-body);
    line-height: var(--sk-leading-body);
    text-align: start;
  }

  .sk-table > caption {
    padding: var(--sk-space-3) var(--sk-space-4);
    border-bottom: 1px solid var(--sk-border);
    font-size: var(--sk-text-title);
    font-weight: 600;
    text-align: start;
  }

  .sk-table :is(th, td) {
    padding: var(--sk-space-3) var(--sk-space-4);
    border-bottom: 1px solid var(--sk-border);
    text-align: start;
    vertical-align: middle;
    overflow-wrap: anywhere;
  }

  .sk-table > thead th {
    padding-block: 0.625rem;
    background: var(--sk-sunken);
    color: var(--sk-muted);
    font-size: var(--sk-text-label);
    font-weight: 600;
    letter-spacing: var(--sk-tracking-label);
    text-transform: uppercase;
    vertical-align: bottom;
    overflow-wrap: normal;
  }

  .sk-table > tbody th {
    font-weight: 500;
  }

  .sk-table > tbody > tr {
    transition: background-color var(--sk-duration-fast) var(--sk-ease-out);
  }

  .sk-table > tbody > tr:hover {
    background: var(--sk-hover);
  }

  .sk-table > tbody > tr:is([aria-selected='true'], [aria-current]:not([aria-current='false'])) {
    background: var(--sk-selected);
  }

  .sk-table > tbody > tr:last-child > * {
    border-bottom: 0;
  }

  .sk-table > tfoot > tr > * {
    border-top: 1px solid var(--sk-border-strong);
    border-bottom: 0;
    font-weight: 600;
  }

  .sk-table :is(th, td).sk-table__num {
    font-variant-numeric: tabular-nums;
    text-align: end;
  }

  .sk-table :is(th, td).sk-table__actions {
    width: 1px;
    white-space: nowrap;
    text-align: end;
  }

  .sk-table--compact :is(th, td) {
    padding-block: var(--sk-space-2);
  }

  /*
     A sortable column holds a button in its header. aria-sort on the th
     tells screen readers the order; the arrow shows it.
  */
  .sk-table th[aria-sort] > button {
    display: inline-flex;
    align-items: center;
    gap: var(--sk-space-1);
    margin: calc(var(--sk-space-1) * -1);
    padding: var(--sk-space-1);
    border: 0;
    border-radius: var(--sk-radius-sm);
    background: transparent;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    cursor: pointer;
  }

  .sk-table th[aria-sort] > button:hover {
    background: var(--sk-hover);
    color: var(--sk-fg);
  }

  .sk-table th[aria-sort] > button:focus-visible {
    outline: var(--sk-focus-width) solid var(--sk-focus);
    outline-offset: calc(var(--sk-focus-width) * -1);
  }

  .sk-table th[aria-sort] > button::after {
    content: '';
    flex: none;
    width: 0.875rem;
    height: 0.875rem;
    background: currentColor;
    -webkit-mask: var(--sk-glyph-sort) center / contain no-repeat;
    mask: var(--sk-glyph-sort) center / contain no-repeat;
    opacity: 0.6;
  }

  .sk-table th[aria-sort='ascending'],
  .sk-table th[aria-sort='descending'] {
    color: var(--sk-fg);
  }

  .sk-table th[aria-sort='ascending'] > button::after {
    -webkit-mask-image: var(--sk-glyph-sort-up);
    mask-image: var(--sk-glyph-sort-up);
    opacity: 1;
  }

  .sk-table th[aria-sort='descending'] > button::after {
    -webkit-mask-image: var(--sk-glyph-sort-down);
    mask-image: var(--sk-glyph-sort-down);
    opacity: 1;
  }

  /*
     On a narrow wrapper each row of a stacked table becomes a block of
     label and value pairs. The labels come from data-label on each cell and
     are hidden from screen readers, which read the header cells. Display
     changes drop table semantics in some browsers, so a stacked table also
     carries role="table", "rowgroup", "row", "columnheader" and "cell".
  */
  @container (max-width: 40rem) {
    .sk-table--stack,
    .sk-table--stack > :is(thead, tbody, tfoot),
    .sk-table--stack > :is(tbody, tfoot) > tr,
    .sk-table--stack > caption {
      display: block;
    }

    .sk-table--stack > thead {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
    }

    .sk-table--stack > :is(tbody, tfoot) > tr {
      padding: var(--sk-space-2) var(--sk-space-4);
      border-bottom: 1px solid var(--sk-border);
    }

    .sk-table--stack > :is(tbody, tfoot) > tr:last-child {
      border-bottom: 0;
    }

    .sk-table--stack > :is(tbody, tfoot) > tr > * {
      display: grid;
      grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
      gap: var(--sk-space-3);
      padding: 0.375rem 0;
      border: 0;
      text-align: start;
    }

    .sk-table--stack > :is(tbody, tfoot) > tr > .sk-table__num {
      text-align: start;
    }

    .sk-table--stack > :is(tbody, tfoot) > tr > :not([data-label]) {
      display: block;
    }

    .sk-table--stack > :is(tbody, tfoot) > tr > [data-label]::before {
      content: attr(data-label);
      content: attr(data-label) / '';
      color: var(--sk-muted);
      font-size: var(--sk-text-caption);
      font-weight: 500;
    }

    .sk-table--stack > :is(tbody, tfoot) > tr > .sk-table__actions {
      display: flex;
      justify-content: flex-end;
      width: auto;
    }
  }

  /*
     A strip of ARIA tabs (role="tablist" with role="tab" buttons and
     aria-selected) or of page links with aria-current="page". Both look the
     same. The ring sits inside, so the scrolling strip never clips it.
  */
  .sk-tabs {
    display: flex;
    gap: var(--sk-space-1);
    min-width: 0;
    max-width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    border-bottom: 1px solid var(--sk-border);
    list-style: none;
    scrollbar-width: thin;
  }

  .sk-tabs > li {
    display: flex;
    flex: none;
  }

  .sk-tabs :is(a, button, [role='tab']) {
    position: relative;
    display: inline-flex;
    flex: none;
    align-items: center;
    gap: var(--sk-space-2);
    box-sizing: border-box;
    min-width: 1.5rem;
    height: var(--sk-control-md);
    margin: 0;
    padding-inline: var(--sk-space-3);
    border: 0;
    border-radius: var(--sk-radius-md) var(--sk-radius-md) 0 0;
    background: transparent;
    color: var(--sk-muted);
    font: inherit;
    font-size: var(--sk-text-body);
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    transition:
      color var(--sk-duration-fast) var(--sk-ease-out),
      background-color var(--sk-duration-fast) var(--sk-ease-out);
  }

  .sk-tabs :is(a, button, [role='tab']):hover {
    background: var(--sk-hover);
    color: var(--sk-fg);
  }

  .sk-tabs :is(a, button, [role='tab']):active {
    background: var(--sk-sunken);
  }

  .sk-tabs :is(a, button, [role='tab']):focus-visible {
    outline: var(--sk-focus-width) solid var(--sk-focus);
    outline-offset: calc(var(--sk-focus-width) * -1);
  }

  .sk-tabs :is([aria-selected='true'], [aria-current]:not([aria-current='false'])) {
    color: var(--sk-fg);
  }

  .sk-tabs :is([aria-selected='true'], [aria-current]:not([aria-current='false']))::after {
    content: '';
    position: absolute;
    inset-inline: var(--sk-space-2);
    bottom: 0;
    height: 2px;
    border-radius: var(--sk-radius-full);
    background: var(--sk-accent);
  }

  .sk-tabs :is(a, button, [role='tab']):is(:disabled, [aria-disabled='true']) {
    background: transparent;
    color: var(--sk-muted);
    cursor: not-allowed;
    opacity: 0.5;
  }

  .sk-tabs svg {
    flex: none;
    width: 1rem;
    height: 1rem;
  }

  .sk-tabs--vertical {
    flex-direction: column;
    gap: 0.125rem;
    overflow: visible;
    border-bottom: 0;
    border-inline-start: 1px solid var(--sk-border);
  }

  .sk-tabs--vertical :is(a, button, [role='tab']) {
    justify-content: flex-start;
    width: 100%;
    height: auto;
    min-height: var(--sk-control-md);
    padding-block: 0.375rem;
    border-radius: 0;
    border-start-end-radius: var(--sk-radius-md);
    border-end-end-radius: var(--sk-radius-md);
    text-align: start;
    white-space: normal;
  }

  .sk-tabs--vertical :is([aria-selected='true'], [aria-current]:not([aria-current='false']))::after {
    inset-block: 0.375rem;
    inset-inline: -1px auto;
    bottom: 0.375rem;
    width: 2px;
    height: auto;
  }

  /*
     Site navigation: links in a list, the current one with
     aria-current="page". Horizontal by default, for a page header.
  */
  .sk-nav {
    min-width: 0;
    font-size: var(--sk-text-body);
  }

  .sk-nav :is(ul, ol) {
    display: flex;
    flex-wrap: wrap;
    gap: var(--sk-space-1);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .sk-nav a {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--sk-space-2);
    box-sizing: border-box;
    min-height: var(--sk-control-md);
    padding: 0.375rem var(--sk-space-3);
    border-radius: var(--sk-radius-md);
    color: var(--sk-muted);
    font-weight: 500;
    text-decoration: none;
    transition:
      color var(--sk-duration-fast) var(--sk-ease-out),
      background-color var(--sk-duration-fast) var(--sk-ease-out);
  }

  .sk-nav a:hover {
    background: var(--sk-hover);
    color: var(--sk-fg);
  }

  .sk-nav a:focus-visible {
    outline: var(--sk-focus-width) solid var(--sk-focus);
    outline-offset: calc(var(--sk-focus-width) * -1);
  }

  .sk-nav a[aria-current]:not([aria-current='false']) {
    color: var(--sk-fg);
  }

  .sk-nav a[aria-current]:not([aria-current='false'])::after {
    content: '';
    position: absolute;
    inset-inline: var(--sk-space-3);
    bottom: 0;
    height: 2px;
    border-radius: var(--sk-radius-full);
    background: var(--sk-accent);
  }

  .sk-nav a[aria-disabled='true'] {
    background: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  .sk-nav svg {
    flex: none;
    width: 1.125rem;
    height: 1.125rem;
  }

  .sk-nav--vertical :is(ul, ol) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0.125rem;
  }

  .sk-nav--vertical a[aria-current]:not([aria-current='false']) {
    background: var(--sk-selected);
  }

  .sk-nav--vertical a[aria-current]:not([aria-current='false'])::after {
    inset-block: var(--sk-space-1);
    inset-inline: 0 auto;
    bottom: var(--sk-space-1);
    width: 3px;
    height: auto;
  }

  /*
     The dark sidebar of the apps, with the --sk-nav tokens.
  */
  .sk-nav--dark {
    padding: var(--sk-space-2);
    background: var(--sk-nav);
    color: var(--sk-nav-fg);
  }

  .sk-nav--dark a {
    color: var(--sk-nav-fg);
  }

  .sk-nav--dark a:hover {
    background: var(--sk-nav-hover);
    color: var(--sk-nav-fg);
  }

  .sk-nav--dark a[aria-current]:not([aria-current='false']) {
    background: var(--sk-nav-active);
    color: var(--sk-nav-fg);
  }

  .sk-nav--dark a[aria-current]:not([aria-current='false'])::after {
    background: var(--sk-nav-accent);
  }

  .sk-breadcrumbs {
    min-width: 0;
    font-size: var(--sk-text-caption);
  }

  .sk-breadcrumbs :is(ol, ul) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: var(--sk-space-1);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .sk-breadcrumbs li {
    display: flex;
    align-items: center;
    min-width: 0;
  }

  .sk-breadcrumbs li + li::before {
    content: '';
    flex: none;
    width: 0.875rem;
    height: 0.875rem;
    margin-inline: 0.125rem;
    background: var(--sk-muted);
    -webkit-mask: var(--sk-glyph-chevron-right) center / contain no-repeat;
    mask: var(--sk-glyph-chevron-right) center / contain no-repeat;
  }

  .sk-breadcrumbs li + li:dir(rtl)::before {
    transform: scaleX(-1);
  }

  .sk-breadcrumbs :is(a, [aria-current='page']) {
    display: inline-block;
    max-width: min(16rem, 100%);
    overflow: hidden;
    padding-inline: var(--sk-space-1);
    border-radius: var(--sk-radius-sm);
    color: var(--sk-muted);
    line-height: 1.5rem;
    text-decoration: none;
    text-overflow: ellipsis;
    text-underline-offset: 2px;
    white-space: nowrap;
    vertical-align: middle;
    transition: color var(--sk-duration-fast) var(--sk-ease-out);
  }

  .sk-breadcrumbs a:hover {
    color: var(--sk-fg);
    text-decoration: underline;
  }

  .sk-breadcrumbs a:focus-visible {
    outline: var(--sk-focus-width) solid var(--sk-focus);
    outline-offset: 0;
  }

  .sk-breadcrumbs [aria-current='page'] {
    color: var(--sk-fg);
    font-weight: 500;
    text-decoration: none;
    cursor: default;
  }

  /*
     Pages as links with rel="prev" and rel="next" around them. On a narrow
     strip only the previous, current and next controls stay.
  */
  .sk-pagination {
    container-type: inline-size;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--sk-space-2) var(--sk-space-4);
    min-width: 0;
    font-size: var(--sk-text-caption);
  }

  .sk-pagination :is(ul, ol) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--sk-space-1);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .sk-pagination li {
    display: flex;
  }

  .sk-pagination :is(a, button) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--sk-space-1);
    box-sizing: border-box;
    min-width: var(--sk-control-sm);
    height: var(--sk-control-sm);
    margin: 0;
    padding-inline: var(--sk-space-2);
    border: 1px solid var(--sk-border-strong);
    border-radius: var(--sk-radius-md);
    background: var(--sk-surface);
    color: var(--sk-fg);
    font: inherit;
    font-weight: 500;
    font-variant-numeric: tabular-nums;
    text-decoration: none;
    cursor: pointer;
    transition:
      background-color var(--sk-duration-fast) var(--sk-ease-out),
      border-color var(--sk-duration-fast) var(--sk-ease-out);
  }

  .sk-pagination :is(a, button):hover:not(:disabled, [aria-disabled='true'], [aria-current='page']) {
    background: var(--sk-hover);
  }

  .sk-pagination :is(a, button):active:not(:disabled, [aria-disabled='true'], [aria-current='page']) {
    background: var(--sk-sunken);
  }

  .sk-pagination :is(a, button):focus-visible {
    outline: var(--sk-focus-width) solid var(--sk-focus);
    outline-offset: var(--sk-focus-offset);
  }

  .sk-pagination [aria-current='page'] {
    border-color: var(--sk-accent);
    background: var(--sk-accent);
    color: var(--sk-accent-fg);
    font-weight: 600;
  }

  .sk-pagination :is(a, button):is(:disabled, [aria-disabled='true']) {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .sk-pagination [rel='prev']::before,
  .sk-pagination [rel='next']::after {
    content: '';
    flex: none;
    width: 1rem;
    height: 1rem;
    background: currentColor;
    -webkit-mask: var(--sk-glyph-chevron-right) center / contain no-repeat;
    mask: var(--sk-glyph-chevron-right) center / contain no-repeat;
  }

  .sk-pagination [rel='prev']::before {
    transform: scaleX(-1);
  }

  .sk-pagination [rel='prev']:dir(rtl)::before {
    transform: none;
  }

  .sk-pagination [rel='next']:dir(rtl)::after {
    transform: scaleX(-1);
  }

  .sk-pagination__gap {
    display: inline-grid;
    place-items: center;
    min-width: 1.5rem;
    color: var(--sk-muted);
  }

  .sk-pagination__summary {
    margin: 0;
    color: var(--sk-muted);
  }

  @container (max-width: 30rem) {
    .sk-pagination li:not(:has(> [aria-current='page'], > [rel='prev'], > [rel='next'])) {
      display: none;
    }
  }

  /*
     The --ends form, which the site kit's Pagination.astro writes, keeps the
     first and the last page and the gaps on a narrow strip too: items marked
     __wide show only on a wide strip, items marked __narrow only on a narrow
     one. Below 24rem the words of previous and next hide and the chevrons
     stay, still named for screen readers. Every control is 44 pixels on a
     touch screen.
  */
  .sk-pagination li.sk-pagination__narrow {
    display: none;
  }

  @container (max-width: 30rem) {
    .sk-pagination.sk-pagination--ends li {
      display: flex;
    }

    .sk-pagination.sk-pagination--ends li.sk-pagination__wide {
      display: none;
    }
  }

  @container (max-width: 24rem) {
    .sk-pagination__word {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
    }
  }

  @media (pointer: coarse) {
    .sk-pagination :is(a, button) {
      min-width: 44px;
      height: 44px;
    }
  }

  .sk-kbd {
    display: inline-flex;
    flex: none;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 1.375rem;
    height: 1.375rem;
    padding-inline: 0.375rem;
    border: 1px solid var(--sk-border-strong);
    border-bottom-width: 2px;
    border-radius: var(--sk-radius-sm);
    background: var(--sk-surface);
    color: var(--sk-muted);
    font-family: var(--sk-font-mono);
    font-size: var(--sk-text-caption);
    font-weight: 500;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
  }

  .sk-kbd + .sk-kbd {
    margin-inline-start: var(--sk-space-1);
  }

  /*
     Lines are borders rather than backgrounds, so they stay visible when
     Windows high contrast replaces every background.
  */
  .sk-divider {
    flex: none;
    box-sizing: border-box;
    width: 100%;
    height: 0;
    margin: 0;
    border: 0;
    border-top: 1px solid var(--sk-border);
  }

  .sk-divider--vertical {
    align-self: stretch;
    width: 0;
    height: auto;
    min-height: 1em;
    margin-inline: var(--sk-space-1);
    border-top: 0;
    border-inline-start: 1px solid var(--sk-border);
  }

  .sk-divider--label {
    display: flex;
    align-items: center;
    gap: var(--sk-space-3);
    height: auto;
    border-top: 0;
    color: var(--sk-muted);
    font-size: var(--sk-text-label);
    font-weight: 600;
    letter-spacing: var(--sk-tracking-label);
    text-align: center;
    text-transform: uppercase;
  }

  .sk-divider--label::before,
  .sk-divider--label::after {
    content: '';
    flex: 1 1 0;
    min-width: 1rem;
    border-top: 1px solid var(--sk-border);
  }

  /*
     The first stop of the Tab key: hidden until it has focus, then shown in
     the top corner above everything else.
  */
  .sk-skip-link {
    position: fixed;
    inset-block-start: var(--sk-space-3);
    inset-inline-start: var(--sk-space-3);
    z-index: var(--sk-z-tour);
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    min-height: var(--sk-control-lg);
    padding: var(--sk-space-2) var(--sk-space-4);
    border: 2px solid var(--sk-accent);
    border-radius: var(--sk-radius-md);
    background: var(--sk-surface);
    color: var(--sk-fg);
    font-size: var(--sk-text-body);
    font-weight: 600;
    text-decoration: none;
    box-shadow: var(--sk-shadow-lg);
  }

  .sk-skip-link:focus-visible {
    outline: var(--sk-focus-width) solid var(--sk-focus);
    outline-offset: var(--sk-focus-offset);
  }

  .sk-skip-link:not(:focus, :focus-within),
  .sk-visually-hidden:not(.sk-visually-hidden--focusable:focus-within) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  /*
     A short text that describes its trigger, linked with aria-describedby.
     It shows on hover after a short delay and at once on keyboard focus,
     and stays while the pointer is over it. Escape cannot close it without
     a script: a page that adds one sets data-dismissed on the wrapper.
     Touch screens never show it, so it never holds the only copy of
     something important.
  */
  .sk-tooltip {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
  }

  .sk-tooltip__content {
    position: absolute;
    bottom: calc(100% + var(--sk-space-2));
    left: 50%;
    z-index: var(--sk-z-toast);
    box-sizing: border-box;
    width: max-content;
    max-width: min(18rem, calc(100vw - 1.5rem));
    padding: 0.375rem 0.625rem;
    border: 1px solid var(--sk-border);
    border-radius: var(--sk-radius-md);
    background: var(--sk-surface);
    color: var(--sk-fg);
    box-shadow: var(--sk-shadow-md);
    font-size: var(--sk-text-caption);
    font-weight: 500;
    line-height: var(--sk-leading-body);
    text-align: start;
    white-space: normal;
    overflow-wrap: anywhere;
    opacity: 0;
    visibility: hidden;
    translate: -50% 0.25rem;
    transition:
      opacity var(--sk-duration-base) var(--sk-ease-out),
      translate var(--sk-duration-base) var(--sk-ease-out),
      visibility 0s linear var(--sk-duration-base);
  }

  .sk-tooltip__content::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    width: 0.5rem;
    height: 0.5rem;
    border: solid var(--sk-border);
    border-width: 0 1px 1px 0;
    background: var(--sk-surface);
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .sk-tooltip__content::after {
    content: '';
    position: absolute;
    top: 100%;
    inset-inline: 0;
    height: var(--sk-space-2);
  }

  .sk-tooltip:hover > .sk-tooltip__content,
  .sk-tooltip:focus-within > .sk-tooltip__content {
    opacity: 1;
    visibility: visible;
    translate: -50% 0;
    transition:
      opacity var(--sk-duration-base) var(--sk-ease-out) 300ms,
      translate var(--sk-duration-base) var(--sk-ease-out) 300ms,
      visibility 0s linear 300ms;
  }

  .sk-tooltip:focus-within > .sk-tooltip__content {
    transition-delay: 0s;
  }

  .sk-tooltip[data-dismissed] > .sk-tooltip__content {
    opacity: 0;
    visibility: hidden;
  }

  .sk-tooltip--bottom > .sk-tooltip__content {
    top: calc(100% + var(--sk-space-2));
    bottom: auto;
    translate: -50% -0.25rem;
  }

  .sk-tooltip--bottom > .sk-tooltip__content::before {
    top: auto;
    bottom: 100%;
    border-width: 1px 0 0 1px;
    transform: translate(-50%, 50%) rotate(45deg);
  }

  .sk-tooltip--bottom > .sk-tooltip__content::after {
    top: auto;
    bottom: 100%;
  }

  /*
     For a native <dialog> opened with showModal(), which traps focus and
     closes on Escape. It is centred near the top on wide screens and is a
     sheet from the bottom edge on phones.
  */
  .sk-dialog {
    box-sizing: border-box;
    width: min(40rem, calc(100% - var(--sk-space-8)));
    max-width: 100%;
    max-height: min(80dvh, calc(100% - var(--sk-space-8)));
    margin: 10vh auto auto;
    padding: 0;
    overflow: hidden;
    border: 1px solid var(--sk-border);
    border-radius: var(--sk-radius-xl);
    background: var(--sk-surface);
    color: var(--sk-fg);
    box-shadow: var(--sk-shadow-lg);
    font-size: var(--sk-text-body);
    line-height: var(--sk-leading-body);
    overflow-wrap: anywhere;
  }

  .sk-dialog[open] {
    display: flex;
    flex-direction: column;
    animation: sk-rise var(--sk-duration-base) var(--sk-ease-out);
  }

  .sk-dialog:focus-visible {
    outline: var(--sk-focus-width) solid var(--sk-focus);
    outline-offset: var(--sk-focus-offset);
  }

  .sk-dialog::backdrop {
    background: var(--sk-scrim);
    animation: sk-fade var(--sk-duration-base) var(--sk-ease-out);
  }

  .sk-dialog--sm {
    width: min(28rem, calc(100% - var(--sk-space-8)));
  }

  .sk-dialog--lg {
    width: min(56rem, calc(100% - var(--sk-space-8)));
  }

  .sk-dialog__header {
    display: flex;
    flex: none;
    align-items: flex-start;
    gap: var(--sk-space-3);
    padding: var(--sk-space-4) var(--sk-space-5) var(--sk-space-3);
  }

  .sk-dialog__header > :first-child {
    flex: 1;
    min-width: 0;
  }

  .sk-dialog__title {
    margin: 0;
    color: var(--sk-fg);
    font-size: var(--sk-text-title);
    font-weight: 600;
    line-height: var(--sk-leading-tight);
  }

  .sk-dialog__description {
    margin: var(--sk-space-1) 0 0;
    color: var(--sk-muted);
  }

  .sk-dialog__close {
    flex: none;
    margin-block-start: calc(var(--sk-space-1) * -1);
    margin-inline-end: calc(var(--sk-space-1) * -1);
  }

  .sk-dialog__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: var(--sk-space-3);
    min-height: 0;
    overflow-y: auto;
    padding: 0 var(--sk-space-5) var(--sk-space-4);
  }

  .sk-dialog__body > * {
    margin-block: 0;
  }

  .sk-dialog__footer {
    display: flex;
    flex: none;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: var(--sk-space-2);
    padding: var(--sk-space-3) var(--sk-space-5);
    border-top: 1px solid var(--sk-border);
    background: var(--sk-sunken);
  }

  .sk-dialog > form {
    display: contents;
  }

  @media (max-width: 40rem) {
    .sk-dialog,
    .sk-dialog--sm,
    .sk-dialog--lg {
      width: 100%;
      max-height: 92dvh;
      margin: auto 0 0;
      border-bottom: 0;
      border-radius: var(--sk-radius-xl) var(--sk-radius-xl) 0 0;
    }

    .sk-dialog__header,
    .sk-dialog__body {
      padding-inline: var(--sk-space-4);
    }

    .sk-dialog__footer {
      flex-direction: column-reverse;
      padding-inline: var(--sk-space-4);
      padding-bottom: max(var(--sk-space-3), env(safe-area-inset-bottom));
    }

    .sk-dialog__footer > * {
      width: 100%;
    }
  }

  /*
     A native <details> with its <summary>. The browser reports open and
     closed to screen readers, so no aria-expanded is needed.
  */
  .sk-details {
    border: 1px solid var(--sk-border);
    border-radius: var(--sk-radius-lg);
    background: var(--sk-surface);
    color: var(--sk-fg);
  }

  .sk-details + .sk-details {
    margin-block-start: var(--sk-space-2);
  }

  .sk-details > summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sk-space-3);
    box-sizing: border-box;
    min-height: var(--sk-control-lg);
    padding: var(--sk-space-2) var(--sk-space-4);
    border-radius: calc(var(--sk-radius-lg) - 1px);
    font-size: var(--sk-text-body);
    font-weight: 600;
    list-style: none;
    cursor: pointer;
    transition: background-color var(--sk-duration-fast) var(--sk-ease-out);
  }

  .sk-details > summary::-webkit-details-marker {
    display: none;
  }

  .sk-details > summary::after {
    content: '';
    flex: none;
    width: 1rem;
    height: 1rem;
    background: var(--sk-muted);
    -webkit-mask: var(--sk-glyph-chevron-down) center / contain no-repeat;
    mask: var(--sk-glyph-chevron-down) center / contain no-repeat;
    transition: rotate var(--sk-duration-base) var(--sk-ease-out);
  }

  .sk-details > summary:hover {
    background: var(--sk-hover);
  }

  .sk-details > summary:focus-visible {
    outline: var(--sk-focus-width) solid var(--sk-focus);
    outline-offset: calc(var(--sk-focus-width) * -1);
  }

  .sk-details[open] > summary {
    border-bottom: 1px solid var(--sk-border);
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  .sk-details[open] > summary::after {
    rotate: 180deg;
  }

  .sk-details__body {
    padding: var(--sk-space-3) var(--sk-space-4) var(--sk-space-4);
    font-size: var(--sk-text-body);
    line-height: var(--sk-leading-prose);
  }

  .sk-details__body > * {
    margin-block: 0;
  }

  .sk-details__body > * + * {
    margin-block-start: var(--sk-space-3);
  }

  @supports (interpolate-size: allow-keywords) {
    .sk-details {
      interpolate-size: allow-keywords;
    }

    .sk-details::details-content {
      height: 0;
      overflow: clip;
      transition:
        height var(--sk-duration-base) var(--sk-ease-out),
        content-visibility var(--sk-duration-base) allow-discrete;
    }

    .sk-details[open]::details-content {
      height: auto;
    }
  }

  /*
     Inline on <code>, a block on <pre>. A block that scrolls takes
     tabindex="0", so keyboard users can scroll it too.
  */
  .sk-code {
    padding: 0.0625rem var(--sk-space-1);
    border: 1px solid var(--sk-border);
    border-radius: var(--sk-radius-sm);
    background: var(--sk-sunken);
    color: var(--sk-fg);
    font-family: var(--sk-font-mono);
    font-size: 0.875em;
    overflow-wrap: anywhere;
  }

  pre.sk-code {
    display: block;
    max-width: 100%;
    margin: 0;
    padding: var(--sk-space-3);
    overflow: auto;
    border-radius: var(--sk-radius-lg);
    font-size: var(--sk-text-caption);
    line-height: 1.625;
    white-space: pre;
    overflow-wrap: normal;
    tab-size: 2;
  }

  pre.sk-code:focus-visible {
    outline: var(--sk-focus-width) solid var(--sk-focus);
    outline-offset: var(--sk-focus-offset);
  }

  pre.sk-code > code {
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
    font: inherit;
  }

  .sk-code--wrap,
  pre.sk-code--wrap {
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }

  /*
     Long text such as an article or rendered Markdown. The element rules sit
     in :where(), so any class on an element inside wins over them.
  */
  .sk-prose {
    min-width: 0;
    color: var(--sk-fg);
    font-size: var(--sk-text-body);
    line-height: var(--sk-leading-prose);
    overflow-wrap: anywhere;
  }

  :where(.sk-prose) > * {
    margin-block: 0;
  }

  :where(.sk-prose) > * + * {
    margin-block-start: var(--sk-space-3);
  }

  :where(.sk-prose) :is(h1, h2, h3, h4, h5, h6) {
    color: var(--sk-fg);
    font-weight: 600;
    line-height: var(--sk-leading-tight);
    letter-spacing: var(--sk-tracking-tight);
    text-wrap: balance;
    scroll-margin-block-start: var(--sk-space-12);
  }

  :where(.sk-prose) > :is(h1, h2, h3, h4, h5, h6) {
    margin-block-start: var(--sk-space-5);
  }

  :where(.sk-prose) > :is(h1, h2, h3, h4, h5, h6) + * {
    margin-block-start: var(--sk-space-2);
  }

  :where(.sk-prose) > :first-child {
    margin-block-start: 0;
  }

  :where(.sk-prose) h1 {
    font-size: var(--sk-text-heading);
  }

  :where(.sk-prose) h2 {
    font-size: var(--sk-text-title);
  }

  :where(.sk-prose) :is(h3, h4, h5, h6) {
    font-size: var(--sk-text-body);
  }

  .sk-prose--lg {
    font-size: var(--sk-text-title);
  }

  :where(.sk-prose--lg) h1 {
    font-size: var(--sk-text-page);
  }

  :where(.sk-prose--lg) h2 {
    font-size: var(--sk-text-heading);
  }

  :where(.sk-prose--lg) h3 {
    font-size: var(--sk-text-title);
  }

  :where(.sk-prose) :is(strong, b) {
    font-weight: 600;
  }

  :where(.sk-prose) a {
    border-radius: var(--sk-radius-sm);
    color: var(--sk-accent-text);
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }

  :where(.sk-prose) a:hover {
    text-decoration-thickness: 2px;
  }

  :where(.sk-prose) :is(ul, ol) {
    padding-inline-start: var(--sk-space-5);
  }

  :where(.sk-prose) ul {
    list-style: disc;
  }

  :where(.sk-prose) ol {
    list-style: decimal;
  }

  :where(.sk-prose) li {
    padding-inline-start: var(--sk-space-1);
  }

  :where(.sk-prose) li + li,
  :where(.sk-prose) li > :is(ul, ol) {
    margin-block-start: var(--sk-space-1);
  }

  :where(.sk-prose) li > p {
    margin-block: 0;
  }

  :where(.sk-prose) li > p + p {
    margin-block-start: var(--sk-space-2);
  }

  :where(.sk-prose) li::marker {
    color: var(--sk-muted);
  }

  :where(.sk-prose) input[type='checkbox'] {
    width: 1rem;
    height: 1rem;
    margin: 0;
    margin-inline-end: var(--sk-space-2);
    accent-color: var(--sk-accent);
    vertical-align: -0.125rem;
  }

  :where(.sk-prose) blockquote {
    margin-inline: 0;
    padding-inline-start: var(--sk-space-3);
    border-inline-start: 4px solid var(--sk-border-strong);
    color: var(--sk-muted);
  }

  :where(.sk-prose) blockquote > * {
    margin-block: 0;
  }

  :where(.sk-prose) blockquote > * + * {
    margin-block-start: var(--sk-space-2);
  }

  :where(.sk-prose) :not(pre) > code {
    padding: 0.0625rem var(--sk-space-1);
    border: 1px solid var(--sk-border);
    border-radius: var(--sk-radius-sm);
    background: var(--sk-sunken);
    font-family: var(--sk-font-mono);
    font-size: 0.875em;
  }

  :where(.sk-prose) pre {
    max-width: 100%;
    padding: var(--sk-space-3);
    overflow-x: auto;
    border: 1px solid var(--sk-border);
    border-radius: var(--sk-radius-md);
    background: var(--sk-sunken);
    font-family: var(--sk-font-mono);
    font-size: var(--sk-text-caption);
    line-height: 1.625;
    white-space: pre;
    overflow-wrap: normal;
  }

  :where(.sk-prose) pre > code {
    font: inherit;
  }

  :where(.sk-prose) kbd {
    padding-inline: var(--sk-space-1);
    border: 1px solid var(--sk-border-strong);
    border-radius: var(--sk-radius-sm);
    background: var(--sk-surface);
    box-shadow: var(--sk-shadow-sm);
    font-family: var(--sk-font-mono);
    font-size: 0.8125em;
  }

  :where(.sk-prose) :is([data-scroll], .sk-table-wrap) {
    max-width: 100%;
    overflow-x: auto;
    border: 1px solid var(--sk-border);
    border-radius: var(--sk-radius-md);
  }

  :where(.sk-prose) table {
    width: 100%;
    border-collapse: collapse;
    text-align: start;
    overflow-wrap: normal;
  }

  :where(.sk-prose) :is(th, td) {
    padding: 0.375rem var(--sk-space-3);
    border-bottom: 1px solid var(--sk-border);
    text-align: start;
    vertical-align: top;
  }

  :where(.sk-prose) th {
    background: var(--sk-sunken);
    font-weight: 600;
  }

  :where(.sk-prose) tr:last-child > td {
    border-bottom: 0;
  }

  :where(.sk-prose) > table {
    border: 1px solid var(--sk-border);
  }

  :where(.sk-prose) hr {
    margin-block: var(--sk-space-5);
    border: 0;
    border-top: 1px solid var(--sk-border);
  }

  :where(.sk-prose) :is(img, video, svg) {
    max-width: 100%;
    height: auto;
  }

  :where(.sk-prose) :is(img, video) {
    border-radius: var(--sk-radius-md);
  }

  :where(.sk-prose) figure {
    margin-inline: 0;
  }

  :where(.sk-prose) figcaption {
    margin-block-start: var(--sk-space-2);
    color: var(--sk-muted);
    font-size: var(--sk-text-caption);
  }

  :where(.sk-prose) mark {
    padding-inline: 0.125rem;
    border-radius: var(--sk-radius-sm);
    background: var(--sk-accent-soft);
    color: var(--sk-fg);
  }

  :where(.sk-prose) dt {
    font-weight: 600;
  }

  :where(.sk-prose) dd {
    margin-inline-start: var(--sk-space-4);
  }

  :where(.sk-prose) abbr[title] {
    text-decoration: underline dotted;
    cursor: help;
  }

  :where(.sk-prose) small {
    font-size: var(--sk-text-caption);
  }

  .sk-container {
    box-sizing: border-box;
    width: 100%;
    max-width: 72rem;
    margin-inline: auto;
    padding-inline: clamp(var(--sk-space-4), 4vw, var(--sk-space-8));
  }

  .sk-container--narrow {
    max-width: 45rem;
  }

  .sk-container--wide {
    max-width: 90rem;
  }

  .sk-stack {
    display: flex;
    flex-direction: column;
    gap: var(--sk-space-4);
    min-width: 0;
  }

  .sk-stack > * {
    margin-block: 0;
  }

  .sk-stack--sm {
    gap: var(--sk-space-2);
  }

  .sk-stack--lg {
    gap: var(--sk-space-6);
  }

  .sk-stack--xl {
    gap: var(--sk-space-10);
  }

  .sk-cluster {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--sk-space-2);
    min-width: 0;
  }

  .sk-cluster > * {
    margin: 0;
  }

  .sk-cluster--lg {
    gap: var(--sk-space-4);
  }

  .sk-cluster--between {
    justify-content: space-between;
  }

  .sk-cluster--end {
    justify-content: flex-end;
  }

  /*
     As many columns as fit at --sk-grid-min each, and never more than
     --sk-grid-cols. On a phone every grid is one column. A page can set
     either property on the element.
  */
  .sk-grid {
    --sk-grid-min: 16rem;
    --sk-grid-cols: 12;
    --sk-grid-gap: var(--sk-space-4);
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(
        min(
          100%,
          max(var(--sk-grid-min), (100% - (var(--sk-grid-cols) - 1) * var(--sk-grid-gap)) / var(--sk-grid-cols))
        ),
        1fr
      )
    );
    gap: var(--sk-grid-gap);
    min-width: 0;
  }

  .sk-grid--2 {
    --sk-grid-cols: 2;
  }

  .sk-grid--3 {
    --sk-grid-cols: 3;
  }

  .sk-grid--4 {
    --sk-grid-cols: 4;
    --sk-grid-min: 12rem;
  }

  /*
     The opening block of a page. The art is decoration and leaves the row
     to the text on narrow screens.
  */
  .sk-hero {
    container-type: inline-size;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--sk-space-6);
    box-sizing: border-box;
    min-width: 0;
    padding: clamp(var(--sk-space-5), 4vw, var(--sk-space-8));
    overflow: hidden;
    border: 1px solid var(--sk-border);
    border-radius: var(--sk-radius-xl);
    background: linear-gradient(135deg, var(--sk-accent-soft), var(--sk-side) 60%);
    color: var(--sk-fg);
  }

  .sk-hero__body {
    flex: 1 1 20rem;
    min-width: 0;
  }

  .sk-hero__eyebrow {
    margin: 0 0 var(--sk-space-1);
    color: var(--sk-muted);
    font-size: var(--sk-text-caption);
    font-weight: 500;
  }

  .sk-hero__title {
    margin: 0;
    color: var(--sk-fg);
    font-size: var(--sk-text-page);
    font-weight: 600;
    line-height: var(--sk-leading-tight);
    letter-spacing: var(--sk-tracking-tight);
    text-wrap: balance;
    overflow-wrap: break-word;
  }

  .sk-hero__lead {
    max-width: 65ch;
    margin: var(--sk-space-2) 0 0;
    color: var(--sk-muted);
    font-size: var(--sk-text-body);
    line-height: var(--sk-leading-prose);
  }

  .sk-hero__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--sk-space-2);
    margin-block-start: var(--sk-space-5);
  }

  .sk-hero__art {
    display: none;
    flex: none;
  }

  .sk-hero--display .sk-hero__title {
    font-family: var(--sk-font-display);
    font-size: clamp(var(--sk-text-display), 4cqi + 1rem, 3.25rem);
  }

  .sk-hero--display .sk-hero__lead {
    font-size: var(--sk-text-title);
  }

  @container (min-width: 32rem) {
    .sk-hero__title {
      font-size: var(--sk-text-display);
    }
  }

  @container (min-width: 48rem) {
    .sk-hero__art {
      display: block;
    }
  }

  /*
     The ring is a pseudo-element, so text inside the spinner shows beside
     it. With text, give it role="status"; alone, role="progressbar" and an
     aria-label. Under reduced motion it turns slowly instead of stopping.
  */
  .sk-spinner {
    display: inline-flex;
    align-items: center;
    gap: var(--sk-space-2);
    max-width: 100%;
    color: var(--sk-muted);
    font-size: var(--sk-text-body);
    vertical-align: middle;
  }

  .sk-spinner::before {
    content: '';
    flex: none;
    box-sizing: border-box;
    width: 1rem;
    height: 1rem;
    border: 0.125rem solid color-mix(in srgb, var(--sk-accent-text) 25%, transparent);
    border-top-color: var(--sk-accent-text);
    border-radius: var(--sk-radius-full);
    animation: sk-spin 0.8s linear infinite;
  }

  .sk-spinner--sm::before {
    width: 0.875rem;
    height: 0.875rem;
  }

  .sk-spinner--lg::before {
    width: 1.5rem;
    height: 1.5rem;
    border-width: 0.1875rem;
  }

  /*
     A native <progress> with a <label for>. Without a value it is
     indeterminate and a band moves across the track.
  */
  .sk-progress {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 0.5rem;
    margin: 0;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: var(--sk-radius-full);
    appearance: none;
    background: var(--sk-hover);
    color: var(--sk-accent);
  }

  .sk-progress::-webkit-progress-bar {
    background: transparent;
  }

  .sk-progress::-webkit-progress-value {
    border-radius: var(--sk-radius-full);
    background: currentColor;
    transition: width var(--sk-duration-slow) var(--sk-ease-out);
  }

  .sk-progress::-moz-progress-bar {
    border-radius: var(--sk-radius-full);
    background: currentColor;
  }

  .sk-progress:indeterminate {
    background:
      linear-gradient(90deg, transparent 35%, currentColor 35% 65%, transparent 65%) 0 0 / 250% 100% no-repeat,
      var(--sk-hover);
    animation: sk-progress 1.4s var(--sk-ease-in-out) infinite;
  }

  .sk-progress:indeterminate::-moz-progress-bar {
    background: transparent;
  }

  .sk-progress--sm {
    height: 0.375rem;
  }

  .sk-progress--ok {
    color: var(--sk-ok);
  }

  .sk-progress--warn {
    color: var(--sk-warn);
  }

  .sk-progress--danger {
    color: var(--sk-danger);
  }

  .sk-progress--info {
    color: var(--sk-info);
  }

  /*
     Initials or a photo. The letters are the text token on a 24 percent tint
     of --sk-avatar-color, which keeps them above 4.5:1 for any colour; the
     full colour goes to the border. Give a letters avatar role="img" and an
     aria-label with the full name.
  */
  .sk-avatar {
    --sk-avatar-color: var(--sk-muted);
    display: inline-grid;
    flex: none;
    place-items: center;
    box-sizing: border-box;
    width: 1.5rem;
    height: 1.5rem;
    overflow: hidden;
    border: 1px solid var(--sk-avatar-color);
    border-radius: var(--sk-radius-full);
    background: color-mix(in srgb, var(--sk-avatar-color) 24%, var(--sk-surface));
    color: var(--sk-fg);
    font-size: 0.5625rem;
    font-weight: 700;
    line-height: 1;
    object-fit: cover;
    user-select: none;
    vertical-align: middle;
  }

  .sk-avatar > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .sk-avatar--xs {
    width: 1.25rem;
    height: 1.25rem;
    font-size: 0.5rem;
  }

  .sk-avatar--md {
    width: 2rem;
    height: 2rem;
    font-size: 0.75rem;
  }

  .sk-avatar--lg {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 0.9375rem;
  }

  .sk-avatar--xl {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.3125rem;
  }

  .sk-avatar--square {
    border-radius: 28%;
  }

  .sk-avatar--empty {
    border-style: dashed;
    border-color: var(--sk-border-strong);
    background: transparent;
  }

  @keyframes sk-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes sk-fade {
    from {
      opacity: 0;
    }
  }

  @keyframes sk-rise {
    from {
      transform: translateY(8px) scale(0.98);
      opacity: 0;
    }
  }

  @keyframes sk-progress {
    from {
      background-position:
        150% 0,
        0 0;
    }

    to {
      background-position:
        -50% 0,
        0 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sk-spinner::before,
    .sk-button[aria-busy='true']::before {
      animation-duration: 2.4s;
    }

    .sk-progress:indeterminate {
      background-position:
        50% 0,
        0 0;
      animation: none;
    }
  }

  .a11y-reduce-motion .sk-spinner::before,
  .a11y-reduce-motion .sk-button[aria-busy='true']::before {
    animation-duration: 2.4s;
  }

  .a11y-reduce-motion .sk-progress:indeterminate {
    background-position:
      50% 0,
      0 0;
    animation: none;
  }

  /*
     Windows high contrast drops author backgrounds. Indicators that show a
     state by a fill paint it in system colours instead, and native controls
     get their own look back.
  */
  @media (forced-colors: active) {
    .sk-select,
    .sk-progress {
      appearance: auto;
    }

    :is(.sk-checkbox, .sk-radio, .sk-switch) > input,
    :is(.sk-checkbox, .sk-radio, .sk-switch) > input::before,
    :is(.sk-checkbox, .sk-radio, .sk-switch) > input::after,
    :is(.sk-alert, .sk-callout, .sk-error, .sk-status)::before,
    .sk-spinner::before,
    .sk-tabs :is([aria-selected='true'], [aria-current])::after,
    .sk-nav a[aria-current]::after,
    .sk-breadcrumbs li + li::before,
    .sk-pagination [rel='prev']::before,
    .sk-pagination [rel='next']::after,
    .sk-details > summary::after,
    .sk-table th[aria-sort] > button::after {
      forced-color-adjust: none;
    }

    :is(.sk-checkbox, .sk-radio, .sk-switch) > input {
      border-color: CanvasText;
      background-color: Canvas;
    }

    .sk-checkbox > input:is(:checked, :indeterminate),
    .sk-switch > input:checked {
      border-color: Highlight;
      background-color: Highlight;
    }

    .sk-checkbox > input::before,
    .sk-switch > input:checked::before {
      background: HighlightText;
    }

    .sk-radio > input:checked {
      border-color: Highlight;
    }

    .sk-radio > input::before,
    .sk-switch > input::after {
      background: Highlight;
    }

    .sk-switch > input::before {
      background: CanvasText;
    }

    :is(.sk-checkbox, .sk-radio, .sk-switch) > input:disabled {
      border-color: GrayText;
    }

    :is(.sk-checkbox, .sk-radio) > input:disabled::before {
      background: GrayText;
    }

    :is(.sk-alert, .sk-callout, .sk-error, .sk-status)::before,
    .sk-breadcrumbs li + li::before,
    .sk-details > summary::after {
      background: CanvasText;
    }

    .sk-pagination [rel='prev']::before,
    .sk-pagination [rel='next']::after,
    .sk-table th[aria-sort] > button::after {
      background: ButtonText;
    }

    .sk-spinner::before {
      border-color: GrayText;
      border-top-color: Highlight;
    }

    .sk-tabs :is([aria-selected='true'], [aria-current])::after,
    .sk-nav a[aria-current]::after {
      background: Highlight;
    }

    .sk-nav a[aria-current]:not([aria-current='false']) {
      text-decoration: underline;
    }

    .sk-pagination [aria-current='page'] {
      border: 2px solid Highlight;
    }

    .sk-button:disabled,
    .sk-button[aria-disabled='true'] {
      border-color: GrayText;
      color: GrayText;
      opacity: 1;
    }
  }

  /*
     The AI note: a labelled line that says a text was made by a model, with
     the model, the provider and a link to what is sent.
  */
  .sk-ai-note {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--sk-space-1) var(--sk-space-2);
    margin: 0;
    color: var(--sk-muted);
    font-size: var(--sk-text-caption);
  }

  .sk-ai-note__badge {
    padding: 0 var(--sk-space-2);
    border: 1px solid var(--sk-border-strong);
    border-radius: var(--sk-radius-full);
    background: var(--sk-sunken);
    color: var(--sk-fg);
    font-weight: 600;
  }

  .sk-ai-note__link {
    color: var(--sk-accent-text);
    text-decoration: underline;
  }
}
`, f = l(), p = [...new Set([...d.matchAll(/\.(sk-[a-z0-9]+(?:--[a-z0-9-]+)?)/g)].map((e) => e[1] ?? ``))].filter(Boolean), m = p.filter((e) => !e.includes(`--`)), h = (e) => p.filter((t) => t.startsWith(`${e}--`));
function g() {
	let e = (0, u.useId)();
	return (0, f.jsxs)(`div`, {
		className: `grid max-w-md gap-4`,
		children: [(0, f.jsxs)(`div`, {
			className: `sk-field`,
			children: [
				(0, f.jsx)(`label`, {
					className: `sk-label`,
					htmlFor: `${e}-name`,
					children: `Project name`
				}),
				(0, f.jsx)(`input`, {
					className: `sk-input`,
					id: `${e}-name`,
					defaultValue: `Quarterly report`,
					"aria-describedby": `${e}-name-hint`
				}),
				(0, f.jsx)(`span`, {
					className: `sk-hint`,
					id: `${e}-name-hint`,
					children: `Shown to everyone in the workspace.`
				})
			]
		}), (0, f.jsxs)(`div`, {
			className: `sk-field`,
			children: [
				(0, f.jsx)(`label`, {
					className: `sk-label`,
					htmlFor: `${e}-email`,
					children: `Email`
				}),
				(0, f.jsx)(`input`, {
					className: `sk-input`,
					id: `${e}-email`,
					type: `email`,
					defaultValue: `dawid@`,
					"aria-invalid": `true`,
					"aria-describedby": `${e}-email-error`
				}),
				(0, f.jsx)(`span`, {
					className: `sk-hint`,
					id: `${e}-email-error`,
					children: `Error: enter an email address like name@example.com.`
				})
			]
		})]
	});
}
var _ = {
	"sk-button": {
		label: `Buttons`,
		html: `<button class="sk-button">Save</button>
<button class="sk-button sk-button--outline">Cancel</button>
<button class="sk-button sk-button--ghost">Skip</button>
<button class="sk-button sk-button--danger">Delete</button>
<button class="sk-button sk-button--sm">Small</button>
<button class="sk-button sk-button--lg">Large</button>
<button class="sk-button" disabled>Disabled</button>`,
		render: () => (0, f.jsxs)(`div`, {
			className: `flex flex-wrap items-center gap-2`,
			children: [
				(0, f.jsx)(`button`, {
					type: `button`,
					className: `sk-button`,
					children: `Save`
				}),
				(0, f.jsx)(`button`, {
					type: `button`,
					className: `sk-button sk-button--outline`,
					children: `Cancel`
				}),
				(0, f.jsx)(`button`, {
					type: `button`,
					className: `sk-button sk-button--ghost`,
					children: `Skip`
				}),
				(0, f.jsx)(`button`, {
					type: `button`,
					className: `sk-button sk-button--danger`,
					children: `Delete`
				}),
				(0, f.jsx)(`button`, {
					type: `button`,
					className: `sk-button sk-button--sm`,
					children: `Small`
				}),
				(0, f.jsx)(`button`, {
					type: `button`,
					className: `sk-button sk-button--lg`,
					children: `Large`
				}),
				(0, f.jsx)(`button`, {
					type: `button`,
					className: `sk-button`,
					disabled: !0,
					children: `Disabled`
				})
			]
		})
	},
	"sk-link": {
		label: `Link`,
		html: `<a class="sk-link" href="/docs">Read the guide</a>`,
		render: () => (0, f.jsxs)(`p`, { children: [
			`Questions? `,
			(0, f.jsx)(`a`, {
				className: `sk-link`,
				href: `/start/`,
				children: `Read the guide`
			}),
			`.`
		] })
	},
	"sk-field": {
		label: `Fields`,
		html: `<div class="sk-field">
  <label class="sk-label" for="name">Project name</label>
  <input class="sk-input" id="name" aria-describedby="name-hint" />
  <span class="sk-hint" id="name-hint">Shown to everyone in the workspace.</span>
</div>

<input class="sk-input" aria-invalid="true" aria-describedby="email-error" />
<span class="sk-hint" id="email-error">Error: enter an email address like name@example.com.</span>`,
		render: () => (0, f.jsx)(g, {})
	},
	"sk-card": {
		label: `Card`,
		html: `<div class="sk-card">
  <h3>Weekly report</h3>
  <p>12 tasks done, 3 waiting for review.</p>
</div>`,
		render: () => (0, f.jsxs)(`div`, {
			className: `sk-card max-w-sm`,
			children: [(0, f.jsx)(`h3`, {
				className: `text-title font-semibold`,
				children: `Weekly report`
			}), (0, f.jsx)(`p`, {
				className: `mt-1 text-muted`,
				children: `12 tasks done, 3 waiting for review.`
			})]
		})
	},
	"sk-badge": {
		label: `Badges`,
		html: `<span class="sk-badge">Draft</span>
<span class="sk-badge sk-badge--accent">New</span>
<span class="sk-badge sk-badge--ok">Done</span>
<span class="sk-badge sk-badge--warn">Waiting</span>
<span class="sk-badge sk-badge--danger">Failed</span>
<span class="sk-badge sk-badge--info">Beta</span>`,
		render: () => (0, f.jsxs)(`div`, {
			className: `flex flex-wrap gap-2`,
			children: [
				(0, f.jsx)(`span`, {
					className: `sk-badge`,
					children: `Draft`
				}),
				(0, f.jsx)(`span`, {
					className: `sk-badge sk-badge--accent`,
					children: `New`
				}),
				(0, f.jsx)(`span`, {
					className: `sk-badge sk-badge--ok`,
					children: `Done`
				}),
				(0, f.jsx)(`span`, {
					className: `sk-badge sk-badge--warn`,
					children: `Waiting`
				}),
				(0, f.jsx)(`span`, {
					className: `sk-badge sk-badge--danger`,
					children: `Failed`
				}),
				(0, f.jsx)(`span`, {
					className: `sk-badge sk-badge--info`,
					children: `Beta`
				})
			]
		})
	},
	"sk-alert": {
		label: `Alerts`,
		html: `<div class="sk-alert" role="status"><strong>Information:</strong> Imports run at night.</div>
<div class="sk-alert sk-alert--ok" role="status"><strong>Success:</strong> Invitation sent.</div>
<div class="sk-alert sk-alert--warn"><strong>Warning:</strong> Your draft is kept for 7 days.</div>
<div class="sk-alert sk-alert--danger" role="alert"><strong>Error:</strong> The form was not sent.</div>`,
		render: () => (0, f.jsxs)(`div`, {
			className: `grid max-w-xl gap-2`,
			children: [
				(0, f.jsxs)(`div`, {
					className: `sk-alert`,
					children: [(0, f.jsx)(`strong`, { children: `Information:` }), ` Imports run at night.`]
				}),
				(0, f.jsxs)(`div`, {
					className: `sk-alert sk-alert--ok`,
					children: [(0, f.jsx)(`strong`, { children: `Success:` }), ` Invitation sent.`]
				}),
				(0, f.jsxs)(`div`, {
					className: `sk-alert sk-alert--warn`,
					children: [(0, f.jsx)(`strong`, { children: `Warning:` }), ` Your draft is kept for 7 days.`]
				}),
				(0, f.jsxs)(`div`, {
					className: `sk-alert sk-alert--danger`,
					children: [(0, f.jsx)(`strong`, { children: `Error:` }), ` The form was not sent.`]
				})
			]
		})
	}
}, v = new Set([
	`sk-label`,
	`sk-hint`,
	`sk-input`
]), y = {
	"sk-button": `Przyciski`,
	"sk-link": `Link`,
	"sk-field": `Pola`,
	"sk-card": `Karta`,
	"sk-badge": `Plakietki`,
	"sk-alert": `Alerty`
};
function b({ lang: e = `en` }) {
	let t = e === `pl`, l = (e) => t ? y[e] ?? _[e]?.label : _[e]?.label;
	return (0, f.jsxs)(a, {
		lang: e,
		children: [
			(0, f.jsx)(o, {
				eyebrow: t ? `Podstawy` : `Foundations`,
				title: t ? `Czysty CSS` : `Plain CSS`,
				lead: t ? `Klasy: ${p.length}, dla stron bez Reacta i bez Tailwinda. Odpowiadają komponentom React, czytają tylko zmienne --sk-* i leżą w warstwie kaskady components, więc własny CSS strony ma pierwszeństwo.` : `${p.length} classes for pages with no React and no Tailwind. They match the React components, read only the --sk-* variables, and sit in the components cascade layer so a page’s own CSS wins.`
			}),
			(0, f.jsxs)(c, {
				id: `setup`,
				title: t ? `Konfiguracja` : `Set up`,
				children: [
					(0, f.jsx)(s, {
						language: `css`,
						title: t ? `Z bundlerem` : `With a bundler`,
						code: `@import "@skribly/ui/plain.css";`
					}),
					(0, f.jsx)(s, {
						language: `html`,
						title: t ? `Albo prosto z HTML` : `Or straight from the HTML`,
						code: `<link rel="stylesheet" href="/node_modules/@skribly/ui/plain.css" />
<html data-theme="light">`
					}),
					(0, f.jsx)(i, { children: t ? (0, f.jsxs)(`p`, { children: [
						`Klasy czystego CSS dają wygląd, a nie zachowanie. Używaj prawdziwych elementów, takich jak `,
						(0, f.jsx)(`code`, { children: `button` }),
						`, `,
						(0, f.jsx)(`code`, { children: `a` }),
						` i `,
						(0, f.jsx)(`code`, { children: `label` }),
						`, i pisz ARIA sam tam, gdzie dodałby je komponent: podpowiedzi łącz przez `,
						(0, f.jsx)(`code`, { children: `aria-describedby` }),
						`, błędy oznaczaj przez `,
						(0, f.jsx)(`code`, { children: `aria-invalid` }),
						` i umieszczaj słowo tonu, takie jak „Błąd:”, w każdym alercie, aby kolor nigdy nie niósł znaczenia sam.`
					] }) : (0, f.jsxs)(`p`, { children: [
						`Plain classes give the look and not the behaviour. Use real elements, such as `,
						(0, f.jsx)(`code`, { children: `button` }),
						`, `,
						(0, f.jsx)(`code`, { children: `a` }),
						` and `,
						(0, f.jsx)(`code`, { children: `label` }),
						`, and write the ARIA yourself where a component would have added it: link hints with `,
						(0, f.jsx)(`code`, { children: `aria-describedby` }),
						`, mark errors with `,
						(0, f.jsx)(`code`, { children: `aria-invalid` }),
						`, and put a tone word such as “Error:” in every alert, so colour never carries the meaning alone.`
					] }) })
				]
			}),
			m.filter((e) => _[e]).map((e) => {
				let t = _[e];
				return t ? (0, f.jsx)(c, {
					id: e.slice(3),
					title: l(e) ?? t.label,
					children: (0, f.jsx)(r, {
						label: `.${e}`,
						language: `html`,
						code: t.html,
						children: t.render()
					})
				}, e) : null;
			}),
			(0, f.jsx)(c, {
				id: `reference`,
				title: t ? `Spis klas` : `Class reference`,
				children: (0, f.jsxs)(n, {
					label: t ? `Każda klasa czystego CSS` : `Every plain CSS class`,
					children: [
						(0, f.jsx)(`caption`, {
							className: `sr-only`,
							children: t ? `Każda klasa z components.css wraz z modyfikatorami` : `Every class in components.css with its modifiers`
						}),
						(0, f.jsx)(`thead`, { children: (0, f.jsxs)(`tr`, { children: [
							(0, f.jsx)(`th`, {
								scope: `col`,
								children: t ? `Klasa` : `Class`
							}),
							(0, f.jsx)(`th`, {
								scope: `col`,
								children: t ? `Modyfikatory` : `Modifiers`
							}),
							(0, f.jsx)(`th`, {
								scope: `col`,
								children: t ? `Przykład` : `Example`
							})
						] }) }),
						(0, f.jsx)(`tbody`, { children: m.map((e) => {
							let n = h(e);
							return (0, f.jsxs)(`tr`, { children: [
								(0, f.jsx)(`th`, {
									scope: `row`,
									className: `font-mono text-caption font-semibold`,
									children: `.${e}`
								}),
								(0, f.jsx)(`td`, { children: n.length ? (0, f.jsx)(`span`, {
									className: `flex flex-wrap gap-1`,
									children: n.map((e) => (0, f.jsx)(`code`, { children: `.${e}` }, e))
								}) : (0, f.jsx)(`span`, {
									className: `text-muted`,
									children: t ? `Brak` : `None`
								}) }),
								(0, f.jsx)(`td`, { children: _[e] ? (0, f.jsx)(`a`, {
									className: `text-accent-text underline`,
									href: `#${e.slice(3)}`,
									children: l(e)
								}) : v.has(e) ? (0, f.jsx)(`a`, {
									className: `text-accent-text underline`,
									href: `#field`,
									children: t ? y[`sk-field`] : `Fields`
								}) : (0, f.jsx)(`span`, {
									className: `text-muted`,
									children: t ? `Jeszcze nie pokazano` : `Not shown yet`
								}) })
							] }, e);
						}) })
					]
				})
			})
		]
	});
}
export { b as PlainCss };
