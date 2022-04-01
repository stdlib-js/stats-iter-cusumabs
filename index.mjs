// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-sumabs@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var o=e,d=t,m=r,a=n,l=s,u=i;var f=function e(t){var r,n,s;if(!d(t))throw new TypeError(u("invalid argument. Must provide an iterator. Value: `%s`.",t));return s=l(),o(r={},"next",(function(){var e;if(n)return{done:!0};if((e=t.next()).done)return n=!0,e;e="number"==typeof e.value?s(e.value):s(NaN);return{value:e,done:!1}})),o(r,"return",(function(e){if(n=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),a&&m(t[a])&&o(r,a,(function(){return e(t[a]())})),r},j=f;export{j as default};
//# sourceMappingURL=index.mjs.map
