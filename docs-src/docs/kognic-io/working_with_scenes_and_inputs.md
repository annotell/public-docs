---
title: Working with Scenes & Inputs
---

:::note
For detailed information about different scene modalities, check the Scene Types section.
:::

:::tip Kognic Users
As a Kognic user, it is possible to specify `client_organization_id` to `KognicIOClient` constructor to create scenes on behalf of a client organization
:::

## Creating Scenes

Each scene resource has a `create` method that can be used to create a scene of the corresponding type. It takes the 
corresponding scene model as input, so for example to create a `Cameras` scene you would do the following:

```python
from kognic.io.model.scene.cameras import Cameras

scene = Cameras(...)
created_scene = client.cameras.create(cameras_scene)
scene_uuid = created_scene.uuid
```

As you can see, the `create` method returns the associated `scene_uuid`, which can later be used to work with the scene.
At this point all files have been uploaded to the Kognic Platform and the scene starts to be pre-processed. When 
pre-processing is finished, we say that the scene has been created. Refer to the [Scene Status](#scene-status) section
for more information about the different scene statuses. 

Note that it is often useful to use the `dryrun` parameter when experimenting. This will validate the scene format
but not create it.

### Scene Status

Once a scene has been uploaded, it might be preprocessed before being made available in the platform. 
During this process, the status property of a scene can be used to keep track of progress.

| Status                          | Description                                                                                                                                  |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| pending                         | Scene has been validated but the server is waiting for the associated resources to be uploaded                                               |
| processing                      | Associated data has been uploaded and is currently being processed by the Kognic Platform, potentially performing conversion of file formats |
| created                         | Scene is created and available in the platform                                                                                               |
| failed                          | Conversion of scene failed. More information can be found in the associated error message                                                    |
| invalidated:broken-input        | Scene was invalidated since it did not load                                                                                                  |
| invalidated:duplicate           | Scene was invalidated due to being uploaded several times                                                                                    |
| invalidated:incorrectly-created | Scene was invalidated because it was incorrectly created                                                                                     |



## Creating Inputs from Scene

Once a scene has been created, it can be used to create inputs which is done by associating it with a [project](project.mdx) 
and an [input batch](project.mdx#batch). Consider the following project setup:

```
organization # root for projects and scenes
└── projects
   ├── project-a
       ├── batch-1 - completed
       ├── batch-2 - open
           ├── request-1
              ├── input 9c08f7a3-3216-4bd6-a41a-1dda6f66f53e – using scene 0edb
              ├── input ddf548e3-9806-433c-afb5-fb951a721462 - using scene 37d9
              └── ...
           └── request-2   
       └── batch-3 - pending
   └── project-b
       ├── batch-1
       └── ...
└── scenes
   ├── scene 0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3
   ├── scene 37d9dda4-3a29-4fcb-8a71-6bf16d5a9c36
   └── ...
```

The `create_from_scene` method is used to create inputs from a scene. The method takes the scene uuid as input along 
with annotation information such as project, batch and annotation types. For example, to create inputs in `project-a` 
and `batch-2`, you would do the following:

```python
client.cameras.create_from_scene(
   scene_uuid="0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3", 
   project="project-a", # Important: this is the external id and not the title
   batch="batch-2" # Important: this is the external id and not the title
)
```

The above code will create inputs for the scene in all requests in batch `batch-2` for project `project-a`. If the `batch`
parameter is omitted, the latest open batch for the project will be used. You can later reuse the same scene to create 
inputs for other projects and batches.


## Creating Inputs Directly

It is often useful to create inputs directly instead of the 2-step process described above. To do this, you can simply 
pass the annotation information directly into the `create` method of the corresponding scene type. For example, to create
an input in `project-a` and `batch-2`, you would do the following:

```python
client.cameras_sequence.create(
   ..., 
   project="project-a", # Important: this is the external id and not the title
   batch="batch-2" # Important: this is the external id and not the title
)
```

This would trigger the scene creation process, and once the scene is created, inputs are created in all requests in
the given batch. If the `batch` parameter is omitted, the latest open batch for the project will be used. We also provide
a wrapper function `create_inputs` to help with this process, see [Creating Multiple Inputs With One Call](#creating-multiple-inputs-with-one-call).

## List Scenes

:::note
This feature is new in version 1.6.0
:::

It can be useful to list scenes that have been uploaded to the Kognic Platform. One example is to check the status during 
scene creation. Scenes can be retrieved in the following way:

```python
scene_uuids = ["cca60a67-cb68-4645-8bae-00c6e6415555", "cc8776d0-f537-4094-8b11-8c2111741e2f"]
client.scene.get_scenes_by_uuids(scene_uuids=scene_uuids)
```

### Response
The response is a list of `Scene` objects containing the following properties

| Property       | Description                                                                                        |
|----------------|----------------------------------------------------------------------------------------------------|
| uuid           | UUID used to identify the scene within the Kognic Platform                                         |
| external_id    | External ID supplied during scene creation                                                         |
| scene_type     | Type of scene (see [Scene Types](../key_concepts.md#scene-types))                                  |
| status         | Scene status (see [Scene Status](#scene-status))                                                   |
| created        | When the scene was created                                                                         |
| calibration_id | Calibration used for the scene (if any)                                                            |
| view_link      | A url to view the scene in the Kognic Platform                                                     |
| error_message  | If there is an error during scene creation the error message will be included, otherwise it's `None` |

## List Inputs

:::note
This feature is new in version 1.7.0
:::

Inputs can be queried from the platform using the `query_inputs` method, which can be used in the following way

```python reference
https://github.com/annotell/kognic-io-examples-python/blob/master/examples/query_inputs.py#L7-L10
```

Additional filter parameters for querying inputs are listed below.

| Parameter    | Description                                                     |
|--------------|-----------------------------------------------------------------|
| project      | Project identifier to filter by                                 |
| batch        | Which batch in the project to return inputs for                 |
| scene_uuids  | Return inputs using scenes matching the supplied uuids          |
| external_ids | Return inputs using scenes matching the supplied `external_ids` |

### Response
The response is a list of `Input` objects containing the following properties

| Property         | Description                                                                                          |
|------------------|------------------------------------------------------------------------------------------------------|
| uuid             | ID used to identify the input within the Kognic Platform                                             |
| scene_uuid       | ID used to identify the scene that the input is using                                                   |
| request_uid      | ID used to identify the request that the input belongs to                                            |
| view_link        | A url to view the input in the Kognic Platform                                                       |



## Invalidate Scenes

:::note
This feature is new in version 1.6.0
:::


If issues are detected upstream related to scenes created, it is possible to invalidate them. This could be useful during
development or if issues are detected with the data. Invalidating a scene means that it will be removed from requests, 
meaning that **all** inputs using the scene will be deleted. In turn invalidated scenes will not produce annotations 
and any completed annotations of the scene will be removed. There is no way to undo this operation so use with caution.

```python
from kognic.io.model.scene.invalidated_reason import SceneInvalidatedReason

scene_uuids = ["0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3", "37d9dda4-3a29-4fcb-8a71-6bf16d5a9c36"]
reason = SceneInvalidatedReason.BAD_CONTENT
client.scene.invalidate_scenes(scene_uuids, reason)
```

The following reasons are available when invalidating scenes:

| Reason              | Description                                                                |
|---------------------|----------------------------------------------------------------------------|
| bad-content         | Scene does not load, or has erroneous metadata such as invalid calibration |
| duplicate           | If the same scene has been created several times                           |
| incorrectly-created | If the scene was unintentionally created.                                  |


## Deleting Inputs

:::note
This feature is new in version 1.6.0
:::


If issues are detected upstream related to inputs created, it is possible to delete them. This could be useful when
the issues are related to the input itself and not the scene. One example would be if there are two inputs for a lidars
and cameras scene, one where we want to annotate in 2D/3D and one where we only want to annotate in 2D. If the issue
is an erroneous calibration the 2D input can still be used while the 2D/3D input should be deleted. 

Deleting an input means that no annotations will be produced for it and any completed annotations of the input will be
removed. There is no way to undo this operation so use with caution.

```python
input_uuid = "9c08f7a3-3216-4bd6-a41a-1dda6f66f53e"
client.input.delete_input(input_uuid)
```


## Creating Multiple Inputs With One Call
:::note
This feature is new in version 1.1.9
:::

Since the input creation process is asynchronous, it is sometimes useful to wait for the inputs to be created before continuing.
In order to do this, we provide a wrapper function `create_inputs` which can create multiple scenes and inputs, 
wait for them to be created (or failed) and yield the results. The function will block until it has a result to yield 
or all of the inputs have completed in one way or another. The function takes a list of `SceneWithPreannotation` 
(a new wrapper object containing a scene and optionally a pre-annotation) along with the normal input creation parameters. 


```python
from kognic.io.tools.input_creation import create_inputs, SceneWithPreAnnotation, InputCreationStatus
from kognic.io.model.scene import LidarsAndCamerasSequence
from kognic.openlabel.models import OpenLabelAnnotation


scenes_with_pre_annotations: List[SceneWithPreAnnotation] = [
   SceneWithPreAnnotation(
      scene=LidarsAndCamerasSequence(...), 
      preannotation=OpenLabelAnnotation(...) # Optional
   ),
   ...
]

for input_result in create_inputs(client, scenes_with_pre_annotations, "project-identifier", batch="batch-identifier"):
    # Do something with the result
    if input_result.status == InputCreationStatus.CREATED:
        print(f"Input {input_result.external_id} was created, got uuid {input_result.input_uuid}")
    elif input_result.status == InputCreationStatus.FAILED:
        print(f"Input {input_result.external_id} failed to be created at stage {input_result.error.stage} with error {input_result.error.message}")
    else:
        print(f"Input {input_result.external_id} is in status {input_result.status}")
```

Note that the functions also accepts the parameters `wait_timeout` and `sleep_time` which can be used to control the 
wait-behavior. The `wait_timeout` parameter specifies the maximum time to wait for the inputs to be created/failed, while
`sleep_time` specifies the time to sleep between each check. Units are in seconds. The time it takes for inputs to be created 
depends on their size and the number of inputs to be created so the `wait_timeout` should be set accordingly. 
The default value is 30 minutes, starting from the time when all scene jobs have been committed.


## Waiting for Scene Creation

It can sometimes be useful to wait for a scene to be created before continuing. This can be done by using below example in utils.py

```python reference
https://github.com/annotell/kognic-io-examples-python/blob/master/examples/utils.py
```
