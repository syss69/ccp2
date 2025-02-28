import express from "express";
import argon2 from "argon2";
import "dotenv/config";
import cookieParser from "cookie-parser";
import userRoutes from "./Routes/UserRoutes.js"
import missionRoutes from "./Routes/MissionRoutes.js"
import candidatureRoutes from "./Routes/CandidatureRoutes.js"
import mongoConnect from "./Config/db.js";

const app = express();
const port = 3000;

mongoConnect();

app.use(cookieParser())

app.use(express.json())

app.use("/users", userRoutes);

app.use("/mission", missionRoutes);

app.use("/candidature", candidatureRoutes);

app.listen(port, () => {
    console.info("Serveur est demaree sur http://localhost:3000");
  });