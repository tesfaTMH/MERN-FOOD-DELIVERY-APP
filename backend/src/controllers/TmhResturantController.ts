import { Request, Response } from "express";
import TmhResturant from "../models/tmhResturantModel";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

const createTmhResturant = async (req: Request, res: Response) => {
  try {
    const existingResturant = await TmhResturant.findOne({ user: req.userId });

    if (existingResturant) {
      return res.status(409).json({ message: "User resturant already exists" });
    }

    const image = req.file as Express.Multer.File;
    const base64Image = Buffer.from(image.buffer).toString("base64");
    const dataURI = `data:${image.mimetype};base64,${base64Image}`;

    const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);

    const resturant = new TmhResturant(req.body);
    resturant.imageUrl = uploadResponse.url;
    resturant.user = new mongoose.Types.ObjectId(req.userId as string);
    resturant.lastupdated = new Date();

    await resturant.save();

    res.status(201).send(resturant);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default {
  createTmhResturant,
};
