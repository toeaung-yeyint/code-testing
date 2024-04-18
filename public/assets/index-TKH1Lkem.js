const __vite__fileDeps=["assets/Welcome-uTBacHQK.js","assets/AppButton-DIFT7bLa.js","assets/AddContacts-ByTNsD1O.js","assets/DisplayContacts-BpD7qBcj.js","assets/SignInView-BtbRMtYg.js","assets/SignUpView-TYEENRSJ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ll(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const ve={},Pr=[],Et=()=>{},cy=()=>!1,Mo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ul=t=>t.startsWith("onUpdate:"),We=Object.assign,hl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ly=Object.prototype.hasOwnProperty,oe=(t,e)=>ly.call(t,e),W=Array.isArray,Cr=t=>Fo(t)==="[object Map]",Pf=t=>Fo(t)==="[object Set]",Y=t=>typeof t=="function",Ve=t=>typeof t=="string",ur=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",Cf=t=>(Ae(t)||Y(t))&&Y(t.then)&&Y(t.catch),bf=Object.prototype.toString,Fo=t=>bf.call(t),uy=t=>Fo(t).slice(8,-1),kf=t=>Fo(t)==="[object Object]",dl=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Es=ll(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hy=/-(\w)/g,Ht=Uo(t=>t.replace(hy,(e,n)=>n?n.toUpperCase():"")),dy=/\B([A-Z])/g,Jr=Uo(t=>t.replace(dy,"-$1").toLowerCase()),Bo=Uo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pa=Uo(t=>t?`on${Bo(t)}`:""),kn=(t,e)=>!Object.is(t,e),Ji=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Df=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ac=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xu;const Of=()=>Xu||(Xu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fl(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ve(r)?my(r):fl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ve(t)||Ae(t))return t}const fy=/;(?![^(]*\))/g,py=/:([^]+)/,gy=/\/\*[^]*?\*\//g;function my(t){const e={};return t.replace(gy,"").split(fy).forEach(n=>{if(n){const r=n.split(py);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function pl(t){let e="";if(Ve(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const r=pl(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yy=ll(_y);function Vf(t){return!!t||t===""}const vy=t=>Ve(t)?t:t==null?"":W(t)||Ae(t)&&(t.toString===bf||!Y(t.toString))?JSON.stringify(t,Nf,2):String(t),Nf=(t,e)=>e&&e.__v_isRef?Nf(t,e.value):Cr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ca(r,i)+" =>"]=s,n),{})}:Pf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ca(n))}:ur(e)?Ca(e):Ae(e)&&!W(e)&&!kf(e)?String(e):e,Ca=(t,e="")=>{var n;return ur(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ht;class xf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ht,!e&&ht&&(this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ht;try{return ht=this,e()}finally{ht=n}}}on(){ht=this}off(){ht=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Lf(t){return new xf(t)}function Ey(t,e=ht){e&&e.active&&e.effects.push(t)}function Mf(){return ht}function Iy(t){ht&&ht.cleanups.push(t)}let Zn;class gl{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ey(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Nn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(wy(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),xn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Tn,n=Zn;try{return Tn=!0,Zn=this,this._runnings++,Zu(this),this.fn()}finally{eh(this),this._runnings--,Zn=n,Tn=e}}stop(){var e;this.active&&(Zu(this),eh(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function wy(t){return t.value}function Zu(t){t._trackId++,t._depsLength=0}function eh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ff(t.deps[e],t);t.deps.length=t._depsLength}}function Ff(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Tn=!0,cc=0;const Uf=[];function Nn(){Uf.push(Tn),Tn=!1}function xn(){const t=Uf.pop();Tn=t===void 0?!0:t}function ml(){cc++}function _l(){for(cc--;!cc&&lc.length;)lc.shift()()}function Bf(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Ff(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const lc=[];function jf(t,e,n){ml();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&lc.push(r.scheduler)))}_l()}const $f=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},uo=new WeakMap,er=Symbol(""),uc=Symbol("");function ct(t,e,n){if(Tn&&Zn){let r=uo.get(t);r||uo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=$f(()=>r.delete(n))),Bf(Zn,s)}}function en(t,e,n,r,s,i){const o=uo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!ur(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?dl(n)&&a.push(o.get("length")):(a.push(o.get(er)),Cr(t)&&a.push(o.get(uc)));break;case"delete":W(t)||(a.push(o.get(er)),Cr(t)&&a.push(o.get(uc)));break;case"set":Cr(t)&&a.push(o.get(er));break}ml();for(const c of a)c&&jf(c,4);_l()}function Ty(t,e){var n;return(n=uo.get(t))==null?void 0:n.get(e)}const Ay=ll("__proto__,__v_isRef,__isVue"),qf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ur)),th=Ry();function Ry(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ae(this);for(let i=0,o=this.length;i<o;i++)ct(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ae)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Nn(),ml();const r=ae(this)[e].apply(this,n);return _l(),xn(),r}}),t}function Sy(t){ur(t)||(t=String(t));const e=ae(this);return ct(e,"has",t),e.hasOwnProperty(t)}class Hf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Uy:Gf:i?Kf:zf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=W(e);if(!s){if(o&&oe(th,n))return Reflect.get(th,n,r);if(n==="hasOwnProperty")return Sy}const a=Reflect.get(e,n,r);return(ur(n)?qf.has(n):Ay(n))||(s||ct(e,"get",n),i)?a:Ne(a)?o&&dl(n)?a:a.value:Ae(a)?s?Jf(a):ci(a):a}}class Wf extends Hf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Ls(i);if(!ho(r)&&!Ls(r)&&(i=ae(i),r=ae(r)),!W(e)&&Ne(i)&&!Ne(r))return c?!1:(i.value=r,!0)}const o=W(e)&&dl(n)?Number(n)<e.length:oe(e,n),a=Reflect.set(e,n,r,s);return e===ae(s)&&(o?kn(r,i)&&en(e,"set",n,r):en(e,"add",n,r)),a}deleteProperty(e,n){const r=oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&en(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ur(n)||!qf.has(n))&&ct(e,"has",n),r}ownKeys(e){return ct(e,"iterate",W(e)?"length":er),Reflect.ownKeys(e)}}class Py extends Hf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Cy=new Wf,by=new Py,ky=new Wf(!0),yl=t=>t,jo=t=>Reflect.getPrototypeOf(t);function Vi(t,e,n=!1,r=!1){t=t.__v_raw;const s=ae(t),i=ae(e);n||(kn(e,i)&&ct(s,"get",e),ct(s,"get",i));const{has:o}=jo(s),a=r?yl:n?wl:Ms;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ni(t,e=!1){const n=this.__v_raw,r=ae(n),s=ae(t);return e||(kn(t,s)&&ct(r,"has",t),ct(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function xi(t,e=!1){return t=t.__v_raw,!e&&ct(ae(t),"iterate",er),Reflect.get(t,"size",t)}function nh(t){t=ae(t);const e=ae(this);return jo(e).has.call(e,t)||(e.add(t),en(e,"add",t,t)),this}function rh(t,e){e=ae(e);const n=ae(this),{has:r,get:s}=jo(n);let i=r.call(n,t);i||(t=ae(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?kn(e,o)&&en(n,"set",t,e):en(n,"add",t,e),this}function sh(t){const e=ae(this),{has:n,get:r}=jo(e);let s=n.call(e,t);s||(t=ae(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&en(e,"delete",t,void 0),i}function ih(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&en(t,"clear",void 0,void 0),n}function Li(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ae(o),c=e?yl:t?wl:Ms;return!t&&ct(a,"iterate",er),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Mi(t,e,n){return function(...r){const s=this.__v_raw,i=ae(s),o=Cr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?yl:e?wl:Ms;return!e&&ct(i,"iterate",c?uc:er),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function un(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Dy(){const t={get(i){return Vi(this,i)},get size(){return xi(this)},has:Ni,add:nh,set:rh,delete:sh,clear:ih,forEach:Li(!1,!1)},e={get(i){return Vi(this,i,!1,!0)},get size(){return xi(this)},has:Ni,add:nh,set:rh,delete:sh,clear:ih,forEach:Li(!1,!0)},n={get(i){return Vi(this,i,!0)},get size(){return xi(this,!0)},has(i){return Ni.call(this,i,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:Li(!0,!1)},r={get(i){return Vi(this,i,!0,!0)},get size(){return xi(this,!0)},has(i){return Ni.call(this,i,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:Li(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Mi(i,!1,!1),n[i]=Mi(i,!0,!1),e[i]=Mi(i,!1,!0),r[i]=Mi(i,!0,!0)}),[t,n,e,r]}const[Oy,Vy,Ny,xy]=Dy();function vl(t,e){const n=e?t?xy:Ny:t?Vy:Oy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(oe(n,s)&&s in r?n:r,s,i)}const Ly={get:vl(!1,!1)},My={get:vl(!1,!0)},Fy={get:vl(!0,!1)},zf=new WeakMap,Kf=new WeakMap,Gf=new WeakMap,Uy=new WeakMap;function By(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jy(t){return t.__v_skip||!Object.isExtensible(t)?0:By(uy(t))}function ci(t){return Ls(t)?t:El(t,!1,Cy,Ly,zf)}function Qf(t){return El(t,!1,ky,My,Kf)}function Jf(t){return El(t,!0,by,Fy,Gf)}function El(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=jy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function tr(t){return Ls(t)?tr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ls(t){return!!(t&&t.__v_isReadonly)}function ho(t){return!!(t&&t.__v_isShallow)}function Yf(t){return t?!!t.__v_raw:!1}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function Il(t){return Object.isExtensible(t)&&Df(t,"__v_skip",!0),t}const Ms=t=>Ae(t)?ci(t):t,wl=t=>Ae(t)?Jf(t):t;class Xf{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new gl(()=>e(this._value),()=>Yi(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ae(this);return(!e._cacheable||e.effect.dirty)&&kn(e._value,e._value=e.effect.run())&&Yi(e,4),Zf(e),e.effect._dirtyLevel>=2&&Yi(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function $y(t,e,n=!1){let r,s;const i=Y(t);return i?(r=t,s=Et):(r=t.get,s=t.set),new Xf(r,s,i||!s,n)}function Zf(t){var e;Tn&&Zn&&(t=ae(t),Bf(Zn,(e=t.dep)!=null?e:t.dep=$f(()=>t.dep=void 0,t instanceof Xf?t:void 0)))}function Yi(t,e=4,n){t=ae(t);const r=t.dep;r&&jf(r,e)}function Ne(t){return!!(t&&t.__v_isRef===!0)}function rt(t){return ep(t,!1)}function qy(t){return ep(t,!0)}function ep(t,e){return Ne(t)?t:new Hy(t,e)}class Hy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:Ms(e)}get value(){return Zf(this),this._value}set value(e){const n=this.__v_isShallow||ho(e)||Ls(e);e=n?e:ae(e),kn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ms(e),Yi(this,4))}}function _t(t){return Ne(t)?t.value:t}const Wy={get:(t,e,n)=>_t(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ne(s)&&!Ne(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function tp(t){return tr(t)?t:new Proxy(t,Wy)}function zy(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=Gy(t,n);return e}class Ky{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ty(ae(this._object),this._key)}}function Gy(t,e,n){const r=t[e];return Ne(r)?r:new Ky(t,e,n)}/**
* @vue/runtime-core v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function An(t,e,n,r){try{return r?t(...r):t()}catch(s){li(s,e,n)}}function At(t,e,n,r){if(Y(t)){const s=An(t,e,n,r);return s&&Cf(s)&&s.catch(i=>{li(i,e,n)}),s}if(W(t)){const s=[];for(let i=0;i<t.length;i++)s.push(At(t[i],e,n,r));return s}}function li(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Nn(),An(c,null,10,[t,o,a]),xn();return}}Qy(t,n,s,r)}function Qy(t,e,n,r=!0){console.error(t)}let Fs=!1,hc=!1;const Ye=[];let Vt=0;const br=[];let pn=null,Wn=0;const np=Promise.resolve();let Tl=null;function Al(t){const e=Tl||np;return t?e.then(this?t.bind(this):t):e}function Jy(t){let e=Vt+1,n=Ye.length;for(;e<n;){const r=e+n>>>1,s=Ye[r],i=Us(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function $o(t){(!Ye.length||!Ye.includes(t,Fs&&t.allowRecurse?Vt+1:Vt))&&(t.id==null?Ye.push(t):Ye.splice(Jy(t.id),0,t),rp())}function rp(){!Fs&&!hc&&(hc=!0,Tl=np.then(ip))}function Yy(t){const e=Ye.indexOf(t);e>Vt&&Ye.splice(e,1)}function Xy(t){W(t)?br.push(...t):(!pn||!pn.includes(t,t.allowRecurse?Wn+1:Wn))&&br.push(t),rp()}function oh(t,e,n=Fs?Vt+1:0){for(;n<Ye.length;n++){const r=Ye[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Ye.splice(n,1),n--,r()}}}function sp(t){if(br.length){const e=[...new Set(br)].sort((n,r)=>Us(n)-Us(r));if(br.length=0,pn){pn.push(...e);return}for(pn=e,Wn=0;Wn<pn.length;Wn++)pn[Wn]();pn=null,Wn=0}}const Us=t=>t.id==null?1/0:t.id,Zy=(t,e)=>{const n=Us(t)-Us(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ip(t){hc=!1,Fs=!0,Ye.sort(Zy);try{for(Vt=0;Vt<Ye.length;Vt++){const e=Ye[Vt];e&&e.active!==!1&&An(e,null,14)}}finally{Vt=0,Ye.length=0,sp(),Fs=!1,Tl=null,(Ye.length||br.length)&&ip()}}function ev(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ve;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||ve;d&&(s=n.map(p=>Ve(p)?p.trim():p)),h&&(s=n.map(ac))}let a,c=r[a=Pa(e)]||r[a=Pa(Ht(e))];!c&&i&&(c=r[a=Pa(Jr(e))]),c&&At(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,At(l,t,6,s)}}function op(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=l=>{const u=op(l,e,!0);u&&(a=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ae(t)&&r.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):We(o,i),Ae(t)&&r.set(t,o),o)}function qo(t,e){return!t||!Mo(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,Jr(e))||oe(t,e))}let st=null,ap=null;function fo(t){const e=st;return st=t,ap=t&&t.type.__scopeId||null,e}function dc(t,e=st,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&_h(-1);const i=fo(e);let o;try{o=t(...s)}finally{fo(i),r._d&&_h(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ba(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:_,inheritAttrs:y}=t;let E,S;const b=fo(t);try{if(n.shapeFlag&4){const K=s||r,ee=K;E=Ot(u.call(ee,K,h,i,p,d,_)),S=c}else{const K=e;E=Ot(K.length>1?K(i,{attrs:c,slots:a,emit:l}):K(i,null)),S=e.props?c:tv(c)}}catch(K){Ts.length=0,li(K,t,1),E=Re(Bs)}let F=E;if(S&&y!==!1){const K=Object.keys(S),{shapeFlag:ee}=F;K.length&&ee&7&&(o&&K.some(ul)&&(S=nv(S,o)),F=Mr(F,S))}return n.dirs&&(F=Mr(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),E=F,fo(b),E}const tv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mo(n))&&((e||(e={}))[n]=t[n]);return e},nv=(t,e)=>{const n={};for(const r in t)(!ul(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function rv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ah(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!qo(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ah(r,o,l):!0:!!o;return!1}function ah(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!qo(n,i))return!0}return!1}function sv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const cp="components";function lp(t,e){return ov(cp,t,!0,e)||t}const iv=Symbol.for("v-ndc");function ov(t,e,n=!0,r=!1){const s=st||Me;if(s){const i=s.type;if(t===cp){const a=tE(i,!1);if(a&&(a===e||a===Ht(e)||a===Bo(Ht(e))))return i}const o=ch(s[t]||i[t],e)||ch(s.appContext[t],e);return!o&&r?i:o}}function ch(t,e){return t&&(t[e]||t[Ht(e)]||t[Bo(Ht(e))])}const av=t=>t.__isSuspense;function cv(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Xy(t)}const lv=Symbol.for("v-scx"),uv=()=>Ft(lv),Fi={};function Is(t,e,n){return up(t,e,n)}function up(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=ve){if(e&&i){const $=e;e=(...de)=>{$(...de),ee()}}const c=Me,l=$=>r===!0?$:Kn($,r===!1?1:void 0);let u,h=!1,d=!1;if(Ne(t)?(u=()=>t.value,h=ho(t)):tr(t)?(u=()=>l(t),h=!0):W(t)?(d=!0,h=t.some($=>tr($)||ho($)),u=()=>t.map($=>{if(Ne($))return $.value;if(tr($))return l($);if(Y($))return An($,c,2)})):Y(t)?e?u=()=>An(t,c,2):u=()=>(p&&p(),At(t,c,3,[_])):u=Et,e&&r){const $=u;u=()=>Kn($())}let p,_=$=>{p=F.onStop=()=>{An($,c,4),p=F.onStop=void 0}},y;if(hi)if(_=Et,e?n&&At(e,c,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const $=uv();y=$.__watcherHandles||($.__watcherHandles=[])}else return Et;let E=d?new Array(t.length).fill(Fi):Fi;const S=()=>{if(!(!F.active||!F.dirty))if(e){const $=F.run();(r||h||(d?$.some((de,te)=>kn(de,E[te])):kn($,E)))&&(p&&p(),At(e,c,3,[$,E===Fi?void 0:d&&E[0]===Fi?[]:E,_]),E=$)}else F.run()};S.allowRecurse=!!e;let b;s==="sync"?b=S:s==="post"?b=()=>at(S,c&&c.suspense):(S.pre=!0,c&&(S.id=c.uid),b=()=>$o(S));const F=new gl(u,Et,b),K=Mf(),ee=()=>{F.stop(),K&&hl(K.effects,F)};return e?n?S():E=F.run():s==="post"?at(F.run.bind(F),c&&c.suspense):F.run(),y&&y.push(ee),ee}function hv(t,e,n){const r=this.proxy,s=Ve(t)?t.includes(".")?hp(r,t):()=>r[t]:t.bind(r,r);let i;Y(e)?i=e:(i=e.handler,n=e);const o=ui(this),a=up(s,i.bind(r),n);return o(),a}function hp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Kn(t,e,n=0,r){if(!Ae(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Ne(t))Kn(t.value,e,n,r);else if(W(t))for(let s=0;s<t.length;s++)Kn(t[s],e,n,r);else if(Pf(t)||Cr(t))t.forEach(s=>{Kn(s,e,n,r)});else if(kf(t))for(const s in t)Kn(t[s],e,n,r);return t}function rb(t,e){if(st===null)return t;const n=zo(st)||st.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=ve]=e[s];i&&(Y(i)&&(i={mounted:i,updated:i}),i.deep&&Kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function $n(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Nn(),At(c,n,8,[t.el,a,t,e]),xn())}}/*! #__NO_SIDE_EFFECTS__ */function Rl(t,e){return Y(t)?We({name:t.name},e,{setup:t}):t}const Xi=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Ui(t){Y(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=t;let c=null,l,u=0;const h=()=>(u++,c=null,d()),d=()=>{let p;return c||(p=c=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),a)return new Promise((y,E)=>{a(_,()=>y(h()),()=>E(_),u+1)});throw _}).then(_=>p!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),l=_,_)))};return Rl({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return l},setup(){const p=Me;if(l)return()=>ka(l,p);const _=b=>{c=null,li(b,p,13,!r)};if(o&&p.suspense||hi)return d().then(b=>()=>ka(b,p)).catch(b=>(_(b),()=>r?Re(r,{error:b}):null));const y=rt(!1),E=rt(),S=rt(!!s);return s&&setTimeout(()=>{S.value=!1},s),i!=null&&setTimeout(()=>{if(!y.value&&!E.value){const b=new Error(`Async component timed out after ${i}ms.`);_(b),E.value=b}},i),d().then(()=>{y.value=!0,p.parent&&Sl(p.parent.vnode)&&(p.parent.effect.dirty=!0,$o(p.parent.update))}).catch(b=>{_(b),E.value=b}),()=>{if(y.value&&l)return ka(l,p);if(E.value&&r)return Re(r,{error:E.value});if(n&&!S.value)return Re(n)}}})}function ka(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Re(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Sl=t=>t.type.__isKeepAlive;function dv(t,e){dp(t,"a",e)}function fv(t,e){dp(t,"da",e)}function dp(t,e,n=Me){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ho(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Sl(s.parent.vnode)&&pv(r,e,n,s),s=s.parent}}function pv(t,e,n,r){const s=Ho(e,t,r,!0);fp(()=>{hl(r[e],s)},n)}function Ho(t,e,n=Me,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Nn();const a=ui(n),c=At(e,n,t,o);return a(),xn(),c});return r?s.unshift(i):s.push(i),i}}const an=t=>(e,n=Me)=>(!hi||t==="sp")&&Ho(t,(...r)=>e(...r),n),gv=an("bm"),mv=an("m"),_v=an("bu"),yv=an("u"),vv=an("bum"),fp=an("um"),Ev=an("sp"),Iv=an("rtg"),wv=an("rtc");function Tv(t,e=Me){Ho("ec",t,e)}function sb(t,e,n,r){let s;const i=n&&n[r];if(W(t)||Ve(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const fc=t=>t?Sp(t)?zo(t)||t.proxy:fc(t.parent):null,ws=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fc(t.parent),$root:t=>fc(t.root),$emit:t=>t.emit,$options:t=>Pl(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,$o(t.update)}),$nextTick:t=>t.n||(t.n=Al.bind(t.proxy)),$watch:t=>hv.bind(t)}),Da=(t,e)=>t!==ve&&!t.__isScriptSetup&&oe(t,e),Av={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Da(r,e))return o[e]=1,r[e];if(s!==ve&&oe(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&oe(l,e))return o[e]=3,i[e];if(n!==ve&&oe(n,e))return o[e]=4,n[e];pc&&(o[e]=0)}}const u=ws[e];let h,d;if(u)return e==="$attrs"&&ct(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&oe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,oe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Da(s,e)?(s[e]=n,!0):r!==ve&&oe(r,e)?(r[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ve&&oe(t,o)||Da(e,o)||(a=i[0])&&oe(a,o)||oe(r,o)||oe(ws,o)||oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function lh(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let pc=!0;function Rv(t){const e=Pl(t),n=t.proxy,r=t.ctx;pc=!1,e.beforeCreate&&uh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:y,deactivated:E,beforeDestroy:S,beforeUnmount:b,destroyed:F,unmounted:K,render:ee,renderTracked:$,renderTriggered:de,errorCaptured:te,serverPrefetch:Z,expose:_e,inheritAttrs:ze,components:lt,directives:gt,filters:jn}=e;if(l&&Sv(l,r,null),o)for(const ge in o){const ue=o[ge];Y(ue)&&(r[ge]=ue.bind(n))}if(s){const ge=s.call(n,n);Ae(ge)&&(t.data=ci(ge))}if(pc=!0,i)for(const ge in i){const ue=i[ge],Kt=Y(ue)?ue.bind(n,n):Y(ue.get)?ue.get.bind(n,n):Et,ln=!Y(ue)&&Y(ue.set)?ue.set.bind(n):Et,bt=dt({get:Kt,set:ln});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>bt.value,set:ot=>bt.value=ot})}if(a)for(const ge in a)pp(a[ge],r,n,ge);if(c){const ge=Y(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(ue=>{Zi(ue,ge[ue])})}u&&uh(u,t,"c");function ce(ge,ue){W(ue)?ue.forEach(Kt=>ge(Kt.bind(n))):ue&&ge(ue.bind(n))}if(ce(gv,h),ce(mv,d),ce(_v,p),ce(yv,_),ce(dv,y),ce(fv,E),ce(Tv,te),ce(wv,$),ce(Iv,de),ce(vv,b),ce(fp,K),ce(Ev,Z),W(_e))if(_e.length){const ge=t.exposed||(t.exposed={});_e.forEach(ue=>{Object.defineProperty(ge,ue,{get:()=>n[ue],set:Kt=>n[ue]=Kt})})}else t.exposed||(t.exposed={});ee&&t.render===Et&&(t.render=ee),ze!=null&&(t.inheritAttrs=ze),lt&&(t.components=lt),gt&&(t.directives=gt)}function Sv(t,e,n=Et){W(t)&&(t=gc(t));for(const r in t){const s=t[r];let i;Ae(s)?"default"in s?i=Ft(s.from||r,s.default,!0):i=Ft(s.from||r):i=Ft(s),Ne(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function uh(t,e,n){At(W(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function pp(t,e,n,r){const s=r.includes(".")?hp(n,r):()=>n[r];if(Ve(t)){const i=e[t];Y(i)&&Is(s,i)}else if(Y(t))Is(s,t.bind(n));else if(Ae(t))if(W(t))t.forEach(i=>pp(i,e,n,r));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&Is(s,i,t)}}function Pl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>po(c,l,o,!0)),po(c,e,o)),Ae(e)&&i.set(e,c),c}function po(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&po(t,i,n,!0),s&&s.forEach(o=>po(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Pv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Pv={data:hh,props:dh,emits:dh,methods:ds,computed:ds,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:ds,directives:ds,watch:bv,provide:hh,inject:Cv};function hh(t,e){return e?t?function(){return We(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Cv(t,e){return ds(gc(t),gc(e))}function gc(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nt(t,e){return t?[...new Set([].concat(t,e))]:e}function ds(t,e){return t?We(Object.create(null),t,e):e}function dh(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:We(Object.create(null),lh(t),lh(e??{})):e}function bv(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const r in e)n[r]=nt(t[r],e[r]);return n}function gp(){return{app:null,config:{isNativeTag:cy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kv=0;function Dv(t,e){return function(r,s=null){Y(r)||(r=We({},r)),s!=null&&!Ae(s)&&(s=null);const i=gp(),o=new WeakSet;let a=!1;const c=i.app={_uid:kv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:rE,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Re(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,zo(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=kr;kr=c;try{return l()}finally{kr=u}}};return c}}let kr=null;function Zi(t,e){if(Me){let n=Me.provides;const r=Me.parent&&Me.parent.provides;r===n&&(n=Me.provides=Object.create(r)),n[t]=e}}function Ft(t,e,n=!1){const r=Me||st;if(r||kr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:kr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Y(e)?e.call(r&&r.proxy):e}}function Ov(){return!!(Me||st||kr)}const mp=Object.create(null),mc=()=>Object.create(mp),_p=t=>Object.getPrototypeOf(t)===mp;function Vv(t,e,n,r=!1){const s={},i=mc();t.propsDefaults=Object.create(null),yp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Qf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Nv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ae(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(qo(t.emitsOptions,d))continue;const p=e[d];if(c)if(oe(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const _=Ht(d);s[_]=_c(c,a,_,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{yp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!oe(e,h)&&((u=Jr(h))===h||!oe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=_c(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!oe(e,h))&&(delete i[h],l=!0)}l&&en(t.attrs,"set","")}function yp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Es(c))continue;const l=e[c];let u;s&&oe(s,u=Ht(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:qo(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ae(n),l=a||ve;for(let u=0;u<i.length;u++){const h=i[u];n[h]=_c(s,c,h,l[h],t,!oe(l,h))}}return o}function _c(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Y(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=ui(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Jr(n))&&(r=!0))}return r}function vp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const u=h=>{c=!0;const[d,p]=vp(h,e,!0);We(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ae(t)&&r.set(t,Pr),Pr;if(W(i))for(let u=0;u<i.length;u++){const h=Ht(i[u]);fh(h)&&(o[h]=ve)}else if(i)for(const u in i){const h=Ht(u);if(fh(h)){const d=i[u],p=o[h]=W(d)||Y(d)?{type:d}:We({},d);if(p){const _=mh(Boolean,p.type),y=mh(String,p.type);p[0]=_>-1,p[1]=y<0||_<y,(_>-1||oe(p,"default"))&&a.push(h)}}}const l=[o,a];return Ae(t)&&r.set(t,l),l}function fh(t){return t[0]!=="$"&&!Es(t)}function ph(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function gh(t,e){return ph(t)===ph(e)}function mh(t,e){return W(e)?e.findIndex(n=>gh(n,t)):Y(e)&&gh(e,t)?0:-1}const Ep=t=>t[0]==="_"||t==="$stable",Cl=t=>W(t)?t.map(Ot):[Ot(t)],xv=(t,e,n)=>{if(e._n)return e;const r=dc((...s)=>Cl(e(...s)),n);return r._c=!1,r},Ip=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ep(s))continue;const i=t[s];if(Y(i))e[s]=xv(s,i,r);else if(i!=null){const o=Cl(i);e[s]=()=>o}}},wp=(t,e)=>{const n=Cl(e);t.slots.default=()=>n},Lv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),Df(t.slots,"_",n)):Ip(e,t.slots=mc())}else t.slots=mc(),e&&wp(t,e)},Mv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(We(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ip(e,s)),o=e}else e&&(wp(t,e),o={default:1});if(i)for(const a in s)!Ep(a)&&o[a]==null&&delete s[a]};function yc(t,e,n,r,s=!1){if(W(t)){t.forEach((d,p)=>yc(d,e&&(W(e)?e[p]:e),n,r,s));return}if(Xi(r)&&!s)return;const i=r.shapeFlag&4?zo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ve(l)?(u[l]=null,oe(h,l)&&(h[l]=null)):Ne(l)&&(l.value=null)),Y(c))An(c,a,12,[o,u]);else{const d=Ve(c),p=Ne(c);if(d||p){const _=()=>{if(t.f){const y=d?oe(h,c)?h[c]:u[c]:c.value;s?W(y)&&hl(y,i):W(y)?y.includes(i)||y.push(i):d?(u[c]=[i],oe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,oe(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,at(_,n)):_()}}}const at=cv;function Fv(t){return Uv(t)}function Uv(t,e){const n=Of();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Et,insertStaticContent:_}=t,y=(f,g,m,T=null,v=null,C=null,N=void 0,P=null,k=!!g.dynamicChildren)=>{if(f===g)return;f&&!as(f,g)&&(T=I(f),ot(f,v,C,!0),f=null),g.patchFlag===-2&&(k=!1,g.dynamicChildren=null);const{type:R,ref:M,shapeFlag:q}=g;switch(R){case Wo:E(f,g,m,T);break;case Bs:S(f,g,m,T);break;case Va:f==null&&b(g,m,T,N);break;case Qt:lt(f,g,m,T,v,C,N,P,k);break;default:q&1?ee(f,g,m,T,v,C,N,P,k):q&6?gt(f,g,m,T,v,C,N,P,k):(q&64||q&128)&&R.process(f,g,m,T,v,C,N,P,k,U)}M!=null&&v&&yc(M,f&&f.ref,C,g||f,!g)},E=(f,g,m,T)=>{if(f==null)r(g.el=a(g.children),m,T);else{const v=g.el=f.el;g.children!==f.children&&l(v,g.children)}},S=(f,g,m,T)=>{f==null?r(g.el=c(g.children||""),m,T):g.el=f.el},b=(f,g,m,T)=>{[f.el,f.anchor]=_(f.children,g,m,T,f.el,f.anchor)},F=({el:f,anchor:g},m,T)=>{let v;for(;f&&f!==g;)v=d(f),r(f,m,T),f=v;r(g,m,T)},K=({el:f,anchor:g})=>{let m;for(;f&&f!==g;)m=d(f),s(f),f=m;s(g)},ee=(f,g,m,T,v,C,N,P,k)=>{g.type==="svg"?N="svg":g.type==="math"&&(N="mathml"),f==null?$(g,m,T,v,C,N,P,k):Z(f,g,v,C,N,P,k)},$=(f,g,m,T,v,C,N,P)=>{let k,R;const{props:M,shapeFlag:q,transition:B,dirs:Q}=f;if(k=f.el=o(f.type,C,M&&M.is,M),q&8?u(k,f.children):q&16&&te(f.children,k,null,T,v,Oa(f,C),N,P),Q&&$n(f,null,T,"created"),de(k,f,f.scopeId,N,T),M){for(const me in M)me!=="value"&&!Es(me)&&i(k,me,null,M[me],C,f.children,T,v,Ke);"value"in M&&i(k,"value",null,M.value,C),(R=M.onVnodeBeforeMount)&&Dt(R,T,f)}Q&&$n(f,null,T,"beforeMount");const ne=Bv(v,B);ne&&B.beforeEnter(k),r(k,g,m),((R=M&&M.onVnodeMounted)||ne||Q)&&at(()=>{R&&Dt(R,T,f),ne&&B.enter(k),Q&&$n(f,null,T,"mounted")},v)},de=(f,g,m,T,v)=>{if(m&&p(f,m),T)for(let C=0;C<T.length;C++)p(f,T[C]);if(v){let C=v.subTree;if(g===C){const N=v.vnode;de(f,N,N.scopeId,N.slotScopeIds,v.parent)}}},te=(f,g,m,T,v,C,N,P,k=0)=>{for(let R=k;R<f.length;R++){const M=f[R]=P?gn(f[R]):Ot(f[R]);y(null,M,g,m,T,v,C,N,P)}},Z=(f,g,m,T,v,C,N)=>{const P=g.el=f.el;let{patchFlag:k,dynamicChildren:R,dirs:M}=g;k|=f.patchFlag&16;const q=f.props||ve,B=g.props||ve;let Q;if(m&&qn(m,!1),(Q=B.onVnodeBeforeUpdate)&&Dt(Q,m,g,f),M&&$n(g,f,m,"beforeUpdate"),m&&qn(m,!0),R?_e(f.dynamicChildren,R,P,m,T,Oa(g,v),C):N||ue(f,g,P,null,m,T,Oa(g,v),C,!1),k>0){if(k&16)ze(P,g,q,B,m,T,v);else if(k&2&&q.class!==B.class&&i(P,"class",null,B.class,v),k&4&&i(P,"style",q.style,B.style,v),k&8){const ne=g.dynamicProps;for(let me=0;me<ne.length;me++){const Te=ne[me],xe=q[Te],It=B[Te];(It!==xe||Te==="value")&&i(P,Te,xe,It,v,f.children,m,T,Ke)}}k&1&&f.children!==g.children&&u(P,g.children)}else!N&&R==null&&ze(P,g,q,B,m,T,v);((Q=B.onVnodeUpdated)||M)&&at(()=>{Q&&Dt(Q,m,g,f),M&&$n(g,f,m,"updated")},T)},_e=(f,g,m,T,v,C,N)=>{for(let P=0;P<g.length;P++){const k=f[P],R=g[P],M=k.el&&(k.type===Qt||!as(k,R)||k.shapeFlag&70)?h(k.el):m;y(k,R,M,null,T,v,C,N,!0)}},ze=(f,g,m,T,v,C,N)=>{if(m!==T){if(m!==ve)for(const P in m)!Es(P)&&!(P in T)&&i(f,P,m[P],null,N,g.children,v,C,Ke);for(const P in T){if(Es(P))continue;const k=T[P],R=m[P];k!==R&&P!=="value"&&i(f,P,R,k,N,g.children,v,C,Ke)}"value"in T&&i(f,"value",m.value,T.value,N)}},lt=(f,g,m,T,v,C,N,P,k)=>{const R=g.el=f?f.el:a(""),M=g.anchor=f?f.anchor:a("");let{patchFlag:q,dynamicChildren:B,slotScopeIds:Q}=g;Q&&(P=P?P.concat(Q):Q),f==null?(r(R,m,T),r(M,m,T),te(g.children||[],m,M,v,C,N,P,k)):q>0&&q&64&&B&&f.dynamicChildren?(_e(f.dynamicChildren,B,m,v,C,N,P),(g.key!=null||v&&g===v.subTree)&&Tp(f,g,!0)):ue(f,g,m,M,v,C,N,P,k)},gt=(f,g,m,T,v,C,N,P,k)=>{g.slotScopeIds=P,f==null?g.shapeFlag&512?v.ctx.activate(g,m,T,N,k):jn(g,m,T,v,C,N,k):mt(f,g,k)},jn=(f,g,m,T,v,C,N)=>{const P=f.component=Jv(f,T,v);if(Sl(f)&&(P.ctx.renderer=U),Yv(P),P.asyncDep){if(v&&v.registerDep(P,ce),!f.el){const k=P.subTree=Re(Bs);S(null,k,g,m)}}else ce(P,f,g,m,v,C,N)},mt=(f,g,m)=>{const T=g.component=f.component;if(rv(f,g,m))if(T.asyncDep&&!T.asyncResolved){ge(T,g,m);return}else T.next=g,Yy(T.update),T.effect.dirty=!0,T.update();else g.el=f.el,T.vnode=g},ce=(f,g,m,T,v,C,N)=>{const P=()=>{if(f.isMounted){let{next:M,bu:q,u:B,parent:Q,vnode:ne}=f;{const _r=Ap(f);if(_r){M&&(M.el=ne.el,ge(f,M,N)),_r.asyncDep.then(()=>{f.isUnmounted||P()});return}}let me=M,Te;qn(f,!1),M?(M.el=ne.el,ge(f,M,N)):M=ne,q&&Ji(q),(Te=M.props&&M.props.onVnodeBeforeUpdate)&&Dt(Te,Q,M,ne),qn(f,!0);const xe=ba(f),It=f.subTree;f.subTree=xe,y(It,xe,h(It.el),I(It),f,v,C),M.el=xe.el,me===null&&sv(f,xe.el),B&&at(B,v),(Te=M.props&&M.props.onVnodeUpdated)&&at(()=>Dt(Te,Q,M,ne),v)}else{let M;const{el:q,props:B}=g,{bm:Q,m:ne,parent:me}=f,Te=Xi(g);if(qn(f,!1),Q&&Ji(Q),!Te&&(M=B&&B.onVnodeBeforeMount)&&Dt(M,me,g),qn(f,!0),q&&we){const xe=()=>{f.subTree=ba(f),we(q,f.subTree,f,v,null)};Te?g.type.__asyncLoader().then(()=>!f.isUnmounted&&xe()):xe()}else{const xe=f.subTree=ba(f);y(null,xe,m,T,f,v,C),g.el=xe.el}if(ne&&at(ne,v),!Te&&(M=B&&B.onVnodeMounted)){const xe=g;at(()=>Dt(M,me,xe),v)}(g.shapeFlag&256||me&&Xi(me.vnode)&&me.vnode.shapeFlag&256)&&f.a&&at(f.a,v),f.isMounted=!0,g=m=T=null}},k=f.effect=new gl(P,Et,()=>$o(R),f.scope),R=f.update=()=>{k.dirty&&k.run()};R.id=f.uid,qn(f,!0),R()},ge=(f,g,m)=>{g.component=f;const T=f.vnode.props;f.vnode=g,f.next=null,Nv(f,g.props,T,m),Mv(f,g.children,m),Nn(),oh(f),xn()},ue=(f,g,m,T,v,C,N,P,k=!1)=>{const R=f&&f.children,M=f?f.shapeFlag:0,q=g.children,{patchFlag:B,shapeFlag:Q}=g;if(B>0){if(B&128){ln(R,q,m,T,v,C,N,P,k);return}else if(B&256){Kt(R,q,m,T,v,C,N,P,k);return}}Q&8?(M&16&&Ke(R,v,C),q!==R&&u(m,q)):M&16?Q&16?ln(R,q,m,T,v,C,N,P,k):Ke(R,v,C,!0):(M&8&&u(m,""),Q&16&&te(q,m,T,v,C,N,P,k))},Kt=(f,g,m,T,v,C,N,P,k)=>{f=f||Pr,g=g||Pr;const R=f.length,M=g.length,q=Math.min(R,M);let B;for(B=0;B<q;B++){const Q=g[B]=k?gn(g[B]):Ot(g[B]);y(f[B],Q,m,null,v,C,N,P,k)}R>M?Ke(f,v,C,!0,!1,q):te(g,m,T,v,C,N,P,k,q)},ln=(f,g,m,T,v,C,N,P,k)=>{let R=0;const M=g.length;let q=f.length-1,B=M-1;for(;R<=q&&R<=B;){const Q=f[R],ne=g[R]=k?gn(g[R]):Ot(g[R]);if(as(Q,ne))y(Q,ne,m,null,v,C,N,P,k);else break;R++}for(;R<=q&&R<=B;){const Q=f[q],ne=g[B]=k?gn(g[B]):Ot(g[B]);if(as(Q,ne))y(Q,ne,m,null,v,C,N,P,k);else break;q--,B--}if(R>q){if(R<=B){const Q=B+1,ne=Q<M?g[Q].el:T;for(;R<=B;)y(null,g[R]=k?gn(g[R]):Ot(g[R]),m,ne,v,C,N,P,k),R++}}else if(R>B)for(;R<=q;)ot(f[R],v,C,!0),R++;else{const Q=R,ne=R,me=new Map;for(R=ne;R<=B;R++){const ut=g[R]=k?gn(g[R]):Ot(g[R]);ut.key!=null&&me.set(ut.key,R)}let Te,xe=0;const It=B-ne+1;let _r=!1,Qu=0;const os=new Array(It);for(R=0;R<It;R++)os[R]=0;for(R=Q;R<=q;R++){const ut=f[R];if(xe>=It){ot(ut,v,C,!0);continue}let kt;if(ut.key!=null)kt=me.get(ut.key);else for(Te=ne;Te<=B;Te++)if(os[Te-ne]===0&&as(ut,g[Te])){kt=Te;break}kt===void 0?ot(ut,v,C,!0):(os[kt-ne]=R+1,kt>=Qu?Qu=kt:_r=!0,y(ut,g[kt],m,null,v,C,N,P,k),xe++)}const Ju=_r?jv(os):Pr;for(Te=Ju.length-1,R=It-1;R>=0;R--){const ut=ne+R,kt=g[ut],Yu=ut+1<M?g[ut+1].el:T;os[R]===0?y(null,kt,m,Yu,v,C,N,P,k):_r&&(Te<0||R!==Ju[Te]?bt(kt,m,Yu,2):Te--)}}},bt=(f,g,m,T,v=null)=>{const{el:C,type:N,transition:P,children:k,shapeFlag:R}=f;if(R&6){bt(f.component.subTree,g,m,T);return}if(R&128){f.suspense.move(g,m,T);return}if(R&64){N.move(f,g,m,U);return}if(N===Qt){r(C,g,m);for(let q=0;q<k.length;q++)bt(k[q],g,m,T);r(f.anchor,g,m);return}if(N===Va){F(f,g,m);return}if(T!==2&&R&1&&P)if(T===0)P.beforeEnter(C),r(C,g,m),at(()=>P.enter(C),v);else{const{leave:q,delayLeave:B,afterLeave:Q}=P,ne=()=>r(C,g,m),me=()=>{q(C,()=>{ne(),Q&&Q()})};B?B(C,ne,me):me()}else r(C,g,m)},ot=(f,g,m,T=!1,v=!1)=>{const{type:C,props:N,ref:P,children:k,dynamicChildren:R,shapeFlag:M,patchFlag:q,dirs:B}=f;if(P!=null&&yc(P,null,m,f,!0),M&256){g.ctx.deactivate(f);return}const Q=M&1&&B,ne=!Xi(f);let me;if(ne&&(me=N&&N.onVnodeBeforeUnmount)&&Dt(me,g,f),M&6)Oi(f.component,m,T);else{if(M&128){f.suspense.unmount(m,T);return}Q&&$n(f,null,g,"beforeUnmount"),M&64?f.type.remove(f,g,m,v,U,T):R&&(C!==Qt||q>0&&q&64)?Ke(R,g,m,!1,!0):(C===Qt&&q&384||!v&&M&16)&&Ke(k,g,m),T&&gr(f)}(ne&&(me=N&&N.onVnodeUnmounted)||Q)&&at(()=>{me&&Dt(me,g,f),Q&&$n(f,null,g,"unmounted")},m)},gr=f=>{const{type:g,el:m,anchor:T,transition:v}=f;if(g===Qt){mr(m,T);return}if(g===Va){K(f);return}const C=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:N,delayLeave:P}=v,k=()=>N(m,C);P?P(f.el,C,k):k()}else C()},mr=(f,g)=>{let m;for(;f!==g;)m=d(f),s(f),f=m;s(g)},Oi=(f,g,m)=>{const{bum:T,scope:v,update:C,subTree:N,um:P}=f;T&&Ji(T),v.stop(),C&&(C.active=!1,ot(N,f,g,m)),P&&at(P,g),at(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Ke=(f,g,m,T=!1,v=!1,C=0)=>{for(let N=C;N<f.length;N++)ot(f[N],g,m,T,v)},I=f=>f.shapeFlag&6?I(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let L=!1;const V=(f,g,m)=>{f==null?g._vnode&&ot(g._vnode,null,null,!0):y(g._vnode||null,f,g,null,null,null,m),L||(L=!0,oh(),sp(),L=!1),g._vnode=f},U={p:y,um:ot,m:bt,r:gr,mt:jn,mc:te,pc:ue,pbc:_e,n:I,o:t};let he,we;return e&&([he,we]=e(U)),{render:V,hydrate:he,createApp:Dv(V,he)}}function Oa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Bv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Tp(t,e,n=!1){const r=t.children,s=e.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=gn(s[i]),a.el=o.el),n||Tp(o,a)),a.type===Wo&&(a.el=o.el)}}function jv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ap(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ap(e)}const $v=t=>t.__isTeleport,Qt=Symbol.for("v-fgt"),Wo=Symbol.for("v-txt"),Bs=Symbol.for("v-cmt"),Va=Symbol.for("v-stc"),Ts=[];let wt=null;function As(t=!1){Ts.push(wt=t?null:[])}function qv(){Ts.pop(),wt=Ts[Ts.length-1]||null}let js=1;function _h(t){js+=t}function Hv(t){return t.dynamicChildren=js>0?wt||Pr:null,qv(),js>0&&wt&&wt.push(t),t}function Rs(t,e,n,r,s,i){return Hv(bl(t,e,n,r,s,i,!0))}function vc(t){return t?t.__v_isVNode===!0:!1}function as(t,e){return t.type===e.type&&t.key===e.key}const Rp=({key:t})=>t??null,eo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ve(t)||Ne(t)||Y(t)?{i:st,r:t,k:e,f:!!n}:t:null);function bl(t,e=null,n=null,r=0,s=null,i=t===Qt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rp(e),ref:e&&eo(e),scopeId:ap,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:st};return a?(kl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),js>0&&!o&&wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&wt.push(c),c}const Re=Wv;function Wv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===iv)&&(t=Bs),vc(t)){const a=Mr(t,e,!0);return n&&kl(a,n),js>0&&!i&&wt&&(a.shapeFlag&6?wt[wt.indexOf(t)]=a:wt.push(a)),a.patchFlag|=-2,a}if(nE(t)&&(t=t.__vccOpts),e){e=zv(e);let{class:a,style:c}=e;a&&!Ve(a)&&(e.class=pl(a)),Ae(c)&&(Yf(c)&&!W(c)&&(c=We({},c)),e.style=fl(c))}const o=Ve(t)?1:av(t)?128:$v(t)?64:Ae(t)?4:Y(t)?2:0;return bl(t,e,n,r,s,o,i,!0)}function zv(t){return t?Yf(t)||_p(t)?We({},t):t:null}function Mr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Kv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Rp(a),ref:e&&e.ref?n&&s?W(s)?s.concat(eo(e)):[s,eo(e)]:eo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mr(t.ssContent),ssFallback:t.ssFallback&&Mr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ec(t=" ",e=0){return Re(Wo,null,t,e)}function Ot(t){return t==null||typeof t=="boolean"?Re(Bs):W(t)?Re(Qt,null,t.slice()):typeof t=="object"?gn(t):Re(Wo,null,String(t))}function gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mr(t)}function kl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),kl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!_p(e)?e._ctx=st:s===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:st},n=32):(e=String(e),r&64?(n=16,e=[Ec(e)]):n=8);t.children=e,t.shapeFlag|=n}function Kv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=pl([e.class,r.class]));else if(s==="style")e.style=fl([e.style,r.style]);else if(Mo(s)){const i=e[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Dt(t,e,n,r=null){At(t,e,7,[n,r])}const Gv=gp();let Qv=0;function Jv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Gv,i={uid:Qv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new xf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vp(r,s),emitsOptions:op(r,s),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:r.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ev.bind(null,i),t.ce&&t.ce(i),i}let Me=null,go,Ic;{const t=Of(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};go=e("__VUE_INSTANCE_SETTERS__",n=>Me=n),Ic=e("__VUE_SSR_SETTERS__",n=>hi=n)}const ui=t=>{const e=Me;return go(t),t.scope.on(),()=>{t.scope.off(),go(e)}},yh=()=>{Me&&Me.scope.off(),go(null)};function Sp(t){return t.vnode.shapeFlag&4}let hi=!1;function Yv(t,e=!1){e&&Ic(e);const{props:n,children:r}=t.vnode,s=Sp(t);Vv(t,n,s,e),Lv(t,r);const i=s?Xv(t,e):void 0;return e&&Ic(!1),i}function Xv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Av);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?eE(t):null,i=ui(t);Nn();const o=An(r,t,0,[t.props,s]);if(xn(),i(),Cf(o)){if(o.then(yh,yh),e)return o.then(a=>{vh(t,a,e)}).catch(a=>{li(a,t,0)});t.asyncDep=o}else vh(t,o,e)}else Pp(t,e)}function vh(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=tp(e)),Pp(t,n)}let Eh;function Pp(t,e,n){const r=t.type;if(!t.render){if(!e&&Eh&&!r.render){const s=r.template||Pl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=We(We({isCustomElement:i,delimiters:a},o),c);r.render=Eh(s,l)}}t.render=r.render||Et}{const s=ui(t);Nn();try{Rv(t)}finally{xn(),s()}}}const Zv={get(t,e){return ct(t,"get",""),t[e]}};function eE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Zv),slots:t.slots,emit:t.emit,expose:e}}function zo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(tp(Il(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ws)return ws[n](t)},has(e,n){return n in e||n in ws}}))}function tE(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function nE(t){return Y(t)&&"__vccOpts"in t}const dt=(t,e)=>$y(t,e,hi);function Cp(t,e,n){const r=arguments.length;return r===2?Ae(e)&&!W(e)?vc(e)?Re(t,null,[e]):Re(t,e):Re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vc(n)&&(n=[n]),Re(t,e,n))}const rE="3.4.23";/**
* @vue/runtime-dom v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const sE="http://www.w3.org/2000/svg",iE="http://www.w3.org/1998/Math/MathML",mn=typeof document<"u"?document:null,Ih=mn&&mn.createElement("template"),oE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?mn.createElementNS(sE,t):e==="mathml"?mn.createElementNS(iE,t):mn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>mn.createTextNode(t),createComment:t=>mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ih.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Ih.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},aE=Symbol("_vtc");function cE(t,e,n){const r=t[aE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wh=Symbol("_vod"),lE=Symbol("_vsh"),uE=Symbol(""),hE=/(^|;)\s*display\s*:/;function dE(t,e,n){const r=t.style,s=Ve(n);let i=!1;if(n&&!s){if(e)if(Ve(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&to(r,a,"")}else for(const o in e)n[o]==null&&to(r,o,"");for(const o in n)o==="display"&&(i=!0),to(r,o,n[o])}else if(s){if(e!==n){const o=r[uE];o&&(n+=";"+o),r.cssText=n,i=hE.test(n)}}else e&&t.removeAttribute("style");wh in t&&(t[wh]=i?r.display:"",t[lE]&&(r.display="none"))}const Th=/\s*!important$/;function to(t,e,n){if(W(n))n.forEach(r=>to(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=fE(t,e);Th.test(n)?t.setProperty(Jr(r),n.replace(Th,""),"important"):t[r]=n}}const Ah=["Webkit","Moz","ms"],Na={};function fE(t,e){const n=Na[e];if(n)return n;let r=Ht(e);if(r!=="filter"&&r in t)return Na[e]=r;r=Bo(r);for(let s=0;s<Ah.length;s++){const i=Ah[s]+r;if(i in t)return Na[e]=i}return e}const Rh="http://www.w3.org/1999/xlink";function pE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Rh,e.slice(6,e.length)):t.setAttributeNS(Rh,e,n);else{const i=yy(e);n==null||i&&!Vf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function gE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Vf(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Er(t,e,n,r){t.addEventListener(e,n,r)}function mE(t,e,n,r){t.removeEventListener(e,n,r)}const Sh=Symbol("_vei");function _E(t,e,n,r,s=null){const i=t[Sh]||(t[Sh]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=yE(e);if(r){const l=i[e]=IE(r,s);Er(t,a,l,c)}else o&&(mE(t,a,o,c),i[e]=void 0)}}const Ph=/(?:Once|Passive|Capture)$/;function yE(t){let e;if(Ph.test(t)){e={};let r;for(;r=t.match(Ph);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jr(t.slice(2)),e]}let xa=0;const vE=Promise.resolve(),EE=()=>xa||(vE.then(()=>xa=0),xa=Date.now());function IE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;At(wE(r,n.value),e,5,[r])};return n.value=t,n.attached=EE(),n}function wE(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ch=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,TE=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?cE(t,r,l):e==="style"?dE(t,n,r):Mo(e)?ul(e)||_E(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):AE(t,e,r,l))?gE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),pE(t,e,r,l))};function AE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ch(e)&&Y(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ch(e)&&Ve(n)?!1:e in t}const bh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Ji(e,n):e};function RE(t){t.target.composing=!0}function kh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const La=Symbol("_assign"),ib={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[La]=bh(s);const i=r||s.props&&s.props.type==="number";Er(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ac(a)),t[La](a)}),n&&Er(t,"change",()=>{t.value=t.value.trim()}),e||(Er(t,"compositionstart",RE),Er(t,"compositionend",kh),Er(t,"change",kh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[La]=bh(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?ac(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},SE=We({patchProp:TE},oE);let Dh;function PE(){return Dh||(Dh=Fv(SE))}const CE=(...t)=>{const e=PE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=kE(r);if(!s)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,bE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function bE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function kE(t){return Ve(t)?document.querySelector(t):t}var DE=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let bp;const Ko=t=>bp=t,kp=Symbol();function wc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ss;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ss||(Ss={}));function OE(){const t=Lf(!0),e=t.run(()=>rt({}));let n=[],r=[];const s=Il({install(i){Ko(s),s._a=i,i.provide(kp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!DE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Dp=()=>{};function Oh(t,e,n,r=Dp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Mf()&&Iy(s),s}function yr(t,...e){t.slice().forEach(n=>{n(...e)})}const VE=t=>t();function Tc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];wc(s)&&wc(r)&&t.hasOwnProperty(n)&&!Ne(r)&&!tr(r)?t[n]=Tc(s,r):t[n]=r}return t}const NE=Symbol();function xE(t){return!wc(t)||!t.hasOwnProperty(NE)}const{assign:fn}=Object;function LE(t){return!!(Ne(t)&&t.effect)}function ME(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=zy(n.state.value[t]);return fn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Il(dt(()=>{Ko(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=Op(t,l,e,n,r,!0),c}function Op(t,e,n={},r,s,i){let o;const a=fn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],p;const _=r.state.value[t];!i&&!_&&(r.state.value[t]={}),rt({});let y;function E(te){let Z;l=u=!1,typeof te=="function"?(te(r.state.value[t]),Z={type:Ss.patchFunction,storeId:t,events:p}):(Tc(r.state.value[t],te),Z={type:Ss.patchObject,payload:te,storeId:t,events:p});const _e=y=Symbol();Al().then(()=>{y===_e&&(l=!0)}),u=!0,yr(h,Z,r.state.value[t])}const S=i?function(){const{state:Z}=n,_e=Z?Z():{};this.$patch(ze=>{fn(ze,_e)})}:Dp;function b(){o.stop(),h=[],d=[],r._s.delete(t)}function F(te,Z){return function(){Ko(r);const _e=Array.from(arguments),ze=[],lt=[];function gt(ce){ze.push(ce)}function jn(ce){lt.push(ce)}yr(d,{args:_e,name:te,store:ee,after:gt,onError:jn});let mt;try{mt=Z.apply(this&&this.$id===t?this:ee,_e)}catch(ce){throw yr(lt,ce),ce}return mt instanceof Promise?mt.then(ce=>(yr(ze,ce),ce)).catch(ce=>(yr(lt,ce),Promise.reject(ce))):(yr(ze,mt),mt)}}const K={_p:r,$id:t,$onAction:Oh.bind(null,d),$patch:E,$reset:S,$subscribe(te,Z={}){const _e=Oh(h,te,Z.detached,()=>ze()),ze=o.run(()=>Is(()=>r.state.value[t],lt=>{(Z.flush==="sync"?u:l)&&te({storeId:t,type:Ss.direct,events:p},lt)},fn({},c,Z)));return _e},$dispose:b},ee=ci(K);r._s.set(t,ee);const de=(r._a&&r._a.runWithContext||VE)(()=>r._e.run(()=>(o=Lf()).run(e)));for(const te in de){const Z=de[te];if(Ne(Z)&&!LE(Z)||tr(Z))i||(_&&xE(Z)&&(Ne(Z)?Z.value=_[te]:Tc(Z,_[te])),r.state.value[t][te]=Z);else if(typeof Z=="function"){const _e=F(te,Z);de[te]=_e,a.actions[te]=Z}}return fn(ee,de),fn(ae(ee),de),Object.defineProperty(ee,"$state",{get:()=>r.state.value[t],set:te=>{E(Z=>{fn(Z,te)})}}),r._p.forEach(te=>{fn(ee,o.run(()=>te({store:ee,app:r._a,pinia:r,options:a})))}),_&&i&&n.hydrate&&n.hydrate(ee.$state,_),l=!0,u=!0,ee}function FE(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Ov();return a=a||(l?Ft(kp,null):null),a&&Ko(a),a=bp,a._s.has(r)||(i?Op(r,e,s,a):ME(r,s,a)),a._s.get(r)}return o.$id=r,o}const UE=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},BE={},jE={class:"font-[Roboto] p-4"};function $E(t,e){const n=lp("RouterView");return As(),Rs("main",jE,[Re(n)])}const qE=UE(BE,[["render",$E]]),HE="modulepreload",WE=function(t){return"/"+t},Vh={},Gn=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=WE(c),c in Vh)return;Vh[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(!!r)for(let p=i.length-1;p>=0;p--){const _=i[p];if(_.href===c&&(!l||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":HE,l||(d.as="script",d.crossOrigin=""),d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),l)return new Promise((p,_)=>{d.addEventListener("load",p),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ir=typeof document<"u";function zE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function Ma(t,e){const n={};for(const r in e){const s=e[r];n[r]=Rt(s)?s.map(t):t(s)}return n}const Ps=()=>{},Rt=Array.isArray,Vp=/#/g,KE=/&/g,GE=/\//g,QE=/=/g,JE=/\?/g,Np=/\+/g,YE=/%5B/g,XE=/%5D/g,xp=/%5E/g,ZE=/%60/g,Lp=/%7B/g,eI=/%7C/g,Mp=/%7D/g,tI=/%20/g;function Dl(t){return encodeURI(""+t).replace(eI,"|").replace(YE,"[").replace(XE,"]")}function nI(t){return Dl(t).replace(Lp,"{").replace(Mp,"}").replace(xp,"^")}function Ac(t){return Dl(t).replace(Np,"%2B").replace(tI,"+").replace(Vp,"%23").replace(KE,"%26").replace(ZE,"`").replace(Lp,"{").replace(Mp,"}").replace(xp,"^")}function rI(t){return Ac(t).replace(QE,"%3D")}function sI(t){return Dl(t).replace(Vp,"%23").replace(JE,"%3F")}function iI(t){return t==null?"":sI(t).replace(GE,"%2F")}function $s(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const oI=/\/$/,aI=t=>t.replace(oI,"");function Fa(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=hI(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:$s(o)}}function cI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Nh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Fr(e.matched[r],n.matched[s])&&Fp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uI(t[n],e[n]))return!1;return!0}function uI(t,e){return Rt(t)?xh(t,e):Rt(e)?xh(e,t):t===e}function xh(t,e){return Rt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function hI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var qs;(function(t){t.pop="pop",t.push="push"})(qs||(qs={}));var Cs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Cs||(Cs={}));function dI(t){if(!t)if(Ir){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),aI(t)}const fI=/^[^#]+#/;function pI(t,e){return t.replace(fI,"#")+e}function gI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Go=()=>({left:window.scrollX,top:window.scrollY});function mI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=gI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Lh(t,e){return(history.state?history.state.position-e:-1)+t}const Rc=new Map;function _I(t,e){Rc.set(t,e)}function yI(t){const e=Rc.get(t);return Rc.delete(t),e}let vI=()=>location.protocol+"//"+location.host;function Up(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Nh(c,"")}return Nh(n,t)+r+s}function EI(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=Up(t,location),_=n.value,y=e.value;let E=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}E=y?d.position-y.position:0}else r(p);s.forEach(S=>{S(n.value,_,{delta:E,type:qs.pop,direction:E?E>0?Cs.forward:Cs.back:Cs.unknown})})};function c(){o=n.value}function l(d){s.push(d);const p=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(fe({},d.state,{scroll:Go()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Mh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Go():null}}function II(t){const{history:e,location:n}=window,r={value:Up(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:vI()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=fe({},e.state,Mh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=fe({},s.value,e.state,{forward:c,scroll:Go()});i(u.current,u,!0);const h=fe({},Mh(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function wI(t){t=dI(t);const e=II(t),n=EI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=fe({location:"",base:t,go:r,createHref:pI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function TI(t){return typeof t=="string"||t&&typeof t=="object"}function Bp(t){return typeof t=="string"||typeof t=="symbol"}const hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jp=Symbol("");var Fh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fh||(Fh={}));function Ur(t,e){return fe(new Error,{type:t,[jp]:!0},e)}function Gt(t,e){return t instanceof Error&&jp in t&&(e==null||!!(t.type&e))}const Uh="[^/]+?",AI={sensitive:!1,strict:!1,start:!0,end:!0},RI=/[.+*?^${}()[\]/\\]/g;function SI(t,e){const n=fe({},AI,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(RI,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:y,optional:E,regexp:S}=d;i.push({name:_,repeatable:y,optional:E});const b=S||Uh;if(b!==Uh){p+=10;try{new RegExp(`(${b})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+K.message)}}let F=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(F=E&&l.length<2?`(?:/${F})`:"/"+F),E&&(F+="?"),s+=F,p+=20,E&&(p+=-8),y&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=i[d-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:y,optional:E}=p,S=_ in l?l[_]:"";if(Rt(S)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=Rt(S)?S.join("/"):S;if(!b)if(E)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=b}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function PI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function CI(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=PI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Bh(r))return 1;if(Bh(s))return-1}return s.length-r.length}function Bh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const bI={type:0,value:""},kI=/[a-zA-Z0-9_]/;function DI(t){if(!t)return[[]];if(t==="/")return[[bI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:kI.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function OI(t,e,n){const r=SI(DI(t.path),n),s=fe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function VI(t,e){const n=[],r=new Map;e=qh({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,_=NI(u);_.aliasOf=d&&d.record;const y=qh(e,u),E=[_];if("alias"in u){const F=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of F)E.push(fe({},_,{components:d?d.record.components:_.components,path:K,aliasOf:d?d.record:_}))}let S,b;for(const F of E){const{path:K}=F;if(h&&K[0]!=="/"){const ee=h.record.path,$=ee[ee.length-1]==="/"?"":"/";F.path=h.record.path+(K&&$+K)}if(S=OI(F,h,y),d?d.alias.push(S):(b=b||S,b!==S&&b.alias.push(S),p&&u.name&&!$h(S)&&o(u.name)),_.children){const ee=_.children;for(let $=0;$<ee.length;$++)i(ee[$],S,d&&d.children[$])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return b?()=>{o(b)}:Ps}function o(u){if(Bp(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&CI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!$p(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!$h(u)&&r.set(u.record.name,u)}function l(u,h){let d,p={},_,y;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Ur(1,{location:u});y=d.record.name,p=fe(jh(h.params,d.keys.filter(b=>!b.optional).concat(d.parent?d.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),u.params&&jh(u.params,d.keys.map(b=>b.name))),_=d.stringify(p)}else if(u.path!=null)_=u.path,d=n.find(b=>b.re.test(_)),d&&(p=d.parse(_),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(b=>b.re.test(h.path)),!d)throw Ur(1,{location:u,currentLocation:h});y=d.record.name,p=fe({},h.params,u.params),_=d.stringify(p)}const E=[];let S=d;for(;S;)E.unshift(S.record),S=S.parent;return{name:y,path:_,params:p,matched:E,meta:LI(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function jh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function NI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:xI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function xI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function $h(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function LI(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function qh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function $p(t,e){return e.children.some(n=>n===t||$p(t,n))}function MI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Np," "),o=i.indexOf("="),a=$s(o<0?i:i.slice(0,o)),c=o<0?null:$s(i.slice(o+1));if(a in e){let l=e[a];Rt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Hh(t){let e="";for(let n in t){const r=t[n];if(n=rI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Rt(r)?r.map(i=>i&&Ac(i)):[r&&Ac(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function FI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Rt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const UI=Symbol(""),Wh=Symbol(""),Ol=Symbol(""),qp=Symbol(""),Sc=Symbol("");function cs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function _n(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(Ur(4,{from:n,to:e})):d instanceof Error?c(d):TI(d)?c(Ur(2,{from:e,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch(d=>c(d))})}function Ua(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(BI(c)){const u=(c.__vccOpts||c)[e];u&&i.push(_n(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=zE(u)?u.default:u;o.components[a]=h;const p=(h.__vccOpts||h)[e];return p&&_n(p,n,r,o,a,s)()}))}}return i}function BI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zh(t){const e=Ft(Ol),n=Ft(qp),r=dt(()=>{const c=_t(t.to);return e.resolve(c)}),s=dt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Fr.bind(null,u));if(d>-1)return d;const p=Kh(c[l-2]);return l>1&&Kh(u)===p&&h[h.length-1].path!==p?h.findIndex(Fr.bind(null,c[l-2])):d}),i=dt(()=>s.value>-1&&HI(n.params,r.value.params)),o=dt(()=>s.value>-1&&s.value===n.matched.length-1&&Fp(n.params,r.value.params));function a(c={}){return qI(c)?e[_t(t.replace)?"replace":"push"](_t(t.to)).catch(Ps):Promise.resolve()}return{route:r,href:dt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const jI=Rl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zh,setup(t,{slots:e}){const n=ci(zh(t)),{options:r}=Ft(Ol),s=dt(()=>({[Gh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Cp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$I=jI;function qI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function HI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Rt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Kh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gh=(t,e,n)=>t??e??n,WI=Rl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ft(Sc),s=dt(()=>t.route||r.value),i=Ft(Wh,0),o=dt(()=>{let l=_t(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=dt(()=>s.value.matched[o.value]);Zi(Wh,dt(()=>o.value+1)),Zi(UI,a),Zi(Sc,s);const c=rt();return Is(()=>[c.value,a.value,t.name],([l,u,h],[d,p,_])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Fr(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Qh(n.default,{Component:d,route:l});const p=h.props[u],_=p?p===!0?l.params:typeof p=="function"?p(l):p:null,E=Cp(d,fe({},_,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Qh(n.default,{Component:E,route:l})||E}}});function Qh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zI=WI;function KI(t){const e=VI(t.routes,t),n=t.parseQuery||MI,r=t.stringifyQuery||Hh,s=t.history,i=cs(),o=cs(),a=cs(),c=qy(hn);let l=hn;Ir&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ma.bind(null,I=>""+I),h=Ma.bind(null,iI),d=Ma.bind(null,$s);function p(I,L){let V,U;return Bp(I)?(V=e.getRecordMatcher(I),U=L):U=I,e.addRoute(U,V)}function _(I){const L=e.getRecordMatcher(I);L&&e.removeRoute(L)}function y(){return e.getRoutes().map(I=>I.record)}function E(I){return!!e.getRecordMatcher(I)}function S(I,L){if(L=fe({},L||c.value),typeof I=="string"){const g=Fa(n,I,L.path),m=e.resolve({path:g.path},L),T=s.createHref(g.fullPath);return fe(g,m,{params:d(m.params),hash:$s(g.hash),redirectedFrom:void 0,href:T})}let V;if(I.path!=null)V=fe({},I,{path:Fa(n,I.path,L.path).path});else{const g=fe({},I.params);for(const m in g)g[m]==null&&delete g[m];V=fe({},I,{params:h(g)}),L.params=h(L.params)}const U=e.resolve(V,L),he=I.hash||"";U.params=u(d(U.params));const we=cI(r,fe({},I,{hash:nI(he),path:U.path})),f=s.createHref(we);return fe({fullPath:we,hash:he,query:r===Hh?FI(I.query):I.query||{}},U,{redirectedFrom:void 0,href:f})}function b(I){return typeof I=="string"?Fa(n,I,c.value.path):fe({},I)}function F(I,L){if(l!==I)return Ur(8,{from:L,to:I})}function K(I){return de(I)}function ee(I){return K(fe(b(I),{replace:!0}))}function $(I){const L=I.matched[I.matched.length-1];if(L&&L.redirect){const{redirect:V}=L;let U=typeof V=="function"?V(I):V;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=b(U):{path:U},U.params={}),fe({query:I.query,hash:I.hash,params:U.path!=null?{}:I.params},U)}}function de(I,L){const V=l=S(I),U=c.value,he=I.state,we=I.force,f=I.replace===!0,g=$(V);if(g)return de(fe(b(g),{state:typeof g=="object"?fe({},he,g.state):he,force:we,replace:f}),L||V);const m=V;m.redirectedFrom=L;let T;return!we&&lI(r,U,V)&&(T=Ur(16,{to:m,from:U}),bt(U,U,!0,!1)),(T?Promise.resolve(T):_e(m,U)).catch(v=>Gt(v)?Gt(v,2)?v:ln(v):ue(v,m,U)).then(v=>{if(v){if(Gt(v,2))return de(fe({replace:f},b(v.to),{state:typeof v.to=="object"?fe({},he,v.to.state):he,force:we}),L||m)}else v=lt(m,U,!0,f,he);return ze(m,U,v),v})}function te(I,L){const V=F(I,L);return V?Promise.reject(V):Promise.resolve()}function Z(I){const L=mr.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(I):I()}function _e(I,L){let V;const[U,he,we]=GI(I,L);V=Ua(U.reverse(),"beforeRouteLeave",I,L);for(const g of U)g.leaveGuards.forEach(m=>{V.push(_n(m,I,L))});const f=te.bind(null,I,L);return V.push(f),Ke(V).then(()=>{V=[];for(const g of i.list())V.push(_n(g,I,L));return V.push(f),Ke(V)}).then(()=>{V=Ua(he,"beforeRouteUpdate",I,L);for(const g of he)g.updateGuards.forEach(m=>{V.push(_n(m,I,L))});return V.push(f),Ke(V)}).then(()=>{V=[];for(const g of we)if(g.beforeEnter)if(Rt(g.beforeEnter))for(const m of g.beforeEnter)V.push(_n(m,I,L));else V.push(_n(g.beforeEnter,I,L));return V.push(f),Ke(V)}).then(()=>(I.matched.forEach(g=>g.enterCallbacks={}),V=Ua(we,"beforeRouteEnter",I,L,Z),V.push(f),Ke(V))).then(()=>{V=[];for(const g of o.list())V.push(_n(g,I,L));return V.push(f),Ke(V)}).catch(g=>Gt(g,8)?g:Promise.reject(g))}function ze(I,L,V){a.list().forEach(U=>Z(()=>U(I,L,V)))}function lt(I,L,V,U,he){const we=F(I,L);if(we)return we;const f=L===hn,g=Ir?history.state:{};V&&(U||f?s.replace(I.fullPath,fe({scroll:f&&g&&g.scroll},he)):s.push(I.fullPath,he)),c.value=I,bt(I,L,V,f),ln()}let gt;function jn(){gt||(gt=s.listen((I,L,V)=>{if(!Oi.listening)return;const U=S(I),he=$(U);if(he){de(fe(he,{replace:!0}),U).catch(Ps);return}l=U;const we=c.value;Ir&&_I(Lh(we.fullPath,V.delta),Go()),_e(U,we).catch(f=>Gt(f,12)?f:Gt(f,2)?(de(f.to,U).then(g=>{Gt(g,20)&&!V.delta&&V.type===qs.pop&&s.go(-1,!1)}).catch(Ps),Promise.reject()):(V.delta&&s.go(-V.delta,!1),ue(f,U,we))).then(f=>{f=f||lt(U,we,!1),f&&(V.delta&&!Gt(f,8)?s.go(-V.delta,!1):V.type===qs.pop&&Gt(f,20)&&s.go(-1,!1)),ze(U,we,f)}).catch(Ps)}))}let mt=cs(),ce=cs(),ge;function ue(I,L,V){ln(I);const U=ce.list();return U.length?U.forEach(he=>he(I,L,V)):console.error(I),Promise.reject(I)}function Kt(){return ge&&c.value!==hn?Promise.resolve():new Promise((I,L)=>{mt.add([I,L])})}function ln(I){return ge||(ge=!I,jn(),mt.list().forEach(([L,V])=>I?V(I):L()),mt.reset()),I}function bt(I,L,V,U){const{scrollBehavior:he}=t;if(!Ir||!he)return Promise.resolve();const we=!V&&yI(Lh(I.fullPath,0))||(U||!V)&&history.state&&history.state.scroll||null;return Al().then(()=>he(I,L,we)).then(f=>f&&mI(f)).catch(f=>ue(f,I,L))}const ot=I=>s.go(I);let gr;const mr=new Set,Oi={currentRoute:c,listening:!0,addRoute:p,removeRoute:_,hasRoute:E,getRoutes:y,resolve:S,options:t,push:K,replace:ee,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ce.add,isReady:Kt,install(I){const L=this;I.component("RouterLink",$I),I.component("RouterView",zI),I.config.globalProperties.$router=L,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>_t(c)}),Ir&&!gr&&c.value===hn&&(gr=!0,K(s.location).catch(he=>{}));const V={};for(const he in hn)Object.defineProperty(V,he,{get:()=>c.value[he],enumerable:!0});I.provide(Ol,L),I.provide(qp,Qf(V)),I.provide(Sc,c);const U=I.unmount;mr.add(I),I.unmount=function(){mr.delete(I),mr.size<1&&(l=hn,gt&&gt(),gt=null,c.value=hn,gr=!1,ge=!1),U()}}};function Ke(I){return I.reduce((L,V)=>L.then(()=>Z(V)),Promise.resolve())}return Oi}function GI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Fr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Fr(l,c))||s.push(c))}return[n,r,s]}const QI={class:"text-green-700 uppercase mb-2"},JI={__name:"Heading",props:{text:String},setup(t){return(e,n)=>(As(),Rs("h2",QI,vy(t.text),1))}};var Jh={};/**
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
 */const Hp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},YI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new XI;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZI=function(t){const e=Hp(t);return Wp.encodeByteArray(e,!0)},mo=function(t){return ZI(t).replace(/\./g,"")},zp=function(t){try{return Wp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ew(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tw=()=>ew().__FIREBASE_DEFAULTS__,nw=()=>{if(typeof process>"u"||typeof Jh>"u")return;const t=Jh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zp(t[1]);return e&&JSON.parse(e)},Qo=()=>{try{return tw()||nw()||rw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kp=t=>{var e,n;return(n=(e=Qo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sw=t=>{const e=Kp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Gp=()=>{var t;return(t=Qo())===null||t===void 0?void 0:t.config},Qp=t=>{var e;return(e=Qo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class iw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ow(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mo(JSON.stringify(n)),mo(JSON.stringify(o)),""].join(".")}/**
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
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function cw(){var t;const e=(t=Qo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hw(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dw(){return!cw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jp(){try{return typeof indexedDB=="object"}catch{return!1}}function fw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const pw="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pw,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,di.prototype.create)}}class di{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?gw(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new cn(s,a,r)}}function gw(t,e){return t.replace(mw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mw=/\{\$([^}]+)}/g;function _w(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _o(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Yh(i)&&Yh(o)){if(!_o(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Yh(t){return t!==null&&typeof t=="object"}/**
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
 */function fi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ps(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yw(t,e){const n=new vw(t,e);return n.subscribe.bind(n)}class vw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ew(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ba),s.error===void 0&&(s.error=Ba),s.complete===void 0&&(s.complete=Ba);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ew(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ba(){}/**
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
 */function et(t){return t&&t._delegate?t._delegate:t}class rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hn="[DEFAULT]";/**
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
 */class Iw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new iw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tw(e))try{this.getOrInitializeService({instanceIdentifier:Hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hn){return this.instances.has(e)}getOptions(e=Hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ww(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hn){return this.component?this.component.multipleInstances?e:Hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ww(t){return t===Hn?void 0:t}function Tw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Aw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Iw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Rw={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Sw=se.INFO,Pw={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Cw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Pw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vl{constructor(e){this.name=e,this._logLevel=Sw,this._logHandler=Cw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const bw=(t,e)=>e.some(n=>t instanceof n);let Xh,Zh;function kw(){return Xh||(Xh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dw(){return Zh||(Zh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yp=new WeakMap,Pc=new WeakMap,Xp=new WeakMap,ja=new WeakMap,Nl=new WeakMap;function Ow(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Rn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yp.set(n,t)}).catch(()=>{}),Nl.set(e,t),e}function Vw(t){if(Pc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Pc.set(t,e)}let Cc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nw(t){Cc=t(Cc)}function xw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($a(this),e,...n);return Xp.set(r,e.sort?e.sort():[e]),Rn(r)}:Dw().includes(t)?function(...e){return t.apply($a(this),e),Rn(Yp.get(this))}:function(...e){return Rn(t.apply($a(this),e))}}function Lw(t){return typeof t=="function"?xw(t):(t instanceof IDBTransaction&&Vw(t),bw(t,kw())?new Proxy(t,Cc):t)}function Rn(t){if(t instanceof IDBRequest)return Ow(t);if(ja.has(t))return ja.get(t);const e=Lw(t);return e!==t&&(ja.set(t,e),Nl.set(e,t)),e}const $a=t=>Nl.get(t);function Mw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Rn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Rn(o.result),c.oldVersion,c.newVersion,Rn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Fw=["get","getKey","getAll","getAllKeys","count"],Uw=["put","add","delete","clear"],qa=new Map;function ed(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qa.get(e))return qa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Uw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return qa.set(e,i),i}Nw(t=>({...t,get:(e,n,r)=>ed(e,n)||t.get(e,n,r),has:(e,n)=>!!ed(e,n)||t.has(e,n)}));/**
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
 */class Bw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bc="@firebase/app",td="0.10.1";/**
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
 */const sr=new Vl("@firebase/app"),$w="@firebase/app-compat",qw="@firebase/analytics-compat",Hw="@firebase/analytics",Ww="@firebase/app-check-compat",zw="@firebase/app-check",Kw="@firebase/auth",Gw="@firebase/auth-compat",Qw="@firebase/database",Jw="@firebase/database-compat",Yw="@firebase/functions",Xw="@firebase/functions-compat",Zw="@firebase/installations",eT="@firebase/installations-compat",tT="@firebase/messaging",nT="@firebase/messaging-compat",rT="@firebase/performance",sT="@firebase/performance-compat",iT="@firebase/remote-config",oT="@firebase/remote-config-compat",aT="@firebase/storage",cT="@firebase/storage-compat",lT="@firebase/firestore",uT="@firebase/firestore-compat",hT="firebase",dT="10.11.0";/**
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
 */const kc="[DEFAULT]",fT={[bc]:"fire-core",[$w]:"fire-core-compat",[Hw]:"fire-analytics",[qw]:"fire-analytics-compat",[zw]:"fire-app-check",[Ww]:"fire-app-check-compat",[Kw]:"fire-auth",[Gw]:"fire-auth-compat",[Qw]:"fire-rtdb",[Jw]:"fire-rtdb-compat",[Yw]:"fire-fn",[Xw]:"fire-fn-compat",[Zw]:"fire-iid",[eT]:"fire-iid-compat",[tT]:"fire-fcm",[nT]:"fire-fcm-compat",[rT]:"fire-perf",[sT]:"fire-perf-compat",[iT]:"fire-rc",[oT]:"fire-rc-compat",[aT]:"fire-gcs",[cT]:"fire-gcs-compat",[lT]:"fire-fst",[uT]:"fire-fst-compat","fire-js":"fire-js",[hT]:"fire-js-all"};/**
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
 */const yo=new Map,pT=new Map,Dc=new Map;function nd(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Br(t){const e=t.name;if(Dc.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;Dc.set(e,t);for(const n of yo.values())nd(n,t);for(const n of pT.values())nd(n,t);return!0}function xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xt(t){return t.settings!==void 0}/**
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
 */const gT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sn=new di("app","Firebase",gT);/**
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
 */class mT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
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
 */const Yr=dT;function Zp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Sn.create("bad-app-name",{appName:String(s)});if(n||(n=Gp()),!n)throw Sn.create("no-options");const i=yo.get(s);if(i){if(_o(n,i.options)&&_o(r,i.config))return i;throw Sn.create("duplicate-app",{appName:s})}const o=new Aw(s);for(const c of Dc.values())o.addComponent(c);const a=new mT(n,r,o);return yo.set(s,a),a}function eg(t=kc){const e=yo.get(t);if(!e&&t===kc&&Gp())return Zp();if(!e)throw Sn.create("no-app",{appName:t});return e}function Pn(t,e,n){var r;let s=(r=fT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(a.join(" "));return}Br(new rr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const _T="firebase-heartbeat-database",yT=1,Hs="firebase-heartbeat-store";let Ha=null;function tg(){return Ha||(Ha=Mw(_T,yT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sn.create("idb-open",{originalErrorMessage:t.message})})),Ha}async function vT(t){try{const n=(await tg()).transaction(Hs),r=await n.objectStore(Hs).get(ng(t));return await n.done,r}catch(e){if(e instanceof cn)sr.warn(e.message);else{const n=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sr.warn(n.message)}}}async function rd(t,e){try{const r=(await tg()).transaction(Hs,"readwrite");await r.objectStore(Hs).put(e,ng(t)),await r.done}catch(n){if(n instanceof cn)sr.warn(n.message);else{const r=Sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function ng(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ET=1024,IT=30*24*60*60*1e3;class wT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=IT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sd(),{heartbeatsToSend:r,unsentEntries:s}=TT(this._heartbeatsCache.heartbeats),i=mo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sd(){return new Date().toISOString().substring(0,10)}function TT(t,e=ET){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),id(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),id(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jp()?fw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function id(t){return mo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function RT(t){Br(new rr("platform-logger",e=>new Bw(e),"PRIVATE")),Br(new rr("heartbeat",e=>new wT(e),"PRIVATE")),Pn(bc,td,t),Pn(bc,td,"esm2017"),Pn("fire-js","")}RT("");var ST="firebase",PT="10.11.0";/**
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
 */Pn(ST,PT,"app");var CT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Ll=Ll||{},G=CT||self;function Jo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function pi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function bT(t){return Object.prototype.hasOwnProperty.call(t,Wa)&&t[Wa]||(t[Wa]=++kT)}var Wa="closure_uid_"+(1e9*Math.random()>>>0),kT=0;function DT(t,e,n){return t.call.apply(t.bind,arguments)}function OT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Xe=DT:Xe=OT,Xe.apply(null,arguments)}function Bi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ue(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Ln(){this.s=this.s,this.o=this.o}var VT=0;Ln.prototype.s=!1;Ln.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),VT!=0)&&bT(this)};Ln.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const rg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ml(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function od(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Jo(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var NT=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};G.addEventListener("test",n,e),G.removeEventListener("test",n,e)}catch{}return t}();function Ws(t){return/^[\s\xa0]*$/.test(t)}function Yo(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function Nt(t){return Yo().indexOf(t)!=-1}function Fl(t){return Fl[" "](t),t}Fl[" "]=function(){};function xT(t,e){var n=PA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var LT=Nt("Opera"),jr=Nt("Trident")||Nt("MSIE"),sg=Nt("Edge"),Oc=sg||jr,ig=Nt("Gecko")&&!(Yo().toLowerCase().indexOf("webkit")!=-1&&!Nt("Edge"))&&!(Nt("Trident")||Nt("MSIE"))&&!Nt("Edge"),MT=Yo().toLowerCase().indexOf("webkit")!=-1&&!Nt("Edge");function og(){var t=G.document;return t?t.documentMode:void 0}var Vc;e:{var za="",Ka=function(){var t=Yo();if(ig)return/rv:([^\);]+)(\)|;)/.exec(t);if(sg)return/Edge\/([\d\.]+)/.exec(t);if(jr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(MT)return/WebKit\/(\S+)/.exec(t);if(LT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ka&&(za=Ka?Ka[1]:""),jr){var Ga=og();if(Ga!=null&&Ga>parseFloat(za)){Vc=String(Ga);break e}}Vc=za}var Nc;if(G.document&&jr){var ad=og();Nc=ad||parseInt(Vc,10)||void 0}else Nc=void 0;var FT=Nc;function zs(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ig){e:{try{Fl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:UT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&zs.$.h.call(this)}}Ue(zs,Ze);var UT={2:"touch",3:"pen",4:"mouse"};zs.prototype.h=function(){zs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var gi="closure_listenable_"+(1e6*Math.random()|0),BT=0;function jT(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++BT,this.fa=this.ia=!1}function Xo(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ul(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function $T(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function ag(t){const e={};for(const n in t)e[n]=t[n];return e}const cd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<cd.length;i++)n=cd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Zo(t){this.src=t,this.g={},this.h=0}Zo.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Lc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new jT(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function xc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=rg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Xo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Lc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Bl="closure_lm_"+(1e6*Math.random()|0),Qa={};function lg(t,e,n,r,s){if(r&&r.once)return hg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)lg(t,e[i],n,r,s);return null}return n=ql(n),t&&t[gi]?t.O(e,n,pi(r)?!!r.capture:!!r,s):ug(t,e,n,!1,r,s)}function ug(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=pi(s)?!!s.capture:!!s,a=$l(t);if(a||(t[Bl]=a=new Zo(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=qT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)NT||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(fg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qT(){function t(n){return e.call(t.src,t.listener,n)}const e=HT;return t}function hg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)hg(t,e[i],n,r,s);return null}return n=ql(n),t&&t[gi]?t.P(e,n,pi(r)?!!r.capture:!!r,s):ug(t,e,n,!0,r,s)}function dg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)dg(t,e[i],n,r,s);else r=pi(r)?!!r.capture:!!r,n=ql(n),t&&t[gi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Lc(i,n,r,s),-1<n&&(Xo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=$l(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Lc(e,n,r,s)),(n=-1<t?e[t]:null)&&jl(n))}function jl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[gi])xc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(fg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=$l(e))?(xc(n,t),n.h==0&&(n.src=null,e[Bl]=null)):Xo(t)}}}function fg(t){return t in Qa?Qa[t]:Qa[t]="on"+t}function HT(t,e){if(t.fa)t=!0;else{e=new zs(e,this);var n=t.listener,r=t.la||t.src;t.ia&&jl(t),t=n.call(r,e)}return t}function $l(t){return t=t[Bl],t instanceof Zo?t:null}var Ja="__closure_events_fn_"+(1e9*Math.random()>>>0);function ql(t){return typeof t=="function"?t:(t[Ja]||(t[Ja]=function(e){return t.handleEvent(e)}),t[Ja])}function Fe(){Ln.call(this),this.i=new Zo(this),this.S=this,this.J=null}Ue(Fe,Ln);Fe.prototype[gi]=!0;Fe.prototype.removeEventListener=function(t,e,n,r){dg(this,t,e,n,r)};function qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var s=e;e=new Ze(r,t),cg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=ji(o,r,!0,e)&&s}if(o=e.g=t,s=ji(o,r,!0,e)&&s,s=ji(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=ji(o,r,!1,e)&&s}Fe.prototype.N=function(){if(Fe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Xo(n[r]);delete t.g[e],t.h--}}this.J=null};Fe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Fe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ji(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&xc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Hl=G.JSON.stringify;class WT{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function zT(){var t=Wl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class KT{constructor(){this.h=this.g=null}add(e,n){const r=pg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var pg=new WT(()=>new GT,t=>t.reset());class GT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function QT(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function JT(t){G.setTimeout(()=>{throw t},0)}let Ks,Gs=!1,Wl=new KT,gg=()=>{const t=G.Promise.resolve(void 0);Ks=()=>{t.then(YT)}};var YT=()=>{for(var t;t=zT();){try{t.h.call(t.g)}catch(n){JT(n)}var e=pg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Gs=!1};function ea(t,e){Fe.call(this),this.h=t||1,this.g=e||G,this.j=Xe(this.qb,this),this.l=Date.now()}Ue(ea,Fe);O=ea.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),qe(this,"tick"),this.ga&&(zl(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zl(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){ea.$.N.call(this),zl(this),delete this.g};function Kl(t,e,n){if(typeof t=="function")n&&(t=Xe(t,n));else if(t&&typeof t.handleEvent=="function")t=Xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function mg(t){t.g=Kl(()=>{t.g=null,t.i&&(t.i=!1,mg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class XT extends Ln{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:mg(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qs(t){Ln.call(this),this.h=t,this.g={}}Ue(Qs,Ln);var ld=[];function _g(t,e,n,r){Array.isArray(n)||(n&&(ld[0]=n.toString()),n=ld);for(var s=0;s<n.length;s++){var i=lg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function yg(t){Ul(t.g,function(e,n){this.g.hasOwnProperty(n)&&jl(e)},t),t.g={}}Qs.prototype.N=function(){Qs.$.N.call(this),yg(this)};Qs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ta(){this.g=!0}ta.prototype.Ea=function(){this.g=!1};function ZT(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function eA(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Rr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+nA(t,n)+(r?" "+r:"")})}function tA(t,e){t.info(function(){return"TIMEOUT: "+e})}ta.prototype.info=function(){};function nA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Hl(n)}catch{return e}}var hr={},ud=null;function na(){return ud=ud||new Fe}hr.Ta="serverreachability";function vg(t){Ze.call(this,hr.Ta,t)}Ue(vg,Ze);function Js(t){const e=na();qe(e,new vg(e))}hr.STAT_EVENT="statevent";function Eg(t,e){Ze.call(this,hr.STAT_EVENT,t),this.stat=e}Ue(Eg,Ze);function it(t){const e=na();qe(e,new Eg(e,t))}hr.Ua="timingevent";function Ig(t,e){Ze.call(this,hr.Ua,t),this.size=e}Ue(Ig,Ze);function mi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var ra={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},wg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Gl(){}Gl.prototype.h=null;function hd(t){return t.h||(t.h=t.i())}function Tg(){}var _i={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ql(){Ze.call(this,"d")}Ue(Ql,Ze);function Jl(){Ze.call(this,"c")}Ue(Jl,Ze);var Mc;function sa(){}Ue(sa,Gl);sa.prototype.g=function(){return new XMLHttpRequest};sa.prototype.i=function(){return{}};Mc=new sa;function yi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Qs(this),this.P=rA,t=Oc?125:void 0,this.V=new ea(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ag}function Ag(){this.i=null,this.g="",this.h=!1}var rA=45e3,Rg={},Fc={};O=yi.prototype;O.setTimeout=function(t){this.P=t};function Uc(t,e,n){t.L=1,t.A=oa(rn(e)),t.u=n,t.S=!0,Sg(t,null)}function Sg(t,e){t.G=Date.now(),vi(t),t.B=rn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Ng(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Ag,t.g=tm(t.l,n?e:null,!t.u),0<t.O&&(t.M=new XT(Xe(t.Pa,t,t.g),t.O)),_g(t.U,t.g,"readystatechange",t.nb),e=t.I?ag(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Js(),ZT(t.j,t.v,t.B,t.m,t.W,t.u)}O.nb=function(t){t=t.target;const e=this.M;e&&Lt(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const u=Lt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Oc||this.g&&(this.h.h||this.g.ja()||gd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Js(3):Js(2)),ia(this);var n=this.g.da();this.ca=n;t:if(Pg(this)){var r=gd(this.g);t="";var s=r.length,i=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qn(this),bs(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,eA(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ws(a)){var l=a;break t}}l=null}if(n=l)Rr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bc(this,n);else{this.i=!1,this.s=3,it(12),Qn(this),bs(this);break e}}this.S?(Cg(this,u,o),Oc&&this.i&&u==3&&(_g(this.U,this.V,"tick",this.mb),this.V.start())):(Rr(this.j,this.m,o,null),Bc(this,o)),u==4&&Qn(this),this.i&&!this.J&&(u==4?Yg(this.l,this):(this.i=!1,vi(this)))}else AA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Qn(this),bs(this)}}}catch{}finally{}};function Pg(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Cg(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=sA(t,n),s==Fc){e==4&&(t.s=4,it(14),r=!1),Rr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Rg){t.s=4,it(15),Rr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Rr(t.j,t.m,s,null),Bc(t,s);Pg(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,it(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nu(e),e.M=!0,it(11))):(Rr(t.j,t.m,n,"[Invalid Chunked Response]"),Qn(t),bs(t))}O.mb=function(){if(this.g){var t=Lt(this.g),e=this.g.ja();this.o<e.length&&(ia(this),Cg(this,t,e),this.i&&t!=4&&vi(this))}};function sA(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Fc:(n=Number(e.substring(n,r)),isNaN(n)?Rg:(r+=1,r+n>e.length?Fc:(e=e.slice(r,r+n),t.o=r+n,e)))}O.cancel=function(){this.J=!0,Qn(this)};function vi(t){t.Y=Date.now()+t.P,bg(t,t.P)}function bg(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=mi(Xe(t.lb,t),e)}function ia(t){t.C&&(G.clearTimeout(t.C),t.C=null)}O.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(tA(this.j,this.B),this.L!=2&&(Js(),it(17)),Qn(this),this.s=2,bs(this)):bg(this,this.Y-t)};function bs(t){t.l.H==0||t.J||Yg(t.l,t)}function Qn(t){ia(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,zl(t.V),yg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Bc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||jc(n.i,t))){if(!t.K&&jc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Io(n),ua(n);else break e;tu(n),it(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=mi(Xe(n.ib,n),6e3));if(1>=Mg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Jn(n,11)}else if((t.K||n.g==t)&&Io(n),!Ws(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Yl(i,i.h),i.h=null))}if(r.F){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Ee(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=em(r,r.J?r.pa:null,r.Y),o.K){Fg(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(ia(a),vi(a)),r.g=o}else Qg(r);0<n.j.length&&ha(n)}else l[0]!="stop"&&l[0]!="close"||Jn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Jn(n,7):eu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Js(4)}catch{}}function iA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Jo(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function oA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Jo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function kg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Jo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=oA(t),r=iA(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Dg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function nr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof nr){this.h=t.h,vo(this,t.j),this.s=t.s,this.g=t.g,Eo(this,t.m),this.l=t.l;var e=t.i,n=new Ys;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),dd(this,n),this.o=t.o}else t&&(e=String(t).match(Dg))?(this.h=!1,vo(this,e[1]||"",!0),this.s=gs(e[2]||""),this.g=gs(e[3]||"",!0),Eo(this,e[4]),this.l=gs(e[5]||"",!0),dd(this,e[6]||"",!0),this.o=gs(e[7]||"")):(this.h=!1,this.i=new Ys(null,this.h))}nr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ms(e,fd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ms(e,fd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ms(n,n.charAt(0)=="/"?uA:lA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ms(n,dA)),t.join("")};function rn(t){return new nr(t)}function vo(t,e,n){t.j=n?gs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Eo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function dd(t,e,n){e instanceof Ys?(t.i=e,fA(t.i,t.h)):(n||(e=ms(e,hA)),t.i=new Ys(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function oa(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function gs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ms(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,cA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var fd=/[#\/\?@]/g,lA=/[#\?:]/g,uA=/[#\?]/g,hA=/[#\?@]/g,dA=/#/g;function Ys(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Mn(t){t.g||(t.g=new Map,t.h=0,t.i&&aA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=Ys.prototype;O.add=function(t,e){Mn(this),this.i=null,t=Xr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Og(t,e){Mn(t),e=Xr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Vg(t,e){return Mn(t),e=Xr(t,e),t.g.has(e)}O.forEach=function(t,e){Mn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};O.ta=function(){Mn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};O.Z=function(t){Mn(this);let e=[];if(typeof t=="string")Vg(this,t)&&(e=e.concat(this.g.get(Xr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return Mn(this),this.i=null,t=Xr(this,t),Vg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Ng(t,e,n){Og(t,e),0<n.length&&(t.i=null,t.g.set(Xr(t,e),Ml(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Xr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fA(t,e){e&&!t.j&&(Mn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Og(this,r),Ng(this,s,n))},t)),t.j=e}var pA=class{constructor(t,e){this.g=t,this.map=e}};function xg(t){this.l=t||gA,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gA=10;function Lg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Mg(t){return t.h?1:t.g?t.g.size:0}function jc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Yl(t,e){t.g?t.g.add(e):t.h=e}function Fg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}xg.prototype.cancel=function(){if(this.i=Ug(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ug(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ml(t.i)}var mA=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function _A(){this.g=new mA}function yA(t,e,n){const r=n||"";try{kg(t,function(s,i){let o=s;pi(s)&&(o=Hl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function vA(t,e){const n=new ta;if(G.Image){const r=new Image;r.onload=Bi($i,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Bi($i,n,r,"TestLoadImage: error",!1,e),r.onabort=Bi($i,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Bi($i,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function $i(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function aa(t){this.l=t.ec||null,this.j=t.ob||!1}Ue(aa,Gl);aa.prototype.g=function(){return new ca(this.l,this.j)};aa.prototype.i=function(t){return function(){return t}}({});function ca(t,e){Fe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Xl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(ca,Fe);var Xl=0;O=ca.prototype;O.open=function(t,e){if(this.readyState!=Xl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Xs(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ei(this)),this.readyState=Xl};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xs(this)),this.g&&(this.readyState=3,Xs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Bg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ei(this):Xs(this),this.readyState==3&&Bg(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,Ei(this))};O.Ya=function(t){this.g&&(this.response=t,Ei(this))};O.ka=function(){this.g&&Ei(this)};function Ei(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Xs(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Xs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var EA=G.JSON.parse;function Pe(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=jg,this.L=this.M=!1}Ue(Pe,Fe);var jg="",IA=/^https?$/i,wA=["POST","PUT"];O=Pe.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Mc.g(),this.C=this.u?hd(this.u):hd(Mc),this.g.onreadystatechange=Xe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){pd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=G.FormData&&t instanceof G.FormData,!(0<=rg(wA,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Hg(this),0<this.B&&((this.L=TA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xe(this.ua,this)):this.A=Kl(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){pd(this,i)}};function TA(t){return jr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof Ll<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function pd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$g(t),la(t)}function $g(t){t.F||(t.F=!0,qe(t,"complete"),qe(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),la(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),la(this,!0)),Pe.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?qg(this):this.kb())};O.kb=function(){qg(this)};function qg(t){if(t.h&&typeof Ll<"u"&&(!t.C[1]||Lt(t)!=4||t.da()!=2)){if(t.v&&Lt(t)==4)Kl(t.La,0,t);else if(qe(t,"readystatechange"),Lt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Dg)[1]||null;!s&&G.self&&G.self.location&&(s=G.self.location.protocol.slice(0,-1)),r=!IA.test(s?s.toLowerCase():"")}n=r}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var i=2<Lt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",$g(t)}}finally{la(t)}}}}function la(t,e){if(t.g){Hg(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Hg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function Lt(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),EA(e)}};function gd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case jg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function AA(t){const e={};t=(t.g&&2<=Lt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ws(t[r]))continue;var n=QT(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}$T(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Wg(t){let e="";return Ul(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Wg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function ls(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zg(t){this.Ga=0,this.j=[],this.l=new ta,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ls("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ls("baseRetryDelayMs",5e3,t),this.hb=ls("retryDelaySeedMs",1e4,t),this.eb=ls("forwardChannelMaxRetries",2,t),this.xa=ls("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new xg(t&&t.concurrentRequestLimit),this.Ja=new _A,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=zg.prototype;O.ra=8;O.H=1;function eu(t){if(Kg(t),t.H==3){var e=t.W++,n=rn(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),Ii(t,n),e=new yi(t,t.l,e),e.L=2,e.A=oa(rn(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.A,n=!0),n||(e.g=tm(e.l,null),e.g.ha(e.A)),e.G=Date.now(),vi(e)}Zg(t)}function ua(t){t.g&&(nu(t),t.g.cancel(),t.g=null)}function Kg(t){ua(t),t.u&&(G.clearTimeout(t.u),t.u=null),Io(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function ha(t){if(!Lg(t.i)&&!t.m){t.m=!0;var e=t.Na;Ks||gg(),Gs||(Ks(),Gs=!0),Wl.add(e,t),t.C=0}}function RA(t,e){return Mg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=mi(Xe(t.Na,t,e),Xg(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new yi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=ag(i),cg(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Gg(this,s,e),n=rn(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),Ii(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Wg(i)))+"&"+e:this.o&&Zl(n,this.o,i)),Yl(this.i,s),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),s.aa=!0,Uc(s,n,null)):Uc(s,n,e),this.H=2}}else this.H==3&&(t?md(this,t):this.j.length==0||Lg(this.i)||md(this))};function md(t,e){var n;e?n=e.m:n=t.W++;const r=rn(t.I);Ee(r,"SID",t.K),Ee(r,"RID",n),Ee(r,"AID",t.V),Ii(t,r),t.o&&t.s&&Zl(r,t.o,t.s),n=new yi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Gg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Yl(t.i,n),Uc(n,r,e)}function Ii(t,e){t.na&&Ul(t.na,function(n,r){Ee(e,r,n)}),t.h&&kg({},function(n,r){Ee(e,r,n)})}function Gg(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Xe(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{yA(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Qg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ks||gg(),Gs||(Ks(),Gs=!0),Wl.add(e,t),t.A=0}}function tu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=mi(Xe(t.Ma,t),Xg(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,Jg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=mi(Xe(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,it(10),ua(this),Jg(this))};function nu(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function Jg(t){t.g=new yi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=rn(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),Ii(t,e),t.o&&t.s&&Zl(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=oa(rn(e)),n.u=null,n.S=!0,Sg(n,t)}O.ib=function(){this.v!=null&&(this.v=null,ua(this),tu(this),it(19))};function Io(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Yg(t,e){var n=null;if(t.g==e){Io(t),nu(t),t.g=null;var r=2}else if(jc(t.i,e))n=e.F,Fg(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=na(),qe(r,new Ig(r,n)),ha(t)}else Qg(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&RA(t,e)||r==2&&tu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Jn(t,5);break;case 4:Jn(t,10);break;case 3:Jn(t,6);break;default:Jn(t,2)}}}function Xg(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Jn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Xe(t.pb,t);n||(n=new nr("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||vo(n,"https"),oa(n)),vA(n.toString(),r)}else it(2);t.H=0,t.h&&t.h.za(e),Zg(t),Kg(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),it(2)):(this.l.info("Failed to ping google.com"),it(1))};function Zg(t){if(t.H=0,t.ma=[],t.h){const e=Ug(t.i);(e.length!=0||t.j.length!=0)&&(od(t.ma,e),od(t.ma,t.j),t.i.i.length=0,Ml(t.j),t.j.length=0),t.h.ya()}}function em(t,e,n){var r=n instanceof nr?rn(n):new nr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Eo(r,r.m);else{var s=G.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new nr(null);r&&vo(i,r),e&&(i.g=e),s&&Eo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ra),Ii(t,r),r}function tm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Pe(new aa({ob:n})):new Pe(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function nm(){}O=nm.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function wo(){if(jr&&!(10<=Number(FT)))throw Error("Environmental error: no available transport.")}wo.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){Fe.call(this),this.g=new zg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ws(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ws(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zr(this)}Ue(pt,Fe);pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;it(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=em(t,null,t.Y),ha(t)};pt.prototype.close=function(){eu(this.g)};pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Hl(t),t=n);e.j.push(new pA(e.fb++,t)),e.H==3&&ha(e)};pt.prototype.N=function(){this.g.h=null,delete this.j,eu(this.g),delete this.g,pt.$.N.call(this)};function rm(t){Ql.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ue(rm,Ql);function sm(){Jl.call(this),this.status=1}Ue(sm,Jl);function Zr(t){this.g=t}Ue(Zr,nm);Zr.prototype.Ba=function(){qe(this.g,"a")};Zr.prototype.Aa=function(t){qe(this.g,new rm(t))};Zr.prototype.za=function(t){qe(this.g,new sm)};Zr.prototype.ya=function(){qe(this.g,"b")};function SA(){this.blockSize=-1}function St(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ue(St,SA);St.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ya(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}St.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Ya(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Ya(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Ya(this,r),s=0;break}}this.h=s,this.i+=e};St.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function pe(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var PA={};function ru(t){return-128<=t&&128>t?xT(t,function(e){return new pe([e|0],0>e?-1:0)}):new pe([t|0],0>t?-1:0)}function Mt(t){if(isNaN(t)||!isFinite(t))return Dr;if(0>t)return je(Mt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=$c;return new pe(e,0)}function im(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return je(im(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Mt(Math.pow(e,8)),r=Dr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Mt(Math.pow(e,i)),r=r.R(i).add(Mt(o))):(r=r.R(n),r=r.add(Mt(o)))}return r}var $c=4294967296,Dr=ru(0),qc=ru(1),_d=ru(16777216);O=pe.prototype;O.ea=function(){if(yt(this))return-je(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:$c+r)*e,e*=$c}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Jt(this))return"0";if(yt(this))return"-"+je(this).toString(t);for(var e=Mt(Math.pow(t,6)),n=this,r="";;){var s=Ao(n,e).g;n=To(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Jt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Jt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function yt(t){return t.h==-1}O.X=function(t){return t=To(this,t),yt(t)?-1:Jt(t)?0:1};function je(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new pe(n,~t.h).add(qc)}O.abs=function(){return yt(this)?je(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new pe(n,n[n.length-1]&-2147483648?-1:0)};function To(t,e){return t.add(je(e))}O.R=function(t){if(Jt(this)||Jt(t))return Dr;if(yt(this))return yt(t)?je(this).R(je(t)):je(je(this).R(t));if(yt(t))return je(this.R(je(t)));if(0>this.X(_d)&&0>t.X(_d))return Mt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,qi(n,2*r+2*s),n[2*r+2*s+1]+=i*c,qi(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,qi(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,qi(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new pe(n,0)};function qi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function us(t,e){this.g=t,this.h=e}function Ao(t,e){if(Jt(e))throw Error("division by zero");if(Jt(t))return new us(Dr,Dr);if(yt(t))return e=Ao(je(t),e),new us(je(e.g),je(e.h));if(yt(e))return e=Ao(t,je(e)),new us(je(e.g),e.h);if(30<t.g.length){if(yt(t)||yt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=qc,r=e;0>=r.X(t);)n=yd(n),r=yd(r);var s=vr(n,1),i=vr(r,1);for(r=vr(r,2),n=vr(n,2);!Jt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=vr(r,1),n=vr(n,1)}return e=To(t,s.R(e)),new us(s,e)}for(s=Dr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Mt(n),o=i.R(e);yt(o)||0<o.X(t);)n-=r,i=Mt(n),o=i.R(e);Jt(i)&&(i=qc),s=s.add(i),t=To(t,o)}return new us(s,t)}O.gb=function(t){return Ao(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new pe(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new pe(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new pe(n,this.h^t.h)};function yd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new pe(n,t.h)}function vr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new pe(s,t.h)}wo.prototype.createWebChannel=wo.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;ra.NO_ERROR=0;ra.TIMEOUT=8;ra.HTTP_ERROR=6;wg.COMPLETE="complete";Tg.EventType=_i;_i.OPEN="a";_i.CLOSE="b";_i.ERROR="c";_i.MESSAGE="d";Fe.prototype.listen=Fe.prototype.O;Pe.prototype.listenOnce=Pe.prototype.P;Pe.prototype.getLastError=Pe.prototype.Sa;Pe.prototype.getLastErrorCode=Pe.prototype.Ia;Pe.prototype.getStatus=Pe.prototype.da;Pe.prototype.getResponseJson=Pe.prototype.Wa;Pe.prototype.getResponseText=Pe.prototype.ja;Pe.prototype.send=Pe.prototype.ha;Pe.prototype.setWithCredentials=Pe.prototype.Oa;St.prototype.digest=St.prototype.l;St.prototype.reset=St.prototype.reset;St.prototype.update=St.prototype.j;pe.prototype.add=pe.prototype.add;pe.prototype.multiply=pe.prototype.R;pe.prototype.modulo=pe.prototype.gb;pe.prototype.compare=pe.prototype.X;pe.prototype.toNumber=pe.prototype.ea;pe.prototype.toString=pe.prototype.toString;pe.prototype.getBits=pe.prototype.D;pe.fromNumber=Mt;pe.fromString=im;var CA=function(){return new wo},bA=function(){return na()},Xa=ra,kA=wg,DA=hr,vd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Hi=Tg,OA=Pe,VA=St,Or=pe;const Ed="@firebase/firestore";/**
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
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */let es="10.11.0";/**
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
 */const ir=new Vl("@firebase/firestore");function hs(){return ir.logLevel}function D(t,...e){if(ir.logLevel<=se.DEBUG){const n=e.map(su);ir.debug(`Firestore (${es}): ${t}`,...n)}}function Wt(t,...e){if(ir.logLevel<=se.ERROR){const n=e.map(su);ir.error(`Firestore (${es}): ${t}`,...n)}}function $r(t,...e){if(ir.logLevel<=se.WARN){const n=e.map(su);ir.warn(`Firestore (${es}): ${t}`,...n)}}function su(t){if(typeof t=="string")return t;try{/**
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
 */function z(t="Unexpected state"){const e=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: `+t;throw Wt(e),new Error(e)}function ye(t,e){t||z()}function X(t,e){return t}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class om{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class xA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class LA{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new om(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new Qe(e)}}class MA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class FA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new MA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class UA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new UA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function jA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class am{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=jA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function qr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Oe(0,0))}static max(){return new J(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Zs{constructor(e,n,r){n===void 0?n=0:n>e.length&&z(),r===void 0?r=e.length-n:r>e.length-n&&z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Zs{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const $A=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Zs{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return $A.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new x(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new x(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new x(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Ie.fromString(e))}static fromName(e){return new j(Ie.fromString(e).popFirst(5))}static empty(){return new j(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Ie(e.slice()))}}function qA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new Dn(s,j.empty(),e)}function HA(t){return new Dn(t.readTime,t.key,-1)}class Dn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dn(J.min(),j.empty(),-1)}static max(){return new Dn(J.max(),j.empty(),-1)}}function WA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const zA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function wi(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==zA)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(s=>s?A.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new A((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new A((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class iu{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new tn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ks(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=ou(r.target.error);this.V.reject(new ks(e,s))}}static open(e,n,r,s){try{return new iu(n,e.transaction(s,r))}catch(i){throw new ks(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(D("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new QA(n)}}class Yn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Yn.S(De())===12.2&&Wt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return D("SimpleDb","Removing database:",e),zn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Jp())return!1;if(Yn.C())return!0;const e=De(),n=Yn.S(e),r=0<n&&n<10,s=Yn.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(D("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new ks(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new x(w.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new x(w.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ks(e,o))},s.onupgradeneeded=i=>{D("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{D("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=iu.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),A.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(D("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class GA{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return zn(this.k.delete())}}class ks extends x{constructor(e,n){super(w.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ti(t){return t.name==="IndexedDbTransactionError"}class QA{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(D("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(D("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),zn(r)}add(e){return D("SimpleDb","ADD",this.store.name,e,e),zn(this.store.add(e))}get(e){return zn(this.store.get(e)).next(n=>(n===void 0&&(n=null),D("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return D("SimpleDb","DELETE",this.store.name,e),zn(this.store.delete(e))}count(){return D("SimpleDb","COUNT",this.store.name),zn(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new A((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new A((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){D("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new A((r,s)=>{n.onerror=i=>{const o=ou(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new A((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new GA(a),l=n(a.primaryKey,a.value,c);if(l instanceof A){const u=l.catch(h=>(c.done(),A.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>A.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function zn(t){return new A((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=ou(r.target.error);n(s)}})}let Id=!1;function ou(t){const e=Yn.S(De());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Id||(Id=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class au{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}au._e=-1;function da(t){return t==null}function Ro(t){return t===0&&1/t==-1/0}function JA(t){return typeof t=="number"&&Number.isInteger(t)&&!Ro(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function wd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wi(this.root,e,this.comparator,!0)}}class Wi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Be.RED,this.left=s??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Td(this.data.getIterator())}getIteratorFrom(e){return new Td(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Td{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Tt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new He($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new lm("Invalid base64 string: "+i):i}}(e);return new tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const YA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(t){if(ye(!!t),typeof t=="string"){let e=0;const n=YA.exec(t);if(ye(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function or(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */function cu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lu(t){const e=t.mapValue.fields.__previous_value__;return cu(e)?lu(e):e}function ei(t){const e=On(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
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
 */class XA{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ti{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ti&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const zi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cu(t)?4:ZA(t)?9007199254740991:10:z()}function zt(t,e){if(t===e)return!0;const n=ar(t);if(n!==ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ei(t).isEqual(ei(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=On(s.timestampValue),a=On(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return or(s.bytesValue).isEqual(or(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return be(s.geoPointValue.latitude)===be(i.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return be(s.integerValue)===be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=be(s.doubleValue),a=be(i.doubleValue);return o===a?Ro(o)===Ro(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return qr(t.arrayValue.values||[],e.arrayValue.values||[],zt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(wd(o)!==wd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!zt(o[c],a[c])))return!1;return!0}(t,e);default:return z()}}function ni(t,e){return(t.values||[]).find(n=>zt(n,e))!==void 0}function Hr(t,e){if(t===e)return 0;const n=ar(t),r=ar(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=be(i.integerValue||i.doubleValue),c=be(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Ad(t.timestampValue,e.timestampValue);case 4:return Ad(ei(t),ei(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(i,o){const a=or(i),c=or(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=le(a[l],c[l]);if(u!==0)return u}return le(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=le(be(i.latitude),be(o.latitude));return a!==0?a:le(be(i.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Hr(a[l],c[l]);if(u)return u}return le(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===zi.mapValue&&o===zi.mapValue)return 0;if(i===zi.mapValue)return 1;if(o===zi.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=le(c[h],u[h]);if(d!==0)return d;const p=Hr(a[c[h]],l[u[h]]);if(p!==0)return p}return le(c.length,u.length)}(t.mapValue,e.mapValue);default:throw z()}}function Ad(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=On(t),r=On(e),s=le(n.seconds,r.seconds);return s!==0?s:le(n.nanos,r.nanos)}function Wr(t){return Hc(t)}function Hc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=On(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return or(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return j.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Hc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Hc(n.fields[o])}`;return s+"}"}(t.mapValue):z()}function Rd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wc(t){return!!t&&"integerValue"in t}function uu(t){return!!t&&"arrayValue"in t}function Sd(t){return!!t&&"nullValue"in t}function Pd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function no(t){return!!t&&"mapValue"in t}function Ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ts(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ds(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ZA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!no(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(n)}setAll(e){let n=$e.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ds(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());no(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];no(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ts(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new vt(Ds(this.value))}}function um(t){const e=[];return ts(t.fields,(n,r)=>{const s=new $e([n]);if(no(r)){const i=um(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Tt(e)}/**
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
 */class Je{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Je(e,0,J.min(),J.min(),J.min(),vt.empty(),0)}static newFoundDocument(e,n,r,s){return new Je(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new Je(e,2,n,J.min(),J.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,J.min(),J.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class So{constructor(e,n){this.position=e,this.inclusive=n}}function Cd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Hr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function bd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ri{constructor(e,n="asc"){this.field=e,this.dir=n}}function e0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class hm{}class ke extends hm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new n0(e,n,r):n==="array-contains"?new i0(e,r):n==="in"?new o0(e,r):n==="not-in"?new a0(e,r):n==="array-contains-any"?new c0(e,r):new ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new r0(e,r):new s0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hr(n,this.value)):n!==null&&ar(this.value)===ar(n)&&this.matchesComparison(Hr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pt extends hm{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Pt(e,n)}matches(e){return dm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function dm(t){return t.op==="and"}function fm(t){return t0(t)&&dm(t)}function t0(t){for(const e of t.filters)if(e instanceof Pt)return!1;return!0}function zc(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+Wr(t.value);if(fm(t))return t.filters.map(e=>zc(e)).join(",");{const e=t.filters.map(n=>zc(n)).join(",");return`${t.op}(${e})`}}function pm(t,e){return t instanceof ke?function(r,s){return s instanceof ke&&r.op===s.op&&r.field.isEqual(s.field)&&zt(r.value,s.value)}(t,e):t instanceof Pt?function(r,s){return s instanceof Pt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&pm(o,s.filters[a]),!0):!1}(t,e):void z()}function gm(t){return t instanceof ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Wr(n.value)}`}(t):t instanceof Pt?function(n){return n.op.toString()+" {"+n.getFilters().map(gm).join(" ,")+"}"}(t):"Filter"}class n0 extends ke{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class r0 extends ke{constructor(e,n){super(e,"in",n),this.keys=mm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class s0 extends ke{constructor(e,n){super(e,"not-in",n),this.keys=mm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class i0 extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uu(n)&&ni(n.arrayValue,this.value)}}class o0 extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ni(this.value.arrayValue,n)}}class a0 extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ni(this.value.arrayValue,n)}}class c0 extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ni(this.value.arrayValue,r))}}/**
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
 */class l0{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function kd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new l0(t,e,n,r,s,i,o)}function hu(t){const e=X(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),da(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wr(r)).join(",")),e.ce=n}return e.ce}function du(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!e0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bd(t.startAt,e.startAt)&&bd(t.endAt,e.endAt)}function Kc(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ns{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function u0(t,e,n,r,s,i,o,a){return new ns(t,e,n,r,s,i,o,a)}function fu(t){return new ns(t)}function Dd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _m(t){return t.collectionGroup!==null}function Os(t){const e=X(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new He($e.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new ri(i,r))}),n.has($e.keyField().canonicalString())||e.le.push(new ri($e.keyField(),r))}return e.le}function Ut(t){const e=X(t);return e.he||(e.he=h0(e,Os(t))),e.he}function h0(t,e){if(t.limitType==="F")return kd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ri(s.field,i)});const n=t.endAt?new So(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new So(t.startAt.position,t.startAt.inclusive):null;return kd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gc(t,e){const n=t.filters.concat([e]);return new ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Qc(t,e,n){return new ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fa(t,e){return du(Ut(t),Ut(e))&&t.limitType===e.limitType}function ym(t){return`${hu(Ut(t))}|lt:${t.limitType}`}function wr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>gm(s)).join(", ")}]`),da(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Wr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Wr(s)).join(",")),`Target(${r})`}(Ut(t))}; limitType=${t.limitType})`}function pa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Os(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Cd(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Os(r),s)||r.endAt&&!function(o,a,c){const l=Cd(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Os(r),s))}(t,e)}function d0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vm(t){return(e,n)=>{let r=!1;for(const s of Os(t)){const i=f0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function f0(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Hr(c,l):z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */class rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ts(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return cm(this.inner)}size(){return this.innerSize}}/**
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
 */const p0=new Se(j.comparator);function sn(){return p0}const Em=new Se(j.comparator);function _s(...t){let e=Em;for(const n of t)e=e.insert(n.key,n);return e}function Im(t){let e=Em;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xn(){return Vs()}function wm(){return Vs()}function Vs(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const g0=new Se(j.comparator),m0=new He(j.comparator);function re(...t){let e=m0;for(const n of t)e=e.add(n);return e}const _0=new He(le);function y0(){return _0}/**
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
 */function Tm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ro(e)?"-0":e}}function Am(t){return{integerValue:""+t}}function v0(t,e){return JA(e)?Am(e):Tm(t,e)}/**
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
 */class ga{constructor(){this._=void 0}}function E0(t,e,n){return t instanceof Po?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&cu(i)&&(i=lu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof si?Sm(t,e):t instanceof ii?Pm(t,e):function(s,i){const o=Rm(s,i),a=Od(o)+Od(s.Ie);return Wc(o)&&Wc(s.Ie)?Am(a):Tm(s.serializer,a)}(t,e)}function I0(t,e,n){return t instanceof si?Sm(t,e):t instanceof ii?Pm(t,e):n}function Rm(t,e){return t instanceof Co?function(r){return Wc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Po extends ga{}class si extends ga{constructor(e){super(),this.elements=e}}function Sm(t,e){const n=Cm(e);for(const r of t.elements)n.some(s=>zt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ii extends ga{constructor(e){super(),this.elements=e}}function Pm(t,e){let n=Cm(e);for(const r of t.elements)n=n.filter(s=>!zt(s,r));return{arrayValue:{values:n}}}class Co extends ga{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Od(t){return be(t.integerValue||t.doubleValue)}function Cm(t){return uu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function w0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof si&&s instanceof si||r instanceof ii&&s instanceof ii?qr(r.elements,s.elements,zt):r instanceof Co&&s instanceof Co?zt(r.Ie,s.Ie):r instanceof Po&&s instanceof Po}(t.transform,e.transform)}class T0{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ro(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ma{}function bm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pu(t.key,Bt.none()):new Ai(t.key,t.data,Bt.none());{const n=t.data,r=vt.empty();let s=new He($e.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new dr(t.key,r,new Tt(s.toArray()),Bt.none())}}function A0(t,e,n){t instanceof Ai?function(s,i,o){const a=s.value.clone(),c=Nd(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof dr?function(s,i,o){if(!ro(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Nd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(km(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ns(t,e,n,r){return t instanceof Ai?function(i,o,a,c){if(!ro(i.precondition,o))return a;const l=i.value.clone(),u=xd(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof dr?function(i,o,a,c){if(!ro(i.precondition,o))return a;const l=xd(i.fieldTransforms,c,o),u=o.data;return u.setAll(km(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return ro(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function R0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Rm(r.transform,s||null);i!=null&&(n===null&&(n=vt.empty()),n.set(r.field,i))}return n||null}function Vd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qr(r,s,(i,o)=>w0(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ai extends ma{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dr extends ma{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function km(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Nd(t,e,n){const r=new Map;ye(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,I0(o,a,n[s]))}return r}function xd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,E0(i,o,e))}return r}class pu extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class S0 extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class P0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&A0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ns(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ns(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=bm(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&qr(this.mutations,e.mutations,(n,r)=>Vd(n,r))&&qr(this.baseMutations,e.baseMutations,(n,r)=>Vd(n,r))}}class gu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ye(e.mutations.length===r.length);let s=function(){return g0}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gu(e,n,r,s)}}/**
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
 */class C0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class b0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ce,ie;function k0(t){switch(t){default:return z();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Dm(t){if(t===void 0)return Wt("GRPC error has no .code"),w.UNKNOWN;switch(t){case Ce.OK:return w.OK;case Ce.CANCELLED:return w.CANCELLED;case Ce.UNKNOWN:return w.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return w.INTERNAL;case Ce.UNAVAILABLE:return w.UNAVAILABLE;case Ce.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Ce.NOT_FOUND:return w.NOT_FOUND;case Ce.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Ce.ABORTED:return w.ABORTED;case Ce.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Ce.DATA_LOSS:return w.DATA_LOSS;default:return z()}}(ie=Ce||(Ce={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function D0(){return new TextEncoder}/**
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
 */const O0=new Or([4294967295,4294967295],0);function Ld(t){const e=D0().encode(t),n=new VA;return n.update(e),new Uint8Array(n.digest())}function Md(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Or([n,r],0),new Or([s,i],0)]}class mu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ys(`Invalid padding: ${n}`);if(r<0)throw new ys(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ys(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ys(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Or.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Or.fromNumber(r)));return s.compare(O0)===1&&(s=new Or([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Ld(e),[r,s]=Md(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new mu(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Ld(e),[r,s]=Md(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ys extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ri.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _a(J.min(),s,new Se(le),sn(),re())}}class Ri{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ri(r,n,re(),re(),re())}}/**
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
 */class so{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class Om{constructor(e,n){this.targetId=e,this.fe=n}}class Vm{constructor(e,n,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Fd{constructor(){this.ge=0,this.pe=Bd(),this.ye=tt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=re(),n=re(),r=re();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:z()}}),new Ri(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Bd()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ye(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class V0{constructor(e){this.Be=e,this.ke=new Map,this.qe=sn(),this.Qe=Ud(),this.Ke=new Se(le)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Kc(i))if(r===0){const o=new j(i.path);this.We(n,o,Je.newNoDocument(o,J.min()))}else ye(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=or(r).toUint8Array()}catch(c){if(c instanceof lm)return $r("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new mu(o,s,i)}catch(c){return $r(c instanceof ys?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Kc(a.target)){const c=new j(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Je.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=re();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new _a(e,n,this.Ke,this.qe,r);return this.qe=sn(),this.Qe=Ud(),this.Ke=new Se(le),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Fd,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new He(le),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new Fd),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function Ud(){return new Se(j.comparator)}function Bd(){return new Se(j.comparator)}const N0={asc:"ASCENDING",desc:"DESCENDING"},x0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},L0={and:"AND",or:"OR"};class M0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jc(t,e){return t.useProto3Json||da(e)?e:{value:e}}function bo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function F0(t,e){return bo(t,e.toTimestamp())}function jt(t){return ye(!!t),J.fromTimestamp(function(n){const r=On(n);return new Oe(r.seconds,r.nanos)}(t))}function _u(t,e){return Yc(t,e).canonicalString()}function Yc(t,e){const n=function(s){return new Ie(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xm(t){const e=Ie.fromString(t);return ye(Bm(e)),e}function Xc(t,e){return _u(t.databaseId,e.path)}function Za(t,e){const n=xm(e);if(n.get(1)!==t.databaseId.projectId)throw new x(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(Mm(n))}function Lm(t,e){return _u(t.databaseId,e)}function U0(t){const e=xm(t);return e.length===4?Ie.emptyPath():Mm(e)}function Zc(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mm(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jd(t,e,n){return{name:Xc(t,e),fields:n.value.mapValue.fields}}function B0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(ye(u===void 0||typeof u=="string"),tt.fromBase64String(u||"")):(ye(u===void 0||u instanceof Buffer||u instanceof Uint8Array),tt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?w.UNKNOWN:Dm(l.code);return new x(u,l.message||"")}(o);n=new Vm(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Za(t,r.document.name),i=jt(r.document.updateTime),o=r.document.createTime?jt(r.document.createTime):J.min(),a=new vt({mapValue:{fields:r.document.fields}}),c=Je.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new so(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Za(t,r.document),i=r.readTime?jt(r.readTime):J.min(),o=Je.newNoDocument(s,i),a=r.removedTargetIds||[];n=new so([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Za(t,r.document),i=r.removedTargetIds||[];n=new so([],i,s,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new b0(s,i),a=r.targetId;n=new Om(a,o)}}return n}function j0(t,e){let n;if(e instanceof Ai)n={update:jd(t,e.key,e.value)};else if(e instanceof pu)n={delete:Xc(t,e.key)};else if(e instanceof dr)n={update:jd(t,e.key,e.data),updateMask:J0(e.fieldMask)};else{if(!(e instanceof S0))return z();n={verify:Xc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Po)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof si)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ii)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Co)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:F0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(t,e.precondition)),n}function $0(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?jt(s.updateTime):jt(i);return o.isEqual(J.min())&&(o=jt(i)),new T0(o,s.transformResults||[])}(n,e))):[]}function q0(t,e){return{documents:[Lm(t,e.path)]}}function H0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Lm(t,s);const i=function(l){if(l.length!==0)return Um(Pt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:Tr(d.field),direction:K0(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Jc(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ut:n,parent:s}}function W0(t){let e=U0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ye(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Fm(h);return d instanceof Pt&&fm(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new ri(Ar(_.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,da(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new So(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new So(p,d)}(n.endAt)),u0(e,s,o,i,a,"F",c,l)}function z0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ar(n.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ar(n.unaryFilter.field);return ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ar(n.unaryFilter.field);return ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ar(n.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(n){return ke.create(Ar(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Pt.create(n.compositeFilter.filters.map(r=>Fm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(n.compositeFilter.op))}(t):z()}function K0(t){return N0[t]}function G0(t){return x0[t]}function Q0(t){return L0[t]}function Tr(t){return{fieldPath:t.canonicalString()}}function Ar(t){return $e.fromServerFormat(t.fieldPath)}function Um(t){return t instanceof ke?function(n){if(n.op==="=="){if(Pd(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NAN"}};if(Sd(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Pd(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NOT_NAN"}};if(Sd(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tr(n.field),op:G0(n.op),value:n.value}}}(t):t instanceof Pt?function(n){const r=n.getFilters().map(s=>Um(s));return r.length===1?r[0]:{compositeFilter:{op:Q0(n.op),filters:r}}}(t):z()}function J0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Bm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class wn{constructor(e,n,r,s,i=J.min(),o=J.min(),a=tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Y0{constructor(e){this.ct=e}}function X0(t){const e=W0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qc(e,e.limit,"L"):e}/**
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
 */class Z0{constructor(){this._n=new eR}addToCollectionParentIndex(e,n){return this._n.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Dn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Dn.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class eR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new He(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(Ie.comparator)).toArray()}}/**
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
 */class zr{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new zr(0)}static Ln(){return new zr(-1)}}/**
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
 */class tR{constructor(){this.changes=new rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class nR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class rR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ns(r.mutation,s,Tt.empty(),Oe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=Xn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=_s();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=sn();const o=Vs(),a=function(){return Vs()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof dr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ns(u.mutation,l,u.mutation.getFieldMask(),Oe.now())):o.set(l.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new nR(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Vs();let s=new Se((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Tt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||re()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=wm();u.forEach(d=>{if(!i.has(d)){const p=bm(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_m(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):A.resolve(Xn());let a=-1,c=i;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:Im(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let s=_s();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=_s();return this.indexManager.getCollectionParents(e,i).next(a=>A.forEach(a,c=>{const l=function(h,d){return new ns(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Je.newInvalidDocument(u)))});let a=_s();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Ns(u.mutation,l,Tt.empty(),Oe.now()),pa(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class sR{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return A.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:jt(s.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:X0(s.bundledQuery),readTime:jt(s.readTime)}}(n)),A.resolve()}}/**
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
 */class iR{constructor(){this.overlays=new Se(j.comparator),this.hr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xn();return A.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const s=Xn(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return A.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Xn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Xn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return A.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new C0(n,r));let i=this.hr.get(n);i===void 0&&(i=re(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class yu{constructor(){this.Pr=new He(Le.Ir),this.Tr=new He(Le.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Le(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new j(new Ie([])),r=new Le(n,e),s=new Le(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new j(new Ie([])),r=new Le(n,e),s=new Le(n,e+1);let i=re();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Le(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return j.comparator(e.key,n.key)||le(e.pr,n.pr)}static Er(e,n){return le(e.pr,n.pr)||j.comparator(e.key,n.key)}}/**
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
 */class oR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new He(Le.Ir)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new P0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Le(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),s=new Le(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(le);return n.forEach(s=>{const i=new Le(s,0),o=new Le(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),A.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new Le(new j(i),0);let a=new He(le);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),A.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ye(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return A.forEach(n.mutations,s=>{const i=new Le(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Le(n,0),s=this.wr.firstAfterOrEqual(r);return A.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class aR{constructor(e){this.vr=e,this.docs=function(){return new Se(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=sn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Je.newInvalidDocument(s))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=sn();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||WA(HA(u),r)<=0||(s.has(u.key)||pa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,s){z()}Fr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cR(this)}getSize(e){return A.resolve(this.size)}}class cR extends tR{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class lR{constructor(e){this.persistence=e,this.Mr=new rs(n=>hu(n),du),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Or=0,this.Nr=new yu,this.targetCount=0,this.Lr=zr.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),A.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new zr(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.qn(n),A.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Nr.containsKey(n))}}/**
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
 */class uR{constructor(e,n){this.Br={},this.overlays={},this.kr=new au(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new lR(this),this.indexManager=new Z0,this.remoteDocumentCache=function(s){return new aR(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Y0(n),this.$r=new sR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new oR(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const s=new hR(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return A.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class hR extends KA{constructor(e){super(),this.currentSequenceNumber=e}}class vu{constructor(e){this.persistence=e,this.zr=new yu,this.jr=null}static Hr(e){return new vu(e)}get Jr(){if(this.jr)return this.jr;throw z()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),A.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Jr,r=>{const s=j.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return A.or([()=>A.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Eu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Eu(e,n.fromCache,r,s)}}/**
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
 */class dR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class fR{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return dw()?8:Yn.v(De())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new dR;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(hs()<=se.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",wr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),A.resolve()):(hs()<=se.DEBUG&&D("QueryEngine","Query:",wr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(hs()<=se.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",wr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ut(n))):A.resolve())}ji(e,n){if(Dd(n))return A.resolve(null);let r=Ut(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Qc(n,null,"F"),r=Ut(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(e,Qc(n,null,"F")):this.es(e,l,n,c)}))})))}Hi(e,n,r,s){return Dd(n)||s.isEqual(J.min())?A.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?A.resolve(null):(hs()<=se.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wr(n)),this.es(e,o,n,qA(s,-1)).next(a=>a))})}Zi(e,n){let r=new He(vm(e));return n.forEach((s,i)=>{pa(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return hs()<=se.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",wr(n)),this.zi.getDocumentsMatchingQuery(e,n,Dn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class pR{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Se(le),this.rs=new rs(i=>hu(i),du),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rR(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function gR(t,e,n,r){return new pR(t,e,n,r)}async function jm(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=re();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function mR(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let p=A.resolve();return d.forEach(_=>{p=p.next(()=>u.getEntry(c,_)).next(y=>{const E=l.docVersions.get(_);ye(E!==null),y.version.compareTo(E)<0&&(h.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=re();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function $m(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function _R(t,e){const n=X(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(tt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(y,E,S){return y.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,p,u)&&a.push(n.Qr.updateTargetData(i,p))});let c=sn(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(yR(i,o,e.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(J.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function yR(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=sn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function vR(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ER(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,A.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function el(t,e,n){const r=X(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ti(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function $d(t,e,n){const r=X(t);let s=J.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=X(c),d=h.rs.get(u);return d!==void 0?A.resolve(h.ns.get(d)):h.Qr.getTargetData(l,u)}(r,o,Ut(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:re())).next(a=>(IR(r,d0(e),a),{documents:a,hs:i})))}function IR(t,e,n){let r=t.ss.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class qd{constructor(){this.activeTargetIds=y0()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wR{constructor(){this.no=new qd,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new qd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class TR{io(e){}shutdown(){}}/**
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
 */class Hd{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ki=null;function ec(){return Ki===null?Ki=function(){return 268435456+Math.round(2147483648*Math.random())}():Ki++,"0x"+Ki.toString(16)}/**
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
 */const AR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class RR{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const Ge="WebChannelConnection";class SR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=ec(),c=this.bo(n,r.toUriEncodedString());D("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(D("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw $r("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+es}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=AR[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=ec();return new Promise((o,a)=>{const c=new OA;c.setWithCredentials(!0),c.listenOnce(kA.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Xa.NO_ERROR:const u=c.getResponseJson();D(Ge,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Xa.TIMEOUT:D(Ge,`RPC '${e}' ${i} timed out`),a(new x(w.DEADLINE_EXCEEDED,"Request time out"));break;case Xa.HTTP_ERROR:const h=c.getStatus();if(D(Ge,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const _=function(E){const S=E.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(S)>=0?S:w.UNKNOWN}(p.status);a(new x(_,p.message))}else a(new x(w.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new x(w.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{D(Ge,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);D(Ge,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(e,n,r){const s=ec(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=CA(),a=bA(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");D(Ge,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const _=new RR({lo:E=>{p?D(Ge,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(d||(D(Ge,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),D(Ge,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},ho:()=>h.close()}),y=(E,S,b)=>{E.listen(S,F=>{try{b(F)}catch(K){setTimeout(()=>{throw K},0)}})};return y(h,Hi.EventType.OPEN,()=>{p||D(Ge,`RPC '${e}' stream ${s} transport opened.`)}),y(h,Hi.EventType.CLOSE,()=>{p||(p=!0,D(Ge,`RPC '${e}' stream ${s} transport closed`),_.Vo())}),y(h,Hi.EventType.ERROR,E=>{p||(p=!0,$r(Ge,`RPC '${e}' stream ${s} transport errored:`,E),_.Vo(new x(w.UNAVAILABLE,"The operation could not be completed")))}),y(h,Hi.EventType.MESSAGE,E=>{var S;if(!p){const b=E.data[0];ye(!!b);const F=b,K=F.error||((S=F[0])===null||S===void 0?void 0:S.error);if(K){D(Ge,`RPC '${e}' stream ${s} received error:`,K);const ee=K.status;let $=function(Z){const _e=Ce[Z];if(_e!==void 0)return Dm(_e)}(ee),de=K.message;$===void 0&&($=w.INTERNAL,de="Unknown error status: "+ee+" with message "+K.message),p=!0,_.Vo(new x($,de)),h.close()}else D(Ge,`RPC '${e}' stream ${s} received:`,b),_.mo(b)}}),y(a,DA.STAT_EVENT,E=>{E.stat===vd.PROXY?D(Ge,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===vd.NOPROXY&&D(Ge,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Ro()},0),_}}function tc(){return typeof document<"u"?document:null}/**
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
 */function ya(t){return new M0(t,!0)}/**
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
 */class qm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class Hm{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new qm(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(Wt(n.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new x(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PR extends Hm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=B0(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?jt(o.readTime):J.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Zc(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Kc(c)?{documents:q0(i,c)}:{query:H0(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Nm(i,o.resumeToken);const l=Jc(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=bo(i,o.snapshotVersion.toTimestamp());const l=Jc(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=z0(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Zc(this.serializer),n.removeTarget=e,this.t_(n)}}class CR extends Hm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=$0(e.writeResults,e.commitTime),r=jt(e.commitTime);return this.listener.T_(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Zc(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>j0(this.serializer,r))};this.t_(n)}}/**
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
 */class bR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new x(w.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Yc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(w.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Yc(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(w.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class kR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Wt(n),this.g_=!1):D("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class DR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{fr(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=X(c);l.v_.add(4),await Si(l),l.x_.set("Unknown"),l.v_.delete(4),await va(l)}(this))})}),this.x_=new kR(r,s)}}async function va(t){if(fr(t))for(const e of t.F_)await e(!0)}async function Si(t){for(const e of t.F_)await e(!1)}function Wm(t,e){const n=X(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Au(n)?Tu(n):ss(n).Jo()&&wu(n,e))}function Iu(t,e){const n=X(t),r=ss(n);n.C_.delete(e),r.Jo()&&zm(n,e),n.C_.size===0&&(r.Jo()?r.Xo():fr(n)&&n.x_.set("Unknown"))}function wu(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ss(t).c_(e)}function zm(t,e){t.O_.Oe(e),ss(t).l_(e)}function Tu(t){t.O_=new V0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ss(t).start(),t.x_.p_()}function Au(t){return fr(t)&&!ss(t).Ho()&&t.C_.size>0}function fr(t){return X(t).v_.size===0}function Km(t){t.O_=void 0}async function OR(t){t.C_.forEach((e,n)=>{wu(t,e)})}async function VR(t,e){Km(t),Au(t)?(t.x_.S_(e),Tu(t)):t.x_.set("Unknown")}async function NR(t,e,n){if(t.x_.set("Online"),e instanceof Vm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ko(t,r)}else if(e instanceof so?t.O_.$e(e):e instanceof Om?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(J.min()))try{const r=await $m(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(tt.EMPTY_BYTE_STRING,u.snapshotVersion)),zm(i,c);const h=new wn(u.target,c,l,u.sequenceNumber);wu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await ko(t,r)}}async function ko(t,e,n){if(!Ti(e))throw e;t.v_.add(1),await Si(t),t.x_.set("Offline"),n||(n=()=>$m(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await va(t)})}function Gm(t,e){return e().catch(n=>ko(t,n,e))}async function Ea(t){const e=X(t),n=Vn(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;xR(e);)try{const s=await vR(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,LR(e,s)}catch(s){await ko(e,s)}Qm(e)&&Jm(e)}function xR(t){return fr(t)&&t.D_.length<10}function LR(t,e){t.D_.push(e);const n=Vn(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function Qm(t){return fr(t)&&!Vn(t).Ho()&&t.D_.length>0}function Jm(t){Vn(t).start()}async function MR(t){Vn(t).d_()}async function FR(t){const e=Vn(t);for(const n of t.D_)e.I_(n.mutations)}async function UR(t,e,n){const r=t.D_.shift(),s=gu.from(r,e,n);await Gm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ea(t)}async function BR(t,e){e&&Vn(t).P_&&await async function(r,s){if(function(o){return k0(o)&&o!==w.ABORTED}(s.code)){const i=r.D_.shift();Vn(r).Zo(),await Gm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ea(r)}}(t,e),Qm(t)&&Jm(t)}async function Wd(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=fr(n);n.v_.add(3),await Si(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await va(n)}async function jR(t,e){const n=X(t);e?(n.v_.delete(2),await va(n)):e||(n.v_.add(2),await Si(n),n.x_.set("Unknown"))}function ss(t){return t.N_||(t.N_=function(n,r,s){const i=X(n);return i.R_(),new PR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:OR.bind(null,t),To:VR.bind(null,t),u_:NR.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Au(t)?Tu(t):t.x_.set("Unknown")):(await t.N_.stop(),Km(t))})),t.N_}function Vn(t){return t.L_||(t.L_=function(n,r,s){const i=X(n);return i.R_(),new CR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:MR.bind(null,t),To:BR.bind(null,t),E_:FR.bind(null,t),T_:UR.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Ea(t)):(await t.L_.stop(),t.D_.length>0&&(D("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
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
 */class Ru{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ru(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Su(t,e){if(Wt("AsyncQueue",`${e}: ${t}`),Ti(t))return new x(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Vr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=_s(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Vr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class zd{constructor(){this.B_=new Se(j.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):z():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Kr{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Kr(e,n,Vr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class $R{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class qR{constructor(){this.queries=new rs(e=>ym(e),fa),this.onlineState="Unknown",this.W_=new Set}}async function Ym(t,e){const n=X(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.K_()&&e.U_()&&(r=2):(i=new $R,r=e.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Su(o,`Initialization of query '${wr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Q_.push(e),e.G_(n.onlineState),i.q_&&e.z_(i.q_)&&Pu(n)}async function Xm(t,e){const n=X(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=e.U_()?0:1:!i.K_()&&e.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function HR(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&Pu(n)}function WR(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function Pu(t){t.W_.forEach(e=>{e.next()})}var tl,Kd;(Kd=tl||(tl={})).j_="default",Kd.Cache="cache";class Zm{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Kr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=Kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==tl.Cache}}/**
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
 */class e_{constructor(e){this.key=e}}class t_{constructor(e){this.key=e}}class zR{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=re(),this.mutatedKeys=re(),this.ha=vm(e),this.Pa=new Vr(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new zd,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=pa(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?_!==y&&(r.track({type:3,doc:p}),E=!0):this.da(d,p)||(r.track({type:2,doc:p}),E=!0,(c&&this.ha(p,c)>0||l&&this.ha(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(c||l)&&(a=!0)),E&&(p?(o=o.add(p),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((u,h)=>function(p,_){const y=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return y(p)-y(_)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],c=this.la.size===0&&this.current&&!s?1:0,l=c!==this.ca;return this.ca=c,o.length!==0||l?{snapshot:new Kr(this.query,e.Pa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new zd,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=re(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new t_(r))}),this.la.forEach(r=>{e.has(r)||n.push(new e_(r))}),n}fa(e){this.ua=e.hs,this.la=re();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return Kr.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class KR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class GR{constructor(e){this.key=e,this.pa=!1}}class QR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new rs(a=>ym(a),fa),this.Sa=new Map,this.ba=new Set,this.Da=new Se(j.comparator),this.Ca=new Map,this.va=new yu,this.Fa={},this.Ma=new Map,this.xa=zr.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function JR(t,e,n=!0){const r=a_(t);let s;const i=r.wa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await n_(r,e,n,!0),s}async function YR(t,e){const n=a_(t);await n_(n,e,!0,!1)}async function n_(t,e,n,r){const s=await ER(t.localStore,Ut(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await XR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Wm(t.remoteStore,s),a}async function XR(t,e,n,r,s){t.Na=(h,d,p)=>async function(y,E,S,b){let F=E.view.Ta(S);F.Xi&&(F=await $d(y.localStore,E.query,!1).then(({documents:de})=>E.view.Ta(de,F)));const K=b&&b.targetChanges.get(E.targetId),ee=b&&b.targetMismatches.get(E.targetId)!=null,$=E.view.applyChanges(F,y.isPrimaryClient,K,ee);return Qd(y,E.targetId,$.Va),$.snapshot}(t,h,d,p);const i=await $d(t.localStore,e,!0),o=new zR(e,i.hs),a=o.Ta(i.documents),c=Ri.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Qd(t,n,l.Va);const u=new KR(e,n,o);return t.wa.set(e,u),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),l.snapshot}async function ZR(t,e,n){const r=X(t),s=r.wa.get(e),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!fa(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await el(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Iu(r.remoteStore,s.targetId),nl(r,s.targetId)}).catch(wi)):(nl(r,s.targetId),await el(r.localStore,s.targetId,!0))}async function eS(t,e){const n=X(t),r=n.wa.get(e),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Iu(n.remoteStore,r.targetId))}async function tS(t,e,n){const r=cS(t);try{const s=await function(o,a){const c=X(o),l=Oe.now(),u=a.reduce((p,_)=>p.add(_.key),re());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let _=sn(),y=re();return c.os.getEntries(p,u).next(E=>{_=E,_.forEach((S,b)=>{b.isValidDocument()||(y=y.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,_)).next(E=>{h=E;const S=[];for(const b of a){const F=R0(b,h.get(b.key).overlayedDocument);F!=null&&S.push(new dr(b.key,F,um(F.value.mapValue),Bt.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,S,a)}).next(E=>{d=E;const S=E.applyToLocalDocumentSet(h,y);return c.documentOverlayCache.saveOverlays(p,E.batchId,S)})}).then(()=>({batchId:d.batchId,changes:Im(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Fa[o.currentUser.toKey()];l||(l=new Se(le)),l=l.insert(a,c),o.Fa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Pi(r,s.changes),await Ea(r.remoteStore)}catch(s){const i=Su(s,"Failed to persist write");n.reject(i)}}async function r_(t,e){const n=X(t);try{const r=await _R(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?ye(o.pa):s.removedDocuments.size>0&&(ye(o.pa),o.pa=!1))}),await Pi(n,r,e)}catch(r){await wi(r)}}function Gd(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=X(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.Q_)d.G_(a)&&(l=!0)}),l&&Pu(c)}(r.eventManager,e),s.length&&r.ya.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nS(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ca.get(e),i=s&&s.key;if(i){let o=new Se(j.comparator);o=o.insert(i,Je.newNoDocument(i,J.min()));const a=re().add(i),c=new _a(J.min(),new Map,new Se(le),o,a);await r_(r,c),r.Da=r.Da.remove(i),r.Ca.delete(e),Cu(r)}else await el(r.localStore,e,!1).then(()=>nl(r,e,n)).catch(wi)}async function rS(t,e){const n=X(t),r=e.batch.batchId;try{const s=await mR(n.localStore,e);i_(n,r,null),s_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pi(n,s)}catch(s){await wi(s)}}async function sS(t,e,n){const r=X(t);try{const s=await function(o,a){const c=X(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(ye(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);i_(r,e,n),s_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pi(r,s)}catch(s){await wi(s)}}function s_(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function i_(t,e,n){const r=X(t);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Fa[r.currentUser.toKey()]=s}}function nl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||o_(t,r)})}function o_(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(Iu(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),Cu(t))}function Qd(t,e,n){for(const r of n)r instanceof e_?(t.va.addReference(r.key,e),iS(t,r)):r instanceof t_?(D("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||o_(t,r.key)):z()}function iS(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(D("SyncEngine","New document in limbo: "+n),t.ba.add(r),Cu(t))}function Cu(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new j(Ie.fromString(e)),r=t.xa.next();t.Ca.set(r,new GR(n)),t.Da=t.Da.insert(n,r),Wm(t.remoteStore,new wn(Ut(fu(n.path)),r,"TargetPurposeLimboResolution",au._e))}}async function Pi(t,e,n){const r=X(t),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,c)=>{o.push(r.Na(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Eu.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(c,l){const u=X(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(l,d=>A.forEach(d.qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>A.forEach(d.Qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Ti(h))throw h;D("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.ns.get(d),_=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(_);u.ns=u.ns.insert(d,y)}}}(r.localStore,i))}async function oS(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await jm(n.localStore,e);n.currentUser=e,function(i,o){i.Ma.forEach(a=>{a.forEach(c=>{c.reject(new x(w.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pi(n,r.us)}}function aS(t,e){const n=X(t),r=n.Ca.get(e);if(r&&r.pa)return re().add(r.key);{let s=re();const i=n.Sa.get(e);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function a_(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=r_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nS.bind(null,e),e.ya.u_=HR.bind(null,e.eventManager),e.ya.La=WR.bind(null,e.eventManager),e}function cS(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sS.bind(null,e),e}class Jd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ya(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return gR(this.persistence,new fR,e.initialUser,this.serializer)}createPersistence(e){return new uR(vu.Hr,this.serializer)}createSharedClientState(e){return new wR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oS.bind(null,this.syncEngine),await jR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qR}()}createDatastore(e){const n=ya(e.databaseInfo.databaseId),r=function(i){return new SR(i)}(e.databaseInfo);return function(i,o,a,c){return new bR(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new DR(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Gd(this.syncEngine,n,0),function(){return Hd.D()?new Hd:new TR}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new QR(s,i,o,a,c,l);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=X(r);D("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Si(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class c_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class uS{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Qe.UNAUTHENTICATED,this.clientId=am.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{D("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(D("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Su(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function nc(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await jm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Yd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dS(t);D("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Wd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Wd(e.remoteStore,s)),t._onlineComponents=e}function hS(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function dS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!hS(n))throw n;$r("Error using user provided cache. Falling back to memory cache: "+n),await nc(t,new Jd)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await nc(t,new Jd);return t._offlineComponents}async function l_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Yd(t,t._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Yd(t,new lS))),t._onlineComponents}function fS(t){return l_(t).then(e=>e.syncEngine)}async function rl(t){const e=await l_(t),n=e.eventManager;return n.onListen=JR.bind(null,e.syncEngine),n.onUnlisten=ZR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=YR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eS.bind(null,e.syncEngine),n}function pS(t,e,n={}){const r=new tn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new c_({next:d=>{o.enqueueAndForget(()=>Xm(i,h)),d.fromCache&&c.source==="server"?l.reject(new x(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Zm(a,u,{includeMetadataChanges:!0,ta:!0});return Ym(i,h)}(await rl(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function u_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Xd=new Map;/**
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
 */function h_(t,e,n){if(!n)throw new x(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gS(t,e,n,r){if(e===!0&&r===!0)throw new x(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zd(t){if(!j.isDocumentKey(t))throw new x(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ef(t){if(j.isDocumentKey(t))throw new x(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ia(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function Cn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ia(t);throw new x(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class tf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=u_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new NA;switch(r.type){case"firstParty":return new FA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xd.get(n);r&&(D("ComponentProvider","Removing Datastore"),Xd.delete(n),r.terminate())}(this),Promise.resolve()}}function mS(t,e,n,r={}){var s;const i=(t=Cn(t,wa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&$r("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Qe.MOCK_USER;else{a=ow(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new x(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Qe(l)}t._authCredentials=new xA(new om(a,c))}}/**
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
 */class Fn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fn(this.firestore,e,this._query)}}class ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}}class bn extends Fn{constructor(e,n,r){super(e,n,fu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new j(e))}withConverter(e){return new bn(this.firestore,e,this._path)}}function rc(t,e,...n){if(t=et(t),h_("collection","path",e),t instanceof wa){const r=Ie.fromString(e,...n);return ef(r),new bn(t,null,r)}{if(!(t instanceof ft||t instanceof bn))throw new x(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return ef(r),new bn(t.firestore,null,r)}}function d_(t,e,...n){if(t=et(t),arguments.length===1&&(e=am.newId()),h_("doc","path",e),t instanceof wa){const r=Ie.fromString(e,...n);return Zd(r),new ft(t,null,new j(r))}{if(!(t instanceof ft||t instanceof bn))throw new x(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Zd(r),new ft(t.firestore,t instanceof bn?t.converter:null,new j(r))}}/**
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
 */class _S{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new qm(this,"async_queue_retry"),this.cu=()=>{const n=tc();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=tc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new tn;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Ti(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Wt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const s=Ru.createAndSchedule(this,e,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&z()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}function nf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Gr extends wa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new _S}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||f_(this),this._firestoreClient.terminate()}}function yS(t,e){const n=typeof t=="object"?t:eg(),r=typeof t=="string"?t:e||"(default)",s=xl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=sw("firestore");i&&mS(s,...i)}return s}function bu(t){return t._firestoreClient||f_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function f_(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new XA(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new uS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Qr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qr(tt.fromBase64String(e))}catch(n){throw new x(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qr(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ku{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class p_{constructor(e){this._methodName=e}}/**
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
 */class Du{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */const vS=/^__.*__$/;class ES{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ai(e,this.data,n,this.fieldTransforms)}}function g_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Ou{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new Ou(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.pu(e),s}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return Do(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(g_(this.Vu)&&vS.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class IS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ya(e)}Cu(e,n,r,s=!1){return new Ou({Vu:e,methodName:n,Du:r,path:$e.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function m_(t){const e=t._freezeSettings(),n=ya(t._databaseId);return new IS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wS(t,e,n,r,s,i={}){const o=t.Cu(i.merge||i.mergeFields?2:0,e,n,s);v_("Data must be an object, but it was:",o,r);const a=__(r,o);let c,l;if(i.merge)c=new Tt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=AS(e,h,n);if(!o.contains(d))throw new x(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);SS(u,d)||u.push(d)}c=new Tt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new ES(new vt(a),c,l)}function TS(t,e,n,r=!1){return Vu(n,t.Cu(r?4:3,e))}function Vu(t,e){if(y_(t=et(t)))return v_("Unsupported field value:",e,t),__(t,e);if(t instanceof p_)return function(r,s){if(!g_(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Vu(a,s.wu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return v0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Oe.fromDate(r);return{timestampValue:bo(s.serializer,i)}}if(r instanceof Oe){const i=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bo(s.serializer,i)}}if(r instanceof Du)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qr)return{bytesValue:Nm(s.serializer,r._byteString)};if(r instanceof ft){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_u(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${Ia(r)}`)}(t,e)}function __(t,e){const n={};return cm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(t,(r,s)=>{const i=Vu(s,e.fu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function y_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Du||t instanceof Qr||t instanceof ft||t instanceof p_)}function v_(t,e,n){if(!y_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ia(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function AS(t,e,n){if((e=et(e))instanceof ku)return e._internalPath;if(typeof e=="string")return E_(t,e);throw Do("Field path arguments must be of type string or ",t,!1,void 0,n)}const RS=new RegExp("[~\\*/\\[\\]]");function E_(t,e,n){if(e.search(RS)>=0)throw Do(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ku(...e.split("."))._internalPath}catch{throw Do(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Do(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new x(w.INVALID_ARGUMENT,a+t+c)}function SS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class I_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Nu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class PS extends I_{data(){return super.data()}}function Nu(t,e){return typeof e=="string"?E_(t,e):e instanceof ku?e._internalPath:e._delegate._internalPath}/**
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
 */function w_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xu{}class T_ extends xu{}function rf(t,e,...n){let r=[];e instanceof xu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Mu).length,a=i.filter(c=>c instanceof Lu).length;if(o>1||o>0&&a>0)throw new x(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Lu extends T_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Lu(e,n,r)}_apply(e){const n=this._parse(e);return A_(e._query,n),new Fn(e.firestore,e.converter,Gc(e._query,n))}_parse(e){const n=m_(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new x(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){af(h,u);const p=[];for(const _ of h)p.push(of(c,i,_));d={arrayValue:{values:p}}}else d=of(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||af(h,u),d=TS(a,o,h,u==="in"||u==="not-in");return ke.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Mu extends xu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Mu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Pt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)A_(o,c),o=Gc(o,c)}(e._query,n),new Fn(e.firestore,e.converter,Gc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fu extends T_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Fu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new x(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ri(i,o)}(e._query,this._field,this._direction);return new Fn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ns(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function sf(t,e="asc"){const n=e,r=Nu("orderBy",t);return Fu._create(r,n)}function of(t,e,n){if(typeof(n=et(n))=="string"){if(n==="")throw new x(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_m(e)&&n.indexOf("/")!==-1)throw new x(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!j.isDocumentKey(r))throw new x(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Rd(t,new j(r))}if(n instanceof ft)return Rd(t,n._key);throw new x(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ia(n)}.`)}function af(t,e){if(!Array.isArray(t)||t.length===0)throw new x(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function A_(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class CS{convertValue(e,n="none"){switch(ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ts(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Du(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=lu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ei(e));default:return null}}convertTimestamp(e){const n=On(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ye(Bm(r));const s=new ti(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(n)||Wt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function bS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class R_ extends I_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new io(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Nu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class io extends R_{data(e={}){return super.data(e)}}class S_{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new vs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new io(this._firestore,this._userDataWriter,r.key,r,new vs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new io(s._firestore,s._userDataWriter,a.doc.key,a.doc,new vs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new io(s._firestore,s._userDataWriter,a.doc.key,a.doc,new vs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:kS(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}class Uu extends CS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function DS(t){t=Cn(t,Fn);const e=Cn(t.firestore,Gr),n=bu(e),r=new Uu(e);return w_(t._query),pS(n,t._query).then(s=>new S_(e,r,t,s))}function OS(t){return P_(Cn(t.firestore,Gr),[new pu(t._key,Bt.none())])}function VS(t,e){const n=Cn(t.firestore,Gr),r=d_(t),s=bS(t.converter,e);return P_(n,[wS(m_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function NS(t,...e){var n,r,s;t=et(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||nf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(nf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof ft)l=Cn(t.firestore,Gr),u=fu(t._key.path),c={next:h=>{e[o]&&e[o](xS(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Cn(t,Fn);l=Cn(h.firestore,Gr),u=h._query;const d=new Uu(l);c={next:p=>{e[o]&&e[o](new S_(l,d,h,p))},error:e[o+1],complete:e[o+2]},w_(t._query)}return function(d,p,_,y){const E=new c_(y),S=new Zm(p,E,_);return d.asyncQueue.enqueueAndForget(async()=>Ym(await rl(d),S)),()=>{E.Qa(),d.asyncQueue.enqueueAndForget(async()=>Xm(await rl(d),S))}}(bu(l),u,a,c)}function P_(t,e){return function(r,s){const i=new tn;return r.asyncQueue.enqueueAndForget(async()=>tS(await fS(r),s,i)),i.promise}(bu(t),e)}function xS(t,e,n){const r=n.docs.get(e._key),s=new Uu(t);return new R_(t,s,e._key,r,new vs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){es=s})(Yr),Br(new rr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Gr(new LA(r.getProvider("auth-internal")),new BA(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new x(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ti(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Pn(Ed,"4.6.0",e),Pn(Ed,"4.6.0","esm2017")})();function Bu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function C_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LS=C_,b_=new di("auth","Firebase",C_());/**
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
 */const Oo=new Vl("@firebase/auth");function MS(t,...e){Oo.logLevel<=se.WARN&&Oo.warn(`Auth (${Yr}): ${t}`,...e)}function oo(t,...e){Oo.logLevel<=se.ERROR&&Oo.error(`Auth (${Yr}): ${t}`,...e)}/**
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
 */function Ct(t,...e){throw ju(t,...e)}function $t(t,...e){return ju(t,...e)}function k_(t,e,n){const r=Object.assign(Object.assign({},LS()),{[e]:n});return new di("auth","Firebase",r).create(e,{appName:t.name})}function nn(t){return k_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ju(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return b_.create(t,...e)}function H(t,e,...n){if(!t)throw ju(e,...n)}function Yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oo(e),new Error(e)}function on(t,e){t||Yt(e)}/**
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
 */function sl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function FS(){return cf()==="http:"||cf()==="https:"}function cf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function US(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FS()||lw()||"connection"in navigator)?navigator.onLine:!0}function BS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ci{constructor(e,n){this.shortDelay=e,this.longDelay=n,on(n>e,"Short delay should be less than long delay!"),this.isMobile=aw()||uw()}get(){return US()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $u(t,e){on(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class D_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $S=new Ci(3e4,6e4);function Un(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bn(t,e,n,r,s={}){return O_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=fi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),D_.fetch()(V_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function O_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jS),e);try{const s=new HS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Gi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Gi(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw k_(t,u,l);Ct(t,u)}}catch(s){if(s instanceof cn)throw s;Ct(t,"network-request-failed",{message:String(s)})}}async function bi(t,e,n,r,s={}){const i=await Bn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ct(t,"multi-factor-auth-required",{_serverResponse:i}),i}function V_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?$u(t.config,s):`${t.config.apiScheme}://${s}`}function qS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class HS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($t(this.auth,"network-request-failed")),$S.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=$t(t,e,r);return s.customData._tokenResponse=n,s}function lf(t){return t!==void 0&&t.enterprise!==void 0}class WS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function zS(t,e){return Bn(t,"GET","/v2/recaptchaConfig",Un(t,e))}/**
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
 */async function KS(t,e){return Bn(t,"POST","/v1/accounts:delete",e)}async function N_(t,e){return Bn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GS(t,e=!1){const n=et(t),r=await n.getIdToken(e),s=qu(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xs(sc(s.auth_time)),issuedAtTime:xs(sc(s.iat)),expirationTime:xs(sc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sc(t){return Number(t)*1e3}function qu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return oo("JWT malformed, contained fewer than 3 sections"),null;try{const s=zp(n);return s?JSON.parse(s):(oo("Failed to decode base64 JWT payload"),null)}catch(s){return oo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function uf(t){const e=qu(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function oi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&QS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function QS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class JS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class il{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xs(this.lastLoginAt),this.creationTime=xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await oi(t,N_(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?x_(i.providerUserInfo):[],a=XS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new il(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function YS(t){const e=et(t);await Vo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function x_(t){return t.map(e=>{var{providerId:n}=e,r=Bu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ZS(t,e){const n=await O_(t,{},async()=>{const r=fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=V_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",D_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function eP(t,e){return Bn(t,"POST","/v2/accounts:revokeToken",Un(t,e))}/**
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
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=uf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ZS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Nr;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
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
 */function dn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Bu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new il(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await oi(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GS(this,e)}reload(){return YS(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(nn(this.auth));const e=await this.getIdToken();return await oi(this,KS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:K,isAnonymous:ee,providerData:$,stsTokenManager:de}=n;H(F&&de,e,"internal-error");const te=Nr.fromJSON(this.name,de);H(typeof F=="string",e,"internal-error"),dn(h,e.name),dn(d,e.name),H(typeof K=="boolean",e,"internal-error"),H(typeof ee=="boolean",e,"internal-error"),dn(p,e.name),dn(_,e.name),dn(y,e.name),dn(E,e.name),dn(S,e.name),dn(b,e.name);const Z=new Xt({uid:F,auth:e,email:d,emailVerified:K,displayName:h,isAnonymous:ee,photoURL:_,phoneNumber:p,tenantId:y,stsTokenManager:te,createdAt:S,lastLoginAt:b});return $&&Array.isArray($)&&(Z.providerData=$.map(_e=>Object.assign({},_e))),E&&(Z._redirectEventId=E),Z}static async _fromIdTokenResponse(e,n,r=!1){const s=new Nr;s.updateFromServerResponse(n);const i=new Xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?x_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Nr;a.updateFromIdToken(r);const c=new Xt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new il(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const hf=new Map;function Zt(t){on(t instanceof Function,"Expected a class definition");let e=hf.get(t);return e?(on(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hf.set(t,e),e)}/**
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
 */class L_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}L_.type="NONE";const df=L_;/**
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
 */function ao(t,e,n){return`firebase:${t}:${e}:${n}`}class xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ao(this.userKey,s.apiKey,i),this.fullPersistenceKey=ao("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xr(Zt(df),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Zt(df);const o=ao(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Xt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new xr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new xr(i,e,r))}}/**
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
 */function ff(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(U_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(M_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(j_(e))return"Blackberry";if($_(e))return"Webos";if(Hu(e))return"Safari";if((e.includes("chrome/")||F_(e))&&!e.includes("edge/"))return"Chrome";if(B_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function M_(t=De()){return/firefox\//i.test(t)}function Hu(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function F_(t=De()){return/crios\//i.test(t)}function U_(t=De()){return/iemobile/i.test(t)}function B_(t=De()){return/android/i.test(t)}function j_(t=De()){return/blackberry/i.test(t)}function $_(t=De()){return/webos/i.test(t)}function Ta(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tP(t=De()){var e;return Ta(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nP(){return hw()&&document.documentMode===10}function q_(t=De()){return Ta(t)||B_(t)||$_(t)||j_(t)||/windows phone/i.test(t)||U_(t)}function rP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function H_(t,e=[]){let n;switch(t){case"Browser":n=ff(De());break;case"Worker":n=`${ff(De())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yr}/${r}`}/**
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
 */class sP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function iP(t,e={}){return Bn(t,"GET","/v2/passwordPolicy",Un(t,e))}/**
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
 */const oP=6;class aP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:oP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class cP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pf(this),this.idTokenSubscription=new pf(this),this.beforeStateQueue=new sP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=b_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await N_(this,{idToken:e}),r=await Xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(nn(this));const n=e?et(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iP(this),n=new aP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new di("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await eP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=H_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&MS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pr(t){return et(t)}class pf{constructor(e){this.auth=e,this.observer=null,this.addObserver=yw(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Aa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lP(t){Aa=t}function W_(t){return Aa.loadJS(t)}function uP(){return Aa.recaptchaEnterpriseScript}function hP(){return Aa.gapiScript}function dP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fP="recaptcha-enterprise",pP="NO_RECAPTCHA";class gP{constructor(e){this.type=fP,this.auth=pr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{zS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new WS(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;lf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(pP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&lf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=uP();c.length!==0&&(c+=a),W_(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function gf(t,e,n,r=!1){const s=new gP(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ol(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await gf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await gf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function mP(t,e){const n=xl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(_o(i,e??{}))return s;Ct(s,"already-initialized")}return n.initialize({options:e})}function _P(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yP(t,e,n){const r=pr(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=z_(e),{host:o,port:a}=vP(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||EP()}function z_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vP(t){const e=z_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:mf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:mf(o)}}}function mf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function EP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Wu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(e){return Yt("not implemented")}_linkToIdToken(e,n){return Yt("not implemented")}_getReauthenticationResolver(e){return Yt("not implemented")}}async function IP(t,e){return Bn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function wP(t,e){return bi(t,"POST","/v1/accounts:signInWithPassword",Un(t,e))}/**
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
 */async function TP(t,e){return bi(t,"POST","/v1/accounts:signInWithEmailLink",Un(t,e))}async function AP(t,e){return bi(t,"POST","/v1/accounts:signInWithEmailLink",Un(t,e))}/**
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
 */class ai extends Wu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ai(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ai(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ol(e,n,"signInWithPassword",wP);case"emailLink":return TP(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ol(e,r,"signUpPassword",IP);case"emailLink":return AP(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Lr(t,e){return bi(t,"POST","/v1/accounts:signInWithIdp",Un(t,e))}/**
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
 */const RP="http://localhost";class cr extends Wu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Bu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new cr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lr(e,n)}buildRequest(){const e={requestUri:RP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fi(n)}return e}}/**
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
 */function SP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PP(t){const e=fs(ps(t)).link,n=e?fs(ps(e)).deep_link_id:null,r=fs(ps(t)).deep_link_id;return(r?fs(ps(r)).link:null)||r||n||e||t}class zu{constructor(e){var n,r,s,i,o,a;const c=fs(ps(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=SP((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=PP(e);try{return new zu(n)}catch{return null}}}/**
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
 */class is{constructor(){this.providerId=is.PROVIDER_ID}static credential(e,n){return ai._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zu.parseLink(n);return H(r,"argument-error"),ai._fromEmailAndCode(e,r.code,r.tenantId)}}is.PROVIDER_ID="password";is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class K_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ki extends K_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yn extends ki{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
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
 */class vn extends ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
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
 */class En extends ki{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
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
 */class In extends ki{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return In.credential(n,r)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
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
 */async function CP(t,e){return bi(t,"POST","/v1/accounts:signUp",Un(t,e))}/**
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
 */class lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Xt._fromIdTokenResponse(e,r,s),o=_f(r);return new lr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=_f(r);return new lr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function _f(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class No extends cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,No.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new No(e,n,r,s)}}function G_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?No._fromErrorAndOperation(t,i,e,r):i})}async function bP(t,e,n=!1){const r=await oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return lr._forOperation(t,"link",r)}/**
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
 */async function kP(t,e,n=!1){const{auth:r}=t;if(xt(r.app))return Promise.reject(nn(r));const s="reauthenticate";try{const i=await oi(t,G_(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=qu(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),lr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),i}}/**
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
 */async function Q_(t,e,n=!1){if(xt(t.app))return Promise.reject(nn(t));const r="signIn",s=await G_(t,r,e),i=await lr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function DP(t,e){return Q_(pr(t),e)}/**
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
 */async function J_(t){const e=pr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function OP(t,e,n){if(xt(t.app))return Promise.reject(nn(t));const r=pr(t),o=await ol(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",CP).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&J_(t),c}),a=await lr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function VP(t,e,n){return xt(t.app)?Promise.reject(nn(t)):DP(et(t),is.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&J_(t),r})}function NP(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function xP(t,e,n){return et(t).beforeAuthStateChanged(e,n)}function LP(t,e,n,r){return et(t).onAuthStateChanged(e,n,r)}function lb(t){return et(t).signOut()}const xo="__sak";/**
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
 */class Y_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xo,"1"),this.storage.removeItem(xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function MP(){const t=De();return Hu(t)||Ta(t)}const FP=1e3,UP=10;class X_ extends Y_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=MP()&&rP(),this.fallbackToPolling=q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);nP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,UP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}X_.type="LOCAL";const BP=X_;/**
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
 */class Z_ extends Y_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Z_.type="SESSION";const ey=Z_;/**
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
 */function jP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ra(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await jP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ra.receivers=[];/**
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
 */function Ku(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $P{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ku("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qt(){return window}function qP(t){qt().location.href=t}/**
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
 */function ty(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function HP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zP(){return ty()?self:null}/**
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
 */const ny="firebaseLocalStorageDb",KP=1,Lo="firebaseLocalStorage",ry="fbase_key";class Di{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sa(t,e){return t.transaction([Lo],e?"readwrite":"readonly").objectStore(Lo)}function GP(){const t=indexedDB.deleteDatabase(ny);return new Di(t).toPromise()}function al(){const t=indexedDB.open(ny,KP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Lo,{keyPath:ry})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Lo)?e(r):(r.close(),await GP(),e(await al()))})})}async function yf(t,e,n){const r=Sa(t,!0).put({[ry]:e,value:n});return new Di(r).toPromise()}async function QP(t,e){const n=Sa(t,!1).get(e),r=await new Di(n).toPromise();return r===void 0?null:r.value}function vf(t,e){const n=Sa(t,!0).delete(e);return new Di(n).toPromise()}const JP=800,YP=3;class sy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await al(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ty()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ra._getInstance(zP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HP(),!this.activeServiceWorker)return;this.sender=new $P(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await al();return await yf(e,xo,"1"),await vf(e,xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Sa(s,!1).getAll();return new Di(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sy.type="LOCAL";const XP=sy;new Ci(3e4,6e4);/**
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
 */function ZP(t,e){return e?Zt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gu extends Wu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eC(t){return Q_(t.auth,new Gu(t),t.bypassAuthState)}function tC(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),kP(n,new Gu(t),t.bypassAuthState)}async function nC(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),bP(n,new Gu(t),t.bypassAuthState)}/**
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
 */class iy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eC;case"linkViaPopup":case"linkViaRedirect":return nC;case"reauthViaPopup":case"reauthViaRedirect":return tC;default:Ct(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rC=new Ci(2e3,1e4);class Sr extends iy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=Ku();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rC.get())};e()}}Sr.currentPopupAction=null;/**
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
 */const sC="pendingRedirect",co=new Map;class iC extends iy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=co.get(this.auth._key());if(!e){try{const r=await oC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}co.set(this.auth._key(),e)}return this.bypassAuthState||co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oC(t,e){const n=lC(e),r=cC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function aC(t,e){co.set(t._key(),e)}function cC(t){return Zt(t._redirectPersistence)}function lC(t){return ao(sC,t.config.apiKey,t.name)}async function uC(t,e,n=!1){if(xt(t.app))return Promise.reject(nn(t));const r=pr(t),s=ZP(r,e),o=await new iC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hC=10*60*1e3;class dC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($t(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ef(e))}saveEventToCache(e){this.cachedEventUids.add(Ef(e)),this.lastProcessedEventTime=Date.now()}}function Ef(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oy(t);default:return!1}}/**
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
 */async function pC(t,e={}){return Bn(t,"GET","/v1/projects",e)}/**
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
 */const gC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mC=/^https?/;async function _C(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pC(t);for(const n of e)try{if(yC(n))return}catch{}Ct(t,"unauthorized-domain")}function yC(t){const e=sl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mC.test(n))return!1;if(gC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const vC=new Ci(3e4,6e4);function If(){const t=qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EC(t){return new Promise((e,n)=>{var r,s,i;function o(){If(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{If(),n($t(t,"network-request-failed"))},timeout:vC.get()})}if(!((s=(r=qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=qt().gapi)===null||i===void 0)&&i.load)o();else{const a=dP("iframefcb");return qt()[a]=()=>{gapi.load?o():n($t(t,"network-request-failed"))},W_(`${hP()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw lo=null,e})}let lo=null;function IC(t){return lo=lo||EC(t),lo}/**
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
 */const wC=new Ci(5e3,15e3),TC="__/auth/iframe",AC="emulator/auth/iframe",RC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PC(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$u(e,AC):`https://${t.config.authDomain}/${TC}`,r={apiKey:e.apiKey,appName:t.name,v:Yr},s=SC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${fi(r).slice(1)}`}async function CC(t){const e=await IC(t),n=qt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:PC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=$t(t,"network-request-failed"),a=qt().setTimeout(()=>{i(o)},wC.get());function c(){qt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const bC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kC=500,DC=600,OC="_blank",VC="http://localhost";class wf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NC(t,e,n,r=kC,s=DC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},bC),{width:r.toString(),height:s.toString(),top:i,left:o}),l=De().toLowerCase();n&&(a=F_(l)?OC:n),M_(l)&&(e=e||VC,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(tP(l)&&a!=="_self")return xC(e||"",a),new wf(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new wf(h)}function xC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const LC="__/auth/handler",MC="emulator/auth/handler",FC=encodeURIComponent("fac");async function Tf(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yr,eventId:s};if(e instanceof K_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_w(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof ki){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${FC}=${encodeURIComponent(c)}`:"";return`${UC(t)}?${fi(a).slice(1)}${l}`}function UC({config:t}){return t.emulator?$u(t,MC):`https://${t.authDomain}/${LC}`}/**
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
 */const ic="webStorageSupport";class BC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ey,this._completeRedirectFn=uC,this._overrideRedirectResult=aC}async _openPopup(e,n,r,s){var i;on((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Tf(e,n,r,sl(),s);return NC(e,o,Ku())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Tf(e,n,r,sl(),s);return qP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(on(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await CC(e),r=new dC(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ic,{type:ic},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ic];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_C(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return q_()||Hu()||Ta()}}const jC=BC;var Af="@firebase/auth",Rf="1.7.1";/**
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
 */class $C{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HC(t){Br(new rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:H_(t)},l=new cP(r,s,i,c);return _P(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Br(new rr("auth-internal",e=>{const n=pr(e.getProvider("auth").getImmediate());return(r=>new $C(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(Af,Rf,qC(t)),Pn(Af,Rf,"esm2017")}/**
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
 */const WC=5*60,zC=Qp("authIdTokenMaxAge")||WC;let Sf=null;const KC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zC)return;const s=n==null?void 0:n.token;Sf!==s&&(Sf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function GC(t=eg()){const e=xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mP(t,{popupRedirectResolver:jC,persistence:[XP,BP,ey]}),r=Qp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=KC(i.toString());xP(n,o,()=>o(n.currentUser)),NP(n,a=>o(a))}}const s=Kp("auth");return s&&yP(n,`http://${s}`),n}function QC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}lP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=$t("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",QC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HC("Browser");const JC={apiKey:"AIzaSyAIP1OWXpOP6Qgo6dn0pCdJD86J1VOJHRw",authDomain:"testing-73cb9.firebaseapp.com",projectId:"testing-73cb9",storageBucket:"testing-73cb9.appspot.com",messagingSenderId:"158565699872",appId:"1:158565699872:web:35ffdb6e4e6b2af89e8745"},ay=Zp(JC),Qi=yS(ay),oc=GC(ay),YC=FE("ContactStore",()=>{const t=rt(null),e=rt([]),n=rt(""),r=rt(""),s=rt(""),i=rt(""),o=rt(""),a=rt(""),c=rt(""),l=async y=>{y.preventDefault();try{await OP(oc,a.value,c.value),a.value="",c.value="",cl.push("/")}catch(E){console.log(E.message),a.value="",c.value=""}},u=async y=>{y.preventDefault();try{await VP(oc,i.value,o.value),i.value="",o.value="",cl.push("/")}catch(E){console.log(E.message),i.value="",o.value=""}};LP(oc,y=>{t.value=y});const h=async()=>{const y=await DS(rf(rc(Qi,"contacts"),sf("name")));e.value=[...y.docs]};NS(rf(rc(Qi,"contacts"),sf("name")),y=>{e.value=[...y.docs]});const d=async y=>{y.preventDefault();try{await VS(rc(Qi,"contacts"),{name:n.value,phNumber:r.value}),n.value="",r.value=""}catch(E){console.error("Error fetching contacts:",E)}},p=async y=>{try{await OS(d_(Qi,"contacts",y))}catch(E){console.error("Error fetching contacts:",E)}},_=dt(()=>e.value.filter(y=>y.data().name.toLowerCase().includes(s.value.trim().toLowerCase())));return{loginUser:t,email:i,password:o,regEmail:a,regPassword:c,handleSignUp:l,handleSignIn:u,filteredContacts:_,search:s,name:n,phNumber:r,fetchContactList:h,addContacts:d,deleteContacts:p}}),XC={key:0},ZC={key:1,class:"flex flex-col items-start gap-2"},eb={class:"flex gap-2"},tb={__name:"HomeView",setup(t){const e=Ui(()=>Gn(()=>import("./Welcome-uTBacHQK.js"),__vite__mapDeps([0,1]))),n=Ui(()=>Gn(()=>import("./SearchContacts-DLxFUyr3.js"),[])),r=Ui(()=>Gn(()=>import("./AddContacts-ByTNsD1O.js"),__vite__mapDeps([2,1]))),s=Ui(()=>Gn(()=>import("./DisplayContacts-BpD7qBcj.js"),__vite__mapDeps([3,1]))),i=YC();return i.fetchContactList(),(o,a)=>{var l;const c=lp("RouterLink");return As(),Rs("div",null,[_t(i).loginUser?(As(),Rs("div",XC,[Re(_t(e),{email:(l=_t(i).loginUser)==null?void 0:l.email},null,8,["email"]),Re(_t(n)),Re(_t(r)),Re(_t(s))])):(As(),Rs("div",ZC,[Re(JI,{text:"phonebook"}),bl("div",eb,[Re(c,{class:"uppercase no-underline bg-gray-600 hover:bg-gray-500 text-white border-none px-2 py-1 cursor-pointer",to:"/signin"},{default:dc(()=>[Ec("Sign In")]),_:1}),Re(c,{class:"uppercase no-underline bg-gray-600 hover:bg-gray-500 text-white border-none px-2 py-1 cursor-pointer",to:"/signup"},{default:dc(()=>[Ec("Sign Up")]),_:1})])]))])}}},nb=[{path:"/",component:tb},{path:"/signin",component:()=>Gn(()=>import("./SignInView-BtbRMtYg.js"),__vite__mapDeps([4,1]))},{path:"/signup",component:()=>Gn(()=>import("./SignUpView-TYEENRSJ.js"),__vite__mapDeps([5,1]))},{path:"/:pathMatch(.*)*",component:()=>Gn(()=>import("./NotFoundView-DKPn9_wl.js"),[])}],cl=KI({history:wI(),routes:nb});CE(qE).use(cl).use(OE()).mount("#app");export{Qt as F,JI as _,Re as a,bl as b,Rs as c,_t as d,dc as e,Ec as f,UE as g,oc as h,sb as i,dt as j,pl as n,As as o,lp as r,lb as s,vy as t,YC as u,ib as v,rb as w};
