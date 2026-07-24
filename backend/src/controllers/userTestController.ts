import { Request, Response } from "express";
import { createUsertestDTO } from "../DTOS/userTestDTO.ts";
import { createUserTest, findByEvaluated, findByEvaluator } from "../services/userTestServices.ts";
import { prisma } from "../lib/prisma.ts";

export default class UserTestController {

    static async create(req: Request, res: Response) {

        const data: createUsertestDTO = req.body;

        try {
            const userTest = await createUserTest(data);
            return res.status(201).send({ response: "Avaliação criada com sucesso!", userTest });
        } catch (e) {

            return res.status(500).send({response: "Ocorreu um erro no servidor." });

        }

    }
    static async findByEvaluated(req:Request,res:Response){

        const id = Number(req.params.id);

        try{
            const tests = await findByEvaluated(id);
            return res.status(200).send(tests);

        }catch(e){

            return res.status(500).send({response:"Erro no servidor"});
        }
    }

    static async findByEvaluator(req:Request,res:Response){

        const id = Number(req.params.id);

        try{
            const tests = await findByEvaluator(id);
            return res.status(200).send(tests);

        }catch(e){

            return res.status(500).send({response:"Erro no servidor"});
        }
    }
}
    
