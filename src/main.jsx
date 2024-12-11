import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { AuthProvider } from './contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AuthProvider>
        <RouterProvider
          future={{
            v7_startTransition: true,
          }}
          router={router}
        />
      </AuthProvider>
    </LocalizationProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
