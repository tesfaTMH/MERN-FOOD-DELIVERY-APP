import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import tmhResturantRoute from "./routes/tmhResturantRoute";

import { v2 as cloudinary } from "cloudinary";

mongoose.connect(process.env.MONGODB_URI as string).then(() => {
  console.log("Connected to DB");
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "Health OK!" });
});

app.use("/api/v1/user", userRoute);
app.use("/api/v1/resturant", tmhResturantRoute);

app.listen(3000, () => {
  console.log("Server is running on localhost:3000");
});
