export interface studentListDTO {
    studentEDV: number,
    studentName: string
}

export interface createClassDTO {
    course: string,
    period: string,
    avarageScore: number
    students: studentListDTO[]
    PIC: number
}

export interface updateClassDTO {
    idClass: number,
    period?: string,
    avarageScore?: number
    students?: studentListDTO[]
}