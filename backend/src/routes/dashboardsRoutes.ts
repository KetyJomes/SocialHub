import express from 'express';
import dashboardController from '../controllers/dashboardControllers.ts';

const route = express.Router();

route

    // .get('/user/:id',dashboardController.)
    .get('/class/:id',dashboardController.showClass)
    .get('/ranking',dashboardController.showRanking)
    .get('/evolution/:id',dashboardController.showEvolution)
    // .get('/average/user/:id',dashboardController.)
    .get('/average/class/:id',dashboardController.showClassAverage)
    .get('/comparison/:id',dashboardController.showComparison)



export default route;