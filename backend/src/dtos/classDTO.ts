export interface studentListDTO {
    studentEDV: number,
    studentName: string
}

export interface createClassDTO {
    course: string,
    period: string,
    avarageScore: number
    idPIC: number
}

export interface updateClassDTO {
    idClass: number,
    period?: string,
    avarageScore?: number
}