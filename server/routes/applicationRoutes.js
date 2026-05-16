import express from 'express';
import { submitApplication, getApplications } from '../controllers/applicationController.js';

const router = express.Router();

router.route('/').post(submitApplication).get(getApplications);

export default router;
