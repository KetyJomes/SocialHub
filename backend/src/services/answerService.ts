import { createAnswerDTO, updateAnswerDTO } from "../DTOS/answersDTO.ts"
import {prisma} from "../lib/prisma.ts"

export const createAnswer = async(data: createAnswerDTO) =>{
    const {value, scale, idSkill, idUserTest} = data

    return await prisma.answers.create({
        data: { value, scale, idSkill, idUserTest}
    })
}

export const findAnswers = async() => {
    return await prisma.answers.findMany()
}

export const findAnswersById = async(id: number) => {
    return await prisma.answers.findFirstOrThrow({
        where: {
            id: id
        }
    })
}

export const updateAnswer = async( id: number, data: updateAnswerDTO ) => {
    return await prisma.answers.update({
        where: {
            id: id
        },
        data  
    })
}

export const deleteAnswer = async (id: number) => {
    return await prisma.answers.delete({
        where: {
            id: id
        }
    })
}














