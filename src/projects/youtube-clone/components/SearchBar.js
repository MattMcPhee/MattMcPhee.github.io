import React, { useState } from 'react'

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('')

  const onInputChange = event => {
    setTerm(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()

    onFormSubmit(term)
  }

  return (
    <form onSubmit={onSubmit} className='row g-3'>
      <div className='col-auto'>
        <label for='videoSearch'>Video Search</label>
      </div>
      <div className='col-auto'>
        <input id='videoSearch' type='text' value={term} onChange={onInputChange} />
      </div>
    </form>
  )
}

export default SearchBar
