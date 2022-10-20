---
title: Lidars and Cameras Sequence
---

A `LidarsAndCamerasSeq` input consists of a sequence of camera images and lidar point clouds, where each frame consists on 1-9 camera images as well as 1-20 point clouds. For more documentation on what each field corresponds to in the `LidarsAndCamerasSeq` object please check the section related to [Input Overview](/docs/kognic-io/overview).

```python reference
https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/lidars_and_cameras_seq.py
```

:::tip Use dryrun to validate input
Setting `dryrun` parameter to true in the method call, will validate the input using the API but not create any inputs.
:::

:::tip reuse calibration
Note that you can, and should, reuse the same calibration for multiple inputs if possible.
:::

## Providing Ego Vehicle Motion Information

Ego vehicle motion (i.e. the position and rotation of the ego vehicle) is optional information that can be provided when creating `LidarsAndCamerasSeq` inputs. This information can enable a massive reduction in the time it takes to annotate static objects. Ego vehicle motion information is provided by passing a `EgoVehicleMotion` object to **each** `Frame` in the input.

```python reference
https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/lidars_and_cameras_seq_full.py
```

:::note Coordinate Systems
Note that both `position` and `rotation` for ego vehicle pose are with respect to the _local_ coordinate system.
:::

## Shutter timings

Shutter timings are optional metadata that may be provided when creating an `Image` within a `Frame`. Timings are two values: shutter start and end timestamp in nanoseconds since unix epoch and are specified for each image in each frame.

```python reference
https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/lidars_and_cameras_seq_with_imu_and_shutter_times.py
```
