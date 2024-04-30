"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[603],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(b,l(l({ref:n},s),{},{components:t})):o.createElement(b,l({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const r={title:"The Python client"},l=void 0,i={unversionedId:"openlabel/python-client",id:"openlabel/python-client",title:"The Python client",description:"Using this schema we have developed a python client kognic-openlabel which makes it easier",source:"@site/docs/openlabel/python-client.md",sourceDirName:"openlabel",slug:"/openlabel/python-client",permalink:"/docs/openlabel/python-client",draft:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/openlabel/python-client.md",tags:[],version:"current",frontMatter:{title:"The Python client"},sidebar:"docs",previous:{title:"OpenLABEL format",permalink:"/docs/openlabel/openlabel-format"},next:{title:"annotell-input-api to kognic-io",permalink:"/docs/a2k_migration_guide"}},p={},c=[],s={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Using this schema we have developed a python client ",(0,a.kt)("inlineCode",{parentName:"p"},"kognic-openlabel")," which makes it easier\nto work with annotations.\nThe python client models the OpenLABEL format as ",(0,a.kt)("inlineCode",{parentName:"p"},"pydantic")," models. It is publicly available\n",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/kognic-openlabel"},"here")," and can be installed with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install kognic-openlabel\n")),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"pydantic")," is used, the model contains validation as well as methods for serialization and deserialition.\nBelow are examples of how you can easily change between different formats"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'openlabel_dict = {\n    "openlabel": {\n        "metadata": {\n            "schema_version": "1.0.0"\n        }\n    }\n}\n\nfrom kognic.openlabel.models import OpenLabelAnnotation\n\n# Deserialize dict\nopenlabel_annotation = OpenLabelAnnotation.parse_obj(openlabel_dict)\n\n# Serialize to json\nopenlabel_json = openlabel_annotation.json(exclude_none=True)\n\n# Deserialize json\nopenlabel_annotation = OpenLabelAnnotation.parse_raw(openlabel_json)\n\n# Serialize to dict\nopenlabel_dict = openlabel_annotation.dict(exclude_none=True)\n')))}d.isMDXComponent=!0}}]);