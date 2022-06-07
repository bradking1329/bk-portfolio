import { Avatar, Button, Card, CardActions, CardContent, Chip, Popover, Slide, Typography } from "@mui/material"
import { AccountTree as AccountTreeIcon, Home as HomeIcon, Info as InfoIcon, DataObject as DataObjectIcon, Code as CodeIcon } from '@mui/icons-material';
import { useMemo, useState } from 'react'

interface SkillItem {
    label: string,
    color: 'primary' | 'secondary' | 'default' | 'success' | 'error' | 'warning' | 'info'
}

export const AboutMePage = () => {
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
                    {/* <Chip label='React' color="primary" sx={{mt: 0.5, mr: 0.5}} /> 
                    <Chip label='Next.js' color="primary" sx={{mt: 0.5, mr: 0.5}} /> 
                    <Chip label='Node.js' color="secondary" sx={{mt: 0.5, mr: 0.5}} /> 
                    <Chip label='Nest.js' color="secondary" sx={{mt: 0.5, mr: 0.5}} /> 
                    <Chip label='Kubernetes' color='success' sx={{mt: 0.5, mr: 0.5}} /> 
                    <Chip label='Javascript' color='info' sx={{mt: 0.5, mr: 0.5}} /> 
                    <Chip label='Typescript' color='info' sx={{mt: 0.5, mr: 0.5}} /> */}
            </CardContent>
            <CardActions>
              <Button size="small">See More</Button>
            </CardActions> 
            
        </Card>
       </>
    )
}