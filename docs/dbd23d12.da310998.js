(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return m})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return b})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return l}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),l=function(e){return function(t){var n=p(t.components);return a.a.createElement(e,r({},t,{components:n}))}},p=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(n),l=i,u=m["".concat(r,".").concat(l)]||m[l]||h[l]||o;return n?a.a.createElement(u,c(c({ref:t},s),{},{components:n})):a.a.createElement(u,c({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var i=n(3),a=n(8),o=(n(0),n(115)),r={title:"Motion Compensation for Multi-Lidar Setups"},s={unversionedId:"kognic-io/inputs/lidars_with_imu_data",id:"kognic-io/inputs/lidars_with_imu_data",isDocsHomePage:!1,title:"Motion Compensation for Multi-Lidar Setups",description:"An inherent problem with labeling any lidar setup, and especially a multi-lidar one,",source:"@site/docs/kognic-io/inputs/lidars_with_imu_data.md",slug:"/kognic-io/inputs/lidars_with_imu_data",permalink:"/docs/kognic-io/inputs/lidars_with_imu_data",editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/inputs/lidars_with_imu_data.md",version:"current",sidebar:"docs",previous:{title:"Pre-annotations",permalink:"/docs/kognic-io/pre_annotations"},next:{title:"Input Feature Flags",permalink:"/docs/kognic-io/feature_flags"}},c=[{value:"Enable/disable motion compensation",id:"enabledisable-motion-compensation",children:[]}],d={rightToc:c};function m(e){var t=e.components,n=Object(a.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(i.default)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"An inherent problem with labeling any lidar setup, and especially a multi-lidar one,\nis that the resulting point\ncloud is not a snapshot from a single instant in time but a time interval\nin which several lidar sweeps have been made. This causes a problem during labeling since\nthe objects can move from one lidar sweep to the next, and if you try to label a car with\ne.g. a 3D box that box would not represent the actual size of that car. This issue can be\nresolved with the help of motion compensation, where we syncronize the timestamp of all\npoints in the point cloud."),Object(o.mdx)("p",null,"By including data from the Intertial Measurement Unit (IMU) of the ego vehicle we get a very\nexact trajectory of how the car is moving during the lidar sweeps. This allows us to perform\nmotion compensation, adjusting the points in the point cloud so that they represent the same\ninstant in time."),Object(o.mdx)("p",null,"Additionally, each point in the provided point clouds need to have a unix timestamp specified\n(in nanoseconds), so that the motion compensation can work. "),Object(o.mdx)("p",null,"What instant in time to motion-compensate the points to can be specified\nwith the ",Object(o.mdx)("inlineCode",{parentName:"p"},"unix_timestamp_ns")," parameter. If this is not specified then, for each\nframe, the median time of all points in the pointclouds will be used instead."),Object(o.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"All Unix Timestamps need to be in nanoseconds")),Object(o.mdx)("div",{parentName:"div",className:"admonition-content"},Object(o.mdx)("p",{parentName:"div"},"In order for the motion compensation to work correctly it is important with a consistent\nunit of time. Therefore all unix timestamps needs to be provided in nanoseconds."))),Object(o.mdx)("p",null,"Note that all timestamps (in point clouds and the provided ",Object(o.mdx)("inlineCode",{parentName:"p"},"unix_timestamp_ns"),") must be encompassed by\nthe timestamps in the imu data. Otherwise, the scene creation will fail."),Object(o.mdx)("p",null,"IMU data is provided as a list of ",Object(o.mdx)("inlineCode",{parentName:"p"},"IMUData")," objects in the root of the input object in the following way:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-python"},'\nfrom kognic.io.model.ego import IMUData\nfrom kognic.io.model.calibration import Position, RotationQuaternion\nfrom kognic.io.model.input.lidars_and_cameras_sequence import LidarsAndCamerasSequence, Frame\n\nfrom kognic.io.client import KognicIOClient\n\nimu_data = [\n    IMUData(\n        position=Position(x=-10.44, y=126.06, z=78.817),\n        rotation_quaternion=RotationQuaternion(x=-1.0, y=0.5, z=1, w=0),\n        timestamp=1665997200597027072 # ns\n    ),\n    ...\n]\n\nframes = [\n    Frame(..., unix_timestamp_ns = 1665997358832901120),\n    Frame(..., unix_timestamp_ns = 1665997503951270144),\n]\n\n\nlidars_and_cam_seq = LidarsAndCamerasSequence(\n    ...,\n    imu_data = imu_data, \n    frames = frames,\n)\n\n\nclient = KognicIOClient()\nclient.lidars_and_cameras_sequence.create(\n    lidars_and_cam_seq,\n    project="project-ext-id",\n    dryrun=False\n)\n')),Object(o.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use dryrun to validate input")),Object(o.mdx)("div",{parentName:"div",className:"admonition-content"},Object(o.mdx)("p",{parentName:"div"},"Setting ",Object(o.mdx)("inlineCode",{parentName:"p"},"dryrun")," parameter to true in the method call, will validate the input using the API but not create any inputs."))),Object(o.mdx)("h2",{id:"enabledisable-motion-compensation"},"Enable/disable motion compensation"),Object(o.mdx)("p",null,"By default motion compensation is performed for inputs with LIDAR pointclouds when IMU data is provided."),Object(o.mdx)("p",null,"Whether motion compensation is enabled is controlled by an ",Object(o.mdx)("a",{parentName:"p",href:"../feature_flags"},"input feature flag"),", the default is enabled. To disable motion compensation you must provide a different set of flags from the default, and not include the motion compensation flag. Calling the ",Object(o.mdx)("inlineCode",{parentName:"p"},"create")," method for an input, and not specifying feature flags at all is equivalent to using the defaults, and motion compensation will be performed."),Object(o.mdx)("p",null,"It may be desirable to disable motion compensation in cases where pointclouds are already motion compensated outside of the Kognic platform."))}m.isMDXComponent=!0}}]);