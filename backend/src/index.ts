import "dotenv/config";
import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "../auth";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_HOST,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use(express.json());

const server = app.listen(process.env.LISTEN_PORT, () =>
  console.log(`
🚀 Server ready`),
);
