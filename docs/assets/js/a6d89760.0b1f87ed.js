"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[2076],{79:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var i=l(4848),n=l(8453);const s={title:"Standard Camera Calibrations"},c=void 0,d={id:"kognic-io/calibrations/cameras-standard",title:"Standard Camera Calibrations",description:"The Camera calibration format is based on OpenCVs format and",source:"@site/docs/kognic-io/calibrations/cameras-standard.md",sourceDirName:"kognic-io/calibrations",slug:"/kognic-io/calibrations/cameras-standard",permalink:"/docs/kognic-io/calibrations/cameras-standard",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/kognic-io/calibrations/cameras-standard.md",tags:[],version:"current",frontMatter:{title:"Standard Camera Calibrations"},sidebar:"docs",previous:{title:"Lidar Calibrations",permalink:"/docs/kognic-io/calibrations/lidars"},next:{title:"Custom Camera Calibrations",permalink:"/docs/kognic-io/calibrations/cameras-custom"}},r={},o=[{value:"Common",id:"common",level:3},{value:"Pinhole",id:"pinhole",level:3},{value:"Fisheye",id:"fisheye",level:3},{value:"Kannala",id:"kannala",level:3},{value:"Principal point distortion",id:"principal-point-distortion",level:3},{value:"Fused cylindrical",id:"fused-cylindrical",level:3},{value:"Cylindrical",id:"cylindrical",level:3},{value:"Principal point fisheye",id:"principal-point-fisheye",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The Camera calibration format is based on ",(0,i.jsx)(t.a,{href:"https://docs.opencv.org/3.4/d4/d94/tutorial_camera_calibration.html",children:"OpenCVs"})," format and\nthis ",(0,i.jsx)(t.a,{href:"http://www.robots.ox.ac.uk/~cmei/articles/single_viewpoint_calib_mei_07.pdf",children:"paper"}),". The different camera types supported are: ",(0,i.jsx)(t.code,{children:"PINHOLE"}),", ",(0,i.jsx)(t.code,{children:"FISHEYE"}),", ",(0,i.jsx)(t.code,{children:"KANNALA"}),", ",(0,i.jsx)(t.code,{children:"PRINCIPALPOINTDIST"}),", and ",(0,i.jsx)(t.code,{children:"FUSEDCYLINDRICAL"}),".\nIf your calibration model is not supported, you can also provide a ",(0,i.jsx)(t.a,{href:"/docs/kognic-io/calibrations/cameras-custom",children:"custom camera calibration"})," where\nyou provide the implementation in the form of a WebAssembly module."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Camera Calibrations commonality",src:l(1042).A+"",width:"1230",height:"812"})}),"\n",(0,i.jsx)(t.h3,{id:"common",children:"Common"}),"\n",(0,i.jsx)(t.p,{children:"All camera calibrations have the following attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Key"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Parameters"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"rotation_quaternion"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["A ",(0,i.jsx)(t.code,{children:"RotationQuaternion"})," object"]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"w"}),", ",(0,i.jsx)(t.code,{children:"x"}),", ",(0,i.jsx)(t.code,{children:"y"}),", ",(0,i.jsx)(t.code,{children:"z"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"position"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["A ",(0,i.jsx)(t.code,{children:"Position"})," object"]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"x"}),", ",(0,i.jsx)(t.code,{children:"y"}),", ",(0,i.jsx)(t.code,{children:"z"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"camera_matrix"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["A ",(0,i.jsx)(t.code,{children:"CameraMatrix"})," object"]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"fx"}),", ",(0,i.jsx)(t.code,{children:"fy"}),", ",(0,i.jsx)(t.code,{children:"cx"}),", ",(0,i.jsx)(t.code,{children:"cy"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"image_width"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NA"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"image_height"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NA"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"field_of_view"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Float"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NA"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"pinhole",children:"Pinhole"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"PINHOLE"})," camera model expands the common model with:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Key"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Parameters"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"distortion_coefficients"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["A ",(0,i.jsx)(t.code,{children:"DistortionCoefficients"})," object"]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"k1"}),", ",(0,i.jsx)(t.code,{children:"k2"}),", ",(0,i.jsx)(t.code,{children:"p1"}),", ",(0,i.jsx)(t.code,{children:"p2"}),", ",(0,i.jsx)(t.code,{children:"k3"})]})]})})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"reference",children:"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/calibration/create_pinhole_calibration.py\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fisheye",children:"Fisheye"}),"\n",(0,i.jsxs)(t.p,{children:["The Fisheye camera model expands the ",(0,i.jsx)(t.code,{children:"PINHOLE"})," model with the following"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Key"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Parameters"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"xi"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Float"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NA"})]})})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"reference",children:"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/calibration/create_fisheye_calibration.py\n"})}),"\n",(0,i.jsx)(t.h3,{id:"kannala",children:"Kannala"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"KANNALA"})," camera model changes and expands the ",(0,i.jsx)(t.code,{children:"PINHOLE"})," with the following"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Key"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Parameters"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"distortion_coefficients"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["A ",(0,i.jsx)(t.code,{children:"KannalaDistortionCoefficients"})," object. The distortion parameters ",(0,i.jsx)(t.code,{children:"k3"}),", ",(0,i.jsx)(t.code,{children:"k4"}),", if available, can be assigned to ",(0,i.jsx)(t.code,{children:"p1"})," and ",(0,i.jsx)(t.code,{children:"p2"})," respectively. That is ",(0,i.jsx)(t.code,{children:"p1=k3"})," and ",(0,i.jsx)(t.code,{children:"p2=k4"}),"."]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"k1"}),", ",(0,i.jsx)(t.code,{children:"k2"}),", ",(0,i.jsx)(t.code,{children:"p1"}),", ",(0,i.jsx)(t.code,{children:"p2"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"undistortion_coefficients"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["A ",(0,i.jsx)(t.code,{children:"UndistortionCoefficients"})," object."]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"l1"}),", ",(0,i.jsx)(t.code,{children:"l2"}),", ",(0,i.jsx)(t.code,{children:"l3"}),", ",(0,i.jsx)(t.code,{children:"l4"})]})]})]})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"reference",children:"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/calibration/create_kannala_calibration.py\n"})}),"\n",(0,i.jsx)(t.h3,{id:"principal-point-distortion",children:"Principal point distortion"}),"\n",(0,i.jsx)(t.p,{children:"The principal point distortion model consists of the common attributes plus"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Key"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Parameters"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"principal_point_distortion_coefficients"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["A ",(0,i.jsx)(t.code,{children:"PrincipalPointDistortionCoefficients"})," object"]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"k1"}),", ",(0,i.jsx)(t.code,{children:"k2"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"lens_projection_coefficients"})," (optional. Default to values for model SF806)"]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["A ",(0,i.jsx)(t.code,{children:"LensProjectionCoefficients"})," object"]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"c1"}),", ",(0,i.jsx)(t.code,{children:"c2"}),",",(0,i.jsx)(t.code,{children:"c3"}),", ",(0,i.jsx)(t.code,{children:"c4"}),",",(0,i.jsx)(t.code,{children:"c5"}),", ",(0,i.jsx)(t.code,{children:"c6"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"distortion_center"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["A ",(0,i.jsx)(t.code,{children:"DistortionCenter"})," object"]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"x"}),", ",(0,i.jsx)(t.code,{children:"y"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"principal_point"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["A ",(0,i.jsx)(t.code,{children:"PrincipalPoint"})," object"]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"x"}),", ",(0,i.jsx)(t.code,{children:"y"})]})]})]})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"reference",children:"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/calibration/create_principal_point_distortion_calibration.py\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fused-cylindrical",children:"Fused cylindrical"}),"\n",(0,i.jsx)(t.p,{children:"The fused cylindrical model consists of the common attributes plus"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Key"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Parameters"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"cut_angles_degree"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["A ",(0,i.jsx)(t.code,{children:"CutAngles"})," object. Note these angles should be expressed in degrees."]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"upper"}),", ",(0,i.jsx)(t.code,{children:"lower"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"vertical_fov_degree"}),"  (optional. Default 72.5 degrees)"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Float. Note this angle should be expressed in degrees."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NA"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"horizontal_fov_degree"})," (optional. Default 93 degrees)"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Float. Note this angle should be expressed in degrees."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NA"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"max_altitude_angle_degree"})," (optional. Default 90 degrees)"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Float. Note this angle should be expressed in degrees."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NA"})]})]})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"reference",children:"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/calibration/create_fused_cylindrical_calibration.py\n"})}),"\n",(0,i.jsx)(t.h3,{id:"cylindrical",children:"Cylindrical"}),"\n",(0,i.jsx)(t.p,{children:"The cylindrical model consists only of the common attributes. There are no extra attributes to set for this model."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"reference",children:"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/calibration/create_cylindrical_calibration.py\n"})}),"\n",(0,i.jsx)(t.h3,{id:"principal-point-fisheye",children:"Principal point fisheye"}),"\n",(0,i.jsx)(t.p,{children:"The principal point fisheye model consists of the common attributes plus"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Key"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Parameters"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"principal_point_fisheye_coefficients"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["A ",(0,i.jsx)(t.code,{children:"PrincipalPointFisheyeCoefficients"})," object"]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"alpha_l"}),", ",(0,i.jsx)(t.code,{children:"alpha_r"}),", ",(0,i.jsx)(t.code,{children:"beta_u"}),", ",(0,i.jsx)(t.code,{children:"beta_l"})]})]})})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"reference",children:"https://github.com/annotell/kognic-io-examples-python/blob/master/examples/calibration/create_principal_point_fisheye_calibration.py\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1042:(e,t,l)=>{l.d(t,{A:()=>i});const i=l.p+"assets/images/camera-calibration-adb30ceade2aa89679b31867647a6fa6.jpg"},8453:(e,t,l)=>{l.d(t,{R:()=>c,x:()=>d});var i=l(6540);const n={},s=i.createContext(n);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);