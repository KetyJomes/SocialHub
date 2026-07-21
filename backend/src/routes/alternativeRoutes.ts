import express from 'express';
import alternativeController from '../controllers/alternativeController.ts';

const route = express.Router();

route

    .post('/create',alternativeController.create)
    .get('/findById/:id',alternativeController.getAlternativeById)
    .get('/findAll',alternativeController.showAlternatives)
    .put('/update/:id',alternativeController.updateAlternative)
    .delete('/delete/:id',alternativeController.deleteAlternative)



export default route;