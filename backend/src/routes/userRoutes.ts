import express from 'express';
import UserController from '../controllers/userController.ts';
import { validateCreate } from '../middlewares/userMiddlewares.ts';
import { authRequired } from '../middlewares/authMiddleware.ts';
import { checkRequiredFields } from '../middlewares/checkIdMiddleware.ts';

const route = express.Router();

route
    .post('/create', validateCreate,UserController.create)
    .get('/findAll' ,UserController.showUsers)
    .patch('/update/:id',authRequired,checkRequiredFields,UserController.updateUser)
    .delete('/delete/:id',authRequired,checkRequiredFields,UserController.removeUser)
    .get('/findById/:id',checkRequiredFields,UserController.showUser)



export default route;