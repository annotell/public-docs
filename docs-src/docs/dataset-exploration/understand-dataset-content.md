---
title: Understand what your dataset contains
---
This page will help you comprehend the contents of your dataset.

## Understand which scenes you have annotations for in your dataset

To be able to know which scenes you can provide predictions for you need to understand which scenes you've
annotations for in your dataset. This can be done by using an endpoint for listing annotations in your dataset. You're
currently only able to add scenes indirectly to your dataset by adding annotations to the dataset. Please contact us if
this is something you want help with or if you want to connect scenes to your dataset. The following code snippet by
utilizing an endpoint for will do this and save it to a csv file.

```python
from kognic.auth.requests.auth_session import RequestsAuthSession
import csv

base_url = "https://dataset.app.kognic.com"
client = RequestsAuthSession()
dataset_uuid = YOUR_DATASET_UUID
done = False
offset = 0
annotations = []
while not done:
    print(f"Fetched {offset} annotations")
    res = client.session.get(
        f"{base_url}/v1/datasets/{dataset_uuid}/annotations?offset={offset}"
    )
    res_annotations = res.json()['data']
    annotations += res_annotations
    offset += len(res_annotations)
    if len(res_annotations) == 0:
        done = True
print(f"Fetched {len(annotations)} annotations")

# save to csv called dataset_{dataset_uuid}_annotations.csv
with open(f'dataset_{dataset_uuid}_annotations.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(annotations[0].keys())
    for annotation in annotations:
        writer.writerow(annotation.values())
```