import { createTestDTO, updateTestDTO } from "../dtos/testDTO.ts";
// import { Test } from "@prisma/client"
import { prisma } from "../lib/prisma.ts"

export const createTest = async(data: createTestDTO)=>{
    const {  content, finalDate, startdate, grade, type, skill, questions, AvailableResult} = data;

    return await prisma.test.create({
        data:{
            content:content,
            finalDate:finalDate,
            startdate:startdate,
            AvailableResult: AvailableResult,
            grade: grade,
            type: type,
            skill: skill,
            questions: {
                create: questions
        }
    }
    });
}

export const updateTest = async(id:number,data: updateTestDTO)=>{
    const {content , finalDate, startdate, grade, type, skill, questions, AvailableResult} = data;
    return await prisma.test.update({
        where:{id:id},
        data: {
            content:content,
            finalDate:finalDate,
            startdate:startdate,
            AvailableResult: AvailableResult,
            grade: grade,
            type: type,
            skill: skill,
            questions: {
                create: questions
        }
    }
    })

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

export const allowAccess = async (testeId: number) => {
    const published = new Date();
    const dueDate = new Date();

    dueDate.setDate(published.getDate() +1);

    return await prisma.test.update({
        where: {id:testeId},
        data: {
            startDate: published,
            finalDate: dueDate
        }
    });
};

export const cancelAcess = async (testeId: number) =>{
    const published = new Date();

    return await prisma.test.update({
        where: {id: testeId},
        data: {
            finalDate: published
        }
    });
};

export const publishtest = async (testeId: number, startDate: Date, finalDate: Date) => {
    return await prisma.test.update ({
        where: {id: testeId},
        data:{
            startDate: startDate,
            finalDate: finalDate
        }
    });
};

export const addSkil = async (testId: number, skillId: number)=>{
    return await prisma.test.update({
        where: {id: testId},
        data:{
            skills:{
                connect: {id: skillId}
            }
        }
    });
};

export const removeSkil = async (testId: number, skillId: number)=>{
    return await prisma.test.update({
        where: {id: testId},
        data:{
            skills:{
                disconnect: {id: skillId}
            }
        }
    });
};
