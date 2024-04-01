'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  axios.defaults.baseURL = 'http://localhost:4000'
  axios.defaults.withCredentials = true

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/user/login', {
        email,
        password,
      })
      setEmail('')
      setPassword('')
      window.location.reload()
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <main className='w-full h-screen flex justify-center flex-col gap-10 items-center bg-main'>
      <h1 className='text-2xl font-light'>Login</h1>
      <form className='flex flex-col gap-2 w-1/2' onSubmit={loginUser}>
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
          Login
        </button>
      </form>
    </main>
  )
}

export default Login
