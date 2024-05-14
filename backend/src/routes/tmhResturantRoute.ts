import express from "express";
import multer from "multer";
import TmhResturantController from "../controllers/TmhResturantController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateTmhResturantRequest } from "../middleware/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

router.post(
  "/",
  upload.single("imageFile"),
  validateTmhResturantRequest,
  jwtCheck,
  jwtParse,
  TmhResturantController.createTmhResturant
);

export default router;
