import React, { useState } from 'react'
import './App.css'
import { Footer, Header } from './Components'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
