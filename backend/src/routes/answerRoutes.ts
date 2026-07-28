import express from 'express';
import AnswerController from '../controllers/answerController.ts';
import { authRequired } from '../middlewares/authMiddleware.ts';

const route = express.Router();

route
    .get('/findById/:id',authRequired,AnswerController.getAnswerById)
    .get('/findAll',authRequired,AnswerController.showAnswers)
    .put('/update/:id',authRequired,AnswerController.updateAnswer)
    .delete('/delete/:id',authRequired,AnswerController.deleteAnswer)

export default route;