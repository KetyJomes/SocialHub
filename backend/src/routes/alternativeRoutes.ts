import express from 'express';
import alternativeController from '../controllers/alternativeController.ts';
import { validateAlternative } from '../middlewares/alternativeMiddlewares.ts';
import { checkId } from '../middlewares/checkIdMiddleware.ts';

const route = express.Router();

route

    .post('/create',validateAlternative,alternativeController.create)
    .get('/findById/:id',checkId,alternativeController.getAlternativeById)
    .get('/findAll',alternativeController.showAlternatives)
    .put('/update/:id',checkId,alternativeController.updateAlternative)
    .delete('/delete/:id',checkId, alternativeController.deleteAlternative)



export default route;