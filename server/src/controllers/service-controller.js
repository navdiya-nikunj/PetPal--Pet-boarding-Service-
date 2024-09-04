import servicesService from "../services/services-service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import mongoose, { isValidObjectId } from "mongoose";

const addService = async (req, res) => {
  const { serviceName, category, description, price } = req.body;
  try {
    if (!serviceName || !category || !description || !price)
      throw new Error("Missing required fields");

    const service = await servicesService.addService({ serviceName, category, description, price });

    res.status(200).send(new ApiResponse(500, service, "service added successfully"));
  } catch (error) {
    console.log("addService Controller error: ", error.message);
    res.status(500).send(new ApiResponse(500, null, error.message));
  }
};

const getServices = async (req, res) => {
  try {
    const services = await servicesService.getServices();
    res.status(200).send(new ApiResponse(500, services, "All services sent successfully"));
  } catch (error) {
    console.log("getServices Controller error: ", error.message);
    res.status(500).send(new ApiResponse(500, null, error.message));
  }
};

const updateService = async (req, res) => {
  const { serviceId } = req.params;
  const { serviceName, category, description, price } = req.body;
  try {
    if (!isValidObjectId(serviceId)) throw new Error("Invalid id");

    if (!serviceName && !category && !description && !price)
      throw new Error("at-least one field is required");

    const service = await servicesService.updateService({
      serviceId,
      serviceName,
      category,
      description,
      price,
    });

    res.status(200).send(new ApiResponse(500, service, "service updated successfully"));
  } catch (error) {
    console.log("getServices Controller error: ", error.message);
    res.status(500).send(new ApiResponse(500, null, error.message));
  }
};

const deleteService = async (req, res) => {
  const { serviceId } = req.params;
  try {
    if (!isValidObjectId(serviceId)) throw new Error("Invalid id");
    const service = await servicesService.deleteService(serviceId);
    res.status(200).send(new ApiResponse(500, service, "service deleted successfully"));
  } catch (error) {
    console.log("getServices Controller error: ", error.message);
    res.status(500).send(new ApiResponse(500, null, error.message));
  }
};

const serviceController = {
  addService,
  getServices,
  updateService,
  deleteService,
};

export default serviceController;
