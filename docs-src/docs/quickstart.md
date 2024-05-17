---
id: quickstart
title: Quickstart
slug: /quickstart
---

# Quickstart

## Install the client

When interacting with the Kognic Platform, you will often do so via [kognic-io](https://pypi.org/project/kognic-io/)
which is a Python client library for the Kognic APIs. You can install it via pip:

```bash
pip install kognic-io
```

:::info

`kognic-io` uses [kognic-auth](https://pypi.org/project/kognic-auth/) under the hood for authentication. For the cases where you don't use `kognic-io`, you can use kognic-auth directly.

:::


## Setup and verify credentials

Generate and download credentials from the Kognic Platform according to [this](./kognic-apis#generating-credentials) guide. Then you can set the environment variable `KOGNIC_CREDENTIALS` to point to it. Assuming that you save your credentials in `~/.config/kognic/credentials.json` you can do this by running
```bash
export KOGNIC_CREDENTIALS=~/.config/kognic/credentials.json
```
in the terminal. To verify that they are correct you can simply list projects:

```python
from kognic.io.client import KognicIOClient

client = KognicIOClient(auth = "~/.config/kognic/credentials.json")

# Verify that the client is authenticated by listing projects
client.project.get_projects()
print("success")
```

You should now be set up to interact with the Kognic Platform.

## Next steps

- [Upload your first scene](./upload-your-first-scene): Quick guide on how to upload data to the Kognic Platform
- [Key concepts](./key_concepts): Learn about the key concepts of the Kognic Platform