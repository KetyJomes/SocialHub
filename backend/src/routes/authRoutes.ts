
import express from "express";
import authController from "../controllers/authController.ts";

const route = express.Router()

route 
    .post('/register',authController.register)
    .post('/login',authController.login)

export default route;