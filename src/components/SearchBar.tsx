"use client";

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    router.push(`/pokemon/${query}`);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/pokemon/${query}`);
    }
  }


  
  return (
    <div className='flexCenter w-full'>
      <div className="flex items-center p-2 rounded-lg shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
        <input type="text" className="outline-none w-full" placeholder="type the name or ID..." value={query}
        onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} />
        <button className='border bg-blue-100 hover:bg-blue-300 p-2 rounded-lg' onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default SearchBar