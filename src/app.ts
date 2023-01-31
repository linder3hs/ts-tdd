import { config } from "dotenv";
import express, { type Application } from "express";
import cors from "cors";

config();

const app: Application = express();

app.use(cors());

export default app;
