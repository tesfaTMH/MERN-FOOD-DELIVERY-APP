import { Request, Response } from "express";
import User from "../models/userModel";

const createUser = async (req: Request, res: Response) => {
  // create user if doesn't exist and return user object for frontend use
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).send();
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject());
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating user" });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const foundUser = await User.find({});
    res.json(foundUser);
  } catch (error) {
    console.log(error);
  }
};

export default {
  createUser,
  getUser,
};
