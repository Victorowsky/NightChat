(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(16),r=n.n(a),i=(n(56),n(12)),o=(n(57),n(58),n(1)),u=function(){return Object(o.jsxs)("div",{className:"loginContainer",children:[Object(o.jsx)("h1",{children:"Warsaw Night Racing"}),Object(o.jsxs)("div",{className:"loginGoogle",children:[Object(o.jsx)("img",{src:"https://admonkey.pl/wp-content/uploads/2016/12/google-logo-png.png",alt:""}),"Login with Google"]})]})},l=n(50),j=(n(60),function(e){var t=e.name,n=e.date,c=e.message,a=(e.userType,e.userImage),r=Object(s.useRef)(null),i=Object(s.useContext)(h).userInfo.name;Object(s.useEffect)((function(){r.current.scrollIntoView({behavior:"smooth"})}),[]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"message",ref:r,title:n,style:i===t&&{alignSelf:"flex-end",marginRight:"2px",borderRadius:"5px 5px 0 5px"},children:[Object(o.jsx)("img",{src:a,alt:"user"}),Object(o.jsxs)("div",{className:"messageContent",children:[i!==t&&Object(o.jsxs)("span",{className:"userName",children:[t," : "]}),Object(o.jsx)("span",{className:"text",children:c})]})]})})}),m=(n(61),n(39)),d=n.n(m),b=n(23),f=n.n(b);f()().format("HH:mm:ss");var g=function(){var e=Object(s.useContext)(h),t=e.socket,n=e.userInfo,c=n.name,a=n.userType,r=n.image,u=Object(s.useState)(""),m=Object(i.a)(u,2),b=m[0],g=m[1];Object(s.useEffect)((function(){return t.emit("getMessages"),t.on("getMessagesAnswer",(function(e){var t=e.docs;N(t)})),t.on("newMessageAnswer",(function(e){var t=e.docs;console.log(t),N((function(e){return[].concat(Object(l.a)(e),[t])}))})),function(){t.removeAllListeners("getMessagesAnswer"),t.removeAllListeners("newMessageAnswer")}}),[t]);var O=function(e){e.preventDefault();var n=String(f()().format("HH:mm:ss"));t.emit("sendMessage",{text:b,name:c,userType:a,date:n,image:r}),g("")},p=Object(s.useState)([]),x=Object(i.a)(p,2),v=x[0],N=x[1],w=v.map((function(e,t){var n=e.name,s=e.message,c=e.date,a=e.userType,r=e.userImage;return Object(o.jsx)(j,{name:n,message:s,date:c,userType:a,userImage:r},t)}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"chatContainer",children:w}),Object(o.jsxs)("div",{className:"inputContainer",children:[Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{type:"text",value:b,onChange:function(e){g(e.target.value)}}),Object(o.jsx)("button",{type:"submit",onClick:O,style:{display:"none"}})]}),Object(o.jsx)("div",{className:"sendMessageButton",onClick:O,children:Object(o.jsx)(d.a,{})})]})]})},O=(n(71),function(){return Object(o.jsx)("div",{className:"mainContainer",children:Object(o.jsx)(g,{})})}),p=n(49),x=n.n(p),h=c.a.createContext(null),v=x()("/"),N=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){fetch("/getProfile",{credentials:"include"}).then((function(e){return e.json()})).then((function(e){e.profile&&(console.log(e.profile),c(e.profile))}))}),[]),Object(o.jsx)("div",{className:"app",children:Object(o.jsx)(h.Provider,{value:{userInfo:n,socket:v},children:n?Object(o.jsx)(O,{}):Object(o.jsx)(u,{})})})};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},71:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.c3b98216.chunk.js.map