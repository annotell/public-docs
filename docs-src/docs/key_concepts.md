---
id: key_concepts
title: Key Concepts
description: Kognic Platform Concepts
slug: /key-concepts
---

![Kognic](/img/kognic-domain.png)

## Project

**Project** is the top-most concept when interfacing with the Kognic Platform. It is possible to have multiple ongoing projects, and they act as a container for other Kognic resources.
Project setup is usually performed by the Kognic Professional Services team during the Guideline Agreement Process (GAP) of a new client engagement.

Within the Kognic APIs, projects are identified using an external identifier.

## Batch

Input **batches** allow grouping of input data into smaller batches within a project. By default, every project has at least one input batch.

Ongoing projects can be benefited from having multiple batches in two ways:

- Group input data that are collected during a certain time interval
- Perform guideline or task definition changes without the need for retroactive changes.

### Batch Status

| Status      | Description                                                                                                          |
|-------------|----------------------------------------------------------------------------------------------------------------------|
| pending     | Batch has been created but is still not fully configured by Kognic. Either during project setup or requested changes |
| open        | Batch is open for new inputs                                                                                         |
| ready       | Batch has been published and no longer open for new inputs.                                                          |
| in-progress | Kognic has started annotation of inputs within the batch.                                                            |
| completed   | Annotations has been completed.                                                                                      |

## Request

During GAP, projects can have several annotation types as the end goal. For example, a project consisting of images can be assigned
for both lane detection and object annotation. Within Kognic, a **Request** represents a specific annotation goal for a given input.
We divide big and complex projects into several independent annotation types.
This makes it possible to:

- Reduce the cognitive load on the annotators
- More annotators can work on the same data in parallel
- Simplify user interfaces

All of these contribute to a high level of quality while also reducing the total time needed for producing an annotation.

### Guideline

In order to produce annotations, one needs to know what to annotate and how. This type of information is found in **Guideline**. A guideline defines what specific object to mark (e.g. vehicles and pedestrians), as well as how (e.g. bounding box). A guideline also includes detailed information about how to interpret the data, e.g. what it means by a vehicle is "heavily occluded".

### Task Definition

**Task Definition** describes what should/could be annotated. How many object types? Bounding box, semantic segmentation or lines/splines for each object type? What are the properties for each object type? Task definitions are json files that the Kognic Professional Services team generates from the guideline. The task definition is then used by the Kognic App to construct the appropriate drawing tool. In other words, task definition can be understood as the machine readable quivalent of a guideline.

## Scene

Before setting up any annotation task, the raw data needs to be correctly uploaded to the Kognic Platform. 
The **scene** specifies how data from different sources are combined together. Resources are images
and point clouds, as well as metadata and calibrations (define sensors' properties). We support different types of setup, for example:

- Image(s) from a (multiple) camera(s)
- Image(s) from camera(s) combined with lidar point clouds

Another concept related to scene is **frame**. A frame is a discrete moment of a scene in time. Scenes can be either _single frame_ or _sequence_ (multiple frames). Sequence should be used when temporal
information is important for producing the annotation.

### Scene Types
| Type                              | Description                                                                                                                                                                |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Cameras**                       | A single frame consisting of image(s) from 1-9 cameras                                                                                                                       |
| **LidarsAndCameras**              | A single frame consisting of 1-20 lidar point clouds and image(s) from 1-9 cameras                                                                                           |
| **CamerasSeq**                    | A sequence of frames, each frame consisting of image(s) from 1-9 cameras                                                                                                       |
| **LidarsAndCamerasSeq**           | A sequence of frames, each frame consisting of 1-20 lidar point clouds and image(s) from 1-9 cameras                                                                                      |
| **AggregatedLidarsAndCamerasSeq** | A sequence of frames, each frame consisting of 1-20 lidar point clouds and image(s) from 1-9 cameras. However, point clouds are aggregated over time, producing a unified point cloud. |



## Input

Once a scene has been uploaded to the Kognic Platform, one can create annotation tasks as **inputs** where each input is associated to a request. Differenciate input from scene enables 
efficient reuse of the uploaded data. For instance, multiple inputs can be created from the same scene enabling 
different kinds of annotation setups. 

Note that one can create an input simultaneously when creating a scene by providing the project/batch that it should be associated to, see examples in [Working with Scenes and Inputs](kognic-io/working_with_scenes_and_inputs.md).


## Annotation

An **annotation** is produced when inputs are successfully annotated in a request. Annotations are provided by `kognic-io` API as json objects 
in [ASAM OpenLABEL](openlabel/openlabel-format) format. More information on how to download these annotations along with some examples of 
how to work with them is available in the [Downloading Annotations](kognic-io/annotations.md) chapter.

Apart from `kognic-io` API, Kognic also provides a [library](openlabel/python-client) called `kognic-openlabel`,
which makes it easy to parse and work with the OpenLABEL json objects.

