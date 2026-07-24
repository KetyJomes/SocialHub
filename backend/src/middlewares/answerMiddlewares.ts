import { NextFunction, Request, Response} from "express";


export const validateAnswer = (req: Request, res: Response, next: NextFunction) =>{
    const {Value, Scale} = req.body
    if(!Value || !Scale){
        return res.status(400).send({response: "Preencha todos os campos para prosseguir!"})
    }

    next()
}
