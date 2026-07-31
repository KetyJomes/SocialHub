import { NextFunction, Request, Response } from "express";

export const validateClass = (req: Request, res: Response, next: NextFunction) =>{
       const { Course, period, idPIC } = req.body;

    if (!Course || !period || !idPIC) {
        return res.status(400).json({
            response: "Preencha todos os campos."
        });
    }


    return next();
} 