"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const r={title:"Calibrations Overview"},o=void 0,s={unversionedId:"kognic-io/calibrations/overview",id:"kognic-io/calibrations/overview",title:"Calibrations Overview",description:"Scenes including both a 2D and 3D representation such as lidarsandcameras deal with data in a number of different",source:"@site/docs/kognic-io/calibrations/overview.md",sourceDirName:"kognic-io/calibrations",slug:"/kognic-io/calibrations/overview",permalink:"/docs/kognic-io/calibrations/overview",draft:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/calibrations/overview.md",tags:[],version:"current",frontMatter:{title:"Calibrations Overview"},sidebar:"docs",previous:{title:"Working with Scenes & Inputs",permalink:"/docs/kognic-io/working_with_scenes_and_inputs"},next:{title:"Lidar Calibrations",permalink:"/docs/kognic-io/calibrations/lidars"}},c={},l=[{value:"Types of calibrations",id:"types-of-calibrations",level:2},{value:"Examples",id:"examples",level:2},{value:"Creating a calibration",id:"creating-a-calibration",level:3},{value:"Listing existing calibrations",id:"listing-existing-calibrations",level:3}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Scenes including both a 2D and 3D representation such as ",(0,i.kt)("inlineCode",{parentName:"p"},"lidars_and_cameras")," deal with data in a number of different\n",(0,i.kt)("a",{parentName:"p",href:"/docs/kognic-io/coordinate_systems"},"coordinate systems"),". These scenes require a calibration that relate the different sensors to\neach other in terms of location and orientation. The calibration should also contain the required information for\nprojecting 3D points into the image plane of the camera."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Calibration")," object consists of a set of key-value pairs where the key is the name of the sensor (i.e. sensor name)\nand the value is either a ",(0,i.kt)("inlineCode",{parentName:"p"},"LidarCalibration")," object or any of the different camera calibrations."),(0,i.kt)("admonition",{title:"reuse calibration",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Note that after a calibration has been created you can, and should, reuse the same calibration for multiple scenes if possible.")),(0,i.kt)("h2",{id:"types-of-calibrations"},"Types of calibrations"),(0,i.kt)("p",null,"All calibration types contain information about the position and orientation of the sensor in 3D. This is relative to\nthe reference coordinate system. More information about lidar calibrations can be found ",(0,i.kt)("a",{parentName:"p",href:"/docs/kognic-io/calibrations/lidars"},"here"),". For cameras, the calibration also contains information about mapping 3D points to the\nimage plane of the camera. We support different a few different types of ",(0,i.kt)("a",{parentName:"p",href:"/docs/kognic-io/calibrations/cameras-standard"},"standard camera calibrations"),", where you only\nhave to provide the intrinsic parameters of the camera. If your camera model is not supported, you can also provide\na ",(0,i.kt)("a",{parentName:"p",href:"/docs/kognic-io/calibrations/cameras-custom"},"custom camera calibration")," where you provide the implementation in the form of a WebAssembly module."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"creating-a-calibration"},"Creating a calibration"),(0,i.kt)("p",null,"The following example code shows how you can create a ",(0,i.kt)("em",{parentName:"p"},"unity")," (i.e. we assume that all sensors are placed at origin and have no rotation)\ncalibration for a LIDAR sensor and several camera sensors of different types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/calibration/calibration.py\n")),(0,i.kt)("h3",{id:"listing-existing-calibrations"},"Listing existing calibrations"),(0,i.kt)("p",null,"As a final step we can fetch the calibration via the external id. This can either be done via the client, or via the CLI\nkognicutil tool."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'client.calibration.get_calibration(external_id="Collection 2020-06-16")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ kognicutil calibration --external-id "Collection 2020-06-16"\n')))}d.isMDXComponent=!0}}]);