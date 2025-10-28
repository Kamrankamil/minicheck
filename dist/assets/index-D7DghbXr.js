import{O as D,c as B,A as E,M as F,E as P,N as W,W as I,S as q,C as ne,R as se}from"./index-Dbz8MwQS.js";import{cX as ie,cR as J,cS as Q,dt as Z}from"./index-DKPuMv_6.js";import"./index-p-EMBUON.js";const re=Symbol(),G=Object.getPrototypeOf,V=new WeakMap,oe=e=>e&&(V.has(e)?V.get(e):G(e)===Object.prototype||G(e)===Array.prototype),ce=e=>oe(e)&&e[re]||null,X=(e,t=!0)=>{V.set(e,t)},z={},L=e=>typeof e=="object"&&e!==null,_=new WeakMap,T=new WeakSet,ae=(e=Object.is,t=(s,S)=>new Proxy(s,S),o=s=>L(s)&&!T.has(s)&&(Array.isArray(s)||!(Symbol.iterator in s))&&!(s instanceof WeakMap)&&!(s instanceof WeakSet)&&!(s instanceof Error)&&!(s instanceof Number)&&!(s instanceof Date)&&!(s instanceof String)&&!(s instanceof RegExp)&&!(s instanceof ArrayBuffer),l=s=>{switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:throw s}},a=new WeakMap,c=(s,S,y=l)=>{const p=a.get(s);if(p?.[0]===S)return p[1];const h=Array.isArray(s)?[]:Object.create(Object.getPrototypeOf(s));return X(h,!0),a.set(s,[S,h]),Reflect.ownKeys(s).forEach(A=>{if(Object.getOwnPropertyDescriptor(h,A))return;const m=Reflect.get(s,A),b={value:m,enumerable:!0,configurable:!0};if(T.has(m))X(m,!1);else if(m instanceof Promise)delete b.value,b.get=()=>y(m);else if(_.has(m)){const[w,U]=_.get(m);b.value=c(w,U(),y)}Object.defineProperty(h,A,b)}),Object.preventExtensions(h)},u=new WeakMap,f=[1,1],M=s=>{if(!L(s))throw new Error("object required");const S=u.get(s);if(S)return S;let y=f[0];const p=new Set,h=(r,i=++f[0])=>{y!==i&&(y=i,p.forEach(n=>n(r,i)))};let A=f[1];const m=(r=++f[1])=>(A!==r&&!p.size&&(A=r,w.forEach(([i])=>{const n=i[1](r);n>y&&(y=n)})),y),b=r=>(i,n)=>{const d=[...i];d[1]=[r,...d[1]],h(d,n)},w=new Map,U=(r,i)=>{if((z?"production":void 0)!=="production"&&w.has(r))throw new Error("prop listener already exists");if(p.size){const n=i[3](b(r));w.set(r,[i,n])}else w.set(r,[i])},Y=r=>{var i;const n=w.get(r);n&&(w.delete(r),(i=n[1])==null||i.call(n))},ee=r=>(p.add(r),p.size===1&&w.forEach(([n,d],v)=>{if((z?"production":void 0)!=="production"&&d)throw new Error("remove already exists");const O=n[3](b(v));w.set(v,[n,O])}),()=>{p.delete(r),p.size===0&&w.forEach(([n,d],v)=>{d&&(d(),w.set(v,[n]))})}),$=Array.isArray(s)?[]:Object.create(Object.getPrototypeOf(s)),x=t($,{deleteProperty(r,i){const n=Reflect.get(r,i);Y(i);const d=Reflect.deleteProperty(r,i);return d&&h(["delete",[i],n]),d},set(r,i,n,d){const v=Reflect.has(r,i),O=Reflect.get(r,i,d);if(v&&(e(O,n)||u.has(n)&&e(O,u.get(n))))return!0;Y(i),L(n)&&(n=ce(n)||n);let N=n;if(n instanceof Promise)n.then(C=>{n.status="fulfilled",n.value=C,h(["resolve",[i],C])}).catch(C=>{n.status="rejected",n.reason=C,h(["reject",[i],C])});else{!_.has(n)&&o(n)&&(N=M(n));const C=!T.has(N)&&_.get(N);C&&U(i,C)}return Reflect.set(r,i,N,d),h(["set",[i],n,O]),!0}});u.set(s,x);const te=[$,m,c,ee];return _.set(x,te),Reflect.ownKeys(s).forEach(r=>{const i=Object.getOwnPropertyDescriptor(s,r);"value"in i&&(x[r]=s[r],delete i.value,delete i.writable),Object.defineProperty($,r,i)}),x})=>[M,_,T,e,t,o,l,a,c,u,f],[le]=ae();function ue(e={}){return le(e)}function H(e,t,o){const l=_.get(e);let a;const c=[],u=l[3];let f=!1;const s=u(S=>{c.push(S),a||(a=Promise.resolve().then(()=>{a=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,s()}}function fe(e){return T.add(e),e}function de(e,t,o,l){let a=e[t];return H(e,()=>{const c=e[t];Object.is(a,c)||o(a=c)})}const g=ue({status:"uninitialized"}),R={state:g,subscribeKey(e,t){return de(g,e,t)},subscribe(e){return H(g,()=>e(g))},_getClient(){if(!g._client)throw new Error("SIWEController client not set");return g._client},async getNonce(e){const o=await this._getClient().getNonce(e);return this.setNonce(o),o},async getSession(){try{const t=await this._getClient().getSession();return t&&(this.setSession(t),this.setStatus("success")),t}catch{return}},createMessage(e){const o=this._getClient().createMessage(e);return this.setMessage(o),o},async verifyMessage(e){return await this._getClient().verifyMessage(e)},async signIn(){return await this._getClient().signIn()},async signOut(){const e=this._getClient();await e.signOut(),this.setStatus("ready"),this.setSession(void 0),e.onSignOut?.()},onSignIn(e){this._getClient().onSignIn?.(e)},onSignOut(){this._getClient().onSignOut?.()},setSIWEClient(e){g._client=fe(e),g.status="ready",D.setIsSiweEnabled(e.options.enabled)},setNonce(e){g.nonce=e},setStatus(e){g.status=e},setMessage(e){g.message=e},setSession(e){g.session=e,g.status=e?"success":"ready"}},ge=ie`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var we=function(e,t,o,l){var a=arguments.length,c=a<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,o):l,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(e,t,o,l);else for(var f=e.length-1;f>=0;f--)(u=e[f])&&(c=(a<3?u(c):a>3?u(t,o,c):u(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};let k=class extends J{constructor(){super(...arguments),this.dappImageUrl=D.state.metadata?.icons,this.walletImageUrl=E.state.connectedWalletInfo?.icon}firstUpdated(){const t=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");t?.[0]&&this.createAnimation(t[0],"translate(18px)"),t?.[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){return Q`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,o){t.animate([{transform:"translateX(0px)"},{transform:o}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};k.styles=ge;k=we([B("w3m-connecting-siwe")],k);var K=function(e,t,o,l){var a=arguments.length,c=a<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,o):l,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(e,t,o,l);else for(var f=e.length-1;f>=0;f--)(u=e[f])&&(c=(a<3?u(c):a>3?u(t,o,c):u(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};let j=class extends J{constructor(){super(...arguments),this.dappName=D.state.metadata?.name,this.isSigning=!1,this.isCancelling=!1}render(){return this.onRender(),Q`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onRender(){R.state.session&&F.close()}async onSign(){this.isSigning=!0,P.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:W.state.caipNetwork?.id||"",isSmartAccount:E.state.preferredAccountType===I.ACCOUNT_TYPES.SMART_ACCOUNT}});try{R.setStatus("loading");const t=await R.signIn();return R.setStatus("success"),P.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:W.state.caipNetwork?.id||"",isSmartAccount:E.state.preferredAccountType===I.ACCOUNT_TYPES.SMART_ACCOUNT}}),t}catch{const l=E.state.preferredAccountType===I.ACCOUNT_TYPES.SMART_ACCOUNT;return l?q.showError("This application might not support Smart Accounts"):q.showError("Signature declined"),R.setStatus("error"),P.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:W.state.caipNetwork?.id||"",isSmartAccount:l}})}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,E.state.isConnected?(await ne.disconnect(),F.close()):se.push("Connect"),this.isCancelling=!1,P.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:W.state.caipNetwork?.id||"",isSmartAccount:E.state.preferredAccountType===I.ACCOUNT_TYPES.SMART_ACCOUNT}})}};K([Z()],j.prototype,"isSigning",void 0);K([Z()],j.prototype,"isCancelling",void 0);j=K([B("w3m-connecting-siwe-view")],j);export{R as SIWEController,k as W3mConnectingSiwe,j as W3mConnectingSiweView};
//# sourceMappingURL=index-D7DghbXr.js.map
