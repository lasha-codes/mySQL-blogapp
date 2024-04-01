import express from 'express'
import {
  getAllPosts,
  getUser,
  login,
  logoutUser,
  register,
  uploadPost,
} from '../controllers/authController.js'
const router = express.Router()

router.get('/get-user', getUser)
router.get('/get-posts', getAllPosts)
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logoutUser)
router.post('/upload-post', uploadPost)

export default router
