---
title: Lidars and Cameras
---

A `LidarsAndCameras` input consists of a _single_ frame which contains 1-9 cameras images as well as 1-20 point clouds. For more documentation on what each field corresponds to in the `LidarsAndCameras` object please check the section related to [Input Overview](/docs/kognic-io/overview).

```python reference
https://github.com/annotell/annotell-python/blob/master/kognic-io/examples/lidars_and_cameras.py
```

:::tip Use dryrun to validate input
Setting `dryrun` parameter to true in the method call, will validate the input using the Input API but not create any inputs.
:::
