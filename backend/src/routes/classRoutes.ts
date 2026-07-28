import express from 'express';
import ClassController from '../controllers/classController.ts';
import { authRequired, checkRole } from '../middlewares/authMiddleware.ts';

const route = express.Router();

route
    .post('/create', authRequired,checkRole,ClassController.create)
    // .post('/archive',ClassController.)
    .get('/findAll',authRequired,checkRole,ClassController.showClasses)
    .put('/update/:id',authRequired,checkRole,ClassController.updateClass)
    .delete('/delete/:id',authRequired,checkRole,ClassController.deleteClass)
    .get('/findById/:id',authRequired,checkRole,ClassController.showClass)
    .post('/add/users/:id',authRequired,checkRole,ClassController.addStudent)
    .delete('/delete/users/:id',authRequired,checkRole,ClassController.RemoveStudent)

    
export default route;