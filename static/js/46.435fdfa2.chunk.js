"use strict";(self.webpackChunkgoit_testwork=self.webpackChunkgoit_testwork||[]).push([[46],{46:function(e,r,n){n.r(r),n.d(r,{Cars:function(){return k},default:function(){return b}});var t=n(861),a=n(439),s=n(687),i=n.n(s),c=n(791);var o=n.p+"static/media/heart-sprite.5b700f2b89cb9e6033c26ab700669808.svg",u=n(184),l=function(e){var r=e.id,n=e.make,t=e.model,a=e.year,s=e.img,i=e.rentalPrice,c=e.favorite,l=e.address,d=e.rentalCompany,f=e.type,p=e.accessories;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("li",{"data-id":r,children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:s,alt:n}),(0,u.jsx)("span",{children:(0,u.jsx)("svg",{children:c?(0,u.jsx)("use",{href:o+"#icon-heart-active"}):(0,u.jsx)("use",{href:o+"#icon-heart-dactive"})})})]}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("p",{children:[n," ",(0,u.jsx)("span",{children:t}),", ",a]}),(0,u.jsx)("span",{children:i})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{children:(0,u.jsxs)("span",{children:[l[2]," | ",l[1]," | ",d," | "]})}),(0,u.jsx)("div",{children:(0,u.jsxs)("span",{children:[f," | ",t," | ",r," | ",p[2]]})})]}),(0,u.jsx)("button",{"data-id":r,children:"Learn more"})]})})},d=n(243);function f(){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(i().mark((function e(){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.Z)("https://65054d11ef808d3c66efe3a3.mockapi.io/cars");case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(){var e=[9582,9584],r=!0,n=function(){localStorage.setItem("favorites",JSON.stringify(e))};return{getFavorites:function(){return function(){if(localStorage.getItem("favorites")&&!0===r)e.push(JSON.parse(localStorage.getItem("favorites"))),r=!1}(),e},setFavorites:function(r){e.push(r),n()},deleteFavorites:function(r){e.filter((function(e){return e.id===r})),n()}}}();function v(){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(i().mark((function e(){var r,n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:return r=e.sent,n=h.getFavorites(),t=r.map((function(e){var r=!!n.includes(e.id);return e.favorite=r,e})),t,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(){var e=(0,c.useState)([]),r=(0,a.Z)(e,2),n=r[0],s=r[1];return(0,c.useEffect)((function(){function e(){return(e=(0,t.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:r=e.sent,s(r.slice(0,2));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(n),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{children:n.map((function(e){return(0,u.jsx)(l,{id:e.id,make:e.make,model:e.model,year:e.year,img:e.img,rentalPrice:e.rentalPrice,favorite:e.favorite,address:e.address,rentalCompany:e.rentalCompany,type:e.type,accessories:e.accessories},e.id)}))})})},m=n(190),g=[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],y=function(){var e=(0,c.useState)(null),r=(0,a.Z)(e,2),n=r[0],t=r[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{children:"dkfsdkfnsdfnsd"}),(0,u.jsx)(m.ZP,{defaultValue:n,onChange:t,options:g})]})};function k(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{children:"sadasdasd"}),(0,u.jsx)(y,{}),(0,u.jsx)(j,{})]})}var b=k}}]);
//# sourceMappingURL=46.435fdfa2.chunk.js.map