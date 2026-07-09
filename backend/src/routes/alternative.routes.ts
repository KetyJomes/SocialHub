import express from 'express';

const route = express.Router();

route
    .post('/alternative/create')
    .get('/alternative/findById/:id')
    .get('/alternative/findAll')
    .put('/alternative/update/:id')
    .delete('/alternative/delete/:id')

export default route;