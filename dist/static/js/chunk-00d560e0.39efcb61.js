(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00d560e0"],{"4b98":function(e,t,a){"use strict";var i=a("a661"),d=a.n(i);d.a},a661:function(e,t,a){},e881:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Table"},[a("p",[e._v("基础用法")]),a("br"),a("div",{staticClass:"List"},[a("zz-table",{attrs:{checkedArr:e.checkedArr,tableData:e.tableData,tableheader:e.tableheader}})],1),a("p",[e._v("固定列")]),a("br"),a("div",{staticClass:"List"},[a("zz-table",{attrs:{checkedArr:e.checkedArr,tableData:e.tableData,tableheader:e.tableheader2},scopedSlots:e._u([{key:"toolbar",fn:function(t){return[a("zz-button",{staticClass:"zbtn",nativeOn:{click:function(a){return e.view(t.row,t.i)}}},[e._v("查看")]),a("zz-button",{staticClass:"zbtn",nativeOn:{click:function(a){return e.edit(t.row,t.i,t.editshow)}}},[e._v("编辑")])]}}])})],1),a("p",[e._v("多选")]),a("br"),a("div",{staticClass:"List"},[a("zz-table",{attrs:{checkedArr:e.checkedArr,tableData:e.tableData,tableheader:e.tableheader3},scopedSlots:e._u([{key:"toolbar",fn:function(t){return[a("zz-button",{staticClass:"zbtn",nativeOn:{click:function(a){return e.view(t.row,t.i)}}},[e._v("查看")]),a("zz-button",{staticClass:"zbtn",nativeOn:{click:function(a){return e.edit(t.row,t.i,t.editshow)}}},[e._v("编辑")])]}}])}),a("br"),a("zz-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.getCheck(t)}}},[e._v("选中提交")])],1),a("p",[e._v("属性")]),a("br"),e._m(0),a("p",[e._v("详细文档链接")]),a("br"),a("a",{attrs:{href:"http://note.youdao.com/groupshare/?token=D38FE23A111D4734B518DBAD77A6CED4&gid=116249960",target:"_blank"}},[e._v("http://note.youdao.com/groupshare/?token=D38FE23A111D4734B518DBAD77A6CED4&gid=116249960")])])},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"table_show"},[a("thead",[a("tr",[a("th",[e._v("参数")]),a("th",[e._v("说明")]),a("th",[e._v("类型")]),a("th",[e._v("可选值")]),a("th",[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("tableData")]),a("td",[e._v("列表数据")]),a("td",[e._v("array")]),a("td",[e._v("—")]),a("td",[e._v("[]")])]),a("tr",[a("td",[e._v("tableheader")]),a("td",[e._v("表头数据")]),a("td",[e._v("array")]),a("td",[e._v("—")]),a("td",[e._v("[]")])]),a("tr",[a("td",[e._v("checkedArr")]),a("td",[e._v("多选数据")]),a("td",[e._v("array")]),a("td",[e._v("—")]),a("td",[e._v("[]")])])])])}],n={name:"Table",data:function(){return{checkedArr:[],tableheader:r,tableheader2:c,tableheader3:o,tableData:s}},methods:{view:function(e,t,a){console.log(e),console.log(t),console.log(a)},edit:function(e,t,a,i){this.$set(a,t,!a[t]),console.log(e),console.log(t),console.log(i)},getCheck:function(){console.log(this.checkedArr)}}},r=[{name:"日期",field:"date",width:100,edit:!0},{name:"姓名",field:"name",width:100,edit:!0},{name:"省份",field:"province",width:100,edit:!0},{name:"市区",field:"city",width:100,edit:!0},{name:"地址",field:"address",width:300,edit:!0},{name:"邮编",field:"zip",width:100,edit:!1}],c=[{name:"日期",field:"date",width:100,edit:!0},{name:"姓名",field:"name",width:100,edit:!0},{name:"省份",field:"province",width:100,edit:!0},{name:"市区",field:"city",width:100,edit:!0},{name:"地址",field:"address",width:300,edit:!0},{name:"邮编",field:"zip",width:100,edit:!1},{name:"操作",width:150,fixed:"right",slot:"toolbar"}],o=[{name:"checked",width:50,check:!0},{name:"日期",field:"date",width:100,edit:!0},{name:"姓名",field:"name",width:100,edit:!0},{name:"省份",field:"province",width:100,edit:!0},{name:"市区",field:"city",width:100,edit:!0},{name:"地址",field:"address",width:300,edit:!0},{name:"邮编",field:"zip",width:100,edit:!1},{name:"操作",width:150,fixed:"right",slot:"toolbar"}],s=[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}],l=n,h=(a("4b98"),a("4023")),v=Object(h["a"])(l,i,d,!1,null,"9686ea42",null);t["default"]=v.exports}}]);