import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT || 4000

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)
app.use(cookieParser())
app.use('/user', authRoutes)

app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})
