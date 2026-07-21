
import express from "express";
import UserController from "../controllers/userController.ts";

const route = express.Router()

route 
    .post('/login',UserController.login)
    // .post('/logout',UserController.)

export default route;