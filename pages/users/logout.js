import React from 'react'
import Link from 'next/link'

function logout () {
  return (
    <div className='flex justify-end'>
      <Link href='/'>
        <a className='py-4 px-2 text-green-500  font-semibold w-full text-right '>
          LogOut
        </a>
      </Link>
    </div>
  )
}

export default logout
