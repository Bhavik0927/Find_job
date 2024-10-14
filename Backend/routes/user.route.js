import {Router} from 'express';
import { login, logout, Register, updateProfile } from '../controllers/user_controller.js';
import IsAuthenticated from '../middleware/IsAuthenticated.js';
import { singleUpload } from '../middleware/multer.js';


const router = Router();

router.route("/register").post(singleUpload, Register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route('/profile/update').post(IsAuthenticated ,updateProfile);

export default router;