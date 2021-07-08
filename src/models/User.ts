import { IUser } from '../types/user';
import { model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    }

});


export default model<IUser>('User', userSchema);