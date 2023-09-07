import { Divider, Typography } from '@mui/material';
import { Content, SectionType } from '../types';

interface AboutMeSectionProps {
  title: string;
  content: Content[];
  type: SectionType;
}

export const AboutMeSection = ({
  title,
  content,
  type,
}: AboutMeSectionProps) => {
  return (
    <>
      <Divider sx={{ pt: 2 }}>
        <Typography variant="subtitle2">{title}</Typography>
      </Divider>
      {content.map((c, i) => (
        <Typography variant="body2" key={i}>
          {c.title} - <i>{c.companyOrDistributor}</i>, {c.startDate}
        </Typography>
      ))}
    </>
  );
};
