import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/projects' component={Projects}></Route>
          <Route path='/resume' component={Resume}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='*' component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App