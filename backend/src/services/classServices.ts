import { createClassDTO, updateClassDTO } from "../dtos/clasDTO.ts";
import {prisma} from "../lib/prisma.ts"

export const createClass = async(data: createClassDTO)=>{
    const {course, period, avarageScore, students} = data;

    return await prisma.Test({
        data:{
            course:course,
            period:period,
            avarageScore:avarageScore,
            students:students
        }
    })
}

export const updateClass = async(id: number, data: updateClassDTO)=>{
    const { period, avarageScore, students} = data;
    return await prisma.ticket.update({
        where: {id: id},
        data: {period, avarageScore, students}

    })

}

export const showClasses = async()=>{
    return await prisma.class.findmany();
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