module.exports = {
  docs: {
    "Getting Started": [
      "getting-started/quickstart",
      "kognic-apis",
    ],
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
          "kognic-io/scenes/aggregated_lidars_and_cameras_seq"
        ]
      },
    ],
    "Download annotations": ["download-annotations/download-annotations"],
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
    "Documentation": [
      "key_concepts",
      "kognic-io/project",
      {
        "Scenes": [
          "kognic-io/overview",
          "kognic-io/annotation_types",
          {
            "Scene Types": [
              "kognic-io/scenes/cameras",
              "kognic-io/scenes/lidars_and_cameras",
              "kognic-io/scenes/cameras_seq",
              "kognic-io/scenes/lidars_and_cameras_seq",
              "kognic-io/scenes/aggregated_lidars_and_cameras_seq"
            ]
          },
          "kognic-io/scenes/lidars_with_imu_data",
          "kognic-io/feature_flags",
        ]
      },
      {
        "Annotations": [
          "kognic-io/pre_annotations",
          "openlabel/openlabel-format",
          "openlabel/python-client"
        ]
      },
      "kognic-io/working_with_scenes_and_inputs",
      {
        "Calibrations": [
          "kognic-io/calibrations/overview",
          "kognic-io/calibrations/lidars",
          "kognic-io/calibrations/cameras-standard",
          "kognic-io/calibrations/cameras-custom",
        ]
      },
      "kognic-io/coordinate_systems",
      "kognic-io/error_handling",
      "kognic-io/FAQ",
      "api/proxy-configuration",
      {
        "Supported File Formats": [
          "kognic-io/resources/images",
          "kognic-io/resources/pointclouds"
        ]
      },
      {
        "Migration Guides": [
          "a2k_migration_guide",
        ]
      }
    ],
  },
};
