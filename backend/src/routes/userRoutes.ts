import express from 'express';
import UserController from '../controllers/userController.ts';
import { validateCreate } from '../middlewares/userMiddlewares.ts';
import { authRequired, checkRole } from '../middlewares/authMiddleware.ts';
import { checkRequiredFields } from '../middlewares/checkIdMiddleware.ts';

const route = express.Router();

route
    .get('/findAll' ,authRequired,UserController.showUsers)
    .patch('/update/:id',authRequired,checkRole,checkRequiredFields,UserController.updateUser)
    .delete('/delete/:id',authRequired,checkRole,checkRequiredFields,UserController.removeUser)
    .get('/findById/:id',checkRequiredFields,checkRole,UserController.showUser)
    .patch('/updateRole/:id' ,authRequired,UserController.updateRole)



export default route;