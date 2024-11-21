---
title: Pre-annotations
---


Pre-annotations have many uses in ground-truth production. The pre-annotations feature allows information about the objects already known to be present in an input to be specified. Please reach out to our Advisory Services team to see how they can best be used for your use-case.

The Kognic platform supports uploading pre-annotations in the OpenLabel format using the [kognic-openlabel package](https://pypi.org/project/kognic-openlabel)

## Creating pre-annotations using the kognic-io client

There are 3 steps that are needed in order to create pre-annotations in the Kognic platform.

1. Create a scene by uploading all the needed data
2. Upload an OpenLabel annotation as a pre-annotation
3. Create an input from the scene

Note that these steps can be performed in one call with the `create_inputs` function,
see [Creating Multiple Inputs With One Call](working_with_scenes_and_inputs.md#creating-multiple-inputs-with-one-call)

### 1. Creating a scene

Start by creating a scene

```python
# Create Scene but not input since we don't provide project or batch
scene_response = client.lidars_and_cameras_sequence.create(
  lidars_and_cameras_seq,
  dryrun=dryrun
)
```

Note that you now have to wait for the scene to be created before you can proceed to the next step. More information
this can be found [Waiting for Scene Creation](working_with_scenes_and_inputs.md#waiting-for-scene-creation).


### 2. Uploading an OpenLabel annotation

The pre-annotation can be uploaded to the Kognic platform once the scene has been created successfully.

Load your OpenLabel annotation according to the documentation in `kognic-openlabel` and upload it to the Kognic platform as such:

```python
client.pre_annotation.create(
    scene_uuid=scene_response.scene_uuid, # from step 1
    pre_annotation=OpenLabelAnnotation(...),
    dryrun=dryrun
)
```

### 3. Create input

When the scene and pre-annotation have been successfully created, the input can be created.
This will add it to the latest open batch in a project, or the specific batch that's specified,
and be ready for annotation with the pre-annotation present.

```python
client.lidars_and_cameras_sequence.create_from_scene(
    scene_uuid=scene_response.scene_uuid, # from step 1
    project=project, # Important: this is the external id and not the title
    dryrun=dryrun
)
```

## OpenLabel support

Pre-annotations use the OpenLabel format/schema but not all OpenLabel features are supported in pre-annotations.

## Unsupported pre-annotation features

These features or combinations of features are not currently supported, or only have partial support.

- Static geometries: not supported
  - These are bounding boxes, cuboids, etc. declared in the OpenLabel under `objects.*.objectData`
- Geometry-specific attributes: not supported on 3D geometry
  - These are attributes declared in the OpenLabel on a single geometric shape, in other words an attribute that only applies to the object as seen by one sensor; a common example is `occlusion` which is recorded separately for each camera.
  - May also be referred to as source-, stream- or sensor-specific attributes.
  - 3D geometry is anything that can be drawn when annotating a pointcloud, e.g. cuboids.
  - Geometry-specific attributes are permitted on 2D geometry e.g. bounding boxes
  - Note that the [task definition](../key-concepts#task-definition), must designate a property as source specific before it may be used in this way.
  - The `stream` attribute is a special case and is excepted from this rule

## Supported pre-annotation features

### Geometries

:::note
Objects cannot have multiple 3D geometries in the same frame
:::

| Name               | OpenLABEL field | Description                                                                          | Attributes               |
| ------------------ | --------------- | ------------------------------------------------------------------------------------ | ------------------------ |
| Cuboid             | `cuboid`        | Cuboid in 3D                                                                         | -                        |
| Bounding box       | `bbox`          | Bounding box in 2D                                                                   | -                        |
| 3D line            | `poly3d`        | Line in 3D. Append the first point at the end if you want it to be closed.           | -                        |
| Polygon            | `poly2d`        | [Polygon](../openlabel/openlabel-format.md#representing-polygons) in 2D              | `is_hole`                |
| Multi-polygon      | `poly2d`        | [Multi-polygon](../openlabel/openlabel-format.md#representing-multi-polygons) in 2D  | `is_hole` & `polygon_id` |
| Curve              | `poly2d`        | [Curve](../openlabel/openlabel-format.md#representing-curves) or line in 2D          | `interpolation_method`   |
| 2D point           | `point2d`       | [Point](../openlabel/openlabel-format.md#representing-2d-points)                     | -                        |
| Group of 2D points | `point2d`       | [Group of points](../openlabel/openlabel-format.md#representing-groups-of-2d-points) | `point_class`            |

Note that all geometries should be specified under frames rather than in the root of the pre-annotation. 3D geometries
should be expressed in the lidar coordinate system in the single-lidar case, but in the reference coordinate system in
the multi-lidar case. The rotation of cuboids should be the same as that in [exports](../openlabel/openlabel-format.md#rotation-of-cuboids).
2D geometries should be expressed in pixel coordinates. See [coordinate systems](calibrations/overview.mdx) for more information.

### Attributes

- Text
- Num
- Boolean

For 2D geometry, attributes may be specified as geometry specific (aka source/sensor specific), or object specific. Attributes can be static (specified in the `objects` key) or dynamic (specified in the `object_data` for the object in the frame) and must be allowed by the [task definition](../key-concepts#task-definition), if one exists. Geometry specific attributes (those which appear on a single shape within frames) must also be declared as such in the task definition; arbitrary properties cannot be used in a source-specific way.

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

## Sparseness

Pre-annotations can be sparse, meaning that its objects or geometries do not need to be present in every frame. Instead,
they can be present in a subset of frames and then interpolated in the frames in between. Utilizing this feature can speed
up the annotation process significantly for sequences. Sparseness can be accomplished in two different ways, either by
using object data pointers or the boolean property `interpolated`. The former is the recommended way of doing it in most
cases since it will lead to a more compact pre-annotation. The latter is useful when the pre-annotation is created from
exported annotations from the Kognic platform.

**Interpolation** is done by linearly interpolating the geometry values between key frames. This is done in pixel
coordinates for 2D geometries. For 3D geometries, the interpolation can be done in either the frame local coordinate system
or the world coordinate system (see [Coordinate Systems](./coordinate_systems.md)). This is configured in the annotation
instruction so reach out to the Kognic team about this if you are unsure. Note that interpolation in the world coordinate
system is recommended but requires that the scene contains ego poses.

### Object Data Pointers

In OpenLABEL, object data pointers are used to create a specification for objects. For example, you can specify what attributes
and geometries that are used for specific objects. In addition, you can specify for which frames that these are present.
If a geometry is specified in the object data pointer, it will be present in all frames that the object data pointer is
pointing to. If the geometry is not provided in some of these frames, it will be interpolated. Note that geometries **must**
be provided for the first and last frame in the object data pointer. Otherwise, the pre-annotation will be rejected.

One limitation is that a geometry must be in the same stream for all frames when using object data pointers. This is because
interpolation is done in the stream coordinate system. If you need to use geometries of the same type in different streams,
you can simply use different names for the geometries in the different streams.

[Sparseness with Object Data Pointers](#sparseness-with-object-data-pointers) shows an example of how to use object data pointers.

### Interpolated Property

The boolean property `interpolated` can be used to specify that a geometry should be interpolated. Geometries are still
required to be present in interpolated frames but their geometry values will be ignored. Note that interpolated geometries
must have corresponding geometries (interpolated or not) in the first and last frame of the pre-annotation. Otherwise, the
pre-annotation will be rejected.

Using the `interpolated` property is the recommended way of doing it when the pre-annotation is created from exported
annotations from the Kognic platform.

[Sparseness with Interpolated Property](#sparseness-with-interpolated-property) shows an example of how to use the `interpolated` property.

### Attributes

Attributes are handled differently compared to geometries. If an attribute is not present in a frame, its last value
will simply be used if the object (or geometry if the property is source-specific) is present in the frame. If the object
is not present in the frame, the attribute will be ignored. Dense attributes will be sparsified automatically when the
pre-annotation is uploaded to the Kognic platform.

## Feature Flag Properties

### Locked Geometries

If an object and its geometries in the pre-annotation is already of sufficient quality, or should remain unchanged during use of the pre-annotation, you can mark it as locked. The lock is put on an object level, and will affect all the objects geometries.

```json
{
  "openlabel": {
    "objects": {
      "object_uuid": {
        "name": "object_uuid",
        "object_data": {
          "boolean": [
            {
              "name": "kognic_locked_geometries",
              "val": true
            }
          ]
        },
        "object_data_pointers": {},
        "type": "Vehicle"
      }
    }
  }
}
```

```python
import kognic.openlabel.models as OLM

uuid1 = str(uuid.uuid4())

object = OLM.Object(
    name=uuid1,
    type="car",
    object_data=OLM.ObjectData(
        boolean=[
            OLM.Boolean(name="kognic_locked_geometries", val=True),
        ]
    ),
)

openlabel = OLM.Openlabel(objects={uuid1: object}, metadata=OLM.Metadata(schema_version="1.0.0"))

openlabel_annotation = OLM.OpenLabelAnnotation(openlabel=openlabel)
```

### Stationary Objects
A stationary object is something that _can_ move, but doesn't. A good example of this is a parked car.
This is different from a static object, which _can't_ move, such as a landmark.

Objects can be marked as stationary to enable certain platform features.

```json
{
  "openlabel": {
    "objects": {
      "object_uuid": {
        "name": "object_uuid",
        "object_data": {
          "boolean": [
            {
              "name": "kognic_stationary_object",
              "val": true
            }
          ]
        },
        "object_data_pointers": {},
        "type": "Vehicle"
      }
    }
  }
}
```

```python
import kognic.openlabel.models as OLM

uuid1 = str(uuid.uuid4())

object = OLM.Object(
    name=uuid1,
    type="car",
    object_data=OLM.ObjectData(
        boolean=[
            OLM.Boolean(name="kognic_stationary_object", val=True),
        ]
    ),
)

openlabel = OLM.Openlabel(objects={uuid1: object}, metadata=OLM.Metadata(schema_version="1.0.0"))

openlabel_annotation = OLM.OpenLabelAnnotation(openlabel=openlabel)
```

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
          "streams": { "LIDAR1": {}, "ZFC": {} }
        },
        "objects": {
          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {
            "object_data": {
              "bbox": [
                {
                  "attributes": {
                    "text": [{ "name": "stream", "val": "ZFC" }]
                  },
                  "name": "Bounding-box-1",
                  "val": [1.0, 1.0, 40.0, 30.0]
                }
              ],
              "cuboid": [
                {
                  "attributes": {
                    "text": [{ "name": "stream", "val": "LIDAR1" }]
                  },
                  "name": "cuboid-89ac8a2b",
                  "val": [
                    2.079312801361084, -18.919870376586914, 0.3359137773513794,
                    -0.002808041640852679, 0.022641949116037438,
                    0.06772797660868829, 0.9974429197838155, 1.767102435869269,
                    4.099334155319101, 1.3691029802958168
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
          "text": [{ "name": "color", "val": "red" }]
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
                    -5.0, 0.0, 0.0, -5.0, 10.0, 0.0, 5.0, 10.0, 0.0, 5.0, 0.0,
                    0.0, -5.0, 0.0, 0.0
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

### Sparseness with Object Data Pointers

In the example below the object `1232b4f4-e3ca-446a-91cb-d8d403703df7` has a bounding box called `the-bbox-name` that is
provided in frames 0 and 3. In frames 1 and 2, the bounding box will be interpolated.

```json
{
  "openlabel": {
    "objects": {
      "1232b4f4-e3ca-446a-91cb-d8d403703df7": {
          "name": "car-name",
          "type":  "car",
          "object_data_pointers": {
            "the-bbox-name": {
              "type":"bbox",
              "frame_intervals": [{"frame_start": 0, "frame_end": 3}]
            }
          }
        }
    },
    "frames": {
      "0": {
        ...,
        "objects": {
          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {
            "object_data": {
              "bbox": [{"name": "the-bbox-name",...}]
            }
          }
        }
      },
      "1": {},
      "2": {},
      "3": {
        ...,
        "objects": {
          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {
            "object_data": {
              "bbox": [{"name": "the-bbox-name",...}]
            }
          }
        }
      }
    }
  }
}
```

### Sparseness with Interpolated Property

In the example below sparseness is determined using the `interpolated` property. The object
`1232b4f4-e3ca-446a-91cb-d8d403703df7` has a bounding box for which the `interpolated` property is set to `true` in
frames 1 and 2 but not in frames 0 and 3. The geometry values in frames 1 and 2 are ignored and instead interpolated
from the geometry values in frames 0 and 3.

```json
{
  "openlabel": {
    ...,
    "frames": {
      "0": {
        ...,
        "objects": {
          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {
            "object_data": {
              "bbox": [
                {
                  "attributes": {
                    "stream": [{ "name": "stream", "val":  "CAM" }],
                    "boolean": [{ "name": "interpolated", "val": false }]
                  },
                  ...
                }
              ]
            }
          }
        }
      },
      "1": {
        ...,
        "objects": {
          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {
            "object_data": {
              "bbox": [
                {
                  "attributes": {
                    "stream": [{ "name": "stream", "val":  "CAM" }],
                    "boolean": [{ "name": "interpolated", "val": true }]
                  },
                  ...
                }
              ]
            }
          }
        }
      },
      "2": {
        ...,
        "objects": {
          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {
            "object_data": {
              "bbox": [
                {
                  "attributes": {
                    "stream": [{ "name": "stream", "val":  "CAM" }],
                    "boolean": [{ "name": "interpolated", "val": true }]
                  },
                  ...
                }
              ]
            }
          }
        }
      },
      "3": {
        ...,
        "objects": {
          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {
            "object_data": {
              "bbox": [
                {
                  "attributes": {
                    "stream": [{ "name": "stream", "val":  "CAM" }],
                    "boolean": [{ "name": "interpolated", "val": false }]
                  },
                  ...
                }
              ]
            }
          }
        }
      }
    }
  }
}
```
