---
title: kognic-openlabel
---

Using this OpenLABEL json schema we have created a python package [`kognic-openlabel`](https://pypi.org/project/kognic-openlabel) 
which makes it easier to work with annotations. The python models the OpenLABEL format as `pydantic` models and can be installed with

```bash
pip install --upgrade kognic-openlabel
```

Since `pydantic` is used, the model contains validation as well as methods for serialization and deserialization.
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
openlabel_annotation = OpenLabelAnnotation.model_validate(openlabel_dict)

# Serialize to json
openlabel_json = openlabel_annotation.model_dump_json(exclude_none=True)

# Deserialize json
openlabel_annotation = OpenLabelAnnotation.model_validate_json(openlabel_json)

# Serialize to dict
openlabel_dict = openlabel_annotation.model_dump(exclude_none=True)
```

