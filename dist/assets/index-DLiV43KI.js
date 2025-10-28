const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CpBfwu2u.js","assets/index-oCGrypr5.js","assets/index-BdszqNPx.css","assets/index-p-EMBUON.js"])))=>i.map(i=>d[i]);
import{gb as wc,gc,dq as bl,cF as mc,dM as vc,f8 as Vr,e2 as Fr,gd as u,ge as bc,gf as N,cX as $,cR as T,cS as l,cP as c,gg as xl,dh as j,cT as Wi,cV as Ui,dt as f,gh as xc,dk as ts}from"./index-oCGrypr5.js";import{b as yc}from"./index-p-EMBUON.js";let pa=[];function $s(t){const e=t.chains;return wc(pa,e)?pa:(pa=e,e)}function Cc(t,e){const{onChange:i}=e;return t._internal.chains.subscribe((o,r)=>{i(o,r)})}function kc(t){return{mutationFn(e){return gc(t,e)},mutationKey:["switchChain"]}}function Tc(t={}){const e=bl(t);return mc.useSyncExternalStore(i=>Cc(e,{onChange:i}),()=>$s(e),()=>$s(e))}function lw(t={}){const{mutation:e}=t,i=bl(t),o=kc(i),{mutate:r,mutateAsync:n,...a}=vc({...e,...o});return{...a,chains:Tc({config:i}),switchChain:r,switchChainAsync:n}}const _c={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",WALLET_STANDARD_CONNECTOR_ID:"announced",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",AUTH_CONNECTOR_ID:"w3mAuth",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},VERSION:"5.1.11"};var pr;(function(t){t.Google="google",t.Github="github",t.Apple="apple",t.Facebook="facebook",t.X="x",t.Discord="discord",t.Farcaster="farcaster"})(pr||(pr={}));const Sc=Symbol(),Rs=Object.getPrototypeOf,_a=new WeakMap,Ec=t=>t&&(_a.has(t)?_a.get(t):Rs(t)===Object.prototype||Rs(t)===Array.prototype),Ac=t=>Ec(t)&&t[Sc]||null,Is=(t,e=!0)=>{_a.set(t,e)},hr={},ha=t=>typeof t=="object"&&t!==null,Di=new WeakMap,ho=new WeakSet,$c=(t=Object.is,e=(I,V)=>new Proxy(I,V),i=I=>ha(I)&&!ho.has(I)&&(Array.isArray(I)||!(Symbol.iterator in I))&&!(I instanceof WeakMap)&&!(I instanceof WeakSet)&&!(I instanceof Error)&&!(I instanceof Number)&&!(I instanceof Date)&&!(I instanceof String)&&!(I instanceof RegExp)&&!(I instanceof ArrayBuffer),o=I=>{switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:throw I}},r=new WeakMap,n=(I,V,F=o)=>{const ee=r.get(I);if(ee?.[0]===V)return ee[1];const ie=Array.isArray(I)?[]:Object.create(Object.getPrototypeOf(I));return Is(ie,!0),r.set(I,[V,ie]),Reflect.ownKeys(I).forEach(Q=>{if(Object.getOwnPropertyDescriptor(ie,Q))return;const ne=Reflect.get(I,Q),J={value:ne,enumerable:!0,configurable:!0};if(ho.has(ne))Is(ne,!1);else if(ne instanceof Promise)delete J.value,J.get=()=>F(ne);else if(Di.has(ne)){const[le,O]=Di.get(ne);J.value=n(le,O(),F)}Object.defineProperty(ie,Q,J)}),Object.preventExtensions(ie)},a=new WeakMap,s=[1,1],S=I=>{if(!ha(I))throw new Error("object required");const V=a.get(I);if(V)return V;let F=s[0];const ee=new Set,ie=(p,h=++s[0])=>{F!==h&&(F=h,ee.forEach(v=>v(p,h)))};let Q=s[1];const ne=(p=++s[1])=>(Q!==p&&!ee.size&&(Q=p,le.forEach(([h])=>{const v=h[1](p);v>F&&(F=v)})),F),J=p=>(h,v)=>{const x=[...h];x[1]=[p,...x[1]],ie(x,v)},le=new Map,O=(p,h)=>{if((hr?"production":void 0)!=="production"&&le.has(p))throw new Error("prop listener already exists");if(ee.size){const v=h[3](J(p));le.set(p,[h,v])}else le.set(p,[h])},ye=p=>{var h;const v=le.get(p);v&&(le.delete(p),(h=v[1])==null||h.call(v))},ue=p=>(ee.add(p),ee.size===1&&le.forEach(([v,x],_)=>{if((hr?"production":void 0)!=="production"&&x)throw new Error("remove already exists");const y=v[3](J(_));le.set(_,[v,y])}),()=>{ee.delete(p),ee.size===0&&le.forEach(([v,x],_)=>{x&&(x(),le.set(_,[v]))})}),ve=Array.isArray(I)?[]:Object.create(Object.getPrototypeOf(I)),Le=e(ve,{deleteProperty(p,h){const v=Reflect.get(p,h);ye(h);const x=Reflect.deleteProperty(p,h);return x&&ie(["delete",[h],v]),x},set(p,h,v,x){const _=Reflect.has(p,h),y=Reflect.get(p,h,x);if(_&&(t(y,v)||a.has(v)&&t(y,a.get(v))))return!0;ye(h),ha(v)&&(v=Ac(v)||v);let w=v;if(v instanceof Promise)v.then(g=>{v.status="fulfilled",v.value=g,ie(["resolve",[h],g])}).catch(g=>{v.status="rejected",v.reason=g,ie(["reject",[h],g])});else{!Di.has(v)&&i(v)&&(w=S(v));const g=!ho.has(w)&&Di.get(w);g&&O(h,g)}return Reflect.set(p,h,w,x),ie(["set",[h],v,y]),!0}});a.set(I,Le);const d=[ve,ne,n,ue];return Di.set(Le,d),Reflect.ownKeys(I).forEach(p=>{const h=Object.getOwnPropertyDescriptor(I,p);"value"in h&&(Le[p]=I[p],delete h.value,delete h.writable),Object.defineProperty(ve,p,h)}),Le})=>[S,Di,ho,t,e,i,o,r,n,a,s],[Rc]=$c();function Ie(t={}){return Rc(t)}function Qe(t,e,i){const o=Di.get(t);let r;const n=[],a=o[3];let s=!1;const I=a(V=>{n.push(V),r||(r=Promise.resolve().then(()=>{r=void 0,s&&e(n.splice(0))}))});return s=!0,()=>{s=!1,I()}}function yl(t,e){const i=Di.get(t),[o,r,n]=i;return n(o,r(),e)}function _t(t){return ho.add(t),t}function st(t,e,i,o){let r=t[e];return Qe(t,()=>{const n=t[e];Object.is(r,n)||i(r=n)})}function Ic(t){const e=Ie({data:Array.from([]),has(i){return this.data.some(o=>o[0]===i)},set(i,o){const r=this.data.find(n=>n[0]===i);return r?r[1]=o:this.data.push([i,o]),this},get(i){var o;return(o=this.data.find(r=>r[0]===i))==null?void 0:o[1]},delete(i){const o=this.data.findIndex(r=>r[0]===i);return o===-1?!1:(this.data.splice(o,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(i){this.data.forEach(o=>{i(o[1],o[0],this)})},keys(){return this.data.map(i=>i[0]).values()},values(){return this.data.map(i=>i[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(e,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(e),e}var Cl={exports:{}};(function(t,e){(function(i,o){t.exports=o()})(Vr,function(){var i=1e3,o=6e4,r=36e5,n="millisecond",a="second",s="minute",S="hour",I="day",V="week",F="month",ee="quarter",ie="year",Q="date",ne="Invalid Date",J=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,le=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,O={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(y){var w=["th","st","nd","rd"],g=y%100;return"["+y+(w[(g-20)%10]||w[g]||w[0])+"]"}},ye=function(y,w,g){var b=String(y);return!b||b.length>=w?y:""+Array(w+1-b.length).join(g)+y},ue={s:ye,z:function(y){var w=-y.utcOffset(),g=Math.abs(w),b=Math.floor(g/60),m=g%60;return(w<=0?"+":"-")+ye(b,2,"0")+":"+ye(m,2,"0")},m:function y(w,g){if(w.date()<g.date())return-y(g,w);var b=12*(g.year()-w.year())+(g.month()-w.month()),m=w.clone().add(b,F),A=g-m<0,D=w.clone().add(b+(A?-1:1),F);return+(-(b+(g-m)/(A?m-D:D-m))||0)},a:function(y){return y<0?Math.ceil(y)||0:Math.floor(y)},p:function(y){return{M:F,y:ie,w:V,d:I,D:Q,h:S,m:s,s:a,ms:n,Q:ee}[y]||String(y||"").toLowerCase().replace(/s$/,"")},u:function(y){return y===void 0}},ve="en",_e={};_e[ve]=O;var Le="$isDayjsObject",d=function(y){return y instanceof x||!(!y||!y[Le])},p=function y(w,g,b){var m;if(!w)return ve;if(typeof w=="string"){var A=w.toLowerCase();_e[A]&&(m=A),g&&(_e[A]=g,m=A);var D=w.split("-");if(!m&&D.length>1)return y(D[0])}else{var W=w.name;_e[W]=w,m=W}return!b&&m&&(ve=m),m||!b&&ve},h=function(y,w){if(d(y))return y.clone();var g=typeof w=="object"?w:{};return g.date=y,g.args=arguments,new x(g)},v=ue;v.l=p,v.i=d,v.w=function(y,w){return h(y,{locale:w.$L,utc:w.$u,x:w.$x,$offset:w.$offset})};var x=function(){function y(g){this.$L=p(g.locale,null,!0),this.parse(g),this.$x=this.$x||g.x||{},this[Le]=!0}var w=y.prototype;return w.parse=function(g){this.$d=function(b){var m=b.date,A=b.utc;if(m===null)return new Date(NaN);if(v.u(m))return new Date;if(m instanceof Date)return new Date(m);if(typeof m=="string"&&!/Z$/i.test(m)){var D=m.match(J);if(D){var W=D[2]-1||0,te=(D[7]||"0").substring(0,3);return A?new Date(Date.UTC(D[1],W,D[3]||1,D[4]||0,D[5]||0,D[6]||0,te)):new Date(D[1],W,D[3]||1,D[4]||0,D[5]||0,D[6]||0,te)}}return new Date(m)}(g),this.init()},w.init=function(){var g=this.$d;this.$y=g.getFullYear(),this.$M=g.getMonth(),this.$D=g.getDate(),this.$W=g.getDay(),this.$H=g.getHours(),this.$m=g.getMinutes(),this.$s=g.getSeconds(),this.$ms=g.getMilliseconds()},w.$utils=function(){return v},w.isValid=function(){return this.$d.toString()!==ne},w.isSame=function(g,b){var m=h(g);return this.startOf(b)<=m&&m<=this.endOf(b)},w.isAfter=function(g,b){return h(g)<this.startOf(b)},w.isBefore=function(g,b){return this.endOf(b)<h(g)},w.$g=function(g,b,m){return v.u(g)?this[b]:this.set(m,g)},w.unix=function(){return Math.floor(this.valueOf()/1e3)},w.valueOf=function(){return this.$d.getTime()},w.startOf=function(g,b){var m=this,A=!!v.u(b)||b,D=v.p(g),W=function(Nt,Fe){var je=v.w(m.$u?Date.UTC(m.$y,Fe,Nt):new Date(m.$y,Fe,Nt),m);return A?je:je.endOf(I)},te=function(Nt,Fe){return v.w(m.toDate()[Nt].apply(m.toDate("s"),(A?[0,0,0,0]:[23,59,59,999]).slice(Fe)),m)},de=this.$W,he=this.$M,ae=this.$D,fe="set"+(this.$u?"UTC":"");switch(D){case ie:return A?W(1,0):W(31,11);case F:return A?W(1,he):W(0,he+1);case V:var Ae=this.$locale().weekStart||0,Zt=(de<Ae?de+7:de)-Ae;return W(A?ae-Zt:ae+(6-Zt),he);case I:case Q:return te(fe+"Hours",0);case S:return te(fe+"Minutes",1);case s:return te(fe+"Seconds",2);case a:return te(fe+"Milliseconds",3);default:return this.clone()}},w.endOf=function(g){return this.startOf(g,!1)},w.$set=function(g,b){var m,A=v.p(g),D="set"+(this.$u?"UTC":""),W=(m={},m[I]=D+"Date",m[Q]=D+"Date",m[F]=D+"Month",m[ie]=D+"FullYear",m[S]=D+"Hours",m[s]=D+"Minutes",m[a]=D+"Seconds",m[n]=D+"Milliseconds",m)[A],te=A===I?this.$D+(b-this.$W):b;if(A===F||A===ie){var de=this.clone().set(Q,1);de.$d[W](te),de.init(),this.$d=de.set(Q,Math.min(this.$D,de.daysInMonth())).$d}else W&&this.$d[W](te);return this.init(),this},w.set=function(g,b){return this.clone().$set(g,b)},w.get=function(g){return this[v.p(g)]()},w.add=function(g,b){var m,A=this;g=Number(g);var D=v.p(b),W=function(he){var ae=h(A);return v.w(ae.date(ae.date()+Math.round(he*g)),A)};if(D===F)return this.set(F,this.$M+g);if(D===ie)return this.set(ie,this.$y+g);if(D===I)return W(1);if(D===V)return W(7);var te=(m={},m[s]=o,m[S]=r,m[a]=i,m)[D]||1,de=this.$d.getTime()+g*te;return v.w(de,this)},w.subtract=function(g,b){return this.add(-1*g,b)},w.format=function(g){var b=this,m=this.$locale();if(!this.isValid())return m.invalidDate||ne;var A=g||"YYYY-MM-DDTHH:mm:ssZ",D=v.z(this),W=this.$H,te=this.$m,de=this.$M,he=m.weekdays,ae=m.months,fe=m.meridiem,Ae=function(Fe,je,Pt,qe){return Fe&&(Fe[je]||Fe(b,A))||Pt[je].slice(0,qe)},Zt=function(Fe){return v.s(W%12||12,Fe,"0")},Nt=fe||function(Fe,je,Pt){var qe=Fe<12?"AM":"PM";return Pt?qe.toLowerCase():qe};return A.replace(le,function(Fe,je){return je||function(Pt){switch(Pt){case"YY":return String(b.$y).slice(-2);case"YYYY":return v.s(b.$y,4,"0");case"M":return de+1;case"MM":return v.s(de+1,2,"0");case"MMM":return Ae(m.monthsShort,de,ae,3);case"MMMM":return Ae(ae,de);case"D":return b.$D;case"DD":return v.s(b.$D,2,"0");case"d":return String(b.$W);case"dd":return Ae(m.weekdaysMin,b.$W,he,2);case"ddd":return Ae(m.weekdaysShort,b.$W,he,3);case"dddd":return he[b.$W];case"H":return String(W);case"HH":return v.s(W,2,"0");case"h":return Zt(1);case"hh":return Zt(2);case"a":return Nt(W,te,!0);case"A":return Nt(W,te,!1);case"m":return String(te);case"mm":return v.s(te,2,"0");case"s":return String(b.$s);case"ss":return v.s(b.$s,2,"0");case"SSS":return v.s(b.$ms,3,"0");case"Z":return D}return null}(Fe)||D.replace(":","")})},w.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},w.diff=function(g,b,m){var A,D=this,W=v.p(b),te=h(g),de=(te.utcOffset()-this.utcOffset())*o,he=this-te,ae=function(){return v.m(D,te)};switch(W){case ie:A=ae()/12;break;case F:A=ae();break;case ee:A=ae()/3;break;case V:A=(he-de)/6048e5;break;case I:A=(he-de)/864e5;break;case S:A=he/r;break;case s:A=he/o;break;case a:A=he/i;break;default:A=he}return m?A:v.a(A)},w.daysInMonth=function(){return this.endOf(F).$D},w.$locale=function(){return _e[this.$L]},w.locale=function(g,b){if(!g)return this.$L;var m=this.clone(),A=p(g,b,!0);return A&&(m.$L=A),m},w.clone=function(){return v.w(this.$d,this)},w.toDate=function(){return new Date(this.valueOf())},w.toJSON=function(){return this.isValid()?this.toISOString():null},w.toISOString=function(){return this.$d.toISOString()},w.toString=function(){return this.$d.toUTCString()},y}(),_=x.prototype;return h.prototype=_,[["$ms",n],["$s",a],["$m",s],["$H",S],["$W",I],["$M",F],["$y",ie],["$D",Q]].forEach(function(y){_[y[1]]=function(w){return this.$g(w,y[0],y[1])}}),h.extend=function(y,w){return y.$i||(y(w,x,h),y.$i=!0),h},h.locale=p,h.isDayjs=d,h.unix=function(y){return h(1e3*y)},h.en=_e[ve],h.Ls=_e,h.p={},h})})(Cl);var Oc=Cl.exports;const Un=Fr(Oc);var kl={exports:{}};(function(t,e){(function(i,o){t.exports=o()})(Vr,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var o=["th","st","nd","rd"],r=i%100;return"["+i+(o[(r-20)%10]||o[r]||o[0])+"]"}}})})(kl);var Nc=kl.exports;const Pc=Fr(Nc);var Tl={exports:{}};(function(t,e){(function(i,o){t.exports=o()})(Vr,function(){return function(i,o,r){i=i||{};var n=o.prototype,a={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(I,V,F,ee){return n.fromToBase(I,V,F,ee)}r.en.relativeTime=a,n.fromToBase=function(I,V,F,ee,ie){for(var Q,ne,J,le=F.$locale().relativeTime||a,O=i.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],ye=O.length,ue=0;ue<ye;ue+=1){var ve=O[ue];ve.d&&(Q=ee?r(I).diff(F,ve.d,!0):F.diff(I,ve.d,!0));var _e=(i.rounding||Math.round)(Math.abs(Q));if(J=Q>0,_e<=ve.r||!ve.r){_e<=1&&ue>0&&(ve=O[ue-1]);var Le=le[ve.l];ie&&(_e=ie(""+_e)),ne=typeof Le=="string"?Le.replace("%d",_e):Le(_e,V,ve.l,J);break}}if(V)return ne;var d=J?le.future:le.past;return typeof d=="function"?d(ne):d.replace("%s",ne)},n.to=function(I,V){return s(I,V,this,!0)},n.from=function(I,V){return s(I,V,this)};var S=function(I){return I.$u?r.utc():r()};n.toNow=function(I){return this.to(S(this),I)},n.fromNow=function(I){return this.from(S(this),I)}}})})(Tl);var Dc=Tl.exports;const Lc=Fr(Dc);var _l={exports:{}};(function(t,e){(function(i,o){t.exports=o()})(Vr,function(){return function(i,o,r){r.updateLocale=function(n,a){var s=r.Ls[n];if(s)return(a?Object.keys(a):[]).forEach(function(S){s[S]=a[S]}),s}}})})(_l);var Mc=_l.exports;const Wc=Fr(Mc);Un.extend(Lc);Un.extend(Wc);const Uc={...Pc,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};Un.locale("en-web3-modal",Uc);const is={getYear(t=new Date().toISOString()){return Un(t).year()},getRelativeDateFromNow(t){return Un(t).locale("en-web3-modal").fromNow(!0)},formatDate(t,e="DD MMM"){return Un(t).format(e)}},Sl={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},parseEvmChainId(t){return typeof t=="string"?this.caipNetworkIdToNumber(t):t}};var jc=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,fa=Math.ceil,kt=Math.floor,ot="[BigNumber Error] ",Os=ot+"Number primitive has more than 15 significant digits: ",Dt=1e14,ce=14,wa=9007199254740991,ga=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],Ni=1e7,He=1e9;function El(t){var e,i,o,r=O.prototype={constructor:O,toString:null,valueOf:null},n=new O(1),a=20,s=4,S=-7,I=21,V=-1e7,F=1e7,ee=!1,ie=1,Q=0,ne={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},J="0123456789abcdefghijklmnopqrstuvwxyz",le=!0;function O(d,p){var h,v,x,_,y,w,g,b,m=this;if(!(m instanceof O))return new O(d,p);if(p==null){if(d&&d._isBigNumber===!0){m.s=d.s,!d.c||d.e>F?m.c=m.e=null:d.e<V?m.c=[m.e=0]:(m.e=d.e,m.c=d.c.slice());return}if((w=typeof d=="number")&&d*0==0){if(m.s=1/d<0?(d=-d,-1):1,d===~~d){for(_=0,y=d;y>=10;y/=10,_++);_>F?m.c=m.e=null:(m.e=_,m.c=[d]);return}b=String(d)}else{if(!jc.test(b=String(d)))return o(m,b,w);m.s=b.charCodeAt(0)==45?(b=b.slice(1),-1):1}(_=b.indexOf("."))>-1&&(b=b.replace(".","")),(y=b.search(/e/i))>0?(_<0&&(_=y),_+=+b.slice(y+1),b=b.substring(0,y)):_<0&&(_=b.length)}else{if($e(p,2,J.length,"Base"),p==10&&le)return m=new O(d),_e(m,a+m.e+1,s);if(b=String(d),w=typeof d=="number"){if(d*0!=0)return o(m,b,w,p);if(m.s=1/d<0?(b=b.slice(1),-1):1,O.DEBUG&&b.replace(/^0\.0*|\./,"").length>15)throw Error(Os+d)}else m.s=b.charCodeAt(0)===45?(b=b.slice(1),-1):1;for(h=J.slice(0,p),_=y=0,g=b.length;y<g;y++)if(h.indexOf(v=b.charAt(y))<0){if(v=="."){if(y>_){_=g;continue}}else if(!x&&(b==b.toUpperCase()&&(b=b.toLowerCase())||b==b.toLowerCase()&&(b=b.toUpperCase()))){x=!0,y=-1,_=0;continue}return o(m,String(d),w,p)}w=!1,b=i(b,p,10,m.s),(_=b.indexOf("."))>-1?b=b.replace(".",""):_=b.length}for(y=0;b.charCodeAt(y)===48;y++);for(g=b.length;b.charCodeAt(--g)===48;);if(b=b.slice(y,++g)){if(g-=y,w&&O.DEBUG&&g>15&&(d>wa||d!==kt(d)))throw Error(Os+m.s*d);if((_=_-y-1)>F)m.c=m.e=null;else if(_<V)m.c=[m.e=0];else{if(m.e=_,m.c=[],y=(_+1)%ce,_<0&&(y+=ce),y<g){for(y&&m.c.push(+b.slice(0,y)),g-=ce;y<g;)m.c.push(+b.slice(y,y+=ce));y=ce-(b=b.slice(y)).length}else y-=g;for(;y--;b+="0");m.c.push(+b)}}else m.c=[m.e=0]}O.clone=El,O.ROUND_UP=0,O.ROUND_DOWN=1,O.ROUND_CEIL=2,O.ROUND_FLOOR=3,O.ROUND_HALF_UP=4,O.ROUND_HALF_DOWN=5,O.ROUND_HALF_EVEN=6,O.ROUND_HALF_CEIL=7,O.ROUND_HALF_FLOOR=8,O.EUCLID=9,O.config=O.set=function(d){var p,h;if(d!=null)if(typeof d=="object"){if(d.hasOwnProperty(p="DECIMAL_PLACES")&&(h=d[p],$e(h,0,He,p),a=h),d.hasOwnProperty(p="ROUNDING_MODE")&&(h=d[p],$e(h,0,8,p),s=h),d.hasOwnProperty(p="EXPONENTIAL_AT")&&(h=d[p],h&&h.pop?($e(h[0],-He,0,p),$e(h[1],0,He,p),S=h[0],I=h[1]):($e(h,-He,He,p),S=-(I=h<0?-h:h))),d.hasOwnProperty(p="RANGE"))if(h=d[p],h&&h.pop)$e(h[0],-He,-1,p),$e(h[1],1,He,p),V=h[0],F=h[1];else if($e(h,-He,He,p),h)V=-(F=h<0?-h:h);else throw Error(ot+p+" cannot be zero: "+h);if(d.hasOwnProperty(p="CRYPTO"))if(h=d[p],h===!!h)if(h)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))ee=h;else throw ee=!h,Error(ot+"crypto unavailable");else ee=h;else throw Error(ot+p+" not true or false: "+h);if(d.hasOwnProperty(p="MODULO_MODE")&&(h=d[p],$e(h,0,9,p),ie=h),d.hasOwnProperty(p="POW_PRECISION")&&(h=d[p],$e(h,0,He,p),Q=h),d.hasOwnProperty(p="FORMAT"))if(h=d[p],typeof h=="object")ne=h;else throw Error(ot+p+" not an object: "+h);if(d.hasOwnProperty(p="ALPHABET"))if(h=d[p],typeof h=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(h))le=h.slice(0,10)=="0123456789",J=h;else throw Error(ot+p+" invalid: "+h)}else throw Error(ot+"Object expected: "+d);return{DECIMAL_PLACES:a,ROUNDING_MODE:s,EXPONENTIAL_AT:[S,I],RANGE:[V,F],CRYPTO:ee,MODULO_MODE:ie,POW_PRECISION:Q,FORMAT:ne,ALPHABET:J}},O.isBigNumber=function(d){if(!d||d._isBigNumber!==!0)return!1;if(!O.DEBUG)return!0;var p,h,v=d.c,x=d.e,_=d.s;e:if({}.toString.call(v)=="[object Array]"){if((_===1||_===-1)&&x>=-He&&x<=He&&x===kt(x)){if(v[0]===0){if(x===0&&v.length===1)return!0;break e}if(p=(x+1)%ce,p<1&&(p+=ce),String(v[0]).length==p){for(p=0;p<v.length;p++)if(h=v[p],h<0||h>=Dt||h!==kt(h))break e;if(h!==0)return!0}}}else if(v===null&&x===null&&(_===null||_===1||_===-1))return!0;throw Error(ot+"Invalid BigNumber: "+d)},O.maximum=O.max=function(){return ue(arguments,-1)},O.minimum=O.min=function(){return ue(arguments,1)},O.random=function(){var d=9007199254740992,p=Math.random()*d&2097151?function(){return kt(Math.random()*d)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(h){var v,x,_,y,w,g=0,b=[],m=new O(n);if(h==null?h=a:$e(h,0,He),y=fa(h/ce),ee)if(crypto.getRandomValues){for(v=crypto.getRandomValues(new Uint32Array(y*=2));g<y;)w=v[g]*131072+(v[g+1]>>>11),w>=9e15?(x=crypto.getRandomValues(new Uint32Array(2)),v[g]=x[0],v[g+1]=x[1]):(b.push(w%1e14),g+=2);g=y/2}else if(crypto.randomBytes){for(v=crypto.randomBytes(y*=7);g<y;)w=(v[g]&31)*281474976710656+v[g+1]*1099511627776+v[g+2]*4294967296+v[g+3]*16777216+(v[g+4]<<16)+(v[g+5]<<8)+v[g+6],w>=9e15?crypto.randomBytes(7).copy(v,g):(b.push(w%1e14),g+=7);g=y/7}else throw ee=!1,Error(ot+"crypto unavailable");if(!ee)for(;g<y;)w=p(),w<9e15&&(b[g++]=w%1e14);for(y=b[--g],h%=ce,y&&h&&(w=ga[ce-h],b[g]=kt(y/w)*w);b[g]===0;b.pop(),g--);if(g<0)b=[_=0];else{for(_=-1;b[0]===0;b.splice(0,1),_-=ce);for(g=1,w=b[0];w>=10;w/=10,g++);g<ce&&(_-=ce-g)}return m.e=_,m.c=b,m}}(),O.sum=function(){for(var d=1,p=arguments,h=new O(p[0]);d<p.length;)h=h.plus(p[d++]);return h},i=function(){var d="0123456789";function p(h,v,x,_){for(var y,w=[0],g,b=0,m=h.length;b<m;){for(g=w.length;g--;w[g]*=v);for(w[0]+=_.indexOf(h.charAt(b++)),y=0;y<w.length;y++)w[y]>x-1&&(w[y+1]==null&&(w[y+1]=0),w[y+1]+=w[y]/x|0,w[y]%=x)}return w.reverse()}return function(h,v,x,_,y){var w,g,b,m,A,D,W,te,de=h.indexOf("."),he=a,ae=s;for(de>=0&&(m=Q,Q=0,h=h.replace(".",""),te=new O(v),D=te.pow(h.length-de),Q=m,te.c=p(di(bt(D.c),D.e,"0"),10,x,d),te.e=te.c.length),W=p(h,v,x,y?(w=J,d):(w=d,J)),b=m=W.length;W[--m]==0;W.pop());if(!W[0])return w.charAt(0);if(de<0?--b:(D.c=W,D.e=b,D.s=_,D=e(D,te,he,ae,x),W=D.c,A=D.r,b=D.e),g=b+he+1,de=W[g],m=x/2,A=A||g<0||W[g+1]!=null,A=ae<4?(de!=null||A)&&(ae==0||ae==(D.s<0?3:2)):de>m||de==m&&(ae==4||A||ae==6&&W[g-1]&1||ae==(D.s<0?8:7)),g<1||!W[0])h=A?di(w.charAt(1),-he,w.charAt(0)):w.charAt(0);else{if(W.length=g,A)for(--x;++W[--g]>x;)W[g]=0,g||(++b,W=[1].concat(W));for(m=W.length;!W[--m];);for(de=0,h="";de<=m;h+=w.charAt(W[de++]));h=di(h,b,w.charAt(0))}return h}}(),e=function(){function d(v,x,_){var y,w,g,b,m=0,A=v.length,D=x%Ni,W=x/Ni|0;for(v=v.slice();A--;)g=v[A]%Ni,b=v[A]/Ni|0,y=W*g+b*D,w=D*g+y%Ni*Ni+m,m=(w/_|0)+(y/Ni|0)+W*b,v[A]=w%_;return m&&(v=[m].concat(v)),v}function p(v,x,_,y){var w,g;if(_!=y)g=_>y?1:-1;else for(w=g=0;w<_;w++)if(v[w]!=x[w]){g=v[w]>x[w]?1:-1;break}return g}function h(v,x,_,y){for(var w=0;_--;)v[_]-=w,w=v[_]<x[_]?1:0,v[_]=w*y+v[_]-x[_];for(;!v[0]&&v.length>1;v.splice(0,1));}return function(v,x,_,y,w){var g,b,m,A,D,W,te,de,he,ae,fe,Ae,Zt,Nt,Fe,je,Pt,qe=v.s==x.s?1:-1,Xe=v.c,Oe=x.c;if(!Xe||!Xe[0]||!Oe||!Oe[0])return new O(!v.s||!x.s||(Xe?Oe&&Xe[0]==Oe[0]:!Oe)?NaN:Xe&&Xe[0]==0||!Oe?qe*0:qe/0);for(de=new O(qe),he=de.c=[],b=v.e-x.e,qe=_+b+1,w||(w=Dt,b=Tt(v.e/ce)-Tt(x.e/ce),qe=qe/ce|0),m=0;Oe[m]==(Xe[m]||0);m++);if(Oe[m]>(Xe[m]||0)&&b--,qe<0)he.push(1),A=!0;else{for(Nt=Xe.length,je=Oe.length,m=0,qe+=2,D=kt(w/(Oe[0]+1)),D>1&&(Oe=d(Oe,D,w),Xe=d(Xe,D,w),je=Oe.length,Nt=Xe.length),Zt=je,ae=Xe.slice(0,je),fe=ae.length;fe<je;ae[fe++]=0);Pt=Oe.slice(),Pt=[0].concat(Pt),Fe=Oe[0],Oe[1]>=w/2&&Fe++;do{if(D=0,g=p(Oe,ae,je,fe),g<0){if(Ae=ae[0],je!=fe&&(Ae=Ae*w+(ae[1]||0)),D=kt(Ae/Fe),D>1)for(D>=w&&(D=w-1),W=d(Oe,D,w),te=W.length,fe=ae.length;p(W,ae,te,fe)==1;)D--,h(W,je<te?Pt:Oe,te,w),te=W.length,g=1;else D==0&&(g=D=1),W=Oe.slice(),te=W.length;if(te<fe&&(W=[0].concat(W)),h(ae,W,fe,w),fe=ae.length,g==-1)for(;p(Oe,ae,je,fe)<1;)D++,h(ae,je<fe?Pt:Oe,fe,w),fe=ae.length}else g===0&&(D++,ae=[0]);he[m++]=D,ae[0]?ae[fe++]=Xe[Zt]||0:(ae=[Xe[Zt]],fe=1)}while((Zt++<Nt||ae[0]!=null)&&qe--);A=ae[0]!=null,he[0]||he.splice(0,1)}if(w==Dt){for(m=1,qe=he[0];qe>=10;qe/=10,m++);_e(de,_+(de.e=m+b*ce-1)+1,y,A)}else de.e=b,de.r=+A;return de}}();function ye(d,p,h,v){var x,_,y,w,g;if(h==null?h=s:$e(h,0,8),!d.c)return d.toString();if(x=d.c[0],y=d.e,p==null)g=bt(d.c),g=v==1||v==2&&(y<=S||y>=I)?ar(g,y):di(g,y,"0");else if(d=_e(new O(d),p,h),_=d.e,g=bt(d.c),w=g.length,v==1||v==2&&(p<=_||_<=S)){for(;w<p;g+="0",w++);g=ar(g,_)}else if(p-=y,g=di(g,_,"0"),_+1>w){if(--p>0)for(g+=".";p--;g+="0");}else if(p+=_-w,p>0)for(_+1==w&&(g+=".");p--;g+="0");return d.s<0&&x?"-"+g:g}function ue(d,p){for(var h,v,x=1,_=new O(d[0]);x<d.length;x++)v=new O(d[x]),(!v.s||(h=tn(_,v))===p||h===0&&_.s===p)&&(_=v);return _}function ve(d,p,h){for(var v=1,x=p.length;!p[--x];p.pop());for(x=p[0];x>=10;x/=10,v++);return(h=v+h*ce-1)>F?d.c=d.e=null:h<V?d.c=[d.e=0]:(d.e=h,d.c=p),d}o=function(){var d=/^(-?)0([xbo])(?=\w[\w.]*$)/i,p=/^([^.]+)\.$/,h=/^\.([^.]+)$/,v=/^-?(Infinity|NaN)$/,x=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(_,y,w,g){var b,m=w?y:y.replace(x,"");if(v.test(m))_.s=isNaN(m)?null:m<0?-1:1;else{if(!w&&(m=m.replace(d,function(A,D,W){return b=(W=W.toLowerCase())=="x"?16:W=="b"?2:8,!g||g==b?D:A}),g&&(b=g,m=m.replace(p,"$1").replace(h,"0.$1")),y!=m))return new O(m,b);if(O.DEBUG)throw Error(ot+"Not a"+(g?" base "+g:"")+" number: "+y);_.s=null}_.c=_.e=null}}();function _e(d,p,h,v){var x,_,y,w,g,b,m,A=d.c,D=ga;if(A){e:{for(x=1,w=A[0];w>=10;w/=10,x++);if(_=p-x,_<0)_+=ce,y=p,g=A[b=0],m=kt(g/D[x-y-1]%10);else if(b=fa((_+1)/ce),b>=A.length)if(v){for(;A.length<=b;A.push(0));g=m=0,x=1,_%=ce,y=_-ce+1}else break e;else{for(g=w=A[b],x=1;w>=10;w/=10,x++);_%=ce,y=_-ce+x,m=y<0?0:kt(g/D[x-y-1]%10)}if(v=v||p<0||A[b+1]!=null||(y<0?g:g%D[x-y-1]),v=h<4?(m||v)&&(h==0||h==(d.s<0?3:2)):m>5||m==5&&(h==4||v||h==6&&(_>0?y>0?g/D[x-y]:0:A[b-1])%10&1||h==(d.s<0?8:7)),p<1||!A[0])return A.length=0,v?(p-=d.e+1,A[0]=D[(ce-p%ce)%ce],d.e=-p||0):A[0]=d.e=0,d;if(_==0?(A.length=b,w=1,b--):(A.length=b+1,w=D[ce-_],A[b]=y>0?kt(g/D[x-y]%D[y])*w:0),v)for(;;)if(b==0){for(_=1,y=A[0];y>=10;y/=10,_++);for(y=A[0]+=w,w=1;y>=10;y/=10,w++);_!=w&&(d.e++,A[0]==Dt&&(A[0]=1));break}else{if(A[b]+=w,A[b]!=Dt)break;A[b--]=0,w=1}for(_=A.length;A[--_]===0;A.pop());}d.e>F?d.c=d.e=null:d.e<V&&(d.c=[d.e=0])}return d}function Le(d){var p,h=d.e;return h===null?d.toString():(p=bt(d.c),p=h<=S||h>=I?ar(p,h):di(p,h,"0"),d.s<0?"-"+p:p)}return r.absoluteValue=r.abs=function(){var d=new O(this);return d.s<0&&(d.s=1),d},r.comparedTo=function(d,p){return tn(this,new O(d,p))},r.decimalPlaces=r.dp=function(d,p){var h,v,x,_=this;if(d!=null)return $e(d,0,He),p==null?p=s:$e(p,0,8),_e(new O(_),d+_.e+1,p);if(!(h=_.c))return null;if(v=((x=h.length-1)-Tt(this.e/ce))*ce,x=h[x])for(;x%10==0;x/=10,v--);return v<0&&(v=0),v},r.dividedBy=r.div=function(d,p){return e(this,new O(d,p),a,s)},r.dividedToIntegerBy=r.idiv=function(d,p){return e(this,new O(d,p),0,1)},r.exponentiatedBy=r.pow=function(d,p){var h,v,x,_,y,w,g,b,m,A=this;if(d=new O(d),d.c&&!d.isInteger())throw Error(ot+"Exponent not an integer: "+Le(d));if(p!=null&&(p=new O(p)),w=d.e>14,!A.c||!A.c[0]||A.c[0]==1&&!A.e&&A.c.length==1||!d.c||!d.c[0])return m=new O(Math.pow(+Le(A),w?d.s*(2-rr(d)):+Le(d))),p?m.mod(p):m;if(g=d.s<0,p){if(p.c?!p.c[0]:!p.s)return new O(NaN);v=!g&&A.isInteger()&&p.isInteger(),v&&(A=A.mod(p))}else{if(d.e>9&&(A.e>0||A.e<-1||(A.e==0?A.c[0]>1||w&&A.c[1]>=24e7:A.c[0]<8e13||w&&A.c[0]<=9999975e7)))return _=A.s<0&&rr(d)?-0:0,A.e>-1&&(_=1/_),new O(g?1/_:_);Q&&(_=fa(Q/ce+2))}for(w?(h=new O(.5),g&&(d.s=1),b=rr(d)):(x=Math.abs(+Le(d)),b=x%2),m=new O(n);;){if(b){if(m=m.times(A),!m.c)break;_?m.c.length>_&&(m.c.length=_):v&&(m=m.mod(p))}if(x){if(x=kt(x/2),x===0)break;b=x%2}else if(d=d.times(h),_e(d,d.e+1,1),d.e>14)b=rr(d);else{if(x=+Le(d),x===0)break;b=x%2}A=A.times(A),_?A.c&&A.c.length>_&&(A.c.length=_):v&&(A=A.mod(p))}return v?m:(g&&(m=n.div(m)),p?m.mod(p):_?_e(m,Q,s,y):m)},r.integerValue=function(d){var p=new O(this);return d==null?d=s:$e(d,0,8),_e(p,p.e+1,d)},r.isEqualTo=r.eq=function(d,p){return tn(this,new O(d,p))===0},r.isFinite=function(){return!!this.c},r.isGreaterThan=r.gt=function(d,p){return tn(this,new O(d,p))>0},r.isGreaterThanOrEqualTo=r.gte=function(d,p){return(p=tn(this,new O(d,p)))===1||p===0},r.isInteger=function(){return!!this.c&&Tt(this.e/ce)>this.c.length-2},r.isLessThan=r.lt=function(d,p){return tn(this,new O(d,p))<0},r.isLessThanOrEqualTo=r.lte=function(d,p){return(p=tn(this,new O(d,p)))===-1||p===0},r.isNaN=function(){return!this.s},r.isNegative=function(){return this.s<0},r.isPositive=function(){return this.s>0},r.isZero=function(){return!!this.c&&this.c[0]==0},r.minus=function(d,p){var h,v,x,_,y=this,w=y.s;if(d=new O(d,p),p=d.s,!w||!p)return new O(NaN);if(w!=p)return d.s=-p,y.plus(d);var g=y.e/ce,b=d.e/ce,m=y.c,A=d.c;if(!g||!b){if(!m||!A)return m?(d.s=-p,d):new O(A?y:NaN);if(!m[0]||!A[0])return A[0]?(d.s=-p,d):new O(m[0]?y:s==3?-0:0)}if(g=Tt(g),b=Tt(b),m=m.slice(),w=g-b){for((_=w<0)?(w=-w,x=m):(b=g,x=A),x.reverse(),p=w;p--;x.push(0));x.reverse()}else for(v=(_=(w=m.length)<(p=A.length))?w:p,w=p=0;p<v;p++)if(m[p]!=A[p]){_=m[p]<A[p];break}if(_&&(x=m,m=A,A=x,d.s=-d.s),p=(v=A.length)-(h=m.length),p>0)for(;p--;m[h++]=0);for(p=Dt-1;v>w;){if(m[--v]<A[v]){for(h=v;h&&!m[--h];m[h]=p);--m[h],m[v]+=Dt}m[v]-=A[v]}for(;m[0]==0;m.splice(0,1),--b);return m[0]?ve(d,m,b):(d.s=s==3?-1:1,d.c=[d.e=0],d)},r.modulo=r.mod=function(d,p){var h,v,x=this;return d=new O(d,p),!x.c||!d.s||d.c&&!d.c[0]?new O(NaN):!d.c||x.c&&!x.c[0]?new O(x):(ie==9?(v=d.s,d.s=1,h=e(x,d,0,3),d.s=v,h.s*=v):h=e(x,d,0,ie),d=x.minus(h.times(d)),!d.c[0]&&ie==1&&(d.s=x.s),d)},r.multipliedBy=r.times=function(d,p){var h,v,x,_,y,w,g,b,m,A,D,W,te,de,he,ae=this,fe=ae.c,Ae=(d=new O(d,p)).c;if(!fe||!Ae||!fe[0]||!Ae[0])return!ae.s||!d.s||fe&&!fe[0]&&!Ae||Ae&&!Ae[0]&&!fe?d.c=d.e=d.s=null:(d.s*=ae.s,!fe||!Ae?d.c=d.e=null:(d.c=[0],d.e=0)),d;for(v=Tt(ae.e/ce)+Tt(d.e/ce),d.s*=ae.s,g=fe.length,A=Ae.length,g<A&&(te=fe,fe=Ae,Ae=te,x=g,g=A,A=x),x=g+A,te=[];x--;te.push(0));for(de=Dt,he=Ni,x=A;--x>=0;){for(h=0,D=Ae[x]%he,W=Ae[x]/he|0,y=g,_=x+y;_>x;)b=fe[--y]%he,m=fe[y]/he|0,w=W*b+m*D,b=D*b+w%he*he+te[_]+h,h=(b/de|0)+(w/he|0)+W*m,te[_--]=b%de;te[_]=h}return h?++v:te.splice(0,1),ve(d,te,v)},r.negated=function(){var d=new O(this);return d.s=-d.s||null,d},r.plus=function(d,p){var h,v=this,x=v.s;if(d=new O(d,p),p=d.s,!x||!p)return new O(NaN);if(x!=p)return d.s=-p,v.minus(d);var _=v.e/ce,y=d.e/ce,w=v.c,g=d.c;if(!_||!y){if(!w||!g)return new O(x/0);if(!w[0]||!g[0])return g[0]?d:new O(w[0]?v:x*0)}if(_=Tt(_),y=Tt(y),w=w.slice(),x=_-y){for(x>0?(y=_,h=g):(x=-x,h=w),h.reverse();x--;h.push(0));h.reverse()}for(x=w.length,p=g.length,x-p<0&&(h=g,g=w,w=h,p=x),x=0;p;)x=(w[--p]=w[p]+g[p]+x)/Dt|0,w[p]=Dt===w[p]?0:w[p]%Dt;return x&&(w=[x].concat(w),++y),ve(d,w,y)},r.precision=r.sd=function(d,p){var h,v,x,_=this;if(d!=null&&d!==!!d)return $e(d,1,He),p==null?p=s:$e(p,0,8),_e(new O(_),d,p);if(!(h=_.c))return null;if(x=h.length-1,v=x*ce+1,x=h[x]){for(;x%10==0;x/=10,v--);for(x=h[0];x>=10;x/=10,v++);}return d&&_.e+1>v&&(v=_.e+1),v},r.shiftedBy=function(d){return $e(d,-wa,wa),this.times("1e"+d)},r.squareRoot=r.sqrt=function(){var d,p,h,v,x,_=this,y=_.c,w=_.s,g=_.e,b=a+4,m=new O("0.5");if(w!==1||!y||!y[0])return new O(!w||w<0&&(!y||y[0])?NaN:y?_:1/0);if(w=Math.sqrt(+Le(_)),w==0||w==1/0?(p=bt(y),(p.length+g)%2==0&&(p+="0"),w=Math.sqrt(+p),g=Tt((g+1)/2)-(g<0||g%2),w==1/0?p="5e"+g:(p=w.toExponential(),p=p.slice(0,p.indexOf("e")+1)+g),h=new O(p)):h=new O(w+""),h.c[0]){for(g=h.e,w=g+b,w<3&&(w=0);;)if(x=h,h=m.times(x.plus(e(_,x,b,1))),bt(x.c).slice(0,w)===(p=bt(h.c)).slice(0,w))if(h.e<g&&--w,p=p.slice(w-3,w+1),p=="9999"||!v&&p=="4999"){if(!v&&(_e(x,x.e+a+2,0),x.times(x).eq(_))){h=x;break}b+=4,w+=4,v=1}else{(!+p||!+p.slice(1)&&p.charAt(0)=="5")&&(_e(h,h.e+a+2,1),d=!h.times(h).eq(_));break}}return _e(h,h.e+a+1,s,d)},r.toExponential=function(d,p){return d!=null&&($e(d,0,He),d++),ye(this,d,p,1)},r.toFixed=function(d,p){return d!=null&&($e(d,0,He),d=d+this.e+1),ye(this,d,p)},r.toFormat=function(d,p,h){var v,x=this;if(h==null)d!=null&&p&&typeof p=="object"?(h=p,p=null):d&&typeof d=="object"?(h=d,d=p=null):h=ne;else if(typeof h!="object")throw Error(ot+"Argument not an object: "+h);if(v=x.toFixed(d,p),x.c){var _,y=v.split("."),w=+h.groupSize,g=+h.secondaryGroupSize,b=h.groupSeparator||"",m=y[0],A=y[1],D=x.s<0,W=D?m.slice(1):m,te=W.length;if(g&&(_=w,w=g,g=_,te-=_),w>0&&te>0){for(_=te%w||w,m=W.substr(0,_);_<te;_+=w)m+=b+W.substr(_,w);g>0&&(m+=b+W.slice(_)),D&&(m="-"+m)}v=A?m+(h.decimalSeparator||"")+((g=+h.fractionGroupSize)?A.replace(new RegExp("\\d{"+g+"}\\B","g"),"$&"+(h.fractionGroupSeparator||"")):A):m}return(h.prefix||"")+v+(h.suffix||"")},r.toFraction=function(d){var p,h,v,x,_,y,w,g,b,m,A,D,W=this,te=W.c;if(d!=null&&(w=new O(d),!w.isInteger()&&(w.c||w.s!==1)||w.lt(n)))throw Error(ot+"Argument "+(w.isInteger()?"out of range: ":"not an integer: ")+Le(w));if(!te)return new O(W);for(p=new O(n),b=h=new O(n),v=g=new O(n),D=bt(te),_=p.e=D.length-W.e-1,p.c[0]=ga[(y=_%ce)<0?ce+y:y],d=!d||w.comparedTo(p)>0?_>0?p:b:w,y=F,F=1/0,w=new O(D),g.c[0]=0;m=e(w,p,0,1),x=h.plus(m.times(v)),x.comparedTo(d)!=1;)h=v,v=x,b=g.plus(m.times(x=b)),g=x,p=w.minus(m.times(x=p)),w=x;return x=e(d.minus(h),v,0,1),g=g.plus(x.times(b)),h=h.plus(x.times(v)),g.s=b.s=W.s,_=_*2,A=e(b,v,_,s).minus(W).abs().comparedTo(e(g,h,_,s).minus(W).abs())<1?[b,v]:[g,h],F=y,A},r.toNumber=function(){return+Le(this)},r.toPrecision=function(d,p){return d!=null&&$e(d,1,He),ye(this,d,p,2)},r.toString=function(d){var p,h=this,v=h.s,x=h.e;return x===null?v?(p="Infinity",v<0&&(p="-"+p)):p="NaN":(d==null?p=x<=S||x>=I?ar(bt(h.c),x):di(bt(h.c),x,"0"):d===10&&le?(h=_e(new O(h),a+x+1,s),p=di(bt(h.c),h.e,"0")):($e(d,2,J.length,"Base"),p=i(di(bt(h.c),x,"0"),10,d,v,!0)),v<0&&h.c[0]&&(p="-"+p)),p},r.valueOf=r.toJSON=function(){return Le(this)},r._isBigNumber=!0,r[Symbol.toStringTag]="BigNumber",r[Symbol.for("nodejs.util.inspect.custom")]=r.valueOf,t!=null&&O.set(t),O}function Tt(t){var e=t|0;return t>0||t===e?e:e-1}function bt(t){for(var e,i,o=1,r=t.length,n=t[0]+"";o<r;){for(e=t[o++]+"",i=ce-e.length;i--;e="0"+e);n+=e}for(r=n.length;n.charCodeAt(--r)===48;);return n.slice(0,r+1||1)}function tn(t,e){var i,o,r=t.c,n=e.c,a=t.s,s=e.s,S=t.e,I=e.e;if(!a||!s)return null;if(i=r&&!r[0],o=n&&!n[0],i||o)return i?o?0:-s:a;if(a!=s)return a;if(i=a<0,o=S==I,!r||!n)return o?0:!r^i?1:-1;if(!o)return S>I^i?1:-1;for(s=(S=r.length)<(I=n.length)?S:I,a=0;a<s;a++)if(r[a]!=n[a])return r[a]>n[a]^i?1:-1;return S==I?0:S>I^i?1:-1}function $e(t,e,i,o){if(t<e||t>i||t!==kt(t))throw Error(ot+(o||"Argument")+(typeof t=="number"?t<e||t>i?" out of range: ":" not an integer: ":" not a primitive number: ")+String(t))}function rr(t){var e=t.c.length-1;return Tt(t.e/ce)==e&&t.c[e]%2!=0}function ar(t,e){return(t.length>1?t.charAt(0)+"."+t.slice(1):t)+(e<0?"e":"e+")+e}function di(t,e,i){var o,r;if(e<0){for(r=i+".";++e;r+=i);t=r+t}else if(o=t.length,++e>o){for(r=i,e-=o;--e;r+=i);t+=r}else e<o&&(t=t.slice(0,e)+"."+t.slice(e));return t}var sr=El();const we={bigNumber(t){return new sr(t)},multiply(t,e){if(t===void 0||e===void 0)return sr(0);const i=new sr(t),o=new sr(e);return i.multipliedBy(o)},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}},Bc={numericInputKeyDown(t,e,i){const o=["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"],r=t.metaKey||t.ctrlKey,n=t.key,a=n.toLocaleLowerCase(),s=a==="a",S=a==="c",I=a==="v",V=a==="x",F=n===",",ee=n===".",ie=n>="0"&&n<="9";!r&&(s||S||I||V)&&t.preventDefault(),e==="0"&&!F&&!ee&&n==="0"&&t.preventDefault(),e==="0"&&ie&&(i(n),t.preventDefault()),(F||ee)&&(e||(i("0."),t.preventDefault()),(e?.includes(".")||e?.includes(","))&&t.preventDefault()),!ie&&!o.includes(n)&&!ee&&!F&&t.preventDefault()}},zc=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],ns={URLS:{FAQ:"https://walletconnect.com/faq"}},De={WC_NAME_SUFFIX:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CHAIN:{EVM:"evm",SOLANA:"solana"},CHAIN_NAME_MAP:{evm:"Ethereum",solana:"Solana"}};function fr(t,e){return e==="light"?{"--w3m-accent":t?.["--w3m-accent"]||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":t?.["--w3m-accent"]||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}const ma="https://secure.walletconnect.org",Al=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["evm"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["evm","solana"]}],Vc="WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU",Te={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:ma,SECURE_SITE_DASHBOARD:`${ma}/dashboard`,SECURE_SITE_FAVICON:`${ma}/images/favicon.png`,WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NATIVE_TOKEN_ADDRESS:{evm:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111"},CONVERT_SLIPPAGE_TOLERANCE:1,DEFAULT_FEATURES:{swaps:!0,onramp:!0,analytics:!0,allWallets:"SHOW",disableAppend:!1,enableEIP6963:!1}},M={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(t,e=""){return t?.id.toLocaleLowerCase().includes(e.toLowerCase())},isAndroid(){const t=window.navigator.userAgent.toLowerCase();return M.isMobile()&&t.includes("android")},isIos(){const t=window.navigator.userAgent.toLowerCase();return M.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=Te.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=Te.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+Te.FOUR_MINUTES_MS},getNetworkId(t){return t?.split(":")[1]},getPlainAddress(t){return t?.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let i;return(...o)=>{function r(){t(...o)}i&&clearTimeout(i),i=setTimeout(r,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(M.isHttpUrl(t))return this.formatUniversalUrl(t,e);let i=t;i.includes("://")||(i=t.replaceAll("/","").replaceAll(":",""),i=`${i}://`),i.endsWith("/")||(i=`${i}/`);const o=encodeURIComponent(e);return{redirect:`${i}wc?uri=${o}`,href:i}},formatUniversalUrl(t,e){if(!M.isHttpUrl(t))return this.formatNativeUrl(t,e);let i=t;i.endsWith("/")||(i=`${i}/`);const o=encodeURIComponent(e);return{redirect:`${i}wc?uri=${o}`,href:i}},openHref(t,e,i){window.open(t,e,i||"noreferrer noopener")},returnOpenHref(t,e,i){return window.open(t,e,i||"noreferrer noopener")},async preloadImage(t){const e=new Promise((i,o)=>{const r=new Image;r.onload=i,r.onerror=o,r.crossOrigin="anonymous",r.src=t});return Promise.race([e,M.wait(2e3)])},formatBalance(t,e){let i="0.000";if(typeof t=="string"){const o=Number(t);if(o){const r=Math.floor(o*1e3)/1e3;r&&(i=r.toString())}}return`${i}${e?` ${e}`:""}`},formatBalance2(t,e){let i;if(t==="0")i="0";else if(typeof t=="string"){const o=Number(t);o&&(i=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return{value:i??"0",rest:i==="0"?"000":"",symbol:e}},getApiUrl(){return De.W3M_API_URL},getBlockchainApiUrl(){return De.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return De.PULSE_API_URL},getUUID(){return crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){return typeof t=="string"?t:typeof t?.issues?.[0]?.message=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"},sortRequestedNetworks(t,e=[]){const i={};return e&&t&&(t.forEach((o,r)=>{i[o]=r}),e.sort((o,r)=>{const n=i[o.id],a=i[r.id];return n!==void 0&&a!==void 0?n-a:n!==void 0?-1:a!==void 0?1:0})),e},calculateBalance(t){let e=0;for(const i of t)e+=i.value??0;return e},formatTokenBalance(t){const e=t.toFixed(2),[i,o]=e.split(".");return{dollars:i,pennies:o}},isAddress(t,e="evm"){switch(e){case"evm":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)||/^(?:0x)?[0-9A-F]{40}$/iu.test(t))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(t);default:return!1}},uniqueBy(t,e){const i=new Set;return t.filter(o=>{const r=o[e];return i.has(r)?!1:(i.add(r),!0)})}};async function uo(...t){const e=await fetch(...t);if(!e.ok)throw new Error(`HTTP status code: ${e.status}`,{cause:e});return e}class Hr{constructor({baseUrl:e,clientId:i}){this.baseUrl=e,this.clientId=i}async get({headers:e,signal:i,cache:o,...r}){const n=this.createUrl(r);return(await uo(n,{method:"GET",headers:e,signal:i,cache:o})).json()}async getBlob({headers:e,signal:i,...o}){const r=this.createUrl(o);return(await uo(r,{method:"GET",headers:e,signal:i})).blob()}async post({body:e,headers:i,signal:o,...r}){const n=this.createUrl(r);return(await uo(n,{method:"POST",headers:i,body:e?JSON.stringify(e):void 0,signal:o})).json()}async put({body:e,headers:i,signal:o,...r}){const n=this.createUrl(r);return(await uo(n,{method:"PUT",headers:i,body:e?JSON.stringify(e):void 0,signal:o})).json()}async delete({body:e,headers:i,signal:o,...r}){const n=this.createUrl(r);return(await uo(n,{method:"DELETE",headers:i,body:e?JSON.stringify(e):void 0,signal:o})).json()}createUrl({path:e,params:i}){const o=new URL(e,this.baseUrl);return i&&Object.entries(i).forEach(([r,n])=>{n&&o.searchParams.append(r,n)}),this.clientId&&o.searchParams.append("clientId",this.clientId),o}}const va="WALLETCONNECT_DEEPLINK_CHOICE",Ns="@w3m/recent",Ps="@w3m/connected_connector",Ds="@w3m/connected_social",Fc="@w3m-storage/SOCIAL_USERNAME",xe={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(va,JSON.stringify({href:t,name:e}))}catch{}},getWalletConnectDeepLink(){try{const t=localStorage.getItem(va);if(t)return JSON.parse(t)}catch{}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(va)}catch{}},setWeb3ModalRecent(t){try{const e=xe.getRecentWallets();e.find(o=>o.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(Ns,JSON.stringify(e)))}catch{}},getRecentWallets(){try{const t=localStorage.getItem(Ns);return t?JSON.parse(t):[]}catch{}return[]},setConnectedConnector(t){try{localStorage.setItem(Ps,t)}catch{}},getConnectedConnector(){try{return localStorage.getItem(Ps)}catch{}},setConnectedSocialProvider(t){try{localStorage.setItem(Ds,t)}catch{}},getConnectedSocialProvider(){try{return localStorage.getItem(Ds)}catch{}},getConnectedSocialUsername(){try{return localStorage.getItem(Fc)}catch{}}},xt=Ie({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),Re={state:xt,subscribeNetworkImages(t){return Qe(xt.networkImages,()=>t(xt.networkImages))},subscribeKey(t,e){return st(xt,t,e)},subscribe(t){return Qe(xt,()=>t(xt))},setWalletImage(t,e){xt.walletImages[t]=e},setNetworkImage(t,e){xt.networkImages[t]=e},setChainImage(t,e){xt.chainImages[t]=e},setConnectorImage(t,e){xt.connectorImages[t]=e},setTokenImage(t,e){xt.tokenImages[t]=e},setCurrencyImage(t,e){xt.currencyImages[t]=e}},pi=Ie({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),ut={state:pi,subscribe(t){return Qe(pi,()=>t(pi))},setThemeMode(t){pi.themeMode=t;try{const e=H.getAuthConnector();if(e){const i=ut.getSnapshot().themeVariables;e.provider.syncTheme({themeMode:t,themeVariables:i,w3mThemeVariables:fr(i,t)})}}catch{}},setThemeVariables(t){pi.themeVariables={...pi.themeVariables,...t};try{const e=H.getAuthConnector();if(e){const i=ut.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:i,w3mThemeVariables:fr(pi.themeVariables,pi.themeMode)})}}catch{}},getSnapshot(){return yl(pi)}},Gt=Ie({unMergedConnectors:[],connectors:[]}),H={state:Gt,subscribeKey(t,e){return st(Gt,t,e)},setConnectors(t){t.forEach(this.syncIfAuthConnector),Gt.unMergedConnectors=[...Gt.unMergedConnectors,...t].filter(e=>{try{if(!!!Ie(e))throw new Error("Connector is not available");return!0}catch{return!1}}),Gt.connectors=this.mergeMultiChainConnectors(Gt.unMergedConnectors)},mergeMultiChainConnectors(t){const e=this.generateConnectorMapByName(t);return Array.from(e.values()).map(o=>o.length>1?{name:o[0]?.name,imageUrl:o[0]?.imageUrl,imageId:o[0]?.imageId,providers:this.getUniqueConnectorsByName(o),type:"MULTI_CHAIN"}:o[0])},generateConnectorMapByName(t){const e=new Map;return t.forEach(i=>{const{name:o}=i;if(!o)return;const r=e.get(o)||[];r.find(a=>a.chain===i.chain)||r.push(i),e.set(o,r)}),e},getUniqueConnectorsByName(t){const e=[];return t.forEach(i=>{e.find(o=>o.chain===i.chain)||e.push({...i,name:De.CHAIN_NAME_MAP[i.chain]})}),e},addConnector(t){this.setConnectors([t])},getAuthConnector(){return Gt.connectors.find(t=>t.type==="AUTH")},getAnnouncedConnectorRdns(){return Gt.connectors.filter(t=>t.type==="ANNOUNCED").map(t=>t.info?.rdns)},getConnectors(){return Gt.connectors},getConnector(t,e){return Gt.connectors.find(i=>i.explorerId===t||i.info?.rdns===e)},syncIfAuthConnector(t){if(t.id!=="w3mAuth")return;const e=t,i=yl(Y.state),o=ut.getSnapshot().themeMode,r=ut.getSnapshot().themeVariables;e?.provider?.syncDappData?.({metadata:i.metadata,sdkVersion:i.sdkVersion,projectId:i.projectId}),e.provider.syncTheme({themeMode:o,themeVariables:r,w3mThemeVariables:fr(r,o)})}},Hc=M.getAnalyticsUrl(),Zc=new Hr({baseUrl:Hc,clientId:null}),Gc=["MODAL_CREATED"],Ln=Ie({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),B={state:Ln,subscribe(t){return Qe(Ln,()=>t(Ln))},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:i}=Y.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":i}},async _sendAnalyticsEvent(t){try{if(Gc.includes(t.data.event)||typeof window>"u")return;await Zc.post({path:"/e",headers:B._getApiHeaders(),body:{eventId:M.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){Ln.timestamp=Date.now(),Ln.data=t,Y.state.enableAnalytics&&B._sendAnalyticsEvent(Ln)}},po=Ie({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0}),Mi={state:po,subscribe(t){return Qe(po,()=>t(po))},set(t){Object.assign(po,{...po,...t})}},qc={isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]},Yc={supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]},me=Ie({chains:Ic(),activeChain:void 0,activeCaipNetwork:void 0}),P={state:me,subscribeKey(t,e){return st(me,t,e)},subscribeChain(t){let e;return Qe(me.chains,()=>{const i=me.activeChain;if(i){const o=me.chains.get(i);(!e||e!==o)&&(e=o,t(o))}})},subscribeChainProp(t,e){let i;return Qe(me.chains,()=>{const o=me.activeChain;if(o){const r=me.chains.get(o)?.[t];i!==r&&(i=r,e(r))}})},initialize(t){const e=t?.[0];if(!e)throw new Error("Adapter is required to initialize ChainController");me.activeChain=e.chain,Mi.set({activeChain:e.chain}),this.setActiveCaipNetwork(e.defaultChain),t.forEach(i=>{me.chains.set(i.chain,{chain:i.chain,connectionControllerClient:i.connectionControllerClient,networkControllerClient:i.networkControllerClient,accountState:qc,networkState:Yc})})},setChainNetworkData(t,e,i=!1){if(!t)throw new Error("Chain is required to update chain network data");const o=me.chains.get(t);o&&(o.networkState=_t({...o.networkState,...e}),me.chains.set(t,_t(o)),(i||me.chains.size===1||me.activeChain===t)&&L.replaceState(o.networkState))},setChainAccountData(t,e,i=!0){if(!t)throw new Error("Chain is required to update chain account data");const o=me.chains.get(t);o&&(o.accountState=_t({...o.accountState,...e}),me.chains.set(t,o),(i||me.chains.size===1||me.activeChain===t)&&R.replaceState(o.accountState))},setAccountProp(t,e,i){this.setChainAccountData(i,{[t]:e})},setActiveChain(t){const e=t?me.chains.get(t):void 0;e&&e.chain!==me.activeChain&&(me.activeChain=e.chain,me.activeCaipNetwork=e.networkState?.caipNetwork?_t(e.networkState?.caipNetwork):void 0,R.replaceState(e.accountState),L.replaceState(e.networkState),this.setCaipNetwork(e.chain,e.networkState?.caipNetwork),Mi.set({activeChain:t,selectedNetworkId:e.networkState?.caipNetwork?.id}))},setActiveCaipNetwork(t){t&&(t.chain!==me.activeChain&&this.setActiveChain(t.chain),me.activeCaipNetwork=_t(t),me.activeChain=t.chain,this.setCaipNetwork(t.chain,t,!0),Mi.set({activeChain:t.chain,selectedNetworkId:t?.id}))},setCaipNetwork(t,e,i=!1){this.setChainNetworkData(t,{caipNetwork:e},i)},setActiveConnector(t){t&&(me.activeConnector=_t(t))},getNetworkControllerClient(){const t=me.activeChain;if(!t)throw new Error("Chain is required to get network controller client");const e=me.chains.get(t);if(!e)throw new Error("Chain adapter not found");if(!e.networkControllerClient)throw new Error("NetworkController client not set");return e.networkControllerClient},getConnectionControllerClient(t){const e=t||me.activeChain;if(!e)throw new Error("Chain is required to get connection controller client");const i=me.chains.get(e);if(!i)throw new Error("Chain adapter not found");if(!i.connectionControllerClient)throw new Error("ConnectionController client not set");return i.connectionControllerClient},getAccountProp(t,e){let i=me.activeChain;if(e&&(i=e),!i)return;const o=me.chains.get(i)?.accountState;if(o)return o[t]},getNetworkProp(t){const e=me.activeChain;if(!e)return;const i=me.chains.get(e)?.networkState;if(i)return i[t]},resetAccount(t){const e=t;if(!e)throw new Error("Chain is required to set account prop");this.setChainAccountData(e,_t({isConnected:!1,smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountType:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0}))}},ba=Ie({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),L={state:ba,replaceState(t){t&&Object.assign(ba,_t(t))},subscribeKey(t,e){let i;return P.subscribeChainProp("networkState",o=>{if(o){const r=o[t];i!==r&&(i=r,e(r))}})},_getClient(){return P.getNetworkControllerClient()},initializeDefaultNetwork(){const t=this.getRequestedCaipNetworks();t.length>0&&this.setCaipNetwork(t[0])},setDefaultCaipNetwork(t){t&&(P.setCaipNetwork(t.chain,t,!0),P.setChainNetworkData(t.chain,{isDefaultCaipNetwork:!0}),Mi.set({selectedNetworkId:t.id}))},setActiveCaipNetwork(t){t&&(P.setActiveCaipNetwork(t),P.setChainNetworkData(t.chain,{caipNetwork:t}),Mi.set({activeChain:t.chain,selectedNetworkId:t?.id}),P.state.chains.get(t.chain)?.networkState?.allowUnsupportedChain||this.checkIfSupportedNetwork()||this.showUnsupportedChainUI())},setCaipNetwork(t){if(t){if(!t?.chain)throw new Error("chain is required to set active network");P.setCaipNetwork(t?.chain,t),P.state.chains.get(t.chain)?.networkState?.allowUnsupportedChain||this.checkIfSupportedNetwork()||this.showUnsupportedChainUI()}},setRequestedCaipNetworks(t,e){P.setChainNetworkData(e,{requestedCaipNetworks:t})},setAllowUnsupportedChain(t,e){P.setChainNetworkData(e||P.state.activeChain,{allowUnsupportedChain:t})},setSmartAccountEnabledNetworks(t,e){P.setChainNetworkData(e,{smartAccountEnabledNetworks:t})},getRequestedCaipNetworks(t){let e;if(!P.state.activeChain)throw new Error("activeChain is required to get requested networks");if(t){const n=t;if(!n)throw new Error("chain is required to get requested networks");e=[n]}else e=[...P.state.chains.keys()];const i=[],o=[];return e.forEach(n=>{P.state.chains.get(n)?.networkState?.approvedCaipNetworkIds&&i.push(...P.state.chains.get(n)?.networkState?.approvedCaipNetworkIds||[]),P.state.chains.get(n)?.networkState?.requestedCaipNetworks&&o.push(...P.state.chains.get(n)?.networkState?.requestedCaipNetworks||[])}),M.sortRequestedNetworks(i,o)},async switchActiveNetwork(t){const e=t?P.state.chains.get(t.chain)?.networkControllerClient:void 0;if(!e)throw new Error("networkControllerClient not found for given network object");P.setActiveCaipNetwork(t),await e?.switchCaipNetwork(t),t&&B.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:t.id}})},getApprovedCaipNetworkIds(t){if(t){const i=t;if(!i)throw new Error("chain is required to get approved network IDs");return P.state.chains.get(i)?.networkState?.approvedCaipNetworkIds}const e=[];return Object.values(P.state.chains).forEach(i=>{i.networkState.approvedCaipNetworkIds&&e.push(...i.networkState?.approvedCaipNetworkIds||[])}),e},async setApprovedCaipNetworksData(t){const i=await P.getNetworkControllerClient().getApprovedCaipNetworksData();if(!t)throw new Error("chain is required to set approved network data");P.setChainNetworkData(t,{approvedCaipNetworkIds:i?.approvedCaipNetworkIds,supportsAllNetworks:i?.supportsAllNetworks||!1})},checkIfSupportedNetwork(){const t=P.state.activeChain;if(!t)return!1;const e=P.state.chains.get(t)?.networkState?.caipNetwork,i=this.getRequestedCaipNetworks();return i.length?i?.some(o=>o.id===e?.id):!0},checkIfSmartAccountEnabled(){const t=Sl.caipNetworkIdToNumber(ba.caipNetwork?.id);if(!P.state.activeChain)throw new Error("activeChain is required to check if smart account is enabled");return t?!!P.getNetworkProp("smartAccountEnabledNetworks")?.includes(t):!1},checkIfNamesSupported(){const t=P.state.activeChain;return t?P.state.chains.get(t)?.networkState?.caipNetwork?.chain===De.CHAIN.EVM:!1},resetNetwork(){const t=P.state.activeChain;if(!t)throw new Error("chain is required to reset network");P.setChainNetworkData(t,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},getSupportsAllNetworks(){const t=P.state.activeChain;if(!t)throw new Error("chain is required to check if network supports all networks");return P.state.chains.get(t)?.networkState?.supportsAllNetworks},showUnsupportedChainUI(){setTimeout(()=>{re.open({view:"UnsupportedChain"})},300)},getActiveNetworkTokenAddress(){const t=Te.NATIVE_TOKEN_ADDRESS[this.state.caipNetwork?.chain||"evm"];return`${this.state.caipNetwork?.id||"eip155:1"}:${t}`}},Kc=M.getApiUrl(),Ke=new Hr({baseUrl:Kc,clientId:null}),Xc="40",Ls="4",Qc=20,Ze=Ie({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1,excludedRDNS:[]}),K={state:Ze,subscribeKey(t,e){return st(Ze,t,e)},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:i}=Y.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":i}},_filterOutExtensions(t){return Y.state.isUniversalProvider?t.filter(e=>!!(e.mobile_link||e.desktop_link||e.webapp_link)):t},async _fetchWalletImage(t){const e=`${Ke.baseUrl}/getWalletImage/${t}`,i=await Ke.getBlob({path:e,headers:K._getApiHeaders()});Re.setWalletImage(t,URL.createObjectURL(i))},async _fetchNetworkImage(t){const e=`${Ke.baseUrl}/public/getAssetImage/${t}`,i=await Ke.getBlob({path:e,headers:K._getApiHeaders()});Re.setNetworkImage(t,URL.createObjectURL(i))},async _fetchConnectorImage(t){const e=`${Ke.baseUrl}/public/getAssetImage/${t}`,i=await Ke.getBlob({path:e,headers:K._getApiHeaders()});Re.setConnectorImage(t,URL.createObjectURL(i))},async _fetchCurrencyImage(t){const e=`${Ke.baseUrl}/public/getCurrencyImage/${t}`,i=await Ke.getBlob({path:e,headers:K._getApiHeaders()});Re.setCurrencyImage(t,URL.createObjectURL(i))},async _fetchTokenImage(t){const e=`${Ke.baseUrl}/public/getTokenImage/${t}`,i=await Ke.getBlob({path:e,headers:K._getApiHeaders()});Re.setTokenImage(t,URL.createObjectURL(i))},async fetchNetworkImages(){const e=L.getRequestedCaipNetworks()?.map(({imageId:i})=>i).filter(Boolean);e&&await Promise.allSettled(e.map(i=>K._fetchNetworkImage(i)))},async fetchConnectorImages(){const{connectors:t}=H.state,e=t.map(({imageId:i})=>i).filter(Boolean);await Promise.allSettled(e.map(i=>K._fetchConnectorImage(i)))},async fetchCurrencyImages(t=[]){await Promise.allSettled(t.map(e=>K._fetchCurrencyImage(e)))},async fetchTokenImages(t=[]){await Promise.allSettled(t.map(e=>K._fetchTokenImage(e)))},async fetchFeaturedWallets(){const{featuredWalletIds:t}=Y.state;if(t?.length){const{data:e}=await Ke.get({path:"/getWallets",headers:K._getApiHeaders(),params:{page:"1",entries:t?.length?String(t.length):Ls,include:t?.join(",")}});e.sort((o,r)=>t.indexOf(o.id)-t.indexOf(r.id));const i=e.map(o=>o.image_id).filter(Boolean);await Promise.allSettled(i.map(o=>K._fetchWalletImage(o))),Ze.featured=e}},async fetchRecommendedWallets(){const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:i}=Y.state,o=[...e??[],...i??[]].filter(Boolean),{data:r,count:n}=await Ke.get({path:"/getWallets",headers:K._getApiHeaders(),params:{page:"1",chains:L.state.caipNetwork?.id,entries:Ls,include:t?.join(","),exclude:o?.join(",")}}),a=xe.getRecentWallets(),s=r.map(I=>I.image_id).filter(Boolean),S=a.map(I=>I.image_id).filter(Boolean);await Promise.allSettled([...s,...S].map(I=>K._fetchWalletImage(I))),Ze.recommended=r,Ze.count=n??0},async fetchWallets({page:t}){const{includeWalletIds:e,excludeWalletIds:i,featuredWalletIds:o}=Y.state,r=[...Ze.recommended.map(({id:S})=>S),...i??[],...o??[]].filter(Boolean),{data:n,count:a}=await Ke.get({path:"/getWallets",headers:K._getApiHeaders(),params:{page:String(t),entries:Xc,chains:L.state.caipNetwork?.id,include:e?.join(","),exclude:r.join(",")}}),s=n.slice(0,Qc).map(S=>S.image_id).filter(Boolean);await Promise.allSettled(s.map(S=>K._fetchWalletImage(S))),Ze.wallets=M.uniqueBy([...Ze.wallets,...K._filterOutExtensions(n)],"id"),Ze.count=a>Ze.count?a:Ze.count,Ze.page=t},async searchWalletByIds({ids:t}){const{data:e}=await Ke.get({path:"/getWallets",headers:K._getApiHeaders(),params:{page:"1",entries:String(t.length),chains:L.state.caipNetwork?.id,include:t?.join(",")}});e&&e.forEach(i=>{i?.rdns&&Ze.excludedRDNS.push(i.rdns)})},async searchWallet({search:t}){const{includeWalletIds:e,excludeWalletIds:i}=Y.state;Ze.search=[];const{data:o}=await Ke.get({path:"/getWallets",headers:K._getApiHeaders(),params:{page:"1",entries:"100",search:t?.trim(),chains:L.state.caipNetwork?.id,include:e?.join(","),exclude:i?.join(",")}}),r=o.map(n=>n.image_id).filter(Boolean);await Promise.allSettled([...r.map(n=>K._fetchWalletImage(n)),M.wait(300)]),Ze.search=K._filterOutExtensions(o)},async reFetchWallets(){Ze.page=1,Ze.wallets=[],await K.fetchFeaturedWallets(),await K.fetchRecommendedWallets()},prefetch(){const t=[K.fetchFeaturedWallets(),K.fetchRecommendedWallets(),K.fetchNetworkImages(),K.fetchConnectorImages()];Y.state.enableAnalytics&&t.push(K.fetchAnalyticsConfig()),Ze.prefetchPromise=Promise.race([Promise.allSettled(t)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:t}=await Ke.get({path:"/getAnalyticsConfig",headers:K._getApiHeaders()});Y.setEnableAnalytics(t)}},Ne=Ie({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined",enableAnalytics:Te.DEFAULT_FEATURES.analytics,enableOnramp:Te.DEFAULT_FEATURES.onramp,enableSwaps:Te.DEFAULT_FEATURES.swaps,allWallets:Te.DEFAULT_FEATURES.allWallets,disableAppend:Te.DEFAULT_FEATURES.disableAppend,enableEIP6963:Te.DEFAULT_FEATURES.enableEIP6963}),Y={state:Ne,subscribeKey(t,e){return st(Ne,t,e)},setOptions(t){Object.assign(Ne,t)},setProjectId(t){Ne.projectId=t},setAllWallets(t=Te.DEFAULT_FEATURES.allWallets){Ne.allWallets=t},setIncludeWalletIds(t){Ne.includeWalletIds=t},setExcludeWalletIds(t){Ne.excludeWalletIds=t,t&&K.searchWalletByIds({ids:t})},setFeaturedWalletIds(t){Ne.featuredWalletIds=t},setTokens(t){Ne.tokens=t},setTermsConditionsUrl(t){Ne.termsConditionsUrl=t},setPrivacyPolicyUrl(t){Ne.privacyPolicyUrl=t},setCustomWallets(t){Ne.customWallets=t},setIsSiweEnabled(t){Ne.isSiweEnabled=t},setIsUniversalProvider(t){Ne.isUniversalProvider=t},setEnableAnalytics(t=Te.DEFAULT_FEATURES.analytics){Ne.enableAnalytics=t},setSdkVersion(t){Ne.sdkVersion=t},setMetadata(t){Ne.metadata=t},setOnrampEnabled(t=Te.DEFAULT_FEATURES.onramp){Ne.enableOnramp=t},setDisableAppend(t=Te.DEFAULT_FEATURES.disableAppend){Ne.disableAppend=t},setEIP6963Enabled(t=Te.DEFAULT_FEATURES.enableEIP6963){Ne.enableEIP6963=t},setHasMultipleAddresses(t){Ne.hasMultipleAddresses=t},setEnableSwaps(t=Te.DEFAULT_FEATURES.swaps){Ne.enableSwaps=t}},Jc={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},$l=M.getBlockchainApiUrl(),Ue=Ie({clientId:null,api:new Hr({baseUrl:$l,clientId:null})}),Pe={state:Ue,fetchIdentity({address:t}){return Ue.api.get({path:`/v1/identity/${t}`,params:{projectId:Y.state.projectId,sender:R.state.address}})},fetchTransactions({account:t,projectId:e,cursor:i,onramp:o,signal:r,cache:n,chainId:a}){return Ue.api.get({path:`/v1/account/${t}/history`,params:{projectId:e,cursor:i,onramp:o,chainId:a},signal:r,cache:n})},fetchSwapQuote({projectId:t,amount:e,userAddress:i,from:o,to:r,gasPrice:n}){return Ue.api.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{projectId:t,amount:e,userAddress:i,from:o,to:r,gasPrice:n}})},fetchSwapTokens({projectId:t,chainId:e}){return Ue.api.get({path:"/v1/convert/tokens",params:{projectId:t,chainId:e}})},fetchTokenPrice({projectId:t,addresses:e}){return Ue.api.post({path:"/v1/fungible/price",body:{projectId:t,currency:"usd",addresses:e},headers:{"Content-Type":"application/json"}})},fetchSwapAllowance({projectId:t,tokenAddress:e,userAddress:i}){const{sdkType:o,sdkVersion:r}=Y.state;return Ue.api.get({path:"/v1/convert/allowance",params:{projectId:t,tokenAddress:e,userAddress:i},headers:{"Content-Type":"application/json","x-sdk-type":o,"x-sdk-version":r}})},fetchGasPrice({projectId:t,chainId:e}){const{sdkType:i,sdkVersion:o}=Y.state;return Ue.api.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json","x-sdk-type":i,"x-sdk-version":o},params:{projectId:t,chainId:e}})},generateSwapCalldata({amount:t,from:e,projectId:i,to:o,userAddress:r}){return Ue.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:t,eip155:{slippage:Te.CONVERT_SLIPPAGE_TOLERANCE},from:e,projectId:i,to:o,userAddress:r}})},generateApproveCalldata({from:t,projectId:e,to:i,userAddress:o}){const{sdkType:r,sdkVersion:n}=Y.state;return Ue.api.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json","x-sdk-type":r,"x-sdk-version":n},params:{projectId:e,userAddress:o,from:t,to:i}})},async getBalance(t,e,i){const{sdkType:o,sdkVersion:r}=Y.state;return Ue.api.get({path:`/v1/account/${t}/balance`,headers:{"x-sdk-type":o,"x-sdk-version":r},params:{currency:"usd",projectId:Y.state.projectId,chainId:e,forceUpdate:i}})},async lookupEnsName(t){return Ue.api.get({path:`/v1/profile/account/${t}${De.WC_NAME_SUFFIX}`,params:{projectId:Y.state.projectId,apiVersion:"2"}})},async reverseLookupEnsName({address:t}){return Ue.api.get({path:`/v1/profile/reverse/${t}`,params:{sender:R.state.address,projectId:Y.state.projectId,apiVersion:"2"}})},async getEnsNameSuggestions(t){return Ue.api.get({path:`/v1/profile/suggestions/${t}`,params:{projectId:Y.state.projectId}})},async registerEnsName({coinType:t,address:e,message:i,signature:o}){return Ue.api.post({path:"/v1/profile/account",body:{coin_type:t,address:e,message:i,signature:o},headers:{"Content-Type":"application/json"}})},async generateOnRampURL({destinationWallets:t,partnerUserId:e,defaultNetwork:i,purchaseAmount:o,paymentAmount:r}){return(await Ue.api.post({path:"/v1/generators/onrampurl",params:{projectId:Y.state.projectId},body:{destinationWallets:t,defaultNetwork:i,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:o,presetFiatAmount:r}})).url},async getOnrampOptions(){try{return await Ue.api.get({path:"/v1/onramp/options",params:{projectId:Y.state.projectId}})}catch{return Jc}},async getOnrampQuote({purchaseCurrency:t,paymentCurrency:e,amount:i,network:o}){try{return await Ue.api.post({path:"/v1/onramp/quote",params:{projectId:Y.state.projectId},body:{purchaseCurrency:t,paymentCurrency:e,amount:i,network:o}})}catch{return{coinbaseFee:{amount:i,currency:e.id},networkFee:{amount:i,currency:e.id},paymentSubtotal:{amount:i,currency:e.id},paymentTotal:{amount:i,currency:e.id},purchaseAmount:{amount:i,currency:e.id},quoteId:"mocked-quote-id"}}},setClientId(t){Ue.clientId=t,Ue.api=new Hr({baseUrl:$l,clientId:t})}},yt=Ie({message:"",variant:"success",open:!1}),q={state:yt,subscribeKey(t,e){return st(yt,t,e)},showLoading(t){yt.message=t,yt.variant="loading",yt.open=!0},showSuccess(t){yt.message=t,yt.variant="success",yt.open=!0},showError(t){const e=M.parseError(t);yt.message=e,yt.variant="error",yt.open=!0},hide(){yt.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=yc.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));const Li={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",SOCIAL_USERNAME:"SOCIAL_USERNAME",SOCIAL:"@w3m/connected_social",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_CONNECT_SOCIAL:"@w3m-app/CONNECT_SOCIAL",APP_GET_SOCIAL_REDIRECT_URI:"@w3m-app/GET_SOCIAL_REDIRECT_URI",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",APP_CONNECT_FARCASTER:"@w3m-app/CONNECT_FARCASTER",APP_GET_FARCASTER_URI:"@w3m-app/GET_FARCASTER_URI",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_CONNECT_SOCIAL_SUCCESS:"@w3m-frame/CONNECT_SOCIAL_SUCCESS",FRAME_CONNECT_SOCIAL_ERROR:"@w3m-frame/CONNECT_SOCIAL_ERROR",FRAME_CONNECT_FARCASTER_SUCCESS:"@w3m-frame/CONNECT_FARCASTER_SUCCESS",FRAME_CONNECT_FARCASTER_ERROR:"@w3m-frame/CONNECT_FARCASTER_ERROR",FRAME_GET_FARCASTER_URI_SUCCESS:"@w3m-frame/GET_FARCASTER_URI_SUCCESS",FRAME_GET_FARCASTER_URI_ERROR:"@w3m-frame/GET_FARCASTER_URI_ERROR",FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},pe={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},Me=u.object({message:u.string()});function Z(t){return u.literal(Li[t])}u.object({accessList:u.array(u.string()),blockHash:u.string().nullable(),blockNumber:u.string().nullable(),chainId:u.string().or(u.number()),from:u.string(),gas:u.string(),hash:u.string(),input:u.string().nullable(),maxFeePerGas:u.string(),maxPriorityFeePerGas:u.string(),nonce:u.string(),r:u.string(),s:u.string(),to:u.string(),transactionIndex:u.string().nullable(),type:u.string(),v:u.string(),value:u.string()});const eu=u.object({chainId:u.string().or(u.number())}),tu=u.object({email:u.string().email()}),iu=u.object({otp:u.string()}),nu=u.object({uri:u.string()}),ou=u.object({chainId:u.optional(u.string().or(u.number())),preferredAccountType:u.optional(u.string())}),ru=u.object({provider:u.enum(["google","github","apple","facebook","x","discord"])}),au=u.object({email:u.string().email()}),su=u.object({otp:u.string()}),lu=u.object({otp:u.string()}),cu=u.object({themeMode:u.optional(u.enum(["light","dark"])),themeVariables:u.optional(u.record(u.string(),u.string().or(u.number()))),w3mThemeVariables:u.optional(u.record(u.string(),u.string()))}),uu=u.object({metadata:u.object({name:u.string(),description:u.string(),url:u.string(),icons:u.array(u.string())}).optional(),sdkVersion:u.string(),projectId:u.string()}),du=u.object({type:u.string()}),pu=u.object({action:u.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),hu=u.object({url:u.string()}),fu=u.object({userName:u.string()}),wu=u.object({email:u.string(),address:u.string(),chainId:u.string().or(u.number()),accounts:u.array(u.object({address:u.string(),type:u.enum([pe.ACCOUNT_TYPES.EOA,pe.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),userName:u.string().optional()}),gu=u.object({action:u.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),mu=u.object({email:u.string().email().optional().nullable(),address:u.string(),chainId:u.string().or(u.number()),smartAccountDeployed:u.optional(u.boolean()),accounts:u.array(u.object({address:u.string(),type:u.enum([pe.ACCOUNT_TYPES.EOA,pe.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),preferredAccountType:u.optional(u.string())}),vu=u.object({uri:u.string()}),bu=u.object({isConnected:u.boolean()}),xu=u.object({chainId:u.string().or(u.number())}),yu=u.object({chainId:u.string().or(u.number())}),Cu=u.object({newEmail:u.string().email()}),ku=u.object({smartAccountEnabledNetworks:u.array(u.number())});u.object({address:u.string(),isDeployed:u.boolean()});const Tu=u.object({type:u.string(),address:u.string()}),_u=u.any(),Su=u.object({method:u.literal("eth_accounts")}),Eu=u.object({method:u.literal("eth_blockNumber")}),Au=u.object({method:u.literal("eth_call"),params:u.array(u.any())}),$u=u.object({method:u.literal("eth_chainId")}),Ru=u.object({method:u.literal("eth_estimateGas"),params:u.array(u.any())}),Iu=u.object({method:u.literal("eth_feeHistory"),params:u.array(u.any())}),Ou=u.object({method:u.literal("eth_gasPrice")}),Nu=u.object({method:u.literal("eth_getAccount"),params:u.array(u.any())}),Pu=u.object({method:u.literal("eth_getBalance"),params:u.array(u.any())}),Du=u.object({method:u.literal("eth_getBlockByHash"),params:u.array(u.any())}),Lu=u.object({method:u.literal("eth_getBlockByNumber"),params:u.array(u.any())}),Mu=u.object({method:u.literal("eth_getBlockReceipts"),params:u.array(u.any())}),Wu=u.object({method:u.literal("eth_getBlockTransactionCountByHash"),params:u.array(u.any())}),Uu=u.object({method:u.literal("eth_getBlockTransactionCountByNumber"),params:u.array(u.any())}),ju=u.object({method:u.literal("eth_getCode"),params:u.array(u.any())}),Bu=u.object({method:u.literal("eth_getFilterChanges"),params:u.array(u.any())}),zu=u.object({method:u.literal("eth_getFilterLogs"),params:u.array(u.any())}),Vu=u.object({method:u.literal("eth_getLogs"),params:u.array(u.any())}),Fu=u.object({method:u.literal("eth_getProof"),params:u.array(u.any())}),Hu=u.object({method:u.literal("eth_getStorageAt"),params:u.array(u.any())}),Zu=u.object({method:u.literal("eth_getTransactionByBlockHashAndIndex"),params:u.array(u.any())}),Gu=u.object({method:u.literal("eth_getTransactionByBlockNumberAndIndex"),params:u.array(u.any())}),qu=u.object({method:u.literal("eth_getTransactionByHash"),params:u.array(u.any())}),Yu=u.object({method:u.literal("eth_getTransactionCount"),params:u.array(u.any())}),Ku=u.object({method:u.literal("eth_getTransactionReceipt"),params:u.array(u.any())}),Xu=u.object({method:u.literal("eth_getUncleCountByBlockHash"),params:u.array(u.any())}),Qu=u.object({method:u.literal("eth_getUncleCountByBlockNumber"),params:u.array(u.any())}),Ju=u.object({method:u.literal("eth_maxPriorityFeePerGas")}),ed=u.object({method:u.literal("eth_newBlockFilter")}),td=u.object({method:u.literal("eth_newFilter"),params:u.array(u.any())}),id=u.object({method:u.literal("eth_newPendingTransactionFilter")}),nd=u.object({method:u.literal("eth_sendRawTransaction"),params:u.array(u.any())}),od=u.object({method:u.literal("eth_syncing"),params:u.array(u.any())}),rd=u.object({method:u.literal("eth_uninstallFilter"),params:u.array(u.any())}),Ms=u.object({method:u.literal("personal_sign"),params:u.array(u.any())}),ad=u.object({method:u.literal("eth_signTypedData_v4"),params:u.array(u.any())}),Ws=u.object({method:u.literal("eth_sendTransaction"),params:u.array(u.any())}),sd=u.object({method:u.literal("solana_signMessage"),params:u.object({message:u.string(),pubkey:u.string()})}),ld=u.object({method:u.literal("solana_signTransaction"),params:u.object({transaction:u.string()})}),cd=u.object({method:u.literal("solana_signAllTransactions"),params:u.object({transactions:u.array(u.string())})}),ud=u.object({method:u.literal("solana_signAndSendTransaction"),params:u.object({transaction:u.string(),options:u.object({skipPreflight:u.boolean().optional(),preflightCommitment:u.enum(["processed","confirmed","finalized","recent","single","singleGossip","root","max"]).optional(),maxRetries:u.number().optional(),minContextSlot:u.number().optional()}).optional()})}),dd=u.object({method:u.literal("wallet_sendCalls"),params:u.array(u.object({chainId:u.string().or(u.number()).optional(),from:u.string().optional(),version:u.string().optional(),capabilities:u.any().optional(),calls:u.array(u.object({to:u.string().startsWith("0x"),data:u.string().startsWith("0x").optional(),value:u.string().optional()}))}))}),pd=u.object({method:u.literal("wallet_getCallsStatus"),params:u.array(u.string())}),hd=u.object({method:u.literal("wallet_getCapabilities")}),fd=u.object({method:u.literal("wallet_grantPermissions"),params:u.array(u.any())}),Us=u.object({token:u.string()}),G=u.object({id:u.string().optional()});G.extend({type:Z("APP_SWITCH_NETWORK"),payload:eu}).or(G.extend({type:Z("APP_CONNECT_EMAIL"),payload:tu})).or(G.extend({type:Z("APP_CONNECT_DEVICE")})).or(G.extend({type:Z("APP_CONNECT_OTP"),payload:iu})).or(G.extend({type:Z("APP_CONNECT_SOCIAL"),payload:nu})).or(G.extend({type:Z("APP_GET_FARCASTER_URI")})).or(G.extend({type:Z("APP_CONNECT_FARCASTER")})).or(G.extend({type:Z("APP_GET_USER"),payload:u.optional(ou)})).or(G.extend({type:Z("APP_GET_SOCIAL_REDIRECT_URI"),payload:ru})).or(G.extend({type:Z("APP_SIGN_OUT")})).or(G.extend({type:Z("APP_IS_CONNECTED"),payload:u.optional(Us)})).or(G.extend({type:Z("APP_GET_CHAIN_ID")})).or(G.extend({type:Z("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(G.extend({type:Z("APP_INIT_SMART_ACCOUNT")})).or(G.extend({type:Z("APP_SET_PREFERRED_ACCOUNT"),payload:du})).or(G.extend({type:Z("APP_RPC_REQUEST"),payload:Ms.or(Ws).or(Su).or(Eu).or(Au).or($u).or(Ru).or(Iu).or(Ou).or(Nu).or(Pu).or(Du).or(Lu).or(Mu).or(Wu).or(Uu).or(ju).or(Bu).or(zu).or(Vu).or(Fu).or(Hu).or(Zu).or(Gu).or(qu).or(Yu).or(Ku).or(Xu).or(Qu).or(Ju).or(ed).or(td).or(id).or(nd).or(od).or(rd).or(Ms).or(ad).or(Ws).or(sd).or(ld).or(cd).or(ud).or(pd).or(dd).or(hd).or(fd)})).or(G.extend({type:Z("APP_UPDATE_EMAIL"),payload:au})).or(G.extend({type:Z("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:su})).or(G.extend({type:Z("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:lu})).or(G.extend({type:Z("APP_SYNC_THEME"),payload:cu})).or(G.extend({type:Z("APP_SYNC_DAPP_DATA"),payload:uu})),G.extend({type:Z("FRAME_SWITCH_NETWORK_ERROR"),payload:Me}).or(G.extend({type:Z("FRAME_SWITCH_NETWORK_SUCCESS"),payload:yu})).or(G.extend({type:Z("FRAME_CONNECT_EMAIL_SUCCESS"),payload:pu})).or(G.extend({type:Z("FRAME_CONNECT_EMAIL_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_GET_FARCASTER_URI_SUCCESS"),payload:hu})).or(G.extend({type:Z("FRAME_GET_FARCASTER_URI_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_CONNECT_FARCASTER_SUCCESS"),payload:fu})).or(G.extend({type:Z("FRAME_CONNECT_FARCASTER_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_CONNECT_OTP_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_CONNECT_OTP_SUCCESS")})).or(G.extend({type:Z("FRAME_CONNECT_DEVICE_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_CONNECT_DEVICE_SUCCESS")})).or(G.extend({type:Z("FRAME_CONNECT_SOCIAL_SUCCESS"),payload:wu})).or(G.extend({type:Z("FRAME_CONNECT_SOCIAL_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_GET_USER_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_GET_USER_SUCCESS"),payload:mu})).or(G.extend({type:Z("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),payload:vu})).or(G.extend({type:Z("FRAME_SIGN_OUT_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_SIGN_OUT_SUCCESS")})).or(G.extend({type:Z("FRAME_IS_CONNECTED_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_IS_CONNECTED_SUCCESS"),payload:bu})).or(G.extend({type:Z("FRAME_GET_CHAIN_ID_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_GET_CHAIN_ID_SUCCESS"),payload:xu})).or(G.extend({type:Z("FRAME_RPC_REQUEST_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_RPC_REQUEST_SUCCESS"),payload:_u})).or(G.extend({type:Z("FRAME_SESSION_UPDATE"),payload:Us})).or(G.extend({type:Z("FRAME_UPDATE_EMAIL_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_UPDATE_EMAIL_SUCCESS"),payload:gu})).or(G.extend({type:Z("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(G.extend({type:Z("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:Cu})).or(G.extend({type:Z("FRAME_SYNC_THEME_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_SYNC_THEME_SUCCESS")})).or(G.extend({type:Z("FRAME_SYNC_DAPP_DATA_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(G.extend({type:Z("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:ku})).or(G.extend({type:Z("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:Me})).or(G.extend({type:Z("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:Tu})).or(G.extend({type:Z("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:Me}));const js={set(t,e){jn.isClient&&localStorage.setItem(`${Li.STORAGE_KEY}${t}`,e)},get(t){return jn.isClient?localStorage.getItem(`${Li.STORAGE_KEY}${t}`):null},delete(t,e){jn.isClient&&(e?localStorage.removeItem(t):localStorage.removeItem(`${Li.STORAGE_KEY}${t}`))}},Bs={transactionHash:/^0x(?:[A-Fa-f0-9]{64})$/u,signedMessage:/^0x(?:[a-fA-F0-9]{62,})$/u},lr=30*1e3,jn={checkIfAllowedToTriggerEmail(){const t=js.get(Li.LAST_EMAIL_LOGIN_TIME);if(t){const e=Date.now()-Number(t);if(e<lr){const i=Math.ceil((lr-e)/1e3);throw new Error(`Please try again after ${i} seconds`)}}},getTimeToNextEmailLogin(){const t=js.get(Li.LAST_EMAIL_LOGIN_TIME);if(t){const e=Date.now()-Number(t);if(e<lr)return Math.ceil((lr-e)/1e3)}return 0},checkIfRequestExists(t){return pe.NOT_SAFE_RPC_METHODS.includes(t.method)||pe.SAFE_RPC_METHODS.includes(t.method)},getResponseType(t){return typeof t=="string"&&(t?.match(Bs.transactionHash)||t?.match(Bs.signedMessage))?Li.RPC_RESPONSE_TYPE_TX:Li.RPC_RESPONSE_TYPE_OBJECT},checkIfRequestIsSafe(t){return pe.SAFE_RPC_METHODS.includes(t.method)},isClient:typeof window<"u"},zs=bc,go=Td().console||{},wd={mapHttpRequest:cr,mapHttpResponse:cr,wrapRequestSerializer:xa,wrapResponseSerializer:xa,wrapErrorSerializer:xa,req:cr,res:cr,err:xd};function gd(t,e){return Array.isArray(t)?t.filter(function(o){return o!=="!stdSerializers.err"}):t===!0?Object.keys(e):!1}function gi(t){t=t||{},t.browser=t.browser||{};const e=t.browser.transmit;if(e&&typeof e.send!="function")throw Error("pino: transmit option must have a send function");const i=t.browser.write||go;t.browser.write&&(t.browser.asObject=!0);const o=t.serializers||{},r=gd(t.browser.serialize,o);let n=t.browser.serialize;Array.isArray(t.browser.serialize)&&t.browser.serialize.indexOf("!stdSerializers.err")>-1&&(n=!1);const a=["error","fatal","warn","info","debug","trace"];typeof i=="function"&&(i.error=i.fatal=i.warn=i.info=i.debug=i.trace=i),t.enabled===!1&&(t.level="silent");const s=t.level||"info",S=Object.create(i);S.log||(S.log=mo),Object.defineProperty(S,"levelVal",{get:V}),Object.defineProperty(S,"level",{get:F,set:ee});const I={transmit:e,serialize:r,asObject:t.browser.asObject,levels:a,timestamp:yd(t)};S.levels=gi.levels,S.level=s,S.setMaxListeners=S.getMaxListeners=S.emit=S.addListener=S.on=S.prependListener=S.once=S.prependOnceListener=S.removeListener=S.removeAllListeners=S.listeners=S.listenerCount=S.eventNames=S.write=S.flush=mo,S.serializers=o,S._serialize=r,S._stdErrSerialize=n,S.child=ie,e&&(S._logEvent=Sa());function V(){return this.level==="silent"?1/0:this.levels.values[this.level]}function F(){return this._level}function ee(Q){if(Q!=="silent"&&!this.levels.values[Q])throw Error("unknown level "+Q);this._level=Q,Mn(I,S,"error","log"),Mn(I,S,"fatal","error"),Mn(I,S,"warn","error"),Mn(I,S,"info","log"),Mn(I,S,"debug","log"),Mn(I,S,"trace","log")}function ie(Q,ne){if(!Q)throw new Error("missing bindings for child Pino");ne=ne||{},r&&Q.serializers&&(ne.serializers=Q.serializers);const J=ne.serializers;if(r&&J){var le=Object.assign({},o,J),O=t.browser.serialize===!0?Object.keys(le):r;delete Q.serializers,Zr([Q],O,le,this._stdErrSerialize)}function ye(ue){this._childLevel=(ue._childLevel|0)+1,this.error=Wn(ue,Q,"error"),this.fatal=Wn(ue,Q,"fatal"),this.warn=Wn(ue,Q,"warn"),this.info=Wn(ue,Q,"info"),this.debug=Wn(ue,Q,"debug"),this.trace=Wn(ue,Q,"trace"),le&&(this.serializers=le,this._serialize=O),e&&(this._logEvent=Sa([].concat(ue._logEvent.bindings,Q)))}return ye.prototype=this,new ye(this)}return S}gi.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}};gi.stdSerializers=wd;gi.stdTimeFunctions=Object.assign({},{nullTime:Rl,epochTime:Il,unixTime:Cd,isoTime:kd});function Mn(t,e,i,o){const r=Object.getPrototypeOf(e);e[i]=e.levelVal>e.levels.values[i]?mo:r[i]?r[i]:go[i]||go[o]||mo,md(t,e,i)}function md(t,e,i){!t.transmit&&e[i]===mo||(e[i]=function(o){return function(){const n=t.timestamp(),a=new Array(arguments.length),s=Object.getPrototypeOf&&Object.getPrototypeOf(this)===go?go:this;for(var S=0;S<a.length;S++)a[S]=arguments[S];if(t.serialize&&!t.asObject&&Zr(a,this._serialize,this.serializers,this._stdErrSerialize),t.asObject?o.call(s,vd(this,i,a,n)):o.apply(s,a),t.transmit){const I=t.transmit.level||e.level,V=gi.levels.values[I],F=gi.levels.values[i];if(F<V)return;bd(this,{ts:n,methodLevel:i,methodValue:F,transmitValue:gi.levels.values[t.transmit.level||e.level],send:t.transmit.send,val:e.levelVal},a)}}}(e[i]))}function vd(t,e,i,o){t._serialize&&Zr(i,t._serialize,t.serializers,t._stdErrSerialize);const r=i.slice();let n=r[0];const a={};o&&(a.time=o),a.level=gi.levels.values[e];let s=(t._childLevel|0)+1;if(s<1&&(s=1),n!==null&&typeof n=="object"){for(;s--&&typeof r[0]=="object";)Object.assign(a,r.shift());n=r.length?zs(r.shift(),r):void 0}else typeof n=="string"&&(n=zs(r.shift(),r));return n!==void 0&&(a.msg=n),a}function Zr(t,e,i,o){for(const r in t)if(o&&t[r]instanceof Error)t[r]=gi.stdSerializers.err(t[r]);else if(typeof t[r]=="object"&&!Array.isArray(t[r]))for(const n in t[r])e&&e.indexOf(n)>-1&&n in i&&(t[r][n]=i[n](t[r][n]))}function Wn(t,e,i){return function(){const o=new Array(1+arguments.length);o[0]=e;for(var r=1;r<o.length;r++)o[r]=arguments[r-1];return t[i].apply(this,o)}}function bd(t,e,i){const o=e.send,r=e.ts,n=e.methodLevel,a=e.methodValue,s=e.val,S=t._logEvent.bindings;Zr(i,t._serialize||Object.keys(t.serializers),t.serializers,t._stdErrSerialize===void 0?!0:t._stdErrSerialize),t._logEvent.ts=r,t._logEvent.messages=i.filter(function(I){return S.indexOf(I)===-1}),t._logEvent.level.label=n,t._logEvent.level.value=a,o(n,t._logEvent,s),t._logEvent=Sa(S)}function Sa(t){return{ts:0,messages:[],bindings:t||[],level:{label:"",value:0}}}function xd(t){const e={type:t.constructor.name,msg:t.message,stack:t.stack};for(const i in t)e[i]===void 0&&(e[i]=t[i]);return e}function yd(t){return typeof t.timestamp=="function"?t.timestamp:t.timestamp===!1?Rl:Il}function cr(){return{}}function xa(t){return t}function mo(){}function Rl(){return!1}function Il(){return Date.now()}function Cd(){return Math.round(Date.now()/1e3)}function kd(){return new Date(Date.now()).toISOString()}function Td(){function t(e){return typeof e<"u"&&e}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return t(self)||t(window)||t(this)||{}}}const Se=Ie({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),Be={state:Se,subscribe(t){return Qe(Se,()=>t(Se))},setLastNetworkInView(t){Se.lastNetworkInView=t},async fetchTransactions(t,e){const{projectId:i}=Y.state;if(!i||!t)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");Se.loading=!0;try{const o=await Pe.fetchTransactions({account:t,projectId:i,cursor:Se.next,onramp:e,cache:e==="coinbase"?"no-cache":void 0,chainId:L.state.caipNetwork?.id}),r=this.filterSpamTransactions(o.data),n=this.filterByConnectedChain(r),a=[...Se.transactions,...n];Se.loading=!1,e==="coinbase"?Se.coinbaseTransactions=this.groupTransactionsByYearAndMonth(Se.coinbaseTransactions,o.data):(Se.transactions=a,Se.transactionsByYear=this.groupTransactionsByYearAndMonth(Se.transactionsByYear,n)),Se.empty=a.length===0,Se.next=o.next?o.next:void 0}catch{B.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:i,cursor:Se.next,isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT}}),q.showError("Failed to fetch transactions"),Se.loading=!1,Se.empty=!0,Se.next=void 0}},groupTransactionsByYearAndMonth(t={},e=[]){const i=t;return e.forEach(o=>{const r=new Date(o.metadata.minedAt).getFullYear(),n=new Date(o.metadata.minedAt).getMonth(),a=i[r]??{},S=(a[n]??[]).filter(I=>I.id!==o.id);i[r]={...a,[n]:[...S,o].sort((I,V)=>new Date(V.metadata.minedAt).getTime()-new Date(I.metadata.minedAt).getTime())}}),i},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(o=>o.nft_info?.flags.is_spam===!0))},filterByConnectedChain(t){const e=L.state.caipNetwork?.id;return t.filter(o=>o.metadata.chain===e)},clearCursor(){Se.next=void 0},resetTransactions(){Se.transactions=[],Se.transactionsByYear={},Se.lastNetworkInView=void 0,Se.loading=!1,Se.empty=!1,Se.next=void 0}},it=Ie({wcError:!1,buffering:!1}),oe={state:it,subscribeKey(t,e){return st(it,t,e)},_getClient(t){return P.getConnectionControllerClient(t)},setClient(t){it._client=_t(t)},async connectWalletConnect(){xe.setConnectedConnector("WALLET_CONNECT"),await this._getClient().connectWalletConnect(t=>{it.wcUri=t,it.wcPairingExpiry=M.getPairingExpiry()})},async connectExternal(t,e){await this._getClient(e).connectExternal?.(t),P.setActiveChain(e),xe.setConnectedConnector(t.type)},async reconnectExternal(t){await this._getClient().reconnectExternal?.(t),xe.setConnectedConnector(t.type)},async setPreferredAccountType(t){re.setLoading(!0);const e=H.getAuthConnector();e&&(await e?.provider.setPreferredAccount(t),await this.reconnectExternal(e),re.setLoading(!1),B.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:t,network:L.state.caipNetwork?.id||""}}))},async signMessage(t){return this._getClient().signMessage(t)},parseUnits(t,e){return this._getClient().parseUnits(t,e)},formatUnits(t,e){return this._getClient().formatUnits(t,e)},async sendTransaction(t){return this._getClient().sendTransaction(t)},async estimateGas(t){return this._getClient().estimateGas(t)},async writeContract(t){return this._getClient().writeContract(t)},async getEnsAddress(t){return this._getClient().getEnsAddress(t)},async getEnsAvatar(t){return this._getClient().getEnsAvatar(t)},checkInstalled(t,e){return this._getClient(e).checkInstalled?.(t)||!1},resetWcConnection(){it.wcUri=void 0,it.wcPairingExpiry=void 0,it.wcLinking=void 0,it.recentWallet=void 0,Be.resetTransactions(),xe.deleteWalletConnectDeepLink()},setWcLinking(t){it.wcLinking=t},setWcError(t){it.wcError=t,it.buffering=!1},setRecentWallet(t){it.recentWallet=t},setBuffering(t){it.buffering=t},async disconnect(){const t=this._getClient();try{await t.disconnect(),this.resetWcConnection()}catch{throw new Error("Failed to disconnect")}}},fo={async getTokenList(){const t=L.state.caipNetwork;return(await Pe.fetchSwapTokens({chainId:t?.id,projectId:Y.state.projectId}))?.tokens?.map(o=>({...o,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0}))||[]},async fetchGasPrice(){const t=Y.state.projectId,e=L.state.caipNetwork;if(!e)return null;try{switch(e.chain){case"solana":const i=(await oe.estimateGas({chainNamespace:"solana"})).toString();return{standard:i,fast:i,instant:i};case"evm":default:return await Pe.fetchGasPrice({projectId:t,chainId:e.id})}}catch{return null}},async fetchSwapAllowance({tokenAddress:t,userAddress:e,sourceTokenAmount:i,sourceTokenDecimals:o}){const r=Y.state.projectId,n=await Pe.fetchSwapAllowance({projectId:r,tokenAddress:t,userAddress:e});if(n?.allowance&&i&&o){const a=oe.parseUnits(i,o)||0;return BigInt(n.allowance)>=a}return!1},async getMyTokensWithBalance(t){const e=R.state.address,i=L.state.caipNetwork;if(!e||!i)return[];const r=(await Pe.getBalance(e,i.id,t)).balances.filter(n=>n.quantity.decimals!=="0");return R.setTokenBalance(r,P.state.activeChain),this.mapBalancesToSwapTokens(r)},mapBalancesToSwapTokens(t){return t?.map(e=>({...e,address:e?.address?e.address:L.getActiveNetworkTokenAddress(),decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1}))||[]}},Ee=Ie({view:"Connect",history:["Connect"],transactionStack:[]}),k={state:Ee,subscribeKey(t,e){return st(Ee,t,e)},pushTransactionStack(t){Ee.transactionStack.push(t)},popTransactionStack(t){const e=Ee.transactionStack.pop();e&&(t?(this.goBack(),e?.onCancel?.()):(e.goBack?this.goBack():e.view&&this.reset(e.view),e?.onSuccess?.()))},push(t,e){t!==Ee.view&&(Ee.view=t,Ee.history.push(t),Ee.data=e)},reset(t){Ee.view=t,Ee.history=[t]},replace(t,e){Ee.history.length>=1&&Ee.history.at(-1)!==t&&(Ee.view=t,Ee.history[Ee.history.length-1]=t,Ee.data=e)},goBack(){if(Ee.history.length>1){Ee.history.pop();const[t]=Ee.history.slice(-1);t&&(Ee.view=t)}},goBackToIndex(t){if(Ee.history.length>1){Ee.history=Ee.history.slice(0,t+1);const[e]=Ee.history.slice(-1);e&&(Ee.view=e)}}},fi={getGasPriceInEther(t,e){const i=e*t;return Number(i)/1e18},getGasPriceInUSD(t,e,i){const o=fi.getGasPriceInEther(e,i);return we.bigNumber(t).multipliedBy(o).toNumber()},getPriceImpact({sourceTokenAmount:t,sourceTokenPriceInUSD:e,toTokenPriceInUSD:i,toTokenAmount:o}){const r=we.bigNumber(t).multipliedBy(e),n=we.bigNumber(o).multipliedBy(i);return r.minus(n).dividedBy(r).multipliedBy(100).toNumber()},getMaxSlippage(t,e){const i=we.bigNumber(t).dividedBy(100);return we.multiply(e,i).toNumber()},getProviderFee(t,e=.0085){return we.bigNumber(t).multipliedBy(e).toString()},isInsufficientNetworkTokenForGas(t,e){const i=e||"0";return we.bigNumber(t).isZero()?!0:we.bigNumber(we.bigNumber(i)).isGreaterThan(t)},isInsufficientSourceTokenForSwap(t,e,i){const o=i?.find(n=>n.address===e)?.quantity?.numeric;return we.bigNumber(o||"0").isLessThan(t)},getToTokenAmount({sourceToken:t,toToken:e,sourceTokenPrice:i,toTokenPrice:o,sourceTokenAmount:r}){if(r==="0"||!t||!e)return"0";const n=t.decimals,a=i,s=e.decimals,S=o;if(S<=0)return"0";const I=we.bigNumber(r).multipliedBy(.0085),F=we.bigNumber(r).minus(I).multipliedBy(we.bigNumber(10).pow(n)),ee=we.bigNumber(a).dividedBy(S),ie=n-s;return F.multipliedBy(ee).dividedBy(we.bigNumber(10).pow(ie)).dividedBy(we.bigNumber(10).pow(s)).toFixed(s).toString()}},Vs=15e4,_d=6,nt={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:Te.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},E=Ie(nt),U={state:E,subscribe(t){return Qe(E,()=>t(E))},subscribeKey(t,e){return st(E,t,e)},getParams(){const t=R.state.address,e=L.getActiveNetworkTokenAddress(),i=xe.getConnectedConnector(),o=H.getAuthConnector();if(!t)throw new Error("No address found to swap the tokens from.");const r=R.state.caipAddress,n=!E.toToken?.address||!E.toToken?.decimals,a=!E.sourceToken?.address||!E.sourceToken?.decimals||!we.bigNumber(E.sourceTokenAmount).isGreaterThan(0),s=!E.sourceTokenAmount;return{networkAddress:e,fromAddress:t,fromCaipAddress:R.state.caipAddress,sourceTokenAddress:E.sourceToken?.address,toTokenAddress:E.toToken?.address,toTokenAmount:E.toTokenAmount,toTokenDecimals:E.toToken?.decimals,sourceTokenAmount:E.sourceTokenAmount,sourceTokenDecimals:E.sourceToken?.decimals,invalidToToken:n,invalidSourceToken:a,invalidSourceTokenAmount:s,availableToSwap:r&&!n&&!a&&!s,isAuthConnector:o?.walletFeatures&&i==="AUTH"}},setSourceToken(t){if(!t){E.sourceToken=t,E.sourceTokenAmount="",E.sourceTokenPriceInUSD=0;return}E.sourceToken=t,this.setTokenPrice(t.address,"sourceToken")},setSourceTokenAmount(t){E.sourceTokenAmount=t},setToToken(t){if(!t){E.toToken=t,E.toTokenAmount="",E.toTokenPriceInUSD=0;return}E.toToken=t,this.setTokenPrice(t.address,"toToken")},setToTokenAmount(t){E.toTokenAmount=t?we.formatNumberToLocalString(t,_d):""},async setTokenPrice(t,e){const{availableToSwap:i}=this.getParams();let o=E.tokensPriceMap[t]||0;o||(E.loadingPrices=!0,o=await this.getAddressPrice(t)),e==="sourceToken"?E.sourceTokenPriceInUSD=o:e==="toToken"&&(E.toTokenPriceInUSD=o),E.loadingPrices&&(E.loadingPrices=!1,i&&this.swapTokens())},switchTokens(){if(E.initializing||!E.initialized)return;const t=E.toToken?{...E.toToken}:void 0,e=E.sourceToken?{...E.sourceToken}:void 0,i=t&&E.toTokenAmount===""?"1":E.toTokenAmount;this.setSourceToken(t),this.setToToken(e),this.setSourceTokenAmount(i),this.setToTokenAmount(""),this.swapTokens()},resetState(){E.myTokensWithBalance=nt.myTokensWithBalance,E.tokensPriceMap=nt.tokensPriceMap,E.initialized=nt.initialized,E.sourceToken=nt.sourceToken,E.sourceTokenAmount=nt.sourceTokenAmount,E.sourceTokenPriceInUSD=nt.sourceTokenPriceInUSD,E.toToken=nt.toToken,E.toTokenAmount=nt.toTokenAmount,E.toTokenPriceInUSD=nt.toTokenPriceInUSD,E.networkPrice=nt.networkPrice,E.networkTokenSymbol=nt.networkTokenSymbol,E.networkBalanceInUSD=nt.networkBalanceInUSD,E.inputError=nt.inputError},resetValues(){const{networkAddress:t}=this.getParams(),e=E.tokens?.find(i=>i.address===t);this.setSourceToken(e),this.setToToken(void 0)},getApprovalLoadingState(){return E.loadingApprovalTransaction},clearError(){E.transactionError=void 0},async initializeState(){if(!E.initializing){if(E.initializing=!0,!E.initialized)try{await this.fetchTokens(),E.initialized=!0}catch{E.initialized=!1,q.showError("Failed to initialize swap"),k.goBack()}E.initializing=!1}},async fetchTokens(){const{networkAddress:t}=this.getParams();await this.getTokenList(),await this.getNetworkTokenPrice(),await this.getMyTokensWithBalance();const e=E.tokens?.find(i=>i.address===t);e&&(E.networkTokenSymbol=e.symbol,this.setSourceToken(e),this.setSourceTokenAmount("1"))},async getTokenList(){const t=await fo.getTokenList();E.tokens=t,E.popularTokens=t.sort((e,i)=>e.symbol<i.symbol?-1:e.symbol>i.symbol?1:0),E.suggestedTokens=t.filter(e=>!!Te.SWAP_SUGGESTED_TOKENS.includes(e.symbol),{})},async getAddressPrice(t){const e=E.tokensPriceMap[t];if(e)return e;const o=(await Pe.fetchTokenPrice({projectId:Y.state.projectId,addresses:[t]})).fungibles||[],n=[...E.tokens||[],...E.myTokensWithBalance||[]]?.find(S=>S.address===t)?.symbol,a=o.find(S=>S.symbol.toLowerCase()===n?.toLowerCase())?.price||0,s=parseFloat(a.toString());return E.tokensPriceMap[t]=s,s},async getNetworkTokenPrice(){const{networkAddress:t}=this.getParams(),i=(await Pe.fetchTokenPrice({projectId:Y.state.projectId,addresses:[t]}).catch(()=>(q.showError("Failed to fetch network token price"),{fungibles:[]}))).fungibles?.[0],o=i?.price.toString()||"0";E.tokensPriceMap[t]=parseFloat(o),E.networkTokenSymbol=i?.symbol||"",E.networkPrice=o},async getMyTokensWithBalance(t){const e=await fo.getMyTokensWithBalance(t);e&&(await this.getInitialGasPrice(),this.setBalances(e))},setBalances(t){const{networkAddress:e}=this.getParams(),i=L.state.caipNetwork;if(!i)return;const o=t.find(r=>r.address===e);t.forEach(r=>{E.tokensPriceMap[r.address]=r.price||0}),E.myTokensWithBalance=t.filter(r=>r.address.startsWith(i.id)),E.networkBalanceInUSD=o?we.multiply(o.quantity.numeric,o.price).toString():"0"},async getInitialGasPrice(){const t=await fo.fetchGasPrice();if(!t)return{gasPrice:null,gasPriceInUSD:null};switch(L.state.caipNetwork?.chain){case"solana":return E.gasFee=t.standard,E.gasPriceInUSD=we.multiply(t.standard,E.networkPrice).dividedBy(1e9).toNumber(),{gasPrice:BigInt(E.gasFee),gasPriceInUSD:Number(E.gasPriceInUSD)};case"evm":default:const e=t.standard,i=BigInt(e),o=BigInt(Vs),r=fi.getGasPriceInUSD(E.networkPrice,o,i);return E.gasFee=e,E.gasPriceInUSD=r,{gasPrice:i,gasPriceInUSD:r}}},async swapTokens(){const t=R.state.address,e=E.sourceToken,i=E.toToken,o=we.bigNumber(E.sourceTokenAmount).isGreaterThan(0);if(!i||!e||E.loadingPrices||!o)return;E.loadingQuote=!0;const r=we.bigNumber(E.sourceTokenAmount).multipliedBy(10**e.decimals),n=await Pe.fetchSwapQuote({userAddress:t,projectId:Y.state.projectId,from:e.address,to:i.address,gasPrice:E.gasFee,amount:r.toString()});E.loadingQuote=!1;const a=n?.quotes?.[0]?.toAmount;if(!a)return;const s=we.bigNumber(a).dividedBy(10**i.decimals).toString();this.setToTokenAmount(s),this.hasInsufficientToken(E.sourceTokenAmount,e.address)?E.inputError="Insufficient balance":(E.inputError=void 0,this.setTransactionDetails())},async getTransaction(){const{fromCaipAddress:t,availableToSwap:e}=this.getParams(),i=E.sourceToken,o=E.toToken;if(!(!t||!e||!i||!o||E.loadingQuote))try{E.loadingBuildTransaction=!0;const r=await fo.fetchSwapAllowance({userAddress:t,tokenAddress:i.address,sourceTokenAmount:E.sourceTokenAmount,sourceTokenDecimals:i.decimals});let n;return r?n=await this.createSwapTransaction():n=await this.createAllowanceTransaction(),E.loadingBuildTransaction=!1,E.fetchError=!1,n}catch{k.goBack(),q.showError("Failed to check allowance"),E.loadingBuildTransaction=!1,E.approvalTransaction=void 0,E.swapTransaction=void 0,E.fetchError=!0;return}},async createAllowanceTransaction(){const{fromCaipAddress:t,fromAddress:e,sourceTokenAddress:i,toTokenAddress:o}=this.getParams();if(!(!t||!o)){if(!i)throw new Error("createAllowanceTransaction - No source token address found.");try{const r=await Pe.generateApproveCalldata({projectId:Y.state.projectId,from:i,to:o,userAddress:t}),n=await oe.estimateGas({address:e,to:M.getPlainAddress(r.tx.to),data:r.tx.data}),a={data:r.tx.data,to:M.getPlainAddress(r.tx.from),gas:n,gasPrice:BigInt(r.tx.eip155.gasPrice),value:BigInt(r.tx.value),toAmount:E.toTokenAmount};return E.swapTransaction=void 0,E.approvalTransaction=a,a}catch{k.goBack(),q.showError("Failed to create approval transaction"),E.approvalTransaction=void 0,E.swapTransaction=void 0,E.fetchError=!0;return}}},async createSwapTransaction(){const{networkAddress:t,fromCaipAddress:e,sourceTokenAmount:i}=this.getParams(),o=E.sourceToken,r=E.toToken;if(!e||!i||!o||!r)return;const n=oe.parseUnits(i,o.decimals).toString();try{const a=await Pe.generateSwapCalldata({projectId:Y.state.projectId,userAddress:e,from:o.address,to:r.address,amount:n}),s=o.address===t,S=BigInt(a.tx.eip155.gas),I=BigInt(a.tx.eip155.gasPrice),V={data:a.tx.data,to:M.getPlainAddress(a.tx.to),gas:S,gasPrice:I,value:BigInt(s?n:"0"),toAmount:E.toTokenAmount};return E.gasPriceInUSD=fi.getGasPriceInUSD(E.networkPrice,S,I),E.approvalTransaction=void 0,E.swapTransaction=V,V}catch{k.goBack(),q.showError("Failed to create transaction"),E.approvalTransaction=void 0,E.swapTransaction=void 0,E.fetchError=!0;return}},async sendTransactionForApproval(t){const{fromAddress:e,isAuthConnector:i}=this.getParams();E.loadingApprovalTransaction=!0;const o="Approve limit increase in your wallet";i?k.pushTransactionStack({view:null,goBack:!0,onSuccess(){q.showLoading(o)}}):q.showLoading(o);try{await oe.sendTransaction({address:e,to:t.to,data:t.data,value:BigInt(t.value),gasPrice:BigInt(t.gasPrice)}),await this.swapTokens(),await this.getTransaction(),E.approvalTransaction=void 0,E.loadingApprovalTransaction=!1}catch(r){const n=r;E.transactionError=n?.shortMessage,E.loadingApprovalTransaction=!1,q.showError(n?.shortMessage||"Transaction error")}},async sendTransactionForSwap(t){if(!t)return;const{fromAddress:e,toTokenAmount:i,isAuthConnector:o}=this.getParams();E.loadingTransaction=!0;const r=`Swapping ${E.sourceToken?.symbol} to ${we.formatNumberToLocalString(i,3)} ${E.toToken?.symbol}`,n=`Swapped ${E.sourceToken?.symbol} to ${we.formatNumberToLocalString(i,3)} ${E.toToken?.symbol}`;o?k.pushTransactionStack({view:"Account",goBack:!1,onSuccess(){q.showLoading(r),U.resetState()}}):q.showLoading("Confirm transaction in your wallet");try{const a=[E.sourceToken?.address,E.toToken?.address].join(","),s=await oe.sendTransaction({address:e,to:t.to,data:t.data,gas:t.gas,gasPrice:BigInt(t.gasPrice),value:t.value});return E.loadingTransaction=!1,q.showSuccess(n),B.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:L.state.caipNetwork?.id||"",swapFromToken:this.state.sourceToken?.symbol||"",swapToToken:this.state.toToken?.symbol||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT}}),U.resetState(),o||k.replace("Account"),U.getMyTokensWithBalance(a),s}catch(a){const s=a;E.transactionError=s?.shortMessage,E.loadingTransaction=!1,q.showError(s?.shortMessage||"Transaction error"),B.sendEvent({type:"track",event:"SWAP_ERROR",properties:{network:L.state.caipNetwork?.id||"",swapFromToken:this.state.sourceToken?.symbol||"",swapToToken:this.state.toToken?.symbol||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken(t,e){const i=fi.isInsufficientSourceTokenForSwap(t,e,E.myTokensWithBalance);return fi.isInsufficientNetworkTokenForGas(E.networkBalanceInUSD,E.gasPriceInUSD)||i},setTransactionDetails(){const{toTokenAddress:t,toTokenDecimals:e}=this.getParams();!t||!e||(E.gasPriceInUSD=fi.getGasPriceInUSD(E.networkPrice,BigInt(E.gasFee),BigInt(Vs)),E.priceImpact=fi.getPriceImpact({sourceTokenAmount:E.sourceTokenAmount,sourceTokenPriceInUSD:E.sourceTokenPriceInUSD,toTokenPriceInUSD:E.toTokenPriceInUSD,toTokenAmount:E.toTokenAmount}),E.maxSlippage=fi.getMaxSlippage(E.slippage,E.toTokenAmount),E.providerFee=fi.getProviderFee(E.sourceTokenAmount))}},Fs=Ie({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),R={state:Fs,replaceState(t){t&&Object.assign(Fs,_t(t))},subscribe(t){return P.subscribeChainProp("accountState",e=>{if(e)return t(e)})},subscribeKey(t,e){let i;return P.subscribeChainProp("accountState",o=>{if(o){const r=o[t];i!==r&&(i=r,e(r))}})},setIsConnected(t,e){P.setAccountProp("isConnected",t,e)},getChainIsConnected(t){return P.getAccountProp("isConnected",t)},setCaipAddress(t,e){const i=t?M.getPlainAddress(t):void 0;P.setAccountProp("caipAddress",t,e),P.setAccountProp("address",i,e)},setBalance(t,e,i){P.setAccountProp("balance",t,i),P.setAccountProp("balanceSymbol",e,i)},setProfileName(t,e){P.setAccountProp("profileName",t,e)},setProfileImage(t,e){P.setAccountProp("profileImage",t,e)},setAddressExplorerUrl(t,e){P.setAccountProp("addressExplorerUrl",t,e)},setSmartAccountDeployed(t,e){P.setAccountProp("smartAccountDeployed",t,e)},setCurrentTab(t){P.setAccountProp("currentTab",t,P.state.activeChain)},setTokenBalance(t,e){t&&P.setAccountProp("tokenBalance",t,e)},setShouldUpdateToAddress(t,e){P.setAccountProp("shouldUpdateToAddress",t,e)},setAllAccounts(t,e){P.setAccountProp("allAccounts",t,e)},addAddressLabel(t,e,i){const o=P.getAccountProp("addressLabels",i)||new Map;o.set(t,e),P.setAccountProp("addressLabels",o,P.state.activeChain)},removeAddressLabel(t,e){const i=P.getAccountProp("addressLabels",e)||new Map;i.delete(t),P.setAccountProp("addressLabels",i,P.state.activeChain)},setConnectedWalletInfo(t,e){P.setAccountProp("connectedWalletInfo",t,e)},setPreferredAccountType(t,e){P.setAccountProp("preferredAccountType",t,e)},setSocialProvider(t,e){t&&P.setAccountProp("socialProvider",t,e)},setSocialWindow(t,e){t&&P.setAccountProp("socialWindow",_t(t),e)},setFarcasterUrl(t,e){t&&P.setAccountProp("farcasterUrl",t,e)},async fetchTokenBalance(){const t=L.state.caipNetwork?.id,e=L.state.caipNetwork?.chain,i=R.state.address;try{if(i&&t&&e){const o=await Pe.getBalance(i,t),r=o.balances.filter(n=>n.quantity.decimals!=="0");this.setTokenBalance(r,e),U.setBalances(fo.mapBalancesToSwapTokens(o.balances))}}catch{q.showError("Failed to fetch token balance")}},resetAccount(t){P.resetAccount(t)}},qt=Ie({loading:!1,open:!1,shake:!1}),re={state:qt,subscribe(t){return Qe(qt,()=>t(qt))},subscribeKey(t,e){return st(qt,t,e)},async open(t){await K.state.prefetchPromise;const e=R.state.isConnected;t?.view?k.reset(t.view):e?k.reset("Account"):k.reset("Connect"),qt.open=!0,Mi.set({open:!0}),B.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:e}})},close(){const t=R.state.isConnected||!1;qt.open=!1,Mi.set({open:!1}),B.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}})},setLoading(t){qt.loading=t,Mi.set({loading:t})},shake(){qt.shake||(qt.shake=!0,setTimeout(()=>{qt.shake=!1},500))}},wo={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},Ea={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},Sd={providers:Al,selectedProvider:null,error:null,purchaseCurrency:wo,paymentCurrency:Ea,purchaseCurrencies:[wo],paymentCurrencies:[],quotesLoading:!1},Ce=Ie(Sd),ke={state:Ce,subscribe(t){return Qe(Ce,()=>t(Ce))},subscribeKey(t,e){return st(Ce,t,e)},setSelectedProvider(t){if(t&&t.name==="meld"){const e=Vc,i=P.state.activeChain===De.CHAIN.SOLANA?"SOL":"USDC",o=R.state.address??"",r=new URL(t.url);r.searchParams.append("publicKey",e),r.searchParams.append("destinationCurrencyCode",i),r.searchParams.append("walletAddress",o),t.url=r.toString()}Ce.selectedProvider=t},setPurchaseCurrency(t){Ce.purchaseCurrency=t},setPaymentCurrency(t){Ce.paymentCurrency=t},setPurchaseAmount(t){this.state.purchaseAmount=t},setPaymentAmount(t){this.state.paymentAmount=t},async getAvailableCurrencies(){const t=await Pe.getOnrampOptions();Ce.purchaseCurrencies=t.purchaseCurrencies,Ce.paymentCurrencies=t.paymentCurrencies,Ce.paymentCurrency=t.paymentCurrencies[0]||Ea,Ce.purchaseCurrency=t.purchaseCurrencies[0]||wo,await K.fetchCurrencyImages(t.paymentCurrencies.map(e=>e.id)),await K.fetchTokenImages(t.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){Ce.quotesLoading=!0;try{const t=await Pe.getOnrampQuote({purchaseCurrency:Ce.purchaseCurrency,paymentCurrency:Ce.paymentCurrency,amount:Ce.paymentAmount?.toString()||"0",network:Ce.purchaseCurrency?.symbol});return Ce.quotesLoading=!1,Ce.purchaseAmount=Number(t.purchaseAmount.amount),t}catch(t){return Ce.error=t.message,Ce.quotesLoading=!1,null}finally{Ce.quotesLoading=!1}},resetState(){Ce.providers=Al,Ce.selectedProvider=null,Ce.error=null,Ce.purchaseCurrency=wo,Ce.paymentCurrency=Ea,Ce.purchaseCurrencies=[wo],Ce.paymentCurrencies=[],Ce.paymentAmount=void 0,Ce.purchaseAmount=void 0,Ce.quotesLoading=!1}},Ge=Ie({loading:!1}),be={state:Ge,subscribe(t){return Qe(Ge,()=>t(Ge))},subscribeKey(t,e){return st(Ge,t,e)},setToken(t){t&&(Ge.token=_t(t))},setTokenAmount(t){Ge.sendTokenAmount=t},setReceiverAddress(t){Ge.receiverAddress=t},setReceiverProfileImageUrl(t){Ge.receiverProfileImageUrl=t},setReceiverProfileName(t){Ge.receiverProfileName=t},setGasPrice(t){Ge.gasPrice=t},setGasPriceInUsd(t){Ge.gasPriceInUSD=t},setLoading(t){Ge.loading=t},sendToken(){switch(P.state.activeCaipNetwork?.chain){case"evm":this.sendEvmToken();return;case"solana":this.sendSolanaToken();return;default:throw new Error("Unsupported chain")}},sendEvmToken(){this.state.token?.address&&this.state.sendTokenAmount&&this.state.receiverAddress?(B.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token.address,amount:this.state.sendTokenAmount,network:L.state.caipNetwork?.id||""}}),this.sendERC20Token({receiverAddress:this.state.receiverAddress,tokenAddress:this.state.token.address,sendTokenAmount:this.state.sendTokenAmount,decimals:this.state.token.quantity.decimals})):this.state.receiverAddress&&this.state.sendTokenAmount&&this.state.gasPrice&&this.state.token?.quantity.decimals&&(B.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token?.symbol,amount:this.state.sendTokenAmount,network:L.state.caipNetwork?.id||""}}),this.sendNativeToken({receiverAddress:this.state.receiverAddress,sendTokenAmount:this.state.sendTokenAmount,gasPrice:this.state.gasPrice,decimals:this.state.token.quantity.decimals}))},async sendNativeToken(t){k.pushTransactionStack({view:"Account",goBack:!1});const e=t.receiverAddress,i=R.state.address,o=oe.parseUnits(t.sendTokenAmount.toString(),Number(t.decimals)),r="0x";try{await oe.sendTransaction({to:e,address:i,data:r,value:o,gasPrice:t.gasPrice}),q.showSuccess("Transaction started"),B.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token?.symbol||"",amount:t.sendTokenAmount,network:L.state.caipNetwork?.id||""}}),this.resetSend()}catch{B.sendEvent({type:"track",event:"SEND_ERROR",properties:{isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token?.symbol||"",amount:t.sendTokenAmount,network:L.state.caipNetwork?.id||""}}),q.showError("Something went wrong")}},async sendERC20Token(t){k.pushTransactionStack({view:"Account",goBack:!1});const e=oe.parseUnits(t.sendTokenAmount.toString(),Number(t.decimals));try{R.state.address&&t.sendTokenAmount&&t.receiverAddress&&t.tokenAddress&&(await oe.writeContract({fromAddress:R.state.address,tokenAddress:M.getPlainAddress(t.tokenAddress),receiverAddress:t.receiverAddress,tokenAmount:e,method:"transfer",abi:zc}),q.showSuccess("Transaction started"),this.resetSend())}catch{q.showError("Something went wrong")}},sendSolanaToken(){if(!this.state.sendTokenAmount||!this.state.receiverAddress){q.showError("Please enter a valid amount and receiver address");return}k.pushTransactionStack({view:"Account",goBack:!1}),oe.sendTransaction({chainNamespace:"solana",to:this.state.receiverAddress,value:this.state.sendTokenAmount}).then(()=>{this.resetSend(),R.fetchTokenBalance()}).catch(t=>{q.showError("Failed to send transaction. Please try again.")})},resetSend(){Ge.token=void 0,Ge.sendTokenAmount=void 0,Ge.receiverAddress=void 0,Ge.receiverProfileImageUrl=void 0,Ge.receiverProfileName=void 0,Ge.loading=!1}},Lt=Ie({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),ct={state:Lt,subscribe(t){return Qe(Lt,()=>t(Lt))},subscribeKey(t,e){return st(Lt,t,e)},showTooltip({message:t,triggerRect:e,variant:i}){Lt.open=!0,Lt.message=t,Lt.triggerRect=e,Lt.variant=i},hide(){Lt.open=!1,Lt.message="",Lt.triggerRect={width:0,height:0,top:0,left:0}}},Hs=2147483648,Ed={convertEVMChainIdToCoinType(t){if(t>=Hs)throw new Error("Invalid chainId");return(Hs|t)>>>0}},Ct=Ie({suggestions:[],loading:!1}),Pi={state:Ct,subscribe(t){return Qe(Ct,()=>t(Ct))},subscribeKey(t,e){return st(Ct,t,e)},async resolveName(t){try{return await Pe.lookupEnsName(t)}catch(e){const i=e;throw new Error(i?.reasons?.[0]?.description||"Error resolving name")}},async isNameRegistered(t){try{return await Pe.lookupEnsName(t),!0}catch{return!1}},async getSuggestions(t){try{Ct.loading=!0,Ct.suggestions=[];const e=await Pe.getEnsNameSuggestions(t);return Ct.suggestions=e.suggestions.map(i=>({...i,name:i.name.replace(De.WC_NAME_SUFFIX,"")}))||[],Ct.suggestions}catch(e){const i=this.parseEnsApiError(e,"Error fetching name suggestions");throw new Error(i)}finally{Ct.loading=!1}},async getNamesForAddress(t){try{return L.state.caipNetwork?await Pe.reverseLookupEnsName({address:t}):[]}catch(e){const i=this.parseEnsApiError(e,"Error fetching names for address");throw new Error(i)}},async registerName(t){const e=L.state.caipNetwork;if(!e)throw new Error("Network not found");const i=R.state.address,o=H.getAuthConnector();if(!i||!o)throw new Error("Address or auth connector not found");Ct.loading=!0;try{const r=JSON.stringify({name:`${t}${De.WC_NAME_SUFFIX}`,attributes:{},timestamp:Math.floor(Date.now()/1e3)});k.pushTransactionStack({view:"RegisterAccountNameSuccess",goBack:!1,replace:!0,onCancel(){Ct.loading=!1}});const n=await oe.signMessage(r),a=Sl.caipNetworkIdToNumber(e.id);if(!a)throw new Error("Network not found");const s=Ed.convertEVMChainIdToCoinType(a);await Pe.registerEnsName({coinType:s,address:i,signature:n,message:r}),R.setProfileName(`${t}${De.WC_NAME_SUFFIX}`,P.state.activeChain),k.replace("RegisterAccountNameSuccess")}catch(r){const n=this.parseEnsApiError(r,`Error registering name ${t}`);throw k.replace("RegisterAccountName"),new Error(n)}finally{Ct.loading=!1}},validateName(t){return/^[a-zA-Z0-9-]{4,}$/u.test(t)},parseEnsApiError(t,e){return t?.reasons?.[0]?.description||e}},Ad={evm:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ge={async fetchWalletImage(t){if(t)return await K._fetchWalletImage(t),this.getWalletImageById(t)},getWalletImageById(t){if(t)return Re.state.walletImages[t]},getWalletImage(t){if(t?.image_url)return t?.image_url;if(t?.image_id)return Re.state.walletImages[t.image_id]},getNetworkImage(t){if(t?.imageUrl)return t?.imageUrl;if(t?.imageId)return Re.state.networkImages[t.imageId]},getNetworkImageById(t){if(t)return Re.state.networkImages[t]},getConnectorImage(t){if(t?.imageUrl)return t.imageUrl;if(t?.imageId)return Re.state.connectorImages[t.imageId]},getChainImage(t){return Re.state.networkImages[Ad[t]]}},Aa={goBackOrCloseModal(){k.state.history.length>1?k.goBack():re.close()},navigateAfterNetworkSwitch(){const{history:t}=k.state,e=t.findIndex(i=>i==="Networks");e>=1?k.goBackToIndex(e-1):re.close()},navigateAfterPreferredAccountTypeSelect(){const{isSiweEnabled:t}=Y.state;t&&P.state.activeChain===De.CHAIN.EVM?k.push("ConnectingSiwe"):k.push("Account")}};N`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`;N`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;const z=$`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,se=$`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Gr=$`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function $d(t,e){const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(r){customElements.get(t)||customElements.define(t,r)}}}function Rd(t,e){return customElements.get(t)||customElements.define(t,e),e}function C(t){return function(i){return typeof i=="function"?Rd(t,i):$d(t,i)}}const Id=$`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var Od=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let $a=class extends T{render(){return l`<slot></slot>`}};$a.styles=[z,Id];$a=Od([C("wui-card")],$a);const Nd=$`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,Pd=N`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`,Dd=N`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,Ld=N`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,Md=N`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,Wd=N`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Ud=N`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,jd=N`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Bd=N`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,zd=N`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Vd=N`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,Fd=N`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,Hd=N`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,Zd=N`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`,Gd=N`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="#26D962"/>
</svg>
`,qd=N`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Yd=N`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,Kd=N`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,Xd=N`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Qd=N`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,Jd=N`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`,e0=N`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,t0=N`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,i0=N`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,n0=N`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,o0=N` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,r0=N`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,a0=N`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,s0=N`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,l0=N`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,c0=N`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,u0=N`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,d0=N`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,p0=N`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,h0=N`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,f0=N`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,w0=N`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,g0=N`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,m0=N`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,v0=N`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`,b0=N`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,x0=N`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,y0=N`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,C0=N`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`,k0=N`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,T0=N`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,_0=N`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,S0=N` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,E0=N`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,A0=N`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,$0=N`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,R0=N`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,I0=N`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,O0=N`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,N0=N`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,P0=N`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,D0=N`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,L0=N`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,M0=N`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,W0=N`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,U0=N`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`,j0=N`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,B0=N`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,z0=N`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,V0=N`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,F0=N`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,H0=N`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,Z0=N`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,G0=N`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,q0=N`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`,Y0=N`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`,Zs=N`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var qr=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const K0={add:Pd,allWallets:Dd,arrowBottomCircle:Ld,appStore:Md,apple:Wd,arrowBottom:Ud,arrowLeft:jd,arrowRight:Bd,arrowTop:zd,bank:Vd,browser:Fd,card:Hd,checkmark:Gd,checkmarkBold:Zd,chevronBottom:qd,chevronLeft:Yd,chevronRight:Kd,chevronTop:Xd,chromeStore:Qd,clock:Jd,close:e0,compass:i0,coinPlaceholder:t0,copy:n0,cursor:o0,cursorTransparent:r0,desktop:a0,disconnect:s0,discord:l0,etherscan:c0,extension:u0,externalLink:d0,facebook:p0,farcaster:h0,filters:f0,github:w0,google:g0,helpCircle:m0,image:v0,id:Y0,infoCircle:b0,lightbulb:q0,mail:x0,mobile:y0,more:C0,networkPlaceholder:k0,nftPlaceholder:T0,off:_0,playStore:S0,plus:E0,qrCode:A0,recycleHorizontal:$0,refresh:R0,search:I0,send:O0,swapHorizontal:N0,swapHorizontalMedium:D0,swapHorizontalBold:P0,swapHorizontalRoundedBold:L0,swapVertical:M0,telegram:W0,threeDots:U0,twitch:j0,twitter:Zs,twitterIcon:B0,verify:z0,verifyFilled:V0,wallet:H0,walletConnect:Z0,walletPlaceholder:F0,warningCircle:G0,x:Zs};let Bn=class extends T{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,l`${K0[this.name]}`}};Bn.styles=[z,Gr,Nd];qr([c()],Bn.prototype,"size",void 0);qr([c()],Bn.prototype,"name",void 0);qr([c()],Bn.prototype,"color",void 0);Bn=qr([C("wui-icon")],Bn);const X0=$`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Yr=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let zn=class extends T{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,l`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};zn.styles=[z,Gr,X0];Yr([c()],zn.prototype,"src",void 0);Yr([c()],zn.prototype,"alt",void 0);Yr([c()],zn.prototype,"size",void 0);zn=Yr([C("wui-image")],zn);const Q0=$`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var J0=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ra=class extends T{render(){return l`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Ra.styles=[z,Q0];Ra=J0([C("wui-loading-hexagon")],Ra);const e1=$`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var os=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let vo=class extends T{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,l`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};vo.styles=[z,e1];os([c()],vo.prototype,"color",void 0);os([c()],vo.prototype,"size",void 0);vo=os([C("wui-loading-spinner")],vo);const t1=$`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Ol=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let wr=class extends T{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,o=36-e,r=116+o,n=245+o,a=360+o*1.75;return l`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${r} ${n}"
          stroke-dashoffset=${a}
        />
      </svg>
    `}};wr.styles=[z,t1];Ol([c({type:Number})],wr.prototype,"radius",void 0);wr=Ol([C("wui-loading-thumbnail")],wr);const i1=$`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var jo=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let on=class extends T{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,l`<slot></slot>`}};on.styles=[i1];jo([c()],on.prototype,"width",void 0);jo([c()],on.prototype,"height",void 0);jo([c()],on.prototype,"borderRadius",void 0);jo([c()],on.prototype,"variant",void 0);on=jo([C("wui-shimmer")],on);const n1=$`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var Bo=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let rn=class extends T{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,l`<slot class=${xl(e)}></slot>`}};rn.styles=[z,n1];Bo([c()],rn.prototype,"variant",void 0);Bo([c()],rn.prototype,"color",void 0);Bo([c()],rn.prototype,"align",void 0);Bo([c()],rn.prototype,"lineClamp",void 0);rn=Bo([C("wui-text")],rn);const o1=N`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,r1=N`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,a1=N`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,s1=N`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,l1=N`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,c1=N`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,u1=N`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,d1=N`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,p1=N`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,h1=N`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,f1=N`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,w1=N`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,g1=N`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,m1=N`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,v1=N`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,b1=N`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,x1=N`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,y1=N`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,C1=N`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,k1=N`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,T1=N`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,_1=N`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`,S1=$`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var rs=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const E1={browser:o1,dao:r1,defi:a1,defiAlt:s1,eth:l1,layers:c1,lock:u1,login:d1,network:p1,nft:h1,noun:f1,profile:w1,system:g1,coinbase:m1,meld:_1,onrampCard:y1,moonpay:v1,stripe:b1,paypal:x1,google:C1,pencil:k1,lightbulb:T1};let bo=class extends T{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,l`${E1[this.name]}`}};bo.styles=[z,S1];rs([c()],bo.prototype,"name",void 0);rs([c()],bo.prototype,"size",void 0);bo=rs([C("wui-visual")],bo);const X={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:i,truncate:o}){return t.length<=e+i?t:o==="end"?`${t.substring(0,e)}...`:o==="start"?`...${t.substring(t.length-i)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(i))}`},generateAvatarColors(t){const i=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),o=this.hexToRgb(i),r=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),a=100-3*Number(r?.replace("px","")),s=`${a}% ${a}% at 65% 40%`,S=[];for(let I=0;I<5;I+=1){const V=this.tintColor(o,.15*I);S.push(`rgb(${V[0]}, ${V[1]}, ${V[2]})`)}return`
    --local-color-1: ${S[0]};
    --local-color-2: ${S[1]};
    --local-color-3: ${S[2]};
    --local-color-4: ${S[3]};
    --local-color-5: ${S[4]};
    --local-radial-circle: ${s}
   `},hexToRgb(t){const e=parseInt(t,16),i=e>>16&255,o=e>>8&255,r=e&255;return[i,o,r]},tintColor(t,e){const[i,o,r]=t,n=Math.round(i+(255-i)*e),a=Math.round(o+(255-o)*e),s=Math.round(r+(255-r)*e);return[n,a,s]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,i){return t.toString().length>=e?Number(t).toFixed(i):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}},A1=$`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var wt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Je=class extends T{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&X.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&X.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&X.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&X.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&X.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&X.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&X.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&X.getSpacingStyles(this.margin,3)};
    `,l`<slot></slot>`}};Je.styles=[z,A1];wt([c()],Je.prototype,"flexDirection",void 0);wt([c()],Je.prototype,"flexWrap",void 0);wt([c()],Je.prototype,"flexBasis",void 0);wt([c()],Je.prototype,"flexGrow",void 0);wt([c()],Je.prototype,"flexShrink",void 0);wt([c()],Je.prototype,"alignItems",void 0);wt([c()],Je.prototype,"justifyContent",void 0);wt([c()],Je.prototype,"columnGap",void 0);wt([c()],Je.prototype,"rowGap",void 0);wt([c()],Je.prototype,"gap",void 0);wt([c()],Je.prototype,"padding",void 0);wt([c()],Je.prototype,"margin",void 0);Je=wt([C("wui-flex")],Je);const $1=$`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var zo=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let an=class extends T{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `,l`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",l`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=X.generateAvatarColors(this.address);return this.style.cssText+=`
 ${e}`,null}return this.dataset.variant="default",null}};an.styles=[z,$1];zo([c()],an.prototype,"imageSrc",void 0);zo([c()],an.prototype,"alt",void 0);zo([c()],an.prototype,"address",void 0);zo([c()],an.prototype,"size",void 0);an=zo([C("wui-avatar")],an);const R1=$`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var $i=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Mt=class extends T{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,i=this.size==="lg",o=this.size==="xl",r=i?"12%":"16%",n=i?"xxs":o?"s":"3xl",a=this.background==="gray",s=this.background==="opaque",S=this.backgroundColor==="accent-100"&&s||this.backgroundColor==="success-100"&&s||this.backgroundColor==="error-100"&&s||this.backgroundColor==="inverse-100"&&s;let I=`var(--wui-color-${this.backgroundColor})`;return S?I=`var(--wui-icon-box-bg-${this.backgroundColor})`:a&&(I=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${I};
       --local-bg-mix: ${S||a?"100%":r};
       --local-border-radius: var(--wui-border-radius-${n});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,l` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Mt.styles=[z,se,R1];$i([c()],Mt.prototype,"size",void 0);$i([c()],Mt.prototype,"backgroundColor",void 0);$i([c()],Mt.prototype,"iconColor",void 0);$i([c()],Mt.prototype,"iconSize",void 0);$i([c()],Mt.prototype,"background",void 0);$i([c({type:Boolean})],Mt.prototype,"border",void 0);$i([c()],Mt.prototype,"borderColor",void 0);$i([c()],Mt.prototype,"icon",void 0);Mt=$i([C("wui-icon-box")],Mt);const I1=$`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var oi=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let St=class extends T{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return l`
      <button
        ?disabled=${this.disabled}
        class=${j(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?X.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return l` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?l`<wui-image src=${this.networkSrc}></wui-image>`:l`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return l`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};St.styles=[z,se,I1];oi([c()],St.prototype,"networkSrc",void 0);oi([c()],St.prototype,"avatarSrc",void 0);oi([c()],St.prototype,"balance",void 0);oi([c({type:Boolean})],St.prototype,"isUnsupportedChain",void 0);oi([c({type:Boolean})],St.prototype,"disabled",void 0);oi([c()],St.prototype,"address",void 0);oi([c()],St.prototype,"profileName",void 0);oi([c()],St.prototype,"charsStart",void 0);oi([c()],St.prototype,"charsEnd",void 0);St=oi([C("wui-account-button")],St);const O1=$`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var Tn=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let mi=class extends T{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),l`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?l`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:l`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};mi.styles=[z,O1];Tn([c()],mi.prototype,"size",void 0);Tn([c()],mi.prototype,"name",void 0);Tn([c()],mi.prototype,"imageSrc",void 0);Tn([c()],mi.prototype,"walletIcon",void 0);Tn([c({type:Boolean})],mi.prototype,"installed",void 0);Tn([c()],mi.prototype,"badgeSize",void 0);mi=Tn([C("wui-wallet-image")],mi);const N1=$`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Nl=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const ya=4;let gr=class extends T{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<ya;return l`${this.walletImages.slice(0,ya).map(({src:i,walletName:o})=>l`
            <wui-wallet-image
              size="inherit"
              imageSrc=${i}
              name=${j(o)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(ya-this.walletImages.length)].map(()=>l` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};gr.styles=[z,N1];Nl([c({type:Array})],gr.prototype,"walletImages",void 0);gr=Nl([C("wui-all-wallets-image")],gr);const P1=$`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var ri=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const Gs={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},D1={lg:"paragraph-600",md:"small-600"},L1={lg:"md",md:"md"};let Et=class extends T{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const e=this.textVariant??D1[this.size];return l`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=L1[this.size],i=this.disabled?Gs.disabled:Gs[this.variant];return l`<wui-loading-spinner color=${i} size=${e}></wui-loading-spinner>`}return l``}};Et.styles=[z,se,P1];ri([c()],Et.prototype,"size",void 0);ri([c({type:Boolean})],Et.prototype,"disabled",void 0);ri([c({type:Boolean})],Et.prototype,"fullWidth",void 0);ri([c({type:Boolean})],Et.prototype,"loading",void 0);ri([c()],Et.prototype,"variant",void 0);ri([c({type:Boolean})],Et.prototype,"hasIconLeft",void 0);ri([c({type:Boolean})],Et.prototype,"hasIconRight",void 0);ri([c()],Et.prototype,"borderRadius",void 0);ri([c()],Et.prototype,"textVariant",void 0);Et=ri([C("wui-button")],Et);const Pl=N`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,M1=$`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }
