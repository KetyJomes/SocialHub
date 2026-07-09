import express from 'express';

const route = express.Router();

route
    .post('/create')
    .get('/findAll')
    .put('/update/:id')
    .delete('/delete/:id')
    .get('/findById/:id')
    .get('/find/:id/alternative')

export default route;