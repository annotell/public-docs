"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[762],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,b=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return t?a.createElement(b,r(r({ref:n},d),{},{components:t})):a.createElement(b,r({ref:n},d))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3836:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const o={title:"The prediction format"},r=void 0,l={unversionedId:"dataset-exploration/prediction-format",id:"dataset-exploration/prediction-format",title:"The prediction format",description:"Predictions use the OpenLabel format, which is expressed in JSON. This is the same format as the one used",source:"@site/docs/dataset-exploration/prediction-format.md",sourceDirName:"dataset-exploration",slug:"/dataset-exploration/prediction-format",permalink:"/docs/dataset-exploration/prediction-format",draft:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/dataset-exploration/prediction-format.md",tags:[],version:"current",frontMatter:{title:"The prediction format"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/dataset-exploration/introduction"},next:{title:"Uploading predictions",permalink:"/docs/dataset-exploration/uploading-predictions"}},s={},p=[{value:"Supported prediction features",id:"supported-prediction-features",level:2},{value:"Prediction examples",id:"prediction-examples",level:2},{value:"2D bounding box in two frames with a static property <code>color</code>",id:"2d-bounding-box-in-two-frames-with-a-static-property-color",level:3},{value:"3D cuboid in two frames with a static property <code>color</code>",id:"3d-cuboid-in-two-frames-with-a-static-property-color",level:3},{value:"A single frame segmentation bitmap",id:"a-single-frame-segmentation-bitmap",level:3},{value:"Transforming, upscaling, padding and base64-encoding a small color-image to a larger grayscale image using Python PIL",id:"transforming-upscaling-padding-and-base64-encoding-a-small-color-image-to-a-larger-grayscale-image-using-python-pil",level:4},{value:"Openlabel for a segmentation bitmap",id:"openlabel-for-a-segmentation-bitmap",level:4},{value:"Using <code>kognic-openlabel</code> to validate the format",id:"using-kognic-openlabel-to-validate-the-format",level:3}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Predictions use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.asam.net/standards/detail/openlabel/"},"OpenLabel format"),", which is expressed in JSON. This is the same format as the one used\nfor ",(0,i.kt)("a",{parentName:"p",href:"../kognic-io/pre_annotations/#openlabel-support"},"uploading pre-annotations"),". General information about the\nOpenLabel format can be found in ",(0,i.kt)("a",{parentName:"p",href:"../openlabel/openlabel-format"},"here"),"."),(0,i.kt)("h2",{id:"supported-prediction-features"},"Supported prediction features"),(0,i.kt)("p",null,"The current API for uploading predictions supports the following geometries:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"OpenLABEL field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cuboid"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cuboid")),(0,i.kt)("td",{parentName:"tr",align:null},"Cuboid in 3D")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Bounding box"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bbox")),(0,i.kt)("td",{parentName:"tr",align:null},"Bounding box in 2D")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Bitmaps (segmentation)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"image")),(0,i.kt)("td",{parentName:"tr",align:null},"Segmentation bitmap for images")))),(0,i.kt)("p",null,"The rotation of cuboids should be the same as that in ",(0,i.kt)("a",{parentName:"p",href:"/docs/openlabel/openlabel-format#rotation-of-cuboids"},"exports")," (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/kognic-io/coordinate_systems"},"coordinate systems")," for more information). 2D geometries should be expressed in pixel coordinates."),(0,i.kt)("p",null,"For this API, the relevant parts (keys) are ",(0,i.kt)("inlineCode",{parentName:"p"},"frames"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"objects"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"streams"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ontologies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),". The last one (",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),") is the easiet one, and should just read ",(0,i.kt)("inlineCode",{parentName:"p"},'schema_version": "1.0.0"')," (see examples below for full context). Also ",(0,i.kt)("inlineCode",{parentName:"p"},"stream")," is straightforward, and should specify what sensors (cameras, lidars, ...) there are and what their name, like ",(0,i.kt)("inlineCode",{parentName:"p"},'sensor_name: {"type": "camera"}')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'sensor_name: {"type": "lidar"}'),". Again, see the examples below for full context."),(0,i.kt)("p",null,"All parts of a prediction that is time-varying throughout a sequence is described in ",(0,i.kt)("inlineCode",{parentName:"p"},"frames"),", such as corodinates and dynamic properties. Each frame in the sequence is represented by a key-value pair under ",(0,i.kt)("inlineCode",{parentName:"p"},"frames"),". The key is the ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_id"),", and the value should look like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'frame_id: {\n  "frame_properties": {\n    "timestamp": 0,\n    "external_id": "",\n    "streams": {}\n  },\n  "objects": {\n    ...\n  }\n}\n')),(0,i.kt)("p",null,"The value for ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_properties.timestamp")," (measured in ms, recommended to set to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," for non-sequence data) will be used for matching each predicted frame to the relevant annotated frame, and must therefore match the scene that has been annotated. We recommend that ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_id")," (a string) follows the ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_id")," used to describe the underlying scene, although ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_properties.timestamp")," will take precedence in case of mismatch. In case of non-sequence data, a good choice for ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_id")," is ",(0,i.kt)("inlineCode",{parentName:"p"},'"0"'),". The values for ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_properties.external_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"frame_properties.stream")," will be resolved automatically if left empty as shown."),(0,i.kt)("p",null,"The key ",(0,i.kt)("inlineCode",{parentName:"p"},"objects")," in turn contains key-value pairs, where each such pair is basically an object in that frame. Note that there is the key ",(0,i.kt)("inlineCode",{parentName:"p"},"objects")," in each frame, as well as in the root. They describe basically the same objects, but the information that is potentially time-varying (i.e. frame-specific, such as coordinates) belongs to the frame, whereas static information (such as the object class) belongs in the root. The object keys (strings) are arbitrary, but must match the keys in the different ",(0,i.kt)("inlineCode",{parentName:"p"},"objects")," if they are describing the same object."),(0,i.kt)("p",null,"Please refer to the examples below on how to describe the objects in detail. For cuboids and bounding boxes, an existence confidence can be provided by specifying the frame-specific attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"confidence"),". It must be a numeric value between 0.0 and 1.0, and will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0")," if left empty. If provided, it must be defined as a numeric value. The static ",(0,i.kt)("inlineCode",{parentName:"p"},"object_data.type")," will show up as the class name in the tool."),(0,i.kt)("p",null,"For segmentation bitmaps, the image itself is a grayscale 8-bit PNG image of the same resolution as the annotated images (if the actual prediction only partially cover the annotated image or is of lower resolution, it has to be padded and/or upscaled). The image itself is supplied in the openlabel by pasting its base64-encoding as a string as an object to a frame. See the example below. Moreover, also an ",(0,i.kt)("inlineCode",{parentName:"p"},"ontology")," has to be supplied which describes what class corresponds to each color level. With an 8-bit grayscale image, it is possible to encode up to 256 classes. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ontology"),"can be left out for non-segmentation predictions."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"camera_id")," in the examples below must match the id of the sensors in the annotated scene, whereas the corresponding id for the lidar sensor should be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"@lidar"),"."),(0,i.kt)("h2",{id:"prediction-examples"},"Prediction examples"),(0,i.kt)("h3",{id:"2d-bounding-box-in-two-frames-with-a-static-property-color"},"2D bounding box in two frames with a static property ",(0,i.kt)("inlineCode",{parentName:"h3"},"color")),(0,i.kt)("p",null,"In OpenLabel, a bounding box is represented as a list of 4 values: ",(0,i.kt)("inlineCode",{parentName:"p"},"[x, y, width, height]"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," are the\ncenter coordinates of the bounding box. The ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," are the width and height of the bounding box. The ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," coordinates are relative to the upper left corner of the image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "openlabel": {\n    "frames": {\n      "0": {\n        "frame_properties": {\n          "timestamp": 0,\n          "external_id": "",\n          "streams": {}\n        },\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [\n                {\n                  "attributes": {\n                    "num": [\n                      {\n                        "val": 0.85,\n                        "name": "confidence"\n                      }\n                    ],\n                    "text": [\n                      {\n                        "name": "stream",\n                        "val": "camera_id"\n                      }\n                    ]\n                  },\n                  "name": "any-human-readable-bounding-box-name",\n                  "val": [\n                    1.0,\n                    1.0,\n                    40.0,\n                    30.0\n                  ]\n                }\n              ]\n            }\n          }\n        }\n      },\n      "1": {\n        "frame_properties": {\n          "timestamp": 50,\n          "external_id": "",\n          "streams": {}\n        },\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "bbox": [\n                {\n                  "attributes": {\n                    "num": [\n                      {\n                        "val": 0.82,\n                        "name": "confidence"\n                      }\n                    ],\n                    "text": [\n                      {\n                        "name": "stream",\n                        "val": "camera_id"\n                      }\n                    ]\n                  },\n                  "name": "any-human-readable-bounding-box-name",\n                  "val": [\n                    2.0,\n                    3.0,\n                    30.0,\n                    20.0\n                  ]\n                }\n              ]\n            }\n          }\n        }\n      }\n    },\n    "metadata": {\n      "schema_version": "1.0.0"\n    },\n    "objects": {\n      "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n        "name": "any-human-readable-bounding-box-name",\n        "object_data": {\n          "text": [\n            {\n              "name": "color",\n              "val": "red"\n            }\n          ]\n        },\n        "type": "PassengerCar"\n      }\n    },\n    "streams": {\n      "camera_id": {\n        "type": "camera"\n      }\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"3d-cuboid-in-two-frames-with-a-static-property-color"},"3D cuboid in two frames with a static property ",(0,i.kt)("inlineCode",{parentName:"h3"},"color")),(0,i.kt)("p",null,"Cuboids are represented as a list of 10 values: ",(0,i.kt)("inlineCode",{parentName:"p"},"[x, y, z, qx, qy, qz, qw, width, length, height]"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),",\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"z")," are the center coordinates of the cuboid. ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"length"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," are in meters.\n",(0,i.kt)("inlineCode",{parentName:"p"},"qx"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"qy"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"qz"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"qw")," are the quaternion values for the rotation of the cuboid."),(0,i.kt)("p",null,"Read more about coordinate systems and\nquaternions ",(0,i.kt)("a",{parentName:"p",href:"../openlabel/openlabel-format/#rotation-of-cuboids"},"here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "openlabel": {\n    "frames": {\n      "0": {\n        "frame_properties": {\n          "timestamp": 0,\n          "external_id": "",\n          "streams": {}\n        },\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "cuboid": [\n                {\n                  "attributes": {\n                    "num": [\n                      {\n                        "val": 0.85,\n                        "name": "confidence"\n                      }\n                    ],\n                    "text": [\n                      {\n                        "name": "stream",\n                        "val": "@lidar"\n                      }\n                    ]\n                  },\n                  "name": "any-human-readable-cuboid-name",\n                  "val": [\n                    2.079312801361084,\n                    -18.919870376586914,\n                    0.3359137773513794,\n                    -0.002808041640852679,\n                    0.022641949116037438,\n                    0.06772797660868829,\n                    0.9974429197838155,\n                    1.767102435869269,\n                    4.099334155319101,\n                    1.3691029802958168\n                  ]\n                }\n              ]\n            }\n          }\n        }\n      },\n    "1": {\n        "frame_properties": {\n          "timestamp": 50,\n          "external_id": "",\n          "streams": {}\n        },\n        "objects": {\n          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n            "object_data": {\n              "cuboid": [\n                {\n                  "attributes": {\n                    "num": [\n                      {\n                        "val": 0.87,\n                        "name": "confidence"\n                      }\n                    ],\n                    "text": [\n                      {\n                        "name": "stream",\n                        "val": "@lidar"\n                      }\n                    ]\n                  },\n                  "name": "any-human-readable-cuboid-name",\n                  "val": [\n                    3.123312801361927,\n                    -20.285740376586913,\n                    0.0649137773513349,\n                    -0.002808041640852679,\n                    0.022641949116037438,\n                    0.06772797660868829,\n                    0.9974429197838155,\n                    1.767102435869269,\n                    4.099334155319101,\n                    1.3691029802958168\n                  ]\n                }\n              ]\n            }\n          }\n        }\n      }\n    },\n    "metadata": {\n      "schema_version": "1.0.0"\n    },\n    "objects": {\n      "1232b4f4-e3ca-446a-91cb-d8d403703df7": {\n        "name": "any-human-readable-cuboid-name",\n        "object_data": {\n          "text": [\n            {\n              "name": "color",\n              "val": "red"\n            }\n          ]\n        },\n        "type": "PassengerCar"\n      }\n    },\n    "streams": {\n      "@lidar": {\n        "type": "lidar"\n      }\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"a-single-frame-segmentation-bitmap"},"A single frame segmentation bitmap"),(0,i.kt)("h4",{id:"transforming-upscaling-padding-and-base64-encoding-a-small-color-image-to-a-larger-grayscale-image-using-python-pil"},"Transforming, upscaling, padding and base64-encoding a small color-image to a larger grayscale image using Python PIL"),(0,i.kt)("p",null,"This code example gives an example of how to go from a multicolor prediction bitmap image of resolution 300 x 200 to a grayscale image of resolution 1000 x 800, by first converting to grayscale, then rescaling the prediction to 600 x 400 and then padding equally on the sides. It also includes code for base64-encoding the image as a string, that later can be used in the openlabel. This code only makes use of built-in numpy functions, but is not optimized for performance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import base64\nimport io\nimport numpy as np\nfrom PIL import Image\n\n# The original mapping used to produce the images\noriginal_mapping = {\n    (0,0,0): "_background",\n    (255,0,0): "class_1",\n    (0,0,255): "class_2",\n}\n\n# The grayscale mapping (this will also be the ontology in the openlabel)\ngrayscale_mapping = {\n    "_background": 0,\n    "class_1": 1,\n    "class_2": 2,\n}\n\nprediction = Image.open("my_original_prediction_file.png")  # Let\'s say this has resolution 300 x 200\n\ndef lookup(pixel_color):\n  return grayscale_mapping[original_mapping[tuple(pixel_color)]]\n\n# convert to grayscale via numpy array lookup\nprediciton_numpy = np.array(prediction)\ngrayscale_prediction_numpy = np.vectorize(lookup, signature="(m)->()")(prediciton_numpy)\ngrayscale_prediction = Image.fromarray(grayscale_prediction_numpy.astype(np.uint8))\n\n# upscale to another resolution\nupscaled_grayscale_prediction = grayscale_prediction.resize((600, 400), resample=Image.Resampling.NEAREST)\n\n# padding by first constructing a new background image of target size, and then paste the prediction in the right position\npadded_grayscale_prediction = Image.new("L", (1000, 800), 0)\npadded_grayscale_prediction.paste(upscaled_grayscale_prediction, (201, 201))\n\nimage_bytes = io.BytesIO()\npadded_grayscale_prediction.save(image_bytes, format="PNG")\nprediction_str = base64.b64encode(image_bytes.getvalue()).decode("utf-8")\n\n')),(0,i.kt)("h4",{id:"openlabel-for-a-segmentation-bitmap"},"Openlabel for a segmentation bitmap"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"prediction_str")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"grayscale_mapping")," can thereafter be used in the openlabel like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "openlabel": {\n        "frames": {\n            "0": {\n                "objects": {\n                    "07d469f9-c9ab-44ec-8d09-0c72bdb44dc2": {\n                        "object_data": {\n                            "image": [\n                                {\n                                    "name": "a_human_readable_name",\n                                    "val": prediction_str,\n                                    "mime_type": "image/png",\n                                    "encoding": "base64",\n                                    "attributes": {\n                                        "text": [\n                                            {\n                                                "val": "camera_id",\n                                                "name": "stream"\n                                            }\n                                        ]\n                                    }\n                                }\n                            ]\n                        }\n                    }\n                },\n                "frame_properties": {\n                    "streams": {},\n                    "timestamp": 0,\n                    "external_id": ""\n                },\n            }\n        },\n        "objects": {\n            "07d469f9-c9ab-44ec-8d09-0c72bdb44dc2": {\n                "name": "07d469f9-c9ab-44ec-8d09-0c72bdb44dc2",\n                "type": "segmentation_bitmap"\n            }\n        },\n        "streams": {\n            "camera_id": {\n                "type": "camera"\n            }\n        },\n        "metadata": {\n            "schema_version": "1.0.0"\n        },\n        "ontologies": {\n            "0": {\n                "classifications": grayscale_mapping,\n                "uri": ""\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"If providing predictions for multiple cameras in the scene, the list of images could be extended."),(0,i.kt)("h3",{id:"using-kognic-openlabel-to-validate-the-format"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"kognic-openlabel")," to validate the format"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/kognic-openlabel/"},"kognic-openlabel")," for more information."))}m.isMDXComponent=!0}}]);