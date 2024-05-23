"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[9239],{9434:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>P,contentTitle:()=>I,default:()=>R,frontMatter:()=>w,metadata:()=>A,toc:()=>S});var a=i(4848),t=i(8453),o=i(1470),r=i(9365);function s(e){const n={code:"code",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from kognic.io.client import KognicIOClient\nfrom kognic.io.model.scene.cameras import Cameras, Frame\nfrom kognic.io.model.scene.resources import Image\n\n# 1. Build scene object\nscene = Cameras(\n    external_id="my-first-scene",\n    frame=Frame(images=[Image(filename="path/to/image.jpg")])\n)\n\n# 2. Upload scene\nclient = KognicIOClient()\nscene_uuid = client.cameras.create(scene).scene_uuid\nprint("Scene uploaded, got uuid:", scene_uuid)\n'})})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}function l(e){const n={code:"code",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from kognic.io.client import KognicIOClient\nfrom kognic.io.model.scene.cameras import Cameras, Frame\nfrom kognic.io.model.scene.resources import Image\n\n# 1. Build scene object\nscene = Cameras(\n    external_id="my-first-scene",\n    frame=Frame(\n        images=[\n          # Sensor names must be unique\n          Image(sensor_name = "CAM1", filename="path/to/image1.jpg"),\n          Image(sensor_name = "CAM2", filename="path/to/image2.jpg")\n        ],\n    )\n)\n\n# 2. Upload scene\nclient = KognicIOClient()\nscene_uuid = client.cameras.create(scene).scene_uuid\nprint("Scene uploaded, got uuid:", scene_uuid)\n'})})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}function u(e){const n={code:"code",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from kognic.io.client import KognicIOClient\nfrom kognic.io.model.scene.cameras_sequence import CamerasSequence, Frame\nfrom kognic.io.model.scene.resources import Image\n\n# 1. Build scene object\nscene = CamerasSequence(\n    external_id="my-first-scene",\n    frames=[\n        # Relative timestamps must be unique and strictly increasing\n        Frame(\n            relative_timestamp=0,\n            images=[Image(filename="path/to/image1.jpg")],\n        ),\n        Frame(\n            relative_timestamp=100,\n            images=[Image(filename="path/to/image2.jpg")],\n        ),\n        Frame(\n            relative_timestamp=200,\n            images=[Image(filename="path/to/image3.jpg")],\n        ),\n    ]\n)\n\n# 2. Upload scene\nclient = KognicIOClient()\nscene_uuid = client.cameras_sequence.create(scene).scene_uuid\nprint("Scene uploaded, got uuid:", scene_uuid) \n'})})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}function p(e){const n={code:"code",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from kognic.io.client import KognicIOClient\nfrom kognic.io.model.calibration import SensorCalibration, PinholeCalibration, LidarCalibration\nfrom kognic.io.model.scene.lidars_and_cameras import LidarsAndCameras, Frame\nfrom kognic.io.model.scene.resources import Image, PointCloud\n\nclient = KognicIOClient()\n\n# 1. Create calibration (see calibration section for more details)\nsensor_calibration = SensorCalibration(\n    external_id = my-first-calibration",\n    calibration = {\n        "CAM": PinholeCalibration(...),\n        "lidar": LidarCalibration(...)\n    }\n)\ncreated_calibration = client.calibration.create(sensor_calibration)\n\n# 2. Build scene object\nscene = LidarsAndCameras(\n    external_id=f"my-first-scene",\n    calibration_id = created_calibration.id,\n    frame=Frame(\n        images=[Image(sensor_name = "CAM", filename="path/to/image.jpg")],\n        point_clouds=[PointCloud(sensor_name = "lidar", filename="path/to/pointcloud.pcd")]\n    )\n)\n\n# 3. Upload scene\nscene_uuid = client.lidars_and_cameras.create(scene).scene_uuid\nprint("Scene uploaded, got uuid:", scene_uuid)\n'})})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}function f(e){const n={code:"code",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from kognic.io.client import KognicIOClient\nfrom kognic.io.model.calibration import SensorCalibration, PinholeCalibration, LidarCalibration\nfrom kognic.io.model.scene.lidars_and_cameras import LidarsAndCameras, Frame\nfrom kognic.io.model.scene.resources import Image, PointCloud\n\nclient = KognicIOClient()\n\n# 1. Create calibration (see calibration section for more details)\nsensor_calibration = SensorCalibration(\n    external_id = "my-first-calibration",\n    calibration = {\n        "CAM1": PinholeCalibration(...),\n        "CAM2": PinholeCalibration(...),\n        "lidar": LidarCalibration(...)\n    }\n)\ncreated_calibration = client.calibration.create(sensor_calibration)\n\n# 2. Build scene object\nscene = LidarsAndCameras(\n    external_id="my-first-scene",\n    calibration_id = created_calibration.id,\n    frame=Frame(\n        images=[\n          Image(sensor_name = "CAM1", filename="path/to/image1.jpg"),\n          Image(sensor_name = "CAM2", filename="path/to/image2.jpg"),\n        ],\n        point_clouds=[PointCloud(sensor_name = "lidar", filename="path/to/pointcloud.pcd")]\n    )\n)\n\n# 3. Upload scene\nclient = KognicIOClient()\nscene_uuid = client.lidars_and_cameras.create(scene).scene_uuid\nprint("Scene uploaded, got uuid:", scene_uuid)\n'})})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}function b(e){const n={code:"code",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from kognic.io.client import KognicIOClient\nfrom kognic.io.model.calibration import SensorCalibration, PinholeCalibration, LidarCalibration\nfrom kognic.io.model.scene.lidars_and_cameras_sequence import LidarsAndCamerasSequence, Frame\nfrom kognic.io.model.scene.resources import Image, PointCloud\n\nclient = KognicIOClient()\n\n# 1. Create calibration (see calibration section for more details)\ncalibration = { "CAM": PinholeCalibration(...), "lidar": LidarCalibration(...) }\nsensor_calibration = SensorCalibration(\n    external_id = "my-first-calibration",\n    calibration = {\n        "CAM": PinholeCalibration(...),\n        "lidar": LidarCalibration(...)\n    }\n)\ncreated_calibration = client.calibration.create(sensor_calibration)\n\n# 2. Build scene object\nscene = LidarsAndCamerasSequence(\n    external_id="my-first-scene",\n    calibration_id = created_calibration.id,\n    frames=[\n        # Relative timestamps must be unique and strictly increasing\n        Frame(\n            relative_timestamp=0,\n            images=[Image(sensor_name = "CAM", filename="path/to/image1.jpg")],\n            point_clouds=[PointCloud(sensor_name = "lidar", filename="path/to/pointcloud1.pcd")]\n        ),\n        Frame(\n            relative_timestamp=100,\n            images=[Image(sensor_name = "CAM", filename="path/to/image2.jpg")],\n            point_clouds=[PointCloud(sensor_name = "lidar", filename="path/to/pointcloud2.pcd")]\n        ),\n        Frame(\n            relative_timestamp=200,\n            images=[Image(sensor_name = "CAM", filename="path/to/image3.jpg")],\n            point_clouds=[PointCloud(sensor_name = "lidar", filename="path/to/pointcloud3.pcd")]\n        ),\n    ]\n)\n\n# 3. Upload scene\nscene_uuid = client.lidars_and_cameras_sequence.create(scene).scene_uuid\nprint("Scene uploaded, got uuid:", scene_uuid) \n'})})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}const j=[];function _(e){const n={code:"code",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'scene = client.scene.get_scenes_by_uuids([scene_uuid])[0]\nprint(f"Scene {scene.uuid} has status {scene.status}")\n'})})}function v(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(_,{...e})}):_(e)}const C=[];function y(e){const n={code:"code",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'scene = client.scene.get_scenes_by_uuids([scene_uuid])[0]\nprint(f"Url: {scene.view_link}")\n'})})}function k(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}const w={id:"upload-your-first-scene",title:"Upload your first scene",slug:"/upload-your-first-scene"},I="Upload your first scene",A={id:"upload-your-first-scene",title:"Upload your first scene",description:"When uploading raw data to the Kognic Platform, you need to do so in the form of a scene.",source:"@site/docs/upload-your-first-scene.mdx",sourceDirName:".",slug:"/upload-your-first-scene",permalink:"/docs/upload-your-first-scene",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/upload-your-first-scene.mdx",tags:[],version:"current",frontMatter:{id:"upload-your-first-scene",title:"Upload your first scene",slug:"/upload-your-first-scene"},sidebar:"docs",previous:{title:"Quickstart",permalink:"/docs/"},next:{title:"Kognic APIs",permalink:"/docs/kognic-apis"}},P={},S=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Uploading a 2D scene",id:"uploading-a-2d-scene",level:2},...j,...C,{value:"Uploading a 2D/3D scene",id:"uploading-a-2d3d-scene",level:2},...j,...C,{value:"Next steps",id:"next-steps",level:2}];function q(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"upload-your-first-scene",children:"Upload your first scene"}),"\n",(0,a.jsxs)(n.p,{children:["When uploading raw data to the Kognic Platform, you need to do so in the form of a ",(0,a.jsx)(n.strong,{children:"scene"}),".\nA scene is a collection of data from different sources, such as images, point clouds, and other sensor data.\nThis guide will walk you through the process of uploading your first scene, either in 2D or 3D."]}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.p,{children:["You have successfully followed the ",(0,a.jsx)(n.a,{href:"./quickstart",children:"Quickstart"})," guide and have the ",(0,a.jsx)(n.code,{children:"kognic-io"})," client installed."]}),"\n",(0,a.jsx)(n.h2,{id:"uploading-a-2d-scene",children:"Uploading a 2D scene"}),"\n",(0,a.jsxs)(n.p,{children:["To upload a 2D scene, you need to have the raw images available on your local machine (or create a ",(0,a.jsx)(n.a,{href:"https://developers.kognic.com/docs/kognic-io/overview#data-from-callback",children:"callback"})," for remote data).\nIt is a two-step process:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Build the scene object in Python"}),"\n",(0,a.jsx)(n.li,{children:"Upload the scene object to the Kognic Platform"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Below follows examples for a few different cases."}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(r.A,{value:"one-image",label:"One Image",default:!0,children:(0,a.jsx)(c,{})}),(0,a.jsx)(r.A,{value:"multiple-images",label:"Multiple Images",default:!0,children:(0,a.jsx)(d,{})}),(0,a.jsx)(r.A,{value:"sequence",label:"Sequence",children:(0,a.jsx)(m,{})})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"scene_uuid"})," returned in the response can be used to reference the scene in future API calls. For example, to check the status of the scene:"]}),"\n",(0,a.jsx)(v,{}),"\n",(0,a.jsx)(n.p,{children:"This is often useful when uploading large scenes that take some time to process. If the scene is ready, you can view it in the Kognic Platform by following the link retrieved from the API:"}),"\n",(0,a.jsx)(k,{}),"\n","\n",(0,a.jsx)(n.h2,{id:"uploading-a-2d3d-scene",children:"Uploading a 2D/3D scene"}),"\n",(0,a.jsxs)(n.p,{children:["To upload a 2D/3D scene, you need to have the raw images and point clouds available on your local machine (or create a ",(0,a.jsx)(n.a,{href:"https://developers.kognic.com/docs/kognic-io/overview#data-from-callback",children:"callback"})," for remote data).\nIn addition you need to have calibration data available.\nIt is a three-step process:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Create a ",(0,a.jsx)(n.a,{href:"./kognic-io/calibrations/overview",children:"calibration"})]}),"\n",(0,a.jsx)(n.li,{children:"Build the scene object in Python, referencing the calibration from the previous step"}),"\n",(0,a.jsx)(n.li,{children:"Upload the scene object to the Kognic Platform"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Below follows examples for a few different cases."}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(r.A,{value:"one-image-one-lidar",label:"One Image",default:!0,children:(0,a.jsx)(h,{})}),(0,a.jsx)(r.A,{value:"multiple-images",label:"Multiple Images",default:!0,children:(0,a.jsx)(g,{})}),(0,a.jsx)(r.A,{value:"2d/3d-sequence",label:"Sequence",default:!0,children:(0,a.jsx)(x,{})})]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Multiple point clouds is also supported, but not shown in the examples above since that requires a bit more data.\nSee the ",(0,a.jsx)(n.a,{href:"./kognic-io/scenes/motion-compensation",children:"Motion Compensation"})," section for more details."]})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"scene_uuid"})," returned in the response can be used to reference the scene in future API calls. For example, to check the status of the scene:"]}),"\n",(0,a.jsx)(v,{}),"\n",(0,a.jsx)(n.p,{children:"This is often useful when uploading large scenes that take some time to process. If the scene is ready, you can view it in the Kognic Platform by following the link retrieved from the API:"}),"\n",(0,a.jsx)(k,{}),"\n","\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/key-concepts",children:"Key concepts"}),": Learn about the key concepts of the Kognic Platform"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"./kognic-io/overview",children:"Scenes"}),": Dive deeper into scenes and how to work with them"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"./kognic-io/calibrations/overview",children:"Calibrations"}),": Learn how to create and manage calibrations"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"./kognic-io/working_with_scenes_and_inputs#creating-inputs-from-scene",children:"Sending scene for annotation"}),": Learn how to send a scene for annotation"]}),"\n"]})]})}function R(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(q,{...e})}):q(e)}},9365:(e,n,i)=>{i.d(n,{A:()=>r});i(6540);var a=i(8215);const t={tabItem:"tabItem_Ymn6"};var o=i(4848);function r(e){let{children:n,hidden:i,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,r),hidden:i,children:n})}},1470:(e,n,i)=>{i.d(n,{A:()=>C});var a=i(6540),t=i(8215),o=i(3104),r=i(6347),s=i(205),c=i(7485),l=i(1682),d=i(9466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:i}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:i,attributes:a,default:t}}=e;return{value:n,label:i,attributes:a,default:t}}))}(i);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:i}=e;const t=(0,r.W6)(),o=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,c.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function f(e){const{defaultValue:n,queryString:i=!1,groupId:t}=e,o=m(e),[r,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=i.find((e=>e.default))??i[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[l,u]=h({queryString:i,groupId:t}),[f,g]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,d.Dv)(i);return[t,(0,a.useCallback)((e=>{i&&o.set(e)}),[i,o])]}({groupId:t}),b=(()=>{const e=l??f;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{b&&c(b)}),[b]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=i(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=i(4848);function j(e){let{className:n,block:i,selectedValue:a,selectValue:r,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),d=e=>{const n=e.currentTarget,i=c.indexOf(n),t=s[i].value;t!==a&&(l(n),r(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=c.indexOf(e.currentTarget)+1;n=c[i]??c[0];break}case"ArrowLeft":{const i=c.indexOf(e.currentTarget)-1;n=c[i]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":i},n),children:s.map((e=>{let{value:n,label:i,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...o,className:(0,t.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===n}),children:i??n},n)}))})}function _(e){let{lazy:n,children:i,selectedValue:t}=e;const o=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(_,{...n,...e})]})}function C(e){const n=(0,g.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var a=i(6540);const t={},o=a.createContext(t);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);