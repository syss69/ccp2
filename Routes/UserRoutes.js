import express from "express";
import userController from "../Controllers/UserController.js";
const router = express.Router();

router.post("/create", userController.createUser);

router.get("/name", userController.getUserByName);

router.get("/id/:id", userController.getUserById);

router.get("/role", userController.getUsersByRole);

router.delete("/delete/:id", userController.deleteUser);

router.patch("/update/:id", userController.updateUser);

router.post("/login", userController.loginUser);

export default router;