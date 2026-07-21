import { Express } from 'express'
import express from 'express'
import user from './userRoutes.ts'
import auth from './authRoutes.ts'
import alternative from './alternativeRoutes.ts'
import test from './testRoutes.ts'
import answer from './answerRoutes.ts'
import dashboards from './dashboardsRoutes.ts'
import skill from './skillRoutes.ts'
import Class from './classRoutes.ts'
import user_test from './userTestRoutes.ts'

export default function (app: Express){
    app.use(express.json())
    .use('/api/user',user)
    .use('/api/auth', auth)
    .use('/api/alternative',alternative)
    .use('/api/test',test)
    .use('/api/answer',answer)
    .use('/api/dashboards',dashboards)
    .use('/api/skill',skill)
    .use('/api/user_test',user_test)
    .use('/api/class',Class)

}
