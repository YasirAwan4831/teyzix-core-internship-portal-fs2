import mongoose from 'mongoose';

const internshipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    default: 'Remote',
  },
  requirements: [String],
  isActive: {
    type: Boolean,
    default: true,
  }
}, { timestamps: true });

const Internship = mongoose.model('Internship', internshipSchema);
export default Internship;
