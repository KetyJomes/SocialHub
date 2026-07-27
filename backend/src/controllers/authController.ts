import { Request, response, Response} from "express";
import { register, login } from "../services/authService.ts";
import { loginDTO, registerDTO } from "../DTOS/userDTO.ts";

export default class authController{

    static async create(req: Request, res: Response){
        const data: registerDTO = req.body;
        try{
            await register(data);
            
            return res.status(201).send({ response: "User cadastrado"});
        }
        catch (e) {
            console.log(e)
            return res.status(500).send({ response: "Ocorreu algum erro no servidor."})
        }
        
    }
    
    static async login(req: Request, res: Response){
        const data: loginDTO = req.body
        
        try{
            const user = await login(data);
            
            return res.status(200).send({ response: "Bem vindo!"});
        }
        catch(e){
            return res.status(500).send({ response: "Ocorreu algum erro no servidor."})
        }
    }
}