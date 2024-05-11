import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";

mongoose.connect(process.env.MONGODB_URI as string).then(() => {
  console.log("Connected to DB");
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/user", userRoute);

app.listen(3000, () => {
  console.log("Server is running on localhost:3000");
});
