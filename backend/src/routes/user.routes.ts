import express from 'express';

const route = express.Router();

route
    .post('/user/create')
    .get('/user/findAll')
    .put('/user/update/:id')
    .delete('/user/delete/:id')
    .get('/user/findById/:id')
    .get('/user/:id/perfomance')
    .get('/user/:id/tests')

export default route;