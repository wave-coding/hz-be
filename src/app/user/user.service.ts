import { Response, Request } from 'express';

import { IUser } from '../user/user.type';

import User from './user.model';

export class UserService {

  private model = User;

  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const user: IUser[] = await this.model.find();
      res.status(200).json({ user })
    } catch (error) {
      throw error
    }
  }

}
