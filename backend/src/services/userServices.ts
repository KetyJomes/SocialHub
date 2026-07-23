import { createUserDTO, loginDTO as loginDTO, updateUserDTO } from "../DTOS/userDTO.ts";
import { prisma } from "../lib/prisma.ts";
import * as bcrypt from "bcrypt";


export const  createUser = async(data: createUserDTO)=>{
    
    const {name, email, password, EDV, classId, role} = data
    
    const userExists = await prisma.user.findUnique({
        where: {EDV:EDV}
    });

    if (userExists){
        throw new Error ("Este EDV já está cadastrado!")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    return await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:hashedPassword,
            EDV: EDV,
            role: role ?? "Student",
            idClass: classId,
        }
    });

};

<<<<<<< HEAD
export const login = async(data: loginDTO)=>{
=======
export const login = async(data: authUserDTO)=>{
>>>>>>> 1d9b32c6564a2ad9ef6d00f5f635504551d71b60
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

    //jwt


    //return token;

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



export const deleteUser = async(id: number)=>{
    return await prisma.user.delete({
        where: {id:id}
    })
}