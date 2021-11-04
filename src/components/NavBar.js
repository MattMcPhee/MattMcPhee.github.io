import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-primary ps-4 pe-0 py-0 m-0'>
      <Link className='navbar-brand p-0 m-0' to='/'>
        Matt McPhee
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarSupportedContent'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
        <div className='navbar-nav'>
          <NavLink className='nav-link' exact to='/' activeClassName='selected'>
            Projects
          </NavLink>
          <NavLink className='nav-link' exact to='/resume' activeClassName='selected'>
            Resumé
          </NavLink>
          <NavLink className='nav-link' exact to='/contact' activeClassName='selected'>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
