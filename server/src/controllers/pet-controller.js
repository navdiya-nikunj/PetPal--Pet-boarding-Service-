import petService from "../services/pet-service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import mongoose, { isValidObjectId } from "mongoose";

export const addPet = async (req, res) => {
  const { name, breed, age, gender, weight, description, color, characteristics = [] } = req.body;
  const owner = req.user?._id;
  try {
    if (!name || !breed || !age || !gender || !weight || !description || !owner || !color)
      throw new ApiError(400, "Please provide all the required fields");
    const response = await petService.addPet({
      name,
      breed,
      age,
      gender,
      weight,
      description,
      color,
      owner,
      characteristics,
    });
    res.status(201).send(new ApiResponse(201, response, "Pet created successfully"));
  } catch (error) {
    console.log("error: ", error.message);
    res.status(500).send(new ApiResponse(500, null, error.message));
  }
};

export const updatePet = async (req, res) => {
  const { petId } = req.params;
  const {
    name,
    breed,
    age,
    gender,
    weight,
    description,
    owner,
    color,
    characteristics = [],
  } = req.body;
  try {
    if (!isValidObjectId(petId)) throw new ApiError(400, "Please provide a valid pet id");

    if (
      !name &&
      !breed &&
      !age &&
      !gender &&
      !weight &&
      !description &&
      !owner &&
      characteristics.length === 0
    )
      throw new ApiError(400, "Please provide at-least one field");

    const response = await petService.updatePet({
      id: petId,
      name,
      breed,
      age,
      gender,
      weight,
      description,
      color,
      owner,
      characteristics,
    });

    res.status(200).send(new ApiResponse(200, response, "Pet updated successfully"));
  } catch (error) {
    res.status(500).send(new ApiResponse(500, null, error.message));
  }
};

export const deletePet = async (req, res) => {
  const { petId } = req.params;
  try {
    if (!isValidObjectId(petId)) throw new ApiError(400, "Please provide a valid pet id");
    const response = await petService.deletePet(new mongoose.Types.ObjectId(petId));
    res.status(200).send(new ApiResponse(200, response, "Pet deleted successfully"));
  } catch (error) {
    res.status(500).send(new ApiResponse(500, null, error.message));
  }
};

export const getPetsByOwner = async (req, res) => {
  try {
    const ownerId = req.user?._id;
    if (!ownerId) throw new ApiError(400, "Please Authenticate");
    const response = await petService.getPets(ownerId);
    res.status(200).send(new ApiResponse(200, response, "Pets fetched successfully"));
  } catch (error) {
    res.status(500).send(new ApiResponse(500, null, error.message));
  }
};

const getPetById = async (req, res) => {
  const { petId } = req.params;
  try {
    if (!isValidObjectId(petId)) throw new ApiError(400, "Please provide a valid pet id");
    const response = await petService.getPetById(petId);
    res.status(200).send(new ApiResponse(200, response, "Pet fetched successfully"));
  } catch (error) {
    res.status(500).send(new ApiResponse(500, null, error.message));
  }
};

const petController = {
  addPet,
  updatePet,
  deletePet,
  getPetById,
  getPetsByOwner,
};

export default petController;
