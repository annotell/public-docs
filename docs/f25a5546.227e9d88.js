(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return d})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return l}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),l=function(e){return function(t){var n=m(t.components);return o.a.createElement(e,r({},t,{components:n}))}},m=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=m(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(n),l=a,u=d["".concat(r,".").concat(l)]||d[l]||h[l]||i;return n?o.a.createElement(u,p(p({ref:t},c),{},{components:n})):o.a.createElement(u,p({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(8),i=(n(0),n(115)),r={id:"annotation_types",title:"Annotation Types"},c={unversionedId:"kognic-io/annotation_types",id:"kognic-io/annotation_types",isDocsHomePage:!1,title:"Annotation Types",description:"Annotation Types are something that can be configured for a project either during or after",source:"@site/docs/kognic-io/annotation_types.md",slug:"/kognic-io/annotation_types",permalink:"/docs/kognic-io/annotation_types",editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/annotation_types.md",version:"current",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/kognic-io/overview"},next:{title:"Cameras",permalink:"/docs/kognic-io/inputs/cameras"}},p=[{value:"Examples",id:"examples",children:[{value:"Get Annotation Types for Project",id:"get-annotation-types-for-project",children:[]},{value:"Get Annotation Types for a specified Project Batch",id:"get-annotation-types-for-a-specified-project-batch",children:[]},{value:"Create inputs for specific Annotation Types",id:"create-inputs-for-specific-annotation-types",children:[]},{value:"Create inputs for all Annotation Types in batch",id:"create-inputs-for-all-annotation-types-in-batch",children:[]},{value:"Add/remove annotation types for an input",id:"addremove-annotation-types-for-an-input",children:[]}]}],s={rightToc:p};function d(e){var t=e.components,n=Object(o.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(a.default)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Annotation Types are something that ",Object(i.mdx)("strong",{parentName:"p"},"can")," be configured for a project either during or after\nthe Guideline Agreement Process (GAP). During the GAP a set of taxonomies are defined\nwhich will be used in order to annotate all the inputs that are uploaded to the platform."),Object(i.mdx)("p",null,"Annotation Types are identifiers that each map to one of these taxonomies and allows you\nto programmatically define, for every input that you create, what taxonomies that you\nwould like that input to be annotated with. You do not ",Object(i.mdx)("strong",{parentName:"p"},"need")," to use annotation types\nin a project but by skipping annotation types your inputs would always be created for all\ntaxonomies available in the specified batch."),Object(i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Add additional Annotation Types")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"It is possible to add additional Annotation Types after a project is created, and\nmake them available to future batches that you create. If you would like Annotation\nTypes to be added to your project please get in touch with Kognic's Professional\nServices team."))),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)("p",null,"For the following examples we will be creating ",Object(i.mdx)("inlineCode",{parentName:"p"},"cameras_sequence")," inputs, however the\nprocedure would be identical for any other input type. We will also assume that the\nproject ",Object(i.mdx)("inlineCode",{parentName:"p"},"example_project_id")," is configured with the Annotation Types:\n",Object(i.mdx)("inlineCode",{parentName:"p"},"static_objects"),", and ",Object(i.mdx)("inlineCode",{parentName:"p"},"dynamic_objects"),", and that they are also available in the batch\n",Object(i.mdx)("inlineCode",{parentName:"p"},"example_batch_id"),"."),Object(i.mdx)("h3",{id:"get-annotation-types-for-project"},"Get Annotation Types for Project"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python"},'from kognic.io.client import KognicIOClient\n\nclient = KognicIOClient()\nproject_annotation_types = client.project.get_annotation_types(project="example_project_id")\n')),Object(i.mdx)("p",null,"This will return a list of all Annotation Types available in the project."),Object(i.mdx)("h3",{id:"get-annotation-types-for-a-specified-project-batch"},"Get Annotation Types for a specified Project Batch"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python"},'from kognic.io.client import KognicIOClient\n\nclient = KognicIOClient()\nbatch_annotation_types = client.project.get_annotation_types(project="example_project_id",\n                                                             batch="example_batch_id")\n')),Object(i.mdx)("p",null,"This will return a list of all Annotation Types available in the specified batch.\nNote that this list does not need to contain all Annotation Types in the project."),Object(i.mdx)("h3",{id:"create-inputs-for-specific-annotation-types"},"Create inputs for specific Annotation Types"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python"},'from kognic.io.client import KognicIOClient\nfrom kognic.io.model.input.cameras_sequence import CamerasSequence\n\nclient = KognicIOClient()\ncamera_input = CamerasSequence(external_id=..., frames=...)\nclient.cameras_sequence.create(camera_input,\n                               project="example_project_id",\n                               batch="example_batch_id",\n                               annotation_types=["static_objects", "dynamic_objects"])\n')),Object(i.mdx)("p",null,"The above example will create a new input which will be annotated for the annotation\ntypes specified. If one or more of the specified annotation types would not be available\nin the specified batch the validation in the API would fail. "),Object(i.mdx)("div",{className:"admonition admonition-info alert alert--info"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Specifying batch is optional")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"In these examples we have specified which batch the inputs should be created for, but this is optional. If\nno batch is specified the inputs will be created in the latest batch with status ",Object(i.mdx)("inlineCode",{parentName:"p"},"open"),". "))),Object(i.mdx)("h3",{id:"create-inputs-for-all-annotation-types-in-batch"},"Create inputs for all Annotation Types in batch"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python"},'from kognic.io.client import KognicIOClient\nfrom kognic.io.model.input.cameras_sequence import CamerasSequence\n\nclient = KognicIOClient()\ncamera_input = CamerasSequence(external_id=..., frames=...)\nclient.cameras_sequence.create(camera_input,\n                               project="example_project_id",\n                               batch="example_batch_id")\n')),Object(i.mdx)("p",null,"The above example will create a new input which will be annotated for all Annotation\nTypes available in the batch ",Object(i.mdx)("inlineCode",{parentName:"p"},"example_batch_id"),". However, this way it is not explicit\nwhat Annotation Types that the inputs will be annotated with, and you would not get an\nerror if e.g. ",Object(i.mdx)("inlineCode",{parentName:"p"},"static_objects")," was missing from the specified batch. "),Object(i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Always specify Annotation Types")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"In order to get the best possible validation it is recommended that you always\nspecify annotation types when you create inputs."))),Object(i.mdx)("h3",{id:"addremove-annotation-types-for-an-input"},"Add/remove annotation types for an input"),Object(i.mdx)("p",null,"Adding an annotation type to an input means that an annotation will be produced for that input with the specified\nannotation type. In the same way, removing annotation types (new in version 1.2.0) from an input means that annotations will ",Object(i.mdx)("strong",{parentName:"p"},"not")," be\nproduced for that input with the specified annotation types. "),Object(i.mdx)("p",null,"In the case when multiple annotation types are annotated in the same task, it is enough to specify\none annotation type when adding but ",Object(i.mdx)("strong",{parentName:"p"},"all")," annotation types must be specified when removing. "),Object(i.mdx)("p",null,"Note that it is currently not possible to add an annotation type that has already been removed from an input."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python"},'from kognic.io.client import KognicIOClient\n\nclient = KognicIOClient()\ninput_uuid = \'cca60a67-cb68-4645-8bae-00c6e6415555\'\n\n# Add an annotation type to an input\nclient.input.add_annotation_type(input_uuid=input_uuid, annotation_type="annotation-type")\n\n# Remove annotation types from an input (new in version 1.2.0)\nannotation_types = ["annotation-type-1", "annotation-type-2", ...]\nclient.input.remove_annotation_types(input_uuid=input_uuid, annotation_type=annotation_types)\n\n')))}d.isMDXComponent=!0}}]);