import {Request,Response} from 'express';
import { createClassDTO,updateClassDTO } from '../dtos/classDTO.ts';
import { createClass, updateClass, deleteClass, showClass, showClasses } from '../services/classServices.ts';

export default class ClassController {
    
    static async create (req: Request, res: Response){
        const data: createClassDTO = req.body;
        try{
            await createClass(data);

            return res.status(201).send({response: "Turma criada"});
        }
        catch (e) {
            return res.status(500).send({ response : "Ocorreu algum erro no servidor."})
        }
    }

    static async updateClass(req: Request, res: Response){
        const data: updateClassDTO = req.body
        try{
            const id = parseInt(req.params[0],10);
            await updateClass(id,data);
            return res.status(200).send({ response: 'Turma atualizada com sucesso'})
        }
        catch (e) {
            return res.status(500).send({ rewsponse: "Ocorreu algum erro no servidor"})
        }
    }

    static async showClasses(req: Request, res: Response){
    try{
        const classes = await showClasses();
        return res.status(200).send(classes);
    }

    catch(e) {
        return res.status(500).send({ rewsponse: "Ocorreu algum erro no servidor"})
        }
    }

    static async showClass(req:Request, res: Response){
        const id = parseInt(req.params[0],10);
        try{
            const idClass = await showClass(id);
            return res.status(200).send(idClass);

        }
        catch(e){
            return res.status(500).send({ rewsponse: "Ocorreu algum erro no servidor"})
        }
    }

    static async deleteClass(req: Request, res: Response){
        const id = parseInt(req.params[0],10);
        try{
            await deleteClass(id);
            return res.status(200).send({ response: 'Turma exluida com sucesso'})
        }
        catch (e) {
            return res.status(500).send({ repsponse: "A turma não pode ser deletada"})
        }
    }
}
