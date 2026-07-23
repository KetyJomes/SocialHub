import { NextFunction, Request, Response} from "express"

export const checkId = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ 
            response: 'Erro: O parâmetro ID é obrigatório nesta rota.' 
        });
    }
    return next();
};