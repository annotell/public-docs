module.exports = {
  docs: [
    {
      "Getting started": [
        "getting-started/quickstart",
        "kognic-apis",
        "key_concepts",
      ]
    },
    {
      "Upload data": [
        "upload-data/upload-your-first-scene",
        "upload-data/view-uploaded-scene",
        "upload-data/prerequisites-for-annotation",
        "upload-data/ordering-annotation",
        {
          "More examples": [
            "kognic-io/scenes/cameras",
            "kognic-io/scenes/lidars_and_cameras",
            "kognic-io/scenes/cameras_seq",
            "kognic-io/scenes/lidars_and_cameras_seq",
            "kognic-io/scenes/aggregated_lidars_and_cameras_seq",
          ],
        },
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
        "kognic-io/coordinate_systems"
      ],
    },
    {
      "Download annotations": [
        "download-annotations/download-annotations",
        "openlabel/openlabel-format",
        "openlabel/python-client",
      ]
    },
    {
      "Project management": [
        "kognic-io/project",
        "kognic-io/annotation_types",
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
      Support: [
        "kognic-io/error_handling",
        "kognic-io/FAQ",
        {
          "Migration Guides": ["a2k_migration_guide"],
        },
      ],
    },
  ],
};
