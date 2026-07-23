import { NextFunction, Request, Response} from "express";

export const validateAlternative = (req: Request, res: Response, next: NextFunction) =>{
    const {Content, Scale} = req.body
    if(!Content || !Scale){
        return res.status(400).send({response: "Preencha todos os campos para prosseguir!"})
    }

    next()
}



