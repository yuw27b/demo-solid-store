const we=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=t(l);fetch(l.href,r)}};we();const $={},xe=(e,n)=>e===n,Ce=Symbol("solid-proxy"),_e=Symbol("solid-track"),G={equals:xe};let $e=de;const q={},P=1,K=2,fe={owned:null,cleanups:null,context:null,owner:null};var p=null;let D=null,d=null,H=null,m=null,E=null,ee=0;function V(e,n){const t=d,i=p,l=e.length===0?fe:{owned:null,cleanups:null,context:null,owner:n||i};p=l,d=null;try{return ie(()=>e(()=>le(l)),!0)}finally{d=t,p=i}}function M(e,n){n=n?Object.assign({},G,n):G;const t={value:e,observers:null,observerSlots:null,pending:q,comparator:n.equals||void 0},i=l=>(typeof l=="function"&&(l=l(t.pending!==q?t.pending:t.value)),te(t,l));return[ce.bind(t),i]}function re(e,n,t){const i=ne(e,n,!0,P);R(i)}function Y(e,n,t){const i=ne(e,n,!1,P);R(i)}function J(e,n,t){t=t?Object.assign({},G,t):G;const i=ne(e,n,!0,0);return i.pending=q,i.observers=null,i.observerSlots=null,i.comparator=t.equals||void 0,R(i),ce.bind(i)}function Se(e,n,t){arguments.length===2?typeof n=="object"&&(t=n,n=e,e=!0):arguments.length===1&&(n=e,e=!0),t||(t={});const i=new Set,[l,r]=M(t.initialValue),[s,o]=M(void 0,{equals:!1}),[f,c]=M(!1),[u,b]=M();let a,h=null,w=null,N=null,L=!1,k="initialValue"in t,x=typeof e=="function"&&J(e);$.context&&(N=`${$.context.id}${$.context.count++}`,$.load&&(w=$.load(N)));function y(C,_,A,B){return h===C&&(h=null,k=!0,w&&(C===w||_===w)&&t.onHydrated&&queueMicrotask(()=>t.onHydrated(B,{value:_})),w=null,b(a=A),v(_)),_}function v(C){z(()=>{r(()=>C),c(!1);for(const _ of i.keys())_.decrement();i.clear()})}function I(){const C=Ie,_=l();if(a)throw a;return d&&!d.user&&C&&re(()=>{s(),h&&(C.resolved||i.has(C)||(C.increment(),i.add(C)))}),_}function j(C=!0){if(C&&L)return;L=!1,b(a=void 0);const _=x?x():e;if(_==null||_===!1){y(h,F(l));return}const A=w||F(()=>n(_,{value:l(),refetching:C}));return typeof A!="object"||!("then"in A)?(y(h,A),A):(h=A,L=!0,queueMicrotask(()=>L=!1),z(()=>{c(!0),o()}),A.then(B=>y(A,B,void 0,_),B=>y(A,B,B)))}return Object.defineProperties(I,{loading:{get(){return f()}},error:{get(){return u()}},latest:{get(){if(!k)return I();if(a)throw a;return l()}}}),x?re(()=>j(!1)):j(!1),[I,{refetch:j,mutate:r}]}function z(e){if(H)return e();let n;const t=H=[];try{n=e()}finally{H=null}return ie(()=>{for(let i=0;i<t.length;i+=1){const l=t[i];if(l.pending!==q){const r=l.pending;l.pending=q,te(l,r)}}},!1),n}function F(e){let n,t=d;return d=null,n=e(),d=t,n}function ve(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}let Ie;function ce(){const e=D;if(this.sources&&(this.state||e)){const n=m;m=null,this.state===P||e?R(this):Q(this),m=n}if(d){const n=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(n)):(d.sources=[this],d.sourceSlots=[n]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function te(e,n,t){if(H)return e.pending===q&&H.push(e),e.pending=n,n;if(e.comparator&&e.comparator(e.value,n))return n;let i=!1;return e.value=n,e.observers&&e.observers.length&&ie(()=>{for(let l=0;l<e.observers.length;l+=1){const r=e.observers[l];i&&D.disposed.has(r),(i&&!r.tState||!i&&!r.state)&&(r.pure?m.push(r):E.push(r),r.observers&&he(r)),i||(r.state=P)}if(m.length>1e6)throw m=[],new Error},!1),n}function R(e){if(!e.fn)return;le(e);const n=p,t=d,i=ee;d=p=e,Ae(e,e.value,i),d=t,p=n}function Ae(e,n,t){let i;try{i=e.fn(n)}catch(l){ge(l)}(!e.updatedAt||e.updatedAt<=t)&&(e.observers&&e.observers.length?te(e,i):e.value=i,e.updatedAt=t)}function ne(e,n,t,i=P,l){const r={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:p,context:null,pure:t};return p===null||p!==fe&&(p.owned?p.owned.push(r):p.owned=[r]),r}function ae(e){const n=D;if(e.state===0||n)return;if(e.state===K||n)return Q(e);if(e.suspense&&F(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ee);)(e.state||n)&&t.push(e);for(let i=t.length-1;i>=0;i--)if(e=t[i],e.state===P||n)R(e);else if(e.state===K||n){const l=m;m=null,Q(e,t[0]),m=l}}function ie(e,n){if(m)return e();let t=!1;n||(m=[]),E?t=!0:E=[],ee++;try{const i=e();return Te(t),i}catch(i){ge(i)}finally{m=null,t||(E=null)}}function Te(e){m&&(de(m),m=null),!e&&(E.length?z(()=>{$e(E),E=null}):E=null)}function de(e){for(let n=0;n<e.length;n++)ae(e[n])}function Q(e,n){const t=D;e.state=0;for(let i=0;i<e.sources.length;i+=1){const l=e.sources[i];l.sources&&(l.state===P||t?l!==n&&ae(l):(l.state===K||t)&&Q(l,n))}}function he(e){const n=D;for(let t=0;t<e.observers.length;t+=1){const i=e.observers[t];(!i.state||n)&&(i.state=K,i.pure?m.push(i):E.push(i),i.observers&&he(i))}}function le(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),i=e.sourceSlots.pop(),l=t.observers;if(l&&l.length){const r=l.pop(),s=t.observerSlots.pop();i<l.length&&(r.sourceSlots[s]=i,l[i]=r,t.observerSlots[i]=s)}}if(e.owned){for(n=0;n<e.owned.length;n++)le(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function ge(e){throw e}const Le=Symbol("fallback");function se(e){for(let n=0;n<e.length;n++)e[n]()}function Ee(e,n,t={}){let i=[],l=[],r=[],s=0,o=n.length>1?[]:null;return ve(()=>se(r)),()=>{let f=e()||[],c,u;return f[_e],F(()=>{let a=f.length,h,w,N,L,k,x,y,v,I;if(a===0)s!==0&&(se(r),r=[],i=[],l=[],s=0,o&&(o=[])),t.fallback&&(i=[Le],l[0]=V(j=>(r[0]=j,t.fallback())),s=1);else if(s===0){for(l=new Array(a),u=0;u<a;u++)i[u]=f[u],l[u]=V(b);s=a}else{for(N=new Array(a),L=new Array(a),o&&(k=new Array(a)),x=0,y=Math.min(s,a);x<y&&i[x]===f[x];x++);for(y=s-1,v=a-1;y>=x&&v>=x&&i[y]===f[v];y--,v--)N[v]=l[y],L[v]=r[y],o&&(k[v]=o[y]);for(h=new Map,w=new Array(v+1),u=v;u>=x;u--)I=f[u],c=h.get(I),w[u]=c===void 0?-1:c,h.set(I,u);for(c=x;c<=y;c++)I=i[c],u=h.get(I),u!==void 0&&u!==-1?(N[u]=l[c],L[u]=r[c],o&&(k[u]=o[c]),u=w[u],h.set(I,u)):r[c]();for(u=x;u<a;u++)u in N?(l[u]=N[u],r[u]=L[u],o&&(o[u]=k[u],o[u](u))):l[u]=V(b);l=l.slice(0,s=a),i=f.slice(0)}return l});function b(a){if(r[u]=a,o){const[h,w]=M(u);return o[u]=w,n(f[u],h)}return n(f[u])}}}function S(e,n){return F(()=>e(n||{}))}function U(){return!0}const Ne={get(e,n,t){return n===Ce?t:e.get(n)},has(e,n){return e.has(n)},set:U,deleteProperty:U,getOwnPropertyDescriptor(e,n){return{configurable:!0,enumerable:!0,get(){return e.get(n)},set:U,deleteProperty:U}},ownKeys(e){return e.keys()}};function X(e){return(e=typeof e=="function"?e():e)==null?{}:e}function pe(...e){return new Proxy({get(n){for(let t=e.length-1;t>=0;t--){const i=X(e[t])[n];if(i!==void 0)return i}},has(n){for(let t=e.length-1;t>=0;t--)if(n in X(e[t]))return!0;return!1},keys(){const n=[];for(let t=0;t<e.length;t++)n.push(...Object.keys(X(e[t])));return[...new Set(n)]}},Ne)}function me(e){const n="fallback"in e&&{fallback:()=>e.fallback};return J(Ee(()=>e.each,e.children,n||void 0))}function be(e){let n=!1;const t=J(()=>e.when,void 0,{equals:(i,l)=>n?i===l:!i==!l});return J(()=>{const i=t();if(i){const l=e.children;return(n=typeof l=="function"&&l.length>0)?F(()=>l(i)):l}return e.fallback})}function ke(e,n,t){let i=t.length,l=n.length,r=i,s=0,o=0,f=n[l-1].nextSibling,c=null;for(;s<l||o<r;){if(n[s]===t[o]){s++,o++;continue}for(;n[l-1]===t[r-1];)l--,r--;if(l===s){const u=r<i?o?t[o-1].nextSibling:t[r-o]:f;for(;o<r;)e.insertBefore(t[o++],u)}else if(r===o)for(;s<l;)(!c||!c.has(n[s]))&&n[s].remove(),s++;else if(n[s]===t[r-1]&&t[o]===n[l-1]){const u=n[--l].nextSibling;e.insertBefore(t[o++],n[s++].nextSibling),e.insertBefore(t[--r],u),n[l]=t[r]}else{if(!c){c=new Map;let b=o;for(;b<r;)c.set(t[b],b++)}const u=c.get(n[s]);if(u!=null)if(o<u&&u<r){let b=s,a=1,h;for(;++b<l&&b<r&&!((h=c.get(n[b]))==null||h!==u+a);)a++;if(a>u-o){const w=n[s];for(;o<u;)e.insertBefore(t[o++],w)}else e.replaceChild(t[o++],n[s++])}else s++;else n[s++].remove()}}}const oe="_$DX_DELEGATE";function Pe(e,n,t){let i;return V(l=>{i=l,n===document?e():g(n,e(),n.firstChild?null:void 0,t)}),()=>{i(),n.textContent=""}}function T(e,n,t){const i=document.createElement("template");i.innerHTML=e;let l=i.content.firstChild;return t&&(l=l.firstChild),l}function Be(e,n=window.document){const t=n[oe]||(n[oe]=new Set);for(let i=0,l=e.length;i<l;i++){const r=e[i];t.has(r)||(t.add(r),n.addEventListener(r,Me))}}function Oe(e,n,t,i){i?Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t:Array.isArray(t)?e.addEventListener(n,l=>t[0](t[1],l)):e.addEventListener(n,t)}function g(e,n,t,i){if(t!==void 0&&!i&&(i=[]),typeof n!="function")return W(e,n,i,t);Y(l=>W(e,n(),l,t),i)}function Me(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),$.registry&&!$.done&&($.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>i.remove()));t!==null;){const i=t[n];if(i&&!t.disabled){const l=t[`${n}Data`];if(l!==void 0?i(l,e):i(e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function W(e,n,t,i,l){for($.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const r=typeof n,s=i!==void 0;if(e=s&&t[0]&&t[0].parentNode||e,r==="string"||r==="number"){if($.context)return t;if(r==="number"&&(n=n.toString()),s){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=O(e,t,i,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||r==="boolean"){if($.context)return t;t=O(e,t,i)}else{if(r==="function")return Y(()=>{let o=n();for(;typeof o=="function";)o=o();t=W(e,o,t,i)}),()=>t;if(Array.isArray(n)){const o=[];if(Z(o,n,l))return Y(()=>t=W(e,o,t,i,!0)),()=>t;if($.context){for(let f=0;f<o.length;f++)if(o[f].parentNode)return t=o}if(o.length===0){if(t=O(e,t,i),s)return t}else Array.isArray(t)?t.length===0?ue(e,o,i):ke(e,t,o):(t&&O(e),ue(e,o));t=o}else if(n instanceof Node){if($.context&&n.parentNode)return t=s?[n]:n;if(Array.isArray(t)){if(s)return t=O(e,t,i,n);O(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function Z(e,n,t){let i=!1;for(let l=0,r=n.length;l<r;l++){let s=n[l],o;if(s instanceof Node)e.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))i=Z(e,s)||i;else if((o=typeof s)=="string")e.push(document.createTextNode(s));else if(o==="function")if(t){for(;typeof s=="function";)s=s();i=Z(e,Array.isArray(s)?s:[s])||i}else e.push(s),i=!0;else e.push(document.createTextNode(s.toString()))}return i}function ue(e,n,t){for(let i=0,l=n.length;i<l;i++)e.insertBefore(n[i],t)}function O(e,n,t,i){if(t===void 0)return e.textContent="";const l=i||document.createTextNode("");if(n.length){let r=!1;for(let s=n.length-1;s>=0;s--){const o=n[s];if(l!==o){const f=o.parentNode===e;!r&&!s?f?e.replaceChild(l,o):e.insertBefore(l,t):f&&o.remove()}else r=!0}}else e.insertBefore(l,t);return[l]}const qe=[{title:"\u3059\u3054\u3044HTML",author:"HTML\u597D\u304D\u592B",desc:"HTML\u306E\u30B3\u30B3\u304C\u3059\u3054\u3044\uFF01\u3053\u308C\u3055\u3048\u8AAD\u3081\u3070HTML\u306E\u3059\u3054\u3044\u4F7F\u3044\u65B9\u304C\u308F\u304B\u308B\u3059\u3054\u3044\u672C\u3067\u3059\u3002",price:800},{title:"\u3059\u3054\u3044CSS",author:"CSS\u597D\u304D\u5B50",desc:"CSS\u3063\u3066\u3059\u3054\u3044\u308F\u3088\u306D\uFF1F\u3048\uFF1F\u3059\u3054\u3055\u304C\u308F\u304B\u3089\u306A\u3044\u3067\u3059\u3063\u3066\uFF1F\u305D\u3093\u306A\u3042\u306A\u305F\u306F\u3053\u308C\u3092\u8AAD\u307F\u306A\u3055\u3044\uFF01",price:1e3},{title:"\u3075\u3064\u3046\u306EJavaScript",author:"Jv S Cript",desc:"\u4FFA\u306F\u30FB\u30FBJavaScript\u3092\u30FB\u30FB\u3075\u3064\u3046\u306B\u4F7F\u3044\u305F\u3044\u3060\u3051\u306A\u3093\u3060\uFF01\uFF01",price:500},{title:"\u63CF\u3044\u3066\u899A\u3048\u308BjQuery",author:"\u30B8\u30A7\u30A4\u30AF & \u30A8\u30EA\u30FC",desc:"\u7D75\u3092\u63CF\u3044\u3066jQuery\u3092\u899A\u3048\u3088\u3046\uFF01\u3053\u3093\u306A\u66F8\u7C4D\u304C\u904E\u53BB\u306B\u3042\u3063\u305F\u3060\u308D\u3046\u304B\uFF01\u524D\u4EE3\u672A\u805E\u306E\u3053\u306E\u4E00\u518A\u3001\u305C\u3072\u4F53\u9A13\u3057\u3066\u304F\u3060\u3055\u3044\u3002",price:4649},{title:"0\u304B\u3089\u306F\u3058\u3081\u308BReact",author:"\u674E \u4E9C\u99C6\u4EBA",desc:"\u3044\u307EReact\u3084\u308B\u306A\u3089\u9593\u9055\u3044\u306A\u304F\u3053\u306E1\u518A\uFF01React\u306B\u7CBE\u901A\u3057\u305F\u7B46\u8005\u304C\u305D\u306E\u5168\u3066\u3092\u89E3\u8AAC\u3057\u307E\u3059\u3002",price:3e3}];function Fe(){return new Promise(e=>{setTimeout(()=>{e({status:200,data:qe})},1e3)})}function je(e){return e.length===0?0:e.map(n=>n.price).reduce((n,t)=>n+t)}const He=T('<header class="Header"><h1>CodeGrid Store</h1></header>'),De=()=>He.cloneNode(!0),Re=T('<div class="Item"><h3 class="Item__title"></h3><span class="Item__author"></span><p class="Item__desc"></p><p class="Item__price">\u5186</p><div class="Item__btnWrap"><button type="button" class="Btn"></button></div></div>'),ye=e=>(()=>{const n=Re.cloneNode(!0),t=n.firstChild,i=t.nextSibling,l=i.nextSibling,r=l.nextSibling,s=r.firstChild,o=r.nextSibling,f=o.firstChild;return g(t,()=>e.title),g(i,()=>e.author),g(l,()=>e.desc),g(r,()=>e.price,s),Oe(f,"click",e.onClickBtn,!0),g(f,()=>e.btnLabel),n})();Be(["click"]);const Ue=T('<div class="Cart"></div>'),Ve=T("<span>\u30AB\u30FC\u30C8\u306B\u5546\u54C1\u304C\u3042\u308A\u307E\u305B\u3093</span>"),Ge=e=>(()=>{const n=Ue.cloneNode(!0);return g(n,S(be,{get when(){return e.items&&e.items.length>0},fallback:()=>Ve.cloneNode(!0),get children(){return S(me,{get each(){return e.items},children:(t,i)=>S(ye,pe(t,{btnLabel:"\u30AB\u30FC\u30C8\u304B\u3089\u51FA\u3059",onClickBtn:()=>{e.removeFromCart(i())}}))})}})),n})(),Ke=T('<ul class="ItemList"></ul>'),Je=T('<li class="ItemList__item"></li>'),Qe=e=>(()=>{const n=Ke.cloneNode(!0);return g(n,S(me,{get each(){return e.items},children:t=>(()=>{const i=Je.cloneNode(!0);return g(i,S(ye,pe(t,{btnLabel:"\u30AB\u30FC\u30C8\u306B\u5165\u308C\u308B",onClickBtn:()=>{e.addToCart(t)}}))),i})()})),n})(),We=T('<main class="Container"><div class="ItemListArea Container__flex"><h2>\u5546\u54C1\u4E00\u89A7 / \u54C1\u6570: </h2></div><div class="CartArea"><h4>\u30AB\u30FC\u30C8</h4><div class="Total">\u8A08<!>\u70B9<span class="Total__price">\u5186</span></div></div></main>'),Xe=e=>(()=>{const n=We.cloneNode(!0),t=n.firstChild,i=t.firstChild;i.firstChild;const l=t.nextSibling,r=l.firstChild,s=r.nextSibling,o=s.firstChild,f=o.nextSibling,c=f.nextSibling,u=c.nextSibling,b=u.firstChild;return g(i,()=>e.listItems.length,null),g(t,S(Qe,{get items(){return e.listItems},get addToCart(){return e.addToCart}}),null),g(l,S(Ge,{get items(){return e.cartItems},get removeFromCart(){return e.removeFromCart}}),s),g(s,()=>e.cartItems.length,f),g(u,()=>je(e.cartItems),b),n})(),Ye=T('<footer class="Footer"><small>\u3053\u306E\u30B7\u30E7\u30C3\u30D7\u306F\u67B6\u7A7A\u306E\u3082\u306E\u3067\u3042\u308A\u3001\u5546\u54C1\u3082\u3059\u3079\u3066\u30C0\u30DF\u30FC\u3067\u3059\u3002</small></footer>'),ze=()=>Ye.cloneNode(!0),Ze=T("<div></div>"),et=T("<div>Loading...</div>");function tt(){const[e,n]=M([]),[t]=Se(Fe),i=r=>{const s=e().slice();s.push(r),n(s)},l=r=>{const s=e().slice();s.splice(r,1),n(s)};return(()=>{const r=Ze.cloneNode(!0);return g(r,S(De,{}),null),g(r,S(be,{get when(){return!t.loading},get fallback(){return et.cloneNode(!0)},get children(){return S(Xe,{get listItems(){return t().data},get cartItems(){return e()},addToCart:i,removeFromCart:l})}}),null),g(r,S(ze,{}),null),r})()}window.addEventListener("load",()=>{Pe(()=>S(tt,{}),document.getElementById("root"))},!1);
