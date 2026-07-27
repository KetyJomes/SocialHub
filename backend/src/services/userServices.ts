import { registerDTO, loginDTO, updateUserDTO } from "../DTOS/userDTO.ts";
import { prisma } from "../lib/prisma.ts";
import * as bcrypt from "bcrypt";



export const getUser = async(id: number) =>{
    return await prisma.user.findUnique({
        where: {id: id}
    })
}

export const getUsers = async() =>{
    return await prisma.user.findMany({})
}



export const updateUser = async(id:number, data: updateUserDTO)=>{
    const { role } = data;
    return await prisma.user.update({
        where: {id:id},
        data: {role}
    })
}



export const deleteUser = async(id: number)=>{
    return await prisma.user.delete({
        where: {id:id}
    })
}