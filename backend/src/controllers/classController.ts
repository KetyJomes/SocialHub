import {Request,Response} from 'express';
import { createClassDTO,updateClassDTO } from '../dtos/classDTO.ts';
import { createClass, updateClass, deleteClass, showClass, showClasses, addStudentToClass, removeStudentFromClass, archiveClass } from '../services/classServices.ts';

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
            return res.status(500).send({ response: "Ocorreu algum erro no servidor"})
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

    static async addStudent(req:Request, res: Response){
        const id = parseInt(req.params.id,10);
        const {studentId} = req.body;
            
        if(isNaN(id) || !studentId){
            return res.status(400).send({Response: "Aluno não encontrado"})
        }
        try{
            await addStudentToClass (id, parseInt(studentId,10));
            return res.status(200).send({ response:  "Aluno adicionado com sucesso"})
        }catch (e){
            return res.status(500).send({ Response: "Não foi possivel adicionar o aluno a sala"})
        }
    }

    static async RemoveStudent(req:Request, res: Response){
        const id = parseInt(req.params.id,10);
        const {studentId} = req.body;
            
        if(isNaN(id) || !studentId){
            return res.status(400).send({Response: "Aluno não encontrado"})
        }
        try{
            await removeStudentFromClass (id, parseInt(studentId,10));
            return res.status(200).send({ response:  "Aluno removido com sucesso"})
        }catch (e){
            return res.status(500).send({ Response: "Não foi possivel remover o aluno da sala"})
        }
    }

    static async archiveClass(req:Request, res: Response){
        const id = parseInt(req.params[0],10);
        try {
            await archiveClass(id)
            return res.status(200).send({ Response: "Sala arquivada com sucesso"})
        }catch (e){
            return res.status(500).send({ Response: "Não foi possivel finalizar a ação"})
        }
    }
}
