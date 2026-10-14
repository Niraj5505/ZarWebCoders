const mongoose = require('mongoose');

const CaseStudySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true,
      unique: true
    },
    client: {
      type: String
    },
    description: {
      type: String,
      required: true
    },
    techStack: {
      type: [String]
    },
    imageUrl: {
      type: String
    },
    results: [
      {
        metric: {
          type: String
        },
        value: {
          type: String
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('CaseStudy', CaseStudySchema);
