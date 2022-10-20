(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return j})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){return function(t){var n=u(t.components);return r.a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||c;return n?r.a.createElement(m,l(l({ref:t},i),{},{components:n})):r.a.createElement(m,l({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},43:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),c=(n(0),n(115)),o={title:"Projects"},i={unversionedId:"kognic-io/project",id:"kognic-io/project",isDocsHomePage:!1,title:"Projects",description:"Project",source:"@site/docs/kognic-io/project.md",slug:"/kognic-io/project",permalink:"/public-docs/docs/kognic-io/project",editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/project.md",version:"current",sidebar:"docs",previous:{title:"Key Concepts",permalink:"/public-docs/docs/key_concepts"},next:{title:"Overview",permalink:"/public-docs/docs/kognic-io/overview"}},l=[{value:"Project",id:"project",children:[{value:"List Projects",id:"list-projects",children:[]}]},{value:"Batch",id:"batch",children:[{value:"Batch Status",id:"batch-status",children:[]},{value:"Listing Batches",id:"listing-batches",children:[]},{value:"Creating Batches",id:"creating-batches",children:[]},{value:"Publish Batch",id:"publish-batch",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.mdx)("wrapper",Object(a.default)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h2",{id:"project"},"Project"),Object(c.mdx)("p",null,"In order to create inputs via the API, a Kognic project needs to exist.\nProjects are configured by the Kognic Professional Services team, during the Guideline Agreement Process (GAP) of a new client engagement."),Object(c.mdx)("h3",{id:"list-projects"},"List Projects"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-python"},"projects = client.project.get_projects()\n")),Object(c.mdx)("p",null,"Or via ",Object(c.mdx)("inlineCode",{parentName:"p"},"kognicutil")," CLI"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-shell"},"kognicutil projects\n")),Object(c.mdx)("p",null,"Returns all projects."),Object(c.mdx)("h2",{id:"batch"},"Batch"),Object(c.mdx)("p",null,"Input batches allow further grouping of inputs into smaller batches within a project. Specifying input batch during input creation is optional, and will otherwise default to the latest open batch."),Object(c.mdx)("p",null,"Ongoing projects can benefit from using batches in two ways"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Group inputs collected at the same time"),Object(c.mdx)("li",{parentName:"ul"},"Perform guideline or task definition changes without the need for retroactive changes.")),Object(c.mdx)("h3",{id:"batch-status"},"Batch Status"),Object(c.mdx)("table",null,Object(c.mdx)("thead",{parentName:"table"},Object(c.mdx)("tr",{parentName:"thead"},Object(c.mdx)("th",{parentName:"tr",align:null},"Status"),Object(c.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(c.mdx)("tbody",{parentName:"table"},Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",{parentName:"tr",align:null},"pending"),Object(c.mdx)("td",{parentName:"tr",align:null},"Batch has been created but is still not fully configured by Kognic. Either during project setup or requested changes")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",{parentName:"tr",align:null},"open"),Object(c.mdx)("td",{parentName:"tr",align:null},"Batch is open for new inputs")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",{parentName:"tr",align:null},"ready"),Object(c.mdx)("td",{parentName:"tr",align:null},"Batch has been published and no longer open for new inputs.")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",{parentName:"tr",align:null},"in-progress"),Object(c.mdx)("td",{parentName:"tr",align:null},"Kognic has started annotation of inputs within the batch.")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",{parentName:"tr",align:null},"completed"),Object(c.mdx)("td",{parentName:"tr",align:null},"Annotations has been completed.")))),Object(c.mdx)("h3",{id:"listing-batches"},"Listing Batches"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-python"},'project_batches = client.project.get_project_batches("project_external_id")\n')),Object(c.mdx)("p",null,"Or via ",Object(c.mdx)("inlineCode",{parentName:"p"},"kognicutil")," CLI"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-shell"},"kognicutil project <project-external-id> --batches\n")),Object(c.mdx)("p",null,"Returns all batches for the project"),Object(c.mdx)("h3",{id:"creating-batches"},"Creating Batches"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-python"},'project_batch = client.project.create_batch("project_external_id", "batch_external_id")\n')),Object(c.mdx)("p",null,"Creates a new batch in the ",Object(c.mdx)("inlineCode",{parentName:"p"},"open")," state. The new batch will contain the same Annotation Types\n(see ",Object(c.mdx)("a",{parentName:"p",href:"annotation_types"},"Annotation Types"),") as\nthe latest previous batch, which means that the process of uploading inputs will be identical between batches."),Object(c.mdx)("p",null,"This method has an optional flag ",Object(c.mdx)("inlineCode",{parentName:"p"},"publish_previous_batches")," which defaults to ",Object(c.mdx)("inlineCode",{parentName:"p"},"False"),". By setting this flag to\n",Object(c.mdx)("inlineCode",{parentName:"p"},"True"),", as shown in the example below, all previous batches in the ",Object(c.mdx)("inlineCode",{parentName:"p"},"open")," state would be published and you\nwould no longer be able to upload inputs to those batches.\nYou should therefore be certain that you no longer need to upload more inputs to the\nprevious batches if you use this flag."),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-python"},'project_batch = client.project.create_batch("project_external_id",\n                                            "batch_external_id",\n                                            publish_previous_batches=True)\n')),Object(c.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(c.mdx)("h5",{parentName:"div"},Object(c.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(c.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Contact Kognic before use")),Object(c.mdx)("div",{parentName:"div",className:"admonition-content"},Object(c.mdx)("p",{parentName:"div"},"Kognic usually helps with creating batches before a client becomes autonomous,\nin order to avoid any confusion please contact Kognic before you start using this feature."))),Object(c.mdx)("h3",{id:"publish-batch"},"Publish Batch"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-python"},'project_batch = client.project.publish_batch("project_external_id", "batch_external_id")\n')),Object(c.mdx)("p",null,"Publishes the input batch, setting the state of the batch to ",Object(c.mdx)("inlineCode",{parentName:"p"},"ready"),". Published batches are not open for new inputs.\nA project with ",Object(c.mdx)("em",{parentName:"p"},"multiple")," open batches will require you to specify which open batch to target\nwhen creating inputs, whereas a project with a single open batch will allow you omit batch when\ncreating inputs."))}s.isMDXComponent=!0}}]);