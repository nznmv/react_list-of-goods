(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{11:function(t,e,n){t.exports=n(17)},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),l=n(6),s=n(7),i=n(10),u=n(8),m=(n(16),n(3)),b=n(9);function p(t){var e=t.initialGoods,n=Object(a.useState)(e),c=Object(b.a)(n,2),o=c[0],l=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"list"},o.map((function(t){return r.a.createElement("li",{key:t},t)}))),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",onClick:function(){l(Object(m.a)(o).reverse())}},"Reverse"),r.a.createElement("button",{type:"button",onClick:function(){l(e)}},"Reset"),r.a.createElement("button",{type:"button",onClick:function(){l(Object(m.a)(o).sort((function(t,e){return t.localeCompare(e)})))}},"Sort alphabetically"),r.a.createElement("button",{type:"button",onClick:function(){l(Object(m.a)(o).sort((function(t,e){return t.length-e.length})))}},"Sort by length")))}var f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={products:[].concat(f),isStarted:!1},t.createList=function(){t.setState({isStarted:!0})},t}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.isStarted?null:r.a.createElement("button",{type:"button",className:"start",onClick:this.createList},"Star"),this.state.isStarted?r.a.createElement(p,{initialGoods:this.state.products}):null)}}]),n}(r.a.Component);o.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.9d8c0ae7.chunk.js.map