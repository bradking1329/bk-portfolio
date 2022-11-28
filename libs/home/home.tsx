import { Launch as LaunchIcon } from '@mui/icons-material';
import { Card, CardContent, Typography, useTheme } from '@mui/material';
import { AboutMe } from '../about-me/about-me';
import styles from './home.module.scss';

export const HomePage = () => {
  const theme = useTheme();
  return (
    <>
      <AboutMe seeMoreVisible={true} />
      <br />
      <Card sx={{ height: '100%', textAlign: 'center' }} component="div">
        <CardContent>
          <Typography variant="h6">This project</Typography>
          <Typography variant="subtitle1">
            Built with{' '}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme.palette.primary.main,
              }}
              className={styles.externalLink}
            >
              Typescript <LaunchIcon fontSize="inherit" sx={{ mb: -0.4 }} />
            </a>
            ,{' '}
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme.palette.primary.main,
              }}
              className={styles.externalLink}
            >
              React <LaunchIcon fontSize="inherit" sx={{ mb: -0.4 }} />
            </a>
            , and{' '}
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme.palette.primary.main,
              }}
              className={styles.externalLink}
            >
              Next.js <LaunchIcon fontSize="inherit" sx={{ mb: -0.4 }} />
            </a>
            . Deployed via{' '}
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme.palette.primary.main,
              }}
              className={styles.externalLink}
            >
              Vercel <LaunchIcon fontSize="inherit" sx={{ mb: -0.4 }} />
            </a>
            . Utilizes Next.js API routes for backend.
          </Typography>
          {/* TODO: Add add'l info about project 
          <Typography variant="subtitle2" sx={{ pt: 2 }}>
            subtitle2
          </Typography>
          <Typography variant="body2">body2</Typography> */}
        </CardContent>

        {/* TODO: Create page with more info on project 
        <CardActions sx={{ display: 'inline-flex' }}>
          <Button size="small">
            <Link href="/about-me" underline="none">
              See More
            </Link>
          </Button>
        </CardActions> */}
      </Card>
    </>
  );
};
