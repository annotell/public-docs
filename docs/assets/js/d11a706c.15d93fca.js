"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={id:"key_concepts",title:"Key Concepts",description:"Kognic Platform Concepts",slug:"/"},i=void 0,s={unversionedId:"key_concepts",id:"key_concepts",title:"Key Concepts",description:"Kognic Platform Concepts",source:"@site/docs/key_concepts.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/key_concepts.md",tags:[],version:"current",frontMatter:{id:"key_concepts",title:"Key Concepts",description:"Kognic Platform Concepts",slug:"/"},sidebar:"docs",previous:{title:"Kognic APIs",permalink:"/docs/kognic-apis"},next:{title:"Projects",permalink:"/docs/kognic-io/project"}},l={},c=[{value:"Project",id:"project",level:2},{value:"Batch",id:"batch",level:2},{value:"Batch Status",id:"batch-status",level:3},{value:"Request",id:"request",level:2},{value:"Guideline",id:"guideline",level:3},{value:"Task Definition",id:"task-definition",level:3},{value:"Scene",id:"scene",level:2},{value:"Scene Types",id:"scene-types",level:3},{value:"Input",id:"input",level:2},{value:"Annotation",id:"annotation",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Kognic",src:n(4488).Z,width:"1479",height:"675"})),(0,o.kt)("h2",{id:"project"},"Project"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Project")," is the top-most concept when interfacing with the Kognic Platform. It is possible to have multiple ongoing projects, and they act as a container for other Kognic resources.\nProject setup is usually performed by the Kognic Professional Services team during the Guideline Agreement Process (GAP) of a new client engagement."),(0,o.kt)("p",null,"Within the Kognic APIs, projects are identified using an external identifier."),(0,o.kt)("h2",{id:"batch"},"Batch"),(0,o.kt)("p",null,"Input ",(0,o.kt)("strong",{parentName:"p"},"batches")," allow grouping of input data into smaller batches within a project. By default, every project has at least one input batch."),(0,o.kt)("p",null,"Ongoing projects can be benefited from having multiple batches in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Group input data that are collected during a certain time interval"),(0,o.kt)("li",{parentName:"ul"},"Perform guideline or task definition changes without the need for retroactive changes.")),(0,o.kt)("h3",{id:"batch-status"},"Batch Status"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Status"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pending"),(0,o.kt)("td",{parentName:"tr",align:null},"Batch has been created but is still not fully configured by Kognic. Either during project setup or requested changes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"open"),(0,o.kt)("td",{parentName:"tr",align:null},"Batch is open for new inputs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ready"),(0,o.kt)("td",{parentName:"tr",align:null},"Batch has been published and no longer open for new inputs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"in-progress"),(0,o.kt)("td",{parentName:"tr",align:null},"Kognic has started annotation of inputs within the batch.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"completed"),(0,o.kt)("td",{parentName:"tr",align:null},"Annotations has been completed.")))),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("p",null,"During GAP, projects can have several annotation types as the end goal. For example, a project consisting of images can be assigned\nfor both lane detection and object annotation. Within Kognic, a ",(0,o.kt)("strong",{parentName:"p"},"Request")," represents a specific annotation goal for a given input.\nWe divide big and complex projects into several independent annotation types.\nThis makes it possible to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reduce the cognitive load on the annotators"),(0,o.kt)("li",{parentName:"ul"},"More annotators can work on the same data in parallel"),(0,o.kt)("li",{parentName:"ul"},"Simplify user interfaces")),(0,o.kt)("p",null,"All of these contribute to a high level of quality while also reducing the total time needed for producing an annotation."),(0,o.kt)("h3",{id:"guideline"},"Guideline"),(0,o.kt)("p",null,"In order to produce annotations, one needs to know what to annotate and how. This type of information is found in ",(0,o.kt)("strong",{parentName:"p"},"Guideline"),'. A guideline defines what specific object to mark (e.g. vehicles and pedestrians), as well as how (e.g. bounding box). A guideline also includes detailed information about how to interpret the data, e.g. what it means by a vehicle is "heavily occluded".'),(0,o.kt)("h3",{id:"task-definition"},"Task Definition"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Task Definition")," describes what should/could be annotated. How many object types? Bounding box, semantic segmentation or lines/splines for each object type? What are the properties for each object type? Task definitions are json files that the Kognic Professional Services team generates from the guideline. The task definition is then used by the Kognic App to construct the appropriate drawing tool. In other words, task definition can be understood as the machine readable quivalent of a guideline."),(0,o.kt)("h2",{id:"scene"},"Scene"),(0,o.kt)("p",null,"Before setting up any annotation task, the raw data needs to be correctly uploaded to the Kognic Platform.\nThe ",(0,o.kt)("strong",{parentName:"p"},"scene")," specifies how data from different sources are combined together. Resources are images\nand point clouds, as well as metadata and calibrations (define sensors' properties). We support different types of setup, for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Image(s) from a (multiple) camera(s)"),(0,o.kt)("li",{parentName:"ul"},"Image(s) from camera(s) combined with lidar point clouds")),(0,o.kt)("p",null,"Another concept related to scene is ",(0,o.kt)("strong",{parentName:"p"},"frame"),". A frame is a discrete moment of a scene in time. Scenes can be either ",(0,o.kt)("em",{parentName:"p"},"single frame")," or ",(0,o.kt)("em",{parentName:"p"},"sequence")," (multiple frames). Sequence should be used when temporal\ninformation is important for producing the annotation."),(0,o.kt)("h3",{id:"scene-types"},"Scene Types"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Cameras")),(0,o.kt)("td",{parentName:"tr",align:null},"A single frame consisting of image(s) from 1-9 cameras")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"LidarsAndCameras")),(0,o.kt)("td",{parentName:"tr",align:null},"A single frame consisting of 1-20 lidar point clouds and image(s) from 1-9 cameras")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"CamerasSeq")),(0,o.kt)("td",{parentName:"tr",align:null},"A sequence of frames, each frame consisting of image(s) from 1-9 cameras")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"LidarsAndCamerasSeq")),(0,o.kt)("td",{parentName:"tr",align:null},"A sequence of frames, each frame consisting of 1-20 lidar point clouds and image(s) from 1-9 cameras")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"AggregatedLidarsAndCamerasSeq")),(0,o.kt)("td",{parentName:"tr",align:null},"A sequence of frames, each frame consisting of 1-20 lidar point clouds and image(s) from 1-9 cameras. However, point clouds are aggregated over time, producing a unified point cloud.")))),(0,o.kt)("h2",{id:"input"},"Input"),(0,o.kt)("p",null,"Once a scene has been uploaded to the Kognic Platform, one can create annotation tasks as ",(0,o.kt)("strong",{parentName:"p"},"inputs")," where each input is associated to a request. Differenciate input from scene enables\nefficient reuse of the uploaded data. For instance, multiple inputs can be created from the same scene enabling\ndifferent kinds of annotation setups. "),(0,o.kt)("p",null,"Note that one can create an input simultaneously when creating a scene by providing the project/batch that it should be associated to, see examples in ",(0,o.kt)("a",{parentName:"p",href:"/docs/kognic-io/working_with_scenes_and_inputs"},"Working with Scenes and Inputs"),"."),(0,o.kt)("h2",{id:"annotation"},"Annotation"),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"annotation")," is produced when inputs are successfully annotated in a request. Annotations are provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"kognic-io")," API as json objects\nin ",(0,o.kt)("a",{parentName:"p",href:"openlabel/openlabel-format"},"ASAM OpenLABEL")," format. More information on how to download these annotations along with some examples of\nhow to work with them is available in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/kognic-io/annotations"},"Downloading Annotations")," chapter."),(0,o.kt)("p",null,"Apart from ",(0,o.kt)("inlineCode",{parentName:"p"},"kognic-io")," API, Kognic also provides a ",(0,o.kt)("a",{parentName:"p",href:"openlabel/python-client"},"library")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"kognic-openlabel"),",\nwhich makes it easy to parse and work with the OpenLABEL json objects."))}d.isMDXComponent=!0},4488:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kognic-domain-16957dadcfe3c08848707cd6889a23ac.png"}}]);