import express from 'express';

const route = express.Router();

route
    .post('/create')
    .get('/findById/:id')
    .get('/findAll')
    .put('/update/:id')
    .delete('/delete/:id')

export default route;