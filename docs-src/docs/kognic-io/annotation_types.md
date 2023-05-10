---
id: annotation_types
title: Annotation Types
---

Annotation Types are something that **can** be configured for a project either during or after 
the Guideline Agreement Process (GAP). During the GAP a set of taxonomies are defined
which will be used in order to annotate all the inputs that are uploaded to the platform.

Annotation Types are identifiers that each map to one of these taxonomies and allows you
to programmatically define, for every input that you create, what taxonomies that you
would like that input to be annotated with. You do not **need** to use annotation types
in a project but by skipping annotation types your inputs would always be created for all
taxonomies available in the specified batch.

:::tip Add additional Annotation Types
It is possible to add additional Annotation Types after a project is created, and 
make them available to future batches that you create. If you would like Annotation
Types to be added to your project please get in touch with Kognic's Professional
Services team.
:::

## Examples
For the following examples we will be creating `cameras_sequence` inputs, however the
procedure would be identical for any other input type. We will also assume that the
project `example_project_id` is configured with the Annotation Types:
`static_objects`, and `dynamic_objects`, and that they are also available in the batch
`example_batch_id`.

### Get Annotation Types for Project
```python
from kognic.io.client import KognicIOClient

client = KognicIOClient()
project_annotation_types = client.project.get_annotation_types(project="example_project_id")
```
This will return a list of all Annotation Types available in the project.

### Get Annotation Types for a specified Project Batch
```python
from kognic.io.client import KognicIOClient

client = KognicIOClient()
batch_annotation_types = client.project.get_annotation_types(project="example_project_id",
                                                             batch="example_batch_id")
```
This will return a list of all Annotation Types available in the specified batch. 
Note that this list does not need to contain all Annotation Types in the project.

### Create inputs for specific Annotation Types
```python
from kognic.io.client import KognicIOClient
from kognic.io.model.input.cameras_sequence import CamerasSequence

client = KognicIOClient()
camera_input = CamerasSequence(external_id=..., frames=...)
client.cameras_sequence.create(camera_input,
                               project="example_project_id",
                               batch="example_batch_id",
                               annotation_types=["static_objects", "dynamic_objects"])
```
The above example will create a new input which will be annotated for the annotation 
types specified. If one or more of the specified annotation types would not be available
in the specified batch the validation in the API would fail. 

:::info Specifying batch is optional
In these examples we have specified which batch the inputs should be created for, but this is optional. If 
no batch is specified the inputs will be created in the latest batch with status `open`. 
:::

### Create inputs for all Annotation Types in batch
```python
from kognic.io.client import KognicIOClient
from kognic.io.model.input.cameras_sequence import CamerasSequence

client = KognicIOClient()
camera_input = CamerasSequence(external_id=..., frames=...)
client.cameras_sequence.create(camera_input,
                               project="example_project_id",
                               batch="example_batch_id")
```
The above example will create a new input which will be annotated for all Annotation
Types available in the batch `example_batch_id`. However, this way it is not explicit
what Annotation Types that the inputs will be annotated with, and you would not get an
error if e.g. `static_objects` was missing from the specified batch. 

:::tip Always specify Annotation Types
In order to get the best possible validation it is recommended that you always
specify annotation types when you create inputs.
:::

### Add/remove annotation types for an input

Adding an annotation type to an input means that an annotation will be produced for that input with the specified
annotation type. In the same way, removing annotation types from an input means that annotations will **not** be
produced for that input with the specified annotation types. 

In the case when multiple annotation types are annotated in the same task, it is enough to specify
one annotation type when adding but **all** annotation types must be specified when removing. 

Note that it is currently not possible to add an annotation type that has already been removed from an input.

```python
from kognic.io.client import KognicIOClient

client = KognicIOClient()
input_uuid = 'cca60a67-cb68-4645-8bae-00c6e6415555'

# Add an annotation type to an input
client.input.add_annotation_type(input_uuid=input_uuid, annotation_type="annotation-type")

# Remove annotation types from an input
annotation_types = ["annotation-type-1", "annotation-type-2", ...]
client.input.remove_annotation_types(input_uuid=input_uuid, annotation_type=annotation_types)

```
