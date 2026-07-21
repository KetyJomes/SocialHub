import { Request, Response} from "express";
import { createAlternativeDTO, updateAlternativeDTO } from "../DTOS/alternativeDTO.ts";
import { createAlternative, deleteAlternatives, findAlternatives, findAlternativesById, findByskill, updateAlternative } from "../services/alternativeService.ts";
import { createSkill, deleteSkill, getSkills, updateSkill } from "../services/skillService.ts";
import { createSkillDTO, updateSkillDTO } from "../DTOS/skillDTO.ts";

export default class SkillController {
    static async create(req: Request, res: Response){
        const data: createSkillDTO = req.body
        try{
            await createSkill(data)
            return res.status(200).send({response: "Competência registrada com sucesso!" })
        }
        catch(e){
            return res.status(500).send({response: "Ocorreu erro no servidor"})
        }
    }

    static async showSkill(req: Request, res:Response){
            try {
                await getSkills()
                return res.status(404).send({response: "Nenhuma competencia encontrada"})
            } catch (error) {
                
            }
    }

    static async getSkillById(req: Request, res: Response){
        const {id} = req.params
        try{
            await findByskill(Number(id))
        }
        catch(error){
            return res.status(404).send({response:"nenhuma Competência encontrada!"})
            
        }

    }

    static async updateSkill(req: Request, res: Response){
        const {id} = req.params
        const data: updateSkillDTO = req.body
        try {
            await updateSkill(Number(id),data)
            return res.status(200).send({response: "Competência atualizada"})
        } catch (error) {
            return res.status(500).send({response: " Erro ao atualizar Competência"})
        }
    }
    
    static async deleteSkills(req:Request, res: Response){
        const {id} = req.params

        try{
            await deleteSkill(Number(id))
            return res.status(200).send({response: "Competencia deletada com sucesso!"})
        }
        catch(error){
            return res.status(500).send({reponse: "Erro ao deletar"})
        }
    }
}