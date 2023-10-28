import React from 'react'

export const Footer = () => {
  return (
    <footer className='flexStart flex-col w-full gap-20 bg-black '>
        <div className='flex flex-col gap-12 w-full'>
            <div className='text-4xl text-white font-bold '>Pokedex</div>
            <p className='mx-5'>@2023 Pokemon demo. </p>
        </div>
    </footer>
  )
}
