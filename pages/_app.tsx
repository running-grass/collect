import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css';

const theme = createTheme();
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  </ThemeProvider>
}