import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useFlags } from '@happykit/flags/client';
import { AccountTree, Code, Home, Info } from '@mui/icons-material';
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Paper,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useMemo } from 'react';
import { Calendly } from '../calendly/calendly';
import { usePrefersDarkMode } from '../hooks/usePrefersDarkMode';

export const GlobalNav = () => {
  const prefersDarkMode = usePrefersDarkMode();
  const { push } = useRouter();
  const flagBag = useFlags();
  const { asPath } = useRouter();
  const showTopNav = useMediaQuery('(min-width: 900px)');
  const pages = useMemo(
    () => [
      { label: 'Home', href: '/', icon: <Home /> },
      { label: 'About me', href: '/about-me', icon: <Info /> },
      { label: 'Projects', href: '/projects', icon: <AccountTree /> },
    ],
    []
  );
  const parentPage = useMemo(() => `/${asPath.split('/')[1]}`, [asPath]);

  return (
    <>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
      {showTopNav ? (
        <AppBar position="static" enableColorOnDark>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Code sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                BK
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map(
                  (page) =>
                    (page.href !== '/about-me' || flagBag?.flags?.aboutMe) && (
                      <Button
                        key={page.label}
                        sx={{
                          my: 2,
                          color:
                            parentPage === page.href
                              ? prefersDarkMode
                                ? 'white'
                                : 'lightblue'
                              : 'inherit',
                          display: 'block',
                        }}
                      >
                        <Link href={page.href}>{page.label}</Link>
                      </Button>
                    )
                )}
              </Box>
              <Calendly
                iconOnly={false}
                sx={{
                  my: 2,
                  color: 'inherit',
                  display: 'block',
                  justifySelf: 'end',
                }}
              />
            </Toolbar>
          </Container>
        </AppBar>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              minWidth: 'fit-content',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1,
              height: '40px',
              backdropFilter: 'blur(3px)',
            }}
          >
            <div style={{ display: 'flex', padding: '4px 8px' }}>
              <Code
                sx={{
                  display: { xs: 'flex', md: 'flex' },
                  mr: 1,
                  marginTop: '4px',
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="p"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                BK
              </Typography>
            </div>
            <Calendly iconOnly={true} sx={{ justifySelf: 'flex-end' }} />
          </div>
          <Container>
            <Paper
              elevation={3}
              sx={{
                minWidth: 'fit-content',
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1,
              }}
            >
              <BottomNavigation
                showLabels={showTopNav}
                value={parentPage}
                onChange={(event, url) => push(url)}
              >
                {pages.map(
                  (page) =>
                    (page.href !== '/about-me' || flagBag?.flags?.aboutMe) && (
                      <BottomNavigationAction
                        key={page.label}
                        label={page.label}
                        value={page.href}
                        icon={page.icon}
                      ></BottomNavigationAction>
                    )
                )}
              </BottomNavigation>
            </Paper>
          </Container>
        </>
      )}
    </>
  );
};
