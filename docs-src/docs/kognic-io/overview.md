---
title: Overview
---

## Different types of scenes

A scene represents a grouping of sensor data (e.g. camera images, lidar pointclouds) that should be annotated together. Any information necessary to describe the relationship between the sensors and their captured data is also specifed in the scene, be it camera resolution, sensor name, and the frequency at which the data was recorded at, etc.

There are different scene types depending on what kind of sensor(s) are used to represent the contents of the scene. For example, if one wants to create a scene only consisting of image data from camera sensors then one would use the scene type `Cameras`. Similarly, if one wants to create a scene consisting of both lidar and camera sensors then one would use the scene type `LidarsAndCameras`. Additionally, scenes can either be _single frame_ or _sequence_ type.

### Sequential vs non-sequential

Sequential scenes represent a _sequence_ of frames in time, whereas non-sequential scenes only contain one snapshot of the sensor data. The sequential relationship is expressed via a sequence of **Frames**, where each Frame contains information related to what kind of sensor data constitues the frame (e.g. which image and/or pointcloud is part of the Frame) as well as a _relative timestamp_ that captures where in time (relative to the other frames) the Frame is located.

Non-sequential scenes only contains a single Frame and do not require any relative timestamp information.

Sequential scene types are identified by the suffix `Seq` in their type name.

The following scene types are currently supported

- `Cameras`
- `LidarsAndCameras`
- `CamerasSeq`
- `LidarsAndCamerasSeq`
- `AggregatedLidarsAndCamerasSeq`

## Scene Fields

Non-sequential scenes have the following structure

```python
class Scene(BaseModel):
    external_id: str
    frame: Frame
    sensor_specification: SensorSpecification
    calibration_id: Optional[str] # Required if using lidar sensors
    metadata: Mapping[str, Union[int, float, str, bool]] = field(default_factory=dict)
```

Sequential scenes are similarly represented, except that they instead contain a list of Frames

```python
class SceneSeq(BaseModel):
    external_id: str
    frames: List[Frame]
    sensor_specification: SensorSpecification
    calibration_id: Optional[str] # Required if using lidar sensors
    metadata: Mapping[str, Union[int, float, str, bool]] = field(default_factory=dict)
```

### External Id

A scene automatically gets a UUID when it is created. This UUID is used as the primary identifier by Kognic and all of our internal systems. Additionally, an external id is required as an identifier when creating the scene in order to make communication around specific scenes easier.

### Sensor Specification

The sensor specification contains information about the camera and/or lidar sensors
used in the scene.

The additional fields are optional, and can be used to specify the order of the camera images and
a human readable sensor name (e.g. "Front Camera" instead of "FC") when viewed in the Kognic annotation App.

As an example, let's say we have three camera sensors `R`, `F` and `L` positioned on the ego vehicle. Creating a sensor specification would be

```python
from kognic.io.model import SensorSpecification
sensor_spec = SensorSpecification(
    sensor_to_pretty_name={
        "R": "Right Camera",
        "F": "Front Camera",
        "L": "Left Camera"
    },
    sensor_order=["L", "F", "R"]
)
```

`sensor_order` configures the order of camera images, and `sensor_to_pretty_name` affects the labels when viewed in the Kognic annotation App.

### Calibration

Any scene consisting of lidar and camera sensors requires a calibration. The calibration specifies the spatial relationship (position and rotation) between the sensors, and the camera intrinsic parameters.

However, scenes without a lidar sensor do not require a calibration.

Calibration is used by the Kognic annotation App to project regions in the pointcloud when a camera image is selected, and, similarly, to project the selected object (e.g. point, cuboid) in the pointcloud onto the images .

When creating a calibration, all sensors must match those present on the scene. If this is not the case the scene will not be created and a validation error will be returned by the Kognic API.

Detailed documentation on how to create calibrations via the API is present in the [Calibration section](./calibrations/overview.mdx).

### Metadata

Metadata can be added to scenes via the `metadata` field. It consists of flat key-value pairs, which means that nested data structures are not allowed. Metadata can be used to include additional information about a scene.
Metadata cannot be seen by the annotators, but there are some reserved keywords that can alter the behaviour of the Kognic annotation tool. Reserved keywords can be found in the `MetaData` object in the python client.

### Frame

The Frame object specifies the binary data to be annotated (.jpg, .png, .las etc) as well as which sensor the data originated from. Note that the `Frame` object is different for each scene type, even though the overall structure is similar (see details below).

#### Non sequential frame

As an example, let's say we want to create a scene consiting of images from three camera sensors `R`, `F` and `L`. The corresponding binary data are in the files `img_cam_R.jpg`, `img_cam_F.jpg` and `img_cam_F.jpg`. This would correspond the scene type `Cameras`.

```python
from kognic.io.model.scene.resources import Image
from kognic.io.model.scene.cameras import Cameras, Frame

cameras_scene = Cameras(
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

Similarly, if we also had an associated lidar pointcloud from the sensor `VDL-64` and a corresponding binary file `scan_vdl_64.las`, we would instead use the scene type `LidarsAndCameras`. Note that the `Frame` class shall be imported under the corresponding scene type.

```python
from kognic.io.model.scene.resources import Image, PointCloud
from kognic.io.model.scene.lidars_and_cameras import LidarsAndCameras, Frame

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

#### Sequential frames

Sequential scene takes a list of `Frame` objects instead of a single `Frame`. In addition, the `Frame` object associated with sequential scenes have three additional parameters: `frame_id`, `relative_timestamp` and `metadata`.

The sequential relationship is expressed via the order of the list of `Frame`.

