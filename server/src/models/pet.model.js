import mongoose, { Schema } from "mongoose";

// name string required
// breed string required
// age string required
// gender string required
// weight number required
// description string required
// owner objectId[User] required

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    characteristics: {
      type: [String],
      required: false,
      default: [],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Pet = mongoose.model("Pet", petSchema);
