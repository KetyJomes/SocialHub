import { createTestDTO, updateTestDTO } from "../DTOS/testDTO.ts";
import {  FrequencyEnum } from "../generated/prisma/enums.ts";
// import { Test } from "@prisma/client"
import { prisma } from "../lib/prisma.ts"

export const createTest = async (data: createTestDTO ) => {

    const {
        content,
        finalDate,
        startDate,
        grade,
        type,
        AvailableResult,
        frequency,
        feedback,
        skills
    } = data;

    return await prisma.test.create({

        data: {

            Content: content,

            finalDate: finalDate,

            startDate: startDate,

            AvailableResult: AvailableResult,

            grade: grade,

            Frequency: frequency,

            Feedback:feedback,

            type: type,


            Skills: {

                create: skills.map(skill => ({
                    
                    Title: skill.Title,

                    Description: skill.Description,


                    Alternative: {

                        create: skill.alternatives.map(alternative => ({

                            Content: alternative.Content,

                            Scale: alternative.Scale

                        }))

                    }

                }))

            }

        },


        include: {

            Skills: {

                include: {

                    Alternative: true

                }

            }

        }

    });

};

export const updateTest = async(id:number,data: updateTestDTO)=>{
    const {content , finalDate, startdate, grade, type, skills, AvailableResult, feedback, frequency } = data;
    return await prisma.test.update({
        where:{id:id},
        data: {
            Content:content,
            finalDate:finalDate,
            startDate:startdate,
            AvailableResult: AvailableResult,
            grade: grade,
            Frequency: frequency,
            Feedback:feedback,
            type: type,
            Skills: {
                create: skills
        }
    }
    })

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

if (!test || test.Frequency == FrequencyEnum.unique){
    return null;
}

const currentEnd = new Date(test.finalDate);
const currentStart = new Date(test.startDate);


const duration = currentEnd.getTime() - currentStart.getTime();

let nextStart = new Date(currentStart);

switch (test.Frequency){
    case FrequencyEnum.Mensal:
        nextStart.setMonth(nextStart.getMonth() +1);
        break;
    
    case FrequencyEnum.Bimestral:
        nextStart.setMonth(nextStart.getMonth() +2);
        break;
    
    case FrequencyEnum.Trimestral:
        nextStart.setMonth(nextStart.getMonth() +3);
        break;

    case FrequencyEnum.Semestral:
        nextStart.setMonth(nextStart.getMonth() +6);
        break;

    case FrequencyEnum.Anual:
            nextStart.setMonth(nextStart.getMonth() +12);
            break;
    
    default:
        return null;   
    } 
const nextEnd = new Date(nextStart.getTime() + duration);


return await prisma.test.update({
        where: { id: testeId },
        data: {
            startDate: nextStart,
            finalDate: nextEnd
        }
    });

    

} 