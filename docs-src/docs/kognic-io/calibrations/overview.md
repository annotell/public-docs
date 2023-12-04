---
title: Calibrations Overview
---

Scenes including both a 2D and 3D representation such as `lidars_and_cameras` deal with data in a number of different 
[coordinate systems](../coordinate_systems.md). These scenes require a calibration that relate the different sensors to
each other in terms of location and orientation. The calibration should also contain the required information for 
projecting 3D points into the image plane of the camera.

A `Calibration` object consists of a set of key-value pairs where the key is the name of the sensor (i.e. sensor name) 
and the value is either a `LidarCalibration` object or any of the different camera calibrations.

:::tip reuse calibration
Note that after a calibration has been created you can, and should, reuse the same calibration for multiple scenes if possible.
:::

## Types of calibrations

All calibration types contain information about the position and orientation of the sensor in 3D. This is relative to
the reference coordinate system. More information about lidar calibrations can be found [here](lidars.md). For cameras, the calibration also contains information about mapping 3D points to the
image plane of the camera. We support different types of [standard camera calibrations](cameras-standard.md), where you only
have to provide the intrinsic parameters of the camera. If your camera model is not supported, you can also provide
a [custom camera calibration](cameras-custom.md) where you provide the implementation in the form of a WebAssembly module.

## Examples

### Creating a calibration

The following example code shows how you can create a *unity* (i.e. we assume that all sensors are placed at origin and have no rotation)
calibration for a LIDAR sensor and several camera sensors of different types.

```python reference
https://github.com/annotell/kognic-io-examples-python/blob/master/examples/calibration/calibration.py
```

### Listing existing calibrations

As a final step we can fetch the calibration via the external id. This can either be done via the client, or via the CLI 
kognicutil tool.

```python
client.calibration.get_calibration(external_id="Collection 2020-06-16")
```

```bash
$ kognicutil calibration --external-id "Collection 2020-06-16"
```
