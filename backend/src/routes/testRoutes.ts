import express from 'express';
import TestController from '../controllers/testController.ts';

const route = express.Router();

route
    .post('/create',TestController.create)
    .get('/findAll',TestController.showTests)
    .put('/update/:id',TestController.updateTest)
    .delete('/delete/:id',TestController.deleteTest)
    .get('/findById/:id',TestController.showTest)
    .patch('/:id/close',TestController.RemoveAccess)
    .patch('/:id/open',TestController.publishTest)
    .post('/:id/skill',TestController.addSkill)
    .delete('/:id/skill/:id',TestController.removeSkill)
    .patch('/:id/publish',TestController.publishTest)

export default route;