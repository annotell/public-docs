(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return p})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return s})),n.d(t,"withMDXComponents",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),m=function(e){return function(t){var n=s(t.components);return i.a.createElement(e,d({},t,{components:n}))}},s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},j=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,u=p["".concat(d,".").concat(m)]||p[m]||b[m]||r;return n?i.a.createElement(u,o(o({ref:t},c),{},{components:n})):i.a.createElement(u,o({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,d=new Array(r);d[0]=j;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,d[1]=c;for(var l=2;l<r;l++)d[l]=n[l];return i.a.createElement.apply(null,d)}return i.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},46:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),r=(n(0),n(115)),d={title:"Working with Inputs"},c={unversionedId:"kognic-io/working_with_inputs",id:"kognic-io/working_with_inputs",isDocsHomePage:!1,title:"Working with Inputs",description:"Creating Inputs",source:"@site/docs/kognic-io/working_with_inputs.md",slug:"/kognic-io/working_with_inputs",permalink:"/api/docs/kognic-io/working_with_inputs",editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/working_with_inputs.md",version:"current",sidebar:"docs",previous:{title:"Lidars and Cameras Sequence",permalink:"/api/docs/kognic-io/inputs/lidars_and_cameras_seq"},next:{title:"Pre-annotations",permalink:"/api/docs/kognic-io/pre_annotations"}},o=[{value:"Creating Inputs",id:"creating-inputs",children:[{value:"Adding inputs to latest open batch for a project",id:"adding-inputs-to-latest-open-batch-for-a-project",children:[]},{value:"Adding inputs to specified batch for a project",id:"adding-inputs-to-specified-batch-for-a-project",children:[]}]},{value:"Input Status",id:"input-status",children:[]},{value:"List Inputs",id:"list-inputs",children:[{value:"Response",id:"response",children:[]}]},{value:"Invalidate Inputs",id:"invalidate-inputs",children:[]},{value:"List Invalidated Inputs",id:"list-invalidated-inputs",children:[]}],l={rightToc:o};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.mdx)("wrapper",Object(a.default)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h2",{id:"creating-inputs"},"Creating Inputs"),Object(r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(r.mdx)("h5",{parentName:"div"},Object(r.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.mdx)("div",{parentName:"div",className:"admonition-content"},Object(r.mdx)("p",{parentName:"div"},"For detailed information about different input modalities, check the Input Types section."))),Object(r.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(r.mdx)("h5",{parentName:"div"},Object(r.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Kognic Users")),Object(r.mdx)("div",{parentName:"div",className:"admonition-content"},Object(r.mdx)("p",{parentName:"div"},"As a Kognic user, it is possible to specify ",Object(r.mdx)("inlineCode",{parentName:"p"},"client_organization_id")," to ",Object(r.mdx)("inlineCode",{parentName:"p"},"KognicIOClient")," constructor to create inputs on behalf of a client organization"))),Object(r.mdx)("p",null,"In order to create inputs, they need to be associated with a ",Object(r.mdx)("a",{parentName:"p",href:"project"},"project")," and an ",Object(r.mdx)("a",{parentName:"p",href:"project#batch"},"input batch"),". Consider the following project setup:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre"},"organization # root for projects\n\u2514\u2500\u2500 projects\n   \u251c\u2500\u2500 project-a\n       \u251c\u2500\u2500 batch-1 - completed\n       \u251c\u2500\u2500 batch-2 - open\n           \u251c\u2500\u2500 input 0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3\n           \u251c\u2500\u2500 input 37d9dda4-3a29-4fcb-8a71-6bf16d5a9c36\n           \u2514\u2500\u2500 ...\n       \u2514\u2500\u2500 batch-3 - pending\n   \u2514\u2500\u2500 project-b\n       \u251c\u2500\u2500 batch-1\n       \u2514\u2500\u2500 ...\n")),Object(r.mdx)("p",null,"There are 2 ways to create inputs"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Adding inputs to latest open batch for a project"),Object(r.mdx)("li",{parentName:"ul"},"Adding inputs to specified batch for a project")),Object(r.mdx)("p",null,"The following examples all use an input of type ",Object(r.mdx)("inlineCode",{parentName:"p"},"Cameras"),", however the interface applies to all input types."),Object(r.mdx)("h3",{id:"adding-inputs-to-latest-open-batch-for-a-project"},"Adding inputs to latest open batch for a project"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python"},'client.cameras.create(\n    ...,\n    project="project-a")\n')),Object(r.mdx)("p",null,"Will add inputs to ",Object(r.mdx)("inlineCode",{parentName:"p"},"project-a")," ",Object(r.mdx)("inlineCode",{parentName:"p"},"batch-2")," because it's the latest open batch."),Object(r.mdx)("h3",{id:"adding-inputs-to-specified-batch-for-a-project"},"Adding inputs to specified batch for a project"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python"},'client.cameras.create(\n    ...,\n    project="project-a",\n    batch="batch-3")\n')),Object(r.mdx)("p",null,"Will add inputs to ",Object(r.mdx)("inlineCode",{parentName:"p"},"project-a")," ",Object(r.mdx)("inlineCode",{parentName:"p"},"batch-3"),"."),Object(r.mdx)("h2",{id:"input-status"},"Input Status"),Object(r.mdx)("p",null,"Once an input has been created, it might be preprocessed before being made available for annotation. Also, postprocessing such as conversion to the client-specific format might take place after annotation has been performed. During this process, the status property of an input can be used to keep track of progress."),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:null},"Status"),Object(r.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"pending"),Object(r.mdx)("td",{parentName:"tr",align:null},"Input has been validated but the server is waiting for the associated data to be uploaded")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"processing"),Object(r.mdx)("td",{parentName:"tr",align:null},"Associated data has been uploaded and is currently being processed by the Kognic Platform, potentially performing conversion of file formats")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"created"),Object(r.mdx)("td",{parentName:"tr",align:null},"Input is created and available for annotation")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"failed"),Object(r.mdx)("td",{parentName:"tr",align:null},"Conversion of input failed")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"invalidated:broken-input"),Object(r.mdx)("td",{parentName:"tr",align:null},"Input was invalidated since it did not load")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"invalidated:duplicate"),Object(r.mdx)("td",{parentName:"tr",align:null},"Input was invalidated due to being uploaded several times")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"invalidated:incorrectly-created"),Object(r.mdx)("td",{parentName:"tr",align:null},"Input was invalidated because it was incorrectly created")))),Object(r.mdx)("h2",{id:"list-inputs"},"List Inputs"),Object(r.mdx)("p",null,"Inputs can be retrieved from the API in two ways:"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"Filtering on a project using the ",Object(r.mdx)("inlineCode",{parentName:"li"},"get_inputs")," method. Additional filter parameters are also available\n(see table below) for querying inputs."),Object(r.mdx)("li",{parentName:"ol"},"Providing the input uuids of the inputs to be retrieved using the ",Object(r.mdx)("inlineCode",{parentName:"li"},"get_inputs_by_uuids")," method")),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python"},'# List all inputs for a project\nclient.input.get_inputs(project="project-identifier")\n\n# List all inputs for a project and a batch\nclient.input.get_inputs(project="project-identifier", batch="batch-identifier") \n\n# List all inputs for specific input uuids\ninput_uuids = [\'cca60a67-cb68-4645-8bae-00c6e6415555\', \'cc8776d0-f537-4094-8b11-8c2111741e2f\', ...]\nclient.input.get_inputs_by_uuids(input_uuids=input_uuids)\n')),Object(r.mdx)("p",null,"Additional filter parameters for querying inputs using ",Object(r.mdx)("inlineCode",{parentName:"p"},"get_inputs")," are listed below."),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:null},"Parameter"),Object(r.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"project"),Object(r.mdx)("td",{parentName:"tr",align:null},"Project identifier to filter by")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"batch"),Object(r.mdx)("td",{parentName:"tr",align:null},"Which batch in the project to return inputs for")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"external_ids"),Object(r.mdx)("td",{parentName:"tr",align:null},"Return inputs matching the ",Object(r.mdx)("inlineCode",{parentName:"td"},"external_ids")," supplied")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"include_invalidated"),Object(r.mdx)("td",{parentName:"tr",align:null},"Filters inputs based on their status, defaults to ",Object(r.mdx)("inlineCode",{parentName:"td"},"False"))))),Object(r.mdx)("h3",{id:"response"},"Response"),Object(r.mdx)("p",null,"The response is a list of ",Object(r.mdx)("inlineCode",{parentName:"p"},"Input")," objects containing the following properties"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:null},"Property"),Object(r.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"uuid"),Object(r.mdx)("td",{parentName:"tr",align:null},"ID used to identify the input within the Kognic Platform")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"external_id"),Object(r.mdx)("td",{parentName:"tr",align:null},"External ID supplied during input creation")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"batch"),Object(r.mdx)("td",{parentName:"tr",align:null},"Which batch does the input belong to")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"view_link"),Object(r.mdx)("td",{parentName:"tr",align:null},"A url to view the input in the Kognic Platform")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"input_type"),Object(r.mdx)("td",{parentName:"tr",align:null},"Type of input (see ",Object(r.mdx)("a",{parentName:"td",href:"/api/docs/key_concepts"},"Input Types"),")")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"status"),Object(r.mdx)("td",{parentName:"tr",align:null},"Input status (see ",Object(r.mdx)("a",{parentName:"td",href:"#input-status"},"Input Statuses"),")")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"error_message"),Object(r.mdx)("td",{parentName:"tr",align:null},"If there is an error during input creation the error message will be included, otherwise it's ",Object(r.mdx)("inlineCode",{parentName:"td"},"None"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"annotation_types"),Object(r.mdx)("td",{parentName:"tr",align:null},"List of annotation types for the input (new in version 1.2.0)")))),Object(r.mdx)("h2",{id:"invalidate-inputs"},"Invalidate Inputs"),Object(r.mdx)("p",null,"Invalidation of an input means that it will be removed for all annotation types. See ",Object(r.mdx)("a",{parentName:"p",href:"/api/docs/kognic-io/annotation_types"},"Annotation Types"),"\non how to remove a specific annotation types for an input."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python"},'invalid_ids = ["0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3", "37d9dda4-3a29-4fcb-8a71-6bf16d5a9c36"]\nreason = IAM.InvalidatedReasonInput.BAD_CONTENT\nclient.input.invalidate_inputs(invalid_ids, reason)\n')),Object(r.mdx)("p",null,"If issues are detected upstream related to inputs created, it is possible to invalidate inputs.\nInvalidated inputs will not produce annotations and any completed annotations of the input will be invalidated."),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:null},"Reason"),Object(r.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"bad-content"),Object(r.mdx)("td",{parentName:"tr",align:null},"Input does not load, or has erroneous metadata such as invalid calibration")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"duplicate"),Object(r.mdx)("td",{parentName:"tr",align:null},"If same input has been created several times")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"incorrectly-created"),Object(r.mdx)("td",{parentName:"tr",align:null},"If the input was unintentionally created.")))),Object(r.mdx)("h2",{id:"list-invalidated-inputs"},"List Invalidated Inputs"),Object(r.mdx)("p",null,"If errors are detected by Kognic, inputs will be invalidated and a reason will be supplied."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python"},'project = "project-identifier"\nclient.input.get_inputs(project=project, include_invalidated=True)\n')))}p.isMDXComponent=!0}}]);