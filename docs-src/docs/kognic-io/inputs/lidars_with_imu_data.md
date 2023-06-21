---
title: Motion Compensation
---
An inherent problem with labeling any lidar setup
is that the resulting point
cloud is not a snapshot from a single instant in time but a time interval
in which the lidar sweep was made. This causes a problem during labeling since
the objects can move during the lidar sweep, and if you try to label a car with
e.g. a 3D box that box would not represent the actual size of that car. This issue can be
mitigated with the help of motion compensation, where we synchronize the timestamp of all
points in the point cloud.

By including data from the Inertial Measurement Unit (IMU) of the ego vehicle we get an
exact trajectory of how the car is moving during the lidar sweeps. This allows us to perform
motion compensation, adjusting the points in the point cloud so that they represent the same
instant in time.

Additionally, each point in the provided point clouds need to have a unix timestamp specified
(in nanoseconds), so that the motion compensation can work. 

What instant in time to motion-compensate the points to can be specified
with the `unix_timestamp_ns` parameter. If this is not specified then, for each 
frame, the median time of all points in the frame will be used instead.

Motion compensation is of particular importance when annotation is to be performed on multiple lidar
sweeps at once, e.g. in multi-lidar setups and when point clouds are aggregated across frames.


:::caution All Unix Timestamps need to be in nanoseconds
In order for the motion compensation to work correctly it is important with a consistent
unit of time. Therefore, all unix timestamps needs to be provided in nanoseconds.
:::

Note that all timestamps (in point clouds and the provided `unix_timestamp_ns`) must be encompassed by
the timestamps in the imu data. Otherwise, the scene creation will fail.

IMU data is provided as a list of `IMUData` objects in the root of the input object in the following way:

```python

from kognic.io.model.ego import IMUData
from kognic.io.model.calibration import Position, RotationQuaternion
from kognic.io.model.input.lidars_and_cameras_sequence import LidarsAndCamerasSequence, Frame

from kognic.io.client import KognicIOClient

imu_data = [
    IMUData(
        position=Position(x=-10.44, y=126.06, z=78.817),
        rotation_quaternion=RotationQuaternion(x=-1.0, y=0.5, z=1, w=0),
        timestamp=1665997200597027072 # ns
    ),
    ...
]

frames = [
    Frame(..., unix_timestamp_ns = 1665997358832901120),
    Frame(..., unix_timestamp_ns = 1665997503951270144),
]


lidars_and_cam_seq = LidarsAndCamerasSequence(
    ...,
    imu_data = imu_data, 
    frames = frames,
)


client = KognicIOClient()
client.lidars_and_cameras_sequence.create(
    lidars_and_cam_seq,
    project="project-ext-id",
    dryrun=False
)
```

:::tip Use dryrun to validate input
Setting `dryrun` parameter to true in the method call, will validate the input using the API but not create any inputs.
:::

## Enable/disable motion compensation

By default motion compensation is performed for inputs with LIDAR pointclouds when IMU data is provided.

Whether motion compensation is enabled is controlled by an [input feature flag](../feature_flags), the default is enabled. To disable motion compensation you must provide a different set of flags from the default, and not include the motion compensation flag. Calling the `create` method for an input, and not specifying feature flags at all is equivalent to using the defaults, and motion compensation will be performed.

It may be desirable to disable motion compensation in cases where pointclouds are already motion compensated outside of the Kognic platform.
