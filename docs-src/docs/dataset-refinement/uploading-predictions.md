---
title: Uploading predictions
---

## Introduction

In this example, we'll walk you through how to upload predictions using our API into an already existing dataset.

Before you begin: See [Prerequisites](./introduction#prerequisites) and learn about
the [prediction format](./prediction-format).

## Steps

### 1. Get the UUID of the dataset

You can either access the tool and copy the UUID following `dataset/` in the URL, or utilize the datasets endpoint to
get the uuid of the dataset:

```python
client.session.get(base_url + "datasets")
```

### 2. Get the UUID of the predictions group

In order to upload predictions, a prediction group needs to exist. Predictions can be organized into groups for any
purpose imaginable. The UUID of an existing prediction group can be found in the URL after `predictions/` or by using
the endpoint

```python
client.session.get(base_url + f"/datasets/{datasetUuid}/predictions-groups")
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
    msg = e.response.json()["message"]
    print(f"Request error: {e}. with message: {msg}")
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