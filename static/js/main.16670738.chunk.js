(this.webpackJsonpcovid19karnataka=this.webpackJsonpcovid19karnataka||[]).push([[0],{100:function(e,t,a){e.exports=a(129)},105:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),s=(a(105),a(14)),o=a(15),l=a(17),d=a(16),u=a(90),p=a(60),m=a.n(p),h=a(22),v=a(61),_=a.n(v),b=a(65),f=a(91),E=a(81),O=a(20),g=a(45),j=a.n(g),y=a(34),D=a.n(y),S=a(35),N=a.n(S),k=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.header?N.a.header:N.a.row},r.a.createElement("div",{className:N.a.district},this.props.dist.name),r.a.createElement("div",{className:N.a.data},this.props.dist.confirmed),r.a.createElement("div",{className:N.a.data},this.props.dist.recovered),r.a.createElement("div",{className:N.a.data},this.props.dist.deceased),r.a.createElement("div",{className:N.a.data},this.props.dist.active))}}]),a}(n.Component),w=a(46),A=a(175),C=a(184),T=a(183),B=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(C.a,{id:"combo-box-demo",options:this.props.options,getOptionLabel:function(e){return e},onChange:function(t,a){return e.props.onChange(a)},renderOption:function(e){return r.a.createElement("div",null,e)},renderInput:function(t){return r.a.createElement(T.a,Object.assign({},t,{label:e.props.label,variant:"outlined"}))}})}}]),a}(n.Component),x=a(40);function R(e,t,a,n,r){return{name:e,active:t,confirmed:a,deceased:n,recovered:r}}var M=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={allStates:[],covidState:[],loading:!1},e.districtData={},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState(Object(O.a)({},this.state,{loading:!0})),this.getDistrictWiseData()}},{key:"getDistrictWiseData",value:function(){var e=Object(E.a)(_.a.mark((function e(){var t,a,n,r,i,c,s,o,l=this;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([j.a.get(w.api.getDistrictWiseData)]);case 3:for(s in t=e.sent,a=Object(f.a)(t,1),n=a[0],j.a.get(w.api.getDistrictWiseData),r=Object.keys(n.data),this.setState(Object(O.a)({},this.state,{allStates:r})),this.districtData=Object(O.a)({},n.data),i=n.data.Karnataka.districtData,c=[],i)o=i[s],c.push(R(s,o.active,o.confirmed,o.deceased,o.recovered));setTimeout((function(){l.setState(Object(O.a)({},l.state,{covidState:Object(b.a)(c.sort((function(e,t){return t.confirmed-e.confirmed}))),loading:!1}))}),1e3),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.props.history.push("/error");case 19:case"end":return e.stop()}}),e,this,[[0,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"onStateSelection",value:function(e){var t=this;if(this.setState(Object(O.a)({},this.state,{loading:!0})),e&&this.districtData&&this.districtData[e]){this.props.setSelectedState(e);var a=this.districtData[e].districtData,n=[];for(var r in a){var i=a[r];n.push(R(r,i.active,i.confirmed,i.deceased,i.recovered))}setTimeout((function(){t.setState(Object(O.a)({},t.state,{covidState:Object(b.a)(n.sort((function(e,t){return t.confirmed-e.confirmed}))),loading:!1}))}),1e3)}}},{key:"render",value:function(){var e=this,t=this.state.covidState.map((function(e,t){return r.a.createElement(k,{dist:e,key:t})})),a="";return this.state.loading&&(a=r.a.createElement(A.a,null)),r.a.createElement("div",{className:D.a.main},r.a.createElement("div",{className:D.a.searchBar},r.a.createElement(B,{label:"Select state",options:this.state.allStates,onChange:function(t){return e.onStateSelection(t)}})),r.a.createElement(k,{header:"true",dist:{name:"District",confirmed:"T",recovered:"R",deceased:"D",active:"A"}}),a,t,r.a.createElement("div",{className:D.a.bulletsSection},r.a.createElement("div",{className:D.a.bullets},"T - Total"),r.a.createElement("div",{className:D.a.bullets},"R - Recovered"),r.a.createElement("div",{className:D.a.bullets},"D - Deceased"),r.a.createElement("div",{className:D.a.bullets},"A - Active")))}}]),a}(n.Component),W=Object(x.b)(null,(function(e){return{setSelectedState:function(t){return e({type:"SET_SELECTED_STATE",payload:{state:t}})}}}))(M),I=a(57),G=a.n(I),J=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:G.a.section},r.a.createElement("div",{className:G.a.errorCode},"Oops!"),r.a.createElement("div",null,r.a.createElement("span",{className:G.a.errorDescription},"Something went wrong. Please try again later")))}}]),a}(n.Component),L=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/covid19india",exact:!0,component:W}),r.a.createElement(h.a,{path:"/error",component:J}),r.a.createElement(h.a,{component:W}))}}]),a}(n.Component),V=a(176),X=a(177),K=a(92),P=a(48),F=a.n(P),U=a(89),z=a.n(U),H=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V.a,{position:"static"},r.a.createElement(X.a,{className:F.a.root},r.a.createElement("img",{className:F.a.img,alt:"Covid logo",src:z.a}),r.a.createElement(K.a,{variant:"h6",className:F.a.title},"Covid 19 Statistics",r.a.createElement("div",{className:F.a.state},this.props.selectedState)))))}}]),a}(n.Component),Q=Object(x.b)((function(e){return{selectedState:e.covidReducer.selectedState}}),null)(H),Y=a(182),q=a(186),$=a(181),Z=a(179),ee=a(180),te=a(178),ae=a(25),ne=a.n(ae),re=function(e){var t=new Intl.NumberFormat("en-IN");return isNaN(e)?"-":t.format(e)},ie=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isDialogOpen:!1,data:{active:"",confirmed:"",deaths:"",deltaconfirmed:"",deltadeaths:"",deltarecovered:"",lastupdatedtime:"",recovered:""}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;j.a.get(w.api.getAllData).then((function(t){var a=t.data.statewise[0];e.setState(Object(O.a)({},e.state,{data:a,isDialogOpen:!0})),setTimeout((function(){return e.setState(Object(O.a)({},e.state,{isDialogOpen:!1}))}),5e3)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(q.a,{open:this.state.isDialogOpen,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(te.a,{id:"alert-dialog-title"},"Covid 19 cases across India"),r.a.createElement(Z.a,null,r.a.createElement(ee.a,{id:"alert-dialog-description"},r.a.createElement("span",{className:ne.a.label},"Active: ",r.a.createElement("span",{className:ne.a.count},re(this.state.data.active)," "),r.a.createElement("br",null)),r.a.createElement("span",{className:ne.a.label},"Confirmed:",r.a.createElement("span",{className:ne.a.count},re(this.state.data.confirmed)+" ",r.a.createElement("span",{className:ne.a.delta},"(+",re(this.state.data.deltaconfirmed),")")),r.a.createElement("br",null)),r.a.createElement("span",{className:ne.a.label},"Recovered:",r.a.createElement("span",{className:ne.a.count},re(this.state.data.recovered)+" ",r.a.createElement("span",{className:ne.a.deltaGreen},"(+",re(this.state.data.deltarecovered),")")),r.a.createElement("br",null)),r.a.createElement("span",{className:ne.a.label},"Deaths:",r.a.createElement("span",{className:ne.a.count},re(this.state.data.deaths)+" ",r.a.createElement("span",{className:ne.a.delta},"(+",re(this.state.data.deltadeaths),")"),r.a.createElement("br",null))))),r.a.createElement($.a,null,r.a.createElement(Y.a,{onClick:function(){return e.setState(Object(O.a)({},e.state,{isDialogOpen:!1}))},color:"primary",autoFocus:!0},"Close"))))}}]),a}(n.Component),ce=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:m.a.main},r.a.createElement(Q,null),r.a.createElement(ie,null),r.a.createElement(L,null),r.a.createElement("p",{className:m.a.footer},"\xa9 SLU")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=a(43),oe={selectedState:"Karnataka"};var le=Object(se.b)({covidReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case"SET_SELECTED_STATE":return Object(O.a)({},e,{selectedState:a.state})}return Object(O.a)({},e)}}),de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.c,ue=Object(se.d)(le,de());c.a.render(r.a.createElement(x.a,{store:ue},r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,a){e.exports={label:"AlertDialog_label__3axjm",count:"AlertDialog_count__1sGLk",delta:"AlertDialog_delta__3JGIm",deltaGreen:"AlertDialog_deltaGreen__3yBKm"}},34:function(e,t,a){e.exports={bullets:"CovidData_bullets__3_sTr",bulletsSection:"CovidData_bulletsSection__1bY4W",main:"CovidData_main__38Eu3",searchBar:"CovidData_searchBar__2zzVn"}},35:function(e,t,a){e.exports={"MuiTypography-h6":"Row_MuiTypography-h6__-QH_5",s:"Row_s__3BAtk",row:"Row_row__2OpIF",district:"Row_district__2VEJJ",data:"Row_data__1VIax",header:"Row_header__10Yd_"}},46:function(e){e.exports=JSON.parse('{"api":{"getDistrictWiseData":"https://api.covid19india.org/state_district_wise.json","getAllData":"https://api.covid19india.org/data.json"}}')},48:function(e,t,a){e.exports={"MuiTypography-h6":"AppBar_MuiTypography-h6__2jAAG",s:"AppBar_s__3kEvV",root:"AppBar_root__3GkLg",menuButton:"AppBar_menuButton__6ys8g",title:"AppBar_title__1KWNm",img:"AppBar_img__1XC-X",spin:"AppBar_spin__XhrCT",state:"AppBar_state__1DH-2"}},57:function(e,t,a){e.exports={"MuiTypography-h6":"Error_MuiTypography-h6__Jh8Di",s:"Error_s__2WRPr",section:"Error_section__3V4bo",errorCode:"Error_errorCode__1GyEU",errorDescription:"Error_errorDescription__2bmsr"}},60:function(e,t,a){e.exports={"MuiTypography-h6":"App_MuiTypography-h6__i-72Q",s:"App_s__SO5cq",main:"App_main__k910b",footer:"App_footer__3rr7s"}},89:function(e,t,a){e.exports=a.p+"static/media/covidlogo.b0f1593b.png"}},[[100,1,2]]]);
//# sourceMappingURL=main.16670738.chunk.js.map