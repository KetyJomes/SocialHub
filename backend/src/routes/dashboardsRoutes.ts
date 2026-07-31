import express from 'express';
import dashboardController from '../controllers/dashboardControllers.ts';
import { authRequired, checkRole } from '../middlewares/authMiddleware.ts';

const route = express.Router();

route

    // .get('/user/:id',dashboardController.)
    .get('/class/:id',authRequired,dashboardController.showClass)
    .get('/ranking',authRequired,checkRole,dashboardController.showRanking)
    .get('/evolution/:id',authRequired,dashboardController.showEvolution)
    // .get('/skills/:id',dashboardController.)
    .get('/average/class/:id',authRequired,dashboardController.showAverage)
    .get('/comparison/:id',authRequired,dashboardController.showComparison)



export default route;