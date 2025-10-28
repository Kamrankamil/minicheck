import{dq as c,cF as o}from"./index-DKPuMv_6.js";function r(n){return n.state.chainId}function i(n,t){const{onChange:e}=t;return n.subscribe(a=>a.chainId,e)}function u(n={}){const t=c(n);return o.useSyncExternalStore(e=>i(t,{onChange:e}),()=>r(t),()=>r(t))}export{u};
//# sourceMappingURL=useChainId-Cay0iM6w.js.map
