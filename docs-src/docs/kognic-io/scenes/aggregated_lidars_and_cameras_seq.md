---
title: Aggregated Lidars and Cameras Sequence
---

:::note
This feature is new in version 1.1.5
:::

An `AggregatedLidarsAndCamerasSeq` scene consists of a sequence of camera images and lidar point clouds, where each 
frame consists on 1-9 camera images as well as 1-20 point clouds. What differentiates `AggregatedLidarsAndCamerasSeq`
from `LidarsAndCamerasSeq` is that point clouds are aggregated over time during annotation which results in one big 
point cloud in the coordinate system of the first frame. Therefore, ego motion data is **mandatory** for this type of 
scene. For more documentation on what each field corresponds to in the `AggregatedLidarsAndCamerasSeq` object please 
check the section related to [Scene Overview](/docs/kognic-io/overview).

Refer to [Coordinate Systems](../coordinate_systems.md) for more information about what coordinate systems to use.

```python reference
https://github.com/annotell/kognic-io-examples-python/blob/master/examples/agg_lidars_and_cameras_seq.py
```

:::tip Use dryrun to validate scene
Setting `dryrun` parameter to true in the method call, will validate the scene using the API but not create it.
:::

:::tip reuse calibration
Note that you can, and should, reuse the same calibration for multiple s if possible.
:::
