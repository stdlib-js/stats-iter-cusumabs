// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).itercusumabs=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=s,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g,m=/./;var h=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,E=w;var j=function(r){return E.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},x="function"==typeof Symbol?Symbol.toStringTag:"",T=_,O=x,S=w;var V=j,k=function(r){var e,t,n;if(null==r)return S.call(r);t=r[O],e=T(r,O);try{r[O]=void 0}catch(e){return S.call(r)}return n=S.call(r),e?r[O]=t:delete r[O],n},I=y()?k:V,A=Boolean.prototype.toString;var R=I,$=function(r){try{return A.call(r),!0}catch(r){return!1}},F=y();var M=function(r){return"object"==typeof r&&(r instanceof Boolean||(F?$(r):"[object Boolean]"===R(r)))},N=h,C=M;var B=d,G=function(r){return N(r)||C(r)},L=M;B(G,"isPrimitive",h),B(G,"isObject",L);var Z=G;var W=function(){return new Function("return this;")()},X="object"==typeof self?self:null,z="object"==typeof window?window:null,U="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Y="object"==typeof U?U:null;module.exports=Y;var D=Z.isPrimitive,q=W,H=X,J=z,K=r(Object.freeze({__proto__:null}));var Q=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(H)return H;if(J)return J;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},rr=Q(),er=rr.document&&rr.document.childNodes,tr=Int8Array,nr=m,ir=er,or=tr;var ar=function(){return"function"==typeof nr||"object"==typeof or||"function"==typeof ir};var ur=function(){return/^\s*function\s*([^(]*)/i},cr=ur;d(cr,"REGEXP",ur());var fr=cr,sr=I;var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===sr(r)};var pr=function(r){return null!==r&&"object"==typeof r};d(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pr));var vr=pr;var gr=I,dr=fr.REGEXP,mr=function(r){return vr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var hr=function(r){var e,t,n;if(("Object"===(t=gr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return mr(r)?"Buffer":t},br=hr;var yr=hr;var wr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e},Er=function(r){return yr(r).toLowerCase()},jr=ar()?Er:wr;var Pr=function(r){return"function"===jr(r)},_r=Pr;var xr=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&_r(r.next)},Tr=_;var Or=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Tr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var Sr=function(r){return Math.abs(r)},Vr=Sr;var kr=function(){var r,e=0;return function(t){if(0===arguments.length)return r?e:null;return r=!0,e+=Vr(t)}},Ir=kr;var Ar=function(r){return"string"==typeof r},Rr=String.prototype.valueOf;var $r=I,Fr=function(r){try{return Rr.call(r),!0}catch(r){return!1}},Mr=y();var Nr=function(r){return"object"==typeof r&&(r instanceof String||(Mr?Fr(r):"[object String]"===$r(r)))},Cr=Ar,Br=Nr;var Gr=d,Lr=function(r){return Cr(r)||Br(r)},Zr=Nr;Gr(Lr,"isPrimitive",Ar),Gr(Lr,"isObject",Zr);var Wr=Lr,Xr=Math.floor;var zr=function(r){return Xr(r)===r},Ur=zr;var Yr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ur(r.length)&&r.length>=0&&r.length<=9007199254740991};var Dr=function(r){return"number"==typeof r},qr=Number,Hr=qr.prototype.toString;var Jr=I,Kr=qr,Qr=function(r){try{return Hr.call(r),!0}catch(r){return!1}},re=y();var ee=function(r){return"object"==typeof r&&(r instanceof Kr||(re?Qr(r):"[object Number]"===Jr(r)))},te=Dr,ne=ee;var ie=d,oe=function(r){return te(r)||ne(r)},ae=ee;ie(oe,"isPrimitive",Dr),ie(oe,"isObject",ae);var ue=oe,ce=Number.POSITIVE_INFINITY,fe=qr.NEGATIVE_INFINITY,se=ce,le=fe,pe=zr;var ve=function(r){return r<se&&r>le&&pe(r)},ge=ue.isPrimitive,de=ve;var me=function(r){return ge(r)&&de(r)},he=ue.isObject,be=ve;var ye=function(r){return he(r)&&be(r.valueOf())},we=me,Ee=ye;var je=d,Pe=function(r){return we(r)||Ee(r)},_e=ye;je(Pe,"isPrimitive",me),je(Pe,"isObject",_e);var xe=Pe;var Te=function(r){return r!=r},Oe=ue.isPrimitive,Se=Te;var Ve=function(r){return Oe(r)&&Se(r)},ke=ue.isObject,Ie=Te;var Ae=function(r){return ke(r)&&Ie(r.valueOf())},Re=Ve,$e=Ae;var Fe=d,Me=function(r){return Re(r)||$e(r)},Ne=Ae;Fe(Me,"isPrimitive",Ve),Fe(Me,"isObject",Ne);var Ce=Yr,Be=xe.isPrimitive,Ge=Wr.isPrimitive,Le=Me.isPrimitive;var Ze=function(r,e,t){var n,i,o;if(!Ce(r)&&!Ge(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Be(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Ge(r)){if(!Ge(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Le(e)){for(o=i;o<n;o++)if(Le(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},We=Ze,Xe=Wr.isPrimitive;var ze=function(r){if(!Xe(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ue=Wr.isPrimitive;var Ye=function(r){if(!Ue(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},De=ze,qe=Ye,He=Wr.isPrimitive;var Je=function(r){return He(r)&&r===qe(r)&&r!==De(r)},Ke=ce,Qe=fe;var rt=function(r){return r==r&&r>Qe&&r<Ke},et=xe.isPrimitive;var tt=function(r){return et(r)&&r>=0},nt=xe.isObject;var it=function(r){return nt(r)&&r.valueOf()>=0},ot=tt,at=it;var ut=d,ct=function(r){return ot(r)||at(r)},ft=it;ut(ct,"isPrimitive",tt),ut(ct,"isObject",ft);var st=ct.isPrimitive,lt=Wr.isPrimitive;var pt=function(r,e){var t,n;if(!lt(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!st(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},vt=xe.isPrimitive,gt=Wr.isPrimitive;var dt=function(r,e,t){var n,i;if(!gt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!gt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!vt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},mt=pt,ht=dt;var bt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(ht(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+mt("0",i):mt("0",i)+r,n&&(r="-"+r)),r},yt=Je,wt=Ye,Et=ze,jt=rt,Pt=ue.isPrimitive,_t=bt;var xt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!jt(n)){if(!Pt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=_t(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=_t(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=yt(r.specifier)?wt(t):Et(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Tt=Wr.isPrimitive,Ot=/[-\/\\^$*+?.()|[\]{}]/g;var St=function(r){var e,t;if(!Tt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Ot,"\\$&"):(e=(e=r.substring(1,t)).replace(Ot,"\\$&"),r=r[0]+e+r.substring(t))},Vt=RegExp.prototype.exec;var kt=I,It=function(r){try{return Vt.call(r),!0}catch(r){return!1}},At=y();var Rt=St,$t=Pr,Ft=Wr.isPrimitive,Mt=function(r){return"object"==typeof r&&(r instanceof RegExp||(At?It(r):"[object RegExp]"===kt(r)))};var Nt=Je,Ct=Ye,Bt=ze,Gt=function(r,e,t){if(!Ft(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Ft(e))e=Rt(e),e=new RegExp(e,"g");else if(!Mt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Ft(t)&&!$t(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Lt=rt,Zt=ue.isPrimitive,Wt=Sr,Xt=/e\+(\d)$/,zt=/e-(\d)$/,Ut=/^(\d+)$/,Yt=/^(\d+)e/,Dt=/\.0$/,qt=/\.0*e/,Ht=/(\..*[^0])0*e/;var Jt=function(r){var e,t,n=parseFloat(r.arg);if(!Lt(n)){if(!Zt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Wt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Gt(t,Ht,"$1e"),t=Gt(t,qt,"e"),t=Gt(t,Dt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Gt(t,Xt,"e+0$1"),t=Gt(t,zt,"e-0$1"),r.alternate&&(t=Gt(t,Ut,"$1."),t=Gt(t,Yt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Nt(r.specifier)?Ct(t):Bt(t)},Kt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Qt=pt;var rn=Wr.isPrimitive,en=We,tn=Te,nn=xt,on=Jt,an=function(r){var e,t,n,i,o;for(e=0,n=[],o=Kt.exec(r);o;)(t=r.slice(e,Kt.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=Kt.lastIndex,o=Kt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},un=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Qt(" ",n):Qt(" ",n)+r},cn=bt,fn=String.fromCharCode;var sn=function(r){var e,t,n,i,o,a,u,c,f;if(!rn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=an(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],rn(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!en(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,tn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,tn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=nn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!tn(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=tn(o)?String(n.arg):fn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=on(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=cn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=un(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},ln=d,pn=xr,vn=Pr,gn=Or,dn=Ir,mn=sn;var hn=function r(e){var t,n,i;if(!pn(e))throw new TypeError(mn("invalid argument. Must provide an iterator. Value: `%s`.",e));return i=dn(),ln(t={},"next",(function(){var r;if(n)return{done:!0};if((r=e.next()).done)return n=!0,r;r="number"==typeof r.value?i(r.value):i(NaN);return{value:r,done:!1}})),ln(t,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),gn&&vn(e[gn])&&ln(t,gn,(function(){return r(e[gn]())})),t};return hn}));
//# sourceMappingURL=bundle.js.map