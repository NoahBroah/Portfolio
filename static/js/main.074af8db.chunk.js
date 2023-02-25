(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{46:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(22),a=n(11),s=n(9),i=n(38),l=n(37),r=n(6),o=function(){var e=Object(s.useCallback)((function(e){Object(l.a)(e)}),[]);return Object(r.jsx)(i.a,{init:e,options:{fpsLimit:60,interactivity:{modes:{push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#90a0d9"},links:{color:"#90a0d9",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{directions:"none",enable:!0,outModes:{default:"bounce"},random:!0,speed:2,straight:!1},number:{density:{enable:!0,area:800},value:60},opacity:{value:.5},shape:{type:"circle"},size:{value:{min:1,max:5}}},detectRetina:!0}})},j=Object(s.createContext)(),b=function(e){var t=e.children,n=Object(s.useState)("light"),c=Object(a.a)(n,2),i=c[0],l=c[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");l(e.matches?"dark":"light"),e.addEventListener("change",(function(e){l(e.matches?"dark":"light")}))}),[]);return Object(r.jsx)(j.Provider,{value:[{themeName:i,toggleTheme:function(){var e="dark"===i?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},h="https://noahbroah.github.io",u="NBK.",d="{ Noah King }",m="Full Stack Software Engineer",O="I'm an Entreprenuer and aspring software developer who enjoy's building applications that help solve problems in the world.",p="https://drive.google.com/uc?id=1l9yN4fsP4rkMl5sCDUqYe-fRZ5x5yWN9",x={linkedin:"https://www.linkedin.com/in/noah-b-king/",github:"https://github.com/NoahBroah"},f=[{name:"JobVerify",description:"Website designed to streamline the hiring process by allowing current and past employees to request employement verifcation from companies, saving time and increasing credibility.",stack:["Rails","JavaScript","React"],sourceCode:"https://github.com/NoahBroah/JobVerify"},{name:"Collabland",description:"Allows users to create collaborative projects, that other users can be a part of.",stack:["Rails","JavaScript","React"],sourceCode:"https://github.com/NoahBroah/Phase-4-project"}],v=["HTML","CSS","JavaScript","TypeScript","React","Redux","Rails","Material UI","Git","SQL","Bootstrap","Python"],k="noahbking1@mail.com",N=n(31),g=n.n(N),_=n(29),y=n.n(_),w=n(33),C=n.n(w),S=n(32),R=n.n(S),E=(n(46),function(){var e=Object(s.useContext)(j),t=Object(a.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,i=Object(s.useState)(!1),l=Object(a.a)(i,2),o=l[0],b=l[1],h=function(){return b(!o)};return Object(r.jsxs)("nav",{className:"center nav",children:[Object(r.jsxs)("ul",{style:{display:o?"flex":null},className:"nav__list",children:[f.length?Object(r.jsx)("li",{className:"nav__list-item",children:Object(r.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,v.length?Object(r.jsx)("li",{className:"nav__list-item",children:Object(r.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,k?Object(r.jsx)("li",{className:"nav__list-item",children:Object(r.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(r.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(r.jsx)(y.a,{}):Object(r.jsx)(g.a,{})}),Object(r.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:o?Object(r.jsx)(R.a,{}):Object(r.jsx)(C.a,{})})]})}),P=(n(49),function(){var e=h,t=u;return Object(r.jsxs)("header",{className:"header center",children:[Object(r.jsx)("h3",{children:e?Object(r.jsx)("a",{href:e,className:"link",children:t}):t}),Object(r.jsx)(E,{})]})}),J=n(24),B=n.n(J),L=n(34),I=n.n(L),M=(n(50),function(){var e=d,t=m,n=O,c=p,a=x;return Object(r.jsxs)("div",{className:"about center",children:[e&&Object(r.jsxs)("h1",{children:["Hi, I am ",Object(r.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(r.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(r.jsx)("p",{className:"about__desc",children:n&&n}),Object(r.jsxs)("div",{className:"about__contact center",children:[c&&Object(r.jsx)("a",{href:c,children:Object(r.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(r.jsxs)(r.Fragment,{children:[a.github&&Object(r.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(r.jsx)(B.a,{})}),a.linkedin&&Object(r.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(r.jsx)(I.a,{})})]})]})]})}),T=n(14),q=n.n(T),z=n(35),A=n.n(z),F=(n(52),function(e){var t=e.project;return Object(r.jsxs)("div",{className:"project",children:[Object(r.jsx)("h3",{children:t.name}),Object(r.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(r.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(r.jsx)("li",{className:"project__stack-item",children:e},q()())}))}),t.sourceCode&&Object(r.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(r.jsx)(B.a,{})}),t.livePreview&&Object(r.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(r.jsx)(A.a,{})})]})}),H=(n(53),function(){return f.length?Object(r.jsxs)("section",{id:"projects",className:"section projects",children:[Object(r.jsx)("h2",{className:"section__title",children:"Projects"}),Object(r.jsx)("div",{className:"projects__grid",children:f.map((function(e){return Object(r.jsx)(F,{project:e},q()())}))})]}):null}),K=(n(54),function(){return v.length?Object(r.jsxs)("section",{className:"section skills",id:"skills",children:[Object(r.jsx)("h2",{className:"section__title",children:"Skills"}),Object(r.jsx)("ul",{className:"skills__list",children:v.map((function(e){return Object(r.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},q()())}))})]}):null}),U=n(36),V=n.n(U),W=(n(55),function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(r.jsx)("div",{className:"scroll-top",children:Object(r.jsx)("a",{href:"#top",children:Object(r.jsx)(V.a,{fontSize:"large"})})}):null}),Y=(n(56),function(){return k?Object(r.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(r.jsx)("h2",{className:"section__title",children:"Contact"}),Object(r.jsx)("a",{href:"mailto:".concat(k),children:Object(r.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),D=(n(57),function(){return Object(r.jsx)("footer",{className:"footer"})});n(58);var G=function(){var e=Object(s.useContext)(j),t=Object(a.a)(e,1)[0].themeName;return Object(r.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(r.jsx)(o,{}),Object(r.jsx)(P,{}),Object(r.jsxs)("main",{children:[Object(r.jsx)(M,{}),Object(r.jsx)(H,{}),Object(r.jsx)(K,{}),Object(r.jsx)(Y,{})]}),Object(r.jsx)(W,{}),Object(r.jsx)(D,{})]})};n(59);Object(c.render)(Object(r.jsx)(b,{children:Object(r.jsx)(G,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.074af8db.chunk.js.map