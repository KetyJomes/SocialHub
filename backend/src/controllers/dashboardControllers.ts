import {Request, Response} from 'express';
import { getAvarage, getComparison,getClass, getRangking, getEvolution, getSkills } from '../services/dashboardServices.ts';

export default class dashboardController {
    static async showAverage (req:Request, res: Response){
        try{
            const averageDashboard  = await getAvarage();
            return res.status(200).send({averageDashboard})
        }
        catch(e){
            return res.status(500).send({ response: 'Ocorreu um erro no servidor'})
        }
    }

    // static async showGeneral (req: Request, res: Response){
    //     try{
    //         const generalDashboard = await getGeneral();
    //         return res.status(500).send({ generalDashboard})
    //     }
    //     catch(e){
    //         return res.status(500).send({response: 'Ocorreu um erro no servidor'})
    //     }
    // }

    static async showComparison (req: Request, res: Response){
        const id = parseInt(req.params[0],10);

        try{
            const comparassionDashboard = await getComparison(id);
            return res.status(200).send(comparassionDashboard)
        }
        catch(e){
            return res.status(500).send({response:'Ocorreu um erro no servidor'})
        }
    }
    

    static async showClass (req: Request, res: Response){
        const id = parseInt(req.params[0],10);

        try{
            const classDashboard = await getClass(id);
            return res.status(200).send(classDashboard)
        }
        catch(e){
            return res.status(500).send({response:'Ocorreu um erro no servidor'})
        }
    }

    static async showEvolution (req: Request, res: Response){
        const id = parseInt(req.params[0],10);

        try{
            const evolutionDashboard = await getEvolution(id);
            return res.status(200).send(evolutionDashboard)
        }
        catch(e){
            return res.status(500).send({response:'Ocorreu um erro no servidor'})
        }
    }

    static async showSkills (req: Request, res: Response){
        const id = parseInt(req.params[0],10);

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


        
}
