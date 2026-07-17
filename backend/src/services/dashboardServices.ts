import { prisma } from '../lib/prisma.ts'

export const getGeneral = async () => {
    const [totalStudents, totalClasses, totalTests] = await Promise.all([
        prisma.user.count({
            where: {
                students: {some: {}}
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

// export const getStudent = async (studentId: number) => {
//     const studentData = await prisma.user.findUnique({
//         where: {id: studentId},
//         include: {
//             user: {
//                 include :{
//                     userTestAnswer: true
//                 }
//             }
//         }
//     });
//     if (!studentData) return null;
//     const totalGrades = studentData.user.reduce((sum ,attempt{ id: any; }) => sum + attempt.id,0);
//     const testsCount = studentData.user.lenght;
//     const avarageGrade = testsCount > 0? (totalGrades/testsCount): 0;

//     return {
//         name: studentData.name,
//         totalTestsTaken: testsCount,
//         avarageGrade
//     };
// };

export const getClass = async (classId: number) =>{
    const classInfo = await prisma.class.findUnique({
        where: {
            idClass : classId
        },
        include:{
            students: true

        }
    });
    return classInfo;
}

export const getRangking = async () => {
    return await prisma.userTestAnswer.findMany({
        orderBy: {
            id: 'desc'
        }
    });
};

export const getEvolution = async (studentId: Number) => {
    return await prisma.user_Test.findMany({
        where:{
            idEvaluated: studentId
        },
        OrderBy: {
            id: 'asc'
        },
        selected: {
            id: true,
            idUserTest: true
        }



        
    });
};

export const getAvarage= async () =>{
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
    const answers = await prisma.answers.findMnay({
        where: {
            idUserTest: studentId
        },
        include: {
            skill: true
        }
    });
    const skillGroups: {[key: string]: {totalScale: number, count: number}} = {}

    answers.forEach(ans => {
        const skillTitle = ans.skill.skillTitle;
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
        select: {avarageGrade: true}
    });

    const generalAverageObj = await getAvarage();

    return {
        classAverage: targetClass?.avarageGrade || 0,
        systemAverage: generalAverageObj.globalAvarage
};
};