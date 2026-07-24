import express from 'express';
import alternativeController from '../controllers/alternativeController.ts';
import { validateAlternative } from '../middlewares/alternativeMiddlewares.ts';
import { checkRequiredFields } from '../middlewares/checkIdMiddleware.ts';

const route = express.Router();

route

    .post('/create',validateAlternative,alternativeController.create)
    .get('/findById/:id',checkRequiredFields,alternativeController.getAlternativeById)
    .get('/findAll',alternativeController.showAlternatives)
    .put('/update/:id',checkRequiredFields,alternativeController.updateAlternative)
    .delete('/delete/:id',checkRequiredFields, alternativeController.deleteAlternative)



export default route;