import express from 'express';
import SkillController from '../controllers/skillsController.ts';

const route = express.Router();

route
    .post('/skill/create',SkillController.create)
    .get('/skill/findAll',SkillController.showSkill)
    .patch('/skill/update/:id',SkillController.updateSkill)
    .delete('/skill/delete/:id',SkillController.deleteSkills)
    .get('/skill/findById/:id',SkillController.getSkillById)
    // .get('/skill/find/alternative/:id',SkillController.)

export default route;