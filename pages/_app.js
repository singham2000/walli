import '../styles/globals.css'
import Navbar from './components/Navbar'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../styles/theme'
function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
