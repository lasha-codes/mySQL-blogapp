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
  const query = 'SELECT * FROM users'
  database.query(query, (err, results) => {
    if (err) {
      res
        .status(500)
        .json({ message: 'oops. error has occurred in the database' })
    }
    res.json(results)
  })
}
