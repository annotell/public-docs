```python
from kognic.io.client import KognicIOClient
from kognic.io.model.calibration import SensorCalibration, PinholeCalibration, LidarCalibration
from kognic.io.model.scene.lidars_and_cameras_sequence import LidarsAndCamerasSequence, Frame
from kognic.io.model.scene.resources import Image, PointCloud

client = KognicIOClient()

# 1. Create calibration (see calibration section for more details)
calibration = { "CAM": PinholeCalibration(...), "lidar": LidarCalibration(...) }
sensor_calibration = SensorCalibration(
    external_id = "my-first-calibration",
    calibration = {
        "CAM": PinholeCalibration(...),
        "lidar": LidarCalibration(...)
    }
)
created_calibration = client.calibration.create_calibration(sensor_calibration)

# 2. Build scene object
scene = LidarsAndCamerasSequence(
    external_id="my-first-scene",
    calibration_id = created_calibration.id,
    frames=[
        # Relative timestamps must be unique and strictly increasing
        Frame(
            relative_timestamp=0,
            images=[Image(sensor_name = "CAM", filename="path/to/image1.jpg")],
            point_clouds=[PointCloud(sensor_name = "lidar", filename="path/to/pointcloud1.pcd")]
        ),
        Frame(
            relative_timestamp=100,
            images=[Image(sensor_name = "CAM", filename="path/to/image2.jpg")],
            point_clouds=[PointCloud(sensor_name = "lidar", filename="path/to/pointcloud2.pcd")]
        ),
        Frame(
            relative_timestamp=200,
            images=[Image(sensor_name = "CAM", filename="path/to/image3.jpg")],
            point_clouds=[PointCloud(sensor_name = "lidar", filename="path/to/pointcloud3.pcd")]
        ),
    ]
)

# 3. Upload scene
scene_uuid = client.lidars_and_cameras_sequence.create(scene).scene_uuid
print("Scene uploaded, got uuid:", scene_uuid) 
```
