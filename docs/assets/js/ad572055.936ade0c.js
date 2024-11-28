"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[3568],{941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(4848),s=n(8453);const o={title:"Introduction"},a=void 0,r={id:"dataset-exploration/introduction",title:"Introduction",description:"The dataset API is in an early release stage and might be subject to changes.",source:"@site/docs/dataset-exploration/introduction.md",sourceDirName:"dataset-exploration",slug:"/dataset-exploration/introduction",permalink:"/docs/dataset-exploration/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/dataset-exploration/introduction.md",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"docs",previous:{title:"Projects",permalink:"/docs/kognic-io/project"},next:{title:"The prediction format",permalink:"/docs/dataset-exploration/prediction-format"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"No API Client Available",id:"no-api-client-available",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Request Example",id:"request-example",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"The dataset API is in an early release stage and might be subject to changes."})}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"Before you begin, make sure you have:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Access to the dataset exploration tool"}),"\n",(0,i.jsx)(t.li,{children:"An account with permissions to use our API"}),"\n",(0,i.jsxs)(t.li,{children:["Generated API credentials. See ",(0,i.jsx)(t.a,{href:"../kognic-apis#generating-credentials",children:"API Credentials"})]}),"\n",(0,i.jsxs)(t.li,{children:["Installed our Python 3 SDK for authentication - ",(0,i.jsx)(t.a,{href:"https://pypi.org/project/kognic-auth/",children:"kognic-auth"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"no-api-client-available",children:"No API Client Available"}),"\n",(0,i.jsx)(t.p,{children:"At the moment we do not provide an API client for the dataset exploration tool. Instead, we'll provide examples\nof how you can interact with our API."}),"\n",(0,i.jsx)(t.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,i.jsxs)(t.p,{children:["You can discover the list of accessible endpoints within our ",(0,i.jsx)(t.a,{href:"https://dataset.app.kognic.com/api",children:"swagger documentation"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"request-example",children:"Request Example"}),"\n",(0,i.jsx)(t.p,{children:"Here's an example using the kognic-auth library to list all datasets available to the user:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'import requests\n\nfrom kognic.auth.requests.auth_session import RequestsAuthSession\n\nclient = RequestsAuthSession()\n\ntry:\n    response = client.session.get("https://dataset.app.kognic.com/v2/datasets")\n    response.raise_for_status()\n    data = response.json()\n    print(data)\nexcept requests.exceptions.RequestException as e:\n    print(f"Request error: {e}")\n'})}),"\n",(0,i.jsx)(t.p,{children:"(The v1 version of this endpoint, previously mentioned in this document, is now deprecated)"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);