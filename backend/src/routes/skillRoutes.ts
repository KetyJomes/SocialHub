import express from 'express';
import SkillController from '../controllers/skillsController.ts';
import { authRequired, checkRole } from '../middlewares/authMiddleware.ts';

const route = express.Router();

route
    .post('/create', authRequired, checkRole, SkillController.create)
    .get('/findAll',SkillController.showSkill)
    .patch('/update/:id',SkillController.updateSkill)
    .delete('/delete/:id',SkillController.deleteSkills)
    .get('/findById/:id',SkillController.getSkillById)
    // .get('/find/alternative/:id',SkillController.)

export default route;