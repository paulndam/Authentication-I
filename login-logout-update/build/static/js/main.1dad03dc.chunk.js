(this["webpackJsonplogin-logout-update"]=this["webpackJsonplogin-logout-update"]||[]).push([[0],{25:function(e,s,t){},32:function(e,s,t){},51:function(e,s,t){},52:function(e,s,t){},53:function(e,s,t){},56:function(e,s,t){},57:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(1),i=t.n(a),n=t(18),l=t.n(n),r=(t(25),t(2)),j=(t(32),t(3)),d=t(5),b=t.n(d),o=(t(51),t.p+"static/media/facebook.177e21a8.png"),x=t.p+"static/media/twitter.e3a0a551.png",h=t.p+"static/media/instagram.172f3110.svg",O=t.p+"static/media/linkedin.7defd339.svg",m=t.p+"static/media/gmail.a9ea37fa.svg",p=t.p+"static/media/RegisterImage2.0ca838fd.jpeg",u=function(e){var s=Object(a.useState)(""),t=Object(j.a)(s,2),i=t[0],n=t[1],l=Object(a.useState)(""),d=Object(j.a)(l,2),u=d[0],f=d[1],g=Object(a.useState)(""),v=Object(j.a)(g,2),N=v[0],_=v[1],S=Object(a.useState)(""),y=Object(j.a)(S,2),w=y[0],k=y[1],C=Object(a.useState)([]),B=Object(j.a)(C,2),I=B[0],L=B[1];return Object(c.jsxs)("div",{className:"section",children:[Object(c.jsx)("div",{className:"imgBx",children:Object(c.jsx)("img",{src:p,alt:"pict"})}),Object(c.jsx)("div",{className:"contentBx",children:Object(c.jsxs)("div",{className:"formBx",children:[Object(c.jsx)("h2",{children:"Register"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var s={firstname:i,lastname:u,email:N,password:w};console.log(s),n(""),f(""),_(""),k(""),b.a.post("http://localhost:5000/api/registerUser",s,{withCredentials:!0}).then((function(e){console.log(e,"in thes RESPOND FROM USERFORM"),e.data.errors?L(e.data.errors):(console.log("still in the response"),Object(r.c)("/userpage/".concat(e.data.id)))})).catch((function(e){return console.log("Here is error from USERFORM ".concat(e))}))},children:[Object(c.jsxs)("div",{className:"inputBx",children:[Object(c.jsx)("span",{children:"Firstname"}),Object(c.jsx)("input",{type:"text",name:"firstname",onChange:function(e){return n(e.target.value)},value:i}),I.firstname?Object(c.jsx)("p",{className:"text-danger",children:I.firstname.properties.message}):""]}),Object(c.jsxs)("div",{className:"inputBx",children:[Object(c.jsx)("span",{children:"Lastname"}),Object(c.jsx)("input",{type:"text",name:"Lastname",onChange:function(e){return f(e.target.value)},value:u}),I.lastname?Object(c.jsx)("p",{className:"text-danger",children:I.lastname.properties.message}):""]}),Object(c.jsxs)("div",{className:"inputBx",children:[Object(c.jsx)("span",{children:"Email"}),Object(c.jsx)("input",{type:"text",name:"Email",onChange:function(e){return _(e.target.value)},value:N}),I.email?Object(c.jsx)("p",{className:"text-danger",children:I.email.properties.message}):""]}),Object(c.jsxs)("div",{className:"inputBx",children:[Object(c.jsx)("span",{children:"Password"}),Object(c.jsx)("input",{type:"password",name:"Password",onChange:function(e){return k(e.target.value)},value:w}),I.password?Object(c.jsx)("p",{className:"text-danger",children:I.password.properties.message}):""]}),Object(c.jsx)("div",{className:"inputBx",children:Object(c.jsx)("input",{type:"submit",value:"Sign Up",name:""})}),Object(c.jsx)("div",{className:"inputBx",children:Object(c.jsxs)("p",{children:["Already have an account? ",Object(c.jsx)(r.a,{to:"/logInUser",children:"Sign in"})]})})]}),Object(c.jsx)("h3",{children:"Sign Up using Social media Accounts"}),Object(c.jsxs)("ul",{className:"sci",children:[Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:o,alt:"picz"})}),Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:x,alt:"picz"})}),Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:h,alt:"picz"})}),Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:O,alt:"picz"})}),Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:m,alt:"picz"})})]})]})})]})},f=(t(52),t.p+"static/media/LoginImage1.6780a505.jpeg"),g=function(){var e=Object(a.useState)(""),s=Object(j.a)(e,2),t=s[0],i=s[1],n=Object(a.useState)(""),l=Object(j.a)(n,2),d=l[0],p=l[1],u=Object(a.useState)([]),g=Object(j.a)(u,2),v=g[0],N=g[1];return Object(c.jsxs)("div",{className:"section",children:[Object(c.jsx)("div",{className:"imgBx",children:Object(c.jsx)("img",{src:f,alt:"pict"})}),Object(c.jsx)("div",{className:"contentBx",children:Object(c.jsxs)("div",{className:"formBx",children:[Object(c.jsx)("h2",{children:"Sign In"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(""),p(""),b.a.post("http://localhost:5000/api/LogInUser",{email:t,password:d},{withCredentials:!0}).then((function(e){console.log(e),e.data.message?N(e.data.message):Object(r.c)("/userpage/".concat(e.data.userId))})).catch((function(e){console.log(e)}))},children:[Object(c.jsxs)("div",{className:"inputBx",children:[Object(c.jsx)("span",{children:"Email"}),Object(c.jsx)("input",{type:"text",name:"logInEmail",onChange:function(e){return i(e.target.value)},value:t}),v?Object(c.jsx)("p",{className:"text-danger",children:v}):""]}),Object(c.jsxs)("div",{className:"inputBx",children:[Object(c.jsx)("span",{children:"Password"}),Object(c.jsx)("input",{type:"password",name:"logInPassword",onChange:function(e){return p(e.target.value)},value:d}),v?Object(c.jsx)("p",{className:"text-danger",children:v}):""]}),Object(c.jsx)("div",{className:"inputBx",children:Object(c.jsx)("input",{type:"submit",value:"Sign ",name:""})}),Object(c.jsx)("div",{className:"inputBx",children:Object(c.jsxs)("p",{children:["Don't have an account? ",Object(c.jsx)(r.a,{to:"/",children:"Sign Up"})]})})]}),Object(c.jsx)("h3",{children:"Login using Social media Accounts"}),Object(c.jsxs)("ul",{className:"sci",children:[Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:o,alt:"picz"})}),Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:x,alt:"picz"})}),Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:h,alt:"picz"})}),Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:O,alt:"picz"})}),Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:m,alt:"picz"})})]})]})})]})},v=(t(53),t(9));new(t.n(v).a)(document.querySelector("#apex1"),{series:[{name:"Net Profit",data:[14,25,37,45,56,79,84,92,77]},{name:"Revenue",data:[43,56,87,100,67,45,99,12,45]},{name:"Frees Cash Flow",data:[32,67,98,45,31,23,67,85,12]}],chart:{type:"bar",height:250,sparkline:{enabled:!0}},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousand)"}},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$"+e+"thousand"}}}}).render();document.getElementById("sidebar"),document.getElementById("sidebarIcon");var N=t.p+"static/media/one.e6dc3b9c.png",_=t.p+"static/media/two.c120fe43.png",S=(t(55),t(56),function(){return Object(c.jsx)("body",{children:Object(c.jsx)("button",{className:"btn",onClick:function(e){b.a.delete("http://localhost:5000/api/LogOut",{withCredentials:!0}).then((function(e){console.log(e),Object(r.c)("/logInUser")})).catch((function(e){return console.log(e)}))},children:"log out"})})}),y=function(e){var s=Object(a.useState)({}),t=Object(j.a)(s,2),i=t[0],n=t[1],l=Object(a.useState)(""),d=Object(j.a)(l,2),o=d[0],x=d[1],h=Object(a.useState)(""),O=Object(j.a)(h,2),m=O[0],p=O[1],u=Object(a.useState)(""),f=Object(j.a)(u,2),g=f[0],v=f[1],y=Object(a.useState)([]),w=Object(j.a)(y,2),k=w[0],C=(w[1],function(){console.log("In the UserPage"),console.log(e._id),b.a.get("http://localhost:5000/api/singleUser/"+e._id).then((function(e){console.log(e),n(e.data)})).catch((function(e){return console.log(e)}))});Object(a.useEffect)((function(){C()}),[]);return Object(c.jsxs)("body",{children:[Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("nav",{className:"navbar",children:[Object(c.jsx)("div",{classNameName:"nav__icon",onclick:"toggleSidebar()",children:Object(c.jsx)("i",{className:"fa fa-bars"})}),Object(c.jsxs)("div",{className:"navbar__left",children:[Object(c.jsx)("a",{href:"#",children:"home"}),Object(c.jsx)("a",{href:"#",children:"task"}),Object(c.jsx)("a",{className:"active_link",href:"#",children:"schedule"})]}),Object(c.jsxs)("div",{className:"navbar__right",children:[Object(c.jsx)("a",{href:"#",children:Object(c.jsx)("i",{className:"fa fa-search"})}),Object(c.jsx)("a",{href:"#",children:Object(c.jsx)("i",{className:"fa fa-clock-o"})}),Object(c.jsx)("a",{href:"#",children:Object(c.jsx)("img",{width:"30",src:_,alt:"picz"})})]})]}),Object(c.jsxs)("main",{children:[Object(c.jsxs)("div",{className:"main_container",children:[Object(c.jsxs)("div",{className:"main_title",children:[Object(c.jsx)("img",{src:N,alt:"picz"}),Object(c.jsxs)("div",{className:"main_greeting",children:[Object(c.jsxs)("h1",{children:["Hello ",i.firstname]}),Object(c.jsx)("p",{children:"Welcome to your Dashboard"})]})]}),Object(c.jsxs)("div",{className:"main_cards",children:[Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("i",{className:"fa fa-user-o fa-2x text-lightblue"}),Object(c.jsxs)("div",{className:"card_inner",children:[Object(c.jsx)("p",{className:"text-primary-p",children:"Clients"}),Object(c.jsx)("span",{className:"font-bold text-title",children:"10"})]})]}),Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("i",{className:"fa fa-calendar fa-2x text-red"}),Object(c.jsxs)("div",{className:"card_inner",children:[Object(c.jsx)("p",{className:"text-primary-p",children:"Events/Meetings"}),Object(c.jsx)("span",{className:"font-bold text-title",children:"2"})]})]}),Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("i",{className:"fa fa-archive fa-2x text-yellow"}),Object(c.jsxs)("div",{className:"card_inner",children:[Object(c.jsx)("p",{className:"text-primary-p",children:"projects"}),Object(c.jsx)("span",{className:"font-bold text-title",children:"7"})]})]}),Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("i",{className:"fa fa-thumbs-up fa-2x text-green"}),Object(c.jsxs)("div",{className:"card_inner",children:[Object(c.jsx)("p",{className:"text-primary-p",children:"Done projects"}),Object(c.jsx)("span",{className:"font-bold text-title",children:"3"})]})]})]}),Object(c.jsxs)("div",{className:"charts",children:[Object(c.jsxs)("div",{className:"charts_left",children:[Object(c.jsxs)("div",{className:"charts_left_title",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Daily Reports"}),Object(c.jsx)("p",{children:"Milan, Sansiro, USA"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere obcaecati illo consequuntur, quam omnis recusandae perspiciatis at tempora ipsa esse amet inventore saepe voluptates reprehenderit exercitationem incidunt debitis labore. Lorem ipsum, dolor sit amet consectetur adipisicing elit."})]}),Object(c.jsx)("i",{className:"fa fa-usd"})]}),Object(c.jsx)("div",{id:"apex1"})]}),Object(c.jsxs)("div",{className:"charts_rigth",children:[Object(c.jsxs)("div",{className:"charts_rigth_title",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Stats Reports"}),Object(c.jsx)("p",{children:"Milan, Sansiro, USA"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere obcaecati illo consequuntur, quam omnis recusandae perspiciatis at tempora ipsa esse amet inventore saepe voluptates reprehenderit exercitationem incidunt debitis labore."})]}),Object(c.jsx)("i",{className:"fa fa-usd"})]}),Object(c.jsxs)("div",{className:"charts_rigth_cards",children:[Object(c.jsxs)("div",{className:"card1",children:[Object(c.jsx)("h1",{children:"Income"}),Object(c.jsx)("p",{children:"$65000"})]}),Object(c.jsxs)("div",{className:"card2",children:[Object(c.jsx)("h1",{children:"Sales"}),Object(c.jsx)("p",{children:"$45000"})]}),Object(c.jsxs)("div",{className:"card3",children:[Object(c.jsx)("h1",{children:"User"}),Object(c.jsx)("p",{children:"$75000"})]}),Object(c.jsxs)("div",{className:"card4",children:[Object(c.jsx)("h1",{children:"Orders"}),Object(c.jsx)("p",{children:"$105000"})]})]})]})]})]}),Object(c.jsx)("div",{class:"table-box"}),Object(c.jsxs)("div",{class:"table-row table-head",children:[Object(c.jsx)("div",{class:"table-cell first-cell",children:Object(c.jsx)("p",{children:"Firstname"})}),Object(c.jsx)("div",{class:"table-cell",children:Object(c.jsx)("p",{children:"Lastname"})}),Object(c.jsx)("div",{class:"table-cell",children:Object(c.jsx)("p",{children:"State"})}),Object(c.jsx)("div",{class:"table-cell",children:Object(c.jsx)("p",{children:"Sleep"})})]}),Object(c.jsx)("div",{class:"table-row",children:k.map((function(e){return Object(c.jsxs)("div",{children:[e.clients.map((function(e){return Object(c.jsx)("div",{class:"table-cell first-cell",children:Object(c.jsx)("p",{children:e.firstname})},e._id)})),Object(c.jsx)("div",{class:"table-cell first-cell",children:Object(c.jsx)("p",{children:"Drive"})}),Object(c.jsx)("div",{class:"table-cell",children:Object(c.jsx)("p",{children:"Camp Nou"})}),Object(c.jsx)("div",{class:"table-cell",children:Object(c.jsx)("p",{children:"Old Tradford"})}),Object(c.jsx)("div",{class:"table-cell last-cell",children:Object(c.jsx)("p",{children:"Man U"})}),Object(c.jsxs)("form",{onSubmit:function(s){return function(e,s){e.preventDefault(),b.a.put("http://localhost:5000/api/addClient/".concat(s),{firstname:o,lastname:m,Statez:g}).then((function(e){console.log(e),C()})).catch((function(e){return console.log(e)}))}(s,e._id)},children:[Object(c.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return x(e.target.value)}}),Object(c.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return p(e.target.value)}}),Object(c.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return v(e.target.value)}}),Object(c.jsx)("input",{type:"submit",className:"btn btn-sm btn-info",value:"Add Client"})]})]},e._id)}))})]}),Object(c.jsxs)("div",{id:"sidebar",children:[Object(c.jsxs)("div",{className:"sidebar_title",children:[Object(c.jsxs)("div",{className:"sidebar_img",children:[Object(c.jsx)("img",{src:_}),Object(c.jsxs)("h1",{children:[i.firstname," ",i.lastname]})]}),Object(c.jsx)("i",{className:"fa fa-items",id:"sidebarIcon",onclick:"closeSidebar()"})]}),Object(c.jsxs)("div",{className:"sidebar_menu",children:[Object(c.jsxs)("div",{className:"sidebar_link active_menu_link",children:[Object(c.jsx)("i",{className:"fa fa-home"}),Object(c.jsx)("a",{href:"#",children:"Dashboard"})]}),Object(c.jsx)("h2",{children:"MNG"}),Object(c.jsxs)("div",{className:"sidebar_link",children:[Object(c.jsx)("i",{className:"fa fa-user-secret"}),Object(c.jsx)(r.a,{to:"/",children:"Admin Management"})]}),Object(c.jsxs)("div",{className:"sidebar_link",children:[Object(c.jsx)("i",{className:"fa fa-building-o"}),Object(c.jsx)(r.a,{to:"#",children:"Company Management"})]}),Object(c.jsxs)("div",{className:"sidebar_link",children:[Object(c.jsx)("i",{className:"fa fa-wrench"}),Object(c.jsx)(r.a,{to:"#",children:"Employee Management"})]}),Object(c.jsxs)("div",{className:"sidebar_link",children:[Object(c.jsx)("i",{className:"fa fa-archive"}),Object(c.jsx)(r.a,{to:"#",children:"Warehouse"})]}),Object(c.jsxs)("div",{className:"sidebar_link",children:[Object(c.jsx)("i",{className:"fa fa-handshake-o"}),Object(c.jsx)(r.a,{to:"#",children:"Contracts"})]}),Object(c.jsxs)("div",{className:"sidebar_link",children:[Object(c.jsx)("i",{className:"fa fa-question"}),Object(c.jsx)(r.a,{to:"#",children:"Request"})]}),Object(c.jsxs)("div",{className:"sidebar_link",children:[Object(c.jsx)("i",{className:"fa fa-calendar-check-o"}),Object(c.jsx)(r.a,{to:"#",children:"Special Days"})]}),Object(c.jsx)("h2",{children:"PAYROLL"}),Object(c.jsxs)("div",{className:"sidebar_link",children:[Object(c.jsx)("i",{className:"fa fa-money"}),Object(c.jsx)(r.a,{to:"#",children:"Payroll"})]}),Object(c.jsxs)("div",{className:"sidebar_link",children:[Object(c.jsx)("i",{className:"fa fa-briefcase"}),Object(c.jsx)(r.a,{to:"#",children:"Pay grade"})]}),Object(c.jsxs)("div",{className:"sidebar_logout",children:[Object(c.jsx)("i",{className:"fa fa-power-off"}),Object(c.jsx)(S,{})]})]})]})]}),Object(c.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/apexcharts"}),Object(c.jsx)("script",{src:"index.js"})]})};var w=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(r.b,{children:[Object(c.jsx)(u,{path:"/"}),Object(c.jsx)(g,{path:"/logInUser"}),Object(c.jsx)(y,{path:"/userpage/:_id"})]})})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,58)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,i=s.getLCP,n=s.getTTFB;t(e),c(e),a(e),i(e),n(e)}))};l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),k()}},[[57,1,2]]]);
//# sourceMappingURL=main.1dad03dc.chunk.js.map