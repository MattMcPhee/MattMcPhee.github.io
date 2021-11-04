import React from 'react'

const Resume = () => {
  return (
    <div className='container px-4'>
      <h1>Resumé</h1>
      <p>Here you can download my current resume.</p>
      <div className='container text-center'>
        <a
          href='https://drive.google.com/uc?export=download&id=1O6Q3ebAbECZcZcC-tWtnM12Ta6Yscaii'
          className='btn btn-secondary mb-4'
        >
          Download
        </a>
      </div>

      <div className='ratio ratio-1x1'>
        <iframe
          src='https://drive.google.com/file/d/1O6Q3ebAbECZcZcC-tWtnM12Ta6Yscaii/preview'
          title='Resumé'
        ></iframe>
      </div>
    </div>
  )
}

export default Resume
