"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[16],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=i,h=l["".concat(c,".").concat(f)]||l[f]||d[f]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={title:"FAQ",description:"FAQ"},a=void 0,s={unversionedId:"kognic-io/FAQ",id:"kognic-io/FAQ",title:"FAQ",description:"FAQ",source:"@site/docs/kognic-io/FAQ.md",sourceDirName:"kognic-io",slug:"/kognic-io/FAQ",permalink:"/docs/kognic-io/FAQ",draft:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/kognic-io/FAQ.md",tags:[],version:"current",frontMatter:{title:"FAQ",description:"FAQ"},sidebar:"docs",previous:{title:"Errors",permalink:"/docs/kognic-io/error_handling"},next:{title:"Images",permalink:"/docs/kognic-io/resources/images"}},c={},p=[{value:"Receiving <code>requests.exceptions.HTTPError: 403 Client Error: Forbidden for url: ...</code> when trying to create inputs",id:"receiving-requestsexceptionshttperror-403-client-error-forbidden-for-url--when-trying-to-create-inputs",level:3},{value:"How do I know that my input was created successfully?",id:"how-do-i-know-that-my-input-was-created-successfully",level:3},{value:"How can I view my input?",id:"how-can-i-view-my-input",level:3},{value:"Why are the cuboids rotated by 90 degrees?",id:"why-are-the-cuboids-rotated-by-90-degrees",level:3}],u={toc:p};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"receiving-requestsexceptionshttperror-403-client-error-forbidden-for-url--when-trying-to-create-inputs"},"Receiving ",(0,i.kt)("inlineCode",{parentName:"h3"},"requests.exceptions.HTTPError: 403 Client Error: Forbidden for url: ...")," when trying to create inputs"),(0,i.kt)("p",null,"This implies that the authenticated user does not have access to the endpoint being called. Make sure you're ",(0,i.kt)("a",{parentName:"p",href:"../kognic-apis#authentication"},"authenticating")," correctly. If a Kognic user, make sure ",(0,i.kt)("inlineCode",{parentName:"p"},"client_organization_id")," is specified on the ",(0,i.kt)("inlineCode",{parentName:"p"},"KognicIOClient"),"."),(0,i.kt)("h3",{id:"how-do-i-know-that-my-input-was-created-successfully"},"How do I know that my input was created successfully?"),(0,i.kt)("p",null,"Whenever a ",(0,i.kt)("inlineCode",{parentName:"p"},".create(...)")," call for an input has been successfully made it's (asynchronously) submitted for pre-processing in the Kognic platform. The input is available only once the pre-processing has been successfully executed. However, pre-processing can also fail, for example if the pointcloud or image files are poorly formatted or corrupt. "),(0,i.kt)("p",null,"The easiest way to check the status of an input is the ",(0,i.kt)("a",{parentName:"p",href:"./working_with_scenes_and_inputs#input-status"},"input status")," field present on inputs returned by the methods ",(0,i.kt)("inlineCode",{parentName:"p"},"get_inputs(...)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"get_inputs_by_uuids(...)"),". The input is successfully created and available in the platform once the status is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"created"),". "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Since pre-processing is an asynchronous process it might take a while before the input changes status from ",(0,i.kt)("inlineCode",{parentName:"p"},"processing")," to either ",(0,i.kt)("inlineCode",{parentName:"p"},"created")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"failed"),". ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Example code of how to check if an input has been successfully created\nresp = client.cameras.create(...)\nuuid = resp.uuid\n\n[i] = client.input.get_inputs_by_uuids(input_uuids=[uuid])\n\n# Successfully created and available once status is `created`\nprint(f'Input {uuid} status:', i.status)\n")),(0,i.kt)("h3",{id:"how-can-i-view-my-input"},"How can I view my input?"),(0,i.kt)("p",null,"Successfully created inputs can be viewed in the Kognic platform via their ",(0,i.kt)("em",{parentName:"p"},"view-link"),". The view-link can be accessed via the ",(0,i.kt)("a",{parentName:"p",href:"./working_with_scenes_and_inputs#response"},(0,i.kt)("inlineCode",{parentName:"a"},"view_link"))," field present on inputs returned by the methods ",(0,i.kt)("inlineCode",{parentName:"p"},"get_inputs(...)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"get_inputs_by_uuids(...)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Example code of how to access view-links for all inputs in a project\ninputs = client.input.get_inputs(project="project-identifier")\n\nfor i in inputs:\n    print(f"Input {i.external_id} view-link: {i.view_link}")\n')),(0,i.kt)("h3",{id:"why-are-the-cuboids-rotated-by-90-degrees"},"Why are the cuboids rotated by 90 degrees?"),(0,i.kt)("p",null,"The coordinate system is defined by the uploaded data, but the rotation is defined by Kognic. This is somewhat\ndifferent (90-degree rotation) compared to the ISO 8855 standard.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/openlabel/openlabel-format#rotation-of-cuboids"},"Rotation of Cuboids")," for more about this and how you can\nconvert to ISO 8855."))}l.isMDXComponent=!0}}]);