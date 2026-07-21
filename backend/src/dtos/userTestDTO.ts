export interface createUsertestDTO{
    idTest: Number
    idEvaluated: Number
    idEvaluator: Number

    answers:{
        idSkill: Number
        value: String
        scale: number
    }[];
}