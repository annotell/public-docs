```python
scene = client.scene.get_scenes_by_uuids([scene_uuid])[0]
print(f"Url: {scene.view_link}")
```