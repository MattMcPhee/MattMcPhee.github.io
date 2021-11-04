import React from 'react'
import Linkle from './Linkle'

const Project = props => {
  return (
    <div className='card'>
      <img src={props.imgUrl} alt={props.altText} className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-text'>{props.cardText}</p>
        <Linkle projectLoc={props.projectLoc}></Linkle>
      </div>
    </div>
  )
}

export default Project
