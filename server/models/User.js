import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    picturePath: {
      type: String,
      default: "",
    },
    subject: { 
      type: String, 
      default: "",
    },
    contact_no: { 
      type: String ,
      default:"",
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
