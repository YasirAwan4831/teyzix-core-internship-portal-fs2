import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  selectedDomain: {
    type: String,
    required: true,
  },
  coverLetter: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Application = mongoose.model('Application', applicationSchema);
export default Application;
