import { Express } from 'express'
import express from 'express'
import user from './user.ts'
import auth from './auth.ts'

export default function (app: Express){
    app.use(express.json())
    .use('/api/user',user)
    .use('/api/auth', auth)
}
