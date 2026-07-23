import { NextFunction, Request, Response} from "express";
import { prisma } from "../lib/prisma.ts";






export const validateSkill = (req: Request, res: Response, next: NextFunction) =>{
    const {Title, Description} = req.body
    if(!Title || !Description){
        return res.status(400).send({response: "Preencha todos os campos para prosseguir!"})
    }

    next()
}


export const validateIdSkill = (req: Request, res: Response, next: NextFunction) =>{
    const {id} = req.body
    if(!id){
        return res.status(400).send({response: "Preencha todos os campos para prosseguir!"})
    }

    next()
}

