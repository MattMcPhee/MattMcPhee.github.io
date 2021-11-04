import React from 'react'
import Projects from './Projects'

const Home = () => {
  return (
    <div className='container pb-4 px-4'>
      <h1>About</h1>
      <img
        src='img/me3.jpg'
        className='rounded d-block mx-auto pb-2'
        height='250'
        width='250'
        alt='me'
      ></img>
      <p className='lead'>
        I'm passionate about web apps, cloud computing and software development. You can find my
        former and current projects below. This website was made with React JS.
      </p>
      <h1>Projects</h1>
      <Projects></Projects>
    </div>
  )
}

export default Home
