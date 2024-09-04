import express from "express";
import serviceController from "../controllers/service-controller.js";

const router = express.Router();

router.get("/", serviceController.getServices);
router.post("/add", serviceController.addService);
router.patch("/update/:serviceId", serviceController.updateService);
router.delete("/delete/:serviceId", serviceController.deleteService);

export default router;
