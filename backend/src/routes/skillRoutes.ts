import express from 'express';
import SkillController from '../controllers/skillsController.ts';
import { authRequired, checkRole } from '../middlewares/authMiddleware.ts';

const route = express.Router();

route
    .get('/findAll',authRequired,SkillController.showSkill)
    .patch('/update/:id',authRequired,checkRole,SkillController.updateSkill)
    .delete('/delete/:id',authRequired,checkRole,SkillController.deleteSkills)
    .get('/findById/:id',authRequired,SkillController.getSkillById)
    // .get('/find/alternative/:id',SkillController.)

export default route;