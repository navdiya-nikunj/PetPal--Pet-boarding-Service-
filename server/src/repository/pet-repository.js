import mongoose from "mongoose";
import { Pet } from "../models/pet.model.js";
import MedicalInfo from "../models/medicalinfo.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createPet = async ({
  name,
  breed,
  age,
  gender,
  weight,
  description,
  color,
  owner,
  characteristics,
}) => {
  try {
    const newPet = new Pet({
      name,
      breed,
      age,
      gender,
      weight,
      color,
      description,
      owner,
      characteristics,
    });
    await newPet.save();

    const newMedicalInfo = new MedicalInfo({
      medicalDocsFile: [],
      petId: newPet._id,
    });

    await newMedicalInfo.save();

    return newPet;
  } catch (error) {
    console.log("createPet error: ", error);
    throw new ApiError(500, "Error while creating pet");
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
    const pet = await Pet.findOne({ _id: new mongoose.Types.ObjectId(id) });

    if (!pet) throw new ApiError(400, "Pet not found");

    if (name) pet.name = name;
    if (breed) pet.breed = breed;
    if (age) pet.age = age;
    if (gender) pet.gender = gender;
    if (weight) pet.weight = weight;
    if (description) pet.description = description;
    if (owner) pet.owner = owner;
    if (color) pet.color = color;
    if (characteristics.length > 0)
      pet.characteristics = [...pet.characteristics, ...characteristics];

    // Save in database
    const updatedPet = await pet.save();

    if (!updatedPet) throw new ApiError(500, "Error while updating pet");

    return updatedPet;
  } catch (error) {
    console.log("updatePet error: ", error);
    throw new ApiError(500, "Error while updating pet");
  }
};

const deletePet = async (id) => {
  try {
    const deletedPet = await Pet.findByIdAndDelete(id);
    if (!deletedPet) throw new ApiError(400, "Pet not found");
    return deletedPet;
  } catch (error) {
    console.log("deletePet error: ", error);
    throw new ApiError(500, "Error while deleting pet");
  }
};

const findPetById = async (petId) => {
  try {
    const pet = await Pet.findOne({ _id: new mongoose.Types.ObjectId(petId) });
    if (!pet) throw new ApiError(400, "Pet not found");
    return pet;
  } catch (error) {
    console.log("findPetById REPO Error: ", error.message);
    throw new ApiError(500, "Error while finding pet");
  }
};

const findPetsByOwner = async (ownerId) => {
  try {
    const pets = await Pet.find({ owner: new mongoose.Types.ObjectId(ownerId) });
    if (!pets) throw new ApiError(400, "Pets not found");
    return pets;
  } catch (error) {
    console.log("findPetsByOwner Repo Error: ", error.message);
    throw new ApiError(500, "Error while finding pets");
  }
};

const petRepository = {
  createPet,
  updatePet,
  deletePet,
  findPetById,
  findPetsByOwner,
};

export default petRepository;
