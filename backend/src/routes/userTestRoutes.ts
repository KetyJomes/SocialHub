import express from 'express';
import { createUserTest } from '../services/userTestServices.ts';
import UserTestController from '../controllers/userTestController.ts';

const route = express.Router();


route
    // .post('/create',UserTestController.create)
    // .put('/update/:id',UserTestController)
    // .get('/findById/:id',UserTestController)
    // .post('/:id/submit',UserTestController)
    // .get("/evaluated/:id",UserTestController)
    // .get("/evaluator/:id",UserTestController)

export default route;