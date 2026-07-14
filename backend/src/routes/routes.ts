import { Express } from 'express'
import express from 'express'
import user from './user.routes.ts'
import auth from './auth.routes.ts'
import alternative from './alternative.routes.ts'
import test from './Test.routes.ts'
import answer from './answer.routes.ts'
import dashboards from './dashboards.routes.ts'
import skill from './skill.routes.ts'
import Class from './class.routes.ts'
import user_test from './user_test.routes.ts'

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
