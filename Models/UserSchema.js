import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: String,
  missions: [
    {
      type: Schema.ObjectId,
      ref: "Mission",
    },
  ],
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
});

UserSchema.set("toJSON", {
  //cette function permette de ne pas retourner le mot de pass si on appelle "get" -- aussi possible d'utiliser select("-password")
  transform: function (doc, ret) {
    delete ret.password;
    delete ret.role;
    return ret;
  },
});

const userModel = mongoose.model("User", UserSchema);
export default userModel;
