---
title: Lidar Calibrations
---

A LIDAR calibration is represented as a `LidarCalibration` object and consists of a position expressed with three coordinates and a rotation
in the form of a [Quaternion](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation). Optionally, the sensor's field of view may be
specified by providing an object that has a sweep start angle and sweep stop angle. The field of view may also optionally include the depth
to which the field extends.

| Key                        | Value                         | Parameters                                                 |
|:---------------------------|:------------------------------|:-----------------------------------------------------------|
| `rotation_quaternion`      | A `RotationQuaternion` object | `w`, `x`, `y`, `z`                                         |
| `position`                 | A `Position` object           | `x`, `y`, `z`                                              |
| `field_of_view` (optional) | A `LidarFieldOfView` object   | `start_angle_deg`, `stop_angle_deg` and optionally `depth` | 


See the code example below for creating a base `LidarCalibration` object.

```python reference
https://github.com/annotell/kognic-io-examples-python/blob/master/examples/calibration/create_lidar_calibration.py
```