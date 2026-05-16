import express from 'express';
import { getInternships, getInternshipById } from '../controllers/internshipController.js';

const router = express.Router();

router.route('/').get(getInternships);
router.route('/:id').get(getInternshipById);

export default router;
