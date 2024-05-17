"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[2995],{9954:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=a(4848),i=a(8453);const o={title:"The prediction format"},s=void 0,r={id:"dataset-exploration/prediction-format",title:"The prediction format",description:"Predictions use the OpenLabel format, which is expressed in JSON. This is the same format as the one used",source:"@site/docs/dataset-exploration/prediction-format.md",sourceDirName:"dataset-exploration",slug:"/dataset-exploration/prediction-format",permalink:"/docs/dataset-exploration/prediction-format",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/dataset-exploration/prediction-format.md",tags:[],version:"current",frontMatter:{title:"The prediction format"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/dataset-exploration/introduction"},next:{title:"Uploading predictions",permalink:"/docs/dataset-exploration/uploading-predictions"}},d={},c=[{value:"Supported prediction features",id:"supported-prediction-features",level:2},{value:"Prediction examples",id:"prediction-examples",level:2},{value:"2D bounding box in two frames with a static property <code>color</code>",id:"2d-bounding-box-in-two-frames-with-a-static-property-color",level:3},{value:"3D cuboid in two frames with a static property <code>color</code>",id:"3d-cuboid-in-two-frames-with-a-static-property-color",level:3},{value:"A single frame segmentation bitmap",id:"a-single-frame-segmentation-bitmap",level:3},{value:"Transforming, upscaling, padding and base64-encoding a small color-image to a larger grayscale image using Python PIL",id:"transforming-upscaling-padding-and-base64-encoding-a-small-color-image-to-a-larger-grayscale-image-using-python-pil",level:4},{value:"Openlabel for a segmentation bitmap",id:"openlabel-for-a-segmentation-bitmap",level:4},{value:"Using <code>kognic-openlabel</code> to validate the format",id:"using-kognic-openlabel-to-validate-the-format",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Predictions use the ",(0,t.jsx)(n.a,{href:"https://www.asam.net/standards/detail/openlabel/",children:"OpenLabel format"}),", which is expressed in JSON. This is the same format as the one used\nfor ",(0,t.jsx)(n.a,{href:"../kognic-io/pre_annotations/#openlabel-support",children:"uploading pre-annotations"}),". General information about the\nOpenLabel format can be found in ",(0,t.jsx)(n.a,{href:"../openlabel/openlabel-format",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"supported-prediction-features",children:"Supported prediction features"}),"\n",(0,t.jsx)(n.p,{children:"The current API for uploading predictions supports the following geometries:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"OpenLABEL field"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Cuboid"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"cuboid"})}),(0,t.jsx)(n.td,{children:"Cuboid in 3D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Bounding box"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"bbox"})}),(0,t.jsx)(n.td,{children:"Bounding box in 2D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Bitmaps (segmentation)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"image"})}),(0,t.jsx)(n.td,{children:"Segmentation bitmap for images"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The rotation of cuboids should be the same as that in ",(0,t.jsx)(n.a,{href:"/docs/openlabel/openlabel-format#rotation-of-cuboids",children:"exports"})," (see ",(0,t.jsx)(n.a,{href:"/docs/kognic-io/coordinate_systems",children:"coordinate systems"})," for more information). 2D geometries should be expressed in pixel coordinates."]}),"\n",(0,t.jsxs)(n.p,{children:["For this API, the relevant parts (keys) are ",(0,t.jsx)(n.code,{children:"frames"}),", ",(0,t.jsx)(n.code,{children:"objects"}),", ",(0,t.jsx)(n.code,{children:"streams"}),", ",(0,t.jsx)(n.code,{children:"ontologies"})," and ",(0,t.jsx)(n.code,{children:"metadata"}),". The last one (",(0,t.jsx)(n.code,{children:"metadata"}),") is the easiet one, and should just read ",(0,t.jsx)(n.code,{children:'schema_version": "1.0.0"'})," (see examples below for full context). Also ",(0,t.jsx)(n.code,{children:"stream"})," is straightforward, and should specify what sensors (cameras, lidars, ...) there are and what their name, like ",(0,t.jsx)(n.code,{children:'sensor_name: {"type": "camera"}'})," or ",(0,t.jsx)(n.code,{children:'sensor_name: {"type": "lidar"}'}),". Again, see the examples below for full context."]}),"\n",(0,t.jsxs)(n.p,{children:["All parts of a prediction that is time-varying throughout a sequence is described in ",(0,t.jsx)(n.code,{children:"frames"}),", such as corodinates and dynamic properties. Each frame in the sequence is represented by a key-value pair under ",(0,t.jsx)(n.code,{children:"frames"}),". The key is the ",(0,t.jsx)(n.code,{children:"frame_id"}),", and the value should look like"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'frame_id: {\n  "frame_properties": {\n    "timestamp": 0,\n    "external_id": "",\n    "streams": {}\n  },\n  "objects": {\n    ...\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The value for ",(0,t.jsx)(n.code,{children:"frame_properties.timestamp"})," (measured in ms, recommended to set to ",(0,t.jsx)(n.code,{children:"0"})," for non-sequence data) will be used for matching each predicted frame to the relevant annotated frame, and must therefore match the scene that has been annotated. We recommend that ",(0,t.jsx)(n.code,{children:"frame_id"})," (a string) follows the ",(0,t.jsx)(n.code,{children:"frame_id"})," used to describe the underlying scene, although ",(0,t.jsx)(n.code,{children:"frame_properties.timestamp"})," will take precedence in case of mismatch. In case of non-sequence data, a good choice for ",(0,t.jsx)(n.code,{children:"frame_id"})," is ",(0,t.jsx)(n.code,{children:'"0"'}),". The values for ",(0,t.jsx)(n.code,{children:"frame_properties.external_id"})," and ",(0,t.jsx)(n.code,{children:"frame_properties.stream"})," will be resolved automatically if left empty as shown."]}),"\n",(0,t.jsxs)(n.p,{children:["The key ",(0,t.jsx)(n.code,{children:"objects"})," in turn contains key-value pairs, where each such pair is basically an object in that frame. Note that there is the key ",(0,t.jsx)(n.code,{children:"objects"})," in each frame, as well as in the root. They describe basically the same objects, but the information that is potentially time-varying (i.e. frame-specific, such as coordinates) belongs to the frame, whereas static information (such as the object class) belongs in the root. The object keys (strings) are arbitrary, but must match the keys in the different ",(0,t.jsx)(n.code,{children:"objects"})," if they are describing the same object."]}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to the examples below on how to describe the objects in detail. For cuboids and bounding boxes, an existence confidence can be provided by specifying the frame-specific attribute ",(0,t.jsx)(n.code,{children:"confidence"}),". It must be a numeric value between 0.0 and 1.0, and will be set to ",(0,t.jsx)(n.code,{children:"1.0"})," if left empty. If provided, it must be defined as a numeric value. The static ",(0,t.jsx)(n.code,{children:"object_data.type"})," will show up as the class name in the tool."]}),"\n",(0,t.jsxs)(n.p,{children:["For segmentation bitmaps, the image itself is a grayscale 8-bit PNG image of the same resolution as the annotated images (if the actual prediction only partially cover the annotated image or is of lower resolution, it has to be padded and/or upscaled). The image itself is supplied in the openlabel by pasting its base64-encoding as a string as an object to a frame. See the example below. Moreover, also an ",(0,t.jsx)(n.code,{children:"ontology"})," has to be supplied which describes what class corresponds to each color level. With an 8-bit grayscale image, it is possible to encode up to 256 classes. The ",(0,t.jsx)(n.code,{children:"ontology"}),"can be left out for non-segmentation predictions."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"camera_id"})," in the examples below must match the id of the sensors in the annotated scene, whereas the corresponding id for the lidar sensor should be set to ",(0,t.jsx)(n.code,{children:"@lidar"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"prediction-examples",children:"Prediction examples"}),"\n",(0,t.jsxs)(n.h3,{id:"2d-bounding-box-in-two-frames-with-a-static-property-color",children:["2D bounding box in two frames with a static property ",(0,t.jsx)(n.code,{children:"color"})]}),"\n",(0,t.jsxs)(n.p,{children:["In OpenLabel, a bounding box is represented as a list of 4 values: ",(0,t.jsx)(n.code,{children:"[x, y, width, height]"}),", where ",(0,t.jsx)(n.code,{children:"x"})," and ",(0,t.jsx)(n.code,{children:"y"})," are the\ncenter coordinates of the bounding box. The ",(0,t.jsx)(n.code,{children:"width"})," and ",(0,t.jsx)(n.code,{children:"height"})," are the width and height of the bounding box. The ",(0,t.jsx)(n.code,{children:"x"}),"\nand ",(0,t.jsx)(n.code,{children:"y"})," coordinates are relative to the upper left corner of the image."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "openlabel": {\n    "frames": {\n      "0": {\n        "frame_properties": {\n          "timestamp": 0,\n          "external_id": "",\n          "streams": {}\n        },\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [\n                {\n                  "attributes": {\n                    "num": [\n                      {\n                        "val": 0.85,\n                        "name": "confidence"\n                      }\n                    ],\n                    "text": [\n                      {\n                        "name": "stream",\n                        "val": "camera_id"\n                      }\n                    ]\n                  },\n                  "name": "any-human-readable-bounding-box-name",\n                  "val": [\n                    1.0,\n                    1.0,\n                    40.0,\n                    30.0\n                  ]\n                }\n              ]\n            }\n          }\n        }\n      },\n      "1": {\n        "frame_properties": {\n          "timestamp": 50,\n          "external_id": "",\n          "streams": {}\n        },\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [\n                {\n                  "attributes": {\n                    "num": [\n                      {\n                        "val": 0.82,\n                        "name": "confidence"\n                      }\n                    ],\n                    "text": [\n                      {\n                        "name": "stream",\n                        "val": "camera_id"\n                      }\n                    ]\n                  },\n                  "name": "any-human-readable-bounding-box-name",\n                  "val": [\n                    2.0,\n                    3.0,\n                    30.0,\n                    20.0\n                  ]\n                }\n              ]\n            }\n          }\n        }\n      }\n    },\n    "metadata": {\n      "schema_version": "1.0.0"\n    },\n    "objects": {\n      "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n        "name": "any-human-readable-bounding-box-name",\n        "object_data": {\n          "text": [\n            {\n              "name": "color",\n              "val": "red"\n            }\n          ]\n        },\n        "type": "PassengerCar"\n      }\n    },\n    "streams": {\n      "camera_id": {\n        "type": "camera"\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"3d-cuboid-in-two-frames-with-a-static-property-color",children:["3D cuboid in two frames with a static property ",(0,t.jsx)(n.code,{children:"color"})]}),"\n",(0,t.jsxs)(n.p,{children:["Cuboids are represented as a list of 10 values: ",(0,t.jsx)(n.code,{children:"[x, y, z, qx, qy, qz, qw, width, length, height]"}),", where ",(0,t.jsx)(n.code,{children:"x"}),", ",(0,t.jsx)(n.code,{children:"y"}),",\nand ",(0,t.jsx)(n.code,{children:"z"})," are the center coordinates of the cuboid. ",(0,t.jsx)(n.code,{children:"x"}),", ",(0,t.jsx)(n.code,{children:"y"}),", ",(0,t.jsx)(n.code,{children:"z"}),", ",(0,t.jsx)(n.code,{children:"width"}),", ",(0,t.jsx)(n.code,{children:"length"}),", and ",(0,t.jsx)(n.code,{children:"height"})," are in meters.\n",(0,t.jsx)(n.code,{children:"qx"}),", ",(0,t.jsx)(n.code,{children:"qy"}),", ",(0,t.jsx)(n.code,{children:"qz"}),", and ",(0,t.jsx)(n.code,{children:"qw"})," are the quaternion values for the rotation of the cuboid."]}),"\n",(0,t.jsxs)(n.p,{children:["Read more about coordinate systems and\nquaternions ",(0,t.jsx)(n.a,{href:"../openlabel/openlabel-format/#rotation-of-cuboids",children:"here"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "openlabel": {\n    "frames": {\n      "0": {\n        "frame_properties": {\n          "timestamp": 0,\n          "external_id": "",\n          "streams": {}\n        },\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "cuboid": [\n                {\n                  "attributes": {\n                    "num": [\n                      {\n                        "val": 0.85,\n                        "name": "confidence"\n                      }\n                    ],\n                    "text": [\n                      {\n                        "name": "stream",\n                        "val": "@lidar"\n                      }\n                    ]\n                  },\n                  "name": "any-human-readable-cuboid-name",\n                  "val": [\n                    2.079312801361084,\n                    -18.919870376586914,\n                    0.3359137773513794,\n                    -0.002808041640852679,\n                    0.022641949116037438,\n                    0.06772797660868829,\n                    0.9974429197838155,\n                    1.767102435869269,\n                    4.099334155319101,\n                    1.3691029802958168\n                  ]\n                }\n              ]\n            }\n          }\n        }\n      },\n    "1": {\n        "frame_properties": {\n          "timestamp": 50,\n          "external_id": "",\n          "streams": {}\n        },\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "cuboid": [\n                {\n                  "attributes": {\n                    "num": [\n                      {\n                        "val": 0.87,\n                        "name": "confidence"\n                      }\n                    ],\n                    "text": [\n                      {\n                        "name": "stream",\n                        "val": "@lidar"\n                      }\n                    ]\n                  },\n                  "name": "any-human-readable-cuboid-name",\n                  "val": [\n                    3.123312801361927,\n                    -20.285740376586913,\n                    0.0649137773513349,\n                    -0.002808041640852679,\n                    0.022641949116037438,\n                    0.06772797660868829,\n                    0.9974429197838155,\n                    1.767102435869269,\n                    4.099334155319101,\n                    1.3691029802958168\n                  ]\n                }\n              ]\n            }\n          }\n        }\n      }\n    },\n    "metadata": {\n      "schema_version": "1.0.0"\n    },\n    "objects": {\n      "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n        "name": "any-human-readable-cuboid-name",\n        "object_data": {\n          "text": [\n            {\n              "name": "color",\n              "val": "red"\n            }\n          ]\n        },\n        "type": "PassengerCar"\n      }\n    },\n    "streams": {\n      "@lidar": {\n        "type": "lidar"\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"a-single-frame-segmentation-bitmap",children:"A single frame segmentation bitmap"}),"\n",(0,t.jsx)(n.h4,{id:"transforming-upscaling-padding-and-base64-encoding-a-small-color-image-to-a-larger-grayscale-image-using-python-pil",children:"Transforming, upscaling, padding and base64-encoding a small color-image to a larger grayscale image using Python PIL"}),"\n",(0,t.jsx)(n.p,{children:"This code example gives an example of how to go from a multicolor prediction bitmap image of resolution 300 x 200 to a grayscale image of resolution 1000 x 800, by first converting to grayscale, then rescaling the prediction to 600 x 400 and then padding equally on the sides. It also includes code for base64-encoding the image as a string, that later can be used in the openlabel. This code only makes use of built-in numpy functions, but is not optimized for performance."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import base64\nimport io\nimport numpy as np\nfrom PIL import Image\n\n# The original mapping used to produce the images\noriginal_mapping = {\n    (0,0,0): "_background",\n    (255,0,0): "class_1",\n    (0,0,255): "class_2",\n}\n\n# The grayscale mapping (this will also be the ontology in the openlabel)\ngrayscale_mapping = {\n    "_background": 0,\n    "class_1": 1,\n    "class_2": 2,\n}\n\nprediction = Image.open("my_original_prediction_file.png")  # Let\'s say this has resolution 300 x 200\n\ndef lookup(pixel_color):\n  return grayscale_mapping[original_mapping[tuple(pixel_color)]]\n\n# convert to grayscale via numpy array lookup\nprediciton_numpy = np.array(prediction)\ngrayscale_prediction_numpy = np.vectorize(lookup, signature="(m)->()")(prediciton_numpy)\ngrayscale_prediction = Image.fromarray(grayscale_prediction_numpy.astype(np.uint8))\n\n# upscale to another resolution\nupscaled_grayscale_prediction = grayscale_prediction.resize((600, 400), resample=Image.Resampling.NEAREST)\n\n# padding by first constructing a new background image of target size, and then paste the prediction in the right position\npadded_grayscale_prediction = Image.new("L", (1000, 800), 0)\npadded_grayscale_prediction.paste(upscaled_grayscale_prediction, (201, 201))\n\nimage_bytes = io.BytesIO()\npadded_grayscale_prediction.save(image_bytes, format="PNG")\nprediction_str = base64.b64encode(image_bytes.getvalue()).decode("utf-8")\n\n'})}),"\n",(0,t.jsx)(n.h4,{id:"openlabel-for-a-segmentation-bitmap",children:"Openlabel for a segmentation bitmap"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"prediction_str"})," and ",(0,t.jsx)(n.code,{children:"grayscale_mapping"})," can thereafter be used in the openlabel like"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "openlabel": {\n        "frames": {\n            "0": {\n                "objects": {\n                    "07d469f9-c9ab-44ec-8d09-0c72bdb44dc2": {\n                        "object_data": {\n                            "image": [\n                                {\n                                    "name": "a_human_readable_name",\n                                    "val": prediction_str,\n                                    "mime_type": "image/png",\n                                    "encoding": "base64",\n                                    "attributes": {\n                                        "text": [\n                                            {\n                                                "val": "camera_id",\n                                                "name": "stream"\n                                            }\n                                        ]\n                                    }\n                                }\n                            ]\n                        }\n                    }\n                },\n                "frame_properties": {\n                    "streams": {},\n                    "timestamp": 0,\n                    "external_id": ""\n                },\n            }\n        },\n        "objects": {\n            "07d469f9-c9ab-44ec-8d09-0c72bdb44dc2": {\n                "name": "07d469f9-c9ab-44ec-8d09-0c72bdb44dc2",\n                "type": "segmentation_bitmap"\n            }\n        },\n        "streams": {\n            "camera_id": {\n                "type": "camera"\n            }\n        },\n        "metadata": {\n            "schema_version": "1.0.0"\n        },\n        "ontologies": {\n            "0": {\n                "classifications": {str(v): k for k, v in grayscale_mapping.items()},\n                "uri": ""\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"If providing predictions for multiple cameras in the scene, the list of images could be extended."}),"\n",(0,t.jsxs)(n.h3,{id:"using-kognic-openlabel-to-validate-the-format",children:["Using ",(0,t.jsx)(n.code,{children:"kognic-openlabel"})," to validate the format"]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://pypi.org/project/kognic-openlabel/",children:"kognic-openlabel"})," for more information."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var t=a(6540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);