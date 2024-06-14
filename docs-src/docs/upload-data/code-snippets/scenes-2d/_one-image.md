```python
from kognic.io.client import KognicIOClient
from kognic.io.model.scene.cameras import Cameras, Frame
from kognic.io.model.scene.resources import Image

# 1. Build scene object
scene = Cameras(
    external_id="my-first-scene",
    frame=Frame(images=[Image(filename="path/to/image.jpg")])
)

# 2. Upload scene
client = KognicIOClient()
scene_uuid = client.cameras.create(scene).scene_uuid
print("Scene uploaded, got uuid:", scene_uuid)
```
