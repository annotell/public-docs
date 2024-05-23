```python collapse={10-15}
from kognic.io.client import KognicIOClient
from kognic.io.model.calibration import SensorCalibration, PinholeCalibration, LidarCalibration
from kognic.io.model.scene.lidars_and_cameras import LidarsAndCameras, Frame
from kognic.io.model.scene.resources import Image, PointCloud

client = KognicIOClient()

# 1. Create calibration (see calibration section for more details)
sensor_calibration = SensorCalibration(
    external_id = my-first-calibration",
    calibration = {
        "CAM": PinholeCalibration(...),
        "lidar": LidarCalibration(...)
    }
)
created_calibration = client.calibration.create_calibration(sensor_calibration)

# 2. Build scene object
scene = LidarsAndCameras(
    external_id=f"my-first-scene",
    calibration_id = created_calibration.id,
    frame=Frame(
        images=[Image(sensor_name = "CAM", filename="path/to/image.jpg")],
        point_clouds=[PointCloud(sensor_name = "lidar", filename="path/to/pointcloud.pcd")]
    )
)

# 3. Upload scene
scene_uuid = client.lidars_and_cameras.create(scene).scene_uuid
print("Scene uploaded, got uuid:", scene_uuid)
```
