import Application from '../models/Application.js';

// @desc    Submit new application
// @route   POST /api/applications
// @access  Public
export const submitApplication = async (req, res, next) => {
  try {
    const { fullName, email, phoneNumber, selectedDomain, coverLetter } = req.body;

    const application = new Application({
      fullName,
      email,
      phoneNumber,
      selectedDomain,
      coverLetter,
    });

    const createdApplication = await application.save();
    res.status(201).json(createdApplication);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all applications
// @route   GET /api/applications
// @access  Public (in real app should be Private/Admin)
export const getApplications = async (req, res, next) => {
  try {
    const applications = await Application.find({}).sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    next(error);
  }
};
