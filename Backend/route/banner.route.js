import express from "express";
import {getBanner} from "../controller/banner.controller.js";

const router = express.Router();

router.get("/",getBanner);
export default router;