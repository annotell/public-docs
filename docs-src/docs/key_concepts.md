---
id: key_concepts
title: Key Concepts
description: Kognic Platform Concepts
slug: /
---

![Kognic](/img/kognic-domain.png)

## Project

Project is the top-most concept when interfacing with the Kognic Platform. It is possible to have multiple ongoing projects, and they act as a container for other Kognic resources.
Project setup is performed by the Kognic Professional Services team during the Guideline Agreement Process (GAP) of a new client engagement.

To use projects within the Kognic APIs, they can be identified using an external identifier.

## Batch

Input batches allow grouping of inputs into smaller batches within a project. By default, every project has at least one input batch.

Ongoing projects can benefit from using batches in two ways

- Group inputs collected at the same time
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

During GAP, projects are divided into different annotation types. E.g. a project consisting of images can be divided
into lane annotation and object detection. Within Kognic this is represented as a **Request**.
A Request can be viewed as a drawing tool - we divide big and complex projects into several independent annotation types.
This makes it possible to:

- Reduce the mental strain on annotators
- Higher bandwidth - more annotators can work on the same data in parallel
- Build simple user interfaces

All of these contribute to a high level of quality while also reducing the total time needed for producing an annotation.

### Guideline

In order for us to produce annotations we need to know what and how to annotate. This type of information is found in something that's called a Guideline. A guideline contains information on what to mark (e.g. vehicles and pedestrians) as well as how (e.g. bounding box). A guideline also includes information about how to interpret the data, i.e. what does it mean that a vehicle is "heavily occluded"?

### Task Definition

Task Definition - Describes what we’re annotating. How many objects? Bounding box, semantic segmentation or lines/splines? What are the properties? Task Definitions are json documents that the Kognic Professional Services team generates from the guideline. The task definition is used by the Kognic App to construct the drawing tool, and can be viewed as the machine readable quivalent of a guideline.

## Scene

Before dealing with different annotation setups, the data to be annotated needs to be uploaded to the Kognic Platform. 
The **scene** specifies how different types of data are tied together and includes resources such as images
and point clouds as well as metadata and calibrations (how sensors relate to each other). We have support for annotating
different types of data, e.g:

- One (or more) images of the same scene from different cameras
- Images from different cameras together with lidar point clouds

One important concept related to scenes is that of the _frame_. A frame is a discrete moment in time, 
consisting of data from different sensors. Scenes can be divided into two categories; _single frame_ and _sequences_ 
(multiple frames). The latter is represented by the scene types ending with `Seq`. These should be used when temporal
information is important for producing the annotation.

### Scene Types
| Type                              | Description                                                                                                                                                                |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Cameras**                       | A single frame consisting of images from 1-9 cameras                                                                                                                       |
| **LidarsAndCameras**              | A single frame consisting of 1-20 lidar point clouds and images from 1-9 cameras                                                                                           |
| **CamerasSeq**                    | Sequence of frames, each frame consisting of images from 1-9 cameras                                                                                                       |
| **LidarsAndCamerasSeq**           | Sequence of frames, consisting of 1-20 lidar point clouds and images from 1-9 cameras                                                                                      |
| **AggregatedLidarsAndCamerasSeq** | Sequence of frames, consisting of 1-20 lidar point clouds and images from 1-9 cameras. Point clouds are aggregated over time, producing one point cloud during annotation. |



## Input

Once a scene has been uploaded to the Kognic Platform, you can create annotation tasks for it. We call these annotation
tasks **inputs**, where each input is added to a request. Separating the input from the scene in this way enables 
efficient reuse of the uploaded data. For instance, multiple inputs can easily be created from the same scene enabling 
different kinds of annotation setups. 

Note that you can specify that inputs should also be created when creating the scene by providing the project/batch
to create them in.


## Annotation

Inputs are annotated in requests, producing _annotations_. Annotations are provided by `kognic-io` as json objects 
on the [ASAM OpenLABEL](openlabel/openlabel-format) format. More information on how to download these annotations along with some examples of 
how to work with them is available in the [Downloading Annotations](kognic-io/annotations.md) chapter.

Apart from `kognic-io`, Kognic also provides a [library](openlabel/python-client) called `kognic-openlabel`,
which makes it easy to parse and work with the OpenLABEL json.

Any conversion away from the OpenLABEL format will have to occur client-side.

