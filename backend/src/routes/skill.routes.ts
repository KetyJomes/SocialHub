import express from 'express';

const route = express.Router();

route
    .post('/skill/create')
    .get('/skill/findAll')
    .put('/skill/update/:id')
    .delete('/skill/delete/:id')
    .get('/skill/findById/:id')
    .get('/skill/find/alternative/:id')

export default route;