---
title: Pre-annotations
---

:::caution
This feature is in an alpha stage and might be subject to changes
:::

Pre-annotations have many uses in ground-truth production. The pre-annotations feature allows information about the objects already known to be present in an input to be specified. Please reach out to our Advisory Services team to see how they can best be used for your use-case.

The Kognic platform supports uploading pre-annotations in the OpenLabel format using the [kognic-openlabel package](https://pypi.org/project/kognic-openlabel)

## Creating pre-annotations using the kognic-io client

There are 3 steps that are needed in order to create pre-annotations in the Kognic platform.
1. Create a scene by uploading all the needed data
2. Upload an OpenLabel annotation as a pre-annotation
3. Create an input from the scene

### 1. Creating a scene

:::note
The scene is a subset of the input, specifically refering to the data, such as images or pointclouds.
An input is what is created when this data is ready to be annotated.
:::

The interface for creating just a scene, without an input, is the same as we are familiar with.
The exception is that by not providing a project or a batch in the function call, the scene will be "dangling" until deemed ready for annotation

```python reference
https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/lidars_and_cameras_seq_with_pre_annotations.py#L82-L83
```

### 2. Uploading an OpenLabel annotation

The pre-annotation can be uploaded to the Kognic platform once the scene has been created successfully.

Load your OpenLabel annotation according to the documentation in `kognic-openlabel` and upload it to the Kognic platform as such:

```python
client.pre_annotation.create(
    scene_uuid=scene_response.input_uuid, # from step 1
    pre_annotation=OpenLabelAnnotation(...), 
    dryrun=dryrun
)
```


### 3. Create the input

When the scene and pre-annotation have been successfully created, the input can be created.
This will add it to the latest open batch in a project, or the specific batch that's specified,
and be ready for annotation with the pre-annotation present.

```python
client.lidars_and_cameras_sequence.create_from_scene(
    scene_uuid=scene_response.input_uuid, # from step 1
    annotation_types=annotation_types,
    project=project,
    dryrun=dryrun
)
```


## Supported pre-annotation features

### Geometries
- Cuboid (`cuboid`)
- 2D bounding box (`bbox`)

Note that all geometries should be specified under frames rather than in the root of the pre-annotation.

### Attributes
- Text
- Num
- Boolean

At the moment only attributes for the objects are supported, i.e. geometry specific ones are not (apart from the `stream`
property). Attributes can be static (specified in the `objects` key) or dynamic (specified in the `object_data` for the
object in the frame) and must be allowed by the [task definition](../key_concepts.md#task-definition), if one exists
when creating an input from a scene.

### Contexts

Currently not supported. Contact Kognic if you need support for this or use regular attributes instead.

### Frames

Every pre-annotation must contain frames with unique timestamps that are among the ones specified in the scene. The 
reason for this is that the timestamps are used to map the frame in the pre-annotation to the correct frame in the scene.
In the static case, one frame should be used with timestamp 0.

### Relations

Currently not supported. Contact Kognic if you need support for this or use regular attributes instead.

### Streams

Every geometry must have the `stream` property specified. This property determines which stream (or sensor) that the 
geometry appears in. It is important that the stream is among the ones specified in the scene and of the same type, for
example `camera` or `lidar`.


## Example pre-annotation

```json
{
  "openlabel": {
    "frame_intervals": [],
    "frames": {
      "0": {
        "frame_properties": {
          "timestamp": 0,
          "external_id": "0"
        },
        "objects": {
          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {
            "object_data": {
              "cuboid": [
                {
                  "attributes": {
                    "text": [
                      {
                        "name": "stream",
                        "val": "LIDAR1"
                      }
                    ]
                  },
                  "name": "cuboid-89ac8a2b",
                  "val": [
                    2.079312801361084,
                    -18.919870376586914,
                    0.3359137773513794,
                    -0.002808041640852679,
                    0.022641949116037438,
                    0.06772797660868829,
                    0.9974429197838155,
                    1.767102435869269,
                    4.099334155319101,
                    1.3691029802958168
                  ]
                }
              ]
            }
          }
        }
      }
    },
    "metadata": {
      "schema_version": "1.0.0"
    },
    "objects": {
      "1232b4f4-e3ca-446a-91cb-d8d403703df7": {
        "name": "1232b4f4-e3ca-446a-91cb-d8d403703df7",
        "object_data": {
          "text": [
            {
              "name": "color",
              "val": "red"
            }
          ]
        },
        "type": "PassengerCar"
      }
    },
    "relations": {},
    "streams": {
      "LIDAR1": {
        "description": "",
        "type": "lidar"
      }
    },
    "tags": {}
  }
}
```
