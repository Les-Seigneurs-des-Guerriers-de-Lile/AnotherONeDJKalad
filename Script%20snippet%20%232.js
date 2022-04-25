/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function da(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function r(a){return ea(a())}
da("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});
function fa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
da("Array.prototype.values",function(a){return a?a:function(){return fa(this,function(b,c){return c})}});
da("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
da("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});
da("String.prototype.matchAll",function(a){return a?a:function(b){if(b instanceof RegExp&&!b.global)throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");var c=new RegExp(b,b instanceof RegExp?void 0:"g"),d=this,e=!1,f={next:function(){if(e)return{value:void 0,done:!0};var g=c.exec(d);if(!g)return e=!0,{value:void 0,done:!0};""===g[0]&&(c.lastIndex+=1);return{value:g,done:!1}}};
f[Symbol.iterator]=function(){return f};
return f}});
da("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
var u=this||self;function v(a,b){a=a.split(".");b=b||u;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ha(a,b,c){return a.call.apply(a.bind,arguments)}
function ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function ja(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja=ha:ja=ia;return ja.apply(null,arguments)}
function w(a,b){a=a.split(".");var c=u;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function ka(a,b){function c(){}
c.prototype=b.prototype;a.Ia=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.qb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function la(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,la);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.va=b)}
ka(la,Error);la.prototype.name="CustomError";function ma(){}
;function na(a,b){Array.prototype.forEach.call(a,b,void 0)}
function oa(a,b){return Array.prototype.map.call(a,b,void 0)}
function pa(a,b){b=Array.prototype.indexOf.call(a,b,void 0);0<=b&&Array.prototype.splice.call(a,b,1)}
function qa(a,b){for(let d=1;d<arguments.length;d++){const e=arguments[d];var c=typeof e;c="object"!=c?c:e?Array.isArray(e)?"array":c:"null";if("array"==c||"object"==c&&"number"==typeof e.length){c=a.length||0;const f=e.length||0;a.length=c+f;for(let g=0;g<f;g++)a[c+g]=e[g]}else a.push(e)}}
;function ra(a){for(const b in a)return!1;return!0}
function sa(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);const b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length);for(const c in a)b[c]=sa(a[c]);return b}
const ta="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ua(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<ta.length;f++)c=ta[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function va(){}
function wa(a){return new va(xa,a)}
var xa={};wa("");var ya=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function za(){var a=u.navigator;return a&&(a=a.userAgent)?a:""}
function z(a){return-1!=za().indexOf(a)}
;function Aa(){return(z("Chrome")||z("CriOS"))&&!z("Edge")||z("Silk")}
;var A=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ba(a){return a?decodeURI(a):a}
function Da(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Da(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ea(a){var b=[],c;for(c in a)Da(c,a[c],b);return b.join("&")}
;function Fa(a,b){return Error(`Invalid wire type: ${a} (at position ${b})`)}
function Ga(){return Error("Failed to read varint, encoding is invalid.")}
function Ha(a,b){return Error(`Tried to read past the end of the data ${b} > ${a}`)}
;function Ia(){throw Error("Invalid UTF8");}
function Ja(a,b){b=String.fromCharCode.apply(null,b);return null==a?b:a+b}
let Ka=void 0,La;const Ma="undefined"!==typeof TextDecoder;!z("Android")||Aa();Aa();var Na=z("Safari")&&!(Aa()||z("Coast")||z("Opera")||z("Edge")||z("Edg/")||z("OPR")||z("Firefox")||z("FxiOS")||z("Silk")||z("Android"))&&!(z("iPhone")&&!z("iPod")&&!z("iPad")||z("iPad")||z("iPod"));var Oa={},Pa=null;function Qa(a,b){void 0===b&&(b=0);Ra();b=Oa[b];const c=Array(Math.floor(a.length/3)),d=b[64]||"";let e=0,f=0;for(;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Sa(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ta(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Ta(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Pa[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Ra();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Ra(){if(!Pa){Pa={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Oa[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Pa[f]&&(Pa[f]=e)}}}}
;var Ua="undefined"!==typeof Uint8Array;function Va(a){return Ua&&null!=a&&a instanceof Uint8Array}
let Wa;var Xa={};let Ya;function Za(a){if(a!==Xa)throw Error("illegal external caller");}
var $a=class{constructor(a,b){Za(b);this.O=a;if(null!==a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}isEmpty(){return null==this.O}};function ab(a){if("string"===typeof a)return{buffer:Sa(a),K:!1};if(Array.isArray(a))return{buffer:new Uint8Array(a),K:!1};if(a.constructor===Uint8Array)return{buffer:a,K:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),K:!1};if(a.constructor===$a){Za(Xa);var b=a.O;b=null==b||Va(b)?b:"string"===typeof b?Sa(b):null;return{buffer:(a.O=b)||Wa||(Wa=new Uint8Array(0)),K:!0}}if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),K:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
;const bb="function"===typeof Uint8Array.prototype.slice;function cb(a){if(a.i>a.j)throw Ha(a.j,a.i);}
function db(a){const b=a.l;let c=b[a.i+0],d=c&127;if(128>c)return a.i+=1,cb(a),d;c=b[a.i+1];d|=(c&127)<<7;if(128>c)return a.i+=2,cb(a),d;c=b[a.i+2];d|=(c&127)<<14;if(128>c)return a.i+=3,cb(a),d;c=b[a.i+3];d|=(c&127)<<21;if(128>c)return a.i+=4,cb(a),d;c=b[a.i+4];a.i+=5;d|=(c&15)<<28;if(128>c)return cb(a),d;if(128<=b[a.i++]&&128<=b[a.i++]&&128<=b[a.i++]&&128<=b[a.i++]&&128<=b[a.i++])throw Ga();cb(a);return d}
function eb(a,b){if(0>b)throw Error(`Tried to read a negative byte length: ${b}`);if(a.i+b>a.j)throw Ha(b,a.j-a.i);}
var fb=class{constructor(a){this.l=null;this.o=!1;this.i=this.j=this.m=0;this.init(a,void 0,void 0,void 0)}init(a,b,c,{aa:d=!1}={}){this.aa=d;a&&(a=ab(a),this.l=a.buffer,this.o=a.K,this.m=b||0,this.j=void 0!==c?this.m+c:this.l.length,this.i=this.m)}clear(){this.l=null;this.o=!1;this.i=this.j=this.m=0;this.aa=!1}reset(){this.i=this.m}advance(a){this.i+=a;cb(this)}},gb=[];function hb(a){var b=a.i;if(b.i==b.j)return!1;a.l=a.i.i;var c=db(a.i)>>>0;b=c>>>3;c&=7;if(!(0<=c&&5>=c))throw Fa(c,a.l);if(1>b)throw Error(`Invalid field number: ${b} (at position ${a.l})`);a.m=b;a.j=c;return!0}
function ib(a){switch(a.j){case 0:if(0!=a.j)ib(a);else a:{a=a.i;var b=a.i;const c=b+10;for(;b<c;)if(0===(a.l[b++]&128)){a.i=b;cb(a);break a}throw Ga();}break;case 1:a.i.advance(8);break;case 2:2!=a.j?ib(a):(b=db(a.i)>>>0,a.i.advance(b));break;case 5:a.i.advance(4);break;case 3:b=a.m;do{if(!hb(a))throw Error("Unmatched start-group tag: stream EOF");if(4==a.j){if(a.m!=b)throw Error("Unmatched end-group tag");break}ib(a)}while(1);break;default:throw Fa(a.j,a.l);}}
var jb=class{constructor(a){if(gb.length){const b=gb.pop();b.init(a,void 0,void 0,void 0);a=b}else a=new fb(a);this.i=a;this.l=this.i.i;this.j=this.m=-1;({T:a=!1}={});this.T=a}reset(){this.i.reset();this.l=this.i.i;this.j=this.m=-1}advance(a){this.i.advance(a)}},kb=[];var lb={};function mb(a){if(a!==lb)throw Error("requires a valid immutable API token");}
;const nb="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function ob(a,b){Object.isFrozen(a)||(nb?a[nb]|=b:void 0!==a.U?a.U|=b:Object.defineProperties(a,{U:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function pb(a){let b;nb?b=a[nb]:b=a.U;return null==b?0:b}
function qb(a){return Array.isArray(a)?!!(pb(a)&1):!1}
function rb(a){ob(a,1);return a}
function sb(a){return Array.isArray(a)?!!(pb(a)&2):!1}
function tb(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");ob(a,2)}
;function ub(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
let vb;var wb=Object.freeze(rb([]));function xb(a){if(sb(a.s))throw Error("Cannot mutate an immutable Message");}
var yb="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function zb(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Ab(a){u.setTimeout(()=>{throw a;},0)}
;function Bb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(Va(a))return Qa(a);if(a instanceof $a){var b=a.O;b=null==b||"string"===typeof b?b:Ua&&b instanceof Uint8Array?Qa(b):null;return(a.O=b)||""}}}return a}
;function Cb(a,b=Db){return Eb(a,b)}
function Fb(a,b){if(null!=a){if(Array.isArray(a))a=Eb(a,b);else if(ub(a)){const c={};for(let d in a)c[d]=Fb(a[d],b);a=c}else a=b(a);return a}}
function Eb(a,b){const c=a.slice();for(let d=0;d<c.length;d++)c[d]=Fb(c[d],b);qb(a)&&rb(c);return c}
function Gb(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Bb(a);return Array.isArray(a)?Cb(a,Gb):a}
function Db(a){return Va(a)?new Uint8Array(a):a}
;function B(a,b,c=!1){return-1===b?null:b>=a.m?a.j?a.j[b]:void 0:c&&a.j&&(c=a.j[b],null!=c)?c:a.s[b+a.l]}
function C(a,b,c,d=!1,e=!1){e||xb(a);b<a.m&&!d?a.s[b+a.l]=c:(a.j||(a.j=a.s[a.m+a.l]={}))[b]=c;return a}
function Hb(a,b,c=!0,d=!1){let e=B(a,b,d);null==e&&(e=wb);if(sb(a.s))c&&(tb(e),Object.freeze(e));else if(e===wb||sb(e))e=rb(e.slice()),C(a,b,e,d);return e}
function Ib(a,b,c,d){xb(a);(c=Jb(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),C(a,c));return C(a,b,d)}
function Jb(a,b){let c=0;for(let d=0;d<b.length;d++){const e=b[d];null!=B(a,e)&&(0!==c&&C(a,c,void 0,!1,!0),c=e)}return c}
function Kb(a,b,c,d,e=!1){if(-1===c)return null;a.i||(a.i={});const f=a.i[c];if(f)return f;e=B(a,c,e);if(null==e&&!d)return f;b=new b(e);sb(a.s)&&tb(b.s);return a.i[c]=b}
function Lb(a,b,c,d=!1){a.i||(a.i={});var e=sb(a.s);let f=a.i[c];if(!f){d=Hb(a,c,!0,d);f=[];e=e||sb(d);for(let g=0;g<d.length;g++)f[g]=new b(d[g]),e&&tb(f[g].s);e&&(tb(f),Object.freeze(f));a.i[c]=f}return f}
function D(a,b,c){xb(a);a.i||(a.i={});const d=null!=c?c.s:c;a.i[b]=c;return C(a,b,d,!1)}
function E(a,b,c,d){xb(a);a.i||(a.i={});const e=null!=d?d.s:d;a.i[b]=d;Ib(a,b,c,e)}
function Mb(a,b,c,d){xb(a);const e=Lb(a,c,b,!1);c=null!=d?d:new c;a=Hb(a,b);e.push(c);a.push(c.s);return c}
function Nb(a,b){a=B(a,b);return null==a?"":a}
;function Ob(a){vb=!0;try{return JSON.stringify(a.toJSON(),Pb)}finally{vb=!1}}
var Tb=class{constructor(a,b,c){a||(a=Qb);Qb=null;var d=this.constructor.i;a||(a=d?[d]:[]);this.l=(d?0:-1)-(this.constructor.j||0);this.i=void 0;this.s=a;a:{d=this.s.length;a=d-1;if(d&&(d=this.s[a],ub(d))){this.m=a-this.l;this.j=d;break a}void 0!==b&&-1<b?(this.m=Math.max(b,a+1-this.l),this.j=void 0):this.m=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.m)a+=this.l,(d=this.s[a])?Array.isArray(d)&&rb(d):this.s[a]=wb;else{d=this.j||(this.j=this.s[this.m+this.l]={});let e=d[a];e?Array.isArray(e)&&
rb(e):d[a]=wb}}toJSON(){const a=Rb(this.s);return vb?a:Cb(a,Gb)}clone(){var a=Cb(this.s);Qb=a;a=new this.constructor(a);Qb=null;Sb(a,this);return a}isMutable(a){mb(a);return!sb(this.s)}K(a){mb(a);return sb(this.s)}};function Pb(a,b){return Bb(b)}
function Rb(a){let b,c=a.length,d=!1;for(let g=a.length;g--;){let h=a[g];if(Array.isArray(h)){var e=h;Array.isArray(h)&&qb(h)&&!h.length?h=null:h=Rb(h);h!=e&&(d=!0)}else if(g===a.length-1&&ub(h)){a:{var f=h;e={};let k=!1;for(let l in f){let m=f[l];if(Array.isArray(m)){let p=m;Array.isArray(m)&&qb(m)&&!m.length?m=null:m=Rb(m);m!=p&&(k=!0)}null!=m?e[l]=m:k=!0}if(k){for(let l in e){f=e;break a}f=null}}f!=h&&(d=!0);c--;continue}null==h&&c==g+1?(d=!0,c--):d&&(b||(b=a.slice(0,c)),b[g]=h)}if(!d)return a;
b||(b=a.slice(0,c));f&&b.push(f);return b}
function Sb(a,b){b.o&&(a.o=b.o.slice());const c=b.i;if(c){b=b.j;for(let f in c){const g=c[f];if(g){var d=!(!b||!b[f]),e=+f;if(Array.isArray(g)){if(g.length)for(d=Lb(a,g[0].constructor,e,d),e=0;e<Math.min(d.length,g.length);e++)Sb(d[e],g[e])}else(d=Kb(a,g.constructor,e,void 0,d))&&Sb(d,g)}}}}
let Qb;var Ub=class extends Tb{};yb&&Object.defineProperties(Ub,{[Symbol.hasInstance]:zb(()=>{throw Error("Cannot perform instanceof checks for MutableMessage");})});const Vb=Symbol();function Wb(a,b,c){return a[Vb]||(a[Vb]=(d,e)=>b(d,e,c))}
function Xb(a){let b=a[Vb];if(!b){const c=Yb(a);b=(d,e)=>Zb(d,e,c);
a[Vb]=b}return b}
function $b(a){var b=a.rb;if(b)return Xb(b);if(b=a.xb)return Wb(a.ya.ba,b,a.wb)}
function ac(a){const b=$b(a),c=a.ya,d=a.Cb.X;return b?(e,f)=>d(e,f,c,b):(e,f)=>d(e,f,c)}
function bc(a,b){let c=a[b];"function"==typeof c&&0===c.length&&(c=c(),a[b]=c);return Array.isArray(c)&&(cc in c||dc in c||0<c.length&&"function"==typeof c[0])?c:void 0}
const dc=Symbol(),cc=Symbol();function ec(a,b){a[0]=b}
function fc(a,b,c,d){const e=c.X;a[b]=d?(f,g,h)=>e(f,g,h,d):e}
function gc(a,b,c,d,e){const f=c.X,g=Xb(d),h=Yb(d).ba;a[b]=(k,l,m)=>f(k,l,m,h,g,e)}
function hc(a,b,c,d,e,f,g){const h=c.X,k=Wb(d,e,f);a[b]=(l,m,p)=>h(l,m,p,d,k,g)}
function Yb(a){var b=a[cc];if(b)return b;b=a[cc]={};var c=ec,d=fc,e=gc,f=hc;b.ba=a[0];let g=1;if(a.length>g&&"number"!==typeof a[g]){var h=a[g++];c(b,h)}for(;g<a.length;){c=a[g++];for(var k=g+1;k<a.length&&"number"!==typeof a[k];)k++;h=a[g++];k-=g;switch(k){case 0:d(b,c,h);break;case 1:(k=bc(a,g))?(g++,e(b,c,h,k)):d(b,c,h,a[g++]);break;case 2:k=b;var l=g++;l=bc(a,l);e(k,c,h,l,a[g++]);break;case 3:f(b,c,h,a[g++],a[g++],a[g++]);break;case 4:f(b,c,h,a[g++],a[g++],a[g++],a[g++]);break;default:throw Error("unexpected number of binary field arguments: "+
k);}}cc in a&&dc in a&&(a.length=0);return b}
function Zb(a,b,c){for(;hb(b)&&4!=b.j;){var d=b.m,e=c[d];if(!e){var f=c[0];f&&(f=f[d])&&(e=c[d]=ac(f))}if(!e||!e(b,a,d))if(f=b,d=a,e=f.l,ib(f),!f.T){var g=f.i.i-e;f.i.i=e;e=f.i;f=g;eb(e,f);if(0==f)e=Ya||(Ya=new $a(null,Xa));else{if(e.aa&&e.o)g=e.l.subarray(e.i,e.i+f);else{g=e.l;var h=e.i,k=e.i+f;g=h===k?Wa||(Wa=new Uint8Array(0)):bb?g.slice(h,k):new Uint8Array(g.subarray(h,k))}e.i+=f;e=g;e=0==e.length?Ya||(Ya=new $a(null,Xa)):new $a(e,Xa)}(f=d.o)?f.push(e):d.o=[e]}}return a}
function ic(a,b){return{X:a,Ib:b}}
var jc=ic(function(a,b,c){if(2!==a.j)return!1;var d=db(a.i)>>>0;a=a.i;eb(a,d);var e=a.i;a.i+=d;a=a.l;if(Ma){var f=a,g;(g=La)||(g=La=new TextDecoder("utf-8",{fatal:!0}));a=e+d;f=0===e&&a===f.length?f:f.subarray(e,a);try{var h=g.decode(f)}catch(l){if(void 0===Ka){try{g.decode(new Uint8Array([128]))}catch(m){}try{g.decode(new Uint8Array([97])),Ka=!0}catch(m){Ka=!1}}!Ka&&(La=void 0);throw l;}}else{h=e;d=h+d;e=[];let l=null;let m;for(;h<d;){var k=a[h++];128>k?e.push(k):224>k?h>=d?Ia(e):(m=a[h++],194>k||
128!==(m&192)?(h--,Ia(e)):e.push((k&31)<<6|m&63)):240>k?h>=d-1?Ia(e):(m=a[h++],128!==(m&192)||224===k&&160>m||237===k&&160<=m||128!==((f=a[h++])&192)?(h--,Ia(e)):e.push((k&15)<<12|(m&63)<<6|f&63)):244>=k?h>=d-2?Ia(e):(m=a[h++],128!==(m&192)||0!==(k<<28)+(m-144)>>30||128!==((f=a[h++])&192)||128!==((g=a[h++])&192)?(h--,Ia(e)):(k=(k&7)<<18|(m&63)<<12|(f&63)<<6|g&63,k-=65536,e.push((k>>10&1023)+55296,(k&1023)+56320))):Ia(e);8192<=e.length&&(l=Ja(l,e),e.length=0)}h=Ja(l,e)}C(b,c,h);return!0},function(a,
b,c){a.j(c,B(b,c))}),kc=ic(function(a,b,c,d,e){if(2!==a.j)return!1;
b=Mb(b,c,d);c=a.i.j;d=db(a.i)>>>0;const f=a.i.i+d;let g=f-c;0>=g&&(a.i.j=f,e(b,a),g=f-a.i.i);if(g)throw Error("Message parsing ended unexpectedly. Expected to read "+`${d} bytes, instead read ${d-g} bytes, either the `+"data ended unexpectedly or the message misreported its own length");a.i.i=f;a.i.j=c;return!0},function(a,b,c,d,e){a.i(c,Lb(b,d,c),e)});class F extends Ub{}yb&&Object.defineProperties(F,{[Symbol.hasInstance]:zb(Object[Symbol.hasInstance])});wa("csi.gstatic.com");wa("googleads.g.doubleclick.net");wa("partner.googleadservices.com");wa("pubads.g.doubleclick.net");wa("securepubads.g.doubleclick.net");wa("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
function lc(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var mc="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),nc=[...mc,"client_dev_set_cookie"];function oc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var t=g,n=0;64>n;n+=4)t[n/4]=p[n]<<24|p[n+1]<<16|p[n+2]<<8|p[n+3];for(n=16;80>n;n++)p=t[n-3]^t[n-8]^t[n-14]^t[n-16],t[n]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],y=e[2],G=e[3],Ca=e[4];for(n=0;80>n;n++){if(40>n)if(20>n){var I=G^x&(y^G);var Y=1518500249}else I=x^y^G,Y=1859775393;else 60>n?(I=x&y|G&(x|y),Y=2400959708):(I=x^y^G,Y=3395469782);I=((p<<5|p>>>27)&4294967295)+I+Ca+Y+t[n]&4294967295;Ca=G;G=y;y=(x<<30|x>>>2)&4294967295;x=p;p=I}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;
e[2]=e[2]+y&4294967295;e[3]=e[3]+G&4294967295;e[4]=e[4]+Ca&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var n=[],x=0,y=p.length;x<y;++x)n.push(p.charCodeAt(x));p=n}t||(t=p.length);n=0;if(0==l)for(;n+64<t;)b(p.slice(n,n+64)),n+=64,m+=64;for(;n<t;)if(f[l++]=p[n++],m++,64==l)for(l=0,b(f);n+64<t;)b(p.slice(n,n+64)),n+=64,m+=64}
function d(){var p=[],t=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var n=63;56<=n;n--)f[n]=t&255,t>>>=8;b(f);for(n=t=0;5>n;n++)for(var x=24;0<=x;x-=8)p[t++]=e[n]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,wa:function(){for(var p=d(),t="",n=0;n<p.length;n++)t+="0123456789ABCDEF".charAt(Math.floor(p[n]/16))+"0123456789ABCDEF".charAt(p[n]%16);return t}}}
;function pc(a,b,c){var d=String(u.location.href);return d&&a&&b?[b,qc(lc(d),a,c||null)].join(" "):null}
function qc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],na(d,function(h){e.push(h)}),rc(e.join(" "));
var f=[],g=[];na(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];na(d,function(h){e.push(h)});
a=rc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function rc(a){var b=oc();b.update(a);return b.wa().toLowerCase()}
;const sc={};function tc(){this.i=document||{cookie:""}}
q=tc.prototype;q.isEnabled=function(){if(!u.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ra:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){let d;var e=!1;let f;if("object"===typeof c){f=c.Gb;e=c.Hb||!1;d=c.domain||void 0;var g=c.path||void 0;var h=c.ra}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=d?";domain="+d:"";g=g?";path="+g:"";e=e?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+e+(null!=f?";samesite="+
f:"")};
q.get=function(a,b){const c=a+"=",d=(this.i.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=ya(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){const d=void 0!==this.get(a);this.set(a,"",{ra:0,path:b,domain:c});return d};
q.isEmpty=function(){return!this.i.cookie};
q.clear=function(){var a=(this.i.cookie||"").split(";");const b=[],c=[];let d,e;for(let f=0;f<a.length;f++)e=ya(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};function uc(){return!!sc.FPA_SAMESITE_PHASE2_MOD||!1}
function vc(a,b,c,d){(a=u[a])||(a=(new tc).get(b));return a?pc(a,c,d):null}
function wc(){var a=[],b=lc(String(u.location.href));const c=[];var d=u.__SAPISID||u.__APISID||u.__3PSAPISID||u.__OVERRIDE_SID;uc()&&(d=d||u.__1PSAPISID);if(d)var e=!0;else e=new tc,d=e.get("SAPISID")||e.get("APISID")||e.get("__Secure-3PAPISID")||e.get("SID"),uc()&&(d=d||e.get("__Secure-1PAPISID")),e=!!d;e&&(d=(e=b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?u.__SAPISID:u.__APISID,d||(d=new tc,d=d.get(e?"SAPISID":"APISID")||d.get("__Secure-3PAPISID")),
(e=d?pc(d,e?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(e),b&&uc()&&((b=vc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=vc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a)));return 0==c.length?null:c.join(" ")}
;function xc(){this.l=this.l;this.m=this.m}
xc.prototype.l=!1;xc.prototype.dispose=function(){this.l||(this.l=!0,this.ca())};
xc.prototype.ca=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function yc(a){var b=v("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||u.$googDebugFname||b}catch(g){e="Not available",c=!0}b=zc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ac[c])c=Ac[c];else{c=String(c);if(!Ac[c]){var f=/function\s+([^\(]+)/m.exec(c);Ac[c]=f?f[1]:"[Anonymous]"}c=Ac[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function zc(a,b){b||(b={});b[Bc(a)]=!0;var c=a.stack||"";(a=a.va)&&!b[Bc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=zc(a,b));return c}
function Bc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ac={};function Cc(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
var Dc=class{constructor(a,b){this.l=a;this.m=b;this.j=0;this.i=null}get(){let a;0<this.j?(this.j--,a=this.i,this.i=a.next,a.next=null):a=this.l();return a}};class Ec{constructor(){this.j=this.i=null}add(a,b){const c=Fc.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c}remove(){let a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a}}var Fc=new Dc(()=>new Gc,a=>a.reset());
class Gc{constructor(){this.next=this.scope=this.i=null}set(a,b){this.i=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.i=null}};function Hc(a,b){Ic||Jc();Kc||(Ic(),Kc=!0);Lc.add(a,b)}
var Ic;function Jc(){var a=u.Promise.resolve(void 0);Ic=function(){a.then(Mc)}}
var Kc=!1,Lc=new Ec;function Mc(){for(var a;a=Lc.remove();){try{a.i.call(a.scope)}catch(b){Ab(b)}Cc(Fc,a)}Kc=!1}
;class Nc{constructor(){this.promise=new Promise((a,b)=>{this.reject=b})}}
;function H(a){this.i=0;this.D=void 0;this.m=this.j=this.l=null;this.o=this.u=!1;if(a!=ma)try{var b=this;a.call(void 0,function(c){Oc(b,2,c)},function(c){Oc(b,3,c)})}catch(c){Oc(this,3,c)}}
function Pc(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
Pc.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var Qc=new Dc(function(){return new Pc},function(a){a.reset()});
function Rc(a,b,c){var d=Qc.get();d.j=a;d.onRejected=b;d.context=c;return d}
function Sc(a){if(a instanceof H)return a;var b=new H(ma);Oc(b,2,a);return b}
H.prototype.then=function(a,b,c){return Tc(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
H.prototype.$goog_Thenable=!0;q=H.prototype;q.La=function(a,b){return Tc(this,null,a,b)};
q.catch=H.prototype.La;q.cancel=function(a){if(0==this.i){var b=new Uc(a);Hc(function(){Vc(this,b)},this)}};
function Vc(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?Vc(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):Wc(c),Xc(c,e,3,b)))}a.l=null}else Oc(a,3,b)}
function Yc(a,b){a.j||2!=a.i&&3!=a.i||Zc(a);a.m?a.m.next=b:a.j=b;a.m=b}
function Tc(a,b,c,d){var e=Rc(null,null,null);e.i=new H(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Uc?g(h):f(k)}catch(l){g(l)}}:g});
e.i.l=a;Yc(a,e);return e.i}
q.Ma=function(a){this.i=0;Oc(this,2,a)};
q.Na=function(a){this.i=0;Oc(this,3,a)};
function Oc(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.Ma,f=a.Na;if(d instanceof H){Yc(d,Rc(e||ma,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{h=typeof d;if("object"==h&&null!=d||"function"==h)try{var k=d.then;if("function"===typeof k){$c(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.D=c,a.i=b,a.l=null,Zc(a),3!=b||c instanceof Uc||ad(a,c))}}
function $c(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Zc(a){a.u||(a.u=!0,Hc(a.xa,a))}
function Wc(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
q.xa=function(){for(var a;a=Wc(this);)Xc(this,a,this.i,this.D);this.u=!1};
function Xc(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.o;a=a.l)a.o=!1;if(b.i)b.i.l=null,bd(b,c,d);else try{b.l?b.j.call(b.context):bd(b,c,d)}catch(e){cd.call(null,e)}Cc(Qc,b)}
function bd(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function ad(a,b){a.o=!0;Hc(function(){a.o&&cd.call(null,b)})}
var cd=Ab;function Uc(a){la.call(this,a)}
ka(Uc,la);Uc.prototype.name="cancel";function J(a){xc.call(this);this.D=1;this.o=[];this.u=0;this.i=[];this.j={};this.N=!!a}
ka(J,xc);q=J.prototype;q.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.D;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.D=e+3;d.push(e);return e};
q.ka=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.u?(this.o.push(a),this.i[a+1]=()=>{}):(c&&pa(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
q.ha=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.N)for(e=0;e<c.length;e++){var g=c[e];dd(this.i[g+1],this.i[g+2],d)}else{this.u++;try{for(e=0,f=c.length;e<f&&!this.l;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.u--,0<this.o.length&&0==this.u)for(;c=this.o.pop();)this.ka(c)}}return 0!=e}return!1};
function dd(a,b,c){Hc(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.ka,this),delete this.j[a])}else this.i.length=0,this.j={}};
q.ca=function(){J.Ia.ca.call(this);this.clear();this.o.length=0};/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var ed="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var gd=class extends F{constructor(a){super(a)}getKey(){return B(this,1)}da(){return B(this,2===Jb(this,fd)?2:-1)}setValue(a){return Ib(this,2,fd,a)}},fd=[2,3,4,5,6];var hd=class extends F{constructor(a){super(a)}};var jd=class extends F{constructor(){super(void 0,-1,id)}getPlayerType(){return B(this,36)}setHomeGroupInfo(a){return D(this,81,a)}},id=[9,66,24,32,86,100,101];var ld=class extends F{constructor(){super(void 0,-1,kd)}},kd=[15,26,28];var md=class extends F{constructor(a){super(a)}setToken(a){return C(this,2,a)}};var od=class extends F{constructor(a){super(a,-1,nd)}setSafetyMode(a){return C(this,5,a)}},nd=[12];var qd=class extends F{constructor(a){super(a,-1,pd)}},pd=[12];var sd=class extends F{constructor(){super(void 0,-1,rd)}},td=class extends F{constructor(a){super(a)}getKey(){return Nb(this,1)}da(){return Nb(this,2)}setValue(a){return C(this,2,a)}},rd=[4,5];var ud=class extends F{constructor(){super(void 0)}};var vd=class extends F{constructor(){super(void 0)}},wd=[2,3,4];var xd=class extends F{constructor(){super(void 0)}};var yd=class extends F{constructor(){super(void 0)}};var zd=class extends F{constructor(){super(void 0)}};var Bd=class extends F{constructor(){super(void 0,-1,Ad)}},Ad=[10,17];var Cd=class extends F{constructor(){super(void 0)}};var Dd=class extends F{constructor(a){super(a)}};var Ed=class extends F{constructor(){super(void 0)}};function Fd(a,b){D(a,1,b)}
var Gd=class extends F{constructor(){super(void 0)}C(a){C(this,2,a)}};function Hd(a,b){D(a,1,b)}
var Id=class extends F{constructor(){super(void 0)}};function Jd(a,b){D(a,2,b)}
var Ld=class extends F{constructor(){super(void 0,-1,Kd)}C(a){C(this,1,a)}},Kd=[3];var Md=class extends F{constructor(){super(void 0)}C(a){C(this,1,a)}};var Nd=class extends F{constructor(){super(void 0)}C(a){C(this,1,a)}};var Od=class extends F{constructor(){super(void 0)}C(a){C(this,1,a)}};var Pd=class extends F{constructor(){super(void 0)}};var Qd=class extends F{constructor(){super(void 0)}};var K=class extends F{constructor(a){super(a,432)}},Rd=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,
356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117];var Sd={ib:0,Sa:1,Ya:2,Za:4,fb:8,ab:16,bb:32,hb:64,gb:128,Ua:256,Wa:512,eb:1024,Va:2048,Xa:4096,Ta:8192,cb:16384};var Td=class extends F{constructor(){super(void 0)}};var Vd=class extends F{constructor(){super(void 0)}setVideoId(a){return Ib(this,1,Ud,a)}getPlaylistId(){return B(this,2===Jb(this,Ud)?2:-1)}},Ud=[1,2];var Xd=class extends F{constructor(){super(void 0,-1,Wd)}},Wd=[3];const Yd=u.window;let Zd,$d;const L=(null==Yd?void 0:null==(Zd=Yd.yt)?void 0:Zd.config_)||(null==Yd?void 0:null==($d=Yd.ytcfg)?void 0:$d.data_)||{};w("yt.config_",L);function M(...a){a=arguments;1<a.length?L[a[0]]=a[1]:1===a.length&&Object.assign(L,a[0])}
function N(a,b){return a in L?L[a]:b}
function ae(){return N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function be(){const a=L.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function O(a){a=ce(a);return"string"===typeof a&&"false"===a?!1:!!a}
function de(a,b){a=ce(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ee(){return N("EXPERIMENTS_TOKEN","")}
function ce(a){const b=N("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:N("EXPERIMENT_FLAGS",{})[a]}
function fe(){const a=[],b=N("EXPERIMENTS_FORCED_FLAGS",{});for(var c in b)a.push({key:c,value:String(b[c])});c=N("EXPERIMENT_FLAGS",{});for(let d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var ge=["notification/convert_endpoint_to_url"],he=["notification/record_interactions"],ie=["notification_registration/set_registration"];Date.now();const je=[];function ke(a){je.forEach(b=>b(a))}
function le(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){me(b)}}:a}
function me(a){var b=v("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=N("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),M("ERRORS",b));ke(a)}
function ne(a){var b=v("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=N("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),M("ERRORS",b))}
;const oe=/^[\w.]*$/,pe={q:!0,search_query:!0};function qe(a,b){b=a.split(b);const c={};for(let f=0,g=b.length;f<g;f++){const h=b[f].split("=");if(1==h.length&&h[0]||2==h.length)try{const k=re(h[0]||""),l=re(h[1]||"");k in c?Array.isArray(c[k])?qa(c[k],l):c[k]=[c[k],l]:c[k]=l}catch(k){var d=k,e=h[0];const l=String(qe);d.args=[{key:e,value:h[1],query:a,method:se==l?"unchanged":l}];pe.hasOwnProperty(e)||ne(d)}}return c}
const se=String(qe);function te(a){"?"==a.charAt(0)&&(a=a.substr(1));return qe(a,"&")}
function ue(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=te(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Ea(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function ve(a){if(!b)var b=window.location.href;const c=a.match(A)[1]||null,d=Ba(a.match(A)[3]||null);c&&d?(a=a.match(A),b=b.match(A),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Ba(b.match(A)[3]||null)==d&&(Number(b.match(A)[4]||null)||null)==(Number(a.match(A)[4]||null)||null):!0;return a}
function re(a){return a&&a.match(oe)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function we(a,b){"function"===typeof a&&(a=le(a));return window.setTimeout(a,b)}
;[...mc];let xe=!1;function ye(a,b){const c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=ze(a,b);const d=Ae(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");const e=b.context||u;let f=!1,g;fetch(a,c).then(h=>{if(!f){f=!0;g&&window.clearTimeout(g);var k=h.ok,l=m=>{m=m||{};k?b.onSuccess&&b.onSuccess.call(e,m,h):b.onError&&b.onError.call(e,m,h);b.onFinish&&b.onFinish.call(e,m,h)};
"JSON"==(b.format||"JSON")&&(k||400<=h.status&&500>h.status)?h.json().then(l,function(){l(null)}):l(null)}}).catch(()=>{b.onError&&b.onError.call(e,{},{})});
a=b.timeout||0;b.onFetchTimeout&&0<a&&(g=we(()=>{f||(f=!0,window.clearTimeout(g),b.onFetchTimeout.call(b.context||u))},a))}
function ze(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);const c=N("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ue(a,b||{},!0);return a}
function Ae(a,b){const c=N("XSRF_FIELD_NAME"),d=N("XSRF_TOKEN");var e=b.postBody||"",f=b.postParams;var g=N("XSRF_FIELD_NAME");let h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Ba(a.match(A)[3]||null)&&!b.withCredentials&&Ba(a.match(A)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=te(e),ua(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):
Ea(e));f=e||f&&!ra(f);!xe&&f&&"POST"!=b.method&&(xe=!0,me(Error("AJAX request with postData should use POST")));return e}
;w("ytglobal.prefsUserPrefsPrefs_",v("ytglobal.prefsUserPrefsPrefs_")||{});function Be(){return"INNERTUBE_API_KEY"in L&&"INNERTUBE_API_VERSION"in L}
function Ce(){return{innertubeApiKey:N("INNERTUBE_API_KEY"),innertubeApiVersion:N("INNERTUBE_API_VERSION"),ea:N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Aa:N("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ba:N("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:N("INNERTUBE_CONTEXT_CLIENT_VERSION"),qa:N("INNERTUBE_CONTEXT_HL"),pa:N("INNERTUBE_CONTEXT_GL"),Ca:N("INNERTUBE_HOST_OVERRIDE")||"",Ea:!!N("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Da:!!N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:N("SERIALIZED_CLIENT_CONFIG_DATA")}}
function De(a){const b={client:{hl:a.qa,gl:a.pa,clientName:a.Aa,clientVersion:a.innertubeContextClientVersion,configInfo:a.ea}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=u.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=ee();""!==c&&(b.client.experimentsToken=c);c=fe();0<c.length&&(b.request={internalExperimentFlags:c});Ee(a,void 0,b);N("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(b.user={onBehalfOfUser:N("DELEGATED_SESSION_ID")});a=Object;
c=a.assign;var d=b.client,e=N("DEVICE","");const f={};for(const [g,h]of Object.entries(te(e))){e=g;const k=h;"cbrand"===e?f.deviceMake=k:"cmodel"===e?f.deviceModel=k:"cbr"===e?f.browserName=k:"cbrver"===e?f.browserVersion=k:"cos"===e?f.osName=k:"cosver"===e?f.osVersion=k:"cplatform"===e&&(f.platform=k)}b.client=c.call(a,d,f);return b}
function Fe(a){const b=new qd,c=new jd;C(c,1,a.qa);C(c,2,a.pa);C(c,16,a.Ba);C(c,17,a.innertubeContextClientVersion);if(a.ea){var d=a.ea,e=new hd;d.coldConfigData&&C(e,1,d.coldConfigData);d.appInstallData&&C(e,6,d.appInstallData);d.coldHashData&&C(e,3,d.coldHashData);d.hotHashData&&C(e,5,d.hotHashData);D(c,62,e)}(d=u.devicePixelRatio)&&1!=d&&C(c,65,d);d=ee();""!==d&&C(c,54,d);d=fe();if(0<d.length){e=new ld;for(let f=0;f<d.length;f++){const g=new gd;C(g,1,d[f].key);g.setValue(d[f].value);Mb(e,15,gd,
g)}D(b,5,e)}Ee(a,c);N("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(a=new od,C(a,3,N("DELEGATED_SESSION_ID")));a=N("DEVICE","");for(const [f,g]of Object.entries(te(a)))a=f,d=g,"cbrand"===a?C(c,12,d):"cmodel"===a?C(c,13,d):"cbr"===a?C(c,87,d):"cbrver"===a?C(c,88,d):"cos"===a?C(c,18,d):"cosver"===a?C(c,19,d):"cplatform"===a&&C(c,42,d);D(b,1,c);return b}
function Ee(a,b,c){if(a.appInstallData)if(b){let d;c=null!=(d=Kb(b,hd,62))?d:new hd;C(c,6,a.appInstallData);D(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ge(a,b,c={}){let d={};O("enable_web_eom_visitor_data")&&N("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":N("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||N("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.pb||N("AUTHORIZATION"))||(a?b=`Bearer ${v("gapi.auth.getToken")().ob}`:b=wc());b&&(d.Authorization=b,d["X-Goog-AuthUser"]=N("SESSION_INDEX",0),O("pageid_as_header_web")&&(d["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));return d}
;const He=window;var P=He.ytcsi&&He.ytcsi.now?He.ytcsi.now:He.performance&&He.performance.timing&&He.performance.now&&He.performance.timing.navigationStart?()=>He.performance.timing.navigationStart+He.performance.now():()=>(new Date).getTime();function Ie(a,b){Je(a,2,b)}
var Ke=class{i(a){Je(a,1)}};function Je(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);const d=v("yt.scheduler.instance.addJob");d?d(a,b,c):void 0===c?a():we(a,c||0)}
var Le=class extends Ke{start(){const a=v("yt.scheduler.instance.start");a&&a()}};Le.i||(Le.i=new Le);var Me=Le.i;const Ne=[];let Oe,Pe=!1;function Qe(a){Pe||(Oe?Oe.handleError(a):(Ne.push({type:"ERROR",payload:a}),10<Ne.length&&Ne.shift()))}
function Re(a,b){Pe||(Oe?Oe.V(a,b):(Ne.push({type:"EVENT",eventType:a,payload:b}),10<Ne.length&&Ne.shift()))}
;var Q=class extends Error{constructor(a,...b){super(a);this.args=[...b]}};function Se(){if(void 0!==N("DATASYNC_ID"))return N("DATASYNC_ID");throw new Q("Datasync ID not set","unknown");}
;function Te(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Ue(a){return a.substr(0,a.indexOf(":"))||a}
;const Ve={AUTH_INVALID:"No user identifier specified.",EXPLICIT_ABORT:"Transaction was explicitly aborted.",IDB_NOT_SUPPORTED:"IndexedDB is not supported.",MISSING_INDEX:"Index not created.",MISSING_OBJECT_STORES:"Object stores not created.",DB_DELETED_BY_MISSING_OBJECT_STORES:"Database is deleted because expected object stores were not created.",DB_REOPENED_BY_MISSING_OBJECT_STORES:"Database is reopened because expected object stores were not created.",UNKNOWN_ABORT:"Transaction was aborted for unknown reasons.",
QUOTA_EXCEEDED:"The current transaction exceeded its quota limitations.",QUOTA_MAYBE_EXCEEDED:"The current transaction may have failed because of exceeding quota limitations.",EXECUTE_TRANSACTION_ON_CLOSED_DB:"Can't start a transaction on a closed database",INCOMPATIBLE_DB_VERSION:"The binary is incompatible with the database version"},We={AUTH_INVALID:"ERROR",EXECUTE_TRANSACTION_ON_CLOSED_DB:"WARNING",EXPLICIT_ABORT:"IGNORED",IDB_NOT_SUPPORTED:"ERROR",MISSING_INDEX:"WARNING",MISSING_OBJECT_STORES:"ERROR",
DB_DELETED_BY_MISSING_OBJECT_STORES:"WARNING",DB_REOPENED_BY_MISSING_OBJECT_STORES:"WARNING",QUOTA_EXCEEDED:"WARNING",QUOTA_MAYBE_EXCEEDED:"WARNING",UNKNOWN_ABORT:"WARNING",INCOMPATIBLE_DB_VERSION:"WARNING"},Xe={AUTH_INVALID:!1,EXECUTE_TRANSACTION_ON_CLOSED_DB:!1,EXPLICIT_ABORT:!1,IDB_NOT_SUPPORTED:!1,MISSING_INDEX:!1,MISSING_OBJECT_STORES:!1,DB_DELETED_BY_MISSING_OBJECT_STORES:!1,DB_REOPENED_BY_MISSING_OBJECT_STORES:!1,QUOTA_EXCEEDED:!1,QUOTA_MAYBE_EXCEEDED:!0,UNKNOWN_ABORT:!0,INCOMPATIBLE_DB_VERSION:!1};
var R=class extends Q{constructor(a,b={},c=Ve[a],d=We[a],e=Xe[a]){super(c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,R.prototype)}},Ye=class extends R{constructor(a,b){super("MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Ve.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Ye.prototype)}},Ze=class extends Error{constructor(a,b){super();this.index=
a;this.objectStore=b;Object.setPrototypeOf(this,Ze.prototype)}};const $e=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function af(a,b,c,d){b=Ue(b);let e;e=a instanceof Error?a:Error(`Unexpected error: ${a}`);if(e instanceof R)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new R("QUOTA_EXCEEDED",a);if(Na&&"UnknownError"===e.name)return new R("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Ze)return new R("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&$e.some(f=>e.message.includes(f)))return new R("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new R("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",zb:e.name})];e.level="WARNING";return e}
function bf(a,b,c){return new R("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:void 0}})}
;function cf(a){if(!a)throw Error();throw a;}
function df(a){return a}
var ef=class{constructor(a){this.i=a}};function ff(a){return new gf(new ef((b,c)=>{a instanceof gf?a.then(b,c):b(a)}))}
function hf(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");const f=c(a.state.value);f instanceof gf?jf(a,b,f,d,e):d(f)}catch(f){e(f)}}
function kf(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");const f=c(a.state.reason);f instanceof gf?jf(a,b,f,d,e):d(f)}catch(f){e(f)}}
function jf(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(f=>{f instanceof gf?jf(a,b,f,d,e):d(f)},f=>{e(f)})}
var gf=class{constructor(a){this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;const b=d=>{if("PENDING"===this.state.status){this.state={status:"FULFILLED",value:d};for(const e of this.i)e()}},c=d=>{if("PENDING"===this.state.status){this.state={status:"REJECTED",
reason:d};for(const e of this.onRejected)e()}};
try{a(b,c)}catch(d){c(d)}}static all(a){return new gf(new ef((b,c)=>{const d=[];let e=a.length;0===e&&b(d);for(let f=0;f<a.length;++f)ff(a[f]).then(g=>{d[f]=g;e--;0===e&&b(d)}).catch(g=>{c(g)})}))}static reject(a){return new gf(new ef((b,c)=>{c(a)}))}then(a,b){const c=null!=a?a:df,d=null!=b?b:cf;
return new gf(new ef((e,f)=>{"PENDING"===this.state.status?(this.i.push(()=>{hf(this,this,c,e,f)}),this.onRejected.push(()=>{kf(this,this,d,e,f)})):"FULFILLED"===this.state.status?hf(this,this,c,e,f):"REJECTED"===this.state.status&&kf(this,this,d,e,f)}))}catch(a){return this.then(void 0,a)}};function lf(a,b,c){const d=()=>{try{a.removeEventListener("success",e),a.removeEventListener("error",f)}catch(g){}},e=()=>{b(a.result);
d()},f=()=>{c(a.error);
d()};
a.addEventListener("success",e);a.addEventListener("error",f)}
function mf(a){return new Promise((b,c)=>{lf(a,b,c)})}
function S(a){return new gf(new ef((b,c)=>{lf(a,b,c)}))}
;function nf(a,b){return new gf(new ef((c,d)=>{const e=()=>{const f=a?b(a):null;f?f.then(g=>{a=g;e()},d):c()};
e()}))}
;function of(a,b,c,d){return r(function*(){const e={mode:"readonly",I:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?e.mode=c:Object.assign(e,c);a.transactionCount++;const f=e.I?3:1;let g=0,h;for(;!h;){g++;const l=Math.round(P());try{const m=a.i.transaction(b,e.mode);var k=d;const p=new pf(m),t=yield qf(p,k),n=Math.round(P());rf(a,l,n,g,void 0,b.join(),e);return t}catch(m){k=Math.round(P());const p=af(m,a.i.name,b.join(),a.i.version);if(p instanceof R&&!p.i||g>=f)rf(a,l,k,g,p,b.join(),e),
h=p}}return Promise.reject(h)})}
function sf(a,b,c){a=a.i.createObjectStore(b,c);return new tf(a)}
function uf(a,b,c,d){return of(a,[b],{mode:"readwrite",I:!0},e=>{e=e.objectStore(b);return S(e.i.put(c,d))})}
function rf(a,b,c,d,e,f,g){b=c-b;e?(e instanceof R&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Re("QUOTA_EXCEEDED",{dbName:Ue(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof R&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),Re("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),vf(a,!1,d,f,b,g.tag),Qe(e)):vf(a,!0,d,f,b,g.tag)}
function vf(a,b,c,d,e,f="IDB_TRANSACTION_TAG_UNKNOWN"){Re("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:f})}
var wf=class{constructor(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(P());this.j=!1}add(a,b,c){return of(this,[a],{mode:"readwrite",I:!0},d=>d.objectStore(a).add(b,c))}clear(a){return of(this,[a],{mode:"readwrite",
I:!0},b=>b.objectStore(a).clear())}close(){this.i.close();
let a;(null==(a=this.options)?0:a.closed)&&this.options.closed()}count(a,b){return of(this,[a],{mode:"readonly",I:!0},c=>c.objectStore(a).count(b))}delete(a,b){return of(this,[a],{mode:"readwrite",
I:!0},c=>c.objectStore(a).delete(b))}get(a,b){return of(this,[a],{mode:"readonly",
I:!0},c=>c.objectStore(a).get(b))}objectStoreNames(){return Array.from(this.i.objectStoreNames)}getName(){return this.i.name}};
function xf(a,b,c){a=a.i.openCursor(b.query,b.direction);return yf(a).then(d=>nf(d,c))}
function zf(a,b){return xf(a,{query:b},c=>c.delete().then(()=>c.continue())).then(()=>{})}
var tf=class{constructor(a){this.i=a}add(a,b){return S(this.i.add(a,b))}autoIncrement(){return this.i.autoIncrement}clear(){return S(this.i.clear()).then(()=>{})}count(a){return S(this.i.count(a))}delete(a){return a instanceof IDBKeyRange?zf(this,a):S(this.i.delete(a))}get(a){return S(this.i.get(a))}index(a){try{return new Af(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Ze(a,this.i.name);
throw b;}}getName(){return this.i.name}keyPath(){return this.i.keyPath}};function qf(a,b){const c=new Promise((d,e)=>{try{b(a).then(f=>{d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(([d])=>d)}
var pf=class{constructor(a){this.i=a;this.l=new Map;this.j=!1;this.done=new Promise((b,c)=>{this.i.addEventListener("complete",()=>{b()});
this.i.addEventListener("error",d=>{d.currentTarget===d.target&&c(this.i.error)});
this.i.addEventListener("abort",()=>{var d=this.i.error;if(d)c(d);else if(!this.j){d=R;var e=this.i.objectStoreNames;const f=[];for(let g=0;g<e.length;g++){const h=e.item(g);if(null===h)throw Error("Invariant: item in DOMStringList is null");f.push(h)}d=new d("UNKNOWN_ABORT",{objectStoreNames:f.join(),dbName:this.i.db.name,mode:this.i.mode});c(d)}})})}abort(){this.i.abort();
this.j=!0;throw new R("EXPLICIT_ABORT");}objectStore(a){a=this.i.objectStore(a);let b=this.l.get(a);b||(b=new tf(a),this.l.set(a,b));return b}};function Bf(a,b,c){const {query:d=null,direction:e="next"}=b;a=a.i.openCursor(d,e);return yf(a).then(f=>nf(f,c))}
var Af=class{constructor(a){this.i=a}count(a){return S(this.i.count(a))}delete(a){return Bf(this,{query:a},b=>b.delete().then(()=>b.continue()))}get(a){return S(this.i.get(a))}getKey(a){return S(this.i.getKey(a))}keyPath(){return this.i.keyPath}unique(){return this.i.unique}};
function yf(a){return S(a).then(b=>b?new Cf(a,b):null)}
var Cf=class{constructor(a,b){this.request=a;this.cursor=b}advance(a){this.cursor.advance(a);return yf(this.request)}continue(a){this.cursor.continue(a);return yf(this.request)}delete(){return S(this.cursor.delete()).then(()=>{})}getKey(){return this.cursor.key}da(){return this.cursor.value}update(a){return S(this.cursor.update(a))}};function Df(a,b,c){return new Promise((d,e)=>{let f;f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);const g=c.blocked,h=c.blocking,k=c.Ka,l=c.upgrade,m=c.closed;let p;const t=()=>{p||(p=new wf(f.result,{closed:m}));return p};
f.addEventListener("upgradeneeded",n=>{try{if(null===n.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");n.dataLoss&&"none"!==n.dataLoss&&Re("IDB_DATA_CORRUPTED",{reason:n.dataLossMessage||"unknown reason",dbName:Ue(a)});const x=t(),y=new pf(f.transaction);l&&l(x,G=>n.oldVersion<G&&n.newVersion>=G,y);
y.done.catch(G=>{e(G)})}catch(x){e(x)}});
f.addEventListener("success",()=>{const n=f.result;h&&n.addEventListener("versionchange",()=>{h(t())});
n.addEventListener("close",()=>{Re("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ue(a),dbVersion:n.version});k&&k()});
d(t())});
f.addEventListener("error",()=>{e(f.error)});
g&&f.addEventListener("blocked",()=>{g()})})}
function Ef(a,b,c={}){return Df(a,b,c)}
function Ff(a,b={}){return r(function*(){try{const c=self.indexedDB.deleteDatabase(a),d=b.blocked;d&&c.addEventListener("blocked",()=>{d()});
yield mf(c)}catch(c){throw af(c,a,"",-1);}})}
;function Gf(a){return new Promise(b=>{Ie(()=>{b()},a)})}
function Hf(a,b){return new R("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function If(a){if(!a.m)throw Hf(a);if(a.i)return a.i;let b;const c=()=>{a.i===b&&(a.i=void 0)},d={blocking:f=>{f.close()},
closed:c,Ka:c,upgrade:a.options.upgrade},e=()=>r(function*(){var f,g=null!=(f=Error().stack)?f:"";try{const k=yield a.l(a.name,a.options.version,d);f=k;var h=a.options;const l=[];for(const m of Object.keys(h.M)){const {S:p,Db:t=Number.MAX_VALUE}=h.M[m];!(f.i.version>=p)||f.i.version>=t||f.i.objectStoreNames.contains(m)||l.push(m)}if(0!==l.length){const m=Object.keys(a.options.M),p=k.objectStoreNames();if(a.u<de("ytidb_reopen_db_retries",0))return a.u++,k.close(),Qe(new R("DB_REOPENED_BY_MISSING_OBJECT_STORES",
{dbName:a.name,expectedObjectStores:m,foundObjectStores:p})),e();if(a.o<de("ytidb_remake_db_retries",1))return a.o++,O("ytidb_remake_db_enable_backoff_delay")&&(yield Gf(a.j),a.j*=2),yield a.delete(),Qe(new R("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:p})),e();throw new Ye(p,m);}return k}catch(k){if(k instanceof DOMException?"VersionError"===k.name:"DOMError"in self&&k instanceof DOMError?"VersionError"===k.name:k instanceof Object&&"message"in k&&
"An attempt was made to open a database using a lower version than the existing version."===k.message){g=yield a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0}));h=g.i.version;if(void 0!==a.options.version&&h>a.options.version+1)throw g.close(),a.m=!1,Hf(a,h);return g}c();k instanceof Error&&!O("ytidb_async_stack_killswitch")&&(k.stack=`${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);let l;throw af(k,a.name,"",null!=(l=a.options.version)?l:-1);}});
b=e();a.i=b;return a.i}
function Jf(a,b){if(!b)throw bf("openWithToken",Ue(a.name));return If(a)}
var Kf=class{constructor(a,b){this.name=a;this.options=b;this.m=!0;this.u=this.o=0;this.j=500}l(a,b,c={}){return Ef(a,b,c)}delete(a={}){return Ff(this.name,a)}};const Lf=new Kf("YtIdbMeta",{M:{databases:{S:1}},upgrade(a,b){b(1)&&sf(a,"databases",{keyPath:"actualName"})}});function Mf(a,b){return r(function*(){return of(yield Jf(Lf,b),["databases"],{I:!0,mode:"readwrite"},c=>{const d=c.objectStore("databases");return d.get(a.actualName).then(e=>{if(e?a.actualName!==e.actualName||a.publicName!==e.publicName||a.userIdentifier!==e.userIdentifier:1)return S(d.i.put(a,void 0)).then(()=>{})})})})}
function Nf(a,b){return r(function*(){if(a)return(yield Jf(Lf,b)).delete("databases",a)})}
;let Qf;const Rf=new class{constructor(){}}(new class{constructor(){}});function Sf(){return r(function*(){return!0})}
function Tf(){if(void 0!==Qf)return Qf;Pe=!0;return Qf=Sf().then(a=>{Pe=!1;return a})}
function Uf(){const a=v("ytglobal.idbToken_")||void 0;return a?Promise.resolve(a):Tf().then(b=>{(b=b?Rf:void 0)&&w("ytglobal.idbToken_",b);return b})}
;new Nc;function Vf(a){try{Se();var b=!0}catch(c){b=!1}if(!b)throw a=new R("AUTH_INVALID",{dbName:a}),Qe(a),a;b=Se();return{actualName:`${a}:${b}`,publicName:a,userIdentifier:b}}
function Wf(a,b,c,d){return r(function*(){var e,f=null!=(e=Error().stack)?e:"";e=yield Uf();if(!e)throw e=bf("openDbImpl",a,b),O("ytidb_async_stack_killswitch")||(e.stack=`${e.stack}\n${f.substring(f.indexOf("\n")+1)}`),Qe(e),e;Te(a);f=c?{actualName:a,publicName:a,userIdentifier:void 0}:Vf(a);try{return yield Mf(f,e),yield Ef(f.actualName,b,d)}catch(g){try{yield Nf(f.actualName,e)}catch(h){}throw g;}})}
function Xf(a,b,c={}){return Wf(a,b,!1,c)}
function Yf(a,b,c={}){return Wf(a,b,!0,c)}
function Zf(a,b={}){return r(function*(){const c=yield Uf();if(c){Te(a);var d=Vf(a);yield Ff(d.actualName,b);yield Nf(d.actualName,c)}})}
function $f(a,b={}){return r(function*(){const c=yield Uf();c&&(Te(a),yield Ff(a,b),yield Nf(a,c))})}
;function ag(a){this.version=1;this.args=a}
;function bg(){var a=cg;this.topic="screen-created";this.i=a}
bg.prototype.toString=function(){return this.topic};const dg=v("ytPubsub2Pubsub2Instance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.ka;J.prototype.publish=J.prototype.ha;J.prototype.clear=J.prototype.clear;w("ytPubsub2Pubsub2Instance",dg);const eg=v("ytPubsub2Pubsub2SubscribedKeys")||{};w("ytPubsub2Pubsub2SubscribedKeys",eg);const fg=v("ytPubsub2Pubsub2TopicToKeys")||{};w("ytPubsub2Pubsub2TopicToKeys",fg);const gg=v("ytPubsub2Pubsub2IsAsync")||{};w("ytPubsub2Pubsub2IsAsync",gg);
w("ytPubsub2Pubsub2SkipSubKey",null);function hg(a){var b=ig;const c=jg();c&&c.publish.call(c,b.toString(),b,a)}
function kg(a){var b=ig;const c=jg();if(!c)return 0;const d=c.subscribe(b.toString(),(e,f)=>{var g=v("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=()=>{if(eg[d])try{if(f&&b instanceof bg&&b!=e)try{var h=b.i,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.sa){const n=new h;h.sa=n.version}var l=h.sa}catch(n){}if(!l||k.version!=l)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{l=Reflect;var m=l.construct;
{var p=k.args;const n=p.length;if(0<n){const x=Array(n);for(k=0;k<n;k++)x[k]=p[k];var t=x}else t=[]}f=m.call(l,h,t)}catch(n){throw n.message="yt.pubsub2.Data.deserialize(): "+n.message,n;}}catch(n){throw n.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+n.message,n;}a.call(window,f)}catch(n){me(n)}},gg[b.toString()]?v("yt.scheduler.instance")?Me.i(g):we(g,0):g())});
eg[d]=!0;fg[b.toString()]||(fg[b.toString()]=[]);fg[b.toString()].push(d);return d}
function lg(){var a=mg;const b=kg(function(c){a.apply(void 0,arguments);ng(b)});
return b}
function ng(a){const b=jg();b&&("number"===typeof a&&(a=[a]),na(a,c=>{b.unsubscribeByKey(c);delete eg[c]}))}
function jg(){return v("ytPubsub2Pubsub2Instance")}
;function og(a,b){let c;return()=>{c||(c=new pg(a,b));return c}}
var pg=class extends Kf{constructor(a,b){super(a,b);this.options=b;Te(a)}l(a,b,c={}){return(this.options.ia?Yf:Xf)(a,b,Object.assign({},c))}delete(a={}){return(this.options.ia?$f:Zf)(this.name,a)}};const qg=["client.name","client.version"];function rg(a){if(!a.errorMetadata||!a.errorMetadata.kvPairs)return a;a.errorMetadata.kvPairs=a.errorMetadata.kvPairs.filter(b=>b.key?qg.includes(b.key):!1);
return a}
;var sg;sg=og("ServiceWorkerLogsDatabase",{M:{SWHealthLog:{S:1}},ia:!0,upgrade:(a,b)=>{b(1)&&sf(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function tg(a,b){return r(function*(){var c=yield Jf(sg(),b),d=N("INNERTUBE_CONTEXT_CLIENT_NAME",0);const e=Object.assign({},a);e.clientError&&(e.clientError=rg(e.clientError));e.interface=d;return uf(c,"SWHealthLog",e)})}
;const ug=u.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:0};w("ytNetworklessLoggingInitializationOptions",ug);function vg(a,b,c){!N("VISITOR_DATA")&&.01>Math.random()&&ne(new Q("Missing VISITOR_DATA when sending innertube request.","log_event",b,c));if(!a.isReady())throw a=new Q("innertube xhrclient not ready","log_event",b,c),me(a),a;const d={headers:c.headers||{},method:"POST",postParams:b,postBody:c.postBody,postBodyFormat:c.postBodyFormat||"JSON",onTimeout:()=>{c.onTimeout()},
onFetchTimeout:c.onTimeout,onSuccess:(m,p)=>{if(c.onSuccess)c.onSuccess(p)},
onFetchSuccess:m=>{if(c.onSuccess)c.onSuccess(m)},
onError:(m,p)=>{if(c.onError)c.onError(p)},
onFetchError:m=>{if(c.onError)c.onError(m)},
timeout:c.timeout,withCredentials:!0};d.headers["Content-Type"]||(d.headers["Content-Type"]="application/json");b="";var e=a.config_.Ca;e&&(b=e);e=Ge(a.config_.Ea||!1,b,c);Object.assign(d.headers,e);(e=d.headers.Authorization)&&!b&&(d.headers["x-origin"]=window.location.origin);const f=`/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;let g={alt:"json"},h=a.config_.Da&&e;h=h&&e.startsWith("Bearer");h||(g.key=a.config_.innertubeApiKey);const k=ue(`${b}${f}`,g||{},!0),l=()=>{try{ye(k,
d)}catch(m){if("InvalidAccessError"==m.name)ne(Error("An extension is blocking network request."));else throw m;}};
!O("use_new_nwl")&&v("ytNetworklessLoggingInitializationOptions")&&ug.isNwlInitialized?Tf().then(m=>{l(m)}):l(!1)}
class wg{constructor(a){this.config_=null;a?this.config_=a:Be()&&(this.config_=Ce())}isReady(){!this.config_&&Be()&&(this.config_=Ce());return!!this.config_}};let xg=0;w("ytDomDomGetNextId",v("ytDomDomGetNextId")||(()=>++xg));w("ytEventsEventsListeners",u.ytEventsEventsListeners||{});w("ytEventsEventsCounter",u.ytEventsEventsCounter||{count:0});function yg(){const a=v("_lact",window);var b;null==a?b=-1:b=Math.max(Date.now()-a,0);return b}
;u.ytPubsubPubsubInstance||new J;const zg=de("initial_gel_batch_timeout",2E3),Ag=Math.pow(2,16)-1;let T=void 0;class Bg{constructor(){this.l=this.i=this.j=0}}const Cg=new Bg,Dg=new Bg;let Eg=!0;const Fg=u.ytLoggingTransportGELQueue_||new Map,Gg=u.ytLoggingTransportGELProtoQueue_||new Map,Hg=u.ytLoggingTransportTokensToCttTargetIds_||{},Ig=u.ytLoggingTransportTokensToJspbCttTargetIds_||{};function Jg(a,b){if("log_event"===a.endpoint){var c=Kg(a),d=Fg.get(c)||[];Fg.set(c,d);d.push(a.payload);Lg(b,d,c)}}
function Mg(a,b){if("log_event"===a.endpoint){var c=Kg(a,!0),d=Gg.get(c)||[];Gg.set(c,d);a=a.payload.toJSON();d.push(a);Lg(b,d,c,!0)}}
function Lg(a,b,c,d=!1){a&&(T=new a);a=de("tvhtml5_logging_max_batch")||de("web_logging_max_batch")||100;const e=P(),f=d?Dg.l:Cg.l;b.length>=a?Ng({writeThenSend:!0},O("flush_only_full_queue")?c:void 0,d):10<=e-f&&(Og(d),d?Dg.l=e:Cg.l=e)}
function Pg(a,b){if("log_event"===a.endpoint){var c=Kg(a),d=new Map;d.set(c,[a.payload]);b&&(T=new b);return new H(e=>{T&&T.isReady()?Qg(d,e,{bypassNetworkless:!0},!0):e()})}}
function Rg(a,b){if("log_event"===a.endpoint){var c=Kg(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(T=new b);return new H(e=>{T&&T.isReady()?Sg(d,e,{bypassNetworkless:!0},!0):e()})}}
function Kg(a,b=!1){var c="";if(a.L)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;const d=new Vd;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Ib(d,2,Ud,c.playlistId);Ig[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Hg[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Ng(a={},b,c=!1){new H(d=>{c?(window.clearTimeout(Dg.j),window.clearTimeout(Dg.i),Dg.i=0):(window.clearTimeout(Cg.j),window.clearTimeout(Cg.i),Cg.i=0);if(T&&T.isReady())if(void 0!==b)if(c){var e=new Map,f=Gg.get(b)||[];e.set(b,f);Sg(e,d,a);Gg.delete(b)}else e=new Map,f=Fg.get(b)||[],e.set(b,f),Qg(e,d,a),Fg.delete(b);else c?(Sg(Gg,d,a),Gg.clear()):(Qg(Fg,d,a),Fg.clear());else Og(c),d()})}
function Og(a=!1){if(O("web_gel_timeout_cap")&&(!a&&!Cg.i||a&&!Dg.i)){var b=we(()=>{Ng({writeThenSend:!0},void 0,a)},6E4);
a?Dg.i=b:Cg.i=b}window.clearTimeout(a?Dg.j:Cg.j);b=N("LOGGING_BATCH_TIMEOUT",de("web_gel_debounce_ms",1E4));O("shorten_initial_gel_batch_timeout")&&Eg&&(b=zg);b=we(()=>{Ng({writeThenSend:!0},void 0,a)},b);
a?Dg.j=b:Cg.j=b}
function Qg(a,b,c={},d){var e=T;const f=Math.round(P());let g=a.size;for(const [l,m]of a){var h=l,k=m;a=sa({context:De(e.config_||Ce())});a.events=k;(k=Hg[h])&&Tg(a,h,k);delete Hg[h];h="visitorOnlyApprovedKey"===h;Ug(a,f,h);Vg(c);vg(e,a,Wg(c,h,()=>{g--;g||b()},()=>{g--;
g||b()},d));
Eg=!1}}
function Sg(a,b,c={},d){var e=T;const f=Math.round(P());let g=a.size;for(const [m,p]of a){var h=m,k=p;a=new Xd;var l=Fe(e.config_||Ce());D(a,1,l);k=Xg(k);for(l=0;l<k.length;l++)Mb(a,3,K,k[l]);(k=Ig[h])&&Yg(a,h,k);delete Ig[h];h="visitorOnlyApprovedKey"===h;Zg(a,f,h);Vg(c);a=Ob(a);h=Wg(c,h,()=>{g--;g||b()},()=>{g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=a;vg(e,"",h);Eg=!1}}
function Vg(a){O("always_send_and_write")&&(a.writeThenSend=!1)}
function Wg(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,yb:a,L:b,sb:!!e,headers:{},postBodyFormat:"",postBody:""}}
function Ug(a,b,c){a.requestTimeMs=String(b);O("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=N("EVENT_ID"))&&(c=$g(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Zg(a,b,c){C(a,2,b);if(!c&&(b=N("EVENT_ID"))){c=$g();const d=new Td;C(d,1,b);C(d,2,c);D(a,5,d)}}
function $g(){let a=N("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Ag/2));a++;a>Ag&&(a=1);M("BATCH_CLIENT_COUNTER",a);return a}
function Tg(a,b,c){let d;if(c.videoId)d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Yg(a,b,c){let d;if(B(c,1===Jb(c,Ud)?1:-1))d=1;else if(c.getPlaylistId())d=2;else return;D(a,4,c);a=Kb(a,qd,1)||new qd;c=Kb(a,od,3)||new od;const e=new md;e.setToken(b);C(e,1,d);Mb(c,12,md,e);D(a,3,c)}
function Xg(a){const b=[];for(let c=0;c<a.length;c++)try{b.push(new K(a[c]))}catch(d){me(new Q("Transport failed to deserialize "+String(a[c])))}return b}
;const ah=u.ytLoggingGelSequenceIdObj_||{};function U(a,b,c,d={}){const e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=yg();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};O("log_sequence_info_on_gel_web")&&d.B&&(a=e.context,b=d.B,b={index:bh(b),groupKey:b},a.sequence=b,d.oa&&delete ah[d.B]);(d.Ha?Pg:Jg)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,L:d.L},c)}
function bh(a){ah[a]=a in ah?ah[a]+1:0;return ah[a]}
;let ch=wg;function V(a,b,c={}){let d=ch;N("ytLoggingEventsDefaultDisabled",!1)&&ch==wg&&(d=null);U(a,b,d,c)}
;const dh=[{ga:a=>`Cannot read property '${a.key}'`,
W:{Error:[{A:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{A:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{A:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{A:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{A:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{A:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{A:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{ga:a=>`Cannot call '${a.key}'`,
W:{TypeError:[{A:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{A:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{A:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{A:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{A:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{A:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}},{ga:a=>`${a.key} is not defined`,
W:{ReferenceError:[{A:/(.*) is not defined/,groups:["key"]},{A:/Can't find variable: (.*)/,groups:["key"]}]}}];var fh={H:[],G:[{ta:eh,weight:500}]};function eh(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function gh(){if(!hh){var a=hh=new ih;a.H.length=0;a.G.length=0;jh(a,fh)}return hh}
function jh(a,b){b.H&&a.H.push.apply(a.H,b.H);b.G&&a.G.push.apply(a.G,b.G)}
var ih=class{constructor(){this.G=[];this.H=[]}},hh;const kh=new J;function lh(a){const b=a.length;let c=0;const d=()=>a.charCodeAt(c++);
do{var e=mh(d);if(Infinity===e)break;const f=e>>3;switch(e&7){case 0:e=mh(d);if(2===f)return e;break;case 1:if(2===f)return;c+=8;break;case 2:e=mh(d);if(2===f)return a.substr(c,e);c+=e;break;case 5:if(2===f)return;c+=4;break;default:return}}while(c<b)}
function mh(a){let b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function nh(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=oh(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=lh(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?oh(`${f}.ve`,g,h,k):0;d+=f;d+=oh(e,a[e],b,c);if(500<d)break}}else c[b]=ph(a),d+=c[b].length;else c[b]=ph(a),d+=c[b].length;return d}
function oh(a,b,c,d){c+=`.${a}`;a=ph(b);d[c]=a;return c.length+a.length}
function ph(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return`unable to serialize ${typeof a} (${b.message})`}}
;const qh=u.ytLoggingGelSequenceIdObj_||{};function rh(a,b,c={}){var d=Math.round(c.timestamp||P());C(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=yg();d=new Qd;C(d,1,c.timestamp||!isFinite(e)?-1:e);if(O("log_sequence_info_on_gel_web")&&c.B){e=c.B;const f=bh(e),g=new Pd;C(g,2,f);C(g,1,e);D(d,3,g);c.oa&&delete qh[c.B]}D(a,33,d);(c.Ha?Rg:Mg)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,L:c.L},b)}
;function sh(a,b={}){let c=!1;N("ytLoggingEventsDefaultDisabled",!1)&&ch===wg&&(c=!0);rh(a,c?null:ch,b)}
;function th(a,b,c){const d=new K;E(d,72,Rd,a);c?rh(d,c,b):sh(d,b)}
function uh(a,b,c){const d=new K;E(d,73,Rd,a);c?rh(d,c,b):sh(d,b)}
function vh(a,b,c){const d=new K;E(d,78,Rd,a);c?rh(d,c,b):sh(d,b)}
function wh(a,b,c){const d=new K;E(d,208,Rd,a);c?rh(d,c,b):sh(d,b)}
function xh(a,b,c){const d=new K;E(d,156,Rd,a);c?rh(d,c,b):sh(d,b)}
function yh(a,b,c){const d=new K;E(d,215,Rd,a);c?rh(d,c,b):sh(d,b)}
function zh(a,b,c){const d=new K;E(d,111,Rd,a);c?rh(d,c,b):sh(d,b)}
;var Ah=new Set,Bh=0,Ch=0,Dh=0,Eh=[];const Fh=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Gh(a){Hh(a)}
function Ih(a){Hh(a,"WARNING")}
function Hh(a,b="ERROR"){var c={};c.name=N("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=N("INNERTUBE_CONTEXT_CLIENT_VERSION");Jh(a,c||{},b)}
function Jh(a,b,c="ERROR"){if(a){a.hasOwnProperty("level")&&a.level&&(c=a.level);if(O("console_log_js_exceptions")){var d=[];d.push(`Name: ${a.name}`);d.push(`Message: ${a.message}`);a.hasOwnProperty("params")&&d.push(`Error Params: ${JSON.stringify(a.params)}`);a.hasOwnProperty("args")&&d.push(`Error args: ${JSON.stringify(a.args)}`);d.push(`File name: ${a.fileName}`);d.push(`Stacktrace: ${a.stack}`);window.console.log(d.join("\n"),a)}if(!(5<=Bh)){d=Eh;var e=yc(a);const G=e.message||"Unknown Error",
Ca=e.name||"UnknownError";var f=e.stack||a.j||"Not available";if(f.startsWith(`${Ca}: ${G}`)){var g=f.split("\n");g.shift();f=g.join("\n")}g=e.lineNumber||"Not available";e=e.fileName||"Not available";let I=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var h=0;h<a.args.length&&!(I=nh(a.args[h],`params.${h}`,b,I),500<=I);h++);else if(a.hasOwnProperty("params")&&a.params){const Y=a.params;if("object"===typeof a.params)for(h in Y){if(!Y[h])continue;const Of=`params.${h}`,Pf=ph(Y[h]);b[Of]=
Pf;I+=Of.length+Pf.length;if(500<I)break}else b.params=ph(Y)}if(d.length)for(h=0;h<d.length&&!(I=nh(d[h],`params.context.${h}`,b,I),500<=I);h++);navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);b={message:G,name:Ca,lineNumber:g,fileName:e,stack:f,params:b,sampleWeight:1};d=Number(a.columnNumber);isNaN(d)||(b.lineNumber=`${b.lineNumber}:${d}`);if("IGNORED"===a.level)var k=0;else a:{a=gh();d=b;for(k of a.H)if(d.message&&d.message.match(k.Fa)){k=k.weight;break a}for(var l of a.G)if(l.ta(d)){k=
l.weight;break a}k=1}b.sampleWeight=k;k=b;for(var m of dh)if(m.W[k.name]){l=m.W[k.name];for(var p of l)if(l=k.message.match(p.A)){k.params["params.error.original"]=l[0];a=p.groups;b={};for(d=0;d<a.length;d++)b[a[d]]=l[d+1],k.params[`params.error.${a[d]}`]=l[d+1];k.message=m.ga(b);break}}k.params||(k.params={});m=gh();k.params["params.errorServiceSignature"]=`msg=${m.H.length}&cb=${m.G.length}`;k.params["params.serviceWorker"]="true";u.document&&u.document.querySelectorAll&&(k.params["params.fscripts"]=
String(document.querySelectorAll("script:not([nonce])").length));wa("sample").constructor!==va&&(k.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(k);if(0!==k.sampleWeight&&!Ah.has(k.message)){"ERROR"===c?(kh.ha("handleError",k),O("record_app_crashed_web")&&0===Dh&&1===k.sampleWeight&&(Dh++,O("errors_via_jspb")?(m=new Cd,C(m,1,1),O("report_client_error_with_app_crash_ks")||(l=new xd,C(l,1,k.message),p=new yd,D(p,3,l),l=new zd,D(l,5,p),p=new Bd,D(p,9,l),
D(m,4,p)),p=new K,E(p,20,Rd,m),sh(p)):(m={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},O("report_client_error_with_app_crash_ks")||(m.systemHealth={crashData:{clientError:{logMessage:{message:k.message}}}}),V("appCrashed",m))),Ch++):"WARNING"===c&&kh.ha("handleWarning",k);a:{if(O("errors_via_jspb")){if(Kh())var t=void 0;else{m=new ud;C(m,1,k.stack);k.fileName&&C(m,4,k.fileName);var n=k.lineNumber&&k.lineNumber.split?k.lineNumber.split(":"):[];0!==n.length&&(1!==n.length||isNaN(Number(n[0]))?2!==n.length||
isNaN(Number(n[0]))||isNaN(Number(n[1]))||(C(m,2,Number(n[0])),C(m,3,Number(n[1]))):C(m,2,Number(n[0])));n=new xd;C(n,1,k.message);C(n,3,k.name);C(n,6,k.sampleWeight);"ERROR"===c?C(n,2,2):"WARNING"===c?C(n,2,1):C(n,2,0);var x=new vd;C(x,1,!0);E(x,3,wd,m);m=new sd;C(m,3,window.location.href);p=N("FEXP_EXPERIMENTS",[]);for(b=0;b<p.length;b++)l=m,a=p[b],xb(l),Hb(l,5).push(a);p=ae();if(!be()&&p)for(var y of Object.keys(p))l=new td,C(l,1,y),l.setValue(String(p[y])),Mb(m,4,td,l);if(y=k.params)for(t of Object.keys(y))p=
new td,C(p,1,`client.${t}`),p.setValue(String(y[t])),Mb(m,4,td,p);y=N("SERVER_NAME");t=N("SERVER_VERSION");y&&t&&(p=new td,C(p,1,"server.name"),p.setValue(y),Mb(m,4,td,p),y=new td,C(y,1,"server.version"),y.setValue(t),Mb(m,4,td,y));t=new yd;D(t,1,m);D(t,2,x);D(t,3,n)}if(!t)break a;y=new K;E(y,163,Rd,t);sh(y)}else{if(Kh())t=void 0;else{y={stackTrace:k.stack};k.fileName&&(y.filename=k.fileName);t=k.lineNumber&&k.lineNumber.split?k.lineNumber.split(":"):[];0!==t.length&&(1!==t.length||isNaN(Number(t[0]))?
2!==t.length||isNaN(Number(t[0]))||isNaN(Number(t[1]))||(y.lineNumber=Number(t[0]),y.columnNumber=Number(t[1])):y.lineNumber=Number(t[0]));t={level:"ERROR_LEVEL_UNKNOWN",message:k.message,errorClassName:k.name,sampleWeight:k.sampleWeight};"ERROR"===c?t.level="ERROR_LEVEL_ERROR":"WARNING"===c&&(t.level="ERROR_LEVEL_WARNNING");y={isObfuscated:!0,browserStackInfo:y};m={pageUrl:window.location.href,kvPairs:[]};N("FEXP_EXPERIMENTS")&&(m.experimentIds=N("FEXP_EXPERIMENTS"));p=ae();if(!be()&&p)for(x of Object.keys(p))m.kvPairs.push({key:x,
value:String(p[x])});if(x=k.params)for(n of Object.keys(x))m.kvPairs.push({key:`client.${n}`,value:String(x[n])});n=N("SERVER_NAME");x=N("SERVER_VERSION");n&&x&&(m.kvPairs.push({key:"server.name",value:n}),m.kvPairs.push({key:"server.version",value:x}));t={errorMetadata:m,stackTrace:y,logMessage:t}}if(!t)break a;V("clientError",t)}("ERROR"===c||O("errors_flush_gel_always_killswitch"))&&Ng(void 0,void 0,!1)}try{Ah.add(k.message)}catch(Y){}Bh++}}}}
function Kh(){for(const a of Fh){const b=za();if(b&&0<=b.toLowerCase().indexOf(a.toLowerCase()))return!0}return!1}
;let Lh=1;function Mh(a){return new Nh({trackingParams:a})}
function Oh(a){const b=Lh++;return new Nh({veType:a,veCounter:b,elementIndex:void 0,dataElement:void 0,youtubeData:void 0,jspbYoutubeData:void 0})}
var Nh=class{constructor(a){this.i=a}getAsJson(){const a={};void 0!==this.i.trackingParams?a.trackingParams=this.i.trackingParams:(a.veType=this.i.veType,void 0!==this.i.veCounter&&(a.veCounter=this.i.veCounter),void 0!==this.i.elementIndex&&(a.elementIndex=this.i.elementIndex));void 0!==this.i.dataElement&&(a.dataElement=this.i.dataElement.getAsJson());void 0!==this.i.youtubeData&&(a.youtubeData=this.i.youtubeData);return a}getAsJspb(){const a=new Dd;void 0!==this.i.trackingParams?C(a,1,this.i.trackingParams):
(void 0!==this.i.veType&&C(a,2,this.i.veType),void 0!==this.i.veCounter&&C(a,6,this.i.veCounter),void 0!==this.i.elementIndex&&C(a,3,this.i.elementIndex));if(void 0!==this.i.dataElement){var b=this.i.dataElement.getAsJspb();D(a,7,b)}void 0!==this.i.youtubeData&&D(a,8,this.i.jspbYoutubeData);return a}toString(){return JSON.stringify(this.getAsJson())}isClientVe(){return!this.i.trackingParams&&!!this.i.veType}};let Ph=Date.now().toString();let Qh=u.ytLoggingDocDocumentNonce_;
if(!Qh){var Rh;a:{if(window.crypto&&window.crypto.getRandomValues)try{const d=Array(16),e=new Uint8Array(16);window.crypto.getRandomValues(e);for(let f=0;f<d.length;f++)d[f]=e[f];Rh=d;break a}catch(d){}const c=Array(16);for(let d=0;16>d;d++){const e=Date.now();for(let f=0;f<e%23;f++)c[d]=Math.random();c[d]=Math.floor(256*Math.random())}if(Ph){let d=1;for(let e=0;e<Ph.length;e++)c[d%16]=c[d%16]^c[(d-1)%16]/4^Ph.charCodeAt(e),d++}Rh=c}const a=Rh,b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&
63));Qh=b.join("")}var Sh=Qh;let Th=wg;var Uh={Qa:0,Oa:1,Pa:2,jb:3,Ra:4,nb:5,kb:6,mb:7,lb:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function Vh(a=0){return 0===a?"client-screen-nonce":`${"client-screen-nonce"}.${a}`}
function Wh(a=0){return 0===a?"ROOT_VE_TYPE":`${"ROOT_VE_TYPE"}.${a}`}
function Xh(a=0){return N(Wh(a))}
function Yh(a=0){return(a=Xh(a))?new Nh({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Zh(){let a=N("csn-to-ctt-auth-info");a||(a={},M("csn-to-ctt-auth-info",a));return a}
function W(a=0){a=N(Vh(a));if(!a&&!N("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
function $h(a,b,c){const d=Zh();(c=W(c))&&delete d[c];b&&(d[a]=b)}
function ai(a){return Zh()[a]}
function bi(a,b,c=0,d){if(a!==N(Vh(c))||b!==N(Wh(c)))$h(a,d,c),M(Vh(c),a),M(Wh(c),b),b=()=>{setTimeout(()=>{if(a)if(O("web_time_via_jspb")){var e=new Ed;C(e,1,Sh);C(e,2,a);O("use_default_heartbeat_client")?zh(e):zh(e,void 0,Th)}else e={clientDocumentNonce:Sh,clientScreenNonce:a},O("use_default_heartbeat_client")?V("foregroundHeartbeatScreenAssociated",e):U("foregroundHeartbeatScreenAssociated",e,Th)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
;class cg extends ag{constructor(a){super(arguments);this.csn=a}}const ig=new bg,ci=[];let ei=di,fi=0;function gi(a,b,c,d,e,f,g){const h=ei();f=new Nh({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,B:h};const k=()=>{Ih(new Q("newScreen() parent element does not have a VE - rootVe",b))};
if(O("il_via_jspb")){const l=new Gd;l.C(h);Fd(l,f.getAsJspb());c&&c.visualElement?(f=new Id,c.clientScreenNonce&&C(f,2,c.clientScreenNonce),Hd(f,c.visualElement.getAsJspb()),g&&C(f,4,Sd[g]),D(l,5,f)):c&&k();d&&C(l,3,d);xh(l,e,a)}else f={csn:h,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=g)):c&&k(),d&&(f.cloneCsn=d),a?U("screenCreated",f,a,e):V("screenCreated",f,e);hg(new cg(h));
return h}
function hi(a,b,c,d){const e=d.filter(g=>{g.csn!==b?(g.csn=b,g=!0):g=!1;return g}),f={cttAuthInfo:ai(b),
B:b};for(const g of d)d=g.getAsJson(),(ra(d)||!d.trackingParams&&!d.veType)&&Ih(Error("Child VE logged with no data"));if(O("il_via_jspb")){const g=new Ld;g.C(b);Jd(g,c.getAsJspb());oa(e,h=>{h=h.getAsJspb();Mb(g,3,Dd,h)});
"UNDEFINED_CSN"==b?X("visualElementAttached",g,f):yh(g,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:oa(e,g=>g.getAsJson())},"UNDEFINED_CSN"==b?X("visualElementAttached",c,f):a?U("visualElementAttached",c,a,f):V("visualElementAttached",c,f)}
function ii(a,b,c,d,e){const f={cttAuthInfo:ai(b),B:b};if(O("il_via_jspb")){const g=new Nd;g.C(b);c=c.getAsJspb();D(g,2,c);C(g,4,1);d&&D(g,3,e);"UNDEFINED_CSN"==b?X("visualElementShown",g,f):th(g,f,a)}else e={csn:b,ve:c.getAsJson(),eventType:1},d&&(e.clientData=d),"UNDEFINED_CSN"==b?X("visualElementShown",e,f):a?U("visualElementShown",e,a,f):V("visualElementShown",e,f)}
function ji(a,b,c,d=!1){var e=d?16:8;const f={cttAuthInfo:ai(b),B:b,oa:d};O("il_via_jspb")?(e=new Nd,e.C(b),c=c.getAsJspb(),D(e,2,c),C(e,4,d?16:8),"UNDEFINED_CSN"==b?X("visualElementHidden",e,f):uh(e,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"==b?X("visualElementHidden",d,f):a?U("visualElementHidden",d,a,f):V("visualElementHidden",d,f))}
function ki(a,b,c,d){var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";const f={cttAuthInfo:ai(b),B:b};if(O("il_via_jspb")){const g=new Md;g.C(b);c=c.getAsJspb();D(g,2,c);C(g,4,Sd[e]);d&&D(g,3);"UNDEFINED_CSN"==b?X("visualElementGestured",g,f):vh(g,f,a)}else e={csn:b,ve:c.getAsJson(),gestureType:e},d&&(e.clientData=d),"UNDEFINED_CSN"==b?X("visualElementGestured",e,f):a?U("visualElementGestured",e,a,f):V("visualElementGestured",e,f)}
function di(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Qa(b,3)}
function X(a,b,c){ci.push({payloadName:a,payload:b,options:c});fi||(fi=lg())}
function mg(a){if(ci){for(let b of ci)if(b.payload)if(O("il_via_jspb"))switch(b.payload.C(a.csn),b.payloadName){case "screenCreated":xh(b.payload,b.options);break;case "visualElementAttached":yh(b.payload,b.options);break;case "visualElementShown":th(b.payload,b.options);break;case "visualElementHidden":uh(b.payload,b.options);break;case "visualElementGestured":vh(b.payload,b.options);break;case "visualElementStateChanged":wh(b.payload,b.options);break;default:Ih(new Q("flushQueue unable to map payloadName to JSPB setter"))}else b.payload.csn=
a.csn,U(b.payloadName,b.payload,null,b.options);ci.length=0}fi=0}
;function li(a,b){return b.data&&b.data.loggingDirectives?b.data.loggingDirectives.trackingParams||"":b.i&&b.i.trackingParams?b.i.trackingParams:b.data&&b.data.trackingParams||""}
function mi(a,b){const c=W();return null!==a.l&&c!=a.l?(Ih(new Q("VisibilityLogger called before newScreen()",{caller:b.tagName,previous_csn:a.csn,current_csn:c})),null):c}
function ni(a){return parseInt(a.data&&a.data.loggingDirectives&&a.data.loggingDirectives.visibility&&a.data.loggingDirectives.visibility.types||"",10)||1}
function oi(a,b){var c=li(0,b),d=b.visualElement?b.visualElement:c,e=a.o.has(d);const f=a.j.get(d);a.o.add(d);a.j.set(d,!0);b.j&&!e&&b.j();if(c||b.visualElement)if(d=mi(a,b)){var g=!(!b.data||!b.data.loggingDirectives);if(ni(b)||g){var h=b.visualElement?b.visualElement:Mh(c);c=b.l;var k=b.m;g||e?ni(b)&4?f||(a=a.i,b={cttAuthInfo:ai(d),B:d},O("il_via_jspb")?(e=new Nd,e.C(d),h=h.getAsJspb(),D(e,2,h),C(e,4,4),c&&D(e,3,k),"UNDEFINED_CSN"==d?X("visualElementShown",e,b):th(e,b,a)):(k={csn:d,ve:h.getAsJson(),
eventType:4},c&&(k.clientData=c),"UNDEFINED_CSN"==d?X("visualElementShown",k,b):a?U("visualElementShown",k,a,b):V("visualElementShown",k,b))):ni(b)&1&&!e&&ii(a.i,d,h,c,k):ii(a.i,d,h,c)}}}
function pi(a,b){var c=li(0,b),d=b.visualElement?b.visualElement:c,e=a.m.has(d);const f=a.j.get(d);a.m.add(d);a.j.set(d,!1);!1!==f&&(c||b.visualElement)&&(!(d=mi(a,b))||!ni(b)&&b.data&&b.data.loggingDirectives||(c=b.visualElement?b.visualElement:Mh(c),ni(b)&8?ji(a.i,d,c):ni(b)&2&&!e&&(a=a.i,b={cttAuthInfo:ai(d),B:d},O("il_via_jspb")?(e=new Nd,e.C(d),c=c.getAsJspb(),D(e,2,c),C(e,4,2),"UNDEFINED_CSN"==d?X("visualElementHidden",e,b):uh(e,b,a)):(e={csn:d,ve:c.getAsJson(),eventType:2},"UNDEFINED_CSN"==
d?X("visualElementHidden",e,b):a?U("visualElementHidden",e,a,b):V("visualElementHidden",e,b)))))}
class qi{constructor(){this.o=new Set;this.m=new Set;this.j=new Map;this.l=null;this.i=wg}clear(){this.o.clear();this.m.clear();this.j.clear();this.l=null}}(function(){var a=qi;a.fa=void 0;a.v=function(){return a.fa?a.fa:a.fa=new a}})();var ri=a=>self.btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(a)))).replace(/\+/g,"-").replace(/\//g,"_");var si=["notifications_register","notifications_check_registration"];let ti=null;function Z(a,b){const c={};c.key=a;c.value=b;return ui().then(d=>new Promise((e,f)=>{try{const g=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);g.onsuccess=()=>{e()};
g.onerror=()=>{f()}}catch(g){f(g)}}))}
function vi(){return Z("IndexedDBCheck","testing IndexedDB").then(()=>wi("IndexedDBCheck")).then(a=>"testing IndexedDB"===a?Promise.resolve():Promise.reject()).then(()=>!0).catch(()=>!1)}
function wi(a){const b=new Q("Error accessing DB");return ui().then(c=>new Promise((d,e)=>{try{const f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=()=>{const g=f.result;d(g?g.value:null)};
f.onerror=()=>{b.params={key:a,source:"onerror"};e(b)}}catch(f){b.params={key:a,
thrownError:String(f)},e(b)}}),()=>null)}
function ui(){return ti?Promise.resolve(ti):new Promise((a,b)=>{const c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=()=>{const d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))ti=d,a(ti);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),ui()};
c.onupgradeneeded=xi})}
function xi(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;const yi={WEB_UNPLUGGED:"^unplugged/",WEB_UNPLUGGED_ONBOARDING:"^unplugged/",WEB_UNPLUGGED_OPS:"^unplugged/",WEB_UNPLUGGED_PUBLIC:"^unplugged/",WEB_CREATOR:"^creator/",WEB_KIDS:"^kids/",WEB_EXPERIMENTS:"^experiments/",WEB_MUSIC:"^music/",WEB_REMIX:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^main_app/|^sfv/"};
function zi(a){if(1===a.length)return a[0];var b=yi.UNKNOWN_INTERFACE;if(b){b=new RegExp(b);for(var c of a)if(b.exec(c))return c}const d=[];Object.entries(yi).forEach(([e,f])=>{"UNKNOWN_INTERFACE"!==e&&d.push(f)});
c=new RegExp(d.join("|"));a.sort((e,f)=>e.length-f.length);
for(const e of a)if(!c.exec(e))return e;return a[0]}
function Ai(a){return`/youtubei/v1/${zi(a)}`}
;const Bi=window;class Ci{constructor(){this.timing={};this.clearResourceTimings=()=>{};
this.webkitClearResourceTimings=()=>{};
this.mozClearResourceTimings=()=>{};
this.msClearResourceTimings=()=>{};
this.oClearResourceTimings=()=>{}}}
var Di=Bi.performance||Bi.mozPerformance||Bi.msPerformance||Bi.webkitPerformance||new Ci;ja(Di.clearResourceTimings||Di.webkitClearResourceTimings||Di.mozClearResourceTimings||Di.msClearResourceTimings||Di.oClearResourceTimings||ma,Di);w("ytLoggingLatencyUsageStats_",u.ytLoggingLatencyUsageStats_||{});function Ei(){Fi.i||(Fi.i=new Fi);return Fi.i}
function Gi(a,b,c={}){a.j.add(c.layer||0);a.l=()=>{Hi(a,b,c);var d=Yh(c.layer);if(d){for(var e of a.o)Ii(a,e[0],e[1]||d,c.layer);for(const k of a.D){e=W(0);var f=k[0]||Yh(0);if(e&&f){d=a.client;var g=f,h=k[1];f={cttAuthInfo:ai(e),B:e};O("il_via_jspb")?(h=new Od,h.C(e),g=g.getAsJspb(),D(h,2,g),"UNDEFINED_CSN"==e?X("visualElementStateChanged",h,f):wh(h,f,d)):(g={csn:e,ve:g.getAsJson(),clientData:h},"UNDEFINED_CSN"==e?X("visualElementStateChanged",g,f):d?U("visualElementStateChanged",g,d,f):V("visualElementStateChanged",
g,f))}}}};
W(c.layer)||a.l();if(c.na)for(const d of c.na)Ji(a,d,c.layer);else Hh(Error("Delayed screen needs a data promise."))}
function Hi(a,b,c={}){c.layer||(c.layer=0);var d=void 0!==c.Ga?c.Ga:c.layer;var e=W(d);d=Yh(d);let f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));let g;const h=N("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});let k;try{k=gi(a.client,b,f,c.ma,c.cttAuthInfo,g,c.vb)}catch(l){a=l;c=[{Fb:b,rootVe:d,parentVisualElement:void 0,ub:e,Ab:f,ma:c.ma}];a.args||(a.args=[]);a.args.push(...c);
Hh(l);return}bi(k,b,c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{for(const l of Object.values(Uh))if(W(l)===e){b=!0;break a}b=!1}b=!b}b&&ji(a.client,e,d,!0);a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=k||"");d=qi.v();d.clear();d.l=W();d=Yh(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(O("web_mark_root_visible")||O("music_web_mark_root_visible"))&&ii(void 0,k,d);a.j.delete(c.layer||0);a.l=void 0;for(const [l,m]of a.N)e=l,m.has(c.layer)&&d&&Ii(a,e,d,c.layer);for(c=0;c<a.m.length;c++){e=
a.m[c];try{e()}catch(l){Hh(l)}}a.m.length=0;for(c=0;c<a.u.length;c++){e=a.u[c];try{e()}catch(l){Hh(l)}}}
function Ki(a){var b=28631,c={layer:8};[28631].includes(b)||(Ih(new Q("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||a.i.push({rootVe:b,key:c.key||""});a.o=[];a.D=[];c.na?Gi(a,b,c):Hi(a,b,c)}
function Ji(a,b,c=0){b.then(d=>{a.j.has(c)&&a.l&&a.l();const e=W(c),f=Yh(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&hi(a.client,e,f,[Mh(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&hi(a.client,e,f,[Mh(d.playerResponse.trackingParams)])}})}
function Ii(a,b,c,d=0){if(a.j.has(d))a.o.push([b,c]);else{var e=W(d);c=c||Yh(d);e&&c&&hi(a.client,e,c,[b])}}
function Li(a,b,c=0){(c=W(c))&&ki(a.client,c,b)}
function Mi(a,b,c,d=0){if(!b)return!1;d=W(d);if(!d)return!1;ki(a.client,d,Mh(b),c);return!0}
function Ni(a,b){const c=b.za&&b.za();b.visualElement?Li(a,b.visualElement,c):(b=li(qi.v(),b),Mi(a,b,void 0,c))}
var Fi=class{constructor(){this.o=[];this.D=[];this.i=[];this.m=[];this.u=[];this.j=new Set;this.N=new Map}clickCommand(a,b,c=0){return Mi(this,a.clickTrackingParams,b,c)}};var Oi=class extends F{constructor(a){super(a)}};var Pi=class extends F{constructor(a){super(a)}};Pi.i="yt.sw.adr";function Qi(a){return r(function*(){var b=yield u.fetch(a.j);if(200!==b.status)return Promise.reject("Server error when retrieving AmbientData");b=yield b.text();if(!b.startsWith(")]}'\n"))return Promise.reject("Incorrect JSPB formatting");a:{b=JSON.parse(b.substring(5));for(let c=0;c<b.length;c++)if(b[c][0]===(new Pi).constructor.i){b=new Pi(b[c]);break a}b=null}return b?b:Promise.reject("AmbientData missing from response")})}
function Ri(a=!1){const b=Si.i;return r(function*(){if(a||!b.i)b.i=Qi(b).then(b.l).catch(c=>{delete b.i;Hh(c)});
return b.i})}
var Si=class{constructor(){this.j=`${self.location.origin}/sw.js_data`}l(a){const b=Kb(a,Oi,2);if(b){const c=B(b,5);c&&(u.__SAPISID=c);O("enable_web_eom_visitor_data")&&null!=B(b,10)?M("EOM_VISITOR_DATA",B(b,10)):null!=B(b,7)&&M("VISITOR_DATA",B(b,7));null!=B(b,4)&&M("SESSION_INDEX",String(B(b,4)));null!=B(b,8)&&M("DELEGATED_SESSION_ID",B(b,8))}return a}};function Ti(a){const b={};var c=wc();c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(N("SESSION_INDEX",0)),c=isNaN(c)?0:c),O("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in L||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in L&&(b["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));return b}
var Ui=class{constructor(){this.Ja=!0}};var Vi={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Wi(a,b){b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds&&setTimeout(()=>{delete a.i[b.encryptedTokenJarContents]},1E3*Number(b.expirationSeconds)))}
var Xi=class{constructor(){this.i={}}handleResponse(a,b){let c,d;b=(null==(c=b.J.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];let e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){for(const f of b)delete this.i[f.encryptedTokenJarContents];Wi(this,a)}}};function Yi(){var a=N("INNERTUBE_CONTEXT");if(!a)return Hh(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};a=sa(a);O("web_no_tracking_params_in_shell_killswitch")||delete a.clickTracking;a.client||(a.client={});var b=a.client;b.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var c=ee();c?b.experimentsToken=c:delete b.experimentsToken;Xi.i||(Xi.i=new Xi);b=Xi.i.i;c=[];let d=0;for(const e in b)c[d++]=b[e];a.request=Object.assign({},a.request,{consistencyTokenJars:c});
a.user=Object.assign({},a.user);return a}
;function Zi(a){var b=a;if(a=N("INNERTUBE_HOST_OVERRIDE")){a=String(a);var c=String,d=b.match(A);b=d[5];var e=d[6];d=d[7];var f="";b&&(f+=b);e&&(f+="?"+e);d&&(f+="#"+d);b=a+c(f)}return b}
;var $i=class{};const aj={GET_DATASYNC_IDS:function(a){return()=>new a}(class extends $i{})};function bj(a){var b={tb:{}};Ui.i||(Ui.i=new Ui);var c=Ui.i;if(void 0!==cj.i){const d=cj.i;a=[b!==d.o,a!==d.m,c!==d.l,!1,!1,void 0!==d.j];if(a.some(e=>e))throw new Q("InnerTubeTransportService is already initialized",a);
}else cj.i=new cj(b,a,c)}
function dj(a,b){return r(function*(){var c,d={sessionIndex:null==a?void 0:null==(c=a.la)?void 0:c.sessionIndex};c=yield Sc(Ti(d));return Promise.resolve(Object.assign({},ej(b),c))})}
function fj(a,b,c){return r(function*(){var d;const e=null==(d=b.config)?void 0:d.Eb;if(e&&a.i.has(e)&&O("web_memoize_inflight_requests"))return a.i.get(e);var f;if(null==b?0:null==(f=b.J)?0:f.context)for(const k of[])k.Bb(b.J.context);let g;if(null==(g=a.j)?0:g.m(b.input,b.J))return a.j.l(b.input,b.J);d=JSON.stringify(b.J);b.Y=Object.assign({},b.Y,{headers:c});f=Object.assign({},b.Y);"POST"===b.Y.method&&(f=Object.assign({},f,{body:d}));d=a.m.fetch(b.input,f,b.config);e&&a.i.set(e,d);d=yield d;e&&
a.i.has(e)&&a.i.delete(e);let h;!d&&(null==(h=a.j)?0:h.i(b.input,b.J))&&(d=yield a.j.j(b.input,b.J));return d})}
function gj(a,b,c){var d={la:{identity:Vi}};b.context||(b.context=Yi());return new H(e=>r(function*(){var f=Zi(c);f=ve(f)?"same-origin":"cors";if(a.l.Ja){var g,h=null==d?void 0:null==(g=d.la)?void 0:g.sessionIndex;g=Ti({sessionIndex:h});f=Object.assign({},ej(f),g)}else f=yield dj(d,f);g=Zi(c);h={};N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT")&&(null==f?0:f.Authorization)||(h.key=N("INNERTUBE_API_KEY"));O("json_condensed_response")&&(h.prettyPrint="false");g=ue(g,h||{},!1);h={method:"POST",
mode:ve(g)?"same-origin":"cors",credentials:ve(g)?"same-origin":"include"};e(fj(a,{input:g,Y:h,J:b,config:d},f))}))}
function ej(a){const b={"Content-Type":"application/json"};O("enable_web_eom_visitor_data")&&N("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=N("EOM_VISITOR_DATA"):N("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=N("VISITOR_DATA"));O("track_webfe_innertube_auth_mismatch")&&(b["X-Youtube-Bootstrap-Logged-In"]=N("LOGGED_IN",!1));"cors"!==a&&((a=N("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=N("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=N("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),O("forward_domain_admin_state_on_embeds")&&(a=N("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
var cj=class{constructor(a,b,c){this.o=a;this.m=b;this.l=c;this.j=void 0;this.i=new Map;a.ja||(a.ja={});a.ja=Object.assign({},aj,a.ja)}};let hj;function ij(){hj||(bj({fetch:(a,b)=>Sc(fetch(new Request(a,b)))}),hj=cj.i);
return hj}
;function jj(a){return r(function*(){yield kj();Ih(a)})}
function lj(a){r(function*(){var b=yield Uf();b?yield tg(a,b):(yield Ri(),b={timestamp:a.timestamp},b=a.appShellAssetLoadReport?{payloadName:"appShellAssetLoadReport",payload:a.appShellAssetLoadReport,options:b}:a.clientError?{payloadName:"clientError",payload:a.clientError,options:b}:void 0,b&&V(b.payloadName,b.payload))})}
function kj(){return r(function*(){try{yield Ri()}catch(a){}})}
;const mj={granted:"GRANTED",denied:"DENIED",unknown:"UNKNOWN"},nj=RegExp("^(?:[a-z]+:)?//","i");function oj(a){var b=a.data;a=b.type;b=b.data;"notifications_register"===a?(Z("IDToken",b),pj()):"notifications_check_registration"===a&&qj(b)}
function rj(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(a=>{if(a)for(const b of a)b.postMessage({type:"update_unseen_notifications_count_signal"})})}
function sj(a){const b=[];a.forEach(c=>{b.push({key:c.key,value:c.value})});
return b}
function tj(a){return r(function*(){const b=sj(a.payload.chrome.extraUrlParams),c={recipientId:a.recipientId,endpoint:a.payload.chrome.endpoint,extraUrlParams:b},d=Ai(ge);return uj().then(e=>gj(e,c,d).then(f=>{f.json().then(g=>{if(!g||!g.endpointUrl)return Promise.resolve();a.payload.chrome.postedEndpoint&&!O("web_log_push_impressions_after_show")&&vj(a.payload.chrome.postedEndpoint);return wj(a,g.endpointUrl)})}))})}
function xj(a,b){var c=W(8);if(null==c||!b)return a;if(!O("web_use_url_api_to_add_params"))return`${a}&parentCsn=${c}&parentTrackingParams=${b}`;a=nj.test(a)?new URL(a):new URL(a,self.registration.scope);a.searchParams.set("parentCsn",c);a.searchParams.set("parentTrackingParams",b);return a.toString()}
function wj(a,b){a.deviceId&&Z("DeviceId",a.deviceId);a.timestampSec&&Z("TimestampLowerBound",a.timestampSec);const c=a.payload.chrome,d=Ei();Ki(d);var e;const f=null==(e=c.postedEndpoint)?void 0:e.clickTrackingParams;e=c.title;const g={body:c.body,icon:c.iconUrl,data:{nav:xj(b,f),id:c.notificationId,attributionTag:c.attributionTag,clickEndpoint:c.clickEndpoint,postedEndpoint:c.postedEndpoint,clickTrackingParams:f,isDismissed:!0},tag:c.notificationTag||c.title+c.body+c.iconUrl,requireInteraction:!0};
return self.registration.showNotification(e,g).then(()=>{var h;(null==(h=g.data)?0:h.postedEndpoint)&&O("web_log_push_impressions_after_show")&&vj(g.data.postedEndpoint);let k;if(null==(k=g.data)?0:k.clickTrackingParams)h=Mh(g.data.clickTrackingParams),Ii(d,h,void 0,8),h={Z:8,visualElement:h},oi(qi.v(),h);yj(a.displayCap)}).catch(()=>{})}
function vj(a){if(!a.recordNotificationInteractionsEndpoint)return Promise.reject();const b={serializedRecordNotificationInteractionsRequest:a.recordNotificationInteractionsEndpoint.serializedInteractionsRequest},c=Ai(he);return uj().then(d=>gj(d,b,c))}
function yj(a){-1!==a&&self.registration.getNotifications().then(b=>{for(let d=0;d<b.length-a;d++){b[d].data.isDismissed=!1;b[d].close();let e;if(null==(e=b[d].data)?0:e.clickTrackingParams){let f;var c=Mh(null==(f=b[d].data)?void 0:f.clickTrackingParams);const g={Z:8,visualElement:c},h=Oh(82046),k=Ei();Ii(k,h,c,8);c={Z:8,visualElement:h};oi(qi.v(),c);Ni(k,c);pi(qi.v(),g)}}})}
function qj(a){const b=[zj(a),wi("RegistrationTimestamp").then(Aj),Bj(),Cj(),Dj()];Promise.all(b).catch(()=>{Z("IDToken",a);pj();return Promise.resolve()})}
function Aj(a){a=a||0;return 9E7>=Date.now()-a?Promise.resolve():Promise.reject()}
function zj(a){return wi("IDToken").then(b=>a===b?Promise.resolve():Promise.reject())}
function Bj(){return wi("Permission").then(a=>Notification.permission===a?Promise.resolve():Promise.reject())}
function Cj(){return wi("Endpoint").then(a=>Ej().then(b=>a===b?Promise.resolve():Promise.reject()))}
function Dj(){return wi("application_server_key").then(a=>Fj().then(b=>a===b?Promise.resolve():Promise.reject()))}
function Gj(){var a=Notification.permission;if(mj[a])return mj[a]}
function pj(){Z("RegistrationTimestamp",0);Promise.all([Ej(),Hj(),Ij(),Fj()]).then(([a,b,c,d])=>{b=b?ri(b):null;c=c?ri(c):null;d=d?Qa(new Uint8Array(d),4):null;Jj(a,b,c,d)}).catch(()=>{Jj()})}
function Jj(a=null,b=null,c=null,d=null){vi().then(e=>{e&&(Z("Endpoint",a),Z("P256dhKey",b),Z("AuthKey",c),Z("application_server_key",d),Z("Permission",Notification.permission),Promise.all([wi("DeviceId"),wi("NotificationsDisabled")]).then(([f,g])=>{if(null!=f)var h=f;else{f=[];var k;h=h||ed.length;for(k=0;256>k;k++)f[k]=ed[0|Math.random()*h];h=f.join("")}Kj(h,null!=a?a:void 0,null!=b?b:void 0,null!=c?c:void 0,null!=d?d:void 0,null!=g?g:void 0)}))})}
function Kj(a,b,c,d,e,f){r(function*(){const g={notificationRegistration:{chromeRegistration:{deviceId:a,pushParams:{applicationServerKey:e,authKey:d,p256dhKey:c,browserEndpoint:b},notificationsDisabledInApp:f,permission:Gj()}}},h=Ai(ie);return uj().then(k=>gj(k,g,h).then(()=>{Z("DeviceId",a);Z("RegistrationTimestamp",Date.now());Z("TimestampLowerBound",Date.now())},l=>{jj(l)}))})}
function Ej(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.endpoint):Promise.resolve(null))}
function Hj(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null))}
function Ij(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null))}
function Fj(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.options.applicationServerKey):Promise.resolve(null))}
function uj(){return r(function*(){try{return yield Ri(!0),ij()}catch(a){return yield jj(a),Promise.reject(a)}})}
;let Lj=void 0;function Mj(a){return r(function*(){Lj||(Lj=yield a.open("yt-appshell-assets"));return Lj})}
function Nj(a,b){return r(function*(){const c=yield Mj(a),d=b.map(e=>Oj(c,e));
return Promise.all(d)})}
function Pj(a,b){return r(function*(){let c;try{c=yield a.match(b,{cacheName:"yt-appshell-assets"})}catch(d){}return c})}
function Qj(a,b){return r(function*(){const c=yield Mj(a),d=(yield c.keys()).filter(e=>!b.includes(e.url)).map(e=>c.delete(e));
return Promise.all(d)})}
function Rj(a,b,c){return r(function*(){yield(yield Mj(a)).put(b,c)})}
function Sj(a,b){r(function*(){yield(yield Mj(a)).delete(b)})}
function Oj(a,b){return r(function*(){return(yield a.match(b))?Promise.resolve():a.add(b)})}
;var Tj;Tj=og("yt-serviceworker-metadata",{M:{auth:{S:1},["resource-manifest-assets"]:{S:2}},ia:!0,upgrade(a,b){b(1)&&sf(a,"resource-manifest-assets");b(2)&&sf(a,"auth")},version:2});let Uj=null;function Vj(a){return Jf(Tj(),a)}
function Wj(){const a=Date.now();return IDBKeyRange.bound(0,a)}
function Xj(a,b){return r(function*(){yield of(yield Vj(a.token),["resource-manifest-assets"],"readwrite",c=>{const d=c.objectStore("resource-manifest-assets"),e=Date.now();return S(d.i.put(b,e)).then(()=>{Uj=e;let f=!0;return xf(d,{query:Wj(),direction:"prev"},g=>f?(f=!1,g.advance(5)):d.delete(g.getKey()).then(()=>g.continue()))})})})}
function Yj(a,b){return r(function*(){let c=!1,d=0;yield of(yield Vj(a.token),["resource-manifest-assets"],"readonly",e=>xf(e.objectStore("resource-manifest-assets"),{query:Wj(),direction:"prev"},f=>{if(f.da().includes(b))c=!0;else return d+=1,f.continue()}));
return c?d:-1})}
function Zj(a){return r(function*(){Uj||(yield of(yield Vj(a.token),["resource-manifest-assets"],"readonly",b=>xf(b.objectStore("resource-manifest-assets"),{query:Wj(),direction:"prev"},c=>{Uj=c.getKey()})));
return Uj})}
var ak=class{constructor(a){this.token=a}static v(){return r(function*(){const a=yield Uf();if(a)return ak.i||(ak.i=new ak(a)),ak.i})}};function bk(a,b){return r(function*(){yield uf(yield Vj(a.token),"auth",b,"shell_identifier_key")})}
function ck(a){return r(function*(){return(yield(yield Vj(a.token)).get("auth","shell_identifier_key"))||""})}
function dk(a){return r(function*(){yield(yield Vj(a.token)).clear("auth")})}
var ek=class{constructor(a){this.token=a}static v(){return r(function*(){const a=yield Uf();if(a)return ek.i||(ek.i=new ek(a)),ek.i})}};function fk(){r(function*(){const a=yield ek.v();a&&(yield dk(a))})}
;var gk=class extends F{constructor(a){super(a)}};function hk(a){a:{var b=ik;if(kb.length){const e=kb.pop();var {T:c=!1}={};e.T=c;e.i.init(a,void 0,void 0,void 0);a=e}else a=new jb(a);try{const e=Yb(b);var d=Zb(new e.ba,a,e);break a}finally{b=a,b.i.clear(),b.m=-1,b.j=-1,100>kb.length&&kb.push(b)}d=void 0}return d}
var jk=[1],ik=[class extends F{constructor(a){super(a,-1,jk)}},1,kc,[gk,1,jc]];function kk(a){return r(function*(){const b=a.headers.get("X-Resource-Manifest");return b?Promise.resolve(lk(b)):Promise.reject(Error("No resource manifest header"))})}
function lk(a){return Lb(hk(decodeURIComponent(a)),gk,1).reduce((b,c)=>{(c=B(c,1))&&b.push(c);return b},[])}
;function mk(a){return r(function*(){const b=yield Ri();if(b&&null!=B(b,3)){var c=yield ek.v();c&&(c=yield ck(c),B(b,3)!==c&&(Sj(a.i,a.j),fk()))}})}
function nk(a){return r(function*(){let b,c;try{c=yield ok(a.l),b=yield kk(c),yield Nj(a.i,b)}catch(d){return Promise.reject(d)}try{yield pk(),yield Rj(a.i,a.j,c)}catch(d){return Promise.reject(d)}if(b)try{yield qk(a,b,a.j)}catch(d){}return Promise.resolve()})}
function rk(a){return r(function*(){yield mk(a);return nk(a)})}
function ok(a){return r(function*(){try{return yield u.fetch(new Request(a))}catch(b){return Promise.reject(b)}})}
function pk(){return r(function*(){var a=yield Ri();let b;a&&null!=B(a,3)&&(b=B(a,3));return b?(a=yield ek.v())?Promise.resolve(bk(a,b)):Promise.reject(Error("Could not get AuthMonitor instance")):Promise.reject(Error("Could not get datasync ID"))})}
function qk(a,b,c){return r(function*(){const d=yield ak.v();if(d)try{yield Xj(d,b)}catch(e){yield jj(e)}b.push(c);try{yield Qj(a.i,b)}catch(e){yield jj(e)}return Promise.resolve()})}
function sk(a,b){return r(function*(){return Pj(a.i,b)})}
function tk(a){return r(function*(){return Pj(a.i,a.j)})}
var uk=class{constructor(){var a=self.location.origin+"/app_shell",b=self.location.origin+"/app_shell_home";this.i=self.caches;this.l=a;this.j=b}};function vk(a,b){return r(function*(){const c=b.request,d=yield sk(a.i,c.url);if(d)return lj({appShellAssetLoadReport:{assetPath:c.url,cacheHit:!0},timestamp:P()}),d;wk(c);return xk(b)})}
function yk(a,b){return r(function*(){const c=yield zk(b);if(c.response&&(c.response.ok||"opaqueredirect"===c.response.type||429===c.response.status||303===c.response.status||300<=c.response.status&&400>c.response.status))return c.response;const d=yield tk(a.i);if(d)return Ak(a),d;Bk(a);return c.response?c.response:Promise.reject(c.error)})}
function Ck(a,b){b=new URL(b);if(!a.j.includes(b.pathname))return!1;if(!b.search)return!0;for(const c of a.m)if(a=b.searchParams.get(c.key),void 0===c.value||a===c.value)if(b.searchParams.delete(c.key),!b.search)return!0;return!1}
function Dk(a,b){return r(function*(){const c=yield tk(a.i);if(!c)return Bk(a),xk(b);Ak(a);var d;a:{if(c.headers&&(d=c.headers.get("date"))&&(d=Date.parse(d),!isNaN(d))){d=Math.round(P()-d);break a}d=-1}if(!(-1<d&&7<=d/864E5))return c;d=yield zk(b);return d.response&&d.response.ok?d.response:c})}
function xk(a){return a.preloadResponse.then(b=>b&&"pbj"!==b.headers.get("x-navigation-preload-response-type")?b:u.fetch(a.request))}
function wk(a){const b={assetPath:a.url,cacheHit:!1};ak.v().then(c=>{if(c){var d=Zj(c).then(e=>{e&&(b.currentAppBundleTimestampSec=String(Math.floor(e/1E3)))});
c=Yj(c,a.url).then(e=>{b.appBundleVersionDiffCount=e});
Promise.all([d,c]).catch(e=>{jj(e)}).finally(()=>{lj({appShellAssetLoadReport:b,
timestamp:P()})})}else lj({appShellAssetLoadReport:b,
timestamp:P()})})}
function Ak(a){lj({appShellAssetLoadReport:{assetPath:a.i.j,cacheHit:!0},timestamp:P()})}
function Bk(a){lj({appShellAssetLoadReport:{assetPath:a.i.j,cacheHit:!1},timestamp:P()})}
function zk(a){return r(function*(){try{return{response:yield xk(a)}}catch(b){return{error:b}}})}
var Jk=class{constructor(){var a=Ek,b=Fk,c=Gk,d=Hk;const e=[];e.push({key:"feature",value:"ytca"});for(var f of nc)e.push({key:f});f=Ik();this.i=a;this.o=b;this.u=c;this.j=d;this.m=e;this.l=f}};var Hk=["/","/feed/downloads"];const Kk=[/^\/$/,/^\/feed\/downloads$/],Lk=[/^\/$/,/^\/feed\/\w*/,/^\/results$/,/^\/playlist$/,/^\/watch$/,/^\/channel\/\w*/];function Ik(){return new RegExp((O("kevlar_sw_app_wide_fallback")?Lk:Kk).map(a=>a.source).join("|"))}
var Fk=/^https:\/\/[\w-]*\.?youtube\.com.*(\.css$|\.js$|\.ico$|\/ytmweb\/_\/js\/|\/ytmweb\/_\/ss\/)/,Gk=/^https:\/\/[\w-]*\.?youtube\.com.*(purge_shell=1|\/signin|\/logout)/;var Mk=class{constructor(){var a=Ek,b=new Jk;this.i=self;this.j=a;this.o=b;this.N=si}init(){this.i.oninstall=this.u.bind(this);this.i.onactivate=this.l.bind(this);this.i.onfetch=this.m.bind(this);this.i.onmessage=this.D.bind(this)}u(a){this.i.skipWaiting();const b=rk(this.j).catch(c=>{jj(c);return Promise.resolve()});
a.waitUntil(b)}l(a){const b=[this.i.clients.claim()],c=this.i.registration;c.navigationPreload&&(b.push(c.navigationPreload.enable()),O("sw_nav_preload_pbj")&&b.push(c.navigationPreload.setHeaderValue("pbj")));a.waitUntil(Promise.all(b))}m(a){const b=this;return r(function*(){var c=b.o,d=!!b.i.registration.navigationPreload;const e=a.request;if(c.u.test(e.url))Si.i&&(delete Si.i.i,u.__SAPISID=void 0,M("VISITOR_DATA",void 0),M("SESSION_INDEX",void 0),M("DELEGATED_SESSION_ID",void 0)),d=a.respondWith,
c=c.i,Sj(c.i,c.j),fk(),c=xk(a),d.call(a,c);else if(c.o.test(e.url))a.respondWith(vk(c,a));else if("navigate"===e.mode){const f=new URL(e.url),g=c.j;(!O("sw_nav_request_network_first")&&g.includes(f.pathname)?0:c.l.test(f.pathname))?a.respondWith(yk(c,a)):Ck(c,e.url)?a.respondWith(Dk(c,a)):d&&a.respondWith(xk(a))}})}D(a){const b=a.data;
this.N.includes(b.type)?oj(a):"refresh_shell"===b.type&&nk(this.j).catch(c=>{jj(c)})}};var Nk=class{static v(){let a=v("ytglobal.storage_");a||(a=new Nk,w("ytglobal.storage_",a));return a}estimate(){return r(function*(){const a=navigator;let b;if(null==(b=a.storage)?0:b.estimate)return a.storage.estimate();let c;if(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)return Ok()})}};
function Ok(){const a=navigator;return new Promise((b,c)=>{let d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota((e,f)=>{b({usage:e,quota:f})},e=>{c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
w("ytglobal.storageClass_",Nk);function Pk(a,b){Nk.v().estimate().then(c=>{c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Qk(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Qk(null==c?void 0:c.quota)});a.i("idbQuotaExceeded",c)})}
class Rk{constructor(){var a=Sk;this.handleError=Tk;this.i=a;this.j=!1;void 0===self.document||self.addEventListener("beforeunload",()=>{this.j=!0});
this.l=Math.random()<=de("ytidb_transaction_ended_event_rate_limit",.02)}V(a,b){switch(a){case "IDB_DATA_CORRUPTED":O("idb_data_corrupted_killswitch")||this.i("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.i("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":O("idb_is_supported_completed_killswitch")||this.i("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Pk(this,b);break;case "TRANSACTION_ENDED":this.l&&this.i("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.j}),this.i("idbTransactionAborted",a)}}}function Qk(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;jh(gh(),{H:[{Fa:/Failed to fetch/,weight:500}],G:[]});var {handleError:Tk=Gh,V:Sk=V}={handleError:function(a){return r(function*(){yield kj();Hh(a)})},
V:function(a,b){return r(function*(){yield kj();V(a,b)})}};
for(Oe=new Rk;0<Ne.length;){const a=Ne.shift();switch(a.type){case "ERROR":Oe.handleError(a.payload);break;case "EVENT":Oe.V(a.eventType,a.payload)}}Si.i=new Si;self.onnotificationclick=function(a){a.notification.close();const b=a.notification.data;b.isDismissed=!1;const c=self.clients.matchAll({type:"window",includeUncontrolled:!0});c.then(d=>{a:{var e=b.nav;for(const f of d)if(f.url===e){f.focus();break a}self.clients.openWindow(e)}});
a.waitUntil(c);a.waitUntil(vj(b.clickEndpoint))};
self.onnotificationclose=function(a){var b=a.notification.data;if(null==b?0:b.clickTrackingParams){var c=Mh(b.clickTrackingParams);a={Z:8,visualElement:c};if(b.isDismissed){const d=Oh(74726);b=Ei();Ii(b,d,c,8);c={Z:8,visualElement:d};oi(qi.v(),c);Ni(b,c)}pi(qi.v(),a)}};
self.onpush=function(a){a.waitUntil(wi("NotificationsDisabled").then(b=>{if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return tj(a.data.json())}catch(c){return Promise.resolve(c.message)}return Promise.resolve()}));
a.waitUntil(rj())};
self.onpushsubscriptionchange=function(){pj()};
const Ek=new uk;(new Mk).init();