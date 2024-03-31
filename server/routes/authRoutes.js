import express from 'express'
import { getUser, login, register } from '../controllers/authController.js'
const router = express.Router()

router.use(express.json())

router.get('/get-user/', getUser)
router.post('/register', register)
router.post('/login', login)

export default router
