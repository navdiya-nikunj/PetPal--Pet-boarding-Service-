import servicesRepository from "../repository/service-repository.js";
import { ApiError } from "../utils/ApiError.js";

const addService = async (serviceData) => {
  try {
    const newService = await servicesRepository.createService(serviceData);
    return newService;
  } catch (error) {
    console.log("addService service error: ", error.message);
    throw error;
  }
};

const updateService = async (serviceData) => {
  try {
    const updatedService = await servicesRepository.updateService(serviceData);
    return updatedService;
  } catch (error) {
    console.log("updateService service error: ", error.message);
    throw error;
  }
};

const deleteService = async (serviceId) => {
  try {
    const deletedService = await servicesRepository.deleteService(serviceId);
    return deletedService;
  } catch (error) {
    console.log("deleteService service error: ", error.message);
    throw error;
  }
};

const getServices = async () => {
  try {
    const services = await servicesRepository.getServices();
    return services;
  } catch (error) {
    console.log("getServices service error: ", error.message);
    throw error;
  }
};

const servicesService = {
  addService,
  updateService,
  deleteService,
  getServices,
};

export default servicesService;
