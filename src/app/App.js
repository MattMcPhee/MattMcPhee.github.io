import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../scss/custom.scss'

import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'

import Pics from '../projects/pics/components/App'
import YoutubeClone from '../projects/youtube-clone/components/App'

const App = () => {
  return (
    <div className='App container shadow-lg p-0 mb-5 mt-5 bg-white rounded'>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/projects' component={Projects}></Route>
          <Route exact path='/projects/pics' component={Pics}></Route>
          <Route exact path='/projects/youtube-clone' component={YoutubeClone}></Route>
          <Route exact path='/resume' component={Resume}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='*' component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
