---
title: Uploading predictions
---

## Introduction

In this example, we'll walk you through how to upload predictions using our API into an already existing dataset.

Before you begin: See [Prerequisites](./introduction#prerequisites) and learn about
the [prediction format](./prediction-format).

## Steps

Create a new python file and import the following libraries:

```python
import requests

from kognic.auth.requests.auth_session import RequestsAuthSession

base_url = "https://dataset.app.kognic.com/v1/"
client = RequestsAuthSession()
```


### 1. Get the UUID of the dataset

You can either access the tool and copy the UUID following `dataset/` in the URL, or utilize the datasets endpoint to
get the uuid of the dataset:

```python
client.session.get(base_url + "datasets")
```

### 2. Get the UUID of an existing predictions group or create a new one
#### 2.a Get the UUID of an existing predictions group
In order to upload predictions, a prediction group needs to exist. Predictions can be organized into groups for any
purpose imaginable. The UUID of an existing prediction group can be found in the URL after `predictions/` or by using
the endpoint

```python
client.session.get(base_url + f"/datasets/{datasetUuid}/predictions-groups")
```

#### 2.b Creating a predictions group (optional)
For datasets not containing segmentation tasks, a new prediction group is created using the following code snippet

```python
path = base_url + f"/datasets/{datasetUuid}/predictions-groups"
body = {"name": "My predictions group", "description": "A description of my new predictions group"}
try:
    response = client.session.post(path, json=body)
    response.raise_for_status()
    response_json = response.json()
    print(f"Created predictions group with uuid {response_json['data']}")
except requests.exceptions.RequestException as e:
    msg = e.response.text
    print(f"Request error: {e}. {msg}")
```

**Special case: Segmentation datasets**

Predictions groups connected to segmentation datasets require one extra parameter called `classMapping`. The mapping is used when 
calculating disagreement between predictions and annotations and will impact the sorting as well as how disagreements appear in the gallery. 
The `classMapping` parameter is a list of dictionaries, where each dictionary contains the keys `annotated` and `predicted`. The `annotated` 
key is the class name in the annotations, and the `predicted` key is the class name in the predictions.
`{"annotated": "oak", "predicted": "tree"}` if you have annotated different species of trees, but only predict wether it is a tree or not.

All class names in the predictions and the annotations must be present in the class mappings, even if they don't need to be mapped. In the 
annotations, non-segmented areas are labeled with the class name `_background`.

```python
example_body = {
    "name": "My predictions group",
    "description": "A description of my new predictions group",
    "classMapping": [
        {"annotated": "oak", "predicted": "tree"},
        {"annotated": "_background", "predicted": "not_tree"},
        {"annotated": "only_in_annotations"}
    ]
}
```

### 3. Upload predictions

For a small amount of predictions, synchronous calls might work

```python
import requests

from kognic.auth.requests.auth_session import RequestsAuthSession

base_url = "https://dataset.app.kognic.com/v1/"
client = RequestsAuthSession()

predictions_group_uuid = "..."
openlabel_content = {"openlabel": ...}
data = {
    "sceneUuid": "...",
    "openlabelContent": openlabel_content,
}

try:
    response = client.session.post(
        base_url + f"predictions-groups/{predictions_group_uuid}/predictions",
        json=data
    )
    response.raise_for_status()
    response_json = response.json()
    print(f"Created prediction with uuid {response_json['data']}")
except requests.exceptions.RequestException as e:
    msg = e.response.text
    print(f"Request error: {e}. {msg}")
```

For larger amounts of predictions, asynchronous calls are recommended. The following example uses the async client from
the `kognic-auth` library to make 100 asynchronous calls:

```python
import asyncio

from kognic.auth.httpx.async_client import HttpxAuthAsyncClient

base_url = "https://dataset.app.kognic.com/v1/"
predictions_group_uuid = "..."
url = base_url + f"predictions-groups/{predictions_group_uuid}/predictions"
openlabel_content = {"openlabel": ...}

MAX_CONNECTIONS = 10


async def upload_prediction(payload, session, sem):
    async with sem:
        response = await session.post(url, json=payload)
        response.raise_for_status()
        return response.json().get("data")


async def main(n_runs: int):
    client = HttpxAuthAsyncClient()
    session = await client.session

    sem = asyncio.Semaphore(MAX_CONNECTIONS)
    tasks = []
    for i in range(n_runs):
        payload = {"sceneUuid": "...", "openlabelContent": openlabel_content}
        task = upload_prediction(payload, session, sem)
        tasks.append(task)

    responses = await asyncio.gather(*tasks)
    await session.aclose()

    print(responses)


if __name__ == '__main__':
    asyncio.run(main(100))
```

Setting `MAX_CONNECTIONS` to something bigger than 10 might not work and is not recommended.