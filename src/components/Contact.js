import React from 'react'

const Contact = () => {
  return (
    <div className='container pb-4 px-4'>
      <h1 className='pb-1'>Contact Details</h1>
      <address className='text-center'>
        <p>
          <b>Matthew McPhee</b>
          <br />
          <a href='mailto:matt.imcphee@gmail.com' className='link-dark'>
            matt.imcphee@gmail.com
          </a>
          <br />
          <p>0420 615 291</p>
        </p>
      </address>
      <img src='https://i.imgur.com/0WQ8B6i.gif' alt='ninja' className='rounded d-block mx-auto' />
    </div>
  )
}

export default Contact
