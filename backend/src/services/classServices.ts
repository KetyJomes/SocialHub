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

export const updateClass = async(data: updateClassDTO)=>{
    const { period, avarageScore, students} = data;
    return await prisma.ticket.update({
        where: {id: id},
        data: {period, avarageScore, students}

    })

}