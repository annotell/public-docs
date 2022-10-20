---
id: kognic-auth
title: Kognic Auth
description: How to authenticate with Kognic APIs
---
Authentication is handled by [kognic-auth](https://pypi.org/project/kognic-auth/), a Python 3 library providing foundations for Kognic Authentication on top of the requests library.

Builds on the standard Oauth 2.0 Client Credentials flow. There are a few ways to provide auth credentials to our api clients. Kognic Python clients such as in  kognic-query or kognic-io accept an auth parameter that can be set explicitly or you can omit it and use environment variables.

To create an authenticated input-api client, simply do this:

```python
from kognic.io.client import InputApiClient

api_client = InputApiClient()
```
This uses the credentials found in `KOGNIC_CREDENTIALS` environment variable. Or override explicitly:

```python
from kognic.io.client import InputApiClient

api_client = InputApiClient(auth="~/.config/kognic/credentials.json")
```

There are a few ways to set your credentials in auth.

- Set the environment variable `KOGNIC_CREDENTIALS` to point to your Kognic Credentials file. The credentials will contain the Client Id and Client Secret.
- Set to the credentials file path like `auth="~/.config/kognic/credentials.json"`
- Set environment variables `KOGNIC_CLIENT_ID` and `KOGNIC_CLIENT_SECRET`
- Set to credentials tuple `auth=(client_id, client_secret)`

API clients such as the InputApiClient accept this auth parameter.
Under the hood, they all use the AuthSession class which is implements a requests session with automatic token refresh.




