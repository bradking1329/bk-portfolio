import '../styles/globals.scss';
import '../flags.config'
import type { AppProps } from 'next/app';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { useMemo, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Container, Paper, Toolbar, Typography, Button, Box } from '@mui/material'
import { AccountTree as AccountTreeIcon, Album as AlbumIcon, Home as HomeIcon, Info as InfoIcon } from '@mui/icons-material';
import { AppBar } from '@mui/material';
import { GlobalNav } from '../libs/core/global-nav/global-nav';
import { usePrefersDarkMode } from '../libs/core/hooks/usePrefersDarkMode';

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

const MyApp = ({ Component, pageProps }: AppProps) => {
  const prefersDarkMode = usePrefersDarkMode();
  const showTopNav = useMediaQuery('(min-width: 900px)');
  const [value, setValue] = useState('');
  const pages = ['Home', 'About me', 'Projects'];
  const theme = useMemo(() => createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
      }
    }), [prefersDarkMode]);
  

  return (
  <ThemeProvider  theme={theme}>
    <CssBaseline>
    <GlobalNav />
      <Container sx={{ paddingTop: '20px', paddingBottom: '80px'}}>
        <Component styles={{position: 'relative'}} {...pageProps} />
        </Container>      
    </CssBaseline>
  </ThemeProvider>)
}

export default MyApp
