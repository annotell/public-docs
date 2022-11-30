---
title: annotell-input-api to kognic-io
---

## Overview

In September 2022 Annotell rebranded as Kognic.

We took opportunity to make some changes to our public Python libraries during the transition. Some of these changes are incompatible with code written against the last version of `annotell-input-api` (1.3.1 at time of writing).

`annotell-input-api` will now only be updated to fix critical bugs. All users are encouraged to migrate to `kognic-io` as soon as possible.

## Breaking changes

### New packages

Packages under `annotell.input_api` were moved to `kognic.io`. In most cases, updating imports is all that will be needed for client code to continue working.

### Packaging and imports

Previously some classes could be imported via multiple packages due to how we had used `*` imports internally. The `kognic.io.model.*` subpackages are now stricter about which internal classes they export than their equivalents in `annotell.input_api.model.*`

It is no longer possible to, for example, use `from kognic.io.model.input.lidars_and_cameras import *` or `from kognic.io.model.lidars_and_cameras import IMUData` to import `IMUData` along with all other classes related to Lidar+Camera scenes.

:::info

Replace instances of `from annotell.input_api.model.input.xxx import *` with imports for specific classes from `kognic.io.model.xxx` packages, or with imports from other packages in cases where the import has broken.

:::

### Removal of legacy code

Legacy calibration models were removed, having been deprecated since 2021-11.

:::info

Use the typed calibrations from `kognic.io.model.calibration.camera` and `kognic.io.model.calibration.lidar` instead of the generic `annotell.input_api.model.sensors.LidarCalibration` and `CameraCalibration`.

:::

The `get_annotations` method was removed, having been deprecated since 2021-09. 

:::info

Use `get_project_annotations` instead.

:::


### Named arguments

Many scene model objects such as `Image` and `PointCloud` were converted to use pydantic for validation. These classes must now be instanced by passing *all* non-defaulted properties as named arguments (kwargs). e.g. an `Image` now requires both `filename` and `sensor_name` to be specified.

:::info

-  Ensure named constructor args are present for all non-defaulted fields for model classes like `Image` and `PointCloud`.
    -  For instance `filename` was not previously required to be a named arg, now it is.
    
:::

## Non-breaking changes

### Environment variables

Environment variables used by our libraries which are named with the prefix `ANNOTELL_` now have a `KOGNIC_` equivalent, e.g. `ANNOTELL_CREDENTIALS`. The old names will continue to work for the time being, with the library code preferring the newer name if both are set. Future changes are not guaranteed to be backwards compatible (e.g. introduction of new variables, or renaming, may not be applied to both prefixes). We therefore recommend that any scripts are updated at the first opportunity.

### Validation

Many scene model objects (e.g. `Image`, `PointCloud`, `LidarsAndCameras`) have been converted from Python `@dataclass` to Pydantic models.

Client-side validation errors will now be reported differently for these classes. Validation is stricter but the error messages are also more descriptive.

Typically validation will be failed because of significant problems: using the wrong datatype for a field, or missing required parameters for an object. Server-side validation is still used to check that the content/values of the input are sound.
