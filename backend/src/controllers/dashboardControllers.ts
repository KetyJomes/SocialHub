import {Request, Response} from 'express';
import { getClassAvarage, getComparison,getClass, getRangking, getEvolution, getSkills, getStudent } from '../services/dashboardServices.ts';

export default class dashboardController {
    static async showAverage (req:Request, res: Response){
        try{
            const averageDashboard  = await getClassAvarage();
            return res.status(200).send({averageDashboard})
        }
        catch(e){
            return res.status(500).send({ response: 'Ocorreu um erro no servidor'})
        }
    }


    static async showComparison (req: Request, res: Response){
        const id = Number(req.params.id);

        try{
            const comparassionDashboard = await getComparison(id);
            return res.status(200).send(comparassionDashboard)
        }
        catch(e){
            return res.status(500).send({response:'Ocorreu um erro no servidor'})
        }
    }
    

    static async showClass (req: Request, res: Response){
        const id = Number(req.params.id);

        try{
            const classDashboard = await getClass(id);
            return res.status(200).send(classDashboard)
        }
        catch(e){
            return res.status(500).send({response:'Ocorreu um erro no servidor'})
        }
    }

    static async showEvolution (req: Request, res: Response){
        const id = Number(req.params.id);

        try{
            const evolutionDashboard = await getEvolution(id);
            return res.status(200).send(evolutionDashboard)
        }
        catch(e){
            return res.status(500).send({response:'Ocorreu um erro no servidor'})
        }
    }

    static async showSkills (req: Request, res: Response){
        const id = Number(req.params.id);

        try {
            const skillDashboard = await getSkills(id);
            return res.status(200).send(skillDashboard)
        }
        catch(e){
            return res.status(500).send({response: 'Ocorreu um erro no servidor'})
        }
    }

    static async showRanking (req: Request, res: Response){
        try{
            const ranking  = await getRangking();
            return res.status(200).send({ranking})
        }
        catch(e){
            return res.status(500).send({ response: 'Ocorreu um erro no servidor'})
        }
    }

    static async getStudent  (req: Request, res: Response){
    
    const studentId = Number(req.params.id);

    try {
       
        const studentDashboard = await getStudent(studentId);
        if (!studentDashboard) {
            return res.status(404).json({ 
                response: "Estudante não encontrado no sistema." 
            });
        }

      
        return res.status(200).json({
            response: "Dados do estudante carregados com sucesso.",
            data: studentDashboard
        });

    } catch (error: any) {
        
        return res.status(500).json({ 
            response: "Erro interno ao buscar dados do estudante.",
            error: error.message 
        });
    }
};
        
}
