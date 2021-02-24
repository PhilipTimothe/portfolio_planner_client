(this.webpackJsonpportfolio_planner_client=this.webpackJsonpportfolio_planner_client||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(20),a=n.n(c),o=(n(120),n(121),n(16)),i=n(7),s=n(21),l=n(22),j=n(24),d=n(23),u=n(230),b=n(34),p=n(10),h=n(1);function O(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(b.a,{noValidate:!0,validated:e.validated,onSubmit:e.onSubmit,style:{width:"30rem",margin:"1rem auto"},children:[Object(h.jsxs)(b.a.Group,{controlId:"SearchForm",children:[Object(h.jsx)(b.a.Label,{children:"Search"}),Object(h.jsx)(b.a.Control,{required:!0,type:"text",placeholder:"Enter any symbol or letter",name:"symbol",value:e.value,onChange:e.onChange}),Object(h.jsx)(b.a.Control.Feedback,{children:"Great!"}),Object(h.jsx)(b.a.Control.Feedback,{type:"invalid",children:"Please enter any letter or symbol name."}),Object(h.jsx)(b.a.Text,{className:"text-muted",children:"Search by letter or full company name for some specific symbols or companies."})]}),Object(h.jsx)(p.a,{variant:"dark",type:"submit",children:"Search"})]})})}var m=n(13);function y(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(m.a,{id:e.id,style:{width:"30rem",margin:"1rem auto"},children:[Object(h.jsxs)(m.a.Header,{as:"h5",children:["Company Symbol: ",e.companySymbol]}),Object(h.jsxs)(m.a.Body,{children:[Object(h.jsx)(m.a.Title,{children:e.companyName}),Object(h.jsxs)(m.a.Text,{children:["Industry Type: ",e.companyType," ",Object(h.jsx)("br",{}),"Region: ",e.companyRegion," ",Object(h.jsx)("br",{}),"Currency: ",e.companyCurrency," ",Object(h.jsx)("br",{})]}),Object(h.jsxs)(o.b,{to:"/company-overview/".concat(e.companySymbol),children:[Object(h.jsx)(p.a,{variant:"dark",children:" Explore "})," "]})]})]})})}var f=n(15),x="https://tranquil-escarpment-33998.herokuapp.com",v=function(){return function(e){fetch("".concat(x,"/companies")).then((function(e){return e.json()})).then((function(t){Object(t).map((function(t){return e({type:"GET_PORTFOLIO",payload:{company:t}})}))}))}},C=Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio_planner_client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_KEY,S=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={symbol:"",searchResultsList:[],validated:!1,initialRender:!0},e.handleSearchFormChange=function(t){e.setState({symbol:t.target.value})},e.handleSearchFormSubmit=function(t){!1===t.currentTarget.checkValidity()&&""===e.state.symbol?(t.preventDefault(),t.stopPropagation()):(t.preventDefault(),fetch("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=".concat(e.state.symbol,"&apikey=").concat(C)).then((function(e){return e.json()})).then((function(t){var n=Object(t.bestMatches);e.setState({searchResultsList:n,validated:!0})})))},e}return Object(l.a)(n,[{key:"renderCompanyList",value:function(){return Object(h.jsx)(h.Fragment,{children:this.state.searchResultsList.map((function(e){return Object(h.jsx)(y,{id:Object(u.a)(),companySymbol:e["1. symbol"],companyName:e["2. name"],companyType:e["3. type"],companyRegion:e["4. region"],companyCurrency:e["8. currency"]},Object(u.a)())}))})}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{onSubmit:this.handleSearchFormSubmit,validated:this.state.validated,value:this.state.symbol,onChange:this.handleSearchFormChange}),Object(h.jsx)("div",{children:this.renderCompanyList()})]})}}]),n}(r.Component),g=Object(f.b)(null,{getPortfolio:v})(S),_=n(47),T=n(109),E=Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio_planner_client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_KEY,P=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={chartData:{labels:[],datasets:[{label:"100 Day, Daily Historical Data",data:[],fill:!1,backgroundColor:"rgb(54, 162, 235)",borderColor:"rgba(54, 162, 235, 0.2)"}]},chartOptions:{scales:{yAxes:[{ticks:{beginAtZero:!1}}]}}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.id;t&&fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=".concat(t,"&apikey=").concat(E)).then((function(e){return e.json()})).then((function(t){var n=Object.keys(t["Time Series (Daily)"]).slice(0,30).sort((function(e,t){return e>t?1:-1})),r=Object.values(t["Time Series (Daily)"]).map((function(e){return e["4. close"]})).slice(0,30).reverse();e.setState({chartData:{labels:n,datasets:[{label:"30 Day Historical Data",data:r,fill:!1,backgroundColor:"rgb(54, 162, 235)",borderColor:"rgba(54, 162, 235, 0.2)"}]}})}))}},{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(T.Line,{data:this.state.chartData,options:this.state.chartOptions})})}}]),n}(r.Component),D=n(115),w=n(88);var k=Object(f.b)(null,{setPortfolio:function(e){return function(t){var n={id:e.id,Name:e.Name,Symbol:e.Symbol,Industry:e.Industry,Country:e.Country},r={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)};return fetch("".concat(x,"/companies"),r).then((function(e){return e.json()})).then((function(e){t({type:"SET_PORTFOLIO",payload:{data:e}})}))}}})((function(e){var t=Object(r.useState)("overview"),n=Object(_.a)(t,2),c=n[0],a=n[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(D.a,{id:e.id,style:{width:"50rem",margin:"1rem auto"},unmountOnExit:!0,activeKey:c,onSelect:function(e){return a(e)},children:[Object(h.jsx)(w.a,{eventKey:"overview",title:"Company Overview",children:Object(h.jsx)(m.a,{style:{width:"50rem",margin:"1rem auto"},children:Object(h.jsxs)(m.a.Body,{children:[Object(h.jsx)(m.a.Title,{children:e.name}),Object(h.jsxs)(m.a.Text,{children:["Company Symbol: ",e.symbol," ",Object(h.jsx)("br",{}),"Industry: ",e.industry," ",Object(h.jsx)("br",{}),"Asset Type: ",e.assetType," ",Object(h.jsx)("br",{}),"Currency: ",e.currency," ",Object(h.jsx)("br",{}),"exchange: ",e.exchange," ",Object(h.jsx)("br",{}),"Country: ",e.country," ",Object(h.jsx)("br",{}),"Sector: ",e.sector," ",Object(h.jsx)("br",{}),"Address: ",e.address," ",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Description: ",e.description," ",Object(h.jsx)("br",{})]}),Object(h.jsx)(p.a,{variant:"dark",onClick:function(){return e.setPortfolio(e.company)},children:" Add to Portfolio "})," ",Object(h.jsxs)(o.b,{to:"/",children:[Object(h.jsx)(p.a,{variant:"dark",children:" Start a New Search "})," "]})]})})}),Object(h.jsx)(w.a,{eventKey:"datachart",title:"Data Chart",children:Object(h.jsx)(m.a,{style:{width:"50rem",margin:"1rem auto"},children:Object(h.jsxs)(m.a.Body,{children:[Object(h.jsx)(m.a.Title,{children:e.name}),Object(h.jsx)(m.a.Text,{children:Object(h.jsx)(P,{id:e.param})})]})})})]})})})),F=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(l.a)(n,[{key:"renderSelectedCompany",value:function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(k,{id:Object(u.a)(),symbol:this.props.currentCompany.Symbol,name:this.props.currentCompany.Name,industry:this.props.currentCompany.Industry,assetType:this.props.currentCompany.AssetType,currency:this.props.currentCompany.Currency,exchange:this.props.currentCompany.Exchange,country:this.props.currentCompany.Country,sector:this.props.currentCompany.Sector,address:this.props.currentCompany.Address,description:this.props.currentCompany.Description,company:this.props.currentCompany,param:e},Object(u.a)())})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getCompany(e)}},{key:"render",value:function(){var e=this.props.match.params.id;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{children:this.props.currentCompany&&this.renderSelectedCompany(e)})})}}]),n}(r.Component),N=Object(f.b)((function(e){return{currentCompanySymbol:e.currentCompanySymbol,currentCompany:e.currentCompany}}),{getCompany:function(e){return function(t){var n=Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio_planner_client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_KEY;fetch("https://www.alphavantage.co/query?function=OVERVIEW&symbol=".concat(e,"&apikey=").concat(n)).then((function(e){return e.json()})).then((function(e){var n=Object(e);t({type:"GET_COMPANY",payload:{company:n}})}))}}})(F),I=n(110),A=n(39);var R=Object(f.b)(null,{deleteCompany:function(e){return function(t){fetch("".concat(x,"/companies/").concat(e),{method:"DELETE"}),t({type:"DELETE_COMPANY",payload:{companyId:e}})}}})((function(e){var t=Object(r.useState)(!1),n=Object(_.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)({}),i=Object(_.a)(o,2),s=i[0],l=i[1],j=function(){return a(!1)};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(I.a,{style:{width:"50rem",margin:"1rem auto"},striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Company Name"}),Object(h.jsx)("th",{children:"Company Symbol"}),Object(h.jsx)("th",{children:"Company Industry"}),Object(h.jsx)("th",{children:"Company Region"})]})}),e.companies.map((function(e){return Object(h.jsx)("tbody",{onClick:function(){return t=e.id,a(!0),void l(t);var t},children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.Name}),Object(h.jsx)("td",{children:e.Symbol}),Object(h.jsx)("td",{children:e.Industry}),Object(h.jsx)("td",{children:e.Country})]})},e.id)})),Object(h.jsxs)(A.a,{show:c,onHide:j,children:[Object(h.jsx)(A.a.Header,{closeButton:!0,children:Object(h.jsx)(A.a.Title,{children:"Delete"})}),Object(h.jsx)(A.a.Body,{children:"Are you sure you would like to remove this company from your portfolio?"}),Object(h.jsxs)(A.a.Footer,{children:[Object(h.jsx)(p.a,{variant:"secondary",onClick:j,children:" Close "}),Object(h.jsx)(p.a,{variant:"outline-info",onClick:function(){e.deleteCompany(s),a(!1)},children:" Delete "})]})]})]})})})),L=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getPortfolio()}},{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)(R,{companies:this.props.currentPortfolio})]})})}}]),n}(r.Component),H=Object(f.b)((function(e){return{currentPortfolio:e.currentPortfolio}}),{getPortfolio:v})(L),K=n(89),B=n(70);function M(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(K.a,{fixed:"top",bg:"dark",variant:"dark",children:[Object(h.jsx)(K.a.Brand,{href:"",children:"Portfolio Planner"}),Object(h.jsx)(B.a,{className:"mr-auto"}),Object(h.jsx)(o.b,{to:"/portfolio_planner_client/",children:Object(h.jsx)(p.a,{variant:"outline-info",className:"mr-sm-2",children:"Home"})}),Object(h.jsx)(o.b,{to:"/search",children:Object(h.jsx)(p.a,{variant:"outline-info",className:"mr-sm-2",children:"Company Search"})}),Object(h.jsx)(o.b,{to:"/portfolio",children:Object(h.jsx)(p.a,{variant:"outline-info",className:"mr-sm-2",children:"Portfolio"})})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})}var W=n(111),V=n(112);function Y(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(W.a,{fluid:!0,children:Object(h.jsxs)(V.a,{children:[Object(h.jsx)("h1",{children:"Portfolio Planner"}),Object(h.jsx)("p",{children:"Build a financial portfolio with finacial tools that help you discover new companies along with relative financial history and company information."})]})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{style:{textAlign:"center",padding:"70px 0"},children:Object(h.jsx)(o.b,{to:"/search",children:Object(h.jsx)(p.a,{variant:"outline-info",children:"Start a New Company Search"})})})]})}var U=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(Y,{})})}}]),n}(r.Component);var G=function(){return Object(h.jsxs)(o.a,{children:[Object(h.jsx)(M,{}),Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/portfolio_planner_client",exact:!0,component:U}),Object(h.jsx)(i.a,{path:"/search",exact:!0,component:g}),Object(h.jsx)(i.a,{path:"/company-overview/:id",exact:!0,component:N}),Object(h.jsx)(i.a,{path:"/portfolio",exact:!0,component:H})]})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,231)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))},X=(n(224),n(37)),J=n(113),Z=n.n(J),z=n(114),Q=n(90),$=n(26),ee={currentCompany:{},currentPortfolio:[]};n(225).config();Object(X.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COMPANY":return Object($.a)(Object($.a)({},e),{},{currentCompany:Object($.a)({id:Object(u.a)()},t.payload.company)});case"GET_PORTFOLIO":var n=[].concat(Object(Q.a)(e.currentPortfolio),[t.payload.company]),r=Array.from(new Set(n.map((function(e){return e.id})))).map((function(e){return{id:e,Name:n.find((function(t){return t.id===e})).Name,Symbol:n.find((function(t){return t.id===e})).Symbol,Industry:n.find((function(t){return t.id===e})).Industry,Country:n.find((function(t){return t.id===e})).Country}}));return Object($.a)(Object($.a)({},e),{},{currentPortfolio:r});case"SET_PORTFOLIO":return Object($.a)({},e);case"DELETE_COMPANY":return Object($.a)(Object($.a)({},e),{},{currentPortfolio:Object(Q.a)(e.currentPortfolio.filter((function(e){return e.id!==t.payload.companyId})))});default:return Object($.a)({},e)}}),Object(X.c)(Object(X.a)(z.a,Z.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));a.a.render(Object(h.jsx)(f.a,{children:Object(h.jsx)(G,{})}),document.getElementById("root")),q()}},[[228,1,2]]]);
//# sourceMappingURL=main.3fd3ec5e.chunk.js.map