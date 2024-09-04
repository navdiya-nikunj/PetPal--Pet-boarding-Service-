import petRepository from "../repository/pet-repository.js";
import { ApiError } from "../utils/ApiError.js";

const addPet = async ({
  name,
  breed,
  age,
  gender,
  weight,
  description,
  owner,
  color,
  characteristics,
}) => {
  console.log("PET SERVICE ", {
    name,
    breed,
    age,
    gender,
    weight,
    description,
    owner,
    characteristics,
  });
  try {
    return await petRepository.createPet({
      name,
      breed,
      age,
      gender,
      weight,
      description,
      owner,
      color,
      characteristics,
    });
  } catch (error) {
    console.log(error);
    if (error.message === "Error while creating pet") throw error;
    throw new ApiError(500, error.message);
  }
};

const updatePet = async ({
  id,
  name,
  breed,
  age,
  gender,
  weight,
  description,
  owner,
  color,
  characteristics,
}) => {
  try {
    return await petRepository.updatePet({
      id,
      name,
      breed,
      age,
      gender,
      weight,
      description,
      owner,
      color,
      characteristics,
    });
  } catch (error) {
    console.log(error);
    if (error.message === "Error while creating pet") throw error;
    throw new ApiError(500, "Error while Updating pet");
  }
};

const deletePet = async (id) => {
  try {
    return await petRepository.deletePet(id);
  } catch (error) {
    console.log(error);
    if (error.message === "Error while deleting pet") throw error;
    throw new ApiError(500, "Error while deleting pet");
  }
};

const getPetById = async (id) => {
  try {
    return await petRepository.findPetById(id);
  } catch (error) {
    console.log(error);
    if (error.message === "Error while finding pet") throw error;
    throw new ApiError(500, "Error while finding pet");
  }
};

const getPetsByOwner = async (ownerId) => {
  try {
    return await petRepository.findPetsByOwner(ownerId);
  } catch (error) {
    console.log(error);
    if (error.message === "Error while finding pets") throw error;
    throw new ApiError(500, "Error while finding pets");
  }
};

const petService = {
  addPet,
  updatePet,
  deletePet,
  getPetById,
  getPetsByOwner,
};

export default petService;
