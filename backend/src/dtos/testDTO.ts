import { FrequencyEnum,  TestTypeEnum } from "../generated/prisma/enums.ts";


export interface createTestDTO {
    content:string,
    startDate: Date,
    finalDate: Date,
    grade: number,
    AvailableResult: boolean,
    type: TestTypeEnum,
    frequency: FrequencyEnum,
    feedback: string,
    skills: createSkillDTO[]
}


export interface createSkillDTO{
    Title: string,
    Description: string,
    idTest: number,
    alternatives: createAlternativeDTO[];
}
export interface createAlternativeDTO{
    Content: string,
    Scale: number,
    idSkill: number
}

export interface updateTestDTO{
    content?:string,
    startdate?: Date,
    finalDate?: Date,
    grade?: number,
    AvailableResult?: boolean,
    type?: TestTypeEnum,
    frequency?: FrequencyEnum,
    feedback?:string,
    skills?: createSkillDTO[]
}