"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[1029],{5310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var r=n(4848),a=n(8453),s=n(1470),i=n(9365);const c={title:"Projects"},o=void 0,l={id:"kognic-io/project",title:"Projects",description:"Project",source:"@site/docs/kognic-io/project.mdx",sourceDirName:"kognic-io",slug:"/kognic-io/project",permalink:"/docs/kognic-io/project",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/kognic-io/project.mdx",tags:[],version:"current",frontMatter:{title:"Projects"},sidebar:"docs",previous:{title:"Key Concepts",permalink:"/docs/key-concepts"},next:{title:"Overview",permalink:"/docs/kognic-io/overview"}},u={},h=[{value:"Project",id:"project",level:2},{value:"List Projects",id:"list-projects",level:3},{value:"Batch",id:"batch",level:2},{value:"Batch Status",id:"batch-status",level:3},{value:"Listing Batches",id:"listing-batches",level:3},{value:"Creating Batches",id:"creating-batches",level:3},{value:"Publish Batch",id:"publish-batch",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"project",children:"Project"}),"\n",(0,r.jsxs)(t.p,{children:["A Kognic ",(0,r.jsx)(t.a,{href:"../key-concepts",children:"project"})," must first be set in order to create inputs.\nProjects are usually configured by the Kognic Professional Services team, during the Guideline Agreement Process (GAP) of a new client engagement."]}),"\n",(0,r.jsx)(t.h3,{id:"list-projects",children:"List Projects"}),"\n",(0,r.jsxs)(t.p,{children:["Projects can be listed either via the client in Python or via the ",(0,r.jsx)(t.code,{children:"kognicutil"})," CLI."]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"python",label:"Python",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"projects = client.project.get_projects()\n"})})}),(0,r.jsx)(i.A,{value:"kognicutil",label:"kognicutil",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"kognicutil projects\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"batch",children:"Batch"}),"\n",(0,r.jsxs)(t.p,{children:["Input ",(0,r.jsx)(t.a,{href:"../key-concepts",children:"batches"})," allow further grouping of inputs into smaller batches within a project. Specifying batch during the input creation is optional, and will otherwise be the latest open batch by default."]}),"\n",(0,r.jsx)(t.h3,{id:"batch-status",children:"Batch Status"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Status"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pending"}),(0,r.jsx)(t.td,{children:"Batch has been created but is still not fully configured by Kognic. Either during project setup or requested changes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"open"}),(0,r.jsx)(t.td,{children:"Batch is open for new inputs"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ready"}),(0,r.jsx)(t.td,{children:"Batch has been published and no longer open for new inputs."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"in-progress"}),(0,r.jsx)(t.td,{children:"Kognic has started annotation of inputs within the batch."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"completed"}),(0,r.jsx)(t.td,{children:"Annotations has been completed."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"listing-batches",children:"Listing Batches"}),"\n",(0,r.jsxs)(t.p,{children:["Batches within a project can be listed either via the client in Python or via the ",(0,r.jsx)(t.code,{children:"kognicutil"})," CLI."]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"python",label:"Python",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'batches = client.project.get_project_batches(project="<project-external-id>")\n'})})}),(0,r.jsx)(i.A,{value:"kognicutil",label:"kognicutil",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"kognicutil projects <project-external-id> --get-batches\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"creating-batches",children:"Creating Batches"}),"\n",(0,r.jsxs)(t.p,{children:["To create a new batch in the ",(0,r.jsx)(t.code,{children:"open"})," state within a project"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'project_batch = client.project.create_batch(\n  project="<project_external_id>",\n  batch="<batch_external_id>",\n)\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The newly created batch will contain the same ",(0,r.jsx)(t.a,{href:"annotation_types",children:"Annotation Types"})," as\nthe latest batch by default."]}),"\n",(0,r.jsxs)(t.p,{children:["This method has an optional flag ",(0,r.jsx)(t.code,{children:"publish_previous_batches"})," which defaults to ",(0,r.jsx)(t.code,{children:"False"}),". By setting this flag to\n",(0,r.jsx)(t.code,{children:"True"}),', as shown in the example below, all previous batches in the "open" state would be published and you\nwould no longer be able to upload new inputs to those batches.\nYou should therefore be certain that you no longer need to upload more inputs to the\nprevious batches if you use this flag.']}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'project_batch = client.project.create_batch(\n  project="<project_external_id>",\n  batch="<batch_external_id>",\n  publish_previous_batches=True,\n)\n'})}),"\n",(0,r.jsx)(t.admonition,{title:"Contact Kognic before use",type:"caution",children:(0,r.jsx)(t.p,{children:"Kognic usually helps with creating batches before a client becomes autonomous,\nin order to avoid any confusion please contact Kognic before you start using this feature."})}),"\n",(0,r.jsx)(t.h3,{id:"publish-batch",children:"Publish Batch"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from kognic.io.client import KognicIOClient\nclient = KognicIOClient()\nproject_batch = client.project.publish_batch(\n  project="<project_external_id>",\n  batch="<batch_external_id>",\n)\n'})}),"\n",(0,r.jsxs)(t.p,{children:['When the input batch is published, the status of the batch will be set to "ready". Published batches are not open for new inputs any longer.\nA project with ',(0,r.jsx)(t.em,{children:"multiple"})," open batches will require you to specify which open batch to target\nwhen creating new inputs, whereas a project with a single open batch will allow you omit the ",(0,r.jsx)(t.code,{children:"batch"})," parameter when\ncreating inputs."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(8215);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),a=n(8215),s=n(3104),i=n(6347),c=n(205),o=n(7485),l=n(1682),u=n(9466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[l,h]=b({queryString:n,groupId:a}),[j,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=l??j;return p({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),g(e)}),[h,g,s]),tabValues:s}}var g=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function m(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=c[n].value;a!==r&&(l(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:h,onClick:u,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=j(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,x.jsx)(m,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,x.jsx)(y,{...e,children:h(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);