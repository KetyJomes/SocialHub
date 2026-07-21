
import { createSkillDTO, updateSkillDTO } from "../DTOS/skillDTO.ts"
import {prisma} from "../lib/prisma.ts"

export const createSkill = async(data: createSkillDTO)=>{
    const { Title, Description, idTest} = data

    return await prisma.skill.create({
        data: { Title, Description, idTest}
    })
}

export const getSkills = async () => {
    return await prisma.skill.findMany()
}


export const getSkillById = async(id: number) => {
    return await prisma.skill.findFirstOrThrow({
        where: {
            id: id
        }
    })
}

export const updateSkill = async( id: number, data: updateSkillDTO ) => {
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





