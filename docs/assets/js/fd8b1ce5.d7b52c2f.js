"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[178],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>f});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return t?n.createElement(f,o(o({ref:a},d),{},{components:t})):n.createElement(f,o({ref:a},d))}));function f(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4218:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const r={title:"Overview"},o=void 0,s={unversionedId:"kognic-io/overview",id:"kognic-io/overview",title:"Overview",description:"Different types of inputs",source:"@site/docs/kognic-io/overview.md",sourceDirName:"kognic-io",slug:"/kognic-io/overview",permalink:"/docs/kognic-io/overview",draft:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/overview.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"Projects",permalink:"/docs/kognic-io/project"},next:{title:"Annotation Types",permalink:"/docs/kognic-io/annotation_types"}},l={},p=[{value:"Different types of inputs",id:"different-types-of-inputs",level:2},{value:"Sequential vs non-sequential",id:"sequential-vs-non-sequential",level:3},{value:"Input Fields",id:"input-fields",level:2},{value:"External Id",id:"external-id",level:3},{value:"Sensor Specification",id:"sensor-specification",level:3},{value:"Calibration Id",id:"calibration-id",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Frame (non-sequential inputs)",id:"frame-non-sequential-inputs",level:3},{value:"Frames (sequential inputs)",id:"frames-sequential-inputs",level:3},{value:"Image &amp; Pointcloud Resources",id:"image--pointcloud-resources",level:2},{value:"Local File",id:"local-file",level:3},{value:"Data in Memory",id:"data-in-memory",level:3},{value:"Data from Callback",id:"data-from-callback",level:3},{value:"IMU Data",id:"imu-data",level:2},{value:"Input Feature Flags",id:"input-feature-flags",level:2}],d={toc:p};function m(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"different-types-of-inputs"},"Different types of inputs"),(0,i.kt)("p",null,"An Input represents a grouping of sensor data (e.g. camera images, lidar pointclouds) that should be annotated together. Any information necessary to express the relationship between the sensors and their captured data is also present, be it camera resolution, sensor name or the frequency at which the data was recorded at."),(0,i.kt)("p",null,"There are different input types depending on what kind of sensor(s) are used to represent the contents of the input. For example, if we want to create an input only consisting of data from camera sensors then we would use the input type ",(0,i.kt)("inlineCode",{parentName:"p"},"Cameras"),". Similarly, if we want to create an input consisting of lidar sensors and camera sensors then we would use the input type ",(0,i.kt)("inlineCode",{parentName:"p"},"LidarsAndCameras"),". Additionally, inputs can either be ",(0,i.kt)("strong",{parentName:"p"},"sequential")," or ",(0,i.kt)("strong",{parentName:"p"},"non-sequential"),"."),(0,i.kt)("h3",{id:"sequential-vs-non-sequential"},"Sequential vs non-sequential"),(0,i.kt)("p",null,"Sequential inputs represent a ",(0,i.kt)("em",{parentName:"p"},"sequence")," of sensor data, whereas non-sequential inputs only contain a single snapshot of sensor data. The sequential relationship is expressed via a sequence of ",(0,i.kt)("strong",{parentName:"p"},"Frames"),", where each ",(0,i.kt)("strong",{parentName:"p"},"Frame")," object contains information related to what kind of sensor data constitues the frame (e.g. which image and/or point cloud is a part of the Frame) as well as a ",(0,i.kt)("em",{parentName:"p"},"relative timestamp")," that captures where in time (relative to the other frames) the Frame is located."),(0,i.kt)("p",null,"Non-sequential inputs only express a single snapshot of sensor data. As such, these kinds of inputs only contain a single Frame object and do not require any relative timestamp information."),(0,i.kt)("p",null,"Sequential input types are easily identified by the suffix ",(0,i.kt)("inlineCode",{parentName:"p"},"Seq")," present in their name."),(0,i.kt)("p",null,"The following input types are currently supported"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Cameras")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LidarsAndCameras")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CamerasSeq")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LidarsAndCamerasSeq")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AggregatedLidarsAndCamerasSeq"))),(0,i.kt)("h2",{id:"input-fields"},"Input Fields"),(0,i.kt)("p",null,"All non-sequential inputs have the following structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Input(BaseModel):\n    external_id: str\n    frame: Frame\n    sensor_specification: SensorSpecification\n    calibration_id: Optional[str] # Required if using lidar sensors\n    metadata: Mapping[str, Union[int, float, str, bool]] = field(default_factory=dict)\n")),(0,i.kt)("p",null,"Sequential inputs are similarly represented, except that they instead contain a list of Frames"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class InputSeq(BaseModel):\n    external_id: str\n    frames: List[Frame]\n    sensor_specification: SensorSpecification\n    calibration_id: Optional[str] # Required if using lidar sensors\n    metadata: Mapping[str, Union[int, float, str, bool]] = field(default_factory=dict)\n")),(0,i.kt)("p",null,"The fields contain all the information required to create the input."),(0,i.kt)("h3",{id:"external-id"},"External Id"),(0,i.kt)("p",null,"Whenever an input is uploaded it automatically gets a UUID, this is used as the primary identifier by Kognic and by all of our internal systems. However, in order to make communication around specific inputs easier we also allow for clients to include any kind of identifier to the input via the external id."),(0,i.kt)("h3",{id:"sensor-specification"},"Sensor Specification"),(0,i.kt)("p",null,"The sensor specification contains information related to the different camera and/or lidar sensors\nused for capturing the data present on the input."),(0,i.kt)("p",null,'The additional fields are optional and relate to specifying the order of the camera sensors and\nhuman readable variants of the sensor name (e.g. "Front Camera" instead of "FC").'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class SensorSpecification(BaseModel):\n    sensor_to_pretty_name: Optional[Dict[str, str]] = None\n    sensor_order: Optional[List[str]] = None\n")),(0,i.kt)("p",null,"As an example, let's say we have three different camera sensors ",(0,i.kt)("inlineCode",{parentName:"p"},"R"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"L"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"R")," sensor is mounted on the right side of the ego vehicle, the ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," sensor at the front and the ",(0,i.kt)("inlineCode",{parentName:"p"},"L")," sensor to the left. Creating a sensor specification for this scenario would correspond to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'sensor_spec = SensorSpecification(\n    sensor_to_pretty_name={\n        "R": "Right Camera",\n        "F": "Front Camera",\n        "L": "Left Camera"\n    },\n    sensor_order=["L", "F", "R"]\n)\n')),(0,i.kt)("p",null,"The specified ",(0,i.kt)("inlineCode",{parentName:"p"},"sensor_order")," will cause the different camera sensors to be presented in a clockwise manner in the annotation tool (Left -> Front -> Right), while the ",(0,i.kt)("inlineCode",{parentName:"p"},"sensor_to_pretty_name")," parameter will result in the annotation tool showing the human readable version of all the sensor names when changing sensor."),(0,i.kt)("h3",{id:"calibration-id"},"Calibration Id"),(0,i.kt)("p",null,"Any input consisting of lidar and camera sensors requires a calibration. The calibration captures the spatial relationship (position and rotation) between the different sensors, as well as different camera specific parameters."),(0,i.kt)("p",null,"This information is used by the annotation tool to highlight regions in the point cloud visible in the selected camera sensors as well as for projecting information from the pointcloud onto the different camera sensors (points, cuboids etc)."),(0,i.kt)("p",null,"Detailed documentation on how to create calibrations via the API is present in the ",(0,i.kt)("a",{parentName:"p",href:"calibrations"},"Calibration section"),"."),(0,i.kt)("p",null,"When including calibration id make sure that all of the sensors present on the input are also present in the calibration as well. If this is not the case the input will not be created and a validation error will be returned by the API."),(0,i.kt)("p",null,"Inputs without a lidar sensor do not require a calibration."),(0,i.kt)("h3",{id:"metadata"},"Metadata"),(0,i.kt)("p",null,"Metadata can be added to inputs via the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," field. It consists of ",(0,i.kt)("em",{parentName:"p"},"flat")," key-value pairs, which means that nested data structures are not allowed. Metadata can be used to include additional information about an input.\nNothing specified in the metadata can be seen by the annotators, but there are some reserved keywords which can alter the annotation tools behaviour, and can be found here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/kognic/io/model/input/metadata/metadata.py\n")),(0,i.kt)("h3",{id:"frame-non-sequential-inputs"},"Frame (non-sequential inputs)"),(0,i.kt)("p",null,"The Frame object specifies the binary data to be annotated (.jpg, .png, .las etc) as well as which sensor the data originated from."),(0,i.kt)("p",null,"The Frame object is different for each input type since they all support different kinds of sensors, even though the overall structure is the same."),(0,i.kt)("p",null,"As an example, let's say we want to create an input consiting of images from three different camera sensors ",(0,i.kt)("inlineCode",{parentName:"p"},"R"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"L"),". The corresponding binary data is present in the files ",(0,i.kt)("inlineCode",{parentName:"p"},"img_cam_R.jpg"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"img_cam_F.jpg")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"img_cam_F.jpg"),". This would correspond to creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"Cameras")," input."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'cameras_input = Cameras(\n    ...,\n    frame=Frame(\n        images=[\n            Image("img_cam_R.jpg", sensor_name="R"),\n            Image("img_cam_F.jpg", sensor_name="F"),\n            Image("img_cam_L.jpg", sensor_name="L"),\n        ]\n    )\n)\n')),(0,i.kt)("p",null,"Similarly, if we also had an associated lidar pointcloud from the sensor ",(0,i.kt)("inlineCode",{parentName:"p"},"VDL-64")," and a corresponding binary file ",(0,i.kt)("inlineCode",{parentName:"p"},"scan_vdl_64.las")," we would instead express this as a ",(0,i.kt)("inlineCode",{parentName:"p"},"LidarsAndCameras")," input instead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'lidars_and_cameras = LidarsAndCameras(\n    ...,\n    frame=Frame(\n        images=[\n            Image("img_cam_R.jpg", sensor_name="R"),\n            Image("img_cam_F.jpg", sensor_name="F"),\n            Image("img_cam_L.jpg", sensor_name="L"),\n        ],\n        point_clouds=[\n            PointCloud("scan_vdl_64.las", sensor_name="VDL-64")\n        ]\n    )\n\n)\n')),(0,i.kt)("h3",{id:"frames-sequential-inputs"},"Frames (sequential inputs)"),(0,i.kt)("p",null,"Sequential inputs deal with a list of Frame objects instead of a single Frame object. In addition, Frame objects associated with sequential inputs have three additional parameters not present in their non-sequential Frame counterparts: ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"relative_timestamp")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),"."),(0,i.kt)("p",null,"The sequential relationship is expressed via the ordering of the Frame objects in the ",(0,i.kt)("inlineCode",{parentName:"p"},"frames")," list"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"frame_1 = Frame(...)\nframe_2 = Frame(...)\nframe_3 = Frame(...)\nframes = [frame_1, frame_2, frame_3]\n")),(0,i.kt)("p",null,"This representation captures that ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_1")," comes first, then ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_3"),", but it does not express how much time has passed between the different frames. This information is encoded via the ",(0,i.kt)("inlineCode",{parentName:"p"},"relative_timestamp")," parameter present on each Frame object. The relative timestamp is expressed in milliseconds and describes the relative time between the Frame and the start of the input."),(0,i.kt)("p",null,"For example, let's say that the sensor data is collected and aggregated at 2Hz. That would then be expressed as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"frame_1 = Frame(..., relative_timestamp=0)\nframe_2 = Frame(..., relative_timestamp=500)\nframe_3 = Frame(..., relative_timestamp=1000)\nframes = [frame_1, frame_2, frame_3]\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_id")," is expressed as a string and is used to produce a unique identifier for each frame in the list of frames.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_id")," is used as a top-level key in the produced annotations, indicating which parts of the complete annotation\nbelong to this specific frame."),(0,i.kt)("p",null,"A common use case is to use uuids for each ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_id"),", or a combination of ",(0,i.kt)("inlineCode",{parentName:"p"},"external_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_index"),".\nFor example, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"external_id")," of the input is ",(0,i.kt)("inlineCode",{parentName:"p"},"shanghai_20200101")," then the ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_id")," could be encoded as\n",(0,i.kt)("inlineCode",{parentName:"p"},"shanghai_20200101:0")," for the first frame, ",(0,i.kt)("inlineCode",{parentName:"p"},"shanghai_20200101:1")," for the second frame and so on."),(0,i.kt)("p",null,"Similarly to the metadata capability available on an input-level, it's also possible to provide metadata on a ",(0,i.kt)("em",{parentName:"p"},"frame")," level as well.\nIt behaves the same way, i.e. consists of ",(0,i.kt)("em",{parentName:"p"},"flat")," key-value pairs and is not exposed to annotators during the production of annotators."),(0,i.kt)("p",null,"As an example, let's say we want to create an input of type ",(0,i.kt)("inlineCode",{parentName:"p"},"CamerasSeq")," consisting of 2 frames, each with camera data\nfrom two different sensors ",(0,i.kt)("inlineCode",{parentName:"p"},"R")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"L"),". If we have individual images for each frame and sensor, this would correspond\nto the following list of frames"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'frames = [\n    Frame(\n        frame_id="1",\n        relative_timestamp=0,\n        images=[\n            Image("img_L_1.jpg", sensor_name=\'L\'),\n            Image("img_R_1.jpg", sensor_name=\'R\')\n        ]),\n    Frame(\n        frame_id="2",\n        relative_timestamp=500,\n        images=[\n            Image("img_L_2.jpg", sensor_name=\'L\'),\n            Image("img_R_2.jpg", sensor_name=\'R\')\n        ])\n]\n\ncameras_sequence = CamerasSequence(\n        ...,\n        frames=frames,\n    )\n')),(0,i.kt)("h2",{id:"image--pointcloud-resources"},"Image & Pointcloud Resources"),(0,i.kt)("p",null,"Every file containing binary sensor data (e.g. image or pointcloud files) is represented as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Resource"),", with\n",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PointCloud")," being the concrete subclasses."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/kognic/io/model/input/resources/resource.py#L12-L16\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Resource"),"s ultimately describe how to obtain some binary or textual sensor data, which can be done in different ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Indirectly: by refering to a local filename that contains the data"),(0,i.kt)("li",{parentName:"ol"},"Directly: provide some bytes-like object at creation time"),(0,i.kt)("li",{parentName:"ol"},"Lazily: provide a callback function which can provide the bytes later in the process")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Resource"),"s must always be given a ",(0,i.kt)("inlineCode",{parentName:"p"},"filename"),". For alternative 1 this must point to the local file to upload. For alternatives 2 & 3 the filename is treated more as an identifier; it is used to name the uploaded file but does not have to correspond to anything in the filesystem."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Resource"),"s also always have a ",(0,i.kt)("inlineCode",{parentName:"p"},"sensor_name")," which identifies the sensor they were captured from. In sequential inputs, each ",(0,i.kt)("inlineCode",{parentName:"p"},"Frame")," will have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Resource")," for each sensor."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Resource"),"s take their actual data (bytes) from ",(0,i.kt)("inlineCode",{parentName:"p"},"bytes"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"BinaryIO")," or an ",(0,i.kt)("inlineCode",{parentName:"p"},"IOBase"),"-compatible object. These are referred to with the type alias ",(0,i.kt)("inlineCode",{parentName:"p"},"UploadableData  = Union[bytes, BinaryIO, IOBase]"),"."),(0,i.kt)("p",null,"For alternatives 2 & 3 listed above, a ",(0,i.kt)("inlineCode",{parentName:"p"},"FileData")," object is attached to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"PointCloud")," to capture the source of data. It is created with either ",(0,i.kt)("inlineCode",{parentName:"p"},"data: UploadableData")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"callback: Callable[[str], UploadableData]"),", as well as a ",(0,i.kt)("inlineCode",{parentName:"p"},"format")," which identifies the type of data contained in the bytes."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Previous API client releases advertised support for ingesting files from external URIs, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"gs://bucket/path/file"),". Please contact Kognic if you believe you require this functionality going forward.")),(0,i.kt)("h3",{id:"local-file"},"Local File"),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"filename")," to the path of the local file and do not provide data via other means (directly or callback). The content is uploaded using a content type inferred from the filename suffix."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'Image(filename="/Users/johndoe/images/img_FC.png",\n      sensor_name="FC")\n')),(0,i.kt)("h3",{id:"data-in-memory"},"Data in Memory"),(0,i.kt)("p",null,"In addition to  ",(0,i.kt)("inlineCode",{parentName:"p"},"filename"),", provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"FileData")," object via the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," attribute, which in turn has an ",(0,i.kt)("inlineCode",{parentName:"p"},"UploadableData")," as its own ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," attribute. This example uses raw ",(0,i.kt)("inlineCode",{parentName:"p"},"bytes"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'png_blob = FileData(data=b\'some PNG bytes\',\n                    format=FileData.Format.PNG)\nImage(filename="FC-frame15",\n      sensor_name="FC",\n      data=png_blob)\n')),(0,i.kt)("h3",{id:"data-from-callback"},"Data from Callback"),(0,i.kt)("p",null,"In addition to ",(0,i.kt)("inlineCode",{parentName:"p"},"filename"),", provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"FileData")," object via the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," attribute, which holds a reference to the callback function that produces an ",(0,i.kt)("inlineCode",{parentName:"p"},"UploadableData"),", e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'png_from_callback = FileData(callback=get_png,\n                             format=FileData.Format.PNG)\nImage(filename="FC-frame15",\n      sensor_name="FC",\n      data=png_from_callback)\n')),(0,i.kt)("p",null,"The callback function (",(0,i.kt)("inlineCode",{parentName:"p"},"get_png"),") is a unary function with the following signature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def get_png(file: str) -> UploadableData:\n    pass\n")),(0,i.kt)("p",null,"The callback function is invoked with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Resource.filename")," as its argument when it is time to upload that single file."),(0,i.kt)("p",null,"If the callback requires extra arguments then we recommend creating a closure over the additional arguments like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def get_callback(arg1, arg2, **kwargs):\n     def callback(filename) -> bytes:\n         # ... use arg1, arg2, filename and kwargs\n      \n     return callback\n     \nFileData(callback=get_callback("foo", "bar", extra1="baz", extra2="qux"),\n         format=FileData.Format.JPG)\n')),(0,i.kt)("h2",{id:"imu-data"},"IMU Data"),(0,i.kt)("p",null,"Intertial Measurement Unit (IMU) data may be provided for inputs containing LIDAR pointclouds. This can be used to\nperform motion compensation in multi-lidar setups, and by default if any IMU data is provided this will be done.\nMotion compensation may be disabled via an ",(0,i.kt)("a",{parentName:"p",href:"feature_flags"},"input feature flag"),", for cases where motion compensation has\nalready been performed prior to upload."),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"inputs/lidars_with_imu_data"},"Motion Compensation for Multi-Lidar Setups"),"."),(0,i.kt)("h2",{id:"input-feature-flags"},"Input Feature Flags"),(0,i.kt)("p",null,"Control over optional parts of the input creation process is possible via ",(0,i.kt)("inlineCode",{parentName:"p"},"FeatureFlags")," that are passed when invoking\nthe create operation on the input. Refer to ",(0,i.kt)("a",{parentName:"p",href:"feature_flags"},"the feature flags documentation")," for details."))}m.isMDXComponent=!0}}]);