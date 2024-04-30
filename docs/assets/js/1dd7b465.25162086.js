"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[567],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Working with Scenes & Inputs"},o=void 0,l={unversionedId:"kognic-io/working_with_scenes_and_inputs",id:"kognic-io/working_with_scenes_and_inputs",title:"Working with Scenes & Inputs",description:"For detailed information about different scene modalities, check the Scene Types section.",source:"@site/docs/kognic-io/working_with_scenes_and_inputs.md",sourceDirName:"kognic-io",slug:"/kognic-io/working_with_scenes_and_inputs",permalink:"/docs/kognic-io/working_with_scenes_and_inputs",draft:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/working_with_scenes_and_inputs.md",tags:[],version:"current",frontMatter:{title:"Working with Scenes & Inputs"},sidebar:"docs",previous:{title:"Downloading Annotations",permalink:"/docs/kognic-io/annotations"},next:{title:"Calibrations Overview",permalink:"/docs/kognic-io/calibrations/overview"}},s={},p=[{value:"Creating Scenes",id:"creating-scenes",level:2},{value:"Scene Status",id:"scene-status",level:3},{value:"Creating Inputs from Scene",id:"creating-inputs-from-scene",level:2},{value:"Creating Inputs Directly",id:"creating-inputs-directly",level:2},{value:"List Scenes",id:"list-scenes",level:2},{value:"Response",id:"response",level:3},{value:"List Inputs",id:"list-inputs",level:2},{value:"Response",id:"response-1",level:3},{value:"Invalidate Scenes",id:"invalidate-scenes",level:2},{value:"Deleting Inputs",id:"deleting-inputs",level:2},{value:"Invalidate Inputs (deprecated)",id:"invalidate-inputs-deprecated",level:2},{value:"Creating Multiple Inputs With One Call",id:"creating-multiple-inputs-with-one-call",level:2},{value:"Waiting for Scene Creation",id:"waiting-for-scene-creation",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For detailed information about different scene modalities, check the Scene Types section.")),(0,i.kt)("admonition",{title:"Kognic Users",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"As a Kognic user, it is possible to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"client_organization_id")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"KognicIOClient")," constructor to create scenes on behalf of a client organization")),(0,i.kt)("h2",{id:"creating-scenes"},"Creating Scenes"),(0,i.kt)("p",null,"Each scene resource has a ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," method that can be used to create a scene of the corresponding type. It takes the\ncorresponding scene model as input, so for example to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Cameras")," scene you would do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from kognic.io.model.scene.cameras import Cameras\n\nscene = Cameras(...)\nscene = client.cameras.create(cameras_scene)\nscene_uuid = created_scene.uuid\n")),(0,i.kt)("p",null,"As you can see, the ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," method returns the associated ",(0,i.kt)("inlineCode",{parentName:"p"},"scene_uuid"),", which can later be used to work with the scene.\nAt this point all files have been uploaded to the Kognic Platform and the scene starts to be pre-processed. When\npre-processing is finished, we say that the scene has been created. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"#scene-status"},"Scene Status")," section\nfor more information about the different scene statuses. "),(0,i.kt)("p",null,"Note that it is often useful to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"dryrun")," parameter when experimenting. This will validate the scene format\nbut not create it."),(0,i.kt)("h3",{id:"scene-status"},"Scene Status"),(0,i.kt)("p",null,"Once a scene has been uploaded, it might be preprocessed before being made available in the platform.\nDuring this process, the status property of a scene can be used to keep track of progress."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pending"),(0,i.kt)("td",{parentName:"tr",align:null},"Scene has been validated but the server is waiting for the associated resources to be uploaded")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"processing"),(0,i.kt)("td",{parentName:"tr",align:null},"Associated data has been uploaded and is currently being processed by the Kognic Platform, potentially performing conversion of file formats")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"created"),(0,i.kt)("td",{parentName:"tr",align:null},"Scene is created and available in the platform")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"failed"),(0,i.kt)("td",{parentName:"tr",align:null},"Conversion of scene failed. More information can be found in the associated error message")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"invalidated:broken-input"),(0,i.kt)("td",{parentName:"tr",align:null},"Scene was invalidated since it did not load")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"invalidated:duplicate"),(0,i.kt)("td",{parentName:"tr",align:null},"Scene was invalidated due to being uploaded several times")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"invalidated:incorrectly-created"),(0,i.kt)("td",{parentName:"tr",align:null},"Scene was invalidated because it was incorrectly created")))),(0,i.kt)("h2",{id:"creating-inputs-from-scene"},"Creating Inputs from Scene"),(0,i.kt)("p",null,"Once a scene has been created, it can be used to create inputs which is done by associating it with a ",(0,i.kt)("a",{parentName:"p",href:"project"},"project"),"\nand an ",(0,i.kt)("a",{parentName:"p",href:"project#batch"},"input batch"),". Consider the following project setup:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"organization # root for projects and scenes\n\u2514\u2500\u2500 projects\n   \u251c\u2500\u2500 project-a\n       \u251c\u2500\u2500 batch-1 - completed\n       \u251c\u2500\u2500 batch-2 - open\n           \u251c\u2500\u2500 request-1\n              \u251c\u2500\u2500 input 9c08f7a3-3216-4bd6-a41a-1dda6f66f53e \u2013 using scene 0edb\n              \u251c\u2500\u2500 input ddf548e3-9806-433c-afb5-fb951a721462 - using scene 37d9\n              \u2514\u2500\u2500 ...\n           \u2514\u2500\u2500 request-2   \n       \u2514\u2500\u2500 batch-3 - pending\n   \u2514\u2500\u2500 project-b\n       \u251c\u2500\u2500 batch-1\n       \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 scenes\n   \u251c\u2500\u2500 scene 0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3\n   \u251c\u2500\u2500 scene 37d9dda4-3a29-4fcb-8a71-6bf16d5a9c36\n   \u2514\u2500\u2500 ...\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"create_from_scene")," method is used to create inputs from a scene. The method takes the scene uuid as input along\nwith annotation information such as project, batch and annotation types. For example, to create inputs in ",(0,i.kt)("inlineCode",{parentName:"p"},"project-a"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"batch-2"),", you would do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'client.cameras.create_from_scene(\n   scene_uuid="0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3", \n   project="project-a", \n   batch="batch-2"\n)\n')),(0,i.kt)("p",null,"The above code will create inputs for the scene in all requests in batch ",(0,i.kt)("inlineCode",{parentName:"p"},"batch-2")," for project ",(0,i.kt)("inlineCode",{parentName:"p"},"project-a"),". If the ",(0,i.kt)("inlineCode",{parentName:"p"},"batch"),"\nparameter is omitted, the latest open batch for the project will be used. You can later reuse the same scene to create\ninputs for other projects and batches."),(0,i.kt)("h2",{id:"creating-inputs-directly"},"Creating Inputs Directly"),(0,i.kt)("p",null,"It is often useful to create inputs directly instead of the 2-step process described above. To do this, you can simply\npass the annotation information directly into the ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," method of the corresponding scene type. For example, to create\nan input in ",(0,i.kt)("inlineCode",{parentName:"p"},"project-a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"batch-2"),", you would do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'client.cameras_sequence.create(\n   ..., \n   project="project-a", \n   batch="batch-2"\n)\n')),(0,i.kt)("p",null,"This would trigger the scene creation process, and once the scene is created, inputs are created in all requests in\nthe given batch. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"batch")," parameter is omitted, the latest open batch for the project will be used. We also provide\na wrapper function ",(0,i.kt)("inlineCode",{parentName:"p"},"create_inputs")," to help with this process, see ",(0,i.kt)("a",{parentName:"p",href:"#creating-multiple-inputs-with-one-call"},"Creating Multiple Inputs With One Call"),"."),(0,i.kt)("h2",{id:"list-scenes"},"List Scenes"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This feature is new in version 1.6.0")),(0,i.kt)("p",null,"It can be useful to list scenes that have been uploaded to the Kognic Platform. One example is to check the status during\nscene creation. Scenes can be retrieved in the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'scene_uuids = ["cca60a67-cb68-4645-8bae-00c6e6415555", "cc8776d0-f537-4094-8b11-8c2111741e2f"]\nclient.scene.get_scenes_by_uuids(scene_uuids=scene_uuids)\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"The response is a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"Scene")," objects containing the following properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uuid"),(0,i.kt)("td",{parentName:"tr",align:null},"UUID used to identify the scene within the Kognic Platform")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"external_id"),(0,i.kt)("td",{parentName:"tr",align:null},"External ID supplied during scene creation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scene_type"),(0,i.kt)("td",{parentName:"tr",align:null},"Type of scene (see ",(0,i.kt)("a",{parentName:"td",href:"/docs/"},"Scene Types"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"status"),(0,i.kt)("td",{parentName:"tr",align:null},"Scene status (see ",(0,i.kt)("a",{parentName:"td",href:"#scene-status"},"Scene Status"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"created"),(0,i.kt)("td",{parentName:"tr",align:null},"When the scene was created")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"calibration_id"),(0,i.kt)("td",{parentName:"tr",align:null},"Calibration used for the scene (if any)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"view_link"),(0,i.kt)("td",{parentName:"tr",align:null},"A url to view the scene in the Kognic Platform")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"error_message"),(0,i.kt)("td",{parentName:"tr",align:null},"If there is an error during scene creation the error message will be included, otherwise it's ",(0,i.kt)("inlineCode",{parentName:"td"},"None"))))),(0,i.kt)("h2",{id:"list-inputs"},"List Inputs"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This feature is new in version 1.7.0")),(0,i.kt)("p",null,"Inputs can be queried from the platform using the ",(0,i.kt)("inlineCode",{parentName:"p"},"query_inputs")," method, which can be used in the following way"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/query_inputs.py#L6-L10\n")),(0,i.kt)("p",null,"Additional filter parameters for querying inputs are listed below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"project"),(0,i.kt)("td",{parentName:"tr",align:null},"Project identifier to filter by")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"batch"),(0,i.kt)("td",{parentName:"tr",align:null},"Which batch in the project to return inputs for")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scene_uuids"),(0,i.kt)("td",{parentName:"tr",align:null},"Return inputs using scenes matching the supplied uuids")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"external_ids"),(0,i.kt)("td",{parentName:"tr",align:null},"Return inputs using scenes matching the supplied ",(0,i.kt)("inlineCode",{parentName:"td"},"external_ids"))))),(0,i.kt)("h3",{id:"response-1"},"Response"),(0,i.kt)("p",null,"The response is a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," objects containing the following properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uuid"),(0,i.kt)("td",{parentName:"tr",align:null},"ID used to identify the input within the Kognic Platform")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scene_uuid"),(0,i.kt)("td",{parentName:"tr",align:null},"ID used to identify the scene that the input is using")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"request_uid"),(0,i.kt)("td",{parentName:"tr",align:null},"ID used to identify the request that the input belongs to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"view_link"),(0,i.kt)("td",{parentName:"tr",align:null},"A url to view the input in the Kognic Platform")))),(0,i.kt)("h2",{id:"invalidate-scenes"},"Invalidate Scenes"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This feature is new in version 1.6.0")),(0,i.kt)("p",null,"If issues are detected upstream related to scenes created, it is possible to invalidate them. This could be useful during\ndevelopment or if issues are detected with the data. Invalidating a scene means that it will be removed from requests,\nmeaning that ",(0,i.kt)("strong",{parentName:"p"},"all")," inputs using the scene will be deleted. In turn invalidated scenes will not produce annotations\nand any completed annotations of the scene will be removed. There is no way to undo this operation so use with caution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from kognic.io.model.scene.invalidated_reason import SceneInvalidatedReason\n\nscene_uuids = ["0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3", "37d9dda4-3a29-4fcb-8a71-6bf16d5a9c36"]\nreason = SceneInvalidatedReason.BAD_CONTENT\nclient.scene.invalidate_scenes(scene_uuids, reason)\n')),(0,i.kt)("p",null,"The following reasons are available when invalidating scenes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Reason"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bad-content"),(0,i.kt)("td",{parentName:"tr",align:null},"Scene does not load, or has erroneous metadata such as invalid calibration")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"duplicate"),(0,i.kt)("td",{parentName:"tr",align:null},"If the same scene has been created several times")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"incorrectly-created"),(0,i.kt)("td",{parentName:"tr",align:null},"If the scene was unintentionally created.")))),(0,i.kt)("h2",{id:"deleting-inputs"},"Deleting Inputs"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This feature is new in version 1.6.0")),(0,i.kt)("p",null,"If issues are detected upstream related to inputs created, it is possible to delete them. This could be useful when\nthe issues are related to the input itself and not the scene. One example would be if there are two inputs for a lidars\nand cameras scene, one where we want to annotate in 2D/3D and one where we only want to annotate in 2D. If the issue\nis an erroneous calibration the 2D input can still be used while the 2D/3D input should be deleted. "),(0,i.kt)("p",null,"Deleting an input means that no annotations will be produced for it and any completed annotations of the input will be\nremoved. There is no way to undo this operation so use with caution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'input_uuid = "9c08f7a3-3216-4bd6-a41a-1dda6f66f53e"\nclient.input.delete_input(input_uuid)\n')),(0,i.kt)("h2",{id:"invalidate-inputs-deprecated"},"Invalidate Inputs (deprecated)"),(0,i.kt)("admonition",{title:"Deprecated",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This has been deprecated in favor of ",(0,i.kt)("a",{parentName:"p",href:"#invalidate-scenes"},"Invalidate Scenes")," or ",(0,i.kt)("a",{parentName:"p",href:"#deleting-inputs"},"Deleting Inputs"),"\nand will be removed in the near future.")),(0,i.kt)("p",null,"Invalidation of an input means that it will be removed for all annotation types. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/kognic-io/annotation_types"},"Annotation Types"),"\non how to remove a specific annotation types for an input."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from kognic.io.model.input.invalidated_reason_input import InvalidatedReasonInput\n\ninvalid_uuids = ["0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3", "37d9dda4-3a29-4fcb-8a71-6bf16d5a9c36"]\nreason = InvalidatedReasonInput.BAD_CONTENT\nclient.input.invalidate_inputs(invalid_uuids, reason)\n')),(0,i.kt)("p",null,"If issues are detected upstream related to inputs created, it is possible to invalidate inputs.\nInvalidated inputs will not produce annotations and any completed annotations of the input will be invalidated."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#invalidate-scenes"},"Invalidate Scenes")," for more information about invalidation reasons."),(0,i.kt)("h2",{id:"creating-multiple-inputs-with-one-call"},"Creating Multiple Inputs With One Call"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This feature is new in version 1.1.9")),(0,i.kt)("p",null,"Since the input creation process is asynchronous, it is sometimes useful to wait for the inputs to be created before continuing.\nIn order to do this, we provide a wrapper function ",(0,i.kt)("inlineCode",{parentName:"p"},"create_inputs")," which can create multiple scenes and inputs,\nwait for them to be created (or failed) and yield the results. The function will block until it has a result to yield\nor all of the inputs have completed in one way or another. The function takes a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"SceneWithPreannotation"),"\n(a new wrapper object containing a scene and optionally a pre-annotation) along with the normal input creation parameters. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from kognic.io.tools.input_creation import create_inputs, SceneWithPreAnnotation, InputCreationStatus\nfrom kognic.io.model.scene import LidarsAndCamerasSequence\nfrom kognic.openlabel.models import OpenLabelAnnotation\n\n\nscenes_with_pre_annotations: List[SceneWithPreAnnotation] = [\n   SceneWithPreAnnotation(\n      scene=LidarsAndCamerasSequence(...), \n      preannotation=OpenLabelAnnotation(...) # Optional\n   ),\n   ...\n]\n\nfor input_result in create_inputs(client, scenes_with_pre_annotations, "project-identifier", batch="batch-identifier"):\n    # Do something with the result\n    if input_result.status == InputCreationStatus.CREATED:\n        print(f"Input {input_result.external_id} was created, got uuid {input_result.input_uuid}")\n    elif input_result.status == InputCreationStatus.FAILED:\n        print(f"Input {input_result.external_id} failed to be created at stage {input_result.error.stage} with error {input_result.error.message}")\n    else:\n        print(f"Input {input_result.external_id} is in status {input_result.status}")\n')),(0,i.kt)("p",null,"Note that the functions also accepts the parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"wait_timeout")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sleep_time")," which can be used to control the\nwait-behavior. The ",(0,i.kt)("inlineCode",{parentName:"p"},"wait_timeout")," parameter specifies the maximum time to wait for the inputs to be created/failed, while\n",(0,i.kt)("inlineCode",{parentName:"p"},"sleep_time")," specifies the time to sleep between each check. Units are in seconds. The time it takes for inputs to be created\ndepends on their size and the number of inputs to be created so the ",(0,i.kt)("inlineCode",{parentName:"p"},"wait_timeout")," should be set accordingly.\nThe default value is 30 minutes, starting from the time when all scene jobs have been committed."),(0,i.kt)("h2",{id:"waiting-for-scene-creation"},"Waiting for Scene Creation"),(0,i.kt)("p",null,"It can sometimes be useful to wait for a scene to be created before continuing. This can be done by using below example in utils.py"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/utils.py\n")))}d.isMDXComponent=!0}}]);