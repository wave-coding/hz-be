import { Router } from 'express';
import { UserService } from './user/user.service'

const userServices = new UserService();

const router = Router();

router.get('/user', userServices.getUser);

router.post('/user', userServices.addUser);

router.put('/user/:id', userServices.updateUser);

router.delete('/user/:id', userServices.deleteUser);