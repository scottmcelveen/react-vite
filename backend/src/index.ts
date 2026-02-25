import "dotenv/config";
import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "../auth";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  }),
);
app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use(express.json());

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000`),
);
