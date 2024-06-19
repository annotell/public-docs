```python
from kognic.io.client import KognicIOClient
from kognic.io.model.scene.cameras import Cameras, Frame
from kognic.io.model.scene.resources import Image

# 1. Build scene object
scene = Cameras(
    external_id="my-first-scene",
    frame=Frame(
        images=[
          # Sensor names must be unique
          Image(sensor_name = "CAM1", filename="path/to/image1.jpg"),
          Image(sensor_name = "CAM2", filename="path/to/image2.jpg")
        ],
    )
)

# 2. Upload scene
client = KognicIOClient()
scene_uuid = client.cameras.create(scene).scene_uuid
print("Scene uploaded, got uuid:", scene_uuid)
```
