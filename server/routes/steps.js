import express from "express";
import { getSteps } from "../controllers/steps.js";

const router = express.Router();

/* READ */
router.get("/:postId", getSteps);


export default router;