import bookingServer from "../services/booking-services.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import mongoose, { isValidObjectId } from "mongoose";
import { Booking } from "../models/booking.model.js";

const addBooking = async (req, res, next) => {
  try {
    const { petId, serviceType = [], checkInDate, checkOutDate, additionalMessage } = req.body;

    const bookedBy = req.user?._id;
    if (!isValidObjectId(petId) || !isValidObjectId(bookedBy))
      throw new ApiError(400, "Invalid pet or owner id");

    if (
      serviceType.length === 0 ||
      !bookedBy ||
      !checkInDate ||
      !checkOutDate ||
      !additionalMessage
    )
      throw new ApiError(400, "All fields are required");

    const booking = await bookingServer.addBooking({
      serviceType: serviceType.map((item) => new mongoose.Types.ObjectId(item)),
      petId: new mongoose.Types.ObjectId(petId),
      bookedBy,
      checkInDate,
      checkOutDate,
      additionalMessage,
    });

    res.status(200).send(new ApiResponse(200, booking, "Booked canceled Successfully"));
  } catch (error) {
    console.log(error.message);
    res.status(500).send(new ApiResponse(500, null, error.message));
  }
};

const cancelBooking = async (req, res, next) => {
  try {
    const { bookingId } = req.params;
    if (!isValidObjectId(bookingId)) throw new ApiError(400, "Invalid booking or owner id");
    const booking = await bookingServer.updateBooking(bookingId);
    res.status(200).send(new ApiResponse(200, booking, "Booked canceled Successfully"));
  } catch (error) {
    console.log(error.message);
    res.status(500).send(new ApiResponse(500, null, error.message));
  }
};

const getBookingByPetId = async (req, res, next) => {
  try {
    const { petId } = req.params;
    if (!isValidObjectId(petId)) throw new ApiError(400, "Invalid pet id");
    const bookings = await Booking.find({ petId });
    res.status(200).send(new ApiResponse(200, bookings, "Booked fetched Successfully"));
  } catch (error) {
    console.log(error.message);
    res.status(500).send(new ApiResponse(500, null, error.message));
  }
};

const bookingController = {
  addBooking,
  cancelBooking,
  getBookingByPetId,
};

export default bookingController;
