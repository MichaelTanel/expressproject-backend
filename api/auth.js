import express from 'express';
import authController from '../controllers/auth';

const router = express.Router();

router.put('/register', authController.register);

export default router;