import React from 'react'
import Link from 'next/link'

function NavBar () {
  return (
    <div>
      <nav className='bg-white shadow-lg'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='flex justify-between'>
            <div className='flex space-x-7'>
              <div className='hidden md:flex items-center space-x-1'>
                <a
                  href=''
                  className='py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold '
                >
                  Home
                </a>
                <Link href='/users/login'>
                  <a className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300'>
                    Login
                  </a>
                </Link>
                <Link href='/users/signup'>
                  <a className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300'>
                    SignUp
                  </a>
                </Link>
                <div className='flex justify-end'>
                  <Link href='/users/logout'>
                    <a className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300'>
                      LogOut
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
