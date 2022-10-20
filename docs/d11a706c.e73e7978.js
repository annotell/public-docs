(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),m=function(e){return function(t){var n=p(t.components);return o.a.createElement(e,i({},t,{components:n}))}},p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,u=l["".concat(i,".").concat(m)]||l[m]||b[m]||r;return n?o.a.createElement(u,d(d({ref:t},c),{},{components:n})):o.a.createElement(u,d({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},193:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/kognic-domain-16957dadcfe3c08848707cd6889a23ac.png"},55:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(8),r=(n(0),n(115)),i={id:"key_concepts",title:"Key Concepts",description:"Kognic Platform Concepts",slug:"/"},c={unversionedId:"key_concepts",id:"key_concepts",isDocsHomePage:!1,title:"Key Concepts",description:"Kognic Platform Concepts",source:"@site/docs/key_concepts.md",slug:"/",permalink:"/public-docs/docs/",editUrl:"https://github.com/annotell/public-docs/docs-src/docs/key_concepts.md",version:"current",sidebar:"docs",previous:{title:"Kognic Auth",permalink:"/public-docs/docs/kognic-auth"},next:{title:"Projects",permalink:"/public-docs/docs/kognic-io/project"}},d=[{value:"Scene",id:"scene",children:[{value:"Scene Types",id:"scene-types",children:[]}]},{value:"Project",id:"project",children:[]},{value:"Batch",id:"batch",children:[{value:"Batch Status",id:"batch-status",children:[]}]},{value:"Request",id:"request",children:[{value:"Guideline",id:"guideline",children:[]},{value:"Task Definition",id:"task-definition",children:[]}]},{value:"Input",id:"input",children:[]},{value:"Annotation",id:"annotation",children:[{value:"v1.1.x Format",id:"v11x-format",children:[]}]}],s={rightToc:d};function l(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.mdx)("wrapper",Object(a.default)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,Object(r.mdx)("img",{alt:"Kognic",src:n(193).default})),Object(r.mdx)("h2",{id:"scene"},"Scene"),Object(r.mdx)("p",null,"Before dealing with different annotation setups, the data to be annotated needs to be uploaded to the Kognic Platform.\nThe ",Object(r.mdx)("strong",{parentName:"p"},"scene")," specifies how different types of data are tied together and includes resources such as images\nand point clouds as well as metadata and calibrations (how sensors relate to each other). We have support for annotating\ndifferent types of data, e.g:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"One (or more) images of the same scene from different cameras"),Object(r.mdx)("li",{parentName:"ul"},"Images from different cameras together with lidar point clouds")),Object(r.mdx)("p",null,"One important concept related to scenes is that of the ",Object(r.mdx)("em",{parentName:"p"},"frame"),". A frame is a discrete moment in time,\nconsisting of data from different sensors. Scenes can be divided into two categories; ",Object(r.mdx)("em",{parentName:"p"},"single frame")," and ",Object(r.mdx)("em",{parentName:"p"},"sequences"),"\n(multiple frames). The latter is represented by the scene types ending with ",Object(r.mdx)("inlineCode",{parentName:"p"},"Seq"),". These should be used when temporal\ninformation is important for producing the annotation."),Object(r.mdx)("h3",{id:"scene-types"},"Scene Types"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:null},"Type"),Object(r.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("strong",{parentName:"td"},"Cameras")),Object(r.mdx)("td",{parentName:"tr",align:null},"A single frame consisting of images from 1-9 cameras")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("strong",{parentName:"td"},"LidarsAndCameras")),Object(r.mdx)("td",{parentName:"tr",align:null},"A single frame consisting of 1-3 lidar point clouds and images from 1-9 cameras")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("strong",{parentName:"td"},"CamerasSeq")),Object(r.mdx)("td",{parentName:"tr",align:null},"Sequence of frames, each frame consisting of images from 1-9 cameras")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("strong",{parentName:"td"},"LidarsAndCamerasSeq")),Object(r.mdx)("td",{parentName:"tr",align:null},"Sequence of frames, consisting of 1-3 lidar point clouds and images from 1-9 cameras")))),Object(r.mdx)("h2",{id:"project"},"Project"),Object(r.mdx)("p",null,"Project is the top-most concept when interfacing with the Kognic Platform. It is possible to have multiple ongoing projects, and they act as a container for other Kognic resources.\nProject setup is performed by the Kognic Professional Services team during the Guideline Agreement Process (GAP) of a new client engagement."),Object(r.mdx)("p",null,"To use projects within the Kognic APIs, they can be identified using an external identifier."),Object(r.mdx)("h2",{id:"batch"},"Batch"),Object(r.mdx)("p",null,"Input batches allow grouping of inputs into smaller batches within a project. By default, every project has at least one input batch."),Object(r.mdx)("p",null,"Ongoing projects can benefit from using batches in two ways"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Group inputs collected at the same time"),Object(r.mdx)("li",{parentName:"ul"},"Perform guideline or task definition changes without the need for retroactive changes.")),Object(r.mdx)("h3",{id:"batch-status"},"Batch Status"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:null},"Status"),Object(r.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"pending"),Object(r.mdx)("td",{parentName:"tr",align:null},"Batch has been created but is still not fully configured by Kognic. Either during project setup or requested changes")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"open"),Object(r.mdx)("td",{parentName:"tr",align:null},"Batch is open for new inputs")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"ready"),Object(r.mdx)("td",{parentName:"tr",align:null},"Batch has been published and no longer open for new inputs.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"in-progress"),Object(r.mdx)("td",{parentName:"tr",align:null},"Kognic has started annotation of inputs within the batch.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},"completed"),Object(r.mdx)("td",{parentName:"tr",align:null},"Annotations has been completed.")))),Object(r.mdx)("h2",{id:"request"},"Request"),Object(r.mdx)("p",null,"During GAP, projects are divided into different annotation types. E.g. a project consisting of images can be divided\ninto lane annotation and object detection. Within Kognic this is represented as a ",Object(r.mdx)("strong",{parentName:"p"},"Request"),".\nA Request can be viewed as a drawing tool - we divide big and complex projects into several independent annotation types.\nThis makes it possible to:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Reduce the mental strain on annotators"),Object(r.mdx)("li",{parentName:"ul"},"Higher bandwidth - more annotators can work on the same data in parallel"),Object(r.mdx)("li",{parentName:"ul"},"Build simple user interfaces")),Object(r.mdx)("p",null,"All of these contribute to a high level of quality while also reducing the total time needed for producing an annotation."),Object(r.mdx)("h3",{id:"guideline"},"Guideline"),Object(r.mdx)("p",null,'In order for us to produce annotations we need to know what and how to annotate. This type of information is found in something that\'s called a Guideline. A guideline contains information on what to mark (e.g. vehicles and pedestrians) as well as how (e.g. bounding box). A guideline also includes information about how to interpret the data, i.e. what does it mean that a vehicle is "heavily occluded"?'),Object(r.mdx)("h3",{id:"task-definition"},"Task Definition"),Object(r.mdx)("p",null,"Task Definition - Describes what we\u2019re annotating. How many objects? Bounding box, semantic segmentation or lines/splines? What are the properties? Task Definitions are json documents that the Kognic Professional Services team generates from the guideline. The task definition is used by the Kognic App to construct the drawing tool, and can be viewed as the machine readable quivalent of a guideline."),Object(r.mdx)("h2",{id:"input"},"Input"),Object(r.mdx)("p",null,"Once a scene has been uploaded to the Kognic Platform, you can create annotation tasks for it. We call these annotation\ntasks ",Object(r.mdx)("strong",{parentName:"p"},"inputs"),", where each input is added to a request. Separating the input from the scene in this way enables\nefficient reuse of the uploaded data. For instance, multiple inputs can easily be created from the same scene in the\nsame batch. In the future, this will also be possible across batches."),Object(r.mdx)("p",null,"Note that you can specify that inputs should also be created when creating the scene by providing the project/batch\nto create them in."),Object(r.mdx)("h2",{id:"annotation"},"Annotation"),Object(r.mdx)("p",null,"Inputs are annotated in requests, producing ",Object(r.mdx)("em",{parentName:"p"},"annotations"),". Version v1.0.x provide by default annotations in Kognic's\nannotation format. Version v1.1.x and above provide annotations in the ",Object(r.mdx)("a",{parentName:"p",href:"https://www.asam.net/project-detail/asam-openlabel-v100/"},"ASAM OpenLABEL")," format."),Object(r.mdx)("h3",{id:"v11x-format"},"v1.1.x Format"),Object(r.mdx)("p",null,"Annotations are provided by the ",Object(r.mdx)("inlineCode",{parentName:"p"},"kognic-io")," as json objects in the ",Object(r.mdx)("a",{parentName:"p",href:"openlabel/openlabel-format"},"ASAM OpenLABEL")," format.\nMore information on how to download these annotations along with some examples of how to work with them is available\nin the ",Object(r.mdx)("a",{parentName:"p",href:"/public-docs/docs/kognic-io/annotations"},"Downloading Annotations")," chapter."),Object(r.mdx)("p",null,"Apart from the ",Object(r.mdx)("inlineCode",{parentName:"p"},"kognic-io"),", Kognic also provides a ",Object(r.mdx)("a",{parentName:"p",href:"openlabel/python-client"},"library")," called ",Object(r.mdx)("inlineCode",{parentName:"p"},"kognic-openlabel"),",\nwhich makes it easy to parse and work with the OpenLABEL json."),Object(r.mdx)("p",null,"Any conversion away from the OpenLABEL format will have to occur client-side."))}l.isMDXComponent=!0}}]);