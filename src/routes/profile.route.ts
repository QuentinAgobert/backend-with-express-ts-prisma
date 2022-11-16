import express from "express";
import { ProfileController } from "../controllers/profile.controller";
import { jwtAuth } from "../middlewares/jwtAuth";

export const router = express.Router();

const profileController = new ProfileController();

// GET
router.get("/", jwtAuth, profileController.getAllProfiles);
router.get("/:id", jwtAuth, profileController.getProfileById);

// POST
// router.post("/", jwtAuth, profileController.createProfile);

// PUT
// router.put("/:id", jwtAuth, profileController.updateProfile);

// DELETE
// router.delete("/:id", jwtAuth, profileController.deleteProfile);
