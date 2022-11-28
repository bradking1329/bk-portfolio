import { Info as InfoIcon } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Link,
  Popover,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { AboutMeSection } from './about-me-section/about-me-section';
import {
  aboutMeContent,
  aboutMePassion,
  allExp,
  skillLegend,
  skills,
} from './constants';

interface AboutMeProps {
  seeMoreVisible: boolean;
}

export const AboutMe = ({ seeMoreVisible }: AboutMeProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Avatar
        alt="Brad King"
        src="./bk.jpg"
        sx={{ width: 200, height: 200, margin: 'auto' }}
      />
      <Card sx={{ height: '100%', textAlign: 'center' }} component="div">
        <CardContent>
          <Typography
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            align="right"
          >
            <InfoIcon color="action" />
          </Typography>
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: 'none',
              textAlign: 'center',
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            {skillLegend.map((s, i) => {
              return (
                <div key={s.label}>
                  <Chip
                    label={s.label}
                    color={s.color}
                    sx={{ mb: 1, mt: i === 0 ? 1 : 0 }}
                  />
                  <br />
                </div>
              );
            })}
          </Popover>
          <Typography variant="h5">Brad King</Typography>
          <Typography variant="h6">Full Stack Software Engineer</Typography>
          {skills.map((s) => {
            return (
              <Chip
                key={s.label}
                label={s.label}
                color={s.color}
                sx={{ mt: 0.5, mr: 0.5 }}
              />
            );
          })}
          <Typography variant="subtitle1" sx={{ pt: 2 }}>
            About me
          </Typography>
          <Typography variant="body1">
            {aboutMeContent}
            <br />
            {aboutMePassion}
          </Typography>
          {!seeMoreVisible && (
            <>
              <AboutMeSection
                title={'Experience'}
                content={allExp}
                type={'experience'}
              />
            </>
          )}
        </CardContent>
        {seeMoreVisible && (
          <CardActions sx={{ display: 'inline-flex' }}>
            <Button size="small">
              <Link href="/about-me" underline="none">
                See More
              </Link>
            </Button>
          </CardActions>
        )}
      </Card>
    </>
  );
};
