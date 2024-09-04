"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[2840],{4401:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=t(4848),o=t(8453);const i={title:"Uploading predictions"},a=void 0,r={id:"dataset-exploration/uploading-predictions",title:"Uploading predictions",description:"Introduction",source:"@site/docs/dataset-exploration/uploading-predictions.md",sourceDirName:"dataset-exploration",slug:"/dataset-exploration/uploading-predictions",permalink:"/docs/dataset-exploration/uploading-predictions",draft:!1,unlisted:!1,editUrl:"https://github.com/annotell/public-docs/edit/master/docs-src/docs/dataset-exploration/uploading-predictions.md",tags:[],version:"current",frontMatter:{title:"Uploading predictions"},sidebar:"docs",previous:{title:"The prediction format",permalink:"/docs/dataset-exploration/prediction-format"},next:{title:"Understand what your dataset contains",permalink:"/docs/dataset-exploration/understand-dataset-content"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Get the UUID of the dataset",id:"1-get-the-uuid-of-the-dataset",level:3},{value:"2. Get the UUID of an existing predictions group or create a new one",id:"2-get-the-uuid-of-an-existing-predictions-group-or-create-a-new-one",level:3},{value:"2.a Get the UUID of an existing predictions group",id:"2a-get-the-uuid-of-an-existing-predictions-group",level:4},{value:"2.b Creating a predictions group (optional)",id:"2b-creating-a-predictions-group-optional",level:4},{value:"3. Upload predictions",id:"3-upload-predictions",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"In this example, we'll walk you through how to upload predictions using our API into an already existing dataset."}),"\n",(0,s.jsxs)(n.p,{children:["Before you begin: See ",(0,s.jsx)(n.a,{href:"./introduction#prerequisites",children:"Prerequisites"})," and learn about\nthe ",(0,s.jsx)(n.a,{href:"./prediction-format",children:"prediction format"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(n.p,{children:"Create a new python file and import the following libraries:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests\n\nfrom kognic.auth.requests.auth_session import RequestsAuthSession\n\nbase_url = "https://dataset.app.kognic.com/v1/"\nclient = RequestsAuthSession()\n'})}),"\n",(0,s.jsx)(n.h3,{id:"1-get-the-uuid-of-the-dataset",children:"1. Get the UUID of the dataset"}),"\n",(0,s.jsxs)(n.p,{children:["You can either access the tool and copy the UUID following ",(0,s.jsx)(n.code,{children:"dataset/"})," in the URL, or utilize the datasets endpoint to\nget the uuid of the dataset:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'client.session.get("https://dataset.app.kognic.com/v2/datasets")\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2-get-the-uuid-of-an-existing-predictions-group-or-create-a-new-one",children:"2. Get the UUID of an existing predictions group or create a new one"}),"\n",(0,s.jsx)(n.h4,{id:"2a-get-the-uuid-of-an-existing-predictions-group",children:"2.a Get the UUID of an existing predictions group"}),"\n",(0,s.jsxs)(n.p,{children:["In order to upload predictions, a prediction group needs to exist. Predictions can be organized into groups for any\npurpose imaginable. The UUID of an existing prediction group can be found in the URL after ",(0,s.jsx)(n.code,{children:"predictions/"})," or by using\nthe endpoint"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'client.session.get(base_url + f"/datasets/{datasetUuid}/predictions-groups")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"2b-creating-a-predictions-group-optional",children:"2.b Creating a predictions group (optional)"}),"\n",(0,s.jsx)(n.p,{children:"For datasets not containing segmentation tasks, a new prediction group is created using the following code snippet"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'path = base_url + f"/datasets/{datasetUuid}/predictions-groups"\nbody = {"name": "My predictions group", "description": "A description of my new predictions group"}\ntry:\n    response = client.session.post(path, json=body)\n    response.raise_for_status()\n    response_json = response.json()\n    print(f"Created predictions group with uuid {response_json[\'data\']}")\nexcept requests.exceptions.RequestException as e:\n    msg = e.response.text\n    print(f"Request error: {e}. {msg}")\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Special case: Segmentation datasets"})}),"\n",(0,s.jsxs)(n.p,{children:["Predictions groups connected to segmentation datasets require one extra parameter called ",(0,s.jsx)(n.code,{children:"classMapping"}),". The mapping is used when\ncalculating disagreement between predictions and annotations and will impact the sorting as well as how disagreements appear in the gallery.\nThe ",(0,s.jsx)(n.code,{children:"classMapping"})," parameter is a list of dictionaries, where each dictionary contains the keys ",(0,s.jsx)(n.code,{children:"annotated"})," and ",(0,s.jsx)(n.code,{children:"predicted"}),". The ",(0,s.jsx)(n.code,{children:"annotated"}),"\nkey is the class name in the annotations, and the ",(0,s.jsx)(n.code,{children:"predicted"})," key is the class name in the predictions.\n",(0,s.jsx)(n.code,{children:'{"annotated": "oak", "predicted": "tree"}'})," if you have annotated different species of trees, but only predict wether it is a tree or not."]}),"\n",(0,s.jsxs)(n.p,{children:["All class names in the predictions and the annotations must be present in the class mappings, even if they don't need to be mapped. In the\nannotations, non-segmented areas are labeled with the class name ",(0,s.jsx)(n.code,{children:"_background"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'example_body = {\n    "name": "My predictions group",\n    "description": "A description of my new predictions group",\n    "classMapping": [\n        {"annotated": "oak", "predicted": "tree"},\n        {"annotated": "_background", "predicted": "not_tree"},\n        {"annotated": "only_in_annotations"}\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"3-upload-predictions",children:"3. Upload predictions"}),"\n",(0,s.jsx)(n.p,{children:"For a small amount of predictions, synchronous calls might work"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests\n\nfrom kognic.auth.requests.auth_session import RequestsAuthSession\n\nbase_url = "https://dataset.app.kognic.com/v1/"\nclient = RequestsAuthSession()\n\npredictions_group_uuid = "..."\nopenlabel_content = {"openlabel": ...}\ndata = {\n    "sceneUuid": "...",\n    "openlabelContent": openlabel_content,\n}\n\ntry:\n    response = client.session.post(\n        base_url + f"predictions-groups/{predictions_group_uuid}/predictions",\n        json=data\n    )\n    response.raise_for_status()\n    response_json = response.json()\n    print(f"Created prediction with uuid {response_json[\'data\']}")\nexcept requests.exceptions.RequestException as e:\n    msg = e.response.text\n    print(f"Request error: {e}. {msg}")\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For larger amounts of predictions, asynchronous calls are recommended. The following example uses the async client from\nthe ",(0,s.jsx)(n.code,{children:"kognic-auth"})," library to make 100 asynchronous calls:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import asyncio\n\nfrom kognic.auth.httpx.async_client import HttpxAuthAsyncClient\n\nbase_url = "https://dataset.app.kognic.com/v1/"\npredictions_group_uuid = "..."\nurl = base_url + f"predictions-groups/{predictions_group_uuid}/predictions"\nopenlabel_content = {"openlabel": ...}\n\nMAX_CONNECTIONS = 10\n\n\nasync def upload_prediction(payload, session, sem):\n    async with sem:\n        response = await session.post(url, json=payload)\n        response.raise_for_status()\n        return response.json().get("data")\n\n\nasync def main(n_runs: int):\n    client = HttpxAuthAsyncClient()\n    session = await client.session\n\n    sem = asyncio.Semaphore(MAX_CONNECTIONS)\n    tasks = []\n    for i in range(n_runs):\n        payload = {"sceneUuid": "...", "openlabelContent": openlabel_content}\n        task = upload_prediction(payload, session, sem)\n        tasks.append(task)\n\n    responses = await asyncio.gather(*tasks)\n    await session.aclose()\n\n    print(responses)\n\n\nif __name__ == \'__main__\':\n    asyncio.run(main(100))\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Setting ",(0,s.jsx)(n.code,{children:"MAX_CONNECTIONS"})," to something bigger than 10 might not work and is not recommended."]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);