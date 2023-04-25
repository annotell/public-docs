"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"Pre-annotations"},i=void 0,s={unversionedId:"kognic-io/pre_annotations",id:"kognic-io/pre_annotations",title:"Pre-annotations",description:"This feature is in an early release stage and might be subject to changes",source:"@site/docs/kognic-io/pre_annotations.md",sourceDirName:"kognic-io",slug:"/kognic-io/pre_annotations",permalink:"/docs/kognic-io/pre_annotations",draft:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/pre_annotations.md",tags:[],version:"current",frontMatter:{title:"Pre-annotations"},sidebar:"docs",previous:{title:"Working with Inputs",permalink:"/docs/kognic-io/working_with_inputs"},next:{title:"Motion Compensation for Multi-Lidar Setups",permalink:"/docs/kognic-io/inputs/lidars_with_imu_data"}},l={},p=[{value:"Creating pre-annotations using the kognic-io client",id:"creating-pre-annotations-using-the-kognic-io-client",level:2},{value:"1. Creating a scene",id:"1-creating-a-scene",level:3},{value:"2. Uploading an OpenLabel annotation",id:"2-uploading-an-openlabel-annotation",level:3},{value:"3. Create the input",id:"3-create-the-input",level:3},{value:"OpenLabel support",id:"openlabel-support",level:2},{value:"Unsupported pre-annotation features",id:"unsupported-pre-annotation-features",level:2},{value:"Supported pre-annotation features",id:"supported-pre-annotation-features",level:2},{value:"Geometries",id:"geometries",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Contexts",id:"contexts",level:3},{value:"Frames",id:"frames",level:3},{value:"Relations",id:"relations",level:3},{value:"Streams",id:"streams",level:3},{value:"Sparseness",id:"sparseness",level:2},{value:"Object Data Pointers",id:"object-data-pointers",level:3},{value:"Interpolated Property",id:"interpolated-property",level:3},{value:"Attributes",id:"attributes-1",level:3},{value:"Examples",id:"examples",level:2},{value:"3D cuboid and 2D bounding box with a static property",id:"3d-cuboid-and-2d-bounding-box-with-a-static-property",level:3},{value:"3D line with a dynamic property",id:"3d-line-with-a-dynamic-property",level:3},{value:"Sparseness with Object Data Pointers",id:"sparseness-with-object-data-pointers",level:3},{value:"Sparseness with Interpolated Property",id:"sparseness-with-interpolated-property",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This feature is in an early release stage and might be subject to changes")),(0,o.kt)("p",null,"Pre-annotations have many uses in ground-truth production. The pre-annotations feature allows information about the objects already known to be present in an input to be specified. Please reach out to our Advisory Services team to see how they can best be used for your use-case."),(0,o.kt)("p",null,"The Kognic platform supports uploading pre-annotations in the OpenLabel format using the ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/kognic-openlabel"},"kognic-openlabel package")),(0,o.kt)("h2",{id:"creating-pre-annotations-using-the-kognic-io-client"},"Creating pre-annotations using the kognic-io client"),(0,o.kt)("p",null,"There are 3 steps that are needed in order to create pre-annotations in the Kognic platform."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a scene by uploading all the needed data"),(0,o.kt)("li",{parentName:"ol"},"Upload an OpenLabel annotation as a pre-annotation"),(0,o.kt)("li",{parentName:"ol"},"Create an input from the scene")),(0,o.kt)("p",null,"Note that these steps can be performed in one call with the ",(0,o.kt)("inlineCode",{parentName:"p"},"create_inputs")," function,\nsee ",(0,o.kt)("a",{parentName:"p",href:"/docs/kognic-io/working_with_inputs#creating-multiple-inputs-with-one-call"},"Creating Multiple Inputs With One Call")),(0,o.kt)("h3",{id:"1-creating-a-scene"},"1. Creating a scene"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The scene is a subset of the input, specifically referring to the data, such as images or point clouds.\nAn input is what is created when this data is ready to be annotated.")),(0,o.kt)("p",null,'The interface for creating just a scene, without an input, is the same as we are familiar with.\nThe exception is that by not providing a project or a batch in the function call, the scene will be "dangling" until deemed ready for annotation'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/lidars_and_cameras_seq_with_pre_annotations.py#L82-L83\n")),(0,o.kt)("h3",{id:"2-uploading-an-openlabel-annotation"},"2. Uploading an OpenLabel annotation"),(0,o.kt)("p",null,"The pre-annotation can be uploaded to the Kognic platform once the scene has been created successfully."),(0,o.kt)("p",null,"Load your OpenLabel annotation according to the documentation in ",(0,o.kt)("inlineCode",{parentName:"p"},"kognic-openlabel")," and upload it to the Kognic platform as such:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"client.pre_annotation.create(\n    scene_uuid=scene_response.input_uuid, # from step 1\n    pre_annotation=OpenLabelAnnotation(...), \n    dryrun=dryrun\n)\n")),(0,o.kt)("h3",{id:"3-create-the-input"},"3. Create the input"),(0,o.kt)("p",null,"When the scene and pre-annotation have been successfully created, the input can be created.\nThis will add it to the latest open batch in a project, or the specific batch that's specified,\nand be ready for annotation with the pre-annotation present."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"client.lidars_and_cameras_sequence.create_from_scene(\n    scene_uuid=scene_response.input_uuid, # from step 1\n    annotation_types=annotation_types,\n    project=project,\n    dryrun=dryrun\n)\n")),(0,o.kt)("h2",{id:"openlabel-support"},"OpenLabel support"),(0,o.kt)("p",null,"Pre-annotations use the OpenLabel format/schema but not all OpenLabel features are supported in pre-annotations."),(0,o.kt)("h2",{id:"unsupported-pre-annotation-features"},"Unsupported pre-annotation features"),(0,o.kt)("p",null,"These features or combinations of features are not currently supported, or only have partial support."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Static geometries: not supported",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"These are bounding boxes, cuboids, etc. declared in the OpenLabel under ",(0,o.kt)("inlineCode",{parentName:"li"},"objects.*.objectData")))),(0,o.kt)("li",{parentName:"ul"},"Geometry-specific attributes: not supported on 3D geometry",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"These are attributes declared in the OpenLabel on a single geometric shape, in other words an attribute that only applies to the object as seen by one sensor; a common example is ",(0,o.kt)("inlineCode",{parentName:"li"},"occlusion")," which is recorded separately for each camera."),(0,o.kt)("li",{parentName:"ul"},"May also be referred to as source-, stream- or sensor-specific attributes."),(0,o.kt)("li",{parentName:"ul"},"3D geometry is anything that can be drawn when annotating a pointcloud, e.g. cuboids."),(0,o.kt)("li",{parentName:"ul"},"Geometry-specific attributes are permitted on 2D geometry e.g. bounding boxes"),(0,o.kt)("li",{parentName:"ul"},"Note that the ",(0,o.kt)("a",{parentName:"li",href:"/docs/#task-definition"},"task definition"),", must designate a property as source specific before it may be used in this way."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"stream")," attribute is a special case and is excepted from this rule")))),(0,o.kt)("h2",{id:"supported-pre-annotation-features"},"Supported pre-annotation features"),(0,o.kt)("h3",{id:"geometries"},"Geometries"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Objects cannot have multiple 3D geometries in the same frame")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"OpenLABEL field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cuboid"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cuboid")),(0,o.kt)("td",{parentName:"tr",align:null},"Cuboid in 3D")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Bounding box"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"bbox")),(0,o.kt)("td",{parentName:"tr",align:null},"Bounding box in 2D")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3D line"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"poly3d")),(0,o.kt)("td",{parentName:"tr",align:null},"Line in 3D. Append the first point at the end if you want it to be closed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Polygon"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"poly2d")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/openlabel/openlabel-format#representing-polygons"},"Polygon"),"  in 2D. The property ",(0,o.kt)("inlineCode",{parentName:"td"},"is_hole")," is mandatory.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Multi-polygon"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"poly2d")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/openlabel/openlabel-format#representing-multi-polygons"},"Multi-polygon")," in 2D. The properties ",(0,o.kt)("inlineCode",{parentName:"td"},"is_hole")," and  ",(0,o.kt)("inlineCode",{parentName:"td"},"polygon_id")," are mandatory.")))),(0,o.kt)("p",null,"Note that all geometries should be specified under frames rather than in the root of the pre-annotation. 3D geometries\nshould be expressed in the lidar coordinate system in the single-lidar case, but in the reference coordinate system in\nthe multi-lidar case. The rotation of cuboids should be the same as that in ",(0,o.kt)("a",{parentName:"p",href:"/docs/openlabel/openlabel-format#rotation-of-cuboids"},"exports"),".\n2D geometries should be expressed in pixel coordinates. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/kognic-io/calibrations"},"coordinate systems")," for more information."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Text"),(0,o.kt)("li",{parentName:"ul"},"Num"),(0,o.kt)("li",{parentName:"ul"},"Boolean")),(0,o.kt)("p",null,"For 2D geometry, attributes may be specified as geometry specific (aka source/sensor specific), or object specific. Attributes can be static (specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"objects")," key) or dynamic (specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"object_data")," for the object in the frame) and must be allowed by the ",(0,o.kt)("a",{parentName:"p",href:"/docs/#task-definition"},"task definition"),", if one exists. Geometry specific attributes (those which appear on a single shape within frames) must also be declared as such in the task definition; arbitrary properties cannot be used in a source-specific way."),(0,o.kt)("h3",{id:"contexts"},"Contexts"),(0,o.kt)("p",null,"Currently not supported. Contact Kognic if you need support for this or use regular attributes instead."),(0,o.kt)("h3",{id:"frames"},"Frames"),(0,o.kt)("p",null,"Every pre-annotation must contain frames with unique timestamps that are among the ones specified in the scene. The\nreason for this is that the timestamps are used to map the frame in the pre-annotation to the correct frame in the scene.\nIn the static case, one frame should be used with timestamp 0."),(0,o.kt)("h3",{id:"relations"},"Relations"),(0,o.kt)("p",null,"Currently not supported. Contact Kognic if you need support for this or use regular attributes instead."),(0,o.kt)("h3",{id:"streams"},"Streams"),(0,o.kt)("p",null,"Every geometry must have the ",(0,o.kt)("inlineCode",{parentName:"p"},"stream")," property specified. This property determines which stream (or sensor) that the\ngeometry appears in. It is important that the stream is among the ones specified in the scene and of the same type, for\nexample ",(0,o.kt)("inlineCode",{parentName:"p"},"camera")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"lidar"),"."),(0,o.kt)("h2",{id:"sparseness"},"Sparseness"),(0,o.kt)("p",null,"Pre-annotations can be sparse, meaning that its objects or geometries do not need to be present in every frame. Instead,\nthey can be present in a subset of frames and then interpolated in the frames in between. Utilizing this feature can speed\nup the annotation process significantly for sequences. Sparseness can be accomplished in two different ways, either by\nusing object data pointers or the boolean property ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolated"),". The former is the recommended way of doing it in most\ncases since it will lead to a more compact pre-annotation. The latter is useful when the pre-annotation is created from\nexported annotations from the Kognic platform."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Interpolation")," is done by linearly interpolating the geometry values between key frames. This is done in pixel\ncoordinates for 2D geometries. For 3D geometries, the interpolation can be done in either the reference coordinate system\nor the world coordinate system (recommended). This is configured in the annotation instruction so reach out to the Kognic\nteam about this if you are unsure. Note that interpolation in the world coordinate system requires that the scene contains\nego poses."),(0,o.kt)("h3",{id:"object-data-pointers"},"Object Data Pointers"),(0,o.kt)("p",null,"In OpenLABEL, object data pointers are used to create a specification for objects. For example, you can specify what attributes\nand geometries that are used for specific objects. In addition, you can specify for which frames that these are present.\nIf a geometry is specified in the object data pointer, it will be present in all frames that the object data pointer is\npointing to. If the geometry is not provided in some of these frames, it will be interpolated. Note that geometries ",(0,o.kt)("strong",{parentName:"p"},"must"),"\nbe provided for the first and last frame in the object data pointer. Otherwise, the pre-annotation will be rejected."),(0,o.kt)("p",null,"One limitation is that a geometry must be in the same stream for all frames when using object data pointers. This is because\ninterpolation is done in the stream coordinate system. If you need to use geometries of the same type in different streams,\nyou can simply use different names for the geometries in the different streams."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#sparseness-with-object-data-pointers"},"Sparseness with Object Data Pointers")," shows an example of how to use object data pointers."),(0,o.kt)("h3",{id:"interpolated-property"},"Interpolated Property"),(0,o.kt)("p",null,"The boolean property ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolated")," can be used to specify that a geometry should be interpolated. Geometries are still\nrequired to be present in interpolated frames but their geometry values will be ignored. Note that interpolated geometries\nmust have corresponding geometries (interpolated or not) in the first and last frame of the pre-annotation. Otherwise, the\npre-annotation will be rejected. "),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolated")," property is the recommended way of doing it when the pre-annotation is created from exported\nannotations from the Kognic platform."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#sparseness-with-interpolated-property"},"Sparseness with Interpolated Property")," shows an example of how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolated")," property."),(0,o.kt)("h3",{id:"attributes-1"},"Attributes"),(0,o.kt)("p",null,"Attributes are handled differently compared to geometries. If an attribute is not present in a frame, its last value\nwill simply be used if the object (or geometry if the property is source-specific) is present in the frame. If the object\nis not present in the frame, the attribute will be ignored. Dense attributes will be sparsified automatically when the\npre-annotation is uploaded to the Kognic platform."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Below follows examples of supported pre-annotations."),(0,o.kt)("h3",{id:"3d-cuboid-and-2d-bounding-box-with-a-static-property"},"3D cuboid and 2D bounding box with a static property"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "openlabel": {\n    "frame_intervals": [],\n    "frames": {\n      "0": {\n        "frame_properties": {\n          "timestamp": 0,\n          "external_id": "0",\n          "streams": {"LIDAR1":  {}, "ZFC":  {}}\n        },\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [\n                {\n                  "attributes": {\n                    "text": [\n                      { "name": "stream", "val": "ZFC" }\n                    ]\n                  },\n                  "name": "Bounding-box-1",\n                  "val": [1.0, 1.0, 40.0, 30.0]\n                }\n              ],\n              "cuboid": [\n                {\n                  "attributes": {\n                    "text": [\n                      { "name": "stream", "val": "LIDAR1" }\n                    ]\n                  },\n                  "name": "cuboid-89ac8a2b",\n                  "val": [\n                    2.079312801361084,\n                    -18.919870376586914,\n                    0.3359137773513794,\n                    -0.002808041640852679,\n                    0.022641949116037438,\n                    0.06772797660868829,\n                    0.9974429197838155,\n                    1.767102435869269,\n                    4.099334155319101,\n                    1.3691029802958168\n                  ]\n                }\n              ]\n            }\n          }\n        }\n      }\n    },\n    "metadata": {\n      "schema_version": "1.0.0"\n    },\n    "objects": {\n      "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n        "name": "1232b4f4-e3ca-446a-91cb-d8d403703df7",\n        "object_data": {\n          "text": [\n            { "name": "color", "val": "red" }\n          ]\n        },\n        "type": "PassengerCar"\n      }\n    },\n    "streams": { \n      "LIDAR1": { "type": "lidar" }, \n      "ZFC": { "type": "camera" }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"3d-line-with-a-dynamic-property"},"3D line with a dynamic property"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "openlabel": {\n    "frame_intervals": [{ "frame_end": 0, "frame_start": 0 }],\n    "frames": {\n      "0": {\n        "frame_properties": {\n          "streams": { "lidar": {} },\n          "timestamp": 0,\n          "external_id": "0"\n        },\n        "objects": {\n          "cc06aced-d7dc-4638-a6e9-dc7f5e215340": {\n            "object_data": {\n              "poly3d": [\n                {\n                  "attributes": {\n                    "text": [{ "name": "stream", "val": "lidar" }]\n                  },\n                  "closed": false,\n                  "name": "line-3d-1",\n                  "val": [\n                    -5.0, 0.0, 0.0, \n                    -5.0, 10.0, 0.0,\n                    5.0, 10.0, 0.0,\n                    5.0, 0.0, 0.0, \n                    -5.0, 0.0, 0.0\n                  ]\n                }\n              ],\n              "text": [{ "name": "occluded", "val": "No" }]\n            }\n          }\n        }\n      }\n    },\n    "metadata": { "schema_version": "1.0.0" },\n    "objects": {\n      "cc06aced-d7dc-4638-a6e9-dc7f5e215340": {\n        "name": "cc06aced",\n        "type": "Region"\n      }\n    },\n    "streams": {\n      "lidar": { "type": "lidar" },\n      "ZFC": { "type": "camera" }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"sparseness-with-object-data-pointers"},"Sparseness with Object Data Pointers"),(0,o.kt)("p",null,"In the example below the object ",(0,o.kt)("inlineCode",{parentName:"p"},"1232b4f4-e3ca-446a-91cb-d8d403703df7")," has a bounding box called ",(0,o.kt)("inlineCode",{parentName:"p"},"the-bbox-name")," that is\nprovided in frames 0 and 3. In frames 1 and 2, the bounding box will be interpolated. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "openlabel": {\n    "objects": {\n      "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n          "name": "car-name",\n          "type":  "car",\n          "object_data_pointers": {\n            "the-bbox-name": {\n              "type":"bbox",\n              "frame_intervals": [{"frame_start": 0, "frame_end": 3}]\n            }\n          }\n        }\n    },\n    "frames": {\n      "0": {\n        ...,\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [{"name": "the-bbox-name",...}]\n            }\n          }\n        }\n      },\n      "1": {},\n      "2": {},\n      "3": {\n        ...,\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [{"name": "the-bbox-name",...}]\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"sparseness-with-interpolated-property"},"Sparseness with Interpolated Property"),(0,o.kt)("p",null,"In the example below sparseness is determined using the ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolated")," property. The object\n",(0,o.kt)("inlineCode",{parentName:"p"},"1232b4f4-e3ca-446a-91cb-d8d403703df7")," has a bounding box for which the ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolated")," property is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in\nframes 1 and 2 but not in frames 0 and 3. The geometry values in frames 1 and 2 are ignored and instead interpolated\nfrom the geometry values in frames 0 and 3."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "openlabel": {\n    ...,\n    "frames": {\n      "0": {\n        ...,\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [\n                {\n                  "attributes": {\n                    "stream": [{ "name": "stream", "val":  "CAM" }],\n                    "boolean": [{ "name": "interpolated", "val": false }]\n                  },\n                  ...\n                }\n              ]\n            }\n          }\n        }\n      },\n      "1": {\n        ...,\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [\n                {\n                  "attributes": {\n                    "stream": [{ "name": "stream", "val":  "CAM" }],\n                    "boolean": [{ "name": "interpolated", "val": true }]\n                  },\n                  ...\n                }\n              ]\n            }\n          }\n        }\n      },\n      "2": {\n        ...,\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [\n                {\n                  "attributes": {\n                    "stream": [{ "name": "stream", "val":  "CAM" }],\n                    "boolean": [{ "name": "interpolated", "val": true }]\n                  },\n                  ...\n                }\n              ]\n            }\n          }\n        }\n      },\n      "3": {\n        ...,\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [\n                {\n                  "attributes": {\n                    "stream": [{ "name": "stream", "val":  "CAM" }],\n                    "boolean": [{ "name": "interpolated", "val": false }]\n                  },\n                  ...\n                }\n              ]\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);