import express from 'express';
import AnswerController from '../controllers/answerController.ts';

const route = express.Router();

route
    .post('/create',AnswerController.create)
    .get('/findById/:id',AnswerController.getAnswerById)
    .get('/findAll',AnswerController.showAnswers)
    .put('/update/:id',AnswerController.updateAnswer)
    .delete('/delete/:id',AnswerController.deleteAnswer)

export default route;