import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <main className='w-full h-screen flex justify-center flex-col gap-10 items-center bg-main'>
      <h1 className='text-2xl font-light'>Login</h1>
      <form className='flex flex-col gap-2 w-1/2'>
        <input
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className='w-full py-1 px-4 rounded-md'
          placeholder='email'
          required
        />
        <input
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
