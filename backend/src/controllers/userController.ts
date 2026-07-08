import { Request, Response} from "express";
import { createUserDTO, authUserDTO } from "../dtos/userDTO.ts";
import { createUser, getUser, authUser } from "../services/userServices.ts";

export default class UserController {
    static async create(req: Request, res: Response){
        const data: createUserDTO = req.body;
        try{
            await createUser(data);

            return res.status(200).send({ response: "User cadastrado"});
        }
        catch (e) {
            return res.status(500).send({ response: "Ocorreu algum erro no servidor."})
        }

    }

    // static async show(req: Response, res: Response){
    //     const id = parseInt(req.params[0],10);
    //     try{
    //         const user = await getUser();
    //         return res.status(200).send(user);
    //     }
    // }
}