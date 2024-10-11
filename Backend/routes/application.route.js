import {Router} from 'express';
import IsAuthenticated from '../middleware/IsAuthenticated.js';
import { applyJob, getApplicants, getApplicedJobs, updateStatus } from '../controllers/application_controller.js';

const router = Router(); 

router.route("/apply/:id").get(IsAuthenticated,applyJob);
router.route("/get").get(IsAuthenticated,getApplicedJobs);
router.route("/:id/applicants").get(IsAuthenticated,getApplicants);
router.route('/status/:id/update').post(IsAuthenticated ,updateStatus);

export default router;
