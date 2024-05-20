```python
from kognic.io.client import KognicIOClient
from kognic.io.model.scene.cameras_sequence import CamerasSequence, Frame
from kognic.io.model.scene.resources import Image

# 1. Build scene object
scene = CamerasSequence(
    external_id=f"my-first-scene",
    frames=[
        # Relative timestamps must be unique and strictly increasing
        Frame(
            relative_timestamp=0,
            images=[Image(filename="path/to/image1.jpg")],
        ),
        Frame(
            relative_timestamp=100,
            images=[Image(filename="path/to/image2.jpg")],
        ),
        Frame(
            relative_timestamp=200,
            images=[Image(filename="path/to/image3.jpg")],
        ),
    ]
)

# 2. Upload scene
client = KognicIOClient()
resp = client.cameras_sequence.create(scene)
print("Scene uploaded, got uuid:", resp.scene_uuid) 
```