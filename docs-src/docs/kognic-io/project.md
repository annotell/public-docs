---
title: Projects
---

## Project

In order to create inputs via the API, a Kognic project needs to exist.
Projects are configured by the Kognic Professional Services team, during the Guideline Agreement Process (GAP) of a new client engagement.

### List Projects

```python
projects = client.project.get_projects()
```

Or via `kognicutil` CLI

```shell
kognicutil projects
```

Returns all projects.

## Batch

Input batches allow further grouping of inputs into smaller batches within a project. Specifying input batch during input creation is optional, and will otherwise default to the latest open batch.

Ongoing projects can benefit from using batches in two ways

- Group inputs collected at the same time
- Perform guideline or task definition changes without the need for retroactive changes.

### Batch Status

| Status      | Description                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| pending     | Batch has been created but is still not fully configured by Kognic. Either during project setup or requested changes |
| open        | Batch is open for new inputs                                                                                           |
| ready       | Batch has been published and no longer open for new inputs.                                                            |
| in-progress | Kognic has started annotation of inputs within the batch.                                                            |
| completed   | Annotations has been completed.                                                                                        |

### Listing Batches

```python
project_batches = client.project.get_project_batches("project_external_id")
```

Or via `kognicutil` CLI

```shell
kognicutil project <project-external-id> --batches
```

Returns all batches for the project

### Creating Batches
```python
project_batch = client.project.create_batch("project_external_id", "batch_external_id")
```
Creates a new batch in the `open` state. The new batch will contain the same Annotation Types
(see [Annotation Types](annotation_types)) as 
the latest previous batch, which means that the process of uploading inputs will be identical between batches.

This method has an optional flag `publish_previous_batches` which defaults to `False`. By setting this flag to 
`True`, as shown in the example below, all previous batches in the `open` state would be published and you
would no longer be able to upload inputs to those batches.
You should therefore be certain that you no longer need to upload more inputs to the 
previous batches if you use this flag.
```python
project_batch = client.project.create_batch("project_external_id",
                                            "batch_external_id",
                                            publish_previous_batches=True)
```
:::caution Contact Kognic before use
Kognic usually helps with creating batches before a client becomes autonomous,
in order to avoid any confusion please contact Kognic before you start using this feature.
:::
### Publish Batch

```python
project_batch = client.project.publish_batch("project_external_id", "batch_external_id")
```

Publishes the input batch, setting the state of the batch to `ready`. Published batches are not open for new inputs. 
A project with *multiple* open batches will require you to specify which open batch to target 
when creating inputs, whereas a project with a single open batch will allow you omit batch when 
creating inputs.
