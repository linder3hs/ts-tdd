import { config } from "dotenv";
import express, { type Application } from "express";

config();

const app: Application = express();

export default app;
