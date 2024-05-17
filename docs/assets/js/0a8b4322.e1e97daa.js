"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[4595],{6746:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var a=n(4848),o=n(8453);const t={title:"Calibrations Overview"},r=void 0,s={id:"kognic-io/calibrations/overview",title:"Calibrations Overview",description:"Scenes including both a 2D and 3D representation such as lidarsandcameras deal with data in a number of different",source:"@site/docs/kognic-io/calibrations/overview.md",sourceDirName:"kognic-io/calibrations",slug:"/kognic-io/calibrations/overview",permalink:"/docs/kognic-io/calibrations/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/kognic-io/calibrations/overview.md",tags:[],version:"current",frontMatter:{title:"Calibrations Overview"},sidebar:"docs",previous:{title:"Working with Scenes & Inputs",permalink:"/docs/kognic-io/working_with_scenes_and_inputs"},next:{title:"Lidar Calibrations",permalink:"/docs/kognic-io/calibrations/lidars"}},c={},l=[{value:"Types of calibrations",id:"types-of-calibrations",level:2},{value:"Examples",id:"examples",level:2},{value:"Creating a calibration",id:"creating-a-calibration",level:3},{value:"Listing existing calibrations",id:"listing-existing-calibrations",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.p,{children:["Scenes including both a 2D and 3D representation such as ",(0,a.jsx)(i.code,{children:"lidars_and_cameras"})," deal with data in a number of different\n",(0,a.jsx)(i.a,{href:"/docs/kognic-io/coordinate_systems",children:"coordinate systems"}),". These scenes require a calibration that relate the different sensors to\neach other in terms of location and orientation. The calibration should also contain the required information for\nprojecting 3D points into the image plane of the camera."]}),"\n",(0,a.jsxs)(i.p,{children:["A ",(0,a.jsx)(i.code,{children:"Calibration"})," object consists of a set of key-value pairs where the key is the name of the sensor (i.e. sensor name)\nand the value is either a ",(0,a.jsx)(i.code,{children:"LidarCalibration"})," object or any of the different camera calibrations."]}),"\n",(0,a.jsx)(i.admonition,{title:"reuse calibration",type:"tip",children:(0,a.jsx)(i.p,{children:"Note that after a calibration has been created you can, and should, reuse the same calibration for multiple scenes if possible."})}),"\n",(0,a.jsx)(i.h2,{id:"types-of-calibrations",children:"Types of calibrations"}),"\n",(0,a.jsxs)(i.p,{children:["All calibration types contain information about the position and orientation of the sensor in 3D. This is relative to\nthe reference coordinate system. More information about lidar calibrations can be found ",(0,a.jsx)(i.a,{href:"/docs/kognic-io/calibrations/lidars",children:"here"}),". The calibration also contains information about mapping 3D points to the\nimage plane of the camera. For cameras, we support different types of ",(0,a.jsx)(i.a,{href:"/docs/kognic-io/calibrations/cameras-standard",children:"standard camera calibrations"}),", where you only\nhave to provide the intrinsic parameters of the camera. If your camera model is not supported, you can also provide\na ",(0,a.jsx)(i.a,{href:"/docs/kognic-io/calibrations/cameras-custom",children:"custom camera calibration"})," where you provide the implementation in the form of a WebAssembly module."]}),"\n",(0,a.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(i.h3,{id:"creating-a-calibration",children:"Creating a calibration"}),"\n",(0,a.jsxs)(i.p,{children:["The following example code shows how you can create a ",(0,a.jsx)(i.em,{children:"unity"})," (i.e. we assume that all sensors are placed at origin and have no rotation)\ncalibration for a LIDAR sensor and several camera sensors of different types."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-python",metastring:"reference",children:"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/calibration/calibration.py\n"})}),"\n",(0,a.jsx)(i.h3,{id:"listing-existing-calibrations",children:"Listing existing calibrations"}),"\n",(0,a.jsx)(i.p,{children:"As a final step we can fetch the calibration via the external id. This can either be done via the client, or via the CLI\nkognicutil tool."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-python",children:'client.calibration.get_calibration(external_id="Collection 2020-06-16")\n'})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:'$ kognicutil calibration --external-id "Collection 2020-06-16"\n'})})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>s});var a=n(6540);const o={},t=a.createContext(o);function r(e){const i=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(t.Provider,{value:i},e.children)}}}]);