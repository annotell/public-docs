"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[9918],{8261:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(4848),s=t(8453);const r={title:"Working with Scenes & Inputs"},c=void 0,a={id:"kognic-io/working_with_scenes_and_inputs",title:"Working with Scenes & Inputs",description:"For detailed information about different scene modalities, check the Scene Types section.",source:"@site/docs/kognic-io/working_with_scenes_and_inputs.md",sourceDirName:"kognic-io",slug:"/kognic-io/working_with_scenes_and_inputs",permalink:"/docs/kognic-io/working_with_scenes_and_inputs",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/kognic-io/working_with_scenes_and_inputs.md",tags:[],version:"current",frontMatter:{title:"Working with Scenes & Inputs"},sidebar:"docs",previous:{title:"Scene Feature Flags",permalink:"/docs/kognic-io/feature_flags"},next:{title:"Supported file formats",permalink:"/docs/kognic-io/file_formats"}},o={},d=[{value:"Creating Scenes",id:"creating-scenes",level:2},{value:"Scene Status",id:"scene-status",level:3},{value:"Creating Inputs from Scene",id:"creating-inputs-from-scene",level:2},{value:"Creating Inputs Directly",id:"creating-inputs-directly",level:2},{value:"List Scenes",id:"list-scenes",level:2},{value:"Response",id:"response",level:3},{value:"List Inputs",id:"list-inputs",level:2},{value:"Response",id:"response-1",level:3},{value:"Invalidate Scenes",id:"invalidate-scenes",level:2},{value:"Deleting Inputs",id:"deleting-inputs",level:2},{value:"Creating Multiple Inputs With One Call",id:"creating-multiple-inputs-with-one-call",level:2},{value:"Waiting for Scene Creation",id:"waiting-for-scene-creation",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"For detailed information about different scene modalities, check the Scene Types section."})}),"\n",(0,i.jsx)(n.admonition,{title:"Kognic Users",type:"tip",children:(0,i.jsxs)(n.p,{children:["As a Kognic user, it is possible to specify ",(0,i.jsx)(n.code,{children:"client_organization_id"})," to ",(0,i.jsx)(n.code,{children:"KognicIOClient"})," constructor to create scenes on behalf of a client organization"]})}),"\n",(0,i.jsx)(n.h2,{id:"creating-scenes",children:"Creating Scenes"}),"\n",(0,i.jsxs)(n.p,{children:["Each scene resource has a ",(0,i.jsx)(n.code,{children:"create"})," method that can be used to create a scene of the corresponding type. It takes the\ncorresponding scene model as input, so for example to create a ",(0,i.jsx)(n.code,{children:"Cameras"})," scene you would do the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from kognic.io.model.scene.cameras import Cameras\n\nscene = Cameras(...)\ncreated_scene = client.cameras.create(cameras_scene)\nscene_uuid = created_scene.uuid\n"})}),"\n",(0,i.jsxs)(n.p,{children:["As you can see, the ",(0,i.jsx)(n.code,{children:"create"})," method returns the associated ",(0,i.jsx)(n.code,{children:"scene_uuid"}),", which can later be used to work with the scene.\nAt this point all files have been uploaded to the Kognic Platform and the scene starts to be pre-processed. When\npre-processing is finished, we say that the scene has been created. Refer to the ",(0,i.jsx)(n.a,{href:"#scene-status",children:"Scene Status"})," section\nfor more information about the different scene statuses."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that it is often useful to use the ",(0,i.jsx)(n.code,{children:"dryrun"})," parameter when experimenting. This will validate the scene format\nbut not create it."]}),"\n",(0,i.jsx)(n.h3,{id:"scene-status",children:"Scene Status"}),"\n",(0,i.jsx)(n.p,{children:"Once a scene has been uploaded, it might be preprocessed before being made available in the platform.\nDuring this process, the status property of a scene can be used to keep track of progress."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Status"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pending"}),(0,i.jsx)(n.td,{children:"Scene has been validated but the server is waiting for the associated resources to be uploaded"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"processing"}),(0,i.jsx)(n.td,{children:"Associated data has been uploaded and is currently being processed by the Kognic Platform, potentially performing conversion of file formats"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"created"}),(0,i.jsx)(n.td,{children:"Scene is created and available in the platform"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"failed"}),(0,i.jsx)(n.td,{children:"Conversion of scene failed. More information can be found in the associated error message"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["invalidated",":broken-input"]}),(0,i.jsx)(n.td,{children:"Scene was invalidated since it did not load"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["invalidated",":duplicate"]}),(0,i.jsx)(n.td,{children:"Scene was invalidated due to being uploaded several times"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["invalidated",":incorrectly-created"]}),(0,i.jsx)(n.td,{children:"Scene was invalidated because it was incorrectly created"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"creating-inputs-from-scene",children:"Creating Inputs from Scene"}),"\n",(0,i.jsxs)(n.p,{children:["Once a scene has been created, it can be used to create inputs which is done by associating it with a ",(0,i.jsx)(n.a,{href:"/docs/kognic-io/project",children:"project"}),"\nand an ",(0,i.jsx)(n.a,{href:"/docs/kognic-io/project#batch",children:"input batch"}),". Consider the following project setup:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"organization # root for projects and scenes\n\u2514\u2500\u2500 projects\n   \u251c\u2500\u2500 project-a\n       \u251c\u2500\u2500 batch-1 - completed\n       \u251c\u2500\u2500 batch-2 - open\n           \u251c\u2500\u2500 request-1\n              \u251c\u2500\u2500 input 9c08f7a3-3216-4bd6-a41a-1dda6f66f53e \u2013 using scene 0edb\n              \u251c\u2500\u2500 input ddf548e3-9806-433c-afb5-fb951a721462 - using scene 37d9\n              \u2514\u2500\u2500 ...\n           \u2514\u2500\u2500 request-2   \n       \u2514\u2500\u2500 batch-3 - pending\n   \u2514\u2500\u2500 project-b\n       \u251c\u2500\u2500 batch-1\n       \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 scenes\n   \u251c\u2500\u2500 scene 0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3\n   \u251c\u2500\u2500 scene 37d9dda4-3a29-4fcb-8a71-6bf16d5a9c36\n   \u2514\u2500\u2500 ...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"create_from_scene"})," method is used to create inputs from a scene. The method takes the scene uuid as input along\nwith annotation information such as project, batch and annotation types. For example, to create inputs in ",(0,i.jsx)(n.code,{children:"project-a"}),"\nand ",(0,i.jsx)(n.code,{children:"batch-2"}),", you would do the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'client.cameras.create_from_scene(\n   scene_uuid="0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3", \n   project="project-a", # Important: this is the external id and not the title\n   batch="batch-2" # Important: this is the external id and not the title\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The above code will create inputs for the scene in all requests in batch ",(0,i.jsx)(n.code,{children:"batch-2"})," for project ",(0,i.jsx)(n.code,{children:"project-a"}),". If the ",(0,i.jsx)(n.code,{children:"batch"}),"\nparameter is omitted, the latest open batch for the project will be used. You can later reuse the same scene to create\ninputs for other projects and batches."]}),"\n",(0,i.jsx)(n.h2,{id:"creating-inputs-directly",children:"Creating Inputs Directly"}),"\n",(0,i.jsxs)(n.p,{children:["It is often useful to create inputs directly instead of the 2-step process described above. To do this, you can simply\npass the annotation information directly into the ",(0,i.jsx)(n.code,{children:"create"})," method of the corresponding scene type. For example, to create\nan input in ",(0,i.jsx)(n.code,{children:"project-a"})," and ",(0,i.jsx)(n.code,{children:"batch-2"}),", you would do the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'client.cameras_sequence.create(\n   ..., \n   project="project-a", # Important: this is the external id and not the title\n   batch="batch-2" # Important: this is the external id and not the title\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This would trigger the scene creation process, and once the scene is created, inputs are created in all requests in\nthe given batch. If the ",(0,i.jsx)(n.code,{children:"batch"})," parameter is omitted, the latest open batch for the project will be used. We also provide\na wrapper function ",(0,i.jsx)(n.code,{children:"create_inputs"})," to help with this process, see ",(0,i.jsx)(n.a,{href:"#creating-multiple-inputs-with-one-call",children:"Creating Multiple Inputs With One Call"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"list-scenes",children:"List Scenes"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This feature is new in version 1.6.0"})}),"\n",(0,i.jsx)(n.p,{children:"It can be useful to list scenes that have been uploaded to the Kognic Platform. One example is to check the status during\nscene creation. Scenes can be retrieved in the following way:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'scene_uuids = ["cca60a67-cb68-4645-8bae-00c6e6415555", "cc8776d0-f537-4094-8b11-8c2111741e2f"]\nclient.scene.get_scenes_by_uuids(scene_uuids=scene_uuids)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(n.p,{children:["The response is a list of ",(0,i.jsx)(n.code,{children:"Scene"})," objects containing the following properties"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"uuid"}),(0,i.jsx)(n.td,{children:"UUID used to identify the scene within the Kognic Platform"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"external_id"}),(0,i.jsx)(n.td,{children:"External ID supplied during scene creation"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scene_type"}),(0,i.jsxs)(n.td,{children:["Type of scene (see ",(0,i.jsx)(n.a,{href:"/docs/key-concepts#scene-types",children:"Scene Types"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"status"}),(0,i.jsxs)(n.td,{children:["Scene status (see ",(0,i.jsx)(n.a,{href:"#scene-status",children:"Scene Status"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"created"}),(0,i.jsx)(n.td,{children:"When the scene was created"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"calibration_id"}),(0,i.jsx)(n.td,{children:"Calibration used for the scene (if any)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"view_link"}),(0,i.jsx)(n.td,{children:"A url to view the scene in the Kognic Platform"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"error_message"}),(0,i.jsxs)(n.td,{children:["If there is an error during scene creation the error message will be included, otherwise it's ",(0,i.jsx)(n.code,{children:"None"})]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"list-inputs",children:"List Inputs"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This feature is new in version 1.7.0"})}),"\n",(0,i.jsxs)(n.p,{children:["Inputs can be queried from the platform using the ",(0,i.jsx)(n.code,{children:"query_inputs"})," method, which can be used in the following way"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:"reference",children:"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/query_inputs.py#L7-L10\n"})}),"\n",(0,i.jsx)(n.p,{children:"Additional filter parameters for querying inputs are listed below."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"project"}),(0,i.jsx)(n.td,{children:"Project identifier to filter by"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"batch"}),(0,i.jsx)(n.td,{children:"Which batch in the project to return inputs for"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scene_uuids"}),(0,i.jsx)(n.td,{children:"Return inputs using scenes matching the supplied uuids"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"external_ids"}),(0,i.jsxs)(n.td,{children:["Return inputs using scenes matching the supplied ",(0,i.jsx)(n.code,{children:"external_ids"})]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,i.jsxs)(n.p,{children:["The response is a list of ",(0,i.jsx)(n.code,{children:"Input"})," objects containing the following properties"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"uuid"}),(0,i.jsx)(n.td,{children:"ID used to identify the input within the Kognic Platform"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scene_uuid"}),(0,i.jsx)(n.td,{children:"ID used to identify the scene that the input is using"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"request_uid"}),(0,i.jsx)(n.td,{children:"ID used to identify the request that the input belongs to"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"view_link"}),(0,i.jsx)(n.td,{children:"A url to view the input in the Kognic Platform"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"invalidate-scenes",children:"Invalidate Scenes"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This feature is new in version 1.6.0"})}),"\n",(0,i.jsxs)(n.p,{children:["If issues are detected upstream related to scenes created, it is possible to invalidate them. This could be useful during\ndevelopment or if issues are detected with the data. Invalidating a scene means that it will be removed from requests,\nmeaning that ",(0,i.jsx)(n.strong,{children:"all"})," inputs using the scene will be deleted. In turn invalidated scenes will not produce annotations\nand any completed annotations of the scene will be removed. There is no way to undo this operation so use with caution."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from kognic.io.model.scene.invalidated_reason import SceneInvalidatedReason\n\nscene_uuids = ["0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3", "37d9dda4-3a29-4fcb-8a71-6bf16d5a9c36"]\nreason = SceneInvalidatedReason.BAD_CONTENT\nclient.scene.invalidate_scenes(scene_uuids, reason)\n'})}),"\n",(0,i.jsx)(n.p,{children:"The following reasons are available when invalidating scenes:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Reason"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bad-content"}),(0,i.jsx)(n.td,{children:"Scene does not load, or has erroneous metadata such as invalid calibration"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"duplicate"}),(0,i.jsx)(n.td,{children:"If the same scene has been created several times"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"incorrectly-created"}),(0,i.jsx)(n.td,{children:"If the scene was unintentionally created."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"deleting-inputs",children:"Deleting Inputs"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This feature is new in version 1.6.0"})}),"\n",(0,i.jsx)(n.p,{children:"If issues are detected upstream related to inputs created, it is possible to delete them. This could be useful when\nthe issues are related to the input itself and not the scene. One example would be if there are two inputs for a lidars\nand cameras scene, one where we want to annotate in 2D/3D and one where we only want to annotate in 2D. If the issue\nis an erroneous calibration the 2D input can still be used while the 2D/3D input should be deleted."}),"\n",(0,i.jsx)(n.p,{children:"Deleting an input means that no annotations will be produced for it and any completed annotations of the input will be\nremoved. There is no way to undo this operation so use with caution."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'input_uuid = "9c08f7a3-3216-4bd6-a41a-1dda6f66f53e"\nclient.input.delete_input(input_uuid)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"creating-multiple-inputs-with-one-call",children:"Creating Multiple Inputs With One Call"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This feature is new in version 1.1.9"})}),"\n",(0,i.jsxs)(n.p,{children:["Since the input creation process is asynchronous, it is sometimes useful to wait for the inputs to be created before continuing.\nIn order to do this, we provide a wrapper function ",(0,i.jsx)(n.code,{children:"create_inputs"})," which can create multiple scenes and inputs,\nwait for them to be created (or failed) and yield the results. The function will block until it has a result to yield\nor all of the inputs have completed in one way or another. The function takes a list of ",(0,i.jsx)(n.code,{children:"SceneWithPreannotation"}),"\n(a new wrapper object containing a scene and optionally a pre-annotation) along with the normal input creation parameters."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from kognic.io.tools.input_creation import create_inputs, SceneWithPreAnnotation, InputCreationStatus\nfrom kognic.io.model.scene import LidarsAndCamerasSequence\nfrom kognic.openlabel.models import OpenLabelAnnotation\n\n\nscenes_with_pre_annotations: List[SceneWithPreAnnotation] = [\n   SceneWithPreAnnotation(\n      scene=LidarsAndCamerasSequence(...), \n      preannotation=OpenLabelAnnotation(...) # Optional\n   ),\n   ...\n]\n\nfor input_result in create_inputs(client, scenes_with_pre_annotations, "project-identifier", batch="batch-identifier"):\n    # Do something with the result\n    if input_result.status == InputCreationStatus.CREATED:\n        print(f"Input {input_result.external_id} was created, got uuid {input_result.input_uuid}")\n    elif input_result.status == InputCreationStatus.FAILED:\n        print(f"Input {input_result.external_id} failed to be created at stage {input_result.error.stage} with error {input_result.error.message}")\n    else:\n        print(f"Input {input_result.external_id} is in status {input_result.status}")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Note that the functions also accepts the parameters ",(0,i.jsx)(n.code,{children:"wait_timeout"})," and ",(0,i.jsx)(n.code,{children:"sleep_time"})," which can be used to control the\nwait-behavior. The ",(0,i.jsx)(n.code,{children:"wait_timeout"})," parameter specifies the maximum time to wait for the inputs to be created/failed, while\n",(0,i.jsx)(n.code,{children:"sleep_time"})," specifies the time to sleep between each check. Units are in seconds. The time it takes for inputs to be created\ndepends on their size and the number of inputs to be created so the ",(0,i.jsx)(n.code,{children:"wait_timeout"})," should be set accordingly.\nThe default value is 30 minutes, starting from the time when all scene jobs have been committed."]}),"\n",(0,i.jsx)(n.h2,{id:"waiting-for-scene-creation",children:"Waiting for Scene Creation"}),"\n",(0,i.jsx)(n.p,{children:"It can sometimes be useful to wait for a scene to be created before continuing. This can be done by using below example in utils.py"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:"reference",children:"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/utils.py\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);