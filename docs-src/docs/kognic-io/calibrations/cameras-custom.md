---
title: Custom Camera Calibrations
---


:::note
This feature is new in version 1.8.0 of kognic-io and some parts require optional dependencies. Run `pip install kognic-io[wasm]` to install it.
:::

If your calibration is not in the list of supported standard camera calibrations, you can provide a custom calibration. The table below
show the attributes of the `CustomCameraCalibration` object. The `wasm_base64` attribute is a base64 encoded string of the
WebAssembly module that implements the calibration. The `test_cases` attribute is a list of `TestCase` objects that are used
to validate the calibration during creation. It is recommended to provide a few test cases to make sure that the
calibration is correct. 


| Key                   | Value                         | Parameters         |
|:----------------------|:------------------------------|:-------------------|
| `rotation_quaternion` | A `RotationQuaternion` object | `w`, `x`, `y`, `z` |
| `position`            | A `Position` object           | `x`, `y`, `z`      |
| `image_width`         | Integer                       | NA                 |
| `image_height`        | Integer                       | NA                 |
| `wasm_base64`         | String                        | NA                 |
| `test_cases`          | A list of `TestCase` objects  | point3d, point2d   |


The `CustomCameraCalibration` object can conveniently be instantiated directly from the binary or 
a wasm-file:
```python
calibration_file = CustomCameraCalibration.from_file("/path/to/calibration.wasm", ...)
calibration_binary = CustomCameraCalibration.from_bytes(b"...", ...)
```

We provide a set of utilities that will make it easier to work with the WebAssembly module. More specifically we provide
validation code and compilation code from a few different languages to WebAssembly. The code is available both as python
functions and via the `kognicutil` cli.



## The WebAssembly module

The WebAssembly must follow a strict interface where the module exports a function called `project_point_to_image`. The
function must take three arguments of type `float64` and return two values of type `float64`. Thus, the WebAssembly text representation of
this interface is `func (param f64 f64 f64) (result f64 f64)`. The three arguments are the x, y and z coordinates of 
the 3D point. The two return values are the x and y coordinates of the projected point in the image plane. WebAssembly
doesn't support multiple return values by default but this can be enabled with the [multi-value](https://github.com/WebAssembly/multi-value)
proposal.

If the point is not within the field of view, the function should return [NaN](https://en.wikipedia.org/wiki/NaN) for 
both the x and y coordinates.


## Validation

:::note
This requires `wasmtime` to be installed which is an optional of dependency kognic-io. Run `pip install kognic-io[wasm]` to
install it.
:::

We provide validation code both as python functions and via the `kognicutil` cli. We validate things such as but not limited to
1. The module can be loaded
2. The function exists and has the correct signature
3. That a point can be projected using the module
4. That points are projected correctly if test cases are provided

In python there are three different ways to validate a calibration

```python
import kognic.io.tools.calibration.validation as wasm_validation
from kognic.io.model.calibration.camera.custom_camera_calibration import CustomCameraCalibration, Point2d, Point3d, TestCase

test_cases = [
    TestCase(
        point3d=Point3d(x=1.0, y=2.0, z=3.0),
        point2d=Point2d(x=2.0, y=5.6)
    ),
    TestCase(
        point3d=Point3d(x=1.0, y=1.0, z=-1.0),
        point2d=Point2d(x=float("nan"), y=float("nan")) # point is outside field of view
    )
]

wasm_file = "/path/to/calibration.wasm"
calibration = CustomCameraCalibration.from_bytes(wasm_file, test_cases=test_cases, ...)
wasm_bytes = calibration.to_bytes()

# Validate the calibration object
wasm_validation.validate_custom_camera_calibration(calibration, test_cases=test_cases)

# Validate the wasm file
wasm_validation.validate_wasm_file(wasm_file, test_cases=test_cases)

# Validate the wasm binary
wasm_validation.validate_wasm_bytes(wasm_bytes, test_cases=test_cases)
```

The `kognicutil` cli can be used as follows
```bash
kognicutil wasm validate calibration.wasm
```


## Compilation

:::note
It is recommended to keep the wasm file as small as possible. Try to avoid dependencies that are not needed. For example,
it may be preferred to implement some mathematical functions yourself instead of using the standard library.
:::

As stated above the WebAssembly module must follow a strict interface and compilation requires the multi-value proposal.
We provide a set of utilities that will make it easier to compile the WebAssembly module from a few languages, see table below. 

| **Language** | **Target**  | **Compilation tool** |
|--------------|-------------|----------------------|
| Rust         | *.rs        | rustc                |
| Rust (Cargo) | Cargo.toml  | cargo                |
| C++          | *.cc, *.cpp | emscripten           |
| C            | *.c         | emscripten           |

The utilities are available both as python functions and via the `kognicutil` cli. From Python, you can compile the module
with 

```python
from kognic.io.tools.calibration.compilation import compile_to_wasm
wasm_binary = compile_to_wasm("path/to/source")
```

The returned binary can then be used to create a `CustomCameraCalibration` object. If the `output_wasm` parameter is passed,
the binary will be saved to the specified path. The `kognicutil` cli can be used as follows
```bash
kognicutil wasm compile path/to/source path/to/output.wasm
```

Note that, validation is run by default after compilation. This can be disabled with the `--skip-validation` flag.



Calibration parameters have to be embedded in the binary so that they can be used by the WebAssembly module. Try to 
pre-compute as much as possible to increase the speed of the projection function at runtime.

Below follows examples of a simplified version of the pinhole calibration in a few different languages.

### Example: Rust

A [Rust file](https://github.com/annotell/kognic-io-examples-python/tree/master/examples/calibration/custom/pinhole.rs)
can be compiled with
```bash
kognicutil wasm compile path/to/source.rs path/to/output.wasm
```

Note that `panics` are not supported and compilation will fail if the code contains it.


#### Rust with Cargo

A [Rust module with Cargo](https://github.com/annotell/kognic-io-examples-python/tree/master/examples/calibration/custom/pinhole-rust-cargo)
can be compiled with
```bash
kognicutil wasm compile path/to/source/Cargo.toml path/to/output.wasm
```

Note that it is important to specify that the library is a `cdylib` and it is also recommended to set `strip = true` to
reduce the size of the WebAssembly module. This is done by adding the following to the `Cargo.toml` file
```toml
[lib]
crate-type = ["cdylib"]

[profile.release]
strip = true
```


### Example: C++

A [C++ file](https://github.com/annotell/kognic-io-examples-python/tree/master/examples/calibration/custom/pinhole.cc)
can be compiled with
```bash
kognicutil wasm compile path/to/source.cc path/to/output.wasm
```

or with
```bash
kognicutil wasm compile path/to/source.cpp path/to/output.wasm
```


### Example: C

A [C++ file](https://github.com/annotell/kognic-io-examples-python/tree/master/examples/calibration/custom/pinhole.c)
can be compiled with
```bash
kognicutil wasm compile path/to/source.c path/to/output.wasm
```
