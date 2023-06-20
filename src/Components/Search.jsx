import React, { useRef } from 'react'

const Search = ({searchData, fetchData, searchWeather}) => {
    const searchInput = useRef();
  return (
    <div className='flex shadow-xl'>
        <input type="search" value={searchData} ref={searchInput} onChange={() => fetchData(searchInput.current.value)} className='border border-black w-full p-3 text-2xl'/>
        <button onClick={searchWeather} className='p-3 bg-slate-600 text-white'>Search</button>
    </div>
  )
}

export default Search