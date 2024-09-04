import mongoose from "mongoose";
import { Booking } from "../models/booking.model.js";
import { ApiError } from "../utils/ApiError.js";

const createBooking = async (booking) => {
  try {
    console.log("booking: ", booking);
    const newBooking = new Booking(booking);
    await newBooking.save();
    return newBooking;
  } catch (error) {
    console.log("createBooking Repo error: ", error.message);
    throw new ApiError(500, "Error while creating booking");
  }
};

const updateBooking = async (bookingId) => {
  try {
    console.log("bookingId: ", bookingId);
    const updatedBooking = await Booking.findById(new mongoose.Types.ObjectId(bookingId));
    console.log("updatedBooking: ", updatedBooking);
    if (!updatedBooking) throw new ApiError(400, "Booking not found");
    updatedBooking.isCancelled = !updatedBooking.isCancelled;
    await updatedBooking.save();
    return updatedBooking;
  } catch (error) {
    console.log("updateBooking Repo error: ", error.message);
    throw new ApiError(500, "Error while updating booking");
  }
};

const bookingRepository = {
  createBooking,
  updateBooking,
};

export default bookingRepository;
