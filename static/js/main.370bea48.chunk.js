(this["webpackJsonpreact-app-practice"]=this["webpackJsonpreact-app-practice"]||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(15),i=c.n(s),r=(c(44),c(45),c(8)),l=c(1),o=function(){return Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsx)("div",{className:"links",children:Object(l.jsxs)("ul",{className:"linkOptions",children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/catapp",children:"Cat Api"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/buttoncount",children:" Counter"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/backgroundcolor",children:"Change color"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/lettercount",children:"Count letter"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/toggleapp",children:"Toggling"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/copycat",children:"Copy Cat"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/guineapig",children:"GuineaPigs"})})]})})})},j=c(4);c(52);function b(){var e=Object(a.useState)(0),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(l.jsx)("div",{className:"counterDisplay",children:Object(l.jsxs)("header",{className:"App",children:[Object(l.jsx)("h1",{children:"Counter"}),Object(l.jsx)("button",{className:"count",onClick:function(){n(++c)},children:"Add"}),Object(l.jsx)("div",{className:"displayCount",children:c}),Object(l.jsx)("button",{className:"reset",onClick:function(){c>0&&n(0)},children:"Reset"})]})})}var u=c(39),h=(c(53),function(){var e=Object(a.useState)("LightSeaGreen"),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(l.jsx)("div",{className:"container1",style:{backgroundColor:c},children:Object(l.jsxs)("div",{className:"backGround",children:[Object(l.jsx)("h2",{children:"Hello, World! "}),Object(l.jsx)("p",{children:"What colour?"}),Object(l.jsx)(u.a,{options:[{value:1,label:"LightSeaGreen"},{value:2,label:"DarkGoldenrod"},{value:3,label:"Cornflowerblue"},{value:4,label:"Darkturquoise"},{value:5,label:"Mediumslateblue"},{value:6,label:"Teal"},{value:7,label:"RoyalBlue"},{value:8,label:"Turquoise"}],onChange:function(e){n(e.label)},label:"Choose a color  {colorr}"})]})})}),d=c(33),p=c.n(d),x=c(38),O=c(11),m=c(12),f=c(14),g=c(13),v=(c(60),function(e){var t=e.handleGetRequest;return Object(l.jsxs)("div",{className:"imageSearch",children:[Object(l.jsx)("button",{className:"imageDisplay",name:"hats",id:"1",onClick:t,children:"hats"}),Object(l.jsx)("button",{className:"imageDisplay",name:"boxes",id:"5",onClick:t,children:"boxes"}),Object(l.jsx)("button",{className:"imageDisplay",name:"clothes",id:"15",onClick:t,children:"clothes"})]})}),y=(c(61),function(e){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:e.images.map((function(e){var t=e.id,c=e.url;return Object(l.jsx)("div",{className:"col-md-4",style:{marginBottom:"2rem"},children:Object(l.jsx)("div",{className:"imageList__container",children:Object(l.jsx)("img",{className:"imageList__image",src:c,alt:"cats"})})},t)}))})})}),C=(c(62),"https://api.thecatapi.com/v1/images/search"),w=function(e){Object(f.a)(c,e);var t=Object(g.a)(c);function c(){var e;Object(O.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={images:[],error:null},e.handleGetRequest=function(){var t=Object(x.a)(p.a.mark((function t(c){var a,n,s,i,r,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),a=c.target.id,n="".concat(C,"?limit=5&category_ids=").concat(a,"&api_key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-app-practice",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_kEY),(s=new Headers).append("Content-Type","application/json"),i={method:"GET",headers:s,redirect:"follow"},t.next=8,fetch(n,i);case 8:if(r=t.sent){t.next=13;break}e.setState({error:"It's loading or no longer availabe."}),t.next=17;break;case 13:return t.next=15,r.json();case 15:l=t.sent,e.setState({images:l,error:null});case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(c,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"copyright",children:[Object(l.jsx)("h3",{children:"Welcome to CAT WEB !"}),Object(l.jsx)("p",{children:"\xa9TheCatApi"}),Object(l.jsx)(v,{handleGetRequest:this.handleGetRequest}),Object(l.jsx)(y,{images:this.state.images})]})}}]),c}(n.a.Component),S=c(19),N=c(20),k=c(34);function M(e){var t=e.handleChange,c=e.handleSubmitt,a=e.handleReset,n=e.text;return Object(l.jsxs)("form",{onSubmit:c,onReset:a,children:[Object(l.jsx)("input",{type:"text",value:n||"",placeholder:"Type text  here ...",autoComplete:"off",onChange:t}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"submit",className:"imageDisplay",children:"Submit"}),n?Object(l.jsx)("button",{type:"reset",value:"Reset",className:"reset",children:"Reset"}):null]})}var T=function(e){var t=e.allResult,c=e.allMost,a=e.allStatus;return e.allText||(c="",t=[]),Object(l.jsx)("div",{className:"listing",children:a?Object(l.jsxs)("p",{children:["Favourite letters are : ",t," counts : ",c]}):Object(l.jsxs)("p",{children:["Favourite letter is : ",t," count : ",c]})})};c(63);function H(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),i=Object(j.a)(s,2),r=i[0],o=i[1],b=Object(a.useState)([]),u=Object(j.a)(b,2),h=u[0],d=u[1],p=Object(a.useState)(!1),x=Object(j.a)(p,2),O=x[0],m=x[1],f=!1,g=function(e){return Object(k.a)(e).reduce((function(e,t){return e.hasOwnProperty(t)?Object(N.a)(Object(N.a)({},e),{},Object(S.a)({},t,e[t]+1)):Object(N.a)(Object(N.a)({},e),{},Object(S.a)({},t,1))}),{})};return Object(l.jsxs)("div",{className:"messageInput",children:[Object(l.jsx)(M,{text:c,handleChange:function(e){var t=e.target;return n(t.value.replace(/[^a-zA-Z.!?\\-]/g," "))},handleSubmitt:function(e){e.preventDefault();var t=g(c.toLowerCase()),a=Object.keys(t),n=Math.max.apply(Math,Object(k.a)(Object.values(t)));o(n);var s=a.reduce((function(e,c){return t[c]===n&&e.push(c),e}),[]);d(s),f=s.length>1,m(f)},handleReset:function(e){e.preventDefault(),n(""),o("")}}),r&&Object(l.jsx)(T,{allResult:h,allMost:r,allStatus:O,allText:c})]})}function D(){var e=n.a.useState(!0),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(l.jsxs)("div",{className:"room",children:["the room is ",c?"lit":"dark",Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:function(){return a(!c)},children:"flip"})]})}function R(){var e=Object(a.useState)(!0),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("div",{className:"press",children:[Object(l.jsxs)("button",{id:"secret-button",onClick:function(){return n(!c)},children:[" ","Press me... if you dare"," "]}),Object(l.jsxs)("p",{className:"secret-message",children:[" ",c?" ":"Modules are fancy!"]})]})}function _(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=setInterval((function(){n(function(){var e=255*Math.random(),t=255*Math.random(),c=255*Math.random();return"rgb(".concat(e,", ").concat(t,", ").concat(c,")")}())}),3e3);return function(){return clearInterval(e)}}),[]),Object(l.jsxs)("main",{className:"textColor",children:[Object(l.jsx)("p",{children:" Setinterval."}),Object(l.jsx)("h1",{style:{color:c},children:"I change color every 3 seconds."})]})}c(64);function A(){return Object(l.jsxs)("div",{className:"toogleapp",children:[Object(l.jsx)(_,{}),Object(l.jsx)(D,{}),Object(l.jsx)(R,{})]})}var W=c(18),G={divStyles:{fontFamily:"Comic Sans MS, Lucida Handwriting, cursive",fontSize:"5vh",color:"rgb(66, 245, 212)",backgroundColor:"rgb(150, 161, 227)",minHeight:"100vh",minWidth:400,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},imgStyles:{marginTop:"20px",width:"30%"}},P="https://content.codecademy.com/courses/React/react_photo_copycat.png",E="https://content.codecademy.com/courses/React/react_photo_quietcat.png",I=function(e){Object(f.a)(c,e);var t=Object(g.a)(c);function c(){return Object(O.a)(this,c),t.apply(this,arguments)}return Object(m.a)(c,[{key:"render",value:function(){var e=this.props,t=e.copying,c=e.toggleTape,a=e.value,n=e.handleChange;return Object(l.jsxs)("div",{style:G.divStyles,children:[Object(l.jsx)("h1",{style:{marginBottom:80},children:"Copy Cat"}),Object(l.jsx)("input",{type:"text",value:a,onChange:n}),Object(l.jsx)("img",{style:G.imgStyles,alt:"cat",src:t?P:E,onClick:c}),Object(l.jsx)("p",{children:t&&a})]})}}]),c}(n.a.Component),B=function(e){Object(f.a)(c,e);var t=Object(g.a)(c);function c(e){var a;return Object(O.a)(this,c),(a=t.call(this,e)).state={copying:!0,input:""},a.handleChange=a.handleChange.bind(Object(W.a)(a)),a.toggleTape=a.toggleTape.bind(Object(W.a)(a)),a}return Object(m.a)(c,[{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"toggleTape",value:function(){this.setState({copying:!this.state.copying})}},{key:"render",value:function(){var e=this.state.copying,t=this.toggleTape,c=this.state.input,a=this.handleChange;return Object(l.jsx)(I,{copying:e,toggleTape:t,value:c,handleChange:a})}}]),c}(n.a.Component),Z=(c(65),function(e){var t=e.src;return Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:t,alt:""})})}),q=["https://images.unsplash.com/photo-1612267168669-679c961c5b31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpbmVhJTIwcGlnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1526346093155-a601c2cbe917?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VpbmVhJTIwcGlnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1611695267521-9891f56679a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3VpbmVhJTIwcGlnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1612267164616-6a74dfe128f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGd1aW5lYSUyMHBpZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60https://images.unsplash.com/photo-1548767782-3e3135d4725b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGd1aW5lYSUyMHBpZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg"];function F(){var e=Object(a.useState)(0),t=Object(j.a)(e,2),c=t[0],n=t[1],s=function(){n((function(e){return++e%q.length}))};Object(a.useEffect)((function(){var e=setInterval(s,2e3);return function(){return clearInterval(e)}}),[]);var i=q[c];return Object(l.jsxs)("div",{className:"Appguinea",children:[Object(l.jsx)("h1",{children:"Cute Guinea Pigs"}),Object(l.jsx)(Z,{src:i})]})}c(66);function L(){var e="Popeye the Sailor",t="Las Vegas",c="Spinach",a=44,n="Sailing the seas of React!",s="PopeyeTheSailor",i="https://www.denofgeek.com/wp-content/uploads/2020/05/Popeye-Spinach-1.jpg?resize=768%2C432";return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("p",{children:"Welcome to my react practice tasks. Kindly click the task on the navigation bar to view my work."}),Object(l.jsxs)("div",{className:"profileCard",children:[Object(l.jsx)("div",{className:"imagePopeye",children:Object(l.jsx)("img",{src:i,alt:"Popeye"})}),Object(l.jsx)("div",{className:"profileData",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{className:"fullName",children:e}),Object(l.jsxs)("li",{children:["Location : ",t]}),Object(l.jsxs)("li",{children:["Age : ",a]}),Object(l.jsxs)("li",{children:["Food type: ",c]}),Object(l.jsxs)("li",{children:["Likes: ",n]}),Object(l.jsxs)("li",{children:["Twitter: ",s]})]})})]})]})}var z=c(3);var V=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(z.d,{children:[Object(l.jsx)(z.b,{exact:!0,path:"/catapp",children:Object(l.jsx)(w,{})}),Object(l.jsx)(z.b,{exact:!0,path:"/buttoncount",children:Object(l.jsx)(b,{})}),Object(l.jsx)(z.b,{exact:!0,path:"/backgroundcolor",children:Object(l.jsx)(h,{})}),Object(l.jsx)(z.b,{exact:!0,path:"/lettercount",children:Object(l.jsx)(H,{})}),Object(l.jsx)(z.b,{exact:!0,path:"/toggleapp",children:Object(l.jsx)(A,{})}),Object(l.jsx)(z.b,{exact:!0,path:"/copycat",children:Object(l.jsx)(B,{})}),Object(l.jsx)(z.b,{exact:!0,path:"/guineapig",children:Object(l.jsx)(F,{})}),Object(l.jsxs)(z.b,{children:[Object(l.jsx)(z.a,{exact:!0,from:"/",to:"/home"}),Object(l.jsx)(z.b,{exact:!0,path:"/home",children:Object(l.jsx)(L,{})})]})]})})]})})};c(67);i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(V,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.370bea48.chunk.js.map