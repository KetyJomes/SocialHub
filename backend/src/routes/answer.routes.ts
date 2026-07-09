import express from 'express';

const route = express.Router();

route
    .post('/answer/create')
    .get('/answer/findById/:id')
    .get('/answer/findAll')
    .put('/answer/update/:id')
    .delete('/answer/delete/:id')

export default route;