import { NextFunction, Request, Response} from "express"
import {prisma} from '../lib/prisma.ts'

export const ValidateDate = (req: Request, res: Response, next:NextFunction) =>{
    const{startDate, finalDate} = req.body
    
    if (!startDate || !finalDate) {
        return res.status(400).json({response: "As datas são obrigatórias"})
    }

    const inputStartDate = new Date(startDate);
    const inputFinishDate = new Date(finalDate);

    const today = new Date();

    today.setHours(0,0,0,0)

    if (inputStartDate<today){
        return res.status(400).json({response: "A prova não pode ser marcada em um dia que já passou"});
    }
    if (inputStartDate <= inputFinishDate){
        return res.status(400).json({response: "A data final deve ser depois do dia inicial"});
    }

    return next();
}

export const ValidateTest = (req: Request, res: Response, next: NextFunction) =>{
    const{Content, startdate, finalDate, type, AvailableResult, frequency, questions } = req.body

    if (!Content || !startdate || !finalDate || !type || !AvailableResult || !frequency || !questions){
        return res.status(400).json({response: "Preencha todos os campos"})
    }

    const validFrequency = Object.values(frequency);
    if(!validFrequency.includes(frequency)){
        return res.status(400).json({
            response: 'Frequencia Invalida'
        });
    }
    return next();
}