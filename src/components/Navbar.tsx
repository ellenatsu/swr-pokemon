import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flexBetween py-5 px-8 gap-4 text-2xl'>
        <div className='flex-1 flexStart gap-10'>
          <Link href="/">Home</Link>
          <Link href="/pokemon">PokeDex</Link>
        </div>
        
    </nav>
  )
}

export default Navbar