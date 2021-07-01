import React, { useState } from 'react'
import Home from './Pages/Home'
import Results from './Pages/Results'
import {Route} from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <div className="App">
      <Route exact path="/">
      <Home />
      </Route>
      <Route  path="/Result">
      <Results />
      </Route>
    
   
    </div>
  )
}

export default App
