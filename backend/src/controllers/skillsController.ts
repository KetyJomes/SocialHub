import { Request, Response} from "express";


// import { createAlternative, deleteAlternatives, findAlternatives, findAlternativesById, findByskillId, updateAlternative } from "../services/alternativeService.ts";
import { createSkill, deleteSkill, getSkillById, getSkills, updateSkill } from "../services/skillService.ts";
import { createSkillDTO, updateSkillDTO } from "../DTOS/skillDTO.ts";



export default class SkillController {
    static async create(req: Request, res: Response){
        const data: createSkillDTO = req.body
        const {id} = req.params

        try{

            await createSkill(Number(id),data)
            return res.status(200).send({response: "Competência registrada com sucesso!" })
        }
        catch(e){
            return res.status(500).send({response: "Ocorreu erro no servidor"})
        }
    }

    static async showSkill(req: Request, res:Response){
            try {
                const skills = await getSkills()
                return res.status(200).send(skills)

            } catch (error) {
                return res.status(404).send({response: "Nenhuma competencia encontrada"})
                
            }
    }

    static async getSkillById(req: Request, res: Response){
        const {id} = req.params
        try{
            await getSkillById(Number(id))
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