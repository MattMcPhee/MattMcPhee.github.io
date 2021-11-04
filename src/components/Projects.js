import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Project
            imgUrl='https://i.imgur.com/WCI1qkM.png'
            altText='pics project'
            title='Pics App'
            cardText='An app that retrieves images from the Unsplash API.'
            projectLoc='/projects/pics'
          ></Project>
        </div>
        <div className='col'>
          <Project
            imgUrl='https://i.imgur.com/ahxC5ps.jpg'
            altText='E-commerce app'
            title='E-commerce App'
            cardText='An e-commerce app example made with node and express.'
            projectLoc='https://mattmcphee-dummy-ecommerce-app.herokuapp.com/'
          ></Project>
        </div>
        <div className='col'>
          <Project
            imgUrl='https://i.imgur.com/F8BwXKo.jpg'
            altText='Youtube Clone'
            title='Youtube Clone'
            cardText='A Youtube ripoff made with React JS.'
            projectLoc='/projects/youtube-clone'
          ></Project>
        </div>
      </div>
    </div>
  )
}

export default Projects
