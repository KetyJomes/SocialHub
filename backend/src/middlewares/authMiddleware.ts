import {Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || "chavesupersecretaeindecifravel"

declare global {
    namespace Express {
        interface Request {
            user?: {id:number; role: string};
        }
    }
}

export const authRequired = (req: Request, res: Response, next: NextFunction) =>{
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Barer')){
        return res.status(401).json({response: "Acesso negado, Token não fornecido"})
    }

    const token = authHeader.split('')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as {id: number;role: string};

        req.user = decoded;

        return next();
    }catch(error){
        return res.status(401).json({response: "Token invalido"})
    }
    
};