`;var Dl=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let mr=class extends T{constructor(){super(...arguments),this.type="wallet"}render(){return l`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?l` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Pl}`:l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};mr.styles=[z,se,M1];Dl([c()],mr.prototype,"type",void 0);mr=Dl([C("wui-card-select-loader")],mr);const W1=N`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,U1=N`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,j1=$`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var _n=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let vi=class extends T{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:W1,md:Pl,lg:U1},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--wui-spacing-3xl);
      --local-height: var(--wui-spacing-3xl);
      --local-icon-size: var(--wui-spacing-l);
    `):this.style.cssText=`

      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,l`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:l`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};vi.styles=[z,j1];_n([c()],vi.prototype,"size",void 0);_n([c()],vi.prototype,"name",void 0);_n([c({type:Object})],vi.prototype,"networkImagesBySize",void 0);_n([c()],vi.prototype,"imageSrc",void 0);_n([c({type:Boolean})],vi.prototype,"selected",void 0);_n([c({type:Boolean})],vi.prototype,"round",void 0);vi=_n([C("wui-network-image")],vi);const B1=$`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`;var Sn=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let bi=class extends T{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return l`
      <button data-selected=${j(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?l`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${j(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:l`
      <wui-wallet-image
        size="md"
        imageSrc=${j(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};bi.styles=[z,se,B1];Sn([c()],bi.prototype,"name",void 0);Sn([c()],bi.prototype,"type",void 0);Sn([c()],bi.prototype,"imageSrc",void 0);Sn([c({type:Boolean})],bi.prototype,"disabled",void 0);Sn([c({type:Boolean})],bi.prototype,"selected",void 0);Sn([c({type:Boolean})],bi.prototype,"installed",void 0);bi=Sn([C("wui-card-select")],bi);const z1=$`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var En=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let xi=class extends T{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const i=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return l`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${i} color="inherit">
          ${this.title?this.title:X.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:null}};xi.styles=[z,se,z1];En([c()],xi.prototype,"variant",void 0);En([c()],xi.prototype,"imageSrc",void 0);En([c({type:Boolean})],xi.prototype,"disabled",void 0);En([c()],xi.prototype,"icon",void 0);En([c()],xi.prototype,"href",void 0);En([c()],xi.prototype,"text",void 0);xi=En([C("wui-chip")],xi);const V1=$`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var as=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let xo=class extends T{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return l`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?l`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};xo.styles=[z,se,V1];as([c()],xo.prototype,"size",void 0);as([c({type:Boolean})],xo.prototype,"loading",void 0);xo=as([C("wui-connect-button")],xo);const F1=$`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Kr=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Vn=class extends T{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return l`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Vn.styles=[z,se,F1];Kr([c({type:Boolean})],Vn.prototype,"disabled",void 0);Kr([c()],Vn.prototype,"label",void 0);Kr([c()],Vn.prototype,"buttonLabel",void 0);Vn=Kr([C("wui-cta-button")],Vn);const H1=$`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;var Z1=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ia=class extends T{render(){return l`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};Ia.styles=[z,se,H1];Ia=Z1([C("wui-details-group")],Ia);const G1=$`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`;var Ll=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let vr=class extends T{constructor(){super(...arguments),this.name=""}render(){return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};vr.styles=[z,se,G1];Ll([c()],vr.prototype,"name",void 0);vr=Ll([C("wui-details-group-item")],vr);const q1=$`
  :host {
    z-index: calc(var(--w3m-z-index) + 1);
    width: 200px;
    padding: var(--wui-spacing-3xs);
    align-items: center;
    display: inherit;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-fg-base-125);
    /* Dark/Elevation/L */
    box-shadow:
      0px 8px 22px -6px rgba(0, 0, 0, 0.12),
      0px 14px 64px -4px rgba(0, 0, 0, 0.12);
  }
`;var ss=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let yo=class extends T{constructor(){super(...arguments),this.actions=[],this.isOpen=!1}render(){return this.isOpen?l`
      <wui-flex flexDirection="column" gap="4xs">
        ${this.actions.map(e=>l`
            <wui-list-item
              icon=${e.icon}
              iconSize="sm"
              variant="icon"
              @click=${e.onClick}
            >
              <wui-text variant="small-400" color="fg-100">${e.label}</wui-text>
            </wui-list-item>
          `)}
      </wui-flex>
    `:null}};yo.styles=[z,se,q1];ss([c({type:Array})],yo.prototype,"actions",void 0);ss([c({type:Boolean})],yo.prototype,"isOpen",void 0);yo=ss([C("wui-dropdown-menu")],yo);const Y1=$`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Ri=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Wt=class extends T{constructor(){super(...arguments),this.inputElementRef=Wi(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-padding-right-${this.inputRightPadding}`,o={[`wui-size-${this.size}`]:!0,[e]:!!this.inputRightPadding};return l`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${Ui(this.inputElementRef)}
        class=${xl(o)}
        type=${this.type}
        enterkeyhint=${j(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?l`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};Wt.styles=[z,se,Y1];Ri([c()],Wt.prototype,"size",void 0);Ri([c()],Wt.prototype,"icon",void 0);Ri([c({type:Boolean})],Wt.prototype,"disabled",void 0);Ri([c()],Wt.prototype,"placeholder",void 0);Ri([c()],Wt.prototype,"type",void 0);Ri([c()],Wt.prototype,"keyHint",void 0);Ri([c()],Wt.prototype,"value",void 0);Ri([c()],Wt.prototype,"inputRightPadding",void 0);Wt=Ri([C("wui-input-text")],Wt);const K1=$`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Xr=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Fn=class extends T{constructor(){super(...arguments),this.disabled=!1}render(){return l`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?l`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Fn.styles=[z,K1];Xr([c()],Fn.prototype,"errorMessage",void 0);Xr([c({type:Boolean})],Fn.prototype,"disabled",void 0);Xr([c()],Fn.prototype,"value",void 0);Fn=Xr([C("wui-email-input")],Fn);const X1=$`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var Vo=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let sn=class extends T{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return l`
      <wui-input-text
        value=${j(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return l`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${De.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?l`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};sn.styles=[z,X1];Vo([c()],sn.prototype,"errorMessage",void 0);Vo([c({type:Boolean})],sn.prototype,"disabled",void 0);Vo([c()],sn.prototype,"value",void 0);Vo([c({type:Boolean})],sn.prototype,"loading",void 0);sn=Vo([C("wui-ens-input")],sn);const Q1=$`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var Fo=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ln=class extends T{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",i=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${i});
`,l`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};ln.styles=[z,se,Gr,Q1];Fo([c()],ln.prototype,"size",void 0);Fo([c({type:Boolean})],ln.prototype,"disabled",void 0);Fo([c()],ln.prototype,"icon",void 0);Fo([c()],ln.prototype,"iconColor",void 0);ln=Fo([C("wui-icon-link")],ln);const J1=$`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var Ml=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let br=class extends T{constructor(){super(...arguments),this.icon="copy"}render(){return l`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};br.styles=[z,se,J1];Ml([c()],br.prototype,"icon",void 0);br=Ml([C("wui-input-element")],br);const ep=$`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var ls=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Co=class extends T{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return l`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};Co.styles=[z,se,ep];ls([c({type:Boolean})],Co.prototype,"disabled",void 0);ls([c({type:String})],Co.prototype,"value",void 0);Co=ls([C("wui-input-numeric")],Co);const tp=$`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var cs=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ko=class extends T{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return l`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};ko.styles=[z,se,tp];cs([c({type:Boolean})],ko.prototype,"disabled",void 0);cs([c()],ko.prototype,"color",void 0);ko=cs([C("wui-link")],ko);const ip=$`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var ai=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let At=class extends T{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return l`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${j(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return l`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return l`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",i=this.iconVariant==="square-blue"?"mdl":"md",o=this.iconSize?this.iconSize:i;return l`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${o}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${i}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?l`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:l``}chevronTemplate(){return this.chevron?l`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};At.styles=[z,se,ip];ai([c()],At.prototype,"icon",void 0);ai([c()],At.prototype,"iconSize",void 0);ai([c()],At.prototype,"variant",void 0);ai([c()],At.prototype,"iconVariant",void 0);ai([c({type:Boolean})],At.prototype,"disabled",void 0);ai([c()],At.prototype,"imageSrc",void 0);ai([c()],At.prototype,"alt",void 0);ai([c({type:Boolean})],At.prototype,"chevron",void 0);ai([c({type:Boolean})],At.prototype,"loading",void 0);At=ai([C("wui-list-item")],At);var Oa;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(Oa||(Oa={}));const np=$`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var An=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let yi=class extends T{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,i]=this.images,o=e?.type==="NFT",r=i?.url?i.type==="NFT":o,n=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",a=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${n};
    --local-right-border-radius: ${a};
    `,l`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,i]=this.images,o=e?.type;return this.images.length===2&&(e?.url||i?.url)?l`<div class="swap-images-container">
        ${e?.url?l`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${i?.url?l`<wui-image src=${i.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?l`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:o==="NFT"?l`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:l`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",i;return i=this.getIcon(),this.status&&(e=this.getStatusColor()),i?l`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${i}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};yi.styles=[np];An([c()],yi.prototype,"type",void 0);An([c()],yi.prototype,"status",void 0);An([c()],yi.prototype,"direction",void 0);An([c({type:Boolean})],yi.prototype,"onlyDirectionIcon",void 0);An([c({type:Array})],yi.prototype,"images",void 0);An([c({type:Object})],yi.prototype,"secondImage",void 0);yi=An([C("wui-transaction-visual")],yi);const op=$`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var zt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let dt=class extends T{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return l`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${j(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${j(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${Oa[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const e=this.descriptions?.[0];return e?l`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){const e=this.descriptions?.[1];return e?l`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};dt.styles=[z,op];zt([c()],dt.prototype,"type",void 0);zt([c({type:Array})],dt.prototype,"descriptions",void 0);zt([c()],dt.prototype,"date",void 0);zt([c({type:Boolean})],dt.prototype,"onlyDirectionIcon",void 0);zt([c()],dt.prototype,"status",void 0);zt([c()],dt.prototype,"direction",void 0);zt([c({type:Array})],dt.prototype,"images",void 0);zt([c({type:Array})],dt.prototype,"price",void 0);zt([c({type:Array})],dt.prototype,"amount",void 0);zt([c({type:Array})],dt.prototype,"symbol",void 0);dt=zt([C("wui-transaction-list-item")],dt);const rp=$`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var ap=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Na=class extends T{render(){return l`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Na.styles=[z,rp];Na=ap([C("wui-transaction-list-item-loader")],Na);const sp=$`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var us=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let To=class extends T{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e=this.size==="md"?"mini-700":"micro-700";return l`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};To.styles=[z,sp];us([c()],To.prototype,"variant",void 0);us([c()],To.prototype,"size",void 0);To=us([C("wui-tag")],To);const lp=$`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var Vt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let pt=class extends T{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return l`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?l` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?l` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?l`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?l`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?l`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?l`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};pt.styles=[z,se,lp];Vt([c({type:Array})],pt.prototype,"walletImages",void 0);Vt([c()],pt.prototype,"imageSrc",void 0);Vt([c()],pt.prototype,"name",void 0);Vt([c()],pt.prototype,"tagLabel",void 0);Vt([c()],pt.prototype,"tagVariant",void 0);Vt([c()],pt.prototype,"icon",void 0);Vt([c()],pt.prototype,"walletIcon",void 0);Vt([c({type:Boolean})],pt.prototype,"installed",void 0);Vt([c({type:Boolean})],pt.prototype,"disabled",void 0);Vt([c({type:Boolean})],pt.prototype,"showAllWallets",void 0);pt=Vt([C("wui-list-wallet")],pt);const cp=$`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var Wl=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let xr=class extends T{constructor(){super(...arguments),this.logo="google"}render(){return l`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};xr.styles=[z,cp];Wl([c()],xr.prototype,"logo",void 0);xr=Wl([C("wui-logo")],xr);const up=$`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var ds=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let _o=class extends T{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};_o.styles=[z,se,up];ds([c()],_o.prototype,"logo",void 0);ds([c({type:Boolean})],_o.prototype,"disabled",void 0);_o=ds([C("wui-logo-select")],_o);const dp=$`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var Qr=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Hn=class extends T{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return l`
      <button data-testid="w3m-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?l`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:l`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Hn.styles=[z,se,dp];Qr([c()],Hn.prototype,"imageSrc",void 0);Qr([c({type:Boolean})],Hn.prototype,"isUnsupportedChain",void 0);Qr([c({type:Boolean})],Hn.prototype,"disabled",void 0);Hn=Qr([C("wui-network-button")],Hn);const pp=$`
  :host {
    position: relative;
    display: block;
  }
`;var Jr=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Zn=class extends T{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(o=>o!==""),this.handleKeyDown=(e,i)=>{const o=e.target,r=this.getInputElement(o),n=["ArrowLeft","ArrowRight","Shift","Delete"];if(!r)return;n.includes(e.key)&&e.preventDefault();const a=r.selectionStart;switch(e.key){case"ArrowLeft":a&&r.setSelectionRange(a+1,a+1),this.focusInputField("prev",i);break;case"ArrowRight":this.focusInputField("next",i);break;case"Shift":this.focusInputField("next",i);break;case"Delete":r.value===""?this.focusInputField("prev",i):this.updateInput(r,i,"");break;case"Backspace":r.value===""?this.focusInputField("prev",i):this.updateInput(r,i,"");break}},this.focusInputField=(e,i)=>{if(e==="next"){const o=i+1;if(!this.shouldInputBeEnabled(o))return;const r=this.numerics[o<this.length?o:i],n=r?this.getInputElement(r):void 0;n&&(n.disabled=!1,n.focus())}if(e==="prev"){const o=i-1,r=this.numerics[o>-1?o:i],n=r?this.getInputElement(r):void 0;n&&n.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));const e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return l`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,i)=>l`
            <wui-input-numeric
              @input=${o=>this.handleInput(o,i)}
              @click=${o=>this.selectInput(o)}
              @keydown=${o=>this.handleKeyDown(o,i)}
              .disabled=${!this.shouldInputBeEnabled(i)}
              .value=${this.values[i]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,i,o){const r=this.numerics[i],n=e||(r?this.getInputElement(r):void 0);n&&(n.value=o,this.values=this.values.map((a,s)=>s===i?o:a))}selectInput(e){const i=e.target;i&&this.getInputElement(i)?.select()}handleInput(e,i){const o=e.target,r=this.getInputElement(o);if(r){const n=r.value;e.inputType==="insertFromPaste"?this.handlePaste(r,n,i):X.isNumber(n)&&e.data?(this.updateInput(r,i,e.data),this.focusInputField("next",i)):this.updateInput(r,i,"")}this.dispatchInputChangeEvent()}handlePaste(e,i,o){const r=i[0];if(r&&X.isNumber(r)){this.updateInput(e,o,r);const a=i.substring(1);if(o+1<this.length&&a.length){const s=this.numerics[o+1],S=s?this.getInputElement(s):void 0;S&&this.handlePaste(S,a,o+1)}else this.focusInputField("next",o)}else this.updateInput(e,o,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};Zn.styles=[z,pp];Jr([c({type:Number})],Zn.prototype,"length",void 0);Jr([c({type:String})],Zn.prototype,"otp",void 0);Jr([f()],Zn.prototype,"values",void 0);Zn=Jr([C("wui-otp")],Zn);const hp=.1,qs=2.5,hi=7;function Ca(t,e,i){return t===e?!1:(t-e<0?e-t:t-e)<=i+hp}function fp(t,e){const i=Array.prototype.slice.call(xc.create(t,{errorCorrectionLevel:e}).modules.data,0),o=Math.sqrt(i.length);return i.reduce((r,n,a)=>(a%o===0?r.push([n]):r[r.length-1].push(n))&&r,[])}const wp={generate(t,e,i){const o="#141414",r="transparent",a=[],s=fp(t,"Q"),S=e/s.length,I=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];I.forEach(({x:ne,y:J})=>{const le=(s.length-hi)*S*ne,O=(s.length-hi)*S*J,ye=.45;for(let ue=0;ue<I.length;ue+=1){const ve=S*(hi-ue*2);a.push(N`
            <rect
              fill=${ue===2?o:r}
              width=${ue===0?ve-5:ve}
              rx= ${ue===0?(ve-5)*ye:ve*ye}
              ry= ${ue===0?(ve-5)*ye:ve*ye}
              stroke=${o}
              stroke-width=${ue===0?5:0}
              height=${ue===0?ve-5:ve}
              x= ${ue===0?O+S*ue+5/2:O+S*ue}
              y= ${ue===0?le+S*ue+5/2:le+S*ue}
            />
          `)}});const V=Math.floor((i+25)/S),F=s.length/2-V/2,ee=s.length/2+V/2-1,ie=[];s.forEach((ne,J)=>{ne.forEach((le,O)=>{if(s[J][O]&&!(J<hi&&O<hi||J>s.length-(hi+1)&&O<hi||J<hi&&O>s.length-(hi+1))&&!(J>F&&J<ee&&O>F&&O<ee)){const ye=J*S+S/2,ue=O*S+S/2;ie.push([ye,ue])}})});const Q={};return ie.forEach(([ne,J])=>{Q[ne]?Q[ne]?.push(J):Q[ne]=[J]}),Object.entries(Q).map(([ne,J])=>{const le=J.filter(O=>J.every(ye=>!Ca(O,ye,S)));return[Number(ne),le]}).forEach(([ne,J])=>{J.forEach(le=>{a.push(N`<circle cx=${ne} cy=${le} fill=${o} r=${S/qs} />`)})}),Object.entries(Q).filter(([ne,J])=>J.length>1).map(([ne,J])=>{const le=J.filter(O=>J.some(ye=>Ca(O,ye,S)));return[Number(ne),le]}).map(([ne,J])=>{J.sort((O,ye)=>O<ye?-1:1);const le=[];for(const O of J){const ye=le.find(ue=>ue.some(ve=>Ca(O,ve,S)));ye?ye.push(O):le.push([O])}return[ne,le.map(O=>[O[0],O[O.length-1]])]}).forEach(([ne,J])=>{J.forEach(([le,O])=>{a.push(N`
              <line
                x1=${ne}
                x2=${ne}
                y1=${le}
                y2=${O}
                stroke=${o}
                stroke-width=${S/(qs/2)}
                stroke-linecap="round"
              />
            `)})}),a}},gp=$`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Zi=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Yt=class extends T{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,l`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return N`
      <svg height=${e} width=${e}>
        ${wp.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?l`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:l`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Yt.styles=[z,gp];Zi([c()],Yt.prototype,"uri",void 0);Zi([c({type:Number})],Yt.prototype,"size",void 0);Zi([c()],Yt.prototype,"theme",void 0);Zi([c()],Yt.prototype,"imageSrc",void 0);Zi([c()],Yt.prototype,"alt",void 0);Zi([c({type:Boolean})],Yt.prototype,"arenaClear",void 0);Zi([c({type:Boolean})],Yt.prototype,"farcaster",void 0);Yt=Zi([C("wui-qr-code")],Yt);const mp=$`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var vp=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Pa=class extends T{constructor(){super(...arguments),this.inputComponentRef=Wi()}render(){return l`
      <wui-input-text
        ${Ui(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const i=this.inputComponentRef.value?.inputElementRef.value;i&&(i.value="",i.focus(),i.dispatchEvent(new Event("input")))}};Pa.styles=[z,mp];Pa=vp([C("wui-search-bar")],Pa);const bp=$`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var no=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ji=class extends T{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1}render(){return l`
      ${this.loading?l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:l`<wui-icon-box
            size="sm"
            iconSize="xs"
            iconColor=${this.iconColor}
            backgroundColor=${this.backgroundColor}
            icon=${this.icon}
            background="opaque"
          ></wui-icon-box>`}
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};ji.styles=[z,bp];no([c()],ji.prototype,"backgroundColor",void 0);no([c()],ji.prototype,"iconColor",void 0);no([c()],ji.prototype,"icon",void 0);no([c()],ji.prototype,"message",void 0);no([c()],ji.prototype,"loading",void 0);ji=no([C("wui-snackbar")],ji);const xp=$`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Gi=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Kt=class extends T{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,i)=>{const o=i===this.activeTab;return l`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(i)}
          data-active=${o}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?l`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,i){const o=this.buttons[this.activeTab],r=this.buttons[e],n=o?.querySelector("wui-text"),a=r?.querySelector("wui-text"),s=r?.getBoundingClientRect(),S=a?.getBoundingClientRect();o&&n&&!i&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),o.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),r&&s&&S&&a&&(e!==this.activeTab||i)&&(this.localTabWidth=`${Math.round(s.width+S.width)+6}px`,r.animate([{width:`${s.width+S.width}px`}],{duration:i?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:i?0:125,delay:i?0:200,fill:"forwards",easing:"ease"}))}};Kt.styles=[z,se,xp];Gi([c({type:Array})],Kt.prototype,"tabs",void 0);Gi([c()],Kt.prototype,"onTabChange",void 0);Gi([c({type:Array})],Kt.prototype,"buttons",void 0);Gi([c({type:Boolean})],Kt.prototype,"disabled",void 0);Gi([c()],Kt.prototype,"localTabWidth",void 0);Gi([f()],Kt.prototype,"activeTab",void 0);Gi([f()],Kt.prototype,"isDense",void 0);Kt=Gi([C("wui-tabs")],Kt);const yp=$`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var ps=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let So=class extends T{constructor(){super(...arguments),this.text=""}render(){return l`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:l`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};So.styles=[z,se,yp];ps([c()],So.prototype,"imageSrc",void 0);ps([c()],So.prototype,"text",void 0);So=ps([C("wui-token-button")],So);const Cp=$`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var ea=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Gn=class extends T{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,l`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Gn.styles=[z,se,Cp];ea([c()],Gn.prototype,"placement",void 0);ea([c()],Gn.prototype,"variant",void 0);ea([c()],Gn.prototype,"message",void 0);Gn=ea([C("wui-tooltip")],Gn);const kp=$`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var qi=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Xt=class extends T{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible)return null;const e=this.amount&&this.price?we.multiply(this.price,this.amount)?.toFixed(3):null;return l`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${e?l`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${X.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?l`<wui-text variant="small-400" color="fg-200">
                  ${X.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?l`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?l`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};Xt.styles=[z,se,kp];qi([c()],Xt.prototype,"imageSrc",void 0);qi([c()],Xt.prototype,"name",void 0);qi([c()],Xt.prototype,"symbol",void 0);qi([c()],Xt.prototype,"price",void 0);qi([c()],Xt.prototype,"amount",void 0);qi([f()],Xt.prototype,"visible",void 0);qi([f()],Xt.prototype,"imageError",void 0);Xt=qi([C("wui-token-list-item")],Xt);const Tp=$`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var ta=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let qn=class extends T{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,l`${this.templateVisual()}`}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:l`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};qn.styles=[z,Tp];ta([c()],qn.prototype,"imageSrc",void 0);ta([c()],qn.prototype,"alt",void 0);ta([c({type:Boolean})],qn.prototype,"borderRadiusFull",void 0);qn=ta([C("wui-visual-thumbnail")],qn);const _p=$`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var ia=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Yn=class extends T{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return l`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Yn.styles=[z,se,_p];ia([c()],Yn.prototype,"label",void 0);ia([c()],Yn.prototype,"description",void 0);ia([c()],Yn.prototype,"icon",void 0);Yn=ia([C("wui-notice-card")],Yn);const Sp=$`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-150), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var hs=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const ka=100;let Eo=class extends T{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{const e=this.shadowRoot?.querySelector(".heightContent"),i=this.shadowRoot?.querySelector(".textContent");if(e&&i){this.scrollElement=e;const o=i?.scrollHeight;o&&o>ka&&(this.enableAccordion=!0,this.scrollHeightElement=o,this.requestUpdate())}})}render(){return l`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){const e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${ka}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${ka}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?l` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};Eo.styles=[z,se,Sp];hs([c()],Eo.prototype,"textTitle",void 0);hs([c()],Eo.prototype,"overflowedContent",void 0);Eo=hs([C("wui-list-accordion")],Eo);const Ep=$`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var na=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Kn=class extends T{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?l` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:l`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Kn.styles=[z,se,Ep];na([c()],Kn.prototype,"imageSrc",void 0);na([c()],Kn.prototype,"textTitle",void 0);na([c()],Kn.prototype,"textValue",void 0);Kn=na([C("wui-list-content")],Kn);const Ap=$`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var oo=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Bi=class extends T{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return l`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?l`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?l`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:l`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};Bi.styles=[z,se,Ap];oo([c()],Bi.prototype,"imageSrc",void 0);oo([c()],Bi.prototype,"name",void 0);oo([c({type:Boolean})],Bi.prototype,"disabled",void 0);oo([c({type:Boolean})],Bi.prototype,"selected",void 0);oo([c({type:Boolean})],Bi.prototype,"transparent",void 0);Bi=oo([C("wui-list-network")],Bi);const $p=$`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var ro=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let zi=class extends T{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?l`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:l`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};zi.styles=[z,se,$p];ro([c()],zi.prototype,"amount",void 0);ro([c()],zi.prototype,"networkCurreny",void 0);ro([c()],zi.prototype,"networkImageUrl",void 0);ro([c()],zi.prototype,"receiverAddress",void 0);ro([c()],zi.prototype,"addressExplorerUrl",void 0);zi=ro([C("wui-list-wallet-transaction")],zi);const Rp=$`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-060);
    }
  }
`;var Ul=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let yr=class extends T{constructor(){super(...arguments),this.text=""}render(){return l`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};yr.styles=[z,se,Rp];Ul([c()],yr.prototype,"text",void 0);yr=Ul([C("wui-promo")],yr);const Ip=$`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var fs=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ao=class extends T{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return l`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Ao.styles=[z,Ip];fs([c()],Ao.prototype,"dollars",void 0);fs([c()],Ao.prototype,"pennies",void 0);Ao=fs([C("wui-balance")],Ao);const Op=$`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var ao=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Vi=class extends T{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return l`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${X.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?l`<wui-image src=${this.networkSrc}></wui-image>`:l`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Vi.styles=[z,se,Op];ao([c()],Vi.prototype,"networkSrc",void 0);ao([c()],Vi.prototype,"avatarSrc",void 0);ao([c()],Vi.prototype,"profileName",void 0);ao([c()],Vi.prototype,"address",void 0);ao([c()],Vi.prototype,"icon",void 0);Vi=ao([C("wui-profile-button")],Vi);const Np=$`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var $n=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ci=class extends T{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail",this.connectedConnector=xe.getConnectedConnector(),this.shouldShowIcon=this.connectedConnector==="AUTH"}render(){return l`<button ontouchstart data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.shouldShowIcon?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${X.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){if(e.target instanceof HTMLElement&&e.target.id==="copy-address"){this.onCopyClick?.(e);return}this.onProfileClick?.(e)}getIconTemplate(e){return l`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};Ci.styles=[z,se,Np];$n([c()],Ci.prototype,"avatarSrc",void 0);$n([c()],Ci.prototype,"profileName",void 0);$n([c()],Ci.prototype,"address",void 0);$n([c()],Ci.prototype,"icon",void 0);$n([c()],Ci.prototype,"onProfileClick",void 0);$n([c()],Ci.prototype,"onCopyClick",void 0);Ci=$n([C("wui-profile-button-v2")],Ci);const Pp=$`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var Rn=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ki=class extends T{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const e=this.size==="sm"?"small-600":"paragraph-600";return l`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};ki.styles=[z,se,Pp];Rn([c()],ki.prototype,"variant",void 0);Rn([c()],ki.prototype,"imageSrc",void 0);Rn([c({type:Boolean})],ki.prototype,"disabled",void 0);Rn([c()],ki.prototype,"icon",void 0);Rn([c()],ki.prototype,"size",void 0);Rn([c()],ki.prototype,"text",void 0);ki=Rn([C("wui-chip-button")],ki);const Dp=$`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var ws=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let $o=class extends T{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return l`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return l` <wui-flex class="networks">
      ${e?.map(i=>l` <wui-flex class="network-icon"> <wui-image src=${i}></wui-image> </wui-flex>`)}
    </wui-flex>`}};$o.styles=[z,se,Dp];ws([c({type:Array})],$o.prototype,"networkImages",void 0);ws([c()],$o.prototype,"text",void 0);$o=ws([C("wui-compatible-network")],$o);const Lp=$`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var gs=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ro=class extends T{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return l`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Ro.styles=[z,se,Lp];gs([c()],Ro.prototype,"icon",void 0);gs([c()],Ro.prototype,"text",void 0);Ro=gs([C("wui-banner")],Ro);const Mp=$`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var oa=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Xn=class extends T{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return l`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Xn.styles=[z,se,Mp];oa([c()],Xn.prototype,"imageSrc",void 0);oa([c()],Xn.prototype,"text",void 0);oa([c()],Xn.prototype,"size",void 0);Xn=oa([C("wui-banner-img")],Xn);const Wp=$`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var In=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ti=class extends T{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return l`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${X.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?l`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:l`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};Ti.styles=[z,se,Wp];In([c()],Ti.prototype,"tokenName",void 0);In([c()],Ti.prototype,"tokenImageUrl",void 0);In([c({type:Number})],Ti.prototype,"tokenValue",void 0);In([c()],Ti.prototype,"tokenAmount",void 0);In([c()],Ti.prototype,"tokenCurrency",void 0);In([c({type:Boolean})],Ti.prototype,"clickable",void 0);Ti=In([C("wui-list-token")],Ti);const Up=$`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var Yi=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Qt=class extends T{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return l`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?l` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:l`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};Qt.styles=[z,se,Up];Yi([c()],Qt.prototype,"icon",void 0);Yi([c()],Qt.prototype,"text",void 0);Yi([c()],Qt.prototype,"description",void 0);Yi([c()],Qt.prototype,"tag",void 0);Yi([c()],Qt.prototype,"iconBackgroundColor",void 0);Yi([c()],Qt.prototype,"iconColor",void 0);Yi([c({type:Boolean})],Qt.prototype,"disabled",void 0);Qt=Yi([C("wui-list-description")],Qt);const jp=$`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,Bp=/[.*+?^${}()|[\]\\]/gu,zp=/[0-9,.]/u;var ra=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Qn=class extends T{constructor(){super(...arguments),this.inputElementRef=Wi(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),l`<input
      ${Ui(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){const i=e.data;if(i&&this.inputElementRef?.value)if(i===","){const o=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=o,this.value=`${this.value}${o}`}else zp.test(i)||(this.inputElementRef.value.value=this.value.replace(new RegExp(i.replace(Bp,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};Qn.styles=[z,se,jp];ra([c({type:Boolean})],Qn.prototype,"disabled",void 0);ra([c({type:String})],Qn.prototype,"value",void 0);ra([c({type:String})],Qn.prototype,"placeholder",void 0);Qn=ra([C("wui-input-amount")],Qn);const Vp=$`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`;var Ho=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let cn=class extends T{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return l`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?l`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:l`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};cn.styles=[z,se,Vp];Ho([c()],cn.prototype,"text",void 0);Ho([c()],cn.prototype,"address",void 0);Ho([c()],cn.prototype,"imageSrc",void 0);Ho([c({type:Boolean})],cn.prototype,"isAddress",void 0);cn=Ho([C("wui-preview-item")],cn);const Fp=$`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var Zo=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let un=class extends T{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.connectedConnector=xe.getConnectedConnector(),this.labels=R.state.addressLabels,this.caipNetwork=L.state.caipNetwork,this.socialProvider=xe.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){super.connectedCallback(),Pe.getBalance(this.accountAddress,this.caipNetwork?.id).then(e=>{let i=this.balance;e.balances.length>0&&(i=e.balances.reduce((o,r)=>o+(r?.value||0),0)),this.balance=i,this.fetchingBalance=!1,this.requestUpdate()})}render(){const e=this.getLabel();return this.shouldShowIcon=this.connectedConnector==="AUTH",l`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?l`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===pe.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:l`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${X.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${this.fetchingBalance?l`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:l` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
          <slot name="action"></slot>
        </wui-flex>
      </wui-flex>
    `}getLabel(){let e=this.labels?.get(this.accountAddress);return!e&&this.connectedConnector==="AUTH"?e=`${this.accountType==="eoa"?this.socialProvider??"Email":"Smart"} Account`:!e&&this.connectedConnector==="INJECTED"||this.connectedConnector==="ANNOUNCED"?e="Injected Account":e||(e="EOA"),e}};un.styles=[z,se,Fp];Zo([c()],un.prototype,"accountAddress",void 0);Zo([c()],un.prototype,"accountType",void 0);Zo([c({type:Boolean})],un.prototype,"selected",void 0);Zo([c({type:Function})],un.prototype,"onSelect",void 0);un=Zo([C("wui-list-account")],un);const Hp=$`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var ms=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Io=class extends T{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return l`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};Io.styles=[z,se,Hp];ms([c()],Io.prototype,"text",void 0);ms([c()],Io.prototype,"icon",void 0);Io=ms([C("wui-icon-button")],Io);const Zp=$`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var vs=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Oo=class extends T{constructor(){super(...arguments),this.text="",this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};Oo.styles=[z,se,Zp];vs([c()],Oo.prototype,"text",void 0);vs([c({type:Boolean})],Oo.prototype,"disabled",void 0);Oo=vs([C("wui-list-button")],Oo);const Gp=$`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Go=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let dn=class extends T{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return this.align==="center"?l` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};dn.styles=[z,se,Gp];Go([c()],dn.prototype,"logo",void 0);Go([c()],dn.prototype,"name",void 0);Go([c()],dn.prototype,"align",void 0);Go([c({type:Boolean})],dn.prototype,"disabled",void 0);dn=Go([C("wui-list-social")],dn);const qp=$`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var jl=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Cr=class extends T{constructor(){super(...arguments),this.imageSrc=""}render(){return l`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:l`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};Cr.styles=[z,se,Gr,qp];jl([c()],Cr.prototype,"imageSrc",void 0);Cr=jl([C("wui-select")],Cr);const Yp=$`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Ot=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let rt=class extends T{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&X.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&X.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&X.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&X.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&X.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&X.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&X.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&X.getSpacingStyles(this.margin,3)};
    `,l`<slot></slot>`}};rt.styles=[z,Yp];Ot([c()],rt.prototype,"gridTemplateRows",void 0);Ot([c()],rt.prototype,"gridTemplateColumns",void 0);Ot([c()],rt.prototype,"justifyItems",void 0);Ot([c()],rt.prototype,"alignItems",void 0);Ot([c()],rt.prototype,"justifyContent",void 0);Ot([c()],rt.prototype,"alignContent",void 0);Ot([c()],rt.prototype,"columnGap",void 0);Ot([c()],rt.prototype,"rowGap",void 0);Ot([c()],rt.prototype,"gap",void 0);Ot([c()],rt.prototype,"padding",void 0);Ot([c()],rt.prototype,"margin",void 0);rt=Ot([C("wui-grid")],rt);const Kp=$`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var Bl=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let kr=class extends T{constructor(){super(...arguments),this.text=""}render(){return l`${this.template()}`}template(){return this.text?l`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};kr.styles=[z,Kp];Bl([c()],kr.prototype,"text",void 0);kr=Bl([C("wui-separator")],kr);const ur={interpolate(t,e,i){if(t.length!==2||e.length!==2)throw new Error("inputRange and outputRange must be an array of length 2");const o=t[0]||0,r=t[1]||0,n=e[0]||0,a=e[1]||0;return i<o?n:i>r?a:(a-n)/(r-o)*(i-o)+n}},Xp=3,Qp=["receive","deposit","borrow","claim"],Jp=["withdraw","repay","burn"],nn={getMonthName(t){const e=new Date;return e.setMonth(t),e.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(t,e){const i=is.getYear(),o=this.getMonthName(e);return t===i?o:`${o} ${t}`},getTransactionImages(t){const[e,i]=t,o=!!e&&t?.every(a=>!!a.nft_info),r=t?.length>1;return t?.length===2&&!o?[this.getTransactionImage(e),this.getTransactionImage(i)]:r?t.map(a=>this.getTransactionImage(a)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:nn.getTransactionTransferTokenType(t),url:nn.getTransactionImageURL(t)}},getTransactionImageURL(t){let e;const i=!!t?.nft_info,o=!!t?.fungible_info;return t&&i?e=t?.nft_info?.content?.preview?.url:t&&o&&(e=t?.fungible_info?.icon?.url),e},getTransactionTransferTokenType(t){if(t?.fungible_info)return"FUNGIBLE";if(t?.nft_info)return"NFT"},getTransactionDescriptions(t){const e=t?.metadata?.operationType,i=t?.transfers,o=t?.transfers?.length>0,r=t?.transfers?.length>1,n=o&&i?.every(F=>!!F?.fungible_info),[a,s]=i;let S=this.getTransferDescription(a),I=this.getTransferDescription(s);if(!o)return(e==="send"||e==="receive")&&n?(S=X.getTruncateString({string:t?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),I=X.getTruncateString({string:t?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[S,I]):[t.metadata.status];if(r)return i.map(F=>this.getTransferDescription(F));let V="";return Qp.includes(e)?V="+":Jp.includes(e)&&(V="-"),S=V.concat(S),[S]},getTransferDescription(t){let e="";return t&&(t?.nft_info?e=t?.nft_info?.name||"-":t?.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){return t?[this.getQuantityFixedValue(t?.quantity.numeric),t?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue(t){return t?parseFloat(t).toFixed(Xp):null}};var gt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let at=class extends T{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=R.state.address,this.balanceVal=R.state.balance,this.balanceSymbol=R.state.balanceSymbol,this.profileName=R.state.profileName,this.profileImage=R.state.profileImage,this.network=L.state.caipNetwork,this.networkImage=this.network?ge.getNetworkImage(this.network):void 0,this.isUnsupportedChain=L.state.isUnsupportedChain,this.unsubscribe.push(Re.subscribeNetworkImages(()=>{this.networkImage=this.network?.imageId?ge.getNetworkImage(this.network):void 0}),R.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),L.subscribeKey("caipNetwork",e=>{this.network=e,this.networkImage=e?.imageId?ge.getNetworkImage(e):void 0}),L.subscribeKey("isUnsupportedChain",e=>{this.isUnsupportedChain=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.balance==="show";return l`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${j(this.address)}
        profileName=${j(this.profileName)}
        networkSrc=${j(this.networkImage)}
        avatarSrc=${j(this.profileImage)}
        balance=${e?M.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?re.open({view:"UnsupportedChain"}):re.open()}};gt([c({type:Boolean})],at.prototype,"disabled",void 0);gt([c()],at.prototype,"balance",void 0);gt([c()],at.prototype,"charsStart",void 0);gt([c()],at.prototype,"charsEnd",void 0);gt([f()],at.prototype,"address",void 0);gt([f()],at.prototype,"balanceVal",void 0);gt([f()],at.prototype,"balanceSymbol",void 0);gt([f()],at.prototype,"profileName",void 0);gt([f()],at.prototype,"profileImage",void 0);gt([f()],at.prototype,"network",void 0);gt([f()],at.prototype,"networkImage",void 0);gt([f()],at.prototype,"isUnsupportedChain",void 0);at=gt([C("w3m-account-button")],at);const eh=$`
  :host {
    display: block;
    width: max-content;
  }
`;var si=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let $t=class extends T{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=R.state.isConnected,this.isLoading=re.state.loading}firstUpdated(){this.unsubscribe.push(R.subscribe(e=>{this.isAccount=e.isConnected}),re.subscribeKey("loading",e=>{this.isLoading=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount&&!this.isLoading?l`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${j(this.balance)}
            .charsStart=${j(this.charsStart)}
            .charsEnd=${j(this.charsEnd)}
          >
          </w3m-account-button>
        `:l`
          <w3m-connect-button
            size=${j(this.size)}
            label=${j(this.label)}
            loadingLabel=${j(this.loadingLabel)}
          ></w3m-connect-button>
        `}};$t.styles=eh;si([c({type:Boolean})],$t.prototype,"disabled",void 0);si([c()],$t.prototype,"balance",void 0);si([c()],$t.prototype,"size",void 0);si([c()],$t.prototype,"label",void 0);si([c()],$t.prototype,"loadingLabel",void 0);si([c()],$t.prototype,"charsStart",void 0);si([c()],$t.prototype,"charsEnd",void 0);si([f()],$t.prototype,"isAccount",void 0);si([f()],$t.prototype,"isLoading",void 0);$t=si([C("w3m-button")],$t);var so=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let pn=class extends T{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=re.state.open,this.loading=re.state.loading,this.unsubscribe.push(re.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return l`
      <wui-connect-button
        size=${j(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?re.close():this.loading||re.open()}};so([c()],pn.prototype,"size",void 0);so([c()],pn.prototype,"label",void 0);so([c()],pn.prototype,"loadingLabel",void 0);so([f()],pn.prototype,"open",void 0);so([f()],pn.prototype,"loading",void 0);pn=so([C("w3m-connect-button")],pn);const th=$`
  :host {
    display: block;
    width: max-content;
  }
`;var Ki=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Jt=class extends T{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.network=L.state.caipNetwork,this.networkImage=this.network?ge.getNetworkImage(this.network):void 0,this.connected=R.state.isConnected,this.loading=re.state.loading,this.isUnsupportedChain=L.state.isUnsupportedChain}firstUpdated(){this.unsubscribe.push(Re.subscribeNetworkImages(()=>{this.networkImage=this.network?.imageId?ge.getNetworkImage(this.network):void 0}),L.subscribeKey("caipNetwork",e=>{this.network=e,this.networkImage=e?.imageId?ge.getNetworkImage(e):void 0}),R.subscribeKey("isConnected",e=>this.connected=e),re.subscribeKey("loading",e=>this.loading=e),L.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-network-button
        data-testid="wui-network-button"
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${j(this.networkImage)}
        @click=${this.onClick.bind(this)}
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.label?this.label:this.isUnsupportedChain?"Switch Network":this.network?this.network.name:this.connected?"Unknown Network":"Select Network"}onClick(){this.loading||(B.sendEvent({type:"track",event:"CLICK_NETWORKS"}),re.open({view:"Networks"}))}};Jt.styles=th;Ki([c({type:Boolean})],Jt.prototype,"disabled",void 0);Ki([c({type:String})],Jt.prototype,"label",void 0);Ki([f()],Jt.prototype,"network",void 0);Ki([f()],Jt.prototype,"networkImage",void 0);Ki([f()],Jt.prototype,"connected",void 0);Ki([f()],Jt.prototype,"loading",void 0);Ki([f()],Jt.prototype,"isUnsupportedChain",void 0);Jt=Ki([C("w3m-network-button")],Jt);const ih=$`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var nh={};const wi={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:nh.NEXT_PUBLIC_SECURE_SITE_ORIGIN||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}};var bs=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let No=class extends T{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=k.state.view,this.viewDirection="",this.unsubscribe.push(k.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(([e])=>{const i=`${e?.contentRect.height}px`;this.prevHeight!=="0px"&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",i),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=i,this.style.animation="unset"},wi.ANIMATION_DURATIONS.ModalHeight)}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return l`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return l`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return l`<w3m-account-view></w3m-account-view>`;case"AllWallets":return l`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return l`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return l`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return l`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return l`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return l`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return l`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return l`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return l`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return l`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return l`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return l`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return l`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return l`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return l`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return l`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return l`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return l`<w3m-profile-view></w3m-profile-view>`;case"SelectAddresses":return l`<w3m-select-addresses-view></w3m-select-addresses-view>`;case"SwitchAddress":return l`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return l`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return l`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return l`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return l`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return l`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return l`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return l`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return l`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return l`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return l`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return l`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return l`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return l`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return l`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return l`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return l`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return l`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return l`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return l`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return l`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return l`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return l`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return l`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return l`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return l`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return l`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return l`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;default:return l`<w3m-connect-view></w3m-connect-view>`}}onViewChange(e){ct.hide();let i=wi.VIEW_DIRECTION.Next;const{history:o}=k.state;o.length<this.prevHistoryLength&&(i=wi.VIEW_DIRECTION.Prev),this.prevHistoryLength=o.length,this.viewDirection=i,setTimeout(()=>{this.view=e},wi.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector("div")}};No.styles=ih;bs([f()],No.prototype,"view",void 0);bs([f()],No.prototype,"viewDirection",void 0);No=bs([C("w3m-router")],No);const oh=$`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var Xi=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const rh={USD:"$",EUR:"€",GBP:"£"},ah=[100,250,500,1e3];let ei=class extends T{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=R.state.isConnected,this.loading=re.state.loading,this.paymentCurrency=ke.state.paymentCurrency,this.paymentAmount=ke.state.paymentAmount,this.purchaseAmount=ke.state.purchaseAmount,this.quoteLoading=ke.state.quotesLoading,this.unsubscribe.push(R.subscribeKey("isConnected",e=>{this.connected=e}),re.subscribeKey("loading",e=>{this.loading=e}),ke.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${ah.map(e=>l`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${rh[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?l`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:l`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||re.open({view:"OnRampProviders"})}openModal(){re.open({view:"Connect"})}async onPaymentAmountChange(e){ke.setPaymentAmount(Number(e.detail)),await ke.getQuote()}async selectPresetAmount(e){ke.setPaymentAmount(e),await ke.getQuote()}};ei.styles=oh;Xi([c({type:Boolean})],ei.prototype,"disabled",void 0);Xi([f()],ei.prototype,"connected",void 0);Xi([f()],ei.prototype,"loading",void 0);Xi([f()],ei.prototype,"paymentCurrency",void 0);Xi([f()],ei.prototype,"paymentAmount",void 0);Xi([f()],ei.prototype,"purchaseAmount",void 0);Xi([f()],ei.prototype,"quoteLoading",void 0);ei=Xi([C("w3m-onramp-widget")],ei);var li=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ut=class extends T{constructor(){super(),this.usubscribe=[],this.networkImages=Re.state.networkImages,this.address=R.state.address,this.profileImage=R.state.profileImage,this.profileName=R.state.profileName,this.network=L.state.caipNetwork,this.preferredAccountType=R.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(R.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):re.close()}),R.subscribeKey("preferredAccountType",e=>this.preferredAccountType=e),L.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[this.network?.imageId??""],i=this.profileName?.split(".")[0];return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${j(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${i?X.getTruncateString({string:i,charsStart:20,charsEnd:0,truncate:"end"}):X.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${j(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const e=xe.getConnectedConnector(),i=H.getAuthConnector();return!L.checkIfNamesSupported()||!i||e!=="AUTH"||this.profileName?null:l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){const e=xe.getConnectedConnector(),i=H.getAuthConnector(),{origin:o}=location;return!i||e!=="AUTH"||o.includes(Te.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=L.getRequestedCaipNetworks(),i=e?e.length>1:!1,o=e?.find(({id:r})=>r===this.network?.id);return i||!o}onCopyAddress(){try{this.profileName?(M.copyToClopboard(this.profileName),q.showSuccess("Name copied")):this.address&&(M.copyToClopboard(this.address),q.showSuccess("Address copied"))}catch{q.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const e=L.checkIfSmartAccountEnabled(),i=xe.getConnectedConnector();return!H.getAuthConnector()||i!=="AUTH"||!e?null:(this.switched||(this.text=this.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `)}onChooseName(){k.push("ChooseAccountName")}async changePreferredAccountType(){const e=L.checkIfSmartAccountEnabled(),i=this.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT||!e?pe.ACCOUNT_TYPES.EOA:pe.ACCOUNT_TYPES.SMART_ACCOUNT;H.getAuthConnector()&&(this.loading=!0,await oe.setPreferredAccountType(i),this.text=i===pe.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,be.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&k.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await oe.disconnect(),B.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),re.close()}catch{B.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),q.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){B.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),k.push("UpgradeEmailWallet")}};li([f()],Ut.prototype,"address",void 0);li([f()],Ut.prototype,"profileImage",void 0);li([f()],Ut.prototype,"profileName",void 0);li([f()],Ut.prototype,"network",void 0);li([f()],Ut.prototype,"preferredAccountType",void 0);li([f()],Ut.prototype,"disconnecting",void 0);li([f()],Ut.prototype,"loading",void 0);li([f()],Ut.prototype,"switched",void 0);li([f()],Ut.prototype,"text",void 0);Ut=li([C("w3m-account-settings-view")],Ut);var sh=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ys=class extends T{render(){const e=xe.getConnectedConnector(),i=H.getAuthConnector();return l`
      ${i?.walletFeatures&&e==="AUTH"?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return l`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return l`<w3m-account-default-widget></w3m-account-default-widget>`}};Ys=sh([C("w3m-account-view")],Ys);var zl=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Da=class extends T{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=M.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return l`
      <wui-flex .padding=${["0","s","s","s"]} gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?l`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:l`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return M.isMobile()?l`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){k.push("ConnectingWalletConnect")}};zl([f()],Da.prototype,"search",void 0);Da=zl([C("w3m-all-wallets-view")],Da);const lh=$`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var Ft=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ht=class extends T{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=ke.state.selectedProvider,this.uri=oe.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(ke.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);const i=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return l`
      <wui-flex
        data-error=${j(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${j(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${i}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider)switch(this.selectedOnRampProvider.name){case"coinbase":this.startTime=Date.now(),this.initializeCoinbaseTransactions();break}}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{const e=R.state.address,i=Y.state.projectId;if(!e)throw new Error("No address found");(await Pe.fetchTransactions({account:e,onramp:"coinbase",projectId:i})).data.filter(n=>new Date(n.metadata.minedAt)>new Date(this.startTime)||n.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length?(clearInterval(this.intervalId),k.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){q.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,M.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?l`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=ut.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url){q.showError("No link found"),k.goBack();return}try{M.copyToClopboard(this.selectedOnRampProvider.url),q.showSuccess("Link copied")}catch{q.showError("Failed to copy")}}};ht.styles=lh;Ft([f()],ht.prototype,"intervalId",void 0);Ft([f()],ht.prototype,"selectedOnRampProvider",void 0);Ft([f()],ht.prototype,"uri",void 0);Ft([f()],ht.prototype,"ready",void 0);Ft([f()],ht.prototype,"showRetry",void 0);Ft([f()],ht.prototype,"buffering",void 0);Ft([f()],ht.prototype,"error",void 0);Ft([f()],ht.prototype,"startTime",void 0);Ft([c({type:Boolean})],ht.prototype,"isMobile",void 0);Ft([c()],ht.prototype,"onRetry",void 0);ht=Ft([C("w3m-buy-in-progress-view")],ht);const ch=$`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }
`;var Vl=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Tr=class extends T{constructor(){super(),this.unsubscribe=[],this.connectors=H.state.connectors,this.unsubscribe.push(H.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" .padding=${["3xs","s","s","s"]}>
        <w3m-email-login-widget></w3m-email-login-widget>
        <w3m-social-login-widget></w3m-social-login-widget>
        ${this.walletListTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletListTemplate(){const e=this.connectors.find(i=>i.type==="AUTH");return e?.socials?e?.showWallets?l`
          <wui-flex flexDirection="column" gap="xs" .margin=${["xs","0","0","0"]}>
            <w3m-connector-list></w3m-connector-list>
            <wui-flex class="all-wallets">
              <w3m-all-wallets-widget></w3m-all-wallets-widget>
            </wui-flex>
          </wui-flex>
        `:l`<wui-list-button
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:l`<w3m-wallet-login-list></w3m-wallet-login-list>`}onContinueWalletClick(){k.push("ConnectWallets")}};Tr.styles=ch;Vl([f()],Tr.prototype,"connectors",void 0);Tr=Vl([C("w3m-connect-view")],Tr);const uh=$`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var On=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};class lt extends T{constructor(){super(),this.wallet=k.state.data?.wallet,this.connector=k.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=ge.getWalletImage(this.wallet)??ge.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=oe.state.wcUri,this.error=oe.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(oe.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),oe.subscribeKey("wcError",e=>this.error=e),oe.subscribeKey("buffering",e=>this.buffering=e))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i=`Continue in ${this.name}`;return this.buffering&&(i="Connecting..."),this.error&&(i="Connection declined"),l`
      <wui-flex
        data-error=${j(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${j(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          size="md"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?l`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){this.buffering||(oe.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const e=ut.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(M.copyToClopboard(this.uri),q.showSuccess("Link copied"))}catch{q.showError("Failed to copy")}}}lt.styles=uh;On([f()],lt.prototype,"uri",void 0);On([f()],lt.prototype,"error",void 0);On([f()],lt.prototype,"ready",void 0);On([f()],lt.prototype,"showRetry",void 0);On([f()],lt.prototype,"buffering",void 0);On([c({type:Boolean})],lt.prototype,"isMobile",void 0);On([c()],lt.prototype,"onRetry",void 0);var dh=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ks=class extends lt{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");B.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.id!==_c.COINBASE_SDK_CONNECTOR_ID||!this.error)&&(await oe.connectExternal(this.connector,this.connector.chain),Y.state.isSiweEnabled?k.push("ConnectingSiwe"):re.close(),B.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){B.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};Ks=dh([C("w3m-connecting-external-view")],Ks);const ph=$`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var Fl=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let _r=class extends T{constructor(){super(),this.unsubscribe=[],this.activeConnector=P.state.activeConnector,this.unsubscribe.push(P.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${j(ge.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.providers?.map(e=>l`
        <wui-list-wallet
          imageSrc=${j(ge.getChainImage(e.chain))}
          name=${e.name}
          @click=${()=>this.onConnector(e)}
        ></wui-list-wallet>
      `)}onConnector(e){P.setActiveChain(e.chain);const i=this.activeConnector?.providers?.find(o=>o.chain===e.chain);if(!i){q.showError("Failed to find connector");return}i.type==="WALLET_CONNECT"?M.isMobile()?k.push("AllWallets"):k.push("ConnectingWalletConnect"):k.push("ConnectingExternal",{connector:i})}};_r.styles=ph;Fl([f()],_r.prototype,"activeConnector",void 0);_r=Fl([C("w3m-connecting-multi-chain-view")],_r);var xs=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Sr=class extends T{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=k.state.data?.wallet,this.platform=void 0,this.platforms=[],this.determinePlatforms(),this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Te.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?l`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `:l`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{if(this.platform==="browser")return;const{wcPairingExpiry:i}=oe.state;if(e||M.isPairingExpired(i))if(await oe.connectWalletConnect(),this.finalizeConnection(),xe.getConnectedConnector()==="AUTH"&&Y.state.hasMultipleAddresses)k.push("SelectAddresses");else if(Y.state.isSiweEnabled){const{SIWEController:o}=await ts(async()=>{const{SIWEController:r}=await import("./index-CpBfwu2u.js");return{SIWEController:r}},__vite__mapDeps([0,1,2,3]));o.state.status==="success"?re.close():k.push("ConnectingSiwe")}else re.close()}catch(i){B.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:i?.message??"Unknown"}}),oe.setWcError(!0),M.isAllowedRetry(this.lastRetry)&&(q.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:i}=oe.state;e&&xe.setWalletConnectDeepLink(e),i&&xe.setWeb3ModalRecent(i),B.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:this.wallet?.name||"Unknown"}})}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:e,desktop_link:i,webapp_link:o,injected:r,rdns:n,name:a}=this.wallet,s=r?.map(({injected_id:ne})=>ne).filter(Boolean),S=[...n?[n]:s??[],a],I=Y.state.isUniversalProvider?!1:S.length,V=e,F=o,ee=oe.checkInstalled(S),ie=I&&ee,Q=i&&!M.isMobile();ie&&this.platforms.push("browser"),V&&this.platforms.push(M.isMobile()?"mobile":"qrcode"),F&&this.platforms.push("web"),Q&&this.platforms.push("desktop"),!ie&&I&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return l`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return l`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return l`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return l`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return l`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return l`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?l`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const i=this.shadowRoot?.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};xs([f()],Sr.prototype,"platform",void 0);xs([f()],Sr.prototype,"platforms",void 0);Sr=xs([C("w3m-connecting-wc-view")],Sr);const hh=$`
  .continue-button-container {
    width: 100%;
  }
`;var Hl=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Er=class extends T{constructor(){super(...arguments),this.loading=!1}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{M.openHref(ns.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){k.push("RegisterAccountName"),B.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Er.styles=hh;Hl([f()],Er.prototype,"loading",void 0);Er=Hl([C("w3m-choose-account-name-view")],Er);var fh=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Xs=class extends T{constructor(){super(...arguments),this.wallet=k.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return l`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?l`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?l`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?l`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?l`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&M.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&M.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&M.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&M.openHref(this.wallet.homepage,"_blank")}};Xs=fh([C("w3m-downloads-view")],Xs);var wh=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const gh="https://walletconnect.com/explorer";let Qs=class extends T{render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{M.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:i}=K.state,{customWallets:o}=Y.state;return[...i,...o??[],...e].slice(0,4).map(n=>l`
        <wui-list-wallet
          name=${n.name??"Unknown"}
          tagVariant="main"
          imageSrc=${j(ge.getWalletImage(n))}
          @click=${()=>{M.openHref(n.homepage??gh,"_blank")}}
        ></wui-list-wallet>
      `)}};Qs=wh([C("w3m-get-wallet-view")],Qs);const mh=$`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`;var Qi=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ti=class extends T{constructor(){super(),this.formRef=Wi(),this.usubscribe=[],this.name="",this.error="",this.loading=Pi.state.loading,this.suggestions=Pi.state.suggestions,this.registered=!1,this.profileName=R.state.profileName,this.onDebouncedNameInputChange=M.debounce(e=>{Pi.validateName(e)?(this.error="",this.name=e,Pi.getSuggestions(e),Pi.isNameRegistered(e).then(i=>{this.registered=i})):e.length<4?this.error="Name must be at least 4 characters long":this.error="Can only contain letters, numbers and - characters"}),this.usubscribe.push(Pi.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),R.subscribeKey("profileName",e=>{this.profileName=e,e&&(this.error="You already own a name")}))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(e=>e()),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${Ui(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){return this.isAllowedToSubmit()?l`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `:null}onSelectSuggestion(e){return()=>{this.name=e,this.registered=!1,this.requestUpdate()}}onNameInputChange(e){this.onDebouncedNameInputChange(e.detail)}nameSuggestionTagTemplate(){return this.loading?l`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`:this.registered?l`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:l`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){if(!this.name||this.name.length<4||this.error)return null;const e=this.registered?this.suggestions.filter(i=>i.name!==this.name):[];return l`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        data-testid="account-name-suggestion"
        .padding=${["m","m","m","m"]}
        justifyContent="space-between"
        class="suggestion"
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${e.map(i=>this.availableNameTemplate(i.name))}
    </wui-flex>`}availableNameTemplate(e){return l` <wui-flex
      data-testid="account-name-suggestion"
      .padding=${["m","m","m","m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(e)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${e}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`}isAllowedToSubmit(){return!this.loading&&!this.registered&&!this.error&&!this.profileName&&Pi.validateName(this.name)}async onSubmitName(){try{if(!this.isAllowedToSubmit())return;B.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name}}),await Pi.registerName(this.name),B.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name}})}catch(e){q.showError(e.message),B.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name,error:e?.message||"Unknown error"}})}}onEnterKey(e){e.key==="Enter"&&this.isAllowedToSubmit()&&this.onSubmitName()}};ti.styles=mh;Qi([c()],ti.prototype,"errorMessage",void 0);Qi([f()],ti.prototype,"name",void 0);Qi([f()],ti.prototype,"error",void 0);Qi([f()],ti.prototype,"loading",void 0);Qi([f()],ti.prototype,"suggestions",void 0);Qi([f()],ti.prototype,"registered",void 0);Qi([f()],ti.prototype,"profileName",void 0);ti=Qi([C("w3m-register-account-name-view")],ti);const vh=$`
  .continue-button-container {
    width: 100%;
  }
`;var bh=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let La=class extends T{render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{M.openHref(ns.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){k.replace("Account")}};La.styles=vh;La=bh([C("w3m-register-account-name-success-view")],La);const xh=$`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,ys={onNetworkChange:async()=>{if(Y.state.isSiweEnabled){const{SIWEController:t}=await ts(async()=>{const{SIWEController:e}=await import("./index-CpBfwu2u.js");return{SIWEController:e}},__vite__mapDeps([0,1,2,3]));t.state._client?.options?.signOutOnNetworkChange?await t.signOut():Aa.navigateAfterNetworkSwitch()}else Aa.navigateAfterNetworkSwitch()}};var Cs=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Po=class extends T{constructor(){super(),this.network=k.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),i=this.getSubLabel();return l`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${j(ge.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:l`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${i}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=xe.getConnectedConnector();return H.getAuthConnector()&&e==="AUTH"?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const e=xe.getConnectedConnector();return H.getAuthConnector()&&e==="AUTH"?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await L.switchActiveNetwork(this.network),await ys.onNetworkChange())}catch{this.error=!0}}};Po.styles=xh;Cs([f()],Po.prototype,"showRetry",void 0);Cs([f()],Po.prototype,"error",void 0);Po=Cs([C("w3m-network-switch-view")],Po);const yh=$`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var qo=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let hn=class extends T{constructor(){super(),this.unsubscribe=[],this.network=L.state.caipNetwork,this.requestedCaipNetworks=L.getRequestedCaipNetworks(),this.search="",this.onDebouncedSearch=M.debounce(e=>{this.search=e},100),this.unsubscribe.push(L.subscribeKey("caipNetwork",e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return l`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){B.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),k.push("WhatIsANetwork")}networksTemplate(){const e=L.getRequestedCaipNetworks(),i=L.state.approvedCaipNetworkIds,o=L.state.supportsAllNetworks,r=M.sortRequestedNetworks(i,e);return this.search?this.filteredNetworks=r?.filter(n=>n?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=r,this.filteredNetworks?.map(n=>l`
        <wui-list-network
          .selected=${this.network?.id===n.id}
          imageSrc=${j(ge.getNetworkImage(n))}
          type="network"
          name=${n.name??n.id}
          @click=${()=>this.onSwitchNetwork(n)}
          .disabled=${!o&&!i?.includes(n.id)&&n.chain===P.state.activeChain}
          data-testid=${`w3m-network-switch-${n.name??n.id}`}
        ></wui-list-network>
      `)}async onSwitchNetwork(e){const i=R.state.isConnected,o=R.getChainIsConnected(e.chain),r=L.state.approvedCaipNetworkIds,n=L.state.supportsAllNetworks,a=L.state.caipNetwork,s=k.state.data;if(i&&a?.id!==e.id){if(!o){k.push("SwitchActiveChain",{switchToChain:e.chain,navigateTo:"Connect",navigateWithReplace:!0});return}r?.includes(e.id)?(await L.switchActiveNetwork(e),await ys.onNetworkChange()):n&&k.push("SwitchNetwork",{...s,network:e})}else i||(L.setActiveCaipNetwork(e),o||k.push("Connect"))}};hn.styles=yh;qo([f()],hn.prototype,"network",void 0);qo([f()],hn.prototype,"requestedCaipNetworks",void 0);qo([f()],hn.prototype,"filteredNetworks",void 0);qo([f()],hn.prototype,"search",void 0);hn=qo([C("w3m-networks-view")],hn);const Ch=$`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var Yo=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const kh=7;let fn=class extends T{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=ke.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=Be.state.coinbaseTransactions,this.tokenImages=Re.state.tokenImages,this.unsubscribe.push(ke.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),Re.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},Be.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),Be.clearCursor(),this.fetchTransactions()}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e?.map(i=>{const o=is.formatDate(i?.metadata?.minedAt),r=i.transfers[0],n=r?.fungible_info;if(!n)return null;const a=n?.icon?.url||this.tokenImages?.[n.symbol||""];return l`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${i.metadata.status==="ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${i.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${i.metadata.status==="ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${j(n.symbol)}
          purchaseValue=${r.quantity.numeric}
          date=${o}
          icon=${j(a)}
          symbol=${j(n.symbol)}
        ></w3m-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(i=>{const o=parseInt(i,10);return new Array(12).fill(null).map((n,a)=>a).reverse().map(n=>{const a=nn.getTransactionGroupTitle(o,n),s=this.coinbaseTransactions[o]?.[n];return s?l`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${a}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(s)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=R.state.address,i=Y.state.projectId;if(!e)throw new Error("No address found");if(!i)throw new Error("No projectId found");this.loading=!0,await Be.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){const e=new Date;if((this.coinbaseTransactions[e.getFullYear()]?.[e.getMonth()]||[]).filter(r=>r.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length===0){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{const r=R.state.address;await Be.fetchTransactions(r,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(kh).fill(l` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};fn.styles=Ch;Yo([f()],fn.prototype,"selectedOnRampProvider",void 0);Yo([f()],fn.prototype,"loading",void 0);Yo([f()],fn.prototype,"coinbaseTransactions",void 0);Yo([f()],fn.prototype,"tokenImages",void 0);fn=Yo([C("w3m-onramp-activity-view")],fn);const Th=$`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var aa=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Jn=class extends T{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=ke.state.paymentCurrency,this.currencies=ke.state.paymentCurrencies,this.currencyImages=Re.state.currencyImages,this.unsubscribe.push(ke.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),Re.subscribeKey("currencyImages",e=>this.currencyImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map(e=>l`
        <wui-list-item
          imageSrc=${j(this.currencyImages?.[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(e){e&&(ke.setPaymentCurrency(e),re.close())}};Jn.styles=Th;aa([f()],Jn.prototype,"selectedCurrency",void 0);aa([f()],Jn.prototype,"currencies",void 0);aa([f()],Jn.prototype,"currencyImages",void 0);Jn=aa([C("w3m-onramp-fiat-select-view")],Jn);var Zl=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ma=class extends T{constructor(){super(),this.unsubscribe=[],this.providers=ke.state.providers,this.unsubscribe.push(ke.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){const e=this.providers.map(async i=>i.name==="coinbase"?await this.getCoinbaseOnRampURL():Promise.resolve(i?.url));Promise.all(e).then(i=>{this.providers=this.providers.map((o,r)=>({...o,url:i[r]||""}))})}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter(e=>e.supportedChains.includes(P.state.activeChain??"evm")).map(e=>l`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(e){ke.setSelectedProvider(e),k.push("BuyInProgress"),M.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes"),B.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){const e=R.state.address,i=L.state.caipNetwork;if(!e)throw new Error("No address found");if(!i?.name)throw new Error("No network found");const o=Te.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[i.name]??Te.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,r=ke.state.purchaseCurrency,n=r?[r.symbol]:ke.state.purchaseCurrencies.map(a=>a.symbol);return await Pe.generateOnRampURL({defaultNetwork:o,destinationWallets:[{address:e,blockchains:Te.WC_COINBASE_PAY_SDK_CHAINS,assets:n}],partnerUserId:e,purchaseAmount:ke.state.purchaseAmount})}};Zl([f()],Ma.prototype,"providers",void 0);Ma=Zl([C("w3m-onramp-providers-view")],Ma);const _h=$`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var sa=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let eo=class extends T{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=ke.state.purchaseCurrencies,this.tokens=ke.state.purchaseCurrencies,this.tokenImages=Re.state.tokenImages,this.unsubscribe.push(ke.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),Re.subscribeKey("tokenImages",e=>this.tokenImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map(e=>l`
        <wui-list-item
          imageSrc=${j(this.tokenImages?.[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(e){e&&(ke.setPurchaseCurrency(e),re.close())}};eo.styles=_h;sa([f()],eo.prototype,"selectedCurrency",void 0);sa([f()],eo.prototype,"tokens",void 0);sa([f()],eo.prototype,"tokenImages",void 0);eo=sa([C("w3m-onramp-token-select-view")],eo);const Sh=$`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var Ye=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ze=class extends T{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=L.state.caipNetwork?.id,this.initialized=U.state.initialized,this.loadingQuote=U.state.loadingQuote,this.loadingPrices=U.state.loadingPrices,this.loadingTransaction=U.state.loadingTransaction,this.sourceToken=U.state.sourceToken,this.sourceTokenAmount=U.state.sourceTokenAmount,this.sourceTokenPriceInUSD=U.state.sourceTokenPriceInUSD,this.toToken=U.state.toToken,this.toTokenAmount=U.state.toTokenAmount,this.toTokenPriceInUSD=U.state.toTokenPriceInUSD,this.inputError=U.state.inputError,this.gasPriceInUSD=U.state.gasPriceInUSD,this.fetchError=U.state.fetchError,this.onDebouncedGetSwapCalldata=M.debounce(async()=>{await U.swapTokens()},200),L.subscribeKey("caipNetwork",e=>{this.caipNetworkId!==e?.id&&(this.caipNetworkId=e?.id,U.resetState(),U.initializeState())}),this.unsubscribe.push(re.subscribeKey("open",e=>{e||U.resetState()}),k.subscribeKey("view",e=>{e.includes("Swap")||U.resetValues()}),U.subscribe(e=>{this.initialized=e.initialized,this.loadingQuote=e.loadingQuote,this.loadingPrices=e.loadingPrices,this.loadingTransaction=e.loadingTransaction,this.sourceToken=e.sourceToken,this.sourceTokenAmount=e.sourceTokenAmount,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError,this.gasPriceInUSD=e.gasPriceInUSD,this.fetchError=e.fetchError}))}firstUpdated(){U.initializeState(),this.watchTokensAndValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e?.()),clearInterval(this.interval)}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{U.getNetworkTokenPrice(),U.getMyTokensWithBalance(),U.swapTokens()},1e4)}templateSwap(){return l`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":!this.sourceToken||!this.toToken?"Select token":this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount"}templateReplaceTokensButton(){return l`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return l`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(e,i){const o=U.state.myTokensWithBalance?.find(s=>s?.address===i?.address),r=e==="toToken"?this.toTokenAmount:this.sourceTokenAmount,n=e==="toToken"?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD;let a=parseFloat(r)*n;return e==="toToken"&&(a-=this.gasPriceInUSD||0),l`<w3m-swap-input
      .value=${e==="toToken"?this.toTokenAmount:this.sourceTokenAmount}
      ?disabled=${this.loadingQuote&&e==="toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${i}
      .balance=${o?.quantity?.numeric}
      .price=${o?.price}
      .marketValue=${a}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(e,i){const r=(e==="sourceToken"?this.sourceToken:this.toToken)?.address===L.getActiveNetworkTokenAddress();let n="0";if(!i){n="0",this.handleChangeAmount(e,n);return}if(!this.gasPriceInUSD){n=i,this.handleChangeAmount(e,n);return}const a=we.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD),s=r?we.bigNumber(i).minus(a):we.bigNumber(i);this.handleChangeAmount(e,s.isGreaterThan(0)?s.toFixed(20):"0")}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:l`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}handleChangeAmount(e,i){U.clearError(),e==="sourceToken"?U.setSourceTokenAmount(i):U.setToTokenAmount(i),this.onDebouncedGetSwapCalldata()}templateActionButton(){const e=!this.toToken||!this.sourceToken,i=!this.sourceTokenAmount,o=this.loadingQuote||this.loadingPrices||this.loadingTransaction,r=o||e||i||this.inputError;return l` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${e?"neutral":"main"}
        .loading=${o}
        .disabled=${r}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){U.switchTokens()}onSwapPreview(){if(this.fetchError){U.swapTokens();return}B.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT}}),k.push("SwapPreview")}};ze.styles=Sh;Ye([f()],ze.prototype,"interval",void 0);Ye([f()],ze.prototype,"detailsOpen",void 0);Ye([f()],ze.prototype,"caipNetworkId",void 0);Ye([f()],ze.prototype,"initialized",void 0);Ye([f()],ze.prototype,"loadingQuote",void 0);Ye([f()],ze.prototype,"loadingPrices",void 0);Ye([f()],ze.prototype,"loadingTransaction",void 0);Ye([f()],ze.prototype,"sourceToken",void 0);Ye([f()],ze.prototype,"sourceTokenAmount",void 0);Ye([f()],ze.prototype,"sourceTokenPriceInUSD",void 0);Ye([f()],ze.prototype,"toToken",void 0);Ye([f()],ze.prototype,"toTokenAmount",void 0);Ye([f()],ze.prototype,"toTokenPriceInUSD",void 0);Ye([f()],ze.prototype,"inputError",void 0);Ye([f()],ze.prototype,"gasPriceInUSD",void 0);Ye([f()],ze.prototype,"fetchError",void 0);ze=Ye([C("w3m-swap-view")],ze);const Eh=$`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var Gl=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ar=class extends T{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=k.state.data?.switchToChain,this.navigateTo=k.state.data?.navigateTo,this.navigateWithReplace=k.state.data?.navigateWithReplace,this.activeChain=P.state.activeChain}firstUpdated(){this.unsubscribe.push(P.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.activeChain?De.CHAIN_NAME_MAP[this.activeChain]:"current",i=this.switchToChain?De.CHAIN_NAME_MAP[this.switchToChain]:"supported";return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name="eth"></wui-visual>
          <wui-text variant="paragraph-500" color="fg-100" align="center">Switch to EVM</wui-text>
          <wui-text variant="small-400" color="fg-200" align="center">
            This feature is not supported on the ${e} chain. Switch to
            ${i} chain to proceed using it.
          </wui-text>
          <wui-button size="md" @click=${this.switchActiveChain.bind(this)}>Switch</wui-button>
        </wui-flex>
      </wui-flex>
    `}switchActiveChain(){this.switchToChain&&(P.setActiveChain(this.switchToChain),this.navigateTo?this.navigateWithReplace?k.replace(this.navigateTo):k.push(this.navigateTo):k.goBack())}};Ar.styles=Eh;Gl([c()],Ar.prototype,"activeChain",void 0);Ar=Gl([C("w3m-switch-active-chain-view")],Ar);const Ah=$`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var Ve=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let We=class extends T{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=U.state.approvalTransaction,this.swapTransaction=U.state.swapTransaction,this.sourceToken=U.state.sourceToken,this.sourceTokenAmount=U.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=U.state.sourceTokenPriceInUSD,this.toToken=U.state.toToken,this.toTokenAmount=U.state.toTokenAmount??"",this.toTokenPriceInUSD=U.state.toTokenPriceInUSD,this.caipNetwork=L.state.caipNetwork,this.balanceSymbol=R.state.balanceSymbol,this.gasPriceInUSD=U.state.gasPriceInUSD,this.inputError=U.state.inputError,this.loadingQuote=U.state.loadingQuote,this.loadingApprovalTransaction=U.state.loadingApprovalTransaction,this.loadingBuildTransaction=U.state.loadingBuildTransaction,this.loadingTransaction=U.state.loadingTransaction,this.unsubscribe.push(R.subscribeKey("balanceSymbol",e=>{this.balanceSymbol!==e&&k.goBack()}),L.subscribeKey("caipNetwork",e=>{this.caipNetwork!==e&&(this.caipNetwork=e)}),U.subscribe(e=>{this.approvalTransaction=e.approvalTransaction,this.swapTransaction=e.swapTransaction,this.sourceToken=e.sourceToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toToken=e.toToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.sourceTokenAmount=e.sourceTokenAmount??"",this.toTokenAmount=e.toTokenAmount??"",this.inputError=e.inputError,e.inputError&&k.goBack(),this.loadingQuote=e.loadingQuote,this.loadingApprovalTransaction=e.loadingApprovalTransaction,this.loadingBuildTransaction=e.loadingBuildTransaction,this.loadingTransaction=e.loadingTransaction}))}firstUpdated(){U.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(e=>e?.()),clearInterval(this.interval)}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{U.getApprovalLoadingState()||U.getTransaction()},1e4)}templateSwap(){const e=`${X.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`,i=`${X.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`,o=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,r=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),n=X.formatNumberToLocalString(o),a=X.formatNumberToLocalString(r),s=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return l`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${n}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${a}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${i}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${s}
            ?disabled=${s}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:l`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){k.goBack()}onSendTransaction(){this.approvalTransaction?U.sendTransactionForApproval(this.approvalTransaction):U.sendTransactionForSwap(this.swapTransaction)}};We.styles=Ah;Ve([f()],We.prototype,"interval",void 0);Ve([f()],We.prototype,"detailsOpen",void 0);Ve([f()],We.prototype,"approvalTransaction",void 0);Ve([f()],We.prototype,"swapTransaction",void 0);Ve([f()],We.prototype,"sourceToken",void 0);Ve([f()],We.prototype,"sourceTokenAmount",void 0);Ve([f()],We.prototype,"sourceTokenPriceInUSD",void 0);Ve([f()],We.prototype,"toToken",void 0);Ve([f()],We.prototype,"toTokenAmount",void 0);Ve([f()],We.prototype,"toTokenPriceInUSD",void 0);Ve([f()],We.prototype,"caipNetwork",void 0);Ve([f()],We.prototype,"balanceSymbol",void 0);Ve([f()],We.prototype,"gasPriceInUSD",void 0);Ve([f()],We.prototype,"inputError",void 0);Ve([f()],We.prototype,"loadingQuote",void 0);Ve([f()],We.prototype,"loadingApprovalTransaction",void 0);Ve([f()],We.prototype,"loadingBuildTransaction",void 0);Ve([f()],We.prototype,"loadingTransaction",void 0);We=Ve([C("w3m-swap-preview-view")],We);const $h=$`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var Ii=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let jt=class extends T{constructor(){super(),this.unsubscribe=[],this.targetToken=k.state.data?.target,this.sourceToken=U.state.sourceToken,this.sourceTokenAmount=U.state.sourceTokenAmount,this.toToken=U.state.toToken,this.myTokensWithBalance=U.state.myTokensWithBalance,this.popularTokens=U.state.popularTokens,this.searchValue="",this.unsubscribe.push(U.subscribe(e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.myTokensWithBalance=e.myTokensWithBalance}))}updated(){this.renderRoot?.querySelector(".suggested-tokens-container")?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),this.renderRoot?.querySelector(".tokens")?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();const e=this.renderRoot?.querySelector(".suggested-tokens-container"),i=this.renderRoot?.querySelector(".tokens");e?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),i?.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return l`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(e){this.targetToken==="sourceToken"?U.setSourceToken(e):(U.setToToken(e),this.sourceToken&&this.sourceTokenAmount&&U.swapTokens()),k.goBack()}templateSearchInput(){return l`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],i=this.popularTokens?this.popularTokens:[],o=this.filterTokensWithText(e,this.searchValue),r=this.filterTokensWithText(i,this.searchValue);return l`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${o?.length>0?l`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${o.map(n=>{const a=n.symbol===this.sourceToken?.symbol||n.symbol===this.toToken?.symbol;return l`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${n.symbol}"
                      name=${n.name}
                      ?disabled=${a}
                      symbol=${n.symbol}
                      price=${n?.price}
                      amount=${n?.quantity?.numeric}
                      imageSrc=${n.logoUri}
                      @click=${()=>{a||this.onSelectToken(n)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${r?.length>0?r.map(n=>l`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${n.symbol}"
                    name=${n.name}
                    symbol=${n.symbol}
                    imageSrc=${n.logoUri}
                    @click=${()=>this.onSelectToken(n)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const e=U.state.suggestedTokens?U.state.suggestedTokens.slice(0,8):null;return e?l`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${e.map(i=>l`
            <wui-token-button
              text=${i.symbol}
              imageSrc=${i.logoUri}
              @click=${()=>this.onSelectToken(i)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(e){this.searchValue=e.detail}handleSuggestedTokensScroll(){const e=this.renderRoot?.querySelector(".suggested-tokens-container");e&&(e.style.setProperty("--suggested-tokens-scroll--left-opacity",ur.interpolate([0,100],[0,1],e.scrollLeft).toString()),e.style.setProperty("--suggested-tokens-scroll--right-opacity",ur.interpolate([0,100],[0,1],e.scrollWidth-e.scrollLeft-e.offsetWidth).toString()))}handleTokenListScroll(){const e=this.renderRoot?.querySelector(".tokens");e&&(e.style.setProperty("--tokens-scroll--top-opacity",ur.interpolate([0,100],[0,1],e.scrollTop).toString()),e.style.setProperty("--tokens-scroll--bottom-opacity",ur.interpolate([0,100],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}filterTokensWithText(e,i){return e.filter(o=>`${o.symbol} ${o.name} ${o.address}`.toLowerCase().includes(i.toLowerCase()))}};jt.styles=$h;Ii([f()],jt.prototype,"interval",void 0);Ii([f()],jt.prototype,"targetToken",void 0);Ii([f()],jt.prototype,"sourceToken",void 0);Ii([f()],jt.prototype,"sourceTokenAmount",void 0);Ii([f()],jt.prototype,"toToken",void 0);Ii([f()],jt.prototype,"myTokensWithBalance",void 0);Ii([f()],jt.prototype,"popularTokens",void 0);Ii([f()],jt.prototype,"searchValue",void 0);jt=Ii([C("w3m-swap-select-token-view")],jt);const Rh=$`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var Ih=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Wa=class extends T{render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};Wa.styles=Rh;Wa=Ih([C("w3m-transactions-view")],Wa);var Oh=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const Nh=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let Js=class extends T{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Nh}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{M.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Js=Oh([C("w3m-what-is-a-network-view")],Js);var Ph=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const Dh=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let el=class extends T{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Dh}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){B.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),k.push("GetWallet")}};el=Ph([C("w3m-what-is-a-wallet-view")],el);var Lh=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let tl=class extends T{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${k.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};tl=Lh([C("w3m-what-is-a-buy-view")],tl);const Mh=$`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var la=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const Wh=6;let _i=class extends T{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=jn.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=k.state.data?.email,this.authConnector=H.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=!!this.timeoutTimeLeft,i=this.getFooterLabels(e);return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","xl","0","xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?l`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:l` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?l`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${i.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${i.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=jn.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=jn.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{this.loading||(this.otp=e.detail,this.authConnector&&this.otp.length===Wh&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(i){this.error=M.parseError(i),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!H.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),q.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){q.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};_i.styles=Mh;la([f()],_i.prototype,"loading",void 0);la([f()],_i.prototype,"timeoutTimeLeft",void 0);la([f()],_i.prototype,"error",void 0);_i=la([C("w3m-email-otp-widget")],_i);var ql=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ua=class extends _i{constructor(){super(),this.unsubscribe=[],this.smartAccountDeployed=R.state.smartAccountDeployed,this.onOtpSubmit=async e=>{try{if(this.authConnector){const i=L.checkIfSmartAccountEnabled();await this.authConnector.provider.connectOtp({otp:e}),B.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await oe.connectExternal(this.authConnector,this.authConnector.chain),B.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),R.state.allAccounts.length>1?k.push("SelectAddresses"):i&&!this.smartAccountDeployed?k.push("UpgradeToSmartAccount"):re.close()}}catch(i){throw B.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),i}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),B.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))},this.unsubscribe.push(R.subscribeKey("smartAccountDeployed",e=>{this.smartAccountDeployed=e}))}};ql([f()],Ua.prototype,"smartAccountDeployed",void 0);Ua=ql([C("w3m-email-verify-otp-view")],Ua);const Uh=$`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var Yl=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let $r=class extends T{constructor(){super(),this.email=k.state.data?.email,this.authConnector=H.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),B.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),B.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),k.replace("EmailVerifyOtp",{email:this.email})}catch{k.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),q.showSuccess("Code email resent")}}catch(e){q.showError(e)}finally{this.loading=!1}}};$r.styles=Uh;Yl([f()],$r.prototype,"loading",void 0);$r=Yl([C("w3m-email-verify-device-view")],$r);const jh=$`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var Kl=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const il=400,nl=360,Bh=64;let Rr=class extends T{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(re.subscribeKey("open",e=>{e||(this.onHideIframe(),k.popTransactionStack())}),re.subscribeKey("shake",e=>{e?this.iframe.style.animation="w3m-shake 500ms var(--wui-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block",this.bodyObserver=new ResizeObserver(e=>{const o=e?.[0]?.contentBoxSize?.[0]?.inlineSize;this.iframe.style.height=`${il}px`,o&&o<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width=`${nl}px`,this.iframe.style.left=`calc(50% - ${nl/2}px)`,this.iframe.style.top=`calc(50% - ${il/2}px + ${Bh/2}px)`,this.iframe.style.bottom="unset"),this.ready=!0,this.onShowIframe()}),this.bodyObserver.observe(window.document.body)}render(){return l`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)"}async syncTheme(){const e=H.getAuthConnector();if(e){const i=ut.getSnapshot().themeMode,o=ut.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:o,w3mThemeVariables:fr(o,i)})}}};Rr.styles=jh;Kl([f()],Rr.prototype,"ready",void 0);Rr=Kl([C("w3m-approve-transaction-view")],Rr);var zh=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ol=class extends T{render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${Te.SECURE_SITE_DASHBOARD}
          imageSrc=${Te.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};ol=zh([C("w3m-upgrade-wallet-view")],ol);var ks=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ir=class extends T{constructor(){super(...arguments),this.authConnector=H.getAuthConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.authConnector)try{this.loading=!0,await oe.setPreferredAccountType(pe.ACCOUNT_TYPES.SMART_ACCOUNT),this.loading=!1,Aa.navigateAfterPreferredAccountTypeSelect()}catch{q.showError("Error upgrading to smart account")}}}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{M.openHref(ns.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accent"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){k.push("Account")}};ks([f()],Ir.prototype,"authConnector",void 0);ks([f()],Ir.prototype,"loading",void 0);Ir=ks([C("w3m-upgrade-to-smart-account-view")],Ir);const Vh=$`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var Ts=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Do=class extends T{constructor(){super(...arguments),this.formRef=Wi(),this.initialEmail=k.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{e.key==="Enter"&&this.onSubmitEmail(e)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return l`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${Ui(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="neutral" fullWidth @click=${k.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="main"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const i=H.getAuthConnector();if(!i)throw new Error("w3m-update-email-wallet: Auth connector not found");const o=await i.provider.updateEmail({email:this.email});B.sendEvent({type:"track",event:"EMAIL_EDIT"}),o.action==="VERIFY_SECONDARY_OTP"?k.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email}):k.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(i){q.showError(i),this.loading=!1}}};Do.styles=Vh;Ts([f()],Do.prototype,"email",void 0);Ts([f()],Do.prototype,"loading",void 0);Do=Ts([C("w3m-update-email-wallet-view")],Do);var Fh=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let rl=class extends _i{constructor(){super(),this.email=k.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),B.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),k.replace("UpdateEmailSecondaryOtp",k.state.data))}catch(i){throw B.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),i}},this.onStartOver=()=>{k.replace("UpdateEmailWallet",k.state.data)}}};rl=Fh([C("w3m-update-email-primary-otp-view")],rl);var Hh=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let al=class extends _i{constructor(){super(),this.email=k.state.data?.newEmail,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),B.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),k.reset("Account"))}catch(i){throw B.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),i}},this.onStartOver=()=>{k.replace("UpdateEmailWallet",k.state.data)}}};al=Hh([C("w3m-update-email-secondary-otp-view")],al);const Zh=$`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Xl=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Or=class extends T{constructor(){super(...arguments),this.swapUnsupportedChain=k.state.data?.swapUnsupportedChain,this.disconecting=!1}render(){return l`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?l`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:l`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=L.getRequestedCaipNetworks(),i=L.state.approvedCaipNetworkIds,o=M.sortRequestedNetworks(i,e);return(this.swapUnsupportedChain?o.filter(n=>Te.SWAP_SUPPORTED_NETWORKS.includes(n.id)):o).map(n=>l`
        <wui-list-network
          imageSrc=${j(ge.getNetworkImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(n)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await oe.disconnect(),B.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),re.close()}catch{B.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),q.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const i=R.state.isConnected,o=L.state.approvedCaipNetworkIds,r=L.state.supportsAllNetworks,n=L.state.caipNetwork,a=k.state.data;i&&n?.id!==e.id?o?.includes(e.id)?(await L.switchActiveNetwork(e),await ys.onNetworkChange()):r&&k.push("SwitchNetwork",{...a,network:e}):i||(L.setActiveCaipNetwork(e),k.push("Connect"))}};Or.styles=Zh;Xl([f()],Or.prototype,"disconecting",void 0);Or=Xl([C("w3m-unsupported-chain-view")],Or);const Gh=$`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var Ko=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let wn=class extends T{constructor(){super(),this.unsubscribe=[],this.address=R.state.address,this.profileName=R.state.profileName,this.network=L.state.caipNetwork,this.preferredAccountType=R.state.preferredAccountType,this.unsubscribe.push(R.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):q.showError("Account not found")}),L.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=ge.getNetworkImage(this.network);return l` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${X.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${ut.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=L.getRequestedCaipNetworks(),i=L.checkIfSmartAccountEnabled(),o=L.state.caipNetwork;if(this.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT&&i)return o?l`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[ge.getNetworkImage(o)??""]}
      ></wui-compatible-network>`:null;const n=(e?.filter(a=>a?.imageId)?.slice(0,5)).map(ge.getNetworkImage).filter(Boolean);return l`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${n}
    ></wui-compatible-network>`}onReceiveClick(){k.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(M.copyToClopboard(this.address),q.showSuccess("Address copied"))}catch{q.showError("Failed to copy")}}};wn.styles=Gh;Ko([f()],wn.prototype,"address",void 0);Ko([f()],wn.prototype,"profileName",void 0);Ko([f()],wn.prototype,"network",void 0);Ko([f()],wn.prototype,"preferredAccountType",void 0);wn=Ko([C("w3m-wallet-receive-view")],wn);const qh=$`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Ql=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Nr=class extends T{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=R.state.preferredAccountType,this.unsubscribe.push(R.subscribeKey("preferredAccountType",e=>{this.preferredAccountType=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=L.getRequestedCaipNetworks(),i=L.state.approvedCaipNetworkIds,o=L.state.caipNetwork,r=L.checkIfSmartAccountEnabled();let n=M.sortRequestedNetworks(i,e);if(r&&this.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT){if(!o)return null;n=[o]}return n.map(a=>l`
        <wui-list-network
          imageSrc=${j(ge.getNetworkImage(a))}
          name=${a.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};Nr.styles=qh;Ql([f()],Nr.prototype,"preferredAccountType",void 0);Nr=Ql([C("w3m-wallet-compatible-networks-view")],Nr);const Yh=$`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var Oi=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Bt=class extends T{constructor(){super(),this.unsubscribe=[],this.token=be.state.token,this.sendTokenAmount=be.state.sendTokenAmount,this.receiverAddress=be.state.receiverAddress,this.receiverProfileName=be.state.receiverProfileName,this.loading=be.state.loading,this.gasPriceInUSD=be.state.gasPriceInUSD,this.gasPrice=be.state.gasPrice,this.message="Preview Send",this.fetchNetworkPrice(),this.unsubscribe.push(be.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),l` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
          .gasPrice=${this.gasPrice}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchNetworkPrice(){await U.getNetworkTokenPrice();const e=await U.getInitialGasPrice();e?.gasPrice&&e?.gasPriceInUSD&&(be.setGasPrice(e.gasPrice),be.setGasPriceInUsd(e.gasPriceInUSD))}onButtonClick(){k.push("WalletSendPreview")}getMessage(){this.message="Preview Send",this.receiverAddress&&!M.isAddress(this.receiverAddress,P.state.activeChain)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&this.token?.price&&(this.sendTokenAmount*this.token.price||(this.message="Incorrect Value")),this.token||(this.message="Select Token")}};Bt.styles=Yh;Oi([f()],Bt.prototype,"token",void 0);Oi([f()],Bt.prototype,"sendTokenAmount",void 0);Oi([f()],Bt.prototype,"receiverAddress",void 0);Oi([f()],Bt.prototype,"receiverProfileName",void 0);Oi([f()],Bt.prototype,"loading",void 0);Oi([f()],Bt.prototype,"gasPriceInUSD",void 0);Oi([f()],Bt.prototype,"gasPrice",void 0);Oi([f()],Bt.prototype,"message",void 0);Bt=Oi([C("w3m-wallet-send-view")],Bt);const Kh=$`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;var Xo=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let gn=class extends T{constructor(){super(),this.unsubscribe=[],this.tokenBalance=R.state.tokenBalance,this.search="",this.onDebouncedSearch=M.debounce(e=>{this.search=e}),this.unsubscribe.push(R.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return l`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.tokenBalance?.filter(e=>e.chainId===L.state.caipNetwork?.id),this.search?this.filteredTokens=this.tokenBalance?.filter(e=>e.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,l`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(e=>l`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`):l`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){k.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){be.setToken(e),be.setTokenAmount(void 0),k.goBack()}};gn.styles=Kh;Xo([f()],gn.prototype,"tokenBalance",void 0);Xo([f()],gn.prototype,"tokens",void 0);Xo([f()],gn.prototype,"filteredTokens",void 0);Xo([f()],gn.prototype,"search",void 0);gn=Xo([C("w3m-wallet-send-select-token-view")],gn);const Xh=$`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;var Ji=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ii=class extends T{constructor(){super(),this.unsubscribe=[],this.token=be.state.token,this.sendTokenAmount=be.state.sendTokenAmount,this.receiverAddress=be.state.receiverAddress,this.receiverProfileName=be.state.receiverProfileName,this.receiverProfileImageUrl=be.state.receiverProfileImageUrl,this.gasPriceInUSD=be.state.gasPriceInUSD,this.caipNetwork=L.state.caipNetwork,this.unsubscribe.push(be.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl}),L.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?X.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?X.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):X.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const i=this.token.price*this.sendTokenAmount;return l`<wui-text variant="paragraph-400" color="fg-100"
        >$${i.toFixed(2)}</wui-text
      >`}return null}onSendClick(){be.sendToken()}onCancelClick(){k.goBack()}};ii.styles=Xh;Ji([f()],ii.prototype,"token",void 0);Ji([f()],ii.prototype,"sendTokenAmount",void 0);Ji([f()],ii.prototype,"receiverAddress",void 0);Ji([f()],ii.prototype,"receiverProfileName",void 0);Ji([f()],ii.prototype,"receiverProfileImageUrl",void 0);Ji([f()],ii.prototype,"gasPriceInUSD",void 0);Ji([f()],ii.prototype,"caipNetwork",void 0);ii=Ji([C("w3m-wallet-send-preview-view")],ii);const Qh=$`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Jh=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ja=class extends T{render(){return l`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-wallet-login-list></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};ja.styles=Qh;ja=Jh([C("w3m-connect-wallets-view")],ja);const ef=$`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var tf=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ba=class extends T{render(){return l`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-social-login-list></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};Ba.styles=ef;Ba=tf([C("w3m-connect-socials-view")],Ba);const nf=$`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var lo=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Fi=class extends T{constructor(){super(),this.unsubscribe=[],this.socialProvider=R.state.socialProvider,this.socialWindow=R.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.authConnector=H.getAuthConnector(),this.handleSocialConnection=async e=>{if(e.data?.resultUri)if(e.origin===wi.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),R.setSocialWindow(void 0,P.state.activeChain)),this.connecting=!0,this.updateMessage();const i=e.data.resultUri;await this.authConnector.provider.connectSocial(i),this.socialProvider&&(xe.setConnectedSocialProvider(this.socialProvider),await oe.connectExternal(this.authConnector,this.authConnector.chain),B.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch{this.error=!0,this.updateMessage(),this.socialProvider&&B.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else k.goBack(),q.showError("Untrusted Origin"),this.socialProvider&&B.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})},this.unsubscribe.push(R.subscribe(e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow),e.address&&re.state.open&&re.close()})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener("message",this.handleSocialConnection,!1)}render(){return l`
      <wui-flex
        data-error=${j(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${j(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=ut.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}connectSocial(){const e=setInterval(()=>{this.socialWindow?.closed&&(!this.connecting&&k.state.view==="ConnectingSocial"&&k.goBack(),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};Fi.styles=nf;lo([f()],Fi.prototype,"socialProvider",void 0);lo([f()],Fi.prototype,"socialWindow",void 0);lo([f()],Fi.prototype,"error",void 0);lo([f()],Fi.prototype,"connecting",void 0);lo([f()],Fi.prototype,"message",void 0);Fi=lo([C("w3m-connecting-social-view")],Fi);const of=$`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;var Qo=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let mn=class extends T{constructor(){super(),this.usubscribe=[],this.address=R.state.address,this.profileImage=R.state.profileImage,this.profileName=R.state.profileName,this.accounts=R.state.allAccounts,this.usubscribe.push(R.subscribeKey("address",e=>{e?this.address=e:re.close()})),this.usubscribe.push(R.subscribeKey("profileImage",e=>{this.profileImage=e})),this.usubscribe.push(R.subscribeKey("profileName",e=>{this.profileName=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-profile-view: No account provided");const e=this.profileName?.split(".")[0];return l`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${j(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${e?X.getTruncateString({string:e,charsStart:20,charsEnd:0,truncate:"end"}):X.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>k.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return l`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map(e=>this.accountTemplate(e))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(e){R.setShouldUpdateToAddress(e.address,P.state.activeChain);const i=H.getAuthConnector();i&&(await i.provider.setPreferredAccount(e.type),await i.provider.connect())}accountTemplate(e){return l`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${e.address===this.address?"":l`<wui-button
            slot="action"
            textVariant="small-600"
            size="sm"
            variant="accent"
            @click=${()=>this.onSwitchAccount(e)}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.profileName?(M.copyToClopboard(this.profileName),q.showSuccess("Name copied")):this.address&&(M.copyToClopboard(this.address),q.showSuccess("Address copied"))}catch{q.showError("Failed to copy")}}};mn.styles=of;Qo([f()],mn.prototype,"address",void 0);Qo([f()],mn.prototype,"profileImage",void 0);Qo([f()],mn.prototype,"profileName",void 0);Qo([f()],mn.prototype,"accounts",void 0);mn=Qo([C("w3m-profile-view")],mn);const rf=$`
  input[type='checkbox'] {
    all: revert;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    accent-color: var(--wui-color-accent-100);
  }
`;var co=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Hi=class extends T{constructor(){super(),this.metadata=Y.state.metadata,this.allAccounts=R.state.allAccounts,this.selectedAccounts=R.state.allAccounts,this.selectAll=!0,this.approved=!1,this.isApproving=!1,this.getAddressTemplate=e=>{const i=this.selectedAccounts.some(o=>o.address===e.address);return l`<wui-list-account accountAddress="${e.address}" accountType="${e.type}">
      <input
        id="${e.address}"
        slot="action"
        type="checkbox"
        .checked="${i}"
        @change="${this.handleClick(e)}"
      />
    </wui-list-account>`},this.onSelectAll=e=>{const i=e.target.checked;this.selectAll=this.selectedAccounts.length===this.allAccounts.length,this.allAccounts.forEach(o=>{this.onSelect(o,i)})},this.onSelect=(e,i)=>{i?this.selectedAccounts.push(e):this.selectedAccounts=this.selectedAccounts.filter(o=>o.address!==e.address),this.selectedAccounts.length>0&&(this.selectAll=this.selectedAccounts.length===this.allAccounts.length)},R.subscribeKey("allAccounts",e=>{this.allAccounts=e})}render(){return l`
    <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
      <wui-banner-img imageSrc="${j(this.metadata?.icons[0])}" text="${j(this.metadata?.url)}" size="sm"></wui-banner>
    </wui-flex>
    <wui-flex .padding=${["0","xl","0","xl"]} flexDirection="row" justifyContent="space-between">
        <wui-text variant="paragraph-400" color="fg-200">Select all</wui-text>
        <input type="checkbox" .checked=${this.selectAll}  @click=${this.onSelectAll.bind(this)} />
    </wui-flex>
      <wui-flex flexDirection="column" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map(e=>this.getAddressTemplate(e))}
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="neutral"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="main"
          .disabled=${this.selectedAccounts.length===0}
          @click=${this.onContinue.bind(this)}
          ?loading=${this.isApproving}
        >
          ${this.isApproving?"Signing...":"Continue"}
        </wui-button>
      </wui-flex>
    `}handleClick(e){return i=>{const o=i.target;this.onSelect?.({...e},o?.checked)}}onContinue(){this.selectedAccounts.length>0?(this.isApproving=!0,R.setAllAccounts(this.selectedAccounts,P.state.activeChain),R.setShouldUpdateToAddress(this.selectedAccounts[0]?.address??"",P.state.activeChain),this.approved=!0,this.isApproving=!1,re.close()):this.onCancel()}async onCancel(){const{isConnected:e}=R.state;e?(await oe.disconnect(),re.close()):k.push("Connect")}disconnectedCallback(){super.disconnectedCallback(),this.approved||this.onCancel()}};Hi.styles=rf;co([f()],Hi.prototype,"allAccounts",void 0);co([f()],Hi.prototype,"selectedAccounts",void 0);co([f()],Hi.prototype,"selectAll",void 0);co([f()],Hi.prototype,"approved",void 0);co([f()],Hi.prototype,"isApproving",void 0);Hi=co([C("w3m-select-addresses-view")],Hi);const af=$`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var _s=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Lo=class extends T{constructor(){super(),this.metadata=Y.state.metadata,this.allAccounts=R.state.allAccounts||[],this.balances={},this.labels=R.state.addressLabels,this.currentAddress=R.state.address||"",this.connectedConnector=xe.getConnectedConnector(),this.shouldShowIcon=this.connectedConnector==="AUTH",this.caipNetwork=L.state.caipNetwork,R.subscribeKey("allAccounts",e=>{this.allAccounts=e})}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach(e=>{Pe.getBalance(e.address,this.caipNetwork?.id).then(i=>{let o=this.balances[e.address]||0;i.balances.length>0&&(o=i.balances.reduce((r,n)=>r+(n?.value||0),0)),this.balances[e.address]=o,this.requestUpdate()})})}getAddressIcon(e){return e==="smartAccount"?"lightbulb":"mail"}render(){return l`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${j(this.metadata?.icons[0])}
          text=${j(this.metadata?.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map((e,i)=>this.getAddressTemplate(e,i))}
      </wui-flex>
    `}getAddressTemplate(e,i){const o=this.labels?.get(e.address);return l`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${this.shouldShowIcon?l`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`:l`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${o||X.getTruncateString({string:e.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${typeof this.balances[e.address]=="number"?`$${this.balances[e.address]?.toFixed(2)}`:l`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${e.address?.toLowerCase()===this.currentAddress?.toLowerCase()?"":l`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${i}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(e){R.setShouldUpdateToAddress(e,P.state.activeChain),re.close()}};Lo.styles=af;_s([f()],Lo.prototype,"allAccounts",void 0);_s([f()],Lo.prototype,"balances",void 0);Lo=_s([C("w3m-switch-address-view")],Lo);const sf=$`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`;var Jo=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let vn=class extends T{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=R.state.socialProvider,this.uri=R.state.farcasterUrl,this.ready=!1,this.loading=!1,this.authConnector=H.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(R.subscribeKey("farcasterUrl",e=>{e&&(this.uri=e,this.connectFarcaster())}),R.subscribeKey("socialProvider",e=>{e&&(this.socialProvider=e)})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l`${this.platformTemplate()}`}platformTemplate(){return M.isMobile()?l`${this.mobileTemplate()}`:l`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?l`${this.loadingTemplate()}`:l`${this.qrTemplate()}`}qrTemplate(){return l` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","xl","xl","xl"]}
      gap="xl"
    >
      <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="paragraph-500" color="fg-100">
        Scan this QR Code with your phone
      </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return l` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          backgroundColor="error-100"
          background="opaque"
          iconColor="error-100"
          icon="close"
          size="sm"
          border
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=ut.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await this.authConnector?.provider.connectFarcaster(),this.socialProvider&&xe.setConnectedSocialProvider(this.socialProvider),this.loading=!0,await oe.connectExternal(this.authConnector,this.authConnector.chain),this.loading=!1,re.close()}catch(e){k.goBack(),q.showError(e)}}mobileLinkTemplate(){return l`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&M.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},0))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40;return l` <wui-qr-code
      size=${e}
      theme=${ut.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return l`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(M.copyToClopboard(this.uri),q.showSuccess("Link copied"))}catch{q.showError("Failed to copy")}}};vn.styles=sf;Jo([f()],vn.prototype,"socialProvider",void 0);Jo([f()],vn.prototype,"uri",void 0);Jo([f()],vn.prototype,"ready",void 0);Jo([f()],vn.prototype,"loading",void 0);vn=Jo([C("w3m-connecting-farcaster-view")],vn);const lf=$`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function Jl(t){const{connectors:e}=H.state,i=e.filter(n=>n.type==="ANNOUNCED").reduce((n,a)=>(a.info?.rdns&&(n[a.info.rdns]=!0),n),{});return t.map(n=>({...n,installed:!!n.rdns&&!!i[n.rdns??""]})).sort((n,a)=>Number(a.installed)-Number(n.installed))}var er=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const sl="local-paginator";let bn=class extends T{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!K.state.wallets.length,this.wallets=K.state.wallets,this.recommended=K.state.recommended,this.featured=K.state.featured,this.unsubscribe.push(K.subscribeKey("wallets",e=>this.wallets=e),K.subscribeKey("recommended",e=>this.recommended=e),K.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return l`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){const e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await K.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,i){return[...Array(e)].map(()=>l`
        <wui-card-select-loader type="wallet" id=${j(i)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return Jl(e).map(o=>l`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(o)}
          .wallet=${o}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:i,featured:o,count:r}=K.state,n=window.innerWidth<352?3:4,a=e.length+i.length;let S=Math.ceil(a/n)*n-a+n;return S-=e.length?o.length%n:0,r===0&&o.length>0?null:r===0||[...o,...e,...i].length<r?this.shimmerTemplate(S,sl):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${sl}`);e&&(this.paginationObserver=new IntersectionObserver(([i])=>{if(i?.isIntersecting&&!this.initial){const{page:o,count:r,wallets:n}=K.state;n.length<r&&K.fetchWallets({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const i=H.getConnector(e.id,e.rdns);i?k.push("ConnectingExternal",{connector:i}):k.push("ConnectingWalletConnect",{wallet:e})}};bn.styles=lf;er([f()],bn.prototype,"initial",void 0);er([f()],bn.prototype,"wallets",void 0);er([f()],bn.prototype,"recommended",void 0);er([f()],bn.prototype,"featured",void 0);bn=er([C("w3m-all-wallets-list")],bn);const cf=$`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    will-change: background-color, color;
    outline: none;
    border: none;
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`;var tr=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let xn=class extends T{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){return l`
      <button ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color="inherit">${this.wallet?.name}</wui-text>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():l`
      <wui-wallet-image
        size="md"
        imageSrc=${j(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=ge.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await ge.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};xn.styles=cf;tr([f()],xn.prototype,"visible",void 0);tr([f()],xn.prototype,"imageSrc",void 0);tr([f()],xn.prototype,"imageLoading",void 0);tr([c()],xn.prototype,"wallet",void 0);xn=tr([C("w3m-all-wallets-list-item")],xn);const uf=$`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var Ss=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Mo=class extends T{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?l`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()!==this.prevQuery.trim()&&(this.prevQuery=this.query,this.loading=!0,await K.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=K.state,i=Jl(e);return e.length?l`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${i.map(o=>l`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(o)}
              .wallet=${o}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:l`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const i=H.getConnector(e.id,e.rdns);i?k.push("ConnectingExternal",{connector:i}):k.push("ConnectingWalletConnect",{wallet:e})}};Mo.styles=uf;Ss([f()],Mo.prototype,"loading",void 0);Ss([c()],Mo.prototype,"query",void 0);Mo=Ss([C("w3m-all-wallets-search")],Mo);var ca=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Wo=class extends T{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(oe.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return l`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(i=>i==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:i==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:i==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:i==="web"?{label:"Webapp",icon:"browser",platform:"web"}:i==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:i})=>i),e}onTabChange(e){const i=this.platformTabs[e];i&&this.onSelectPlatfrom?.(i)}};ca([c({type:Array})],Wo.prototype,"platforms",void 0);ca([c()],Wo.prototype,"onSelectPlatfrom",void 0);ca([f()],Wo.prototype,"buffering",void 0);Wo=ca([C("w3m-connecting-header")],Wo);var df=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ll=class extends lt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),B.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=H.state,i=e.find(o=>o.type==="ANNOUNCED"&&o.info?.rdns===this.wallet?.rdns||o.type==="INJECTED"||o.name===this.wallet?.name);if(i)await oe.connectExternal(i,i.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");re.close(),B.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){B.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};ll=df([C("w3m-connecting-wc-browser")],ll);var pf=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let cl=class extends lt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),B.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:i}=this.wallet,{redirect:o,href:r}=M.formatNativeUrl(e,this.uri);oe.setWcLinking({name:i,href:r}),oe.setRecentWallet(this.wallet),M.openHref(o,"_blank")}catch{this.error=!0}}};cl=pf([C("w3m-connecting-wc-desktop")],cl);var hf=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ul=class extends lt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),B.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:i}=this.wallet,{redirect:o,href:r}=M.formatNativeUrl(e,this.uri);oe.setWcLinking({name:i,href:r}),oe.setRecentWallet(this.wallet),M.openHref(o,"_self")}catch{this.error=!0}}onBuffering(){const e=M.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(oe.setBuffering(!0),setTimeout(()=>{oe.setBuffering(!1)},5e3))}};ul=hf([C("w3m-connecting-wc-mobile")],ul);const ff=$`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var wf=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let za=class extends lt{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),B.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},0))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,i=this.wallet?this.wallet.name:void 0;return oe.setWcLinking(void 0),oe.setRecentWallet(this.wallet),l` <wui-qr-code
      size=${e}
      theme=${ut.state.themeMode}
      uri=${this.uri}
      imageSrc=${j(ge.getWalletImage(this.wallet))}
      alt=${j(i)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return l`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};za.styles=ff;za=wf([C("w3m-connecting-wc-qrcode")],za);var gf=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let dl=class extends T{constructor(){if(super(),this.wallet=k.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");B.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${j(ge.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};dl=gf([C("w3m-connecting-wc-unsupported")],dl);var mf=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let pl=class extends lt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",B.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:i}=this.wallet,{redirect:o,href:r}=M.formatUniversalUrl(e,this.uri);oe.setWcLinking({name:i,href:r}),oe.setRecentWallet(this.wallet),M.openHref(o,"_blank")}catch{this.error=!0}}};pl=mf([C("w3m-connecting-wc-web")],pl);const vf=$`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`;var mt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const bf=Te.CONVERT_SLIPPAGE_TOLERANCE;let et=class extends T{constructor(){super(),this.unsubscribe=[],this.networkName=L.state.caipNetwork?.name,this.detailsOpen=!1,this.sourceToken=U.state.sourceToken,this.toToken=U.state.toToken,this.toTokenAmount=U.state.toTokenAmount,this.sourceTokenPriceInUSD=U.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=U.state.toTokenPriceInUSD,this.gasPriceInUSD=U.state.gasPriceInUSD,this.priceImpact=U.state.priceImpact,this.maxSlippage=U.state.maxSlippage,this.networkTokenSymbol=U.state.networkTokenSymbol,this.inputError=U.state.inputError,this.unsubscribe.push(U.subscribe(e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.gasPriceInUSD=e.gasPriceInUSD,this.priceImpact=e.priceImpact,this.maxSlippage=e.maxSlippage,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError}))}render(){const e=this.toTokenAmount&&this.maxSlippage?we.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;const i=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return l`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${X.formatNumberToLocalString(i,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${X.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?l`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Network cost
                        </wui-text>
                        <w3m-tooltip-trigger
                          text=${`Network cost is paid in ${this.networkTokenSymbol} on the ${this.networkName} network in order to execute transaction.`}
                        >
                          <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                        </w3m-tooltip-trigger>
                      </wui-flex>
                      <wui-text variant="small-400" color="fg-100">
                        $${X.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?l` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${X.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?l`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${e?`Transaction will be reversed if you receive less than ${X.formatNumberToLocalString(e,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${X.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${bf}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};et.styles=[vf];mt([f()],et.prototype,"networkName",void 0);mt([c()],et.prototype,"detailsOpen",void 0);mt([f()],et.prototype,"sourceToken",void 0);mt([f()],et.prototype,"toToken",void 0);mt([f()],et.prototype,"toTokenAmount",void 0);mt([f()],et.prototype,"sourceTokenPriceInUSD",void 0);mt([f()],et.prototype,"toTokenPriceInUSD",void 0);mt([f()],et.prototype,"gasPriceInUSD",void 0);mt([f()],et.prototype,"priceImpact",void 0);mt([f()],et.prototype,"maxSlippage",void 0);mt([f()],et.prototype,"networkTokenSymbol",void 0);mt([f()],et.prototype,"inputError",void 0);et=mt([C("w3m-swap-details")],et);const xf=$`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var Ht=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const yf=5e-5;let ft=class extends T{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const e=this.marketValue||"0",i=we.bigNumber(e).isGreaterThan("0");return l`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${i?`$${X.formatNumberToLocalString(this.marketValue,3)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){return Bc.numericInputKeyDown(e,this.value,i=>this.onSetAmount?.(this.target,i))}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;const i=e.target.value.replace(/[^0-9.]/gu,"");i===","||i==="."?this.onSetAmount(this.target,"0."):i.endsWith(",")?this.onSetAmount(this.target,i.replace(",",".")):this.onSetAmount(this.target,i)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){return this.token?l`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:l` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){const e=we.multiply(this.balance,this.price),i=e?e?.isGreaterThan(yf):!1;return l`
      ${i?l`<wui-text variant="small-400" color="fg-200">
            ${X.formatNumberToLocalString(this.balance,3)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(i):null}
    `}tokenActionButtonTemplate(e){return e?l` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:l` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){B.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),k.push("SwapSelectToken",{target:this.target})}onBuyToken(){k.push("OnRampProviders")}};ft.styles=[xf];Ht([c()],ft.prototype,"focused",void 0);Ht([c()],ft.prototype,"balance",void 0);Ht([c()],ft.prototype,"value",void 0);Ht([c()],ft.prototype,"price",void 0);Ht([c()],ft.prototype,"marketValue",void 0);Ht([c()],ft.prototype,"disabled",void 0);Ht([c()],ft.prototype,"target",void 0);Ht([c()],ft.prototype,"token",void 0);Ht([c()],ft.prototype,"onSetAmount",void 0);Ht([c()],ft.prototype,"onSetMaxValue",void 0);ft=Ht([C("w3m-swap-input")],ft);const Cf=$`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`;var ec=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Pr=class extends T{constructor(){super(...arguments),this.target="sourceToken"}render(){return l`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return l`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};Pr.styles=[Cf];ec([c()],Pr.prototype,"target",void 0);Pr=ec([C("w3m-swap-input-skeleton")],Pr);const kf=$`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var ci=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const Tf=["Swap","SwapSelectToken","SwapPreview"];function Ta(){const t=k.state.data?.connector?.name,e=k.state.data?.wallet?.name,i=k.state.data?.network?.name,o=e??t,r=H.getConnectors();return{Connect:`Connect ${r.length===1&&r[0]?.id==="w3m-email"?"Email":""} Wallet`,ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:o??"Connect Wallet",ConnectingWalletConnect:o??"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:o?`Get ${o}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Profile:void 0,SelectAddresses:"Select accounts",SwitchNetwork:i??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:R.state.socialProvider?R.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain"}}let Rt=class extends T{constructor(){super(),this.unsubscribe=[],this.heading=Ta()[k.state.view],this.network=L.state.caipNetwork,this.buffering=!1,this.showBack=!1,this.isSiweEnabled=Y.state.isSiweEnabled,this.prevHistoryLength=1,this.view=k.state.view,this.viewDirection="",this.headerText=Ta()[k.state.view],this.unsubscribe.push(k.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.headerText=Ta()[e]},wi.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),oe.subscribeKey("buffering",e=>this.buffering=e),L.subscribeKey("caipNetwork",e=>this.network=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()} ${this.closeButtonTemplate()}
      </wui-flex>
    `}onWalletHelp(){B.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),k.push("WhatIsAWallet")}async onClose(){if(this.isSiweEnabled){const{SIWEController:e}=await ts(async()=>{const{SIWEController:r}=await import("./index-CpBfwu2u.js");return{SIWEController:r}},__vite__mapDeps([0,1,2,3])),i=k.state.view==="ApproveTransaction";e.state.status!=="success"&&i?k.popTransactionStack(!0):re.close()}else re.close()}closeButtonTemplate(){const e=k.state.view==="ConnectingSiwe";return this.isSiweEnabled&&e?l`<div style="width:40px" />`:l`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=Tf.includes(this.view);return l`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100">${this.headerText}</wui-text>
        ${e?l`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}dynamicButtonTemplate(){const{view:e}=k.state,i=e==="Connect",o=e==="ApproveTransaction",r=e==="UpgradeToSmartAccount",n=e==="ConnectingSiwe",a=e==="Account",s=o||r||n;return a?l`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${this.network?.name}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${j(ge.getNetworkImage(this.network))}
      ></wui-select>`:this.showBack&&!s?l`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:l`<wui-icon-link
      data-hidden=${!i}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(B.sendEvent({type:"track",event:"CLICK_NETWORKS"}),k.push("Networks"))}isAllowedNetworkSwitch(){const e=L.getRequestedCaipNetworks(),i=e?e.length>1:!1,o=e?.find(({id:r})=>r===this.network?.id);return i||!o}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=k.state;let i=wi.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(i=wi.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=i}async onHistoryChange(){const{history:e}=k.state,i=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&i?(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){k.goBack()}};Rt.styles=kf;ci([f()],Rt.prototype,"heading",void 0);ci([f()],Rt.prototype,"network",void 0);ci([f()],Rt.prototype,"buffering",void 0);ci([f()],Rt.prototype,"showBack",void 0);ci([f()],Rt.prototype,"isSiweEnabled",void 0);ci([f()],Rt.prototype,"prevHistoryLength",void 0);ci([f()],Rt.prototype,"view",void 0);ci([f()],Rt.prototype,"viewDirection",void 0);ci([f()],Rt.prototype,"headerText",void 0);Rt=ci([C("w3m-header")],Rt);var tc=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Va=class extends T{constructor(){super(...arguments),this.data=[]}render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>l`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(i=>l`<wui-visual name=${i}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};tc([c({type:Array})],Va.prototype,"data",void 0);Va=tc([C("w3m-help-widget")],Va);const _f=$`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var vt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let tt=class extends T{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return l`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?l`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:l`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await K._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return l`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return l`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return l`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};tt.styles=[_f];vt([c({type:Boolean})],tt.prototype,"disabled",void 0);vt([c()],tt.prototype,"color",void 0);vt([c()],tt.prototype,"label",void 0);vt([c()],tt.prototype,"purchaseValue",void 0);vt([c()],tt.prototype,"purchaseCurrency",void 0);vt([c()],tt.prototype,"date",void 0);vt([c({type:Boolean})],tt.prototype,"completed",void 0);vt([c({type:Boolean})],tt.prototype,"inProgress",void 0);vt([c({type:Boolean})],tt.prototype,"failed",void 0);vt([c()],tt.prototype,"onClick",void 0);vt([c()],tt.prototype,"symbol",void 0);vt([c()],tt.prototype,"icon",void 0);tt=vt([C("w3m-onramp-activity-item")],tt);const Sf=$`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var Nn=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Si=class extends T{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=Re.state.currencyImages,this.tokenImages=Re.state.tokenImages,this.unsubscribe.push(ke.subscribeKey("purchaseCurrency",e=>{!e||this.type==="Fiat"||(this.selectedCurrency=this.formatPurchaseCurrency(e))}),ke.subscribeKey("paymentCurrency",e=>{!e||this.type==="Token"||(this.selectedCurrency=this.formatPaymentCurrency(e))}),ke.subscribe(e=>{this.type==="Fiat"?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)}),Re.subscribe(e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}}))}firstUpdated(){ke.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.selectedCurrency?.symbol||"",i=this.currencyImages[e]||this.tokenImages[e];return l`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?l` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>re.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${j(i)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:l`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};Si.styles=Sf;Nn([c({type:String})],Si.prototype,"type",void 0);Nn([c({type:Number})],Si.prototype,"value",void 0);Nn([f()],Si.prototype,"currencies",void 0);Nn([f()],Si.prototype,"selectedCurrency",void 0);Nn([f()],Si.prototype,"currencyImages",void 0);Nn([f()],Si.prototype,"tokenImages",void 0);Si=Nn([C("w3m-onramp-input")],Si);const Ef=$`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var en=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ni=class extends T{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return l`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${j(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?l`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:l`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){const i=L.getRequestedCaipNetworks()?.filter(o=>o?.imageId)?.slice(0,5);return l`
      <wui-flex class="networks">
        ${i?.map(o=>l`
            <wui-flex class="network-icon">
              <wui-image src=${j(ge.getNetworkImage(o))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};ni.styles=[Ef];en([c({type:Boolean})],ni.prototype,"disabled",void 0);en([c()],ni.prototype,"color",void 0);en([c()],ni.prototype,"name",void 0);en([c()],ni.prototype,"label",void 0);en([c()],ni.prototype,"feeRange",void 0);en([c({type:Boolean})],ni.prototype,"loading",void 0);en([c()],ni.prototype,"onClick",void 0);ni=en([C("w3m-onramp-provider-item")],ni);const Af=$`
  wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var $f=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Fa=class extends T{render(){const{termsConditionsUrl:e,privacyPolicyUrl:i}=Y.state;return!e&&!i?null:l`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:i}=Y.state;return e&&i?"and":""}termsTemplate(){const{termsConditionsUrl:e}=Y.state;return e?l`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=Y.state;return e?l`<a href=${e}>Privacy Policy</a>`:null}};Fa.styles=[Af];Fa=$f([C("w3m-legal-footer")],Fa);const Rf=$`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var ic=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Dr=class extends T{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:i,play_store:o,chrome_store:r,homepage:n}=this.wallet,a=M.isMobile(),s=M.isIos(),S=M.isAndroid(),I=[i,o,n,r].filter(Boolean).length>1,V=X.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return I&&!a?l`
        <wui-cta-button
          label=${`Don't have ${V}?`}
          buttonLabel="Get"
          @click=${()=>k.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!I&&n?l`
        <wui-cta-button
          label=${`Don't have ${V}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&s?l`
        <wui-cta-button
          label=${`Don't have ${V}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&S?l`
        <wui-cta-button
          label=${`Don't have ${V}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&M.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&M.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&M.openHref(this.wallet.homepage,"_blank")}};Dr.styles=[Rf];ic([c({type:Object})],Dr.prototype,"wallet",void 0);Dr=ic([C("w3m-mobile-download-links")],Dr);const If=$`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var Of=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ha=class extends T{render(){const{termsConditionsUrl:e,privacyPolicyUrl:i}=Y.state;return!e&&!i?null:l`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return l` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){B.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT}}),k.push("WhatIsABuy")}};Ha.styles=[If];Ha=Of([C("w3m-onramp-providers-footer")],Ha);const Nf=$`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var nc=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const Pf={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Lr=class extends T{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=q.state.open,this.unsubscribe.push(q.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:i}=q.state,o=Pf[i];return l`
      <wui-snackbar
        message=${e}
        backgroundColor=${o?.backgroundColor}
        iconColor=${o?.iconColor}
        icon=${o?.icon}
        .loading=${i==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>q.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Lr.styles=Nf;nc([f()],Lr.prototype,"open",void 0);Lr=nc([C("w3m-snackbar")],Lr);const Df=$`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;var ir=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let yn=class extends T{constructor(){super(),this.unsubscribe=[],this.formRef=Wi(),this.connectors=H.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(H.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{e.key==="Enter"&&this.onSubmitEmail(e)})}render(){const e=this.connectors.find(o=>o.type==="AUTH"),i=this.connectors.length>1;return e?.email?l`
      <form ${Ui(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e.socials||!i?null:l`<wui-flex .padding=${["xxs","0","0","0"]}>
            <wui-separator text="or"></wui-separator>
          </wui-flex>`}
    `:null}submitButtonTemplate(){return!this.loading&&this.email.length>3?l`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(![De.CHAIN.EVM,De.CHAIN.SOLANA].find(r=>r===P.state.activeChain)){k.push("SwitchActiveChain",{switchToChain:De.CHAIN.EVM});return}try{if(this.loading)return;this.loading=!0,e.preventDefault();const r=H.getAuthConnector();if(!r)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:n}=await r.provider.connectEmail({email:this.email});B.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),n==="VERIFY_OTP"?(B.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),k.push("EmailVerifyOtp",{email:this.email})):n==="VERIFY_DEVICE"&&k.push("EmailVerifyDevice",{email:this.email})}catch(r){M.parseError(r)?.includes("Invalid email")?this.error="Invalid email. Try again.":q.showError(r)}finally{this.loading=!1}}onFocusEvent(){B.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};yn.styles=Df;ir([f()],yn.prototype,"connectors",void 0);ir([f()],yn.prototype,"email",void 0);ir([f()],yn.prototype,"loading",void 0);ir([f()],yn.prototype,"error",void 0);yn=ir([C("w3m-email-login-widget")],yn);const Lf=$`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var Pn=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ei=class extends T{constructor(){super(),this.unsubscribe=[],this.address=R.state.address,this.profileImage=R.state.profileImage,this.profileName=R.state.profileName,this.disconnecting=!1,this.balance=R.state.balance,this.balanceSymbol=R.state.balanceSymbol,this.unsubscribe.push(R.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):this.disconnecting||q.showError("Account not found")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");return l`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${P.state.activeChain===De.CHAIN.EVM?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${M.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.onrampTemplate()} ${this.swapsTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){const{enableOnramp:e}=Y.state;return e?l`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}activityTemplate(){const e=P.state.activeChain===De.CHAIN.SOLANA;return l` <wui-list-item
      iconVariant="blue"
      icon="clock"
      iconSize="sm"
      ?chevron=${!e}
      ?disabled=${e}
      @click=${this.onTransactions.bind(this)}
    >
      <wui-text variant="paragraph-500" color="fg-100" ?disabled=${e}> Activity </wui-text>
      ${e?l`<wui-tag variant="main">Coming soon</wui-tag>`:""}
    </wui-list-item>`}swapsTemplate(){const{enableSwaps:e}=Y.state;return!e||P.state.activeChain===De.CHAIN.SOLANA?null:l`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `}authCardTemplate(){const e=xe.getConnectedConnector(),i=H.getAuthConnector(),{origin:o}=location;return!i||e!=="AUTH"||o.includes(Te.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){k.push("SwitchAddress")}handleClickPay(){k.push("OnRampProviders")}handleClickSwap(){k.push("Swap")}explorerBtnTemplate(){return R.state.addressExplorerUrl?l`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return l`
      <wui-avatar
        alt=${j(this.address)}
        address=${j(this.address)}
        imageSrc=${j(this.profileImage===null?void 0:this.profileImage)}
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?X.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):X.getTruncateString({string:this.address?this.address:"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=R.state.allAccounts?.find(o=>o.address===this.address),i=R.state.addressLabels.get(this.address);return l`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${j(this.address)}
        icon="${e?.type===pe.ACCOUNT_TYPES.SMART_ACCOUNT&&P.state.activeChain===De.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${j(this.profileImage?this.profileImage:void 0)}
        profileName=${j(i||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}onCopyAddress(){try{this.address&&(M.copyToClopboard(this.address),q.showSuccess("Address copied"))}catch{q.showError("Failed to copy")}}onTransactions(){B.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT}}),k.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await oe.disconnect(),B.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),re.close()}catch{B.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),q.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=R.state.addressExplorerUrl;e&&M.openHref(e,"_blank")}onGoToUpgradeView(){B.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),k.push("UpgradeEmailWallet")}};Ei.styles=Lf;Pn([f()],Ei.prototype,"address",void 0);Pn([f()],Ei.prototype,"profileImage",void 0);Pn([f()],Ei.prototype,"profileName",void 0);Pn([f()],Ei.prototype,"disconnecting",void 0);Pn([f()],Ei.prototype,"balance",void 0);Pn([f()],Ei.prototype,"balanceSymbol",void 0);Ei=Pn([C("w3m-account-default-widget")],Ei);const Mf=$`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var ui=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const Wf=3,Uf=48,jf=430;let It=class extends T{constructor(){super(),this.unsubscribe=[],this.address=R.state.address,this.profileImage=R.state.profileImage,this.profileName=R.state.profileName,this.smartAccountDeployed=R.state.smartAccountDeployed,this.network=L.state.caipNetwork,this.currentTab=R.state.currentTab,this.tokenBalance=R.state.tokenBalance,this.preferredAccountType=R.state.preferredAccountType,this.unsubscribe.push(R.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed,this.preferredAccountType=e.preferredAccountType):re.close()}),L.subscribeKey("caipNetwork",e=>{this.network=e})),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){R.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=ge.getNetworkImage(this.network);return l`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.network&&l`<wui-network-icon .network=${this.network}></wui-network-icon>`}
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${j(this.address)}
        networkSrc=${j(e)}
        icon="chevronBottom"
        avatarSrc=${j(this.profileImage?this.profileImage:void 0)}
        profileName=${this.profileName}
        data-testid="w3m-profile-button"
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <w3m-tooltip-trigger text="Buy">
          <wui-icon-button
            data-testid="wallet-features-onramp-button"
            @click=${this.onBuyClick.bind(this)}
            icon="card"
          ></wui-icon-button>
        </w3m-tooltip-trigger>
        ${this.swapsTemplate()}
        <w3m-tooltip-trigger text="Receive">
          <wui-icon-button
            data-testid="wallet-features-receive-button"
            @click=${this.onReceiveClick.bind(this)}
            icon="arrowBottomCircle"
          >
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Send">
          <wui-icon-button
            data-testid="wallet-features-send-button"
            @click=${this.onSendClick.bind(this)}
            icon="send"
          ></wui-icon-button>
        </w3m-tooltip-trigger>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${M.isMobile()&&window.innerWidth<jf?`${(window.innerWidth-Uf)/Wf}px`:"104px"}
        .tabs=${wi.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}swapsTemplate(){const{enableSwaps:e}=Y.state;return e?l`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swap-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval(()=>R.fetchTokenBalance(),1e4)}listContentTemplate(){return this.currentTab===0?l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?l`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:this.currentTab===2?l`<w3m-account-activity-widget></w3m-account-activity-widget>`:l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const e=M.calculateBalance(this.tokenBalance),{dollars:i="0",pennies:o="00"}=M.formatTokenBalance(e);return l`<wui-balance dollars=${i} pennies=${o}></wui-balance>`}return l`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){return!L.checkIfSmartAccountEnabled()||this.preferredAccountType!==pe.ACCOUNT_TYPES.EOA||this.smartAccountDeployed?null:l` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){R.setCurrentTab(e)}onProfileButtonClick(){k.push("Profile")}onBuyClick(){k.push("OnRampProviders")}onSwapClick(){this.network?.id&&!Te.SWAP_SUPPORTED_NETWORKS.includes(this.network?.id)?k.push("UnsupportedChain",{swapUnsupportedChain:!0}):(B.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.id||"",isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT}}),k.push("Swap"))}onReceiveClick(){k.push("WalletReceive")}onSendClick(){B.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.id||"",isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT}}),k.push("WalletSend")}onUpdateToSmartAccount(){k.push("UpgradeToSmartAccount")}};It.styles=Mf;ui([f()],It.prototype,"watchTokenBalance",void 0);ui([f()],It.prototype,"address",void 0);ui([f()],It.prototype,"profileImage",void 0);ui([f()],It.prototype,"profileName",void 0);ui([f()],It.prototype,"smartAccountDeployed",void 0);ui([f()],It.prototype,"network",void 0);ui([f()],It.prototype,"currentTab",void 0);ui([f()],It.prototype,"tokenBalance",void 0);ui([f()],It.prototype,"preferredAccountType",void 0);It=ui([C("w3m-account-wallet-features-widget")],It);const Bf=$`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var zf=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Za=class extends T{render(){return l`<w3m-activity-list page="account"></w3m-activity-list>`}};Za.styles=Bf;Za=zf([C("w3m-account-activity-widget")],Za);const Vf=$`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Ff=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ga=class extends T{render(){return l`${this.nftTemplate()}`}nftTemplate(){return l` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">Coming soon</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive funds</wui-link>
    </wui-flex>`}onReceiveClick(){k.push("WalletReceive")}};Ga.styles=Vf;Ga=Ff([C("w3m-account-nfts-widget")],Ga);const Hf=$`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var oc=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Mr=class extends T{constructor(){super(),this.unsubscribe=[],this.tokenBalance=R.state.tokenBalance,this.unsubscribe.push(R.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?l`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:l` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){return this.tokenBalance?.map(e=>l`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){k.push("WalletReceive")}onBuyClick(){B.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT}}),k.push("OnRampProviders")}};Mr.styles=Hf;oc([f()],Mr.prototype,"tokenBalance",void 0);Mr=oc([C("w3m-account-tokens-widget")],Mr);const Zf=$`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var Dn=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const dr="last-transaction",Gf=7;let Ai=class extends T{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.address=R.state.address,this.transactionsByYear=Be.state.transactionsByYear,this.loading=Be.state.loading,this.empty=Be.state.empty,this.next=Be.state.next,Be.clearCursor(),this.unsubscribe.push(R.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,Be.resetTransactions(),Be.fetchTransactions(e.address))}),L.subscribeKey("caipNetwork",()=>{this.updateTransactionView()}),Be.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){const e=L.state.caipNetwork?.id;Be.state.lastNetworkInView!==e&&(Be.resetTransactions(),Be.fetchTransactions(this.address)),Be.setLastNetworkInView(e)}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(i=>{const o=parseInt(i,10),r=new Array(12).fill(null).map((n,a)=>{const s=nn.getTransactionGroupTitle(o,a),S=this.transactionsByYear[o]?.[a];return{groupTitle:s,transactions:S}}).filter(({transactions:n})=>n).reverse();return r.map(({groupTitle:n,transactions:a},s)=>{const S=s===r.length-1;return a?l`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${S?"true":"false"}"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${n}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(a,S)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,i){const{date:o,descriptions:r,direction:n,isAllNFT:a,images:s,status:S,transfers:I,type:V}=this.getTransactionListItemProps(e),F=I?.length>1;return I?.length===2&&!a?l`
        <wui-transaction-list-item
          date=${o}
          .direction=${n}
          id=${i&&this.next?dr:""}
          status=${S}
          type=${V}
          .images=${s}
          .descriptions=${r}
        ></wui-transaction-list-item>
      `:F?I.map((ie,Q)=>{const ne=nn.getTransferDescription(ie),J=i&&Q===I.length-1;return l` <wui-transaction-list-item
          date=${o}
          direction=${ie.direction}
          id=${J&&this.next?dr:""}
          status=${S}
          type=${V}
          .onlyDirectionIcon=${!0}
          .images=${[s[Q]]}
          .descriptions=${[ne]}
        ></wui-transaction-list-item>`}):l`
      <wui-transaction-list-item
        date=${o}
        .direction=${n}
        id=${i&&this.next?dr:""}
        status=${S}
        type=${V}
        .images=${s}
        .descriptions=${r}
      ></wui-transaction-list-item>
    `}templateTransactions(e,i){return e.map((o,r)=>{const n=i&&r===e.length-1;return l`${this.templateRenderTransaction(o,n)}`})}emptyStateActivity(){return l`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return l`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?l`${this.emptyStateAccount()}`:l`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(Gf).fill(l` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){k.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=Y.state;this.paginationObserver=new IntersectionObserver(([i])=>{i?.isIntersecting&&!this.loading&&(Be.fetchTransactions(this.address),B.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next,isSmartAccount:R.state.preferredAccountType===pe.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const e=this.shadowRoot?.querySelector(`#${dr}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){const i=is.formatDate(e?.metadata?.minedAt),o=nn.getTransactionDescriptions(e),r=e?.transfers,n=e?.transfers?.[0],a=!!n&&e?.transfers?.every(S=>!!S.nft_info),s=nn.getTransactionImages(r);return{date:i,direction:n?.direction,descriptions:o,isAllNFT:a,images:s,status:e.metadata?.status,transfers:r,type:e.metadata?.operationType}}};Ai.styles=Zf;Dn([c()],Ai.prototype,"page",void 0);Dn([f()],Ai.prototype,"address",void 0);Dn([f()],Ai.prototype,"transactionsByYear",void 0);Dn([f()],Ai.prototype,"loading",void 0);Dn([f()],Ai.prototype,"empty",void 0);Dn([f()],Ai.prototype,"next",void 0);Ai=Dn([C("w3m-activity-list")],Ai);const qf=$`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;var nr=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Cn=class extends T{render(){return l` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&!0}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?l`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:l`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){k.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const i=this.token.price*this.sendTokenAmount;return l`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${i?`$${X.formatNumberToLocalString(i,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?l` <wui-text variant="small-400" color="error-100">
          ${X.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:l` <wui-text variant="small-400" color="fg-200">
        ${X.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?l`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:l`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){be.setTokenAmount(e.detail)}onMaxClick(){if(this.token&&typeof this.gasPrice<"u"){const e=this.token.address===void 0||Object.values(Te.NATIVE_TOKEN_ADDRESS).some(r=>this.token?.address===r),i=we.bigNumber(this.gasPrice).shiftedBy(-this.token.quantity.decimals),o=e?we.bigNumber(this.token.quantity.numeric).minus(i):we.bigNumber(this.token.quantity.numeric);be.setTokenAmount(Number(o.toFixed(20)))}}onBuyClick(){k.push("OnRampProviders")}};Cn.styles=qf;nr([c({type:Object})],Cn.prototype,"token",void 0);nr([c({type:Number})],Cn.prototype,"sendTokenAmount",void 0);nr([c({type:Number})],Cn.prototype,"gasPriceInUSD",void 0);nr([c({type:Number})],Cn.prototype,"gasPrice",void 0);Cn=nr([C("w3m-input-token")],Cn);const Yf=$`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var ua=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let to=class extends T{constructor(){super(...arguments),this.inputElementRef=Wi(),this.instructionElementRef=Wi(),this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=M.debounce(async e=>{const i=await oe.getEnsAddress(e);if(be.setLoading(!1),i){be.setReceiverProfileName(e),be.setReceiverAddress(i);const o=await oe.getEnsAvatar(e);o&&be.setReceiverProfileImageUrl(o)}else be.setReceiverAddress(e),be.setReceiverProfileName(void 0),be.setReceiverProfileImageUrl(void 0)})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return l` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${Ui(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${Ui(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){!this.value&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.value&&this.instructionHidden&&!this.pasting&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;const e=await navigator.clipboard.readText();be.setReceiverAddress(e),this.focusInput()}onInputChange(e){this.pasting=!1;const i=e.target;i.value&&!this.instructionHidden&&this.focusInput(),be.setLoading(!0),this.onDebouncedSearch(i.value)}};to.styles=Yf;ua([c()],to.prototype,"value",void 0);ua([f()],to.prototype,"instructionHidden",void 0);ua([f()],to.prototype,"pasting",void 0);to=ua([C("w3m-input-address")],to);const Kf=$`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`;var da=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let io=class extends T{render(){return l` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${j(X.formatNumberToLocalString(this.networkFee,2))}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${X.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?l` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${j(ge.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&k.push("Networks",{network:e})}};io.styles=Kf;da([c()],io.prototype,"receiverAddress",void 0);da([c({type:Object})],io.prototype,"caipNetwork",void 0);da([c({type:Number})],io.prototype,"networkFee",void 0);io=da([C("w3m-wallet-send-details")],io);const Xf=$`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var or=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let kn=class extends T{constructor(){super(),this.unsubscribe=[],this.open=ct.state.open,this.message=ct.state.message,this.triggerRect=ct.state.triggerRect,this.variant=ct.state.variant,this.unsubscribe.push(ct.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,i=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${i}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,l`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};kn.styles=[Xf];or([f()],kn.prototype,"open",void 0);or([f()],kn.prototype,"message",void 0);or([f()],kn.prototype,"triggerRect",void 0);or([f()],kn.prototype,"variant",void 0);kn=or([C("w3m-tooltip")],kn);const Qf=$`
  :host {
    width: 100%;
    display: block;
  }
`;var Es=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Uo=class extends T{constructor(){super(),this.unsubscribe=[],this.text="",this.open=ct.state.open,this.unsubscribe.push(k.subscribeKey("view",()=>{ct.hide()}),re.subscribeKey("open",e=>{e||ct.hide()}),ct.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),ct.hide()}render(){return l`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return l`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();this.open||ct.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||ct.hide()}};Uo.styles=[Qf];Es([c()],Uo.prototype,"text",void 0);Es([f()],Uo.prototype,"open",void 0);Uo=Es([C("w3m-tooltip-trigger")],Uo);const Jf=$`
  :host > wui-flex:first-child {
    margin-top: var(--wui-spacing-s);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var rc=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const hl=2,fl=6;let Wr=class extends T{constructor(){super(),this.unsubscribe=[],this.connectors=H.state.connectors,this.connector=this.connectors.find(e=>e.type==="AUTH"),this.unsubscribe.push(H.subscribeKey("connectors",e=>{this.connectors=e,this.connector=this.connectors.find(i=>i.type==="AUTH")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.connector?l`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        .padding=${["0","0","xs","0"]}
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
      ${this.separatorTemplate()}
    `:null}topViewTemplate(){return this.connector?.socials?.length?this.connector.socials.length===2?l` <wui-flex gap="xs">
        ${this.connector.socials.slice(0,hl).map(e=>l`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
            ></wui-logo-select>`)}
      </wui-flex>`:l` <wui-list-social
      data-testid=${`social-selector-${this.connector?.socials?.[0]}`}
      @click=${()=>{this.onSocialClick(this.connector?.socials?.[0])}}
      logo=${j(this.connector.socials[0])}
      align="center"
      name=${`Continue with ${this.connector.socials[0]}`}
    ></wui-list-social>`:null}bottomViewTemplate(){return!this.connector?.socials?.length||this.connector?.socials.length<=hl?null:this.connector?.socials.length>fl?l`<wui-flex gap="xs">
        ${this.connector.socials.slice(1,fl-1).map(e=>l`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
            ></wui-logo-select>`)}
        <wui-logo-select logo="more" @click=${this.onMoreSocialsClick.bind(this)}></wui-logo-select>
      </wui-flex>`:l`<wui-flex gap="xs">
      ${this.connector.socials.slice(1,this.connector.socials.length).map(e=>l`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
          ></wui-logo-select>`)}
    </wui-flex>`}separatorTemplate(){return this.connectors.find(i=>i.type==="WALLET_CONNECT")?l`<wui-separator text="or"></wui-separator>`:null}onMoreSocialsClick(){k.push("ConnectSocials")}async onSocialClick(e){if(e&&(R.setSocialProvider(e,P.state.activeChain),B.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}})),e===pr.Farcaster){k.push("ConnectingFarcaster");const i=H.getAuthConnector();if(i&&!R.state.farcasterUrl)try{const{url:o}=await i.provider.getFarcasterUri();R.setFarcasterUrl(o,P.state.activeChain)}catch(o){k.goBack(),q.showError(o)}}else{k.push("ConnectingSocial");const i=H.getAuthConnector();this.popupWindow=M.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(i&&e){const{uri:o}=await i.provider.getSocialRedirectUri({provider:e});if(this.popupWindow&&o)R.setSocialWindow(this.popupWindow,P.state.activeChain),this.popupWindow.location.href=o;else throw this.popupWindow?.close(),new Error("Something went wrong")}}catch{this.popupWindow?.close(),q.showError("Something went wrong")}}}};Wr.styles=Jf;rc([f()],Wr.prototype,"connectors",void 0);Wr=rc([C("w3m-social-login-widget")],Wr);var ew=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let wl=class extends T{render(){return l`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list></w3m-connector-list>
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>
    `}};wl=ew([C("w3m-wallet-login-list")],wl);const tw=$`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var ac=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ur=class extends T{constructor(){super(),this.unsubscribe=[],this.connectors=H.state.connectors,this.connector=this.connectors.find(e=>e.type==="AUTH"),this.unsubscribe.push(H.subscribeKey("connectors",e=>{this.connectors=e,this.connector=this.connectors.find(i=>i.type==="AUTH")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.connector?.socials?l` <wui-flex flexDirection="column" gap="xs">
      ${this.connector.socials.map(e=>l`<wui-list-social
            @click=${()=>{this.onSocialClick(e)}}
            name=${e}
            logo=${e}
          ></wui-list-social>`)}
    </wui-flex>`:null}async onSocialClick(e){if(e&&(R.setSocialProvider(e,P.state.activeChain),B.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}})),e===pr.Farcaster){k.push("ConnectingFarcaster");const i=H.getAuthConnector();if(i&&!R.state.farcasterUrl)try{const{url:o}=await i.provider.getFarcasterUri();R.setFarcasterUrl(o,P.state.activeChain)}catch(o){k.goBack(),q.showError(o)}}else{k.push("ConnectingSocial");const i=H.getAuthConnector();this.popupWindow=M.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(i&&e){const{uri:o}=await i.provider.getSocialRedirectUri({provider:e});if(this.popupWindow&&o)R.setSocialWindow(this.popupWindow,P.state.activeChain),this.popupWindow.location.href=o;else throw this.popupWindow?.close(),new Error("Something went wrong")}}catch{this.popupWindow?.close(),q.showError("Something went wrong")}}}};Ur.styles=tw;ac([f()],Ur.prototype,"connectors",void 0);Ur=ac([C("w3m-social-login-list")],Ur);var sc=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let qa=class extends T{constructor(){super(),this.unsubscribe=[],this.connectors=H.state.connectors,this.unsubscribe.push(H.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(i=>i.type==="ANNOUNCED");return e?.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(i=>i.info?.rdns&&K.state.excludedRDNS&&K.state.excludedRDNS.includes(i?.info?.rdns)?null:l`
            <wui-list-wallet
              imageSrc=${j(ge.getConnectorImage(i))}
              name=${i.name??"Unknown"}
              @click=${()=>this.onConnector(i)}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${i.id}`}
              .installed=${!0}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.type==="WALLET_CONNECT"?M.isMobile()?k.push("AllWallets"):k.push("ConnectingWalletConnect"):k.push("ConnectingExternal",{connector:e})}};sc([f()],qa.prototype,"connectors",void 0);qa=sc([C("w3m-connect-announced-widget")],qa);var lc=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ya=class extends T{constructor(){super(),this.unsubscribe=[],this.connectors=H.state.connectors,this.unsubscribe.push(H.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=Y.state;if(!e?.length)return this.style.cssText="display: none",null;const i=this.filterOutDuplicateWallets(e);return l`<wui-flex flexDirection="column" gap="xs">
      ${i.map(o=>l`
          <wui-list-wallet
            imageSrc=${j(ge.getWalletImage(o))}
            name=${o.name??"Unknown"}
            @click=${()=>this.onConnectWallet(o)}
            data-testid=${`wallet-selector-${o.id}`}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const i=xe.getRecentWallets(),o=this.connectors.map(s=>s.info?.rdns).filter(Boolean),r=i.map(s=>s.rdns).filter(Boolean),n=o.concat(r);if(n.includes("io.metamask.mobile")&&M.isMobile()){const s=n.indexOf("io.metamask.mobile");n[s]="io.metamask"}return e.filter(s=>!n.includes(String(s?.rdns)))}onConnectWallet(e){k.push("ConnectingWalletConnect",{wallet:e})}};lc([f()],Ya.prototype,"connectors",void 0);Ya=lc([C("w3m-connect-custom-widget")],Ya);const jr={filterOutDuplicatesByRDNS(t){const e=Y.state.enableEIP6963?H.state.connectors:[],i=xe.getRecentWallets(),o=e.map(s=>s.info?.rdns).filter(Boolean),r=i.map(s=>s.rdns).filter(Boolean),n=o.concat(r);if(n.includes("io.metamask.mobile")&&M.isMobile()){const s=n.indexOf("io.metamask.mobile");n[s]="io.metamask"}return t.filter(s=>!n.includes(String(s?.rdns)))},filterOutDuplicatesByIds(t){const e=H.state.connectors.filter(s=>s.type==="ANNOUNCED"||s.type==="INJECTED"),i=xe.getRecentWallets(),o=e.map(s=>s.explorerId),r=i.map(s=>s.id),n=o.concat(r);return t.filter(s=>!n.includes(s?.id))},filterOutDuplicateWallets(t){const e=this.filterOutDuplicatesByRDNS(t);return this.filterOutDuplicatesByIds(e)}};var iw=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let gl=class extends T{constructor(){super(...arguments),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{featured:e}=K.state;if(!e.length)return this.style.cssText="display: none",null;const i=jr.filterOutDuplicateWallets(e);return l`
      <wui-flex flexDirection="column" gap="xs">
        ${i.map(o=>l`
            <wui-list-wallet
              imageSrc=${j(ge.getWalletImage(o))}
              name=${o.name??"Unknown"}
              @click=${()=>this.onConnectWallet(o)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){const i=H.getConnector(e.id,e.rdns);i?k.push("ConnectingExternal",{connector:i}):k.push("ConnectingWalletConnect",{wallet:e})}};gl=iw([C("w3m-connect-featured-widget")],gl);var cc=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ka=class extends T{constructor(){super(),this.unsubscribe=[],this.connectors=H.state.connectors,this.unsubscribe.push(H.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(i=>i.type==="INJECTED");return!e?.length||e.length===1&&e[0]?.name==="Browser Wallet"&&!M.isMobile()?(this.style.cssText="display: none",null):l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(i=>!M.isMobile()&&i.name==="Browser Wallet"?null:oe.checkInstalled(void 0,i.chain)?i.info?.rdns&&K.state.excludedRDNS&&K.state.excludedRDNS.includes(i?.info?.rdns)?null:l`
            <wui-list-wallet
              imageSrc=${j(ge.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${i.id}`}
              @click=${()=>this.onConnector(i)}
            >
            </wui-list-wallet>
          `:(this.style.cssText="display: none",null))}
      </wui-flex>
    `}onConnector(e){P.setActiveConnector(e),k.push("ConnectingExternal",{connector:e})}};cc([f()],Ka.prototype,"connectors",void 0);Ka=cc([C("w3m-connect-injected-widget")],Ka);var uc=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Xa=class extends T{constructor(){super(),this.unsubscribe=[],this.connectors=H.state.connectors,this.unsubscribe.push(H.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(i=>i.type==="MULTI_CHAIN"&&i.name!=="WalletConnect");return e?.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(i=>l`
            <wui-list-wallet
              imageSrc=${j(ge.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${i.id}`}
              @click=${()=>this.onConnector(i)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){P.setActiveConnector(e),k.push("ConnectingMultiChain")}};uc([f()],Xa.prototype,"connectors",void 0);Xa=uc([C("w3m-connect-multi-chain-widget")],Xa);var dc=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Qa=class extends T{constructor(){super(),this.unsubscribe=[],this.connectors=H.state.connectors,this.unsubscribe.push(H.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const i=this.connectors.filter(o=>o.type==="EXTERNAL").filter(o=>o.id!=="coinbaseWalletSDK");return i?.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${i.map(o=>l`
            <wui-list-wallet
              imageSrc=${j(ge.getConnectorImage(o))}
              .installed=${!0}
              name=${o.name??"Unknown"}
              data-testid=${`wallet-selector-external-${o.id}`}
              @click=${()=>this.onConnector(o)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){k.push("ConnectingExternal",{connector:e})}};dc([f()],Qa.prototype,"connectors",void 0);Qa=dc([C("w3m-connect-external-widget")],Qa);var nw=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ml=class extends T{render(){const e=xe.getRecentWallets();return e?.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(i=>l`
            <wui-list-wallet
              imageSrc=${j(ge.getWalletImage(i))}
              name=${i.name??"Unknown"}
              @click=${()=>this.onConnectWallet(i)}
              tagLabel="recent"
              tagVariant="shade"
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){k.push("ConnectingWalletConnect",{wallet:e})}};ml=nw([C("w3m-connect-recent-widget")],ml);var pc=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ja=class extends T{constructor(){super(),this.unsubscribe=[],this.connectors=H.state.connectors,this.unsubscribe.push(H.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.connectors.find(ee=>ee.type==="WALLET_CONNECT"))return null;const{recommended:i}=K.state,{customWallets:o,featuredWalletIds:r}=Y.state,{connectors:n}=H.state,a=xe.getRecentWallets(),S=n.filter(ee=>ee.type==="INJECTED"||ee.type==="ANNOUNCED").filter(ee=>ee.name!=="Browser Wallet");if(r||o||!i.length)return this.style.cssText="display: none",null;const I=S.length+a.length,V=Math.max(0,2-I),F=jr.filterOutDuplicateWallets(i).slice(0,V);return F.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${F.map(ee=>l`
            <wui-list-wallet
              imageSrc=${j(ge.getWalletImage(ee))}
              name=${ee?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(ee)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){const i=H.getConnector(e.id,e.rdns);i?k.push("ConnectingExternal",{connector:i}):k.push("ConnectingWalletConnect",{wallet:e})}};pc([f()],Ja.prototype,"connectors",void 0);Ja=pc([C("w3m-connect-recommended-widget")],Ja);var hc=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let es=class extends T{constructor(){super(),this.unsubscribe=[],this.connectors=H.state.connectors,this.unsubscribe.push(H.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(M.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(i=>i.type==="WALLET_CONNECT");return e?l`
      <wui-list-wallet
        imageSrc=${j(ge.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.type==="WALLET_CONNECT"?M.isMobile()?k.push("AllWallets"):k.push("ConnectingWalletConnect"):k.push("ConnectingExternal",{connector:e})}};hc([f()],es.prototype,"connectors",void 0);es=hc([C("w3m-connect-walletconnect-widget")],es);const ow=$`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var fc=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Br=class extends T{constructor(){super(),this.unsubscribe=[],this.connectors=H.state.connectors,this.unsubscribe.push(H.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{custom:e,recent:i,announced:o,injected:r,multiChain:n,recommended:a,featured:s,external:S}=this.getConnectorsByType();return l`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connect-walletconnect-widget></w3m-connect-walletconnect-widget>
        ${i.length?l`<w3m-connect-recent-widget></w3m-connect-recent-widget>`:null}
        ${n.length?l`<w3m-connect-multi-chain-widget></w3m-connect-multi-chain-widget>`:null}
        ${o.length?l`<w3m-connect-announced-widget></w3m-connect-announced-widget>`:null}
        ${r.length?l`<w3m-connect-injected-widget></w3m-connect-injected-widget>`:null}
        ${s.length?l`<w3m-connect-featured-widget></w3m-connect-featured-widget>`:null}
        ${e?.length?l`<w3m-connect-custom-widget></w3m-connect-custom-widget>`:null}
        ${S.length?l`<w3m-connect-external-widget></w3m-connect-external-widget>`:null}
        ${a.length?l`<w3m-connect-recommended-widget></w3m-connect-recommended-widget>`:null}
      </wui-flex>
    `}getConnectorsByType(){const{featured:e,recommended:i}=K.state,{customWallets:o}=Y.state,r=xe.getRecentWallets(),n=jr.filterOutDuplicateWallets(i),a=jr.filterOutDuplicateWallets(e),s=this.connectors.filter(ie=>ie.type==="MULTI_CHAIN"),S=this.connectors.filter(ie=>ie.type==="ANNOUNCED"),I=this.connectors.filter(ie=>ie.type==="INJECTED"),V=this.connectors.filter(ie=>ie.type==="EXTERNAL"),ee=P.state.activeChain===De.CHAIN.EVM?Y.state.enableEIP6963:!0;return{custom:o,recent:r,external:V,multiChain:s,announced:ee?S:[],injected:ee?I:[],recommended:n,featured:a}}};Br.styles=ow;fc([f()],Br.prototype,"connectors",void 0);Br=fc([C("w3m-connector-list")],Br);var As=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let zr=class extends T{constructor(){super(),this.unsubscribe=[],this.connectors=H.state.connectors,this.count=K.state.count,this.unsubscribe.push(H.subscribeKey("connectors",e=>this.connectors=e),K.subscribeKey("count",e=>this.count=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(s=>s.type==="WALLET_CONNECT"),{allWallets:i}=Y.state;if(!e||i==="HIDE"||i==="ONLY_MOBILE"&&!M.isMobile())return null;const o=K.state.featured.length,r=this.count+o,n=r<10?r:Math.floor(r/10)*10,a=n<r?`${n}+`:`${n}`;return l`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}onAllWallets(){B.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),k.push("AllWallets")}};As([f()],zr.prototype,"connectors",void 0);As([f()],zr.prototype,"count",void 0);zr=As([C("w3m-all-wallets-widget")],zr);var rw=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let vl=class extends T{constructor(){super(...arguments),this.socialProvider=xe.getConnectedSocialProvider(),this.socialUsername=xe.getConnectedSocialUsername()}render(){const e=xe.getConnectedConnector(),i=H.getAuthConnector();if(!i||e!=="AUTH")return this.style.cssText="display: none",null;const o=i.provider.getEmail()??"";return l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(o,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(o)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,i){i||k.push("UpdateEmailWallet",{email:e})}getAuthName(e){return this.socialUsername?this.socialProvider==="discord"&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};vl=rw([C("w3m-account-auth-button")],vl);function _g(){throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook')}export{R as A,oe as C,B as E,re as M,L as N,Y as O,k as R,q as S,pe as W,_g as a,C as c,lw as u};
//# sourceMappingURL=index-DLiV43KI.js.map
