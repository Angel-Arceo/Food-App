(this["webpackJsonpfood-app"]=this["webpackJsonpfood-app"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){},52:function(e,t,c){},54:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(13),s=c.n(r),i=(c(38),c(39),c(10)),o=c(3),j=c(69),l=c(68),u=(c(40),c(41),c(1)),b=function(e){var t=Object(n.useRef)(null),c={backgroundImage:"url(".concat("/Foodify","/assets/icons/search.svg)")};return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("input",{style:c,type:"text",placeholder:"Search",onChange:function(){e.onSearch(t.current.value)},ref:t})})},d=c(11),O=(c(43),function(e){var t=e.data,c=t.title,n=t.image;return Object(u.jsx)(i.b,{to:"/recipe",children:Object(u.jsxs)("div",{className:"Food-Card",children:[Object(u.jsx)("img",{className:"Food-Card--img",src:n,alt:c}),Object(u.jsx)("div",{className:"Food-Card--title",children:Object(u.jsx)("h2",{children:"".concat(c.substr(0,55),"..")})})]})})}),h=(c(52),c(28)),m=c(17),f=c(18),x=c(8),p=c(29),v=c(31),g=c(32),y=c(16),N=c(26),k=c(20),w=c.n(k),F=c(30);function S(e){var t=Object(n.useState)(null),c=Object(d.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!0),i=Object(d.a)(s,2),o=i[0],j=i[1],l=Object(n.useState)(null),u=Object(d.a)(l,2),b=u[0],O=u[1];return Object(n.useEffect)((function(){function t(){return(t=Object(F.a)(w.a.mark((function t(){var c,n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:if((c=t.sent).ok){t.next=6;break}throw new E({status:c.status,statusText:c.statusText?c.statusText:"An error has ocurred"});case 6:return t.next=8,c.json();case 8:n=t.sent,r(n),j(!1),O({err:!1}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),O(t.t0),j(!0);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{data:a,isPending:o,error:b}}var C=Object(N.a)("status"),P=Object(N.a)("statusText"),E=function(e){Object(p.a)(c,e);var t=Object(v.a)(c);function c(e){var n,a=e.status,r=e.statusText;Object(m.a)(this,c);for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];return n=t.call.apply(t,[this,"E".concat(a,": ").concat(r)].concat(i)),Object.defineProperty(Object(x.a)(n),C,{writable:!0,value:void 0}),Object.defineProperty(Object(x.a)(n),P,{writable:!0,value:void 0}),Error.captureStackTrace&&Error.captureStackTrace(Object(x.a)(n),c),Object(y.a)(Object(x.a)(n),C)[C]=a,Object(y.a)(Object(x.a)(n),P)[P]=r,n}return Object(f.a)(c,[{key:"name",get:function(){return this.constructor.name}},{key:"toJSON",value:function(){var e,t={},c=Object.getPrototypeOf(this),n=Object(h.a)(Object.getOwnPropertyNames(c));try{for(n.s();!(e=n.n()).done;){var a=e.value,r=Object.getOwnPropertyDescriptor(c,a);r&&"function"===typeof r.get&&(t[a]=r.get())}}catch(s){n.e(s)}finally{n.f()}return t}},{key:"error",get:function(){return!0}},{key:"status",get:function(){return Object(y.a)(this,C)[C]}},{key:"statusText",get:function(){return Object(y.a)(this,P)[P]}}]),c}(Object(g.a)(Error)),T="7cff3793d3024c2b94b14bebaf10a454",R=0;var I=function(){var e=S("https://api.spoonacular.com/recipes/random?apiKey=".concat(T,"&number=5&tags=vegetarian,dessert")),t=e.data,c=e.isPending,a=Object(n.useState)([]),r=Object(d.a)(a,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){if(!c){var e=t.recipes.map((function(e){return Object(u.jsx)(O,{data:e},++R)}));i(e)}}),[c,t]),Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("h1",{children:"Random"}),Object(u.jsx)("div",{className:"main-trend--trending-foods",children:s})]})},J=(c(54),c(55),"/Foodify".concat("/assets/icons/")),A=function(e){var t=e.name,c=e.width,n=e.height,a=e.color;return Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)("svg",{"data-src":"".concat(J).concat(t,".svg"),fill:"currentColor",width:c,height:n,style:{color:a}})})};A.defaultProps={width:"1.6em",height:"1.6em",color:"#666"};var B=A;c(61);function K(){return Object(u.jsx)("nav",{className:"bottomnav",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(B,{name:"home",alt:"home",color:"var(--bg-secundary)"})}),Object(u.jsx)("li",{children:Object(u.jsx)(B,{name:"cutlery",alt:"find recipes"})}),Object(u.jsx)("li",{children:Object(u.jsx)(B,{name:"user",alt:"account"})}),Object(u.jsx)("li",{children:Object(u.jsx)(B,{name:"recipes",alt:"my recipes"})})]})})}c(62),c(63);var M=function(e){var t=Object(n.useState)(""),c=Object(d.a)(t,2),a=c[0],r=c[1],s=S("https://api.spoonacular.com/recipes/".concat(e,"/summary?apiKey=").concat(T)),i=s.data,o=s.isPending;return Object(n.useEffect)((function(){return r(o?"No summary":i.summary.replace(/(&nbsp;|<([^>]+)>)/gi,""))}),[a,o]),a},D=function(e){var t=M(e.id);return Object(u.jsx)(i.b,{to:"/recipe",className:"Link",children:Object(u.jsxs)("article",{className:"Recipe-Card",children:[Object(u.jsx)("div",{className:"Recipe-Card--recipeImage",children:Object(u.jsx)("img",{src:e.img,alt:"recipe"})}),Object(u.jsxs)("div",{className:"Recipe-Card--recipeContent",children:[Object(u.jsx)("h2",{children:e.title.substr(0,50)+".."}),Object(u.jsx)("p",{children:"".concat(t.substr(0,55),"...")})]})]})})},G=function(){return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsxs)("div",{className:"main-similar-recipes--header",children:[Object(u.jsx)("h1",{children:"It may interest you"}),Object(u.jsxs)(i.b,{to:"/",className:"link",children:[Object(u.jsx)("p",{children:"More"})," ",Object(u.jsx)(B,{name:"next",width:"27",height:"27",color:"#FFF",className:"icon"})]})]}),Object(u.jsx)("div",{className:"main-similar-recipes--recipes",children:Object(u.jsx)(D,{id:"716429",img:"https://spoonacular.com/recipeImages/716429-312x231.jpg",title:"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs"})})]})},H=function(){return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("header",{children:Object(u.jsx)("div",{className:"header-search",children:Object(u.jsx)(b,{onSearch:function(e){console.log(e)}})})}),Object(u.jsxs)("main",{children:[Object(u.jsx)("article",{className:"main-random",children:Object(u.jsx)(I,{})}),Object(u.jsx)("article",{className:"main-similar",children:Object(u.jsx)(G,{})})]}),Object(u.jsx)(K,{})]})},L=(c(64),c(65),function(){return Object(u.jsx)("div",{children:"Recipe Header"})}),q=function(){return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("header",{children:Object(u.jsx)(L,{})}),Object(u.jsx)("main",{})]})},z=function(){return Object(u.jsx)(i.a,{basename:"/Foodify",children:Object(u.jsx)(o.a,{render:function(e){var t=e.location;return Object(u.jsx)(j.a,{className:"container",children:Object(u.jsx)(l.a,{appear:!0,timeout:{enter:400,exit:200},classNames:"fade",children:Object(u.jsx)("div",{className:"inner",children:Object(u.jsxs)(o.c,{location:t,children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:H}),Object(u.jsx)(o.a,{path:"/recipe",component:q})]},t.key)})},t.key)})}})})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.13daba7c.chunk.js.map