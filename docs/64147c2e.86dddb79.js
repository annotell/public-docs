(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{115:function(n,e,t){"use strict";t.r(e),t.d(e,"MDXContext",(function(){return s})),t.d(e,"MDXProvider",(function(){return u})),t.d(e,"mdx",(function(){return h})),t.d(e,"useMDXComponents",(function(){return m})),t.d(e,"withMDXComponents",(function(){return d}));var o=t(0),a=t.n(o);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=a.a.createContext({}),d=function(n){return function(e){var t=m(e.components);return a.a.createElement(n,r({},e,{components:t}))}},m=function(n){var e=a.a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},u=function(n){var e=m(n.components);return a.a.createElement(s.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},b=a.a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,r=n.parentName,c=p(n,["components","mdxType","originalType","parentName"]),s=m(t),d=o,u=s["".concat(r,".").concat(d)]||s[d]||f[d]||i;return t?a.a.createElement(u,l(l({ref:e},c),{},{components:t})):a.a.createElement(u,l({ref:e},c))}));function h(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,r=new Array(i);r[0]=b;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c.mdxType="string"==typeof n?n:o,r[1]=c;for(var p=2;p<i;p++)r[p]=t[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},42:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return r})),t.d(e,"metadata",(function(){return c})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return s}));var o=t(3),a=t(8),i=(t(0),t(115)),r={title:"Downloading Annotations"},c={unversionedId:"kognic-io/annotations",id:"kognic-io/annotations",isDocsHomePage:!1,title:"Downloading Annotations",description:"Annotations are made available for each input and annotation type as soon as they are quality assured by the Kognic platform. Information about the format can be found in the Key Concepts section.",source:"@site/docs/kognic-io/annotations.md",slug:"/kognic-io/annotations",permalink:"/api/docs/kognic-io/annotations",editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/annotations.md",version:"current",sidebar:"docs",previous:{title:"Input Feature Flags",permalink:"/api/docs/kognic-io/feature_flags"},next:{title:"Calibration",permalink:"/api/docs/kognic-io/calibration"}},l=[{value:"v1.1.x",id:"v11x",children:[{value:"Get Single Annotation",id:"get-single-annotation",children:[]},{value:"Get Annotations for a Project or Batch",id:"get-annotations-for-a-project-or-batch",children:[]}]},{value:"Common use cases",id:"common-use-cases",children:[{value:"Download and convert a single annotation",id:"download-and-convert-a-single-annotation",children:[]},{value:"Download and save annotations to a zip file",id:"download-and-save-annotations-to-a-zip-file",children:[]}]}],p={rightToc:l};function s(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(i.mdx)("wrapper",Object(o.default)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Annotations are made available for each ",Object(i.mdx)("a",{parentName:"p",href:"overview"},"input")," and ",Object(i.mdx)("a",{parentName:"p",href:"annotation_types"},"annotation type")," as soon as they are quality assured by the Kognic platform. Information about the format can be found in the ",Object(i.mdx)("a",{parentName:"p",href:"/api/docs/key_concepts#annotation"},"Key Concepts")," section."),Object(i.mdx)("h2",{id:"v11x"},"v1.1.x"),Object(i.mdx)("p",null,"This section describes how you can fetch annotations on the ",Object(i.mdx)("a",{parentName:"p",href:"../openlabel/openlabel-format"},"OpenLABEL format"),". These\nannotations are automatically available as soon as they are finished and can be downloaded either for an entire\nproject/batch or individually via the methods listed below. All methods return either a single ",Object(i.mdx)("inlineCode",{parentName:"p"},"Annotation")," object or\na generator yielding ",Object(i.mdx)("inlineCode",{parentName:"p"},"Annotation")," objects, which contains indentifiers as well as a dictionary containing the OpenLABEL\njson:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/kognic/io/model/annotation/client_annotation.py#L7-L13\n")),Object(i.mdx)("p",null,"As the ",Object(i.mdx)("inlineCode",{parentName:"p"},"Annotation")," model shows, an annotation is unique for each input and annotation-type.\nThe OpenLABEL json can be used as it is or be converted into a pythonic object using the ",Object(i.mdx)("inlineCode",{parentName:"p"},"kognic-openlabel")," library, described\n",Object(i.mdx)("a",{parentName:"p",href:"../openlabel/python-client"},"here"),"."),Object(i.mdx)("h3",{id:"get-single-annotation"},"Get Single Annotation"),Object(i.mdx)("h4",{id:"using-input-and-annotation-type"},"Using input and annotation type"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/get_annotation.py#L7-L10\n")),Object(i.mdx)("p",null,"This method returns a single ",Object(i.mdx)("inlineCode",{parentName:"p"},"Annotation")," object, containing the OpenLABEL json, using an input uuid and an annotation type."),Object(i.mdx)("h3",{id:"get-annotations-for-a-project-or-batch"},"Get Annotations for a Project or Batch"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/get_project_annotations.py#L8-L23\n")),Object(i.mdx)("p",null,"This example fetches annotations for an entire project or batch. The ",Object(i.mdx)("inlineCode",{parentName:"p"},"run()")," method returns a generator which will yield ",Object(i.mdx)("inlineCode",{parentName:"p"},"Annotation")," objects for all finished annotations\n, for the given ",Object(i.mdx)("inlineCode",{parentName:"p"},"project"),", ",Object(i.mdx)("inlineCode",{parentName:"p"},"batch")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"annotation_type"),", and in the end prints all of these annotations."),Object(i.mdx)("h2",{id:"common-use-cases"},"Common use cases"),Object(i.mdx)("h3",{id:"download-and-convert-a-single-annotation"},"Download and convert a single annotation"),Object(i.mdx)("p",null,"This example shows a common workflow where an annotation is fetched, parsed into an ",Object(i.mdx)("inlineCode",{parentName:"p"},"OpenLabelAnnotation")," and then\nconverted into a custom annotation format."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python"},"from kognic.io.client import KognicIOClient\nfrom kognic.openlabel.models import OpenLabelAnnotation\nfrom pydantic import BaseModel\n\nclass CustomAnnotationFormat(BaseModel):\n    ...\n\n    @staticmethod\n    def from_openlabel(openlabel_annotation: OpenLabelAnnotation):\n        pass\n\n\nclient = KognicIOClient()\n\nannotation = client.annotation.get_annotation(\n    input_uuid='<input-uuid-identifier>',\n    annotation_type='<annotation-type>'\n)\n\nopenlabel_annotation = OpenLabelAnnotation.parse_obj(annotation.content) # Create pydantic object\nconverted_annotation = CustomAnnotationFormat.from_openlabel(openlabel_annotation=openlabel_annotation) # Convert annotation\nconverted_dict = converted_annotation.dict(exclude_none=True) # Serialize to dict (or json)\n")),Object(i.mdx)("h3",{id:"download-and-save-annotations-to-a-zip-file"},"Download and save annotations to a zip file"),Object(i.mdx)("p",null,"In this example, all annotations are fetch for a project batch and then converted saved into a zip file. Note that the\nsave_file must have the extension ",Object(i.mdx)("inlineCode",{parentName:"p"},".zip"),"."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python"},'import io, json, zipfile\nimport kognic.io.client as KognicIOClient\n\nclient = KognicIOClient()\n\nzip_buffer = io.BytesIO()\nwith zipfile.ZipFile(zip_buffer, \'a\', zipfile.ZIP_DEFLATED, False) as zip_file:\n    for annotation in client.annotation.get_project_annotations(\n            project="Project-identifier",\n            batch="Batch-identifier",\n            annotation_type="Annotation-Type-identifier"\n    ):\n        encoded_annotation = io.BytesIO(json.dumps(annotation.content, indent=4).encode())\n        zip_file.writestr(f"{annotation.input_uuid}.json", encoded_annotation.getvalue())\n\nwith open(\'path/to/annotations.zip\', \'wb\') as f:\n    f.write(zip_buffer.getvalue())\n')))}s.isMDXComponent=!0}}]);