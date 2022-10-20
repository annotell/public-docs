---
title: Point clouds
---

The API allows uploading of annotation project related data such as images and point clouds. Kognic uses a potree format internally to represent and present point clouds, this means that uploaded point cloud data needs to be converted into this format before it can be used as input in the system. We currently support automatic conversion of three formats: **pcd**, **csv** and **las**. The converter does not however exhaustively support all possible versions of these formats, see below for details of each format.

It might also be worth noticing that timestamp, color, and other auxillary data is currently discarded in the conversion. Timestamps because our potree version does not support timestamps, and color because it is currently not used in the system.

## PCD

The currently supported format includes the following header:

```
VERSION .7
FIELDS x y z intensity timestamp
SIZE 4 4 4 4 4
TYPE F F F U U
COUNT 1 1 1 1 1
WIDTH <w>
HEIGHT <h>
VIEWPOINT 0 0 0 1 0 0 0
POINTS <n>
DATA ascii
```

## CSV

We currently only support the following exact header and using `,` as separation character (where `intensity` is uint8,`ts_gps` is an uint64 and `x`, `y`, `z` are all float32):

```
ts_gps,x,y,z,intensity
```

All other formats will fail.

## LAS

We currently support version 1.2 and point format id 3, as defined in the [las 1.2 specification](https://www.asprs.org/a/society/committees/standards/asprs_las_format_v12.pdf). All other formats will cause the conversion to fail.
