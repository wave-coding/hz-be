import { IUser } from './user.type';
import { model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

export default model<IUser>('User', userSchema);
