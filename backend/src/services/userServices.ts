import { createUserDTO, authUserDTO, updateUserDTO } from "../dtos/userDTO.ts";
import { prisma } from "../lib/prisma.ts";
// import { Prisma } from "@prisma/client";
import * as bcrypt from "bcryptjs";

export const  createUser = async(data: createUserDTO)=>{
    const {name, email, password, EDV, classId, role} = data
    
    const userExists = await prisma.user.findUnique({
        where: {EDV:EDV}
    });

    if (userExists){
        throw new Error ("Este EDV já está cadastrado!")
    }

    const hashedPassword = await bcrypt.hasch(password, 10)

    return await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:hashedPassword,
            EDV: EDV,
            role: "Student",
            idClass: classId,
        }
    });

};

export const authUser = async(data: authUserDTO)=>{
    const {EDV, password} = data

    const user = await prisma.user.findUnique({
        where:{
            EDV:EDV
        }
    });
    if (!user){
        throw new Error("EDV ou senha incorretos!");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid){
        throw new Error("EDV ou senha incorretos!")
    }

    return user;
};


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



