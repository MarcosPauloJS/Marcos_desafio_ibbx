import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from 'styled-components'

const theme = {
  color: {
    primary:  '#263440',
    secondary: '#BD783C',
    textDark: '#12161A',
    textLight: '#FFF',
    background: "#141827",
  },
  breakpoints: {
    xs: 0,
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
  },
  border: {
    radius: "10px",
  },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />

    </ThemeProvider>
  </React.StrictMode>,
)
