(this.webpackJsonpmovethrower=this.webpackJsonpmovethrower||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(2),a=n.n(o),i=n(16),r=n.n(i),s=(n(26),n(17)),u=n(18),h=n(20),l=n(19),d=(n(27),n(28)),j=n(2),m=new d,f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={EeveeName:""},c}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.getPokemonByName(3).then((function(t){e.setState({EeveeName:t.species.name}),console.log(t)})).catch((function(e){console.log("There was an ERROR: ",e)}))}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{id:"foo",children:this.state.EeveeName})})})}}]),n}(j.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),v()}},[[56,1,2]]]);
//# sourceMappingURL=main.74f13471.chunk.js.map