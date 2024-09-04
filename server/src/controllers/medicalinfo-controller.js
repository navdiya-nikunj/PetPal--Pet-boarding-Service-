import { isValidObjectId } from "mongoose";
import medicalInfoServices from "../services/medicalinfo-services.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const addMedicalDocs = async (req, res) => {
  try {
    const { type } = req.body;
    const { petId } = req.params;
    const docLocalPath = req.files?.medicalDocsFile[0]?.path;

    const medicalInfo = await medicalInfoServices.addMedicalDocs(petId, type, docLocalPath);
    return res
      .status(200)
      .send(new ApiResponse(200, "Medical documents uploaded successfully", medicalInfo));
  } catch (error) {
    console.log(error);
    return res.status(500).send(new ApiResponse(500, "Internal server error", error));
  }
};

const getMedicalDocsByPetId = async (req, res) => {
  try {
    const { petId } = req.params;

    if (!isValidObjectId(petId)) throw new Error("Invalid pet id");

    const medicalInfo = await medicalInfoServices.getMedicalDocsByPetId(petId);
    
    return res
      .status(200)
      .send(new ApiResponse(200, "Medical documents retrieved successfully", medicalInfo));
  } catch (error) {
    console.log(error);
    return res.status(500).send(new ApiResponse(500, "Internal server error", error));
  }
};

const medicalInfoController = {
  addMedicalDocs,
  getMedicalDocsByPetId,
};

export default medicalInfoController;
