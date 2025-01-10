"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[4212],{5422:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"kognic-io/calibrations/cameras-custom","title":"Custom Camera Calibrations","description":"This feature is new in version 1.8.0 of kognic-io and some parts require optional dependencies. Run pip install kognic-io[wasm] to install it.","source":"@site/docs/kognic-io/calibrations/cameras-custom.md","sourceDirName":"kognic-io/calibrations","slug":"/kognic-io/calibrations/cameras-custom","permalink":"/docs/kognic-io/calibrations/cameras-custom","draft":false,"unlisted":false,"editUrl":"https://github.com/annotell/public-docs/edit/master/docs-src/docs/kognic-io/calibrations/cameras-custom.md","tags":[],"version":"current","frontMatter":{"title":"Custom Camera Calibrations"},"sidebar":"docs","previous":{"title":"Standard Camera Calibrations","permalink":"/docs/kognic-io/calibrations/cameras-standard"},"next":{"title":"Pre-annotations","permalink":"/docs/kognic-io/pre_annotations"}}');var s=i(4848),a=i(8453);const o={title:"Custom Camera Calibrations"},l=void 0,r={},c=[{value:"The WebAssembly module",id:"the-webassembly-module",level:2},{value:"Validation",id:"validation",level:2},{value:"Compilation",id:"compilation",level:2},{value:"Example: Rust",id:"example-rust",level:3},{value:"Rust with Cargo",id:"rust-with-cargo",level:4},{value:"Example: C++",id:"example-c",level:3},{value:"Example: C",id:"example-c-1",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["This feature is new in version 1.8.0 of kognic-io and some parts require optional dependencies. Run ",(0,s.jsx)(t.code,{children:"pip install kognic-io[wasm]"})," to install it."]})}),"\n",(0,s.jsxs)(t.p,{children:["If your calibration is not in the list of supported standard camera calibrations, you can provide a custom calibration. The table below\nshow the attributes of the ",(0,s.jsx)(t.code,{children:"CustomCameraCalibration"})," object. The ",(0,s.jsx)(t.code,{children:"wasm_base64"})," attribute is a base64 encoded string of the\nWebAssembly module that implements the calibration. The ",(0,s.jsx)(t.code,{children:"test_cases"})," attribute is a list of ",(0,s.jsx)(t.code,{children:"TestCase"})," objects that are used\nto validate the calibration during creation. It is recommended to provide a few test cases to make sure that the\ncalibration is correct."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Key"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameters"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"rotation_quaternion"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["A ",(0,s.jsx)(t.code,{children:"RotationQuaternion"})," object"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"w"}),", ",(0,s.jsx)(t.code,{children:"x"}),", ",(0,s.jsx)(t.code,{children:"y"}),", ",(0,s.jsx)(t.code,{children:"z"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"position"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["A ",(0,s.jsx)(t.code,{children:"Position"})," object"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"x"}),", ",(0,s.jsx)(t.code,{children:"y"}),", ",(0,s.jsx)(t.code,{children:"z"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"image_width"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"NA"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"image_height"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"NA"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"wasm_base64"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"NA"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"test_cases"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["A list of ",(0,s.jsx)(t.code,{children:"TestCase"})," objects"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"point3d, point2d"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"CustomCameraCalibration"})," object can conveniently be instantiated directly from the binary or\na wasm-file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'calibration_file = CustomCameraCalibration.from_file("/path/to/calibration.wasm", ...)\ncalibration_binary = CustomCameraCalibration.from_bytes(b"...", ...)\n'})}),"\n",(0,s.jsxs)(t.p,{children:["We provide a set of utilities that will make it easier to work with the WebAssembly module. More specifically we provide\nvalidation code and compilation code from a few different languages to WebAssembly. The code is available both as python\nfunctions and via the ",(0,s.jsx)(t.code,{children:"kognicutil"})," cli."]}),"\n",(0,s.jsx)(t.h2,{id:"the-webassembly-module",children:"The WebAssembly module"}),"\n",(0,s.jsxs)(t.p,{children:["The WebAssembly must follow a strict interface where the module exports a function called ",(0,s.jsx)(t.code,{children:"project_point_to_image"}),". The\nfunction must take three arguments of type ",(0,s.jsx)(t.code,{children:"float64"})," and return two values of type ",(0,s.jsx)(t.code,{children:"float64"}),". Thus, the WebAssembly text representation of\nthis interface is ",(0,s.jsx)(t.code,{children:"func (param f64 f64 f64) (result f64 f64)"}),". The three arguments are the x, y and z coordinates of\nthe 3D point. The two return values are the x and y coordinates of the projected point in the image plane. WebAssembly\ndoesn't support multiple return values by default but this can be enabled with the ",(0,s.jsx)(t.a,{href:"https://github.com/WebAssembly/multi-value",children:"multi-value"}),"\nproposal."]}),"\n",(0,s.jsxs)(t.p,{children:["If the point is not within the field of view, the function should return ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/NaN",children:"NaN"})," for\nboth the x and y coordinates."]}),"\n",(0,s.jsx)(t.h2,{id:"validation",children:"Validation"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["This requires ",(0,s.jsx)(t.code,{children:"wasmtime"})," to be installed which is an optional of dependency kognic-io. Run ",(0,s.jsx)(t.code,{children:"pip install kognic-io[wasm]"})," to\ninstall it."]})}),"\n",(0,s.jsxs)(t.p,{children:["We provide validation code both as python functions and via the ",(0,s.jsx)(t.code,{children:"kognicutil"})," cli. We validate things such as but not limited to"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The module can be loaded"}),"\n",(0,s.jsx)(t.li,{children:"The function exists and has the correct signature"}),"\n",(0,s.jsx)(t.li,{children:"That a point can be projected using the module"}),"\n",(0,s.jsx)(t.li,{children:"That points are projected correctly if test cases are provided"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In python there are three different ways to validate a calibration"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import kognic.io.tools.calibration.validation as wasm_validation\nfrom kognic.io.model.calibration.camera.custom_camera_calibration import CustomCameraCalibration, Point2d, Point3d, TestCase\n\ntest_cases = [\n    TestCase(\n        point3d=Point3d(x=1.0, y=2.0, z=3.0),\n        point2d=Point2d(x=2.0, y=5.6)\n    ),\n    TestCase(\n        point3d=Point3d(x=1.0, y=1.0, z=-1.0),\n        point2d=Point2d(x=float("nan"), y=float("nan")) # point is outside field of view\n    )\n]\n\nwasm_file = "/path/to/calibration.wasm"\ncalibration = CustomCameraCalibration.from_bytes(wasm_file, test_cases=test_cases, ...)\nwasm_bytes = calibration.to_bytes()\n\n# Validate the calibration object\nwasm_validation.validate_custom_camera_calibration(calibration, test_cases=test_cases)\n\n# Validate the wasm file\nwasm_validation.validate_wasm_file(wasm_file, test_cases=test_cases)\n\n# Validate the wasm binary\nwasm_validation.validate_wasm_bytes(wasm_bytes, test_cases=test_cases)\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"kognicutil"})," cli can be used as follows"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kognicutil wasm validate calibration.wasm\n"})}),"\n",(0,s.jsx)(t.h2,{id:"compilation",children:"Compilation"}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"Rust 1.82.0 removes support for the multivalue feature target (returning multiple values from a function). Since this feature is currently needed for custom camera calibrations to work, the Rust and/or Cargo version needs to be pinned to < 1.82.0."})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"It is recommended to keep the wasm file as small as possible. Try to avoid dependencies that are not needed. For example,\nit may be preferred to implement some mathematical functions yourself instead of using the standard library."})}),"\n",(0,s.jsx)(t.p,{children:"As stated above the WebAssembly module must follow a strict interface and compilation requires the multi-value proposal.\nWe provide a set of utilities that will make it easier to compile the WebAssembly module from a few languages, see table below."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Language"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Target"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Compilation tool"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Required version"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Rust"}),(0,s.jsx)(t.td,{children:"*.rs"}),(0,s.jsx)(t.td,{children:"rustc"}),(0,s.jsx)(t.td,{children:"< 1.82.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Rust (Cargo)"}),(0,s.jsx)(t.td,{children:"Cargo.toml"}),(0,s.jsx)(t.td,{children:"cargo"}),(0,s.jsx)(t.td,{children:"< 1.82.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"C++"}),(0,s.jsx)(t.td,{children:"*.cc, *.cpp"}),(0,s.jsx)(t.td,{children:"emscripten"}),(0,s.jsx)(t.td,{children:"N/A"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"C"}),(0,s.jsx)(t.td,{children:"*.c"}),(0,s.jsx)(t.td,{children:"emscripten"}),(0,s.jsx)(t.td,{children:"N/A"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["The utilities are available both as python functions and via the ",(0,s.jsx)(t.code,{children:"kognicutil"})," cli. From Python, you can compile the module\nwith"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from kognic.io.tools.calibration.compilation import compile_to_wasm\nwasm_binary = compile_to_wasm("path/to/source")\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The returned binary can then be used to create a ",(0,s.jsx)(t.code,{children:"CustomCameraCalibration"})," object. If the ",(0,s.jsx)(t.code,{children:"output_wasm"})," parameter is passed,\nthe binary will be saved to the specified path. The ",(0,s.jsx)(t.code,{children:"kognicutil"})," cli can be used as follows"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kognicutil wasm compile path/to/source path/to/output.wasm\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Note that, validation is run by default after compilation. This can be disabled with the ",(0,s.jsx)(t.code,{children:"--skip-validation"})," flag."]}),"\n",(0,s.jsx)(t.p,{children:"Calibration parameters have to be embedded in the binary so that they can be used by the WebAssembly module. Try to\npre-compute as much as possible to increase the speed of the projection function at runtime."}),"\n",(0,s.jsx)(t.p,{children:"Below follows examples of a simplified version of the pinhole calibration in a few different languages."}),"\n",(0,s.jsx)(t.h3,{id:"example-rust",children:"Example: Rust"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Rust needs to be installed with the ",(0,s.jsx)(t.code,{children:"wasm32-wasi"})," target for this. Install Rust according to the instructions\n",(0,s.jsx)(t.a,{href:"https://www.rust-lang.org/tools/install",children:"here"})," and then add the target with ",(0,s.jsx)(t.code,{children:"rustup target add wasm32-wasi"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.a,{href:"https://github.com/annotell/kognic-io-examples-python/tree/master/examples/calibration/custom/pinhole.rs",children:"Rust file"}),"\ncan be compiled with"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kognicutil wasm compile path/to/source.rs path/to/output.wasm\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Note that ",(0,s.jsx)(t.code,{children:"panics"})," are not supported and compilation will fail if the code contains it."]}),"\n",(0,s.jsx)(t.h4,{id:"rust-with-cargo",children:"Rust with Cargo"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Rust and Cargo need to be installed with the ",(0,s.jsx)(t.code,{children:"wasm32-wasi"})," target for this. Install Rust and Cargo\naccording to the instructions ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/cargo/getting-started/installation.html",children:"here"})," and then add\nthe target with ",(0,s.jsx)(t.code,{children:"rustup target add wasm32-wasi"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.a,{href:"https://github.com/annotell/kognic-io-examples-python/tree/master/examples/calibration/custom/pinhole-rust-cargo",children:"Rust module with Cargo"}),"\ncan be compiled with"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kognicutil wasm compile path/to/source/Cargo.toml path/to/output.wasm\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Note that it is important to specify that the library is a ",(0,s.jsx)(t.code,{children:"cdylib"})," and it is also recommended to set ",(0,s.jsx)(t.code,{children:"strip = true"})," to\nreduce the size of the WebAssembly module. This is done by adding the following to the ",(0,s.jsx)(t.code,{children:"Cargo.toml"})," file"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",children:'[lib]\ncrate-type = ["cdylib"]\n\n[profile.release]\nstrip = true\n'})}),"\n",(0,s.jsx)(t.h3,{id:"example-c",children:"Example: C++"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Emscripten needs to be installed for this, which can be done according to the instructions\n",(0,s.jsx)(t.a,{href:"https://emscripten.org/docs/getting_started/downloads.html",children:"here"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.a,{href:"https://github.com/annotell/kognic-io-examples-python/tree/master/examples/calibration/custom/pinhole.cc",children:"C++ file"}),"\ncan be compiled with"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kognicutil wasm compile path/to/source.cc path/to/output.wasm\n"})}),"\n",(0,s.jsx)(t.p,{children:"or with"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kognicutil wasm compile path/to/source.cpp path/to/output.wasm\n"})}),"\n",(0,s.jsx)(t.h3,{id:"example-c-1",children:"Example: C"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Emscripten needs to be installed for this, which can be done according to the instructions\n",(0,s.jsx)(t.a,{href:"https://emscripten.org/docs/getting_started/downloads.html",children:"here"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.a,{href:"https://github.com/annotell/kognic-io-examples-python/tree/master/examples/calibration/custom/pinhole.c",children:"C file"}),"\ncan be compiled with"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kognicutil wasm compile path/to/source.c path/to/output.wasm\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var n=i(6540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);