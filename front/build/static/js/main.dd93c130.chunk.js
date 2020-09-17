(this.webpackJsonpcodoschedule=this.webpackJsonpcodoschedule||[]).push([[0],{33:function(e,a,t){e.exports=t(50)},40:function(e,a,t){},47:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);t(34);var r=t(0),n=t.n(r),c=t(15),o=t.n(c),s=(t(39),t(40),t(2)),l=t(3),i=t(6),m=Object(i.a)(),d=t(10),u=t(19),E=t(25),A=t(4),h={SUCCESS:"ALERT_SUCCESS",ERROR:"ALERT_ERROR",CLEAR:"ALERT_CLEAR"},p={LOGIN_REQUEST:"USERS_LOGIN_REQUEST",LOGIN_SUCCESS:"USERS_LOGIN_SUCCESS",LOGIN_FAILURE:"USERS_LOGIN_FAILURE",LOGOUT:"USERS_LOGOUT"},v={GETALL_REQUEST:"USERS_GETALL_REQUEST",GETALL_SUCCESS:"USERS_GETALL_SUCCESS",GETALL_FAILURE:"USERS_GETALL_FAILURE"},f={GETALL_REQUEST:"SCHEDULES_GETALL_REQUEST",GETALL_SUCCESS:"SCHEDULES_GETALL_SUCCESS",GETALL_FAILURE:"SCHEDULES_GETALL_FAILURE",ADD_REQUEST:"SCHEDULES_ADD_REQUEST",ADD_SUCCESS:"SCHEDULES_ADD_SUCCESS",ADD_FAILURE:"SCHEDULES_ADD_FAILURE",DELETE_REQUEST:"SCHEDULES_DELETE_REQUEST",DELETE_SUCCESS:"SCHEDULES_DELETE_SUCCESS",DELETE_FAILURE:"SCHEDULES_DELETE_FAILURE",UPDATE_ORDER_BY:"SCHEDULES_UPDATE_ORDER_BY",UPDATE_ORDER_DIR:"SCHEDULES_UPDATE_ORDER_DIR",UPDATE_QUERY_TEXT:"SCHEDULES_UPDATE_QUERY_TEXT"},g=JSON.parse(localStorage.getItem("codoschedule-user")),S=g?{loggedIn:!0,user:g}:{loggedIn:!1};var b={loading:!0,items:[],orderBy:"date",orderDir:"asc",queryText:"",error:null};var N=Object(d.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case p.LOGIN_REQUEST:return{loggingIn:!0,user:a.user};case p.LOGIN_SUCCESS:return{loggingIn:!1,loggedIn:!0,user:a.user};case p.LOGIN_FAILURE:return Object(A.a)(Object(A.a)({},e),{},{loggingIn:!1});case p.LOGOUT:return{loggedIn:!1};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case v.GETALL_REQUEST:return{loading:!0};case v.GETALL_SUCCESS:return{items:a.users};case v.GETALL_FAILURE:return{error:a.error};default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case h.SUCCESS:return{type:"alert-success",message:a.message};case h.ERROR:return{type:"alert-danger",message:a.message};case h.CLEAR:return{};default:return e}},schedules:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case f.GETALL_REQUEST:return e;case f.GETALL_SUCCESS:return Object(A.a)(Object(A.a)({},e),{},{loading:!1,items:a.schedules.data});case f.GETALL_FAILURE:return Object(A.a)(Object(A.a)({},e),{},{error:a.error});case f.ADD_REQUEST:return e;case f.ADD_SUCCESS:return Object(A.a)(Object(A.a)({},e),{},{loading:!1});case f.ADD_FAILURE:return Object(A.a)(Object(A.a)({},e),{},{error:a.error});case f.DELETE_REQUEST:return e;case f.DELETE_SUCCESS:return Object(A.a)(Object(A.a)({},e),{},{loading:!1,items:e.items.filter((function(e){return e._id!==a.schedules.data}))});case f.DELETE_FAILURE:return Object(A.a)(Object(A.a)({},e),{},{error:a.error});case f.UPDATE_QUERY_TEXT:return Object(A.a)(Object(A.a)({},e),{},{queryText:a.queryText});default:return e}}}),L=window.location.hostname,w=Object(E.createLogger)(),C="localhost"===L||"127.0.0.1"===L?Object(d.d)(N,Object(d.a)(u.a,w)):Object(d.d)(N,Object(d.a)(u.a));function O(){var e=JSON.parse(localStorage.getItem("codoschedule-user"));return e&&e.token?{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+e.token}:{}}var y={success:function(e){return{type:h.SUCCESS,message:e}},error:function(e){return{type:h.ERROR,message:e}},clear:function(){return{type:h.CLEAR}}};var T=window.location.hostname,D={apiURL:"localhost"===T||"127.0.0.1"===T?"http://localhost:8000/v1/":"/v1/"};var U={login:function(e,a){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:a})};return fetch("".concat(D.apiURL,"auth/login"),t).then(R).then((function(e){return localStorage.setItem("codoschedule-user",JSON.stringify({token:e.token})),e}))},logout:_};function _(){localStorage.removeItem("codoschedule-user")}function R(e){return e.text().then((function(a){var t=a&&JSON.parse(a);if(!e.ok){401===e.status&&_();var r=t&&t.message||e.statusText;return Promise.reject(r)}return t}))}var I={getAll:function(){var e={method:"GET",headers:O()};return fetch("".concat(D.apiURL,"schedules"),e).then(k)},addSchedule:function(e){var a={method:"POST",body:JSON.stringify(e),headers:O()};return fetch("".concat(D.apiURL,"schedules"),a).then(k)},deleteSchedule:function(e){var a={method:"DELETE",headers:O()};return fetch("".concat(D.apiURL,"schedules/").concat(e),a).then(k)}};function k(e){return e.text().then((function(a){var t=a&&JSON.parse(a);if(!e.ok){var r=t&&t.message||e.statusText;return Promise.reject(r)}return t}))}var j={login:function(e,a){return function(t){t({type:p.LOGIN_REQUEST,email:e}),U.login(e,a).then((function(e){t({type:p.LOGIN_SUCCESS,user:e}),m.push("/")}),(function(e){t({type:p.LOGIN_FAILURE,error:e}),t(y.error(e))}))}},logout:function(){return U.logout(),{type:p.LOGOUT}}};var G={getAll:function(){return function(e){e({type:f.GETALL_REQUEST}),I.getAll().then((function(a){return e({type:f.GETALL_SUCCESS,schedules:a})}),(function(a){return e({type:f.GETALL_FAILURE,error:a})}))}},addSchedule:function(e){return function(a){a({type:f.ADD_REQUEST}),I.addSchedule(e).then((function(e){a({type:f.ADD_SUCCESS}),a(y.success("Schedule is successfully added!"))}),(function(e){a({type:f.ADD_FAILURE,error:e}),a(y.error(e))}))}},deleteSchedule:function(e){return function(a){a({type:f.DELETE_REQUEST}),I.deleteSchedule(e).then((function(e){a({type:f.DELETE_SUCCESS,schedules:e}),a(y.success("Schedule is successfully deleted!"))}),(function(e){a({type:f.DELETE_FAILURE,error:e}),a(y.error(e))}))}},updateOrderBy:function(e){return{type:f.UPDATE_ORDER_BY,orderBy:e}},updateOrderDir:function(e){return{type:f.UPDATE_ORDER_DIR,orderDir:e}},updateQueryText:function(e){return{type:f.UPDATE_QUERY_TEXT,queryText:e}}};var Q=t(13),x=function(){var e=Object(l.c)(),a=Object(l.d)((function(e){return e.auth.user}));return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},n.a.createElement(Q.a,{to:"/",className:"navbar-brand"},"codoschedule"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},n.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},a&&n.a.createElement("li",{className:"nav-item active"},n.a.createElement(Q.a,{to:"/add",className:"nav-link"},"Add"))),n.a.createElement("ul",{className:"navbar-nav"},!a&&n.a.createElement("li",{className:"nav-item active"},n.a.createElement("span",{className:"nav-link"},"A react app to manage tasks, events and schedules.")),a&&n.a.createElement("li",{className:"nav-item active"},n.a.createElement(Q.a,{to:"/",onClick:function(a){a.preventDefault(),e(j.logout())},className:"nav-link"},"Logout")))))},B=function(){return n.a.createElement("footer",{className:"text-white py-2 bg-primary"},n.a.createElement("div",{className:"container d-flex "},n.a.createElement("p",null,"\xa9 2020 CODOPLEX. All rights reserved."),n.a.createElement("div",{className:"ml-auto"},n.a.createElement("a",{className:"d-block text-white",href:"/terms"},"Terms of use"),n.a.createElement("a",{className:"d-block text-white",href:"/privacy"},"Privacy policy"))))},F=t(31),M=t(26),P=t(27),Y=t(32),H=t(30),J=t(28),K=t.n(J),q=t(29),W=t.n(q),z=function(e){Object(Y.a)(t,e);var a=Object(H.a)(t);function t(){var e;Object(M.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={countdowntimer:void 0,years:void 0,months:void 0,days:void 0,hours:void 0,minutes:void 0,seconds:void 0},e}return Object(P.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var a=e.props,t=a.timeTillDate,r=a.timeFormat,n=W()(Date.now(),K()(t,r)),c=n.years,o=n.months,s=n.days,l=n.hours,i=n.minutes,m=n.seconds;e.setState({countdowntimer:n,years:c,months:o,days:s,hours:l,minutes:i,seconds:m})}),1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,a=e.years,t=e.months,r=e.days,c=e.hours,o=e.minutes,s=e.seconds,l=$(t,12,0,0,360),i=$(r,30,0,0,360),m=$(c,24,0,0,360),d=$(o,60,0,0,360),u=$(s,60,0,0,360);return s?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"countdown-wrapper"},a>=0&&n.a.createElement("div",{className:"countdown-item "+(this.props.showBorder?"border border-primary":"")},a,n.a.createElement("span",null,"years")),t>=0&&n.a.createElement("div",{className:"countdown-item "+(this.props.showBorder?"border border-primary":"")},this.props.showCircles&&n.a.createElement(V,{radius:l}),t,n.a.createElement("span",null,"months")),r>=0&&n.a.createElement("div",{className:"countdown-item "+(this.props.showBorder?"border border-primary":"")},this.props.showCircles&&n.a.createElement(V,{radius:i}),r,n.a.createElement("span",null,"days")),c>=0&&n.a.createElement("div",{className:"countdown-item "+(this.props.showBorder?"border border-primary":"")},this.props.showCircles&&n.a.createElement(V,{radius:m}),c,n.a.createElement("span",null,"hours")),o>=0&&n.a.createElement("div",{className:"countdown-item "+(this.props.showBorder?"border border-primary":"")},this.props.showCircles&&n.a.createElement(V,{radius:d}),o,n.a.createElement("span",null,"minutes")),s>=0&&n.a.createElement("div",{className:"countdown-item "+(this.props.showBorder?"border border-primary":"")},this.props.showCircles&&n.a.createElement(V,{radius:u}),s,n.a.createElement("span",null,"seconds")))):null}}]),t}(r.Component),V=function(e){var a=e.radius;return n.a.createElement("svg",{className:"countdown-svg"},n.a.createElement("path",{fill:"none",stroke:"#333",strokeWidth:"4",d:Z(50,50,48,0,a)}))};function X(e,a,t,r){var n=(r-90)*Math.PI/180;return{x:e+t*Math.cos(n),y:a+t*Math.sin(n)}}function Z(e,a,t,r,n){var c=X(e,a,t,n),o=X(e,a,t,r),s=n-r<=180?"0":"1";return["M",c.x,c.y,"A",t,t,0,s,0,o.x,o.y].join(" ")}function $(e,a,t,r,n){return(e-a)*(n-r)/(t-a)+r}var ee=z,ae=function(e){var a=Object(l.d)((function(e){return e.auth.user}));return n.a.createElement("div",{className:"task-list item-list mb-3"},e.tasks.map((function(t){return n.a.createElement("div",{className:"card task-item mb-3 rounded-0",key:t._id},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"task-date ml-auto"},n.a.createElement(ee,{timeTillDate:t.date,timeFormat:"YYYY-MM-DD hh:mm:ss a",showCircles:!1,showBorder:!0})),n.a.createElement("h5",{className:"card-title"},n.a.createElement("span",null,t.name)),n.a.createElement("p",{className:"card-text"},n.a.createElement("span",{className:"task-notes"},t.notes))),n.a.createElement("div",{className:"card-footer text-muted"},n.a.createElement("div",{className:"d-flex flex-row-reverse"},n.a.createElement("p",{className:"ml-auto mb-0"},n.a.createElement("span",null,t.ownerName)),a&&n.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(){return e.deleteTask(t._id)}},n.a.createElement(F.a,null)))))})))},te=function(e){return n.a.createElement("div",{className:"search-tasks row justify-content-center my-4"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{id:"SearchTasks",type:"text",className:"form-control rounded-0","aria-label":"Search Tasks",onChange:function(a){return e.searchTasks(a.target.value)}}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{type:"button",className:"btn btn-primary dropdown-toggle rounded-0","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort by: ",n.a.createElement("span",{className:"caret"})),n.a.createElement("div",{className:"sort-menu dropdown-menu dropdown-menu-right"},n.a.createElement("button",{className:"sort-by dropdown-item "+("name"===e.orderBy?"active":""),href:"#",onClick:function(a){return e.changeOrder("name",e.orderDir)}},"Task Name"),n.a.createElement("button",{className:"sort-by dropdown-item "+("date"===e.orderBy?"active":""),href:"#",onClick:function(a){return e.changeOrder("date",e.orderDir)}},"Date"),n.a.createElement("button",{className:"sort-by dropdown-item "+("ownerName"===e.orderBy?"active":""),href:"#",onClick:function(a){return e.changeOrder("ownerName",e.orderDir)}},"Owner"),n.a.createElement("div",{role:"separator",className:"dropdown-divider"}),n.a.createElement("button",{className:"sort-by dropdown-item "+("asc"===e.orderDir?"active":""),href:"#",onClick:function(a){return e.changeOrder(e.orderBy,"asc")}},"Asc"),n.a.createElement("button",{className:"sort-by dropdown-item "+("desc"===e.orderDir?"active":""),href:"#",onClick:function(a){return e.changeOrder(e.orderBy,"desc")}},"Desc"))))))},re=function(){var e=Object(l.c)(),a=Object(l.d)((function(e){return e.schedules}),l.b),t=a.loading,c=a.items;Object(r.useEffect)((function(){e(G.getAll())}),[e]);var o=a.orderBy,s=a.orderDir,i=a.queryText;if(t)return n.a.createElement("main",{className:"page bg-white"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 bg-white"},n.a.createElement("div",{className:"loader"}))));var m,d=[];return m="asc"===s?1:-1,d=(d=c).sort((function(e,a){return e[o].toLowerCase()<a[o].toLowerCase()?-1*m:1*m})).filter((function(e){return e.name.toLowerCase().includes(i.toLocaleLowerCase())||e.ownerName.toLowerCase().includes(i.toLocaleLowerCase())||e.notes.toLowerCase().includes(i.toLocaleLowerCase())})),n.a.createElement("main",{className:"page bg-white"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 bg-white"},n.a.createElement(te,{orderBy:o,orderDir:s,changeOrder:function(a,t){e(G.updateOrderBy(a)),e(G.updateOrderDir(t))},searchTasks:function(a){e(G.updateQueryText(a))}}),n.a.createElement(ae,{tasks:d,deleteTask:function(a){e(G.deleteSchedule(a))}}))))},ne=t(9),ce=function(){var e=Object(l.c)(),a=Object(r.useState)(""),t=Object(ne.a)(a,2),c=t[0],o=t[1],s=Object(r.useState)(""),i=Object(ne.a)(s,2),m=i[0],d=i[1],u=Object(r.useState)(!1),E=Object(ne.a)(u,2),A=E[0],h=E[1],p=function(e){var a=e.target,t=a.name,r=a.value;"email"===t?o(r):"password"===t&&d(r)},v=Object(l.d)((function(e){return e.auth.loggingIn}));return n.a.createElement("div",{className:"card textcenter mt-20 rounded-0"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h2",null,"Login"),n.a.createElement("form",{name:"loginForm",onSubmit:function(a){a.preventDefault(),h(!0),c&&m&&e(j.login(c,m))}},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"text",className:"form-control"+(A&&!c?" is-invalid":""),name:"email",value:c,onChange:p}),A&&!c&&n.a.createElement("div",{className:"invalid-feedback"},"email is required")),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",className:"form-control"+(A&&!m?" is-invalid":""),name:"password",value:m,onChange:p}),A&&!m&&n.a.createElement("div",{className:"invalid-feedback"},"Password is required")),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{className:"btn btn-primary"},"Login"),v&&n.a.createElement("img",{alt:"login icon",src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="})))))},oe=function(){var e=Object(l.c)(),a=Object(r.useState)(""),t=Object(ne.a)(a,2),c=t[0],o=t[1],s=Object(r.useState)(""),i=Object(ne.a)(s,2),m=i[0],d=i[1],u=Object(r.useState)(""),E=Object(ne.a)(u,2),A=E[0],h=E[1],p=Object(r.useState)(""),v=Object(ne.a)(p,2),f=v[0],g=v[1],S=Object(r.useState)(""),b=Object(ne.a)(S,2),N=b[0],L=b[1],w=Object(r.useState)(!1),C=Object(ne.a)(w,2),O=C[0],T=C[1],D=function(e){var a=e.target,t=a.value;switch(a.name){case"name":o(t);break;case"ownerName":d(t);break;case"date":h(t);break;case"time":g(t);break;case"notes":L(t)}};return n.a.createElement("div",{className:"card textcenter mt-20 rounded-0"},n.a.createElement("div",{className:"card-body"},n.a.createElement("form",{id:"taskForm",noValidate:!0,onSubmit:function(a){a.preventDefault(),T(!0);var t={name:c,ownerName:m,date:A+" "+f,notes:N};t.name&&t.ownerName&&t.date?(e(G.addSchedule(t)),o(""),d(""),h(""),g(""),L(""),T(!1)):e(y.error("Please fill required fields"))}},n.a.createElement("div",{className:"form-group form-row"},n.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"name",readOnly:!0},"Task Name"),n.a.createElement("div",{className:"col-md-10"},n.a.createElement("input",{type:"text",className:"form-control"+(O&&!c?" is-invalid":""),name:"name",placeholder:"Task's Name",value:c,onChange:D}),O&&!c&&n.a.createElement("div",{className:"invalid-feedback"},"Name is required"))),n.a.createElement("div",{className:"form-group form-row"},n.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"ownerName"},"Task Owner"),n.a.createElement("div",{className:"col-md-10"},n.a.createElement("input",{type:"text",className:"form-control"+(O&&!m?" is-invalid":""),name:"ownerName",placeholder:"Owner's Name",value:m,onChange:D}),O&&!m&&n.a.createElement("div",{className:"invalid-feedback"},"Owner name is required"))),n.a.createElement("div",{className:"form-group form-row"},n.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"date"},"Date"),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("input",{type:"date",className:"form-control"+(O&&!A?" is-invalid":""),name:"date",id:"date",value:A,onChange:D}),O&&!A&&n.a.createElement("div",{className:"invalid-feedback"},"Date is required")),n.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"time"},"Time"),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("input",{type:"time",className:"form-control"+(O&&!f?" is-invalid":""),name:"time",id:"time",value:f,onChange:D}),O&&!f&&n.a.createElement("div",{className:"invalid-feedback"},"Time is required"))),n.a.createElement("div",{className:"form-group form-row"},n.a.createElement("label",{className:"col-md-2 text-md-right",htmlFor:"notes"},"Notes"),n.a.createElement("div",{className:"col-md-10"},n.a.createElement("textarea",{className:"form-control",rows:"4",cols:"50",name:"notes",id:"notes",placeholder:"Task Notes",value:N,onChange:D}))),n.a.createElement("div",{className:"form-group form-row mb-0"},n.a.createElement("div",{className:"offset-md-2 col-md-10"},n.a.createElement("button",{type:"submit",className:"btn btn-primary d-block ml-auto rounded-0"},"Add Task"))))))},se=function(){return n.a.createElement("h2",null,"404: Page Not Found.")},le=(t(47),function(){var e=Object(l.d)((function(e){return e.alert})),a=Object(l.c)();return m.listen((function(e,t){a(y.clear())})),n.a.createElement(s.b,{history:m},n.a.createElement(x,null),n.a.createElement("div",{className:"bg-white app-body"},n.a.createElement("div",{className:"container"},e.message&&n.a.createElement("div",{className:"alert ".concat(e.type)},e.message),n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/",component:re,exact:!0}),n.a.createElement(s.a,{path:"/add",component:oe}),n.a.createElement(s.a,{path:"/login",component:ce}),n.a.createElement(s.a,{component:se})))),n.a.createElement(B,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(23),t(48);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(l.a,{store:C},n.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.dd93c130.chunk.js.map