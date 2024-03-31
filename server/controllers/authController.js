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

    if (data.length > 0) {
      let userPassword
      let userEmail
      let userId

      data.map((user) => {
        userPassword = user.password
        userEmail = user.email
        userId = user.id
      })

      console.log(userPassword, password, userEmail, userId)

      const passwordMatches = bcrypt.compareSync(password, userPassword)
      if (passwordMatches) {
        jwt.sign(
          { email: userEmail, id: userId },
          process.env.JWT_SECRET,
          (err, signedToken) => {
            if (err) {
              console.log(err)
              throw err
            }
            res
              .cookie('token', signedToken)
              .json({ message: 'User has successfully logged in.' })
            console.log(signedToken, 'User has successfully logged in')
          }
        )
      } else {
        console.log('password does not match the provided email')
      }
    } else {
      res.status(400).json({
        message: 'User with this email does not exist.',
      })
    }
  })
}

export const getUser = (req, res) => {
  const { token } = req.cookies
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized request' })
  }
  const { id } = jwt.verify(token, process.env.JWT_SECRET)
  const query = 'SELECT * FROM users WHERE id = ?'
  database.query(query, [id], (err, data) => {
    if (err) throw err
    console.log(data)
    res.status(200).json(data)
  })
}
