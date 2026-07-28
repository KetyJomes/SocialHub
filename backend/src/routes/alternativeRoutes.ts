import express from 'express';
import alternativeController from '../controllers/alternativeController.ts';
import { validateAlternative } from '../middlewares/alternativeMiddlewares.ts';
import { checkRequiredFields } from '../middlewares/checkIdMiddleware.ts';
import authController from '../controllers/authController.ts';
import { authRequired, checkRole } from '../middlewares/authMiddleware.ts';

const route = express.Router();

route

    .post('/create',authRequired,checkRole,validateAlternative,alternativeController.create)
    .get('/findById/:id',authRequired,checkRole,checkRequiredFields,alternativeController.getAlternativeById)
    .get('/findAll',authRequired,checkRole,alternativeController.showAlternatives)
    .put('/update/:id',authRequired,checkRole,checkRequiredFields,alternativeController.updateAlternative)
    .delete('/delete/:id',authRequired,checkRole,checkRequiredFields, alternativeController.deleteAlternative)



export default route;