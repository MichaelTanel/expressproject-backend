import express from 'express';
import userController from '../controllers/user';

const router = express.Router();

router.delete('/users', userController.deleteAllUsers);
router.get('/users', userController.getAllUsers);

export default router;