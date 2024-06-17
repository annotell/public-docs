---
title: Supported file formats
---

The API allows uploading different file formats of images and point clouds. In this section we describe the supported formats for each type.

## Images

We currently support the following image formats: **png**, **jpg**, **jpeg**, **webp** and **avif**.

## Point clouds

Kognic uses a potree format internally to represent and present point clouds, this means that uploaded point cloud data needs to be converted into this format before it can be used as scene in the system. 
We currently support automatic conversion of the following formats: **pcd**, **csv** and **las**. The converter does not however exhaustively support all possible versions of these formats, see below for details of each format.

A timestamp field must always be present in point clouds, both in single-frame and sequence scenes, but the values are irrelevant [if motion compensation is not enabled](../scenes/lidars_with_imu_data.md#enabledisable-motion-compensation).

An intensity field may be provided in point clouds and will be preserved during conversion. If omitted, the intensity for all points will be zero.

Color and other auxiliary data that is not used in the platform is currently discarded in the conversion to potree.

:::caution Column names must be exact
The column names must be provided as documented below. If they are not, the conversion will fail. In the case of timestamps, 
default values of 0 will be used instead.
:::

### PCD

The currently supported format includes the following header:

```
VERSION .7
FIELDS x y z intensity timestamp
SIZE 4 4 4 4 8
TYPE F F F U U
COUNT 1 1 1 1 1
WIDTH <w>
HEIGHT <h>
VIEWPOINT 0 0 0 1 0 0 0
POINTS <n>
DATA ascii
```

Apart from `ascii` as `DATA` type, we also support `binary` and `binary_compressed`. Note that we currently don't support
organized point clouds in the `binary_compressed` case, i.e. when `HEIGHT` is not equal to 1.

### CSV

We currently only support the following exact header and using `,` as separation character (where `intensity` is uint8,`ts_gps` is an uint64 and `x`, `y`, `z` are all float32):

```
ts_gps,x,y,z,intensity
```

All other formats will fail.

### LAS

We currently support version 1.2 and point format id 3, as defined in the [las 1.2 specification](https://www.asprs.org/a/society/committees/standards/asprs_las_format_v12.pdf). All other formats will cause the conversion to fail.

