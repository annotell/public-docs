"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[15],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7423:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const i={title:"OpenLABEL format"},r=void 0,s={unversionedId:"openlabel/openlabel-format",id:"openlabel/openlabel-format",title:"OpenLABEL format",description:"OpenLABEL is a standardized annotation format developed by ASAM.",source:"@site/docs/openlabel/openlabel-format.md",sourceDirName:"openlabel",slug:"/openlabel/openlabel-format",permalink:"/docs/openlabel/openlabel-format",draft:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/openlabel/openlabel-format.md",tags:[],version:"current",frontMatter:{title:"OpenLABEL format"},sidebar:"docs",previous:{title:"Uploading predictions",permalink:"/docs/dataset-refinement/uploading-predictions"},next:{title:"The Python client",permalink:"/docs/openlabel/python-client"}},l={},p=[{value:"Rotation of Cuboids",id:"rotation-of-cuboids",level:2},{value:"Non-sequences are sequences with one frame",id:"non-sequences-are-sequences-with-one-frame",level:2},{value:"Stream is just another text property",id:"stream-is-just-another-text-property",level:2},{value:"Relations",id:"relations",level:2},{value:"Relations are unidirectional",id:"relations-are-unidirectional",level:3},{value:"Actions are used to represent false relations (new since 2022-04-08)",id:"actions-are-used-to-represent-false-relations-new-since-2022-04-08",level:3},{value:"Groups are represented as actions",id:"groups-are-represented-as-actions",level:3},{value:"Stream specific relations",id:"stream-specific-relations",level:3},{value:"Representing polygons",id:"representing-polygons",level:2},{value:"Representing multi-polygons",id:"representing-multi-polygons",level:2},{value:"Representing curves",id:"representing-curves",level:2},{value:"Representing 3D lanes",id:"representing-3d-lanes",level:2},{value:"Representing 2D points",id:"representing-2d-points",level:2},{value:"Representing groups of 2d points",id:"representing-groups-of-2d-points",level:2},{value:"Representing Geometry Collections",id:"representing-geometry-collections",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"OpenLABEL is a standardized annotation format developed by ",(0,o.kt)("a",{parentName:"p",href:"https://www.asam.net/"},"ASAM"),".\nIt comes with in-depth ",(0,o.kt)("a",{parentName:"p",href:"http://www.asam.net/project-detail/asam-openlabel-v100/"},"documentation")," of the format as well\nas a ",(0,o.kt)("a",{parentName:"p",href:"https://openlabel.asam.net/V1-0-0/schema/openlabel_json_schema.json"},"json schema"),", which can be used to ensure\nthat the format is valid."),(0,o.kt)("p",null,"Even though OpenLABEL is a strict format there is still some room for interpretation. In this section we try to clarify\nsome of these parts and explain the choices that we have made within the standard."),(0,o.kt)("h2",{id:"rotation-of-cuboids"},"Rotation of Cuboids"),(0,o.kt)("p",null,"The rotation is such that the y-axis is facing forwards, with a rotation order of ",(0,o.kt)("inlineCode",{parentName:"p"},"XYZ"),".\nThis means that a cuboid with a heading (yaw) equal to 0 is aligned with the y-axis in the positive direction along the axis.\nThis is somewhat different compared to the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.sis.se/api/document/preview/914200/#:~:text=This%20International%20Standard%20defines%20the,to%20multi%2Dunit%20vehicle%20combinations."},"ISO 8855"),"\nstandard, where the forward direction is along the x-axis. Conversion to ISO 8855 can then be done by applying a\nrotation around the z-axis and changing ",(0,o.kt)("inlineCode",{parentName:"p"},"sx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sy")," in the following way"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import math \nfrom typing import List\n\nfrom scipy.spatial.transform import Rotation\n\ndef convert_to_iso8855(val: List[float]) -> List[float]:\n    """ Converts cuboid values to ISO 8855 """\n    [x, y, z, qx, qy, qz, qw, sx, sy, sz] = val\n    rotation_1 = Rotation.from_quat([qx, qy, qz, qw])\n    rotation_2 = Rotation.from_rotvec([0, 0, math.pi / 2])\n    rot_object = rotation_1 * rotation_2\n    [qx, qy, qz, qw] = rot_object.as_quat()\n    return [x, y, z, qx, qy, qz, qw, sy, sx, sz]\n')),(0,o.kt)("h2",{id:"non-sequences-are-sequences-with-one-frame"},"Non-sequences are sequences with one frame"),(0,o.kt)("p",null,"Due to reasons of simplicity we have made the choice to treat non-sequences in the same way as sequences. This\nmeans that non-sequences are represented as a sequence with only one frame. Only data such as ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," are defined\nin the top level element keys. All other information is stored under frames, see example below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "objects": {\n        "0": {\n            "name": "car-0",\n            "type": "Car"\n        }\n    },\n    "frames": {\n        "0": {\n            "objects": {\n                "0": {"object_data": {...}}\n            }\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"stream-is-just-another-text-property"},"Stream is just another text property"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"stream")," property is used to indicate which stream/sensor/source that the geometry och property was annotated in.\nFor example here is an object with a point that has been annotated in a stream with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"Camera"),". Note that all\ncorresponding attributes for the geometry have also been annotated in the same stream."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "object_data": {\n        "point2d": [\n            {\n                "name": "point-4d2d325f",\n                "val": [300.5300, 286.4396],\n                "attributes": {\n                    "text": [\n                        {"name": "stream", "val": "Camera"},\n                        {"name": "Color", "val": "Black"}\n                    ]\n                }\n            }\n        ]\n    }\n}\n')),(0,o.kt)("h2",{id:"relations"},"Relations"),(0,o.kt)("admonition",{title:"Regarding changes on 2022-04-08",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Some changes were made regarding how to represent certain types of relations on 2022-04-08. Contact Kognic in case your\nannotations were produced before this date, but you wish to include these changes anyways.")),(0,o.kt)("p",null,"We consider two types of relations; unidirectional relations between two objects and group relations.\nIn addition to these, there is a need to represent false relations, i.e. relation properties that are not actually\npointers to other objects but rather take values such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Inconclusive"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Nothing")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Unclear"),"."),(0,o.kt)("h3",{id:"relations-are-unidirectional"},"Relations are unidirectional"),(0,o.kt)("p",null,"Relations are unidirectional, meaning that if an object, ",(0,o.kt)("inlineCode",{parentName:"p"},"object1"),", has a relation to another object, ",(0,o.kt)("inlineCode",{parentName:"p"},"object2"),", it does\nnot mean that ",(0,o.kt)("inlineCode",{parentName:"p"},"object2")," has a relation to ",(0,o.kt)("inlineCode",{parentName:"p"},"object1"),". Below follows an example where ",(0,o.kt)("inlineCode",{parentName:"p"},"car-0")," is following ",(0,o.kt)("inlineCode",{parentName:"p"},"car-1")," and\nit is unclear whether ",(0,o.kt)("inlineCode",{parentName:"p"},"car-2")," is following another car or not."),(0,o.kt)("admonition",{title:"Deprecated since 2022-04-08 ",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Representing false relations using the relation uid is deprecated and has moved to the use of actions (see the next section)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "objects": {\n        "0": {"name": "car-0", "type": "Car"},\n        "1": {"name": "car-1", "type": "Car"},\n        "2": {"name": "car-2", "type": "Car"}\n    },\n    "relations": {\n        "0": {\n            "name": "0",\n            "type": "isFollowing",\n            "rdf_subjects": [{"type": "object", "uid": "0"}],\n            "rdf_objects": [{"type": "object", "uid": "1"}]\n        },\n        "1": {\n            "name": "1",\n            "type": "isFollowing",\n            "rdf_subjects": [{"type": "object", "uid": "2"}],\n            "rdf_objects": [{"type": "object", "uid": "Unclear"}]\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"actions-are-used-to-represent-false-relations-new-since-2022-04-08"},"Actions are used to represent false relations (new since 2022-04-08)"),(0,o.kt)("p",null,"In the Kognic Platform, there is support for assigning values to relations that are not actually references to other\nobjects. Examples are ",(0,o.kt)("inlineCode",{parentName:"p"},"Inconclusive")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Nothing"),". Actions are used to represent these in the following way, where the\nname of the action determines the value and the type determines the property name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "objects": {\n        "0": {"name": "lane-0", "type": "Lane"}\n    },\n    "relations": {\n        "0": {\n            "name": "0",\n            "type": "isSubjectOfAction",\n            "rdf_subjects": [{"type": "object", "uid": "0"}],\n            "rdf_objects": [{"type": "action", "uid": "0"}]\n        }\n    },\n    "actions": {\n        "0": {"name": "Nothing", "type": "is_pulling_or_pushing"}\n    }\n}\n')),(0,o.kt)("h3",{id:"groups-are-represented-as-actions"},"Groups are represented as actions"),(0,o.kt)("admonition",{title:"Deprecated since 2022-04-08 ",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The group concept has been deprecated in favor of single relations between objects.\nThis means that annotations produced after 2022-04-08 will no longer contain the group concept")),(0,o.kt)("p",null,"Group relations are relations where objects can be seen as belonging to a group. There is then a need for an abstract\nconcept that describes the group. OpenLABEL suggests the use of actions for this in such a way that each object in the\ngroup has a relation of type ",(0,o.kt)("inlineCode",{parentName:"p"},"isSubjectOfAction")," to this action. Below follows an example where two ",(0,o.kt)("inlineCode",{parentName:"p"},"lane-0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"lane-1"),"\nbelong to the same road, while it is unclear whether ",(0,o.kt)("inlineCode",{parentName:"p"},"lane-2")," belongs to a road."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "objects": {\n        "0": {"name": "lane-0", "type": "Lane"},\n        "1": {"name": "lane-1", "type": "Lane"},\n        "2": {"name": "lane-2", "type": "Lane"}\n    },\n    "relations": {\n        "0": {\n            "name": "0",\n            "type": "isSubjectOfAction",\n            "rdf_subjects": [{"type": "object", "uid": "0"}],\n            "rdf_objects": [{"type": "action", "uid": "0"}]\n        },\n        "1": {\n            "name": "1",\n            "type": "isSubjectOfAction",\n            "rdf_subjects": [{"type": "object", "uid": "1"}],\n            "rdf_objects": [{"type": "action", "uid": "0"}]\n        },\n        "2": {\n            "name": "2",\n            "type": "isSubjectOfAction",\n            "rdf_subjects": [{"type": "object", "uid": "1"}],\n            "rdf_objects": [{"type": "action", "uid": "1"}]\n        }\n    },\n    "actions": {\n        "0": {"name": "", "type": "Road"},\n        "1": {"name": "Unclear", "type": "Road"}\n    }\n}\n')),(0,o.kt)("h3",{id:"stream-specific-relations"},"Stream specific relations"),(0,o.kt)("p",null,"If a relation is stream specific, there will be a property ",(0,o.kt)("inlineCode",{parentName:"p"},"stream_relations")," denoting which stream the list of relations belong to. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ // frames.0\n    // ...\n    "frame_properties": {\n        "streams": {\n            "CAMERA_FRONT": {\n                "description": null,\n                "stream_properties": {\n                    "stream_relations": {\n                        "1": {}\n                    }\n                }\n            }\n        }\n    },\n    "relations": {\n        "0": {}\n    }\n}\n')),(0,o.kt)("h2",{id:"representing-polygons"},"Representing polygons"),(0,o.kt)("p",null,"Polygons are described by a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"Poly2d")," objects in OpenLABEL. One of these represents the exterior while the others\nrepresent potential holes and this is determined by the boolean property ",(0,o.kt)("inlineCode",{parentName:"p"},"is_hole"),". Below follows an example of a polygon\nwith one hole."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "object_data": {\n        "poly2d": [\n            {\n                "name": "poly1",\n                "mode": "MODE_POLY2D_ABSOLUTE",\n                "val": [...],\n                "attributes": { "boolean": [{"name": "is_hole", "val": false}] }\n            },\n            {\n                "name": "poly2",\n                "mode": "MODE_POLY2D_ABSOLUTE",\n                "val": [...],\n                "attributes": { "boolean": [{"name": "is_hole", "val": true}] }\n            }\n        ]\n    }\n}\n')),(0,o.kt)("p",null,"The value ",(0,o.kt)("inlineCode",{parentName:"p"},"MODE_POLY2D_ABSOLUTE")," is the only supported value for ",(0,o.kt)("inlineCode",{parentName:"p"},"mode"),". Absolute mode means that the values in ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," are interpreted as pixel coordinates (not as values relative to the first coordinate pair)."),(0,o.kt)("h2",{id:"representing-multi-polygons"},"Representing multi-polygons"),(0,o.kt)("p",null,"Multi-polygons are simply lists of ",(0,o.kt)("a",{parentName:"p",href:"#representing-polygons"},"polygons"),", so we describe these in a similar way with lists\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"Poly2d")," objects with the property ",(0,o.kt)("inlineCode",{parentName:"p"},"is_hole"),". However, we also add one additional property ",(0,o.kt)("inlineCode",{parentName:"p"},"polygon_id")," that\ndetermines which polygon a ",(0,o.kt)("inlineCode",{parentName:"p"},"Poly2d")," object belongs to in the multi-polygon. Below follows an example of a multi-polygon\nwith two polygons with one hole each."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "object_data": {\n        "poly2d": [\n            {\n                "name": "poly1",\n                "mode": "MODE_POLY2D_ABSOLUTE",\n                "val": [...],\n                "attributes": {\n                    "text": [{"name": "polygon_id", "val": "1"}],\n                    "boolean": [{"name": "is_hole", "val": false}]\n                }\n            },\n            {\n                "name": "poly2",\n                "mode": "MODE_POLY2D_ABSOLUTE",\n                "val": [...],\n                "attributes": {\n                    "text": [{"name": "polygon_id", "val": "1"}],\n                    "boolean": [{"name": "is_hole", "val": true}]\n                }\n            },\n            {\n                "name": "poly3",\n                "mode": "MODE_POLY2D_ABSOLUTE",\n                "val": [...],\n                "attributes": {\n                    "text": [{"name": "polygon_id", "val": "2"}],\n                    "boolean": [{"name": "is_hole", "val": false}]\n                }\n            },\n            {\n                "name": "poly4",\n                "mode": "MODE_POLY2D_ABSOLUTE",\n                "val": [...],\n                "attributes": {\n                    "text": [{"name": "polygon_id", "val": "2"}],\n                    "boolean": [{"name": "is_hole", "val": true}]\n                }\n            }\n        ]\n    }\n}\n')),(0,o.kt)("p",null,"The value ",(0,o.kt)("inlineCode",{parentName:"p"},"MODE_POLY2D_ABSOLUTE")," is the only supported value for ",(0,o.kt)("inlineCode",{parentName:"p"},"mode"),". Absolute mode means that the values in ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," are interpreted as pixel coordinates (not as values relative to the first coordinate pair)."),(0,o.kt)("h2",{id:"representing-curves"},"Representing curves"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The name of the interpolation method has changed from ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolation-method")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolation_method"),". However, old annotations\nmight still contain the old name")),(0,o.kt)("p",null,"Curves are represented using the ",(0,o.kt)("inlineCode",{parentName:"p"},"poly2d")," geometry and the interpolation method is specified as a text property in\nthe following way."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "poly2d": [\n    {\n      "closed": false,\n      "mode": "MODE_POLY2D_ABSOLUTE",\n      "name": "curve-d633ca89",\n      "val": [...],\n      "attributes": {\n        "text": [\n          {\n            "name": "interpolation_method",\n            "val": "natural-cubic-spline"\n          }\n        ]\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"The value ",(0,o.kt)("inlineCode",{parentName:"p"},"MODE_POLY2D_ABSOLUTE")," is the only supported value for ",(0,o.kt)("inlineCode",{parentName:"p"},"mode"),". Absolute mode means that the values in ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," are interpreted as pixel coordinates (not as values relative to the first coordinate pair).\nThe property ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolation_method")," is mandatory and determines how the nodes should be associated to each other. The following values are supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"natural-cubic-spline")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"catmull-rom-0.5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"polyline"))),(0,o.kt)("h2",{id:"representing-3d-lanes"},"Representing 3D lanes"),(0,o.kt)("p",null,"A 3D lane is represented as two lines in 3D (",(0,o.kt)("inlineCode",{parentName:"p"},"poly3d"),"), one to the right and the other to the left. The text property\n",(0,o.kt)("inlineCode",{parentName:"p"},"lane_edge")," determines whether the line is to the right or to the left. The lines will always have closed set to false."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "object_data": {\n    "poly3d": [\n      {\n        "attributes": {\n          "text": [\n            { "name": "lane_edge", "val": "left" },\n            { "name": "stream", "val": "lidar" }\n          ]\n        },\n        "closed": false,\n        "name": "",\n        "val": [\n          1.2647494200238287, -51.51747573498745, -2.315540290283199,\n          1.0807419132566136, -48.91298533071834, -2.313640304199211,\n          -0.0892715141237751, -34.705936676401016, -2.235569814758307,\n          -0.4442893388935316, -29.60917111552865, -2.1894531147766174,\n          -1.0952988968721313, -17.193981050037397, -2.1397902661132875\n        ]\n      },\n      {\n        "attributes": {\n          "text": [\n            { "name": "lane_edge", "val": "right" },\n            { "name": "stream", "val": "lidar" }\n          ]\n        },\n        "closed": false,\n        "name": "",\n        "val": [\n          1.5845765823868767, -51.49487958011918, -2.315540290283199,\n          1.4004322100638888, -48.888528958803036, -2.313640304199211,\n          0.23043085215069048, -34.68163859008775, -2.235569814758307,\n          -0.12426061849402326, -29.589636067040036, -2.1894531147766174\n        ]\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h2",{id:"representing-2d-points"},"Representing 2D points"),(0,o.kt)("p",null,"A 2D point is represented as a single point2d. Each ",(0,o.kt)("inlineCode",{parentName:"p"},"point2d")," has an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"point_class")," attribute.\nFor single points this may be ommited, but if set it must be equal to the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," of the object.\nThis attribute is reserved for future use on other point-based geometries."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "openlabel": {\n    ...,\n    "frames": {\n      "0": {\n        "objects": {\n          "a940239d-ff27-4480-8294-c482977a1b32": {\n            "object_data": {\n              "point2d": [\n                {\n                  "attributes": {\n                    "text": [\n                      { "name": "point_class", "val": "APoint" },\n                      { "name": "stream", "val": "stream1" }\n                    ]\n                  },\n                  ...\n                }\n              ]\n            }\n          },\n          "e027e626-eb7a-4a8e-a9ae-083464e137d1": {\n            "object_data": {\n              "point2d": [\n                {\n                  "attributes": {\n                    "text": [\n                      { "name": "stream", "val": "stream1" }\n                    ]\n                  },\n                  ....\n                }\n              ]\n            }\n          }\n        }\n      }\n    },\n    "metadata": {...},\n    "objects": {\n      "a940239d-ff27-4480-8294-c482977a1b32": {\n        ...\n        "type": "APoint"\n      },\n      "e027e626-eb7a-4a8e-a9ae-083464e137d1": {\n        ...\n        "type": "AnotherPoint"\n      }\n    },\n    ...\n  }\n}\n\n')),(0,o.kt)("h2",{id:"representing-groups-of-2d-points"},"Representing groups of 2d points"),(0,o.kt)("p",null,"A group of points is used when multiple points refere to the same object.\nThe attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"point_class")," is required for each of the points in the point group, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"point_class")," has to be different from the object type.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"point_class")," value ",(0,o.kt)("inlineCode",{parentName:"p"},'"line_reference_point"')," is reserved for future use cases."),(0,o.kt)("h2",{id:"representing-geometry-collections"},"Representing Geometry Collections"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Introduced in ",(0,o.kt)("inlineCode",{parentName:"p"},"kognic_format_version")," 2.2")),(0,o.kt)("p",null,"Related documenation for the task view\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.kognic.com/class-groups"},"https://docs.kognic.com/class-groups")),(0,o.kt)("p",null,"A collection of geometries as described in the link above will be represented as having a reserved relation as type ",(0,o.kt)("inlineCode",{parentName:"p"},"geometry_collection"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "openlabel": {\n    "frames": {\n      "0": {\n        "objects": {\n          "516b6045-87e8-40e4-a104-5eaa600e8e3a": {\n            "object_data": {\n              "bbox": [\n                {\n                  "name": "bbox-abc123",\n                  "val": [\n                    ...\n                  ]\n                }\n              ]\n            }\n          },\n          "fe07e9cf-f42c-4b48-b4d8-bab75b7e9827": {\n            "object_data": {\n              "poly2d": [\n                {\n                  "name": "curve-abc123",\n                  "val": [\n                    ...\n                  ]\n                }\n              ]\n            }\n          },\n          "329508b7-729c-4298-8141-f329dbc32ad0": {\n            "object_data": {\n              "poly2d": [\n                {\n                  "name": "curve-abc123",\n                  "val": [\n                    ...\n                  ]\n                }\n              ]\n            }\n          },\n          "4c321584-0e88-4578-b0f0-b5e8c974244b": {\n            "object_data": {\n              "text": [\n                {\n                  "name": "lane",\n                  "val": "right"\n                }\n              ]\n            }\n          }\n        }\n      }\n    },\n    "metadata": {\n      "schema_version": "1.0.0",\n      "kognic_format_version": "2.2"\n    },\n    "objects": {\n      "516b6045-87e8-40e4-a104-5eaa600e8e3a": {\n        "name": "516b6045-87e8-40e4-a104-5eaa600e8e3a",\n        "object_data": {\n            ...\n        },\n        "type": "some_bbox"\n      },\n      "fe07e9cf-f42c-4b48-b4d8-bab75b7e9827": {\n        "name": "fe07e9cf-f42c-4b48-b4d8-bab75b7e9827",\n        "object_data": {\n            ...\n        },\n        "type": "some_line"\n      },\n      "329508b7-729c-4298-8141-f329dbc32ad0": {\n        "name": "329508b7-729c-4298-8141-f329dbc32ad0",\n        "object_data": {\n            ...\n        },\n        "type": "some_line"\n      },\n      "4c321584-0e88-4578-b0f0-b5e8c974244b": {\n        "name": "4c321584-0e88-4578-b0f0-b5e8c974244b",\n        "object_data": {\n            ...\n        },\n        "type": "some_collection"\n      }\n    },\n    "relations": {\n      "0": {\n        "name": "0",\n        "rdf_objects": [\n          {\n            "uid": "516b6045-87e8-40e4-a104-5eaa600e8e3a",\n            "type": "object"\n          },\n          {\n            "uid": "fe07e9cf-f42c-4b48-b4d8-bab75b7e9827",\n            "type": "object"\n          },\n          {\n            "uid": "329508b7-729c-4298-8141-f329dbc32ad0",\n            "type": "object"\n          }\n        ],\n        "rdf_subjects": [\n          {\n            "uid": "4c321584-0e88-4578-b0f0-b5e8c974244b",\n            "type": "object"\n          }\n        ],\n        "type": "geometry_collection"\n      }\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);