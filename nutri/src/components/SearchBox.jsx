import React from 'react'

function SearchBox(props) {
    let {setSearch} = props
  return (
    <>
        <h1>SEARCH....</h1>
        <input type="text" 
        placeholder='type something :)' 
        onChange = {(e) => {setSearch(e.target.value)}}/>
    </>
  )
}

export default SearchBox