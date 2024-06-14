---
title: Proxy Configuration
---

If your organizations' network policy requires HTTP(S) traffic to be proxied out via a specific host, then you should configure this via your OS or execution environment. `kognic-io` uses Python's `urllib` which [will pick up the proxy configuration from your OS and environment variables](https://docs.python.org/3/library/urllib.request.html#urllib.request.getproxies).

The correct proxy host/address to use depends on the network configuration within your organization, so reach out to your internal IT support for details.

For example:

```
export HTTPS_PROXY='http://10.9.8.7:1234'
```