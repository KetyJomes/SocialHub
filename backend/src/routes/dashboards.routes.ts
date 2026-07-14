import express from 'express';

const route = express.Router();

route
    .get('/dashboards')
    .get('/dashboards/user/:id')
    .get('/dashboards/class/:id')
    .get('/dashboards/ranking')
    .get('/dashboards/evolution/:id')
    .get('/dashboards/average/user/:id')
    .get('/dashboards/average/class/:id')
    .get('/dashboards/comparison/:id')
    

export default route;