import mongoose, { Schema } from "mongoose";

// id string
// serviceName string required
// category string required
// description string required
// price number required

const serviceSchema = new Schema(
  {
    serviceName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export const Service = mongoose.model("Service", serviceSchema);
