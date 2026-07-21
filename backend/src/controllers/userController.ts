import { Request, response, Response} from "express";
import { createUserDTO, authUserDTO, updateUserDTO } from "../DTOS/userDTO.ts";
import { createUser, getUser, authUser, getUsers, updateUser, deleteUser  } from "../services/userServices.ts";

export default class UserController {
    static async create(req: Request, res: Response){
        const data: createUserDTO = req.body;
        try{
            await createUser(data);

            return res.status(201).send({ response: "User cadastrado"});
        }
        catch (e) {
            console.log(e)
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