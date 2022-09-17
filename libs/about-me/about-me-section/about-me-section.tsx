import { Divider, Typography } from "@mui/material";
import { Experience } from "../types";

interface AboutMeSectionProps {
    title: string;
    content: Experience[];
    type: 'experience' | 'certifications';
}

export const AboutMeSection = ({ title, content }: AboutMeSectionProps) => {
    return (
        <>
            <Divider sx={{pt: 2 }}>
                <Typography variant='subtitle2'>
                    {title}
                </Typography>
            </Divider>
            {content.map((c, i) => (<Typography variant="body2" key={i}>
               {c.jobTitle} - <i>{c.company}</i>, {c.startDate}
            </Typography>))}
            
        </>
    )
}