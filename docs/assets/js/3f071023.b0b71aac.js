"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Cameras"},c=void 0,i={unversionedId:"kognic-io/scenes/cameras",id:"kognic-io/scenes/cameras",title:"Cameras",description:"A Cameras  consists of a single frame of camera images, where the frame can contain between 1-9 images from different sensors. For more documentation on what each field corresponds to in the Cameras object please check the section related to Scene Overview.",source:"@site/docs/kognic-io/scenes/cameras.md",sourceDirName:"kognic-io/scenes",slug:"/kognic-io/scenes/cameras",permalink:"/docs/kognic-io/scenes/cameras",draft:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/scenes/cameras.md",tags:[],version:"current",frontMatter:{title:"Cameras"},sidebar:"docs",previous:{title:"Annotation Types",permalink:"/docs/kognic-io/annotation_types"},next:{title:"Lidars and Cameras",permalink:"/docs/kognic-io/scenes/lidars_and_cameras"}},s={},l=[],p={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Cameras"),"  consists of a single frame of camera images, where the frame can contain between 1-9 images from different sensors. For more documentation on what each field corresponds to in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cameras")," object please check the section related to ",(0,o.kt)("a",{parentName:"p",href:"/docs/kognic-io/overview"},"Scene Overview"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/cameras.py\n")),(0,o.kt)("admonition",{title:"Use dryrun to validate scene",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Setting ",(0,o.kt)("inlineCode",{parentName:"p"},"dryrun")," parameter to true in the method call, will validate the scene using the API but not create it.")))}m.isMDXComponent=!0}}]);