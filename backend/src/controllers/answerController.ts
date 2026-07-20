import { Request, Response} from "express";
import { createAnswerDTO, updateAnswerDTO } from "../dtos/answersDTO.ts";
import { createAnswer, deleteAnswer, findAnswers, findAnswersById, updateAnswer } from "../services/answerService.ts";

export default class AnswerController {
    static async create(req: Request, res: Response){
        const data: createAnswerDTO = req.body
        try{
            await createAnswer(data)
            return res.status(200).send({response: "Alternativa registrada com sucesso!" })
        }
        catch(e){
            return res.status(500).send({response: "Ocorreu erro no servidor"})
        }
    }

    static async showAnswers(req: Request, res:Response){
            try {
                await findAnswers()
                return res.status(404).send({response: "Nenhum  encontrado"})
            } catch (error) {
                
            }
    }

    static async getAnswerById(req: Request, res: Response){
        const {id} = req.params
        try{
            await findAnswersById(Number(id))
        }
        catch(error){
            return res.status(404).send({response:"nenhuma alternativa encontrada!"})
            
        }

    }

    static async updateAnswer(req: Request, res: Response){
        const {id} = req.params
        const data: updateAnswerDTO = req.body
        try {
            await updateAnswer(Number(id),data)
            return res.status(200).send({response: "Alternativa atualizado"})
        } catch (error) {
            return res.status(500).send({response: " Erro ao atualizar alternativa"})
        }
    }
    
    static async deleteAnswer(req:Request, res: Response){
        const {id} = req.params

        try{
            await deleteAnswer(Number(id))
            return res.status(200).send({response: "Answer deletada com sucesso!"})
        }
        catch(error){
            return res.status(500).send({reponse: "Erro ao deletar"})
        }
    }
}