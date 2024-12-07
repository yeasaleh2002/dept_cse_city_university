import React, { useState } from 'react'
import './App.css'
import { Footer, Header } from './Components'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

function App() {

  return (
    <div className="App">
      <Header />
      <Box sx={{ minHeight: "50vh" }}>
        <Outlet />
      </Box>
      <Footer />
    </div>
  )
}

export default App
