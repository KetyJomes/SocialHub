import express from 'express';

const route = express.Router();

route
    .post('/create')
    .get('/findAll')
    .put('/update/:id')
    .delete('/delete/:id')
    .get('/findById/:id')
    .get('/:id/perfomance')
    .get('/:id/tests')

export default route;