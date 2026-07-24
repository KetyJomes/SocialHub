import { Frequency } from "../generated/prisma/enums.ts";

export interface alternativeInputDTO {
    content: string,
    scale: number

}

export interface questionInputDTO {
    title: string,
    scale: alternativeInputDTO[];

}

export interface skillListDTO {
    skillId: number
}

export interface createTestDTO {
    content:string,
    startdate: Date,
    finalDate: Date,
    grade: number,
    AvailableResult: boolean,
    type: string,
    frequency: Frequency
    skill:skillListDTO[],
    questions: questionInputDTO[],
}

export interface updateTestDTO{
    content?:string,
    startdate?: Date,
    finalDate?: Date,
    grade?: number,
    AvailableResult?: boolean,
    type?: string,
    frequency?: string
    skill?:skillListDTO[],
    questions?: questionInputDTO[]
}