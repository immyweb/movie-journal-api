import { model, Schema } from "mongoose";
import { IUser } from "../types/user";

const userSchema: Schema = new Schema({
  firstName: {
    type: String,
    unique: true,
  },

  lastName: {
    type: String,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },

  token: {
    type: String,
  },
});

export default model<IUser>("User", userSchema);
