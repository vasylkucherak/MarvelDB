(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[4],{19:function(e,t,c){"use strict";var n=c.p+"static/media/error.42292aa1.gif",a=c(0);t.a=function(){return Object(a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"Error"})}},22:function(e,t,c){"use strict";var n=c(20),a=c.n(n),r=c(21),s=c(4),i=c(1);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(r.a)(a.a.mark((function e(t){var c,r,s,i,o,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},n(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:r,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,n(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),n(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){return j(null)}),[])}}(),t=e.loading,c=e.request,n=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=d38db524f1327833af1e5d69fde84f78",j=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:210,e.next=3,c("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(m));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",m(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,c("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"comics/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",f(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},f=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,pageCount:e.pageCount?"".concat(e.pageCount," pages"):"No information about the number of pages",language:e.textObjects.language||"en-us",price:e.prices.price?"".concat(e.prices.price,"$"):"not available"}};return{loading:t,error:n,clearError:o,getAllCharacters:j,getCharacter:b,getAllComics:h,getComic:d}}},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c(1),r=c(25),s=c(26),i=c(35),o=c(34),l=c(19),u=c(0),j=function(e){Object(i.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(s.a)(c,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(l.a,{}):this.props.children}}]),c}(a.Component),b=c(9),h=c(22),d=(c(27),c.p+"static/media/mjolnir.61f31e18.png"),m=function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),Object(u.jsxs)("div",{className:"randomchar__block",children:[Object(u.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:i}),Object(u.jsxs)("div",{className:"randomchar__info",children:[Object(u.jsx)("p",{className:"randomchar__name",children:c}),Object(u.jsx)("p",{className:"randomchar__descr",children:n}),Object(u.jsxs)("div",{className:"randomchar__btns",children:[Object(u.jsx)("a",{href:r,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},f=function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),c=t[0],r=t[1],s=Object(h.a)(),i=s.loading,o=s.error,j=s.getCharacter,f=s.clearError;Object(a.useEffect)((function(){p();var e=setInterval(p,6e4);return function(){clearInterval(e)}}),[]);var O=function(e){r(e)},p=function(){f();var e=Math.floor(400*Math.random()+1011e3);j(e).then(O)},v=o?Object(u.jsx)(l.a,{}):null,x=i?Object(u.jsx)(b.a,{}):null,_=i||o?null:Object(u.jsx)(m,{char:c});return Object(u.jsxs)("div",{className:"randomchar",children:[v,x,_,Object(u.jsxs)("div",{className:"randomchar__static",children:[Object(u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(u.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(u.jsx)("button",{onClick:p,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"try it"})}),Object(u.jsx)("img",{src:d,alt:"mjolnir",className:"randomchar__decoration"})]})]})},O=c(24),p=(c(28),function(e){var t=Object(a.useState)([]),c=Object(n.a)(t,2),r=c[0],s=c[1],i=Object(a.useState)(!1),o=Object(n.a)(i,2),j=o[0],d=o[1],m=Object(a.useState)(210),f=Object(n.a)(m,2),p=f[0],v=f[1],x=Object(a.useState)(!1),_=Object(n.a)(x,2),g=_[0],N=_[1],k=Object(h.a)(),y=k.loading,w=k.error,C=k.getAllCharacters;Object(a.useEffect)((function(){E(p,!0)}),[]);var E=function(e,t){d(!t),C(e).then(S)},S=function(e){var t=!1;e.lenght<9&&(t=!0),s((function(t){return[].concat(Object(O.a)(t),Object(O.a)(e))})),d((function(e){return!1})),v((function(e){return e+9})),N((function(e){return t}))},F=Object(a.useRef)([]),I=function(e){F.current.forEach((function(e){return e.classList.remove("char__item_selected")})),F.current[e].classList.add("char__item_selected"),F.current[e].focus()};var T=function(t){var c=t.map((function(t,c){var n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(n={objectFit:"unset"}),Object(u.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return F.current[c]=e},onClick:function(){e.onCharSelected(t.id),I(c)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(e.onCharSelected(t.id),I(c))},children:[Object(u.jsx)("img",{src:t.thumbnail,alt:t.name,style:n}),Object(u.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(u.jsx)("ul",{className:"char__grid",children:c})}(r),A=w?Object(u.jsx)(l.a,{}):null,R=y&&!j?Object(u.jsx)(b.a,{}):null;return Object(u.jsxs)("div",{className:"char__list",children:[A,R,T,Object(u.jsx)("button",{className:"button button__main button__long",disabled:j,style:{display:g?"none":"block"},onClick:function(){return E(p)},children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})}),v=(c(29),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(u.jsxs)("div",{className:"skeleton",children:[Object(u.jsxs)("div",{className:"pulse skeleton__header",children:[Object(u.jsx)("div",{className:"pulse skeleton__circle"}),Object(u.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"})]})]})}),x=(c(30),function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(o={objectFit:"contain"}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"char__basics",children:[Object(u.jsx)("img",{src:a,alt:c,style:o}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"char__info-name",children:c}),Object(u.jsxs)("div",{className:"char__btns",children:[Object(u.jsx)("a",{href:r,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(u.jsx)("div",{className:"char__descr",children:n}),Object(u.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(u.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(u.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),_=function(e){var t=Object(a.useState)(null),c=Object(n.a)(t,2),r=c[0],s=c[1],i=Object(h.a)(),o=i.loading,j=i.error,d=i.getCharacter,m=i.clearError;Object(a.useEffect)((function(){f()}),[e.charId]);var f=function(){var t=e.charId;t&&(m(),d(t).then(O))},O=function(e){s(e)},p=r||o||j?null:Object(u.jsx)(v,{}),_=j?Object(u.jsx)(l.a,{}):null,g=o?Object(u.jsx)(b.a,{}):null,N=o||j||!r?null:Object(u.jsx)(x,{char:r});return Object(u.jsxs)("div",{className:"char__info",children:[p,_,g,N]})},g=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(a.useState)(null),t=Object(n.a)(e,2),c=t[0],r=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{children:Object(u.jsx)(f,{})}),Object(u.jsxs)("div",{className:"char__content",children:[Object(u.jsx)(j,{children:Object(u.jsx)(p,{onCharSelected:function(e){r(e)}})}),Object(u.jsx)(j,{children:Object(u.jsx)(_,{charId:c})})]}),Object(u.jsx)("img",{className:"bg-decoration",src:g,alt:"vision"})]})}}}]);
//# sourceMappingURL=4.b12951bc.chunk.js.map