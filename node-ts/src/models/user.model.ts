import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema({
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true, unique: true},
    },
    {
        timestamps: true,
    });

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;