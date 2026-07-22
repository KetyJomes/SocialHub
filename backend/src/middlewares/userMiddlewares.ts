import { NextFunction, Request, Response} from "express";
import {z} from "zod"

export const validateCreate = (req: Request,res: Response,next: NextFunction)=>{
    const {name, email,password, edv, role} = req.body
    if (!name || !email || !password || !edv ||!role ){
        return res.status(400).send({response: 'Dados incorretos'})
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
        return res.status(400).json({response: "Email invalido"})
    }

    if (password.lenght < 8){
        return res.status(400).json({response: "A senha deve conter no minimo 8 caracteres"})
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasEspecial = /[!<@#%&*]/.test(password);

    if (!hasLowerCase || !hasNumber || !hasUpperCase || !hasEspecial){
        return res.status(400).json({response: "A senha deve conter uma letra maiuscula, uma minuscula, um número e um caractere espeficio"})
    }

    if(typeof edv !== "number" || edv < 1000000 || edv > 999999999 ){
        return res.status(400).json({response: "Insira um edv válido" })

    }
    return next();
}