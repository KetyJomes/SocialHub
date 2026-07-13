
export interface alternativeInputDTO {
    content: string,
    scale: number

}

export interface questionInputDTO {
    title: string,
    scale: alternativeInputDTO[];

}

export interface createTestDTO {
    title:string,
    date: Date,
    grade: number,
    type: string,
    skill:string,
    questions: questionInputDTO[],
}