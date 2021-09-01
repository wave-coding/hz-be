import { Response, Request, NextFunction } from 'express';
import { FilterQuery } from 'mongoose';
import { IUser } from '../user/user.type';
const bcrypt = require('bcrypt');

import User from './user.model';

export class UserService {

  // private model = User;

  // get User
  // async getUser(req: Request, res: Response, filter: FilterQuery<IUser>): Promise<void> {
  //   try {
  //     const user: IUser | null = await User.findOne(filter);
  //     res.status(200).json({ user })
  //   } catch (error) {
  //     throw error
  //   }
  // }

  // this create api is my way other way I not understood so I decided this way
  // if im wrong or somethings tell me finally my way work good
  async getUser(req: Request, res: Response,next:NextFunction) {
    const allUsers = await User.find();
    res.status(200).json({ users: allUsers })
  }

  // add User
  async addUser(req: Request, res: Response, next: NextFunction) {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    })
    try {
      await User.create(newUser);
      res.status(201).json({ message: 'User create Successfully' })
    } catch (error) {
      res.status(404).send({ message: "NICE TRY!" })
      console.log(error);
      throw error;
    }
  }

  // Update User
  async updateUser(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.id;
    const updUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    };
    try {

      if (!updUser) {
        return res.status(401).json({ message: 'user with this is id does not exist' });
      }

      await User.findByIdAndUpdate(id, updUser);
      res.status(200).json({ message: 'Update User Successfully' });
    } catch (error) {
      throw error;
    }
  }

  // Delete User
  async deleteUser(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.id;
    try {
      await User.findByIdAndDelete(id);
      res.status(200).json({ message: 'Delete User Successfully' });
    } catch (error) {
      throw error;
    }
  }

}
