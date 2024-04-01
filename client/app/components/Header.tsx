import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex items-center justify-between'>
      <Link href='/' className='text-xl text-blue-800'>
        Home
      </Link>
      <nav>
        <Link href='/user/profile' className='text-xl text-blue-900'>
          View Profile
        </Link>
      </nav>
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
    </header>
  )
}

export default Header
