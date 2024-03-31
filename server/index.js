import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

const app = express()
dotenv.config()

app.use(cors)
app.use(cookieParser)
app.use(express.json())
