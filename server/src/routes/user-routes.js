import express from 'express';
import userController from '../controllers/user-controller.js';
import { verifyJWT } from '../middlewares/auth-middleware.js';

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/me', verifyJWT, userController.getUser);

export default router;