To express how much time has passed between the different frames, one can use the `relative_timestamp` parameter for each `Frame`. The relative timestamp is expressed in milliseconds and describes the relative time between the `Frame` and the start of the scene.

For example, let's say that the sensor data is collected and aggregated at 2Hz.

```python
frame_1 = Frame(..., relative_timestamp=0)
frame_2 = Frame(..., relative_timestamp=500)
frame_3 = Frame(..., relative_timestamp=1000)
frames = [frame_1, frame_2, frame_3]
```

The `frame_id` is a string that uniquely identifies each frame in the list of frames.

A common use case is to use uuids for each `frame_id`, or a combination of `external_id` and `frame_index`.
For example, if the `external_id` of the scene is `shanghai_20200101` then the `frame_id` could be encoded as
`shanghai_20200101:0` for the first frame, `shanghai_20200101:1` for the second frame and so on.

It's also possible to provide `metadata` on a _frame_ level for sequential frames. It consists of _flat_ key-value pairs and is not exposed to annotators during the production of annotators.

As an example, let's say we want to create a scene of type `CamerasSequence` consisting of 2 frames, each with camera images
from two sensors `R` and `L`.

```python
from kognic.io.model.scene.resources import Image
from kognic.io.model.scene.cameras_sequence import CamerasSequence, Frame

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

Every file containing sensor data is represented as a `Resource`, with
`Image` and `PointCloud` being the concrete subclasses.

```python
class Resource(ABC, BaseSerializer):
    filename: str
    resource_id: Optional[str] = None
    sensor_name: str
    file_data: Optional[FileData] = Field(default=None, exclude=True)
```

`Resource`s ultimately describe how to obtain some binary or textual sensor data, which can be done in different ways:

1. Indirectly: by refering to a local filename that contains the data
2. Directly: provide some bytes-like object at creation time
3. Lazily: provide a callback function which can provide the bytes later in the process

`Resource`s must always be given a `filename`. For alternative 1 this must point to the local file to upload. For alternatives 2 & 3 the value of `filename` parameter is treated as an identifier; it is used to name the uploaded file but does not have to correspond to anything in the filesystem.

`Resource`s also always have a `sensor_name` which identifies the sensor they were captured from. In sequential scenes, each `Frame` will have a `Resource` for each sensor.

`Resource`s take their actual data (bytes) from `bytes`, a `BinaryIO` or an `IOBase`-compatible object. These are referred to with the type alias `UploadableData  = Union[bytes, BinaryIO, IOBase]`.

For alternatives 2 & 3 listed above, a `FileData` object is attached to the `Image` or `PointCloud` to capture the source of data. It is created with either `data: UploadableData` or a `callback: Callable[[str], UploadableData]`, as well as a `format` which identifies the type of data contained in the bytes.

:::info
Previous API client releases advertised support for ingesting files from external URIs, such as `gs://bucket/path/file`. Please contact Kognic if you believe you require this functionality going forward.
:::

### Local File

Set `filename` to the path of the local file and do not provide data via other means (directly or callback). The content is uploaded using a content type inferred from the filename suffix.

```python
Image(filename="/path/to/images/img_FC.png", sensor_name="FC")
```

### Data in Memory

In addition to `filename`, provide a `FileData` object via the `file_data` attribute, which in turn has an `UploadableData` as its own `data` attribute. This example uses raw `bytes`:

```python
png_blob = FileData(data=b'some PNG bytes', format=FileData.Format.PNG)
Image(
    filename="FC-frame15",
    sensor_name="FC",
    file_data=png_blob
)
```

### Data from Callback

In addition to `filename`, provide a `FileData` object via the `file_data` attribute, with a `callback` function that produces an `UploadableData`, e.g.

```python
png_from_callback = FileData(callback=get_png, format=FileData.Format.PNG)
Image(
    filename="FC-frame15",
    sensor_name="FC",
    file_data=png_from_callback
)
```

The callback function (`get_png`) is a unary function with the following signature.

```python
def get_png(file: str) -> UploadableData:
    pass
```

The callback function is invoked with the `Resource.filename` as its argument when it is time to upload that single file.

If the callback requires extra arguments then we recommend creating a closure over the additional arguments like this:

```python
def get_callback(arg1, arg2, **kwargs):
     def callback(filename) -> bytes:
         # ... use arg1, arg2, filename and kwargs

     return callback

FileData(
    callback=get_callback("foo", "bar", extra1="baz", extra2="qux"),
    format=FileData.Format.JPG
)
```

### Data from Asynchronous Callback (new in version 1.5.0)

Using asynchronous callbacks can be useful to speed up data uploads, especially when the data is not available locally.
In the same way as for synchronous callbacks, the callback function is invoked with the `Resource.filename` as its
argument when it is time to upload that single file. Asynchronous callbacks can be used in the following way:

```python
async def get_png(filename: str) -> UploadableData:
    pass

png_from_async_callback = FileData(callback=get_png, format=FileData.Format.PNG)

Image(
    filename="FC-frame15",
    sensor_name="FC",
    file_data=png_from_async_callback
)
```

## IMU Data

Inertial Measurement Unit (IMU) data may be provided for scenes containing LIDAR pointclouds. This can be used to
perform motion compensation in multi-lidar setups, and by default if any IMU data is provided this will be done.
Motion compensation may be disabled via a [scene feature flag](feature_flags), for cases where motion compensation has
already been performed prior to upload.

Refer to [Motion Compensation for Multi-Lidar Setups](scenes/lidars_with_imu_data).

## Scene Feature Flags

Control over optional parts of the scene creation process is possible via `FeatureFlags` that are passed when invoking
the create operation on the scene. Refer to [the feature flags documentation](feature_flags) for details.
