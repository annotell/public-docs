---
title: Introduction
---

:::caution
The dataset API is in an early release stage and might be subject to changes.
:::

## Prerequisites

Before you begin, make sure you have:

* Access to the refinement tool
* An account with permissions to use our API
* Generated API credentials. See [API Credentials](../kognic_auth.md/#generating-credentials)
* Installed our Python 3 SDK for authentication - [kognic-auth](https://pypi.org/project/kognic-auth/)

## No API Client Available

At the moment we do not provide an API client for the refinement tool. Instead, we'll provide examples
of how you can interact with our API.

## Endpoints
You can discover the list of accessible endpoints within our [swagger documentation](https://dataset.app.kognic.com/api).

## Request Example
Here's an example using the kognic-auth library to list all datasets available to the user:

```python
import requests

from kognic.auth.requests.auth_session import RequestsAuthSession

base_url = "https://dataset.app.kognic.com/v1/"
client = RequestsAuthSession()

try:
    response = client.session.get(base_url + "datasets")
    response.raise_for_status()
    data = response.json()
    print(data)
except requests.exceptions.RequestException as e:
    print(f"Request error: {e}")
```
