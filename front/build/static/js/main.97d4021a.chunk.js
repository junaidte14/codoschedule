(this.webpackJsonpcodoschedule=this.webpackJsonpcodoschedule||[]).push([[0],{29:function(e,a,t){e.exports=t(44)},36:function(e,a,t){},41:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);t(30);var n=t(0),r=t.n(n),s=t(22),o=t.n(s),c=(t(35),t(36),t(2)),l=t(3),i=t(5),m=t(4),d=t(11),u=t(1),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement(d.b,{to:"/",className:"navbar-brand"},"CodoSchedule"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(d.b,{to:"/",className:"nav-link"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(d.b,{to:"/add",className:"nav-link"},"Add"))),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(d.b,{to:"/login",className:"nav-link"},"Login")))))}}]),t}(n.Component),p=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"text-white py-2 bg-primary"},r.a.createElement("div",{className:"container d-flex "},r.a.createElement("p",null,"\xa9 2020 CODOPLEX. All rights reserved."),r.a.createElement("div",{className:"ml-auto"},r.a.createElement("a",{className:"d-block text-white",href:"/terms"},"Terms of use"),r.a.createElement("a",{className:"d-block text-white",href:"/privacy"},"Privacy policy"))))}}]),t}(n.Component),v=t(10),b=t(24),f=t(28),E=t(25),y=t.n(E),N=t(26),w=t.n(N),g=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={countdowntimer:void 0,years:void 0,months:void 0,days:void 0,hours:void 0,minutes:void 0,seconds:void 0},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var a=e.props,t=a.timeTillDate,n=a.timeFormat,r=w()(Date.now(),y()(t,n)),s=r.years,o=r.months,c=r.days,l=r.hours,i=r.minutes,m=r.seconds;e.setState({countdowntimer:r,years:s,months:o,days:c,hours:l,minutes:i,seconds:m})}),1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,a=e.years,t=e.months,n=e.days,s=e.hours,o=e.minutes,c=e.seconds,l=C(t,12,0,0,360),i=C(n,30,0,0,360),m=C(s,24,0,0,360),d=C(o,60,0,0,360),u=C(c,60,0,0,360);return c?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"countdown-wrapper"},a>=0&&r.a.createElement("div",{className:"countdown-item "+(this.props.showBorder?"border border-primary":"")},a,r.a.createElement("span",null,"years")),t>=0&&r.a.createElement("div",{className:"countdown-item "+(this.props.showBorder?"border border-primary":"")},this.props.showCircles&&r.a.createElement(k,{radius:l}),t,r.a.createElement("span",null,"months")),n>=0&&r.a.createElement("div",{className:"countdown-item "+(this.props.showBorder?"border border-primary":"")},this.props.showCircles&&r.a.createElement(k,{radius:i}),n,r.a.createElement("span",null,"days")),s>=0&&r.a.createElement("div",{className:"countdown-item "+(this.props.showBorder?"border border-primary":"")},this.props.showCircles&&r.a.createElement(k,{radius:m}),s,r.a.createElement("span",null,"hours")),o>=0&&r.a.createElement("div",{className:"countdown-item "+(this.props.showBorder?"border border-primary":"")},this.props.showCircles&&r.a.createElement(k,{radius:d}),o,r.a.createElement("span",null,"minutes")),c>=0&&r.a.createElement("div",{className:"countdown-item "+(this.props.showBorder?"border border-primary":"")},this.props.showCircles&&r.a.createElement(k,{radius:u}),c,r.a.createElement("span",null,"seconds")))):null}}]),t}(n.Component),k=function(e){var a=e.radius;return r.a.createElement("svg",{className:"countdown-svg"},r.a.createElement("path",{fill:"none",stroke:"#333",strokeWidth:"4",d:j(50,50,48,0,a)}))};function O(e,a,t,n){var r=(n-90)*Math.PI/180;return{x:e+t*Math.cos(r),y:a+t*Math.sin(r)}}function j(e,a,t,n,r){var s=O(e,a,t,r),o=O(e,a,t,n),c=r-n<=180?"0":"1";return["M",s.x,s.y,"A",t,t,0,c,0,o.x,o.y].join(" ")}function C(e,a,t,n,r){return(e-a)*(r-n)/(t-a)+n}var T=g,x=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"task-list item-list mb-3"},this.props.tasks.map((function(a){return r.a.createElement("div",{className:"card task-item mb-3 rounded-0",key:a._id},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"task-date ml-auto"},r.a.createElement(T,{timeTillDate:a.date,timeFormat:"YYYY-MM-DD hh:mm:ss a",showCircles:!1,showBorder:!0})),r.a.createElement("h5",{className:"card-title"},r.a.createElement("span",null,a.name)),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"task-notes"},a.notes))),r.a.createElement("div",{className:"card-footer text-muted"},r.a.createElement("div",{className:"d-flex flex-row-reverse"},r.a.createElement("p",{className:"ml-auto mb-0"},r.a.createElement("span",null,a.ownerName)),r.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(){return e.props.deleteTask(a)}},r.a.createElement(f.a,null)))))})))}}]),t}(n.Component),D=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-tasks row justify-content-center my-4"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{id:"SearchTasks",type:"text",className:"form-control rounded-0","aria-label":"Search Tasks",onChange:function(a){return e.props.searchTasks(a.target.value)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:"btn btn-primary dropdown-toggle rounded-0","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort by: ",r.a.createElement("span",{className:"caret"})),r.a.createElement("div",{className:"sort-menu dropdown-menu dropdown-menu-right"},r.a.createElement("button",{className:"sort-by dropdown-item "+("name"===this.props.orderBy?"active":""),href:"#",onClick:function(a){return e.props.changeOrder("name",e.props.orderDir)}},"Task Name"),r.a.createElement("button",{className:"sort-by dropdown-item "+("date"===this.props.orderBy?"active":""),href:"#",onClick:function(a){return e.props.changeOrder("date",e.props.orderDir)}},"Date"),r.a.createElement("button",{className:"sort-by dropdown-item "+("ownerName"===this.props.orderBy?"active":""),href:"#",onClick:function(a){return e.props.changeOrder("ownerName",e.props.orderDir)}},"Owner"),r.a.createElement("div",{role:"separator",className:"dropdown-divider"}),r.a.createElement("button",{className:"sort-by dropdown-item "+("asc"===this.props.orderDir?"active":""),href:"#",onClick:function(a){return e.props.changeOrder(e.props.orderBy,"asc")}},"Asc"),r.a.createElement("button",{className:"sort-by dropdown-item "+("desc"===this.props.orderDir?"active":""),href:"#",onClick:function(a){return e.props.changeOrder(e.props.orderBy,"desc")}},"Desc"))))))}}]),t}(n.Component),B={apiURL:"/v1/"},L=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={myTasks:[],orderBy:"date",orderDir:"asc",queryText:"",loaderStatus:!0},e.deleteTask=e.deleteTask.bind(Object(v.a)(e)),e.changeOrder=e.changeOrder.bind(Object(v.a)(e)),e.searchTasks=e.searchTasks.bind(Object(v.a)(e)),e.updateInfo=e.updateInfo.bind(Object(v.a)(e)),e}return Object(l.a)(t,[{key:"deleteTask",value:function(e){var a=this;fetch(B.apiURL+"schedules/"+e._id,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.anVuYWlkdGUxNEBnbWFpbC5jb20.tnZyB_epsHmzh5q5MWWZa9ktw5uViDwxwIIVlQEeLVA"}}).then((function(e){return e.json()})).then((function(e){var t=e.data.map((function(e){return e}));a.setState({myTasks:t})})).catch((function(e){console.log(e)}))}},{key:"changeOrder",value:function(e,a){this.setState({orderBy:e,orderDir:a})}},{key:"searchTasks",value:function(e){this.setState({queryText:e})}},{key:"updateInfo",value:function(e,a,t){var n=this.state.myTasks;n[Object(b.findIndex)(n,{id:t})][e]=a,this.setState({myTasks:n})}},{key:"componentDidMount",value:function(){var e=this;fetch(B.apiURL+"schedules",{}).then((function(e){return e.json()})).then((function(a){var t=a.data.map((function(e){return e}));e.setState({myTasks:t,loaderStatus:!1})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a=this,t=this.state.myTasks;return e="asc"===this.state.orderDir?1:-1,t=t.sort((function(t,n){return t[a.state.orderBy].toLowerCase()<n[a.state.orderBy].toLowerCase()?-1*e:1*e})).filter((function(e){return e.name.toLowerCase().includes(a.state.queryText.toLocaleLowerCase())||e.ownerName.toLowerCase().includes(a.state.queryText.toLocaleLowerCase())||e.notes.toLowerCase().includes(a.state.queryText.toLocaleLowerCase())})),r.a.createElement("main",{className:"page bg-white"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 bg-white"},r.a.createElement(D,{orderBy:this.state.orderBy,orderDir:this.state.orderDir,changeOrder:this.changeOrder,searchTasks:this.searchTasks}),this.state.loaderStatus&&r.a.createElement("div",{className:"loader"}),!this.state.loaderStatus&&r.a.createElement(x,{tasks:t,deleteTask:this.deleteTask,updateInfo:this.updateInfo}))))}}]),t}(n.Component),S=t(27),I=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={name:"",ownerName:"",date:"",time:"",notes:""},e.handleChange=e.handleChange.bind(Object(v.a)(e)),e.submitTask=e.submitTask.bind(Object(v.a)(e)),e}return Object(l.a)(t,[{key:"handleChange",value:function(e){var a=e.target,t=a.value,n=a.name;this.setState(Object(S.a)({},n,t))}},{key:"submitTask",value:function(e){var a=this;e.preventDefault();var t={name:this.state.name,ownerName:this.state.ownerName,date:this.state.date+" "+this.state.time,notes:this.state.notes};fetch(B.apiURL+"schedules",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.anVuYWlkdGUxNEBnbWFpbC5jb20.tnZyB_epsHmzh5q5MWWZa9ktw5uViDwxwIIVlQEeLVA"}}).then((function(e){return e.json()})).then((function(e){e.success&&a.setState({name:"",ownerName:"",date:"",time:"",notes:""})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"card textcenter mt-20 rounded-0"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{id:"taskForm",noValidate:!0,onSubmit:this.submitTask},r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"name",readOnly:!0},"Task Name"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"text",className:"form-control",name:"name",placeholder:"Task's Name",value:this.state.name,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"ownerName"},"Task Owner"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"text",className:"form-control",name:"ownerName",placeholder:"Owner's Name",value:this.state.ownerName,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"date"},"Date"),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"date",className:"form-control",name:"date",id:"date",value:this.state.date,onChange:this.handleChange})),r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"time"},"Time"),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"time",className:"form-control",name:"time",id:"time",value:this.state.time,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 text-md-right",htmlFor:"notes"},"Notes"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("textarea",{className:"form-control",rows:"4",cols:"50",name:"notes",id:"notes",placeholder:"Task Notes",value:this.state.notes,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row mb-0"},r.a.createElement("div",{className:"offset-md-2 col-md-10"},r.a.createElement("button",{type:"submit",className:"btn btn-primary d-block ml-auto rounded-0"},"Add Task"))))))}}]),t}(n.Component),F=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n,r=e.match;return Object(c.a)(this,t),(n=a.call(this)).name=r.params.name,n}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("p",null,this.name)}}]),t}(n.Component),W=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("h2",null,"404: Page Not Found.")}}]),t}(n.Component),M=(t(41),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(h,null),r.a.createElement("div",{className:"bg-white app-body"},r.a.createElement("div",{className:"container"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:L,exact:!0}),r.a.createElement(u.a,{path:"/add",component:I}),r.a.createElement(u.a,{path:"/tasks/:name",component:F}),r.a.createElement(u.a,{component:W})))),r.a.createElement(p,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(21),t(42);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.97d4021a.chunk.js.map