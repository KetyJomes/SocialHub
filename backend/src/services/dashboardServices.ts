import { prisma } from '../lib/prisma.ts'

export const getGeneal = async () => {
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

export const getStudent = async (studentId: number) => {
    const studentData = await prisma.user.findUnique({
        where: {id: studentId},
        include: {
            user: {
                include :{
                    userTestAnswer: true
                }
            }
        }
    });
    if (!studentData) return null;
    const totalGrades = studentData.user.reduce((sum: any,attempt: { id: any; }) => sum + attempt.id,0);
    const testsCount = studentData.user.lenght;
    const avarageGrade = testsCount > 0? (totalGrades/testsCount): 0;

    return {
        name: studentData.name,
        totalTestsTaken: testsCount,
        avarageGrade
    };
};

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
};
