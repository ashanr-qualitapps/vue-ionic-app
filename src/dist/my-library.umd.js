(function(o,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("axios"),require("vue")):typeof define=="function"&&define.amd?define(["exports","axios","vue"],n):(o=typeof globalThis<"u"?globalThis:o||self,n(o.MyLibrary={},o.axios,o.Vue))})(this,function(o,n,e){"use strict";const l=(t,i)=>{const r=t.__vccOpts||t;for(const[a,s]of i)r[a]=s;return r},u={name:"CountryList",data(){return{countries:[]}},mounted(){this.fetchCountries()},methods:{async fetchCountries(){try{const t=await n.get("https://restcountries.com/v3.1/all");this.countries=t.data}catch(t){console.error("Error fetching countries:",t)}}}},p=t=>(e.pushScopeId("data-v-5b455779"),t=t(),e.popScopeId(),t),f={class:"country-list"},_=p(()=>e.createElementVNode("h2",null,"Countries",-1));function h(t,i,r,a,s,y){return e.openBlock(),e.createElementBlock("div",f,[_,e.createElementVNode("ul",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.countries,d=>(e.openBlock(),e.createElementBlock("li",{key:d.cca3},e.toDisplayString(d.name.common),1))),128))])])}const c=l(u,[["render",h],["__scopeId","data-v-5b455779"]]),m={CountryList:c};o.CountryList=c,o.default=m,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
