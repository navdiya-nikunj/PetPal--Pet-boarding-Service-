import medicalInfoRepository from "../repository/medicalinfo-repository.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const addMedicalDocs = async (petId, type, docLocalPath) => {
  try {
    const docCloudinaryResponse = await uploadOnCloudinary(docLocalPath);
    if (!docCloudinaryResponse) {
      console.log("Cloudinary response", docCloudinaryResponse);
      throw new ApiError(400, "Failed to upload medical docs");
    }
    const url = docCloudinaryResponse.secure_url;
    const fileName = docCloudinaryResponse.original_filename;
    const lastModified = docCloudinaryResponse.last_modified;
    const medicalInfo = await medicalInfoRepository.addMedicalDocs(
      petId,
      type,
      url,
      fileName,
      lastModified
    );
    return medicalInfo;
  } catch (error) {
    console.log("Service error", error);
    if (error.message === "Failed to upload medical docs") {
      throw error;
    }
    throw new ApiError(500, "Failed to add medical docs", null, error.errors);
  }
};

const getMedicalDocsByPetId = async (petId) => {
  try {
    const medicalInfo = await medicalInfoRepository.getMedicalDocsByPetId(petId);
    return medicalInfo;
  } catch (error) {
    console.log("Service error", error);
    throw new ApiError(500, "Failed to get medical docs", null, error.errors);
  }
};

const medicalInfoServices = {
  addMedicalDocs,
  getMedicalDocsByPetId,
};

export default medicalInfoServices;
