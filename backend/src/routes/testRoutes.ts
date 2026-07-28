import express from 'express';
import TestController from '../controllers/testController.ts';
import { authRequired, checkRole } from '../middlewares/authMiddleware.ts';

const route = express.Router();

route
    .post('/create',authRequired,checkRole,TestController.create)
    .get('/findAll',authRequired,TestController.showTests)
    .put('/update/:id',authRequired,TestController.updateTest)
    .delete('/delete/:id',authRequired,checkRole,TestController.deleteTest)
    .get('/findById/:id',authRequired,TestController.showTest)
    .patch('/:id/close',authRequired,checkRole,TestController.RemoveAccess)
    .patch('/:id/open',authRequired,checkRole,TestController.publishTest)
    .post('/:id/skill',authRequired,checkRole,TestController.addSkill)
    .delete('/:id/skill/:id',authRequired,checkRole,TestController.removeSkill)
    .patch('/:id/publish',authRequired,checkRole,TestController.publishTest)

export default route;