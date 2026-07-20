import express from 'express';
import dashboardController from '../controllers/dashboardControllers.ts';

const route = express.Router();

route
    // .get('/dashboards/user/:id',dashboardController.)
    .get('/dashboards/class/:id',dashboardController.showClass)
    .get('/dashboards/ranking',dashboardController.showRanking)
    .get('/dashboards/evolution/:id',dashboardController.showEvolution)
    // .get('/dashboards/average/user/:id',dashboardController.)
    .get('/dashboards/average/class/:id',dashboardController.showClassAverage)
    .get('/dashboards/comparison/:id',dashboardController.showComparison)
    

export default route;