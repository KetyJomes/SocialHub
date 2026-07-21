import { prisma } from '../lib/prisma.ts'
import { User_Test, Answers } from '../../src/generated/prisma/client.ts';

export const getGeneral = async () => {
    const [totalStudents, totalClasses, totalTests] = await Promise.all([
        prisma.user.count({
            where: {
                Evaluated: {some: {}}
            }
        }),
        prisma.class.count(),
        prisma.test.count()
    ]);
    return {
        totalStudents,
        totalClasses,
        totalTests
    };
};

export const getStudent = async (studentId: number) => {
    const studentData = await prisma.user.findUnique({
        where: { id: studentId },
        include: {
            Evaluated: { 
                include: {
                    userTestAnswer: true 
                }
            }
        }
    });

    if (!studentData) return null;

    let totalGradesGlobal = 0;
    const testsCount = studentData.Evaluated.length; 


    studentData.Evaluated.forEach((attempt: User_Test & { userTestAnswer: Answers[] }) => {
        

        const testScore = attempt.userTestAnswer.reduce((sum: number, answer: Answers) => {
            return sum + (answer.scale || 0); 
        }, 0);

        totalGradesGlobal += testScore;
    });

    const averageGrade = testsCount > 0 ? (totalGradesGlobal / testsCount) : 0;

    return {
        name: studentData.name, 
        totalTestsTaken: testsCount,
        averageGrade: Number(averageGrade.toFixed(2)) 
    };
};

export const getClass = async (classId: number) =>{
    const classInfo = await prisma.class.findUnique({
        where: {
            id: classId
        },
        include:{
            students: true

        }
    });
    return classInfo;
}

export const getRangking = async () => {
    return await prisma.user_Test.findMany({
        orderBy: {
            id: 'desc'
        }
    });
};

export const getEvolution = async (studentId: number) => {
    return await prisma.user_Test.findMany({
        where:{
        idEvaluated: studentId
        },
        orderBy: {
            id: 'asc'
        },
        select: {
            id: true,
            idTest: true
        }

    });
};

export const getClassAvarage= async () =>{
    const aggregation = await prisma.class.aggregate({
        _avg: {
            avarageScore: true
        }
    });
    return {
        globalAvarage: aggregation._avg.avarageScore || 0
    }
};


export const getSkills = async (studentId: number) =>{
    const answers = await prisma.answers.findMany({
        where: {
            idUserTest: studentId
        },
        include: {
            skill: true
        }
    });
    const skillGroups: {[key: string]: {totalScale: number, count: number}} = {}

    answers.forEach(ans => {
        const skillTitle = ans.skill.Title;
        if (!skillGroups[skillTitle]){
            skillGroups[skillTitle] = {totalScale: 0, count: 0};
        }
        skillGroups[skillTitle].totalScale += ans.scale;
        skillGroups[skillTitle].count += 1;
    });
    return Object.keys(skillGroups).map(tittle => ({
        skill: tittle,
        average: skillGroups[tittle].totalScale/skillGroups[tittle].count
    }));

};

export const getComparison = async (classId: number) =>{
    const targetClass = await prisma.class.findUnique({
        where: {id: classId},
        select: {avarageScore: true}
    });

    const generalAverageObj = await getClassAvarage();

    return {
        classAverage: targetClass?.avarageScore || 0,
        systemAverage: generalAverageObj.globalAvarage
};
};