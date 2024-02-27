---
title: Errors & Troubleshooting
description: Dealing with Errors
---
# Errors & Troubleshooting

## HTTP Error Handling

When the client sends a http request to the API and waits until it receives a response. If the response code is `2xx` 
\(the status code for a successful call\) the client converts the received message into a python object which can be 
viewed or used. However, if the API responds with an error code \(`4xx` or `5xx`\) the python client will raise an error. 
It's up to the user to decide if and how they want to handle this error.

## Request Timeouts

When uploading scenes with Kognic IO Client it is sometimes that case that network conditions lead to timeout errors. Kognic IO uses asynchronous IO to multiplex uploads and make best use of the available bandwidth, and will retry failed connections many times, but sometimes some steps need to be taken on the client side to control the behaviour and rule out certain issues:

* Lower the total number of connections that Kognic IO may open at one time via the constructor param `KognicIOClient(max_connections = N)`. This affects the maximum size of the internal connection pool. With the max set to 1, the uploads are effectively serial.
* Increase the timeout for connections that Kognic IO opens via the constructor param `KognicIOClient(timeout = N)`, in seconds. This affects the connect and read timeout of connections. This will allow more time for connections to be established across the internet and for the server to send an initial response.
