"use strict";var d=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var v=d(function(g,s){
var i=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),q=require('@stdlib/assert-is-function/dist'),n=require('@stdlib/symbol-iterator/dist'),p=require('@stdlib/stats-incr-sumabs/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist');function o(u){var r,t,a;if(!m(u))throw new TypeError(x('1KZ3w',u));return a=p(),r={},i(r,"next",f),i(r,"return",c),n&&q(u[n])&&i(r,n,l),r;function f(){var e;return t?{done:!0}:(e=u.next(),e.done?(t=!0,e):(typeof e.value=="number"?e=a(e.value):e=a(NaN),{value:e,done:!1}))}function c(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return o(u[n]())}}s.exports=o
});var y=v();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
