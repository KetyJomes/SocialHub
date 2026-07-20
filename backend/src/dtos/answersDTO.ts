export interface createAnswerDTO{
    value: string,
    scale: number,
    idUserTest: number,
    idSkill: number
}

export interface updateAnswerDTO{
    value?: string,
    scale?: number,
    idUserTest: number,
    idSkill: number
}

 