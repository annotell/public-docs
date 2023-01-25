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


## Representing polygons and multi-polygons

Polygons are often described as lists of geometric polygons where the first element describes the outer boundary while
the subsequent ones describe potential holes in the polygon. In addition, objects such as lane markings and road paintings
are often described as multiple polygons, or multi-polygons. In order to represent such objects we use a list of geometric
polygons where each one has the attributes `polygon_id` and `is_hole`. Below follows an example where an object consists
of two polygons, each with one hole.


```json
{
    "objects": {
        "a6fe73b8": {
            "name": "roadpainting-a6fe73b8",
            "type": "RoadPainting",
            "object_data": {
                "poly2d": [
                    {
                        "name": "poly1",
                        "val": [...],
                        "attributes": {
                            "text": [{"name": "polygon_id", "val": "1"}],
                            "boolean": [{"name": "is_hole", "val": false}]
                        }
                    },
                    {
                        "name": "poly2",
                        "val": [...],
                        "attributes": {
                            "text": [{"name": "polygon_id", "val": "1"}],
                            "boolean": [{"name": "is_hole", "val": true}]
                        }
                    },
                    {
                        "name": "poly3",
                        "val": [...],
                        "attributes": {
                            "text": [{"name": "polygon_id", "val": "2"}],
                            "boolean": [{"name": "is_hole", "val": false}]
                        }
                    },
                    {
                        "name": "poly4",
                        "val": [...],
                        "attributes": {
                            "text": [{"name": "polygon_id", "val": "2"}],
                            "boolean": [{"name": "is_hole", "val": true}]
                        }
                    }
                ]
            }
        }
    }
}


```


## Representing curves

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
            "name": "interpolation-method",
            "val": "natural-cubic-spline"
          }
        ]
      }
    }
  ]
}
```
