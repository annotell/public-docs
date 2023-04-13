---
title: Working with Inputs
---

## Creating Inputs

:::note
For detailed information about different input modalities, check the Input Types section.
:::

:::tip Kognic Users
As a Kognic user, it is possible to specify `client_organization_id` to `KognicIOClient` constructor to create inputs on behalf of a client organization
:::

In order to create inputs, they need to be associated with a [project](project) and an [input batch](project#batch). Consider the following project setup:

```
organization # root for projects
└── projects
   ├── project-a
       ├── batch-1 - completed
       ├── batch-2 - open
           ├── input 0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3
           ├── input 37d9dda4-3a29-4fcb-8a71-6bf16d5a9c36
           └── ...
       └── batch-3 - pending
   └── project-b
       ├── batch-1
       └── ...
```

There are 2 ways to associate inputs with a project and batch:

- Adding inputs to the latest open batch for a project
- Adding inputs to specified batch for a project

The following examples all use an input of type `Cameras`, however the interface applies to all input types. Note that
we also provide a wrapper function `create_inputs` to help with this process, see [Creating Multiple Inputs With One Call](#creating-multiple-inputs-with-one-call).

### Adding inputs to the latest open batch for a project

```python
client.cameras.create(
    ...,
    project="project-a")
```

Will add inputs to `project-a` `batch-2` because it's the latest open batch.

### Adding inputs to specified batch in a project

```python
client.cameras.create(
    ...,
    project="project-a",
    batch="batch-3")
```

Will add inputs to `project-a` `batch-3`.


## Input Status

Once an input has been created, it might be preprocessed before being made available for annotation. Also, postprocessing such as conversion to the client-specific format might take place after annotation has been performed. During this process, the status property of an input can be used to keep track of progress.

| Status                          | Description                                                                                                                                  |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| pending                         | Input has been validated but the server is waiting for the associated data to be uploaded                                                    |
| processing                      | Associated data has been uploaded and is currently being processed by the Kognic Platform, potentially performing conversion of file formats |
| created                         | Input is created and available for annotation                                                                                                |
| failed                          | Conversion of input failed                                                                                                                   |
| invalidated:broken-input        | Input was invalidated since it did not load                                                                                                  |
| invalidated:duplicate           | Input was invalidated due to being uploaded several times                                                                                    |
| invalidated:incorrectly-created | Input was invalidated because it was incorrectly created                                                                                     |

## List Inputs



Inputs can be retrieved from the API in two ways:
1. Filtering on a project using the `get_inputs` method. Additional filter parameters are also available 
   (see table below) for querying inputs.
2. Providing the input uuids of the inputs to be retrieved using the `get_inputs_by_uuids` method

```python
# List all inputs for a project
client.input.get_inputs(project="project-identifier")

# List all inputs for a project and a batch
client.input.get_inputs(project="project-identifier", batch="batch-identifier") 

# List all inputs for specific input uuids
input_uuids = ['cca60a67-cb68-4645-8bae-00c6e6415555', 'cc8776d0-f537-4094-8b11-8c2111741e2f', ...]
client.input.get_inputs_by_uuids(input_uuids=input_uuids)
```

Additional filter parameters for querying inputs using `get_inputs` are listed below.

| Parameter           | Description                                               |
|---------------------|-----------------------------------------------------------|
| project             | Project identifier to filter by                           |
| batch               | Which batch in the project to return inputs for           |
| external_ids        | Return inputs matching the `external_ids` supplied        |
| include_invalidated | Filters inputs based on their status, defaults to `False` |

### Response
The response is a list of `Input` objects containing the following properties

| Property         | Description                                                                                          |
|------------------|------------------------------------------------------------------------------------------------------|
| uuid             | ID used to identify the input within the Kognic Platform                                             |
| external_id      | External ID supplied during input creation                                                           |
| batch            | Which batch does the input belong to                                                                 |
| view_link        | A url to view the input in the Kognic Platform                                                       |
| input_type       | Type of input (see [Input Types](../key_concepts.md))                                                |
| status           | Input status (see [Input Statuses](#input-status))                                                   |
| error_message    | If there is an error during input creation the error message will be included, otherwise it's `None` |
| annotation_types | List of annotation types for the input (new in version 1.2.0)                                        |

## Invalidate Inputs

Invalidation of an input means that it will be removed for all annotation types. See [Annotation Types](annotation_types.md)
on how to remove a specific annotation types for an input.

```python
invalid_ids = ["0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3", "37d9dda4-3a29-4fcb-8a71-6bf16d5a9c36"]
reason = IAM.InvalidatedReasonInput.BAD_CONTENT
client.input.invalidate_inputs(invalid_ids, reason)
```

If issues are detected upstream related to inputs created, it is possible to invalidate inputs.
Invalidated inputs will not produce annotations and any completed annotations of the input will be invalidated.

| Reason              | Description                                                                |
|---------------------|----------------------------------------------------------------------------|
| bad-content         | Input does not load, or has erroneous metadata such as invalid calibration |
| duplicate           | If same input has been created several times                               |
| incorrectly-created | If the input was unintentionally created.                                  |

## List Invalidated Inputs

If errors are detected by Kognic, inputs will be invalidated and a reason will be supplied.

```python
project = "project-identifier"
client.input.get_inputs(project=project, include_invalidated=True)
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
from kognic.io.model.input import LidarsAndCamerasSequence
from kognic.openlabel.models import OpenLabelAnnotation


scenes_with_pre_annotations: List[SceneWithPreAnnotation] = [
   SceneWithPreAnnotation(
      scene=LidarsAndCamerasSequence(...), 
      preannotation=OpenLabelAnnotation(...) # Optional
   ),
   ...
]

for input_result in create_inputs(
        client=client, 
        scenes_with_pre_annotations=scenes_with_pre_annotations, 
        project="project-identifier", 
        batch="batch-identifier"
):
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
