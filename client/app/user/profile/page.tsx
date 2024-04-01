'use client'

import Header from '@/app/components/Header'
import { AppContext } from '@/app/context/AppContext'
import axios from 'axios'
import Link from 'next/link'
import { useContext } from 'react'

const Profile = () => {
  const { user } = useContext(AppContext)

  const logoutUser = async () => {
    await axios.post('/user/logout')
    window.location.reload()
  }

  return (
    <main className='w-full bg-main h-screen p-10'>
      <Header />
      {user.length > 0 ? (
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
          <button
            onClick={logoutUser}
            className='bg-red-400 text-white px-6 py-1 rounded-full hover:opacity-80 transition-all'
          >
            Logout
          </button>
        </div>
      ) : (
        <Link
          href='/user/login'
          className='px-6 py-1 rounded-md text-blue-700 border border-blue-700'
        >
          Login
        </Link>
      )}
    </main>
  )
}

export default Profile
