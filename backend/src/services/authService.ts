import { registerDTO, loginDTO as loginDTO, updateUserDTO } from "../DTOS/userDTO.ts";
import { prisma } from "../lib/prisma.ts";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


export const  register = async(data: registerDTO)=>{
    
    const {name, password, EDV, classId, role} = data
    
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
            password:hashedPassword,
            EDV: EDV,
            role: role ?? "Student",
            idClass: classId,
            pfp : ""
        }
    });

};

export const login = async(data: loginDTO)=>{
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
    const token = jwt.sign(
        {
            id: user.id,
            role: user.role
        },
        process.env.JWT_SECRET as string,
        {
            expiresIn: "2d"
        }
    );

    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            role: user.role
        }
    };

    //return token;

};

