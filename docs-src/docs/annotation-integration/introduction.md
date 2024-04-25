---
title: Introduction
---

In order to enable a programmatic interface to the ground truth production process, an HTTP API is made available as 
well as some resources in our [Kognic IO](../kognic-io/project) python client. This page aims at describing how to work 
with these integrations, what the available possibilities are, and the concepts and identifiers used.

The current possibilities are limited to reviewing delivered annotations.

## Prerequisites

Before you begin, make sure you have:

* An account with permissions to use our API
* For integrations based on the Kognic IO python client: Generated API credentials. See [API Credentials](../kognic_apis.md/#generating-credentials).

This page will also assume that the user has access to at least one project where at least one input batch has been 
uploaded. (See the client docs regarding these concepts [here](../kognic-io/project).)

## Endpoints
You can discover the list of accessible endpoints within our 
[swagger documentation](https://shape-integration.app.kognic.com/api).