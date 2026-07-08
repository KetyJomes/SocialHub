import { createUserDTO } from "../dtos/userDTO.ts";
import { prisma } from "../lib/prisma.ts";
// import { Prisma } from "@prisma/client";

export const  createUser = async(data: createUserDTO)=>{
    const {name, email, password, EDV, classId, role} = data
    
    return await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password,
            EDV: EDV,
            role: role,
            idClass: classId,
        }
    });

}

// export const AUTHuSER = ASYNC(DATA)