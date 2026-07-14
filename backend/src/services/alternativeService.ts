import { createAlternativeDTO, updateAlternativeDTO } from "../dtos/alternativeDTO.ts"
import {prisma} from "../lib/prisma.ts"

export const createAlternative = async(data: createAlternativeDTO) =>{
    const {Content, Scale, idSkill} = data

    return await prisma.alternatives.create({
        data: { Content, Scale, idSkill}
    })
}

export const getAlternatives = async() => {
    return await prisma.alternatives.findMany()
}

export const getAlternativesById = async(id: number) => {
    return await prisma.alternatives.findFirstOrThrow({
        where: {
            id: id
        }
    })
}

export const updateAlternative = async( id: number, data: updateAlternativeDTO ) => {
    return await prisma.skill.update({
        where: {
            id: id
        },
        data  
    })
}

export const deleteSkill = async (id: number) => {
    return await prisma.skill.delete({
        where: {
            id: id
        }
    })
}

export const findByTest = async (idTest: number) => {
    return await prisma.skill.findMany({
        where:{
            idTest: idTest
        }
    })
} 

