
import express from "express";
import authController from "../controllers/authController.ts";
import { checkRole } from "../middlewares/authMiddleware.ts";

const route = express.Router()

route 
    .post('/register',authController.register)
    .post('/login',authController.login)

export default route;