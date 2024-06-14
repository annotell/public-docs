"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[6505],{8007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(4848),a=n(8453),s=n(1470),i=n(9365);const l={id:"quickstart",title:"Quickstart",slug:"/"},o="Quickstart",c={id:"quickstart",title:"Quickstart",description:"Kognic provides a client called kognic-io to simplify calling our APIs using Python.",source:"@site/docs/quickstart.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/quickstart.mdx",tags:[],version:"current",frontMatter:{id:"quickstart",title:"Quickstart",slug:"/"},sidebar:"docs",next:{title:"Upload your first scene",permalink:"/docs/upload-your-first-scene"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"Generating credentials",id:"generating-credentials",level:2},{value:"Setting credentials",id:"setting-credentials",level:2},{value:"Verify credentials",id:"verify-credentials",level:2},{value:"Next steps",id:"next-steps",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,r.jsxs)(t.p,{children:["Kognic provides a client called ",(0,r.jsx)(t.a,{href:"https://pypi.org/project/kognic-io/",children:"kognic-io"})," to simplify calling our APIs using Python."]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"Install via pip:"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(i.A,{value:"kognic-io-installation",label:"kognic-io",default:!0,children:[(0,r.jsxs)(t.p,{children:["Install ",(0,r.jsx)(t.code,{children:"kognic-io"})," for the most common use cases like file uploads and project management."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pip install --upgrade kognic-io\n"})})]}),(0,r.jsxs)(i.A,{value:"kognic-auth-installation",label:"kognic-auth",default:!0,children:[(0,r.jsxs)(t.p,{children:["Not needed for file uploads. Install ",(0,r.jsx)(t.code,{children:"kognic-auth"})," if you intend to use ",(0,r.jsx)(t.a,{href:"/docs/dataset-exploration/introduction",children:"Dataset exploration"})," or ",(0,r.jsx)(t.a,{href:"/docs/annotation-integration/introduction",children:"Annotation integration"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pip install --upgrade kognic-auth\n"})})]})]}),"\n",(0,r.jsx)(t.h2,{id:"generating-credentials",children:"Generating credentials"}),"\n",(0,r.jsx)(t.p,{children:"In the main platform, credentials can be generated by clicking here in the user menu."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Generate API credentials app screenshot",src:n(1263).A+"",width:"335",height:"499"})}),"\n",(0,r.jsx)(t.h2,{id:"setting-credentials",children:"Setting credentials"}),"\n",(0,r.jsxs)(t.p,{children:["Set the environment variable ",(0,r.jsx)(t.code,{children:"KOGNIC_CREDENTIALS"})," to point to it."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"export KOGNIC_CREDENTIALS=~/path/to/credentials.json\n"})}),"\n",(0,r.jsx)(t.h2,{id:"verify-credentials",children:"Verify credentials"}),"\n",(0,r.jsx)(t.p,{children:"To verify that they are correct you can simply list projects in Python:"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"kognic-io-verify",label:"kognic-io",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from kognic.io.client import KognicIOClient\n\nclient = KognicIOClient()\nclient.project.get_projects()\nprint("success")\n'})})}),(0,r.jsx)(i.A,{value:"kognic-auth-verify",label:"kognic-auth",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from kognic.auth.requests.auth_session import RequestsAuthSession\n\nclient = RequestsAuthSession()\nclient.session.get("https://input.app.kognic.com/v1/projects").raise_for_status()\nprint("success")\n'})})})]}),"\n",(0,r.jsx)(t.p,{children:"You should now be set up to interact with the Kognic Platform."}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/upload-your-first-scene",children:"Upload your first scene"}),": Quick guide on how to upload data to the Kognic Platform"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/key-concepts",children:"Key concepts"}),": Learn about the key concepts of the Kognic Platform"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(8215);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(6540),a=n(8215),s=n(3104),i=n(6347),l=n(205),o=n(7485),c=n(1682),u=n(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=f({queryString:n,groupId:a}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),b=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(c(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function k(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function y(e){const t=(0,m.A)();return(0,x.jsx)(k,{...e,children:d(e.children)},String(t))}},1263:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/generate-api-credentials-b4d947932cf0edf423172c0326d63b86.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(6540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);