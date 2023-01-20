"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[456],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(n),m=i,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,l(l({ref:e},s),{},{components:n})):a.createElement(k,l({ref:e},s))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9186:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={title:"Working with Inputs"},l=void 0,o={unversionedId:"kognic-io/working_with_inputs",id:"kognic-io/working_with_inputs",title:"Working with Inputs",description:"Creating Inputs",source:"@site/docs/kognic-io/working_with_inputs.md",sourceDirName:"kognic-io",slug:"/kognic-io/working_with_inputs",permalink:"/docs/kognic-io/working_with_inputs",draft:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/working_with_inputs.md",tags:[],version:"current",frontMatter:{title:"Working with Inputs"},sidebar:"docs",previous:{title:"Aggregated Lidars and Cameras Sequence",permalink:"/docs/kognic-io/inputs/aggregated_lidars_and_cameras_seq"},next:{title:"Pre-annotations",permalink:"/docs/kognic-io/pre_annotations"}},p={},d=[{value:"Creating Inputs",id:"creating-inputs",level:2},{value:"Adding inputs to latest open batch for a project",id:"adding-inputs-to-latest-open-batch-for-a-project",level:3},{value:"Adding inputs to specified batch for a project",id:"adding-inputs-to-specified-batch-for-a-project",level:3},{value:"Input Status",id:"input-status",level:2},{value:"List Inputs",id:"list-inputs",level:2},{value:"Response",id:"response",level:3},{value:"Invalidate Inputs",id:"invalidate-inputs",level:2},{value:"List Invalidated Inputs",id:"list-invalidated-inputs",level:2}],s={toc:d};function u(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"creating-inputs"},"Creating Inputs"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For detailed information about different input modalities, check the Input Types section.")),(0,i.kt)("admonition",{title:"Kognic Users",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"As a Kognic user, it is possible to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"client_organization_id")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"KognicIOClient")," constructor to create inputs on behalf of a client organization")),(0,i.kt)("p",null,"In order to create inputs, they need to be associated with a ",(0,i.kt)("a",{parentName:"p",href:"project"},"project")," and an ",(0,i.kt)("a",{parentName:"p",href:"project#batch"},"input batch"),". Consider the following project setup:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"organization # root for projects\n\u2514\u2500\u2500 projects\n   \u251c\u2500\u2500 project-a\n       \u251c\u2500\u2500 batch-1 - completed\n       \u251c\u2500\u2500 batch-2 - open\n           \u251c\u2500\u2500 input 0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3\n           \u251c\u2500\u2500 input 37d9dda4-3a29-4fcb-8a71-6bf16d5a9c36\n           \u2514\u2500\u2500 ...\n       \u2514\u2500\u2500 batch-3 - pending\n   \u2514\u2500\u2500 project-b\n       \u251c\u2500\u2500 batch-1\n       \u2514\u2500\u2500 ...\n")),(0,i.kt)("p",null,"There are 2 ways to create inputs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adding inputs to latest open batch for a project"),(0,i.kt)("li",{parentName:"ul"},"Adding inputs to specified batch for a project")),(0,i.kt)("p",null,"The following examples all use an input of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Cameras"),", however the interface applies to all input types."),(0,i.kt)("h3",{id:"adding-inputs-to-latest-open-batch-for-a-project"},"Adding inputs to latest open batch for a project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'client.cameras.create(\n    ...,\n    project="project-a")\n')),(0,i.kt)("p",null,"Will add inputs to ",(0,i.kt)("inlineCode",{parentName:"p"},"project-a")," ",(0,i.kt)("inlineCode",{parentName:"p"},"batch-2")," because it's the latest open batch."),(0,i.kt)("h3",{id:"adding-inputs-to-specified-batch-for-a-project"},"Adding inputs to specified batch for a project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'client.cameras.create(\n    ...,\n    project="project-a",\n    batch="batch-3")\n')),(0,i.kt)("p",null,"Will add inputs to ",(0,i.kt)("inlineCode",{parentName:"p"},"project-a")," ",(0,i.kt)("inlineCode",{parentName:"p"},"batch-3"),"."),(0,i.kt)("h2",{id:"input-status"},"Input Status"),(0,i.kt)("p",null,"Once an input has been created, it might be preprocessed before being made available for annotation. Also, postprocessing such as conversion to the client-specific format might take place after annotation has been performed. During this process, the status property of an input can be used to keep track of progress."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pending"),(0,i.kt)("td",{parentName:"tr",align:null},"Input has been validated but the server is waiting for the associated data to be uploaded")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"processing"),(0,i.kt)("td",{parentName:"tr",align:null},"Associated data has been uploaded and is currently being processed by the Kognic Platform, potentially performing conversion of file formats")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"created"),(0,i.kt)("td",{parentName:"tr",align:null},"Input is created and available for annotation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"failed"),(0,i.kt)("td",{parentName:"tr",align:null},"Conversion of input failed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"invalidated:broken-input"),(0,i.kt)("td",{parentName:"tr",align:null},"Input was invalidated since it did not load")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"invalidated:duplicate"),(0,i.kt)("td",{parentName:"tr",align:null},"Input was invalidated due to being uploaded several times")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"invalidated:incorrectly-created"),(0,i.kt)("td",{parentName:"tr",align:null},"Input was invalidated because it was incorrectly created")))),(0,i.kt)("h2",{id:"list-inputs"},"List Inputs"),(0,i.kt)("p",null,"Inputs can be retrieved from the API in two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Filtering on a project using the ",(0,i.kt)("inlineCode",{parentName:"li"},"get_inputs")," method. Additional filter parameters are also available\n(see table below) for querying inputs."),(0,i.kt)("li",{parentName:"ol"},"Providing the input uuids of the inputs to be retrieved using the ",(0,i.kt)("inlineCode",{parentName:"li"},"get_inputs_by_uuids")," method")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# List all inputs for a project\nclient.input.get_inputs(project="project-identifier")\n\n# List all inputs for a project and a batch\nclient.input.get_inputs(project="project-identifier", batch="batch-identifier") \n\n# List all inputs for specific input uuids\ninput_uuids = [\'cca60a67-cb68-4645-8bae-00c6e6415555\', \'cc8776d0-f537-4094-8b11-8c2111741e2f\', ...]\nclient.input.get_inputs_by_uuids(input_uuids=input_uuids)\n')),(0,i.kt)("p",null,"Additional filter parameters for querying inputs using ",(0,i.kt)("inlineCode",{parentName:"p"},"get_inputs")," are listed below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"project"),(0,i.kt)("td",{parentName:"tr",align:null},"Project identifier to filter by")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"batch"),(0,i.kt)("td",{parentName:"tr",align:null},"Which batch in the project to return inputs for")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"external_ids"),(0,i.kt)("td",{parentName:"tr",align:null},"Return inputs matching the ",(0,i.kt)("inlineCode",{parentName:"td"},"external_ids")," supplied")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"include_invalidated"),(0,i.kt)("td",{parentName:"tr",align:null},"Filters inputs based on their status, defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"False"))))),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"The response is a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," objects containing the following properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uuid"),(0,i.kt)("td",{parentName:"tr",align:null},"ID used to identify the input within the Kognic Platform")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"external_id"),(0,i.kt)("td",{parentName:"tr",align:null},"External ID supplied during input creation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"batch"),(0,i.kt)("td",{parentName:"tr",align:null},"Which batch does the input belong to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"view_link"),(0,i.kt)("td",{parentName:"tr",align:null},"A url to view the input in the Kognic Platform")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"input_type"),(0,i.kt)("td",{parentName:"tr",align:null},"Type of input (see ",(0,i.kt)("a",{parentName:"td",href:"/docs/"},"Input Types"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"status"),(0,i.kt)("td",{parentName:"tr",align:null},"Input status (see ",(0,i.kt)("a",{parentName:"td",href:"#input-status"},"Input Statuses"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"error_message"),(0,i.kt)("td",{parentName:"tr",align:null},"If there is an error during input creation the error message will be included, otherwise it's ",(0,i.kt)("inlineCode",{parentName:"td"},"None"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"annotation_types"),(0,i.kt)("td",{parentName:"tr",align:null},"List of annotation types for the input (new in version 1.2.0)")))),(0,i.kt)("h2",{id:"invalidate-inputs"},"Invalidate Inputs"),(0,i.kt)("p",null,"Invalidation of an input means that it will be removed for all annotation types. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/kognic-io/annotation_types"},"Annotation Types"),"\non how to remove a specific annotation types for an input."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'invalid_ids = ["0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3", "37d9dda4-3a29-4fcb-8a71-6bf16d5a9c36"]\nreason = IAM.InvalidatedReasonInput.BAD_CONTENT\nclient.input.invalidate_inputs(invalid_ids, reason)\n')),(0,i.kt)("p",null,"If issues are detected upstream related to inputs created, it is possible to invalidate inputs.\nInvalidated inputs will not produce annotations and any completed annotations of the input will be invalidated."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Reason"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bad-content"),(0,i.kt)("td",{parentName:"tr",align:null},"Input does not load, or has erroneous metadata such as invalid calibration")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"duplicate"),(0,i.kt)("td",{parentName:"tr",align:null},"If same input has been created several times")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"incorrectly-created"),(0,i.kt)("td",{parentName:"tr",align:null},"If the input was unintentionally created.")))),(0,i.kt)("h2",{id:"list-invalidated-inputs"},"List Invalidated Inputs"),(0,i.kt)("p",null,"If errors are detected by Kognic, inputs will be invalidated and a reason will be supplied."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'project = "project-identifier"\nclient.input.get_inputs(project=project, include_invalidated=True)\n')))}u.isMDXComponent=!0}}]);