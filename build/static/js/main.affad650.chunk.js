(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},118:function(e,t,n){},120:function(e,t,n){},151:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(17),i=n.n(r),a=(n(107),n(10)),o=(n(108),n(109),n.p+"static/media/google.a044c5d4.png"),j=n(176),l=n(178),u=n(2),d=function(){var e=Object(c.useContext)(U),t=e.userInfo,n=e.socket,s=Object(c.useState)(null),r=Object(a.a)(s,2),i=r[0],d=r[1];Object(c.useEffect)((function(){return t&&(n.emit("createUserQRCode",t._id),n.on("createUserQRCodeAnswer",(function(e){d(e)}))),function(){n.removeAllListeners("createUserQRCodeAnswer")}}),[n,t]);return Object(u.jsx)("div",{className:"loginContainer",children:t?Object(u.jsx)(u.Fragment,{children:!t.isVerified&&Object(u.jsxs)(u.Fragment,{children:[i?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{className:"QRCode",src:i,alt:"QRCode"}),Object(u.jsx)("h3",{style:{textAlign:"center"},children:"Potwiedz swoje konto na nast\u0119pnym zlocie"})]}):Object(u.jsx)(j.a,{}),Object(u.jsx)(l.a,{onClick:function(){window.location.href="/logout"},style:{color:"white",border:"2px solid white",justifySelf:"flex-end"},children:"Logout"})]})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Warsaw Night Racing"}),Object(u.jsx)("a",{href:"/auth/google",children:Object(u.jsxs)("div",{className:"loginGoogle",children:[Object(u.jsx)("img",{src:o,alt:"Google"}),"Login with Google"]})})]})})},b=n(58),O=(n(114),function(e){var t=e.name,n=e.date,s=e.message,r=e.userType,i=e.userImage,a=e.wroteBy,o=Object(c.useRef)(null),j=Object(c.useContext)(U).userInfo;Object(c.useEffect)((function(){o.current.scrollIntoView({behavior:"smooth"})}),[]);var l=Object(c.useRef)(null),d="admin"===r;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{onClick:function(){l.current.classList.toggle("dateShown")},className:"message",ref:o,style:j._id===a?{alignSelf:"flex-end",marginRight:"2px",borderRadius:"5px 5px 0 5px"}:{},title:n,children:[Object(u.jsx)("img",{src:i,alt:"user"}),Object(u.jsxs)("div",{className:"messageContent",children:[Object(u.jsx)("span",{style:d?{color:"#f94144",fontWeight:500}:{},className:"userName",children:t}),":",Object(u.jsxs)("span",{className:"text",children:[" ",s]})]}),Object(u.jsx)("span",{ref:l,className:"date",children:n})]})})}),f=(n(115),n(90)),m=n.n(f),x=n(55),v=n.n(x);v()().format("HH:mm:ss");var h=function(){var e=Object(c.useContext)(U),t=e.socket,n=e.userInfo,s=n.name,r=n.userType,i=n.image,o=n._id,j=Object(c.useState)(""),l=Object(a.a)(j,2),d=l[0],f=l[1];Object(c.useEffect)((function(){return t.emit("getMessages"),t.on("getMessagesAnswer",(function(e){var t=e.docs;y(t)})),t.on("newMessageAnswer",(function(e){var t=e.docs;y((function(e){return[].concat(Object(b.a)(e),[t])}))})),t.on("eventMessageAnswer",(function(){return function(e){var t=e.docs;y((function(e){return[].concat(Object(b.a)(e),[{text:t}])}))}})),function(){t.removeAllListeners("getMessagesAnswer"),t.removeAllListeners("newMessageAnswer")}}),[t]);var x=function(e){if(e.preventDefault(),d){var n=String(v()().format("HH:mm:ss"));t.emit("sendMessage",{text:d,name:s,userType:r,date:n,image:i,_id:o}),f("")}},h=Object(c.useState)([]),g=Object(a.a)(h,2),p=g[0],y=g[1],w=p.map((function(e,t){var n=e.name,c=e.message,s=e.date,r=e.userType,i=e.userImage,a=e.wroteBy;return Object(u.jsx)(O,{wroteBy:a,name:n,message:c,date:s,userType:r,userImage:i},t)}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"chat",children:[Object(u.jsx)("div",{className:"chatContainer",children:w}),Object(u.jsxs)("div",{className:"inputContainer",children:[Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"text",value:d,onChange:function(e){f(e.target.value)}}),Object(u.jsx)("button",{type:"submit",onClick:x,style:{display:"none"}})]}),Object(u.jsx)("div",{className:"sendMessageButton",onClick:x,children:Object(u.jsx)(m.a,{})})]})]})})},g=n(6),p=n(91),y=n.n(p),w=(n(118),function(e){var t=e.currentEvent,n=Object(c.useContext)(U).userInfo,s=Object(g.g)();return Object(u.jsxs)("div",{className:"event",children:[Object(u.jsx)(y.a,{onClick:function(){window.location.href="/logout"},className:"logoutButton"}),Object(u.jsx)("div",{className:"eventName",onClick:function(){"admin"===n.userType&&s.push("/admin")},children:Object(u.jsx)("h2",{children:null===t||void 0===t?void 0:t.name})}),Object(u.jsx)("div",{style:{marginLeft:0},className:"logoutButton"})]})}),C=(n(120),function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(c.useContext)(U).socket;return Object(c.useEffect)((function(){return r.emit("getEvent"),r.on("getEventAnswer",(function(e){var t=e.docs;s(t)})),r.on("newEventAnswer",(function(e){var t=e.docs;s(t)})),function(){r.removeAllListeners("newMessageAnswer")}}),[r]),Object(u.jsxs)("div",{className:"mainContainer",children:[Object(u.jsx)(w,{currentEvent:n}),Object(u.jsx)(h,{})]})}),E=n(92),N=n.n(E),k=(n(151),function(e){var t=e.EventPlaceRef,n=e.setIsOpenEventPlace,s=Object(c.useContext)(U).socket,r=Object(c.useState)(""),i=Object(a.a)(r,2),o=i[0],j=i[1],d=Object(c.useCallback)((function(e){var c;(null===(c=t.current)||void 0===c?void 0:c.contains(e.target))||n(!1)}),[t,n]);Object(c.useEffect)((function(){return document.addEventListener("click",d),function(){document.removeEventListener("click",d)}}),[d]);var b=function(e){e.preventDefault(),o&&(s.emit("setEventPlace",{place:o}),j(""),n(!1))};return Object(u.jsxs)("div",{ref:t,className:"eventPlace",children:[Object(u.jsx)("h1",{children:"Enter place"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"text",value:o,onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("button",{type:"submit",style:{display:"none"},onClick:b})]}),Object(u.jsx)(l.a,{color:"primary",variant:"outlined",onClick:b,children:"Submit"})]})}),S=function(){var e=Object(g.g)(),t=Object(c.useState)(!1),n=Object(a.a)(t,2),s=n[0],r=n[1],i={width:"200px"},o=Object(c.useRef)(null);Object(c.useEffect)((function(){}),[]);return Object(u.jsxs)("div",{className:"admin",children:[Object(u.jsx)(l.a,{style:i,color:"primary",onClick:function(){r((function(e){return!e}))},variant:"outlined",children:"Set event place"}),Object(u.jsx)(l.a,{onClick:function(){e.push("/verify")},style:i,color:"primary",variant:"outlined",children:"Verify Users"}),s&&Object(u.jsx)(k,{setIsOpenEventPlace:r,EventPlaceRef:o})]})},I=n(93),A=n.n(I),R=n(49),M=n(181),L=n(182),T=n(180);function P(e){return Object(u.jsx)(L.a,Object(R.a)({elevation:6,variant:"filled"},e))}var B=Object(T.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function F(e){var t=e.isError,n=e.setIsError,c=e.message,s=B(),r=function(e,t){"clickaway"!==t&&n(!1)};return Object(u.jsx)("div",{className:s.root,children:Object(u.jsx)(M.a,{open:t,autoHideDuration:2e3,onClose:r,children:Object(u.jsx)(P,{onClose:r,severity:"error",children:c})})})}function H(e){return Object(u.jsx)(L.a,Object(R.a)({elevation:6,variant:"filled"},e))}var Q=Object(T.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function D(e){var t=e.isSuccess,n=e.setIsSucess,c=e.message,s=Q(),r=function(e,t){"clickaway"!==t&&n(!1)};return Object(u.jsx)("div",{className:s.root,children:Object(u.jsx)(M.a,{open:t,autoHideDuration:2e3,onClose:r,children:Object(u.jsx)(H,{onClose:r,severity:"sucess",children:c})})})}var V=function(){var e=Object(c.useContext)(U).socket,t=Object(c.useState)(null),n=Object(a.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(!1),o=Object(a.a)(i,2),j=o[0],l=o[1],d=Object(c.useState)("Error"),b=Object(a.a)(d,2),O=b[0],f=b[1],m=Object(c.useState)(),x=Object(a.a)(m,2),v=x[0],h=x[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(A.a,{style:{height:240,width:320},delay:300,onError:function(e){f(e.message),l(!0)},onScan:function(t){r(t),e.emit("QRVerify",t)},facingMode:"environment"}),Object(u.jsx)(F,{isError:j,setIsError:l,message:O}),Object(u.jsx)(D,{isSuccess:v,setIsSucess:h,message:O}),s&&Object(u.jsxs)("p",{children:["Data is: ",s]})]})})},U=s.a.createContext(null),_=N()("/"),G=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("/getProfile",{credentials:"include"}).then((function(e){return e.json()})).then((function(e){e.profile&&s(e.profile)}))}),[]),Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(U.Provider,{value:{userInfo:n,socket:_},children:Object(u.jsxs)(g.d,{children:[Object(u.jsx)(g.b,{path:"/",exact:!0,children:(null===n||void 0===n?void 0:n.isVerified)?Object(u.jsx)(C,{}):Object(u.jsx)(d,{})}),Object(u.jsxs)(g.b,{path:"/admin",children:["admin"!==n.userType&&Object(u.jsx)(g.a,{to:"/"}),Object(u.jsx)(S,{})]}),Object(u.jsxs)(g.b,{path:"/verify",children:["admin"!==n.userType&&Object(u.jsx)(g.a,{to:"/"}),Object(u.jsx)(V,{})]})]})})})},z=n(36);i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(z.a,{children:Object(u.jsx)(G,{})})}),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.affad650.chunk.js.map