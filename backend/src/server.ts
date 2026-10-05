import express from 'express'
import 'dotenv/config'
import router from './router.ts'
import {connectDB} from './config/db.ts'


const app = express()

connectDB()

app.use(express.json())
//Rutas 
app.use('/', router)

export default app