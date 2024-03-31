import mysql from 'mysql2'
import jwt from 'jsonwebtoken'

const database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'blog',
})

export const register = (req, res) => {
  const { name, email, password } = req.body
  const query = database.query('SELECT * FROM users WHERE email = ?', [email])
}
