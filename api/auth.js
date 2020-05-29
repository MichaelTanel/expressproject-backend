import express from 'express';
import authController from '../controllers/auth';

const router = express.Router();

router.put('/register', authController.register);
router.get('/login', authController.login);

export default router;