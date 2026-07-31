import express from 'express';
import ClassController from '../controllers/classController.ts';
import { authRequired, checkRole } from '../middlewares/authMiddleware.ts';
import { validateClass } from '../middlewares/classMiddlewares.ts';

const route = express.Router();

route
    .post('/create', authRequired,checkRole(["ADM"]),ClassController.create)
    // .post('/archive',ClassController.)
    .get('/findAll',authRequired,checkRole(["ADM"]),ClassController.showClasses)
    .put('/update/:id',authRequired,checkRole(["ADM"]),ClassController.updateClass)
    .delete('/delete/:id',authRequired,checkRole(["ADM"]),ClassController.deleteClass)
    .get('/findById/:id',authRequired,ClassController.showClass)
    .post('/add/users/:id',authRequired,ClassController.addStudent)
    .delete('/delete/users/:id',authRequired,ClassController.RemoveStudent)

    
export default route;