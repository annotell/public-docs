"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[4903],{6039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(4848),a=n(8453);n(1470),n(9365);const r={id:"workflow",title:"Create and setup your project"},i="Create and setup your project",o={id:"workflow/workflow",title:"Create and setup your project",description:"This guide will walk you through the essential steps to create and set up your project. By following these instructions, you'll ensure a smooth start and lay a solid foundation for your work. Let's begin with the key elements you need to consider when initiating your project. If you want a further deep dive into each topic, you can read more in our platform documentation",source:"@site/docs/workflow/workflow.mdx",sourceDirName:"workflow",slug:"/workflow/",permalink:"/docs/workflow/",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/workflow/workflow.mdx",tags:[],version:"current",frontMatter:{id:"workflow",title:"Create and setup your project"},sidebar:"docs",previous:{title:"Coordinate Systems",permalink:"/docs/kognic-io/coordinate_systems"},next:{title:"Prerequisites for Annotation",permalink:"/docs/upload-data/prerequisites-for-annotation"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Create project",id:"create-project",level:2},{value:"Create an annotation instruction",id:"create-an-annotation-instruction",level:2},{value:"Create the first request",id:"create-the-first-request",level:2},{value:"Upload data",id:"upload-data",level:2},{value:"Data Orchestration",id:"data-orchestration",level:2},{value:"Add team &amp; activate request",id:"add-team--activate-request",level:2},{value:"<strong>Task allocation type</strong>",id:"task-allocation-type",level:3},{value:"Responsibility",id:"responsibility",level:3}];function d(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-and-setup-your-project",children:"Create and setup your project"}),"\n",(0,s.jsxs)(t.p,{children:["This guide will walk you through the essential steps to create and set up your project. By following these instructions, you'll ensure a smooth start and lay a solid foundation for your work. Let's begin with the key elements you need to consider when initiating your project. If you want a further deep dive into each topic, you can read more in our ",(0,s.jsx)(t.a,{href:"https://docs.kognic.com",children:"platform documentation"})]}),"\n",(0,s.jsx)(t.p,{children:"There are 5 steps to configure a project in the Kognic platform:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Create the project"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Create your annotation instruction"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Create your first request"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Upload your data"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Add your team to the request"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This guide will cover all five steps one by one where you will in the end have a request for annotating a camera image ready to go."}),"\n",(0,s.jsx)(t.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"To be able to follow this guide you need a Kognic account with Workspace role Project Manager & Developer or Admin, lets get started!"}),"\n",(0,s.jsx)(t.h2,{id:"create-project",children:"Create project"}),"\n",(0,s.jsx)(t.p,{children:"Projects are used to group and organize annotation work in the Kognic platform. Inside the project, the annotation work is further organized into annotation requests detailing what data to annotate and how. Below is a guide on how to create a new project."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Login to the ",(0,s.jsx)(t.a,{href:"https://app.kognic.com",children:"app"})," and navigate to the Project management page"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(9428).A+"",width:"1802",height:"1006"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"In the top right corner, press \u201cCreate new project\u201d"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create your project by giving it a name and external id, then press Create project. The external id is used to access the project through Kognics APIs. If you leave it blank, it will be set to a random UUID.\n",(0,s.jsx)(t.img,{src:n(1165).A+"",width:"1036",height:"812"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Congratulations, you have now created your first project. The project will appear in the project list and you can press it to continue the setup"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"create-an-annotation-instruction",children:"Create an annotation instruction"}),"\n",(0,s.jsx)(t.p,{children:"An Annotation Instruction is a specification of what you want to be annotated, but also an explanation or guidance of how you want it to be annotated."}),"\n",(0,s.jsx)(t.p,{children:"For example, you may specify that you would like to annotate cars and pedestrians in 3D with bounding boxes, which we call Classes. In addition, you may also want to clarify class-related annotation rules in a separate guideline document, for example, that the 3D box annotations around each car should not include the side mirrors."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To create a Annotation Instruction, first navigate to the Annotation Instruction tab inside the project. Click on your project in the project list and then click on Annotation Instruction in the top bar, then press Create New Instruction to start.\n",(0,s.jsx)(t.img,{src:n(4682).A+"",width:"1482",height:"502"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the popup window, give your instruction a name and create it. After you press Create Instruction you will be redirected back to the list of annotation instructions and your new instruction will be listed.\n",(0,s.jsx)(t.img,{src:n(794).A+"",width:"387",height:"206"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click on new instruction to open it and see all different revisions. Currently there are none. Create one by clicking Create Revision in the top right corner.\n",(0,s.jsx)(t.img,{src:n(7382).A+"",width:"1452",height:"966"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"In the new popup window, create a new revision by naming it. For Type of revision select New revision draft. Finish the process by clicking Create Revision, upon doing that you will be redirected into the revision."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(8621).A+"",width:"381",height:"277"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Now its time to start building out the annotation instruction. There are 5 different steps in the process. ",(0,s.jsx)(t.strong,{children:"Creating the classes ("})," What classes are needed and with which shape types they shall be annotated with ), creating ",(0,s.jsx)(t.strong,{children:"Class properties"})," and adding them to the relevant classes, adding optional ",(0,s.jsx)(t.strong,{children:"Scene"})," ",(0,s.jsx)(t.strong,{children:"Properties"})," to the inputs, configuring various settings and attaching your guideline."]}),"\n",(0,s.jsx)(t.p,{children:"As an example here we will create the class Car that shall be annotated as a 3D cuboid with 2 different properties."}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create a class by clicking ",(0,s.jsx)(t.strong,{children:"Create new class"})," in the bottom right corner"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Change the Geometry type to 3D Bounding box and name the class Car"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Add \u201cAuto-adjust this Frame\u201d and \u201cMachine Assisted 3D tool\u201d as Automation settings\n",(0,s.jsx)(t.img,{src:n(9223).A+"",width:"1470",height:"782"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To create a class property, go the the class properties tab and press ",(0,s.jsx)(t.strong,{children:"Create new class property"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select the property type you need and name the property, in this example a True / False property is selected. Then configure the property, for this example. The property value is unique per sensor its visible in and it\u2019s a required property without any pre-selected value.\n",(0,s.jsx)(t.img,{src:n(2543).A+"",width:"1461",height:"822"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Now it\u2019s time to connect the property to the class. Go back to the Classes tab and select the Car class"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Press Select properties to this class\n",(0,s.jsx)(t.img,{src:n(9584).A+"",width:"1470",height:"782"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select the property you created and press Save changes\n",(0,s.jsx)(t.img,{src:n(4879).A+"",width:"686",height:"328"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Go to configuration, here you can configure your task according to your specific need, to learn about each setting. Press the question mark to read about it. In our case, go to 3D settings and enable \u201cDefault to cuboid estimation\u201d\n",(0,s.jsx)(t.img,{src:n(3269).A+"",width:"1466",height:"1144"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Go to the Guideline tab and upload your guideline as a PDF."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Now a draft is finished, to test your revision and make sure it behaves as you want, press Preview in the Top-right corner to test it."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Select \u201cMulti-lidar\u201d and press Preview, a new tab will open with a demo task with your annotation instruction"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To the right you will see your configured classes. Draw an object to see that each class has the properties you want. In our case we have the \u201cCar\u201d class with 1 True/False property named Occluded\n",(0,s.jsx)(t.img,{src:n(5647).A+"",width:"1720",height:"1294"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["If you are happy with the behaviour, go back to the Annotation Instruction and press \u201cSet as ready for production in the top right bar\n",(0,s.jsx)(t.img,{src:n(9220).A+"",width:"1448",height:"192"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"In the pop-up, you get the option to get a review from a Kognic expert. Disable that checkbox and click Confirm in this case."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(1611).A+"",width:"425",height:"303"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Well done! The annotation instruction is now ready to be used when creating a request which is the next step"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["More details about Annotation Instructions and some tips & tricks are available ",(0,s.jsx)(t.a,{href:"https://docs.kognic.com/annotation-instruction",children:"here"})]}),"\n",(0,s.jsx)(t.h2,{id:"create-the-first-request",children:"Create the first request"}),"\n",(0,s.jsx)(t.p,{children:"Annotation request is the core concept in the organization of annotation work at Kognic. The request's configuration specifies what data to annotate (Input batch), how to annotate the data (Annotation Instruction), which process the data should be produced by (Workflow), and who should annotate and quality-assure the data (Team)."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To get started, open the project you created before and select the Annotation Requests tab. Then locate the Create request button at the top right corner of the project pag\n",(0,s.jsx)(t.img,{src:n(9249).A+"",width:"3110",height:"830"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Go ahead and create the request. Here there is a variety of settings to go through and select. More details about the different sections can be found by clicking the question mark on the right hand side of each section."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Add Request and Input batch info"})}),"\n",(0,s.jsx)(t.p,{children:"Name your request and external id. The external id is again used when working with the request via the API. Annotation types are used to categorize the annotations produced in different requests. Select the one that best matches the type of annotations you plan to produce in your request."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Request Producer"})}),"\n",(0,s.jsx)(t.p,{children:"The organization with the request role Producer is responsible for producing annotated data in the request. Users from this organization are allowed more detailed monitoring and management options and can configure the request team in detail. All to ensure they can successfully monitor and manage the production process."}),"\n",(0,s.jsx)(t.p,{children:"In this Request, select your organization as the Request Producer"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(1847).A+"",width:"3096",height:"1456"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Input type"})}),"\n",(0,s.jsxs)(t.p,{children:["The input type decides what data type you can upload to your newly created input batch and later annotate in the request. For this request, select ",(0,s.jsx)(t.strong,{children:"Cameras"})]}),"\n",(0,s.jsx)(t.p,{children:"The available input types are:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Input type"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Lidar and Cameras"}),(0,s.jsx)(t.td,{children:"A single frame, containing both camera data (from one or multiple cameras) and lidar data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Lidar and Cameras Sequence"}),(0,s.jsx)(t.td,{children:"A sequence of frames, containing both camera data (from one or multiple cameras) and lidar data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cameras"}),(0,s.jsx)(t.td,{children:"A single frame of camera data. The data can be from one or multiple cameras."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cameras Sequence"}),(0,s.jsx)(t.td,{children:"A sequence of camera frames. The data can be from one or multiple cameras."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Aggregated Lidar and Cameras Sequence"}),(0,s.jsx)(t.td,{children:"A sequence of frames, containing both camera data (from one or multiple cameras) and lidar data. By using this model the lidar data will be aggregated using your IMU data. This can be useful for example when annotating 3D lines"})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Annotation Instruction"})}),"\n",(0,s.jsx)(t.p,{children:"Select the Annotation Instruction and Revision that you created in the previous step as the Annotation Instruction"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Request Workflow"})}),"\n",(0,s.jsxs)(t.p,{children:["The request workflow determines the steps used to produce annotations and in what order. They define what type of steps (tasks) to complete before we have produced a deliverable annotation. For this request, select ",(0,s.jsx)(t.strong,{children:"Annotate + Full Review + Sampled Review."})]}),"\n",(0,s.jsxs)(t.p,{children:["A comprehensive documentation on Workflows are available on this page ",(0,s.jsx)(t.a,{href:"https://docs.kognic.com/annotation-workflows",children:"Annotation Workflows - Kognic: Annotation + Dataset Manageme\u2026"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Review error type"})}),"\n",(0,s.jsxs)(t.p,{children:["The error types are available in the Feedback Tools during Review tasks, and during follow-up Correction tasks. If your organization has many error types configured, you might want to select a subset of error types that are relevant for this request. You can learn more about error types on the page ",(0,s.jsx)(t.a,{href:"https://docs.kognic.com/error-types",children:"Error Types - Kognic: Annotation + Dataset Management for Se\u2026"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Finish by clicking Create Request\n",(0,s.jsx)(t.img,{src:n(9576).A+"",width:"3160",height:"984"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"upload-data",children:"Upload data"}),"\n",(0,s.jsx)(t.p,{children:"The request configuration is complete, well done! Now it\u2019s time to upload data to the request."}),"\n",(0,s.jsxs)(t.p,{children:["Uploading data is primarily done via the Kognic APIs. To access our APIs, Kognic provides a Python client. For simpler inputs, you can also upload data through the user interface. We'll cover this process in the ",(0,s.jsx)(t.a,{href:"https://www.notion.so/Create-and-setup-your-project-guide-111c4e3f60728077acebf963b1e2afdb?pvs=21",children:"Data Orchestration block"})," below."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create your Kognic API credentials and install the client package\nFollow the ",(0,s.jsx)(t.a,{href:"https://developers.kognic.com/docs/getting-started/quickstart/",children:"quickstart guide"}),". Make sure to verify that is works."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Upload and create an Input"})}),"\n",(0,s.jsx)(t.p,{children:"When uploading data to Kognic, you have two options: you can either send the data directly to a specific request (like the one we created earlier), or just upload it as a standalone scene. Note that a scene will be created in both cases, but in the first case the scene will also be automatically sent to the request for annotation. Note that if you only create a standalone scene you can always add it to a request later on. A scene can be reused in many requests in case you want to annotate the same data in different ways."}),"\n",(0,s.jsxs)(t.p,{children:["The request above was setup as a Cameras input type request. That means that you can upload a single camera image from one or more cameras in one frame. Follow the code example ",(0,s.jsx)(t.em,{children:"Uploading a 2D scene"})," ",(0,s.jsx)(t.a,{href:"https://developers.kognic.com/docs/upload-your-first-scene/",children:"here"})," to upload your first scene. All you need is any image you would like to annotate."]}),"\n",(0,s.jsx)(t.p,{children:"In this case we both want to create the scene and send it to the request that we created. This can be done like the code snippet below, where you specify external IDs for both the project and request (also known as batch). If you don't remember them, don't worry\u2014you can copy them from the app as shown below."}),"\n",(0,s.jsx)(t.p,{children:"You can copy the external ids from the app. The project id under the Project main page and press the three dots in the top right corner."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:n(5954).A+"",width:"3126",height:"1160"}),"\nTo copy the Batch external id, go into the request and copy the id in the same fashion"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(6155).A+"",width:"3114",height:"1446"})}),"\n",(0,s.jsxs)(t.p,{children:["If you want to know more about Scenes and Inputs and how to work with them you can read more ",(0,s.jsx)(t.a,{href:"https://developers.kognic.com/docs/kognic-io/working_with_scenes_and_inputs/#creating-inputs-from-scene",children:"here"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"data-orchestration",children:"Data Orchestration"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://app.kognic.com/data-orchestration",children:"Data Orchestration tool"})," is a great way to visualise your uploaded data. Here you can see all of the scenes that you have created. You can filter on certain input types, as well as visualise the actual data in the drawing tool by using the dot-menu on the right as shown below."]}),"\n",(0,s.jsxs)(t.p,{children:["Here you can also view in what request a specific scene is annotated in. And if you want to send the scene to a specific request for annotation you can use the Kognic API ",(0,s.jsx)(t.a,{href:"https://developers.kognic.com/docs/kognic-io/working_with_scenes_and_inputs#creating-inputs-from-scene",children:"as explained here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(3605).A+"",width:"2250",height:"815"})}),"\n",(0,s.jsx)(t.p,{children:"In the upper right corner of the page you can also upload a scene via the UI. This is currently limited to Cameras and Cameras Sequence inputs, but can be of great help to get started."}),"\n",(0,s.jsx)(t.h2,{id:"add-team--activate-request",children:"Add team & activate request"}),"\n",(0,s.jsx)(t.p,{children:"The last step to setup is to add the team that should work on the request"}),"\n",(0,s.jsx)(t.p,{children:"Two settings determine how a team member gets assigned tasks and what types of tasks they will be assigned - the responsibility and the task allocation type."}),"\n",(0,s.jsx)(t.h3,{id:"task-allocation-type",children:(0,s.jsx)(t.strong,{children:"Task allocation type"})}),"\n",(0,s.jsx)(t.p,{children:"You can have manual or automatic task allocation"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Automatic task allocation e"}),"nsures that the team member will ",(0,s.jsx)(t.strong,{children:"automatically"})," get access to tasks of specific types when automatic task allocation has been activated for the request. The team member will be able to work on the tasks as long as there are tasks available of the type/types their responsibility allows them to work on."]}),"\n",(0,s.jsx)(t.p,{children:'Automatically allocated tasks are assigned when the team member clicks "Start a task" on thier \u201cMy Tasks\u201d page'}),"\n",(0,s.jsxs)(t.p,{children:["If a user have ",(0,s.jsx)(t.strong,{children:"Manual task allocation"})," a project manager must manually assign tasks to the user."]}),"\n",(0,s.jsx)(t.h3,{id:"responsibility",children:"Responsibility"}),"\n",(0,s.jsxs)(t.p,{children:["The responsibility determines from which ",(0,s.jsx)(t.strong,{children:"Workflow stage"})," the team member will be assigned tasks during automatic task allocation**.** When manual task allocation is activated for a team member, you can assign them any type of task regardless of their responsibility."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"What are workflow stages?"})}),"\n",(0,s.jsx)(t.p,{children:"On the input's way toward getting a delivery-ready annotation, it goes through a series of workflow stages. Each stage corresponds to one action in one of the workflow's different phases, such as the action \u201cCorrect\u201d in the phase \u201cReview\u201d."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Annotate\ud83d\udd8b\ufe0f"}),"\nThe team member will be able to work on available annotation tasks, which are the base annotation task starting from an empty input"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Correct\ud83d\udd8d\ufe0f"}),"\nThe team member will be to work on available Review correction tasks during automatic task allocation. A Review correction task contains comments and correction requests from a previous Review tasks."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Review \ud83d\udc4d\ud83d\udc4e"}),"\nThe team member can work on available Review tasks during automatic task allocation. A Review task is made to quality assure a previous task."]}),"\n",(0,s.jsx)(t.p,{children:"Now lets add your team."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Navigate to the request and the team tab"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(8840).A+"",width:"3126",height:"1172"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Press add your team members"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(3784).A+"",width:"512",height:"396"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Add a team member\nSelect the Task allocation type and responsibility you want, then search for their name or email to select them."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Press Add Members to finish the setup"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:n(7782).A+"",width:"512",height:"400"}),"\nRead more about a request team ",(0,s.jsx)(t.a,{href:"https://docs.kognic.com/team",children:"Team - Kognic: Annotation + Dataset Management for Sensor-Fu\u2026"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Great job, lets finish and get to work by pressing Activate automatic allocation on the top right. Team members with Automatic task allocation will now have production tasks to work on under their My Tasks view."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(8318).A+"",width:"3126",height:"466"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var s=n(8215);const a={tabItem:"tabItem_Ymn6"};var r=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>v});var s=n(6540),a=n(8215),r=n(3104),i=n(6347),o=n(205),c=n(7485),l=n(1682),d=n(9466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=u(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[l,h]=g({queryString:n,groupId:a}),[m,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Dv)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=l??m;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function w(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=o[n].value;a!==s&&(l(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...r,className:(0,a.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,x.jsx)(w,{...t,...e}),(0,x.jsx)(b,{...t,...e})]})}function v(e){const t=(0,j.A)();return(0,x.jsx)(y,{...e,children:h(e.children)},String(t))}},7782:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/add_members-0b97edb2ba4d3ec44f0c9679c9ae4204.png"},3784:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/add_team_members-3a7933d2e64acd222223947fa20c171a.png"},6155:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/batch_id-40e6d768a8a868117f40e604a2fbb775.png"},9223:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/classes-544b1ce273529748644ce285b1914704.png"},3269:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/configuration-d4ab8d746cf6c5c0de639739b8b04009.png"},4682:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/create_ai-50954d3881f5c0f0c98b9fad21af4a6f.png"},794:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/create_instruction-2e3ef11507bb01ab7900256075e29764.png"},1165:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/create_project-b3a12413846a812fb7195b084e86ca61.png"},9249:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/create_request-9ae0d659355f5286092c7fd6a16eef50.png"},7382:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/create_revision1-3b1ded697aeb792aa3b30c5703c142cd.png"},8621:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/create_revision2-a78d209659b54ee5b6c8b6877e9a5dfe.png"},3605:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/data_orchestration-78ce9a0fe0b15f2a9e3f1f5a059775e4.png"},5647:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/draw_object-203a98f09a73100b01e7e971ba9c7dc7.png"},9576:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/finish_request-e9cd99dae35700d2f6efcc945fafa05b.png"},8318:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/my_tasks-7a178721265547269d7ca7e1390bcf6f.png"},5954:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/project_id-27bbc76eb6893e028fd3ff22d9acb2cd.png"},9428:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/project_management-21b68f3ab4fa2a748c3e404b03184ad8.png"},9220:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ready_for_prod-7d14029b6193233040ca68bd272be96b.png"},1611:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ready_prod_popup-d263f3cd51e57f3e9789b2721bb96df3.png"},1847:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/request_producer-a50e37967b1d840e30b289213de757d9.png"},4879:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/save_props-3316459544706457f5837d5009b8a172.png"},9584:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/select_props-544b1ce273529748644ce285b1914704.png"},2543:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/set_properties-02690b8f869b07e8ee4aacd501233941.png"},8840:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/team_tab-eb9a176d8a951c5518154fef7070d6a9.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(6540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);