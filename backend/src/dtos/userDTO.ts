export interface createUserDTO{
    name: string,
    email: string,
    password: string,
    role: "Student" | "ADM" | "Leader" | "Manager"
    EDV: number,
    classId: number
}
