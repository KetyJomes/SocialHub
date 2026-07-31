import { createClassDTO, updateClassDTO } from "../DTOS/classDTO.ts";
import {prisma} from "../lib/prisma.ts"

export const createClass = async(data: createClassDTO)=>{
    const {course, period, avarageScore, idPIC} = data;

    return await prisma.class.create({
        data:{
            Course:course,
            period:period,
            avarageScore:avarageScore,
            idPIC: idPIC
        }
    })
}

export const updateClass = async(id: number, data: updateClassDTO)=>{
    const { period, avarageScore} = data;
    return await prisma.class.update({
        where: {id: id},
        data: {
            period, 
            avarageScore,
        }

    })

}

export const addStudentToClass = async (classId: number, studentId: number)=>{
    return await prisma.class.update({
        where: {id: classId},
        data:{
            students:{
                connect: {id: studentId}
            }
        }
    })
}

export const removeStudentFromClass = async (classId: number, studentId: number)=>{
    return await prisma.class.update({
        where: {id: classId},
        data:{
            students:{
                disconnect: {id: studentId}
            }
        }
    })
}

export const showClasses = async()=>{
    return await prisma.class.findMany({
        include: {
            idPIC: true,
            students: true
        }
    });
}

export const showClass = async(id:number)=>{
    return await prisma.class.findUnique({
        where: {id: id}
    })
}

export const deleteClass = async(id: number)=>{
    return await prisma.class.delete({
        where: {id:id}
    })
}

export const archiveClass = async(id: number) =>{
    return await prisma.class.update({
        where: {id: id},
        data:{
            isActive: false
        }

    })
}