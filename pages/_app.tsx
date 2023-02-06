import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import '../styles/globals.css';

const theme = createTheme();
export default function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
}