import express from 'express';
import UserController from '../controllers/userController.ts';

const route = express.Router();

route
    .post('/user/create',UserController.create)
    .get('/user/findAll', UserController.showUsers)
    .patch('/user/update/:id',UserController.updateUser)
    // .delete('/user/delete/:id',UserController.)
    .get('/user/findById/:id',UserController.showUser)
  

export default route;