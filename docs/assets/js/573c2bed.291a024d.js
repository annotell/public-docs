"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[6646],{9505:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(4848),a=i(8453);const o={title:"Review"},r=void 0,s={id:"annotation-integration/review",title:"Review",description:"A review is a decision that determines whether an annotation is of sufficient quality or if it needs",source:"@site/docs/annotation-integration/review.md",sourceDirName:"annotation-integration",slug:"/annotation-integration/review",permalink:"/docs/annotation-integration/review",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/annotation-integration/review.md",tags:[],version:"current",frontMatter:{title:"Review"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/annotation-integration/introduction"},next:{title:"OpenLABEL format",permalink:"/docs/openlabel/openlabel-format"}},d={},c=[{value:"Posting a review",id:"posting-a-review",level:2},{value:"Posting a partial review",id:"posting-a-partial-review",level:2},{value:"Feedback",id:"feedback",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["A review is a decision that determines whether an ",(0,n.jsx)(t.a,{href:"../#annotation",children:"annotation"})," is of sufficient quality or if it needs\nimprovement. In order to facilitate efficient improvements, the person or system that made the decision can provide\n",(0,n.jsx)(t.a,{href:"#feedback",children:"feedback"})," data that details potential errors or mistakes. Please refer to our ",(0,n.jsx)(t.a,{href:"https://docs.kognic.com/AHwD-introduction",children:"user documentation"}),"\nregarding feedback to gain insight on how these concepts are used in the platform, note that these describe the full\nset of possibilities and workflows for dealing with reviews and feedback - the possibilities enabled by this integration\nare currently somewhat limited, as detailed below."]}),"\n",(0,n.jsx)(t.h2,{id:"posting-a-review",children:"Posting a review"}),"\n",(0,n.jsxs)(t.p,{children:["The current integration capabilities only allow posting reviews for delivered annotations. It is only available in\nrequests where your organization is the ",(0,n.jsx)(t.a,{href:"https://docs.kognic.com/request-details#HXuNx",children:"producer"}),". The annotations are\nidentified using their open label UUID that can be found in the metadata (and in the file name) of\n",(0,n.jsx)(t.a,{href:"../kognic-io/annotations",children:"downloaded annotations"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["When posting a review, the API expects feedback data as well as a boolean ",(0,n.jsx)(t.code,{children:"accepted"})," that indicates whether the\nquality is perceived as sufficient or not. The API also expects an enum ",(0,n.jsx)(t.code,{children:"workflow"})," that details how the improvement\nshould happen. For a rejected review and the workflow 'correct', a single correction task is triggered, with no\nfollow-up Review task. The completed Correction task becomes the new delivered Annotation."]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["This integration API is currently limited to rejecting delivered annotations, the possible values of these input\nparameters are thus limited to ",(0,n.jsx)(t.code,{children:"accepted=false"})," and ",(0,n.jsx)(t.code,{children:'workflow="correct"'}),". They are included in the interface at this\nstage in order to allow future expansions on the available use cases, workflows and actions."]})}),"\n",(0,n.jsx)(t.p,{children:"A successful review post will return a UUID that identifies the review, and that can be used to fetch the posted\nfeedback data. This will also create a task according to the chosen workflow. Depending on project set up, there might\nbe a need for this to be coordinated with the project's managers."}),"\n",(0,n.jsx)(t.h2,{id:"posting-a-partial-review",children:"Posting a partial review"}),"\n",(0,n.jsx)(t.p,{children:"A partial review is an incomplete review with optional feedback data, this capability may be used in order to achieve\none or more of the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Prepare a review task with manual or machine generated feedback"}),"\n",(0,n.jsx)(t.li,{children:"Select what should be reviewed"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This feature is available in requests where your organization is the\n",(0,n.jsx)(t.a,{href:"https://docs.kognic.com/request-details#HXuNx",children:"producer"})," or the ",(0,n.jsx)(t.a,{href:"https://docs.kognic.com/request-details#Qm7yR",children:"owner"}),".\nLike the capability to post a complete review, this feature is currently only available for delivered annotations."]}),"\n",(0,n.jsx)(t.p,{children:"When a partial review is posted, a review task will be created for the annotation. This review task will contain the\nfeedback that may have been supplied when posting the partial review. The reviewer can then delete or invalidate any\nfeedback they disagree with, or add their own feedback. It is currently not possible to override the workflow of a\npartial review, the default workflow is a review loop - where the correction of a rejected review task will be followed\nby a new review task. If the review is accepted by the reviewer, the annotation will be delivered again, updated to\naccount for any potential changes the reviewer might have done."}),"\n",(0,n.jsx)(t.h2,{id:"feedback",children:"Feedback"}),"\n",(0,n.jsx)(t.p,{children:"A feedback item details something noteworthy in an annotation. In order to do this the following information is\navailable to add, and will be available for annotators when improving the annotation:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Error type ID"})," - a UUID selected from the list of ",(0,n.jsx)(t.a,{href:"https://annotation-integration.app.kognic.com/api#/Reviews/getErrorTypes",children:"available error types"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Description"})," - a string describing what should be improved"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Sensor ID"})," - the identifier of the ",(0,n.jsx)(t.a,{href:"../kognic-io/overview#sensor-specification",children:"sensor"})," where the error appears"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Frame ID"})," - the identifier of the ",(0,n.jsx)(t.a,{href:"../kognic-io/overview#sequential-frames",children:"frame"})," the error appears"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Object ID"})," - the identifier of a particular object that is subject to this particular feedback"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Pin"})," - a pointer to a specific area where something is of interest, this can be used to indicate missing objects (a\npin contains mandatory x and y coordinates with an optional z coordinate, the coordinate unit in images are pixels and\nis sensor specific in 3d data)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Suggested properties"})," - when inappropriate property values are discovered, this field can be used to indicate a more\nappropriate value"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Metadata"})," - this field may contain any data, it could be used to identify the version of the system that generated the\nfeedback"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>s});var n=i(6540);const a={},o=n.createContext(a);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);