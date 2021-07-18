import { Response, Request } from 'express';
import { FilterQuery } from 'mongoose';
import { IUser } from '../user/user.type';

import User from './user.model';

export class UserService {

  private model = User;

  // get User
  async getUser(req: Request, res: Response, filter: FilterQuery<IUser>): Promise<void> {
    try {
      const user: IUser | null = await this.model.findOne(filter);
      res.status(200).json({ user })
    } catch (error) {
      throw error
    }
  }

  // add User
  async adduser(req: Request, res: Response) {
    const newUser = new this.model({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })
    try {
      await this.model.create(newUser);
      res.status(201).json({ message: 'User create Successfully' })
    } catch (error) {
      throw error;
    }
  }

}
