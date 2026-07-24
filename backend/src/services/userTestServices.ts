
import { createUsertestDTO } from "../DTOS/userTestDTO.ts";
import { createAnswer } from "../services/answerService.ts";
import { prisma } from "../lib/prisma.ts";

import * as bcrypt from "bcrypt";

export const  createUserTest = async(data: createUsertestDTO)=>{
  const userTest = await prisma.user_Test.create({
    data:{
        idTest:data.idTest,
        idEvaluated:data.idEvaluated,
        idEvaluator:data.idEvaluator,
        feedback: data.feedback
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
  return await prisma.user_Test.findUnique({
    where:{
      id
    },
    include: {
      Evaluated: true,
      Evaluator: true,
      Tests: true,
      userTestAnswer:{
        include: {
          skill: true
        }
      }
    }
  })
  
}

export const findByEvaluated = async(id: number)=>{

    return await prisma.user_Test.findMany({

        where:{
            idEvaluated:id
        },
        include:{
            Evaluator:true,
            Tests:true
        }

    });

}

export const findByEvaluator = async(id: number)=>{
  return await prisma.user_Test.findMany({

        where:{
          idEvaluator:id
        },
        include:{
            Evaluated: true,
            Tests: true
        }

    });
}



// export const updateUserTest = async(id:number )=>{

// }



// export const SumbmitUserTest = async(id: number)=>{
 
// }

