import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { Typography, Box, Container, useTheme } from '@mui/material';

import { statistics } from '../../../data/hero';
import CountAccelerateEffect from '../common/CountAccelerateEffect'
import ShootingStarLineDivider from '../common/ShootingStarLineDivider'
import CustomSection from '../common/CustomSection';

const Statistics = () => {

    const theme = useTheme();

    return (
        // <Box sx={{ height: { xs:'650px', md: '400px'} }}>
        <CustomSection>
            <ParallaxBanner style={{ height: '100%' }}>
                <ParallaxBannerLayer image={statistics.backgroundImage} speed={-25} />
                <ParallaxBannerLayer style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', height: '100%' }}>
                    <Container sx={{
                        py: 10,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}>
                        {
                            statistics.data.map((item, index) => {
                                return (
                                    <Box sx={{
                                        py: { xs: 8, md: 0 },
                                        width: '100%',
                                        height: '100%',
                                        borderRight: { xs: 'none', md: index < (statistics.data.length - 1) ? '1px solid white' : 'none' },
                                        borderBottom: { xs: index < (statistics.data.length - 1) ? '1px solid white' : 'none', md: 'none' },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }} key={index}>
                                        <CountAccelerateEffect variant='h2' sx={{ color: theme.palette.primary.contrastText, fontWeight: '500' }} value={item.statsValue} ></CountAccelerateEffect>
                                        <Typography variant='h6' sx={{ color: theme.palette.primary.contrastText, fontWeight: '500', textTransform: 'uppercase' }}>{item.statsFor}</Typography>
                                    </Box>
                                )
                            })
                        }
                    </Container>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        {/* </Box> */}
        </CustomSection>
    )
}

export default Statistics