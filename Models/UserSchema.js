import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    role: String,
    missions: Array,
    login: {
        type: String,
        unique: true
        },
    password: String
});

const userModel = mongoose.model("User", UserSchema)
export default userModel;