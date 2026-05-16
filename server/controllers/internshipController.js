import Internship from '../models/Internship.js';

// @desc    Fetch all internships
// @route   GET /api/internships
// @access  Public
export const getInternships = async (req, res, next) => {
  try {
    const internships = await Internship.find({});
    res.json(internships);
  } catch (error) {
    next(error);
  }
};

// @desc    Fetch single internship
// @route   GET /api/internships/:id
// @access  Public
export const getInternshipById = async (req, res, next) => {
  try {
    const internship = await Internship.findById(req.params.id);
    if (internship) {
      res.json(internship);
    } else {
      res.status(404);
      throw new Error('Internship not found');
    }
  } catch (error) {
    next(error);
  }
};
