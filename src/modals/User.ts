import * as mongoose from "mongoose";
import { model } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },

},
  { timestamps: true }
);


export default model("users", userSchema);
