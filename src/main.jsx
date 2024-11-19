import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router} />
    </LocalizationProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
