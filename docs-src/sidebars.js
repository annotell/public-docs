module.exports = {
  docs: {
    "Getting Started": [
        "quickstart",
        "upload-your-first-scene",
     ],
    "Kognic APIs": ["kognic-apis"],
    "Key Concepts": ["key_concepts"],
    "Kognic IO": [
      "kognic-io/project",
      {"Scenes": [
        "kognic-io/overview",
        "kognic-io/annotation_types",
        {"Scene Types": [
          "kognic-io/scenes/cameras",
          "kognic-io/scenes/lidars_and_cameras",
          "kognic-io/scenes/cameras_seq",
          "kognic-io/scenes/lidars_and_cameras_seq",
          "kognic-io/scenes/aggregated_lidars_and_cameras_seq"
        ]},
        "kognic-io/scenes/lidars_with_imu_data",
        "kognic-io/feature_flags",
      ]},
      {"Annotations": [
        "kognic-io/pre_annotations",
        "kognic-io/annotations",
       ]},
      "kognic-io/working_with_scenes_and_inputs",
      {"Calibrations": [
        "kognic-io/calibrations/overview",
        "kognic-io/calibrations/lidars",
        "kognic-io/calibrations/cameras-standard",
        "kognic-io/calibrations/cameras-custom",
      ]},
      "kognic-io/coordinate_systems",
      "kognic-io/error_handling",
      "kognic-io/FAQ",
      {
        "Supported File Formats": [
          "kognic-io/resources/images",
          "kognic-io/resources/pointclouds"
        ]
      }
    ],
    "Dataset exploration": [
        "dataset-exploration/introduction",
        "dataset-exploration/prediction-format",
        "dataset-exploration/uploading-predictions",
        "dataset-exploration/understand-dataset-content"
    ],
    "Annotation integration": [
      "annotation-integration/introduction",
      "annotation-integration/review"
    ],
    "OpenLABEL": [
        "openlabel/openlabel-format",
        "openlabel/python-client"
    ],
    "Migration Guide": ["a2k_migration_guide"],
  },
};
