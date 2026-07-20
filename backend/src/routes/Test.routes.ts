import express from 'express';
import TestController from '../controllers/testController.ts';

const route = express.Router();

route
    .post('/test/create',TestController.create)
    .get('/test/findAll',TestController.showTests)
    .put('/test/update/:id',TestController.updateTest)
    .delete('/test/delete/:id',TestController.deleteTest)
    .get('/test/findById/:id',TestController.showTest)
    .patch('/test/:id/close',TestController.RemoveAccess)
    .patch('/test/:id/open',TestController.publishTest)
    .post('/test/:id/skill',TestController.addSkill)
    .delete('/test/:id/skill/:id',TestController.removeSkill)
    .patch('/test/:id/publish',TestController.publishTest)

export default route;