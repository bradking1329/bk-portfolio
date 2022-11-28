import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { useMemo } from 'react';
import '../flags.config';
import { GlobalNav } from '../libs/core/global-nav/global-nav';
import { usePrefersDarkMode } from '../libs/core/hooks/usePrefersDarkMode';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const prefersDarkMode = usePrefersDarkMode();
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <GlobalNav />
          <Container
            sx={{
              paddingTop: '40px',
              paddingBottom: '80px',
              minHeight: '100%',
            }}
          >
            <Component styles={{ position: 'relative' }} {...pageProps} />
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
};

export default MyApp;
