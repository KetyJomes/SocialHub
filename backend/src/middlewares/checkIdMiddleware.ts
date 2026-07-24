import { NextFunction, Request, Response } from "express";

export const checkRequiredFields = (fields: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        for (const field of fields) {
            if (req.body[field] === undefined || req.body[field] === null) {
                return res.status(400).json({ 
                    response: `Erro: O campo '${field}' é obrigatório nesta rota.` 
                });
            }
        }
        return next();
    };
};