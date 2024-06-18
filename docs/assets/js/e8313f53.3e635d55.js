"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[9075],{2433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=t(4848),r=t(8453);t(1470),t(9365);const o={id:"ordering-annotation",title:"Ordering Annotation",pagination_next:"download-annotations/download-annotations"},i="Ordering Annotation",s={id:"upload-data/ordering-annotation",title:"Ordering Annotation",description:"As outlined on the previous page, annotation requires various configuration to have been completed in order for scenes to be turned into annotations.",source:"@site/docs/upload-data/ordering-annotation.mdx",sourceDirName:"upload-data",slug:"/upload-data/ordering-annotation",permalink:"/docs/upload-data/ordering-annotation",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/upload-data/ordering-annotation.mdx",tags:[],version:"current",frontMatter:{id:"ordering-annotation",title:"Ordering Annotation",pagination_next:"download-annotations/download-annotations"},sidebar:"docs",previous:{title:"Prerequisites for Annotation",permalink:"/docs/upload-data/prerequisites-for-annotation"},next:{title:"Download annotations",permalink:"/docs/download-annotations/"}},l={},u=[{value:"Inline with scene creation (new scenes)",id:"inline-with-scene-creation-new-scenes",level:2},{value:"Separate from scene creation (existing scenes)",id:"separate-from-scene-creation-existing-scenes",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"ordering-annotation",children:"Ordering Annotation"}),"\n",(0,a.jsx)(n.p,{children:"As outlined on the previous page, annotation requires various configuration to have been completed in order for scenes to be turned into annotations."}),"\n",(0,a.jsx)(n.p,{children:"Ordering annotation is very simple once you are familiar with the basics of creating a scene via the Kognic IO Client."}),"\n",(0,a.jsx)(n.h2,{id:"inline-with-scene-creation-new-scenes",children:"Inline with scene creation (new scenes)"}),"\n",(0,a.jsx)(n.p,{children:"When creating a scene, you can also specify the request to add it to, and an input will be created as soon as scene is ready."}),"\n",(0,a.jsx)(n.p,{children:"It is also possible to add the scene to another request later on, re-using it for annotation in multiple requests"}),"\n",(0,a.jsxs)(n.p,{children:["For complete information, refer to ",(0,a.jsx)(n.a,{href:"../kognic-io/working_with_scenes_and_inputs#creating-inputs-directly",children:"Working with Scenes & Inputs, Creating Inputs Directly"})]}),"\n",(0,a.jsx)(n.h2,{id:"separate-from-scene-creation-existing-scenes",children:"Separate from scene creation (existing scenes)"}),"\n",(0,a.jsx)(n.p,{children:"If a scene is created without specifying a request, it will be created but not sent for annotation.\nThe scene can then be sent for annotation by adding it to one or multiple requests at any point later on."}),"\n",(0,a.jsxs)(n.p,{children:["For complete information, refer to ",(0,a.jsx)(n.a,{href:"../kognic-io/working_with_scenes_and_inputs#creating-inputs-from-scene",children:"Working with Scenes & Inputs, Creating Inputs from Scene"})]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var a=t(8215);const r={tabItem:"tabItem_Ymn6"};var o=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>k});var a=t(6540),r=t(8215),o=t(3104),i=t(6347),s=t(205),l=t(7485),u=t(1682),c=t(9466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[u,d]=f({queryString:t,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=u??m;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function w(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=s[t].value;r!==a&&(u(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(w,{...n,...e}),(0,v.jsx)(x,{...n,...e})]})}function k(e){const n=(0,b.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(6540);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);