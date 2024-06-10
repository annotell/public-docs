"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[7767],{678:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=a(4848),i=a(8453),r=a(1470),o=a(9365);const s={title:"Calibrations Overview"},l=void 0,c={id:"kognic-io/calibrations/overview",title:"Calibrations Overview",description:"Scenes including both a 2D and 3D representation such as lidarsandcameras deal with data in a number of different",source:"@site/docs/kognic-io/calibrations/overview.mdx",sourceDirName:"kognic-io/calibrations",slug:"/kognic-io/calibrations/overview",permalink:"/docs/kognic-io/calibrations/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/kognic-io/calibrations/overview.mdx",tags:[],version:"current",frontMatter:{title:"Calibrations Overview"},sidebar:"docs",previous:{title:"Working with Scenes & Inputs",permalink:"/docs/kognic-io/working_with_scenes_and_inputs"},next:{title:"Lidar Calibrations",permalink:"/docs/kognic-io/calibrations/lidars"}},u={},d=[{value:"Types of calibrations",id:"types-of-calibrations",level:2},{value:"Creating calibrations",id:"creating-calibrations",level:2},{value:"Listing calibrations",id:"listing-calibrations",level:2},{value:"Next steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Scenes including both a 2D and 3D representation such as ",(0,t.jsx)(n.code,{children:"lidars_and_cameras"})," deal with data in a number of different\n",(0,t.jsx)(n.a,{href:"/docs/kognic-io/coordinate_systems",children:"coordinate systems"}),". These scenes require a calibration that relate the different sensors to\neach other in terms of location and orientation. The calibration should also contain the required information for\nprojecting 3D points into the image plane of the camera."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"Calibration"})," object consists of a set of key-value pairs where the key is the name of the sensor (i.e. sensor name)\nand the value is either a ",(0,t.jsx)(n.code,{children:"LidarCalibration"})," object or any of the different camera calibrations."]}),"\n",(0,t.jsx)(n.admonition,{title:"reuse calibration",type:"tip",children:(0,t.jsx)(n.p,{children:"Note that after a calibration has been created you can, and should, reuse the same calibration for multiple scenes if possible."})}),"\n",(0,t.jsx)(n.h2,{id:"types-of-calibrations",children:"Types of calibrations"}),"\n",(0,t.jsxs)(n.p,{children:["All calibration types contain information about the position and orientation of the sensor in 3D. This is relative to\nthe reference coordinate system. More information about lidar calibrations can be found ",(0,t.jsx)(n.a,{href:"/docs/kognic-io/calibrations/lidars",children:"here"}),". The calibration also contains information about mapping 3D points to the\nimage plane of the camera. For cameras, we support different types of ",(0,t.jsx)(n.a,{href:"/docs/kognic-io/calibrations/cameras-standard",children:"standard camera calibrations"}),", where you only\nhave to provide the intrinsic parameters of the camera. If your camera model is not supported, you can also provide\na ",(0,t.jsx)(n.a,{href:"/docs/kognic-io/calibrations/cameras-custom",children:"custom camera calibration"})," where you provide the implementation in the form of a WebAssembly module."]}),"\n",(0,t.jsx)(n.h2,{id:"creating-calibrations",children:"Creating calibrations"}),"\n",(0,t.jsxs)(n.p,{children:["Calibrations are created by providing a dictionary where the keys are the sensor names and the values are the calibration objects.\nAn example of how to create a calibration for a LIDAR sensor and two camera sensors is shown below.\nNote that the contruction of the calibration objects is not shown here, but can be found in ",(0,t.jsx)(n.a,{href:"https://github.com/annotell/kognic-io-examples-python/tree/master/examples/calibration",children:"kognic-io-examples"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from kognic.io.client import KognicIOClient\nfrom kognic.io.model import SensorCalibration\n\nfrom examples.calibration.create_kannala_calibration import unity_kannala_calibration\nfrom examples.calibration.create_lidar_calibration import unity_lidar_calibration\nfrom examples.calibration.create_pinhole_calibration import unity_pinhole_calibration\n\nclient = KognicIOClient()\n\ncalibrations = {\n  # Note that the sensor names must match the names of the sensors in the scenes that use this calibration\n  "lidar": unity_lidar_calibration(),\n  "CAM1": unity_pinhole_calibration(),\n  "CAM2": unity_kannala_calibration()\n}\n\nsensor_calibration = SensorCalibration(external_id="Collection 2020-06-16", calibration=calibrations)\ncreated_calibration = client.calibration.create_calibration(sensor_calibration)\nprint(f"Created calibration with id {created_calibration.id}")\n'})}),"\n",(0,t.jsx)(n.p,{children:"The retrieved calibration id is unique and should be referred to when creating scenes that use this calibration."}),"\n",(0,t.jsx)(n.h2,{id:"listing-calibrations",children:"Listing calibrations"}),"\n",(0,t.jsxs)(n.p,{children:["Existing calibrations can be fetched with the retrieved id or with the provided external id.\nThis can either be done via the client in Python or via ",(0,t.jsx)(n.code,{children:"kognicutil"}),"."]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{value:"python",label:"Python",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Fetch calibration by id\nclient.calibration.get_calibration("e95980c4-fee2-4b91-9316-1bffbcb5a896")\n\n# Fetch calibration by external id\nclient.calibration.get_calibrations(external_id="Collection 2020-06-16")\n'})})}),(0,t.jsx)(o.A,{value:"kognicutil",label:"kognicutil",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Fetch calibration by id\nkognicutil calibration --id "e95980c4-fee2-4b91-9316-1bffbcb5a896"\n\n# Fetch calibration by external id\nkognicutil calibration --external-id "Collection 2020-06-16"\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/kognic-io/calibrations/lidars",children:"Lidar calibrations"}),": Learn about lidar calibrations"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/kognic-io/calibrations/cameras-standard",children:"Standard camera calibrations"}),": Learn about the different types standard camera calibrations that are supported"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/kognic-io/calibrations/cameras-custom",children:"Custom camera calibrations"}),": Learn how to create a custom camera calibration"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/upload-your-first-scene",children:"Upload your first scene"}),": Quick guide on how to upload scenes to the Kognic Platform"]}),"\n"]})]})}function b(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,a)=>{a.d(n,{A:()=>o});a(6540);var t=a(8215);const i={tabItem:"tabItem_Ymn6"};var r=a(4848);function o(e){let{children:n,hidden:a,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,o),hidden:a,children:n})}},1470:(e,n,a)=>{a.d(n,{A:()=>k});var t=a(6540),i=a(8215),r=a(3104),o=a(6347),s=a(205),l=a(7485),c=a(1682),u=a(9466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:i}}=e;return{value:n,label:a,attributes:t,default:i}}))}(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function b(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const i=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:i}=e,r=h(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,d]=p({queryString:a,groupId:i}),[f,m]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,u.Dv)(a);return[i,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:i}),g=(()=>{const e=c??f;return b({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=a(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(4848);function x(e){let{className:n,block:a,selectedValue:t,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,a=l.indexOf(n),i=s[a].value;i!==t&&(c(n),o(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,i.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function y(e){let{lazy:n,children:a,selectedValue:i}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function j(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(y,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>s});var t=a(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);