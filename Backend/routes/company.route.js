import {Router} from 'express';
import IsAuthenticated from '../middleware/IsAuthenticated.js';
import { getCompany, getCompanyById, registerCompany, updateCompany } from '../controllers/company_controller.js';
import {singleUpload} from '../middleware/multer.js';
const router = Router(); 

router.route("/register").post(IsAuthenticated,registerCompany);
router.route("/get").get(IsAuthenticated,getCompany);
router.route("/get/:id").get(IsAuthenticated,getCompanyById);
router.route('/update/:id').put(IsAuthenticated ,singleUpload ,updateCompany);

export default router;