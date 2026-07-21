import express from 'express';
import alternativeController from '../controllers/alternativeController.ts';

const route = express.Router();

route
    .post('/alternative/create',alternativeController.create)
    .get('/alternative/findById/:id',alternativeController.getAlternativeById)
    .get('/alternative/findAll',alternativeController.showAlternatives)
    .put('/alternative/update/:id',alternativeController.updateAlternative)
    .delete('/alternative/delete/:id',alternativeController.deleteAlternative)

export default route;