---
title: Introduction
---

In order to enable a programmatic interface to the ground truth production process, an HTTP API is made available. This 
page aims at describing how to work with these integrations, what the available possibilities are, and the concepts and 
identifiers used.

The current possibilities are limited to reviewing delivered annotations.

## Prerequisites

Before you begin, make sure you have:

* An account with permissions to use our API
* Generated API credentials. See [API Credentials](../kognic_apis.md/#generating-credentials).
* Installed our Python 3 SDK for authentication - [kognic-auth](https://pypi.org/project/kognic-auth/)

## No API Client Available

At the moment we do not provide an API client for this integration. Instead, we'll provide examples of how you can 
interact with our API. 

This page will also assume that the user has access to at least one project where at least one input batch has been 
uploaded. (See the client docs regarding these concepts [here](../kognic-io/project).)

## Endpoints
You can discover the list of accessible endpoints within our 
[swagger documentation](https://annotation-integration.app.kognic.com/api).

## Request Example
Here's an example using the kognic-auth library to fetch the [feedback error types](review#feedback) available to the user:

```python
import requests

from kognic.auth.requests.auth_session import RequestsAuthSession

base_url = "https://annotation-integration.app.kognic.com/v1/"
client = RequestsAuthSession()

try:
    response = client.session.get(base_url + "reviews/error-types")
    response.raise_for_status()
    data = response.json()
    print(data)
except requests.exceptions.RequestException as e:
    print(f"Request error: {e}")
```