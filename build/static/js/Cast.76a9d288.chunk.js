(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{26:function(t,e,c){t.exports={cast:"Cast_cast__1hiRw"}},29:function(t,e,c){"use strict";c.r(e);var a=c(4),n=c(17),s=c(1),i=c(0),r=c(26),h=c.n(r),o=c(21),j=c(2);e.default=function(){var t=Object(s.h)().movieID,e=Object(i.useState)(null),c=Object(a.a)(e,2),r=c[0],l=c[1];return Object(i.useEffect)((function(){n.a(t).then((function(t){l(t.cast)}))}),[t]),r&&0===r.length?Object(j.jsx)("p",{children:"We don't have any cast for this movie"}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:h.a.cast,children:r&&r.map((function(t){return Object(j.jsxs)("li",{children:[Object(j.jsx)("img",{src:t.profile_path?"".concat("https://image.tmdb.org/t/p/w500").concat(t.profile_path):o.a,alt:t.name}),Object(j.jsx)("p",{children:t.name}),Object(j.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})})}}}]);
//# sourceMappingURL=Cast.76a9d288.chunk.js.map