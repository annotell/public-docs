"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[1441],{3683:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(4848),a=t(8453);t(1470),t(9365);const r={id:"download-annotations",title:"Download annotations",pagination_prev:"upload-data/ordering-annotation",pagination_next:"key_concepts"},i="Download Annotations",s={id:"download-annotations/download-annotations",title:"Download annotations",description:"After annotations are ordered for a scene they will be produced, reviewed and quality-controlled within the Kognic Platform.",source:"@site/docs/download-annotations/download-annotations.mdx",sourceDirName:"download-annotations",slug:"/download-annotations/",permalink:"/docs/download-annotations/",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/download-annotations/download-annotations.mdx",tags:[],version:"current",frontMatter:{id:"download-annotations",title:"Download annotations",pagination_prev:"upload-data/ordering-annotation",pagination_next:"key_concepts"},sidebar:"docs",previous:{title:"Ordering Annotation",permalink:"/docs/upload-data/ordering-annotation"},next:{title:"Key Concepts",permalink:"/docs/key-concepts"}},l={},c=[];function u(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"download-annotations",children:"Download Annotations"}),"\n",(0,o.jsx)(n.p,{children:"After annotations are ordered for a scene they will be produced, reviewed and quality-controlled within the Kognic Platform."}),"\n",(0,o.jsxs)(n.p,{children:["Once the annotations are made delivery-ready and are exported, they can be downloaded in the ",(0,o.jsx)(n.a,{href:"../openlabel/openlabel-format",children:"OpenLABEL format"}),"."]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("h2",{style:{margin:"0px"},children:"Annotations for a Scene"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from kognic.io.client import KognicIOClient\n\nclient = KognicIOClient()\n\nfor annotation in client.annotation.get_annotations_for_scene(scene_uuid=scene_uuid):\n    openlabel_dict = annotation.content\n    # ...\n"})}),(0,o.jsxs)(n.p,{children:["This method returns all delivered annotations in the form of ",(0,o.jsx)(n.code,{children:"Annotation"})," objects, containing the OpenLABEL json, using a Scene UUID."]})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("h2",{style:{margin:"0px"},children:"Annotations for a Project or Batch"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from kognic.io.client import KognicIOClient\n\nclient = KognicIOClient()\n\n# Get generator with annotations\nannotations = client.annotation.get_project_annotations(project="project-identifier",\n                                                        batch="batch-identifier",\n                                                        annotation_type="annotation-type")\nfor annotation in annotations:\n    openlabel_dict = annotation.content\n    # ...\n'})}),(0,o.jsxs)(n.p,{children:["This example fetches annotations for an entire project or batch. This retrieves ",(0,o.jsx)(n.code,{children:"Annotation"})," objects for all delivered\nannotations for the given ",(0,o.jsx)(n.code,{children:"project"}),", ",(0,o.jsx)(n.code,{children:"batch"})," and ",(0,o.jsx)(n.code,{children:"annotation_type"}),"."]})]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var o=t(8215);const a={tabItem:"tabItem_Ymn6"};var r=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>j});var o=t(6540),a=t(8215),r=t(3104),i=t(6347),s=t(205),l=t(7485),c=t(1682),u=t(9466);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=p(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[c,d]=f({queryString:t,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,u.Dv)(t);return[a,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),g=(()=>{const e=c??m;return h({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function x(e){let{className:n,block:t,selectedValue:o,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==o&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,a.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(w,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var o=t(6540);const a={},r=o.createContext(a);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);