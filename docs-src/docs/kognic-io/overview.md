---
title: Overview
---

## Different types of inputs
An Input represents a grouping of sensor data (e.g. camera images, lidar pointclouds) that should be annotated together. Any information necessary to express the relationship between the sensors and their captured data is also present, be it camera resolution, sensor name or the frequency at which the data was recorded at.

There are different input types depending on what kind of sensor(s) are used to represent the contents of the input. For example, if we want to create an input only consisting of data from camera sensors then we would use the input type `Cameras`. Similarly, if we want to create an input consisting of lidar sensors and camera sensors then we would use the input type `LidarsAndCameras`. Additionally, inputs can either be **sequential** or **non-sequential**.

### Sequential vs non-sequential
Sequential inputs represent a *sequence* of sensor data, whereas non-sequential inputs only contain a single snapshot of sensor data. The sequential relationship is expressed via a sequence of **Frames**, where each **Frame** object contains information related to what kind of sensor data constitues the frame (e.g. which image and/or point cloud is a part of the Frame) as well as a *relative timestamp* that captures where in time (relative to the other frames) the Frame is located.

Non-sequential inputs only express a single snapshot of sensor data. As such, these kinds of inputs only contain a single Frame object and do not require any relative timestamp information.

Sequential input types are easily identified by the suffix `Seq` present in their name.

The following input types are currently supported
* `Cameras`
* `LidarsAndCameras`
* `CamerasSeq`
* `LidarAndCamerasSeq`

## Input Fields
All non-sequential inputs have the following structure

```python
class Input(BaseModel):
    external_id: str
    frame: Frame
    sensor_specification: SensorSpecification
    calibration_id: Optional[str] # Required if using lidar sensors
    metadata: Mapping[str, Union[int, float, str, bool]] = field(default_factory=dict)
```

Sequential inputs are similarly represented, except that they instead contain a list of Frames

```python
class InputSeq(BaseModel):
    external_id: str
    frames: List[Frame]
    sensor_specification: SensorSpecification
    calibration_id: Optional[str] # Required if using lidar sensors
    metadata: Mapping[str, Union[int, float, str, bool]] = field(default_factory=dict)
```

The fields contain all of the information required to create the input.

### External Id
Whenever an input is uploaded it automatically gets an UUID, this is used as the primary identifier by Kognic and by all of our internal systems. However, in order to make communication around specific inputs easier we also allow for clients to include any kind of identifier to the input via the external id.

### Sensor Specification
The sensor specification contains information related to the different camera and/or lidar sensors
used for capturing the data present on the input.

The additional fields are optional and relate to specifying the order of the camera sensors and
human readable variants of the sensor name (e.g. "Front Camera" instead of "FC").

```python
class SensorSpecification(BaseModel):
    sensor_to_pretty_name: Optional[Dict[str, str]] = None
    sensor_order: Optional[List[str]] = None
```

As an example, let's say we have three different camera sensors `R`, `F` and `L`. The `R` sensor is mounted on the right side of the ego vehicle, the `F` sensor at the front and the `L` sensor to the left. Creating a sensor specification for this scenario would correspond to

```python
sensor_spec = SensorSpecification(
    sensor_to_pretty_name={
        "R": "Right Camera",
        "F": "Front Camera",
        "L": "Left Camera"
    },
    sensor_order=["L", "F", "R"]
)
```

The specified `sensor_order` will cause the different camera sensors to be presented in a clockwise manner in the annotation tool (Left -> Front -> Right), while the `sensor_to_pretty_name` parameter will result in the annotation tool showing the human readable version of all the sensor names when changing sensor.

### Calibration Id
Any input consisting of lidar and camera sensors requires a calibration. The calibration captures the spatial relationship (position and rotation) between the different sensors, as well as different camera specific parameters.

This information is used by the annotation tool to highlight regions in the point cloud visible in the selected camera sensors as well as for projecting information from the pointcloud onto the different camera sensors (points, cuboids etc).

Detailed documentation on how to create calibrations via the API is present in the [Calibration section](calibration).

When including calibration id make sure that all of the sensors present on the input are also present in the calibration as well. If this is not the case the input will not be created and a validation error will be returned by the API.

Inputs without a lidar sensor do not require a calibration.

### Metadata
Metadata can be added to inputs via the `metadata` field. It consists of _flat_ key-value pairs, which means that nested data structures are not allowed. Metadata can be used to include additional information about an input.
Nothing specified in the metadata can be seen by the annotators, but there are some reserved keywords which can alter the annotation tools behaviour, and can be found here:

```python reference
https://github.com/annotell/annotell-python/blob/master/kognic-io/kognic/io/model/input/metadata/metadata.py
```


### Frame (non-sequential inputs)
The Frame object specifies the binary data to be annotated (.jpg, .png, .las etc) as well as which sensor the data originated from.

The Frame object is different for each input type since they all support different kinds of sensors, even though the overall structure is the same.

As an example, let's say we want to create an input consiting of images from three different camera sensors `R`, `F` and `L`. The corresponding binary data is present in the files `img_cam_R.jpg`, `img_cam_F.jpg` and `img_cam_F.jpg`. This would correspond to creating a `Cameras` input.

```python
cameras_input = Cameras(
    ...,
    frame=Frame(
        images=[
            Image("img_cam_R.jpg", sensor_name="R"),
            Image("img_cam_F.jpg", sensor_name="F"),
            Image("img_cam_L.jpg", sensor_name="L"),
        ]
    )
)
```

Similarly, if we also had an associated lidar pointcloud from the sensor `VDL-64` and a corresponding binary file `scan_vdl_64.las` we would instead express this as a `LidarsAndCameras` input instead.

