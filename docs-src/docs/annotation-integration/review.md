---
title: Review
---

A review is a decision that determines whether an annotation is of sufficient quality or if it needs 
improvement. In order to facilitate efficient improvements, the person or system that made the decision can provide 
[feedback](#feedback) data that details potential errors or mistakes. Please refer to our [user documentation](https://docs.kognic.com/AHwD-introduction) 
regarding feedback to gain insight on how these concepts are used in the platform, note that these describe the full
set of possibilities and workflows for dealing with reviews and feedback - the possibilities enabled by this integration
are currently somewhat limited, as detailed below. 

## Posting a review

The current integration capabilities only allow posting reviews for delivered annotations. It is only available in 
requests where your organization is the [producer](https://docs.kognic.com/request-details#HXuNx). The annotations are 
identified using their open label UUID that can be found in the metadata (and in the file name) of 
[downloaded annotations](../download-annotations/download-annotations.mdx).


When posting a review, the API expects feedback data as well as a boolean `accepted` that indicates whether the 
quality is perceived as sufficient or not. The API also expects an enum `workflow` that details how the improvement 
should happen. For a rejected review and the workflow 'correct', a single correction task is triggered, with no 
follow-up Review task. The completed Correction task becomes the new delivered Annotation. 

:::caution
This integration API is currently limited to rejecting delivered annotations, the possible values of these input 
parameters are thus limited to `accepted=false` and `workflow="correct"`. They are included in the interface at this
stage in order to allow future expansions on the available use cases, workflows and actions.
:::

A successful review post will return a UUID that identifies the review, and that can be used to fetch the posted
feedback data. This will also create a task according to the chosen workflow. Depending on project set up, there might 
be a need for this to be coordinated with the project's managers.

[Here](https://github.com/annotell/kognic-io-examples-python/blob/master/examples/add_review.py) is an example using kognic-io.

## Posting a partial review

A partial review is an incomplete review with optional feedback data, this capability may be used in order to achieve 
one or more of the following:
* Prepare a review task with manual or machine generated feedback 
* Select what should be reviewed

This feature is available in requests where your organization is the 
[producer](https://docs.kognic.com/request-details#HXuNx) or the [owner](https://docs.kognic.com/request-details#Qm7yR). 
Like the capability to post a complete review, this feature is currently only available for delivered annotations.

When a partial review is posted, a review task will be created for the annotation. This review task will contain the 
feedback that may have been supplied when posting the partial review. The reviewer can then delete or invalidate any 
feedback they disagree with, or add their own feedback. It is currently not possible to override the workflow of a 
partial review, the default workflow is a review loop - where the correction of a rejected review task will be followed 
by a new review task. If the review is accepted by the reviewer, the annotation will be delivered again, updated to 
account for any potential changes the reviewer might have done.

## Feedback

A feedback item details something noteworthy in an annotation. In order to do this the following information is 
available to add, and will be available for annotators when improving the annotation:
* **Error type ID** - a UUID selected from the list of [available error types](https://annotation-integration.app.kognic.com/api#/Reviews/getErrorTypes)
* **Description** - a string describing what should be improved
* **Sensor ID** - the identifier of the [sensor](../kognic-io/overview#sensor-specification) where the error appears
* **Frame ID** - the identifier of the [frame](../kognic-io/overview#sequential-frames) the error appears
* **Object ID** - the identifier of a particular object that is subject to this particular feedback
* **Pin** - a pointer to a specific area where something is of interest, this can be used to indicate missing objects (a 
pin contains mandatory x and y coordinates with an optional z coordinate, the coordinate unit in images are pixels and 
is sensor specific in 3d data)
* **Suggested properties** - when inappropriate property values are discovered, this field can be used to indicate a more 
appropriate value
* **Metadata** - this field may contain any data, it could be used to identify the version of the system that generated the 
feedback