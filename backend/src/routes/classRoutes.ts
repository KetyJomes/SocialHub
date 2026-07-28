import express from 'express';
import ClassController from '../controllers/classController.ts';
<<<<<<< HEAD
import { authRequired, checkRole } from '../middlewares/authMiddleware.ts';
=======
import { validateClass } from '../middlewares/classMiddlewares.ts';
>>>>>>> 5e2aee4212afe7956c20d5ab50d50265a0d8e23a

const route = express.Router();

route
<<<<<<< HEAD
    .post('/create', authRequired,checkRole,ClassController.create)
=======
    .post('/create',validateClass, ClassController.create)
>>>>>>> 5e2aee4212afe7956c20d5ab50d50265a0d8e23a
    // .post('/archive',ClassController.)
    .get('/findAll',authRequired,checkRole,ClassController.showClasses)
    .put('/update/:id',authRequired,checkRole,ClassController.updateClass)
    .delete('/delete/:id',authRequired,checkRole,ClassController.deleteClass)
    .get('/findById/:id',authRequired,checkRole,ClassController.showClass)
    .post('/add/users/:id',authRequired,checkRole,ClassController.addStudent)
    .delete('/delete/users/:id',authRequired,checkRole,ClassController.RemoveStudent)

    
export default route;