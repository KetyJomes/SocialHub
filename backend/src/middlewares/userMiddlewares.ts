import { NextFunction, Request, Response} from "express";

export const validateCreate = (req: Request,res: Response,next: NextFunction)=>{
    const {name, email,password, edv, role} = req.body
    if (!name || !email || !password || !edv ||role ){
        return res.status(400).send({response: 'Dados incorretos'})
    }
}