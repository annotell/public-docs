"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[4383],{761:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var t=o(4848),a=o(8453);const i={title:"Downloading Annotations"},s=void 0,c={id:"kognic-io/annotations",title:"Downloading Annotations",description:"Annotations are made available for each scene and annotation type as soon as they are quality assured",source:"@site/docs/kognic-io/annotations.md",sourceDirName:"kognic-io",slug:"/kognic-io/annotations",permalink:"/docs/kognic-io/annotations",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/annotations.md",tags:[],version:"current",frontMatter:{title:"Downloading Annotations"},sidebar:"docs",previous:{title:"Pre-annotations",permalink:"/docs/kognic-io/pre_annotations"},next:{title:"Working with Scenes & Inputs",permalink:"/docs/kognic-io/working_with_scenes_and_inputs"}},l={},r=[{value:"v1.1.x",id:"v11x",level:2},{value:"Get Single Annotation",id:"get-single-annotation",level:3},{value:"Using scene and annotation type",id:"using-scene-and-annotation-type",level:4},{value:"Get Annotations for a Project or Batch",id:"get-annotations-for-a-project-or-batch",level:3},{value:"Common use cases",id:"common-use-cases",level:2},{value:"Download and convert a single annotation",id:"download-and-convert-a-single-annotation",level:3},{value:"Download and save annotations to a zip file",id:"download-and-save-annotations-to-a-zip-file",level:3}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["Annotations are made available for each ",(0,t.jsx)(e.a,{href:"overview",children:"scene"})," and ",(0,t.jsx)(e.a,{href:"annotation_types",children:"annotation type"})," as soon as they are quality assured\nby the Kognic platform. This section describes how these annotations can be downloaded."]}),"\n",(0,t.jsx)(e.h2,{id:"v11x",children:"v1.1.x"}),"\n",(0,t.jsxs)(e.p,{children:["This section describes how you can fetch annotations on the ",(0,t.jsx)(e.a,{href:"../openlabel/openlabel-format",children:"OpenLABEL format"}),". These\nannotations are automatically available as soon as they are finished and can be downloaded either for an entire\nproject/batch or individually via the methods listed below. All methods return either a single ",(0,t.jsx)(e.code,{children:"Annotation"})," object or\na generator yielding ",(0,t.jsx)(e.code,{children:"Annotation"})," objects, which contains identifiers as well as a dictionary containing the OpenLABEL\njson:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Annotation(BaseSerializer):\n    scene_uuid: str\n    annotation_type: str\n    created: datetime\n    content: Optional[Dict]\n"})}),"\n",(0,t.jsxs)(e.p,{children:["The OpenLABEL json can be used as it is or be converted into a pythonic object using the ",(0,t.jsx)(e.code,{children:"kognic-openlabel"})," library, described\n",(0,t.jsx)(e.a,{href:"../openlabel/python-client",children:"here"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"get-single-annotation",children:"Get Single Annotation"}),"\n",(0,t.jsx)(e.h4,{id:"using-scene-and-annotation-type",children:"Using scene and annotation type"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:"reference",children:"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/get_annotation.py#L7-L10\n"})}),"\n",(0,t.jsxs)(e.p,{children:["This method returns a single ",(0,t.jsx)(e.code,{children:"Annotation"})," object, containing the OpenLABEL json, using a scene uuid and an annotation type."]}),"\n",(0,t.jsx)(e.h3,{id:"get-annotations-for-a-project-or-batch",children:"Get Annotations for a Project or Batch"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:"reference",children:"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/get_project_annotations.py#L8-L23\n"})}),"\n",(0,t.jsxs)(e.p,{children:["This example fetches annotations for an entire project or batch. The ",(0,t.jsx)(e.code,{children:"run()"})," method returns a generator which will yield ",(0,t.jsx)(e.code,{children:"Annotation"})," objects for all finished annotations\n, for the given ",(0,t.jsx)(e.code,{children:"project"}),", ",(0,t.jsx)(e.code,{children:"batch"})," and ",(0,t.jsx)(e.code,{children:"annotation_type"}),", and in the end prints all of these annotations."]}),"\n",(0,t.jsx)(e.h2,{id:"common-use-cases",children:"Common use cases"}),"\n",(0,t.jsx)(e.h3,{id:"download-and-convert-a-single-annotation",children:"Download and convert a single annotation"}),"\n",(0,t.jsxs)(e.p,{children:["This example shows a common workflow where an annotation is fetched, parsed into an ",(0,t.jsx)(e.code,{children:"OpenLabelAnnotation"})," and then\nconverted into a custom annotation format."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"from kognic.io.client import KognicIOClient\nfrom kognic.openlabel.models import OpenLabelAnnotation\nfrom pydantic import BaseModel\n\nclass CustomAnnotationFormat(BaseModel):\n    ...\n\n    @staticmethod\n    def from_openlabel(openlabel_annotation: OpenLabelAnnotation):\n        pass\n\n\nclient = KognicIOClient()\n\nannotation = client.annotation.get_annotation(\n    scene_uuid='<scene-uuid-identifier>',\n    annotation_type='<annotation-type>'\n)\n\nopenlabel_annotation = OpenLabelAnnotation.parse_obj(annotation.content) # Create pydantic object\nconverted_annotation = CustomAnnotationFormat.from_openlabel(openlabel_annotation=openlabel_annotation) # Convert annotation\nconverted_dict = converted_annotation.dict(exclude_none=True) # Serialize to dict (or json)\n"})}),"\n",(0,t.jsx)(e.h3,{id:"download-and-save-annotations-to-a-zip-file",children:"Download and save annotations to a zip file"}),"\n",(0,t.jsxs)(e.p,{children:["In this example, all annotations are fetch for a project batch and then converted saved into a zip file. Note that the\nsave_file must have the extension ",(0,t.jsx)(e.code,{children:".zip"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import io, json, zipfile\nimport kognic.io.client as KognicIOClient\n\nclient = KognicIOClient()\n\nzip_buffer = io.BytesIO()\nwith zipfile.ZipFile(zip_buffer, \'a\', zipfile.ZIP_DEFLATED, False) as zip_file:\n    for annotation in client.annotation.get_project_annotations(\n            project="Project-identifier",\n            batch="Batch-identifier",\n            annotation_type="Annotation-Type-identifier"\n    ):\n        encoded_annotation = io.BytesIO(json.dumps(annotation.content, indent=4).encode())\n        zip_file.writestr(f"{annotation.scene_uuid}.json", encoded_annotation.getvalue())\n\nwith open(\'path/to/annotations.zip\', \'wb\') as f:\n    f.write(zip_buffer.getvalue())\n'})})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>s,x:()=>c});var t=o(6540);const a={},i=t.createContext(a);function s(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);