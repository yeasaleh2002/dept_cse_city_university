import React, { useState } from 'react'
import './App.css'
import { Footer, Header } from './Components'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header />
      <div className="p-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
