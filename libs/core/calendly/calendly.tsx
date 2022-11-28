import { CalendarMonth } from '@mui/icons-material';
import { Button, SxProps, Theme } from '@mui/material';
import { useState } from 'react';
import { PopupModal } from 'react-calendly';

interface CalendlyProps {
  iconOnly: boolean;
  sx?: SxProps<Theme>;
}

export const Calendly = ({ iconOnly, sx }: CalendlyProps) => {
  const [showCalendly, setShowCalendly] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setShowCalendly(!showCalendly);
        }}
        sx={sx}
      >
        {iconOnly ? <CalendarMonth color="action" /> : 'Schedule a meeting'}
      </Button>
      {typeof document !== 'undefined' && (
        <PopupModal
          url="https://calendly.com/bradwking/30min?back=1&month=2022-11"
          onModalClose={() => setShowCalendly(false)}
          open={showCalendly}
          rootElement={document?.getElementById('root')!}
        />
      )}
    </>
  );
};
