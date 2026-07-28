import express from 'express';
import ClassController from '../controllers/classController.ts';
import { validateClass } from '../middlewares/classMiddlewares.ts';

const route = express.Router();

route
    .post('/create',validateClass, ClassController.create)
    // .post('/archive',ClassController.)
    .get('/findAll',ClassController.showClasses)
    .put('/update/:id',ClassController.updateClass)
    .delete('/delete/:id',ClassController.deleteClass)
    .get('/findById/:id',ClassController.showClass)
    .post('/add/users/:id',ClassController.addStudent)
    .delete('/delete/users/:id',ClassController.RemoveStudent)

    
export default route;