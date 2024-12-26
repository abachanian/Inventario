import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App.jsx'
import { UserContextProvider } from './assets/components/context/UserContext.jsx';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
})

createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <StrictMode>
    <ThemeProvider theme={theme}>

      <BrowserRouter>
      
        <CssBaseline/>
        <App />
      
      </BrowserRouter>

    </ThemeProvider>

  </StrictMode>,
  </UserContextProvider>
)
