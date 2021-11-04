import React from 'react'
import { Link } from 'react-router-dom'

const Linkle = props => {
  const loc = props.projectLoc
  if (loc.startsWith('http')) {
    return (
      <a href={props.projectLoc} className='btn btn-secondary' target='_blank' rel='noreferrer'>
        Visit
      </a>
    )
  } else {
    return (
      <Link to={props.projectLoc} className='btn btn-secondary'>
        Visit
      </Link>
    )
  }
}

export default Linkle
