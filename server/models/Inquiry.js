const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true
    },
    phone: {
      type: String,
      required: true
    },
    serviceType: {
      type: String
    },
    budget: {
      type: String
    },
    details: {
      type: String
    },
    status: {
      type: String,
      default: 'new',
      enum: ['new', 'contacted', 'closed']
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Inquiry', InquirySchema);
