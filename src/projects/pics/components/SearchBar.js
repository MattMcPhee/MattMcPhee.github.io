import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  onFormSubmit = e => {
    e.preventDefault()

    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={e => this.onFormSubmit(e)} className='ui form'>
          <div className='field'>
            <h1>Image Search</h1>
            <input
              type='text'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
