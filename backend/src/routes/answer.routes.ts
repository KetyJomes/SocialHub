import express from 'express';
import AnswerController from '../controllers/answerController.ts';

const route = express.Router();

route
    .post('/answer/create',AnswerController.create)
    .get('/answer/findById/:id',AnswerController.getAnswerById)
    .get('/answer/findAll',AnswerController.showAnswers)
    .put('/answer/update/:id',AnswerController.updateAnswer)
    .delete('/answer/delete/:id',AnswerController.deleteAnswer)

export default route;