"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[740],{740:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(861),a=r(439),c=r(757),s=r.n(c),o=r(791),u=r(444),i=r(689),p="cast_profilePoster__oT5Av",f="cast_castListItem__CRYDj",h="cast_castList__yD6XP",l="cast_data__l9H6D",d=r(714),v=r(184),m=function(){var e=(0,o.useState)(null),t=(0,a.Z)(e,2),r=t[0],c=t[1],m=(0,i.UO)().id,x=(0,o.useState)(!1),w=(0,a.Z)(x,2),k=w[0],b=w[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,(0,u.xc)(m);case 3:t=e.sent,c(t.cast),b(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[m]),(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("ul",{className:h,children:[k&&(0,v.jsx)(d.a,{}),null===r||void 0===r?void 0:r.map((function(e){return(0,v.jsxs)("li",{className:f,children:[(0,v.jsx)("img",{className:p,src:e.profile_path?"https://image.tmdb.org/t/p/w500".concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",alt:e.name+"photo"}),(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("p",{children:e.name}),(0,v.jsxs)("p",{children:["Character: ",e.character]})]})]},e.id)}))]})})}},714:function(e,t,r){r.d(t,{a:function(){return s}});var n=r(691),a="loader_loader__1AOoV",c=r(184),s=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.NB,{visible:!0,height:"150",width:"150",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},444:function(e,t,r){r.d(t,{Hx:function(){return f},JE:function(){return u},Tg:function(){return o},Y5:function(){return i},xc:function(){return p}});var n=r(861),a=r(757),c=r.n(a),s="c1313c580a28eb18aa8970cd12a87819",o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error(t.status);case 5:return e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error(r.status);case 5:return e.next=7,r.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error(r.status);case 5:return e.next=7,r.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error(r.status);case 5:return e.next=7,r.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error(r.status);case 5:return e.next=7,r.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=740.7d9649aa.chunk.js.map