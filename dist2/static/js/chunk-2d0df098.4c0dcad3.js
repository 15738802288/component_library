(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df098"],{"87cf":function(n,e,t){"use strict";t.r(e);var l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"Index"}},[t("router-link",{attrs:{to:"/"}},[n._v("Index")]),n._l(n.componentList,(function(e,l){return[t(e.name,n._g(n._b({key:l,tag:"component",on:{"update:value":function(n){e.functions&&e.functions["update_value"]&&e.functions["update_value"](l,n)}},nativeOn:{click:function(n){return function(n){e.click&&e.click(n,e)}(n)}},model:{value:e.model,callback:function(t){n.$set(e,"model",t)},expression:"item.model"}},"component",e.data,!1),e.functions))]}))],2)},o=[],c=(t("2eeb"),t("053b"),t("0261")),a={data:function(){return{componentList:[]}},created:function(){var n=this;this.componentList=[{name:"zzTree",data:{data:i,"show-checkbox":!0},functions:{"node-click":function(n,e){console.log(n,e)}}},{name:"zzInput",data:{},model:"1",functions:{update_value:function(e,t){n.$set(n.componentList[e],"model",t)}},click:function(n,e){console.log(e)}}],this.componentList.map((function(n){if(!c["a"].component(n.name)){var e=t("c37b")("./"+n.name+".vue");c["a"].component(n.name,e.default),console.log(c["a"].component(n.name))}return n}))}},i=[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],u=a,d=t("4023"),r=Object(d["a"])(u,l,o,!1,null,"39065582",null);e["default"]=r.exports}}]);