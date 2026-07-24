export interface createUsertestDTO{
    idTest: number
    idEvaluated: number
    idEvaluator: number
    feedback?: string;

    answers:{
        idSkill: number
        value: string
        scale: number
    }[];
}