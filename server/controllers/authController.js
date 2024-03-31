import mysql from 'mysql2'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
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
      const hashedPassword = bcrypt.hashSync(password, 10)
      const registerQuery =
        'INSERT INTO users (name, email, password) values (?, ?, ?)'
      database.query(registerQuery, [name, email, hashedPassword], (err, _) => {
        if (err) {
          return res
            .status(500)
            .json({ message: 'Sorry something went wrong with the database' })
        }
        const getUserQuery = 'SELECT * FROM users WHERE email = ?'
        database.query(getUserQuery, [email], (err, data) => {
          if (err) throw err
          res.status(200).json(data)
          console.log(data)
        })
      })
    }
  })
}

export const login = (req, res) => {
  const { email, password } = req.body
  const loginQuery = 'SELECT * FROM users WHERE email = ?'
  database.query(loginQuery, [email], (err, data) => {
    if (err) throw err

    console.log(data)

    if (data.length > 0) {
      console.log('user does exist u can login')
    } else {
      console.log('this account does not exist')
    }
  })
}
