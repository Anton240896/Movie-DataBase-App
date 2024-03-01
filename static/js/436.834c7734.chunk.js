"use strict";(self.webpackChunkMovie_DataBase_App=self.webpackChunkMovie_DataBase_App||[]).push([[436],{877:function(n,t,e){e.d(t,{$_:function(){return u},$m:function(){return l},B8:function(){return c},Cf:function(){return s},m6:function(){return d},n:function(){return f}});var r=e(5861),i=e(7757),a=e.n(i),o=e(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var p="992758a4802a699e8df27d4d6efc34fb",c=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(p));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(p,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(p,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(p,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(p,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/videos?api_key=").concat(p,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},6378:function(n,t,e){e.d(t,{Z:function(){return b}});var r,i,a,o,p,c=e(7689),u=e(7892),s=e.n(u),f=e(168),l=e(5867),d=e(1087),x=l.ZP.ul(r||(r=(0,f.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -46px;\n  margin-left: 10px;\n  margin-right: 94px;\n  gap: 3px;\n\n  @media (max-width: 1220px) {\n    margin-left: -28px;\n    margin-top: -153px;\n    transform: scale(0.8);\n  }\n"]))),m=l.ZP.p(i||(i=(0,f.Z)(["\n  position: absolute;\n  font-size: 15px;\n  background-color: var(--tmdbNameTitle);\n  color: white;\n  text-align: center;\n  margin-left: 7px;\n  margin-top: 5px;\n  font-family: 'Courgette';\n\n  @media (min-width: 122px) {\n    width: 107px;\n    text-align: center;\n    font-size: 10px;\n    font-weight: 500;\n  }\n"]))),g=l.ZP.li(a||(a=(0,f.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n\n  &:hover {\n    transform: scale(0.9);\n    transition: transform 850ms;\n\n    & "," {\n      display: none;\n    }\n  }\n"])),m),h=(0,l.ZP)(d.rU)(o||(o=(0,f.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: #ffffff;\n  }\n"]))),v=l.ZP.img(p||(p=(0,f.Z)(["\n  width: 120px;\n  height: 180px;\n"]))),Z=e(184),b=function(n){var t=n.films,e=(0,c.TH)();return(0,Z.jsx)("section",{children:(0,Z.jsx)(x,{children:t.map((function(n){var t=n.id,r=n.title,i=n.poster_path,a=n.release_date;return(0,Z.jsx)(g,{children:(0,Z.jsxs)(h,{to:"/movies/".concat(t),state:{from:e},children:[(0,Z.jsxs)(m,{children:[r," (",s()(a).format("DD. MM. YYYY")||"No date found",")"]}),(0,Z.jsx)(v,{src:i?"".concat("https://image.tmdb.org/t/p/w500").concat(i):"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",alt:r})]})},t)}))})})}},6454:function(n,t,e){e.d(t,{Dx:function(){return R},Ei:function(){return U},Jh:function(){return w},K_:function(){return B},PJ:function(){return S},Pz:function(){return j},W2:function(){return b},ZP:function(){return z},aL:function(){return L},aV:function(){return y},de:function(){return _},lP:function(){return k},n4:function(){return P}});var r,i,a,o,p,c,u,s,f,l,d,x,m,g,h=e(168),v=e(5867),Z=e(1087),b=v.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  margin: 32px;\n  gap: 11px;\n  align-items: flex-start;\n  margin-top: 100px;\n\n  @media (max-width: 1220px) {\n    margin-top: 201px;\n    margin-left: -371px;\n    display: flex;\n    flex-direction: column;\n  }\n"]))),y=v.ZP.ul(i||(i=(0,h.Z)(["\n  gap: 12px;\n  margin: 0;\n  padding: 0;\n"]))),w=v.ZP.li(a||(a=(0,h.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),k=(0,v.ZP)(Z.rU)(o||(o=(0,h.Z)(["\n  text-decoration: none;\n  font-weight: 400;\n  font-size: 18px;\n  color: var(--tmdbRed);\n  font-family: 'Marck Script';\n\n  &:hover {\n    transform: scale(1, 2);\n    transition: transform 350ms;\n  }\n"]))),P=v.ZP.li(p||(p=(0,h.Z)(["\n  display: flex;\n"]))),j=v.ZP.p(c||(c=(0,h.Z)(["\n  color: var(--tmdbRed);\n  max-width: 199px;\n  font-family: 'Marck Script';\n  font-size: 18px;\n"]))),z=v.ZP.li(u||(u=(0,h.Z)(["\n  position: fixed;\n  left: 19px;\n  font-weight: 500;\n  font-size: 22px;\n  color: var(--tmdbLightGreen);\n  cursor: pointer;\n  list-style-type: none;\n  top: 135px;\n\n  @media (max-width: 540px) {\n    top: 348px;\n  }\n\n  &:hover {\n    color: var(--tmdbRed);\n  }\n"]))),_=v.ZP.div(s||(s=(0,h.Z)(["\n  margin-top: 120px;\n\n  @media (max-width: 1220px) {\n    margin-top: -37px;\n  }\n"]))),S=(v.ZP.h2(f||(f=(0,h.Z)(["\n  color: var(--tmdbRed);\n"]))),v.ZP.h3(l||(l=(0,h.Z)(["\n  color: var(--tmdbRed);\n  font-family: 'Marck Script';\n  font-size: 20px;\n  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms\n    both;\n"])))),B=v.ZP.div(d||(d=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: -15px;\n"]))),R=v.ZP.h1(x||(x=(0,h.Z)(["\n  color: var(--tmdbRed);\n  margin-top: -94px;\n  margin-left: -440px;\n  font-size: 44px;\n  max-width: 600px;\n  font-family: 'Courgette';\n  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms\n    both;\n\n  @media (max-width: 1220px) {\n    margin-top: 52px;\n    margin-left: 0;\n    display: flex;\n    flex-direction: column;\n    animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1)\n      700ms both;\n  }\n"]))),U=v.ZP.img(m||(m=(0,h.Z)(["\n  border: thick double var(--tmdbLightGreen);\n  width: 417px;\n  height: 789px;\n  margin-top: 126px;\n\n  @media (max-width: 1220px) {\n    width: 266px;\n    height: 386px;\n  }\n"]))),L=v.ZP.p(g||(g=(0,h.Z)(["\n  color: var(--tmdbRed);\n  font-size: 17px;\n  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms\n    both;\n\n  @media (max-width: 1220px) {\n    width: 361px;\n  }\n"])))},9436:function(n,t,e){e.r(t),e.d(t,{default:function(){return L}});var r,i,a,o,p,c,u=e(5861),s=e(9439),f=e(7757),l=e.n(f),d=e(2791),x=e(1087),m=e(7689),g=e(1578),h=e(6378),v=e(168),Z=e(5867),b=e(71),y=Z.ZP.form(r||(r=(0,v.Z)(["\n  display: flex;\n  margin-top: 238px;\n  margin-left: -219px;\n\n  @media (min-width: 1220px) {\n    margin-top: 119px;\n    margin-left: -327px;\n  }\n"]))),w=Z.ZP.input(i||(i=(0,v.Z)(["\n  padding: 7px 44px;\n  border: 2px solid var(--tmdbDarkGrey);\n  font-weight: 600;\n  font-size: 20px;\n  margin-top: 24px;\n  margin-left: -46px;\n  margin-right: 10px;\n  border-radius: 4px 8px;\n  outline: none;\n\n  @media (max-width: 1220px) {\n    padding: 7px 39px;\n    margin-top: 42px;\n    margin-left: -31px;\n    width: 88px;\n  }\n\n  &::placeholder {\n    font-family: 'Courgette';\n    font-size: 14px;\n  }\n\n  &:hover {\n    color: var(--tmdbLightBlue);\n    border: 2px solid var(--tmdbLightBlue);\n  }\n\n  &:focus {\n    color: var(--tmdbLightBlue);\n  }\n"]))),k=(0,Z.ZP)(b.eaK)(a||(a=(0,v.Z)(["\n  scale: 1.5;\n\n  &:hover {\n    color: var(--tmdbLightBlue);\n  }\n\n  &:focus {\n    color: var(--tmdbLightBlue);\n  }\n"]))),P=Z.ZP.button(o||(o=(0,v.Z)(["\n  position: relative;\n  top: 29px;\n  left: -14px;\n  background-color: var(--tmdbWhite);\n  border: none;\n  width: 24px;\n  height: 32px;\n  color: var(--tmdbDarkGrey);\n  cursor: pointer;\n\n  @media (max-width: 1220px) {\n    position: relative;\n    top: 46px;\n    left: 0;\n  }\n"]))),j=e(9014),z=e(184),_=function(n){var t=n.submitQuery;return(0,z.jsxs)(y,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.query.value.trim();if(!e)return j.ZP.error("Enter request");t(e)},children:[(0,z.jsx)(P,{type:"submit",children:(0,z.jsx)(k,{})}),(0,z.jsx)(w,{name:"query",type:"text",autoComplete:"off",placeholder:"Search films..."})]})},S=e(5510),B=e(877),R=e(6454),U=Z.ZP.p(p||(p=(0,v.Z)(["\n  margin-top: 2px;\n  margin-left: -282px;\n  color: var(--tmdbRed);\n  font-family: 'Courgette';\n  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 500ms\n    both;\n\n  @media (max-width: 1220px) {\n    margin-left: -218px;\n  }\n\n  @keyframes tracking-in-expand {\n    8% {\n      letter-spacing: -0.5em;\n      opacity: 0;\n    }\n\n    40% {\n      opacity: 0.6;\n    }\n\n    100% {\n      opacity: 1;\n    }\n  }\n"]))),L=(Z.ZP.button(c||(c=(0,v.Z)(["\n  position: fixed;\n  &:hover {\n    color: var(--tmdbRed);\n  }\n"]))),function(){var n,t,e=(0,x.lr)(),r=(0,s.Z)(e,2),i=r[0],a=r[1],o=(0,d.useState)(!1),p=(0,s.Z)(o,2),c=p[0],f=p[1],v=(0,d.useState)([]),Z=(0,s.Z)(v,2),b=Z[0],y=Z[1],w=(0,d.useState)(!1),k=(0,s.Z)(w,2),P=k[0],j=k[1],L=(0,m.TH)(),C=i.get("query");(0,d.useEffect)((function(){if(C){var n=function(){var n=(0,u.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,f(!0),n.next=4,(0,B.$_)(C);case 4:t=n.sent,y(t),j((function(){if(0===t.length)return!0})),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}}),[C]);return(0,z.jsxs)("div",{children:[(0,z.jsx)(_,{submitQuery:function(n){a({query:n})}}),(0,z.jsx)(x.rU,{to:null!==(n=null===(t=L.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",children:(0,z.jsx)(R.ZP,{type:"button",children:(0,z.jsx)(g.bUY,{size:50})})}),null!==c&&void 0!==c?c:(0,z.jsx)(S.a,{}),b.length>0&&(0,z.jsx)(h.Z,{films:b}),P&&(0,z.jsx)(U,{children:"No films, enter your request"})]})})}}]);
//# sourceMappingURL=436.834c7734.chunk.js.map