'use client'
import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  axios.defaults.baseURL = 'http://localhost:4000'
  axios.defaults.withCredentials = true

  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('/user/register', {
        name,
        email,
        password,
      })
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <main className='w-full h-screen flex justify-center flex-col gap-10 items-center bg-main'>
      <h1 className='text-2xl font-light'>Register</h1>
      <form onSubmit={registerUser} className='flex flex-col gap-2 w-1/2'>
        <input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          className='w-full py-1 px-4 rounded-md'
          placeholder='username'
          required
        />
        <input
          type='email'
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className='w-full py-1 px-4 rounded-md'
          placeholder='email'
          required
        />
        <input
          type='password'
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          className='w-full py-1 px-4 rounded-md'
          placeholder='password'
          required
        />
        <button className='px-5 py-1 mt-3 hover:opacity-65 transition-all duration-300 bg-blue-700 text-main border-blue-800 rounded-lg'>
          Register
        </button>
      </form>
    </main>
  )
}

export default Register
