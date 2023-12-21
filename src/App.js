import React from 'react'
import Navabar from './Navabar'
import News from './News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

export default function App() {
  return (
    <div>
    <Router>
      <Navabar/>
      {/* <News pageSize={5}country="in" category="science"/> */}
      <Route path="/home"> <News key="" pageSize={5}country="in" category=""/></Route>
      <Route path="/science"> <News key='science' pageSize={5}country="in" category="Science"/></Route>
      <Route path="/entertainment"> <News pageSize={5}country="in" category="Entertainment"/></Route>
      <Route path="/general"> <News pageSize={5}country="in" category="General"/></Route>
      <Route path="/health"> <News pageSize={5}country="in" category="Health"/></Route>
      <Route path="/sports"> <News pageSize={5}country="in" category="Sports"/></Route>
      <Route path="/technology"> <News pageSize={5}country="in" category="Technology"/></Route>
      <Route path="/business"> <News pageSize={5}country="in" category="Business"/></Route>
      </Router>
    </div>
    
  )
}
/* business
entertainment
general
health
science
sports
technology */