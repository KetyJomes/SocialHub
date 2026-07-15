import { createTestDTO } from "../dtos/testDTO.ts";
// import { Test } from "@prisma/client"
import { prisma } from "../lib/prisma.ts"

export const createTest = async(data: createTestDTO)=>{
    const {  title, date, grade, type, skill, questions} = data;

    return await prisma.test.create({
        data:{
            title:title,
            date: date,
            grade: grade,
            type: type,
            skill: skill,
            questions: {
                create: questions
        }
    }
    });
}

export const showTests = async()=>{
    return await prisma.test.findMany();
}

export const showTest = async(id: number)=>{
    return await prisma.test.findUnique({
        where: {id},
        include: {
            questions: {
                alternatives:true
            }
        }
    });
}



export const deleteTest = async(id: number)=>{
    return await prisma.test.delete({
        where: {id:id}
    })
}
