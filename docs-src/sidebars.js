module.exports = {
  docs: [
    {
      "Getting started": [
        "getting-started/quickstart",
        {
          "Indepth theory": [
            "kognic-apis",
            "key_concepts",
            "getting-started/data-reqs",
          ],
        },
      ],
    },
    {
      "Upload data": [
        {
          Guides: [
            "upload-data/upload-your-first-scene",
            {
              "More examples": [
                "kognic-io/scenes/cameras",
                "kognic-io/scenes/lidars_and_cameras",
                "kognic-io/scenes/cameras_seq",
                "kognic-io/scenes/lidars_and_cameras_seq",
                "kognic-io/scenes/aggregated_lidars_and_cameras_seq",
                "upload-data/upload-zod-data",
              ],
            },
            "upload-data/view-uploaded-scene",
          ],
        },
        {
          "Indepth theory": [
            {
              Scenes: [
                "kognic-io/overview",
                "kognic-io/scenes/lidars_with_imu_data",
                "kognic-io/feature_flags",
                "kognic-io/working_with_scenes_and_inputs",
                "kognic-io/file_formats",
              ],
            },
            {
              Calibrations: [
                "kognic-io/calibrations/overview",
                "kognic-io/calibrations/lidars",
                "kognic-io/calibrations/cameras-standard",
                "kognic-io/calibrations/cameras-custom",
              ],
            },
            "kognic-io/pre_annotations",
            "kognic-io/coordinate_systems",
          ],
        },
      ],
    },
    {
      Workflow: ["workflow/workflow"],
    },
    {
      "Download annotations": [
        "download-annotations/download-annotations",
        {
          "Indepth theory": [
            "openlabel/openlabel-format",
            "openlabel/python-client",
          ],
        },
      ],
    },
    {
      "Dataset exploration": [
        "dataset-exploration/introduction",
        "dataset-exploration/prediction-format",
        "dataset-exploration/uploading-predictions",
        "dataset-exploration/understand-dataset-content",
      ],
    },
    {
      "Annotation integration": [
        "annotation-integration/introduction",
        "annotation-integration/review",
      ],
    },
    {
      Support: ["kognic-io/error_handling", "kognic-io/FAQ"],
    },
  ],
};
