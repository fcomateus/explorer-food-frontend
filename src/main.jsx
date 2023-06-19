import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { MenuHandler } from './hooks/menu'
import { AuthProvider } from './hooks/auth'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <MenuHandler>
          <Routes/>
        </MenuHandler>
      </AuthProvider>    

    </ThemeProvider>
  </React.StrictMode>,
)
