import {Router} from 'express';
import IsAuthenticated from '../middleware/IsAuthenticated.js';
import { getAdminJobs, getAllJobs, getJobById, postJob } from '../controllers/Job_controller.js';

const router = Router();

router.route("/post").post(IsAuthenticated,postJob);
router.route("/get").get(IsAuthenticated,getAllJobs);
router.route("/getadminjobs").get(IsAuthenticated,getAdminJobs);
router.route('/get/:id').get(IsAuthenticated ,getJobById);

export default router;