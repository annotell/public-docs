"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Cameras"},i=void 0,c={unversionedId:"kognic-io/inputs/cameras",id:"kognic-io/inputs/cameras",title:"Cameras",description:"A Cameras input consists of a single frame of camera images, where the frame can contain between 1-9 images from different sensors. For more documentation on what each field corresponds to in the Cameras object please check the section related to Input Overview.",source:"@site/docs/kognic-io/inputs/cameras.md",sourceDirName:"kognic-io/inputs",slug:"/kognic-io/inputs/cameras",permalink:"/docs/kognic-io/inputs/cameras",draft:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/inputs/cameras.md",tags:[],version:"current",frontMatter:{title:"Cameras"},sidebar:"docs",previous:{title:"Annotation Types",permalink:"/docs/kognic-io/annotation_types"},next:{title:"Lidars and Cameras",permalink:"/docs/kognic-io/inputs/lidars_and_cameras"}},s={},p=[],l={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Cameras")," input consists of a single frame of camera images, where the frame can contain between 1-9 images from different sensors. For more documentation on what each field corresponds to in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cameras")," object please check the section related to ",(0,o.kt)("a",{parentName:"p",href:"/docs/kognic-io/overview"},"Input Overview"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/cameras.py\n")),(0,o.kt)("admonition",{title:"Use dryrun to validate input",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Setting ",(0,o.kt)("inlineCode",{parentName:"p"},"dryrun")," parameter to true in the method call, will validate the input using the API but not create any inputs.")))}m.isMDXComponent=!0}}]);