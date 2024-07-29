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
