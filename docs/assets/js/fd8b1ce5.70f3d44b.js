"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[749],{6796:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var s=a(4848),i=a(8453);const t={title:"Overview"},r=void 0,o={id:"kognic-io/overview",title:"Overview",description:"Different types of scenes",source:"@site/docs/kognic-io/overview.md",sourceDirName:"kognic-io",slug:"/kognic-io/overview",permalink:"/docs/kognic-io/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/kognic-io/overview.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"Projects",permalink:"/docs/kognic-io/project"},next:{title:"Annotation Types",permalink:"/docs/kognic-io/annotation_types"}},c={},l=[{value:"Different types of scenes",id:"different-types-of-scenes",level:2},{value:"Sequential vs non-sequential",id:"sequential-vs-non-sequential",level:3},{value:"Scene Fields",id:"scene-fields",level:2},{value:"External Id",id:"external-id",level:3},{value:"Sensor Specification",id:"sensor-specification",level:3},{value:"Calibration",id:"calibration",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Frame",id:"frame",level:3},{value:"Non sequential frame",id:"non-sequential-frame",level:4},{value:"Sequential frames",id:"sequential-frames",level:4},{value:"Image &amp; Pointcloud Resources",id:"image--pointcloud-resources",level:2},{value:"Local File",id:"local-file",level:3},{value:"Data in Memory",id:"data-in-memory",level:3},{value:"Data from Callback",id:"data-from-callback",level:3},{value:"Data from Asynchronous Callback (new in version 1.5.0)",id:"data-from-asynchronous-callback-new-in-version-150",level:3},{value:"IMU Data",id:"imu-data",level:2},{value:"Scene Feature Flags",id:"scene-feature-flags",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"different-types-of-scenes",children:"Different types of scenes"}),"\n",(0,s.jsx)(n.p,{children:"A scene represents a grouping of sensor data (e.g. camera images, lidar pointclouds) that should be annotated together. Any information necessary to describe the relationship between the sensors and their captured data is also specifed in the scene, be it camera resolution, sensor name, and the frequency at which the data was recorded at, etc."}),"\n",(0,s.jsxs)(n.p,{children:["There are different scene types depending on what kind of sensor(s) are used to represent the contents of the scene. For example, if one wants to create a scene only consisting of image data from camera sensors then one would use the scene type ",(0,s.jsx)(n.code,{children:"Cameras"}),". Similarly, if one wants to create a scene consisting of both lidar and camera sensors then one would use the scene type ",(0,s.jsx)(n.code,{children:"LidarsAndCameras"}),". Additionally, scenes can either be ",(0,s.jsx)(n.em,{children:"single frame"})," or ",(0,s.jsx)(n.em,{children:"sequence"})," type."]}),"\n",(0,s.jsx)(n.h3,{id:"sequential-vs-non-sequential",children:"Sequential vs non-sequential"}),"\n",(0,s.jsxs)(n.p,{children:["Sequential scenes represent a ",(0,s.jsx)(n.em,{children:"sequence"})," of frames in time, whereas non-sequential scenes only contain one snapshot of the sensor data. The sequential relationship is expressed via a sequence of ",(0,s.jsx)(n.strong,{children:"Frames"}),", where each Frame contains information related to what kind of sensor data constitues the frame (e.g. which image and/or pointcloud is part of the Frame) as well as a ",(0,s.jsx)(n.em,{children:"relative timestamp"})," that captures where in time (relative to the other frames) the Frame is located."]}),"\n",(0,s.jsx)(n.p,{children:"Non-sequential scenes only contains a single Frame and do not require any relative timestamp information."}),"\n",(0,s.jsxs)(n.p,{children:["Sequential scene types are identified by the suffix ",(0,s.jsx)(n.code,{children:"Seq"})," in their type name."]}),"\n",(0,s.jsx)(n.p,{children:"The following scene types are currently supported"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Cameras"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"LidarsAndCameras"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"CamerasSeq"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"LidarsAndCamerasSeq"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"AggregatedLidarsAndCamerasSeq"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"scene-fields",children:"Scene Fields"}),"\n",(0,s.jsx)(n.p,{children:"Non-sequential scenes have the following structure"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Scene(BaseModel):\n    external_id: str\n    frame: Frame\n    sensor_specification: SensorSpecification\n    calibration_id: Optional[str] # Required if using lidar sensors\n    metadata: Mapping[str, Union[int, float, str, bool]] = field(default_factory=dict)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sequential scenes are similarly represented, except that they instead contain a list of Frames"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class SceneSeq(BaseModel):\n    external_id: str\n    frames: List[Frame]\n    sensor_specification: SensorSpecification\n    calibration_id: Optional[str] # Required if using lidar sensors\n    metadata: Mapping[str, Union[int, float, str, bool]] = field(default_factory=dict)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"external-id",children:"External Id"}),"\n",(0,s.jsx)(n.p,{children:"A scene automatically gets a UUID when it is created. This UUID is used as the primary identifier by Kognic and all of our internal systems. Additionally, an external id is required as an identifier when creating the scene in order to make communication around specific scenes easier."}),"\n",(0,s.jsx)(n.h3,{id:"sensor-specification",children:"Sensor Specification"}),"\n",(0,s.jsx)(n.p,{children:"The sensor specification contains information about the camera and/or lidar sensors\nused in the scene."}),"\n",(0,s.jsx)(n.p,{children:'The additional fields are optional, and can be used to specify the order of the camera images and\na human readable sensor name (e.g. "Front Camera" instead of "FC") when viewed in the Kognic annotation App.'}),"\n",(0,s.jsxs)(n.p,{children:["As an example, let's say we have three camera sensors ",(0,s.jsx)(n.code,{children:"R"}),", ",(0,s.jsx)(n.code,{children:"F"})," and ",(0,s.jsx)(n.code,{children:"L"})," positioned on the ego vehicle. Creating a sensor specification would be"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from kognic.io.model.scene.sensor_specification import SensorSpecification\nsensor_spec = SensorSpecification(\n    sensor_to_pretty_name={\n        "R": "Right Camera",\n        "F": "Front Camera",\n        "L": "Left Camera"\n    },\n    sensor_order=["L", "F", "R"]\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"sensor_order"})," configures the order of camera images, and ",(0,s.jsx)(n.code,{children:"sensor_to_pretty_name"})," affects the labels when viewed in the Kognic annotation App."]}),"\n",(0,s.jsx)(n.h3,{id:"calibration",children:"Calibration"}),"\n",(0,s.jsx)(n.p,{children:"Any scene consisting of lidar and camera sensors requires a calibration. The calibration specifies the spatial relationship (position and rotation) between the sensors, and the camera intrinsic parameters."}),"\n",(0,s.jsx)(n.p,{children:"However, scenes without a lidar sensor do not require a calibration."}),"\n",(0,s.jsx)(n.p,{children:"Calibration is used by the Kognic annotation App to project regions in the pointcloud when a camera image is selected, and, similarly, to project the selected object (e.g. point, cuboid) in the pointcloud onto the images ."}),"\n",(0,s.jsx)(n.p,{children:"When creating a calibration, all sensors must match those present on the scene. If this is not the case the scene will not be created and a validation error will be returned by the Kognic API."}),"\n",(0,s.jsxs)(n.p,{children:["Detailed documentation on how to create calibrations via the API is present in the ",(0,s.jsx)(n.a,{href:"/docs/kognic-io/calibrations/overview",children:"Calibration section"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"Metadata"}),"\n",(0,s.jsxs)(n.p,{children:["Metadata can be added to scenes via the ",(0,s.jsx)(n.code,{children:"metadata"})," field. It consists of flat key-value pairs, which means that nested data structures are not allowed. Metadata can be used to include additional information about a scene.\nMetadata cannot be seen by the annotators, but there are some reserved keywords that can alter the behaviour of the Kognic annotation tool. Reserved keywords can be found in the ",(0,s.jsx)(n.code,{children:"MetaData"})," object in the python client."]}),"\n",(0,s.jsx)(n.h3,{id:"frame",children:"Frame"}),"\n",(0,s.jsxs)(n.p,{children:["The Frame object specifies the binary data to be annotated (.jpg, .png, .las etc) as well as which sensor the data originated from. Note that the ",(0,s.jsx)(n.code,{children:"Frame"})," object is different for each scene type, even though the overall structure is similar (see details below)."]}),"\n",(0,s.jsx)(n.h4,{id:"non-sequential-frame",children:"Non sequential frame"}),"\n",(0,s.jsxs)(n.p,{children:["As an example, let's say we want to create a scene consiting of images from three camera sensors ",(0,s.jsx)(n.code,{children:"R"}),", ",(0,s.jsx)(n.code,{children:"F"})," and ",(0,s.jsx)(n.code,{children:"L"}),". The corresponding binary data are in the files ",(0,s.jsx)(n.code,{children:"img_cam_R.jpg"}),", ",(0,s.jsx)(n.code,{children:"img_cam_F.jpg"})," and ",(0,s.jsx)(n.code,{children:"img_cam_F.jpg"}),". This would correspond the scene type ",(0,s.jsx)(n.code,{children:"Cameras"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from kognic.io.model.scene.resources import Image\nfrom kognic.io.model.scene.cameras import Cameras, Frame\n\ncameras_scene = Cameras(\n    ...,\n    frame=Frame(\n        images=[\n            Image("img_cam_R.jpg", sensor_name="R"),\n            Image("img_cam_F.jpg", sensor_name="F"),\n            Image("img_cam_L.jpg", sensor_name="L"),\n        ]\n    )\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Similarly, if we also had an associated lidar pointcloud from the sensor ",(0,s.jsx)(n.code,{children:"VDL-64"})," and a corresponding binary file ",(0,s.jsx)(n.code,{children:"scan_vdl_64.las"}),", we would instead use the scene type ",(0,s.jsx)(n.code,{children:"LidarsAndCameras"}),". Note that the ",(0,s.jsx)(n.code,{children:"Frame"})," class shall be imported under the corresponding scene type."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from kognic.io.model.scene.resources import Image, PointCloud\nfrom kognic.io.model.scene.lidars_and_cameras import LidarsAndCameras, Frame\n\nlidars_and_cameras = LidarsAndCameras(\n    ...,\n    frame=Frame(\n        images=[\n            Image("img_cam_R.jpg", sensor_name="R"),\n            Image("img_cam_F.jpg", sensor_name="F"),\n            Image("img_cam_L.jpg", sensor_name="L"),\n        ],\n        point_clouds=[\n            PointCloud("scan_vdl_64.las", sensor_name="VDL-64")\n        ]\n    )\n\n)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"sequential-frames",children:"Sequential frames"}),"\n",(0,s.jsxs)(n.p,{children:["Sequential scene takes a list of ",(0,s.jsx)(n.code,{children:"Frame"})," objects instead of a single ",(0,s.jsx)(n.code,{children:"Frame"}),". In addition, the ",(0,s.jsx)(n.code,{children:"Frame"})," object associated with sequential scenes have three additional parameters: ",(0,s.jsx)(n.code,{children:"frame_id"}),", ",(0,s.jsx)(n.code,{children:"relative_timestamp"})," and ",(0,s.jsx)(n.code,{children:"metadata"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The sequential relationship is expressed via the order of the list of ",(0,s.jsx)(n.code,{children:"Frame"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To express how much time has passed between the different frames, one can use the ",(0,s.jsx)(n.code,{children:"relative_timestamp"})," parameter for each ",(0,s.jsx)(n.code,{children:"Frame"}),". The relative timestamp is expressed in milliseconds and describes the relative time between the ",(0,s.jsx)(n.code,{children:"Frame"})," and the start of the scene."]}),"\n",(0,s.jsx)(n.p,{children:"For example, let's say that the sensor data is collected and aggregated at 2Hz."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"frame_1 = Frame(..., relative_timestamp=0)\nframe_2 = Frame(..., relative_timestamp=500)\nframe_3 = Frame(..., relative_timestamp=1000)\nframes = [frame_1, frame_2, frame_3]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"frame_id"})," is a string that uniquely identifies each frame in the list of frames."]}),"\n",(0,s.jsxs)(n.p,{children:["A common use case is to use uuids for each ",(0,s.jsx)(n.code,{children:"frame_id"}),", or a combination of ",(0,s.jsx)(n.code,{children:"external_id"})," and ",(0,s.jsx)(n.code,{children:"frame_index"}),".\nFor example, if the ",(0,s.jsx)(n.code,{children:"external_id"})," of the scene is ",(0,s.jsx)(n.code,{children:"shanghai_20200101"})," then the ",(0,s.jsx)(n.code,{children:"frame_id"})," could be encoded as\n",(0,s.jsx)(n.code,{children:"shanghai_20200101:0"})," for the first frame, ",(0,s.jsx)(n.code,{children:"shanghai_20200101:1"})," for the second frame and so on."]}),"\n",(0,s.jsxs)(n.p,{children:["It's also possible to provide ",(0,s.jsx)(n.code,{children:"metadata"})," on a ",(0,s.jsx)(n.em,{children:"frame"})," level for sequential frames. It consists of ",(0,s.jsx)(n.em,{children:"flat"})," key-value pairs and is not exposed to annotators during the production of annotators."]}),"\n",(0,s.jsxs)(n.p,{children:["As an example, let's say we want to create a scene of type ",(0,s.jsx)(n.code,{children:"CamerasSequence"})," consisting of 2 frames, each with camera images\nfrom two sensors ",(0,s.jsx)(n.code,{children:"R"})," and ",(0,s.jsx)(n.code,{children:"L"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from kognic.io.model.scene.resources import Image\nfrom kognic.io.model.scene.cameras_sequence import CamerasSequence, Frame\n\nframes = [\n    Frame(\n        frame_id="1",\n        relative_timestamp=0,\n        images=[\n            Image("img_L_1.jpg", sensor_name=\'L\'),\n            Image("img_R_1.jpg", sensor_name=\'R\')\n        ]),\n    Frame(\n        frame_id="2",\n        relative_timestamp=500,\n        images=[\n            Image("img_L_2.jpg", sensor_name=\'L\'),\n            Image("img_R_2.jpg", sensor_name=\'R\')\n        ])\n]\n\ncameras_sequence = CamerasSequence(\n        ...,\n        frames=frames,\n    )\n'})}),"\n",(0,s.jsx)(n.h2,{id:"image--pointcloud-resources",children:"Image & Pointcloud Resources"}),"\n",(0,s.jsxs)(n.p,{children:["Every file containing sensor data is represented as a ",(0,s.jsx)(n.code,{children:"Resource"}),", with\n",(0,s.jsx)(n.code,{children:"Image"})," and ",(0,s.jsx)(n.code,{children:"PointCloud"})," being the concrete subclasses."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Resource(ABC, BaseSerializer):\n    filename: str\n    resource_id: Optional[str] = None\n    sensor_name: str\n    file_data: Optional[FileData] = Field(default=None, exclude=True)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Resource"}),"s ultimately describe how to obtain some binary or textual sensor data, which can be done in different ways:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Indirectly: by refering to a local filename that contains the data"}),"\n",(0,s.jsx)(n.li,{children:"Directly: provide some bytes-like object at creation time"}),"\n",(0,s.jsx)(n.li,{children:"Lazily: provide a callback function which can provide the bytes later in the process"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Resource"}),"s must always be given a ",(0,s.jsx)(n.code,{children:"filename"}),". For alternative 1 this must point to the local file to upload. For alternatives 2 & 3 the value of ",(0,s.jsx)(n.code,{children:"filename"})," parameter is treated as an identifier; it is used to name the uploaded file but does not have to correspond to anything in the filesystem."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Resource"}),"s also always have a ",(0,s.jsx)(n.code,{children:"sensor_name"})," which identifies the sensor they were captured from. In sequential scenes, each ",(0,s.jsx)(n.code,{children:"Frame"})," will have a ",(0,s.jsx)(n.code,{children:"Resource"})," for each sensor."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Resource"}),"s take their actual data (bytes) from ",(0,s.jsx)(n.code,{children:"bytes"}),", a ",(0,s.jsx)(n.code,{children:"BinaryIO"})," or an ",(0,s.jsx)(n.code,{children:"IOBase"}),"-compatible object. These are referred to with the type alias ",(0,s.jsx)(n.code,{children:"UploadableData  = Union[bytes, BinaryIO, IOBase]"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For alternatives 2 & 3 listed above, a ",(0,s.jsx)(n.code,{children:"FileData"})," object is attached to the ",(0,s.jsx)(n.code,{children:"Image"})," or ",(0,s.jsx)(n.code,{children:"PointCloud"})," to capture the source of data. It is created with either ",(0,s.jsx)(n.code,{children:"data: UploadableData"})," or a ",(0,s.jsx)(n.code,{children:"callback: Callable[[str], UploadableData]"}),", as well as a ",(0,s.jsx)(n.code,{children:"format"})," which identifies the type of data contained in the bytes."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Previous API client releases advertised support for ingesting files from external URIs, such as ",(0,s.jsx)(n.code,{children:"gs://bucket/path/file"}),". Please contact Kognic if you believe you require this functionality going forward."]})}),"\n",(0,s.jsx)(n.h3,{id:"local-file",children:"Local File"}),"\n",(0,s.jsxs)(n.p,{children:["Set ",(0,s.jsx)(n.code,{children:"filename"})," to the path of the local file and do not provide data via other means (directly or callback). The content is uploaded using a content type inferred from the filename suffix."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'Image(filename="/Users/johndoe/images/img_FC.png",\n      sensor_name="FC")\n'})}),"\n",(0,s.jsx)(n.h3,{id:"data-in-memory",children:"Data in Memory"}),"\n",(0,s.jsxs)(n.p,{children:["In addition to ",(0,s.jsx)(n.code,{children:"filename"}),", provide a ",(0,s.jsx)(n.code,{children:"FileData"})," object via the ",(0,s.jsx)(n.code,{children:"file_data"})," attribute, which in turn has an ",(0,s.jsx)(n.code,{children:"UploadableData"})," as its own ",(0,s.jsx)(n.code,{children:"data"})," attribute. This example uses raw ",(0,s.jsx)(n.code,{children:"bytes"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'png_blob = FileData(data=b\'some PNG bytes\',\n                    format=FileData.Format.PNG)\nImage(filename="FC-frame15",\n      sensor_name="FC",\n      file_data=png_blob)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"data-from-callback",children:"Data from Callback"}),"\n",(0,s.jsxs)(n.p,{children:["In addition to ",(0,s.jsx)(n.code,{children:"filename"}),", provide a ",(0,s.jsx)(n.code,{children:"FileData"})," object via the ",(0,s.jsx)(n.code,{children:"file_data"})," attribute, with a ",(0,s.jsx)(n.code,{children:"callback"})," function that produces an ",(0,s.jsx)(n.code,{children:"UploadableData"}),", e.g."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'png_from_callback = FileData(callback=get_png, format=FileData.Format.PNG)\nImage(\n    filename="FC-frame15",\n    sensor_name="FC",\n    file_data=png_from_callback\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The callback function (",(0,s.jsx)(n.code,{children:"get_png"}),") is a unary function with the following signature."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_png(file: str) -> UploadableData:\n    pass\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The callback function is invoked with the ",(0,s.jsx)(n.code,{children:"Resource.filename"})," as its argument when it is time to upload that single file."]}),"\n",(0,s.jsx)(n.p,{children:"If the callback requires extra arguments then we recommend creating a closure over the additional arguments like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def get_callback(arg1, arg2, **kwargs):\n     def callback(filename) -> bytes:\n         # ... use arg1, arg2, filename and kwargs\n\n     return callback\n\nFileData(\n    callback=get_callback("foo", "bar", extra1="baz", extra2="qux"),\n    format=FileData.Format.JPG\n)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"data-from-asynchronous-callback-new-in-version-150",children:"Data from Asynchronous Callback (new in version 1.5.0)"}),"\n",(0,s.jsxs)(n.p,{children:["Using asynchronous callbacks can be useful to speed up data uploads, especially when the data is not available locally.\nIn the same way as for synchronous callbacks, the callback function is invoked with the ",(0,s.jsx)(n.code,{children:"Resource.filename"})," as its\nargument when it is time to upload that single file. Asynchronous callbacks can be used in the following way:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'async def get_png(filename: str) -> UploadableData:\n    pass\n\npng_from_async_callback = FileData(callback=get_png, format=FileData.Format.PNG)\n\nImage(\n    filename="FC-frame15",\n    sensor_name="FC",\n    file_data=png_from_async_callback\n)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"imu-data",children:"IMU Data"}),"\n",(0,s.jsxs)(n.p,{children:["Inertial Measurement Unit (IMU) data may be provided for scenes containing LIDAR pointclouds. This can be used to\nperform motion compensation in multi-lidar setups, and by default if any IMU data is provided this will be done.\nMotion compensation may be disabled via a ",(0,s.jsx)(n.a,{href:"feature_flags",children:"scene feature flag"}),", for cases where motion compensation has\nalready been performed prior to upload."]}),"\n",(0,s.jsxs)(n.p,{children:["Refer to ",(0,s.jsx)(n.a,{href:"scenes/lidars_with_imu_data",children:"Motion Compensation for Multi-Lidar Setups"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"scene-feature-flags",children:"Scene Feature Flags"}),"\n",(0,s.jsxs)(n.p,{children:["Control over optional parts of the scene creation process is possible via ",(0,s.jsx)(n.code,{children:"FeatureFlags"})," that are passed when invoking\nthe create operation on the scene. Refer to ",(0,s.jsx)(n.a,{href:"feature_flags",children:"the feature flags documentation"})," for details."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var s=a(6540);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);