import express from "express";
import missionController from "../Controllers/MissionController.js";
import { checkToken } from "../Middlewares/authMiddleware.js";
import { checkAdmin } from "../Middlewares/isAdminMiddleware.js";
import { checkIsAuthor } from "../Middlewares/isMissionAuthor.js";

const router = express.Router();

router.post("/create", checkToken, checkAdmin, missionController.createMission);

router.patch(
  "/update/:id",
  checkToken,
  checkAdmin,
  checkIsAuthor,
  missionController.modifyMission
);

router.delete(
  "/delete/:id",
  checkToken,
  checkAdmin,
  checkIsAuthor,
  missionController.deleteMission
);

router.get("/actual", checkToken, missionController.getActualMissions);

router.get("/my", checkToken, missionController.getMyMissions);

export default router;
