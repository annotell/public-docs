"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const o={title:"Lidars and Cameras Sequence"},r=void 0,s={unversionedId:"kognic-io/inputs/lidars_and_cameras_seq",id:"kognic-io/inputs/lidars_and_cameras_seq",title:"Lidars and Cameras Sequence",description:"A LidarsAndCamerasSeq input consists of a sequence of camera images and lidar point clouds, where each frame consists on 1-9 camera images as well as 1-20 point clouds. For more documentation on what each field corresponds to in the LidarsAndCamerasSeq object please check the section related to Input Overview.",source:"@site/docs/kognic-io/inputs/lidars_and_cameras_seq.md",sourceDirName:"kognic-io/inputs",slug:"/kognic-io/inputs/lidars_and_cameras_seq",permalink:"/docs/kognic-io/inputs/lidars_and_cameras_seq",draft:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/inputs/lidars_and_cameras_seq.md",tags:[],version:"current",frontMatter:{title:"Lidars and Cameras Sequence"},sidebar:"docs",previous:{title:"Cameras Sequence",permalink:"/docs/kognic-io/inputs/cameras_seq"},next:{title:"Working with Inputs",permalink:"/docs/kognic-io/working_with_inputs"}},c={},l=[{value:"Providing Ego Vehicle Motion Information",id:"providing-ego-vehicle-motion-information",level:2},{value:"Shutter timings",id:"shutter-timings",level:2}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"LidarsAndCamerasSeq")," input consists of a sequence of camera images and lidar point clouds, where each frame consists on 1-9 camera images as well as 1-20 point clouds. For more documentation on what each field corresponds to in the ",(0,i.kt)("inlineCode",{parentName:"p"},"LidarsAndCamerasSeq")," object please check the section related to ",(0,i.kt)("a",{parentName:"p",href:"/docs/kognic-io/overview"},"Input Overview"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/lidars_and_cameras_seq.py\n")),(0,i.kt)("admonition",{title:"Use dryrun to validate input",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"dryrun")," parameter to true in the method call, will validate the input using the API but not create any inputs.")),(0,i.kt)("admonition",{title:"reuse calibration",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Note that you can, and should, reuse the same calibration for multiple inputs if possible.")),(0,i.kt)("h2",{id:"providing-ego-vehicle-motion-information"},"Providing Ego Vehicle Motion Information"),(0,i.kt)("p",null,"Ego vehicle motion (i.e. the position and rotation of the ego vehicle) is optional information that can be provided when creating ",(0,i.kt)("inlineCode",{parentName:"p"},"LidarsAndCamerasSeq")," inputs. This information can enable a massive reduction in the time it takes to annotate static objects. Ego vehicle motion information is provided by passing a ",(0,i.kt)("inlineCode",{parentName:"p"},"EgoVehicleMotion")," object to ",(0,i.kt)("strong",{parentName:"p"},"each")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Frame")," in the input."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/lidars_and_cameras_seq_full.py\n")),(0,i.kt)("admonition",{title:"Coordinate Systems",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Note that both ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rotation")," for ego vehicle pose are with respect to the ",(0,i.kt)("em",{parentName:"p"},"local")," coordinate system.")),(0,i.kt)("h2",{id:"shutter-timings"},"Shutter timings"),(0,i.kt)("p",null,"Shutter timings are optional metadata that may be provided when creating an ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," within a ",(0,i.kt)("inlineCode",{parentName:"p"},"Frame"),". Timings are two values: shutter start and end timestamp in nanoseconds since unix epoch and are specified for each image in each frame."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/lidars_and_cameras_seq_with_imu_and_shutter_times.py\n")))}m.isMDXComponent=!0}}]);