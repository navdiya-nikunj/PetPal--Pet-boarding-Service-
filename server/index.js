import express from "express";
import cors from "cors";
import connectToMongo from "./src/config/dbConfig.js";
import { PORT } from "./src/config/serverConfig.js";
import userRoutes from "./src/routes/user-routes.js";
import petRoutes from "./src/routes/pet-routes.js";
import medicalinfoRoutes from "./src/routes/medicalinfo-routes.js";
import serviceRoutes from "./src/routes/service-routes.js";
import bookingRoutes from "./src/routes/booking-routes.js";

const setUpAndStartServer = async () => {
  try {
    await connectToMongo();

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/api/auth", userRoutes);
    app.use("/api/pets", petRoutes);
    app.use("/api/medicalinfo", medicalinfoRoutes);
    app.use("/api/services", serviceRoutes);
    app.use("/api/bookings", bookingRoutes);

    app.listen(PORT, () => {
      console.log(`Server started on PORT : ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to database...", error);
    throw error;
  }
};

setUpAndStartServer();
