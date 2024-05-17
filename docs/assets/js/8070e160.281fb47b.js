"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[3822],{1685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(4848),c=n(8453);const s={id:"quickstart",title:"Quickstart",slug:"/"},o="Quickstart",r={id:"quickstart",title:"Quickstart",description:"Install the client",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/quickstart.md",tags:[],version:"current",frontMatter:{id:"quickstart",title:"Quickstart",slug:"/"},sidebar:"docs",next:{title:"Upload your first scene",permalink:"/docs/upload-your-first-scene"}},a={},l=[{value:"Install the client",id:"install-the-client",level:2},{value:"Setup and verify credentials",id:"setup-and-verify-credentials",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,i.jsx)(t.h2,{id:"install-the-client",children:"Install the client"}),"\n",(0,i.jsxs)(t.p,{children:["When interacting with the Kognic Platform, you will often do so via ",(0,i.jsx)(t.a,{href:"https://pypi.org/project/kognic-io/",children:"kognic-io"}),"\nwhich is a Python client library for the Kognic APIs. You can install it via pip:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pip install kognic-io\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"kognic-io"})," uses ",(0,i.jsx)(t.a,{href:"https://pypi.org/project/kognic-auth/",children:"kognic-auth"})," under the hood for authentication. For the cases where you don't use ",(0,i.jsx)(t.code,{children:"kognic-io"}),", you can use kognic-auth directly."]})}),"\n",(0,i.jsx)(t.h2,{id:"setup-and-verify-credentials",children:"Setup and verify credentials"}),"\n",(0,i.jsxs)(t.p,{children:["Generate and download credentials from the Kognic Platform according to ",(0,i.jsx)(t.a,{href:"./kognic-apis#generating-credentials",children:"this"})," guide. Then you can set the environment variable ",(0,i.jsx)(t.code,{children:"KOGNIC_CREDENTIALS"})," to point to it. Assuming that you save your credentials in ",(0,i.jsx)(t.code,{children:"~/.config/kognic/credentials.json"}),", you can do this by running"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"export KOGNIC_CREDENTIALS=~/.config/kognic/credentials.json\n"})}),"\n",(0,i.jsx)(t.p,{children:"in the terminal. To verify that they are correct you can simply list projects:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from kognic.io.client import KognicIOClient\n\nclient = KognicIOClient()\n\n# Verify that the client is authenticated by listing projects\nclient.project.get_projects()\nprint("success")\n'})}),"\n",(0,i.jsx)(t.p,{children:"You should now be set up to interact with the Kognic Platform."}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"./upload-your-first-scene",children:"Upload your first scene"}),": Quick guide on how to upload data to the Kognic Platform"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/key-concepts",children:"Key concepts"}),": Learn about the key concepts of the Kognic Platform"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const c={},s=i.createContext(c);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);