```python
lidars_and_cameras = LidarsAndCameras(
    ...,
    frame=Frame(
        images=[
            Image("img_cam_R.jpg", sensor_name="R"),
            Image("img_cam_F.jpg", sensor_name="F"),
            Image("img_cam_L.jpg", sensor_name="L"),
        ],
        point_clouds=[
            PointCloud("scan_vdl_64.las", sensor_name="VDL-64")
        ]
    )

)
```

### Frames (sequential inputs)
Sequential inputs deal with a list of Frame objects instead of a single Frame object. In addition, Frame objects associated with sequential inputs have three additional parameters not present in their non-sequential Frame counterparts: `frame_id`, `relative_timestamp` and `metadata`.

The sequential relationship is expressed via the ordering of the Frame objects in the `frames` list

```python
frame_1 = Frame(...)
frame_2 = Frame(...)
frame_3 = Frame(...)
frames = [frame_1, frame_2, frame_3]
```

This representation captures that `frame_1` comes first, then `frame_2` and `frame_3`, but it does not express how much time has passed between the different frames. This information is encoded via the `relative_timestamp` parameter present on each Frame object. The relative timestamp is expressed in milliseconds and describes the relative time between the Frame and the start of the input.

For example, let's say that the sensor data is collected and aggregated at 2Hz. That would then be expressed as

```python
frame_1 = Frame(..., relative_timestamp=0)
frame_2 = Frame(..., relative_timestamp=500)
frame_3 = Frame(..., relative_timestamp=1000)
frames = [frame_1, frame_2, frame_3]
```

The `frame_id` is expressed as a string and is used to produce a unique identifier for each frame in the list of frames.
The `frame_id` is used as a top-level key in the produced annotations, indicating which parts of the complete annotation 
belong to this specific frame.

A common use case is to use uuids for each `frame_id`, or a combination of `external_id` and `frame_index`. 
For example, if the `external_id` of the input is `shanghai_20200101` then the `frame_id` could be encoded as 
`shanghai_20200101:0` for the first frame, `shanghai_20200101:1` for the second frame and so on.

Similarly to the metadata capability available on an input-level, it's also possible to provide metadata on a _frame_ level as well. 
It behaves the same way, i.e. consists of _flat_ key-value pairs and is not exposed to annotators during the production of annotators.

As an example, let's say we want to create an input of type `CamerasSeq` consisting of 2 frames, each with camera data 
from two different sensors `R` and `L`. If we have individual images for each frame and sensor, this would correspond 
to the following list of frames

```python
frames = [
    Frame(
        frame_id="1",
        relative_timestamp=0,
        images=[
            Image("img_L_1.jpg", sensor_name='L'),
            Image("img_R_1.jpg", sensor_name='R')
        ]),
    Frame(
        frame_id="2",
        relative_timestamp=500,
        images=[
            Image("img_L_2.jpg", sensor_name='L'),
            Image("img_R_2.jpg", sensor_name='R')
        ])
]

cameras_sequence = CamerasSequence(
        ...,
        frames=frames,
    )
```

## Image & Pointcloud Resources
Every single file containing binary sensor data (e.g. image or pointcloud files) is represented as a `Resource`, with 
`Image` and `PointCloud` both being subclasses of it.

```python reference
https://github.com/annotell/annotell-python/blob/master/kognic-io/kognic/io/model/input/resources/resource.py#L7-L12
```

When specifying a `Resource` object (like `Image` or `PointCloud`) it's possible to either:

1. Refer to _local_ files, these will be uploaded (synchronously) to the Kognic platform.
2. Refer to _remote_ files via URI, these will only be uploaded (asynchronously) and stored in the Kognic platform if 
   mandatory file conversion is necessary. Otherwise, they will be served to annotators via the URI.

**Alternative 1** is achieved by setting the parameter `filename` to the path of the local file and leaving the 
parameter `resource_id` set the default value of `None`, e.g.

```python
Image(
    filename="/Users/johndoe/images/img_FC.png",
    sensor_name='FC'
)
```

This file will automatically be uploaded to the Kognic Platform in a synchronous manner when the corresponding `create` 
method is called for creating the input.

**Alternative 2** is achieved by setting the parameter `filename` to just be the filename, and setting the parameter 
`resource_id` to the corresponding URI of the file, e.g.

```python
Image(
    filename="img_FC.png",
    sensor_name='FC',
    resource_id="gs://data-collection/4fcc30af/img_FC.png"
)
```

With this approach the file resources will be served to the platform via the URI, which also means that the files will 
not be stored in Kognic's cloud. However, **an exception to this** is for pointcloud files that are not in potree format.
In cases like this the Kognic plattform will perform an asynchronous download of the files and convert them to potree 
format. The potree versions of the files will both be stored and served from Kognic's cloud.

:::note
In order to supply `resource_id` configuration around access to the storage-provider is required. Contact Kognic before 
creating any inputs using the `resource_id` approach.
:::

## IMU Data

Intertial Measurement Unit (IMU) data may be provided for inputs containing LIDAR pointclouds. This can be used to 
perform motion compensation in multi-lidar setups, and by default if any IMU data is provided this will be done. 
Motion compensation may be disabled via an [input feature flag](feature_flags), for cases where motion compensation has
already been performed prior to upload.

Refer to [Motion Compensation for Multi-Lidar Setups](inputs/lidars_with_imu_data).

## Input Feature Flags

Control over optional parts of the input creation process is possible via `FeatureFlags` that are passed when invoking 
the create operation on the input. Refer to [the feature flags documentation](feature_flags) for details.
