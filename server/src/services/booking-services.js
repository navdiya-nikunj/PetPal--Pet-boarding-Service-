import bookRepository from "../repository/booking-repository.js";
import { ApiError } from "../utils/ApiError.js";

const addBooking = async (bookingData) => {
  try {
    return await bookRepository.createBooking(bookingData);
  } catch (error) {
    console.log(error);
    throw new ApiError(500, error.message);
  }
};

const updateBooking = async (bookingId) => {
  try {
    return await bookRepository.updateBooking(bookingId);
  } catch (error) {
    console.log(error);
    throw new ApiError(500, error.message);
  }
};

const bookingService = {
  addBooking,
  updateBooking,
};

export default bookingService;
