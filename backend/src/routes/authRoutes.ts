
import express from "express";
import authController from "../controllers/authController.ts";

const route = express.Router()

route 
    .post('/login',authController.login)
    .post('/logout')

export default route;