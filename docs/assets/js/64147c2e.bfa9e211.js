"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[523],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>f});var o=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=o.createContext({}),p=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},c=function(n){var e=p(n.components);return o.createElement(s.Provider,{value:e},n.children)},d="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,s=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(f,r(r({ref:e},c),{},{components:t})):o.createElement(f,r({ref:e},c))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[d]="string"==typeof n?n:a,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5700:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(7462),a=(t(7294),t(3905));const i={title:"Downloading Annotations"},r=void 0,l={unversionedId:"kognic-io/annotations",id:"kognic-io/annotations",title:"Downloading Annotations",description:"Annotations are made available for each input and annotation type as soon as they are quality assured by the Kognic platform. Information about the format can be found in the Key Concepts section.",source:"@site/docs/kognic-io/annotations.md",sourceDirName:"kognic-io",slug:"/kognic-io/annotations",permalink:"/docs/kognic-io/annotations",draft:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/annotations.md",tags:[],version:"current",frontMatter:{title:"Downloading Annotations"},sidebar:"docs",previous:{title:"Input Feature Flags",permalink:"/docs/kognic-io/feature_flags"},next:{title:"Calibration",permalink:"/docs/kognic-io/calibration"}},s={},p=[{value:"v1.1.x",id:"v11x",level:2},{value:"Get Single Annotation",id:"get-single-annotation",level:3},{value:"Using input and annotation type",id:"using-input-and-annotation-type",level:4},{value:"Get Annotations for a Project or Batch",id:"get-annotations-for-a-project-or-batch",level:3},{value:"Common use cases",id:"common-use-cases",level:2},{value:"Download and convert a single annotation",id:"download-and-convert-a-single-annotation",level:3},{value:"Download and save annotations to a zip file",id:"download-and-save-annotations-to-a-zip-file",level:3}],c={toc:p};function d(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Annotations are made available for each ",(0,a.kt)("a",{parentName:"p",href:"overview"},"input")," and ",(0,a.kt)("a",{parentName:"p",href:"annotation_types"},"annotation type")," as soon as they are quality assured by the Kognic platform. Information about the format can be found in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/#annotation"},"Key Concepts")," section."),(0,a.kt)("h2",{id:"v11x"},"v1.1.x"),(0,a.kt)("p",null,"This section describes how you can fetch annotations on the ",(0,a.kt)("a",{parentName:"p",href:"../openlabel/openlabel-format"},"OpenLABEL format"),". These\nannotations are automatically available as soon as they are finished and can be downloaded either for an entire\nproject/batch or individually via the methods listed below. All methods return either a single ",(0,a.kt)("inlineCode",{parentName:"p"},"Annotation")," object or\na generator yielding ",(0,a.kt)("inlineCode",{parentName:"p"},"Annotation")," objects, which contains indentifiers as well as a dictionary containing the OpenLABEL\njson:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/kognic/io/model/annotation/client_annotation.py#L7-L13\n")),(0,a.kt)("p",null,"As the ",(0,a.kt)("inlineCode",{parentName:"p"},"Annotation")," model shows, an annotation is unique for each input and annotation-type.\nThe OpenLABEL json can be used as it is or be converted into a pythonic object using the ",(0,a.kt)("inlineCode",{parentName:"p"},"kognic-openlabel")," library, described\n",(0,a.kt)("a",{parentName:"p",href:"../openlabel/python-client"},"here"),"."),(0,a.kt)("h3",{id:"get-single-annotation"},"Get Single Annotation"),(0,a.kt)("h4",{id:"using-input-and-annotation-type"},"Using input and annotation type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/get_annotation.py#L7-L10\n")),(0,a.kt)("p",null,"This method returns a single ",(0,a.kt)("inlineCode",{parentName:"p"},"Annotation")," object, containing the OpenLABEL json, using an input uuid and an annotation type."),(0,a.kt)("h3",{id:"get-annotations-for-a-project-or-batch"},"Get Annotations for a Project or Batch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/get_project_annotations.py#L8-L23\n")),(0,a.kt)("p",null,"This example fetches annotations for an entire project or batch. The ",(0,a.kt)("inlineCode",{parentName:"p"},"run()")," method returns a generator which will yield ",(0,a.kt)("inlineCode",{parentName:"p"},"Annotation")," objects for all finished annotations\n, for the given ",(0,a.kt)("inlineCode",{parentName:"p"},"project"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"annotation_type"),", and in the end prints all of these annotations."),(0,a.kt)("h2",{id:"common-use-cases"},"Common use cases"),(0,a.kt)("h3",{id:"download-and-convert-a-single-annotation"},"Download and convert a single annotation"),(0,a.kt)("p",null,"This example shows a common workflow where an annotation is fetched, parsed into an ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenLabelAnnotation")," and then\nconverted into a custom annotation format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kognic.io.client import KognicIOClient\nfrom kognic.openlabel.models import OpenLabelAnnotation\nfrom pydantic import BaseModel\n\nclass CustomAnnotationFormat(BaseModel):\n    ...\n\n    @staticmethod\n    def from_openlabel(openlabel_annotation: OpenLabelAnnotation):\n        pass\n\n\nclient = KognicIOClient()\n\nannotation = client.annotation.get_annotation(\n    input_uuid='<input-uuid-identifier>',\n    annotation_type='<annotation-type>'\n)\n\nopenlabel_annotation = OpenLabelAnnotation.parse_obj(annotation.content) # Create pydantic object\nconverted_annotation = CustomAnnotationFormat.from_openlabel(openlabel_annotation=openlabel_annotation) # Convert annotation\nconverted_dict = converted_annotation.dict(exclude_none=True) # Serialize to dict (or json)\n")),(0,a.kt)("h3",{id:"download-and-save-annotations-to-a-zip-file"},"Download and save annotations to a zip file"),(0,a.kt)("p",null,"In this example, all annotations are fetch for a project batch and then converted saved into a zip file. Note that the\nsave_file must have the extension ",(0,a.kt)("inlineCode",{parentName:"p"},".zip"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import io, json, zipfile\nimport kognic.io.client as KognicIOClient\n\nclient = KognicIOClient()\n\nzip_buffer = io.BytesIO()\nwith zipfile.ZipFile(zip_buffer, \'a\', zipfile.ZIP_DEFLATED, False) as zip_file:\n    for annotation in client.annotation.get_project_annotations(\n            project="Project-identifier",\n            batch="Batch-identifier",\n            annotation_type="Annotation-Type-identifier"\n    ):\n        encoded_annotation = io.BytesIO(json.dumps(annotation.content, indent=4).encode())\n        zip_file.writestr(f"{annotation.input_uuid}.json", encoded_annotation.getvalue())\n\nwith open(\'path/to/annotations.zip\', \'wb\') as f:\n    f.write(zip_buffer.getvalue())\n')))}d.isMDXComponent=!0}}]);