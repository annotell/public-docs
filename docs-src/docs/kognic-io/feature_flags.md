---
title: Scene Feature Flags
---

To make the scene creation process more flexible we support optional _feature flags_ that can be passed at scene creation time.
Feature flags are used to turn on or off some options when creating scenes.

`FeatureFlags` is a set-like object that holds the flags. There are three ways to establish a set of flags:

- Defaults (some flags will be set): `FeatureFlags.default()`
- Empty (no flags are set): `FeatureFlags()`
- Custom (exactly the specified flags are
  set): `FeatureFlags(FeatureFlags.PointCloudFeatures.MOTION_COMPENSATION)`

The `FeatureFlags` constructor takes one or more params, each of which is a flag from the lists defined below. If the argument `feature_flags` are not passed when creating a scene (i.e. `feature_flags=None`), then the default set will be used.

## Currently Supported Features

### `PointCloudFeatures`

| Flag                  | Default state | Description                                                                               |
| :-------------------- | :------------ | :---------------------------------------------------------------------------------------- |
| `MOTION_COMPENSATION` | Enabled       | Causes [motion compensation of point clouds](scenes/lidars_with_imu_data) using IMU data. |
