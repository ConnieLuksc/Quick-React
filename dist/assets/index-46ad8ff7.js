(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function xv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ip={exports:{}},Qo={},sp={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var es=Symbol.for("react.element"),Ov=Symbol.for("react.portal"),Av=Symbol.for("react.fragment"),Dv=Symbol.for("react.strict_mode"),Mv=Symbol.for("react.profiler"),Lv=Symbol.for("react.provider"),bv=Symbol.for("react.context"),Fv=Symbol.for("react.forward_ref"),Uv=Symbol.for("react.suspense"),zv=Symbol.for("react.memo"),jv=Symbol.for("react.lazy"),Dd=Symbol.iterator;function Wv(t){return t===null||typeof t!="object"?null:(t=Dd&&t[Dd]||t["@@iterator"],typeof t=="function"?t:null)}var op={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lp=Object.assign,ap={};function jr(t,e,n){this.props=t,this.context=e,this.refs=ap,this.updater=n||op}jr.prototype.isReactComponent={};jr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function up(){}up.prototype=jr.prototype;function Lu(t,e,n){this.props=t,this.context=e,this.refs=ap,this.updater=n||op}var bu=Lu.prototype=new up;bu.constructor=Lu;lp(bu,jr.prototype);bu.isPureReactComponent=!0;var Md=Array.isArray,cp=Object.prototype.hasOwnProperty,Fu={current:null},dp={key:!0,ref:!0,__self:!0,__source:!0};function hp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cp.call(e,r)&&!dp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:es,type:t,key:s,ref:o,props:i,_owner:Fu.current}}function Bv(t,e){return{$$typeof:es,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Uu(t){return typeof t=="object"&&t!==null&&t.$$typeof===es}function Vv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ld=/\/+/g;function xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Vv(""+t.key):e.toString(36)}function Fs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case es:case Ov:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xl(o,0):r,Md(i)?(n="",t!=null&&(n=t.replace(Ld,"$&/")+"/"),Fs(i,e,n,"",function(u){return u})):i!=null&&(Uu(i)&&(i=Bv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ld,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Md(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+xl(s,l);o+=Fs(s,e,n,a,i)}else if(a=Wv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+xl(s,l++),o+=Fs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function gs(t,e,n){if(t==null)return t;var r=[],i=0;return Fs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Hv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xe={current:null},Us={transition:null},$v={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Us,ReactCurrentOwner:Fu};z.Children={map:gs,forEach:function(t,e,n){gs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return gs(t,function(){e++}),e},toArray:function(t){return gs(t,function(e){return e})||[]},only:function(t){if(!Uu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=jr;z.Fragment=Av;z.Profiler=Mv;z.PureComponent=Lu;z.StrictMode=Dv;z.Suspense=Uv;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$v;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=lp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)cp.call(e,a)&&!dp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:es,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:bv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Lv,_context:t},t.Consumer=t};z.createElement=hp;z.createFactory=function(t){var e=hp.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:Fv,render:t}};z.isValidElement=Uu;z.lazy=function(t){return{$$typeof:jv,_payload:{_status:-1,_result:t},_init:Hv}};z.memo=function(t,e){return{$$typeof:zv,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=Us.transition;Us.transition={};try{t()}finally{Us.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return xe.current.useCallback(t,e)};z.useContext=function(t){return xe.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return xe.current.useDeferredValue(t)};z.useEffect=function(t,e){return xe.current.useEffect(t,e)};z.useId=function(){return xe.current.useId()};z.useImperativeHandle=function(t,e,n){return xe.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return xe.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return xe.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return xe.current.useMemo(t,e)};z.useReducer=function(t,e,n){return xe.current.useReducer(t,e,n)};z.useRef=function(t){return xe.current.useRef(t)};z.useState=function(t){return xe.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return xe.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return xe.current.useTransition()};z.version="18.2.0";sp.exports=z;var oe=sp.exports;const qv=xv(oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv=oe,Kv=Symbol.for("react.element"),Qv=Symbol.for("react.fragment"),Yv=Object.prototype.hasOwnProperty,Xv=Gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jv={key:!0,ref:!0,__self:!0,__source:!0};function fp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Yv.call(e,r)&&!Jv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Kv,type:t,key:s,ref:o,props:i,_owner:Xv.current}}Qo.Fragment=Qv;Qo.jsx=fp;Qo.jsxs=fp;ip.exports=Qo;var P=ip.exports,_a={},pp={exports:{}},He={},mp={exports:{}},gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,D){var M=R.length;R.push(D);e:for(;0<M;){var re=M-1>>>1,ue=R[re];if(0<i(ue,D))R[re]=D,R[M]=ue,M=re;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var D=R[0],M=R.pop();if(M!==D){R[0]=M;e:for(var re=0,ue=R.length,ps=ue>>>1;re<ps;){var yn=2*(re+1)-1,Rl=R[yn],wn=yn+1,ms=R[wn];if(0>i(Rl,M))wn<ue&&0>i(ms,Rl)?(R[re]=ms,R[wn]=M,re=wn):(R[re]=Rl,R[yn]=M,re=yn);else if(wn<ue&&0>i(ms,M))R[re]=ms,R[wn]=M,re=wn;else break e}}return D}function i(R,D){var M=R.sortIndex-D.sortIndex;return M!==0?M:R.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,g=!1,_=!1,v=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=R)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function y(R){if(v=!1,m(R),!_)if(n(a)!==null)_=!0,Nl(k);else{var D=n(u);D!==null&&Pl(y,D.startTime-R)}}function k(R,D){_=!1,v&&(v=!1,p(I),I=-1),g=!0;var M=h;try{for(m(D),d=n(a);d!==null&&(!(d.expirationTime>D)||R&&!ke());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var ue=re(d.expirationTime<=D);D=t.unstable_now(),typeof ue=="function"?d.callback=ue:d===n(a)&&r(a),m(D)}else r(a);d=n(a)}if(d!==null)var ps=!0;else{var yn=n(u);yn!==null&&Pl(y,yn.startTime-D),ps=!1}return ps}finally{d=null,h=M,g=!1}}var C=!1,E=null,I=-1,U=5,A=-1;function ke(){return!(t.unstable_now()-A<U)}function Jn(){if(E!==null){var R=t.unstable_now();A=R;var D=!0;try{D=E(!0,R)}finally{D?vn():(C=!1,E=null)}}else C=!1}var vn;if(typeof f=="function")vn=function(){f(Jn)};else if(typeof MessageChannel<"u"){var Ad=new MessageChannel,Rv=Ad.port2;Ad.port1.onmessage=Jn,vn=function(){Rv.postMessage(null)}}else vn=function(){T(Jn,0)};function Nl(R){E=R,C||(C=!0,vn())}function Pl(R,D){I=T(function(){R(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Nl(k))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var M=h;h=D;try{return R()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,D){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var M=h;h=R;try{return D()}finally{h=M}},t.unstable_scheduleCallback=function(R,D,M){var re=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?re+M:re):M=re,R){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=M+ue,R={id:c++,callback:D,priorityLevel:R,startTime:M,expirationTime:ue,sortIndex:-1},M>re?(R.sortIndex=M,e(u,R),n(a)===null&&R===n(u)&&(v?(p(I),I=-1):v=!0,Pl(y,M-re))):(R.sortIndex=ue,e(a,R),_||g||(_=!0,Nl(k))),R},t.unstable_shouldYield=ke,t.unstable_wrapCallback=function(R){var D=h;return function(){var M=h;h=D;try{return R.apply(this,arguments)}finally{h=M}}}})(gp);mp.exports=gp;var Zv=mp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p=oe,Ve=Zv;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vp=new Set,Ti={};function Kn(t,e){kr(t,e),kr(t+"Capture",e)}function kr(t,e){for(Ti[t]=e,t=0;t<e.length;t++)vp.add(e[t])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),va=Object.prototype.hasOwnProperty,ey=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bd={},Fd={};function ty(t){return va.call(Fd,t)?!0:va.call(bd,t)?!1:ey.test(t)?Fd[t]=!0:(bd[t]=!0,!1)}function ny(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ry(t,e,n,r){if(e===null||typeof e>"u"||ny(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Oe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ye[t]=new Oe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ye[e]=new Oe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ye[t]=new Oe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ye[t]=new Oe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ye[t]=new Oe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ye[t]=new Oe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ye[t]=new Oe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ye[t]=new Oe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ye[t]=new Oe(t,5,!1,t.toLowerCase(),null,!1,!1)});var zu=/[\-:]([a-z])/g;function ju(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zu,ju);ye[e]=new Oe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zu,ju);ye[e]=new Oe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zu,ju);ye[e]=new Oe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ye[t]=new Oe(t,1,!1,t.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ye[t]=new Oe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wu(t,e,n,r){var i=ye.hasOwnProperty(e)?ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ry(e,n,i,r)&&(n=null),r||i===null?ty(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ft=_p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_s=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),Bu=Symbol.for("react.strict_mode"),ya=Symbol.for("react.profiler"),yp=Symbol.for("react.provider"),wp=Symbol.for("react.context"),Vu=Symbol.for("react.forward_ref"),wa=Symbol.for("react.suspense"),Ea=Symbol.for("react.suspense_list"),Hu=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),Ep=Symbol.for("react.offscreen"),Ud=Symbol.iterator;function Qr(t){return t===null||typeof t!="object"?null:(t=Ud&&t[Ud]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Object.assign,Ol;function li(t){if(Ol===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ol=e&&e[1]||""}return`
`+Ol+t}var Al=!1;function Dl(t,e){if(!t||Al)return"";Al=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Al=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?li(t):""}function iy(t){switch(t.tag){case 5:return li(t.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 2:case 15:return t=Dl(t.type,!1),t;case 11:return t=Dl(t.type.render,!1),t;case 1:return t=Dl(t.type,!0),t;default:return""}}function Ca(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case nr:return"Fragment";case tr:return"Portal";case ya:return"Profiler";case Bu:return"StrictMode";case wa:return"Suspense";case Ea:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wp:return(t.displayName||"Context")+".Consumer";case yp:return(t._context.displayName||"Context")+".Provider";case Vu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hu:return e=t.displayName||null,e!==null?e:Ca(t.type)||"Memo";case Wt:e=t._payload,t=t._init;try{return Ca(t(e))}catch{}}return null}function sy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ca(e);case 8:return e===Bu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oy(t){var e=Cp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vs(t){t._valueTracker||(t._valueTracker=oy(t))}function Sp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Cp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sa(t,e){var n=e.checked;return Z({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=cn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ip(t,e){e=e.checked,e!=null&&Wu(t,"checked",e,!1)}function Ia(t,e){Ip(t,e);var n=cn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ta(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ta(t,e.type,cn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ta(t,e,n){(e!=="number"||Zs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ai=Array.isArray;function pr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+cn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ka(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return Z({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(ai(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cn(n)}}function Tp(t,e){var n=cn(e.value),r=cn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Bd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function kp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Na(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?kp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ys,Np=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ys=ys||document.createElement("div"),ys.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ys.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ki(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ly=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(t){ly.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),di[e]=di[t]})});function Pp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||di.hasOwnProperty(t)&&di[t]?(""+e).trim():e+"px"}function Rp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ay=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pa(t,e){if(e){if(ay[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function Ra(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xa=null;function $u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oa=null,mr=null,gr=null;function Vd(t){if(t=rs(t)){if(typeof Oa!="function")throw Error(w(280));var e=t.stateNode;e&&(e=el(e),Oa(t.stateNode,t.type,e))}}function xp(t){mr?gr?gr.push(t):gr=[t]:mr=t}function Op(){if(mr){var t=mr,e=gr;if(gr=mr=null,Vd(t),e)for(t=0;t<e.length;t++)Vd(e[t])}}function Ap(t,e){return t(e)}function Dp(){}var Ml=!1;function Mp(t,e,n){if(Ml)return t(e,n);Ml=!0;try{return Ap(t,e,n)}finally{Ml=!1,(mr!==null||gr!==null)&&(Dp(),Op())}}function Ni(t,e){var n=t.stateNode;if(n===null)return null;var r=el(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Aa=!1;if(xt)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){Aa=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{Aa=!1}function uy(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var hi=!1,eo=null,to=!1,Da=null,cy={onError:function(t){hi=!0,eo=t}};function dy(t,e,n,r,i,s,o,l,a){hi=!1,eo=null,uy.apply(cy,arguments)}function hy(t,e,n,r,i,s,o,l,a){if(dy.apply(this,arguments),hi){if(hi){var u=eo;hi=!1,eo=null}else throw Error(w(198));to||(to=!0,Da=u)}}function Qn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hd(t){if(Qn(t)!==t)throw Error(w(188))}function fy(t){var e=t.alternate;if(!e){if(e=Qn(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Hd(i),t;if(s===r)return Hd(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function bp(t){return t=fy(t),t!==null?Fp(t):null}function Fp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fp(t);if(e!==null)return e;t=t.sibling}return null}var Up=Ve.unstable_scheduleCallback,$d=Ve.unstable_cancelCallback,py=Ve.unstable_shouldYield,my=Ve.unstable_requestPaint,ie=Ve.unstable_now,gy=Ve.unstable_getCurrentPriorityLevel,qu=Ve.unstable_ImmediatePriority,zp=Ve.unstable_UserBlockingPriority,no=Ve.unstable_NormalPriority,_y=Ve.unstable_LowPriority,jp=Ve.unstable_IdlePriority,Yo=null,pt=null;function vy(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Yo,t,void 0,(t.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Ey,yy=Math.log,wy=Math.LN2;function Ey(t){return t>>>=0,t===0?32:31-(yy(t)/wy|0)|0}var ws=64,Es=4194304;function ui(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ro(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ui(l):(s&=o,s!==0&&(r=ui(s)))}else o=n&~i,o!==0?r=ui(o):s!==0&&(r=ui(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-lt(e),i=1<<n,r|=t[n],e&=~i;return r}function Cy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-lt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Cy(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ma(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wp(){var t=ws;return ws<<=1,!(ws&4194240)&&(ws=64),t}function Ll(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ts(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-lt(e),t[e]=n}function Iy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-lt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-lt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function Bp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vp,Ku,Hp,$p,qp,La=!1,Cs=[],Xt=null,Jt=null,Zt=null,Pi=new Map,Ri=new Map,Ht=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qd(t,e){switch(t){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Pi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ri.delete(e.pointerId)}}function Xr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=rs(e),e!==null&&Ku(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ky(t,e,n,r,i){switch(e){case"focusin":return Xt=Xr(Xt,t,e,n,r,i),!0;case"dragenter":return Jt=Xr(Jt,t,e,n,r,i),!0;case"mouseover":return Zt=Xr(Zt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Pi.set(s,Xr(Pi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ri.set(s,Xr(Ri.get(s)||null,t,e,n,r,i)),!0}return!1}function Gp(t){var e=Tn(t.target);if(e!==null){var n=Qn(e);if(n!==null){if(e=n.tag,e===13){if(e=Lp(n),e!==null){t.blockedOn=e,qp(t.priority,function(){Hp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ba(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xa=r,n.target.dispatchEvent(r),xa=null}else return e=rs(n),e!==null&&Ku(e),t.blockedOn=n,!1;e.shift()}return!0}function Gd(t,e,n){zs(t)&&n.delete(e)}function Ny(){La=!1,Xt!==null&&zs(Xt)&&(Xt=null),Jt!==null&&zs(Jt)&&(Jt=null),Zt!==null&&zs(Zt)&&(Zt=null),Pi.forEach(Gd),Ri.forEach(Gd)}function Jr(t,e){t.blockedOn===e&&(t.blockedOn=null,La||(La=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Ny)))}function xi(t){function e(i){return Jr(i,t)}if(0<Cs.length){Jr(Cs[0],t);for(var n=1;n<Cs.length;n++){var r=Cs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xt!==null&&Jr(Xt,t),Jt!==null&&Jr(Jt,t),Zt!==null&&Jr(Zt,t),Pi.forEach(e),Ri.forEach(e),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)Gp(n),n.blockedOn===null&&Ht.shift()}var _r=Ft.ReactCurrentBatchConfig,io=!0;function Py(t,e,n,r){var i=B,s=_r.transition;_r.transition=null;try{B=1,Qu(t,e,n,r)}finally{B=i,_r.transition=s}}function Ry(t,e,n,r){var i=B,s=_r.transition;_r.transition=null;try{B=4,Qu(t,e,n,r)}finally{B=i,_r.transition=s}}function Qu(t,e,n,r){if(io){var i=ba(t,e,n,r);if(i===null)$l(t,e,r,so,n),qd(t,r);else if(ky(i,t,e,n,r))r.stopPropagation();else if(qd(t,r),e&4&&-1<Ty.indexOf(t)){for(;i!==null;){var s=rs(i);if(s!==null&&Vp(s),s=ba(t,e,n,r),s===null&&$l(t,e,r,so,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $l(t,e,r,null,n)}}var so=null;function ba(t,e,n,r){if(so=null,t=$u(r),t=Tn(t),t!==null)if(e=Qn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return so=t,null}function Kp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gy()){case qu:return 1;case zp:return 4;case no:case _y:return 16;case jp:return 536870912;default:return 16}default:return 16}}var Qt=null,Yu=null,js=null;function Qp(){if(js)return js;var t,e=Yu,n=e.length,r,i="value"in Qt?Qt.value:Qt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return js=i.slice(t,1<r?1-r:void 0)}function Ws(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ss(){return!0}function Kd(){return!1}function $e(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ss:Kd,this.isPropagationStopped=Kd,this}return Z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ss)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ss)},persist:function(){},isPersistent:Ss}),e}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xu=$e(Wr),ns=Z({},Wr,{view:0,detail:0}),xy=$e(ns),bl,Fl,Zr,Xo=Z({},ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zr&&(Zr&&t.type==="mousemove"?(bl=t.screenX-Zr.screenX,Fl=t.screenY-Zr.screenY):Fl=bl=0,Zr=t),bl)},movementY:function(t){return"movementY"in t?t.movementY:Fl}}),Qd=$e(Xo),Oy=Z({},Xo,{dataTransfer:0}),Ay=$e(Oy),Dy=Z({},ns,{relatedTarget:0}),Ul=$e(Dy),My=Z({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ly=$e(My),by=Z({},Wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fy=$e(by),Uy=Z({},Wr,{data:0}),Yd=$e(Uy),zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function By(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Wy[t])?!!e[t]:!1}function Ju(){return By}var Vy=Z({},ns,{key:function(t){if(t.key){var e=zy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ws(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(t){return t.type==="keypress"?Ws(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ws(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hy=$e(Vy),$y=Z({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xd=$e($y),qy=Z({},ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),Gy=$e(qy),Ky=Z({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qy=$e(Ky),Yy=Z({},Xo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xy=$e(Yy),Jy=[9,13,27,32],Zu=xt&&"CompositionEvent"in window,fi=null;xt&&"documentMode"in document&&(fi=document.documentMode);var Zy=xt&&"TextEvent"in window&&!fi,Yp=xt&&(!Zu||fi&&8<fi&&11>=fi),Jd=String.fromCharCode(32),Zd=!1;function Xp(t,e){switch(t){case"keyup":return Jy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rr=!1;function e0(t,e){switch(t){case"compositionend":return Jp(e);case"keypress":return e.which!==32?null:(Zd=!0,Jd);case"textInput":return t=e.data,t===Jd&&Zd?null:t;default:return null}}function t0(t,e){if(rr)return t==="compositionend"||!Zu&&Xp(t,e)?(t=Qp(),js=Yu=Qt=null,rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yp&&e.locale!=="ko"?null:e.data;default:return null}}var n0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!n0[t.type]:e==="textarea"}function Zp(t,e,n,r){xp(r),e=oo(e,"onChange"),0<e.length&&(n=new Xu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var pi=null,Oi=null;function r0(t){cm(t,0)}function Jo(t){var e=or(t);if(Sp(e))return t}function i0(t,e){if(t==="change")return e}var em=!1;if(xt){var zl;if(xt){var jl="oninput"in document;if(!jl){var th=document.createElement("div");th.setAttribute("oninput","return;"),jl=typeof th.oninput=="function"}zl=jl}else zl=!1;em=zl&&(!document.documentMode||9<document.documentMode)}function nh(){pi&&(pi.detachEvent("onpropertychange",tm),Oi=pi=null)}function tm(t){if(t.propertyName==="value"&&Jo(Oi)){var e=[];Zp(e,Oi,t,$u(t)),Mp(r0,e)}}function s0(t,e,n){t==="focusin"?(nh(),pi=e,Oi=n,pi.attachEvent("onpropertychange",tm)):t==="focusout"&&nh()}function o0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jo(Oi)}function l0(t,e){if(t==="click")return Jo(e)}function a0(t,e){if(t==="input"||t==="change")return Jo(e)}function u0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ct=typeof Object.is=="function"?Object.is:u0;function Ai(t,e){if(ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!va.call(e,i)||!ct(t[i],e[i]))return!1}return!0}function rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ih(t,e){var n=rh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rh(n)}}function nm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?nm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rm(){for(var t=window,e=Zs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zs(t.document)}return e}function ec(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function c0(t){var e=rm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&nm(n.ownerDocument.documentElement,n)){if(r!==null&&ec(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ih(n,s);var o=ih(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var d0=xt&&"documentMode"in document&&11>=document.documentMode,ir=null,Fa=null,mi=null,Ua=!1;function sh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ua||ir==null||ir!==Zs(r)||(r=ir,"selectionStart"in r&&ec(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mi&&Ai(mi,r)||(mi=r,r=oo(Fa,"onSelect"),0<r.length&&(e=new Xu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ir)))}function Is(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var sr={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionend:Is("Transition","TransitionEnd")},Wl={},im={};xt&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Zo(t){if(Wl[t])return Wl[t];if(!sr[t])return t;var e=sr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in im)return Wl[t]=e[n];return t}var sm=Zo("animationend"),om=Zo("animationiteration"),lm=Zo("animationstart"),am=Zo("transitionend"),um=new Map,oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(t,e){um.set(t,e),Kn(e,[t])}for(var Bl=0;Bl<oh.length;Bl++){var Vl=oh[Bl],h0=Vl.toLowerCase(),f0=Vl[0].toUpperCase()+Vl.slice(1);pn(h0,"on"+f0)}pn(sm,"onAnimationEnd");pn(om,"onAnimationIteration");pn(lm,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(am,"onTransitionEnd");kr("onMouseEnter",["mouseout","mouseover"]);kr("onMouseLeave",["mouseout","mouseover"]);kr("onPointerEnter",["pointerout","pointerover"]);kr("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function lh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hy(r,e,void 0,t),t.currentTarget=null}function cm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;lh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;lh(i,l,u),s=a}}}if(to)throw t=Da,to=!1,Da=null,t}function K(t,e){var n=e[Va];n===void 0&&(n=e[Va]=new Set);var r=t+"__bubble";n.has(r)||(dm(e,t,2,!1),n.add(r))}function Hl(t,e,n){var r=0;e&&(r|=4),dm(n,t,r,e)}var Ts="_reactListening"+Math.random().toString(36).slice(2);function Di(t){if(!t[Ts]){t[Ts]=!0,vp.forEach(function(n){n!=="selectionchange"&&(p0.has(n)||Hl(n,!1,t),Hl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ts]||(e[Ts]=!0,Hl("selectionchange",!1,e))}}function dm(t,e,n,r){switch(Kp(e)){case 1:var i=Py;break;case 4:i=Ry;break;default:i=Qu}n=i.bind(null,e,n,t),i=void 0,!Aa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $l(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Tn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Mp(function(){var u=s,c=$u(n),d=[];e:{var h=um.get(t);if(h!==void 0){var g=Xu,_=t;switch(t){case"keypress":if(Ws(n)===0)break e;case"keydown":case"keyup":g=Hy;break;case"focusin":_="focus",g=Ul;break;case"focusout":_="blur",g=Ul;break;case"beforeblur":case"afterblur":g=Ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Gy;break;case sm:case om:case lm:g=Ly;break;case am:g=Qy;break;case"scroll":g=xy;break;case"wheel":g=Xy;break;case"copy":case"cut":case"paste":g=Fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Xd}var v=(e&4)!==0,T=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Ni(f,p),y!=null&&v.push(Mi(f,y,m)))),T)break;f=f.return}0<v.length&&(h=new g(h,_,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==xa&&(_=n.relatedTarget||n.fromElement)&&(Tn(_)||_[Ot]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Tn(_):null,_!==null&&(T=Qn(_),_!==T||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=Qd,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Xd,y="onPointerLeave",p="onPointerEnter",f="pointer"),T=g==null?h:or(g),m=_==null?h:or(_),h=new v(y,f+"leave",g,n,c),h.target=T,h.relatedTarget=m,y=null,Tn(c)===u&&(v=new v(p,f+"enter",_,n,c),v.target=m,v.relatedTarget=T,y=v),T=y,g&&_)t:{for(v=g,p=_,f=0,m=v;m;m=Zn(m))f++;for(m=0,y=p;y;y=Zn(y))m++;for(;0<f-m;)v=Zn(v),f--;for(;0<m-f;)p=Zn(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Zn(v),p=Zn(p)}v=null}else v=null;g!==null&&ah(d,h,g,v,!1),_!==null&&T!==null&&ah(d,T,_,v,!0)}}e:{if(h=u?or(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=i0;else if(eh(h))if(em)k=a0;else{k=o0;var C=s0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=l0);if(k&&(k=k(t,u))){Zp(d,k,n,c);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Ta(h,"number",h.value)}switch(C=u?or(u):window,t){case"focusin":(eh(C)||C.contentEditable==="true")&&(ir=C,Fa=u,mi=null);break;case"focusout":mi=Fa=ir=null;break;case"mousedown":Ua=!0;break;case"contextmenu":case"mouseup":case"dragend":Ua=!1,sh(d,n,c);break;case"selectionchange":if(d0)break;case"keydown":case"keyup":sh(d,n,c)}var E;if(Zu)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else rr?Xp(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Yp&&n.locale!=="ko"&&(rr||I!=="onCompositionStart"?I==="onCompositionEnd"&&rr&&(E=Qp()):(Qt=c,Yu="value"in Qt?Qt.value:Qt.textContent,rr=!0)),C=oo(u,I),0<C.length&&(I=new Yd(I,t,null,n,c),d.push({event:I,listeners:C}),E?I.data=E:(E=Jp(n),E!==null&&(I.data=E)))),(E=Zy?e0(t,n):t0(t,n))&&(u=oo(u,"onBeforeInput"),0<u.length&&(c=new Yd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}cm(d,e)})}function Mi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ni(t,n),s!=null&&r.unshift(Mi(t,s,i)),s=Ni(t,e),s!=null&&r.push(Mi(t,s,i))),t=t.return}return r}function Zn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ah(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ni(n,s),a!=null&&o.unshift(Mi(n,a,l))):i||(a=Ni(n,s),a!=null&&o.push(Mi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var m0=/\r\n?/g,g0=/\u0000|\uFFFD/g;function uh(t){return(typeof t=="string"?t:""+t).replace(m0,`
`).replace(g0,"")}function ks(t,e,n){if(e=uh(e),uh(t)!==e&&n)throw Error(w(425))}function lo(){}var za=null,ja=null;function Wa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ba=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,v0=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(t){return ch.resolve(null).then(t).catch(y0)}:Ba;function y0(t){setTimeout(function(){throw t})}function ql(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xi(e)}function en(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Br=Math.random().toString(36).slice(2),ft="__reactFiber$"+Br,Li="__reactProps$"+Br,Ot="__reactContainer$"+Br,Va="__reactEvents$"+Br,w0="__reactListeners$"+Br,E0="__reactHandles$"+Br;function Tn(t){var e=t[ft];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ot]||n[ft]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dh(t);t!==null;){if(n=t[ft])return n;t=dh(t)}return e}t=n,n=t.parentNode}return null}function rs(t){return t=t[ft]||t[Ot],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function or(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function el(t){return t[Li]||null}var Ha=[],lr=-1;function mn(t){return{current:t}}function Q(t){0>lr||(t.current=Ha[lr],Ha[lr]=null,lr--)}function G(t,e){lr++,Ha[lr]=t.current,t.current=e}var dn={},Ie=mn(dn),be=mn(!1),bn=dn;function Nr(t,e){var n=t.type.contextTypes;if(!n)return dn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(t){return t=t.childContextTypes,t!=null}function ao(){Q(be),Q(Ie)}function hh(t,e,n){if(Ie.current!==dn)throw Error(w(168));G(Ie,e),G(be,n)}function hm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,sy(t)||"Unknown",i));return Z({},n,r)}function uo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dn,bn=Ie.current,G(Ie,t),G(be,be.current),!0}function fh(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=hm(t,e,bn),r.__reactInternalMemoizedMergedChildContext=t,Q(be),Q(Ie),G(Ie,t)):Q(be),G(be,n)}var Et=null,tl=!1,Gl=!1;function fm(t){Et===null?Et=[t]:Et.push(t)}function C0(t){tl=!0,fm(t)}function gn(){if(!Gl&&Et!==null){Gl=!0;var t=0,e=B;try{var n=Et;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Et=null,tl=!1}catch(i){throw Et!==null&&(Et=Et.slice(t+1)),Up(qu,gn),i}finally{B=e,Gl=!1}}return null}var ar=[],ur=0,co=null,ho=0,qe=[],Ge=0,Fn=null,St=1,It="";function En(t,e){ar[ur++]=ho,ar[ur++]=co,co=t,ho=e}function pm(t,e,n){qe[Ge++]=St,qe[Ge++]=It,qe[Ge++]=Fn,Fn=t;var r=St;t=It;var i=32-lt(r)-1;r&=~(1<<i),n+=1;var s=32-lt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,St=1<<32-lt(e)+i|n<<i|r,It=s+t}else St=1<<s|n<<i|r,It=t}function tc(t){t.return!==null&&(En(t,1),pm(t,1,0))}function nc(t){for(;t===co;)co=ar[--ur],ar[ur]=null,ho=ar[--ur],ar[ur]=null;for(;t===Fn;)Fn=qe[--Ge],qe[Ge]=null,It=qe[--Ge],qe[Ge]=null,St=qe[--Ge],qe[Ge]=null}var Be=null,We=null,Y=!1,it=null;function mm(t,e){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ph(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Be=t,We=en(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Be=t,We=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fn!==null?{id:St,overflow:It}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Be=t,We=null,!0):!1;default:return!1}}function $a(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qa(t){if(Y){var e=We;if(e){var n=e;if(!ph(t,e)){if($a(t))throw Error(w(418));e=en(n.nextSibling);var r=Be;e&&ph(t,e)?mm(r,n):(t.flags=t.flags&-4097|2,Y=!1,Be=t)}}else{if($a(t))throw Error(w(418));t.flags=t.flags&-4097|2,Y=!1,Be=t}}}function mh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Be=t}function Ns(t){if(t!==Be)return!1;if(!Y)return mh(t),Y=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wa(t.type,t.memoizedProps)),e&&(e=We)){if($a(t))throw gm(),Error(w(418));for(;e;)mm(t,e),e=en(e.nextSibling)}if(mh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){We=en(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}We=null}}else We=Be?en(t.stateNode.nextSibling):null;return!0}function gm(){for(var t=We;t;)t=en(t.nextSibling)}function Pr(){We=Be=null,Y=!1}function rc(t){it===null?it=[t]:it.push(t)}var S0=Ft.ReactCurrentBatchConfig;function tt(t,e){if(t&&t.defaultProps){e=Z({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fo=mn(null),po=null,cr=null,ic=null;function sc(){ic=cr=po=null}function oc(t){var e=fo.current;Q(fo),t._currentValue=e}function Ga(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function vr(t,e){po=t,ic=cr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(De=!0),t.firstContext=null)}function Xe(t){var e=t._currentValue;if(ic!==t)if(t={context:t,memoizedValue:e,next:null},cr===null){if(po===null)throw Error(w(308));cr=t,po.dependencies={lanes:0,firstContext:t}}else cr=cr.next=t;return e}var kn=null;function lc(t){kn===null?kn=[t]:kn.push(t)}function _m(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lc(e)):(n.next=i.next,i.next=n),e.interleaved=n,At(t,r)}function At(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bt=!1;function ac(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,At(t,n)}return i=r.interleaved,i===null?(e.next=e,lc(r)):(e.next=i.next,i.next=e),r.interleaved=e,At(t,n)}function Bs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gu(t,n)}}function gh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function mo(t,e,n,r){var i=t.updateQueue;Bt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(g,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(g,d,h):_,h==null)break e;d=Z({},d,h);break e;case 2:Bt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=g,a=d):c=c.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zn|=o,t.lanes=o,t.memoizedState=d}}function _h(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var ym=new _p.Component().refs;function Ka(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Z({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nl={isMounted:function(t){return(t=t._reactInternals)?Qn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Re(),i=rn(t),s=Pt(r,i);s.payload=e,n!=null&&(s.callback=n),e=tn(t,s,i),e!==null&&(at(e,t,i,r),Bs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Re(),i=rn(t),s=Pt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tn(t,s,i),e!==null&&(at(e,t,i,r),Bs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Re(),r=rn(t),i=Pt(n,r);i.tag=2,e!=null&&(i.callback=e),e=tn(t,i,r),e!==null&&(at(e,t,r,n),Bs(e,t,r))}};function vh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ai(n,r)||!Ai(i,s):!0}function wm(t,e,n){var r=!1,i=dn,s=e.contextType;return typeof s=="object"&&s!==null?s=Xe(s):(i=Fe(e)?bn:Ie.current,r=e.contextTypes,s=(r=r!=null)?Nr(t,i):dn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function yh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nl.enqueueReplaceState(e,e.state,null)}function Qa(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=ym,ac(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xe(s):(s=Fe(e)?bn:Ie.current,i.context=Nr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ka(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&nl.enqueueReplaceState(i,i.state,null),mo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ei(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===ym&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function Ps(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wh(t){var e=t._init;return e(t._payload)}function Em(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=sn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,y){return f===null||f.tag!==6?(f=ea(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,y){var k=m.type;return k===nr?c(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Wt&&wh(k)===f.type)?(y=i(f,m.props),y.ref=ei(p,f,m),y.return=p,y):(y=Ks(m.type,m.key,m.props,null,p.mode,y),y.ref=ei(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ta(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,y,k){return f===null||f.tag!==7?(f=Dn(m,p.mode,y,k),f.return=p,f):(f=i(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ea(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _s:return m=Ks(f.type,f.key,f.props,null,p.mode,m),m.ref=ei(p,null,f),m.return=p,m;case tr:return f=ta(f,p.mode,m),f.return=p,f;case Wt:var y=f._init;return d(p,y(f._payload),m)}if(ai(f)||Qr(f))return f=Dn(f,p.mode,m,null),f.return=p,f;Ps(p,f)}return null}function h(p,f,m,y){var k=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:l(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _s:return m.key===k?a(p,f,m,y):null;case tr:return m.key===k?u(p,f,m,y):null;case Wt:return k=m._init,h(p,f,k(m._payload),y)}if(ai(m)||Qr(m))return k!==null?null:c(p,f,m,y,null);Ps(p,m)}return null}function g(p,f,m,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(f,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _s:return p=p.get(y.key===null?m:y.key)||null,a(f,p,y,k);case tr:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,k);case Wt:var C=y._init;return g(p,f,m,C(y._payload),k)}if(ai(y)||Qr(y))return p=p.get(m)||null,c(f,p,y,k,null);Ps(f,y)}return null}function _(p,f,m,y){for(var k=null,C=null,E=f,I=f=0,U=null;E!==null&&I<m.length;I++){E.index>I?(U=E,E=null):U=E.sibling;var A=h(p,E,m[I],y);if(A===null){E===null&&(E=U);break}t&&E&&A.alternate===null&&e(p,E),f=s(A,f,I),C===null?k=A:C.sibling=A,C=A,E=U}if(I===m.length)return n(p,E),Y&&En(p,I),k;if(E===null){for(;I<m.length;I++)E=d(p,m[I],y),E!==null&&(f=s(E,f,I),C===null?k=E:C.sibling=E,C=E);return Y&&En(p,I),k}for(E=r(p,E);I<m.length;I++)U=g(E,p,I,m[I],y),U!==null&&(t&&U.alternate!==null&&E.delete(U.key===null?I:U.key),f=s(U,f,I),C===null?k=U:C.sibling=U,C=U);return t&&E.forEach(function(ke){return e(p,ke)}),Y&&En(p,I),k}function v(p,f,m,y){var k=Qr(m);if(typeof k!="function")throw Error(w(150));if(m=k.call(m),m==null)throw Error(w(151));for(var C=k=null,E=f,I=f=0,U=null,A=m.next();E!==null&&!A.done;I++,A=m.next()){E.index>I?(U=E,E=null):U=E.sibling;var ke=h(p,E,A.value,y);if(ke===null){E===null&&(E=U);break}t&&E&&ke.alternate===null&&e(p,E),f=s(ke,f,I),C===null?k=ke:C.sibling=ke,C=ke,E=U}if(A.done)return n(p,E),Y&&En(p,I),k;if(E===null){for(;!A.done;I++,A=m.next())A=d(p,A.value,y),A!==null&&(f=s(A,f,I),C===null?k=A:C.sibling=A,C=A);return Y&&En(p,I),k}for(E=r(p,E);!A.done;I++,A=m.next())A=g(E,p,I,A.value,y),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?I:A.key),f=s(A,f,I),C===null?k=A:C.sibling=A,C=A);return t&&E.forEach(function(Jn){return e(p,Jn)}),Y&&En(p,I),k}function T(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===nr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case _s:e:{for(var k=m.key,C=f;C!==null;){if(C.key===k){if(k=m.type,k===nr){if(C.tag===7){n(p,C.sibling),f=i(C,m.props.children),f.return=p,p=f;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Wt&&wh(k)===C.type){n(p,C.sibling),f=i(C,m.props),f.ref=ei(p,C,m),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}m.type===nr?(f=Dn(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=Ks(m.type,m.key,m.props,null,p.mode,y),y.ref=ei(p,f,m),y.return=p,p=y)}return o(p);case tr:e:{for(C=m.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=ta(m,p.mode,y),f.return=p,p=f}return o(p);case Wt:return C=m._init,T(p,f,C(m._payload),y)}if(ai(m))return _(p,f,m,y);if(Qr(m))return v(p,f,m,y);Ps(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=ea(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return T}var Rr=Em(!0),Cm=Em(!1),is={},mt=mn(is),bi=mn(is),Fi=mn(is);function Nn(t){if(t===is)throw Error(w(174));return t}function uc(t,e){switch(G(Fi,e),G(bi,t),G(mt,is),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Na(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Na(e,t)}Q(mt),G(mt,e)}function xr(){Q(mt),Q(bi),Q(Fi)}function Sm(t){Nn(Fi.current);var e=Nn(mt.current),n=Na(e,t.type);e!==n&&(G(bi,t),G(mt,n))}function cc(t){bi.current===t&&(Q(mt),Q(bi))}var X=mn(0);function go(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kl=[];function dc(){for(var t=0;t<Kl.length;t++)Kl[t]._workInProgressVersionPrimary=null;Kl.length=0}var Vs=Ft.ReactCurrentDispatcher,Ql=Ft.ReactCurrentBatchConfig,Un=0,J=null,le=null,de=null,_o=!1,gi=!1,Ui=0,I0=0;function Ee(){throw Error(w(321))}function hc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ct(t[n],e[n]))return!1;return!0}function fc(t,e,n,r,i,s){if(Un=s,J=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vs.current=t===null||t.memoizedState===null?P0:R0,t=n(r,i),gi){s=0;do{if(gi=!1,Ui=0,25<=s)throw Error(w(301));s+=1,de=le=null,e.updateQueue=null,Vs.current=x0,t=n(r,i)}while(gi)}if(Vs.current=vo,e=le!==null&&le.next!==null,Un=0,de=le=J=null,_o=!1,e)throw Error(w(300));return t}function pc(){var t=Ui!==0;return Ui=0,t}function ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?J.memoizedState=de=t:de=de.next=t,de}function Je(){if(le===null){var t=J.alternate;t=t!==null?t.memoizedState:null}else t=le.next;var e=de===null?J.memoizedState:de.next;if(e!==null)de=e,le=t;else{if(t===null)throw Error(w(310));le=t,t={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},de===null?J.memoizedState=de=t:de=de.next=t}return de}function zi(t,e){return typeof e=="function"?e(t):e}function Yl(t){var e=Je(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Un&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,J.lanes|=c,zn|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ct(r,e.memoizedState)||(De=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,J.lanes|=s,zn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xl(t){var e=Je(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ct(s,e.memoizedState)||(De=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Im(){}function Tm(t,e){var n=J,r=Je(),i=e(),s=!ct(r.memoizedState,i);if(s&&(r.memoizedState=i,De=!0),r=r.queue,mc(Pm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,ji(9,Nm.bind(null,n,r,i,e),void 0,null),pe===null)throw Error(w(349));Un&30||km(n,e,i)}return i}function km(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=J.updateQueue,e===null?(e={lastEffect:null,stores:null},J.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Nm(t,e,n,r){e.value=n,e.getSnapshot=r,Rm(e)&&xm(t)}function Pm(t,e,n){return n(function(){Rm(e)&&xm(t)})}function Rm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ct(t,n)}catch{return!0}}function xm(t){var e=At(t,1);e!==null&&at(e,t,1,-1)}function Eh(t){var e=ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:t},e.queue=t,t=t.dispatch=N0.bind(null,J,t),[e.memoizedState,t]}function ji(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=J.updateQueue,e===null?(e={lastEffect:null,stores:null},J.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Om(){return Je().memoizedState}function Hs(t,e,n,r){var i=ht();J.flags|=t,i.memoizedState=ji(1|e,n,void 0,r===void 0?null:r)}function rl(t,e,n,r){var i=Je();r=r===void 0?null:r;var s=void 0;if(le!==null){var o=le.memoizedState;if(s=o.destroy,r!==null&&hc(r,o.deps)){i.memoizedState=ji(e,n,s,r);return}}J.flags|=t,i.memoizedState=ji(1|e,n,s,r)}function Ch(t,e){return Hs(8390656,8,t,e)}function mc(t,e){return rl(2048,8,t,e)}function Am(t,e){return rl(4,2,t,e)}function Dm(t,e){return rl(4,4,t,e)}function Mm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Lm(t,e,n){return n=n!=null?n.concat([t]):null,rl(4,4,Mm.bind(null,e,t),n)}function gc(){}function bm(t,e){var n=Je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Fm(t,e){var n=Je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Um(t,e,n){return Un&21?(ct(n,e)||(n=Wp(),J.lanes|=n,zn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,De=!0),t.memoizedState=n)}function T0(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=Ql.transition;Ql.transition={};try{t(!1),e()}finally{B=n,Ql.transition=r}}function zm(){return Je().memoizedState}function k0(t,e,n){var r=rn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jm(t))Wm(e,n);else if(n=_m(t,e,n,r),n!==null){var i=Re();at(n,t,r,i),Bm(n,e,r)}}function N0(t,e,n){var r=rn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jm(t))Wm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ct(l,o)){var a=e.interleaved;a===null?(i.next=i,lc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=_m(t,e,i,r),n!==null&&(i=Re(),at(n,t,r,i),Bm(n,e,r))}}function jm(t){var e=t.alternate;return t===J||e!==null&&e===J}function Wm(t,e){gi=_o=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Bm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gu(t,n)}}var vo={readContext:Xe,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},P0={readContext:Xe,useCallback:function(t,e){return ht().memoizedState=[t,e===void 0?null:e],t},useContext:Xe,useEffect:Ch,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hs(4194308,4,Mm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hs(4,2,t,e)},useMemo:function(t,e){var n=ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=k0.bind(null,J,t),[r.memoizedState,t]},useRef:function(t){var e=ht();return t={current:t},e.memoizedState=t},useState:Eh,useDebugValue:gc,useDeferredValue:function(t){return ht().memoizedState=t},useTransition:function(){var t=Eh(!1),e=t[0];return t=T0.bind(null,t[1]),ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=J,i=ht();if(Y){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),pe===null)throw Error(w(349));Un&30||km(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ch(Pm.bind(null,r,s,t),[t]),r.flags|=2048,ji(9,Nm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ht(),e=pe.identifierPrefix;if(Y){var n=It,r=St;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ui++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=I0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},R0={readContext:Xe,useCallback:bm,useContext:Xe,useEffect:mc,useImperativeHandle:Lm,useInsertionEffect:Am,useLayoutEffect:Dm,useMemo:Fm,useReducer:Yl,useRef:Om,useState:function(){return Yl(zi)},useDebugValue:gc,useDeferredValue:function(t){var e=Je();return Um(e,le.memoizedState,t)},useTransition:function(){var t=Yl(zi)[0],e=Je().memoizedState;return[t,e]},useMutableSource:Im,useSyncExternalStore:Tm,useId:zm,unstable_isNewReconciler:!1},x0={readContext:Xe,useCallback:bm,useContext:Xe,useEffect:mc,useImperativeHandle:Lm,useInsertionEffect:Am,useLayoutEffect:Dm,useMemo:Fm,useReducer:Xl,useRef:Om,useState:function(){return Xl(zi)},useDebugValue:gc,useDeferredValue:function(t){var e=Je();return le===null?e.memoizedState=t:Um(e,le.memoizedState,t)},useTransition:function(){var t=Xl(zi)[0],e=Je().memoizedState;return[t,e]},useMutableSource:Im,useSyncExternalStore:Tm,useId:zm,unstable_isNewReconciler:!1};function Or(t,e){try{var n="",r=e;do n+=iy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Jl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ya(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var O0=typeof WeakMap=="function"?WeakMap:Map;function Vm(t,e,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wo||(wo=!0,ou=r),Ya(t,e)},n}function Hm(t,e,n){n=Pt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ya(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ya(t,e),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new O0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=$0.bind(null,t,e,n),e.then(t,t))}function Ih(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Th(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pt(-1,1),e.tag=2,tn(n,e,1))),n.lanes|=1),t)}var A0=Ft.ReactCurrentOwner,De=!1;function Ne(t,e,n,r){e.child=t===null?Cm(e,null,n,r):Rr(e,t.child,n,r)}function kh(t,e,n,r,i){n=n.render;var s=e.ref;return vr(e,i),r=fc(t,e,n,r,s,i),n=pc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dt(t,e,i)):(Y&&n&&tc(e),e.flags|=1,Ne(t,e,r,i),e.child)}function Nh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ic(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$m(t,e,s,r,i)):(t=Ks(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ai,n(o,r)&&t.ref===e.ref)return Dt(t,e,i)}return e.flags|=1,t=sn(s,r),t.ref=e.ref,t.return=e,e.child=t}function $m(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ai(s,r)&&t.ref===e.ref)if(De=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(De=!0);else return e.lanes=t.lanes,Dt(t,e,i)}return Xa(t,e,n,r,i)}function qm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(hr,je),je|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,G(hr,je),je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,G(hr,je),je|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,G(hr,je),je|=r;return Ne(t,e,i,n),e.child}function Gm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xa(t,e,n,r,i){var s=Fe(n)?bn:Ie.current;return s=Nr(e,s),vr(e,i),n=fc(t,e,n,r,s,i),r=pc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dt(t,e,i)):(Y&&r&&tc(e),e.flags|=1,Ne(t,e,n,i),e.child)}function Ph(t,e,n,r,i){if(Fe(n)){var s=!0;uo(e)}else s=!1;if(vr(e,i),e.stateNode===null)$s(t,e),wm(e,n,r),Qa(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xe(u):(u=Fe(n)?bn:Ie.current,u=Nr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&yh(e,o,r,u),Bt=!1;var h=e.memoizedState;o.state=h,mo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||be.current||Bt?(typeof c=="function"&&(Ka(e,n,c,r),a=e.memoizedState),(l=Bt||vh(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,vm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:tt(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Xe(a):(a=Fe(n)?bn:Ie.current,a=Nr(e,a));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&yh(e,o,r,a),Bt=!1,h=e.memoizedState,o.state=h,mo(e,r,o,i);var _=e.memoizedState;l!==d||h!==_||be.current||Bt?(typeof g=="function"&&(Ka(e,n,g,r),_=e.memoizedState),(u=Bt||vh(e,n,u,r,h,_,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Ja(t,e,n,r,s,i)}function Ja(t,e,n,r,i,s){Gm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fh(e,n,!1),Dt(t,e,s);r=e.stateNode,A0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Rr(e,t.child,null,s),e.child=Rr(e,null,l,s)):Ne(t,e,l,s),e.memoizedState=r.state,i&&fh(e,n,!0),e.child}function Km(t){var e=t.stateNode;e.pendingContext?hh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hh(t,e.context,!1),uc(t,e.containerInfo)}function Rh(t,e,n,r,i){return Pr(),rc(i),e.flags|=256,Ne(t,e,n,r),e.child}var Za={dehydrated:null,treeContext:null,retryLane:0};function eu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qm(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),G(X,i&1),t===null)return qa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ol(o,r,0,null),t=Dn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=eu(n),e.memoizedState=Za,t):_c(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return D0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=sn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=sn(l,s):(s=Dn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?eu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Za,r}return s=t.child,t=s.sibling,r=sn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _c(t,e){return e=ol({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Rs(t,e,n,r){return r!==null&&rc(r),Rr(e,t.child,null,n),t=_c(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function D0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Jl(Error(w(422))),Rs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ol({mode:"visible",children:r.children},i,0,null),s=Dn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Rr(e,t.child,null,o),e.child.memoizedState=eu(o),e.memoizedState=Za,s);if(!(e.mode&1))return Rs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=Jl(s,r,void 0),Rs(t,e,o,r)}if(l=(o&t.childLanes)!==0,De||l){if(r=pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,At(t,i),at(r,t,i,-1))}return Sc(),r=Jl(Error(w(421))),Rs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=q0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,We=en(i.nextSibling),Be=e,Y=!0,it=null,t!==null&&(qe[Ge++]=St,qe[Ge++]=It,qe[Ge++]=Fn,St=t.id,It=t.overflow,Fn=e),e=_c(e,r.children),e.flags|=4096,e)}function xh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ga(t.return,e,n)}function Zl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ym(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ne(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xh(t,n,e);else if(t.tag===19)xh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(G(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&go(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Zl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&go(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Zl(e,!0,n,null,s);break;case"together":Zl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $s(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=sn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function M0(t,e,n){switch(e.tag){case 3:Km(e),Pr();break;case 5:Sm(e);break;case 1:Fe(e.type)&&uo(e);break;case 4:uc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;G(fo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(G(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?Qm(t,e,n):(G(X,X.current&1),t=Dt(t,e,n),t!==null?t.sibling:null);G(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ym(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,qm(t,e,n)}return Dt(t,e,n)}var Xm,tu,Jm,Zm;Xm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tu=function(){};Jm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Nn(mt.current);var s=null;switch(n){case"input":i=Sa(t,i),r=Sa(t,r),s=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),s=[];break;case"textarea":i=ka(t,i),r=ka(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=lo)}Pa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ti.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ti.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&K("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Zm=function(t,e,n,r){n!==r&&(e.flags|=4)};function ti(t,e){if(!Y)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ce(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function L0(t,e,n){var r=e.pendingProps;switch(nc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(e),null;case 1:return Fe(e.type)&&ao(),Ce(e),null;case 3:return r=e.stateNode,xr(),Q(be),Q(Ie),dc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ns(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,it!==null&&(uu(it),it=null))),tu(t,e),Ce(e),null;case 5:cc(e);var i=Nn(Fi.current);if(n=e.type,t!==null&&e.stateNode!=null)Jm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return Ce(e),null}if(t=Nn(mt.current),Ns(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ft]=e,r[Li]=s,t=(e.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<ci.length;i++)K(ci[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":zd(r,s),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},K("invalid",r);break;case"textarea":Wd(r,s),K("invalid",r)}Pa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ks(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ks(r.textContent,l,t),i=["children",""+l]):Ti.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":vs(r),jd(r,s,!0);break;case"textarea":vs(r),Bd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=lo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ft]=e,t[Li]=r,Xm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ra(n,r),n){case"dialog":K("cancel",t),K("close",t),i=r;break;case"iframe":case"object":case"embed":K("load",t),i=r;break;case"video":case"audio":for(i=0;i<ci.length;i++)K(ci[i],t);i=r;break;case"source":K("error",t),i=r;break;case"img":case"image":case"link":K("error",t),K("load",t),i=r;break;case"details":K("toggle",t),i=r;break;case"input":zd(t,r),i=Sa(t,r),K("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),K("invalid",t);break;case"textarea":Wd(t,r),i=ka(t,r),K("invalid",t);break;default:i=r}Pa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Rp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Np(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ki(t,a):typeof a=="number"&&ki(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ti.hasOwnProperty(s)?a!=null&&s==="onScroll"&&K("scroll",t):a!=null&&Wu(t,s,a,o))}switch(n){case"input":vs(t),jd(t,r,!1);break;case"textarea":vs(t),Bd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+cn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?pr(t,!!r.multiple,s,!1):r.defaultValue!=null&&pr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ce(e),null;case 6:if(t&&e.stateNode!=null)Zm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Nn(Fi.current),Nn(mt.current),Ns(e)){if(r=e.stateNode,n=e.memoizedProps,r[ft]=e,(s=r.nodeValue!==n)&&(t=Be,t!==null))switch(t.tag){case 3:ks(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ks(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=e,e.stateNode=r}return Ce(e),null;case 13:if(Q(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Y&&We!==null&&e.mode&1&&!(e.flags&128))gm(),Pr(),e.flags|=98560,s=!1;else if(s=Ns(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[ft]=e}else Pr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ce(e),s=!1}else it!==null&&(uu(it),it=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?ae===0&&(ae=3):Sc())),e.updateQueue!==null&&(e.flags|=4),Ce(e),null);case 4:return xr(),tu(t,e),t===null&&Di(e.stateNode.containerInfo),Ce(e),null;case 10:return oc(e.type._context),Ce(e),null;case 17:return Fe(e.type)&&ao(),Ce(e),null;case 19:if(Q(X),s=e.memoizedState,s===null)return Ce(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ti(s,!1);else{if(ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=go(t),o!==null){for(e.flags|=128,ti(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return G(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&ie()>Ar&&(e.flags|=128,r=!0,ti(s,!1),e.lanes=4194304)}else{if(!r)if(t=go(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ti(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Y)return Ce(e),null}else 2*ie()-s.renderingStartTime>Ar&&n!==1073741824&&(e.flags|=128,r=!0,ti(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ie(),e.sibling=null,n=X.current,G(X,r?n&1|2:n&1),e):(Ce(e),null);case 22:case 23:return Cc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?je&1073741824&&(Ce(e),e.subtreeFlags&6&&(e.flags|=8192)):Ce(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function b0(t,e){switch(nc(e),e.tag){case 1:return Fe(e.type)&&ao(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xr(),Q(be),Q(Ie),dc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cc(e),null;case 13:if(Q(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));Pr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(X),null;case 4:return xr(),null;case 10:return oc(e.type._context),null;case 22:case 23:return Cc(),null;case 24:return null;default:return null}}var xs=!1,Se=!1,F0=typeof WeakSet=="function"?WeakSet:Set,N=null;function dr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(t,e,r)}else n.current=null}function nu(t,e,n){try{n()}catch(r){ee(t,e,r)}}var Oh=!1;function U0(t,e){if(za=io,t=rm(),ec(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ja={focusedElem:t,selectionRange:n},io=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,T=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:tt(e.type,v),T);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){ee(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return _=Oh,Oh=!1,_}function _i(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&nu(e,n,s)}i=i.next}while(i!==r)}}function il(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ru(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function eg(t){var e=t.alternate;e!==null&&(t.alternate=null,eg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ft],delete e[Li],delete e[Va],delete e[w0],delete e[E0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tg(t){return t.tag===5||t.tag===3||t.tag===4}function Ah(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function iu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=lo));else if(r!==4&&(t=t.child,t!==null))for(iu(t,e,n),t=t.sibling;t!==null;)iu(t,e,n),t=t.sibling}function su(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(su(t,e,n),t=t.sibling;t!==null;)su(t,e,n),t=t.sibling}var me=null,rt=!1;function zt(t,e,n){for(n=n.child;n!==null;)ng(t,e,n),n=n.sibling}function ng(t,e,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Yo,n)}catch{}switch(n.tag){case 5:Se||dr(n,e);case 6:var r=me,i=rt;me=null,zt(t,e,n),me=r,rt=i,me!==null&&(rt?(t=me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(rt?(t=me,n=n.stateNode,t.nodeType===8?ql(t.parentNode,n):t.nodeType===1&&ql(t,n),xi(t)):ql(me,n.stateNode));break;case 4:r=me,i=rt,me=n.stateNode.containerInfo,rt=!0,zt(t,e,n),me=r,rt=i;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nu(n,e,o),i=i.next}while(i!==r)}zt(t,e,n);break;case 1:if(!Se&&(dr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ee(n,e,l)}zt(t,e,n);break;case 21:zt(t,e,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,zt(t,e,n),Se=r):zt(t,e,n);break;default:zt(t,e,n)}}function Dh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new F0),e.forEach(function(r){var i=G0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,rt=!1;break e;case 3:me=l.stateNode.containerInfo,rt=!0;break e;case 4:me=l.stateNode.containerInfo,rt=!0;break e}l=l.return}if(me===null)throw Error(w(160));ng(s,o,i),me=null,rt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ee(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rg(e,t),e=e.sibling}function rg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(et(e,t),dt(t),r&4){try{_i(3,t,t.return),il(3,t)}catch(v){ee(t,t.return,v)}try{_i(5,t,t.return)}catch(v){ee(t,t.return,v)}}break;case 1:et(e,t),dt(t),r&512&&n!==null&&dr(n,n.return);break;case 5:if(et(e,t),dt(t),r&512&&n!==null&&dr(n,n.return),t.flags&32){var i=t.stateNode;try{ki(i,"")}catch(v){ee(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ip(i,s),Ra(l,o);var u=Ra(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?Rp(i,d):c==="dangerouslySetInnerHTML"?Np(i,d):c==="children"?ki(i,d):Wu(i,c,d,u)}switch(l){case"input":Ia(i,s);break;case"textarea":Tp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?pr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?pr(i,!!s.multiple,s.defaultValue,!0):pr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Li]=s}catch(v){ee(t,t.return,v)}}break;case 6:if(et(e,t),dt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ee(t,t.return,v)}}break;case 3:if(et(e,t),dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xi(e.containerInfo)}catch(v){ee(t,t.return,v)}break;case 4:et(e,t),dt(t);break;case 13:et(e,t),dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wc=ie())),r&4&&Dh(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Se=(u=Se)||c,et(e,t),Se=u):et(e,t),dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(d=N=c;N!==null;){switch(h=N,g=h.child,h.tag){case 0:case 11:case 14:case 15:_i(4,h,h.return);break;case 1:dr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){ee(r,n,v)}}break;case 5:dr(h,h.return);break;case 22:if(h.memoizedState!==null){Lh(d);continue}}g!==null?(g.return=h,N=g):Lh(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Pp("display",o))}catch(v){ee(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ee(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:et(e,t),dt(t),r&4&&Dh(t);break;case 21:break;default:et(e,t),dt(t)}}function dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tg(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ki(i,""),r.flags&=-33);var s=Ah(t);su(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ah(t);iu(t,l,o);break;default:throw Error(w(161))}}catch(a){ee(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function z0(t,e,n){N=t,ig(t)}function ig(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Se;l=xs;var u=Se;if(xs=o,(Se=a)&&!u)for(N=i;N!==null;)o=N,a=o.child,o.tag===22&&o.memoizedState!==null?bh(i):a!==null?(a.return=o,N=a):bh(i);for(;s!==null;)N=s,ig(s),s=s.sibling;N=i,xs=l,Se=u}Mh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Mh(t)}}function Mh(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Se||il(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Se)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_h(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_h(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&xi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Se||e.flags&512&&ru(e)}catch(h){ee(e,e.return,h)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Lh(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function bh(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{il(4,e)}catch(a){ee(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ee(e,i,a)}}var s=e.return;try{ru(e)}catch(a){ee(e,s,a)}break;case 5:var o=e.return;try{ru(e)}catch(a){ee(e,o,a)}}}catch(a){ee(e,e.return,a)}if(e===t){N=null;break}var l=e.sibling;if(l!==null){l.return=e.return,N=l;break}N=e.return}}var j0=Math.ceil,yo=Ft.ReactCurrentDispatcher,vc=Ft.ReactCurrentOwner,Ye=Ft.ReactCurrentBatchConfig,j=0,pe=null,se=null,ve=0,je=0,hr=mn(0),ae=0,Wi=null,zn=0,sl=0,yc=0,vi=null,Ae=null,wc=0,Ar=1/0,wt=null,wo=!1,ou=null,nn=null,Os=!1,Yt=null,Eo=0,yi=0,lu=null,qs=-1,Gs=0;function Re(){return j&6?ie():qs!==-1?qs:qs=ie()}function rn(t){return t.mode&1?j&2&&ve!==0?ve&-ve:S0.transition!==null?(Gs===0&&(Gs=Wp()),Gs):(t=B,t!==0||(t=window.event,t=t===void 0?16:Kp(t.type)),t):1}function at(t,e,n,r){if(50<yi)throw yi=0,lu=null,Error(w(185));ts(t,n,r),(!(j&2)||t!==pe)&&(t===pe&&(!(j&2)&&(sl|=n),ae===4&&$t(t,ve)),Ue(t,r),n===1&&j===0&&!(e.mode&1)&&(Ar=ie()+500,tl&&gn()))}function Ue(t,e){var n=t.callbackNode;Sy(t,e);var r=ro(t,t===pe?ve:0);if(r===0)n!==null&&$d(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$d(n),e===1)t.tag===0?C0(Fh.bind(null,t)):fm(Fh.bind(null,t)),v0(function(){!(j&6)&&gn()}),n=null;else{switch(Bp(r)){case 1:n=qu;break;case 4:n=zp;break;case 16:n=no;break;case 536870912:n=jp;break;default:n=no}n=hg(n,sg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sg(t,e){if(qs=-1,Gs=0,j&6)throw Error(w(327));var n=t.callbackNode;if(yr()&&t.callbackNode!==n)return null;var r=ro(t,t===pe?ve:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Co(t,r);else{e=r;var i=j;j|=2;var s=lg();(pe!==t||ve!==e)&&(wt=null,Ar=ie()+500,An(t,e));do try{V0();break}catch(l){og(t,l)}while(1);sc(),yo.current=s,j=i,se!==null?e=0:(pe=null,ve=0,e=ae)}if(e!==0){if(e===2&&(i=Ma(t),i!==0&&(r=i,e=au(t,i))),e===1)throw n=Wi,An(t,0),$t(t,r),Ue(t,ie()),n;if(e===6)$t(t,r);else{if(i=t.current.alternate,!(r&30)&&!W0(i)&&(e=Co(t,r),e===2&&(s=Ma(t),s!==0&&(r=s,e=au(t,s))),e===1))throw n=Wi,An(t,0),$t(t,r),Ue(t,ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:Cn(t,Ae,wt);break;case 3:if($t(t,r),(r&130023424)===r&&(e=wc+500-ie(),10<e)){if(ro(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Re(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ba(Cn.bind(null,t,Ae,wt),e);break}Cn(t,Ae,wt);break;case 4:if($t(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-lt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*j0(r/1960))-r,10<r){t.timeoutHandle=Ba(Cn.bind(null,t,Ae,wt),r);break}Cn(t,Ae,wt);break;case 5:Cn(t,Ae,wt);break;default:throw Error(w(329))}}}return Ue(t,ie()),t.callbackNode===n?sg.bind(null,t):null}function au(t,e){var n=vi;return t.current.memoizedState.isDehydrated&&(An(t,e).flags|=256),t=Co(t,e),t!==2&&(e=Ae,Ae=n,e!==null&&uu(e)),t}function uu(t){Ae===null?Ae=t:Ae.push.apply(Ae,t)}function W0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $t(t,e){for(e&=~yc,e&=~sl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-lt(e),r=1<<n;t[n]=-1,e&=~r}}function Fh(t){if(j&6)throw Error(w(327));yr();var e=ro(t,0);if(!(e&1))return Ue(t,ie()),null;var n=Co(t,e);if(t.tag!==0&&n===2){var r=Ma(t);r!==0&&(e=r,n=au(t,r))}if(n===1)throw n=Wi,An(t,0),$t(t,e),Ue(t,ie()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cn(t,Ae,wt),Ue(t,ie()),null}function Ec(t,e){var n=j;j|=1;try{return t(e)}finally{j=n,j===0&&(Ar=ie()+500,tl&&gn())}}function jn(t){Yt!==null&&Yt.tag===0&&!(j&6)&&yr();var e=j;j|=1;var n=Ye.transition,r=B;try{if(Ye.transition=null,B=1,t)return t()}finally{B=r,Ye.transition=n,j=e,!(j&6)&&gn()}}function Cc(){je=hr.current,Q(hr)}function An(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_0(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(nc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:xr(),Q(be),Q(Ie),dc();break;case 5:cc(r);break;case 4:xr();break;case 13:Q(X);break;case 19:Q(X);break;case 10:oc(r.type._context);break;case 22:case 23:Cc()}n=n.return}if(pe=t,se=t=sn(t.current,null),ve=je=e,ae=0,Wi=null,yc=sl=zn=0,Ae=vi=null,kn!==null){for(e=0;e<kn.length;e++)if(n=kn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}kn=null}return t}function og(t,e){do{var n=se;try{if(sc(),Vs.current=vo,_o){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_o=!1}if(Un=0,de=le=J=null,gi=!1,Ui=0,vc.current=null,n===null||n.return===null){ae=1,Wi=e,se=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ve,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Ih(o);if(g!==null){g.flags&=-257,Th(g,o,l,s,e),g.mode&1&&Sh(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){Sh(s,u,e),Sc();break e}a=Error(w(426))}}else if(Y&&l.mode&1){var T=Ih(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Th(T,o,l,s,e),rc(Or(a,l));break e}}s=a=Or(a,l),ae!==4&&(ae=2),vi===null?vi=[s]:vi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Vm(s,a,e);gh(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(nn===null||!nn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Hm(s,l,e);gh(s,y);break e}}s=s.return}while(s!==null)}ug(n)}catch(k){e=k,se===n&&n!==null&&(se=n=n.return);continue}break}while(1)}function lg(){var t=yo.current;return yo.current=vo,t===null?vo:t}function Sc(){(ae===0||ae===3||ae===2)&&(ae=4),pe===null||!(zn&268435455)&&!(sl&268435455)||$t(pe,ve)}function Co(t,e){var n=j;j|=2;var r=lg();(pe!==t||ve!==e)&&(wt=null,An(t,e));do try{B0();break}catch(i){og(t,i)}while(1);if(sc(),j=n,yo.current=r,se!==null)throw Error(w(261));return pe=null,ve=0,ae}function B0(){for(;se!==null;)ag(se)}function V0(){for(;se!==null&&!py();)ag(se)}function ag(t){var e=dg(t.alternate,t,je);t.memoizedProps=t.pendingProps,e===null?ug(t):se=e,vc.current=null}function ug(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=b0(n,e),n!==null){n.flags&=32767,se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,se=null;return}}else if(n=L0(n,e,je),n!==null){se=n;return}if(e=e.sibling,e!==null){se=e;return}se=e=t}while(e!==null);ae===0&&(ae=5)}function Cn(t,e,n){var r=B,i=Ye.transition;try{Ye.transition=null,B=1,H0(t,e,n,r)}finally{Ye.transition=i,B=r}return null}function H0(t,e,n,r){do yr();while(Yt!==null);if(j&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Iy(t,s),t===pe&&(se=pe=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Os||(Os=!0,hg(no,function(){return yr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ye.transition,Ye.transition=null;var o=B;B=1;var l=j;j|=4,vc.current=null,U0(t,n),rg(n,t),c0(ja),io=!!za,ja=za=null,t.current=n,z0(n),my(),j=l,B=o,Ye.transition=s}else t.current=n;if(Os&&(Os=!1,Yt=t,Eo=i),s=t.pendingLanes,s===0&&(nn=null),vy(n.stateNode),Ue(t,ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wo)throw wo=!1,t=ou,ou=null,t;return Eo&1&&t.tag!==0&&yr(),s=t.pendingLanes,s&1?t===lu?yi++:(yi=0,lu=t):yi=0,gn(),null}function yr(){if(Yt!==null){var t=Bp(Eo),e=Ye.transition,n=B;try{if(Ye.transition=null,B=16>t?16:t,Yt===null)var r=!1;else{if(t=Yt,Yt=null,Eo=0,j&6)throw Error(w(331));var i=j;for(j|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:_i(8,c,s)}var d=c.child;if(d!==null)d.return=c,N=d;else for(;N!==null;){c=N;var h=c.sibling,g=c.return;if(eg(c),c===u){N=null;break}if(h!==null){h.return=g,N=h;break}N=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var T=v.sibling;v.sibling=null,v=T}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_i(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var f=t.current;for(N=f;N!==null;){o=N;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,N=m;else e:for(o=f;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:il(9,l)}}catch(k){ee(l,l.return,k)}if(l===o){N=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,N=y;break e}N=l.return}}if(j=i,gn(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Yo,t)}catch{}r=!0}return r}finally{B=n,Ye.transition=e}}return!1}function Uh(t,e,n){e=Or(n,e),e=Vm(t,e,1),t=tn(t,e,1),e=Re(),t!==null&&(ts(t,1,e),Ue(t,e))}function ee(t,e,n){if(t.tag===3)Uh(t,t,n);else for(;e!==null;){if(e.tag===3){Uh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){t=Or(n,t),t=Hm(e,t,1),e=tn(e,t,1),t=Re(),e!==null&&(ts(e,1,t),Ue(e,t));break}}e=e.return}}function $0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Re(),t.pingedLanes|=t.suspendedLanes&n,pe===t&&(ve&n)===n&&(ae===4||ae===3&&(ve&130023424)===ve&&500>ie()-wc?An(t,0):yc|=n),Ue(t,e)}function cg(t,e){e===0&&(t.mode&1?(e=Es,Es<<=1,!(Es&130023424)&&(Es=4194304)):e=1);var n=Re();t=At(t,e),t!==null&&(ts(t,e,n),Ue(t,n))}function q0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cg(t,n)}function G0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),cg(t,n)}var dg;dg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||be.current)De=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return De=!1,M0(t,e,n);De=!!(t.flags&131072)}else De=!1,Y&&e.flags&1048576&&pm(e,ho,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$s(t,e),t=e.pendingProps;var i=Nr(e,Ie.current);vr(e,n),i=fc(null,e,r,t,i,n);var s=pc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Fe(r)?(s=!0,uo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ac(e),i.updater=nl,e.stateNode=i,i._reactInternals=e,Qa(e,r,t,n),e=Ja(null,e,r,!0,s,n)):(e.tag=0,Y&&s&&tc(e),Ne(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($s(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Q0(r),t=tt(r,t),i){case 0:e=Xa(null,e,r,t,n);break e;case 1:e=Ph(null,e,r,t,n);break e;case 11:e=kh(null,e,r,t,n);break e;case 14:e=Nh(null,e,r,tt(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Xa(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Ph(t,e,r,i,n);case 3:e:{if(Km(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,vm(t,e),mo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Or(Error(w(423)),e),e=Rh(t,e,r,n,i);break e}else if(r!==i){i=Or(Error(w(424)),e),e=Rh(t,e,r,n,i);break e}else for(We=en(e.stateNode.containerInfo.firstChild),Be=e,Y=!0,it=null,n=Cm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pr(),r===i){e=Dt(t,e,n);break e}Ne(t,e,r,n)}e=e.child}return e;case 5:return Sm(e),t===null&&qa(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Wa(r,i)?o=null:s!==null&&Wa(r,s)&&(e.flags|=32),Gm(t,e),Ne(t,e,o,n),e.child;case 6:return t===null&&qa(e),null;case 13:return Qm(t,e,n);case 4:return uc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Rr(e,null,r,n):Ne(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),kh(t,e,r,i,n);case 7:return Ne(t,e,e.pendingProps,n),e.child;case 8:return Ne(t,e,e.pendingProps.children,n),e.child;case 12:return Ne(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,G(fo,r._currentValue),r._currentValue=o,s!==null)if(ct(s.value,o)){if(s.children===i.children&&!be.current){e=Dt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Pt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ga(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ga(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ne(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,vr(e,n),i=Xe(i),r=r(i),e.flags|=1,Ne(t,e,r,n),e.child;case 14:return r=e.type,i=tt(r,e.pendingProps),i=tt(r.type,i),Nh(t,e,r,i,n);case 15:return $m(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),$s(t,e),e.tag=1,Fe(r)?(t=!0,uo(e)):t=!1,vr(e,n),wm(e,r,i),Qa(e,r,i,n),Ja(null,e,r,!0,t,n);case 19:return Ym(t,e,n);case 22:return qm(t,e,n)}throw Error(w(156,e.tag))};function hg(t,e){return Up(t,e)}function K0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(t,e,n,r){return new K0(t,e,n,r)}function Ic(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Q0(t){if(typeof t=="function")return Ic(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vu)return 11;if(t===Hu)return 14}return 2}function sn(t,e){var n=t.alternate;return n===null?(n=Ke(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ks(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ic(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case nr:return Dn(n.children,i,s,e);case Bu:o=8,i|=8;break;case ya:return t=Ke(12,n,e,i|2),t.elementType=ya,t.lanes=s,t;case wa:return t=Ke(13,n,e,i),t.elementType=wa,t.lanes=s,t;case Ea:return t=Ke(19,n,e,i),t.elementType=Ea,t.lanes=s,t;case Ep:return ol(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yp:o=10;break e;case wp:o=9;break e;case Vu:o=11;break e;case Hu:o=14;break e;case Wt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=Ke(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Dn(t,e,n,r){return t=Ke(7,t,r,e),t.lanes=n,t}function ol(t,e,n,r){return t=Ke(22,t,r,e),t.elementType=Ep,t.lanes=n,t.stateNode={isHidden:!1},t}function ea(t,e,n){return t=Ke(6,t,null,e),t.lanes=n,t}function ta(t,e,n){return e=Ke(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Y0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tc(t,e,n,r,i,s,o,l,a){return t=new Y0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ke(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ac(s),t}function X0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function fg(t){if(!t)return dn;t=t._reactInternals;e:{if(Qn(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Fe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Fe(n))return hm(t,n,e)}return e}function pg(t,e,n,r,i,s,o,l,a){return t=Tc(n,r,!0,t,i,s,o,l,a),t.context=fg(null),n=t.current,r=Re(),i=rn(n),s=Pt(r,i),s.callback=e??null,tn(n,s,i),t.current.lanes=i,ts(t,i,r),Ue(t,r),t}function ll(t,e,n,r){var i=e.current,s=Re(),o=rn(i);return n=fg(n),e.context===null?e.context=n:e.pendingContext=n,e=Pt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tn(i,e,o),t!==null&&(at(t,i,o,s),Bs(t,i,o)),o}function So(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kc(t,e){zh(t,e),(t=t.alternate)&&zh(t,e)}function J0(){return null}var mg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nc(t){this._internalRoot=t}al.prototype.render=Nc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));ll(t,e,null,null)};al.prototype.unmount=Nc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jn(function(){ll(null,t,null,null)}),e[Ot]=null}};function al(t){this._internalRoot=t}al.prototype.unstable_scheduleHydration=function(t){if(t){var e=$p();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ht.length&&e!==0&&e<Ht[n].priority;n++);Ht.splice(n,0,t),n===0&&Gp(t)}};function Pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jh(){}function Z0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=So(o);s.call(u)}}var o=pg(e,r,t,0,null,!1,!1,"",jh);return t._reactRootContainer=o,t[Ot]=o.current,Di(t.nodeType===8?t.parentNode:t),jn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=So(a);l.call(u)}}var a=Tc(t,0,!1,null,null,!1,!1,"",jh);return t._reactRootContainer=a,t[Ot]=a.current,Di(t.nodeType===8?t.parentNode:t),jn(function(){ll(e,a,n,r)}),a}function cl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=So(o);l.call(a)}}ll(e,o,t,i)}else o=Z0(n,e,t,i,r);return So(o)}Vp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ui(e.pendingLanes);n!==0&&(Gu(e,n|1),Ue(e,ie()),!(j&6)&&(Ar=ie()+500,gn()))}break;case 13:jn(function(){var r=At(t,1);if(r!==null){var i=Re();at(r,t,1,i)}}),kc(t,1)}};Ku=function(t){if(t.tag===13){var e=At(t,134217728);if(e!==null){var n=Re();at(e,t,134217728,n)}kc(t,134217728)}};Hp=function(t){if(t.tag===13){var e=rn(t),n=At(t,e);if(n!==null){var r=Re();at(n,t,e,r)}kc(t,e)}};$p=function(){return B};qp=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};Oa=function(t,e,n){switch(e){case"input":if(Ia(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=el(r);if(!i)throw Error(w(90));Sp(r),Ia(r,i)}}}break;case"textarea":Tp(t,n);break;case"select":e=n.value,e!=null&&pr(t,!!n.multiple,e,!1)}};Ap=Ec;Dp=jn;var ew={usingClientEntryPoint:!1,Events:[rs,or,el,xp,Op,Ec]},ni={findFiberByHostInstance:Tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},tw={bundleType:ni.bundleType,version:ni.version,rendererPackageName:ni.rendererPackageName,rendererConfig:ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bp(t),t===null?null:t.stateNode},findFiberByHostInstance:ni.findFiberByHostInstance||J0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var As=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!As.isDisabled&&As.supportsFiber)try{Yo=As.inject(tw),pt=As}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ew;He.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pc(e))throw Error(w(200));return X0(t,e,null,n)};He.createRoot=function(t,e){if(!Pc(t))throw Error(w(299));var n=!1,r="",i=mg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Tc(t,1,!1,null,null,n,!1,r,i),t[Ot]=e.current,Di(t.nodeType===8?t.parentNode:t),new Nc(e)};He.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=bp(e),t=t===null?null:t.stateNode,t};He.flushSync=function(t){return jn(t)};He.hydrate=function(t,e,n){if(!ul(e))throw Error(w(200));return cl(null,t,e,!0,n)};He.hydrateRoot=function(t,e,n){if(!Pc(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pg(e,null,t,1,n??null,i,!1,s,o),t[Ot]=e.current,Di(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new al(e)};He.render=function(t,e,n){if(!ul(e))throw Error(w(200));return cl(null,t,e,!1,n)};He.unmountComponentAtNode=function(t){if(!ul(t))throw Error(w(40));return t._reactRootContainer?(jn(function(){cl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ot]=null})}),!0):!1};He.unstable_batchedUpdates=Ec;He.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ul(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return cl(t,e,n,!1,r)};He.version="18.2.0-next-9e3b772b8-20220608";function gg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gg)}catch(t){console.error(t)}}gg(),pp.exports=He;var nw=pp.exports,Wh=nw;_a.createRoot=Wh.createRoot,_a.hydrateRoot=Wh.hydrateRoot;class dl{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){const n={listener:e};return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const Rc=typeof window>"u"||"Deno"in window;function nt(){}function rw(t,e){return typeof t=="function"?t(e):t}function iw(t){return typeof t=="number"&&t>=0&&t!==1/0}function sw(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Ds(t,e,n){return hl(t)?typeof e=="function"?{...n,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function Vt(t,e,n){return hl(t)?[{...e,queryKey:t},n]:[t||{},e]}function Bh(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:o,stale:l}=t;if(hl(o)){if(r){if(e.queryHash!==xc(o,e.options))return!1}else if(!Io(e.queryKey,o))return!1}if(n!=="all"){const a=e.isActive();if(n==="active"&&!a||n==="inactive"&&a)return!1}return!(typeof l=="boolean"&&e.isStale()!==l||typeof i<"u"&&i!==e.state.fetchStatus||s&&!s(e))}function Vh(t,e){const{exact:n,fetching:r,predicate:i,mutationKey:s}=t;if(hl(s)){if(!e.options.mutationKey)return!1;if(n){if(Pn(e.options.mutationKey)!==Pn(s))return!1}else if(!Io(e.options.mutationKey,s))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||i&&!i(e))}function xc(t,e){return((e==null?void 0:e.queryKeyHashFn)||Pn)(t)}function Pn(t){return JSON.stringify(t,(e,n)=>cu(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Io(t,e){return _g(t,e)}function _g(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!_g(t[n],e[n])):!1}function vg(t,e){if(t===e)return t;const n=Hh(t)&&Hh(e);if(n||cu(t)&&cu(e)){const r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),s=i.length,o=n?[]:{};let l=0;for(let a=0;a<s;a++){const u=n?a:i[a];o[u]=vg(t[u],e[u]),o[u]===t[u]&&l++}return r===s&&l===r?t:o}return e}function Hh(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function cu(t){if(!$h(t))return!1;const e=t.constructor;if(typeof e>"u")return!0;const n=e.prototype;return!(!$h(n)||!n.hasOwnProperty("isPrototypeOf"))}function $h(t){return Object.prototype.toString.call(t)==="[object Object]"}function hl(t){return Array.isArray(t)}function yg(t){return new Promise(e=>{setTimeout(e,t)})}function qh(t){yg(0).then(t)}function ow(){if(typeof AbortController=="function")return new AbortController}function lw(t,e,n){return n.isDataEqual!=null&&n.isDataEqual(t,e)?t:typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?vg(t,e):e}class aw extends dl{constructor(){super(),this.setup=e=>{if(!Rc&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const du=new aw,Gh=["online","offline"];class uw extends dl{constructor(){super(),this.setup=e=>{if(!Rc&&window.addEventListener){const n=()=>e();return Gh.forEach(r=>{window.addEventListener(r,n,!1)}),()=>{Gh.forEach(r=>{window.removeEventListener(r,n)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const To=new uw;function cw(t){return Math.min(1e3*2**t,3e4)}function Oc(t){return(t??"online")==="online"?To.isOnline():!0}class wg{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}}function na(t){return t instanceof wg}function Eg(t){let e=!1,n=0,r=!1,i,s,o;const l=new Promise((T,p)=>{s=T,o=p}),a=T=>{r||(g(new wg(T)),t.abort==null||t.abort())},u=()=>{e=!0},c=()=>{e=!1},d=()=>!du.isFocused()||t.networkMode!=="always"&&!To.isOnline(),h=T=>{r||(r=!0,t.onSuccess==null||t.onSuccess(T),i==null||i(),s(T))},g=T=>{r||(r=!0,t.onError==null||t.onError(T),i==null||i(),o(T))},_=()=>new Promise(T=>{i=p=>{const f=r||!d();return f&&T(p),f},t.onPause==null||t.onPause()}).then(()=>{i=void 0,r||t.onContinue==null||t.onContinue()}),v=()=>{if(r)return;let T;try{T=t.fn()}catch(p){T=Promise.reject(p)}Promise.resolve(T).then(h).catch(p=>{var f,m;if(r)return;const y=(f=t.retry)!=null?f:3,k=(m=t.retryDelay)!=null?m:cw,C=typeof k=="function"?k(n,p):k,E=y===!0||typeof y=="number"&&n<y||typeof y=="function"&&y(n,p);if(e||!E){g(p);return}n++,t.onFail==null||t.onFail(n,p),yg(C).then(()=>{if(d())return _()}).then(()=>{e?g(p):v()})})};return Oc(t.networkMode)?v():_().then(v),{promise:l,cancel:a,continue:()=>(i==null?void 0:i())?l:Promise.resolve(),cancelRetry:u,continueRetry:c}}const Ac=console;function dw(){let t=[],e=0,n=c=>{c()},r=c=>{c()};const i=c=>{let d;e++;try{d=c()}finally{e--,e||l()}return d},s=c=>{e?t.push(c):qh(()=>{n(c)})},o=c=>(...d)=>{s(()=>{c(...d)})},l=()=>{const c=t;t=[],c.length&&qh(()=>{r(()=>{c.forEach(d=>{n(d)})})})};return{batch:i,batchCalls:o,schedule:s,setNotifyFunction:c=>{n=c},setBatchNotifyFunction:c=>{r=c}}}const Pe=dw();class Cg{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),iw(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,e??(Rc?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class hw extends Cg{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||Ac,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||fw(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(e,n){const r=lw(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){this.dispatch({type:"setState",state:e,setStateOptions:n})}cancel(e){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(e),r?r.then(nt).catch(nt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>e.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!sw(this.state.dataUpdatedAt,e)}onFocus(){var e;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}onOnline(){var e;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var s;return(s=this.retryer)==null||s.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){const g=this.observers.find(_=>_.options.queryFn);g&&this.setOptions(g.options)}const o=ow(),l={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},a=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>{if(o)return this.abortSignalConsumed=!0,o.signal}})};a(l);const u=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(l)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),c={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:u};if(a(c),(r=this.options.behavior)==null||r.onFetch(c),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=c.fetchOptions)==null?void 0:i.meta)){var d;this.dispatch({type:"fetch",meta:(d=c.fetchOptions)==null?void 0:d.meta})}const h=g=>{if(na(g)&&g.silent||this.dispatch({type:"error",error:g}),!na(g)){var _,v,T,p;(_=(v=this.cache.config).onError)==null||_.call(v,g,this),(T=(p=this.cache.config).onSettled)==null||T.call(p,this.state.data,g,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=Eg({fn:c.fetchFn,abort:o==null?void 0:o.abort.bind(o),onSuccess:g=>{var _,v,T,p;if(typeof g>"u"){h(new Error(this.queryHash+" data is undefined"));return}this.setData(g),(_=(v=this.cache.config).onSuccess)==null||_.call(v,g,this),(T=(p=this.cache.config).onSettled)==null||T.call(p,g,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:h,onFail:(g,_)=>{this.dispatch({type:"failed",failureCount:g,error:_})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){const n=r=>{var i,s;switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=e.meta)!=null?i:null,fetchStatus:Oc(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(s=e.dataUpdatedAt)!=null?s:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=e.error;return na(o)&&o.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),Pe.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}function fw(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=typeof e<"u",r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class pw extends dl{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,n,r){var i;const s=n.queryKey,o=(i=n.queryHash)!=null?i:xc(s,n);let l=this.get(o);return l||(l=new hw({cache:this,logger:e.getLogger(),queryKey:s,queryHash:o,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(s)}),this.add(l)),l}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){const n=this.queriesMap[e.queryHash];n&&(e.destroy(),this.queries=this.queries.filter(r=>r!==e),n===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){Pe.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,n){const[r]=Vt(e,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>Bh(r,i))}findAll(e,n){const[r]=Vt(e,n);return Object.keys(r).length>0?this.queries.filter(i=>Bh(r,i)):this.queries}notify(e){Pe.batch(()=>{this.listeners.forEach(({listener:n})=>{n(e)})})}onFocus(){Pe.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){Pe.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class mw extends Cg{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||Ac,this.observers=[],this.state=e.state||gw(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(n=>n!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,n;return(e=(n=this.retryer)==null?void 0:n.continue())!=null?e:this.execute()}async execute(){const e=()=>{var E;return this.retryer=Eg({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(I,U)=>{this.dispatch({type:"failed",failureCount:I,error:U})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(E=this.options.retry)!=null?E:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,s,o,l,a,u,c;if(!n){var d,h,g,_;this.dispatch({type:"loading",variables:this.options.variables}),await((d=(h=this.mutationCache.config).onMutate)==null?void 0:d.call(h,this.state.variables,this));const I=await((g=(_=this.options).onMutate)==null?void 0:g.call(_,this.state.variables));I!==this.state.context&&this.dispatch({type:"loading",context:I,variables:this.state.variables})}const E=await e();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,E,this.state.variables,this.state.context,this)),await((s=(o=this.options).onSuccess)==null?void 0:s.call(o,E,this.state.variables,this.state.context)),await((l=(a=this.mutationCache.config).onSettled)==null?void 0:l.call(a,E,null,this.state.variables,this.state.context,this)),await((u=(c=this.options).onSettled)==null?void 0:u.call(c,E,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:E}),E}catch(E){try{var v,T,p,f,m,y,k,C;throw await((v=(T=this.mutationCache.config).onError)==null?void 0:v.call(T,E,this.state.variables,this.state.context,this)),await((p=(f=this.options).onError)==null?void 0:p.call(f,E,this.state.variables,this.state.context)),await((m=(y=this.mutationCache.config).onSettled)==null?void 0:m.call(y,void 0,E,this.state.variables,this.state.context,this)),await((k=(C=this.options).onSettled)==null?void 0:k.call(C,void 0,E,this.state.variables,this.state.context)),E}finally{this.dispatch({type:"error",error:E})}}}dispatch(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Oc(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...r,...e.state}}};this.state=n(this.state),Pe.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function gw(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class _w extends dl{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,n,r){const i=new mw({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?e.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(n=>n!==e),this.notify({type:"removed",mutation:e})}clear(){Pe.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(n=>Vh(e,n))}findAll(e){return this.mutations.filter(n=>Vh(e,n))}notify(e){Pe.batch(()=>{this.listeners.forEach(({listener:n})=>{n(e)})})}resumePausedMutations(){var e;return this.resuming=((e=this.resuming)!=null?e:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return Pe.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(nt)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function vw(){return{onFetch:t=>{t.fetchFn=()=>{var e,n,r,i,s,o;const l=(e=t.fetchOptions)==null||(n=e.meta)==null?void 0:n.refetchPage,a=(r=t.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,u=a==null?void 0:a.pageParam,c=(a==null?void 0:a.direction)==="forward",d=(a==null?void 0:a.direction)==="backward",h=((s=t.state.data)==null?void 0:s.pages)||[],g=((o=t.state.data)==null?void 0:o.pageParams)||[];let _=g,v=!1;const T=C=>{Object.defineProperty(C,"signal",{enumerable:!0,get:()=>{var E;if((E=t.signal)!=null&&E.aborted)v=!0;else{var I;(I=t.signal)==null||I.addEventListener("abort",()=>{v=!0})}return t.signal}})},p=t.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+t.options.queryHash+"'")),f=(C,E,I,U)=>(_=U?[E,..._]:[..._,E],U?[I,...C]:[...C,I]),m=(C,E,I,U)=>{if(v)return Promise.reject("Cancelled");if(typeof I>"u"&&!E&&C.length)return Promise.resolve(C);const A={queryKey:t.queryKey,pageParam:I,meta:t.options.meta};T(A);const ke=p(A);return Promise.resolve(ke).then(vn=>f(C,I,vn,U))};let y;if(!h.length)y=m([]);else if(c){const C=typeof u<"u",E=C?u:Kh(t.options,h);y=m(h,C,E)}else if(d){const C=typeof u<"u",E=C?u:yw(t.options,h);y=m(h,C,E,!0)}else{_=[];const C=typeof t.options.getNextPageParam>"u";y=(l&&h[0]?l(h[0],0,h):!0)?m([],C,g[0]):Promise.resolve(f([],g[0],h[0]));for(let I=1;I<h.length;I++)y=y.then(U=>{if(l&&h[I]?l(h[I],I,h):!0){const ke=C?g[I]:Kh(t.options,U);return m(U,C,ke)}return Promise.resolve(f(U,g[I],h[I]))})}return y.then(C=>({pages:C,pageParams:_}))}}}}function Kh(t,e){return t.getNextPageParam==null?void 0:t.getNextPageParam(e[e.length-1],e)}function yw(t,e){return t.getPreviousPageParam==null?void 0:t.getPreviousPageParam(e[0],e)}class ww{constructor(e={}){this.queryCache=e.queryCache||new pw,this.mutationCache=e.mutationCache||new _w,this.logger=e.logger||Ac,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=du.subscribe(()=>{du.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=To.subscribe(()=>{To.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,n;this.mountCount--,this.mountCount===0&&((e=this.unsubscribeFocus)==null||e.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(e,n){const[r]=Vt(e,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state.data}ensureQueryData(e,n,r){const i=Ds(e,n,r),s=this.getQueryData(i.queryKey);return s?Promise.resolve(s):this.fetchQuery(i)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(e,n,r){const i=this.queryCache.find(e),s=i==null?void 0:i.state.data,o=rw(n,s);if(typeof o>"u")return;const l=Ds(e),a=this.defaultQueryOptions(l);return this.queryCache.build(this,a).setData(o,{...r,manual:!0})}setQueriesData(e,n,r){return Pe.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state}removeQueries(e,n){const[r]=Vt(e,n),i=this.queryCache;Pe.batch(()=>{i.findAll(r).forEach(s=>{i.remove(s)})})}resetQueries(e,n,r){const[i,s]=Vt(e,n,r),o=this.queryCache,l={type:"active",...i};return Pe.batch(()=>(o.findAll(i).forEach(a=>{a.reset()}),this.refetchQueries(l,s)))}cancelQueries(e,n,r){const[i,s={}]=Vt(e,n,r);typeof s.revert>"u"&&(s.revert=!0);const o=Pe.batch(()=>this.queryCache.findAll(i).map(l=>l.cancel(s)));return Promise.all(o).then(nt).catch(nt)}invalidateQueries(e,n,r){const[i,s]=Vt(e,n,r);return Pe.batch(()=>{var o,l;if(this.queryCache.findAll(i).forEach(u=>{u.invalidate()}),i.refetchType==="none")return Promise.resolve();const a={...i,type:(o=(l=i.refetchType)!=null?l:i.type)!=null?o:"active"};return this.refetchQueries(a,s)})}refetchQueries(e,n,r){const[i,s]=Vt(e,n,r),o=Pe.batch(()=>this.queryCache.findAll(i).filter(a=>!a.isDisabled()).map(a=>{var u;return a.fetch(void 0,{...s,cancelRefetch:(u=s==null?void 0:s.cancelRefetch)!=null?u:!0,meta:{refetchPage:i.refetchPage}})}));let l=Promise.all(o).then(nt);return s!=null&&s.throwOnError||(l=l.catch(nt)),l}fetchQuery(e,n,r){const i=Ds(e,n,r),s=this.defaultQueryOptions(i);typeof s.retry>"u"&&(s.retry=!1);const o=this.queryCache.build(this,s);return o.isStaleByTime(s.staleTime)?o.fetch(s):Promise.resolve(o.state.data)}prefetchQuery(e,n,r){return this.fetchQuery(e,n,r).then(nt).catch(nt)}fetchInfiniteQuery(e,n,r){const i=Ds(e,n,r);return i.behavior=vw(),this.fetchQuery(i)}prefetchInfiniteQuery(e,n,r){return this.fetchInfiniteQuery(e,n,r).then(nt).catch(nt)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,n){const r=this.queryDefaults.find(i=>Pn(e)===Pn(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:e,defaultOptions:n})}getQueryDefaults(e){if(!e)return;const n=this.queryDefaults.find(r=>Io(e,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(e,n){const r=this.mutationDefaults.find(i=>Pn(e)===Pn(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:e,defaultOptions:n})}getMutationDefaults(e){if(!e)return;const n=this.mutationDefaults.find(r=>Io(e,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const n={...this.defaultOptions.queries,...this.getQueryDefaults(e==null?void 0:e.queryKey),...e,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=xc(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(e==null?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}const Qh=oe.createContext(void 0),Ew=oe.createContext(!1);function Cw(t,e){return t||(e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Qh),window.ReactQueryClientContext):Qh)}const Sw=({client:t,children:e,context:n,contextSharing:r=!1})=>{oe.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]);const i=Cw(n,r);return oe.createElement(Ew.Provider,{value:!n&&r},oe.createElement(i.Provider,{value:t},e))};const Iw=(t=null,e={})=>{const[n,r]=oe.useState(()=>({values:e}));return[n,s=>{const{id:o,value:l}=s.target,a=t?t(o,l):"";s.target.setCustomValidity(a);const u={...n.values,[o]:l},c={...n.errors,[o]:a},d=Object.values(c).some(h=>h!=="");r(d?{values:u,errors:c}:{values:u})}]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw Vr(e)},Vr=function(t){return new Error("Firebase Database ("+Sg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Tw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[c],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ig(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Tw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new kw;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tg=function(t){const e=Ig(t);return Dc.encodeByteArray(e,!0)},ko=function(t){return Tg(t).replace(/\./g,"")},No=function(t){try{return Dc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t){return kg(void 0,t)}function kg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Pw(n)||(t[n]=kg(t[n],e[n]));return t}function Pw(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=()=>Rw().__FIREBASE_DEFAULTS__,Ow=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Aw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&No(t[1]);return e&&JSON.parse(e)},Mc=()=>{try{return xw()||Ow()||Aw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ng=t=>{var e,n;return(n=(e=Mc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Dw=t=>{const e=Ng(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Pg=()=>{var t;return(t=Mc())===null||t===void 0?void 0:t.config},Rg=t=>{var e;return(e=Mc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[ko(JSON.stringify(n)),ko(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function Lw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bw(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Og(){return Sg.NODE_ADMIN===!0}function Fw(){try{return typeof indexedDB=="object"}catch{return!1}}function Uw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zw,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ss.prototype.create)}}class ss{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new _n(i,l,r)}}function jw(t,e){return t.replace(Ww,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ww=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){return JSON.parse(t)}function fe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Bi(No(s[0])||""),n=Bi(No(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Bw=function(t){const e=Ag(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Vw=function(t){const e=Ag(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Dr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function hu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Po(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ro(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Yh(s)&&Yh(o)){if(!Ro(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function $w(t,e){const n=new qw(t,e);return n.subscribe.bind(n)}class qw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ra),i.error===void 0&&(i.error=ra),i.complete===void 0&&(i.complete=ra);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ra(){}function bc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){return t&&t._delegate?t._delegate:t}class Wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xw(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yw(t){return t===Sn?void 0:t}function Xw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const Zw={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},eE=V.INFO,tE={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},nE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fc{constructor(e){this.name=e,this._logLevel=eE,this._logHandler=nE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const rE=(t,e)=>e.some(n=>t instanceof n);let Xh,Jh;function iE(){return Xh||(Xh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sE(){return Jh||(Jh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dg=new WeakMap,fu=new WeakMap,Mg=new WeakMap,ia=new WeakMap,Uc=new WeakMap;function oE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(on(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dg.set(n,t)}).catch(()=>{}),Uc.set(e,t),e}function lE(t){if(fu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});fu.set(t,e)}let pu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aE(t){pu=t(pu)}function uE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sa(this),e,...n);return Mg.set(r,e.sort?e.sort():[e]),on(r)}:sE().includes(t)?function(...e){return t.apply(sa(this),e),on(Dg.get(this))}:function(...e){return on(t.apply(sa(this),e))}}function cE(t){return typeof t=="function"?uE(t):(t instanceof IDBTransaction&&lE(t),rE(t,iE())?new Proxy(t,pu):t)}function on(t){if(t instanceof IDBRequest)return oE(t);if(ia.has(t))return ia.get(t);const e=cE(t);return e!==t&&(ia.set(t,e),Uc.set(e,t)),e}const sa=t=>Uc.get(t);function dE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=on(o);return r&&o.addEventListener("upgradeneeded",a=>{r(on(o.result),a.oldVersion,a.newVersion,on(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const hE=["get","getKey","getAll","getAllKeys","count"],fE=["put","add","delete","clear"],oa=new Map;function Zh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oa.get(e))return oa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return oa.set(e,s),s}aE(t=>({...t,get:(e,n,r)=>Zh(e,n)||t.get(e,n,r),has:(e,n)=>!!Zh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mu="@firebase/app",ef="0.9.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Fc("@firebase/app"),gE="@firebase/app-compat",_E="@firebase/analytics-compat",vE="@firebase/analytics",yE="@firebase/app-check-compat",wE="@firebase/app-check",EE="@firebase/auth",CE="@firebase/auth-compat",SE="@firebase/database",IE="@firebase/database-compat",TE="@firebase/functions",kE="@firebase/functions-compat",NE="@firebase/installations",PE="@firebase/installations-compat",RE="@firebase/messaging",xE="@firebase/messaging-compat",OE="@firebase/performance",AE="@firebase/performance-compat",DE="@firebase/remote-config",ME="@firebase/remote-config-compat",LE="@firebase/storage",bE="@firebase/storage-compat",FE="@firebase/firestore",UE="@firebase/firestore-compat",zE="firebase",jE="10.5.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="[DEFAULT]",WE={[mu]:"fire-core",[gE]:"fire-core-compat",[vE]:"fire-analytics",[_E]:"fire-analytics-compat",[wE]:"fire-app-check",[yE]:"fire-app-check-compat",[EE]:"fire-auth",[CE]:"fire-auth-compat",[SE]:"fire-rtdb",[IE]:"fire-rtdb-compat",[TE]:"fire-fn",[kE]:"fire-fn-compat",[NE]:"fire-iid",[PE]:"fire-iid-compat",[RE]:"fire-fcm",[xE]:"fire-fcm-compat",[OE]:"fire-perf",[AE]:"fire-perf-compat",[DE]:"fire-rc",[ME]:"fire-rc-compat",[LE]:"fire-gcs",[bE]:"fire-gcs-compat",[FE]:"fire-fst",[UE]:"fire-fst-compat","fire-js":"fire-js",[zE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new Map,_u=new Map;function BE(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mr(t){const e=t.name;if(_u.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;_u.set(e,t);for(const n of xo.values())BE(n,t);return!0}function zc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ln=new ss("app","Firebase",VE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=jE;function Lg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ln.create("bad-app-name",{appName:String(i)});if(n||(n=Pg()),!n)throw ln.create("no-options");const s=xo.get(i);if(s){if(Ro(n,s.options)&&Ro(r,s.config))return s;throw ln.create("duplicate-app",{appName:i})}const o=new Jw(i);for(const a of _u.values())o.addComponent(a);const l=new HE(n,r,o);return xo.set(i,l),l}function bg(t=gu){const e=xo.get(t);if(!e&&t===gu&&Pg())return Lg();if(!e)throw ln.create("no-app",{appName:t});return e}function an(t,e,n){var r;let i=(r=WE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(l.join(" "));return}Mr(new Wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="firebase-heartbeat-database",qE=1,Vi="firebase-heartbeat-store";let la=null;function Fg(){return la||(la=dE($E,qE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vi)}}}).catch(t=>{throw ln.create("idb-open",{originalErrorMessage:t.message})})),la}async function GE(t){try{return await(await Fg()).transaction(Vi).objectStore(Vi).get(Ug(t))}catch(e){if(e instanceof _n)Bn.warn(e.message);else{const n=ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function tf(t,e){try{const r=(await Fg()).transaction(Vi,"readwrite");await r.objectStore(Vi).put(e,Ug(t)),await r.done}catch(n){if(n instanceof _n)Bn.warn(n.message);else{const r=ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function Ug(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=1024,QE=30*24*60*60*1e3;class YE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=QE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nf(),{heartbeatsToSend:n,unsentEntries:r}=XE(this._heartbeatsCache.heartbeats),i=ko(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function nf(){return new Date().toISOString().substring(0,10)}function XE(t,e=KE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fw()?Uw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await GE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rf(t){return ko(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(t){Mr(new Wn("platform-logger",e=>new pE(e),"PRIVATE")),Mr(new Wn("heartbeat",e=>new YE(e),"PRIVATE")),an(mu,ef,t),an(mu,ef,"esm2017"),an("fire-js","")}ZE("");var eC="firebase",tC="10.5.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(eC,tC,"app");const sf="@firebase/database",of="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zg="";function nC(t){zg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Bi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new rC(e)}}catch{}return new iC},Rn=jg("localStorage"),vu=jg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Fc("@firebase/database"),sC=function(){let t=1;return function(){return t++}}(),Wg=function(t){const e=Kw(t),n=new Hw;n.update(e);const r=n.digest();return Dc.encodeByteArray(r)},os=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=os.apply(null,r):typeof r=="object"?e+=fe(r):e+=r,e+=" "}return e};let Mn=null,lf=!0;const oC=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(wr.logLevel=V.VERBOSE,Mn=wr.log.bind(wr),e&&vu.set("logging_enabled",!0)):typeof t=="function"?Mn=t:(Mn=null,vu.remove("logging_enabled"))},ge=function(...t){if(lf===!0&&(lf=!1,Mn===null&&vu.get("logging_enabled")===!0&&oC(!0)),Mn){const e=os.apply(null,t);Mn(e)}},ls=function(t){return function(...e){ge(t,...e)}},yu=function(...t){const e="FIREBASE INTERNAL ERROR: "+os(...t);wr.error(e)},Mt=function(...t){const e=`FIREBASE FATAL ERROR: ${os(...t)}`;throw wr.error(e),new Error(e)},ze=function(...t){const e="FIREBASE WARNING: "+os(...t);wr.warn(e)},lC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},jc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},aC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Lr="[MIN_NAME]",Vn="[MAX_NAME]",Yn=function(t,e){if(t===e)return 0;if(t===Lr||e===Vn)return-1;if(e===Lr||t===Vn)return 1;{const n=af(t),r=af(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},uC=function(t,e){return t===e?0:t<e?-1:1},ri=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+fe(e))},Wc=function(t){if(typeof t!="object"||t===null)return fe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=fe(e[r]),n+=":",n+=Wc(t[e[r]]);return n+="}",n},Bg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function we(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Vg=function(t){S(!jc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},cC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},dC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function hC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const fC=new RegExp("^-?(0*)\\d{1,10}$"),pC=-2147483648,mC=2147483647,af=function(t){if(fC.test(t)){const e=Number(t);if(e>=pC&&e<=mC)return e}return null},qr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},gC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class Er{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Er.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="5",Hg="v",$g="s",qg="r",Gg="f",Kg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Qg="ls",Yg="p",wu="ac",Xg="websocket",Jg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Rn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Rn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function yC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function e_(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===Xg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Jg)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yC(t)&&(n.ns=t.namespace);const i=[];return we(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(){this.counters_={}}incrementCounter(e,n=1){yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Nw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa={},ua={};function Vc(t){const e=t.toString();return aa[e]||(aa[e]=new wC),aa[e]}function EC(t,e){const n=t.toString();return ua[n]||(ua[n]=e()),ua[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&qr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="start",SC="close",IC="pLPCommand",TC="pRTLPCB",t_="id",n_="pw",r_="ser",kC="cb",NC="seg",PC="ts",RC="d",xC="dframe",i_=1870,s_=30,OC=i_-s_,AC=25e3,DC=3e4;class fr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ls(e),this.stats_=Vc(n),this.urlFn=a=>(this.appCheckToken&&(a[wu]=this.appCheckToken),e_(n,Jg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new CC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(DC)),aC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hc((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===uf)this.id=l,this.password=a;else if(o===SC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[uf]="t",r[r_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[kC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Hg]=Bc,this.transportSessionId&&(r[$g]=this.transportSessionId),this.lastSessionId&&(r[Qg]=this.lastSessionId),this.applicationId&&(r[Yg]=this.applicationId),this.appCheckToken&&(r[wu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Kg.test(location.hostname)&&(r[qg]=Gg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fr.forceAllow_=!0}static forceDisallow(){fr.forceDisallow_=!0}static isAvailable(){return fr.forceAllow_?!0:!fr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!cC()&&!dC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Tg(n),i=Bg(r,OC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[xC]="t",r[t_]=e,r[n_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Hc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sC(),window[IC+this.uniqueCallbackIdentifier]=e,window[TC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Hc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ge("frame writing exception"),l.stack&&ge(l.stack),ge(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ge("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[t_]=this.myID,e[n_]=this.myPW,e[r_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+s_+r.length<=i_;){const o=this.pendingSegs.shift();r=r+"&"+NC+i+"="+o.seg+"&"+PC+i+"="+o.ts+"&"+RC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(AC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=16384,LC=45e3;let Oo=null;typeof MozWebSocket<"u"?Oo=MozWebSocket:typeof WebSocket<"u"&&(Oo=WebSocket);class st{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ls(this.connId),this.stats_=Vc(n),this.connURL=st.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Hg]=Bc,typeof location<"u"&&location.hostname&&Kg.test(location.hostname)&&(o[qg]=Gg),n&&(o[$g]=n),r&&(o[Qg]=r),i&&(o[wu]=i),s&&(o[Yg]=s),e_(e,Xg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Rn.set("previous_websocket_failure",!0);try{let r;Og(),this.mySock=new Oo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){st.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Oo!==null&&!st.forceDisallow_}static previouslyFailed(){return Rn.isInMemoryStorage||Rn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Rn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Bi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Bg(n,MC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(LC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}st.responsesRequiredToBeHealthy=2;st.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fr,st]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=st&&st.isAvailable();let r=n&&!st.previouslyFailed();if(e.webSocketOnly&&(n||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[st];else{const i=this.transports_=[];for(const s of Hi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Hi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Hi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=6e4,FC=5e3,UC=10*1024,zC=100*1024,ca="t",cf="d",jC="s",df="r",WC="e",hf="o",ff="a",pf="n",mf="p",BC="h";class VC{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ls("c:"+this.id+":"),this.transportManager_=new Hi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>UC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ca in e){const n=e[ca];n===ff?this.upgradeIfSecondaryHealthy_():n===df?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===hf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ri("t",e),r=ri("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ff,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:pf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ri("t",e),r=ri("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ri(ca,e);if(cf in e){const r=e[cf];if(n===BC){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===pf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===jC?this.onConnectionShutdown_(r):n===df?this.onReset_(r):n===WC?yu("Server Error: "+r):n===hf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Bc!==r&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(FC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Rn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends l_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Lc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ao}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=32,_f=768;class H{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new H("")}function b(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function hn(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new H(t.pieces_,e)}function $c(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function HC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function $i(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function a_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new H(e,0)}function te(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof H)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new H(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=b(t),r=b(e);if(n===null)return e;if(n===r)return Me(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $C(t,e){const n=$i(t,0),r=$i(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Yn(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function qc(t,e){if(hn(t)!==hn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Qe(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(hn(t)>hn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class qC{constructor(e,n){this.errorPrefix_=n,this.parts_=$i(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=pl(this.parts_[r]);u_(this)}}function GC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=pl(e),u_(t)}function KC(t){const e=t.parts_.pop();t.byteLength_-=pl(e),t.parts_.length>0&&(t.byteLength_-=1)}function u_(t){if(t.byteLength_>_f)throw new Error(t.errorPrefix_+"has a key path longer than "+_f+" bytes ("+t.byteLength_+").");if(t.parts_.length>gf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+gf+") or object contains a cycle "+In(t))}function In(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends l_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Gc}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=1e3,QC=60*5*1e3,vf=30*1e3,YC=1.3,XC=3e4,JC="server_kill",yf=3;class Rt extends o_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Rt.nextPersistentConnectionId_++,this.log_=ls("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ii,this.maxReconnectDelay_=QC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Og())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Gc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ao.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(fe(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new fl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Rt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yt(e,"w")){const r=Dr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Vw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Bw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+fe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yu("Unrecognized action received from server: "+fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ii,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ii,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>XC&&(this.reconnectDelay_=ii),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*YC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Rt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ge("getToken() completed but was canceled"):(ge("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new VC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{ze(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(JC)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ze(d),a())}}}interrupt(e){ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hu(this.interruptReasons_)&&(this.reconnectDelay_=ii,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Wc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new H(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=yf&&(this.reconnectDelay_=vf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=yf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+zg.replace(/\./g,"-")]=1,Lc()?e["framework.cordova"]=1:xg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ao.getInstance().currentlyOnline();return hu(this.interruptReasons_)&&e}}Rt.nextPersistentConnectionId_=0;Rt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new L(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new L(Lr,e),i=new L(Lr,n);return this.compare(r,i)!==0}minPost(){return L.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms;class c_ extends ml{static get __EMPTY_NODE(){return Ms}static set __EMPTY_NODE(e){Ms=e}compare(e,n){return Yn(e.name,n.name)}isDefinedOn(e){throw Vr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(Vn,Ms)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,Ms)}toString(){return".key"}}const Cr=new c_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class he{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??he.RED,this.left=i??Le.EMPTY_NODE,this.right=s??Le.EMPTY_NODE}copy(e,n,r,i,s){return new he(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}he.RED=!0;he.BLACK=!1;class ZC{copy(e,n,r,i,s){return this}insert(e,n,r){return new he(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,he.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,he.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ls(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ls(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ls(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ls(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new ZC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(t,e){return Yn(t.name,e.name)}function Kc(t,e){return Yn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu;function tS(t){Eu=t}const d_=function(t){return typeof t=="number"?"number:"+Vg(t):"string:"+t},h_=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yt(e,".sv"),"Priority must be a string or number.")}else S(t===Eu||t.isEmpty(),"priority of unexpected type.");S(t===Eu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wf;class ce{constructor(e,n=ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),h_(this.priorityNode_)}static set __childrenNodeConstructor(e){wf=e}static get __childrenNodeConstructor(){return wf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:b(e)===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=b(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||hn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+d_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Vg(this.value_):e+=this.value_,this.lazyHash_=Wg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ce.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ce.VALUE_TYPE_ORDER.indexOf(n),s=ce.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f_,p_;function nS(t){f_=t}function rS(t){p_=t}class iS extends ml{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Yn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(Vn,new ce("[PRIORITY-POST]",p_))}makePost(e,n){const r=f_(e);return new L(n,new ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const ne=new iS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=Math.log(2);class oS{constructor(e){const n=s=>parseInt(Math.log(s)/sS,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Do=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new he(h,d.node,he.BLACK,null,null);{const g=parseInt(c/2,10)+a,_=i(a,g),v=i(g+1,u);return d=t[g],h=n?n(d):d,new he(h,d.node,he.BLACK,_,v)}},s=function(a){let u=null,c=null,d=t.length;const h=function(_,v){const T=d-_,p=d;d-=_;const f=i(T+1,p),m=t[T],y=n?n(m):m;g(new he(y,m.node,v,null,f))},g=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),T=Math.pow(2,a.count-(_+1));v?h(T,he.BLACK):(h(T,he.BLACK),h(T,he.RED))}return c},o=new oS(t.length),l=s(o);return new Le(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let da;const er={};class Tt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(er&&ne,"ChildrenNode.ts has not been loaded"),da=da||new Tt({".priority":er},{".priority":ne}),da}get(e){const n=Dr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return yt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Cr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(L.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Do(r,e.getCompare()):l=er;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Tt(c,u)}addToIndexes(e,n){const r=Po(this.indexes_,(i,s)=>{const o=Dr(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===er)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(L.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Do(l,o.getCompare())}else return er;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new L(e.name,l))),a.insert(e,e.node)}});return new Tt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Po(this.indexes_,i=>{if(i===er)return i;{const s=n.get(e.name);return s?i.remove(new L(e.name,s)):i}});return new Tt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si;class x{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&h_(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return si||(si=new x(new Le(Kc),null,Tt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||si}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?si:n}}getChild(e){const n=b(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new L(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?si:this.priorityNode_;return new x(i,o,s)}}updateChild(e,n){const r=b(e);if(r===null)return n;{S(b(e)!==".priority"||hn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ne,(o,l)=>{n[o]=l.val(e),r++,s&&x.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+d_(this.getPriority().val())+":"),this.forEachChild(ne,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Wg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new L(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===as?-1:0}withIndex(e){if(e===Cr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Cr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ne),i=n.getIterator(ne);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Cr?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lS extends x{constructor(){super(new Le(Kc),x.EMPTY_NODE,Tt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const as=new lS;Object.defineProperties(L,{MIN:{value:new L(Lr,x.EMPTY_NODE)},MAX:{value:new L(Vn,as)}});c_.__EMPTY_NODE=x.EMPTY_NODE;ce.__childrenNodeConstructor=x;tS(as);rS(as);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=!0;function _e(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ce(n,_e(e))}if(!(t instanceof Array)&&aS){const n=[];let r=!1;if(we(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=_e(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new L(o,a)))}}),n.length===0)return x.EMPTY_NODE;const s=Do(n,eS,o=>o.name,Kc);if(r){const o=Do(n,ne.getCompare());return new x(s,_e(e),new Tt({".priority":o},{".priority":ne}))}else return new x(s,_e(e),Tt.Default)}else{let n=x.EMPTY_NODE;return we(t,(r,i)=>{if(yt(t,r)&&r.substring(0,1)!=="."){const s=_e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(_e(e))}}nS(_e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS extends ml{constructor(e){super(),this.indexPath_=e,S(!F(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Yn(e.name,n.name):s}makePost(e,n){const r=_e(e),i=x.EMPTY_NODE.updateChild(this.indexPath_,r);return new L(n,i)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,as);return new L(Vn,e)}toString(){return $i(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS extends ml{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Yn(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const r=_e(e);return new L(n,r)}toString(){return".value"}}const dS=new cS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t){return{type:"value",snapshotNode:t}}function br(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function qi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Gi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function hS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(qi(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(br(n,r)):o.trackChildChange(Gi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ne,(i,s)=>{n.hasChild(i)||r.trackChildChange(qi(i,s))}),n.isLeafNode()||n.forEachChild(ne,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Gi(i,s,o))}else r.trackChildChange(br(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.indexedFilter_=new Qc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ki.getStartPost_(e),this.endPost_=Ki.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new L(n,r))||(r=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=x.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(x.EMPTY_NODE);const s=this;return n.forEachChild(ne,(o,l)=>{s.matches(new L(o,l))||(i=i.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ki(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new L(n,r))||(r=x.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=x.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(x.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,g)=>d(g,h)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new L(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Gi(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(qi(n,d));const v=l.updateImmediateChild(n,x.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(br(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(qi(u.name,u.node)),s.trackChildChange(br(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,x.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Lr}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ne}copy(){const e=new Yc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pS(t){return t.loadsAllData()?new Qc(t.getIndex()):t.hasLimit()?new fS(t):new Ki(t)}function Ef(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ne?n="$priority":t.index_===dS?n="$value":t.index_===Cr?n="$key":(S(t.index_ instanceof uS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=fe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=fe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+fe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=fe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Cf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ne&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends o_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ls("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Mo.getListenId_(e,r),l={};this.listens_[o]=l;const a=Ef(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Dr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Mo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ef(e._queryParams),r=e._path.toString(),i=new fl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Bi(l.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(){return{value:null,children:new Map}}function g_(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=b(e);t.children.has(r)||t.children.set(r,Lo());const i=t.children.get(r);e=q(e),g_(i,e,n)}}function Cu(t,e,n){t.value!==null?n(e,t.value):gS(t,(r,i)=>{const s=new H(e.toString()+"/"+r);Cu(i,s,n)})}function gS(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&we(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=10*1e3,vS=30*1e3,yS=5*60*1e3;class wS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new _S(e);const r=Sf+(vS-Sf)*Math.random();wi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;we(e,(i,s)=>{s>0&&yt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*yS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ot||(ot={}));function Xc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Jc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Zc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ot.ACK_USER_WRITE,this.source=Xc()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new H(e));return new bo(W(),n,this.revert)}}else return S(b(this.path)===e,"operationForChild called for unrelated child."),new bo(q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this.source=e,this.path=n,this.type=ot.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new Qi(this.source,W()):new Qi(this.source,q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ot.OVERWRITE}operationForChild(e){return F(this.path)?new Hn(this.source,W(),this.snap.getImmediateChild(e)):new Hn(this.source,q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ot.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new H(e));return n.isEmpty()?null:n.value?new Hn(this.source,W(),n.value):new Fr(this.source,W(),n)}else return S(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fr(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=b(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function CS(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(hS(o.childName,o.snapshotNode))}),oi(t,i,"child_removed",e,r,n),oi(t,i,"child_added",e,r,n),oi(t,i,"child_moved",s,r,n),oi(t,i,"child_changed",e,r,n),oi(t,i,"value",e,r,n),i}function oi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>IS(t,l,a)),o.forEach(l=>{const a=SS(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function SS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function IS(t,e,n){if(e.childName==null||n.childName==null)throw Vr("Should only compare child_ events.");const r=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t,e){return{eventCache:t,serverCache:e}}function Ei(t,e,n,r){return gl(new $n(e,n,r),t.serverCache)}function __(t,e,n,r){return gl(t.eventCache,new $n(e,n,r))}function Su(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha;const TS=()=>(ha||(ha=new Le(uC)),ha);class ${constructor(e,n=TS()){this.value=e,this.children=n}static fromObject(e){let n=new $(null);return we(e,(r,i)=>{n=n.set(new H(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(F(e))return null;{const r=b(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(e),n);return s!=null?{path:te(new H(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=b(e),r=this.children.get(n);return r!==null?r.subtree(q(e)):new $(null)}}set(e,n){if(F(e))return new $(n,this.children);{const r=b(e),s=(this.children.get(r)||new $(null)).set(q(e),n),o=this.children.insert(r,s);return new $(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new $(null):new $(null,this.children);{const n=b(e),r=this.children.get(n);if(r){const i=r.remove(q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new $(null):new $(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=b(e),r=this.children.get(n);return r?r.get(q(e)):null}}setTree(e,n){if(F(e))return n;{const r=b(e),s=(this.children.get(r)||new $(null)).setTree(q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new $(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(te(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=b(e),o=this.children.get(s);return o?o.findOnPath_(q(e),te(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=b(e),s=this.children.get(i);return s?s.foreachOnPath_(q(e),te(n,i),r):new $(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(te(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.writeTree_=e}static empty(){return new ut(new $(null))}}function Ci(t,e,n){if(F(e))return new ut(new $(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Me(i,e);return s=s.updateChild(o,n),new ut(t.writeTree_.set(i,s))}else{const i=new $(n),s=t.writeTree_.setTree(e,i);return new ut(s)}}}function Iu(t,e,n){let r=t;return we(n,(i,s)=>{r=Ci(r,te(e,i),s)}),r}function If(t,e){if(F(e))return ut.empty();{const n=t.writeTree_.setTree(e,new $(null));return new ut(n)}}function Tu(t,e){return Xn(t,e)!=null}function Xn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function Tf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ne,(r,i)=>{e.push(new L(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new L(r,i.value))}),e}function un(t,e){if(F(e))return t;{const n=Xn(t,e);return n!=null?new ut(new $(n)):new ut(t.writeTree_.subtree(e))}}function ku(t){return t.writeTree_.isEmpty()}function Ur(t,e){return v_(W(),t.writeTree_,e)}function v_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=v_(te(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(te(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t,e){return C_(e,t)}function kS(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ci(t.visibleWrites,e,n)),t.lastWriteId=r}function NS(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Iu(t.visibleWrites,e,n),t.lastWriteId=r}function PS(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function RS(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&xS(l,r.path)?i=!1:Qe(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return OS(t),!0;if(r.snap)t.visibleWrites=If(t.visibleWrites,r.path);else{const l=r.children;we(l,a=>{t.visibleWrites=If(t.visibleWrites,te(r.path,a))})}return!0}else return!1}function xS(t,e){if(t.snap)return Qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qe(te(t.path,n),e))return!0;return!1}function OS(t){t.visibleWrites=y_(t.allWrites,AS,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function AS(t){return t.visible}function y_(t,e,n){let r=ut.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Qe(n,o)?(l=Me(n,o),r=Ci(r,l,s.snap)):Qe(o,n)&&(l=Me(o,n),r=Ci(r,W(),s.snap.getChild(l)));else if(s.children){if(Qe(n,o))l=Me(n,o),r=Iu(r,l,s.children);else if(Qe(o,n))if(l=Me(o,n),F(l))r=Iu(r,W(),s.children);else{const a=Dr(s.children,b(l));if(a){const u=a.getChild(q(l));r=Ci(r,W(),u)}}}else throw Vr("WriteRecord should have .snap or .children")}}return r}function w_(t,e,n,r,i){if(!r&&!i){const s=Xn(t.visibleWrites,e);if(s!=null)return s;{const o=un(t.visibleWrites,e);if(ku(o))return n;if(n==null&&!Tu(o,W()))return null;{const l=n||x.EMPTY_NODE;return Ur(o,l)}}}else{const s=un(t.visibleWrites,e);if(!i&&ku(s))return n;if(!i&&n==null&&!Tu(s,W()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Qe(u.path,e)||Qe(e,u.path))},l=y_(t.allWrites,o,e),a=n||x.EMPTY_NODE;return Ur(l,a)}}}function DS(t,e,n){let r=x.EMPTY_NODE;const i=Xn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ne,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=un(t.visibleWrites,e);return n.forEachChild(ne,(o,l)=>{const a=Ur(un(s,new H(o)),l);r=r.updateImmediateChild(o,a)}),Tf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=un(t.visibleWrites,e);return Tf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function MS(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=te(e,n);if(Tu(t.visibleWrites,s))return null;{const o=un(t.visibleWrites,s);return ku(o)?i.getChild(n):Ur(o,i.getChild(n))}}function LS(t,e,n,r){const i=te(e,n),s=Xn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=un(t.visibleWrites,i);return Ur(o,r.getNode().getImmediateChild(n))}else return null}function bS(t,e){return Xn(t.visibleWrites,e)}function FS(t,e,n,r,i,s,o){let l;const a=un(t.visibleWrites,e),u=Xn(a,W());if(u!=null)l=u;else if(n!=null)l=Ur(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=h.getNext();return c}else return[]}function US(){return{visibleWrites:ut.empty(),allWrites:[],lastWriteId:-1}}function Fo(t,e,n,r){return w_(t.writeTree,t.treePath,e,n,r)}function td(t,e){return DS(t.writeTree,t.treePath,e)}function kf(t,e,n,r){return MS(t.writeTree,t.treePath,e,n,r)}function Uo(t,e){return bS(t.writeTree,te(t.treePath,e))}function zS(t,e,n,r,i,s){return FS(t.writeTree,t.treePath,e,n,r,i,s)}function nd(t,e,n){return LS(t.writeTree,t.treePath,e,n)}function E_(t,e){return C_(te(t.treePath,e),t.writeTree)}function C_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Gi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,qi(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,br(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Gi(r,e.snapshotNode,i.oldSnap));else throw Vr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const S_=new WS;class rd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $n(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return nd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qn(this.viewCache_),s=zS(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t){return{filter:t}}function VS(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function HS(t,e,n,r,i){const s=new jS;let o,l;if(n.type===ot.OVERWRITE){const u=n;u.source.fromUser?o=Nu(t,e,u.path,u.snap,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!F(u.path),o=zo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ot.MERGE){const u=n;u.source.fromUser?o=qS(t,e,u.path,u.children,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Pu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ot.ACK_USER_WRITE){const u=n;u.revert?o=QS(t,e,u.path,r,i,s):o=GS(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ot.LISTEN_COMPLETE)o=KS(t,e,n.path,r,s);else throw Vr("Unknown operation type: "+n.type);const a=s.getChanges();return $S(e,o,a),{viewCache:o,changes:a}}function $S(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Su(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(m_(Su(e)))}}function I_(t,e,n,r,i,s){const o=e.eventCache;if(Uo(r,n)!=null)return e;{let l,a;if(F(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=qn(e),c=u instanceof x?u:x.EMPTY_NODE,d=td(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Fo(r,qn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=b(n);if(u===".priority"){S(hn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=kf(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=q(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=kf(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=nd(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return Ei(e,l,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function zo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(F(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),g,null)}else{const g=b(n);if(!a.isCompleteForPath(n)&&hn(n)>1)return e;const _=q(n),T=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=c.updatePriority(a.getNode(),T):u=c.updateChild(a.getNode(),g,T,_,S_,null)}const d=__(e,u,a.isFullyInitialized()||F(n),c.filtersNodes()),h=new rd(i,d,s);return I_(t,d,n,i,h,l)}function Nu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new rd(i,e,s);if(F(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ei(e,u,!0,t.filter.filtersNodes());else{const d=b(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ei(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=q(n),g=l.getNode().getImmediateChild(d);let _;if(F(h))_=r;else{const v=c.getCompleteChild(d);v!=null?$c(h)===".priority"&&v.getChild(a_(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=x.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),d,_,h,c,o);a=Ei(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Nf(t,e){return t.eventCache.isCompleteForChild(e)}function qS(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=te(n,a);Nf(e,b(c))&&(l=Nu(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=te(n,a);Nf(e,b(c))||(l=Nu(t,l,c,u,i,s,o))}),l}function Pf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Pu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;F(n)?u=r:u=new $(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),_=Pf(t,g,h);a=zo(t,a,new H(d),_,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const g=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!g){const _=e.serverCache.getNode().getImmediateChild(d),v=Pf(t,_,h);a=zo(t,a,new H(d),v,i,s,o,l)}}),a}function GS(t,e,n,r,i,s,o){if(Uo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(F(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return zo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(F(n)){let u=new $(null);return a.getNode().forEachChild(Cr,(c,d)=>{u=u.set(new H(c),d)}),Pu(t,e,n,u,i,s,l,o)}else return e}else{let u=new $(null);return r.foreach((c,d)=>{const h=te(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),Pu(t,e,n,u,i,s,l,o)}}function KS(t,e,n,r,i){const s=e.serverCache,o=__(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return I_(t,o,n,r,S_,i)}function QS(t,e,n,r,i,s){let o;if(Uo(r,n)!=null)return e;{const l=new rd(r,e,i),a=e.eventCache.getNode();let u;if(F(n)||b(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Fo(r,qn(e));else{const d=e.serverCache.getNode();S(d instanceof x,"serverChildren would be complete if leaf node"),c=td(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=b(n);let d=nd(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,q(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,x.EMPTY_NODE,q(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fo(r,qn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Uo(r,W())!=null,Ei(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Qc(r.getIndex()),s=pS(r);this.processor_=BS(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(x.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(x.EMPTY_NODE,l.getNode(),null),c=new $n(a,o.isFullyInitialized(),i.filtersNodes()),d=new $n(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=gl(d,c),this.eventGenerator_=new ES(this.query_)}get query(){return this.query_}}function XS(t){return t.viewCache_.serverCache.getNode()}function JS(t,e){const n=qn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(b(e)).isEmpty())?n.getChild(e):null}function Rf(t){return t.eventRegistrations_.length===0}function ZS(t,e){t.eventRegistrations_.push(e)}function xf(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Of(t,e,n,r){e.type===ot.MERGE&&e.source.queryId!==null&&(S(qn(t.viewCache_),"We should always have a full cache before handling merges"),S(Su(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=HS(t.processor_,i,e,n,r);return VS(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,T_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function eI(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ne,(s,o)=>{r.push(br(s,o))}),n.isFullyInitialized()&&r.push(m_(n.getNode())),T_(t,r,n.getNode(),e)}function T_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return CS(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo;class tI{constructor(){this.views=new Map}}function nI(t){S(!jo,"__referenceConstructor has already been defined"),jo=t}function rI(){return S(jo,"Reference.ts has not been loaded"),jo}function iI(t){return t.views.size===0}function id(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),Of(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Of(o,e,n,r));return s}}function sI(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Fo(n,i?r:null),a=!1;l?a=!0:r instanceof x?(l=td(n,r),a=!1):(l=x.EMPTY_NODE,a=!1);const u=gl(new $n(l,a,!1),new $n(r,i,!1));return new YS(e,u)}return o}function oI(t,e,n,r,i,s){const o=sI(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ZS(o,n),eI(o,n)}function lI(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=fn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(xf(u,n,r)),Rf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(xf(a,n,r)),Rf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!fn(t)&&s.push(new(rI())(e._repo,e._path)),{removed:s,events:o}}function k_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Sr(t,e){let n=null;for(const r of t.views.values())n=n||JS(r,e);return n}function N_(t,e){if(e._queryParams.loadsAllData())return _l(t);{const r=e._queryIdentifier;return t.views.get(r)}}function P_(t,e){return N_(t,e)!=null}function fn(t){return _l(t)!=null}function _l(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo;function aI(t){S(!Wo,"__referenceConstructor has already been defined"),Wo=t}function uI(){return S(Wo,"Reference.ts has not been loaded"),Wo}let cI=1;class Af{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $(null),this.pendingWriteTree_=US(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dI(t,e,n,r,i){return kS(t.pendingWriteTree_,e,n,r,i),i?Gr(t,new Hn(Xc(),e,n)):[]}function hI(t,e,n,r){NS(t.pendingWriteTree_,e,n,r);const i=$.fromObject(n);return Gr(t,new Fr(Xc(),e,i))}function xn(t,e,n=!1){const r=PS(t.pendingWriteTree_,e);if(RS(t.pendingWriteTree_,e)){let s=new $(null);return r.snap!=null?s=s.set(W(),!0):we(r.children,o=>{s=s.set(new H(o),!0)}),Gr(t,new bo(r.path,s,n))}else return[]}function vl(t,e,n){return Gr(t,new Hn(Jc(),e,n))}function fI(t,e,n){const r=$.fromObject(n);return Gr(t,new Fr(Jc(),e,r))}function pI(t,e){return Gr(t,new Qi(Jc(),e))}function mI(t,e,n){const r=sd(t,n);if(r){const i=od(r),s=i.path,o=i.queryId,l=Me(s,e),a=new Qi(Zc(o),l);return ld(t,s,a)}else return[]}function Ru(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||P_(o,e))){const a=lI(o,e,n,r);iI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,g)=>fn(g));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=vI(h);for(let _=0;_<g.length;++_){const v=g[_],T=v.query,p=A_(t,v);t.listenProvider_.startListening(Si(T),Bo(t,T),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Si(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(yl(h));t.listenProvider_.stopListening(Si(h),g)}))}yI(t,u)}return l}function gI(t,e,n,r){const i=sd(t,r);if(i!=null){const s=od(i),o=s.path,l=s.queryId,a=Me(o,e),u=new Hn(Zc(l),a,n);return ld(t,o,u)}else return[]}function _I(t,e,n,r){const i=sd(t,r);if(i){const s=od(i),o=s.path,l=s.queryId,a=Me(o,e),u=$.fromObject(n),c=new Fr(Zc(l),a,u);return ld(t,o,c)}else return[]}function Df(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=Me(h,i);s=s||Sr(g,_),o=o||fn(g)});let l=t.syncPointTree_.get(i);l?(o=o||fn(l),s=s||Sr(l,W())):(l=new tI,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=x.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=Sr(_,W());v&&(s=s.updateImmediateChild(g,v))}));const u=P_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=yl(e);S(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=wI();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const c=ed(t.pendingWriteTree_,i);let d=oI(l,e,n,c,s,a);if(!u&&!o&&!r){const h=N_(l,e);d=d.concat(EI(t,e,h))}return d}function R_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Me(o,e),u=Sr(l,a);if(u)return u});return w_(i,e,s,n,!0)}function Gr(t,e){return x_(e,t.syncPointTree_,null,ed(t.pendingWriteTree_,W()))}function x_(t,e,n,r){if(F(t.path))return O_(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=Sr(i,W()));let s=[];const o=b(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=E_(r,o);s=s.concat(x_(l,a,u,c))}return i&&(s=s.concat(id(i,t,r,n))),s}}function O_(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=Sr(i,W()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=E_(r,o),c=t.operationForChild(o);c&&(s=s.concat(O_(c,l,a,u)))}),i&&(s=s.concat(id(i,t,r,n))),s}function A_(t,e){const n=e.query,r=Bo(t,n);return{hashFn:()=>(XS(e)||x.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?mI(t,n._path,r):pI(t,n._path);{const s=hC(i,n);return Ru(t,n,null,s)}}}}function Bo(t,e){const n=yl(e);return t.queryToTagMap.get(n)}function yl(t){return t._path.toString()+"$"+t._queryIdentifier}function sd(t,e){return t.tagToQueryMap.get(e)}function od(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new H(t.substr(0,e))}}function ld(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=ed(t.pendingWriteTree_,e);return id(r,n,i,null)}function vI(t){return t.fold((e,n,r)=>{if(n&&fn(n))return[_l(n)];{let i=[];return n&&(i=k_(n)),we(r,(s,o)=>{i=i.concat(o)}),i}})}function Si(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(uI())(t._repo,t._path):t}function yI(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=yl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function wI(){return cI++}function EI(t,e,n){const r=e._path,i=Bo(t,e),s=A_(t,n),o=t.listenProvider_.startListening(Si(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)S(!fn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!F(u)&&c&&fn(c))return[_l(c).query];{let h=[];return c&&(h=h.concat(k_(c).map(g=>g.query))),we(d,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(Si(c),Bo(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ad(n)}node(){return this.node_}}class ud{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=te(this.path_,e);return new ud(this.syncTree_,n)}node(){return R_(this.syncTree_,this.path_)}}const CI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Mf=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return SI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return II(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},SI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},II=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},D_=function(t,e,n,r){return cd(e,new ud(n,t),r)},TI=function(t,e,n){return cd(t,new ad(e),n)};function cd(t,e,n){const r=t.getPriority().val(),i=Mf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Mf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ce(l,_e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ce(i))),o.forEachChild(ne,(l,a)=>{const u=cd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function hd(t,e){let n=e instanceof H?e:new H(e),r=t,i=b(n);for(;i!==null;){const s=Dr(r.node.children,i)||{children:{},childCount:0};r=new dd(i,r,s),n=q(n),i=b(n)}return r}function Kr(t){return t.node.value}function M_(t,e){t.node.value=e,xu(t)}function L_(t){return t.node.childCount>0}function kI(t){return Kr(t)===void 0&&!L_(t)}function wl(t,e){we(t.node.children,(n,r)=>{e(new dd(n,t,r))})}function b_(t,e,n,r){n&&!r&&e(t),wl(t,i=>{b_(i,e,!0,r)}),n&&r&&e(t)}function NI(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function us(t){return new H(t.parent===null?t.name:us(t.parent)+"/"+t.name)}function xu(t){t.parent!==null&&PI(t.parent,t.name,t)}function PI(t,e,n){const r=kI(n),i=yt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,xu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=/[\[\].#$\/\u0000-\u001F\u007F]/,xI=/[\[\].#$\u0000-\u001F\u007F]/,fa=10*1024*1024,fd=function(t){return typeof t=="string"&&t.length!==0&&!RI.test(t)},F_=function(t){return typeof t=="string"&&t.length!==0&&!xI.test(t)},OI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),F_(t)},AI=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!jc(t)||t&&typeof t=="object"&&yt(t,".sv")},pd=function(t,e,n){const r=n instanceof H?new qC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+In(r));if(typeof e=="function")throw new Error(t+"contains a function "+In(r)+" with contents = "+e.toString());if(jc(e))throw new Error(t+"contains "+e.toString()+" "+In(r));if(typeof e=="string"&&e.length>fa/3&&pl(e)>fa)throw new Error(t+"contains a string greater than "+fa+" utf8 bytes "+In(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(we(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!fd(o)))throw new Error(t+" contains an invalid key ("+o+") "+In(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);GC(r,o),pd(t,l,r),KC(r)}),i&&s)throw new Error(t+' contains ".value" child '+In(r)+" in addition to actual children.")}},DI=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=$i(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!fd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort($C);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Qe(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},MI=function(t,e,n,r){if(r&&e===void 0)return;const i=bc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];we(e,(o,l)=>{const a=new H(o);if(pd(i,l,te(n,a)),$c(a)===".priority"&&!AI(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),DI(i,s)},U_=function(t,e,n,r){if(!(r&&n===void 0)&&!F_(n))throw new Error(bc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},LI=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),U_(t,e,n,r)},bI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!OI(n))throw new Error(bc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function md(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!qc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function z_(t,e,n){md(t,n),j_(t,r=>qc(r,e))}function Lt(t,e,n){md(t,n),j_(t,r=>Qe(r,e)||Qe(e,r))}function j_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(UI(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function UI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Mn&&ge("event: "+n.toString()),qr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="repo_interrupt",jI=25;class WI{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new FI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Lo(),this.transactionQueueTree_=new dd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function BI(t,e,n){if(t.stats_=Vc(t.repoInfo_),t.forceRestClient_||gC())t.server_=new Mo(t.repoInfo_,(r,i,s,o)=>{Lf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>bf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Rt(t.repoInfo_,e,(r,i,s,o)=>{Lf(t,r,i,s,o)},r=>{bf(t,r)},r=>{HI(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=EC(t.repoInfo_,()=>new wS(t.stats_,t.server_)),t.infoData_=new mS,t.infoSyncTree_=new Af({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=vl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),_d(t,"connected",!1),t.serverSyncTree_=new Af({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Lt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function VI(t){const n=t.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function gd(t){return CI({timestamp:VI(t)})}function Lf(t,e,n,r,i){t.dataUpdateCount++;const s=new H(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Po(n,u=>_e(u));o=_I(t.serverSyncTree_,s,a,i)}else{const a=_e(n);o=gI(t.serverSyncTree_,s,a,i)}else if(r){const a=Po(n,u=>_e(u));o=fI(t.serverSyncTree_,s,a)}else{const a=_e(n);o=vl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Yi(t,s)),Lt(t.eventQueue_,l,o)}function bf(t,e){_d(t,"connected",e),e===!1&&qI(t)}function HI(t,e){we(e,(n,r)=>{_d(t,n,r)})}function _d(t,e,n){const r=new H("/.info/"+e),i=_e(n);t.infoData_.updateSnapshot(r,i);const s=vl(t.infoSyncTree_,r,i);Lt(t.eventQueue_,r,s)}function W_(t){return t.nextWriteId_++}function $I(t,e,n,r){vd(t,"update",{path:e.toString(),value:n});let i=!0;const s=gd(t),o={};if(we(n,(l,a)=>{i=!1,o[l]=D_(te(e,l),_e(a),t.serverSyncTree_,s)}),i)ge("update() called with empty data.  Don't do anything."),Uf(t,r,"ok",void 0);else{const l=W_(t),a=hI(t.serverSyncTree_,e,o,l);md(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||ze("update at "+e+" failed: "+u);const h=xn(t.serverSyncTree_,l,!d),g=h.length>0?Yi(t,e):e;Lt(t.eventQueue_,g,h),Uf(t,r,u,c)}),we(n,u=>{const c=q_(t,te(e,u));Yi(t,c)}),Lt(t.eventQueue_,e,[])}}function qI(t){vd(t,"onDisconnectEvents");const e=gd(t),n=Lo();Cu(t.onDisconnect_,W(),(i,s)=>{const o=D_(i,s,t.serverSyncTree_,e);g_(n,i,o)});let r=[];Cu(n,W(),(i,s)=>{r=r.concat(vl(t.serverSyncTree_,i,s));const o=q_(t,i);Yi(t,o)}),t.onDisconnect_=Lo(),Lt(t.eventQueue_,W(),r)}function GI(t,e,n){let r;b(e._path)===".info"?r=Df(t.infoSyncTree_,e,n):r=Df(t.serverSyncTree_,e,n),z_(t.eventQueue_,e._path,r)}function Ff(t,e,n){let r;b(e._path)===".info"?r=Ru(t.infoSyncTree_,e,n):r=Ru(t.serverSyncTree_,e,n),z_(t.eventQueue_,e._path,r)}function KI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zI)}function vd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ge(n,...e)}function Uf(t,e,n,r){e&&qr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function B_(t,e,n){return R_(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function yd(t,e=t.transactionQueueTree_){if(e||El(t,e),Kr(e)){const n=H_(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&QI(t,us(e),n)}else L_(e)&&wl(e,n=>{yd(t,n)})}function QI(t,e,n){const r=n.map(u=>u.currentWriteId),i=B_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];S(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Me(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{vd(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(xn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();El(t,hd(t.transactionQueueTree_,e)),yd(t,t.transactionQueueTree_),Lt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)qr(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ze("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Yi(t,e)}},o)}function Yi(t,e){const n=V_(t,e),r=us(n),i=H_(t,n);return YI(t,i,r),r}function YI(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Me(n,a.path);let c=!1,d;if(S(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(xn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=jI)c=!0,d="maxretry",i=i.concat(xn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=B_(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){pd("transaction failed: Data returned ",g,a.path);let _=_e(g);typeof g=="object"&&g!=null&&yt(g,".priority")||(_=_.updatePriority(h.getPriority()));const T=a.currentWriteId,p=gd(t),f=TI(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=W_(t),o.splice(o.indexOf(T),1),i=i.concat(dI(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(xn(t.serverSyncTree_,T,!0))}else c=!0,d="nodata",i=i.concat(xn(t.serverSyncTree_,a.currentWriteId,!0))}Lt(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}El(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)qr(r[l]);yd(t,t.transactionQueueTree_)}function V_(t,e){let n,r=t.transactionQueueTree_;for(n=b(e);n!==null&&Kr(r)===void 0;)r=hd(r,n),e=q(e),n=b(e);return r}function H_(t,e){const n=[];return $_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function $_(t,e,n){const r=Kr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);wl(e,i=>{$_(t,i,n)})}function El(t,e){const n=Kr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,M_(e,n.length>0?n:void 0)}wl(e,r=>{El(t,r)})}function q_(t,e){const n=us(V_(t,e)),r=hd(t.transactionQueueTree_,e);return NI(r,i=>{pa(t,i)}),pa(t,r),b_(r,i=>{pa(t,i)}),n}function pa(t,e){const n=Kr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(xn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?M_(e,void 0):n.length=s+1,Lt(t.eventQueue_,us(e),i);for(let o=0;o<r.length;o++)qr(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function JI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const zf=function(t,e){const n=ZI(t),r=n.namespace;n.domain==="firebase.com"&&Mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||lC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Zg(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new H(n.pathString)}},ZI=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=XI(t.substring(c,d)));const h=JI(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+fe(this.snapshot.exportVal())}}class K_{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:$c(this._path)}get ref(){return new Ut(this._repo,this._path)}get _queryIdentifier(){const e=Cf(this._queryParams),n=Wc(e);return n==="{}"?"default":n}get _queryObject(){return Cf(this._queryParams)}isEqual(e){if(e=Ze(e),!(e instanceof wd))return!1;const n=this._repo===e._repo,r=qc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+HC(this._path)}}class Ut extends wd{constructor(e,n){super(e,n,new Yc,!1)}get parent(){const e=a_(this._path);return e===null?null:new Ut(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new H(e),r=Vo(this.ref,e);return new Xi(this._node.getChild(n),r,ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Xi(i,Vo(this.ref,r),ne)))}hasChild(e){const n=new H(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Q_(t,e){return t=Ze(t),t._checkNotDeleted("ref"),e!==void 0?Vo(t._root,e):t._root}function Vo(t,e){return t=Ze(t),b(t._path)===null?LI("child","path",e,!1):U_("child","path",e,!1),new Ut(t._repo,te(t._path,e))}function tT(t,e){MI("update",e,t._path,!1);const n=new fl;return $I(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Ed{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new G_("value",this,new Xi(e.snapshotNode,new Ut(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new K_(this,e,n):null}matches(e){return e instanceof Ed?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Cd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new K_(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const r=Vo(new Ut(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new G_(e.type,this,new Xi(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Cd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function nT(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{Ff(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new eT(n,s||void 0),l=e==="value"?new Ed(o):new Cd(e,o);return GI(t._repo,t,l),()=>Ff(t._repo,t,l)}function rT(t,e,n,r){return nT(t,"value",e,n,r)}nI(Ut);aI(Ut);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="FIREBASE_DATABASE_EMULATOR_HOST",Ou={};let sT=!1;function oT(t,e,n,r){t.repoInfo_=new Zg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function lT(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ge("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zf(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[iT]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=zf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new Er(Er.OWNER):new vC(t.name,t.options,e);bI("Invalid Firebase Database URL",o),F(o.path)||Mt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=uT(l,t,c,new _C(t.name,n));return new cT(d,t)}function aT(t,e){const n=Ou[e];(!n||n[t.key]!==t)&&Mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),KI(t),delete n[t.key]}function uT(t,e,n,r){let i=Ou[e.name];i||(i={},Ou[e.name]=i);let s=i[t.toURLString()];return s&&Mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new WI(t,sT,n,r),i[t.toURLString()]=s,s}class cT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(BI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ut(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(aT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mt("Cannot call "+e+" on a deleted database.")}}function dT(t=bg(),e){const n=zc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Dw("database");r&&hT(n,...r)}return n}function hT(t,e,n,r={}){t=Ze(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Mt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Er(Er.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Mw(r.mockUserToken,t.app.options.projectId);s=new Er(o)}oT(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t){nC($r),Mr(new Wn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return lT(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),an(sf,of,t),an(sf,of,"esm2017")}Rt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Rt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fT();function Sd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Y_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pT=Y_,X_=new ss("auth","Firebase",Y_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new Fc("@firebase/auth");function mT(t,...e){Ho.logLevel<=V.WARN&&Ho.warn(`Auth (${$r}): ${t}`,...e)}function Qs(t,...e){Ho.logLevel<=V.ERROR&&Ho.error(`Auth (${$r}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,...e){throw Id(t,...e)}function gt(t,...e){return Id(t,...e)}function J_(t,e,n){const r=Object.assign(Object.assign({},pT()),{[e]:n});return new ss("auth","Firebase",r).create(e,{appName:t.name})}function gT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&vt(t,"argument-error"),J_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Id(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return X_.create(t,...e)}function O(t,e,...n){if(!t)throw Id(e,...n)}function kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qs(e),new Error(e)}function bt(t,e){t||kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _T(){return jf()==="http:"||jf()==="https:"}function jf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_T()||Lw()||"connection"in navigator)?navigator.onLine:!0}function yT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.shortDelay=e,this.longDelay=n,bt(n>e,"Short delay should be less than long delay!"),this.isMobile=Lc()||xg()}get(){return vT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t,e){bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=new cs(3e4,6e4);function ev(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ds(t,e,n,r,i={}){return tv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Hr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Z_.fetch()(nv(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function tv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wT),e);try{const i=new ST(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw bs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw bs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw bs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw bs(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw J_(t,c,u);vt(t,c)}}catch(i){if(i instanceof _n)throw i;vt(t,"network-request-failed",{message:String(i)})}}async function CT(t,e,n,r,i={}){const s=await ds(t,e,n,r,i);return"mfaPendingCredential"in s&&vt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function nv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Td(t.config,i):`${t.config.apiScheme}://${i}`}class ST{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),ET.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IT(t,e){return ds(t,"POST","/v1/accounts:delete",e)}async function TT(t,e){return ds(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kT(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),i=kd(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ii(ma(i.auth_time)),issuedAtTime:Ii(ma(i.iat)),expirationTime:Ii(ma(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ma(t){return Number(t)*1e3}function kd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qs("JWT malformed, contained fewer than 3 sections"),null;try{const i=No(n);return i?JSON.parse(i):(Qs("Failed to decode base64 JWT payload"),null)}catch(i){return Qs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function NT(t){const e=kd(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&PT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function PT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ii(this.lastLoginAt),this.creationTime=Ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ji(t,TT(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?AT(s.providerUserInfo):[],l=OT(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new rv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function xT(t){const e=Ze(t);await $o(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function AT(t){return t.map(e=>{var{providerId:n}=e,r=Sd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DT(t,e){const n=await tv(t,{},async()=>{const r=Hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=nv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Z_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):NT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await DT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Zi;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zi,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Sd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ji(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kT(this,e)}reload(){return xT(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $o(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ji(this,IT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,T=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:k,providerData:C,stsTokenManager:E}=n;O(m&&E,e,"internal-error");const I=Zi.fromJSON(this.name,E);O(typeof m=="string",e,"internal-error"),jt(d,e.name),jt(h,e.name),O(typeof y=="boolean",e,"internal-error"),O(typeof k=="boolean",e,"internal-error"),jt(g,e.name),jt(_,e.name),jt(v,e.name),jt(T,e.name),jt(p,e.name),jt(f,e.name);const U=new Ln({uid:m,auth:e,email:h,emailVerified:y,displayName:d,isAnonymous:k,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:I,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(U.providerData=C.map(A=>Object.assign({},A))),T&&(U._redirectEventId=T),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new Zi;i.updateFromServerResponse(n);const s=new Ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $o(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=new Map;function Nt(t){bt(t instanceof Function,"Expected a class definition");let e=Wf.get(t);return e?(bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iv.type="NONE";const Bf=iv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t,e,n){return`firebase:${t}:${e}:${n}`}class Ir{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ys(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ys("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ir(Nt(Bf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Nt(Bf);const o=Ys(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Ln._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Ir(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ir(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uv(e))return"Blackberry";if(cv(e))return"Webos";if(Nd(e))return"Safari";if((e.includes("chrome/")||ov(e))&&!e.includes("edge/"))return"Chrome";if(av(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sv(t=Te()){return/firefox\//i.test(t)}function Nd(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ov(t=Te()){return/crios\//i.test(t)}function lv(t=Te()){return/iemobile/i.test(t)}function av(t=Te()){return/android/i.test(t)}function uv(t=Te()){return/blackberry/i.test(t)}function cv(t=Te()){return/webos/i.test(t)}function Cl(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function MT(t=Te()){var e;return Cl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LT(){return bw()&&document.documentMode===10}function dv(t=Te()){return Cl(t)||av(t)||cv(t)||uv(t)||/windows phone/i.test(t)||lv(t)}function bT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t,e=[]){let n;switch(t){case"Browser":n=Vf(Te());break;case"Worker":n=`${Vf(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(t,e={}){return ds(t,"GET","/v2/passwordPolicy",ev(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=6;class jT{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hf(this),this.idTokenSubscription=new Hf(this),this.beforeStateQueue=new FT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=X_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ir.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $o(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ze(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await UT(this),n=new jT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ss("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Ir.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Sl(t){return Ze(t)}class Hf{constructor(e){this.auth=e,this.observer=null,this.addObserver=$w(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function VT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",BT().appendChild(r)})}function HT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t,e){const n=zc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ro(s,e??{}))return i;vt(i,"already-initialized")}return n.initialize({options:e})}function qT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GT(t,e,n){const r=Sl(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=fv(e),{host:o,port:l}=KT(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||QT()}function fv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KT(t){const e=fv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:$f(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:$f(o)}}}function $f(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,n){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(t,e){return CT(t,"POST","/v1/accounts:signInWithIdp",ev(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="http://localhost";class Gn extends pv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Sd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Tr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Tr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tr(e,n)}buildRequest(){const e={requestUri:YT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Pd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends hs{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends hs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends hs{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends hs{constructor(){super("twitter.com")}static credential(e,n){return Gn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ln._fromIdTokenResponse(e,r,i),o=qf(r);return new zr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qf(r);return new zr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends _n{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qo(e,n,r,i)}}function mv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qo._fromErrorAndOperation(t,s,e,r):s})}async function XT(t,e,n=!1){const r=await Ji(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JT(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ji(t,mv(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=kd(s.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),zr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(t,e,n=!1){const r="signIn",i=await mv(t,r,e),s=await zr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function ek(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function tk(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function nk(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function rk(t){return Ze(t).signOut()}const Go="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Go,"1"),this.storage.removeItem(Go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(){const t=Te();return Nd(t)||Cl(t)}const sk=1e3,ok=10;class _v extends gv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ik()&&bT(),this.fallbackToPolling=dv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);LT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ok):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_v.type="LOCAL";const lk=_v;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv extends gv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vv.type="SESSION";const yv=vv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Il(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await ak(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Il.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Rd("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return window}function ck(t){_t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function dk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fk(){return wv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="firebaseLocalStorageDb",pk=1,Ko="firebaseLocalStorage",Cv="fbase_key";class fs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tl(t,e){return t.transaction([Ko],e?"readwrite":"readonly").objectStore(Ko)}function mk(){const t=indexedDB.deleteDatabase(Ev);return new fs(t).toPromise()}function Du(){const t=indexedDB.open(Ev,pk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ko,{keyPath:Cv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ko)?e(r):(r.close(),await mk(),e(await Du()))})})}async function Gf(t,e,n){const r=Tl(t,!0).put({[Cv]:e,value:n});return new fs(r).toPromise()}async function gk(t,e){const n=Tl(t,!1).get(e),r=await new fs(n).toPromise();return r===void 0?null:r.value}function Kf(t,e){const n=Tl(t,!0).delete(e);return new fs(n).toPromise()}const _k=800,vk=3;class Sv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Du(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Il._getInstance(fk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dk(),!this.activeServiceWorker)return;this.sender=new uk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Du();return await Gf(e,Go,"1"),await Kf(e,Go),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Tl(i,!1).getAll();return new fs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_k)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sv.type="LOCAL";const yk=Sv;new cs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t,e){return e?Nt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd extends pv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wk(t){return ZT(t.auth,new xd(t),t.bypassAuthState)}function Ek(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),JT(n,new xd(t),t.bypassAuthState)}async function Ck(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),XT(n,new xd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wk;case"linkViaPopup":case"linkViaRedirect":return Ck;case"reauthViaPopup":case"reauthViaRedirect":return Ek;default:vt(this.auth,"internal-error")}}resolve(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=new cs(2e3,1e4);async function Ik(t,e,n){const r=Sl(t);gT(t,e,Pd);const i=Iv(r,n);return new On(r,"signInViaPopup",e,i).executeNotNull()}class On extends Tv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const e=Rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sk.get())};e()}}On.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk="pendingRedirect",Xs=new Map;class kk extends Tv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xs.get(this.auth._key());if(!e){try{const r=await Nk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xs.set(this.auth._key(),e)}return this.bypassAuthState||Xs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nk(t,e){const n=xk(e),r=Rk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Pk(t,e){Xs.set(t._key(),e)}function Rk(t){return Nt(t._redirectPersistence)}function xk(t){return Ys(Tk,t.config.apiKey,t.name)}async function Ok(t,e,n=!1){const r=Sl(t),i=Iv(r,e),o=await new kk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=10*60*1e3;class Dk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ak&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qf(e))}saveEventToCache(e){this.cachedEventUids.add(Qf(e)),this.lastProcessedEventTime=Date.now()}}function Qf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Mk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(t,e={}){return ds(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fk=/^https?/;async function Uk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Lk(t);for(const n of e)try{if(zk(n))return}catch{}vt(t,"unauthorized-domain")}function zk(t){const e=Au(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Fk.test(n))return!1;if(bk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=new cs(3e4,6e4);function Yf(){const t=_t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Wk(t){return new Promise((e,n)=>{var r,i,s;function o(){Yf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yf(),n(gt(t,"network-request-failed"))},timeout:jk.get()})}if(!((i=(r=_t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_t().gapi)===null||s===void 0)&&s.load)o();else{const l=HT("iframefcb");return _t()[l]=()=>{gapi.load?o():n(gt(t,"network-request-failed"))},VT(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Js=null,e})}let Js=null;function Bk(t){return Js=Js||Wk(t),Js}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=new cs(5e3,15e3),Hk="__/auth/iframe",$k="emulator/auth/iframe",qk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kk(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Td(e,$k):`https://${t.config.authDomain}/${Hk}`,r={apiKey:e.apiKey,appName:t.name,v:$r},i=Gk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Hr(r).slice(1)}`}async function Qk(t){const e=await Bk(t),n=_t().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:Kk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gt(t,"network-request-failed"),l=_t().setTimeout(()=>{s(o)},Vk.get());function a(){_t().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xk=500,Jk=600,Zk="_blank",e1="http://localhost";class Xf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function t1(t,e,n,r=Xk,i=Jk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Yk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Te().toLowerCase();n&&(l=ov(u)?Zk:n),sv(u)&&(e=e||e1,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(MT(u)&&l!=="_self")return n1(e||"",l),new Xf(null);const d=window.open(e||"",l,c);O(d,t,"popup-blocked");try{d.focus()}catch{}return new Xf(d)}function n1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1="__/auth/handler",i1="emulator/auth/handler",s1=encodeURIComponent("fac");async function Jf(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$r,eventId:i};if(e instanceof Pd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof hs){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${s1}=${encodeURIComponent(a)}`:"";return`${o1(t)}?${Hr(l).slice(1)}${u}`}function o1({config:t}){return t.emulator?Td(t,i1):`https://${t.authDomain}/${r1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="webStorageSupport";class l1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yv,this._completeRedirectFn=Ok,this._overrideRedirectResult=Pk}async _openPopup(e,n,r,i){var s;bt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jf(e,n,r,Au(),i);return t1(e,o,Rd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jf(e,n,r,Au(),i);return ck(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Qk(e),r=new Dk(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ga,{type:ga},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ga];o!==void 0&&n(!!o),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Uk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dv()||Nd()||Cl()}}const a1=l1;var Zf="@firebase/auth",ep="1.3.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function d1(t){Mr(new Wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hv(t)},u=new WT(r,i,s,a);return qT(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mr(new Wn("auth-internal",e=>{const n=Sl(e.getProvider("auth").getImmediate());return(r=>new u1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Zf,ep,c1(t)),an(Zf,ep,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=5*60,f1=Rg("authIdTokenMaxAge")||h1;let tp=null;const p1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>f1)return;const i=n==null?void 0:n.token;tp!==i&&(tp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Od(t=bg()){const e=zc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$T(t,{popupRedirectResolver:a1,persistence:[yk,lk,yv]}),r=Rg("authTokenSyncURL");if(r){const s=p1(r);tk(n,s,()=>s(n.currentUser)),ek(n,o=>s(o))}const i=Ng("auth");return i&&GT(n,`http://${i}`),n}d1("Browser");const m1={apiKey:"AIzaSyCM-INIahKIEGFV0Cu28rwN-xOfvnZwx54",authDomain:"quickreact-a58e9.firebaseapp.com",databaseURL:"https://quickreact-a58e9-default-rtdb.firebaseio.com",projectId:"quickreact-a58e9",storageBucket:"quickreact-a58e9.appspot.com",messagingSenderId:"164473226496",appId:"1:164473226496:web:504b51b0cff8f700979fe5",measurementId:"G-B2HEBE3MNK"},kl=Lg(m1),Mu=dT(kl),Nv=t=>{const[e,n]=oe.useState(),[r,i]=oe.useState(null);return oe.useEffect(()=>rT(Q_(Mu,t),s=>{n(s.val())},s=>{i(s)}),[t]),[e,r]},np=t=>{const e=Date.now(),n=(t==null?void 0:t.message)||`Updated: ${new Date(e).toLocaleString()}`;return{timestamp:e,error:t,message:n}},g1=t=>{const[e,n]=oe.useState();return[oe.useCallback(i=>{tT(Q_(Mu,t),i).then(()=>n(np())).catch(s=>n(np(s)))},[Mu,t]),e]},_1=()=>{Ik(Od(kl),new Ct)},v1=()=>rk(Od(kl)),Pv=()=>{const[t,e]=oe.useState();return oe.useEffect(()=>nk(Od(kl),e),[]),[t]},y1=({course:t,onCancel:e})=>{const{term:n,number:r,title:i,meets:s}=t,o=`${n.charAt(0)}${r}`;console.log("Course prop:",t),console.log("id:",o);const l=(_,v)=>{switch(_){case"title":return v.length>=2?"":"Title must be at least two characters";case"meets":return/^$|^[MTWThF]+ \d{2}:\d{2}-\d{2}:\d{2}$/.test(v)?"":"Must contain days and start-end, e.g., MWF 12:00-13:20";default:return""}},[a,u]=Iw(l,{number:r,term:n,title:i,meets:s}),[c,d]=g1(`/courses/${o}`),h=_=>{_.preventDefault(),console.log("state:",a),a.errors||c({number:a.values.number,term:a.values.term,title:a.values.title,meets:a.values.meets})},g=({name:_,text:v,state:T,change:p})=>{var f,m;return P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:_,children:v}),P.jsx("input",{type:"text",className:`form-control ${(f=T.errors)!=null&&f[_]?"is-invalid":""}`,id:_,name:_,value:T.values[_]||"",onChange:p}),P.jsx("div",{className:"invalid-feedback",children:(m=T.errors)==null?void 0:m[_]})]})};return P.jsxs("form",{onSubmit:h,children:[P.jsx(g,{name:"title",text:"Course Title",state:a,change:u}),P.jsx(g,{name:"meets",text:"Meeting Times",state:a,change:u}),P.jsx("button",{type:"submit",className:"btn btn-primary",children:"Submit"}),P.jsx("button",{type:"button",onClick:e,className:"btn btn-secondary",children:"Cancel"})]})},w1=(t,e,n,r)=>t<r&&n<e,E1=t=>{const[e,n]=t.split(":").map(Number);return e*60+n},rp=t=>{if(t==="")return{days:"",startTime:0,endTime:0};const[e,n]=t.split(" "),[r,i]=n.split("-").map(E1);return{days:e,startTime:r,endTime:i}},C1=(t,e)=>{if(t.term!==e.term)return!1;const n=rp(t.meets),r=rp(e.meets);for(let i of n.days)if(r.days.includes(i)&&w1(n.startTime,n.endTime,r.startTime,r.endTime))return!0;return!1},S1=(t,e)=>e.filter(n=>C1(t,n)),I1=()=>{const[t]=Pv(),[e,n,r]=Nv(`/admins/${(t==null?void 0:t.uid)||"guest"}`);return[{user:t,isAdmin:e},n,r]},T1=({course:t,isSelected:e,isConflicting:n,onToggle:r})=>{const[i,s]=oe.useState(!1),[o,l,a]=I1();if(a)return P.jsxs("h1",{children:["Error loading profile: ",`${a}`]});if(l)return P.jsx("h1",{children:"Loading user profile"});if(!o)return P.jsx("h1",{children:"No profile data"});const u=d=>{d.stopPropagation(),s(!0)},c=()=>{s(!1)};return console.log("Admin",o==null?void 0:o.isAdmin),i?P.jsxs(P.Fragment,{children:[P.jsxs("div",{className:`card ${e?"selected":""}`,onClick:()=>r(t.number,t),children:[n&&P.jsx("span",{className:"warning-icon",children:"⚠️"}),P.jsxs("div",{className:"card-title",children:[t.term," CS ",t.number]}),P.jsx("div",{className:"card-body",children:t.title}),P.jsx("div",{className:"card-footer",children:t.meets}),(o==null?void 0:o.isAdmin)&&P.jsx("button",{onClick:u,className:"edit-button",children:"Edit"})]}),P.jsx("div",{className:"card-overlay",children:P.jsx(y1,{course:t,onCancel:c})})]}):P.jsxs("div",{className:`card ${e?"selected":""}`,onClick:()=>r(t.number,t),children:[n&&P.jsx("span",{className:"warning-icon",children:"⚠️"}),P.jsxs("div",{className:"card-title",children:[t.term," CS ",t.number]}),P.jsx("div",{className:"card-body",children:t.title}),P.jsx("div",{className:"card-footer",children:t.meets}),P.jsx("button",{onClick:u,className:"edit-button",children:"Edit"})]})},k1=({term:t,selected:e=[],toggleSelected:n,courses:r={}})=>P.jsx("div",{className:"course-grid",children:Object.entries(r).filter(([i,s])=>s.term===t).map(([i,s])=>{const o=e.map(u=>r[u]),a=S1(s,o).length>0;return P.jsx(T1,{course:s,isSelected:e.includes(i),isConflicting:a&&!e.includes(i),onToggle:()=>{(!a||e.includes(i))&&n&&n(i)}},i)})}),N1=["Fall","Winter","Spring"],P1=({term:t,selection:e,setSelection:n})=>P.jsx("button",{className:`btn btn-light ${t===e?"active":""}`,onClick:()=>n(t),children:t}),R1=({selection:t,setSelection:e})=>P.jsx("div",{className:"btn-group",children:N1.map(n=>P.jsx(P1,{term:n,selection:t,setSelection:e},n))});const x1=({children:t,open:e,close:n})=>P.jsx("div",{className:`modal ${e?"modal-show":""}`,tabIndex:"-1",role:"dialog",onClick:r=>{r.target===r.currentTarget&&n()},children:P.jsx("div",{className:"modal-dialog",role:"document",children:P.jsxs("div",{className:"modal-content",children:[P.jsx("div",{className:"modal-header",children:P.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:n})}),P.jsx("div",{className:"modal-body",children:t})]})})}),O1=({selected:t,courses:e={}})=>{const n=r=>e[r];return P.jsx("div",{className:"cart",children:t.length===0?P.jsx("h2",{children:"No course selected. Please click courses to select."}):t.map(r=>{const i=n(r);return i?P.jsxs("div",{children:[i.term," CS ",i.number," - ",i.title," -- ",i.meets]},r):null})})},A1=()=>P.jsx("button",{className:"ms-auto btn btn-dark",onClick:_1,children:"Sign in"}),D1=()=>P.jsx("button",{className:"ms-auto btn btn-dark",onClick:v1,children:"Sign out"}),M1=()=>{const[t]=Pv();return t?P.jsx(D1,{}):P.jsx(A1,{})},L1=()=>P.jsx("nav",{className:"d-flex",children:P.jsx(M1,{})}),b1=()=>{const[t,e,n]=Nv("/");console.log("data",t),console.log("error",n);const[r,i]=oe.useState("Fall"),[s,o]=oe.useState([]),[l,a]=oe.useState(!1),u=h=>o(s.includes(h)?s.filter(g=>g!==h):[...s,h]),c=()=>a(!0),d=()=>a(!1);return n?P.jsxs("h1",{children:["Error loading courses data: ",`${n}`]}):e?P.jsx("h1",{children:"Loading courses data..."}):t?P.jsxs("div",{className:"container",children:[P.jsxs("div",{className:"header-container",children:[P.jsx("h1",{children:"CS Courses for 2018-2019"}),P.jsx(L1,{})]}),P.jsxs("div",{className:"header-row",children:[P.jsx(R1,{selection:r,setSelection:i}),P.jsxs("button",{className:"btn btn-outline-dark",onClick:c,children:["Course plan",P.jsx("i",{className:"bi bi-cart4"})]})]}),P.jsx(k1,{term:r,selected:s,toggleSelected:u,courses:t.courses}),P.jsx(x1,{open:l,close:d,children:P.jsx(O1,{selected:s,courses:t.courses})})]}):P.jsx("h1",{children:"No courses data found"})},F1=new ww,U1=()=>P.jsx(Sw,{client:F1,children:P.jsx(b1,{})}),z1=_a.createRoot(document.getElementById("root"));z1.render(P.jsx(qv.StrictMode,{children:P.jsx(U1,{})}));
