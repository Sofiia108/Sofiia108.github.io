(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),i=(n(13),n(14),n(7)),o=n(2),l=n(3),u=n(5),h=n(4),p=(n(15),n(0)),j=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Contact-container",children:[Object(p.jsxs)("p",{children:[this.props.firstName," "]}),Object(p.jsxs)("p",{children:[this.props.lastName," "]}),Object(p.jsxs)("p",{children:[this.props.phone," "]}),Object(p.jsxs)("p",{children:[this.props.gender," "]})]})}}]),n}(a.Component),f=(n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).contacts=[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"}],e.state={filteredContacts:e.contacts,search:""},e.onSearch=function(t){e.setState({search:t.target.value});var n=t.target.value.toLowerCase(),a=e.contacts.filter((function(e){return e.lastName.toLowerCase().includes(n)}));e.setState({filteredContacts:a})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Contacts-container",children:[Object(p.jsx)("input",{className:"Contacts-input",value:this.state.search,onChange:this.onSearch}),this.state.filteredContacts.map((function(e,t){return Object(a.createElement)(j,Object(i.a)(Object(i.a)({},e),{},{key:t}))}))]})}}]),n}(a.Component));var d=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(f,{})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(d,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.8bff00d8.chunk.js.map