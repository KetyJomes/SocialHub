import { createUserDTO, authUserDTO, updateUserDTO } from "../DTOS/userDTO.ts";
import { prisma } from "../lib/prisma.ts";

import * as bcrypt from "bcrypt";

export const  createUserTest = async(data: createUserDTO)=>{
  

};


export const getUserTest = async(id: number) =>{

}

export const findByEvaluated = async() =>{
}

export const findByEvaluator = async() =>{
}



export const updateUserTest = async(id:number, data: updateUserDTO)=>{

}



export const SumbmitUserTest = async(id: number)=>{
 
}