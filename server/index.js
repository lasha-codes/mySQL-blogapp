import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

const app = express()
dotenv.config()

app.use(cors)
app.use(cookieParser)
app.use(express.json())

mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'blog',
})
