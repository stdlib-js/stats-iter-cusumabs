"use strict";var d=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var v=d(function(g,s){
var i=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),q=require('@stdlib/assert-is-function/dist'),t=require('@stdlib/symbol-iterator/dist'),p=require('@stdlib/stats-incr-sumabs/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist');function o(u){var r,n,a;if(!m(u))throw new TypeError(x('1KZ3w',u));return a=p(),r={},i(r,"next",f),i(r,"return",c),t&&q(u[t])&&i(r,t,l),r;function f(){var e;return n?{done:!0}:(e=u.next(),e.done?(n=!0,e):(typeof e.value=="number"?e=a(e.value):e=a(NaN),{value:e,done:!1}))}function c(e){return n=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return o(u[t]())}}s.exports=o
});var y=v();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
