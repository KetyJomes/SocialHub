import express from 'express';
import ClassController from '../controllers/classController.ts';

const route = express.Router();

route
    .post('/create',ClassController.create)
    // .post('/archive',ClassController.)
    .get('/findAll',ClassController.showClasses)
    .put('/update/:id',ClassController.updateClass)
    .delete('/delete/:id',ClassController.deleteClass)
    .get('/findById/:id',ClassController.showClass)
    .post('/add/users/:id',ClassController.addStudent)
    .delete('/delete/users/:id',ClassController.RemoveStudent)

    
export default route;