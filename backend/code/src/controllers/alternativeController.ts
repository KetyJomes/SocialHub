import { Request, Response} from "express";
import { createAlternativeDTO, updateAlternativeDTO } from "../dtos/alternativeDTO.ts";
import { createAlternative, deleteAlternative, findAlternatives, findAlternativesById, updateAlternative } from "../services/alternativeService.ts";

export default class alternativeController {
    static async create(req: Request, res: Response){
        const data: createAlternativeDTO = req.body
        try{
            await createAlternative(data)
            return res.status(200).send({response: "Alternativa registrada com sucesso!" })
        }
        catch(e){
            return res.status(500).send({response: "Ocorreu erro no servidor"})
        }
    }

    static async showAlternatives(req: Request, res:Response){
            try {
                await findAlternatives()
                return res.status(404).send({response: "Nenhum  encontrado"})
            } catch (error) {
                
            }
    }

    static async getAlternativeById(req: Request, res: Response){
        const {id} = req.params
        try{
            await findAlternativesById(Number(id))
        }
        catch(error){
            return res.status(404).send({response:"nenhuma alternativa encontrada!"})
            
        }

    }

    static async updateAlternative(req: Request, res: Response){
        const {id} = req.params
        const data: updateAlternativeDTO = req.body
        try {
            await updateAlternative(Number(id),data)
            return res.status(200).send({response: "Alternativa atualizado"})
        } catch (error) {
            return res.status(500).send({response: " Erro ao atualizar alternativa"})
        }
    }
    
    static async deleteAlternative(req:Request, res: Response){
        const {id} = req.params

        try{
            await deleteAlternative(Number(id))
            return res.status(200).send({response: "Alternative deletada com sucesso!"})
        }
        catch(error){
            return res.status(500).send({reponse: "Erro ao deletar"})
        }
    }
}