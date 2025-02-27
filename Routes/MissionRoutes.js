import express from "express";
import missionController from "../Controllers/MissionController.js";
import { checkToken } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", checkToken, missionController.createMission);

export default router;