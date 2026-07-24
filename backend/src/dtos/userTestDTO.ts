export interface createUsertestDTO{
    idTest: number
    idEvaluated: number
    idEvaluator: number
    

    answers:{
        idSkill: number
        value: string
        scale: number
    }[];
}