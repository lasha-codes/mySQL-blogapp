'use client'

import Header from '@/app/components/Header'
import { AppContext } from '@/app/context/AppContext'
import { useContext } from 'react'

interface User {
  id: number
  email: string
  password: number | string
}

const Profile = () => {
  const { user } = useContext(AppContext)

  return (
    <main className='w-full bg-main h-screen p-10'>
      <Header />
      <div className='flex flex-col justify-center items-center gap-5 mt-20'>
        <div>
          {user &&
            user.map((info) => {
              return (
                <h1 key={info.id} className='flex flex-col gap-1'>
                  <span>name: {info.name}</span>
                  <span>email: {info.email}</span>
                </h1>
              )
            })}
        </div>
        <button className='bg-red-400 text-white px-6 py-1 rounded-full hover:opacity-80 transition-all'>
          Logout
        </button>
      </div>
    </main>
  )
}

export default Profile
