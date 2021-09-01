import { Router } from 'express';
import { UserService } from './user.service';
import { validators } from './user.validator';

const userServices = new UserService();

const router = Router();

router.get('/', userServices.getUser);

router.post('/', validators, userServices.addUser);

router.put('/:id', userServices.updateUser);

router.delete('/:id', userServices.deleteUser);


module.exports = router;