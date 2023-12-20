---
id: kognic-apis
title: Kognic APIs
description: Overview of Kognic API usage including authentication
---

# API Client Overview

Kognic provides HTTP APIs to our client-facing services, and an API client library ([`kognic-io`](https://pypi.org/project/kognic-io/)), to wrap basic API calls and simplify calling the APIs from Python code.

## Authentication
Authentication is handled by [kognic-auth](https://pypi.org/project/kognic-auth/), a Python 3 library providing foundations for Kognic Authentication on top of the requests library.

The authentication builds on the standard Oauth 2.0 Client Credentials flow. There are a few ways to provide auth credentials to our api clients. Kognic Python clients such as in  kognic-query or kognic-io accept an auth parameter that can be set explicitly or you can omit it and use environment variables.

To create an authenticated kognic-io client, simply do this:

```python
from kognic.io.client import KognicIOClient

api_client = KognicIOClient()
```
This uses the credentials found in `KOGNIC_CREDENTIALS` environment variable. Or override explicitly:

```python
from kognic.io.client import KognicIOClient

api_client = KognicIOClient(auth="~/.config/kognic/credentials.json")
```

There are a few ways to set your credentials in auth.

- Set the environment variable `KOGNIC_CREDENTIALS` to point to your Kognic Credentials file. The credentials will contain the Client Id and Client Secret.
- Set to the credentials file path like `auth="~/.config/kognic/credentials.json"`
- Set environment variables `KOGNIC_CLIENT_ID` and `KOGNIC_CLIENT_SECRET`
- Set to credentials tuple `auth=(client_id, client_secret)`

API clients such as the KognicIOClient accept this auth parameter.
Under the hood, they all use the AuthSession class which is implements a requests session with automatic token refresh.

## Generating Credentials

The credentials file, including the Kognic client ID and the Kognic client secret, can be generated in the [Kognic web application](https://app.kognic.com) by clicking on "Api Credentials..." in the user menu, followed by clicking on the "Generate Credentials" button.

![Generate API credentials app screenshot](../static/img/generate-api-credentials.png)


## Proxy Configuration

If your organizations' network policy requires HTTP(S) traffic to be proxied out via a specific host, then you should configure this via your OS or execution environment. `kognic-io` uses Python's `urllib` which [will pick up the proxy configuration from your OS and environment variables](https://docs.python.org/3/library/urllib.request.html#urllib.request.getproxies).

```
export HTTPS_PROXY='http://10.9.8.7:1234'
```
