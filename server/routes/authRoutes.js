import express from 'express'
import {
  getUser,
  login,
  logoutUser,
  register,
  uploadPost,
} from '../controllers/authController.js'
const router = express.Router()

router.use(express.json())

router.get('/get-user/', getUser)
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logoutUser)
router.post('/upload-post', uploadPost)

export default router
