---
title: The Python client
---

Using this schema we have developed a python client `kognic-openlabel` which makes it easier
to work with annotations.
The python client models the OpenLABEL format as `pydantic` models. It is publicly available
[here](https://pypi.org/project/kognic-openlabel) and can be installed with

```bash frame="none"
pip install kognic-openlabel
```

Since `pydantic` is used, the model contains validation as well as methods for serialization and deserialition.
Below are examples of how you can easily change between different formats

```python
openlabel_dict = {
    "openlabel": {
        "metadata": {
            "schema_version": "1.0.0"
        }
    }
}

from kognic.openlabel.models import OpenLabelAnnotation

# Deserialize dict
openlabel_annotation = OpenLabelAnnotation.parse_obj(openlabel_dict)

# Serialize to json
openlabel_json = openlabel_annotation.json(exclude_none=True)

# Deserialize json
openlabel_annotation = OpenLabelAnnotation.parse_raw(openlabel_json)

# Serialize to dict
openlabel_dict = openlabel_annotation.dict(exclude_none=True)
```

