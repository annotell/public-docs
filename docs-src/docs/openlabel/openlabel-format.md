---
title: OpenLABEL format
---

OpenLABEL is a standardized annotation format developed by [ASAM](https://www.asam.net/). 
It comes with in-depth [documentation](http://www.asam.net/project-detail/asam-openlabel-v100/) of the format as well
as a [json schema](https://openlabel.asam.net/V1-0-0/schema/openlabel_json_schema.json), which can be used to ensure
that the format is valid.

Even though OpenLABEL is a strict format there is still some room for interpretation. In this section we try to clarify
some of these parts and explain the choices that we have made within the standard.

## Rotation of Cuboids

The rotation is such that the y-axis is facing forwards, with a rotation order of `XYZ`.
This means that a cuboid with a heading (yaw) equal to 0 is aligned with the y-axis in the positive direction along the axis. 
This is somewhat different compared to the
[ISO 8855](https://www.sis.se/api/document/preview/914200/#:~:text=This%20International%20Standard%20defines%20the,to%20multi%2Dunit%20vehicle%20combinations.) 
standard, where the forward direction is along the x-axis. Conversion to ISO 8855 can then be done by applying a 
rotation around the z-axis and changing `sx` and `sy` in the following way

```python
import math 
from typing import List

from scipy.spatial.transform import Rotation

def convert_to_iso8855(val: List[float]) -> List[float]:
    """ Converts cuboid values to ISO 8855 """
    [x, y, z, qx, qy, qz, qw, sx, sy, sz] = val
    rotation_1 = Rotation.from_quat([qx, qy, qz, qw])
    rotation_2 = Rotation.from_rotvec([0, 0, math.pi / 2])
    rot_object = rotation_1 * rotation_2
    [qx, qy, qz, qw] = rot_object.as_quat()
    return [x, y, z, qx, qy, qz, qw, sy, sx, sz]
```

## Non-sequences are sequences with one frame

Due to reasons of simplicity we have made the choice to treat non-sequences in the same way as sequences. This
means that non-sequences are represented as a sequence with only one frame. Only data such as `name` and `type` are defined
in the top level element keys. All other information is stored under frames, see example below

```json
{
    "objects": {
        "0": {
            "name": "car-0",
            "type": "Car"
        }
    },
    "frames": {
        "0": {
            "objects": {
                "0": {"object_data": {...}}
            }
        }
    }
}
```

## Stream is just another text property

The `stream` property is used to indicate which stream/sensor/source that the geometry och property was annotated in.
For example here is an object with a point that has been annotated in a stream with the name `Camera`. Note that all
corresponding attributes for the geometry have also been annotated in the same stream.

```json
{
    "object_data": {
        "point2d": [
            {
                "name": "point-4d2d325f",
                "val": [300.5300, 286.4396],
                "attributes": {
                    "text": [
                        {"name": "stream", "val": "Camera"},
                        {"name": "Color", "val": "Black"}
                    ]
                }
            }
        ]
    }
}
```


## Relations
:::tip Regarding changes on 2022-04-08
Some changes were made regarding how to represent certain types of relations on 2022-04-08. Contact Kognic in case your
annotations were produced before this date, but you wish to include these changes anyways.
:::



We consider two types of relations; unidirectional relations between two objects and group relations.
In addition to these, there is a need to represent false relations, i.e. relation properties that are not actually
pointers to other objects but rather take values such as `Inconclusive`, `Nothing` or `Unclear`.

### Relations are unidirectional

Relations are unidirectional, meaning that if an object, `object1`, has a relation to another object, `object2`, it does
not mean that `object2` has a relation to `object1`. Below follows an example where `car-0` is following `car-1` and 
it is unclear whether `car-2` is following another car or not.

:::caution Deprecated since 2022-04-08 
Representing false relations using the relation uid is deprecated and has moved to the use of actions (see the next section)
:::

```json
{
    "objects": {
        "0": {"name": "car-0", "type": "Car"},
        "1": {"name": "car-1", "type": "Car"},
        "2": {"name": "car-2", "type": "Car"}
    },
    "relations": {
        "0": {
            "name": "0",
            "type": "isFollowing",
            "rdf_subjects": [{"type": "object", "uid": "0"}],
            "rdf_objects": [{"type": "object", "uid": "1"}]
        },
        "1": {
            "name": "1",
            "type": "isFollowing",
            "rdf_subjects": [{"type": "object", "uid": "2"}],
            "rdf_objects": [{"type": "object", "uid": "Unclear"}]
        }
    }
}
```

### Actions are used to represent false relations (new since 2022-04-08)
In the Kognic Platform, there is support for assigning values to relations that are not actually references to other
objects. Examples are `Inconclusive` and `Nothing`. Actions are used to represent these in the following way, where the 
name of the action determines the value and the type determines the property name.

```json
{
    "objects": {
        "0": {"name": "lane-0", "type": "Lane"}
    },
    "relations": {
        "0": {
            "name": "0",
            "type": "isSubjectOfAction",
            "rdf_subjects": [{"type": "object", "uid": "0"}],
            "rdf_objects": [{"type": "action", "uid": "0"}]
        }
    },
    "actions": {
        "0": {"name": "Nothing", "type": "is_pulling_or_pushing"}
    }
}
```

### Groups are represented as actions

:::caution Deprecated since 2022-04-08 
The group concept has been deprecated in favor of single relations between objects. 
This means that annotations produced after 2022-04-08 will no longer contain the group concept
:::

Group relations are relations where objects can be seen as belonging to a group. There is then a need for an abstract
concept that describes the group. OpenLABEL suggests the use of actions for this in such a way that each object in the 
group has a relation of type `isSubjectOfAction` to this action. Below follows an example where two `lane-0` and `lane-1`
belong to the same road, while it is unclear whether `lane-2` belongs to a road.

```json
{
    "objects": {
        "0": {"name": "lane-0", "type": "Lane"},
        "1": {"name": "lane-1", "type": "Lane"},
        "2": {"name": "lane-2", "type": "Lane"}
    },
    "relations": {
        "0": {
            "name": "0",
            "type": "isSubjectOfAction",
            "rdf_subjects": [{"type": "object", "uid": "0"}],
            "rdf_objects": [{"type": "action", "uid": "0"}]
        },
        "1": {
            "name": "1",
            "type": "isSubjectOfAction",
            "rdf_subjects": [{"type": "object", "uid": "1"}],
            "rdf_objects": [{"type": "action", "uid": "0"}]
        },
        "2": {
            "name": "2",
            "type": "isSubjectOfAction",
            "rdf_subjects": [{"type": "object", "uid": "1"}],
            "rdf_objects": [{"type": "action", "uid": "1"}]
        }
    },
    "actions": {
        "0": {"name": "", "type": "Road"},
        "1": {"name": "Unclear", "type": "Road"}
    }
}
```

### Stream specific relations

If a relation is stream specific, there will be a property `stream_relations` denoting which stream the list of relations belong to. 

```json
{ // frames.0
    // ...
    "frame_properties": {
        "streams": {
            "CAMERA_FRONT": {
                "description": null,
                "stream_properties": {
                    "stream_relations": {
                        "1": {}
                    }
                }
            }
        }
    },
    "relations": {
        "0": {}
    }
}
```


## Representing polygons

Polygons are described by a list of `Poly2d` objects in OpenLABEL. One of these represents the exterior while the others
represent potential holes and this is determined by the boolean property `is_hole`. Below follows an example of a polygon
with one hole.

```json
{
    "object_data": {
        "poly2d": [
            {
                "name": "poly1",
                "mode": "MODE_POLY2D_ABSOLUTE",
                "val": [...],
                "attributes": { "boolean": [{"name": "is_hole", "val": false}] }
            },
            {
                "name": "poly2",
                "mode": "MODE_POLY2D_ABSOLUTE",
                "val": [...],
                "attributes": { "boolean": [{"name": "is_hole", "val": true}] }
            }
        ]
    }
}
```
The value `MODE_POLY2D_ABSOLUTE` is the only supported value for `mode`. Absolute mode means that the values in `val` are interpreted as pixel coordinates (not as values relative to the first coordinate pair).

## Representing multi-polygons

Multi-polygons are simply lists of [polygons](#representing-polygons), so we describe these in a similar way with lists 
of `Poly2d` objects with the property `is_hole`. However, we also add one additional property `polygon_id` that 
determines which polygon a `Poly2d` object belongs to in the multi-polygon. Below follows an example of a multi-polygon 
with two polygons with one hole each.

```json
{
    "object_data": {
        "poly2d": [
            {
                "name": "poly1",
                "mode": "MODE_POLY2D_ABSOLUTE",
                "val": [...],
                "attributes": {
                    "text": [{"name": "polygon_id", "val": "1"}],
                    "boolean": [{"name": "is_hole", "val": false}]
                }
            },
            {
                "name": "poly2",
                "mode": "MODE_POLY2D_ABSOLUTE",
                "val": [...],
                "attributes": {
                    "text": [{"name": "polygon_id", "val": "1"}],
                    "boolean": [{"name": "is_hole", "val": true}]
                }
            },
            {
                "name": "poly3",
                "mode": "MODE_POLY2D_ABSOLUTE",
                "val": [...],
                "attributes": {
                    "text": [{"name": "polygon_id", "val": "2"}],
                    "boolean": [{"name": "is_hole", "val": false}]
                }
            },
            {
                "name": "poly4",
                "mode": "MODE_POLY2D_ABSOLUTE",
                "val": [...],
                "attributes": {
                    "text": [{"name": "polygon_id", "val": "2"}],
                    "boolean": [{"name": "is_hole", "val": true}]
                }
            }
        ]
    }
}
```
The value `MODE_POLY2D_ABSOLUTE` is the only supported value for `mode`. Absolute mode means that the values in `val` are interpreted as pixel coordinates (not as values relative to the first coordinate pair).


## Representing curves
:::caution
The name of the interpolation method has changed from `interpolation-method` to `interpolation_method`. However, old annotations
might still contain the old name
:::

Curves are represented using the `poly2d` geometry and the interpolation method is specified as a text property in
the following way.

```json
{
  "poly2d": [
    {
      "closed": false,
      "mode": "MODE_POLY2D_ABSOLUTE",
      "name": "curve-d633ca89",
      "val": [...],
      "attributes": {
        "text": [
          {
            "name": "interpolation_method",
            "val": "natural-cubic-spline"
          }
        ]
      }
    }
  ]
}
```
The value `MODE_POLY2D_ABSOLUTE` is the only supported value for `mode`. Absolute mode means that the values in `val` are interpreted as pixel coordinates (not as values relative to the first coordinate pair).
The property `interpolation_method` is mandatory and determines how the nodes should be associated to each other. The following values are supported:
- `natural-cubic-spline`
- `catmull-rom-0.5`
- `polyline`


## Representing 3D lanes

A 3D lane is represented as two lines in 3D (`poly3d`), one to the right and the other to the left. The text property 
`lane_edge` determines whether the line is to the right or to the left. The lines will always have closed set to false.


```json
{
  "object_data": {
    "poly3d": [
      {
        "attributes": {
          "text": [
            { "name": "lane_edge", "val": "left" },
            { "name": "stream", "val": "lidar" }
          ]
        },
        "closed": false,
        "name": "",
        "val": [
          1.2647494200238287, -51.51747573498745, -2.315540290283199,
          1.0807419132566136, -48.91298533071834, -2.313640304199211,
          -0.0892715141237751, -34.705936676401016, -2.235569814758307,
          -0.4442893388935316, -29.60917111552865, -2.1894531147766174,
          -1.0952988968721313, -17.193981050037397, -2.1397902661132875
        ]
      },
      {
        "attributes": {
          "text": [
            { "name": "lane_edge", "val": "right" },
            { "name": "stream", "val": "lidar" }
          ]
        },
        "closed": false,
        "name": "",
        "val": [
          1.5845765823868767, -51.49487958011918, -2.315540290283199,
          1.4004322100638888, -48.888528958803036, -2.313640304199211,
          0.23043085215069048, -34.68163859008775, -2.235569814758307,
          -0.12426061849402326, -29.589636067040036, -2.1894531147766174
        ]
      }
    ]
  }
}
```

## Representing 2D points

A 2D point is represented as a single point2d. Each `point2d` has an optional `point_class` attribute.
For single points this may be ommited, but if set it must be equal to the `type` of the object.
This attribute is reserved for future use on other point-based geometries.

```json 
{
  "openlabel": {
    ...,
    "frames": {
      "0": {
        "objects": {
          "a940239d-ff27-4480-8294-c482977a1b32": {
            "object_data": {
              "point2d": [
                {
                  "attributes": {
                    "text": [
                      { "name": "point_class", "val": "APoint" },
                      { "name": "stream", "val": "stream1" }
                    ]
                  },
                  ...
                }
              ]
            }
          },
          "e027e626-eb7a-4a8e-a9ae-083464e137d1": {
            "object_data": {
              "point2d": [
                {
                  "attributes": {
                    "text": [
                      { "name": "stream", "val": "stream1" }
                    ]
                  },
                  ....
                }
              ]
            }
          }
        }
      }
    },
    "metadata": {...},
    "objects": {
      "a940239d-ff27-4480-8294-c482977a1b32": {
        ...
        "type": "APoint"
      },
      "e027e626-eb7a-4a8e-a9ae-083464e137d1": {
        ...
        "type": "AnotherPoint"
      }
    },
    ...
  }
}

```

## Representing groups of 2d points

A group of points is used when multiple points refere to the same object.
The attribute `point_class` is required for each of the points in the point group, and the `point_class` has to be different from the object type.
The `point_class` value `"line_reference_point"` is reserved for future use cases.
