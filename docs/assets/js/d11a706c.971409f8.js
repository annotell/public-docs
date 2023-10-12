"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={id:"key_concepts",title:"Key Concepts",description:"Kognic Platform Concepts",slug:"/"},r=void 0,s={unversionedId:"key_concepts",id:"key_concepts",title:"Key Concepts",description:"Kognic Platform Concepts",source:"@site/docs/key_concepts.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/key_concepts.md",tags:[],version:"current",frontMatter:{id:"key_concepts",title:"Key Concepts",description:"Kognic Platform Concepts",slug:"/"},sidebar:"docs",previous:{title:"Kognic Auth",permalink:"/docs/kognic-auth"},next:{title:"Projects",permalink:"/docs/kognic-io/project"}},l={},c=[{value:"Project",id:"project",level:2},{value:"Batch",id:"batch",level:2},{value:"Batch Status",id:"batch-status",level:3},{value:"Request",id:"request",level:2},{value:"Guideline",id:"guideline",level:3},{value:"Task Definition",id:"task-definition",level:3},{value:"Scene",id:"scene",level:2},{value:"Scene Types",id:"scene-types",level:3},{value:"Input",id:"input",level:2},{value:"Annotation",id:"annotation",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Kognic",src:n(4488).Z,width:"1479",height:"675"})),(0,o.kt)("h2",{id:"project"},"Project"),(0,o.kt)("p",null,"Project is the top-most concept when interfacing with the Kognic Platform. It is possible to have multiple ongoing projects, and they act as a container for other Kognic resources.\nProject setup is performed by the Kognic Professional Services team during the Guideline Agreement Process (GAP) of a new client engagement."),(0,o.kt)("p",null,"To use projects within the Kognic APIs, they can be identified using an external identifier."),(0,o.kt)("h2",{id:"batch"},"Batch"),(0,o.kt)("p",null,"Input batches allow grouping of inputs into smaller batches within a project. By default, every project has at least one input batch."),(0,o.kt)("p",null,"Ongoing projects can benefit from using batches in two ways"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Group inputs collected at the same time"),(0,o.kt)("li",{parentName:"ul"},"Perform guideline or task definition changes without the need for retroactive changes.")),(0,o.kt)("h3",{id:"batch-status"},"Batch Status"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Status"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pending"),(0,o.kt)("td",{parentName:"tr",align:null},"Batch has been created but is still not fully configured by Kognic. Either during project setup or requested changes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"open"),(0,o.kt)("td",{parentName:"tr",align:null},"Batch is open for new inputs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ready"),(0,o.kt)("td",{parentName:"tr",align:null},"Batch has been published and no longer open for new inputs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"in-progress"),(0,o.kt)("td",{parentName:"tr",align:null},"Kognic has started annotation of inputs within the batch.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"completed"),(0,o.kt)("td",{parentName:"tr",align:null},"Annotations has been completed.")))),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("p",null,"During GAP, projects are divided into different annotation types. E.g. a project consisting of images can be divided\ninto lane annotation and object detection. Within Kognic this is represented as a ",(0,o.kt)("strong",{parentName:"p"},"Request"),".\nA Request can be viewed as a drawing tool - we divide big and complex projects into several independent annotation types.\nThis makes it possible to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reduce the mental strain on annotators"),(0,o.kt)("li",{parentName:"ul"},"Higher bandwidth - more annotators can work on the same data in parallel"),(0,o.kt)("li",{parentName:"ul"},"Build simple user interfaces")),(0,o.kt)("p",null,"All of these contribute to a high level of quality while also reducing the total time needed for producing an annotation."),(0,o.kt)("h3",{id:"guideline"},"Guideline"),(0,o.kt)("p",null,'In order for us to produce annotations we need to know what and how to annotate. This type of information is found in something that\'s called a Guideline. A guideline contains information on what to mark (e.g. vehicles and pedestrians) as well as how (e.g. bounding box). A guideline also includes information about how to interpret the data, i.e. what does it mean that a vehicle is "heavily occluded"?'),(0,o.kt)("h3",{id:"task-definition"},"Task Definition"),(0,o.kt)("p",null,"Task Definition - Describes what we\u2019re annotating. How many objects? Bounding box, semantic segmentation or lines/splines? What are the properties? Task Definitions are json documents that the Kognic Professional Services team generates from the guideline. The task definition is used by the Kognic App to construct the drawing tool, and can be viewed as the machine readable quivalent of a guideline."),(0,o.kt)("h2",{id:"scene"},"Scene"),(0,o.kt)("p",null,"Before dealing with different annotation setups, the data to be annotated needs to be uploaded to the Kognic Platform.\nThe ",(0,o.kt)("strong",{parentName:"p"},"scene")," specifies how different types of data are tied together and includes resources such as images\nand point clouds as well as metadata and calibrations (how sensors relate to each other). We have support for annotating\ndifferent types of data, e.g:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One (or more) images of the same scene from different cameras"),(0,o.kt)("li",{parentName:"ul"},"Images from different cameras together with lidar point clouds")),(0,o.kt)("p",null,"One important concept related to scenes is that of the ",(0,o.kt)("em",{parentName:"p"},"frame"),". A frame is a discrete moment in time,\nconsisting of data from different sensors. Scenes can be divided into two categories; ",(0,o.kt)("em",{parentName:"p"},"single frame")," and ",(0,o.kt)("em",{parentName:"p"},"sequences"),"\n(multiple frames). The latter is represented by the scene types ending with ",(0,o.kt)("inlineCode",{parentName:"p"},"Seq"),". These should be used when temporal\ninformation is important for producing the annotation."),(0,o.kt)("h3",{id:"scene-types"},"Scene Types"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Cameras")),(0,o.kt)("td",{parentName:"tr",align:null},"A single frame consisting of images from 1-9 cameras")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"LidarsAndCameras")),(0,o.kt)("td",{parentName:"tr",align:null},"A single frame consisting of 1-20 lidar point clouds and images from 1-9 cameras")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"CamerasSeq")),(0,o.kt)("td",{parentName:"tr",align:null},"Sequence of frames, each frame consisting of images from 1-9 cameras")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"LidarsAndCamerasSeq")),(0,o.kt)("td",{parentName:"tr",align:null},"Sequence of frames, consisting of 1-20 lidar point clouds and images from 1-9 cameras")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"AggregatedLidarsAndCamerasSeq")),(0,o.kt)("td",{parentName:"tr",align:null},"Sequence of frames, consisting of 1-20 lidar point clouds and images from 1-9 cameras. Point clouds are aggregated over time, producing one point cloud during annotation.")))),(0,o.kt)("h2",{id:"input"},"Input"),(0,o.kt)("p",null,"Once a scene has been uploaded to the Kognic Platform, you can create annotation tasks for it. We call these annotation\ntasks ",(0,o.kt)("strong",{parentName:"p"},"inputs"),", where each input is added to a request. Separating the input from the scene in this way enables\nefficient reuse of the uploaded data. For instance, multiple inputs can easily be created from the same scene enabling\ndifferent kinds of annotation setups. "),(0,o.kt)("p",null,"Note that you can specify that inputs should also be created when creating the scene by providing the project/batch\nto create them in."),(0,o.kt)("h2",{id:"annotation"},"Annotation"),(0,o.kt)("p",null,"Inputs are annotated in requests, producing ",(0,o.kt)("em",{parentName:"p"},"annotations"),". Annotations are provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"kognic-io")," as json objects\non the ",(0,o.kt)("a",{parentName:"p",href:"openlabel/openlabel-format"},"ASAM OpenLABEL")," format. More information on how to download these annotations along with some examples of\nhow to work with them is available in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/kognic-io/annotations"},"Downloading Annotations")," chapter."),(0,o.kt)("p",null,"Apart from ",(0,o.kt)("inlineCode",{parentName:"p"},"kognic-io"),", Kognic also provides a ",(0,o.kt)("a",{parentName:"p",href:"openlabel/python-client"},"library")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"kognic-openlabel"),",\nwhich makes it easy to parse and work with the OpenLABEL json."),(0,o.kt)("p",null,"Any conversion away from the OpenLABEL format will have to occur client-side."))}d.isMDXComponent=!0},4488:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kognic-domain-16957dadcfe3c08848707cd6889a23ac.png"}}]);