import express from 'express';

const route = express.Router();

route
    .post('/class/create')
    .get('/class/findAll')
    .put('/class/update/:id')
    .delete('/class/delete/:id')
    .get('/class/findById/:id')
    .post('/class/add/:id/users')
    .post('/class/add/:id/users')
    .delete('/class/delete/:id/users')

    

export default route;