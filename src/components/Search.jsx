import React from 'react'
import './search.css'
const Search = ({searchTerm,setSearchTerm}) => {
  return (
    <div className="search">
      <img src="search.svg" alt="" />
      <input 
      type="text"
      placeholder='Search through thousands of movies'
      value={searchTerm}
      onChange={(e)=> setSearchTerm(e.target.value)}
       />
    </div>
  )
}

export default Search