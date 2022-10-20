(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{115:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return m})),t.d(n,"MDXProvider",(function(){return l})),t.d(n,"mdx",(function(){return g})),t.d(n,"useMDXComponents",(function(){return d})),t.d(n,"withMDXComponents",(function(){return u}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=a.a.createContext({}),u=function(e){return function(n){var t=d(n.components);return a.a.createElement(e,i({},n,{components:t}))}},d=function(e){var n=a.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=d(e.components);return a.a.createElement(m.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,l=m["".concat(i,".").concat(u)]||m[u]||f[u]||o;return t?a.a.createElement(l,s(s({ref:n},c),{},{components:t})):a.a.createElement(l,s({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},41:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return m}));var r=t(3),a=t(8),o=(t(0),t(115)),i={title:"Cameras Sequence"},c={unversionedId:"kognic-io/inputs/cameras_seq",id:"kognic-io/inputs/cameras_seq",isDocsHomePage:!1,title:"Cameras Sequence",description:"A CamerasSeq input consists of a sequence of camera images, where each frame can contain between 1-9 images from different sensors. For more documentation on what each field corresponds to in the CamerasSeq object please check the section related to Input Overview.",source:"@site/docs/kognic-io/inputs/cameras_seq.md",slug:"/kognic-io/inputs/cameras_seq",permalink:"/api/docs/kognic-io/inputs/cameras_seq",editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/inputs/cameras_seq.md",version:"current",sidebar:"docs",previous:{title:"Lidars and Cameras",permalink:"/api/docs/kognic-io/inputs/lidars_and_cameras"},next:{title:"Lidars and Cameras Sequence",permalink:"/api/docs/kognic-io/inputs/lidars_and_cameras_seq"}},s=[],p={rightToc:s};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"A ",Object(o.mdx)("inlineCode",{parentName:"p"},"CamerasSeq")," input consists of a sequence of camera images, where each frame can contain between 1-9 images from different sensors. For more documentation on what each field corresponds to in the ",Object(o.mdx)("inlineCode",{parentName:"p"},"CamerasSeq")," object please check the section related to ",Object(o.mdx)("a",{parentName:"p",href:"/docs/kognic-io/overview"},"Input Overview"),"."),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/cameras_seq_images.py\n")),Object(o.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use dryrun to validate input")),Object(o.mdx)("div",{parentName:"div",className:"admonition-content"},Object(o.mdx)("p",{parentName:"div"},"Setting ",Object(o.mdx)("inlineCode",{parentName:"p"},"dryrun")," parameter to true in the method call, will validate the input using the API but not create any inputs."))))}m.isMDXComponent=!0}}]);