import { IUser } from '../types/user';
import { model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({
    
    // just add simple db

    // Just add simple User
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