---
title: The prediction format
---

Predictions use the OpenLabel format/schema. This is the same format as the one used
for [uploading pre-annotations](../kognic-io/pre_annotations/#openlabel-support). General information about the
OpenLabel format can be found in [here](../openlabel/openlabel-format).

## Supported prediction features

:::note
Only one type of geometry, e.g. cuboid in 3D, per prediction is supported
:::

The current API for uploading predictions supports the following geometries:

| Name         | OpenLABEL field | Description        |
|--------------|-----------------|--------------------|
| Cuboid       | `cuboid`        | Cuboid in 3D       |
| Bounding box | `bbox`          | Bounding box in 2D |

Note that all geometries should be specified under frames rather than in the root of the pre-annotation. The rotation of
cuboids should be the same as that in [exports](../openlabel/openlabel-format.md#rotation-of-cuboids). 2D geometries
should be expressed in pixel coordinates. See [coordinate systems](../kognic-io/coordinate_systems.md) for more
information.

Unlike for pre-annotations, `frame_properties` is not required. For non-video data, `frame_properties.external_id` will
be resolved automatically if it is left empty.

Existence confidence can be provided by specifying an attribute called `confidence`. It is not required and will be set
to 1.0 if it is left empty. If provided, it must be defined as a numeric value between 0.0 and 1.0. Existence confidence
is set to 0.85 in the examples below.

The `camera_id` and `lidar_id` in the examples below must match the id of the sensor in already existing annotations.

The `object_data.type` will show up as the class name in the tool.

## Prediction examples

### 2D bounding box with a static property

In OpenLabel, a bounding box is represented as a list of 4 values: `[x, y, width, height]`, where `x` and `y` are the
center coordinates of the bounding box. The `width` and `height` are the width and height of the bounding box. The `x`
and `y` coordinates are relative to the upper left corner of the image.

```json
{
  "openlabel": {
    "frames": {
      "0": {
        "objects": {
          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {
            "object_data": {
              "bbox": [
                {
                  "attributes": {
                    "num": [
                      {
                        "val": 0.85,
                        "name": "confidence"
                      }
                    ],
                    "text": [
                      {
                        "name": "stream",
                        "val": "camera_id"
                      }
                    ]
                  },
                  "name": "any-human-readable-bounding-box-name",
                  "val": [
                    1.0,
                    1.0,
                    40.0,
                    30.0
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
        "name": "any-human-readable-bounding-box-name",
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
    "streams": {
      "camera_id": {
        "type": "camera"
      }
    }
  }
}
```

### 3D cuboid with a static property

Cuboids are represented as a list of 10 values: `[x, y, z, qx, qy, qz, qw, width, length, height]`, where `x`, `y`,
and `z` are the center coordinates of the cuboid. `x`, `y`, `z`, `width`, `length`, and `height` are in meters.
`qx`, `qy`, `qz`, and `qw` are the quaternion values for the rotation of the cuboid.

Read more about coordinate systems and
quaternions [here](../openlabel/openlabel-format/#rotation-of-cuboids).

```json
{
  "openlabel": {
    "frames": {
      "0": {
        "objects": {
          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {
            "object_data": {
              "cuboid": [
                {
                  "attributes": {
                    "num": [
                      {
                        "val": 0.85,
                        "name": "confidence"
                      }
                    ],
                    "text": [
                      {
                        "name": "stream",
                        "val": "lidar_id"
                      }
                    ]
                  },
                  "name": "any-human-readable-cuboid-name",
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
        "name": "any-human-readable-cuboid-name",
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
    "streams": {
      "lidar_id": {
        "type": "lidar"
      }
    }
  }
}
```