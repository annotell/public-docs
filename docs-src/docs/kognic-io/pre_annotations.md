---
title: Pre-annotations
---

:::caution
This feature is in an early release stage and might be subject to changes
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
The scene is a subset of the input, specifically referring to the data, such as images or point clouds.
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

## OpenLabel support

Pre-annotations use the OpenLabel format/schema but not all OpenLabel features are supported in pre-annotations.

## Unsupported pre-annotation features

These features or combinations of features are not currently supported, or only have partial support.

* Static geometries: not supported
    * These are bounding boxes, cuboids, etc. declared in the OpenLabel under `objects.*.objectData`
* Geometry-specific attributes: not supported on 3D geometry
    * These are attributes declared in the OpenLabel on a single geometric shape, in other words an attribute that only applies to the object as seen by one sensor; a common example is `occlusion` which is recorded separately for each camera.
    * May also be referred to as source-, stream- or sensor-specific attributes.
    * 3D geometry is anything that can be drawn when annotating a pointcloud, e.g. cuboids.
    * Geometry-specific attributes are permitted on 2D geometry e.g. bounding boxes
    * Note that the [task definition](../key_concepts.md#task-definition), must designate a property as source specific before it may be used in this way.
    * The `stream` attribute is a special case and is excepted from this rule

## Supported pre-annotation features

### Geometries

:::note
Objects cannot have multiple 3D geometries in the same frame
:::

| OpenLABEL field | 2D/3D | Description                                                                |
|-----------------|-------|----------------------------------------------------------------------------|
| `cuboid`        | 3D    | Cuboid in 3D                                                               |
| `bbox`          | 2D    | Bounding box in 2D                                                         |
| `poly3d`        | 3D    | Line in 3D. Append the first point at the end if you want it to be closed. |

Note that all geometries should be specified under frames rather than in the root of the pre-annotation. 3D geometries
should be expressed in the lidar coordinate system in the single-lidar case, but in the reference coordinate system in
the multi-lidar case. The rotation of cuboids should be the same as that in [exports](../openlabel/openlabel-format.md#rotation-of-cuboids). 
2D geometries should be expressed in pixel coordinates. See [coordinate systems](calibrations.md) for more information.

### Attributes

- Text
- Num
- Boolean

For 2D geometry, attributes may be specified as geometry specific (aka source/sensor specific), or object specific. Attributes can be static (specified in the `objects` key) or dynamic (specified in the `object_data` for the object in the frame) and must be allowed by the [task definition](../key_concepts.md#task-definition), if one exists. Geometry specific attributes (those which appear on a single shape within frames) must also be declared as such in the task definition; arbitrary properties cannot be used in a source-specific way.

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


## Examples

Below follows examples of supported pre-annotations.

### 3D cuboid and 2D bounding box with a static property

```json
{
  "openlabel": {
    "frame_intervals": [],
    "frames": {
      "0": {
        "frame_properties": {
          "timestamp": 0,
          "external_id": "0",
          "streams": {"LIDAR1":  {}, "ZFC":  {}}
        },
        "objects": {
          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {
            "object_data": {
              "bbox": [
                {
                  "attributes": {
                    "text": [
                      { "name": "stream", "val": "ZFC" }
                    ]
                  },
                  "name": "Bounding-box-1",
                  "val": [1.0, 1.0, 40.0, 30.0]
                }
              ],
              "cuboid": [
                {
                  "attributes": {
                    "text": [
                      { "name": "stream", "val": "LIDAR1" }
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
            { "name": "color", "val": "red" }
          ]
        },
        "type": "PassengerCar"
      }
    },
    "streams": { 
      "LIDAR1": { "type": "lidar" }, 
      "ZFC": { "type": "camera" }
    }
  }
}
```


### 3D line with a dynamic property

```json
{
  "openlabel": {
    "frame_intervals": [{ "frame_end": 0, "frame_start": 0 }],
    "frames": {
      "0": {
        "frame_properties": {
          "streams": { "lidar": {} },
          "timestamp": 0,
          "external_id": "0"
        },
        "objects": {
          "cc06aced-d7dc-4638-a6e9-dc7f5e215340": {
            "object_data": {
              "poly3d": [
                {
                  "attributes": {
                    "text": [{ "name": "stream", "val": "lidar" }]
                  },
                  "closed": false,
                  "name": "line-3d-1",
                  "val": [
                    -5.0, 0.0, 0.0, 
                    -5.0, 10.0, 0.0,
                    5.0, 10.0, 0.0,
                    5.0, 0.0, 0.0, 
                    -5.0, 0.0, 0.0
                  ]
                }
              ],
              "text": [{ "name": "occluded", "val": "No" }]
            }
          }
        }
      }
    },
    "metadata": { "schema_version": "1.0.0" },
    "objects": {
      "cc06aced-d7dc-4638-a6e9-dc7f5e215340": {
        "name": "cc06aced",
        "type": "Region"
      }
    },
    "streams": {
      "lidar": { "type": "lidar" },
      "ZFC": { "type": "camera" }
    }
  }
}
```


