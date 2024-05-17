---
title: FAQ
description: FAQ
---


### Receiving `requests.exceptions.HTTPError: 403 Client Error: Forbidden for url: ...` when trying to create scenes

This implies that the authenticated user does not have access to the endpoint being called. Make sure you're [authenticating](../kognic-apis#authentication) correctly. If a Kognic user, make sure `client_organization_id` is specified on the `KognicIOClient`.


### How do I know that my scene was created successfully?

Whenever a `.create(...)` call for a scene has been successfully made it's (asynchronously) submitted for pre-processing in the Kognic platform. The scene is available only once the pre-processing has been successfully executed. However, pre-processing can also fail, for example if the pointcloud or image files are poorly formatted or corrupt. 

The easiest way to check the status of a scene is the [scene status](./working_with_scenes_and_inputs#scene-status) field present on scenes returned by the method `get_scenes_by_uuids(...)`. The scene is successfully created and available in the platform once the status is set to `created`. 

:::note
Since pre-processing is an asynchronous process it might take a while before the scene changes status from `processing` to either `created` or `failed`. 
:::

```python
# Example code of how to check if a scene has been successfully created
resp = client.cameras.create(...)

[scene] = client.scene.get_scenes_by_uuids([resp.scene_uuid])

# Successfully created and available once status is `created`
print(f'Scene {scene.uuid} status:', scene.status)
```

### How can I view my scene?

Successfully created scenes can be viewed in the Kognic platform via their *view-link*. The view-link can be accessed via the [`view_link`](./working_with_scenes_and_inputs#response) field present on scenes returned by the method `get_scenes_by_uuids(...)`.


```python
# Example code of how to access view-links for a scene
[scene] = client.scene.get_scenes_by_uuids([resp.scene_uuid])
(f"Scene {scene.external_id} view-link: {scene.view_link}")
```


### Why are the cuboids rotated by 90 degrees?

The coordinate system is defined by the uploaded data, but the rotation is defined by Kognic. This is somewhat
different (90-degree rotation) compared to the ISO 8855 standard. 
See [Rotation of Cuboids](../openlabel/openlabel-format.md#rotation-of-cuboids) for more about this and how you can 
convert to ISO 8855.
