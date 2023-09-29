---
title: Scene Feature Flags
---

To make the scene creation process more flexible we support optional *feature flags* that are passed at scene creation time.
Feature flags are used to turn on or off parts of the scene creation process.

`FeatureFlags` is a set-like object that holds the flags. There are three ways to establish a set of flags:

* Defaults (some flags will be set): `FeatureFlags.default()`
* Empty (no flags are set): `FeatureFlags()`
* Custom (exactly the specified flags are
  set): `FeatureFlags(FeatureFlags.PointCloudFeatures.MOTION_COMPENSATION)`

The `FeatureFlags` constructor takes one or more params, each of which is a flag from the lists defined below.

If feature flags are not passed when an scene is created, or they are `None`, then the default set will be used. This
means that there is no need to specify feature flags in most cases.

## Supported Features

Individual flags are found on the enums found within `FeatureFlags`.

### `PointCloudFeatures`

| Flag                  | Default state | Description                                                                               |
|:----------------------|:--------------|:------------------------------------------------------------------------------------------|
| `MOTION_COMPENSATION` | Enabled       | Causes [motion compensation of point clouds](inputs/lidars_with_imu_data) using IMU data. |
