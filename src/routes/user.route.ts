import express from "express";
import { UserController } from "../controllers/user.controller";
import { jwtAuth } from "../middlewares/jwtAuth";

export const router = express.Router();

const userController = new UserController();

// GET
router.get("/", jwtAuth, userController.getAllUsers);
router.get("/:id", jwtAuth, userController.getUserById);

// POST
router.post("/", userController.createUser);

// PUT
router.put("/:id", jwtAuth, userController.updateUser);
router.put("/remove-manager/:id", jwtAuth, userController.removeManager);
router.put("/:userId/:managerId", jwtAuth, userController.assignManager);

// DELETE
router.delete("/:id", jwtAuth, userController.deleteUser);
