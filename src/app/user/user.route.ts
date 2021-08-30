import { Router } from 'express';
import { UserService } from './user.service';
import { validators } from './user.validator';

const userServices = new UserService();

export const router = Router();

router.get('/api/user', userServices.getUser);

router.post('/api/user', validators, userServices.addUser);

router.put('/api/user/:id', userServices.updateUser);

router.delete('/api/user/:id', userServices.deleteUser);
