"use strict";(self["webpackChunkdegen_market_check"]=self["webpackChunkdegen_market_check"]||[]).push([[178],{7086:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"default"}},[t.connected?t.canView?e("router-view",{staticClass:"container view"}):e("div",{staticClass:"container text-center my-5"},[e("h1",[t._v("Out of checks!")]),t._m(0),t._m(1)]):e("div",{staticClass:"container text-center mt-3 mb-5"},[e("SponsorHeader",{staticClass:"mb-3"}),e("h3",{staticClass:"mb-0 mt-5"},[t._v("Connect Wallet")]),e("p",{staticClass:"mb-5"},[t._v("You need to connect your wallet to continue")])],1)],1)},n=[function(){var t=this,e=t._self._c;return e("h2",[t._v("To get unlimited checks, hold over 1,000 "),e("a",{attrs:{href:"https://jup.ag/swap/SOL-FLUXB",target:"_blank"}},[t._v("$FLUXB")])])},function(){var t=this,e=t._self._c;return e("h3",[e("a",{attrs:{href:"https://jup.ag/swap/SOL-FLUXB",target:"_blank"}},[t._v("Buy Now")])])}],l=a(1278),r=a(7370),i=a(3117),c=a(4680),o={name:"AuthenticatedLayout",components:{SponsorHeader:c.Z},data(){return{fluxBalance:0}},watch:{"$store.state.wallet.wallet"(){this.getFluxBalance()}},computed:{hasViewsLeft:function(){return!!window.Telegram?.WebApp||this.$store.state.view_gate.viewsLeft>0},canView:function(){return!!window.Telegram?.WebApp||!!this.$store.state.wallet.wallet&&(!!(this.hasViewsLeft||this.fluxBalance>1e3)||this.$store.state.view_gate.views[this.$route.params.id])},connected:function(){return!!window.Telegram?.WebApp||this.$store.state.wallet.wallet}},methods:{getFluxBalance:async function(){if(!this.$store.state.wallet.address)return;const t=new i.rV.PublicKey("FLUXBmPhT3Fd1EDVFdg46YREqHBeNypn1h4EbnTzWERX"),e=await(0,l.Am)(t,new i.rV.PublicKey(this.$store.state.wallet.address),!1,r.nA),a=await this.$store.state.solana.client.getTokenAccountBalance(e).catch((()=>{}));return this.fluxBalance=a?.value?.uiAmount,this.fluxBalance}},mounted(){this.$store.state.wallet.wallet&&this.getFluxBalance()}},u=o,h=a(1001),w=(0,h.Z)(u,s,n,!1,null,"6348015e",null),d=w.exports}}]);
//# sourceMappingURL=auth_app.4446f515.js.map