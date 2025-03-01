import express from "express";
import candidatureController from "../Controllers/CandidatureController.js";
import {checkToken} from "../Middlewares/authMiddleware.js";
import { checkAdmin } from "../Middlewares/isAdminMiddleware.js";

const router = express.Router();

router.post("/apply/:id", checkToken, candidatureController.createCandidature);

router.patch("/approve/:id", checkToken, checkAdmin, candidatureController.approveCandidature);

router.patch("/decline/:id", checkToken, checkAdmin, candidatureController.declineCandidature);

router.get("/mission/:id", checkToken, checkAdmin, candidatureController.getAllByMission);

router.get("/my", checkToken, candidatureController.getMyCandidatures)

export default router;