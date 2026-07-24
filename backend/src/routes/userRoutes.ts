import express from 'express';
import UserController from '../controllers/userController.ts';
import { validateCreate } from '../middlewares/userMiddlewares.ts';

const route = express.Router();

route
    .post('/create', validateCreate,UserController.create)
    .get('/findAll', UserController.showUsers)
    .patch('/update/:id',UserController.updateUser)
    .delete('/delete/:id',UserController.removeUser)
    .get('/findById/:id',UserController.showUser)



export default route;