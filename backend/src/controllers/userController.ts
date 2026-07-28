import { Request, response, Response} from "express";
import {  getUser, getUsers, updateUser, deleteUser  } from "../services/userServices.ts";
import { updateUserDTO } from "../DTOS/userDTO.ts";

export default class UserController {
   

    static async showUser(req: Request, res: Response){
        const id = Number(req.params.id);
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
            const users = await getUsers();
            return res.status(200).send(users)
        }
        catch(e){
            return res.status(500).send({response: 'Ocorreu algum erro'})
        }
    }

    static async updateUser(req: Request, res: Response){
        const data: updateUserDTO = req.body
        try{
            const id = Number(req.params.id);
            await updateUser(id,data);
            return res.status(200).send({ reponse: 'User atualizado com sucesso!'})
        }
        catch (e) {
            return res.status(500).send({ response: "Ocorreu um erro no servidor"})
        }
    }

    static async removeUser(req: Request, res: Response){
        const id = Number(req.params.id);
        try{
            await deleteUser(id);
            return res.status(200).send({response: 'Usuário excluido com sucesso'})
        }
        catch (e){
            return res.status(500).send({ response: 'Usuário não pode ser deletado'})
        }
    }

}