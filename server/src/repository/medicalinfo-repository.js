import mongoose from "mongoose";
import MedicalInfo from "../models/medicalinfo.model.js";
import { ApiError } from "../utils/ApiError.js";

const addMedicalDocs = async (petId, type, url, fileName, lastModified) => {
  try {
    const medicalData = await MedicalInfo.findOne({ petId });
    if (!medicalData) {
      throw new ApiError(400, "Medical info not found");
    }
    // remove the medical doc if it already exists
    medicalData.medicalDocsFile = medicalData.medicalDocsFile.filter((doc) => doc.type !== type);
    medicalData.medicalDocsFile.push({ type, url, fileName, lastModified });
    await medicalData.save();
    return medicalData;
  } catch (error) {
    throw new ApiError(500, "Failed to add medical docs", null, error.errors);
  }
};

const getMedicalDocsByPetId = async (petId) => {
  try {
    const medicalData = await MedicalInfo.findOne({ petId: new mongoose.Types.ObjectId(petId) });

    return medicalData.medicalDocsFile || [];
  } catch (error) {
    throw new ApiError(500, "Failed to get medical docs", null, error.errors);
  }
};

const medicalInfoRepository = {
  addMedicalDocs,
  getMedicalDocsByPetId,
};

export default medicalInfoRepository;
