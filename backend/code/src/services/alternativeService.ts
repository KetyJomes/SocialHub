import { createAlternativeDTO, updateAlternativeDTO } from "../dtos/alternativeDTO.ts"
import {prisma} from "../lib/prisma.ts"

export const createAlternative = async(data: createAlternativeDTO) =>{
    const {Content, Scale, idSkill} = data

    return await prisma.alternatives.create({
        data: { Content, Scale, idSkill}
    })
}

export const findAlternatives = async() => {
    return await prisma.alternatives.findMany()
}

export const findAlternativesById = async(id: number) => {
    return await prisma.alternatives.findFirstOrThrow({
        where: {
            id: id
        }
    })
}

export const updateAlternative = async( id: number, data: updateAlternativeDTO ) => {
    return await prisma.alternatives.update({
        where: {
            id: id
        },
        data  
    })
}

export const deleteAlternative = async (id: number) => {
    return await prisma.alternatives.delete({
        where: {
            id: id
        }
    })
}



export const findByskillId = async (idSkill: number) => {
    return await prisma.alternatives.findMany({
        where:{
            idSkill: idSkill
        }
    })
}











