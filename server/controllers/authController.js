import mysql from 'mysql2'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

const database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'blog',
})

export const register = (req, res) => {
  const { name, email, password } = req.body
  const query = 'SELECT * FROM users WHERE email = ?'
  database.query(query, [email], (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ message: 'Sorry something went wrong with the database' })
    }
    if (data.length > 0) {
      res.status(400).json({ message: 'User already exists.' })
    } else {
      res
        .status(200)
        .json({ message: 'U have successfully created an account.' })
    }
  })
}
