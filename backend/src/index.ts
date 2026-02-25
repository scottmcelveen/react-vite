import "dotenv/config";
import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "../auth";
import cors from "cors";
import https from "https";
import fs from "fs";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_SCHEME + "://" + process.env.FRONTEND_HOST,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use(express.json());

const render = process.env.RENDER === "true";

if (render) {
  app.listen(process.env.LISTEN_PORT, () => {
    console.log("Server running");
  });
} else {
  https
    .createServer(
      {
        key: fs.readFileSync("../localhost+2-key.pem"),
        cert: fs.readFileSync("../localhost+2.pem"),
      },
      app,
    )
    .listen(process.env.LISTEN_PORT, () => {
      console.log("HTTPS server running");
    });
}
