import { createTestDTO, updateTestDTO } from "../DTOS/testDTO.ts";
import { Frequency } from "../generated/prisma/enums.ts";
// import { Test } from "@prisma/client"
import { prisma } from "../lib/prisma.ts"


export const createTest = async(data: createTestDTO)=>{
    const {  content, finalDate, startdate, grade, type, skill, questions, AvailableResult, frequency} = data;

    return await prisma.test.create({
        data:{
            Content:content,
            finalDate:finalDate,
            startDate:startdate,
            AvailableResult: AvailableResult,
            grade: grade,
            frequency: frequency,
            type: type,
            skill: skill,
            questions: {
                create: questions
        }
    }
    });
}

export const updateTest = async(id:number,data: updateTestDTO)=>{
    const {content , finalDate, startdate, grade, type, skill, questions, AvailableResult, frequency} = data;
    return await prisma.test.update({
        where:{id:id},
        data: {
            Content:content,
            finalDate:finalDate,
            startDate:startdate,
            AvailableResult: AvailableResult,
            grade: grade,
            Frequency: frequency,
            Testtype: type,
            skill: skill,
            questions: {
                create: questions
        }
    }
    })
// 
}

export const showTests = async()=>{
    return await prisma.test.findMany();
}

export const showTest = async(id: number)=>{
    return await prisma.test.findUnique({
        where: {id:id},
        include: {
            Skills: {
                include: { 
                    Alternative: true
                }
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

export const cancelAccess = async (testeId: number) =>{
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

export const addSkill = async (testId: number, skillId: number)=>{
    return await prisma.test.update({
        where: {id: testId},
        data:{
            Skills:{
                connect: {id: skillId}
            }
        }
    });
};

export const removeSkill = async (testId: number, skillId: number)=>{
    return await prisma.test.update({
        where: {id: testId},
        data:{
            Skills:{
                disconnect: {id: skillId}
            }
        }
    });
};


export const defineFrequency = async (testeId: number) =>{
const test = await prisma.test.findUnique({
    where: {
        id: testeId
    },
});

if (!test || test.frequency == Frequency.unique){
    return null;
}

const currentEnd = new Date(test.finalDate);
const currentStart = new Date(test.startDate);


const duration = currentEnd.getTime() - currentStart.getTime();

let nextStart = new Date(currentStart);

switch (test.frequency){
    case Frequency.Mensal:
        nextStart.setMonth(nextStart.getMonth() +1);
        break;
    
    case Frequency.Bimestral:
        nextStart.setMonth(nextStart.getMonth() +1);
        break;
    
    case Frequency.Trimestral:
        nextStart.setMonth(nextStart.getMonth() +1);
        break;

    case Frequency.Bimestral:
        nextStart.setMonth(nextStart.getMonth() +1);
        break;
    } 

} 