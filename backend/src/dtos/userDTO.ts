export interface createUserDTO{
    name: string,
    email: string,
    password: string,
    role: "Student" | "ADM" | "Leader" | "Manager"
    EDV: number,
    classId: number
}

export interface updateUserDTO{
    name: string,
    role: "Student" | "ADM" | "Leader" | "Manager"
}

export interface loginDTO{
    EDV: number,
    password: string
}
