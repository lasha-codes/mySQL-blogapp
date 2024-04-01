'use client'

import Link from 'next/link'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Header = () => {
  const { user } = useContext(AppContext)

  return (
    <header className='flex items-center justify-between'>
      <Link href='/' className='text-xl text-blue-800'>
        Home
      </Link>
      {user.length < 1 ? (
        <div className='flex items-center gap-5'>
          <Link
            href='/user/login'
            className='px-5 py-1 rounded-xl bg-transparent border border-blue-700 text-blue-800 cursor-pointer'
          >
            Login
          </Link>
          <Link
            href='/user/register'
            className='px-5 py-1 rounded-xl; bg-blue-700 text-main border-main rounded-xl cursor-pointer'
          >
            Register
          </Link>
        </div>
      ) : (
        <nav className='flex items-center gap-5'>
          <Link href='/user/profile' className='text-lg text-blue-900'>
            View Profile
          </Link>
          <Link
            href='/user/add-post'
            className='text-lg text-main bg-blue-700 rounded-lg px-3 py-1 hover:opacity-80 transition-all'
          >
            Add Post
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header
