import express from 'express';
import UserController from '../controllers/userController.ts';

const route = express.Router();

route
    .post('/create',UserController.create)
    .get('/findAll', UserController.showUsers)
    .patch('/update/:id',UserController.updateUser)
    .delete('/delete/:id',UserController.removeUser)
    .get('/findById/:id',UserController.showUser)



export default route;