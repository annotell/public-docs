(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"MDXContext",(function(){return c})),a.d(t,"MDXProvider",(function(){return s})),a.d(t,"mdx",(function(){return j})),a.d(t,"useMDXComponents",(function(){return b})),a.d(t,"withMDXComponents",(function(){return p}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){return function(t){var a=b(t.components);return i.a.createElement(e,d({},t,{components:a}))}},b=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},s=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},x={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},O=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=b(a),p=n,s=c["".concat(d,".").concat(p)]||c[p]||x[p]||r;return a?i.a.createElement(s,m(m({ref:t},o),{},{components:a})):i.a.createElement(s,m({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,d=new Array(r);d[0]=O;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:n,d[1]=o;for(var l=2;l<r;l++)d[l]=a[l];return i.a.createElement.apply(null,d)}return i.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},194:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/camera-calibration-adb30ceade2aa89679b31867647a6fa6.jpg"},58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return c}));var n=a(3),i=a(8),r=(a(0),a(115)),d={title:"Calibration"},o={unversionedId:"kognic-io/calibration",id:"kognic-io/calibration",isDocsHomePage:!1,title:"Calibration",description:"Inputs including both a 2D and 3D representation such as lidarsandcameras require a calibration relating the camera sensors with the",source:"@site/docs/kognic-io/calibration.md",slug:"/kognic-io/calibration",permalink:"/docs/kognic-io/calibration",editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/calibration.md",version:"current",sidebar:"docs",previous:{title:"Downloading Annotations",permalink:"/docs/kognic-io/annotations"},next:{title:"Errors",permalink:"/docs/kognic-io/error_handling"}},m=[{value:"Common",id:"common",children:[]},{value:"Pinhole",id:"pinhole",children:[]},{value:"Fisheye",id:"fisheye",children:[]},{value:"Kannala",id:"kannala",children:[]},{value:"Principal point distortion",id:"principal-point-distortion",children:[]},{value:"Example: Creating a calibration",id:"example-creating-a-calibration",children:[{value:"Listing existing calibrations",id:"listing-existing-calibrations",children:[]}]}],l={rightToc:m};function c(e){var t=e.components,d=Object(i.default)(e,["components"]);return Object(r.mdx)("wrapper",Object(n.default)({},l,d,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Inputs including both a 2D and 3D representation such as ",Object(r.mdx)("inlineCode",{parentName:"p"},"lidars_and_cameras")," require a calibration relating the camera sensors with the\nLIDAR sensors in terms of location and rotation. The calibration should also contain the required information for projecting 3D points into\nthe image plane of the camera."),Object(r.mdx)("p",null,"A Calibration object consists of a set of key-value pairs where the key is the name of the sensor (i.e. sensor name) and the value is either\na ",Object(r.mdx)("inlineCode",{parentName:"p"},"LidarCalibration")," object or any of the different camera calibrations."),Object(r.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(r.mdx)("h5",{parentName:"div"},Object(r.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"reuse calibration")),Object(r.mdx)("div",{parentName:"div",className:"admonition-content"},Object(r.mdx)("p",{parentName:"div"},"Note that after a calibration has been created you can, and should, reuse the same calibration for multiple inputs if possible."))),Object(r.mdx)("h1",{id:"lidar"},"Lidar"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Key"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Value"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Parameters"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"rotation_quaternion")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A ",Object(r.mdx)("inlineCode",{parentName:"td"},"RotationQuaternion")," object"),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"w"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"x"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"y"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"z"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"position")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A ",Object(r.mdx)("inlineCode",{parentName:"td"},"Position")," object"),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"x"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"y"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"z"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"field_of_view")," (optional)"),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A ",Object(r.mdx)("inlineCode",{parentName:"td"},"LidarFieldOfView")," object"),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"start_angle_deg"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"stop_angle_deg")," and optionally ",Object(r.mdx)("inlineCode",{parentName:"td"},"depth"))))),Object(r.mdx)("p",null,"A LIDAR calibration is represented as a ",Object(r.mdx)("inlineCode",{parentName:"p"},"LidarCalibration")," object and consists of a position expressed with three coordinates and a rotation\nin the form of a ",Object(r.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation"},"Quaternion"),". Optionally, the sensor's field of view may be\nspecified by providing an object that has a sweep start angle and sweep stop angle. The field of view may also optionally include the depth\nto which the field extends."),Object(r.mdx)("p",null,"See the code example below for creating a base ",Object(r.mdx)("inlineCode",{parentName:"p"},"LidarCalibration")," object."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/calibration/create_lidar_calibration.py\n")),Object(r.mdx)("h1",{id:"camera"},"Camera"),Object(r.mdx)("p",null,"The Camera calibration format is based on ",Object(r.mdx)("a",{parentName:"p",href:"https://docs.opencv.org/3.4/d4/d94/tutorial_camera_calibration.html"},"OpenCVs")," format and\nthis ",Object(r.mdx)("a",{parentName:"p",href:"http://www.robots.ox.ac.uk/~cmei/articles/single_viewpoint_calib_mei_07.pdf"},"paper"),". The different camera types supported are: ",Object(r.mdx)("inlineCode",{parentName:"p"},"PINHOLE"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"FISHEYE"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"KANNALA")," and ",Object(r.mdx)("inlineCode",{parentName:"p"},"PRINCIPALPOINTDIST"),"."),Object(r.mdx)("p",null,Object(r.mdx)("img",{alt:"Camera Calibrations commonality",src:a(194).default})),Object(r.mdx)("h2",{id:"common"},"Common"),Object(r.mdx)("p",null,"All camera calibrations have the following attributes"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Key"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Value"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Parameters"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"rotation_quaternion")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A ",Object(r.mdx)("inlineCode",{parentName:"td"},"RotationQuaternion")," object"),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"w"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"x"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"y"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"z"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"position")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A ",Object(r.mdx)("inlineCode",{parentName:"td"},"Position")," object"),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"x"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"y"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"z"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"camera_matrix")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A ",Object(r.mdx)("inlineCode",{parentName:"td"},"CameraMatrix")," object"),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"fx"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"fy"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"cx"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"cy"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"image_width")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"Integer"),Object(r.mdx)("td",{parentName:"tr",align:"left"},"NA")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"image_height")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"Integer"),Object(r.mdx)("td",{parentName:"tr",align:"left"},"NA")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"field_of_view")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"Float"),Object(r.mdx)("td",{parentName:"tr",align:"left"},"NA")))),Object(r.mdx)("h2",{id:"pinhole"},"Pinhole"),Object(r.mdx)("p",null,"The ",Object(r.mdx)("inlineCode",{parentName:"p"},"PINHOLE")," camera model expands the common model with:"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Key"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Value"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Parameters"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"distortion_coefficients")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A ",Object(r.mdx)("inlineCode",{parentName:"td"},"DistortionCoefficients")," object"),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"k1"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"k2"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"p1"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"p2"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"k3"))))),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/calibration/create_pinhole_calibration.py\n")),Object(r.mdx)("h2",{id:"fisheye"},"Fisheye"),Object(r.mdx)("p",null,"The Fisheye camera model expands the ",Object(r.mdx)("inlineCode",{parentName:"p"},"PINHOLE")," model with the following"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Key"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Value"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Parameters"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"xi")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"Float"),Object(r.mdx)("td",{parentName:"tr",align:"left"},"NA")))),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/calibration/create_fisheye_calibration.py\n")),Object(r.mdx)("h2",{id:"kannala"},"Kannala"),Object(r.mdx)("p",null,"The ",Object(r.mdx)("inlineCode",{parentName:"p"},"KANNALA")," camera model changes and expands the ",Object(r.mdx)("inlineCode",{parentName:"p"},"PINHOLE")," with the following"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Key"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Value"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Parameters"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"distortion_coefficients")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A ",Object(r.mdx)("inlineCode",{parentName:"td"},"KannalaDistortionCoefficients")," object. ",Object(r.mdx)("br",null)," Note that it is a subset of the ",Object(r.mdx)("inlineCode",{parentName:"td"},"DistortionCoefficients"),", omitting the ",Object(r.mdx)("inlineCode",{parentName:"td"},"k3")," parameter"),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"k1"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"k2"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"p1"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"p2"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"undistortion_coefficients")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A ",Object(r.mdx)("inlineCode",{parentName:"td"},"UndistortionCoefficients")," object."),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"l1"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"l2"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"l3"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"l4"))))),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/calibration/create_kannala_calibration.py\n")),Object(r.mdx)("h2",{id:"principal-point-distortion"},"Principal point distortion"),Object(r.mdx)("p",null,"The principal point distortion model consists of the common attributes plus"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Key"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Value"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Parameters"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"principal_point_distortion_coefficients")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A ",Object(r.mdx)("inlineCode",{parentName:"td"},"PrincipalPointDistortionCoefficients")," object"),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"k1"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"k2"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"distortion_center")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A ",Object(r.mdx)("inlineCode",{parentName:"td"},"DistortionCenter")," object"),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"x"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"y"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"principal_point")),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A ",Object(r.mdx)("inlineCode",{parentName:"td"},"PrincipalPoint")," object"),Object(r.mdx)("td",{parentName:"tr",align:"left"},Object(r.mdx)("inlineCode",{parentName:"td"},"x"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"y"))))),Object(r.mdx)("h2",{id:"example-creating-a-calibration"},"Example: Creating a calibration"),Object(r.mdx)("p",null,"The following example code shows how you can create a ",Object(r.mdx)("em",{parentName:"p"},"unity")," (i.e. we assume that all sensors are placed at origin and have no rotation)\ncalibration for a LIDAR sensor and several camera sensors of type ",Object(r.mdx)("inlineCode",{parentName:"p"},"PINHOLE"),"."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/calibration/calibration.py\n")),Object(r.mdx)("h3",{id:"listing-existing-calibrations"},"Listing existing calibrations"),Object(r.mdx)("p",null,"As a final step we can fetch the calibration via the external id. This can either be done via the client, or via the CLI\nkognicutil tool."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python"},'client.calibration.get_calibration(external_id="Collection 2020-06-16")\n')),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-bash"},'$ kognicutil calibration --external-id "Collection 2020-06-16"\n')))}c.isMDXComponent=!0}}]);