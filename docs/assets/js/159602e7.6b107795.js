"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[2126],{9897:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(4848),o=t(8453);const s={title:"Introduction"},r=void 0,a={id:"annotation-integration/introduction",title:"Introduction",description:"In order to enable a programmatic interface to the ground truth production process, an HTTP API is made available. This",source:"@site/docs/annotation-integration/introduction.md",sourceDirName:"annotation-integration",slug:"/annotation-integration/introduction",permalink:"/docs/annotation-integration/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/annotation-integration/introduction.md",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"docs",previous:{title:"Understand what your dataset contains",permalink:"/docs/dataset-exploration/understand-dataset-content"},next:{title:"Review",permalink:"/docs/annotation-integration/review"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"API Client",id:"api-client",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Request Example",id:"request-example",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In order to enable a programmatic interface to the ground truth production process, an HTTP API is made available. This\npage aims at describing how to work with these integrations, what the available possibilities are, and the concepts and\nidentifiers used."}),"\n",(0,i.jsx)(n.p,{children:"The current possibilities are limited to reviewing delivered annotations."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before you begin, make sure you have:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An account with permissions to use our API"}),"\n",(0,i.jsxs)(n.li,{children:["Generated API credentials. See ",(0,i.jsx)(n.a,{href:"../kognic-apis#generating-credentials",children:"API Credentials"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Installed our Python 3 SDK for authentication - ",(0,i.jsx)(n.a,{href:"https://pypi.org/project/kognic-auth/",children:"kognic-auth"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This page will also assume that:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the user has access to at least one project where at least one input batch has been\nuploaded. (See the client docs regarding these concepts ",(0,i.jsx)(n.a,{href:"/docs/kognic-io/project",children:"here"}),".)"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"api-client",children:"API Client"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://pypi.org/project/kognic-io/",children:"kognic-io Python client"})," covers a majority of the endpoints. For the case of missing coverage, we'll provide examples of how you can\ninteract with our API with just kognic-auth and the requests library."]}),"\n",(0,i.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,i.jsxs)(n.p,{children:["You can discover the list of accessible endpoints within our\n",(0,i.jsx)(n.a,{href:"https://annotation-integration.app.kognic.com/api",children:"swagger documentation"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"request-example",children:"Request Example"}),"\n",(0,i.jsxs)(n.p,{children:["Here's an example using the kognic-auth library to fetch the ",(0,i.jsx)(n.a,{href:"review#feedback",children:"feedback error types"})," available to the user:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import requests\n\nfrom kognic.auth.requests.auth_session import RequestsAuthSession\n\nbase_url = "https://annotation-integration.app.kognic.com/v1/"\nclient = RequestsAuthSession()\n\ntry:\n    response = client.session.get(base_url + "reviews/error-types")\n    response.raise_for_status()\n    data = response.json()\n    print(data)\nexcept requests.exceptions.RequestException as e:\n    print(f"Request error: {e}")\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);