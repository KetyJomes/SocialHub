import express from 'express';
import ClassController from '../controllers/classController.ts';

const route = express.Router();

route
    .post('/class/create',ClassController.create)
    // .post('/class/archive',ClassController.)
    .get('/class/findAll',ClassController.showClasses)
    .put('/class/update/:id',ClassController.updateClass)
    .delete('/class/delete/:id',ClassController.deleteClass)
    .get('/class/findById/:id',ClassController.showClass)
    .post('/class/add/users/:id',ClassController.addStudent)
    .delete('/class/delete/users/:id',ClassController.RemoveStudent)

    
export default route;