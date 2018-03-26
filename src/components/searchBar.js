import React from 'react'

const SearchBar = ({label, placeholder, buttonHandler, onChange, value}) => (
  <section>
    <label>{label}</label>
    <input onChange={onChange} value={value} placeholder={placeholder}/>
    <button onClick={buttonHandler}> Search </button>
  </section>
)

export default SearchBar
