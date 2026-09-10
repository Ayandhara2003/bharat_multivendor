import express from "express";
import { singupData } from "../controller/singup.controller.js";
const router = express.Router()
router.post('/',singupData)
export default router;