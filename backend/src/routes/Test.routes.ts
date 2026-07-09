import express from 'express';

const route = express.Router();

route
    .post('/create')
    .get('/findAll')
    .put('/update/:id')
    .delete('/delete/:id')
    .get('/findById/:id')
    .patch('/:idtest/close')
    .patch('/:idtest/open')
    .post('/:idtest/skill')
    .delete('/delete/:idtest/:idskill/')
    .patch('/:id/publish')

export default route;