---
title: Review
---

A review is a decision that determines whether an [annotation](../#annotation) is of sufficient quality or if it needs 
improvement. In order to facilitate efficient improvements, the person or system that made the decision can provide 
[feedback](#feedback) data that details potential errors or mistakes.

## Posting a review

The current integration capabilities only allow posting reviews for delivered annotations. The annotations are 
identified using their open label UUID that can be found in the metadata (and in the file name) of [downloaded 
annotations](../kognic-io/annotations).

When posting a review, the API expects feedback data as well as a boolean `accepted` that indicates whether the 
quality is perceived as sufficient or not. The API also expects an enum `workflow` that details how the improvement 
should happen. 

:::caution
This integration API is currently limited to reviewing delivered annotations, the possible values of these input 
parameters are thus limited to `accepted=true` and `workflow="correct"`. They are included in the interface at this
stage in order to allow future expansions on the available use cases, workflows and actions.
:::

A successful review post will return a UUID that identifies the review, and that can be used to fetch the posted
feedback data. This will also create a task according to the chosen workflow. Depending on project set up, there might 
be a need for this to be coordinated with the project's managers.

## Feedback

A feedback item details something noteworthy in an annotation. In order to do this the following information is 
available to add, and will be available for annotators when improving the annotation:
* **Error type ID** - a UUID selected from the list of [available error types](https://shape-integration.app.kognic.com/api#/Reviews/getErrorTypes)
* **Description** - a string describing what should be improved
* **Sensor ID** - the identifier of the [sensor](../kognic-io/overview#sensor-specification) where the error appears
* **Frame ID** - the identifier of the [frame](../kognic-io/overview#sequential-frames) the error appears
* **Object ID** - the UUID of a particular object that is subject to this particular feedback
* **Pin** - a pointer to a specific area where something is of interest, this can be used to indicate missing objects (a 
pin contains mandatory x and y coordinates with an optional z coordinate, the coordinate unit in images are pixels and 
is sensor specific in 3d data)
* **Suggested properties** - when inappropriate property values are discovered, this field can be used to indicate a more 
appropriate value
* **Metadata** - this field may contain any data, it could be used to identify the version of the system that generated the 
feedback