
import express from "express";

const route = express.Router()

route 
    .post('/register')
    .post('/login')
    .post('/logout')

export default route;