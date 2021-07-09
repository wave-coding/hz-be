import { IUser } from './user.type';
import { model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({
  // Just add simple User
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
});

export default model<IUser>('User', userSchema);
