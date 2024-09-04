import mongoose, { Schema } from "mongoose";

const medicalInfoSchema = new Schema(
  {
    medicalDocsFile: {
      type: [{
        url: String,
        fileName: String,
        lastModified: Date,
        type: String,
      }],
      required: false,
      default: [],
    },
    petId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const MedicalInfo = mongoose.model("MedicalInfo", medicalInfoSchema);

export default MedicalInfo;
