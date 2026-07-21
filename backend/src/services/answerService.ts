import { createAnswerDTO, updateAnswerDTO } from "../DTOS/answersDTO.ts"
import {prisma} from "../lib/prisma.ts"

export const createAnswer = async(data: createAnswerDTO) =>{
    const {value, scale, idSkill, idUserTest} = data

    return await prisma.Answers.create({
        data: { value, scale, idSkill, idUserTest}
    })
}

export const findAnswers = async() => {
    return await prisma.Answers.findMany()
}

export const findAnswersById = async(id: number) => {
    return await prisma.Answers.findFirstOrThrow({
        where: {
            id: id
        }
    })
}

export const updateAnswer = async( id: number, data: updateAnswerDTO ) => {
    return await prisma.Answers.update({
        where: {
            id: id
        },
        data  
    })
}

export const deleteAnswer = async (id: number) => {
    return await prisma.Answers.delete({
        where: {
            id: id
        }
    })
}














