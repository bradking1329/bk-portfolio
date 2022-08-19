import { Avatar, Button, Card, CardActions, CardContent, Chip, Link, Popover, Slide, Typography } from "@mui/material"
import { AccountTree as AccountTreeIcon, Home as HomeIcon, Info as InfoIcon, DataObject as DataObjectIcon, Code as CodeIcon } from '@mui/icons-material';
import { useMemo, useState } from 'react'

interface SkillItem {
    label: string,
    color: 'primary' | 'secondary' | 'default' | 'success' | 'error' | 'warning' | 'info'
}

interface AboutMeProps {
    seeMoreVisible: boolean
}

export const AboutMe = ({ seeMoreVisible }: AboutMeProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const skillLegend: SkillItem[] = useMemo(() => [{ label: 'Frontend', color: 'primary'}, { label: 'Backend', color: 'secondary'}, { label: 'Operations', color: 'success'}, { label: 'Languages', color: 'info'}], [])
    const skills: SkillItem[] = useMemo(() => [
        { label: 'React', color: 'primary'}, 
        { label: 'Next.js', color: 'primary'}, 
        { label: 'Node.js', color: 'secondary'}, 
        { label: 'Nest.js', color: 'secondary'}, 
        { label: 'Kubernetes', color: 'success'}, 
        { label: 'Javascript', color: 'info'},
        { label: 'Typescript', color: 'info'}
    ], [])

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
        <Card sx={{ height: '100%', textAlign: 'center'}} component='div'>
            <CardContent>
                <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                align='right'
                >
                    <InfoIcon />
                </Typography>
                <Popover
                id="mouse-over-popover"
                sx={{
                pointerEvents: 'none',
                textAlign: 'center',
                }}
                TransitionComponent={Slide}
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
                    { skillLegend.map((s, i) => {
                        return (
                            <div key={s.label}>
                                <Chip label={s.label} color={s.color} sx={{mb: 1, mt: i === 0 ? 1 : 0}} /> 
                                <br />
                            </div>
                        )
                    })}
                </Popover>
                <Typography variant='h6'>
                    Brad King
                </Typography>
                <Typography variant='subtitle1'>
                    Software Engineer
                </Typography>
                { skills.map(s => {
                    return (
                        <Chip key={s.label} label={s.label} color={s.color} sx={{mt: 0.5, mr: 0.5}} /> 
                    )
                })}
                {!seeMoreVisible && (<><Typography variant='subtitle2' sx={{pt: 2}}>
                    Placeholder subtitle
                </Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </Typography></>)}
            </CardContent>
            { seeMoreVisible && <CardActions sx={{ display: 'inline-flex' }}>
              <Button size="small"><Link href='/about-me' underline="none">See More</Link></Button>
            </CardActions>  }
            
        </Card>
       </>
    )
}