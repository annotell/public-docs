"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[1487],{1625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(4848),i=n(8453);const r={title:"Errors & Troubleshooting",description:"Dealing with Errors"},s="Errors & Troubleshooting",c={id:"kognic-io/error_handling",title:"Errors & Troubleshooting",description:"Dealing with Errors",source:"@site/docs/kognic-io/error_handling.md",sourceDirName:"kognic-io",slug:"/kognic-io/error_handling",permalink:"/docs/kognic-io/error_handling",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/kognic-io/error_handling.md",tags:[],version:"current",frontMatter:{title:"Errors & Troubleshooting",description:"Dealing with Errors"},sidebar:"docs",previous:{title:"Review",permalink:"/docs/annotation-integration/review"},next:{title:"FAQ",permalink:"/docs/kognic-io/FAQ"}},a={},l=[{value:"HTTP Error Handling",id:"http-error-handling",level:2},{value:"Request Timeouts",id:"request-timeouts",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"errors--troubleshooting",children:"Errors & Troubleshooting"}),"\n",(0,o.jsx)(t.h2,{id:"http-error-handling",children:"HTTP Error Handling"}),"\n",(0,o.jsxs)(t.p,{children:["When the client sends a http request to the API and waits until it receives a response. If the response code is ",(0,o.jsx)(t.code,{children:"2xx"}),"\n(the status code for a successful call) the client converts the received message into a python object which can be\nviewed or used. However, if the API responds with an error code (",(0,o.jsx)(t.code,{children:"4xx"})," or ",(0,o.jsx)(t.code,{children:"5xx"}),") the python client will raise an error.\nIt's up to the user to decide if and how they want to handle this error."]}),"\n",(0,o.jsx)(t.h2,{id:"request-timeouts",children:"Request Timeouts"}),"\n",(0,o.jsx)(t.p,{children:"When uploading scenes with Kognic IO Client it is sometimes that case that network conditions lead to timeout errors. Kognic IO uses asynchronous IO to multiplex uploads and make best use of the available bandwidth, and will retry failed connections many times, but sometimes some steps need to be taken on the client side to control the behaviour and rule out certain issues:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Lower the total number of connections that Kognic IO may open at one time via the constructor param ",(0,o.jsx)(t.code,{children:"KognicIOClient(max_connections = N)"}),". This affects the maximum size of the internal connection pool. With the max set to 1, the uploads are effectively serial."]}),"\n",(0,o.jsxs)(t.li,{children:["Increase the timeout for connections that Kognic IO opens via the constructor param ",(0,o.jsx)(t.code,{children:"KognicIOClient(timeout = N)"}),", in seconds. This affects the connect and read timeout of connections. This will allow more time for connections to be established across the internet and for the server to send an initial response."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var o=n(6540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);