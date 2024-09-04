import mongoose from "mongoose";
import { Service } from "../models/service.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getServices = async () => {
  try {
    const services = await Service.find();
    if (!services) throw new ApiError(404, "No services found");
    return services;
  } catch (error) {
    console.log("getServices Repo Error: ", error.message);
    throw new ApiError(500, "Error getting services", error);
  }
};

const createService = async ({ serviceName, category, description, price }) => {
  try {
    const service = await Service.create({ serviceName, category, description, price });
    if (!service) throw new ApiError(404, "Error creating service");
    return service;
  } catch (error) {
    console.log("createService Repo Error: ", error.message);
    throw new ApiError(500, error.message, error);
  }
};

const updateService = async ({ serviceId, serviceName, category, description, price }) => {
  try {
    const service = await Service.findById(serviceId);
    if (!service) throw new ApiError(404, "Service not found");

    service.serviceName = serviceName || service.serviceName;
    service.category = category || service.category;
    service.description = description || service.description;
    service.price = price || service.price;

    await service.save();
    return service;
  } catch (error) {
    console.log("updateService Repo Error: ", error.message);
    throw new ApiError(500, error.message, error);
  }
};

const deleteService = async (serviceId) => {
  try {
    const service = await Service.findByIdAndDelete(serviceId);
    if (!service) throw new ApiError(404, "Service not found");
    return service;
  } catch (error) {
    console.log("deleteService Repo Error: ", error.message);
    throw new ApiError(500, error.message, error);
  }
};

const petRepository = {
  createService,
  updateService,
  deleteService,
  getServices,
};

export default petRepository;
