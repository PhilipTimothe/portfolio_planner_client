(this.webpackJsonpportfolio_planner_client=this.webpackJsonpportfolio_planner_client||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){},221:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(17),o=n.n(c),i=(n(114),n.p+"static/media/logo.6ce24c58.svg"),s=(n(115),n(18)),l=n(19),j=n(21),d=n(20),u=n(223),b=n(31),p=n(9),h=n(1);function y(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(b.a,{noValidate:!0,validated:e.validated,onSubmit:e.onSubmit,style:{width:"30rem",margin:"1rem auto"},children:[Object(h.jsxs)(b.a.Group,{controlId:"SearchForm",children:[Object(h.jsx)(b.a.Label,{children:"Search"}),Object(h.jsx)(b.a.Control,{required:!0,type:"text",placeholder:"Enter any symbol or letter",name:"symbol",value:e.value,onChange:e.onChange}),Object(h.jsx)(b.a.Control.Feedback,{children:"Great!"}),Object(h.jsx)(b.a.Control.Feedback,{type:"invalid",children:"Please enter any letter or symbol name."}),Object(h.jsx)(b.a.Text,{className:"text-muted",children:"Search by letter or full company name for some specific symbols or companies."})]}),Object(h.jsx)(p.a,{variant:"dark",type:"submit",children:"Search"})]})})}var m=n(12),O=n(16);function x(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(m.a,{id:e.id,style:{width:"30rem",margin:"1rem auto"},children:[Object(h.jsxs)(m.a.Header,{as:"h5",children:["Company Symbol: ",e.companySymbol]}),Object(h.jsxs)(m.a.Body,{children:[Object(h.jsx)(m.a.Title,{children:e.companyName}),Object(h.jsxs)(m.a.Text,{children:["Industry Type: ",e.companyType," ",Object(h.jsx)("br",{}),"Region: ",e.companyRegion," ",Object(h.jsx)("br",{}),"Currency: ",e.companyCurrency," ",Object(h.jsx)("br",{})]}),Object(h.jsxs)(O.a,{to:"/company-overview/".concat(e.companySymbol),children:[Object(h.jsx)(p.a,{variant:"dark",children:" Explore "})," "]})]})]})})}var f=n(14),v="https://tranquil-escarpment-33998.herokuapp.com",C=function(){return function(e){fetch("".concat(v,"/companies")).then((function(e){return e.json()})).then((function(t){Object(t).map((function(t){return e({type:"GET_PORTFOLIO",payload:{company:t}})}))}))}},S=Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio_planner_client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_KEY,g=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={symbol:"",searchResultsList:[],validated:!1,initialRender:!0},e.handleSearchFormChange=function(t){e.setState({symbol:t.target.value})},e.handleSearchFormSubmit=function(t){!1===t.currentTarget.checkValidity()&&""===e.state.symbol?(t.preventDefault(),t.stopPropagation()):(t.preventDefault(),fetch("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=".concat(e.state.symbol,"&apikey=").concat(S)).then((function(e){return e.json()})).then((function(t){var n=Object(t.bestMatches);e.setState({searchResultsList:n,validated:!0})})))},e}return Object(l.a)(n,[{key:"renderCompanyList",value:function(){return Object(h.jsx)(h.Fragment,{children:this.state.searchResultsList.map((function(e){return Object(h.jsx)(x,{id:Object(u.a)(),companySymbol:e["1. symbol"],companyName:e["2. name"],companyType:e["3. type"],companyRegion:e["4. region"],companyCurrency:e["8. currency"]},Object(u.a)())}))})}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y,{onSubmit:this.handleSearchFormSubmit,validated:this.state.validated,value:this.state.symbol,onChange:this.handleSearchFormChange}),Object(h.jsx)("div",{children:this.renderCompanyList()})]})}}]),n}(r.Component),T=(Object(f.a)(null,{getPortfolio:C})(g),n(43)),_=n(105),E=Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio_planner_client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_KEY,D=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={chartData:{labels:[],datasets:[{label:"100 Day, Daily Historical Data",data:[],fill:!1,backgroundColor:"rgb(54, 162, 235)",borderColor:"rgba(54, 162, 235, 0.2)"}]},chartOptions:{scales:{yAxes:[{ticks:{beginAtZero:!1}}]}}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.id;t&&fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=".concat(t,"&apikey=").concat(E)).then((function(e){return e.json()})).then((function(t){var n=Object.keys(t["Time Series (Daily)"]).slice(0,30).sort((function(e,t){return e>t?1:-1})),r=Object.values(t["Time Series (Daily)"]).map((function(e){return e["4. close"]})).slice(0,30).reverse();e.setState({chartData:{labels:n,datasets:[{label:"30 Day Historical Data",data:r,fill:!1,backgroundColor:"rgb(54, 162, 235)",borderColor:"rgba(54, 162, 235, 0.2)"}]}})}))}},{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(_.Line,{data:this.state.chartData,options:this.state.chartOptions})})}}]),n}(r.Component),k=n(109),w=n(84);var P=Object(f.a)(null,{setPortfolio:function(e){return function(t){var n={id:e.id,Name:e.Name,Symbol:e.Symbol,Industry:e.Industry,Country:e.Country},r={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)};return fetch("".concat(v,"/companies"),r).then((function(e){return e.json()})).then((function(e){t({type:"SET_PORTFOLIO",payload:{data:e}})}))}}})((function(e){var t=Object(r.useState)("overview"),n=Object(T.a)(t,2),a=n[0],c=n[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(k.a,{id:e.id,style:{width:"50rem",margin:"1rem auto"},unmountOnExit:!0,activeKey:a,onSelect:function(e){return c(e)},children:[Object(h.jsx)(w.a,{eventKey:"overview",title:"Company Overview",children:Object(h.jsx)(m.a,{style:{width:"50rem",margin:"1rem auto"},children:Object(h.jsxs)(m.a.Body,{children:[Object(h.jsx)(m.a.Title,{children:e.name}),Object(h.jsxs)(m.a.Text,{children:["Company Symbol: ",e.symbol," ",Object(h.jsx)("br",{}),"Industry: ",e.industry," ",Object(h.jsx)("br",{}),"Asset Type: ",e.assetType," ",Object(h.jsx)("br",{}),"Currency: ",e.currency," ",Object(h.jsx)("br",{}),"exchange: ",e.exchange," ",Object(h.jsx)("br",{}),"Country: ",e.country," ",Object(h.jsx)("br",{}),"Sector: ",e.sector," ",Object(h.jsx)("br",{}),"Address: ",e.address," ",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Description: ",e.description," ",Object(h.jsx)("br",{})]}),Object(h.jsx)(p.a,{variant:"dark",onClick:function(){return e.setPortfolio(e.company)},children:" Add to Portfolio "})," ",Object(h.jsxs)(O.a,{to:"/",children:[Object(h.jsx)(p.a,{variant:"dark",children:" Start a New Search "})," "]})]})})}),Object(h.jsx)(w.a,{eventKey:"datachart",title:"Data Chart",children:Object(h.jsx)(m.a,{style:{width:"50rem",margin:"1rem auto"},children:Object(h.jsxs)(m.a.Body,{children:[Object(h.jsx)(m.a.Title,{children:e.name}),Object(h.jsx)(m.a.Text,{children:Object(h.jsx)(D,{id:e.param})})]})})})]})})})),A=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(n,[{key:"renderSelectedCompany",value:function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(P,{id:Object(u.a)(),symbol:this.props.currentCompany.Symbol,name:this.props.currentCompany.Name,industry:this.props.currentCompany.Industry,assetType:this.props.currentCompany.AssetType,currency:this.props.currentCompany.Currency,exchange:this.props.currentCompany.Exchange,country:this.props.currentCompany.Country,sector:this.props.currentCompany.Sector,address:this.props.currentCompany.Address,description:this.props.currentCompany.Description,company:this.props.currentCompany,param:e},Object(u.a)())})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getCompany(e)}},{key:"render",value:function(){var e=this.props.match.params.id;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{children:this.props.currentCompany&&this.renderSelectedCompany(e)})})}}]),n}(r.Component),F=(Object(f.a)((function(e){return{currentCompanySymbol:e.currentCompanySymbol,currentCompany:e.currentCompany}}),{getCompany:function(e){return function(t){var n=Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio_planner_client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_KEY;fetch("https://www.alphavantage.co/query?function=OVERVIEW&symbol=".concat(e,"&apikey=").concat(n)).then((function(e){return e.json()})).then((function(e){var n=Object(e);t({type:"GET_COMPANY",payload:{company:n}})}))}}})(A),n(106)),R=n(35);var I=Object(f.a)(null,{deleteCompany:function(e){return function(t){fetch("".concat(v,"/companies/").concat(e),{method:"DELETE"}),t({type:"DELETE_COMPANY",payload:{companyId:e}})}}})((function(e){var t=Object(r.useState)(!1),n=Object(T.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)({}),i=Object(T.a)(o,2),s=i[0],l=i[1],j=function(){return c(!1)};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(F.a,{style:{width:"50rem",margin:"1rem auto"},striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Company Name"}),Object(h.jsx)("th",{children:"Company Symbol"}),Object(h.jsx)("th",{children:"Company Industry"}),Object(h.jsx)("th",{children:"Company Region"})]})}),e.companies.map((function(e){return Object(h.jsx)("tbody",{onClick:function(){return t=e.id,c(!0),void l(t);var t},children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.Name}),Object(h.jsx)("td",{children:e.Symbol}),Object(h.jsx)("td",{children:e.Industry}),Object(h.jsx)("td",{children:e.Country})]})},e.id)})),Object(h.jsxs)(R.a,{show:a,onHide:j,children:[Object(h.jsx)(R.a.Header,{closeButton:!0,children:Object(h.jsx)(R.a.Title,{children:"Delete"})}),Object(h.jsx)(R.a.Body,{children:"Are you sure you would like to remove this company from your portfolio?"}),Object(h.jsxs)(R.a.Footer,{children:[Object(h.jsx)(p.a,{variant:"secondary",onClick:j,children:" Close "}),Object(h.jsx)(p.a,{variant:"outline-info",onClick:function(){e.deleteCompany(s),c(!1)},children:" Delete "})]})]})]})})})),N=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getPortfolio()}},{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)(I,{companies:this.props.currentPortfolio})]})})}}]),n}(r.Component);Object(f.a)((function(e){return{currentPortfolio:e.currentPortfolio}}),{getPortfolio:C})(N),n(85),n(66);var L=n(107),H=n(108);function K(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(L.a,{fluid:!0,children:Object(h.jsxs)(H.a,{children:[Object(h.jsx)("h1",{children:"Portfolio Planner"}),Object(h.jsx)("p",{children:"Build a financial portfolio with finacial tools that help you discover new companies along with relative financial history and company information."})]})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{style:{textAlign:"center",padding:"70px 0"},children:Object(h.jsx)(O.a,{to:"/search",children:Object(h.jsx)(p.a,{variant:"outline-info",children:"Start a New Company Search"})})})]})}r.Component;var B=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(h.jsxs)("p",{children:["Edit ",Object(h.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(h.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,224)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};n(219),n(220),n(86),n(23);o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root")),W()}},[[221,1,2]]]);
//# sourceMappingURL=main.9c71c122.chunk.js.map