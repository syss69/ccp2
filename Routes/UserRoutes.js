import express from "express";
import userController from "../Controllers/UserController.js";
import {checkToken} from "../Middlewares/authMiddleware.js";
import {checkIsUserToken} from "../Middlewares/isUserMiddleware.js"

const router = express.Router();

router.post("/create", userController.createUser);

router.get("/name/:name", checkToken, userController.getUserByName);

router.get("/id/:id", checkToken, userController.getUserById);

router.get("/role/:role", checkToken, userController.getUsersByRole);

router.delete("/delete/:id", checkToken, checkIsUserToken, userController.deleteUser);

router.patch("/update/:id", checkToken, checkIsUserToken, userController.updateUser);

router.post("/login", userController.loginUser);

export default router;