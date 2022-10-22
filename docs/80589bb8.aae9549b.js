(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{115:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return s})),t.d(n,"MDXProvider",(function(){return m})),t.d(n,"mdx",(function(){return y})),t.d(n,"useMDXComponents",(function(){return d})),t.d(n,"withMDXComponents",(function(){return u}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){return function(n){var t=d(n.components);return r.a.createElement(e,i({},n,{components:t}))}},d=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=d(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(t),u=o,m=s["".concat(i,".").concat(u)]||s[u]||b[u]||a;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},45:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var o=t(3),r=t(8),a=(t(0),t(115)),i={title:"The Python client"},l={unversionedId:"openlabel/python-client",id:"openlabel/python-client",isDocsHomePage:!1,title:"The Python client",description:"Using this schema we have developed a python client kognic-openlabel which makes it easier",source:"@site/docs/openlabel/python-client.md",slug:"/openlabel/python-client",permalink:"/docs/openlabel/python-client",editUrl:"https://github.com/annotell/public-docs/docs-src/docs/openlabel/python-client.md",version:"current",sidebar:"docs",previous:{title:"OpenLABEL format",permalink:"/docs/openlabel/openlabel-format"},next:{title:"annotell-input-api to kognic-io",permalink:"/docs/a2k_migration_guide"}},c=[],p={rightToc:c};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.mdx)("wrapper",Object(o.default)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Using this schema we have developed a python client ",Object(a.mdx)("inlineCode",{parentName:"p"},"kognic-openlabel")," which makes it easier\nto work with annotations.\nThe python client models the OpenLABEL format as ",Object(a.mdx)("inlineCode",{parentName:"p"},"pydantic")," models. It is publicly available\n",Object(a.mdx)("a",{parentName:"p",href:"https://pypi.org/project/kognic-openlabel"},"here")," and can be installed with"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-bash"},"pip install kognic-openlabel\n")),Object(a.mdx)("p",null,"Since ",Object(a.mdx)("inlineCode",{parentName:"p"},"pydantic")," is used, the model contains validation as well as methods for serialization and deserialition.\nBelow are examples of how you can easily change between different formats"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-python"},'openlabel_dict = {\n    "openlabel": {\n        "metadata": {\n            "schema_version": "1.0.0"\n        }\n    }\n}\n\nfrom kognic.openlabel.models import OpenLabelAnnotation\n\n# Deserialize dict\nopenlabel_annotation = OpenLabelAnnotation.parse_obj(openlabel_dict)\n\n# Serialize to json\nopenlabel_json = openlabel_annotation.json(exclude_none=True)\n\n# Deserialize json\nopenlabel_annotation = OpenLabelAnnotation.parse_raw(openlabel_json)\n\n# Serialize to dict\nopenlabel_dict = openlabel_annotation.dict(exclude_none=True)\n')))}s.isMDXComponent=!0}}]);