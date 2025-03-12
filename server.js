import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import userRoutes from "./Routes/UserRoutes.js";
import missionRoutes from "./Routes/MissionRoutes.js";
import candidatureRoutes from "./Routes/CandidatureRoutes.js";
import mongoConnect from "./Config/db.js";
import swaggerUI from "swagger-ui-express";
import swaggerDefinition from "./Swagger/Swagger.js";
import cors from "cors";
import { checkToken } from "./Middlewares/authMiddleware.js";
import { config } from "dotenv";

const app = express();
const port = 3000;

mongoConnect();

app.use(
  cors({
    origin: process.env.URL_FRONT,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());

app.use("/users", userRoutes);

app.use("/mission", missionRoutes);

app.use("/candidature", candidatureRoutes);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDefinition));

app.get("/", (req, res) => {
  res.status(200).send("Use /api-docs for documentation");
});

app.get("/check", checkToken, (req, res) => {
  res.status(200).send("ok");
});

app.listen(port, () => {
  console.info("Serveur est demaree sur http://localhost:3000");
});
