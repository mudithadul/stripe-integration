import { Router } from 'express';
const userRoutes = Router();
import * as userController from '../controllers/userController';

userRoutes.post('/', userController.createUser);

userRoutes.get('/:id', userController.getUserById);

userRoutes.get('/', userController.getUsers);

export default userRoutes;