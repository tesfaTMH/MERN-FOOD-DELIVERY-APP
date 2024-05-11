import express from "express";
import createUser from "../controllers/UserController";
import { jwtCheck } from "../middleware/auth";

const router = express.Router();

router.post("/", jwtCheck, createUser.createUser);

router.get("/user", createUser.getUser);

export default router;
