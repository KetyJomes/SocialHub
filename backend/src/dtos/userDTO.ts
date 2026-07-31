export interface registerDTO{
    name: string,
    password: string,
    role: "Student" | "ADM" | "Leader" | "Manager"
    EDV: string,
    classId: number
}

export interface updateUserDTO{
    name: string,
    role: "Student" | "ADM" | "Leader" | "Manager"
}

export interface loginDTO{
    EDV: string,
    password: string
}

export interface updateRoleDTO{
    role: "Student" | "ADM" | "Leader" | "Manager"
}
