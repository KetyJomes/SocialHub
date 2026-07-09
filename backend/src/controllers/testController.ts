import {Request, Response} from 'express';
import { createTestDTO } from '../dtos/testDTO.ts';
import { createTest, showTest, showTests } from '../services/testServices.ts';
import test from 'node:test';

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
            const user = await showTest(id);
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
}
