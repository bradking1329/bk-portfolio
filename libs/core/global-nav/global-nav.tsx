import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState, useMemo } from 'react';
import { BottomNavigation, BottomNavigationAction, Container, Paper } from '@mui/material'
import { AccountTree as AccountTreeIcon, Home as HomeIcon, Info as InfoIcon, DataObject as DataObjectIcon, Code as CodeIcon } from '@mui/icons-material';
import { useFlags } from "@happykit/flags/client";
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { usePrefersDarkMode } from '../hooks/usePrefersDarkMode';

export const GlobalNav = () => {
    const prefersDarkMode = usePrefersDarkMode();
    const flagBag = useFlags();
    const { asPath } = useRouter();
    const showTopNav = useMediaQuery('(min-width: 900px)');
    const [value, setValue] = useState('');
    const test = useMemo(() => console.log(flagBag), [flagBag])
    const pages = useMemo(() => [{label: 'Home', href: '/'}, {label: 'About me', href: '/about-me'}, {label: 'Projects', href: '/projects'}], [])
  
    return (
      <>
      {showTopNav ? (
        <AppBar position="static" enableColorOnDark>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
                {pages.map((page) => (
                  <Button
                    key={page.label}
                    onClick={() => console.log('click')}
                    sx={{ my: 2, color: asPath === page.href ? prefersDarkMode ? 'white' : 'lightblue' : 'inherit', display: 'block' }}
                  >
                    <Link href={page.href}>{page.label}</Link>
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>)
        : (
        <Container>
          <Paper elevation={3} sx={{minWidth: 'fit-content',position: 'fixed', bottom: 0, left: 0, right: 0}}>
            <BottomNavigation showLabels={showTopNav} value={value} onChange={(event, newValue) => setValue(newValue)}>
              <BottomNavigationAction label="Home" value='' icon={<HomeIcon />} />
              {flagBag?.flags?.aboutMe && <BottomNavigationAction label="About me" value='about-me' icon={<InfoIcon />} />}
              <BottomNavigationAction label="Projects" value='projects' icon={<AccountTreeIcon />} />
            </BottomNavigation>
          </Paper>
        </Container>)
      }
      </>
    )}