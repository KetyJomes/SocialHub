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

export const checkRole = (allowedRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        // 1. Verifica se o middleware authRequired rodou antes e injetou o usuário
        if (!req.user) {
            return res.status(401).json({ response: "Usuário não autenticado." });
        }

        // 2. Verifica se a role do usuário logado está na lista de permissões da rota
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ 
                response: "Acesso negado. Você não tem permissão para executar esta ação." 
            });
        }

        return next();
    };
};