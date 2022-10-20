---
title: FAQ
description: FAQ
---


### Receiving `requests.exceptions.HTTPError: 403 Client Error: Forbidden for url: ...` when trying to create inputs

This implies that the authenticated user does not have access to the endpoint being called. Make sure you're [authenticating](../kognic-auth) correctly. If a Kognic user, make sure `client_organization_id` is specified on the `KognicIOClient`.


### How do I know that my input was created successfully?

Whenever a `.create(...)` call for an input has been successfully made it's (asynchronously) submitted for pre-processing in the Kognic platform. The input is available only once the pre-processing has been successfully executed. However, pre-processing can also fail, for example if the pointcloud or image files are poorly formatted or corrupt. 

The easiest way to check the status of an input is the [input status](./working_with_inputs#input-status) field present on inputs returned by the methods `get_inputs(...)` and `get_inputs_by_uuids(...)`. The input is successfully created and available in the platform once the status is set to `created`. 

:::note
Since pre-processing is an asynchronous process it might take a while before the input changes status from `processing` to either `created` or `failed`. 
:::

```python
# Example code of how to check if an input has been successfully created
resp = client.cameras.create(...)
uuid = resp.uuid

[i] = client.input.get_inputs_by_uuids(input_uuids=[uuid])

# Successfully created and available once status is `created`
print(f'Input {uuid} status:', i.status)
```

### How can I view my input?

Successfully created inputs can be viewed in the Kognic platform via their *view-link*. The view-link can be accessed via the [`view_link`](./working_with_inputs#response) field present on inputs returned by the methods `get_inputs(...)` and `get_inputs_by_uuids(...)`.


```python
# Example code of how to access view-links for all inputs in a project
inputs = client.input.get_inputs(project="project-identifier")

for i in inputs:
    print(f"Input {i.external_id} view-link: {i.view_link}")
```