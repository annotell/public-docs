"use strict";(self.webpackChunkkognic_sdk_docs=self.webpackChunkkognic_sdk_docs||[]).push([[614],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return t?o.createElement(g,i(i({ref:n},c),{},{components:t})):o.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2013:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const s={title:"Uploading predictions"},i=void 0,a={unversionedId:"dataset-refinement/uploading-predictions",id:"dataset-refinement/uploading-predictions",title:"Uploading predictions",description:"Introduction",source:"@site/docs/dataset-refinement/uploading-predictions.md",sourceDirName:"dataset-refinement",slug:"/dataset-refinement/uploading-predictions",permalink:"/docs/dataset-refinement/uploading-predictions",draft:!1,editUrl:"https://github.com/annotell/public-docs/docs-src/docs/dataset-refinement/uploading-predictions.md",tags:[],version:"current",frontMatter:{title:"Uploading predictions"},sidebar:"docs",previous:{title:"The prediction format",permalink:"/docs/dataset-refinement/prediction-format"},next:{title:"OpenLABEL format",permalink:"/docs/openlabel/openlabel-format"}},p={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Get the UUID of the dataset",id:"1-get-the-uuid-of-the-dataset",level:3},{value:"2. Get the UUID of an existing predictions group",id:"2-get-the-uuid-of-an-existing-predictions-group",level:3},{value:"3. Upload predictions",id:"3-upload-predictions",level:3}],c={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this example, we'll walk you through how to upload predictions using our API into an already existing dataset."),(0,r.kt)("p",null,"Before you begin: See ",(0,r.kt)("a",{parentName:"p",href:"./introduction#prerequisites"},"Prerequisites")," and learn about\nthe ",(0,r.kt)("a",{parentName:"p",href:"./prediction-format"},"prediction format"),"."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("p",null,"Create a new python file and import the following libraries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\nfrom kognic.auth.requests.auth_session import RequestsAuthSession\n\nbase_url = "https://dataset.app.kognic.com/v1/"\nclient = RequestsAuthSession()\n')),(0,r.kt)("h3",{id:"1-get-the-uuid-of-the-dataset"},"1. Get the UUID of the dataset"),(0,r.kt)("p",null,"You can either access the tool and copy the UUID following ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset/")," in the URL, or utilize the datasets endpoint to\nget the uuid of the dataset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'client.session.get(base_url + "datasets")\n')),(0,r.kt)("h3",{id:"2-get-the-uuid-of-an-existing-predictions-group"},"2. Get the UUID of an existing predictions group"),(0,r.kt)("p",null,"In order to upload predictions, a prediction group needs to exist. Predictions can be organized into groups for any\npurpose imaginable. The UUID of an existing prediction group can be found in the URL after ",(0,r.kt)("inlineCode",{parentName:"p"},"predictions/")," or by using\nthe endpoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'client.session.get(base_url + f"/datasets/{datasetUuid}/predictions-groups")\n')),(0,r.kt)("p",null,"You can also create a new prediction group using the following code snippet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'path = base_url + f"/datasets/{datasetUuid}/predictions-groups"\nbody = {"name": "My predictions group", "description": "A description of my new predictions group"}\ntry:\n    response = client.session.post(path, json=body)\n    response.raise_for_status()\n    response_json = response.json()\n    print(f"Created predictions group with uuid {response_json[\'data\']}")\nexcept requests.exceptions.RequestException as e:\n    msg = e.response.text\n    print(f"Request error: {e}. {msg}")\n')),(0,r.kt)("h3",{id:"3-upload-predictions"},"3. Upload predictions"),(0,r.kt)("p",null,"For a small amount of predictions, synchronous calls might work"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\nfrom kognic.auth.requests.auth_session import RequestsAuthSession\n\nbase_url = "https://dataset.app.kognic.com/v1/"\nclient = RequestsAuthSession()\n\npredictions_group_uuid = "..."\nopenlabel_content = {"openlabel": ...}\ndata = {\n    "sceneUuid": "...",\n    "openlabelContent": openlabel_content,\n}\n\ntry:\n    response = client.session.post(\n        base_url + f"predictions-groups/{predictions_group_uuid}/predictions",\n        json=data\n    )\n    response.raise_for_status()\n    response_json = response.json()\n    print(f"Created prediction with uuid {response_json[\'data\']}")\nexcept requests.exceptions.RequestException as e:\n    msg = e.response.text\n    print(f"Request error: {e}. {msg}")\n')),(0,r.kt)("p",null,"For larger amounts of predictions, asynchronous calls are recommended. The following example uses the async client from\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"kognic-auth")," library to make 100 asynchronous calls:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import asyncio\n\nfrom kognic.auth.httpx.async_client import HttpxAuthAsyncClient\n\nbase_url = "https://dataset.app.kognic.com/v1/"\npredictions_group_uuid = "..."\nurl = base_url + f"predictions-groups/{predictions_group_uuid}/predictions"\nopenlabel_content = {"openlabel": ...}\n\nMAX_CONNECTIONS = 10\n\n\nasync def upload_prediction(payload, session, sem):\n    async with sem:\n        response = await session.post(url, json=payload)\n        response.raise_for_status()\n        return response.json().get("data")\n\n\nasync def main(n_runs: int):\n    client = HttpxAuthAsyncClient()\n    session = await client.session\n\n    sem = asyncio.Semaphore(MAX_CONNECTIONS)\n    tasks = []\n    for i in range(n_runs):\n        payload = {"sceneUuid": "...", "openlabelContent": openlabel_content}\n        task = upload_prediction(payload, session, sem)\n        tasks.append(task)\n\n    responses = await asyncio.gather(*tasks)\n    await session.aclose()\n\n    print(responses)\n\n\nif __name__ == \'__main__\':\n    asyncio.run(main(100))\n')),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"MAX_CONNECTIONS")," to something bigger than 10 might not work and is not recommended."))}u.isMDXComponent=!0}}]);