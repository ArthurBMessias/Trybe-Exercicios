import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);

export default router