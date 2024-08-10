import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/Themes/default'
import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify'

import { Router } from './routes/Router'
import { AuthProvider } from './context/AuthContext'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (

    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <AuthProvider>
          <Router />
          <ToastContainer position='top-center' autoClose={1500} />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}