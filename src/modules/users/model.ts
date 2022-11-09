import { Schema, model } from "mongoose";
import IUser from "./interface";

const userSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, unique: true },
  wallet: { type: Number, default: 0 },
  password: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default model<IUser>("User", userSchema);
