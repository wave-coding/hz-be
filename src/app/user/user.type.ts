import { Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  password: number;
  email: string;
}
