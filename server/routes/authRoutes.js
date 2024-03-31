import express from 'express'
import { checkCookie, login, register } from '../controllers/authController.js'
const router = express.Router()

router.use(express.json())

router.get('/check-cookie', checkCookie)
router.post('/register', register)
router.post('/login', login)

export default router
