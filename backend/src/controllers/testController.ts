import {Request, Response} from 'express';
import { createTestDTO, updateTestDTO } from '../dtos/testDTO.ts';
import { createTest, deleteTest, showTest, showTests, updateTest, allowAccess, cancelAccess, publishtest,addSkill,removeSkill} from '../services/testServices.ts';

// import test from 'node:test';

export default class TestController {
    static async create(req:Request, res: Response){
        const data: createTestDTO = req.body;
        try{
            await createTest(data);

            return res.status(201).send({ response: "Prova finalizada"});
        }
        catch(e) {
            return res.status(500).send({response: "Ocorreu algum erro no servidor"})
        }
    }

    static async showTest(req: Request, res: Response){
        const id = parseInt(req.params[0],10);
        try{
            const test = await showTest(id);
            return res.status(200).send(test)

        }
        
        catch(e){
            return res.status(500).send({ response: 'Ocorreu algum erro no servidor'})
        }
    }

    static async showTests(req: Request, res:Response){
        try{
            const tests = await showTests();

            return res.status(200).send(tests)
        }
        catch(e){
            return res.status(500).send({ response: 'Ocorreu algum erro no servidor'})
        }
    }

    static async deleteTest(req: Request, res: Response){
        const id = parseInt(req.params[0],10);
        try{
            await deleteTest(id);
            return res.status(200).send({ response: 'Prova exluida com sucesso'})
        }
        catch (e) {
            return res.status(500).send({ response: "A prova não pode ser deletada"})
        }
    }

    static async updateTest(req: Request, res: Response){
        try{
            const id = parseInt(req.params[0],10);
            const data: updateTestDTO = req.body;

            await updateTest(id, data);
            return res.status(200).send({response: 'Prova atualizado!'});

        }
        catch(e){
            return res.status(500).send({response: 'Não foi possivel atualizar a prova'})
        }
    }

    static async allowAccess(req: Request, res: Response){
        const id = parseInt(req.params.id,10);

        if (isNaN(id)){
            return res.status(400).send({response: "Teste não encontrado" })
        }
        try{
            await allowAccess(id);
            return res.status(200).send({response: 'Acesso ao teste liberado'})
        } catch (e) {
            return res.status(500).send({ response: "Erro ao liberar acesso do teste"})
        }
    
    }  

    static async  RemoveAccess(req: Request, res: Response){
        const id = parseInt(req.params.id,10);

        if (isNaN(id)){
            return res.status(400).send({response: "Teste não encontrado" })
        }
        try{
            await cancelAccess(id);
            return res.status(200).send({response: 'Acesso ao teste liberado'})
        } catch (e) {
            return res.status(500).send({ response: "Erro ao liberar acesso do teste"})
        }
    
    }  

    static async publishTest(req: Request, res: Response){
        const testeId = parseInt(req.params.id, 10);
        const {startDate, finalDate} = req.body;

        if(isNaN(testeId)){
            return res.status(400).send({ response: "Prova não publicada"});
        }
        if (!startDate || !finalDate){
            return res.status(400).send({ response: 'A data de inicio e fim são obrigatorias'})
        }
        try {
            await publishtest(testeId, new Date(startDate), new Date(finalDate));
            return res.status(200).send({ response: 'Prova publicada com sucesso'});
        }catch(e){
            return res.status(500).send({ response: 'Erro ao publicar a prova '})
        }
    }

    static async addSkill(req: Request, res: Response){
        const id = parseInt(req.params.id,10);
        const {skillId} = req.body;

        if(isNaN(id) || !skillId){
            return res.status(400).send({response: "Prova ou skill não encontrados"})
        }
        try{
            await addSkill (id, parseInt(skillId,10));
            return res.status(200).send({ response: "Skill adicionada a prova"})

        } catch (e) {
            return res.status(500).send({Response: "Não foi possivel adicionar a skill a prova"})
        }
    }
    
     static async removeSkill(req: Request, res: Response){
        const id = parseInt(req.params.id,10);
        const {skillId} = req.body;

        if(isNaN(id) || !skillId){
            return res.status(400).send({response: "Prova ou skill não encontrados"})
        }
        try{
            await removeSkill (id, parseInt(skillId,10));
            return res.status(200).send({ response: "Skill removida da prova"})

        } catch (e) {
            return res.status(500).send({Response: "Não foi possivel remover a skill a prova"})
        }
    }
}
