import express from 'express';

const route = express.Router();

route
    .post('/class/create')
    .get('/class/findAll')
    .put('/class/update/:id')
    .delete('/class/delete/:id')
    .get('/class/findById/:id')
    .post('/class/add/users/:id')
    .post('/class/add/users/:id')
    .delete('/class/delete/users/:id')

    
export default route;