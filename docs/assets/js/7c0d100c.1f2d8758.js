"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[4837],{5699:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(4848),a=t(8453);const s={title:"Pre-annotations"},r=void 0,o={id:"kognic-io/pre_annotations",title:"Pre-annotations",description:"This feature is in an early release stage and might be subject to changes",source:"@site/docs/kognic-io/pre_annotations.md",sourceDirName:"kognic-io",slug:"/kognic-io/pre_annotations",permalink:"/docs/kognic-io/pre_annotations",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/kognic-io/pre_annotations.md",tags:[],version:"current",frontMatter:{title:"Pre-annotations"},sidebar:"docs",previous:{title:"Scene Feature Flags",permalink:"/docs/kognic-io/feature_flags"},next:{title:"Downloading Annotations",permalink:"/docs/kognic-io/annotations"}},d={},c=[{value:"Creating pre-annotations using the kognic-io client",id:"creating-pre-annotations-using-the-kognic-io-client",level:2},{value:"1. Creating a scene",id:"1-creating-a-scene",level:3},{value:"2. Uploading an OpenLabel annotation",id:"2-uploading-an-openlabel-annotation",level:3},{value:"3. Create input",id:"3-create-input",level:3},{value:"OpenLabel support",id:"openlabel-support",level:2},{value:"Unsupported pre-annotation features",id:"unsupported-pre-annotation-features",level:2},{value:"Supported pre-annotation features",id:"supported-pre-annotation-features",level:2},{value:"Geometries",id:"geometries",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Contexts",id:"contexts",level:3},{value:"Frames",id:"frames",level:3},{value:"Relations",id:"relations",level:3},{value:"Streams",id:"streams",level:3},{value:"Sparseness",id:"sparseness",level:2},{value:"Object Data Pointers",id:"object-data-pointers",level:3},{value:"Interpolated Property",id:"interpolated-property",level:3},{value:"Attributes",id:"attributes-1",level:3},{value:"Examples",id:"examples",level:2},{value:"3D cuboid and 2D bounding box with a static property",id:"3d-cuboid-and-2d-bounding-box-with-a-static-property",level:3},{value:"3D line with a dynamic property",id:"3d-line-with-a-dynamic-property",level:3},{value:"Sparseness with Object Data Pointers",id:"sparseness-with-object-data-pointers",level:3},{value:"Sparseness with Interpolated Property",id:"sparseness-with-interpolated-property",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"This feature is in an early release stage and might be subject to changes"})}),"\n",(0,i.jsx)(n.p,{children:"Pre-annotations have many uses in ground-truth production. The pre-annotations feature allows information about the objects already known to be present in an input to be specified. Please reach out to our Advisory Services team to see how they can best be used for your use-case."}),"\n",(0,i.jsxs)(n.p,{children:["The Kognic platform supports uploading pre-annotations in the OpenLabel format using the ",(0,i.jsx)(n.a,{href:"https://pypi.org/project/kognic-openlabel",children:"kognic-openlabel package"})]}),"\n",(0,i.jsx)(n.h2,{id:"creating-pre-annotations-using-the-kognic-io-client",children:"Creating pre-annotations using the kognic-io client"}),"\n",(0,i.jsx)(n.p,{children:"There are 3 steps that are needed in order to create pre-annotations in the Kognic platform."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a scene by uploading all the needed data"}),"\n",(0,i.jsx)(n.li,{children:"Upload an OpenLabel annotation as a pre-annotation"}),"\n",(0,i.jsx)(n.li,{children:"Create an input from the scene"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note that these steps can be performed in one call with the ",(0,i.jsx)(n.code,{children:"create_inputs"})," function,\nsee ",(0,i.jsx)(n.a,{href:"/docs/kognic-io/working_with_scenes_and_inputs#creating-multiple-inputs-with-one-call",children:"Creating Multiple Inputs With One Call"})]}),"\n",(0,i.jsx)(n.h3,{id:"1-creating-a-scene",children:"1. Creating a scene"}),"\n",(0,i.jsx)(n.p,{children:"Start by creating a scene"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# Create Scene but not input since we don't provide project or batch\nscene_response = client.lidars_and_cameras_sequence.create(\n  lidars_and_cameras_seq,\n  dryrun=dryrun\n)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that you now have to wait for the scene to be created before you can proceed to the next step. More information\nthis can be found ",(0,i.jsx)(n.a,{href:"/docs/kognic-io/working_with_scenes_and_inputs#waiting-for-scene-creation",children:"Waiting for Scene Creation"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"2-uploading-an-openlabel-annotation",children:"2. Uploading an OpenLabel annotation"}),"\n",(0,i.jsx)(n.p,{children:"The pre-annotation can be uploaded to the Kognic platform once the scene has been created successfully."}),"\n",(0,i.jsxs)(n.p,{children:["Load your OpenLabel annotation according to the documentation in ",(0,i.jsx)(n.code,{children:"kognic-openlabel"})," and upload it to the Kognic platform as such:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"client.pre_annotation.create(\n    scene_uuid=scene_response.scene_uuid, # from step 1\n    pre_annotation=OpenLabelAnnotation(...),\n    dryrun=dryrun\n)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-create-input",children:"3. Create input"}),"\n",(0,i.jsx)(n.p,{children:"When the scene and pre-annotation have been successfully created, the input can be created.\nThis will add it to the latest open batch in a project, or the specific batch that's specified,\nand be ready for annotation with the pre-annotation present."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"client.lidars_and_cameras_sequence.create_from_scene(\n    scene_uuid=scene_response.scene_uuid, # from step 1\n    project=project,\n    dryrun=dryrun\n)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"openlabel-support",children:"OpenLabel support"}),"\n",(0,i.jsx)(n.p,{children:"Pre-annotations use the OpenLabel format/schema but not all OpenLabel features are supported in pre-annotations."}),"\n",(0,i.jsx)(n.h2,{id:"unsupported-pre-annotation-features",children:"Unsupported pre-annotation features"}),"\n",(0,i.jsx)(n.p,{children:"These features or combinations of features are not currently supported, or only have partial support."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Static geometries: not supported","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["These are bounding boxes, cuboids, etc. declared in the OpenLabel under ",(0,i.jsx)(n.code,{children:"objects.*.objectData"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Geometry-specific attributes: not supported on 3D geometry","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["These are attributes declared in the OpenLabel on a single geometric shape, in other words an attribute that only applies to the object as seen by one sensor; a common example is ",(0,i.jsx)(n.code,{children:"occlusion"})," which is recorded separately for each camera."]}),"\n",(0,i.jsx)(n.li,{children:"May also be referred to as source-, stream- or sensor-specific attributes."}),"\n",(0,i.jsx)(n.li,{children:"3D geometry is anything that can be drawn when annotating a pointcloud, e.g. cuboids."}),"\n",(0,i.jsx)(n.li,{children:"Geometry-specific attributes are permitted on 2D geometry e.g. bounding boxes"}),"\n",(0,i.jsxs)(n.li,{children:["Note that the ",(0,i.jsx)(n.a,{href:"../key-concepts#task-definition",children:"task definition"}),", must designate a property as source specific before it may be used in this way."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"stream"})," attribute is a special case and is excepted from this rule"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"supported-pre-annotation-features",children:"Supported pre-annotation features"}),"\n",(0,i.jsx)(n.h3,{id:"geometries",children:"Geometries"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Objects cannot have multiple 3D geometries in the same frame"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"OpenLABEL field"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Attributes"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cuboid"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"cuboid"})}),(0,i.jsx)(n.td,{children:"Cuboid in 3D"}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bounding box"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"bbox"})}),(0,i.jsx)(n.td,{children:"Bounding box in 2D"}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3D line"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"poly3d"})}),(0,i.jsx)(n.td,{children:"Line in 3D. Append the first point at the end if you want it to be closed."}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Polygon"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"poly2d"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/docs/openlabel/openlabel-format#representing-polygons",children:"Polygon"})," in 2D"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"is_hole"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Multi-polygon"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"poly2d"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/docs/openlabel/openlabel-format#representing-multi-polygons",children:"Multi-polygon"})," in 2D"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"is_hole"})," & ",(0,i.jsx)(n.code,{children:"polygon_id"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Curve"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"poly2d"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/docs/openlabel/openlabel-format#representing-curves",children:"Curve"})," or line in 2D"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"interpolation_method"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2D point"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"point2d"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/openlabel/openlabel-format#representing-2d-points",children:"Point"})}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Group of 2D points"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"point2d"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/openlabel/openlabel-format#representing-groups-of-2d-points",children:"Group of points"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"point_class"})})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Note that all geometries should be specified under frames rather than in the root of the pre-annotation. 3D geometries\nshould be expressed in the lidar coordinate system in the single-lidar case, but in the reference coordinate system in\nthe multi-lidar case. The rotation of cuboids should be the same as that in ",(0,i.jsx)(n.a,{href:"/docs/openlabel/openlabel-format#rotation-of-cuboids",children:"exports"}),".\n2D geometries should be expressed in pixel coordinates. See ",(0,i.jsx)(n.a,{href:"/docs/kognic-io/calibrations/overview",children:"coordinate systems"})," for more information."]}),"\n",(0,i.jsx)(n.h3,{id:"attributes",children:"Attributes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Text"}),"\n",(0,i.jsx)(n.li,{children:"Num"}),"\n",(0,i.jsx)(n.li,{children:"Boolean"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For 2D geometry, attributes may be specified as geometry specific (aka source/sensor specific), or object specific. Attributes can be static (specified in the ",(0,i.jsx)(n.code,{children:"objects"})," key) or dynamic (specified in the ",(0,i.jsx)(n.code,{children:"object_data"})," for the object in the frame) and must be allowed by the ",(0,i.jsx)(n.a,{href:"../key-concepts#task-definition",children:"task definition"}),", if one exists. Geometry specific attributes (those which appear on a single shape within frames) must also be declared as such in the task definition; arbitrary properties cannot be used in a source-specific way."]}),"\n",(0,i.jsx)(n.h3,{id:"contexts",children:"Contexts"}),"\n",(0,i.jsx)(n.p,{children:"Currently not supported. Contact Kognic if you need support for this or use regular attributes instead."}),"\n",(0,i.jsx)(n.h3,{id:"frames",children:"Frames"}),"\n",(0,i.jsx)(n.p,{children:"Every pre-annotation must contain frames with unique timestamps that are among the ones specified in the scene. The\nreason for this is that the timestamps are used to map the frame in the pre-annotation to the correct frame in the scene.\nIn the static case, one frame should be used with timestamp 0."}),"\n",(0,i.jsx)(n.h3,{id:"relations",children:"Relations"}),"\n",(0,i.jsx)(n.p,{children:"Currently not supported. Contact Kognic if you need support for this or use regular attributes instead."}),"\n",(0,i.jsx)(n.h3,{id:"streams",children:"Streams"}),"\n",(0,i.jsxs)(n.p,{children:["Every geometry must have the ",(0,i.jsx)(n.code,{children:"stream"})," property specified. This property determines which stream (or sensor) that the\ngeometry appears in. It is important that the stream is among the ones specified in the scene and of the same type, for\nexample ",(0,i.jsx)(n.code,{children:"camera"})," or ",(0,i.jsx)(n.code,{children:"lidar"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"sparseness",children:"Sparseness"}),"\n",(0,i.jsxs)(n.p,{children:["Pre-annotations can be sparse, meaning that its objects or geometries do not need to be present in every frame. Instead,\nthey can be present in a subset of frames and then interpolated in the frames in between. Utilizing this feature can speed\nup the annotation process significantly for sequences. Sparseness can be accomplished in two different ways, either by\nusing object data pointers or the boolean property ",(0,i.jsx)(n.code,{children:"interpolated"}),". The former is the recommended way of doing it in most\ncases since it will lead to a more compact pre-annotation. The latter is useful when the pre-annotation is created from\nexported annotations from the Kognic platform."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Interpolation"})," is done by linearly interpolating the geometry values between key frames. This is done in pixel\ncoordinates for 2D geometries. For 3D geometries, the interpolation can be done in either the frame local coordinate system\nor the world coordinate system (see ",(0,i.jsx)(n.a,{href:"/docs/kognic-io/coordinate_systems",children:"Coordinate Systems"}),"). This is configured in the annotation\ninstruction so reach out to the Kognic team about this if you are unsure. Note that interpolation in the world coordinate\nsystem is recommended but requires that the scene contains ego poses."]}),"\n",(0,i.jsx)(n.h3,{id:"object-data-pointers",children:"Object Data Pointers"}),"\n",(0,i.jsxs)(n.p,{children:["In OpenLABEL, object data pointers are used to create a specification for objects. For example, you can specify what attributes\nand geometries that are used for specific objects. In addition, you can specify for which frames that these are present.\nIf a geometry is specified in the object data pointer, it will be present in all frames that the object data pointer is\npointing to. If the geometry is not provided in some of these frames, it will be interpolated. Note that geometries ",(0,i.jsx)(n.strong,{children:"must"}),"\nbe provided for the first and last frame in the object data pointer. Otherwise, the pre-annotation will be rejected."]}),"\n",(0,i.jsx)(n.p,{children:"One limitation is that a geometry must be in the same stream for all frames when using object data pointers. This is because\ninterpolation is done in the stream coordinate system. If you need to use geometries of the same type in different streams,\nyou can simply use different names for the geometries in the different streams."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#sparseness-with-object-data-pointers",children:"Sparseness with Object Data Pointers"})," shows an example of how to use object data pointers."]}),"\n",(0,i.jsx)(n.h3,{id:"interpolated-property",children:"Interpolated Property"}),"\n",(0,i.jsxs)(n.p,{children:["The boolean property ",(0,i.jsx)(n.code,{children:"interpolated"})," can be used to specify that a geometry should be interpolated. Geometries are still\nrequired to be present in interpolated frames but their geometry values will be ignored. Note that interpolated geometries\nmust have corresponding geometries (interpolated or not) in the first and last frame of the pre-annotation. Otherwise, the\npre-annotation will be rejected."]}),"\n",(0,i.jsxs)(n.p,{children:["Using the ",(0,i.jsx)(n.code,{children:"interpolated"})," property is the recommended way of doing it when the pre-annotation is created from exported\nannotations from the Kognic platform."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#sparseness-with-interpolated-property",children:"Sparseness with Interpolated Property"})," shows an example of how to use the ",(0,i.jsx)(n.code,{children:"interpolated"})," property."]}),"\n",(0,i.jsx)(n.h3,{id:"attributes-1",children:"Attributes"}),"\n",(0,i.jsx)(n.p,{children:"Attributes are handled differently compared to geometries. If an attribute is not present in a frame, its last value\nwill simply be used if the object (or geometry if the property is source-specific) is present in the frame. If the object\nis not present in the frame, the attribute will be ignored. Dense attributes will be sparsified automatically when the\npre-annotation is uploaded to the Kognic platform."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Below follows examples of supported pre-annotations."}),"\n",(0,i.jsx)(n.h3,{id:"3d-cuboid-and-2d-bounding-box-with-a-static-property",children:"3D cuboid and 2D bounding box with a static property"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "openlabel": {\n    "frame_intervals": [],\n    "frames": {\n      "0": {\n        "frame_properties": {\n          "timestamp": 0,\n          "external_id": "0",\n          "streams": { "LIDAR1": {}, "ZFC": {} }\n        },\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [\n                {\n                  "attributes": {\n                    "text": [{ "name": "stream", "val": "ZFC" }]\n                  },\n                  "name": "Bounding-box-1",\n                  "val": [1.0, 1.0, 40.0, 30.0]\n                }\n              ],\n              "cuboid": [\n                {\n                  "attributes": {\n                    "text": [{ "name": "stream", "val": "LIDAR1" }]\n                  },\n                  "name": "cuboid-89ac8a2b",\n                  "val": [\n                    2.079312801361084, -18.919870376586914, 0.3359137773513794,\n                    -0.002808041640852679, 0.022641949116037438,\n                    0.06772797660868829, 0.9974429197838155, 1.767102435869269,\n                    4.099334155319101, 1.3691029802958168\n                  ]\n                }\n              ]\n            }\n          }\n        }\n      }\n    },\n    "metadata": {\n      "schema_version": "1.0.0"\n    },\n    "objects": {\n      "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n        "name": "1232b4f4-e3ca-446a-91cb-d8d403703df7",\n        "object_data": {\n          "text": [{ "name": "color", "val": "red" }]\n        },\n        "type": "PassengerCar"\n      }\n    },\n    "streams": {\n      "LIDAR1": { "type": "lidar" },\n      "ZFC": { "type": "camera" }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"3d-line-with-a-dynamic-property",children:"3D line with a dynamic property"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "openlabel": {\n    "frame_intervals": [{ "frame_end": 0, "frame_start": 0 }],\n    "frames": {\n      "0": {\n        "frame_properties": {\n          "streams": { "lidar": {} },\n          "timestamp": 0,\n          "external_id": "0"\n        },\n        "objects": {\n          "cc06aced-d7dc-4638-a6e9-dc7f5e215340": {\n            "object_data": {\n              "poly3d": [\n                {\n                  "attributes": {\n                    "text": [{ "name": "stream", "val": "lidar" }]\n                  },\n                  "closed": false,\n                  "name": "line-3d-1",\n                  "val": [\n                    -5.0, 0.0, 0.0, -5.0, 10.0, 0.0, 5.0, 10.0, 0.0, 5.0, 0.0,\n                    0.0, -5.0, 0.0, 0.0\n                  ]\n                }\n              ],\n              "text": [{ "name": "occluded", "val": "No" }]\n            }\n          }\n        }\n      }\n    },\n    "metadata": { "schema_version": "1.0.0" },\n    "objects": {\n      "cc06aced-d7dc-4638-a6e9-dc7f5e215340": {\n        "name": "cc06aced",\n        "type": "Region"\n      }\n    },\n    "streams": {\n      "lidar": { "type": "lidar" },\n      "ZFC": { "type": "camera" }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sparseness-with-object-data-pointers",children:"Sparseness with Object Data Pointers"}),"\n",(0,i.jsxs)(n.p,{children:["In the example below the object ",(0,i.jsx)(n.code,{children:"1232b4f4-e3ca-446a-91cb-d8d403703df7"})," has a bounding box called ",(0,i.jsx)(n.code,{children:"the-bbox-name"})," that is\nprovided in frames 0 and 3. In frames 1 and 2, the bounding box will be interpolated."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "openlabel": {\n    "objects": {\n      "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n          "name": "car-name",\n          "type":  "car",\n          "object_data_pointers": {\n            "the-bbox-name": {\n              "type":"bbox",\n              "frame_intervals": [{"frame_start": 0, "frame_end": 3}]\n            }\n          }\n        }\n    },\n    "frames": {\n      "0": {\n        ...,\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [{"name": "the-bbox-name",...}]\n            }\n          }\n        }\n      },\n      "1": {},\n      "2": {},\n      "3": {\n        ...,\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [{"name": "the-bbox-name",...}]\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sparseness-with-interpolated-property",children:"Sparseness with Interpolated Property"}),"\n",(0,i.jsxs)(n.p,{children:["In the example below sparseness is determined using the ",(0,i.jsx)(n.code,{children:"interpolated"})," property. The object\n",(0,i.jsx)(n.code,{children:"1232b4f4-e3ca-446a-91cb-d8d403703df7"})," has a bounding box for which the ",(0,i.jsx)(n.code,{children:"interpolated"})," property is set to ",(0,i.jsx)(n.code,{children:"true"})," in\nframes 1 and 2 but not in frames 0 and 3. The geometry values in frames 1 and 2 are ignored and instead interpolated\nfrom the geometry values in frames 0 and 3."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "openlabel": {\n    ...,\n    "frames": {\n      "0": {\n        ...,\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [\n                {\n                  "attributes": {\n                    "stream": [{ "name": "stream", "val":  "CAM" }],\n                    "boolean": [{ "name": "interpolated", "val": false }]\n                  },\n                  ...\n                }\n              ]\n            }\n          }\n        }\n      },\n      "1": {\n        ...,\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [\n                {\n                  "attributes": {\n                    "stream": [{ "name": "stream", "val":  "CAM" }],\n                    "boolean": [{ "name": "interpolated", "val": true }]\n                  },\n                  ...\n                }\n              ]\n            }\n          }\n        }\n      },\n      "2": {\n        ...,\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [\n                {\n                  "attributes": {\n                    "stream": [{ "name": "stream", "val":  "CAM" }],\n                    "boolean": [{ "name": "interpolated", "val": true }]\n                  },\n                  ...\n                }\n              ]\n            }\n          }\n        }\n      },\n      "3": {\n        ...,\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [\n                {\n                  "attributes": {\n                    "stream": [{ "name": "stream", "val":  "CAM" }],\n                    "boolean": [{ "name": "interpolated", "val": false }]\n                  },\n                  ...\n                }\n              ]\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);