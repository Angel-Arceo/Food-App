(this["webpackJsonpfood-app"]=this["webpackJsonpfood-app"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(13),i=c.n(a),s=(c(38),c(39),c(14)),o=c(3),j=c(72),l=c(71),u=(c(40),c(41),c(42),c(1)),b="/Foodify".concat("/assets/icons/"),d=function(e){var t=e.name,c=e.width,n=e.height,r=e.stroke,a=e.fill,i=e.onClick;return Object(u.jsx)("div",{className:"icon",onClick:i,children:Object(u.jsx)("svg",{"data-src":"".concat(b).concat(t,".svg"),fill:"currentColor",width:c,height:n,style:{color:a,stroke:r}})})};d.defaultProps={width:"1.6em",height:"1.6em",stroke:"#fff",fill:"transparent"};var h=d,O=(c(50),function(e){var t=Object(n.useRef)(null);return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("button",{className:"Search-btn",onClick:function(){e.onSearch(t.current.value)},children:Object(u.jsx)(h,{className:"Search-btn--icon",name:"search",width:"25",height:"25",fill:"transparent",stroke:"#fff"})}),Object(u.jsx)("input",{className:"Search-input",type:"text",placeholder:"Search",ref:t})]})}),f=c(6),p=(c(51),c(11)),m=c(12),x=c(15),v=c(17),g=(c(52),document.querySelector("#portal")),y=function(e){Object(x.a)(c,e);var t=Object(v.a)(c);function c(){var e;return Object(p.a)(this,c),(e=t.call(this)).componentDidMount=function(){g.appendChild(e.el)},e.componentWillUnmount=function(){g.removeChild(e.el)},e.el=document.createElement("div"),e}return Object(m.a)(c,[{key:"render",value:function(){var e=this.props.children;return i.a.createPortal(e,this.el)}}]),c}(r.a.Component),N=function(e){Object(x.a)(c,e);var t=Object(v.a)(c);function c(){return Object(p.a)(this,c),t.apply(this,arguments)}return Object(m.a)(c,[{key:"render",value:function(){var e=this.props,t=e.children,c=e.toggle,n=e.active,r=e.title,a=e.height;return Object(u.jsx)(y,{children:n&&Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsxs)("div",{className:"window",style:{height:a+"px"},children:[Object(u.jsxs)("div",{className:"window-header",children:[Object(u.jsx)("button",{className:"closeBtn",onClick:c,children:Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-x",width:"25",height:"25",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#282828",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(u.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(u.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Object(u.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),Object(u.jsx)("h1",{children:r}),Object(u.jsx)("hr",{})]}),Object(u.jsx)("div",{children:t})]})})})}}]),c}(r.a.Component),k=(c(53),function(){return Object(u.jsx)(n.Fragment,{children:"This is a filter"})}),w=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),c=t[0],r=t[1],a=function(){r(!c)};return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("button",{className:"filtersBtn",onClick:a,children:Object(u.jsx)(h,{name:"filter",width:"25",height:"25",fill:"transparent",stroke:"#fff"})}),Object(u.jsx)(N,{active:c,toggle:a,title:"Filters",height:"330",children:Object(u.jsx)("div",{className:"filters",children:Object(u.jsx)(k,{})})})]})},S=(c(54),function(e){var t=e.data,c=t.title,n=t.image;return Object(u.jsx)(s.b,{to:"/recipe",children:Object(u.jsxs)("div",{className:"Food-Card",children:[Object(u.jsx)("img",{className:"Food-Card--img",src:n,alt:c}),Object(u.jsx)("div",{className:"Food-Card--title",children:Object(u.jsx)("h2",{children:"".concat(c.substr(0,55),"..")})})]})})}),C=(c(63),c(30)),F=c(9),P=c(32),R=c(20),E=c(28),T=c(21),I=c.n(T),B=c(31);function J(e){var t=Object(n.useState)(null),c=Object(f.a)(t,2),r=c[0],a=c[1],i=Object(n.useState)(!0),s=Object(f.a)(i,2),o=s[0],j=s[1],l=Object(n.useState)(null),u=Object(f.a)(l,2),b=u[0],d=u[1];return Object(n.useEffect)((function(){function t(){return(t=Object(B.a)(I.a.mark((function t(){var c,n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:if((c=t.sent).ok){t.next=6;break}throw new M({status:c.status,statusText:c.statusText?c.statusText:"An error has ocurred"});case 6:return t.next=8,c.json();case 8:n=t.sent,a(n),j(!1),d({err:!1}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),d(t.t0),j(!0);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{data:r,isPending:o,error:b}}var K=Object(E.a)("status"),L=Object(E.a)("statusText"),M=function(e){Object(x.a)(c,e);var t=Object(v.a)(c);function c(e){var n,r=e.status,a=e.statusText;Object(p.a)(this,c);for(var i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return n=t.call.apply(t,[this,"E".concat(r,": ").concat(a)].concat(s)),Object.defineProperty(Object(F.a)(n),K,{writable:!0,value:void 0}),Object.defineProperty(Object(F.a)(n),L,{writable:!0,value:void 0}),Error.captureStackTrace&&Error.captureStackTrace(Object(F.a)(n),c),Object(R.a)(Object(F.a)(n),K)[K]=r,Object(R.a)(Object(F.a)(n),L)[L]=a,n}return Object(m.a)(c,[{key:"name",get:function(){return this.constructor.name}},{key:"toJSON",value:function(){var e,t={},c=Object.getPrototypeOf(this),n=Object(C.a)(Object.getOwnPropertyNames(c));try{for(n.s();!(e=n.n()).done;){var r=e.value,a=Object.getOwnPropertyDescriptor(c,r);a&&"function"===typeof a.get&&(t[r]=a.get())}}catch(i){n.e(i)}finally{n.f()}return t}},{key:"error",get:function(){return!0}},{key:"status",get:function(){return Object(R.a)(this,K)[K]}},{key:"statusText",get:function(){return Object(R.a)(this,L)[L]}}]),c}(Object(P.a)(Error)),A="7cff3793d3024c2b94b14bebaf10a454",D=0;function H(){return++D}var W=function(){var e=J("https://api.spoonacular.com/recipes/random?apiKey=".concat(A,"&number=5&tags=vegetarian,dessert")),t=e.data,c=e.isPending,r=Object(n.useState)([]),a=Object(f.a)(r,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){if(!c){var e=t.recipes.map((function(e){return Object(u.jsx)(S,{data:e},H())}));s(e)}}),[c,t]),Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("h1",{className:"Random-Recipe-title",children:"Random"}),Object(u.jsx)("div",{className:"Random-Recipe--trending-foods",children:i})]})};c(64);function q(){return Object(u.jsx)("nav",{className:"bottomnav",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(h,{name:"home",fill:"var(--bg-secundary)"})}),Object(u.jsx)("li",{children:Object(u.jsx)(h,{name:"cutlery",fill:"#666"})}),Object(u.jsx)("li",{children:Object(u.jsx)(h,{name:"user",fill:"#666"})}),Object(u.jsx)("li",{children:Object(u.jsx)(h,{name:"recipes",fill:"#666"})})]})})}c(65),c(66);var z=function(e){var t=Object(n.useState)(""),c=Object(f.a)(t,2),r=c[0],a=c[1],i=Object(n.useState)(""),o=Object(f.a)(i,2),j=o[0],l=o[1],b=J("https://api.spoonacular.com/recipes/".concat(e.id,"/information?apiKey=").concat(A)),d=b.data,h=b.isPending;return Object(n.useEffect)((function(){a(h?"https://spoonacular.com/recipeImages/716429-556x370.jpg":d.image),l(h?"No summary":d.summary.replace(/(&nbsp;|<([^>]+)>)/gi,""))}),[h,d]),Object(u.jsx)(s.b,{to:"/recipe",className:"Recipe-Card--Link",children:Object(u.jsxs)("article",{className:"Recipe-Card",children:[Object(u.jsx)("div",{className:"Recipe-Card--recipeImage",children:Object(u.jsx)("img",{className:"recipeImage",src:r,alt:"recipe"})}),Object(u.jsxs)("div",{className:"Recipe-Card--recipeContent",children:[Object(u.jsx)("h2",{children:e.title.substr(0,50)+".."}),Object(u.jsx)("p",{children:"".concat(j.substr(0,55),"...")})]})]})})},U=function(e){var t=J("https://api.spoonacular.com/recipes/".concat(e.id,"/similar?apiKey=").concat(A,"&number=4")),c=t.data,r=t.isPending,a=Object(n.useState)([]),i=Object(f.a)(a,2),s=i[0],o=i[1];return Object(n.useEffect)((function(){if(!r){var e=c.map((function(e){return Object(u.jsx)(z,{id:e.id,title:e.title},H())}));o(e)}}),[r,c]),Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("div",{className:"similar-recipes",children:Object(u.jsx)("h1",{className:"similiar-recipes--h1",children:"It may interest you"})}),Object(u.jsx)("div",{className:"similar-recipes--recipes",children:s})]})},G=function(){return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("div",{className:"header-search",children:Object(u.jsx)(O,{onSearch:function(e){console.log(e)}})}),Object(u.jsx)(w,{})]}),Object(u.jsxs)("main",{children:[Object(u.jsx)("article",{className:"main-random",children:Object(u.jsx)(W,{})}),Object(u.jsx)("article",{className:"main-similar",children:Object(u.jsx)(U,{id:"209128"})})]}),Object(u.jsx)(q,{})]})},Q=(c(67),c(68),function(){return Object(u.jsx)("div",{children:"Recipe Header"})}),V=function(){return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("header",{children:Object(u.jsx)(Q,{})}),Object(u.jsx)("main",{})]})},X=function(){return Object(u.jsx)(s.a,{basename:"/Foodify",children:Object(u.jsx)(o.a,{render:function(e){var t=e.location;return Object(u.jsx)(j.a,{className:"container",children:Object(u.jsx)(l.a,{appear:!0,timeout:{enter:400,exit:200},classNames:"fade",children:Object(u.jsx)("div",{className:"inner",children:Object(u.jsxs)(o.c,{location:t,children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:G}),Object(u.jsx)(o.a,{path:"/recipe",component:V})]},t.key)})},t.key)})}})})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(X,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.a66a20d0.chunk.js.map