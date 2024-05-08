"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[5190],{1879:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var t=i(4848),o=i(8453);const c={id:"kognic-apis",title:"Kognic APIs",description:"Overview of Kognic API usage including authentication"},r="API Client Overview",s={id:"kognic-apis",title:"Kognic APIs",description:"Overview of Kognic API usage including authentication",source:"@site/docs/kognic_apis.md",sourceDirName:".",slug:"/kognic-apis",permalink:"/docs/kognic-apis",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic_apis.md",tags:[],version:"current",frontMatter:{id:"kognic-apis",title:"Kognic APIs",description:"Overview of Kognic API usage including authentication"},sidebar:"docs",next:{title:"Key Concepts",permalink:"/docs/"}},a={},l=[{value:"Authentication",id:"authentication",level:2},{value:"Generating Credentials",id:"generating-credentials",level:2},{value:"Examples",id:"examples",level:2},{value:"Proxy Configuration",id:"proxy-configuration",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"api-client-overview",children:"API Client Overview"}),"\n",(0,t.jsxs)(n.p,{children:["Kognic provides HTTP APIs to our client-facing services, and an API client library (",(0,t.jsx)(n.a,{href:"https://pypi.org/project/kognic-io/",children:(0,t.jsx)(n.code,{children:"kognic-io"})}),"), to wrap basic API calls and simplify calling the APIs from Python code."]}),"\n",(0,t.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["Authentication is handled by ",(0,t.jsx)(n.a,{href:"https://pypi.org/project/kognic-auth/",children:"kognic-auth"}),", a Python 3 library providing foundations for Kognic Authentication on top of the requests library."]}),"\n",(0,t.jsxs)(n.p,{children:["The authentication builds on the standard Oauth 2.0 Client Credentials flow. There are a few ways to provide authentication credentials to our API clients. Kognic Python clients such as in kognic-query or kognic-io accept an ",(0,t.jsx)(n.code,{children:"auth"})," parameter that can be set explicitly. Alternatively, one can set environment variables that point to the Kognic credentials file. See examples below."]}),"\n",(0,t.jsx)(n.h2,{id:"generating-credentials",children:"Generating Credentials"}),"\n",(0,t.jsxs)(n.p,{children:["The credentials file that contains the Kognic Client ID and the Kognic Client secret, can be generated in the ",(0,t.jsx)(n.a,{href:"https://app.kognic.com",children:"Kognic web application"}),' by clicking on "Api Credentials..." in the user menu, followed by clicking on the "Generate Credentials" button.']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Generate API credentials app screenshot",src:i(1263).A+"",width:"335",height:"499"})}),"\n",(0,t.jsxs)(n.p,{children:["The credentials file should be saved in an appropriate directory, such as ",(0,t.jsx)(n.code,{children:"~/.config/kognic/credentials.json"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"There are a few ways to set your credentials in auth."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Set the environment variable ",(0,t.jsx)(n.code,{children:"KOGNIC_CREDENTIALS"})," to point to your Kognic Credentials file, by issuing the command ",(0,t.jsx)(n.code,{children:"export KOGNIC_CREDENTIALS=~/.config/kognic/credentials.json"})]}),"\n",(0,t.jsxs)(n.li,{children:["Set the environment variables ",(0,t.jsx)(n.code,{children:"KOGNIC_CLIENT_ID"})," and ",(0,t.jsx)(n.code,{children:"KOGNIC_CLIENT_SECRET"})]}),"\n",(0,t.jsxs)(n.li,{children:["Set the ",(0,t.jsx)(n.code,{children:"auth"})," parameter to the credentials file path, such as ",(0,t.jsx)(n.code,{children:'auth="~/.config/kognic/credentials.json"'})]}),"\n",(0,t.jsxs)(n.li,{children:["Set the ",(0,t.jsx)(n.code,{children:"auth"})," parameter to credentials tuple, such as ",(0,t.jsx)(n.code,{children:"auth=(<client_id>, <client_secret>)"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By default, Kognic API clients use the credentials set in environment variable(s). To create an authenticated kognic-io client, assuming the environment variable(s) are set correctly, simply do:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from kognic.io.client import KognicIOClient\n\napi_client = KognicIOClient()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Otherwise, one can override the credentiails explicitly:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from kognic.io.client import KognicIOClient\n\napi_client = KognicIOClient(auth="~/.config/kognic/credentials.json")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Under the hood, they all use the AuthSession class which is implements a requests session with automatic token refresh."}),"\n",(0,t.jsx)(n.h2,{id:"proxy-configuration",children:"Proxy Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["If your organizations' network policy requires HTTP(S) traffic to be proxied out via a specific host, then you should configure this via your OS or execution environment. ",(0,t.jsx)(n.code,{children:"kognic-io"})," uses Python's ",(0,t.jsx)(n.code,{children:"urllib"})," which ",(0,t.jsx)(n.a,{href:"https://docs.python.org/3/library/urllib.request.html#urllib.request.getproxies",children:"will pick up the proxy configuration from your OS and environment variables"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The correct proxy host/address to use depends on the network configuration within your organization, so reach out to your internal IT support for details."}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"export HTTPS_PROXY='http://10.9.8.7:1234'\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1263:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/generate-api-credentials-b4d947932cf0edf423172c0326d63b86.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var t=i(6540);const o={},c=t.createContext(o);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);