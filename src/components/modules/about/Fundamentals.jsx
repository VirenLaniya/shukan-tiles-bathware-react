import React from 'react';

//#region MUI Imports
import { Typography, Box, Container, useTheme } from '@mui/material';
//#endregion

//#region Component Imports
import CustomSection from '../common/CustomSection';
import FadeRevealAnimation from '../common/FadeRevealAnimation';
// import CountAccelerateEffect from '../common/CountAccelerateEffect'
// import ShootingStarLineDivider from '../common/ShootingStarLineDivider'
//#endregion

//#region Data Imports
import { fundamentals } from '../../../data/about';
//#endregion

const Fundamentals = () => {

    const theme = useTheme();

    return (
        <CustomSection sx={{ backgroundColor: theme.palette.background.paper }}>
            <Container sx={{
                // py: 10,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>
                {
                    fundamentals.map((item, index) => {
                        return (
                            <Box sx={{
                                py: { xs: 8, md: 0 },
                                width: '100%',
                                height: '100%',
                                borderRight: { xs: 'none', md: index < (fundamentals.length - 1) ? '1px solid' : 'none' },
                                borderBottom: { xs: index < (fundamentals.length - 1) ? '1px solid' : 'none', md: 'none' },
                                borderColor: theme.palette.primary.main,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} key={index}>
                                <FadeRevealAnimation>
                                    <Box sx={{ width: 64, height: 'auto' }}>
                                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </Box>
                                </FadeRevealAnimation>
                                <FadeRevealAnimation>
                                    <Typography variant='h6' sx={{ color: theme.palette.secondary.contrastText, fontWeight: '500', textTransform: 'uppercase' }}>{item.title}</Typography>
                                </FadeRevealAnimation>
                            </Box>
                        )
                    })
                }
            </Container>
        </CustomSection>
    )
}

export default Fundamentals