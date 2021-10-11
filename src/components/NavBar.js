import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar is-dark' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <h1>Matt McPhee</h1>
        </Link>

        <Link
          className='navbar-burger'
          role='button'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </Link>
      </div>

      <div className='navbar-menu'>
        <div className='navbar-start'>
          <Link to='/projects' className='navbar-item'>
            Projects
          </Link>
          <Link to='/resume' className='navbar-item'>
            Résumé
          </Link>
        </div>

        <div className='navbar-end'>
          <Link to='/contact' className='navbar-item'>
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
