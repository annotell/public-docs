```python
from kognic.io.client import KognicIOClient
from kognic.io.model.scene.cameras_sequence import CamerasSequence, Frame
from kognic.io.model.scene.resources import Image

# 1. Build scene object
scene = CamerasSequence(
    external_id="my-first-scene",
    frames=[
        # Relative timestamps must be unique and strictly increasing
        Frame(
            relative_timestamp=0,
            frame_id="1",
            images=[Image(filename="path/to/image1.jpg")],
        ),
        Frame(
            relative_timestamp=100,
            frame_id="2",
            images=[Image(filename="path/to/image2.jpg")],
        ),
        Frame(
            relative_timestamp=200,
            frame_id="3",
            images=[Image(filename="path/to/image3.jpg")],
        ),
    ]
)

# 2. Upload scene
client = KognicIOClient()
scene_uuid = client.cameras_sequence.create(scene).scene_uuid
print("Scene uploaded, got uuid:", scene_uuid)
```
