import { Request, Response} from "express";
import { createUserDTO, authUserDTO } from "../dtos/userDTO.ts";
import { createUser, getUser, authUser, getUsers, updateUser  } from "../services/userServices.ts";

export default class UserController {
    static async create(req: Request, res: Response){
        const data: createUserDTO = req.body;
        try{
            await createUser(data);

            return res.status(201).send({ response: "User cadastrado"});
        }
        catch (e) {
            return res.status(500).send({ response: "Ocorreu algum erro no servidor."})
        }

    }

    static async login(req: Request, res: Response){
        const data: authUserDTO = req.body
        try{
            const user = await authUser(data);

            return res.status(200).send({ response: "Bem vindo!"});
        }
        catch(e){
            return res.status(500).send({ response: "Ocorreu algum erro no servidor."})
        }
    }

    static async showUser(req: Request, res: Response){
        const id = parseInt(req.params[0],10);
        try{
            const user = await getUser(id);
            if (!user){
                return res.status(404).send({ response: "usuario não encontrado"});
            }
            return res.status(200).send(user);
        }
        catch(e){
            return res.status(500).send({ response: 'Ocorreu algum erro no servidor'});
        }
    }

    static async showUsers(req: Request, res: Response){
        try{
            const users = await this.getUsers();
            return res.status(200).send(users)
        }
        catch(e){
            return.status(500).send({response: 'Ocorreu algum erro'})
        }
    }

}