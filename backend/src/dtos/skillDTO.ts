import { alternativeInputDTO } from "./testDTO.ts";

export interface createSkillDTO{
    Title: string,
    Description: string,
    idTest: number,
    alternatives:alternativeInputDTO[];
}

export interface updateSkillDTO{
    Title?: string,
    Description?: string 
}

