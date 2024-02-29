"use strict";(self.webpackChunkMovie_DataBase_App=self.webpackChunkMovie_DataBase_App||[]).push([[504],{877:function(n,e,t){t.d(e,{$_:function(){return u},$m:function(){return l},B8:function(){return s},Cf:function(){return p},m6:function(){return f},n:function(){return d}});var r=t(5861),i=t(7757),a=t.n(i),o=t(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="992758a4802a699e8df27d4d6efc34fb",s=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/videos?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},8504:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,i,a,o,c,s=t(5861),u=t(9439),p=t(7757),d=t.n(p),l=t(2791),f=t(7689),x=t(1087),h=t(7892),m=t.n(h),v=t(9014),g=t(1578),Z=t(877),b=t(168),j=t(5867),w=t(6355),P=t(7948),y=t.n(P),k=(0,j.ZP)(y())(r||(r=(0,b.Z)(["\n  position: relative;\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n  padding: 0%;\n  z-index: 1000;\n\n  @media (max-width: 1220px) {\n    margin-left: -136px;\n  }\n"]))),z=j.ZP.div(i||(i=(0,b.Z)(["\n  position: relative;\n  top: -2px;\n\n  @media (max-width: 1220px) {\n    margin-top: 0;\n    margin-left: 0;\n  }\n"]))),_=j.ZP.iframe(a||(a=(0,b.Z)(["\n  margin-left: 520px;\n  width: 50%;\n  height: 500px;\n  border: thick double var(--tmdbLightGreen);\n  border-radius: 10px;\n\n  &:focus {\n    outline: none;\n  }\n\n  @media (max-width: 1220px) {\n    width: 273px;\n  }\n"]))),S=(0,j.ZP)(w.V2E)(o||(o=(0,b.Z)(["\n  cursor: pointer;\n  color: var(--tmdbRed);\n"]))),R=j.ZP.p(c||(c=(0,b.Z)(["\n  position: absolute;\n  left: 693px;\n  top: -144px;\n  color: var(--tmdbRed);\n  font-size: 100px;\n  font-family: 'Marck Script';\n\n  @media (max-width: 1220px) {\n    font-size: 50px;\n    left: 495px;\n  }\n"]))),U=t(5510),M=t(184),J=function(n){var e=n.movieId,t=(0,l.useState)(),r=(0,u.Z)(t,2),i=r[0],a=r[1],o=(0,l.useState)(!1),c=(0,u.Z)(o,2),p=c[0],f=c[1],x=(0,l.useState)(!1),h=(0,u.Z)(x,2),m=h[0],v=h[1],g=(0,l.useRef)(null);(0,l.useEffect)((function(){function n(){return(n=(0,s.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,v(!0),n.next=4,(0,Z.m6)(e);case 4:(t=n.sent).length>0&&a(t[0].key),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error("Nothing found");case 11:return n.prev=11,v(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),console.log(g),(0,l.useEffect)((function(){var n=function(n){g.current&&!g.current.contains(n.target)&&f(!1)};return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}),[]);var b=i?(0,M.jsx)(_,{src:"https://www.youtube.com/embed/".concat(i),allowFullScreen:!0}):(0,M.jsx)(R,{children:"No trailer found"});return(0,M.jsxs)(z,{ref:g,children:[(0,M.jsx)(S,{size:120,onClick:function(){f(!0)}}),(0,M.jsxs)(k,{isOpen:p,onRequestClose:function(){f(!1)},children:[b,m&&(0,M.jsx)(U.a,{})]})]})},N=t(6454),E=function(){var n,e=(0,f.UO)().movieId,t=(0,l.useState)(!1),r=(0,u.Z)(t,2),i=r[0],a=r[1],o=(0,l.useState)(null),c=(0,u.Z)(o,2),p=c[0],h=c[1],b=(0,l.useState)(!1),j=(0,u.Z)(b,2),w=j[0],P=j[1],y=(0,f.TH)(),k=(0,l.useRef)((null===(n=y.state)||void 0===n?void 0:n.from)||"/movies");if((0,l.useEffect)((function(){function n(){return(n=(0,s.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(!1),P(!0),n.next=5,(0,Z.Cf)(e);case 5:t=n.sent,h(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),v.ZP.error("Nothing found");case 12:return n.prev=12,P(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),p){var z=p.title,_=p.release_date,S=p.vote_average,R=p.overview,E=p.genres,L=p.poster_path,C=p.original_title,D=p.runtime,K=_.slice(0,4)||"No date found",Y=0===_.length?"No date found":(0,M.jsx)(N.Pz,{children:m()(_).format("DD/ MM/ YYYY")}),A=0===R.length?"No plot found":(0,M.jsx)("b",{children:(0,M.jsx)(N.aL,{children:R})}),G=D>0?(0,M.jsxs)(N.Pz,{children:[function(n){var e=Math.floor(n/60),t=n%60;return 0===e?t+"m":0===t?e+"h":" ".concat(e,"h ").concat(t,"m ")}(D)," (duration)"]}):"No time found",B=S>0?(0,M.jsxs)(N.Pz,{children:[Math.round(10*S)," % (average vote)"]}):"No rating found",I=E.length>0?(0,M.jsx)(N.Pz,{children:E.map((function(n){return n.name})).join(" / ")}):"No genres found";return(0,M.jsx)("main",{children:(0,M.jsxs)(N.W2,{children:[(0,M.jsx)("div",{children:(0,M.jsx)(N.Ei,{src:L?"".concat("https://image.tmdb.org/t/p/w500").concat(L):"".concat("https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"),alt:C})}),(0,M.jsxs)(N.de,{children:[(0,M.jsx)(N.K_,{children:(0,M.jsx)(N.Dx,{children:(0,M.jsxs)("b",{children:[z," (",K,")"]})})}),(0,M.jsx)(J,{movieId:e}),(0,M.jsxs)(N.K_,{children:[(0,M.jsx)(N.PJ,{children:"Release Date \u2022"}),(0,M.jsx)(N.Pz,{children:Y})]}),(0,M.jsx)(N.PJ,{children:(0,M.jsx)("b",{children:"Overview \u2022"})}),(0,M.jsx)(N.Pz,{children:A}),(0,M.jsxs)(N.K_,{children:[(0,M.jsx)(N.PJ,{children:"Run time \u2022"}),(0,M.jsx)(N.Pz,{children:G})]}),(0,M.jsxs)(N.K_,{children:[(0,M.jsx)(N.PJ,{children:"User score \u2022"}),(0,M.jsx)(N.Pz,{children:B})]}),(0,M.jsxs)(N.K_,{children:[(0,M.jsx)(N.PJ,{children:"Genres \u2022"}),(0,M.jsx)(N.Pz,{children:I})]}),(0,M.jsx)(N.K_,{children:(0,M.jsx)(N.PJ,{children:(0,M.jsx)("b",{children:"Additonal information \u2022"})})}),(0,M.jsx)(N.aV,{children:(0,M.jsxs)("div",{children:[(0,M.jsxs)(N.Jh,{children:[(0,M.jsx)(N.lP,{to:"cast",children:"Actors \u2022"}),(0,M.jsx)(N.n4,{children:(0,M.jsx)(N.lP,{to:"reviews",children:"Reviews \u2022"})})]}),(0,M.jsx)(f.j3,{})]})})]}),(0,M.jsx)(x.rU,{to:k.current,children:(0,M.jsx)(N.ZP,{type:"button",children:(0,M.jsx)(g.bUY,{size:50,style:{position:"fixed",top:"193px",left:"0"}})})}),w&&(0,M.jsx)(U.Z,{}),i&&v.ZP.error("Sorry,we didnt find anything")]})})}}},6454:function(n,e,t){t.d(e,{Dx:function(){return U},Ei:function(){return M},Jh:function(){return w},K_:function(){return R},PJ:function(){return S},Pz:function(){return k},W2:function(){return b},ZP:function(){return z},aL:function(){return J},aV:function(){return j},de:function(){return _},lP:function(){return P},n4:function(){return y}});var r,i,a,o,c,s,u,p,d,l,f,x,h,m,v=t(168),g=t(5867),Z=t(1087),b=g.ZP.div(r||(r=(0,v.Z)(["\n  display: flex;\n  margin: 32px;\n  gap: 11px;\n  align-items: flex-start;\n  margin-top: 100px;\n\n  @media (max-width: 1220px) {\n    margin-top: 201px;\n    margin-left: -371px;\n    display: flex;\n    flex-direction: column;\n  }\n"]))),j=g.ZP.ul(i||(i=(0,v.Z)(["\n  gap: 12px;\n  margin: 0;\n  padding: 0;\n"]))),w=g.ZP.li(a||(a=(0,v.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),P=(0,g.ZP)(Z.rU)(o||(o=(0,v.Z)(["\n  text-decoration: none;\n  font-weight: 400;\n  font-size: 18px;\n  color: var(--tmdbRed);\n  font-family: 'Marck Script';\n\n  &:hover {\n    transform: scale(1, 2);\n    transition: transform 350ms;\n  }\n"]))),y=g.ZP.li(c||(c=(0,v.Z)(["\n  display: flex;\n"]))),k=g.ZP.p(s||(s=(0,v.Z)(["\n  color: var(--tmdbRed);\n  max-width: 199px;\n  font-family: 'Marck Script';\n  font-size: 18px;\n"]))),z=g.ZP.li(u||(u=(0,v.Z)(["\n  position: fixed;\n  left: 19px;\n  font-weight: 500;\n  font-size: 22px;\n  color: var(--tmdbLightGreen);\n  cursor: pointer;\n  list-style-type: none;\n  top: 135px;\n\n  @media (max-width: 540px) {\n    top: 348px;\n  }\n\n  &:hover {\n    color: var(--tmdbRed);\n  }\n"]))),_=g.ZP.div(p||(p=(0,v.Z)(["\n  margin-top: 120px;\n\n  @media (max-width: 1220px) {\n    margin-top: -37px;\n  }\n"]))),S=(g.ZP.h2(d||(d=(0,v.Z)(["\n  color: var(--tmdbRed);\n"]))),g.ZP.h3(l||(l=(0,v.Z)(["\n  color: var(--tmdbRed);\n  font-family: 'Marck Script';\n  font-size: 20px;\n  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms\n    both;\n"])))),R=g.ZP.div(f||(f=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: -15px;\n"]))),U=g.ZP.h1(x||(x=(0,v.Z)(["\n  color: var(--tmdbRed);\n  margin-top: -94px;\n  margin-left: -440px;\n  font-size: 44px;\n  max-width: 600px;\n  font-family: 'Courgette';\n  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms\n    both;\n\n  @media (max-width: 1220px) {\n    margin-top: 52px;\n    margin-left: 0;\n    display: flex;\n    flex-direction: column;\n    animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1)\n      700ms both;\n  }\n"]))),M=g.ZP.img(h||(h=(0,v.Z)(["\n  border: thick double var(--tmdbLightGreen);\n  width: 417px;\n  height: 789px;\n  margin-top: 126px;\n\n  @media (max-width: 1220px) {\n    width: 266px;\n    height: 386px;\n  }\n"]))),J=g.ZP.p(m||(m=(0,v.Z)(["\n  color: var(--tmdbRed);\n  font-size: 17px;\n  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms\n    both;\n\n  @media (max-width: 1220px) {\n    width: 361px;\n  }\n"])))}}]);
//# sourceMappingURL=504.b6466360.chunk.js.map