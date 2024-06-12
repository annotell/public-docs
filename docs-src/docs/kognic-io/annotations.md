---
title: Downloading Annotations
---

Annotations are made available for each [scene](overview) and [annotation type](annotation_types) as soon as they are quality assured 
by the Kognic platform. This section describes how these annotations can be downloaded.

## v1.1.x

This section describes how you can fetch annotations on the [OpenLABEL format](../openlabel/openlabel-format). These
annotations are automatically available as soon as they are finished and can be downloaded either for an entire
project/batch or individually via the methods listed below. All methods return either a single `Annotation` object or
a generator yielding `Annotation` objects, which contains identifiers as well as a dictionary containing the OpenLABEL
json:

```python
class Annotation(BaseSerializer):
    scene_uuid: str
    annotation_type: str
    created: datetime
    content: Optional[Dict]
```

The OpenLABEL json can be used as it is or be converted into a pythonic object using the `kognic-openlabel` library, described
[here](../openlabel/python-client).

### Get Single Annotation

#### Using scene and annotation type

```python reference
https://github.com/annotell/kognic-io-examples-python/blob/master/examples/get_annotation.py#L8-L10
```

This method returns a single `Annotation` object, containing the OpenLABEL json, using a scene uuid and an annotation type.

### Get Annotations for a Project or Batch

```python reference
https://github.com/annotell/kognic-io-examples-python/blob/master/examples/get_project_annotations.py#L10-L12
```

This example fetches annotations for an entire project or batch. The `run()` method returns a generator which will yield `Annotation` objects for all finished annotations
, for the given `project`, `batch` and `annotation_type`, and in the end prints all of these annotations.

## Common use cases

### Download and convert a single annotation

This example shows a common workflow where an annotation is fetched, parsed into an `OpenLabelAnnotation` and then
converted into a custom annotation format.

```python
from kognic.io.client import KognicIOClient
from kognic.openlabel.models import OpenLabelAnnotation
from pydantic import BaseModel

class CustomAnnotationFormat(BaseModel):
    ...

    @staticmethod
    def from_openlabel(openlabel_annotation: OpenLabelAnnotation):
        pass


client = KognicIOClient()

annotation = client.annotation.get_annotation(
    scene_uuid='<scene-uuid-identifier>',
    annotation_type='<annotation-type>'
)

openlabel_annotation = OpenLabelAnnotation.parse_obj(annotation.content) # Create pydantic object
converted_annotation = CustomAnnotationFormat.from_openlabel(openlabel_annotation=openlabel_annotation) # Convert annotation
converted_dict = converted_annotation.dict(exclude_none=True) # Serialize to dict (or json)
```

### Download and save annotations to a zip file

In this example, all annotations are fetch for a project batch and then converted saved into a zip file. Note that the
save_file must have the extension `.zip`.

```python
import io, json, zipfile
import kognic.io.client as KognicIOClient

client = KognicIOClient()

zip_buffer = io.BytesIO()
with zipfile.ZipFile(zip_buffer, 'a', zipfile.ZIP_DEFLATED, False) as zip_file:
    for annotation in client.annotation.get_project_annotations(
            project="Project-identifier",
            batch="Batch-identifier",
            annotation_type="Annotation-Type-identifier"
    ):
        encoded_annotation = io.BytesIO(json.dumps(annotation.content).encode())
        zip_file.writestr(f"{annotation.scene_uuid}.json", encoded_annotation.getvalue())

with open('path/to/annotations.zip', 'wb') as f:
    f.write(zip_buffer.getvalue())
```
