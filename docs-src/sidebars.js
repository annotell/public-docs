module.exports = {
  docs: {
    "Kognic Auth": ["kognic-auth"],
    "Key Concepts": ["key_concepts"],
    "Kognic IO": [
      "kognic-io/project",
      {"Inputs": [
        "kognic-io/overview",
        "kognic-io/annotation_types",
        {"Input Types": [
          "kognic-io/inputs/cameras",
          "kognic-io/inputs/lidars_and_cameras",
          "kognic-io/inputs/cameras_seq",
          "kognic-io/inputs/lidars_and_cameras_seq",
          "kognic-io/inputs/aggregated_lidars_and_cameras_seq"
        ]},
        "kognic-io/working_with_inputs",
        "kognic-io/pre_annotations",
        "kognic-io/inputs/lidars_with_imu_data",
        "kognic-io/feature_flags",
      ]},
      "kognic-io/annotations",
      "kognic-io/calibrations",
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
    "Refinement": [
        "refinement/refinement",
        "refinement/uploading-predictions"
    ],
    "OpenLABEL": [
        "openlabel/openlabel-format",
        "openlabel/python-client"
    ],
    "Migration Guide": ["a2k_migration_guide"],
  },
};
