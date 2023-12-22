---
title: Projects
---

## Project

A Kognic [project](../key_concepts.md) must first be set in order to create inputs.
Projects are usually configured by the Kognic Professional Services team, during the Guideline Agreement Process (GAP) of a new client engagement.

### List Projects

All existing projects within in your organization can be listed by using the Python API KognicIOClient. Make sure the authentication are set (see [Authentication](../kognic_auth.md)).

```python
from kognic.io.client import KognicIOClient
client = KognicIOClient()
projects = client.project.get_projects()
```

Alternatively, projects can be listed with the `kognicutil` command line interface (CLI)

```shell
kognicutil projects
```

## Batch

Input [batches](../key_concepts.md) allow further grouping of inputs into smaller batches within a project. Specifying batch during the input creation is optional, and will otherwise be the latest open batch by default.

### Batch Status

| Status      | Description                                                                                                          |
|-------------|----------------------------------------------------------------------------------------------------------------------|
| pending     | Batch has been created but is still not fully configured by Kognic. Either during project setup or requested changes |
| open        | Batch is open for new inputs                                                                                         |
| ready       | Batch has been published and no longer open for new inputs.                                                          |
| in-progress | Kognic has started annotation of inputs within the batch.                                                            |
| completed   | Annotations has been completed.                                                                                      |

### Listing Batches

All existing batches withint a project can be listed by using the Python API KognicIOClient.

```python
from kognic.io.client import KognicIOClient
client = KognicIOClient()
project_batches = client.project.get_project_batches(project="<project_external_id>")
```

Alternatively, batches can be listed with the `kognicutil` CLI

```shell
kognicutil projects <project_external_id> --get-batches
```

### Creating Batches

To create a new batch in the `open` state within a project

```python
from kognic.io.client import KognicIOClient
client = KognicIOClient()
project_batch = client.project.create_batch(
  project="<project_external_id>",
  batch="<batch_external_id>",
)
```
The newly created batch will contain the same Annotation Types (see [Annotation Types](annotation_types)) as 
the latest batch by default.

This method has an optional flag `publish_previous_batches` which defaults to `False`. By setting this flag to 
`True`, as shown in the example below, all previous batches in the "open" state would be published and you
would no longer be able to upload new inputs to those batches.
You should therefore be certain that you no longer need to upload more inputs to the 
previous batches if you use this flag.
```python
from kognic.io.client import KognicIOClient
client = KognicIOClient()
project_batch = client.project.create_batch(
  project="<project_external_id>",
  batch="<batch_external_id>",
  publish_previous_batches=True,
)
```
:::caution Contact Kognic before use
Kognic usually helps with creating batches before a client becomes autonomous,
in order to avoid any confusion please contact Kognic before you start using this feature.
:::

### Publish Batch

```python
from kognic.io.client import KognicIOClient
client = KognicIOClient()
project_batch = client.project.publish_batch(
  project="<project_external_id>",
  batch="<batch_external_id>",
)
```

When the input batch is published, the status of the batch will be set to "ready". Published batches are not open for new inputs any longer. 
A project with *multiple* open batches will require you to specify which open batch to target 
when creating new inputs, whereas a project with a single open batch will allow you omit the `batch` parameter when 
creating inputs.
