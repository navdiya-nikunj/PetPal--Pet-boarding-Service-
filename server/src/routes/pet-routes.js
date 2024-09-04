import express from "express";
import petController from "../controllers/pet-controller.js";
import { verifyJWT } from "../middlewares/auth-middleware.js";

const router = express.Router();

router.get("/", verifyJWT, petController.getPetsByOwner);
router.get("/get/:petId", verifyJWT, petController.getPetById);
router.post("/add", verifyJWT, petController.addPet);
router.patch("/update/:petId", verifyJWT, petController.updatePet);
router.delete("/delete/:petId", verifyJWT, petController.deletePet);

export default router;
