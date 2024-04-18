(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Lc(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const de={},gr=[],ut=()=>{},a_=()=>!1,yo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fc=t=>t.startsWith("onUpdate:"),ze=Object.assign,Uc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},c_=Object.prototype.hasOwnProperty,te=(t,e)=>c_.call(t,e),B=Array.isArray,mr=t=>vo(t)==="[object Map]",Od=t=>vo(t)==="[object Set]",z=t=>typeof t=="function",be=t=>typeof t=="string",Zn=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",xd=t=>(Ee(t)||z(t))&&z(t.then)&&z(t.catch),Md=Object.prototype.toString,vo=t=>Md.call(t),l_=t=>vo(t).slice(8,-1),Ld=t=>vo(t)==="[object Object]",Bc=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cs=Lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Eo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},u_=/-(\w)/g,Rr=Eo(t=>t.replace(u_,(e,n)=>n?n.toUpperCase():"")),h_=/\B([A-Z])/g,Lr=Eo(t=>t.replace(h_,"-$1").toLowerCase()),Fd=Eo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ha=Eo(t=>t?`on${Fd(t)}`:""),gn=(t,e)=>!Object.is(t,e),Di=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ud=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ja=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Au;const Bd=()=>Au||(Au=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jc(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=be(r)?g_(r):jc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(be(t)||Ee(t))return t}const d_=/;(?![^(]*\))/g,f_=/:([^]+)/,p_=/\/\*[^]*?\*\//g;function g_(t){const e={};return t.replace(p_,"").split(d_).forEach(n=>{if(n){const r=n.split(f_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $c(t){let e="";if(be(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=$c(t[n]);r&&(e+=r+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const m_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",__=Lc(m_);function jd(t){return!!t||t===""}const Es=t=>be(t)?t:t==null?"":B(t)||Ee(t)&&(t.toString===Md||!z(t.toString))?JSON.stringify(t,$d,2):String(t),$d=(t,e)=>e&&e.__v_isRef?$d(t,e.value):mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[da(r,i)+" =>"]=s,n),{})}:Od(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>da(n))}:Zn(e)?da(e):Ee(e)&&!B(e)&&!Ld(e)?String(e):e,da=(t,e="")=>{var n;return Zn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let st;class qd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=st,!e&&st&&(this.index=(st.scopes||(st.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=st;try{return st=this,e()}finally{st=n}}}on(){st=this}off(){st=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Hd(t){return new qd(t)}function y_(t,e=st){e&&e.active&&e.effects.push(t)}function Wd(){return st}function v_(t){st&&st.cleanups.push(t)}let Fn;class qc{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,y_(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,vn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(E_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),En()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=cn,n=Fn;try{return cn=!0,Fn=this,this._runnings++,Ru(this),this.fn()}finally{Su(this),this._runnings--,Fn=n,cn=e}}stop(){var e;this.active&&(Ru(this),Su(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function E_(t){return t.value}function Ru(t){t._trackId++,t._depsLength=0}function Su(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)zd(t.deps[e],t);t.deps.length=t._depsLength}}function zd(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let cn=!0,$a=0;const Kd=[];function vn(){Kd.push(cn),cn=!1}function En(){const t=Kd.pop();cn=t===void 0?!0:t}function Hc(){$a++}function Wc(){for($a--;!$a&&qa.length;)qa.shift()()}function Gd(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&zd(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const qa=[];function Qd(t,e,n){Hc();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&qa.push(r.scheduler)))}Wc()}const Jd=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Wi=new WeakMap,Un=Symbol(""),Ha=Symbol("");function tt(t,e,n){if(cn&&Fn){let r=Wi.get(t);r||Wi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Jd(()=>r.delete(n))),Gd(Fn,s)}}function jt(t,e,n,r,s,i){const o=Wi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Zn(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?Bc(n)&&a.push(o.get("length")):(a.push(o.get(Un)),mr(t)&&a.push(o.get(Ha)));break;case"delete":B(t)||(a.push(o.get(Un)),mr(t)&&a.push(o.get(Ha)));break;case"set":mr(t)&&a.push(o.get(Un));break}Hc();for(const c of a)c&&Qd(c,4);Wc()}function I_(t,e){var n;return(n=Wi.get(t))==null?void 0:n.get(e)}const T_=Lc("__proto__,__v_isRef,__isVue"),Yd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zn)),Pu=w_();function w_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=re(this);for(let i=0,o=this.length;i<o;i++)tt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){vn(),Hc();const r=re(this)[e].apply(this,n);return Wc(),En(),r}}),t}function A_(t){Zn(t)||(t=String(t));const e=re(this);return tt(e,"has",t),e.hasOwnProperty(t)}class Xd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?L_:nf:i?tf:ef).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=B(e);if(!s){if(o&&te(Pu,n))return Reflect.get(Pu,n,r);if(n==="hasOwnProperty")return A_}const a=Reflect.get(e,n,r);return(Zn(n)?Yd.has(n):T_(n))||(s||tt(e,"get",n),i)?a:Ce(a)?o&&Bc(n)?a:a.value:Ee(a)?s?rf(a):To(a):a}}class Zd extends Xd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Is(i);if(!zi(r)&&!Is(r)&&(i=re(i),r=re(r)),!B(e)&&Ce(i)&&!Ce(r))return c?!1:(i.value=r,!0)}const o=B(e)&&Bc(n)?Number(n)<e.length:te(e,n),a=Reflect.set(e,n,r,s);return e===re(s)&&(o?gn(r,i)&&jt(e,"set",n,r):jt(e,"add",n,r)),a}deleteProperty(e,n){const r=te(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&jt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Zn(n)||!Yd.has(n))&&tt(e,"has",n),r}ownKeys(e){return tt(e,"iterate",B(e)?"length":Un),Reflect.ownKeys(e)}}class R_ extends Xd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const S_=new Zd,P_=new R_,b_=new Zd(!0),zc=t=>t,Io=t=>Reflect.getPrototypeOf(t);function pi(t,e,n=!1,r=!1){t=t.__v_raw;const s=re(t),i=re(e);n||(gn(e,i)&&tt(s,"get",e),tt(s,"get",i));const{has:o}=Io(s),a=r?zc:n?Jc:Ts;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function gi(t,e=!1){const n=this.__v_raw,r=re(n),s=re(t);return e||(gn(t,s)&&tt(r,"has",t),tt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function mi(t,e=!1){return t=t.__v_raw,!e&&tt(re(t),"iterate",Un),Reflect.get(t,"size",t)}function bu(t){t=re(t);const e=re(this);return Io(e).has.call(e,t)||(e.add(t),jt(e,"add",t,t)),this}function Cu(t,e){e=re(e);const n=re(this),{has:r,get:s}=Io(n);let i=r.call(n,t);i||(t=re(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?gn(e,o)&&jt(n,"set",t,e):jt(n,"add",t,e),this}function Du(t){const e=re(this),{has:n,get:r}=Io(e);let s=n.call(e,t);s||(t=re(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&jt(e,"delete",t,void 0),i}function Vu(){const t=re(this),e=t.size!==0,n=t.clear();return e&&jt(t,"clear",void 0,void 0),n}function _i(t,e){return function(r,s){const i=this,o=i.__v_raw,a=re(o),c=e?zc:t?Jc:Ts;return!t&&tt(a,"iterate",Un),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function yi(t,e,n){return function(...r){const s=this.__v_raw,i=re(s),o=mr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?zc:e?Jc:Ts;return!e&&tt(i,"iterate",c?Ha:Un),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Jt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function C_(){const t={get(i){return pi(this,i)},get size(){return mi(this)},has:gi,add:bu,set:Cu,delete:Du,clear:Vu,forEach:_i(!1,!1)},e={get(i){return pi(this,i,!1,!0)},get size(){return mi(this)},has:gi,add:bu,set:Cu,delete:Du,clear:Vu,forEach:_i(!1,!0)},n={get(i){return pi(this,i,!0)},get size(){return mi(this,!0)},has(i){return gi.call(this,i,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:_i(!0,!1)},r={get(i){return pi(this,i,!0,!0)},get size(){return mi(this,!0)},has(i){return gi.call(this,i,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:_i(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=yi(i,!1,!1),n[i]=yi(i,!0,!1),e[i]=yi(i,!1,!0),r[i]=yi(i,!0,!0)}),[t,n,e,r]}const[D_,V_,k_,N_]=C_();function Kc(t,e){const n=e?t?N_:k_:t?V_:D_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(te(n,s)&&s in r?n:r,s,i)}const O_={get:Kc(!1,!1)},x_={get:Kc(!1,!0)},M_={get:Kc(!0,!1)},ef=new WeakMap,tf=new WeakMap,nf=new WeakMap,L_=new WeakMap;function F_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function U_(t){return t.__v_skip||!Object.isExtensible(t)?0:F_(l_(t))}function To(t){return Is(t)?t:Gc(t,!1,S_,O_,ef)}function B_(t){return Gc(t,!1,b_,x_,tf)}function rf(t){return Gc(t,!0,P_,M_,nf)}function Gc(t,e,n,r,s){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=U_(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Bn(t){return Is(t)?Bn(t.__v_raw):!!(t&&t.__v_isReactive)}function Is(t){return!!(t&&t.__v_isReadonly)}function zi(t){return!!(t&&t.__v_isShallow)}function sf(t){return t?!!t.__v_raw:!1}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Qc(t){return Object.isExtensible(t)&&Ud(t,"__v_skip",!0),t}const Ts=t=>Ee(t)?To(t):t,Jc=t=>Ee(t)?rf(t):t;class of{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new qc(()=>e(this._value),()=>Vi(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=re(this);return(!e._cacheable||e.effect.dirty)&&gn(e._value,e._value=e.effect.run())&&Vi(e,4),af(e),e.effect._dirtyLevel>=2&&Vi(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function j_(t,e,n=!1){let r,s;const i=z(t);return i?(r=t,s=ut):(r=t.get,s=t.set),new of(r,s,i||!s,n)}function af(t){var e;cn&&Fn&&(t=re(t),Gd(Fn,(e=t.dep)!=null?e:t.dep=Jd(()=>t.dep=void 0,t instanceof of?t:void 0)))}function Vi(t,e=4,n){t=re(t);const r=t.dep;r&&Qd(r,e)}function Ce(t){return!!(t&&t.__v_isRef===!0)}function at(t){return $_(t,!1)}function $_(t,e){return Ce(t)?t:new q_(t,e)}class q_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:Ts(e)}get value(){return af(this),this._value}set value(e){const n=this.__v_isShallow||zi(e)||Is(e);e=n?e:re(e),gn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ts(e),Vi(this,4))}}function ne(t){return Ce(t)?t.value:t}const H_={get:(t,e,n)=>ne(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ce(s)&&!Ce(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function cf(t){return Bn(t)?t:new Proxy(t,H_)}function W_(t){const e=B(t)?new Array(t.length):{};for(const n in t)e[n]=K_(t,n);return e}class z_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return I_(re(this._object),this._key)}}function K_(t,e,n){const r=t[e];return Ce(r)?r:new z_(t,e,n)}/**
* @vue/runtime-core v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ln(t,e,n,r){try{return r?t(...r):t()}catch(s){wo(s,e,n)}}function gt(t,e,n,r){if(z(t)){const s=ln(t,e,n,r);return s&&xd(s)&&s.catch(i=>{wo(i,e,n)}),s}if(B(t)){const s=[];for(let i=0;i<t.length;i++)s.push(gt(t[i],e,n,r));return s}}function wo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){vn(),ln(c,null,10,[t,o,a]),En();return}}G_(t,n,s,r)}function G_(t,e,n,r=!0){console.error(t)}let ws=!1,Wa=!1;const $e=[];let At=0;const _r=[];let Zt=null,Vn=0;const lf=Promise.resolve();let Yc=null;function uf(t){const e=Yc||lf;return t?e.then(this?t.bind(this):t):e}function Q_(t){let e=At+1,n=$e.length;for(;e<n;){const r=e+n>>>1,s=$e[r],i=As(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Xc(t){(!$e.length||!$e.includes(t,ws&&t.allowRecurse?At+1:At))&&(t.id==null?$e.push(t):$e.splice(Q_(t.id),0,t),hf())}function hf(){!ws&&!Wa&&(Wa=!0,Yc=lf.then(ff))}function J_(t){const e=$e.indexOf(t);e>At&&$e.splice(e,1)}function Y_(t){B(t)?_r.push(...t):(!Zt||!Zt.includes(t,t.allowRecurse?Vn+1:Vn))&&_r.push(t),hf()}function ku(t,e,n=ws?At+1:0){for(;n<$e.length;n++){const r=$e[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;$e.splice(n,1),n--,r()}}}function df(t){if(_r.length){const e=[...new Set(_r)].sort((n,r)=>As(n)-As(r));if(_r.length=0,Zt){Zt.push(...e);return}for(Zt=e,Vn=0;Vn<Zt.length;Vn++)Zt[Vn]();Zt=null,Vn=0}}const As=t=>t.id==null?1/0:t.id,X_=(t,e)=>{const n=As(t)-As(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ff(t){Wa=!1,ws=!0,$e.sort(X_);try{for(At=0;At<$e.length;At++){const e=$e[At];e&&e.active!==!1&&ln(e,null,14)}}finally{At=0,$e.length=0,df(),ws=!1,Yc=null,($e.length||_r.length)&&ff()}}function Z_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||de;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||de;f&&(s=n.map(g=>be(g)?g.trim():g)),h&&(s=n.map(ja))}let a,c=r[a=ha(e)]||r[a=ha(Rr(e))];!c&&i&&(c=r[a=ha(Lr(e))]),c&&gt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gt(l,t,6,s)}}function pf(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!z(t)){const c=l=>{const u=pf(l,e,!0);u&&(a=!0,ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ee(t)&&r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):ze(o,i),Ee(t)&&r.set(t,o),o)}function Ao(t,e){return!t||!yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,Lr(e))||te(t,e))}let et=null,gf=null;function Ki(t){const e=et;return et=t,gf=t&&t.type.__scopeId||null,e}function ey(t,e=et,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&$u(-1);const i=Ki(e);let o;try{o=t(...s)}finally{Ki(i),r._d&&$u(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function fa(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:P,inheritAttrs:S}=t;let T,N;const Z=Ki(t);try{if(n.shapeFlag&4){const ee=s||r,se=ee;T=wt(u.call(se,ee,h,i,g,f,P)),N=c}else{const ee=e;T=wt(ee.length>1?ee(i,{attrs:c,slots:a,emit:l}):ee(i,null)),N=e.props?c:ty(c)}}catch(ee){hs.length=0,wo(ee,t,1),T=ge(qn)}let F=T;if(N&&S!==!1){const ee=Object.keys(N),{shapeFlag:se}=F;ee.length&&se&7&&(o&&ee.some(Fc)&&(N=ny(N,o)),F=Sr(F,N))}return n.dirs&&(F=Sr(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),T=F,Ki(Z),T}const ty=t=>{let e;for(const n in t)(n==="class"||n==="style"||yo(n))&&((e||(e={}))[n]=t[n]);return e},ny=(t,e)=>{const n={};for(const r in t)(!Fc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ry(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Nu(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Ao(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Nu(r,o,l):!0:!!o;return!1}function Nu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ao(n,i))return!0}return!1}function sy({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const iy=Symbol.for("v-ndc"),oy=t=>t.__isSuspense;function ay(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Y_(t)}const cy=Symbol.for("v-scx"),ly=()=>us(cy),vi={};function ki(t,e,n){return mf(t,e,n)}function mf(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=de){if(e&&i){const H=e;e=(..._e)=>{H(..._e),se()}}const c=qe,l=H=>r===!0?H:Nn(H,r===!1?1:void 0);let u,h=!1,f=!1;if(Ce(t)?(u=()=>t.value,h=zi(t)):Bn(t)?(u=()=>l(t),h=!0):B(t)?(f=!0,h=t.some(H=>Bn(H)||zi(H)),u=()=>t.map(H=>{if(Ce(H))return H.value;if(Bn(H))return l(H);if(z(H))return ln(H,c,2)})):z(t)?e?u=()=>ln(t,c,2):u=()=>(g&&g(),gt(t,c,3,[P])):u=ut,e&&r){const H=u;u=()=>Nn(H())}let g,P=H=>{g=F.onStop=()=>{ln(H,c,4),g=F.onStop=void 0}},S;if(Po)if(P=ut,e?n&&gt(e,c,3,[u(),f?[]:void 0,P]):u(),s==="sync"){const H=ly();S=H.__watcherHandles||(H.__watcherHandles=[])}else return ut;let T=f?new Array(t.length).fill(vi):vi;const N=()=>{if(!(!F.active||!F.dirty))if(e){const H=F.run();(r||h||(f?H.some((_e,K)=>gn(_e,T[K])):gn(H,T)))&&(g&&g(),gt(e,c,3,[H,T===vi?void 0:f&&T[0]===vi?[]:T,P]),T=H)}else F.run()};N.allowRecurse=!!e;let Z;s==="sync"?Z=N:s==="post"?Z=()=>Xe(N,c&&c.suspense):(N.pre=!0,c&&(N.id=c.uid),Z=()=>Xc(N));const F=new qc(u,ut,Z),ee=Wd(),se=()=>{F.stop(),ee&&Uc(ee.effects,F)};return e?n?N():T=F.run():s==="post"?Xe(F.run.bind(F),c&&c.suspense):F.run(),S&&S.push(se),se}function uy(t,e,n){const r=this.proxy,s=be(t)?t.includes(".")?_f(r,t):()=>r[t]:t.bind(r,r);let i;z(e)?i=e:(i=e.handler,n=e);const o=Hs(this),a=mf(s,i.bind(r),n);return o(),a}function _f(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Nn(t,e,n=0,r){if(!Ee(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Ce(t))Nn(t.value,e,n,r);else if(B(t))for(let s=0;s<t.length;s++)Nn(t[s],e,n,r);else if(Od(t)||mr(t))t.forEach(s=>{Nn(s,e,n,r)});else if(Ld(t))for(const s in t)Nn(t[s],e,n,r);return t}function $n(t,e){if(et===null)return t;const n=bo(et)||et.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=de]=e[s];i&&(z(i)&&(i={mounted:i,updated:i}),i.deep&&Nn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function bn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(vn(),gt(c,n,8,[t.el,a,t,e]),En())}}const Ni=t=>!!t.type.__asyncLoader,yf=t=>t.type.__isKeepAlive;function hy(t,e){vf(t,"a",e)}function dy(t,e){vf(t,"da",e)}function vf(t,e,n=qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ro(e,r,n),n){let s=n.parent;for(;s&&s.parent;)yf(s.parent.vnode)&&fy(r,e,n,s),s=s.parent}}function fy(t,e,n,r){const s=Ro(e,t,r,!0);Ef(()=>{Uc(r[e],s)},n)}function Ro(t,e,n=qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;vn();const a=Hs(n),c=gt(e,n,t,o);return a(),En(),c});return r?s.unshift(i):s.push(i),i}}const Kt=t=>(e,n=qe)=>(!Po||t==="sp")&&Ro(t,(...r)=>e(...r),n),py=Kt("bm"),gy=Kt("m"),my=Kt("bu"),_y=Kt("u"),yy=Kt("bum"),Ef=Kt("um"),vy=Kt("sp"),Ey=Kt("rtg"),Iy=Kt("rtc");function Ty(t,e=qe){Ro("ec",t,e)}function wy(t,e,n,r){let s;const i=n&&n[r];if(B(t)||be(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ee(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const za=t=>t?xf(t)?bo(t)||t.proxy:za(t.parent):null,ls=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>za(t.parent),$root:t=>za(t.root),$emit:t=>t.emit,$options:t=>Zc(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Xc(t.update)}),$nextTick:t=>t.n||(t.n=uf.bind(t.proxy)),$watch:t=>uy.bind(t)}),pa=(t,e)=>t!==de&&!t.__isScriptSetup&&te(t,e),Ay={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(pa(r,e))return o[e]=1,r[e];if(s!==de&&te(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&te(l,e))return o[e]=3,i[e];if(n!==de&&te(n,e))return o[e]=4,n[e];Ka&&(o[e]=0)}}const u=ls[e];let h,f;if(u)return e==="$attrs"&&tt(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==de&&te(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,te(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return pa(s,e)?(s[e]=n,!0):r!==de&&te(r,e)?(r[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==de&&te(t,o)||pa(e,o)||(a=i[0])&&te(a,o)||te(r,o)||te(ls,o)||te(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ou(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ka=!0;function Ry(t){const e=Zc(t),n=t.proxy,r=t.ctx;Ka=!1,e.beforeCreate&&xu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:P,activated:S,deactivated:T,beforeDestroy:N,beforeUnmount:Z,destroyed:F,unmounted:ee,render:se,renderTracked:H,renderTriggered:_e,errorCaptured:K,serverPrefetch:G,expose:ye,inheritAttrs:nt,components:vt,directives:sr,filters:Gr}=e;if(l&&Sy(l,r,null),o)for(const ve in o){const ue=o[ve];z(ue)&&(r[ve]=ue.bind(n))}if(s){const ve=s.call(n,n);Ee(ve)&&(t.data=To(ve))}if(Ka=!0,i)for(const ve in i){const ue=i[ve],Sn=z(ue)?ue.bind(n,n):z(ue.get)?ue.get.bind(n,n):ut,di=!z(ue)&&z(ue.set)?ue.set.bind(n):ut,Pn=nl({get:Sn,set:di});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>Pn.value,set:Et=>Pn.value=Et})}if(a)for(const ve in a)If(a[ve],r,n,ve);if(c){const ve=z(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(ue=>{ky(ue,ve[ue])})}u&&xu(u,t,"c");function ae(ve,ue){B(ue)?ue.forEach(Sn=>ve(Sn.bind(n))):ue&&ve(ue.bind(n))}if(ae(py,h),ae(gy,f),ae(my,g),ae(_y,P),ae(hy,S),ae(dy,T),ae(Ty,K),ae(Iy,H),ae(Ey,_e),ae(yy,Z),ae(Ef,ee),ae(vy,G),B(ye))if(ye.length){const ve=t.exposed||(t.exposed={});ye.forEach(ue=>{Object.defineProperty(ve,ue,{get:()=>n[ue],set:Sn=>n[ue]=Sn})})}else t.exposed||(t.exposed={});se&&t.render===ut&&(t.render=se),nt!=null&&(t.inheritAttrs=nt),vt&&(t.components=vt),sr&&(t.directives=sr)}function Sy(t,e,n=ut){B(t)&&(t=Ga(t));for(const r in t){const s=t[r];let i;Ee(s)?"default"in s?i=us(s.from||r,s.default,!0):i=us(s.from||r):i=us(s),Ce(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function xu(t,e,n){gt(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function If(t,e,n,r){const s=r.includes(".")?_f(n,r):()=>n[r];if(be(t)){const i=e[t];z(i)&&ki(s,i)}else if(z(t))ki(s,t.bind(n));else if(Ee(t))if(B(t))t.forEach(i=>If(i,e,n,r));else{const i=z(t.handler)?t.handler.bind(n):e[t.handler];z(i)&&ki(s,i,t)}}function Zc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Gi(c,l,o,!0)),Gi(c,e,o)),Ee(e)&&i.set(e,c),c}function Gi(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Gi(t,i,n,!0),s&&s.forEach(o=>Gi(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Py[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Py={data:Mu,props:Lu,emits:Lu,methods:es,computed:es,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:es,directives:es,watch:Cy,provide:Mu,inject:by};function Mu(t,e){return e?t?function(){return ze(z(t)?t.call(this,this):t,z(e)?e.call(this,this):e)}:e:t}function by(t,e){return es(Ga(t),Ga(e))}function Ga(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Qe(t,e){return t?[...new Set([].concat(t,e))]:e}function es(t,e){return t?ze(Object.create(null),t,e):e}function Lu(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:ze(Object.create(null),Ou(t),Ou(e??{})):e}function Cy(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const r in e)n[r]=Qe(t[r],e[r]);return n}function Tf(){return{app:null,config:{isNativeTag:a_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dy=0;function Vy(t,e){return function(r,s=null){z(r)||(r=ze({},r)),s!=null&&!Ee(s)&&(s=null);const i=Tf(),o=new WeakSet;let a=!1;const c=i.app={_uid:Dy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:rv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&z(l.install)?(o.add(l),l.install(c,...u)):z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=ge(r,s);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,bo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=yr;yr=c;try{return l()}finally{yr=u}}};return c}}let yr=null;function ky(t,e){if(qe){let n=qe.provides;const r=qe.parent&&qe.parent.provides;r===n&&(n=qe.provides=Object.create(r)),n[t]=e}}function us(t,e,n=!1){const r=qe||et;if(r||yr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:yr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&z(e)?e.call(r&&r.proxy):e}}function Ny(){return!!(qe||et||yr)}const wf=Object.create(null),Qa=()=>Object.create(wf),Af=t=>Object.getPrototypeOf(t)===wf;function Oy(t,e,n,r=!1){const s={},i=Qa();t.propsDefaults=Object.create(null),Rf(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:B_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function xy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=re(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ao(t.emitsOptions,f))continue;const g=e[f];if(c)if(te(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const P=Rr(f);s[P]=Ja(c,a,P,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Rf(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!te(e,h)&&((u=Lr(h))===h||!te(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ja(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!te(e,h))&&(delete i[h],l=!0)}l&&jt(t.attrs,"set","")}function Rf(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(cs(c))continue;const l=e[c];let u;s&&te(s,u=Rr(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ao(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=re(n),l=a||de;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ja(s,c,h,l[h],t,!te(l,h))}}return o}function Ja(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&z(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Hs(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Lr(n))&&(r=!0))}return r}function Sf(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!z(t)){const u=h=>{c=!0;const[f,g]=Sf(h,e,!0);ze(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ee(t)&&r.set(t,gr),gr;if(B(i))for(let u=0;u<i.length;u++){const h=Rr(i[u]);Fu(h)&&(o[h]=de)}else if(i)for(const u in i){const h=Rr(u);if(Fu(h)){const f=i[u],g=o[h]=B(f)||z(f)?{type:f}:ze({},f);if(g){const P=ju(Boolean,g.type),S=ju(String,g.type);g[0]=P>-1,g[1]=S<0||P<S,(P>-1||te(g,"default"))&&a.push(h)}}}const l=[o,a];return Ee(t)&&r.set(t,l),l}function Fu(t){return t[0]!=="$"&&!cs(t)}function Uu(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Bu(t,e){return Uu(t)===Uu(e)}function ju(t,e){return B(e)?e.findIndex(n=>Bu(n,t)):z(e)&&Bu(e,t)?0:-1}const Pf=t=>t[0]==="_"||t==="$stable",el=t=>B(t)?t.map(wt):[wt(t)],My=(t,e,n)=>{if(e._n)return e;const r=ey((...s)=>el(e(...s)),n);return r._c=!1,r},bf=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Pf(s))continue;const i=t[s];if(z(i))e[s]=My(s,i,r);else if(i!=null){const o=el(i);e[s]=()=>o}}},Cf=(t,e)=>{const n=el(e);t.slots.default=()=>n},Ly=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),Ud(t.slots,"_",n)):bf(e,t.slots=Qa())}else t.slots=Qa(),e&&Cf(t,e)},Fy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=de;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ze(s,e),!n&&a===1&&delete s._):(i=!e.$stable,bf(e,s)),o=e}else e&&(Cf(t,e),o={default:1});if(i)for(const a in s)!Pf(a)&&o[a]==null&&delete s[a]};function Ya(t,e,n,r,s=!1){if(B(t)){t.forEach((f,g)=>Ya(f,e&&(B(e)?e[g]:e),n,r,s));return}if(Ni(r)&&!s)return;const i=r.shapeFlag&4?bo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===de?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(be(l)?(u[l]=null,te(h,l)&&(h[l]=null)):Ce(l)&&(l.value=null)),z(c))ln(c,a,12,[o,u]);else{const f=be(c),g=Ce(c);if(f||g){const P=()=>{if(t.f){const S=f?te(h,c)?h[c]:u[c]:c.value;s?B(S)&&Uc(S,i):B(S)?S.includes(i)||S.push(i):f?(u[c]=[i],te(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,te(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(P.id=-1,Xe(P,n)):P()}}}const Xe=ay;function Uy(t){return By(t)}function By(t,e){const n=Bd();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=ut,insertStaticContent:P}=t,S=(d,p,m,v=null,E=null,A=null,D=void 0,w=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!Jr(d,p)&&(v=fi(d),Et(d,E,A,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:I,ref:k,shapeFlag:M}=p;switch(I){case So:T(d,p,m,v);break;case qn:N(d,p,m,v);break;case ma:d==null&&Z(p,m,v,D);break;case Ze:vt(d,p,m,v,E,A,D,w,R);break;default:M&1?se(d,p,m,v,E,A,D,w,R):M&6?sr(d,p,m,v,E,A,D,w,R):(M&64||M&128)&&I.process(d,p,m,v,E,A,D,w,R,ir)}k!=null&&E&&Ya(k,d&&d.ref,A,p||d,!p)},T=(d,p,m,v)=>{if(d==null)r(p.el=a(p.children),m,v);else{const E=p.el=d.el;p.children!==d.children&&l(E,p.children)}},N=(d,p,m,v)=>{d==null?r(p.el=c(p.children||""),m,v):p.el=d.el},Z=(d,p,m,v)=>{[d.el,d.anchor]=P(d.children,p,m,v,d.el,d.anchor)},F=({el:d,anchor:p},m,v)=>{let E;for(;d&&d!==p;)E=f(d),r(d,m,v),d=E;r(p,m,v)},ee=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),s(d),d=m;s(p)},se=(d,p,m,v,E,A,D,w,R)=>{p.type==="svg"?D="svg":p.type==="math"&&(D="mathml"),d==null?H(p,m,v,E,A,D,w,R):G(d,p,E,A,D,w,R)},H=(d,p,m,v,E,A,D,w)=>{let R,I;const{props:k,shapeFlag:M,transition:O,dirs:$}=d;if(R=d.el=o(d.type,A,k&&k.is,k),M&8?u(R,d.children):M&16&&K(d.children,R,null,v,E,ga(d,A),D,w),$&&bn(d,null,v,"created"),_e(R,d,d.scopeId,D,v),k){for(const ce in k)ce!=="value"&&!cs(ce)&&i(R,ce,null,k[ce],A,d.children,v,E,Mt);"value"in k&&i(R,"value",null,k.value,A),(I=k.onVnodeBeforeMount)&&Tt(I,v,d)}$&&bn(d,null,v,"beforeMount");const Q=jy(E,O);Q&&O.beforeEnter(R),r(R,p,m),((I=k&&k.onVnodeMounted)||Q||$)&&Xe(()=>{I&&Tt(I,v,d),Q&&O.enter(R),$&&bn(d,null,v,"mounted")},E)},_e=(d,p,m,v,E)=>{if(m&&g(d,m),v)for(let A=0;A<v.length;A++)g(d,v[A]);if(E){let A=E.subTree;if(p===A){const D=E.vnode;_e(d,D,D.scopeId,D.slotScopeIds,E.parent)}}},K=(d,p,m,v,E,A,D,w,R=0)=>{for(let I=R;I<d.length;I++){const k=d[I]=w?en(d[I]):wt(d[I]);S(null,k,p,m,v,E,A,D,w)}},G=(d,p,m,v,E,A,D)=>{const w=p.el=d.el;let{patchFlag:R,dynamicChildren:I,dirs:k}=p;R|=d.patchFlag&16;const M=d.props||de,O=p.props||de;let $;if(m&&Cn(m,!1),($=O.onVnodeBeforeUpdate)&&Tt($,m,p,d),k&&bn(p,d,m,"beforeUpdate"),m&&Cn(m,!0),I?ye(d.dynamicChildren,I,w,m,v,ga(p,E),A):D||ue(d,p,w,null,m,v,ga(p,E),A,!1),R>0){if(R&16)nt(w,p,M,O,m,v,E);else if(R&2&&M.class!==O.class&&i(w,"class",null,O.class,E),R&4&&i(w,"style",M.style,O.style,E),R&8){const Q=p.dynamicProps;for(let ce=0;ce<Q.length;ce++){const me=Q[ce],De=M[me],dt=O[me];(dt!==De||me==="value")&&i(w,me,De,dt,E,d.children,m,v,Mt)}}R&1&&d.children!==p.children&&u(w,p.children)}else!D&&I==null&&nt(w,p,M,O,m,v,E);(($=O.onVnodeUpdated)||k)&&Xe(()=>{$&&Tt($,m,p,d),k&&bn(p,d,m,"updated")},v)},ye=(d,p,m,v,E,A,D)=>{for(let w=0;w<p.length;w++){const R=d[w],I=p[w],k=R.el&&(R.type===Ze||!Jr(R,I)||R.shapeFlag&70)?h(R.el):m;S(R,I,k,null,v,E,A,D,!0)}},nt=(d,p,m,v,E,A,D)=>{if(m!==v){if(m!==de)for(const w in m)!cs(w)&&!(w in v)&&i(d,w,m[w],null,D,p.children,E,A,Mt);for(const w in v){if(cs(w))continue;const R=v[w],I=m[w];R!==I&&w!=="value"&&i(d,w,I,R,D,p.children,E,A,Mt)}"value"in v&&i(d,"value",m.value,v.value,D)}},vt=(d,p,m,v,E,A,D,w,R)=>{const I=p.el=d?d.el:a(""),k=p.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:O,slotScopeIds:$}=p;$&&(w=w?w.concat($):$),d==null?(r(I,m,v),r(k,m,v),K(p.children||[],m,k,E,A,D,w,R)):M>0&&M&64&&O&&d.dynamicChildren?(ye(d.dynamicChildren,O,m,E,A,D,w),(p.key!=null||E&&p===E.subTree)&&Df(d,p,!0)):ue(d,p,m,k,E,A,D,w,R)},sr=(d,p,m,v,E,A,D,w,R)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?E.ctx.activate(p,m,v,D,R):Gr(p,m,v,E,A,D,R):Qt(d,p,R)},Gr=(d,p,m,v,E,A,D)=>{const w=d.component=Yy(d,v,E);if(yf(d)&&(w.ctx.renderer=ir),Xy(w),w.asyncDep){if(E&&E.registerDep(w,ae),!d.el){const R=w.subTree=ge(qn);N(null,R,p,m)}}else ae(w,d,p,m,E,A,D)},Qt=(d,p,m)=>{const v=p.component=d.component;if(ry(d,p,m))if(v.asyncDep&&!v.asyncResolved){ve(v,p,m);return}else v.next=p,J_(v.update),v.effect.dirty=!0,v.update();else p.el=d.el,v.vnode=p},ae=(d,p,m,v,E,A,D)=>{const w=()=>{if(d.isMounted){let{next:k,bu:M,u:O,parent:$,vnode:Q}=d;{const or=Vf(d);if(or){k&&(k.el=Q.el,ve(d,k,D)),or.asyncDep.then(()=>{d.isUnmounted||w()});return}}let ce=k,me;Cn(d,!1),k?(k.el=Q.el,ve(d,k,D)):k=Q,M&&Di(M),(me=k.props&&k.props.onVnodeBeforeUpdate)&&Tt(me,$,k,Q),Cn(d,!0);const De=fa(d),dt=d.subTree;d.subTree=De,S(dt,De,h(dt.el),fi(dt),d,E,A),k.el=De.el,ce===null&&sy(d,De.el),O&&Xe(O,E),(me=k.props&&k.props.onVnodeUpdated)&&Xe(()=>Tt(me,$,k,Q),E)}else{let k;const{el:M,props:O}=p,{bm:$,m:Q,parent:ce}=d,me=Ni(p);if(Cn(d,!1),$&&Di($),!me&&(k=O&&O.onVnodeBeforeMount)&&Tt(k,ce,p),Cn(d,!0),M&&ua){const De=()=>{d.subTree=fa(d),ua(M,d.subTree,d,E,null)};me?p.type.__asyncLoader().then(()=>!d.isUnmounted&&De()):De()}else{const De=d.subTree=fa(d);S(null,De,m,v,d,E,A),p.el=De.el}if(Q&&Xe(Q,E),!me&&(k=O&&O.onVnodeMounted)){const De=p;Xe(()=>Tt(k,ce,De),E)}(p.shapeFlag&256||ce&&Ni(ce.vnode)&&ce.vnode.shapeFlag&256)&&d.a&&Xe(d.a,E),d.isMounted=!0,p=m=v=null}},R=d.effect=new qc(w,ut,()=>Xc(I),d.scope),I=d.update=()=>{R.dirty&&R.run()};I.id=d.uid,Cn(d,!0),I()},ve=(d,p,m)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,xy(d,p.props,v,m),Fy(d,p.children,m),vn(),ku(d),En()},ue=(d,p,m,v,E,A,D,w,R=!1)=>{const I=d&&d.children,k=d?d.shapeFlag:0,M=p.children,{patchFlag:O,shapeFlag:$}=p;if(O>0){if(O&128){di(I,M,m,v,E,A,D,w,R);return}else if(O&256){Sn(I,M,m,v,E,A,D,w,R);return}}$&8?(k&16&&Mt(I,E,A),M!==I&&u(m,M)):k&16?$&16?di(I,M,m,v,E,A,D,w,R):Mt(I,E,A,!0):(k&8&&u(m,""),$&16&&K(M,m,v,E,A,D,w,R))},Sn=(d,p,m,v,E,A,D,w,R)=>{d=d||gr,p=p||gr;const I=d.length,k=p.length,M=Math.min(I,k);let O;for(O=0;O<M;O++){const $=p[O]=R?en(p[O]):wt(p[O]);S(d[O],$,m,null,E,A,D,w,R)}I>k?Mt(d,E,A,!0,!1,M):K(p,m,v,E,A,D,w,R,M)},di=(d,p,m,v,E,A,D,w,R)=>{let I=0;const k=p.length;let M=d.length-1,O=k-1;for(;I<=M&&I<=O;){const $=d[I],Q=p[I]=R?en(p[I]):wt(p[I]);if(Jr($,Q))S($,Q,m,null,E,A,D,w,R);else break;I++}for(;I<=M&&I<=O;){const $=d[M],Q=p[O]=R?en(p[O]):wt(p[O]);if(Jr($,Q))S($,Q,m,null,E,A,D,w,R);else break;M--,O--}if(I>M){if(I<=O){const $=O+1,Q=$<k?p[$].el:v;for(;I<=O;)S(null,p[I]=R?en(p[I]):wt(p[I]),m,Q,E,A,D,w,R),I++}}else if(I>O)for(;I<=M;)Et(d[I],E,A,!0),I++;else{const $=I,Q=I,ce=new Map;for(I=Q;I<=O;I++){const rt=p[I]=R?en(p[I]):wt(p[I]);rt.key!=null&&ce.set(rt.key,I)}let me,De=0;const dt=O-Q+1;let or=!1,Iu=0;const Qr=new Array(dt);for(I=0;I<dt;I++)Qr[I]=0;for(I=$;I<=M;I++){const rt=d[I];if(De>=dt){Et(rt,E,A,!0);continue}let It;if(rt.key!=null)It=ce.get(rt.key);else for(me=Q;me<=O;me++)if(Qr[me-Q]===0&&Jr(rt,p[me])){It=me;break}It===void 0?Et(rt,E,A,!0):(Qr[It-Q]=I+1,It>=Iu?Iu=It:or=!0,S(rt,p[It],m,null,E,A,D,w,R),De++)}const Tu=or?$y(Qr):gr;for(me=Tu.length-1,I=dt-1;I>=0;I--){const rt=Q+I,It=p[rt],wu=rt+1<k?p[rt+1].el:v;Qr[I]===0?S(null,It,m,wu,E,A,D,w,R):or&&(me<0||I!==Tu[me]?Pn(It,m,wu,2):me--)}}},Pn=(d,p,m,v,E=null)=>{const{el:A,type:D,transition:w,children:R,shapeFlag:I}=d;if(I&6){Pn(d.component.subTree,p,m,v);return}if(I&128){d.suspense.move(p,m,v);return}if(I&64){D.move(d,p,m,ir);return}if(D===Ze){r(A,p,m);for(let M=0;M<R.length;M++)Pn(R[M],p,m,v);r(d.anchor,p,m);return}if(D===ma){F(d,p,m);return}if(v!==2&&I&1&&w)if(v===0)w.beforeEnter(A),r(A,p,m),Xe(()=>w.enter(A),E);else{const{leave:M,delayLeave:O,afterLeave:$}=w,Q=()=>r(A,p,m),ce=()=>{M(A,()=>{Q(),$&&$()})};O?O(A,Q,ce):ce()}else r(A,p,m)},Et=(d,p,m,v=!1,E=!1)=>{const{type:A,props:D,ref:w,children:R,dynamicChildren:I,shapeFlag:k,patchFlag:M,dirs:O}=d;if(w!=null&&Ya(w,null,m,d,!0),k&256){p.ctx.deactivate(d);return}const $=k&1&&O,Q=!Ni(d);let ce;if(Q&&(ce=D&&D.onVnodeBeforeUnmount)&&Tt(ce,p,d),k&6)o_(d.component,m,v);else{if(k&128){d.suspense.unmount(m,v);return}$&&bn(d,null,p,"beforeUnmount"),k&64?d.type.remove(d,p,m,E,ir,v):I&&(A!==Ze||M>0&&M&64)?Mt(I,p,m,!1,!0):(A===Ze&&M&384||!E&&k&16)&&Mt(R,p,m),v&&vu(d)}(Q&&(ce=D&&D.onVnodeUnmounted)||$)&&Xe(()=>{ce&&Tt(ce,p,d),$&&bn(d,null,p,"unmounted")},m)},vu=d=>{const{type:p,el:m,anchor:v,transition:E}=d;if(p===Ze){i_(m,v);return}if(p===ma){ee(d);return}const A=()=>{s(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:D,delayLeave:w}=E,R=()=>D(m,A);w?w(d.el,A,R):R()}else A()},i_=(d,p)=>{let m;for(;d!==p;)m=f(d),s(d),d=m;s(p)},o_=(d,p,m)=>{const{bum:v,scope:E,update:A,subTree:D,um:w}=d;v&&Di(v),E.stop(),A&&(A.active=!1,Et(D,d,p,m)),w&&Xe(w,p),Xe(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Mt=(d,p,m,v=!1,E=!1,A=0)=>{for(let D=A;D<d.length;D++)Et(d[D],p,m,v,E)},fi=d=>d.shapeFlag&6?fi(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el);let ca=!1;const Eu=(d,p,m)=>{d==null?p._vnode&&Et(p._vnode,null,null,!0):S(p._vnode||null,d,p,null,null,null,m),ca||(ca=!0,ku(),df(),ca=!1),p._vnode=d},ir={p:S,um:Et,m:Pn,r:vu,mt:Gr,mc:K,pc:ue,pbc:ye,n:fi,o:t};let la,ua;return e&&([la,ua]=e(ir)),{render:Eu,hydrate:la,createApp:Vy(Eu,la)}}function ga({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Cn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function jy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Df(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=en(s[i]),a.el=o.el),n||Df(o,a)),a.type===So&&(a.el=o.el)}}function $y(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Vf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vf(e)}const qy=t=>t.__isTeleport,Ze=Symbol.for("v-fgt"),So=Symbol.for("v-txt"),qn=Symbol.for("v-cmt"),ma=Symbol.for("v-stc"),hs=[];let ft=null;function Je(t=!1){hs.push(ft=t?null:[])}function Hy(){hs.pop(),ft=hs[hs.length-1]||null}let Rs=1;function $u(t){Rs+=t}function kf(t){return t.dynamicChildren=Rs>0?ft||gr:null,Hy(),Rs>0&&ft&&ft.push(t),t}function ht(t,e,n,r,s,i){return kf(le(t,e,n,r,s,i,!0))}function Xa(t,e,n,r,s){return kf(ge(t,e,n,r,s,!0))}function Wy(t){return t?t.__v_isVNode===!0:!1}function Jr(t,e){return t.type===e.type&&t.key===e.key}const Nf=({key:t})=>t??null,Oi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?be(t)||Ce(t)||z(t)?{i:et,r:t,k:e,f:!!n}:t:null);function le(t,e=null,n=null,r=0,s=null,i=t===Ze?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Nf(e),ref:e&&Oi(e),scopeId:gf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:et};return a?(tl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=be(n)?8:16),Rs>0&&!o&&ft&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ft.push(c),c}const ge=zy;function zy(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===iy)&&(t=qn),Wy(t)){const a=Sr(t,e,!0);return n&&tl(a,n),Rs>0&&!i&&ft&&(a.shapeFlag&6?ft[ft.indexOf(t)]=a:ft.push(a)),a.patchFlag|=-2,a}if(nv(t)&&(t=t.__vccOpts),e){e=Ky(e);let{class:a,style:c}=e;a&&!be(a)&&(e.class=$c(a)),Ee(c)&&(sf(c)&&!B(c)&&(c=ze({},c)),e.style=jc(c))}const o=be(t)?1:oy(t)?128:qy(t)?64:Ee(t)?4:z(t)?2:0;return le(t,e,n,r,s,o,i,!0)}function Ky(t){return t?sf(t)||Af(t)?ze({},t):t:null}function Sr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Gy(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Nf(a),ref:e&&e.ref?n&&s?B(s)?s.concat(Oi(e)):[s,Oi(e)]:Oi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ze?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sr(t.ssContent),ssFallback:t.ssFallback&&Sr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Of(t=" ",e=0){return ge(So,null,t,e)}function _a(t="",e=!1){return e?(Je(),Xa(qn,null,t)):ge(qn,null,t)}function wt(t){return t==null||typeof t=="boolean"?ge(qn):B(t)?ge(Ze,null,t.slice()):typeof t=="object"?en(t):ge(So,null,String(t))}function en(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Sr(t)}function tl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),tl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Af(e)?e._ctx=et:s===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else z(e)?(e={default:e,_ctx:et},n=32):(e=String(e),r&64?(n=16,e=[Of(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=$c([e.class,r.class]));else if(s==="style")e.style=jc([e.style,r.style]);else if(yo(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Tt(t,e,n,r=null){gt(t,e,7,[n,r])}const Qy=Tf();let Jy=0;function Yy(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Qy,i={uid:Jy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new qd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sf(r,s),emitsOptions:pf(r,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Z_.bind(null,i),t.ce&&t.ce(i),i}let qe=null,Qi,Za;{const t=Bd(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Qi=e("__VUE_INSTANCE_SETTERS__",n=>qe=n),Za=e("__VUE_SSR_SETTERS__",n=>Po=n)}const Hs=t=>{const e=qe;return Qi(t),t.scope.on(),()=>{t.scope.off(),Qi(e)}},qu=()=>{qe&&qe.scope.off(),Qi(null)};function xf(t){return t.vnode.shapeFlag&4}let Po=!1;function Xy(t,e=!1){e&&Za(e);const{props:n,children:r}=t.vnode,s=xf(t);Oy(t,n,s,e),Ly(t,r);const i=s?Zy(t,e):void 0;return e&&Za(!1),i}function Zy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ay);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?tv(t):null,i=Hs(t);vn();const o=ln(r,t,0,[t.props,s]);if(En(),i(),xd(o)){if(o.then(qu,qu),e)return o.then(a=>{Hu(t,a,e)}).catch(a=>{wo(a,t,0)});t.asyncDep=o}else Hu(t,o,e)}else Mf(t,e)}function Hu(t,e,n){z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=cf(e)),Mf(t,n)}let Wu;function Mf(t,e,n){const r=t.type;if(!t.render){if(!e&&Wu&&!r.render){const s=r.template||Zc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ze(ze({isCustomElement:i,delimiters:a},o),c);r.render=Wu(s,l)}}t.render=r.render||ut}{const s=Hs(t);vn();try{Ry(t)}finally{En(),s()}}}const ev={get(t,e){return tt(t,"get",""),t[e]}};function tv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ev),slots:t.slots,emit:t.emit,expose:e}}function bo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cf(Qc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ls)return ls[n](t)},has(e,n){return n in e||n in ls}}))}function nv(t){return z(t)&&"__vccOpts"in t}const nl=(t,e)=>j_(t,e,Po),rv="3.4.23";/**
* @vue/runtime-dom v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const sv="http://www.w3.org/2000/svg",iv="http://www.w3.org/1998/Math/MathML",tn=typeof document<"u"?document:null,zu=tn&&tn.createElement("template"),ov={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?tn.createElementNS(sv,t):e==="mathml"?tn.createElementNS(iv,t):tn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>tn.createTextNode(t),createComment:t=>tn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>tn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{zu.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=zu.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},av=Symbol("_vtc");function cv(t,e,n){const r=t[av];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ku=Symbol("_vod"),lv=Symbol("_vsh"),uv=Symbol(""),hv=/(^|;)\s*display\s*:/;function dv(t,e,n){const r=t.style,s=be(n);let i=!1;if(n&&!s){if(e)if(be(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&xi(r,a,"")}else for(const o in e)n[o]==null&&xi(r,o,"");for(const o in n)o==="display"&&(i=!0),xi(r,o,n[o])}else if(s){if(e!==n){const o=r[uv];o&&(n+=";"+o),r.cssText=n,i=hv.test(n)}}else e&&t.removeAttribute("style");Ku in t&&(t[Ku]=i?r.display:"",t[lv]&&(r.display="none"))}const Gu=/\s*!important$/;function xi(t,e,n){if(B(n))n.forEach(r=>xi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=fv(t,e);Gu.test(n)?t.setProperty(Lr(r),n.replace(Gu,""),"important"):t[r]=n}}const Qu=["Webkit","Moz","ms"],ya={};function fv(t,e){const n=ya[e];if(n)return n;let r=Rr(e);if(r!=="filter"&&r in t)return ya[e]=r;r=Fd(r);for(let s=0;s<Qu.length;s++){const i=Qu[s]+r;if(i in t)return ya[e]=i}return e}const Ju="http://www.w3.org/1999/xlink";function pv(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ju,e.slice(6,e.length)):t.setAttributeNS(Ju,e,n);else{const i=__(e);n==null||i&&!jd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function gv(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=jd(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function lr(t,e,n,r){t.addEventListener(e,n,r)}function mv(t,e,n,r){t.removeEventListener(e,n,r)}const Yu=Symbol("_vei");function _v(t,e,n,r,s=null){const i=t[Yu]||(t[Yu]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=yv(e);if(r){const l=i[e]=Iv(r,s);lr(t,a,l,c)}else o&&(mv(t,a,o,c),i[e]=void 0)}}const Xu=/(?:Once|Passive|Capture)$/;function yv(t){let e;if(Xu.test(t)){e={};let r;for(;r=t.match(Xu);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Lr(t.slice(2)),e]}let va=0;const vv=Promise.resolve(),Ev=()=>va||(vv.then(()=>va=0),va=Date.now());function Iv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;gt(Tv(r,n.value),e,5,[r])};return n.value=t,n.attached=Ev(),n}function Tv(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Zu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,wv=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?cv(t,r,l):e==="style"?dv(t,n,r):yo(e)?Fc(e)||_v(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Av(t,e,r,l))?gv(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),pv(t,e,r,l))};function Av(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Zu(e)&&z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Zu(e)&&be(n)?!1:e in t}const eh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Di(e,n):e};function Rv(t){t.target.composing=!0}function th(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ea=Symbol("_assign"),Hn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ea]=eh(s);const i=r||s.props&&s.props.type==="number";lr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ja(a)),t[Ea](a)}),n&&lr(t,"change",()=>{t.value=t.value.trim()}),e||(lr(t,"compositionstart",Rv),lr(t,"compositionend",th),lr(t,"change",th))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Ea]=eh(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?ja(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Sv=ze({patchProp:wv},ov);let nh;function Pv(){return nh||(nh=Uy(Sv))}const bv=(...t)=>{const e=Pv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Dv(r);if(!s)return;const i=e._component;!z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Cv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Cv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Dv(t){return be(t)?document.querySelector(t):t}var Vv=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Lf;const Co=t=>Lf=t,Ff=Symbol();function ec(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ds;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ds||(ds={}));function kv(){const t=Hd(!0),e=t.run(()=>at({}));let n=[],r=[];const s=Qc({install(i){Co(s),s._a=i,i.provide(Ff,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Vv?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Uf=()=>{};function rh(t,e,n,r=Uf){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Wd()&&v_(s),s}function ar(t,...e){t.slice().forEach(n=>{n(...e)})}const Nv=t=>t();function tc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ec(s)&&ec(r)&&t.hasOwnProperty(n)&&!Ce(r)&&!Bn(r)?t[n]=tc(s,r):t[n]=r}return t}const Ov=Symbol();function xv(t){return!ec(t)||!t.hasOwnProperty(Ov)}const{assign:Xt}=Object;function Mv(t){return!!(Ce(t)&&t.effect)}function Lv(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=W_(n.state.value[t]);return Xt(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Qc(nl(()=>{Co(n);const g=n._s.get(t);return o[f].call(g,g)})),h),{}))}return c=Bf(t,l,e,n,r,!0),c}function Bf(t,e,n={},r,s,i){let o;const a=Xt({actions:{}},n),c={deep:!0};let l,u,h=[],f=[],g;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),at({});let S;function T(K){let G;l=u=!1,typeof K=="function"?(K(r.state.value[t]),G={type:ds.patchFunction,storeId:t,events:g}):(tc(r.state.value[t],K),G={type:ds.patchObject,payload:K,storeId:t,events:g});const ye=S=Symbol();uf().then(()=>{S===ye&&(l=!0)}),u=!0,ar(h,G,r.state.value[t])}const N=i?function(){const{state:G}=n,ye=G?G():{};this.$patch(nt=>{Xt(nt,ye)})}:Uf;function Z(){o.stop(),h=[],f=[],r._s.delete(t)}function F(K,G){return function(){Co(r);const ye=Array.from(arguments),nt=[],vt=[];function sr(ae){nt.push(ae)}function Gr(ae){vt.push(ae)}ar(f,{args:ye,name:K,store:se,after:sr,onError:Gr});let Qt;try{Qt=G.apply(this&&this.$id===t?this:se,ye)}catch(ae){throw ar(vt,ae),ae}return Qt instanceof Promise?Qt.then(ae=>(ar(nt,ae),ae)).catch(ae=>(ar(vt,ae),Promise.reject(ae))):(ar(nt,Qt),Qt)}}const ee={_p:r,$id:t,$onAction:rh.bind(null,f),$patch:T,$reset:N,$subscribe(K,G={}){const ye=rh(h,K,G.detached,()=>nt()),nt=o.run(()=>ki(()=>r.state.value[t],vt=>{(G.flush==="sync"?u:l)&&K({storeId:t,type:ds.direct,events:g},vt)},Xt({},c,G)));return ye},$dispose:Z},se=To(ee);r._s.set(t,se);const _e=(r._a&&r._a.runWithContext||Nv)(()=>r._e.run(()=>(o=Hd()).run(e)));for(const K in _e){const G=_e[K];if(Ce(G)&&!Mv(G)||Bn(G))i||(P&&xv(G)&&(Ce(G)?G.value=P[K]:tc(G,P[K])),r.state.value[t][K]=G);else if(typeof G=="function"){const ye=F(K,G);_e[K]=ye,a.actions[K]=G}}return Xt(se,_e),Xt(re(se),_e),Object.defineProperty(se,"$state",{get:()=>r.state.value[t],set:K=>{T(G=>{Xt(G,K)})}}),r._p.forEach(K=>{Xt(se,o.run(()=>K({store:se,app:r._a,pinia:r,options:a})))}),P&&i&&n.hydrate&&n.hydrate(se.$state,P),l=!0,u=!0,se}function Fv(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Ny();return a=a||(l?us(Ff,null):null),a&&Co(a),a=Lf,a._s.has(r)||(i?Bf(r,e,s,a):Lv(r,s,a)),a._s.get(r)}return o.$id=r,o}const Uv={class:"capitalize"},Wn={__name:"AppButton",props:{label:String},setup(t){return(e,n)=>(Je(),ht("button",Uv,Es(t.label),1))}};var sh={};/**
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
 */const jf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Bv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$f={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new jv;const f=i<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const P=l<<6&192|h;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $v=function(t){const e=jf(t);return $f.encodeByteArray(e,!0)},Ji=function(t){return $v(t).replace(/\./g,"")},qf=function(t){try{return $f.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hv=()=>qv().__FIREBASE_DEFAULTS__,Wv=()=>{if(typeof process>"u"||typeof sh>"u")return;const t=sh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qf(t[1]);return e&&JSON.parse(e)},Do=()=>{try{return Hv()||Wv()||zv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hf=t=>{var e,n;return(n=(e=Do())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Kv=t=>{const e=Hf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Wf=()=>{var t;return(t=Do())===null||t===void 0?void 0:t.config},zf=t=>{var e;return(e=Do())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Gv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Qv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ji(JSON.stringify(n)),Ji(JSON.stringify(o)),""].join(".")}/**
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
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Yv(){var t;const e=(t=Do())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eE(){const t=Se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tE(){return!Yv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kf(){try{return typeof indexedDB=="object"}catch{return!1}}function nE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const rE="FirebaseError";class Gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rE,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ws.prototype.create)}}class Ws{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?sE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Gt(s,a,r)}}function sE(t,e){return t.replace(iE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const iE=/\{\$([^}]+)}/g;function oE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ih(i)&&ih(o)){if(!Yi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ih(t){return t!==null&&typeof t=="object"}/**
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
 */function zs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ts(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ns(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function aE(t,e){const n=new cE(t,e);return n.subscribe.bind(n)}class cE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ia),s.error===void 0&&(s.error=Ia),s.complete===void 0&&(s.complete=Ia);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ia(){}/**
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
 */function Ke(t){return t&&t._delegate?t._delegate:t}class zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dn="[DEFAULT]";/**
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
 */class uE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Gv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dE(e))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dn){return this.instances.has(e)}getOptions(e=Dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dn){return this.component?this.component.multipleInstances?e:Dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hE(t){return t===Dn?void 0:t}function dE(t){return t.instantiationMode==="EAGER"}/**
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
 */class fE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const pE={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},gE=Y.INFO,mE={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},_E=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=mE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rl{constructor(e){this.name=e,this._logLevel=gE,this._logHandler=_E,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const yE=(t,e)=>e.some(n=>t instanceof n);let oh,ah;function vE(){return oh||(oh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EE(){return ah||(ah=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gf=new WeakMap,nc=new WeakMap,Qf=new WeakMap,Ta=new WeakMap,sl=new WeakMap;function IE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(un(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gf.set(n,t)}).catch(()=>{}),sl.set(e,t),e}function TE(t){if(nc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});nc.set(t,e)}let rc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wE(t){rc=t(rc)}function AE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wa(this),e,...n);return Qf.set(r,e.sort?e.sort():[e]),un(r)}:EE().includes(t)?function(...e){return t.apply(wa(this),e),un(Gf.get(this))}:function(...e){return un(t.apply(wa(this),e))}}function RE(t){return typeof t=="function"?AE(t):(t instanceof IDBTransaction&&TE(t),yE(t,vE())?new Proxy(t,rc):t)}function un(t){if(t instanceof IDBRequest)return IE(t);if(Ta.has(t))return Ta.get(t);const e=RE(t);return e!==t&&(Ta.set(t,e),sl.set(e,t)),e}const wa=t=>sl.get(t);function SE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=un(o);return r&&o.addEventListener("upgradeneeded",c=>{r(un(o.result),c.oldVersion,c.newVersion,un(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const PE=["get","getKey","getAll","getAllKeys","count"],bE=["put","add","delete","clear"],Aa=new Map;function ch(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Aa.get(e))return Aa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=bE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||PE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Aa.set(e,i),i}wE(t=>({...t,get:(e,n,r)=>ch(e,n)||t.get(e,n,r),has:(e,n)=>!!ch(e,n)||t.has(e,n)}));/**
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
 */class CE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(DE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function DE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sc="@firebase/app",lh="0.10.1";/**
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
 */const Kn=new rl("@firebase/app"),VE="@firebase/app-compat",kE="@firebase/analytics-compat",NE="@firebase/analytics",OE="@firebase/app-check-compat",xE="@firebase/app-check",ME="@firebase/auth",LE="@firebase/auth-compat",FE="@firebase/database",UE="@firebase/database-compat",BE="@firebase/functions",jE="@firebase/functions-compat",$E="@firebase/installations",qE="@firebase/installations-compat",HE="@firebase/messaging",WE="@firebase/messaging-compat",zE="@firebase/performance",KE="@firebase/performance-compat",GE="@firebase/remote-config",QE="@firebase/remote-config-compat",JE="@firebase/storage",YE="@firebase/storage-compat",XE="@firebase/firestore",ZE="@firebase/firestore-compat",eI="firebase",tI="10.11.0";/**
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
 */const ic="[DEFAULT]",nI={[sc]:"fire-core",[VE]:"fire-core-compat",[NE]:"fire-analytics",[kE]:"fire-analytics-compat",[xE]:"fire-app-check",[OE]:"fire-app-check-compat",[ME]:"fire-auth",[LE]:"fire-auth-compat",[FE]:"fire-rtdb",[UE]:"fire-rtdb-compat",[BE]:"fire-fn",[jE]:"fire-fn-compat",[$E]:"fire-iid",[qE]:"fire-iid-compat",[HE]:"fire-fcm",[WE]:"fire-fcm-compat",[zE]:"fire-perf",[KE]:"fire-perf-compat",[GE]:"fire-rc",[QE]:"fire-rc-compat",[JE]:"fire-gcs",[YE]:"fire-gcs-compat",[XE]:"fire-fst",[ZE]:"fire-fst-compat","fire-js":"fire-js",[eI]:"fire-js-all"};/**
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
 */const Xi=new Map,rI=new Map,oc=new Map;function uh(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pr(t){const e=t.name;if(oc.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;oc.set(e,t);for(const n of Xi.values())uh(n,t);for(const n of rI.values())uh(n,t);return!0}function il(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function St(t){return t.settings!==void 0}/**
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
 */const sI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hn=new Ws("app","Firebase",sI);/**
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
 */class iI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
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
 */const Fr=tI;function Jf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ic,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw hn.create("bad-app-name",{appName:String(s)});if(n||(n=Wf()),!n)throw hn.create("no-options");const i=Xi.get(s);if(i){if(Yi(n,i.options)&&Yi(r,i.config))return i;throw hn.create("duplicate-app",{appName:s})}const o=new fE(s);for(const c of oc.values())o.addComponent(c);const a=new iI(n,r,o);return Xi.set(s,a),a}function Yf(t=ic){const e=Xi.get(t);if(!e&&t===ic&&Wf())return Jf();if(!e)throw hn.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let s=(r=nI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(a.join(" "));return}Pr(new zn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const oI="firebase-heartbeat-database",aI=1,Ss="firebase-heartbeat-store";let Ra=null;function Xf(){return Ra||(Ra=SE(oI,aI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ss)}catch(n){console.warn(n)}}}}).catch(t=>{throw hn.create("idb-open",{originalErrorMessage:t.message})})),Ra}async function cI(t){try{const n=(await Xf()).transaction(Ss),r=await n.objectStore(Ss).get(Zf(t));return await n.done,r}catch(e){if(e instanceof Gt)Kn.warn(e.message);else{const n=hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function hh(t,e){try{const r=(await Xf()).transaction(Ss,"readwrite");await r.objectStore(Ss).put(e,Zf(t)),await r.done}catch(n){if(n instanceof Gt)Kn.warn(n.message);else{const r=hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function Zf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lI=1024,uI=30*24*60*60*1e3;class hI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=dh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=uI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dh(),{heartbeatsToSend:r,unsentEntries:s}=dI(this._heartbeatsCache.heartbeats),i=Ji(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function dh(){return new Date().toISOString().substring(0,10)}function dI(t,e=lI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kf()?nE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fh(t){return Ji(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function pI(t){Pr(new zn("platform-logger",e=>new CE(e),"PRIVATE")),Pr(new zn("heartbeat",e=>new hI(e),"PRIVATE")),dn(sc,lh,t),dn(sc,lh,"esm2017"),dn("fire-js","")}pI("");var gI="firebase",mI="10.11.0";/**
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
 */dn(gI,mI,"app");var _I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C,ol=ol||{},j=_I||self;function Vo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ks(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function yI(t){return Object.prototype.hasOwnProperty.call(t,Sa)&&t[Sa]||(t[Sa]=++vI)}var Sa="closure_uid_"+(1e9*Math.random()>>>0),vI=0;function EI(t,e,n){return t.call.apply(t.bind,arguments)}function II(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function He(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?He=EI:He=II,He.apply(null,arguments)}function Ei(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ne(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function In(){this.s=this.s,this.o=this.o}var TI=0;In.prototype.s=!1;In.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),TI!=0)&&yI(this)};In.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ep=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function al(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ph(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Vo(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function We(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var wI=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};j.addEventListener("test",n,e),j.removeEventListener("test",n,e)}catch{}return t}();function Ps(t){return/^[\s\xa0]*$/.test(t)}function ko(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function Rt(t){return ko().indexOf(t)!=-1}function cl(t){return cl[" "](t),t}cl[" "]=function(){};function AI(t,e){var n=mT;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var RI=Rt("Opera"),br=Rt("Trident")||Rt("MSIE"),tp=Rt("Edge"),ac=tp||br,np=Rt("Gecko")&&!(ko().toLowerCase().indexOf("webkit")!=-1&&!Rt("Edge"))&&!(Rt("Trident")||Rt("MSIE"))&&!Rt("Edge"),SI=ko().toLowerCase().indexOf("webkit")!=-1&&!Rt("Edge");function rp(){var t=j.document;return t?t.documentMode:void 0}var cc;e:{var Pa="",ba=function(){var t=ko();if(np)return/rv:([^\);]+)(\)|;)/.exec(t);if(tp)return/Edge\/([\d\.]+)/.exec(t);if(br)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(SI)return/WebKit\/(\S+)/.exec(t);if(RI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ba&&(Pa=ba?ba[1]:""),br){var Ca=rp();if(Ca!=null&&Ca>parseFloat(Pa)){cc=String(Ca);break e}}cc=Pa}var lc;if(j.document&&br){var gh=rp();lc=gh||parseInt(cc,10)||void 0}else lc=void 0;var PI=lc;function bs(t,e){if(We.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(np){e:{try{cl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:bI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&bs.$.h.call(this)}}Ne(bs,We);var bI={2:"touch",3:"pen",4:"mouse"};bs.prototype.h=function(){bs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gs="closure_listenable_"+(1e6*Math.random()|0),CI=0;function DI(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++CI,this.fa=this.ia=!1}function No(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ll(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function VI(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function sp(t){const e={};for(const n in t)e[n]=t[n];return e}const mh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ip(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<mh.length;i++)n=mh[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Oo(t){this.src=t,this.g={},this.h=0}Oo.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=hc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new DI(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function uc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=ep(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(No(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var ul="closure_lm_"+(1e6*Math.random()|0),Da={};function op(t,e,n,r,s){if(r&&r.once)return cp(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)op(t,e[i],n,r,s);return null}return n=fl(n),t&&t[Gs]?t.O(e,n,Ks(r)?!!r.capture:!!r,s):ap(t,e,n,!1,r,s)}function ap(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ks(s)?!!s.capture:!!s,a=dl(t);if(a||(t[ul]=a=new Oo(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=kI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)wI||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(up(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function kI(){function t(n){return e.call(t.src,t.listener,n)}const e=NI;return t}function cp(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)cp(t,e[i],n,r,s);return null}return n=fl(n),t&&t[Gs]?t.P(e,n,Ks(r)?!!r.capture:!!r,s):ap(t,e,n,!0,r,s)}function lp(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)lp(t,e[i],n,r,s);else r=Ks(r)?!!r.capture:!!r,n=fl(n),t&&t[Gs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=hc(i,n,r,s),-1<n&&(No(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=dl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hc(e,n,r,s)),(n=-1<t?e[t]:null)&&hl(n))}function hl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Gs])uc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(up(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=dl(e))?(uc(n,t),n.h==0&&(n.src=null,e[ul]=null)):No(t)}}}function up(t){return t in Da?Da[t]:Da[t]="on"+t}function NI(t,e){if(t.fa)t=!0;else{e=new bs(e,this);var n=t.listener,r=t.la||t.src;t.ia&&hl(t),t=n.call(r,e)}return t}function dl(t){return t=t[ul],t instanceof Oo?t:null}var Va="__closure_events_fn_"+(1e9*Math.random()>>>0);function fl(t){return typeof t=="function"?t:(t[Va]||(t[Va]=function(e){return t.handleEvent(e)}),t[Va])}function ke(){In.call(this),this.i=new Oo(this),this.S=this,this.J=null}Ne(ke,In);ke.prototype[Gs]=!0;ke.prototype.removeEventListener=function(t,e,n,r){lp(this,t,e,n,r)};function Le(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new We(e,t);else if(e instanceof We)e.target=e.target||t;else{var s=e;e=new We(r,t),ip(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ii(o,r,!0,e)&&s}if(o=e.g=t,s=Ii(o,r,!0,e)&&s,s=Ii(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ii(o,r,!1,e)&&s}ke.prototype.N=function(){if(ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)No(n[r]);delete t.g[e],t.h--}}this.J=null};ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ke.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ii(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&uc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var pl=j.JSON.stringify;class OI{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function xI(){var t=gl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class MI{constructor(){this.h=this.g=null}add(e,n){const r=hp.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var hp=new OI(()=>new LI,t=>t.reset());class LI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function FI(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function UI(t){j.setTimeout(()=>{throw t},0)}let Cs,Ds=!1,gl=new MI,dp=()=>{const t=j.Promise.resolve(void 0);Cs=()=>{t.then(BI)}};var BI=()=>{for(var t;t=xI();){try{t.h.call(t.g)}catch(n){UI(n)}var e=hp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ds=!1};function xo(t,e){ke.call(this),this.h=t||1,this.g=e||j,this.j=He(this.qb,this),this.l=Date.now()}Ne(xo,ke);C=xo.prototype;C.ga=!1;C.T=null;C.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Le(this,"tick"),this.ga&&(ml(this),this.start()))}};C.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ml(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}C.N=function(){xo.$.N.call(this),ml(this),delete this.g};function _l(t,e,n){if(typeof t=="function")n&&(t=He(t,n));else if(t&&typeof t.handleEvent=="function")t=He(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function fp(t){t.g=_l(()=>{t.g=null,t.i&&(t.i=!1,fp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jI extends In{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fp(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vs(t){In.call(this),this.h=t,this.g={}}Ne(Vs,In);var _h=[];function pp(t,e,n,r){Array.isArray(n)||(n&&(_h[0]=n.toString()),n=_h);for(var s=0;s<n.length;s++){var i=op(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function gp(t){ll(t.g,function(e,n){this.g.hasOwnProperty(n)&&hl(e)},t),t.g={}}Vs.prototype.N=function(){Vs.$.N.call(this),gp(this)};Vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mo(){this.g=!0}Mo.prototype.Ea=function(){this.g=!1};function $I(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function qI(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function fr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+WI(t,n)+(r?" "+r:"")})}function HI(t,e){t.info(function(){return"TIMEOUT: "+e})}Mo.prototype.info=function(){};function WI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return pl(n)}catch{return e}}var er={},yh=null;function Lo(){return yh=yh||new ke}er.Ta="serverreachability";function mp(t){We.call(this,er.Ta,t)}Ne(mp,We);function ks(t){const e=Lo();Le(e,new mp(e))}er.STAT_EVENT="statevent";function _p(t,e){We.call(this,er.STAT_EVENT,t),this.stat=e}Ne(_p,We);function Ye(t){const e=Lo();Le(e,new _p(e,t))}er.Ua="timingevent";function yp(t,e){We.call(this,er.Ua,t),this.size=e}Ne(yp,We);function Qs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var Fo={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},vp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function yl(){}yl.prototype.h=null;function vh(t){return t.h||(t.h=t.i())}function Ep(){}var Js={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function vl(){We.call(this,"d")}Ne(vl,We);function El(){We.call(this,"c")}Ne(El,We);var dc;function Uo(){}Ne(Uo,yl);Uo.prototype.g=function(){return new XMLHttpRequest};Uo.prototype.i=function(){return{}};dc=new Uo;function Ys(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Vs(this),this.P=zI,t=ac?125:void 0,this.V=new xo(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ip}function Ip(){this.i=null,this.g="",this.h=!1}var zI=45e3,Tp={},fc={};C=Ys.prototype;C.setTimeout=function(t){this.P=t};function pc(t,e,n){t.L=1,t.A=jo(Ht(e)),t.u=n,t.S=!0,wp(t,null)}function wp(t,e){t.G=Date.now(),Xs(t),t.B=Ht(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Vp(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Ip,t.g=Xp(t.l,n?e:null,!t.u),0<t.O&&(t.M=new jI(He(t.Pa,t,t.g),t.O)),pp(t.U,t.g,"readystatechange",t.nb),e=t.I?sp(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ks(),$I(t.j,t.v,t.B,t.m,t.W,t.u)}C.nb=function(t){t=t.target;const e=this.M;e&&Pt(t)==3?e.l():this.Pa(t)};C.Pa=function(t){try{if(t==this.g)e:{const u=Pt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ac||this.g&&(this.h.h||this.g.ja()||wh(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ks(3):ks(2)),Bo(this);var n=this.g.da();this.ca=n;t:if(Ap(this)){var r=wh(this.g);t="";var s=r.length,i=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){On(this),fs(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,qI(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ps(a)){var l=a;break t}}l=null}if(n=l)fr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gc(this,n);else{this.i=!1,this.s=3,Ye(12),On(this),fs(this);break e}}this.S?(Rp(this,u,o),ac&&this.i&&u==3&&(pp(this.U,this.V,"tick",this.mb),this.V.start())):(fr(this.j,this.m,o,null),gc(this,o)),u==4&&On(this),this.i&&!this.J&&(u==4?Gp(this.l,this):(this.i=!1,Xs(this)))}else fT(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ye(12)):(this.s=0,Ye(13)),On(this),fs(this)}}}catch{}finally{}};function Ap(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Rp(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=KI(t,n),s==fc){e==4&&(t.s=4,Ye(14),r=!1),fr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Tp){t.s=4,Ye(15),fr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else fr(t.j,t.m,s,null),gc(t,s);Ap(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ye(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Sl(e),e.M=!0,Ye(11))):(fr(t.j,t.m,n,"[Invalid Chunked Response]"),On(t),fs(t))}C.mb=function(){if(this.g){var t=Pt(this.g),e=this.g.ja();this.o<e.length&&(Bo(this),Rp(this,t,e),this.i&&t!=4&&Xs(this))}};function KI(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?fc:(n=Number(e.substring(n,r)),isNaN(n)?Tp:(r+=1,r+n>e.length?fc:(e=e.slice(r,r+n),t.o=r+n,e)))}C.cancel=function(){this.J=!0,On(this)};function Xs(t){t.Y=Date.now()+t.P,Sp(t,t.P)}function Sp(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Qs(He(t.lb,t),e)}function Bo(t){t.C&&(j.clearTimeout(t.C),t.C=null)}C.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(HI(this.j,this.B),this.L!=2&&(ks(),Ye(17)),On(this),this.s=2,fs(this)):Sp(this,this.Y-t)};function fs(t){t.l.H==0||t.J||Gp(t.l,t)}function On(t){Bo(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,ml(t.V),gp(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function gc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||mc(n.i,t))){if(!t.K&&mc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)to(n),Wo(n);else break e;Rl(n),Ye(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Qs(He(n.ib,n),6e3));if(1>=Op(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else xn(n,11)}else if((t.K||n.g==t)&&to(n),!Ps(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const P=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(P){var i=r.i;i.g||P.indexOf("spdy")==-1&&P.indexOf("quic")==-1&&P.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Il(i,i.h),i.h=null))}if(r.F){const S=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.Da=S,fe(r.I,r.F,S))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Yp(r,r.J?r.pa:null,r.Y),o.K){xp(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Bo(a),Xs(a)),r.g=o}else zp(r);0<n.j.length&&zo(n)}else l[0]!="stop"&&l[0]!="close"||xn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?xn(n,7):Al(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ks(4)}catch{}}function GI(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Vo(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function QI(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Vo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Pp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Vo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=QI(t),r=GI(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var bp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function JI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function jn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof jn){this.h=t.h,Zi(this,t.j),this.s=t.s,this.g=t.g,eo(this,t.m),this.l=t.l;var e=t.i,n=new Ns;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Eh(this,n),this.o=t.o}else t&&(e=String(t).match(bp))?(this.h=!1,Zi(this,e[1]||"",!0),this.s=rs(e[2]||""),this.g=rs(e[3]||"",!0),eo(this,e[4]),this.l=rs(e[5]||"",!0),Eh(this,e[6]||"",!0),this.o=rs(e[7]||"")):(this.h=!1,this.i=new Ns(null,this.h))}jn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ss(e,Ih,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ss(e,Ih,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ss(n,n.charAt(0)=="/"?ZI:XI,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ss(n,tT)),t.join("")};function Ht(t){return new jn(t)}function Zi(t,e,n){t.j=n?rs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function eo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Eh(t,e,n){e instanceof Ns?(t.i=e,nT(t.i,t.h)):(n||(e=ss(e,eT)),t.i=new Ns(e,t.h))}function fe(t,e,n){t.i.set(e,n)}function jo(t){return fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function rs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ss(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,YI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function YI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ih=/[#\/\?@]/g,XI=/[#\?:]/g,ZI=/[#\?]/g,eT=/[#\?@]/g,tT=/#/g;function Ns(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tn(t){t.g||(t.g=new Map,t.h=0,t.i&&JI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}C=Ns.prototype;C.add=function(t,e){Tn(this),this.i=null,t=Ur(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Cp(t,e){Tn(t),e=Ur(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Dp(t,e){return Tn(t),e=Ur(t,e),t.g.has(e)}C.forEach=function(t,e){Tn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};C.ta=function(){Tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};C.Z=function(t){Tn(this);let e=[];if(typeof t=="string")Dp(this,t)&&(e=e.concat(this.g.get(Ur(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};C.set=function(t,e){return Tn(this),this.i=null,t=Ur(this,t),Dp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};C.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Vp(t,e,n){Cp(t,e),0<n.length&&(t.i=null,t.g.set(Ur(t,e),al(n)),t.h+=n.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ur(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function nT(t,e){e&&!t.j&&(Tn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Cp(this,r),Vp(this,s,n))},t)),t.j=e}var rT=class{constructor(t,e){this.g=t,this.map=e}};function kp(t){this.l=t||sT,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sT=10;function Np(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Op(t){return t.h?1:t.g?t.g.size:0}function mc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Il(t,e){t.g?t.g.add(e):t.h=e}function xp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kp.prototype.cancel=function(){if(this.i=Mp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Mp(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return al(t.i)}var iT=class{stringify(t){return j.JSON.stringify(t,void 0)}parse(t){return j.JSON.parse(t,void 0)}};function oT(){this.g=new iT}function aT(t,e,n){const r=n||"";try{Pp(t,function(s,i){let o=s;Ks(s)&&(o=pl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function cT(t,e){const n=new Mo;if(j.Image){const r=new Image;r.onload=Ei(Ti,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ei(Ti,n,r,"TestLoadImage: error",!1,e),r.onabort=Ei(Ti,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ei(Ti,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ti(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function $o(t){this.l=t.ec||null,this.j=t.ob||!1}Ne($o,yl);$o.prototype.g=function(){return new qo(this.l,this.j)};$o.prototype.i=function(t){return function(){return t}}({});function qo(t,e){ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Tl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ne(qo,ke);var Tl=0;C=qo.prototype;C.open=function(t,e){if(this.readyState!=Tl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Os(this)};C.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||j).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=Tl};C.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Os(this)),this.g&&(this.readyState=3,Os(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Lp(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Lp(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}C.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zs(this):Os(this),this.readyState==3&&Lp(this)}};C.Za=function(t){this.g&&(this.response=this.responseText=t,Zs(this))};C.Ya=function(t){this.g&&(this.response=t,Zs(this))};C.ka=function(){this.g&&Zs(this)};function Zs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Os(t)}C.setRequestHeader=function(t,e){this.v.append(t,e)};C.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Os(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var lT=j.JSON.parse;function Te(t){ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Fp,this.L=this.M=!1}Ne(Te,ke);var Fp="",uT=/^https?$/i,hT=["POST","PUT"];C=Te.prototype;C.Oa=function(t){this.M=t};C.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dc.g(),this.C=this.u?vh(this.u):vh(dc),this.g.onreadystatechange=He(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Th(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=j.FormData&&t instanceof j.FormData,!(0<=ep(hT,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{jp(this),0<this.B&&((this.L=dT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=He(this.ua,this)):this.A=_l(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Th(this,i)}};function dT(t){return br&&typeof t.timeout=="number"&&t.ontimeout!==void 0}C.ua=function(){typeof ol<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Le(this,"timeout"),this.abort(8))};function Th(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Up(t),Ho(t)}function Up(t){t.F||(t.F=!0,Le(t,"complete"),Le(t,"error"))}C.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Le(this,"complete"),Le(this,"abort"),Ho(this))};C.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ho(this,!0)),Te.$.N.call(this)};C.La=function(){this.s||(this.G||this.v||this.l?Bp(this):this.kb())};C.kb=function(){Bp(this)};function Bp(t){if(t.h&&typeof ol<"u"&&(!t.C[1]||Pt(t)!=4||t.da()!=2)){if(t.v&&Pt(t)==4)_l(t.La,0,t);else if(Le(t,"readystatechange"),Pt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(bp)[1]||null;!s&&j.self&&j.self.location&&(s=j.self.location.protocol.slice(0,-1)),r=!uT.test(s?s.toLowerCase():"")}n=r}if(n)Le(t,"complete"),Le(t,"success");else{t.m=6;try{var i=2<Pt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Up(t)}}finally{Ho(t)}}}}function Ho(t,e){if(t.g){jp(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Le(t,"ready");try{n.onreadystatechange=r}catch{}}}function jp(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}C.isActive=function(){return!!this.g};function Pt(t){return t.g?t.g.readyState:0}C.da=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}};C.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),lT(e)}};function wh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Fp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function fT(t){const e={};t=(t.g&&2<=Pt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ps(t[r]))continue;var n=FI(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}VI(e,function(r){return r.join(", ")})}C.Ia=function(){return this.m};C.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $p(t){let e="";return ll(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function wl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$p(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):fe(t,e,n))}function Yr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qp(t){this.Ga=0,this.j=[],this.l=new Mo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Yr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Yr("baseRetryDelayMs",5e3,t),this.hb=Yr("retryDelaySeedMs",1e4,t),this.eb=Yr("forwardChannelMaxRetries",2,t),this.xa=Yr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new kp(t&&t.concurrentRequestLimit),this.Ja=new oT,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}C=qp.prototype;C.ra=8;C.H=1;function Al(t){if(Hp(t),t.H==3){var e=t.W++,n=Ht(t.I);if(fe(n,"SID",t.K),fe(n,"RID",e),fe(n,"TYPE","terminate"),ei(t,n),e=new Ys(t,t.l,e),e.L=2,e.A=jo(Ht(n)),n=!1,j.navigator&&j.navigator.sendBeacon)try{n=j.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&j.Image&&(new Image().src=e.A,n=!0),n||(e.g=Xp(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Xs(e)}Jp(t)}function Wo(t){t.g&&(Sl(t),t.g.cancel(),t.g=null)}function Hp(t){Wo(t),t.u&&(j.clearTimeout(t.u),t.u=null),to(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function zo(t){if(!Np(t.i)&&!t.m){t.m=!0;var e=t.Na;Cs||dp(),Ds||(Cs(),Ds=!0),gl.add(e,t),t.C=0}}function pT(t,e){return Op(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Qs(He(t.Na,t,e),Qp(t,t.C)),t.C++,!0)}C.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ys(this,this.l,t);let i=this.s;if(this.U&&(i?(i=sp(i),ip(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Wp(this,s,e),n=Ht(this.I),fe(n,"RID",t),fe(n,"CVER",22),this.F&&fe(n,"X-HTTP-Session-Id",this.F),ei(this,n),i&&(this.O?e="headers="+encodeURIComponent(String($p(i)))+"&"+e:this.o&&wl(n,this.o,i)),Il(this.i,s),this.bb&&fe(n,"TYPE","init"),this.P?(fe(n,"$req",e),fe(n,"SID","null"),s.aa=!0,pc(s,n,null)):pc(s,n,e),this.H=2}}else this.H==3&&(t?Ah(this,t):this.j.length==0||Np(this.i)||Ah(this))};function Ah(t,e){var n;e?n=e.m:n=t.W++;const r=Ht(t.I);fe(r,"SID",t.K),fe(r,"RID",n),fe(r,"AID",t.V),ei(t,r),t.o&&t.s&&wl(r,t.o,t.s),n=new Ys(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Wp(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Il(t.i,n),pc(n,r,e)}function ei(t,e){t.na&&ll(t.na,function(n,r){fe(e,r,n)}),t.h&&Pp({},function(n,r){fe(e,r,n)})}function Wp(t,e,n){n=Math.min(t.j.length,n);var r=t.h?He(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{aT(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function zp(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Cs||dp(),Ds||(Cs(),Ds=!0),gl.add(e,t),t.A=0}}function Rl(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Qs(He(t.Ma,t),Qp(t,t.A)),t.A++,!0)}C.Ma=function(){if(this.u=null,Kp(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Qs(He(this.jb,this),t)}};C.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ye(10),Wo(this),Kp(this))};function Sl(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function Kp(t){t.g=new Ys(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Ht(t.wa);fe(e,"RID","rpc"),fe(e,"SID",t.K),fe(e,"AID",t.V),fe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&fe(e,"TO",t.qa),fe(e,"TYPE","xmlhttp"),ei(t,e),t.o&&t.s&&wl(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=jo(Ht(e)),n.u=null,n.S=!0,wp(n,t)}C.ib=function(){this.v!=null&&(this.v=null,Wo(this),Rl(this),Ye(19))};function to(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function Gp(t,e){var n=null;if(t.g==e){to(t),Sl(t),t.g=null;var r=2}else if(mc(t.i,e))n=e.F,xp(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Lo(),Le(r,new yp(r,n)),zo(t)}else zp(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&pT(t,e)||r==2&&Rl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:xn(t,5);break;case 4:xn(t,10);break;case 3:xn(t,6);break;default:xn(t,2)}}}function Qp(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function xn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=He(t.pb,t);n||(n=new jn("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Zi(n,"https"),jo(n)),cT(n.toString(),r)}else Ye(2);t.H=0,t.h&&t.h.za(e),Jp(t),Hp(t)}C.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ye(2)):(this.l.info("Failed to ping google.com"),Ye(1))};function Jp(t){if(t.H=0,t.ma=[],t.h){const e=Mp(t.i);(e.length!=0||t.j.length!=0)&&(ph(t.ma,e),ph(t.ma,t.j),t.i.i.length=0,al(t.j),t.j.length=0),t.h.ya()}}function Yp(t,e,n){var r=n instanceof jn?Ht(n):new jn(n);if(r.g!="")e&&(r.g=e+"."+r.g),eo(r,r.m);else{var s=j.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new jn(null);r&&Zi(i,r),e&&(i.g=e),s&&eo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&fe(r,n,e),fe(r,"VER",t.ra),ei(t,r),r}function Xp(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Te(new $o({ob:n})):new Te(t.va),e.Oa(t.J),e}C.isActive=function(){return!!this.h&&this.h.isActive(this)};function Zp(){}C=Zp.prototype;C.Ba=function(){};C.Aa=function(){};C.za=function(){};C.ya=function(){};C.isActive=function(){return!0};C.Va=function(){};function no(){if(br&&!(10<=Number(PI)))throw Error("Environmental error: no available transport.")}no.prototype.g=function(t,e){return new ot(t,e)};function ot(t,e){ke.call(this),this.g=new qp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ps(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ps(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Br(this)}Ne(ot,ke);ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ye(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Yp(t,null,t.Y),zo(t)};ot.prototype.close=function(){Al(this.g)};ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=pl(t),t=n);e.j.push(new rT(e.fb++,t)),e.H==3&&zo(e)};ot.prototype.N=function(){this.g.h=null,delete this.j,Al(this.g),delete this.g,ot.$.N.call(this)};function eg(t){vl.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ne(eg,vl);function tg(){El.call(this),this.status=1}Ne(tg,El);function Br(t){this.g=t}Ne(Br,Zp);Br.prototype.Ba=function(){Le(this.g,"a")};Br.prototype.Aa=function(t){Le(this.g,new eg(t))};Br.prototype.za=function(t){Le(this.g,new tg)};Br.prototype.ya=function(){Le(this.g,"b")};function gT(){this.blockSize=-1}function mt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ne(mt,gT);mt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ka(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}mt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)ka(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){ka(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){ka(this,r),s=0;break}}this.h=s,this.i+=e};mt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function oe(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var mT={};function Pl(t){return-128<=t&&128>t?AI(t,function(e){return new oe([e|0],0>e?-1:0)}):new oe([t|0],0>t?-1:0)}function bt(t){if(isNaN(t)||!isFinite(t))return vr;if(0>t)return xe(bt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=_c;return new oe(e,0)}function ng(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return xe(ng(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=bt(Math.pow(e,8)),r=vr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=bt(Math.pow(e,i)),r=r.R(i).add(bt(o))):(r=r.R(n),r=r.add(bt(o)))}return r}var _c=4294967296,vr=Pl(0),yc=Pl(1),Rh=Pl(16777216);C=oe.prototype;C.ea=function(){if(ct(this))return-xe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:_c+r)*e,e*=_c}return t};C.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Lt(this))return"0";if(ct(this))return"-"+xe(this).toString(t);for(var e=bt(Math.pow(t,6)),n=this,r="";;){var s=so(n,e).g;n=ro(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Lt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};C.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Lt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function ct(t){return t.h==-1}C.X=function(t){return t=ro(this,t),ct(t)?-1:Lt(t)?0:1};function xe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new oe(n,~t.h).add(yc)}C.abs=function(){return ct(this)?xe(this):this};C.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new oe(n,n[n.length-1]&-2147483648?-1:0)};function ro(t,e){return t.add(xe(e))}C.R=function(t){if(Lt(this)||Lt(t))return vr;if(ct(this))return ct(t)?xe(this).R(xe(t)):xe(xe(this).R(t));if(ct(t))return xe(this.R(xe(t)));if(0>this.X(Rh)&&0>t.X(Rh))return bt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,wi(n,2*r+2*s),n[2*r+2*s+1]+=i*c,wi(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,wi(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,wi(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new oe(n,0)};function wi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Xr(t,e){this.g=t,this.h=e}function so(t,e){if(Lt(e))throw Error("division by zero");if(Lt(t))return new Xr(vr,vr);if(ct(t))return e=so(xe(t),e),new Xr(xe(e.g),xe(e.h));if(ct(e))return e=so(t,xe(e)),new Xr(xe(e.g),e.h);if(30<t.g.length){if(ct(t)||ct(e))throw Error("slowDivide_ only works with positive integers.");for(var n=yc,r=e;0>=r.X(t);)n=Sh(n),r=Sh(r);var s=cr(n,1),i=cr(r,1);for(r=cr(r,2),n=cr(n,2);!Lt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=cr(r,1),n=cr(n,1)}return e=ro(t,s.R(e)),new Xr(s,e)}for(s=vr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=bt(n),o=i.R(e);ct(o)||0<o.X(t);)n-=r,i=bt(n),o=i.R(e);Lt(i)&&(i=yc),s=s.add(i),t=ro(t,o)}return new Xr(s,t)}C.gb=function(t){return so(this,t).h};C.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new oe(n,this.h&t.h)};C.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new oe(n,this.h|t.h)};C.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new oe(n,this.h^t.h)};function Sh(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new oe(n,t.h)}function cr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new oe(s,t.h)}no.prototype.createWebChannel=no.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;Fo.NO_ERROR=0;Fo.TIMEOUT=8;Fo.HTTP_ERROR=6;vp.COMPLETE="complete";Ep.EventType=Js;Js.OPEN="a";Js.CLOSE="b";Js.ERROR="c";Js.MESSAGE="d";ke.prototype.listen=ke.prototype.O;Te.prototype.listenOnce=Te.prototype.P;Te.prototype.getLastError=Te.prototype.Sa;Te.prototype.getLastErrorCode=Te.prototype.Ia;Te.prototype.getStatus=Te.prototype.da;Te.prototype.getResponseJson=Te.prototype.Wa;Te.prototype.getResponseText=Te.prototype.ja;Te.prototype.send=Te.prototype.ha;Te.prototype.setWithCredentials=Te.prototype.Oa;mt.prototype.digest=mt.prototype.l;mt.prototype.reset=mt.prototype.reset;mt.prototype.update=mt.prototype.j;oe.prototype.add=oe.prototype.add;oe.prototype.multiply=oe.prototype.R;oe.prototype.modulo=oe.prototype.gb;oe.prototype.compare=oe.prototype.X;oe.prototype.toNumber=oe.prototype.ea;oe.prototype.toString=oe.prototype.toString;oe.prototype.getBits=oe.prototype.D;oe.fromNumber=bt;oe.fromString=ng;var _T=function(){return new no},yT=function(){return Lo()},Na=Fo,vT=vp,ET=er,Ph={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ai=Ep,IT=Te,TT=mt,Er=oe;const bh="@firebase/firestore";/**
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
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
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
 */let jr="10.11.0";/**
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
 */const Gn=new rl("@firebase/firestore");function Zr(){return Gn.logLevel}function b(t,...e){if(Gn.logLevel<=Y.DEBUG){const n=e.map(bl);Gn.debug(`Firestore (${jr}): ${t}`,...n)}}function Ot(t,...e){if(Gn.logLevel<=Y.ERROR){const n=e.map(bl);Gn.error(`Firestore (${jr}): ${t}`,...n)}}function Cr(t,...e){if(Gn.logLevel<=Y.WARN){const n=e.map(bl);Gn.warn(`Firestore (${jr}): ${t}`,...n)}}function bl(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function U(t="Unexpected state"){const e=`FIRESTORE (${jr}) INTERNAL ASSERTION FAILED: `+t;throw Ot(e),new Error(e)}function he(t,e){t||U()}function W(t,e){return t}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Gt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $t{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class rg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Be.UNAUTHENTICATED))}shutdown(){}}class AT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RT{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $t,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $t)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new rg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new Be(e)}}class ST{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class PT{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ST(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.R=n.token,new bT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function DT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class sg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=DT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function Dr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Pe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Pe(0,0))}static max(){return new q(new Pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class xs{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends xs{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const VT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends xs{construct(e,n,r){return new Me(e,n,r)}static isValidIdentifier(e){return VT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new V(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new V(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
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
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(pe.fromString(e))}static fromName(e){return new x(pe.fromString(e).popFirst(5))}static empty(){return new x(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new pe(e.slice()))}}function kT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=q.fromTimestamp(r===1e9?new Pe(n+1,0):new Pe(n,r));return new mn(s,x.empty(),e)}function NT(t){return new mn(t.readTime,t.key,-1)}class mn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mn(q.min(),x.empty(),-1)}static max(){return new mn(q.max(),x.empty(),-1)}}function OT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=x.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const xT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ti(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==xT)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,r)=>{n(e)})}static reject(e){return new y((n,r)=>{r(e)})}static waitFor(e){return new y((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=y.resolve(!1);for(const r of e)n=n.next(s=>s?y.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new y((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new y((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class Cl{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new $t,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ps(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Dl(r.target.error);this.V.reject(new ps(e,s))}}static open(e,n,r,s){try{return new Cl(n,e.transaction(s,r))}catch(i){throw new ps(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(b("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new FT(n)}}class Mn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Mn.S(Se())===12.2&&Ot("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return b("SimpleDb","Removing database:",e),kn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Kf())return!1;if(Mn.C())return!0;const e=Se(),n=Mn.S(e),r=0<n&&n<10,s=Mn.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(b("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new ps(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new V(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new V(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ps(e,o))},s.onupgradeneeded=i=>{b("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{b("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Cl.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),y.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(b("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class LT{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return kn(this.k.delete())}}class ps extends V{constructor(e,n){super(_.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ni(t){return t.name==="IndexedDbTransactionError"}class FT{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(b("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(b("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),kn(r)}add(e){return b("SimpleDb","ADD",this.store.name,e,e),kn(this.store.add(e))}get(e){return kn(this.store.get(e)).next(n=>(n===void 0&&(n=null),b("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return b("SimpleDb","DELETE",this.store.name,e),kn(this.store.delete(e))}count(){return b("SimpleDb","COUNT",this.store.name),kn(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new y((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new y((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){b("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new y((r,s)=>{n.onerror=i=>{const o=Dl(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new y((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new LT(a),l=n(a.primaryKey,a.value,c);if(l instanceof y){const u=l.catch(h=>(c.done(),y.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>y.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function kn(t){return new y((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Dl(r.target.error);n(s)}})}let Ch=!1;function Dl(t){const e=Mn.S(Se());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ch||(Ch=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Vl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Vl._e=-1;function Ko(t){return t==null}function io(t){return t===0&&1/t==-1/0}function UT(t){return typeof t=="number"&&Number.isInteger(t)&&!io(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Dh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ig(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Oe.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ri(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ri(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ri(this.root,e,this.comparator,!0)}}class Ri{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=s??Oe.EMPTY,this.right=i??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Oe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Oe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fe{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vh(this.data.getIterator())}getIteratorFrom(e){return new Vh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class Vh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pt{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new pt([])}unionWith(e){let n=new Fe(Me.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Dr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class og extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new og("Invalid base64 string: "+i):i}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const BT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _n(t){if(he(!!t),typeof t=="string"){let e=0;const n=BT.exec(t);if(he(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qn(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
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
 */function kl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Nl(t){const e=t.mapValue.fields.__previous_value__;return kl(e)?Nl(e):e}function Ms(t){const e=_n(t.mapValue.fields.__local_write_time__.timestampValue);return new Pe(e.seconds,e.nanos)}/**
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
 */class jT{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ls{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ls("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ls&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Si={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kl(t)?4:$T(t)?9007199254740991:10:U()}function xt(t,e){if(t===e)return!0;const n=Jn(t);if(n!==Jn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ms(t).isEqual(Ms(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=_n(s.timestampValue),a=_n(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Qn(s.bytesValue).isEqual(Qn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ae(s.geoPointValue.latitude)===Ae(i.geoPointValue.latitude)&&Ae(s.geoPointValue.longitude)===Ae(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ae(s.integerValue)===Ae(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ae(s.doubleValue),a=Ae(i.doubleValue);return o===a?io(o)===io(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Dr(t.arrayValue.values||[],e.arrayValue.values||[],xt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Dh(o)!==Dh(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!xt(o[c],a[c])))return!1;return!0}(t,e);default:return U()}}function Fs(t,e){return(t.values||[]).find(n=>xt(n,e))!==void 0}function Vr(t,e){if(t===e)return 0;const n=Jn(t),r=Jn(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ae(i.integerValue||i.doubleValue),c=Ae(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return kh(t.timestampValue,e.timestampValue);case 4:return kh(Ms(t),Ms(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Qn(i),c=Qn(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ie(a[l],c[l]);if(u!==0)return u}return ie(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ie(Ae(i.latitude),Ae(o.latitude));return a!==0?a:ie(Ae(i.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Vr(a[l],c[l]);if(u)return u}return ie(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Si.mapValue&&o===Si.mapValue)return 0;if(i===Si.mapValue)return 1;if(o===Si.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=ie(c[h],u[h]);if(f!==0)return f;const g=Vr(a[c[h]],l[u[h]]);if(g!==0)return g}return ie(c.length,u.length)}(t.mapValue,e.mapValue);default:throw U()}}function kh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=_n(t),r=_n(e),s=ie(n.seconds,r.seconds);return s!==0?s:ie(n.nanos,r.nanos)}function kr(t){return vc(t)}function vc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_n(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return x.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=vc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${vc(n.fields[o])}`;return s+"}"}(t.mapValue):U()}function Nh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ec(t){return!!t&&"integerValue"in t}function Ol(t){return!!t&&"arrayValue"in t}function Oh(t){return!!t&&"nullValue"in t}function xh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mi(t){return!!t&&"mapValue"in t}function gs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $r(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $T(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gs(n)}setAll(e){let n=Me.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=gs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Mi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Mi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){$r(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new lt(gs(this.value))}}function ag(t){const e=[];return $r(t.fields,(n,r)=>{const s=new Me([n]);if(Mi(r)){const i=ag(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new pt(e)}/**
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
 */class je{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new je(e,0,q.min(),q.min(),q.min(),lt.empty(),0)}static newFoundDocument(e,n,r,s){return new je(e,1,n,q.min(),r,s,0)}static newNoDocument(e,n){return new je(e,2,n,q.min(),q.min(),lt.empty(),0)}static newUnknownDocument(e,n){return new je(e,3,n,q.min(),q.min(),lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class oo{constructor(e,n){this.position=e,this.inclusive=n}}function Mh(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=x.comparator(x.fromName(o.referenceValue),n.key):r=Vr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Lh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Us{constructor(e,n="asc"){this.field=e,this.dir=n}}function qT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cg{}class Re extends cg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WT(e,n,r):n==="array-contains"?new GT(e,r):n==="in"?new QT(e,r):n==="not-in"?new JT(e,r):n==="array-contains-any"?new YT(e,r):new Re(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zT(e,r):new KT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vr(n,this.value)):n!==null&&Jn(this.value)===Jn(n)&&this.matchesComparison(Vr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _t extends cg{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new _t(e,n)}matches(e){return lg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function lg(t){return t.op==="and"}function ug(t){return HT(t)&&lg(t)}function HT(t){for(const e of t.filters)if(e instanceof _t)return!1;return!0}function Ic(t){if(t instanceof Re)return t.field.canonicalString()+t.op.toString()+kr(t.value);if(ug(t))return t.filters.map(e=>Ic(e)).join(",");{const e=t.filters.map(n=>Ic(n)).join(",");return`${t.op}(${e})`}}function hg(t,e){return t instanceof Re?function(r,s){return s instanceof Re&&r.op===s.op&&r.field.isEqual(s.field)&&xt(r.value,s.value)}(t,e):t instanceof _t?function(r,s){return s instanceof _t&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&hg(o,s.filters[a]),!0):!1}(t,e):void U()}function dg(t){return t instanceof Re?function(n){return`${n.field.canonicalString()} ${n.op} ${kr(n.value)}`}(t):t instanceof _t?function(n){return n.op.toString()+" {"+n.getFilters().map(dg).join(" ,")+"}"}(t):"Filter"}class WT extends Re{constructor(e,n,r){super(e,n,r),this.key=x.fromName(r.referenceValue)}matches(e){const n=x.comparator(e.key,this.key);return this.matchesComparison(n)}}class zT extends Re{constructor(e,n){super(e,"in",n),this.keys=fg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KT extends Re{constructor(e,n){super(e,"not-in",n),this.keys=fg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function fg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>x.fromName(r.referenceValue))}class GT extends Re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ol(n)&&Fs(n.arrayValue,this.value)}}class QT extends Re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fs(this.value.arrayValue,n)}}class JT extends Re{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fs(this.value.arrayValue,n)}}class YT extends Re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ol(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fs(this.value.arrayValue,r))}}/**
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
 */class XT{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Fh(t,e=null,n=[],r=[],s=null,i=null,o=null){return new XT(t,e,n,r,s,i,o)}function xl(t){const e=W(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ic(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ko(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>kr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>kr(r)).join(",")),e.ce=n}return e.ce}function Ml(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!hg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lh(t.startAt,e.startAt)&&Lh(t.endAt,e.endAt)}function Tc(t){return x.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class qr{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function ZT(t,e,n,r,s,i,o,a){return new qr(t,e,n,r,s,i,o,a)}function Ll(t){return new qr(t)}function Uh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pg(t){return t.collectionGroup!==null}function ms(t){const e=W(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Fe(Me.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new Us(i,r))}),n.has(Me.keyField().canonicalString())||e.le.push(new Us(Me.keyField(),r))}return e.le}function Ct(t){const e=W(t);return e.he||(e.he=ew(e,ms(t))),e.he}function ew(t,e){if(t.limitType==="F")return Fh(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Us(s.field,i)});const n=t.endAt?new oo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new oo(t.startAt.position,t.startAt.inclusive):null;return Fh(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wc(t,e){const n=t.filters.concat([e]);return new qr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ac(t,e,n){return new qr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Go(t,e){return Ml(Ct(t),Ct(e))&&t.limitType===e.limitType}function gg(t){return`${xl(Ct(t))}|lt:${t.limitType}`}function ur(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>dg(s)).join(", ")}]`),Ko(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>kr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>kr(s)).join(",")),`Target(${r})`}(Ct(t))}; limitType=${t.limitType})`}function Qo(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):x.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ms(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Mh(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ms(r),s)||r.endAt&&!function(o,a,c){const l=Mh(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ms(r),s))}(t,e)}function tw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mg(t){return(e,n)=>{let r=!1;for(const s of ms(t)){const i=nw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function nw(t,e,n){const r=t.field.isKeyField()?x.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Vr(c,l):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
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
 */class Hr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){$r(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ig(this.inner)}size(){return this.innerSize}}/**
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
 */const rw=new Ie(x.comparator);function Wt(){return rw}const _g=new Ie(x.comparator);function is(...t){let e=_g;for(const n of t)e=e.insert(n.key,n);return e}function yg(t){let e=_g;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ln(){return _s()}function vg(){return _s()}function _s(){return new Hr(t=>t.toString(),(t,e)=>t.isEqual(e))}const sw=new Ie(x.comparator),iw=new Fe(x.comparator);function J(...t){let e=iw;for(const n of t)e=e.add(n);return e}const ow=new Fe(ie);function aw(){return ow}/**
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
 */function Eg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:io(e)?"-0":e}}function Ig(t){return{integerValue:""+t}}function cw(t,e){return UT(e)?Ig(e):Eg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Jo{constructor(){this._=void 0}}function lw(t,e,n){return t instanceof ao?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&kl(i)&&(i=Nl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Bs?wg(t,e):t instanceof js?Ag(t,e):function(s,i){const o=Tg(s,i),a=Bh(o)+Bh(s.Ie);return Ec(o)&&Ec(s.Ie)?Ig(a):Eg(s.serializer,a)}(t,e)}function uw(t,e,n){return t instanceof Bs?wg(t,e):t instanceof js?Ag(t,e):n}function Tg(t,e){return t instanceof co?function(r){return Ec(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ao extends Jo{}class Bs extends Jo{constructor(e){super(),this.elements=e}}function wg(t,e){const n=Rg(e);for(const r of t.elements)n.some(s=>xt(s,r))||n.push(r);return{arrayValue:{values:n}}}class js extends Jo{constructor(e){super(),this.elements=e}}function Ag(t,e){let n=Rg(e);for(const r of t.elements)n=n.filter(s=>!xt(s,r));return{arrayValue:{values:n}}}class co extends Jo{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Bh(t){return Ae(t.integerValue||t.doubleValue)}function Rg(t){return Ol(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hw(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Bs&&s instanceof Bs||r instanceof js&&s instanceof js?Dr(r.elements,s.elements,xt):r instanceof co&&s instanceof co?xt(r.Ie,s.Ie):r instanceof ao&&s instanceof ao}(t.transform,e.transform)}class dw{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Li(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yo{}function Sg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Fl(t.key,Dt.none()):new ri(t.key,t.data,Dt.none());{const n=t.data,r=lt.empty();let s=new Fe(Me.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new tr(t.key,r,new pt(s.toArray()),Dt.none())}}function fw(t,e,n){t instanceof ri?function(s,i,o){const a=s.value.clone(),c=$h(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof tr?function(s,i,o){if(!Li(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=$h(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Pg(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ys(t,e,n,r){return t instanceof ri?function(i,o,a,c){if(!Li(i.precondition,o))return a;const l=i.value.clone(),u=qh(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof tr?function(i,o,a,c){if(!Li(i.precondition,o))return a;const l=qh(i.fieldTransforms,c,o),u=o.data;return u.setAll(Pg(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Li(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function pw(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Tg(r.transform,s||null);i!=null&&(n===null&&(n=lt.empty()),n.set(r.field,i))}return n||null}function jh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Dr(r,s,(i,o)=>hw(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ri extends Yo{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class tr extends Yo{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $h(t,e,n){const r=new Map;he(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,uw(o,a,n[s]))}return r}function qh(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,lw(i,o,e))}return r}class Fl extends Yo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gw extends Yo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class mw{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&fw(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ys(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ys(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=vg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Sg(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&Dr(this.mutations,e.mutations,(n,r)=>jh(n,r))&&Dr(this.baseMutations,e.baseMutations,(n,r)=>jh(n,r))}}class Ul{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){he(e.mutations.length===r.length);let s=function(){return sw}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ul(e,n,r,s)}}/**
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
 */class _w{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class yw{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var we,X;function vw(t){switch(t){default:return U();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function bg(t){if(t===void 0)return Ot("GRPC error has no .code"),_.UNKNOWN;switch(t){case we.OK:return _.OK;case we.CANCELLED:return _.CANCELLED;case we.UNKNOWN:return _.UNKNOWN;case we.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case we.INTERNAL:return _.INTERNAL;case we.UNAVAILABLE:return _.UNAVAILABLE;case we.UNAUTHENTICATED:return _.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case we.NOT_FOUND:return _.NOT_FOUND;case we.ALREADY_EXISTS:return _.ALREADY_EXISTS;case we.PERMISSION_DENIED:return _.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case we.ABORTED:return _.ABORTED;case we.OUT_OF_RANGE:return _.OUT_OF_RANGE;case we.UNIMPLEMENTED:return _.UNIMPLEMENTED;case we.DATA_LOSS:return _.DATA_LOSS;default:return U()}}(X=we||(we={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ew(){return new TextEncoder}/**
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
 */const Iw=new Er([4294967295,4294967295],0);function Hh(t){const e=Ew().encode(t),n=new TT;return n.update(e),new Uint8Array(n.digest())}function Wh(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Er([n,r],0),new Er([s,i],0)]}class Bl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new os(`Invalid padding: ${n}`);if(r<0)throw new os(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new os(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new os(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Er.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Er.fromNumber(r)));return s.compare(Iw)===1&&(s=new Er([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Hh(e),[r,s]=Wh(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Bl(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Hh(e),[r,s]=Wh(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,si.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Xo(q.min(),s,new Ie(ie),Wt(),J())}}class si{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new si(r,n,J(),J(),J())}}/**
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
 */class Fi{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class Cg{constructor(e,n){this.targetId=e,this.fe=n}}class Dg{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class zh{constructor(){this.ge=0,this.pe=Gh(),this.ye=Ge.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=J(),n=J(),r=J();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:U()}}),new si(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Gh()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,he(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class Tw{constructor(e){this.Be=e,this.ke=new Map,this.qe=Wt(),this.Qe=Kh(),this.Ke=new Ie(ie)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Tc(i))if(r===0){const o=new x(i.path);this.We(n,o,je.newNoDocument(o,q.min()))}else he(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Qn(r).toUint8Array()}catch(c){if(c instanceof og)return Cr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Bl(o,s,i)}catch(c){return Cr(c instanceof os?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Tc(a.target)){const c=new x(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,je.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=J();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Xo(e,n,this.Ke,this.qe,r);return this.qe=Wt(),this.Qe=Kh(),this.Ke=new Ie(ie),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new zh,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Fe(ie),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new zh),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function Kh(){return new Ie(x.comparator)}function Gh(){return new Ie(x.comparator)}const ww={asc:"ASCENDING",desc:"DESCENDING"},Aw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Rw={and:"AND",or:"OR"};class Sw{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rc(t,e){return t.useProto3Json||Ko(e)?e:{value:e}}function lo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Pw(t,e){return lo(t,e.toTimestamp())}function Vt(t){return he(!!t),q.fromTimestamp(function(n){const r=_n(n);return new Pe(r.seconds,r.nanos)}(t))}function jl(t,e){return Sc(t,e).canonicalString()}function Sc(t,e){const n=function(s){return new pe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function kg(t){const e=pe.fromString(t);return he(Lg(e)),e}function Pc(t,e){return jl(t.databaseId,e.path)}function Oa(t,e){const n=kg(e);if(n.get(1)!==t.databaseId.projectId)throw new V(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new x(Og(n))}function Ng(t,e){return jl(t.databaseId,e)}function bw(t){const e=kg(t);return e.length===4?pe.emptyPath():Og(e)}function bc(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Og(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qh(t,e,n){return{name:Pc(t,e),fields:n.value.mapValue.fields}}function Cw(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(he(u===void 0||typeof u=="string"),Ge.fromBase64String(u||"")):(he(u===void 0||u instanceof Buffer||u instanceof Uint8Array),Ge.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:bg(l.code);return new V(u,l.message||"")}(o);n=new Dg(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Oa(t,r.document.name),i=Vt(r.document.updateTime),o=r.document.createTime?Vt(r.document.createTime):q.min(),a=new lt({mapValue:{fields:r.document.fields}}),c=je.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Fi(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Oa(t,r.document),i=r.readTime?Vt(r.readTime):q.min(),o=je.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Fi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Oa(t,r.document),i=r.removedTargetIds||[];n=new Fi([],i,s,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new yw(s,i),a=r.targetId;n=new Cg(a,o)}}return n}function Dw(t,e){let n;if(e instanceof ri)n={update:Qh(t,e.key,e.value)};else if(e instanceof Fl)n={delete:Pc(t,e.key)};else if(e instanceof tr)n={update:Qh(t,e.key,e.data),updateMask:Uw(e.fieldMask)};else{if(!(e instanceof gw))return U();n={verify:Pc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ao)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Bs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof js)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof co)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Pw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(t,e.precondition)),n}function Vw(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Vt(s.updateTime):Vt(i);return o.isEqual(q.min())&&(o=Vt(i)),new dw(o,s.transformResults||[])}(n,e))):[]}function kw(t,e){return{documents:[Ng(t,e.path)]}}function Nw(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ng(t,s);const i=function(l){if(l.length!==0)return Mg(_t.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:hr(f.field),direction:Mw(f.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Rc(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ut:n,parent:s}}function Ow(t){let e=bw(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){he(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=xg(h);return f instanceof _t&&ug(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(P){return new Us(dr(P.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Ko(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,g=h.values||[];return new oo(g,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,g=h.values||[];return new oo(g,f)}(n.endAt)),ZT(e,s,o,i,a,"F",c,l)}function xw(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=dr(n.unaryFilter.field);return Re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=dr(n.unaryFilter.field);return Re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=dr(n.unaryFilter.field);return Re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=dr(n.unaryFilter.field);return Re.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(n){return Re.create(dr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _t.create(n.compositeFilter.filters.map(r=>xg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}}(n.compositeFilter.op))}(t):U()}function Mw(t){return ww[t]}function Lw(t){return Aw[t]}function Fw(t){return Rw[t]}function hr(t){return{fieldPath:t.canonicalString()}}function dr(t){return Me.fromServerFormat(t.fieldPath)}function Mg(t){return t instanceof Re?function(n){if(n.op==="=="){if(xh(n.value))return{unaryFilter:{field:hr(n.field),op:"IS_NAN"}};if(Oh(n.value))return{unaryFilter:{field:hr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xh(n.value))return{unaryFilter:{field:hr(n.field),op:"IS_NOT_NAN"}};if(Oh(n.value))return{unaryFilter:{field:hr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hr(n.field),op:Lw(n.op),value:n.value}}}(t):t instanceof _t?function(n){const r=n.getFilters().map(s=>Mg(s));return r.length===1?r[0]:{compositeFilter:{op:Fw(n.op),filters:r}}}(t):U()}function Uw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Lg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class an{constructor(e,n,r,s,i=q.min(),o=q.min(),a=Ge.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new an(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Bw{constructor(e){this.ct=e}}function jw(t){const e=Ow({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ac(e,e.limit,"L"):e}/**
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
 */class $w{constructor(){this._n=new qw}addToCollectionParentIndex(e,n){return this._n.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return y.resolve()}deleteFieldIndex(e,n){return y.resolve()}deleteAllFieldIndexes(e){return y.resolve()}createTargetIndexes(e,n){return y.resolve()}getDocumentsMatchingTarget(e,n){return y.resolve(null)}getIndexType(e,n){return y.resolve(0)}getFieldIndexes(e,n){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,n){return y.resolve(mn.min())}getMinOffsetFromCollectionGroup(e,n){return y.resolve(mn.min())}updateCollectionGroup(e,n,r){return y.resolve()}updateIndexEntries(e,n){return y.resolve()}}class qw{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Fe(pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Fe(pe.comparator)).toArray()}}/**
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
 */class Nr{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Nr(0)}static Ln(){return new Nr(-1)}}/**
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
 */class Hw{constructor(){this.changes=new Hr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?y.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Ww{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zw{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ys(r.mutation,s,pt.empty(),Pe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,n,r=J()){const s=Ln();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=is();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ln();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,J()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Wt();const o=_s(),a=function(){return _s()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof tr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ys(u.mutation,l,u.mutation.getFieldMask(),Pe.now())):o.set(l.key,pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Ww(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=_s();let s=new Ie((o,a)=>o-a),i=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||pt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||J()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=vg();u.forEach(f=>{if(!i.has(f)){const g=Sg(n.get(f),r.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return y.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return x.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):y.resolve(Ln());let a=-1,c=i;return o.next(l=>y.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?y.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,J())).next(u=>({batchId:a,changes:yg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new x(n)).next(r=>{let s=is();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=is();return this.indexManager.getCollectionParents(e,i).next(a=>y.forEach(a,c=>{const l=function(h,f){return new qr(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,je.newInvalidDocument(u)))});let a=is();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&ys(u.mutation,l,pt.empty(),Pe.now()),Qo(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class Kw{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return y.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Vt(s.createTime)}}(n)),y.resolve()}getNamedQuery(e,n){return y.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:jw(s.bundledQuery),readTime:Vt(s.readTime)}}(n)),y.resolve()}}/**
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
 */class Gw{constructor(){this.overlays=new Ie(x.comparator),this.hr=new Map}getOverlay(e,n){return y.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ln();return y.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),y.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),y.resolve()}getOverlaysForCollection(e,n,r){const s=Ln(),i=n.length+1,o=new x(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return y.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ie((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Ln(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ln(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return y.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _w(n,r));let i=this.hr.get(n);i===void 0&&(i=J(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class $l{constructor(){this.Pr=new Fe(Ve.Ir),this.Tr=new Fe(Ve.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ve(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new x(new pe([])),r=new Ve(n,e),s=new Ve(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new x(new pe([])),r=new Ve(n,e),s=new Ve(n,e+1);let i=J();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ve(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return x.comparator(e.key,n.key)||ie(e.pr,n.pr)}static Er(e,n){return ie(e.pr,n.pr)||x.comparator(e.key,n.key)}}/**
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
 */class Qw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Fe(Ve.Ir)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mw(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Ve(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),s=new Ve(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(ie);return n.forEach(s=>{const i=new Ve(s,0),o=new Ve(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),y.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;x.isDocumentKey(i)||(i=i.child(""));const o=new Ve(new x(i),0);let a=new Fe(ie);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),y.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){he(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return y.forEach(n.mutations,s=>{const i=new Ve(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ve(n,0),s=this.wr.firstAfterOrEqual(r);return y.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Jw{constructor(e){this.vr=e,this.docs=function(){return new Ie(x.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return y.resolve(r?r.document.mutableCopy():je.newInvalidDocument(n))}getEntries(e,n){let r=Wt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():je.newInvalidDocument(s))}),y.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Wt();const o=n.path,a=new x(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||OT(NT(u),r)<=0||(s.has(u.key)||Qo(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return y.resolve(i)}getAllFromCollectionGroup(e,n,r,s){U()}Fr(e,n){return y.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Yw(this)}getSize(e){return y.resolve(this.size)}}class Yw extends Hw{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),y.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class Xw{constructor(e){this.persistence=e,this.Mr=new Hr(n=>xl(n),Ml),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Or=0,this.Nr=new $l,this.targetCount=0,this.Lr=Nr.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),y.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Nr(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.qn(n),y.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),y.waitFor(i).next(()=>s)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return y.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),y.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),y.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),y.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return y.resolve(r)}containsKey(e,n){return y.resolve(this.Nr.containsKey(n))}}/**
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
 */class Zw{constructor(e,n){this.Br={},this.overlays={},this.kr=new Vl(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Xw(this),this.indexManager=new $w,this.remoteDocumentCache=function(s){return new Jw(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Bw(n),this.$r=new Kw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Gw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Qw(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const s=new eA(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return y.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class eA extends MT{constructor(e){super(),this.currentSequenceNumber=e}}class ql{constructor(e){this.persistence=e,this.zr=new $l,this.jr=null}static Hr(e){return new ql(e)}get Jr(){if(this.jr)return this.jr;throw U()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),y.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),y.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Jr,r=>{const s=x.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,q.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return y.or([()=>y.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Hl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=J(),s=J();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hl(e,n.fromCache,r,s)}}/**
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
 */class tA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class nA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return tE()?8:Mn.v(Se())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new tA;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Zr()<=Y.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",ur(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),y.resolve()):(Zr()<=Y.DEBUG&&b("QueryEngine","Query:",ur(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Zr()<=Y.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",ur(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ct(n))):y.resolve())}ji(e,n){if(Uh(n))return y.resolve(null);let r=Ct(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ac(n,null,"F"),r=Ct(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=J(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(e,Ac(n,null,"F")):this.es(e,l,n,c)}))})))}Hi(e,n,r,s){return Uh(n)||s.isEqual(q.min())?y.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?y.resolve(null):(Zr()<=Y.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ur(n)),this.es(e,o,n,kT(s,-1)).next(a=>a))})}Zi(e,n){let r=new Fe(mg(e));return n.forEach((s,i)=>{Qo(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Zr()<=Y.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",ur(n)),this.zi.getDocumentsMatchingQuery(e,n,mn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class rA{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Ie(ie),this.rs=new Hr(i=>xl(i),Ml),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zw(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function sA(t,e,n,r){return new rA(t,e,n,r)}async function Fg(t,e){const n=W(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=J();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function iA(t,e){const n=W(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let g=y.resolve();return f.forEach(P=>{g=g.next(()=>u.getEntry(c,P)).next(S=>{const T=l.docVersions.get(P);he(T!==null),S.version.compareTo(T)<0&&(h.applyToRemoteDocument(S,l),S.isValidDocument()&&(S.setReadTime(l.commitVersion),u.addEntry(S)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=J();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ug(t){const e=W(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function oA(t,e){const n=W(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Ge.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(S,T,N){return S.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(f,g,u)&&a.push(n.Qr.updateTargetData(i,g))});let c=Wt(),l=J();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(aA(i,o,e.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(q.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return y.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function aA(t,e,n){let r=J(),s=J();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Wt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function cA(t,e){const n=W(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lA(t,e){const n=W(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,y.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new an(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Cc(t,e,n){const r=W(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ni(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Jh(t,e,n){const r=W(t);let s=q.min(),i=J();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=W(c),f=h.rs.get(u);return f!==void 0?y.resolve(h.ns.get(f)):h.Qr.getTargetData(l,u)}(r,o,Ct(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:q.min(),n?i:J())).next(a=>(uA(r,tw(e),a),{documents:a,hs:i})))}function uA(t,e,n){let r=t.ss.get(e)||q.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Yh{constructor(){this.activeTargetIds=aw()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hA{constructor(){this.no=new Yh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Yh,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dA{io(e){}shutdown(){}}/**
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
 */class Xh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pi=null;function xa(){return Pi===null?Pi=function(){return 268435456+Math.round(2147483648*Math.random())}():Pi++,"0x"+Pi.toString(16)}/**
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
 */const fA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class pA{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const Ue="WebChannelConnection";class gA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=xa(),c=this.bo(n,r.toUriEncodedString());b("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(b("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Cr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+jr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=fA[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=xa();return new Promise((o,a)=>{const c=new IT;c.setWithCredentials(!0),c.listenOnce(vT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Na.NO_ERROR:const u=c.getResponseJson();b(Ue,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Na.TIMEOUT:b(Ue,`RPC '${e}' ${i} timed out`),a(new V(_.DEADLINE_EXCEEDED,"Request time out"));break;case Na.HTTP_ERROR:const h=c.getStatus();if(b(Ue,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const P=function(T){const N=T.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(N)>=0?N:_.UNKNOWN}(g.status);a(new V(P,g.message))}else a(new V(_.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new V(_.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{b(Ue,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);b(Ue,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(e,n,r){const s=xa(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_T(),a=yT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");b(Ue,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,g=!1;const P=new pA({lo:T=>{g?b(Ue,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(f||(b(Ue,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),b(Ue,`RPC '${e}' stream ${s} sending:`,T),h.send(T))},ho:()=>h.close()}),S=(T,N,Z)=>{T.listen(N,F=>{try{Z(F)}catch(ee){setTimeout(()=>{throw ee},0)}})};return S(h,Ai.EventType.OPEN,()=>{g||b(Ue,`RPC '${e}' stream ${s} transport opened.`)}),S(h,Ai.EventType.CLOSE,()=>{g||(g=!0,b(Ue,`RPC '${e}' stream ${s} transport closed`),P.Vo())}),S(h,Ai.EventType.ERROR,T=>{g||(g=!0,Cr(Ue,`RPC '${e}' stream ${s} transport errored:`,T),P.Vo(new V(_.UNAVAILABLE,"The operation could not be completed")))}),S(h,Ai.EventType.MESSAGE,T=>{var N;if(!g){const Z=T.data[0];he(!!Z);const F=Z,ee=F.error||((N=F[0])===null||N===void 0?void 0:N.error);if(ee){b(Ue,`RPC '${e}' stream ${s} received error:`,ee);const se=ee.status;let H=function(G){const ye=we[G];if(ye!==void 0)return bg(ye)}(se),_e=ee.message;H===void 0&&(H=_.INTERNAL,_e="Unknown error status: "+se+" with message "+ee.message),g=!0,P.Vo(new V(H,_e)),h.close()}else b(Ue,`RPC '${e}' stream ${s} received:`,Z),P.mo(Z)}}),S(a,ET.STAT_EVENT,T=>{T.stat===Ph.PROXY?b(Ue,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===Ph.NOPROXY&&b(Ue,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.Ro()},0),P}}function Ma(){return typeof document<"u"?document:null}/**
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
 */function Zo(t){return new Sw(t,!0)}/**
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
 */class Bg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class jg{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Bg(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Ot(n.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new V(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mA extends jg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=Cw(this.serializer,e),r=function(i){if(!("targetChange"in i))return q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?Vt(o.readTime):q.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=bc(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Tc(c)?{documents:kw(i,c)}:{query:Nw(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Vg(i,o.resumeToken);const l=Rc(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(q.min())>0){a.readTime=lo(i,o.snapshotVersion.toTimestamp());const l=Rc(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=xw(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=bc(this.serializer),n.removeTarget=e,this.t_(n)}}class _A extends jg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=Vw(e.writeResults,e.commitTime),r=Vt(e.commitTime);return this.listener.T_(r,n)}return he(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=bc(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Dw(this.serializer,r))};this.t_(n)}}/**
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
 */class yA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new V(_.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Sc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(_.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Sc(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(_.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class vA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Ot(n),this.g_=!1):b("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class EA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{nr(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=W(c);l.v_.add(4),await ii(l),l.x_.set("Unknown"),l.v_.delete(4),await ea(l)}(this))})}),this.x_=new vA(r,s)}}async function ea(t){if(nr(t))for(const e of t.F_)await e(!0)}async function ii(t){for(const e of t.F_)await e(!1)}function $g(t,e){const n=W(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Gl(n)?Kl(n):Wr(n).Jo()&&zl(n,e))}function Wl(t,e){const n=W(t),r=Wr(n);n.C_.delete(e),r.Jo()&&qg(n,e),n.C_.size===0&&(r.Jo()?r.Xo():nr(n)&&n.x_.set("Unknown"))}function zl(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Wr(t).c_(e)}function qg(t,e){t.O_.Oe(e),Wr(t).l_(e)}function Kl(t){t.O_=new Tw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Wr(t).start(),t.x_.p_()}function Gl(t){return nr(t)&&!Wr(t).Ho()&&t.C_.size>0}function nr(t){return W(t).v_.size===0}function Hg(t){t.O_=void 0}async function IA(t){t.C_.forEach((e,n)=>{zl(t,e)})}async function TA(t,e){Hg(t),Gl(t)?(t.x_.S_(e),Kl(t)):t.x_.set("Unknown")}async function wA(t,e,n){if(t.x_.set("Online"),e instanceof Dg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await uo(t,r)}else if(e instanceof Fi?t.O_.$e(e):e instanceof Cg?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(q.min()))try{const r=await Ug(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(Ge.EMPTY_BYTE_STRING,u.snapshotVersion)),qg(i,c);const h=new an(u.target,c,l,u.sequenceNumber);zl(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await uo(t,r)}}async function uo(t,e,n){if(!ni(e))throw e;t.v_.add(1),await ii(t),t.x_.set("Offline"),n||(n=()=>Ug(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await ea(t)})}function Wg(t,e){return e().catch(n=>uo(t,n,e))}async function ta(t){const e=W(t),n=yn(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;AA(e);)try{const s=await cA(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,RA(e,s)}catch(s){await uo(e,s)}zg(e)&&Kg(e)}function AA(t){return nr(t)&&t.D_.length<10}function RA(t,e){t.D_.push(e);const n=yn(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function zg(t){return nr(t)&&!yn(t).Ho()&&t.D_.length>0}function Kg(t){yn(t).start()}async function SA(t){yn(t).d_()}async function PA(t){const e=yn(t);for(const n of t.D_)e.I_(n.mutations)}async function bA(t,e,n){const r=t.D_.shift(),s=Ul.from(r,e,n);await Wg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ta(t)}async function CA(t,e){e&&yn(t).P_&&await async function(r,s){if(function(o){return vw(o)&&o!==_.ABORTED}(s.code)){const i=r.D_.shift();yn(r).Zo(),await Wg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ta(r)}}(t,e),zg(t)&&Kg(t)}async function Zh(t,e){const n=W(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=nr(n);n.v_.add(3),await ii(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await ea(n)}async function DA(t,e){const n=W(t);e?(n.v_.delete(2),await ea(n)):e||(n.v_.add(2),await ii(n),n.x_.set("Unknown"))}function Wr(t){return t.N_||(t.N_=function(n,r,s){const i=W(n);return i.R_(),new mA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:IA.bind(null,t),To:TA.bind(null,t),u_:wA.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Gl(t)?Kl(t):t.x_.set("Unknown")):(await t.N_.stop(),Hg(t))})),t.N_}function yn(t){return t.L_||(t.L_=function(n,r,s){const i=W(n);return i.R_(),new _A(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:SA.bind(null,t),To:CA.bind(null,t),E_:PA.bind(null,t),T_:bA.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await ta(t)):(await t.L_.stop(),t.D_.length>0&&(b("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
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
 */class Ql{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ql(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jl(t,e){if(Ot("AsyncQueue",`${e}: ${t}`),ni(t))return new V(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ir{constructor(e){this.comparator=e?(n,r)=>e(n,r)||x.comparator(n.key,r.key):(n,r)=>x.comparator(n.key,r.key),this.keyedMap=is(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new Ir(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ir)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ir;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ed{constructor(){this.B_=new Ie(x.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):U():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Or{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Or(e,n,Ir.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Go(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class VA{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class kA{constructor(){this.queries=new Hr(e=>gg(e),Go),this.onlineState="Unknown",this.W_=new Set}}async function Gg(t,e){const n=W(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.K_()&&e.U_()&&(r=2):(i=new VA,r=e.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Jl(o,`Initialization of query '${ur(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Q_.push(e),e.G_(n.onlineState),i.q_&&e.z_(i.q_)&&Yl(n)}async function Qg(t,e){const n=W(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=e.U_()?0:1:!i.K_()&&e.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NA(t,e){const n=W(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&Yl(n)}function OA(t,e,n){const r=W(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function Yl(t){t.W_.forEach(e=>{e.next()})}var Dc,td;(td=Dc||(Dc={})).j_="default",td.Cache="cache";class Jg{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Or(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=Or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==Dc.Cache}}/**
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
 */class Yg{constructor(e){this.key=e}}class Xg{constructor(e){this.key=e}}class xA{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=J(),this.mutatedKeys=J(),this.ha=mg(e),this.Pa=new Ir(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new ed,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),g=Qo(this.query,h)?h:null,P=!!f&&this.mutatedKeys.has(f.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;f&&g?f.data.isEqual(g.data)?P!==S&&(r.track({type:3,doc:g}),T=!0):this.da(f,g)||(r.track({type:2,doc:g}),T=!0,(c&&this.ha(g,c)>0||l&&this.ha(g,l)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),T=!0):f&&!g&&(r.track({type:1,doc:f}),T=!0,(c||l)&&(a=!0)),T&&(g?(o=o.add(g),i=S?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((u,h)=>function(g,P){const S=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return S(g)-S(P)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],c=this.la.size===0&&this.current&&!s?1:0,l=c!==this.ca;return this.ca=c,o.length!==0||l?{snapshot:new Or(this.query,e.Pa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new ed,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=J(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new Xg(r))}),this.la.forEach(r=>{e.has(r)||n.push(new Yg(r))}),n}fa(e){this.ua=e.hs,this.la=J();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return Or.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class MA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LA{constructor(e){this.key=e,this.pa=!1}}class FA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Hr(a=>gg(a),Go),this.Sa=new Map,this.ba=new Set,this.Da=new Ie(x.comparator),this.Ca=new Map,this.va=new $l,this.Fa={},this.Ma=new Map,this.xa=Nr.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function UA(t,e,n=!0){const r=sm(t);let s;const i=r.wa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await Zg(r,e,n,!0),s}async function BA(t,e){const n=sm(t);await Zg(n,e,!0,!1)}async function Zg(t,e,n,r){const s=await lA(t.localStore,Ct(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await jA(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&$g(t.remoteStore,s),a}async function jA(t,e,n,r,s){t.Na=(h,f,g)=>async function(S,T,N,Z){let F=T.view.Ta(N);F.Xi&&(F=await Jh(S.localStore,T.query,!1).then(({documents:_e})=>T.view.Ta(_e,F)));const ee=Z&&Z.targetChanges.get(T.targetId),se=Z&&Z.targetMismatches.get(T.targetId)!=null,H=T.view.applyChanges(F,S.isPrimaryClient,ee,se);return rd(S,T.targetId,H.Va),H.snapshot}(t,h,f,g);const i=await Jh(t.localStore,e,!0),o=new xA(e,i.hs),a=o.Ta(i.documents),c=si.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);rd(t,n,l.Va);const u=new MA(e,n,o);return t.wa.set(e,u),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),l.snapshot}async function $A(t,e,n){const r=W(t),s=r.wa.get(e),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!Go(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Cc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Wl(r.remoteStore,s.targetId),Vc(r,s.targetId)}).catch(ti)):(Vc(r,s.targetId),await Cc(r.localStore,s.targetId,!0))}async function qA(t,e){const n=W(t),r=n.wa.get(e),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Wl(n.remoteStore,r.targetId))}async function HA(t,e,n){const r=YA(t);try{const s=await function(o,a){const c=W(o),l=Pe.now(),u=a.reduce((g,P)=>g.add(P.key),J());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let P=Wt(),S=J();return c.os.getEntries(g,u).next(T=>{P=T,P.forEach((N,Z)=>{Z.isValidDocument()||(S=S.add(N))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,P)).next(T=>{h=T;const N=[];for(const Z of a){const F=pw(Z,h.get(Z.key).overlayedDocument);F!=null&&N.push(new tr(Z.key,F,ag(F.value.mapValue),Dt.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,N,a)}).next(T=>{f=T;const N=T.applyToLocalDocumentSet(h,S);return c.documentOverlayCache.saveOverlays(g,T.batchId,N)})}).then(()=>({batchId:f.batchId,changes:yg(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Fa[o.currentUser.toKey()];l||(l=new Ie(ie)),l=l.insert(a,c),o.Fa[o.currentUser.toKey()]=l}(r,s.batchId,n),await oi(r,s.changes),await ta(r.remoteStore)}catch(s){const i=Jl(s,"Failed to persist write");n.reject(i)}}async function em(t,e){const n=W(t);try{const r=await oA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(he(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?he(o.pa):s.removedDocuments.size>0&&(he(o.pa),o.pa=!1))}),await oi(n,r,e)}catch(r){await ti(r)}}function nd(t,e,n){const r=W(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=W(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.Q_)f.G_(a)&&(l=!0)}),l&&Yl(c)}(r.eventManager,e),s.length&&r.ya.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WA(t,e,n){const r=W(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ca.get(e),i=s&&s.key;if(i){let o=new Ie(x.comparator);o=o.insert(i,je.newNoDocument(i,q.min()));const a=J().add(i),c=new Xo(q.min(),new Map,new Ie(ie),o,a);await em(r,c),r.Da=r.Da.remove(i),r.Ca.delete(e),Xl(r)}else await Cc(r.localStore,e,!1).then(()=>Vc(r,e,n)).catch(ti)}async function zA(t,e){const n=W(t),r=e.batch.batchId;try{const s=await iA(n.localStore,e);nm(n,r,null),tm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oi(n,s)}catch(s){await ti(s)}}async function KA(t,e,n){const r=W(t);try{const s=await function(o,a){const c=W(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(he(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);nm(r,e,n),tm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oi(r,s)}catch(s){await ti(s)}}function tm(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function nm(t,e,n){const r=W(t);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Fa[r.currentUser.toKey()]=s}}function Vc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||rm(t,r)})}function rm(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(Wl(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),Xl(t))}function rd(t,e,n){for(const r of n)r instanceof Yg?(t.va.addReference(r.key,e),GA(t,r)):r instanceof Xg?(b("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||rm(t,r.key)):U()}function GA(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(b("SyncEngine","New document in limbo: "+n),t.ba.add(r),Xl(t))}function Xl(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new x(pe.fromString(e)),r=t.xa.next();t.Ca.set(r,new LA(n)),t.Da=t.Da.insert(n,r),$g(t.remoteStore,new an(Ct(Ll(n.path)),r,"TargetPurposeLimboResolution",Vl._e))}}async function oi(t,e,n){const r=W(t),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,c)=>{o.push(r.Na(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Hl.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(c,l){const u=W(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>y.forEach(l,f=>y.forEach(f.qi,g=>u.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>y.forEach(f.Qi,g=>u.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!ni(h))throw h;b("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const g=u.ns.get(f),P=g.snapshotVersion,S=g.withLastLimboFreeSnapshotVersion(P);u.ns=u.ns.insert(f,S)}}}(r.localStore,i))}async function QA(t,e){const n=W(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await Fg(n.localStore,e);n.currentUser=e,function(i,o){i.Ma.forEach(a=>{a.forEach(c=>{c.reject(new V(_.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oi(n,r.us)}}function JA(t,e){const n=W(t),r=n.Ca.get(e);if(r&&r.pa)return J().add(r.key);{let s=J();const i=n.Sa.get(e);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function sm(t){const e=W(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=em.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WA.bind(null,e),e.ya.u_=NA.bind(null,e.eventManager),e.ya.La=OA.bind(null,e.eventManager),e}function YA(t){const e=W(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KA.bind(null,e),e}class sd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Zo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return sA(this.persistence,new nA,e.initialUser,this.serializer)}createPersistence(e){return new Zw(ql.Hr,this.serializer)}createSharedClientState(e){return new hA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class XA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QA.bind(null,this.syncEngine),await DA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kA}()}createDatastore(e){const n=Zo(e.databaseInfo.databaseId),r=function(i){return new gA(i)}(e.databaseInfo);return function(i,o,a,c){return new yA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new EA(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>nd(this.syncEngine,n,0),function(){return Xh.D()?new Xh:new dA}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new FA(s,i,o,a,c,l);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=W(r);b("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await ii(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 *//**
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
 */class im{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):Ot("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ZA{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Be.UNAUTHENTICATED,this.clientId=sg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{b("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(b("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function La(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Fg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function id(t,e){t.asyncQueue.verifyOperationInProgress();const n=await t0(t);b("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Zh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Zh(e.remoteStore,s)),t._onlineComponents=e}function e0(t){return t.name==="FirebaseError"?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function t0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await La(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!e0(n))throw n;Cr("Error using user provided cache. Falling back to memory cache: "+n),await La(t,new sd)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await La(t,new sd);return t._offlineComponents}async function om(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await id(t,t._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await id(t,new XA))),t._onlineComponents}function n0(t){return om(t).then(e=>e.syncEngine)}async function kc(t){const e=await om(t),n=e.eventManager;return n.onListen=UA.bind(null,e.syncEngine),n.onUnlisten=$A.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=BA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qA.bind(null,e.syncEngine),n}function r0(t,e,n={}){const r=new $t;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new im({next:f=>{o.enqueueAndForget(()=>Qg(i,h)),f.fromCache&&c.source==="server"?l.reject(new V(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Jg(a,u,{includeMetadataChanges:!0,ta:!0});return Gg(i,h)}(await kc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function am(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const od=new Map;/**
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
 */function cm(t,e,n){if(!n)throw new V(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function s0(t,e,n,r){if(e===!0&&r===!0)throw new V(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ad(t){if(!x.isDocumentKey(t))throw new V(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cd(t){if(x.isDocumentKey(t))throw new V(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function na(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=na(t);throw new V(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ld{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}s0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=am((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new V(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new V(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new V(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ra{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ld({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ld(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wT;switch(r.type){case"firstParty":return new PT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=od.get(n);r&&(b("ComponentProvider","Removing Datastore"),od.delete(n),r.terminate())}(this),Promise.resolve()}}function i0(t,e,n,r={}){var s;const i=(t=fn(t,ra))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Cr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Be.MOCK_USER;else{a=Qv(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new V(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Be(l)}t._authCredentials=new AT(new rg(a,c))}}/**
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
 */class wn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wn(this.firestore,e,this._query)}}class it{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class pn extends wn{constructor(e,n,r){super(e,n,Ll(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new x(e))}withConverter(e){return new pn(this.firestore,e,this._path)}}function Fa(t,e,...n){if(t=Ke(t),cm("collection","path",e),t instanceof ra){const r=pe.fromString(e,...n);return cd(r),new pn(t,null,r)}{if(!(t instanceof it||t instanceof pn))throw new V(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return cd(r),new pn(t.firestore,null,r)}}function lm(t,e,...n){if(t=Ke(t),arguments.length===1&&(e=sg.newId()),cm("doc","path",e),t instanceof ra){const r=pe.fromString(e,...n);return ad(r),new it(t,null,new x(r))}{if(!(t instanceof it||t instanceof pn))throw new V(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return ad(r),new it(t.firestore,t instanceof pn?t.converter:null,new x(r))}}/**
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
 */class o0{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Bg(this,"async_queue_retry"),this.cu=()=>{const n=Ma();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Ma();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=Ma();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new $t;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!ni(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ot("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const s=Ql.createAndSchedule(this,e,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&U()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}function ud(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class xr extends ra{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new o0}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||um(this),this._firestoreClient.terminate()}}function a0(t,e){const n=typeof t=="object"?t:Yf(),r=typeof t=="string"?t:e||"(default)",s=il(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Kv("firestore");i&&i0(s,...i)}return s}function Zl(t){return t._firestoreClient||um(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function um(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new jT(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,am(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new ZA(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Mr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mr(Ge.fromBase64String(e))}catch(n){throw new V(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mr(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class eu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hm{constructor(e){this._methodName=e}}/**
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
 */class tu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
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
 */const c0=/^__.*__$/;class l0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new tr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ri(e,this.data,n,this.fieldTransforms)}}function dm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class nu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new nu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.pu(e),s}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return ho(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(dm(this.Vu)&&c0.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class u0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Zo(e)}Cu(e,n,r,s=!1){return new nu({Vu:e,methodName:n,Du:r,path:Me.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fm(t){const e=t._freezeSettings(),n=Zo(t._databaseId);return new u0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function h0(t,e,n,r,s,i={}){const o=t.Cu(i.merge||i.mergeFields?2:0,e,n,s);mm("Data must be an object, but it was:",o,r);const a=pm(r,o);let c,l;if(i.merge)c=new pt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=f0(e,h,n);if(!o.contains(f))throw new V(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);g0(u,f)||u.push(f)}c=new pt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new l0(new lt(a),c,l)}function d0(t,e,n,r=!1){return ru(n,t.Cu(r?4:3,e))}function ru(t,e){if(gm(t=Ke(t)))return mm("Unsupported field value:",e,t),pm(t,e);if(t instanceof hm)return function(r,s){if(!dm(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=ru(a,s.wu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Pe.fromDate(r);return{timestampValue:lo(s.serializer,i)}}if(r instanceof Pe){const i=new Pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lo(s.serializer,i)}}if(r instanceof tu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mr)return{bytesValue:Vg(s.serializer,r._byteString)};if(r instanceof it){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:jl(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${na(r)}`)}(t,e)}function pm(t,e){const n={};return ig(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$r(t,(r,s)=>{const i=ru(s,e.fu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function gm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Pe||t instanceof tu||t instanceof Mr||t instanceof it||t instanceof hm)}function mm(t,e,n){if(!gm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=na(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function f0(t,e,n){if((e=Ke(e))instanceof eu)return e._internalPath;if(typeof e=="string")return _m(t,e);throw ho("Field path arguments must be of type string or ",t,!1,void 0,n)}const p0=new RegExp("[~\\*/\\[\\]]");function _m(t,e,n){if(e.search(p0)>=0)throw ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eu(...e.split("."))._internalPath}catch{throw ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ho(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new V(_.INVALID_ARGUMENT,a+t+c)}function g0(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ym{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new m0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(su("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class m0 extends ym{data(){return super.data()}}function su(t,e){return typeof e=="string"?_m(t,e):e instanceof eu?e._internalPath:e._delegate._internalPath}/**
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
 */function vm(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class iu{}class Em extends iu{}function hd(t,e,...n){let r=[];e instanceof iu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof au).length,a=i.filter(c=>c instanceof ou).length;if(o>1||o>0&&a>0)throw new V(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ou extends Em{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ou(e,n,r)}_apply(e){const n=this._parse(e);return Im(e._query,n),new wn(e.firestore,e.converter,wc(e._query,n))}_parse(e){const n=fm(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new V(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){pd(h,u);const g=[];for(const P of h)g.push(fd(c,i,P));f={arrayValue:{values:g}}}else f=fd(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||pd(h,u),f=d0(a,o,h,u==="in"||u==="not-in");return Re.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class au extends iu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new au(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:_t.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Im(o,c),o=wc(o,c)}(e._query,n),new wn(e.firestore,e.converter,wc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class cu extends Em{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new cu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new V(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Us(i,o)}(e._query,this._field,this._direction);return new wn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new qr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function dd(t,e="asc"){const n=e,r=su("orderBy",t);return cu._create(r,n)}function fd(t,e,n){if(typeof(n=Ke(n))=="string"){if(n==="")throw new V(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pg(e)&&n.indexOf("/")!==-1)throw new V(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!x.isDocumentKey(r))throw new V(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nh(t,new x(r))}if(n instanceof it)return Nh(t,n._key);throw new V(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${na(n)}.`)}function pd(t,e){if(!Array.isArray(t)||t.length===0)throw new V(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Im(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new V(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class _0{convertValue(e,n="none"){switch(Jn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $r(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new tu(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Nl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ms(e));default:return null}}convertTimestamp(e){const n=_n(e);return new Pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);he(Lg(r));const s=new Ls(r.get(1),r.get(3)),i=new x(r.popFirst(5));return s.isEqual(n)||Ot(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function y0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class as{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tm extends ym{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ui(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(su("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ui extends Tm{data(e={}){return super.data(e)}}class wm{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new as(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ui(this._firestore,this._userDataWriter,r.key,r,new as(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Ui(s._firestore,s._userDataWriter,a.doc.key,a.doc,new as(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Ui(s._firestore,s._userDataWriter,a.doc.key,a.doc,new as(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:v0(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function v0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}class lu extends _0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function E0(t){t=fn(t,wn);const e=fn(t.firestore,xr),n=Zl(e),r=new lu(e);return vm(t._query),r0(n,t._query).then(s=>new wm(e,r,t,s))}function I0(t){return Am(fn(t.firestore,xr),[new Fl(t._key,Dt.none())])}function T0(t,e){const n=fn(t.firestore,xr),r=lm(t),s=y0(t.converter,e);return Am(n,[h0(fm(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then(()=>r)}function w0(t,...e){var n,r,s;t=Ke(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||ud(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(ud(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof it)l=fn(t.firestore,xr),u=Ll(t._key.path),c={next:h=>{e[o]&&e[o](A0(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=fn(t,wn);l=fn(h.firestore,xr),u=h._query;const f=new lu(l);c={next:g=>{e[o]&&e[o](new wm(l,f,h,g))},error:e[o+1],complete:e[o+2]},vm(t._query)}return function(f,g,P,S){const T=new im(S),N=new Jg(g,T,P);return f.asyncQueue.enqueueAndForget(async()=>Gg(await kc(f),N)),()=>{T.Qa(),f.asyncQueue.enqueueAndForget(async()=>Qg(await kc(f),N))}}(Zl(l),u,a,c)}function Am(t,e){return function(r,s){const i=new $t;return r.asyncQueue.enqueueAndForget(async()=>HA(await n0(r),s,i)),i.promise}(Zl(t),e)}function A0(t,e,n){const r=n.docs.get(e._key),s=new lu(t);return new Tm(t,s,e._key,r,new as(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){jr=s})(Fr),Pr(new zn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new xr(new RT(r.getProvider("auth-internal")),new CT(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new V(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ls(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),dn(bh,"4.6.0",e),dn(bh,"4.6.0","esm2017")})();function uu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Rm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const R0=Rm,Sm=new Ws("auth","Firebase",Rm());/**
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
 */const fo=new rl("@firebase/auth");function S0(t,...e){fo.logLevel<=Y.WARN&&fo.warn(`Auth (${Fr}): ${t}`,...e)}function Bi(t,...e){fo.logLevel<=Y.ERROR&&fo.error(`Auth (${Fr}): ${t}`,...e)}/**
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
 */function yt(t,...e){throw hu(t,...e)}function kt(t,...e){return hu(t,...e)}function Pm(t,e,n){const r=Object.assign(Object.assign({},R0()),{[e]:n});return new Ws("auth","Firebase",r).create(e,{appName:t.name})}function qt(t){return Pm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sm.create(t,...e)}function L(t,e,...n){if(!t)throw hu(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bi(e),new Error(e)}function zt(t,e){t||Ft(e)}/**
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
 */function Nc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function P0(){return gd()==="http:"||gd()==="https:"}function gd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function b0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(P0()||Xv()||"connection"in navigator)?navigator.onLine:!0}function C0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,zt(n>e,"Short delay should be less than long delay!"),this.isMobile=Jv()||Zv()}get(){return b0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function du(t,e){zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class bm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const D0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const V0=new ai(3e4,6e4);function An(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rn(t,e,n,r,s={}){return Cm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=zs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),bm.fetch()(Dm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Cm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},D0),e);try{const s=new N0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw bi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw bi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw bi(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Pm(t,u,l);yt(t,u)}}catch(s){if(s instanceof Gt)throw s;yt(t,"network-request-failed",{message:String(s)})}}async function ci(t,e,n,r,s={}){const i=await Rn(t,e,n,r,s);return"mfaPendingCredential"in i&&yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Dm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?du(t.config,s):`${t.config.apiScheme}://${s}`}function k0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class N0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),V0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=kt(t,e,r);return s.customData._tokenResponse=n,s}function md(t){return t!==void 0&&t.enterprise!==void 0}class O0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return k0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function x0(t,e){return Rn(t,"GET","/v2/recaptchaConfig",An(t,e))}/**
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
 */async function M0(t,e){return Rn(t,"POST","/v1/accounts:delete",e)}async function Vm(t,e){return Rn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function vs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function L0(t,e=!1){const n=Ke(t),r=await n.getIdToken(e),s=fu(r);L(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:vs(Ua(s.auth_time)),issuedAtTime:vs(Ua(s.iat)),expirationTime:vs(Ua(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ua(t){return Number(t)*1e3}function fu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const s=qf(n);return s?JSON.parse(s):(Bi("Failed to decode base64 JWT payload"),null)}catch(s){return Bi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _d(t){const e=fu(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $s(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gt&&F0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function F0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class U0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Oc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vs(this.lastLoginAt),this.creationTime=vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function po(t){var e;const n=t.auth,r=await t.getIdToken(),s=await $s(t,Vm(n,{idToken:r}));L(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?km(i.providerUserInfo):[],a=j0(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Oc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function B0(t){const e=Ke(t);await po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function j0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function km(t){return t.map(e=>{var{providerId:n}=e,r=uu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $0(t,e){const n=await Cm(t,{},async()=>{const r=zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Dm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function q0(t,e){return Rn(t,"POST","/v2/accounts:revokeToken",An(t,e))}/**
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
 */class Tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_d(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){L(e.length!==0,"internal-error");const n=_d(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await $0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Tr;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tr,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
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
 */function Yt(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ut{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=uu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new U0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Oc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $s(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return L0(this,e)}reload(){return B0(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(St(this.auth.app))return Promise.reject(qt(this.auth));const e=await this.getIdToken();return await $s(this,M0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,N=(l=n.createdAt)!==null&&l!==void 0?l:void 0,Z=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:ee,isAnonymous:se,providerData:H,stsTokenManager:_e}=n;L(F&&_e,e,"internal-error");const K=Tr.fromJSON(this.name,_e);L(typeof F=="string",e,"internal-error"),Yt(h,e.name),Yt(f,e.name),L(typeof ee=="boolean",e,"internal-error"),L(typeof se=="boolean",e,"internal-error"),Yt(g,e.name),Yt(P,e.name),Yt(S,e.name),Yt(T,e.name),Yt(N,e.name),Yt(Z,e.name);const G=new Ut({uid:F,auth:e,email:f,emailVerified:ee,displayName:h,isAnonymous:se,photoURL:P,phoneNumber:g,tenantId:S,stsTokenManager:K,createdAt:N,lastLoginAt:Z});return H&&Array.isArray(H)&&(G.providerData=H.map(ye=>Object.assign({},ye))),T&&(G._redirectEventId=T),G}static async _fromIdTokenResponse(e,n,r=!1){const s=new Tr;s.updateFromServerResponse(n);const i=new Ut({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await po(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];L(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?km(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Tr;a.updateFromIdToken(r);const c=new Ut({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Oc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const yd=new Map;function Bt(t){zt(t instanceof Function,"Expected a class definition");let e=yd.get(t);return e?(zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yd.set(t,e),e)}/**
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
 */class Nm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nm.type="NONE";const vd=Nm;/**
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
 */function ji(t,e,n){return`firebase:${t}:${e}:${n}`}class wr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ji(this.userKey,s.apiKey,i),this.fullPersistenceKey=ji("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wr(Bt(vd),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Bt(vd);const o=ji(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ut._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new wr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new wr(i,e,r))}}/**
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
 */function Ed(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Om(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fm(e))return"Blackberry";if(Um(e))return"Webos";if(pu(e))return"Safari";if((e.includes("chrome/")||xm(e))&&!e.includes("edge/"))return"Chrome";if(Lm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Om(t=Se()){return/firefox\//i.test(t)}function pu(t=Se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xm(t=Se()){return/crios\//i.test(t)}function Mm(t=Se()){return/iemobile/i.test(t)}function Lm(t=Se()){return/android/i.test(t)}function Fm(t=Se()){return/blackberry/i.test(t)}function Um(t=Se()){return/webos/i.test(t)}function sa(t=Se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function H0(t=Se()){var e;return sa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function W0(){return eE()&&document.documentMode===10}function Bm(t=Se()){return sa(t)||Lm(t)||Um(t)||Fm(t)||/windows phone/i.test(t)||Mm(t)}function z0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function jm(t,e=[]){let n;switch(t){case"Browser":n=Ed(Se());break;case"Worker":n=`${Ed(Se())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fr}/${r}`}/**
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
 */class K0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function G0(t,e={}){return Rn(t,"GET","/v2/passwordPolicy",An(t,e))}/**
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
 */const Q0=6;class J0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Q0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Y0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Id(this),this.idTokenSubscription=new Id(this),this.beforeStateQueue=new K0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await wr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vm(this,{idToken:e}),r=await Ut._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(St(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await po(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(St(this.app))return Promise.reject(qt(this));const n=e?Ke(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return St(this.app)?Promise.reject(qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return St(this.app)?Promise.reject(qt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await G0(this),n=new J0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ws("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await q0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await wr.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&S0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rr(t){return Ke(t)}class Id{constructor(e){this.auth=e,this.observer=null,this.addObserver=aE(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ia={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function X0(t){ia=t}function $m(t){return ia.loadJS(t)}function Z0(){return ia.recaptchaEnterpriseScript}function eR(){return ia.gapiScript}function tR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const nR="recaptcha-enterprise",rR="NO_RECAPTCHA";class sR{constructor(e){this.type=nR,this.auth=rr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{x0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new O0(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;md(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(rR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&md(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Z0();c.length!==0&&(c+=a),$m(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Td(t,e,n,r=!1){const s=new sR(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function xc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Td(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Td(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function iR(t,e){const n=il(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Yi(i,e??{}))return s;yt(s,"already-initialized")}return n.initialize({options:e})}function oR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function aR(t,e,n){const r=rr(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=qm(e),{host:o,port:a}=cR(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||lR()}function qm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cR(t){const e=qm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:wd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:wd(o)}}}function wd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class gu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}async function uR(t,e){return Rn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function hR(t,e){return ci(t,"POST","/v1/accounts:signInWithPassword",An(t,e))}/**
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
 */async function dR(t,e){return ci(t,"POST","/v1/accounts:signInWithEmailLink",An(t,e))}async function fR(t,e){return ci(t,"POST","/v1/accounts:signInWithEmailLink",An(t,e))}/**
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
 */class qs extends gu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new qs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xc(e,n,"signInWithPassword",hR);case"emailLink":return dR(e,{email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xc(e,r,"signUpPassword",uR);case"emailLink":return fR(e,{idToken:n,email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ar(t,e){return ci(t,"POST","/v1/accounts:signInWithIdp",An(t,e))}/**
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
 */const pR="http://localhost";class Yn extends gu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=uu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Yn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ar(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ar(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ar(e,n)}buildRequest(){const e={requestUri:pR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zs(n)}return e}}/**
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
 */function gR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mR(t){const e=ts(ns(t)).link,n=e?ts(ns(e)).deep_link_id:null,r=ts(ns(t)).deep_link_id;return(r?ts(ns(r)).link:null)||r||n||e||t}class mu{constructor(e){var n,r,s,i,o,a;const c=ts(ns(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=gR((s=c.mode)!==null&&s!==void 0?s:null);L(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mR(e);try{return new mu(n)}catch{return null}}}/**
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
 */class zr{constructor(){this.providerId=zr.PROVIDER_ID}static credential(e,n){return qs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=mu.parseLink(n);return L(r,"argument-error"),qs._fromEmailAndCode(e,r.code,r.tenantId)}}zr.PROVIDER_ID="password";zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Hm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class li extends Hm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class nn extends li{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
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
 */class rn extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
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
 */class sn extends li{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
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
 */class on extends li{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return on.credential(n,r)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
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
 */async function _R(t,e){return ci(t,"POST","/v1/accounts:signUp",An(t,e))}/**
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
 */class Xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ut._fromIdTokenResponse(e,r,s),o=Ad(r);return new Xn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ad(r);return new Xn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ad(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class go extends Gt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new go(e,n,r,s)}}function Wm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?go._fromErrorAndOperation(t,i,e,r):i})}async function yR(t,e,n=!1){const r=await $s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xn._forOperation(t,"link",r)}/**
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
 */async function vR(t,e,n=!1){const{auth:r}=t;if(St(r.app))return Promise.reject(qt(r));const s="reauthenticate";try{const i=await $s(t,Wm(r,s,e,t),n);L(i.idToken,r,"internal-error");const o=fu(i.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),Xn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&yt(r,"user-mismatch"),i}}/**
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
 */async function zm(t,e,n=!1){if(St(t.app))return Promise.reject(qt(t));const r="signIn",s=await Wm(t,r,e),i=await Xn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ER(t,e){return zm(rr(t),e)}/**
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
 */async function Km(t){const e=rr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function IR(t,e,n){if(St(t.app))return Promise.reject(qt(t));const r=rr(t),o=await xc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_R).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Km(t),c}),a=await Xn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function TR(t,e,n){return St(t.app)?Promise.reject(qt(t)):ER(Ke(t),zr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Km(t),r})}function wR(t,e,n,r){return Ke(t).onIdTokenChanged(e,n,r)}function AR(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}function RR(t,e,n,r){return Ke(t).onAuthStateChanged(e,n,r)}function SR(t){return Ke(t).signOut()}const mo="__sak";/**
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
 */class Gm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mo,"1"),this.storage.removeItem(mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function PR(){const t=Se();return pu(t)||sa(t)}const bR=1e3,CR=10;class Qm extends Gm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=PR()&&z0(),this.fallbackToPolling=Bm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);W0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,CR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qm.type="LOCAL";const DR=Qm;/**
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
 */class Jm extends Gm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jm.type="SESSION";const Ym=Jm;/**
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
 */function VR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new oa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await VR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oa.receivers=[];/**
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
 */function _u(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class kR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=_u("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nt(){return window}function NR(t){Nt().location.href=t}/**
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
 */function Xm(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function OR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MR(){return Xm()?self:null}/**
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
 */const Zm="firebaseLocalStorageDb",LR=1,_o="firebaseLocalStorage",e_="fbase_key";class ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function aa(t,e){return t.transaction([_o],e?"readwrite":"readonly").objectStore(_o)}function FR(){const t=indexedDB.deleteDatabase(Zm);return new ui(t).toPromise()}function Mc(){const t=indexedDB.open(Zm,LR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_o,{keyPath:e_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_o)?e(r):(r.close(),await FR(),e(await Mc()))})})}async function Rd(t,e,n){const r=aa(t,!0).put({[e_]:e,value:n});return new ui(r).toPromise()}async function UR(t,e){const n=aa(t,!1).get(e),r=await new ui(n).toPromise();return r===void 0?null:r.value}function Sd(t,e){const n=aa(t,!0).delete(e);return new ui(n).toPromise()}const BR=800,jR=3;class t_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oa._getInstance(MR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OR(),!this.activeServiceWorker)return;this.sender=new kR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mc();return await Rd(e,mo,"1"),await Sd(e,mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=aa(s,!1).getAll();return new ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}t_.type="LOCAL";const $R=t_;new ai(3e4,6e4);/**
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
 */function qR(t,e){return e?Bt(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yu extends gu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ar(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ar(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HR(t){return zm(t.auth,new yu(t),t.bypassAuthState)}function WR(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),vR(n,new yu(t),t.bypassAuthState)}async function zR(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),yR(n,new yu(t),t.bypassAuthState)}/**
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
 */class n_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HR;case"linkViaPopup":case"linkViaRedirect":return zR;case"reauthViaPopup":case"reauthViaRedirect":return WR;default:yt(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const KR=new ai(2e3,1e4);class pr extends n_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=_u();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KR.get())};e()}}pr.currentPopupAction=null;/**
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
 */const GR="pendingRedirect",$i=new Map;class QR extends n_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$i.get(this.auth._key());if(!e){try{const r=await JR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$i.set(this.auth._key(),e)}return this.bypassAuthState||$i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JR(t,e){const n=ZR(e),r=XR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function YR(t,e){$i.set(t._key(),e)}function XR(t){return Bt(t._redirectPersistence)}function ZR(t){return ji(GR,t.config.apiKey,t.name)}async function eS(t,e,n=!1){if(St(t.app))return Promise.reject(qt(t));const r=rr(t),s=qR(r,e),o=await new QR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const tS=10*60*1e3;class nS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!r_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pd(e))}saveEventToCache(e){this.cachedEventUids.add(Pd(e)),this.lastProcessedEventTime=Date.now()}}function Pd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function r_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return r_(t);default:return!1}}/**
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
 */async function sS(t,e={}){return Rn(t,"GET","/v1/projects",e)}/**
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
 */const iS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oS=/^https?/;async function aS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sS(t);for(const n of e)try{if(cS(n))return}catch{}yt(t,"unauthorized-domain")}function cS(t){const e=Nc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!oS.test(n))return!1;if(iS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const lS=new ai(3e4,6e4);function bd(){const t=Nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uS(t){return new Promise((e,n)=>{var r,s,i;function o(){bd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bd(),n(kt(t,"network-request-failed"))},timeout:lS.get()})}if(!((s=(r=Nt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Nt().gapi)===null||i===void 0)&&i.load)o();else{const a=tR("iframefcb");return Nt()[a]=()=>{gapi.load?o():n(kt(t,"network-request-failed"))},$m(`${eR()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw qi=null,e})}let qi=null;function hS(t){return qi=qi||uS(t),qi}/**
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
 */const dS=new ai(5e3,15e3),fS="__/auth/iframe",pS="emulator/auth/iframe",gS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _S(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?du(e,pS):`https://${t.config.authDomain}/${fS}`,r={apiKey:e.apiKey,appName:t.name,v:Fr},s=mS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zs(r).slice(1)}`}async function yS(t){const e=await hS(t),n=Nt().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:_S(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),a=Nt().setTimeout(()=>{i(o)},dS.get());function c(){Nt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const vS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ES=500,IS=600,TS="_blank",wS="http://localhost";class Cd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AS(t,e,n,r=ES,s=IS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vS),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Se().toLowerCase();n&&(a=xm(l)?TS:n),Om(l)&&(e=e||wS,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,P])=>`${f}${g}=${P},`,"");if(H0(l)&&a!=="_self")return RS(e||"",a),new Cd(null);const h=window.open(e||"",a,u);L(h,t,"popup-blocked");try{h.focus()}catch{}return new Cd(h)}function RS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SS="__/auth/handler",PS="emulator/auth/handler",bS=encodeURIComponent("fac");async function Dd(t,e,n,r,s,i){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fr,eventId:s};if(e instanceof Hm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",oE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof li){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${bS}=${encodeURIComponent(c)}`:"";return`${CS(t)}?${zs(a).slice(1)}${l}`}function CS({config:t}){return t.emulator?du(t,PS):`https://${t.authDomain}/${SS}`}/**
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
 */const Ba="webStorageSupport";class DS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ym,this._completeRedirectFn=eS,this._overrideRedirectResult=YR}async _openPopup(e,n,r,s){var i;zt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Dd(e,n,r,Nc(),s);return AS(e,o,_u())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Dd(e,n,r,Nc(),s);return NR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(zt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yS(e),r=new nS(e);return n.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ba,{type:Ba},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ba];o!==void 0&&n(!!o),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bm()||pu()||sa()}}const VS=DS;var Vd="@firebase/auth",kd="1.7.1";/**
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
 */class kS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function NS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OS(t){Pr(new zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jm(t)},l=new Y0(r,s,i,c);return oR(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pr(new zn("auth-internal",e=>{const n=rr(e.getProvider("auth").getImmediate());return(r=>new kS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(Vd,kd,NS(t)),dn(Vd,kd,"esm2017")}/**
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
 */const xS=5*60,MS=zf("authIdTokenMaxAge")||xS;let Nd=null;const LS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MS)return;const s=n==null?void 0:n.token;Nd!==s&&(Nd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function FS(t=Yf()){const e=il(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iR(t,{popupRedirectResolver:VS,persistence:[$R,DR,Ym]}),r=zf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=LS(i.toString());AR(n,o,()=>o(n.currentUser)),wR(n,a=>o(a))}}const s=Hf("auth");return s&&aR(n,`http://${s}`),n}function US(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}X0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=kt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",US().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OS("Browser");const BS={apiKey:"AIzaSyAIP1OWXpOP6Qgo6dn0pCdJD86J1VOJHRw",authDomain:"testing-73cb9.firebaseapp.com",projectId:"testing-73cb9",storageBucket:"testing-73cb9.appspot.com",messagingSenderId:"158565699872",appId:"1:158565699872:web:35ffdb6e4e6b2af89e8745"},s_=Jf(BS),Ci=a0(s_),Hi=FS(s_),jS={class:"flex items-center gap-3"},$S={__name:"Welcome",props:{email:String},setup(t){const e=async()=>{try{await SR(Hi)}catch(n){console.log(n.message)}};return(n,r)=>(Je(),ht("div",jS,[le("p",null,"Welcome "+Es(t.email)+"!",1),ge(Wn,{onClick:e,label:"sign out"})]))}},qS={class:"text-green-700 uppercase mb-2"},hi={__name:"Heading",props:{text:String},setup(t){return(e,n)=>(Je(),ht("h2",qS,Es(t.text),1))}},Kr=Fv("ContactStore",()=>{const t=at(null),e=at(!0),n=at([]),r=at(""),s=at(""),i=at(""),o=at(""),a=at(""),c=at(""),l=at(""),u=async T=>{T.preventDefault();try{await IR(Hi,c.value,l.value),c.value="",l.value=""}catch(N){console.log(N.message),c.value="",l.value=""}},h=async T=>{T.preventDefault();try{await TR(Hi,o.value,a.value),o.value="",a.value=""}catch(N){console.log(N.message),o.value="",a.value=""}};RR(Hi,T=>{t.value=T});const f=async()=>{const T=await E0(hd(Fa(Ci,"contacts"),dd("name")));n.value=[...T.docs]};w0(hd(Fa(Ci,"contacts"),dd("name")),T=>{n.value=[...T.docs]});const g=async T=>{T.preventDefault();try{await T0(Fa(Ci,"contacts"),{name:r.value,phNumber:s.value}),r.value="",s.value=""}catch(N){console.error("Error fetching contacts:",N)}},P=async T=>{try{await I0(lm(Ci,"contacts",T))}catch(N){console.error("Error fetching contacts:",N)}},S=nl(()=>n.value.filter(T=>T.data().name.toLowerCase().includes(i.value.trim().toLowerCase())));return{loginUser:t,isSignInForm:e,email:o,password:a,regEmail:c,regPassword:l,handleSignUp:u,handleSignIn:h,filteredContacts:S,search:i,name:r,phNumber:s,fetchContactList:f,addContacts:g,deleteContacts:P}}),HS={className:"mb-10"},WS=le("label",{htmlFor:"search"},"search: ",-1),zS={__name:"SearchContacts",setup(t){const e=Kr();return(n,r)=>(Je(),ht("div",HS,[ge(hi,{text:"phonebook"}),le("form",null,[WS,$n(le("input",{type:"text",id:"search","onUpdate:modelValue":r[0]||(r[0]=s=>ne(e).search=s)},null,512),[[Hn,ne(e).search]])])]))}},KS=le("label",{htmlFor:"name"},"name: ",-1),GS=le("label",{htmlFor:"number"},"number: ",-1),QS={__name:"AddContacts",setup(t){const e=Kr();return(n,r)=>(Je(),ht(Ze,null,[ge(hi,{text:"add a new contact"}),le("form",{className:"flex justify-start items-center gap-2",onSubmit:r[2]||(r[2]=(...s)=>ne(e).addContacts&&ne(e).addContacts(...s))},[le("div",null,[KS,$n(le("input",{id:"name",type:"text",required:"","onUpdate:modelValue":r[0]||(r[0]=s=>ne(e).name=s)},null,512),[[Hn,ne(e).name]])]),le("div",null,[GS,$n(le("input",{className:"my-2",id:"number",type:"text",pattern:"[0-9]{2}-[0-9]{5}",title:`Please
			enter a number in the format xx-xxxxx`,"onUpdate:modelValue":r[1]||(r[1]=s=>ne(e).phNumber=s)},null,512),[[Hn,ne(e).phNumber]])]),ge(Wn,{label:"+ add"})],32)],64))}},JS={className:"pl-0 m-0 "},YS={__name:"DisplayContacts",setup(t){const e=Kr();return e.fetchContactList(),(n,r)=>(Je(),ht(Ze,null,[ge(hi,{text:"contacts"}),le("ul",JS,[(Je(!0),ht(Ze,null,wy(ne(e).filteredContacts,s=>(Je(),ht("li",{className:"list-[square] leading-relaxed flex items-center gap-2",key:s.id},[Of(Es(s.data().name)+" "+Es(s.data().phNumber)+" ",1),ge(Wn,{onClick:i=>ne(e).deleteContacts(s.id),label:"x"},null,8,["onClick"])]))),128))])],64))}},XS=le("label",{htmlFor:"reg-email"},"name: ",-1),ZS=le("label",{htmlFor:"reg-password"},"number: ",-1),eP={__name:"SignUp",setup(t){const e=Kr();return(n,r)=>(Je(),ht(Ze,null,[ge(hi,{text:"sign up"}),le("form",{className:"flex justify-start items-center gap-2",onSubmit:r[2]||(r[2]=(...s)=>ne(e).handleSignUp&&ne(e).handleSignUp(...s))},[le("div",null,[XS,$n(le("input",{id:"reg-email",type:"text",required:"","onUpdate:modelValue":r[0]||(r[0]=s=>ne(e).regEmail=s)},null,512),[[Hn,ne(e).regEmail]])]),le("div",null,[ZS,$n(le("input",{className:"my-2",id:"reg-password",type:"password","onUpdate:modelValue":r[1]||(r[1]=s=>ne(e).regPassword=s)},null,512),[[Hn,ne(e).regPassword]])]),ge(Wn,{label:"register"})],32),ge(Wn,{label:"sign in",onClick:r[3]||(r[3]=s=>ne(e).isSignInForm=!ne(e).isSignInForm)})],64))}},tP=le("label",{htmlFor:"email"},"name: ",-1),nP=le("label",{htmlFor:"password"},"number: ",-1),rP={__name:"SignIn",setup(t){const e=Kr();return(n,r)=>(Je(),ht(Ze,null,[ge(hi,{text:"sign in"}),le("form",{className:"flex justify-start items-center gap-2",onSubmit:r[2]||(r[2]=(...s)=>ne(e).handleSignIn&&ne(e).handleSignIn(...s))},[le("div",null,[tP,$n(le("input",{id:"email",type:"text",required:"","onUpdate:modelValue":r[0]||(r[0]=s=>ne(e).email=s)},null,512),[[Hn,ne(e).email]])]),le("div",null,[nP,$n(le("input",{className:"my-2",id:"password",type:"password","onUpdate:modelValue":r[1]||(r[1]=s=>ne(e).password=s)},null,512),[[Hn,ne(e).password]])]),ge(Wn,{label:"sign in"})],32),ge(Wn,{label:"sign up",onClick:r[3]||(r[3]=s=>ne(e).isSignInForm=!ne(e).isSignInForm)})],64))}},sP={class:"font-[Roboto] p-4"},iP={key:2},oP={__name:"App",setup(t){const e=Kr();return e.fetchContactList(),(n,r)=>{var s;return Je(),ht("main",sP,[!ne(e).loginUser&&!ne(e).isSignInForm?(Je(),Xa(eP,{key:0})):_a("",!0),!ne(e).loginUser&&ne(e).isSignInForm?(Je(),Xa(rP,{key:1})):_a("",!0),ne(e).loginUser?(Je(),ht("div",iP,[ge($S,{email:(s=ne(e).loginUser)==null?void 0:s.email},null,8,["email"]),ge(zS),ge(QS),ge(YS)])):_a("",!0)])}}};bv(oP).use(kv()).mount("#app");
