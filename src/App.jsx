import React, { useState } from 'react'
import './App.css'
import { Footer, Header } from './Components'
import { LandingPage } from './Pages'
// import { LandingPage } from './Pages'

function App() {

  return (
    <div className="App">
      <Header />
        <LandingPage />
   
      <Footer />
    </div>
  )
}

export default App
