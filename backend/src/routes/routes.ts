import { Express } from 'express'
import express from 'express'
import user from './user.routes.ts'
import auth from './auth.routes.ts'

export default function (app: Express){
    app.use(express.json())
    .use('/api/user',user)
    .use('/api/auth', auth)

}
