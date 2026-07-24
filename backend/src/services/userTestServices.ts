
import { createUsertestDTO } from "../DTOS/userTestDTO.ts";
import { createAnswer } from "../services/answerService.ts";
import { prisma } from "../lib/prisma.ts";

import * as bcrypt from "bcrypt";

export const  createUserTest = async(data: createUsertestDTO)=>{
  const userTest = await prisma.user_Test.create({
    data:{
        idTest:data.idTest,
        idEvaluated:data.idEvaluated,
        idEvaluator:data.idEvaluator
    }
  })
    for(const answer of data.answers){
      await createAnswer({
        value:answer.value,
        scale:answer.scale,
        idUserTest: userTest.id,
        idSkill: answer.idSkill
        
      })
    }


};


export const getUserTest = async(id: number) =>{

}

export const findByEvaluated = async() =>{
}

export const findByEvaluator = async() =>{
}



export const updateUserTest = async(id:number )=>{

}



export const SumbmitUserTest = async(id: number)=>{
 
}