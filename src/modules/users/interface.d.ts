import { Document } from "mongoose";

export default interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  wallet: number;
  password: string;
  createdAt: Date;
}
