import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: {type: String, required: true},
  lastname: {type: String, required: false},
  birthday: {type: String, required: false},
});

export default mongoose.model("User", UserModel);
