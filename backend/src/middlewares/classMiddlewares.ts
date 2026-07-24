import { NextFunction, Request, Response } from "express";
import {prisma} from '../lib/prisma.ts'

export const validateClass = (req: Request, res: Response, next: NextFunction) =>{
    const {course, period, students} = req.body 
        if(!course|| !period || !students){
            return res.status(400).json({response: "Preencha os campos corretamente"})
        }

    if(students<=1){
        return res.status(400).json({response: "Adicione mais alunos"});
    }
    return next();
} 