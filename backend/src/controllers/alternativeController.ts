import { Request, Response} from "express";
import { createAlternativeDTO } from "../dtos/alternativeDTO.ts";
import { createAlternative, findAlternatives, findAlternativesById } from "../services/alternativeService.ts";

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

    static async showAlternative(req: Request, res:Response){
            try {
                await findAlternatives()
                return res.status(404).send({response: "Nenhum  encontrado"})
            } catch (error) {
                
            }
    }

    static async getAlternativeById(req: Request, res: Response){1
        const {id} = req.params
        try{
            await findAlternativesById(Number(id))
            return res.status(404).send({response:"nenhuma alternativa encontrada!"})
        }
        catch(error){

        }

    }
}