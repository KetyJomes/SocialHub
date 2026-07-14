import express from 'express';

const route = express.Router();

route
    .post('/test/create')
    .get('/test/findAll')
    .put('/test/update/:id')
    .delete('/test/delete/:id')
    .get('/test/findById/:id')
    .patch('/test/:id/close')
    .patch('/test/:id/open')
    .post('/test/:id/skill')
    .delete('/test/:id/skill/:id')
    .patch('/test/:id/publish')

export default route;