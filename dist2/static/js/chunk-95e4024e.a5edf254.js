(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95e4024e"],{"1c2e":function(e,t,n){"use strict";var o=n("1944"),i=n("857c"),a=n("efe2"),c=n("99ad"),l="toString",r=RegExp.prototype,s=r[l],u=a((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),d=s.name!=l;(u||d)&&o(RegExp.prototype,l,(function(){var e=i(this),t=String(e.source),n=e.flags,o=String(void 0===n&&e instanceof RegExp&&!("flags"in r)?c.call(e):n);return"/"+t+"/"+o}),{unsafe:!0})},"77ad":function(e,t,n){"use strict";var o=n("1c8b"),i=n("a719"),a=n("74e7"),c=n("e1d6"),l=n("d88d"),r=n("da10"),s=n("1bbd"),u=n("90fb"),d=n("1ea7"),p=n("ff9c"),f=d("slice"),m=p("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),g=[].slice,h=Math.max;o({target:"Array",proto:!0,forced:!f||!m},{slice:function(e,t){var n,o,u,d=r(this),p=l(d.length),f=c(e,p),m=c(void 0===t?p:t,p);if(a(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?i(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(d,f,m);for(o=new(void 0===n?Array:n)(h(m-f,0)),u=0;f<m;f++,u++)f in d&&s(o,u,d[f]);return o.length=u,o}})},"99ad":function(e,t,n){"use strict";var o=n("857c");e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d504:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Index"}},[n("p",[n("router-link",{attrs:{to:"Index2"}},[e._v("Index2")])],1),n("div",{staticStyle:{height:"auto",width:"100%",display:"flex","align-items":"center","flex-wrap":"wrap"}},[e._l(e.componentList,(function(t,o){return[n("div",{key:o,staticStyle:{margin:"20px"},attrs:{draggable:"true"},on:{dragstart:function(t){return e.drag(t,o)}}},[n(t.name,e._g(e._b({tag:"component",on:{"update:value":function(e){t.functions&&t.functions["update_value"]&&t.functions["update_value"](o,e,"componentList")}},nativeOn:{click:function(e){return function(e){t.click&&t.click(e,t)}(e)}},model:{value:t.model,callback:function(n){e.$set(t,"model",n)},expression:"item.model"}},"component",t.data,!1),t.functions))],1)]}))],2),n("div",{staticStyle:{border:"1px solid #ccc","min-height":"500px",width:"100%"},on:{drop:function(t){return e.drop(t)},dragover:function(t){return e.allowDrop(t)}}},[e._l(e.componentList2,(function(t,o){return[n("div",{key:o,staticStyle:{margin:"20px",display:"inline-block","vertical-align":"middle"}},[n(t.name,e._g(e._b({tag:"component",on:{"update:value":function(e){t.functions&&t.functions["update_value"]&&t.functions["update_value"](o,e,"componentList2")}},nativeOn:{click:function(e){return function(e){t.click&&t.click(e,t)}(e)}},model:{value:t.model,callback:function(n){e.$set(t,"model",n)},expression:"item.model"}},"component",t.data,!1),t.functions))],1)]}))],2)])},i=[],a=(n("2eeb"),n("053b"),n("0261")),c=(n("77ad"),n("e18c"),n("1c2e"),{methods:{getClass:function(e){return Object.prototype.toString.call(e).slice(8,-1)},deepCopy:function(e){var t,n=this.getClass(e);if("Object"==n)t={};else{if("Array"!=n)return e;t=[]}for(var o in e){var i=e[o];"Object"==this.getClass(i)||"Array"==this.getClass(i)?t[o]=this.deepCopy(i):t[o]=i}return t}}}),l=[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],r={mixins:[c],data:function(){return{componentList:[],componentList2:[]}},created:function(){var e=this;this.componentList=[{name:"zzTree",data:{data:l,"show-checkbox":!0},functions:{"node-click":function(e,t){console.log(e,t)}}},{name:"zzInput",data:{},model:"1",functions:{update_value:function(t,n,o){e.$set(e[o][t],"model",n)}},click:function(e,t){console.log(t)}}],this.componentList.map((function(e){if(!a["a"].component(e.name)){var t=n("c37b")("./"+e.name+".vue");a["a"].component(e.name,t.default),console.log(a["a"].component(e.name))}return e}))},methods:{drag:function(e,t){e.dataTransfer.setData("index",t)},drop:function(e){e.preventDefault();var t=e.dataTransfer.getData("index");this.componentList2.push(this.deepCopy(this.componentList[1*t]))},allowDrop:function(e){e.preventDefault()}}},s=r,u=n("4023"),d=Object(u["a"])(s,o,i,!1,null,"09c592da",null);t["default"]=d.exports}}]);