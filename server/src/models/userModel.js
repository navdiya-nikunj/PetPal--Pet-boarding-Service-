import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { TOKEN_EXPIRY, TOKEN_SECRET } from "../config/serverConfig.js";

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      enum: ["admin", "user"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: false,
      trim: true,
      index: true,
    },
    contact: {
      type: Number,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Method to get user info excluding password
userSchema.methods.getUserInfo = function () {
  return {
    role: this.role,
    email: this.email,
  };
};

// Method to set a new password
userSchema.methods.setPassword = function (newPassword) {
  this.password = newPassword;
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = async function () {
  return await jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    TOKEN_SECRET,
    {
      expiresIn: TOKEN_EXPIRY,
    }
  );
};

const User = mongoose.model("User", userSchema);

export default User;
