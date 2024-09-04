import express from "express";
import bookingController from "../controllers/booking-controller.js";
import { verifyJWT } from "../middlewares/auth-middleware.js";

const router = express.Router();

router.get("/get/:petId", verifyJWT, bookingController.getBookingByPetId);
router.patch("/cancel/:bookingId", verifyJWT, bookingController.cancelBooking);
router.post("/add", verifyJWT, bookingController.addBooking);

export default router;
