---
title: The prediction format
---

Predictions use the OpenLabel format/schema. This is the same format as the one used
for [uploading pre-annotations](../kognic-io/pre_annotations/#openlabel-support). General information about the
OpenLabel format can be found in [here](../openlabel/openlabel-format).

## Supported prediction features

The current API for uploading predictions supports the following geometries:

| Name                   | OpenLABEL field | Description                    |
|------------------------|-----------------|--------------------------------|
| Cuboid                 | `cuboid`        | Cuboid in 3D                   |
| Bounding box           | `bbox`          | Bounding box in 2D             |
| Bitmaps (segmentation) | `image`         | Segmentation bitmap for images |

Note that all geometries should be specified under frames rather than in the root of the pre-annotation. The rotation of
cuboids should be the same as that in [exports](../openlabel/openlabel-format.md#rotation-of-cuboids). 2D geometries
should be expressed in pixel coordinates. See [coordinate systems](../kognic-io/coordinate_systems.md) for more
information.

`frame_properties` is required, same as for uploading pre annotations. For non-video
data, `frame_properties.external_id` will be resolved automatically if it is left as an empty string.
`frame_properties.timestamp` will be ignored for non-video data and can therefore be set to 0. `frame_properties.stream`
can be left as an empty dict.

For cuboids and bounding boxes, existence confidence can be provided by specifying an attribute called `confidence`. It is not required and will be set to 1.0 if it is left empty. If provided, it must be defined as a numeric value between 0.0 and 1.0. Existence confidence is set to 0.85 in the examples below. The `object_data.type` will show up as the class name in the tool.

For segmentation bitmaps, the image itself is a grayscale 8-bit PNG image of the same resolution as the annotated images (if the actual prediction only partially cover the annotated image or is of lower resolution, it has to be padded and/or upscaled). The image itself is supplied in the openlabel by pasting its base64-encoding as a string. Moreover, also an `ontology` has to be supplied which describes what class corresponds to each color level, see the example below. With an 8-bit grayscale image, it is possible to encode up to 256 classes.

The `camera_id` and `lidar_id` in the examples below must match the id of the sensor in already existing annotations.

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
        "frame_properties": {
          "timestamp": 0,
          "external_id": "",
          "streams": {}
        },
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
        "frame_properties": {
          "timestamp": 0,
          "external_id": "",
          "streams": {}
        },
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

### Segmentation bitmap

## Transforming, upscaling, padding and base64-encoding a small color-image to a larger grayscale image using Python PIL

This code example gives an example of how to go from a multicolor prediction bitmap image of resolution 300 x 200 to a grayscale image of resolution 1000 x 800, by first converting to grayscale, then rescaling the prediction to 600 x 400 and then padding equally on the sides. It also includes code for base64-encoding the image as a string, that later can be used in the openlabel. This code only makes use of built-in numpy functions, but is not optimized for performance.


```python
import base64
import io
import numpy as np
from PIL import Image

# The original mapping used to produce the images
original_mapping = {
    (0,0,0): "_background",
    (255,0,0): "class_1",
    (0,0,255): "class_2",
}

# The grayscale mapping (this will also be the ontology in the openlabel)
grayscale_mapping = {
    "_background": 0,
    "class_1": 1,
    "class_2": 2,
}

prediction = Image.open("my_original_prediction_file.png")  # Let's say this has resolution 300 x 200

def lookup(pixel_color):
  return grayscale_mapping[original_mapping[tuple(pixel_color)]]

# convert to grayscale via numpy array lookup
prediciton_numpy = np.array(prediction)
grayscale_prediction_numpy = np.vectorize(lookup, signature="(m)->()")(prediciton_numpy)
grayscale_prediction = Image.fromarray(grayscale_prediction_numpy.astype(np.uint8))

# upscale to another resolution
upscaled_grayscale_prediction = grayscale_prediction.resize((600, 400), resample=Image.Resampling.NEAREST)

# padding by first constructing a new background image of target size, and then paste the prediction in the right position
padded_grayscale_prediction = Image.new("L", (1000, 800), 0)
padded_grayscale_prediction.paste(upscaled_grayscale_prediction, (201, 201))

image_bytes = io.BytesIO()
padded_grayscale_prediction.save(image_bytes, format="PNG")
prediction_str = base64.b64encode(image_bytes.getvalue()).decode("utf-8")

```

## Openlabel for a segmentation bitmap

The `prediction_str` and `grayscale_mapping` can thereafter be used in the openlabel like

```json
{
    "openlabel": {
        "frames": {
            "0": {
                "objects": {
                    "07d469f9-c9ab-44ec-8d09-0c72bdb44dc2": {
                        "object_data": {
                            "image": [
                                {
                                    "name": "a_human_readable_name",
                                    "val": "prediction_str",
                                    "mime_type": "image/png",
                                    "encoding": "base64",
                                    "attributes": {
                                        "text": [
                                            {
                                                "val": "camera_id",
                                                "name": "stream"
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                },
                "frame_properties": {
                    "streams": {},
                    "timestamp": 0,
                    "external_id": ""
                },
            }
        },
        "objects": {
            "07d469f9-c9ab-44ec-8d09-0c72bdb44dc2": {
                "name": "07d469f9-c9ab-44ec-8d09-0c72bdb44dc2",
                "type": "segmentation_bitmap"
            }
        },
        "streams": {
            "camera_id": {
                "type": "camera"
            }
        },
        "metadata": {
            "schema_version": "1.0.0"
        },
        "ontologies": {
            "0": {
                "classifications": grayscale_mapping,
                "uri": ""
            }
        }
    }
}
```
If providing predictions for multiple cameras in the scene, the list of images could be extended.

### Using `kognic-openlabel` to validate the format
See [kognic-openlabel](https://pypi.org/project/kognic-openlabel/) for more information.