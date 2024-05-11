import express from "express";
import createUser from "../controllers/UserController";

const router = express.Router();

router.post("/", createUser.createUser);

router.get("/user", createUser.getUser);

export default router;
